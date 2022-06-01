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
exports.id = "pages/todo";
exports.ids = ["pages/todo"];
exports.modules = {

/***/ "./context/Context.js":
/*!****************************!*\
  !*** ./context/Context.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": () => (/* binding */ Context),\n/* harmony export */   \"ContextFunction\": () => (/* binding */ ContextFunction)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Context = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\n\nconst ContextFunction = (props)=>{\n    const { 0: comment , 1: setComment  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: comments , 1: setComments  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: id1 , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: text , 1: setText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        loadComment();\n    }, []);\n    const updateComment = async (id)=>{\n        const res = await fetch(`/api/comments/${id}`, {\n            method: \"PUT\",\n            body: JSON.stringify({\n                text\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await res.json();\n        console.log(data);\n        loadComment();\n        setId(\"\");\n    };\n    const loadComment = async ()=>{\n        const res = await fetch(\"/api/comments\");\n        const data = await res.json();\n        setComments(data);\n    };\n    const addComment = async ()=>{\n        const res = await fetch(\"/api/comments\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                comment\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await res.json();\n        console.log(data);\n        loadComment();\n        setComment(\"\");\n    };\n    const deleteComment = async (id)=>{\n        const res = await fetch(`/api/comments/${id}`, {\n            method: \"DELETE\"\n        });\n        const data = await res.json();\n        console.log(data);\n        loadComment();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            comment,\n            comments,\n            id: id1,\n            setId,\n            text,\n            setText,\n            updateComment,\n            loadComment,\n            deleteComment,\n            addComment,\n            setComment\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/subhamshrivastava/Desktop/next-project/context/Context.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TEMsSUFBSTtZQUNKQyxPQUFPO1lBQ1BFLGFBQWE7WUFDYkQsV0FBVztZQUNYYyxhQUFhO1lBQ2JELFVBQVU7WUFDVnBCLFVBQVU7U0FDWDtrQkFFQUYsS0FBSyxDQUFDMEIsUUFBUTs7Ozs7aUJBQ0UsQ0FDbkI7Q0FDSDtBQUNtQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcHJvamVjdC8uL2NvbnRleHQvQ29udGV4dC5qcz9mZjQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBDb250ZXh0RnVuY3Rpb24gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZENvbW1lbnQoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHVwZGF0ZUNvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9jb21tZW50cy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGV4dCB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGxvYWRDb21tZW50KCk7XG4gICAgc2V0SWQoXCJcIik7XG4gIH07XG5cbiAgY29uc3QgbG9hZENvbW1lbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NvbW1lbnRzXCIpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHNldENvbW1lbnRzKGRhdGEpO1xuICB9O1xuICBjb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9jb21tZW50c1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb21tZW50IH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgbG9hZENvbW1lbnQoKTtcbiAgICBzZXRDb21tZW50KFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUNvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9jb21tZW50cy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBsb2FkQ29tbWVudCgpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBjb21tZW50LFxuICAgICAgICBjb21tZW50cyxcbiAgICAgICAgaWQsXG4gICAgICAgIHNldElkLFxuICAgICAgICB0ZXh0LFxuICAgICAgICBzZXRUZXh0LFxuICAgICAgICB1cGRhdGVDb21tZW50LFxuICAgICAgICBsb2FkQ29tbWVudCxcbiAgICAgICAgZGVsZXRlQ29tbWVudCxcbiAgICAgICAgYWRkQ29tbWVudCxcbiAgICAgICAgc2V0Q29tbWVudCxcbiAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5leHBvcnQgeyBDb250ZXh0LCBDb250ZXh0RnVuY3Rpb24gfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250ZXh0RnVuY3Rpb24iLCJwcm9wcyIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsImlkIiwic2V0SWQiLCJ0ZXh0Iiwic2V0VGV4dCIsImxvYWRDb21tZW50IiwidXBkYXRlQ29tbWVudCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiYWRkQ29tbWVudCIsImRlbGV0ZUNvbW1lbnQiLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/Context.js\n");

/***/ }),

