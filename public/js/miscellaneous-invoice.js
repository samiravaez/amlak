"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["miscellaneous-invoice"],{

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

/***/ "./resources/admin/views/app/pages/miscellaneous/invoice.js":
/*!******************************************************************!*\
  !*** ./resources/admin/views/app/pages/miscellaneous/invoice.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Table.js");
/* harmony import */ var _containers_navs_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../containers/navs/Breadcrumb */ "./resources/admin/containers/navs/Breadcrumb.js");
/* harmony import */ var _components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/common/CustomBootstrap */ "./resources/admin/components/common/CustomBootstrap.js");
/* harmony import */ var _helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/IntlMessages */ "./resources/admin/helpers/IntlMessages.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable react/no-danger */









var Invoice = function Invoice(_ref) {
  var match = _ref.match;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_containers_navs_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"], {
          heading: "menu.invoice",
          match: match
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Separator, {
          className: "mb-5"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "mb-5",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
              id: "pages.invoice-info"
            })
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
          className: "mb-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
            id: "pages.react-version"
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "invoice-react",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        className: "mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "mb-5 invoice-contents",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "d-flex flex-column justify-content-between",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "d-flex flex-column",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "d-flex flex-row justify-content-between pt-2 pb-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "d-flex align-self-center",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                    src: "https://coloredstrategies.com/mailing/gogo.png",
                    alt: "Logo"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "d-flex w-30 text-right align-self-center",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
                    className: "text-small text-semi-muted mb-0",
                    children: ["ColoredStrategies Inc 35 Little Russell St. Bloomsburg London,UK", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), "784 451 12 47"]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "border-bottom pt-4 mb-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "d-flex flex-row justify-content-between mb-5",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "d-flex flex-column w-70 mr-2 p-4 text-semi-muted bg-semi-muted",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                    className: "mb-0",
                    children: "Latashia Nagy"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                    className: "mb-0",
                    children: "100-148 Warwick Trfy, Kansas City, USA"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "d-flex w-30 flex-column text-right p-4 text-semi-muted bg-semi-muted",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                    className: "mb-0",
                    children: "Invoice #: 741"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                    className: "mb-0",
                    children: "02.02.2019"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
                borderless: true,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
                      className: "text-muted text-extra-small mb-2",
                      children: "ITEM NAME"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
                      className: "text-muted text-extra-small mb-2",
                      children: "COUNT"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
                      className: "text-right text-muted text-extra-small mb-2",
                      children: "PRICE"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tbody", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: "Marble Cake"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: "3 pcs"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "text-right",
                      children: "$ 14.82"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: "Chocolate Cake"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: "2 pcs"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "text-right",
                      children: "$ 8.97"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: "Fat Rascal"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: "2 pcs"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "text-right",
                      children: "$ 18.24"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: "Cremeschnitte"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: "2 pcs"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "text-right",
                      children: "$ 4.24"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: "Cheesecake"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: "3 pcs"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "text-right",
                      children: "$ 6.27"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: "Magdalena"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: "2 pcs"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "text-right",
                      children: "$ 10.97"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: "Genoise"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      children: "2 pcs"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "text-right",
                      children: "$ 21.24"
                    })]
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "d-flex flex-column",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "border-bottom pt-3 mb-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
                borderless: true,
                className: "d-flex justify-content-end",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tbody", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "text-semi-muted",
                      children: "Subtotal :"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "text-right",
                      children: "$ 61.82"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "text-semi-muted",
                      children: "Tax :"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "text-right",
                      children: "$ 61.82"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "text-semi-muted",
                      children: "Shipping :"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "text-right",
                      children: "$ 3.21"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                    className: "font-weight-bold",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "text-semi-muted",
                      children: "Total :"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                      className: "text-right",
                      children: "$ 68.14"
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "border-bottom pt-3 mb-5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
                className: "text-muted text-small text-center",
                children: ["Invoice was created on a computer and is valid without the signature and seal.", ' ']
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
          className: "mb-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
            id: "pages.inline-version"
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "invoice",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        className: "mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "content",
          dangerouslySetInnerHTML: {
            __html: "<div className=\"invoice-contents\" style=\"background-color:#ffffff; height:1200px; max-width:830px; font-family: Helvetica,Arial,sans-serif !important; position: relative;\">\n                                <table bgcolor=\"#ffffff\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%; background-color:#ffffff;border-collapse:separate !important; border-spacing:0;color:#242128; margin:0;padding:30px; padding-top: 20px;\"\n                                    heigth=\"auto\">\n        \n                                    <tbody>\n                                        <tr>\n                                            <td align=\"left\" valign=\"center\" style=\"padding-bottom:35px; padding-top:15px; border-top:0;width:100% !important;\">\n                                                <img src=\"https://coloredstrategies.com/mailing/gogo.png\" />\n                                            </td>\n                                            <td align=\"right\" valign=\"center\" style=\"padding-bottom:20px;border-top:0;width:100% !important;\">\n                                                <p style=\"color: #8f8f8f; font-weight: normal; line-height: 1.2; font-size: 12px; white-space: nowrap; \">\n                                                    ColoredStrategies Inc<br> 35 Little Russell St. Bloomsburg London,UK<br>784 451 12 47\n                                                </p>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td colspan=\"2\" style=\"padding-top:30px; border-top:1px solid #f1f0f0\">\n                                                <table style=\"width: 100%;\">\n                                                    <tbody>\n                                                        <tr>\n                                                            <td style=\"vertical-align:middle; border-radius: 3px; padding:30px; background-color: #f9f9f9; border-right: 5px solid white;\">\n                                                                <p style=\"color:#303030; font-size: 14px;  line-height: 1.6; margin:0; padding:0;\">\n                                                                    Latashia Nagy<br>100-148 Warwick Trfy, Kansas City, USA\n                                                                </p>\n                                                            </td>\n        \n                                                            <td style=\"text-align: right; padding-top:0px; padding-bottom:0; vertical-align:middle; padding:30px; background-color: #f9f9f9; border-radius: 3px; border-left: 5px solid white;\">\n                                                                <p style=\"color:#8f8f8f; font-size: 14px; padding: 0; line-height: 1.6; margin:0; \">\n                                                                    Invoice #: 741<br>\n                                                                    02.02.2019\n                                                                </p>\n                                                            </td>\n                                                        </tr>\n                                                    </tbody>\n                                                </table>\n                                                <table style=\"width: 100%; margin-top:40px;\">\n                                                    <thead>\n                                                        <tr>\n                                                            <th style=\"text-align:left; font-size: 10px; color:#8f8f8f; padding-bottom: 15px; padding-top:10px; padding-bottom:10px;\">\n                                                                ITEM NAME\n                                                            </th>\n                                                            <th style=\"text-align:left; font-size: 10px; color:#8f8f8f; padding-bottom: 15px; padding-top:10px; padding-bottom:10px;\">\n                                                                COUNT\n                                                            </th>\n                                                            <th style=\"text-align:right; font-size: 10px; color:#8f8f8f; padding-bottom: 15px; padding-top:10px; padding-bottom:10px;\">\n                                                                PRICE\n                                                            </th>\n                                                        </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                        <tr>\n                                                            <td style=\"padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;\">\n                                                                <p style=\"font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;\">Marble\n                                                                    Cake</p>\n                                                            </td>\n                                                            <td style=\"padding-top:10px; padding-bottom:10px;\">\n                                                                <p href=\"#\" style=\"font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;\">3\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style=\"padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;\">\n                                                                <p style=\"font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;\">$\n                                                                    14.82</p>\n                                                            </td>\n                                                        </tr>\n\n                                                        <tr>\n                                                            <td style=\"padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;\">\n                                                                <p style=\"font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;\">Chocolate\n                                                                    Cake</p>\n                                                            </td>\n                                                            <td style=\"padding-top:10px; padding-bottom:10px;\">\n                                                                <p href=\"#\" style=\"font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;\">2\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style=\"padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;\">\n                                                                <p style=\"font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;\">$\n                                                                    8.97</p>\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td style=\"padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;\">\n                                                                <p style=\"font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;\">Fat\n                                                                    Rascal</p>\n                                                            </td>\n                                                            <td style=\"padding-top:10px; padding-bottom:10px;\">\n                                                                <p href=\"#\" style=\"font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;\">2\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style=\"padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;\">\n                                                                <p style=\"font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;\">$\n                                                                    18.24</p>\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td style=\"padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;\">\n                                                                <p style=\"font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;\">Cremeschnitte</p>\n                                                            </td>\n                                                            <td style=\"padding-top:10px; padding-bottom:10px;\">\n                                                                <p href=\"#\" style=\"font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;\">2\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style=\"padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;\">\n                                                                <p style=\"font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;\">$\n                                                                    4.24</p>\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td style=\"padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;\">\n                                                                <p style=\"font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;\">Cheesecake</p>\n                                                            </td>\n                                                            <td style=\"padding-top:10px; padding-bottom:10px;\">\n                                                                <p href=\"#\" style=\"font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;\">3\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style=\"padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;\">\n                                                                <p style=\"font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;\">$\n                                                                    6.27</p>\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td style=\"padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;\">\n                                                                <p style=\"font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;\">Magdalena</p>\n                                                            </td>\n                                                            <td style=\"padding-top:10px; padding-bottom:10px;\">\n                                                                <p href=\"#\" style=\"font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;\">2\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style=\"padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;\">\n                                                                <p style=\"font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;\">$\n                                                                    10.97</p>\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td style=\"padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;\">\n                                                                <p style=\"font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;\">Genoise</p>\n                                                            </td>\n                                                            <td style=\"padding-top:10px; padding-bottom:10px;\">\n                                                                <p href=\"#\" style=\"font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;\">2\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style=\"padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;\">\n                                                                <p style=\"font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;\">$\n                                                                    21.24</p>\n                                                            </td>\n                                                        </tr>\n                                                        \n                                                    </tbody>\n                                                </table>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n        \n                                <table bgcolor=\"#ffffff\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"position:absolute; bottom:0; width:100%; background-color:#ffffff;border-collapse:separate !important; border-spacing:0;color:#242128; margin:0;padding:30px; padding-top: 20px;\"\n                                    heigth=\"auto\">\n                                    <tr>\n                                        <td colspan=\"3\" style=\"border-top:1px solid #f1f0f0\">&nbsp;</td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan=\"2\" style=\"width: 100%;padding-top:10px; padding-bottom:10px;\">\n                                            <p href=\"#\" style=\"font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;\">\n                                                Subtotal : </p>\n                                        </td>\n                                        <td style=\"padding-top:0px; text-align: right;padding-top:10px; padding-bottom:10px;\">\n                                            <p style=\"font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px\">$\n                                                61.82</p>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan=\"2\" style=\"width: 100%;padding-top:10px; padding-bottom:10px;\">\n                                            <p href=\"#\" style=\"font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;\">\n                                                Tax : </p>\n                                        </td>\n                                        <td style=\"padding-top:0px; text-align: right;padding-top:10px; padding-bottom:10px;\">\n                                            <p style=\"font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px\">$\n                                                2.18</p>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan=\"2\" style=\"width: 100%;padding-top:10px; padding-bottom:10px;\">\n                                            <p href=\"#\" style=\"font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;\">\n                                                Shipping : </p>\n                                        </td>\n                                        <td style=\"padding-top:0px; text-align: right;padding-top:10px; padding-bottom:10px;\">\n                                            <p style=\"font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px\">$\n                                                3.21</p>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan=\"2\" style=\" width: 100%; padding-bottom:15px; padding-top:10px;\">\n                                            <p href=\"#\" style=\"font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;\">\n                                                <strong>Total : </strong></p>\n                                        </td>\n                                        <td style=\"padding-top:0px; text-align: right; padding-bottom:15px; padding-top:10px;\">\n                                            <p style=\"font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px\"><strong>$\n                                                    68.14</strong></p>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan=\"3\" style=\"border-top:1px solid #f1f0f0\">&nbsp;</td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan=\"3\" style=\"text-align:center;\">\n                                            <p style=\"color: #909090; font-size:11px; text-align:center;\">Invoice was created\n                                                on a computer and\n                                                is valid without the signature and seal. </p>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </div>\n                    \n                    "
          }
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Invoice);

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

