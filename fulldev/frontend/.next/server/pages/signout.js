/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/signout";
exports.ids = ["pages/signout"];
exports.modules = {

/***/ "./components/Signout.js":
/*!*******************************!*\
  !*** ./components/Signout.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignOut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var waait__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! waait */ \"waait\");\n/* harmony import */ var waait__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(waait__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/components/Signout.js\";\n\n\n\n\n\nconst SIGNOUT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n  mutation {\n    endSession\n  }\n`;\nfunction SignOut() {\n  const [signout] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(SIGNOUT_MUTATION, {\n    // refetch the currently logged in user\n    refetchQueries: [{\n      query: _User__WEBPACK_IMPORTED_MODULE_5__.CURRENT_USER_QUERY\n    }]\n  });\n\n  function autoSignOut() {\n    signout();\n    next_router__WEBPACK_IMPORTED_MODULE_3___default().push({\n      pathname: '/products'\n    }); // wait(1000);\n    // window.location.reload(true);\n  } //   autoSignOut();\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"button\",\n      onClick: autoSignOut(),\n      children: \"SIGN OUT\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL2NvbXBvbmVudHMvU2lnbm91dC5qcz80NTI4Il0sIm5hbWVzIjpbIlNJR05PVVRfTVVUQVRJT04iLCJncWwiLCJTaWduT3V0Iiwic2lnbm91dCIsInVzZU11dGF0aW9uIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkNVUlJFTlRfVVNFUl9RVUVSWSIsImF1dG9TaWduT3V0Iiwicm91dGVyIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxnQkFBZ0IsR0FBR0Msb0RBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsQ0FKQTtBQU1lLFNBQVNDLE9BQVQsR0FBbUI7QUFDaEMsUUFBTSxDQUFDQyxPQUFELElBQVlDLDJEQUFXLENBQUNKLGdCQUFELEVBQW1CO0FBQzlDO0FBQ0FLLGtCQUFjLEVBQUUsQ0FBQztBQUFFQyxXQUFLLEVBQUVDLHFEQUFrQkE7QUFBM0IsS0FBRDtBQUY4QixHQUFuQixDQUE3Qjs7QUFLQSxXQUFTQyxXQUFULEdBQXVCO0FBQ3JCTCxXQUFPO0FBQ1BNLDJEQUFBLENBQVk7QUFDVkMsY0FBUSxFQUFFO0FBREEsS0FBWixFQUZxQixDQUtyQjtBQUNBO0FBQ0QsR0FiK0IsQ0FlaEM7OztBQUVBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUVGLFdBQVcsRUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQU9EIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaWdub3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHdhaXQgZnJvbSAnd2FhaXQnO1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSAnLi9Vc2VyJztcblxuY29uc3QgU0lHTk9VVF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24ge1xuICAgIGVuZFNlc3Npb25cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbk91dCgpIHtcbiAgY29uc3QgW3NpZ25vdXRdID0gdXNlTXV0YXRpb24oU0lHTk9VVF9NVVRBVElPTiwge1xuICAgIC8vIHJlZmV0Y2ggdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlclxuICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogQ1VSUkVOVF9VU0VSX1FVRVJZIH1dLFxuICB9KTtcblxuICBmdW5jdGlvbiBhdXRvU2lnbk91dCgpIHtcbiAgICBzaWdub3V0KCk7XG4gICAgcm91dGVyLnB1c2goe1xuICAgICAgcGF0aG5hbWU6ICcvcHJvZHVjdHMnLFxuICAgIH0pO1xuICAgIC8vIHdhaXQoMTAwMCk7XG4gICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgfVxuXG4gIC8vICAgYXV0b1NpZ25PdXQoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXthdXRvU2lnbk91dCgpfT5cbiAgICAgICAgU0lHTiBPVVRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Signout.js\n");

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CURRENT_USER_QUERY\": function() { return /* binding */ CURRENT_USER_QUERY; },\n/* harmony export */   \"useUser\": function() { return /* binding */ useUser; }\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CURRENT_USER_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  query {\n    authenticatedItem {\n      ... on User {\n        id\n        email\n        name\n        cart {\n          id\n          quantity\n          product {\n            id\n            price\n            name\n            description\n            photo {\n              image {\n                publicUrlTransformed\n              }\n            }\n          }\n        }\n        # query the cart when we make it\n      }\n    }\n  }\n`;\nfunction useUser() {\n  const {\n    data\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(CURRENT_USER_QUERY);\n  return data === null || data === void 0 ? void 0 : data.authenticatedItem;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL2NvbXBvbmVudHMvVXNlci5qcz81NjU4Il0sIm5hbWVzIjpbIkNVUlJFTlRfVVNFUl9RVUVSWSIsImdxbCIsInVzZVVzZXIiLCJkYXRhIiwidXNlUXVlcnkiLCJhdXRoZW50aWNhdGVkSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsa0JBQWtCLEdBQUdDLCtDQUFJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0ExQk87QUE0QkEsU0FBU0MsT0FBVCxHQUFtQjtBQUN4QixRQUFNO0FBQUVDO0FBQUYsTUFBV0Msd0RBQVEsQ0FBQ0osa0JBQUQsQ0FBekI7QUFDQSxTQUFPRyxJQUFQLGFBQU9BLElBQVAsdUJBQU9BLElBQUksQ0FBRUUsaUJBQWI7QUFDRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvVXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmV4cG9ydCBjb25zdCBDVVJSRU5UX1VTRVJfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBhdXRoZW50aWNhdGVkSXRlbSB7XG4gICAgICAuLi4gb24gVXNlciB7XG4gICAgICAgIGlkXG4gICAgICAgIGVtYWlsXG4gICAgICAgIG5hbWVcbiAgICAgICAgY2FydCB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBxdWFudGl0eVxuICAgICAgICAgIHByb2R1Y3Qge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgcGhvdG8ge1xuICAgICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAjIHF1ZXJ5IHRoZSBjYXJ0IHdoZW4gd2UgbWFrZSBpdFxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVzZXIoKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoQ1VSUkVOVF9VU0VSX1FVRVJZKTtcbiAgcmV0dXJuIGRhdGE/LmF1dGhlbnRpY2F0ZWRJdGVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/User.js\n");

/***/ }),

/***/ "./pages/signout.js":
/*!**************************!*\
  !*** ./pages/signout.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignOutPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Signout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Signout */ \"./components/Signout.js\");\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/pages/signout.js\";\n\nfunction SignOutPage() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Signout__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"You're DONE.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL3BhZ2VzL3NpZ25vdXQuanM/ZTliZSJdLCJuYW1lcyI6WyJTaWduT3V0UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxXQUFULEdBQXVCO0FBQ3BDLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EIiwiZmlsZSI6Ii4vcGFnZXMvc2lnbm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaWduT3V0IGZyb20gJy4uL2NvbXBvbmVudHMvU2lnbm91dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25PdXRQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U2lnbk91dCAvPlxuICAgICAgPHA+WW91J3JlIERPTkUuPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signout.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "waait":
/*!************************!*\
  !*** external "waait" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("waait");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/signout.js"));
module.exports = __webpack_exports__;

})();