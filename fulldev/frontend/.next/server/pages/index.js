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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/PaginationStyles */ \"./components/styles/PaginationStyles.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/components/Pagination.js\";\n\n\n\n\n\n\nfunction Pagination({\n  page\n}) {\n  const PAGE_COUNT_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n    query {\n      _allProductsMeta {\n        count\n      }\n    }\n  `;\n  const {\n    data,\n    error,\n    loading\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(PAGE_COUNT_QUERY);\n\n  if (error) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"ERROR\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 12\n    }, this);\n  }\n\n  if (loading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 12\n    }, this);\n  }\n\n  const {\n    count\n  } = data._allProductsMeta;\n  const pageCount = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_6__.perPage);\n  const pageCountString = `${pageCount}`;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_5__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [\"CHEYENNE - Page \", page, \" of \", pageCount]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n      href: `/products/${page - 1}`,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        \"aria-disabled\": page <= 1,\n        children: \"\\u2190Prev\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Page \", page, \" of\", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: `/products/${pageCount}`,\n        children: pageCountString\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [count, \" Items Total\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n      href: `/products/${page + 1}`,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        \"aria-disabled\": page >= pageCount,\n        children: \"Next\\u2192\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL2NvbXBvbmVudHMvUGFnaW5hdGlvbi5qcz8yYjMzIl0sIm5hbWVzIjpbIlBhZ2luYXRpb24iLCJwYWdlIiwiUEFHRV9DT1VOVF9RVUVSWSIsImdxbCIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VRdWVyeSIsImNvdW50IiwiX2FsbFByb2R1Y3RzTWV0YSIsInBhZ2VDb3VudCIsIk1hdGgiLCJjZWlsIiwicGVyUGFnZSIsInBhZ2VDb3VudFN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxDQUFvQjtBQUFFQztBQUFGLENBQXBCLEVBQThCO0FBQzNDLFFBQU1DLGdCQUFnQixHQUFHQyxvREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FORTtBQVFBLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxTQUFSO0FBQWVDO0FBQWYsTUFBMkJDLHdEQUFRLENBQUNMLGdCQUFELENBQXpDOztBQUVBLE1BQUlHLEtBQUosRUFBVztBQUNULHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFDRCxNQUFJQyxPQUFKLEVBQWE7QUFDWCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsUUFBTTtBQUFFRTtBQUFGLE1BQVlKLElBQUksQ0FBQ0ssZ0JBQXZCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUosS0FBSyxHQUFHSyw0Q0FBbEIsQ0FBbEI7QUFDQSxRQUFNQyxlQUFlLEdBQUksR0FBRUosU0FBVSxFQUFyQztBQUNBLHNCQUNFLDhEQUFDLDZEQUFEO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBLHVDQUNtQlQsSUFEbkIsVUFDNkJTLFNBRDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFHLGFBQVlULElBQUksR0FBRyxDQUFFLEVBQWxDO0FBQUEsNkJBQ0U7QUFBRyx5QkFBZUEsSUFBSSxJQUFJLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBU0U7QUFBQSwwQkFDUUEsSUFEUixTQUNpQixHQURqQixlQUVFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFHLGFBQVlTLFNBQVUsRUFBbkM7QUFBQSxrQkFBdUNJO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQWFFO0FBQUEsaUJBQUlOLEtBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsZUFjRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRyxhQUFZUCxJQUFJLEdBQUcsQ0FBRSxFQUFsQztBQUFBLDZCQUNFO0FBQUcseUJBQWVBLElBQUksSUFBSVMsU0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2luYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUGFnaW5hdGlvblN0eWxlcyBmcm9tICcuL3N0eWxlcy9QYWdpbmF0aW9uU3R5bGVzJztcbmltcG9ydCB7IHBlclBhZ2UgfSBmcm9tICcuLi9jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgcGFnZSB9KSB7XG4gIGNvbnN0IFBBR0VfQ09VTlRfUVVFUlkgPSBncWxgXG4gICAgcXVlcnkge1xuICAgICAgX2FsbFByb2R1Y3RzTWV0YSB7XG4gICAgICAgIGNvdW50XG4gICAgICB9XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFBBR0VfQ09VTlRfUVVFUlkpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8cD5FUlJPUjwvcD47XG4gIH1cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICBjb25zdCB7IGNvdW50IH0gPSBkYXRhLl9hbGxQcm9kdWN0c01ldGE7XG4gIGNvbnN0IHBhZ2VDb3VudCA9IE1hdGguY2VpbChjb3VudCAvIHBlclBhZ2UpO1xuICBjb25zdCBwYWdlQ291bnRTdHJpbmcgPSBgJHtwYWdlQ291bnR9YDtcbiAgcmV0dXJuIChcbiAgICA8UGFnaW5hdGlvblN0eWxlcz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgQ0hFWUVOTkUgLSBQYWdlIHtwYWdlfSBvZiB7cGFnZUNvdW50fVxuICAgICAgICA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3BhZ2UgLSAxfWB9PlxuICAgICAgICA8YSBhcmlhLWRpc2FibGVkPXtwYWdlIDw9IDF9PuKGkFByZXY8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8cD5cbiAgICAgICAgUGFnZSB7cGFnZX0gb2Z7JyAnfVxuICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7cGFnZUNvdW50fWB9PntwYWdlQ291bnRTdHJpbmd9PC9MaW5rPlxuICAgICAgPC9wPlxuICAgICAgPHA+e2NvdW50fSBJdGVtcyBUb3RhbDwvcD5cbiAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtwYWdlICsgMX1gfT5cbiAgICAgICAgPGEgYXJpYS1kaXNhYmxlZD17cGFnZSA+PSBwYWdlQ291bnR9Pk5leHTihpI8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9QYWdpbmF0aW9uU3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Pagination.js\n");

