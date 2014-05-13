//Retrieves the module KSA_Bladr.controllers, and adds a new controller
angular.module('KSA_Bladr.controllers').
    controller('ViserCtrl', function($scope, $location, BrowseService, MetadataManagerService, FormBuilderService){
        $scope.welcomeText = "";
        $scope.formTemplate = false;
  $scope.testformTemplate = {};
        $scope.sayHallo = function(){
            $scope.welcomeText = "hejsa";
        };        
        
        /*
        * When the controller starts:
        * Get metadata levels
        * Get form data
        * Build form from form data
        * Add event handlers?
        *
        */
        
        $scope.filterChanged = function(filterName){
            var value = $scope[filterName]();
            MetadataManagerService.changeFilterValue(filterName, value);
        };
        
        /*
        * Used when filters for the current collection are created for the first time
        */
        $scope.setMetadataLevelsFilters = function(){
            MetadataManagerService.getMetadataLevels().then(
                function(){
                    $scope.createForm();
                },
                function(){
                    console.log("Could not load metadata levels");
            });            
        };
        
        $scope.step = function(steps){
            BrowseService.step(steps);
            $scope.currentObject = BrowseService.getCurrentContent();
        };
        
        $scope.createForm = function(){
            $scope.formTemplate = FormBuilderService.createFormData(MetadataManagerService.levels);
            this.$render();
        };
        
        //The controller parses the URL on init
        $scope.init = function(){
            /*
            * Two cases:
            * 1: A collection is given in the format index.html#!/mandtaller/
            * The data for the collection is loaded, diaplying no images and using no filters
            * 2: A specific image i given using the formation index.html#!registerblade/3242343/2, where id and page of the object is given
            * The data for the collection is loaded, the metadata for the object is loaded, and the filters is rebuilt
            */
            MetadataManagerService.config(1,"hirarchy");
            var pathArr = $location.path().split("/");
            
            if(pathArr.length == 1){
                MetadataManagerService.collection_name = "mandtaller";
                $scope.setMetadataLevelsFilters();
            }
            
            //Only collection name is given. Load collection, display filters and wait for user input
            if(pathArr.length == 2){
                MetadataManagerService.collection_name = pathArr[1];
                $scope.setMetadataLevelsFilters();
            }
            
            //Collection and object is given. Load collection, go to object, get filters
            if(pathArr.length == 3){
                MetadataManagerService.collection_name = pathArr[1];
                $scope.setMetadataLevelsFilters();
                BrowseService.goToId(pathArr[2]); 
                $scope.currentObject = BrowseService.getCurrentContent();
            }
            
            //Collection, object and page is given, load collection, go to object, display page, get filters
            if(pathArr.length == 4){
                MetadataManagerService.collection_name = pathArr[1];
                $scope.setMetadataLevelsFilters();
                BrowseService.goToId(pathArr[2]);  
                BrowseService.toToPage(pathArr[3]);
                $scope.currentObject = BrowseService.getCurrentContent();
            }
        };
        
        $scope.init();
});