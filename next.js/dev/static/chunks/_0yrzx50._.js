(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/store/useStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const models = [
    {
        color: 'Black',
        path: 'galaxy-s26-plus-black-cp.glb'
    },
    {
        color: 'Cobalt Violet',
        path: 'galaxy-s26-plus-cobalt-violet-cp.glb'
    },
    {
        color: 'Pink Gold',
        path: 'galaxy-s26-plus-pink-gold-cp.glb'
    },
    {
        color: 'Silver Shadow',
        path: 'galaxy-s26-plus-silver-shadow-cp.glb'
    },
    {
        color: 'Sky Blue',
        path: 'galaxy-s26-plus-sky-blue-cp.glb'
    },
    {
        color: 'White',
        path: 'galaxy-s26-plus-white-cp.glb'
    }
];
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        activeColor: models[0].color,
        modelPath: models[0].path,
        modelIndex: 0,
        // NEW ANIMATION STATE
        animationDone: false,
        setAnimationDone: ()=>set({
                animationDone: true
            }),
        // KEEP YOUR EXISTING API (backward compatible)
        setColor: (color, path)=>set({
                activeColor: color,
                modelPath: path,
                modelIndex: models.findIndex((m)=>m.path === path)
            }),
        // NEXT MODEL
        nextModel: ()=>{
            const state = get();
            const nextIndex = (state.modelIndex + 1) % models.length;
            set({
                modelIndex: nextIndex,
                activeColor: models[nextIndex].color,
                modelPath: models[nextIndex].path
            });
        },
        // PREV MODEL
        prevModel: ()=>{
            const state = get();
            const prevIndex = (state.modelIndex - 1 + models.length) % models.length;
            set({
                modelIndex: prevIndex,
                activeColor: models[prevIndex].color,
                modelPath: models[prevIndex].path
            });
        },
        // DIRECT INDEX CONTROL
        setModelIndex: (index)=>{
            const safeIndex = (index % models.length + models.length) % models.length;
            set({
                modelIndex: safeIndex,
                activeColor: models[safeIndex].color,
                modelPath: models[safeIndex].path
            });
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Overlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Overlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const variants = [
    {
        name: 'Black',
        file: 'galaxy-s26-plus-black-cp.glb',
        hex: '#1c1c1c'
    },
    {
        name: 'Cobalt Violet',
        file: 'galaxy-s26-plus-cobalt-violet-cp.glb',
        hex: '#4e4e7a'
    },
    {
        name: 'Pink Gold',
        file: 'galaxy-s26-plus-pink-gold-cp.glb',
        hex: '#f4c2c2'
    },
    {
        name: 'Silver Shadow',
        file: 'galaxy-s26-plus-silver-shadow-cp.glb',
        hex: '#d1d1d1'
    },
    {
        name: 'Sky Blue',
        file: 'galaxy-s26-plus-sky-blue-cp.glb',
        hex: '#a1c4fd'
    },
    {
        name: 'White',
        file: 'galaxy-s26-plus-white-cp.glb',
        hex: '#ffffff'
    }
];
function Overlay() {
    _s();
    const { activeColor, setColor, animationDone } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Overlay.useEffect": ()=>{
            if (!animationDone) return;
            const el = containerRef.current;
            if (!el) return;
            // RESET
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
                opacity: 1
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el.querySelectorAll('.color-btn'), {
                opacity: 1,
                y: 0
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el.querySelectorAll('.cta-btn'), {
                opacity: 1,
                scale: 1
            });
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
            tl.from(el, {
                opacity: 0,
                duration: 0.5
            });
            tl.from('.headline', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.2');
            //  FIX 1: AI appears earlier (feels like trigger)
            tl.from('.ai-badge', {
                scale: 0.6,
                opacity: 0,
                duration: 0.5,
                ease: 'back.out(2)'
            }, '-=0.8');
            tl.from('.color-btn', {
                opacity: 0,
                y: 20,
                stagger: 0.05,
                duration: 0.4,
                ease: 'power2.out'
            }, '-=0.4');
            tl.from('.cta-btn', {
                scale: 0.9,
                opacity: 0,
                duration: 0.6,
                ease: 'back.out(1.8)'
            }, '-=0.3');
            //  FIX 2: AI glow pulse (alive feeling)
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to('.ai-badge', {
                boxShadow: '0 0 20px rgba(255,255,255,0.6)',
                repeat: -1,
                yoyo: true,
                duration: 1.5,
                ease: 'sine.inOut'
            });
            // Floating motion
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                y: 10,
                duration: 3,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1
            });
            // Cursor parallax
            const move = {
                "Overlay.useEffect.move": (e)=>{
                    const x = (e.clientX / window.innerWidth - 0.5) * 10;
                    const y = (e.clientY / window.innerHeight - 0.5) * 10;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                        x: x * 0.3,
                        y: y * 0.3,
                        duration: 0.6
                    });
                }
            }["Overlay.useEffect.move"];
            window.addEventListener('mousemove', move);
            return ({
                "Overlay.useEffect": ()=>{
                    window.removeEventListener('mousemove', move);
                }
            })["Overlay.useEffect"];
        }
    }["Overlay.useEffect"], [
        animationDone
    ]);
    // Hover animation +  FIX 4 (AI reacts)
    const handleHover = (e, enter)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(e.currentTarget, {
            scale: enter ? 1.2 : 1,
            boxShadow: enter ? '0 0 20px rgba(255,255,255,0.4)' : '0 0 0px rgba(0,0,0,0)',
            duration: 0.3,
            ease: 'power2.out'
        });
        //  AI reacts to interaction
        if (enter) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo('.ai-badge', {
                scale: 1
            }, {
                scale: 1.1,
                duration: 0.2,
                yoyo: true,
                repeat: 1
            });
        }
    };
    // Press animation
    const handlePress = (e)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(e.currentTarget, {
            scale: 1.2
        }, {
            scale: 0.9,
            duration: 0.15,
            yoyo: true,
            repeat: 1
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ui-left",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "overlay-layout",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "top-block",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "brand",
                                children: "SAMSUNG"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/Overlay.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Overlay.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "headline",
                            children: [
                                "Galaxy S26 Series",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ai-badge",
                                    children: "GALAXY AI"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/Overlay.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/Overlay.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/Overlay.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bottom-block",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "description",
                            children: "Powered by Galaxy AI to adapt, respond, and elevate every interaction—faster, smarter, and effortlessly intuitive."
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Overlay.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "color-switch",
                            children: variants.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    title: v.name,
                                    onClick: (e)=>{
                                        handlePress(e);
                                        setColor(v.name, v.file);
                                    },
                                    onMouseEnter: (e)=>handleHover(e, true),
                                    onMouseLeave: (e)=>handleHover(e, false),
                                    className: `color-btn ${activeColor === v.name ? 'active' : ''}`,
                                    style: {
                                        backgroundColor: v.hex
                                    }
                                }, v.name, false, {
                                    fileName: "[project]/components/ui/Overlay.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Overlay.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>handlePress(e),
                            className: "cta-btn",
                            children: "ORDER NOW"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Overlay.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/Overlay.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/Overlay.tsx",
            lineNumber: 138,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/Overlay.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_s(Overlay, "Gzs0JopSctMlGKn8KT2gXuyzJto=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = Overlay;
var _c;
__turbopack_context__.k.register(_c, "Overlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Overlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Overlay.tsx [app-client] (ecmascript)");
;
'use client';
;
;
;
// Dynamically import the 3D Experience to prevent Server-Side Rendering (SSR) errors
const Experience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/canvas/Experience.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/canvas/Experience.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-full flex items-center justify-center bg-[#050505]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-white tracking-[0.3em] font-light animate-pulse text-xs",
                children: "GALAXY AI INITIALIZING"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
});
_c = Experience;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "app-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "model-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "model-wrapper",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Experience, {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 27,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 26,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 25,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ui-left",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Overlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 33,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 32,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "Experience");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0yrzx50._.js.map