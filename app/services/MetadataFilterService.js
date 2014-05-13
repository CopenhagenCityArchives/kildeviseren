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

app.service('MetadataFilterService', function($http, URLBuilderService){
    //Private methods and variables goes here
    var privates = {};
    
    //Public methods and variables
    var pubs = {};
    
    //The level is the same as a possible filter. TODO: Change the name
    pubs.levels = [];
    pubs.metadataType = null;
    pubs.collection_id = null;
    
    
    pubs.setMetadataConfiguration = function(obj){
        if(obj.metadataType === null)
            throw "Metadatatype required";
        
        if(obj.levels.length === 0)
            throw "Metadata levels required";
        
        //Iterating through objects, checking if necessary parameters is set
        for (var index = 0; index < obj.levels.length; index++) {
            if(obj.levels[index].order === undefined || obj.levels[index].name === undefined || obj.levels[index].api_name === undefined)
                throw "Data missing in metadata levels";
        }
        
        pubs.levels = obj.levels;
        pubs.metadataType = obj.metadataType;
        
        pubs.metadataStructure = obj;
    };
    
    //Retrieving metadata levels for the given collection
    pubs.getMetadataLevels = function(id){
        $http.get('type=metadatalevels&collection=' + id)
        .success(function(data, status, headers) {
            pubs.levels = data.levels;
            
            pubs.levels.sort(function(a,b){return a.order-b.order});
            
            pubs.type = data.type;
        });
    };
    
    //Removing metadata filter
    pubs.removeFilter = function(filterToRemove){
        for(var i = 0; i < pubs.levels.length; i++){
            if(pubs.levels[i].api_name == filterToRemove.name)
                pubs.levels[i].filter_value = null;
        }
    };
    
    pubs.addFilter = function(newFilter){
        if(newFilter.name === undefined || newFilter.value === undefined)
            throw "New filter requires both name and value";
        
        for(var i = 0; i < pubs.levels.length; i++){
            if(pubs.levels[i].api_name == newFilter.name)
                pubs.levels[i].filter_value = newFilter.value;
        }
    };
    
    pubs.compareFilters = function(filter1, filter2){
        if(filter1 && !filter2)
            return false;
        
        if(!filter1 && filter2)
            return false;
            
        if(filter1 == filter2)
            return true;
            
        if(filter1.length !== filter2.length)
            return false;
        
        for(var i = 0; i<filter1.length;i++){
            var keyMatch = false;
            for(var j = 0; j<filter2.length;j++){
                if(JSON.stringify(filter2[j]) === JSON.stringify(filter1[i]))
                    keyMatch = true;
            }
            if(!keyMatch)
                return false;
        }
        
        return true;
    };
    
    /**
     *  Returns true if all required filters is set
     */ 
    pubs.canRetriveImages = function(){
        for(var i = 0; i<pubs.levels.length; i++){
            if(pubs.levels[i].filter_required && (
                !pubs.levels[i].hasOwnProperty('filter_value') || 
                pubs.levels[i].filter_value == null))
                return false;
        }
        
        return true;
    };
    
    /**
     *  Returns an array ready to be used to create a dform
     */ 
     pubs.getFormData = function(){
        var formArr = {};
        formArr.type = 'GET';
        formArr.action = '#';
        formArr.html = [];
        
        for(var i = 0; i < pubs.levels.length; i++){
            var lvl = pubs.levels[i];
            var selectConfig = {};
            
            selectConfig = {
                    "name" : lvl.name,
                    "caption" : lvl.name,
                    "placeholder" : lvl.name,
                    "type" : "text",
                    "eventListener" : 'ng-change="myModule.filterChanged(' + lvl.name + ')"'                   
            };
            
            switch(lvl.type){
                case 'preset':
                    selectConfig.type = "select";
                    selectConfig.options = lvl.data;
                break;
                
                case 'typeahead':
                    selectConfig.type = "autocomplete";
                    selectConfig.source = lvl.data_sql;
                    selectConfig.minLength = 3;
                break;
                    
                case 'getallbyfilter':
                    selectConfig.type = "select";
                    selectConfig.options = [];
                break;
            }
            
            formArr.html.push(selectConfig);
        }
        
        formArr.html.push({
                    "type" : "submit",
                    "value" : "Vis kilder"
                });
        
        
        return formArr;
     };
    
    /**
     * Gets images collections and the related metadata, based on the given filters
     * An image collection consists of an array of images (for example front and back)
     * and an array of metadata concerning the collection.
     * TODO: It is yet to be decided if metadata corresponds with the metadata levels,
     * or if this is given other places in the configuration object
     * 
     */ 
    pubs.getImageCollectionRequestURL = function(){
        var requestURL = "getImageCollections?collection=1&";
        
        if(!pubs.canRetriveImages())
            return false;
            
        for(var i = 0; i<pubs.levels.length; i++){
            if(pubs.levels[i].filter_value)
                requestURL = requestURL + pubs.levels[i].api_name + "=" + pubs.levels[i].filter_value + "&";
        }        
        
        if(requestURL == "getImageCollections?&collection=1"){
            return false;
        }
        
        requestURL = requestURL.substring(0,requestURL.length-1);
        
        return requestURL;
    };
    
    //Getting metadata for the given level based on the filters
    pubs.getMetadata = function(level){
        //TODO: Implement dynamic collection id
        var request = "collection=1&";
        //Creating the request based on the name and value of each filter
        for(var i = 0; i<pubs.levels.length; i++){
            if(pubs.levels[i].filter_value)
                request = request + pubs.levels[i].api_name + "=" + pubs.levels[i].filter_value + "&";
        }
        
        if(request != "collection=1&"){
            request = request.substring(0,request.length-1) + "&level=" + level;
        }
        else{
            return;
        }
        //Two cases:
        //Hierarchy: Delete data in every level below the given, and receiving data for the one level below the given
        //Flat: No data is loaded as it is supposed that all data is received at once???
        
        var givenLevel = 0;
        for(var j = 0;j<pubs.levels.length;j++){
            //If the data has not already been loaded, or the request is updated, the data is loaded
            if(pubs.levels[j].api_name === level && (pubs.levels[j].data == [] || pubs.levels[j].latest_request !== request)){
                givenLevel = j;
                $http.get(request)
                .success(function(data){
                    pubs.levels[j].data = data;
                    pubs.levels[j].latest_request = request;
                });      
                break;
            }
        }
        
        if(pubs.metadataType == 'hierarchy'){
            //Removing data below the given level if data is to be received from backend
            for(var k = givenLevel; k < pubs.levels.length; k++){
                if(pubs.levels[k].api_name !== false){
                    pubs.levels[k].data = [];
                }
            }
        }
    };
    
    return pubs;
});