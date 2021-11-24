"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Blogs"],{

/***/ "./resources/admin/views/app/blogs/index.js":
/*!**************************************************!*\
  !*** ./resources/admin/views/app/blogs/index.js ***!
  \**************************************************/
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





var BlogsList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | blogsList */ "blogsList").then(__webpack_require__.bind(__webpack_require__, /*! ./blogsList */ "./resources/admin/views/app/blogs/blogsList.js"));
});
var Blog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | Blog */ "Blog").then(__webpack_require__.bind(__webpack_require__, /*! ./Blog */ "./resources/admin/views/app/blogs/Blog.js"));
});
var CategoryList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | CategoryList */ "CategoryList").then(__webpack_require__.bind(__webpack_require__, /*! ./CategoryList */ "./resources/admin/views/app/blogs/CategoryList.js"));
});
var Tags = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | Tags */ "Tags").then(__webpack_require__.bind(__webpack_require__, /*! ./Tags */ "./resources/admin/views/app/blogs/Tags.js"));
});

var Blogs = function Blogs(_ref) {
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
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BlogsList, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/create"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Blog, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/edit/:id"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Blog, _objectSpread({
            edit: true
          }, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/category/list"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CategoryList, _objectSpread({
            edit: true
          }, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/tags/list"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Tags, _objectSpread({
            edit: true
          }, props));
        }
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blogs);

/***/ })

}]);