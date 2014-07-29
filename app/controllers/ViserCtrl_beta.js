//Retrieves the module KSA_Bladr.controllers, and adds a new controller
angular.module('KSA_Bladr.controllers').
    controller('ViserCtrl', function($scope, $location, $window, BrowseService, MetadataManagerService, FormBuilderService, $http){

        //browse model
        $scope.browse = {};
        $scope.browse.currentStep = 0;
        $scope.browse.currentPage = 1;
        $scope.browse.currentObject = {};
        $scope.browse.numberOfObjects = 0;
        $scope.collection = {};
        
        $scope.selectedMonth;
        $scope.selectedYear;
        $scope.selectedStreetname;     
        $scope.metadata = {};
        
        /**
         * 
         * Moves forward or backwards, according to the integer given
         * 
         * @param integer the number of steps (positivt or negative)
         * @returns void
         */
        $scope.browse.step = function(steps){
            BrowseService.step(steps);
            $scope.browse.updateBrowseAndObject();
            console.log("stepped");
        };
        
        /**
         * Goes to a specific page number TODO: Unused?
         * 
         * @returns void
         */
        $scope.browse.goTo = function(){
            BrowseService.goTo($scope.browse.currentStep);
            $scope.browse.updateBrowseAndObject();
            console.log("went to specific page number");
        };
        
        /**
         * 
         * Steps to a specified id in the content list.
         * Used when parsing the URL
         * 
         * @param integer id of the object
         * @returns void
         */
        $scope.browse.goToId = function(id){
            BrowseService.goToId(id);
            $scope.browse.updateBrowseAndObject();
            console.log("went to id");
        };
        
        /**
         * Updates the image, current step and metadata
         * Is used when the viewer is instantiated or the user browses
         * @returns void 
         */
        $scope.browse.updateBrowseAndObject = function(){
            $scope.browse.currentObject = BrowseService.getCurrentContent();
            //BrowseService.currentPage = 0;
            $scope.browse.currentStep = BrowseService.currentStep+1;
            $scope.browse.imageUrl = BrowseService.getCurrentPage();
            $scope.collection = MetadataManagerService.collectionInfo;
            $scope.browse.metadata = MetadataManagerService.getMetadataString($scope.browse.currentObject.metadata);
            var settings = {imageUrl : $scope.browse.imageUrl};
            $window.changeImageAngular(settings);            
        };
 
        $scope.loadCollectionInfo = function(){
            MetadataManagerService.getCollectionInfo()
            //If no data is loaded, put in dummy data. This is only for test purposes
            ['catch'](function(){
                $scope.collection = {'short_name':"Mandtal", 'name' : 'Politiets mandtal er en oversigt over hvem der boede i København i perioden 1866-1923', 'gui_link': 'http://www.kbharkiv.dk/wiki/mandtal'};
            })
            //The metadata and image informations are updated no matter what
            .finally(function(){
                $scope.browse.updateBrowseAndObject();
            });
        };
        
         $scope.getLocation = function(val) {
            //return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
            return $http.get('http://www.politietsregisterblade.dk/api/1?type=road', {
              params: {
                name: val,
                limit: 20
              }
            }).then(function(res){
              var addresses = [];
              var data = res.data.slice(0,res.data.length-1);
              angular.forEach(data, function(item){
                addresses.push(item.name);
              });
              return addresses;
            });
          };
        
        $scope.browse.loadContent = function(){
            //if(MetadataManagerService.canLoadObjects()){
                var mockArr = [
                    {
                        'id' : 2,
                        'metadata' : [{'station' : 3},{ 'roll' : '24'}],
                        'images' : [
                            'http://www.kbhkilder.dk/collections/mandtal/donor_0001/project_4804/007529669_1367345514/007529669_00004.jpg',
                            'http://www.kbhkilder.dk/collections/mandtal/donor_0001/project_4804/007529669_1367345514/007529669_00004.jpg'
                        ]
                    },
                    {
                        'id' : 3,
                        'metadata' : [{'station' : 3},{ 'roll' : '25'}],
                        'images' : [
                            'http://www.kbhkilder.dk/collections/mandtal/donor_0001/project_4804/007529669_1367345514/007529669_00005.jpg',
                            'http://www.kbhkilder.dk/collections/mandtal/donor_0001/project_4804/007529669_1367345514/007529669_00005.jpg'
                        ]
                    },
                    {
                        'id' : 4,
                        'metadata' : [{'station' : 4},{ 'roll' : '29'}],
                        'images' : [
                            'http://www.kbhkilder.dk/collections/mandtal/donor_0001/project_4804/007529669_1367345514/007529669_00006.jpg',
                            'http://www.kbhkilder.dk/collections/mandtal/donor_0001/project_4804/007529669_1367345514/007529669_00006.jpg'
                        ]
                    },
                    {
                        'id' : 4,
                        'metadata' : [{'station' : 4},{ 'roll' : '29'}],
                        'images' : [
                            'http://www.kbhkilder.dk/collections/mandtal/donor_0001/project_4804/007529669_1367345514/007529669_00007.jpg',
                            'http://www.kbhkilder.dk/collections/mandtal/donor_0001/project_4804/007529669_1367345514/007529669_00007.jpg'
                        ]
                    }                        
                ];
                BrowseService.setContent(mockArr);
                $scope.browse.step(0);
                $scope.browse.numberOfObjects = BrowseService.contentLength();
                $scope.metadata.canLoadObjects = true;
                console.log("Content loaded");
            //}
        };
        
        /*
        * When the controller starts:
        * Get metadata levels
        * Get form data
        * Build form from form data
        * Add event handlers?
        */
        $scope.metadata.filterChanged = function(filterName){
            var value = $scope[filterName]();
            MetadataManagerService.changeFilterValue(filterName, value);
            $scope.metadata.canLoadObjects = MetadataManagerService.canLoadObjects();
        };
        
        /*
        * Used when filters for the current collection are created for the first time
        */
       
        $scope.metadata.setMetadataLevelsFilters = function(){
            MetadataManagerService.getMetadataLevels().then(
                function(){
              //      $scope.createForm();
                },
                function(){
                    console.log("Could not load metadata levels");
            });            
        };
        
        /*$scope.createForm = function(){
            //$scope.formTemplate = FormBuilderService.createFormData(MetadataManagerService.levels);
            //this.$render();
            console.log(FormBuilderService.createFormData(MetadataManagerService.levels));
        };*/
        $scope.convertCollectionNameToId = function(name){
            if(name == 'mandtaller')
                MetadataManagerService.config(1);
        };
        
        //The controller parses the URL on init
        $scope.init = function(){
            /*
            * Two cases:
            * 1: A collection is given in the format index.html#!/mandtaller/
            * The data for the collection is loaded, displaying no images and using no filters
            * 2: A specific image i given using the formation index.html#!registerblade/3242343/2, where id and page of the object is given
            * The data for the collection is loaded, the metadata for the object is loaded, and the filters is rebuilt
            */
            var pathArr = $location.path().split("/");
            
            //TODO: This  is just a test:
            $scope.metadata.adresses = [{text:"test"},{text:"test2"}];
            $scope.metadata.years = [{text:"1866"},{text:"1867"},{text:"1868"},{text:"1869"},{text:"1870"},{text:"1871"},{text:"1872"},{text:"1873"},{text:"1874"},{text:"1875"},{text:"1876"},{text:"1877"}];
            $scope.metadata.months = [{text:"MAJ"},{text:"NOV"}];
            $scope.metadata.shareLink = "http://kbharkiv.dk/test";
            $scope.metadata.license = "CC BY";
            $scope.metadata.canLoadObjects = true;
            
            $scope.convertCollectionNameToId("mandtaller");
            $scope.loadCollectionInfo();
            $scope.browse.loadContent();
            $scope.browse.updateBrowseAndObject();

            

           
        /*
            //If no collection is given, mandtaller is assumed
            if(pathArr.length == 1){
                $scope.convertCollectionNameToId("mandtaller");
                $scope.loadCollectionInfo();
                $scope.metadata.setMetadataLevelsFilters();
            }
            
            //Only collection name is given. Load collection, display filters and wait for user input
            if(pathArr.length == 2){
                $scope.convertCollectionNameToId(pathArr[1]);
                $scope.loadCollectionInfo();
               // $scope.metadata.setMetadataLevelsFilters();
            }
            
            //Collection and object id is given. Load collection, go to object, get filters
            if(pathArr.length == 3){
                $scope.convertCollectionNameToId(pathArr[1]);
                $scope.loadCollectionInfo();
               // $scope.metadata.setMetadataLevelsFilters();
                $scope.browse.goToId(pathArr[2]); 
            }
            
            //Collection, object and page is given, load collection, go to object, display page, get filters
            if(pathArr.length == 4){
                $scope.convertCollectionNameToId(pathArr[1]);
                $scope.loadCollectionInfo();
               // $scope.metadata.setMetadataLevelsFilters(); 
                $scope.browse.goToId(pathArr[2]);
              //  BrowseService.goToPage(pathArr[3]);
            }*/
        };
        
        $scope.init();
});