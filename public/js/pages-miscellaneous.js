"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["pages-miscellaneous"],{

/***/ "./resources/admin/views/app/pages/miscellaneous/index.js":
/*!****************************************************************!*\
  !*** ./resources/admin/views/app/pages/miscellaneous/index.js ***!
  \****************************************************************/
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





var Faq = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | miscellaneous-faq */ "miscellaneous-faq").then(__webpack_require__.bind(__webpack_require__, /*! ./faq */ "./resources/admin/views/app/pages/miscellaneous/faq.js"));
});
var Invoice = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | miscellaneous-invoice */ "miscellaneous-invoice").then(__webpack_require__.bind(__webpack_require__, /*! ./invoice */ "./resources/admin/views/app/pages/miscellaneous/invoice.js"));
});
var KnowledgeBase = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | miscellaneous-knowledge-base */ "miscellaneous-knowledge-base").then(__webpack_require__.bind(__webpack_require__, /*! ./knowledge-base */ "./resources/admin/views/app/pages/miscellaneous/knowledge-base.js"));
});
var Mailing = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | miscellaneous-mailing */ "miscellaneous-mailing").then(__webpack_require__.bind(__webpack_require__, /*! ./mailing */ "./resources/admin/views/app/pages/miscellaneous/mailing.js"));
});
var Prices = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | miscellaneous-prices */ "miscellaneous-prices").then(__webpack_require__.bind(__webpack_require__, /*! ./prices */ "./resources/admin/views/app/pages/miscellaneous/prices.js"));
});
var Search = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | miscellaneous-search */ "miscellaneous-search").then(__webpack_require__.bind(__webpack_require__, /*! ./search */ "./resources/admin/views/app/pages/miscellaneous/search.js"));
});

var PagesMiscellaneous = function PagesMiscellaneous(_ref) {
  var match = _ref.match;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "loading"
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Switch, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
        exact: true,
        from: "".concat(match.url, "/"),
        to: "".concat(match.url, "/faq")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/faq"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Faq, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/invoice"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Invoice, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/knowledge-base"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(KnowledgeBase, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/mailing"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Mailing, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/prices"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Prices, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/search"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Search, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
        to: "/error"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PagesMiscellaneous);

/***/ })

}]);