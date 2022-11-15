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
exports.id = "pages/search";
exports.ids = ["pages/search"];
exports.modules = {

/***/ "./components/SearchSimple.js":
/*!************************************!*\
  !*** ./components/SearchSimple.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchSimple; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! downshift */ \"downshift\");\n/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(downshift__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.debounce */ \"lodash.debounce\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Product */ \"./components/Product.js\");\n\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/components/SearchSimple.js\";\n\n\n\n\n\n\n\nconst SEARCH_PRODUCTS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_3___default())`\n  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {\n    searchTerms: allProducts(\n      where: {\n        OR: [\n          { name_contains_i: $searchTerm }\n          { description_contains_i: $searchTerm }\n          # { tags_some: $searchTerm }\n        ]\n      }\n    ) {\n      id\n      name\n      # tags\n      photo {\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n`;\nconst ProductsListStyles = (styled_components__WEBPACK_IMPORTED_MODULE_6___default().div)`\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 60px;\n`;\nfunction SearchSimple({\n  searchTerm\n}) {\n  const {\n    loading,\n    data,\n    error\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(SEARCH_PRODUCTS_QUERY, {\n    variables: {\n      searchTerm\n    }\n  });\n  console.log(data, loading, error);\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: [\"Error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 21\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      children: [data.searchTerms.length, \" results for \\\"\", searchTerm, \"\\\"\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsListStyles, {\n      children: data.searchTerms.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_7__.default, {\n        product: product,\n        editView: \"none\"\n      }, product.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL2NvbXBvbmVudHMvU2VhcmNoU2ltcGxlLmpzP2MzNTciXSwibmFtZXMiOlsiU0VBUkNIX1BST0RVQ1RTX1FVRVJZIiwiZ3FsIiwiUHJvZHVjdHNMaXN0U3R5bGVzIiwic3R5bGVkIiwiU2VhcmNoU2ltcGxlIiwic2VhcmNoVGVybSIsImxvYWRpbmciLCJkYXRhIiwiZXJyb3IiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwic2VhcmNoVGVybXMiLCJsZW5ndGgiLCJtYXAiLCJwcm9kdWN0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLHFCQUFxQixHQUFHQyxvREFBSTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FyQkE7QUF1QkEsTUFBTUMsa0JBQWtCLEdBQUdDLDhEQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLENBSkE7QUFNZSxTQUFTQyxZQUFULENBQXNCO0FBQUVDO0FBQUYsQ0FBdEIsRUFBc0M7QUFDbkQsUUFBTTtBQUFFQyxXQUFGO0FBQVdDLFFBQVg7QUFBaUJDO0FBQWpCLE1BQTJCQyx3REFBUSxDQUFDVCxxQkFBRCxFQUF3QjtBQUMvRFUsYUFBUyxFQUFFO0FBQUVMO0FBQUY7QUFEb0QsR0FBeEIsQ0FBekM7QUFJQU0sU0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQVosRUFBa0JELE9BQWxCLEVBQTJCRSxLQUEzQjtBQUVBLE1BQUlGLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBRWIsTUFBSUUsS0FBSixFQUFXLG9CQUFPO0FBQUEsMEJBQVdBLEtBQUssQ0FBQ0ssT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFWCxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsaUJBQ0dOLElBQUksQ0FBQ08sV0FBTCxDQUFpQkMsTUFEcEIscUJBQzBDVixVQUQxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFLDhEQUFDLGtCQUFEO0FBQUEsZ0JBQ0dFLElBQUksQ0FBQ08sV0FBTCxDQUFpQkUsR0FBakIsQ0FBc0JDLE9BQUQsaUJBQ3BCLDhEQUFDLDZDQUFEO0FBQTBCLGVBQU8sRUFBRUEsT0FBbkM7QUFBNEMsZ0JBQVEsRUFBQztBQUFyRCxTQUFjQSxPQUFPLENBQUNDLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBLGtCQURGO0FBYUQiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaFNpbXBsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUxhenlRdWVyeSwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyByZXNldElkQ291bnRlciwgdXNlQ29tYm9ib3ggfSBmcm9tICdkb3duc2hpZnQnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xuXG5jb25zdCBTRUFSQ0hfUFJPRFVDVFNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IFNFQVJDSF9QUk9EVUNUU19RVUVSWSgkc2VhcmNoVGVybTogU3RyaW5nISkge1xuICAgIHNlYXJjaFRlcm1zOiBhbGxQcm9kdWN0cyhcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIE9SOiBbXG4gICAgICAgICAgeyBuYW1lX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cbiAgICAgICAgICB7IGRlc2NyaXB0aW9uX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cbiAgICAgICAgICAjIHsgdGFnc19zb21lOiAkc2VhcmNoVGVybSB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICApIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICAjIHRhZ3NcbiAgICAgIHBob3RvIHtcbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFByb2R1Y3RzTGlzdFN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDYwcHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hTaW1wbGUoeyBzZWFyY2hUZXJtIH0pIHtcbiAgY29uc3QgeyBsb2FkaW5nLCBkYXRhLCBlcnJvciB9ID0gdXNlUXVlcnkoU0VBUkNIX1BST0RVQ1RTX1FVRVJZLCB7XG4gICAgdmFyaWFibGVzOiB7IHNlYXJjaFRlcm0gfSxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coZGF0YSwgbG9hZGluZywgZXJyb3IpO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGg0PlxuICAgICAgICB7ZGF0YS5zZWFyY2hUZXJtcy5sZW5ndGh9IHJlc3VsdHMgZm9yIFwie3NlYXJjaFRlcm19XCJcbiAgICAgIDwvaDQ+XG4gICAgICA8aDYgLz5cbiAgICAgIDxQcm9kdWN0c0xpc3RTdHlsZXM+XG4gICAgICAgIHtkYXRhLnNlYXJjaFRlcm1zLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgIDxQcm9kdWN0IGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gZWRpdFZpZXc9XCJub25lXCIgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1Byb2R1Y3RzTGlzdFN0eWxlcz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SearchSimple.js\n");

/***/ }),

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SearchSimple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SearchSimple */ \"./components/SearchSimple.js\");\n\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/pages/search.js\";\n// import AllOrders from '../components/AllOrders';\n\nfunction SearchPage({\n  query\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchSimple__WEBPACK_IMPORTED_MODULE_1__.default, {\n      searchTerm: query.id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL3BhZ2VzL3NlYXJjaC5qcz83OGU4Il0sIm5hbWVzIjpbIlNlYXJjaFBhZ2UiLCJxdWVyeSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVlLFNBQVNBLFVBQVQsQ0FBb0I7QUFBRUM7QUFBRixDQUFwQixFQUErQjtBQUM1QyxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDZEQUFEO0FBQWMsZ0JBQVUsRUFBRUEsS0FBSyxDQUFDQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFLRCIsImZpbGUiOiIuL3BhZ2VzL3NlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBBbGxPcmRlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9BbGxPcmRlcnMnO1xuXG5pbXBvcnQgU2VhcmNoU2ltcGxlIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoU2ltcGxlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUGFnZSh7IHF1ZXJ5IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlYXJjaFNpbXBsZSBzZWFyY2hUZXJtPXtxdWVyeS5pZH0gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "downshift":
/*!****************************!*\
  !*** external "downshift" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("downshift");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "lodash.debounce":
/*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("lodash.debounce");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_User_js-lib_cartState_js-lib_formatMoney_js","components_Product_js"], function() { return __webpack_exec__("./pages/search.js"); });
module.exports = __webpack_exports__;

})();