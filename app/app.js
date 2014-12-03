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
  'angulartics',
  'angulartics.google.analytics',
  'ngSanitize',
  'youtube-embed'
]);

app.config(['$locationProvider', function ($locationProvider) {

    // enable html5Mode for pushstate ('#'-less URLs)
    //$locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');

}]);

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
