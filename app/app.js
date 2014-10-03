//Instantiating namespaces and their dependencies
angular.module('KSA_Bladr.services',[]);
angular.module('KSA_Bladr.controllers',[]);
angular.module('KSA_Bladr.directives',[]);
angular.module('KSA_Bladr.mocks', ['ngMockE2E']);

var app = angular.module('KSA_Bladr', [
  'KSA_Bladr.controllers',
  'KSA_Bladr.services',
  'KSA_Bladr.directives',
  'localytics.directives',
  'ngTouch',
  'ngRoute'
]);

// configure our routes
app.config(function ($routeProvider, $locationProvider) {
    /*$routeProvider
    /**
    Administration
    **/
    // route for single archiveversion in admin view
 /*   .when('/:collectionId', {
        templateUrl: 'partials-filter.html',
        controller: 'ViserCtrl',
        reloadOnSearch: false
    })
    // route for list of archiveversions in admin view
    .when('/:collectionId/:itemId', {
        templateUrl: 'partials-viewer.html',
        controller: 'ViserCtrl',
        reloadOnSearch: false
    })*/
    // route for list of archiveversions in admin view
    /*.when('/', {
        //templateUrl: 'partials-filter.html',
        controller: 'ViewerCtrl',
        reloadOnSearch: false
    });

    $locationProvider.html5Mode(false);*/
});

/*
This directive allows us to pass a function in on an enter key to do what we want.
 */
app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});