/***/ "./node_modules/reactstrap/es/Row.js":
/*!*******************************************!*\
  !*** ./node_modules/reactstrap/es/Row.js ***!
  \*******************************************/
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


var _excluded = ["className", "cssModule", "noGutters", "tag", "form", "widths"];




var rowColWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var rowColsPropType = prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]);
var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  noGutters: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  form: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  xs: rowColsPropType,
  sm: rowColsPropType,
  md: rowColsPropType,
  lg: rowColsPropType,
  xl: rowColsPropType
};
var defaultProps = {
  tag: 'div',
  widths: rowColWidths
};

var Row = function Row(props) {
  var className = props.className,
      cssModule = props.cssModule,
      noGutters = props.noGutters,
      Tag = props.tag,
      form = props.form,
      widths = props.widths,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var colSize = props[colWidth];
    delete attributes[colWidth];

    if (!colSize) {
      return;
    }

    var isXs = !i;
    colClasses.push(isXs ? "row-cols-" + colSize : "row-cols-" + colWidth + "-" + colSize);
  });
  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, noGutters ? 'no-gutters' : null, form ? 'form-row' : 'row', colClasses), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);

/***/ }),

/***/ "./node_modules/reactstrap/es/Table.js":
/*!*********************************************!*\
  !*** ./node_modules/reactstrap/es/Table.js ***!
  \*********************************************/
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


var _excluded = ["className", "cssModule", "size", "bordered", "borderless", "striped", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"];




var propTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  bordered: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  borderless: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  striped: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  dark: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  hover: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  responsive: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  responsiveTag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)])
};
var defaultProps = {
  tag: 'table',
  responsiveTag: 'div'
};

var Table = function Table(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      bordered = props.bordered,
      borderless = props.borderless,
      striped = props.striped,
      dark = props.dark,
      hover = props.hover,
      responsive = props.responsive,
      Tag = props.tag,
      ResponsiveTag = props.responsiveTag,
      innerRef = props.innerRef,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);
  var table = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    ref: innerRef,
    className: classes
  }));

  if (responsive) {
    var responsiveClassName = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(responsive === true ? 'table-responsive' : "table-responsive-" + responsive, cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ResponsiveTag, {
      className: responsiveClassName
    }, table);
  }

  return table;
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ })

}]);