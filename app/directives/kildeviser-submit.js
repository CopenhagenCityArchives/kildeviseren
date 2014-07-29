var app = angular.module('kildeviser-directives');
 
app.directive('kildeviserSubmit', function() {
  return {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'directives/kildeviser-submit.html'
  };
});