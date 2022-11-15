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
exports.id = "pages/account";
exports.ids = ["pages/account"];
exports.modules = {

/***/ "./components/Account.js":
/*!*******************************!*\
  !*** ./components/Account.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Account; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var waait__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! waait */ \"waait\");\n/* harmony import */ var waait__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(waait__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* harmony import */ var _Success__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Success */ \"./components/Success.js\");\n\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/components/Account.js\";\n\n\n\n\n\n\n\n\n\nconst UPDATE_USER_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n  mutation UPDATE_USER_MUTATION($id: ID!, $name: String, $address: String) {\n    updateUser(id: $id, data: { name: $name, address: $address }) {\n      name\n      address\n    }\n  }\n`;\nfunction Account() {\n  const {\n    0: successState,\n    1: setSuccessState\n  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n  const on = successState ? 'modalon' : '';\n  const user = (0,_User__WEBPACK_IMPORTED_MODULE_8__.useUser)();\n  const {\n    inputs,\n    handleChange,\n    clearForm,\n    resetForm,\n    handleRefresh\n  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_5__.default)(user);\n  const [updateUser, {\n    data,\n    error,\n    loading\n  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(UPDATE_USER_MUTATION);\n\n  if (loading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_7__.default, {\n      onSubmit: async e => {\n        e.preventDefault();\n        const res = await updateUser({\n          variables: {\n            id: user.id,\n            name: inputs.name,\n            address: inputs.address\n          }\n        });\n        await waait__WEBPACK_IMPORTED_MODULE_4___default()(200);\n        setSuccessState(true);\n        await waait__WEBPACK_IMPORTED_MODULE_4___default()(2000);\n        setSuccessState(false);\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          htmlFor: \"name\",\n          children: [\"Name\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            type: \"text\",\n            id: \"name\",\n            name: \"name\",\n            placeholder: \"name\",\n            value: inputs.name,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          htmlFor: \"address\",\n          children: [\"Address\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            type: \"text\",\n            id: \"address\",\n            name: \"address\",\n            placeholder: \"address\",\n            value: inputs.address,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          children: \"Update Account\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Success__WEBPACK_IMPORTED_MODULE_9__.default, {\n      prop: on,\n      word: \"Account\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL2NvbXBvbmVudHMvQWNjb3VudC5qcz9mZGFmIl0sIm5hbWVzIjpbIlVQREFURV9VU0VSX01VVEFUSU9OIiwiZ3FsIiwiQWNjb3VudCIsInN1Y2Nlc3NTdGF0ZSIsInNldFN1Y2Nlc3NTdGF0ZSIsInVzZVN0YXRlIiwib24iLCJ1c2VyIiwidXNlVXNlciIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsImNsZWFyRm9ybSIsInJlc2V0Rm9ybSIsImhhbmRsZVJlZnJlc2giLCJ1c2VGb3JtIiwidXBkYXRlVXNlciIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VNdXRhdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsInZhcmlhYmxlcyIsImlkIiwibmFtZSIsImFkZHJlc3MiLCJ3YWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsb0JBQW9CLEdBQUdDLG9EQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUEE7QUFTZSxTQUFTQyxPQUFULEdBQW1CO0FBQ2hDLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0MsK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBRUEsUUFBTUMsRUFBRSxHQUFHSCxZQUFZLEdBQUcsU0FBSCxHQUFlLEVBQXRDO0FBRUEsUUFBTUksSUFBSSxHQUFHQyw4Q0FBTyxFQUFwQjtBQUVBLFFBQU07QUFBRUMsVUFBRjtBQUFVQyxnQkFBVjtBQUF3QkMsYUFBeEI7QUFBbUNDLGFBQW5DO0FBQThDQztBQUE5QyxNQUNKQyxxREFBTyxDQUFDUCxJQUFELENBRFQ7QUFHQSxRQUFNLENBQUNRLFVBQUQsRUFBYTtBQUFFQyxRQUFGO0FBQVFDLFNBQVI7QUFBZUM7QUFBZixHQUFiLElBQ0pDLDJEQUFXLENBQUNuQixvQkFBRCxDQURiOztBQUdBLE1BQUlrQixPQUFKLEVBQWE7QUFDWCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxpREFBRDtBQUNFLGNBQVEsRUFBRSxNQUFPRSxDQUFQLElBQWE7QUFDckJBLFNBQUMsQ0FBQ0MsY0FBRjtBQUNBLGNBQU1DLEdBQUcsR0FBRyxNQUFNUCxVQUFVLENBQUM7QUFDM0JRLG1CQUFTLEVBQUU7QUFDVEMsY0FBRSxFQUFFakIsSUFBSSxDQUFDaUIsRUFEQTtBQUVUQyxnQkFBSSxFQUFFaEIsTUFBTSxDQUFDZ0IsSUFGSjtBQUdUQyxtQkFBTyxFQUFFakIsTUFBTSxDQUFDaUI7QUFIUDtBQURnQixTQUFELENBQTVCO0FBT0EsY0FBTUMsNENBQUksQ0FBQyxHQUFELENBQVY7QUFDQXZCLHVCQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0EsY0FBTXVCLDRDQUFJLENBQUMsSUFBRCxDQUFWO0FBQ0F2Qix1QkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNELE9BZEg7QUFBQSw2QkFnQkU7QUFBQSxnQ0FDRTtBQUFPLGlCQUFPLEVBQUMsTUFBZjtBQUFBLDBDQUVFO0FBQ0UsZ0JBQUksRUFBQyxNQURQO0FBRUUsY0FBRSxFQUFDLE1BRkw7QUFHRSxnQkFBSSxFQUFDLE1BSFA7QUFJRSx1QkFBVyxFQUFDLE1BSmQ7QUFLRSxpQkFBSyxFQUFFSyxNQUFNLENBQUNnQixJQUxoQjtBQU1FLG9CQUFRLEVBQUVmO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFZRTtBQUFPLGlCQUFPLEVBQUMsU0FBZjtBQUFBLDZDQUVFO0FBQ0UsZ0JBQUksRUFBQyxNQURQO0FBRUUsY0FBRSxFQUFDLFNBRkw7QUFHRSxnQkFBSSxFQUFDLFNBSFA7QUFJRSx1QkFBVyxFQUFDLFNBSmQ7QUFLRSxpQkFBSyxFQUFFRCxNQUFNLENBQUNpQixPQUxoQjtBQU1FLG9CQUFRLEVBQUVoQjtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGLGVBd0JFO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUE2Q0UsOERBQUMsNkNBQUQ7QUFBUyxVQUFJLEVBQUVKLEVBQWY7QUFBbUIsVUFBSSxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3Q0Y7QUFBQSxrQkFERjtBQWlERCIsImZpbGUiOiIuL2NvbXBvbmVudHMvQWNjb3VudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2FpdCBmcm9tICd3YWFpdCc7XG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4vVXNlcic7XG5pbXBvcnQgU3VjY2VzcyBmcm9tICcuL1N1Y2Nlc3MnO1xuXG5jb25zdCBVUERBVEVfVVNFUl9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gVVBEQVRFX1VTRVJfTVVUQVRJT04oJGlkOiBJRCEsICRuYW1lOiBTdHJpbmcsICRhZGRyZXNzOiBTdHJpbmcpIHtcbiAgICB1cGRhdGVVc2VyKGlkOiAkaWQsIGRhdGE6IHsgbmFtZTogJG5hbWUsIGFkZHJlc3M6ICRhZGRyZXNzIH0pIHtcbiAgICAgIG5hbWVcbiAgICAgIGFkZHJlc3NcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY291bnQoKSB7XG4gIGNvbnN0IFtzdWNjZXNzU3RhdGUsIHNldFN1Y2Nlc3NTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb24gPSBzdWNjZXNzU3RhdGUgPyAnbW9kYWxvbicgOiAnJztcblxuICBjb25zdCB1c2VyID0gdXNlVXNlcigpO1xuXG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtLCBoYW5kbGVSZWZyZXNoIH0gPVxuICAgIHVzZUZvcm0odXNlcik7XG5cbiAgY29uc3QgW3VwZGF0ZVVzZXIsIHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfV0gPVxuICAgIHVzZU11dGF0aW9uKFVQREFURV9VU0VSX01VVEFUSU9OKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGb3JtXG4gICAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB1cGRhdGVVc2VyKHtcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgICAgbmFtZTogaW5wdXRzLm5hbWUsXG4gICAgICAgICAgICAgIGFkZHJlc3M6IGlucHV0cy5hZGRyZXNzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhd2FpdCB3YWl0KDIwMCk7XG4gICAgICAgICAgc2V0U3VjY2Vzc1N0YXRlKHRydWUpO1xuICAgICAgICAgIGF3YWl0IHdhaXQoMjAwMCk7XG4gICAgICAgICAgc2V0U3VjY2Vzc1N0YXRlKGZhbHNlKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxuICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZGRyZXNzXCI+XG4gICAgICAgICAgICBBZGRyZXNzXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cImFkZHJlc3NcIlxuICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuYWRkcmVzc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlVwZGF0ZSBBY2NvdW50PC9idXR0b24+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L0Zvcm0+XG4gICAgICB7Lyoge3N1Y2Nlc3NTdGF0ZSAmJiA8U3VjY2VzcyAvPn0gKi99XG4gICAgICA8U3VjY2VzcyBwcm9wPXtvbn0gd29yZD1cIkFjY291bnRcIiAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Account.js\n");

/***/ }),

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AccountPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Account */ \"./components/Account.js\");\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/pages/account.js\";\n\nfunction AccountPage() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Account__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL3BhZ2VzL2FjY291bnQuanM/NzFkNiJdLCJuYW1lcyI6WyJBY2NvdW50UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxXQUFULEdBQXVCO0FBQ3BDLHNCQUFPLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEIiwiZmlsZSI6Ii4vcGFnZXMvYWNjb3VudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY2NvdW50IGZyb20gJy4uL2NvbXBvbmVudHMvQWNjb3VudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY291bnRQYWdlKCkge1xuICByZXR1cm4gPEFjY291bnQgLz47XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/account.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["components_User_js","components_ErrorMessage_js-components_Success_js-components_styles_Form_js"], function() { return __webpack_exec__("./pages/account.js"); });
module.exports = __webpack_exports__;

})();