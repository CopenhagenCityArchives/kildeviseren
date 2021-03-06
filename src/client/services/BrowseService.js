/**
 * BrowseService
 * This service is responsible for browsing around a given array of content
 * based on its length.
 *
 */

//Retrieves the module KSA_Bladr.services, and adds a new services
angular.module('KSA_Bladr.services').
    service('BrowseService', function(){
        //Private methods and variables goes here
        var privates = {};
        privates.content = [];

        //Public methods and variables
        var pubs = {};

        pubs.currentStep = 0;
        pubs.currentPage = 0;

        pubs.setContent = function(newContent){
            if(newContent instanceof Array){
                privates.content = newContent;
                pubs.currentStep = 0;
            }
            else{
                throw ("Input content must be an array!");
            }
        };

        pubs.getCurrentContent = function(){
            return privates.content[pubs.currentStep];
        };

        pubs.getCurrentPage = function(){
            if(privates.content.length !== 0){
                //TODO: No page turning implemented. This always shows the first page
                return privates.content[pubs.currentStep]['images'][0];
            }

            return null;
        };

        pubs.getContent = function(){
            return privates.content;
        };

        pubs.resetContent = function(){
            privates.content = [];
        };

        pubs.contentLength = function(){
            return privates.content.length;
        };

        pubs.goToId = function(id){
            pubs.goTo(0);
            for(var i = 0; i < privates.content.length; i++){
                if(privates.content[i].id == id){
                    pubs.goTo(i+1);
                    return;
                }
            }

            pubs.currentStep = 0;
        };

        pubs.step = function(step){
            //Getting the real step within the range (length) of the content
            var realStep = step;

            //If the step is not within the bounderies, the "real" step is calculated
            if((step > privates.content.length || step < -privates.content.length) && privates.content.length > 0)
                realStep = step % privates.content.length;

            //The new step is set
            var newStep = pubs.currentStep + realStep;

            if(newStep >= privates.content.length){
                pubs.currentStep = -1 + realStep;
            }
            else if(newStep < 0){
                pubs.currentStep = privates.content.length + newStep;
            }
            else{
                pubs.currentStep = newStep;
            }

            if(privates.content.length === 0){
                pubs.currentPage = 0;
            }
            else{
                pubs.currentPage = pubs.currentStep+1;
            }
        };

        pubs.goTo = function(number){
            pubs.step(number-1-pubs.currentStep);
        };

        pubs.goToNext = function(){
            pubs.step(1);
        };

        pubs.goToPrevious = function(){
            pubs.step(-1);
        };

        pubs.goToFirst = function(){
            pubs.goTo(1);
        };

        pubs.goToLast = function(){
            pubs.goTo(pubs.contentLength());
        };

        return pubs;
    }
);
