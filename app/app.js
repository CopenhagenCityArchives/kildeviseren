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
