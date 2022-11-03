/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "config_js-lib_cartState_js-lib_formatMoney_js";
exports.ids = ["config_js-lib_cartState_js-lib_formatMoney_js"];
exports.modules = {

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"endpoint\": function() { return /* binding */ endpoint; },\n/* harmony export */   \"prodEndpoint\": function() { return /* binding */ prodEndpoint; },\n/* harmony export */   \"perPage\": function() { return /* binding */ perPage; }\n/* harmony export */ });\n// This is client side config only - don't put anything in here that shouldn't be public!\nconst endpoint = `http://localhost:3000/api/graphql`;\nconst prodEndpoint = `fill me in when we deploy`;\nconst perPage = 4;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL2NvbmZpZy5qcz9hMWJjIl0sIm5hbWVzIjpbImVuZHBvaW50IiwicHJvZEVuZHBvaW50IiwicGVyUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDTyxNQUFNQSxRQUFRLEdBQUksbUNBQWxCO0FBQ0EsTUFBTUMsWUFBWSxHQUFJLDJCQUF0QjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxDQUFoQiIsImZpbGUiOiIuL2NvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgY2xpZW50IHNpZGUgY29uZmlnIG9ubHkgLSBkb24ndCBwdXQgYW55dGhpbmcgaW4gaGVyZSB0aGF0IHNob3VsZG4ndCBiZSBwdWJsaWMhXG5leHBvcnQgY29uc3QgZW5kcG9pbnQgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmFwaHFsYDtcbmV4cG9ydCBjb25zdCBwcm9kRW5kcG9pbnQgPSBgZmlsbCBtZSBpbiB3aGVuIHdlIGRlcGxveWA7XG5leHBvcnQgY29uc3QgcGVyUGFnZSA9IDQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./lib/cartState.js":
/*!**************************!*\
  !*** ./lib/cartState.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartStateProvider\": function() { return /* binding */ CartStateProvider; },\n/* harmony export */   \"UseCart\": function() { return /* binding */ UseCart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/lib/cartState.js\";\n\nconst LocalStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst LocalStateProvider = LocalStateContext.Provider;\n\nfunction CartStateProvider({\n  children\n}) {\n  // custom provider stores state and updaters\n  const {\n    0: cartOpen,\n    1: setCartOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n\n  function toggleCart() {\n    setCartOpen(!cartOpen);\n  }\n\n  function closeCart() {\n    setCartOpen(false);\n  }\n\n  function openCart() {\n    setCartOpen(true);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocalStateProvider, {\n    value: {\n      cartOpen,\n      setCartOpen,\n      closeCart,\n      openCart,\n      toggleCart\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}\n\nfunction UseCart() {\n  // this is the consumer to access the local state\n  const all = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocalStateContext);\n  return all;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL2xpYi9jYXJ0U3RhdGUuanM/N2E0NCJdLCJuYW1lcyI6WyJMb2NhbFN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2NhbFN0YXRlUHJvdmlkZXIiLCJQcm92aWRlciIsIkNhcnRTdGF0ZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXJ0T3BlbiIsInNldENhcnRPcGVuIiwidXNlU3RhdGUiLCJ0b2dnbGVDYXJ0IiwiY2xvc2VDYXJ0Iiwib3BlbkNhcnQiLCJVc2VDYXJ0IiwiYWxsIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLGlCQUFpQixnQkFBR0Msb0RBQWEsRUFBdkM7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR0YsaUJBQWlCLENBQUNHLFFBQTdDOztBQUVBLFNBQVNDLGlCQUFULENBQTJCO0FBQUVDO0FBQUYsQ0FBM0IsRUFBeUM7QUFDdkM7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLCtDQUFRLENBQUMsS0FBRCxDQUF4Qzs7QUFFQSxXQUFTQyxVQUFULEdBQXNCO0FBQ3BCRixlQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYO0FBQ0Q7O0FBRUQsV0FBU0ksU0FBVCxHQUFxQjtBQUNuQkgsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNEOztBQUVELFdBQVNJLFFBQVQsR0FBb0I7QUFDbEJKLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRDs7QUFFRCxzQkFDRSw4REFBQyxrQkFBRDtBQUNFLFNBQUssRUFBRTtBQUFFRCxjQUFGO0FBQVlDLGlCQUFaO0FBQXlCRyxlQUF6QjtBQUFvQ0MsY0FBcEM7QUFBOENGO0FBQTlDLEtBRFQ7QUFBQSxjQUdHSjtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztBQUVELFNBQVNPLE9BQVQsR0FBbUI7QUFDakI7QUFDQSxRQUFNQyxHQUFHLEdBQUdDLGlEQUFVLENBQUNkLGlCQUFELENBQXRCO0FBQ0EsU0FBT2EsR0FBUDtBQUNEIiwiZmlsZSI6Ii4vbGliL2NhcnRTdGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBMb2NhbFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbmNvbnN0IExvY2FsU3RhdGVQcm92aWRlciA9IExvY2FsU3RhdGVDb250ZXh0LlByb3ZpZGVyO1xuXG5mdW5jdGlvbiBDYXJ0U3RhdGVQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgLy8gY3VzdG9tIHByb3ZpZGVyIHN0b3JlcyBzdGF0ZSBhbmQgdXBkYXRlcnNcblxuICBjb25zdCBbY2FydE9wZW4sIHNldENhcnRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiB0b2dnbGVDYXJ0KCkge1xuICAgIHNldENhcnRPcGVuKCFjYXJ0T3Blbik7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZUNhcnQoKSB7XG4gICAgc2V0Q2FydE9wZW4oZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gb3BlbkNhcnQoKSB7XG4gICAgc2V0Q2FydE9wZW4odHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMb2NhbFN0YXRlUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7IGNhcnRPcGVuLCBzZXRDYXJ0T3BlbiwgY2xvc2VDYXJ0LCBvcGVuQ2FydCwgdG9nZ2xlQ2FydCB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xvY2FsU3RhdGVQcm92aWRlcj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gVXNlQ2FydCgpIHtcbiAgLy8gdGhpcyBpcyB0aGUgY29uc3VtZXIgdG8gYWNjZXNzIHRoZSBsb2NhbCBzdGF0ZVxuICBjb25zdCBhbGwgPSB1c2VDb250ZXh0KExvY2FsU3RhdGVDb250ZXh0KTtcbiAgcmV0dXJuIGFsbDtcbn1cbmV4cG9ydCB7IENhcnRTdGF0ZVByb3ZpZGVyLCBVc2VDYXJ0IH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/cartState.js\n");

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ formatMoney; }\n/* harmony export */ });\nfunction formatMoney(amount = 0) {\n  const options = {\n    style: 'currency',\n    currency: 'USD',\n    minimumFractionDigits: 2\n  };\n\n  if (amount % 100 === 0) {\n    options.minimumFractionDigits = 0;\n  }\n\n  const formatter = Intl.NumberFormat('en-US', options);\n  return formatter.format(amount / 100);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL2xpYi9mb3JtYXRNb25leS5qcz9kYjJmIl0sIm5hbWVzIjpbImZvcm1hdE1vbmV5IiwiYW1vdW50Iiwib3B0aW9ucyIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsV0FBVCxDQUFxQkMsTUFBTSxHQUFHLENBQTlCLEVBQWlDO0FBQzlDLFFBQU1DLE9BQU8sR0FBRztBQUNkQyxTQUFLLEVBQUUsVUFETztBQUVkQyxZQUFRLEVBQUUsS0FGSTtBQUdkQyx5QkFBcUIsRUFBRTtBQUhULEdBQWhCOztBQU1BLE1BQUlKLE1BQU0sR0FBRyxHQUFULEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCQyxXQUFPLENBQUNHLHFCQUFSLEdBQWdDLENBQWhDO0FBQ0Q7O0FBQ0QsUUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkJOLE9BQTNCLENBQWxCO0FBRUEsU0FBT0ksU0FBUyxDQUFDRyxNQUFWLENBQWlCUixNQUFNLEdBQUcsR0FBMUIsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vbGliL2Zvcm1hdE1vbmV5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TW9uZXkoYW1vdW50ID0gMCkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gIH07XG5cbiAgaWYgKGFtb3VudCAlIDEwMCA9PT0gMCkge1xuICAgIG9wdGlvbnMubWluaW11bUZyYWN0aW9uRGlnaXRzID0gMDtcbiAgfVxuICBjb25zdCBmb3JtYXR0ZXIgPSBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCBvcHRpb25zKTtcblxuICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChhbW91bnQgLyAxMDApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/formatMoney.js\n");

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;