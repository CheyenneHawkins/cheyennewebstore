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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddToCart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* harmony import */ var _node_modules_waait__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/waait */ \"./node_modules/waait/index.js\");\n/* harmony import */ var _node_modules_waait__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_waait__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/cartState */ \"./lib/cartState.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/components/AddToCart.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)([\"\\n  mutation ADD_TO_CART_MUTATION($id: ID!) {\\n    addToCart(productId: $id) {\\n      id\\n      quantity\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar ADD_TO_CART_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject());\nfunction AddToCart(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(ADD_TO_CART_MUTATION, {\n    variables: {\n      id: id\n    },\n    refetchQueries: [{\n      query: _User__WEBPACK_IMPORTED_MODULE_5__.CURRENT_USER_QUERY\n    }]\n  }),\n      _useMutation2 = (0,_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),\n      addToCart = _useMutation2[0],\n      loading = _useMutation2[1].loading;\n\n  var _UseCart = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_7__.UseCart)(),\n      toggleCart = _UseCart.toggleCart;\n\n  var _UseCart2 = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_7__.UseCart)(),\n      closeCart = _UseCart2.closeCart;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n    // disabled={loading}\n    type: \"button\",\n    onClick: /*#__PURE__*/(0,_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      return _Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              addToCart({\n                variables: {\n                  id: id\n                },\n                refetchQueries: [{\n                  query: _User__WEBPACK_IMPORTED_MODULE_5__.CURRENT_USER_QUERY\n                }]\n              });\n\n              if (_lib_cartState__WEBPACK_IMPORTED_MODULE_7__.openCart) {\n                _context.next = 9;\n                break;\n              }\n\n              _context.next = 4;\n              return _node_modules_waait__WEBPACK_IMPORTED_MODULE_6___default()(1000);\n\n            case 4:\n              console.log('Open sesame');\n              toggleCart();\n              _context.next = 8;\n              return _node_modules_waait__WEBPACK_IMPORTED_MODULE_6___default()(2500);\n\n            case 8:\n              closeCart();\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })),\n    children: [\"Add\", loading && 'ing', \" to Cart \\uD83D\\uDED2\", ' ']\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}\n\n_s(AddToCart, \"0aUF08z5KB1kKj1IAAtYYFUdh4k=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation];\n});\n\n_c = AddToCart;\n\nvar _c;\n\n$RefreshReg$(_c, \"AddToCart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRUb0NhcnQuanM/ZGQ0YyJdLCJuYW1lcyI6WyJBRERfVE9fQ0FSVF9NVVRBVElPTiIsImdxbCIsIkFkZFRvQ2FydCIsImlkIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwiYWRkVG9DYXJ0IiwibG9hZGluZyIsIlVzZUNhcnQiLCJ0b2dnbGVDYXJ0IiwiY2xvc2VDYXJ0Iiwib3BlbkNhcnQiLCJ3YWFpdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLG9EQUFILG1CQUExQjtBQVNlLFNBQVNDLFNBQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFOQyxFQUFNLFFBQU5BLEVBQU07O0FBQUEscUJBQ1BDLDJEQUFXLENBQUNKLG9CQUFELEVBQXVCO0FBQ2pFSyxhQUFTLEVBQUU7QUFBRUYsUUFBRSxFQUFGQTtBQUFGLEtBRHNEO0FBRWpFRyxrQkFBYyxFQUFFLENBQUM7QUFBRUMsV0FBSyxFQUFFQyxxREFBa0JBO0FBQTNCLEtBQUQ7QUFGaUQsR0FBdkIsQ0FESjtBQUFBO0FBQUEsTUFDakNDLFNBRGlDO0FBQUEsTUFDcEJDLE9BRG9CLG9CQUNwQkEsT0FEb0I7O0FBQUEsaUJBTWpCQyx1REFBTyxFQU5VO0FBQUEsTUFNaENDLFVBTmdDLFlBTWhDQSxVQU5nQzs7QUFBQSxrQkFPbEJELHVEQUFPLEVBUFc7QUFBQSxNQU9oQ0UsU0FQZ0MsYUFPaENBLFNBUGdDOztBQVN4QyxzQkFDRTtBQUNFO0FBQ0EsUUFBSSxFQUFDLFFBRlA7QUFHRSxXQUFPLHlXQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUEosdUJBQVMsQ0FBQztBQUNSSix5QkFBUyxFQUFFO0FBQUVGLG9CQUFFLEVBQUZBO0FBQUYsaUJBREg7QUFFUkcsOEJBQWMsRUFBRSxDQUFDO0FBQUVDLHVCQUFLLEVBQUVDLHFEQUFrQkE7QUFBM0IsaUJBQUQ7QUFGUixlQUFELENBQVQ7O0FBRE8sa0JBS0ZNLG9EQUxFO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBTUNDLDBEQUFLLENBQUMsSUFBRCxDQU5OOztBQUFBO0FBT0xDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FMLHdCQUFVO0FBUkw7QUFBQSxxQkFTQ0csMERBQUssQ0FBQyxJQUFELENBVE47O0FBQUE7QUFVTEYsdUJBQVM7O0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRixFQUhUO0FBQUEsc0JBaUJNSCxPQUFPLElBQUksS0FqQmpCLDJCQWlCbUMsR0FqQm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJEOztHQTlCdUJSLFM7VUFDV0UsdUQ7OztLQURYRixTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BZGRUb0NhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSAnLi9Vc2VyJztcbmltcG9ydCB3YWFpdCBmcm9tICcuLi9ub2RlX21vZHVsZXMvd2FhaXQnO1xuaW1wb3J0IHsgVXNlQ2FydCwgb3BlbkNhcnQgfSBmcm9tICcuLi9saWIvY2FydFN0YXRlJztcblxuY29uc3QgQUREX1RPX0NBUlRfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIEFERF9UT19DQVJUX01VVEFUSU9OKCRpZDogSUQhKSB7XG4gICAgYWRkVG9DYXJ0KHByb2R1Y3RJZDogJGlkKSB7XG4gICAgICBpZFxuICAgICAgcXVhbnRpdHlcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFRvQ2FydCh7IGlkIH0pIHtcbiAgY29uc3QgW2FkZFRvQ2FydCwgeyBsb2FkaW5nIH1dID0gdXNlTXV0YXRpb24oQUREX1RPX0NBUlRfTVVUQVRJT04sIHtcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcbiAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcbiAgfSk7XG5cbiAgY29uc3QgeyB0b2dnbGVDYXJ0IH0gPSBVc2VDYXJ0KCk7XG4gIGNvbnN0IHsgY2xvc2VDYXJ0IH0gPSBVc2VDYXJ0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICAvLyBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICBhZGRUb0NhcnQoe1xuICAgICAgICAgIHZhcmlhYmxlczogeyBpZCB9LFxuICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogQ1VSUkVOVF9VU0VSX1FVRVJZIH1dLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFvcGVuQ2FydCkge1xuICAgICAgICAgIGF3YWl0IHdhYWl0KDEwMDApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdPcGVuIHNlc2FtZScpO1xuICAgICAgICAgIHRvZ2dsZUNhcnQoKTtcbiAgICAgICAgICBhd2FpdCB3YWFpdCgyNTAwKTtcbiAgICAgICAgICBjbG9zZUNhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICA+XG4gICAgICBBZGR7bG9hZGluZyAmJiAnaW5nJ30gdG8gQ2FydCDwn5uSeycgJ31cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AddToCart.js\n");

/***/ })

});