/***/ }),

/***/ "./components/styles/PaginationStyles.js":
/*!***********************************************!*\
  !*** ./components/styles/PaginationStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PaginationStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"PaginationStyles\",\n  componentId: \"sc-dk8q6n-0\"\n})([\"text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;font-size:1.7rem;border:1px solid var(--lightGrey);border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid var(--lightGray);&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (PaginationStyles);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL1BhZ2luYXRpb25TdHlsZXMuanM/MWZiOSJdLCJuYW1lcyI6WyJQYWdpbmF0aW9uU3R5bGVzIiwic3R5bGVkIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUVBLE1BQU1BLGdCQUFnQixHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxzWUFBdEI7QUE2QkEsK0RBQWVELGdCQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zdHlsZXMvUGFnaW5hdGlvblN0eWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBQYWdpbmF0aW9uU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgLyogY29sb3I6IHJlZDsgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgYXV0byk7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gMDtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodEdyZXkpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAmID4gKiB7XG4gICAgLyogY29sb3I6IGJsdWU7ICovXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xuICAgIC8qIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgfVxuICB9XG4gIGFbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIHtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvblN0eWxlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/styles/PaginationStyles.js\n");

/***/ }),

/***/ "./pages/Products/index.js":
/*!*********************************!*\
  !*** ./pages/Products/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Products */ \"./components/Products.js\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Pagination */ \"./components/Pagination.js\");\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/pages/Products/index.js\";\n\n\n\nfunction ProductsPage() {\n  const {\n    query\n  } = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const page = parseInt(query.page);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__.default, {\n      page: page || 1\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Products__WEBPACK_IMPORTED_MODULE_2__.default, {\n      page: page || 1\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__.default, {\n      page: page || 1\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL3BhZ2VzL1Byb2R1Y3RzL2luZGV4LmpzPzk1ZjQiXSwibmFtZXMiOlsiUHJvZHVjdHNQYWdlIiwicXVlcnkiLCJ1c2VSb3V0ZXIiLCJwYWdlIiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsWUFBVCxHQUF3QjtBQUNyQyxRQUFNO0FBQUVDO0FBQUYsTUFBWUMsa0VBQVMsRUFBM0I7QUFFQSxRQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0gsS0FBSyxDQUFDRSxJQUFQLENBQXJCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQywyREFBRDtBQUFZLFVBQUksRUFBRUEsSUFBSSxJQUFJO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUdFLDhEQUFDLHlEQUFEO0FBQVUsVUFBSSxFQUFFQSxJQUFJLElBQUk7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBS0UsOERBQUMsMkRBQUQ7QUFBWSxVQUFJLEVBQUVBLElBQUksSUFBSTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRCIsImZpbGUiOiIuL3BhZ2VzL1Byb2R1Y3RzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdHMnO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHNQYWdlKCkge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBwYWdlID0gcGFyc2VJbnQocXVlcnkucGFnZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFBhZ2luYXRpb24gcGFnZT17cGFnZSB8fCAxfSAvPlxuXG4gICAgICA8UHJvZHVjdHMgcGFnZT17cGFnZSB8fCAxfSAvPlxuXG4gICAgICA8UGFnaW5hdGlvbiBwYWdlPXtwYWdlIHx8IDF9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Products/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _Products_index__WEBPACK_IMPORTED_MODULE_0__.default; }\n/* harmony export */ });\n/* harmony import */ var _Products_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products/index */ \"./pages/Products/index.js\");\n/// //////////--loads products page -----//////////////\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIC8vLy8vLy8vLy8tLWxvYWRzIHByb2R1Y3RzIHBhZ2UgLS0tLS0vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Qcm9kdWN0cy9pbmRleCc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_User_js-config_js-lib_cartState_js-lib_formatMoney_js","components_Products_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();