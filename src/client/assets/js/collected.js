    /*========================================
    =            GLOBAL VARIABLES            =
    ========================================*/
    var stopCounter = false,
        topDown = false,
        controlsHidden = false,
        viewer = null,
        currentZoomLvl = 0,
        controlHover = false,
        navWaitTime = 6000,
        preventControls = false,
        inputMarked = false;
    /*-----  End of GLOBAL VARIABLES  ------*/
    $(document).ready(function() {
        /*==========  RUN INIT  ==========*/
        init();
        /*=======================================
    =            PLACEHOLDER FIX            =
    =======================================*/
        $(document).on('chosen:showing_dropdown', '.chosen-selector', function(evt, params) {});
        $(document).on('chosen:hiding_dropdown', '.chosen-selector', function(evt, params) {});
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
        $(document).on('click', '#darkQuestionmark', function() {
            var _frontV = $('#infoLayer');
            showControls();
            stopCounter = true;
            _frontV.show();
            TweenMax.fromTo(_frontV, 0.5, {
                scaleX: 0.6,
                scaleY: 0.6,
                autoAlpha: 0
            }, {
                scaleX: 1,
                scaleY: 1,
                autoAlpha: 1,
                ease: Power4.easeInOut
            });
        });
/*====================================
=            SELECT RADIO            =
====================================*/
$(document).on('click','.labelforradio', function() {
    if ($(this).hasClass('label-selected')) {
        $(this).removeClass('label-selected');
        if( $(this).parent().find('.radios').is(':checked') ) {
            $(this).parent().find('.radios').prop('checked', false);
        } else {
        }
        $('.labelforradio').not(this).removeClass('label-selected');
    } else {
        $('.labelforradio').not(this).removeClass('label-selected');
        $(this).addClass('label-selected');
    }
});
/*-----  End of SELECT RADIO  ------*/


        /*==========  LUKKER INFOLAG / KRYDS I MIDTEN  ==========*/
        $(document).on('click', '#infoClose', function() {
            var _frontV = $('#infoLayer');
            TweenMax.fromTo(_frontV, 0.5, {
                scaleX: 1,
                scaleY: 1,
                autoAlpha: 1
            }, {
                scaleX: 0.6,
                scaleY: 0.6,
                autoAlpha: 0,
                ease: Power4.easeInOut,
                onComplete: function() {
                    _frontV.hide();
                    stopCounter = false;
                }
            });
        });
        /*-----  End of INFO LAG HÅNDTERING  ------*/
        /*================================================
    =            SPØRGSMÅLSTEGN ANIMATION            =
    ================================================*/
        $(document).on('click', '.qmark', function() {
            var thecontent = $(this).data('content'),
                overbox = $(this).parent(),
                themark = $(this),
                theinput = $(this).parent().find('.chosen-container > a.chosen-single > span');
            if (themark.hasClass('isActive')) {
            } else {
                themark.addClass('isActive');
                theinput.hide();
                overbox.find('.form_box_input_help').html(thecontent).fadeIn(100, function() {
                    setTimeout(function() {
                        overbox.find('.form_box_input_help').html(thecontent).fadeOut(100, function() {
                            theinput.show();
                            themark.removeClass('isActive');
                        });
                    }, 2000);
                });
            }

        });
        /*-----  End of SPØRGSMÅLSTEGN ANIMATION  ------*/
        /*=======================================
    =            IPAD SCROLL FIX            =
    =======================================*/
        /*-----  End of IPAD SCROLL FIX  ------*/
        /*=============================================
    =            TOPBOX LINK TIL HØJRE            =
    =============================================*/
        /*==========  GEM KNAPPEN  ==========*/
        $(document).on('click', '.btnGem', function() {
        });
        /*==========  LINK KNAPPEN  ==========*/
        $(document).on('click', '.btnLink', function() {
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
                $(this).find('.linkDiv').fadeIn(300);
                /* SKIFT VÆRDIEN AF LINK-BOKSEN = $(this).find('.linkDiv').val(images[currentImage]['url']).fadeIn(300).focus();*/
            }
        });
        /*==========  PRINT KNAPPEN  ==========*/
        $(document).on('click', '#print', function() {
            setTimeout(function() {
                $(".printable").printThis({
                  debug: false,
                  importCSS: true,
                  printContainer: false,
                  loadCSS: "",
                  pageTitle: 'Kildeviser Print',
                  removeInline: false
            });
            }, 100);
        });
        /*-----  End of TOPBOX LINK TIL HØJRE  ------*/
        $(document).on('click', '.linkDivCont', function(event) {
            event.preventDefault();
            return false;
        });
        $(document).on('click', '.gemDiv', function(event) {
        });
        /*===============================================
    =            MARKER ALT I LINK-INPUT            =
    ===============================================*/
        $(document).on('click', '.btnLink', function() {
            setTimeout(function() {
                $('.linkDiv').selectAll();
            }, 500);
        });
        /*-----  End of MARKER ALT I LINK-INPUT  ------*/
        /*========================================================
    =            FOREBYG HØJREKLIK PÅ ELEMENTER            =
    ========================================================*/
        $(document).on('contextmenu', '.controls', function(event) {
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
        $(document).on('click', '#toggleTop', toogleTop);
        /*===============================================
    =            BUND NUMNER / INPUTBOKS            =
    ===============================================*/
        /*==========  INPUT RESIZE I FORHOLD TIL INDHOLD  ==========*/
        $(document).on('keyup', 'input#pageNumber', function() {
            resizeInput($(this));
        });
        /*==========  MARKER ALT TEKST VED CLICK  ==========*/
        $(document).on('click', 'input#pageNumber', function() {
            stopCounter = true;
            $(this).get(0).setSelectionRange(0, 9999);
            $(this).get(0).select();
        });
        /*==========  MARKER ALT TEKST VED FOCUS  ==========*/
        $(document).on('focus', 'input#pageNumber', function(e) {
            $(this).one('mouseup', function() {
                $(this).select();
                stopCounter = true;
                $(this).addClass('focussed');
                return false;
            }).select();
        });
        /*-----  End of BUND NUMNER / INPUTBOKS  ------*/
    }); /* <--- DOCUMENT READY END */
    /*========================================
    =            WINDOW FUNCTIONS            =
    ========================================*/
    $(window).on({
        orientationchange: function(e) {
            setSize();
        },
        resize: function(e) {
            setSize();
        },
        scroll: function(e) {},
        load: function(e) {
            redirect();
            preloaderHide();
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
            TweenMax.to($('.sourceText'), 0.4, {
                left: '190px',
                ease: Power4.easeInOut,
                onComplete: function() {}
            });
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
        var t = setTimeout(function() {
            var currentTime = new Date().getTime();
            if (currentTime - lastTimeMouseMoved > 1000 && !stopCounter && !topDown) {
                hideControls();
            }
        }, navWaitTime)
    }
    /*==========  PREOADER FUNCTION  ==========*/
    function preloaderHide() {
        var _preText = $(document).find('.preloader-text'),
            _preloader = $(document).find('#preload'),
            _preCanvas = $('#preload-animation');
        TweenMax.to(_preCanvas, 0.3, {
            autoAlpha: 0
        });
        $('#page_viewer').show();
        setSize();
        TweenMax.to(_preText, 0.5, {
            'margin-top': '-10px',
            autoAlpha: 0,
            ease: Power4.easeInOut,
            onComplete: function() {
                setSize();
                _preText.hide();
                $('.controls').show();
                TweenMax.to(_preloader, 0.4, {
                    autoAlpha: 0,
                    ease: Power4.easeInOut,
                    onComplete: function() {
                        setSize();
                        _preloader.hide().remove();
                    }
                });
            }
        });
    }
    /*==========  RESIZE INPUT  ==========*/
    function resizeInput(elm) {
        if (elm.val()) {
            elm.attr('size', elm.val().length);
        } else {
            elm.attr('size', 1);
        }
    }
    /*==========  OPSÆTTER SIZES PÅ ELEMENTER  ==========*/
    function setSize() {
        resizeInput($(document).find('input#pageNumber'));
        $('#page_viewer').css({
            height: '100%',//$(window).height(),
            width: '100%'//$(window).width()
        })
        $('#map').css({
            height: $(window).height(),
            width: $(window).width()
        })
        $('.topcontrols-button').css({
            top: $('.topcontrols').outerHeight()
        });
        if (!topDown) {
            setTimeout(function() {
                $('.topcontrols').css({
                    top: -(parseInt($('.topcontrols').outerHeight())) + 'px'
                });
            }, 400);
        }
    }
    function fixTop() {
        TweenMax.to(window, 0.5, {
            scrollTo: {
                y: 0
            },
            ease: Power2.easeInOut
        });
    }
    /*==========  PRINT FUNKTIONERN  ==========*/
    function PrintElem(elem) {
        Popup($(elem).html());
    }
    /*==========  SHOW IMAGE / VISER BILLEDE I VIEWEREN  ==========*/
    function showImage(imageType, imageSrc, condition, item) {
        if ($('#map').length !== 0) {
            removeViewers();
        }
        preventControls = true;
        $('.controls').addClass('disabled').css({
            opacity: 0.4
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
        if (imageType == 'image') {
            /*  if(img.src){
          img.src = '';
        }
        //img = new Image();
        img.onload = function() {
*/
            showSingleImage(imageSrc, 5000, 5000);
            /*
        };
        img.src = imageSrc;
*/
        } else {
            //console.log('diplaying tiles');
            showTileImage(imageSrc, item.metadata.height, item.metadata.width);
        }
        //$('.pager-input').val(currentImage);
        $('.controls').removeClass('disabled').css({
            opacity: 1
        });
        preventControls = false;
        //});
    }
    /*    function showSingleImage(imageSrc){
        var settings = {
        "viewportWidth" : "100%",
        "viewportHeight" : "100%",
        "fitToViewportShortSide" : false,
        "contentSizeOver100" : false,
        "startScale" : 0,
        "startX" : 956,
        "startY" : 660,
        "animTime" : 0,
        "draggInertia" : 0,
        "zoomLevel" : 1,
        "zoomStep" : 0.15,
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
        "popupShowAction" : "click",
        "testMode" : false
        };
        if ($('#map').length !== 0) {

          removeViewers();

          singleImageSet = true;
          $("#map").lhpMegaImgViewer(settings);
        //  $('.pager-input').val(currentImage);
        }
    }*/
    var tileImageSet, singleImageSet = false;
    var savedBounds = undefined;
    function showSingleImage(imageSrc, height, width) {
        if ($('#map').length !== 0) {
            removeViewers();
            // Using leaflet.js to pan and zoom a big image.
            // See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html
            //Test: Lets get the image size (and counting on the browser's cache for not getting the image twice!)
            var img = new Image();
            img.onload = function(){
                //alert( this.width+' '+ this.height );
                // create the slippy map
                var map = L.map('map', {
                    //minZoom: 9,
                    //maxZoom: 16,
                    //zoom: 1,
                    zoomControl: false,
                    imageFormat: 'jpeg',
                    crs: L.CRS.Simple,
                }).setView([0, 0], 0);
                map.addControl(L.control.zoom({
                    position: 'bottomleft'
                }));
                // calculate the edges of the image, in coordinate space
                var southWest = map.unproject([0, this.height], 12);
                var northEast = map.unproject([this.width, 0], 12);
                //Setting the bounds of the map.
                var bounds = new L.LatLngBounds(northEast,southWest);
                //Add the image overlay,
                //so that it covers the entire map
                L.imageOverlay(imageSrc, bounds).addTo(map);
                if(savedBounds){
                    map.fitBounds(savedBounds);
                }
                else{
                    //Centers view at width center, 3/8 of the height, zoom level 10
                    map.setView(map.unproject([this.width/2,(this.height/8)*3],12),10);
                }
                map.on('zoomend moveend dragend', function(e) {
                    savedBounds = e.target.getBounds();
                  //  console.log("savedBounds2: ", savedBounds);
                });
            };
            img.src = imageSrc;
        }
    }
    function showTileImage(imageSrc, height, width) {
        if ($('#map').length !== 0) {
            removeViewers();
            tileImageSet = true;
            var map = L.map('map', {
                zoomControl: false
            }).setView(new L.LatLng(0, 0), 0);
            map.addControl(L.control.zoom({
                position: 'bottomleft'
            }));
            L.tileLayer.deepzoom(imageSrc, {
                width: width,
                height: height,
                tolerance: 0.8,
                imageFormat: 'jpeg',
                minZoom: 9
            }).addTo(map);
            var southWest = map.unproject([0, height], map.getMaxZoom()),
                northEast = map.unproject([width, 0], map.getMaxZoom()),
                bounds = new L.LatLngBounds(southWest, northEast);
            // Restrict to bounds
            //map.setMaxBounds(bounds);
            // Fit bounds
            map.fitBounds(bounds);
        }
    }
    /*==========  INIT FUNKTIONER  ==========*/
    function init() {
        setSize();
        $("input.numeric").numeric();
        /*=====================================
        =            RADIO BUTTONS            =
        =====================================*/

        $.each($(document).find('input.radios'), function(index, val) {
           $(this).prettyCheckable();
           console.log(index);
        });
        /*-----  End of RADIO BUTTONS  ------*/
        setTimeout(function() {
            setSize();
        }, 400);
    }

    function toogleTop() {
        var topControls = $('.topcontrols'),
            findText = $('.findtext');
        if (topDown) {
            /*==========  VIS TOPPEN ALLEREDE ER NEDE - START ANIMATION / LUK  ==========*/
            findText.html('- - -');
            TweenMax.to(topControls, 0.5, {
                top: -topControls.outerHeight(),
                ease: Power2.easeInOut,
                onComplete: function() {
                    topDown = false;
                    preventControls = false;
                    showControls();
                    findText.html('Menu');
                    fixTop();
                }
            });
        } else {
            /*==========  VIS TOPPEN IKKE ER NEDE START ANIMATION / ÅBEN ==========*/
            findText.html('- - -');
            topControls.css({
                top: -topControls.outerHeight()
            });
            TweenMax.to(topControls, 0.8, {
                top: 0,
                ease: Power2.easeInOut,
                onComplete: function() {
                    topDown = true;
                    preventControls = true;
                    $('.controls').not('#toggleTop').fadeOut(400, function() {});
                    findText.html('Luk');
                }
            });
        }
    }
    var hideKeyboard = function() {
        document.activeElement.blur();
        $("input").blur();
    };
    $.ctrl = function(key, callback, args) {
        $(document).keydown(function(e) {
            if (!args) args = []; // IE barks when args is null
            if (e.keyCode == key && e.ctrlKey) {
                callback.apply(this, args);
                return false;
            }
        });
    };
    // img = new Image();
    function removeViewers() {
        //   img.src = '';
        var img = $('.leaflet-image-layer.leaflet-zoom-animated');
        if (img[0]) {
            img[0].src = '';
        }
        var parent = $('#map').parent();
        //$('#map').destroy();
        $('#map').remove();
        parent.append("<div id='map'></div");
        tileImageSet = singleImageSet = false;
    }
    //Redirect from #-URL to #!-URL
    function redirect() {
        if(window.location.href.search("/#") != -1 && window.location.href.search("/#!") == -1){
            window.location = (window.location.href.replace("/#", "/#!"));
            window.location.reload();
        }
    }
    /*-----  End of FUNCTIONS  ------*/
