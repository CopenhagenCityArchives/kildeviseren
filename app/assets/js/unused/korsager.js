    /*GLOBAL ON READY VARS*/

    var stopCounter = false, topDown = false, controlsHidden = false, viewer = null, currentZoomLvl = 0, controlHover = false, navWaitTime = 6000, preventControls = false;

   // var imgCount = Object.keys(images).length;
   // $('.pager-pages').html(imgCount);
   // var currentImage = 1;
  //  $('.pager-input').val(currentImage);

$(document).ready(function() {
  init();
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
  /*PREVENT RIGHT-CLICK*/
  $(document).bind('contextmenu', function(e) {
   //e.preventDefault();
  });


  $( document ).on( 'touchmove', function( ev )
{
    if (!jQuery( ev.target ).parents().hasClass( 'touch-moveable' ))
    {
         ev.preventDefault();
    }
});

$('#map').css({
height: $(window).height()
}).show(function(){

/*    $('.zoomslider').noUiSlider({
      start: [ 0 ],
      range: {
        'min': [  0 ],
        'max': [ 4 ]
      }
    });

    $('.zoomslider').on('set', function(){

    });*/
    setSize();

});

  /*var element = document.getElementById("map");
  jester(element).fastClick(function() {
     // alert("You hit the target!");
  });
  jester(element).pinchwiden(function() {

    $('#map').lhpMegaImgViewer('zoom');
    $('#map').lhpMegaImgViewer('moveStop');
  });
  jester(element).pinchnarrow(function() {

    $('#map').lhpMegaImgViewer('unzoom');
    $('#map').lhpMegaImgViewer('moveStop');
  });
  jester(element).pinchend(function() {
    setTimeout(function() {

      $('#map').lhpMegaImgViewer('zoomStop');
    }, 800);

  });*/






    $(document).on('fastClick','#print', function() {
      $('.lhp_miv_content_holder' ).print();
    });
    $(document).on('fastClick','#darkQuestionmark', function() {
      var _frontV = $('#infoLayer');
      showControls();
      stopCounter = true;
      _frontV.show();
      TweenMax.fromTo(_frontV, 0.5, {scaleX:0.6,scaleY:0.6,autoAlpha:0},{scaleX:1,scaleY:1,autoAlpha:1,ease:Power4.easeInOut});
    });
    $(document).on('fastClick','#infoClose', function() {
      var _frontV = $('#infoLayer');
      TweenMax.fromTo(_frontV, 0.5, {scaleX:1,scaleY:1,autoAlpha:1},{scaleX:0.6,scaleY:0.6,autoAlpha:0,ease:Power4.easeInOut, onComplete: function() {
        _frontV.hide();
        stopCounter = false;
      }});
    });
      $(document).on('fastClick','.qmark', function() {
    var thecontent = $(this).data('content'), overbox = $(this).parent(), themark = $(this), theinput = $(this).parent().find('.chosen-container > a.chosen-single > span');

      themark.fadeOut(10, function() {
        theinput.hide();
        overbox.find('.form_box_input_help').html(thecontent).fadeIn(100, function() {
          setTimeout(function() {
            overbox.find('.form_box_input_help').html(thecontent).fadeOut(100, function() {
              theinput.show();
              themark.fadeIn(300);
             });
          }, 2000);
        });
      });
    });

    $(document).on('contextmenu','.controls', function(event) {
      event.preventDefault();
    });

    $(document).on('blur','.top_box_input', function(event) {
      TweenMax.to(window, 0.5, {scrollTo:{y:0}, ease:Power2.easeInOut});
    });




/*
    $(document).on('fastClick','#bigRight', function() {
      if (!preventControls) {
        if (currentImage === imgCount) {
          currentImage = 1;
        } else {
          currentImage++;
        }

        showImage(images[currentImage]['url'],images[currentImage]['type']);
      }
    });
    $(document).on('fastClick','#bigLeft', function() {
      if (!preventControls) {
      if (currentImage === 1) {
        currentImage = imgCount;
      } else {
        currentImage--;
      }
      showImage(images[currentImage]['url'],images[currentImage]['type']);
      }
    });

    $(document).on('fastClick','#smallLeft', function() {
      if (!preventControls) {
      currentImage = 1;
      showImage(images[currentImage]['url'],images[currentImage]['type']);
      }
    });
    $(document).on('fastClick','#smallRight', function() {
      if (!preventControls) {
      currentImage = imgCount;
      showImage(images[currentImage]['url'],images[currentImage]['type']);
      }
    });

*/

    $(document).on('fastClick','.btnGem', function() {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).css({
          'border-bottom-right-radius': '10px',
          'border-top-right-radius': '10px'
        });
        $(this).find('.gemDiv').fadeOut(300);

      } else {
        $(this).addClass('active');
        $(this).css({
          'border-bottom-right-radius': '0',
          'border-top-right-radius': '0'
        });
        $(this).find('.gemDiv').fadeIn(300);
      }
    });

    $(document).on('fastClick','.btnLink', function() {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).css({
          'border-bottom-right-radius': '10px',
          'border-top-right-radius': '10px'
        });
        $(this).find('.linkDiv').fadeOut(300);

      } else {
        $(this).addClass('active');
        $(this).css({
          'border-bottom-right-radius': '0',
          'border-top-right-radius': '0'
        });
        /*$(this).find('.linkDiv').val(images[currentImage]['url']).fadeIn(300).focus();*/
      }
    });

    $(document).on('fastClick','.linkDivCont', function(event) {
      event.preventDefault();
      /*event.stopPropagation();*/
      return false;
    });
    $(document).on('fastClick','.gemDiv', function(event) {
      event.preventDefault();
      /*event.stopPropagation();*/
      return false;
    });

    $(document).on('fastClick','.linkDiv', function() {
        $(this).get(0).setSelectionRange(0,9999);
    });
    $(document).on('focus','.linkDiv', function() {
        $(this).get(0).setSelectionRange(0,9999);
        $(this)
        .one('mouseup', function () {
            $(this).select();
            stopCounter = true;
            $(this).addClass('focussed');
            return false;
        })
        .select();
    });






    $(document).on({
    fastClick: function() {
        if (!preventControls) {
          showControls();
          startTimer();
        }
    },
    mousedown: function(event) {
      if (event.which === 3) {
        event.stopPropagation();
             return false;
      }
    },
    hold: function(event) {
      event.preventDefault();
      stopCounter = true;
      if (!preventControls) {
          showControls();
          startTimer();
        }
    },
    drag: function() {
       if (!preventControls) {
          showControls();
          startTimer();
        }
        stopCounter = true;
    },
    scroll: function() {
        stopCounter = true;
        if (!preventControls) {
          showControls();
          startTimer();
        }
    }
    }, "body");


    $(document).on({
    mousemove: function() {
        if (!preventControls) {
          showControls();
          startTimer();
        }
    },
    fastClick: function() {

        if ($('input.pager-input').hasClass('focussed')) {
          stopCounter = true;
        } else {
          stopCounter = false;
        }
        if (!preventControls) {
          showControls();
          startTimer();
        }

    },
    swipe: function(event) {
      console.log(event);
    },
    mousedown: function(event) {
      if (event.which === 3) {
        event.stopPropagation();
             return false;
      }
    },
    drag: function(event) {
        stopCounter = true;
    }
    }, "#page_viewer");

    $(document).on({
    mouseenter: function() {
        stopCounter = true;
    },
    mouseout: function() {
        if ($('input.pager-input').hasClass('focussed')) {
          stopCounter = true;
        } else {
          stopCounter = false;
        }
        startTimer();
    },
    mouseover: function() {
        controlHover = false;
        stopCounter = true;
    },
    mousedown: function(event) {
      if (event.which === 3) {
             return false;
      }
        stopCounter = true;
    },
    drag: function() {
        stopCounter = true;
    },
    hold: function(event) {
      event.preventDefault();
      stopCounter = true;
    }
    }, ".controls");

    $(document).on({
    mouseenter: function() {
        stopCounter = true;
    },
    mouseout: function() {
        stopCounter = false;
        startTimer();
    },
    mouseover: function() {
        stopCounter = true;
    },
    mousedown: function() {
        stopCounter = true;
    }
    }, "#topfind");

    $(document).on({
    mouseenter: function() {
        stopCounter = true;
    },
    mouseout: function() {
        stopCounter = false;
        startTimer();
    },
    mouseover: function() {
        stopCounter = true;
    },
    mousedown: function() {
        stopCounter = true;
    }
    }, "#infoLayer");


     $(document).on('fastClick','#toggleTop', function() {
      var topControls = $('.topcontrols'), findText = $('.findtext');
      if (topDown) {
        findText.html('- - -');
        TweenMax.to(topControls, 0.5, {top:-topControls.outerHeight(),ease:Power2.easeInOut, onComplete: function() {
          topDown = false;
          preventControls = false;
          showControls();
          findText.html('FIND');
        }});
      } else {
        findText.html('- - -');
        topControls.css({
          top: -topControls.outerHeight()
        });
        TweenMax.to(topControls, 0.8, {top:0,ease:Power2.easeInOut, onComplete: function() {
          topDown = true;
          preventControls = true;
          $('.controls').not('#toggleTop').fadeOut(400, function() {
          });
          findText.html('LUK');
        }});
      }
    });

    $('input.pager-input')
    // event handler
    .keyup(function() {
      resizeInput();
    })
    // resize on page load
    .each(resizeInput);


    $('input.pager-input').on('fastClick', function() {
      stopCounter = true;
      $(this).get(0).setSelectionRange(0,9999);
      $(this).get(0).select();
    });

    $('input.pager-input').on('focus', function (e) {
    $(this)
        .one('mouseup', function () {
            $(this).select();
            stopCounter = true;
            $(this).addClass('focussed');
            return false;
        })
        .select();
    });

    $('input.pager-input').on('blur', function() {
      /*stopCounter = false;
      if (!$(this).val() || $(this).val() == '0' || $(this).val().length === 0) {
        $(this).val('1');
      } else if ($(this).val() > imgCount) {
        $(this).val(imgCount);
      }
      currentImage = $(this).val();
      showImage(images[$(this).val()]['url'],images[$(this).val()]['type']);
      $(this).removeClass('focussed');*/
    });








});


    $(window).load(function(){

});


