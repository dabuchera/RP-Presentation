!function(e) {
    var t = {};
    function n(a) {
        if (t[a])
            return t[a].exports;
        var r = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (n.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                n.d(a, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return a
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 16)
}([function(e, t, n) {
    var a, r;
    r = this,
    void 0 === (a = function() {
        return r.Reveal = function() {
            "use strict";
            var e, t, n, a, r, i, s, o, l, c = ".slides section", d = ".slides>section", u = ".slides>section.present>section", f = ".slides>section:first-of-type", p = navigator.userAgent, g = {
                width: 960,
                height: 700,
                margin: .04,
                minScale: .2,
                maxScale: 2,
                controls: !0,
                controlsTutorial: !0,
                controlsLayout: "bottom-right",
                controlsBackArrows: "faded",
                progress: !0,
                slideNumber: !1,
                showSlideNumber: "all",
                hashOneBasedIndex: !1,
                hash: !1,
                history: !1,
                keyboard: !0,
                keyboardCondition: null,
                overview: !0,
                disableLayout: !1,
                center: !0,
                touch: !0,
                loop: !1,
                rtl: !1,
                navigationMode: "default",
                shuffle: !1,
                fragments: !0,
                fragmentInURL: !1,
                embedded: !1,
                help: !0,
                pause: !0,
                showNotes: !1,
                autoPlayMedia: null,
                preloadIframes: null,
                autoSlide: 0,
                autoSlideStoppable: !0,
                autoSlideMethod: null,
                defaultTiming: null,
                mouseWheel: !1,
                rollingLinks: !1,
                hideAddressBar: !0,
                previewLinks: !1,
                postMessage: !0,
                postMessageEvents: !1,
                focusBodyOnPageVisibilityChange: !0,
                transition: "slide",
                transitionSpeed: "default",
                backgroundTransition: "fade",
                parallaxBackgroundImage: "",
                parallaxBackgroundSize: "",
                parallaxBackgroundRepeat: "",
                parallaxBackgroundPosition: "",
                parallaxBackgroundHorizontal: null,
                parallaxBackgroundVertical: null,
                pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
                pdfSeparateFragments: !0,
                pdfPageHeightOffset: -1,
                viewDistance: 3,
                display: "block",
                hideInactiveCursor: !0,
                hideCursorTime: 5e3,
                dependencies: []
            }, m = !1, h = !1, v = !1, b = null, y = null, w = !1, E = !1, A = [], S = 1, L = {
                layout: "",
                overview: ""
            }, k = {}, x = {}, N = [], M = {}, C = 0, T = 0, R = !1, I = 0, _ = !1, O = 0, P = 0, q = -1, B = !1, H = {
                startX: 0,
                startY: 0,
                startCount: 0,
                captured: !1,
                threshold: 40
            }, D = {}, j = {};
            function z() {
                var e = Object.keys(x).length;
                if (0 === e)
                    F();
                else {
                    var t = function() {
                        0 == --e && F()
                    };
                    for (var n in x) {
                        var a = x[n];
                        if ("function" == typeof a.init) {
                            var r = a.init();
                            r && "function" == typeof r.then ? r.then(t) : t()
                        } else
                            t()
                    }
                }
            }
            function F() {
                var a;
                N.length && N.forEach(function(e) {
                    U(e.src, e.callback)
                }),
                h = !0,
                k.slides.classList.add("no-transition"),
                s ? k.wrapper.classList.add("no-hover") : k.wrapper.classList.remove("no-hover"),
                /iphone/gi.test(p) ? k.wrapper.classList.add("ua-iphone") : k.wrapper.classList.remove("ua-iphone"),
                k.background = $(k.wrapper, "div", "backgrounds", null),
                k.progress = $(k.wrapper, "div", "progress", "<span></span>"),
                k.progressbar = k.progress.querySelector("span"),
                k.controls = $(k.wrapper, "aside", "controls", '<button class="navigate-left" aria-label="previous slide"><div class="controls-arrow"></div></button><button class="navigate-right" aria-label="next slide"><div class="controls-arrow"></div></button><button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button><button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>'),
                k.slideNumber = $(k.wrapper, "div", "slide-number", ""),
                k.speakerNotes = $(k.wrapper, "div", "speaker-notes", null),
                k.speakerNotes.setAttribute("data-prevent-swipe", ""),
                k.speakerNotes.setAttribute("tabindex", "0"),
                k.pauseOverlay = $(k.wrapper, "div", "pause-overlay", g.controls ? '<button class="resume-button">Resume presentation</button>' : null),
                k.wrapper.setAttribute("role", "application"),
                k.controlsLeft = Z(document.querySelectorAll(".navigate-left")),
                k.controlsRight = Z(document.querySelectorAll(".navigate-right")),
                k.controlsUp = Z(document.querySelectorAll(".navigate-up")),
                k.controlsDown = Z(document.querySelectorAll(".navigate-down")),
                k.controlsPrev = Z(document.querySelectorAll(".navigate-prev")),
                k.controlsNext = Z(document.querySelectorAll(".navigate-next")),
                k.controlsRightArrow = k.controls.querySelector(".navigate-right"),
                k.controlsDownArrow = k.controls.querySelector(".navigate-down"),
                k.statusDiv = ((a = document.getElementById("aria-status-div")) || ((a = document.createElement("div")).style.position = "absolute",
                a.style.height = "1px",
                a.style.width = "1px",
                a.style.overflow = "hidden",
                a.style.clip = "rect( 1px, 1px, 1px, 1px )",
                a.setAttribute("id", "aria-status-div"),
                a.setAttribute("aria-live", "polite"),
                a.setAttribute("aria-atomic", "true"),
                k.wrapper.appendChild(a)),
                a),
                g.postMessage && window.addEventListener("message", function(t) {
                    var n = t.data;
                    "string" == typeof n && "{" === n.charAt(0) && "}" === n.charAt(n.length - 1) && (n = JSON.parse(n)).method && "function" == typeof e[n.method] && e[n.method].apply(e, n.args)
                }, !1),
                setInterval(function() {
                    0 === k.wrapper.scrollTop && 0 === k.wrapper.scrollLeft || (k.wrapper.scrollTop = 0,
                    k.wrapper.scrollLeft = 0)
                }, 1e3),
                Z(k.wrapper.querySelectorAll(d)).forEach(function(e) {
                    var t = Z(e.querySelectorAll("section"));
                    t.forEach(function(e, t) {
                        t > 0 && (e.classList.remove("present"),
                        e.classList.remove("past"),
                        e.classList.add("future"),
                        e.setAttribute("aria-hidden", "true"))
                    })
                }),
                Y(),
                rt(),
                Ke(!0),
                setTimeout(function() {
                    k.slides.classList.remove("no-transition"),
                    k.wrapper.classList.add("ready"),
                    le("ready", {
                        indexh: t,
                        indexv: n,
                        currentSlide: r
                    })
                }, 1),
                se() && (V(),
                "complete" === document.readyState ? K() : window.addEventListener("load", K))
            }
            function U(e, t) {
                var n = document.createElement("script");
                n.type = "text/javascript",
                n.async = !1,
                n.defer = !1,
                n.src = e,
                t && (n.onload = n.onreadystatechange = function(e) {
                    ("load" === e.type || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = n.onerror = null,
                    t())
                }
                ,
                n.onerror = function(e) {
                    n.onload = n.onreadystatechange = n.onerror = null,
                    t(new Error("Failed loading script: " + n.src + "\n" + e))
                }
                );
                var a = document.querySelector("head");
                a.insertBefore(n, a.lastChild)
            }
            function W(e) {
                var t = "";
                if (3 === e.nodeType)
                    t += e.textContent;
                else if (1 === e.nodeType) {
                    var n = e.getAttribute("aria-hidden")
                      , a = "none" === window.getComputedStyle(e).display;
                    "true" === n || a || Z(e.childNodes).forEach(function(e) {
                        t += W(e)
                    })
                }
                return t
            }
            function K() {
                var e = he(window.innerWidth, window.innerHeight)
                  , t = Math.floor(e.width * (1 + g.margin))
                  , n = Math.floor(e.height * (1 + g.margin))
                  , a = e.width
                  , r = e.height;
                ae("@page{size:" + t + "px " + n + "px; margin: 0px;}"),
                ae(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + a + "px; max-height:" + r + "px}"),
                document.body.classList.add("print-pdf"),
                document.body.style.width = t + "px",
                document.body.style.height = n + "px",
                me(a, r),
                Z(k.wrapper.querySelectorAll(d)).forEach(function(e, t) {
                    e.setAttribute("data-index-h", t),
                    e.classList.contains("stack") && Z(e.querySelectorAll("section")).forEach(function(e, n) {
                        e.setAttribute("data-index-h", t),
                        e.setAttribute("data-index-v", n)
                    })
                }),
                Z(k.wrapper.querySelectorAll(c)).forEach(function(e) {
                    if (!1 === e.classList.contains("stack")) {
                        var i = (t - a) / 2
                          , s = (n - r) / 2
                          , o = e.scrollHeight
                          , l = Math.max(Math.ceil(o / n), 1);
                        (1 === (l = Math.min(l, g.pdfMaxPagesPerSlide)) && g.center || e.classList.contains("center")) && (s = Math.max((n - o) / 2, 0));
                        var c = document.createElement("div");
                        if (c.className = "pdf-page",
                        c.style.height = (n + g.pdfPageHeightOffset) * l + "px",
                        e.parentNode.insertBefore(c, e),
                        c.appendChild(e),
                        e.style.left = i + "px",
                        e.style.top = s + "px",
                        e.style.width = a + "px",
                        e.slideBackgroundElement && c.insertBefore(e.slideBackgroundElement, e),
                        g.showNotes) {
                            var d = ut(e);
                            if (d) {
                                var u = "string" == typeof g.showNotes ? g.showNotes : "inline"
                                  , f = document.createElement("div");
                                f.classList.add("speaker-notes"),
                                f.classList.add("speaker-notes-pdf"),
                                f.setAttribute("data-layout", u),
                                f.innerHTML = d,
                                "separate-page" === u ? c.parentNode.insertBefore(f, c.nextSibling) : (f.style.left = "8px",
                                f.style.bottom = "8px",
                                f.style.width = t - 16 + "px",
                                c.appendChild(f))
                            }
                        }
                        if (g.slideNumber && /all|print/i.test(g.showSlideNumber)) {
                            var p = parseInt(e.getAttribute("data-index-h"), 10) + 1
                              , m = parseInt(e.getAttribute("data-index-v"), 10) + 1
                              , h = document.createElement("div");
                            h.classList.add("slide-number"),
                            h.classList.add("slide-number-pdf"),
                            h.innerHTML = Ue(p, ".", m),
                            c.appendChild(h)
                        }
                        if (g.pdfSeparateFragments) {
                            var v, b, y = pt(c.querySelectorAll(".fragment"), !0);
                            y.forEach(function(e) {
                                v && v.forEach(function(e) {
                                    e.classList.remove("current-fragment")
                                }),
                                e.forEach(function(e) {
                                    e.classList.add("visible", "current-fragment")
                                });
                                var t = c.cloneNode(!0);
                                c.parentNode.insertBefore(t, (b || c).nextSibling),
                                v = e,
                                b = t
                            }),
                            y.forEach(function(e) {
                                e.forEach(function(e) {
                                    e.classList.remove("visible", "current-fragment")
                                })
                            })
                        } else
                            Z(c.querySelectorAll(".fragment:not(.fade-out)")).forEach(function(e) {
                                e.classList.add("visible")
                            })
                    }
                }),
                le("pdf-ready")
            }
            function $(e, t, n, a) {
                for (var r = e.querySelectorAll("." + n), i = 0; i < r.length; i++) {
                    var s = r[i];
                    if (s.parentNode === e)
                        return s
                }
                var o = document.createElement(t);
                return o.className = n,
                "string" == typeof a && (o.innerHTML = a),
                e.appendChild(o),
                o
            }
            function X(e, t) {
                var n = document.createElement("div");
                n.className = "slide-background " + e.className.replace(/present|past|future/, "");
                var a = document.createElement("div");
                return a.className = "slide-background-content",
                n.appendChild(a),
                t.appendChild(n),
                e.slideBackgroundElement = n,
                e.slideBackgroundContentElement = a,
                J(e),
                n
            }
            function J(e) {
                var t = e.slideBackgroundElement
                  , n = e.slideBackgroundContentElement;
                e.classList.remove("has-dark-background"),
                e.classList.remove("has-light-background"),
                t.removeAttribute("data-loaded"),
                t.removeAttribute("data-background-hash"),
                t.removeAttribute("data-background-size"),
                t.removeAttribute("data-background-transition"),
                t.style.backgroundColor = "",
                n.style.backgroundSize = "",
                n.style.backgroundRepeat = "",
                n.style.backgroundPosition = "",
                n.style.backgroundImage = "",
                n.style.opacity = "",
                n.innerHTML = "";
                var a = {
                    background: e.getAttribute("data-background"),
                    backgroundSize: e.getAttribute("data-background-size"),
                    backgroundImage: e.getAttribute("data-background-image"),
                    backgroundVideo: e.getAttribute("data-background-video"),
                    backgroundIframe: e.getAttribute("data-background-iframe"),
                    backgroundColor: e.getAttribute("data-background-color"),
                    backgroundRepeat: e.getAttribute("data-background-repeat"),
                    backgroundPosition: e.getAttribute("data-background-position"),
                    backgroundTransition: e.getAttribute("data-background-transition"),
                    backgroundOpacity: e.getAttribute("data-background-opacity")
                };
                a.background && (/^(http|file|\/\/)/gi.test(a.background) || /\.(svg|png|jpg|jpeg|gif|bmp)([?#\s]|$)/gi.test(a.background) ? e.setAttribute("data-background-image", a.background) : t.style.background = a.background),
                (a.background || a.backgroundColor || a.backgroundImage || a.backgroundVideo || a.backgroundIframe) && t.setAttribute("data-background-hash", a.background + a.backgroundSize + a.backgroundImage + a.backgroundVideo + a.backgroundIframe + a.backgroundColor + a.backgroundRepeat + a.backgroundPosition + a.backgroundTransition + a.backgroundOpacity),
                a.backgroundSize && t.setAttribute("data-background-size", a.backgroundSize),
                a.backgroundColor && (t.style.backgroundColor = a.backgroundColor),
                a.backgroundTransition && t.setAttribute("data-background-transition", a.backgroundTransition),
                a.backgroundSize && (n.style.backgroundSize = a.backgroundSize),
                a.backgroundRepeat && (n.style.backgroundRepeat = a.backgroundRepeat),
                a.backgroundPosition && (n.style.backgroundPosition = a.backgroundPosition),
                a.backgroundOpacity && (n.style.opacity = a.backgroundOpacity);
                var r, i = a.backgroundColor;
                if (!i) {
                    var s = window.getComputedStyle(t);
                    s && s.backgroundColor && (i = s.backgroundColor)
                }
                if (i) {
                    var o = ie(i);
                    o && 0 !== o.a && ("string" == typeof (r = i) && (r = ie(r)),
                    (r ? (299 * r.r + 587 * r.g + 114 * r.b) / 1e3 : null) < 128 ? e.classList.add("has-dark-background") : e.classList.add("has-light-background"))
                }
            }
            function Y(e) {
                var t = g.transition;
                if ("object" == typeof e && Q(g, e),
                !1 !== h) {
                    var n = k.wrapper.querySelectorAll(c).length;
                    k.wrapper.classList.remove(t),
                    !1 === M.transforms3d && (g.transition = "linear"),
                    k.wrapper.classList.add(g.transition),
                    k.wrapper.setAttribute("data-transition-speed", g.transitionSpeed),
                    k.wrapper.setAttribute("data-background-transition", g.backgroundTransition),
                    k.controls.style.display = g.controls ? "block" : "none",
                    k.progress.style.display = g.progress ? "block" : "none",
                    k.controls.setAttribute("data-controls-layout", g.controlsLayout),
                    k.controls.setAttribute("data-controls-back-arrows", g.controlsBackArrows),
                    g.shuffle && Be(),
                    g.rtl ? k.wrapper.classList.add("rtl") : k.wrapper.classList.remove("rtl"),
                    g.center ? k.wrapper.classList.add("center") : k.wrapper.classList.remove("center"),
                    !1 === g.pause && Te(),
                    g.showNotes && k.speakerNotes.setAttribute("data-layout", "string" == typeof g.showNotes ? g.showNotes : "inline"),
                    g.mouseWheel ? (document.addEventListener("DOMMouseScroll", Dt, !1),
                    document.addEventListener("mousewheel", Dt, !1)) : (document.removeEventListener("DOMMouseScroll", Dt, !1),
                    document.removeEventListener("mousewheel", Dt, !1)),
                    g.rollingLinks ? function() {
                        if (M.transforms3d && !("msPerspective"in document.body.style))
                            for (var e = k.wrapper.querySelectorAll(c + " a"), t = 0, n = e.length; t < n; t++) {
                                var a = e[t];
                                if (a.textContent && !a.querySelector("*") && (!a.className || !a.classList.contains(a, "roll"))) {
                                    var r = document.createElement("span");
                                    r.setAttribute("data-title", a.text),
                                    r.innerHTML = a.innerHTML,
                                    a.classList.add("roll"),
                                    a.innerHTML = "",
                                    a.appendChild(r)
                                }
                            }
                    }() : function() {
                        for (var e = k.wrapper.querySelectorAll(c + " a.roll"), t = 0, n = e.length; t < n; t++) {
                            var a = e[t]
                              , r = a.querySelector("span");
                            r && (a.classList.remove("roll"),
                            a.innerHTML = r.innerHTML)
                        }
                    }(),
                    g.hideInactiveCursor ? (document.addEventListener("mousemove", Tt, !1),
                    document.addEventListener("mousedown", Tt, !1)) : (Ne(),
                    document.removeEventListener("mousemove", Tt, !1),
                    document.removeEventListener("mousedown", Tt, !1)),
                    g.previewLinks ? (ce(),
                    de("[data-preview-link=false]")) : (de(),
                    ce("[data-preview-link]:not([data-preview-link=false])")),
                    l && (l.destroy(),
                    l = null),
                    n > 1 && g.autoSlide && g.autoSlideStoppable && M.canvas && M.requestAnimationFrame && ((l = new Zt(k.wrapper,function() {
                        return Math.min(Math.max((Date.now() - q) / O, 0), 1)
                    }
                    )).on("click", Qt),
                    B = !1),
                    !1 === g.fragments && Z(k.slides.querySelectorAll(".fragment")).forEach(function(e) {
                        e.classList.add("visible"),
                        e.classList.remove("current-fragment")
                    });
                    var a = "none";
                    g.slideNumber && !se() && ("all" === g.showSlideNumber ? a = "block" : "speaker" === g.showSlideNumber && at() && (a = "block")),
                    k.slideNumber.style.display = a,
                    "default" !== g.navigationMode ? k.wrapper.setAttribute("data-navigation-mode", g.navigationMode) : k.wrapper.removeAttribute("data-navigation-mode"),
                    "linear" === g.navigationMode ? (D["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide",
                    D["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide") : (D["N  ,  SPACE"] = "Next slide",
                    D.P = "Previous slide",
                    D["&#8592;  ,  H"] = "Navigate left",
                    D["&#8594;  ,  L"] = "Navigate right",
                    D["&#8593;  ,  K"] = "Navigate up",
                    D["&#8595;  ,  J"] = "Navigate down"),
                    D["Home  ,  &#8984;/CTRL &#8592;"] = "First slide",
                    D["End  ,  &#8984;/CTRL &#8594;"] = "Last slide",
                    D["B  ,  ."] = "Pause",
                    D.F = "Fullscreen",
                    D["ESC, O"] = "Slide overview",
                    Pe()
                }
            }
            function G() {
                var e;
                _ = !0,
                window.addEventListener("hashchange", Xt, !1),
                window.addEventListener("resize", Jt, !1),
                g.touch && ("onpointerdown"in window ? (k.wrapper.addEventListener("pointerdown", qt, !1),
                k.wrapper.addEventListener("pointermove", Bt, !1),
                k.wrapper.addEventListener("pointerup", Ht, !1)) : window.navigator.msPointerEnabled ? (k.wrapper.addEventListener("MSPointerDown", qt, !1),
                k.wrapper.addEventListener("MSPointerMove", Bt, !1),
                k.wrapper.addEventListener("MSPointerUp", Ht, !1)) : (k.wrapper.addEventListener("touchstart", _t, !1),
                k.wrapper.addEventListener("touchmove", Ot, !1),
                k.wrapper.addEventListener("touchend", Pt, !1))),
                g.keyboard && (document.addEventListener("keydown", It, !1),
                document.addEventListener("keypress", Rt, !1)),
                g.progress && k.progress && k.progress.addEventListener("click", jt, !1),
                k.pauseOverlay.addEventListener("click", Te, !1),
                g.focusBodyOnPageVisibilityChange && ("hidden"in document ? e = "visibilitychange" : "msHidden"in document ? e = "msvisibilitychange" : "webkitHidden"in document && (e = "webkitvisibilitychange"),
                e && document.addEventListener(e, Yt, !1));
                var t = ["touchstart", "click"];
                p.match(/android/gi) && (t = ["touchstart"]),
                t.forEach(function(e) {
                    k.controlsLeft.forEach(function(t) {
                        t.addEventListener(e, zt, !1)
                    }),
                    k.controlsRight.forEach(function(t) {
                        t.addEventListener(e, Ft, !1)
                    }),
                    k.controlsUp.forEach(function(t) {
                        t.addEventListener(e, Ut, !1)
                    }),
                    k.controlsDown.forEach(function(t) {
                        t.addEventListener(e, Wt, !1)
                    }),
                    k.controlsPrev.forEach(function(t) {
                        t.addEventListener(e, Kt, !1)
                    }),
                    k.controlsNext.forEach(function(t) {
                        t.addEventListener(e, $t, !1)
                    })
                })
            }
            function V() {
                _ = !1,
                document.removeEventListener("keydown", It, !1),
                document.removeEventListener("keypress", Rt, !1),
                window.removeEventListener("hashchange", Xt, !1),
                window.removeEventListener("resize", Jt, !1),
                k.wrapper.removeEventListener("pointerdown", qt, !1),
                k.wrapper.removeEventListener("pointermove", Bt, !1),
                k.wrapper.removeEventListener("pointerup", Ht, !1),
                k.wrapper.removeEventListener("MSPointerDown", qt, !1),
                k.wrapper.removeEventListener("MSPointerMove", Bt, !1),
                k.wrapper.removeEventListener("MSPointerUp", Ht, !1),
                k.wrapper.removeEventListener("touchstart", _t, !1),
                k.wrapper.removeEventListener("touchmove", Ot, !1),
                k.wrapper.removeEventListener("touchend", Pt, !1),
                k.pauseOverlay.removeEventListener("click", Te, !1),
                g.progress && k.progress && k.progress.removeEventListener("click", jt, !1),
                ["touchstart", "click"].forEach(function(e) {
                    k.controlsLeft.forEach(function(t) {
                        t.removeEventListener(e, zt, !1)
                    }),
                    k.controlsRight.forEach(function(t) {
                        t.removeEventListener(e, Ft, !1)
                    }),
                    k.controlsUp.forEach(function(t) {
                        t.removeEventListener(e, Ut, !1)
                    }),
                    k.controlsDown.forEach(function(t) {
                        t.removeEventListener(e, Wt, !1)
                    }),
                    k.controlsPrev.forEach(function(t) {
                        t.removeEventListener(e, Kt, !1)
                    }),
                    k.controlsNext.forEach(function(t) {
                        t.removeEventListener(e, $t, !1)
                    })
                })
            }
            function Q(e, t) {
                for (var n in t)
                    e[n] = t[n];
                return e
            }
            function Z(e) {
                return Array.prototype.slice.call(e)
            }
            function ee(e) {
                if ("string" == typeof e) {
                    if ("null" === e)
                        return null;
                    if ("true" === e)
                        return !0;
                    if ("false" === e)
                        return !1;
                    if (e.match(/^-?[\d\.]+$/))
                        return parseFloat(e)
                }
                return e
            }
            function te(e, t) {
                e.style.WebkitTransform = t,
                e.style.MozTransform = t,
                e.style.msTransform = t,
                e.style.transform = t
            }
            function ne(e) {
                "string" == typeof e.layout && (L.layout = e.layout),
                "string" == typeof e.overview && (L.overview = e.overview),
                L.layout ? te(k.slides, L.layout + " " + L.overview) : te(k.slides, L.overview)
            }
            function ae(e) {
                var t = document.createElement("style");
                t.type = "text/css",
                t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)),
                document.getElementsByTagName("head")[0].appendChild(t)
            }
            function re(e, t) {
                for (var n = e.parentNode; n; ) {
                    var a = n.matches || n.matchesSelector || n.msMatchesSelector;
                    if (a && a.call(n, t))
                        return n;
                    n = n.parentNode
                }
                return null
            }
            function ie(e) {
                var t = e.match(/^#([0-9a-f]{3})$/i);
                if (t && t[1])
                    return t = t[1],
                    {
                        r: 17 * parseInt(t.charAt(0), 16),
                        g: 17 * parseInt(t.charAt(1), 16),
                        b: 17 * parseInt(t.charAt(2), 16)
                    };
                var n = e.match(/^#([0-9a-f]{6})$/i);
                if (n && n[1])
                    return n = n[1],
                    {
                        r: parseInt(n.substr(0, 2), 16),
                        g: parseInt(n.substr(2, 2), 16),
                        b: parseInt(n.substr(4, 2), 16)
                    };
                var a = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
                if (a)
                    return {
                        r: parseInt(a[1], 10),
                        g: parseInt(a[2], 10),
                        b: parseInt(a[3], 10)
                    };
                var r = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
                return r ? {
                    r: parseInt(r[1], 10),
                    g: parseInt(r[2], 10),
                    b: parseInt(r[3], 10),
                    a: parseFloat(r[4])
                } : null
            }
            function se() {
                return /print-pdf/gi.test(window.location.search)
            }
            function oe() {
                setTimeout(function() {
                    window.scrollTo(0, 1)
                }, 10)
            }
            function le(e, t) {
                var n = document.createEvent("HTMLEvents", 1, 2);
                n.initEvent(e, !0, !0),
                Q(n, t),
                k.wrapper.dispatchEvent(n),
                g.postMessageEvents && window.parent !== window.self && window.parent.postMessage(JSON.stringify({
                    namespace: "reveal",
                    eventName: e,
                    state: ft()
                }), "*")
            }
            function ce(e) {
                var t = Z(document.querySelectorAll(e || "a"));
                t.forEach(function(e) {
                    /^(http|www)/gi.test(e.getAttribute("href")) && e.addEventListener("click", Vt, !1)
                })
            }
            function de(e) {
                var t = Z(document.querySelectorAll(e || "a"));
                t.forEach(function(e) {
                    /^(http|www)/gi.test(e.getAttribute("href")) && e.removeEventListener("click", Vt, !1)
                })
            }
            function ue(e) {
                "boolean" == typeof e ? e ? fe() : pe() : k.overlay ? pe() : fe()
            }
            function fe() {
                if (g.help) {
                    pe(),
                    k.overlay = document.createElement("div"),
                    k.overlay.classList.add("overlay"),
                    k.overlay.classList.add("overlay-help"),
                    k.wrapper.appendChild(k.overlay);
                    var e = '<p class="title">Keyboard Shortcuts</p><br/>';
                    for (var t in e += "<table><th>KEY</th><th>ACTION</th>",
                    D)
                        e += "<tr><td>" + t + "</td><td>" + D[t] + "</td></tr>";
                    for (var n in j)
                        j[n].key && j[n].description && (e += "<tr><td>" + j[n].key + "</td><td>" + j[n].description + "</td></tr>");
                    e += "</table>",
                    k.overlay.innerHTML = ["<header>", '<a class="close" href="#"><span class="icon"></span></a>', "</header>", '<div class="viewport">', '<div class="viewport-inner">' + e + "</div>", "</div>"].join(""),
                    k.overlay.querySelector(".close").addEventListener("click", function(e) {
                        pe(),
                        e.preventDefault()
                    }, !1),
                    setTimeout(function() {
                        k.overlay.classList.add("visible")
                    }, 1)
                }
            }
            function pe() {
                k.overlay && (k.overlay.parentNode.removeChild(k.overlay),
                k.overlay = null)
            }
            function ge() {
                if (k.wrapper && !se()) {
                    if (!g.disableLayout) {
                        s && document.documentElement.style.setProperty("--vh", .01 * window.innerHeight + "px");
                        var e = he()
                          , t = S;
                        me(g.width, g.height),
                        k.slides.style.width = e.width + "px",
                        k.slides.style.height = e.height + "px",
                        S = Math.min(e.presentationWidth / e.width, e.presentationHeight / e.height),
                        S = Math.max(S, g.minScale),
                        1 === (S = Math.min(S, g.maxScale)) ? (k.slides.style.zoom = "",
                        k.slides.style.left = "",
                        k.slides.style.top = "",
                        k.slides.style.bottom = "",
                        k.slides.style.right = "",
                        ne({
                            layout: ""
                        })) : S > 1 && M.zoom ? (k.slides.style.zoom = S,
                        k.slides.style.left = "",
                        k.slides.style.top = "",
                        k.slides.style.bottom = "",
                        k.slides.style.right = "",
                        ne({
                            layout: ""
                        })) : (k.slides.style.zoom = "",
                        k.slides.style.left = "50%",
                        k.slides.style.top = "50%",
                        k.slides.style.bottom = "auto",
                        k.slides.style.right = "auto",
                        ne({
                            layout: "translate(-50%, -50%) scale(" + S + ")"
                        }));
                        for (var n = Z(k.wrapper.querySelectorAll(c)), a = 0, r = n.length; a < r; a++) {
                            var i = n[a];
                            "none" !== i.style.display && (g.center || i.classList.contains("center") ? i.classList.contains("stack") ? i.style.top = 0 : i.style.top = Math.max((e.height - i.scrollHeight) / 2, 0) + "px" : i.style.top = "")
                        }
                        t !== S && le("resize", {
                            oldScale: t,
                            scale: S,
                            size: e
                        })
                    }
                    ze(),
                    $e(),
                    Le() && Ee()
                }
            }
            function me(e, t) {
                Z(k.slides.querySelectorAll("section > .stretch")).forEach(function(n) {
                    var a = function(e, t) {
                        if (t = t || 0,
                        e) {
                            var n, a = e.style.height;
                            return e.style.height = "0px",
                            e.parentNode.style.height = "auto",
                            n = t - e.parentNode.offsetHeight,
                            e.style.height = a + "px",
                            e.parentNode.style.removeProperty("height"),
                            n
                        }
                        return t
                    }(n, t);
                    if (/(img|video)/gi.test(n.nodeName)) {
                        var r = n.naturalWidth || n.videoWidth
                          , i = n.naturalHeight || n.videoHeight
                          , s = Math.min(e / r, a / i);
                        n.style.width = r * s + "px",
                        n.style.height = i * s + "px"
                    } else
                        n.style.width = e + "px",
                        n.style.height = a + "px"
                })
            }
            function he(e, t) {
                var n = {
                    width: g.width,
                    height: g.height,
                    presentationWidth: e || k.wrapper.offsetWidth,
                    presentationHeight: t || k.wrapper.offsetHeight
                };
                return n.presentationWidth -= n.presentationWidth * g.margin,
                n.presentationHeight -= n.presentationHeight * g.margin,
                "string" == typeof n.width && /%$/.test(n.width) && (n.width = parseInt(n.width, 10) / 100 * n.presentationWidth),
                "string" == typeof n.height && /%$/.test(n.height) && (n.height = parseInt(n.height, 10) / 100 * n.presentationHeight),
                n
            }
            function ve(e, t) {
                "object" == typeof e && "function" == typeof e.setAttribute && e.setAttribute("data-previous-indexv", t || 0)
            }
            function be(e) {
                if ("object" == typeof e && "function" == typeof e.setAttribute && e.classList.contains("stack")) {
                    var t = e.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
                    return parseInt(e.getAttribute(t) || 0, 10)
                }
                return 0
            }
            function ye() {
                if (g.overview && !Le()) {
                    v = !0,
                    k.wrapper.classList.add("overview"),
                    k.wrapper.classList.remove("overview-deactivating"),
                    M.overviewTransitions && setTimeout(function() {
                        k.wrapper.classList.add("overview-animated")
                    }, 1),
                    yt(),
                    k.slides.appendChild(k.background),
                    Z(k.wrapper.querySelectorAll(c)).forEach(function(e) {
                        e.classList.contains("stack") || e.addEventListener("click", Gt, !0)
                    });
                    var e = he();
                    b = e.width + 70,
                    y = e.height + 70,
                    g.rtl && (b = -b),
                    De(),
                    we(),
                    Ee(),
                    ge(),
                    le("overviewshown", {
                        indexh: t,
                        indexv: n,
                        currentSlide: r
                    })
                }
            }
            function we() {
                Z(k.wrapper.querySelectorAll(d)).forEach(function(e, t) {
                    e.setAttribute("data-index-h", t),
                    te(e, "translate3d(" + t * b + "px, 0, 0)"),
                    e.classList.contains("stack") && Z(e.querySelectorAll("section")).forEach(function(e, n) {
                        e.setAttribute("data-index-h", t),
                        e.setAttribute("data-index-v", n),
                        te(e, "translate3d(0, " + n * y + "px, 0)")
                    })
                }),
                Z(k.background.childNodes).forEach(function(e, t) {
                    te(e, "translate3d(" + t * b + "px, 0, 0)"),
                    Z(e.querySelectorAll(".slide-background")).forEach(function(e, t) {
                        te(e, "translate3d(0, " + t * y + "px, 0)")
                    })
                })
            }
            function Ee() {
                var e = Math.min(window.innerWidth, window.innerHeight)
                  , a = Math.max(e / 5, 150) / e;
                ne({
                    overview: ["scale(" + a + ")", "translateX(" + -t * b + "px)", "translateY(" + -n * y + "px)"].join(" ")
                })
            }
            function Ae() {
                g.overview && (v = !1,
                k.wrapper.classList.remove("overview"),
                k.wrapper.classList.remove("overview-animated"),
                k.wrapper.classList.add("overview-deactivating"),
                setTimeout(function() {
                    k.wrapper.classList.remove("overview-deactivating")
                }, 1),
                k.wrapper.appendChild(k.background),
                Z(k.wrapper.querySelectorAll(c)).forEach(function(e) {
                    te(e, ""),
                    e.removeEventListener("click", Gt, !0)
                }),
                Z(k.background.querySelectorAll(".slide-background")).forEach(function(e) {
                    te(e, "")
                }),
                ne({
                    overview: ""
                }),
                Oe(t, n),
                ge(),
                bt(),
                le("overviewhidden", {
                    indexh: t,
                    indexv: n,
                    currentSlide: r
                }))
            }
            function Se(e) {
                "boolean" == typeof e ? e ? ye() : Ae() : Le() ? Ae() : ye()
            }
            function Le() {
                return v
            }
            function ke() {
                var e, a = "/", i = r ? r.getAttribute("id") : null;
                if (i && (i = encodeURIComponent(i)),
                g.fragmentInURL && (e = st().f),
                "string" == typeof i && i.length && void 0 === e)
                    a = "/" + i;
                else {
                    var s = g.hashOneBasedIndex ? 1 : 0;
                    (t > 0 || n > 0 || void 0 !== e) && (a += t + s),
                    (n > 0 || void 0 !== e) && (a += "/" + (n + s)),
                    void 0 !== e && (a += "/" + e)
                }
                return a
            }
            function xe(e) {
                return (e = e || r) && e.parentNode && !!e.parentNode.nodeName.match(/section/i)
            }
            function Ne() {
                R && (R = !1,
                k.wrapper.style.cursor = "")
            }
            function Me() {
                !1 === R && (R = !0,
                k.wrapper.style.cursor = "none")
            }
            function Ce() {
                if (g.pause) {
                    var e = k.wrapper.classList.contains("paused");
                    yt(),
                    k.wrapper.classList.add("paused"),
                    !1 === e && le("paused")
                }
            }
            function Te() {
                var e = k.wrapper.classList.contains("paused");
                k.wrapper.classList.remove("paused"),
                bt(),
                e && le("resumed")
            }
            function Re(e) {
                "boolean" == typeof e ? e ? Ce() : Te() : Ie() ? Te() : Ce()
            }
            function Ie() {
                return k.wrapper.classList.contains("paused")
            }
            function _e(e) {
                "boolean" == typeof e ? e ? Et() : wt() : B ? Et() : wt()
            }
            function Oe(e, i, s, o) {
                a = r;
                var l = k.wrapper.querySelectorAll(d);
                if (0 !== l.length) {
                    void 0 !== i || Le() || (i = be(l[e])),
                    a && a.parentNode && a.parentNode.classList.contains("stack") && ve(a.parentNode, n);
                    var c = A.concat();
                    A.length = 0;
                    var p = t || 0
                      , g = n || 0;
                    t = He(d, void 0 === e ? t : e),
                    n = He(u, void 0 === i ? n : i),
                    De(),
                    ge(),
                    Le() && Ee();
                    var m = l[t]
                      , h = m.querySelectorAll("section");
                    r = h[n] || m,
                    void 0 !== s && mt(s);
                    var v = t !== p || n !== g;
                    v || (a = null),
                    a && a !== r && (a.classList.remove("present"),
                    a.setAttribute("aria-hidden", "true"),
                    k.wrapper.querySelector(f).classList.contains("present") && setTimeout(function() {
                        var e, t = Z(k.wrapper.querySelectorAll(d + ".stack"));
                        for (e in t)
                            t[e] && ve(t[e], 0)
                    }, 0));
                    e: for (var b = 0, y = A.length; b < y; b++) {
                        for (var w = 0; w < c.length; w++)
                            if (c[w] === A[b]) {
                                c.splice(w, 1);
                                continue e
                            }
                        document.documentElement.classList.add(A[b]),
                        le(A[b])
                    }
                    for (; c.length; )
                        document.documentElement.classList.remove(c.pop());
                    v && le("slidechanged", {
                        indexh: t,
                        indexv: n,
                        previousSlide: a,
                        currentSlide: r,
                        origin: o
                    }),
                    !v && a || (et(a),
                    Ve(r)),
                    k.statusDiv.textContent = W(r),
                    We(),
                    ze(),
                    Ke(),
                    $e(),
                    Fe(),
                    je(),
                    gt(),
                    it(),
                    bt()
                }
            }
            function Pe() {
                var e;
                V(),
                G(),
                ge(),
                O = g.autoSlide,
                bt(),
                se(),
                k.background.innerHTML = "",
                k.background.classList.add("no-transition"),
                Z(k.wrapper.querySelectorAll(d)).forEach(function(e) {
                    var t = X(e, k.background);
                    Z(e.querySelectorAll("section")).forEach(function(e) {
                        X(e, t),
                        t.classList.add("stack")
                    })
                }),
                g.parallaxBackgroundImage ? (k.background.style.backgroundImage = 'url("' + g.parallaxBackgroundImage + '")',
                k.background.style.backgroundSize = g.parallaxBackgroundSize,
                k.background.style.backgroundRepeat = g.parallaxBackgroundRepeat,
                k.background.style.backgroundPosition = g.parallaxBackgroundPosition,
                setTimeout(function() {
                    k.wrapper.classList.add("has-parallax-background")
                }, 1)) : (k.background.style.backgroundImage = "",
                k.wrapper.classList.remove("has-parallax-background")),
                it(),
                Z(k.wrapper.querySelectorAll(d)).forEach(function(e) {
                    var t = Z(e.querySelectorAll("section"));
                    t.forEach(function(e, t) {
                        pt(e.querySelectorAll(".fragment"))
                    }),
                    0 === t.length && pt(e.querySelectorAll(".fragment"))
                }),
                We(),
                ze(),
                Fe(),
                De(),
                Ke(!0),
                g.showNotes && k.slides.querySelectorAll("[data-notes], aside.notes").length > 0 ? k.wrapper.classList.add("show-notes") : k.wrapper.classList.remove("show-notes"),
                je(),
                (e = function(e, t, n) {
                    Z(k.slides.querySelectorAll("iframe[" + e + '*="' + t + '"]')).forEach(function(t) {
                        var a = t.getAttribute(e);
                        a && -1 === a.indexOf(n) && t.setAttribute(e, a + (/\?/.test(a) ? "&" : "?") + n)
                    })
                }
                )("src", "youtube.com/embed/", "enablejsapi=1"),
                e("data-src", "youtube.com/embed/", "enablejsapi=1"),
                e("src", "player.vimeo.com/", "api=1"),
                e("data-src", "player.vimeo.com/", "api=1"),
                !1 === g.autoPlayMedia ? et(r, {
                    unloadIframes: !1
                }) : Ve(r),
                Le() && we()
            }
            function qe(e) {
                return pt((e = e || r).querySelectorAll(".fragment"))
            }
            function Be() {
                var e = Z(k.wrapper.querySelectorAll(d));
                e.forEach(function(t) {
                    k.slides.insertBefore(t, e[Math.floor(Math.random() * e.length)])
                })
            }
            function He(e, t) {
                var n = Z(k.wrapper.querySelectorAll(e))
                  , a = n.length
                  , r = se();
                if (a) {
                    g.loop && (t %= a) < 0 && (t = a + t),
                    t = Math.max(Math.min(t, a - 1), 0);
                    for (var i = 0; i < a; i++) {
                        var s = n[i]
                          , o = g.rtl && !xe(s);
                        s.classList.remove("past"),
                        s.classList.remove("present"),
                        s.classList.remove("future"),
                        s.setAttribute("hidden", ""),
                        s.setAttribute("aria-hidden", "true"),
                        s.querySelector("section") && s.classList.add("stack"),
                        r ? s.classList.add("present") : i < t ? (s.classList.add(o ? "future" : "past"),
                        g.fragments && Z(s.querySelectorAll(".fragment")).forEach(function(e) {
                            e.classList.add("visible"),
                            e.classList.remove("current-fragment")
                        })) : i > t && (s.classList.add(o ? "past" : "future"),
                        g.fragments && Z(s.querySelectorAll(".fragment.visible")).forEach(function(e) {
                            e.classList.remove("visible"),
                            e.classList.remove("current-fragment")
                        }))
                    }
                    n[t].classList.add("present"),
                    n[t].removeAttribute("hidden"),
                    n[t].removeAttribute("aria-hidden");
                    var l = n[t].getAttribute("data-state");
                    l && (A = A.concat(l.split(" ")))
                } else
                    t = 0;
                return t
            }
            function De() {
                var e, a, r = Z(k.wrapper.querySelectorAll(d)), i = r.length;
                if (i && void 0 !== t) {
                    var o = Le() ? 10 : g.viewDistance;
                    s && (o = Le() ? 6 : 2),
                    se() && (o = Number.MAX_VALUE);
                    for (var l = 0; l < i; l++) {
                        var c = r[l]
                          , u = Z(c.querySelectorAll("section"))
                          , f = u.length;
                        if (e = Math.abs((t || 0) - l) || 0,
                        g.loop && (e = Math.abs(((t || 0) - l) % (i - o)) || 0),
                        e < o ? Xe(c) : Je(c),
                        f)
                            for (var p = be(c), m = 0; m < f; m++) {
                                var h = u[m];
                                a = l === (t || 0) ? Math.abs((n || 0) - m) : Math.abs(m - p),
                                e + a < o ? Xe(h) : Je(h)
                            }
                    }
                    k.wrapper.querySelectorAll(".slides>section>section").length ? k.wrapper.classList.add("has-vertical-slides") : k.wrapper.classList.remove("has-vertical-slides"),
                    k.wrapper.querySelectorAll(".slides>section").length > 1 ? k.wrapper.classList.add("has-horizontal-slides") : k.wrapper.classList.remove("has-horizontal-slides")
                }
            }
            function je() {
                g.showNotes && k.speakerNotes && r && !se() && (k.speakerNotes.innerHTML = ut() || '<span class="notes-placeholder">No notes on this slide.</span>')
            }
            function ze() {
                g.progress && k.progressbar && (k.progressbar.style.width = nt() * k.wrapper.offsetWidth + "px")
            }
            function Fe() {
                if (g.slideNumber && k.slideNumber) {
                    var e, a = "h.v";
                    if ("function" == typeof g.slideNumber)
                        e = g.slideNumber();
                    else
                        switch ("string" == typeof g.slideNumber && (a = g.slideNumber),
                        /c/.test(a) || 1 !== k.wrapper.querySelectorAll(d).length || (a = "c"),
                        e = [],
                        a) {
                        case "c":
                            e.push(tt() + 1);
                            break;
                        case "c/t":
                            e.push(tt() + 1, "/", lt());
                            break;
                        case "h/v":
                            e.push(t + 1),
                            xe() && e.push("/", n + 1);
                            break;
                        default:
                            e.push(t + 1),
                            xe() && e.push(".", n + 1)
                        }
                    k.slideNumber.innerHTML = Ue(e[0], e[1], e[2])
                }
            }
            function Ue(e, t, n) {
                var a = "#" + ke();
                return "number" != typeof n || isNaN(n) ? '<a href="' + a + '"><span class="slide-number-a">' + e + "</span></a>" : '<a href="' + a + '"><span class="slide-number-a">' + e + '</span><span class="slide-number-delimiter">' + t + '</span><span class="slide-number-b">' + n + "</span></a>"
            }
            function We() {
                var e = Ye()
                  , t = Ge();
                k.controlsLeft.concat(k.controlsRight).concat(k.controlsUp).concat(k.controlsDown).concat(k.controlsPrev).concat(k.controlsNext).forEach(function(e) {
                    e.classList.remove("enabled"),
                    e.classList.remove("fragmented"),
                    e.setAttribute("disabled", "disabled")
                }),
                e.left && k.controlsLeft.forEach(function(e) {
                    e.classList.add("enabled"),
                    e.removeAttribute("disabled")
                }),
                e.right && k.controlsRight.forEach(function(e) {
                    e.classList.add("enabled"),
                    e.removeAttribute("disabled")
                }),
                e.up && k.controlsUp.forEach(function(e) {
                    e.classList.add("enabled"),
                    e.removeAttribute("disabled")
                }),
                e.down && k.controlsDown.forEach(function(e) {
                    e.classList.add("enabled"),
                    e.removeAttribute("disabled")
                }),
                (e.left || e.up) && k.controlsPrev.forEach(function(e) {
                    e.classList.add("enabled"),
                    e.removeAttribute("disabled")
                }),
                (e.right || e.down) && k.controlsNext.forEach(function(e) {
                    e.classList.add("enabled"),
                    e.removeAttribute("disabled")
                }),
                r && (t.prev && k.controlsPrev.forEach(function(e) {
                    e.classList.add("fragmented", "enabled"),
                    e.removeAttribute("disabled")
                }),
                t.next && k.controlsNext.forEach(function(e) {
                    e.classList.add("fragmented", "enabled"),
                    e.removeAttribute("disabled")
                }),
                xe(r) ? (t.prev && k.controlsUp.forEach(function(e) {
                    e.classList.add("fragmented", "enabled"),
                    e.removeAttribute("disabled")
                }),
                t.next && k.controlsDown.forEach(function(e) {
                    e.classList.add("fragmented", "enabled"),
                    e.removeAttribute("disabled")
                })) : (t.prev && k.controlsLeft.forEach(function(e) {
                    e.classList.add("fragmented", "enabled"),
                    e.removeAttribute("disabled")
                }),
                t.next && k.controlsRight.forEach(function(e) {
                    e.classList.add("fragmented", "enabled"),
                    e.removeAttribute("disabled")
                }))),
                g.controlsTutorial && (!E && e.down ? k.controlsDownArrow.classList.add("highlight") : (k.controlsDownArrow.classList.remove("highlight"),
                !w && e.right && 0 === n ? k.controlsRightArrow.classList.add("highlight") : k.controlsRightArrow.classList.remove("highlight")))
            }
            function Ke(e) {
                var a = null
                  , s = g.rtl ? "future" : "past"
                  , o = g.rtl ? "past" : "future";
                if (Z(k.background.childNodes).forEach(function(r, i) {
                    r.classList.remove("past"),
                    r.classList.remove("present"),
                    r.classList.remove("future"),
                    i < t ? r.classList.add(s) : i > t ? r.classList.add(o) : (r.classList.add("present"),
                    a = r),
                    (e || i === t) && Z(r.querySelectorAll(".slide-background")).forEach(function(e, r) {
                        e.classList.remove("past"),
                        e.classList.remove("present"),
                        e.classList.remove("future"),
                        r < n ? e.classList.add("past") : r > n ? e.classList.add("future") : (e.classList.add("present"),
                        i === t && (a = e))
                    })
                }),
                i && et(i),
                a) {
                    Ve(a);
                    var l = a.querySelector(".slide-background-content");
                    if (l) {
                        var c = l.style.backgroundImage || "";
                        /\.gif/i.test(c) && (l.style.backgroundImage = "",
                        window.getComputedStyle(l).opacity,
                        l.style.backgroundImage = c)
                    }
                    var d = i ? i.getAttribute("data-background-hash") : null
                      , u = a.getAttribute("data-background-hash");
                    u && u === d && a !== i && k.background.classList.add("no-transition"),
                    i = a
                }
                r && ["has-light-background", "has-dark-background"].forEach(function(e) {
                    r.classList.contains(e) ? k.wrapper.classList.add(e) : k.wrapper.classList.remove(e)
                }),
                setTimeout(function() {
                    k.background.classList.remove("no-transition")
                }, 1)
            }
            function $e() {
                if (g.parallaxBackgroundImage) {
                    var e, a, r = k.wrapper.querySelectorAll(d), i = k.wrapper.querySelectorAll(u), s = k.background.style.backgroundSize.split(" ");
                    1 === s.length ? e = a = parseInt(s[0], 10) : (e = parseInt(s[0], 10),
                    a = parseInt(s[1], 10));
                    var o, l, c = k.background.offsetWidth, f = r.length;
                    o = "number" == typeof g.parallaxBackgroundHorizontal ? g.parallaxBackgroundHorizontal : f > 1 ? (e - c) / (f - 1) : 0,
                    l = o * t * -1;
                    var p, m, h = k.background.offsetHeight, v = i.length;
                    p = "number" == typeof g.parallaxBackgroundVertical ? g.parallaxBackgroundVertical : (a - h) / (v - 1),
                    m = v > 0 ? p * n : 0,
                    k.background.style.backgroundPosition = l + "px " + -m + "px"
                }
            }
            function Xe(e, t) {
                t = t || {},
                e.style.display = g.display,
                Z(e.querySelectorAll("img[data-src], video[data-src], audio[data-src], iframe[data-src]")).forEach(function(e) {
                    ("IFRAME" !== e.tagName || function(e) {
                        var t = g.preloadIframes;
                        return "boolean" != typeof t && (t = e.hasAttribute("data-preload")),
                        t
                    }(e)) && (e.setAttribute("src", e.getAttribute("data-src")),
                    e.setAttribute("data-lazy-loaded", ""),
                    e.removeAttribute("data-src"))
                }),
                Z(e.querySelectorAll("video, audio")).forEach(function(e) {
                    var t = 0;
                    Z(e.querySelectorAll("source[data-src]")).forEach(function(e) {
                        e.setAttribute("src", e.getAttribute("data-src")),
                        e.removeAttribute("data-src"),
                        e.setAttribute("data-lazy-loaded", ""),
                        t += 1
                    }),
                    t > 0 && e.load()
                });
                var n = e.slideBackgroundElement;
                if (n) {
                    n.style.display = "block";
                    var a = e.slideBackgroundContentElement;
                    if (!1 === n.hasAttribute("data-loaded")) {
                        n.setAttribute("data-loaded", "true");
                        var r = e.getAttribute("data-background-image")
                          , i = e.getAttribute("data-background-video")
                          , o = e.hasAttribute("data-background-video-loop")
                          , l = e.hasAttribute("data-background-video-muted")
                          , c = e.getAttribute("data-background-iframe");
                        if (r)
                            a.style.backgroundImage = "url(" + encodeURI(r) + ")";
                        else if (i && !at()) {
                            var d = document.createElement("video");
                            o && d.setAttribute("loop", ""),
                            l && (d.muted = !0),
                            s && (d.muted = !0,
                            d.autoplay = !0,
                            d.setAttribute("playsinline", "")),
                            i.split(",").forEach(function(e) {
                                d.innerHTML += '<source src="' + e + '">'
                            }),
                            a.appendChild(d)
                        } else if (c && !0 !== t.excludeIframes) {
                            var u = document.createElement("iframe");
                            u.setAttribute("allowfullscreen", ""),
                            u.setAttribute("mozallowfullscreen", ""),
                            u.setAttribute("webkitallowfullscreen", ""),
                            /autoplay=(1|true|yes)/gi.test(c) ? u.setAttribute("data-src", c) : u.setAttribute("src", c),
                            u.style.width = "100%",
                            u.style.height = "100%",
                            u.style.maxHeight = "100%",
                            u.style.maxWidth = "100%",
                            a.appendChild(u)
                        }
                    }
                }
            }
            function Je(e) {
                e.style.display = "none";
                var t = dt(e);
                t && (t.style.display = "none"),
                Z(e.querySelectorAll("video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]")).forEach(function(e) {
                    e.setAttribute("data-src", e.getAttribute("src")),
                    e.removeAttribute("src")
                }),
                Z(e.querySelectorAll("video[data-lazy-loaded] source[src], audio source[src]")).forEach(function(e) {
                    e.setAttribute("data-src", e.getAttribute("src")),
                    e.removeAttribute("src")
                })
            }
            function Ye() {
                var e = k.wrapper.querySelectorAll(d)
                  , a = k.wrapper.querySelectorAll(u)
                  , r = {
                    left: t > 0,
                    right: t < e.length - 1,
                    up: n > 0,
                    down: n < a.length - 1
                };
                if (g.loop && (e.length > 1 && (r.left = !0,
                r.right = !0),
                a.length > 1 && (r.up = !0,
                r.down = !0)),
                g.rtl) {
                    var i = r.left;
                    r.left = r.right,
                    r.right = i
                }
                return r
            }
            function Ge() {
                if (r && g.fragments) {
                    var e = r.querySelectorAll(".fragment")
                      , t = r.querySelectorAll(".fragment:not(.visible)");
                    return {
                        prev: e.length - t.length > 0,
                        next: !!t.length
                    }
                }
                return {
                    prev: !1,
                    next: !1
                }
            }
            function Ve(e) {
                e && !at() && (Z(e.querySelectorAll('img[src$=".gif"]')).forEach(function(e) {
                    e.setAttribute("src", e.getAttribute("src"))
                }),
                Z(e.querySelectorAll("video, audio")).forEach(function(e) {
                    if (!re(e, ".fragment") || re(e, ".fragment.visible")) {
                        var t = g.autoPlayMedia;
                        if ("boolean" != typeof t && (t = e.hasAttribute("data-autoplay") || !!re(e, ".slide-background")),
                        t && "function" == typeof e.play)
                            if (e.readyState > 1)
                                Qe({
                                    target: e
                                });
                            else if (s) {
                                var n = e.play();
                                n && "function" == typeof n.catch && !1 === e.controls && n.catch(function() {
                                    e.controls = !0,
                                    e.addEventListener("play", function() {
                                        e.controls = !1
                                    })
                                })
                            } else
                                e.removeEventListener("loadeddata", Qe),
                                e.addEventListener("loadeddata", Qe)
                    }
                }),
                Z(e.querySelectorAll("iframe[src]")).forEach(function(e) {
                    re(e, ".fragment") && !re(e, ".fragment.visible") || Ze({
                        target: e
                    })
                }),
                Z(e.querySelectorAll("iframe[data-src]")).forEach(function(e) {
                    re(e, ".fragment") && !re(e, ".fragment.visible") || e.getAttribute("src") !== e.getAttribute("data-src") && (e.removeEventListener("load", Ze),
                    e.addEventListener("load", Ze),
                    e.setAttribute("src", e.getAttribute("data-src")))
                }))
            }
            function Qe(e) {
                var t = !!re(e.target, "html")
                  , n = !!re(e.target, ".present");
                t && n && (e.target.currentTime = 0,
                e.target.play()),
                e.target.removeEventListener("loadeddata", Qe)
            }
            function Ze(e) {
                var t = e.target;
                if (t && t.contentWindow) {
                    var n = !!re(e.target, "html")
                      , a = !!re(e.target, ".present");
                    if (n && a) {
                        var r = g.autoPlayMedia;
                        "boolean" != typeof r && (r = t.hasAttribute("data-autoplay") || !!re(t, ".slide-background")),
                        /youtube\.com\/embed\//.test(t.getAttribute("src")) && r ? t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t.getAttribute("src")) && r ? t.contentWindow.postMessage('{"method":"play"}', "*") : t.contentWindow.postMessage("slide:start", "*")
                    }
                }
            }
            function et(e, t) {
                t = Q({
                    unloadIframes: !0
                }, t || {}),
                e && e.parentNode && (Z(e.querySelectorAll("video, audio")).forEach(function(e) {
                    e.hasAttribute("data-ignore") || "function" != typeof e.pause || (e.setAttribute("data-paused-by-reveal", ""),
                    e.pause())
                }),
                Z(e.querySelectorAll("iframe")).forEach(function(e) {
                    e.contentWindow && e.contentWindow.postMessage("slide:stop", "*"),
                    e.removeEventListener("load", Ze)
                }),
                Z(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e) {
                    !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                }),
                Z(e.querySelectorAll('iframe[src*="player.vimeo.com/"]')).forEach(function(e) {
                    !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"method":"pause"}', "*")
                }),
                !0 === t.unloadIframes && Z(e.querySelectorAll("iframe[data-src]")).forEach(function(e) {
                    e.setAttribute("src", "about:blank"),
                    e.removeAttribute("src")
                }))
            }
            function tt() {
                var e = Z(k.wrapper.querySelectorAll(d))
                  , t = 0;
                e: for (var n = 0; n < e.length; n++) {
                    for (var a = e[n], r = Z(a.querySelectorAll("section")), i = 0; i < r.length; i++) {
                        if (r[i].classList.contains("present"))
                            break e;
                        t++
                    }
                    if (a.classList.contains("present"))
                        break;
                    !1 === a.classList.contains("stack") && t++
                }
                return t
            }
            function nt() {
                var e = lt()
                  , t = tt();
                if (r) {
                    var n = r.querySelectorAll(".fragment");
                    if (n.length > 0) {
                        var a = r.querySelectorAll(".fragment.visible");
                        t += a.length / n.length * .9
                    }
                }
                return Math.min(t / (e - 1), 1)
            }
            function at() {
                return !!window.location.search.match(/receiver/gi)
            }
            function rt() {
                var a = window.location.hash
                  , i = a.slice(2).split("/")
                  , s = a.replace(/#|\//gi, "");
                if (!/^[0-9]*$/.test(i[0]) && s.length) {
                    var o;
                    try {
                        o = document.getElementById(decodeURIComponent(s))
                    } catch (e) {}
                    var l = !!r && r.getAttribute("id") === s;
                    if (o) {
                        if (!l) {
                            var c = e.getIndices(o);
                            Oe(c.h, c.v)
                        }
                    } else
                        Oe(t || 0, n || 0)
                } else {
                    var d, u = g.hashOneBasedIndex ? 1 : 0, f = parseInt(i[0], 10) - u || 0, p = parseInt(i[1], 10) - u || 0;
                    g.fragmentInURL && (d = parseInt(i[2], 10),
                    isNaN(d) && (d = void 0)),
                    f === t && p === n && void 0 === d || Oe(f, p, d)
                }
            }
            function it(e) {
                clearTimeout(T),
                "number" == typeof e ? T = setTimeout(it, e) : r && (g.history || !window.history ? window.location.hash = ke() : g.hash ? window.history.replaceState(null, null, "#" + ke()) : window.history.replaceState(null, null, window.location.pathname + window.location.search))
            }
            function st(e) {
                var a, i = t, s = n;
                if (e) {
                    var o = xe(e)
                      , l = o ? e.parentNode : e
                      , c = Z(k.wrapper.querySelectorAll(d));
                    i = Math.max(c.indexOf(l), 0),
                    s = void 0,
                    o && (s = Math.max(Z(e.parentNode.querySelectorAll("section")).indexOf(e), 0))
                }
                if (!e && r) {
                    var u = r.querySelectorAll(".fragment").length > 0;
                    if (u) {
                        var f = r.querySelector(".current-fragment");
                        a = f && f.hasAttribute("data-fragment-index") ? parseInt(f.getAttribute("data-fragment-index"), 10) : r.querySelectorAll(".fragment.visible").length - 1
                    }
                }
                return {
                    h: i,
                    v: s,
                    f: a
                }
            }
            function ot() {
                return Z(k.wrapper.querySelectorAll(c + ":not(.stack)"))
            }
            function lt() {
                return ot().length
            }
            function ct(e, t) {
                var n = k.wrapper.querySelectorAll(d)[e]
                  , a = n && n.querySelectorAll("section");
                return a && a.length && "number" == typeof t ? a ? a[t] : void 0 : n
            }
            function dt(e, t) {
                var n = "number" == typeof e ? ct(e, t) : e;
                if (n)
                    return n.slideBackgroundElement
            }
            function ut(e) {
                if ((e = e || r).hasAttribute("data-notes"))
                    return e.getAttribute("data-notes");
                var t = e.querySelector("aside.notes");
                return t ? t.innerHTML : null
            }
            function ft() {
                var e = st();
                return {
                    indexh: e.h,
                    indexv: e.v,
                    indexf: e.f,
                    paused: Ie(),
                    overview: Le()
                }
            }
            function pt(e, t) {
                e = Z(e);
                var n = []
                  , a = []
                  , r = [];
                e.forEach(function(e, t) {
                    if (e.hasAttribute("data-fragment-index")) {
                        var r = parseInt(e.getAttribute("data-fragment-index"), 10);
                        n[r] || (n[r] = []),
                        n[r].push(e)
                    } else
                        a.push([e])
                }),
                n = n.concat(a);
                var i = 0;
                return n.forEach(function(e) {
                    e.forEach(function(e) {
                        r.push(e),
                        e.setAttribute("data-fragment-index", i)
                    }),
                    i++
                }),
                !0 === t ? n : r
            }
            function gt(e, t) {
                var n = {
                    shown: [],
                    hidden: []
                };
                if (r && g.fragments && (t = t || pt(r.querySelectorAll(".fragment"))).length) {
                    if ("number" != typeof e) {
                        var a = pt(r.querySelectorAll(".fragment.visible")).pop();
                        a && (e = parseInt(a.getAttribute("data-fragment-index") || 0, 10))
                    }
                    Z(t).forEach(function(t, a) {
                        t.hasAttribute("data-fragment-index") && (a = parseInt(t.getAttribute("data-fragment-index"), 10)),
                        a <= e ? (t.classList.contains("visible") || n.shown.push(t),
                        t.classList.add("visible"),
                        t.classList.remove("current-fragment"),
                        k.statusDiv.textContent = W(t),
                        a === e && (t.classList.add("current-fragment"),
                        Ve(t))) : (t.classList.contains("visible") && n.hidden.push(t),
                        t.classList.remove("visible"),
                        t.classList.remove("current-fragment"))
                    })
                }
                return n
            }
            function mt(e, t) {
                if (r && g.fragments) {
                    var n = pt(r.querySelectorAll(".fragment"));
                    if (n.length) {
                        if ("number" != typeof e) {
                            var a = pt(r.querySelectorAll(".fragment.visible")).pop();
                            e = a ? parseInt(a.getAttribute("data-fragment-index") || 0, 10) : -1
                        }
                        "number" == typeof t && (e += t);
                        var i = gt(e, n);
                        return i.hidden.length && le("fragmenthidden", {
                            fragment: i.hidden[0],
                            fragments: i.hidden
                        }),
                        i.shown.length && le("fragmentshown", {
                            fragment: i.shown[0],
                            fragments: i.shown
                        }),
                        We(),
                        ze(),
                        g.fragmentInURL && it(),
                        !(!i.shown.length && !i.hidden.length)
                    }
                }
                return !1
            }
            function ht() {
                return mt(null, 1)
            }
            function vt() {
                return mt(null, -1)
            }
            function bt() {
                if (yt(),
                r && !1 !== g.autoSlide) {
                    var t = r.querySelector(".current-fragment");
                    t || (t = r.querySelector(".fragment"));
                    var n = t ? t.getAttribute("data-autoslide") : null
                      , a = r.parentNode ? r.parentNode.getAttribute("data-autoslide") : null
                      , i = r.getAttribute("data-autoslide");
                    O = n ? parseInt(n, 10) : i ? parseInt(i, 10) : a ? parseInt(a, 10) : g.autoSlide,
                    0 === r.querySelectorAll(".fragment").length && Z(r.querySelectorAll("video, audio")).forEach(function(e) {
                        e.hasAttribute("data-autoplay") && O && 1e3 * e.duration / e.playbackRate > O && (O = 1e3 * e.duration / e.playbackRate + 1e3)
                    }),
                    !O || B || Ie() || Le() || e.isLastSlide() && !Ge().next && !0 !== g.loop || (P = setTimeout(function() {
                        "function" == typeof g.autoSlideMethod ? g.autoSlideMethod() : Nt(),
                        bt()
                    }, O),
                    q = Date.now()),
                    l && l.setPlaying(-1 !== P)
                }
            }
            function yt() {
                clearTimeout(P),
                P = -1
            }
            function wt() {
                O && !B && (B = !0,
                le("autoslidepaused"),
                clearTimeout(P),
                l && l.setPlaying(!1))
            }
            function Et() {
                O && B && (B = !1,
                le("autoslideresumed"),
                bt())
            }
            function At() {
                g.rtl ? (Le() || !1 === ht()) && Ye().left && Oe(t + 1, "grid" === g.navigationMode ? n : void 0) : (Le() || !1 === vt()) && Ye().left && Oe(t - 1, "grid" === g.navigationMode ? n : void 0)
            }
            function St() {
                w = !0,
                g.rtl ? (Le() || !1 === vt()) && Ye().right && Oe(t - 1, "grid" === g.navigationMode ? n : void 0) : (Le() || !1 === ht()) && Ye().right && Oe(t + 1, "grid" === g.navigationMode ? n : void 0)
            }
            function Lt() {
                (Le() || !1 === vt()) && Ye().up && Oe(t, n - 1)
            }
            function kt() {
                E = !0,
                (Le() || !1 === ht()) && Ye().down && Oe(t, n + 1)
            }
            function xt() {
                var e;
                if (!1 === vt())
                    if (Ye().up)
                        Lt();
                    else if (e = g.rtl ? Z(k.wrapper.querySelectorAll(d + ".future")).pop() : Z(k.wrapper.querySelectorAll(d + ".past")).pop()) {
                        var n = e.querySelectorAll("section").length - 1 || void 0
                          , a = t - 1;
                        Oe(a, n)
                    }
            }
            function Nt() {
                if (w = !0,
                E = !0,
                !1 === ht()) {
                    var t = Ye();
                    t.down && t.right && g.loop && e.isLastVerticalSlide(r) && (t.down = !1),
                    t.down ? kt() : g.rtl ? At() : St()
                }
            }
            function Mt(e) {
                for (; e && "function" == typeof e.hasAttribute; ) {
                    if (e.hasAttribute("data-prevent-swipe"))
                        return !0;
                    e = e.parentNode
                }
                return !1
            }
            function Ct(e) {
                g.autoSlideStoppable && wt()
            }
            function Tt(e) {
                Ne(),
                clearTimeout(I),
                I = setTimeout(Me, g.hideCursorTime)
            }
            function Rt(e) {
                e.shiftKey && 63 === e.charCode && ue()
            }
            function It(t) {
                if ("function" == typeof g.keyboardCondition && !1 === g.keyboardCondition(t))
                    return !0;
                var n = t.keyCode
                  , a = B;
                Ct();
                var r = document.activeElement && "inherit" !== document.activeElement.contentEditable
                  , i = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName)
                  , s = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className)
                  , o = t.shiftKey && 32 === t.keyCode
                  , l = (t.metaKey || t.ctrlKey) && 37 === n
                  , c = (t.metaKey || t.ctrlKey) && 39 === n
                  , d = !o && !l && !c && (t.shiftKey || t.altKey || t.ctrlKey || t.metaKey);
                if (!(r || i || s || d)) {
                    var u, f = [66, 86, 190, 191];
                    if ("object" == typeof g.keyboard)
                        for (u in g.keyboard)
                            "togglePause" === g.keyboard[u] && f.push(parseInt(u, 10));
                    if (Ie() && -1 === f.indexOf(n))
                        return !1;
                    var p, m, h = !1;
                    if ("object" == typeof g.keyboard)
                        for (u in g.keyboard)
                            if (parseInt(u, 10) === n) {
                                var v = g.keyboard[u];
                                "function" == typeof v ? v.apply(null, [t]) : "string" == typeof v && "function" == typeof e[v] && e[v].call(),
                                h = !0
                            }
                    if (!1 === h)
                        for (u in j)
                            if (parseInt(u, 10) === n) {
                                var b = j[u].callback;
                                "function" == typeof b ? b.apply(null, [t]) : "string" == typeof b && "function" == typeof e[b] && e[b].call(),
                                h = !0
                            }
                    !1 === h && (h = !0,
                    80 === n || 33 === n ? xt() : 78 === n || 34 === n ? Nt() : 72 === n || 37 === n ? l ? Oe(0) : Le() || "linear" !== g.navigationMode ? At() : xt() : 76 === n || 39 === n ? c ? Oe(Number.MAX_VALUE) : Le() || "linear" !== g.navigationMode ? St() : Nt() : 75 === n || 38 === n ? Le() || "linear" !== g.navigationMode ? Lt() : xt() : 74 === n || 40 === n ? Le() || "linear" !== g.navigationMode ? kt() : Nt() : 36 === n ? Oe(0) : 35 === n ? Oe(Number.MAX_VALUE) : 32 === n ? (Le() && Ae(),
                    t.shiftKey ? xt() : Nt()) : 58 === n || 59 === n || 66 === n || 86 === n || 190 === n || 191 === n ? Re() : 70 === n ? (p = document.documentElement,
                    (m = p.requestFullscreen || p.webkitRequestFullscreen || p.webkitRequestFullScreen || p.mozRequestFullScreen || p.msRequestFullscreen) && m.apply(p)) : 65 === n ? g.autoSlideStoppable && _e(a) : h = !1),
                    h ? t.preventDefault && t.preventDefault() : 27 !== n && 79 !== n || !M.transforms3d || (k.overlay ? pe() : Se(),
                    t.preventDefault && t.preventDefault()),
                    bt()
                }
            }
            function _t(e) {
                if (Mt(e.target))
                    return !0;
                H.startX = e.touches[0].clientX,
                H.startY = e.touches[0].clientY,
                H.startCount = e.touches.length
            }
            function Ot(e) {
                if (Mt(e.target))
                    return !0;
                if (H.captured)
                    p.match(/android/gi) && e.preventDefault();
                else {
                    Ct();
                    var t = e.touches[0].clientX
                      , n = e.touches[0].clientY;
                    if (1 === e.touches.length && 2 !== H.startCount) {
                        var a = t - H.startX
                          , i = n - H.startY;
                        a > H.threshold && Math.abs(a) > Math.abs(i) ? (H.captured = !0,
                        At()) : a < -H.threshold && Math.abs(a) > Math.abs(i) ? (H.captured = !0,
                        St()) : i > H.threshold ? (H.captured = !0,
                        Lt()) : i < -H.threshold && (H.captured = !0,
                        kt()),
                        g.embedded ? (H.captured || xe(r)) && e.preventDefault() : e.preventDefault()
                    }
                }
            }
            function Pt(e) {
                H.captured = !1
            }
            function qt(e) {
                e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
                    clientX: e.clientX,
                    clientY: e.clientY
                }],
                _t(e))
            }
            function Bt(e) {
                e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
                    clientX: e.clientX,
                    clientY: e.clientY
                }],
                Ot(e))
            }
            function Ht(e) {
                e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
                    clientX: e.clientX,
                    clientY: e.clientY
                }],
                Pt())
            }
            function Dt(e) {
                if (Date.now() - C > 600) {
                    C = Date.now();
                    var t = e.detail || -e.wheelDelta;
                    t > 0 ? Nt() : t < 0 && xt()
                }
            }
            function jt(e) {
                Ct(),
                e.preventDefault();
                var t = Z(k.wrapper.querySelectorAll(d)).length
                  , n = Math.floor(e.clientX / k.wrapper.offsetWidth * t);
                g.rtl && (n = t - n),
                Oe(n)
            }
            function zt(e) {
                e.preventDefault(),
                Ct(),
                "linear" === g.navigationMode ? xt() : At()
            }
            function Ft(e) {
                e.preventDefault(),
                Ct(),
                "linear" === g.navigationMode ? Nt() : St()
            }
            function Ut(e) {
                e.preventDefault(),
                Ct(),
                Lt()
            }
            function Wt(e) {
                e.preventDefault(),
                Ct(),
                kt()
            }
            function Kt(e) {
                e.preventDefault(),
                Ct(),
                xt()
            }
            function $t(e) {
                e.preventDefault(),
                Ct(),
                Nt()
            }
            function Xt(e) {
                rt()
            }
            function Jt(e) {
                ge()
            }
            function Yt(e) {
                var t = document.webkitHidden || document.msHidden || document.hidden;
                !1 === t && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(),
                document.body.focus())
            }
            function Gt(e) {
                if (_ && Le()) {
                    e.preventDefault();
                    for (var t = e.target; t && !t.nodeName.match(/section/gi); )
                        t = t.parentNode;
                    if (t && !t.classList.contains("disabled") && (Ae(),
                    t.nodeName.match(/section/gi))) {
                        var n = parseInt(t.getAttribute("data-index-h"), 10)
                          , a = parseInt(t.getAttribute("data-index-v"), 10);
                        Oe(n, a)
                    }
                }
            }
            function Vt(e) {
                if (e.currentTarget && e.currentTarget.hasAttribute("href")) {
                    var t = e.currentTarget.getAttribute("href");
                    t && (function(e) {
                        pe(),
                        k.overlay = document.createElement("div"),
                        k.overlay.classList.add("overlay"),
                        k.overlay.classList.add("overlay-preview"),
                        k.wrapper.appendChild(k.overlay),
                        k.overlay.innerHTML = ["<header>", '<a class="close" href="#"><span class="icon"></span></a>', '<a class="external" href="' + e + '" target="_blank"><span class="icon"></span></a>', "</header>", '<div class="spinner"></div>', '<div class="viewport">', '<iframe src="' + e + '"></iframe>', '<small class="viewport-inner">', '<span class="x-frame-error">Unable to load iframe. This is likely due to the site\'s policy (x-frame-options).</span>', "</small>", "</div>"].join(""),
                        k.overlay.querySelector("iframe").addEventListener("load", function(e) {
                            k.overlay.classList.add("loaded")
                        }, !1),
                        k.overlay.querySelector(".close").addEventListener("click", function(e) {
                            pe(),
                            e.preventDefault()
                        }, !1),
                        k.overlay.querySelector(".external").addEventListener("click", function(e) {
                            pe()
                        }, !1),
                        setTimeout(function() {
                            k.overlay.classList.add("visible")
                        }, 1)
                    }(t),
                    e.preventDefault())
                }
            }
            function Qt(t) {
                e.isLastSlide() && !1 === g.loop ? (Oe(0, 0),
                Et()) : B ? Et() : wt()
            }
            function Zt(e, t) {
                this.diameter = 100,
                this.diameter2 = this.diameter / 2,
                this.thickness = 6,
                this.playing = !1,
                this.progress = 0,
                this.progressOffset = 1,
                this.container = e,
                this.progressCheck = t,
                this.canvas = document.createElement("canvas"),
                this.canvas.className = "playback",
                this.canvas.width = this.diameter,
                this.canvas.height = this.diameter,
                this.canvas.style.width = this.diameter2 + "px",
                this.canvas.style.height = this.diameter2 + "px",
                this.context = this.canvas.getContext("2d"),
                this.container.appendChild(this.canvas),
                this.render()
            }
            return Zt.prototype.setPlaying = function(e) {
                var t = this.playing;
                this.playing = e,
                !t && this.playing ? this.animate() : this.render()
            }
            ,
            Zt.prototype.animate = function() {
                var e = this.progress;
                this.progress = this.progressCheck(),
                e > .8 && this.progress < .2 && (this.progressOffset = this.progress),
                this.render(),
                this.playing && M.requestAnimationFrameMethod.call(window, this.animate.bind(this))
            }
            ,
            Zt.prototype.render = function() {
                var e = this.playing ? this.progress : 0
                  , t = this.diameter2 - this.thickness
                  , n = this.diameter2
                  , a = this.diameter2;
                this.progressOffset += .1 * (1 - this.progressOffset);
                var r = -Math.PI / 2 + e * (2 * Math.PI)
                  , i = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
                this.context.save(),
                this.context.clearRect(0, 0, this.diameter, this.diameter),
                this.context.beginPath(),
                this.context.arc(n, a, t + 4, 0, 2 * Math.PI, !1),
                this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )",
                this.context.fill(),
                this.context.beginPath(),
                this.context.arc(n, a, t, 0, 2 * Math.PI, !1),
                this.context.lineWidth = this.thickness,
                this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )",
                this.context.stroke(),
                this.playing && (this.context.beginPath(),
                this.context.arc(n, a, t, i, r, !1),
                this.context.lineWidth = this.thickness,
                this.context.strokeStyle = "#fff",
                this.context.stroke()),
                this.context.translate(n - 14, a - 14),
                this.playing ? (this.context.fillStyle = "#fff",
                this.context.fillRect(0, 0, 10, 28),
                this.context.fillRect(18, 0, 10, 28)) : (this.context.beginPath(),
                this.context.translate(4, 0),
                this.context.moveTo(0, 0),
                this.context.lineTo(24, 14),
                this.context.lineTo(0, 28),
                this.context.fillStyle = "#fff",
                this.context.fill()),
                this.context.restore()
            }
            ,
            Zt.prototype.on = function(e, t) {
                this.canvas.addEventListener(e, t, !1)
            }
            ,
            Zt.prototype.off = function(e, t) {
                this.canvas.removeEventListener(e, t, !1)
            }
            ,
            Zt.prototype.destroy = function() {
                this.playing = !1,
                this.canvas.parentNode && this.container.removeChild(this.canvas)
            }
            ,
            e = {
                VERSION: "3.8.0",
                initialize: function(t) {
                    if (!0 !== m)
                        if (m = !0,
                        function() {
                            s = /(iphone|ipod|ipad|android)/gi.test(p),
                            o = /chrome/i.test(p) && !/edge/i.test(p);
                            var e = document.createElement("div");
                            M.transforms3d = "WebkitPerspective"in e.style || "MozPerspective"in e.style || "msPerspective"in e.style || "OPerspective"in e.style || "perspective"in e.style,
                            M.transforms2d = "WebkitTransform"in e.style || "MozTransform"in e.style || "msTransform"in e.style || "OTransform"in e.style || "transform"in e.style,
                            M.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame,
                            M.requestAnimationFrame = "function" == typeof M.requestAnimationFrameMethod,
                            M.canvas = !!document.createElement("canvas").getContext,
                            M.overviewTransitions = !/Version\/[\d\.]+.*Safari/.test(p),
                            M.zoom = "zoom"in e.style && !s && (o || /Version\/[\d\.]+.*Safari/.test(p))
                        }(),
                        M.transforms2d || M.transforms3d) {
                            k.wrapper = document.querySelector(".reveal"),
                            k.slides = document.querySelector(".reveal .slides"),
                            window.addEventListener("load", ge, !1);
                            var n, a, r = e.getQueryHash();
                            void 0 !== r.dependencies && delete r.dependencies,
                            Q(g, t),
                            Q(g, r),
                            g.hideAddressBar && s && (window.addEventListener("load", oe, !1),
                            window.addEventListener("orientationchange", oe, !1)),
                            n = [],
                            a = 0,
                            g.dependencies.forEach(function(e) {
                                e.condition && !e.condition() || (e.async ? N.push(e) : n.push(e))
                            }),
                            n.length ? (a = n.length,
                            n.forEach(function(e) {
                                U(e.src, function() {
                                    "function" == typeof e.callback && e.callback(),
                                    0 == --a && z()
                                })
                            })) : z()
                        } else {
                            document.body.setAttribute("class", "no-transforms");
                            for (var i = Z(document.getElementsByTagName("img")), l = Z(document.getElementsByTagName("iframe")), c = i.concat(l), d = 0, u = c.length; d < u; d++) {
                                var f = c[d];
                                f.getAttribute("data-src") && (f.setAttribute("src", f.getAttribute("data-src")),
                                f.removeAttribute("data-src"))
                            }
                        }
                },
                configure: Y,
                sync: Pe,
                syncSlide: function(e) {
                    J(e = e || r),
                    qe(e),
                    Ke(),
                    je(),
                    Xe(e)
                },
                syncFragments: qe,
                slide: Oe,
                left: At,
                right: St,
                up: Lt,
                down: kt,
                prev: xt,
                next: Nt,
                navigateFragment: mt,
                prevFragment: vt,
                nextFragment: ht,
                navigateTo: Oe,
                navigateLeft: At,
                navigateRight: St,
                navigateUp: Lt,
                navigateDown: kt,
                navigatePrev: xt,
                navigateNext: Nt,
                layout: ge,
                shuffle: Be,
                availableRoutes: Ye,
                availableFragments: Ge,
                toggleHelp: ue,
                toggleOverview: Se,
                togglePause: Re,
                toggleAutoSlide: _e,
                isOverview: Le,
                isPaused: Ie,
                isAutoSliding: function() {
                    return !(!O || B)
                },
                isSpeakerNotes: at,
                loadSlide: Xe,
                unloadSlide: Je,
                addEventListeners: G,
                removeEventListeners: V,
                getState: ft,
                setState: function(e) {
                    if ("object" == typeof e) {
                        Oe(ee(e.indexh), ee(e.indexv), ee(e.indexf));
                        var t = ee(e.paused)
                          , n = ee(e.overview);
                        "boolean" == typeof t && t !== Ie() && Re(t),
                        "boolean" == typeof n && n !== Le() && Se(n)
                    }
                },
                getSlidePastCount: tt,
                getProgress: nt,
                getIndices: st,
                getSlides: ot,
                getSlidesAttributes: function() {
                    return ot().map(function(e) {
                        for (var t = {}, n = 0; n < e.attributes.length; n++) {
                            var a = e.attributes[n];
                            t[a.name] = a.value
                        }
                        return t
                    })
                },
                getTotalSlides: lt,
                getSlide: ct,
                getSlideBackground: dt,
                getSlideNotes: ut,
                getPreviousSlide: function() {
                    return a
                },
                getCurrentSlide: function() {
                    return r
                },
                getScale: function() {
                    return S
                },
                getConfig: function() {
                    return g
                },
                getQueryHash: function() {
                    var e = {};
                    for (var t in location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, function(t) {
                        e[t.split("=").shift()] = t.split("=").pop()
                    }),
                    e) {
                        var n = e[t];
                        e[t] = ee(unescape(n))
                    }
                    return e
                },
                getRevealElement: function() {
                    return k.wrapper || document.querySelector(".reveal")
                },
                getPlugins: function() {
                    return x
                },
                isFirstSlide: function() {
                    return 0 === t && 0 === n
                },
                isLastSlide: function() {
                    return !(!r || r.nextElementSibling || xe(r) && r.parentNode.nextElementSibling)
                },
                isLastVerticalSlide: function() {
                    return !(!r || !xe(r) || r.nextElementSibling)
                },
                isReady: function() {
                    return h
                },
                addEventListener: function(t, n, a) {
                    "addEventListener"in window && e.getRevealElement().addEventListener(t, n, a)
                },
                removeEventListener: function(t, n, a) {
                    "addEventListener"in window && e.getRevealElement().removeEventListener(t, n, a)
                },
                addKeyBinding: function(e, t) {
                    "object" == typeof e && e.keyCode ? j[e.keyCode] = {
                        callback: t,
                        key: e.key,
                        description: e.description
                    } : j[e] = {
                        callback: t,
                        key: null,
                        description: null
                    }
                },
                removeKeyBinding: function(e) {
                    delete j[e]
                },
                registerPlugin: function(e, t) {
                    void 0 === x[e] ? (x[e] = t,
                    h && "function" == typeof t.init && t.init()) : console.warn('reveal.js: "' + e + '" plugin has already been registered')
                },
                hasPlugin: function(e) {
                    return !!x[e]
                },
                getPlugin: function(e) {
                    return x[e]
                },
                triggerKey: function(e) {
                    It({
                        keyCode: e
                    })
                },
                registerKeyboardShortcut: function(e, t) {
                    D[e] = t
                }
            }
        }(),
        r.Reveal
    }
    .call(t, n, t, e)) || (e.exports = a)
}
, function(e, t, n) {
    !function(e) {
        "object" == typeof window && window || "object" == typeof self && self;
        (function(e) {
            var t, n = [], a = Object.keys, r = {}, i = {}, s = /^(no-?highlight|plain|text)$/i, o = /\blang(?:uage)?-([\w-]+)\b/i, l = /((^(<[^>]+>|\t|)+|(?:\n)))/gm, c = "</span>", d = {
                classPrefix: "hljs-",
                tabReplace: null,
                useBR: !1,
                languages: void 0
            };
            function u(e) {
                return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }
            function f(e) {
                return e.nodeName.toLowerCase()
            }
            function p(e, t) {
                var n = e && e.exec(t);
                return n && 0 === n.index
            }
            function g(e) {
                return s.test(e)
            }
            function m(e) {
                var t, n = {}, a = Array.prototype.slice.call(arguments, 1);
                for (t in e)
                    n[t] = e[t];
                return a.forEach(function(e) {
                    for (t in e)
                        n[t] = e[t]
                }),
                n
            }
            function h(e) {
                var t = [];
                return function e(n, a) {
                    for (var r = n.firstChild; r; r = r.nextSibling)
                        3 === r.nodeType ? a += r.nodeValue.length : 1 === r.nodeType && (t.push({
                            event: "start",
                            offset: a,
                            node: r
                        }),
                        a = e(r, a),
                        f(r).match(/br|hr|img|input/) || t.push({
                            event: "stop",
                            offset: a,
                            node: r
                        }));
                    return a
                }(e, 0),
                t
            }
            function v(e) {
                if (t && !e.langApiRestored) {
                    for (var n in e.langApiRestored = !0,
                    t)
                        e[n] && (e[t[n]] = e[n]);
                    (e.contains || []).concat(e.variants || []).forEach(v)
                }
            }
            function b(e) {
                function t(e) {
                    return e && e.source || e
                }
                function n(n, a) {
                    return new RegExp(t(n),"m" + (e.case_insensitive ? "i" : "") + (a ? "g" : ""))
                }
                !function r(i, s) {
                    if (i.compiled)
                        return;
                    i.compiled = !0;
                    i.keywords = i.keywords || i.beginKeywords;
                    if (i.keywords) {
                        var o = {}
                          , l = function(t, n) {
                            e.case_insensitive && (n = n.toLowerCase()),
                            n.split(" ").forEach(function(e) {
                                var n = e.split("|");
                                o[n[0]] = [t, n[1] ? Number(n[1]) : 1]
                            })
                        };
                        "string" == typeof i.keywords ? l("keyword", i.keywords) : a(i.keywords).forEach(function(e) {
                            l(e, i.keywords[e])
                        }),
                        i.keywords = o
                    }
                    i.lexemesRe = n(i.lexemes || /\w+/, !0);
                    s && (i.beginKeywords && (i.begin = "\\b(" + i.beginKeywords.split(" ").join("|") + ")\\b"),
                    i.begin || (i.begin = /\B|\b/),
                    i.beginRe = n(i.begin),
                    i.endSameAsBegin && (i.end = i.begin),
                    i.end || i.endsWithParent || (i.end = /\B|\b/),
                    i.end && (i.endRe = n(i.end)),
                    i.terminator_end = t(i.end) || "",
                    i.endsWithParent && s.terminator_end && (i.terminator_end += (i.end ? "|" : "") + s.terminator_end));
                    i.illegal && (i.illegalRe = n(i.illegal));
                    null == i.relevance && (i.relevance = 1);
                    i.contains || (i.contains = []);
                    i.contains = Array.prototype.concat.apply([], i.contains.map(function(e) {
                        return function(e) {
                            e.variants && !e.cached_variants && (e.cached_variants = e.variants.map(function(t) {
                                return m(e, {
                                    variants: null
                                }, t)
                            }));
                            return e.cached_variants || e.endsWithParent && [m(e)] || [e]
                        }("self" === e ? i : e)
                    }));
                    i.contains.forEach(function(e) {
                        r(e, i)
                    });
                    i.starts && r(i.starts, s);
                    var c = i.contains.map(function(e) {
                        return e.beginKeywords ? "\\.?(?:" + e.begin + ")\\.?" : e.begin
                    }).concat([i.terminator_end, i.illegal]).map(t).filter(Boolean);
                    i.terminators = c.length ? n(function(e, n) {
                        for (var a = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./, r = 0, i = "", s = 0; s < e.length; s++) {
                            var o = r
                              , l = t(e[s]);
                            for (s > 0 && (i += n); l.length > 0; ) {
                                var c = a.exec(l);
                                if (null == c) {
                                    i += l;
                                    break
                                }
                                i += l.substring(0, c.index),
                                l = l.substring(c.index + c[0].length),
                                "\\" == c[0][0] && c[1] ? i += "\\" + String(Number(c[1]) + o) : (i += c[0],
                                "(" == c[0] && r++)
                            }
                        }
                        return i
                    }(c, "|"), !0) : {
                        exec: function() {
                            return null
                        }
                    }
                }(e)
            }
            function y(e, t, n, a) {
                function i(e, t) {
                    var n = g.case_insensitive ? t[0].toLowerCase() : t[0];
                    return e.keywords.hasOwnProperty(n) && e.keywords[n]
                }
                function s(e, t, n, a) {
                    var r = a ? "" : d.classPrefix
                      , i = '<span class="' + r
                      , s = n ? "" : c;
                    return (i += e + '">') + t + s
                }
                function o() {
                    E += null != h.subLanguage ? function() {
                        var e = "string" == typeof h.subLanguage;
                        if (e && !r[h.subLanguage])
                            return u(A);
                        var t = e ? y(h.subLanguage, A, !0, v[h.subLanguage]) : w(A, h.subLanguage.length ? h.subLanguage : void 0);
                        h.relevance > 0 && (S += t.relevance);
                        e && (v[h.subLanguage] = t.top);
                        return s(t.language, t.value, !1, !0)
                    }() : function() {
                        var e, t, n, a;
                        if (!h.keywords)
                            return u(A);
                        a = "",
                        t = 0,
                        h.lexemesRe.lastIndex = 0,
                        n = h.lexemesRe.exec(A);
                        for (; n; )
                            a += u(A.substring(t, n.index)),
                            (e = i(h, n)) ? (S += e[1],
                            a += s(e[0], u(n[0]))) : a += u(n[0]),
                            t = h.lexemesRe.lastIndex,
                            n = h.lexemesRe.exec(A);
                        return a + u(A.substr(t))
                    }(),
                    A = ""
                }
                function l(e) {
                    E += e.className ? s(e.className, "", !0) : "",
                    h = Object.create(e, {
                        parent: {
                            value: h
                        }
                    })
                }
                function f(e, t) {
                    if (A += e,
                    null == t)
                        return o(),
                        0;
                    var a = function(e, t) {
                        var n, a;
                        for (n = 0,
                        a = t.contains.length; n < a; n++)
                            if (p(t.contains[n].beginRe, e))
                                return t.contains[n].endSameAsBegin && (t.contains[n].endRe = (r = t.contains[n].beginRe.exec(e)[0],
                                new RegExp(r.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),"m"))),
                                t.contains[n];
                        var r
                    }(t, h);
                    if (a)
                        return a.skip ? A += t : (a.excludeBegin && (A += t),
                        o(),
                        a.returnBegin || a.excludeBegin || (A = t)),
                        l(a),
                        a.returnBegin ? 0 : t.length;
                    var r = function e(t, n) {
                        if (p(t.endRe, n)) {
                            for (; t.endsParent && t.parent; )
                                t = t.parent;
                            return t
                        }
                        if (t.endsWithParent)
                            return e(t.parent, n)
                    }(h, t);
                    if (r) {
                        var i = h;
                        i.skip ? A += t : (i.returnEnd || i.excludeEnd || (A += t),
                        o(),
                        i.excludeEnd && (A = t));
                        do {
                            h.className && (E += c),
                            h.skip || h.subLanguage || (S += h.relevance),
                            h = h.parent
                        } while (h !== r.parent);
                        return r.starts && (r.endSameAsBegin && (r.starts.endRe = r.endRe),
                        l(r.starts)),
                        i.returnEnd ? 0 : t.length
                    }
                    if (function(e, t) {
                        return !n && p(t.illegalRe, e)
                    }(t, h))
                        throw new Error('Illegal lexeme "' + t + '" for mode "' + (h.className || "<unnamed>") + '"');
                    return A += t,
                    t.length || 1
                }
                var g = L(e);
                if (!g)
                    throw new Error('Unknown language: "' + e + '"');
                b(g);
                var m, h = a || g, v = {}, E = "";
                for (m = h; m !== g; m = m.parent)
                    m.className && (E = s(m.className, "", !0) + E);
                var A = ""
                  , S = 0;
                try {
                    for (var k, x, N = 0; h.terminators.lastIndex = N,
                    k = h.terminators.exec(t); )
                        x = f(t.substring(N, k.index), k[0]),
                        N = k.index + x;
                    for (f(t.substr(N)),
                    m = h; m.parent; m = m.parent)
                        m.className && (E += c);
                    return {
                        relevance: S,
                        value: E,
                        language: e,
                        top: h
                    }
                } catch (e) {
                    if (e.message && -1 !== e.message.indexOf("Illegal"))
                        return {
                            relevance: 0,
                            value: u(t)
                        };
                    throw e
                }
            }
            function w(e, t) {
                t = t || d.languages || a(r);
                var n = {
                    relevance: 0,
                    value: u(e)
                }
                  , i = n;
                return t.filter(L).filter(k).forEach(function(t) {
                    var a = y(t, e, !1);
                    a.language = t,
                    a.relevance > i.relevance && (i = a),
                    a.relevance > n.relevance && (i = n,
                    n = a)
                }),
                i.language && (n.second_best = i),
                n
            }
            function E(e) {
                return d.tabReplace || d.useBR ? e.replace(l, function(e, t) {
                    return d.useBR && "\n" === e ? "<br>" : d.tabReplace ? t.replace(/\t/g, d.tabReplace) : ""
                }) : e
            }
            function A(e) {
                var t, a, r, s, l, c = function(e) {
                    var t, n, a, r, i = e.className + " ";
                    if (i += e.parentNode ? e.parentNode.className : "",
                    n = o.exec(i))
                        return L(n[1]) ? n[1] : "no-highlight";
                    for (i = i.split(/\s+/),
                    t = 0,
                    a = i.length; t < a; t++)
                        if (g(r = i[t]) || L(r))
                            return r
                }(e);
                g(c) || (d.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n") : t = e,
                l = t.textContent,
                r = c ? y(c, l, !0) : w(l),
                (a = h(t)).length && ((s = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = r.value,
                r.value = function(e, t, a) {
                    var r = 0
                      , i = ""
                      , s = [];
                    function o() {
                        return e.length && t.length ? e[0].offset !== t[0].offset ? e[0].offset < t[0].offset ? e : t : "start" === t[0].event ? e : t : e.length ? e : t
                    }
                    function l(e) {
                        i += "<" + f(e) + n.map.call(e.attributes, function(e) {
                            return " " + e.nodeName + '="' + u(e.value).replace('"', "&quot;") + '"'
                        }).join("") + ">"
                    }
                    function c(e) {
                        i += "</" + f(e) + ">"
                    }
                    function d(e) {
                        ("start" === e.event ? l : c)(e.node)
                    }
                    for (; e.length || t.length; ) {
                        var p = o();
                        if (i += u(a.substring(r, p[0].offset)),
                        r = p[0].offset,
                        p === e) {
                            s.reverse().forEach(c);
                            do {
                                d(p.splice(0, 1)[0]),
                                p = o()
                            } while (p === e && p.length && p[0].offset === r);
                            s.reverse().forEach(l)
                        } else
                            "start" === p[0].event ? s.push(p[0].node) : s.pop(),
                            d(p.splice(0, 1)[0])
                    }
                    return i + u(a.substr(r))
                }(a, h(s), l)),
                r.value = E(r.value),
                e.innerHTML = r.value,
                e.className = function(e, t, n) {
                    var a = t ? i[t] : n
                      , r = [e.trim()];
                    e.match(/\bhljs\b/) || r.push("hljs");
                    -1 === e.indexOf(a) && r.push(a);
                    return r.join(" ").trim()
                }(e.className, c, r.language),
                e.result = {
                    language: r.language,
                    re: r.relevance
                },
                r.second_best && (e.second_best = {
                    language: r.second_best.language,
                    re: r.second_best.relevance
                }))
            }
            function S() {
                if (!S.called) {
                    S.called = !0;
                    var e = document.querySelectorAll("pre code");
                    n.forEach.call(e, A)
                }
            }
            function L(e) {
                return e = (e || "").toLowerCase(),
                r[e] || r[i[e]]
            }
            function k(e) {
                var t = L(e);
                return t && !t.disableAutodetect
            }
            e.highlight = y,
            e.highlightAuto = w,
            e.fixMarkup = E,
            e.highlightBlock = A,
            e.configure = function(e) {
                d = m(d, e)
            }
            ,
            e.initHighlighting = S,
            e.initHighlightingOnLoad = function() {
                addEventListener("DOMContentLoaded", S, !1),
                addEventListener("load", S, !1)
            }
            ,
            e.registerLanguage = function(t, n) {
                var a = r[t] = n(e);
                v(a),
                a.aliases && a.aliases.forEach(function(e) {
                    i[e] = t
                })
            }
            ,
            e.listLanguages = function() {
                return a(r)
            }
            ,
            e.getLanguage = L,
            e.autoDetection = k,
            e.inherit = m,
            e.IDENT_RE = "[a-zA-Z]\\w*",
            e.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*",
            e.NUMBER_RE = "\\b\\d+(\\.\\d+)?",
            e.C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
            e.BINARY_NUMBER_RE = "\\b(0b[01]+)",
            e.RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
            e.BACKSLASH_ESCAPE = {
                begin: "\\\\[\\s\\S]",
                relevance: 0
            },
            e.APOS_STRING_MODE = {
                className: "string",
                begin: "'",
                end: "'",
                illegal: "\\n",
                contains: [e.BACKSLASH_ESCAPE]
            },
            e.QUOTE_STRING_MODE = {
                className: "string",
                begin: '"',
                end: '"',
                illegal: "\\n",
                contains: [e.BACKSLASH_ESCAPE]
            },
            e.PHRASAL_WORDS_MODE = {
                begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
            },
            e.COMMENT = function(t, n, a) {
                var r = e.inherit({
                    className: "comment",
                    begin: t,
                    end: n,
                    contains: []
                }, a || {});
                return r.contains.push(e.PHRASAL_WORDS_MODE),
                r.contains.push({
                    className: "doctag",
                    begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
                    relevance: 0
                }),
                r
            }
            ,
            e.C_LINE_COMMENT_MODE = e.COMMENT("//", "$"),
            e.C_BLOCK_COMMENT_MODE = e.COMMENT("/\\*", "\\*/"),
            e.HASH_COMMENT_MODE = e.COMMENT("#", "$"),
            e.NUMBER_MODE = {
                className: "number",
                begin: e.NUMBER_RE,
                relevance: 0
            },
            e.C_NUMBER_MODE = {
                className: "number",
                begin: e.C_NUMBER_RE,
                relevance: 0
            },
            e.BINARY_NUMBER_MODE = {
                className: "number",
                begin: e.BINARY_NUMBER_RE,
                relevance: 0
            },
            e.CSS_NUMBER_MODE = {
                className: "number",
                begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                relevance: 0
            },
            e.REGEXP_MODE = {
                className: "regexp",
                begin: /\//,
                end: /\/[gimuy]*/,
                illegal: /\n/,
                contains: [e.BACKSLASH_ESCAPE, {
                    begin: /\[/,
                    end: /\]/,
                    relevance: 0,
                    contains: [e.BACKSLASH_ESCAPE]
                }]
            },
            e.TITLE_MODE = {
                className: "title",
                begin: e.IDENT_RE,
                relevance: 0
            },
            e.UNDERSCORE_TITLE_MODE = {
                className: "title",
                begin: e.UNDERSCORE_IDENT_RE,
                relevance: 0
            },
            e.METHOD_GUARD = {
                begin: "\\.\\s*" + e.UNDERSCORE_IDENT_RE,
                relevance: 0
            }
        }
        )(t)
    }()
}
, function(e, t, n) {
    (function(e) {
        e.configure({
            external: {
                async: !1
            },
            reveald3: {
                mapPath: "content/",
                tryFallbackURL: !0
            },
            menu: {
                path: "lib/css",
                side: "left",
                numbers: !0,
                titleSelector: "h1, h2, h3, h4, h5, h6",
                hideMissingTitles: !1,
                markers: !0,
                custom: !1,
                themes: !1,
                transitions: !0,
                openButton: !0,
                openSlideNumber: !1,
                keyboard: !0,
                loadIcons: !1
            }
        })
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    (function(e) {
        window.Reveald3 || function() {
            const t = e.getConfig() || {};
            t.reveald3 = t.reveald3 || {};
            const n = {
                runLastState: null == t.reveald3.runLastState ? !t.reveald3.runLastState : t.reveald3.runLastState,
                keepIframe: null == t.reveald3.keepIframe ? !!t.reveald3.keepIframe : t.reveald3.keepIframe,
                mapPath: "string" == typeof t.reveald3.mapPath ? t.reveald3.mapPath : t.reveald3.mapPath ? "src" : "",
                tryFallbackURL: null == t.reveald3.tryFallbackURL ? !!t.reveald3.tryFallbackURL : t.reveald3.tryFallbackURL,
                disableCheckFile: null == t.reveald3.disableCheckFile ? !!t.reveald3.disableCheckFile : t.reveald3.disableCheckFile
            };
            function a(e) {
                let t = function(e) {
                    let t = e.className.includes("fig-container") ? [e] : [];
                    const n = e.querySelectorAll(".fig-container");
                    if (n.length > 0)
                        for (let e = 0; e < n.length; e++)
                            t.push(n[e]);
                    return t
                }(e.currentSlide);
                t.length && function(e, t, n) {
                    const a = {
                        margin: "0px",
                        width: "100vw",
                        height: "100vh",
                        "max-width": "100%",
                        "max-height": "100%",
                        "z-index": 1
                    };
                    for (let r = 0; r < e.length; r++) {
                        const s = e[r].getAttribute("data-file")
                          , o = e[r].getAttribute("data-style") ? e[r].getAttribute("data-style") : ""
                          , l = /\s*([^;^\s]*)\s*:\s*([^;^\s]*(\s*)?(!important)?)/g;
                        let c, d = {};
                        for (; c = l.exec(o); )
                            d[c[1]] = c[2];
                        const u = Object.assign(a, d);
                        i(e[r], s, t, u, n)
                    }
                }(t, function(e) {
                    const t = e.currentSlide;
                    let n = Array.prototype.slice.call(t.querySelectorAll(".fragment"));
                    n = n.filter(e=>!e.getAttribute("class").split().includes("visualizationStep"));
                    let a = [];
                    for (let e = 0; e < n.length; e++)
                        a.push(parseInt(n[e].getAttribute("data-fragment-index")));
                    return a = [...new Set(a)]
                }(e), e)
            }
            function r(t) {
                const n = e.getIndices(t)
                  , a = Array.prototype.slice.call(t.querySelectorAll("iframe"))
                  , r = Array.prototype.slice.call(e.getSlideBackground(n.h, n.v).querySelectorAll("iframe"));
                let i = [].concat(a, r);
                return i = i.filter(e=>e.className.includes("iframe-visualization"))
            }
            async function i(t, a, i, s, l) {
                const [c,d] = function(t) {
                    const n = "SECTION" == t.tagName
                      , a = n ? t : t.closest("section")
                      , r = e.getIndices(a)
                      , i = n ? e.getSlideBackground(r.h, r.v) : void 0;
                    return [a, n ? i : t]
                }(t);
                d.style.overflow = "" != d.style.overflow || JSON.parse(d.getAttribute("data-overflow-shown")) ? d.style.overflow : "hidden";
                const u = !!n.disableCheckFile || await (f = n.mapPath + a,
                fetch(f, {
                    method: "head",
                    mode: "no-cors"
                }).then(e=>!(!e.ok || 200 != e.status) || (console.log(`Couldn't locate "${f}", fallback to original url at "${f.slice(n.mapPath.length)}" if mapPath was set.`),
                !1)).catch(function(e) {
                    console.log("Error ", e)
                }));
                var f;
                console.log(u);
                const p = n.tryFallbackURL && u ? n.mapPath + a : a;
                if (d.querySelectorAll("iframe").length > 0)
                    return;
                let g = {
                    class: "iframe-visualization",
                    sandbox: "allow-popups allow-scripts allow-forms allow-same-origin",
                    src: p,
                    style: Object.entries(s).reduce((e,[t,n])=>`${e}${t}:${String(n).replace(/\s+/, " ")};`, "")
                };
                const m = document.createElement("iframe");
                for (let e = 0; e < Object.keys(g).length; e++) {
                    const t = Object.keys(g)[e];
                    m.setAttribute(t, g[t])
                }
                d.appendChild(m),
                m.addEventListener("load", function() {
                    (m.contentWindow || m.contentDocument).addEventListener("keydown", function(e) {
                        const t = new CustomEvent("iframe-keydown",{
                            detail: e
                        });
                        window.parent.document.dispatchEvent(t)
                    });
                    let t = r(c)
                      , a = [];
                    for (let e = 0; e < t.length; e++) {
                        const n = t[e]
                          , r = n.contentWindow || n.contentDocument;
                        a.push(r._transitions)
                    }
                    const [s,d] = function(e, t) {
                        let n = [];
                        for (let t = 0; t < e.length; t++) {
                            const a = e[t];
                            let r;
                            if (a) {
                                const e = a.length;
                                if ((r = a.filter(e=>e.index >= 0).map(e=>e.index)).length < e) {
                                    const t = e - r.length
                                      , n = 0 == r.length ? 0 : Math.max.apply(null, r) + 1;
                                    for (let e = 0; e < t; e++)
                                        r.push(e + n)
                                }
                                n.push(r)
                            }
                        }
                        let a = [...new Set([].concat(...n))];
                        a.sort((e,t)=>e - t);
                        const r = t.length
                          , i = a.map(e=>e > r - 1).reduce((e,t)=>e + t, 0);
                        let s;
                        s = 0 == i ? [] : [...Array(i).keys()].map(e=>e + r);
                        let o = {}
                          , l = 0;
                        a.forEach(e=>{
                            e > r - 1 ? (o[e] = s[l],
                            l += 1) : o[e] = e
                        }
                        );
                        let c = [];
                        for (let t = 0; t < e.length; t++) {
                            const a = e[t]
                              , r = n[t];
                            if (a && r) {
                                const e = a.length;
                                let t = {};
                                for (let n = 0; n < e; n++)
                                    t[o[r[n]]] = {
                                        transitionForward: a[n].transitionForward,
                                        transitionBackward: "none" == a[n].transitionBackward ? ()=>{}
                                        : a[n].transitionBackward ? a[n].transitionBackward : a[n - 1 >= 0 ? n - 1 : 0].transitionForward
                                    };
                                c.push(t)
                            }
                        }
                        return [c, a.map(e=>o[e])]
                    }(a, i);
                    for (let e = 0; e < t.length; e++) {
                        t[e].transitionSteps = s[e]
                    }
                    let u = c.querySelectorAll(".fragment.visualizationStep");
                    if (u.length < d.length) {
                        const e = d.length - u.length;
                        for (let t = 0; t < e; t++) {
                            const e = document.createElement("span");
                            e.setAttribute("class", "fragment visualizationStep"),
                            c.appendChild(e)
                        }
                    }
                    u = c.querySelectorAll(".fragment.visualizationStep");
                    for (let e = 0; e < d.length; e++)
                        u[e].setAttribute("data-fragment-index", d[e]);
                    n.runLastState && function(t, n) {
                        const a = t.currentSlide
                          , r = e.getIndices(a)
                          , i = e.getIndices(t.previousSlide);
                        if (r.h < i.h || r.v < i.v) {
                            const e = a.querySelectorAll(".fragment.visualizationStep");
                            if (0 == e.length)
                                return;
                            let t = [];
                            for (let n = 0; n < e.length; n++)
                                t.push(parseInt(e[n].getAttribute("data-fragment-index")));
                            o(n, Math.max.apply(null, t), "forward")
                        }
                    }(l, m),
                    e.layout()
                })
            }
            function s(e) {
                let t = "";
                for (let n = 0; n < e.fragments.length; n++)
                    t = t.concat(e.fragments[n].className);
                return t.includes("visualizationStep")
            }
            function o(e, t, n) {
                "forward" == n ? e.transitionSteps && e.transitionSteps[t] && (e.transitionSteps[t].transitionForward || Function)() : e.transitionSteps && e.transitionSteps[t] && (e.transitionSteps[t].transitionBackward || Function)()
            }
            function l(e, t) {
                let n = parseInt(e.fragments[0].getAttribute("data-fragment-index"));
                !function(e, t, n) {
                    for (let a = 0; a < e.length; a++)
                        o(e[a], t, n)
                }(r(e.fragment.closest("section")), n, t)
            }
            window.document.addEventListener("iframe-keydown", t=>e.triggerKey(t.detail.keyCode), !1),
            e.addEventListener("ready", function(e) {
                a(e)
            }),
            e.addEventListener("slidechanged", function(e) {
                a(e)
            }),
            n.keepIframe && (n.runLastState = !1),
            n.keepIframe || e.addEventListener("slidechanged", function(t) {
                let n = t.previousSlide
                  , a = [];
                if (n) {
                    const t = e.getIndices(n)
                      , r = Array.prototype.slice.call(n.querySelectorAll("iframe"))
                      , i = Array.prototype.slice.call(e.getSlideBackground(t.h, t.v).querySelectorAll("iframe"));
                    a = (a = [].concat(r, i)).filter(e=>e.className.includes("iframe-visualization"));
                    for (let e = 0; e < a.length; e++)
                        a[e].remove()
                }
            }),
            e.addEventListener("fragmentshown", function(e) {
                s(e) && l(e, "forward")
            }),
            e.addEventListener("fragmenthidden", function(e) {
                s(e) && l(e, "backward")
            })
        }()
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    (function(e) {
        !function() {
            "use strict";
            var t, n = e.getConfig() || {};
            n.external = n.external || {},
            t = {
                async: !!n.external.async,
                mapAttributes: n.external.mapAttributes instanceof Array ? n.external.mapAttributes : n.external.mapAttributes ? ["src"] : []
            };
            var a = function(e) {
                var t, n;
                if (n = !1,
                "" === (t = e.getAttribute("data-external") || "") && (t = e.getAttribute("data-external-replace") || "",
                n = !0),
                t.length > 0) {
                    var a = t.match(/^([^#]+)(?:#(.+))?/);
                    return {
                        url: a[1] || "",
                        fragment: a[2] || "",
                        isReplace: n
                    }
                }
                return null
            }
              , r = function(e, t) {
                return "" !== t && 0 === e.indexOf(".") ? t + "/" + e : e
            }
              , i = function(e, t, n) {
                var a = t.querySelectorAll("[" + e + "]");
                t.getAttribute(e) && t.setAttribute(e, r(t.getAttribute(e), n));
                for (var i = 0, s = a.length; i < s; i++)
                    a[i].setAttribute(e, r(a[i].getAttribute(e), n))
            }
              , s = function(e, n) {
                for (var a = 0, r = t.mapAttributes.length; a < r; a++)
                    i(t.mapAttributes[a], e, n)
            }
              , o = function(n, a, r) {
                var i = "" !== r ? r + "/" + a.url : a.url
                  , o = new XMLHttpRequest;
                o.onreadystatechange = function(n, a, r, i, o) {
                    return function() {
                        var c, d, u, f;
                        if (4 === n.readyState)
                            if (n.status >= 200 && n.status < 300 || 0 === n.status && "" !== n.responseText) {
                                f = r.substr(0, r.lastIndexOf("/")),
                                c = (new DOMParser).parseFromString(n.responseText, "text/html"),
                                d = "" !== i ? c.querySelectorAll(i) : c.querySelector("body").childNodes,
                                o || (a.innerHTML = "");
                                for (var p = 0, g = d.length; p < g; p++)
                                    s(d[p], f),
                                    u = document.importNode(d[p], !0),
                                    o ? a.parentNode.insertBefore(u, a) : a.appendChild(u),
                                    t.async && (e.sync(),
                                    e.setState(e.getState())),
                                    u instanceof Element && l(u, f);
                                o && a.parentNode.removeChild(a)
                            } else
                                console.log("ERROR: The attempt to fetch " + r + " failed with HTTP status " + n.status + ".")
                    }
                }(o, n, i, a.fragment, a.isReplace),
                o.open("GET", i, t.async);
                try {
                    o.send()
                } catch (e) {
                    console.log("Failed to get the file " + i + ". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. " + e)
                }
            };
            function l(e, t) {
                var n, r, i;
                if (t = void 0 === t ? "" : t,
                e instanceof Element && (e.getAttribute("data-external") || e.getAttribute("data-external-replace")))
                    (n = a(e)) && o(e, n, t);
                else {
                    i = e.querySelectorAll("[data-external], [data-external-replace]");
                    for (var s = 0; s < i.length; s += 1)
                        r = i[s],
                        (n = a(r)) && o(r, n, t)
                }
            }
            l(document)
        }()
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    (function(e) {
        window.RevealMenu || function() {
            var t = e.getConfig()
              , n = t.menu || {};
            n.path = n.path || function() {
                var e;
                if (document.currentScript)
                    e = document.currentScript.src.slice(0, -7);
                else {
                    var t = document.querySelector('script[src$="menu.js"]');
                    t && (e = t.src.slice(0, -7))
                }
                return e
            }() || "plugin/menu/",
            n.path.endsWith("/") || (n.path += "/");
            var a = n.loadIcons;
            void 0 === a && (a = !0);
            var r = !1
              , i = {};
            function s() {
                var a, s, d, u = !f || f >= 9;
                if (e.isSpeakerNotes() && window.location.search.endsWith("controls=false") && (u = !1),
                u) {
                    var p = n.side || "left"
                      , g = n.width
                      , m = n.numbers || !1
                      , h = "h1, h2, h3, h4, h5";
                    "string" == typeof n.titleSelector && (h = n.titleSelector);
                    var v = n.hideMissingTitles || !1
                      , b = n.useTextContentForMissingTitles || !1
                      , y = n.markers;
                    void 0 === y && (y = !0);
                    var w = n.custom
                      , E = "string" == typeof n.themesPath ? n.themesPath : "css/theme/";
                    E.endsWith("/") || (E += "/");
                    var A = !!o("link#theme") && n.themes;
                    !0 === A ? A = [{
                        name: "Black",
                        theme: E + "black.css"
                    }, {
                        name: "White",
                        theme: E + "white.css"
                    }, {
                        name: "League",
                        theme: E + "league.css"
                    }, {
                        name: "Sky",
                        theme: E + "sky.css"
                    }, {
                        name: "Beige",
                        theme: E + "beige.css"
                    }, {
                        name: "Simple",
                        theme: E + "simple.css"
                    }, {
                        name: "Serif",
                        theme: E + "serif.css"
                    }, {
                        name: "Blood",
                        theme: E + "blood.css"
                    }, {
                        name: "Night",
                        theme: E + "night.css"
                    }, {
                        name: "Moon",
                        theme: E + "moon.css"
                    }, {
                        name: "Solarized",
                        theme: E + "solarized.css"
                    }] : Array.isArray(A) || (A = !1);
                    var S = n.transitions || !1;
                    !0 === S ? S = ["None", "Fade", "Slide", "Convex", "Concave", "Zoom"] : !1 === S || Array.isArray(S) && S.every(function(e) {
                        return "string" == typeof e
                    }) || (console.error("reveal.js-menu error: transitions config value must be 'true' or an array of strings, eg ['None', 'Fade', 'Slide')"),
                    S = !1),
                    f && f <= 9 && (S = !1);
                    var L = n.openButton;
                    void 0 === L && (L = !0);
                    var k = n.openSlideNumber;
                    void 0 === k && (k = !1);
                    var x = n.keyboard;
                    void 0 === x && (x = !0);
                    var N = n.sticky;
                    void 0 === N && (N = !1);
                    var M = n.autoOpen;
                    void 0 === M && (M = !0);
                    var C = n.delayInit;
                    void 0 === C && (C = !1);
                    var T = n.openOnInit || !1
                      , R = !0;
                    function I() {
                        R = !1
                    }
                    function _() {
                        o("nav.slide-menu").addEventListener("mousemove", function e(t) {
                            o("nav.slide-menu").removeEventListener("mousemove", e),
                            R = !0
                        })
                    }
                    function O(e) {
                        var t = function(e) {
                            for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
                                t += e.offsetLeft - e.scrollLeft,
                                n += e.offsetTop - e.scrollTop,
                                e = e.offsetParent;
                            return {
                                top: n,
                                left: t
                            }
                        }(e).top - e.offsetParent.offsetTop;
                        if (t < 0)
                            return -t;
                        var n = e.offsetParent.offsetHeight - (e.offsetTop - e.offsetParent.scrollTop + e.offsetHeight);
                        return n < 0 ? n : 0
                    }
                    function P(e) {
                        var t = O(e);
                        t && (I(),
                        e.scrollIntoView(t > 0),
                        _())
                    }
                    function q(e) {
                        I(),
                        e.offsetParent.scrollTop = e.offsetTop,
                        _()
                    }
                    function B(e) {
                        I(),
                        e.offsetParent.scrollTop = e.offsetTop - e.offsetParent.offsetHeight + e.offsetHeight,
                        _()
                    }
                    function H(e) {
                        e.classList.add("selected"),
                        P(e),
                        N && M && $(e)
                    }
                    function D(e) {
                        if (W())
                            switch (e.stopImmediatePropagation(),
                            e.keyCode) {
                            case 72:
                            case 37:
                                !function() {
                                    var e = parseInt(o(".active-toolbar-button").getAttribute("data-button")) - 1;
                                    e < 0 && (e = G - 1);
                                    K(null, o('.toolbar-panel-button[data-button="' + e + '"]').getAttribute("data-panel"))
                                }();
                                break;
                            case 76:
                            case 39:
                                d = (parseInt(o(".active-toolbar-button").getAttribute("data-button")) + 1) % G,
                                K(null, o('.toolbar-panel-button[data-button="' + d + '"]').getAttribute("data-panel"));
                                break;
                            case 75:
                            case 38:
                                if (c = o(".active-menu-panel .slide-menu-items li.selected") || o(".active-menu-panel .slide-menu-items li.active"))
                                    l(".active-menu-panel .slide-menu-items li").forEach(function(e) {
                                        e.classList.remove("selected")
                                    }),
                                    H(o('.active-menu-panel .slide-menu-items li[data-item="' + (parseInt(c.getAttribute("data-item")) - 1) + '"]') || c);
                                else
                                    (s = o(".active-menu-panel .slide-menu-items li.slide-menu-item")) && H(s);
                                break;
                            case 74:
                            case 40:
                                if (c = o(".active-menu-panel .slide-menu-items li.selected") || o(".active-menu-panel .slide-menu-items li.active"))
                                    l(".active-menu-panel .slide-menu-items li").forEach(function(e) {
                                        e.classList.remove("selected")
                                    }),
                                    H(o('.active-menu-panel .slide-menu-items li[data-item="' + (parseInt(c.getAttribute("data-item")) + 1) + '"]') || c);
                                else
                                    (s = o(".active-menu-panel .slide-menu-items li.slide-menu-item")) && H(s);
                                break;
                            case 33:
                            case 85:
                                var t = l(".active-menu-panel .slide-menu-items li").filter(function(e) {
                                    return O(e) > 0
                                })
                                  , n = l(".active-menu-panel .slide-menu-items li").filter(function(e) {
                                    return 0 == O(e)
                                })
                                  , a = t.length > 0 && Math.abs(O(t[t.length - 1])) < t[t.length - 1].clientHeight ? t[t.length - 1] : n[0];
                                a && (a.classList.contains("selected") && t.length > 0 && (B(a),
                                a = (n = l(".active-menu-panel .slide-menu-items li").filter(function(e) {
                                    return 0 == O(e)
                                }))[0] == a ? t[t.length - 1] : n[0]),
                                l(".active-menu-panel .slide-menu-items li").forEach(function(e) {
                                    e.classList.remove("selected")
                                }),
                                H(a),
                                q(a));
                                break;
                            case 34:
                            case 68:
                                n = l(".active-menu-panel .slide-menu-items li").filter(function(e) {
                                    return 0 == O(e)
                                });
                                var r = l(".active-menu-panel .slide-menu-items li").filter(function(e) {
                                    return O(e) < 0
                                })
                                  , i = r.length > 0 && Math.abs(O(r[0])) < r[0].clientHeight ? r[0] : n[n.length - 1];
                                i && (i.classList.contains("selected") && r.length > 0 && (q(i),
                                i = (n = l(".active-menu-panel .slide-menu-items li").filter(function(e) {
                                    return 0 == O(e)
                                }))[n.length - 1] == i ? r[0] : n[n.length - 1]),
                                l(".active-menu-panel .slide-menu-items li").forEach(function(e) {
                                    e.classList.remove("selected")
                                }),
                                H(i),
                                B(i));
                                break;
                            case 36:
                                l(".active-menu-panel .slide-menu-items li").forEach(function(e) {
                                    e.classList.remove("selected")
                                }),
                                (s = o(".active-menu-panel .slide-menu-items li:first-of-type")) && (s.classList.add("selected"),
                                P(s));
                                break;
                            case 35:
                                var s;
                                l(".active-menu-panel .slide-menu-items li").forEach(function(e) {
                                    e.classList.remove("selected")
                                }),
                                (s = o(".active-menu-panel .slide-menu-items:last-of-type li:last-of-type")) && (s.classList.add("selected"),
                                P(s));
                                break;
                            case 32:
                            case 13:
                                var c;
                                (c = o(".active-menu-panel .slide-menu-items li.selected")) && $(c, !0);
                                break;
                            case 27:
                                F(null, !0)
                            }
                        var d
                    }
                    if (x)
                        if (document.addEventListener("keydown", D, !1),
                        window.addEventListener("message", function(e) {
                            var t;
                            try {
                                t = JSON.parse(e.data)
                            } catch (e) {}
                            t && "triggerKey" === t.method && D({
                                keyCode: t.args[0],
                                stopImmediatePropagation: function() {}
                            })
                        }),
                        t.keyboardCondition && "function" == typeof t.keyboardCondition) {
                            var j = t.keyboardCondition;
                            t.keyboardCondition = function(e) {
                                return j(e) && (!W() || 77 == e.keyCode)
                            }
                        } else
                            t.keyboardCondition = function(e) {
                                return !W() || 77 == e.keyCode
                            }
                            ;
                    function z(t) {
                        (t && t.preventDefault(),
                        W()) || (o("body").classList.add("slide-menu-active"),
                        o(".reveal").classList.add("has-" + n.effect + "-" + p),
                        o(".slide-menu").classList.add("active"),
                        o(".slide-menu-overlay").classList.add("active"),
                        A && (l('div[data-panel="Themes"] li').forEach(function(e) {
                            e.classList.remove("active")
                        }),
                        l('li[data-theme="' + o("link#theme").getAttribute("href") + '"]').forEach(function(e) {
                            e.classList.add("active")
                        })),
                        S && (l('div[data-panel="Transitions"] li').forEach(function(e) {
                            e.classList.remove("active")
                        }),
                        l('li[data-transition="' + e.getConfig().transition + '"]').forEach(function(e) {
                            e.classList.add("active")
                        })),
                        l(".slide-menu-panel li.active").forEach(function(e) {
                            e.classList.add("selected"),
                            P(e)
                        }))
                    }
                    function F(e, t) {
                        e && e.preventDefault(),
                        N && !t || (o("body").classList.remove("slide-menu-active"),
                        o(".reveal").classList.remove("has-" + n.effect + "-" + p),
                        o(".slide-menu").classList.remove("active"),
                        o(".slide-menu-overlay").classList.remove("active"),
                        l(".slide-menu-panel li.selected").forEach(function(e) {
                            e.classList.remove("selected")
                        }))
                    }
                    function U(e) {
                        W() ? F(e, !0) : z(e)
                    }
                    function W() {
                        return o("body").classList.contains("slide-menu-active")
                    }
                    function K(e, t) {
                        z(e);
                        var n = t;
                        "string" != typeof t && (n = e.currentTarget.getAttribute("data-panel")),
                        o(".slide-menu-toolbar > li.active-toolbar-button").classList.remove("active-toolbar-button"),
                        o('li[data-panel="' + n + '"]').classList.add("active-toolbar-button"),
                        o(".slide-menu-panel.active-menu-panel").classList.remove("active-menu-panel"),
                        o('div[data-panel="' + n + '"]').classList.add("active-menu-panel")
                    }
                    function $(t, n) {
                        var a = parseInt(t.getAttribute("data-slide-h"))
                          , r = parseInt(t.getAttribute("data-slide-v"))
                          , i = t.getAttribute("data-theme")
                          , s = t.getAttribute("data-transition");
                        if (isNaN(a) || isNaN(r))
                            if (i) {
                                var l = o("link#theme")
                                  , c = l.parentElement
                                  , d = l.nextElementSibling;
                                l.remove();
                                var u = l.cloneNode();
                                u.setAttribute("href", i),
                                u.onload = function() {
                                    Y()
                                }
                                ,
                                c.insertBefore(u, d),
                                F()
                            } else if (s)
                                e.configure({
                                    transition: s
                                }),
                                F();
                            else {
                                var f = o("a", t);
                                f && (n || !N || M && f.href.startsWith("#") || f.href.startsWith(window.location.origin + window.location.pathname + "#")) && f.click(),
                                F()
                            }
                        else
                            e.slide(a, r),
                            F()
                    }
                    function X(e) {
                        "A" !== e.target.nodeName && e.preventDefault(),
                        $(e.currentTarget)
                    }
                    function J() {
                        var t = e.getState();
                        l("li.slide-menu-item, li.slide-menu-item-vertical").forEach(function(e) {
                            e.classList.remove("past"),
                            e.classList.remove("active"),
                            e.classList.remove("future");
                            var n = parseInt(e.getAttribute("data-slide-h"))
                              , a = parseInt(e.getAttribute("data-slide-v"));
                            n < t.indexh || n === t.indexh && a < t.indexv ? e.classList.add("past") : n === t.indexh && a === t.indexv ? e.classList.add("active") : e.classList.add("future")
                        })
                    }
                    function Y() {
                        var e = window.getComputedStyle(o(".reveal"));
                        o(".slide-menu").style.fontFamily = e.fontFamily
                    }
                    var G = 0;
                    function V() {
                        if (!r) {
                            var n = o(".reveal").parentElement
                              , a = c("div", {
                                class: "slide-menu-wrapper"
                            });
                            n.appendChild(a);
                            var i = c("nav", {
                                class: "slide-menu slide-menu--" + p
                            });
                            "string" == typeof g && (-1 != ["normal", "wide", "third", "half", "full"].indexOf(g) ? i.classList.add("slide-menu--" + g) : (i.classList.add("slide-menu--custom"),
                            i.style.width = g)),
                            a.appendChild(i),
                            Y();
                            var s = c("div", {
                                class: "slide-menu-overlay"
                            });
                            a.appendChild(s),
                            s.onclick = function() {
                                F(null, !0)
                            }
                            ;
                            var d = c("ol", {
                                class: "slide-menu-toolbar"
                            });
                            function u(e, t, n, a, r, i) {
                                var s = {
                                    "data-button": "" + G++,
                                    class: "toolbar-panel-button" + (i ? " active-toolbar-button" : "")
                                };
                                t && (s["data-panel"] = t);
                                var l = c("li", s);
                                return n.startsWith("fa-") ? l.appendChild(c("i", {
                                    class: a + " " + n
                                })) : l.innerHTML = n + "</i>",
                                l.appendChild(c("br"), o("i", l)),
                                l.appendChild(c("span", {
                                    class: "slide-menu-toolbar-label"
                                }, e), o("i", l)),
                                l.onclick = r,
                                d.appendChild(l),
                                l
                            }
                            function f(n, a, r, i, s) {
                                function l(e, t) {
                                    var n = t ? o(e, a) : o(e);
                                    return n ? n.textContent : null
                                }
                                "number" != typeof s || isNaN(s);
                                var d = a.getAttribute("data-menu-title") || l(".menu-title", a) || l(h, a);
                                if (!d && b && (d = a.textContent.trim()) && (d = d.split("\n").map(function(e) {
                                    return e.trim()
                                }).join(" ").trim().replace(/^(.{16}[^\s]*).*/, "$1").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") + "..."),
                                !d) {
                                    if (v)
                                        return "";
                                    n += " no-title",
                                    d = "Slide " + r
                                }
                                var u = c("li", {
                                    class: n,
                                    "data-item": r,
                                    "data-slide-h": i,
                                    "data-slide-v": void 0 === s ? 0 : s
                                });
                                if (y && (u.appendChild(c("i", {
                                    class: "fas fa-check-circle fa-fw past"
                                })),
                                u.appendChild(c("i", {
                                    class: "fas fa-arrow-alt-circle-right fa-fw active"
                                })),
                                u.appendChild(c("i", {
                                    class: "far fa-circle fa-fw future"
                                }))),
                                m) {
                                    var f = []
                                      , p = "h.v";
                                    switch ("string" == typeof m ? p = m : "string" == typeof t.slideNumber && (p = t.slideNumber),
                                    p) {
                                    case "c":
                                        f.push(r);
                                        break;
                                    case "c/t":
                                        f.push(r, "/", e.getTotalSlides());
                                        break;
                                    case "h/v":
                                        f.push(i + 1),
                                        "number" != typeof s || isNaN(s) || f.push("/", s + 1);
                                        break;
                                    default:
                                        f.push(i + 1),
                                        "number" != typeof s || isNaN(s) || f.push(".", s + 1)
                                    }
                                    u.appendChild(c("span", {
                                        class: "slide-menu-item-number"
                                    }, f.join("") + ". "))
                                }
                                return u.appendChild(c("span", {
                                    class: "slide-menu-item-title"
                                }, d)),
                                u
                            }
                            if (o(".slide-menu").appendChild(d),
                            u("Slides", "Slides", "fa-images", "fas", K, !0),
                            w && w.forEach(function(e, t, n) {
                                u(e.title, "Custom" + t, e.icon, null, K)
                            }),
                            A && u("Themes", "Themes", "fa-adjust", "fas", K),
                            S && u("Transitions", "Transitions", "fa-sticky-note", "fas", K),
                            button = c("li", {
                                id: "close",
                                class: "toolbar-panel-button"
                            }),
                            button.appendChild(c("i", {
                                class: "fas fa-times"
                            })),
                            button.appendChild(c("br")),
                            button.appendChild(c("span", {
                                class: "slide-menu-toolbar-label"
                            }, "Close")),
                            button.onclick = function() {
                                F(null, !0)
                            }
                            ,
                            d.appendChild(button),
                            function e() {
                                if (document.querySelector("section[data-markdown]:not([data-markdown-parsed])"))
                                    setTimeout(e, 100);
                                else {
                                    var t = c("div", {
                                        "data-panel": "Slides",
                                        class: "slide-menu-panel active-menu-panel"
                                    });
                                    t.appendChild(c("ul", {
                                        class: "slide-menu-items"
                                    })),
                                    i.appendChild(t);
                                    var n = o('.slide-menu-panel[data-panel="Slides"] > .slide-menu-items')
                                      , a = 0;
                                    l(".slides > section").forEach(function(e, t) {
                                        var r = l("section", e);
                                        if (r.length > 0)
                                            r.forEach(function(e, r) {
                                                var i = f(0 === r ? "slide-menu-item" : "slide-menu-item-vertical", e, a, t, r);
                                                i && (a++,
                                                n.appendChild(i))
                                            });
                                        else {
                                            var i = f("slide-menu-item", e, a, t);
                                            i && (a++,
                                            n.appendChild(i))
                                        }
                                    }),
                                    l(".slide-menu-item, .slide-menu-item-vertical").forEach(function(e) {
                                        e.onclick = X
                                    }),
                                    J()
                                }
                            }(),
                            e.addEventListener("slidechanged", J),
                            w) {
                                function E() {
                                    this.status >= 200 && this.status < 300 ? (this.panel.innerHTML = this.responseText,
                                    N(this.panel)) : M(this)
                                }
                                function x() {
                                    M(this)
                                }
                                function N(e) {
                                    l("ul.slide-menu-items li.slide-menu-item", e).forEach(function(e, t) {
                                        e.setAttribute("data-item", t + 1),
                                        e.onclick = X,
                                        e.addEventListener("mouseenter", B)
                                    })
                                }
                                function M(e) {
                                    var t = "<p>ERROR: The attempt to fetch " + e.responseURL + " failed with HTTP status " + e.status + " (" + e.statusText + ").</p><p>Remember that you need to serve the presentation HTML from a HTTP server.</p>";
                                    e.panel.innerHTML = t
                                }
                                w.forEach(function(e, t, n) {
                                    var a = c("div", {
                                        "data-panel": "Custom" + t,
                                        class: "slide-menu-panel slide-menu-custom-panel"
                                    });
                                    e.content ? (a.innerHTML = e.content,
                                    N(a)) : e.src && function(e, t) {
                                        var n = new XMLHttpRequest;
                                        n.panel = e,
                                        n.arguments = Array.prototype.slice.call(arguments, 2),
                                        n.onload = E,
                                        n.onerror = x,
                                        n.open("get", t, !0),
                                        n.send(null)
                                    }(a, e.src),
                                    i.appendChild(a)
                                })
                            }
                            if (A) {
                                var C = c("div", {
                                    class: "slide-menu-panel",
                                    "data-panel": "Themes"
                                });
                                i.appendChild(C);
                                var I = c("ul", {
                                    class: "slide-menu-items"
                                });
                                C.appendChild(I),
                                A.forEach(function(e, t) {
                                    var n = c("li", {
                                        class: "slide-menu-item",
                                        "data-theme": e.theme,
                                        "data-item": "" + (t + 1)
                                    }, e.name);
                                    I.appendChild(n),
                                    n.onclick = X
                                })
                            }
                            if (S) {
                                C = c("div", {
                                    class: "slide-menu-panel",
                                    "data-panel": "Transitions"
                                });
                                i.appendChild(C);
                                I = c("ul", {
                                    class: "slide-menu-items"
                                });
                                C.appendChild(I),
                                S.forEach(function(e, t) {
                                    var n = c("li", {
                                        class: "slide-menu-item",
                                        "data-transition": e.toLowerCase(),
                                        "data-item": "" + (t + 1)
                                    }, e);
                                    I.appendChild(n),
                                    n.onclick = X
                                })
                            }
                            if (L) {
                                var _ = c("div", {
                                    class: "slide-menu-button"
                                });
                                (q = c("a", {
                                    href: "#"
                                })).appendChild(c("i", {
                                    class: "fas fa-bars"
                                })),
                                _.appendChild(q),
                                o(".reveal").appendChild(_),
                                _.onclick = z
                            }
                            if (k) {
                                var O = o("div.slide-number")
                                  , P = c("div", {
                                    class: "slide-number-wrapper"
                                })
                                  , q = c("a", {
                                    href: "#"
                                });
                                P.appendChild(q),
                                O.parentElement.insertBefore(P, O),
                                q.appendChild(O),
                                q.onclick = z
                            }
                            function B(e) {
                                R && (l(".active-menu-panel .slide-menu-items li.selected").forEach(function(e) {
                                    e.classList.remove("selected")
                                }),
                                e.currentTarget.classList.add("selected"))
                            }
                            l(".slide-menu-panel .slide-menu-items li").forEach(function(e) {
                                e.addEventListener("mouseenter", B)
                            })
                        }
                        T && z(),
                        r = !0
                    }
                    i.toggle = U,
                    i.openMenu = z,
                    i.closeMenu = F,
                    i.openPanel = K,
                    i.isOpen = W,
                    i.init = V,
                    i.isInit = function() {
                        return r
                    }
                    ,
                    C || V(),
                    e.addKeyBinding({
                        keyCode: 77,
                        key: "M",
                        description: "Toggle menu"
                    }, U),
                    a = "menu-ready",
                    (d = document.createEvent("HTMLEvents", 1, 2)).initEvent(a, !0, !0),
                    function(e, t) {
                        for (var n in t)
                            e[n] = t[n]
                    }(d, s),
                    document.querySelector(".reveal").dispatchEvent(d),
                    t.postMessageEvents && window.parent !== window.self && window.parent.postMessage(JSON.stringify({
                        namespace: "reveal",
                        eventName: a,
                        state: e.getState()
                    }), "*")
                }
            }
            function o(e, t) {
                return t || (t = document),
                t.querySelector(e)
            }
            function l(e, t) {
                return t || (t = document),
                Array.prototype.slice.call(t.querySelectorAll(e))
            }
            function c(e, t, n) {
                var a = document.createElement(e);
                return t && Object.getOwnPropertyNames(t).forEach(function(e) {
                    a.setAttribute(e, t[e])
                }),
                n && (a.innerHTML = n),
                a
            }
            function d(e, t, n) {
                var a, r = document.querySelector("head");
                "script" === t ? ((a = document.createElement("script")).type = "text/javascript",
                a.src = e) : "stylesheet" === t && ((a = document.createElement("link")).rel = "stylesheet",
                a.href = e);
                var i = function() {
                    "function" == typeof n && (n.call(),
                    n = null)
                };
                a.onload = i,
                a.onreadystatechange = function() {
                    "loaded" === this.readyState && i()
                }
                ,
                r.appendChild(a)
            }
            d(n.path + "menu.css", "stylesheet", function() {
                a ? d(n.path + "font-awesome/css/all.css", "stylesheet", s) : s()
            }),
            String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
                return this.substr(t || 0, e.length) === e
            }
            ),
            String.prototype.endsWith || (String.prototype.endsWith = function(e, t) {
                return (void 0 === t || t > this.length) && (t = this.length),
                this.substring(t - e.length, t) === e
            }
            );
            var u, f = (u = /(msie) ([\w.]+)/.exec(window.navigator.userAgent.toLowerCase())) && "msie" === u[1] ? parseFloat(u[2]) : null
        }()
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    (function(e) {
        const t = "lib/js/reveal.js-dependencies/notes.html";
        !function() {
            function n(n=t) {
                if (!n) {
                    var a = document.querySelector('script[src$="notes.js"]').src;
                    n = (a = a.replace(/notes\.js(\?.*)?$/, "")) + "notes.html"
                }
                var r, i = window.open(n, "reveal.js - Notes", "width=1100,height=700");
                function s(t) {
                    var n = e.getCurrentSlide()
                      , a = n.querySelector("aside.notes")
                      , r = n.querySelector(".current-fragment")
                      , s = {
                        namespace: "reveal-notes",
                        type: "state",
                        notes: "",
                        markdown: !1,
                        whitespace: "normal",
                        state: e.getState()
                    };
                    if (n.hasAttribute("data-notes") && (s.notes = n.getAttribute("data-notes"),
                    s.whitespace = "pre-wrap"),
                    r) {
                        var o = r.querySelector("aside.notes");
                        o ? a = o : r.hasAttribute("data-notes") && (s.notes = r.getAttribute("data-notes"),
                        s.whitespace = "pre-wrap",
                        a = null)
                    }
                    a && (s.notes = a.innerHTML,
                    s.markdown = "string" == typeof a.getAttribute("data-markdown")),
                    i.postMessage(JSON.stringify(s), "*")
                }
                i.Reveal = this.Reveal,
                r = setInterval(function() {
                    i.postMessage(JSON.stringify({
                        namespace: "reveal-notes",
                        type: "connect",
                        url: window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search,
                        state: e.getState()
                    }), "*")
                }, 500),
                window.addEventListener("message", function(t) {
                    var n = JSON.parse(t.data);
                    n && "reveal-notes" === n.namespace && "connected" === n.type && (clearInterval(r),
                    e.addEventListener("slidechanged", s),
                    e.addEventListener("fragmentshown", s),
                    e.addEventListener("fragmenthidden", s),
                    e.addEventListener("overviewhidden", s),
                    e.addEventListener("overviewshown", s),
                    e.addEventListener("paused", s),
                    e.addEventListener("resumed", s),
                    s())
                })
            }
            /receiver/i.test(window.location.search) || (null !== window.location.search.match(/(\?|\&)notes/gi) && n(),
            document.addEventListener("keydown", function(t) {
                null !== document.querySelector(":focus") || t.shiftKey || t.altKey || t.ctrlKey || t.metaKey || !1 !== e.getConfig().keyboard && 83 === t.keyCode && (t.preventDefault(),
                n())
            }, !1),
            window.Reveal && e.registerKeyboardShortcut("S", "Speaker notes view"))
        }()
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    (function(e) {
        window.RevealMath || function() {
            !function(e, t) {
                const n = document.querySelector("head")
                  , a = document.createElement("script");
                a.type = "text/javascript",
                a.src = e;
                const r = function() {
                    "function" == typeof t && (t.call(),
                    t = null)
                };
                a.onload = r,
                a.onreadystatechange = function() {
                    "loaded" === this.readyState && r()
                }
                ,
                n.appendChild(a)
            }("https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js" + "?config=" + "TeX-AMS_HTML-full", function() {
                MathJax.Hub.Config({
                    messageStyle: "none",
                    tex2jax: {
                        inlineMath: [["$", "$"], ["\\(", "\\)"]],
                        skipTags: ["script", "noscript", "style", "textarea", "pre"]
                    },
                    skipStartupTypeset: !0
                }),
                MathJax.Hub.Queue(["Typeset", MathJax.Hub]),
                MathJax.Hub.Queue(e.layout),
                MathJax.Hub.Register.StartupHook("TeX Jax Ready", function() {
                    const e = MathJax.InputJax.TeX;
                    e.Definitions.Add({
                        macros: {
                            fragment: "FRAGMENT_INDEX_attribute",
                            fragapply: "FRAGMENT_apply",
                            texclass: "TEX_APPLY_class"
                        }
                    }),
                    e.Parse.Augment({
                        FRAGMENT_INDEX_attribute: function(e) {
                            const t = this.GetArgument(e)
                              , n = this.ParseArg(e);
                            this.Push(n.With({
                                class: "fragment fragment-mjx",
                                attrNames: ["data-fragment-index"],
                                attr: {
                                    "data-fragment-index": t
                                }
                            }))
                        },
                        FRAGMENT_apply: function(e) {
                            const t = this.GetArgument(e);
                            let[n,a] = [...t.split(" ")];
                            const r = this.ParseArg(e);
                            a ? this.Push(r.With({
                                class: "fragapply fragment fragment-mjx " + n,
                                attrNames: ["data-fragment-index"],
                                attr: {
                                    "data-fragment-index": a
                                }
                            })) : this.Push(r.With({
                                class: "fragapply fragment fragment-mjx " + n
                            }))
                        },
                        TEX_APPLY_class: function(e) {
                            const t = this.GetArgument(e)
                              , n = this.ParseArg(e);
                            this.Push(n.With({
                                class: t
                            }))
                        }
                    })
                }),
                e.addEventListener("slidechanged", function(e) {
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, e.currentSlide]);
                    const t = e.currentSlide;
                    let n = Array.prototype.slice.call(t.querySelectorAll(".fragment-mjx"));
                    n = n.filter(e=>"SPAN" !== e.nodeName);
                    for (let e = 0; e < n.length; e++)
                        n[e].classList.remove("fragment")
                })
            })
        }()
    }
    ).call(this, n(0))
}
, function(e, t) {
    !function() {
        function e(e) {
            function t(e) {
                return e.replace(/^[\s\uFEFF\xA0]+/g, "")
            }
            return function(e) {
                var n = function(e) {
                    for (var t = e.split("\n"), n = 0; n < t.length && "" === t[n].trim(); n++)
                        t.splice(n--, 1);
                    for (n = t.length - 1; n >= 0 && "" === t[n].trim(); n--)
                        t.splice(n, 1);
                    return t.join("\n")
                }(e.innerHTML).split("\n")
                  , a = n.reduce(function(e, n) {
                    return n.length > 0 && t(n).length > 0 && e > n.length - t(n).length ? n.length - t(n).length : e
                }, Number.POSITIVE_INFINITY);
                return n.map(function(e, t) {
                    return e.slice(a)
                }).join("\n")
            }(e)
        }
        if ("function" == typeof window.addEventListener)
            for (var t = document.querySelectorAll("pre code"), n = 0, a = t.length; n < a; n++) {
                var r = t[n];
                r.hasAttribute("data-trim") && "function" == typeof r.innerHTML.trim && (r.innerHTML = e(r)),
                r.hasAttribute("data-noescape") || (r.innerHTML = r.innerHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;")),
                r.addEventListener("focusout", function(e) {
                    hljs.highlightBlock(e.currentTarget)
                }, !1)
            }
    }()
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var t = n(1)
          , a = n.n(t);
        Object.keys({
            0: "xml",
            1: "javascript",
            2: "python",
            3: "bash"
        }).forEach(e=>{
            let t = {
                0: "xml",
                1: "javascript",
                2: "python",
                3: "bash"
            }[e];
            const r = n(10)(`./${t}`);
            a.a.registerLanguage(t, r)
        }
        ),
        document.addEventListener("DOMContentLoaded", t=>{
            window.Reveal = e,
            e.initialize({
                width: 960,
                height: 700,
                controls: !0,
                progress: !0,
                slideNumber: !1,
                history: !0,
                keyboard: !0,
                center: !0,
                overview: !0,
                transition: "slide",
                transitionSpeed: "default",
                keyboard: {
                    80: function() {
                        if (!window.location.search.match(/print-pdf/gi)) {
                            var e = window.location.toString().split("#");
                            window.location.replace(e[0] + "?print-pdf")
                        }
                    }
                }
            }),
            a.a.initHighlightingOnLoad()
        }
        )
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    var a = {
        "./bash": 11,
        "./javascript": 12,
        "./python": 13,
        "./xml": 14
    };
    function r(e) {
        var t = i(e);
        return n(t)
    }
    function i(e) {
        if (!n.o(a, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND",
            t
        }
        return a[e]
    }
    r.keys = function() {
        return Object.keys(a)
    }
    ,
    r.resolve = i,
    e.exports = r,
    r.id = 10
}
, function(e, t) {
    e.exports = function(e) {
        var t = {
            className: "variable",
            variants: [{
                begin: /\$[\w\d#@][\w\d_]*/
            }, {
                begin: /\$\{(.*?)}/
            }]
        }
          , n = {
            className: "string",
            begin: /"/,
            end: /"/,
            contains: [e.BACKSLASH_ESCAPE, t, {
                className: "variable",
                begin: /\$\(/,
                end: /\)/,
                contains: [e.BACKSLASH_ESCAPE]
            }]
        };
        return {
            aliases: ["sh", "zsh"],
            lexemes: /\b-?[a-z\._]+\b/,
            keywords: {
                keyword: "if then else elif fi for while in do done case esac function",
                literal: "true false",
                built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
                _: "-ne -eq -lt -gt -f -d -e -s -l -a"
            },
            contains: [{
                className: "meta",
                begin: /^#![^\n]+sh\s*$/,
                relevance: 10
            }, {
                className: "function",
                begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                returnBegin: !0,
                contains: [e.inherit(e.TITLE_MODE, {
                    begin: /\w[\w\d_]*/
                })],
                relevance: 0
            }, e.HASH_COMMENT_MODE, n, {
                className: "string",
                begin: /'/,
                end: /'/
            }, t]
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        var t = "[A-Za-z$_][0-9A-Za-z$_]*"
          , n = {
            keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
        }
          , a = {
            className: "number",
            variants: [{
                begin: "\\b(0[bB][01]+)"
            }, {
                begin: "\\b(0[oO][0-7]+)"
            }, {
                begin: e.C_NUMBER_RE
            }],
            relevance: 0
        }
          , r = {
            className: "subst",
            begin: "\\$\\{",
            end: "\\}",
            keywords: n,
            contains: []
        }
          , i = {
            className: "string",
            begin: "`",
            end: "`",
            contains: [e.BACKSLASH_ESCAPE, r]
        };
        r.contains = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, i, a, e.REGEXP_MODE];
        var s = r.contains.concat([e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]);
        return {
            aliases: ["js", "jsx"],
            keywords: n,
            contains: [{
                className: "meta",
                relevance: 10,
                begin: /^\s*['"]use (strict|asm)['"]/
            }, {
                className: "meta",
                begin: /^#!/,
                end: /$/
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, i, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, a, {
                begin: /[{,]\s*/,
                relevance: 0,
                contains: [{
                    begin: t + "\\s*:",
                    returnBegin: !0,
                    relevance: 0,
                    contains: [{
                        className: "attr",
                        begin: t,
                        relevance: 0
                    }]
                }]
            }, {
                begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                keywords: "return throw case",
                contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.REGEXP_MODE, {
                    className: "function",
                    begin: "(\\(.*?\\)|" + t + ")\\s*=>",
                    returnBegin: !0,
                    end: "\\s*=>",
                    contains: [{
                        className: "params",
                        variants: [{
                            begin: t
                        }, {
                            begin: /\(\s*\)/
                        }, {
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: n,
                            contains: s
                        }]
                    }]
                }, {
                    begin: /</,
                    end: /(\/\w+|\w+\/)>/,
                    subLanguage: "xml",
                    contains: [{
                        begin: /<\w+\s*\/>/,
                        skip: !0
                    }, {
                        begin: /<\w+/,
                        end: /(\/\w+|\w+\/)>/,
                        skip: !0,
                        contains: [{
                            begin: /<\w+\s*\/>/,
                            skip: !0
                        }, "self"]
                    }]
                }],
                relevance: 0
            }, {
                className: "function",
                beginKeywords: "function",
                end: /\{/,
                excludeEnd: !0,
                contains: [e.inherit(e.TITLE_MODE, {
                    begin: t
                }), {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    contains: s
                }],
                illegal: /\[|%/
            }, {
                begin: /\$[(.]/
            }, e.METHOD_GUARD, {
                className: "class",
                beginKeywords: "class",
                end: /[{;=]/,
                excludeEnd: !0,
                illegal: /[:"\[\]]/,
                contains: [{
                    beginKeywords: "extends"
                }, e.UNDERSCORE_TITLE_MODE]
            }, {
                beginKeywords: "constructor get set",
                end: /\{/,
                excludeEnd: !0
            }],
            illegal: /#(?!!)/
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        var t = {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10",
            built_in: "Ellipsis NotImplemented",
            literal: "False None True"
        }
          , n = {
            className: "meta",
            begin: /^(>>>|\.\.\.) /
        }
          , a = {
            className: "subst",
            begin: /\{/,
            end: /\}/,
            keywords: t,
            illegal: /#/
        }
          , r = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE],
            variants: [{
                begin: /(u|b)?r?'''/,
                end: /'''/,
                contains: [e.BACKSLASH_ESCAPE, n],
                relevance: 10
            }, {
                begin: /(u|b)?r?"""/,
                end: /"""/,
                contains: [e.BACKSLASH_ESCAPE, n],
                relevance: 10
            }, {
                begin: /(fr|rf|f)'''/,
                end: /'''/,
                contains: [e.BACKSLASH_ESCAPE, n, a]
            }, {
                begin: /(fr|rf|f)"""/,
                end: /"""/,
                contains: [e.BACKSLASH_ESCAPE, n, a]
            }, {
                begin: /(u|r|ur)'/,
                end: /'/,
                relevance: 10
            }, {
                begin: /(u|r|ur)"/,
                end: /"/,
                relevance: 10
            }, {
                begin: /(b|br)'/,
                end: /'/
            }, {
                begin: /(b|br)"/,
                end: /"/
            }, {
                begin: /(fr|rf|f)'/,
                end: /'/,
                contains: [e.BACKSLASH_ESCAPE, a]
            }, {
                begin: /(fr|rf|f)"/,
                end: /"/,
                contains: [e.BACKSLASH_ESCAPE, a]
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
        }
          , i = {
            className: "number",
            relevance: 0,
            variants: [{
                begin: e.BINARY_NUMBER_RE + "[lLjJ]?"
            }, {
                begin: "\\b(0o[0-7]+)[lLjJ]?"
            }, {
                begin: e.C_NUMBER_RE + "[lLjJ]?"
            }]
        }
          , s = {
            className: "params",
            begin: /\(/,
            end: /\)/,
            contains: ["self", n, i, r]
        };
        return a.contains = [r, i, n],
        {
            aliases: ["py", "gyp", "ipython"],
            keywords: t,
            illegal: /(<\/|->|\?)|=>/,
            contains: [n, i, r, e.HASH_COMMENT_MODE, {
                variants: [{
                    className: "function",
                    beginKeywords: "def"
                }, {
                    className: "class",
                    beginKeywords: "class"
                }],
                end: /:/,
                illegal: /[${=;\n,]/,
                contains: [e.UNDERSCORE_TITLE_MODE, s, {
                    begin: /->/,
                    endsWithParent: !0,
                    keywords: "None"
                }]
            }, {
                className: "meta",
                begin: /^[\t ]*@/,
                end: /$/
            }, {
                begin: /\b(print|exec)\(/
            }]
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        var t = {
            endsWithParent: !0,
            illegal: /</,
            relevance: 0,
            contains: [{
                className: "attr",
                begin: "[A-Za-z0-9\\._:-]+",
                relevance: 0
            }, {
                begin: /=\s*/,
                relevance: 0,
                contains: [{
                    className: "string",
                    endsParent: !0,
                    variants: [{
                        begin: /"/,
                        end: /"/
                    }, {
                        begin: /'/,
                        end: /'/
                    }, {
                        begin: /[^\s"'=<>`]+/
                    }]
                }]
            }]
        };
        return {
            aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
            case_insensitive: !0,
            contains: [{
                className: "meta",
                begin: "<!DOCTYPE",
                end: ">",
                relevance: 10,
                contains: [{
                    begin: "\\[",
                    end: "\\]"
                }]
            }, e.COMMENT("\x3c!--", "--\x3e", {
                relevance: 10
            }), {
                begin: "<\\!\\[CDATA\\[",
                end: "\\]\\]>",
                relevance: 10
            }, {
                className: "meta",
                begin: /<\?xml/,
                end: /\?>/,
                relevance: 10
            }, {
                begin: /<\?(php)?/,
                end: /\?>/,
                subLanguage: "php",
                contains: [{
                    begin: "/\\*",
                    end: "\\*/",
                    skip: !0
                }, {
                    begin: 'b"',
                    end: '"',
                    skip: !0
                }, {
                    begin: "b'",
                    end: "'",
                    skip: !0
                }, e.inherit(e.APOS_STRING_MODE, {
                    illegal: null,
                    className: null,
                    contains: null,
                    skip: !0
                }), e.inherit(e.QUOTE_STRING_MODE, {
                    illegal: null,
                    className: null,
                    contains: null,
                    skip: !0
                })]
            }, {
                className: "tag",
                begin: "<style(?=\\s|>|$)",
                end: ">",
                keywords: {
                    name: "style"
                },
                contains: [t],
                starts: {
                    end: "</style>",
                    returnEnd: !0,
                    subLanguage: ["css", "xml"]
                }
            }, {
                className: "tag",
                begin: "<script(?=\\s|>|$)",
                end: ">",
                keywords: {
                    name: "script"
                },
                contains: [t],
                starts: {
                    end: "<\/script>",
                    returnEnd: !0,
                    subLanguage: ["actionscript", "javascript", "handlebars", "xml"]
                }
            }, {
                className: "tag",
                begin: "</?",
                end: "/?>",
                contains: [{
                    className: "name",
                    begin: /[^\/><\s]+/,
                    relevance: 0
                }, t]
            }]
        }
    }
}
, function(e, t, n) {}
, function(e, t, n) {
    "use strict";
    n.r(t);
    n(2),
    n(3),
    n(4),
    n(5),
    n(6),
    n(7),
    function() {
        let e = document.createElement("link");
        e.rel = "stylesheet",
        e.type = "text/css",
        e.href = `lib/css/${window.location.search.match(/print-pdf/gi) ? "pdf" : "paper"}.css`,
        document.getElementsByTagName("head")[0].appendChild(e)
    }(),
    n(8),
    n(9),
    n(15)
}
]);
