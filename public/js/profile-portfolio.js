(self["webpackChunk"] = self["webpackChunk"] || []).push([["profile-portfolio"],{

/***/ "./resources/admin/components/cards/ThumbnailImage.js":
/*!************************************************************!*\
  !*** ./resources/admin/components/cards/ThumbnailImage.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var ThumbnailImage = function ThumbnailImage(_ref) {
  var alt = _ref.alt,
      src = _ref.src,
      className = _ref.className,
      rounded = _ref.rounded,
      small = _ref.small;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
    alt: alt,
    src: src,
    className: "img-thumbnail list-thumbnail align-self-center ".concat(className, "  ").concat(classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'rounded-circle': rounded,
      small: small
    }))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(ThumbnailImage));

/***/ }),

/***/ "./resources/admin/components/cards/UserCardBasic.js":
/*!***********************************************************!*\
  !*** ./resources/admin/components/cards/UserCardBasic.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardSubtitle.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardText.js");
/* harmony import */ var _ThumbnailImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThumbnailImage */ "./resources/admin/components/cards/ThumbnailImage.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var UserCardBasic = function UserCardBasic(_ref) {
  var _ref$link = _ref.link,
      link = _ref$link === void 0 ? '#' : _ref$link,
      data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "d-flex flex-row mb-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
      to: link,
      className: "d-flex",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ThumbnailImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
        rounded: true,
        small: true,
        src: data.thumb,
        alt: "profile",
        className: "m-4"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: " d-flex flex-grow-1 min-width-zero",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: " pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "min-width-zero",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
            to: link,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
              className: "truncate mb-1",
              children: data.name
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "text-muted text-small mb-2",
            children: data.status
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(UserCardBasic));

/***/ }),

/***/ "./resources/admin/components/common/RecentPost.js":
/*!*********************************************************!*\
  !*** ./resources/admin/components/common/RecentPost.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/injectIntl.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Badge.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var RecentPost = function RecentPost(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "d-flex flex-row mb-3",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
      className: "d-block position-relative",
      to: "#",
      location: {},
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        src: data.thumb,
        alt: "thumbnail",
        className: "list-thumbnail border-0"
      }), data.badge !== '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: "primary",
        pill: true,
        className: "position-absolute badge-top-left",
        children: data.badge
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "pl-3 pt-2 pr-2 pb-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
        className: "d-block position-relative",
        to: "#",
        location: {},
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "list-item-heading",
          children: data.title
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_4__["default"])(RecentPost));

/***/ }),

/***/ "./resources/admin/components/pages/SingleLightbox.js":
/*!************************************************************!*\
  !*** ./resources/admin/components/pages/SingleLightbox.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-lightbox */ "./node_modules/react-image-lightbox/dist/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var SingleLightbox = function SingleLightbox(_ref) {
  var thumb = _ref.thumb,
      className = _ref.className,
      large = _ref.large;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
      to: "#",
      location: {},
      onClick: function onClick() {
        return setIsOpen(true);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: thumb,
        alt: "thumbnail",
        className: className
      })
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_image_lightbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
      mainSrc: large,
      onCloseRequest: function onCloseRequest() {
        return setIsOpen(false);
      }
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleLightbox);

/***/ }),

/***/ "./resources/admin/containers/navs/Breadcrumb.js":
/*!*******************************************************!*\
  !*** ./resources/admin/containers/navs/Breadcrumb.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Breadcrumb.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/BreadcrumbItem.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/IntlMessages */ "./resources/admin/helpers/IntlMessages.js");
/* harmony import */ var _constants_defaultValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/defaultValues */ "./resources/admin/constants/defaultValues.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable react/no-array-index-key */









var getMenuTitle = function getMenuTitle(sub) {
  if ("/".concat(sub) === _constants_defaultValues__WEBPACK_IMPORTED_MODULE_2__.adminRoot) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "menu.home"
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "menu.".concat(sub)
  });
};

var getUrl = function getUrl(path, sub) {
  return path.split(sub)[0] + sub;
};

var BreadcrumbContainer = function BreadcrumbContainer(_ref) {
  var heading = _ref.heading,
      match = _ref.match;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [heading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: heading
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BreadcrumbItems, {
      match: match
    })]
  });
};

var BreadcrumbItems = function BreadcrumbItems(_ref2) {
  var match = _ref2.match;
  var path = match.path.substr(1);
  var paths = path.split('/');

  if (paths[paths.length - 1].indexOf(':') > -1) {
    paths = paths.filter(function (x) {
      return x.indexOf(':') === -1;
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",
      children: paths.map(function (sub, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
          active: paths.length === index + 1,
          children: paths.length !== index + 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
            to: "/".concat(getUrl(path, sub, index)),
            children: getMenuTitle(sub)
          }) : getMenuTitle(sub)
        }, index);
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadcrumbContainer);

/***/ }),

/***/ "./resources/admin/data/follow.js":
/*!****************************************!*\
  !*** ./resources/admin/data/follow.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var follow = [{
  name: 'Mayra Sibley',
  status: 'Working hard!',
  thumb: '/assets/img/profiles/l-5.jpg',
  large: '/assets/img/profiles/5.jpg',
  key: 1
}, {
  name: 'Philip Nelms',
  status: 'Lead Developer',
  thumb: '/assets/img/profiles/l-2.jpg',
  large: '/assets/img/profiles/2.jpg',
  key: 2
}, {
  name: 'Kathryn Mengel',
  status: 'Dog & Cat Person',
  thumb: '/assets/img/profiles/l-10.jpg',
  large: '/assets/img/profiles/10.jpg',
  key: 3
}, {
  name: 'Esperanza Lodge',
  status: 'Now giving divorce advices :)',
  thumb: '/assets/img/profiles/l-4.jpg',
  large: '/assets/img/profiles/4.jpg',
  key: 4
}, {
  name: 'Ken Ballweg',
  status: 'Hi there, I am using Gogo!',
  thumb: '/assets/img/profiles/l-3.jpg',
  large: '/assets/img/profiles/3.jpg',
  key: 5
}, {
  name: 'Rasheeda Vaquera',
  status: '...',
  thumb: '/assets/img/profiles/l-6.jpg',
  large: '/assets/img/profiles/6.jpg',
  key: 6
}, {
  name: 'Linn Ronning',
  status: 'What goes around comes around',
  thumb: '/assets/img/profiles/l-7.jpg',
  large: '/assets/img/profiles/7.jpg',
  key: 7
}, {
  name: 'Marty Otte',
  status: 'Big city life',
  thumb: '/assets/img/profiles/l-9.jpg',
  large: '/assets/img/profiles/9.jpg',
  key: 8
}, {
  name: 'Laree Munsch',
  status: 'New Job  :)',
  thumb: '/assets/img/profiles/l-11.jpg',
  large: '/assets/img/profiles/11.jpg',
  key: 9
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (follow);

/***/ }),

/***/ "./resources/admin/data/products.js":
/*!******************************************!*\
  !*** ./resources/admin/data/products.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var produtcs = [{
  id: 1,
  title: 'Marble Cake',
  img: '/assets/img/products/marble-cake-thumb.jpg',
  category: 'Cakes',
  createDate: '02.04.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'Wedding cake with flowers Macarons and blueberries',
  sales: 1647,
  stock: 62
}, {
  id: 2,
  title: 'Fat Rascal',
  category: 'Cupcakes',
  img: '/assets/img/products/fat-rascal-thumb.jpg',
  createDate: '01.04.2018',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Cheesecake with chocolate cookies and Cream biscuits',
  sales: 1240,
  stock: 48
}, {
  id: 3,
  title: 'Chocolate Cake',
  img: '/assets/img/products/chocolate-cake-thumb.jpg',
  category: 'Cakes',
  createDate: '25.03.2018',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Homemade cheesecake with fresh berries and mint',
  sales: 1080,
  stock: 57
}, {
  id: 4,
  title: 'Goose Breast',
  img: '/assets/img/products/goose-breast-thumb.jpg',
  category: 'Cakes',
  createDate: '21.03.2018',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Chocolate cake with berries',
  sales: 1014,
  stock: 41
}, {
  id: 5,
  title: 'Petit Gâteau',
  category: 'Cupcakes',
  img: '/assets/img/products/petit-gateau-thumb.jpg',
  createDate: '02.06.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'Chocolate cake with mascarpone',
  sales: 985,
  stock: 23
}, {
  id: 6,
  title: 'Salzburger Nockerl',
  img: '/assets/img/products/salzburger-nockerl-thumb.jpg',
  category: 'Desserts',
  createDate: '14.07.2018',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Wedding cake decorated with donuts and wild berries',
  sales: 962,
  stock: 34
}, {
  id: 7,
  title: 'Napoleonshat',
  img: '/assets/img/products/napoleonshat-thumb.jpg',
  category: 'Desserts',
  createDate: '05.02.2018',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Cheesecake with fresh berries and mint for dessert',
  sales: 921,
  stock: 31
}, {
  id: 8,
  title: 'Cheesecake',
  img: '/assets/img/products/cheesecake-thumb.jpg',
  category: 'Cakes',
  createDate: '18.08.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'Delicious vegan chocolate cake',
  sales: 887,
  stock: 21
}, {
  id: 9,
  title: 'Financier',
  img: '/assets/img/products/financier-thumb.jpg',
  category: 'Cakes',
  createDate: '15.03.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate',
  sales: 865,
  stock: 53
}, {
  id: 10,
  title: 'Genoise',
  img: '/assets/img/products/genoise-thumb.jpg',
  category: 'Cupcakes',
  createDate: '11.06.2018',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Christmas fruit cake, pudding on top',
  sales: 824,
  stock: 55
}, {
  id: 11,
  title: 'Gingerbread',
  img: '/assets/img/products/gingerbread-thumb.jpg',
  category: 'Cakes',
  createDate: '10.04.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'Wedding cake decorated with donuts and wild berries',
  sales: 714,
  stock: 12
}, {
  id: 12,
  title: 'Magdalena',
  img: '/assets/img/products/magdalena-thumb.jpg',
  category: 'Cakes',
  createDate: '22.07.2018',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Christmas fruit cake, pudding on top',
  sales: 702,
  stock: 14
}, {
  id: 13,
  title: 'Parkin',
  img: '/assets/img/products/parkin-thumb.jpg',
  category: 'Cakes',
  createDate: '22.08.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate',
  sales: 689,
  stock: 78
}, {
  id: 14,
  title: 'Streuselkuchen',
  img: '/assets/img/products/streuselkuchen-thumb.jpg',
  category: 'Cakes',
  createDate: '22.07.2018',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Delicious vegan chocolate cake',
  sales: 645,
  stock: 55
}, {
  id: 15,
  title: 'Tea loaf',
  img: '/assets/img/products/tea-loaf-thumb.jpg',
  category: 'Cakes',
  createDate: '10.09.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'Cheesecake with fresh berries and mint for dessert',
  sales: 632,
  stock: 20
}, {
  id: 16,
  title: 'Merveilleux',
  img: '/assets/img/products/merveilleux-thumb.jpg',
  category: 'Cakes',
  createDate: '18.02.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'Chocolate cake with mascarpone',
  sales: 621,
  stock: 6
}, {
  id: 17,
  title: 'Fruitcake',
  img: '/assets/img/products/fruitcake-thumb.jpg',
  category: 'Cakes',
  createDate: '12.01.2019',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Chocolate cake with berries',
  sales: 595,
  stock: 17
}, {
  id: 18,
  title: 'Bebinca',
  img: '/assets/img/products/bebinca-thumb.jpg',
  category: 'Cakes',
  createDate: '04.02.2019',
  status: 'PROCESSED',
  statusColor: 'secondary',
  description: 'Homemade cheesecake with fresh berries and mint',
  sales: 574,
  stock: 16
}, {
  id: 19,
  title: 'Cremeschnitte',
  img: '/assets/img/products/cremeschnitte-thumb.jpg',
  category: 'Desserts',
  createDate: '04.03.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'Cheesecake with chocolate cookies and Cream biscuits',
  sales: 562,
  stock: 9
}, {
  id: 20,
  title: 'Soufflé',
  img: '/assets/img/products/souffle-thumb.jpg',
  category: 'Cupcakes',
  createDate: '16.01.2018',
  status: 'ON HOLD',
  statusColor: 'primary',
  description: 'Wedding cake with flowers Macarons and blueberries',
  sales: 524,
  stock: 14
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (produtcs);

/***/ }),

