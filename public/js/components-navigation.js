"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components-navigation"],{

/***/ "./resources/admin/containers/navs/Breadcrumb.js":
/*!*******************************************************!*\
  !*** ./resources/admin/containers/navs/Breadcrumb.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/admin/views/app/ui/components/navigation.js":
/*!***************************************************************!*\
  !*** ./resources/admin/views/app/ui/components/navigation.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardTitle.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Nav.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/NavItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/NavLink.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/UncontrolledDropdown.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownToggle.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownMenu.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Pagination.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/PaginationItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/PaginationLink.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Breadcrumb.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/BreadcrumbItem.js");
/* harmony import */ var _helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../helpers/IntlMessages */ "./resources/admin/helpers/IntlMessages.js");
/* harmony import */ var _components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/common/CustomBootstrap */ "./resources/admin/components/common/CustomBootstrap.js");
/* harmony import */ var _containers_navs_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../containers/navs/Breadcrumb */ "./resources/admin/containers/navs/Breadcrumb.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var NavigationUi = function NavigationUi(_ref) {
  var match = _ref.match;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_containers_navs_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["default"], {
          heading: "menu.navigation",
          match: match
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Separator, {
          className: "mb-5"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "mb-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                id: "nav.basic"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  active: true,
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.active"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.link"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.link"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  className: "disabled",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.disabled"
                  })
                })
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "mb-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                id: "nav.horizontal-alignment"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
              className: "justify-content-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  active: true,
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.active"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.link"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.link"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  className: "disabled",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.disabled"
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
              className: "justify-content-end",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  active: true,
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.active"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.link"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.link"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  className: "disabled",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.disabled"
                  })
                })
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "mb-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                id: "nav.vertical-alignment"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
              className: "flex-column",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  active: true,
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.active"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.link"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.link"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  className: "disabled",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.disabled"
                  })
                })
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "mb-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                id: "nav.pills"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
              className: "nav-pills",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  active: true,
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.active"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.link"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.link"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  className: "disabled",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.disabled"
                  })
                })
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "mb-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                id: "nav.fill-justify"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
              pills: true,
              className: "nav-fill",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  active: true,
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.active"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.longer-link"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.link"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  className: "disabled",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.disabled"
                  })
                })
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "mb-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                id: "nav.pills-dropdowns"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
              pills: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  href: "#",
                  active: true,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.link"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
                nav: true,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
                  className: "nav-link",
                  caret: true,
                  color: "empty",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.dropdown"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
                    header: true,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                      id: "nav.header"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
                    disabled: true,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                      id: "nav.action"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                      id: "nav.another-action"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
                    divider: true
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                      id: "nav.another-action"
                    })
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.link"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.another-link"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  className: "disabled",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    id: "nav.disabled-link"
                  })
                })
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "mb-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                id: "nav.pagination-basic"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
              "aria-label": "Page navigation example",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "first",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-control-start"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "prev",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-arrow-left"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  href: "#",
                  children: "1"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                active: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  href: "#",
                  children: "2"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  href: "#",
                  children: "3"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "next",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-arrow-right"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "last",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-control-end"
                  })
                })
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "mb-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                id: "nav.pagination-sizing"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", {
              className: "mb-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                id: "nav.large"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
              size: "lg",
              "aria-label": "Page navigation example",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "first",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-control-start"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "prev",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-arrow-left"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  href: "#",
                  children: "1"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                active: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  href: "#",
                  children: "2"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                disabled: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  href: "#",
                  children: "3"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "next",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-arrow-right"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "last",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-control-end"
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", {
              className: "mb-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                id: "nav.small"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
              size: "sm",
              "aria-label": "Page navigation example",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "first",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-control-start"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "prev",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-arrow-left"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  href: "#",
                  children: "1"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                active: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  href: "#",
                  children: "2"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                disabled: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  href: "#",
                  children: "3"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "next",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-arrow-right"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "last",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-control-end"
                  })
                })
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "mb-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                id: "nav.pagination-alignment"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", {
              className: "mb-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                id: "nav.center"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
              size: "sm",
              "aria-label": "Page navigation example",
              listClassName: "justify-content-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "first",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-control-start"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "prev",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-arrow-left"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  href: "#",
                  children: "1"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                active: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  href: "#",
                  children: "2"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  href: "#",
                  children: "3"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "next",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-arrow-right"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "last",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-control-end"
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", {
              className: "mb-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                id: "nav.right"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
              size: "sm",
              "aria-label": "Page navigation example",
              listClassName: "justify-content-end",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "first",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-control-start"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "prev",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-arrow-left"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  href: "#",
                  children: "1"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                active: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  href: "#",
                  children: "2"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                disabled: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  href: "#",
                  children: "3"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "next",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-arrow-right"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  className: "last",
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    className: "simple-icon-control-end"
                  })
                })
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "mb-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
                id: "nav.breadcrumb-basic"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
                active: true,
                children: "Home"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  href: "#/",
                  children: "Home"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
                active: true,
                children: "Library"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  href: "#/",
                  children: "Home"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  href: "#/",
                  children: "Library"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
                active: true,
                children: "Data"
              })]
            })]
          })
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationUi);

