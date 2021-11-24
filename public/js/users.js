"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["users"],{

/***/ "./resources/admin/views/app/users/index.js":
/*!**************************************************!*\
  !*** ./resources/admin/views/app/users/index.js ***!
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





var AllUsers = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | allusers */ "allusers").then(__webpack_require__.bind(__webpack_require__, /*! ./all-users */ "./resources/admin/views/app/users/all-users.js"));
});
var RoleManagement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | rolemanagement */ "rolemanagement").then(__webpack_require__.bind(__webpack_require__, /*! ./role-management */ "./resources/admin/views/app/users/role-management.js"));
});
var AddRoles = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | addRoles */ "addRoles").then(__webpack_require__.bind(__webpack_require__, /*! ./add-roles */ "./resources/admin/views/app/users/add-roles.js"));
});
var AccessLevel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | accessLevel */ "accessLevel").then(__webpack_require__.bind(__webpack_require__, /*! ./access-level */ "./resources/admin/views/app/users/access-level.js"));
});
var AddAccessLevel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | addAccessLevel */ "addAccessLevel").then(__webpack_require__.bind(__webpack_require__, /*! ./add-access-level */ "./resources/admin/views/app/users/add-access-level.js"));
});
var AddCustomer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | addCustomer */ "addCustomer").then(__webpack_require__.bind(__webpack_require__, /*! ./add-customers */ "./resources/admin/views/app/users/add-customers.js"));
});

var Users = function Users(_ref) {
  var match = _ref.match;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "loading"
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Switch, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/all"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AllUsers, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/rolemanagement"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RoleManagement, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/addrole"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AddRoles, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/access"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AccessLevel, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/addaccess"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AddAccessLevel, _objectSpread({}, props));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        path: "".concat(match.url, "/addcustomer"),
        render: function render(props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AddCustomer, _objectSpread({}, props));
        }
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);

/***/ })

}]);