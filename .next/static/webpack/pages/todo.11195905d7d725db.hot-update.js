"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todo",{

/***/ "./pages/todo/index.js":
/*!*****************************!*\
  !*** ./pages/todo/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/Context */ \"./context/Context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar todo = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(), data = ref.data, status = ref.status;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (status === \"unauthenticated\") (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)();\n    }, [\n        status\n    ]);\n    console.log(data);\n    console.log(status);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_1__.Context), comment1 = ref1.comment, comments = ref1.comments, id = ref1.id, text = ref1.text, setText = ref1.setText, setComment = ref1.setComment, setComments = ref1.setComments, setId = ref1.setId, addComment = ref1.addComment, updateComment = ref1.updateComment, deleteComment = ref1.deleteComment, loadComment = ref1.loadComment;\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n            lineNumber: 28,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    margin: \"20px 0\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    style: {\n                        fontSize: \"18px\"\n                    },\n                    onClick: function() {\n                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)();\n                    },\n                    children: \"Sign Out\"\n                }, void 0, false, {\n                    fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Uses Next API routes to send request and get response and Context Api to manage all the state and functions, next-auth for client side authentication.\"\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Todo \"\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                onChange: function(e) {\n                    setComment(e.target.value);\n                },\n                value: comment1\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                disabled: !comment1.length,\n                onClick: addComment,\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: comments.map(function(comment) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            comment.text,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    setId(comment.id);\n                                },\n                                children: \"Modify\"\n                            }, void 0, false, {\n                                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, _this1),\n                            comment.id === id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        onChange: function(e) {\n                                            setText(e.target.value);\n                                        },\n                                        value: text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 19\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: function() {\n                                            updateComment(comment.id);\n                                        },\n                                        children: \"Update\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 19\n                                    }, _this1)\n                                ]\n                            }, void 0, true) : \"\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return deleteComment(comment.id);\n                                },\n                                children: \"Delete Text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                                lineNumber: 93,\n                                columnNumber: 15\n                            }, _this1)\n                        ]\n                    }, comment.id, true, {\n                        fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_s(todo, \"PGnJQf/h051cM4RLLsAQbX+B/IM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (todo);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFFRDs7Ozs7c0NBQVM7NEJBQ1JGLE9BQU8sQ0FBQ0UsRUFBRSxLQUFLQSxFQUFFLGlCQUNoQjs7a0RBQ0UsOERBQUNtQixPQUFLO3dDQUNKQyxJQUFJLEVBQUMsTUFBTTt3Q0FDWEMsUUFBUSxFQUFFLFNBQUNDLENBQUMsRUFBSzs0Q0FDZnBCLE9BQU8sQ0FBQ29CLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQzt5Q0FDekI7d0NBQ0RBLEtBQUssRUFBRXZCLElBQUk7Ozs7OzhDQUNYO2tEQUNGLDhEQUFDYSxRQUFNO3dDQUNMRSxPQUFPLEVBQUUsV0FBTTs0Q0FDYlQsYUFBYSxDQUFDVCxPQUFPLENBQUNFLEVBQUUsQ0FBQyxDQUFDO3lDQUMzQjtrREFDRixRQUVEOzs7Ozs4Q0FBUzs7NENBQ1IsR0FFSCxFQUFFOzBDQUVKLDhEQUFDYyxRQUFNO2dDQUFDRSxPQUFPLEVBQUU7MkNBQU1SLGFBQWEsQ0FBQ1YsT0FBTyxDQUFDRSxFQUFFLENBQUM7aUNBQUE7MENBQUUsYUFFbEQ7Ozs7O3NDQUFTOzt1QkEvQkZGLE9BQU8sQ0FBQ0UsRUFBRTs7Ozs4QkFnQ2QsQ0FDTDtpQkFDSCxDQUFDOzs7OztxQkFDQzs7Ozs7O2FBQ0QsQ0FDTjtDQUNIO0dBakdLUCxJQUFJOztRQUNpQkYsdURBQVU7OztBQWlHckMsK0RBQWVFLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90b2RvL2luZGV4LmpzPzhiYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L0NvbnRleHRcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgdG9kbyA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdHVzID09PSBcInVuYXV0aGVudGljYXRlZFwiKSBzaWduSW4oKTtcbiAgfSwgW3N0YXR1c10pO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgY29uc29sZS5sb2coc3RhdHVzKTtcbiAgY29uc3Qge1xuICAgIGNvbW1lbnQsXG4gICAgY29tbWVudHMsXG4gICAgaWQsXG4gICAgdGV4dCxcbiAgICBzZXRUZXh0LFxuICAgIHNldENvbW1lbnQsXG4gICAgc2V0Q29tbWVudHMsXG4gICAgc2V0SWQsXG4gICAgYWRkQ29tbWVudCxcbiAgICB1cGRhdGVDb21tZW50LFxuICAgIGRlbGV0ZUNvbW1lbnQsXG4gICAgbG9hZENvbW1lbnQsXG4gIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIGlmIChzdGF0dXMgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgcmV0dXJuIDxoMz5Mb2FkaW5nLi4uPC9oMz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMHB4IDBcIiB9fT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE4cHhcIiB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNpZ25PdXQoKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgU2lnbiBPdXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHA+XG4gICAgICAgIFVzZXMgTmV4dCBBUEkgcm91dGVzIHRvIHNlbmQgcmVxdWVzdCBhbmQgZ2V0IHJlc3BvbnNlIGFuZCBDb250ZXh0IEFwaSB0b1xuICAgICAgICBtYW5hZ2UgYWxsIHRoZSBzdGF0ZSBhbmQgZnVuY3Rpb25zLCBuZXh0LWF1dGggZm9yIGNsaWVudCBzaWRlXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uLlxuICAgICAgPC9wPlxuICAgICAgPGgxPlRvZG8gPC9oMT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgICB2YWx1ZT17Y29tbWVudH1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIGRpc2FibGVkPXshY29tbWVudC5sZW5ndGh9IG9uQ2xpY2s9e2FkZENvbW1lbnR9PlxuICAgICAgICBBZGRcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8dWw+XG4gICAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17Y29tbWVudC5pZH0+XG4gICAgICAgICAgICAgIHtjb21tZW50LnRleHR9XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRJZChjb21tZW50LmlkKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTW9kaWZ5XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICB7Y29tbWVudC5pZCA9PT0gaWQgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDb21tZW50KGNvbW1lbnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVDb21tZW50KGNvbW1lbnQuaWQpfT5cbiAgICAgICAgICAgICAgICBEZWxldGUgVGV4dFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IHRvZG87XG4iXSwibmFtZXMiOlsiQ29udGV4dCIsInVzZUNvbnRleHQiLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsInVzZUVmZmVjdCIsInRvZG8iLCJkYXRhIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImNvbW1lbnQiLCJjb21tZW50cyIsImlkIiwidGV4dCIsInNldFRleHQiLCJzZXRDb21tZW50Iiwic2V0Q29tbWVudHMiLCJzZXRJZCIsImFkZENvbW1lbnQiLCJ1cGRhdGVDb21tZW50IiwiZGVsZXRlQ29tbWVudCIsImxvYWRDb21tZW50IiwiaDMiLCJkaXYiLCJzdHlsZSIsIm1hcmdpbiIsImJ1dHRvbiIsImZvbnRTaXplIiwib25DbGljayIsInAiLCJoMSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZGlzYWJsZWQiLCJsZW5ndGgiLCJ1bCIsIm1hcCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/todo/index.js\n");

/***/ })

});