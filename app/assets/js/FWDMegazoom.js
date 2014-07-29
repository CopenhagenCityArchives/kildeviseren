! function(a) {
    var b = function(a, c, d, e, f, g, h, i, j, k, l) {
        var m = this,
            n = b.prototype;
        m.pointer_img, m.left_sdo = null, m.middle_sdo = null, m.right_sdo = null, m.text_sdo = null, m.pointer_sdo = null, m.leftImagePath_str = f, m.middleImagePath_str = g, m.rightImagePath_str = h, m.fontColor_str = i, m.bottomPointer_str = l, m.topPointer_str = k, m.pointerPosition_str = j, m.toolTipLabel_str = d, m.toolTipLabel2_str = e, m.marginWidth = a.width, m.totalHeight = a.height, m.pointerWidth = c.width, m.pointerHeight = c.height, m.totalWidth, m.hideWithDelayId_do, m.isMobile_bl = FWDUtils.isMobile, m.isShowed_bl = !0, m.init = function() {
            m.setOverflow("visible"), m.setWidth(200), m.setupMainContainers(), m.setLabel(m.toolTipLabel_str), m.hide()
        }, m.setupMainContainers = function() {
            var a;
            m.left_sdo = new FWDSimpleDisplayObject("img"), a = new Image, a.src = m.leftImagePath_str, m.left_sdo.setScreen(a), m.left_sdo.setWidth(m.marginWidth), m.left_sdo.setHeight(m.totalHeight), m.addChild(m.left_sdo), m.middle_sdo = new FWDSimpleDisplayObject("img"), a = new Image, a.src = m.middleImagePath_str, m.middle_sdo.setScreen(a), m.middle_sdo.setX(m.marginWidth), m.middle_sdo.setWidth(m.marginWidth), m.middle_sdo.setHeight(m.totalHeight), m.addChild(m.middle_sdo), m.right_sdo = new FWDSimpleDisplayObject("img"), a = new Image, a.src = m.rightImagePath_str, m.right_sdo.setScreen(a), m.right_sdo.setWidth(m.marginWidth), m.right_sdo.setHeight(m.totalHeight), m.addChild(m.right_sdo), m.text_sdo = new FWDSimpleDisplayObject("div"), m.text_sdo.setBackfaceVisibility(), m.text_sdo.setDisplay("inline-block"), m.text_sdo.getStyle().fontFamily = "Arial", m.text_sdo.getStyle().fontSize = "12px", m.text_sdo.setHeight(20), m.text_sdo.getStyle().color = m.fontColor_str, m.text_sdo.getStyle().fontSmoothing = "antialiased", m.text_sdo.getStyle().webkitFontSmoothing = "antialiased", m.text_sdo.getStyle().textRendering = "optimizeLegibility", m.text_sdo.setX(m.marginWidth), FWDUtils.isIEAndLessThen9 || FWDUtils.isSafari ? m.text_sdo.setY(parseInt((m.totalHeight - 8) / 2) - 2) : m.text_sdo.setY(parseInt((m.totalHeight - 8) / 2) - 1), m.addChild(m.text_sdo), m.pointer_img = new Image, m.pointer_img.src = m.pointerPosition_str == FWDController.POSITION_BOTTOM ? m.bottomPointer_str : m.topPointer_str, m.pointer_sdo = new FWDSimpleDisplayObject("img"), m.pointer_sdo.setScreen(m.pointer_img), m.pointer_sdo.setWidth(m.pointerWidth), m.pointer_sdo.setHeight(m.pointerHeight), m.addChild(m.pointer_sdo)
        }, m.setLabel = function(a) {
            null != m && m.middle_sdo && (m.text_sdo.setInnerHTML(a), setTimeout(function() {
                null != m && (m.middle_sdo.setWidth(m.text_sdo.screen.offsetWidth), m.right_sdo.setX(m.text_sdo.screen.offsetWidth + m.marginWidth), m.totalWidth = 2 * m.marginWidth + m.text_sdo.screen.offsetWidth, m.positionPointer(0))
            }, 50))
        }, m.positionPointer = function(a) {
            var b, c;
            a || (a = 0), b = parseInt((m.totalWidth - m.pointerWidth) / 2) + a, c = m.pointerPosition_str == FWDController.POSITION_BOTTOM ? m.totalHeight - 1 : -m.pointerHeight + 1, m.pointer_sdo.setX(b), m.pointer_sdo.setY(c)
        }, m.show = function() {
            m.isShowed_bl || (clearInterval(m.hideWithDelayId_do), m.positionPointer(), m.setVisible(!0), TweenMax.killTweensOf(m), m.setAlpha(0), TweenMax.to(m, .4, {
                alpha: 1,
                delay: .1,
                ease: Quart.easeOut
            }), m.isShowed_bl = !0)
        }, m.hide = function() {
            m.isShowed_bl && (TweenMax.killTweensOf(m), m.setVisible(!1), m.isShowed_bl = !1)
        }, m.destroy = function() {
            TweenMax.killTweensOf(m), m.pointer_img = null, m.left_sdo.destroy(), m.middle_sdo.destroy(), m.right_sdo.destroy(), m.text_sdo.destroy(), m.pointer_sdo.destroy(), m.leftImagePath_str = null, m.middleImagePath_str = null, m.rightImagePath_str = null, m.fontColor_str = null, m.bottomPointer_str = null, m.topPointer_str = null, m.pointerPosition_str = null, m.toolTipLabel_str = null, m.toolTipLabel2_str = null, m.left_sdo = null, m.middle_sdo = null, m.right_sdo = null, m.text_sdo = null, m.pointer_sdo = null, a = null, c = null, d = null, e = null, f = null, g = null, h = null, i = null, j = null, k = null, l = null, m.setInnerHTML(""), n.destroy(), m = null, n = null, b.prototype = null
        }, m.init()
    };
    b.setPrototype = function() {
        b.prototype = null, b.prototype = new FWDDisplayObject("div")
    }, b.CLICK = "onClick", b.MOUSE_DOWN = "onMouseDown", b.prototype = null, a.FWDButtonToolTip = b
}(window),
function() {
    var a = function(b, c, d, e, f) {
        var g = this,
            h = a.prototype;
        this.n1Img = b, this.s1Img = c, this.n2Img = d, this.s2Img = e, this.firstButton_do, this.n1_do, this.s1_do, this.secondButton_do, this.n2_do, this.s2_do, this.buttonWidth = g.n1Img.width, this.buttonHeight = g.n1Img.height, this.currentState = 1, this.isDisabled_bl = !1, this.isMaximized_bl = !1, this.disptachMainEvent_bl = f, this.isDisabled_bl = !1, this.isMobile_bl = FWDUtils.isMobile, this.hasPointerEvent_bl = FWDUtils.hasPointerEvent, g.init = function() {
            g.hasTransform2d_bl = !1, g.setButtonMode(!0), g.setWidth(g.buttonWidth), g.setHeight(g.buttonHeight), g.setupMainContainers(), g.secondButton_do.setVisible(!1)
        }, g.setupMainContainers = function() {
            g.firstButton_do = new FWDDisplayObject("div"), g.addChild(g.firstButton_do), g.n1_do = new FWDSimpleDisplayObject("img"), g.n1_do.setScreen(g.n1Img), g.s1_do = new FWDSimpleDisplayObject("img"), g.s1_do.setScreen(g.s1Img), g.s1_do.setAlpha(0), g.firstButton_do.addChild(g.n1_do), g.firstButton_do.addChild(g.s1_do), g.firstButton_do.setWidth(g.n1Img.width), g.firstButton_do.setHeight(g.n1Img.height), g.secondButton_do = new FWDDisplayObject("div"), g.addChild(g.secondButton_do), g.n2_do = new FWDSimpleDisplayObject("img"), g.n2_do.setScreen(g.n2Img), g.s2_do = new FWDSimpleDisplayObject("img"), g.s2_do.setScreen(g.s2Img), g.s2_do.setAlpha(0), g.secondButton_do.addChild(g.n2_do), g.secondButton_do.addChild(g.s2_do), g.secondButton_do.setWidth(g.n2Img.width), g.secondButton_do.setHeight(g.n2Img.height), g.addChild(g.secondButton_do), g.addChild(g.firstButton_do), g.isMobile_bl ? g.hasPointerEvent_bl ? (g.screen.addEventListener("MSPointerDown", g.onMouseDown), g.screen.addEventListener("MSPointerUp", g.onClick), g.screen.addEventListener("MSPointerOver", g.onMouseOver), g.screen.addEventListener("MSPointerOut", g.onMouseOut)) : g.screen.addEventListener("touchstart", g.onMouseDown) : g.screen.addEventListener ? (g.screen.addEventListener("mouseover", g.onMouseOver), g.screen.addEventListener("mouseout", g.onMouseOut), g.screen.addEventListener("mousedown", g.onMouseDown), g.screen.addEventListener("click", g.onClick)) : g.screen.attachEvent && (g.screen.attachEvent("onmouseover", g.onMouseOver), g.screen.attachEvent("onmouseout", g.onMouseOut), g.screen.attachEvent("onmousedown", g.onMouseDown), g.screen.attachEvent("onclick", g.onClick))
        }, g.onMouseOver = function(b) {
            g.isDisabled_bl || b.pointerType && b.pointerType != b.MSPOINTER_TYPE_MOUSE || (g.dispatchEvent(a.MOUSE_OVER, {
                e: b
            }), g.setSelectedState())
        }, g.onMouseOut = function(b) {
            g.isDisabled_bl || b.pointerType && b.pointerType != b.MSPOINTER_TYPE_MOUSE || (g.setNormalState(), g.dispatchEvent(a.MOUSE_OUT))
        }, g.onClick = function(b) {
            g.isDisabled_bl || (b.preventDefault && b.preventDefault(), g.disptachMainEvent_bl && g.dispatchEvent(a.CLICK))
        }, g.onMouseDown = function(b) {
            g.isDisabled_bl || (b.preventDefault && b.preventDefault(), g.isMobile_bl || g.onMouseOver(b, !1), g.hasPointerEvent_bl && g.setNormalState(), g.disptachMainEvent_bl && g.dispatchEvent(a.MOUSE_DOWN, {
                e: b
            }))
        }, g.toggleButton = function() {
            1 == g.currentState ? (g.firstButton_do.setVisible(!1), g.secondButton_do.setVisible(!0), g.currentState = 0, g.dispatchEvent(a.FIRST_BUTTON_CLICK)) : (g.firstButton_do.setVisible(!0), g.secondButton_do.setVisible(!1), g.currentState = 1, g.dispatchEvent(a.SECOND_BUTTON_CLICK))
        }, g.setButtonState = function(a) {
            1 == a ? (g.firstButton_do.setVisible(!0), g.secondButton_do.setVisible(!1), g.currentState = 1) : (g.firstButton_do.setVisible(!1), g.secondButton_do.setVisible(!0), g.currentState = 0)
        }, this.setNormalState = function() {
            (!g.isMobile_bl || g.hasPointerEvent_bl) && (TweenMax.killTweensOf(g.s1_do), TweenMax.killTweensOf(g.s2_do), TweenMax.to(g.s1_do, .5, {
                alpha: 0,
                ease: Expo.easeOut
            }), TweenMax.to(g.s2_do, .5, {
                alpha: 0,
                ease: Expo.easeOut
            }))
        }, this.setSelectedState = function() {
            TweenMax.killTweensOf(g.s1_do), TweenMax.killTweensOf(g.s2_do), TweenMax.to(g.s1_do, .5, {
                alpha: 1,
                delay: .1,
                ease: Expo.easeOut
            }), TweenMax.to(g.s2_do, .5, {
                alpha: 1,
                delay: .1,
                ease: Expo.easeOut
            })
        }, g.destroy = function() {
            g.isMobile_bl ? g.hasPointerEvent_bl ? (g.screen.removeEventListener("MSPointerDown", g.onMouseDown), g.screen.removeEventListener("MSPointerUp", g.onClick), g.screen.removeEventListener("MSPointerOver", g.onMouseOver), g.screen.removeEventListener("MSPointerOut", g.onMouseOut)) : g.screen.removeEventListener("touchstart", g.onMouseDown) : g.screen.removeEventListener ? (g.screen.removeEventListener("mouseover", g.onMouseOver), g.screen.removeEventListener("mouseout", g.onMouseOut), g.screen.removeEventListener("mousedown", g.onMouseDown), g.screen.removeEventListener("click", g.onClick)) : g.screen.detachEvent && (g.screen.detachEvent("onmouseover", g.onMouseOver), g.screen.detachEvent("onmouseout", g.onMouseOut), g.screen.detachEvent("onmousedown", g.onMouseDown), g.screen.detachEvent("onclick", g.onClick)), TweenMax.killTweensOf(g.s1_do), TweenMax.killTweensOf(g.s2_do), g.firstButton_do.destroy(), g.n1_do.destroy(), g.s1_do.destroy(), g.secondButton_do.destroy(), g.n2_do.destroy(), g.s2_do.destroy(), g.firstButton_do = null, g.n1_do = null, g.s1_do = null, g.secondButton_do = null, g.n2_do = null, g.s2_do = null, g.n1Img = null, g.s1Img = null, g.n2Img = null, g.s2Img = null, b = null, c = null, d = null, e = null, g.init = null, g.setupMainContainers = null, g.onMouseOver = null, g.onMouseOut = null, g.onClick = null, g.onMouseDown = null, g.toggleButton = null, g.setButtonState = null, g.destroy = null, g.setInnerHTML(""), h.destroy(), g = null, h = null, a.prototype = null
        }, g.init()
    };
    a.setPrototype = function() {
        a.prototype = new FWDDisplayObject("div")
    }, a.FIRST_BUTTON_CLICK = "onFirstClick", a.SECOND_BUTTON_CLICK = "secondButtonOnClick", a.MOUSE_OVER = "onMouseOver", a.MOUSE_OUT = "onMouseOut", a.MOUSE_DOWN = "onMouseDown", a.CLICK = "onClick", a.prototype = null, window.FWDComplexButton = a
}(window),
function(a) {
    var b = function() {
        var c = this;
        b.prototype, this.main_do = null, this.init = function() {
            this.setupScreen(), a.onerror = this.showError, this.screen.style.zIndex = 100000009, setTimeout(this.addConsoleToDom, 100), setInterval(this.position, 100)
        }, this.position = function() {
            var a = FWDUtils.getScrollOffsets();
            c.setX(a.x), c.setY(a.y)
        }, this.addConsoleToDom = function() {
            -1 != navigator.userAgent.toLowerCase().indexOf("msie 7") ? document.getElementsByTagName("body")[0].appendChild(c.screen) : document.documentElement.appendChild(c.screen)
        }, this.setupScreen = function() {
            this.main_do = new FWDDisplayObject("div", "absolute"), this.main_do.setOverflow("auto"), this.main_do.setWidth(200), this.main_do.setHeight(300), this.setWidth(200), this.setHeight(300), this.main_do.setBkColor("#FFFFFF"), this.addChild(this.main_do)
        }, this.showError = function(a, b, d) {
            var e = c.main_do.getInnerHTML() + "<br>" + "JavaScript error: " + a + " on line " + d + " for " + b;
            c.main_do.setInnerHTML(e), c.main_do.screen.scrollTop = c.main_do.screen.scrollHeight
        }, this.log = function(a) {
            var b = c.main_do.getInnerHTML() + "<br>" + a;
            c.main_do.setInnerHTML(b), c.main_do.getScreen().scrollTop = 1e4
        }, this.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDDisplayObject("div", "absolute")
    }, b.prototype = null, a.FWDConsole = b
}(window),
function() {
    var a = function(b, c) {
        var d = this,
            e = a.prototype;
        d.parent = b, d.buttonsTest_ar = c.buttons_ar, d.itemsLabels_ar = c.contextMenuLabels_ar, d.items_ar = [], d.spacers_ar = [], d.moveLeftButton_do = null, d.moveRightButton_do = null, d.moveUpButton_do = null, d.moveDownButton_do = null, d.infoButton_do = null, d.fullScreenButton_do = null, d.zoomInButton_do = null, d.zoomOutButton_do = null, d.hideOrShowMarkersButton_do = null, d.hideOrShowController_do = null, d.infoButton_do = null, d.fullScreenButton_do = null, d.backgroundColor_str = c.contextMenuBackgroundColor_str, d.borderColor_str = c.contextMenuBorderColor_str, d.spacerColor_str = c.contextMenuSpacerColor_str, d.itemNormalColor_str = c.contextMenuItemNormalColor_str, d.itemSelectedColor_str = c.contextMenuItemSelectedColor_str, d.itemDisabledColor_str = c.contextMenuItemDisabledColor_str, d.draggingMode_str = c.startDraggingMode_str, d.link_str = c.link_str, d.borderRadius = 6, d.biggestWidth, d.totalWidth = 400, d.totalHeight = 400, d.sapaceBetweenButtons = 7, d.padding = 6, d.getMaxWidthResizeAndPositionId_to, d.inverseNextAndPrevRotation_bl = c.inverseNextAndPrevRotation_bl, d.showScriptDeveloper_bl = c.showScriptDeveloper_bl, d.show_bl = !1, d.isActive_bl = !1, d.areLeftAndRightButtonsDisabled_bl = !0, d.areUpAndDownButtonsDisabled_bl = !0, d.init = function() {
            (d.itemsLabels_ar || d.showScriptDeveloper_bl) && (d.show_bl = !0, d.setWidth(d.totalWidth), d.setHeight(d.totalHeight), d.setBkColor(d.backgroundColor_str), d.getStyle().borderColor = d.borderColor_str, d.getStyle().borderStyle = "solid", d.getStyle().borderRadius = d.borderRadius + "px", d.getStyle().borderWidth = "1px", d.setVisible(!1), d.setY(-2e3), d.parent.main_do.addChild(d), d.setupLabels(), d.setupDeveloperButton(), d.setupSpacers(), d.getMaxWidthResizeAndPositionId_to = setTimeout(d.getMaxWidthResizeAndPosition, 200)), d.addContextEvent()
        }, d.setupLabels = function() {
            var c, a = d.buttonsTest_ar.length,
                e = "",
                f = "";
            if (d.itemsLabels_ar)
                for (var g = 0; a > g; g++)
                    if (c = d.buttonsTest_ar[g], "moveleft" == c) e = d.itemsLabels_ar[g] || "Contextmenu item is not defined!", FWDContextMenuButton.setPrototype(), d.moveLeftButton_do = new FWDContextMenuButton(e, void 0, d.itemNormalColor_str, d.itemSelectedColor_str, d.itemDisabledColor_str), d.items_ar.push(d.moveLeftButton_do), d.moveLeftButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, d.moveLeftHandler), d.moveLeftButton_do.disable(), d.addChild(d.moveLeftButton_do);
                    else if ("moveright" == c) e = d.itemsLabels_ar[g] || "Contextmenu item is not defined!", FWDContextMenuButton.setPrototype(), d.moveRightButton_do = new FWDContextMenuButton(e, void 0, d.itemNormalColor_str, d.itemSelectedColor_str, d.itemDisabledColor_str), d.items_ar.push(d.moveRightButton_do), d.draggingMode_str == FWDController.ROTATE && d.moveRightButton_do.disable(), d.moveRightButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, d.moveRightHandler), d.moveRightButton_do.disable(), d.addChild(d.moveRightButton_do);
            else if ("moveup" == c) e = d.itemsLabels_ar[g] || "Contextmenu item is not defined!", FWDContextMenuButton.setPrototype(), d.moveUpButton_do = new FWDContextMenuButton(e, void 0, d.itemNormalColor_str, d.itemSelectedColor_str, d.itemDisabledColor_str), d.items_ar.push(d.moveUpButton_do), d.moveUpButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, d.moveUpHandler), d.moveUpButton_do.disable(), d.addChild(d.moveUpButton_do);
            else if ("movedown" == c) e = d.itemsLabels_ar[g] || "Contextmenu item is not defined!", FWDContextMenuButton.setPrototype(), d.moveDownButton_do = new FWDContextMenuButton(e, void 0, d.itemNormalColor_str, d.itemSelectedColor_str, d.itemDisabledColor_str), d.items_ar.push(d.moveDownButton_do), d.moveDownButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, d.downButtonStartHandler), d.moveDownButton_do.disable(), d.addChild(d.moveDownButton_do);
            else if ("scrollbar" == c) {
                var h = d.itemsLabels_ar[g];
                h ? -1 == h.indexOf("/") ? (e = "Contextmenu item is not defined!", f = "Contextmenu item is not defined!") : (e = h.substr(0, h.indexOf("/")), f = h.substr(h.indexOf("/") + 1)) : (e = "Contextmenu item is not defined!", f = "Contextmenu item is not defined!"), FWDContextMenuButton.setPrototype(), d.zoomInButton_do = new FWDContextMenuButton(e, void 0, d.itemNormalColor_str, d.itemSelectedColor_str, d.itemDisabledColor_str), d.items_ar.push(d.zoomInButton_do), d.zoomInButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, d.zoomInButtonStartHandler), d.addChild(d.zoomInButton_do), FWDContextMenuButton.setPrototype(), d.zoomOutButton_do = new FWDContextMenuButton(f, void 0, d.itemNormalColor_str, d.itemSelectedColor_str, d.itemDisabledColor_str), d.items_ar.push(d.zoomOutButton_do), d.zoomOutButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, d.zoomOutButtonStartHandler), d.addChild(d.zoomOutButton_do)
            } else if ("hideorshowmarkers" == c) {
                var h = d.itemsLabels_ar[g];
                h ? -1 == h.indexOf("/") ? (e = "Contextmenu item is not defined!", f = "Contextmenu item is not defined!") : (e = h.substr(0, h.indexOf("/")), f = h.substr(h.indexOf("/") + 1)) : (e = "Contextmenu item is not defined!", f = "Contextmenu item is not defined!"), FWDContextMenuButton.setPrototype(), d.hideOrShowMarkersButton_do = new FWDContextMenuButton(e, f, d.itemNormalColor_str, d.itemSelectedColor_str, d.itemDisabledColor_str), d.items_ar.push(d.hideOrShowMarkersButton_do), d.hideOrShowMarkersButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, d.startHideOrShowMarkersButton), d.addChild(d.hideOrShowMarkersButton_do)
            } else if ("info" == c) e = d.itemsLabels_ar[g] || "Contextmenu item is not defined!", FWDContextMenuButton.setPrototype(), d.infoButton_do = new FWDContextMenuButton(e, f, d.itemNormalColor_str, d.itemSelectedColor_str, d.itemDisabledColor_str), d.items_ar.push(d.infoButton_do), d.infoButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, d.infoButtonStart), d.addChild(d.infoButton_do);
            else if ("hideorshowcontroller" == c) {
                var h = d.itemsLabels_ar[g];
                h ? -1 == h.indexOf("/") ? (e = "Contextmenu item is not defined!", f = "Contextmenu item is not defined!") : (e = h.substr(0, h.indexOf("/")), f = h.substr(h.indexOf("/") + 1)) : (e = "Contextmenu item is not defined!", f = "Contextmenu item is not defined!"), FWDContextMenuButton.setPrototype(), d.hideOrShowController_do = new FWDContextMenuButton(e, f, d.itemNormalColor_str, d.itemSelectedColor_str, d.itemDisabledColor_str), d.items_ar.push(d.hideOrShowController_do), d.hideOrShowController_do.addListener(FWDContextMenuButton.CLICK, d.startHideOrShowControllerHandler), d.addChild(d.hideOrShowController_do)
            } else "fullscreen" == c && (b.displayType != FWDMegazoom.FULL_SCREEN || FWDUtils.hasFullScreen) && (h = d.itemsLabels_ar[g], h ? -1 == h.indexOf("/") ? (e = "Contextmenu item is not defined!", f = "Contextmenu item is not defined!") : (e = h.substr(0, h.indexOf("/")), f = h.substr(h.indexOf("/") + 1)) : (e = "Contextmenu item is not defined!", f = "Contextmenu item is not defined!"), FWDContextMenuButton.setPrototype(), d.fullScreenButton_do = new FWDContextMenuButton(e, f, d.itemNormalColor_str, d.itemSelectedColor_str, d.itemDisabledColor_str), d.items_ar.push(d.fullScreenButton_do), d.fullScreenButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, d.fullScreenStartHandler), d.addChild(d.fullScreenButton_do))
        }, d.setupDeveloperButton = function() {
            d.showScriptDeveloper_bl && (d.itemsLabels_ar || (d.itemsLabels_ar = []), d.itemsLabels_ar.push("&#0169; made by FWD"), label1_str = "&#0169; made by FWD", FWDContextMenuButton.setPrototype(), d.developerButton_do = new FWDContextMenuButton(label1_str, void 0, d.itemSelectedColor_str, d.itemNormalColor_str, d.itemDisabledColor_str), d.developerButton_do.isDeveleper_bl = !0, d.items_ar.push(d.developerButton_do), d.addChild(d.developerButton_do))
        }, this.enableLeftAndRightButtons = function() {
            d.areLeftAndRightButtonsDisabled_bl = !1, d.moveLeftButton_do && d.moveLeftButton_do.enable(), d.moveRightButton_do && d.moveRightButton_do.enable()
        }, this.disableLeftAndRightButtons = function() {
            d.areLeftAndRightButtonsDisabled_bl = !0, d.moveLeftButton_do && d.moveLeftButton_do.disable(), d.moveRightButton_do && d.moveRightButton_do.disable()
        }, this.enableUpAndDownButtons = function() {
            d.areUpAndDownButtonsDisabled_bl = !1, d.moveUpButton_do && d.moveUpButton_do.enable(), d.moveDownButton_do && d.moveDownButton_do.enable()
        }, this.disableUpAndDownButtons = function() {
            d.areUpAndDownButtonsDisabled_bl = !0, d.moveUpButton_do && d.moveUpButton_do.disable(), d.moveDownButton_do && d.moveDownButton_do.disable()
        }, d.moveLeftHandler = function(a) {
            d.dispatchEvent(FWDController.PAN, {
                e: a,
                dir: "left"
            })
        }, d.moveRightHandler = function(a) {
            d.dispatchEvent(FWDController.PAN, {
                e: a,
                dir: "right"
            })
        }, d.moveUpHandler = function(a) {
            d.dispatchEvent(FWDController.PAN, {
                e: a,
                dir: "up"
            })
        }, d.downButtonStartHandler = function(a) {
            d.dispatchEvent(FWDController.PAN, {
                e: a,
                dir: "down"
            })
        }, d.zoomInButtonStartHandler = function(a) {
            d.dispatchEvent(FWDController.ZOOM_IN, {
                e: a
            })
        }, d.zoomOutButtonStartHandler = function(a) {
            d.dispatchEvent(FWDController.ZOOM_OUT, {
                e: a
            })
        }, d.startHideOrShowMarkersButton = function(a) {
            0 == d.hideOrShowMarkersButton_do.currentState ? d.dispatchEvent(FWDController.HIDE_MARKERS, {
                e: a
            }) : d.dispatchEvent(FWDController.SHOW_MARKERS, {
                e: a
            })
        }, d.updateHideOrShowMarkersButton = function(a) {
            d.hideOrShowMarkersButton_do && (0 == a ? d.hideOrShowMarkersButton_do.setButtonState(0) : d.hideOrShowMarkersButton_do.setButtonState(1))
        }, d.infoButtonStart = function() {
            d.removeFromDOM(), d.dispatchEvent(FWDController.SHOW_INFO)
        }, d.fullScreenStartHandler = function() {
            0 == d.fullScreenButton_do.currentState ? d.dispatchEvent(FWDController.GO_FULL_SCREEN) : 1 == d.fullScreenButton_do.currentState && d.dispatchEvent(FWDController.GO_NORMAL_SCREEN), d.fullScreenButton_do.onMouseOut()
        }, d.updateFullScreenButton = function(a) {
            d.fullScreenButton_do && (0 == a ? d.fullScreenButton_do.setButtonState(0) : d.fullScreenButton_do.setButtonState(1), d.removeFromDOM())
        }, d.startHideOrShowControllerHandler = function() {
            0 == d.hideOrShowController_do.currentState ? (d.updateHideControllerButton(1), d.dispatchEvent(FWDController.HIDE_CONTROLLER)) : 1 == d.hideOrShowController_do.currentState && (d.updateHideControllerButton(0), d.dispatchEvent(FWDController.SHOW_CONTROLLER))
        }, d.updateHideControllerButton = function(a) {
            d.hideOrShowController_do && (0 == a ? d.hideOrShowController_do.setButtonState(0) : d.hideOrShowController_do.setButtonState(1))
        }, d.setupSpacers = function() {
            for (var b, a = d.items_ar.length - 1, c = 0; a > c; c++) b = new FWDSimpleDisplayObject("div"), d.spacers_ar[c] = b, b.setHeight(1), b.setBkColor(d.spacerColor_str), d.addChild(b)
        }, d.getMaxWidthResizeAndPosition = function() {
            var b, c, a = d.items_ar.length;
            d.totalWidth = 0, d.totalHeight = 0;
            for (var g = 0; a > g; g++) b = d.items_ar[g], b.getMaxTextWidth() > d.totalWidth && (d.totalWidth = b.getMaxTextWidth());
            for (var g = 0; a > g; g++) c = d.spacers_ar[g - 1], b = d.items_ar[g], b.setX(d.padding), b.setY(10 + g * (b.totalHeight + d.sapaceBetweenButtons) - d.padding), c && (c.setWidth(d.totalWidth + 2), c.setX(d.padding), c.setY(parseInt(b.getY() - d.sapaceBetweenButtons / 2) - 1)), b.setWidth(d.totalWidth + 2), b.centerText();
            d.totalHeight = b.getY() + b.totalHeight + 2, d.setWidth(d.totalWidth + 2 * d.padding + 4), d.setHeight(d.totalHeight), d.setVisible(!0), d.removeFromDOM()
        }, d.addContextEvent = function() {
            d.parent.main_do.screen.addEventListener ? d.parent.main_do.screen.addEventListener("contextmenu", d.contextMenuHandler) : d.parent.main_do.screen.attachEvent("oncontextmenu", d.contextMenuHandler)
        }, d.contextMenuHandler = function(a) {
            return d.show_bl && d.isActive_bl ? (d.parent.main_do.addChild(d), d.positionButtons(a), d.setAlpha(0), TweenMax.to(d, .4, {
                alpha: 1,
                ease: Quart.easeOut
            }), window.addEventListener ? (window.addEventListener("mousedown", d.contextMenuWindowOnMouseDownHandler), window.addEventListener("mouseup", d.contextMenuWindowOnMouseDownHandler)) : (document.documentElement.attachEvent("onmousedown", d.contextMenuWindowOnMouseDownHandler), document.documentElement.attachEvent("onmouseup", d.contextMenuWindowOnMouseDownHandler)), a.preventDefault ? (a.preventDefault(), void 0) : !1) : a.preventDefault ? (a.preventDefault(), void 0) : !1
        }, d.contextMenuWindowOnMouseDownHandler = function(a) {
            var b = FWDUtils.getViewportMouseCoordinates(a),
                c = b.screenX,
                e = b.screenY;
            FWDUtils.hitTest(d.screen, c, e) || (window.removeEventListener ? (window.removeEventListener("mousedown", d.contextMenuWindowOnMouseDownHandler), window.removeEventListener("mouseup", d.contextMenuWindowOnMouseDownHandler)) : (document.documentElement.detachEvent("onmousedown", d.contextMenuWindowOnMouseDownHandler), document.documentElement.detachEvent("onmouseup", d.contextMenuWindowOnMouseDownHandler)), d.removeFromDOM())
        }, d.positionButtons = function(a) {
            var b = FWDUtils.getViewportMouseCoordinates(a),
                c = d.parent.main_do.getWidth(),
                e = d.parent.main_do.getHeight(),
                f = b.screenX - d.parent.main_do.getGlobalX(),
                g = b.screenY - d.parent.main_do.getGlobalY(),
                h = f - 2,
                i = g - 2;
            d.totalWidth = d.getWidth(), d.totalHeight = d.getHeight(), h + d.totalWidth > c - 2 && (h = f - d.totalWidth), 0 > h && (h = parseInt((c - d.totalWidth) / 2)), 0 > h && (h = 0), i + d.totalHeight > e - 2 && (i = g - d.totalHeight), 0 > i && (i = parseInt((e - d.totalHeight) / 2)), 0 > i && (i = 0), d.setX(h), d.setY(i)
        }, d.disable = function() {
            d.moveLeftButton_do && d.moveLeftButton_do.disable(), d.moveRightButton_do && d.moveRightButton_do.disable(), d.moveUpButton_do && d.moveUpButton_do.disable(), d.moveDownButton_do && d.moveDownButton_do.disable(), d.hideOrShowMarkersButton_do && d.hideOrShowMarkersButton_do.disable(), d.hideOrShowController_do && d.hideOrShowController_do.disable(), d.infoButton_do && d.infoButton_do.disable(), d.zoomInButton_do && d.zoomInButton_do.disable(), d.zoomOutButton_do && d.zoomOutButton_do.disable()
        }, d.enable = function() {
            d.moveLeftButton_do && !d.areLeftAndRightButtonsDisabled_bl && d.moveLeftButton_do.enable(), d.moveRightButton_do && !d.areLeftAndRightButtonsDisabled_bl && d.moveRightButton_do.enable(), d.moveUpButton_do && !d.areUpAndDownButtonsDisabled_bl && d.moveUpButton_do.enable(), d.moveDownButton_do && !d.areUpAndDownButtonsDisabled_bl && d.moveDownButton_do.enable(), d.hideOrShowMarkersButton_do && d.hideOrShowMarkersButton_do.enable(), d.hideOrShowController_do && d.hideOrShowController_do.enable(), d.infoButton_do && d.infoButton_do.enable(), d.zoomInButton_do && d.zoomInButton_do.enable(), d.zoomOutButton_do && d.zoomOutButton_do.enable()
        }, d.removeFromDOM = function() {
            d.parent.main_do.contains(d) && d.parent.main_do.removeChild(d)
        }, d.destroy = function() {
            var f;
            clearTimeout(d.getMaxWidthResizeAndPositionId_to), TweenMax.killTweensOf(d), window.removeEventListener ? (window.removeEventListener("mousedown", d.contextMenuWindowOnMouseDownHandler), window.removeEventListener("mouseup", d.contextMenuWindowOnMouseDownHandler), d.parent.main_do.screen.removeEventListener("contextmenu", d.contextMenuHandler)) : (document.documentElement.detachEvent("onmousedown", d.contextMenuWindowOnMouseDownHandler), document.documentElement.detachEvent("onmouseup", d.contextMenuWindowOnMouseDownHandler), d.parent.main_do.screen.detachEvent("oncontextmenu", d.contextMenuHandler)), f = d.items_ar.length;
            for (var g = 0; f > g; g++) d.items_ar[g].destroy();
            f = d.spacers_ar.length;
            for (var g = 0; f > g; g++) d.spacers_ar[g].destroy();
            d.buttonsTest_ar = null, d.itemsLabels_ar = null, d.items_ar = null, d.spacers_ar = null, d.moveLeftButton_do = null, d.moveRightButton_do = null, d.moveUpButton_do = null, d.moveDownButton_do = null, d.hideOrShowMarkersButton_do = null, d.infoButton_do = null, d.hideOrShowController_do = null, d.fullScreenButton_do = null, d.zoomInButton_do = null, d.zoomOutButton_do = null, d.hideOrShowController_do = null, d.infoButton_do = null, d.fullScreenButton_do = null, d.backgroundColor_str = null, d.borderColor_str = null, d.spacerColor_str = null, d.itemNormalColor_str = null, d.itemSelectedColor_str = null, d.itemDisabledColor_str = null, d.draggingMode_str = null, d.link_str = null, b = null, c = null, d.setInnerHTML(""), e.destroy(), e = null, d = null, a.prototype = null
        }, d.init()
    };
    a.setPrototype = function() {
        a.prototype = new FWDDisplayObject("div")
    }, a.prototype = null, window.FWDContextMenu = a
}(window),
function() {
    var a = function(b, c, d, e, f) {
        var h = this,
            i = a.prototype;
        h.label1_str = b, h.label2_str = c, h.normalColor_str = d, h.selectedColor_str = e, h.disabledColor_str = f, h.totalWidth = 400, h.totalHeight = 20, h.padding, h.text1_sdo = null, h.text2_sdo = null, h.dumy_sdo = null, h.isMobile_bl = FWDUtils.isMobile, h.currentState = 1, h.isDisabled_bl = !1, h.isMaximized_bl = !1, h.showSecondButton_bl = void 0 != c, h.isDeveleper_bl = !1, h.init = function() {
            h.setBackfaceVisibility(), h.setButtonMode(!0), h.setupMainContainers(), h.setWidth(h.totalWidth), h.setHeight(h.totalHeight), h.setButtonState(0)
        }, h.setupMainContainers = function() {
            h.text1_sdo = new FWDSimpleDisplayObject("div"), h.text1_sdo.setBackfaceVisibility(), h.text1_sdo.setDisplay("inline-block"), h.text1_sdo.getStyle().fontFamily = "Arial", h.text1_sdo.getStyle().fontSize = "12px", h.text1_sdo.getStyle().color = h.normalColor_str, h.text1_sdo.getStyle().fontSmoothing = "antialiased", h.text1_sdo.getStyle().webkitFontSmoothing = "antialiased", h.text1_sdo.getStyle().textRendering = "optimizeLegibility", h.text1_sdo.setInnerHTML(h.label1_str), h.addChild(h.text1_sdo), h.showSecondButton_bl && (h.text2_sdo = new FWDSimpleDisplayObject("div"), h.text2_sdo.setBackfaceVisibility(), h.text2_sdo.setDisplay("inline-block"), h.text2_sdo.getStyle().fontFamily = "Arial", h.text2_sdo.getStyle().fontSize = "12px", h.text2_sdo.getStyle().color = h.normalColor_str, h.text2_sdo.getStyle().fontSmoothing = "antialiased", h.text2_sdo.getStyle().webkitFontSmoothing = "antialiased", h.text2_sdo.getStyle().textRendering = "optimizeLegibility", h.text2_sdo.setInnerHTML(h.label2_str), h.addChild(h.text2_sdo)), h.dumy_sdo = new FWDSimpleDisplayObject("div"), FWDUtils.isIE && (h.dumy_sdo.setBkColor("#FF0000"), h.dumy_sdo.setAlpha(0)), h.addChild(h.dumy_sdo), h.isMobile_bl ? h.screen.addEventListener("touchstart", h.onMouseDown) : h.screen.addEventListener ? (h.screen.addEventListener("mouseover", h.onMouseOver), h.screen.addEventListener("mouseout", h.onMouseOut), h.screen.addEventListener("mousedown", h.onMouseDown), h.screen.addEventListener("click", h.onClick)) : h.screen.attachEvent && (h.screen.attachEvent("onmouseover", h.onMouseOver), h.screen.attachEvent("onmouseout", h.onMouseOut), h.screen.attachEvent("onmousedown", h.onMouseDown), h.screen.attachEvent("onclick", h.onClick))
        }, h.onMouseOver = function(b) {
            h.isDisabled_bl || (TweenMax.killTweensOf(h.text1_sdo), b ? (TweenMax.to(h.text1_sdo.screen, .5, {
                css: {
                    color: h.selectedColor_str
                },
                ease: Expo.easeOut
            }), h.showSecondButton_bl && TweenMax.to(h.text2_sdo.screen, .5, {
                css: {
                    color: h.selectedColor_str
                },
                ease: Expo.easeOut
            })) : (h.text1_sdo.getStyle().color = h.selectedColor_str, h.showSecondButton_bl && (TweenMax.killTweensOf(h.text2_sdo), h.text2_sdo.getStyle().color = h.selectedColor_str)), h.dispatchEvent(a.MOUSE_OVER))
        }, h.onMouseOut = function() {
            h.isDisabled_bl || (TweenMax.killTweensOf(h.text1_sdo), TweenMax.to(h.text1_sdo.screen, .5, {
                css: {
                    color: h.normalColor_str
                },
                ease: Expo.easeOut
            }), h.showSecondButton_bl && (TweenMax.killTweensOf(h.text2_sdo), TweenMax.to(h.text2_sdo.screen, .5, {
                css: {
                    color: h.normalColor_str
                },
                ease: Expo.easeOut
            })), h.dispatchEvent(a.MOUSE_OUT))
        }, h.onClick = function(b) {
            return h.isDeveleper_bl ? (window.open("http://www.webdesign-flash.ro", "_blank"), void 0) : (h.isDisabled_bl || (b.preventDefault && b.preventDefault(), h.dispatchEvent(a.CLICK)), void 0)
        }, h.onMouseDown = function(b) {
            h.isDisabled_bl || (b.preventDefault && b.preventDefault(), h.dispatchEvent(a.MOUSE_DOWN, {
                e: b
            }))
        }, h.toggleButton = function() {
            h.showSecondButton_bl && (1 == h.currentState ? (h.text1_sdo.setVisible(!0), h.text2_sdo.setVisible(!1), h.currentState = 0, h.dispatchEvent(a.FIRST_BUTTON_CLICK)) : (h.text1_sdo.setVisible(!1), h.text2_sdo.setVisible(!0), h.currentState = 1, h.dispatchEvent(a.SECOND_BUTTON_CLICK)))
        }, h.setButtonState = function(a) {
            0 == a ? (h.text1_sdo.setVisible(!0), h.showSecondButton_bl && h.text2_sdo.setVisible(!1), h.currentState = 0) : 1 == a && (h.text1_sdo.setVisible(!1), h.showSecondButton_bl && h.text2_sdo.setVisible(!0), h.currentState = 1)
        }, h.centerText = function() {
            h.dumy_sdo.setWidth(h.totalWidth), h.dumy_sdo.setHeight(h.totalHeight), FWDUtils.isIEAndLessThen9 ? (h.text1_sdo.setY(Math.round((h.totalHeight - h.text1_sdo.getHeight()) / 2) - 1), h.showSecondButton_bl && h.text2_sdo.setY(Math.round((h.totalHeight - h.text2_sdo.getHeight()) / 2) - 1)) : (h.text1_sdo.setY(Math.round((h.totalHeight - h.text1_sdo.getHeight()) / 2)), h.showSecondButton_bl && h.text2_sdo.setY(Math.round((h.totalHeight - h.text2_sdo.getHeight()) / 2))), h.text1_sdo.setHeight(h.totalHeight + 2), h.showSecondButton_bl && h.text2_sdo.setHeight(h.totalHeight + 2)
        }, h.getMaxTextWidth = function() {
            var a = h.text1_sdo.getWidth(),
                b = 0;
            return h.showSecondButton_bl && (b = h.text2_sdo.getWidth()), Math.max(a, b)
        }, h.disable = function() {
            h.isDisabled_bl = !0, TweenMax.killTweensOf(h.text1_sdo), TweenMax.to(h.text1_sdo.screen, .5, {
                css: {
                    color: h.disabledColor_str
                },
                ease: Expo.easeOut
            }), h.setButtonMode(!1)
        }, h.enable = function() {
            h.isDisabled_bl = !1, TweenMax.killTweensOf(h.text1_sdo), TweenMax.to(h.text1_sdo.screen, .5, {
                css: {
                    color: h.normalColor_str
                },
                ease: Expo.easeOut
            }), h.setButtonMode(!0)
        }, h.destroy = function() {
            h.isMobile_bl ? h.screen.removeEventListener("touchstart", h.onMouseDown) : h.screen.removeEventListener ? (h.screen.removeEventListener("mouseover", h.onMouseOver), h.screen.removeEventListener("mouseout", h.onMouseOut), h.screen.removeEventListener("mousedown", h.onMouseDown), h.screen.removeEventListener("click", h.onClick)) : h.screen.detachEvent && (h.screen.detachEvent("onmouseover", h.onMouseOver), h.screen.detachEvent("onmouseout", h.onMouseOut), h.screen.detachEvent("onmousedown", h.onMouseDown), h.screen.detachEvent("onclick", h.onClick)), TweenMax.killTweensOf(h.text1_sdo), h.text1_sdo.destroy(), h.text2_sdo && (TweenMax.killTweensOf(h.text2_sdo), h.text2_sdo.destroy()), h.dumy_sdo.destroy(), h.text1_sdo = null, h.text2_sdo = null, h.dumy_sdo = null, h.label1_str = null, h.label2_str = null, h.normalColor_str = null, h.selectedColor_str = null, h.disabledColor_str = null, b = null, c = null, d = null, e = null, f = null, h.setInnerHTML(""), i.destroy(), h = null, i = null, a.prototype = null
        }, h.init()
    };
    a.setPrototype = function() {
        a.prototype = new FWDDisplayObject("div")
    }, a.FIRST_BUTTON_CLICK = "onFirstClick", a.SECOND_BUTTON_CLICK = "secondButtonOnClick", a.MOUSE_OVER = "onMouseOver", a.MOUSE_OUT = "onMouseOut", a.MOUSE_DOWN = "onMouseDown", a.CLICK = "onClick", a.prototype = null, window.FWDContextMenuButton = a
}(window),
function() {
    var a = function(b, c) {
        var d = this,
            e = a.prototype;
        this.buttonsTest_ar = b.buttons_ar, this.buttonsLabels_ar = b.buttonsLabels_ar, this.markersList_ar = [], this.markersPosition_ar = [], this.buttons_ar = [], this.backgroundLeft_img = b.controllerBackgroundLeft_img, this.backgroundRight_img = b.controllerBackgroundRight_img, this.downN_img = b.controllerMoveDownN_img, this.downS_img = b.controllerMoveDownS_img, this.downD_img = b.controllerMoveDownD_img, this.upN_img = b.controllerMoveUpN_img, this.upS_img = b.controllerMoveUpS_img, this.upD_img = b.controllerMoveUpD_img, this.nextN_img = b.controllerNextN_img, this.nextS_img = b.controllerNextS_img, this.nextD_img = b.controllerNextD_img, this.prevN_img = b.controllerPrevN_img, this.prevS_img = b.controllerPrevS_img, this.prevD_img = b.controllerPrevD_img, this.controllerHideMarkersN_img = b.controllerHideMarkersN_img, this.controllerHideMarkersS_img = b.controllerHideMarkersS_img, this.controllerShowMarkersN_img = b.controllerShowMarkersN_img, this.controllerShowMarkersS_img = b.controllerShowMarkersS_img, this.infoN_img = b.controllerInfoN_img, this.infoS_img = b.controllerInfoS_img, this.controllerHideN_img = b.controllerHideN_img, this.controllerHideS_img = b.controllerHideS_img, this.controllerShowN_img = b.controllerShowN_img, this.controllerShowS_img = b.controllerShowS_img, this.fullScreenNormalN_img = b.controllerFullScreenNormalN_img, this.fullScreenNormalS_img = b.controllerFullScreenNormalS_img, this.fullScreenFullN_img = b.controllerFullScreenFullN_img, this.fullScreenFullS_img = b.controllerFullScreenFullS_img, this.zoomInN_img = b.zoomInN_img, this.zoomInS_img = b.zoomInS_img, this.zoomOutN_img = b.zoomOutN_img, this.zoomOutS_img = b.zoomOutS_img, this.scrollBarHandlerN_img = b.scrollBarHandlerN_img, this.scrollBarHandlerS_img = b.scrollBarHandlerS_img, this.scrollBarLeft_img = b.scrollBarLeft_img, this.scrollBarRight_img = b.scrollBarRight_img, this.toolTipLeft_img = b.toolTipLeft_img, this.toolTipPointer_img = b.toolTipPointer_img, this.hider = null, this.mainHolder_do = null, this.backgroundLeft_sdo = null, this.backgroundMiddle_sdo = null, this.backgroundRight_sdo = null, this.moveDownButton_do = null, this.moveUpButton_do = null, this.moveRightButton_do = null, this.moveLeftButton_do = null, this.hideOrShowMarkersButton_do = null, this.infoButton_do = null, this.hideShowControllerButton_do = null, this.fullScreenButton_do = null, this.zoomIn_do = null, this.zoomOut_do = null, this.scrollBar_do = null, this.scrollBarLeft_sdo = null, this.scrollBarRight_sdo = null, this.scrollBarMiddle_sdo = null, this.scrollBarHandler_do = null, this.scrollBarHandlerN_sdo = null, this.scrollBarHandlerS_sdo = null, this.moveDownButtonTooTipLabel_do = null, this.scrollBarHandlerToolTip_do = null, this.moveUpButtonToolTip_do = null, this.nextButtonToolTip_do = null, this.moveLeftButtonToolTip_do = null, this.hideOrShowMarkersToolTip_do = null, this.infoToolTip_do = null, this.hideOrShowControllerToolTip_do = null, this.fullscreenToolTip_do = null, this.backgroundMiddlePath_str = b.controllerBackgroundMiddlePath_str, this.scrollBarMiddlePath_str = b.scrollBarMiddlePath_str, this.draggingMode_str = b.startDraggingMode_str, this.controllerPosition_str = b.controllerPosition_str, this.buttonToolTipLeft_str = b.buttonToolTipLeft_str, this.buttonToolTipMiddle_str = b.buttonToolTipMiddle_str, this.buttonToolTipRight_str = b.buttonToolTipRight_str, this.link_str = b.link_str, this.buttonToolTipFontColor_str = b.buttonToolTipFontColor_str, this.buttonToolTipBottomPointer_str = b.buttonToolTipBottomPointer_str, this.buttonToolTipTopPointer_str = b.buttonToolTipTopPointer_str, this.scrollBarPosition = FWDUtils.indexOfArray(d.buttonsTest_ar, "scrollbar"), this.controllerBackgroundOpacity = b.controllerBackgroundOpacity, this.panSpeed = b.buttonsPanSpeed, this.slideShowDelay = b.slideShowDelay, this.stageWidth, this.setHeight, this.controllerOffsetY = b.controllerOffsetY, this.scrollBarOffsetX = b.scrollBarOffsetX, this.scrollBarRightPartWidth = d.scrollBarRight_img.width, this.startSpaceBetweenButtons = b.startSpaceBetweenButtons, this.scrollBarHeight = d.scrollBarLeft_img.height, this.scrollBarHandlerWidth = d.scrollBarHandlerN_img.width, this.scrollBarHandlerHeight = d.scrollBarHandlerN_img.height, this.spaceBetweenButtons = b.spaceBetweenButtons, this.curHeight = d.backgroundLeft_img.height, this.zoomButtonWidth = d.zoomOutN_img.width, this.zoomButtonHeight = d.zoomOutN_img.height, this.finalHandlerX, this.startSpaceForScrollBarButtons = b.startSpaceForScrollBarButtons, this.smallSpaceForScrollBar = b.startSpaceForScrollBar, this.totalLargeButtons, this.curWidth, this.maxWidth = b.controllerMaxWidth, this.minWidth, this.buttonWidth = d.downN_img.width, this.buttonHeight = d.downN_img.height, this.scrollBarTotalWidth, this.scrollBarHandlerXPositionOnPress, this.lastPresedX, this.scrollBarHandlerToolTipOffsetY = b.scrollBarHandlerToolTipOffsetY, this.zoomInAndOutToolTipOffsetY = b.zoomInAndOutToolTipOffsetY, this.buttonsToolTipOffsetY = b.buttonsToolTipOffsetY, this.hideControllerOffsetY = b.hideControllerOffsetY, this.panImageId_int, this.zoomWithButtonsId_int, this.slideShowId_int, this.gotoImageId_to, this.zoomWithButtonsId_to, this.showId_to, this.disableForAWhileHideOrShowControllerToolTipId_to, this.showScrollBar_bl = !1, -1 != FWDUtils.indexOfArray(d.buttonsTest_ar, "scrollbar") && (d.showScrollBar_bl = !0), this.isMobile_bl = b.isMobile_bl, this.inverseNextAndPrevRotation_bl = b.inverseNextAndPrevRotation_bl, this.addKeyboardSupport_bl = b.addKeyboardSupport_bl, this.isScrollBarActive_bl = !1, this.isZoomInOrOutPressed_bl = !1, this.isHiddenForGood_bl = !1, this.disableHideOrShowControllerToolTip_bl = !1, this.showButtonsLabels_bl = Boolean(d.buttonsLabels_ar), this.hasPointerEvent_bl = FWDUtils.hasPointerEvent, d.init = function() {
            d.setOverflow("visible"), d.setSelectable(!1), d.setupMainHolder(), d.setupBackground(), d.setupButtons(), d.addKeyboardSupport_bl && d.addKeyboardSupport(), d.totalLargeButtons = d.buttons_ar.lenght, d.showScrollBar_bl && d.setupScrollBar(), 0 != d.buttonsTest_ar.length || d.showScrollBar_bl || d.setVisible(!1), d.hide(), d.showId_to = setTimeout(d.show, 1e3), d.screen.onmousedown = function() {
                d.dispatchEvent(a.MOUSE_DOWN)
            }
        }, d.resizeAndPosition = function() {
            (c.stageWidth != d.stageWidth || c.stageHeight != d.stageHeight) && (d.stageWidth = c.stageWidth, d.stageHeight = c.stageHeight, d.positionButtons())
        }, d.setupMainHolder = function() {
            d.mainHolder_do = new FWDDisplayObject("div"), d.mainHolder_do.setOverflow("visible"), d.addChild(d.mainHolder_do)
        }, d.setupHider = function(a) {
            d.hider = a, d.hider.addListener(FWDHider.SHOW, d.onHiderShow), d.hider.addListener(FWDHider.HIDE, d.onHiderHide)
        }, d.onHiderShow = function() {
            d.isHiddenForGood_bl || d.show()
        }, d.onHiderHide = function() {
            return d.isHiddenForGood_bl ? void 0 : FWDUtils.hitTest(d.mainHolder_do.screen, d.hider.globalX, d.hider.globalY) ? (d.hider.reset(), void 0) : (d.hide(!0), void 0)
        }, d.setupButtons = function() {
            for (var b, a = d.buttonsTest_ar.length, e = "", f = "", g = 0; a > g; g++)
                if (b = d.buttonsTest_ar[g], "movedown" == b) d.showButtonsLabels_bl && (e = d.buttonsLabels_ar[g] || "tooltip is not defined!"), d.setupDownButton(e), d.buttons_ar.push(d.moveDownButton_do);
                else if ("moveup" == b) d.showButtonsLabels_bl && (e = d.buttonsLabels_ar[g] || "tooltip is not defined!"), d.setupUpButton(e), d.buttons_ar.push(d.moveUpButton_do);
            else if ("moveright" == b) d.showButtonsLabels_bl && (e = d.buttonsLabels_ar[g] || "tooltip is not defined!"), d.setupMoveRightButton(e), d.buttons_ar.push(d.moveRightButton_do);
            else if ("moveleft" == b) d.showButtonsLabels_bl && (e = d.buttonsLabels_ar[g] || "tooltip is not defined!"), d.setupMoveLeftButton(e), d.buttons_ar.push(d.moveLeftButton_do);
            else if ("hideorshowmarkers" == b) {
                if (d.showButtonsLabels_bl) {
                    var h = d.buttonsLabels_ar[g];
                    h ? -1 == h.indexOf("/") ? (e = "tooltip is not defined!", f = "tooltip is not defined!") : (e = h.substr(0, h.indexOf("/")), f = h.substr(h.indexOf("/") + 1)) : (e = "tooltip is not defined!", f = "tooltip is not defined!")
                }
                d.setupHideOrShowMarkersButton(e, f), d.buttons_ar.push(d.hideOrShowMarkersButton_do)
            } else if ("info" == b) d.showButtonsLabels_bl && (e = d.buttonsLabels_ar[g] || "tooltip is not defined!"), d.setupInfoButton(e), d.buttons_ar.push(d.infoButton_do);
            else if ("hideorshowcontroller" == b) {
                if (d.showButtonsLabels_bl && (e = d.buttonsLabels_ar[g] || "tooltip is not defined!"), d.showButtonsLabels_bl) {
                    var h = d.buttonsLabels_ar[g];
                    h ? -1 == h.indexOf("/") ? (e = "tooltip is not defined!", f = "tooltip is not defined!") : (e = h.substr(0, h.indexOf("/")), f = h.substr(h.indexOf("/") + 1)) : (e = "tooltip is not defined!", f = "tooltip is not defined!")
                }
                d.setupHideOrShowController(e, f), d.buttons_ar.push(d.hideShowControllerButton_do)
            } else if ("fullscreen" == b && (c.displayType != FWDMegazoom.FULL_SCREEN || FWDUtils.hasFullScreen)) {
                if (d.showButtonsLabels_bl) {
                    var h = d.buttonsLabels_ar[g];
                    h ? -1 == h.indexOf("/") ? (e = "tooltip is not defined!", f = "tooltip is not defined!") : (e = h.substr(0, h.indexOf("/")), f = h.substr(h.indexOf("/") + 1)) : (e = "tooltip is not defined!", f = "tooltip is not defined!")
                }
                d.setupFullScreenButton(e, f), d.buttons_ar.push(d.fullScreenButton_do)
            }
        }, d.positionButtons = function() {
            var f, h, i, j, k, l, b = d.buttons_ar.length,
                c = d.spaceBetweenButtons;
            if (d.showScrollBar_bl && (d.isScrollBarActive_bl = !0, d.curWidth = d.stageWidth, l = FWDUtils.indexOfArray(d.buttons_ar, d.zoomIn_do), -1 != l && (d.buttons_ar.splice(l, 1), b--), l = FWDUtils.indexOfArray(d.buttons_ar, d.zoomOut_do), -1 != l && (d.buttons_ar.splice(l, 1), b--), d.scrollBarPosition > b && (d.scrollBarPosition = b), d.scrollBarPosition < 0 && (d.scrollBarPosition = 0), d.curWidth > d.maxWidth && (d.curWidth = d.maxWidth), d.scrollBarTotalWidth = 0 == b ? 2 * d.startSpaceBetweenButtons + 2 * d.startSpaceForScrollBarButtons + 2 * d.smallSpaceForScrollBar + 2 * d.zoomButtonWidth : b > 1 && 0 != d.scrollBarPosition && d.scrollBarPosition != b ? 2 * d.startSpaceBetweenButtons + b * d.buttonWidth + d.spaceBetweenButtons * (b - 2) + 2 * d.startSpaceForScrollBarButtons + 2 * d.smallSpaceForScrollBar + 2 * d.zoomButtonWidth : b > 1 && (0 == d.scrollBarPosition || d.scrollBarPosition == b) ? 3 * d.startSpaceBetweenButtons + b * d.buttonWidth + d.spaceBetweenButtons * (b - 1) + 2 * d.startSpaceForScrollBarButtons + 2 * d.smallSpaceForScrollBar + 2 * d.zoomButtonWidth : 2 * d.startSpaceBetweenButtons + b * d.buttonWidth + 2 * d.startSpaceForScrollBarButtons + 2 * d.smallSpaceForScrollBar + 2 * d.zoomButtonWidth, d.scrollBarTotalWidth = d.curWidth - d.scrollBarTotalWidth, d.scrollBarTotalWidth < 100 && (d.isScrollBarActive_bl = !1)), d.isScrollBarActive_bl) {
                d.scrollBar_do.setVisible(!0);
                for (var m = 0; m < d.scrollBarPosition; m++) k = d.buttons_ar[m], k && (k = d.buttons_ar[m], i = d.startSpaceBetweenButtons + m * (c + d.buttonWidth), j = parseInt((d.curHeight - d.buttonHeight) / 2), k != d.hideShowControllerButton_do ? (k.setX(i), k.setY(j)) : (k.finalX = i, k.finalY = j));
                for (var m = b + 1; m >= d.scrollBarPosition; m--) k = d.buttons_ar[m], k && (k = d.buttons_ar[m], i = d.curWidth - d.startSpaceBetweenButtons - d.buttonWidth - Math.abs(m - b + 1) * (c + d.buttonWidth), j = parseInt((d.curHeight - d.buttonHeight) / 2), k != d.hideShowControllerButton_do ? (k.setX(i), k.setY(j)) : (k.finalX = i, k.finalY = j));
                0 == b ? h = d.startSpaceForScrollBarButtons + d.startSpaceBetweenButtons : b > 1 && 0 != d.scrollBarPosition && d.scrollBarPosition != b ? h = d.buttons_ar[d.scrollBarPosition - 1].getX() + d.buttonWidth + d.startSpaceForScrollBarButtons : b > 1 && 0 == d.scrollBarPosition ? h = d.startSpaceBetweenButtons + d.startSpaceForScrollBarButtons : b > 1 && d.scrollBarPosition == b ? h = d.buttons_ar[d.scrollBarPosition - 1].getX() + d.buttonWidth + d.startSpaceForScrollBarButtons + d.startSpaceBetweenButtons : 1 == b && d.scrollBarPosition > 0 ? h = d.startSpaceBetweenButtons + d.buttonWidth + d.startSpaceForScrollBarButtons : 1 == b && 0 == d.scrollBarPosition && (h = d.startSpaceForScrollBarButtons + d.startSpaceBetweenButtons), h += d.scrollBarOffsetX, d.zoomOut_do.setX(h), d.zoomOut_do.setY(parseInt((d.curHeight - d.zoomButtonHeight) / 2)), d.zoomIn_do.setX(d.zoomOut_do.getX() + d.zoomButtonWidth + 2 * d.smallSpaceForScrollBar + d.scrollBarTotalWidth), d.zoomIn_do.setY(parseInt((d.curHeight - d.zoomButtonHeight) / 2)), d.scrollBar_do.setX(d.zoomOut_do.getX() + d.smallSpaceForScrollBar + d.zoomButtonWidth), d.scrollBar_do.setY(parseInt((d.curHeight - d.scrollBarHeight) / 2) + 1), d.scrollBar_do.setWidth(d.scrollBarTotalWidth), d.scrollBarMiddle_do.setX(d.scrollBarRightPartWidth - 1), d.scrollBarMiddle_do.setWidth(d.scrollBarTotalWidth - 2 * d.scrollBarRightPartWidth + 2), d.scrollBarRight_do.setX(d.scrollBarTotalWidth - d.scrollBarRightPartWidth)
            } else {
                d.showScrollBar_bl && (d.scrollBar_do.setVisible(!1), -1 == FWDUtils.indexOfArray(d.buttons_ar, d.zoomIn_do) && (l = d.scrollBarPosition, d.buttons_ar.splice(l, 0, d.zoomIn_do), d.buttons_ar.splice(l, 0, d.zoomOut_do)), b = d.buttons_ar.length), d.minWidth = b * d.buttonWidth + 2 * d.startSpaceBetweenButtons + d.spaceBetweenButtons * b - d.spaceBetweenButtons, d.minWidth > d.stageWidth && (d.minWidth = d.stageWidth, d.minWidth < 320 && (d.minWidth = 320), f = d.buttonWidth * b, c = (d.minWidth - 2 * d.startSpaceBetweenButtons - f) / (b - 1)), d.curWidth = d.minWidth;
                for (var m = 0; b + 2 > m; m++) k = d.buttons_ar[m], k && (i = d.startSpaceBetweenButtons + m * (c + d.buttonWidth), j = parseInt((d.curHeight - d.buttonHeight) / 2), k == d.zoomIn_do ? (i = i + parseInt((d.buttonWidth - d.zoomButtonWidth) / 2) - 2, j = parseInt((d.curHeight - d.zoomButtonHeight) / 2)) : k == d.zoomOut_do && (i = i + parseInt((d.buttonWidth - d.zoomButtonWidth) / 2) + 2, j = parseInt((d.curHeight - d.zoomButtonHeight) / 2)), k != d.hideShowControllerButton_do ? (k.setX(i), k.setY(j)) : (k.finalX = i, k.finalY = j))
            }
            d.backgroundRight_sdo.setX(d.curWidth - d.backgroundRight_sdo.getWidth()), d.backgroundMiddle_sdo.setX(d.backgroundLeft_sdo.getWidth()), d.backgroundMiddle_sdo.setWidth(d.curWidth - 2 * d.backgroundLeft_sdo.getWidth()), d.backgroundMiddle_sdo.setHeight(d.curHeight), d.mainHolder_do.setWidth(d.curWidth), d.mainHolder_do.setHeight(d.curHeight), d.controllerPosition_str == a.POSITION_TOP ? (d.mainHolder_do.setX(Math.round((d.stageWidth - d.curWidth) / 2)), d.setY(d.controllerOffsetY)) : (d.mainHolder_do.setX(Math.round((d.stageWidth - d.curWidth) / 2)), d.setY(d.stageHeight - d.curHeight - d.controllerOffsetY)), i = d.curWidth - d.startSpaceBetweenButtons - d.buttonWidth - Math.abs(m - b + 1) * (c + d.buttonWidth), j = parseInt((d.curHeight - d.buttonHeight) / 2), d.hideShowControllerButton_do && d.positionHideOrShowControllerButton(!1)
        }, this.positionHideOrShowControllerButton = function(b) {
            var c, e;
            d.controllerPosition_str == a.POSITION_TOP ? d.isHiddenForGood_bl ? (c = Math.round((d.curWidth - d.buttonWidth) / 2), e = d.curHeight) : (c = d.hideShowControllerButton_do.finalX, e = d.hideShowControllerButton_do.finalY) : d.isHiddenForGood_bl ? (c = Math.round((d.curWidth - d.buttonWidth) / 2), e = -d.buttonHeight - 2) : (c = d.hideShowControllerButton_do.finalX, e = d.hideShowControllerButton_do.finalY), TweenMax.killTweensOf(d.hideShowControllerButton_do), b ? TweenMax.to(d.hideShowControllerButton_do, .8, {
                x: c,
                y: e,
                ease: Expo.easeInOut
            }) : (d.hideShowControllerButton_do.setX(c), d.hideShowControllerButton_do.setY(e))
        }, d.setupBackground = function() {
            d.backgroundLeft_sdo = new FWDSimpleDisplayObject("img"), d.backgroundLeft_sdo.setScreen(d.backgroundLeft_img), 1 != d.controllerBackgroundOpacity && d.backgroundLeft_sdo.setAlpha(d.controllerBackgroundOpacity);
            var a = new Image;
            a.src = d.backgroundMiddlePath_str, d.isMobile_bl ? (d.backgroundMiddle_sdo = new FWDSimpleDisplayObject("div"), d.backgroundMiddle_sdo.getStyle().background = "url('" + b.controllerBackgroundMiddlePath_str + "') repeat-x") : (d.backgroundMiddle_sdo = new FWDSimpleDisplayObject("img"), d.backgroundMiddle_sdo.setScreen(a)), 1 != d.controllerBackgroundOpacity && d.backgroundMiddle_sdo.setAlpha(d.controllerBackgroundOpacity), d.backgroundRight_sdo = new FWDSimpleDisplayObject("img"), d.backgroundRight_sdo.setScreen(d.backgroundRight_img), 1 != d.controllerBackgroundOpacity && d.backgroundRight_sdo.setAlpha(d.controllerBackgroundOpacity), d.mainHolder_do.addChild(d.backgroundLeft_sdo), d.mainHolder_do.addChild(d.backgroundRight_sdo), d.mainHolder_do.addChild(d.backgroundMiddle_sdo)
        }, d.setupDownButton = function(a) {
            FWDSimpleButton.setPrototype(), d.moveDownButton_do = new FWDSimpleButton(d.downN_img, d.downS_img, d.downD_img, d.isMobile_bl), d.moveDownButton_do.addListener(FWDSimpleButton.MOUSE_OVER, d.moveDownOnMouseOverHandler), d.moveDownButton_do.addListener(FWDSimpleButton.MOUSE_OUT, d.moveDownButtonOnMouseOutHandler), d.moveDownButton_do.addListener(FWDSimpleButton.MOUSE_DOWN, d.moveDownButtonStartHandler), d.moveDownButton_do.disable(), d.mainHolder_do.addChild(d.moveDownButton_do), d.showButtonsLabels_bl && (FWDButtonToolTip.setPrototype(), d.moveDownButtonTooTipLabel_do = new FWDButtonToolTip(d.toolTipLeft_img, d.toolTipPointer_img, a, "", d.buttonToolTipLeft_str, d.buttonToolTipMiddle_str, d.buttonToolTipRight_str, d.buttonToolTipFontColor_str, d.controllerPosition_str, d.buttonToolTipTopPointer_str, d.buttonToolTipBottomPointer_str), d.mainHolder_do.addChild(d.moveDownButtonTooTipLabel_do))
        }, d.moveDownOnMouseOverHandler = function() {
            d.showButtonsLabels_bl && d.showToolTipButton(d.moveDownButton_do, d.moveDownButtonTooTipLabel_do, d.buttonsToolTipOffsetY)
        }, d.moveDownButtonOnMouseOutHandler = function() {
            d.showButtonsLabels_bl && d.moveDownButtonTooTipLabel_do.hide(!0)
        }, d.moveDownButtonStartHandler = function(b) {
            var b = void 0 == b.e ? b : b.e;
            b.touches && d.scrollBarHandler_do && (d.zoomInWithButtonsEndHandler(b), d.zoomOutWithButtonsEndHandler(b), d.handlerDragEndHandler(b)), clearInterval(d.panImageId_int), d.moveDownImageInWithDelay(), d.dispatchEvent(a.DISABLE_PAN_OR_MOVE), d.isMobile_bl ? d.hasPointerEvent_bl ? window.addEventListener("MSPointerUp", d.panEndHandler) : window.addEventListener("touchend", d.panEndHandler) : window.addEventListener ? window.addEventListener("mouseup", d.panEndHandler) : document.attachEvent && document.attachEvent("onmouseup", d.panEndHandler)
        }, d.moveDownImageInWithDelay = function() {
            d.panImageId_int = setInterval(d.panDown, 16)
        }, d.panDown = function() {
            d.dispatchEvent(a.PAN, {
                dir: "down"
            })
        }, d.setupUpButton = function(a) {
            FWDSimpleButton.setPrototype(), d.moveUpButton_do = new FWDSimpleButton(d.upN_img, d.upS_img, d.upD_img, d.isMobile_bl), d.moveUpButton_do.addListener(FWDSimpleButton.MOUSE_OVER, d.moveUpOnMouseOverHandler), d.moveUpButton_do.addListener(FWDSimpleButton.MOUSE_OUT, d.moveUpButtonOnMouseOutHandler), d.moveUpButton_do.addListener(FWDSimpleButton.MOUSE_DOWN, d.moveUpButtonStartHandler), d.moveUpButton_do.disable(), d.mainHolder_do.addChild(d.moveUpButton_do), d.showButtonsLabels_bl && (FWDButtonToolTip.setPrototype(), d.moveUpButtonTooTipLabel_do = new FWDButtonToolTip(d.toolTipLeft_img, d.toolTipPointer_img, a, "", d.buttonToolTipLeft_str, d.buttonToolTipMiddle_str, d.buttonToolTipRight_str, d.buttonToolTipFontColor_str, d.controllerPosition_str, d.buttonToolTipTopPointer_str, d.buttonToolTipBottomPointer_str), d.mainHolder_do.addChild(d.moveUpButtonTooTipLabel_do))
        }, d.moveUpOnMouseOverHandler = function() {
            d.showButtonsLabels_bl && d.showToolTipButton(d.moveUpButton_do, d.moveUpButtonTooTipLabel_do, d.buttonsToolTipOffsetY)
        }, d.moveUpButtonOnMouseOutHandler = function() {
            d.showButtonsLabels_bl && d.moveUpButtonTooTipLabel_do.hide(!0)
        }, d.moveUpButtonStartHandler = function(b) {
            var b = void 0 == b.e ? b : b.e;
            b.touches && d.scrollBarHandler_do && (d.zoomInWithButtonsEndHandler(b), d.zoomOutWithButtonsEndHandler(b), d.handlerDragEndHandler(b)), clearInterval(d.panImageId_int), d.moveUpImageInWithDelay(), d.dispatchEvent(a.DISABLE_PAN_OR_MOVE), d.isMobile_bl ? d.hasPointerEvent_bl ? window.addEventListener("MSPointerUp", d.panEndHandler) : window.addEventListener("touchend", d.panEndHandler) : window.addEventListener ? window.addEventListener("mouseup", d.panEndHandler) : document.attachEvent && document.attachEvent("onmouseup", d.panEndHandler)
        }, d.moveUpImageInWithDelay = function() {
            d.panImageId_int = setInterval(d.panUp, 16)
        }, d.panUp = function() {
            d.dispatchEvent(a.PAN, {
                dir: "up"
            })
        }, d.setupMoveRightButton = function(a) {
            FWDSimpleButton.setPrototype(), d.moveRightButton_do = new FWDSimpleButton(d.nextN_img, d.nextS_img, d.nextD_img, d.isMobile_bl), d.moveRightButton_do.addListener(FWDSimpleButton.MOUSE_OVER, d.moveRightOnMouseOverHandler), d.moveRightButton_do.addListener(FWDSimpleButton.MOUSE_OUT, d.moveRightButtonOnMouseOutHandler), d.moveRightButton_do.addListener(FWDSimpleButton.MOUSE_DOWN, d.moveRightButtonStartHandler), d.moveRightButton_do.disable(), d.mainHolder_do.addChild(d.moveRightButton_do), d.showButtonsLabels_bl && (FWDButtonToolTip.setPrototype(), d.nextButtonToolTip_do = new FWDButtonToolTip(d.toolTipLeft_img, d.toolTipPointer_img, a, "", d.buttonToolTipLeft_str, d.buttonToolTipMiddle_str, d.buttonToolTipRight_str, d.buttonToolTipFontColor_str, d.controllerPosition_str, d.buttonToolTipTopPointer_str, d.buttonToolTipBottomPointer_str), d.mainHolder_do.addChild(d.nextButtonToolTip_do))
        }, d.moveRightOnMouseOverHandler = function() {
            d.showButtonsLabels_bl && d.showToolTipButton(d.moveRightButton_do, d.nextButtonToolTip_do, d.buttonsToolTipOffsetY)
        }, d.moveRightButtonOnMouseOutHandler = function() {
            d.showButtonsLabels_bl && d.nextButtonToolTip_do.hide(!0)
        }, d.moveRightButtonStartHandler = function(b) {
            var b = void 0 == b.e ? b : b.e;
            b.touches && d.scrollBarHandler_do && (d.zoomInWithButtonsEndHandler(b), d.zoomOutWithButtonsEndHandler(b), d.handlerDragEndHandler(b)), clearInterval(d.panImageId_int), d.moveRightImageInWithDelay(), d.dispatchEvent(a.DISABLE_PAN_OR_MOVE), d.isMobile_bl ? d.hasPointerEvent_bl ? window.addEventListener("MSPointerUp", d.panEndHandler) : window.addEventListener("touchend", d.panEndHandler) : window.addEventListener ? window.addEventListener("mouseup", d.panEndHandler) : document.attachEvent && document.attachEvent("onmouseup", d.panEndHandler)
        }, d.panEndHandler = function() {
            clearInterval(d.panImageId_int), clearTimeout(d.gotoImageId_to), d.dispatchEvent(a.ENABLE_PAN_OR_MOVE), d.isMobile_bl ? d.hasPointerEvent_bl ? window.removeEventListener("MSPointerUp", d.panEndHandler) : window.removeEventListener("touchend", d.panEndHandler) : window.removeEventListener ? window.removeEventListener("mouseup", d.panEndHandler) : document.detachEvent && document.detachEvent("onmouseup", d.panEndHandler)
        }, d.moveRightImageInWithDelay = function() {
            d.panImageId_int = setInterval(d.panRight, 16)
        }, d.panRight = function() {
            d.dispatchEvent(a.PAN, {
                dir: "right"
            })
        }, d.setupMoveLeftButton = function(a) {
            FWDSimpleButton.setPrototype(), d.moveLeftButton_do = new FWDSimpleButton(d.prevN_img, d.prevS_img, d.prevD_img, d.isMobile_bl), d.moveLeftButton_do.addListener(FWDComplexButton.MOUSE_OVER, d.moveLeftButtonOnMouseOverHandler), d.moveLeftButton_do.addListener(FWDComplexButton.MOUSE_OUT, d.moveLeftButtonOnMouseOutHandler), d.moveLeftButton_do.addListener(FWDSimpleButton.MOUSE_DOWN, d.moveLeftButtonStartHandler), d.moveLeftButton_do.disable(), d.mainHolder_do.addChild(d.moveLeftButton_do), d.showButtonsLabels_bl && (FWDButtonToolTip.setPrototype(), d.moveLeftButtonToolTip_do = new FWDButtonToolTip(d.toolTipLeft_img, d.toolTipPointer_img, a, "", d.buttonToolTipLeft_str, d.buttonToolTipMiddle_str, d.buttonToolTipRight_str, d.buttonToolTipFontColor_str, d.controllerPosition_str, d.buttonToolTipTopPointer_str, d.buttonToolTipBottomPointer_str), d.mainHolder_do.addChild(d.moveLeftButtonToolTip_do))
        }, d.moveLeftButtonOnMouseOverHandler = function() {
            d.showButtonsLabels_bl && d.showToolTipButton(d.moveLeftButton_do, d.moveLeftButtonToolTip_do, d.buttonsToolTipOffsetY)
        }, d.moveLeftButtonOnMouseOutHandler = function() {
            d.showButtonsLabels_bl && d.moveLeftButtonToolTip_do.hide(!0)
        }, d.moveLeftButtonStartHandler = function(b) {
            var b = void 0 == b.e ? b : b.e;
            b.touches && d.scrollBarHandler_do && (d.zoomInWithButtonsEndHandler(b), d.zoomOutWithButtonsEndHandler(b), d.handlerDragEndHandler(b)), clearInterval(d.panImageId_int), d.moveLeftImageInWithDelay(), d.dispatchEvent(a.DISABLE_PAN_OR_MOVE), d.isMobile_bl ? d.hasPointerEvent_bl ? window.addEventListener("MSPointerUp", d.panEndHandler) : window.addEventListener("touchend", d.panEndHandler) : window.addEventListener ? window.addEventListener("mouseup", d.panEndHandler) : document.attachEvent && document.attachEvent("onmouseup", d.panEndHandler)
        }, d.moveLeftImageInWithDelay = function() {
            d.panImageId_int = setInterval(d.panLeft, 16)
        }, d.panLeft = function() {
            d.dispatchEvent(a.PAN, {
                dir: "left"
            })
        }, d.setupHideOrShowMarkersButton = function(a, b) {
            FWDComplexButton.setPrototype(), d.hideOrShowMarkersButton_do = new FWDComplexButton(d.controllerHideMarkersN_img, d.controllerHideMarkersS_img, d.controllerShowMarkersN_img, d.controllerShowMarkersS_img, !0), d.hideOrShowMarkersButton_do.addListener(FWDComplexButton.MOUSE_OVER, d.hideOrShowButtonOnMouseOverHandler), d.hideOrShowMarkersButton_do.addListener(FWDComplexButton.MOUSE_OUT, d.hideOrShowButtonOnMouseOutHandler), d.hideOrShowMarkersButton_do.addListener(FWDComplexButton.MOUSE_DOWN, d.hideOrShowButtonStartHandler), d.mainHolder_do.addChild(d.hideOrShowMarkersButton_do), d.showButtonsLabels_bl && (FWDButtonToolTip.setPrototype(), d.hideOrShowMarkersToolTip_do = new FWDButtonToolTip(d.toolTipLeft_img, d.toolTipPointer_img, a, b, d.buttonToolTipLeft_str, d.buttonToolTipMiddle_str, d.buttonToolTipRight_str, d.buttonToolTipFontColor_str, d.controllerPosition_str, d.buttonToolTipTopPointer_str, d.buttonToolTipBottomPointer_str), d.mainHolder_do.addChild(d.hideOrShowMarkersToolTip_do))
        }, d.hideOrShowButtonOnMouseOverHandler = function() {
            d.showButtonsLabels_bl && d.showToolTipButton(d.hideOrShowMarkersButton_do, d.hideOrShowMarkersToolTip_do, d.buttonsToolTipOffsetY)
        }, d.hideOrShowButtonOnMouseOutHandler = function() {
            d.showButtonsLabels_bl && d.hideOrShowMarkersToolTip_do.hide(!0)
        }, d.hideOrShowButtonStartHandler = function() {
            d.showButtonsLabels_bl && d.hideOrShowMarkersToolTip_do.hide(), 1 == d.hideOrShowMarkersButton_do.currentState ? d.dispatchEvent(a.HIDE_MARKERS) : d.dispatchEvent(a.SHOW_MARKERS)
        }, this.setHideOrShowButtonAndToolTipState = function(a) {
            1 == a ? (d.hideOrShowMarkersButton_do.setButtonState(0), d.showButtonsLabels_bl && d.hideOrShowMarkersToolTip_do.setLabel(d.hideOrShowMarkersToolTip_do.toolTipLabel2_str)) : (d.hideOrShowMarkersButton_do.setButtonState(1), d.showButtonsLabels_bl && d.hideOrShowMarkersToolTip_do.setLabel(d.hideOrShowMarkersToolTip_do.toolTipLabel_str))
        }, d.setupInfoButton = function(a) {
            FWDSimpleButton.setPrototype(), d.infoButton_do = new FWDSimpleButton(d.infoN_img, d.infoS_img, null, d.isMobile_bl), d.infoButton_do.addListener(FWDComplexButton.MOUSE_OVER, d.infoButtonOnMouseOverHandler), d.infoButton_do.addListener(FWDComplexButton.MOUSE_OUT, d.infoButtonOnMouseOutHandler), d.infoButton_do.addListener(FWDComplexButton.MOUSE_DOWN, d.infoButtonStartHandler), d.mainHolder_do.addChild(d.infoButton_do), d.showButtonsLabels_bl && (FWDButtonToolTip.setPrototype(), d.infoToolTip_do = new FWDButtonToolTip(d.toolTipLeft_img, d.toolTipPointer_img, a, "", d.buttonToolTipLeft_str, d.buttonToolTipMiddle_str, d.buttonToolTipRight_str, d.buttonToolTipFontColor_str, d.controllerPosition_str, d.buttonToolTipTopPointer_str, d.buttonToolTipBottomPointer_str), d.mainHolder_do.addChild(d.infoToolTip_do))
        }, d.infoButtonOnMouseOverHandler = function() {
            d.showButtonsLabels_bl && d.showToolTipButton(d.infoButton_do, d.infoToolTip_do, d.buttonsToolTipOffsetY)
        }, d.infoButtonOnMouseOutHandler = function() {
            d.showButtonsLabels_bl && d.infoToolTip_do.hide(!0)
        }, d.infoButtonStartHandler = function() {
            d.dispatchEvent(a.SHOW_INFO)
        }, d.setupHideOrShowController = function(a, b) {
            FWDComplexButton.setPrototype(), d.hideShowControllerButton_do = new FWDComplexButton(d.controllerHideN_img, d.controllerHideS_img, d.controllerShowN_img, d.controllerShowS_img, !0), d.hideShowControllerButton_do.addListener(FWDComplexButton.MOUSE_OVER, d.linkButtonOnMouseOverHandler), d.hideShowControllerButton_do.addListener(FWDComplexButton.MOUSE_OUT, d.linkButtonOnMouseOutHandler), d.hideShowControllerButton_do.addListener(FWDComplexButton.MOUSE_DOWN, d.hideOrShowControllerStartHandler), d.mainHolder_do.addChild(d.hideShowControllerButton_do), d.showButtonsLabels_bl && (FWDButtonToolTip.setPrototype(), d.hideOrShowControllerToolTip_do = new FWDButtonToolTip(d.toolTipLeft_img, d.toolTipPointer_img, a, b, d.buttonToolTipLeft_str, d.buttonToolTipMiddle_str, d.buttonToolTipRight_str, d.buttonToolTipFontColor_str, d.controllerPosition_str, d.buttonToolTipTopPointer_str, d.buttonToolTipBottomPointer_str), d.mainHolder_do.addChild(d.hideOrShowControllerToolTip_do), d.hideOrShowControllerToolTip_do.getStyle().zIndex = 100)
        }, d.linkButtonOnMouseOverHandler = function() {
            d.disableHideOrShowControllerToolTip_bl || d.showButtonsLabels_bl && d.showToolTipButton(d.hideShowControllerButton_do, d.hideOrShowControllerToolTip_do, d.buttonsToolTipOffsetY)
        }, d.linkButtonOnMouseOutHandler = function() {
            d.disableHideOrShowControllerToolTip_bl || d.showButtonsLabels_bl && d.hideOrShowControllerToolTip_do.hide(!0)
        }, d.hideOrShowControllerStartHandler = function() {
            d.disableHideOrShowControllerToolTip_bl || (d.hider && d.hider.reset(), d.showButtonsLabels_bl && d.hideOrShowControllerToolTip_do.hide(), d.hideShowControllerButton_do.isDisabled_bl = !0, setTimeout(function() {
                null != d && (d.isMobile_bl || d.hideShowControllerButton_do.setNormalState(), d.hideShowControllerButton_do.isDisabled_bl = !1)
            }, 400), d.disableHideOrShowControllerToolTip_bl = !0, clearTimeout(d.disableForAWhileHideOrShowControllerToolTipId_to), d.disableForAWhileHideOrShowControllerToolTipId_to = setTimeout(function() {
                d.disableHideOrShowControllerToolTip_bl = !1
            }, 400), 1 == d.hideShowControllerButton_do.currentState ? (d.setHideOrShowControllerAndToolTipState(1), d.dispatchEvent(a.HIDE_CONTROLLER)) : (d.setHideOrShowControllerAndToolTipState(0), d.dispatchEvent(a.SHOW_CONTROLLER)))
        }, this.setHideOrShowControllerAndToolTipState = function(a) {
            1 == a ? (d.isHiddenForGood_bl = !0, d.hideShowControllerButton_do.setButtonState(0), d.showButtonsLabels_bl && d.hideOrShowControllerToolTip_do.setLabel(d.hideOrShowControllerToolTip_do.toolTipLabel2_str), d.hide(!0)) : (d.isHiddenForGood_bl = !1, d.hideShowControllerButton_do.setButtonState(1), d.showButtonsLabels_bl && d.hideOrShowControllerToolTip_do.setLabel(d.hideOrShowControllerToolTip_do.toolTipLabel_str), d.show(!0)), d.positionHideOrShowControllerButton(!0)
        }, d.setupFullScreenButton = function(a, b) {
            FWDComplexButton.setPrototype(), d.fullScreenButton_do = new FWDComplexButton(d.fullScreenFullN_img, d.fullScreenFullS_img, d.fullScreenNormalN_img, d.fullScreenNormalS_img, !0), d.fullScreenButton_do.addListener(FWDComplexButton.MOUSE_OVER, d.fullscreenButtonOnMouseOverHandler), d.fullScreenButton_do.addListener(FWDComplexButton.MOUSE_OUT, d.fullscreenButtonOnMouseOutHandler), d.fullScreenButton_do.addListener(FWDComplexButton.MOUSE_DOWN, d.fullScreenButtonStartHandler), d.mainHolder_do.addChild(d.fullScreenButton_do), d.showButtonsLabels_bl && (FWDButtonToolTip.setPrototype(), d.fullscreenToolTip_do = new FWDButtonToolTip(d.toolTipLeft_img, d.toolTipPointer_img, a, b, d.buttonToolTipLeft_str, d.buttonToolTipMiddle_str, d.buttonToolTipRight_str, d.buttonToolTipFontColor_str, d.controllerPosition_str, d.buttonToolTipTopPointer_str, d.buttonToolTipBottomPointer_str), d.mainHolder_do.addChild(d.fullscreenToolTip_do))
        }, d.fullscreenButtonOnMouseOverHandler = function() {
            d.showButtonsLabels_bl && d.showToolTipButton(d.fullScreenButton_do, d.fullscreenToolTip_do, d.buttonsToolTipOffsetY)
        }, d.fullscreenButtonOnMouseOutHandler = function() {
            d.showButtonsLabels_bl && d.fullscreenToolTip_do.hide(!0)
        }, d.fullScreenButtonStartHandler = function(b) {
            1 == d.fullScreenButton_do.currentState ? (d.showButtonsLabels_bl && d.fullscreenToolTip_do.setLabel(d.fullscreenToolTip_do.toolTipLabel2_str), d.fullScreenButton_do.setButtonState(0), d.dispatchEvent(a.GO_FULL_SCREEN)) : 0 == d.fullScreenButton_do.currentState && (d.showButtonsLabels_bl && d.fullscreenToolTip_do.setLabel(d.fullscreenToolTip_do.toolTipLabel_str), d.fullScreenButton_do.setButtonState(1), d.dispatchEvent(a.GO_NORMAL_SCREEN)), setTimeout(function() {
                null != d && d.fullScreenButton_do.onMouseOut(b)
            }, 50)
        }, d.setFullScreenButtonState = function(a) {
            0 == a ? (d.fullScreenButton_do.setButtonState(0), d.showButtonsLabels_bl && d.fullscreenToolTip_do.setLabel(d.fullscreenToolTip_do.toolTipLabel2_str)) : 1 == a && (d.fullScreenButton_do.setButtonState(1), d.showButtonsLabels_bl && d.fullscreenToolTip_do.setLabel(d.fullscreenToolTip_do.toolTipLabel_str))
        }, d.setupScrollBar = function() {
            var a;
            FWDSimpleButton.setPrototype(), d.zoomIn_do = new FWDSimpleButton(d.zoomInN_img, d.zoomInS_img, null, d.isMobile_bl), d.zoomIn_do.addListener(FWDSimpleButton.MOUSE_OVER, d.zoomInMouseOverHandler), d.zoomIn_do.addListener(FWDSimpleButton.MOUSE_OUT, d.zoomInOrOutMouseOutHandler), d.zoomIn_do.addListener(FWDSimpleButton.MOUSE_DOWN, d.zoomInStartHandler), d.mainHolder_do.addChild(d.zoomIn_do), FWDSimpleButton.setPrototype(), d.zoomOut_do = new FWDSimpleButton(d.zoomOutN_img, d.zoomOutS_img, null, d.isMobile_bl), d.zoomOut_do.addListener(FWDSimpleButton.MOUSE_OVER, d.zoomOutMouseOverHandler), d.zoomOut_do.addListener(FWDSimpleButton.MOUSE_OUT, d.zoomInOrOutMouseOutHandler), d.zoomOut_do.addListener(FWDSimpleButton.MOUSE_DOWN, d.zoomOutStartHandler), d.mainHolder_do.addChild(d.zoomOut_do), d.scrollBar_do = new FWDDisplayObject("div"), d.scrollBar_do.setOverflow("visible"), d.scrollBar_do.setHeight(d.scrollBarHeight), d.mainHolder_do.addChild(d.scrollBar_do), d.scrollBarLeft_do = new FWDSimpleDisplayObject("img"), d.scrollBarLeft_do.setScreen(b.scrollBarLeft_img), d.scrollBar_do.addChild(d.scrollBarLeft_do), d.scrollBarMiddle_do = new FWDSimpleDisplayObject("div"), d.scrollBarMiddle_do.setHeight(d.scrollBarHeight), d.scrollBarMiddle_do.getStyle().background = "url('" + d.scrollBarMiddlePath_str + "')", d.scrollBarMiddle_do.getStyle().backgroundRepeat = "repeat-x", d.scrollBar_do.addChild(d.scrollBarMiddle_do), d.scrollBarRight_do = new FWDSimpleDisplayObject("img"), d.scrollBarRight_do.setScreen(d.scrollBarRight_img), d.scrollBar_do.addChild(d.scrollBarRight_do), FWDSimpleButton.setPrototype(), d.scrollBarHandler_do = new FWDSimpleButton(d.scrollBarHandlerN_img, d.scrollBarHandlerS_img, null, d.isMobile_bl), d.scrollBarHandler_do.setY(parseInt((d.scrollBarHeight - d.scrollBarHandlerHeight) / 2) - 1), d.scrollBarHandler_do.addListener(FWDSimpleButton.MOUSE_OVER, d.handlerOnMouseOver), d.scrollBarHandler_do.addListener(FWDSimpleButton.MOUSE_OUT, d.handlerOnMouseOut), d.scrollBarHandler_do.addListener(FWDSimpleButton.MOUSE_DOWN, d.handlerDragStartHandler), d.scrollBar_do.addChild(d.scrollBarHandler_do), d.showButtonsLabels_bl && (a = d.buttonsLabels_ar[d.scrollBarPosition] || "tooltip is not defined!", FWDButtonToolTip.setPrototype(), d.scrollBarHandlerToolTip_do = new FWDButtonToolTip(d.toolTipLeft_img, d.toolTipPointer_img, a, "", d.buttonToolTipLeft_str, d.buttonToolTipMiddle_str, d.buttonToolTipRight_str, d.buttonToolTipFontColor_str, d.controllerPosition_str, d.buttonToolTipTopPointer_str, d.buttonToolTipBottomPointer_str), d.mainHolder_do.addChild(d.scrollBarHandlerToolTip_do))
        }, d.zoomInMouseOverHandler = function() {
            d.showButtonsLabels_bl && (d.scrollBarHandlerToolTip_do.show(), d.isScrollBarActive_bl ? d.positionAndSetLabelScrollBarHandler() : !d.isScrollBarActive_bl && d.showButtonsLabels_bl && setTimeout(function() {
                if (null != d) {
                    var a = d.finalHandlerX / (d.scrollBarTotalWidth - d.scrollBarHandlerWidth);
                    d.scrollBarHandlerToolTip_do.setLabel(d.scrollBarHandlerToolTip_do.toolTipLabel_str + Math.round(100 * a) + "%"), d.showZoomInOrOutToolTipButton(d.zoomIn_do, d.scrollBarHandlerToolTip_do, d.zoomInAndOutToolTipOffsetY)
                }
            }, 50))
        }, d.zoomInOrOutMouseOutHandler = function() {
            d.showButtonsLabels_bl && d.scrollBarHandlerToolTip_do.hide(!0)
        }, d.zoomInStartHandler = function(b) {
            b = b.e, b.touches && d.handlerDragEndHandler(b), clearInterval(d.zoomWithButtonsId_int), clearTimeout(d.zoomWithButtonsId_to), d.zoomWithButtonsId_to = setTimeout(d.startZoomInWithDelay, 400), d.dispatchEvent(a.DISABLE_PAN_OR_MOVE), d.zoomInWithButtonsDispatchEvent(!0), d.zoomIn_do.isSelectedFinal_bl = !0, d.isZoomInOrOutPressed_bl = !0, d.isMobile_bl ? d.hasPointerEvent_bl ? window.addEventListener("MSPointerUp", d.zoomInWithButtonsEndHandler) : window.addEventListener("touchend", d.zoomInWithButtonsEndHandler) : window.addEventListener ? window.addEventListener("mouseup", d.zoomInWithButtonsEndHandler) : document.attachEvent && document.attachEvent("onmouseup", d.zoomInWithButtonsEndHandler)
        }, d.startZoomInWithDelay = function() {
            d.zoomWithButtonsId_int = setInterval(d.zoomInWithButtonsDispatchEvent, 16)
        }, d.zoomInWithButtonsDispatchEvent = function(b) {
            b ? d.dispatchEvent(a.ZOOM_WITH_BUTTONS, {
                dir: 1,
                withPause: !0
            }) : d.dispatchEvent(a.ZOOM_WITH_BUTTONS, {
                dir: 1,
                withPause: !1
            }), !d.isScrollBarActive_bl && d.showButtonsLabels_bl && setTimeout(function() {
                if (null != d) {
                    var a = d.finalHandlerX / (d.scrollBarTotalWidth - d.scrollBarHandlerWidth);
                    d.scrollBarHandlerToolTip_do.setLabel(d.scrollBarHandlerToolTip_do.toolTipLabel_str + Math.round(100 * a) + "%"), d.showZoomInOrOutToolTipButton(d.zoomIn_do, d.scrollBarHandlerToolTip_do, d.zoomInAndOutToolTipOffsetY)
                }
            }, 50)
        }, d.zoomInWithButtonsEndHandler = function(b) {
            var c;
            clearInterval(d.zoomWithButtonsId_int), clearTimeout(d.zoomWithButtonsId_to), d.isZoomInOrOutPressed_bl = !1, d.zoomIn_do.isSelectedFinal_bl = !1, c = FWDUtils.getViewportMouseCoordinates(b), FWDUtils.hitTest(d.zoomIn_do.screen, c.screenX, c.screenY) || d.zoomIn_do.onMouseOut(b), d.dispatchEvent(a.ENABLE_PAN_OR_MOVE), d.isMobile_bl ? d.hasPointerEvent_bl ? window.removeEventListener("MSPointerUp", d.zoomInWithButtonsEndHandler) : window.removeEventListener("touchend", d.zoomInWithButtonsEndHandler) : window.removeEventListener ? window.removeEventListener("mouseup", d.zoomInWithButtonsEndHandler) : document.detachEvent && document.detachEvent("onmouseup", d.zoomInWithButtonsEndHandler)
        }, d.zoomOutMouseOverHandler = function() {
            d.showButtonsLabels_bl && (d.scrollBarHandlerToolTip_do.show(), d.isScrollBarActive_bl ? d.positionAndSetLabelScrollBarHandler() : !d.isScrollBarActive_bl && d.showButtonsLabels_bl && setTimeout(function() {
                if (null != d) {
                    var a = d.finalHandlerX / (d.scrollBarTotalWidth - d.scrollBarHandlerWidth);
                    d.scrollBarHandlerToolTip_do.setLabel(d.scrollBarHandlerToolTip_do.toolTipLabel_str + Math.round(100 * a) + "%"), d.showZoomInOrOutToolTipButton(d.zoomOut_do, d.scrollBarHandlerToolTip_do, d.zoomInAndOutToolTipOffsetY)
                }
            }, 50))
        }, d.zoomOutStartHandler = function(b) {
            b = b.e, b.touches && d.handlerDragEndHandler(b), clearInterval(d.zoomWithButtonsId_int), clearTimeout(d.zoomWithButtonsId_to), d.zoomWithButtonsId_to = setTimeout(d.startZoomOutWithDelay, 400), d.dispatchEvent(a.DISABLE_PAN_OR_MOVE), d.zoomOutWithButtonsDispatchEvent(!0), d.zoomOut_do.isSelectedFinal_bl = !0, d.isZoomInOrOutPressed_bl = !0, d.isMobile_bl ? d.hasPointerEvent_bl ? window.addEventListener("MSPointerUp", d.zoomOutWithButtonsEndHandler) : window.addEventListener("touchend", d.zoomOutWithButtonsEndHandler) : window.addEventListener ? window.addEventListener("mouseup", d.zoomOutWithButtonsEndHandler) : document.attachEvent && document.attachEvent("onmouseup", d.zoomOutWithButtonsEndHandler)
        }, d.startZoomOutWithDelay = function() {
            d.zoomWithButtonsId_int = setInterval(d.zoomOutWithButtonsDispatchEvent, 16)
        }, d.zoomOutWithButtonsDispatchEvent = function(b) {
            !d.isScrollBarActive_bl && d.showButtonsLabels_bl && setTimeout(function() {
                if (null != d) {
                    var a = d.finalHandlerX / (d.scrollBarTotalWidth - d.scrollBarHandlerWidth);
                    d.scrollBarHandlerToolTip_do.setLabel(d.scrollBarHandlerToolTip_do.toolTipLabel_str + Math.round(100 * a) + "%"), d.showZoomInOrOutToolTipButton(d.zoomOut_do, d.scrollBarHandlerToolTip_do, d.zoomInAndOutToolTipOffsetY)
                }
            }, 50), b ? d.dispatchEvent(a.ZOOM_WITH_BUTTONS, {
                dir: -1,
                withPause: !0
            }) : d.dispatchEvent(a.ZOOM_WITH_BUTTONS, {
                dir: -1,
                withPause: !1
            })
        }, d.zoomOutWithButtonsEndHandler = function(b) {
            var c;
            clearInterval(d.zoomWithButtonsId_int), clearTimeout(d.zoomWithButtonsId_to), d.isZoomInOrOutPressed_bl = !1, d.zoomOut_do.isSelectedFinal_bl = !1, c = FWDUtils.getViewportMouseCoordinates(b), FWDUtils.hitTest(d.zoomOut_do.screen, c.screenX, c.screenY) || d.zoomOut_do.onMouseOut(b), d.dispatchEvent(a.ENABLE_PAN_OR_MOVE), d.isMobile_bl ? d.hasPointerEvent_bl ? window.removeEventListener("MSPointerUp", d.zoomOutWithButtonsEndHandler) : window.removeEventListener("touchend", d.zoomOutWithButtonsEndHandler) : window.removeEventListener ? window.removeEventListener("mouseup", d.zoomOutWithButtonsEndHandler) : document.detachEvent && document.detachEvent("onmouseup", d.zoomOutWithButtonsEndHandler)
        }, d.handlerOnMouseOver = function() {
            d.showButtonsLabels_bl && (d.positionAndSetLabelScrollBarHandler(), d.scrollBarHandlerToolTip_do.show())
        }, d.handlerOnMouseOut = function() {
            d.showButtonsLabels_bl && d.scrollBarHandlerToolTip_do.hide(!0)
        }, d.handlerDragStartHandler = function(b) {
            b = b.e, d.isMobile_bl && (d.handlerDragEndHandler(b), (d.moveLeftButton_do || d.moveLeftButton_do) && d.panEndHandler(b));
            var c = FWDUtils.getViewportMouseCoordinates(b);
            d.lastPresedX = c.screenX, d.scrollBarHandlerXPositionOnPress = d.scrollBarHandler_do.getX(), d.scrollBarHandler_do.isSelectedFinal_bl = !0, d.dispatchEvent(a.DISABLE_PAN_OR_MOVE), d.isMobile_bl ? d.hasPointerEvent_bl ? (window.addEventListener("MSPointerMove", d.handlerDragMoveHandler), window.addEventListener("MSPointerUp", d.handlerDragEndHandler)) : (window.addEventListener("touchmove", d.handlerDragMoveHandler), window.addEventListener("touchend", d.handlerDragEndHandler)) : (d.scrollBarHandler_do.isSelectedFinal_bl = !0, window.addEventListener ? (window.addEventListener("mousemove", d.handlerDragMoveHandler), window.addEventListener("mouseup", d.handlerDragEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", d.handlerDragMoveHandler), document.attachEvent("onmouseup", d.handlerDragEndHandler)))
        }, d.handlerDragMoveHandler = function(b) {
            b.preventDefault && b.preventDefault();
            var c = FWDUtils.getViewportMouseCoordinates(b);
            d.finalHandlerX = Math.round(d.scrollBarHandlerXPositionOnPress + c.screenX - d.lastPresedX), d.finalHandlerX <= 0 ? d.finalHandlerX = 0 : d.finalHandlerX >= d.scrollBarTotalWidth - d.scrollBarHandlerWidth && (d.finalHandlerX = d.scrollBarTotalWidth - d.scrollBarHandlerWidth);
            var e = d.finalHandlerX / (d.scrollBarTotalWidth - d.scrollBarHandlerWidth);
            d.dispatchEvent(a.SCROLL_BAR_UPDATE, {
                percent: e
            }), d.scrollBarHandler_do.setX(d.finalHandlerX), d.positionAndSetLabelScrollBarHandler()
        }, d.handlerDragEndHandler = function(b) {
            var c;
            d.dispatchEvent(a.ENABLE_PAN_OR_MOVE), c = FWDUtils.getViewportMouseCoordinates(b), FWDUtils.hitTest(d.scrollBarHandler_do.screen, c.screenX, c.screenY) || (d.scrollBarHandler_do.onMouseOut(b), d.showButtonsLabels_bl && d.scrollBarHandlerToolTip_do.hide(!0), d.scrollBarHandler_do.setUnselctedFinal()), d.scrollBarHandler_do.isSelectedFinal_bl = !1, d.isMobile_bl ? d.hasPointerEvent_bl ? (window.removeEventListener("MSPointerMove", d.handlerDragMoveHandler), window.removeEventListener("MSPointerUp", d.handlerDragEndHandler)) : (window.removeEventListener("touchmove", d.handlerDragMoveHandler), window.removeEventListener("touchend", d.handlerDragEndHandler)) : window.removeEventListener ? (window.removeEventListener("mousemove", d.handlerDragMoveHandler), window.removeEventListener("mouseup", d.handlerDragEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", d.handlerDragMoveHandler), document.detachEvent("onmouseup", d.handlerDragEndHandler))
        }, d.updateScrollBar = function(a, b) {
            d.scrollBarHandler_do && (d.finalHandlerX = Math.round(a * (d.scrollBarTotalWidth - d.scrollBarHandlerWidth)), d.isScrollBarActive_bl && (d.finalHandlerX <= 0 ? d.finalHandlerX = 0 : d.finalHandlerX >= d.scrollBarTotalWidth - d.scrollBarHandlerWidth && (d.finalHandlerX = d.scrollBarTotalWidth - d.scrollBarHandlerWidth), TweenMax.killTweensOf(d.scrollBarHandler_do), b ? TweenMax.to(d.scrollBarHandler_do, .2, {
                x: d.finalHandlerX,
                onUpdate: d.positionAndSetLabelScrollBarHandler,
                onComplete: d.positionAndSetLabelScrollBarHandler
            }) : d.scrollBarHandler_do.setX(d.finalHandlerX)))
        }, d.positionAndSetLabelScrollBarHandler = function() {
            if (d.showButtonsLabels_bl && d.isScrollBarActive_bl) {
                var b = 0,
                    c = 0,
                    e = d.finalHandlerX / (d.scrollBarTotalWidth - d.scrollBarHandlerWidth),
                    f = d.getGlobalX();
                d.scrollBarHandlerToolTip_do.setLabel(d.scrollBarHandlerToolTip_do.toolTipLabel_str + Math.round(100 * e) + "%"), setTimeout(function() {
                    null != d && (b = parseInt(d.scrollBarHandler_do.getX() + d.scrollBar_do.getX() + (d.scrollBarHandlerWidth - d.scrollBarHandlerToolTip_do.totalWidth) / 2), c = d.controllerPosition_str == a.POSITION_BOTTOM ? -d.scrollBarHandlerToolTip_do.totalHeight - d.scrollBarHandlerToolTipOffsetY : d.curHeight + d.scrollBarHandlerToolTipOffsetY, 0 > f + b && (b = 0), d.scrollBarHandlerToolTip_do.setX(b), d.scrollBarHandlerToolTip_do.setY(c))
                }, 51)
            }
        }, this.addKeyboardSupport = function() {
            document.addEventListener ? (window.addEventListener("keydown", d.onKeyDownHandler), window.addEventListener("keyup", d.onKeyUpHandler)) : document.attachEvent && (document.attachEvent("onkeydown", d.onKeyDownHandler), document.attachEvent("onkeyup", d.onKeyUpHandler))
        }, this.onKeyDownHandler = function(a) {
            if (!c.hibernate_bl && !d.isKeyPressed_bl) {
                if (a && 39 == a.keyCode) {
                    if (d.isKeyPressed_bl = !0, d.moveRightButtonStartHandler(a), !a.preventDefault) return !1;
                    a.preventDefault()
                } else if (37 == a.keyCode) {
                    if (d.isKeyPressed_bl = !0, d.moveLeftButtonStartHandler(a), !a.preventDefault) return !1;
                    a.preventDefault()
                }
                if (a && 38 == a.keyCode) {
                    if (d.isKeyPressed_bl = !0, d.moveUpButtonStartHandler(a), !a.preventDefault) return !1;
                    a.preventDefault()
                } else if (40 == a.keyCode) {
                    if (d.isKeyPressed_bl = !0, d.moveDownButtonStartHandler(a), !a.preventDefault) return !1;
                    a.preventDefault()
                }
            }
        }, this.onKeyUpHandler = function(a) {
            d.isKeyPressed_bl = !1, d.panEndHandler(a)
        }, d.hide = function(b) {
            d.controllerPosition_str == a.POSITION_BOTTOM ? b ? TweenMax.to(d.mainHolder_do, 1, {
                y: d.curHeight + d.controllerOffsetY,
                ease: Expo.easeInOut
            }) : d.mainHolder_do.setY(d.curHeight + d.controllerOffsetY) : d.controllerPosition_str == a.POSITION_TOP && (b ? TweenMax.to(d.mainHolder_do, 1, {
                y: -d.curHeight - d.controllerOffsetY,
                ease: Expo.easeInOut
            }) : d.mainHolder_do.setY(-d.curHeight - d.controllerOffsetY))
        }, d.show = function() {
            TweenMax.to(d.mainHolder_do, 1, {
                y: 0,
                ease: Expo.easeInOut
            })
        }, d.showToolTipButton = function(b, c, e) {
            if (d.showButtonsLabels_bl) {
                var f, g, h = d.mainHolder_do.getX(),
                    i = 0;
                d.showButtonsLabels_bl && c.show(), setTimeout(function() {
                    null != d && (f = parseInt(b.getX() + (d.buttonWidth - c.totalWidth) / 2), 0 > h + f ? (i = h + f, f += Math.abs(h + f)) : h + d.curWidth - f - c.totalWidth < 0 && (i = -(h + d.curWidth - f - c.totalWidth), f = f + h + d.curWidth - f - c.totalWidth), d.controllerPosition_str == a.POSITION_BOTTOM ? (g = -c.totalHeight - e, d.isHiddenForGood_bl && b == d.hideShowControllerButton_do && (g -= d.curHeight - 5)) : (g = d.curHeight + e, d.isHiddenForGood_bl && b == d.hideShowControllerButton_do && (g += d.curHeight - 5)), d.isHiddenForGood_bl && (d.controllerPosition_str == a.POSITION_BOTTOM ? g -= d.hideControllerOffsetY : g += d.hideControllerOffsetY), c.setX(f), c.setY(g), c.positionPointer(i))
                }, 51)
            }
        }, d.showZoomInOrOutToolTipButton = function(b, c, e) {
            if (d.showButtonsLabels_bl) {
                var f, g, h = d.mainHolder_do.getX(),
                    i = 0;
                setTimeout(function() {
                    null != d && (f = parseInt(b.getX() + (d.zoomButtonHeight - c.totalWidth) / 2), g = d.controllerPosition_str == a.POSITION_BOTTOM ? -c.totalHeight - e : d.curHeight + e, 0 > h + f ? (i = h + f, f += Math.abs(h + f)) : h + d.curWidth - f - c.totalWidth < 0 && (i = -(h + d.curWidth - f - c.totalWidth), f = f + h + d.curWidth - f - c.totalWidth), c.setX(f), c.setY(g), c.positionPointer(i))
                }, 51)
            }
        }, this.disableUpAndDownButtons = function() {
            d.moveUpButton_do && d.moveUpButton_do.disable(), d.moveDownButton_do && d.moveDownButton_do.disable()
        }, this.enableUpAndDownButtons = function() {
            d.moveUpButton_do && d.moveUpButton_do.enable(), d.moveDownButton_do && d.moveDownButton_do.enable()
        }, this.disableLeftAndRightButtons = function() {
            d.moveLeftButton_do && d.moveLeftButton_do.disable(), d.moveRightButton_do && d.moveRightButton_do.disable()
        }, this.enableLeftAndRightButtons = function() {
            d.moveLeftButton_do && d.moveLeftButton_do.enable(), d.moveRightButton_do && d.moveRightButton_do.enable()
        }, d.cleanMainEvents = function() {
            clearInterval(d.panImageId_int), clearInterval(d.zoomWithButtonsId_int), clearInterval(d.slideShowId_int), clearTimeout(d.gotoImageId_to), clearTimeout(d.zoomWithButtonsId_to), clearTimeout(d.showId_to), clearTimeout(d.disableForAWhileHideOrShowControllerToolTipId_to), d.hider && (d.hider.removeListener(FWDHider.SHOW, d.onHiderShow), d.hider.removeListener(FWDHider.HIDE, d.onHiderHide)), d.screen.onmousedown = null, d.isMobile_bl ? (window.removeEventListener("touchend", d.panEndHandler), window.removeEventListener("MSPointerUp", d.panEndHandler), window.removeEventListener("touchend", d.zoomInWithButtonsEndHandler), window.removeEventListener("MSPointerUp", d.zoomInWithButtonsEndHandler), window.removeEventListener("touchend", d.zoomOutWithButtonsEndHandler), window.removeEventListener("MSPointerUp", d.zoomOutWithButtonsEndHandler), window.removeEventListener("touchmove", d.handlerDragMoveHandler), window.removeEventListener("touchend", d.handlerDragEndHandler), window.removeEventListener("MSPointerMove", d.handlerDragMoveHandler), window.removeEventListener("MSPointerUp", d.handlerDragEndHandler)) : window.removeEventListener ? (window.removeEventListener("mouseup", d.panEndHandler), window.removeEventListener("mouseup", d.zoomInWithButtonsEndHandler), window.removeEventListener("mouseup", d.zoomOutWithButtonsEndHandler), window.removeEventListener("mousemove", d.handlerDragMoveHandler), window.removeEventListener("mouseup", d.handlerDragEndHandler), window.removeEventListener("keydown", d.onKeyDownHandler), window.removeEventListener("keyup", d.onKeyUpHandler)) : document.detachEvent && (document.detachEvent("onmouseup", d.panEndHandler), document.detachEvent("onmouseup", d.zoomInWithButtonsEndHandler), document.detachEvent("onmouseup", d.zoomOutWithButtonsEndHandler), document.detachEvent("onmousemove", d.handlerDragMoveHandler), document.detachEvent("onmouseup", d.handlerDragEndHandler), document.detachEvent("onkeydown", d.onKeyDownHandler), document.detachEvent("onkeyup", d.onKeyUpHandler))
        }, this.destroy = function() {
            d.cleanMainEvents(), TweenMax.killTweensOf(d.mainHolder_do), d.mainHolder_do.destroy(), d.backgroundLeft_sdo.destroy(), d.backgroundMiddle_sdo.destroy(), d.backgroundRight_sdo.destroy(), d.moveDownButton_do && d.moveDownButton_do.destroy(), d.moveUpButton_do && d.moveUpButton_do.destroy(), d.moveRightButton_do && d.moveRightButton_do.destroy(), d.moveLeftButton_do && d.moveLeftButton_do.destroy(), d.hideOrShowMarkersButton_do && d.hideOrShowMarkersButton_do.destroy(), d.infoButton_do && d.infoButton_do.destroy(), d.hideShowControllerButton_do && (TweenMax.killTweensOf(d.hideShowControllerButton_do), d.hideShowControllerButton_do.destroy()), d.fullScreenButton_do && d.fullScreenButton_do.destroy(), d.zoomIn_do && d.zoomIn_do.destroy(), d.zoomOut_do && d.zoomOut_do.destroy(), d.scrollBar_do && d.scrollBar_do.destroy(), d.scrollBarLeft_sdo && d.scrollBarLeft_sdo.destroy(), d.scrollBarRight_sdo && d.scrollBarRight_sdo.destroy(), d.scrollBarMiddle_sdo && d.scrollBarMiddle_sdo.destroy(), d.scrollBarHandler_do && (TweenMax.killTweensOf(d.scrollBarHandler_do), d.scrollBarHandler_do.destroy()), d.scrollBarHandlerN_sdo && d.scrollBarHandlerN_sdo.destroy(), d.scrollBarHandlerS_sdo && d.scrollBarHandlerS_sdo.destroy(), d.moveDownButtonTooTipLabel_do && d.moveDownButtonTooTipLabel_do.destroy(), d.scrollBarHandlerToolTip_do && d.scrollBarHandlerToolTip_do.destroy(), d.moveUpButtonToolTip_do && d.moveUpButtonToolTip_do.destroy(), d.nextButtonToolTip_do && d.nextButtonToolTip_do.destroy(), d.moveLeftButtonToolTip_do && d.moveLeftButtonToolTip_do.destroy(), d.hideOrShowMarkersToolTip_do && d.hideOrShowMarkersToolTip_do.destroy(), d.infoToolTip_do && d.infoToolTip_do.destroy(), d.hideOrShowControllerToolTip_do && d.hideOrShowControllerToolTip_do.destroy(), d.fullscreenToolTip_do && d.fullscreenToolTip_do.destroy(), d.buttonsTest_ar = null, d.buttons_ar = null, d.hider = null, d.mainHolder_do = null, d.backgroundLeft_sdo = null, d.backgroundMiddle_sdo = null, d.backgroundRight_sdo = null, d.moveDownButton_do = null, d.moveUpButton_do = null, d.moveRightButton_do = null, d.moveLeftButton_do = null, d.hideOrShowMarkersButton_do = null, d.infoButton_do = null, d.hideShowControllerButton_do = null, d.fullScreenButton_do = null, d.zoomIn_do = null, d.zoomOut_do = null, d.scrollBar_do = null, d.scrollBarLeft_sdo = null, d.scrollBarRight_sdo = null, d.scrollBarMiddle_sdo = null, d.scrollBarHandler_do = null, d.scrollBarHandlerN_sdo = null, d.scrollBarHandlerS_sdo = null, d.moveDownButtonTooTipLabel_do = null, d.scrollBarHandlerToolTip_do = null, d.moveUpButtonToolTip_do = null, d.nextButtonToolTip_do = null, d.moveLeftButtonToolTip_do = null, d.hideOrShowMarkersToolTip_do = null, d.infoToolTip_do = null, d.hideOrShowControllerToolTip_do = null, d.fullscreenToolTip_do = null, d.backgroundLeft_img = null, d.backgroundRight_img = null, d.downN_img = null, d.downS_img = null, d.upN_img = null, d.upS_img = null, d.nextN_img = null, d.nextS_img = null, d.prevN_img = null, d.prevS_img = null, this.controllerHideMarkersN_img = null, this.controllerHideMarkersS_img = null, this.controllerShowMarkersN_img = null, this.controllerShowMarkersS_img = null, d.infoN_img = null, d.infoS_img = null, d.linkN_img = null, d.linkS_img = null, d.fullScreenNormalN_img = null, d.fullScreenNormalS_img = null, d.fullScreenFullN_img = null, d.fullScreenFullS_img = null, d.zoomInN_img = null, d.zoomInS_img = null, d.zoomOutN_img = null, d.zoomOutS_img = null, d.scrollBarHandlerN_img = null, d.scrollBarHandlerS_img = null, d.scrollBarLeft_img = null, d.scrollBarRight_img = null, d.toolTipLeft_img = null, d.toolTipPointer_img = null, d.backgroundMiddlePath_str = null, d.scrollBarMiddlePath_str = null, d.draggingMode_str = null, d.controllerPosition_str = null, d.buttonToolTipLeft_str = null, d.buttonToolTipMiddle_str = null, d.buttonToolTipRight_str = null, d.link_str = null, b = null, c = null, d.setInnerHTML(""), e.destroy(), d = null, e = null, a.prototype = null
        }, this.init()
    };
    a.setPrototype = function() {
        a.prototype = new FWDDisplayObject("div")
    }, a.SHOW_INFO = "showInfo", a.POSITION_TOP = "top", a.POSITION_BOTTOM = "bottom", a.PAN = "pan", a.DISABLE_PAN_OR_MOVE = "disablePanOrMove", a.ENABLE_PAN_OR_MOVE = "enablePanOrMove", a.SCROLL_BAR_UPDATE = "scrollBarUpdate", a.ZOOM_WITH_BUTTONS = "zoomWithButtons", a.ZOOM_IN = "zoomIn", a.ZOOM_OUT = "zoomOut", a.PAN = "pan", a.ROTATE = "rotate", a.HIDE_MARKERS = "hideMarkers", a.SHOW_MARKERS = "showMarkers", a.GO_FULL_SCREEN = "goFullScreen", a.GO_NORMAL_SCREEN = "goNormalScreen", a.MOUSE_DOWN = "controllerOnMouseDown", a.HIDE_CONTROLLER = "hideController", a.SHOW_CONTROLLER = "showController", a.prototype = null, window.FWDController = a
}(),
function(a) {
    var b = function(a, c) {
        var d = this,
            e = b.prototype;
        this.navigatorImage_img, this.mainPreloader_img = null, this.mainLightboxCloseButtonN_img = null, this.mainLightboxCloseButtonS_img = null, this.controllerBackgroundLeft_img = null, this.controllerBackgroundRight_img = null, this.controllerMoveDownN_img = null, this.controllerMoveDownS_img = null, this.controllerMoveDownD_img = null, this.controllerMoveUpN_img = null, this.controllerMoveUpS_img = null, this.controllerMoveUpD_img = null, this.controllerNextN_img = null, this.controllerNextS_img = null, this.controllerNextD_img = null, this.controllerPrevN_img = null, this.controllerPrevS_img = null, this.controllerPrevD_img = null, this.controllerHideMarkersN_img = null, this.controllerHideMarkersS_img = null, this.controllerShowMarkersN_img = null, this.controllerShowMarkersS_img = null, this.controllerInfoN_img = null, this.controllerInfoS_img = null, this.controllerHideN_img = null, this.controllerHideS_img = null, this.controllerShowN_img = null, this.controllerShowS_img = null, this.controllerFullScreenNormalN_img = null, this.controllerFullScreenNormalS_img = null, this.controllerFullScreenFullN_img = null, this.controllerFullScreenFullS_img = null, this.zoomInN_img = null, this.zoomInS_img = null, this.zoomOutN_img = null, this.zoomOutS_img = null, this.scrollBarHandlerN_img = null, this.scrollBarHandlerS_img = null, this.scrollBarLeft_img = null, this.scrollBarRight_img = null, this.toolTipLeft_img = null, this.toolTipPointer_img = null, this.infoWindowCloseNormal_img = null, this.infoWindowCloseSelected_img = null, this.originalImage_img = null, this.navigatorImage_img = null, this.props_obj = a, this.rootElement_el = null, this.skinPaths_ar = [], this.images_ar = [], this.markersList_ar = [], this.toolTipWindows_ar = [], this.buttons_ar = null, this.buttonsLabels_ar = null, this.contextMenuLabels_ar = null, this.skinPath_str = void 0, this.backgroundColor_str = null, this.handMovePath_str = null, this.handGrabPath_str = null, this.controllerBackgroundMiddlePath_str = null, this.scrollBarMiddlePath_str = null, this.controllerPosition_str = null, this.preloaderFontColor_str = null, this.preloaderBackgroundColor_str = null, this.preloaderText_str = null, this.buttonToolTipLeft_str = null, this.buttonToolTipMiddle_str = null, this.buttonToolTipRight_str = null, this.buttonToolTipBottomPointer_str = null, this.buttonToolTipTopPointer_str = null, this.buttonToolTipFontColor_str = null, this.contextMenuBackgroundColor_str = null, this.contextMenuBorderColor_str = null, this.contextMenuSpacerColor_str = null, this.contextMenuItemNormalColor_str = null, this.contextMenuItemSelectedColor_str = null, this.contextMenuItemSelectedColor_str = null, this.contextMenuItemDisabledColor_str = null, this.navigatorPosition_str = null, this.navigatorHandlerColor_str = null, this.navigatorBorderColor_str = null, this.infoText_str = null, this.infoWindowBackgroundColor_str = null, this.infoWindowScrollBarColor_str = null, this.originalImagePath_str = null, this.navigatorImagePath_str = null, this.dragRotationSpeed, this.panSpeed, this.zoomSpeed, this.controllerHeight, this.imageWidth, this.imageHeight, this.largeImageWidth, this.largeImageHeight, this.spaceBetweenButtons, this.startSpaceBetweenButtons, this.scrollBarOffsetX, this.doubleClickZoomFactor, this.zoomFactor, this.startZoomFactor, this.controllerOffsetY, this.hideControllerDelay, this.controllerBackgroundOpacity, this.controllerMaxWidth, this.countLoadedSkinImages = 0, this.countLoadedImages = 0, this.scrollBarHandlerToolTipOffsetY, this.zoomInAndOutToolTipOffsetY, this.buttonsToolTipOffsetY, this.hideControllerOffsetY, this.scrollBarPosition, this.startSpaceForScrollBarButtons, this.totalGraphics, this.navigatorWidth, this.navigatorHeight, this.navigatorOffsetX, this.navigatorOffsetY, this.infoWindowBackgroundOpacity, this.markerToolTipOffsetY, this.toolTipWindowMaxWidth, this.lightBoxBackgroundOpacity, this.parseDelayId_to, this.loadImageId_to, this.addKeyboardSupport_bl, this.showContextMenu_bl, this.showNavigator_bl, this.inversePanDirection_bl, this.useEntireScreenFor3dObject_bl, this.hideController_bl, this.showScriptDeveloper_bl, this.showMarkers_bl, this.hasNavigatorError_bl = !1, this.showMarkersInfo_bl = !1, this.addDoubleClickSupport_bl = !1, this.isMobile_bl = FWDUtils.isMobile, this.hasPointerEvent_bl = FWDUtils.hasPointerEvent, d.init = function() {
            d.parseDelayId_to = setTimeout(d.parseProperties, 100)
        }, d.parseProperties = function() {
            var a, g, h, j, k, l, m, n, o, q, s = !1;
            if (d.rootElement_el = c, !d.rootElement_el) return h = "Make sure that the a div with the id - <font color='#FFFFFF'>" + d.props_obj.playListAndSkinId + "</font> exists, self represents the data playlist.", d.dispatchEvent(b.LOAD_ERROR, {
                text: h
            }), void 0;
            if (d.originalImagePath_str = d.props_obj.imagePath, !d.originalImagePath_str) return h = "The <font color='#FFFFFF'>imagePath</font> property which represents the path for the iamge to zoom is not defined in the constructor function!", d.dispatchEvent(b.LOAD_ERROR, {
                text: h
            }), void 0;
            if (d.rootElement_el.style.display = "none", a = FWDUtils.getChildFromNodeListFromAttribute(d.rootElement_el, "data-markers"), d.showNavigator_bl = d.props_obj.showNavigator, d.showNavigator_bl = "yes" == d.showNavigator_bl ? !0 : !1, d.props_obj.showNavigatorOnMobile && "no" == d.props_obj.showNavigatorOnMobile && d.isMobile_bl && d.showNavigator_bl && (d.showNavigator_bl = !1), d.showMarkersInfo_bl = "yes" == d.props_obj.showMarkersInfo ? !0 : !1, d.isMobile_bl && (d.showMarkersInfo_bl = !1), d.addDoubleClickSupport_bl = d.props_obj.addDoubleClickSupport, d.addDoubleClickSupport_bl = "yes" == d.addDoubleClickSupport_bl ? !0 : !1, FWDUtils.isIEAndLessThen9 && (d.addDoubleClickSupport_bl = !1), d.backgroundColor_str = d.props_obj.backgroundColor || "transparent", d.preloaderFontColor_str = d.props_obj.preloaderFontColor || "#000000", d.preloaderBackgroundColor_str = d.props_obj.preloaderBackgroundColor || "transparent", d.preloaderText_str = d.props_obj.preloaderText || "- Henter kilde -:", d.controllerPosition_str = d.props_obj.controllerPosition || "bottom", "top" != d.controllerPosition_str && "bottom" != d.controllerPosition_str && (d.controllerPosition_str = "top"), !d.props_obj.buttons) return h = "The <font color='#FFFFFF'>buttons</font> is not defined in the contructor, this is necessary to setup the main buttons.", d.dispatchEvent(b.LOAD_ERROR, {
                text: h
            }), void 0;
            if (d.buttons_ar = FWDUtils.splitAndTrim(d.props_obj.buttons, !0, !0), d.isMobile_bl && !d.hasPointerEvent_bl ? (d.buttonsLabels_ar = null, d.contextMenuLabels_ar = null) : (d.props_obj.buttonsToolTips && (d.buttonsLabels_ar = FWDUtils.splitAndTrim(d.props_obj.buttonsToolTips, !1)), d.props_obj.contextMenuLabels && (d.contextMenuLabels_ar = FWDUtils.splitAndTrim(d.props_obj.contextMenuLabels, !1))), d.showScriptDeveloper_bl = d.props_obj.showScriptDeveloper, d.showScriptDeveloper_bl = "no" == d.showScriptDeveloper_bl ? !1 : !0, d.dragRotationSpeed = d.props_obj.dragRotationSpeed || .5, isNaN(d.dragRotationSpeed) && (d.dragRotationSpeed = .5), d.dragRotationSpeed < 0 ? d.dragRotationSpeed = 0 : d.dragRotationSpeed > 1 && (d.dragRotationSpeed = 1), d.panSpeed = d.props_obj.panSpeed || 1, isNaN(d.panSpeed) && (d.panSpeed = 1), d.panSpeed < 1 ? d.panSpeed = 1 : d.panSpeed > 100 && (d.panSpeed = 100), d.zoomSpeed = d.props_obj.zoomSpeed || .1, isNaN(d.zoomSpeed) && (d.zoomSpeed = .1), d.zoomSpeed < .1 ? d.zoomSpeed = .1 : d.zoomSpeed > 1 && (d.zoomSpeed = 1), d.imageWidth = d.props_obj.imageWidth, !d.imageWidth) return d.showPropertyError("imageWidth"), void 0;
            if (d.imageWidth = parseInt(d.imageWidth), d.imageHeight = d.props_obj.imageHeight, !d.imageHeight) return d.showPropertyError("imageHeight"), void 0;
            if (d.imageHeight = parseInt(d.imageHeight), d.zoomFactor = d.props_obj.zoomFactor, void 0 == d.zoomFactor) return d.showPropertyError("zoomFactor"), void 0;
            if (d.zoomFactor < 1 ? d.zoomFactor = 1 : d.zoomFactor > 5 && (d.zoomFactor = 5), d.doubleClickZoomFactor = d.props_obj.doubleClickZoomFactor, isNaN(d.doubleClickZoomFactor) && (d.doubleClickZoomFactor = d.zoomFactor), d.doubleClickZoomFactor > d.zoomFactor && (d.doubleClickZoomFactor = d.zoomFactor), d.startZoomFactor = d.props_obj.startZoomFactor, void 0 == d.startZoomFactor) return d.startZoomFactor = "default", void 0;
            if (isNaN(d.startZoomFactor) || (d.startZoomFactor < .1 ? d.startZoomFactor = .1 : d.startZoomFactor > d.zoomFactor && (d.startZoomFactor = d.zoomFactor)), d.navigatorOffsetX = d.props_obj.navigatorOffsetX || 0, isNaN(d.navigatorOffsetX) && (d.navigatorOffsetX = 0), d.navigatorOffsetY = d.props_obj.navigatorOffsetY || 0, isNaN(d.navigatorOffsetY) && (d.navigatorOffsetY = 0), d.controllerBackgroundOpacity = d.props_obj.controllerBackgroundOpacity, d.controllerBackgroundOpacity || (d.controllerBackgroundOpacity = 1), isNaN(d.controllerBackgroundOpacity) && (d.controllerBackgroundOpacity = 1), d.controllerBackgroundOpacity < 0 ? d.controllerBackgroundOpacity = 0 : d.controllerBackgroundOpacity > 1 && (d.controllerBackgroundOpacity = 1), d.controllerMaxWidth = d.props_obj.controllerMaxWidth, d.controllerMaxWidth || (d.controllerMaxWidth = 900), isNaN(d.controllerMaxWidth) && (d.controllerMaxWidth = 900), d.controllerMaxWidth < 200 && (d.controllerMaxWidth = 200), d.hideControllerDelay = d.props_obj.hideControllerDelay, d.hideControllerDelay && (d.hideController_bl = !0, isNaN(d.hideControllerDelay) ? d.hideControllerDelay = 4e3 : d.hideControllerDelay < 0 ? d.hideControllerDelay = 4e3 : d.hideControllerDelay *= 1e3), d.spaceBetweenButtons = d.props_obj.spaceBetweenButtons || 0, d.scrollBarPosition = d.props_obj.scrollBarPosition || 0, d.startSpaceForScrollBarButtons = d.props_obj.startSpaceForScrollBarButtons || 0, d.startSpaceBetweenButtons = d.props_obj.startSpaceBetweenButtons || 0, d.startSpaceForScrollBar = d.props_obj.startSpaceForScrollBar || 0, d.scrollBarOffsetX = d.props_obj.scrollBarOffsetX || 0, d.controllerOffsetY = d.props_obj.controllerOffsetY || 0, d.scrollBarHandlerToolTipOffsetY = d.props_obj.scrollBarHandlerToolTipOffsetY || 0, d.zoomInAndOutToolTipOffsetY = d.props_obj.zoomInAndOutToolTipOffsetY || 0, d.buttonsToolTipOffsetY = d.props_obj.buttonsToolTipOffsetY || 0, d.hideControllerOffsetY = d.props_obj.hideControllerOffsetY || 0, d.infoWindowBackgroundOpacity = d.props_obj.infoWindowBackgroundOpacity || 1, d.markerToolTipOffsetY = d.props_obj.markerToolTipOffsetY || 1, d.toolTipWindowMaxWidth = d.props_obj.toolTipWindowMaxWidth || 300, d.buttonToolTipFontColor_str = d.props_obj.buttonToolTipFontColor || "#000000", d.contextMenuBackgroundColor_str = d.props_obj.contextMenuBackgroundColor || "#000000", d.contextMenuBorderColor_str = d.props_obj.contextMenuBorderColor || "#FF0000", d.contextMenuSpacerColor_str = d.props_obj.contextMenuSpacerColor || "#FF0000", d.contextMenuItemNormalColor_str = d.props_obj.contextMenuItemNormalColor || "#FF0000", d.contextMenuItemSelectedColor_str = d.props_obj.contextMenuItemSelectedColor || "#FF0000", d.contextMenuItemDisabledColor_str = d.props_obj.contextMenuItemDisabledColor || "#FF0000", d.infoWindowBackgroundColor_str = d.props_obj.infoWindowBackgroundColor || "#FF0000", d.infoWindowScrollBarColor_str = d.props_obj.infoWindowScrollBarColor || "#FF0000", d.navigatorImagePath_str = d.props_obj.navigatorImagePath, d.showNavigator_bl && !d.navigatorImagePath_str) return h = "The  <font color='#FFFFFF'>navigatorImagePath</font> is not defined in the contructor, this is necessary to setup the navigator.", d.dispatchEvent(b.LOAD_ERROR, {
                text: h
            }), void 0;
            if (d.navigatorPosition_str = d.props_obj.navigatorPosition || "topleft", d.navigatorPosition_str = String(d.navigatorPosition_str).toLowerCase(), j = "topleft" == d.navigatorPosition_str || "topright" == d.navigatorPosition_str || "bottomleft" == d.navigatorPosition_str || "bottomright" == d.navigatorPosition_str, j || (d.navigatorPosition_str = "topleft"), d.navigatorHandlerColor_str = d.props_obj.navigatorHandlerColor || "#FF0000", d.navigatorBorderColor_str = d.props_obj.navigatorBorderColor || "#FF0000", d.showContextMenu_bl = d.props_obj.showContextMenu, d.showContextMenu_bl = "no" == d.showContextMenu_bl ? !1 : !0, d.inversePanDirection_bl = d.props_obj.inversePanDirection, d.inversePanDirection_bl = "yes" == d.inversePanDirection_bl ? !0 : !1, d.addKeyboardSupport_bl = "no" == d.props_obj.addKeyboardSupport ? !1 : !0, d.isMobile_bl && (d.addKeyboardSupport_bl = !1), d.useEntireScreenFor3dObject_bl = d.props_obj.useEntireScreen, d.useEntireScreenFor3dObject_bl = "yes" == d.useEntireScreenFor3dObject_bl ? !0 : !1, d.infoText_str = FWDUtils.getChildFromNodeListFromAttribute(d.rootElement_el, "data-info"), d.infoText_str = d.infoText_str ? d.infoText_str.innerHTML : "not defined make sure that an ul element with the attribute data-info is defined!", a && (d.showMarkers_bl = !0), d.showMarkers_bl) {
                g = FWDUtils.getChildren(a);
                for (var t = 0; t < g.length; t++) {
                    if (k = {}, m = g[t], n = !1, o = "", q = FWDUtils.hasAttribute(m, "data-marker-type", t), !q) return d.showMarkerError("data-marker-type", t), void 0;
                    if (q = FWDUtils.hasAttribute(m, "data-marker-normal-state-path", t), !q) return d.showMarkerError("data-marker-normal-state-path", t), void 0;
                    if (q = FWDUtils.hasAttribute(m, "data-marker-selected-state-path", t), !q) return d.showMarkerError("data-marker-selected-state-path"), void 0;
                    if (q = FWDUtils.hasAttribute(m, "data-marker-left"), !q) return d.showMarkerError("data-marker-left", t), void 0;
                    if (q = FWDUtils.hasAttribute(m, "data-marker-top"), !q) return d.showMarkerError("data-marker-top", t), void 0;
                    if (q = FWDUtils.hasAttribute(m, "data-marker-width"), !q) return d.showMarkerError("data-marker-width", t), void 0;
                    if (q = FWDUtils.hasAttribute(m, "data-marker-height"), !q) return d.showMarkerError("data-marker-height", t), void 0;
                    if (q = FWDUtils.hasAttribute(m, "data-show-after-zoom-factor"), !q) return d.showMarkerError("data-show-after-zoom-factor", t), void 0;
                    if (k.type = FWDUtils.getAttributeValue(m, "data-marker-type"), j = "link" == k.type || "tooltip" == k.type || "infowindow" == k.type, !j) return d.showMarkerTypeError(k.type, t), void 0;
                    s = FWDUtils.hasAttribute(m, "data-show-content") ? "no" == FWDUtils.trim(FWDUtils.getAttributeValue(m, "data-show-content")) ? !1 : !0 : !0, k.normalStatePath_str = FWDUtils.trim(FWDUtils.getAttributeValue(m, "data-marker-normal-state-path")), k.selectedStatePath_str = FWDUtils.trim(FWDUtils.getAttributeValue(m, "data-marker-selected-state-path")), k.toolTipLabel = FWDUtils.getAttributeValue(m, "data-tool-tip-label") || void 0, k.markerX = parseInt(FWDUtils.getAttributeValue(m, "data-marker-left")), isNaN(k.markerX) && (k.markerX = 0), k.markerY = parseInt(FWDUtils.getAttributeValue(m, "data-marker-top")), isNaN(k.markerY) && (k.markerY = 0), k.markerWidth = parseInt(FWDUtils.getAttributeValue(m, "data-marker-width")), isNaN(k.markerWidth) && (k.markerWidth = 5), k.markerHeight = parseInt(FWDUtils.getAttributeValue(m, "data-marker-height")), isNaN(k.markerHeight) && (k.markerHeight = 5), k.showAfterScale = parseFloat(FWDUtils.getAttributeValue(m, "data-show-after-zoom-factor")), isNaN(k.showAfterScale) && (k.showAfterScale = 0), "link" == k.type ? (k.link = FWDUtils.getAttributeValue(m, "data-marker-url") || "http://www.link-is-not-defined.com", k.target = FWDUtils.getAttributeValue(m, "data-marker-target") || "_blank") : k.innerHTML = m.innerHTML, j = FWDUtils.getAttributeValue(m, "data-reg-point"), j = "center" === j || "centertop" === j || "centerbottom" === j, j = j ? FWDUtils.trim(FWDUtils.getAttributeValue(m, "data-reg-point")).toLowerCase() : "center", k.regPoint = j, k.maxWidth = parseInt(FWDUtils.getAttributeValue(m, "data-marker-window-width")), isNaN(k.maxWidth) && (k.maxWidth = 200), k.hasContent_bl = s;
                    var l = {};
                    "tooltip" == k.type && (l.innerHTML = m.innerHTML, l.maxWidth = k.maxWidth, l.hasContent_bl = s, d.toolTipWindows_ar.push(l)), d.markersList_ar.push(k)
                }
            }
            if (d.skinPath_str = d.props_obj.skinPath, !d.skinPath_str) return h = "The <font color='#FFFFFF'>skinPath</font> property is not defined in the constructor function!", d.dispatchEvent(b.LOAD_ERROR, {
                text: h
            }), void 0;
            d.skinPath_str.lastIndexOf("/") + 1 != d.skinPath_str.length && (d.skinPath_str += "/"), d.handMovePath_str = d.skinPath_str + "move.cur", d.handGrabPath_str = d.skinPath_str + "handgrab.cur";
            var u = d.skinPath_str + "preloader.png",
                v = d.skinPath_str + "lightbox-close-icon.png",
                w = d.skinPath_str + "lightbox-close-icon-rollover.png",
                x = d.skinPath_str + "bg-bar-left.png",
                y = d.skinPath_str + "bg-bar-right.png",
                z = d.skinPath_str + "down-icon.png",
                A = d.skinPath_str + "down-icon-rollover.png",
                B = d.skinPath_str + "down-icon-disabled.png",
                C = d.skinPath_str + "up-icon.png",
                D = d.skinPath_str + "up-icon-rollover.png",
                E = d.skinPath_str + "up-icon-disabled.png",
                F = d.skinPath_str + "right-icon.png",
                G = d.skinPath_str + "right-icon-rollover.png",
                H = d.skinPath_str + "right-icon-disabled.png",
                I = d.skinPath_str + "left-icon.png",
                J = d.skinPath_str + "left-icon-rollover.png",
                K = d.skinPath_str + "left-icon-disabled.png",
                L = d.skinPath_str + "hide-markers-icon.png",
                M = d.skinPath_str + "hide-markers-icon-rollover.png",
                N = d.skinPath_str + "show-markers-icon.png",
                O = d.skinPath_str + "show-markers-icon-rollover.png",
                P = d.skinPath_str + "info-icon.png",
                Q = d.skinPath_str + "info-icon-rollover.png",
                R = d.skinPath_str + "hide-controller-icon.png",
                S = d.skinPath_str + "hide-controller-icon-rollover.png",
                T = d.skinPath_str + "show-controller-icon.png",
                U = d.skinPath_str + "show-controller-icon-rollover.png",
                V = d.skinPath_str + "fullscr-normal-icon.png",
                W = d.skinPath_str + "fullscr-normal-icon-rollover.png",
                X = d.skinPath_str + "fullscr-full-icon.png",
                Y = d.skinPath_str + "fullscr-full-icon-rollover.png",
                Z = d.skinPath_str + "zoomin.png",
                $ = d.skinPath_str + "zoomin-rollover.png",
                _ = d.skinPath_str + "zoomout.png",
                ab = d.skinPath_str + "zoomout-rollover.png",
                bb = d.skinPath_str + "handler.png",
                cb = d.skinPath_str + "handler-rollover.png",
                db = d.skinPath_str + "scrool-left.png",
                eb = d.skinPath_str + "scrool-right.png";
            d.scrollBarMiddlePath_str = d.skinPath_str + "scrool-middle.png", d.controllerBackgroundMiddlePath_str = d.skinPath_str + "bg-bar-middle.png", d.buttonToolTipLeft_str = d.skinPath_str + "button-tool-tip-left.png", d.buttonToolTipMiddle_str = d.skinPath_str + "button-tool-tip-middle.png", d.buttonToolTipRight_str = d.skinPath_str + "button-tool-tip-right.png", d.buttonToolTipBottomPointer_str = d.skinPath_str + "button-tool-tip-down-pointer.png", d.buttonToolTipTopPointer_str = d.skinPath_str + "button-tool-tip-top-pointer.png";
            var fb = d.skinPath_str + "close-icon.png",
                gb = d.skinPath_str + "close-icon-rollover.png";
            d.skinPaths_ar.push(u), d.skinPaths_ar.push(v), d.skinPaths_ar.push(w), d.skinPaths_ar.push(x), d.skinPaths_ar.push(y), d.skinPaths_ar.push(z), d.skinPaths_ar.push(A), d.skinPaths_ar.push(B), d.skinPaths_ar.push(C), d.skinPaths_ar.push(D), d.skinPaths_ar.push(E), d.skinPaths_ar.push(F), d.skinPaths_ar.push(G), d.skinPaths_ar.push(H), d.skinPaths_ar.push(I), d.skinPaths_ar.push(J), d.skinPaths_ar.push(K), d.skinPaths_ar.push(L), d.skinPaths_ar.push(M), d.skinPaths_ar.push(N), d.skinPaths_ar.push(O), d.skinPaths_ar.push(P), d.skinPaths_ar.push(Q), d.skinPaths_ar.push(R), d.skinPaths_ar.push(S), d.skinPaths_ar.push(T), d.skinPaths_ar.push(U), d.skinPaths_ar.push(V), d.skinPaths_ar.push(W), d.skinPaths_ar.push(X), d.skinPaths_ar.push(Y), d.skinPaths_ar.push(Z), d.skinPaths_ar.push($), d.skinPaths_ar.push(_), d.skinPaths_ar.push(ab), d.skinPaths_ar.push(bb), d.skinPaths_ar.push(cb), d.skinPaths_ar.push(db), d.skinPaths_ar.push(eb), d.skinPaths_ar.push(d.buttonToolTipTopPointer_str), d.skinPaths_ar.push(d.buttonToolTipLeft_str), d.skinPaths_ar.push(fb), d.skinPaths_ar.push(gb), d.skinPaths_ar.push(d.buttonToolTipMiddle_str), d.skinPaths_ar.push(d.buttonToolTipRight_str), d.skinPaths_ar.push(d.controllerBackgroundMiddlePath_str), d.totalGraphics = d.skinPaths_ar.length, d.loadSkin()
        }, d.loadSkin = function() {
            d.image_img && (d.image_img.onload = null, d.image_img.onerror = null);
            var a = d.skinPaths_ar[d.countLoadedSkinImages];
            d.image_img = new Image, d.image_img.onload = d.onSkinLoadHandler, d.image_img.onerror = d.onKinLoadErrorHandler, d.image_img.src = a
        }, d.onSkinLoadHandler = function() {
            0 == d.countLoadedSkinImages ? (d.mainPreloader_img = d.image_img, d.dispatchEvent(b.PRELOADER_LOAD_DONE), d.dispatchEvent(b.SKIN_PROGRESS)) : 1 == d.countLoadedSkinImages ? d.mainLightboxCloseButtonN_img = d.image_img : 2 == d.countLoadedSkinImages ? (d.mainLightboxCloseButtonS_img = d.image_img, d.dispatchEvent(b.LIGHBOX_CLOSE_BUTTON_LOADED)) : 3 == d.countLoadedSkinImages ? (d.controllerBackgroundLeft_img = d.image_img, d.controllerHeight = d.controllerBackgroundLeft_img.height) : 4 == d.countLoadedSkinImages ? d.controllerBackgroundRight_img = d.image_img : 5 == d.countLoadedSkinImages ? d.controllerMoveDownN_img = d.image_img : 6 == d.countLoadedSkinImages ? d.controllerMoveDownS_img = d.image_img : 7 == d.countLoadedSkinImages ? d.controllerMoveDownD_img = d.image_img : 8 == d.countLoadedSkinImages ? d.controllerMoveUpN_img = d.image_img : 9 == d.countLoadedSkinImages ? d.controllerMoveUpS_img = d.image_img : 10 == d.countLoadedSkinImages ? d.controllerMoveUpD_img = d.image_img : 11 == d.countLoadedSkinImages ? d.controllerNextN_img = d.image_img : 12 == d.countLoadedSkinImages ? d.controllerNextS_img = d.image_img : 13 == d.countLoadedSkinImages ? d.controllerNextD_img = d.image_img : 14 == d.countLoadedSkinImages ? d.controllerPrevN_img = d.image_img : 15 == d.countLoadedSkinImages ? d.controllerPrevS_img = d.image_img : 16 == d.countLoadedSkinImages ? d.controllerPrevD_img = d.image_img : 17 == d.countLoadedSkinImages ? d.controllerHideMarkersN_img = d.image_img : 18 == d.countLoadedSkinImages ? d.controllerHideMarkersS_img = d.image_img : 19 == d.countLoadedSkinImages ? d.controllerShowMarkersN_img = d.image_img : 20 == d.countLoadedSkinImages ? d.controllerShowMarkersS_img = d.image_img : 21 == d.countLoadedSkinImages ? d.controllerInfoN_img = d.image_img : 22 == d.countLoadedSkinImages ? d.controllerInfoS_img = d.image_img : 23 == d.countLoadedSkinImages ? d.controllerHideN_img = d.image_img : 24 == d.countLoadedSkinImages ? d.controllerHideS_img = d.image_img : 25 == d.countLoadedSkinImages ? d.controllerShowN_img = d.image_img : 26 == d.countLoadedSkinImages ? d.controllerShowS_img = d.image_img : 27 == d.countLoadedSkinImages ? d.controllerFullScreenNormalN_img = d.image_img : 28 == d.countLoadedSkinImages ? d.controllerFullScreenNormalS_img = d.image_img : 29 == d.countLoadedSkinImages ? d.controllerFullScreenFullN_img = d.image_img : 30 == d.countLoadedSkinImages ? d.controllerFullScreenFullS_img = d.image_img : 31 == d.countLoadedSkinImages ? d.zoomInN_img = d.image_img : 32 == d.countLoadedSkinImages ? d.zoomInS_img = d.image_img : 33 == d.countLoadedSkinImages ? d.zoomOutN_img = d.image_img : 34 == d.countLoadedSkinImages ? d.zoomOutS_img = d.image_img : 35 == d.countLoadedSkinImages ? d.scrollBarHandlerN_img = d.image_img : 36 == d.countLoadedSkinImages ? d.scrollBarHandlerS_img = d.image_img : 37 == d.countLoadedSkinImages ? d.scrollBarLeft_img = d.image_img : 38 == d.countLoadedSkinImages ? d.scrollBarRight_img = d.image_img : 39 == d.countLoadedSkinImages ? d.toolTipPointer_img = d.image_img : 40 == d.countLoadedSkinImages ? d.toolTipLeft_img = d.image_img : 41 == d.countLoadedSkinImages ? d.infoWindowCloseNormal_img = d.image_img : 42 == d.countLoadedSkinImages && (d.infoWindowCloseSelected_img = d.image_img), d.countLoadedSkinImages++, d.countLoadedSkinImages < d.totalGraphics ? d.loadImageId_to = setTimeout(d.loadSkin, 16) : (d.dispatchEvent(b.SKIN_PROGRESS, {
                percent: d.countLoadedSkinImages / d.totalGraphics
            }), d.dispatchEvent(b.LOAD_DONE), d.showNavigator_bl ? d.loadNavigatorImage() : d.loadMainImage())
        }, d.onKinLoadErrorHandler = function(a) {
            var c = "The skin graphics with the label <font color='#FFFFFF'>" + d.skinPaths_ar[d.countLoadedSkinImages] + "</font> can't be loaded, make sure that the image exists and the path is correct!";
            console.log(a);
            var e = {
                text: c
            };
            d.dispatchEvent(b.LOAD_ERROR, e)
        }, d.stopToLoad = function() {
            clearTimeout(d.loadImageId_to), d.image_img && (d.image_img.onload = null, d.image_img.onerror = null), d.navigatorImage_img && (d.navigatorImage_img.onload = null, d.navigatorImage_img.onerror = null)
        }, d.loadNavigatorImage = function() {
            d.image_img && (d.image_img.onload = null, d.image_img.onerror = null);
            var a = d.navigatorImagePath_str;
            d.image_img = new Image, d.image_img.onload = d.onNavigatorImageLoadHandler, d.image_img.onerror = d.onNavigatorImageLoadErrorHandler, d.image_img.src = a
        }, d.onNavigatorImageLoadHandler = function() {
            d.navigatorWidth = d.image_img.width, d.navigatorHeight = d.image_img.height, d.navigatorImage_img = d.image_img, d.loadMainImage(), d.dispatchEvent(b.IMAGES_PROGRESS)
        }, d.loadMainImage = function() {
            d.hasNavigatorError_bl || (d.image_img && (d.image_img.onload = null, d.image_img.onerror = null), d.image_img = new Image, d.image_img.onload = d.onImageLoadHandler, d.image_img.onerror = d.onImageLoadErrorHandler, d.image_img.src = d.originalImagePath_str)
        }, d.onImageLoadHandler = function() {
            d.originalImage_img = d.image_img, d.dispatchEvent(b.IMAGES_LOAD_COMPLETE)
        }, d.onLastNavigatorImageLoadHandler = function() {
            null != d && d.dispatchEvent(b.IMAGES_LOAD_COMPLETE)
        }, d.onNavigatorImageLoadErrorHandler = function(a) {
            var c = "The navigator image with the label <font color='#FFFFFF'>" + d.navigatorImagePath_str + "</font> can't be loaded, make sure that the image exists and the path is correct!";
            d.hasNavigatorError_bl = !0;
            var e = {
                text: c
            };
            d.dispatchEvent(b.LOAD_ERROR, e), console.log(a)
        }, d.onImageLoadErrorHandler = function(a) {
            var c = "The image with the label <font color='#FFFFFF'>" + d.originalImagePath_str + "</font> can't be loaded, make sure that the image exists and the path is correct!";
            console.log(a);
            var e = {
                text: c
            };
            d.dispatchEvent(b.LOAD_ERROR, e)
        }, d.checkForAttribute = function(a, c, e) {
            var f = FWDUtils.getChildFromNodeListFromAttribute(a, c);
            return f = f ? FWDUtils.trim(FWDUtils.getAttributeValue(f, c)) : void 0, f ? f : (void 0 != e ? d.dispatchEvent(b.LOAD_ERROR, {
                text: "Element with attribute <font color='#FFFFFF'>" + c + "</font> is not defined at positon <font color='#FFFFFF'>" + (e + 1) + "</font>"
            }) : d.dispatchEvent(b.LOAD_ERROR, {
                text: "Element with attribute <font color='#FFFFFF'>" + c + "</font> is not defined."
            }), void 0)
        }, d.showPropertyError = function(a) {
            d.dispatchEvent(b.LOAD_ERROR, {
                text: "The property called <font color='#FFFFFF'>" + a + "</font> is not defined."
            })
        }, d.showMarkerError = function(a, c) {
            d.dispatchEvent(b.LOAD_ERROR, {
                text: "The marker at position <font color='#FFFFFF'>" + (c + 1) + "</font> dose not have defined an attribute <font color='#FFFFFF'>" + a + "</font>."
            })
        }, d.showMarkerTypeError = function(a, c) {
            d.dispatchEvent(b.LOAD_ERROR, {
                text: "Marker type is incorrect <font color='#FFFFFF'>" + a + "</font> at position <font color='#FFFFFF'>" + c + "</font>. Accepted types are <font color='#FFFFFF'>link, tooltip, infowindow</font>."
            })
        }, d.destroy = function() {
            clearTimeout(d.parseDelayId_to), clearTimeout(d.loadImageId_to), d.image_img && (d.image_img.onload = null, d.image_img.onerror = null, d.image_img.src = null), d.navigatorImage_img && (d.navigatorImage_img.onload = null, d.navigatorImage_img.onerror = null, d.navigatorImage_img.src = null), d.mainPreloader_img && (d.mainPreloader_img.src = null), d.mainLightboxCloseButtonN_img && (d.mainLightboxCloseButtonN_img.src = null), d.mainLightboxCloseButtonS_img && (d.mainLightboxCloseButtonS_img.src = null), d.controllerBackgroundLeft_img && (d.controllerBackgroundLeft_img.src = null), d.controllerBackgroundRight_img && (d.controllerBackgroundRight_img.src = null), d.controllerMoveDownN_img && (d.controllerMoveDownN_img.src = null), d.controllerMoveDownS_img && (d.controllerMoveDownS_img.src = null), d.controllerMoveDownD_img && (d.controllerMoveDownD_img.src = null), d.controllerMoveUpN_img && (d.controllerMoveUpN_img.src = null), d.controllerMoveUpS_img && (d.controllerMoveUpS_img.src = null), d.controllerMoveUpD_img && (d.controllerMoveUpD_img.src = null), d.controllerNextN_img && (d.controllerNextN_img.src = null), d.controllerNextS_img && (d.controllerNextS_img.src = null), d.controllerNextD_img && (d.controllerNextD_img.src = null), d.controllerPrevN_img && (d.controllerPrevN_img.src = null), d.controllerPrevS_img && (d.controllerPrevS_img.src = null), d.controllerPrevD_img && (d.controllerPrevD_img.src = null), d.controllerHideMarkersN_img && (d.controllerHideMarkersN_img.src = null), d.controllerHideMarkersS_img && (d.controllerHideMarkersS_img.src = null), d.controllerShowMarkersN_img && (d.controllerShowMarkersN_img.src = null), d.controllerShowMarkersS_img && (d.controllerShowMarkersS_img.src = null), d.controllerInfoN_img && (d.controllerInfoN_img.src = null), d.controllerHideN_img && (d.controllerHideN_img.src = null), d.controllerHideS_img && (d.controllerHideS_img.src = null), d.controllerShowN_img && (d.controllerShowN_img.src = null), d.controllerShowS_img && (d.controllerShowS_img.src = null), d.controllerFullScreenNormalN_img && (d.controllerFullScreenNormalN_img.src = null), d.controllerFullScreenNormalS_img && (d.controllerFullScreenNormalS_img.src = null), d.controllerFullScreenFullN_img && (d.controllerFullScreenFullN_img.src = null), d.controllerFullScreenFullS_img && (d.controllerFullScreenFullS_img.src = null), d.zoomInN_img && (d.zoomInN_img.src = null), d.zoomInS_img && (d.zoomInS_img.src = null), d.zoomOutN_img && (d.zoomOutN_img.src = null), d.zoomOutS_img && (d.zoomOutS_img.src = null), d.scrollBarHandlerN_img && (d.scrollBarHandlerN_img.src = null), d.scrollBarHandlerN_img && (d.scrollBarHandlerN_img.src = null), d.scrollBarHandlerS_img && (d.scrollBarHandlerS_img.src = null), d.scrollBarLeft_img && (d.scrollBarLeft_img.src = null), d.scrollBarLeft_img && (d.scrollBarLeft_img.src = null), d.scrollBarRight_img && (d.scrollBarRight_img.src = null), d.toolTipLeft_img && (d.toolTipLeft_img.src = null), d.toolTipPointer_img && (d.toolTipPointer_img.src = null), d.infoWindowCloseNormal_img && (d.infoWindowCloseNormal_img.src = null), d.infoWindowCloseSelected_img && (d.infoWindowCloseSelected_img.src = null), d.mainPreloader_img = null, d.mainLightboxCloseButtonN_img = null, d.mainLightboxCloseButtonS_img = null, d.controllerBackgroundLeft_img = null, d.controllerBackgroundRight_img = null, d.controllerMoveDownN_img = null, d.controllerMoveDownS_img = null, d.controllerMoveUpN_img = null, d.controllerMoveUpS_img = null, d.controllerNextN_img = null, d.controllerNextS_img = null, d.controllerPrevN_img = null, d.controllerPrevS_img = null, d.controllerHideMarkersN_img = null, d.controllerHideMarkersS_img = null, d.controllerShowMarkersN_img = null, d.controllerShowMarkersS_img = null, d.controllerInfoN_img = null, d.controllerInfoS_img = null, d.controllerHideN_img = null, d.controllerHideS_img = null, d.controllerShowN_img = null, d.controllerShowS_img = null, d.controllerFullScreenNormalN_img = null, d.controllerFullScreenNormalS_img = null, d.controllerFullScreenFullN_img = null, d.controllerFullScreenFullS_img = null, d.zoomInN_img = null, d.zoomInS_img = null, d.zoomOutN_img = null, d.zoomOutS_img = null, d.scrollBarHandlerN_img = null, d.scrollBarHandlerS_img = null, d.scrollBarLeft_img = null, d.scrollBarRight_img = null, d.toolTipLeft_img = null, d.toolTipPointer_img = null, d.infoWindowCloseNormal_img = null, d.infoWindowCloseSelected_img = null, this.props_obj = null, this.rootElement_el = null, this.skinPaths_ar = null, this.markersList_ar = null, this.toolTipWindows_ar = null, this.buttons_ar = null, this.buttonsLabels_ar = null, this.contextMenuLabels_ar = null, this.backgroundColor_str = null, this.handMovePath_str = null, this.handGrabPath_str = null, this.controllerBackgroundMiddlePath_str = null, this.scrollBarMiddlePath_str = null, this.controllerPosition_str = null, this.preloaderFontColor_str = null, this.preloaderBackgroundColor_str = null, this.preloaderText_str = null, this.buttonToolTipLeft_str = null, this.buttonToolTipMiddle_str = null, this.buttonToolTipRight_str = null, this.buttonToolTipBottomPointer_str = null, this.buttonToolTipTopPointer_str = null, this.buttonToolTipFontColor_str = null, this.contextMenuBackgroundColor_str = null, this.contextMenuBorderColor_str = null, this.contextMenuSpacerColor_str = null, this.contextMenuItemNormalColor_str = null, this.contextMenuItemSelectedColor_str = null, this.contextMenuItemSelectedColor_str = null, this.contextMenuItemDisabledColor_str = null, this.navigatorPosition_str = null, this.navigatorHandlerColor_str = null, this.navigatorBorderColor_str = null, this.infoText_str = null, this.infoWindowBackgroundColor_str = null, this.infoWindowScrollBarColor_str = null, e.destroy(), d = null, e = null, b.prototype = null
        }, d.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDEventDispatcher
    }, b.prototype = null, b.PRELOADER_LOAD_DONE = "onPreloaderLoadDone", b.LOAD_DONE = "onLoadDone", b.LOAD_ERROR = "onLoadError", b.LIGHBOX_CLOSE_BUTTON_LOADED = "onLightBoxCloseButtonLoadDone", b.IMAGE_LOADED = "onImageLoaded", b.FIRST_IMAGE_LOAD_COMPLETE = "onFirstImageLoadComplete", b.IMAGES_LOAD_COMPLETE = "onImagesLoadComplete", b.SKIN_PROGRESS = "onSkinProgress", b.IMAGES_PROGRESS = "onImagesPogress", b.hasTouch_bl = !1, a.FWDData = b
}(window),
function(a) {
    var b = function(c, d) {
        var e = this,
            f = b.prototype;
        this.infoWindowCloseNormal_img = d.infoWindowCloseNormal_img, this.infoWindowCloseSelected_img = d.infoWindowCloseSelected_img, this.close_do = null, this.background_sdo = null, this.mainContentHolder_do = null, this.dumyHolder_do = null, this.contentHolder_sdo = null, this.scrollBar_do = null, this.scrollBarTrack_sdo = null, this.scrollBarHandler_sdo = null, this.mainBackgroundColor_str = d.infoWindowBackgroundColor_str, this.scrollBarHandlerColor = d.infoWindowScrollBarColor_str, this.scrollBarTrackColor = d.infoWindowScrollBarColor_str, this.scrollBarTrackOpacity = .6, this.toolTipWindowId = "none", this.backgroundOpacity = d.infoWindowBackgroundOpacity, this.mainContentHolderWidth, this.mainContentHolderHeight, this.contentHolderHeight, this.scrollBarHandlerFinalY, this.mainContentFinalX = 0, this.mainContentFinalY = 0, this.contentFinalX = 0, this.contentFinalY = 0, this.headerFinalY = 0, this.contentHeight, this.maxWidth = 800, this.offestWidth = 20, this.offsetHeight = 20, this.stageWidth, this.stageHeight, this.scrollBarHeight = 0, this.scrollBarWidth = 4, this.scrollBarHandlerHeight, this.scrollBarBorderRadius = 15, this.yPositionOnPress, this.lastPresedY, this.closeButtonWidth = e.infoWindowCloseNormal_img.width, this.closeButtonHeight = e.infoWindowCloseNormal_img.height, this.vy = 0, this.vy2 = 0, this.friction = .9, this.hideWithDelayId_do, this.showOrHideWithDelayId_to, this.hideCompleteId_to, this.updateMobileScrollBarId_int, this.isShowed_bl = !0, this.isDragging_bl = !1, this.allowToScroll_bl = !0, this.isMobile_bl = FWDUtils.isMobile, this.hasPointerEvent_bl = FWDUtils.hasPointerEvent, e.init = function() {
            e.setOverflow("visible"), e.setBackfaceVisibility(), e.setupMainContainers(), e.isMobile_bl ? e.setupMobileScrollbar() : (e.setupPCScrollBar(), e.addMouseWheelSupport()), e.setupCloseButton(), e.hide(!1)
        }, e.resizeAndPosition = function() {
            (e.stageWidth != c.stageWidth || e.stageHeight != c.stageHeight) && (e.stageWidth = c.stageWidth, e.stageHeight = c.stageHeight, e.background_sdo.setWidth(e.stageWidth), e.background_sdo.setHeight(e.stageHeight), e.updateSize())
        }, e.setupMainContainers = function() {
            e.background_sdo = new FWDSimpleDisplayObject("div"), e.background_sdo.setBkColor(e.mainBackgroundColor_str), e.addChild(e.background_sdo), e.mainContentHolder_do = new FWDDisplayObject("div"), e.mainContentHolder_do.setBackfaceVisibility(), e.dumyHolder_do = new FWDDisplayObject("div"), e.dumyHolder_do.setBackfaceVisibility(), e.addChild(e.dumyHolder_do), e.dumyHolder_do.addChild(e.mainContentHolder_do), e.contentHolder_sdo = new FWDSimpleDisplayObject("div"), e.contentHolder_sdo.getStyle().fontSmoothing = "antialiased", e.contentHolder_sdo.getStyle().webkitFontSmoothing = "antialiased", e.contentHolder_sdo.getStyle().textRendering = "optimizeLegibility", (!FWDUtils.isMobile || FWDUtils.isApple) && (e.contentHolder_sdo.hasTransform3d_bl = !1, e.contentHolder_sdo.hasTransform2d_bl = !1), e.contentHolder_sdo.setBackfaceVisibility(), e.mainContentHolder_do.addChild(e.contentHolder_sdo)
        }, e.setupCloseButton = function() {
            FWDSimpleButton.setPrototype(), e.close_do = new FWDSimpleButton(e.infoWindowCloseNormal_img, e.infoWindowCloseSelected_img), e.close_do.addListener(FWDSimpleButton.MOUSE_DOWN, e.closeButtonStartHandler), e.mainContentHolder_do.addChild(e.close_do)
        }, e.closeButtonStartHandler = function() {
            e.isShowed_bl && e.hide(!0)
        }, e.updateSize = function() {
            e.mainContentHolderWidth = e.stageWidth - e.offestWidth, e.mainContentHolderWidth > e.maxWidth && (e.mainContentHolderWidth = e.maxWidth), e.mainContentHolder_do.setWidth(e.mainContentHolderWidth), e.setWidth(e.stageWidth), e.setHeight(e.stageHeight), e.dumyHolder_do.setWidth(e.stageWidth), e.dumyHolder_do.setHeight(e.stageHeight), e.close_do.setX(e.mainContentHolderWidth - e.closeButtonWidth), e.isMobile_bl ? setTimeout(function() {
                null != e && (TweenMax.killTweensOf(e.mainContentHolder_do), e.contentHolderHeight = e.contentHolder_sdo.getHeight(), e.mainContentHolderHeight = Math.min(e.stageHeight, e.contentHolderHeight), e.mainContentFinalX = Math.round((e.stageWidth - e.mainContentHolderWidth) / 2), e.stageHeight > e.contentHolderHeight ? (e.mainContentFinalY = Math.round((e.stageHeight - e.contentHolderHeight) / 2), e.allowToScroll_bl = !1) : (e.mainContentFinalY = 0, e.allowToScroll_bl = !0), e.updateMobileScrollBarWithoutAnimation(), TweenMax.killTweensOf(e.mainContentHolder_do), e.mainContentHolder_do.setX(e.mainContentFinalX), e.mainContentHolder_do.setY(e.mainContentFinalY), e.mainContentHolder_do.setHeight(e.mainContentHolderHeight))
            }, 50) : setTimeout(function() {
                null != e && (TweenMax.killTweensOf(e.mainContentHolder_do), e.contentHolderHeight = e.contentHolder_sdo.getHeight(), e.mainContentHolderHeight = e.stageHeight, e.mainContentFinalX = Math.round((e.stageWidth - e.mainContentHolderWidth) / 2), e.scrollBarHeight = Math.min(e.contentHolderHeight - 20 - e.closeButtonHeight, e.stageHeight - 20 - e.closeButtonHeight), e.stageHeight > e.contentHolderHeight ? (e.scrollBar_do.setOverflow("hidden"), e.mainContentHolderHeight = e.contentHolderHeight, e.scrollBarHandler_sdo.setY(0), e.mainContentFinalY = Math.round((e.stageHeight - e.contentHolderHeight) / 2), e.allowToScroll_bl = !1) : (e.mainContentFinalY = 0, e.scrollBar_do.setOverflow("visible"), e.scrollBar_do.setY(5 + e.closeButtonHeight), e.allowToScroll_bl = !0), e.stageHeight < 120 && (e.mainContentFinalY = 0), e.scrollBarHandlerHeight = Math.min(e.scrollBarHeight - 20, e.stageHeight / e.contentHolderHeight * (e.scrollBarHeight - 20)), e.scrollBarHandlerHeight > 500 && (e.scrollBarHandlerHeight = 500), e.scrollBar_do.setX(e.mainContentHolderWidth - e.scrollBarWidth - 2), e.scrollBarTrack_sdo.setHeight(Math.max(e.scrollBarHeight, e.scrollBarHandlerHeight)), e.scrollBarHandler_sdo.setHeight(e.scrollBarHandlerHeight), TweenMax.killTweensOf(e.mainContentHolder_do), e.mainContentHolder_do.setX(e.mainContentFinalX), e.mainContentHolder_do.setY(e.mainContentFinalY), e.mainContentHolder_do.setHeight(e.mainContentHolderHeight), e.updatePCHandler(!1))
            }, 50)
        }, e.setText = function(a) {
            null != e && (e.updateSize(), e.contentHolder_sdo.setInnerHTML(a), setTimeout(e.updateSize, 120))
        }, e.setupPCScrollBar = function() {
            e.scrollBar_do = new FWDDisplayObject("div"), e.scrollBar_do.setOverflow("visible"), e.mainContentHolder_do.addChild(e.scrollBar_do), e.scrollBarTrack_sdo = new FWDSimpleDisplayObject("div"), e.scrollBarTrack_sdo.setWidth(e.scrollBarWidth), e.scrollBarTrack_sdo.setBkColor(e.scrollBarTrackColor), e.scrollBarTrack_sdo.setAlpha(0), e.scrollBarTrack_sdo.getStyle().borderRadius = e.scrollBarBorderRadius + "px", e.scrollBar_do.addChild(e.scrollBarTrack_sdo), e.scrollBarHandler_sdo = new FWDSimpleDisplayObject("div"), e.scrollBarHandler_sdo.setButtonMode(!0), e.scrollBarHandler_sdo.setWidth(e.scrollBarWidth), e.scrollBarHandler_sdo.getStyle().borderRadius = e.scrollBarBorderRadius + "px", e.scrollBarHandler_sdo.setBkColor(e.scrollBarHandlerColor), e.scrollBarHandler_sdo.setAlpha(.5), e.scrollBarHandler_sdo.screen.addEventListener ? (e.scrollBarHandler_sdo.screen.addEventListener("mouseover", e.scrollBarHandlerOnMouseOver), e.scrollBarHandler_sdo.screen.addEventListener("mouseout", e.scrollBarHandlerOnMouseOut), e.scrollBarHandler_sdo.screen.addEventListener("mousedown", e.scrollBarHandlerOnMouseDown)) : e.screen.attachEvent && (e.scrollBarHandler_sdo.screen.attachEvent("onmouseover", e.scrollBarHandlerOnMouseOver), e.scrollBarHandler_sdo.screen.attachEvent("onmouseout", e.scrollBarHandlerOnMouseOut), e.scrollBarHandler_sdo.screen.attachEvent("onmousedown", e.scrollBarHandlerOnMouseDown)), e.scrollBar_do.addChild(e.scrollBarHandler_sdo)
        }, e.scrollBarHandlerOnMouseOver = function() {
            TweenMax.to(e.scrollBarHandler_sdo, .2, {
                alpha: 1,
                w: 10
            }), TweenMax.to(e.scrollBarTrack_sdo, .2, {
                alpha: .4,
                w: 10
            }), TweenMax.to(e.scrollBar_do, .2, {
                x: e.mainContentHolderWidth - e.scrollBarWidth - 6
            })
        }, e.scrollBarHandlerOnMouseOut = function() {
            e.isDragging_bl || (TweenMax.to(e.scrollBarHandler_sdo, .3, {
                alpha: .5,
                w: e.scrollBarWidth
            }), TweenMax.to(e.scrollBarTrack_sdo, .3, {
                alpha: 0,
                w: e.scrollBarWidth
            }), TweenMax.to(e.scrollBar_do, .3, {
                x: e.mainContentHolderWidth - e.scrollBarWidth - 2
            }))
        }, e.scrollBarHandlerOnMouseDown = function(b) {
            if (e.allowToScroll_bl) {
                var c = FWDUtils.getViewportMouseCoordinates(b);
                e.isDragging_bl = !0, e.yPositionOnPress = e.scrollBarHandler_sdo.getY(), e.lastPresedY = c.screenY, a.addEventListener ? (a.addEventListener("mousemove", e.scrollBarHandlerMoveHandler), a.addEventListener("mouseup", e.scrollBarHandlerEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", e.scrollBarHandlerMoveHandler), document.attachEvent("onmouseup", e.scrollBarHandlerEndHandler))
            }
        }, e.scrollBarHandlerMoveHandler = function(a) {
            a.preventDefault && a.preventDefault();
            var b = FWDUtils.getViewportMouseCoordinates(a);
            e.scrollBarHandlerFinalY = Math.round(e.yPositionOnPress + b.screenY - e.lastPresedY), e.scrollBarHandlerFinalY >= e.scrollBarHeight - e.scrollBarHandlerHeight && (e.scrollBarHandlerFinalY = e.scrollBarHeight - e.scrollBarHandlerHeight), e.scrollBarHandlerFinalY <= 0 && (e.scrollBarHandlerFinalY = 0), e.scrollBarHandler_sdo.setY(e.scrollBarHandlerFinalY), e.updatePCHandler(!0)
        }, e.scrollBarHandlerEndHandler = function(b) {
            var c = FWDUtils.getViewportMouseCoordinates(b);
            e.isDragging_bl = !1, FWDUtils.hitTest(e.scrollBarHandler_sdo.screen, c.screenX, c.screenY) || e.scrollBarHandlerOnMouseOut(), a.removeEventListener ? (a.removeEventListener("mousemove", e.scrollBarHandlerMoveHandler), a.removeEventListener("mouseup", e.scrollBarHandlerEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", e.scrollBarHandlerMoveHandler), document.detachEvent("onmouseup", e.scrollBarHandlerEndHandler))
        }, e.updatePCHandler = function(a) {
            var b, c;
            c = e.scrollBarHandlerFinalY / (e.scrollBarHeight - e.scrollBarHandlerHeight), "Infinity" == c && (c = 0), c >= 1 && (c = 1), e.isDragging_bl ? e.contentFinalY = parseInt(c * (e.stageHeight - e.contentHolderHeight)) : (e.scrollBarHandler_sdo.getY() < 0 ? e.scrollBarHandler_sdo.setY(0) : e.scrollBarHandler_sdo.getY() > e.scrollBarHeight - e.scrollBarHandlerHeight && e.scrollBarHandler_sdo.setY(e.scrollBarHeight - e.scrollBarHandlerHeight), b = e.scrollBarHandler_sdo.getY() / (e.scrollBarHeight - e.scrollBarHandlerHeight), isNaN(b) && (b = 0), e.stageHeight > e.contentHolderHeight ? e.contentFinalY = 0 : (e.contentFinalY = Math.round(b * (e.scrollBarHeight - e.scrollBarHandlerHeight)), e.contentFinalY = Math.round(b * (e.stageHeight - e.contentHolderHeight)))), a ? TweenMax.to(e.contentHolder_sdo, .3, {
                y: Math.round(e.contentFinalY)
            }) : e.contentHolder_sdo.setY(Math.round(e.contentFinalY))
        }, e.addMouseWheelSupport = function() {
            a.addEventListener ? (e.screen.addEventListener("mousewheel", e.mouseWheelHandler), e.screen.addEventListener("DOMMouseScroll", e.mouseWheelHandler)) : document.attachEvent && e.screen.attachEvent("onmousewheel", e.mouseWheelHandler)
        }, this.mouseWheelHandler = function(a) {
            if (e.isShowed_bl && !(e.isDragging_bl || e.stageHeight > e.contentHolderHeight)) {
                var b = e.stageHeight / e.contentHolderHeight,
                    c = a.detail || a.wheelDelta;
                return a.wheelDelta && (c *= -1), FWDUtils.isOpera && (c *= -1), c > 0 ? e.scrollBarHandler_sdo.setY(e.scrollBarHandler_sdo.getY() + 45 * b) : 0 > c && e.scrollBarHandler_sdo.setY(e.scrollBarHandler_sdo.getY() - 45 * b), e.updatePCHandler(!0), a.preventDefault ? (a.preventDefault(), void 0) : !1
            }
        }, e.setupMobileScrollbar = function() {
            e.hasPointerEvent_bl ? e.screen.addEventListener("MSPointerDown", e.scrollBarTouchStartHandler) : e.screen.addEventListener("touchstart", e.scrollBarTouchStartHandler)
        }, e.scrollBarTouchStartHandler = function(b) {
            if (e.allowToScroll_bl) {
                var c = FWDUtils.getViewportMouseCoordinates(b);
                e.isDragging_bl = !0, e.lastPresedY = c.screenY, e.hasPointerEvent_bl ? (a.addEventListener("MSPointerUp", e.scrollBarTouchEndHandler), a.addEventListener("MSPointerMove", e.scrollBarTouchMoveHandler)) : (a.addEventListener("touchend", e.scrollBarTouchEndHandler), a.addEventListener("touchmove", e.scrollBarTouchMoveHandler))
            }
        }, e.scrollBarTouchMoveHandler = function(a) {
            a.preventDefault && a.preventDefault();
            var b = FWDUtils.getViewportMouseCoordinates(a),
                c = b.screenY - e.lastPresedY;
            e.contentFinalY += c, e.contentFinalY = Math.round(e.contentFinalY), e.contentHolder_sdo.setY(e.contentFinalY), e.lastPresedY = b.screenY, e.vy = 2 * c
        }, e.scrollBarTouchEndHandler = function() {
            e.isDragging_bl = !1, e.hasPointerEvent_bl ? (a.removeEventListener("MSPointerUp", e.scrollBarTouchEndHandler), a.removeEventListener("MSPointerMove", e.scrollBarTouchMoveHandler)) : (a.removeEventListener("touchend", e.scrollBarTouchEndHandler), a.removeEventListener("touchmove", e.scrollBarTouchMoveHandler))
        }, e.updateMobileScrollBar = function() {
            e.isDragging_bl || (e.vy *= e.friction, e.contentFinalY += e.vy, e.contentFinalY > 0 ? (e.vy2 = .3 * (0 - e.contentFinalY), e.vy *= e.friction, e.contentFinalY += e.vy2) : e.contentFinalY < e.mainContentHolderHeight - e.contentHolderHeight && (e.vy2 = .3 * (e.mainContentHolderHeight - e.contentHolderHeight - e.contentFinalY), e.vy *= e.friction, e.contentFinalY += e.vy2), e.contentHolder_sdo.setY(Math.round(e.contentFinalY)))
        }, e.updateMobileScrollBarWithoutAnimation = function() {
            e.contentFinalY > 0 ? e.contentFinalY = 0 : e.contentFinalY < e.mainContentHolderHeight - e.contentHolderHeight && (e.contentFinalY = e.mainContentHolderHeight - e.contentHolderHeight), e.contentHolder_sdo.setY(Math.round(e.contentFinalY))
        }, e.activateScrollBar = function() {
            e.isMobile_bl && (e.updateMobileScrollBarId_int = setInterval(e.updateMobileScrollBar, 16))
        }, e.show = function(a) {
            e.isShowed_bl || (e.isShowed_bl = !0, e.resizeAndPosition(), e.setText(a), e.activateScrollBar(), FWDUtils.isMobile ? (TweenMax.to(e.background_sdo, .6, {
                alpha: e.backgroundOpacity,
                delay: .2
            }), e.showOrHideWithDelayId_to = setTimeout(e.showWithDelay, 1800)) : (TweenMax.to(e.background_sdo, .6, {
                alpha: e.backgroundOpacity
            }), e.showOrHideWithDelayId_to = setTimeout(e.showWithDelay, 800)), e.dispatchEvent(b.SHOW_START))
        }, e.showWithDelay = function() {
            e.dumyHolder_do.setX(0), e.scrollBarHandler_sdo && e.scrollBarHandler_sdo.setVisible(!0), e.mainContentHolder_do.setY(-e.mainContentHolderHeight), TweenMax.to(e.mainContentHolder_do, .6, {
                y: e.mainContentFinalY,
                ease: Expo.easeInOut
            }), e.isMobile_bl || setTimeout(function() {
                e.scrollBarHandler_sdo.setAlpha(.5), e.close_do.s_do && e.close_do.s_do.setAlpha(0)
            }, 400)
        }, e.hide = function(a, b) {
            (e.isShowed_bl || b) && (TweenMax.killTweensOf(e.background_sdo), a ? (TweenMax.to(e.mainContentHolder_do, .6, {
                y: e.stageHeight,
                ease: Expo.easeInOut
            }), e.showOrHideWithDelayId_to = setTimeout(e.hideWithDelay, 800)) : (e.dumyHolder_do.setX(-3e3), e.scrollBarHandler_sdo && e.scrollBarHandler_sdo.setVisible(!1), e.background_sdo.setAlpha(0)), clearInterval(e.updateMobileScrollBarId_int), e.isShowed_bl = !1)
        }, e.hideWithDelay = function() {
            e.contentHolder_sdo.setInnerHTML(""), TweenMax.to(e.background_sdo, .6, {
                alpha: 0
            }), e.hideCompleteId_to = setTimeout(e.hideWithDelayComplete, 600)
        }, e.hideWithDelayComplete = function() {
            e.contentFinalY = 0, e.scrollBarHandler_sdo && e.scrollBarHandler_sdo.setY(0), e.dispatchEvent(b.HIDE_COMPLETE)
        }, e.cleanMainEvents = function() {
            e.screen.removeEventListener ? (e.scrollBarHandler_sdo && (e.scrollBarHandler_sdo.screen.removeEventListener("mouseover", e.scrollBarHandlerOnMouseOver), e.scrollBarHandler_sdo.screen.removeEventListener("mouseout", e.scrollBarHandlerOnMouseOut), e.scrollBarHandler_sdo.screen.removeEventListener("mousedown", e.scrollBarHandlerOnMouseDown)), a.removeEventListener("mousemove", e.scrollBarHandlerMoveHandler), a.removeEventListener("mouseup", e.scrollBarHandlerEndHandler), e.screen.removeEventListener("mousewheel", e.mouseWheelHandler), e.screen.removeEventListener("DOMMouseScroll", e.mouseWheelHandler), e.screen.addEventListener("MSPointerDown", e.scrollBarTouchStartHandler), e.screen.addEventListener("touchstart", e.scrollBarTouchStartHandler), a.removeEventListener("MSPointerUp", e.scrollBarTouchEndHandler), a.removeEventListener("MSPointerMove", e.scrollBarTouchMoveHandler), a.removeEventListener("touchend", e.scrollBarTouchEndHandler), a.removeEventListener("touchmove", e.scrollBarTouchMoveHandler)) : e.screen.detachEvent && (e.scrollBarHandler_sdo.screen.detachEvent("onmouseover", e.scrollBarHandlerOnMouseOver), e.scrollBarHandler_sdo.screen.detachEvent("onmouseout", e.scrollBarHandlerOnMouseOut), e.scrollBarHandler_sdo.screen.detachEvent("onmousedown", e.scrollBarHandlerOnMouseDown), document.detachEvent("onmousemove", e.scrollBarHandlerMoveHandler), document.detachEvent("onmouseup", e.scrollBarHandlerEndHandler), e.screen.detachEvent("onmousewheel", e.mouseWheelHandler)), clearTimeout(e.hideWithDelayId_do), clearTimeout(e.showOrHideWithDelayId_to), clearTimeout(e.hideCompleteId_to), clearInterval(e.updateMobileScrollBarId_int)
        }, e.destroy = function() {
            e.cleanMainEvents(), e.scrollBar_do && (TweenMax.killTweensOf(e.scrollBar_do), TweenMax.killTweensOf(e.scrollBarHandler_sdo), TweenMax.killTweensOf(e.scrollBarTrack_sdo), e.scrollBar_do.destroy(), e.scrollBarHandler_sdo.destroy(), e.scrollBarTrack_sdo.destroy()), TweenMax.killTweensOf(e.contentHolder_sdo), e.contentHolder_sdo.destroy(), TweenMax.killTweensOf(e.background_sdo), e.background_sdo.destroy(), TweenMax.killTweensOf(e.mainContentHolder_do), e.mainContentHolder_do.destroy(), e.close_do.destroy(), e.infoWindowCloseNormal_img = null, e.infoWindowCloseSelected_img = null, e.close_do = null, e.background_sdo = null, e.mainContentHolder_do = null, e.contentHolder_sdo = null, e.scrollBar_do = null, e.scrollBarTrack_sdo = null, e.scrollBarHandler_sdo = null, e.mainBackgroundColor_str = null, e.scrollBarHandlerColor = null, e.scrollBarTrackColor = null, e.scrollBarTrackOpacity = null, c = null, d = null, e.setInnerHTML(""), f.destroy(), e = null, f = null, b.prototype = null
        }, e.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDDisplayObject("div")
    }, b.HIDE_COMPLETE = "hideComplete", b.SHOW_START = "showStart", b.prototype = null, a.FWDDescriptionWindow = b
}(window),
function(a) {
    var b = function(a, b, c, d) {
        var e = this;
        if (e.listeners = {
            events_ar: []
        }, "div" != a && "img" != a && "canvas" != a) throw Error("Type is not valid! " + a);
        e.type = a, this.children_ar = [], this.style, this.screen, this.transform, this.position = b || "absolute", this.overflow = c || "hidden", this.display = d || "inline-block", this.visible = !0, this.buttonMode, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.rect, this.alpha = 1, this.innerHTML = "", this.opacityType = "", this.isHtml5_bl = !1, this.hasTransform3d_bl = FWDUtils.hasTransform3d, this.hasTransform2d_bl = FWDUtils.hasTransform2d, FWDUtils.isFirefox && (e.hasTransform3d_bl = !1), FWDUtils.isFirefox && (e.hasTransform2d_bl = !1), this.hasBeenSetSelectable_bl = !1, e.init = function() {
            e.setScreen()
        }, e.getTransform = function() {
            for (var b, a = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"]; b = a.shift();)
                if ("undefined" != typeof e.screen.style[b]) return b;
            return !1
        }, e.getOpacityType = function() {
            var a;
            return a = "undefined" != typeof e.screen.style.opacity ? "opacity" : "filter"
        }, e.setScreen = function(a) {
            "img" == e.type && a ? (e.screen = a, e.setMainProperties()) : (e.screen = document.createElement(e.type), e.setMainProperties())
        }, e.setMainProperties = function() {
            e.transform = e.getTransform(), e.setPosition(e.position), e.setDisplay(e.display), e.setOverflow(e.overflow), e.opacityType = e.getOpacityType(), "opacity" == e.opacityType && (e.isHtml5_bl = !0), "filter" == e.opacityType && (e.screen.style.filter = "inherit"), e.screen.style.left = "0px", e.screen.style.top = "0px", e.screen.style.margin = "0px", e.screen.style.padding = "0px", e.screen.style.maxWidth = "none", e.screen.style.maxHeight = "none", e.screen.style.border = "none", e.screen.style.lineHeight = "1", e.screen.style.backgroundColor = "transparent", e.screen.style.backfaceVisibility = "hidden", e.screen.style.webkitBackfaceVisibility = "hidden", e.screen.style.MozBackfaceVisibility = "hidden", e.screen.style.MozImageRendering = "optimizeSpeed", e.screen.style.WebkitImageRendering = "optimizeSpeed", "img" == a && (e.setWidth(e.screen.width), e.setHeight(e.screen.height))
        }, e.setBackfaceVisibility = function() {
            e.screen.style.backfaceVisibility = "visible", e.screen.style.webkitBackfaceVisibility = "visible", e.screen.style.MozBackfaceVisibility = "visible"
        }, e.setSelectable = function(a) {
            a || (e.screen.style.userSelect = "none", e.screen.style.MozUserSelect = "none", e.screen.style.webkitUserSelect = "none", e.screen.style.khtmlUserSelect = "none", e.screen.style.oUserSelect = "none", e.screen.style.msUserSelect = "none", e.screen.msUserSelect = "none", e.screen.ondragstart = function() {
                return !1
            }, e.screen.onselectstart = function() {
                return !1
            }, e.screen.ontouchstart = function() {
                return !1
            }, e.screen.style.webkitTouchCallout = "none", e.hasBeenSetSelectable_bl = !0)
        }, e.getScreen = function() {
            return e.screen
        }, e.setVisible = function(a) {
            e.visible = a, e.screen.style.visibility = 1 == e.visible ? "visible" : "hidden"
        }, e.getVisible = function() {
            return e.visible
        }, e.setResizableSizeAfterParent = function() {
            e.screen.style.width = "100%", e.screen.style.height = "100%"
        }, e.getStyle = function() {
            return e.screen.style
        }, e.setOverflow = function(a) {
            e.overflow = a, e.screen.style.overflow = e.overflow
        }, e.setPosition = function(a) {
            e.position = a, e.screen.style.position = e.position
        }, e.setDisplay = function(a) {
            e.display = a, e.screen.style.display = e.display
        }, e.setButtonMode = function(a) {
            e.buttonMode = a, e.screen.style.cursor = 1 == e.buttonMode ? "pointer" : "default"
        }, e.setBkColor = function(a) {
            e.screen.style.backgroundColor = a
        }, e.setInnerHTML = function(a) {
            e.innerHTML = a, e.screen.innerHTML = e.innerHTML
        }, e.getInnerHTML = function() {
            return e.innerHTML
        }, e.getRect = function() {
            return e.screen.getBoundingClientRect()
        }, e.setAlpha = function(a) {
            e.alpha = a, "opacity" == e.opacityType ? e.screen.style.opacity = e.alpha : "filter" == e.opacityType && (e.screen.style.filter = "alpha(opacity=" + 100 * e.alpha + ")", e.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * e.alpha) + ")")
        }, e.getAlpha = function() {
            return e.alpha
        }, e.getRect = function() {
            return e.screen.getBoundingClientRect()
        }, e.getGlobalX = function() {
            return e.getRect().left
        }, e.getGlobalY = function() {
            return e.getRect().top
        }, e.setX = function(a) {
            e.x = a, e.hasTransform3d_bl ? e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px,0)" : e.hasTransform2d_bl ? e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)" : e.screen.style.left = e.x + "px"
        }, e.getX = function() {
            return e.x
        }, e.setY = function(a) {
            e.y = a, e.hasTransform3d_bl ? e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px,0)" : e.hasTransform2d_bl ? e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)" : e.screen.style.top = e.y + "px"
        }, e.getY = function() {
            return e.y
        }, e.setWidth = function(a) {
            e.w = a, "img" == e.type ? e.screen.width = e.w : e.screen.style.width = e.w + "px"
        }, e.getWidth = function() {
            return "div" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : e.w : "img" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : 0 != e.screen.width ? e.screen.width : e._w : "canvas" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : e.w : void 0
        }, e.setHeight = function(a) {
            e.h = a, "img" == e.type ? e.screen.height = e.h : e.screen.style.height = e.h + "px"
        }, e.getHeight = function() {
            return "div" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : e.h : "img" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : 0 != e.screen.height ? e.screen.height : e.h : "canvas" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : e.h : void 0
        }, e.addChild = function(a) {
            e.contains(a) ? (e.children_ar.splice(FWDUtils.indexOfArray(e.children_ar, a), 1), e.children_ar.push(a), e.screen.appendChild(a.screen)) : (e.children_ar.push(a), e.screen.appendChild(a.screen))
        }, e.removeChild = function(a) {
            if (!e.contains(a)) throw Error("##removeChild()## Child dose't exist, it can't be removed!");
            e.children_ar.splice(FWDUtils.indexOfArray(e.children_ar, a), 1), e.screen.removeChild(a.screen)
        }, e.contains = function(a) {
            return -1 == FWDUtils.indexOfArray(e.children_ar, a) ? !1 : !0
        }, e.addChildAt = function(a, b) {
            if (0 == e.getNumChildren()) e.children_ar.push(a), e.screen.appendChild(a.screen);
            else if (1 == b) e.screen.insertBefore(a.screen, e.children_ar[0].screen), e.screen.insertBefore(e.children_ar[0].screen, a.screen), e.contains(a) ? e.children_ar.splice(FWDUtils.indexOfArray(e.children_ar, a), 1, a) : e.children_ar.splice(FWDUtils.indexOfArray(e.children_ar, a), 0, a);
            else {
                if (0 > b || b > e.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
                e.screen.insertBefore(a.screen, e.children_ar[b].screen), e.contains(a) ? e.children_ar.splice(FWDUtils.indexOfArray(e.children_ar, a), 1, a) : e.children_ar.splice(FWDUtils.indexOfArray(e.children_ar, a), 0, a)
            }
        }, e.getChildAt = function(a) {
            if (0 > a || a > e.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
            if (0 == e.getNumChildren()) throw Errror("##getChildAt## Child dose not exist!");
            return e.children_ar[a]
        }, e.removeChildAtZero = function() {
            e.screen.removeChild(e.children_ar[0].screen), e.children_ar.shift()
        }, e.getNumChildren = function() {
            return e.children_ar.length
        }, e.addListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function.");
            var c = {};
            c.type = a, c.listener = b, c.target = this, this.listeners.events_ar.push(c)
        }, e.dispatchEvent = function(a, b) {
            if (null != this.listeners) {
                if (void 0 == a) throw Error("type is required.");
                if ("object" == typeof a) throw Error("type must be of type String.");
                for (var c = 0, d = this.listeners.events_ar.length; d > c; c++)
                    if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a) {
                        if (b)
                            for (var e in b) this.listeners.events_ar[c][e] = b[e];
                        this.listeners.events_ar[c].listener.call(this, this.listeners.events_ar[c])
                    }
            }
        }, e.removeListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function." + a);
            for (var c = 0, d = this.listeners.events_ar.length; d > c; c++)
                if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a && this.listeners.events_ar[c].listener === b) {
                    this.listeners.events_ar.splice(c, 1);
                    break
                }
        }, e.disposeImage = function() {
            "img" == e.type && (e.screen.src = null)
        }, e.destroy = function() {
            e.hasBeenSetSelectable_bl && (e.screen.ondragstart = null, e.screen.onselectstart = null, e.screen.ontouchstart = null), e.screen.removeAttribute("style"), e.listeners = [], e.listeners = null, e.children_ar = [], e.children_ar = null, e.style = null, e.screen = null, e.transform = null, e.position = null, e.overflow = null, e.display = null, e.visible = null, e.buttonMode = null, e.x = null, e.y = null, e.w = null, e.h = null, e.rect = null, e.alpha = null, e.innerHTML = null, e.opacityType = null, e.isHtml5_bl = null, e.hasTransform3d_bl = null, e.hasTransform2d_bl = null, e = null
        }, e.init()
    };
    a.FWDDisplayObject = b
}(window),
function() {
    var a = function() {
        this.listeners = {
            events_ar: []
        }, this.addListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function.");
            var c = {};
            c.type = a, c.listener = b, c.target = this, this.listeners.events_ar.push(c)
        }, this.dispatchEvent = function(a, b) {
            if (null != this.listeners) {
                if (void 0 == a) throw Error("type is required.");
                if ("object" == typeof a) throw Error("type must be of type String.");
                for (var c = 0, d = this.listeners.events_ar.length; d > c; c++)
                    if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a) {
                        if (b)
                            for (var e in b) this.listeners.events_ar[c][e] = b[e];
                        this.listeners.events_ar[c].listener.call(this, this.listeners.events_ar[c])
                    }
            }
        }, this.removeListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function." + a);
            for (var c = 0, d = this.listeners.events_ar.length; d > c; c++)
                if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a && this.listeners.events_ar[c].listener === b) {
                    this.listeners.events_ar.splice(c, 1);
                    break
                }
        }, this.destroy = function() {
            this.listeners = null, this.addListener = null, this.dispatchEvent = null, this.removeListener = null
        }
    };
    window.FWDEventDispatcher = a
}(window),
function(a) {
    var b = function(a, c, d) {
        var e = this,
            f = b.prototype;
        this.screenToTest = c, this.hideDelay = d, this.globalX = 0, this.globalY = 0, this.currentTime, this.checkIntervalId_int, this.dispatchOnceShow_bl = !0, this.dispatchOnceHide_bl = !1, this.isMobile_bl = a, this.isStopped_bl = !0, this.hasPointerEvent_bl = FWDUtils.hasPointerEvent, e.init = function() {}, e.start = function() {
            e.currentTime = (new Date).getTime(), e.checkIntervalId_int = setInterval(e.update, 100), e.addMouseOrTouchCheck(), e.isStopped_bl = !1
        }, e.stop = function() {
            clearInterval(e.checkIntervalId_int), e.isStopped_bl = !0, e.removeMouseOrTouchCheck()
        }, e.addMouseOrTouchCheck = function() {
            e.isMobile_bl ? e.hasPointerEvent_bl ? (e.screenToTest.screen.addEventListener("MSPointerDown", e.onMouseOrTouchUpdate), e.screenToTest.screen.addEventListener("MSPointerMove", e.onMouseOrTouchUpdate)) : e.screenToTest.screen.addEventListener("touchstart", e.onMouseOrTouchUpdate) : e.screenToTest.screen.addEventListener ? e.screenToTest.screen.addEventListener("mousemove", e.onMouseOrTouchUpdate) : e.screenToTest.screen.attachEvent && e.screenToTest.screen.attachEvent("onmousemove", e.onMouseOrTouchUpdate)
        }, e.removeMouseOrTouchCheck = function() {
            e.isMobile_bl ? e.hasPointerEvent_bl ? (e.screenToTest.screen.removeEventListener("MSPointerDown", e.onMouseOrTouchUpdate), e.screenToTest.screen.removeEventListener("MSPointerMove", e.onMouseOrTouchUpdate)) : e.screenToTest.screen.removeEventListener("touchstart", e.onMouseOrTouchUpdate) : e.screenToTest.screen.removeEventListener ? e.screenToTest.screen.removeEventListener("mousemove", e.onMouseOrTouchUpdate) : e.screenToTest.screen.detachEvent && e.screenToTest.screen.detachEvent("onmousemove", e.onMouseOrTouchUpdate)
        }, e.onMouseOrTouchUpdate = function(a) {
            var b = FWDUtils.getViewportMouseCoordinates(a);
            e.currentTime = (new Date).getTime(), e.globalX = b.screenX, e.globalY = b.screenY
        }, e.update = function() {
            (new Date).getTime() > e.currentTime + e.hideDelay ? e.dispatchOnceShow_bl && (e.dispatchEvent(b.HIDE), e.dispatchOnceHide_bl = !0, e.dispatchOnceShow_bl = !1) : e.dispatchOnceHide_bl && (e.dispatchEvent(b.SHOW), e.dispatchOnceHide_bl = !1, e.dispatchOnceShow_bl = !0)
        }, e.reset = function() {
            e.currentTime = (new Date).getTime(), e.dispatchEvent(b.SHOW)
        }, e.destroy = function() {
            e.removeMouseOrTouchCheck(), clearInterval(e.checkIntervalId_int), e.screenToTest = null, c = null, e.init = null, e.start = null, e.stop = null, e.addMouseOrTouchCheck = null, e.removeMouseOrTouchCheck = null, e.onMouseOrTouchUpdate = null, e.update = null, e.reset = null, e.destroy = null, f.destroy(), f = null, e = null, b.prototype = null
        }, e.init()
    };
    b.HIDE = "hide", b.SHOW = "show", b.setPrototype = function() {
        b.prototype = new FWDEventDispatcher
    }, a.FWDHider = b
}(window),
function() {
    var a = function(b, c) {
        var d = this,
            e = a.prototype;
        this.originalImage_img, this.toolTipLeft_img = b.toolTipLeft_img, this.toolTipPointer_img = b.toolTipPointer_img, this.markers_ar = [], this.toolTipWindows_ar = [], this.toolTipDataWindows_ar = b.toolTipWindows_ar, this.markersList_ar = b.markersList_ar, this.markersPosition_ar = b.markersPosition_ar, this.largeImagesPaths_ar = b.largeImagesPaths_ar, this.curMarker_do, this.markersToolTip_do, this.markersToolTipWindow_do, this.hider, this.dumy_sdo, this.slicesHolder_do, this.smallImage_sdo, this.markersPositionInfo_sdo, this.handMovePath_str = b.handMovePath_str, this.handGrabPath_str = b.handGrabPath_str, this.backgroundColor_str = c.backgroundColor_str, this.draggingMode_str = b.startDraggingMode_str, this.controllerPosition_str = b.controllerPosition_str, this.buttonToolTipLeft_str = b.buttonToolTipLeft_str, this.buttonToolTipMiddle_str = b.buttonToolTipMiddle_str, this.buttonToolTipRight_str = b.buttonToolTipRight_str, this.buttonToolTipFontColor_str = b.buttonToolTipFontColor_str, this.buttonToolTipBottomPointer_str = b.buttonToolTipBottomPointer_str, this.buttonToolTipTopPointer_str = b.buttonToolTipTopPointer_str, this.lastMarkerId_str, this.curId = 0, this.prevId = 1e3, this.curLargeImageId = 1e3, this.totalImages = b.totalImages, this.totalToolTipsWindows = d.toolTipDataWindows_ar.length, this.stageWidth, this.stageHeight, this.smallestPossibleScale, this.currentScale = void 0, this.sliceCurrentScale = 1, this.prevScale = 0, this.percentZoomed = .1, this.imageWidth, this.imageHeight, this.doubleClickZoomFactor = b.doubleClickZoomFactor, this.zoomFactor = b.zoomFactor, this.startZoomFactor = b.startZoomFactor, this.zoomSpeed = b.zoomSpeed, this.finalX = 0, this.finalY = 0, this.xPositionOnPress, this.yPositionOnPress, this.lastPresedX = 0, this.lastPresedY = 0, this.lastPresedX2 = 0, this.lastPresedY2 = 0, this.mouseX = 0, this.mouseY = 0, this.controllerHeight = b.controllerHeight, this.controllerOffsetY = b.controllerOffsetY, this.rotationSpeed = Math.abs(-1.1 + b.dragRotationSpeed), this.startScaleForMobileZoom, this.totalMarkers, this.globalX, this.globalY, this.markerToolTipOffsetY = b.markerToolTipOffsetY, this.toolTipWindowMaxWidth = b.toolTipWindowMaxWidth, this.sliceWidth = b.sliceWidth, this.sliceHeight = b.sliceHeight, this.cols = b.cols, this.rows = b.rows, this.panSpeed = b.panSpeed, this.panDirectionSign = b.inversePanDirection_bl ? -1 : 1, this.tweenDone_to, this.removeSmallSDOId_to, this.setAlphaWithDelayId_to, this.hideToolTipWindowId_to, this.addHideToolTipWindowTestWithDelayId_to, this.showToolTipWindoId_to, this.showMarkerToolTipId_to, this.setupMarkersAndToolTipWindowsId_to, this.secondTapId_to, this.enableMarkersId_to, this.showMarkersFirstTimeId_to, this.showMarkersFirstTimeDone_bl = !1, this.allowToDragHoriz_bl = !1, this.allowToDragVert_bl = !1, this.isTweening_bl = !1, this.isDragging_bl = !1, this.isScrollBarHandlerPressed_bl = !1, this.isResizingFirstTime_bl = !0, this.isControllerActive_bl = !1, this.useEntireScreenFor3dObject_bl = b.useEntireScreenFor3dObject_bl, this.isMobile_bl = b.isMobile_bl, this.showNavigator_bl = b.showNavigator_bl, this.showMarkers_bl = b.showMarkers_bl, this.isNavigatorShowed_bl = !1, this.addImageFirstTimeOnActivate_bl = !0, this.showMarkersInfo_bl = b.showMarkersInfo_bl, this.updateScrollBarWithDelay_bl = !0, this.areLeftAndRightButtonsDisabled_bl = !1, this.areUpAndDownButtonsDisabled_bl = !1, this.isMobile_bl = b.isMobile_bl, this.addDoubleClickSupport_bl = b.addDoubleClickSupport_bl, this.showLargeImageVersionOnZoom_bl = b.showLargeImageVersionOnZoom_bl, this.hasPointerEvent_bl = FWDUtils.hasPointerEvent, d.init = function() {
            d.controllerPosition_str != FWDController.POSITION_TOP || d.useEntireScreenFor3dObject_bl || d.setY(d.controllerHeight), d.setupMainContiners(), d.showMarkersInfo_bl || (d.dumy_sdo.screen.style.cursor = "url(" + d.handMovePath_str + "), default"), d.originalImage_img = b.originalImage_img, d.imageWidth = b.imageWidth, d.imageHeight = b.imageHeight, d.addImage(), d.addPannSupport(), d.addPinchSupport(), d.addMouseWheelSupport(), d.addDoubleClickSupport_bl && d.addDoubleClickSupport(), d.setupMarkersAndToolTipWindowsId_to = setTimeout(d.setupMarkersAndToolTipWindows, 2e3), d.showMarkersInfo_bl && d.setupMarkersInfo(), d.resizeAndPosition(!0), d.showMarkersFirstTime()
        }, this.setupMarkersAndToolTipWindows = function() {
            d.showMarkers_bl && (d.setupMarkers(), (!d.isMobile_bl || d.hasPointerEvent_bl) && d.setupMarkersToolTip(), d.setupMarkersToolTipWindows(), d.positionMarkers(!1)), d.showNavigator_bl && (d.hideOrShowNavigator(), d.updateNavigator(!1)), d.stageHeight < d.finalHeight && (d.dispatchEvent(a.ENABLE_UP_AND_DOWN_BUTTONS), d.areUpAndDownButtonsDisabled_bl = !0), d.stageWidth < d.finalWidth && (d.dispatchEvent(a.ENABLE_LEFT_AND_RIGHT_BUTTONS), d.areLeftAndRightButtonsDisabled_bl = !0)
        }, d.setupHider = function(a) {
            d.hider = a
        }, d.addImage = function() {
            FWDUtils.isChrome && !d.isMobile_bl ? (d.smallImage_sdo = new FWDTransformDisplayObject("div"), d.originalImage_img.style.position = "relative", d.originalImage_img.style.display = "block", d.originalImage_img.style.left = "0px", d.originalImage_img.style.top = "0px", d.originalImage_img.style.margin = "0px", d.originalImage_img.style.padding = "0px", d.originalImage_img.style.maxWidth = "none", d.originalImage_img.style.maxHeight = "none", d.originalImage_img.style.border = "none", d.originalImage_img.style.lineHeight = "1", d.originalImage_img.backgroundColor = "transparent", d.originalImage_img.backfaceVisibility = "hidden", d.originalImage_img.webkitBackfaceVisibility = "hidden", d.originalImage_img.MozBackfaceVisibility = "hidden", d.smallImage_sdo.screen.appendChild(d.originalImage_img)) : (d.smallImage_sdo = new FWDTransformDisplayObject("img"), d.smallImage_sdo.setScreen(d.originalImage_img)), d.smallImage_sdo.setTransformOrigin(0, 0), d.addImageFirstTimeOnActivate_bl = !1, d.addChild(d.smallImage_sdo), d.addChild(d.dumy_sdo)
        }, d.setupMainContiners = function() {
            d.setBkColor(d.backgroundColor_str), d.smallImage_sdo = new FWDTransformDisplayObject("img"), d.dumy_sdo = new FWDSimpleDisplayObject("div"), FWDUtils.isIE && (d.dumy_sdo.setBkColor("#00FF00"), d.dumy_sdo.setAlpha(.01)), d.controllerPosition_str != FWDController.POSITION_TOP || d.useEntireScreenFor3dObject_bl || d.dumy_sdo.setY(-d.controllerHeight)
        }, d.resizeAndPosition = function(a, b) {
            if (d.stageWidth != c.stageWidth || d.stageHeight != c.stageHeight - d.controllerHeight || b) {
                d.stageWidth = c.stageWidth, d.stageHeight = d.useEntireScreenFor3dObject_bl ? c.stageHeight : c.stageHeight - d.controllerHeight, d.setWidth(d.stageWidth), d.setHeight(d.stageHeight);
                var g, e = d.stageWidth / d.imageWidth,
                    f = d.stageHeight / d.imageHeight;
                g = f > e ? e : f, g >= d.zoomFactor && (g = d.zoomFactor), g >= d.zoomFactor ? d.currentScale = d.prevScale = d.smallestPossibleScale = d.zoomFactor : (d.smallestPossibleScale = g, void 0 === d.currentScale && (d.currentScale = d.prevScale = g)), d.isResizingFirstTime_bl && (isNaN(d.startZoomFactor) || d.startZoomFactor > d.currentScale && (d.currentScale = d.prevScale = d.startZoomFactor), d.isResizingFirstTime_bl = !1), d.finalWidth = Math.round(d.currentScale * d.imageWidth), d.finalHeight = Math.round(d.currentScale * d.imageHeight), f >= e && g != d.zoomFactor ? d.finalWidth < d.stageWidth && (d.currentScale = d.stageWidth / d.imageWidth, d.smallestPossibleScale = d.currentScale) : e >= f && g != d.zoomFactor && d.finalHeight < d.stageHeight && (d.currentScale = d.stageHeight / d.imageHeight, d.smallestPossibleScale = d.currentScale), d.finalWidth = Math.round(d.currentScale * d.imageWidth), d.finalHeight = Math.round(d.currentScale * d.imageHeight), d.dumy_sdo.setWidth(d.stageWidth), d.useEntireScreenFor3dObject_bl ? d.dumy_sdo.setHeight(d.stageHeight) : d.dumy_sdo.setHeight(d.stageHeight + d.controllerHeight), d.checkXAndYBouds(), a && d.centerImage(), d.resizeAndPositionImage(), d.showNavigator_bl && (d.hideOrShowNavigator(), d.updateNavigator(!1)), d.positionMarkers(!1), setTimeout(function() {
                    null != d && d.dispatchScrollBarUpdate(!1)
                }, 50), d.disableOrEnableMoveButtons(), d.dispatchScrollBarUpdate(!1)
            }
        }, d.resizeAndPositionImage = function(b) {
            d.isTweening_bl = !0, TweenMax.killTweensOf(d.smallImage_sdo), clearTimeout(d.tweenDone_to), b ? (d.smallImage_sdo.hasTransform2d_bl ? TweenMax.to(d.smallImage_sdo, .3, {
                x: d.finalX,
                y: d.finalY,
                scale: d.currentScale
            }) : TweenMax.to(d.smallImage_sdo, .3, {
                w: d.finalWidth,
                h: d.finalHeight,
                x: d.finalX,
                y: d.finalY
            }), d.tweenDone_to = setTimeout(d.tweenDoneHandler, 300)) : (d.smallImage_sdo.hasTransform2d_bl ? d.smallImage_sdo.hasTransform3d_bl ? d.smallImage_sdo.setPositionAndScale(d.finalX, d.finalY, d.currentScale) : (d.smallImage_sdo.setScale(d.currentScale), d.smallImage_sdo.setX(d.finalX), d.smallImage_sdo.setY(d.finalY)) : (d.smallImage_sdo.setX(d.finalX), d.smallImage_sdo.setY(d.finalY), d.smallImage_sdo.setWidth(d.finalWidth), d.smallImage_sdo.setHeight(d.finalHeight)), d.isTweening_bl = !1, d.dispatchEvent(a.IMAGE_ZOOM_COMPLETE))
        }, d.tweenDoneHandler = function() {
            d.isTweening_bl = !1, d.dispatchEvent(a.IMAGE_ZOOM_COMPLETE)
        }, d.checkXAndYBouds = function() {
            d.finalWidth <= d.stageWidth ? d.finalX = Math.round((d.stageWidth - d.finalWidth) / 2) : d.finalWidth > d.stageWidth + 1 ? (d.allowToDragHoriz_bl = !0, d.finalX > 0 ? d.finalX = 0 : d.finalX <= d.stageWidth - d.finalWidth + 1 && (d.finalX = d.stageWidth - d.finalWidth + 1)) : d.allowToDragHoriz_bl = !1, d.finalHeight <= d.stageHeight ? d.finalY = Math.round((d.stageHeight - d.finalHeight) / 2) : d.finalHeight > d.stageHeight + 1 ? (d.allowToDragVert_bl = !0, d.finalY > 0 ? d.finalY = 0 : d.finalY <= d.stageHeight - d.finalHeight && (d.finalY = d.stageHeight - d.finalHeight)) : d.allowToDragVert_bl = !1
        }, d.zoomImage = function(a) {
            a && (d.finalWidth = Math.round(d.currentScale * d.imageWidth), d.finalHeight = Math.round(d.currentScale * d.imageHeight), d.finalX -= Math.round((d.mouseX - d.finalX) * (d.currentScale - d.prevScale) / d.prevScale), d.finalY -= Math.round((d.mouseY - d.finalY) * (d.currentScale - d.prevScale) / d.prevScale)), d.isControllerActive_bl || d.dispatchScrollBarUpdate(!0), d.checkXAndYBouds(), d.showNavigator_bl && (d.hideOrShowNavigator(), d.updateNavigator(!0)), d.positionMarkers(!0), d.disableOrEnableMoveButtons(), d.resizeAndPositionImage(!0), d.prevScale = d.currentScale
            $('#currentFactor').val(d.currentScale);
        }, d.addPinchSupport = function() {
            d.screen.addEventListener && (d.dumy_sdo.screen.addEventListener("gesturestart", this.gestureStartHandler), d.dumy_sdo.screen.addEventListener("gesturechange", this.gestureChangeHandler))
        }, d.gestureStartHandler = function() {
            d.startScaleForMobileZoom = 1
        }, d.gestureChangeHandler = function(a) {
            if (a.preventDefault(), !d.isControllerActive_bl) {
                var b;
                b = a.scale > 1 ? a.scale - d.startScaleForMobileZoom : -(d.startScaleForMobileZoom - a.scale), d.startScaleForMobileZoom = 1, d.mouseX = Math.round(d.stageWidth / 2), d.mouseY = Math.round(d.stageHeight / 2), d.currentScale += b, d.startScaleForMobileZoom = a.scale, parseFloat(d.currentScale.toFixed(5)) <= parseFloat(d.smallestPossibleScale.toFixed(5)) ? d.currentScale = d.smallestPossibleScale : d.currentScale > d.zoomFactor && (d.currentScale = d.zoomFactor), d.zoomImage(!0)
            }
        }, d.addPannSupport = function() {
            d.isMobile_bl ? d.hasPointerEvent_bl ? d.dumy_sdo.screen.addEventListener("MSPointerDown", d.panStartHandler) : d.dumy_sdo.screen.addEventListener("touchstart", d.panStartHandler) : d.screen.addEventListener ? d.dumy_sdo.screen.addEventListener("mousedown", d.panStartHandler, !0) : d.screen.attachEvent && d.dumy_sdo.screen.attachEvent("onmousedown", d.panStartHandler)
        }, d.panStartHandler = function(b) {
            if (!(d.isTweening_bl || d.isControllerActive_bl || d.isTweening_bl || (b.preventDefault && b.preventDefault(), d.finalWidth < d.stageWidth && d.finalHeight < d.stageHeight))) {
                d.isMobile_bl && b.pointerType != b.MSPOINTER_TYPE_MOUSE || b.button <= 1 && c.disableAll();
                var e = FWDUtils.getViewportMouseCoordinates(b);
                d.isDragging_bl = !0, d.xPositionOnPress = d.smallImage_sdo.getX(), d.yPositionOnPress = d.smallImage_sdo.getY(), d.lastPresedX = e.screenX, d.lastPresedY = e.screenY, d.hideToolTipWindow(), d.dispatchEvent(a.PAN_START), d.isMobile_bl ? d.hasPointerEvent_bl ? (window.addEventListener("MSPointerMove", d.panMoveHandler), window.addEventListener("MSPointerUp", d.panEndHandler)) : (window.addEventListener("touchmove", d.panMoveHandler), window.addEventListener("touchend", d.panEndHandler)) : window.addEventListener ? (window.addEventListener("mousemove", d.panMoveHandler), window.addEventListener("mouseup", d.panEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", d.panMoveHandler), document.attachEvent("onmouseup", d.panEndHandler))
            }
        }, d.panMoveHandler = function(a) {
            if (a.preventDefault && a.preventDefault(), !(a.touches && 1 != a.touches.length || d.isControllerActive_bl || d.isTweening_bl)) {
                var b = FWDUtils.getViewportMouseCoordinates(a);
                d.finalWidth > d.stageWidth + 1 && (d.finalX = Math.round(d.xPositionOnPress + b.screenX - d.lastPresedX), d.finalX > 0 ? d.finalX = 0 : d.finalX <= d.stageWidth - d.finalWidth + 1 && (d.finalX = d.stageWidth - d.finalWidth + 1), d.smallImage_sdo.setX(d.finalX)), d.finalHeight > d.stageHeight + 1 && (d.finalY = Math.round(d.yPositionOnPress + b.screenY - d.lastPresedY), d.finalY > 0 ? d.finalY = 0 : d.finalY <= d.stageHeight - d.finalHeight && (d.finalY = d.stageHeight - d.finalHeight), d.smallImage_sdo.setY(d.finalY)), d.showNavigator_bl && (d.hideOrShowNavigator(), d.updateNavigator(!1)), d.positionMarkers(!1)
            }
        }, d.panEndHandler = function(a) {
            a.preventDefault && a.preventDefault(), d.isDragging_bl = !1, d.isMobile_bl && a.pointerType != a.MSPOINTER_TYPE_MOUSE || c.enableAll(), d.isMobile_bl ? d.hasPointerEvent_bl ? (window.removeEventListener("MSPointerMove", d.panMoveHandler), window.removeEventListener("MSPointerUp", d.panEndHandler)) : (window.removeEventListener("touchmove", d.panMoveHandler), window.removeEventListener("touchend", d.panEndHandler)) : window.removeEventListener ? (window.removeEventListener("mousemove", d.panMoveHandler), window.removeEventListener("mouseup", d.panEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", d.panMoveHandler), document.detachEvent("onmouseup", d.panEndHandler))
        }, d.addMouseWheelSupport = function() {
            window.addEventListener ? (d.dumy_sdo.screen.addEventListener("mousewheel", d.mouseWheelHandler), d.dumy_sdo.screen.addEventListener("DOMMouseScroll", d.mouseWheelHandler)) : document.attachEvent && d.dumy_sdo.screen.attachEvent("onmousewheel", d.mouseWheelHandler)
        }, d.mouseWheelHandler = function(a) {
            if (a.preventDefault && a.preventDefault(), !d.isDragging_bl && !d.isControllerActive_bl) {
                var b = FWDUtils.getViewportMouseCoordinates(a);
                d.hider && d.hider.reset(), d.mouseX = b.screenX - d.getGlobalX(), d.mouseY = b.screenY - d.getGlobalY();
                var c = a.detail || a.wheelDelta;
                if (a.wheelDelta && (c *= -1), c > 0) {
                    if (d.currentScale == d.smallestPossibleScale) return;
                    d.currentScale -= d.zoomSpeed, parseFloat(d.currentScale.toFixed(5)) <= parseFloat(d.smallestPossibleScale.toFixed(5)) && (d.currentScale = d.smallestPossibleScale)
                } else if (0 > c) {
                    if (d.currentScale == d.zoomFactor) return;
                    d.currentScale += d.zoomSpeed, d.currentScale > d.zoomFactor && (d.currentScale = d.zoomFactor)
                }
                return d.zoomImage(!0), a.preventDefault ? (a.preventDefault(), void 0) : !1
            }
        }, this.addDoubleClickSupport = function() {
            d.isMobile_bl ? d.dumy_sdo.screen.addEventListener("touchstart", d.onFirstDown) : d.dumy_sdo.screen.addEventListener("mousedown", d.onFirstDown)
        }, this.onFirstDown = function(a) {
            var b = FWDUtils.getViewportMouseCoordinates(a);
            d.firstTapX = b.screenX, d.firstTapY = b.screenY, d.isMobile_bl ? (clearTimeout(d.secondTapId_to), d.secondTapId_to = setTimeout(d.doubleTapExpired, 200), d.dumy_sdo.screen.addEventListener("touchstart", d.onSecondDown), d.dumy_sdo.screen.removeEventListener("touchstart", d.onFirstDown)) : (clearTimeout(d.secondTapId_to), d.secondTapId_to = setTimeout(d.doubleTapExpired, 200), d.dumy_sdo.screen.addEventListener("mousedown", d.onSecondDown), d.dumy_sdo.screen.removeEventListener("mousedown", d.onFirstDown))
        }, this.doubleTapExpired = function() {
            clearTimeout(d.secondTapId_to), d.isMobile_bl ? (d.dumy_sdo.screen.removeEventListener("touchstart", d.onSecondDown), d.dumy_sdo.screen.addEventListener("touchstart", d.onFirstDown)) : (d.dumy_sdo.screen.removeEventListener("mousedown", d.onSecondDown), d.dumy_sdo.screen.addEventListener("mousedown", d.onFirstDown))
        }, this.onSecondDown = function(a) {
            var c, e, b = FWDUtils.getViewportMouseCoordinates(a);
            a.touches && 1 != a.touches.length || d.currentScale == d.zoomFactor || d.doubleClickZoomFactor < d.currentScale || (c = Math.abs(b.screenX - d.firstTapX), e = Math.abs(b.screenY - d.firstTapY), d.isMobile_bl && (c > 10 || e > 10) || (d.isMobile_bl || !(c > 2 || e > 2)) && (d.isMobile_bl && d.smallImage_sdo.screen.removeEventListener("touchstart", d.onSecondDown), d.mouseX = b.screenX - d.getGlobalX(), d.mouseY = b.screenY - d.getGlobalY(), d.currentScale = d.zoomFactor, d.zoomImage(!0), d.mouseX = d.stageWidth / 2, d.mouseY = d.stageHeight / 2))
        }, d.setupMarkers = function() {
            var a, b;
            d.totalMarkers = d.markersList_ar.length;
            for (var e = 0; e < d.totalMarkers; e++) b = d.markersList_ar[e], FWDMarker.setPrototype(), a = new FWDMarker(b.markerId, b.normalStatePath_str, b.selectedStatePath_str, b.type, b.regPoint, b.toolTipLabel, e, b.markerX, b.markerY, b.markerWidth, b.markerHeight, b.showAfterScale, b.hasContent_bl), a.addListener(FWDMarker.MOUSE_OVER, d.markerOnMouseOverHandler), a.addListener(FWDMarker.MOUSE_OUT, d.markerOnMouseOutHandler), a.addListener(FWDMarker.MOUSE_DOWN, d.markerOnStartHandler), "tooltip" == b.type ? a.innerHTML_str = b.innerHTML : "infowindow" == b.type ? a.innerHTML_str = b.innerHTML : "link" == b.type && (a.link_str = b.link, a.target_str = b.target), d.markers_ar.push(a), d.addChild(a)
        }, d.markerOnMouseOverHandler = function(a) {
            var b = a.target;
            if (b.hasToolTip_bl && d.showMarkerToolTip(b, b.toolTipLabel_str), "tooltip" == b.type_str) {
                if (!b.hasHTMLContent_bl) return;
                d.curMarker_do && d.curMarker_do != b && d.curMarker_do.setNormalState(), d.lastMarkerId_str = b.markerId, d.curMarker_do = b, clearTimeout(d.hideToolTipWindowId_to), d.showToolTipWindow(b)
            }
        }, d.markerOnMouseOutHandler = function(a) {
            var b = a.target;
            if (b.hasToolTip_bl && d.markersToolTip_do && (d.contains(d.markersToolTip_do) && d.removeChild(d.markersToolTip_do), d.markersToolTip_do.hide()), "tooltip" == b.type_str) {
                if (!b.hasHTMLContent_bl) return b.setNormalState(), void 0;
                d.toolTipWindowAddEventsToSetGlobalXAndGlobalY(), clearTimeout(d.hideToolTipWindowId_to), d.hideToolTipWindowId_to = setTimeout(d.hideToolTipWindowWithDelay, 300)
            }
        }, d.markerOnStartHandler = function(b) {
            var c = b.target;
            if ("infowindow" == c.type_str) d.dispatchEvent(a.SHOW_INFO, {
                text: c.innerHTML_str
            });
            else if ("tooltip" == c.type_str && d.isMobile_bl) {
                if (!c.hasHTMLContent_bl) return;
                d.lastMarkerId_str != c.markerId && d.hideToolTipWindow(), d.lastMarkerId_str = c.markerId, d.curMarker_do = c, d.toolTipWindowAddEventsToSetGlobalXAndGlobalY(), d.showToolTipWindow(c)
            }
        }, this.showMarkersFirstTime = function() {
            d.showMarkersFirstTimeId_to = setTimeout(function() {
                d.showMarkersFirstTimeDone_bl = !0, d.positionMarkers()
            }, 2100)
        }, d.positionMarkers = function(a) {
            for (var b, c = 0; c < d.totalMarkers; c++) b = d.markers_ar[c], b.finalX = d.finalX + b.offsetX + parseInt(b.originalX * d.currentScale), b.finalY = d.finalY + b.offsetY + parseInt(b.originalY * d.currentScale), b.showAfterScale <= d.currentScale ? d.showMarkersFirstTimeDone_bl && b.show() : b.hide(), b.isShowed_bl && (a ? (TweenMax.killTweensOf(b), TweenMax.to(b, .3, {
                x: b.finalX,
                y: b.finalY
            })) : (TweenMax.killTweensOf(b), b.setX(b.finalX), b.setY(b.finalY)))
        }, this.hideMarkers = function() {
            for (var a, b = 0; b < d.totalMarkers; b++) a = d.markers_ar[b], a.isHiddenFinal_bl = !0, a.hide()
        }, this.showMarkers = function() {
            for (var a, b = 0; b < d.totalMarkers; b++) a = d.markers_ar[b], a.isHiddenFinal_bl = !1, a.showAfterScale <= d.currentScale && a.show()
        }, d.setupMarkersToolTip = function() {
            FWDMarkerToolTip.setPrototype(), d.markersToolTip_do = new FWDMarkerToolTip(d.toolTipLeft_img, d.toolTipPointer_img, d.buttonToolTipLeft_str, d.buttonToolTipMiddle_str, d.buttonToolTipRight_str, d.buttonToolTipFontColor_str, d.buttonToolTipTopPointer_str, d.buttonToolTipBottomPointer_str)
        }, d.setupMarkersToolTipWindows = function() {
            for (var a, b = 0; b < d.totalToolTipsWindows; b++) FWDMarkerWindowToolTip.setPrototype(), a = new FWDMarkerWindowToolTip(c.main_do, d.toolTipPointer_img, d.toolTipDataWindows_ar[b].innerHTML, d.buttonToolTipTopPointer_str, d.buttonToolTipBottomPointer_str, d.toolTipDataWindows_ar[b].maxWidth), d.toolTipWindows_ar.push(a), c.main_do.addChild(a)
        }, d.showMarkerToolTip = function(a, b) {
            var c, e;
            d.getX();
            var h, g = 0;
            clearTimeout(d.showMarkerToolTipId_to), d.addChild(d.markersToolTip_do), d.markersToolTip_do.setLabel(b), d.markersToolTip_do.show(), d.showMarkerToolTipId_to = setTimeout(function() {
                c = parseInt(a.finalX + (a.width - d.markersToolTip_do.totalWidth) / 2), e = a.finalY - d.markersToolTip_do.totalHeight - d.markerToolTipOffsetY, 0 > e || d.controllerPosition_str == FWDController.POSITION_TOP && e < d.controllerHeight + d.controllerOffsetY ? (e = a.finalY + a.height + d.markersToolTip_do.pointerHeight + d.markerToolTipOffsetY, d.markersToolTip_do.pointerUp_sdo.setVisible(!0), d.markersToolTip_do.pointerDown_sdo.setVisible(!1), h = FWDMarkerToolTip.POINTER_UP) : (d.markersToolTip_do.pointerUp_sdo.setVisible(!1), d.markersToolTip_do.pointerDown_sdo.setVisible(!0), h = FWDMarkerToolTip.POINTER_DOWN), 0 > c ? (g = c, c = 0) : d.stageWidth - c - d.markersToolTip_do.totalWidth < 0 && (g = -(d.stageWidth - c - d.markersToolTip_do.totalWidth), c = c + d.stageWidth - c - d.markersToolTip_do.totalWidth), d.markersToolTip_do.setX(c), d.markersToolTip_do.setY(e), d.markersToolTip_do.positionPointer(g, h)
            }, 51)
        }, d.showToolTipWindow = function(a) {
            var c, e, b = a.id;
            d.getX();
            var h, g = 0;
            d.markersToolTipWindow_do != d.toolTipWindows_ar[a.id] && d.markersToolTipWindow_do && d.markersToolTipWindow_do.hide();
            for (var i = 0; i < a.id; i++) objData = d.markersList_ar[i], "tooltip" != objData.type && b--;
            d.markersToolTipWindow_do = d.toolTipWindows_ar[b], clearTimeout(d.showToolTipWindoId_to), d.showToolTipWindoId_to = setTimeout(function() {
                c = parseInt(a.finalX + (a.width - d.markersToolTipWindow_do.totalWidth) / 2), e = a.finalY - d.markersToolTipWindow_do.totalHeight - d.markerToolTipOffsetY, 0 > e ? (e = a.finalY + a.height + d.markersToolTipWindow_do.pointerHeight + d.markerToolTipOffsetY, d.markersToolTipWindow_do.pointerUp_sdo.setVisible(!0), d.markersToolTipWindow_do.pointerDown_sdo.setVisible(!1), h = FWDMarkerWindowToolTip.POINTER_UP) : (e = a.finalY - d.markersToolTipWindow_do.totalHeight - d.markerToolTipOffsetY, d.markersToolTipWindow_do.pointerUp_sdo.setVisible(!1), d.markersToolTipWindow_do.pointerDown_sdo.setVisible(!0), h = FWDMarkerWindowToolTip.POINTER_DOWN), 0 > c ? (g = c, c = 0) : d.stageWidth - c - d.markersToolTipWindow_do.totalWidth < 0 && (g = -(d.stageWidth - c - d.markersToolTipWindow_do.totalWidth), c = c + d.stageWidth - c - d.markersToolTipWindow_do.totalWidth), d.markersToolTipWindow_do.setX(c), d.markersToolTipWindow_do.setY(e), d.markersToolTipWindow_do.positionPointer(g, h), d.markersToolTipWindow_do.show()
            }, 51)
        }, d.toolTipWindowAddEventsToSetGlobalXAndGlobalY = function() {
            d.isMobile_bl ? d.addHideToolTipWindowTestWithDelayId_to = setTimeout(function() {
                d.hasPointerEvent_bl ? (window.addEventListener("MSPointerDown", d.hideToolTipWindowTest), window.addEventListener("MSPointerMove", d.hideToolTipWindowTest)) : window.addEventListener("touchstart", d.hideToolTipWindowTest)
            }, 50) : window.addEventListener ? window.addEventListener("mousemove", d.hideToolTipWindowTest) : document.attachEvent && (document.detachEvent("onmousemove", d.hideToolTipWindowTest), document.attachEvent("onmousemove", d.hideToolTipWindowTest))
        }, d.hideToolTipWindowTest = function(a) {
            var b = FWDUtils.getViewportMouseCoordinates(a);
            d.globalX = b.screenX, d.globalY = b.screenY, (a.touches || a.pointerType != a.MSPOINTER_TYPE_MOUSE) && d.hideToolTipWindowWithDelay()
        }, d.hideToolTipWindowWithDelay = function() {
            FWDUtils.hitTest(d.markersToolTipWindow_do.text_sdo.screen, d.globalX, d.globalY) || FWDUtils.hitTest(d.markersToolTipWindow_do.pointerDown_sdo.screen, d.globalX, d.globalY) || FWDUtils.hitTest(d.markersToolTipWindow_do.pointerUp_sdo.screen, d.globalX, d.globalY) || FWDUtils.hitTest(d.curMarker_do.screen, d.globalX, d.globalY) ? d.hideToolTipWindowId_to = setTimeout(d.hideToolTipWindowWithDelay, 300) : (d.hideToolTipWindow(), d.isMobile_bl ? (clearTimeout(d.addHideToolTipWindowTestWithDelayId_to), d.hasPointerEvent_bl ? (window.removeEventListener("MSPointerDown", d.hideToolTipWindowTest), window.removeEventListener("MSPointerMove", d.hideToolTipWindowTest)) : window.removeEventListener("touchstart", d.hideToolTipWindowTest)) : window.removeEventListener ? window.removeEventListener("mousemove", d.hideToolTipWindowTest) : document.detachEvent && document.detachEvent("onmousemove", d.hideToolTipWindowTest))
        }, d.hideToolTipWindow = function() {
            d.markersToolTipWindow_do && (d.curMarker_do && !d.isMobile_bl && d.curMarker_do.setNormalState(), clearTimeout(d.hideToolTipWindowId_to), d.markersToolTipWindow_do.hide(), d.markersToolTipWindow_do.toolTipWindowId = "none")
        }, d.setupMarkersInfo = function() {
            window.addEventListener ? (window.addEventListener("mousemove", d.showMarkersInfoPosition), window.addEventListener("mousewheel", d.showMarkersInfoPosition), window.addEventListener("DOMMouseScroll", d.showMarkersInfoPosition)) : document.attachEvent && (document.attachEvent("onmousemove", d.showMarkersInfoPosition), document.attachEvent("onmousewheel", d.showMarkersInfoPosition)), d.markersPositionInfo_sdo = new FWDSimpleDisplayObject("div"), d.markersPositionInfo_sdo.setDisplay("inline-block"), d.markersPositionInfo_sdo.getStyle().fontSmoothing = "antialiased", d.markersPositionInfo_sdo.getStyle().webkitFontSmoothing = "antialiased", d.markersPositionInfo_sdo.getStyle().textRendering = "optimizeLegibility", d.markersPositionInfo_sdo.getStyle().padding = "6px", d.markersPositionInfo_sdo.getStyle().fontFamily = "Arial", d.markersPositionInfo_sdo.getStyle().fontSize = "12px", d.markersPositionInfo_sdo.getStyle().color = "#000000", d.markersPositionInfo_sdo.setBkColor("#FFFFFF"), d.addChild(d.markersPositionInfo_sdo)
        }, d.showMarkersInfoPosition = function(a) {
            var b = FWDUtils.getViewportMouseCoordinates(a),
                c = d.getGlobalX(),
                e = d.getGlobalY(),
                f = b.screenX - c,
                g = b.screenY - e,
                h = Math.round((f - d.finalX) * (1 / d.currentScale)) + 1,
                i = Math.round((g - d.finalY) * (1 / d.currentScale)) + 1,
                j = f + 10,
                k = g + 10;
            d.markersPositionInfo_sdo.setInnerHTML("<font color='#FF000'>Left</font>: " + h + "<br><font color='#FF000'>Top</font>:" + i + "<br><font color='#FF000'>Zoom factor</font>:" + parseFloat(d.currentScale).toFixed(2));
            var l = d.markersPositionInfo_sdo.getWidth(),
                m = d.markersPositionInfo_sdo.getHeight();
            j + l > d.stageWidth && (j = j - l - 10), k + m > d.stageHeight && (k = k - m - 10), d.markersPositionInfo_sdo.setX(j), d.markersPositionInfo_sdo.setY(k)
        }, d.setDraggingMode = function(a) {
            d.draggingMode_str = a
        }, d.disableOrEnablePanOrTouch = function(a) {
            d.isControllerActive_bl = a
        }, d.panWithButtons = function(a) {
            "left" == a ? d.finalX -= d.panSpeed * d.panDirectionSign : "right" == a ? d.finalX += d.panSpeed * d.panDirectionSign : "down" == a ? d.finalY += d.panSpeed * d.panDirectionSign : "up" == a && (d.finalY -= d.panSpeed * d.panDirectionSign), d.checkXAndYBouds(), d.resizeAndPositionImage(), d.positionMarkers(!1), d.updateNavigator()
        }, d.zoomInOrOutWithScrollBar = function(a) {
            d.currentScale = a * (d.zoomFactor - d.smallestPossibleScale) + d.smallestPossibleScale, d.mouseX = d.stageWidth / 2, d.mouseY = d.stageHeight / 2, d.zoomImage(!0)
        }, d.dispatchScrollBarUpdate = function(b) {
            d.currentScale < d.zoomFactor ? d.dispatchEvent(a.SCROLL_BAR_UPDATE, {
                percent: (d.currentScale - d.smallestPossibleScale) / (d.zoomFactor - d.smallestPossibleScale),
                animate: b
            }) : d.dispatchEvent(a.SCROLL_BAR_UPDATE, {
                percent: 1,
                animate: b
            })
        }, d.zoomInOrOutWithButtons = function(a, b) {
            d.mouseX = d.stageWidth / 2, d.mouseY = d.stageHeight / 2, a > 0 ? (d.currentScale += b ? d.zoomSpeed : d.zoomSpeed / 15, d.currentScale > d.zoomFactor && (d.currentScale = d.zoomFactor)) : 0 > a && (d.currentScale -= b ? d.zoomSpeed : d.zoomSpeed / 15, parseFloat(d.currentScale.toFixed(5)) <= parseFloat(d.smallestPossibleScale.toFixed(5)) && (d.currentScale = d.smallestPossibleScale)), d.dispatchScrollBarUpdate(!0, !0), d.zoomImage(!0)
        }, d.centerImage = function() {
            d.mouseX = d.stageWidth / 2, d.mouseY = d.stageHeight / 2, d.finalX = Math.round((d.stageWidth - d.finalWidth) / 2), d.finalY = Math.round((d.stageHeight - d.finalHeight) / 2)
        }, d.getZoomLvl = function() {
            return d.zoomFactor;
        }, d.updateNavigator = function(b) {
            d.isNavigatorShowed_bl && d.dispatchEvent(a.UPDATE_NAVIGATOR, {
                percentX: Math.abs(d.finalX / (d.finalWidth - d.stageWidth)),
                percentY: Math.abs(d.finalY / (d.finalHeight - d.stageHeight)),
                percentWidth: d.stageWidth / d.finalWidth,
                percentHeight: d.stageHeight / d.finalHeight,
                animate: b
            })
        }, d.hideOrShowNavigator = function() {
            d.stageWidth < d.finalWidth || d.stageHeight < d.finalHeight ? (d.isNavigatorShowed_bl = !0, d.dispatchEvent(a.SHOW_NAVIGATOR)) : (d.isNavigatorShowed_bl = !1, d.dispatchEvent(a.HIDE_NAVIGATOR))
        }, d.updateOnNavigatorPan = function(a, b) {
            d.finalX = parseInt(a * (d.stageWidth - d.finalWidth)), d.finalY = parseInt(b * (d.stageHeight - d.finalHeight)), d.positionMarkers(!0), d.resizeAndPositionImage(!0)
        }, d.disableOrEnableMoveButtons = function() {
            d.stageHeight < d.finalHeight ? d.areUpAndDownButtonsDisabled_bl || (d.dispatchEvent(a.ENABLE_UP_AND_DOWN_BUTTONS), d.areUpAndDownButtonsDisabled_bl = !0) : d.areUpAndDownButtonsDisabled_bl && (d.dispatchEvent(a.DISABLE_UP_AND_DOWN_BUTTONS), d.areUpAndDownButtonsDisabled_bl = !1), d.stageWidth < d.finalWidth ? d.areLeftAndRightButtonsDisabled_bl || (d.dispatchEvent(a.ENABLE_LEFT_AND_RIGHT_BUTTONS), d.areLeftAndRightButtonsDisabled_bl = !0) : d.areLeftAndRightButtonsDisabled_bl && (d.dispatchEvent(a.DISABLE_LEFT_AND_RIGHT_BUTTONS), d.areLeftAndRightButtonsDisabled_bl = !1)
        }, d.cleanMainEvents = function() {
            d.isMobile_bl ? (d.dumy_sdo.screen.removeEventListener("touchstart", d.panStartHandler), d.dumy_sdo.screen.removeEventListener("MSPointerDown", d.panStartHandler), window.removeEventListener("touchmove", d.panMoveHandler), window.removeEventListener("touchend", d.panEndHandler), window.removeEventListener("MSPointerMove", d.panMoveHandler), window.removeEventListener("MSPointerUp", d.panEndHandler), window.removeEventListener("touchstart", d.hideToolTipWindowTest), window.removeEventListener("MSPointerDown", d.hideToolTipWindowTest), window.removeEventListener("MSPointerMove", d.hideToolTipWindowTest), d.dumy_sdo.screen.removeEventListener("gesturestart", d.gestureStartHandler), d.dumy_sdo.screen.removeEventListener("gesturechange", d.gestureChangeHandler), d.dumy_sdo.screen.removeEventListener("touchstart", d.onSecondDown), d.dumy_sdo.screen.removeEventListener("touchstart", d.onFirstDown)) : window.removeEventListener ? (d.dumy_sdo.screen.removeEventListener("mousedown", d.panStartHandler), window.removeEventListener("mousemove", d.panMoveHandler), window.removeEventListener("mouseup", d.panEndHandler), d.dumy_sdo.screen.removeEventListener("mousewheel", d.mouseWheelHandler), d.dumy_sdo.screen.removeEventListener("DOMMouseScroll", d.mouseWheelHandler), window.removeEventListener("mousemove", d.hideToolTipWindowTest), window.removeEventListener("mousemove", d.showMarkersInfoPosition), window.removeEventListener("mousewheel", d.showMarkersInfoPosition), window.removeEventListener("DOMMouseScroll", d.showMarkersInfoPosition), d.dumy_sdo.screen.removeEventListener("mousedown", d.onSecondDown), d.dumy_sdo.screen.removeEventListener("mousedown", d.onFirstDown)) : document.detachEvent && (document.detachEvent("onmousemove", d.panMoveHandler), document.detachEvent("onmouseup", d.panEndHandler), d.dumy_sdo.screen.detachEvent("onmousedown", d.panStartHandler), d.dumy_sdo.screen.detachEvent("onmousewheel", d.mouseWheelHandler), document.detachEvent("onmousemove", d.hideToolTipWindowTest), document.detachEvent("onmousemove", d.showMarkersInfoPosition), document.detachEvent("onmousewheel", d.showMarkersInfoPosition)), clearTimeout(d.tweenDone_to), clearTimeout(d.removeSmallSDOId_to), clearTimeout(d.setAlphaWithDelayId_to), clearTimeout(d.hideToolTipWindowId_to), clearTimeout(d.addHideToolTipWindowTestWithDelayId_to), clearTimeout(d.showToolTipWindoId_to), clearTimeout(d.showMarkerToolTipId_to), clearTimeout(d.setupMarkersAndToolTipWindowsId_to), clearTimeout(d.secondTapId_to), clearTimeout(d.enableMarkersId_to), clearTimeout(d.showMarkersFirstTimeId_to)
        }, d.destroy = function() {
            if (d.cleanMainEvents(), d.smallImage_sdo && (TweenMax.killTweensOf(d.smallImage_sdo), d.smallImage_sdo.destroy()), d.showMarkers_bl) {
                for (var f, g, h = 0; h < d.totalMarkers; h++) f = d.markers_ar[h], TweenMax.killTweensOf(f), f.destroy();
                d.markersToolTip_do && d.markersToolTip_do.destroy();
                for (var h = 0; h < d.totalToolTipsWindows; h++) g = d.toolTipWindows_ar[h], g && g.destroy()
            }
            d.dumy_sdo.screen.style.cursor = "default", d.dumy_sdo.destroy(), d.markersPositionInfo_sdo && (d.markersPositionInfo_sdo.setInnerHTML(""), d.markersPositionInfo_sdo.destroy()), b = null, c = null, d.toolTipDataWindows_ar = null, d.markersList_ar = null, d.markersPosition_ar = null, d.largeImagesPaths_ar = null, d.hider = null, d.curMarker_do = null, d.dumy_sdo = null, d.smallImage_sdo = null, d.markersPositionInfo_sdo = null, d.handMovePath_str = null, d.handGrabPath_str = null, d.backgroundColor_str = null, d.draggingMode_str = null, d.setInnerHTML(""), e.destroy(), d = null, e = null, a.prototype = null
        }, d.init()
    };
    a.setPrototype = function() {
        a.prototype = new FWDDisplayObject("div")
    }, a.LARGE_IMAGE_LOAD_ERROR = "largeImageLoadError", a.IMAGE_ZOOM_COMPLETE = "zoomComplete", a.SCROLL_BAR_UPDATE = "scrollBarUpdate", a.PAN_START = "panStart", a.PAN = "pan", a.UPDATE_NAVIGATOR = "updateNavigator", a.SHOW_NAVIGATOR = "showNavigator", a.HIDE_NAVIGATOR = "hideNavigator", a.SHOW_INFO = "showInfo", a.DISABLE_LEFT_AND_RIGHT_BUTTONS = "disableLeftAndRightButtons", a.ENABLE_LEFT_AND_RIGHT_BUTTONS = "enableLeftAndRightButtons", a.DISABLE_UP_AND_DOWN_BUTTONS = "disableUpAndDownButtons", a.ENABLE_UP_AND_DOWN_BUTTONS = "enableUpAndDownButtons", a.prototype = null, window.FWDImageManager = a
}(window),
function(a) {
    var b = function() {
        var a = this,
            c = b.prototype;
        this.init = function() {
            this.setWidth(500), this.setBkColor("#FF0000"), this.getStyle().color = "#000000", this.getStyle().padding = "10px"
        }, this.showText = function(a) {
            this.setInnerHTML(a)
        }, this.destroy = function() {
            this.init = null, this.showText = null, this.destroy = null, a.setInnerHTML(""), c.destroy(), a = null, b.prototype = null
        }, this.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDDisplayObject("div", "relative")
    }, b.prototype = null, a.FWDInfo = b
}(window),
function(a) {
    function b(b, c, d) {
        function e() {
            g && (g.apply(a, arguments), h || (delete c[f], g = null))
        }
        var f, g = d[0],
            h = b === k;
        return d[0] = e, f = b.apply(a, d), c[f] = {
            args: d,
            created: Date.now(),
            cb: g,
            id: f
        }, f
    }

    function c(b, c, d, e) {
        function g() {
            h.cb && (h.cb.apply(a, arguments), i || (delete d[e], h.cb = null))
        }
        var h = d[e];
        if (h) {
            var i = b === k;
            if (c(h.id), !i) {
                var j = h.args[1],
                    l = Date.now() - h.created;
                0 > l && (l = 0), j -= l, 0 > j && (j = 0), h.args[1] = j
            }
            h.args[0] = g, h.created = Date.now(), h.id = b.apply(a, h.args)
        }
    }
    var d = navigator.platform,
        e = !1;
    if (("iPad" == d || "iPhone" == d) && (e = !0), e) {
        var f = navigator.userAgent,
            g = !1;
        if (-1 != f.indexOf("6") && (g = !0), g) {
            var h = {},
                i = {},
                j = a.setTimeout,
                k = a.setInterval,
                l = a.clearTimeout,
                m = a.clearInterval;
            a.setTimeout = function() {
                return b(j, h, arguments)
            }, a.setInterval = function() {
                return b(k, i, arguments)
            }, a.clearTimeout = function(a) {
                var b = h[a];
                b && (delete h[a], l(b.id))
            }, a.clearInterval = function(a) {
                var b = i[a];
                b && (delete i[a], m(b.id))
            }, a.addEventListener("scroll", function() {
                var a;
                for (a in h) c(j, l, h, a);
                for (a in i) c(k, m, i, a)
            })
        }
    }
}(window),
function(a) {
    var b = function(c, d, e, f, g, h) {
        var i = this,
            j = b.prototype;
        this.mainLightBox_do = null, this.lightBoxBackground_sdo = null, this.lightBoxGridHolder_do = null, this.closeButton_do = null, this.mainBackgroundColor_str = d, this.holderBackgroundColor_str = e, this.lightBoxBackgroundOpacity = f, this.lightBoxWidth = g, this.lightBoxHeight = h, this.setupButtonWithDelayId_to, this.isMobile_bl = FWDUtils.isMobile, this.hasPointerEvent_bl = FWDUtils.hasPointerEvent, this.closeButtonIsTweening_bl = !0, this.init = function() {
            i.setupMainContainers()
        }, this.setupMainContainers = function() {
            var a = FWDUtils.getViewportSize(),
                b = FWDUtils.getScrollOffsets();
            i.isMobile_bl && i.hasPointerEvent_bl && (i.getStyle().msTouchAction = "none"), i.setWidth(a.w), i.setHeight(a.h), i.setX(b.x), i.setY(b.y), i.lightBoxBackground_sdo = new FWDSimpleDisplayObject("div"), i.lightBoxBackground_sdo.setResizableSizeAfterParent(), i.lightBoxBackground_sdo.setBkColor(i.mainBackgroundColor_str), i.addChild(i.lightBoxBackground_sdo), i.mainLightBox_do = new FWDDisplayObject("div"), i.mainLightBox_do.setBkColor(i.holderBackgroundColor_str), c.stageContainer = i.mainLightBox_do.screen, i.addChild(i.mainLightBox_do), -1 == navigator.userAgent.toLowerCase().indexOf("msie 7") ? document.documentElement.appendChild(i.screen) : document.getElementsByTagName("body")[0].appendChild(i.screen), i.lightBoxBackground_sdo.setAlpha(0), TweenMax.to(i.lightBoxBackground_sdo, 1, {
                delay: .1,
                alpha: i.lightBoxBackgroundOpacity
            }), i.mainLightBox_do.setWidth(0), i.mainLightBox_do.setHeight(0), i.lightBoxWidth > a.w ? (i.finalLightBoxWidth = a.w, i.finalLightBoxHeight = parseInt(i.lightBoxHeight * (a.w / i.lightBoxWidth))) : (i.finalLightBoxWidth = i.lightBoxWidth, i.finalLightBoxHeight = i.lightBoxHeight), i.mainLightBox_do.setX(parseInt(a.w / 2)), i.mainLightBox_do.setY(parseInt(a.h / 2)), TweenMax.to(i.mainLightBox_do, .8, {
                w: i.finalLightBoxWidth,
                h: i.finalLightBoxHeight,
                x: parseInt((a.w - i.finalLightBoxWidth) / 2),
                y: parseInt((a.h - i.finalLightBoxHeight) / 2),
                delay: .8,
                ease: Expo.easeInOut
            })
        }, this.setupCloseButton = function(b, c) {
            var d = FWDUtils.getViewportSize();
            FWDSimpleButton.setPrototype(), i.closeButton_do = new FWDSimpleButton(b, c), i.closeButton_do.addListener(FWDSimpleButton.MOUSE_DOWN, i.closeButtonOnStartHandler), i.closeButton_do.getStyle().zIndex = 99999999, i.addChild(i.closeButton_do);
            var e = parseInt((d.w + i.finalLightBoxWidth) / 2 - i.closeButton_do.totalWidth / 2),
                f = parseInt((d.h - i.finalLightBoxHeight) / 2 - i.closeButton_do.totalHeight / 2);
            e + i.closeButton_do.totalWidth > d.w && (e = d.w - i.closeButton_do.totalWidth), 0 > f && (f = 0), i.closeButton_do.setX(d.w), i.closeButton_do.setY(f), TweenMax.to(i.closeButton_do, .9, {
                x: e,
                onComplete: i.showCloseButtonComplete,
                ease: Expo.easeInOut
            }), i.isMobile_bl ? i.hasPointerEvent_bl || (a.addEventListener("touchstart", i.mouseDummyHandler), a.addEventListener("touchmove", i.mouseDummyHandler)) : a.addEventListener ? (a.addEventListener("mousewheel", i.mouseDummyHandler), a.addEventListener("DOMMouseScroll", i.mouseDummyHandler)) : document.attachEvent && document.attachEvent("onmousewheel", i.mouseDummyHandler)
        }, this.showCloseButtonComplete = function() {
            i.closeButtonIsTweening_bl = !1
        }, this.mouseDummyHandler = function(a) {
            return a.preventDefault ? (a.preventDefault(), void 0) : !1
        }, this.closeButtonOnStartHandler = function() {
            var c = FWDUtils.getViewportSize();
            i.closeButton_do.isDisabled_bl = !0, TweenMax.to(i.closeButton_do, .9, {
                x: c.w,
                ease: Expo.easeInOut
            }), TweenMax.to(i.mainLightBox_do, .8, {
                w: 0,
                h: 0,
                x: parseInt(c.w / 2),
                y: parseInt(c.h / 2),
                delay: .4,
                ease: Expo.easeInOut
            }), TweenMax.to(i.lightBoxBackground_sdo, .8, {
                alpha: 0,
                delay: .8
            }), i.lighboxAnimDoneId_to = setTimeout(i.lighboxHideAnimationDone, 1600), i.dispatchEvent(b.CLOSE)
        }, this.lighboxHideAnimationDone = function() {
            i.dispatchEvent(b.HIDE_COMPLETE)
        }, i.destroy = function() {
            try {
                -1 == navigator.userAgent.toLowerCase().indexOf("msie 7") ? document.documentElement.removeChild(i.screen) : document.getElementsByTagName("body")[0].removeChild(i.screen)
            } catch (f) {}
            i.isMobile_bl ? i.hasPointerEvent_bl || (a.removeEventListener("touchstart", i.mouseDummyHandler), a.removeEventListener("touchmove", i.mouseDummyHandler)) : a.removeEventListener ? (a.removeEventListener("mousewheel", i.mouseDummyHandler), a.removeEventListener("DOMMouseScroll", i.mouseDummyHandler)) : document.detachEvent && document.detachEvent("onmousewheel", i.mouseDummyHandler), clearTimeout(i.lighboxAnimDoneId_to), i.lightBoxBackground_sdo && (TweenMax.killTweensOf(i.lightBoxBackground_sdo), i.lightBoxBackground_sdo.destroy()), i.lightBoxGridHolder_do && (TweenMax.killTweensOf(i.lightBoxGridHolder_do), i.lightBoxGridHolder_do.destroy()), i.closeButton_do && (TweenMax.killTweensOf(i.closeButton_do), i.closeButton_do.destroy()), i.mainLightBox_do = null, i.lightBoxBackground_sdo = null, i.lightBoxGridHolder_do = null, i.closeButton_do = null, i.mainBackgroundColor_str = null, i.holderBackgroundColor_str = null, c = null, d = null, e = null, i.setInnerHTML(""), j.destroy(), i = null, j = null, b.prototype = null
        }, this.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDDisplayObject("div")
    }, b.CLOSE = "ligtBoxClose", b.HIDE_COMPLETE = "hideComplete", b.prototype = null, a.FWDLightBox = b
}(window),
function(a) {
    var b = function(c, d, e, f, g, h, i, j, k, l, m, n, o) {
        var p = this,
            q = b.prototype;
        this.n_do, this.s_do, this.markerId = c, this.normalImagePath_str = d, this.selectedImagePath_str = e, this.type_str = f, this.toolTipLabel_str = h, this.innerHTML_str, this.link_str, this.target_str, this.regPoint_str = g, this.id = i, this.toolTipWindowId, this.width = l, this.height = m, this.originalX = j, this.originalY = k, this.finalX, this.finalY, this.offsetX, this.offsetY, this.toolTipWindowMaxWidth, this.showAfterScale = n, this.hasHTMLContent_bl = o, this.isDisabled_bl = !1, this.hasToolTip_bl = !0, this.isDisabled_bl = !1, this.isHiddenFinal_bl = !1, this.isShowed_bl = !0, this.isMobile_bl = FWDUtils.isMobile, this.hasGif_bl = !1, this.hasPointerEvent_bl = FWDUtils.hasPointerEvent, p.init = function() {
            p.setOverflow("visible"), "tooltip" != p.type_str && p.toolTipLabel_str || (p.hasToolTip_bl = !1), -1 != p.normalImagePath_str.indexOf(".gif") && (p.hasGif_bl = !0), p.setWidth(p.width), p.setHeight(p.height), "center" == p.regPoint_str ? (p.offsetX = -parseInt(p.width / 2), p.offsetY = -parseInt(p.height / 2)) : "centertop" == p.regPoint_str ? (p.offsetX = -parseInt(p.width / 2), p.offsetY = 0) : "centerbottom" == p.regPoint_str && (p.offsetX = -parseInt(p.width / 2), p.offsetY = -p.height), p.setupMainContainers(), p.hide()
        }, p.setupMainContainers = function() {
            p.n_do = new FWDTransformDisplayObject("img"), p.n_do.setWidth(p.width), p.n_do.setHeight(p.height), p.n_do.screen.src = p.normalImagePath_str, p.s_do = new FWDTransformDisplayObject("img"), p.s_do.setWidth(p.width), p.s_do.setHeight(p.height), p.s_do.screen.src = p.selectedImagePath_str, p.isHtml5_bl && ("center" == p.regPoint_str ? (p.n_do.setTransformOrigin(50, 50), p.s_do.setTransformOrigin(50, 50)) : "centertop" == p.regPoint_str ? (p.n_do.setTransformOrigin(50, 0), p.s_do.setTransformOrigin(50, 0)) : "centerbottom" == p.regPoint_str && (p.n_do.setTransformOrigin(50, 100), p.s_do.setTransformOrigin(50, 100))), p.hasGif_bl ? (p.addChild(p.s_do), p.addChild(p.n_do)) : (p.s_do.setAlpha(0), p.addChild(p.n_do), p.addChild(p.s_do)), p.setButtonMode(!0), p.isMobile_bl ? p.hasPointerEvent_bl ? (p.screen.addEventListener("MSPointerDown", p.onMouseDown), p.screen.addEventListener("MSPointerUp", p.onClick), p.screen.addEventListener("MSPointerOver", p.onMouseOver), p.screen.addEventListener("MSPointerOut", p.onMouseOut)) : p.screen.addEventListener("touchstart", p.onMouseDown) : p.screen.addEventListener ? (p.screen.addEventListener("mouseover", p.onMouseOver), p.screen.addEventListener("mouseout", p.onMouseOut), p.screen.addEventListener("mousedown", p.onMouseDown), p.screen.addEventListener("click", p.onClick)) : p.screen.attachEvent && (p.screen.attachEvent("onmouseover", p.onMouseOver), p.screen.attachEvent("onmouseout", p.onMouseOut), p.screen.attachEvent("onmousedown", p.onMouseDown), p.screen.attachEvent("onclick", p.onClick))
        }, p.onMouseOver = function(a) {
            p.isDisabled_bl || a.pointerType && a.pointerType != a.MSPOINTER_TYPE_MOUSE || (p.dispatchEvent(b.MOUSE_OVER, {
                e: a
            }), TweenMax.killTweensOf(p.s_do), TweenMax.killTweensOf(p.n_do), p.isHtml5_bl ? (p.n_do.setScale(1), p.s_do.setScale(1)) : (p.n_do.setWidth(p.width), p.n_do.setHeight(p.height), p.s_do.setWidth(p.width), p.s_do.setHeight(p.height)), p.hasGif_bl ? TweenMax.to(p.n_do, .5, {
                alpha: 0,
                delay: .1,
                ease: Expo.easeOut
            }) : TweenMax.to(p.s_do, .5, {
                alpha: 1,
                delay: .1,
                ease: Expo.easeOut
            }))
        }, p.onMouseOut = function(a) {
            p.isDisabled_bl || a.pointerType && a.pointerType != a.MSPOINTER_TYPE_MOUSE || (p.dispatchEvent(b.MOUSE_OUT, {
                e: a
            }), ("tooltip" != p.type_str || p.hasPointerEvent_bl) && p.setNormalState())
        }, p.onClick = function(c) {
            p.isDisabled_bl || ("link" == p.type_str && (a.open(p.link_str, p.target_str), p.dispatchEvent(b.MOUSE_OUT, {
                e: c
            })), p.dispatchEvent(b.CLICK, {
                e: c
            }))
        }, p.onMouseDown = function(c) {
            c.preventDefault && c.preventDefault(), p.isDisabled_bl || (p.isMobile_bl && !p.hasPointerEvent_bl && "link" == p.type_str && (a.open(p.link_str, p.target_str), p.dispatchEvent(b.MOUSE_OUT, {
                e: c
            })), p.dispatchEvent(b.MOUSE_DOWN, {
                e: c
            }))
        }, this.setNormalState = function() {
            TweenMax.killTweensOf(p.s_do), p.hasGif_bl ? TweenMax.to(p.n_do, .5, {
                alpha: 1,
                ease: Expo.easeOut
            }) : TweenMax.to(p.s_do, .5, {
                alpha: 0,
                ease: Expo.easeOut
            })
        }, p.hide = function() {
            p.isShowed_bl && (TweenMax.killTweensOf(p), TweenMax.killTweensOf(p.n_do), TweenMax.killTweensOf(p.s_do), p.setX(-5e3), p.isShowed_bl = !1)
        }, p.show = function() {
            p.isShowed_bl || p.isHiddenFinal_bl || (TweenMax.killTweensOf(p), TweenMax.killTweensOf(p.n_do), TweenMax.killTweensOf(p.s_do), p.setX(p.finalX), p.setY(p.finalY), p.isShowed_bl = !0, p.isHtml5_bl ? (p.n_do.setScale(0), p.s_do.setScale(0), TweenMax.to(p.n_do, .8, {
                scale: 1,
                delay: .1,
                ease: Elastic.easeOut
            }), TweenMax.to(p.s_do, .8, {
                scale: 1,
                delay: .1,
                ease: Elastic.easeOut
            })) : (p.n_do.setWidth(0), p.n_do.setHeight(0), p.s_do.setWidth(0), p.s_do.setHeight(0), TweenMax.to(p.n_do, .8, {
                w: p.width,
                h: p.height,
                delay: .1,
                ease: Elastic.easeOut
            }), TweenMax.to(p.s_do, .8, {
                w: p.width,
                h: p.height,
                delay: .1,
                ease: Elastic.easeOut
            })))
        }, p.destroy = function() {
            p.isMobile_bl ? p.screen.removeEventListener("touchstart", p.onMouseDown) : p.screen.addEventListener ? (p.screen.removeEventListener("mouseover", p.onMouseOver), p.screen.removeEventListener("mouseout", p.onMouseOut), p.screen.removeEventListener("mousedown", p.onMouseDown), p.screen.removeEventListener("click", p.onClick)) : p.screen.detachEvent && (p.screen.detachEvent("onmouseover", p.onMouseOver), p.screen.detachEvent("onmouseout", p.onMouseOut), p.screen.detachEvent("onmousedown", p.onMouseDown), p.screen.detachEvent("onclick", p.onClick)), TweenMax.killTweensOf(p.n_do), TweenMax.killTweensOf(p.s_do), p.n_do.src = null, p.s_do.src = null, p.n_do.destroy(), p.s_do.destroy(), p.n_do = null, p.s_do = null, p.markerId = null, p.normalImagePath_str = null, p.selectedImagePath_str = null, p.type_str = null, p.toolTipLabel_str = null, p.innerHTML_str = null, p.link_str = null, p.target_str = null, p.regPoint_str = null, c = null, d = null, e = null, f = null, g = null, h = null, p.setInnerHTML(""), q.destroy(), p = null, q = null, b.prototype = null
        }, p.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDDisplayObject("div")
    }, b.CLICK = "onClick", b.MOUSE_OVER = "onMouseOver", b.MOUSE_OUT = "onMouseOut", b.MOUSE_DOWN = "onMouseDown", b.prototype = null, a.FWDMarker = b
}(window),
function(a) {
    var b = function(a, c, d, e, f, g, h, i) {
        var j = this,
            k = b.prototype;
        j.pointerUp_img, j.pointerDown_img, j.left_sdo = null, j.middle_sdo = null, j.right_sdo = null, j.text_sdo = null, j.pointerUp_sdo = null, j.pointerDown_sdo = null, j.leftImagePath_str = d, j.middleImagePath_str = e, j.rightImagePath_str = f, j.fontColor_str = g, j.bottomPointer_str = i, j.topPointer_str = h, j.pointerPosition_str, j.toolTipLabel_str, j.marginWidth = a.width, j.totalHeight = a.height, j.pointerWidth = c.width, j.pointerHeight = c.height, j.totalWidth, j.isMobile_bl = FWDUtils.isMobile, j.isShowed_bl = !0, j.init = function() {
            j.setOverflow("visible"), j.setWidth(300), j.setupMainContainers(), j.hide()
        }, j.setupMainContainers = function() {
            var a;
            j.left_sdo = new FWDSimpleDisplayObject("img"), a = new Image, a.src = j.leftImagePath_str, j.left_sdo.setScreen(a), j.left_sdo.setWidth(j.marginWidth), j.left_sdo.setHeight(j.totalHeight), j.addChild(j.left_sdo), j.middle_sdo = new FWDSimpleDisplayObject("img"), a = new Image, a.src = j.middleImagePath_str, j.middle_sdo.setScreen(a), j.middle_sdo.setX(j.marginWidth), j.middle_sdo.setWidth(j.marginWidth), j.middle_sdo.setHeight(j.totalHeight), j.addChild(j.middle_sdo), j.right_sdo = new FWDSimpleDisplayObject("img"), a = new Image, a.src = j.rightImagePath_str, j.right_sdo.setScreen(a), j.right_sdo.setWidth(j.marginWidth), j.right_sdo.setHeight(j.totalHeight), j.addChild(j.right_sdo), j.text_sdo = new FWDSimpleDisplayObject("div"), j.text_sdo.setBackfaceVisibility(), j.text_sdo.setDisplay("inline-block"), j.text_sdo.getStyle().fontFamily = "Arial", j.text_sdo.getStyle().fontSize = "12px", j.text_sdo.setHeight(20), j.text_sdo.getStyle().color = j.fontColor_str, j.text_sdo.getStyle().fontSmoothing = "antialiased", j.text_sdo.getStyle().webkitFontSmoothing = "antialiased", j.text_sdo.getStyle().textRendering = "optimizeLegibility", j.text_sdo.setX(j.marginWidth), FWDUtils.isIEAndLessThen9 || FWDUtils.isSafari ? j.text_sdo.setY(parseInt((j.totalHeight - 8) / 2) - 2) : j.text_sdo.setY(parseInt((j.totalHeight - 8) / 2) - 1), j.addChild(j.text_sdo), j.pointerUp_img = new Image, j.pointerUp_img.src = j.topPointer_str, j.pointerUp_sdo = new FWDSimpleDisplayObject("img"), j.pointerUp_sdo.setScreen(j.pointerUp_img), j.pointerUp_sdo.setWidth(j.pointerWidth), j.pointerUp_sdo.setHeight(j.pointerHeight), j.pointerUp_sdo.setVisible(!1), j.addChild(j.pointerUp_sdo), j.pointerDown_img = new Image, j.pointerDown_img.src = j.bottomPointer_str, j.pointerDown_sdo = new FWDSimpleDisplayObject("img"), j.pointerDown_sdo.setScreen(j.pointerDown_img), j.pointerDown_sdo.setWidth(j.pointerWidth), j.pointerDown_sdo.setHeight(j.pointerHeight), j.pointerDown_sdo.setVisible(!1), j.addChild(j.pointerDown_sdo), j.totalHeight += j.pointerHeight
        }, j.setLabel = function(a) {
            null != j && j.middle_sdo && (j.text_sdo.setInnerHTML(a), setTimeout(function() {
                j.middle_sdo.setWidth(j.text_sdo.screen.offsetWidth), j.right_sdo.setX(j.text_sdo.screen.offsetWidth + j.marginWidth), j.totalWidth = 2 * j.marginWidth + j.text_sdo.screen.offsetWidth
            }, 50))
        }, j.positionPointer = function(a, c) {
            var d = 0,
                e = 0;
            a || (a = 0), d = parseInt((j.totalWidth - j.pointerWidth) / 2) + a, 0 > d && (d = 0), c == b.POINTER_DOWN ? (e = j.totalHeight - j.pointerHeight - 1, j.pointerDown_sdo.setX(d), j.pointerDown_sdo.setY(e)) : (e = -j.pointerHeight + 1, j.pointerUp_sdo.setX(d), j.pointerUp_sdo.setY(e))
        }, j.show = function() {
            j.isShowed_bl || (TweenMax.to(j, .4, {
                alpha: 1,
                delay: .1,
                ease: Quart.easeOut
            }), j.isShowed_bl = !0)
        }, j.hide = function() {
            j.isShowed_bl && (TweenMax.killTweensOf(j), j.setX(-5e3), j.setAlpha(0), j.isShowed_bl = !1)
        }, j.destroy = function() {
            TweenMax.killTweensOf(j), j.pointerUp_img = null, j.pointerDown_img = null, j.left_sdo.destroy(), j.middle_sdo.destroy(), j.right_sdo.destroy(), j.text_sdo.destroy(), j.pointerDown_sdo.destroy(), j.leftImagePath_str = null, j.middleImagePath_str = null, j.rightImagePath_str = null, j.fontColor_str = null, j.bottomPointer_str = null, j.topPointer_str = null, j.pointerPosition_str = null, j.toolTipLabel_str = null, j.left_sdo = null, j.middle_sdo = null, j.right_sdo = null, j.text_sdo = null, j.pointerUp_sdo = null, j.pointerDown_sdo = null, a = null, c = null, d = null, e = null, f = null, g = null, h = null, i = null, j.setInnerHTML(""), k.destroy(), j = null, k = null, b.prototype = null
        }, j.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDDisplayObject("div")
    }, b.POINTER_UP = "pointerUp", b.POINTER_DOWN = "pointerDown", b.CLICK = "onClick", b.MOUSE_DOWN = "onMouseDown", b.prototype = null, a.FWDMarkerToolTip = b
}(window),
function(a) {
    var b = function(a, c, d, e, f, g) {
        var h = this,
            i = b.prototype;
        this.pointerUp_img, this.pointerDown_img, this.text_sdo = null, this.pointerUp_sdo = null, this.pointerDown_sdo = null, this.bottomPointer_str = f, this.topPointer_str = e, this.pointerPosition_str, this.toolTipLabel_str, this.htmlContent_el = d, this.totalHeight = 0, this.pointerWidth = c.width, this.pointerHeight = c.height, this.totalWidth, this.maxWidth = g, this.hideId_to, this.isMobile_bl = FWDUtils.isMobile, this.isShowed_bl = !0, this.hasLabel_bl = !1, h.init = function() {
            h.setOverflow("visible"), h.setupMainContainers(), h.setLabel(), h.setX(-1e3), h.hideId_to = setTimeout(h.hide, 1e3)
        }, h.setupMainContainers = function() {
            h.text_sdo = new FWDSimpleDisplayObject("div"), h.text_sdo.setBackfaceVisibility(), h.text_sdo.getStyle().fontSmoothing = "antialiased", h.text_sdo.getStyle().webkitFontSmoothing = "antialiased", h.text_sdo.getStyle().textRendering = "optimizeLegibility", h.addChild(h.text_sdo), h.pointerUp_img = new Image, h.pointerUp_img.src = h.topPointer_str, h.pointerUp_sdo = new FWDSimpleDisplayObject("img"), h.pointerUp_sdo.setScreen(h.pointerUp_img), h.pointerUp_sdo.setWidth(h.pointerWidth), h.pointerUp_sdo.setHeight(h.pointerHeight), h.pointerUp_sdo.setVisible(!1), h.addChild(h.pointerUp_sdo), h.pointerDown_img = new Image, h.pointerDown_img.src = h.bottomPointer_str, h.pointerDown_sdo = new FWDSimpleDisplayObject("img"), h.pointerDown_sdo.setScreen(h.pointerDown_img), h.pointerDown_sdo.setWidth(h.pointerWidth), h.pointerDown_sdo.setHeight(h.pointerHeight), h.pointerDown_sdo.setVisible(!1), h.addChild(h.pointerDown_sdo)
        }, h.setLabel = function() {
            null != h && (h.maxWidth = g, h.text_sdo.setInnerHTML(h.htmlContent_el), setTimeout(function() {
                null != h && (h.totalWidth = h.text_sdo.getWidth(), h.totalHeight = h.text_sdo.getHeight() + h.pointerHeight, h.setHeight(h.totalHeight - h.pointerHeight), h.hasLabel_bl = !0)
            }, 71))
        }, h.positionPointer = function(a, c) {
            var d = 0,
                e = 0;
            a || (a = 0), d = parseInt((h.totalWidth - h.pointerWidth) / 2) + a, 0 > d && (d = 0), c == b.POINTER_DOWN ? (e = h.totalHeight - h.pointerHeight - 1, h.pointerDown_sdo.setX(d), h.pointerDown_sdo.setY(e)) : (e = -h.pointerHeight + 1, h.pointerUp_sdo.setX(d), h.pointerUp_sdo.setY(e))
        }, h.show = function() {
            !h.isShowed_bl && h.hasLabel_bl && (a.addChild(h), h.isMobile_bl ? h.setAlpha(1) : FWDUtils.isIEAndLessThen9 || (h.setAlpha(0), TweenMax.killTweensOf(h), TweenMax.to(h, .6, {
                alpha: 1,
                delay: .1,
                ease: Quart.easeOut
            })), h.isShowed_bl = !0)
        }, h.hide = function() {
            if (h.isShowed_bl && h.hasLabel_bl) {
                TweenMax.killTweensOf(h);
                try {
                    a.removeChild(h)
                } catch (b) {}
                h.isShowed_bl = !1
            }
        }, h.destroy = function() {
            clearTimeout(h.hideId_to), TweenMax.killTweensOf(h), h.text_sdo.destroy(), h.pointerUp_sdo.destroy(), h.pointerDown_sdo.destroy(), h.text_sdo = null, h.pointerUp_sdo = null, h.pointerDown_sdo = null, h.pointerUp_img = null, h.pointerDown_img = null, h.bottomPointer_str = null, h.topPointer_str = null, h.pointerPosition_str = null, h.toolTipLabel_str = null, a = null, c = null, e = null, f = null, h.setInnerHTML(""), i.destroy(), h = null, i = null, b.prototype = null
        }, h.init()
    };
    b.setPrototype = function() {
        b.prototype = null, b.prototype = new FWDDisplayObject("div")
    }, b.POINTER_UP = "pointerUp", b.POINTER_DOWN = "pointerDown", b.CLICK = "onClick", b.MOUSE_DOWN = "onMouseDown", b.prototype = null, a.FWDMarkerWindowToolTip = b
}(window),
function(a) {
    var b = function(c) {
        var d = this;
        d.init = function() {
            if (TweenLite.ticker.useRAF(!1), d.props_obj = c, d.isFullScreen_bl = !1, d.mustHaveHolderDiv_bl = !1, d.displayType = c.displayType.toLowerCase(), d.displayType || (d.displayType = b.FULL_SCREEN), d.displayType == b.RESPONSIVE && (d.mustHaveHolderDiv_bl = !0), d.body = document.getElementsByTagName("body")[0], !d.props_obj) return alert("FWDMegazoom constructor properties object is not defined!"), void 0;
            if (!d.props_obj) return alert("FWDMegazoom constructor properties object is not defined!"), void 0;
            if (!d.props_obj.parentId && d.mustHaveHolderDiv_bl) return alert("Property parentId is not defined in the FWDMegazoom constructor, self property represents the div id into which the megazoom is added as a child!"), void 0;
            if (d.mustHaveHolderDiv_bl && !FWDUtils.getChildById(d.props_obj.parentId)) return alert("FWDMegazoom holder div is not found, please make sure that the div exsists and the id is correct! " + d.props_obj.parentId), void 0;
            if (!d.props_obj.playListAndSkinId) return alert("The playListAndSkinId property which represents the megazoom playlist id is not defined in the constructor function!"), void 0;
            this.rootElement_el = FWDUtils.getChildById(d.props_obj.playListAndSkinId), d.stageContainer = d.displayType == b.FULL_SCREEN || d.displayType == b.LIGHTBOX ? FWDUtils.isIEAndLessThen9 ? d.body : document.documentElement : FWDUtils.getChildById(d.props_obj.parentId), this.customContextMenu = null, this.info_do = null, this.main_do = null, this.preloader_do = null, this.navigator_do = null, this.controller_do = null, this.imageManager_do = null, this.descriptionWindow_do = null, this.hider = null, this.lightBox_do = null, this.disable_sdo = null, this.backgroundColor_str = d.props_obj.backgroundColor || "transparent", this.lightBoxBackgroundColor_str = d.props_obj.lightBoxBackgroundColor || "transparent", this.viewportWidth = 0, this.viewportHeight = 0, this.stageWidth = 0, this.stageHeight = 0, this.pageXOffset = a.pageXOffset, this.pageYOffset = a.pageYOffset, this.lastScrollY, this.lastScrollX, this.lightBoxBackgroundOpacity = d.props_obj.lightBoxBackgroundOpacity || 1, this.lightBoxWidth = d.props_obj.lightBoxWidth || 500, this.lightBoxHeight = d.props_obj.lightBoxHeight || 400, this.finalLightBoxWidth, this.finalLightBoxHeight, this.resizeHandlerId_to, this.resizeHandler2Id_to, this.lighboxAnimDoneId_to, this.startHiderWithDelayId_to, this.initPluginId_to, this.activateWithDelayImagemanagerId_to, this.hidePreloaderId_to, this.centerImageNormalScreenId_to, this.orientationChangeId_to, this.orintationChangeComplete_bl = !0, this.isMobile_bl = FWDUtils.isMobile, this.hibernate_bl = !1, this.initPluginId_to = d.displayType == b.LIGHTBOX ? setTimeout(function() {
                d.setupLightBox()
            }, 50) : setTimeout(function() {
                d.setupMegazoom()
            }, 50);
            try {
                d.rootElement_el.parentNode.removeChild(d.rootElement_el)
            } catch (e) {}
        }, d.setupMegazoom = function() {
            d.setupMainDo(), d.startResizeHandler(), d.setupInfo(), d.setupData(), FWDUtils.hasPointerEvent && FWDUtils.isMobile && a.addEventListener("contextmenu", d.preventContextMenu)
        }, d.setupMainDo = function() {
            d.main_do = new FWDDisplayObject("div", "relative"), d.main_do.getStyle().msTouchAction = "none", d.main_do.setBackfaceVisibility(), d.main_do.setBkColor(d.backgroundColor_str), (!FWDUtils.isMobile || FWDUtils.isMobile && FWDUtils.hasPointerEvent) && d.main_do.setSelectable(!1), d.displayType == b.FULL_SCREEN ? (d.stageContainer.style.overflow = "hidden", d.main_do.getStyle().position = "absolute", document.documentElement.style.overflow = "hidden", d.stageContainer.appendChild(d.main_do.screen)) : d.displayType == b.LIGHTBOX ? (d.main_do.getStyle().zIndex = 99999991, d.main_do.getStyle().position = "absolute", d.stageContainer.appendChild(d.main_do.screen)) : d.stageContainer.appendChild(d.main_do.screen)
        }, d.preventContextMenu = function(a) {
            a.preventDefault()
        }, d.setupInfo = function() {
            FWDInfo.setPrototype(), d.info_do = new FWDInfo
        }, d.startResizeHandler = function() {
            a.addEventListener ? (a.addEventListener("resize", d.onResizeHandler), a.addEventListener("scroll", d.onResizeHandler), a.addEventListener("orientationchange", d.orientationChange)) : a.attachEvent && (a.attachEvent("onresize", d.onResizeHandler), a.attachEvent("onscroll", d.onResizeHandler)), d.onResizeHandler(!0), d.resizeHandlerId_to = setTimeout(function() {
                d.resizeHandler(!0)
            }, 500)
        }, d.stopResizeHandler = function() {
            a.removeEventListener ? (a.removeEventListener("resize", d.onResizeHandler), a.removeEventListener("scroll", d.onResizeHandler), a.removeEventListener("orientationchange", d.orientationChange)) : a.detachEvent && (a.detachEvent("onresize", d.onResizeHandler), a.detachEvent("onscroll", d.onResizeHandler)), clearTimeout(d.resizeHandlerId_to)
        }, d.onResizeHandler = function() {
            d.resizeHandler(), clearTimeout(d.resizeHandler2Id_to), d.resizeHandler2Id_to = setTimeout(function() {
                d.resizeHandler()
            }, 300)
        }, d.onScrollHandler = function() {
            d.hibernate_bl || (d.isFullScreen_bl || d.displayType == b.FULL_SCREEN || d.displayType == b.LIGHTBOX) && d.resizeHandler()
        }, this.orientationChange = function() {
            (d.displayType == b.FULL_SCREEN || d.isFullScreen_bl) && (d.orintationChangeComplete_bl = !1, clearTimeout(d.resizeHandlerId_to), clearTimeout(d.resizeHandler2Id_to), clearTimeout(d.orientationChangeId_to), d.orientationChangeId_to = setTimeout(function() {
                d.orintationChangeComplete_bl = !0, d.resizeHandler(!0)
            }, 1e3), d.main_do.setX(0), d.main_do.setWidth(0))
        }, d.resizeHandler = function(a) {
            if (d.orintationChangeComplete_bl) {
                var c = FWDUtils.getScrollOffsets(),
                    e = FWDUtils.getViewportSize();
                if (d.viewportWidth != e.w || d.viewportHeight != e.h || d.pageXOffset != c.x || d.pageYOffset != c.y || a) {
                    if (d.viewportWidth = e.w, d.viewportHeight = e.h, d.pageXOffset = c.x, d.pageYOffset = c.y, d.displayType != b.LIGHTBOX || d.isFullScreen_bl) d.isFullScreen_bl || d.displayType == b.FULL_SCREEN ? (d.main_do.setX(c.x), d.main_do.setY(c.y), d.stageWidth = e.w, d.stageHeight = e.h) : (d.main_do.setX(0), d.main_do.setY(0), d.stageWidth = d.stageContainer.offsetWidth, d.stageHeight = d.stageContainer.offsetHeight);
                    else {
                        if (d.lightBoxWidth > e.w ? (d.finalLightBoxWidth = e.w, d.finalLightBoxHeight = parseInt(d.lightBoxHeight * (e.w / d.lightBoxWidth))) : (d.finalLightBoxWidth = d.lightBoxWidth, d.finalLightBoxHeight = d.lightBoxHeight), d.lightBox_do.setWidth(e.w), d.lightBox_do.setHeight(e.h), d.lightBox_do.setX(c.x), d.lightBox_do.setY(c.y), d.lightBox_do.mainLightBox_do.setX(parseInt((e.w - d.finalLightBoxWidth) / 2)), d.lightBox_do.mainLightBox_do.setY(parseInt((e.h - d.finalLightBoxHeight) / 2)), d.lightBox_do.closeButton_do && !d.lightBox_do.closeButtonIsTweening_bl) {
                            var f = parseInt((e.w + d.finalLightBoxWidth) / 2 - d.lightBox_do.closeButton_do.totalWidth / 2),
                                g = parseInt((e.h - d.finalLightBoxHeight) / 2 - d.lightBox_do.closeButton_do.totalHeight / 2);
                            f + d.lightBox_do.closeButton_do.totalWidth > d.viewportWidth && (f = d.viewportWidth - d.lightBox_do.closeButton_do.totalWidth), 0 > g && (g = 0), d.lightBox_do.closeButton_do.setX(f), d.lightBox_do.closeButton_do.setY(g)
                        }
                        d.main_do.setX(0), d.main_do.setY(0), d.lightBox_do.mainLightBox_do.setWidth(d.finalLightBoxWidth), d.lightBox_do.mainLightBox_do.setHeight(d.finalLightBoxHeight), d.stageWidth = d.finalLightBoxWidth, d.stageHeight = d.finalLightBoxHeight
                    }
                    d.main_do.setWidth(d.stageWidth), d.main_do.setHeight(d.stageHeight), d.preloader_do && d.preloader_do.positionAndResize(), d.controller_do && d.controller_do.resizeAndPosition(), d.imageManager_do && d.imageManager_do.resizeAndPosition(!1), d.navigator_do && d.navigator_do.resizeAndPosition(), d.descriptionWindow_do && d.descriptionWindow_do.isShowed_bl && d.descriptionWindow_do.resizeAndPosition()
                }
            }
        }, d.setupLightBox = function() {
            FWDLightBox.setPrototype(), d.lightBox_do = new FWDLightBox(d, d.lightBoxBackgroundColor_str, d.backgroundColor_str, d.lightBoxBackgroundOpacity, d.lightBoxWidth, d.lightBoxHeight), d.lightBox_do.getStyle().zIndex = 9999999, d.lightBox_do.addListener(FWDLightBox.CLOSE, d.lightBoxCloseHandler), d.lightBox_do.addListener(FWDLightBox.HIDE_COMPLETE, d.lightBoxHideCompleteHandler), d.lighboxAnimDoneId_to = setTimeout(d.setupMegazoom, 1800)
        }, d.lightBoxCloseHandler = function() {
            d.stopResizeHandler(), d.data && d.data.stopToLoad()
        }, d.lightBoxHideCompleteHandler = function() {
            d.dispatchEvent && d.dispatchEvent(b.CLOSE_LIGHTBOX), d.destroy()
        }, d.setupContextMenu = function() {
            FWDContextMenu.setPrototype(), d.customContextMenu = new FWDContextMenu(d, d.data), d.customContextMenu.addListener(FWDController.PAN, d.contextMenuPanHandler), d.customContextMenu.addListener(FWDController.ZOOM_IN, d.contextMenuZoomInHandler), d.customContextMenu.addListener(FWDController.ZOOM_OUT, d.contextMenuZoomOutHandler), d.customContextMenu.addListener(FWDController.HIDE_MARKERS, d.controllerHideMarkers), d.customContextMenu.addListener(FWDController.SHOW_MARKERS, d.controllerShowMarkers), d.customContextMenu.addListener(FWDController.SHOW_INFO, d.contextMenuShowInfoWindow), d.customContextMenu.addListener(FWDController.GO_FULL_SCREEN, d.controllerGoFullScreen), d.customContextMenu.addListener(FWDController.GO_NORMAL_SCREEN, d.controllerGoNormalScreen), d.customContextMenu.addListener(FWDController.HIDE_CONTROLLER, d.contextMenuHideController), d.customContextMenu.addListener(FWDController.SHOW_CONTROLLER, d.contextMenuShowController)
        }, this.contextMenuPanHandler = function(a) {
            "left" == a.dir ? d.controller_do.moveLeftButtonStartHandler(a.e) : "right" == a.dir ? d.controller_do.moveRightButtonStartHandler(a.e) : "up" == a.dir ? d.controller_do.moveUpButtonStartHandler(a.e) : "down" == a.dir && d.controller_do.moveDownButtonStartHandler(a.e)
        }, this.contextMenuGoToNextImageHandler = function(a) {
            d.controller_do.nextButtonStartHandler(a)
        }, this.contextMenuGoToPrevImageHandler = function(a) {
            d.controller_do.prevButtonStartHandler(a)
        }, this.contextMenuZoomInHandler = function(a) {
            d.controller_do.zoomInStartHandler(a)
        }, this.contextMenuZoomOutHandler = function(a) {
            d.controller_do.zoomOutStartHandler(a)
        }, this.contextMenuShowInfoWindow = function() {
            d.main_do.addChild(d.descriptionWindow_do), d.descriptionWindow_do.hide(!1, !0), d.descriptionWindow_do.show(d.data.infoText_str)
        }, this.contextMenuHideController = function() {
            d.controller_do.setHideOrShowControllerAndToolTipState(1)
        }, this.contextMenuShowController = function() {
            d.controller_do.setHideOrShowControllerAndToolTipState(0)
        }, d.setupData = function() {
            FWDData.setPrototype(), d.data = new FWDData(d.props_obj, d.rootElement_el), d.data.addListener(FWDData.LIGHBOX_CLOSE_BUTTON_LOADED, d.onLightboxCloseButtonLoadComplete), d.data.addListener(FWDData.PRELOADER_LOAD_DONE, d.onPreloaderLoadDone), d.data.addListener(FWDData.LOAD_ERROR, d.dataLoadError), d.data.addListener(FWDData.SKIN_PROGRESS, d.dataSkinProgressHandler), d.data.addListener(FWDData.IMAGES_PROGRESS, d.dataImagesProgressHandler), d.data.addListener(FWDData.LOAD_DONE, d.dataLoadComplete), d.data.addListener(FWDData.IMAGES_LOAD_COMPLETE, d.dataImageLoadComplete)
        }, d.onLightboxCloseButtonLoadComplete = function() {
            d.displayType == b.LIGHTBOX && d.lightBox_do.setupCloseButton(d.data.mainLightboxCloseButtonN_img, d.data.mainLightboxCloseButtonS_img)
        }, d.onPreloaderLoadDone = function() {
            d.setupPreloader()
        }, d.dataLoadError = function(a) {
            d.main_do.addChild(d.info_do), d.info_do.showText(a.text)
        }, d.dataSkinProgressHandler = function() {
            d.preloader_do.updateText("- Henter kilde -")
        }, d.dataImagesProgressHandler = function() {
            d.preloader_do.updateText(d.data.preloaderText_str)
        }, d.dataLoadComplete = function() {
            d.main_do.addChild(d.preloader_do), d.isMobile_bl || d.setupContextMenu()
        }, d.dataImageLoadComplete = function() {
            d.hidePreloaderId_to = setTimeout(function() {
                d.preloader_do.hide(!0)
            }, 500), d.setupImageManager(), d.setupController(), d.data.showNavigator_bl && d.setupNavigator(), d.main_do.addChild(d.preloader_do), d.data.hideController_bl && (d.setupHider(), d.controller_do.setupHider(d.hider), d.imageManager_do.setupHider(d.hider), d.navigator_do && d.navigator_do.setupHider(d.hider), d.startHiderWithDelayId_to = setTimeout(function() {
                d.hider.start()
            }, d.data.hideControllerDelay)), d.customContextMenu && (d.customContextMenu.isActive_bl = !0), d.navigator_do && d.navigator_do.activate(), d.setupDisableContainer(), d.setupDescriptionWindow()
        }, d.setupPreloader = function() {
            FWDPreloader.setPrototype(), d.preloader_do = new FWDPreloader(d, d.data.mainPreloader_img, 50, 45, 30, 50, d.data.preloaderFontColor_str, d.data.preloaderBackgroundColor_str), d.preloader_do.addListener(FWDPreloader.HIDE_COMPLETE, d.onPreloaderHideCompleteHandler), d.preloader_do.positionAndResize(), d.preloader_do.hide(!1), d.preloader_do.show(!0), d.preloader_do.start(), d.main_do.addChild(d.preloader_do)
        }, d.onPreloaderHideCompleteHandler = function() {
            d.main_do.removeChild(d.preloader_do), d.preloader_do.destroy(), d.preloader_do = null
        }, d.setupHider = function() {
            FWDHider.setPrototype(), d.hider = new FWDHider(d.data.isMobile_bl, d.main_do, d.data.hideControllerDelay)
        }, this.setupController = function() {
            FWDController.setPrototype(), d.controller_do = new FWDController(d.data, d), d.controller_do.addListener(FWDController.MOUSE_DOWN, d.controllerOnMouseDownHandler), d.controller_do.addListener(FWDController.PAN, d.controllerOnPanHandler), d.controller_do.addListener(FWDController.DISABLE_PAN_OR_MOVE, d.disablePanOrMoveHandler), d.controller_do.addListener(FWDController.ENABLE_PAN_OR_MOVE, d.enablePanOrMoveHandler), d.controller_do.addListener(FWDController.SCROLL_BAR_UPDATE, d.controllerScrollBarUpdateHandler), d.controller_do.addListener(FWDController.ZOOM_WITH_BUTTONS, d.controllerZoomHandler), d.controller_do.addListener(FWDController.SHOW_INFO, d.controllerShowInfoHandler), d.controller_do.addListener(FWDController.GO_FULL_SCREEN, d.controllerGoFullScreen), d.controller_do.addListener(FWDController.GO_NORMAL_SCREEN, d.controllerGoNormalScreen), d.controller_do.addListener(FWDController.HIDE_MARKERS, d.controllerHideMarkers), d.controller_do.addListener(FWDController.SHOW_MARKERS, d.controllerShowMarkers), d.controller_do.addListener(FWDController.HIDE_CONTROLLER, d.controllerHideHandler), d.controller_do.addListener(FWDController.SHOW_CONTROLLER, d.controllerShowHandler), d.controller_do && d.controller_do.resizeAndPosition(), d.main_do.addChild(d.controller_do)
        }, this.controllerOnMouseDownHandler = function() {
            d.imageManager_do.hideToolTipWindow()
        }, this.controllerOnPanHandler = function(a) {
            d.imageManager_do.panWithButtons(a.dir)
        }, this.disablePanOrMoveHandler = function() {
            d.imageManager_do.disableOrEnablePanOrTouch(!0)
        }, this.enablePanOrMoveHandler = function() {
            d.imageManager_do.disableOrEnablePanOrTouch(!1)
        }, this.controllerScrollBarUpdateHandler = function(a) {
            d.imageManager_do.zoomInOrOutWithScrollBar(a.percent)
        }, this.controllerZoomHandler = function(a) {
            d.imageManager_do.zoomInOrOutWithButtons(a.dir, a.withPause)
        }, this.controllerShowInfoHandler = function() {
            d.main_do.addChild(d.descriptionWindow_do), d.descriptionWindow_do.hide(!1, !0), d.descriptionWindow_do.show(d.data.infoText_str)
        }, this.controllerGoFullScreen = function() {
            d.isFullScreen_bl || (d.goFullScreen(), d.controller_do.setFullScreenButtonState(0), d.customContextMenu && d.customContextMenu.updateFullScreenButton(1), document.addEventListener && (document.addEventListener("fullscreenchange", d.onFullScreenChange), document.addEventListener("mozfullscreenchange", d.onFullScreenChange), document.addEventListener("webkitfullscreenchange", d.onFullScreenChange)))
        }, this.controllerGoNormalScreen = function() {
            d.isFullScreen_bl && (d.goNormalScreen(), d.imageManager_do.centerImage(), d.controller_do.setFullScreenButtonState(1), d.customContextMenu && d.customContextMenu.updateFullScreenButton(0), document.removeEventListener && (document.removeEventListener("fullscreenchange", d.onFullScreenChange), document.removeEventListener("mozfullscreenchange", d.onFullScreenChange), document.removeEventListener("webkitfullscreenchange", d.onFullScreenChange)))
        }, this.controllerHideMarkers = function() {
            d.customContextMenu && d.customContextMenu.updateHideOrShowMarkersButton(1), d.controller_do.setHideOrShowButtonAndToolTipState(1), d.imageManager_do.hideMarkers()
        }, this.controllerShowMarkers = function() {
            d.customContextMenu && d.customContextMenu.updateHideOrShowMarkersButton(0), d.controller_do.setHideOrShowButtonAndToolTipState(0), d.imageManager_do.showMarkers()
        }, this.onFullScreenChange = function() {
            document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msieFullScreen || (d.showButtonsLabels_bl && d.fullscreenToolTip_do.setLabel(d.fullscreenToolTip_do.toolTipLabel2_str), d.controller_do.setFullScreenButtonState(1), d.customContextMenu && d.customContextMenu.updateFullScreenButton(0), d.controllerGoNormalScreen(), d.isFullScreen_bl = !1)
        }, this.controllerHideHandler = function() {
            d.customContextMenu && d.customContextMenu.startHideOrShowControllerHandler(1)
        }, this.controllerShowHandler = function() {
            d.customContextMenu && d.customContextMenu.startHideOrShowControllerHandler(0)
        }, d.setupImageManager = function() {
            FWDImageManager.setPrototype(), d.imageManager_do = new FWDImageManager(d.data, d), d.imageManager_do.addListener(FWDImageManager.LARGE_IMAGE_LOAD_ERROR, d.imageManagerLoadError), d.imageManager_do.addListener(FWDImageManager.SCROLL_BAR_UPDATE, d.imageManagerScrollBarUpdate), d.imageManager_do.addListener(FWDImageManager.SHOW_NAVIGATOR, d.imageManagerShowNavigatorHandler), d.imageManager_do.addListener(FWDImageManager.HIDE_NAVIGATOR, d.imageManagerHideNavigatorHandler), d.imageManager_do.addListener(FWDImageManager.UPDATE_NAVIGATOR, d.imageManagerUpdateNavigatorHandler), d.imageManager_do.addListener(FWDImageManager.SHOW_INFO, d.imageManagerShowInfoHandler), d.imageManager_do.addListener(FWDImageManager.DISABLE_LEFT_AND_RIGHT_BUTTONS, d.disableLeftAndRightHandler), d.imageManager_do.addListener(FWDImageManager.ENABLE_LEFT_AND_RIGHT_BUTTONS, d.enableLeftAndRightHandler), d.imageManager_do.addListener(FWDImageManager.DISABLE_UP_AND_DOWN_BUTTONS, d.disableUpAndDownHandler), d.imageManager_do.addListener(FWDImageManager.ENABLE_UP_AND_DOWN_BUTTONS, d.enableUpAndDownHandler), d.main_do.addChild(d.imageManager_do)
        }, d.imageManagerLoadError = function(a) {
            d.main_do.addChild(d.info_do), d.info_do.showText(a.error)
        }, d.imageManagerScrollBarUpdate = function(a) {
            d.controller_do.updateScrollBar(a.percent, a.animate)
        }, d.imageManagerShowNavigatorHandler = function() {
            d.navigator_do.show(!0)
        }, d.imageManagerHideNavigatorHandler = function() {
            d.navigator_do.hide(!0)
        }, d.imageManagerUpdateNavigatorHandler = function(a) {
            d.navigator_do.update(a.percentX, a.percentY, a.percentWidth, a.percentHeight, a.animate)
        }, d.imageManagerShowInfoHandler = function(a) {
            d.main_do.addChild(d.descriptionWindow_do), d.descriptionWindow_do.hide(!1, !0), d.descriptionWindow_do.show(a.text)
        }, d.disableLeftAndRightHandler = function() {
            d.controller_do.disableLeftAndRightButtons(), d.customContextMenu && d.customContextMenu.disableLeftAndRightButtons()
        }, d.enableLeftAndRightHandler = function() {
            d.controller_do.enableLeftAndRightButtons(), d.customContextMenu && d.customContextMenu.enableLeftAndRightButtons()
        }, d.disableUpAndDownHandler = function() {
            d.controller_do.disableUpAndDownButtons(), d.customContextMenu && d.customContextMenu.disableUpAndDownButtons()
        }, d.enableUpAndDownHandler = function() {
            d.controller_do.enableUpAndDownButtons(), d.customContextMenu && d.customContextMenu.enableUpAndDownButtons()
        }, d.setupNavigator = function() {
            FWDNavigator.setPrototype(), d.navigator_do = new FWDNavigator(d, d.data), d.navigator_do.addListener(FWDNavigator.PAN_START, d.navigatorOnPanStartHandler), d.navigator_do.addListener(FWDNavigator.PAN_END, d.navigatorOnPanEndHandler), d.navigator_do.addListener(FWDNavigator.PAN, d.navigatorPanHandler), d.main_do.addChild(d.navigator_do)
        }, d.navigatorOnPanStartHandler = function() {
            d.imageManager_do.hideToolTipWindow(), d.isMobile_bl || d.disableAll()
        }, d.navigatorOnPanEndHandler = function() {
            d.isMobile_bl || d.enableAll()
        }, d.navigatorPanHandler = function(a) {
            d.imageManager_do.updateOnNavigatorPan(a.percentX, a.percentY)
        }, d.setupDescriptionWindow = function() {
            FWDDescriptionWindow.setPrototype(), d.descriptionWindow_do = new FWDDescriptionWindow(d, d.data), d.descriptionWindow_do.addListener(FWDDescriptionWindow.SHOW_START, d.descWindowShowStartHandler), d.descriptionWindow_do.addListener(FWDDescriptionWindow.HIDE_COMPLETE, d.descWindowHideComplteHandler)
        }, d.descWindowShowStartHandler = function() {
            d.customContextMenu && d.customContextMenu.disable()
        }, d.descWindowHideComplteHandler = function() {
            d.customContextMenu && d.customContextMenu.enable(), d.main_do.removeChild(d.descriptionWindow_do)
        }, this.setupDisableContainer = function() {
            d.disable_sdo = new FWDSimpleDisplayObject("div"), d.disable_sdo.screen.style.cursor = "url(" + d.data.handGrabPath_str + "), default", (FWDUtils.isIE || FWDUtils.isChrome) && (d.disable_sdo.setBkColor("#000000"), d.disable_sdo.setAlpha(1e-4)), d.main_do.addChild(d.disable_sdo)
        }, this.disableAll = function() {
            d.disable_sdo.setWidth(d.stageWidth + 3e3), d.disable_sdo.setHeight(d.stageHeight + 3e3)
        }, this.enableAll = function() {
            d.disable_sdo.setWidth(0), d.disable_sdo.setWidth(0)
        }, d.goFullScreen = function() {
            var a = FWDUtils.getScrollOffsets();
            d.lastScrollX = a.x, d.lastScrollY = a.y, document.documentElement.requestFullScreen ? document.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen ? document.documentElement.webkitRequestFullScreen() : document.documentElement.msieRequestFullScreen && document.documentElement.msieRequestFullScreen(), d.main_do.getStyle().position = "absolute", d.body.style.overflow = "hidden", document.documentElement.style.overflow = "hidden", FWDUtils.isIEAndLessThen9 ? d.body.appendChild(d.main_do.screen) : document.documentElement.appendChild(d.main_do.screen), d.main_do.getStyle().zIndex = 100000001, d.isFullScreen_bl = !0, d.resizeHandler(!0)
        }, d.goNormalScreen = function() {
            document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msieCancelFullScreen && document.msieCancelFullScreen(), d.addMainDoToTheOriginalParent(), d.isFullScreen_bl = !1, d.resizeHandler(!0), d.centerImageNormalScreenId_to = setTimeout(function() {
                d.imageManager_do.resizeAndPosition(!0, !1)
            }, 50)
        }, d.addMainDoToTheOriginalParent = function() {
            d.displayType != b.FULL_SCREEN && (FWDUtils.isIEAndLessThen9 ? (document.documentElement.style.overflow = "auto", this.body.style.overflow = "auto", this.body.style.visibility = "visible") : (document.documentElement.style.overflow = "visible", d.body.style.overflow = "visible", d.body.style.display = "inline")), d.displayType == b.FULL_SCREEN ? FWDUtils.isIEAndLessThen9 ? d.body.appendChild(d.main_do.screen) : document.documentElement.appendChild(d.main_do.screen) : d.displayType == b.LIGHTBOX ? d.stageContainer.appendChild(d.main_do.screen) : (d.main_do.getStyle().position = "relative", d.stageContainer.appendChild(d.main_do.screen)), d.main_do.getStyle().zIndex = 0, a.scrollTo(d.lastScrollX, d.lastScrollY)
        }, d.cleanMainEvents = function() {
            a.removeEventListener ? (a.removeEventListener("resize", d.onResizeHandler), a.removeEventListener("scroll", d.onResizeHandler), document.removeEventListener("fullscreenchange", d.onFullScreenChange), document.removeEventListener("mozfullscreenchange", d.onFullScreenChange), document.removeEventListener("webkitfullscreenchange", d.onFullScreenChange)) : a.detachEvent && (a.detachEvent("onresize", d.onResizeHandler), a.detachEvent("onscroll", d.onResizeHandler)), d.isMobile_bl && a.removeEventListener("contextmenu", d.preventContextMenu), clearTimeout(d.resizeHandlerId_to), clearTimeout(d.resizeHandler2Id_to), clearTimeout(d.lighboxAnimDoneId_to), clearTimeout(d.startHiderWithDelayId_to), clearTimeout(d.initPluginId_to), clearTimeout(d.activateWithDelayImagemanagerId_to), clearTimeout(d.hidePreloaderId_to), clearTimeout(d.centerImageNormalScreenId_to)
        }, d.destroy = function() {
            d.cleanMainEvents(), d.data && d.data.destroy(), d.lightBox_do && d.lightBox_do.destroy(), d.preloader_do && d.preloader_do.destroy(), d.customContextMenu && d.customContextMenu.destroy(), d.info_do && d.info_do.destroy(), d.imageManager_do && (TweenMax.killTweensOf(d.imageManager_do), d.imageManager_do.destroy()), d.controller_do && d.controller_do.destroy(), d.navigator_do && d.navigator_do.destroy(), d.hider && d.hider.destroy(), d.descriptionWindow_do && d.descriptionWindow_do.destroy();
            try {
                d.main_do.screen.parentNode.removeChild(d.main_do.screen)
            } catch (a) {}
            d.main_do && (d.main_do.setInnerHTML(""), d.main_do.destroy()), d.data = null, d.lightBox_do = null, d.customContextMenu = null, d.preloader_do = null, d.hider = null, d.info_do = null, d.main_do = null, d.imageManager_do = null, d.navigator_do = null, d = null
        }, d.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDEventDispatcher
    }, b.FULL_SCREEN = "fullscreen", b.LIGHTBOX = "lightbox", b.RESPONSIVE = "responsive", b.CLOSE_LIGHTBOX = "closeLightBox", b.CLOSE_LIGHTBOX = "closeLightBox", a.FWDMegazoom = b
}(window), (window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
        var d = [].slice,
            e = function(a, b, d) {
                c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0
            },
            f = function(a) {
                return a.jquery || a.length && a[0] && a[0].nodeType && a[0].style
            },
            g = e.prototype = c.to({}, .1, {}),
            h = [];
        e.version = "1.9.7", g.constructor = e, g.kill()._gc = !1, e.killTweensOf = e.killDelayedCallsTo = c.killTweensOf, e.getTweensOf = c.getTweensOf, e.ticker = c.ticker, g.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), c.prototype.invalidate.call(this)
        }, g.updateTo = function(a, b) {
            var e, d = this.ratio;
            b && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (e in a) this.vars[e] = a[e];
            if (this._initted)
                if (b) this._initted = !1;
                else if (this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var f = this._time;
                this.render(0, !0, !1), this._initted = !1, this.render(f, !0, !1)
            } else if (this._time > 0) {
                this._initted = !1, this._init();
                for (var i, g = 1 / (1 - d), h = this._firstPT; h;) i = h.s + h.c, h.c *= g, h.s = i - h.c, h = h._next
            }
            return this
        }, g.render = function(a, b, c) {
            var i, j, k, l, m, n, o, d = this._dirty ? this.totalDuration() : this._totalDuration,
                e = this._time,
                f = this._totalTime,
                g = this._cycle;
            if (a >= d ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (i = !0, j = "onComplete"), 0 === this._duration && ((0 === a || this._rawPrevTime < 0) && this._rawPrevTime !== a && (c = !0, this._rawPrevTime > 0 && (j = "onReverseComplete", b && (a = -1))), this._rawPrevTime = a)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== f || 0 === this._duration && this._rawPrevTime > 0) && (j = "onReverseComplete", i = this._reversed), 0 > a ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (c = !0), this._rawPrevTime = a)) : this._initted || (c = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (l = this._duration + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = this._duration - this._time), this._time > this._duration ? this._time = this._duration : this._time < 0 && (this._time = 0)), this._easeType ? (m = this._time / this._duration, n = this._easeType, o = this._easePower, (1 === n || 3 === n && m >= .5) && (m = 1 - m), 3 === n && (m *= 2), 1 === o ? m *= m : 2 === o ? m *= m * m : 3 === o ? m *= m * m * m : 4 === o && (m *= m * m * m * m), this.ratio = 1 === n ? 1 - m : 2 === n ? m : this._time / this._duration < .5 ? m / 2 : 1 - m / 2) : this.ratio = this._ease.getRatio(this._time / this._duration)), e === this._time && !c) return f !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)), void 0;
            if (!this._initted) {
                if (this._init(), !this._initted) return;
                this._time && !i ? this.ratio = this._ease.getRatio(this._time / this._duration) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._active || this._paused || (this._active = !0), 0 === f && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : j || (j = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === this._duration) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h))), k = this._firstPT; k;) {
                if (k.f) k.t[k.p](k.c * this.ratio + k.s);
                else {
                    var p = k.c * this.ratio + k.s;
                    "x" == k.p ? k.t.setX(p) : "y" == k.p ? k.t.setY(p) : "z" == k.p ? k.t.setZ(p) : "w" == k.p ? k.t.setWidth(p) : "h" == k.p ? k.t.setHeight(p) : "alpha" == k.p ? k.t.setAlpha(p) : "scale" == k.p ? k.t.setScale(p) : k.t[k.p] = p
                }
                k = k._next
            }
            this._onUpdate && (0 > a && this._startAt && this._startAt.render(a, b, c), b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)), this._cycle !== g && (b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || h)), j && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startAt.render(a, b, c), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[j] && this.vars[j].apply(this.vars[j + "Scope"] || this, this.vars[j + "Params"] || h)))
        }, e.to = function(a, b, c) {
            return new e(a, b, c)
        }, e.from = function(a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new e(a, b, c)
        }, e.fromTo = function(a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new e(a, b, d)
        }, e.staggerTo = e.allTo = function(a, b, g, i, j, k, l) {
            i = i || 0;
            var p, q, r, s, m = g.delay || 0,
                n = [],
                o = function() {
                    g.onComplete && g.onComplete.apply(g.onCompleteScope || this, g.onCompleteParams || h), j.apply(l || this, k || h)
                };
            for (a instanceof Array || ("string" == typeof a && (a = c.selector(a) || a), f(a) && (a = d.call(a, 0))), p = a.length, r = 0; p > r; r++) {
                q = {};
                for (s in g) q[s] = g[s];
                q.delay = m, r === p - 1 && j && (q.onComplete = o), n[r] = new e(a[r], b, q), m += i
            }
            return n
        }, e.staggerFrom = e.allFrom = function(a, b, c, d, f, g, h) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, e.staggerTo(a, b, c, d, f, g, h)
        }, e.staggerFromTo = e.allFromTo = function(a, b, c, d, f, g, h, i) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, e.staggerTo(a, b, d, f, g, h, i)
        }, e.delayedCall = function(a, b, c, d, f) {
            return new e(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                onCompleteScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                onReverseCompleteScope: d,
                immediateRender: !1,
                useFrames: f,
                overwrite: 0
            })
        }, e.set = function(a, b) {
            return new e(a, 0, b)
        }, e.isTweening = function(a) {
            for (var e, b = c.getTweensOf(a), d = b.length; --d > -1;)
                if (e = b[d], e._active || e._startTime === e._timeline._time && e._timeline._active) return !0;
            return !1
        };
        var i = function(a, b) {
                for (var d = [], e = 0, f = a._first; f;) f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(i(f, b)), e = d.length), f = f._next;
                return d
            },
            j = e.getAllTweens = function(b) {
                return i(a._rootTimeline, b).concat(i(a._rootFramesTimeline, b))
            };
        e.killAll = function(a, c, d, e) {
            null == c && (c = !0), null == d && (d = !0);
            var i, k, l, f = j(0 != e),
                g = f.length,
                h = c && d && e;
            for (l = 0; g > l; l++) k = f[l], (h || k instanceof b || (i = k.target === k.vars.onComplete) && d || c && !i) && (a ? k.totalTime(k.totalDuration()) : k._enabled(!1, !1))
        }, e.killChildTweensOf = function(a, b) {
            if (null != a) {
                var h, i, j, k, l, g = c._tweenLookup;
                if ("string" == typeof a && (a = c.selector(a) || a), f(a) && (a = d(a, 0)), a instanceof Array)
                    for (k = a.length; --k > -1;) e.killChildTweensOf(a[k], b);
                else {
                    h = [];
                    for (j in g)
                        for (i = g[j].target.parentNode; i;) i === a && (h = h.concat(g[j].tweens)), i = i.parentNode;
                    for (l = h.length, k = 0; l > k; k++) b && h[k].totalTime(h[k].totalDuration()), h[k]._enabled(!1, !1)
                }
            }
        };
        var k = function(a, c, d, e) {
            void 0 === c && (c = !0), void 0 === d && (d = !0);
            for (var i, k, f = j(e), g = c && d && e, h = f.length; --h > -1;) k = f[h], (g || k instanceof b || (i = k.target === k.vars.onComplete) && d || c && !i) && k.paused(a)
        };
        return e.pauseAll = function(a, b, c) {
            k(!0, a, b, c)
        }, e.resumeAll = function(a, b, c) {
            k(!1, a, b, c)
        }, g.progress = function(a) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, g.totalProgress = function(a) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
        }, g.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
        }, g.duration = function(b) {
            return arguments.length ? a.prototype.duration.call(this, b) : this._duration
        }, g.totalDuration = function(a) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, g.repeat = function(a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
        }, g.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
        }, g.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo
        }, e
    }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
        var d = function(a) {
                b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                for (var f, g, c = this.vars, d = e.length; --d > -1;)
                    if (g = c[e[d]])
                        for (f = g.length; --f > -1;) "{self}" === g[f] && (g = c[e[d]] = g.concat(), g[f] = this);
                c.tweens instanceof Array && this.add(c.tweens, 0, c.align, c.stagger)
            },
            e = ["onStartParams", "onUpdateParams", "onCompleteParams", "onReverseCompleteParams", "onRepeatParams"],
            f = [],
            g = function(a) {
                var c, b = {};
                for (c in a) b[c] = a[c];
                return b
            },
            h = f.slice,
            i = d.prototype = new b;
        return d.version = "1.9.7", i.constructor = d, i.kill()._gc = !1, i.to = function(a, b, d, e) {
            return b ? this.add(new c(a, b, d), e) : this.set(a, d, e)
        }, i.from = function(a, b, d, e) {
            return this.add(c.from(a, b, d), e)
        }, i.fromTo = function(a, b, d, e, f) {
            return b ? this.add(c.fromTo(a, b, d, e), f) : this.set(a, e, f)
        }, i.staggerTo = function(a, b, e, f, i, j, k, l) {
            var n, m = new d({
                onComplete: j,
                onCompleteParams: k,
                onCompleteScope: l
            });
            for ("string" == typeof a && (a = c.selector(a) || a), !(a instanceof Array) && a.length && a[0] && a[0].nodeType && a[0].style && (a = h.call(a, 0)), f = f || 0, n = 0; n < a.length; n++) e.startAt && (e.startAt = g(e.startAt)), m.to(a[n], b, g(e), n * f);
            return this.add(m, i)
        }, i.staggerFrom = function(a, b, c, d, e, f, g, h) {
            return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h)
        }, i.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i)
        }, i.call = function(a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e)
        }, i.set = function(a, b, d) {
            return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d)
        }, d.exportRoot = function(a, b) {
            a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var g, h, e = new d(a),
                f = e._timeline;
            for (null == b && (b = !0), f._remove(e, !0), e._startTime = 0, e._rawPrevTime = e._time = e._totalTime = f._time, g = f._first; g;) h = g._next, b && g instanceof c && g.target === g.vars.onComplete || e.add(g, g._startTime - g._delay), g = h;
            return f.add(e, 0), e
        }, i.add = function(e, f, g, h) {
            var i, j, k, l, m;
            if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                if (e instanceof Array) {
                    for (g = g || "normal", h = h || 0, i = f, j = e.length, k = 0; j > k; k++)(l = e[k]) instanceof Array && (l = new d({
                        tweens: l
                    })), this.add(l, i), "string" != typeof l && "function" != typeof l && ("sequence" === g ? i = l._startTime + l.totalDuration() / l._timeScale : "start" === g && (l._startTime -= l.delay())), i += h;
                    return this._uncache(!0)
                }
                if ("string" == typeof e) return this.addLabel(e, f);
                if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is neither a tween, timeline, function, nor a string.";
                e = c.delayedCall(0, e)
            }
            if (b.prototype.add.call(this, e, f), this._gc && !this._paused && this._time === this._duration && this._time < this.duration())
                for (m = this; m._gc && m._timeline;) m._timeline.smoothChildTiming ? m.totalTime(m._totalTime, !0) : m._enabled(!0, !1), m = m._timeline;
            return this
        }, i.remove = function(b) {
            if (b instanceof a) return this._remove(b, !1);
            if (b instanceof Array) {
                for (var c = b.length; --c > -1;) this.remove(b[c]);
                return this
            }
            return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
        }, i.append = function(a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
        }, i.insert = i.insertMultiple = function(a, b, c, d) {
            return this.add(a, b || 0, c, d)
        }, i.appendMultiple = function(a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
        }, i.addLabel = function(a, b) {
            return this._labels[a] = this._parseTimeOrLabel(b), this
        }, i.removeLabel = function(a) {
            return delete this._labels[a], this
        }, i.getLabelTime = function(a) {
            return null != this._labels[a] ? this._labels[a] : -1
        }, i._parseTimeOrLabel = function(b, c, d, e) {
            var f;
            if (e instanceof a && e.timeline === this) this.remove(e);
            else if (e instanceof Array)
                for (f = e.length; --f > -1;) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);
            if ("string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
            if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = this.duration());
            else {
                if (f = b.indexOf("="), -1 === f) return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
                c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)), b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration()
            }
            return Number(b) + c
        }, i.seek = function(a, b) {
            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
        }, i.stop = function() {
            return this.paused(!0)
        }, i.gotoAndPlay = function(a, b) {
            return this.play(a, b)
        }, i.gotoAndStop = function(a, b) {
            return this.pause(a, b)
        }, i.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1), this._active = !this._paused;
            var j, k, l, m, n, d = this._dirty ? this.totalDuration() : this._totalDuration,
                e = this._time,
                g = this._startTime,
                h = this._timeScale,
                i = this._paused;
            if (a >= d ? (this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (k = !0, m = "onComplete", 0 === this._duration && (0 === a || this._rawPrevTime < 0) && this._rawPrevTime !== a && this._first && (n = !0, this._rawPrevTime > 0 && (m = "onReverseComplete"))), this._rawPrevTime = a, a = d + 1e-6) : 1e-7 > a ? (this._totalTime = this._time = 0, (0 !== e || 0 === this._duration && this._rawPrevTime > 0) && (m = "onReverseComplete", k = this._reversed), 0 > a ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (n = !0)) : this._initted || (n = !0), this._rawPrevTime = a, a = 0) : this._totalTime = this._time = this._rawPrevTime = a, this._time !== e && this._first || c || n) {
                if (this._initted || (this._initted = !0), 0 === e && this.vars.onStart && 0 !== this._time && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || f)), this._time >= e)
                    for (j = this._first; j && (l = j._next, !this._paused || i);)(j._active || j._startTime <= this._time && !j._paused && !j._gc) && (j._reversed ? j.render((j._dirty ? j.totalDuration() : j._totalDuration) - (a - j._startTime) * j._timeScale, b, c) : j.render((a - j._startTime) * j._timeScale, b, c)), j = l;
                else
                    for (j = this._last; j && (l = j._prev, !this._paused || i);)(j._active || j._startTime <= e && !j._paused && !j._gc) && (j._reversed ? j.render((j._dirty ? j.totalDuration() : j._totalDuration) - (a - j._startTime) * j._timeScale, b, c) : j.render((a - j._startTime) * j._timeScale, b, c)), j = l;
                this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)), m && (this._gc || (g === this._startTime || h !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (k && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[m] && this.vars[m].apply(this.vars[m + "Scope"] || this, this.vars[m + "Params"] || f)))
            }
        }, i._hasPausedChild = function() {
            for (var a = this._first; a;) {
                if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                a = a._next
            }
            return !1
        }, i.getChildren = function(a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g;) g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
            return f
        }, i.getTweensOf = function(a, b) {
            for (var d = c.getTweensOf(a), e = d.length, f = [], g = 0; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (f[g++] = d[e]);
            return f
        }, i._contains = function(a) {
            for (var b = a.timeline; b;) {
                if (b === this) return !0;
                b = b.timeline
            }
            return !1
        }, i.shiftChildren = function(a, b, c) {
            c = c || 0;
            for (var f, d = this._first, e = this._labels; d;) d._startTime >= c && (d._startTime += a), d = d._next;
            if (b)
                for (f in e) e[f] >= c && (e[f] += a);
            return this._uncache(!0)
        }, i._kill = function(a, b) {
            if (!a && !b) return this._enabled(!1, !1);
            for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
            return e
        }, i.clear = function(a) {
            var b = this.getChildren(!1, !0, !0),
                c = b.length;
            for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
            return a !== !1 && (this._labels = {}), this._uncache(!0)
        }, i.invalidate = function() {
            for (var a = this._first; a;) a.invalidate(), a = a._next;
            return this
        }, i._enabled = function(a, c) {
            if (a === this._gc)
                for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
            return b.prototype._enabled.call(this, a, c)
        }, i.progress = function(a) {
            return arguments.length ? this.totalTime(this.duration() * a, !1) : this._time / this.duration()
        }, i.duration = function(a) {
            return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
        }, i.totalDuration = function(a) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, f, b = 0, c = this._last, d = 999999999999; c;) e = c._prev, c._dirty && c.totalDuration(), c._startTime > d && this._sortChildren && !c._paused ? this.add(c, c._startTime - c._delay) : d = c._startTime, c._startTime < 0 && !c._paused && (b -= c._startTime, this._timeline.smoothChildTiming && (this._startTime += c._startTime / this._timeScale), this.shiftChildren(-c._startTime, !1, -9999999999), d = 0), f = c._startTime + c._totalDuration / c._timeScale, f > b && (b = f), c = e;
                    this._duration = this._totalDuration = b, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== a && this.timeScale(this._totalDuration / a), this
        }, i.usesFrames = function() {
            for (var b = this._timeline; b._timeline;) b = b._timeline;
            return b === a._rootFramesTimeline
        }, i.rawTime = function() {
            return this._paused || 0 !== this._totalTime && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, d
    }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(a, b, c) {
        var d = function(b) {
                a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
            },
            e = [],
            f = new c(null, null, 1, 0),
            g = function(a) {
                for (; a;) {
                    if (a._paused) return !0;
                    a = a._timeline
                }
                return !1
            },
            h = d.prototype = new a;
        return h.constructor = d, h.kill()._gc = !1, d.version = "1.9.7", h.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this)
        }, h.addCallback = function(a, c, d, e) {
            return this.add(b.delayedCall(0, a, d, e), c)
        }, h.removeCallback = function(a, b) {
            if (null == b) this._kill(null, a);
            else
                for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
            return this
        }, h.tweenTo = function(a, c) {
            c = c || {};
            var g, h, d = {
                ease: f,
                overwrite: 2,
                useFrames: this.usesFrames(),
                immediateRender: !1
            };
            for (g in c) d[g] = c[g];
            return d.time = this._parseTimeOrLabel(a), h = new b(this, Math.abs(Number(d.time) - this._time) / this._timeScale || .001, d), d.onStart = function() {
                h.target.paused(!0), h.vars.time !== h.target.time() && h.duration(Math.abs(h.vars.time - h.target.time()) / h.target._timeScale), c.onStart && c.onStart.apply(c.onStartScope || h, c.onStartParams || e)
            }, h
        }, h.tweenFromTo = function(a, b, c) {
            c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [a],
                onCompleteScope: this
            }, c.immediateRender = c.immediateRender !== !1;
            var d = this.tweenTo(b, c);
            return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
        }, h.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1), this._active = !this._paused;
            var n, o, p, q, r, s, d = this._dirty ? this.totalDuration() : this._totalDuration,
                f = this._duration,
                g = this._time,
                h = this._totalTime,
                i = this._startTime,
                j = this._timeScale,
                k = this._rawPrevTime,
                l = this._paused,
                m = this._cycle;
            if (a >= d ? (this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, q = "onComplete", 0 === f && (0 === a || this._rawPrevTime < 0) && this._rawPrevTime !== a && this._first && (r = !0, this._rawPrevTime > 0 && (q = "onReverseComplete"))), this._rawPrevTime = a, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = f, a = f + 1e-6)) : 1e-7 > a ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === f && this._rawPrevTime > 0 && !this._locked) && (q = "onReverseComplete", o = this._reversed), 0 > a ? (this._active = !1, 0 === f && this._rawPrevTime >= 0 && this._first && (r = !0)) : this._initted || (r = !0), this._rawPrevTime = a, a = 0) : (this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (s = f + this._repeatDelay, this._cycle = this._totalTime / s >> 0, 0 !== this._cycle && this._cycle === this._totalTime / s && this._cycle--, this._time = this._totalTime - this._cycle * s, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, a = f + 1e-6) : this._time < 0 ? this._time = a = 0 : a = this._time))), this._cycle !== m && !this._locked) {
                var t = this._yoyo && 0 !== (1 & m),
                    u = t === (this._yoyo && 0 !== (1 & this._cycle)),
                    v = this._totalTime,
                    w = this._cycle,
                    x = this._rawPrevTime,
                    y = this._time;
                this._totalTime = m * f, this._cycle < m ? t = !t : this._totalTime += f, this._time = g, this._rawPrevTime = 0 === f ? k - 1e-5 : k, this._cycle = m, this._locked = !0, g = t ? 0 : f, this.render(g, b, 0 === f), b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || e), u && (g = t ? f + 1e-6 : -1e-6, this.render(g, !0, !1)), this._time = y, this._totalTime = v, this._cycle = w, this._rawPrevTime = x, this._locked = !1
            }
            if (!(this._time !== g && this._first || c || r)) return h !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e)), void 0;
            if (this._initted || (this._initted = !0), 0 === h && this.vars.onStart && 0 !== this._totalTime && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || e)), this._time >= g)
                for (n = this._first; n && (p = n._next, !this._paused || l);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (a - n._startTime) * n._timeScale, b, c) : n.render((a - n._startTime) * n._timeScale, b, c)), n = p;
            else
                for (n = this._last; n && (p = n._prev, !this._paused || l);)(n._active || n._startTime <= g && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (a - n._startTime) * n._timeScale, b, c) : n.render((a - n._startTime) * n._timeScale, b, c)), n = p;
            this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e)), q && (this._locked || this._gc || (i === this._startTime || j !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (o && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[q] && this.vars[q].apply(this.vars[q + "Scope"] || this, this.vars[q + "Params"] || e)))
        }, h.getActive = function(a, b, c) {
            null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
            var i, j, d = [],
                e = this.getChildren(a, b, c),
                f = 0,
                h = e.length;
            for (i = 0; h > i; i++) j = e[i], j._paused || j._timeline._time >= j._startTime && j._timeline._time < j._startTime + j._totalDuration / j._timeScale && (g(j._timeline) || (d[f++] = j));
            return d
        }, h.getLabelAfter = function(a) {
            a || 0 !== a && (a = this._time);
            var d, b = this.getLabelsArray(),
                c = b.length;
            for (d = 0; c > d; d++)
                if (b[d].time > a) return b[d].name;
            return null
        }, h.getLabelBefore = function(a) {
            null == a && (a = this._time);
            for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
                if (b[c].time < a) return b[c].name;
            return null
        }, h.getLabelsArray = function() {
            var c, a = [],
                b = 0;
            for (c in this._labels) a[b++] = {
                time: this._labels[c],
                name: c
            };
            return a.sort(function(a, b) {
                return a.time - b.time
            }), a
        }, h.progress = function(a) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, h.totalProgress = function(a) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
        }, h.totalDuration = function(b) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((b - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, h.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
        }, h.repeat = function(a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
        }, h.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
        }, h.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo
        }, h.currentLabel = function(a) {
            return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
        }, d
    }, !0),
    function() {
        var a = 180 / Math.PI,
            b = Math.PI / 180,
            c = [],
            d = [],
            e = [],
            f = {},
            g = function(a, b, c, d) {
                this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a
            },
            h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            i = function(a, b, c, d) {
                var e = {
                        a: a
                    },
                    f = {},
                    g = {},
                    h = {
                        c: d
                    },
                    i = (a + b) / 2,
                    j = (b + c) / 2,
                    k = (c + d) / 2,
                    l = (i + j) / 2,
                    m = (j + k) / 2,
                    n = (m - l) / 8;
                return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h]
            },
            j = function(a, b, f, g, h) {
                var m, n, o, p, q, r, s, t, u, v, w, x, y, j = a.length - 1,
                    k = 0,
                    l = a[0].a;
                for (m = 0; j > m; m++) q = a[k], n = q.a, o = q.d, p = a[k + 1].d, h ? (w = c[m], x = d[m], y = .25 * (x + w) * b / (g ? .5 : e[m] || .5), r = o - (o - n) * (g ? .5 * b : 0 !== w ? y / w : 0), s = o + (p - o) * (g ? .5 * b : 0 !== x ? y / x : 0), t = o - (r + ((s - r) * (3 * w / (w + x) + .5) / 4 || 0))) : (r = o - .5 * (o - n) * b, s = o + .5 * (p - o) * b, t = o - (r + s) / 2), r += t, s += t, q.c = u = r, q.b = 0 !== m ? l : l = q.a + .6 * (q.c - q.a), q.da = o - n, q.ca = u - n, q.ba = l - n, f ? (v = i(n, l, u, o), a.splice(k, 1, v[0], v[1], v[2], v[3]), k += 4) : k++, l = s;
                q = a[k], q.b = l, q.c = l + .4 * (q.d - l), q.da = q.d - q.a, q.ca = q.c - q.a, q.ba = l - q.a, f && (v = i(q.a, l, q.c, q.d), a.splice(k, 1, v[0], v[1], v[2], v[3]))
            },
            k = function(a, b, e, f) {
                var i, j, k, l, m, n, h = [];
                if (f)
                    for (a = [f].concat(a), j = a.length; --j > -1;) "string" == typeof(n = a[j][b]) && "=" === n.charAt(1) && (a[j][b] = f[b] + Number(n.charAt(0) + n.substr(2)));
                if (i = a.length - 2, 0 > i) return h[0] = new g(a[0][b], 0, 0, a[-1 > i ? 0 : 1][b]), h;
                for (j = 0; i > j; j++) k = a[j][b], l = a[j + 1][b], h[j] = new g(k, 0, 0, l), e && (m = a[j + 2][b], c[j] = (c[j] || 0) + (l - k) * (l - k), d[j] = (d[j] || 0) + (m - l) * (m - l));
                return h[j] = new g(a[j][b], 0, 0, a[j + 1][b]), h
            },
            l = function(a, b, g, i, l, m) {
                var q, r, s, t, u, v, w, x, n = {},
                    o = [],
                    p = m || a[0];
                l = "string" == typeof l ? "," + l + "," : h, null == b && (b = 1);
                for (r in a[0]) o.push(r);
                if (a.length > 1) {
                    for (x = a[a.length - 1], w = !0, q = o.length; --q > -1;)
                        if (r = o[q], Math.abs(p[r] - x[r]) > .05) {
                            w = !1;
                            break
                        }
                    w && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3])
                }
                for (c.length = d.length = e.length = 0, q = o.length; --q > -1;) r = o[q], f[r] = -1 !== l.indexOf("," + r + ","), n[r] = k(a, r, f[r], m);
                for (q = c.length; --q > -1;) c[q] = Math.sqrt(c[q]), d[q] = Math.sqrt(d[q]);
                if (!i) {
                    for (q = o.length; --q > -1;)
                        if (f[r])
                            for (s = n[o[q]], v = s.length - 1, t = 0; v > t; t++) u = s[t + 1].da / d[t] + s[t].da / c[t], e[t] = (e[t] || 0) + u * u;
                    for (q = e.length; --q > -1;) e[q] = Math.sqrt(e[q])
                }
                for (q = o.length, t = g ? 4 : 1; --q > -1;) r = o[q], s = n[r], j(s, b, g, i, f[r]), w && (s.splice(0, t), s.splice(s.length - t, t));
                return n
            },
            m = function(a, b, c) {
                b = b || "soft";
                var i, j, k, l, m, n, o, p, q, r, s, d = {},
                    e = "cubic" === b ? 3 : 2,
                    f = "soft" === b,
                    h = [];
                if (f && c && (a = [c].concat(a)), null == a || a.length < e + 1) throw "invalid Bezier data";
                for (q in a[0]) h.push(q);
                for (n = h.length; --n > -1;) {
                    for (q = h[n], d[q] = m = [], r = 0, p = a.length, o = 0; p > o; o++) i = null == c ? a[o][q] : "string" == typeof(s = a[o][q]) && "=" === s.charAt(1) ? c[q] + Number(s.charAt(0) + s.substr(2)) : Number(s), f && o > 1 && p - 1 > o && (m[r++] = (i + m[r - 2]) / 2), m[r++] = i;
                    for (p = r - e + 1, r = 0, o = 0; p > o; o += e) i = m[o], j = m[o + 1], k = m[o + 2], l = 2 === e ? 0 : m[o + 3], m[r++] = s = 3 === e ? new g(i, j, k, l) : new g(i, (2 * j + i) / 3, (2 * j + k) / 3, k);
                    m.length = r
                }
                return d
            },
            n = function(a, b, c) {
                for (var f, g, h, i, j, k, l, m, n, o, p, d = 1 / c, e = a.length; --e > -1;)
                    for (o = a[e], h = o.a, i = o.d - h, j = o.c - h, k = o.b - h, f = g = 0, m = 1; c >= m; m++) l = d * m, n = 1 - l, f = g - (g = (l * l * i + 3 * n * (l * j + n * k)) * l), p = e * c + m - 1, b[p] = (b[p] || 0) + f * f
            },
            o = function(a, b) {
                b = b >> 0 || 6;
                var j, k, l, m, c = [],
                    d = [],
                    e = 0,
                    f = 0,
                    g = b - 1,
                    h = [],
                    i = [];
                for (j in a) n(a[j], c, b);
                for (l = c.length, k = 0; l > k; k++) e += Math.sqrt(c[k]), m = k % b, i[m] = e, m === g && (f += e, m = k / b >> 0, h[m] = i, d[m] = f, e = 0, i = []);
                return {
                    length: f,
                    lengths: d,
                    segments: h
                }
            },
            p = window._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                API: 2,
                global: !0,
                init: function(a, b, c) {
                    this._target = a, b instanceof Array && (b = {
                        values: b
                    }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                    var h, i, j, k, n, d = b.values || [],
                        e = {},
                        f = d[0],
                        g = b.autoRotate || c.vars.orientToBezier;
                    this._autoRotate = g ? g instanceof Array ? g : [
                        ["x", "y", "rotation", g === !0 ? 0 : Number(g) || 0]
                    ] : null;
                    for (h in f) this._props.push(h);
                    for (j = this._props.length; --j > -1;) h = this._props[j], this._overwriteProps.push(h), i = this._func[h] = "function" == typeof a[h], e[h] = i ? a[h.indexOf("set") || "function" != typeof a["get" + h.substr(3)] ? h : "get" + h.substr(3)]() : parseFloat(a[h]), n || e[h] !== d[0][h] && (n = e);
                    if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(d, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, n) : m(d, b.type, e), this._segCount = this._beziers[h].length, this._timeRes) {
                        var p = o(this._beziers, this._timeRes);
                        this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (g = this._autoRotate)
                        for (g[0] instanceof Array || (this._autoRotate = g = [g]), j = g.length; --j > -1;)
                            for (k = 0; 3 > k; k++) h = g[j][k], this._func[h] = "function" == typeof a[h] ? a[h.indexOf("set") || "function" != typeof a["get" + h.substr(3)] ? h : "get" + h.substr(3)] : !1;
                    return !0
                },
                set: function(b) {
                    var f, g, h, i, j, k, l, m, n, o, c = this._segCount,
                        d = this._func,
                        e = this._target;
                    if (this._timeRes) {
                        if (n = this._lengths, o = this._curSeg, b *= this._length, h = this._li, b > this._l2 && c - 1 > h) {
                            for (m = c - 1; m > h && (this._l2 = n[++h]) <= b;);
                            this._l1 = n[h - 1], this._li = h, this._curSeg = o = this._segments[h], this._s2 = o[this._s1 = this._si = 0]
                        } else if (b < this._l1 && h > 0) {
                            for (; h > 0 && (this._l1 = n[--h]) >= b;);
                            0 === h && b < this._l1 ? this._l1 = 0 : h++, this._l2 = n[h], this._li = h, this._curSeg = o = this._segments[h], this._s1 = o[(this._si = o.length - 1) - 1] || 0, this._s2 = o[this._si]
                        }
                        if (f = h, b -= this._l1, h = this._si, b > this._s2 && h < o.length - 1) {
                            for (m = o.length - 1; m > h && (this._s2 = o[++h]) <= b;);
                            this._s1 = o[h - 1], this._si = h
                        } else if (b < this._s1 && h > 0) {
                            for (; h > 0 && (this._s1 = o[--h]) >= b;);
                            0 === h && b < this._s1 ? this._s1 = 0 : h++, this._s2 = o[h], this._si = h
                        }
                        k = (h + (b - this._s1) / (this._s2 - this._s1)) * this._prec
                    } else f = 0 > b ? 0 : b >= 1 ? c - 1 : c * b >> 0, k = (b - f * (1 / c)) * c;
                    for (g = 1 - k, h = this._props.length; --h > -1;) i = this._props[h], j = this._beziers[i][f], l = (k * k * j.da + 3 * g * (k * j.ca + g * j.ba)) * k + j.a, this._round[i] && (l = l + (l > 0 ? .5 : -.5) >> 0), d[i] ? e[i](l) : "x" == i ? e.setX(l) : "y" == i ? e.setY(l) : "z" == i ? e.setZ(l) : "angleX" == i ? e.setAngleX(l) : "angleY" == i ? e.setAngleY(l) : "angleZ" == i ? e.setAngleZ(l) : "w" == i ? e.setWidth(l) : "h" == i ? e.setHeight(l) : "alpha" == i ? e.setAlpha(l) : "scale" == i ? e.setScale2(l) : e[i] = l;
                    if (this._autoRotate) {
                        var q, r, s, t, u, v, w, p = this._autoRotate;
                        for (h = p.length; --h > -1;) i = p[h][2], v = p[h][3] || 0, w = p[h][4] === !0 ? 1 : a, j = this._beziers[p[h][0]], q = this._beziers[p[h][1]], j && q && (j = j[f], q = q[f], r = j.a + (j.b - j.a) * k, t = j.b + (j.c - j.b) * k, r += (t - r) * k, t += (j.c + (j.d - j.c) * k - t) * k, s = q.a + (q.b - q.a) * k, u = q.b + (q.c - q.b) * k, s += (u - s) * k, u += (q.c + (q.d - q.c) * k - u) * k, l = Math.atan2(u - s, t - r) * w + v, d[i] ? e[i](l) : e[i] = l)
                    }
                }
            }),
            q = p.prototype;
        p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function(a, b, c) {
            return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
        }, p._cssRegister = function() {
            var a = window._gsDefine.globals.CSSPlugin;
            if (a) {
                var c = a._internals,
                    d = c._parseToProxy,
                    e = c._setPluginRatio,
                    f = c.CSSPropTween;
                c._registerComplexSpecialProp("bezier", {
                    parser: function(a, c, g, h, i, j) {
                        c instanceof Array && (c = {
                            values: c
                        }), j = new p;
                        var o, q, r, k = c.values,
                            l = k.length - 1,
                            m = [],
                            n = {};
                        if (0 > l) return i;
                        for (o = 0; l >= o; o++) r = d(a, k[o], h, i, j, l !== o), m[o] = r.end;
                        for (q in c) n[q] = c[q];
                        return n.values = m, i = new f(a, "bezier", 0, 0, r.pt, 2), i.data = r, i.plugin = j, i.setRatio = e, 0 === n.autoRotate && (n.autoRotate = !0), !n.autoRotate || n.autoRotate instanceof Array || (o = n.autoRotate === !0 ? 0 : Number(n.autoRotate) * b, n.autoRotate = null != r.end.left ? [
                            ["left", "top", "rotation", o, !0]
                        ] : null != r.end.x ? [
                            ["x", "y", "rotation", o, !0]
                        ] : !1), n.autoRotate && (h._transform || h._enableTransforms(!1), r.autoRotate = h._target._gsTransform), j._onInitTween(r.proxy, n, h._tween), i
                    }
                })
            }
        }, q._roundProps = function(a, b) {
            for (var c = this._overwriteProps, d = c.length; --d > -1;)(a[c[d]] || a.bezier || a.bezierThrough) && (this._round[c[d]] = b)
        }, q._kill = function(a) {
            var c, d, b = this._props;
            for (c in this._beziers)
                if (c in a)
                    for (delete this._beziers[c], delete this._func[c], d = b.length; --d > -1;) b[d] === c && b.splice(d, 1);
            return this._super._kill.call(this, a)
        }
    }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
        var d, e, f, g, c = function() {
                a.call(this, "css"), this._overwriteProps.length = 0
            },
            h = {},
            i = c.prototype = new a("css");
        i.constructor = c, c.version = "1.9.7", c.API = 2, c.defaultTransformPerspective = 0, i = "px", c.suffixMap = {
            top: i,
            right: i,
            bottom: i,
            left: i,
            width: i,
            height: i,
            fontSize: i,
            padding: i,
            margin: i,
            perspective: i
        };
        var I, J, K, L, M, N, j = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            k = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            l = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            m = /[^\d\-\.]/g,
            n = /(?:\d|\-|\+|=|#|\.)*/g,
            o = /opacity *= *([^)]*)/,
            p = /opacity:([^;]*)/,
            q = /alpha\(opacity *=.+?\)/i,
            r = /^(rgb|hsl)/,
            s = /([A-Z])/g,
            t = /-([a-z])/gi,
            u = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            v = function(a, b) {
                return b.toUpperCase()
            },
            w = /(?:Left|Right|Width)/i,
            x = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            y = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            z = /,(?=[^\)]*(?:\(|$))/gi,
            A = Math.PI / 180,
            B = 180 / Math.PI,
            C = {},
            D = document,
            E = D.createElement("div"),
            F = D.createElement("img"),
            G = c._internals = {
                _specialProps: h
            },
            H = navigator.userAgent,
            O = function() {
                var c, a = H.indexOf("Android"),
                    b = D.createElement("div");
                return K = -1 !== H.indexOf("Safari") && -1 === H.indexOf("Chrome") && (-1 === a || Number(H.substr(a + 8, 1)) > 3), M = K && Number(H.substr(H.indexOf("Version/") + 8, 1)) < 6, L = -1 !== H.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H), N = parseFloat(RegExp.$1), b.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", c = b.getElementsByTagName("a")[0], c ? /^0.55/.test(c.style.opacity) : !1
            }(),
            P = function(a) {
                return o.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            },
            Q = function(a) {
                window.console && console.log(a)
            },
            R = "",
            S = "",
            T = function(a, b) {
                b = b || E;
                var d, e, c = b.style;
                if (void 0 !== c[a]) return a;
                for (a = a.charAt(0).toUpperCase() + a.substr(1), d = ["O", "Moz", "ms", "Ms", "Webkit"], e = 5; --e > -1 && void 0 === c[d[e] + a];);
                return e >= 0 ? (S = 3 === e ? "ms" : d[e], R = "-" + S.toLowerCase() + "-", S + a) : null
            },
            U = D.defaultView ? D.defaultView.getComputedStyle : function() {},
            V = c.getStyle = function(a, b, c, d, e) {
                var f;
                return O || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || U(a, null)) ? (a = c.getPropertyValue(b.replace(s, "-$1").toLowerCase()), f = a || c.length ? a : c[b]) : a.currentStyle && (c = a.currentStyle, f = c[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : P(a)
            },
            W = function(a, b, c, d, e) {
                if ("px" === d || !d) return c;
                if ("auto" === d || !c) return 0;
                var j, f = w.test(b),
                    g = a,
                    h = E.style,
                    i = 0 > c;
                return i && (c = -c), "%" === d && -1 !== b.indexOf("border") ? j = c / 100 * (f ? a.clientWidth : a.clientHeight) : (h.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;", "%" !== d && g.appendChild ? h[f ? "borderLeftWidth" : "borderTopWidth"] = c + d : (g = a.parentNode || D.body, h[f ? "width" : "height"] = c + d), g.appendChild(E), j = parseFloat(E[f ? "offsetWidth" : "offsetHeight"]), g.removeChild(E), 0 !== j || e || (j = W(a, b, c, d, !0))), i ? -j : j
            },
            X = function(a, b, c) {
                if ("absolute" !== V(a, "position", c)) return 0;
                var d = "left" === b ? "Left" : "Top",
                    e = V(a, "margin" + d, c);
                return a["offset" + d] - (W(a, b, parseFloat(e), e.replace(n, "")) || 0)
            },
            Y = function(a, b) {
                var d, e, c = {};
                if (b = b || U(a, null))
                    if (d = b.length)
                        for (; --d > -1;) c[b[d].replace(t, v)] = b.getPropertyValue(b[d]);
                    else
                        for (d in b) c[d] = b[d];
                else if (b = a.currentStyle || a.style)
                    for (d in b) c[d.replace(t, v)] = b[d];
                return O || (c.opacity = P(a)), e = zb(a, b, !1), c.rotation = e.rotation * B, c.skewX = e.skewX * B, c.scaleX = e.scaleX, c.scaleY = e.scaleY, c.x = e.x, c.y = e.y, yb && (c.z = e.z, c.rotationX = e.rotationX * B, c.rotationY = e.rotationY * B, c.scaleZ = e.scaleZ), c.filters && delete c.filters, c
            },
            Z = function(a, b, c, d, e) {
                var h, i, j, f = {},
                    g = a.style;
                for (i in c) "cssText" !== i && "length" !== i && isNaN(i) && (b[i] !== (h = c[i]) || e && e[i]) && -1 === i.indexOf("Origin") && ("number" == typeof h || "string" == typeof h) && (f[i] = "auto" !== h || "left" !== i && "top" !== i ? "" !== h && "auto" !== h && "none" !== h || "string" != typeof b[i] || "" === b[i].replace(m, "") ? h : 0 : X(a, i), void 0 !== g[i] && (j = new mb(g, i, g[i], j)));
                if (d)
                    for (i in d) "className" !== i && (f[i] = d[i]);
                return {
                    difs: f,
                    firstMPT: j
                }
            },
            $ = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            },
            _ = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            ab = function(a, b, c) {
                var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                    e = $[b],
                    f = e.length;
                for (c = c || U(a, null); --f > -1;) d -= parseFloat(V(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(V(a, "border" + e[f] + "Width", c, !0)) || 0;
                return d
            },
            bb = function(a, b) {
                (null == a || "" === a || "auto" === a || "auto auto" === a) && (a = "0 0");
                var c = a.split(" "),
                    d = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : c[0],
                    e = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : c[1];
                return null == e ? e = "0" : "center" === e && (e = "50%"), ("center" === d || isNaN(parseFloat(d))) && (d = "50%"), b && (b.oxp = -1 !== d.indexOf("%"), b.oyp = -1 !== e.indexOf("%"), b.oxr = "=" === d.charAt(1), b.oyr = "=" === e.charAt(1), b.ox = parseFloat(d.replace(m, "")), b.oy = parseFloat(e.replace(m, ""))), d + " " + e + (c.length > 2 ? " " + c[2] : "")
            },
            cb = function(a, b) {
                return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b)
            },
            db = function(a, b) {
                return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2)) + b : parseFloat(a)
            },
            eb = function(a, b, c, d) {
                var f, g, h, i, e = 1e-6;
                return null == a ? i = b : "number" == typeof a ? i = a * A : (f = 2 * Math.PI, g = a.split("_"), h = Number(g[0].replace(m, "")) * (-1 === a.indexOf("rad") ? A : 1) - ("=" === a.charAt(1) ? 0 : b), g.length && (d && (d[c] = b + h), -1 !== a.indexOf("short") && (h %= f, h !== h % (f / 2) && (h = 0 > h ? h + f : h - f)), -1 !== a.indexOf("_cw") && 0 > h ? h = (h + 9999999999 * f) % f - (0 | h / f) * f : -1 !== a.indexOf("ccw") && h > 0 && (h = (h - 9999999999 * f) % f - (0 | h / f) * f)), i = b + h), e > i && i > -e && (i = 0), i
            },
            fb = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            gb = function(a, b, c) {
                return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 0 | 255 * (1 > 6 * a ? b + 6 * (c - b) * a : .5 > a ? c : 2 > 3 * a ? b + 6 * (c - b) * (2 / 3 - a) : b) + .5
            },
            hb = function(a) {
                var b, c, d, e, f, g;
                return a && "" !== a ? "number" == typeof a ? [a >> 16, 255 & a >> 8, 255 & a] : ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), fb[a] ? fb[a] : "#" === a.charAt(0) ? (4 === a.length && (b = a.charAt(1), c = a.charAt(2), d = a.charAt(3), a = "#" + b + b + c + c + d + d), a = parseInt(a.substr(1), 16), [a >> 16, 255 & a >> 8, 255 & a]) : "hsl" === a.substr(0, 3) ? (a = a.match(j), e = Number(a[0]) % 360 / 360, f = Number(a[1]) / 100, g = Number(a[2]) / 100, c = .5 >= g ? g * (f + 1) : g + f - g * f, b = 2 * g - c, a.length > 3 && (a[3] = Number(a[3])), a[0] = gb(e + 1 / 3, b, c), a[1] = gb(e, b, c), a[2] = gb(e - 1 / 3, b, c), a) : (a = a.match(j) || fb.transparent, a[0] = Number(a[0]), a[1] = Number(a[1]), a[2] = Number(a[2]), a.length > 3 && (a[3] = Number(a[3])), a)) : fb.black
            },
            ib = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (i in fb) ib += "|" + i + "\\b";
        ib = new RegExp(ib + ")", "gi");
        var jb = function(a, b, c, d) {
                if (null == a) return function(a) {
                    return a
                };
                var n, e = b ? (a.match(ib) || [""])[0] : "",
                    f = a.split(e).join("").match(l) || [],
                    g = a.substr(0, a.indexOf(f[0])),
                    h = ")" === a.charAt(a.length - 1) ? ")" : "",
                    i = -1 !== a.indexOf(" ") ? " " : ",",
                    k = f.length,
                    m = k > 0 ? f[0].replace(j, "") : "";
                return k ? n = b ? function(a) {
                    var b, j, o, p;
                    if ("number" == typeof a) a += m;
                    else if (d && z.test(a)) {
                        for (p = a.replace(z, "|").split("|"), o = 0; o < p.length; o++) p[o] = n(p[o]);
                        return p.join(",")
                    }
                    if (b = (a.match(ib) || [e])[0], j = a.split(b).join("").match(l) || [], o = j.length, k > o--)
                        for (; ++o < k;) j[o] = c ? j[0 | (o - 1) / 2] : f[o];
                    return g + j.join(i) + i + b + h + (-1 !== a.indexOf("inset") ? " inset" : "")
                } : function(a) {
                    var b, e, j;
                    if ("number" == typeof a) a += m;
                    else if (d && z.test(a)) {
                        for (e = a.replace(z, "|").split("|"), j = 0; j < e.length; j++) e[j] = n(e[j]);
                        return e.join(",")
                    }
                    if (b = a.match(l) || [], j = b.length, k > j--)
                        for (; ++j < k;) b[j] = c ? b[0 | (j - 1) / 2] : f[j];
                    return g + b.join(i) + h
                } : function(a) {
                    return a
                }
            },
            kb = function(a) {
                return a = a.split(","),
                    function(b, c, d, e, f, g, h) {
                        var j, i = (c + "").split(" ");
                        for (h = {}, j = 0; 4 > j; j++) h[a[j]] = i[j] = i[j] || i[(j - 1) / 2 >> 0];
                        return e.parse(b, h, f, g)
                    }
            },
            mb = (G._setPluginRatio = function(a) {
                this.plugin.setRatio(a);
                for (var f, g, h, i, b = this.data, c = b.proxy, d = b.firstMPT, e = 1e-6; d;) f = c[d.v], d.r ? f = f > 0 ? 0 | f + .5 : 0 | f - .5 : e > f && f > -e && (f = 0), d.t[d.p] = f, d = d._next;
                if (b.autoRotate && (b.autoRotate.rotation = c.rotation), 1 === a)
                    for (d = b.firstMPT; d;) {
                        if (g = d.t, g.type) {
                            if (1 === g.type) {
                                for (i = g.xs0 + g.s + g.xs1, h = 1; h < g.l; h++) i += g["xn" + h] + g["xs" + (h + 1)];
                                g.e = i
                            }
                        } else g.e = g.s + g.xs0;
                        d = d._next
                    }
            }, function(a, b, c, d, e) {
                this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
            }),
            ob = (G._parseToProxy = function(a, b, c, d, e, f) {
                var l, m, n, o, p, g = d,
                    h = {},
                    i = {},
                    j = c._transform,
                    k = C;
                for (c._transform = null, C = b, d = p = c.parse(a, b, d, e), C = k, f && (c._transform = j, g && (g._prev = null, g._prev && (g._prev._next = null))); d && d !== g;) {
                    if (d.type <= 1 && (m = d.p, i[m] = d.s + d.c, h[m] = d.s, f || (o = new mb(d, "s", m, o, d.r), d.c = 0), 1 === d.type))
                        for (l = d.l; --l > 0;) n = "xn" + l, m = d.p + "_" + n, i[m] = d.data[n], h[m] = d[n], f || (o = new mb(d, n, m, o, d.rxp[n]));
                    d = d._next
                }
                return {
                    proxy: h,
                    end: i,
                    firstMPT: o,
                    pt: p
                }
            }, G.CSSPropTween = function(a, b, c, e, f, h, i, j, k, l, m) {
                this.t = a, this.p = b, this.s = c, this.c = e, this.n = i || "css_" + b, a instanceof ob || g.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, d = !0), this.b = void 0 === l ? c : l, this.e = void 0 === m ? c + e : m, f && (this._next = f, f._prev = this)
            }),
            pb = c.parseComplex = function(a, b, c, d, e, f, g, h, i, l) {
                c = c || f || "", g = new ob(a, b, 0, 0, g, l ? 2 : 1, null, !1, h, c, d), d += "";
                var q, s, t, u, v, w, x, y, A, B, C, D, m = c.split(", ").join(",").split(" "),
                    n = d.split(", ").join(",").split(" "),
                    o = m.length,
                    p = I !== !1;
                for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (m = m.join(" ").replace(z, ", ").split(" "), n = n.join(" ").replace(z, ", ").split(" "), o = m.length), o !== n.length && (m = (f || "").split(" "), o = m.length), g.plugin = i, g.setRatio = l, q = 0; o > q; q++)
                    if (u = m[q], v = n[q], y = parseFloat(u), y || 0 === y) g.appendXtra("", y, cb(v, y), v.replace(k, ""), p && -1 !== v.indexOf("px"), !0);
                    else if (e && ("#" === u.charAt(0) || fb[u] || r.test(u))) D = "," === v.charAt(v.length - 1) ? ")," : ")", u = hb(u), v = hb(v), A = u.length + v.length > 6, A && !O && 0 === v[3] ? (g["xs" + g.l] += g.l ? " transparent" : "transparent", g.e = g.e.split(n[q]).join("transparent")) : (O || (A = !1), g.appendXtra(A ? "rgba(" : "rgb(", u[0], v[0] - u[0], ",", !0, !0).appendXtra("", u[1], v[1] - u[1], ",", !0).appendXtra("", u[2], v[2] - u[2], A ? "," : D, !0), A && (u = u.length < 4 ? 1 : u[3], g.appendXtra("", u, (v.length < 4 ? 1 : v[3]) - u, D, !1)));
                else if (w = u.match(j)) {
                    if (x = v.match(k), !x || x.length !== w.length) return g;
                    for (t = 0, s = 0; s < w.length; s++) C = w[s], B = u.indexOf(C, t), g.appendXtra(u.substr(t, B - t), Number(C), cb(x[s], C), "", p && "px" === u.substr(B + C.length, 2), 0 === s), t = B + C.length;
                    g["xs" + g.l] += u.substr(t)
                } else g["xs" + g.l] += g.l ? " " + u : u; if (-1 !== d.indexOf("=") && g.data) {
                    for (D = g.xs0 + g.data.s, q = 1; q < g.l; q++) D += g["xs" + q] + g.data["xn" + q];
                    g.e = D + g["xs" + q]
                }
                return g.l || (g.type = -1, g.xs0 = g.e), g.xfirst || g
            },
            qb = 9;
        for (i = ob.prototype, i.l = i.pr = 0; --qb > 0;) i["xn" + qb] = 0, i["xs" + qb] = "";
        i.xs0 = "", i._next = i._prev = i.xfirst = i.data = i.plugin = i.setRatio = i.rxp = null, i.appendXtra = function(a, b, c, d, e, f) {
            var g = this,
                h = g.l;
            return g["xs" + h] += f && h ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ob(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                s: b + c
            }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
        };
        var rb = function(a, b) {
                b = b || {}, this.p = b.prefix ? T(a) || a : a, h[a] = h[this.p] = this, this.format = b.formatter || jb(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
            },
            sb = G._registerComplexSpecialProp = function(a, b, c) {
                "object" != typeof b && (b = {
                    parser: c
                });
                var f, g, d = a.split(","),
                    e = b.defaultValue;
                for (c = c || [e], f = 0; f < d.length; f++) b.prefix = 0 === f && b.prefix, b.defaultValue = c[f] || e, g = new rb(d[f], b)
            },
            tb = function(a) {
                if (!h[a]) {
                    var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                    sb(a, {
                        parser: function(a, c, d, e, f, g, i) {
                            var j = (window.GreenSockGlobals || window).com.greensock.plugins[b];
                            return j ? (j._cssRegister(), h[d].parse(a, c, d, e, f, g, i)) : (Q("Error: " + b + " js file not loaded."), f)
                        }
                    })
                }
            };
        i = rb.prototype, i.parseComplex = function(a, b, c, d, e, f) {
            var h, i, j, k, l, m, g = this.keyword;
            if (this.multi && (z.test(c) || z.test(b) ? (i = b.replace(z, "|").split("|"), j = c.replace(z, "|").split("|")) : g && (i = [b], j = [c])), j) {
                for (k = j.length > i.length ? j.length : i.length, h = 0; k > h; h++) b = i[h] = i[h] || this.dflt, c = j[h] = j[h] || this.dflt, g && (l = b.indexOf(g), m = c.indexOf(g), l !== m && (c = -1 === m ? j : i, c[h] += " " + g));
                b = i.join(", "), c = j.join(", ")
            }
            return pb(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
        }, i.parse = function(a, b, c, d, e, g) {
            return this.parseComplex(a.style, this.format(V(a, this.p, f, !1, this.dflt)), this.format(b), e, g)
        }, c.registerSpecialProp = function(a, b, c) {
            sb(a, {
                parser: function(a, d, e, f, g, h) {
                    var j = new ob(a, e, 0, 0, g, 2, e, !1, c);
                    return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j
                },
                priority: c
            })
        };
        var ub = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
            vb = T("transform"),
            wb = R + "transform",
            xb = T("transformOrigin"),
            yb = null !== T("perspective"),
            zb = function(a, b, d) {
                var l, m, n, o, p, q, r, s, t, u, v, w, y, e = d ? a._gsTransform || {
                        skewY: 0
                    } : {
                        skewY: 0
                    },
                    f = e.scaleX < 0,
                    g = 2e-5,
                    h = 1e5,
                    i = -Math.PI + 1e-4,
                    j = Math.PI - 1e-4,
                    k = yb ? parseFloat(V(a, xb, b, !1, "0 0 0").split(" ")[2]) || e.zOrigin || 0 : 0;
                if (vb) l = V(a, wb, b, !0);
                else if (a.currentStyle)
                    if (l = a.currentStyle.filter.match(x), l && 4 === l.length) l = [l[0].substr(4), Number(l[2].substr(4)), Number(l[1].substr(4)), l[3].substr(4), e.x || 0, e.y || 0].join(",");
                    else {
                        if (null != e.x) return e;
                        l = ""
                    }
                for (m = (l || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], n = m.length; --n > -1;) o = Number(m[n]), m[n] = (p = o - (o |= 0)) ? (0 | p * h + (0 > p ? -.5 : .5)) / h + o : o;
                if (16 === m.length) {
                    var z = m[8],
                        A = m[9],
                        B = m[10],
                        C = m[12],
                        D = m[13],
                        E = m[14];
                    if (e.zOrigin && (E = -e.zOrigin, C = z * E - m[12], D = A * E - m[13], E = B * E + e.zOrigin - m[14]), !d || null == e.rotationX) {
                        var Q, R, S, T, U, W, X, F = m[0],
                            G = m[1],
                            H = m[2],
                            I = m[3],
                            J = m[4],
                            K = m[5],
                            L = m[6],
                            M = m[7],
                            N = m[11],
                            O = e.rotationX = Math.atan2(L, B),
                            P = i > O || O > j;
                        O && (T = Math.cos(-O), U = Math.sin(-O), Q = J * T + z * U, R = K * T + A * U, S = L * T + B * U, z = J * -U + z * T, A = K * -U + A * T, B = L * -U + B * T, N = M * -U + N * T, J = Q, K = R, L = S), O = e.rotationY = Math.atan2(z, F), O && (W = i > O || O > j, T = Math.cos(-O), U = Math.sin(-O), Q = F * T - z * U, R = G * T - A * U, S = H * T - B * U, A = G * U + A * T, B = H * U + B * T, N = I * U + N * T, F = Q, G = R, H = S), O = e.rotation = Math.atan2(G, K), O && (X = i > O || O > j, T = Math.cos(-O), U = Math.sin(-O), F = F * T + J * U, R = G * T + K * U, K = G * -U + K * T, L = H * -U + L * T, G = R), X && P ? e.rotation = e.rotationX = 0 : X && W ? e.rotation = e.rotationY = 0 : W && P && (e.rotationY = e.rotationX = 0), e.scaleX = (0 | Math.sqrt(F * F + G * G) * h + .5) / h, e.scaleY = (0 | Math.sqrt(K * K + A * A) * h + .5) / h, e.scaleZ = (0 | Math.sqrt(L * L + B * B) * h + .5) / h, e.skewX = 0, e.perspective = N ? 1 / (0 > N ? -N : N) : 0, e.x = C, e.y = D, e.z = E
                    }
                } else if (!(yb && 0 !== m.length && e.x === m[4] && e.y === m[5] && (e.rotationX || e.rotationY) || void 0 !== e.x && "none" === V(a, "display", b))) {
                    var Y = m.length >= 6,
                        Z = Y ? m[0] : 1,
                        $ = m[1] || 0,
                        _ = m[2] || 0,
                        ab = Y ? m[3] : 1;
                    e.x = m[4] || 0, e.y = m[5] || 0, q = Math.sqrt(Z * Z + $ * $), r = Math.sqrt(ab * ab + _ * _), s = Z || $ ? Math.atan2($, Z) : e.rotation || 0, t = _ || ab ? Math.atan2(_, ab) + s : e.skewX || 0, u = q - Math.abs(e.scaleX || 0), v = r - Math.abs(e.scaleY || 0), Math.abs(t) > Math.PI / 2 && Math.abs(t) < 1.5 * Math.PI && (f ? (q *= -1, t += 0 >= s ? Math.PI : -Math.PI, s += 0 >= s ? Math.PI : -Math.PI) : (r *= -1, t += 0 >= t ? Math.PI : -Math.PI)), w = (s - e.rotation) % Math.PI, y = (t - e.skewX) % Math.PI, (void 0 === e.skewX || u > g || -g > u || v > g || -g > v || w > i && j > w && w * h | !1 || y > i && j > y && y * h | !1) && (e.scaleX = q, e.scaleY = r, e.rotation = s, e.skewX = t), yb && (e.rotationX = e.rotationY = e.z = 0, e.perspective = parseFloat(c.defaultTransformPerspective) || 0, e.scaleZ = 1)
                }
                e.zOrigin = k;
                for (n in e) e[n] < g && e[n] > -g && (e[n] = 0);
                return d && (a._gsTransform = e), e
            },
            Ab = function(a) {
                var l, m, b = this.data,
                    c = -b.rotation,
                    d = c + b.skewX,
                    e = 1e5,
                    f = (0 | Math.cos(c) * b.scaleX * e) / e,
                    g = (0 | Math.sin(c) * b.scaleX * e) / e,
                    h = (0 | Math.sin(d) * -b.scaleY * e) / e,
                    i = (0 | Math.cos(d) * b.scaleY * e) / e,
                    j = this.t.style,
                    k = this.t.currentStyle;
                if (k) {
                    m = g, g = -h, h = -m, l = k.filter, j.filter = "";
                    var v, w, p = this.t.offsetWidth,
                        q = this.t.offsetHeight,
                        r = "absolute" !== k.position,
                        s = "progid:DXImageTransform.Microsoft.Matrix(M11=" + f + ", M12=" + g + ", M21=" + h + ", M22=" + i,
                        t = b.x,
                        u = b.y;
                    if (null != b.ox && (v = (b.oxp ? .01 * p * b.ox : b.ox) - p / 2, w = (b.oyp ? .01 * q * b.oy : b.oy) - q / 2, t += v - (v * f + w * g), u += w - (v * h + w * i)), r) v = p / 2, w = q / 2, s += ", Dx=" + (v - (v * f + w * g) + t) + ", Dy=" + (w - (v * h + w * i) + u) + ")";
                    else {
                        var z, A, B, x = 8 > N ? 1 : -1;
                        for (v = b.ieOffsetX || 0, w = b.ieOffsetY || 0, b.ieOffsetX = Math.round((p - ((0 > f ? -f : f) * p + (0 > g ? -g : g) * q)) / 2 + t), b.ieOffsetY = Math.round((q - ((0 > i ? -i : i) * q + (0 > h ? -h : h) * p)) / 2 + u), qb = 0; 4 > qb; qb++) A = _[qb], z = k[A], m = -1 !== z.indexOf("px") ? parseFloat(z) : W(this.t, A, parseFloat(z), z.replace(n, "")) || 0, B = m !== b[A] ? 2 > qb ? -b.ieOffsetX : -b.ieOffsetY : 2 > qb ? v - b.ieOffsetX : w - b.ieOffsetY, j[A] = (b[A] = Math.round(m - B * (0 === qb || 2 === qb ? 1 : x))) + "px";
                        s += ", sizingMethod='auto expand')"
                    }
                    j.filter = -1 !== l.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.replace(y, s) : s + " " + l, (0 === a || 1 === a) && 1 === f && 0 === g && 0 === h && 1 === i && (r && -1 === s.indexOf("Dx=0, Dy=0") || o.test(l) && 100 !== parseFloat(RegExp.$1) || -1 === l.indexOf("gradient(") && j.removeAttribute("filter"))
                }
            },
            Bb = function() {
                var w, x, y, z, A, B, C, D, E, b = this.data,
                    c = this.t.style,
                    d = b.perspective,
                    e = b.scaleX,
                    f = 0,
                    g = 0,
                    h = 0,
                    i = 0,
                    j = b.scaleY,
                    k = 0,
                    l = 0,
                    m = 0,
                    n = 0,
                    o = b.scaleZ,
                    p = 0,
                    q = 0,
                    r = 0,
                    s = d ? -1 / d : 0,
                    t = b.rotation,
                    u = b.zOrigin,
                    v = 1e5;
                L && (C = c.top ? "top" : c.bottom ? "bottom" : parseFloat(V(this.t, "top", null, !1)) ? "bottom" : "top", y = V(this.t, C, null, !1), D = parseFloat(y) || 0, E = y.substr((D + "").length) || "px", b._ffFix = !b._ffFix, c[C] = (b._ffFix ? D + .05 : D - .05) + E), (t || b.skewX) && (y = e * Math.cos(t), z = j * Math.sin(t), t -= b.skewX, f = e * -Math.sin(t), j *= Math.cos(t), e = y, i = z), t = b.rotationY, t && (w = Math.cos(t), x = Math.sin(t), y = e * w, z = i * w, A = o * -x, B = s * -x, g = e * x, k = i * x, o *= w, s *= w, e = y, i = z, m = A, q = B), t = b.rotationX, t && (w = Math.cos(t), x = Math.sin(t), y = f * w + g * x, z = j * w + k * x, A = n * w + o * x, B = r * w + s * x, g = f * -x + g * w, k = j * -x + k * w, o = n * -x + o * w, s = r * -x + s * w, f = y, j = z, n = A, r = B), u && (p -= u, h = g * p, l = k * p, p = o * p + u), h = (y = (h += b.x) - (h |= 0)) ? (0 | y * v + (0 > y ? -.5 : .5)) / v + h : h, l = (y = (l += b.y) - (l |= 0)) ? (0 | y * v + (0 > y ? -.5 : .5)) / v + l : l, p = (y = (p += b.z) - (p |= 0)) ? (0 | y * v + (0 > y ? -.5 : .5)) / v + p : p, c[vb] = "matrix3d(" + [(0 | e * v) / v, (0 | i * v) / v, (0 | m * v) / v, (0 | q * v) / v, (0 | f * v) / v, (0 | j * v) / v, (0 | n * v) / v, (0 | r * v) / v, (0 | g * v) / v, (0 | k * v) / v, (0 | o * v) / v, (0 | s * v) / v, h, l, p, d ? 1 + -p / d : 1].join(",") + ")"
            },
            Cb = function() {
                var e, f, g, h, i, j, k, l, m, b = this.data,
                    c = this.t,
                    d = c.style;
                L && (e = d.top ? "top" : d.bottom ? "bottom" : parseFloat(V(c, "top", null, !1)) ? "bottom" : "top", f = V(c, e, null, !1), g = parseFloat(f) || 0, h = f.substr((g + "").length) || "px", b._ffFix = !b._ffFix, d[e] = (b._ffFix ? g + .05 : g - .05) + h), b.rotation || b.skewX ? (i = b.rotation, j = i - b.skewX, k = 1e5, l = b.scaleX * k, m = b.scaleY * k, d[vb] = "matrix(" + (0 | Math.cos(i) * l) / k + "," + (0 | Math.sin(i) * l) / k + "," + (0 | Math.sin(j) * -m) / k + "," + (0 | Math.cos(j) * m) / k + "," + b.x + "," + b.y + ")") : d[vb] = "matrix(" + b.scaleX + ",0,0," + b.scaleY + "," + b.x + "," + b.y + ")"
            };
        sb("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation", {
            parser: function(a, b, c, d, e, g, h) {
                if (d._transform) return e;
                var o, p, q, r, s, t, u, i = d._transform = zb(a, f, !0),
                    j = a.style,
                    k = 1e-6,
                    l = ub.length,
                    m = h,
                    n = {};
                if ("string" == typeof m.transform && vb) q = j.cssText, j[vb] = m.transform, j.display = "block", o = zb(a, null, !1), j.cssText = q;
                else if ("object" == typeof m) {
                    if (o = {
                        scaleX: db(null != m.scaleX ? m.scaleX : m.scale, i.scaleX),
                        scaleY: db(null != m.scaleY ? m.scaleY : m.scale, i.scaleY),
                        scaleZ: db(null != m.scaleZ ? m.scaleZ : m.scale, i.scaleZ),
                        x: db(m.x, i.x),
                        y: db(m.y, i.y),
                        z: db(m.z, i.z),
                        perspective: db(m.transformPerspective, i.perspective)
                    }, u = m.directionalRotation, null != u)
                        if ("object" == typeof u)
                            for (q in u) m[q] = u[q];
                        else m.rotation = u;
                    o.rotation = eb("rotation" in m ? m.rotation : "shortRotation" in m ? m.shortRotation + "_short" : "rotationZ" in m ? m.rotationZ : i.rotation * B, i.rotation, "rotation", n), yb && (o.rotationX = eb("rotationX" in m ? m.rotationX : "shortRotationX" in m ? m.shortRotationX + "_short" : i.rotationX * B || 0, i.rotationX, "rotationX", n), o.rotationY = eb("rotationY" in m ? m.rotationY : "shortRotationY" in m ? m.shortRotationY + "_short" : i.rotationY * B || 0, i.rotationY, "rotationY", n)), o.skewX = null == m.skewX ? i.skewX : eb(m.skewX, i.skewX), o.skewY = null == m.skewY ? i.skewY : eb(m.skewY, i.skewY), (p = o.skewY - i.skewY) && (o.skewX += p, o.rotation += p)
                }
                for (s = i.z || i.rotationX || i.rotationY || o.z || o.rotationX || o.rotationY || o.perspective, s || null == m.scale || (o.scaleZ = 1); --l > -1;) c = ub[l], r = o[c] - i[c], (r > k || -k > r || null != C[c]) && (t = !0, e = new ob(i, c, i[c], r, e), c in n && (e.e = n[c]), e.xs0 = 0, e.plugin = g, d._overwriteProps.push(e.n));
                return r = m.transformOrigin, (r || yb && s && i.zOrigin) && (vb ? (t = !0, r = (r || V(a, c, f, !1, "50% 50%")) + "", c = xb, e = new ob(j, c, 0, 0, e, -1, "css_transformOrigin"), e.b = j[c], e.plugin = g, yb ? (q = i.zOrigin, r = r.split(" "), i.zOrigin = (r.length > 2 ? parseFloat(r[2]) : q) || 0, e.xs0 = e.e = j[c] = r[0] + " " + (r[1] || "50%") + " 0px", e = new ob(i, "zOrigin", 0, 0, e, -1, e.n), e.b = q, e.xs0 = e.e = i.zOrigin) : e.xs0 = e.e = j[c] = r) : bb(r + "", i)), t && (d._transformType = s || 3 === this._transformType ? 3 : 2), e
            },
            prefix: !0
        }), sb("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), sb("borderRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, d, g) {
                b = this.format(b);
                var k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, i = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    j = a.style;
                for (s = parseFloat(a.offsetWidth), t = parseFloat(a.offsetHeight), k = b.split(" "), l = 0; l < i.length; l++) this.p.indexOf("border") && (i[l] = T(i[l])), o = n = V(a, i[l], f, !1, "0px"), -1 !== o.indexOf(" ") && (n = o.split(" "), o = n[0], n = n[1]), p = m = k[l], q = parseFloat(o), v = o.substr((q + "").length), w = "=" === p.charAt(1), w ? (r = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), r *= parseFloat(p), u = p.substr((r + "").length - (0 > r ? 1 : 0)) || "") : (r = parseFloat(p), u = p.substr((r + "").length)), "" === u && (u = e[c] || v), u !== v && (x = W(a, "borderLeft", q, v), y = W(a, "borderTop", q, v), "%" === u ? (o = 100 * (x / s) + "%", n = 100 * (y / t) + "%") : "em" === u ? (z = W(a, "borderLeft", 1, "em"), o = x / z + "em", n = y / z + "em") : (o = x + "px", n = y + "px"), w && (p = parseFloat(o) + r + u, m = parseFloat(n) + r + u)), g = pb(j, i[l], o + " " + n, p + " " + m, !1, "0px", g);
                return g
            },
            prefix: !0,
            formatter: jb("0px 0px 0px 0px", !1, !0)
        }), sb("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(a, b, c, d, e, g) {
                var l, m, n, o, p, q, h = "background-position",
                    i = f || U(a, null),
                    j = this.format((i ? N ? i.getPropertyValue(h + "-x") + " " + i.getPropertyValue(h + "-y") : i.getPropertyValue(h) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                    k = this.format(b);
                if (-1 !== j.indexOf("%") != (-1 !== k.indexOf("%")) && (q = V(a, "backgroundImage").replace(u, ""), q && "none" !== q)) {
                    for (l = j.split(" "), m = k.split(" "), F.setAttribute("src", q), n = 2; --n > -1;) j = l[n], o = -1 !== j.indexOf("%"), o !== (-1 !== m[n].indexOf("%")) && (p = 0 === n ? a.offsetWidth - F.width : a.offsetHeight - F.height, l[n] = o ? parseFloat(j) / 100 * p + "px" : 100 * (parseFloat(j) / p) + "%");
                    j = l.join(" ")
                }
                return this.parseComplex(a.style, j, k, e, g)
            },
            formatter: bb
        }), sb("backgroundSize", {
            defaultValue: "0 0",
            formatter: bb
        }), sb("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), sb("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), sb("transformStyle", {
            prefix: !0
        }), sb("backfaceVisibility", {
            prefix: !0
        }), sb("margin", {
            parser: kb("marginTop,marginRight,marginBottom,marginLeft")
        }), sb("padding", {
            parser: kb("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), sb("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(a, b, c, d, e, g) {
                var h, i, j;
                return 9 > N ? (i = a.currentStyle, j = 8 > N ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(V(a, this.p, f, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, e, g)
            }
        }), sb("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), sb("autoRound,strictUnits", {
            parser: function(a, b, c, d, e) {
                return e
            }
        }), sb("border", {
            defaultValue: "0px solid #000",
            parser: function(a, b, c, d, e, g) {
                return this.parseComplex(a.style, this.format(V(a, "borderTopWidth", f, !1, "0px") + " " + V(a, "borderTopStyle", f, !1, "solid") + " " + V(a, "borderTopColor", f, !1, "#000")), this.format(b), e, g)
            },
            color: !0,
            formatter: function(a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(ib) || ["#000"])[0]
            }
        }), sb("float,cssFloat,styleFloat", {
            parser: function(a, b, c, d, e) {
                var g = a.style,
                    h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                return new ob(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
            }
        });
        var Db = function(a) {
            var e, b = this.t,
                c = b.filter,
                d = 0 | this.s + this.c * a;
            100 === d && (-1 === c.indexOf("atrix(") && -1 === c.indexOf("radient(") ? (b.removeAttribute("filter"), e = !V(this.data, "filter")) : (b.filter = c.replace(q, ""), e = !0)), e || (this.xn1 && (b.filter = c = c || "alpha(opacity=100)"), -1 === c.indexOf("opacity") ? b.filter += " alpha(opacity=" + d + ")" : b.filter = c.replace(o, "opacity=" + d))
        };
        sb("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(a, b, c, d, e, g) {
                var j, h = parseFloat(V(a, "opacity", f, !1, "1")),
                    i = a.style;
                return b = parseFloat(b), "autoAlpha" === c && (j = V(a, "visibility", f), 1 === h && "hidden" === j && 0 !== b && (h = 0), e = new ob(i, "visibility", 0, 0, e, -1, null, !1, 0, 0 !== h ? "visible" : "hidden", 0 === b ? "hidden" : "visible"), e.xs0 = "visible", d._overwriteProps.push(e.n)), O ? e = new ob(i, "opacity", h, b - h, e) : (e = new ob(i, "opacity", 100 * h, 100 * (b - h), e), e.xn1 = "autoAlpha" === c ? 1 : 0, i.zoom = 1, e.type = 2, e.b = "alpha(opacity=" + e.s + ")", e.e = "alpha(opacity=" + (e.s + e.c) + ")", e.data = a, e.plugin = g, e.setRatio = Db), e
            }
        });
        var Eb = function(a, b) {
                b && (a.removeProperty ? a.removeProperty(b.replace(s, "-$1").toLowerCase()) : a.removeAttribute(b))
            },
            Fb = function(a) {
                if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                    this.t.className = 0 === a ? this.b : this.e;
                    for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Eb(c, b.p), b = b._next;
                    1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.className !== this.e && (this.t.className = this.e)
            };
        sb("className", {
            parser: function(a, b, c, e, g, h, i) {
                var l, m, n, o, p, j = a.className,
                    k = a.style.cssText;
                if (g = e._classNamePT = new ob(a, c, 0, 0, g, 2), g.setRatio = Fb, g.pr = -11, d = !0, g.b = j, m = Y(a, f), n = a._gsClassPT) {
                    for (o = {}, p = n.data; p;) o[p.p] = 1, p = p._next;
                    n.setRatio(1)
                }
                return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : j.replace(new RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), e._tween._duration && (a.className = g.e, l = Z(a, m, Y(a), i, o), a.className = j, g.data = l.firstMPT, a.style.cssText = k, g = g.xfirst = e.parse(a, l.difs, g, h)), g
            }
        });
        var Gb = function(a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration)
                for (var g, b = "all" === this.e, c = this.t.style, d = b ? c.cssText.split(";") : this.e.split(","), e = d.length, f = h.transform.parse; --e > -1;) g = d[e], b && (g = g.substr(0, g.indexOf(":")).split(" ").join("")), h[g] && (g = h[g].parse === f ? vb : h[g].p), Eb(c, g)
        };
        for (sb("clearProps", {
            parser: function(a, b, c, e, f) {
                return f = new ob(a, c, 0, 0, f, 2), f.setRatio = Gb, f.e = b, f.pr = -10, f.data = e._tween, d = !0, f
            }
        }), i = "bezier,throwProps,physicsProps,physics2D".split(","), qb = i.length; qb--;) tb(i[qb]);
        i = c.prototype, i._firstPT = null, i._onInitTween = function(a, b, h) {
            if (!a.nodeType) return !1;
            this._target = a, this._tween = h, this._vars = b, I = b.autoRound, d = !1, e = b.suffixMap || c.suffixMap, f = U(a, ""), g = this._overwriteProps;
            var j, k, l, m, n, o, q, r, s, i = a.style;
            if (J && "" === i.zIndex && (j = V(a, "zIndex", f), ("auto" === j || "" === j) && (i.zIndex = 0)), "string" == typeof b && (m = i.cssText, j = Y(a, f), i.cssText = m + ";" + b, j = Z(a, j, Y(a)).difs, !O && p.test(b) && (j.opacity = parseFloat(RegExp.$1)), b = j, i.cssText = m), this._firstPT = k = this.parse(a, b, null), this._transformType) {
                for (s = 3 === this._transformType, vb ? K && (J = !0, "" === i.zIndex && (q = V(a, "zIndex", f), ("auto" === q || "" === q) && (i.zIndex = 0)), M && (i.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (s ? "visible" : "hidden"))) : i.zoom = 1, l = k; l && l._next;) l = l._next;
                r = new ob(a, "transform", 0, 0, null, 2), this._linkCSSP(r, null, l), r.setRatio = s && yb ? Bb : vb ? Cb : Ab, r.data = this._transform || zb(a, f, !0), g.pop()
            }
            if (d) {
                for (; k;) {
                    for (o = k._next, l = m; l && l.pr > k.pr;) l = l._next;
                    (k._prev = l ? l._prev : n) ? k._prev._next = k : m = k, (k._next = l) ? l._prev = k : n = k, k = o
                }
                this._firstPT = m
            }
            return !0
        }, i.parse = function(a, b, c, d) {
            var i, j, k, l, m, o, p, q, s, t, g = a.style;
            for (i in b) o = b[i], j = h[i], j ? c = j.parse(a, o, i, this, c, d, b) : (m = V(a, i, f) + "", s = "string" == typeof o, "color" === i || "fill" === i || "stroke" === i || -1 !== i.indexOf("Color") || s && r.test(o) ? (s || (o = hb(o), o = (o.length > 3 ? "rgba(" : "rgb(") + o.join(",") + ")"), c = pb(g, i, m, o, !0, "transparent", c, 0, d)) : !s || -1 === o.indexOf(" ") && -1 === o.indexOf(",") ? (k = parseFloat(m), p = k || 0 === k ? m.substr((k + "").length) : "", ("" === m || "auto" === m) && ("width" === i || "height" === i ? (k = ab(a, i, f), p = "px") : "left" === i || "top" === i ? (k = X(a, i, f), p = "px") : (k = "opacity" !== i ? 0 : 1, p = "")), t = s && "=" === o.charAt(1), t ? (l = parseInt(o.charAt(0) + "1", 10), o = o.substr(2), l *= parseFloat(o), q = o.replace(n, "")) : (l = parseFloat(o), q = s ? o.substr((l + "").length) || "" : ""), "" === q && (q = e[i] || p), o = l || 0 === l ? (t ? l + k : l) + q : b[i], p !== q && "" !== q && (l || 0 === l) && (k || 0 === k) && (k = W(a, i, k, p), "%" === q ? (k /= W(a, i, 100, "%") / 100, k > 100 && (k = 100), b.strictUnits !== !0 && (m = k + "%")) : "em" === q ? k /= W(a, i, 1, "em") : (l = W(a, i, l, q), q = "px"), t && (l || 0 === l) && (o = l + k + q)), t && (l += k), !k && 0 !== k || !l && 0 !== l ? void 0 !== g[i] && (o || "NaN" != o + "" && null != o) ? (c = new ob(g, i, l || k || 0, 0, c, -1, "css_" + i, !1, 0, m, o), c.xs0 = "none" !== o || "display" !== i && -1 === i.indexOf("Style") ? o : m) : Q("invalid " + i + " tween value: " + b[i]) : (c = new ob(g, i, k, l - k, c, 0, "css_" + i, I !== !1 && ("px" === q || "zIndex" === i), 0, m, o), c.xs0 = q)) : c = pb(g, i, m, o, !0, null, c, 0, d)), d && c && !c.plugin && (c.plugin = d);
            return c
        }, i.setRatio = function(a) {
            var d, e, f, b = this._firstPT,
                c = 1e-6;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; b;) {
                        if (d = b.c * a + b.s, b.r ? d = d > 0 ? 0 | d + .5 : 0 | d - .5 : c > d && d > -c && (d = 0), b.type)
                            if (1 === b.type)
                                if (f = b.l, 2 === f) b.t[b.p] = b.xs0 + d + b.xs1 + b.xn1 + b.xs2;
                                else if (3 === f) b.t[b.p] = b.xs0 + d + b.xs1 + b.xn1 + b.xs2 + b.xn2 + b.xs3;
                        else if (4 === f) b.t[b.p] = b.xs0 + d + b.xs1 + b.xn1 + b.xs2 + b.xn2 + b.xs3 + b.xn3 + b.xs4;
                        else if (5 === f) b.t[b.p] = b.xs0 + d + b.xs1 + b.xn1 + b.xs2 + b.xn2 + b.xs3 + b.xn3 + b.xs4 + b.xn4 + b.xs5;
                        else {
                            for (e = b.xs0 + d + b.xs1, f = 1; f < b.l; f++) e += b["xn" + f] + b["xs" + (f + 1)];
                            b.t[b.p] = e
                        } else -1 === b.type ? b.t[b.p] = b.xs0 : b.setRatio && b.setRatio(a);
                        else b.t[b.p] = d + b.xs0;
                        b = b._next
                    } else
                        for (; b;) 2 !== b.type ? b.t[b.p] = b.b : b.setRatio(a), b = b._next;
                else
                    for (; b;) 2 !== b.type ? b.t[b.p] = b.e : b.setRatio(a), b = b._next
        }, i._enableTransforms = function(a) {
            this._transformType = a || 3 === this._transformType ? 3 : 2
        }, i._linkCSSP = function(a, b, c, d) {
            return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next), a._next = b, a._prev = c), a
        }, i._kill = function(b) {
            var d, e, f, c = b;
            if (b.css_autoAlpha || b.css_alpha) {
                c = {};
                for (e in b) c[e] = b[e];
                c.css_opacity = 1, c.css_autoAlpha && (c.css_visibility = 1)
            }
            return b.css_className && (d = this._classNamePT) && (f = d.xfirst, f && f._prev ? this._linkCSSP(f._prev, d._next, f._prev._prev) : f === this._firstPT && (this._firstPT = d._next), d._next && this._linkCSSP(d._next, d._next._next, f._prev), this._classNamePT = null), a.prototype._kill.call(this, c)
        };
        var Hb = function(a, b, c) {
            var d, e, f, g;
            if (a.slice)
                for (e = a.length; --e > -1;) Hb(a[e], b, c);
            else
                for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(Y(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Hb(f, b, c)
        };
        return c.cascadeTo = function(a, c, d) {
            var k, l, m, e = b.to(a, c, d),
                f = [e],
                g = [],
                h = [],
                i = [],
                j = b._internals.reservedProps;
            for (a = e._targets || e.target, Hb(a, g, i), e.render(c, !0), Hb(a, h), e.render(0, !0), e._enabled(!0), k = i.length; --k > -1;)
                if (l = Z(i[k], g[k], h[k]), l.firstMPT) {
                    l = l.difs;
                    for (m in d) j[m] && (l[m] = d[m]);
                    f.push(b.to(i[k], c, l))
                }
            return f
        }, a.activate([c]), c
    }, !0),
    function() {
        var a = window._gsDefine.plugin({
                propName: "roundProps",
                priority: -1,
                API: 2,
                init: function(a, b, c) {
                    return this._tween = c, !0
                }
            }),
            b = a.prototype;
        b._onInitAllProps = function() {
            for (var f, g, h, a = this._tween, b = a.vars.roundProps instanceof Array ? a.vars.roundProps : a.vars.roundProps.split(","), c = b.length, d = {}, e = a._propLookup.roundProps; --c > -1;) d[b[c]] = 1;
            for (c = b.length; --c > -1;)
                for (f = b[c], g = a._firstPT; g;) h = g._next, g.pg ? g.t._roundProps(d, !0) : g.n === f && (this._add(g.t, f, g.s, g.c), h && (h._prev = g._prev), g._prev ? g._prev._next = h : a._firstPT === g && (a._firstPT = h), g._next = g._prev = null, a._propLookup[f] = e), g = h;
            return !1
        }, b._add = function(a, b, c, d) {
            this._addTween(a, b, c, c + d, b, !0), this._overwriteProps.push(b)
        }
    }(), window._gsDefine.plugin({
        propName: "attr",
        API: 2,
        init: function(a, b) {
            var d;
            if ("function" != typeof a.setAttribute) return !1;
            this._target = a, this._proxy = {};
            for (d in b) this._addTween(this._proxy, d, parseFloat(a.getAttribute(d)), b[d], d), this._overwriteProps.push(d);
            return !0
        },
        set: function(a) {
            this._super.setRatio.call(this, a);
            for (var d, b = this._overwriteProps, c = b.length; --c > -1;) d = b[c], this._target.setAttribute(d, this._proxy[d] + "")
        }
    }), window._gsDefine.plugin({
        propName: "directionalRotation",
        API: 2,
        init: function(a, b) {
            "object" != typeof b && (b = {
                rotation: b
            }), this.finals = {};
            var f, g, h, i, j, k, d = b.useRadians === !0 ? 2 * Math.PI : 360,
                e = 1e-6;
            for (f in b) "useRadians" !== f && (k = (b[f] + "").split("_"), g = k[0], h = parseFloat("function" != typeof a[f] ? a[f] : a[f.indexOf("set") || "function" != typeof a["get" + f.substr(3)] ? f : "get" + f.substr(3)]()), i = this.finals[f] = "string" == typeof g && "=" === g.charAt(1) ? h + parseInt(g.charAt(0) + "1", 10) * Number(g.substr(2)) : Number(g) || 0, j = i - h, k.length && (g = k.join("_"), -1 !== g.indexOf("short") && (j %= d, j !== j % (d / 2) && (j = 0 > j ? j + d : j - d)), -1 !== g.indexOf("_cw") && 0 > j ? j = (j + 9999999999 * d) % d - (0 | j / d) * d : -1 !== g.indexOf("ccw") && j > 0 && (j = (j - 9999999999 * d) % d - (0 | j / d) * d)), (j > e || -e > j) && (this._addTween(a, f, h, h + j, f), this._overwriteProps.push(f)));
            return !0
        },
        set: function(a) {
            var b;
            if (1 !== a) this._super.setRatio.call(this, a);
            else
                for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
        }
    })._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function(a) {
        var o, p, q, b = window.GreenSockGlobals || window,
            c = b.com.greensock,
            d = 2 * Math.PI,
            e = Math.PI / 2,
            f = c._class,
            g = function(b, c) {
                var d = f("easing." + b, function() {}, !0),
                    e = d.prototype = new a;
                return e.constructor = d, e.getRatio = c, d
            },
            h = a.register || function() {},
            i = function(a, b, c, d) {
                var g = f("easing." + a, {
                    easeOut: new b,
                    easeIn: new c,
                    easeInOut: new d
                }, !0);
                return h(g, a), g
            },
            j = function(a, b, c) {
                this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
            },
            k = function(b, c) {
                var d = f("easing." + b, function(a) {
                        this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    e = d.prototype = new a;
                return e.constructor = d, e.getRatio = c, e.config = function(a) {
                    return new d(a)
                }, d
            },
            l = i("Back", k("BackOut", function(a) {
                return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
            }), k("BackIn", function(a) {
                return a * a * ((this._p1 + 1) * a - this._p1)
            }), k("BackInOut", function(a) {
                return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
            })),
            m = f("easing.SlowMo", function(a, b, c) {
                b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
            }, !0),
            n = m.prototype = new a;
        return n.constructor = m, n.getRatio = function(a) {
            var b = a + (.5 - a) * this._p;
            return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
        }, m.ease = new m(.7, .7), n.config = m.config = function(a, b, c) {
            return new m(a, b, c)
        }, o = f("easing.SteppedEase", function(a) {
            a = a || 1, this._p1 = 1 / a, this._p2 = a + 1
        }, !0), n = o.prototype = new a, n.constructor = o, n.getRatio = function(a) {
            return 0 > a ? a = 0 : a >= 1 && (a = .999999999), (this._p2 * a >> 0) * this._p1
        }, n.config = o.config = function(a) {
            return new o(a)
        }, p = f("easing.RoughEase", function(b) {
            b = b || {};
            for (var m, n, o, p, q, r, c = b.taper || "none", d = [], e = 0, f = 0 | (b.points || 20), g = f, h = b.randomize !== !1, i = b.clamp === !0, k = b.template instanceof a ? b.template : null, l = "number" == typeof b.strength ? .4 * b.strength : .4; --g > -1;) m = h ? Math.random() : 1 / f * g, n = k ? k.getRatio(m) : m, "none" === c ? o = l : "out" === c ? (p = 1 - m, o = p * p * l) : "in" === c ? o = m * m * l : .5 > m ? (p = 2 * m, o = .5 * p * p * l) : (p = 2 * (1 - m), o = .5 * p * p * l), h ? n += Math.random() * o - .5 * o : g % 2 ? n += .5 * o : n -= .5 * o, i && (n > 1 ? n = 1 : 0 > n && (n = 0)), d[e++] = {
                x: m,
                y: n
            };
            for (d.sort(function(a, b) {
                return a.x - b.x
            }), r = new j(1, 1, null), g = f; --g > -1;) q = d[g], r = new j(q.x, q.y, r);
            this._prev = new j(0, 0, 0 !== r.t ? r : r.next)
        }, !0), n = p.prototype = new a, n.constructor = p, n.getRatio = function(a) {
            var b = this._prev;
            if (a > b.t) {
                for (; b.next && a >= b.t;) b = b.next;
                b = b.prev
            } else
                for (; b.prev && a <= b.t;) b = b.prev;
            return this._prev = b, b.v + (a - b.t) / b.gap * b.c
        }, n.config = function(a) {
            return new p(a)
        }, p.ease = new p, i("Bounce", g("BounceOut", function(a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }), g("BounceIn", function(a) {
            return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
        }), g("BounceInOut", function(a) {
            var b = .5 > a;
            return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
        })), i("Circ", g("CircOut", function(a) {
            return Math.sqrt(1 - (a -= 1) * a)
        }), g("CircIn", function(a) {
            return -(Math.sqrt(1 - a * a) - 1)
        }), g("CircInOut", function(a) {
            return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        })), q = function(b, c, e) {
            var g = f("easing." + b, function(a, b) {
                    this._p1 = a || 1, this._p2 = b || e, this._p3 = this._p2 / d * (Math.asin(1 / this._p1) || 0)
                }, !0),
                h = g.prototype = new a;
            return h.constructor = g, h.getRatio = c, h.config = function(a, b) {
                return new g(a, b)
            }, g
        }, i("Elastic", q("ElasticOut", function(a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * d / this._p2) + 1
        }, .3), q("ElasticIn", function(a) {
            return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * d / this._p2))
        }, .3), q("ElasticInOut", function(a) {
            return (a *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * d / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * d / this._p2) + 1
        }, .45)), i("Expo", g("ExpoOut", function(a) {
            return 1 - Math.pow(2, -10 * a)
        }), g("ExpoIn", function(a) {
            return Math.pow(2, 10 * (a - 1)) - .001
        }), g("ExpoInOut", function(a) {
            return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
        })), i("Sine", g("SineOut", function(a) {
            return Math.sin(a * e)
        }), g("SineIn", function(a) {
            return -Math.cos(a * e) + 1
        }), g("SineInOut", function(a) {
            return -.5 * (Math.cos(Math.PI * a) - 1)
        })), f("easing.EaseLookup", {
            find: function(b) {
                return a.map[b]
            }
        }, !0), h(b.SlowMo, "SlowMo", "ease,"), h(p, "RoughEase", "ease,"), h(o, "SteppedEase", "ease,"), l
    }, !0)
}),
function(a) {
    "use strict";
    var g, h, i, j, k, b = a.GreenSockGlobals || a,
        c = function(a) {
            var e, c = a.split("."),
                d = b;
            for (e = 0; e < c.length; e++) d[c[e]] = d = d[c[e]] || {};
            return d
        },
        d = c("com.greensock"),
        e = [].slice,
        f = function() {},
        l = {},
        m = function(d, e, f, g) {
            this.sc = l[d] ? l[d].sc : [], l[d] = this, this.gsClass = null, this.func = f;
            var h = [];
            this.check = function(i) {
                for (var n, o, p, q, j = e.length, k = j; --j > -1;)(n = l[e[j]] || new m(e[j], [])).gsClass ? (h[j] = n.gsClass, k--) : i && n.sc.push(this);
                if (0 === k && f)
                    for (o = ("com.greensock." + d).split("."), p = o.pop(), q = c(o.join("."))[p] = this.gsClass = f.apply(f, h), g && (b[p] = q, "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").join("/"), [], function() {
                        return q
                    }) : "undefined" != typeof module && module.exports && (module.exports = q)), j = 0; j < this.sc.length; j++) this.sc[j].check()
            }, this.check(!0)
        },
        n = a._gsDefine = function(a, b, c, d) {
            return new m(a, b, c, d)
        },
        o = d._class = function(a, b, c) {
            return b = b || function() {}, n(a, [], function() {
                return b
            }, c), b
        };
    n.globals = b;
    var p = [0, 0, 1, 1],
        q = [],
        r = o("easing.Ease", function(a, b, c, d) {
            this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? p.concat(b) : p
        }, !0),
        s = r.map = {},
        t = r.register = function(a, b, c, e) {
            for (var i, j, k, l, f = b.split(","), g = f.length, h = (c || "easeIn,easeOut,easeInOut").split(","); --g > -1;)
                for (j = f[g], i = e ? o("easing." + j, null, !0) : d.easing[j] || {}, k = h.length; --k > -1;) l = h[k], s[j + "." + l] = s[l + j] = i[l] = a.getRatio ? a : a[l] || new a
        };
    for (i = r.prototype, i._calcEnd = !1, i.getRatio = function(a) {
        if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
        var b = this._type,
            c = this._power,
            d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
        return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
    }, g = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], h = g.length; --h > -1;) i = g[h] + ",Power" + h, t(new r(null, null, 1, h), i, "easeOut", !0), t(new r(null, null, 2, h), i, "easeIn" + (0 === h ? ",easeNone" : "")), t(new r(null, null, 3, h), i, "easeInOut");
    s.linear = d.easing.Linear.easeIn, s.swing = d.easing.Quad.easeInOut;
    var u = o("events.EventDispatcher", function(a) {
        this._listeners = {}, this._eventTarget = a || this
    });
    i = u.prototype, i.addEventListener = function(a, b, c, d, e) {
        e = e || 0;
        var h, i, f = this._listeners[a],
            g = 0;
        for (null == f && (this._listeners[a] = f = []), i = f.length; --i > -1;) h = f[i], h.c === b && h.s === c ? f.splice(i, 1) : 0 === g && h.pr < e && (g = i + 1);
        f.splice(g, 0, {
            c: b,
            s: c,
            up: d,
            pr: e
        }), this !== j || k || j.wake()
    }, i.removeEventListener = function(a, b) {
        var d, c = this._listeners[a];
        if (c)
            for (d = c.length; --d > -1;)
                if (c[d].c === b) return c.splice(d, 1), void 0
    }, i.dispatchEvent = function(a) {
        var c, d, e, b = this._listeners[a];
        if (b)
            for (c = b.length, d = this._eventTarget; --c > -1;) e = b[c], e.up ? e.c.call(e.s || d, {
                type: a,
                target: d
            }) : e.c.call(e.s || d)
    };
    var v = a.requestAnimationFrame,
        w = a.cancelAnimationFrame,
        x = Date.now || function() {
            return (new Date).getTime()
        };
    for (g = ["ms", "moz", "webkit", "o"], h = g.length; --h > -1 && !v;) v = a[g[h] + "RequestAnimationFrame"], w = a[g[h] + "CancelAnimationFrame"] || a[g[h] + "CancelRequestAnimationFrame"];
    o("Ticker", function(a, b) {
        var g, h, i, l, m, c = this,
            d = x(),
            e = b !== !1 && v,
            n = function(a) {
                c.time = (x() - d) / 1e3;
                var b = i,
                    e = c.time - m;
                (!g || e > 0 || a === !0) && (c.frame++, m += e + (e >= l ? .004 : l - e), c.dispatchEvent("tick")), a !== !0 && b === i && (i = h(n))
            };
        u.call(c), this.time = this.frame = 0, this.tick = function() {
            n(!0)
        }, this.sleep = function() {
            null != i && (e && w ? w(i) : clearTimeout(i), h = f, i = null, c === j && (k = !1))
        }, this.wake = function() {
            null !== i && c.sleep(), h = 0 === g ? f : e && v ? v : function(a) {
                return setTimeout(a, 0 | 1e3 * (m - c.time) + 1)
            }, c === j && (k = !0), n(2)
        }, this.fps = function(a) {
            return arguments.length ? (g = a, l = 1 / (g || 60), m = this.time + l, c.wake(), void 0) : g
        }, this.useRAF = function(a) {
            return arguments.length ? (c.sleep(), e = a, c.fps(g), void 0) : e
        }, c.fps(a), setTimeout(function() {
            e && (!i || c.frame < 5) && c.useRAF(!1)
        }, 1500)
    }), i = d.Ticker.prototype = new d.events.EventDispatcher, i.constructor = d.Ticker;
    var y = o("core.Animation", function(a, b) {
        if (this.vars = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(this.vars.delay) || 0, this._timeScale = 1, this._active = this.vars.immediateRender === !0, this.data = this.vars.data, this._reversed = this.vars.reversed === !0, K) {
            k || j.wake();
            var c = this.vars.useFrames ? J : K;
            c.add(this, c._time), this.vars.paused && this.paused(!0)
        }
    });
    j = y.ticker = new d.Ticker, i = y.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1, i.play = function(a, b) {
        return arguments.length && this.seek(a, b), this.reversed(!1).paused(!1)
    }, i.pause = function(a, b) {
        return arguments.length && this.seek(a, b), this.paused(!0)
    }, i.resume = function(a, b) {
        return arguments.length && this.seek(a, b), this.paused(!1)
    }, i.seek = function(a, b) {
        return this.totalTime(Number(a), b !== !1)
    }, i.restart = function(a, b) {
        return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
    }, i.reverse = function(a, b) {
        return arguments.length && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
    }, i.render = function() {}, i.invalidate = function() {
        return this
    }, i._enabled = function(a, b) {
        return k || j.wake(), this._gc = !a, this._active = a && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration, b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
    }, i._kill = function() {
        return this._enabled(!1, !1)
    }, i.kill = function(a, b) {
        return this._kill(a, b), this
    }, i._uncache = function(a) {
        for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
        return this
    }, i.eventCallback = function(a, b, c, d) {
        if (null == a) return null;
        if ("on" === a.substr(0, 2)) {
            var f, e = this.vars;
            if (1 === arguments.length) return e[a];
            if (null == b) delete e[a];
            else if (e[a] = b, e[a + "Params"] = c, e[a + "Scope"] = d, c)
                for (f = c.length; --f > -1;) "{self}" === c[f] && (c = e[a + "Params"] = c.concat(), c[f] = this);
            "onUpdate" === a && (this._onUpdate = b)
        }
        return this
    }, i.delay = function(a) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
    }, i.duration = function(a) {
        return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
    }, i.totalDuration = function(a) {
        return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
    }, i.time = function(a, b) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
    }, i.totalTime = function(a, b, c) {
        if (k || j.wake(), !arguments.length) return this._totalTime;
        if (this._timeline) {
            if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var d = this._totalDuration,
                    e = this._timeline;
                if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), !e._active)
                    for (; e._timeline;) e.totalTime(e._totalTime, !0), e = e._timeline
            }
            this._gc && this._enabled(!0, !1), this._totalTime !== a && this.render(a, b, !1)
        }
        return this
    }, i.startTime = function(a) {
        return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
    }, i.timeScale = function(a) {
        if (!arguments.length) return this._timeScale;
        if (a = a || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
            var b = this._pauseTime,
                c = b || 0 === b ? b : this._timeline.totalTime();
            this._startTime = c - (c - this._startTime) * this._timeScale / a
        }
        return this._timeScale = a, this._uncache(!1)
    }, i.reversed = function(a) {
        return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._totalTime, !0)), this) : this._reversed
    }, i.paused = function(a) {
        if (!arguments.length) return this._paused;
        if (a != this._paused && this._timeline) {
            k || a || j.wake();
            var b = this._timeline.rawTime(),
                c = b - this._pauseTime;
            !a && this._timeline.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = !a && this._totalTime > 0 && this._totalTime < this._totalDuration, a || 0 === c || 0 === this._duration || this.render(this._totalTime, !0, !0)
        }
        return this._gc && !a && this._enabled(!0, !1), this
    };
    var z = o("core.SimpleTimeline", function(a) {
        y.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    i = z.prototype = new y, i.constructor = z, i.kill()._gc = !1, i._first = i._last = null, i._sortChildren = !1, i.add = i.insert = function(a, b) {
        var e, f;
        if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
            for (f = a._startTime; e && e._startTime > f;) e = e._prev;
        return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._timeline && this._uncache(!0), this
    }, i._remove = function(a, b) {
        return a.timeline === this && (b || a._enabled(!1, !0), a.timeline = null, a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), this._timeline && this._uncache(!0)), this
    }, i.render = function(a, b, c) {
        var e, d = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = a; d;) e = d._next, (d._active || a >= d._startTime && !d._paused) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = e
    }, i.rawTime = function() {
        return k || j.wake(), this._totalTime
    };
    var A = o("TweenLite", function(a, b, c) {
            if (y.call(this, b, c), null == a) throw "Cannot tween a null target.";
            this.target = a = "string" != typeof a ? a : A.selector(a) || a;
            var g, h, i, d = a.jquery || a.length && a[0] && a[0].nodeType && a[0].style,
                f = this.vars.overwrite;
            if (this._overwrite = f = null == f ? I[A.defaultOverwrite] : "number" == typeof f ? f >> 0 : I[f], (d || a instanceof Array) && "number" != typeof a[0])
                for (this._targets = i = e.call(a, 0), this._propLookup = [], this._siblings = [], g = 0; g < i.length; g++) h = i[g], h ? "string" != typeof h ? h.length && h[0] && h[0].nodeType && h[0].style ? (i.splice(g--, 1), this._targets = i = i.concat(e.call(h, 0))) : (this._siblings[g] = L(h, this, !1), 1 === f && this._siblings[g].length > 1 && M(h, this, null, 1, this._siblings[g])) : (h = i[g--] = A.selector(h), "string" == typeof h && i.splice(g + 1, 1)) : i.splice(g--, 1);
            else this._propLookup = {}, this._siblings = L(a, this, !1), 1 === f && this._siblings.length > 1 && M(a, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === b && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
        }, !0),
        B = function(a) {
            return a.length && a[0] && a[0].nodeType && a[0].style
        },
        C = function(a, b) {
            var d, c = {};
            for (d in a) H[d] || d in b && "x" !== d && "y" !== d && "width" !== d && "height" !== d && "className" !== d || !(!E[d] || E[d] && E[d]._autoCSS) || (c[d] = a[d], delete a[d]);
            a.css = c
        };
    i = A.prototype = new y, i.constructor = A, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = !1, A.version = "1.9.7", A.defaultEase = i._ease = new r(null, null, 1, 1), A.defaultOverwrite = "auto", A.ticker = j, A.autoSleep = !0, A.selector = a.$ || a.jQuery || function(b) {
        return a.$ ? (A.selector = a.$, a.$(b)) : a.document ? a.document.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b
    };
    var D = A._internals = {},
        E = A._plugins = {},
        F = A._tweenLookup = {},
        G = 0,
        H = D.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1
        },
        I = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        },
        J = y._rootFramesTimeline = new z,
        K = y._rootTimeline = new z;
    K._startTime = j.time, J._startTime = j.frame, K._active = J._active = !0, y._updateRoot = function() {
        if (K.render((j.time - K._startTime) * K._timeScale, !1, !1), J.render((j.frame - J._startTime) * J._timeScale, !1, !1), !(j.frame % 120)) {
            var a, b, c;
            for (c in F) {
                for (b = F[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                0 === b.length && delete F[c]
            }
            if (c = K._first, (!c || c._paused) && A.autoSleep && !J._first && 1 === j._listeners.tick.length) {
                for (; c && c._paused;) c = c._next;
                c || j.sleep()
            }
        }
    }, j.addEventListener("tick", y._updateRoot);
    var L = function(a, b, c) {
            var e, f, d = a._gsTweenID;
            if (F[d || (a._gsTweenID = d = "t" + G++)] || (F[d] = {
                target: a,
                tweens: []
            }), b && (e = F[d].tweens, e[f = e.length] = b, c))
                for (; --f > -1;) e[f] === b && e.splice(f, 1);
            return F[d].tweens
        },
        M = function(a, b, c, d, e) {
            var f, g, h, i;
            if (1 === d || d >= 4) {
                for (i = e.length, f = 0; i > f; f++)
                    if ((h = e[f]) !== b) h._gc || h._enabled(!1, !1) && (g = !0);
                    else if (5 === d) break;
                return g
            }
            var n, j = b._startTime + 1e-10,
                k = [],
                l = 0,
                m = 0 === b._duration;
            for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (n = n || N(b, 0, m), 0 === N(h, n, m) && (k[l++] = h)) : h._startTime <= j && h._startTime + h.totalDuration() / h._timeScale + 1e-10 > j && ((m || !h._initted) && j - h._startTime <= 2e-10 || (k[l++] = h)));
            for (f = l; --f > -1;) h = k[f], 2 === d && h._kill(c, a) && (g = !0), (2 !== d || !h._firstPT && h._initted) && h._enabled(!1, !1) && (g = !0);
            return g
        },
        N = function(a, b, c) {
            for (var d = a._timeline, e = d._timeScale, f = a._startTime, g = 1e-10; d._timeline;) {
                if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                d = d._timeline
            }
            return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * g > f - b ? g : (f += a.totalDuration() / a._timeScale / e) > b + g ? 0 : f - b - g
        };
    i._init = function() {
        var e, f, g, h, a = this.vars,
            b = this._overwrittenProps,
            c = this._duration,
            d = a.ease;
        if (a.startAt) {
            if (a.startAt.overwrite = 0, a.startAt.immediateRender = !0, this._startAt = A.to(this.target, 0, a.startAt), a.immediateRender && (this._startAt = null, 0 === this._time && 0 !== c)) return
        } else if (a.runBackwards && a.immediateRender && 0 !== c)
            if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
            else if (0 === this._time) {
            g = {};
            for (h in a) H[h] && "autoCSS" !== h || (g[h] = a[h]);
            return g.overwrite = 0, this._startAt = A.to(this.target, 0, g), void 0
        }
        if (this._ease = d ? d instanceof r ? a.easeParams instanceof Array ? d.config.apply(d, a.easeParams) : d : "function" == typeof d ? new r(d, a.easeParams) : s[d] || A.defaultEase : A.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
            for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], b ? b[e] : null) && (f = !0);
        else f = this._initProps(this.target, this._propLookup, this._siblings, b); if (f && A._onPluginEvent("_onInitAllProps", this), b && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
            for (g = this._firstPT; g;) g.s += g.c, g.c = -g.c, g = g._next;
        this._onUpdate = a.onUpdate, this._initted = !0
    }, i._initProps = function(a, b, c, d) {
        var e, f, g, h, i, j, k;
        if (null == a) return !1;
        this.vars.css || a.style && a.nodeType && E.css && this.vars.autoCSS !== !1 && C(this.vars, a);
        for (e in this.vars) {
            if (H[e]) {
                if (("onStartParams" === e || "onUpdateParams" === e || "onCompleteParams" === e || "onReverseCompleteParams" === e || "onRepeatParams" === e) && (i = this.vars[e]))
                    for (f = i.length; --f > -1;) "{self}" === i[f] && (i = this.vars[e] = i.concat(), i[f] = this)
            } else if (E[e] && (h = new E[e])._onInitTween(a, this.vars[e], this)) {
                for (this._firstPT = j = {
                    _next: this._firstPT,
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: !0,
                    n: e,
                    pg: !0,
                    pr: h._priority
                }, f = h._overwriteProps.length; --f > -1;) b[h._overwriteProps[f]] = this._firstPT;
                (h._priority || h._onInitAllProps) && (g = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
            } else this._firstPT = b[e] = j = {
                _next: this._firstPT,
                t: a,
                p: e,
                f: "function" == typeof a[e],
                n: e,
                pg: !1,
                pr: 0
            }, j.s = j.f ? a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]() : parseFloat(a[e]), k = this.vars[e], j.c = "string" == typeof k && "=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * Number(k.substr(2)) : Number(k) - j.s || 0;
            j && j._next && (j._next._prev = j)
        }
        return d && this._kill(d, a) ? this._initProps(a, b, c, d) : this._overwrite > 1 && this._firstPT && c.length > 1 && M(a, this, b, this._overwrite, c) ? (this._kill(b, a), this._initProps(a, b, c, d)) : g
    }, i.render = function(a, b, c) {
        var e, f, g, d = this._time;
        if (a >= this._duration) this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (e = !0, f = "onComplete"), 0 === this._duration && ((0 === a || this._rawPrevTime < 0) && this._rawPrevTime !== a && (c = !0, this._rawPrevTime > 0 && (f = "onReverseComplete", b && (a = -1))), this._rawPrevTime = a);
        else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === this._duration && this._rawPrevTime > 0) && (f = "onReverseComplete", e = this._reversed), 0 > a ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (c = !0), this._rawPrevTime = a)) : this._initted || (c = !0);
        else if (this._totalTime = this._time = a, this._easeType) {
            var h = a / this._duration,
                i = this._easeType,
                j = this._easePower;
            (1 === i || 3 === i && h >= .5) && (h = 1 - h), 3 === i && (h *= 2), 1 === j ? h *= h : 2 === j ? h *= h * h : 3 === j ? h *= h * h * h : 4 === j && (h *= h * h * h * h), this.ratio = 1 === i ? 1 - h : 2 === i ? h : a / this._duration < .5 ? h / 2 : 1 - h / 2
        } else this.ratio = this._ease.getRatio(a / this._duration); if (this._time !== d || c) {
            if (!this._initted) {
                if (this._init(), !this._initted) return;
                this._time && !e ? this.ratio = this._ease.getRatio(this._time / this._duration) : e && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._active || this._paused || (this._active = !0), 0 === d && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : f || (f = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === this._duration) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || q))), g = this._firstPT; g;) g.f ? g.t[g.p](g.c * this.ratio + g.s) : g.t[g.p] = g.c * this.ratio + g.s, g = g._next;
            this._onUpdate && (0 > a && this._startAt && this._startAt.render(a, b, c), b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || q)), f && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startAt.render(a, b, c), e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[f] && this.vars[f].apply(this.vars[f + "Scope"] || this, this.vars[f + "Params"] || q)))
        }
    }, i._kill = function(a, b) {
        if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._enabled(!1, !1);
        b = "string" != typeof b ? b || this._targets || this.target : A.selector(b) || b;
        var c, d, e, f, g, h, i, j;
        if ((b instanceof Array || B(b)) && "number" != typeof b[0])
            for (c = b.length; --c > -1;) this._kill(a, b[c]) && (h = !0);
        else {
            if (this._targets) {
                for (c = this._targets.length; --c > -1;)
                    if (b === this._targets[c]) {
                        g = this._propLookup[c] || {}, this._overwrittenProps = this._overwrittenProps || [], d = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
                        break
                    }
            } else {
                if (b !== this.target) return !1;
                g = this._propLookup, d = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
            } if (g) {
                i = a || g, j = a !== d && "all" !== d && a !== g && (null == a || a._tempKill !== !0);
                for (e in i)(f = g[e]) && (f.pg && f.t._kill(i) && (h = !0), f.pg && 0 !== f.t._overwriteProps.length || (f._prev ? f._prev._next = f._next : f === this._firstPT && (this._firstPT = f._next), f._next && (f._next._prev = f._prev), f._next = f._prev = null), delete g[e]), j && (d[e] = 1);
                !this._firstPT && this._initted && this._enabled(!1, !1)
            }
        }
        return h
    }, i.invalidate = function() {
        return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
    }, i._enabled = function(a, b) {
        if (k || j.wake(), a && this._gc) {
            var d, c = this._targets;
            if (c)
                for (d = c.length; --d > -1;) this._siblings[d] = L(c[d], this, !0);
            else this._siblings = L(this.target, this, !0)
        }
        return y.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? A._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
    }, A.to = function(a, b, c) {
        return new A(a, b, c)
    }, A.from = function(a, b, c) {
        return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new A(a, b, c)
    }, A.fromTo = function(a, b, c, d) {
        return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new A(a, b, d)
    }, A.delayedCall = function(a, b, c, d, e) {
        return new A(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            onCompleteScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            onReverseCompleteScope: d,
            immediateRender: !1,
            useFrames: e,
            overwrite: 0
        })
    }, A.set = function(a, b) {
        return new A(a, 0, b)
    }, A.killTweensOf = A.killDelayedCallsTo = function(a, b) {
        for (var c = A.getTweensOf(a), d = c.length; --d > -1;) c[d]._kill(b, a)
    }, A.getTweensOf = function(a) {
        if (null == a) return [];
        a = "string" != typeof a ? a : A.selector(a) || a;
        var b, c, d, e;
        if ((a instanceof Array || B(a)) && "number" != typeof a[0]) {
            for (b = a.length, c = []; --b > -1;) c = c.concat(A.getTweensOf(a[b]));
            for (b = c.length; --b > -1;)
                for (e = c[b], d = b; --d > -1;) e === c[d] && c.splice(b, 1)
        } else
            for (c = L(a).concat(), b = c.length; --b > -1;) c[b]._gc && c.splice(b, 1);
        return c
    };
    var O = o("plugins.TweenPlugin", function(a, b) {
        this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = O.prototype
    }, !0);
    if (i = O.prototype, O.version = "1.9.1", O.API = 2, i._firstPT = null, i._addTween = function(a, b, c, d, e, f) {
        var g, h;
        null != d && (g = "number" == typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2))) && (this._firstPT = h = {
            _next: this._firstPT,
            t: a,
            p: b,
            s: c,
            c: g,
            f: "function" == typeof a[b],
            n: e || b,
            r: f
        }, h._next && (h._next._prev = h))
    }, i.setRatio = function(a) {
        for (var d, b = this._firstPT, c = 1e-6; b;) d = b.c * a + b.s, b.r ? d = d + (d > 0 ? .5 : -.5) >> 0 : c > d && d > -c && (d = 0), b.f ? b.t[b.p](d) : b.t[b.p] = d, b = b._next
    }, i._kill = function(a) {
        var d, b = this._overwriteProps,
            c = this._firstPT;
        if (null != a[this._propName]) this._overwriteProps = [];
        else
            for (d = b.length; --d > -1;) null != a[b[d]] && b.splice(d, 1);
        for (; c;) null != a[c.n] && (c._next && (c._next._prev = c._prev), c._prev ? (c._prev._next = c._next, c._prev = null) : this._firstPT === c && (this._firstPT = c._next)), c = c._next;
        return !1
    }, i._roundProps = function(a, b) {
        for (var c = this._firstPT; c;)(a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
    }, A._onPluginEvent = function(a, b) {
        var d, e, f, g, h, c = b._firstPT;
        if ("_onInitAllProps" === a) {
            for (; c;) {
                for (h = c._next, e = f; e && e.pr > c.pr;) e = e._next;
                (c._prev = e ? e._prev : g) ? c._prev._next = c : f = c, (c._next = e) ? e._prev = c : g = c, c = h
            }
            c = b._firstPT = f
        }
        for (; c;) c.pg && "function" == typeof c.t[a] && c.t[a]() && (d = !0), c = c._next;
        return d
    }, O.activate = function(a) {
        for (var b = a.length; --b > -1;) a[b].API === O.API && (E[(new a[b])._propName] = a[b]);
        return !0
    }, n.plugin = function(a) {
        if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
        var h, b = a.propName,
            c = a.priority || 0,
            d = a.overwriteProps,
            e = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            },
            f = o("plugins." + b.charAt(0).toUpperCase() + b.substr(1) + "Plugin", function() {
                O.call(this, b, c), this._overwriteProps = d || []
            }, a.global === !0),
            g = f.prototype = new O(b);
        g.constructor = f, f.API = a.API;
        for (h in e) "function" == typeof a[h] && (g[e[h]] = a[h]);
        return f.version = a.version, O.activate([f]), f
    }, g = a._gsQueue) {
        for (h = 0; h < g.length; h++) g[h]();
        for (i in l) l[i].func || a.console.log("GSAP encountered missing dependency: com.greensock." + i)
    }
    k = !1
}(window),
function(a) {
    var b = function(c, d) {
        var e = this,
            f = b.prototype;
        this.hider = null, this.mainHolder_do = null, this.mainImagesHolder_do = null, this.smallImage_sdo = null, this.border_sdo = null, this.handler_sdo = null, this.dumy_sdo = null, this.image_img = d.navigatorImage_img, this.borderColor_str = d.navigatorBorderColor_str, this.handlerColor_str = d.navigatorHandlerColor_str, this.handMovePath_str = d.handMovePath_str, this.handGrabPath_str = d.handGrabPath_str, this.navigatorPosition_str = d.navigatorPosition_str, this.stageWidth, this.stageHeight, this.totalWidth = d.navigatorWidth, this.totalHeight = d.navigatorHeight, this.offsetX = d.navigatorOffsetX, this.offsetY = d.navigatorOffsetY, this.finalWidth, this.finalHeight, this.finalX, this.finalY, this.xPositionOnPress, this.yPositionOnPress, this.lastPresedX, this.lastPresedY, this.tweenCompleteId_to, this.isShowed_bl = !0, this.isTweening_bl = !1, this.isDragging_bl = !1, this.isMobile_bl = FWDUtils.isMobile, this.hasPointerEvent_bl = FWDUtils.hasPointerEvent, e.init = function() {
            e.setOverflow("visible"), e.setSelectable(!1), e.setupMainContiners(), e.setupImageSdo(), e.hide(), e.resizeAndPosition(), e.handler_sdo.screen.style.cursor = "url(" + e.handMovePath_str + "), default"
        }, e.activate = function() {
            e.addPannSupport()
        }, e.resizeAndPosition = function() {
            e.stageWidth = c.stageWidth, e.stageHeight = c.stageHeight, e.navigatorPosition_str == b.TOP_LEFT ? (e.setX(e.offsetX), e.setY(e.offsetY)) : e.navigatorPosition_str == b.TOP_RIGHT ? (e.setX(e.stageWidth - e.totalWidth - e.offsetX), e.setY(e.offsetY)) : e.navigatorPosition_str == b.BOTTOM_LEFT ? (e.setX(e.offsetX), e.setY(e.stageHeight - e.totalHeight - e.offsetY)) : e.navigatorPosition_str == b.BOTTOM_RIGHT && (e.setX(e.stageWidth - e.totalWidth - e.offsetX), e.setY(e.stageHeight - e.totalHeight - e.offsetY))
        }, e.setupHider = function() {}, e.onHiderHide = function() {}, e.setupMainContiners = function() {
            e.mainHolder_do = new FWDDisplayObject("div", "absolute", "visible"), e.mainHolder_do.setWidth(e.totalWidth), e.mainHolder_do.setHeight(e.totalHeight), e.addChild(e.mainHolder_do), e.mainImagesHolder_do = new FWDDisplayObject("div", "absolute", "visible"), e.smallImage_sdo = new FWDSimpleDisplayObject("img"), e.mainHolder_do.addChild(e.mainImagesHolder_do), e.border_sdo = new FWDSimpleDisplayObject("div"), e.border_sdo.setWidth(e.totalWidth - 2), e.border_sdo.setHeight(e.totalHeight - 2), e.border_sdo.getStyle().borderStyle = "solid", e.border_sdo.getStyle().borderWidth = "1px", e.border_sdo.getStyle().borderColor = e.borderColor_str, e.mainHolder_do.addChild(e.border_sdo), e.handler_sdo = new FWDSimpleDisplayObject("div"), e.handler_sdo.setWidth(e.totalWidth - 2), e.handler_sdo.setHeight(e.totalHeight - 2), e.handler_sdo.getStyle().borderStyle = "solid", e.handler_sdo.getStyle().borderWidth = "1px", FWDUtils.isIE && (e.handler_sdo.getStyle().background = "url('dumy')"), e.handler_sdo.getStyle().borderColor = e.handlerColor_str, e.mainHolder_do.addChild(e.handler_sdo)
        }, e.setupImageSdo = function() {
            e.smallImage_sdo = new FWDSimpleDisplayObject("img"), e.smallImage_sdo.setScreen(e.image_img), e.mainImagesHolder_do.addChild(e.smallImage_sdo)
        }, e.update = function(a, b, c, d, f) {
            c > 1 && (c = 1), d > 1 && (d = 1), a > 1 && (a = 1), b > 1 && (b = 1), isNaN(a) && (a = 0), isNaN(b) && (b = 0), e.finalWidth = Math.round(c * (e.totalWidth - 4)), e.finalHeight = Math.round(d * (e.totalHeight - 4)), e.finalX = Math.round(a * (e.totalWidth - 2 - e.finalWidth)), e.finalX < 1 ? e.finalX = 1 : e.finalX >= e.totalWidth - 3 - e.finalWidth && (e.finalX = e.totalWidth - 3 - e.finalWidth), e.finalY = Math.round(b * (e.totalHeight - 2 - e.finalHeight)), e.finalY < 1 ? e.finalY = 1 : e.finalY >= e.totalHeight - 3 - e.finalHeight && (e.finalY = e.totalHeight - 3 - e.finalHeight), clearTimeout(e.tweenCompleteId_to), f ? (e.isTweening_bl = !0, e.tweenCompleteId_to = setTimeout(function() {
                null != e && (e.isTweening_bl = !1)
            }, 200), TweenMax.killTweensOf(e.handler_sdo), TweenMax.to(e.handler_sdo, .2, {
                x: e.finalX,
                y: e.finalY,
                w: e.finalWidth,
                h: e.finalHeight
            })) : (e.isTweening_bl = !1, TweenMax.killTweensOf(e.handler_sdo), e.handler_sdo.setX(e.finalX), e.handler_sdo.setY(e.finalY), e.handler_sdo.setWidth(e.finalWidth), e.handler_sdo.setHeight(e.finalHeight))
        }, e.addPannSupport = function() {
            e.isMobile_bl ? e.hasPointerEvent_bl ? e.handler_sdo.screen.addEventListener("MSPointerDown", e.panStartHandler) : e.handler_sdo.screen.addEventListener("touchstart", e.panStartHandler) : e.handler_sdo.screen.addEventListener ? e.handler_sdo.screen.addEventListener("mousedown", e.panStartHandler) : e.handler_sdo.screen.attachEvent && e.handler_sdo.screen.attachEvent("onmousedown", e.panStartHandler)
        }, e.panStartHandler = function(c) {
            if (c.preventDefault && c.preventDefault(), !e.isTweening_bl) {
                var d = FWDUtils.getViewportMouseCoordinates(c);
                e.isDragging_bl = !0, e.xPositionOnPress = e.handler_sdo.getX(), e.yPositionOnPress = e.handler_sdo.getY(), e.lastPresedX = d.screenX, e.lastPresedY = d.screenY, e.dispatchEvent(b.PAN_START), e.isMobile_bl ? e.hasPointerEvent_bl ? (a.addEventListener("MSPointerMove", e.panMoveHandler), a.addEventListener("MSPointerUp", e.panEndHandler)) : (a.addEventListener("touchmove", e.panMoveHandler), a.addEventListener("touchend", e.panEndHandler)) : a.addEventListener ? (a.addEventListener("mousemove", e.panMoveHandler), a.addEventListener("mouseup", e.panEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", e.panMoveHandler), document.attachEvent("onmouseup", e.panEndHandler))
            }
        }, e.panMoveHandler = function(a) {
            if (a.preventDefault && a.preventDefault(), !a.touches || 1 == a.touches.length) {
                var c = FWDUtils.getViewportMouseCoordinates(a);
                e.finalX = Math.round(e.xPositionOnPress + c.screenX - e.lastPresedX), e.finalX < 1 ? e.finalX = 1 : e.finalX >= e.totalWidth - 3 - e.finalWidth && (e.finalX = e.totalWidth - 3 - e.finalWidth), e.handler_sdo.setX(e.finalX), e.finalY = Math.round(e.yPositionOnPress + c.screenY - e.lastPresedY), e.finalY < 1 ? e.finalY = 1 : e.finalY >= e.totalHeight - 3 - e.finalHeight && (e.finalY = e.totalHeight - 3 - e.finalHeight), e.handler_sdo.setY(e.finalY), e.dispatchEvent(b.PAN, {
                    percentX: e.finalX / (e.totalWidth - 2 - e.finalWidth),
                    percentY: e.finalY / (e.totalHeight - 2 - e.finalHeight)
                })
            }
        }, e.panEndHandler = function() {
            e.isDragging_bl = !1, e.dispatchEvent(b.PAN_END), e.isMobile_bl ? e.hasPointerEvent_bl ? (a.removeEventListener("MSPointerMove", e.panMoveHandler), a.removeEventListener("MSPointerUp", e.panEndHandler)) : (a.removeEventListener("touchmove", e.panMoveHandler), a.removeEventListener("touchend", e.panEndHandler)) : a.removeEventListener ? (a.removeEventListener("mousemove", e.panMoveHandler), a.removeEventListener("mouseup", e.panEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", e.panMoveHandler), document.detachEvent("onmouseup", e.panEndHandler))
        }, e.show = function(a) {
            e.isShowed_bl || (e.resizeAndPosition(), a ? TweenMax.to(e.mainHolder_do, 1, {
                y: 0,
                ease: Expo.easeInOut
            }) : (TweenMax.killTweensOf(e.mainHolder_do), e.mainHolder_do.setY(0)), e.isShowed_bl = !0)
        }, e.hide = function(a) {
            e.isShowed_bl && (e.navigatorPosition_str == b.TOP_LEFT || e.navigatorPosition_str == b.TOP_RIGHT ? a ? (TweenMax.to(e.mainHolder_do, 1, {
                y: -e.totalHeight - e.offsetY,
                ease: Expo.easeInOut
            }), e.update(1, 1, 1, 1, !0)) : (TweenMax.killTweensOf(e.mainHolder_do), e.mainHolder_do.setY(-e.totalHeight - e.offsetY)) : (e.navigatorPosition_str == b.BOTTOM_LEFT || e.navigatorPosition_str == b.BOTTOM_RIGHT) && (a ? (TweenMax.to(e.mainHolder_do, 1, {
                y: e.totalHeight + e.offsetY,
                ease: Expo.easeInOut
            }), e.update(1, 1, 1, 1, !0)) : (TweenMax.killTweensOf(e.mainHolder_do), e.mainHolder_do.setY(e.totalHeight + e.offsetY))), e.isShowed_bl = !1)
        }, e.cleanMainEvents = function() {
            e.isMobile_bl ? (e.handler_sdo.screen.removeEventListener("touchstart", e.panStartHandler), e.handler_sdo.screen.addEventListener("MSPointerDown", e.panStartHandler), a.removeEventListener("touchmove", e.panMoveHandler), a.removeEventListener("touchend", e.panEndHandler), a.removeEventListener("MSPointerMove", e.panMoveHandler), a.removeEventListener("MSPointerUp", e.panEndHandler)) : e.handler_sdo.screen.removeEventListener ? (e.handler_sdo.screen.removeEventListener("mousedown", e.panStartHandler), a.removeEventListener("mousemove", e.panMoveHandler), a.removeEventListener("mouseup", e.panEndHandler)) : e.handler_sdo.screen.detachEvent && (e.handler_sdo.screen.detachEvent("onmousedown", e.panStartHandler), document.detachEvent("onmousemove", e.panMoveHandler), document.detachEvent("onmouseup", e.panEndHandler)), e.screen.onmousedown = null, e.handler_sdo.screen.onmousedown = null, clearTimeout(e.tweenCompleteId_to)
        }, e.destroy = function() {
            e.cleanMainEvents(), e.hider && e.hider.removeListener(FWDHider.HIDE, e.onHiderHide), TweenMax.killTweensOf(e.mainHolder_do), e.mainHolder_do.destroy(), TweenMax.killTweensOf(e.handler_sdo), e.handler_sdo.destroy(), e.mainImagesHolder_do.destroy(), e.dumy_sdo && e.dumy_sdo.destroy(), e.hider = null, e.mainHolder_do = null, e.mainImagesHolder_do = null, e.smallImage_sdo = null, e.handler_sdo = null, e.dumy_sdo = null, e.images_ar = d.navigatorImages_ar, e.borderColor_str = null, e.handlerColor_str = null, e.handMovePath_str = null, e.handGrabPath_str = null, e.navigatorPosition_str = null, d = null, c = null, e.setInnerHTML(""), f.destroy(), e = null, f = null, b.prototype = null
        }, e.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDDisplayObject("div")
    }, b.TOP_LEFT = "topleft", b.TOP_RIGHT = "topright", b.BOTTOM_LEFT = "bottomleft", b.BOTTOM_RIGHT = "bottomright", b.PAN_START = "panStart", b.PAN_END = "panEnd", b.PAN = "pan", b.prototype = null, a.FWDNavigator = b
}(window),
function(a) {
    var b = function(a, c, d, e, f, g, h, i) {
        var j = this,
            k = b.prototype;
        this.imageSource_img = c, this.bk_do = null, this.mainAnimHolder_do = null, this.animHolder_do = null, this.imageAnimHolder_do = null, this.images_do = null, this.text_do = null, this.backgroundColor_str = i, this.fontColor_str = h, this.stageWidth, this.stageHeight, this.segmentWidth = d, this.segmentHeight = e, this.totalSegments = f, this.animDelay = g || 300, this.count = 0, this.delayTimerId_int, this.isShowed_bl = !1, this.allowResize_bl = !0, j.init = function() {
            j.setupMainContainers(), FWDUtils.isMobile && j.screen.addEventListener("touchstart", j.windowTouchStartHandler)
        }, j.windowTouchStartHandler = function(a) {
            a.preventDefault && a.preventDefault()
        }, j.setupMainContainers = function() {
            j.bk_do = new FWDSimpleDisplayObject("div"), j.bk_do.setBkColor(j.backgroundColor_str), j.bk_do.setAlpha(0), j.bk_do.setResizableSizeAfterParent(), j.addChild(j.bk_do), j.mainAnimHolder_do = new FWDDisplayObject("div"), j.mainAnimHolder_do.setOverflow("visible"), j.mainAnimHolder_do.setWidth(300), j.mainAnimHolder_do.setHeight(300), j.addChild(j.mainAnimHolder_do), j.animHolder_do = new FWDDisplayObject("div"), j.animHolder_do.setOverflow("visible"), j.animHolder_do.setWidth(300), j.animHolder_do.setHeight(300), j.mainAnimHolder_do.addChild(j.animHolder_do), j.imageAnimHolder_do = new FWDDisplayObject("div"), j.imageAnimHolder_do.setWidth(j.segmentWidth), j.imageAnimHolder_do.setHeight(j.segmentHeight), j.animHolder_do.addChild(j.imageAnimHolder_do), j.images_do = new FWDSimpleDisplayObject("img"), j.images_do.setScreen(j.imageSource_img), j.imageAnimHolder_do.addChild(j.images_do), j.text_do = new FWDSimpleDisplayObject("div"), j.text_do.setDisplay("inline"), j.text_do.getStyle().whiteSpace = "nowrap", j.text_do.getStyle().fontFamily = "Arial", j.text_do.getStyle().fontSize = "12px", j.text_do.getStyle().color = j.fontColor_str, j.text_do.getStyle().fontSmoothing = "antialiased", j.text_do.getStyle().webkitFontSmoothing = "antialiased", j.text_do.getStyle().textRendering = "optimizeLegibility", j.text_do.setY(j.segmentHeight + 2), j.animHolder_do.addChild(j.text_do)
        }, j.positionAndResize = function() {
            (a.stageWidth != j.stageWidth || a.stageHeight != j.stageHeight) && j.allowResize_bl && (j.stageWidth = a.stageWidth, j.stageHeight = a.stageHeight, j.mainAnimHolder_do.setX(Math.round(j.stageWidth - j.segmentWidth) / 2), j.mainAnimHolder_do.setY(Math.round((j.stageHeight - j.segmentHeight) / 2) - 10), j.setWidth(j.stageWidth), j.setHeight(j.stageHeight))
        }, j.updateText = function(a) {
            j.text_do.setInnerHTML(a), j.text_do.setX(Math.round((j.segmentWidth - j.text_do.getWidth()) / 2))
        }, this.start = function() {
            clearInterval(this.delayTimerId_int), j.delayTimerId_int = setInterval(j.updatePreloader, j.animDelay)
        }, this.stop = function() {
            clearInterval(j.delayTimerId_int)
        }, this.updatePreloader = function() {
            j.count++, j.count > j.totalSegments - 1 && (j.count = 0);
            var a = j.count * j.segmentWidth;
            j.images_do.setX(-a)
        }, j.show = function() {
            TweenMax.killTweensOf(j.bk_do), TweenMax.to(j.bk_do, 1, {
                alpha: 1
            }), TweenMax.to(j.animHolder_do, .8, {
                y: 0,
                ease: Expo.easeInOut
            }), j.isShowed_bl = !0
        }, j.hide = function(a) {
            null != j && (TweenMax.killTweensOf(j), TweenMax.killTweensOf(j.animHolder_do), a ? (j.allowResize_bl = !1, TweenMax.to(j.bk_do, .8, {
                alpha: 0,
                delay: .6,
                onComplete: j.onHideComplete
            }), TweenMax.to(j.animHolder_do, .8, {
                y: j.stageHeight / 2 + j.segmentHeight,
                ease: Expo.easeInOut
            })) : (j.bk_do.setAlpha(0), j.animHolder_do.setY(-j.stageHeight / 2 - j.segmentHeight)), j.isShowed_bl = !1)
        }, j.onHideComplete = function() {
            j.stop(), j.dispatchEvent(b.HIDE_COMPLETE)
        }, j.destroy = function() {
            j.stop(), FWDUtils.isMobile && j.screen.removeEventListener("touchstart", j.windowTouchStartHandler), TweenMax.killTweensOf(j), TweenMax.killTweensOf(j.bk_do), TweenMax.killTweensOf(j.animHolder_do), j.bk_do.destroy(), j.mainAnimHolder_do.destroy(), j.animHolder_do.destroy(), j.imageAnimHolder_do.destroy(), j.images_do.destroy(), j.text_do.destroy(), j.imageSource_img = null, j.bk_do = null, j.mainAnimHolder_do = null, j.animHolder_do = null, j.imageAnimHolder_do = null, j.images_do = null, j.text_do = null, j.backgroundColor_str = null, j.fontColor_str = null, j.init = null, j.setupMainContainers = null, j.positionAndResize = null, j.update = null, j.show = null, j.hide = null, j.onHideComplete = null, a = null, c = null, i = null, h = null, j.setInnerHTML(""), k.destroy(), j = null, b.prototype = null
        }, j.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDDisplayObject("div")
    }, b.HIDE_COMPLETE = "hideComplete", b.prototype = null, a.FWDPreloader = b
}(window),
function(a) {
    var b = function(a, c, d) {
        var e = this,
            f = b.prototype;
        this.nImg = a, this.sImg = c, this.dImg = d, this.n_sdo, this.s_sdo, this.d_sdo, this.toolTipLabel_str, this.totalWidth = this.nImg.width, this.totalHeight = this.nImg.height, this.isDisabled_bl = !1, this.isSelectedFinal_bl = !1, this.isActive_bl = !1, this.isMobile_bl = FWDUtils.isMobile, this.hasPointerEvent_bl = FWDUtils.hasPointerEvent, e.init = function() {
            e.setupMainContainers()
        }, e.setupMainContainers = function() {
            e.n_sdo = new FWDSimpleDisplayObject("img"), e.n_sdo.setScreen(e.nImg), e.s_sdo = new FWDSimpleDisplayObject("img"), e.s_sdo.setScreen(e.sImg), e.s_sdo.setAlpha(0), e.addChild(e.n_sdo), e.addChild(e.s_sdo), e.dImg && (e.d_sdo = new FWDSimpleDisplayObject("img"), e.d_sdo.setScreen(e.dImg), e.isMobile_bl ? e.d_sdo.setX(-100) : e.d_sdo.setAlpha(0), e.addChild(e.d_sdo)), e.setWidth(e.nImg.width), e.setHeight(e.nImg.height), e.setButtonMode(!0), e.isMobile_bl ? e.hasPointerEvent_bl ? (e.screen.addEventListener("MSPointerDown", e.onMouseDown), e.screen.addEventListener("MSPointerUp", e.onClick), e.screen.addEventListener("MSPointerOver", e.onMouseOver), e.screen.addEventListener("MSPointerOut", e.onMouseOut)) : e.screen.addEventListener("touchstart", e.onMouseDown) : e.screen.addEventListener ? (e.screen.addEventListener("mouseover", e.onMouseOver), e.screen.addEventListener("mouseout", e.onMouseOut), e.screen.addEventListener("mousedown", e.onMouseDown), e.screen.addEventListener("click", e.onClick)) : e.screen.attachEvent && (e.screen.attachEvent("onmouseover", e.onMouseOver), e.screen.attachEvent("onmouseout", e.onMouseOut), e.screen.attachEvent("onmousedown", e.onMouseDown), e.screen.attachEvent("onclick", e.onClick))
        }, e.onMouseOver = function(a) {
            if (!a.pointerType || a.pointerType == a.MSPOINTER_TYPE_MOUSE) {
                if (e.isDisabled_bl || e.isSelectedFinal_bl) return;
                e.dispatchEvent(b.MOUSE_OVER, {
                    e: a
                }), TweenMax.killTweensOf(e.s_sdo), TweenMax.to(e.s_sdo, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                })
            }
        }, e.onMouseOut = function(a) {
            if (!a.pointerType || a.pointerType == a.MSPOINTER_TYPE_MOUSE) {
                if (e.isDisabled_bl || e.isSelectedFinal_bl) return;
                e.dispatchEvent(b.MOUSE_OUT, {
                    e: a
                }), TweenMax.killTweensOf(e.s_sdo), TweenMax.to(e.s_sdo, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }
        }, e.onClick = function(a) {
            e.isDisabled_bl || e.isSelectedFinal_bl || e.dispatchEvent(b.CLICK, {
                e: a
            })
        }, e.onMouseDown = function(a) {
            a.preventDefault && a.preventDefault(), e.isDisabled_bl || e.isSelectedFinal_bl || e.dispatchEvent(b.MOUSE_DOWN, {
                e: a
            })
        }, e.setSelctedFinal = function() {
            e.isSelectedFinal_bl = !0, TweenMax.killTweensOf(e.s_sdo), TweenMax.to(e.s_sdo, .8, {
                alpha: 1,
                ease: Expo.easeOut
            }), e.setButtonMode(!1)
        }, e.setUnselctedFinal = function() {
            e.isSelectedFinal_bl = !1, TweenMax.to(e.s_sdo, .8, {
                alpha: 0,
                delay: .1,
                ease: Expo.easeOut
            }), e.setButtonMode(!0)
        }, this.disable = function() {
            e.isDisabled_bl || (e.isMobile_bl ? e.d_sdo.setX(0) : (TweenMax.killTweensOf(e.d_sdo), TweenMax.to(e.d_sdo, .8, {
                alpha: 1,
                ease: Expo.easeOut
            }), e.setButtonMode(!1)), e.isDisabled_bl = !0)
        }, this.enable = function() {
            e.isDisabled_bl && (e.isMobile_bl ? e.d_sdo.setX(-100) : (TweenMax.killTweensOf(e.d_sdo), TweenMax.to(e.d_sdo, .8, {
                alpha: 0,
                delay: .1,
                ease: Expo.easeOut
            }), e.setButtonMode(!0)), e.isDisabled_bl = !1)
        }, e.destroy = function() {
            e.isMobile_bl ? e.hasPointerEvent_bl ? (e.screen.removeEventListener("MSPointerDown", e.onMouseDown), e.screen.removeEventListener("MSPointerUp", e.onClick), e.screen.removeEventListener("MSPointerOver", e.onMouseOver), e.screen.removeEventListener("MSPointerOut", e.onMouseOut)) : e.screen.removeEventListener("touchstart", e.onMouseDown) : e.screen.addEventListener ? (e.screen.removeEventListener("mouseover", e.onMouseOver), e.screen.removeEventListener("mouseout", e.onMouseOut), e.screen.removeEventListener("mousedown", e.onMouseDown), e.screen.removeEventListener("click", e.onClick)) : e.screen.detachEvent && (e.screen.detachEvent("onmouseover", e.onMouseOver), e.screen.detachEvent("onmouseout", e.onMouseOut), e.screen.detachEvent("onmousedown", e.onMouseDown), e.screen.detachEvent("onclick", e.onClick)), TweenMax.killTweensOf(e.s_sdo), e.n_sdo.destroy(), e.s_sdo.destroy(), e.d_sdo && (TweenMax.killTweensOf(e.d_sdo), e.d_sdo.destroy()), e.nImg = null, e.sImg = null, e.dImg = null, e.n_sdo = null, e.s_sdo = null, e.d_sdo = null, a = null, c = null, d = null, e.toolTipLabel_str = null, e.init = null, e.setupMainContainers = null, e.onMouseOver = null, e.onMouseOut = null, e.onClick = null, e.onMouseDown = null, e.setSelctedFinal = null, e.setUnselctedFinal = null, e.setInnerHTML(""), f.destroy(), e = null, f = null, b.prototype = null
        }, e.init()
    };
    b.setPrototype = function() {
        b.prototype = null, b.prototype = new FWDDisplayObject("div")
    }, b.CLICK = "onClick", b.MOUSE_OVER = "onMouseOver", b.MOUSE_OUT = "onMouseOut", b.MOUSE_DOWN = "onMouseDown", b.prototype = null, a.FWDSimpleButton = b
}(window),
function(a) {
    var b = function(a, b, c, d) {
        var e = this;
        if ("div" != a && "img" != a && "canvas" != a) throw Error("Type is not valid! " + a);
        e.type = a, this.style, this.screen, this.transform, this.position = b || "absolute", this.overflow = c || "hidden", this.display = d || "block", this.visible = !0, this.buttonMode, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.rect, this.alpha = 1, this.innerHTML = "", this.opacityType = "", this.isHtml5_bl = !1, this.hasTransform3d_bl = FWDUtils.hasTransform3d, this.hasTransform2d_bl = FWDUtils.hasTransform2d, FWDUtils.isFirefox && (e.hasTransform3d_bl = !1), FWDUtils.isFirefox && (e.hasTransform2d_bl = !1), this.hasBeenSetSelectable_bl = !1, e.init = function() {
            e.setScreen()
        }, e.getTransform = function() {
            for (var b, a = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"]; b = a.shift();)
                if ("undefined" != typeof e.screen.style[b]) return b;
            return !1
        }, e.getOpacityType = function() {
            var a;
            return a = "undefined" != typeof e.screen.style.opacity ? "opacity" : "filter"
        }, e.setScreen = function(a) {
            "img" == e.type && a ? (e.screen = a, e.setMainProperties()) : (e.screen = document.createElement(e.type), e.setMainProperties())
        }, e.setMainProperties = function() {
            e.transform = e.getTransform(), e.setPosition(e.position), e.setOverflow(e.overflow), e.opacityType = e.getOpacityType(), "opacity" == e.opacityType && (e.isHtml5_bl = !0), "filter" == e.opacityType && (e.screen.style.filter = "inherit"), e.screen.style.left = "0px", e.screen.style.top = "0px", e.screen.style.margin = "0px", e.screen.style.padding = "0px", e.screen.style.maxWidth = "none", e.screen.style.maxHeight = "none", e.screen.style.border = "none", e.screen.style.lineHeight = "1", e.screen.style.backgroundColor = "transparent", e.screen.style.backfaceVisibility = "hidden", e.screen.style.webkitBackfaceVisibility = "hidden", e.screen.style.MozBackfaceVisibility = "hidden", e.screen.style.MozImageRendering = "optimizeSpeed", e.screen.style.WebkitImageRendering = "optimizeSpeed", "img" == a && (e.setWidth(e.screen.width), e.setHeight(e.screen.height), e.setSelectable(!1))
        }, e.setSelectable = function(a) {
            a || (e.screen.style.userSelect = "none", e.screen.style.MozUserSelect = "none", e.screen.style.webkitUserSelect = "none", e.screen.style.khtmlUserSelect = "none", e.screen.style.oUserSelect = "none", e.screen.style.msUserSelect = "none", e.screen.msUserSelect = "none", e.screen.ondragstart = function() {
                return !1
            }, e.screen.onselectstart = function() {
                return !1
            }, e.screen.ontouchstart = function() {
                return !1
            }, e.screen.style.webkitTouchCallout = "none", e.hasBeenSetSelectable_bl = !0)
        }, e.setBackfaceVisibility = function() {
            e.screen.style.backfaceVisibility = "visible", e.screen.style.webkitBackfaceVisibility = "visible", e.screen.style.MozBackfaceVisibility = "visible"
        }, e.removeBackfaceVisibility = function() {
            e.screen.style.backfaceVisibility = "hidden", e.screen.style.webkitBackfaceVisibility = "hidden", e.screen.style.MozBackfaceVisibility = "hidden"
        }, e.getScreen = function() {
            return e.screen
        }, e.setVisible = function(a) {
            e.visible = a, e.screen.style.visibility = 1 == e.visible ? "visible" : "hidden"
        }, e.getVisible = function() {
            return e.visible
        }, e.setResizableSizeAfterParent = function() {
            e.screen.style.width = "100%", e.screen.style.height = "100%"
        }, e.getStyle = function() {
            return e.screen.style
        }, e.setOverflow = function(a) {
            e.overflow = a, e.screen.style.overflow = e.overflow
        }, e.setPosition = function(a) {
            e.position = a, e.screen.style.position = e.position
        }, e.setDisplay = function(a) {
            e.display = a, e.screen.style.display = e.display
        }, e.setButtonMode = function(a) {
            e.buttonMode = a, e.screen.style.cursor = 1 == e.buttonMode ? "pointer" : "default"
        }, e.setBkColor = function(a) {
            e.screen.style.backgroundColor = a
        }, e.setInnerHTML = function(a) {
            e.innerHTML = a, e.screen.innerHTML = e.innerHTML
        }, e.getInnerHTML = function() {
            return e.innerHTML
        }, e.getRect = function() {
            return e.screen.getBoundingClientRect()
        }, e.setAlpha = function(a) {
            e.alpha = a, "opacity" == e.opacityType ? e.screen.style.opacity = e.alpha : "filter" == e.opacityType && (e.screen.style.filter = "alpha(opacity=" + 100 * e.alpha + ")", e.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * e.alpha) + ")")
        }, e.getAlpha = function() {
            return e.alpha
        }, e.getRect = function() {
            return e.screen.getBoundingClientRect()
        }, e.getGlobalX = function() {
            return e.getRect().left
        }, e.getGlobalY = function() {
            return e.getRect().top
        }, e.setX = function(a) {
            e.x = a, e.hasTransform3d_bl ? e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px,0)" : e.hasTransform2d_bl ? e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)" : e.screen.style.left = e.x + "px"
        }, e.getX = function() {
            return e.x
        }, e.setY = function(a) {
            e.y = a, e.hasTransform3d_bl ? e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px,0)" : e.hasTransform2d_bl ? e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)" : e.screen.style.top = e.y + "px"
        }, e.getY = function() {
            return e.y
        }, e.setWidth = function(a) {
            e.w = a, "img" == e.type ? e.screen.width = e.w : e.screen.style.width = e.w + "px"
        }, e.getWidth = function() {
            return "div" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : e.w : "img" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : 0 != e.screen.width ? e.screen.width : e._w : "canvas" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : e.w : void 0
        }, e.setHeight = function(a) {
            e.h = a, "img" == e.type ? e.screen.height = e.h : e.screen.style.height = e.h + "px"
        }, e.getHeight = function() {
            return "div" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : e.h : "img" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : 0 != e.screen.height ? e.screen.height : e.h : "canvas" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : e.h : void 0
        }, e.disposeImage = function() {
            "img" == e.type && (e.screen.src = null)
        }, e.destroy = function() {
            e.hasBeenSetSelectable_bl && (e.screen.ondragstart = null, e.screen.onselectstart = null, e.screen.ontouchstart = null), e.screen.removeAttribute("style"), e.style = null, e.screen = null, e.transform = null, e.position = null, e.overflow = null, e.display = null, e.visible = null, e.buttonMode = null, e.x = null, e.y = null, e.w = null, e.h = null, e.rect = null, e.alpha = null, e.innerHTML = null, e.opacityType = null, e.isHtml5_bl = null, a = null, b = null, c = null, d = null, e.hasTransform3d_bl = null, e.hasTransform2d_bl = null, e = null
        }, e.init()
    };
    a.FWDSimpleDisplayObject = b
}(window),
function(a) {
    var b = function(a, b, c) {
        var d = this;
        if ("div" != a && "img" != a && "canvas" != a) throw Error("Type is not valid! " + a);
        d.type = a, this.style, this.screen, this.transform, this.transformOrigin, this.position = b || "absolute", this.overflow = c || "hidden", this.visible = !0, this.buttonMode, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.scale = 1, this.rect, this.alpha = 1, this.innerHTML = "", this.opacityType = "", this.isHtml5_bl = !1, this.hasTransform3d_bl = FWDUtils.hasTransform3d, this.hasTransform2d_bl = FWDUtils.hasTransform2d, (FWDUtils.isIE || FWDUtils.isFirefox) && (d.hasTransform3d_bl = !1), this.hasBeenSetSelectable_bl = !1, d.init = function() {
            d.setScreen()
        }, d.getTransform = function() {
            for (var b, a = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"]; b = a.shift();)
                if ("undefined" != typeof d.screen.style[b]) return b;
            return void 0
        }, d.getTransformOrigin = function() {
            for (var b, a = ["transformOrigin", "msTransformOrigin", "WebkitTransformOrigin", "MozTransformOrigin", "OTransformOrigin"]; b = a.shift();)
                if ("undefined" != typeof d.screen.style[b]) return b;
            return void 0
        }, d.getOpacityType = function() {
            var a;
            return a = "undefined" != typeof d.screen.style.opacity ? "opacity" : "filter"
        }, d.setScreen = function(a) {
            "img" == d.type && a ? (d.screen = a, d.setMainProperties()) : (d.screen = document.createElement(d.type), d.setMainProperties())
        }, d.setMainProperties = function() {
            d.transform = d.getTransform(), d.transformOrigin = d.getTransformOrigin(), d.setPosition(d.position), d.setOverflow(d.overflow), d.opacityType = d.getOpacityType(), "opacity" == d.opacityType && (d.isHtml5_bl = !0), "filter" == d.opacityType && (d.screen.style.filter = "inherit"), d.screen.style.left = "0px", d.screen.style.top = "0px", d.screen.style.margin = "0px", d.screen.style.padding = "0px", d.screen.style.maxWidth = "none", d.screen.style.maxHeight = "none", d.screen.style.border = "none", d.screen.style.lineHeight = "1", d.screen.style.backgroundColor = "transparent", "img" == a && (d.setWidth(d.screen.width), d.setHeight(d.screen.height), d.setSelectable(!1))
        }, d.setSelectable = function(a) {
            a || (d.screen.style.userSelect = "none", d.screen.style.MozUserSelect = "none", d.screen.style.webkitUserSelect = "none", d.screen.style.khtmlUserSelect = "none", d.screen.style.oUserSelect = "none", d.screen.style.msUserSelect = "none", d.screen.msUserSelect = "none", d.screen.ondragstart = function() {
                return !1
            }, d.screen.onselectstart = function() {
                return !1
            }, d.screen.ontouchstart = function() {
                return !1
            }, d.screen.style.webkitTouchCallout = "none", d.hasBeenSetSelectable_bl = !0)
        }, d.setBackfaceVisibility = function() {
            d.screen.style.backfaceVisibility = "visible", d.screen.style.webkitBackfaceVisibility = "visible", d.screen.style.MozBackfaceVisibility = "visible"
        }, d.removeBackfaceVisibility = function() {
            d.screen.style.backfaceVisibility = "hidden", d.screen.style.webkitBackfaceVisibility = "hidden", d.screen.style.MozBackfaceVisibility = "hidden"
        }, d.getScreen = function() {
            return d.screen
        }, d.setVisible = function(a) {
            d.visible = a, d.screen.style.visibility = 1 == d.visible ? "visible" : "hidden"
        }, d.getVisible = function() {
            return d.visible
        }, d.setResizableSizeAfterParent = function() {
            d.screen.style.width = "100%", d.screen.style.height = "100%"
        }, d.getStyle = function() {
            return d.screen.style
        }, d.setOverflow = function(a) {
            d.overflow = a, d.screen.style.overflow = d.overflow
        }, d.setPosition = function(a) {
            d.position = a, d.screen.style.position = d.position
        }, d.setDisplay = function(a) {
            d.display = a, d.screen.style.display = d.display
        }, d.setButtonMode = function(a) {
            d.buttonMode = a, d.screen.style.cursor = 1 == d.buttonMode ? "pointer" : "default"
        }, d.setBkColor = function(a) {
            d.screen.style.backgroundColor = a
        }, d.setInnerHTML = function(a) {
            d.innerHTML = a, d.screen.innerHTML = d.innerHTML
        }, d.getInnerHTML = function() {
            return d.innerHTML
        }, d.getRect = function() {
            return d.screen.getBoundingClientRect()
        }, d.setAlpha = function(a) {
            d.alpha = a, "opacity" == d.opacityType ? d.screen.style.opacity = d.alpha : "filter" == d.opacityType && (d.screen.style.filter = "alpha(opacity=" + 100 * d.alpha + ")", d.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * d.alpha) + ")")
        }, d.getAlpha = function() {
            return d.alpha
        }, d.getRect = function() {
            return d.screen.getBoundingClientRect()
        }, d.getGlobalX = function() {
            return d.getRect().left
        }, d.getGlobalY = function() {
            return d.getRect().top
        }, d.setX = function(a) {
            d.x = a, d.hasTransform3d_bl ? d.screen.style[d.transform] = "translate3d(" + d.x + "px," + d.y + "px,0) scale(" + d.scale + "," + d.scale + ")" : d.screen.style.left = d.x + "px"
        }, d.getX = function() {
            return d.x
        }, d.setY = function(a) {
            d.y = a, d.hasTransform3d_bl ? d.screen.style[d.transform] = "translate3d(" + d.x + "px," + d.y + "px,0) scale(" + d.scale + "," + d.scale + ")" : d.screen.style.top = d.y + "px"
        }, d.getY = function() {
            return d.y
        }, d.setWidth = function(a) {
            d.w = a, "img" == d.type ? d.screen.width = d.w : d.screen.style.width = d.w + "px"
        }, d.getWidth = function() {
            return "div" == d.type ? 0 != d.screen.offsetWidth ? d.screen.offsetWidth : d.w : "img" == d.type ? 0 != d.screen.offsetWidth ? d.screen.offsetWidth : 0 != d.screen.width ? d.screen.width : d._w : "canvas" == d.type ? 0 != d.screen.offsetWidth ? d.screen.offsetWidth : d.w : void 0
        }, d.setHeight = function(a) {
            d.h = a, "img" == d.type ? d.screen.height = d.h : d.screen.style.height = d.h + "px"
        }, d.getHeight = function() {
            return "div" == d.type ? 0 != d.screen.offsetHeight ? d.screen.offsetHeight : d.h : "img" == d.type ? 0 != d.screen.offsetHeight ? d.screen.offsetHeight : 0 != d.screen.height ? d.screen.height : d.h : "canvas" == d.type ? 0 != d.screen.offsetHeight ? d.screen.offsetHeight : d.h : void 0
        }, this.setScale = function(a) {
            d.scale = a, d.screen.style[d.transform] = d.hasTransform2d_bl ? "scale(" + d.scale + "," + d.scale + ")" : "translate3d(" + d.x + "px," + d.y + "px,0) scale(" + d.scale + "," + d.scale + ")"
        }, this.setTransformOrigin = function(a, b) {
            d.screen.style[d.transformOrigin] = a + "%" + " " + b + "%"
        }, d.setPositionAndScale = function(a, b, c) {
            d.x = a, d.y = b, d.scale = c, d.screen.style[d.transform] = "translate3d(" + d.x + "px," + d.y + "px,0) scale(" + d.scale + "," + d.scale + ")"
        }, d.disposeImage = function() {
            "img" == d.type && (d.screen.src = null)
        }, d.addChild = function(a) {
            d.contains(a) ? (d.children_ar.splice(FWDUtils.indexOfArray(d.children_ar, a), 1), d.children_ar.push(a), d.screen.appendChild(a.screen)) : (d.children_ar.push(a), d.screen.appendChild(a.screen))
        }, d.destroy = function() {
            d.hasBeenSetSelectable_bl && (d.screen.ondragstart = null, d.screen.onselectstart = null, d.screen.ontouchstart = null), d.style = null, d.screen = null, d.transform = null, d.position = null, d.overflow = null, d.display = null, d.visible = null, d.buttonMode = null, d.x = null, d.y = null, d.w = null, d.h = null, d.rect = null, d.alpha = null, d.innerHTML = null, d.opacityType = null, d.isHtml5_bl = null, a = null, b = null, c = null, display = null, d.hasTransform3d_bl = null, d.hasTransform2d_bl = null, d = null
        }, d.init()
    };
    a.FWDTransformDisplayObject = b
}(window),
function(a) {
    function b() {
        for (var b, c, a = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"]; b = a.shift();)
            if ("undefined" != typeof d.dumy.style[b] && (d.dumy.style.position = "absolute", c = d.dumy.getBoundingClientRect().left, d.dumy.style[b] = "translate3d(500px, 0px, 0px)", c = Math.abs(d.dumy.getBoundingClientRect().left - c), c > 100 && 900 > c)) {
                try {
                    document.documentElement.removeChild(d.dumy)
                } catch (e) {}
                return !0
            }
        try {
            document.documentElement.removeChild(d.dumy)
        } catch (e) {}
        return !1
    }

    function c() {
        for (var b, a = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"]; b = a.shift();)
            if ("undefined" != typeof d.dumy.style[b]) return !0;
        try {
            document.documentElement.removeChild(d.dumy)
        } catch (c) {}
        return !1
    }
    var d = function() {};
    d.dumy = document.createElement("div"), d.trim = function(a) {
        return a.replace(/\s/gi, "")
    }, d.trimAndFormatUrl = function(a) {
        return a = a.toLocaleLowerCase(), a = a.replace(/ /g, "-"), a = a.replace(/\xe4/g, "a"), a = a.replace(/\xe2/g, "a"), a = a.replace(/\xe2/g, "a"), a = a.replace(/\xe0/g, "a"), a = a.replace(/\xe8/g, "e"), a = a.replace(/\xe9/g, "e"), a = a.replace(/\xeb/g, "e"), a = a.replace(/\xef/g, "i"), a = a.replace(/\xee/g, "i"), a = a.replace(/\xf9/g, "u"), a = a.replace(/\xf4/g, "o"), a = a.replace(/\xf9/g, "u"), a = a.replace(/\xfb/g, "u"), a = a.replace(/\xff/g, "y"), a = a.replace(/\xe7/g, "c"), a = a.replace(/\u0153/g, "ce")
    }, d.splitAndTrim = function(a, b, c) {
        for (var e = a.split(","), f = e.length, g = 0; f > g; g++) b && (e[g] = d.trim(e[g])), c && (e[g] = e[g].toLowerCase());
        return e
    }, d.indexOfArray = function(a, b) {
        for (var c = a.length, d = 0; c > d; d++)
            if (a[d] === b) return d;
        return -1
    }, d.randomizeArray = function(a) {
        for (var b = [], c = a.concat(), d = c.length, e = 0; d > e; e++) {
            var f = Math.floor(Math.random() * c.length);
            b.push(c[f]), c.splice(f, 1)
        }
        return b
    }, d.parent = function(a, b) {
        for (void 0 === b && (b = 1); b-- && a;) a = a.parentNode;
        return a && 1 === a.nodeType ? a : null
    }, d.sibling = function(a, b) {
        for (; a && 0 !== b;)
            if (b > 0) {
                if (a.nextElementSibling) a = a.nextElementSibling;
                else
                    for (var a = a.nextSibling; a && 1 !== a.nodeType; a = a.nextSibling);
                b--
            } else {
                if (a.previousElementSibling) a = a.previousElementSibling;
                else
                    for (var a = a.previousSibling; a && 1 !== a.nodeType; a = a.previousSibling);
                b++
            }
        return a
    }, d.getChildAt = function(a, b) {
        var c = d.getChildren(a);
        return 0 > b && (b += c.length), 0 > b ? null : c[b]
    }, d.getChildById = function(a) {
        return document.getElementById(a) || void 0
    }, d.getChildren = function(a, b) {
        for (var c = [], d = a.firstChild; null != d; d = d.nextSibling) b ? c.push(d) : 1 === d.nodeType && c.push(d);
        return c
    }, d.getChildrenFromAttribute = function(a, b, c) {
        for (var e = [], f = a.firstChild; null != f; f = f.nextSibling) c && d.hasAttribute(f, b) ? e.push(f) : 1 === f.nodeType && d.hasAttribute(f, b) && e.push(f);
        return 0 == e.length ? void 0 : e
    }, d.getChildFromNodeListFromAttribute = function(a, b, c) {
        for (var e = a.firstChild; null != e; e = e.nextSibling) {
            if (c && d.hasAttribute(e, b)) return e;
            if (1 === e.nodeType && d.hasAttribute(e, b)) return e
        }
        return void 0
    }, d.getAttributeValue = function(a, b) {
        return d.hasAttribute(a, b) ? a.getAttribute(b) : void 0
    }, d.hasAttribute = function(a, b) {
        if (a.hasAttribute) return a.hasAttribute(b);
        var c = a.attributes[b];
        return c ? !0 : !1
    }, d.insertNodeAt = function(a, b, c) {
        var e = d.children(a);
        if (0 > c || c > e.length) throw new Error("invalid index!");
        a.insertBefore(b, e[c])
    }, d.hasCanvas = function() {
        return Boolean(document.createElement("canvas"))
    }, d.hitTest = function(a, b, c) {
        if (!a) throw Error("Hit test target is null!");
        var e = a.getBoundingClientRect();
        return b >= e.left && b <= e.left + (e.right - e.left) && c >= e.top && c <= e.top + (e.bottom - e.top) ? !0 : !1
    }, d.getScrollOffsets = function() {
        return null != a.pageXOffset ? {
            x: a.pageXOffset,
            y: a.pageYOffset
        } : "CSS1Compat" == document.compatMode ? {
            x: document.documentElement.scrollLeft,
            y: document.documentElement.scrollTop
        } : void 0
    }, d.getViewportSize = function() {
        return d.isMobile ? {
            w: a.innerWidth,
            h: a.innerHeight
        } : {
            w: document.documentElement.clientWidth || a.innerWidth,
            h: document.documentElement.clientHeight || a.innerHeight
        }
    }, d.getViewportMouseCoordinates = function(a) {
        var b = d.getScrollOffsets();
        return a.touches ? {
            screenX: void 0 == a.touches[0] ? a.touches.pageX - b.x : a.touches[0].pageX - b.x,
            screenY: void 0 == a.touches[0] ? a.touches.pageY - b.y : a.touches[0].pageY - b.y
        } : {
            screenX: void 0 == a.clientX ? a.pageX - b.x : a.clientX,
            screenY: void 0 == a.clientY ? a.pageY - b.y : a.clientY
        }
    }, d.hasPointerEvent = function() {
        return Boolean(a.navigator.msPointerEnabled)
    }(), d.isMobile = function() {
        if (d.hasPointerEvent && navigator.msMaxTouchPoints > 1) return !0;
        var a = ["android", "webos", "iphone", "ipad", "blackberry"];
        for (i in a)
            if (-1 != navigator.userAgent.toLowerCase().indexOf(a[i].toLowerCase())) return !0;
        return !1
    }(), d.isAndroid = function() {
        return -1 != navigator.userAgent.toLowerCase().indexOf("android".toLowerCase())
    }(), d.isChrome = function() {
        return -1 != navigator.userAgent.toLowerCase().indexOf("chrome")
    }(), d.isSafari = function() {
        return -1 != navigator.userAgent.toLowerCase().indexOf("safari") && -1 == navigator.userAgent.toLowerCase().indexOf("chrome")
    }(), d.isOpera = function() {
        return -1 != navigator.userAgent.toLowerCase().indexOf("opera") && -1 == navigator.userAgent.toLowerCase().indexOf("chrome")
    }(), d.isFirefox = function() {
        return -1 != navigator.userAgent.toLowerCase().indexOf("firefox")
    }(), d.isIE = function() {
        return -1 != navigator.userAgent.toLowerCase().indexOf("msie")
    }(), d.isIEAndLessThen9 = function() {
        return -1 != navigator.userAgent.toLowerCase().indexOf("msie 7") || -1 != navigator.userAgent.toLowerCase().indexOf("msie 8")
    }(), d.isApple = function() {
        return -1 != navigator.appVersion.toLowerCase().indexOf("mac")
    }(), d.hasFullScreen = function() {
        return d.dumy.requestFullScreen || d.dumy.mozRequestFullScreen || d.dumy.webkitRequestFullScreen || d.dumy.msieRequestFullScreen
    }(), d.onReady = function(a) {
        document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
            document.documentElement.appendChild(d.dumy), d.hasTransform3d = b(), d.hasTransform2d = c(), a()
        }) : document.onreadystatechange = function() {
            document.documentElement.appendChild(d.dumy), d.hasTransform3d = b(), d.hasTransform2d = c(), "complete" == document.readyState && a()
        }
    }, d.disableElementSelection = function(a) {
        try {
            a.style.userSelect = "none"
        } catch (a) {}
        try {
            a.style.MozUserSelect = "none"
        } catch (a) {}
        try {
            a.style.webkitUserSelect = "none"
        } catch (a) {}
        try {
            a.style.khtmlUserSelect = "none"
        } catch (a) {}
        try {
            a.style.oUserSelect = "none"
        } catch (a) {}
        try {
            a.style.msUserSelect = "none"
        } catch (a) {}
        try {
            a.msUserSelect = "none"
        } catch (a) {}
        a.onselectstart = function() {
            return !1
        }
    }, d.getUrlArgs = function(a) {
        for (var b = {}, c = a.substr(a.indexOf("?") + 1) || location.search.substring(1), d = c.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].indexOf("="),
                g = d[e].substring(0, f),
                h = d[e].substring(f + 1);
            h = decodeURIComponent(h), b[g] = h
        }
        return b
    }, d.validateEmail = function(a) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a) ? !0 : !1
    }, d.resizeDoWithLimit = function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
        var b = b - f,
            c = c - g,
            n = b / d,
            o = c / e,
            p = 0;
        o >= n ? p = n : n >= o && (p = o);
        var q = Math.round(d * p),
            r = Math.round(e * p),
            s = Math.floor((b - d * p) / 2 + h),
            t = Math.floor((c - e * p) / 2 + i);
        j ? TweenMax.to(a, k, {
            x: s,
            y: t,
            w: q,
            h: r,
            delay: l,
            ease: m
        }) : (a.x = s, a.y = t, a.w = q, a.h = r)
    }, a.FWDUtils = d
}(window);