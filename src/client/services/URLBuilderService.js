/**
 * URLBuilderService
 * This service is responsible for returning URL's based on given input and request type
 *
 */

//Retrieves the module KSA_Bladr.services, and adds a new services
angular.module('KSA_Bladr.services').
    service('URLBuilderService', function(config){
        //Private methods and variables goes here
        var privates = {};

        //Public methods and variables
        var pubs = {};

        //Generic URL creator. Builds URLs based on collection id (required), metadata level and parameters
        privates.createUrl = function(collectionId, metadataLevel, parameters){
            var url = "";

            if(!collectionId || isNaN(collectionId)){
                return false;
            }

            url = "/" + collectionId;

            if(metadataLevel)
                url = url + "/" + metadataLevel;

            url = url + "?";

            parameters = parameters || false;

            var parametersAdded = false;

            //if parameters is array, add to the url
            if(parameters instanceof Array && parameters.length > 0){
                for(var i = 0; i<parameters.length; i++){
                    url = url + parameters[i].name + "=" + parameters[i].value + "&";
                }
                parametersAdded = true;
            }

            url = url.substring(0, url.length-1);

            if(parametersAdded){
                url = url + "&callback=JSON_CALLBACK";
            }
            else{
                url = url + "?callback=JSON_CALLBACK";
            }

            return encodeURI(url);
        };

        //Url of the remote server, base of all requests
        pubs.remoteServerUrl =  config.apiUrl;

        pubs.collectionsUrl = function(){
            return pubs.remoteServerUrl + 'collections/' + '?callback=JSON_CALLBACK';
        };

        pubs.collectionInfoUrl = function(collectionId){
            if(!collectionId)
                return false;

            return pubs.remoteServerUrl + 'collections/' + collectionId + '?callback=JSON_CALLBACK';
        };


        pubs.metadataLevelsUrl = function(collectionId, metadataLevel, parameters){

            var url = privates.createUrl(collectionId, metadataLevel, parameters);

            if(url)
                return pubs.remoteServerUrl + "levels" + url;

            return false;
        };

        pubs.metadataUrl = function(collectionId, metadataLevel, parameters){

            var url = privates.createUrl(collectionId, metadataLevel, parameters);

            if(url)
                return pubs.remoteServerUrl + "metadata" + url;

            return false;
        };

        pubs.objectsUrl = function(collectionId, metadataLevel, parameters){

            //Parameters are mandatory
            if(!parameters || !(parameters instanceof Array ))
                return false;

            var url = privates.createUrl(collectionId, metadataLevel, parameters);

            if(url)
                return pubs.remoteServerUrl + "data" + url;

            return false;
        };

        pubs.objectUrl = function(collectionId, itemId){
            if(!collectionId || !itemId)
                throw 'Not all parameters given in objectUrl';

            var url = pubs.remoteServerUrl + "data/" + collectionId + '?id=' + itemId + '&callback=JSON_CALLBACK';
            return url;
        };

        pubs.objectByUnitUrl = function(collectionId, unitId){
            if(!collectionId || !unitId)
                throw 'Not all parameters given in objectUrl';

            var url = pubs.remoteServerUrl + "data/" + collectionId + '?unit_id=' + unitId + '&callback=JSON_CALLBACK';
            return url;
        };

        pubs.errorReportUrl = function(collectionId, itemId, errorId){
            return pubs.remoteServerUrl + "error/" + collectionId + "/" + itemId + "/" + errorId + '/?callback=JSON_CALLBACK';
        };

        return pubs;
    }
);
