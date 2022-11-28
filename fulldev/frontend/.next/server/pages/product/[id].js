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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddToCart */ \"./components/AddToCart.js\");\n\nvar _jsxFileName = \"/Users/robhawkins/repos/cheyennewebstore/fulldev/frontend/components/SingleProduct.js\";\n\n\n\n\n\n\nconst ProductStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({\n  displayName: \"SingleProduct__ProductStyles\",\n  componentId: \"sc-9igt3u-0\"\n})([\"display:grid;grid-template-columns:1fr;grid-auto-flow:column;max-width:var(--maxWidth);img{margin-top:100px;width:100% height:100%;object-fit:contain;}justify-content:center;align-items:top;\"]);\nconst ProductDescription = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({\n  displayName: \"SingleProduct__ProductDescription\",\n  componentId: \"sc-9igt3u-1\"\n})([\"margin-left:50px;\"]);\nconst SINGLE_ITEM_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query SINGLE_ITEM_QUERY($id: ID!) {\n    Product(where: { id: $id }) {\n      name\n      price\n      description\n      id\n      tags {\n        name\n      }\n      photo {\n        altText\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n`;\nfunction SingleProduct({\n  id\n}) {\n  // useQuery takes in the query language from apollo, pasted into the variable\n  // SINGLE_ITEM_QUERY, followed by the variable to plug in the id\n  const {\n    data,\n    loading,\n    error\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(SINGLE_ITEM_QUERY, {\n    // prettier autoformats this\n    // equivalent to variables: {id : id} -- first \"id\" is the database field,\n    // second \"id\" is the prop that was passed in to the function\n    variables: {\n      id\n    }\n  }); // console.log(data);\n\n  if (loading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 12\n    }, this);\n  }\n\n  if (error) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__.default, {\n      error: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 12\n    }, this);\n  }\n\n  let tagList = '';\n\n  function getTags() {\n    let theTags = ''; // iterates over the array of tag objects make string\n\n    if (data.Product.tags) {\n      const forLength = data.Product.tags.length;\n\n      for (let i = 0; i < forLength; i++) {\n        theTags = theTags.concat(`${data.Product.tags[i].name}, `);\n      }\n    }\n\n    tagList = theTags;\n  }\n\n  if (data) {\n    getTags();\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductStyles, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n          children: [\"Cheyenne | \", data.Product.name]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: data.Product.photo.image.publicUrlTransformed,\n        alt: data.Product.name // height=\"700\"\n        ,\n        width: \"700\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductDescription, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: data.Product.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n            children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__.default)(data.Product.price)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: data.Product.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AddToCart__WEBPACK_IMPORTED_MODULE_6__.default, {\n          id: data.Product.id\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: \"Tags\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: tagList\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGV5ZW5uZS13ZWJzdG9yZS1mcm9udGVuZC8uL2NvbXBvbmVudHMvU2luZ2xlUHJvZHVjdC5qcz9kOTFkIl0sIm5hbWVzIjpbIlByb2R1Y3RTdHlsZXMiLCJzdHlsZWQiLCJQcm9kdWN0RGVzY3JpcHRpb24iLCJTSU5HTEVfSVRFTV9RVUVSWSIsImdxbCIsIlNpbmdsZVByb2R1Y3QiLCJpZCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsInRhZ0xpc3QiLCJnZXRUYWdzIiwidGhlVGFncyIsIlByb2R1Y3QiLCJ0YWdzIiwiZm9yTGVuZ3RoIiwibGVuZ3RoIiwiaSIsImNvbmNhdCIsIm5hbWUiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJmb3JtYXRNb25leSIsInByaWNlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsYUFBYSxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxzTUFBbkI7QUFlQSxNQUFNQyxrQkFBa0IsR0FBR0QsdUVBQUg7QUFBQTtBQUFBO0FBQUEseUJBQXhCO0FBSUEsTUFBTUUsaUJBQWlCLEdBQUdDLCtDQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWxCQTtBQW9CZSxTQUFTQyxhQUFULENBQXVCO0FBQUVDO0FBQUYsQ0FBdkIsRUFBK0I7QUFDNUM7QUFDQTtBQUNBLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxXQUFSO0FBQWlCQztBQUFqQixNQUEyQkMsd0RBQVEsQ0FBQ1AsaUJBQUQsRUFBb0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0FRLGFBQVMsRUFBRTtBQUFFTDtBQUFGO0FBSmdELEdBQXBCLENBQXpDLENBSDRDLENBUzVDOztBQUNBLE1BQUlFLE9BQUosRUFBYTtBQUNYLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFDRCxNQUFJQyxLQUFKLEVBQVc7QUFDVCx3QkFBTyw4REFBQyxrREFBRDtBQUFjLFdBQUssRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBQ0QsTUFBSUcsT0FBTyxHQUFHLEVBQWQ7O0FBRUEsV0FBU0MsT0FBVCxHQUFtQjtBQUNqQixRQUFJQyxPQUFPLEdBQUcsRUFBZCxDQURpQixDQUVqQjs7QUFDQSxRQUFJUCxJQUFJLENBQUNRLE9BQUwsQ0FBYUMsSUFBakIsRUFBdUI7QUFDckIsWUFBTUMsU0FBUyxHQUFHVixJQUFJLENBQUNRLE9BQUwsQ0FBYUMsSUFBYixDQUFrQkUsTUFBcEM7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixTQUFwQixFQUErQkUsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQ0wsZUFBTyxHQUFHQSxPQUFPLENBQUNNLE1BQVIsQ0FBZ0IsR0FBRWIsSUFBSSxDQUFDUSxPQUFMLENBQWFDLElBQWIsQ0FBa0JHLENBQWxCLEVBQXFCRSxJQUFLLElBQTVDLENBQVY7QUFDRDtBQUNGOztBQUNEVCxXQUFPLEdBQUdFLE9BQVY7QUFDRDs7QUFFRCxNQUFJUCxJQUFKLEVBQVU7QUFDUk0sV0FBTztBQUVQLHdCQUNFLDhEQUFDLGFBQUQ7QUFBQSw4QkFJRSw4REFBQyxrREFBRDtBQUFBLCtCQUNFO0FBQUEsb0NBQW1CTixJQUFJLENBQUNRLE9BQUwsQ0FBYU0sSUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBUUU7QUFDRSxXQUFHLEVBQUVkLElBQUksQ0FBQ1EsT0FBTCxDQUFhTyxLQUFiLENBQW1CQyxLQUFuQixDQUF5QkMsb0JBRGhDO0FBRUUsV0FBRyxFQUFFakIsSUFBSSxDQUFDUSxPQUFMLENBQWFNLElBRnBCLENBR0U7QUFIRjtBQUlFLGFBQUssRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQWNFLDhEQUFDLGtCQUFEO0FBQUEsZ0NBRUU7QUFBQSxvQkFBS2QsSUFBSSxDQUFDUSxPQUFMLENBQWFNO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLGlDQUNFO0FBQUEsc0JBQUlJLHlEQUFXLENBQUNsQixJQUFJLENBQUNRLE9BQUwsQ0FBYVcsS0FBZDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBTUU7QUFBQSxvQkFBSW5CLElBQUksQ0FBQ1EsT0FBTCxDQUFhWTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLGVBT0UsOERBQUMsK0NBQUQ7QUFBVyxZQUFFLEVBQUVwQixJQUFJLENBQUNRLE9BQUwsQ0FBYVQ7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGLGVBU0U7QUFBQSxvQkFBSU07QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBNkJEO0FBQ0YiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpbmdsZVByb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSAnLi4vbGliL2Zvcm1hdE1vbmV5JztcbmltcG9ydCBBZGRUb0NhcnQgZnJvbSAnLi9BZGRUb0NhcnQnO1xuXG5jb25zdCBQcm9kdWN0U3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIG1heC13aWR0aDogdmFyKC0tbWF4V2lkdGgpO1xuICBpbWcge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDAlXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiB0b3A7XG5gO1xuXG5jb25zdCBQcm9kdWN0RGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogNTBweDtcbmA7XG5cbmNvbnN0IFNJTkdMRV9JVEVNX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBTSU5HTEVfSVRFTV9RVUVSWSgkaWQ6IElEISkge1xuICAgIFByb2R1Y3Qod2hlcmU6IHsgaWQ6ICRpZCB9KSB7XG4gICAgICBuYW1lXG4gICAgICBwcmljZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGlkXG4gICAgICB0YWdzIHtcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgICAgcGhvdG8ge1xuICAgICAgICBhbHRUZXh0XG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5nbGVQcm9kdWN0KHsgaWQgfSkge1xuICAvLyB1c2VRdWVyeSB0YWtlcyBpbiB0aGUgcXVlcnkgbGFuZ3VhZ2UgZnJvbSBhcG9sbG8sIHBhc3RlZCBpbnRvIHRoZSB2YXJpYWJsZVxuICAvLyBTSU5HTEVfSVRFTV9RVUVSWSwgZm9sbG93ZWQgYnkgdGhlIHZhcmlhYmxlIHRvIHBsdWcgaW4gdGhlIGlkXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9JVEVNX1FVRVJZLCB7XG4gICAgLy8gcHJldHRpZXIgYXV0b2Zvcm1hdHMgdGhpc1xuICAgIC8vIGVxdWl2YWxlbnQgdG8gdmFyaWFibGVzOiB7aWQgOiBpZH0gLS0gZmlyc3QgXCJpZFwiIGlzIHRoZSBkYXRhYmFzZSBmaWVsZCxcbiAgICAvLyBzZWNvbmQgXCJpZFwiIGlzIHRoZSBwcm9wIHRoYXQgd2FzIHBhc3NlZCBpbiB0byB0aGUgZnVuY3Rpb25cbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcbiAgfSk7XG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgfVxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+O1xuICB9XG4gIGxldCB0YWdMaXN0ID0gJyc7XG5cbiAgZnVuY3Rpb24gZ2V0VGFncygpIHtcbiAgICBsZXQgdGhlVGFncyA9ICcnO1xuICAgIC8vIGl0ZXJhdGVzIG92ZXIgdGhlIGFycmF5IG9mIHRhZyBvYmplY3RzIG1ha2Ugc3RyaW5nXG4gICAgaWYgKGRhdGEuUHJvZHVjdC50YWdzKSB7XG4gICAgICBjb25zdCBmb3JMZW5ndGggPSBkYXRhLlByb2R1Y3QudGFncy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoZVRhZ3MgPSB0aGVUYWdzLmNvbmNhdChgJHtkYXRhLlByb2R1Y3QudGFnc1tpXS5uYW1lfSwgYCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRhZ0xpc3QgPSB0aGVUYWdzO1xuICB9XG5cbiAgaWYgKGRhdGEpIHtcbiAgICBnZXRUYWdzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFByb2R1Y3RTdHlsZXM+XG4gICAgICAgIHsvKiBIZWFkIGlzIGltcG9ydGVkIGZyb20gbmV4dCwgYWxsb3dzIHlvdSB0byBpbmplY3QgYW55dGhpbmdcbiAgICBpbnRvIHRoZSBoZWFkIG9mIHRoZSBkb2N1bWVudCwgd2UncmUgdXNpbmcgaXQgdG8gY2hhbmdlIHRoZSB0aXRsZSBvZiB0aGUgcGFnZVxuICAgIHRvIHRoZSBwcm9kdWN0IG5hbWUgKi99XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5DaGV5ZW5uZSB8IHtkYXRhLlByb2R1Y3QubmFtZX08L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17ZGF0YS5Qcm9kdWN0LnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfVxuICAgICAgICAgIGFsdD17ZGF0YS5Qcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgLy8gaGVpZ2h0PVwiNzAwXCJcbiAgICAgICAgICB3aWR0aD1cIjcwMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9kdWN0RGVzY3JpcHRpb24+XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPiAqL31cbiAgICAgICAgICA8aDI+e2RhdGEuUHJvZHVjdC5uYW1lfTwvaDI+XG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgPGk+e2Zvcm1hdE1vbmV5KGRhdGEuUHJvZHVjdC5wcmljZSl9PC9pPlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPHA+e2RhdGEuUHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPEFkZFRvQ2FydCBpZD17ZGF0YS5Qcm9kdWN0LmlkfSAvPlxuICAgICAgICAgIDxwPlRhZ3M8L3A+XG4gICAgICAgICAgPHA+e3RhZ0xpc3R9PC9wPlxuICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgIDwvUHJvZHVjdERlc2NyaXB0aW9uPlxuICAgICAgPC9Qcm9kdWN0U3R5bGVzPlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SingleProduct.js\n");

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

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["components_User_js-lib_cartState_js-lib_formatMoney_js","components_AddToCart_js-components_ErrorMessage_js"], function() { return __webpack_exec__("./pages/product/[id].js"); });
module.exports = __webpack_exports__;

})();