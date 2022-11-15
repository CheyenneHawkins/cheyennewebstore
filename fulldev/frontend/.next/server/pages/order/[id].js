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
exports.id = "pages/order/[id]";
exports.ids = ["pages/order/[id]"];
exports.modules = {

/***/ "./components/SingleOrder.js":
/*!***********************************!*\
  !*** ./components/SingleOrder.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleOrder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/components/SingleOrder.js\";\n\n\n\n\nconst OrderDisplay = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({\n  displayName: \"SingleOrder__OrderDisplay\",\n  componentId: \"sc-1maiiev-0\"\n})([\"display:grid;width:800px;grid-template-columns:100px 200px 200px 200px;grid-template-rows:50px;grid-auto-rows:50px;box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);align-items:flex-start;padding:15px 15px 0px 15px;\"]); /// ///-------DEFINE DATABASE QUERY FOR ORDER DETAILS-----------////////\n\nconst SINGLE_ORDER_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query SINGLE_ORDER_QUERY($id: ID!) {\n    Order(where: { id: $id }) {\n      id\n      charge\n      total\n      items {\n        id\n        name\n        quantity\n        price\n        photo {\n          image {\n            publicUrlTransformed\n          }\n        }\n      }\n    }\n  }\n`; /// //////--------SEND DATABASE QUERY THE ORDER#--------/////\n\nfunction SingleOrder({\n  id\n}) {\n  const {\n    data,\n    loading,\n    error\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(SINGLE_ORDER_QUERY, {\n    variables: {\n      id\n    }\n  });\n\n  if (loading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 12\n    }, this);\n  }\n\n  if (error) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DisplayError, {\n      error: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 12\n    }, this);\n  } /// //////------------ORDER DISPLAY -- COMPONENTS----------////////////\n\n\n  const OrderTotal = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"ordertotal\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: \"Order Total:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__.default)(data.Order.total)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 5\n  }, this);\n\n  const OrderID = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"ordertotal\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: \"Order ID:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: data.Order.id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, this);\n\n  const OrderList = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: \"Items\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this), data.Order.items.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderDisplay, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        width: \"50\",\n        src: item.photo.image.publicUrlTransformed,\n        alt: item.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: `/product/${item.id}`,\n        children: item.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n        className: \"qty\",\n        children: item.quantity\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n        className: \"qty\",\n        children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__.default)(item.price)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 11\n      }, this)]\n    }, item.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }, this))]\n  }, void 0, true); /// //////------------ORDER DISPLAY-- LAYOUT----------////////////\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [console.log(data), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderTotal, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderID, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderList, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL2NvbXBvbmVudHMvU2luZ2xlT3JkZXIuanM/ODVjMyJdLCJuYW1lcyI6WyJPcmRlckRpc3BsYXkiLCJzdHlsZWQiLCJTSU5HTEVfT1JERVJfUVVFUlkiLCJncWwiLCJTaW5nbGVPcmRlciIsImlkIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiT3JkZXJUb3RhbCIsImZvcm1hdE1vbmV5IiwiT3JkZXIiLCJ0b3RhbCIsIk9yZGVySUQiLCJPcmRlckxpc3QiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIiwicXVhbnRpdHkiLCJwcmljZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdU5BQWxCLEMsQ0FZQTs7QUFFQSxNQUFNQyxrQkFBa0IsR0FBR0MsK0NBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FuQkEsQyxDQXFCQTs7QUFFZSxTQUFTQyxXQUFULENBQXFCO0FBQUVDO0FBQUYsQ0FBckIsRUFBNkI7QUFDMUMsUUFBTTtBQUFFQyxRQUFGO0FBQVFDLFdBQVI7QUFBaUJDO0FBQWpCLE1BQTJCQyx3REFBUSxDQUFDUCxrQkFBRCxFQUFxQjtBQUM1RFEsYUFBUyxFQUFFO0FBQUVMO0FBQUY7QUFEaUQsR0FBckIsQ0FBekM7O0FBSUEsTUFBSUUsT0FBSixFQUFhO0FBQ1gsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUNELE1BQUlDLEtBQUosRUFBVztBQUNULHdCQUFPLDhEQUFDLFlBQUQ7QUFBYyxXQUFLLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNELEdBVnlDLENBWTFDOzs7QUFFQSxRQUFNRyxVQUFVLEdBQUcsbUJBQ2pCO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBS0MseURBQVcsQ0FBQ04sSUFBSSxDQUFDTyxLQUFMLENBQVdDLEtBQVo7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGOztBQU9BLFFBQU1DLE9BQU8sR0FBRyxtQkFDZDtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsZ0JBQUtULElBQUksQ0FBQ08sS0FBTCxDQUFXUjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7O0FBT0EsUUFBTVcsU0FBUyxHQUFHLG1CQUNoQjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFR1YsSUFBSSxDQUFDTyxLQUFMLENBQVdJLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXNCQyxJQUFELGlCQUNwQiw4REFBQyxZQUFEO0FBQUEsOEJBQ0U7QUFDRSxhQUFLLEVBQUMsSUFEUjtBQUVFLFdBQUcsRUFBRUEsSUFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLG9CQUZ4QjtBQUdFLFdBQUcsRUFBRUgsSUFBSSxDQUFDSTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFHLFlBQVdKLElBQUksQ0FBQ2QsRUFBRyxFQUFoQztBQUFBLGtCQUFvQ2MsSUFBSSxDQUFDSTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRTtBQUFJLGlCQUFTLEVBQUMsS0FBZDtBQUFBLGtCQUFxQkosSUFBSSxDQUFDSztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFRRTtBQUFJLGlCQUFTLEVBQUMsS0FBZDtBQUFBLGtCQUFxQloseURBQVcsQ0FBQ08sSUFBSSxDQUFDTSxLQUFOO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBLE9BQW1CTixJQUFJLENBQUNkLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxDQUZIO0FBQUEsa0JBREYsQ0E1QjBDLENBK0MxQzs7O0FBRUEsc0JBQ0U7QUFBQSxlQUNHcUIsT0FBTyxDQUFDQyxHQUFSLENBQVlyQixJQUFaLENBREgsZUFFRSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUUsOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQSxrQkFERjtBQVFEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaW5nbGVPcmRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSAnLi4vbGliL2Zvcm1hdE1vbmV5JztcblxuY29uc3QgT3JkZXJEaXNwbGF5ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDgwMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDIwMHB4IDIwMHB4IDIwMHB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHg7XG4gIGdyaWQtYXV0by1yb3dzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAvKiBib3JkZXI6IHB1cnBsZSBzb2xpZCAxcHg7ICovXG4gIHBhZGRpbmc6IDE1cHggMTVweCAwcHggMTVweDtcbmA7XG5cbi8vLyAvLy8tLS0tLS0tREVGSU5FIERBVEFCQVNFIFFVRVJZIEZPUiBPUkRFUiBERVRBSUxTLS0tLS0tLS0tLS0vLy8vLy8vL1xuXG5jb25zdCBTSU5HTEVfT1JERVJfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IFNJTkdMRV9PUkRFUl9RVUVSWSgkaWQ6IElEISkge1xuICAgIE9yZGVyKHdoZXJlOiB7IGlkOiAkaWQgfSkge1xuICAgICAgaWRcbiAgICAgIGNoYXJnZVxuICAgICAgdG90YWxcbiAgICAgIGl0ZW1zIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBxdWFudGl0eVxuICAgICAgICBwcmljZVxuICAgICAgICBwaG90byB7XG4gICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbi8vLyAvLy8vLy8tLS0tLS0tLVNFTkQgREFUQUJBU0UgUVVFUlkgVEhFIE9SREVSIy0tLS0tLS0tLy8vLy9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZ2xlT3JkZXIoeyBpZCB9KSB7XG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9PUkRFUl9RVUVSWSwge1xuICAgIHZhcmlhYmxlczogeyBpZCB9LFxuICB9KTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgfVxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+O1xuICB9XG5cbiAgLy8vIC8vLy8vLy0tLS0tLS0tLS0tLU9SREVSIERJU1BMQVkgLS0gQ09NUE9ORU5UUy0tLS0tLS0tLS0vLy8vLy8vLy8vLy9cblxuICBjb25zdCBPcmRlclRvdGFsID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJ0b3RhbFwiPlxuICAgICAgPGgzPk9yZGVyIFRvdGFsOjwvaDM+XG4gICAgICA8aDM+e2Zvcm1hdE1vbmV5KGRhdGEuT3JkZXIudG90YWwpfTwvaDM+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgY29uc3QgT3JkZXJJRCA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVydG90YWxcIj5cbiAgICAgIDxoMz5PcmRlciBJRDo8L2gzPlxuICAgICAgPGgzPntkYXRhLk9yZGVyLmlkfTwvaDM+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgY29uc3QgT3JkZXJMaXN0ID0gKCkgPT4gKFxuICAgIDw+XG4gICAgICA8aDI+SXRlbXM8L2gyPlxuICAgICAge2RhdGEuT3JkZXIuaXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDxPcmRlckRpc3BsYXkga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICB3aWR0aD1cIjUwXCJcbiAgICAgICAgICAgIHNyYz17aXRlbS5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cbiAgICAgICAgICAgIGFsdD17aXRlbS5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7aXRlbS5pZH1gfT57aXRlbS5uYW1lfTwvTGluaz5cbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwicXR5XCI+e2l0ZW0ucXVhbnRpdHl9PC9oNj5cbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwicXR5XCI+e2Zvcm1hdE1vbmV5KGl0ZW0ucHJpY2UpfTwvaDY+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgIDwvT3JkZXJEaXNwbGF5PlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG5cbiAgLy8vIC8vLy8vLy0tLS0tLS0tLS0tLU9SREVSIERJU1BMQVktLSBMQVlPVVQtLS0tLS0tLS0tLy8vLy8vLy8vLy8vXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NvbnNvbGUubG9nKGRhdGEpfVxuICAgICAgPE9yZGVyVG90YWwgLz5cbiAgICAgIDxPcmRlcklEIC8+XG4gICAgICA8T3JkZXJMaXN0IC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SingleOrder.js\n");

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ formatMoney; }\n/* harmony export */ });\nfunction formatMoney(amount = 0) {\n  const options = {\n    style: 'currency',\n    currency: 'USD',\n    minimumFractionDigits: 2\n  };\n\n  if (amount % 100 === 0) {\n    options.minimumFractionDigits = 0;\n  }\n\n  const formatter = Intl.NumberFormat('en-US', options);\n  return formatter.format(amount / 100);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL2xpYi9mb3JtYXRNb25leS5qcz9kYjJmIl0sIm5hbWVzIjpbImZvcm1hdE1vbmV5IiwiYW1vdW50Iiwib3B0aW9ucyIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsV0FBVCxDQUFxQkMsTUFBTSxHQUFHLENBQTlCLEVBQWlDO0FBQzlDLFFBQU1DLE9BQU8sR0FBRztBQUNkQyxTQUFLLEVBQUUsVUFETztBQUVkQyxZQUFRLEVBQUUsS0FGSTtBQUdkQyx5QkFBcUIsRUFBRTtBQUhULEdBQWhCOztBQU1BLE1BQUlKLE1BQU0sR0FBRyxHQUFULEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCQyxXQUFPLENBQUNHLHFCQUFSLEdBQWdDLENBQWhDO0FBQ0Q7O0FBQ0QsUUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkJOLE9BQTNCLENBQWxCO0FBRUEsU0FBT0ksU0FBUyxDQUFDRyxNQUFWLENBQWlCUixNQUFNLEdBQUcsR0FBMUIsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vbGliL2Zvcm1hdE1vbmV5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TW9uZXkoYW1vdW50ID0gMCkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gIH07XG5cbiAgaWYgKGFtb3VudCAlIDEwMCA9PT0gMCkge1xuICAgIG9wdGlvbnMubWluaW11bUZyYWN0aW9uRGlnaXRzID0gMDtcbiAgfVxuICBjb25zdCBmb3JtYXR0ZXIgPSBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCBvcHRpb25zKTtcblxuICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChhbW91bnQgLyAxMDApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/formatMoney.js\n");

/***/ }),

