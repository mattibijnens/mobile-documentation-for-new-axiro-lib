(self.webpackChunklite = self.webpackChunklite || []).push([[1743], {
    91743: (e,t,n)=>{
        "use strict";
        n.d(t, {
            t: ()=>z
        });
        var o = n(67294)
          , i = n(41802)
          , r = n(6443)
          , l = n(39727)
          , s = n(66227)
          , c = n(75221)
          , a = n(67154)
          , u = n.n(a)
          , d = n(59713)
          , p = n.n(d)
          , v = n(63038)
          , m = n.n(v)
          , f = n(65331)
          , h = n(17778)
          , g = n(78038)
          , E = n(38352)
          , w = n(51066)
          , I = n(77355)
          , P = n(93310)
          , b = n(73917)
          , S = n(66411)
          , k = n(77280)
          , O = n(43487);
        function y() {
            return (y = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var A = o.createElement("path", {
            d: "M6.2 16.8A7.5 7.5 0 1 0 16.8 6.2 7.5 7.5 0 0 0 6.2 16.8z",
            stroke: "#000",
            strokeWidth: 2,
            strokeLinecap: "round"
        })
          , x = o.createElement("path", {
            d: "M6 6l11 11",
            stroke: "#000",
            strokeWidth: 2
        });
        const C = function(e) {
            return o.createElement("svg", y({
                width: 19,
                height: 19,
                viewBox: "0 0 23 23",
                fill: "none"
            }, e), A, x)
        };
        var M = n(68894)
          , j = n(319)
          , L = n.n(j)
          , D = n(5977)
          , F = n(59250)
          , R = n(61095)
          , T = n(18627)
          , U = function(e) {
            var t = e.creatorId
              , n = e.muteAuthor
              , i = e.hidePopover
              , r = e.eventData
              , l = e.isActiveExpandedPost
              , s = e.unfollowUser
              , c = (0,
            S.pK)()
              , a = (0,
            T.A)()
              , u = {
                id: t || ""
            }
              , d = (0,
            R.Pd)(u).viewerEdge
              , p = !(null == d || !d.isFollowing)
              , v = !(null == d || !d.isMuting)
              , m = (0,
            D.k6)()
              , f = (0,
            F.jM)()
              , h = f.mutedAuthorIds
              , g = f.setMutedAuthorIds
              , w = f.isMutingFromHomeFeed
              , I = o.useCallback((function(e) {
                g([].concat(L()(h), [e]))
            }
            ), [h]);
            return t ? p ? o.createElement(E.Sl, null, o.createElement(P.r, {
                onClick: function() {
                    a.event("user.unfollowed", {
                        targetUserId: t,
                        source: c
                    }),
                    s(),
                    i()
                }
            }, "Unfollow this author")) : v ? null : o.createElement(E.Sl, null, o.createElement(P.r, {
                onClick: function() {
                    a.event("user.muted", r),
                    n(),
                    w && (I(t),
                    l && m.goBack()),
                    i()
                }
            }, "Mute this author")) : null
        }
          , B = n(24415)
          , H = n(75150)
          , _ = function(e) {
            var t = e.collectionId
              , n = e.hidePopover
              , i = e.mutePub
              , r = e.eventData
              , s = e.isActiveExpandedPost
              , c = e.unfollowCollection
              , a = (0,
            T.A)()
              , u = (0,
            S.pK)()
              , d = {
                id: t || ""
            }
              , p = (0,
            l.g)(d).viewerEdge
              , v = !(null == p || !p.isFollowing)
              , m = !(null == p || !p.isMuting)
              , f = (0,
            F.jM)()
              , h = f.mutedPubIds
              , g = f.setMutedPubIds
              , w = f.isMutingFromHomeFeed
              , I = (0,
            D.k6)()
              , b = o.useCallback((function(e) {
                g([].concat(L()(h), [e]))
            }
            ), [h]);
            return t ? v ? o.createElement(E.Sl, null, o.createElement(P.r, {
                onClick: function() {
                    a.event("collection.unfollowed", {
                        collectionId: t,
                        followSource: u
                    }),
                    c(),
                    n()
                }
            }, "Unfollow this publication")) : m ? null : o.createElement(E.Sl, null, o.createElement(P.r, {
                onClick: function() {
                    a.event("collection.muted", r),
                    i(),
                    w && (b(t),
                    s && I.goBack()),
                    n()
                }
            }, "Mute this publication")) : null
        }
          , N = n(42732);
        function K(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function G(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? K(Object(n), !0).forEach((function(t) {
                    p()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var W = function(e) {
            var t = e.post
              , n = e.creatorId
              , i = e.collectionId
              , r = e.isActiveExpandedPost
              , l = e.setDismissedPostId
              , s = e.isResponsive
              , a = e.hideNegativeSignalItem
              , d = e.popoverPositioningStrategy
              , p = e.hideAddToList
              , v = void 0 === p || p
              , y = e.viewer
              , A = e.hideOnScroll
              , x = e.testId
              , j = t.id
              , L = (0,
            M.O)(!1)
              , D = m()(L, 4)
              , F = D[0]
              , R = D[2]
              , T = D[3]
              , K = null == y ? void 0 : y.id
              , W = (0,
            g.l)(n, i)
              , z = W.muteAuthor
              , Q = W.mutePub
              , V = (0,
            h.l)(n, i)
              , J = V.unfollowUser
              , X = V.unfollowCollection
              , Y = (0,
            S.pK)()
              , Z = (0,
            k.PM)()
              , q = (0,
            O.v9)((function(e) {
                return e.navigation.referrer
            }
            ))
              , $ = (0,
            O.v9)((function(e) {
                return e.navigation.currentLocation
            }
            ))
              , ee = {
                postId: j,
                location: $,
                referrer: q,
                source: Y,
                referrerSource: Z
            }
              , te = (0,
            N.c)({
                post: t,
                onShowLess: R,
                isActiveExpandedPost: r,
                collectionId: i,
                setDismissedPostId: l
            }).handleShowLess
              , ne = {
                kind: c.ej.POST,
                target: t
            }
              , oe = (0,
            o.useCallback)((function(e) {
                return o.createElement(E.mX, null, !a && o.createElement(I.x, {
                    borderBottom: "BASE_LIGHTER",
                    paddingBottom: "4px",
                    marginBottom: "4px"
                }, o.createElement(E.Sl, null, o.createElement(P.r, {
                    onClick: te,
                    "aria-label": "Show less like this"
                }, o.createElement(I.x, {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderBottom: void 0,
                    ariaHidden: "true"
                }, o.createElement(I.x, {
                    marginRight: "4px"
                }, o.createElement(C, null)), o.createElement(I.x, null, "Show less like this"))))), !v && o.createElement(E.Sl, null, o.createElement(P.r, {
                    "aria-controls": "aria-id",
                    "aria-expanded": "false",
                    onClick: function() {
                        R(),
                        e()
                    }
                }, "Add to list")), o.createElement(H.T, {
                    post: t,
                    hidePopover: R
                }), o.createElement(U, {
                    creatorId: n,
                    muteAuthor: z,
                    isActiveExpandedPost: r,
                    hidePopover: R,
                    eventData: G({
                        targetUserId: n
                    }, ee),
                    unfollowUser: J
                }), i && o.createElement(_, {
                    collectionId: i,
                    mutePub: Q,
                    isActiveExpandedPost: r,
                    hidePopover: R,
                    eventData: G({
                        collection: i
                    }, ee),
                    unfollowCollection: X
                }), o.createElement(w.z, {
                    postId: j,
                    viewerId: K,
                    targetUserId: n || "",
                    shouldShowShortenedCopy: !0,
                    hidePopover: R
                }))
            }
            ), []);
            return n ? o.createElement(f.a, u()({}, ne, {
                viewer: y
            }), (function(e) {
                var t = e.onClick;
                return o.createElement(b.J, {
                    isVisible: F,
                    positioningStrategy: d,
                    targetDistance: 10,
                    hide: R,
                    popoverRenderFn: function() {
                        return oe(t)
                    },
                    hideOnScroll: A
                }, o.createElement(B.c, {
                    onClick: T,
                    ariaLabel: "More options",
                    isResponsive: s,
                    tooltipText: "More",
                    testId: x
                }))
            }
            )) : null
        }
          , z = function(e) {
            var t = e.post
              , n = e.isActiveExpandedPost
              , a = e.setDismissedPostId
              , u = e.isResponsive
              , d = e.hideNegativeSignalItem
              , p = e.popoverPositioningStrategy
              , v = e.hideAddToList
              , m = void 0 === v || v
              , f = e.hideOnScroll
              , h = e.testId
              , g = t.creator
              , E = t.collection
              , w = t.visibility
              , I = (0,
            r.H)()
              , P = I.loading
              , b = I.value
              , S = (0,
            l.g)(E).viewerEdge
              , k = !P && !!b
              , O = !(null == S || !S.isEditor)
              , y = (null == b ? void 0 : b.id) === (null == g ? void 0 : g.id)
              , A = m || w === c.Wn.UNLISTED;
            return g && k ? O || y ? o.createElement(s.B, null, (function(e) {
                var n = e.show;
                return o.createElement(i.Z, {
                    post: t,
                    showLoadingIndicator: n,
                    isResponsive: u,
                    popoverPositioningStrategy: p,
                    hideAddToList: A,
                    hideOnScroll: f,
                    testId: h
                })
            }
            )) : o.createElement(W, {
                post: t,
                creatorId: g.id,
                collectionId: null == E ? void 0 : E.id,
                isActiveExpandedPost: n,
                setDismissedPostId: a,
                isResponsive: u,
                hideNegativeSignalItem: d,
                popoverPositioningStrategy: p,
                hideAddToList: A,
                viewer: b,
                hideOnScroll: f,
                testId: h
            }) : null
        }
    }
    ,
    42732: (e,t,n)=>{
        "use strict";
        n.d(t, {
            c: ()=>E
        });
        var o = n(319)
          , i = n.n(o)
          , r = n(82492)
          , l = n.n(r)
          , s = n(26075)
          , c = n(90386)
          , a = n(67294)
          , u = n(5977)
          , d = n(59250)
          , p = n(25550)
          , v = n(18627)
          , m = n(66411)
          , f = n(78285)
          , h = n(77280)
          , g = n(43487)
          , E = function(e) {
            var t = e.post
              , n = e.onShowLess
              , o = e.isActiveExpandedPost
              , r = e.collectionId
              , E = e.setDismissedPostId
              , w = t.id
              , I = (0,
            p.r)().viewerId
              , P = (0,
            u.k6)()
              , b = (0,
            d.jM)()
              , S = b.setSeeLessPostIds
              , k = b.isMutingFromHomeFeed
              , O = (0,
            f.w)()
              , y = (0,
            s.x)().cache
              , A = (0,
            v.A)()
              , x = (0,
            m.pK)()
              , C = (0,
            h.PM)()
              , M = (0,
            g.v9)((function(e) {
                return e.navigation.referrer
            }
            ))
              , j = (0,
            g.v9)((function(e) {
                return e.navigation.currentLocation
            }
            ))
              , L = (0,
            a.useRef)(null)
              , D = (0,
            a.useCallback)((function() {
                L.current = window.setTimeout((function() {
                    A.event("post.see_less", {
                        userId: I,
                        collection: r,
                        postId: w,
                        location: j,
                        referrer: M,
                        source: x,
                        referrerSource: C
                    })
                }
                ), 3e3)
            }
            ), [])
              , F = (0,
            a.useCallback)((function() {
                null !== L.current && window.clearTimeout(L.current)
            }
            ), [])
              , R = (0,
            a.useCallback)((function() {
                y.modify({
                    id: y.identify((0,
                    c.kQ)("ROOT_QUERY")),
                    fields: {
                        webRecommendedFeed: function(e, t) {
                            var n = t.readField;
                            return l()({}, e, {
                                items: e.items.filter((function(e) {
                                    return (null == e ? void 0 : e.post) && n("id", e.post) !== w
                                }
                                ))
                            })
                        },
                        intentionalFeed: function(e, t) {
                            var n = t.readField;
                            return l()({}, e, {
                                items: e.items.filter((function(e) {
                                    return !("HomeFeedItem" === (null == e ? void 0 : e.__typename) && null != e && e.post && n("id", e.post) === w)
                                }
                                ))
                            })
                        }
                    }
                })
            }
            ), [w]);
            return {
                handleShowLess: (0,
                a.useCallback)((function() {
                    D(),
                    R(),
                    k && (S((function(e) {
                        return [].concat(i()(e), [w])
                    }
                    )),
                    o && P.goBack(),
                    null == E || E(w)),
                    O({
                        toastStyle: "USER_NEGATIVE_SIGNAL",
                        extraParams: {
                            onClickUndo: F
                        }
                    }),
                    null == n || n()
                }
                ), [])
            }
        }
    }
}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/1743.4ea74641.chunk.js.map
