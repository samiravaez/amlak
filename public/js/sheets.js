"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["sheets"],{

/***/ "./resources/admin/views/app/sheets/index.js":
/*!***************************************************!*\
  !*** ./resources/admin/views/app/sheets/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var SheetList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | Sheetlist */ "Sheetlist").then(__webpack_require__.bind(__webpack_require__, /*! ./Sheet-list */ "./resources/admin/views/app/sheets/Sheet-list.js"));
});
var Sheet = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | Sheet */ "Sheet").then(__webpack_require__.bind(__webpack_require__, /*! ./Sheet */ "./resources/admin/views/app/sheets/Sheet.js"));
});
var Addresses = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | addresses */ "addresses").then(__webpack_require__.bind(__webpack_require__, /*! ./addresses */ "./resources/admin/views/app/sheets/addresses.js"));
});

var Sheets = function Sheets(_ref) {
  var match = _ref.match;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "loading"
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Switch, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
        exact: true,
        from: "".concat(match.url, "/"),
        to: "".concat(match.url, "/list")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/list"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SheetList, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/create"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Sheet, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/edit/:id"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Sheet, _objectSpread({
            edit: true
          }, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/address/:id"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Addresses, _objectSpread({}, props));
        }
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sheets);

/***/ })

}]);