//Retrieves the module KSA_Bladr.controllers, and adds a new controller
angular.module('KSA_Bladr.controllers').
    controller('ViserCtrl', function($scope, $location, $window, BrowseService, MetadataManagerService, FormBuilderService, $http){

        //browse model
        $scope.browse = {};
        $scope.browse.currentStep = 0;
        $scope.browse.currentPage = 0;
        $scope.browse.currentObject = {};
        $scope.browse.numberOfObjects = 0;
        $scope.browse.canLoadObjects = false;
        $scope.collectionInfo = {};
        $scope.browse.collectionLoaded = false;

        //Temp, hardcoded metadata filters
        $scope.metadata = {};
        $scope.metadata.selectedYear = "";
        $scope.metadata.selectedMonth = "";
        $scope.metadata.selectedStreet = "";

        $scope.$watch('metadata.selectedMonth', function(newVal, old){
            $scope.changeFilter("month", newVal);
        });
        $scope.$watch('metadata.selectedYear', function(newVal, old){
            $scope.changeFilter("year", newVal);
        });
        $scope.$watch('metadata.selectedStreet', function(newVal, old){
            $scope.changeFilter("streetname", newVal);
        });

        //Gets the streetname from the API. TODO: This should be a generic solution
        $scope.getLocation = function(val) {
           //return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
           return $http.jsonp('http://www.politietsregisterblade.dk/api/1?type=road&callback=JSON_CALLBACK', {
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

        $scope.init = function(){
            //Harcoded configuration of the MetadataManagerService
            MetadataManagerService.config(2);

            //Get collection info, including name, short name, description, link to info an so on
            MetadataManagerService.getCollectionInfo().then(function(){
                $scope.browse.collectionLoaded = true;
                $scope.collectionInfo = MetadataManagerService.collectionInfo;
                $scope.browse.loadContent();
            });

            MetadataManagerService.getMetadataLevels().then(function(){
                    console.log("should update filter form here, data hardcoded instead");
                    $scope.metadata.years = MetadataManagerService.levels[0].data;
                    $scope.metadata.months = MetadataManagerService.levels[1].data;
                }
            );

            //Get metadata filters for the collection
            //Note that this is hardcoded until a more generic solution is needed
        };

$scope.$on('$viewContentLoaded', function() {$window.preloaderHide();});

$scope.searchObjects = function(){
    $location.path('2/1');
}

$scope.goToSearch = function(){
    $location.path('2/');
}

        $scope.changeFilter = function(filterName, value){
            if(value){
                //Get and apply filters
                MetadataManagerService.changeFilterValue(filterName, value);
                $scope.browse.canLoadObjects = MetadataManagerService.canRetrieveObjects();
                console.log('filter changed');
            }
        };

        /**
         *
         * Moves forward or backwards, according to the steps given
         *
         * @param integer the number of steps (positive or negative)
         * @returns void
         */
        $scope.browse.step = function(steps){
            BrowseService.step(steps);
        };

        /**
         * Goes to a specific page number
         *
         * @returns void
         */
        $scope.browse.goTo = function(){
            BrowseService.goTo(BrowseService.currentPage);
        };

        //Changes of the current step. Updates current step, object data and metadata as well as image URL
        $scope.$watch(
            function(){
                return BrowseService.currentStep;
            },
            function(){
                $scope.browse.updateCurrentObject();
            },
            true
        );

        $scope.browse.updateCurrentObject = function(){
                console.log("BrowseService.currentStep changed");


                //Current page and step
                $scope.browse.currentStep = BrowseService.currentStep;
                $scope.browse.currentPage = BrowseService.currentPage;

                var metadata = BrowseService.getCurrentContent();

                //If there is any content, load it and update metadata and image
                if(metadata){
                    //Current object containing metadata
                    $scope.browse.currentObject = metadata;

                    //Metadata as a string
                    $scope.collectionInfo.metadataText = MetadataManagerService.getMetadataString(metadata.metadata);

                    //URL to current location
                    $scope.collectionInfo.URL = $location.absUrl() + $location.path();

                    //Image URL
                    $window.showImage(BrowseService.getCurrentPage(), 'square');
                }
        };

        $scope.browse.loadContent = function(){
            if(true ||MetadataManagerService.canRetrieveObjects()){
                /*var mockArr = [
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
                ];*/

                //Loads the objects from server, and sets the content and length
                MetadataManagerService.getObjects().then(function(value){
                    BrowseService.setContent(value);
                    $scope.browse.numberOfObjects = BrowseService.contentLength();
                    BrowseService.step(0);
                    $scope.browse.updateCurrentObject();
                    console.log("Content loaded");
                });
            }
        };

        $scope.init();
       // $scope.browse.loadContent();
    var KeyCodes = {
        BACKSPACE : 8,
        TABKEY : 9,
        RETURNKEY : 13,
        ESCAPE : 27,
        SPACEBAR : 32,
        LEFTARROW : 37,
        UPARROW : 38,
        RIGHTARROW : 39,
        DOWNARROW : 40,
    };

    $scope.onKeydown = function(item, $event) {
        var e = $event;
        var $target = $(e.target);
        var nextTab;
        switch (e.keyCode) {
            case KeyCodes.ESCAPE:
                $target.blur();
                break;
            case KeyCodes.UPARROW:
                nextTab = - 1;
                break;
            case KeyCodes.RETURNKEY: e.preventDefault();
            case KeyCodes.DOWNARROW:
                nextTab = 1;
                break;
        }
        if (nextTab != undefined) {
            // do this outside the current $digest cycle
            // focus the next element by tabindex
           $timeout($('[tabindex=' + (parseInt($target.attr("tabindex")) + nextTab) + ']').focus());
        }
    };
});
