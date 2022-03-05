/*
 * HC Off-canvas Nav
 * ===================
 * Version: 6.0.4
 * Author: Some Web Media
 * Author URL: https://github.com/somewebmedia/
 * Plugin URL: https://github.com/somewebmedia/hc-offcanvas-nav
 * Description: JavaScript library for creating off-canvas multi-level navigations
 * License: MIT
 */
"use strict";
! function(e, t) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        if (!e.document) throw new Error("HC Off-canvas Nav requires a browser to run.");
        module.exports = t(e)
    } else "function" == typeof define && define.amd ? define("hcOffcanvasNav", [], t(e)) : t(e)
}("undefined" != typeof window ? window : this, function(ne) {
    var ae = ne.document,
        re = ae.getElementsByTagName("html")[0],
        ie = 0,
        se = "nav-open",
        i = function(e, t) {
            if (t = t || {}, "string" == typeof e && (e = "#" === e.charAt(0) && -1 === e.indexOf(" ") ? ae.querySelector(e) : ae.querySelectorAll(e)), !e) return !1;
            var R = i.Helpers;
            void 0 !== t.maxWidth && (R.deprecated("maxWidth", "disableAt", "option"), t.disableAt = t.maxWidth);
            var Z = Object.assign({}, {
                width: 280,
                height: "auto",
                disableAt: !1,
                pushContent: null,
                swipeGestures: !0,
                expanded: !1,
                position: "left",
                levelOpen: "overlap",
                levelSpacing: 40,
                levelTitles: !0,
                closeOpenLevels: !0,
                closeActiveLevel: !1,
                navTitle: null,
                navClass: "",
                disableBody: !0,
                closeOnClick: !0,
                customToggle: null,
                bodyInsert: "prepend",
                keepClasses: !0,
                removeOriginalNav: !1,
                rtl: !1,
                insertClose: !0,
                insertBack: !0,
                levelTitleAsBack: !0,
                labelClose: "",
                labelBack: "Back"
            }, t);
            Z.ariaLabels = Object.assign({}, {
                open: "Open Menu",
                close: "Close Menu",
                submenu: "Submenu"
            }, t.ariaLabels);
            var ee = [],
                te = function(e) {
                    if (!ee.length) return !1;
                    var t = !1;
                    "string" == typeof e && (e = [e]);
                    for (var n = e.length, a = 0; a < n; a++) - 1 !== ee.indexOf(e[a]) && (t = !0);
                    return t
                },
                n = function(e) {
                    if (e.querySelector("ul") || "UL" === e.tagName) {
                        var g = "hc-nav-" + ++ie,
                            l = R.printStyle("hc-offcanvas-" + ie + "-style"),
                            s = "keydown.hcOffcanvasNav",
                            c = R.createElement("nav", {
                                role: "navigation"
                            }),
                            v = R.createElement("div", {
                                class: "nav-container"
                            });
                        c.addEventListener("click", R.stopPropagation), c.appendChild(v);
                        var n, d, a, u = null,
                            p = null,
                            t = {},
                            f = !1,
                            h = !1,
                            m = null,
                            b = 0,
                            y = 0,
                            E = 0,
                            L = null,
                            A = {},
                            x = [],
                            C = !1,
                            O = [],
                            o = null,
                            N = null,
                            k = !1,
                            T = !1;
                        Z.customToggle ? (u = R.getElement(Z.customToggle)) && (u.classList.add("hc-nav-trigger", g), u.addEventListener("click", K)) : ((u = R.createElement("a", {
                            href: "#",
                            class: "hc-nav-trigger " + g,
                            "aria-label": (Z.ariaLabels || {}).open
                        }, R.createElement("span"))).addEventListener("click", K), e.insertAdjacentElement("afterend", u)), u.setAttribute("role", "button"), u.setAttribute("aria-controls", g), u.addEventListener("keydown", function(e) {
                            "Enter" !== e.key && 13 !== e.keyCode || setTimeout(function() {
                                w(0, 0)
                            }, 0)
                        });
                        var w = function(e, t, n) {
                                if ("number" == typeof t && ("number" == typeof e || O.length)) {
                                    var a = Array.prototype.filter.call(v.querySelectorAll(".nav-wrapper"), function(e) {
                                        return e.getAttribute("data-level") == t && ("number" != typeof n || "number" == typeof n && e.getAttribute("data-index") == n)
                                    })[0];
                                    if (a = R.children(a, ".nav-content")[0], a = R.children(a, "ul"), a = R.children(a, "li"), a = R.children(a, ":not(.nav-wrapper)"), a = Array.prototype.map.call(a, function(e) {
                                            return Array.prototype.slice.call(e.querySelectorAll('[tabindex="0"], a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'))
                                        }).flat(), a = Array.prototype.filter.call(a, function(e) {
                                            return "-1" !== e.getAttribute("tabindex")
                                        })) {
                                        c.classList.add("user-is-tabbing");
                                        var r = a[0],
                                            i = a[a.length - 1];
                                        "number" == typeof e ? a[e].focus() : (O[O.length - 1].focus(), O.pop()), ae.removeEventListener(s), ae.addEventListener(s, function(e) {
                                            "Tab" !== e.key && 9 !== e.keyCode || (e.shiftKey ? ae.activeElement === r && (e.preventDefault(), i.focus()) : ae.activeElement === i && (e.preventDefault(), r.focus()))
                                        })
                                    }
                                }
                            },
                            S = function() {
                                ae.removeEventListener(s), setTimeout(function() {
                                    u.focus()
                                }, d)
                            },
                            M = function() {
                                v.style.transition = "none", c.style.display = "block";
                                var e = R.formatSizeVal(y = v.offsetWidth),
                                    t = R.formatSizeVal(E = v.offsetHeight);
                                l.add(".hc-offcanvas-nav." + g + ".nav-position-left .nav-container", "transform: translate3d(-" + e + ", 0, 0)"), l.add(".hc-offcanvas-nav." + g + ".nav-position-right .nav-container", "transform: translate3d(" + e + ", 0, 0)"), l.add(".hc-offcanvas-nav." + g + ".nav-position-top .nav-container", "transform: translate3d(0, -" + t + ", 0)"), l.add(".hc-offcanvas-nav." + g + ".nav-position-bottom .nav-container", "transform: translate3d(0, " + t + ", 0)"), l.insert(), c.style.display = "", v.style.transition = "", n = ne.getComputedStyle(v).transitionProperty, d = R.toMs(ne.getComputedStyle(v).transitionDuration), a = ne.getComputedStyle(v).transitionTimingFunction, Z.pushContent && p && n && l.add(R.getElementCssTag(p), "transition: " + n + " " + d + "ms " + a), l.insert()
                            },
                            r = function(e) {
                                var t = ne.getComputedStyle(u).display,
                                    n = !!Z.disableAt && "max-width: " + (Z.disableAt - 1) + "px",
                                    a = R.formatSizeVal(Z.width),
                                    r = R.formatSizeVal(Z.height),
                                    i = R.formatSizeVal(Z.levelSpacing);
                                (R.isNumeric(a) || -1 !== a.indexOf("px")) && (y = parseInt(a)), (R.isNumeric(r) || -1 !== r.indexOf("px")) && (E = parseInt(r)), te(["disableAt", "position"]) && l.reset(), l.add(".hc-offcanvas-nav." + g, "display: block", n), l.add(".hc-nav-original." + g, "display: none", n), l.add(".hc-nav-trigger." + g, "display: " + (t && "none" !== t ? t : "block"), n), -1 !== ["left", "right"].indexOf(Z.position) ? l.add(".hc-offcanvas-nav." + g + " .nav-container", "width: " + a) : l.add(".hc-offcanvas-nav." + g + " .nav-container", "height: " + r), l.add(".hc-offcanvas-nav." + g + ".nav-position-left .nav-container", "transform: translate3d(-" + a + ", 0, 0);"), l.add(".hc-offcanvas-nav." + g + ".nav-position-right .nav-container", "transform: translate3d(" + a + ", 0, 0);"), l.add(".hc-offcanvas-nav." + g + ".nav-position-top .nav-container", "transform: translate3d(0, -" + r + ", 0);"), l.add(".hc-offcanvas-nav." + g + ".nav-position-bottom .nav-container", "transform: translate3d(0, " + r + ", 0);"), l.add(".hc-offcanvas-nav." + g + ".nav-levels-overlap.nav-position-left li.level-open > .nav-wrapper", "transform: translate3d(-" + i + ", 0, 0)", n), l.add(".hc-offcanvas-nav." + g + ".nav-levels-overlap.nav-position-right li.level-open > .nav-wrapper", "transform: translate3d(" + i + ", 0, 0)", n), l.add(".hc-offcanvas-nav." + g + ".nav-levels-overlap.nav-position-top li.level-open > .nav-wrapper", "transform: translate3d(0, -" + i + ", 0)", n), l.add(".hc-offcanvas-nav." + g + ".nav-levels-overlap.nav-position-bottom li.level-open > .nav-wrapper", "transform: translate3d(0, " + i + ", 0)", n), l.insert(), (!e || e && te("pushContent")) && (p = R.getElement(Z.pushContent)), v.style.transition = "none";
                                var s = c.classList.contains(se),
                                    o = ["hc-offcanvas-nav", Z.navClass || "", g, "nav-levels-" + (Z.levelOpen || "none"), "nav-position-" + Z.position, Z.disableBody ? "disable-body" : "", R.isIos ? "is-ios" : "", R.isTouchDevice ? "touch-device" : "", s ? se : "", Z.rtl ? "rtl" : ""].join(" ").trim().replace(/  +/g, " ");
                                c.removeEventListener("click"), c.className = o, c.setAttribute("aria-hidden", !0), c.setAttribute("aria-labelledby", g), ae.documentElement.style.setProperty("--nav-level-spacing", Z.levelSpacing + "px"), Z.disableBody && c.addEventListener("click", G), e ? M() : setTimeout(M, 0)
                            },
                            i = function() {
                                t = function c(e, t) {
                                    var n = [];
                                    Array.prototype.forEach.call(e, function(e) {
                                        if ("UL" === e.tagName || e instanceof HTMLHeadingElement) {
                                            var l = {
                                                tagName: e.tagName,
                                                id: t,
                                                htmlClass: e.getAttribute("class") || null,
                                                items: []
                                            };
                                            e instanceof HTMLHeadingElement ? l.content = R.clone(e, !1, !0) : (null !== e.getAttribute("data-nav-active") && (m = t, e.removeAttribute("data-nav-active")), Array.prototype.forEach.call(e.children, function(e) {
                                                var t = null !== e.getAttribute("data-nav-custom-content"),
                                                    n = t ? e.children : Array.prototype.filter.call(e.children, function(e) {
                                                        return "UL" !== e.tagName && !e.querySelector("ul")
                                                    }).concat(e.children.length ? [] : [e.firstChild]),
                                                    a = t ? [] : Array.prototype.slice.call(e.querySelectorAll("ul")),
                                                    r = a.length ? [a[0]].concat(Array.prototype.filter.call(a[0].parentNode.children, function(e) {
                                                        return "UL" === e.tagName && e !== a[0]
                                                    })) : [],
                                                    i = null;
                                                if (!n.length) {
                                                    for (var s = "", o = 0; o < e.childNodes.length; o++) e.childNodes[o].nodeType === Node.TEXT_NODE && (s += e.childNodes[o].textContent.trim());
                                                    n = [ae.createTextNode(s)]
                                                }
                                                r.length && (R.data(e, "hc-uniqid") ? i = R.data(e, "hc-uniqid") : (i = Math.random().toString(36).substr(2), R.data(e, "hc-uniqid", i))), null !== e.getAttribute("data-nav-active") && (m = i, e.removeAttribute("data-nav-active")), l.items.push({
                                                    id: i,
                                                    htmlClass: e.getAttribute("class") || "",
                                                    content: n,
                                                    custom: t,
                                                    subnav: r.length ? c(r, i) : [],
                                                    highlight: null !== e.getAttribute("data-nav-highlight")
                                                })
                                            })), n.push(l)
                                        }
                                    });
                                    return n
                                }("UL" === e.tagName ? [e] : Array.prototype.filter.call(e.children, function(e) {
                                    return "UL" === e.tagName || e instanceof HTMLHeadingElement
                                }), null)
                            },
                            P = function(e) {
                                if (e) {
                                    for (; v.firstChild;) v.removeChild(v.firstChild);
                                    A = {}
                                }! function h(e, t, m, b, n, a) {
                                    var y = R.createElement("div", {
                                        class: "nav-wrapper nav-wrapper-" + m,
                                        "data-level": m,
                                        "data-index": n || 0
                                    });
                                    var r = R.createElement("div", {
                                        class: "nav-content"
                                    });
                                    y.addEventListener("click", R.stopPropagation);
                                    y.appendChild(r);
                                    t.appendChild(y);
                                    if (b && (0 === m || 0 < m && "overlap" === Z.levelOpen)) {
                                        var i = "string" == typeof b ? b : R.clone(ne.jQuery && b instanceof ne.jQuery && b.length ? b[0] : b, !0, !0);
                                        r.insertBefore(R.createElement("h2", {
                                            class: 0 === m ? "nav-title" + (!0 !== Z.insertClose || Z.labelClose ? "" : " followed-empty-close") : "level-title"
                                        }, i), r.firstChild)
                                    }
                                    e.forEach(function(e, t) {
                                        if ("UL" === e.tagName) {
                                            var f = R.createElement("ul", {
                                                role: "menu",
                                                "aria-level": m + 1
                                            });
                                            r.appendChild(f), Z.keepClasses && e.htmlClass && f.classList.add.apply(f.classList, e.htmlClass.split(" ")), 0 === t && b && f.setAttribute("aria-label", b), e.id && f.setAttribute("aria-labelledby", "menu-" + e.id), e.items.forEach(function(e, t) {
                                                var n = e.content;
                                                if (e.custom) {
                                                    var a = R.createElement("li", {
                                                        class: "nav-item nav-item-custom"
                                                    }, R.createElement("div", {
                                                        class: "nav-custom-content"
                                                    }, Array.prototype.map.call(n, function(e) {
                                                        return R.clone(e, !0, !0)
                                                    })));
                                                    return Z.keepClasses && e.htmlClass && a.classList.add.apply(a.classList, e.htmlClass.split(" ")), void f.appendChild(a)
                                                }
                                                var r, i = Array.prototype.filter.call(n, function(e) {
                                                    return "A" === e.tagName || e.nodeType !== Node.TEXT_NODE && e.querySelector("a")
                                                })[0];
                                                i ? (r = R.clone(i, !1, !0)).classList.add("nav-item-link") : r = R.createElement(e.subnav.length ? "a" : "span", {
                                                    class: "nav-item-link"
                                                }, Array.prototype.map.call(n, function(e) {
                                                    return R.clone(e, !0, !0)
                                                })), "A" === r.tagName && (r.setAttribute("tabindex", "0"), r.setAttribute("role", "menuitem"), r.getAttribute("href") || r.setAttribute("href", "#")), i && r.addEventListener("click", function(e) {
                                                    e.stopPropagation(), R.hasListener(i, "click") && i.click()
                                                }), "#" === r.getAttribute("href") && r.addEventListener("click", R.preventDefault), Z.closeOnClick && (Q() ? "A" !== r.tagName || "false" === r.dataset.navClose || null !== r.getAttribute("disabled") && "false" !== r.getAttribute("disabled") || e.subnav.length && (!r.getAttribute("href") || "#" === r.getAttribute("href").charAt(0)) || r.addEventListener("click", G) : "A" !== r.tagName || "false" === r.dataset.navClose || null !== r.getAttribute("disabled") && "false" !== r.getAttribute("disabled") || r.addEventListener("click", G));
                                                var s = R.createElement("li", {
                                                    class: "nav-item"
                                                });
                                                if (s.appendChild(r), f.appendChild(s), Z.keepClasses && e.htmlClass && s.classList.add.apply(s.classList, e.htmlClass.split(" ")), e.highlight && s.classList.add("nav-highlight"), R.wrap(r, R.createElement("div", {
                                                        class: "nav-item-wrapper"
                                                    })), e.subnav.length) {
                                                    var o = m + 1,
                                                        l = e.id,
                                                        c = "";
                                                    if (A[o] || (A[o] = 0), s.classList.add("nav-parent"), Q()) {
                                                        var v = A[o],
                                                            d = R.createElement("input", {
                                                                type: "checkbox",
                                                                id: g + "-" + o + "-" + v,
                                                                class: "hc-chk",
                                                                tabindex: -1,
                                                                "data-level": o,
                                                                "data-index": v,
                                                                value: l
                                                            });
                                                        d.addEventListener("click", R.stopPropagation), d.addEventListener("change", X), s.insertBefore(d, s.firstChild);
                                                        var u = function(e) {
                                                            e.addEventListener("click", function(e) {
                                                                if (e.stopPropagation(), d.setAttribute("checked", "true" !== d.getAttribute("checked")), "createEvent" in ae) {
                                                                    var t = ae.createEvent("HTMLEvents");
                                                                    t.initEvent("change", !1, !0), d.dispatchEvent(t)
                                                                }
                                                            }), e.addEventListener("keydown", function(e) {
                                                                "Enter" !== e.key && 13 !== e.keyCode || (C = !0, O.push(this))
                                                            }), e.setAttribute("aria-controls", "menu-" + l), e.setAttribute("aria-haspopup", "overlap" === Z.levelOpen), e.setAttribute("aria-expanded", !1)
                                                        };
                                                        if (-1 !== x.indexOf(l) && (y.classList.add("sub-level-open"), y.addEventListener("click", function() {
                                                                return J(o, v)
                                                            }), s.classList.add("level-open"), d.setAttribute("checked", !0)), c = !0 === Z.levelTitles ? n[0].textContent.trim() : "", r.getAttribute("href") && "#" !== r.getAttribute("href")) {
                                                            var p = R.createElement("a", {
                                                                href: "#",
                                                                class: "nav-next",
                                                                "aria-label": (Z.ariaLabels || {}).submenu + ": " + c,
                                                                role: "menuitem",
                                                                tabindex: 0
                                                            }, R.createElement("span"));
                                                            p.addEventListener("click", R.preventClick()), u(p), Z.rtl ? r.parentNode.appendChild(p) : r.parentNode.insertBefore(p, r.nextSibling)
                                                        } else r.appendChild(R.createElement("span", {
                                                            class: "nav-next"
                                                        }, R.createElement("span"))), u(r)
                                                    } else r.setAttribute("aria-expanded", !0);
                                                    A[o]++, h(e.subnav, s, o, c, A[o] - 1, "string" == typeof b ? b : "")
                                                }
                                            })
                                        } else r.appendChild(e.content)
                                    });
                                    if (m && void 0 !== n && !1 !== Z.insertBack && "overlap" === Z.levelOpen) {
                                        var s = R.children(r, "ul"),
                                            o = Z.levelTitleAsBack && a || Z.labelBack || "",
                                            l = R.createElement("a", {
                                                href: "#",
                                                class: "nav-back-button",
                                                role: "menuitem",
                                                tabindex: 0
                                            }, [o, R.createElement("span")]),
                                            c = R.createElement("li", {
                                                class: "nav-item nav-back"
                                            }, l),
                                            v = function() {
                                                return J(m, n)
                                            };
                                        R.wrap(l, R.createElement("div", {
                                            class: "nav-item-wrapper"
                                        })), l.addEventListener("click", R.preventClick(v)), l.addEventListener("keydown", function(e) {
                                            "Enter" !== e.key && 13 !== e.keyCode || (C = !0)
                                        }), R.insertAt(c, !0 === Z.insertBack ? 0 : Z.insertBack, s)
                                    }
                                    if (0 === m && !1 !== Z.insertClose) {
                                        var d = R.createElement("a", {
                                            href: "#",
                                            class: "nav-close-button" + (Z.labelClose ? " has-label" : ""),
                                            role: "menuitem",
                                            tabindex: 0,
                                            "aria-label": Z.labelClose ? "" : (Z.ariaLabels || {}).close
                                        }, [Z.labelClose || "", R.createElement("span")]);
                                        if (d.addEventListener("click", R.preventClick(G)), d.addEventListener("keydown", function(e) {
                                                "Enter" !== e.key && 13 !== e.keyCode || S()
                                            }), b && !0 === Z.insertClose) r.insertBefore(R.createElement("div", {
                                            class: "nav-close"
                                        }, d), r.children[1]);
                                        else if (!0 === Z.insertClose) r.insertBefore(R.createElement("div", {
                                            class: "nav-close"
                                        }, d), r.firstChild);
                                        else {
                                            var u = R.children(r, "ul"),
                                                p = R.createElement("li", {
                                                    class: "nav-item nav-close"
                                                }, d);
                                            R.wrap(d, R.createElement("div", {
                                                class: "nav-item-wrapper"
                                            })), R.insertAt(p, Z.insertClose, u)
                                        }
                                    }
                                }(t, v, 0, Z.navTitle)
                            },
                            j = function(t) {
                                return function(e) {
                                    "left" !== Z.position && "right" !== Z.position || (o = e.touches[0].clientX, N = e.touches[0].clientY, "doc" === t ? T || (ae.addEventListener("touchmove", q, R.supportsPassive), ae.addEventListener("touchend", D, R.supportsPassive)) : (T = !0, v.addEventListener("touchmove", H, R.supportsPassive), v.addEventListener("touchend", z, R.supportsPassive)))
                                }
                            },
                            _ = function(e, t) {
                                ne.addEventListener("touchmove", R.preventDefault, R.supportsPassive), c.style.visibility = "visible", v.style[R.browserPrefix("transition")] = "none", R.setTransform(v, e, Z.position), p && (p.style[R.browserPrefix("transition")] = "none", R.setTransform(p, t, Z.position))
                            },
                            B = function(e, t, n, a) {
                                void 0 === t && (t = !0), void 0 === n && (n = !1), void 0 === a && (a = !1), ne.removeEventListener("touchmove", R.preventDefault, R.supportsPassive), v.style[R.browserPrefix("transition")] = "", R.setTransform(v, n, Z.position), p && (p.style[R.browserPrefix("transition")] = "", R.setTransform(p, a, Z.position)), "open" === e ? Y() : (G(), t ? setTimeout(function() {
                                    c.style.visibility = ""
                                }, d) : c.style.visibility = "")
                            },
                            q = function(e) {
                                var t = 0 - (o - e.touches[0].clientX),
                                    n = "overlap" === Z.levelOpen ? W() * Z.levelSpacing : 0,
                                    a = y + n;
                                t = "left" === Z.position ? Math.min(Math.max(t, 0), a) : Math.abs(Math.min(Math.max(t, -a), 0)), ("left" === Z.position && o < 50 || "right" === Z.position && o > ae.clientWidth - 50) && (k = !0, _(0 - (y - t), Math.abs(t)))
                            },
                            D = function e(t) {
                                if (ae.removeEventListener("touchmove", q), ae.removeEventListener("touchend", e), k) {
                                    var n = t.changedTouches[t.changedTouches.length - 1],
                                        a = 0 - (o - n.clientX),
                                        r = "overlap" === Z.levelOpen ? W() * Z.levelSpacing : 0,
                                        i = y + r;
                                    (a = "left" === Z.position ? Math.min(Math.max(a, 0), i) : Math.abs(Math.min(Math.max(a, -i), 0))) ? B(70 < a ? "open" : "close"): B("close", !1), N = o = null, k = !1
                                }
                            },
                            H = function(e) {
                                var t = 0 - (o - e.touches[0].clientX),
                                    n = 0 - (N - e.touches[0].clientY);
                                if (!(Math.abs(t) < Math.abs(n))) {
                                    var a = "overlap" === Z.levelOpen ? W() * Z.levelSpacing : 0,
                                        r = y + a;
                                    t = "left" === Z.position ? Math.min(Math.max(t, -r), 0) : Math.min(Math.max(t, 0), r), ("left" === Z.position && t < 0 || "right" === Z.position && 0 < t) && (k = !0, _(-Math.abs(t) + a, r - Math.abs(t)))
                                }
                            },
                            z = function e(t) {
                                if (v.removeEventListener("touchmove", H), v.removeEventListener("touchend", e), T = !1, k) {
                                    var n = t.changedTouches[t.changedTouches.length - 1],
                                        a = 0 - (o - n.clientX),
                                        r = "overlap" === Z.levelOpen ? W() * Z.levelSpacing : 0,
                                        i = y + r;
                                    (a = "left" === Z.position ? Math.abs(Math.min(Math.max(a, -i), 0)) : Math.abs(Math.min(Math.max(a, 0), i))) === i ? B("close", !1) : 50 < a ? B("close") : B("open", !0, r, i), N = o = null, k = !1
                                }
                            };
                        r(), i(), P(), !0 === Z.removeOriginalNav ? e.parentNode.removeChild(e) : e.classList.add("hc-nav-original", g), "prepend" === Z.bodyInsert ? ae.body.insertBefore(c, ae.body.firstChild) : "append" === Z.bodyInsert && ae.body.appendChild(c), !0 === Z.expanded && (h = !0, Y()), Z.swipeGestures && (v.addEventListener("touchstart", j("nav"), R.supportsPassive), ae.addEventListener("touchstart", j("doc"), R.supportsPassive)), ae.addEventListener("keydown", function(e) {
                            if (V() && ("Escape" === e.key || 27 === e.keyCode)) {
                                var t = W();
                                0 === t ? (G(), S()) : (J(t, F()), w(null, t - 1))
                            }
                        });
                        var I = R.debounce(M, 500);
                        ne.addEventListener("resize", I, R.supportsPassive);
                        var U = function(e, t, n) {
                            var a = ae.querySelector("#" + g + "-" + e + "-" + t);
                            if (a) {
                                var r = a.value,
                                    i = a.parentNode,
                                    s = i.closest(".nav-wrapper");
                                if (a.setAttribute("checked", !1), s.classList.remove("sub-level-open"), i.classList.remove("level-open"), i.querySelectorAll("[aria-controls]")[0].setAttribute("aria-expanded", !1), -1 !== x.indexOf(r) && x.splice(x.indexOf(r), 1), n && "overlap" === Z.levelOpen && (s.removeEventListener("click"), s.addEventListener("click", R.stopPropagation), R.setTransform(v, (e - 1) * Z.levelSpacing, Z.position), p)) {
                                    var o = "x" === R.getAxis(Z.position) ? y : E;
                                    R.setTransform(p, o + (e - 1) * Z.levelSpacing, Z.position)
                                }
                            }
                        };
                        return c.on = function(e, t) {
                            c.addEventListener(e, t)
                        }, c.off = function(e, t) {
                            c.removeEventListener(e, t)
                        }, c.getSettings = function() {
                            return Object.assign({}, Z)
                        }, c.isOpen = V, c.open = Y, c.close = G, c.update = function(e, t) {
                            if (ee = [], "object" == typeof e) {
                                for (var n in e) Z[n] !== e[n] && ee.push(n);
                                Z = Object.assign({}, Z, e)
                            }
                            if (!0 === e || !0 === t) {
                                if (Z.removeOriginalNav) return void console.warn("%c! HC Offcanvas Nav:%c Can't update because original navigation has been removed. Disable `removeOriginalNav` option.", "color: #fa253b", "color: default");
                                r(!0), i(), P(!0)
                            } else r(!0), P(!0)
                        }, c
                    }

                    function X() {
                        var e = Number(this.dataset.level),
                            t = Number(this.dataset.index);
                        "true" === this.getAttribute("checked") ? $(e, t) : J(e, t)
                    }

                    function Q() {
                        return !1 !== Z.levelOpen && "none" !== Z.levelOpen
                    }

                    function V() {
                        return f
                    }

                    function W() {
                        return x.length ? Number(Array.prototype.filter.call(v.querySelectorAll(".hc-chk"), function(e) {
                            return e.value == x[x.length - 1]
                        })[0].dataset.level) : 0
                    }

                    function F() {
                        return x.length ? Number(Array.prototype.filter.call(v.querySelectorAll(".hc-chk"), function(e) {
                            return e.value == x[x.length - 1]
                        })[0].dataset.index) : 0
                    }

                    function Y(e, t) {
                        if ((!V() || void 0 !== t) && (function() {
                                if (V()) return;
                                f = !0, c.style.visibility = "visible", c.setAttribute("aria-hidden", !1), c.classList.add(se), u.classList.add("toggle-open"), "expand" === Z.levelOpen && L && clearTimeout(L);
                                Z.disableBody && (b = ne.pageYOffset || re.scrollTop || ae.documentElement.scrollTop || ae.body.scrollTop, ae.documentElement.scrollHeight > ae.documentElement.clientHeight && re.classList.add("hc-nav-yscroll"), ae.body.classList.add("hc-nav-open"), b && (ae.body.style.top = -b + "px"));
                                if (p) {
                                    var e = "x" === R.getAxis(Z.position) ? y : E;
                                    R.setTransform(p, e, Z.position)
                                }
                                if (h) return h = !1;
                                c._eventListeners.toggle && c._eventListeners.toggle.forEach(function(e) {
                                    e.fn(R.customEventObject("toggle", c, c, {
                                        action: "open"
                                    }), Object.assign({}, Z))
                                });
                                setTimeout(function() {
                                    c._eventListeners.open && c._eventListeners.open.forEach(function(e) {
                                        e.fn(R.customEventObject("open", c, c), Object.assign({}, Z))
                                    })
                                }, d)
                            }(), Q())) {
                            var n;
                            if ("number" != typeof e && !R.isNumeric(e) || "number" != typeof t && !R.isNumeric(t)) m ? (n = Array.prototype.filter.call(v.querySelectorAll(".hc-chk"), function(e) {
                                return e.value == m
                            })[0], !Z.closeActiveLevel && Z.closeOpenLevels || (m = null)) : !1 === Z.closeOpenLevels && (n = (n = Array.prototype.filter.call(v.querySelectorAll(".hc-chk"), function(e) {
                                return "true" === e.getAttribute("checked")
                            }))[n.length - 1]);
                            else if (!(n = ae.querySelector("#" + g + "-" + e + "-" + t))) return void console.warn("HC Offcanvas Nav: level " + e + " doesn't have index " + t);
                            if (n) {
                                var a = [];
                                if (e = Number(n.dataset.level), t = Number(n.dataset.index), 1 < e) {
                                    for (var r = []; n && n !== ae; n = n.parentNode) n.matches(".nav-wrapper") && r.push(n);
                                    for (var i = 0; i < r.length; i++) {
                                        var s = r[i],
                                            o = Number(s.dataset.level);
                                        0 < o && a.push({
                                            level: o,
                                            index: Number(s.dataset.index)
                                        })
                                    }
                                    a = a.reverse()
                                }
                                a.push({
                                    level: e,
                                    index: t
                                });
                                for (var l = 0; l < a.length; l++) $(a[l].level, a[l].index, !1)
                            }
                        }
                    }

                    function G() {
                        if (V()) {
                            if (f = !1, p && R.setTransform(p, !1), c.classList.remove(se), c.classList.remove("user-is-tabbing"), c.setAttribute("aria-hidden", !0), v.removeAttribute("style"), u.classList.remove("toggle-open"), "expand" === Z.levelOpen && -1 !== ["top", "bottom"].indexOf(Z.position) ? J(0) : Q() && (L = setTimeout(function() {
                                    J(0)
                                }, "expand" === Z.levelOpen ? d : 0)), Z.disableBody && (ae.body.classList.remove("hc-nav-open"), re.classList.remove("hc-nav-yscroll"), b)) {
                                if (ae.body.style.top = "", ae.body.scrollTop = b, re.scrollTop = b, "bottom" === Z.position) {
                                    var e = b;
                                    setTimeout(function() {
                                        ae.body.scrollTop = e, re.scrollTop = e
                                    }, 0)
                                }
                                b = 0
                            }
                            c._eventListeners.toggle && c._eventListeners.toggle.forEach(function(e) {
                                e.fn(R.customEventObject("toggle", c, c, {
                                    action: "close"
                                }), Object.assign({}, Z))
                            }), setTimeout(function() {
                                c.style.visibility = "", c._eventListeners.close && c._eventListeners.close.forEach(function(e) {
                                    e.fn(R.customEventObject("close", c, c), Object.assign({}, Z))
                                }), c._eventListeners["close.once"] && c._eventListeners["close.once"].forEach(function(e) {
                                    e.fn(R.customEventObject("close.once", c, c), Object.assign({}, Z))
                                }), c.removeEventListener("close.once")
                            }, d)
                        }
                    }

                    function K(e) {
                        e.preventDefault(), e.stopPropagation(), f ? G() : Y()
                    }

                    function $(t, n, e) {
                        void 0 === e && (e = !0);
                        var a = ae.querySelector("#" + g + "-" + t + "-" + n),
                            r = a.value,
                            i = a.parentNode,
                            s = i.closest(".nav-wrapper"),
                            o = R.children(i, ".nav-wrapper")[0];
                        if (!1 === e && (o.style.transition = "none"), a.setAttribute("checked", !0), s.classList.add("sub-level-open"), i.classList.add("level-open"), i.querySelectorAll("[aria-controls]")[0].setAttribute("aria-expanded", !0), !1 === e && setTimeout(function() {
                                o.style.transition = ""
                            }, d), -1 === x.indexOf(r) && x.push(r), "overlap" === Z.levelOpen && (s.addEventListener("click", function() {
                                return J(t, n)
                            }), R.setTransform(v, t * Z.levelSpacing, Z.position), p)) {
                            var l = "x" === R.getAxis(Z.position) ? y : E;
                            R.setTransform(p, l + t * Z.levelSpacing, Z.position)
                        }
                        c._eventListeners["open.level"] && c._eventListeners["open.level"].forEach(function(e) {
                            e.fn(R.customEventObject("open.level", c, o, {
                                currentLevel: t,
                                currentIndex: n
                            }), Object.assign({}, Z))
                        }), C && (w(0, t, n), C = !1)
                    }

                    function J(t, e) {
                        for (var n = t; n <= Object.keys(A).length; n++)
                            if (n === t && void 0 !== e) U(t, e, !0);
                            else if (0 !== t || Z.closeOpenLevels)
                            for (var a = 0; a < A[n]; a++) U(n, a, n === t);
                        else;
                        if (0 < t && c._eventListeners["close.level"]) {
                            var r = ae.querySelector("#" + g + "-" + t + "-" + e).closest(".nav-wrapper");
                            c._eventListeners["close.level"].forEach(function(e) {
                                e.fn(R.customEventObject("close.level", c, r, {
                                    currentLevel: t - 1,
                                    currentIndex: F()
                                }), Object.assign({}, Z))
                            })
                        }
                        C && (w(null, t - 1), C = !1)
                    }
                    console.error("%c! HC Offcanvas Nav:%c Navigation must contain <ul> element.", "color: #fa253b", "color: default")
                };
            if (Array.isArray(e) || e instanceof NodeList) {
                for (var a = [], r = 0; r < e.length; r++) a.push(n(e[r]));
                return 1 < a.length ? a : a[0]
            }
            return n(e)
        };
    if (void 0 !== ne.jQuery) {
        var n = ne.jQuery,
            a = "hcOffcanvasNav";
        n.fn.extend({
            hcOffcanvasNav: function(t) {
                return this.length ? this.each(function() {
                    var e = n.data(this, a);
                    e ? e.update(t) : (e = new i(this, t), n.data(this, a, e))
                }) : this
            }
        })
    }
    return ne.hcOffcanvasNav = ne.hcOffcanvasNav || i, i
}),
function(n) {
    var e = n.hcOffcanvasNav,
        o = n.document;
    "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(e, t) {
            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(e), a = 1; a < arguments.length; a++) {
                var r = arguments[a];
                if (null != r)
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i])
            }
            return n
        },
        writable: !0,
        configurable: !0
    }), Element.prototype.closest || (Element.prototype.closest = function(e) {
        var t = this;
        do {
            if (Element.prototype.matches.call(t, e)) return t;
            t = t.parentElement || t.parentNode
        } while (null !== t && 1 === t.nodeType);
        return null
    }), Array.prototype.flat || Object.defineProperty(Array.prototype, "flat", {
        configurable: !0,
        value: function n() {
            var a = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
            return a ? Array.prototype.reduce.call(this, function(e, t) {
                return Array.isArray(t) ? e.push.apply(e, n.call(t, a - 1)) : e.push(t), e
            }, []) : Array.prototype.slice.call(this)
        },
        writable: !0
    }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector);
    var t = !1;
    try {
        var a = Object.defineProperty({}, "passive", {
            get: function() {
                t = {
                    passive: !1
                }
            }
        });
        n.addEventListener("testPassive", null, a), n.removeEventListener("testPassive", null, a)
    } catch (e) {}
    var r = (/iPad|iPhone|iPod/.test(navigator.userAgent) || !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) && !n.MSStream,
        i = "ontouchstart" in n || navigator.maxTouchPoints || n.DocumentTouch && o instanceof DocumentTouch,
        s = function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        l = function(e) {
            return "auto" === e ? "100%" : s(e) && 0 !== e ? e + "px" : e
        },
        c = function(e) {
            var t = ["Webkit", "Moz", "Ms", "O"],
                n = (o.body || o.documentElement).style,
                a = e.charAt(0).toUpperCase() + e.slice(1);
            if (void 0 !== n[e]) return e;
            for (var r = 0; r < t.length; r++)
                if (void 0 !== n[t[r] + a]) return t[r] + a;
            return !1
        },
        v = function(e, t) {
            if (e instanceof Element) return t ? Array.prototype.filter.call(e.children, function(e) {
                return e.matches(t)
            }) : e.children;
            var n = [];
            return Array.prototype.forEach.call(e, function(e) {
                n = t ? n.concat(Array.prototype.filter.call(e.children, function(e) {
                    return e.matches(t)
                })) : n.concat(Array.prototype.slice.call(e.children))
            }), n
        },
        d = function(o) {
            var l = Node.prototype[o + "EventListener"];
            return function(e, t, n) {
                if (this) {
                    var a = e.split(".")[0];
                    if (this._eventListeners = this._eventListeners || {}, "add" === o) {
                        this._eventListeners[e] = this._eventListeners[e] || [];
                        var r = {
                            fn: t
                        };
                        n && (r.options = n), this._eventListeners[e].push(r), l.call(this, a, t, n)
                    } else if ("function" == typeof t)
                        for (var i in l.call(this, a, t, n), this._eventListeners) this._eventListeners[i] = this._eventListeners[i].filter(function(e) {
                            return e.fn !== t
                        }), this._eventListeners[i].length || delete this._eventListeners[i];
                    else if (this._eventListeners[e]) {
                        for (var s = this._eventListeners[e].length; s--;) l.call(this, a, this._eventListeners[e][s].fn, this._eventListeners[e][s].options), this._eventListeners[e].splice(s, 1);
                        this._eventListeners[e].length || delete this._eventListeners[e]
                    }
                }
            }
        };
    Node.prototype.addEventListener = d("add"), Node.prototype.removeEventListener = d("remove");
    var u = function(e, t, n) {
            void 0 === t && (t = {});
            var a = o.createElement(e);
            for (var r in t) "class" !== r ? (t[r] || 0 === t[r]) && a.setAttribute(r, t[r]) : a.className = t[r];
            if (n) {
                Array.isArray(n) || (n = [n]);
                for (var i = 0; i < n.length; i++)
                    if ("object" == typeof n[i] && n[i].length && !n[i].nodeType)
                        for (var s = 0; s < n[i].length; s++) a.appendChild(n[i][s]);
                    else a.appendChild("string" == typeof n[i] ? o.createTextNode(n[i]) : n[i])
            }
            return a
        },
        p = function(e) {
            return -1 !== ["left", "right"].indexOf(e) ? "x" : "y"
        },
        f = function() {
            c("transform");
            return function(e, t, n) {
                if (!1 === t || "" === t) e.style.transform = "";
                else if ("x" === p(n)) {
                    var a = "left" === n ? t : "-" + t;
                    e.style.transform = "translate3d(" + l(a) + ",0,0)"
                } else {
                    var r = "top" === n ? t : "-" + t;
                    e.style.transform = "translate3d(0," + l(r) + ",0)"
                }
            }
        }(),
        h = function(e, t, n) {
            console.warn("%cHC Off-canvas Nav:%c " + n + "%c '" + e + "'%c is now deprecated and will be removed in the future. Use%c '" + t + "'%c option instead. See details about plugin usage at https://github.com/somewebmedia/hc-offcanvas-nav.", "color: #fa253b", "color: default", "color: #5595c6", "color: default", "color: #5595c6", "color: default")
        };
    e.Helpers = {
        supportsPassive: t,
        isIos: r,
        isTouchDevice: i,
        isNumeric: s,
        formatSizeVal: l,
        toMs: function(e) {
            return parseFloat(e) * (/\ds$/.test(e) ? 1e3 : 1)
        },
        stopPropagation: function(e) {
            return e.stopPropagation()
        },
        preventDefault: function(e) {
            return e.preventDefault()
        },
        preventClick: function(t) {
            return function(e) {
                e.preventDefault(), e.stopPropagation(), "function" == typeof t && t()
            }
        },
        browserPrefix: c,
        children: v,
        wrap: function(e, t) {
            e.parentNode.insertBefore(t, e), t.appendChild(e)
        },
        data: function(e, t, n) {
            if (e.hcOffcanvasNav = e.hcOffcanvasNav || {}, void 0 === n) return e.hcOffcanvasNav[t];
            e.hcOffcanvasNav[t] = n
        },
        clone: function(e, t, n) {
            var a = e.cloneNode(n || !1),
                r = e instanceof Element ? [e].concat(Array.prototype.slice.call(e.getElementsByTagName("*"))) : [],
                i = a instanceof Element ? [a].concat(Array.prototype.slice.call(a.getElementsByTagName("*"))) : [];
            return t || (r.shift(), i.shift()), n && function(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (e[n]._eventListeners)
                        for (var a in e[n]._eventListeners)
                            for (var r = 0; r < e[n]._eventListeners[a].length; r++) t[r].addEventListener(a, e[n]._eventListeners[a][r].fn, e[n]._eventListeners[a][r].options)
            }(r, i), a
        },
        customEventObject: function(e, n, a, r) {
            return new function(e) {
                for (var t in this.bubbles = !1, this.cancelable = !1, this.composed = !1, this.currentTarget = a, this.data = r ? {} : null, this.defaultPrevented = !1, this.eventPhase = 0, this.isTrusted = !1, this.target = n, this.timeStamp = Date.now(), this.type = e, r) this.data[t] = r[t]
            }(e)
        },
        hasListener: function(e, t) {
            return (t ? (e._eventListeners || {})[t] : e._eventListeners) || !1
        },
        debounce: function(a, r, i) {
            var s;
            return function() {
                var e = this,
                    t = arguments,
                    n = i && !s;
                clearTimeout(s), s = setTimeout(function() {
                    s = null, i || a.apply(e, t)
                }, r), n && a.apply(e, t)
            }
        },
        createElement: u,
        getElement: function(e) {
            var t = null;
            return "string" == typeof e ? t = o.querySelector(e) : n.jQuery && e instanceof n.jQuery && e.length ? t = e[0] : e instanceof Element && (t = e), t
        },
        getElementCssTag: function e(t) {
            return "string" == typeof t ? t : t.getAttribute("id") ? "#" + t.getAttribute("id") : t.getAttribute("class") ? t.tagName.toLowerCase() + "." + t.getAttribute("class").replace(/\s+/g, ".") : e(t.parentNode) + " > " + t.tagName.toLowerCase()
        },
        printStyle: function(e) {
            var r = u("style", {
                    id: e
                }),
                i = {},
                s = {};
            o.head.appendChild(r);
            var a = function(e) {
                return ";" !== e.substr(-1) && (e += ";" !== e.substr(-1) ? ";" : ""), e
            };
            return {
                reset: function() {
                    i = {}, s = {}
                },
                add: function(e, t, n) {
                    e = e.trim(), t = t.trim(), n ? (n = n.trim(), s[n] = s[n] || {}, s[n][e] = a(t)) : i[e] = a(t)
                },
                remove: function(e, t) {
                    e = e.trim(), t ? (t = t.trim(), void 0 !== s[t][e] && delete s[t][e]) : void 0 !== i[e] && delete i[e]
                },
                insert: function() {
                    var e = "";
                    for (var t in s) {
                        for (var n in e += "@media screen and (" + t + ") {\n", s[t]) e += "  " + n + " { " + s[t][n] + " }\n";
                        e += "}\n"
                    }
                    for (var a in i) e += a + " { " + i[a] + " }\n";
                    r.innerHTML = e
                }
            }
        },
        insertAt: function(e, t, n) {
            var a = v(n),
                r = a.length,
                i = -1 < (t = "last" === (t = "first" === t ? 0 : t) ? r : t) ? Math.max(0, Math.min(t, r)) : Math.max(0, Math.min(r + t, r));
            0 === i ? n[0].insertBefore(e, n[0].firstChild) : a[i - 1].insertAdjacentElement("afterend", e)
        },
        getAxis: p,
        setTransform: f,
        deprecated: h
    }
}(window);