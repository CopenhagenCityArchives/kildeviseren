var app = angular.module('kildeviser-directives');
 
app.directive('kildeviserInput', function() {
  return {
      scope: {
          //Getting placeholder and helptext from element attributes, which can be set in the controller scope
          placeholder : '@placeholder',
          helptext : '@helptext'
      },
      restrict: 'E',
      replace: 'true',
      templateUrl: 'directives/kildeviser-input.html',
      link: function(scope, elem, attrs){
        //Hover on mouse over question mark
        $('.kk-questionmark').popover({
          trigger: 'hover'
        });
        
        scope.placeholder = attrs.placeholder;
        scope.helptext = attrs.helptext;
        
        scope.allowNumeric = function(event){
            //Is the element is a numeric input field, only accept numbers
            if(attrs.numeric){
                // Allow special chars + arrows
                if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9
                    || event.keyCode == 27 || event.keyCode == 13
                    || (event.keyCode == 65 && event.ctrlKey === true)
                    || (event.keyCode >= 35 && event.keyCode <= 39)){
                        return;
                }else {
                    // If it's not a number stop the keypress
                    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                        event.preventDefault();
                    }
                }

            }            
        };
        
        angular.element($('.kk-input-month')).on('keydown', function() {
            angular.element($(this).parent()).find('.monthpicker').fadeIn(300);
        });
        
        angular.element($('.kk-input-month')).on('blur', function() {
            angular.element($(this).parent()).find('.monthpicker').fadeOut(300);
        });
        
        angular.element($('.monthpicker ul li')).on('click', function() {
            angular.element($(this).parents('.kk-text-input')).find('.monthpicker').fadeOut(200);
        });         

      }
  };
});