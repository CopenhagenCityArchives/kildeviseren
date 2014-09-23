//Instantiating namespaces and their dependencies
angular.module('KSA_Bladr.services',[]);
angular.module('KSA_Bladr.controllers',[]);
angular.module('KSA_Bladr.mocks', ['ngMockE2E']);

var app = angular.module('KSA_Bladr', [
  'KSA_Bladr.controllers',
  'KSA_Bladr.services',
  'localytics.directives',
  'ngTouch',
  'ngRoute'
]);

// configure our routes
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    /**
    Administration
    **/
    // route for single archiveversion in admin view
    .when('/:collectionId', {
        templateUrl: '/partials-filter.html',
        controller: 'ViserCtrl'
    })
    // route for list of archiveversions in admin view
    .when('/:collectionId/:itemId', {
        templateUrl: '/partials-viewer.html',
        controller: 'ViserCtrl'
    })
    // route for list of archiveversions in admin view
    .when('/', {
        templateUrl: '/partials-filter.html',
        controller: 'ViserCtrl'
    });

    $locationProvider.html5Mode(false);
});
