//Instantiating namespaces and their dependencies
angular.module('KSA_Bladr.services',[]);
angular.module('KSA_Bladr.controllers',[]);
angular.module('KSA_Bladr.directives',[]);
angular.module('KSA_Bladr.config',[]);
//angular.module('KSA_Bladr.mocks', ['ngMockE2E']);

var app = angular.module('KSA_Bladr', [
  'KSA_Bladr.controllers',
  'KSA_Bladr.services',
  'KSA_Bladr.directives',
  'KSA_Bladr.config',
  'ngTouch',
  'angulartics',
  'angulartics.google.analytics',
  'ngSanitize',
  'localytics.directives'
]);

app.config(['$locationProvider', function ($locationProvider) {

    // enable html5Mode for pushstate ('#'-less URLs)
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

}]);


app.run(['$window', 'config', function($window, config) {
    if (config.googleAnalyticsTrackingCode) {
        // Setup Analytics only if statistics consent is given
        var onStatisticsConsent = function() {
            if ($window.Cookiebot && $window.Cookiebot.consent && $window.Cookiebot.consent.statistics) {
                console.log("Initializing Google Analytics.");

                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
                    ga('create', config.googleAnalyticsTrackingCode, 'auto');
            } else {
                console.log("Statistics consent not given, skipping analytics.")
            }
        }

        if (!$window.Cookiebot) {
            console.log("Cookiebot not loaded, skipping analytics handling.")
        } else if ($window.Cookiebot.consent && $window.Cookiebot.consent.statistics) {
            onStatisticsConsent();
        } else {
            $window.addEventListener('CookiebotOnAccept', onStatisticsConsent);
            $window.addEventListener('CookiebotOnDecline', onStatisticsConsent);
        }
    }
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