/***/ "./resources/admin/data/recentposts.js":
/*!*********************************************!*\
  !*** ./resources/admin/data/recentposts.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var recentPosts = [{
  key: 1,
  title: 'Progressively Extensive Infomediaries',
  thumb: '/assets/img/products/magdalena-thumb.jpg',
  badge: 'NEW'
}, {
  key: 2,
  title: 'Assertively Iterate Resource Maximizing',
  thumb: '/assets/img/products/marble-cake-thumb.jpg'
}, {
  key: 3,
  title: 'Manufactured Products',
  thumb: '/assets/img/products/salzburger-nockerl-thumb.jpg',
  badge: 'TRENDING'
}, {
  key: 4,
  title: 'Podcasting Operational Change',
  thumb: '/assets/img/products/goose-breast-thumb.jpg'
}, {
  key: 5,
  title: 'Performing a Deep Dive',
  thumb: '/assets/img/products/petit-gateau-thumb.jpg'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (recentPosts);

/***/ }),

/***/ "./resources/admin/views/app/pages/profile/portfolio.js":
/*!**************************************************************!*\
  !*** ./resources/admin/views/app/pages/profile/portfolio.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/UncontrolledDropdown.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownToggle.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownMenu.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Nav.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/NavItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/TabContent.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/TabPane.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Badge.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardTitle.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardImg.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardSubtitle.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardText.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_navs_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../containers/navs/Breadcrumb */ "./resources/admin/containers/navs/Breadcrumb.js");
/* harmony import */ var _components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/common/CustomBootstrap */ "./resources/admin/components/common/CustomBootstrap.js");
/* harmony import */ var _helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/IntlMessages */ "./resources/admin/helpers/IntlMessages.js");
/* harmony import */ var _components_pages_SingleLightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/pages/SingleLightbox */ "./resources/admin/components/pages/SingleLightbox.js");
/* harmony import */ var _data_recentposts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data/recentposts */ "./resources/admin/data/recentposts.js");
/* harmony import */ var _components_common_RecentPost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/common/RecentPost */ "./resources/admin/components/common/RecentPost.js");
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/products */ "./resources/admin/data/products.js");
/* harmony import */ var _components_cards_UserCardBasic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/cards/UserCardBasic */ "./resources/admin/components/cards/UserCardBasic.js");
/* harmony import */ var _data_follow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../data/follow */ "./resources/admin/data/follow.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var products = _data_products__WEBPACK_IMPORTED_MODULE_8__["default"].slice(0, 15);

var ProfilePortfolio = function ProfilePortfolio(_ref) {
  var match = _ref.match;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('details'),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_3__.Colxx, {
        xxs: "12",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h1", {
          children: "Sarah Kortney"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "text-zero top-right-button-container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
              caret: true,
              color: "primary",
              size: "lg",
              outline: true,
              className: "top-right-button top-right-button-single",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
                id: "pages.actions"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
                header: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  id: "pages.header"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
                disabled: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  id: "pages.delete"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  id: "pages.another-action"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
                divider: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  id: "pages.another-action"
                })
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_containers_navs_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__["default"], {
          match: match
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
          tabs: true,
          className: "separator-tabs ml-0 mb-5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.NavLink, {
              className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
                active: activeTab === 'details',
                'nav-link': true
              }),
              onClick: function onClick() {
                setActiveTab('details');
              },
              location: {},
              to: "#",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
                id: "pages.details"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.NavLink, {
              className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
                active: activeTab === 'followers',
                'nav-link': true
              }),
              onClick: function onClick() {
                setActiveTab('followers');
              },
              location: {},
              to: "#",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
                id: "pages.followers"
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
          activeTab: activeTab,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
            tabId: "details",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_3__.Colxx, {
                xxs: "12",
                lg: "4",
                className: "mb-4 col-left",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
                  className: "mb-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                    className: "position-absolute card-top-buttons",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_23__["default"], {
                      outline: true,
                      color: "white",
                      className: "icon-button",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("i", {
                        className: "simple-icon-pencil"
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_pages_SingleLightbox__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    thumb: "/assets/img/profiles/1.jpg",
                    large: "/assets/img/profiles/1.jpg",
                    className: "card-img-top"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_24__["default"], {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
                      className: "text-muted text-small mb-2",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        id: "menu.about"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
                      className: "mb-3",
                      children: "I\u2019m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well."
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
                      className: "text-muted text-small mb-2",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        id: "pages.location"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
                      className: "mb-3",
                      children: "Nairobi, Kenya"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
                      className: "text-muted text-small mb-2",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        id: "pages.responsibilities"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("p", {
                      className: "mb-3",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_25__["default"], {
                        color: "outline-secondary",
                        className: "mb-1 mr-1",
                        pill: true,
                        children: "FRONTEND"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_25__["default"], {
                        color: "outline-secondary",
                        className: "mb-1 mr-1",
                        pill: true,
                        children: "JAVASCRIPT"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_25__["default"], {
                        color: "outline-secondary",
                        className: "mb-1 mr-1",
                        pill: true,
                        children: "SECURITY"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_25__["default"], {
                        color: "outline-secondary",
                        className: "mb-1 mr-1",
                        pill: true,
                        children: "DESIGN"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
                      className: "text-muted text-small mb-2",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        id: "menu.contact"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                      className: "social-icons",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("ul", {
                        className: "list-unstyled list-inline",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("li", {
                          className: "list-inline-item",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.NavLink, {
                            to: "#",
                            location: {},
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("i", {
                              className: "simple-icon-social-facebook"
                            })
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("li", {
                          className: "list-inline-item",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.NavLink, {
                            to: "#",
                            location: {},
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("i", {
                              className: "simple-icon-social-twitter"
                            })
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("li", {
                          className: "list-inline-item",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.NavLink, {
                            to: "#",
                            location: {},
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("i", {
                              className: "simple-icon-social-instagram"
                            })
                          })
                        })]
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
                  className: "mb-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_24__["default"], {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_26__["default"], {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        id: "pages.recent-posts"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                      className: "remove-last-border remove-last-margin remove-last-padding",
                      children: _data_recentposts__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (itemData) {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_common_RecentPost__WEBPACK_IMPORTED_MODULE_7__["default"], {
                          data: itemData
                        }, "recent_".concat(itemData.key));
                      })
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_3__.Colxx, {
                xxs: "12",
                lg: "8",
                className: "mb-4 col-right",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
                  children: products.map(function (product) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_3__.Colxx, {
                      xxs: "12",
                      lg: "6",
                      xl: "4",
                      className: "mb-4",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                          className: "position-relative",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.NavLink, {
                            to: "#",
                            location: {},
                            className: "w-40 w-sm-100",
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_27__["default"], {
                              top: true,
                              alt: product.title,
                              src: product.img
                            })
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_24__["default"], {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.NavLink, {
                            to: "#",
                            location: {},
                            className: "w-40 w-sm-100",
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_28__["default"], {
                              children: product.title
                            })
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_29__["default"], {
                            className: "text-muted text-small mb-0 font-weight-light",
                            children: product.createDate
                          })]
                        })]
                      })
                    }, "product_".concat(product.id));
                  })
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
            tabId: "followers",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
              children: _data_follow__WEBPACK_IMPORTED_MODULE_10__["default"].map(function (itemData) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_3__.Colxx, {
                  xxs: "12",
                  md: "6",
                  lg: "4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_cards_UserCardBasic__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    data: itemData
                  })
                }, "frined_".concat(itemData.key));
              })
            })
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePortfolio);

/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/react-image-lightbox/dist/index.es.js":
/*!************************************************************!*\
  !*** ./node_modules/react-image-lightbox/dist/index.es.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 * Placeholder for future translate functionality
 */
function translate(str) {
  var replaceStrings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!str) {
    return '';
  }

  var translated = str;

  if (replaceStrings) {
    Object.keys(replaceStrings).forEach(function (placeholder) {
      translated = translated.replace(placeholder, replaceStrings[placeholder]);
    });
  }

  return translated;
}
function getWindowWidth() {
  return typeof __webpack_require__.g.window !== 'undefined' ? __webpack_require__.g.window.innerWidth : 0;
}
function getWindowHeight() {
  return typeof __webpack_require__.g.window !== 'undefined' ? __webpack_require__.g.window.innerHeight : 0;
}

var isCrossOriginFrame = function isCrossOriginFrame() {
  try {
    return __webpack_require__.g.window.location.hostname !== __webpack_require__.g.window.parent.location.hostname;
  } catch (e) {
    return true;
  }
}; // Get the highest window context that isn't cross-origin
// (When in an iframe)


function getHighestSafeWindowContext() {
  var self = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __webpack_require__.g.window.self;

  // If we reached the top level, return self
  if (self === __webpack_require__.g.window.top) {
    return self;
  } // If parent is the same origin, we can move up one context
  // Reference: https://stackoverflow.com/a/21965342/1601953


  if (!isCrossOriginFrame()) {
    return getHighestSafeWindowContext(self.parent);
  } // If a different origin, we consider the current level
  // as the top reachable one


  return self;
}

// Min image zoom level
var MIN_ZOOM_LEVEL = 0; // Max image zoom level

var MAX_ZOOM_LEVEL = 300; // Size ratio between previous and next zoom levels

var ZOOM_RATIO = 1.007; // How much to increase/decrease the zoom level when the zoom buttons are clicked

var ZOOM_BUTTON_INCREMENT_SIZE = 100; // Used to judge the amount of horizontal scroll needed to initiate a image move

var WHEEL_MOVE_X_THRESHOLD = 200; // Used to judge the amount of vertical scroll needed to initiate a zoom action

var WHEEL_MOVE_Y_THRESHOLD = 1;
var KEYS = {
  ESC: 27,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
}; // Actions

var ACTION_NONE = 0;
var ACTION_MOVE = 1;
var ACTION_SWIPE = 2;
var ACTION_PINCH = 3;

var SOURCE_ANY = 0;
var SOURCE_MOUSE = 1;
var SOURCE_TOUCH = 2;
var SOURCE_POINTER = 3; // Minimal swipe distance

var MIN_SWIPE_DISTANCE = 200;