$(window).on({
  orientationchange: function(e) {
    setSize();
  }, resize: function(e) {
    setSize();
  }, scroll: function(e) {

  }, load: function(e) {
      var _preText = $(document).find('.preloader-text'), _preloader = $(document).find('#preload'), _preCanvas = $('#preload-animation');
      TweenMax.to(_preCanvas, 0.3, {autoAlpha:0});
      $('#page_viewer').show();
      setSize();
      TweenMax.to(_preText, 0.5, {'margin-top':'-10px',autoAlpha:0,ease:Power4.easeInOut, onComplete: function() {
        _preText.hide();
        $('.controls').show();
        TweenMax.to(_preloader, 0.4, {autoAlpha:0,ease:Power4.easeInOut, onComplete: function() {
          _preloader.hide().remove();

        }});
      }});
  }
});



function showControls() {
  if (controlsHidden && !preventControls) {
    controlsHidden = false;
    TweenMax.to($('.sourceText'), 0.4, {left:'190px',ease:Power4.easeInOut, onComplete: function() {

    }});
  }

    $('.lhp_miv_nav').fadeIn(400);
    $('.controls').fadeIn(400);
}
function hideControls() {
/*  if (!controlsHidden) {
  controlsHidden = true;
  TweenMax.to($('.sourceText'), 0.4, {left:'80px',ease:Power4.easeInOut, onComplete: function() {

  }});
  }
  $('.lhp_miv_nav').fadeOut(600);
  $('.controls').fadeOut(600);*/
}

