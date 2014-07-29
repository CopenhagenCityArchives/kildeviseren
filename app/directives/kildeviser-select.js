var app = angular.module('kildeviser-directives');
 
app.directive('kildeviserSelect', function() {
  return {
      scope: {
          //Getting placeholder and helptext from element attributes, which can be set in the controller scope
          placeholder : '@placeholder',
          helptext : '@helptext',
          values: '=values',
          modelValue: '=modelValue'
      },
      restrict: 'E',
      replace: 'true',
      templateUrl: 'directives/kildeviser-select.html',
      //template: '<h3>Hello World!!</h3>',
      link: function(scope, elem, attrs){
        scope.setValue = function(value){
            console.log("clicked");
        };   
        
        scope.keyPress = function($event){
            if($event.which === 38){
                
            }
            console.log($event);

        };

        angular.element(".kk-input-month").keydown(function(event){
          console.log(event);  
        });
        
        //jQuery animations. Should be converted to angular ng-actions...
        //Hover on mouse over question mark
        angular.element($('.kk-questionmark')).popover({
            trigger: 'hover'
        });
          
        angular.element($('.kk-input-month')).on('focus', function() {
            angular.element($(this).parent()).find('.monthpicker').fadeIn(300);
        });
        
     /*   angular.element($('.kk-input-month')).on('blur', function() {
            angular.element($(this).parent()).find('.monthpicker').fadeOut(300);
        });
       */ 
        angular.element($('.monthpicker ul li')).on('click', function() {
            angular.element($(this).parents('.kk-text-input')).find('.monthpicker').fadeOut(200);
        });          
      }
  };
});