var ReactImageLightbox = /*#__PURE__*/function (_Component) {
  _inherits(ReactImageLightbox, _Component);

  var _super = _createSuper(ReactImageLightbox);

  function ReactImageLightbox(props) {
    var _this;

    _classCallCheck(this, ReactImageLightbox);

    _this = _super.call(this, props);
    _this.state = {
      //-----------------------------
      // Animation
      //-----------------------------
      // Lightbox is closing
      // When Lightbox is mounted, if animation is enabled it will open with the reverse of the closing animation
      isClosing: !props.animationDisabled,
      // Component parts should animate (e.g., when images are moving, or image is being zoomed)
      shouldAnimate: false,
      //-----------------------------
      // Zoom settings
      //-----------------------------
      // Zoom level of image
      zoomLevel: MIN_ZOOM_LEVEL,
      //-----------------------------
      // Image position settings
      //-----------------------------
      // Horizontal offset from center
      offsetX: 0,
      // Vertical offset from center
      offsetY: 0,
      // image load error for srcType
      loadErrorStatus: {}
    }; // Refs

    _this.outerEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    _this.zoomInBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    _this.zoomOutBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    _this.caption = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    _this.closeIfClickInner = _this.closeIfClickInner.bind(_assertThisInitialized(_this));
    _this.handleImageDoubleClick = _this.handleImageDoubleClick.bind(_assertThisInitialized(_this));
    _this.handleImageMouseWheel = _this.handleImageMouseWheel.bind(_assertThisInitialized(_this));
    _this.handleKeyInput = _this.handleKeyInput.bind(_assertThisInitialized(_this));
    _this.handleMouseUp = _this.handleMouseUp.bind(_assertThisInitialized(_this));
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_this));
    _this.handleMouseMove = _this.handleMouseMove.bind(_assertThisInitialized(_this));
    _this.handleOuterMousewheel = _this.handleOuterMousewheel.bind(_assertThisInitialized(_this));
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    _this.handleTouchMove = _this.handleTouchMove.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    _this.handlePointerEvent = _this.handlePointerEvent.bind(_assertThisInitialized(_this));
    _this.handleCaptionMousewheel = _this.handleCaptionMousewheel.bind(_assertThisInitialized(_this));
    _this.handleWindowResize = _this.handleWindowResize.bind(_assertThisInitialized(_this));
    _this.handleZoomInButtonClick = _this.handleZoomInButtonClick.bind(_assertThisInitialized(_this));
    _this.handleZoomOutButtonClick = _this.handleZoomOutButtonClick.bind(_assertThisInitialized(_this));
    _this.requestClose = _this.requestClose.bind(_assertThisInitialized(_this));
    _this.requestMoveNext = _this.requestMoveNext.bind(_assertThisInitialized(_this));
    _this.requestMovePrev = _this.requestMovePrev.bind(_assertThisInitialized(_this)); // Timeouts - always clear it before umount

    _this.timeouts = []; // Current action

    _this.currentAction = ACTION_NONE; // Events source

    _this.eventsSource = SOURCE_ANY; // Empty pointers list

    _this.pointerList = []; // Prevent inner close

    _this.preventInnerClose = false;
    _this.preventInnerCloseTimeout = null; // Used to disable animation when changing props.mainSrc|nextSrc|prevSrc

    _this.keyPressed = false; // Used to store load state / dimensions of images

    _this.imageCache = {}; // Time the last keydown event was called (used in keyboard action rate limiting)

    _this.lastKeyDownTime = 0; // Used for debouncing window resize event

    _this.resizeTimeout = null; // Used to determine when actions are triggered by the scroll wheel

    _this.wheelActionTimeout = null;
    _this.resetScrollTimeout = null;
    _this.scrollX = 0;
    _this.scrollY = 0; // Used in panning zoomed images

    _this.moveStartX = 0;
    _this.moveStartY = 0;
    _this.moveStartOffsetX = 0;
    _this.moveStartOffsetY = 0; // Used to swipe

    _this.swipeStartX = 0;
    _this.swipeStartY = 0;
    _this.swipeEndX = 0;
    _this.swipeEndY = 0; // Used to pinch

    _this.pinchTouchList = null;
    _this.pinchDistance = 0; // Used to differentiate between images with identical src

    _this.keyCounter = 0; // Used to detect a move when all src's remain unchanged (four or more of the same image in a row)

    _this.moveRequested = false;
    return _this;
  }

  _createClass(ReactImageLightbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.props.animationDisabled) {
        // Make opening animation play
        this.setState({
          isClosing: false
        });
      } // Prevents cross-origin errors when using a cross-origin iframe


      this.windowContext = getHighestSafeWindowContext();
      this.listeners = {
        resize: this.handleWindowResize,
        mouseup: this.handleMouseUp,
        touchend: this.handleTouchEnd,
        touchcancel: this.handleTouchEnd,
        pointerdown: this.handlePointerEvent,
        pointermove: this.handlePointerEvent,
        pointerup: this.handlePointerEvent,
        pointercancel: this.handlePointerEvent
      };
      Object.keys(this.listeners).forEach(function (type) {
        _this2.windowContext.addEventListener(type, _this2.listeners[type]);
      });
      this.loadAllImages();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this3 = this;

      this.getSrcTypes().forEach(function (srcType) {
        if (_this3.props[srcType.name] !== nextProps[srcType.name]) {
          _this3.moveRequested = false;
        }
      }); // Wait for move...

      return !this.moveRequested;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this4 = this;

      var sourcesChanged = false;
      var prevSrcDict = {};
      var nextSrcDict = {};
      this.getSrcTypes().forEach(function (srcType) {
        if (prevProps[srcType.name] !== _this4.props[srcType.name]) {
          sourcesChanged = true;
          prevSrcDict[prevProps[srcType.name]] = true;
          nextSrcDict[_this4.props[srcType.name]] = true;
        }
      });

      if (sourcesChanged || this.moveRequested) {
        // Reset the loaded state for images not rendered next
        Object.keys(prevSrcDict).forEach(function (prevSrc) {
          if (!(prevSrc in nextSrcDict) && prevSrc in _this4.imageCache) {
            _this4.imageCache[prevSrc].loaded = false;
          }
        });
        this.moveRequested = false; // Load any new images

        this.loadAllImages(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this5 = this;

      this.didUnmount = true;
      Object.keys(this.listeners).forEach(function (type) {
        _this5.windowContext.removeEventListener(type, _this5.listeners[type]);
      });
      this.timeouts.forEach(function (tid) {
        return clearTimeout(tid);
      });
    }
  }, {
    key: "setTimeout",
    value: function (_setTimeout) {
      function setTimeout(_x, _x2) {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function (func, time) {
      var _this6 = this;

      var id = setTimeout(function () {
        _this6.timeouts = _this6.timeouts.filter(function (tid) {
          return tid !== id;
        });
        func();
      }, time);
      this.timeouts.push(id);
      return id;
    })
  }, {
    key: "setPreventInnerClose",
    value: function setPreventInnerClose() {
      var _this7 = this;

      if (this.preventInnerCloseTimeout) {
        this.clearTimeout(this.preventInnerCloseTimeout);
      }

      this.preventInnerClose = true;
      this.preventInnerCloseTimeout = this.setTimeout(function () {
        _this7.preventInnerClose = false;
        _this7.preventInnerCloseTimeout = null;
      }, 100);
    } // Get info for the best suited image to display with the given srcType

  }, {
    key: "getBestImageForType",
    value: function getBestImageForType(srcType) {
      var imageSrc = this.props[srcType];
      var fitSizes = {};

      if (this.isImageLoaded(imageSrc)) {
        // Use full-size image if available
        fitSizes = this.getFitSizes(this.imageCache[imageSrc].width, this.imageCache[imageSrc].height);
      } else if (this.isImageLoaded(this.props["".concat(srcType, "Thumbnail")])) {
        // Fall back to using thumbnail if the image has not been loaded
        imageSrc = this.props["".concat(srcType, "Thumbnail")];
        fitSizes = this.getFitSizes(this.imageCache[imageSrc].width, this.imageCache[imageSrc].height, true);
      } else {
        return null;
      }

      return {
        src: imageSrc,
        height: this.imageCache[imageSrc].height,
        width: this.imageCache[imageSrc].width,
        targetHeight: fitSizes.height,
        targetWidth: fitSizes.width
      };
    } // Get sizing for when an image is larger than the window

  }, {
    key: "getFitSizes",
    value: function getFitSizes(width, height, stretch) {
      var boxSize = this.getLightboxRect();
      var maxHeight = boxSize.height - this.props.imagePadding * 2;
      var maxWidth = boxSize.width - this.props.imagePadding * 2;

      if (!stretch) {
        maxHeight = Math.min(maxHeight, height);
        maxWidth = Math.min(maxWidth, width);
      }

      var maxRatio = maxWidth / maxHeight;
      var srcRatio = width / height;

      if (maxRatio > srcRatio) {
        // height is the constraining dimension of the photo
        return {
          width: width * maxHeight / height,
          height: maxHeight
        };
      }

      return {
        width: maxWidth,
        height: height * maxWidth / width
      };
    }
  }, {
    key: "getMaxOffsets",
    value: function getMaxOffsets() {
      var zoomLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.zoomLevel;
      var currentImageInfo = this.getBestImageForType('mainSrc');

      if (currentImageInfo === null) {
        return {
          maxX: 0,
          minX: 0,
          maxY: 0,
          minY: 0
        };
      }

      var boxSize = this.getLightboxRect();
      var zoomMultiplier = this.getZoomMultiplier(zoomLevel);
      var maxX = 0;

      if (zoomMultiplier * currentImageInfo.width - boxSize.width < 0) {
        // if there is still blank space in the X dimension, don't limit except to the opposite edge
        maxX = (boxSize.width - zoomMultiplier * currentImageInfo.width) / 2;
      } else {
        maxX = (zoomMultiplier * currentImageInfo.width - boxSize.width) / 2;
      }

      var maxY = 0;

      if (zoomMultiplier * currentImageInfo.height - boxSize.height < 0) {
        // if there is still blank space in the Y dimension, don't limit except to the opposite edge
        maxY = (boxSize.height - zoomMultiplier * currentImageInfo.height) / 2;
      } else {
        maxY = (zoomMultiplier * currentImageInfo.height - boxSize.height) / 2;
      }

      return {
        maxX: maxX,
        maxY: maxY,
        minX: -1 * maxX,
        minY: -1 * maxY
      };
    } // Get image src types

  }, {
    key: "getSrcTypes",
    value: function getSrcTypes() {
      return [{
        name: 'mainSrc',
        keyEnding: "i".concat(this.keyCounter)
      }, {
        name: 'mainSrcThumbnail',
        keyEnding: "t".concat(this.keyCounter)
      }, {
        name: 'nextSrc',
        keyEnding: "i".concat(this.keyCounter + 1)
      }, {
        name: 'nextSrcThumbnail',
        keyEnding: "t".concat(this.keyCounter + 1)
      }, {
        name: 'prevSrc',
        keyEnding: "i".concat(this.keyCounter - 1)
      }, {
        name: 'prevSrcThumbnail',
        keyEnding: "t".concat(this.keyCounter - 1)
      }];
    }
    /**
     * Get sizing when the image is scaled
     */

  }, {
    key: "getZoomMultiplier",
    value: function getZoomMultiplier() {
      var zoomLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.zoomLevel;
      return Math.pow(ZOOM_RATIO, zoomLevel);
    }
    /**
     * Get the size of the lightbox in pixels
     */

  }, {
    key: "getLightboxRect",
    value: function getLightboxRect() {
      if (this.outerEl.current) {
        return this.outerEl.current.getBoundingClientRect();
      }

      return {
        width: getWindowWidth(),
        height: getWindowHeight(),
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
    }
  }, {
    key: "clearTimeout",
    value: function (_clearTimeout) {
      function clearTimeout(_x3) {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function (id) {
      this.timeouts = this.timeouts.filter(function (tid) {
        return tid !== id;
      });
      clearTimeout(id);
    } // Change zoom level
    )
  }, {
    key: "changeZoom",
    value: function changeZoom(zoomLevel, clientX, clientY) {
      // Ignore if zoom disabled
      if (!this.props.enableZoom) {
        return;
      } // Constrain zoom level to the set bounds


      var nextZoomLevel = Math.max(MIN_ZOOM_LEVEL, Math.min(MAX_ZOOM_LEVEL, zoomLevel)); // Ignore requests that don't change the zoom level

      if (nextZoomLevel === this.state.zoomLevel) {
        return;
      }

      if (nextZoomLevel === MIN_ZOOM_LEVEL) {
        // Snap back to center if zoomed all the way out
        this.setState({
          zoomLevel: nextZoomLevel,
          offsetX: 0,
          offsetY: 0
        });
        return;
      }

      var imageBaseSize = this.getBestImageForType('mainSrc');

      if (imageBaseSize === null) {
        return;
      }

      var currentZoomMultiplier = this.getZoomMultiplier();
      var nextZoomMultiplier = this.getZoomMultiplier(nextZoomLevel); // Default to the center of the image to zoom when no mouse position specified

      var boxRect = this.getLightboxRect();
      var pointerX = typeof clientX !== 'undefined' ? clientX - boxRect.left : boxRect.width / 2;
      var pointerY = typeof clientY !== 'undefined' ? clientY - boxRect.top : boxRect.height / 2;
      var currentImageOffsetX = (boxRect.width - imageBaseSize.width * currentZoomMultiplier) / 2;
      var currentImageOffsetY = (boxRect.height - imageBaseSize.height * currentZoomMultiplier) / 2;
      var currentImageRealOffsetX = currentImageOffsetX - this.state.offsetX;
      var currentImageRealOffsetY = currentImageOffsetY - this.state.offsetY;
      var currentPointerXRelativeToImage = (pointerX - currentImageRealOffsetX) / currentZoomMultiplier;
      var currentPointerYRelativeToImage = (pointerY - currentImageRealOffsetY) / currentZoomMultiplier;
      var nextImageRealOffsetX = pointerX - currentPointerXRelativeToImage * nextZoomMultiplier;
      var nextImageRealOffsetY = pointerY - currentPointerYRelativeToImage * nextZoomMultiplier;
      var nextImageOffsetX = (boxRect.width - imageBaseSize.width * nextZoomMultiplier) / 2;
      var nextImageOffsetY = (boxRect.height - imageBaseSize.height * nextZoomMultiplier) / 2;
      var nextOffsetX = nextImageOffsetX - nextImageRealOffsetX;
      var nextOffsetY = nextImageOffsetY - nextImageRealOffsetY; // When zooming out, limit the offset so things don't get left askew

      if (this.currentAction !== ACTION_PINCH) {
        var maxOffsets = this.getMaxOffsets();

        if (this.state.zoomLevel > nextZoomLevel) {
          nextOffsetX = Math.max(maxOffsets.minX, Math.min(maxOffsets.maxX, nextOffsetX));
          nextOffsetY = Math.max(maxOffsets.minY, Math.min(maxOffsets.maxY, nextOffsetY));
        }
      }

      this.setState({
        zoomLevel: nextZoomLevel,
        offsetX: nextOffsetX,
        offsetY: nextOffsetY
      });
    }
  }, {
    key: "closeIfClickInner",
    value: function closeIfClickInner(event) {
      if (!this.preventInnerClose && event.target.className.search(/\bril-inner\b/) > -1) {
        this.requestClose(event);
      }
    }
    /**
     * Handle user keyboard actions
     */

  }, {
    key: "handleKeyInput",
    value: function handleKeyInput(event) {
      event.stopPropagation(); // Ignore key input during animations

      if (this.isAnimating()) {
        return;
      } // Allow slightly faster navigation through the images when user presses keys repeatedly


      if (event.type === 'keyup') {
        this.lastKeyDownTime -= this.props.keyRepeatKeyupBonus;
        return;
      }

      var keyCode = event.which || event.keyCode; // Ignore key presses that happen too close to each other (when rapid fire key pressing or holding down the key)
      // But allow it if it's a lightbox closing action

      var currentTime = new Date();

      if (currentTime.getTime() - this.lastKeyDownTime < this.props.keyRepeatLimit && keyCode !== KEYS.ESC) {
        return;
      }

      this.lastKeyDownTime = currentTime.getTime();

      switch (keyCode) {
        // ESC key closes the lightbox
        case KEYS.ESC:
          event.preventDefault();
          this.requestClose(event);
          break;
        // Left arrow key moves to previous image

        case KEYS.LEFT_ARROW:
          if (!this.props.prevSrc) {
            return;
          }

          event.preventDefault();
          this.keyPressed = true;
          this.requestMovePrev(event);
          break;
        // Right arrow key moves to next image

        case KEYS.RIGHT_ARROW:
          if (!this.props.nextSrc) {
            return;
          }

          event.preventDefault();
          this.keyPressed = true;
          this.requestMoveNext(event);
          break;
      }
    }
    /**
     * Handle a mouse wheel event over the lightbox container
     */

  }, {
    key: "handleOuterMousewheel",
    value: function handleOuterMousewheel(event) {
      var _this8 = this;

      // Prevent scrolling of the background
      event.stopPropagation();
      var xThreshold = WHEEL_MOVE_X_THRESHOLD;
      var actionDelay = 0;
      var imageMoveDelay = 500;
      this.clearTimeout(this.resetScrollTimeout);
      this.resetScrollTimeout = this.setTimeout(function () {
        _this8.scrollX = 0;
        _this8.scrollY = 0;
      }, 300); // Prevent rapid-fire zoom behavior

      if (this.wheelActionTimeout !== null || this.isAnimating()) {
        return;
      }

      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) {
        // handle horizontal scrolls with image moves
        this.scrollY = 0;
        this.scrollX += event.deltaX;
        var bigLeapX = xThreshold / 2; // If the scroll amount has accumulated sufficiently, or a large leap was taken

        if (this.scrollX >= xThreshold || event.deltaX >= bigLeapX) {
          // Scroll right moves to next
          this.requestMoveNext(event);
          actionDelay = imageMoveDelay;
          this.scrollX = 0;
        } else if (this.scrollX <= -1 * xThreshold || event.deltaX <= -1 * bigLeapX) {
          // Scroll left moves to previous
          this.requestMovePrev(event);
          actionDelay = imageMoveDelay;
          this.scrollX = 0;
        }
      } // Allow successive actions after the set delay


      if (actionDelay !== 0) {
        this.wheelActionTimeout = this.setTimeout(function () {
          _this8.wheelActionTimeout = null;
        }, actionDelay);
      }
    }
  }, {
    key: "handleImageMouseWheel",
    value: function handleImageMouseWheel(event) {
      var yThreshold = WHEEL_MOVE_Y_THRESHOLD;

      if (Math.abs(event.deltaY) >= Math.abs(event.deltaX)) {
        event.stopPropagation(); // If the vertical scroll amount was large enough, perform a zoom

        if (Math.abs(event.deltaY) < yThreshold) {
          return;
        }

        this.scrollX = 0;
        this.scrollY += event.deltaY;
        this.changeZoom(this.state.zoomLevel - event.deltaY, event.clientX, event.clientY);
      }
    }
    /**
     * Handle a double click on the current image
     */

  }, {
    key: "handleImageDoubleClick",
    value: function handleImageDoubleClick(event) {
      if (this.state.zoomLevel > MIN_ZOOM_LEVEL) {
        // A double click when zoomed in zooms all the way out
        this.changeZoom(MIN_ZOOM_LEVEL, event.clientX, event.clientY);
      } else {
        // A double click when zoomed all the way out zooms in
        this.changeZoom(this.state.zoomLevel + ZOOM_BUTTON_INCREMENT_SIZE, event.clientX, event.clientY);
      }
    }
  }, {
    key: "shouldHandleEvent",
    value: function shouldHandleEvent(source) {
      if (this.eventsSource === source) {
        return true;
      }

      if (this.eventsSource === SOURCE_ANY) {
        this.eventsSource = source;
        return true;
      }

      switch (source) {
        case SOURCE_MOUSE:
          return false;

        case SOURCE_TOUCH:
          this.eventsSource = SOURCE_TOUCH;
          this.filterPointersBySource();
          return true;

        case SOURCE_POINTER:
          if (this.eventsSource === SOURCE_MOUSE) {
            this.eventsSource = SOURCE_POINTER;
            this.filterPointersBySource();
            return true;
          }

          return false;

        default:
          return false;
      }
    }
  }, {
    key: "addPointer",
    value: function addPointer(pointer) {
      this.pointerList.push(pointer);
    }
  }, {
    key: "removePointer",
    value: function removePointer(pointer) {
      this.pointerList = this.pointerList.filter(function (_ref) {
        var id = _ref.id;
        return id !== pointer.id;
      });
    }
  }, {
    key: "filterPointersBySource",
    value: function filterPointersBySource() {
      var _this9 = this;

      this.pointerList = this.pointerList.filter(function (_ref2) {
        var source = _ref2.source;
        return source === _this9.eventsSource;
      });
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      if (this.shouldHandleEvent(SOURCE_MOUSE) && ReactImageLightbox.isTargetMatchImage(event.target)) {
        this.addPointer(ReactImageLightbox.parseMouseEvent(event));
        this.multiPointerStart(event);
      }
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      if (this.shouldHandleEvent(SOURCE_MOUSE)) {
        this.multiPointerMove(event, [ReactImageLightbox.parseMouseEvent(event)]);
      }
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(event) {
      if (this.shouldHandleEvent(SOURCE_MOUSE)) {
        this.removePointer(ReactImageLightbox.parseMouseEvent(event));
        this.multiPointerEnd(event);
      }
    }
  }, {
    key: "handlePointerEvent",
    value: function handlePointerEvent(event) {
      if (this.shouldHandleEvent(SOURCE_POINTER)) {
        switch (event.type) {
          case 'pointerdown':
            if (ReactImageLightbox.isTargetMatchImage(event.target)) {
              this.addPointer(ReactImageLightbox.parsePointerEvent(event));
              this.multiPointerStart(event);
            }

            break;

          case 'pointermove':
            this.multiPointerMove(event, [ReactImageLightbox.parsePointerEvent(event)]);
            break;

          case 'pointerup':
          case 'pointercancel':
            this.removePointer(ReactImageLightbox.parsePointerEvent(event));
            this.multiPointerEnd(event);
            break;
        }
      }
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(event) {
      var _this10 = this;

      if (this.shouldHandleEvent(SOURCE_TOUCH) && ReactImageLightbox.isTargetMatchImage(event.target)) {
        [].forEach.call(event.changedTouches, function (eventTouch) {
          return _this10.addPointer(ReactImageLightbox.parseTouchPointer(eventTouch));
        });
        this.multiPointerStart(event);
      }
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(event) {
      if (this.shouldHandleEvent(SOURCE_TOUCH)) {
        this.multiPointerMove(event, [].map.call(event.changedTouches, function (eventTouch) {
          return ReactImageLightbox.parseTouchPointer(eventTouch);
        }));
      }
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(event) {
      var _this11 = this;

      if (this.shouldHandleEvent(SOURCE_TOUCH)) {
        [].map.call(event.changedTouches, function (touch) {
          return _this11.removePointer(ReactImageLightbox.parseTouchPointer(touch));
        });
        this.multiPointerEnd(event);
      }
    }
  }, {
    key: "decideMoveOrSwipe",
    value: function decideMoveOrSwipe(pointer) {
      if (this.state.zoomLevel <= MIN_ZOOM_LEVEL) {
        this.handleSwipeStart(pointer);
      } else {
        this.handleMoveStart(pointer);
      }
    }
  }, {
    key: "multiPointerStart",
    value: function multiPointerStart(event) {
      this.handleEnd(null);

      switch (this.pointerList.length) {
        case 1:
          {
            event.preventDefault();
            this.decideMoveOrSwipe(this.pointerList[0]);
            break;
          }

        case 2:
          {
            event.preventDefault();
            this.handlePinchStart(this.pointerList);
            break;
          }
      }
    }
  }, {
    key: "multiPointerMove",
    value: function multiPointerMove(event, pointerList) {
      switch (this.currentAction) {
        case ACTION_MOVE:
          {
            event.preventDefault();
            this.handleMove(pointerList[0]);
            break;
          }

        case ACTION_SWIPE:
          {
            event.preventDefault();
            this.handleSwipe(pointerList[0]);
            break;
          }

        case ACTION_PINCH:
          {
            event.preventDefault();
            this.handlePinch(pointerList);
            break;
          }
      }
    }
  }, {
    key: "multiPointerEnd",
    value: function multiPointerEnd(event) {
      if (this.currentAction !== ACTION_NONE) {
        this.setPreventInnerClose();
        this.handleEnd(event);
      }

      switch (this.pointerList.length) {
        case 0:
          {
            this.eventsSource = SOURCE_ANY;
            break;
          }

        case 1:
          {
            event.preventDefault();
            this.decideMoveOrSwipe(this.pointerList[0]);
            break;
          }

        case 2:
          {
            event.preventDefault();
            this.handlePinchStart(this.pointerList);
            break;
          }
      }
    }
  }, {
    key: "handleEnd",
    value: function handleEnd(event) {
      switch (this.currentAction) {
        case ACTION_MOVE:
          this.handleMoveEnd(event);
          break;

        case ACTION_SWIPE:
          this.handleSwipeEnd(event);
          break;

        case ACTION_PINCH:
          this.handlePinchEnd(event);
          break;
      }
    } // Handle move start over the lightbox container
    // This happens:
    // - On a mouseDown event
    // - On a touchstart event

  }, {
    key: "handleMoveStart",
    value: function handleMoveStart(_ref3) {
      var clientX = _ref3.x,
          clientY = _ref3.y;

      if (!this.props.enableZoom) {
        return;
      }

      this.currentAction = ACTION_MOVE;
      this.moveStartX = clientX;
      this.moveStartY = clientY;
      this.moveStartOffsetX = this.state.offsetX;
      this.moveStartOffsetY = this.state.offsetY;
    } // Handle dragging over the lightbox container
    // This happens:
    // - After a mouseDown and before a mouseUp event
    // - After a touchstart and before a touchend event

  }, {
    key: "handleMove",
    value: function handleMove(_ref4) {
      var clientX = _ref4.x,
          clientY = _ref4.y;
      var newOffsetX = this.moveStartX - clientX + this.moveStartOffsetX;
      var newOffsetY = this.moveStartY - clientY + this.moveStartOffsetY;

      if (this.state.offsetX !== newOffsetX || this.state.offsetY !== newOffsetY) {
        this.setState({
          offsetX: newOffsetX,
          offsetY: newOffsetY
        });
      }
    }
  }, {
    key: "handleMoveEnd",
    value: function handleMoveEnd() {
      var _this12 = this;

      this.currentAction = ACTION_NONE;
      this.moveStartX = 0;
      this.moveStartY = 0;
      this.moveStartOffsetX = 0;
      this.moveStartOffsetY = 0; // Snap image back into frame if outside max offset range

      var maxOffsets = this.getMaxOffsets();
      var nextOffsetX = Math.max(maxOffsets.minX, Math.min(maxOffsets.maxX, this.state.offsetX));
      var nextOffsetY = Math.max(maxOffsets.minY, Math.min(maxOffsets.maxY, this.state.offsetY));

      if (nextOffsetX !== this.state.offsetX || nextOffsetY !== this.state.offsetY) {
        this.setState({
          offsetX: nextOffsetX,
          offsetY: nextOffsetY,
          shouldAnimate: true
        });
        this.setTimeout(function () {
          _this12.setState({
            shouldAnimate: false
          });
        }, this.props.animationDuration);
      }
    }
  }, {
    key: "handleSwipeStart",
    value: function handleSwipeStart(_ref5) {
      var clientX = _ref5.x,
          clientY = _ref5.y;
      this.currentAction = ACTION_SWIPE;
      this.swipeStartX = clientX;
      this.swipeStartY = clientY;
      this.swipeEndX = clientX;
      this.swipeEndY = clientY;
    }
  }, {
    key: "handleSwipe",
    value: function handleSwipe(_ref6) {
      var clientX = _ref6.x,
          clientY = _ref6.y;
      this.swipeEndX = clientX;
      this.swipeEndY = clientY;
    }
  }, {
    key: "handleSwipeEnd",
    value: function handleSwipeEnd(event) {
      var xDiff = this.swipeEndX - this.swipeStartX;
      var xDiffAbs = Math.abs(xDiff);
      var yDiffAbs = Math.abs(this.swipeEndY - this.swipeStartY);
      this.currentAction = ACTION_NONE;
      this.swipeStartX = 0;
      this.swipeStartY = 0;
      this.swipeEndX = 0;
      this.swipeEndY = 0;

      if (!event || this.isAnimating() || xDiffAbs < yDiffAbs * 1.5) {
        return;
      }

      if (xDiffAbs < MIN_SWIPE_DISTANCE) {
        var boxRect = this.getLightboxRect();

        if (xDiffAbs < boxRect.width / 4) {
          return;
        }
      }

      if (xDiff > 0 && this.props.prevSrc) {
        event.preventDefault();
        this.requestMovePrev();
      } else if (xDiff < 0 && this.props.nextSrc) {
        event.preventDefault();
        this.requestMoveNext();
      }
    }
  }, {
    key: "calculatePinchDistance",
    value: function calculatePinchDistance() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.pinchTouchList,
          _ref8 = _slicedToArray(_ref7, 2),
          a = _ref8[0],
          b = _ref8[1];

      return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }
  }, {
    key: "calculatePinchCenter",
    value: function calculatePinchCenter() {
      var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.pinchTouchList,
          _ref10 = _slicedToArray(_ref9, 2),
          a = _ref10[0],
          b = _ref10[1];

      return {
        x: a.x - (a.x - b.x) / 2,
        y: a.y - (a.y - b.y) / 2
      };
    }
  }, {
    key: "handlePinchStart",
    value: function handlePinchStart(pointerList) {
      if (!this.props.enableZoom) {
        return;
      }

      this.currentAction = ACTION_PINCH;
      this.pinchTouchList = pointerList.map(function (_ref11) {
        var id = _ref11.id,
            x = _ref11.x,
            y = _ref11.y;
        return {
          id: id,
          x: x,
          y: y
        };
      });
      this.pinchDistance = this.calculatePinchDistance();
    }
  }, {
    key: "handlePinch",
    value: function handlePinch(pointerList) {
      this.pinchTouchList = this.pinchTouchList.map(function (oldPointer) {
        for (var i = 0; i < pointerList.length; i += 1) {
          if (pointerList[i].id === oldPointer.id) {
            return pointerList[i];
          }
        }

        return oldPointer;
      });
      var newDistance = this.calculatePinchDistance();
      var zoomLevel = this.state.zoomLevel + newDistance - this.pinchDistance;
      this.pinchDistance = newDistance;

      var _this$calculatePinchC = this.calculatePinchCenter(this.pinchTouchList),
          clientX = _this$calculatePinchC.x,
          clientY = _this$calculatePinchC.y;

      this.changeZoom(zoomLevel, clientX, clientY);
    }
  }, {
    key: "handlePinchEnd",
    value: function handlePinchEnd() {
      this.currentAction = ACTION_NONE;
      this.pinchTouchList = null;
      this.pinchDistance = 0;
    } // Handle the window resize event

  }, {
    key: "handleWindowResize",
    value: function handleWindowResize() {
      this.clearTimeout(this.resizeTimeout);
      this.resizeTimeout = this.setTimeout(this.forceUpdate.bind(this), 100);
    }
  }, {
    key: "handleZoomInButtonClick",
    value: function handleZoomInButtonClick() {
      var nextZoomLevel = this.state.zoomLevel + ZOOM_BUTTON_INCREMENT_SIZE;
      this.changeZoom(nextZoomLevel);

      if (nextZoomLevel === MAX_ZOOM_LEVEL) {
        this.zoomOutBtn.current.focus();
      }
    }
  }, {
    key: "handleZoomOutButtonClick",
    value: function handleZoomOutButtonClick() {
      var nextZoomLevel = this.state.zoomLevel - ZOOM_BUTTON_INCREMENT_SIZE;
      this.changeZoom(nextZoomLevel);

      if (nextZoomLevel === MIN_ZOOM_LEVEL) {
        this.zoomInBtn.current.focus();
      }
    }
  }, {
    key: "handleCaptionMousewheel",
    value: function handleCaptionMousewheel(event) {
      event.stopPropagation();

      if (!this.caption.current) {
        return;
      }

      var _this$caption$current = this.caption.current.getBoundingClientRect(),
          height = _this$caption$current.height;

      var _this$caption$current2 = this.caption.current,
          scrollHeight = _this$caption$current2.scrollHeight,
          scrollTop = _this$caption$current2.scrollTop;

      if (event.deltaY > 0 && height + scrollTop >= scrollHeight || event.deltaY < 0 && scrollTop <= 0) {
        event.preventDefault();
      }
    } // Detach key and mouse input events

  }, {
    key: "isAnimating",
    value: function isAnimating() {
      return this.state.shouldAnimate || this.state.isClosing;
    } // Check if image is loaded

  }, {
    key: "isImageLoaded",
    value: function isImageLoaded(imageSrc) {
      return imageSrc && imageSrc in this.imageCache && this.imageCache[imageSrc].loaded;
    } // Load image from src and call callback with image width and height on load

  }, {
    key: "loadImage",
    value: function loadImage(srcType, imageSrc, done) {
      var _this13 = this;

      // Return the image info if it is already cached
      if (this.isImageLoaded(imageSrc)) {
        this.setTimeout(function () {
          done();
        }, 1);
        return;
      }

      var inMemoryImage = new __webpack_require__.g.Image();

      if (this.props.imageCrossOrigin) {
        inMemoryImage.crossOrigin = this.props.imageCrossOrigin;
      }

      inMemoryImage.onerror = function (errorEvent) {
        _this13.props.onImageLoadError(imageSrc, srcType, errorEvent); // failed to load so set the state loadErrorStatus


        _this13.setState(function (prevState) {
          return {
            loadErrorStatus: _objectSpread2(_objectSpread2({}, prevState.loadErrorStatus), {}, _defineProperty({}, srcType, true))
          };
        });

        done(errorEvent);
      };

      inMemoryImage.onload = function () {
        _this13.props.onImageLoad(imageSrc, srcType, inMemoryImage);

        _this13.imageCache[imageSrc] = {
          loaded: true,
          width: inMemoryImage.width,
          height: inMemoryImage.height
        };
        done();
      };

      inMemoryImage.src = imageSrc;
    } // Load all images and their thumbnails

  }, {
    key: "loadAllImages",
    value: function loadAllImages() {
      var _this14 = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      var generateLoadDoneCallback = function generateLoadDoneCallback(srcType, imageSrc) {
        return function (err) {
          // Give up showing image on error
          if (err) {
            return;
          } // Don't rerender if the src is not the same as when the load started
          // or if the component has unmounted


          if (_this14.props[srcType] !== imageSrc || _this14.didUnmount) {
            return;
          } // Force rerender with the new image


          _this14.forceUpdate();
        };
      }; // Load the images


      this.getSrcTypes().forEach(function (srcType) {
        var type = srcType.name; // there is no error when we try to load it initially

        if (props[type] && _this14.state.loadErrorStatus[type]) {
          _this14.setState(function (prevState) {
            return {
              loadErrorStatus: _objectSpread2(_objectSpread2({}, prevState.loadErrorStatus), {}, _defineProperty({}, type, false))
            };
          });
        } // Load unloaded images


        if (props[type] && !_this14.isImageLoaded(props[type])) {
          _this14.loadImage(type, props[type], generateLoadDoneCallback(type, props[type]));
        }
      });
    } // Request that the lightbox be closed

  }, {
    key: "requestClose",
    value: function requestClose(event) {
      var _this15 = this;

      // Call the parent close request
      var closeLightbox = function closeLightbox() {
        return _this15.props.onCloseRequest(event);
      };

      if (this.props.animationDisabled || event.type === 'keydown' && !this.props.animationOnKeyInput) {
        // No animation
        closeLightbox();
        return;
      } // With animation
      // Start closing animation


      this.setState({
        isClosing: true
      }); // Perform the actual closing at the end of the animation

      this.setTimeout(closeLightbox, this.props.animationDuration);
    }
  }, {
    key: "requestMove",
    value: function requestMove(direction, event) {
      var _this16 = this;

      // Reset the zoom level on image move
      var nextState = {
        zoomLevel: MIN_ZOOM_LEVEL,
        offsetX: 0,
        offsetY: 0
      }; // Enable animated states

      if (!this.props.animationDisabled && (!this.keyPressed || this.props.animationOnKeyInput)) {
        nextState.shouldAnimate = true;
        this.setTimeout(function () {
          return _this16.setState({
            shouldAnimate: false
          });
        }, this.props.animationDuration);
      }

      this.keyPressed = false;
      this.moveRequested = true;

      if (direction === 'prev') {
        this.keyCounter -= 1;
        this.setState(nextState);
        this.props.onMovePrevRequest(event);
      } else {
        this.keyCounter += 1;
        this.setState(nextState);
        this.props.onMoveNextRequest(event);
      }
    } // Request to transition to the next image

  }, {
    key: "requestMoveNext",
    value: function requestMoveNext(event) {
      this.requestMove('next', event);
    } // Request to transition to the previous image

  }, {
    key: "requestMovePrev",
    value: function requestMovePrev(event) {
      this.requestMove('prev', event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this17 = this;

      var _this$props = this.props,
          animationDisabled = _this$props.animationDisabled,
          animationDuration = _this$props.animationDuration,
          clickOutsideToClose = _this$props.clickOutsideToClose,
          discourageDownloads = _this$props.discourageDownloads,
          enableZoom = _this$props.enableZoom,
          imageTitle = _this$props.imageTitle,
          nextSrc = _this$props.nextSrc,
          prevSrc = _this$props.prevSrc,
          toolbarButtons = _this$props.toolbarButtons,
          reactModalStyle = _this$props.reactModalStyle,
          _onAfterOpen = _this$props.onAfterOpen,
          imageCrossOrigin = _this$props.imageCrossOrigin,
          reactModalProps = _this$props.reactModalProps,
          loader = _this$props.loader;
      var _this$state = this.state,
          zoomLevel = _this$state.zoomLevel,
          offsetX = _this$state.offsetX,
          offsetY = _this$state.offsetY,
          isClosing = _this$state.isClosing,
          loadErrorStatus = _this$state.loadErrorStatus;
      var boxSize = this.getLightboxRect();
      var transitionStyle = {}; // Transition settings for sliding animations

      if (!animationDisabled && this.isAnimating()) {
        transitionStyle = _objectSpread2(_objectSpread2({}, transitionStyle), {}, {
          transition: "transform ".concat(animationDuration, "ms")
        });
      } // Key endings to differentiate between images with the same src


      var keyEndings = {};
      this.getSrcTypes().forEach(function (_ref12) {
        var name = _ref12.name,
            keyEnding = _ref12.keyEnding;
        keyEndings[name] = keyEnding;
      }); // Images to be displayed

      var images = [];

      var addImage = function addImage(srcType, imageClass, transforms) {
        // Ignore types that have no source defined for their full size image
        if (!_this17.props[srcType]) {
          return;
        }

        var bestImageInfo = _this17.getBestImageForType(srcType);

        var imageStyle = _objectSpread2(_objectSpread2({}, transitionStyle), ReactImageLightbox.getTransform(_objectSpread2(_objectSpread2({}, transforms), bestImageInfo)));

        if (zoomLevel > MIN_ZOOM_LEVEL) {
          imageStyle.cursor = 'move';
        } // support IE 9 and 11


        var hasTrueValue = function hasTrueValue(object) {
          return Object.keys(object).some(function (key) {
            return object[key];
          });
        }; // when error on one of the loads then push custom error stuff


        if (bestImageInfo === null && hasTrueValue(loadErrorStatus)) {
          images.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "".concat(imageClass, " ril__image ril-errored"),
            style: imageStyle,
            key: _this17.props[srcType] + keyEndings[srcType]
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "ril__errorContainer"
          }, _this17.props.imageLoadErrorMessage)));
          return;
        }

        if (bestImageInfo === null) {
          var loadingIcon = loader !== undefined ? loader : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "ril-loading-circle ril__loadingCircle ril__loadingContainer__icon"
          }, _toConsumableArray(new Array(12)).map(function (_, index) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
              // eslint-disable-next-line react/no-array-index-key
              key: index,
              className: "ril-loading-circle-point ril__loadingCirclePoint"
            });
          })); // Fall back to loading icon if the thumbnail has not been loaded

          images.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "".concat(imageClass, " ril__image ril-not-loaded"),
            style: imageStyle,
            key: _this17.props[srcType] + keyEndings[srcType]
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "ril__loadingContainer"
          }, loadingIcon)));
          return;
        }

        var imageSrc = bestImageInfo.src;

        if (discourageDownloads) {
          imageStyle.backgroundImage = "url('".concat(imageSrc, "')");
          images.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "".concat(imageClass, " ril__image ril__imageDiscourager"),
            onDoubleClick: _this17.handleImageDoubleClick,
            onWheel: _this17.handleImageMouseWheel,
            style: imageStyle,
            key: imageSrc + keyEndings[srcType]
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "ril-download-blocker ril__downloadBlocker"
          })));
        } else {
          images.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", _extends({}, imageCrossOrigin ? {
            crossOrigin: imageCrossOrigin
          } : {}, {
            className: "".concat(imageClass, " ril__image"),
            onDoubleClick: _this17.handleImageDoubleClick,
            onWheel: _this17.handleImageMouseWheel,
            onDragStart: function onDragStart(e) {
              return e.preventDefault();
            },
            style: imageStyle,
            src: imageSrc,
            key: imageSrc + keyEndings[srcType],
            alt: typeof imageTitle === 'string' ? imageTitle : translate('Image'),
            draggable: false
          })));
        }
      };

      var zoomMultiplier = this.getZoomMultiplier(); // Next Image (displayed on the right)

      addImage('nextSrc', 'ril-image-next ril__imageNext', {
        x: boxSize.width
      }); // Main Image

      addImage('mainSrc', 'ril-image-current', {
        x: -1 * offsetX,
        y: -1 * offsetY,
        zoom: zoomMultiplier
      }); // Previous Image (displayed on the left)

      addImage('prevSrc', 'ril-image-prev ril__imagePrev', {
        x: -1 * boxSize.width
      });
      var modalStyle = {
        overlay: _objectSpread2({
          zIndex: 1000,
          backgroundColor: 'transparent'
        }, reactModalStyle.overlay),
        content: _objectSpread2({
          backgroundColor: 'transparent',
          overflow: 'hidden',
          // Needed, otherwise keyboard shortcuts scroll the page
          border: 'none',
          borderRadius: 0,
          padding: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }, reactModalStyle.content)
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), _extends({
        isOpen: true,
        onRequestClose: clickOutsideToClose ? this.requestClose : undefined,
        onAfterOpen: function onAfterOpen() {
          // Focus on the div with key handlers
          if (_this17.outerEl.current) {
            _this17.outerEl.current.focus();
          }

          _onAfterOpen();
        },
        style: modalStyle,
        contentLabel: translate('Lightbox'),
        appElement: typeof __webpack_require__.g.window !== 'undefined' ? __webpack_require__.g.window.document.body : undefined
      }, reactModalProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        // eslint-disable-line jsx-a11y/no-static-element-interactions
        // Floating modal with closing animations
        className: "ril-outer ril__outer ril__outerAnimating ".concat(this.props.wrapperClassName, " ").concat(isClosing ? 'ril-closing ril__outerClosing' : ''),
        style: {
          transition: "opacity ".concat(animationDuration, "ms"),
          animationDuration: "".concat(animationDuration, "ms"),
          animationDirection: isClosing ? 'normal' : 'reverse'
        },
        ref: this.outerEl,
        onWheel: this.handleOuterMousewheel,
        onMouseMove: this.handleMouseMove,
        onMouseDown: this.handleMouseDown,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        tabIndex: "-1" // Enables key handlers on div
        ,
        onKeyDown: this.handleKeyInput,
        onKeyUp: this.handleKeyInput
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        // eslint-disable-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        // Image holder
        className: "ril-inner ril__inner",
        onClick: clickOutsideToClose ? this.closeIfClickInner : undefined
      }, images), prevSrc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        // Move to previous image button
        type: "button",
        className: "ril-prev-button ril__navButtons ril__navButtonPrev",
        key: "prev",
        "aria-label": this.props.prevLabel,
        title: this.props.prevLabel,
        onClick: !this.isAnimating() ? this.requestMovePrev : undefined // Ignore clicks during animation

      }), nextSrc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        // Move to next image button
        type: "button",
        className: "ril-next-button ril__navButtons ril__navButtonNext",
        key: "next",
        "aria-label": this.props.nextLabel,
        title: this.props.nextLabel,
        onClick: !this.isAnimating() ? this.requestMoveNext : undefined // Ignore clicks during animation

      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        // Lightbox toolbar
        className: "ril-toolbar ril__toolbar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "ril-toolbar-left ril__toolbarSide ril__toolbarLeftSide"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "ril-toolbar__item ril__toolbarItem"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ril-toolbar__item__child ril__toolbarItemChild"
      }, imageTitle))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "ril-toolbar-right ril__toolbarSide ril__toolbarRightSide"
      }, toolbarButtons && toolbarButtons.map(function (button, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          key: "button_".concat(i + 1),
          className: "ril-toolbar__item ril__toolbarItem"
        }, button);
      }), enableZoom && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "ril-toolbar__item ril__toolbarItem"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        // Lightbox zoom in button
        type: "button",
        key: "zoom-in",
        "aria-label": this.props.zoomInLabel,
        title: this.props.zoomInLabel,
        className: ['ril-zoom-in', 'ril__toolbarItemChild', 'ril__builtinButton', 'ril__zoomInButton'].concat(_toConsumableArray(zoomLevel === MAX_ZOOM_LEVEL ? ['ril__builtinButtonDisabled'] : [])).join(' '),
        ref: this.zoomInBtn,
        disabled: this.isAnimating() || zoomLevel === MAX_ZOOM_LEVEL,
        onClick: !this.isAnimating() && zoomLevel !== MAX_ZOOM_LEVEL ? this.handleZoomInButtonClick : undefined
      })), enableZoom && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "ril-toolbar__item ril__toolbarItem"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        // Lightbox zoom out button
        type: "button",
        key: "zoom-out",
        "aria-label": this.props.zoomOutLabel,
        title: this.props.zoomOutLabel,
        className: ['ril-zoom-out', 'ril__toolbarItemChild', 'ril__builtinButton', 'ril__zoomOutButton'].concat(_toConsumableArray(zoomLevel === MIN_ZOOM_LEVEL ? ['ril__builtinButtonDisabled'] : [])).join(' '),
        ref: this.zoomOutBtn,
        disabled: this.isAnimating() || zoomLevel === MIN_ZOOM_LEVEL,
        onClick: !this.isAnimating() && zoomLevel !== MIN_ZOOM_LEVEL ? this.handleZoomOutButtonClick : undefined
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "ril-toolbar__item ril__toolbarItem"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        // Lightbox close button
        type: "button",
        key: "close",
        "aria-label": this.props.closeLabel,
        title: this.props.closeLabel,
        className: "ril-close ril-toolbar__item__child ril__toolbarItemChild ril__builtinButton ril__closeButton",
        onClick: !this.isAnimating() ? this.requestClose : undefined // Ignore clicks during animation

      })))), this.props.imageCaption &&
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        // Image caption
        onWheel: this.handleCaptionMousewheel,
        onMouseDown: function onMouseDown(event) {
          return event.stopPropagation();
        },
        className: "ril-caption ril__caption",
        ref: this.caption
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ril-caption-content ril__captionContent"
      }, this.props.imageCaption))));
    }
  }], [{
    key: "isTargetMatchImage",
    value: function isTargetMatchImage(target) {
      return target && /ril-image-current/.test(target.className);
    }
  }, {
    key: "parseMouseEvent",
    value: function parseMouseEvent(mouseEvent) {
      return {
        id: 'mouse',
        source: SOURCE_MOUSE,
        x: parseInt(mouseEvent.clientX, 10),
        y: parseInt(mouseEvent.clientY, 10)
      };
    }
  }, {
    key: "parseTouchPointer",
    value: function parseTouchPointer(touchPointer) {
      return {
        id: touchPointer.identifier,
        source: SOURCE_TOUCH,
        x: parseInt(touchPointer.clientX, 10),
        y: parseInt(touchPointer.clientY, 10)
      };
    }
  }, {
    key: "parsePointerEvent",
    value: function parsePointerEvent(pointerEvent) {
      return {
        id: pointerEvent.pointerId,
        source: SOURCE_POINTER,
        x: parseInt(pointerEvent.clientX, 10),
        y: parseInt(pointerEvent.clientY, 10)
      };
    } // Request to transition to the previous image

  }, {
    key: "getTransform",
    value: function getTransform(_ref13) {
      var _ref13$x = _ref13.x,
          x = _ref13$x === void 0 ? 0 : _ref13$x,
          _ref13$y = _ref13.y,
          y = _ref13$y === void 0 ? 0 : _ref13$y,
          _ref13$zoom = _ref13.zoom,
          zoom = _ref13$zoom === void 0 ? 1 : _ref13$zoom,
          width = _ref13.width,
          targetWidth = _ref13.targetWidth;
      var nextX = x;
      var windowWidth = getWindowWidth();

      if (width > windowWidth) {
        nextX += (windowWidth - width) / 2;
      }

      var scaleFactor = zoom * (targetWidth / width);
      return {
        transform: "translate3d(".concat(nextX, "px,").concat(y, "px,0) scale3d(").concat(scaleFactor, ",").concat(scaleFactor, ",1)")
      };
    }
  }]);

  return ReactImageLightbox;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