function startTimer() {
lastTimeMouseMoved = new Date().getTime();
       var t=setTimeout(function(){
           var currentTime = new Date().getTime();
           if(currentTime - lastTimeMouseMoved > 1000 && !stopCounter && !topDown){
              hideControls();
           }
       },navWaitTime)
}


function resizeInput() {
  if ($(this).val()) {
    $(this).attr('size', $(this).val().length);
  } else {
    $(this).attr('size', 1);
  }
}

function setSize() {
  $('#page_viewer').css({
    height:$(window).outerHeight(),
    width:$(window).outerWidth()
  })
  $('#map').css({
    height:$(window).outerHeight(),
    width:$(window).outerWidth()
  })
  TweenMax.to(window, 0.5, {scrollTo:{y:0}, ease:Power2.easeInOut});
  if (!topDown) {
    setTimeout(function() {
      $('.topcontrols').css({
      top: -(parseInt($('.topcontrols').outerHeight()))+'px'
      });
    }, 400);

  }

}



function showImage(imageSrc,condition) {
  preventControls = true;
  $('.controls').addClass('disabled').css({
    opacity:0.4
  });
  conInt = null;
  if (condition == 'square') {
    conInt = 200;
  } else {
    conInt = 300;
  }
 // var navThumb = new Image();
//  navThumb.src = "http://www.applocker.dk/kk/timthumb.php?w="+conInt+"&q=70&src="+imageSrc;
 // $(navThumb).on('load',function(){
    var settings = {
    "viewportWidth" : "100%",
    "viewportHeight" : "100%",
    "fitToViewportShortSide" : false,
    "contentSizeOver100" : false,
    "startScale" : 0,
    "startX" : 956,
    "startY" : 660,
    "animTime" : 300,
    "draggInertia" : 0,
    "zoomLevel" : 4,
    "zoomStep" : 0.25,
    "contentUrl" : imageSrc,
    "intNavEnable" : true,
    "intNavPos" : "BL",
    "intNavAutoHide" : false,
    "intNavMoveDownBtt" : false,
    "intNavMoveUpBtt" : false,
    "intNavMoveRightBtt" : false,
    "intNavMoveLeftBtt" : false,
    "intNavZoomBtt" : true,
    "intNavUnzoomBtt" : true,
    "intNavFitToViewportBtt" : false,
    "intNavFullSizeBtt" : false,
    "intNavBttSizeRation" : 1,
    "mapEnable" : false,
    //"mapThumb" : "http://www.applocker.dk/kk/timthumb.php?w="+conInt+"&q=70&src="+imageSrc,
    "mapPos" : "TR",
    "popupShowAction" : "fastClick",
    "testMode" : false
    };
    if ($('#map').length != 0) {
      $("#map").lhpMegaImgViewer("destroy");
      $("#map").lhpMegaImgViewer(settings);
    //  $('.pager-input').val(currentImage);
    }
    //$('.pager-input').val(currentImage);
    $('.controls').removeClass('disabled').css({
    opacity:1
    });
    preventControls = false;
  //});
}


function init() {
  setSize();
  $("input.numeric").numeric();
//showImage(images[currentImage]['url'],images[currentImage]['type']);
 // startTimer();
}

function PrintElem(elem)
{
    Popup($(elem).html());
}