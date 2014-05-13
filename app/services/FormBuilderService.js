/**
 * FormBuilderService
 * This service is responsible for building JSON-objects used to create dynamic forms
 * 
 */ 

//Retrieves the module KSA_Bladr.services, and adds a new services
angular.module('KSA_Bladr.services').
    service('FormBuilderService', function(){
        //Private methods and variables goes here
        var privates = {};
        
        //Public methods and variables
        var pubs = {};
        
        /**
        *  Returns an array ready to be used to create a form
        * Input: metadata levels
        */ 
        pubs.createFormData = function(metadataLevels){
            var formArr = [];
            
            if(metadataLevels.length == 0)
                return false;
            
            for(var i = 0; i < metadataLevels.length; i++){
                var element = {};
                
                switch(metadataLevels[i].type){
                    case 'preset':
                        element = privates.getSelectList(metadataLevels[i]);
                        break;
                    
                    case 'getallbyfilter':
                        element = privates.getSelectList(metadataLevels[i]);
                        break;
                    
                    case 'autocomplete':
                        element = privates.getAutocomplete(metadataLevels[i]);
                        break;
                }
                
                if(element !== {})
                    formArr.push(element);
            }
            
            //Submit button (is this required??)
            formArr.push({
                "submit": {
                    "type": "submit",
                    "label": "submit"
                }
            });
            
            return formArr;
        };
        
        //Returns a select list. Required parameters: name, description, data
        privates.getSelectList = function(data){
            var formElement = {};
            formElement.name = data.name;
            formElement.caption = data.name;
            formElement.type = "text";
            formElement.options = data.data;
            formElement.eventListener = "ng-change='myModule.filterChanged(" + data.name + ")'";
            
            return formElement;
        };
        
        //Returns a autocomplete list. Required parameters: name, description
        privates.getAutocomplete = function(data){
            var formElement = {};
            formElement.name = data.name;
            formElement.caption = data.name;
            formElement.type = "autocomplete";
            formElement.options = data.data;
            formElement.eventListener = "ng-change='myModule.filterChanged(" + data.name + ")'";    
            formElement.minLength = 3;
            
            return formElement;
        };
        
        return pubs;
    }
);