ReactImageLightbox.propTypes = {
  //-----------------------------
  // Image sources
  //-----------------------------
  // Main display image url
  mainSrc: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  // eslint-disable-line react/no-unused-prop-types
  // Previous display image url (displayed to the left)
  // If left undefined, movePrev actions will not be performed, and the button not displayed
  prevSrc: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  // Next display image url (displayed to the right)
  // If left undefined, moveNext actions will not be performed, and the button not displayed
  nextSrc: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  //-----------------------------
  // Image thumbnail sources
  //-----------------------------
  // Thumbnail image url corresponding to props.mainSrc
  mainSrcThumbnail: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  // eslint-disable-line react/no-unused-prop-types
  // Thumbnail image url corresponding to props.prevSrc
  prevSrcThumbnail: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  // eslint-disable-line react/no-unused-prop-types
  // Thumbnail image url corresponding to props.nextSrc
  nextSrcThumbnail: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  // eslint-disable-line react/no-unused-prop-types
  //-----------------------------
  // Event Handlers
  //-----------------------------
  // Close window event
  // Should change the parent state such that the lightbox is not rendered
  onCloseRequest: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  // Move to previous image event
  // Should change the parent state such that props.prevSrc becomes props.mainSrc,
  //  props.mainSrc becomes props.nextSrc, etc.
  onMovePrevRequest: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  // Move to next image event
  // Should change the parent state such that props.nextSrc becomes props.mainSrc,
  //  props.mainSrc becomes props.prevSrc, etc.
  onMoveNextRequest: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  // Called when an image fails to load
  // (imageSrc: string, srcType: string, errorEvent: object): void
  onImageLoadError: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  // Called when image successfully loads
  onImageLoad: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  // Open window event
  onAfterOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  //-----------------------------
  // Download discouragement settings
  //-----------------------------
  // Enable download discouragement (prevents [right-click -> Save Image As...])
  discourageDownloads: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  //-----------------------------
  // Animation settings
  //-----------------------------
  // Disable all animation
  animationDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  // Disable animation on actions performed with keyboard shortcuts
  animationOnKeyInput: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  // Animation duration (ms)
  animationDuration: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  //-----------------------------
  // Keyboard shortcut settings
  //-----------------------------
  // Required interval of time (ms) between key actions
  // (prevents excessively fast navigation of images)
  keyRepeatLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  // Amount of time (ms) restored after each keyup
  // (makes rapid key presses slightly faster than holding down the key to navigate images)
  keyRepeatKeyupBonus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  //-----------------------------
  // Image info
  //-----------------------------
  // Image title
  imageTitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  // Image caption
  imageCaption: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  // Optional crossOrigin attribute
  imageCrossOrigin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  //-----------------------------
  // Lightbox style
  //-----------------------------
  // Set z-index style, etc., for the parent react-modal (format: https://github.com/reactjs/react-modal#styles )
  reactModalStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({}),
  // Padding (px) between the edge of the window and the lightbox
  imagePadding: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  wrapperClassName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  //-----------------------------
  // Other
  //-----------------------------
  // Array of custom toolbar buttons
  toolbarButtons: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)),
  // When true, clicks outside of the image close the lightbox
  clickOutsideToClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  // Set to false to disable zoom functionality and hide zoom buttons
  enableZoom: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  // Override props set on react-modal (https://github.com/reactjs/react-modal)
  reactModalProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({}),
  // Aria-labels
  nextLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  prevLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  zoomInLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  zoomOutLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  closeLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  imageLoadErrorMessage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  // custom loader
  loader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
