

angular.module('KSA_Bladr.controllers').

    controller('ViewerCtrl', function($scope, $location, $window, MetadataHandlerService, $analytics){

    //The controller vars are simply based on the corresponding data in the service
    $scope.metadata = MetadataHandlerService;
    $scope.template = {};
    $scope.showRequiredFieldsText = false;
    $scope.showCollectionsList = true;



    $scope.init = function(){

        $scope.template = {name:'filters', url: 'partials-filters.html'};

        $scope.metadata.getCollections().then(function(){
            //Check for url inputs here
            $scope.checkUrlInputs();
        });
    };

    //Hides preloader when view is loaded
   // $scope.$on('$viewContentLoaded', function() {$window.preloaderHide();});

    //Watches the items list
    //When updated, the view is changed (if there is any results)

    $scope.$watch('metadata.itemsList', function(newVal, oldVal){

        if($scope.metadata.filters.length > 0){

            if($scope.metadata.itemsList.length === 0){

            }
            else{
                $scope.template = {name:'viewer', url: 'partials-viewer.html'};

                if($window.topDown)
                    $window.toogleTop();
            }
        }

    });

    $scope.onTextClick = function ($event) {
        $event.target.select();
    };



    $scope.loadImage = function(){
        $window.showImage($scope.metadata.collection.image_type, $scope.metadata.item.images[0], null, $scope.metadata.item);
    };



    //Displaying frontpage

    $scope.goToFrontPage = function(){
        $location.search('item', null);
        $window.toogleTop();
        $scope.template = {name:'filters', url: 'partials-filters.html'};
        $scope.viewerLoaded = false;
    };



    //Checks if viewer-partial is loaded. Used when displaying images

    $scope.viewerLoaded = false;

    $scope.$on('$includeContentLoaded', function(){

        $window.init();

        if($scope.template.name == 'viewer'){
            //console.log('load because $includeContentLoaded is fired');
            $scope.loadImage();
            $scope.viewerLoaded = true;
        }
        if($scope.template.name == 'filters' && $window.innerWidth >= 1280){
            $window.formShower.toggleFeedback(true);
        }
        else{
            $window.formShower.toggleFeedback(false);
        }
    });


    //When item updates, display it with the showImage function

    $scope.$watch(function(){return $scope.metadata.item;}, function(newVal, oldVal){

        if(newVal.images && $scope.viewerLoaded){
            //console.log('load because item has changed');
            $analytics.pageTrack($location.url());
            $scope.loadImage();
        }
    });



    /**
     * Checks if url parameters is given. This is only relevant at controller init time
     * Calls appropriate methods according to input
     *
     * @return void
     */

    $scope.checkUrlInputs = function(){

        var collection = parseInt($location.search().collection) || false;
        var item = parseInt($location.search().item) || false;

        if(collection){
            $scope.showCollectionsList = false;
            $scope.metadata.getCollection(collection).then(function(){
                if(item){
                    $scope.metadata.rebuildByItem(item);
                }
            });
        }
    };



    $scope.$watch(function(){return $scope.metadata.collectionId;}, function(newVal, oldVal){

        if(newVal && newVal !== oldVal){
            $scope.metadata.getCollection(newVal);
        }

    });



    $scope.$watch(function(){return $scope.metadata.filters;}, function(newVal, oldVal){

      //  console.log('Filters changed, rerunning canSearch', newVal);
        $scope.metadata.updateSelectedFilterValues();
        $scope.metadata.checkSearch();

    },true);

    $scope.init();
});

