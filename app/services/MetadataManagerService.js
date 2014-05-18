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
                pubs.collectionInfo = data;
                deferred.resolve();
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
    
    //Retrieves metadata levels for the given collection
    pubs.getMetadataLevels = function(){
        var deferred = $q.defer();
        $http.jsonp(URLBuilderService.metadataLevelsUrl(pubs.collection_id))
        .success(function(data, status, headers) {
            pubs.loadAndOrderLevels(data);
            pubs.metadataType = data.type;
            deferred.resolve();
        })
        .error(function(){
            //deferred.reject();
            //throw "Couldn't load metadata levels";
            //TODO: For demonstration only:
            var data = {"type":"hierarchy","levels":[{"order":2,"gui_name":"Filmruller","gui_description":"Der er mellem 20 og 50 filmruller pr. station. Opdelingen skyldes begr\u00e6nsningen i antallet af billeder p\u00e5 en gammeldags fotofilm","gui_info_link":"http:\/\/www.kbharkiv.dk\/wiki\/registerbladenes-filmruller","name":"roll","type":"getallbyfilter","data_sql":"SELECT id, filmrulle_navn from PRB_filmrulle WHERE station_id = %d","required_filters":["station"],"data":false},{"order":1,"gui_name":"Stationer","gui_description":"Der findes seks stationer baseret p\u00e5 politidistrikternes inddeling, og to baseret p\u00e5 alfabetisk sortering","gui_info_link":"http:\/\/www.kbharkiv.dk\/registerblade\/om-stationerne","name":"station","type":"preset","data_sql":false,"data":[{"name":"Station 1","id":"26"},{"name":"Station 2","id":"29"}]}]};
            pubs.loadAndOrderLevels(data);
            pubs.metadataType = data.type;
            console.log("Loaded mock metadatalevels");
            deferred.resolve();
        });
        
        return deferred.promise;
    };
    
    //Retrieves objects with the given filters
    pubs.getObjects = function(){
        var deferred = $q.defer();
        $http.jsonp(URLBuilderService.objectsUrl(pubs.collection_id))
        .success(function(data, status, headers) {
            deferred.resolve(data);
        })
        .error(function(){
            deferred.reject();
            throw "Couldn't load metadata levels";
        });
        
        return deferred.promise;
    };    
    
    pubs.loadAndOrderLevels = function(data){
        pubs.levels = data.levels;
        
        pubs.levels.sort(function(a,b){return a.order-b.order});
        
        pubs.type = data.type;        
    };
    
    //Gets metadata for the given level based on the filters
    pubs.getMetadata = function(level){
        var deferred = $q.defer();
        var request = URLBuilderService.metadata(pubs.collection_id, level, pubs.getFilters());
        var currentLevel = 0;
        var shouldGetData = false;
        for(var j = 0;j<pubs.levels.length;j++){
            //If the data has not already been loaded, or the request is updated, the data is loaded
            if(pubs.levels[j].name === level && (pubs.doRefreshMetadata(pubs.levels[j].data, request, pubs.levels[j].latest_request))){
                shouldGetData = true;
                currentLevel = j;
                $http.jsonp(request)
                .success(function(data){
                    pubs.levels[j].data = data;
                    pubs.levels[j].latest_request = request;
                    deferred.resolve();
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
            pubs.clearMetadata(currentLevel);
        }
        else{
            pubs.clearMetadata();
        }
        
        if(!shouldGetData)
            deferred.resolve();
        
        return deferred.promise;
    };
    
    pubs.getMetadataString = function(metadata){
        var metadataStr = '';
        var first = true;
        for(var j = 0; j < metadata.length; j++){
            for(var i = 0; i < pubs.levels.length; i++){
                if(metadata[j][pubs.levels[i].name] !== undefined){
                    var gui = pubs.levels[i].gui_name;
                    if(first){
                        first = false;
                    }
                    else{
                        gui = gui.toLowerCase();
                    }
                    metadataStr = metadataStr + gui + ' ' + metadata[j][pubs.levels[i].name] + ', ';
                }
            }
        }
        
        return metadataStr.substring(0, metadataStr.length-2);
    };
    
    //Checks if the metadata should be uploaded
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
        
        for(var i = 0; i< pubs.levels; i++){
            filters.push({"name" : pubs.levels[i].name, "value" : pubs.levels[i].filter});
        }
        
        return filters;
    };
    
    //Removes metadata for all level on or below the given level
    pubs.clearMetadata = function(inputLevel){
        var level = inputLevel || 0;
        //Removes data below the given level if data is to be received from backend
        for(var k = level; k < pubs.levels.length; k++){
            if(pubs.levels[k].type == "preset" || pubs.levels[k].type == "getallbyfilter"){
                pubs.levels[k].data = [];
            }
        }        
    };
    
    pubs.changeFilterValue = function(level, value){
        pubs.removeFilter(level);
        pubs.addFilter({"name":level, "value":value});
        
        for(var i; i < pubs.levels.length; i++){
            if(pubs.levels[i].name == level && pubs.levels[i+1] !== undefined){
                pubs.getMetadata(pubs.levels[i+1].name);
            }
        }
    };
    
    //Removes metadata filter
    pubs.removeFilter = function(filterToRemove){
        for(var i = 0; i < pubs.levels.length; i++){
            if(pubs.levels[i].name == filterToRemove.name)
                pubs.levels[i].filter_value = null;
        }
    };
    
    //Adds metadata filer
    pubs.addFilter = function(newFilter){
        if(newFilter.name === undefined || newFilter.value === undefined)
            throw "New filter requires both name and value";
        
        for(var i = 0; i < pubs.levels.length; i++){
            if(pubs.levels[i].name == newFilter.name)
                pubs.levels[i].filter_value = newFilter.value;
        }
    };
    
    //Returns true if all required filters is set
    pubs.canRetrieveObjects = function(){
        for(var i = 0; i<pubs.levels.length; i++){
            var filter_val = pubs.levels[i].filter_value;
            if(pubs.levels[i].filter_required && (
                !pubs.levels[i].hasOwnProperty('filter_value') || 
                filter_val === null || 
                filter_val == ""))
                return false;
        }
        
        return true;
    };    
    
    return pubs;
});