/***/ "./pages/todo/index.js":
/*!*****************************!*\
  !*** ./pages/todo/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/Context */ \"./context/Context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst todo = ()=>{\n    const { data , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (status === \"unauthenticated\") (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)();\n    }, [\n        status\n    ]);\n    console.log(data);\n    console.log(status);\n    const { comment: comment1 , comments , id , text , setText , setComment , setComments , setId , addComment , updateComment , deleteComment , loadComment ,  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_1__.Context);\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n            lineNumber: 28,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    margin: \"20px 0\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    style: {\n                        fontSize: \"18px\"\n                    },\n                    onClick: ()=>{\n                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)();\n                    },\n                    children: \"Sign Out\"\n                }, void 0, false, {\n                    fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Uses Next API routes to send request and get response and Context Api to manage all the state and functions, next-auth for client side authentication.\"\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Todo \"\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                onChange: (e)=>{\n                    setComment(e.target.value);\n                },\n                value: comment1\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                disabled: !comment1.length,\n                onClick: addComment,\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: comments.map((comment)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            comment.text,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>{\n                                    setId(comment.id);\n                                },\n                                children: \"Modify\"\n                            }, void 0, false, {\n                                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, undefined),\n                            comment.id === id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        onChange: (e)=>{\n                                            setText(e.target.value);\n                                        },\n                                        value: text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>{\n                                            updateComment(comment.id);\n                                        },\n                                        children: \"Update\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true) : \"\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>deleteComment(comment.id)\n                                ,\n                                children: \"Delete Text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                                lineNumber: 93,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, comment.id, true, {\n                        fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRDQUNSLEdBRUgsRUFBRTswQ0FFSiw4REFBQ2MsUUFBTTtnQ0FBQ0UsT0FBTyxFQUFFLElBQU1SLGFBQWEsQ0FBQ1YsT0FBTyxDQUFDRSxFQUFFLENBQUM7Z0NBQUE7MENBQUUsYUFFbEQ7Ozs7O3lDQUFTOzt1QkEvQkZGLE9BQU8sQ0FBQ0UsRUFBRTs7OztpQ0FnQ2QsQ0FDTDtpQkFDSCxDQUFDOzs7Ozt5QkFDQzs7Ozs7O2lCQUNELENBQ047Q0FDSDtBQUNELGlFQUFlUCxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXByb2plY3QvLi9wYWdlcy90b2RvL2luZGV4LmpzPzhiYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L0NvbnRleHRcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgdG9kbyA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdHVzID09PSBcInVuYXV0aGVudGljYXRlZFwiKSBzaWduSW4oKTtcbiAgfSwgW3N0YXR1c10pO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgY29uc29sZS5sb2coc3RhdHVzKTtcbiAgY29uc3Qge1xuICAgIGNvbW1lbnQsXG4gICAgY29tbWVudHMsXG4gICAgaWQsXG4gICAgdGV4dCxcbiAgICBzZXRUZXh0LFxuICAgIHNldENvbW1lbnQsXG4gICAgc2V0Q29tbWVudHMsXG4gICAgc2V0SWQsXG4gICAgYWRkQ29tbWVudCxcbiAgICB1cGRhdGVDb21tZW50LFxuICAgIGRlbGV0ZUNvbW1lbnQsXG4gICAgbG9hZENvbW1lbnQsXG4gIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIGlmIChzdGF0dXMgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgcmV0dXJuIDxoMz5Mb2FkaW5nLi4uPC9oMz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMHB4IDBcIiB9fT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE4cHhcIiB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNpZ25PdXQoKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgU2lnbiBPdXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHA+XG4gICAgICAgIFVzZXMgTmV4dCBBUEkgcm91dGVzIHRvIHNlbmQgcmVxdWVzdCBhbmQgZ2V0IHJlc3BvbnNlIGFuZCBDb250ZXh0IEFwaSB0b1xuICAgICAgICBtYW5hZ2UgYWxsIHRoZSBzdGF0ZSBhbmQgZnVuY3Rpb25zLCBuZXh0LWF1dGggZm9yIGNsaWVudCBzaWRlXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uLlxuICAgICAgPC9wPlxuICAgICAgPGgxPlRvZG8gPC9oMT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgICB2YWx1ZT17Y29tbWVudH1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIGRpc2FibGVkPXshY29tbWVudC5sZW5ndGh9IG9uQ2xpY2s9e2FkZENvbW1lbnR9PlxuICAgICAgICBBZGRcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8dWw+XG4gICAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17Y29tbWVudC5pZH0+XG4gICAgICAgICAgICAgIHtjb21tZW50LnRleHR9XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRJZChjb21tZW50LmlkKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTW9kaWZ5XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICB7Y29tbWVudC5pZCA9PT0gaWQgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDb21tZW50KGNvbW1lbnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVDb21tZW50KGNvbW1lbnQuaWQpfT5cbiAgICAgICAgICAgICAgICBEZWxldGUgVGV4dFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IHRvZG87XG4iXSwibmFtZXMiOlsiQ29udGV4dCIsInVzZUNvbnRleHQiLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsInVzZUVmZmVjdCIsInRvZG8iLCJkYXRhIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImNvbW1lbnQiLCJjb21tZW50cyIsImlkIiwidGV4dCIsInNldFRleHQiLCJzZXRDb21tZW50Iiwic2V0Q29tbWVudHMiLCJzZXRJZCIsImFkZENvbW1lbnQiLCJ1cGRhdGVDb21tZW50IiwiZGVsZXRlQ29tbWVudCIsImxvYWRDb21tZW50IiwiaDMiLCJkaXYiLCJzdHlsZSIsIm1hcmdpbiIsImJ1dHRvbiIsImZvbnRTaXplIiwib25DbGljayIsInAiLCJoMSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZGlzYWJsZWQiLCJsZW5ndGgiLCJ1bCIsIm1hcCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/todo/index.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/todo/index.js"));
module.exports = __webpack_exports__;

})();