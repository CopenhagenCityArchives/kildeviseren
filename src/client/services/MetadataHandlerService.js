/**
 *  The MetadataHandler service is used to share metadata between controllers, as well as configure til MetadataManagerService
 *  so it is always up to date according to selected collection etc.
 */

//Getting the main module
var app = angular.module('KSA_Bladr.services');

app.service('MetadataHandlerService', function(MetadataManagerService, BrowseService, $location, config){
    //Private methods and variables goes here
    var privates = {};

    //Public methods and variables
    var pubs = {};

    //A list of collections
    pubs.collections = [];
    //The current collection
    pubs.collection = {};
    //A list of objects loaded when searching
    pubs.itemsList = [];
    //The current item of the ojects list
    pubs.item = {};
    //A list of possible filters, including type and value, if any
    pubs.filters = [];
    //Wheter or not there is enough filters to perform a search
    pubs.canSearch = false;
    //Collection id
    pubs.collectionId = false;
    //Collection name
    pubs.collectionName = false;
    // Archive name
    pubs.archiveUrlName = config.archiveUrlName;
    //Selected error report (id)
    pubs.selectedErrorReport = -1;
    //Error report message
    pubs.errorReportingStatus= "";
    //Current status
    pubs.status = "";

    pubs.currentPage = BrowseService.currentPage;

    var lastReceivedCollection = false;

    pubs.getCollections = function(){
         return MetadataManagerService.getCollections().then(function(value){
            pubs.collections = value;
            //Removes collections under test
            for(var i = 0; i< pubs.collections.length; i++){
                if(pubs.collections[i].test == true){
                    pubs.collections[i] = null;
                }
            }
         });
    };

    pubs.getCollection = function(id){
        if(id !== lastReceivedCollection){
            MetadataManagerService.config(id);
            lastReceivedCollection = id;
            pubs.collectionId = id;
            return MetadataManagerService.getCollectionInfo().then(function(value){
                pubs.collection = value;
                $location.search('collection', value.id);
                pubs.getLevelsAndValues(value.id);
            });
        }
    };

    pubs.getLevelsAndValues = function(collectionId){
        //Getting levels. When done, set filters and possible values. Some is to be loaded async
        return MetadataManagerService.getMetadataLevels(collectionId).then(function(levels){
            pubs.filters = [];
            var tempFilters = [];
            var promises = [];
            for(var i = 0; i< levels.length; i++){
                var curLevel = levels[i];
                var searchable = false;
                if(curLevel.gui_type == 'typeahead'){
                    searchable = true;
                }

                var possibleValues = curLevel.data || [];
                if(curLevel.searchable === true){
                    tempFilters.push({
                        'name' : curLevel.name,
                        'searchable' : searchable,
                        'placeholder': curLevel.gui_name,
                        'noResultsText' : 'Ingen resultater',
                        'helpText' : curLevel.gui_description,
                        filter_value: 0,
                        possibleValues: possibleValues
                    });


                    //Load data here?
                    if(curLevel.gui_type == 'typeahead' && (i== 0 || (levels[i-1] && levels[i-1].filter_value))){
                        MetadataManagerService.getMetadata(curLevel.name).then(function(nameAndData){
                            pubs.updatePossibleFilterValues(nameAndData.name, nameAndData.data);
                        });
                    }
                }
            }

            pubs.filters = tempFilters;
        });
    };

    pubs.updateFiltersSelectedValues = function(metadata){
        for(var i=0; i<pubs.filters.length;i++){
            if(metadata[pubs.filters[i].name])
                pubs.filters[i].filter_value = metadata[pubs.filters[i].name];
        }
    };

    pubs.updatePossibleFilterValues = function(level, data){
        for(var i = 0; i < pubs.filters.length; i++){
            if(pubs.filters[i].name == level){
                pubs.filters[i].possibleValues = data;
            }
        }
    };

    pubs.updateSelectedFilterValues = function(){
        for(var i = 0; i < pubs.filters.length; i++){
            if(pubs.filters[i].filter_value){
                var promise = MetadataManagerService.changeFilterValue(pubs.filters[i].name, pubs.filters[i].filter_value);
                if(promise){
                    promise.then(function(nameAndData){
                        if(nameAndData){
                            pubs.updatePossibleFilterValues(nameAndData.name, nameAndData.data);
                        }
                    });
                }
            }
            else{
                //Clear all levels possible values after this level
                for(var j = i+1; j < pubs.filters.length; j++){
                    pubs.filters[j].possibleValues = [];
                    pubs.filters[j].filter_value = undefined;
                }
            }
        }
    };

    /*pubs.changeFilter = function(filterName, value){
        if(value){
            //Get and apply filters
            MetadataManagerService.changeFilterValue(filterName, value);
            console.log('filter changed');
        }
    };*/

    pubs.checkSearch = function(){
        pubs.canSearch = MetadataManagerService.canRetrieveObjects();
    };

    pubs.search = function(itemId){
        //Loads the objects from server, and sets the content and length
        pubs.status = "Søger";
        //This is ugly! Syncronizing the two (!) filter arrays
        for(var i = 0; i < pubs.filters.length; i++){
            if(!pubs.filters[i].searchable || pubs.filters[i].filter_value == null || pubs.filters[i].filter_value == undefined){
                MetadataManagerService.levels[i].filter_value = null;

            }
            else{
                 MetadataManagerService.levels[i].filter_value = pubs.filters[i].filter_value;
            }
        }

        MetadataManagerService.getObjects().then(function(value){
            BrowseService.setContent(value);
            if(itemId){
                BrowseService.goToId(itemId);
            }
            else{
                BrowseService.step(0);
            }
            pubs.itemsList = BrowseService.getContent();
            pubs.updateItem();
            pubs.status = "";
        });
    };

    pubs.step = function(steps){
        BrowseService.step(steps);
        pubs.updateItem();
    };

    pubs.goToFirst = function(){
        BrowseService.goToFirst();
        pubs.updateItem();
    };

    pubs.goToLast = function(){
        BrowseService.goToLast();
        pubs.updateItem();
    };

    pubs.goToId = function(id){
        BrowseService.goTo(id);
        pubs.updateItem();
    };

    pubs.goToNumber = function(){
        BrowseService.goTo(pubs.currentPage);
        pubs.updateItem();
    };

    pubs.updateItem = function(){
        var newItem = {};
        newItem = BrowseService.getCurrentContent();
        pubs.errorReportingStatus = "";
        if (newItem) {
            if (pubs.collection.image_type == "image") {
                newItem.imageUrl = BrowseService.getCurrentPage();
                newItem.imageUrlPrint = BrowseService.getCurrentPage();
            } else {
                newItem.imageUrl = null;
                newItem.imageUrlPrint = null;
            }

            newItem.metadataDescription = MetadataManagerService.getMetadataString(newItem.metadata);
            newItem.starbasRef = MetadataManagerService.getStarbasRef(newItem.metadata, pubs.collection.starbas_field_name);
            pubs.item = newItem;
            pubs.currentPage = BrowseService.currentPage;

            $location.search('item', newItem.id);

            // "Permalink" can be the permalink based on configuration or, if not set, the link to the current page
            newItem.permaLink = config.permalinkUrl ? config.permalinkUrl + pubs.collection.id + '/' + pubs.item.id :  $location.absUrl(); //should be: https://kbharkiv.dk/permalink/source/collection/item
        }
        else{
            console.log("Could not get current content in updateItem()");
        }
    };

    pubs.rebuildByItem = function(itemId){
        MetadataManagerService.getObject(itemId).then(function(data){
        pubs.getLevelsAndValues(itemId).then(function(){
            MetadataManagerService.fillFiltersByItem(data[0].metadata);
            pubs.updateFiltersSelectedValues(data[0].metadata);
            pubs.search(itemId);
            });
        });
    };

    pubs.rebuildByUnit = function(unitId){
        MetadataManagerService.getObjectsByUnit(unitId).then(function(data){
            pubs.rebuildByItem(data[0].id);
        });
    };

    pubs.reportError = function(){
        if(pubs.selectedErrorReport != -1){
            MetadataManagerService.reportError(pubs.collectionId, pubs.item.id, pubs.selectedErrorReport).then(
            function(data){
                pubs.errorReportingStatus = pubs.collection.error_confirm;
            },
            function(data){
                pubs.errorReportingStatus = "Kunne ikke sende fejlrapporten";
            });
        }
    };


    return pubs;
});
