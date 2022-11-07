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
exports.id = "pages/orders";
exports.ids = ["pages/orders"];
exports.modules = {

/***/ "./components/AllOrders.js":
/*!*********************************!*\
  !*** ./components/AllOrders.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AllOrders; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var waait__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! waait */ \"waait\");\n/* harmony import */ var waait__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(waait__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/components/AllOrders.js\";\n\n\n\n\n\nfunction AllOrders() {\n  const ORDER_USER_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n    query {\n      authenticatedItem {\n        ... on User {\n          id\n          email\n          name\n          orders {\n            id\n          }\n        }\n      }\n    }\n  `;\n\n  function useUser() {\n    const {\n      data,\n      loading\n    } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ORDER_USER_QUERY);\n\n    if (loading) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 14\n      }, this);\n    }\n\n    return data === null || data === void 0 ? void 0 : data.authenticatedItem;\n  }\n\n  const user = useUser();\n\n  const OrderList = () => {\n    var _user$orders;\n\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: user === null || user === void 0 ? void 0 : (_user$orders = user.orders) === null || _user$orders === void 0 ? void 0 : _user$orders.map(order => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Order #\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: `/order/${order.id}`,\n            children: order.id\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, this)]\n        }, order.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 7\n      }, this), \";\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, this);\n  }; // const OrderList = async function RunOrders() {\n  //   <ul>\n  //     {await wait(1000)}\n  //     {user.orders.map((order) => (\n  //       <li key={order.id}>\n  //         <p>Order #</p>\n  //         <Link href={`/order/${order.id}`}>{order.id}</Link>\n  //       </li>\n  //     ))}\n  //   </ul>;\n  // };\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [user.name, \" Orders\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: user.email\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderList, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL2NvbXBvbmVudHMvQWxsT3JkZXJzLmpzPzQ0NTUiXSwibmFtZXMiOlsiQWxsT3JkZXJzIiwiT1JERVJfVVNFUl9RVUVSWSIsImdxbCIsInVzZVVzZXIiLCJkYXRhIiwibG9hZGluZyIsInVzZVF1ZXJ5IiwiYXV0aGVudGljYXRlZEl0ZW0iLCJ1c2VyIiwiT3JkZXJMaXN0Iiwib3JkZXJzIiwibWFwIiwib3JkZXIiLCJpZCIsIm5hbWUiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxHQUFxQjtBQUNsQyxRQUFNQyxnQkFBZ0IsR0FBR0MsK0NBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FiRTs7QUFlQSxXQUFTQyxPQUFULEdBQW1CO0FBQ2pCLFVBQU07QUFBRUMsVUFBRjtBQUFRQztBQUFSLFFBQW9CQyx3REFBUSxDQUFDTCxnQkFBRCxDQUFsQzs7QUFDQSxRQUFJSSxPQUFKLEVBQWE7QUFDWCwwQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0Q7O0FBQ0QsV0FBT0QsSUFBUCxhQUFPQSxJQUFQLHVCQUFPQSxJQUFJLENBQUVHLGlCQUFiO0FBQ0Q7O0FBRUQsUUFBTUMsSUFBSSxHQUFHTCxPQUFPLEVBQXBCOztBQUVBLFFBQU1NLFNBQVMsR0FBRztBQUFBOztBQUFBLHdCQUNoQjtBQUFBLDhCQUNFO0FBQUEsa0JBQ0dELElBREgsYUFDR0EsSUFESCx1Q0FDR0EsSUFBSSxDQUFFRSxNQURULGlEQUNHLGFBQWNDLEdBQWQsQ0FBbUJDLEtBQUQsaUJBQ2pCO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUcsVUFBU0EsS0FBSyxDQUFDQyxFQUFHLEVBQS9CO0FBQUEsc0JBQW1DRCxLQUFLLENBQUNDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQSxXQUFTRCxLQUFLLENBQUNDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEZ0I7QUFBQSxHQUFsQixDQTFCa0MsQ0F3Q2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxpQkFBS0wsSUFBSSxDQUFDTSxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBS04sSUFBSSxDQUFDTztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsbE9yZGVycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgd2FpdCBmcm9tICd3YWFpdCc7XG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSAnLi4vbGliL2Zvcm1hdE1vbmV5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxsT3JkZXJzKCkge1xuICBjb25zdCBPUkRFUl9VU0VSX1FVRVJZID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIGF1dGhlbnRpY2F0ZWRJdGVtIHtcbiAgICAgICAgLi4uIG9uIFVzZXIge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgZW1haWxcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgb3JkZXJzIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuXG4gIGZ1bmN0aW9uIHVzZVVzZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShPUkRFUl9VU0VSX1FVRVJZKTtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxoMj5Mb2FkaW5nLi4uPC9oMj47XG4gICAgfVxuICAgIHJldHVybiBkYXRhPy5hdXRoZW50aWNhdGVkSXRlbTtcbiAgfVxuXG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XG5cbiAgY29uc3QgT3JkZXJMaXN0ID0gKCkgPT4gKFxuICAgIDxkaXY+XG4gICAgICA8dWw+XG4gICAgICAgIHt1c2VyPy5vcmRlcnM/Lm1hcCgob3JkZXIpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtvcmRlci5pZH0+XG4gICAgICAgICAgICA8cD5PcmRlciAjPC9wPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9vcmRlci8ke29yZGVyLmlkfWB9PntvcmRlci5pZH08L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgO1xuICAgIDwvZGl2PlxuICApO1xuXG4gIC8vIGNvbnN0IE9yZGVyTGlzdCA9IGFzeW5jIGZ1bmN0aW9uIFJ1bk9yZGVycygpIHtcbiAgLy8gICA8dWw+XG4gIC8vICAgICB7YXdhaXQgd2FpdCgxMDAwKX1cbiAgLy8gICAgIHt1c2VyLm9yZGVycy5tYXAoKG9yZGVyKSA9PiAoXG4gIC8vICAgICAgIDxsaSBrZXk9e29yZGVyLmlkfT5cbiAgLy8gICAgICAgICA8cD5PcmRlciAjPC9wPlxuICAvLyAgICAgICAgIDxMaW5rIGhyZWY9e2Avb3JkZXIvJHtvcmRlci5pZH1gfT57b3JkZXIuaWR9PC9MaW5rPlxuICAvLyAgICAgICA8L2xpPlxuICAvLyAgICAgKSl9XG4gIC8vICAgPC91bD47XG4gIC8vIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPnt1c2VyLm5hbWV9IE9yZGVyczwvaDI+XG4gICAgICA8aDI+e3VzZXIuZW1haWx9PC9oMj5cbiAgICAgIDxPcmRlckxpc3QgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AllOrders.js\n");

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ formatMoney; }\n/* harmony export */ });\nfunction formatMoney(amount = 0) {\n  const options = {\n    style: 'currency',\n    currency: 'USD',\n    minimumFractionDigits: 2\n  };\n\n  if (amount % 100 === 0) {\n    options.minimumFractionDigits = 0;\n  }\n\n  const formatter = Intl.NumberFormat('en-US', options);\n  return formatter.format(amount / 100);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL2xpYi9mb3JtYXRNb25leS5qcz9kYjJmIl0sIm5hbWVzIjpbImZvcm1hdE1vbmV5IiwiYW1vdW50Iiwib3B0aW9ucyIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsV0FBVCxDQUFxQkMsTUFBTSxHQUFHLENBQTlCLEVBQWlDO0FBQzlDLFFBQU1DLE9BQU8sR0FBRztBQUNkQyxTQUFLLEVBQUUsVUFETztBQUVkQyxZQUFRLEVBQUUsS0FGSTtBQUdkQyx5QkFBcUIsRUFBRTtBQUhULEdBQWhCOztBQU1BLE1BQUlKLE1BQU0sR0FBRyxHQUFULEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCQyxXQUFPLENBQUNHLHFCQUFSLEdBQWdDLENBQWhDO0FBQ0Q7O0FBQ0QsUUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkJOLE9BQTNCLENBQWxCO0FBRUEsU0FBT0ksU0FBUyxDQUFDRyxNQUFWLENBQWlCUixNQUFNLEdBQUcsR0FBMUIsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vbGliL2Zvcm1hdE1vbmV5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TW9uZXkoYW1vdW50ID0gMCkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gIH07XG5cbiAgaWYgKGFtb3VudCAlIDEwMCA9PT0gMCkge1xuICAgIG9wdGlvbnMubWluaW11bUZyYWN0aW9uRGlnaXRzID0gMDtcbiAgfVxuICBjb25zdCBmb3JtYXR0ZXIgPSBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCBvcHRpb25zKTtcblxuICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChhbW91bnQgLyAxMDApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/formatMoney.js\n");

/***/ }),

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OrdersPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AllOrders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AllOrders */ \"./components/AllOrders.js\");\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/pages/orders.js\";\n\nfunction OrdersPage() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AllOrders__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL3BhZ2VzL29yZGVycy5qcz81N2ViIl0sIm5hbWVzIjpbIk9yZGVyc1BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsVUFBVCxHQUFzQjtBQUNuQyxzQkFBTyw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCIsImZpbGUiOiIuL3BhZ2VzL29yZGVycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbGxPcmRlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9BbGxPcmRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcmRlcnNQYWdlKCkge1xuICByZXR1cm4gPEFsbE9yZGVycyAvPjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/orders.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

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

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/orders.js"); });
module.exports = __webpack_exports__;

})();