ReactImageLightbox.defaultProps = {
  imageTitle: null,
  imageCaption: null,
  toolbarButtons: null,
  reactModalProps: {},
  animationDisabled: false,
  animationDuration: 300,
  animationOnKeyInput: false,
  clickOutsideToClose: true,
  closeLabel: 'Close lightbox',
  discourageDownloads: false,
  enableZoom: true,
  imagePadding: 10,
  imageCrossOrigin: null,
  keyRepeatKeyupBonus: 40,
  keyRepeatLimit: 180,
  mainSrcThumbnail: null,
  nextLabel: 'Next image',
  nextSrc: null,
  nextSrcThumbnail: null,
  onAfterOpen: function onAfterOpen() {},
  onImageLoadError: function onImageLoadError() {},
  onImageLoad: function onImageLoad() {},
  onMoveNextRequest: function onMoveNextRequest() {},
  onMovePrevRequest: function onMovePrevRequest() {},
  prevLabel: 'Previous image',
  prevSrc: null,
  prevSrcThumbnail: null,
  reactModalStyle: {},
  wrapperClassName: '',
  zoomInLabel: 'Zoom in',
  zoomOutLabel: 'Zoom out',
  imageLoadErrorMessage: 'This image failed to load',
  loader: undefined
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactImageLightbox);


