$(document).ready(function() {
    /*GLOBAL PLACEHOLDER FIX + LABELS*/
    $('.floatlabel').focus(function() {
      var input = $(this);
      if (input.val() == input.attr('data-placehold')) {
        input.val('');
        input.removeClass('placeholder');
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('data-placehold')) {
        input.addClass('placeholder');
        input.val(input.attr('data-placehold'));
      }
    }).blur();
  $(document).on('click','#videoToggle', function() {
      var _frontV = $('#frontvideo');
      _frontV.show();
      TweenMax.fromTo(_frontV, 0.8, {top:-$(window).height(),scaleX:0,scaleY:0,autoAlpha:0},{top:0,scaleX:1,scaleY:1,autoAlpha:1,ease:Power4.easeInOut});
    });
  $(document).on('click','.closeVideo', function() {
      var _frontV = $('#frontvideo');
      TweenMax.fromTo(_frontV, 0.8, {top:0,scaleX:1,scaleY:1,autoAlpha:1},{top:-$(window).height(),scaleX:0,scaleY:0,autoAlpha:0,ease:Power4.easeInOut, onComplete: function() {
        _frontV.hide();
      }});
    });
  $(document).on('click','.btn-submit', function() {
      loadPage($('#page_find'),$('#redirector'));
    });
  $(document).on('click','.qmark', function() {
    var thecontent = $(this).data('content'), overbox = $(this).parent(), themark = $(this);
      themark.fadeOut(10, function() {
        overbox.find('.form_box_input_help').html(thecontent).fadeIn(100, function() {

        });
      });
    });

      /*POPOVER*/
/*    $('.qmark').popover({
        placement: function(tip, element) {
          var $element, above, actualHeight, actualWidth, below, boundBottom, boundLeft, boundRight, boundTop, elementAbove, elementBelow, elementLeft, elementRight, isWithinBounds, left, pos, right;
          isWithinBounds = function(elementPosition) {
            return boundTop < elementPosition.top && boundLeft < elementPosition.left && boundRight > (elementPosition.left + actualWidth) && boundBottom > (elementPosition.top + actualHeight);
          };
          $element = $(element);
          pos = $.extend({}, $element.offset(), {
            width: element.offsetWidth,
            height: element.offsetHeight
          });
          actualWidth = 250;
          actualHeight = 117;
          boundTop = $(document).scrollTop();
          boundLeft = $(document).scrollLeft();
          boundRight = boundLeft + $(window).width();
          boundBottom = boundTop + $(window).height();
          elementAbove = {
            top: pos.top - actualHeight,
            left: pos.left + pos.width / 2 - actualWidth / 2
          };
          elementBelow = {
            top: pos.top + pos.height,
            left: pos.left + pos.width / 2 - actualWidth / 2
          };
          elementLeft = {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left - actualWidth
          };
          elementRight = {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left + pos.width
          };
          above = isWithinBounds(elementAbove);
          below = isWithinBounds(elementBelow);
          left = isWithinBounds(elementLeft);
          right = isWithinBounds(elementRight);
          if (above) {
            return "right";
          } else {
            if (below) {
              return "left";
            } else {
              if (left) {
                return "left";
              } else {
                if (right) {
                  return "right";
                } else {
                  return "right";
                }
              }
            }
          }
        }
      });*/

});

$(window).on({
  orientationchange: function(e) {

  }, resize: function(e) {

  }, scroll: function(e) {

  }, load: function(e) {
      var _preText = $(document).find('.preloader-text'), _preloader = $(document).find('#preload'), _preCanvas = $('#preload-animation');
      TweenMax.to(_preCanvas, 0.3, {autoAlpha:0});
      TweenMax.to(_preText, 0.5, {'margin-top':'-10px',autoAlpha:0,ease:Power4.easeInOut, onComplete: function() {
        _preText.hide();
        TweenMax.to(_preloader, 0.4, {autoAlpha:0,ease:Power4.easeInOut, onComplete: function() {
          _preloader.hide().remove();

        }});
      }});
  }
});
function loadPage(origin,destination) {
  if (destination.hasClass('first')) {
    destination.css({
      'z-index':1,
      'opacity':0,
      'position':'absolute'
    }).show();
  } else {
    destination.css({
      'z-index':1,
      'width':$(window).width(),
      'height':$(window).height(),
      'opacity':0,
      'position':'absolute',
      'left':0
    }).show();
  }

  TweenMax.fromTo(origin, 0.8, {top:0,scaleX:1,scaleY:1,autoAlpha:1},{top:$(window).height(),scaleX:0.4,scaleY:0.4,autoAlpha:0,ease:Power4.easeInOut, onComplete: function() {
    origin.hide();
  }});
  TweenMax.fromTo(destination, 0.8, {top:-$(window).height(),autoAlpha:0},{top:0,scaleX:1,scaleY:1,autoAlpha:1,ease:Power4.easeInOut, onComplete: function() {
    destination.css({
      'position':'relative'
    });
    window.location.href = 'viewer.html';
  }});
}
