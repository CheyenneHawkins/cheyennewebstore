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
exports.id = "pages/product/[id]";
exports.ids = ["pages/product/[id]"];
exports.modules = {

/***/ "./components/SingleProduct.js":
/*!*************************************!*\
  !*** ./components/SingleProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/components/SingleProduct.js\";\n\n\n\n\nconst ProductStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({\n  displayName: \"SingleProduct__ProductStyles\",\n  componentId: \"sc-9igt3u-0\"\n})([\"display:grid;grid-template-columns:1fr;grid-auto-flow:column;max-width:var(--maxWidth) img{width:100% height:100%;object-fit:contain;}justify-content:center;align-items:top;\"]);\nconst SINGLE_ITEM_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query SINGLE_ITEM_QUERY($id: ID!) {\n    Product(where: { id: $id }) {\n      name\n      price\n      description\n      id\n      tags {\n        name\n      }\n      photo {\n        altText\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n`;\nfunction SingleProduct({\n  id\n}) {\n  // useQuery takes in the query language from apollo, pasted into the variable\n  // SINGLE_ITEM_QUERY, followed by the variable to plug in the id\n  const {\n    data,\n    loading,\n    error\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(SINGLE_ITEM_QUERY, {\n    // prettier autoformats this\n    // equivalent to variables: {id : id} -- first \"id\" is the database field,\n    // second \"id\" is the prop that was passed in to the function\n    variables: {\n      id\n    }\n  }); // console.log(data);\n\n  if (loading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 12\n    }, this);\n  }\n\n  if (error) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__.default, {\n      error: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 12\n    }, this);\n  }\n\n  let tagList = '';\n\n  function getTags() {\n    let theTags = ''; // iterates over the array of tag objects make string\n\n    if (data.Product.tags) {\n      const forLength = data.Product.tags.length;\n\n      for (let i = 0; i < forLength; i++) {\n        theTags = theTags.concat(`${data.Product.tags[i].name}, `);\n      }\n    }\n\n    tagList = theTags;\n  }\n\n  if (data) {\n    getTags();\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductStyles, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n          children: [\"Cheyenne | \", data.Product.name]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: data.Product.photo.image.publicUrlTransformed,\n        alt: data.Product.name // height=\"700\"\n        ,\n        width: \"700\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"details\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: data.Product.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: data.Product.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: \"Tags\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: tagList\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL2NvbXBvbmVudHMvU2luZ2xlUHJvZHVjdC5qcz9kOTFkIl0sIm5hbWVzIjpbIlByb2R1Y3RTdHlsZXMiLCJzdHlsZWQiLCJTSU5HTEVfSVRFTV9RVUVSWSIsImdxbCIsIlNpbmdsZVByb2R1Y3QiLCJpZCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsInRhZ0xpc3QiLCJnZXRUYWdzIiwidGhlVGFncyIsIlByb2R1Y3QiLCJ0YWdzIiwiZm9yTGVuZ3RoIiwibGVuZ3RoIiwiaSIsImNvbmNhdCIsIm5hbWUiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxhQUFhLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHFMQUFuQjtBQWNBLE1BQU1DLGlCQUFpQixHQUFHQywrQ0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FsQkE7QUFvQmUsU0FBU0MsYUFBVCxDQUF1QjtBQUFFQztBQUFGLENBQXZCLEVBQStCO0FBQzVDO0FBQ0E7QUFDQSxRQUFNO0FBQUVDLFFBQUY7QUFBUUMsV0FBUjtBQUFpQkM7QUFBakIsTUFBMkJDLHdEQUFRLENBQUNQLGlCQUFELEVBQW9CO0FBQzNEO0FBQ0E7QUFDQTtBQUNBUSxhQUFTLEVBQUU7QUFBRUw7QUFBRjtBQUpnRCxHQUFwQixDQUF6QyxDQUg0QyxDQVM1Qzs7QUFDQSxNQUFJRSxPQUFKLEVBQWE7QUFDWCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBQ0QsTUFBSUMsS0FBSixFQUFXO0FBQ1Qsd0JBQU8sOERBQUMsa0RBQUQ7QUFBYyxXQUFLLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUNELE1BQUlHLE9BQU8sR0FBRyxFQUFkOztBQUVBLFdBQVNDLE9BQVQsR0FBbUI7QUFDakIsUUFBSUMsT0FBTyxHQUFHLEVBQWQsQ0FEaUIsQ0FFakI7O0FBQ0EsUUFBSVAsSUFBSSxDQUFDUSxPQUFMLENBQWFDLElBQWpCLEVBQXVCO0FBQ3JCLFlBQU1DLFNBQVMsR0FBR1YsSUFBSSxDQUFDUSxPQUFMLENBQWFDLElBQWIsQ0FBa0JFLE1BQXBDOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsU0FBcEIsRUFBK0JFLENBQUMsRUFBaEMsRUFBb0M7QUFDbENMLGVBQU8sR0FBR0EsT0FBTyxDQUFDTSxNQUFSLENBQWdCLEdBQUViLElBQUksQ0FBQ1EsT0FBTCxDQUFhQyxJQUFiLENBQWtCRyxDQUFsQixFQUFxQkUsSUFBSyxJQUE1QyxDQUFWO0FBQ0Q7QUFDRjs7QUFDRFQsV0FBTyxHQUFHRSxPQUFWO0FBQ0Q7O0FBRUQsTUFBSVAsSUFBSixFQUFVO0FBQ1JNLFdBQU87QUFFUCx3QkFDRSw4REFBQyxhQUFEO0FBQUEsOEJBSUUsOERBQUMsa0RBQUQ7QUFBQSwrQkFDRTtBQUFBLG9DQUFtQk4sSUFBSSxDQUFDUSxPQUFMLENBQWFNLElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQVFFO0FBQ0UsV0FBRyxFQUFFZCxJQUFJLENBQUNRLE9BQUwsQ0FBYU8sS0FBYixDQUFtQkMsS0FBbkIsQ0FBeUJDLG9CQURoQztBQUVFLFdBQUcsRUFBRWpCLElBQUksQ0FBQ1EsT0FBTCxDQUFhTSxJQUZwQixDQUdFO0FBSEY7QUFJRSxhQUFLLEVBQUM7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsZUFjRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNFO0FBQUEsb0JBQUtkLElBQUksQ0FBQ1EsT0FBTCxDQUFhTTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxvQkFBSWQsSUFBSSxDQUFDUSxPQUFMLENBQWFVO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQUlFO0FBQUEsb0JBQUliO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQXVCRDtBQUNGIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaW5nbGVQcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xuXG5jb25zdCBQcm9kdWN0U3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIG1heC13aWR0aDogdmFyKC0tbWF4V2lkdGgpXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHRvcDtcbmA7XG5cbmNvbnN0IFNJTkdMRV9JVEVNX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBTSU5HTEVfSVRFTV9RVUVSWSgkaWQ6IElEISkge1xuICAgIFByb2R1Y3Qod2hlcmU6IHsgaWQ6ICRpZCB9KSB7XG4gICAgICBuYW1lXG4gICAgICBwcmljZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGlkXG4gICAgICB0YWdzIHtcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgICAgcGhvdG8ge1xuICAgICAgICBhbHRUZXh0XG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5nbGVQcm9kdWN0KHsgaWQgfSkge1xuICAvLyB1c2VRdWVyeSB0YWtlcyBpbiB0aGUgcXVlcnkgbGFuZ3VhZ2UgZnJvbSBhcG9sbG8sIHBhc3RlZCBpbnRvIHRoZSB2YXJpYWJsZVxuICAvLyBTSU5HTEVfSVRFTV9RVUVSWSwgZm9sbG93ZWQgYnkgdGhlIHZhcmlhYmxlIHRvIHBsdWcgaW4gdGhlIGlkXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9JVEVNX1FVRVJZLCB7XG4gICAgLy8gcHJldHRpZXIgYXV0b2Zvcm1hdHMgdGhpc1xuICAgIC8vIGVxdWl2YWxlbnQgdG8gdmFyaWFibGVzOiB7aWQgOiBpZH0gLS0gZmlyc3QgXCJpZFwiIGlzIHRoZSBkYXRhYmFzZSBmaWVsZCxcbiAgICAvLyBzZWNvbmQgXCJpZFwiIGlzIHRoZSBwcm9wIHRoYXQgd2FzIHBhc3NlZCBpbiB0byB0aGUgZnVuY3Rpb25cbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcbiAgfSk7XG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgfVxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+O1xuICB9XG4gIGxldCB0YWdMaXN0ID0gJyc7XG5cbiAgZnVuY3Rpb24gZ2V0VGFncygpIHtcbiAgICBsZXQgdGhlVGFncyA9ICcnO1xuICAgIC8vIGl0ZXJhdGVzIG92ZXIgdGhlIGFycmF5IG9mIHRhZyBvYmplY3RzIG1ha2Ugc3RyaW5nXG4gICAgaWYgKGRhdGEuUHJvZHVjdC50YWdzKSB7XG4gICAgICBjb25zdCBmb3JMZW5ndGggPSBkYXRhLlByb2R1Y3QudGFncy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoZVRhZ3MgPSB0aGVUYWdzLmNvbmNhdChgJHtkYXRhLlByb2R1Y3QudGFnc1tpXS5uYW1lfSwgYCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRhZ0xpc3QgPSB0aGVUYWdzO1xuICB9XG5cbiAgaWYgKGRhdGEpIHtcbiAgICBnZXRUYWdzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFByb2R1Y3RTdHlsZXM+XG4gICAgICAgIHsvKiBIZWFkIGlzIGltcG9ydGVkIGZyb20gbmV4dCwgYWxsb3dzIHlvdSB0byBpbmplY3QgYW55dGhpbmdcbiAgICBpbnRvIHRoZSBoZWFkIG9mIHRoZSBkb2N1bWVudCwgd2UncmUgdXNpbmcgaXQgdG8gY2hhbmdlIHRoZSB0aXRsZSBvZiB0aGUgcGFnZVxuICAgIHRvIHRoZSBwcm9kdWN0IG5hbWUgKi99XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5DaGV5ZW5uZSB8IHtkYXRhLlByb2R1Y3QubmFtZX08L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17ZGF0YS5Qcm9kdWN0LnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfVxuICAgICAgICAgIGFsdD17ZGF0YS5Qcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgLy8gaGVpZ2h0PVwiNzAwXCJcbiAgICAgICAgICB3aWR0aD1cIjcwMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgIDxoMj57ZGF0YS5Qcm9kdWN0Lm5hbWV9PC9oMj5cbiAgICAgICAgICA8cD57ZGF0YS5Qcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8cD5UYWdzPC9wPlxuICAgICAgICAgIDxwPnt0YWdMaXN0fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1Byb2R1Y3RTdHlsZXM+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SingleProduct.js\n");

/***/ }),

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleProductPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SingleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SingleProduct */ \"./components/SingleProduct.js\");\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/pages/product/[id].js\";\n\nfunction SingleProductPage({\n  query\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SingleProduct__WEBPACK_IMPORTED_MODULE_1__.default, {\n    id: query.id\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL3BhZ2VzL3Byb2R1Y3QvW2lkXS5qcz8zZDk2Il0sIm5hbWVzIjpbIlNpbmdsZVByb2R1Y3RQYWdlIiwicXVlcnkiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxpQkFBVCxDQUEyQjtBQUFFQztBQUFGLENBQTNCLEVBQXNDO0FBQ25ELHNCQUFPLDhEQUFDLDhEQUFEO0FBQWUsTUFBRSxFQUFFQSxLQUFLLENBQUNDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZHVjdC9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaW5nbGVQcm9kdWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZ2xlUHJvZHVjdFBhZ2UoeyBxdWVyeSB9KSB7XG4gIHJldHVybiA8U2luZ2xlUHJvZHVjdCBpZD17cXVlcnkuaWR9IC8+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[id].js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_ErrorMessage_js"], function() { return __webpack_exec__("./pages/product/[id].js"); });
module.exports = __webpack_exports__;

})();