/***/ }),

/***/ "./node_modules/react-modal/lib/components/Modal.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/components/Modal.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = __webpack_require__(/*! ./ModalPortal */ "./node_modules/react-modal/lib/components/ModalPortal.js");

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

var isReact16 = _safeHTMLElement.canUseDOM && _reactDom2.default.createPortal !== undefined;

var createHTMLElement = function createHTMLElement(name) {
  return document.createElement(name);
};

var getCreatePortal = function getCreatePortal() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      if (parent && parent.contains(_this.node)) {
        parent.removeChild(_this.node);
      } else {
        // eslint-disable-next-line no-console
        console.warn('React-Modal: "parentSelector" prop did not returned any DOM ' + "element. Make sure that the parent element is unmounted to " + "avoid any memory leaks.");
      }
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = createHTMLElement("div");
      }
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return { prevParent: prevParent, nextParent: nextParent };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!_safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;


      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      }

      // Stop unnecessary renders if modal is remaining closed
      if (!prevProps.isOpen && !isOpen) return;

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = createHTMLElement("div");
      }

      var createPortal = getCreatePortal();
      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  overlayElement: _propTypes2.default.func,
  contentElement: _propTypes2.default.func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  preventScroll: false,
  parentSelector: function parentSelector() {
    return document.body;
  },
  overlayElement: function overlayElement(props, contentEl) {
    return _react2.default.createElement(
      "div",
      props,
      contentEl
    );
  },
  contentElement: function contentElement(props, children) {
    return _react2.default.createElement(
      "div",
      props,
      children
    );
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};


