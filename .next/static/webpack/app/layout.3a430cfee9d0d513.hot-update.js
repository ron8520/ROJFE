"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"fb36f3e6e033\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZWE0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImZiMzZmM2U2ZTAzM1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/navbar/navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/navbar/navbar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Menu,Transition!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/menu/menu.js\");\n/* harmony import */ var _barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Menu,Transition!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/transitions/transition.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/base */ \"(app-pages-browser)/./node_modules/@mui/base/Button/Button.js\");\n/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./links */ \"(app-pages-browser)/./src/components/navbar/links.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction classNames() {\n    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n        classes[_key] = arguments[_key];\n    }\n    return classes.filter(Boolean).join(\" \");\n}\nfunction NavBar() {\n    _s();\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsClient(true);\n    }, []);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    let sessionActive = true;\n    let isAdmin = false;\n    let navigation = [\n        {\n            name: \"Problems\",\n            href: \"/problems\",\n            current: pathname === \"/problems\"\n        },\n        {\n            name: \"Discuss\",\n            href: \"/discuss\",\n            current: pathname === \"/discuss\"\n        },\n        {\n            name: \"Leaderboard\",\n            href: \"/leaderboard\",\n            current: pathname === \"/leaderboard\"\n        },\n        isAdmin ? {\n            name: \"Dashboard\",\n            href: \"/dashboard\",\n            current: pathname === \"/dashboard\"\n        } : null\n    ].filter(Boolean); // Use filter(Boolean) as a type guard\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex h-16 items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-shrink-0 items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"h-8 w-auto rounded-full\",\n                                    src: \"/icon.jpeg\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_links__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0\",\n                        children: sessionActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                            as: \"div\",\n                            className: \"relative ml-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Button, {\n                                        className: \"relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"absolute -inset-1.5\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 27\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"sr-only\",\n                                                children: \"Open user menu\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 27\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                className: \"h-8 w-8 rounded-full\",\n                                                src: \"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80\",\n                                                alt: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 27\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 23\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition, {\n                                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                                    enter: \"transition ease-out duration-100\",\n                                    enterFrom: \"transform opacity-0 scale-95\",\n                                    enterTo: \"transform opacity-100 scale-100\",\n                                    leave: \"transition ease-in duration-75\",\n                                    leaveFrom: \"transform opacity-100 scale-100\",\n                                    leaveTo: \"transform opacity-0 scale-95\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Items, {\n                                        className: \"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                                children: (param)=>{\n                                                    let { active } = param;\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"#\",\n                                                        className: classNames(active ? \"bg-gray-100\" : \"\", \"block px-4 py-2 text-sm text-gray-700\"),\n                                                        children: \"Your Profile\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 31\n                                                    }, this);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 27\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                                children: (param)=>{\n                                                    let { active } = param;\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"#\",\n                                                        className: classNames(active ? \"bg-gray-100\" : \"\", \"block px-4 py-2 text-sm text-gray-700\"),\n                                                        children: \"Settings\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 31\n                                                    }, this);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 27\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                                children: (param)=>{\n                                                    let { active } = param;\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"#\",\n                                                        className: classNames(active ? \"bg-gray-100\" : \"\", \"block px-4 py-2 text-sm text-gray-700\"),\n                                                        children: \"Sign out\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 31\n                                                    }, this);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 27\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 23\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_base__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            className: \"text-white font-bold\",\n                            type: \"button\",\n                            href: \"/login\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n                lineNumber: 33,\n                columnNumber: 15\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ronruan/Desktop/wangwangOJFE/src/components/navbar/navbar.tsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(NavBar, \"W/rXBTUfpk2Xw6+j8CgyvtIupK4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL25hdmJhci9uYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ3FEO0FBQ0Q7QUFDUDtBQUNYO0FBQ1A7QUFFM0IsU0FBU1E7SUFBVztRQUFHQyxRQUFILHVCQUFVOztJQUM1QixPQUFPQSxRQUFRQyxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztBQUN0QztBQUVlLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUM7SUFFekNELGdEQUFTQSxDQUFDO1FBQ1JjLFlBQVk7SUFDZCxHQUFHLEVBQUU7SUFFTCxNQUFNQyxXQUFXWCw0REFBV0E7SUFDNUIsSUFBSVksZ0JBQXlCO0lBQzdCLElBQUlDLFVBQW1CO0lBRXZCLElBQUlDLGFBQWE7UUFDZjtZQUFFQyxNQUFNO1lBQVlDLE1BQU07WUFBYUMsU0FBU04sYUFBYTtRQUFZO1FBQ3pFO1lBQUVJLE1BQU07WUFBV0MsTUFBTTtZQUFZQyxTQUFTTixhQUFhO1FBQVc7UUFDdEU7WUFBRUksTUFBTTtZQUFlQyxNQUFNO1lBQWdCQyxTQUFTTixhQUFhO1FBQWU7UUFDbEZFLFVBQVU7WUFBRUUsTUFBTTtZQUFhQyxNQUFNO1lBQWNDLFNBQVNOLGFBQWE7UUFBYSxJQUFJO0tBQzNGLENBQUNOLE1BQU0sQ0FBQ0MsVUFBcUUsc0NBQXNDO0lBRXBILHFCQUNFO2tCQUNRLDRFQUFDWTtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNDO29DQUNDRCxXQUFVO29DQUNWRSxLQUFJOzs7Ozs7Ozs7OzswQ0FJUiw4REFBQ25CLDhDQUFLQTs7Ozs7Ozs7Ozs7a0NBRVIsOERBQUNnQjt3QkFBSUMsV0FBVTtrQ0FHWlAsOEJBQ0MsOERBQUNkLHlGQUFJQTs0QkFBQ3dCLElBQUc7NEJBQU1ILFdBQVU7OzhDQUN2Qiw4REFBQ0Q7OENBQ0MsNEVBQUNwQix5RkFBSUEsQ0FBQ0csTUFBTTt3Q0FBQ2tCLFdBQVU7OzBEQUNyQiw4REFBQ0k7Z0RBQUtKLFdBQVU7Ozs7OzswREFDaEIsOERBQUNJO2dEQUFLSixXQUFVOzBEQUFVOzs7Ozs7MERBQzFCLDhEQUFDQztnREFDQ0QsV0FBVTtnREFDVkUsS0FBSTtnREFDSkcsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSVYsOERBQUN6QiwrRkFBVUE7b0NBQ1R1QixJQUFJM0IsMkNBQVFBO29DQUNaOEIsT0FBTTtvQ0FDTkMsV0FBVTtvQ0FDVkMsU0FBUTtvQ0FDUkMsT0FBTTtvQ0FDTkMsV0FBVTtvQ0FDVkMsU0FBUTs4Q0FFUiw0RUFBQ2hDLHlGQUFJQSxDQUFDaUMsS0FBSzt3Q0FBQ1osV0FBVTs7MERBQ3BCLDhEQUFDckIseUZBQUlBLENBQUNrQyxJQUFJOzBEQUNQO3dEQUFDLEVBQUVDLE1BQU0sRUFBRTt5RUFDViw4REFBQ0M7d0RBQ0NsQixNQUFLO3dEQUNMRyxXQUFXaEIsV0FBVzhCLFNBQVMsZ0JBQWdCLElBQUk7a0VBQ3BEOzs7Ozs7Ozs7Ozs7MERBS0wsOERBQUNuQyx5RkFBSUEsQ0FBQ2tDLElBQUk7MERBQ1A7d0RBQUMsRUFBRUMsTUFBTSxFQUFFO3lFQUNWLDhEQUFDQzt3REFDQ2xCLE1BQUs7d0RBQ0xHLFdBQVdoQixXQUFXOEIsU0FBUyxnQkFBZ0IsSUFBSTtrRUFDcEQ7Ozs7Ozs7Ozs7OzswREFLTCw4REFBQ25DLHlGQUFJQSxDQUFDa0MsSUFBSTswREFDUDt3REFBQyxFQUFFQyxNQUFNLEVBQUU7eUVBQ1YsOERBQUNDO3dEQUNDbEIsTUFBSzt3REFDTEcsV0FBV2hCLFdBQVc4QixTQUFTLGdCQUFnQixJQUFJO2tFQUNwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpREFTWCw4REFBQ2hDLDZDQUFNQTs0QkFBQ2tCLFdBQVU7NEJBQXVCZ0IsTUFBSzs0QkFBU25CLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXpGO0dBdEd3QlI7O1FBT0xSLHdEQUFXQTs7O0tBUE5RIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL25hdmJhci9uYXZiYXIudHN4PzA3MDciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBNZW51LCBUcmFuc2l0aW9uIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtdWkvYmFzZSdcbmltcG9ydCBMaW5rcyBmcm9tICcuL2xpbmtzJ1xuXG5mdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXMpIHtcbiAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XG4gIGNvbnN0IFtpc0NsaWVudCwgc2V0SXNDbGllbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNDbGllbnQodHJ1ZSk7XG4gIH0sIFtdKTtcbiAgXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKVxuICBsZXQgc2Vzc2lvbkFjdGl2ZTogYm9vbGVhbiA9IHRydWU7XG4gIGxldCBpc0FkbWluOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbGV0IG5hdmlnYXRpb24gPSBbXG4gICAgeyBuYW1lOiAnUHJvYmxlbXMnLCBocmVmOiAnL3Byb2JsZW1zJywgY3VycmVudDogcGF0aG5hbWUgPT09ICcvcHJvYmxlbXMnIH0sXG4gICAgeyBuYW1lOiAnRGlzY3VzcycsIGhyZWY6ICcvZGlzY3VzcycsIGN1cnJlbnQ6IHBhdGhuYW1lID09PSAnL2Rpc2N1c3MnIH0sXG4gICAgeyBuYW1lOiAnTGVhZGVyYm9hcmQnLCBocmVmOiAnL2xlYWRlcmJvYXJkJywgY3VycmVudDogcGF0aG5hbWUgPT09ICcvbGVhZGVyYm9hcmQnIH0sXG4gICAgaXNBZG1pbiA/IHsgbmFtZTogJ0Rhc2hib2FyZCcsIGhyZWY6ICcvZGFzaGJvYXJkJywgY3VycmVudDogcGF0aG5hbWUgPT09ICcvZGFzaGJvYXJkJyB9IDogbnVsbCxcbiAgXS5maWx0ZXIoQm9vbGVhbikgYXMgQXJyYXk8eyBuYW1lOiBzdHJpbmc7IGhyZWY6IHN0cmluZzsgY3VycmVudDogYm9vbGVhbiB9PjsgLy8gVXNlIGZpbHRlcihCb29sZWFuKSBhcyBhIHR5cGUgZ3VhcmRcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTIgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLTE2IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzbTppdGVtcy1zdHJldGNoIHNtOmp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXNocmluay0wIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC04IHctYXV0byByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pY29uLmpwZWdcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxMaW5rcy8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBwci0yIHNtOnN0YXRpYyBzbTppbnNldC1hdXRvIHNtOm1sLTYgc206cHItMFwiPlxuXG4gICAgICAgICAgICAgICAgICB7LyogUHJvZmlsZSBkcm9wZG93biAqL31cbiAgICAgICAgICAgICAgICAgIHtzZXNzaW9uQWN0aXZlID8gKFxuICAgICAgICAgICAgICAgICAgICA8TWVudSBhcz1cImRpdlwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuQnV0dG9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggcm91bmRlZC1mdWxsIGJnLWdyYXktODAwIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXdoaXRlIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtZ3JheS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWluc2V0LTEuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIHVzZXIgbWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LTggcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MjA5OTY0NTc4NS01NjU4YWJmNGZmNGU/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tNzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwidHJhbnNmb3JtIG9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbXMgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB6LTEwIG10LTIgdy00OCBvcmlnaW4tdG9wLXJpZ2h0IHJvdW5kZWQtbWQgYmctd2hpdGUgcHktMSBzaGFkb3ctbGcgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGFjdGl2ZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhhY3RpdmUgPyAnYmctZ3JheS0xMDAnIDogJycsICdibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgUHJvZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBhY3RpdmUgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYWN0aXZlID8gJ2JnLWdyYXktMTAwJyA6ICcnLCAnYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBhY3RpdmUgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYWN0aXZlID8gJ2JnLWdyYXktMTAwJyA6ICcnLCAnYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIG91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1zPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J3RleHQtd2hpdGUgZm9udC1ib2xkJyB0eXBlPVwiYnV0dG9uXCIgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cblxuICApXG59XG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1lbnUiLCJUcmFuc2l0aW9uIiwidXNlUGF0aG5hbWUiLCJCdXR0b24iLCJMaW5rcyIsImNsYXNzTmFtZXMiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJOYXZCYXIiLCJpc0NsaWVudCIsInNldElzQ2xpZW50IiwicGF0aG5hbWUiLCJzZXNzaW9uQWN0aXZlIiwiaXNBZG1pbiIsIm5hdmlnYXRpb24iLCJuYW1lIiwiaHJlZiIsImN1cnJlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhcyIsInNwYW4iLCJhbHQiLCJlbnRlciIsImVudGVyRnJvbSIsImVudGVyVG8iLCJsZWF2ZSIsImxlYXZlRnJvbSIsImxlYXZlVG8iLCJJdGVtcyIsIkl0ZW0iLCJhY3RpdmUiLCJhIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/navbar/navbar.tsx\n"));

/***/ })

});