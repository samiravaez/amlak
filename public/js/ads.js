"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ads"],{

/***/ "./resources/admin/views/app/ads/index.js":
/*!************************************************!*\
  !*** ./resources/admin/views/app/ads/index.js ***!
  \************************************************/
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





var Add = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | add-ads */ "add-ads").then(__webpack_require__.bind(__webpack_require__, /*! ./add-ads */ "./resources/admin/views/app/ads/add-ads.js"));
});
var All = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | all-ads */ "all-ads").then(__webpack_require__.bind(__webpack_require__, /*! ./all-ads */ "./resources/admin/views/app/ads/all-ads.js"));
});
var Archive = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | archive */ "archive").then(__webpack_require__.bind(__webpack_require__, /*! ./archive */ "./resources/admin/views/app/ads/archive.js"));
});
var MyAdd = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | my-ads */ "my-ads").then(__webpack_require__.bind(__webpack_require__, /*! ./my-ads */ "./resources/admin/views/app/ads/my-ads.js"));
});
var Trash = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | trash */ "trash").then(__webpack_require__.bind(__webpack_require__, /*! ./trash */ "./resources/admin/views/app/ads/trash.js"));
});
var Waiting = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | unapproved-ads */ "unapproved-ads").then(__webpack_require__.bind(__webpack_require__, /*! ./unapproved-ads */ "./resources/admin/views/app/ads/unapproved-ads.js"));
});

var Ads = function Ads(_ref) {
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
        path: "".concat(match.url, "/add"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Add, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/all"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(All, _objectSpread({}, props));
        },
        isExact: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/archive"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Archive, _objectSpread({}, props));
        },
        isExact: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/myAdd"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MyAdd, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/trash"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Trash, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/waiting"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Waiting, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
        to: "/error"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ads);

/***/ })

}]);