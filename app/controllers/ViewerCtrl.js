
angular.module('KSA_Bladr.controllers').
    controller('ViewerCtrl', function($scope, $location, $window, MetadataHandlerService){

    //The controller vars are simply based on the corresponding data in the service
    $scope.metadata = MetadataHandlerService;
    $scope.template = {};

    $scope.init = function(){
        $scope.template = {name:'filters', url: 'partials-filters.html'};
        $scope.metadata.getCollections();
        //Check for url inputs here
        $scope.checkUrlInputs();
    };

    //Hides preloader when view is loaded
   // $scope.$on('$viewContentLoaded', function() {$window.preloaderHide();});

    //Watches the items list
    //When updated, the view is changed (if there is any results)
    $scope.$watch('metadata.itemsList', function(newVal, oldVal){
        if($scope.metadata.filters.length > 0){
            if($scope.metadata.itemsList.length === 0){
                $scope.status = "Ingen resultater fundet";
            }
            else{
               $scope.template = {name:'viewer', url: 'partials-viewer.html'};
            }
        }
    });

    $scope.loadImage = function(){
        $window.showImage($scope.metadata.item.images[0], null);
    };

    //Displaying frontpage
    $scope.goToFrontPage = function(){
        $scope.template = {name:'filters', url: 'partials-filters.html'};
    };

    $scope.$on('$includeContentLoaded', function(){
        $window.init();
        if($scope.template.name == 'viewer'){
            $scope.loadImage();
        }
    });

    //When item updates, display it with the showImage function
    $scope.$watch(function(){return $scope.metadata.item;}, function(newVal){
        if(newVal.images){
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
        var collection = $location.search().collection || false;
        var item = $location.search().item || false;

        if(collection){
            $scope.metadata.getCollection(collection).then(function(){
                if(item){
                    $scope.metadata.rebuildByItem(item);
                }
            });
        }
    };

    $scope.$watch('metadata.collectionId', function(newVal, oldVal){
        if(newVal){
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
