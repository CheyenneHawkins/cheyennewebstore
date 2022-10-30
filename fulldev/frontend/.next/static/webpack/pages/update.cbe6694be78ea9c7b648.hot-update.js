/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/update",{

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UpdateProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/components/UpdateProduct.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = (0,_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)([\"\\n  mutation UPDATE_PRODUCT_MUTATION(\\n    $id: ID!\\n    $name: String\\n    $description: String\\n    $price: Int\\n  ) {\\n    updateProduct(\\n      id: $id\\n      data: { id: $id, name: $name, description: $description, price: $price }\\n    ) {\\n      id\\n      name\\n      description\\n      price\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)([\"\\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\\n    Product(where: { id: $id }) {\\n      id\\n      name\\n      description\\n      price\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar SINGLE_PRODUCT_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_6__.default)(_templateObject());\nvar UPDATE_PRODUCT_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_6__.default)(_templateObject2());\nfunction UpdateProduct(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  // get existing product\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(SINGLE_PRODUCT_QUERY, {\n    variables: {\n      id: id\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading; // console.log(data.Product.name);\n  // console.log(data.Product.description);\n  // console.log(data.Product.name);\n  // get mutation to update product\n  // since we've already used the variables data, error, and loading, we can rename them as we declare them here\n\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(UPDATE_PRODUCT_MUTATION, {\n    variables: {\n      id: id\n    }\n  }),\n      _useMutation2 = (0,_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMutation, 2),\n      updateProduct = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      updateData = _useMutation2$.data,\n      updateError = _useMutation2$.error,\n      loadingError = _useMutation2$.loading;\n\n  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_3__.default)({\n    name: 'Cool Stuff',\n    price: 9898,\n    description: 'WOWOWOWOWOWOOWO'\n  }),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      clearForm = _useForm.clearForm,\n      resetForm = _useForm.resetForm; // make form to handle updates\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_5__.default // onSubmit={async (e) => {\n    //   e.preventDefault();\n    //   await createProduct();\n    //   clearForm();\n    //   Router.push({\n    //     pathname: `/product/${data}`,\n    //   });\n    // }}\n    , {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__.default, {\n        error: error\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n        disabled: Updateloading,\n        \"aria-busy\": Updateloading,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          htmlFor: \"image\",\n          children: [\"Image\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            required: true,\n            onInvalid: function onInvalid() {\n              console.log('idiot.');\n            },\n            type: \"file\",\n            id: \"image\",\n            name: \"image\",\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          htmlFor: \"name\",\n          children: [\"Name\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            type: \"text\",\n            id: \"name\",\n            name: \"name\",\n            placeholder: \"name\",\n            value: inputs.name,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          htmlFor: \"price\",\n          children: [\"Price\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            type: \"number\",\n            id: \"price\",\n            name: \"price\",\n            placeholder: \"price\",\n            value: inputs.price,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          htmlFor: \"description\",\n          children: [\"Description\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n            id: \"description\",\n            name: \"description\",\n            placeholder: \"description\",\n            value: inputs.description,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          children: \"Update Product\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 5\n  }, this);\n}\n\n_s(UpdateProduct, \"8kqsAp+GIdYZfKu5pZZQ1IOFrCE=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery, _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation, _lib_useForm__WEBPACK_IMPORTED_MODULE_3__.default];\n});\n\n_c = UpdateProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpdateProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzPzllOGUiXSwibmFtZXMiOlsiU0lOR0xFX1BST0RVQ1RfUVVFUlkiLCJncWwiLCJVUERBVEVfUFJPRFVDVF9NVVRBVElPTiIsIlVwZGF0ZVByb2R1Y3QiLCJpZCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInVzZU11dGF0aW9uIiwidXBkYXRlUHJvZHVjdCIsInVwZGF0ZURhdGEiLCJ1cGRhdGVFcnJvciIsImxvYWRpbmdFcnJvciIsInVzZUZvcm0iLCJuYW1lIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsImNsZWFyRm9ybSIsInJlc2V0Rm9ybSIsIlVwZGF0ZWxvYWRpbmciLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxvQkFBb0IsR0FBR0Msb0RBQUgsbUJBQTFCO0FBV0EsSUFBTUMsdUJBQXVCLEdBQUdELG9EQUFILG9CQUE3QjtBQW1CZSxTQUFTRSxhQUFULE9BQStCO0FBQUE7O0FBQUEsTUFBTkMsRUFBTSxRQUFOQSxFQUFNOztBQUM1QztBQUQ0QyxrQkFFWEMsd0RBQVEsQ0FBQ0wsb0JBQUQsRUFBdUI7QUFDOURNLGFBQVMsRUFBRTtBQUFFRixRQUFFLEVBQUZBO0FBQUY7QUFEbUQsR0FBdkIsQ0FGRztBQUFBLE1BRXBDRyxJQUZvQyxhQUVwQ0EsSUFGb0M7QUFBQSxNQUU5QkMsS0FGOEIsYUFFOUJBLEtBRjhCO0FBQUEsTUFFdkJDLE9BRnVCLGFBRXZCQSxPQUZ1QixFQU01QztBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7QUFaNEMscUJBZ0J4Q0MsMkRBQVcsQ0FBQ1IsdUJBQUQsRUFBMEI7QUFBRUksYUFBUyxFQUFFO0FBQUVGLFFBQUUsRUFB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OlsiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xuXG5jb25zdCBTSU5HTEVfUFJPRFVDVF9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgU0lOR0xFX1BST0RVQ1RfUVVFUlkoJGlkOiBJRCEpIHtcbiAgICBQcm9kdWN0KHdoZXJlOiB7IGlkOiAkaWQgfSkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBwcmljZVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIFVQREFURV9QUk9EVUNUX01VVEFUSU9OKFxuICAgICRpZDogSUQhXG4gICAgJG5hbWU6IFN0cmluZ1xuICAgICRkZXNjcmlwdGlvbjogU3RyaW5nXG4gICAgJHByaWNlOiBJbnRcbiAgKSB7XG4gICAgdXBkYXRlUHJvZHVjdChcbiAgICAgIGlkOiAkaWRcbiAgICAgIGRhdGE6IHsgaWQ6ICRpZCwgbmFtZTogJG5hbWUsIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb24sIHByaWNlOiAkcHJpY2UgfVxuICAgICkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBwcmljZVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBkYXRlUHJvZHVjdCh7IGlkIH0pIHtcbiAgLy8gZ2V0IGV4aXN0aW5nIHByb2R1Y3RcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoU0lOR0xFX1BST0RVQ1RfUVVFUlksIHtcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcbiAgfSk7XG5cbiAgLy8gY29uc29sZS5sb2coZGF0YS5Qcm9kdWN0Lm5hbWUpO1xuICAvLyBjb25zb2xlLmxvZyhkYXRhLlByb2R1Y3QuZGVzY3JpcHRpb24pO1xuICAvLyBjb25zb2xlLmxvZyhkYXRhLlByb2R1Y3QubmFtZSk7XG5cbiAgLy8gZ2V0IG11dGF0aW9uIHRvIHVwZGF0ZSBwcm9kdWN0XG5cbiAgLy8gc2luY2Ugd2UndmUgYWxyZWFkeSB1c2VkIHRoZSB2YXJpYWJsZXMgZGF0YSwgZXJyb3IsIGFuZCBsb2FkaW5nLCB3ZSBjYW4gcmVuYW1lIHRoZW0gYXMgd2UgZGVjbGFyZSB0aGVtIGhlcmVcbiAgY29uc3QgW1xuICAgIHVwZGF0ZVByb2R1Y3QsXG4gICAgeyBkYXRhOiB1cGRhdGVEYXRhLCBlcnJvcjogdXBkYXRlRXJyb3IsIGxvYWRpbmc6IGxvYWRpbmdFcnJvciB9LFxuICBdID0gdXNlTXV0YXRpb24oVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04sIHsgdmFyaWFibGVzOiB7IGlkIH0gfSk7XG5cbiAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgY2xlYXJGb3JtLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xuICAgIG5hbWU6ICdDb29sIFN0dWZmJyxcbiAgICBwcmljZTogOTg5OCxcbiAgICBkZXNjcmlwdGlvbjogJ1dPV09XT1dPV09XT09XTycsXG4gIH0pO1xuXG4gIC8vIG1ha2UgZm9ybSB0byBoYW5kbGUgdXBkYXRlc1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Rm9ybVxuICAgICAgLy8gb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XG4gICAgICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vICAgYXdhaXQgY3JlYXRlUHJvZHVjdCgpO1xuICAgICAgLy8gICBjbGVhckZvcm0oKTtcbiAgICAgIC8vICAgUm91dGVyLnB1c2goe1xuICAgICAgLy8gICAgIHBhdGhuYW1lOiBgL3Byb2R1Y3QvJHtkYXRhfWAsXG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8gfX1cbiAgICAgID5cbiAgICAgICAgPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17VXBkYXRlbG9hZGluZ30gYXJpYS1idXN5PXtVcGRhdGVsb2FkaW5nfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+XG4gICAgICAgICAgICBJbWFnZVxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIG9uSW52YWxpZD17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpZGlvdC4nKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICBpZD1cImltYWdlXCJcbiAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cbiAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJuYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cbiAgICAgICAgICAgIFByaWNlXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIGlkPVwicHJpY2VcIlxuICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInByaWNlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wcmljZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlVwZGF0ZSBQcm9kdWN0PC9idXR0b24+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UpdateProduct.js\n");

/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useForm; }\n/* harmony export */ });\n/* harmony import */ var _Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction useForm() {\n  _s();\n\n  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initial),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  function handleChange(e) {\n    var _e$target = e.target,\n        value = _e$target.value,\n        name = _e$target.name,\n        type = _e$target.type; // all html input is delivered as string\n    // convert to number\n\n    if (type === 'number') {\n      value = parseInt(value);\n      console.log(typeof value);\n    }\n\n    if (type === 'file') {\n      var _e$target$files = (0,_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(e.target.files, 1);\n\n      value = _e$target$files[0];\n    }\n\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, (0,_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, value)));\n  }\n\n  function resetForm() {\n    setInputs(initial);\n  }\n\n  function clearForm() {\n    var blankState = Object.fromEntries(Object.entries(inputs).map(function (_ref) {\n      var _ref2 = (0,_Users_robhawkins_repos_cheyennewebstore_fulldev_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, 2),\n          key = _ref2[0],\n          value = _ref2[1];\n\n      return [key, ''];\n    }));\n    setInputs(blankState);\n  }\n\n  return {\n    inputs: inputs,\n    handleChange: handleChange,\n    resetForm: resetForm,\n    clearForm: clearForm\n  };\n}\n\n_s(useForm, \"0tjT+aoDVbAe0wsQZsq9AKLCE20=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanM/ZjBlMiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiaW5pdGlhbCIsInVzZVN0YXRlIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInR5cGUiLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJmaWxlcyIsInJlc2V0Rm9ybSIsImNsZWFyRm9ybSIsImJsYW5rU3RhdGUiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBK0I7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQUEsa0JBQ2hCQywrQ0FBUSxDQUFDRCxPQUFELENBRFE7QUFBQSxNQUNyQ0UsTUFEcUM7QUFBQSxNQUM3QkMsU0FENkI7O0FBRzVDLFdBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQUEsb0JBQ0tBLENBQUMsQ0FBQ0MsTUFEUDtBQUFBLFFBQ2pCQyxLQURpQixhQUNqQkEsS0FEaUI7QUFBQSxRQUNWQyxJQURVLGFBQ1ZBLElBRFU7QUFBQSxRQUNKQyxJQURJLGFBQ0pBLElBREksRUFHdkI7QUFDQTs7QUFDQSxRQUFJQSxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQkYsV0FBSyxHQUFHRyxRQUFRLENBQUNILEtBQUQsQ0FBaEI7QUFDQUksYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBT0wsS0FBbkI7QUFDRDs7QUFFRCxRQUFJRSxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUFBLHNNQUNUSixDQUFDLENBQUNDLE1BQUYsQ0FBU08sS0FEQTs7QUFDbEJOLFdBRGtCO0FBRXBCOztBQUNESixhQUFTLGlDQUNKRCxNQURJLHNMQUVOTSxJQUZNLEVBRUNELEtBRkQsR0FBVDtBQUlEOztBQUVELFdBQVNPLFNBQVQsR0FBcUI7QUFDbkJYLGFBQVMsQ0FBQ0gsT0FBRCxDQUFUO0FBQ0Q7O0FBRUQsV0FBU2UsU0FBVCxHQUFxQjtBQUNuQixRQUFNQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxDQUNqQkQsTUFBTSxDQUFDRSxPQUFQLENBQWVqQixNQUFmLEVBQXVCa0IsR0FBdkIsQ0FBMkI7QUFBQTtBQUFBLFVBQUVDLEdBQUY7QUFBQSxVQUFPZCxLQUFQOztBQUFBLGFBQWtCLENBQUNjLEdBQUQsRUFBTSxFQUFOLENBQWxCO0FBQUEsS0FBM0IsQ0FEaUIsQ0FBbkI7QUFHQWxCLGFBQVMsQ0FBQ2EsVUFBRCxDQUFUO0FBQ0Q7O0FBRUQsU0FBTztBQUNMZCxVQUFNLEVBQU5BLE1BREs7QUFFTEUsZ0JBQVksRUFBWkEsWUFGSztBQUdMVSxhQUFTLEVBQVRBLFNBSEs7QUFJTEMsYUFBUyxFQUFUQTtBQUpLLEdBQVA7QUFNRDs7R0F2Q3VCaEIsTyIsImZpbGUiOiIuL2xpYi91c2VGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbnVtYmVyIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9ybShpbml0aWFsID0ge30pIHtcbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKGluaXRpYWwpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgbGV0IHsgdmFsdWUsIG5hbWUsIHR5cGUgfSA9IGUudGFyZ2V0O1xuXG4gICAgLy8gYWxsIGh0bWwgaW5wdXQgaXMgZGVsaXZlcmVkIGFzIHN0cmluZ1xuICAgIC8vIGNvbnZlcnQgdG8gbnVtYmVyXG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdmaWxlJykge1xuICAgICAgW3ZhbHVlXSA9IGUudGFyZ2V0LmZpbGVzO1xuICAgIH1cbiAgICBzZXRJbnB1dHMoe1xuICAgICAgLi4uaW5wdXRzLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICBzZXRJbnB1dHMoaW5pdGlhbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckZvcm0oKSB7XG4gICAgY29uc3QgYmxhbmtTdGF0ZSA9IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgIE9iamVjdC5lbnRyaWVzKGlucHV0cykubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksICcnXSlcbiAgICApO1xuICAgIHNldElucHV0cyhibGFua1N0YXRlKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5wdXRzLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICByZXNldEZvcm0sXG4gICAgY2xlYXJGb3JtLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/useForm.js\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _defineProperty; }\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzPzcyOTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\n");

/***/ })

});