"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["miscellaneous-mailing"],{

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

/***/ "./resources/admin/views/app/pages/miscellaneous/mailing.js":
/*!******************************************************************!*\
  !*** ./resources/admin/views/app/pages/miscellaneous/mailing.js ***!
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
/* harmony import */ var _containers_navs_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../containers/navs/Breadcrumb */ "./resources/admin/containers/navs/Breadcrumb.js");
/* harmony import */ var _components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/common/CustomBootstrap */ "./resources/admin/components/common/CustomBootstrap.js");
/* harmony import */ var _helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/IntlMessages */ "./resources/admin/helpers/IntlMessages.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable react/no-danger */









var Mailing = function Mailing(_ref) {
  var match = _ref.match;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_containers_navs_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"], {
          heading: "menu.mailing",
          match: match
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Separator, {
          className: "mb-5"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_2__.Colxx, {
        xxs: "12",
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "mb-5",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_helpers_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
              id: "pages.mailing-info"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "content",
          dangerouslySetInnerHTML: {
            __html: "\n                    <div leftmargin=\"0\" marginwidth=\"0\" topmargin=\"0\" marginheight=\"0\" offset=\"0\" style=\"height:auto !important;width:100% !important; font-family: Helvetica,Arial,sans-serif !important; margin-bottom: 40px;\">\n                    <center>\n                        <table bgcolor=\"#ffffff\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"max-width:600px; background-color:#ffffff;border:1px solid #e4e2e2;border-collapse:separate !important; border-radius:4px;border-spacing:0;color:#242128; margin:0;padding:40px;\"\n                            heigth=\"auto\">\n                            <tbody>\n                                <tr>\n                                    <td align=\"left\" valign=\"center\" style=\"padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;\">\n                                        <img src=\"https://coloredstrategies.com/mailing/gogo.png\" />\n                                    </td>\n                                    <td align=\"right\" valign=\"center\" style=\"padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;\">\n                                        <span style=\"color: #8f8f8f; font-weight: normal; line-height: 2; font-size: 14px;\">02.02.2019</span>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td colSpan=\"2\" style=\"padding-top:10px;border-top:1px solid #e4e2e2\">\n                                        <h3 style=\"color:#303030; font-size:18px; line-height: 1.6; font-weight:500;\">Get\n                                            Started</h3>\n                                        <p style=\"color:#8f8f8f; font-size: 14px; padding-bottom: 20px; line-height: 1.4;\">\n                                            Dynamically target high-payoff intellectual capital for customized\n                                            technologies. Objectively integrate emerging core competencies before\n                                            process-centric communities. Dramatically evisculate holistic\n                                            innovation rather than client-centric data.<br/><br/>Progressively\n                                            maintain extensive infomediaries via extensible niches. Dramatically\n                                            disseminate standardized metrics after resource-leveling processes.\n                                        </p>\n                                        <h3 style=\"color:#303030; font-size:18px; line-height: 1.6; font-weight:500;\">Verification\n                                            Code</h3>\n                                        <p style=\"background-color:#f1f1f1; padding: 8px 15px; border-radius: 50px; display: inline-block; margin-bottom:20px; font-size: 14px;  line-height: 1.4; font-family: Courier New, Courier, monospace; margin-top:0\">148\n                                            544 174</p>\n            \n                                        <h3 style=\"color:#303030; font-size:18px; line-height: 1.6; font-weight:500;\">Steps\n                                            to\n                                            Follow</h3>\n                                        <ol style=\"color:#8f8f8f; font-size: 14px; padding-bottom: 20px; padding-left:20px; line-height: 1.6\">\n                                            <li>Preliminary thinking systems</li>\n                                            <li>Bandwidth efficient</li>\n                                            <li>Green space</li>\n                                            <li>Social impact</li>\n                                        </ol>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td colSpan=\"2\">\n                                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"min-width:100%;border-collapse:collapse;\">\n                                            <tbody>\n                                                <tr>\n                                                    <td style=\"padding:15px 0px;\" valign=\"top\" align=\"center\">\n                                                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:separate !important;\">\n                                                            <tbody>\n                                                                <tr>\n                                                                    <td align=\"center\" valign=\"middle\" style=\"padding:13px;\">\n                                                                        <a href=\"#\" title=\"START NOW\" target=\"_blank\" style=\"font-size: 14px; line-height: 1.5; font-weight: 700; letter-spacing: 1px; padding: 15px 40px; text-align:center; text-decoration:none; color:#FFFFFF; border-radius: 50px; background-color:#922c88;\">START\n                                                                            NOW</a>\n                                                                    </td>\n                                                                </tr>\n                                                            </tbody>\n                                                        </table>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <table style=\"margin-top:30px; padding-bottom:20px;; margin-bottom: 40px;\">\n                            <tbody>\n                                <tr>\n                                    <td align=\"center\" valign=\"center\">\n                                        <p style=\"font-size: 12px; text-decoration: none;line-height: 1; color:#909090; margin-top:0px; margin-bottom:5px; \">\n                                            ColoredStrategies Inc, 35 Little Russell St. Bloomsburg London,UK\n                                        </p>\n                                        <p style=\"font-size: 12px; line-height:1; color:#909090;  margin-top:5px; margin-bottom:5px;\">\n                                            <a href=\"#\" style=\"color: #922c88; text-decoration:none;\">Privacy\n                                                Policy</a>\n                                            | <a href=\"#\" style=\"color: #922c88; text-decoration:none;\">Unscubscribe</a>\n                                        </p>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </center>\n                </div>\n            \n                <div leftmargin=\"0\" marginwidth=\"0\" topmargin=\"0\" marginheight=\"0\" offset=\"0\" style=\"height:auto !important;width:100% !important; font-family: Helvetica,Arial,sans-serif !important;\">\n                    <center>\n                        <table bgcolor=\"#ffffff\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"max-width:600px; background-color:#ffffff;border:1px solid #e4e2e2;border-collapse:separate !important; border-radius:4px;border-spacing:0;color:#242128; margin:0;padding:40px;\"\n                            heigth=\"auto\">\n                            <tbody>\n                                <tr>\n                                    <td align=\"left\" valign=\"center\" style=\"padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;\">\n                                        <img src=\"https://coloredstrategies.com/mailing/gogo.png\" />\n                                    </td>\n                                    <td align=\"right\" valign=\"center\" style=\"padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;\">\n                                        <span style=\"color: #8f8f8f; font-weight: normal; line-height: 2; font-size: 14px;\">02.02.2019</span>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td colSpan=\"2\" style=\"padding-top:10px; border-top:1px solid #e4e2e2\">\n                                        <table>\n                                            <tr>\n                                                <td colSpan=\"2\" style=\"padding-bottom:20px;\">\n                                                    <h3 style=\"color:#303030; font-size:18px; line-height: 1.6; font-weight:500;\">Order\n                                                        Summary</h3>\n                                                    <p style=\"color:#8f8f8f; font-size: 14px; padding-bottom: 20px; line-height: 1.4; margin-bottom:0;\">\n                                                        Dynamically target high-payoff intellectual capital for\n                                                        customized technologies. Objectively integrate emerging\n                                                        core competencies before process-centric communities.\n                                                        Dramatically evisculate holistic innovation rather than\n                                                        client-centric data.<br/><br/>Progressively maintain\n                                                        extensive infomediaries via extensible niches.\n                                                    </p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td style=\"padding-top:0px; padding-bottom:20px; width:140px \">\n                                                    <img src=\"https://coloredstrategies.com/mailing/product-1.jpg\" style=\"width: 113px; height: 85px; object-fit: cover; border-radius: 3px; \" />\n                                                </td>\n                                                <td style=\"padding-top:0px; padding-bottom:20px;\">\n                                                    <h4 style=\"font-size: 16px; line-height: 1; margin-bottom:20px;\"><a href=\"#\"\n                                                            style=\"text-decoration: none; color:#303030; font-weight:500;\">Marble\n                                                            Cake</a></h4>\n                                                    <p href=\"#\" style=\"font-size: 12px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;\">3\n                                                        pcs</p>\n                                                    <p style=\"font-size: 12px; line-height: 1; color:#909090; margin-top:5px;\">Standart\n                                                        Package</p>\n                                                </td>\n                                                <td style=\"padding-top:0px; padding-bottom:20px; text-align: right;\">\n                                                    <p style=\"font-size: 13px; line-height: 1; color:#922c88;  margin-top:5px; vertical-align:top; white-space:nowrap;\">$\n                                                        14.82</p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan=\"3\" style=\"border-top:1px solid #e4e2e2\">&nbsp;</td>\n                                            </tr>\n                                            <tr>\n                                                <td style=\"padding-top:0px; padding-bottom:20px; width:140px \">\n                                                    <img src=\"https://coloredstrategies.com/mailing/product-2.jpg\" style=\"width: 113px; height: 85px; object-fit: cover; border-radius: 3px; \" />\n                                                </td>\n                                                <td style=\"padding-top:0px; padding-bottom:20px;\">\n                                                    <h4 style=\"font-size: 16px; line-height: 1; margin-bottom:20px;\"><a href=\"#\"\n                                                            style=\"text-decoration: none; color:#303030; font-weight:500;\">Chocolate\n                                                            Cake</a></h4>\n                                                    <p href=\"#\" style=\"font-size: 12px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;\">2\n                                                        pcs</p>\n                                                    <p style=\"font-size: 12px; line-height: 1; color:#909090; margin-top:5px;\">Standart\n                                                        Package</p>\n                                                </td>\n                                                <td style=\"padding-top:0px; padding-bottom:20px; text-align: right;\">\n                                                    <p style=\"font-size: 13px; line-height: 1; color:#922c88;  margin-top:5px; vertical-align:top; white-space:nowrap;\">$\n                                                        4.24</p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan=\"3\" style=\"border-top:1px solid #e4e2e2\">&nbsp;</td>\n                                            </tr>\n                                            <tr>\n                                                <td style=\"padding-top:0px; padding-bottom:20px; width:140px \">\n                                                    <img src=\"https://coloredstrategies.com/mailing/product-3.jpg\" style=\"width: 113px; height: 85px; object-fit: cover; border-radius: 3px; \" />\n                                                </td>\n                                                <td style=\"padding-top:0px; padding-bottom:20px;\">\n                                                    <h4 style=\"font-size: 16px; line-height: 1; margin-bottom:20px;\"><a href=\"#\"\n                                                            style=\"text-decoration: none; color:#303030; font-weight:500;\">Fat\n                                                            Rascal</a></h4>\n                                                    <p href=\"#\" style=\"font-size: 12px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px;  margin-bottom:0;\">1\n                                                        pcs</p>\n                                                    <p style=\"font-size: 12px; line-height: 1; color:#909090; margin-top:5px;\">Standart\n                                                        Package</p>\n                                                </td>\n                                                <td style=\"padding-top:0px; padding-bottom:20px; text-align: right;\">\n                                                    <p style=\"font-size: 13px; line-height: 1; color:#922c88;  margin-top:5px; vertical-align:top; white-space:nowrap;\">$\n                                                        12.91</p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan=\"3\" style=\"border-top:1px solid #e4e2e2\">&nbsp;</td>\n                                            </tr>\n                                            <tr>\n                                                <td style=\"padding-top:0px; padding-bottom:20px; width:140px \">\n                                                    <img src=\"https://coloredstrategies.com/mailing/product-4.jpg\" style=\"width: 113px; height: 85px; object-fit: cover; border-radius: 3px; \" />\n                                                </td>\n                                                <td style=\"padding-top:0px; padding-bottom:20px;\">\n                                                    <h4 style=\"font-size: 16px; line-height: 1; margin-bottom:20px;\"><a href=\"#\"\n                                                            style=\"text-decoration: none; color:#303030; font-weight:500;\">Cremeschnitte</a></h4>\n                                                    <p href=\"#\" style=\"font-size: 12px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;\">4\n                                                        pcs</p>\n                                                    <p style=\"font-size: 12px; line-height: 1; color:#909090; margin-top:5px;\">Standart\n                                                        Package</p>\n                                                </td>\n                                                <td style=\"padding-top:0px; padding-bottom:20px; text-align: right;\">\n                                                    <p style=\"font-size: 13px; line-height: 1; color:#922c88;  margin-top:5px; vertical-align:top; white-space:nowrap;\">$\n                                                        54.20</p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan=\"3\" style=\"border-top:1px solid #e4e2e2\">&nbsp;</td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan=\"2\" style=\"padding-top:0px; padding-bottom:5px; text-align: right; color:#909090;\">\n                                                    <p style=\"font-size: 12px; line-height: 1; margin-top:5px; vertical-align:top;  margin-bottom: 0;\">Subtotal:&nbsp;</p>\n                                                </td>\n                                                <td style=\"padding-top:0px; padding-bottom:5px; text-align: right; padding-left: 15px;\">\n                                                    <p style=\"font-size: 13px; line-height: 1; margin-top:5px; vertical-align:top; color:#922c88; white-space:nowrap; margin-bottom: 0;\">$\n                                                        124.20</p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan=\"2\" style=\"padding-top:0px; padding-bottom:5px; text-align: right; color:#909090;\">\n                                                    <p style=\"font-size: 12px; line-height: 1; margin-top:5px; vertical-align:top; margin-bottom: 0;\">Shipping:&nbsp;</p>\n                                                </td>\n                                                <td style=\"padding-top:0px; padding-bottom:5px; text-align: right; padding-left: 15px;\">\n                                                    <p style=\"font-size: 13px; line-height: 1; margin-top:5px; vertical-align:top; color:#922c88; white-space:nowrap; margin-bottom: 0;\">$\n                                                        4.04</p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan=\"2\" style=\"padding-top:0px; padding-bottom:5px; text-align: right; color:#909090;\">\n                                                    <p style=\"font-size: 12px; line-height: 1; margin-top:5px; vertical-align:top; margin-bottom: 0;\">Taxes:&nbsp;</p>\n                                                </td>\n                                                <td style=\"padding-top:0px; padding-bottom:5px; text-align: right; padding-left: 15px;\">\n                                                    <p style=\"font-size: 13px; line-height: 1; margin-top:5px; vertical-align:top; color:#922c88; white-space:nowrap; margin-bottom: 0;\">$\n                                                        9.14</p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan=\"2\" style=\"padding-top:0px; padding-bottom:5px; text-align: right; color:#909090;\">\n                                                    <p style=\"font-size: 12px; line-height: 1; margin-top:5px; vertical-align:top; margin-bottom: 0;\"><strong>Total:&nbsp;</strong></p>\n                                                </td>\n                                                <td style=\"padding-top:0px; padding-bottom:5px; text-align: right; padding-left: 15px;\">\n                                                    <p style=\"font-size: 13px; line-height: 1; margin-top:5px; vertical-align:top; color:#922c88; white-space:nowrap; margin-bottom: 0;\"><strong>$\n                                                            137.38</strong></p>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n            \n                        <table style=\"margin-top:30px; padding-bottom:20px; margin-bottom: 40px;\">\n                            <tbody>\n                                <tr>\n                                    <td align=\"center\" valign=\"center\">\n                                        <p style=\"font-size: 12px; text-decoration: none;line-height: 1; color:#909090; margin-top:0px; margin-bottom:5px; \">\n                                            ColoredStrategies Inc, 35 Little Russell St. Bloomsburg London,UK\n                                        </p>\n                                        <p style=\"font-size: 12px; line-height:1; color:#909090;  margin-top:5px; margin-bottom:5px;\">\n                                            <a href=\"#\" style=\"color: #922c88; text-decoration:none;\">Privacy\n                                                Policy</a>\n                                            | <a href=\"#\" style=\"color: #922c88; text-decoration:none;\">Unscubscribe</a>\n                                        </p>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </center>\n                </div>\n            \n                <div leftmargin=\"0\" marginwidth=\"0\" topmargin=\"0\" marginheight=\"0\" offset=\"0\" style=\"height:auto !important;width:100% !important; font-family: Helvetica,Arial,sans-serif !important;\">\n                    <center>\n                        <table bgcolor=\"#ffffff\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"max-width:600px; background-color:#ffffff;border:1px solid #e4e2e2;border-collapse:separate !important; border-radius:4px;border-spacing:0;color:#242128; margin:0;padding:40px;\"\n                            heigth=\"auto\">\n                            <tbody>\n                                <tr>\n                                    <td align=\"left\" valign=\"center\" style=\"padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;\">\n                                        <img src=\"https://coloredstrategies.com/mailing/gogo.png\" />\n                                    </td>\n                                    <td align=\"right\" valign=\"center\" style=\"padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;\">\n                                        <span style=\"color: #8f8f8f; font-weight: normal; line-height: 2; font-size: 14px;\">02.02.2019</span>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td colSpan=\"2\" style=\"padding-top:10px;border-top:1px solid #e4e2e2\">\n                                        <table>\n                                            <tr>\n                                                <td style=\"padding-bottom:20px;\">\n                                                    <h3 style=\"color:#303030; font-size:18px; line-height: 1.6; font-weight:500;\">Latest\n                                                        from Blog</h3>\n                                                    <p style=\"color:#8f8f8f; font-size: 14px; padding-bottom: 20px; line-height: 1.4;\">\n                                                        Dynamically target high-payoff intellectual capital for\n                                                        customized technologies. Objectively integrate emerging\n                                                        core competencies before process-centric communities.\n                                                    </p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td style=\"padding-bottom: 30px;\">\n                                                    <a href=\"#\">\n                                                        <img style=\"max-width: 100%; object-fit: cover; border-radius: 3px; margin-bottom:5px;\"\n                                                            src=\"https://gogo-react.coloredstrategies.com/img/carousels/1.jpg\" />\n                                                    </a>\n                                                    <h4 style=\"font-size: 16px; line-height: 1; margin-bottom:5px; margin-top: 10px;\"><a\n                                                            href=\"#\" style=\"text-decoration: none; color:#303030; font-weight:500;\">Distinctively\n                                                            Exploit Optimal Alignments</a></h4>\n                                                    <p style=\"color:#8f8f8f; font-size: 14px; line-height: 1.4; margin-top:10px\">\n                                                        Objectively integrate emerging\n                                                        core competencies before integrate emerging process-centric\n                                                        communities.\n                                                    </p>\n                                                    <p style=\"font-size: 14px; line-height: 1; margin-top:5px;\"><a style=\"color:#922c88; text-decoration:initial;\"\n                                                            href=\"#\">Learn\n                                                            More</a></p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan=\"3\" style=\"border-top:1px solid #e4e2e2; padding-bottom:10px;\">&nbsp;</td>\n                                            </tr>\n                                            <tr>\n                                                <td style=\"padding-bottom: 30px;\">\n                                                    <a href=\"#\">\n                                                        <img style=\"max-width: 100%; object-fit: cover; border-radius: 3px; margin-bottom:5px;\"\n                                                            src=\"https://gogo-react.coloredstrategies.com/img/carousels/2.jpg\" />\n                                                    </a>\n                                                    <h4 style=\"font-size: 16px; line-height: 1; margin-bottom:5px; margin-top: 10px;\"><a\n                                                            href=\"#\" style=\"text-decoration: none; color:#303030; font-weight:500;\">Assertively\n                                                            Iterate Resource Maximizing</a></h4>\n                                                    <p style=\"color:#8f8f8f; font-size: 14px; line-height: 1.4; margin-top:10px\">\n                                                        Objectively integrate emerging\n                                                        core competencies before integrate emerging process-centric\n                                                        communities.\n                                                    </p>\n                                                    <p style=\"font-size: 14px; line-height: 1; margin-top:5px;\"><a style=\"color:#922c88; text-decoration:initial;\"\n                                                            href=\"#\">Learn\n                                                            More</a></p>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td colSpan=\"3\" style=\"border-top:1px solid #e4e2e2; padding-bottom:10px;\">&nbsp;</td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <a href=\"#\">\n                                                        <img style=\"max-width: 100%; object-fit: cover; border-radius: 3px; margin-bottom:5px;\"\n                                                            src=\"https://gogo-react.coloredstrategies.com/img/carousels/3.jpg\" />\n                                                    </a>\n                                                    <h4 style=\"font-size: 16px; line-height: 1; margin-bottom:5px; margin-top: 10px;\"><a\n                                                            href=\"#\" style=\"text-decoration: none; color:#303030; font-weight:500;\">Objectively\n                                                            Manufactured Products</a></h4>\n                                                    <p style=\"color:#8f8f8f; font-size: 14px; line-height: 1.4; margin-top:10px\">\n                                                        Objectively integrate emerging\n                                                        core competencies before integrate emerging process-centric\n                                                        communities.\n                                                    </p>\n                                                    <p style=\"font-size: 14px; line-height: 1; margin-top:5px;\"><a style=\"color:#922c88; text-decoration:initial;\"\n                                                            href=\"#\">Learn\n                                                            More</a></p>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n            \n                        <table style=\"margin-top:30px; padding-bottom:20px; margin-bottom: 40px;\">\n                            <tbody>\n                                <tr>\n                                    <td align=\"center\" valign=\"center\">\n                                        <p style=\"font-size: 12px; text-decoration: none;line-height: 1; color:#909090; margin-top:0px; margin-bottom:5px; \">\n                                            ColoredStrategies Inc, 35 Little Russell St. Bloomsburg London,UK\n                                        </p>\n                                        <p style=\"font-size: 12px; line-height:1; color:#909090;  margin-top:5px; margin-bottom:5px;\">\n                                            <a href=\"#\" style=\"color: #922c88; text-decoration:none;\">Privacy\n                                                Policy</a>\n                                            | <a href=\"#\" style=\"color: #922c88; text-decoration:none;\">Unscubscribe</a>\n                                        </p>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </center>\n                </div>\n                    "
          }
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mailing);

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

/***/ })

}]);