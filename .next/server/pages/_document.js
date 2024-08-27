"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/theme */ \"./src/theme.js\");\n\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"theme-color\",\n                            content: _src_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].palette.primary.main\n                        }, void 0, false, {\n                            fileName: \"/Users/leonardodosanjosmatos/projects/anunx_app/pages/_document.js\",\n                            lineNumber: 12,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\"\n                        }, void 0, false, {\n                            fileName: \"/Users/leonardodosanjosmatos/projects/anunx_app/pages/_document.js\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/leonardodosanjosmatos/projects/anunx_app/pages/_document.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                            fileName: \"/Users/leonardodosanjosmatos/projects/anunx_app/pages/_document.js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                            fileName: \"/Users/leonardodosanjosmatos/projects/anunx_app/pages/_document.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/leonardodosanjosmatos/projects/anunx_app/pages/_document.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/leonardodosanjosmatos/projects/anunx_app/pages/_document.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this);\n    }\n}\n// `getInitialProps` belongs to `_document` (instead of `_app`),\n// it's compatible with server-side generation (SSG).\nMyDocument.getInitialProps = async (ctx)=>{\n    // Resolution order\n    //\n    // On the server:\n    // 1. app.getInitialProps\n    // 2. page.getInitialProps\n    // 3. document.getInitialProps\n    // 4. app.render\n    // 5. page.render\n    // 6. document.render\n    //\n    // On the server with error:\n    // 1. document.getInitialProps\n    // 2. app.render\n    // 3. page.render\n    // 4. document.render\n    //\n    // On the client\n    // 1. app.getInitialProps\n    // 2. page.getInitialProps\n    // 3. app.render\n    // 4. page.render\n    // Render app and page and get the context of the page with collected side effects.\n    const sheets = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.ServerStyleSheets();\n    const originalRenderPage = ctx.renderPage;\n    ctx.renderPage = ()=>originalRenderPage({\n            enhanceApp: (App)=>(props)=>sheets.collect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                        ...props\n                    }, void 0, false, {\n                        fileName: \"/Users/leonardodosanjosmatos/projects/anunx_app/pages/_document.js\",\n                        lineNumber: 58,\n                        columnNumber: 54\n                    }, undefined))\n        });\n    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(ctx);\n    return {\n        ...initialProps,\n        // Styles fragment is rendered after the app and page rendering finish.\n        styles: [\n            ...react__WEBPACK_IMPORTED_MODULE_1___default().Children.toArray(initialProps.styles),\n            sheets.getStyleElement()\n        ]\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDNkM7QUFDVjtBQUM1QjtBQUVsQixNQUFNUSxtQkFBbUJQLHNEQUFRQTtJQUM5Q1EsU0FBUztRQUNQLHFCQUNFLDhEQUFDUCwrQ0FBSUE7WUFBQ1EsTUFBSzs7OEJBQ1QsOERBQUNQLCtDQUFJQTs7c0NBRUgsOERBQUNROzRCQUFLQyxNQUFLOzRCQUFjQyxTQUFTTixrREFBS0EsQ0FBQ08sT0FBTyxDQUFDQyxPQUFPLENBQUNDLElBQUk7Ozs7OztzQ0FDNUQsOERBQUNDOzRCQUNDQyxLQUFJOzRCQUNKQyxNQUFLOzs7Ozs7Ozs7Ozs7OEJBR1QsOERBQUNDOztzQ0FDQyw4REFBQ2hCLCtDQUFJQTs7Ozs7c0NBQ0wsOERBQUNDLHFEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJbkI7QUFDRjtBQUVBLGdFQUFnRTtBQUNoRSxxREFBcUQ7QUFDckRHLFdBQVdhLGVBQWUsR0FBRyxPQUFPQztJQUNsQyxtQkFBbUI7SUFDbkIsRUFBRTtJQUNGLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixFQUFFO0lBQ0YsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixFQUFFO0lBQ0YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUVqQixtRkFBbUY7SUFDbkYsTUFBTUMsU0FBUyxJQUFJakIsdUVBQWlCQTtJQUNwQyxNQUFNa0IscUJBQXFCRixJQUFJRyxVQUFVO0lBRXpDSCxJQUFJRyxVQUFVLEdBQUcsSUFDZkQsbUJBQW1CO1lBQ2pCRSxZQUFZLENBQUNDLE1BQVEsQ0FBQ0MsUUFBVUwsT0FBT00sT0FBTyxlQUFDLDhEQUFDRjt3QkFBSyxHQUFHQyxLQUFLOzs7Ozs7UUFDL0Q7SUFFRixNQUFNRSxlQUFlLE1BQU03QixvRUFBd0IsQ0FBQ3FCO0lBRXBELE9BQU87UUFDTCxHQUFHUSxZQUFZO1FBQ2YsdUVBQXVFO1FBQ3ZFQyxRQUFRO2VBQUkvQixxREFBYyxDQUFDaUMsT0FBTyxDQUFDSCxhQUFhQyxNQUFNO1lBQUdSLE9BQU9XLGVBQWU7U0FBRztJQUNwRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW51bngvLi9wYWdlcy9fZG9jdW1lbnQuanM/NTM4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xyXG5pbXBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0cyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zcmMvdGhlbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIHsvKiBQV0EgcHJpbWFyeSBjb2xvciAqL31cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9e3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDcwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cclxuICAgICAgICA8L2JvZHk+XHJcbiAgICAgIDwvSHRtbD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBgZ2V0SW5pdGlhbFByb3BzYCBiZWxvbmdzIHRvIGBfZG9jdW1lbnRgIChpbnN0ZWFkIG9mIGBfYXBwYCksXHJcbi8vIGl0J3MgY29tcGF0aWJsZSB3aXRoIHNlcnZlci1zaWRlIGdlbmVyYXRpb24gKFNTRykuXHJcbk15RG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIC8vIFJlc29sdXRpb24gb3JkZXJcclxuICAvL1xyXG4gIC8vIE9uIHRoZSBzZXJ2ZXI6XHJcbiAgLy8gMS4gYXBwLmdldEluaXRpYWxQcm9wc1xyXG4gIC8vIDIuIHBhZ2UuZ2V0SW5pdGlhbFByb3BzXHJcbiAgLy8gMy4gZG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzXHJcbiAgLy8gNC4gYXBwLnJlbmRlclxyXG4gIC8vIDUuIHBhZ2UucmVuZGVyXHJcbiAgLy8gNi4gZG9jdW1lbnQucmVuZGVyXHJcbiAgLy9cclxuICAvLyBPbiB0aGUgc2VydmVyIHdpdGggZXJyb3I6XHJcbiAgLy8gMS4gZG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzXHJcbiAgLy8gMi4gYXBwLnJlbmRlclxyXG4gIC8vIDMuIHBhZ2UucmVuZGVyXHJcbiAgLy8gNC4gZG9jdW1lbnQucmVuZGVyXHJcbiAgLy9cclxuICAvLyBPbiB0aGUgY2xpZW50XHJcbiAgLy8gMS4gYXBwLmdldEluaXRpYWxQcm9wc1xyXG4gIC8vIDIuIHBhZ2UuZ2V0SW5pdGlhbFByb3BzXHJcbiAgLy8gMy4gYXBwLnJlbmRlclxyXG4gIC8vIDQuIHBhZ2UucmVuZGVyXHJcblxyXG4gIC8vIFJlbmRlciBhcHAgYW5kIHBhZ2UgYW5kIGdldCB0aGUgY29udGV4dCBvZiB0aGUgcGFnZSB3aXRoIGNvbGxlY3RlZCBzaWRlIGVmZmVjdHMuXHJcbiAgY29uc3Qgc2hlZXRzID0gbmV3IFNlcnZlclN0eWxlU2hlZXRzKCk7XHJcbiAgY29uc3Qgb3JpZ2luYWxSZW5kZXJQYWdlID0gY3R4LnJlbmRlclBhZ2U7XHJcblxyXG4gIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cclxuICAgIG9yaWdpbmFsUmVuZGVyUGFnZSh7XHJcbiAgICAgIGVuaGFuY2VBcHA6IChBcHApID0+IChwcm9wcykgPT4gc2hlZXRzLmNvbGxlY3QoPEFwcCB7Li4ucHJvcHN9IC8+KSxcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmluaXRpYWxQcm9wcyxcclxuICAgIC8vIFN0eWxlcyBmcmFnbWVudCBpcyByZW5kZXJlZCBhZnRlciB0aGUgYXBwIGFuZCBwYWdlIHJlbmRlcmluZyBmaW5pc2guXHJcbiAgICBzdHlsZXM6IFsuLi5SZWFjdC5DaGlsZHJlbi50b0FycmF5KGluaXRpYWxQcm9wcy5zdHlsZXMpLCBzaGVldHMuZ2V0U3R5bGVFbGVtZW50KCldLFxyXG4gIH07XHJcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiRG9jdW1lbnQiLCJIdG1sIiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiU2VydmVyU3R5bGVTaGVldHMiLCJ0aGVtZSIsIk15RG9jdW1lbnQiLCJyZW5kZXIiLCJsYW5nIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwibGluayIsInJlbCIsImhyZWYiLCJib2R5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwic2hlZXRzIiwib3JpZ2luYWxSZW5kZXJQYWdlIiwicmVuZGVyUGFnZSIsImVuaGFuY2VBcHAiLCJBcHAiLCJwcm9wcyIsImNvbGxlY3QiLCJpbml0aWFsUHJvcHMiLCJzdHlsZXMiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJnZXRTdHlsZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: \"#000000\"\n        },\n        secondary: {\n            main: \"#ffffff\"\n        },\n        background: {\n            default: \"rgb(245, 245, 245)\",\n            white: \"#ffffff\"\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBRXRELE1BQU1DLFFBQVFELHFFQUFXQSxDQUFDO0lBQ3hCRSxTQUFTO1FBQ1BDLFNBQVM7WUFDUEMsTUFBTTtRQUNSO1FBQ0FDLFdBQVc7WUFDVEQsTUFBTTtRQUNSO1FBQ0FFLFlBQVk7WUFDVkMsU0FBUztZQUNUQyxPQUFPO1FBQ1Q7SUFDRjtBQUNGO0FBRUEsaUVBQWVQLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbnVueC8uL3NyYy90aGVtZS5qcz9hZmE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjMDAwMDAwJyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgZGVmYXVsdDogJ3JnYigyNDUsIDI0NSwgMjQ1KScsXG4gICAgICB3aGl0ZTogJyNmZmZmZmYnLFxuICAgIH0sXG4gIH0sXG59KVxuXG5leHBvcnQgZGVmYXVsdCB0aGVtZSJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJ3aGl0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/theme.js\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.js")));
module.exports = __webpack_exports__;

})();