/***/ }),

/***/ "./node_modules/reactstrap/es/Breadcrumb.js":
/*!**************************************************!*\
  !*** ./node_modules/reactstrap/es/Breadcrumb.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/reactstrap/es/CardTitle.js":
/*!*************************************************!*\
  !*** ./node_modules/reactstrap/es/CardTitle.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/reactstrap/es/Pagination.js":
/*!**************************************************!*\
  !*** ./node_modules/reactstrap/es/Pagination.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


var _excluded = ["className", "listClassName", "cssModule", "size", "tag", "listTag", "aria-label"];




var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  listClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  listTag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
var defaultProps = {
  tag: 'nav',
  listTag: 'ul',
  'aria-label': 'pagination'
};

var Pagination = function Pagination(props) {
  var _classNames;

  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      size = props.size,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className), cssModule);
  var listClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(listClassName, 'pagination', (_classNames = {}, _classNames["pagination-" + size] = !!size, _classNames)), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, {
    className: classes,
    "aria-label": label
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ListTag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: listClasses
  })));
};

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ "./node_modules/reactstrap/es/PaginationItem.js":
/*!******************************************************!*\
  !*** ./node_modules/reactstrap/es/PaginationItem.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


var _excluded = ["active", "className", "cssModule", "disabled", "tag"];




var propTypes = {
  active: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType
};
var defaultProps = {
  tag: 'li'
};

var PaginationItem = function PaginationItem(props) {
  var active = props.active,
      className = props.className,
      cssModule = props.cssModule,
      disabled = props.disabled,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'page-item', {
    active: active,
    disabled: disabled
  }), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

PaginationItem.propTypes = propTypes;
PaginationItem.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationItem);

/***/ }),

/***/ "./node_modules/reactstrap/es/PaginationLink.js":
/*!******************************************************!*\
  !*** ./node_modules/reactstrap/es/PaginationLink.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


var _excluded = ["className", "cssModule", "next", "previous", "first", "last", "tag"];




var propTypes = {
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  next: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  previous: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  first: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  last: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType
};
var defaultProps = {
  tag: 'a'
};

var PaginationLink = function PaginationLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      next = props.next,
      previous = props.previous,
      first = props.first,
      last = props.last,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'page-link'), cssModule);
  var defaultAriaLabel;

  if (previous) {
    defaultAriaLabel = 'Previous';
  } else if (next) {
    defaultAriaLabel = 'Next';
  } else if (first) {
    defaultAriaLabel = 'First';
  } else if (last) {
    defaultAriaLabel = 'Last';
  }

  var ariaLabel = props['aria-label'] || defaultAriaLabel;
  var defaultCaret;

  if (previous) {
    defaultCaret = "\u2039";
  } else if (next) {
    defaultCaret = "\u203A";
  } else if (first) {
    defaultCaret = "\xAB";
  } else if (last) {
    defaultCaret = "\xBB";
  }

  var children = props.children;

  if (children && Array.isArray(children) && children.length === 0) {
    children = null;
  }

  if (!attributes.href && Tag === 'a') {
    Tag = 'button';
  }

  if (previous || next || first || last) {
    children = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      "aria-hidden": "true",
      key: "caret"
    }, children || defaultCaret), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      className: "sr-only",
      key: "sr"
    }, ariaLabel)];
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes,
    "aria-label": ariaLabel
  }), children);
};

PaginationLink.propTypes = propTypes;
PaginationLink.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationLink);

/***/ })

}]);