/***/ "./pages/order/[id].js":
/*!*****************************!*\
  !*** ./pages/order/[id].js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleOrderPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SingleOrder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SingleOrder */ \"./components/SingleOrder.js\");\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/pages/order/[id].js\";\n\nfunction SingleOrderPage({\n  query\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SingleOrder__WEBPACK_IMPORTED_MODULE_1__.default, {\n    id: query.id\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL3BhZ2VzL29yZGVyL1tpZF0uanM/YmJhOCJdLCJuYW1lcyI6WyJTaW5nbGVPcmRlclBhZ2UiLCJxdWVyeSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLGVBQVQsQ0FBeUI7QUFBRUM7QUFBRixDQUF6QixFQUFvQztBQUNqRCxzQkFBTyw4REFBQyw0REFBRDtBQUFhLE1BQUUsRUFBRUEsS0FBSyxDQUFDQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCIsImZpbGUiOiIuL3BhZ2VzL29yZGVyL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xlT3JkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaW5nbGVPcmRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZU9yZGVyUGFnZSh7IHF1ZXJ5IH0pIHtcbiAgcmV0dXJuIDxTaW5nbGVPcmRlciBpZD17cXVlcnkuaWR9IC8+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/order/[id].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/order/[id].js"); });
module.exports = __webpack_exports__;

})();