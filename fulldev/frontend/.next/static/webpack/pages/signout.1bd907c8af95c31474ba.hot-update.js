/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signout",{

/***/ "./components/Signout.js":
/*!*******************************!*\
  !*** ./components/Signout.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignOut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/components/Signout.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)([\"\\n  mutation {\\n    endSession\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar SIGNOUT_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_5__.default)(_templateObject());\nfunction SignOut() {\n  _s();\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation)(SIGNOUT_MUTATION, {// refetch the currently logged in user\n    // refetchQueries: [{ query: CURRENT_USER_QUERY }],\n  }),\n      _useMutation2 = (0,_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMutation, 1),\n      signout = _useMutation2[0];\n\n  function autoSignOut() {\n    // signout();\n    next_router__WEBPACK_IMPORTED_MODULE_3___default().push({\n      pathname: '/products'\n    });\n  } //   autoSignOut();\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Fine.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), autoSignOut()]\n  }, void 0, true);\n}\n\n_s(SignOut, \"JcM1gji1x+WxSeVI9a+dBgDxSEA=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation];\n});\n\n_c = SignOut;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignOut\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWdub3V0LmpzPzQ1MjgiXSwibmFtZXMiOlsiU0lHTk9VVF9NVVRBVElPTiIsImdxbCIsIlNpZ25PdXQiLCJ1c2VNdXRhdGlvbiIsInNpZ25vdXQiLCJhdXRvU2lnbk91dCIsInJvdXRlciIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLG9EQUFILG1CQUF0QjtBQU1lLFNBQVNDLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSxxQkFDZEMsMkRBQVcsQ0FBQ0gsZ0JBQUQsRUFBbUIsQ0FDOUM7QUFDQTtBQUY4QyxHQUFuQixDQURHO0FBQUE7QUFBQSxNQUN6QkksT0FEeUI7O0FBTWhDLFdBQVNDLFdBQVQsR0FBdUI7QUFDckI7QUFDQUMsMkRBQUEsQ0FBWTtBQUNWQyxjQUFRLEVBQUU7QUFEQSxLQUFaO0FBR0QsR0FYK0IsQ0FhaEM7OztBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHRixXQUFXLEVBRmQ7QUFBQSxrQkFERjtBQVNEOztHQXhCdUJILE87VUFDSkMsdUQ7OztLQURJRCxPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaWdub3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSAnLi9Vc2VyJztcblxuY29uc3QgU0lHTk9VVF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24ge1xuICAgIGVuZFNlc3Npb25cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbk91dCgpIHtcbiAgY29uc3QgW3NpZ25vdXRdID0gdXNlTXV0YXRpb24oU0lHTk9VVF9NVVRBVElPTiwge1xuICAgIC8vIHJlZmV0Y2ggdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlclxuICAgIC8vIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogQ1VSUkVOVF9VU0VSX1FVRVJZIH1dLFxuICB9KTtcblxuICBmdW5jdGlvbiBhdXRvU2lnbk91dCgpIHtcbiAgICAvLyBzaWdub3V0KCk7XG4gICAgcm91dGVyLnB1c2goe1xuICAgICAgcGF0aG5hbWU6ICcvcHJvZHVjdHMnLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gICBhdXRvU2lnbk91dCgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5GaW5lLjwvaDE+XG4gICAgICB7YXV0b1NpZ25PdXQoKX1cbiAgICAgIHsvKiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtzaWdub3V0fT5cbiAgICAgICAgU0lHTiBPVVQgTUFOIVxuICAgICAgPC9idXR0b24+ICovfVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Signout.js\n");

/***/ })

});