(0, _reactLifecyclesCompat.polyfill)(Modal);

if (true) {
  Modal.setCreateHTMLElement = function (fn) {
    return createHTMLElement = fn;
  };
}

exports["default"] = Modal;

/***/ }),

/***/ "./node_modules/react-modal/lib/components/ModalPortal.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal/lib/components/ModalPortal.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusManager = __webpack_require__(/*! ../helpers/focusManager */ "./node_modules/react-modal/lib/helpers/focusManager.js");

var focusManager = _interopRequireWildcard(_focusManager);

var _scopeTab = __webpack_require__(/*! ../helpers/scopeTab */ "./node_modules/react-modal/lib/helpers/scopeTab.js");

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _classList = __webpack_require__(/*! ../helpers/classList */ "./node_modules/react-modal/lib/helpers/classList.js");

var classList = _interopRequireWildcard(_classList);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _portalOpenInstances = __webpack_require__(/*! ../helpers/portalOpenInstances */ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js");

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);

__webpack_require__(/*! ../helpers/bodyTrap */ "./node_modules/react-modal/lib/helpers/bodyTrap.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};

var TAB_KEY = 9;
var ESC_KEY = 27;

var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName;

      // Remove classes.

      bodyOpenClassName && classList.remove(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);

      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager.returnFocus(_this.props.preventScroll);
          focusManager.teardownScopedFocus();
        } else {
          focusManager.popWithoutFocus();
        }
      }

      if (_this.props.onAfterClose) {
        _this.props.onAfterClose();
      }

      _portalOpenInstances2.default.deregister(_this);
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager.setupScopedFocus(_this.node);
          focusManager.markForFocusLater();
        }

        _this.setState({ isOpen: true }, function () {
          _this.openAnimationFrame = requestAnimationFrame(function () {
            _this.setState({ afterOpen: true });

            if (_this.props.isOpen && _this.props.onAfterOpen) {
              _this.props.onAfterOpen({
                overlayEl: _this.overlay,
                contentEl: _this.content
              });
            }
          });
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus({ preventScroll: true });
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }
      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.attributesFromObject = function (prefix, items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc[prefix + "-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (true) {
        if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
        if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
      }

      if (this.props.isOpen && !prevProps.isOpen) {
        this.open();
      } else if (!this.props.isOpen && prevProps.isOpen) {
        this.close();
      }

      // Focus only needs to be set once when the modal is being opened
      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
        this.focusContent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isOpen) {
        this.afterClose();
      }
      clearTimeout(this.closeTimer);
      cancelAnimationFrame(this.openAnimationFrame);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName;

      // Add classes.

      bodyOpenClassName && classList.add(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider.hide(appElement);
      }

      _portalOpenInstances2.default.register(this);
    }

    // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles,
          children = _props2.children;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      if (this.shouldBeClosed()) {
        return null;
      }

      var overlayProps = {
        ref: this.setOverlayRef,
        className: this.buildClassName("overlay", overlayClassName),
        style: _extends({}, overlayStyles, this.props.style.overlay),
        onClick: this.handleOverlayOnClick,
        onMouseDown: this.handleOverlayOnMouseDown
      };

      var contentProps = _extends({
        id: id,
        ref: this.setContentRef,
        style: _extends({}, contentStyles, this.props.style.content),
        className: this.buildClassName("content", className),
        tabIndex: "-1",
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleContentOnMouseDown,
        onMouseUp: this.handleContentOnMouseUp,
        onClick: this.handleContentOnClick,
        role: this.props.role,
        "aria-label": this.props.contentLabel
      }, this.attributesFromObject("aria", _extends({ modal: true }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
        "data-testid": this.props.testId
      });

      var contentElement = this.props.contentElement(contentProps, children);
      return this.props.overlayElement(overlayProps, contentElement);
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  },
  defaultStyles: {}
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
  onAfterOpen: _propTypes2.default.func,
  onAfterClose: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  overlayElement: _propTypes2.default.func,
  contentElement: _propTypes2.default.func,
  testId: _propTypes2.default.string
};
exports["default"] = ModalPortal;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/ariaAppHider.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/ariaAppHider.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetState = resetState;
exports.log = log;
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _safeHTMLElement = __webpack_require__(/*! ./safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalElement = null;

/* eslint-disable no-console */
/* istanbul ignore next */
function resetState() {
  if (globalElement) {
    if (globalElement.removeAttribute) {
      globalElement.removeAttribute("aria-hidden");
    } else if (globalElement.length != null) {
      globalElement.forEach(function (element) {
        return element.removeAttribute("aria-hidden");
      });
    } else {
      document.querySelectorAll(globalElement).forEach(function (element) {
        return element.removeAttribute("aria-hidden");
      });
    }
  }
  globalElement = null;
}

/* istanbul ignore next */
function log() {
  if (true) {
    var check = globalElement || {};
    console.log("ariaAppHider ----------");
    console.log(check.nodeName, check.className, check.id);
    console.log("end ariaAppHider ----------");
  }
}
/* eslint-enable no-console */

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  var el = appElement || globalElement;
  if (el) {
    return Array.isArray(el) || el instanceof HTMLCollection || el instanceof NodeList ? el : [el];
  } else {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

    return [];
  }
}

function hide(appElement) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = validateElement(appElement)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var el = _step.value;

      el.setAttribute("aria-hidden", "true");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function show(appElement) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = validateElement(appElement)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var el = _step2.value;

      el.removeAttribute("aria-hidden");
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/bodyTrap.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/bodyTrap.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetState = resetState;
exports.log = log;

var _portalOpenInstances = __webpack_require__(/*! ./portalOpenInstances */ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js");

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Body focus trap see Issue #742

var before = void 0,
    after = void 0,
    instances = [];

/* eslint-disable no-console */
/* istanbul ignore next */
function resetState() {
  var _arr = [before, after];

  for (var _i = 0; _i < _arr.length; _i++) {
    var item = _arr[_i];
    if (!item) continue;
    item.parentNode && item.parentNode.removeChild(item);
  }
  before = after = null;
  instances = [];
}

/* istanbul ignore next */
function log() {
  console.log("bodyTrap ----------");
  console.log(instances.length);
  var _arr2 = [before, after];
  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var item = _arr2[_i2];
    var check = item || {};
    console.log(check.nodeName, check.className, check.id);
  }
  console.log("edn bodyTrap ----------");
}
/* eslint-enable no-console */

function focusContent() {
  if (instances.length === 0) {
    if (true) {
      // eslint-disable-next-line no-console
      console.warn("React-Modal: Open instances > 0 expected");
    }
    return;
  }
  instances[instances.length - 1].focusContent();
}

function bodyTrap(eventType, openInstances) {
  if (!before && !after) {
    before = document.createElement("div");
    before.setAttribute("data-react-modal-body-trap", "");
    before.style.position = "absolute";
    before.style.opacity = "0";
    before.setAttribute("tabindex", "0");
    before.addEventListener("focus", focusContent);
    after = before.cloneNode();
    after.addEventListener("focus", focusContent);
  }

  instances = openInstances;

  if (instances.length > 0) {
    // Add focus trap
    if (document.body.firstChild !== before) {
      document.body.insertBefore(before, document.body.firstChild);
    }
    if (document.body.lastChild !== after) {
      document.body.appendChild(after);
    }
  } else {
    // Remove focus trap
    if (before.parentElement) {
      before.parentElement.removeChild(before);
    }
    if (after.parentElement) {
      after.parentElement.removeChild(after);
    }
  }
}

_portalOpenInstances2.default.subscribe(bodyTrap);

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/classList.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/classList.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetState = resetState;
exports.log = log;
var htmlClassList = {};
var docBodyClassList = {};

/* eslint-disable no-console */
/* istanbul ignore next */
function removeClass(at, cls) {
  at.classList.remove(cls);
}

