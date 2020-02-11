/**
 * MetadataFilterService
 * This service is responsible for retrieving and handling the metadata levels given in
 * the central configuration object, which this service depends on.
 *
 * The main responsibilities are:
 * 1) Receive the levels of metadata from the server
 * 2) Receive the metadata for each level according to the settings
 *    (preset, typeahead, getallbyfilter) and filters given by other levels
 * 3) Report if all required filters is set
 * 4) Load image collections based on the filters set
 *
 */

//Getting the main module
var app = angular.module('KSA_Bladr.services');

app.service('MetadataManagerService', function($http, $q, URLBuilderService){
    //Private methods and variables goes here
    var privates = {};

    //Public methods and variables
    var pubs = {};

    //The level is the same as a possible filter. TODO: Change the name
    pubs.levels = [];
    pubs.metadataType = null;
    pubs.collection_id = null;
    pubs.collectionInfo = {};
    pubs._collectionInfoId = 0;

    pubs.config = function(collection_id){
        pubs.collection_id = collection_id;
    };

    pubs.getCollectionInfo = function(){
        var deferred = $q.defer();
        if(pubs._collectionInfoId !== pubs.collection_id){
            $http.jsonp(URLBuilderService.collectionInfoUrl(pubs.collection_id))
            .success(function(data, status, headers) {
                pubs.collectionInfo = data[0];
                deferred.resolve(data[0]);
            })
            .error(function(){
                deferred.reject();
                throw "Couldn't load collection info";
            });
        }
        else{
            deferred.resolve();
        }
        return deferred.promise;
    };

    pubs.getCollections = function(){
        var deferred = $q.defer();
        $http.jsonp(URLBuilderService.collectionsUrl())
            .success(function(data, status, headers) {
                deferred.resolve(data);
            })
            .error(function(){
                deferred.reject();
                throw "Couldn't load collections";
            });
            return deferred.promise;
    };

    //Retrieves metadata levels for the given collection
    pubs.getMetadataLevels = function(){
        var deferred = $q.defer();
        $http.jsonp(URLBuilderService.metadataLevelsUrl(pubs.collection_id))
        .success(function(data, status, headers) {
            pubs.loadAndOrderLevels(data);
            pubs.metadataType = data.levels_type;
            deferred.resolve(pubs.levels);
        })
        .error(function(){
            deferred.reject("Could not load metadata levels");
        });

        return deferred.promise;
    };

    //Retrieves objects with the given filters
    pubs.getObjects = function(){
        var deferred = $q.defer();
        $http.jsonp(URLBuilderService.objectsUrl(pubs.collection_id, null, pubs.getFilters()))
        .success(function(data, status, headers) {
            deferred.resolve(data);
        })
        .error(function(){
            deferred.reject();
            throw "Couldn't load objects";
        });

        return deferred.promise;
    };

    //Retrieves object with the given id
    pubs.getObject = function(id){
        var deferred = $q.defer();
        $http.jsonp(URLBuilderService.objectUrl(pubs.collection_id, id))
        .success(function(data, status, headers) {
            deferred.resolve(data);
        })
        .error(function(data, status, headers, config){
            deferred.reject();
            throw "Couldn't load object with id " + id;
        });

        return deferred.promise;
    };

    //Retrieves object with the given id
    pubs.getObjectsByUnit = function(unit_id){
        var deferred = $q.defer();
        $http.jsonp(URLBuilderService.objectByUnitUrl(pubs.collection_id, unit_id))
        .success(function(data, status, headers) {
            deferred.resolve(data);
        })
        .error(function(data, status, headers, config){
            deferred.reject();
            throw "Couldn't load objects for unit_id " + unit_id;
        });

        return deferred.promise;
    };

    pubs.fillFiltersByItem = function(item){
        for(var i = 0; i < pubs.levels.length; i++){
            if(item[pubs.levels[i].name])
                pubs.levels[i].filter_value = item[pubs.levels[i].name];
        }
    };

    pubs.loadAndOrderLevels = function(data){
        pubs.levels = data;

        pubs.levels.sort(function(a,b){return a.order-b.order});

        pubs.type = data.type;
    };

    //Gets metadata for the given level based on the filters
    pubs.getMetadata = function(level){
        var deferred = $q.defer();
        var request = URLBuilderService.metadataUrl(pubs.collection_id, level, pubs.getFilters());
        var currentLevel = 0;
        var shouldGetData = false;
        for(var j = 0;j<pubs.levels.length;j++){
            //If the data has not already been loaded, or the request is updated, the data is loaded
            if(pubs.levels[j].name === level && (pubs.doRefreshMetadata(pubs.levels[j].data, request, pubs.levels[j].latest_request))){
                shouldGetData = true;
                currentLevel = j;
                $http.jsonp(request)
                .success(function(data){
                    pubs.levels[j].possibleValues = data;
                    pubs.levels[j].latest_request = request;
                    deferred.resolve({name: pubs.levels[j].name, data: data});
                })
                .error(function(){
                    throw "Could not load metadata for " + pubs.level[j].name;
                    deferred.reject();
                });
                break;
            }
        }

        //Two cases:
        //Hierarchy: Delete data in every level below the given, and receiving data for the one level below the given
        //Flat: No data is loaded as it is supposed that all data is received at once???
        if(pubs.metadataType == 'hierarchy'){
            pubs.clearMetadata(pubs.levels[currentLevel].name);
        }
        else{
            pubs.clearMetadata();
        }

        if(!shouldGetData)
            deferred.resolve();

        return deferred.promise;
    };

    pubs.getMetadataString = function(metadata){
        if(metadata){
            var metadataStr = '';
            var first = true;
            //for(var j = 0; j < metadata.length; j++){
                for(var i = 0; i < pubs.levels.length; i++){
                    if(metadata[pubs.levels[i].name] !== undefined){
                        var gui = pubs.levels[i].gui_name + ' ';
                        if(pubs.levels[i].gui_hide_name)
                            gui = "";

                        if(first){
                            first = false;
                        }
                        else{
                            gui = gui.toLowerCase();
                        }
                        if(!pubs.levels[i].gui_hide_value){
                            metadataStr = metadataStr + gui + metadata[pubs.levels[i].name] + ', ';
                        }
                    }
                }
           // }

            return metadataStr.substring(0, metadataStr.length-2);
        }
        else{
            return "";
        }
    };

    pubs.getStarbasRef = function(metadata, starbas_field_name){
        if(starbas_field_name){
            return '<a href="https://www.starbas.net/avmateriale.php?av_stam_id=' + metadata[starbas_field_name] + '" target="_blank">' + 'se i Starbas' + '</a>';
        }
        return false;
    };

    //Checks if the metadata should be updated
    pubs.doRefreshMetadata = function(data, request, latestRequest){
        if(latestRequest !== request)
            return true;

        if(data.length == 0)
            return true;

        return false;
    };

    //Returns filters in format {"name":"station","value":1}
    pubs.getFilters = function(){
        var filters = [];

        for(var i = 0; i< pubs.levels.length; i++){
            if(pubs.levels[i].filter_value !== null && pubs.levels[i].filter_value !== undefined ){
                filters.push({"name" : pubs.levels[i].name, "value" : pubs.levels[i].filter_value});
            }
        }

        return filters;
    };

    //Removes metadata for all level on or below the given level
    pubs.clearMetadata = function(inputLevel){
        var level = inputLevel || 0;

        if(level !== 0){
            for(var i = 0; i < pubs.levels.length; i++){
                if(pubs.levels[i].name == inputLevel){
                    level = i;
                    break;
                }
            }
        }

        //Removes data below the given level if data is to be received from backend
        for(var k = level; k < pubs.levels.length; k++){
            //if(pubs.levels[k].type == "preset" || pubs.levels[k].type == "getallbyfilter"){
                pubs.levels[k].possibleValues = [];
            //}
        }
    };

    pubs.changeFilterValue = function(level, value){
        pubs.removeFilter(level);
        pubs.addFilter({"name":level, "value":value});

        for(var i = 0; i < pubs.levels.length; i++){
            if(pubs.levels[i].name == level && pubs.levels[i+1] !== undefined && pubs.levels[i+1].searchable == true){
                return pubs.getMetadata(pubs.levels[i+1].name);
            }
        }
    };

    //Removes metadata filter
    pubs.removeFilter = function(filterToRemove){
        for(var i = 0; i < pubs.levels.length; i++){
            if(pubs.levels[i].name == filterToRemove)
                pubs.levels[i].filter_value = null;
        }
    };

    //Adds metadata filer
    pubs.addFilter = function(newFilter){
        if(newFilter.name === undefined || newFilter.value === undefined)
            return;
            //throw "New filter requires both name and value";

        for(var i = 0; i < pubs.levels.length; i++){
            if(pubs.levels[i].name == newFilter.name)
                pubs.levels[i].filter_value = newFilter.value;
        }
    };

    //Returns true if all required filters is set
    pubs.canRetrieveObjects = function(){
        var allRequiredFiltersSet = false;
        for(var i = 0; i<pubs.levels.length; i++){
            if(pubs.levels[i].required){
                if(!pubs.levels[i].hasOwnProperty('filter_value') ||
                    pubs.levels[i].filter_value === null ||
                    pubs.levels[i].filter_value == ""){
                    return false;
                }
            }
        }

        return true;
    };

    pubs.reportError = function(collectionId, itemId, errorId){
        var deferred = $q.defer();
        var request = URLBuilderService.errorReportUrl(collectionId, itemId, errorId);

        $http.jsonp(request)
            .success(function(){deferred.resolve();})
            .error(function(){deferred.reject();});

        return deferred.promise;
    };

    return pubs;
});
