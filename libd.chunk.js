(self.webpackChunklite = self.webpackChunklite || []).push([[1006], {
    75412: (e,n,t)=>{
        "use strict";
        t.d(n, {
            A: ()=>r
        });
        var i = t(23564)
          , a = t(45697)
          , o = t(64718);
        function r(e) {
            var n = e.children
              , t = e.query
              , a = (0,
            i._T)(e, ["children", "query"])
              , r = (0,
            o.a)(t, a);
            return r ? n(r) : null
        }
        r.propTypes = {
            client: a.object,
            children: a.func.isRequired,
            fetchPolicy: a.string,
            notifyOnNetworkStatusChange: a.bool,
            onCompleted: a.func,
            onError: a.func,
            pollInterval: a.number,
            query: a.object.isRequired,
            variables: a.object,
            ssr: a.bool,
            partialRefetch: a.bool,
            returnPartialData: a.bool
        }
    }
    ,
    69100: (e,n,t)=>{
        var i = t(99489)
          , a = t(57067);
        function o(n, t, r) {
            return a() ? e.exports = o = Reflect.construct : e.exports = o = function(e, n, t) {
                var a = [null];
                a.push.apply(a, n);
                var o = new (Function.bind.apply(e, a));
                return t && i(o, t.prototype),
                o
            }
            ,
            o.apply(null, arguments)
        }
        e.exports = o
    }
    ,
    70430: e=>{
        e.exports = function(e) {
            return -1 !== Function.toString.call(e).indexOf("[native code]")
        }
    }
    ,
    57067: e=>{
        e.exports = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
    }
    ,
    65957: (e,n,t)=>{
        var i = t(29754)
          , a = t(99489)
          , o = t(70430)
          , r = t(69100);
        function l(n) {
            var t = "function" == typeof Map ? new Map : void 0;
            return e.exports = l = function(e) {
                if (null === e || !o(e))
                    return e;
                if ("function" != typeof e)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t) {
                    if (t.has(e))
                        return t.get(e);
                    t.set(e, n)
                }
                function n() {
                    return r(e, arguments, i(this).constructor)
                }
                return n.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                a(n, e)
            }
            ,
            l(n)
        }
        e.exports = l
    }
    ,
    53690: (e,n,t)=>{
        "use strict";
        t.d(n, {
            Z: ()=>r
        });
        var i = t(67294);
        function a() {
            return (a = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var i in t)
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var o = i.createElement("path", {
            d: "M10.48 2c2.4 0 4.4.82 6.04 2.46A8.2 8.2 0 0 1 19 10.5c0 2.39-.81 4.38-2.43 5.96A8.4 8.4 0 0 1 10.49 19c-2.3 0-4.3-.83-5.98-2.5C2.84 14.82 2 12.83 2 10.5s.83-4.34 2.5-6.04A8.14 8.14 0 0 1 10.48 2zm.03 1.53c-1.93 0-3.56.68-4.9 2.04a6.84 6.84 0 0 0-.01 9.82 6.71 6.71 0 0 0 4.92 2.06c1.89 0 3.54-.69 4.94-2.07a6.47 6.47 0 0 0 2-4.87c0-1.93-.67-3.57-2.03-4.93a6.72 6.72 0 0 0-4.91-2.03zM12.8 8.4v3.48h-.97v4.12H9.18v-4.12h-.97V8.39A.53.53 0 0 1 8.37 8a.53.53 0 0 1 .39-.16h3.49c.14 0 .27.06.38.16a.52.52 0 0 1 .16.39zM9.32 6.2c0-.8.39-1.2 1.18-1.2.79 0 1.18.4 1.18 1.2 0 .8-.4 1.19-1.18 1.19-.79 0-1.18-.4-1.18-1.18z",
            fillRule: "evenodd"
        });
        const r = function(e) {
            return i.createElement("svg", a({
                width: 21,
                height: 21
            }, e), o)
        }
    }
    ,
    78271: (e,n,t)=>{
        "use strict";
        t.d(n, {
            Z: ()=>r
        });
        var i = t(67294);
        function a() {
            return (a = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var i in t)
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var o = i.createElement("path", {
            d: "M10.48 2c2.4 0 4.4.82 6.04 2.46C18.18 6.1 19 8.11 19 10.5s-.81 4.38-2.43 5.96A8.4 8.4 0 0 1 10.49 19c-2.31 0-4.3-.84-5.98-2.52A8.16 8.16 0 0 1 2 10.5c0-2.33.83-4.34 2.5-6.04A8.14 8.14 0 0 1 10.48 2zM3.91 8.2a6.68 6.68 0 0 0-.38 2.3c0 1.88.7 3.51 2.07 4.89a6.77 6.77 0 0 0 4.92 2.05c1.9 0 3.56-.7 4.94-2.08a6.2 6.2 0 0 0 1.17-1.5l-3.2-1.42c-.1.54-.38.98-.8 1.32a2.8 2.8 0 0 1-1.53.58v1.3h-.98v-1.3a3.95 3.95 0 0 1-2.58-1.02l1.16-1.18c.56.51 1.19.77 1.9.77.3 0 .54-.07.75-.2.2-.13.31-.35.31-.65a.66.66 0 0 0-.23-.52l-.82-.35-1-.45-1.35-.6L3.92 8.2zm6.6-4.68a6.6 6.6 0 0 0-4.9 2.05 8 8 0 0 0-.94 1.14l3.25 1.45c.14-.44.41-.8.8-1.07a2.68 2.68 0 0 1 1.39-.44V5.33h.98v1.3c.78.04 1.49.3 2.13.8L12.1 8.56c-.48-.33-.96-.5-1.46-.5-.26 0-.5.05-.7.15-.21.1-.31.28-.31.52 0 .07.02.14.07.2l1.08.49.75.33 1.37.6 4.36 1.94c.14-.6.22-1.21.22-1.83 0-1.95-.67-3.6-2.03-4.93a6.64 6.64 0 0 0-4.92-2.05z",
            fillRule: "evenodd"
        });
        const r = function(e) {
            return i.createElement("svg", a({
                width: 21,
                height: 21
            }, e), o)
        }
    }
    ,
    50344: (e,n,t)=>{
        "use strict";
        t.d(n, {
            Z: ()=>r
        });
        var i = t(67294);
        function a() {
            return (a = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var i in t)
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var o = i.createElement("path", {
            d: "M10.48 2c2.38 0 4.4.82 6.04 2.47A8.17 8.17 0 0 1 19 10.5a8.1 8.1 0 0 1-2.43 5.98A8.39 8.39 0 0 1 10.49 19c-2.3 0-4.3-.83-5.99-2.5a8.18 8.18 0 0 1-2.5-6 8.3 8.3 0 0 1 2.5-6.03A8.15 8.15 0 0 1 10.48 2zm.03 1.53a6.6 6.6 0 0 0-4.9 2.05 6.78 6.78 0 0 0-2.08 4.92c0 1.9.7 3.52 2.07 4.89a6.71 6.71 0 0 0 4.91 2.06c1.9 0 3.55-.69 4.95-2.07a6.5 6.5 0 0 0 2-4.87c0-1.94-.67-3.58-2.03-4.9a6.67 6.67 0 0 0-4.91-2.06zm3.2 4.97v1.45H7.55V8.5h6.18zm0 2.73v1.45H7.55v-1.45h6.18z",
            fillRule: "evenodd"
        });
        const r = function(e) {
            return i.createElement("svg", a({
                width: 21,
                height: 21
            }, e), o)
        }
    }
    ,
    8969: (e,n,t)=>{
        "use strict";
        t.d(n, {
            Z: ()=>r
        });
        var i = t(67294);
        function a() {
            return (a = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var i in t)
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var o = i.createElement("path", {
            d: "M10.48 2c2.38 0 4.4.82 6.04 2.47A8.17 8.17 0 0 1 19 10.5a8.1 8.1 0 0 1-2.43 5.98A8.39 8.39 0 0 1 10.49 19c-2.3 0-4.3-.83-5.99-2.5a8.18 8.18 0 0 1-2.5-6c0-2.32.83-4.33 2.5-6.03A8.15 8.15 0 0 1 10.48 2zm.03 1.53a6.6 6.6 0 0 0-4.9 2.05 6.79 6.79 0 0 0-2.08 4.92c0 1.9.7 3.52 2.07 4.89a6.71 6.71 0 0 0 4.92 2.06c1.89 0 3.54-.7 4.94-2.08a6.5 6.5 0 0 0 2-4.87c0-1.94-.67-3.58-2.03-4.92a6.64 6.64 0 0 0-4.91-2.05zM6.72 9.3a3.8 3.8 0 0 1 1.26-2.42 3.7 3.7 0 0 1 2.47-.86c1.34 0 2.4.43 3.2 1.3a4.7 4.7 0 0 1 1.18 3.3c0 1.3-.41 2.4-1.23 3.26a4.2 4.2 0 0 1-3.2 1.3 3.8 3.8 0 0 1-2.48-.87 3.7 3.7 0 0 1-1.26-2.46H8.8c.05 1.03.67 1.55 1.87 1.55.6 0 1.08-.26 1.44-.78.36-.52.54-1.21.54-2.07 0-.9-.17-1.6-.5-2.06a1.68 1.68 0 0 0-1.45-.71c-1.14 0-1.77.5-1.92 1.5h.62l-1.68 1.68-1.68-1.68h.66z",
            fillRule: "evenodd"
        });
        const r = function(e) {
            return i.createElement("svg", a({
                width: 21,
                height: 21
            }, e), o)
        }
    }
    ,
    45957: (e,n,t)=>{
        "use strict";
        t.d(n, {
            Z: ()=>r
        });
        var i = t(67294);
        function a() {
            return (a = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var i in t)
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var o = i.createElement("g", {
            fillRule: "evenodd"
        }, i.createElement("path", {
            d: "M10.5 5.68c-2.76 0-3.46 2.61-3.46 4.82 0 2.21.7 4.82 3.46 4.82s3.46-2.6 3.46-4.82c0-2.21-.7-4.82-3.46-4.82zm0 1.82c.11 0 .21 0 .31.04.2.17.3.4.1.73l-1.83 3.38A9.1 9.1 0 0 1 9 10.49c0-.98.07-3 1.5-3zm1.38 1.55c.1.52.1 1.06.1 1.44 0 .97-.06 3-1.48 3-.11 0-.22-.01-.31-.04l-.06-.02-.1-.03c-.31-.14-.51-.38-.22-.81l2.06-3.55z"
        }), i.createElement("path", {
            d: "M10.48 2c-2.36 0-4.34.82-5.96 2.47a8.6 8.6 0 0 0-1.88 2.8A8.35 8.35 0 0 0 2 10.5c0 1.13.21 2.21.64 3.23a8.58 8.58 0 0 0 1.85 2.76 8.84 8.84 0 0 0 2.76 1.87 8.4 8.4 0 0 0 3.23.64c1.13 0 2.22-.22 3.27-.66a8.7 8.7 0 0 0 2.82-1.88 7.72 7.72 0 0 0 1.81-2.68A8.62 8.62 0 0 0 19 10.5a8.6 8.6 0 0 0-.62-3.27 8.12 8.12 0 0 0-1.82-2.74A8.3 8.3 0 0 0 10.48 2zm.04 1.53a6.7 6.7 0 0 1 4.93 2.05 6.81 6.81 0 0 1 1.5 2.25 6.97 6.97 0 0 1 .52 2.67c0 1.95-.67 3.57-2 4.87a7.33 7.33 0 0 1-2.31 1.54 6.92 6.92 0 0 1-5.29 0 7.17 7.17 0 0 1-2.26-1.51 7.33 7.33 0 0 1-1.55-2.27 6.8 6.8 0 0 1 0-5.3 7.3 7.3 0 0 1 1.55-2.28 6.6 6.6 0 0 1 4.9-2.03z"
        }));
        const r = function(e) {
            return i.createElement("svg", a({
                width: 21,
                height: 21
            }, e), o)
        }
    }
    ,
    42440: (e,n,t)=>{
        "use strict";
        t.d(n, {
            Z: ()=>r
        });
        var i = t(67294);
        function a() {
            return (a = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var i in t)
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var o = i.createElement("g", {
            fillRule: "evenodd"
        }, i.createElement("path", {
            d: "M4.13 12.21a15.4 15.4 0 0 1-2.54-2.28 6.61 6.61 0 0 1-.16-.2l-.25-.3.25-.3a13.08 13.08 0 0 1 .63-.7 15.4 15.4 0 0 1 1.7-1.51C5.55 5.54 7.5 4.7 9.51 4.7c.62 0 1.28.13 1.98.37l-.8.78a4.54 4.54 0 0 0-1.18-.18c-1.76 0-3.52.76-5.18 2.02-.58.45-1.12.93-1.58 1.41-.28.3-.28.36 0 .65a14.43 14.43 0 0 0 2.08 1.77l-.71.7zm3.05 1.57a6.32 6.32 0 0 0 4.61-.11c1-.38 2.04-.98 3.1-1.72a25.27 25.27 0 0 0 2.68-2.17l.37-.35-.37-.36a23.05 23.05 0 0 0-.76-.68 25.26 25.26 0 0 0-2.28-1.73l-.72.7a24.05 24.05 0 0 1 2.37 1.77c.2.17.2.42 0 .59-.57.49-1.2.97-1.84 1.43-1.01.7-2 1.26-2.9 1.61a5.4 5.4 0 0 1-1.92.42A6.6 6.6 0 0 1 8 13l-.81.78z"
        }), i.createElement("path", {
            d: "M12.05 9.06a2.68 2.68 0 0 1-2.7 3A2.74 2.74 0 0 1 9 12l3.06-2.96zM9.72 6.79a2.83 2.83 0 0 0-.37-.02 2.68 2.68 0 0 0-2.7 3l3.07-2.98zM3.6 14.3l-.35.34.68.7.35-.34 10.4-10.08.36-.34-.68-.7-.35.34z"
        }));
        const r = function(e) {
            return i.createElement("svg", a({
                width: 19,
                height: 19,
                viewBox: "0 0 19 19"
            }, e), o)
        }
    }
    ,
    47443: (e,n,t)=>{
        var i = t(42118);
        e.exports = function(e, n) {
            return !(null == e || !e.length) && i(e, n, 0) > -1
        }
    }
    ,
    1196: e=>{
        e.exports = function(e, n, t) {
            for (var i = -1, a = null == e ? 0 : e.length; ++i < a; )
                if (t(n, e[i]))
                    return !0;
            return !1
        }
    }
    ,
    41848: e=>{
        e.exports = function(e, n, t, i) {
            for (var a = e.length, o = t + (i ? 1 : -1); i ? o-- : ++o < a; )
                if (n(e[o], o, e))
                    return o;
            return -1
        }
    }
    ,
    42118: (e,n,t)=>{
        var i = t(41848)
          , a = t(62722)
          , o = t(42351);
        e.exports = function(e, n, t) {
            return n == n ? o(e, n, t) : i(e, a, t)
        }
    }
    ,
    62722: e=>{
        e.exports = function(e) {
            return e != e
        }
    }
    ,
    45652: (e,n,t)=>{
        var i = t(88668)
          , a = t(47443)
          , o = t(1196)
          , r = t(74757)
          , l = t(23593)
          , d = t(21814);
        e.exports = function(e, n, t) {
            var c = -1
              , u = a
              , s = e.length
              , m = !0
              , k = []
              , v = k;
            if (t)
                m = !1,
                u = o;
            else if (s >= 200) {
                var p = n ? null : l(e);
                if (p)
                    return d(p);
                m = !1,
                u = r,
                v = new i
            } else
                v = n ? [] : k;
            e: for (; ++c < s; ) {
                var f = e[c]
                  , h = n ? n(f) : f;
                if (f = t || 0 !== f ? f : 0,
                m && h == h) {
                    for (var N = v.length; N--; )
                        if (v[N] === h)
                            continue e;
                    n && v.push(h),
                    k.push(f)
                } else
                    u(v, h, t) || (v !== k && v.push(h),
                    k.push(f))
            }
            return k
        }
    }
    ,
    23593: (e,n,t)=>{
        var i = t(58525)
          , a = t(50308)
          , o = t(21814)
          , r = i && 1 / o(new i([, -0]))[1] == 1 / 0 ? function(e) {
            return new i(e)
        }
        : a;
        e.exports = r
    }
    ,
    42351: e=>{
        e.exports = function(e, n, t) {
            for (var i = t - 1, a = e.length; ++i < a; )
                if (e[i] === n)
                    return i;
            return -1
        }
    }
    ,
    50308: e=>{
        e.exports = function() {}
    }
    ,
    97849: (e,n,t)=>{
        "use strict";
        t.d(n, {
            i: ()=>r,
            m: ()=>l
        });
        var i = t(319)
          , a = t.n(i)
          , o = t(32934)
          , r = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "postMetaDescription_post"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Post"
                    }
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "title"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "seoDescription"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "metaDescription"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "creator"
                        },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "collection"
                        },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "previewContent"
                        },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "subtitle"
                                }
                            }]
                        }
                    }, {
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "getPostContentAsString_post"
                        }
                    }]
                }
            }].concat(a()(o.bh.definitions))
        }
          , l = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "shortformPostMetaDescription_post"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Post"
                    }
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "metaDescription"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "seoDescription"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "shortformType"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "title"
                        }
                    }, {
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "getPostContentAsString_post"
                        }
                    }]
                }
            }].concat(a()(o.bh.definitions))
        }
    }
    ,
    22680: (e,n,t)=>{
        "use strict";
        t.d(n, {
            j: ()=>r,
            O: ()=>l
        });
        var i = t(75221)
          , a = t(15085)
          , o = t(42498)
          , r = function(e) {
            return function(e) {
                var n = e.metaDescription
                  , t = e.seoDescription
                  , i = e.title || "";
                if (t)
                    return t;
                if (n)
                    return n;
                var r = function(e) {
                    var n = (0,
                    a.r4)(e, 250);
                    return n && (0,
                    o.N8)(n, 200)
                }(e);
                if (r.length > 150)
                    return r;
                var l = e.previewContent && e.previewContent.subtitle || "";
                if (l.length > 140)
                    return l;
                l.length > 0 && (l += ".");
                var d = (i.length ? i + ". " : "") + l;
                if (d.length > 140)
                    return d;
                var c = "“".concat(i, "” is published");
                return e.creator && e.creator.name && (c += " by ".concat(e.creator.name)),
                e.collection && e.collection.name && (c += " in ".concat(e.collection.name)),
                "".concat(l, " ").concat(c, ".")
            }(e).trim()
        }
          , l = function(e, n) {
            var t = e.metaDescription
              , r = e.seoDescription
              , l = e.shortformType
              , d = l === i.po.SHORTFORM_TYPE_NOTE || !l;
            if (r)
                return r;
            if (t)
                return t;
            if (d && n) {
                var c = (0,
                a.r4)(e, 350, 0);
                return (0,
                o.N8)(c, 300)
            }
            return ""
        }
    }
    ,
    32934: (e,n,t)=>{
        "use strict";
        t.d(n, {
            bh: ()=>o,
            dm: ()=>c,
            bq: ()=>u,
            Bg: ()=>d,
            Pz: ()=>s,
            HF: ()=>m
        });
        var i = t(319)
          , a = t.n(i)
          , o = ([{
            kind: "FragmentDefinition",
            name: {
                kind: "Name",
                value: "GetFeaturedImageIndex_bodyModel"
            },
            typeCondition: {
                kind: "NamedType",
                name: {
                    kind: "Name",
                    value: "RichText"
                }
            },
            selectionSet: {
                kind: "SelectionSet",
                selections: [{
                    kind: "Field",
                    name: {
                        kind: "Name",
                        value: "paragraphs"
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "FragmentSpread",
                            name: {
                                kind: "Name",
                                value: "GetFeaturedImageIndex_paragraph"
                            }
                        }]
                    }
                }]
            }
        }].concat(a()([{
            kind: "FragmentDefinition",
            name: {
                kind: "Name",
                value: "GetFeaturedImageIndex_paragraph"
            },
            typeCondition: {
                kind: "NamedType",
                name: {
                    kind: "Name",
                    value: "Paragraph"
                }
            },
            selectionSet: {
                kind: "SelectionSet",
                selections: [{
                    kind: "Field",
                    name: {
                        kind: "Name",
                        value: "type"
                    }
                }, {
                    kind: "Field",
                    name: {
                        kind: "Name",
                        value: "text"
                    }
                }, {
                    kind: "Field",
                    name: {
                        kind: "Name",
                        value: "metadata"
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "isFeatured"
                            }
                        }]
                    }
                }]
            }
        }])),
        {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "getPostContentAsString_post"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Post"
                    }
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "content"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "postMeteringOptions"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "postMeteringOptions"
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "bodyModel"
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "paragraphs"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "text"
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "type"
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "mixtapeMetadata"
                                                },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "href"
                                                        }
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }]
        })
          , r = [{
            kind: "FragmentDefinition",
            name: {
                kind: "Name",
                value: "appendPostContext_post"
            },
            typeCondition: {
                kind: "NamedType",
                name: {
                    kind: "Name",
                    value: "Post"
                }
            },
            selectionSet: {
                kind: "SelectionSet",
                selections: [{
                    kind: "Field",
                    name: {
                        kind: "Name",
                        value: "id"
                    }
                }, {
                    kind: "Field",
                    name: {
                        kind: "Name",
                        value: "sequence"
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "title"
                            }
                        }]
                    }
                }, {
                    kind: "Field",
                    name: {
                        kind: "Name",
                        value: "collection"
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "name"
                            }
                        }]
                    }
                }, {
                    kind: "Field",
                    name: {
                        kind: "Name",
                        value: "creator"
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "name"
                            }
                        }]
                    }
                }]
            }
        }]
          , l = [{
            kind: "FragmentDefinition",
            name: {
                kind: "Name",
                value: "maybeAppendProductName_collection"
            },
            typeCondition: {
                kind: "NamedType",
                name: {
                    kind: "Name",
                    value: "Collection"
                }
            },
            selectionSet: {
                kind: "SelectionSet",
                selections: [{
                    kind: "Field",
                    name: {
                        kind: "Name",
                        value: "id"
                    }
                }, {
                    kind: "Field",
                    name: {
                        kind: "Name",
                        value: "domain"
                    }
                }]
            }
        }]
          , d = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "postTitle_post"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Post"
                    }
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "title"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "seoTitle"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "firstPublishedAt"
                        }
                    }, {
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "getPostContentAsString_post"
                        }
                    }, {
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "appendPostContext_post"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "collection"
                        },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "domain"
                                }
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "maybeAppendProductName_collection"
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "creator"
                        },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "previewContent"
                        },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "subtitle"
                                }
                            }]
                        }
                    }]
                }
            }].concat(a()(o.definitions), a()(r), a()(l))
        }
          , c = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "getTitleDetails_post"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Post"
                    }
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "content"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "postMeteringOptions"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "postMeteringOptions"
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "bodyModel"
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "GetTitleIndexMap_bodyModel"
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "getPostContentAsString_post"
                        }
                    }]
                }
            }].concat(a()([{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "GetTitleIndexMap_bodyModel"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "RichText"
                    }
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "paragraphs"
                        },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "type"
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "text"
                                }
                            }]
                        }
                    }]
                }
            }]), a()(o.definitions))
        }
          , u = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "getTitleForPost_post"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Post"
                    }
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "title"
                        }
                    }, {
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "postTitle_post"
                        }
                    }, {
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "getTitleDetails_post"
                        }
                    }]
                }
            }].concat(a()(d.definitions), a()(c.definitions))
        }
          , s = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "shortformPostTitle_post"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Post"
                    }
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "title"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "seoTitle"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "shortformType"
                        }
                    }, {
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "getPostContentAsString_post"
                        }
                    }, {
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "appendPostContext_post"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "collection"
                        },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "maybeAppendProductName_collection"
                                }
                            }]
                        }
                    }]
                }
            }].concat(a()(o.definitions), a()(r), a()(l))
        }
          , m = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "shouldIndexPost_post"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Post"
                    }
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "firstPublishedAt"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "isShortform"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "shortformType"
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "visibility"
                        }
                    }, {
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "getPostContentAsString_post"
                        }
                    }]
                }
            }].concat(a()(o.definitions))
        }
    }
    ,
    15085: (e,n,t)=>{
        "use strict";
        t.d(n, {
            r4: ()=>p,
            yB: ()=>f,
            lO: ()=>N,
            _t: ()=>S,
            oS: ()=>g,
            c_: ()=>y
        });
        var i = t(59713)
          , a = t.n(i)
          , o = t(49546)
          , r = t(61796)
          , l = t(75221)
          , d = t(44987)
          , c = t(42498);
        function u(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n && (i = i.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function s(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? u(Object(t), !0).forEach((function(n) {
                    a()(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        function m(e, n) {
            var t;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (t = function(e, n) {
                    if (e) {
                        if ("string" == typeof e)
                            return k(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name),
                        "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? k(e, n) : void 0
                    }
                }(e)) || n && e && "number" == typeof e.length) {
                    t && (e = t);
                    var i = 0
                      , a = function() {};
                    return {
                        s: a,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: a
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, r = !0, l = !1;
            return {
                s: function() {
                    t = e[Symbol.iterator]()
                },
                n: function() {
                    var e = t.next();
                    return r = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    o = e
                },
                f: function() {
                    try {
                        r || null == t.return || t.return()
                    } finally {
                        if (l)
                            throw o
                    }
                }
            }
        }
        function k(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, i = new Array(n); t < n; t++)
                i[t] = e[t];
            return i
        }
        function v(e, n) {
            var t, i, a;
            return null !== (t = n.sequence) && void 0 !== t && t.title ? e += " - ".concat(n.sequence.title) : null !== (i = n.collection) && void 0 !== i && i.name ? e += " - ".concat(n.collection.name) : null !== (a = n.creator) && void 0 !== a && a.name && (e += " - ".concat(n.creator.name)),
            e
        }
        function p(e) {
            var n, t, i, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                includeMixtapeHref: !1
            }, l = r.includeMixtapeHref, d = (null === (n = e.content) || void 0 === n || null === (t = n.bodyModel) || void 0 === t ? void 0 : t.paragraphs) || [], c = "", u = m(d);
            try {
                for (u.s(); !(i = u.n()).done; ) {
                    var s = i.value
                      , k = s.mixtapeMetadata
                      , v = s.text
                      , p = s.type;
                    if (l && null != k && k.href ? c += c ? " ".concat(k.href) : k.href : "P" === p && v && v.length > o && (c += c ? " ".concat(v) : v),
                    c.length > a)
                        break
                }
            } catch (e) {
                u.e(e)
            } finally {
                u.f()
            }
            return c
        }
        function f(e) {
            var n = !1
              , t = "";
            if (e.content && e.content.bodyModel && e.content.bodyModel.paragraphs) {
                var i = e.content.bodyModel.paragraphs
                  , a = (0,
                r.L)(i).titleIndex;
                "number" == typeof a && (t = i[a].text || "",
                n = !0)
            }
            return {
                hasTitleGraf: n,
                latestTitle: t
            }
        }
        function h(e, n, t) {
            return null != t && t.domain ? e : "".concat(e, " - ").concat(n)
        }
        function N(e, n) {
            var t, i, a, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], l = e.seoTitle, u = e.title || "", s = (null === (t = e.previewContent) || void 0 === t ? void 0 : t.subtitle) || "";
            if (l)
                return (0,
                d.p)(l, e.collection && e.collection.name, n);
            if (!r)
                return u.length > 50 ? u : u = h(u = v(u, e), n, e.collection);
            u.length < 33 && s && (s = (0,
            c.N8)(s, 40),
            u += ". ".concat(s)),
            null !== (i = e.creator) && void 0 !== i && i.name && (u += " | by ".concat(e.creator.name));
            var m, k = "", p = Date.now() - 5184e6;
            (null !== (a = e.firstPublishedAt) && void 0 !== a ? a : 0) >= p && (k = " | ".concat((0,
            o.Z)(null !== (m = e.firstPublishedAt) && void 0 !== m ? m : 0, "LLL, yyyy")));
            var f = e.collection;
            return f ? f.domain ? u += "".concat(k, " | ").concat(f.name) : u += " | ".concat(f.name).concat(k, " | ").concat(n) : u += "".concat(k, " | ").concat(n),
            u
        }
        function S(e, n) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f(e)
              , i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
              , a = e.title || ""
              , o = t.latestTitle || a
              , r = s(s({}, e), {}, {
                title: o
            });
            return N(r, n, i).trim()
        }
        function g(e, n, t) {
            var i = e.seoTitle
              , a = e.title || "";
            return i ? (0,
            d.p)(i, e.collection && e.collection.name, n) : a = h(a = v(a = function(e, n, t) {
                var i = n.shortformType
                  , a = i === l.po.SHORTFORM_TYPE_NOTE || !i;
                return t || (a ? e = p(n, 250, 0) : i === l.po.SHORTFORM_TYPE_LINK && (e = p(n, 250, 0, {
                    includeMixtapeHref: !0
                }))),
                (0,
                c.N8)(e, 200)
            }(a, e, t), e), n, e.collection)
        }
        function y(e) {
            var n = e.firstPublishedAt
              , t = e.isShortform
              , i = e.shortformType
              , a = e.visibility
              , o = i === l.po.SHORTFORM_TYPE_NOTE || !i;
            if (!n)
                return {
                    shouldIndexPost: !1,
                    indexReason: "v2: draft"
                };
            if ("PUBLIC" !== a && "LOCKED" !== a)
                return {
                    shouldIndexPost: !1,
                    indexReason: "v2: unlisted (PUBLIC | LOCKED)"
                };
            if (t)
                if (o) {
                    if (p(e, 10, 0).length <= 10)
                        return {
                            shouldIndexPost: !1,
                            indexReason: "v2: insufficient content <=10 chars"
                        }
                } else if (0 === p(e, 10, 0).length)
                    return {
                        shouldIndexPost: !1,
                        indexReason: "v2: shortform with no commentary"
                    };
            return {
                shouldIndexPost: !0,
                indexReason: "v2: all checks passed"
            }
        }
    }
    ,
    44987: (e,n,t)=>{
        "use strict";
        t.d(n, {
            N: ()=>i,
            p: ()=>a
        });
        var i = function(e) {
            return e || "Untitled story"
        }
          , a = function(e, n, t) {
            return n ? "".concat(e, " | ").concat(n) : t ? "".concat(e, " | ").concat(t) : e
        }
    }
}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/1006.97cfd7bf.chunk.js.map