/* istanbul ignore next */
function resetState() {
  var htmlElement = document.getElementsByTagName("html")[0];
  for (var cls in htmlClassList) {
    removeClass(htmlElement, htmlClassList[cls]);
  }

  var body = document.body;
  for (var _cls in docBodyClassList) {
    removeClass(body, docBodyClassList[_cls]);
  }

  htmlClassList = {};
  docBodyClassList = {};
}

/* istanbul ignore next */
function log() {
  if (true) {
    var classes = document.getElementsByTagName("html")[0].className;
    var buffer = "Show tracked classes:\n\n";

    buffer += "<html /> (" + classes + "):\n  ";
    for (var x in htmlClassList) {
      buffer += "  " + x + " " + htmlClassList[x] + "\n  ";
    }

    classes = document.body.className;

    buffer += "\n\ndoc.body (" + classes + "):\n  ";
    for (var _x in docBodyClassList) {
      buffer += "  " + _x + " " + docBodyClassList[_x] + "\n  ";
    }

    buffer += "\n";

    console.log(buffer);
  }
}
/* eslint-enable no-console */

/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }
  poll[className] += 1;
  return className;
};

/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }
  return className;
};

/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */
var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};

/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */
var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};

/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var add = exports.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var remove = exports.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/focusManager.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/focusManager.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetState = resetState;
exports.log = log;
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;

var _tabbable = __webpack_require__(/*! ../helpers/tabbable */ "./node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

/* eslint-disable no-console */
/* istanbul ignore next */
function resetState() {
  focusLaterElements = [];
}

/* istanbul ignore next */
function log() {
  if (true) {
    console.log("focusManager ----------");
    focusLaterElements.forEach(function (f) {
      var check = f || {};
      console.log(check.nodeName, check.className, check.id);
    });
    console.log("end focusManager ----------");
  }
}
/* eslint-enable no-console */

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var preventScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus({ preventScroll: preventScroll });
    }
    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */

function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/portalOpenInstances.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.log = log;
exports.resetState = resetState;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Tracks portals that are open and emits events to subscribers

var PortalOpenInstances = function PortalOpenInstances() {
  var _this = this;

  _classCallCheck(this, PortalOpenInstances);

  this.register = function (openInstance) {
    if (_this.openInstances.indexOf(openInstance) !== -1) {
      if (true) {
        // eslint-disable-next-line no-console
        console.warn("React-Modal: Cannot register modal instance that's already open");
      }
      return;
    }
    _this.openInstances.push(openInstance);
    _this.emit("register");
  };

  this.deregister = function (openInstance) {
    var index = _this.openInstances.indexOf(openInstance);
    if (index === -1) {
      if (true) {
        // eslint-disable-next-line no-console
        console.warn("React-Modal: Unable to deregister " + openInstance + " as " + "it was never registered");
      }
      return;
    }
    _this.openInstances.splice(index, 1);
    _this.emit("deregister");
  };

  this.subscribe = function (callback) {
    _this.subscribers.push(callback);
  };

  this.emit = function (eventType) {
    _this.subscribers.forEach(function (subscriber) {
      return subscriber(eventType,
      // shallow copy to avoid accidental mutation
      _this.openInstances.slice());
    });
  };

  this.openInstances = [];
  this.subscribers = [];
};

var portalOpenInstances = new PortalOpenInstances();

/* eslint-disable no-console */
/* istanbul ignore next */
function log() {
  console.log("portalOpenInstances ----------");
  console.log(portalOpenInstances.openInstances.length);
  portalOpenInstances.openInstances.forEach(function (p) {
    return console.log(p);
  });
  console.log("end portalOpenInstances ----------");
}

/* istanbul ignore next */
function resetState() {
  portalOpenInstances = new PortalOpenInstances();
}
/* eslint-enable no-console */

exports["default"] = portalOpenInstances;

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/safeHTMLElement.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.canUseDOM = exports.SafeNodeList = exports.SafeHTMLCollection = undefined;

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

var SafeHTMLCollection = exports.SafeHTMLCollection = EE.canUseDOM ? window.HTMLCollection : {};

var SafeNodeList = exports.SafeNodeList = EE.canUseDOM ? window.NodeList : {};

var canUseDOM = exports.canUseDOM = EE.canUseDOM;

exports["default"] = SafeHTMLElement;

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/scopeTab.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/scopeTab.js ***!
  \**********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = scopeTab;

var _tabbable = __webpack_require__(/*! ./tabbable */ "./node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getActiveElement() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

  return el.activeElement.shadowRoot ? getActiveElement(el.activeElement.shadowRoot) : el.activeElement;
}

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var target = void 0;

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];
  var activeElement = getActiveElement();

  // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.
  if (node === activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  if (tail === activeElement && !shiftKey) {
    target = head;
  }

  if (head === activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prone, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.
  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

  // If we are not in safari desktop, let the browser control
  // the focus
  if (!isSafariDesktop) return;

  var x = tabbable.indexOf(activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  target = tabbable[x];

  // If the tabbable element does not exist,
  // focus head/tail based on shiftKey
  if (typeof target === "undefined") {
    event.preventDefault();
    target = shiftKey ? tail : head;
    target.focus();
    return;
  }

  event.preventDefault();

  target.focus();
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/tabbable.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/tabbable.js ***!
  \**********************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  try {
    // Otherwise we need to check some styles
    var style = window.getComputedStyle(element);
    return zeroSize ? style.getPropertyValue("overflow") !== "visible" ||
    // if 'overflow: visible' set, check if there is actually any overflow
    element.scrollWidth <= 0 && element.scrollHeight <= 0 : style.getPropertyValue("display") == "none";
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.warn("Failed to inspect element style");
    return false;
  }
}

function visible(element) {
  var parentElement = element;
  var rootNode = element.getRootNode && element.getRootNode();
  while (parentElement) {
    if (parentElement === document.body) break;

    // if we are not hidden yet, skip to checking outside the Web Component
    if (rootNode && parentElement === rootNode) parentElement = rootNode.host.parentNode;

    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  var descendants = [].slice.call(element.querySelectorAll("*"), 0).reduce(function (finished, el) {
    return finished.concat(!el.shadowRoot ? [el] : findTabbableDescendants(el.shadowRoot));
  }, []);
  return descendants.filter(tabbable);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-modal/lib/index.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _Modal = __webpack_require__(/*! ./components/Modal */ "./node_modules/react-modal/lib/components/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = _Modal2.default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/reactstrap/es/Badge.js":
/*!*********************************************!*\
  !*** ./node_modules/reactstrap/es/Badge.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "color", "innerRef", "pill", "tag"];




var propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  pill: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  color: 'secondary',
  pill: false,
  tag: 'span'
};

var Badge = function Badge(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      innerRef = props.innerRef,
      pill = props.pill,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'badge', 'badge-' + color, pill ? 'badge-pill' : false), cssModule);

  if (attributes.href && Tag === 'span') {
    Tag = 'a';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);

/***/ }),

/***/ "./node_modules/reactstrap/es/Breadcrumb.js":
/*!**************************************************!*\
  !*** ./node_modules/reactstrap/es/Breadcrumb.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  listTag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  listClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
var defaultProps = {
  tag: 'nav',
  listTag: 'ol',
  'aria-label': 'breadcrumb'
};

var Breadcrumb = function Breadcrumb(props) {
  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className), cssModule);
  var listClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()('breadcrumb', listClassName), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    "aria-label": label
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ListTag, {
    className: listClasses
  }, children));
};

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);

/***/ }),

/***/ "./node_modules/reactstrap/es/BreadcrumbItem.js":
/*!******************************************************!*\
  !*** ./node_modules/reactstrap/es/BreadcrumbItem.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "active", "tag"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  active: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'li'
};

var BreadcrumbItem = function BreadcrumbItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, active ? 'active' : false, 'breadcrumb-item'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    "aria-current": active ? 'page' : undefined
  }));
};

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadcrumbItem);

/***/ }),

/***/ "./node_modules/reactstrap/es/Card.js":
/*!********************************************!*\
  !*** ./node_modules/reactstrap/es/Card.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "color", "body", "inverse", "outline", "tag", "innerRef"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  inverse: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  body: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  outline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)])
};
var defaultProps = {
  tag: 'div'
};

var Card = function Card(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      body = props.body,
      inverse = props.inverse,
      outline = props.outline,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'card', inverse ? 'text-white' : false, body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + "-" + color : false), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./node_modules/reactstrap/es/CardBody.js":
/*!************************************************!*\
  !*** ./node_modules/reactstrap/es/CardBody.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "innerRef", "tag"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)])
};
var defaultProps = {
  tag: 'div'
};

var CardBody = function CardBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      innerRef = props.innerRef,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'card-body'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardBody);

/***/ }),

/***/ "./node_modules/reactstrap/es/CardImg.js":
/*!***********************************************!*\
  !*** ./node_modules/reactstrap/es/CardImg.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "top", "bottom", "tag"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  top: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  bottom: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'img'
};

var CardImg = function CardImg(props) {
  var className = props.className,
      cssModule = props.cssModule,
      top = props.top,
      bottom = props.bottom,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var cardImgClassName = 'card-img';

  if (top) {
    cardImgClassName = 'card-img-top';
  }

  if (bottom) {
    cardImgClassName = 'card-img-bottom';
  }

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, cardImgClassName), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

CardImg.propTypes = propTypes;
CardImg.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardImg);

/***/ }),

/***/ "./node_modules/reactstrap/es/CardSubtitle.js":
/*!****************************************************!*\
  !*** ./node_modules/reactstrap/es/CardSubtitle.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "tag"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'div'
};

var CardSubtitle = function CardSubtitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'card-subtitle'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

CardSubtitle.propTypes = propTypes;
CardSubtitle.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardSubtitle);

/***/ }),

/***/ "./node_modules/reactstrap/es/CardText.js":
/*!************************************************!*\
  !*** ./node_modules/reactstrap/es/CardText.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "tag"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'p'
};

var CardText = function CardText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'card-text'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

CardText.propTypes = propTypes;
CardText.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardText);

/***/ }),

/***/ "./node_modules/reactstrap/es/CardTitle.js":
/*!*************************************************!*\
  !*** ./node_modules/reactstrap/es/CardTitle.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "tag"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'div'
};

var CardTitle = function CardTitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'card-title'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

CardTitle.propTypes = propTypes;
CardTitle.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardTitle);

/***/ }),

/***/ "./node_modules/reactstrap/es/TabContent.js":
/*!**************************************************!*\
  !*** ./node_modules/reactstrap/es/TabContent.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TabContext */ "./node_modules/reactstrap/es/TabContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");







var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  activeTab: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'div'
};

var TabContent = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(TabContent, _Component);

  TabContent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.activeTab !== nextProps.activeTab) {
      return {
        activeTab: nextProps.activeTab
      };
    }

    return null;
  };

  function TabContent(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      activeTab: _this.props.activeTab
    };
    return _this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        Tag = _this$props.tag;
    var attributes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.omit)(this.props, Object.keys(propTypes));
    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()('tab-content', className), cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_TabContext__WEBPACK_IMPORTED_MODULE_6__.TabContext.Provider, {
      value: {
        activeTabId: this.state.activeTab
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      className: classes
    })));
  };

  return TabContent;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabContent);
TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;

/***/ }),

/***/ "./node_modules/reactstrap/es/TabContext.js":
/*!**************************************************!*\
  !*** ./node_modules/reactstrap/es/TabContext.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabContext": () => (/* binding */ TabContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * TabContext
 * {
 *  activeTabId: PropTypes.any
 * }
 */

var TabContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

/***/ }),

/***/ "./node_modules/reactstrap/es/TabPane.js":
/*!***********************************************!*\
  !*** ./node_modules/reactstrap/es/TabPane.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabPane)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TabContext */ "./node_modules/reactstrap/es/TabContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "tabId", "tag"];





var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  tabId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
};
var defaultProps = {
  tag: 'div'
};
function TabPane(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabId = props.tabId,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var getClasses = function getClasses(activeTabId) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()('tab-pane', className, {
      active: tabId === activeTabId
    }), cssModule);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_TabContext__WEBPACK_IMPORTED_MODULE_6__.TabContext.Consumer, null, function (_ref) {
    var activeTabId = _ref.activeTabId;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      className: getClasses(activeTabId)
    }));
  });
}
TabPane.propTypes = propTypes;
TabPane.defaultProps = defaultProps;

/***/ })

}]);