/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/[page]",{

/***/ "./components/AddToCart.js":
/*!*********************************!*\
  !*** ./components/AddToCart.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddToCart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* harmony import */ var _node_modules_waait__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/waait */ \"./node_modules/waait/index.js\");\n/* harmony import */ var _node_modules_waait__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_waait__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/cartState */ \"./lib/cartState.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/components/AddToCart.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)([\"\\n  mutation ADD_TO_CART_MUTATION($id: ID!) {\\n    addToCart(productId: $id) {\\n      id\\n      quantity\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar ADD_TO_CART_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject());\nfunction AddToCart(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(ADD_TO_CART_MUTATION, {\n    variables: {\n      id: id\n    },\n    refetchQueries: [{\n      query: _User__WEBPACK_IMPORTED_MODULE_5__.CURRENT_USER_QUERY\n    }]\n  }),\n      _useMutation2 = (0,_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),\n      addToCart = _useMutation2[0],\n      loading = _useMutation2[1].loading;\n\n  var _UseCart = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_7__.UseCart)(),\n      toggleCart = _UseCart.toggleCart;\n\n  var _UseCart2 = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_7__.UseCart)(),\n      closeCart = _UseCart2.closeCart;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n    // disabled={loading}\n    type: \"button\",\n    onClick: /*#__PURE__*/(0,_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      return _Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              addToCart({\n                variables: {\n                  id: id\n                },\n                refetchQueries: [{\n                  query: _User__WEBPACK_IMPORTED_MODULE_5__.CURRENT_USER_QUERY\n                }]\n              });\n              _context.next = 3;\n              return _node_modules_waait__WEBPACK_IMPORTED_MODULE_6___default()(1000);\n\n            case 3:\n              console.log('Open sesame');\n              toggleCart();\n              _context.next = 7;\n              return _node_modules_waait__WEBPACK_IMPORTED_MODULE_6___default()(2500);\n\n            case 7:\n              closeCart();\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })),\n    children: [\"Add\", loading && 'ing', \" to Cart \\uD83D\\uDED2\", ' ']\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}\n\n_s(AddToCart, \"0aUF08z5KB1kKj1IAAtYYFUdh4k=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation];\n});\n\n_c = AddToCart;\n\nvar _c;\n\n$RefreshReg$(_c, \"AddToCart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRUb0NhcnQuanM/ZGQ0YyJdLCJuYW1lcyI6WyJBRERfVE9fQ0FSVF9NVVRBVElPTiIsImdxbCIsIkFkZFRvQ2FydCIsImlkIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwiYWRkVG9DYXJ0IiwibG9hZGluZyIsIlVzZUNhcnQiLCJ0b2dnbGVDYXJ0IiwiY2xvc2VDYXJ0Iiwid2FhaXQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHQyxvREFBSCxtQkFBMUI7QUFTZSxTQUFTQyxTQUFULE9BQTJCO0FBQUE7O0FBQUEsTUFBTkMsRUFBTSxRQUFOQSxFQUFNOztBQUFBLHFCQUNQQywyREFBVyxDQUFDSixvQkFBRCxFQUF1QjtBQUNqRUssYUFBUyxFQUFFO0FBQUVGLFFBQUUsRUFBRkE7QUFBRixLQURzRDtBQUVqRUcsa0JBQWMsRUFBRSxDQUFDO0FBQUVDLFdBQUssRUFBRUMscURBQWtCQTtBQUEzQixLQUFEO0FBRmlELEdBQXZCLENBREo7QUFBQTtBQUFBLE1BQ2pDQyxTQURpQztBQUFBLE1BQ3BCQyxPQURvQixvQkFDcEJBLE9BRG9COztBQUFBLGlCQU1qQkMsdURBQU8sRUFOVTtBQUFBLE1BTWhDQyxVQU5nQyxZQU1oQ0EsVUFOZ0M7O0FBQUEsa0JBT2xCRCx1REFBTyxFQVBXO0FBQUEsTUFPaENFLFNBUGdDLGFBT2hDQSxTQVBnQzs7QUFTeEMsc0JBQ0U7QUFDRTtBQUNBLFFBQUksRUFBQyxRQUZQO0FBR0UsV0FBTyx5V0FBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BKLHVCQUFTLENBQUM7QUFDUkoseUJBQVMsRUFBRTtBQUFFRixvQkFBRSxFQUFGQTtBQUFGLGlCQURIO0FBRVJHLDhCQUFjLEVBQUUsQ0FBQztBQUFFQyx1QkFBSyxFQUFFQyxxREFBa0JBO0FBQTNCLGlCQUFEO0FBRlIsZUFBRCxDQUFUO0FBRE87QUFBQSxxQkFLRE0sMERBQUssQ0FBQyxJQUFELENBTEo7O0FBQUE7QUFNUEMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQUosd0JBQVU7QUFQSDtBQUFBLHFCQVFERSwwREFBSyxDQUFDLElBQUQsQ0FSSjs7QUFBQTtBQVNQRCx1QkFBUzs7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGLEVBSFQ7QUFBQSxzQkFlTUgsT0FBTyxJQUFJLEtBZmpCLDJCQWVtQyxHQWZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDs7R0E1QnVCUixTO1VBQ1dFLHVEOzs7S0FEWEYsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvQWRkVG9DYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gJy4vVXNlcic7XG5pbXBvcnQgd2FhaXQgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL3dhYWl0JztcbmltcG9ydCB7IFVzZUNhcnQsIG9wZW5DYXJ0IH0gZnJvbSAnLi4vbGliL2NhcnRTdGF0ZSc7XG5cbmNvbnN0IEFERF9UT19DQVJUX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBBRERfVE9fQ0FSVF9NVVRBVElPTigkaWQ6IElEISkge1xuICAgIGFkZFRvQ2FydChwcm9kdWN0SWQ6ICRpZCkge1xuICAgICAgaWRcbiAgICAgIHF1YW50aXR5XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRUb0NhcnQoeyBpZCB9KSB7XG4gIGNvbnN0IFthZGRUb0NhcnQsIHsgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKEFERF9UT19DQVJUX01VVEFUSU9OLCB7XG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXG4gICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV0sXG4gIH0pO1xuXG4gIGNvbnN0IHsgdG9nZ2xlQ2FydCB9ID0gVXNlQ2FydCgpO1xuICBjb25zdCB7IGNsb3NlQ2FydCB9ID0gVXNlQ2FydCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgLy8gZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgYWRkVG9DYXJ0KHtcbiAgICAgICAgICB2YXJpYWJsZXM6IHsgaWQgfSxcbiAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHdhYWl0KDEwMDApO1xuICAgICAgICBjb25zb2xlLmxvZygnT3BlbiBzZXNhbWUnKTtcbiAgICAgICAgdG9nZ2xlQ2FydCgpO1xuICAgICAgICBhd2FpdCB3YWFpdCgyNTAwKTtcbiAgICAgICAgY2xvc2VDYXJ0KCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIEFkZHtsb2FkaW5nICYmICdpbmcnfSB0byBDYXJ0IPCfm5J7JyAnfVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AddToCart.js\n");

/***/ })

});