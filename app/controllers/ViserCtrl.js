//Retrieves the module KSA_Bladr.controllers, and adds a new controller
angular.module('KSA_Bladr.controllers').
    controller('ViserCtrl', function($scope, $location, BrowseService, MetadataManagerService, FormBuilderService){
        $scope.welcomeText = "";
        $scope.formTemplate = false;
  $scope.testformTemplate = {};
        $scope.sayHallo = function(){
            $scope.welcomeText = "hejsa";
        };        
        
        //browse model
        $scope.browse = {};
        $scope.browse.currentStep = 0;
        $scope.browse.currentObject = {};
        $scope.collection = {};
        
        $scope.browse.step = function(steps){
            BrowseService.step(steps);
            $scope.browse.currentObject = BrowseService.getCurrentContent();
            BrowseService.currentPage = 0;
            $scope.browse.currentStep = BrowseService.currentStep;
            $scope.browse.imageUrl = BrowseService.getCurrentPage();
            $scope.browse.metadata = MetadataManagerService.getMetadataString($scope.browse.currentObject.metadata);
            console.log("stepped");
        };
        
        $scope.browse.goToId = function(id){
            BrowseService.goToId(id);
            $scope.browse.currentObject = BrowseService.getCurrentContent();
            $scope.browse.currentStep = BrowseService.currentStep;
            console.log("went to id");
        };
 
        $scope.loadCollectionInfo = function(){
            MetadataManagerService.getCollectionInfo().then(function(){
                $scope.collection = MetadataManagerService.collectionInfo;
                console.log("loaded collection info");
            });            
        };
        
        $scope.loadContent = function(){
            //if(MetadataManagerService.canLoadObjects()){
                var mockArr = [
                    {
                        'id' : 2,
                        'metadata' : [{'station' : 3},{ 'roll' : '24'}],
                        'images' : [
                            'http://www.politietsregisterblade.dk/registerblade/6/0001/000001a.jpg',
                            'http://www.politietsregisterblade.dk/registerblade/6/0001/000001b.jpg'
                        ]
                    },
                    {
                        'id' : 3,
                        'metadata' : [{'station' : 3},{ 'roll' : '25'}],
                        'images' : [
                            'http://www.politietsregisterblade.dk/registerblade/6/0001/000003a.jpg',
                            'http://www.politietsregisterblade.dk/registerblade/6/0001/000003b.jpg'
                        ]
                    },
                    {
                        'id' : 4,
                        'metadata' : [{'station' : 4},{ 'roll' : '29'}],
                        'images' : [
                            'http://www.politietsregisterblade.dk/registerblade/6/0001/000003a.jpg',
                            'http://www.politietsregisterblade.dk/registerblade/6/0001/000003b.jpg'
                        ]
                    }                    
                ];
                BrowseService.setContent(mockArr);
                $scope.browse.step(0);
            //}
        };
        
        $scope.years = [{year: 1866}, {year:1867}];
        $scope.months = [{month: 'MAJ'}, {month:'NOV'}];
        $scope.selectedMonth;
        $scope.selectedYear;
        $scope.selectedStreetname;
        
	// Public Vars
	$scope.formFields = [
            {
		key: 'Adresse',
		type: 'autocomplete',
		label: 'Adresse',
		options: [
		]
            },
           {
		key: 'År',
		type: 'select',
		label: 'År',
		options: [
		]
            },            
            {
		key: 'month',
		type: 'select',
		label: 'Måned',
                change : 'change()',
		options: [
                    {
                        'name' : 'MAJ',
                        'value' : 'MAJ'
                    },
                    {
                        'name': 'NOV',
                        'value' : 'NOV'
                    }
		]
            }            
        ];

$scope.change = function(){
    console.log("change");
}
	$scope.formOptions = {
		submitCopy: 'Vis'
	};    
        
	$scope.formData = {};          
        
        /*
        * When the controller starts:
        * Get metadata levels
        * Get form data
        * Build form from form data
        * Add event handlers?
        *
        */
        $scope.metadata = {};
        $scope.metadata.filterChanged = function(filterName){
            var value = $scope[filterName]();
            MetadataManagerService.changeFilterValue(filterName, value);
        };
        
        /*
        * Used when filters for the current collection are created for the first time
        */
        $scope.metadata.setMetadataLevelsFilters = function(){
            MetadataManagerService.getMetadataLevels().then(
                function(){
                    $scope.createForm();
                },
                function(){
                    console.log("Could not load metadata levels");
            });            
        };
        
        $scope.createForm = function(){
            //$scope.formTemplate = FormBuilderService.createFormData(MetadataManagerService.levels);
            //this.$render();
            console.log(FormBuilderService.createFormData(MetadataManagerService.levels));
        };
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
            console.log(pathArr.length);
            
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
                $scope.metadata.setMetadataLevelsFilters();
            }
            
            //Collection and object id is given. Load collection, go to object, get filters
            if(pathArr.length == 3){
                $scope.convertCollectionNameToId(pathArr[1]);
                $scope.loadCollectionInfo();
                $scope.metadata.setMetadataLevelsFilters();
                $scope.browse.goToId(pathArr[2]); 
            }
            
            //Collection, object and page is given, load collection, go to object, display page, get filters
            if(pathArr.length == 4){
                $scope.convertCollectionNameToId(pathArr[1]);
                $scope.loadCollectionInfo();
                $scope.metadata.setMetadataLevelsFilters(); 
                $scope.browse.goToId(pathArr[2]);
              //  BrowseService.goToPage(pathArr[3]);
            }
        };
        
        $scope.init();
});