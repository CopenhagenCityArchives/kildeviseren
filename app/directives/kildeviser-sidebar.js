var app = angular.module('kildeviser-directives');

app.directive('kildeviserSidebar', function() {
  return {
        scope: {
          //Getting placeholder and helptext from element attributes, which can be set in the controller scope
          placeholder : '@placeholder',
          helptext : '@helptext',
          browse : '='
        },
        restrict: 'E',
        replace: 'true',
        templateUrl: 'directives/kildeviser-sidebar.html',

        link: function(scope, elem, attrs){

            scope.barIsHidden = false;

            scope.changeBarVisibility = function(){
                scope.toggleSidebar();
                scope.barIsHidden = !scope.barIsHidden;
            };

            scope.toggleSidebar = function() {

        if (scope.barIsHidden) {
          $('#full-logo').animate({
            top: '-54px'
          },400, function() {

          });
          $('.sidebar-meta').animate({
            left: '275px'
          },400, function() {

          });
          $('.hideSidebar').animate({
            right: '0px'
          },400, function() {

            $('#hidebar').attr('src','assets/img/hide_sidebar.png');
            $('#sidebar').animate({
              left: '0px'
            },600, function() {
              makeSizes();
            });
          });
        } else {
          $('.sidebar-meta').animate({
            left: '138px'
          },400, function() {

          });
          $('#sidebar').animate({
            left: '-275px'
          },600, function() {
            makeSizes();
            $('#full-logo').animate({
              top: '0px'
            },400, function() {

            });
            $('#hidebar').attr('src','assets/img/show_sidebar.png');
            $('.hideSidebar').animate({
              right: '-57px'
            },400, function() {
            });
          });

        }
      }

      }
  };
});