    /*========================================
    =            GLOBAL VARIABLES            =
    ========================================*/

    var stopCounter = false, topDown = false, controlsHidden = false, viewer = null, currentZoomLvl = 0, controlHover = false, navWaitTime = 6000, preventControls = false;

    /*-----  End of GLOBAL VARIABLES  ------*/

$(document).ready(function() {

    /*==========  RUN INIT  ==========*/
    init();

    /*=======================================
    =            PLACEHOLDER FIX            =
    =======================================*/

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

    /*-----  End of PLACEHOLDER FIX  ------*/





    /*===========================================
    =            INFO LAG HÅNDTERING            =
    ===========================================*/

    /*==========  ÅBNER INFO LAG  ==========*/
    $(document).on('fastClick','#darkQuestionmark', function() {
      var _frontV = $('#infoLayer');
      showControls();
      stopCounter = true;
      _frontV.show();
      TweenMax.fromTo(_frontV, 0.5, {scaleX:0.6,scaleY:0.6,autoAlpha:0},{scaleX:1,scaleY:1,autoAlpha:1,ease:Power4.easeInOut});
    });

    /*==========  LUKKER INFOLAG / KRYDS I MIDTEN  ==========*/

    $(document).on('fastClick','#infoClose', function() {
      var _frontV = $('#infoLayer');
      TweenMax.fromTo(_frontV, 0.5, {scaleX:1,scaleY:1,autoAlpha:1},{scaleX:0.6,scaleY:0.6,autoAlpha:0,ease:Power4.easeInOut, onComplete: function() {
        _frontV.hide();
        stopCounter = false;
      }});
    });

    /*-----  End of INFO LAG HÅNDTERING  ------*/


    /*================================================
    =            SPØRGSMÅLSTEGN ANIMATION            =
    ================================================*/
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

    /*-----  End of SPØRGSMÅLSTEGN ANIMATION  ------*/
    /*=======================================
    =            IPAD SCROLL FIX            =
    =======================================*/

    $(document).on('blur','.top_box_input', function(event) {
    TweenMax.to(window, 0.5, {scrollTo:{y:0}, ease:Power2.easeInOut});
    });

    /*-----  End of IPAD SCROLL FIX  ------*/

    /*=============================================
    =            TOPBOX LINK TIL HØJRE            =
    =============================================*/
    /*==========  GEM KNAPPEN  ==========*/
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
    /*==========  LINK KNAPPEN  ==========*/
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
        /* SKIFT VÆRDIEN AF LINK-BOKSEN = $(this).find('.linkDiv').val(images[currentImage]['url']).fadeIn(300).focus();*/
      }
    });
    /*==========  PRINT KNAPPEN  ==========*/
    $(document).on('fastClick','#print', function() {
      $('.lhp_miv_content_holder' ).print();
    });
    /*-----  End of TOPBOX LINK TIL HØJRE  ------*/
    $(document).on('fastClick','.linkDivCont', function(event) {
      event.preventDefault();
      return false;
    });
    $(document).on('fastClick','.gemDiv', function(event) {
      event.preventDefault();
      return false;
    });
    /*===============================================
    =            MARKER ALT I LINK-INPUT            =
    ===============================================*/
        $(document).on('fastClick','.linkDiv', function() {
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
    /*-----  End of MARKER ALT I LINK-INPUT  ------*/

    /*========================================================
    =            FOREBYG HØJREKLIK PÅ ELEMENTER            =
    ========================================================*/
    $(document).on('contextmenu','.controls', function(event) {
      event.preventDefault();
    });

    $(document).on({
    mousedown: function(event) {
      if (event.which === 3) {
        event.stopPropagation();
             return false;
      }
    }
    }, "body");

    $(document).on({
    mousedown: function(event) {
      if (event.which === 3) {
        event.stopPropagation();
             return false;
      }
    }
    }, "#page_viewer");

    $(document).on({
    mousedown: function(event) {
      if (event.which === 3) {
             return false;
      }
        stopCounter = true;
    }
    }, ".controls");

    /*-----  End of FOREBYG HØJREKLIK PÅ ELEMENTER  ------*/

    /*===============================================
    =            TOPBOX HÅNDTERING AF AKTIVERING            =
    ===============================================*/
     $(document).on('fastClick','#toggleTop', function() {
      var topControls = $('.topcontrols'), findText = $('.findtext');
      if (topDown) {
        /*==========  VIS TOPPEN ALLEREDE ER NEDE - START ANIMATION / LUK  ==========*/
        findText.html('- - -');
        TweenMax.to(topControls, 0.5, {top:-topControls.outerHeight(),ease:Power2.easeInOut, onComplete: function() {
          topDown = false;
          preventControls = false;
          showControls();
          findText.html('FIND');
        }});
      } else {
      /*==========  VIS TOPPEN IKKE ER NEDE START ANIMATION / ÅBEN ==========*/
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

    /*===============================================
    =            BUND NUMNER / INPUTBOKS            =
    ===============================================*/

    /*==========  INPUT RESIZE I FORHOLD TIL INDHOLD  ==========*/
    $('input.pager-input')
    // event handler
    .keyup(function() {
      resizeInput();
    })
    // resize on page load
    .each(resizeInput);

    /*==========  MARKER ALT TEKST VED CLICK  ==========*/
    $('input.pager-input').on('fastClick', function() {
      stopCounter = true;
      $(this).get(0).setSelectionRange(0,9999);
      $(this).get(0).select();
    });

    /*==========  MARKER ALT TEKST VED FOCUS  ==========*/
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
    /*-----  End of BUND NUMNER / INPUTBOKS  ------*/
}); /* <--- DOCUMENT READY END */

    /*========================================
    =            WINDOW FUNCTIONS            =
    ========================================*/

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

    /*-----  End of WINDOW FUNCTIONS  ------*/


    /*=================================
    =            FUNCTIONS            =
    =================================*/

    /*==========  SHOW CONTROLS EFTER DENNE ER LUKKET  ==========*/
    function showControls() {
      if (controlsHidden && !preventControls) {
        controlsHidden = false;
        TweenMax.to($('.sourceText'), 0.4, {left:'190px',ease:Power4.easeInOut, onComplete: function() {

        }});
      }
        $('.lhp_miv_nav').fadeIn(400);
        $('.controls').fadeIn(400);
    }

    /*==========  HIDE CONTROLS (IKKE I BRUG)  ==========*/

    function hideControls() {
    /*  if (!controlsHidden) {
      controlsHidden = true;
      TweenMax.to($('.sourceText'), 0.4, {left:'80px',ease:Power4.easeInOut, onComplete: function() {

      }});
      }
      $('.lhp_miv_nav').fadeOut(600);
      $('.controls').fadeOut(600);*/
    }

    /*==========  TIMER FUNKTION FOR AT SKJULE CONTROLS (IKKE I BRUG)  ==========*/

    function startTimer() {
    lastTimeMouseMoved = new Date().getTime();
           var t=setTimeout(function(){
               var currentTime = new Date().getTime();
               if(currentTime - lastTimeMouseMoved > 1000 && !stopCounter && !topDown){
                  hideControls();
               }
           },navWaitTime)
    }


    /*==========  RESIZE INPUT  ==========*/

    function resizeInput() {
      if ($(this).val()) {
        $(this).attr('size', $(this).val().length);
      } else {
        $(this).attr('size', 1);
      }
    }

    /*==========  OPSÆTTER SIZES PÅ ELEMENTER  ==========*/

    function setSize() {
      $('#page_viewer').css({
        height:$(window).height(),
        width:$(window).width()
      })
      $('#map').css({
        height:$(window).height(),
        width:$(window).width()
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

    /*==========  PRINT FUNKTIONERN  ==========*/

    function PrintElem(elem)
    {
        Popup($(elem).html());
    }

    /*==========  SHOW IMAGE / VISER BILLEDE I VIEWEREN  ==========*/

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

    /*==========  INIT FUNKTIONER  ==========*/

    function init() {
      setSize();
      $("input.numeric").numeric();
    }


    /*-----  End of FUNCTIONS  ------*/




















