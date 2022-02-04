(self["webpackChunk"] = self["webpackChunk"] || []).push([["addresses"],{

/***/ "./resources/admin/components/DatatablePagination.js":
/*!***********************************************************!*\
  !*** ./resources/admin/components/DatatablePagination.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/PaginationItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/PaginationLink.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/UncontrolledDropdown.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownToggle.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownMenu.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Pagination.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-param-reassign */

/* eslint-disable react/no-array-index-key */






var DataTablePagination = function DataTablePagination(_ref) {
  var page = _ref.page,
      pages = _ref.pages,
      canPrevious = _ref.canPrevious,
      canNext = _ref.canNext,
      pageSizeOptions = _ref.pageSizeOptions,
      showPageSizeOptions = _ref.showPageSizeOptions,
      showPageJump = _ref.showPageJump,
      defaultPageSize = _ref.defaultPageSize,
      onPageChange = _ref.onPageChange,
      onPageSizeChange = _ref.onPageSizeChange,
      paginationMaxSize = _ref.paginationMaxSize;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(page),
      _useState2 = _slicedToArray(_useState, 2),
      pageState = _useState2[0],
      setPageState = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultPageSize),
      _useState4 = _slicedToArray(_useState3, 2),
      pageSize = _useState4[0],
      setPageSize = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setPageState(page);
  }, [page]);

  var getSafePage = function getSafePage(_page) {
    var p = _page;

    if (Number.isNaN(_page)) {
      p = page;
    }

    return Math.min(Math.max(p, 0), pages - 1);
  };

  var changePageSize = function changePageSize(size) {
    onPageSizeChange(size);
    setPageSize(size);
  };

  var changePage = function changePage(_page) {
    var p = getSafePage(_page);

    if (p !== pageState) {
      setPageState(p);
      onPageChange(p);
    }
  };

  var pageClick = function pageClick(pageIndex) {
    changePage(pageIndex);
  };

  var renderPages = function renderPages() {
    var totalPages = pages;
    var endPage = pages;
    var currentPage = pageState;
    var startPage = 0;
    var maxSize = paginationMaxSize;

    if (maxSize) {
      if (endPage > maxSize) {
        startPage = Math.max(currentPage + 1 - Math.floor(maxSize / 2), 1);
        endPage = startPage + maxSize - 1;

        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - maxSize + 1;
        }

        startPage -= 1;
      }
    }

    var pageButtons = [];

    var _loop = function _loop(i) {
      var active = currentPage === i;
      pageButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
        active: active,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onClick: function onClick() {
            return pageClick(i);
          },
          children: i + 1
        })
      }, i));
    };

    for (var i = startPage; i < endPage; i += 1) {
      _loop(i);
    }

    return pageButtons;
  };

  var renderPageJump = function renderPageJump() {
    var pageNumbers = [];

    var _loop2 = function _loop2(i) {
      pageNumbers.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClick: function onClick() {
          return changePage(i);
        },
        children: i + 1
      }, i));
    };

    for (var i = 0; i < pages; i += 1) {
      _loop2(i);
    }

    return pageNumbers;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "text-center",
      children: [showPageJump && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "float-left pt-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          children: "Page "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "d-inline-block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
            caret: true,
            color: "outline-primary",
            size: "xs",
            children: pageState + 1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            direction: "left",
            children: renderPageJump()
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          children: " of "
        }), pages]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "d-inline-block",
        size: "sm",
        listClassName: "justify-content-center",
        "aria-label": "Page navigation example",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "".concat(!canPrevious && 'disabled'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "prev",
            onClick: function onClick() {
              if (!canPrevious) return;
              changePage(page - 1);
            },
            disabled: !canPrevious,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
              className: "simple-icon-arrow-left"
            })
          })
        }), renderPages(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "".concat(!canNext && 'disabled'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "next",
            onClick: function onClick() {
              if (!canNext) return;
              changePage(page + 1);
            },
            disabled: !canNext,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
              className: "simple-icon-arrow-right"
            })
          })
        })]
      }), showPageSizeOptions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "float-right pt-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "text-muted text-small mr-1",
          children: "\u0646\u0645\u0627\u06CC\u0634 \u0631\u06A9\u0648\u0631\u062F "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "d-inline-block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
            caret: true,
            color: "outline-primary",
            size: "xs",
            children: pageSize
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            right: true,
            children: pageSizeOptions.map(function (size, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
                onClick: function onClick() {
                  return changePageSize(size);
                },
                children: size
              }, index);
            })
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataTablePagination);

/***/ }),

/***/ "./resources/admin/components/TableAjax.js":
/*!*************************************************!*\
  !*** ./resources/admin/components/TableAjax.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Table.js");
/* harmony import */ var _DatatablePagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DatatablePagination */ "./resources/admin/components/DatatablePagination.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var TableAjax = function TableAjax(_ref) {
  var columns = _ref.columns,
      data = _ref.data,
      fetchData = _ref.fetchData,
      loading = _ref.loading,
      controlledPageCount = _ref.pageCount,
      _ref$debug = _ref.debug,
      debug = _ref$debug === void 0 ? false : _ref$debug;

  var _useTable = (0,react_table__WEBPACK_IMPORTED_MODULE_0__.useTable)({
    columns: columns,
    data: data,
    initialState: {
      pageIndex: 0
    },
    // Pass our hoisted table state
    manualPagination: true,
    // Tell the usePagination
    // hook that we'll handle our own data fetching
    // This means we'll also have to provide our own
    // pageCount.
    pageCount: controlledPageCount
  }, react_table__WEBPACK_IMPORTED_MODULE_0__.usePagination),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      prepareRow = _useTable.prepareRow,
      page = _useTable.page,
      canPreviousPage = _useTable.canPreviousPage,
      canNextPage = _useTable.canNextPage,
      pageOptions = _useTable.pageOptions,
      pageCount = _useTable.pageCount,
      gotoPage = _useTable.gotoPage,
      nextPage = _useTable.nextPage,
      previousPage = _useTable.previousPage,
      setPageSize = _useTable.setPageSize,
      _useTable$state = _useTable.state,
      pageIndex = _useTable$state.pageIndex,
      pageSize = _useTable$state.pageSize; // Listen for changes in pagination and use the state to fetch our new data


  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    fetchData({
      pageIndex: pageIndex,
      pageSize: pageSize
    });
  }, [pageIndex, pageSize]); // Render the UI for your table

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [debug && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("pre", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
        children: JSON.stringify({
          pageIndex: pageIndex,
          pageSize: pageSize,
          pageCount: pageCount,
          canNextPage: canNextPage,
          canPreviousPage: canPreviousPage
        }, null, 2)
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({
      striped: true
    }, getTableProps()), {}, {
      responsive: true,
      bordered: true,
      striped: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
        children: headerGroups.map(function (headerGroup) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
            children: headerGroup.headers.map(function (column) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("th", _objectSpread(_objectSpread({}, column.getHeaderProps()), {}, {
                children: [column.render('Header'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  children: column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''
                })]
              }));
            })
          }));
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
        children: [page.map(function (row, i) {
          prepareRow(row);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
            children: row.cells.map(function (cell) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", _objectSpread(_objectSpread({}, cell.getCellProps({
                className: cell.column.cellClass
              })), {}, {
                children: cell.render('Cell')
              }));
            })
          }));
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tr", {
          children: loading &&
          /*#__PURE__*/
          // Use our custom loading state to show a loading indicator
          (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
            colSpan: "10000",
            children: "Loading..."
          })
        })]
      }))]
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DatatablePagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
      page: pageIndex,
      pages: pageCount,
      canPrevious: canPreviousPage,
      canNext: canNextPage,
      pageSizeOptions: [1, 4, 10, 20, 30, 40, 50],
      showPageSizeOptions: true,
      showPageJump: false,
      defaultPageSize: pageSize,
      onPageChange: function onPageChange(p) {
        return gotoPage(p);
      },
      onPageSizeChange: function onPageSizeChange(s) {
        return setPageSize(s);
      },
      paginationMaxSize: pageCount
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableAjax);

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

/***/ "./resources/admin/views/app/sheets/addresses.js":
/*!*******************************************************!*\
  !*** ./resources/admin/views/app/sheets/addresses.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/UncontrolledButtonDropdown.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownToggle.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownMenu.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardTitle.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalHeader.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/FormGroup.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Label.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalFooter.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/common/CustomBootstrap */ "./resources/admin/components/common/CustomBootstrap.js");
/* harmony import */ var _containers_navs_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../containers/navs/Breadcrumb */ "./resources/admin/containers/navs/Breadcrumb.js");
/* harmony import */ var _components_TableAjax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/TableAjax */ "./resources/admin/components/TableAjax.js");
/* harmony import */ var react_yandex_maps__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-yandex-maps */ "./node_modules/react-yandex-maps/dist/production/react-yandex-maps.esm.js");
/* harmony import */ var _constants_defaultValues__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants/defaultValues */ "./resources/admin/constants/defaultValues.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var Addresses = function Addresses(_ref) {
  var match = _ref.match;
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useHistory)();
  var id = match.params.id ? match.params.id : null;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      data = _React$useState2[0],
      setData = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      loading = _React$useState4[0],
      setLoading = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1__.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      pageCount = _React$useState6[0],
      setPageCount = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      addressModal = _React$useState8[0],
      setAddressModal = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1__.useState(null),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      selectId = _React$useState10[0],
      setSelectedId = _React$useState10[1];

  var Actions = function Actions(_ref2) {
    var id = _ref2.id;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
      tag: 'a',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
        color: "secondary",
        outline: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
          className: 'simple-icon-options-vertical'
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
          onClick: function onClick() {
            setSelectedId(id);
            setAddressModal(true);
          },
          children: "\u0648\u06CC\u0631\u0627\u06CC\u0634"
        })
      })]
    });
  };

  var cols = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(function () {
    return [{
      Header: 'استان',
      accessor: 'province',
      cellClass: 'list-item-heading',
      Cell: function Cell(_ref3) {
        var row = _ref3.row;
        return row.original.first_name + ' ' + row.original.last_name;
      }
    }, {
      Header: 'شهر',
      accessor: 'city',
      cellClass: 'text-muted',
      Cell: function Cell(props) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: props.value
        });
      }
    }, {
      Header: 'آدرس',
      accessor: 'address',
      cellClass: 'text-muted',
      Cell: function Cell(props) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: props.value
        });
      }
    }, {
      Header: 'شماره موبایل',
      accessor: 'mobile',
      cellClass: 'text-muted',
      Cell: function Cell(props) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: props.value
        });
      }
    }, {
      Header: 'تلفن',
      accessor: 'phone',
      cellClass: 'text-muted',
      Cell: function Cell(props) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: props.value
        });
      }
    }, {
      Header: 'گزینه ها',
      accessor: 'id',
      cellClass: 'text-muted text-center',
      Cell: function Cell(props) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Actions, {
          id: props.value
        });
      }
    }];
  }, []);

  var handleModalAddressSubmit = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.post("".concat(_constants_defaultValues__WEBPACK_IMPORTED_MODULE_6__.adminPathApi, "/shop/changeStatus/").concat(selectId), values).then(function (_ref5) {
                var data = _ref5.data;
                console.log(data);
              })["catch"](function (error) {
                return console.log(error);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleModalAddressSubmit(_x) {
      return _ref4.apply(this, arguments);
    };
  }(); //const tableInstance = useTable({columns, data})


  var fetchData = react__WEBPACK_IMPORTED_MODULE_1__.useCallback( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(_ref6) {
      var pageSize, pageIndex;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              pageSize = _ref6.pageSize, pageIndex = _ref6.pageIndex;
              _context2.next = 3;
              return axios.get("".concat(_constants_defaultValues__WEBPACK_IMPORTED_MODULE_6__.adminPathApi, "/address/").concat(id, "?page=").concat(pageIndex + 1, "&per_page=").concat(pageSize)).then(function (res) {
                setData(res.data.data);
                setPageCount(res.data.last_page);
                return res;
              })["catch"](function (error) {
                return error;
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref7.apply(this, arguments);
    };
  }(), []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
    fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: 'loading'
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_3__.Colxx, {
        xss: "12",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_containers_navs_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__["default"], {
          heading: "menu.addresses.list",
          match: match
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_3__.Separator, {
          className: "mb-5"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_common_CustomBootstrap__WEBPACK_IMPORTED_MODULE_3__.Colxx, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: "mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
            children: "\u0645\u0634\u062A\u0631\u06CC \u0647\u0627"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_TableAjax__WEBPACK_IMPORTED_MODULE_5__["default"], {
            columns: cols,
            data: data,
            fetchData: fetchData,
            loading: loading,
            pageCount: pageCount
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
      isOpen: addressModal,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
        children: "\u0631\u062F \u0641\u0631\u0648\u0634\u06AF\u0627\u0647"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
        initialValues: {
          type: 'deny_shop'
        },
        onSubmit: handleModalAddressSubmit,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
                children: "\u0639\u0644\u062A \u0631\u062F \u0641\u0631\u0648\u0634\u06AF\u0627\u0647"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                as: 'textarea',
                name: 'reason',
                className: 'form-control'
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_yandex_maps__WEBPACK_IMPORTED_MODULE_23__.Button, {
              type: "submit",
              color: "danger",
              children: "\u062B\u0628\u062A"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_yandex_maps__WEBPACK_IMPORTED_MODULE_23__.Button, {
              color: "secondary",
              onClick: function onClick() {
                setAddressModal(false);
              },
              children: "\u0628\u0633\u062A\u0646"
            })]
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Addresses);

/***/ }),

/***/ "./node_modules/deepmerge/dist/es.js":
/*!*******************************************!*\
  !*** ./node_modules/deepmerge/dist/es.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deepmerge_1);


/***/ }),

/***/ "./node_modules/formik/dist/formik.esm.js":
/*!************************************************!*\
  !*** ./node_modules/formik/dist/formik.esm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorMessage": () => (/* binding */ ErrorMessage),
/* harmony export */   "FastField": () => (/* binding */ FastField),
/* harmony export */   "Field": () => (/* binding */ Field),
/* harmony export */   "FieldArray": () => (/* binding */ FieldArray),
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "Formik": () => (/* binding */ Formik),
/* harmony export */   "FormikConsumer": () => (/* binding */ FormikConsumer),
/* harmony export */   "FormikContext": () => (/* binding */ FormikContext),
/* harmony export */   "FormikProvider": () => (/* binding */ FormikProvider),
/* harmony export */   "connect": () => (/* binding */ connect),
/* harmony export */   "getActiveElement": () => (/* binding */ getActiveElement),
/* harmony export */   "getIn": () => (/* binding */ getIn),
/* harmony export */   "insert": () => (/* binding */ insert),
/* harmony export */   "isEmptyArray": () => (/* binding */ isEmptyArray),
/* harmony export */   "isEmptyChildren": () => (/* binding */ isEmptyChildren),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isInputEvent": () => (/* binding */ isInputEvent),
/* harmony export */   "isInteger": () => (/* binding */ isInteger),
/* harmony export */   "isNaN": () => (/* binding */ isNaN$1),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isPromise": () => (/* binding */ isPromise),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "move": () => (/* binding */ move),
/* harmony export */   "prepareDataForValidation": () => (/* binding */ prepareDataForValidation),
/* harmony export */   "replace": () => (/* binding */ replace),
/* harmony export */   "setIn": () => (/* binding */ setIn),
/* harmony export */   "setNestedObjectValues": () => (/* binding */ setNestedObjectValues),
/* harmony export */   "swap": () => (/* binding */ swap),
/* harmony export */   "useField": () => (/* binding */ useField),
/* harmony export */   "useFormik": () => (/* binding */ useFormik),
/* harmony export */   "useFormikContext": () => (/* binding */ useFormikContext),
/* harmony export */   "validateYupSchema": () => (/* binding */ validateYupSchema),
/* harmony export */   "withFormik": () => (/* binding */ withFormik),
/* harmony export */   "yupToFormErrors": () => (/* binding */ yupToFormErrors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/es.js");
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es/isPlainObject */ "./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var lodash_es_clone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es/clone */ "./node_modules/lodash-es/clone.js");
/* harmony import */ var lodash_es_toPath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/toPath */ "./node_modules/lodash-es/toPath.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es/cloneDeep */ "./node_modules/lodash-es/cloneDeep.js");










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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/** @private is the value an empty array? */

var isEmptyArray = function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0;
};
/** @private is the given object a Function? */

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};
/** @private is the given object an Object? */

var isObject = function isObject(obj) {
  return obj !== null && typeof obj === 'object';
};
/** @private is the given object an integer? */

var isInteger = function isInteger(obj) {
  return String(Math.floor(Number(obj))) === obj;
};
/** @private is the given object a string? */

var isString = function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
};
/** @private is the given object a NaN? */
// eslint-disable-next-line no-self-compare

var isNaN$1 = function isNaN(obj) {
  return obj !== obj;
};
/** @private Does a React component have exactly 0 children? */

var isEmptyChildren = function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) === 0;
};
/** @private is the given object/value a promise? */

var isPromise = function isPromise(value) {
  return isObject(value) && isFunction(value.then);
};
/** @private is the given object/value a type of synthetic event? */

var isInputEvent = function isInputEvent(value) {
  return value && isObject(value) && isObject(value.target);
};
/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?Document} doc Defaults to current document.
 * @return {Element | null}
 * @see https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/dom/getActiveElement.js
 */

function getActiveElement(doc) {
  doc = doc || (typeof document !== 'undefined' ? document : undefined);

  if (typeof doc === 'undefined') {
    return null;
  }

  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
/**
 * Deeply get a value from an object via its path.
 */

function getIn(obj, key, def, p) {
  if (p === void 0) {
    p = 0;
  }

  var path = (0,lodash_es_toPath__WEBPACK_IMPORTED_MODULE_4__["default"])(key);

  while (obj && p < path.length) {
    obj = obj[path[p++]];
  }

  return obj === undefined ? def : obj;
}
/**
 * Deeply set a value from in object via it's path. If the value at `path`
 * has changed, return a shallow copy of obj with `value` set at `path`.
 * If `value` has not changed, return the original `obj`.
 *
 * Existing objects / arrays along `path` are also shallow copied. Sibling
 * objects along path retain the same internal js reference. Since new
 * objects / arrays are only created along `path`, we can test if anything
 * changed in a nested structure by comparing the object's reference in
 * the old and new object, similar to how russian doll cache invalidation
 * works.
 *
 * In earlier versions of this function, which used cloneDeep, there were
 * issues whereby settings a nested value would mutate the parent
 * instead of creating a new object. `clone` avoids that bug making a
 * shallow copy of the objects along the update path
 * so no object is mutated in place.
 *
 * Before changing this function, please read through the following
 * discussions.
 *
 * @see https://github.com/developit/linkstate
 * @see https://github.com/jaredpalmer/formik/pull/123
 */

function setIn(obj, path, value) {
  var res = (0,lodash_es_clone__WEBPACK_IMPORTED_MODULE_5__["default"])(obj); // this keeps inheritance when obj is a class

  var resVal = res;
  var i = 0;
  var pathArray = (0,lodash_es_toPath__WEBPACK_IMPORTED_MODULE_4__["default"])(path);

  for (; i < pathArray.length - 1; i++) {
    var currentPath = pathArray[i];
    var currentObj = getIn(obj, pathArray.slice(0, i + 1));

    if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) {
      resVal = resVal[currentPath] = (0,lodash_es_clone__WEBPACK_IMPORTED_MODULE_5__["default"])(currentObj);
    } else {
      var nextPath = pathArray[i + 1];
      resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
    }
  } // Return original object if new value is the same as current


  if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
    return obj;
  }

  if (value === undefined) {
    delete resVal[pathArray[i]];
  } else {
    resVal[pathArray[i]] = value;
  } // If the path array has a single element, the loop did not run.
  // Deleting on `resVal` had no effect in this scenario, so we delete on the result instead.


  if (i === 0 && value === undefined) {
    delete res[pathArray[i]];
  }

  return res;
}
/**
 * Recursively a set the same value for all keys and arrays nested object, cloning
 * @param object
 * @param value
 * @param visited
 * @param response
 */

function setNestedObjectValues(object, value, visited, response) {
  if (visited === void 0) {
    visited = new WeakMap();
  }

  if (response === void 0) {
    response = {};
  }

  for (var _i = 0, _Object$keys = Object.keys(object); _i < _Object$keys.length; _i++) {
    var k = _Object$keys[_i];
    var val = object[k];

    if (isObject(val)) {
      if (!visited.get(val)) {
        visited.set(val, true); // In order to keep array values consistent for both dot path  and
        // bracket syntax, we need to check if this is an array so that
        // this will output  { friends: [true] } and not { friends: { "0": true } }

        response[k] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k]);
      }
    } else {
      response[k] = value;
    }
  }

  return response;
}

var FormikContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
FormikContext.displayName = 'FormikContext';
var FormikProvider = FormikContext.Provider;
var FormikConsumer = FormikContext.Consumer;
function useFormikContext() {
  var formik = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FormikContext);
  !!!formik ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : 0 : void 0;
  return formik;
}

function formikReducer(state, msg) {
  switch (msg.type) {
    case 'SET_VALUES':
      return _extends({}, state, {
        values: msg.payload
      });

    case 'SET_TOUCHED':
      return _extends({}, state, {
        touched: msg.payload
      });

    case 'SET_ERRORS':
      if (react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(state.errors, msg.payload)) {
        return state;
      }

      return _extends({}, state, {
        errors: msg.payload
      });

    case 'SET_STATUS':
      return _extends({}, state, {
        status: msg.payload
      });

    case 'SET_ISSUBMITTING':
      return _extends({}, state, {
        isSubmitting: msg.payload
      });

    case 'SET_ISVALIDATING':
      return _extends({}, state, {
        isValidating: msg.payload
      });

    case 'SET_FIELD_VALUE':
      return _extends({}, state, {
        values: setIn(state.values, msg.payload.field, msg.payload.value)
      });

    case 'SET_FIELD_TOUCHED':
      return _extends({}, state, {
        touched: setIn(state.touched, msg.payload.field, msg.payload.value)
      });

    case 'SET_FIELD_ERROR':
      return _extends({}, state, {
        errors: setIn(state.errors, msg.payload.field, msg.payload.value)
      });

    case 'RESET_FORM':
      return _extends({}, state, msg.payload);

    case 'SET_FORMIK_STATE':
      return msg.payload(state);

    case 'SUBMIT_ATTEMPT':
      return _extends({}, state, {
        touched: setNestedObjectValues(state.values, true),
        isSubmitting: true,
        submitCount: state.submitCount + 1
      });

    case 'SUBMIT_FAILURE':
      return _extends({}, state, {
        isSubmitting: false
      });

    case 'SUBMIT_SUCCESS':
      return _extends({}, state, {
        isSubmitting: false
      });

    default:
      return state;
  }
} // Initial empty states // objects


var emptyErrors = {};
var emptyTouched = {};
function useFormik(_ref) {
  var _ref$validateOnChange = _ref.validateOnChange,
      validateOnChange = _ref$validateOnChange === void 0 ? true : _ref$validateOnChange,
      _ref$validateOnBlur = _ref.validateOnBlur,
      validateOnBlur = _ref$validateOnBlur === void 0 ? true : _ref$validateOnBlur,
      _ref$validateOnMount = _ref.validateOnMount,
      validateOnMount = _ref$validateOnMount === void 0 ? false : _ref$validateOnMount,
      isInitialValid = _ref.isInitialValid,
      _ref$enableReinitiali = _ref.enableReinitialize,
      enableReinitialize = _ref$enableReinitiali === void 0 ? false : _ref$enableReinitiali,
      onSubmit = _ref.onSubmit,
      rest = _objectWithoutPropertiesLoose(_ref, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]);

  var props = _extends({
    validateOnChange: validateOnChange,
    validateOnBlur: validateOnBlur,
    validateOnMount: validateOnMount,
    onSubmit: onSubmit
  }, rest);

  var initialValues = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props.initialValues);
  var initialErrors = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props.initialErrors || emptyErrors);
  var initialTouched = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props.initialTouched || emptyTouched);
  var initialStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props.initialStatus);
  var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var fieldRegistry = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      !(typeof isInitialValid === 'undefined') ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.') : 0 : void 0; // eslint-disable-next-line
    }, []);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);

  var _React$useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(formikReducer, {
    values: props.initialValues,
    errors: props.initialErrors || emptyErrors,
    touched: props.initialTouched || emptyTouched,
    status: props.initialStatus,
    isSubmitting: false,
    isValidating: false,
    submitCount: 0
  }),
      state = _React$useReducer[0],
      dispatch = _React$useReducer[1];

  var runValidateHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (values, field) {
    return new Promise(function (resolve, reject) {
      var maybePromisedErrors = props.validate(values, field);

      if (maybePromisedErrors == null) {
        // use loose null check here on purpose
        resolve(emptyErrors);
      } else if (isPromise(maybePromisedErrors)) {
        maybePromisedErrors.then(function (errors) {
          resolve(errors || emptyErrors);
        }, function (actualException) {
          if (true) {
            console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", actualException);
          }

          reject(actualException);
        });
      } else {
        resolve(maybePromisedErrors);
      }
    });
  }, [props.validate]);
  /**
   * Run validation against a Yup schema and optionally run a function if successful
   */

  var runValidationSchema = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (values, field) {
    var validationSchema = props.validationSchema;
    var schema = isFunction(validationSchema) ? validationSchema(field) : validationSchema;
    var promise = field && schema.validateAt ? schema.validateAt(field, values) : validateYupSchema(values, schema);
    return new Promise(function (resolve, reject) {
      promise.then(function () {
        resolve(emptyErrors);
      }, function (err) {
        // Yup will throw a validation error if validation fails. We catch those and
        // resolve them into Formik errors. We can sniff if something is a Yup error
        // by checking error.name.
        // @see https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
        if (err.name === 'ValidationError') {
          resolve(yupToFormErrors(err));
        } else {
          // We throw any other errors
          if (true) {
            console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", err);
          }

          reject(err);
        }
      });
    });
  }, [props.validationSchema]);
  var runSingleFieldLevelValidation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (field, value) {
    return new Promise(function (resolve) {
      return resolve(fieldRegistry.current[field].validate(value));
    });
  }, []);
  var runFieldLevelValidations = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (values) {
    var fieldKeysWithValidation = Object.keys(fieldRegistry.current).filter(function (f) {
      return isFunction(fieldRegistry.current[f].validate);
    }); // Construct an array with all of the field validation functions

    var fieldValidations = fieldKeysWithValidation.length > 0 ? fieldKeysWithValidation.map(function (f) {
      return runSingleFieldLevelValidation(f, getIn(values, f));
    }) : [Promise.resolve('DO_NOT_DELETE_YOU_WILL_BE_FIRED')]; // use special case ;)

    return Promise.all(fieldValidations).then(function (fieldErrorsList) {
      return fieldErrorsList.reduce(function (prev, curr, index) {
        if (curr === 'DO_NOT_DELETE_YOU_WILL_BE_FIRED') {
          return prev;
        }

        if (curr) {
          prev = setIn(prev, fieldKeysWithValidation[index], curr);
        }

        return prev;
      }, {});
    });
  }, [runSingleFieldLevelValidation]); // Run all validations and return the result

  var runAllValidations = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (values) {
    return Promise.all([runFieldLevelValidations(values), props.validationSchema ? runValidationSchema(values) : {}, props.validate ? runValidateHandler(values) : {}]).then(function (_ref2) {
      var fieldErrors = _ref2[0],
          schemaErrors = _ref2[1],
          validateErrors = _ref2[2];
      var combinedErrors = deepmerge__WEBPACK_IMPORTED_MODULE_2__["default"].all([fieldErrors, schemaErrors, validateErrors], {
        arrayMerge: arrayMerge
      });
      return combinedErrors;
    });
  }, [props.validate, props.validationSchema, runFieldLevelValidations, runValidateHandler, runValidationSchema]); // Run all validations methods and update state accordingly

  var validateFormWithHighPriority = useEventCallback(function (values) {
    if (values === void 0) {
      values = state.values;
    }

    dispatch({
      type: 'SET_ISVALIDATING',
      payload: true
    });
    return runAllValidations(values).then(function (combinedErrors) {
      if (!!isMounted.current) {
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: false
        });
        dispatch({
          type: 'SET_ERRORS',
          payload: combinedErrors
        });
      }

      return combinedErrors;
    });
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (validateOnMount && isMounted.current === true && react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialValues.current, props.initialValues)) {
      validateFormWithHighPriority(initialValues.current);
    }
  }, [validateOnMount, validateFormWithHighPriority]);
  var resetForm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (nextState) {
    var values = nextState && nextState.values ? nextState.values : initialValues.current;
    var errors = nextState && nextState.errors ? nextState.errors : initialErrors.current ? initialErrors.current : props.initialErrors || {};
    var touched = nextState && nextState.touched ? nextState.touched : initialTouched.current ? initialTouched.current : props.initialTouched || {};
    var status = nextState && nextState.status ? nextState.status : initialStatus.current ? initialStatus.current : props.initialStatus;
    initialValues.current = values;
    initialErrors.current = errors;
    initialTouched.current = touched;
    initialStatus.current = status;

    var dispatchFn = function dispatchFn() {
      dispatch({
        type: 'RESET_FORM',
        payload: {
          isSubmitting: !!nextState && !!nextState.isSubmitting,
          errors: errors,
          touched: touched,
          status: status,
          values: values,
          isValidating: !!nextState && !!nextState.isValidating,
          submitCount: !!nextState && !!nextState.submitCount && typeof nextState.submitCount === 'number' ? nextState.submitCount : 0
        }
      });
    };

    if (props.onReset) {
      var maybePromisedOnReset = props.onReset(state.values, imperativeMethods);

      if (isPromise(maybePromisedOnReset)) {
        maybePromisedOnReset.then(dispatchFn);
      } else {
        dispatchFn();
      }
    } else {
      dispatchFn();
    }
  }, [props.initialErrors, props.initialStatus, props.initialTouched]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialValues.current, props.initialValues)) {
      if (enableReinitialize) {
        initialValues.current = props.initialValues;
        resetForm();
      }

      if (validateOnMount) {
        validateFormWithHighPriority(initialValues.current);
      }
    }
  }, [enableReinitialize, props.initialValues, resetForm, validateOnMount, validateFormWithHighPriority]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialErrors.current, props.initialErrors)) {
      initialErrors.current = props.initialErrors || emptyErrors;
      dispatch({
        type: 'SET_ERRORS',
        payload: props.initialErrors || emptyErrors
      });
    }
  }, [enableReinitialize, props.initialErrors]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialTouched.current, props.initialTouched)) {
      initialTouched.current = props.initialTouched || emptyTouched;
      dispatch({
        type: 'SET_TOUCHED',
        payload: props.initialTouched || emptyTouched
      });
    }
  }, [enableReinitialize, props.initialTouched]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialStatus.current, props.initialStatus)) {
      initialStatus.current = props.initialStatus;
      dispatch({
        type: 'SET_STATUS',
        payload: props.initialStatus
      });
    }
  }, [enableReinitialize, props.initialStatus, props.initialTouched]);
  var validateField = useEventCallback(function (name) {
    // This will efficiently validate a single field by avoiding state
    // changes if the validation function is synchronous. It's different from
    // what is called when using validateForm.
    if (fieldRegistry.current[name] && isFunction(fieldRegistry.current[name].validate)) {
      var value = getIn(state.values, name);
      var maybePromise = fieldRegistry.current[name].validate(value);

      if (isPromise(maybePromise)) {
        // Only flip isValidating if the function is async.
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: true
        });
        return maybePromise.then(function (x) {
          return x;
        }).then(function (error) {
          dispatch({
            type: 'SET_FIELD_ERROR',
            payload: {
              field: name,
              value: error
            }
          });
          dispatch({
            type: 'SET_ISVALIDATING',
            payload: false
          });
        });
      } else {
        dispatch({
          type: 'SET_FIELD_ERROR',
          payload: {
            field: name,
            value: maybePromise
          }
        });
        return Promise.resolve(maybePromise);
      }
    } else if (props.validationSchema) {
      dispatch({
        type: 'SET_ISVALIDATING',
        payload: true
      });
      return runValidationSchema(state.values, name).then(function (x) {
        return x;
      }).then(function (error) {
        dispatch({
          type: 'SET_FIELD_ERROR',
          payload: {
            field: name,
            value: error[name]
          }
        });
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: false
        });
      });
    }

    return Promise.resolve();
  });
  var registerField = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (name, _ref3) {
    var validate = _ref3.validate;
    fieldRegistry.current[name] = {
      validate: validate
    };
  }, []);
  var unregisterField = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (name) {
    delete fieldRegistry.current[name];
  }, []);
  var setTouched = useEventCallback(function (touched, shouldValidate) {
    dispatch({
      type: 'SET_TOUCHED',
      payload: touched
    });
    var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var setErrors = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (errors) {
    dispatch({
      type: 'SET_ERRORS',
      payload: errors
    });
  }, []);
  var setValues = useEventCallback(function (values, shouldValidate) {
    var resolvedValues = isFunction(values) ? values(state.values) : values;
    dispatch({
      type: 'SET_VALUES',
      payload: resolvedValues
    });
    var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(resolvedValues) : Promise.resolve();
  });
  var setFieldError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (field, value) {
    dispatch({
      type: 'SET_FIELD_ERROR',
      payload: {
        field: field,
        value: value
      }
    });
  }, []);
  var setFieldValue = useEventCallback(function (field, value, shouldValidate) {
    dispatch({
      type: 'SET_FIELD_VALUE',
      payload: {
        field: field,
        value: value
      }
    });
    var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(setIn(state.values, field, value)) : Promise.resolve();
  });
  var executeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (eventOrTextValue, maybePath) {
    // By default, assume that the first argument is a string. This allows us to use
    // handleChange with React Native and React Native Web's onChangeText prop which
    // provides just the value of the input.
    var field = maybePath;
    var val = eventOrTextValue;
    var parsed; // If the first argument is not a string though, it has to be a synthetic React Event (or a fake one),
    // so we handle like we would a normal HTML change event.

    if (!isString(eventOrTextValue)) {
      // If we can, persist the event
      // @see https://reactjs.org/docs/events.html#event-pooling
      if (eventOrTextValue.persist) {
        eventOrTextValue.persist();
      }

      var target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget;
      var type = target.type,
          name = target.name,
          id = target.id,
          value = target.value,
          checked = target.checked,
          outerHTML = target.outerHTML,
          options = target.options,
          multiple = target.multiple;
      field = maybePath ? maybePath : name ? name : id;

      if (!field && "development" !== "production") {
        warnAboutMissingIdentifier({
          htmlContent: outerHTML,
          documentationAnchorLink: 'handlechange-e-reactchangeeventany--void',
          handlerName: 'handleChange'
        });
      }

      val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? '' : parsed) : /checkbox/.test(type) // checkboxes
      ? getValueForCheckbox(getIn(state.values, field), checked, value) : options && multiple // <select multiple>
      ? getSelectedValues(options) : value;
    }

    if (field) {
      // Set form fields by name
      setFieldValue(field, val);
    }
  }, [setFieldValue, state.values]);
  var handleChange = useEventCallback(function (eventOrPath) {
    if (isString(eventOrPath)) {
      return function (event) {
        return executeChange(event, eventOrPath);
      };
    } else {
      executeChange(eventOrPath);
    }
  });
  var setFieldTouched = useEventCallback(function (field, touched, shouldValidate) {
    if (touched === void 0) {
      touched = true;
    }

    dispatch({
      type: 'SET_FIELD_TOUCHED',
      payload: {
        field: field,
        value: touched
      }
    });
    var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var executeBlur = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e, path) {
    if (e.persist) {
      e.persist();
    }

    var _e$target = e.target,
        name = _e$target.name,
        id = _e$target.id,
        outerHTML = _e$target.outerHTML;
    var field = path ? path : name ? name : id;

    if (!field && "development" !== "production") {
      warnAboutMissingIdentifier({
        htmlContent: outerHTML,
        documentationAnchorLink: 'handleblur-e-any--void',
        handlerName: 'handleBlur'
      });
    }

    setFieldTouched(field, true);
  }, [setFieldTouched]);
  var handleBlur = useEventCallback(function (eventOrString) {
    if (isString(eventOrString)) {
      return function (event) {
        return executeBlur(event, eventOrString);
      };
    } else {
      executeBlur(eventOrString);
    }
  });
  var setFormikState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (stateOrCb) {
    if (isFunction(stateOrCb)) {
      dispatch({
        type: 'SET_FORMIK_STATE',
        payload: stateOrCb
      });
    } else {
      dispatch({
        type: 'SET_FORMIK_STATE',
        payload: function payload() {
          return stateOrCb;
        }
      });
    }
  }, []);
  var setStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (status) {
    dispatch({
      type: 'SET_STATUS',
      payload: status
    });
  }, []);
  var setSubmitting = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (isSubmitting) {
    dispatch({
      type: 'SET_ISSUBMITTING',
      payload: isSubmitting
    });
  }, []);
  var submitForm = useEventCallback(function () {
    dispatch({
      type: 'SUBMIT_ATTEMPT'
    });
    return validateFormWithHighPriority().then(function (combinedErrors) {
      // In case an error was thrown and passed to the resolved Promise,
      // `combinedErrors` can be an instance of an Error. We need to check
      // that and abort the submit.
      // If we don't do that, calling `Object.keys(new Error())` yields an
      // empty array, which causes the validation to pass and the form
      // to be submitted.
      var isInstanceOfError = combinedErrors instanceof Error;
      var isActuallyValid = !isInstanceOfError && Object.keys(combinedErrors).length === 0;

      if (isActuallyValid) {
        // Proceed with submit...
        //
        // To respect sync submit fns, we can't simply wrap executeSubmit in a promise and
        // _always_ dispatch SUBMIT_SUCCESS because isSubmitting would then always be false.
        // This would be fine in simple cases, but make it impossible to disable submit
        // buttons where people use callbacks or promises as side effects (which is basically
        // all of v1 Formik code). Instead, recall that we are inside of a promise chain already,
        //  so we can try/catch executeSubmit(), if it returns undefined, then just bail.
        // If there are errors, throw em. Otherwise, wrap executeSubmit in a promise and handle
        // cleanup of isSubmitting on behalf of the consumer.
        var promiseOrUndefined;

        try {
          promiseOrUndefined = executeSubmit(); // Bail if it's sync, consumer is responsible for cleaning up
          // via setSubmitting(false)

          if (promiseOrUndefined === undefined) {
            return;
          }
        } catch (error) {
          throw error;
        }

        return Promise.resolve(promiseOrUndefined).then(function (result) {
          if (!!isMounted.current) {
            dispatch({
              type: 'SUBMIT_SUCCESS'
            });
          }

          return result;
        })["catch"](function (_errors) {
          if (!!isMounted.current) {
            dispatch({
              type: 'SUBMIT_FAILURE'
            }); // This is a legit error rejected by the onSubmit fn
            // so we don't want to break the promise chain

            throw _errors;
          }
        });
      } else if (!!isMounted.current) {
        // ^^^ Make sure Formik is still mounted before updating state
        dispatch({
          type: 'SUBMIT_FAILURE'
        }); // throw combinedErrors;

        if (isInstanceOfError) {
          throw combinedErrors;
        }
      }

      return;
    });
  });
  var handleSubmit = useEventCallback(function (e) {
    if (e && e.preventDefault && isFunction(e.preventDefault)) {
      e.preventDefault();
    }

    if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
      e.stopPropagation();
    } // Warn if form submission is triggered by a <button> without a
    // specified `type` attribute during development. This mitigates
    // a common gotcha in forms with both reset and submit buttons,
    // where the dev forgets to add type="button" to the reset button.


    if ( true && typeof document !== 'undefined') {
      // Safely get the active element (works with IE)
      var activeElement = getActiveElement();

      if (activeElement !== null && activeElement instanceof HTMLButtonElement) {
        !(activeElement.attributes && activeElement.attributes.getNamedItem('type')) ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : 0 : void 0;
      }
    }

    submitForm()["catch"](function (reason) {
      console.warn("Warning: An unhandled error was caught from submitForm()", reason);
    });
  });
  var imperativeMethods = {
    resetForm: resetForm,
    validateForm: validateFormWithHighPriority,
    validateField: validateField,
    setErrors: setErrors,
    setFieldError: setFieldError,
    setFieldTouched: setFieldTouched,
    setFieldValue: setFieldValue,
    setStatus: setStatus,
    setSubmitting: setSubmitting,
    setTouched: setTouched,
    setValues: setValues,
    setFormikState: setFormikState,
    submitForm: submitForm
  };
  var executeSubmit = useEventCallback(function () {
    return onSubmit(state.values, imperativeMethods);
  });
  var handleReset = useEventCallback(function (e) {
    if (e && e.preventDefault && isFunction(e.preventDefault)) {
      e.preventDefault();
    }

    if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
      e.stopPropagation();
    }

    resetForm();
  });
  var getFieldMeta = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (name) {
    return {
      value: getIn(state.values, name),
      error: getIn(state.errors, name),
      touched: !!getIn(state.touched, name),
      initialValue: getIn(initialValues.current, name),
      initialTouched: !!getIn(initialTouched.current, name),
      initialError: getIn(initialErrors.current, name)
    };
  }, [state.errors, state.touched, state.values]);
  var getFieldHelpers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (name) {
    return {
      setValue: function setValue(value, shouldValidate) {
        return setFieldValue(name, value, shouldValidate);
      },
      setTouched: function setTouched(value, shouldValidate) {
        return setFieldTouched(name, value, shouldValidate);
      },
      setError: function setError(value) {
        return setFieldError(name, value);
      }
    };
  }, [setFieldValue, setFieldTouched, setFieldError]);
  var getFieldProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (nameOrOptions) {
    var isAnObject = isObject(nameOrOptions);
    var name = isAnObject ? nameOrOptions.name : nameOrOptions;
    var valueState = getIn(state.values, name);
    var field = {
      name: name,
      value: valueState,
      onChange: handleChange,
      onBlur: handleBlur
    };

    if (isAnObject) {
      var type = nameOrOptions.type,
          valueProp = nameOrOptions.value,
          is = nameOrOptions.as,
          multiple = nameOrOptions.multiple;

      if (type === 'checkbox') {
        if (valueProp === undefined) {
          field.checked = !!valueState;
        } else {
          field.checked = !!(Array.isArray(valueState) && ~valueState.indexOf(valueProp));
          field.value = valueProp;
        }
      } else if (type === 'radio') {
        field.checked = valueState === valueProp;
        field.value = valueProp;
      } else if (is === 'select' && multiple) {
        field.value = field.value || [];
        field.multiple = true;
      }
    }

    return field;
  }, [handleBlur, handleChange, state.values]);
  var dirty = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialValues.current, state.values);
  }, [initialValues.current, state.values]);
  var isValid = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return typeof isInitialValid !== 'undefined' ? dirty ? state.errors && Object.keys(state.errors).length === 0 : isInitialValid !== false && isFunction(isInitialValid) ? isInitialValid(props) : isInitialValid : state.errors && Object.keys(state.errors).length === 0;
  }, [isInitialValid, dirty, state.errors, props]);

  var ctx = _extends({}, state, {
    initialValues: initialValues.current,
    initialErrors: initialErrors.current,
    initialTouched: initialTouched.current,
    initialStatus: initialStatus.current,
    handleBlur: handleBlur,
    handleChange: handleChange,
    handleReset: handleReset,
    handleSubmit: handleSubmit,
    resetForm: resetForm,
    setErrors: setErrors,
    setFormikState: setFormikState,
    setFieldTouched: setFieldTouched,
    setFieldValue: setFieldValue,
    setFieldError: setFieldError,
    setStatus: setStatus,
    setSubmitting: setSubmitting,
    setTouched: setTouched,
    setValues: setValues,
    submitForm: submitForm,
    validateForm: validateFormWithHighPriority,
    validateField: validateField,
    isValid: isValid,
    dirty: dirty,
    unregisterField: unregisterField,
    registerField: registerField,
    getFieldProps: getFieldProps,
    getFieldMeta: getFieldMeta,
    getFieldHelpers: getFieldHelpers,
    validateOnBlur: validateOnBlur,
    validateOnChange: validateOnChange,
    validateOnMount: validateOnMount
  });

  return ctx;
}
function Formik(props) {
  var formikbag = useFormik(props);
  var component = props.component,
      children = props.children,
      render = props.render,
      innerRef = props.innerRef; // This allows folks to pass a ref to <Formik />

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(innerRef, function () {
    return formikbag;
  });

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      !!props.render ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>") : 0 : void 0; // eslint-disable-next-line
    }, []);
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FormikProvider, {
    value: formikbag
  }, component ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, formikbag) : render ? render(formikbag) : children // children come last, always called
  ? isFunction(children) ? children(formikbag) : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children) : null : null);
}

function warnAboutMissingIdentifier(_ref4) {
  var htmlContent = _ref4.htmlContent,
      documentationAnchorLink = _ref4.documentationAnchorLink,
      handlerName = _ref4.handlerName;
  console.warn("Warning: Formik called `" + handlerName + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + htmlContent + "\n    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#" + documentationAnchorLink + "\n  ");
}
/**
 * Transform Yup ValidationError to a more usable object
 */


function yupToFormErrors(yupError) {
  var errors = {};

  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      return setIn(errors, yupError.path, yupError.message);
    }

    for (var _iterator = yupError.inner, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref5 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref5 = _i.value;
      }

      var err = _ref5;

      if (!getIn(errors, err.path)) {
        errors = setIn(errors, err.path, err.message);
      }
    }
  }

  return errors;
}
/**
 * Validate a yup schema.
 */

function validateYupSchema(values, schema, sync, context) {
  if (sync === void 0) {
    sync = false;
  }

  if (context === void 0) {
    context = {};
  }

  var validateData = prepareDataForValidation(values);
  return schema[sync ? 'validateSync' : 'validate'](validateData, {
    abortEarly: false,
    context: context
  });
}
/**
 * Recursively prepare values.
 */

function prepareDataForValidation(values) {
  var data = Array.isArray(values) ? [] : {};

  for (var k in values) {
    if (Object.prototype.hasOwnProperty.call(values, k)) {
      var key = String(k);

      if (Array.isArray(values[key]) === true) {
        data[key] = values[key].map(function (value) {
          if (Array.isArray(value) === true || (0,lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_7__["default"])(value)) {
            return prepareDataForValidation(value);
          } else {
            return value !== '' ? value : undefined;
          }
        });
      } else if ((0,lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_7__["default"])(values[key])) {
        data[key] = prepareDataForValidation(values[key]);
      } else {
        data[key] = values[key] !== '' ? values[key] : undefined;
      }
    }
  }

  return data;
}
/**
 * deepmerge array merging algorithm
 * https://github.com/KyleAMathews/deepmerge#combine-array
 */

function arrayMerge(target, source, options) {
  var destination = target.slice();
  source.forEach(function merge(e, i) {
    if (typeof destination[i] === 'undefined') {
      var cloneRequested = options.clone !== false;
      var shouldClone = cloneRequested && options.isMergeableObject(e);
      destination[i] = shouldClone ? (0,deepmerge__WEBPACK_IMPORTED_MODULE_2__["default"])(Array.isArray(e) ? [] : {}, e, options) : e;
    } else if (options.isMergeableObject(e)) {
      destination[i] = (0,deepmerge__WEBPACK_IMPORTED_MODULE_2__["default"])(target[i], e, options);
    } else if (target.indexOf(e) === -1) {
      destination.push(e);
    }
  });
  return destination;
}
/** Return multi select values based on an array of options */


function getSelectedValues(options) {
  return Array.from(options).filter(function (el) {
    return el.selected;
  }).map(function (el) {
    return el.value;
  });
}
/** Return the next value for a checkbox */


function getValueForCheckbox(currentValue, checked, valueProp) {
  // If the current value was a boolean, return a boolean
  if (typeof currentValue === 'boolean') {
    return Boolean(checked);
  } // If the currentValue was not a boolean we want to return an array


  var currentArrayOfValues = [];
  var isValueInArray = false;
  var index = -1;

  if (!Array.isArray(currentValue)) {
    // eslint-disable-next-line eqeqeq
    if (!valueProp || valueProp == 'true' || valueProp == 'false') {
      return Boolean(checked);
    }
  } else {
    // If the current value is already an array, use it
    currentArrayOfValues = currentValue;
    index = currentValue.indexOf(valueProp);
    isValueInArray = index >= 0;
  } // If the checkbox was checked and the value is not already present in the aray we want to add the new value to the array of values


  if (checked && valueProp && !isValueInArray) {
    return currentArrayOfValues.concat(valueProp);
  } // If the checkbox was unchecked and the value is not in the array, simply return the already existing array of values


  if (!isValueInArray) {
    return currentArrayOfValues;
  } // If the checkbox was unchecked and the value is in the array, remove the value and return the array


  return currentArrayOfValues.slice(0, index).concat(currentArrayOfValues.slice(index + 1));
} // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
// @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85


var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

function useEventCallback(fn) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn); // we copy a ref to the callback scoped to the current state/props on each render

  useIsomorphicLayoutEffect(function () {
    ref.current = fn;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ref.current.apply(void 0, args);
  }, []);
}

function useField(propsOrFieldName) {
  var formik = useFormikContext();
  var getFieldProps = formik.getFieldProps,
      getFieldMeta = formik.getFieldMeta,
      getFieldHelpers = formik.getFieldHelpers,
      registerField = formik.registerField,
      unregisterField = formik.unregisterField;
  var isAnObject = isObject(propsOrFieldName); // Normalize propsOrFieldName to FieldHookConfig<Val>

  var props = isAnObject ? propsOrFieldName : {
    name: propsOrFieldName
  };
  var fieldName = props.name,
      validateFn = props.validate;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (fieldName) {
      registerField(fieldName, {
        validate: validateFn
      });
    }

    return function () {
      if (fieldName) {
        unregisterField(fieldName);
      }
    };
  }, [registerField, unregisterField, fieldName, validateFn]);

  if (true) {
    !formik ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component') : 0 : void 0;
  }

  !fieldName ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'Invalid field name. Either pass `useField` a string or an object containing a `name` key.') : 0 : void 0;
  return [getFieldProps(props), getFieldMeta(fieldName), getFieldHelpers(fieldName)];
}
function Field(_ref) {
  var validate = _ref.validate,
      name = _ref.name,
      render = _ref.render,
      children = _ref.children,
      is = _ref.as,
      component = _ref.component,
      props = _objectWithoutPropertiesLoose(_ref, ["validate", "name", "render", "children", "as", "component"]);

  var _useFormikContext = useFormikContext(),
      formik = _objectWithoutPropertiesLoose(_useFormikContext, ["validate", "validationSchema"]);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      !!render ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "<Field render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Field name=\"" + name + "\" render={({field, form}) => ...} /> with <Field name=\"" + name + "\">{({field, form, meta}) => ...}</Field>") : 0 : void 0;
      !!(is && children && isFunction(children)) ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <Field as> and <Field children> as a function in the same <Field> component; <Field as> will be ignored.') : 0 : void 0;
      !!(component && children && isFunction(children)) ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.') : 0 : void 0;
      !!(render && children && !isEmptyChildren(children)) ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored') : 0 : void 0; // eslint-disable-next-line
    }, []);
  } // Register field and field-level validation with parent <Formik>


  var registerField = formik.registerField,
      unregisterField = formik.unregisterField;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    registerField(name, {
      validate: validate
    });
    return function () {
      unregisterField(name);
    };
  }, [registerField, unregisterField, name, validate]);
  var field = formik.getFieldProps(_extends({
    name: name
  }, props));
  var meta = formik.getFieldMeta(name);
  var legacyBag = {
    field: field,
    form: formik
  };

  if (render) {
    return render(_extends({}, legacyBag, {
      meta: meta
    }));
  }

  if (isFunction(children)) {
    return children(_extends({}, legacyBag, {
      meta: meta
    }));
  }

  if (component) {
    // This behavior is backwards compat with earlier Formik 0.9 to 1.x
    if (typeof component === 'string') {
      var innerRef = props.innerRef,
          rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, _extends({
        ref: innerRef
      }, field, rest), children);
    } // We don't pass `meta` for backwards compat


    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, _extends({
      field: field,
      form: formik
    }, props), children);
  } // default to input here so we can check for both `as` and `children` above


  var asElement = is || 'input';

  if (typeof asElement === 'string') {
    var _innerRef = props.innerRef,
        _rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(asElement, _extends({
      ref: _innerRef
    }, field, _rest), children);
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(asElement, _extends({}, field, props), children);
}

var Form = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  // iOS needs an "action" attribute for nice input: https://stackoverflow.com/a/39485162/406725
  // We default the action to "#" in case the preventDefault fails (just updates the URL hash)
  var action = props.action,
      rest = _objectWithoutPropertiesLoose(props, ["action"]);

  var _action = action != null ? action : '#';

  var _useFormikContext = useFormikContext(),
      handleReset = _useFormikContext.handleReset,
      handleSubmit = _useFormikContext.handleSubmit;

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", Object.assign({
    onSubmit: handleSubmit,
    ref: ref,
    onReset: handleReset,
    action: _action
  }, rest));
});
Form.displayName = 'Form';

/**
 * A public higher-order component to access the imperative API
 */

function withFormik(_ref) {
  var _ref$mapPropsToValues = _ref.mapPropsToValues,
      mapPropsToValues = _ref$mapPropsToValues === void 0 ? function (vanillaProps) {
    var val = {};

    for (var k in vanillaProps) {
      if (vanillaProps.hasOwnProperty(k) && typeof vanillaProps[k] !== 'function') {
        // @todo TypeScript fix
        val[k] = vanillaProps[k];
      }
    }

    return val;
  } : _ref$mapPropsToValues,
      config = _objectWithoutPropertiesLoose(_ref, ["mapPropsToValues"]);

  return function createFormik(Component$1) {
    var componentDisplayName = Component$1.displayName || Component$1.name || Component$1.constructor && Component$1.constructor.name || 'Component';
    /**
     * We need to use closures here for to provide the wrapped component's props to
     * the respective withFormik config methods.
     */

    var C = /*#__PURE__*/function (_React$Component) {
      _inheritsLoose(C, _React$Component);

      function C() {
        var _this;

        _this = _React$Component.apply(this, arguments) || this;

        _this.validate = function (values) {
          return config.validate(values, _this.props);
        };

        _this.validationSchema = function () {
          return isFunction(config.validationSchema) ? config.validationSchema(_this.props) : config.validationSchema;
        };

        _this.handleSubmit = function (values, actions) {
          return config.handleSubmit(values, _extends({}, actions, {
            props: _this.props
          }));
        };
        /**
         * Just avoiding a render callback for perf here
         */


        _this.renderFormComponent = function (formikProps) {
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component$1, Object.assign({}, _this.props, formikProps));
        };

        return _this;
      }

      var _proto = C.prototype;

      _proto.render = function render() {
        var _this$props = this.props,
            props = _objectWithoutPropertiesLoose(_this$props, ["children"]);

        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Formik, Object.assign({}, props, config, {
          validate: config.validate && this.validate,
          validationSchema: config.validationSchema && this.validationSchema,
          initialValues: mapPropsToValues(this.props),
          initialStatus: config.mapPropsToStatus && config.mapPropsToStatus(this.props),
          initialErrors: config.mapPropsToErrors && config.mapPropsToErrors(this.props),
          initialTouched: config.mapPropsToTouched && config.mapPropsToTouched(this.props),
          onSubmit: this.handleSubmit,
          children: this.renderFormComponent
        }));
      };

      return C;
    }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

    C.displayName = "WithFormik(" + componentDisplayName + ")";
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(C, Component$1 // cast type to ComponentClass (even if SFC)
    );
  };
}

/**
 * Connect any component to Formik context, and inject as a prop called `formik`;
 * @param Comp React Component
 */

function connect(Comp) {
  var C = function C(props) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FormikConsumer, null, function (formik) {
      !!!formik ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "Formik context is undefined, please verify you are rendering <Form>, <Field>, <FastField>, <FieldArray>, or your custom context-using component as a child of a <Formik> component. Component name: " + Comp.name) : 0 : void 0;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comp, Object.assign({}, props, {
        formik: formik
      }));
    });
  };

  var componentDisplayName = Comp.displayName || Comp.name || Comp.constructor && Comp.constructor.name || 'Component'; // Assign Comp to C.WrappedComponent so we can access the inner component in tests
  // For example, <Field.WrappedComponent /> gets us <FieldInner/>

  C.WrappedComponent = Comp;
  C.displayName = "FormikConnect(" + componentDisplayName + ")";
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(C, Comp // cast type to ComponentClass (even if SFC)
  );
}

/**
 * Some array helpers!
 */

var move = function move(array, from, to) {
  var copy = copyArrayLike(array);
  var value = copy[from];
  copy.splice(from, 1);
  copy.splice(to, 0, value);
  return copy;
};
var swap = function swap(arrayLike, indexA, indexB) {
  var copy = copyArrayLike(arrayLike);
  var a = copy[indexA];
  copy[indexA] = copy[indexB];
  copy[indexB] = a;
  return copy;
};
var insert = function insert(arrayLike, index, value) {
  var copy = copyArrayLike(arrayLike);
  copy.splice(index, 0, value);
  return copy;
};
var replace = function replace(arrayLike, index, value) {
  var copy = copyArrayLike(arrayLike);
  copy[index] = value;
  return copy;
};

var copyArrayLike = function copyArrayLike(arrayLike) {
  if (!arrayLike) {
    return [];
  } else if (Array.isArray(arrayLike)) {
    return [].concat(arrayLike);
  } else {
    var maxIndex = Object.keys(arrayLike).map(function (key) {
      return parseInt(key);
    }).reduce(function (max, el) {
      return el > max ? el : max;
    }, 0);
    return Array.from(_extends({}, arrayLike, {
      length: maxIndex + 1
    }));
  }
};

var FieldArrayInner = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FieldArrayInner, _React$Component);

  function FieldArrayInner(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.updateArrayField = function (fn, alterTouched, alterErrors) {
      var _this$props = _this.props,
          name = _this$props.name,
          setFormikState = _this$props.formik.setFormikState;
      setFormikState(function (prevState) {
        var updateErrors = typeof alterErrors === 'function' ? alterErrors : fn;
        var updateTouched = typeof alterTouched === 'function' ? alterTouched : fn; // values fn should be executed before updateErrors and updateTouched,
        // otherwise it causes an error with unshift.

        var values = setIn(prevState.values, name, fn(getIn(prevState.values, name)));
        var fieldError = alterErrors ? updateErrors(getIn(prevState.errors, name)) : undefined;
        var fieldTouched = alterTouched ? updateTouched(getIn(prevState.touched, name)) : undefined;

        if (isEmptyArray(fieldError)) {
          fieldError = undefined;
        }

        if (isEmptyArray(fieldTouched)) {
          fieldTouched = undefined;
        }

        return _extends({}, prevState, {
          values: values,
          errors: alterErrors ? setIn(prevState.errors, name, fieldError) : prevState.errors,
          touched: alterTouched ? setIn(prevState.touched, name, fieldTouched) : prevState.touched
        });
      });
    };

    _this.push = function (value) {
      return _this.updateArrayField(function (arrayLike) {
        return [].concat(copyArrayLike(arrayLike), [(0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_8__["default"])(value)]);
      }, false, false);
    };

    _this.handlePush = function (value) {
      return function () {
        return _this.push(value);
      };
    };

    _this.swap = function (indexA, indexB) {
      return _this.updateArrayField(function (array) {
        return swap(array, indexA, indexB);
      }, true, true);
    };

    _this.handleSwap = function (indexA, indexB) {
      return function () {
        return _this.swap(indexA, indexB);
      };
    };

    _this.move = function (from, to) {
      return _this.updateArrayField(function (array) {
        return move(array, from, to);
      }, true, true);
    };

    _this.handleMove = function (from, to) {
      return function () {
        return _this.move(from, to);
      };
    };

    _this.insert = function (index, value) {
      return _this.updateArrayField(function (array) {
        return insert(array, index, value);
      }, function (array) {
        return insert(array, index, null);
      }, function (array) {
        return insert(array, index, null);
      });
    };

    _this.handleInsert = function (index, value) {
      return function () {
        return _this.insert(index, value);
      };
    };

    _this.replace = function (index, value) {
      return _this.updateArrayField(function (array) {
        return replace(array, index, value);
      }, false, false);
    };

    _this.handleReplace = function (index, value) {
      return function () {
        return _this.replace(index, value);
      };
    };

    _this.unshift = function (value) {
      var length = -1;

      _this.updateArrayField(function (array) {
        var arr = array ? [value].concat(array) : [value];

        if (length < 0) {
          length = arr.length;
        }

        return arr;
      }, function (array) {
        var arr = array ? [null].concat(array) : [null];

        if (length < 0) {
          length = arr.length;
        }

        return arr;
      }, function (array) {
        var arr = array ? [null].concat(array) : [null];

        if (length < 0) {
          length = arr.length;
        }

        return arr;
      });

      return length;
    };

    _this.handleUnshift = function (value) {
      return function () {
        return _this.unshift(value);
      };
    };

    _this.handleRemove = function (index) {
      return function () {
        return _this.remove(index);
      };
    };

    _this.handlePop = function () {
      return function () {
        return _this.pop();
      };
    }; // We need TypeScript generics on these, so we'll bind them in the constructor
    // @todo Fix TS 3.2.1


    _this.remove = _this.remove.bind(_assertThisInitialized(_this));
    _this.pop = _this.pop.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = FieldArrayInner.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.validateOnChange && this.props.formik.validateOnChange && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(getIn(prevProps.formik.values, prevProps.name), getIn(this.props.formik.values, this.props.name))) {
      this.props.formik.validateForm(this.props.formik.values);
    }
  };

  _proto.remove = function remove(index) {
    // We need to make sure we also remove relevant pieces of `touched` and `errors`
    var result;
    this.updateArrayField( // so this gets call 3 times
    function (array) {
      var copy = array ? copyArrayLike(array) : [];

      if (!result) {
        result = copy[index];
      }

      if (isFunction(copy.splice)) {
        copy.splice(index, 1);
      }

      return copy;
    }, true, true);
    return result;
  };

  _proto.pop = function pop() {
    // Remove relevant pieces of `touched` and `errors` too!
    var result;
    this.updateArrayField( // so this gets call 3 times
    function (array) {
      var tmp = array;

      if (!result) {
        result = tmp && tmp.pop && tmp.pop();
      }

      return tmp;
    }, true, true);
    return result;
  };

  _proto.render = function render() {
    var arrayHelpers = {
      push: this.push,
      pop: this.pop,
      swap: this.swap,
      move: this.move,
      insert: this.insert,
      replace: this.replace,
      unshift: this.unshift,
      remove: this.remove,
      handlePush: this.handlePush,
      handlePop: this.handlePop,
      handleSwap: this.handleSwap,
      handleMove: this.handleMove,
      handleInsert: this.handleInsert,
      handleReplace: this.handleReplace,
      handleUnshift: this.handleUnshift,
      handleRemove: this.handleRemove
    };

    var _this$props2 = this.props,
        component = _this$props2.component,
        render = _this$props2.render,
        children = _this$props2.children,
        name = _this$props2.name,
        _this$props2$formik = _this$props2.formik,
        restOfFormik = _objectWithoutPropertiesLoose(_this$props2$formik, ["validate", "validationSchema"]);

    var props = _extends({}, arrayHelpers, {
      form: restOfFormik,
      name: name
    });

    return component ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, props) : render ? render(props) : children // children come last, always called
    ? typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children) : null : null;
  };

  return FieldArrayInner;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

FieldArrayInner.defaultProps = {
  validateOnChange: true
};
var FieldArray = /*#__PURE__*/connect(FieldArrayInner);

var ErrorMessageImpl = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ErrorMessageImpl, _React$Component);

  function ErrorMessageImpl() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ErrorMessageImpl.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (getIn(this.props.formik.errors, this.props.name) !== getIn(props.formik.errors, this.props.name) || getIn(this.props.formik.touched, this.props.name) !== getIn(props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length) {
      return true;
    } else {
      return false;
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        component = _this$props.component,
        formik = _this$props.formik,
        render = _this$props.render,
        children = _this$props.children,
        name = _this$props.name,
        rest = _objectWithoutPropertiesLoose(_this$props, ["component", "formik", "render", "children", "name"]);

    var touch = getIn(formik.touched, name);
    var error = getIn(formik.errors, name);
    return !!touch && !!error ? render ? isFunction(render) ? render(error) : null : children ? isFunction(children) ? children(error) : null : component ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, rest, error) : error : null;
  };

  return ErrorMessageImpl;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var ErrorMessage = /*#__PURE__*/connect(ErrorMessageImpl);

/**
 * Custom Field component for quickly hooking into Formik
 * context and wiring up forms.
 */

var FastFieldInner = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FastFieldInner, _React$Component);

  function FastFieldInner(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    var render = props.render,
        children = props.children,
        component = props.component,
        is = props.as,
        name = props.name;
    !!render ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "<FastField render> has been deprecated. Please use a child callback function instead: <FastField name={" + name + "}>{props => ...}</FastField> instead.") : 0 : void 0;
    !!(component && render) ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <FastField component> and <FastField render> in the same <FastField> component; <FastField component> will be ignored') : 0 : void 0;
    !!(is && children && isFunction(children)) ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <FastField as> and <FastField children> as a function in the same <FastField> component; <FastField as> will be ignored.') : 0 : void 0;
    !!(component && children && isFunction(children)) ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <FastField component> and <FastField children> as a function in the same <FastField> component; <FastField component> will be ignored.') : 0 : void 0;
    !!(render && children && !isEmptyChildren(children)) ?  true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <FastField render> and <FastField children> in the same <FastField> component; <FastField children> will be ignored') : 0 : void 0;
    return _this;
  }

  var _proto = FastFieldInner.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (this.props.shouldUpdate) {
      return this.props.shouldUpdate(props, this.props);
    } else if (props.name !== this.props.name || getIn(props.formik.values, this.props.name) !== getIn(this.props.formik.values, this.props.name) || getIn(props.formik.errors, this.props.name) !== getIn(this.props.formik.errors, this.props.name) || getIn(props.formik.touched, this.props.name) !== getIn(this.props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length || props.formik.isSubmitting !== this.props.formik.isSubmitting) {
      return true;
    } else {
      return false;
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Register the Field with the parent Formik. Parent will cycle through
    // registered Field's validate fns right prior to submit
    this.props.formik.registerField(this.props.name, {
      validate: this.props.validate
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      this.props.formik.unregisterField(prevProps.name);
      this.props.formik.registerField(this.props.name, {
        validate: this.props.validate
      });
    }

    if (this.props.validate !== prevProps.validate) {
      this.props.formik.registerField(this.props.name, {
        validate: this.props.validate
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.formik.unregisterField(this.props.name);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        name = _this$props.name,
        render = _this$props.render,
        is = _this$props.as,
        children = _this$props.children,
        component = _this$props.component,
        formik = _this$props.formik,
        props = _objectWithoutPropertiesLoose(_this$props, ["validate", "name", "render", "as", "children", "component", "shouldUpdate", "formik"]);

    var restOfFormik = _objectWithoutPropertiesLoose(formik, ["validate", "validationSchema"]);

    var field = formik.getFieldProps(_extends({
      name: name
    }, props));
    var meta = {
      value: getIn(formik.values, name),
      error: getIn(formik.errors, name),
      touched: !!getIn(formik.touched, name),
      initialValue: getIn(formik.initialValues, name),
      initialTouched: !!getIn(formik.initialTouched, name),
      initialError: getIn(formik.initialErrors, name)
    };
    var bag = {
      field: field,
      meta: meta,
      form: restOfFormik
    };

    if (render) {
      return render(bag);
    }

    if (isFunction(children)) {
      return children(bag);
    }

    if (component) {
      // This behavior is backwards compat with earlier Formik 0.9 to 1.x
      if (typeof component === 'string') {
        var innerRef = props.innerRef,
            rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, _extends({
          ref: innerRef
        }, field, rest), children);
      } // We don't pass `meta` for backwards compat


      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, _extends({
        field: field,
        form: formik
      }, props), children);
    } // default to input here so we can check for both `as` and `children` above


    var asElement = is || 'input';

    if (typeof asElement === 'string') {
      var _innerRef = props.innerRef,
          _rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(asElement, _extends({
        ref: _innerRef
      }, field, _rest), children);
    }

    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(asElement, _extends({}, field, props), children);
  };

  return FastFieldInner;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var FastField = /*#__PURE__*/connect(FastFieldInner);


//# sourceMappingURL=formik.esm.js.map


/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;
    // end fast-deep-equal

    // start react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element && b instanceof Element)
      return a === b;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }
    // end react-fast-compare

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/react-table/dist/react-table.development.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-table/dist/react-table.development.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! react */ "./node_modules/react/index.js")) :
  0;
}(this, (function (exports, React) { 'use strict';

  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
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

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");

    return typeof key === "symbol" ? key : String(key);
  }

  var renderErr = 'Renderer Error ☝️';
  var actions = {
    init: 'init'
  };
  var defaultRenderer = function defaultRenderer(_ref) {
    var _ref$value = _ref.value,
        value = _ref$value === void 0 ? '' : _ref$value;
    return value;
  };
  var emptyRenderer = function emptyRenderer() {
    return React.createElement(React.Fragment, null, "\xA0");
  };
  var defaultColumn = {
    Cell: defaultRenderer,
    width: 150,
    minWidth: 0,
    maxWidth: Number.MAX_SAFE_INTEGER
  };

  function mergeProps() {
    for (var _len = arguments.length, propList = new Array(_len), _key = 0; _key < _len; _key++) {
      propList[_key] = arguments[_key];
    }

    return propList.reduce(function (props, next) {
      var style = next.style,
          className = next.className,
          rest = _objectWithoutPropertiesLoose(next, ["style", "className"]);

      props = _extends({}, props, {}, rest);

      if (style) {
        props.style = props.style ? _extends({}, props.style || {}, {}, style || {}) : style;
      }

      if (className) {
        props.className = props.className ? props.className + ' ' + className : className;
      }

      if (props.className === '') {
        delete props.className;
      }

      return props;
    }, {});
  }

  function handlePropGetter(prevProps, userProps, meta) {
    // Handle a lambda, pass it the previous props
    if (typeof userProps === 'function') {
      return handlePropGetter({}, userProps(prevProps, meta));
    } // Handle an array, merge each item as separate props


    if (Array.isArray(userProps)) {
      return mergeProps.apply(void 0, [prevProps].concat(userProps));
    } // Handle an object by default, merge the two objects


    return mergeProps(prevProps, userProps);
  }

  var makePropGetter = function makePropGetter(hooks, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return function (userProps) {
      if (userProps === void 0) {
        userProps = {};
      }

      return [].concat(hooks, [userProps]).reduce(function (prev, next) {
        return handlePropGetter(prev, next, _extends({}, meta, {
          userProps: userProps
        }));
      }, {});
    };
  };
  var reduceHooks = function reduceHooks(hooks, initial, meta, allowUndefined) {
    if (meta === void 0) {
      meta = {};
    }

    return hooks.reduce(function (prev, next) {
      var nextValue = next(prev, meta);

      {
        if (!allowUndefined && typeof nextValue === 'undefined') {
          console.info(next);
          throw new Error('React Table: A reducer hook ☝️ just returned undefined! This is not allowed.');
        }
      }

      return nextValue;
    }, initial);
  };
  var loopHooks = function loopHooks(hooks, context, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return hooks.forEach(function (hook) {
      var nextValue = hook(context, meta);

      {
        if (typeof nextValue !== 'undefined') {
          console.info(hook, nextValue);
          throw new Error('React Table: A loop-type hook ☝️ just returned a value! This is not allowed.');
        }
      }
    });
  };
  function ensurePluginOrder(plugins, befores, pluginName, afters) {
    if ( afters) {
      throw new Error("Defining plugins in the \"after\" section of ensurePluginOrder is no longer supported (see plugin " + pluginName + ")");
    }

    var pluginIndex = plugins.findIndex(function (plugin) {
      return plugin.pluginName === pluginName;
    });

    if (pluginIndex === -1) {
      {
        throw new Error("The plugin \"" + pluginName + "\" was not found in the plugin list!\nThis usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:\n\n  " + pluginName + ".pluginName = '" + pluginName + "'\n");
      }
    }

    befores.forEach(function (before) {
      var beforeIndex = plugins.findIndex(function (plugin) {
        return plugin.pluginName === before;
      });

      if (beforeIndex > -1 && beforeIndex > pluginIndex) {
        {
          throw new Error("React Table: The " + pluginName + " plugin hook must be placed after the " + before + " plugin hook!");
        }
      }
    });
  }
  function functionalUpdate(updater, old) {
    return typeof updater === 'function' ? updater(old) : updater;
  }
  function useGetLatest(obj) {
    var ref = React.useRef();
    ref.current = obj;
    return React.useCallback(function () {
      return ref.current;
    }, []);
  } // SSR has issues with useLayoutEffect still, so use useEffect during SSR

  var safeUseLayoutEffect = typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  function useMountedLayoutEffect(fn, deps) {
    var mountedRef = React.useRef(false);
    safeUseLayoutEffect(function () {
      if (mountedRef.current) {
        fn();
      }

      mountedRef.current = true; // eslint-disable-next-line
    }, deps);
  }
  function useAsyncDebounce(defaultFn, defaultWait) {
    if (defaultWait === void 0) {
      defaultWait = 0;
    }

    var debounceRef = React.useRef({});
    var getDefaultFn = useGetLatest(defaultFn);
    var getDefaultWait = useGetLatest(defaultWait);
    return React.useCallback(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _len2,
            args,
            _key2,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                for (_len2 = _args2.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = _args2[_key2];
                }

                if (!debounceRef.current.promise) {
                  debounceRef.current.promise = new Promise(function (resolve, reject) {
                    debounceRef.current.resolve = resolve;
                    debounceRef.current.reject = reject;
                  });
                }

                if (debounceRef.current.timeout) {
                  clearTimeout(debounceRef.current.timeout);
                }

                debounceRef.current.timeout = setTimeout(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          delete debounceRef.current.timeout;
                          _context.prev = 1;
                          _context.t0 = debounceRef.current;
                          _context.next = 5;
                          return getDefaultFn().apply(void 0, args);

                        case 5:
                          _context.t1 = _context.sent;

                          _context.t0.resolve.call(_context.t0, _context.t1);

                          _context.next = 12;
                          break;

                        case 9:
                          _context.prev = 9;
                          _context.t2 = _context["catch"](1);
                          debounceRef.current.reject(_context.t2);

                        case 12:
                          _context.prev = 12;
                          delete debounceRef.current.promise;
                          return _context.finish(12);

                        case 15:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[1, 9, 12, 15]]);
                })), getDefaultWait());
                return _context2.abrupt("return", debounceRef.current.promise);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function () {
        return _ref2.apply(this, arguments);
      };
    }(), [getDefaultFn, getDefaultWait]);
  }
  function makeRenderer(instance, column, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return function (type, userProps) {
      if (userProps === void 0) {
        userProps = {};
      }

      var Comp = typeof type === 'string' ? column[type] : type;

      if (typeof Comp === 'undefined') {
        console.info(column);
        throw new Error(renderErr);
      }

      return flexRender(Comp, _extends({}, instance, {
        column: column
      }, meta, {}, userProps));
    };
  }
  function flexRender(Comp, props) {
    return isReactComponent(Comp) ? React.createElement(Comp, props) : Comp;
  }

  function isReactComponent(component) {
    return isClassComponent(component) || typeof component === 'function' || isExoticComponent(component);
  }

  function isClassComponent(component) {
    return typeof component === 'function' && function () {
      var proto = Object.getPrototypeOf(component);
      return proto.prototype && proto.prototype.isReactComponent;
    }();
  }

  function isExoticComponent(component) {
    return typeof component === 'object' && typeof component.$$typeof === 'symbol' && ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description);
  }

  function linkColumnStructure(columns, parent, depth) {
    if (depth === void 0) {
      depth = 0;
    }

    return columns.map(function (column) {
      column = _extends({}, column, {
        parent: parent,
        depth: depth
      });
      assignColumnAccessor(column);

      if (column.columns) {
        column.columns = linkColumnStructure(column.columns, column, depth + 1);
      }

      return column;
    });
  }
  function flattenColumns(columns) {
    return flattenBy(columns, 'columns');
  }
  function assignColumnAccessor(column) {
    // First check for string accessor
    var id = column.id,
        accessor = column.accessor,
        Header = column.Header;

    if (typeof accessor === 'string') {
      id = id || accessor;
      var accessorPath = accessor.split('.');

      accessor = function accessor(row) {
        return getBy(row, accessorPath);
      };
    }

    if (!id && typeof Header === 'string' && Header) {
      id = Header;
    }

    if (!id && column.columns) {
      console.error(column);
      throw new Error('A column ID (or unique "Header" value) is required!');
    }

    if (!id) {
      console.error(column);
      throw new Error('A column ID (or string accessor) is required!');
    }

    Object.assign(column, {
      id: id,
      accessor: accessor
    });
    return column;
  }
  function decorateColumn(column, userDefaultColumn) {
    if (!userDefaultColumn) {
      throw new Error();
    }

    Object.assign(column, _extends({
      // Make sure there is a fallback header, just in case
      Header: emptyRenderer,
      Footer: emptyRenderer
    }, defaultColumn, {}, userDefaultColumn, {}, column));
    Object.assign(column, {
      originalWidth: column.width
    });
    return column;
  } // Build the header groups from the bottom up

  function makeHeaderGroups(allColumns, defaultColumn, additionalHeaderProperties) {
    if (additionalHeaderProperties === void 0) {
      additionalHeaderProperties = function additionalHeaderProperties() {
        return {};
      };
    }

    var headerGroups = [];
    var scanColumns = allColumns;
    var uid = 0;

    var getUID = function getUID() {
      return uid++;
    };

    var _loop = function _loop() {
      // The header group we are creating
      var headerGroup = {
        headers: []
      }; // The parent columns we're going to scan next

      var parentColumns = [];
      var hasParents = scanColumns.some(function (d) {
        return d.parent;
      }); // Scan each column for parents

      scanColumns.forEach(function (column) {
        // What is the latest (last) parent column?
        var latestParentColumn = [].concat(parentColumns).reverse()[0];
        var newParent;

        if (hasParents) {
          // If the column has a parent, add it if necessary
          if (column.parent) {
            newParent = _extends({}, column.parent, {
              originalId: column.parent.id,
              id: column.parent.id + "_" + getUID(),
              headers: [column]
            }, additionalHeaderProperties(column));
          } else {
            // If other columns have parents, we'll need to add a place holder if necessary
            var originalId = column.id + "_placeholder";
            newParent = decorateColumn(_extends({
              originalId: originalId,
              id: column.id + "_placeholder_" + getUID(),
              placeholderOf: column,
              headers: [column]
            }, additionalHeaderProperties(column)), defaultColumn);
          } // If the resulting parent columns are the same, just add
          // the column and increment the header span


          if (latestParentColumn && latestParentColumn.originalId === newParent.originalId) {
            latestParentColumn.headers.push(column);
          } else {
            parentColumns.push(newParent);
          }
        }

        headerGroup.headers.push(column);
      });
      headerGroups.push(headerGroup); // Start scanning the parent columns

      scanColumns = parentColumns;
    };

    while (scanColumns.length) {
      _loop();
    }

    return headerGroups.reverse();
  }
  var pathObjCache = new Map();
  function getBy(obj, path, def) {
    if (!path) {
      return obj;
    }

    var cacheKey = typeof path === 'function' ? path : JSON.stringify(path);

    var pathObj = pathObjCache.get(cacheKey) || function () {
      var pathObj = makePathArray(path);
      pathObjCache.set(cacheKey, pathObj);
      return pathObj;
    }();

    var val;

    try {
      val = pathObj.reduce(function (cursor, pathPart) {
        return cursor[pathPart];
      }, obj);
    } catch (e) {// continue regardless of error
    }

    return typeof val !== 'undefined' ? val : def;
  }
  function getFirstDefined() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    for (var i = 0; i < args.length; i += 1) {
      if (typeof args[i] !== 'undefined') {
        return args[i];
      }
    }
  }
  function isFunction(a) {
    if (typeof a === 'function') {
      return a;
    }
  }
  function flattenBy(arr, key) {
    var flat = [];

    var recurse = function recurse(arr) {
      arr.forEach(function (d) {
        if (!d[key]) {
          flat.push(d);
        } else {
          recurse(d[key]);
        }
      });
    };

    recurse(arr);
    return flat;
  }
  function expandRows(rows, _ref) {
    var manualExpandedKey = _ref.manualExpandedKey,
        expanded = _ref.expanded,
        _ref$expandSubRows = _ref.expandSubRows,
        expandSubRows = _ref$expandSubRows === void 0 ? true : _ref$expandSubRows;
    var expandedRows = [];

    var handleRow = function handleRow(row, addToExpandedRows) {
      if (addToExpandedRows === void 0) {
        addToExpandedRows = true;
      }

      row.isExpanded = row.original && row.original[manualExpandedKey] || expanded[row.id];
      row.canExpand = row.subRows && !!row.subRows.length;

      if (addToExpandedRows) {
        expandedRows.push(row);
      }

      if (row.subRows && row.subRows.length && row.isExpanded) {
        row.subRows.forEach(function (row) {
          return handleRow(row, expandSubRows);
        });
      }
    };

    rows.forEach(function (row) {
      return handleRow(row);
    });
    return expandedRows;
  }
  function getFilterMethod(filter, userFilterTypes, filterTypes) {
    return isFunction(filter) || userFilterTypes[filter] || filterTypes[filter] || filterTypes.text;
  }
  function shouldAutoRemoveFilter(autoRemove, value, column) {
    return autoRemove ? autoRemove(value, column) : typeof value === 'undefined';
  }
  function unpreparedAccessWarning() {
    throw new Error('React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.');
  }
  var passiveSupported = null;
  function passiveEventSupported() {
    // memoize support to avoid adding multiple test events
    if (typeof passiveSupported === 'boolean') return passiveSupported;
    var supported = false;

    try {
      var options = {
        get passive() {
          supported = true;
          return false;
        }

      };
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (err) {
      supported = false;
    }

    passiveSupported = supported;
    return passiveSupported;
  } //

  var reOpenBracket = /\[/g;
  var reCloseBracket = /\]/g;

  function makePathArray(obj) {
    return flattenDeep(obj) // remove all periods in parts
    .map(function (d) {
      return String(d).replace('.', '_');
    }) // join parts using period
    .join('.') // replace brackets with periods
    .replace(reOpenBracket, '.').replace(reCloseBracket, '') // split it back out on periods
    .split('.');
  }

  function flattenDeep(arr, newArr) {
    if (newArr === void 0) {
      newArr = [];
    }

    if (!Array.isArray(arr)) {
      newArr.push(arr);
    } else {
      for (var i = 0; i < arr.length; i += 1) {
        flattenDeep(arr[i], newArr);
      }
    }

    return newArr;
  }

  var defaultGetTableProps = function defaultGetTableProps(props) {
    return _extends({
      role: 'table'
    }, props);
  };

  var defaultGetTableBodyProps = function defaultGetTableBodyProps(props) {
    return _extends({
      role: 'rowgroup'
    }, props);
  };

  var defaultGetHeaderProps = function defaultGetHeaderProps(props, _ref) {
    var column = _ref.column;
    return _extends({
      key: "header_" + column.id,
      colSpan: column.totalVisibleHeaderCount,
      role: 'columnheader'
    }, props);
  };

  var defaultGetFooterProps = function defaultGetFooterProps(props, _ref2) {
    var column = _ref2.column;
    return _extends({
      key: "footer_" + column.id,
      colSpan: column.totalVisibleHeaderCount
    }, props);
  };

  var defaultGetHeaderGroupProps = function defaultGetHeaderGroupProps(props, _ref3) {
    var index = _ref3.index;
    return _extends({
      key: "headerGroup_" + index,
      role: 'row'
    }, props);
  };

  var defaultGetFooterGroupProps = function defaultGetFooterGroupProps(props, _ref4) {
    var index = _ref4.index;
    return _extends({
      key: "footerGroup_" + index
    }, props);
  };

  var defaultGetRowProps = function defaultGetRowProps(props, _ref5) {
    var row = _ref5.row;
    return _extends({
      key: "row_" + row.id,
      role: 'row'
    }, props);
  };

  var defaultGetCellProps = function defaultGetCellProps(props, _ref6) {
    var cell = _ref6.cell;
    return _extends({
      key: "cell_" + cell.row.id + "_" + cell.column.id,
      role: 'cell'
    }, props);
  };

  function makeDefaultPluginHooks() {
    return {
      useOptions: [],
      stateReducers: [],
      useControlledState: [],
      columns: [],
      columnsDeps: [],
      allColumns: [],
      allColumnsDeps: [],
      accessValue: [],
      materializedColumns: [],
      materializedColumnsDeps: [],
      useInstanceAfterData: [],
      visibleColumns: [],
      visibleColumnsDeps: [],
      headerGroups: [],
      headerGroupsDeps: [],
      useInstanceBeforeDimensions: [],
      useInstance: [],
      prepareRow: [],
      getTableProps: [defaultGetTableProps],
      getTableBodyProps: [defaultGetTableBodyProps],
      getHeaderGroupProps: [defaultGetHeaderGroupProps],
      getFooterGroupProps: [defaultGetFooterGroupProps],
      getHeaderProps: [defaultGetHeaderProps],
      getFooterProps: [defaultGetFooterProps],
      getRowProps: [defaultGetRowProps],
      getCellProps: [defaultGetCellProps],
      useFinalInstance: []
    };
  }

  actions.resetHiddenColumns = 'resetHiddenColumns';
  actions.toggleHideColumn = 'toggleHideColumn';
  actions.setHiddenColumns = 'setHiddenColumns';
  actions.toggleHideAllColumns = 'toggleHideAllColumns';
  var useColumnVisibility = function useColumnVisibility(hooks) {
    hooks.getToggleHiddenProps = [defaultGetToggleHiddenProps];
    hooks.getToggleHideAllColumnsProps = [defaultGetToggleHideAllColumnsProps];
    hooks.stateReducers.push(reducer);
    hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions);
    hooks.headerGroupsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.hiddenColumns]);
    });
    hooks.useInstance.push(useInstance);
  };
  useColumnVisibility.pluginName = 'useColumnVisibility';

  var defaultGetToggleHiddenProps = function defaultGetToggleHiddenProps(props, _ref2) {
    var column = _ref2.column;
    return [props, {
      onChange: function onChange(e) {
        column.toggleHidden(!e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: column.isVisible,
      title: 'Toggle Column Visible'
    }];
  };

  var defaultGetToggleHideAllColumnsProps = function defaultGetToggleHideAllColumnsProps(props, _ref3) {
    var instance = _ref3.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleHideAllColumns(!e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: !instance.allColumnsHidden && !instance.state.hiddenColumns.length,
      title: 'Toggle All Columns Hidden',
      indeterminate: !instance.allColumnsHidden && instance.state.hiddenColumns.length
    }];
  };

  function reducer(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        hiddenColumns: []
      }, state);
    }

    if (action.type === actions.resetHiddenColumns) {
      return _extends({}, state, {
        hiddenColumns: instance.initialState.hiddenColumns || []
      });
    }

    if (action.type === actions.toggleHideColumn) {
      var should = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.includes(action.columnId);
      var hiddenColumns = should ? [].concat(state.hiddenColumns, [action.columnId]) : state.hiddenColumns.filter(function (d) {
        return d !== action.columnId;
      });
      return _extends({}, state, {
        hiddenColumns: hiddenColumns
      });
    }

    if (action.type === actions.setHiddenColumns) {
      return _extends({}, state, {
        hiddenColumns: functionalUpdate(action.value, state.hiddenColumns)
      });
    }

    if (action.type === actions.toggleHideAllColumns) {
      var shouldAll = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.length;
      return _extends({}, state, {
        hiddenColumns: shouldAll ? instance.allColumns.map(function (d) {
          return d.id;
        }) : []
      });
    }
  }

  function useInstanceBeforeDimensions(instance) {
    var headers = instance.headers,
        hiddenColumns = instance.state.hiddenColumns;
    var isMountedRef = React.useRef(false);

    if (!isMountedRef.current) ;

    var handleColumn = function handleColumn(column, parentVisible) {
      column.isVisible = parentVisible && !hiddenColumns.includes(column.id);
      var totalVisibleHeaderCount = 0;

      if (column.headers && column.headers.length) {
        column.headers.forEach(function (subColumn) {
          return totalVisibleHeaderCount += handleColumn(subColumn, column.isVisible);
        });
      } else {
        totalVisibleHeaderCount = column.isVisible ? 1 : 0;
      }

      column.totalVisibleHeaderCount = totalVisibleHeaderCount;
      return totalVisibleHeaderCount;
    };

    var totalVisibleHeaderCount = 0;
    headers.forEach(function (subHeader) {
      return totalVisibleHeaderCount += handleColumn(subHeader, true);
    });
  }

  function useInstance(instance) {
    var columns = instance.columns,
        flatHeaders = instance.flatHeaders,
        dispatch = instance.dispatch,
        allColumns = instance.allColumns,
        getHooks = instance.getHooks,
        hiddenColumns = instance.state.hiddenColumns,
        _instance$autoResetHi = instance.autoResetHiddenColumns,
        autoResetHiddenColumns = _instance$autoResetHi === void 0 ? true : _instance$autoResetHi;
    var getInstance = useGetLatest(instance);
    var allColumnsHidden = allColumns.length === hiddenColumns.length;
    var toggleHideColumn = React.useCallback(function (columnId, value) {
      return dispatch({
        type: actions.toggleHideColumn,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var setHiddenColumns = React.useCallback(function (value) {
      return dispatch({
        type: actions.setHiddenColumns,
        value: value
      });
    }, [dispatch]);
    var toggleHideAllColumns = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleHideAllColumns,
        value: value
      });
    }, [dispatch]);
    var getToggleHideAllColumnsProps = makePropGetter(getHooks().getToggleHideAllColumnsProps, {
      instance: getInstance()
    });
    flatHeaders.forEach(function (column) {
      column.toggleHidden = function (value) {
        dispatch({
          type: actions.toggleHideColumn,
          columnId: column.id,
          value: value
        });
      };

      column.getToggleHiddenProps = makePropGetter(getHooks().getToggleHiddenProps, {
        instance: getInstance(),
        column: column
      });
    });
    var getAutoResetHiddenColumns = useGetLatest(autoResetHiddenColumns);
    useMountedLayoutEffect(function () {
      if (getAutoResetHiddenColumns()) {
        dispatch({
          type: actions.resetHiddenColumns
        });
      }
    }, [dispatch, columns]);
    Object.assign(instance, {
      allColumnsHidden: allColumnsHidden,
      toggleHideColumn: toggleHideColumn,
      setHiddenColumns: setHiddenColumns,
      toggleHideAllColumns: toggleHideAllColumns,
      getToggleHideAllColumnsProps: getToggleHideAllColumnsProps
    });
  }

  var defaultInitialState = {};
  var defaultColumnInstance = {};

  var defaultReducer = function defaultReducer(state, action, prevState) {
    return state;
  };

  var defaultGetSubRows = function defaultGetSubRows(row, index) {
    return row.subRows || [];
  };

  var defaultGetRowId = function defaultGetRowId(row, index, parent) {
    return "" + (parent ? [parent.id, index].join('.') : index);
  };

  var defaultUseControlledState = function defaultUseControlledState(d) {
    return d;
  };

  function applyDefaults(props) {
    var _props$initialState = props.initialState,
        initialState = _props$initialState === void 0 ? defaultInitialState : _props$initialState,
        _props$defaultColumn = props.defaultColumn,
        defaultColumn = _props$defaultColumn === void 0 ? defaultColumnInstance : _props$defaultColumn,
        _props$getSubRows = props.getSubRows,
        getSubRows = _props$getSubRows === void 0 ? defaultGetSubRows : _props$getSubRows,
        _props$getRowId = props.getRowId,
        getRowId = _props$getRowId === void 0 ? defaultGetRowId : _props$getRowId,
        _props$stateReducer = props.stateReducer,
        stateReducer = _props$stateReducer === void 0 ? defaultReducer : _props$stateReducer,
        _props$useControlledS = props.useControlledState,
        useControlledState = _props$useControlledS === void 0 ? defaultUseControlledState : _props$useControlledS,
        rest = _objectWithoutPropertiesLoose(props, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);

    return _extends({}, rest, {
      initialState: initialState,
      defaultColumn: defaultColumn,
      getSubRows: getSubRows,
      getRowId: getRowId,
      stateReducer: stateReducer,
      useControlledState: useControlledState
    });
  }

  var useTable = function useTable(props) {
    for (var _len = arguments.length, plugins = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      plugins[_key - 1] = arguments[_key];
    }

    // Apply default props
    props = applyDefaults(props); // Add core plugins

    plugins = [useColumnVisibility].concat(plugins); // Create the table instance

    var instanceRef = React.useRef({}); // Create a getter for the instance (helps avoid a lot of potential memory leaks)

    var getInstance = useGetLatest(instanceRef.current); // Assign the props, plugins and hooks to the instance

    Object.assign(getInstance(), _extends({}, props, {
      plugins: plugins,
      hooks: makeDefaultPluginHooks()
    })); // Allow plugins to register hooks as early as possible

    plugins.filter(Boolean).forEach(function (plugin) {
      plugin(getInstance().hooks);
    }); // Consume all hooks and make a getter for them

    var getHooks = useGetLatest(getInstance().hooks);
    getInstance().getHooks = getHooks;
    delete getInstance().hooks; // Allow useOptions hooks to modify the options coming into the table

    Object.assign(getInstance(), reduceHooks(getHooks().useOptions, applyDefaults(props)));

    var _getInstance = getInstance(),
        data = _getInstance.data,
        userColumns = _getInstance.columns,
        initialState = _getInstance.initialState,
        defaultColumn = _getInstance.defaultColumn,
        getSubRows = _getInstance.getSubRows,
        getRowId = _getInstance.getRowId,
        stateReducer = _getInstance.stateReducer,
        useControlledState = _getInstance.useControlledState; // Setup user reducer ref


    var getStateReducer = useGetLatest(stateReducer); // Build the reducer

    var reducer = React.useCallback(function (state, action) {
      // Detect invalid actions
      if (!action.type) {
        console.info({
          action: action
        });
        throw new Error('Unknown Action 👆');
      } // Reduce the state from all plugin reducers


      return [].concat(getHooks().stateReducers, Array.isArray(getStateReducer()) ? getStateReducer() : [getStateReducer()]).reduce(function (s, handler) {
        return handler(s, action, state, getInstance()) || s;
      }, state);
    }, [getHooks, getStateReducer, getInstance]); // Start the reducer

    var _React$useReducer = React.useReducer(reducer, undefined, function () {
      return reducer(initialState, {
        type: actions.init
      });
    }),
        reducerState = _React$useReducer[0],
        dispatch = _React$useReducer[1]; // Allow the user to control the final state with hooks


    var state = reduceHooks([].concat(getHooks().useControlledState, [useControlledState]), reducerState, {
      instance: getInstance()
    });
    Object.assign(getInstance(), {
      state: state,
      dispatch: dispatch
    }); // Decorate All the columns

    var columns = React.useMemo(function () {
      return linkColumnStructure(reduceHooks(getHooks().columns, userColumns, {
        instance: getInstance()
      }));
    }, [getHooks, getInstance, userColumns].concat(reduceHooks(getHooks().columnsDeps, [], {
      instance: getInstance()
    })));
    getInstance().columns = columns; // Get the flat list of all columns and allow hooks to decorate
    // those columns (and trigger this memoization via deps)

    var allColumns = React.useMemo(function () {
      return reduceHooks(getHooks().allColumns, flattenColumns(columns), {
        instance: getInstance()
      }).map(assignColumnAccessor);
    }, [columns, getHooks, getInstance].concat(reduceHooks(getHooks().allColumnsDeps, [], {
      instance: getInstance()
    })));
    getInstance().allColumns = allColumns; // Access the row model using initial columns

    var _React$useMemo = React.useMemo(function () {
      var rows = [];
      var flatRows = [];
      var rowsById = {};
      var allColumnsQueue = [].concat(allColumns);

      while (allColumnsQueue.length) {
        var column = allColumnsQueue.shift();
        accessRowsForColumn({
          data: data,
          rows: rows,
          flatRows: flatRows,
          rowsById: rowsById,
          column: column,
          getRowId: getRowId,
          getSubRows: getSubRows,
          accessValueHooks: getHooks().accessValue,
          getInstance: getInstance
        });
      }

      return [rows, flatRows, rowsById];
    }, [allColumns, data, getRowId, getSubRows, getHooks, getInstance]),
        rows = _React$useMemo[0],
        flatRows = _React$useMemo[1],
        rowsById = _React$useMemo[2];

    Object.assign(getInstance(), {
      rows: rows,
      initialRows: [].concat(rows),
      flatRows: flatRows,
      rowsById: rowsById // materializedColumns,

    });
    loopHooks(getHooks().useInstanceAfterData, getInstance()); // Get the flat list of all columns AFTER the rows
    // have been access, and allow hooks to decorate
    // those columns (and trigger this memoization via deps)

    var visibleColumns = React.useMemo(function () {
      return reduceHooks(getHooks().visibleColumns, allColumns, {
        instance: getInstance()
      }).map(function (d) {
        return decorateColumn(d, defaultColumn);
      });
    }, [getHooks, allColumns, getInstance, defaultColumn].concat(reduceHooks(getHooks().visibleColumnsDeps, [], {
      instance: getInstance()
    }))); // Combine new visible columns with all columns

    allColumns = React.useMemo(function () {
      var columns = [].concat(visibleColumns);
      allColumns.forEach(function (column) {
        if (!columns.find(function (d) {
          return d.id === column.id;
        })) {
          columns.push(column);
        }
      });
      return columns;
    }, [allColumns, visibleColumns]);
    getInstance().allColumns = allColumns;

    {
      var duplicateColumns = allColumns.filter(function (column, i) {
        return allColumns.findIndex(function (d) {
          return d.id === column.id;
        }) !== i;
      });

      if (duplicateColumns.length) {
        console.info(allColumns);
        throw new Error("Duplicate columns were found with ids: \"" + duplicateColumns.map(function (d) {
          return d.id;
        }).join(', ') + "\" in the columns array above");
      }
    } // Make the headerGroups


    var headerGroups = React.useMemo(function () {
      return reduceHooks(getHooks().headerGroups, makeHeaderGroups(visibleColumns, defaultColumn), getInstance());
    }, [getHooks, visibleColumns, defaultColumn, getInstance].concat(reduceHooks(getHooks().headerGroupsDeps, [], {
      instance: getInstance()
    })));
    getInstance().headerGroups = headerGroups; // Get the first level of headers

    var headers = React.useMemo(function () {
      return headerGroups.length ? headerGroups[0].headers : [];
    }, [headerGroups]);
    getInstance().headers = headers; // Provide a flat header list for utilities

    getInstance().flatHeaders = headerGroups.reduce(function (all, headerGroup) {
      return [].concat(all, headerGroup.headers);
    }, []);
    loopHooks(getHooks().useInstanceBeforeDimensions, getInstance()); // Filter columns down to visible ones

    var visibleColumnsDep = visibleColumns.filter(function (d) {
      return d.isVisible;
    }).map(function (d) {
      return d.id;
    }).sort().join('_');
    visibleColumns = React.useMemo(function () {
      return visibleColumns.filter(function (d) {
        return d.isVisible;
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [visibleColumns, visibleColumnsDep]);
    getInstance().visibleColumns = visibleColumns; // Header Visibility is needed by this point

    var _calculateHeaderWidth = calculateHeaderWidths(headers),
        totalColumnsMinWidth = _calculateHeaderWidth[0],
        totalColumnsWidth = _calculateHeaderWidth[1],
        totalColumnsMaxWidth = _calculateHeaderWidth[2];

    getInstance().totalColumnsMinWidth = totalColumnsMinWidth;
    getInstance().totalColumnsWidth = totalColumnsWidth;
    getInstance().totalColumnsMaxWidth = totalColumnsMaxWidth;
    loopHooks(getHooks().useInstance, getInstance()) // Each materialized header needs to be assigned a render function and other
    // prop getter properties here.
    ;
    [].concat(getInstance().flatHeaders, getInstance().allColumns).forEach(function (column) {
      // Give columns/headers rendering power
      column.render = makeRenderer(getInstance(), column); // Give columns/headers a default getHeaderProps

      column.getHeaderProps = makePropGetter(getHooks().getHeaderProps, {
        instance: getInstance(),
        column: column
      }); // Give columns/headers a default getFooterProps

      column.getFooterProps = makePropGetter(getHooks().getFooterProps, {
        instance: getInstance(),
        column: column
      });
    });
    getInstance().headerGroups = React.useMemo(function () {
      return headerGroups.filter(function (headerGroup, i) {
        // Filter out any headers and headerGroups that don't have visible columns
        headerGroup.headers = headerGroup.headers.filter(function (column) {
          var recurse = function recurse(headers) {
            return headers.filter(function (column) {
              if (column.headers) {
                return recurse(column.headers);
              }

              return column.isVisible;
            }).length;
          };

          if (column.headers) {
            return recurse(column.headers);
          }

          return column.isVisible;
        }); // Give headerGroups getRowProps

        if (headerGroup.headers.length) {
          headerGroup.getHeaderGroupProps = makePropGetter(getHooks().getHeaderGroupProps, {
            instance: getInstance(),
            headerGroup: headerGroup,
            index: i
          });
          headerGroup.getFooterGroupProps = makePropGetter(getHooks().getFooterGroupProps, {
            instance: getInstance(),
            headerGroup: headerGroup,
            index: i
          });
          return true;
        }

        return false;
      });
    }, [headerGroups, getInstance, getHooks]);
    getInstance().footerGroups = [].concat(getInstance().headerGroups).reverse(); // The prepareRow function is absolutely necessary and MUST be called on
    // any rows the user wishes to be displayed.

    getInstance().prepareRow = React.useCallback(function (row) {
      row.getRowProps = makePropGetter(getHooks().getRowProps, {
        instance: getInstance(),
        row: row
      }); // Build the visible cells for each row

      row.allCells = allColumns.map(function (column) {
        var value = row.values[column.id];
        var cell = {
          column: column,
          row: row,
          value: value
        }; // Give each cell a getCellProps base

        cell.getCellProps = makePropGetter(getHooks().getCellProps, {
          instance: getInstance(),
          cell: cell
        }); // Give each cell a renderer function (supports multiple renderers)

        cell.render = makeRenderer(getInstance(), column, {
          row: row,
          cell: cell,
          value: value
        });
        return cell;
      });
      row.cells = visibleColumns.map(function (column) {
        return row.allCells.find(function (cell) {
          return cell.column.id === column.id;
        });
      }); // need to apply any row specific hooks (useExpanded requires this)

      loopHooks(getHooks().prepareRow, row, {
        instance: getInstance()
      });
    }, [getHooks, getInstance, allColumns, visibleColumns]);
    getInstance().getTableProps = makePropGetter(getHooks().getTableProps, {
      instance: getInstance()
    });
    getInstance().getTableBodyProps = makePropGetter(getHooks().getTableBodyProps, {
      instance: getInstance()
    });
    loopHooks(getHooks().useFinalInstance, getInstance());
    return getInstance();
  };

  function calculateHeaderWidths(headers, left) {
    if (left === void 0) {
      left = 0;
    }

    var sumTotalMinWidth = 0;
    var sumTotalWidth = 0;
    var sumTotalMaxWidth = 0;
    var sumTotalFlexWidth = 0;
    headers.forEach(function (header) {
      var subHeaders = header.headers;
      header.totalLeft = left;

      if (subHeaders && subHeaders.length) {
        var _calculateHeaderWidth2 = calculateHeaderWidths(subHeaders, left),
            totalMinWidth = _calculateHeaderWidth2[0],
            totalWidth = _calculateHeaderWidth2[1],
            totalMaxWidth = _calculateHeaderWidth2[2],
            totalFlexWidth = _calculateHeaderWidth2[3];

        header.totalMinWidth = totalMinWidth;
        header.totalWidth = totalWidth;
        header.totalMaxWidth = totalMaxWidth;
        header.totalFlexWidth = totalFlexWidth;
      } else {
        header.totalMinWidth = header.minWidth;
        header.totalWidth = Math.min(Math.max(header.minWidth, header.width), header.maxWidth);
        header.totalMaxWidth = header.maxWidth;
        header.totalFlexWidth = header.canResize ? header.totalWidth : 0;
      }

      if (header.isVisible) {
        left += header.totalWidth;
        sumTotalMinWidth += header.totalMinWidth;
        sumTotalWidth += header.totalWidth;
        sumTotalMaxWidth += header.totalMaxWidth;
        sumTotalFlexWidth += header.totalFlexWidth;
      }
    });
    return [sumTotalMinWidth, sumTotalWidth, sumTotalMaxWidth, sumTotalFlexWidth];
  }

  function accessRowsForColumn(_ref) {
    var data = _ref.data,
        rows = _ref.rows,
        flatRows = _ref.flatRows,
        rowsById = _ref.rowsById,
        column = _ref.column,
        getRowId = _ref.getRowId,
        getSubRows = _ref.getSubRows,
        accessValueHooks = _ref.accessValueHooks,
        getInstance = _ref.getInstance;

    // Access the row's data column-by-column
    // We do it this way so we can incrementally add materialized
    // columns after the first pass and avoid excessive looping
    var accessRow = function accessRow(originalRow, rowIndex, depth, parent, parentRows) {
      if (depth === void 0) {
        depth = 0;
      }

      // Keep the original reference around
      var original = originalRow;
      var id = getRowId(originalRow, rowIndex, parent);
      var row = rowsById[id]; // If the row hasn't been created, let's make it

      if (!row) {
        row = {
          id: id,
          original: original,
          index: rowIndex,
          depth: depth,
          cells: [{}] // This is a dummy cell

        }; // Override common array functions (and the dummy cell's getCellProps function)
        // to show an error if it is accessed without calling prepareRow

        row.cells.map = unpreparedAccessWarning;
        row.cells.filter = unpreparedAccessWarning;
        row.cells.forEach = unpreparedAccessWarning;
        row.cells[0].getCellProps = unpreparedAccessWarning; // Create the cells and values

        row.values = {}; // Push this row into the parentRows array

        parentRows.push(row); // Keep track of every row in a flat array

        flatRows.push(row); // Also keep track of every row by its ID

        rowsById[id] = row; // Get the original subrows

        row.originalSubRows = getSubRows(originalRow, rowIndex); // Then recursively access them

        if (row.originalSubRows) {
          var subRows = [];
          row.originalSubRows.forEach(function (d, i) {
            return accessRow(d, i, depth + 1, row, subRows);
          }); // Keep the new subRows array on the row

          row.subRows = subRows;
        }
      } else if (row.subRows) {
        // If the row exists, then it's already been accessed
        // Keep recursing, but don't worry about passing the
        // accumlator array (those rows already exist)
        row.originalSubRows.forEach(function (d, i) {
          return accessRow(d, i, depth + 1, row);
        });
      } // If the column has an accessor, use it to get a value


      if (column.accessor) {
        row.values[column.id] = column.accessor(originalRow, rowIndex, row, parentRows, data);
      } // Allow plugins to manipulate the column value


      row.values[column.id] = reduceHooks(accessValueHooks, row.values[column.id], {
        row: row,
        column: column,
        instance: getInstance()
      }, true);
    };

    data.forEach(function (originalRow, rowIndex) {
      return accessRow(originalRow, rowIndex, 0, undefined, rows);
    });
  }

  actions.resetExpanded = 'resetExpanded';
  actions.toggleRowExpanded = 'toggleRowExpanded';
  actions.toggleAllRowsExpanded = 'toggleAllRowsExpanded';
  var useExpanded = function useExpanded(hooks) {
    hooks.getToggleAllRowsExpandedProps = [defaultGetToggleAllRowsExpandedProps];
    hooks.getToggleRowExpandedProps = [defaultGetToggleRowExpandedProps];
    hooks.stateReducers.push(reducer$1);
    hooks.useInstance.push(useInstance$1);
    hooks.prepareRow.push(prepareRow);
  };
  useExpanded.pluginName = 'useExpanded';

  var defaultGetToggleAllRowsExpandedProps = function defaultGetToggleAllRowsExpandedProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      onClick: function onClick(e) {
        instance.toggleAllRowsExpanded();
      },
      style: {
        cursor: 'pointer'
      },
      title: 'Toggle All Rows Expanded'
    }];
  };

  var defaultGetToggleRowExpandedProps = function defaultGetToggleRowExpandedProps(props, _ref2) {
    var row = _ref2.row;
    return [props, {
      onClick: function onClick() {
        row.toggleRowExpanded();
      },
      style: {
        cursor: 'pointer'
      },
      title: 'Toggle Row Expanded'
    }];
  }; // Reducer


  function reducer$1(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        expanded: {}
      }, state);
    }

    if (action.type === actions.resetExpanded) {
      return _extends({}, state, {
        expanded: instance.initialState.expanded || {}
      });
    }

    if (action.type === actions.toggleAllRowsExpanded) {
      var value = action.value;
      var isAllRowsExpanded = instance.isAllRowsExpanded,
          rowsById = instance.rowsById;
      var expandAll = typeof value !== 'undefined' ? value : !isAllRowsExpanded;

      if (expandAll) {
        var expanded = {};
        Object.keys(rowsById).forEach(function (rowId) {
          expanded[rowId] = true;
        });
        return _extends({}, state, {
          expanded: expanded
        });
      }

      return _extends({}, state, {
        expanded: {}
      });
    }

    if (action.type === actions.toggleRowExpanded) {
      var id = action.id,
          setExpanded = action.value;
      var exists = state.expanded[id];
      var shouldExist = typeof setExpanded !== 'undefined' ? setExpanded : !exists;

      if (!exists && shouldExist) {
        var _extends2;

        return _extends({}, state, {
          expanded: _extends({}, state.expanded, (_extends2 = {}, _extends2[id] = true, _extends2))
        });
      } else if (exists && !shouldExist) {
        var _state$expanded = state.expanded,
            _ = _state$expanded[id],
            rest = _objectWithoutPropertiesLoose(_state$expanded, [id].map(_toPropertyKey));

        return _extends({}, state, {
          expanded: rest
        });
      } else {
        return state;
      }
    }
  }

  function useInstance$1(instance) {
    var data = instance.data,
        rows = instance.rows,
        rowsById = instance.rowsById,
        _instance$manualExpan = instance.manualExpandedKey,
        manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
        _instance$paginateExp = instance.paginateExpandedRows,
        paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
        _instance$expandSubRo = instance.expandSubRows,
        expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
        _instance$autoResetEx = instance.autoResetExpanded,
        autoResetExpanded = _instance$autoResetEx === void 0 ? true : _instance$autoResetEx,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        expanded = instance.state.expanded,
        dispatch = instance.dispatch;
    ensurePluginOrder(plugins, ['useSortBy', 'useGroupBy', 'usePivotColumns', 'useGlobalFilter'], 'useExpanded');
    var getAutoResetExpanded = useGetLatest(autoResetExpanded);
    var isAllRowsExpanded = Boolean(Object.keys(rowsById).length && Object.keys(expanded).length);

    if (isAllRowsExpanded) {
      if (Object.keys(rowsById).some(function (id) {
        return !expanded[id];
      })) {
        isAllRowsExpanded = false;
      }
    } // Bypass any effects from firing when this changes


    useMountedLayoutEffect(function () {
      if (getAutoResetExpanded()) {
        dispatch({
          type: actions.resetExpanded
        });
      }
    }, [dispatch, data]);
    var toggleRowExpanded = React.useCallback(function (id, value) {
      dispatch({
        type: actions.toggleRowExpanded,
        id: id,
        value: value
      });
    }, [dispatch]);
    var toggleAllRowsExpanded = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllRowsExpanded,
        value: value
      });
    }, [dispatch]);
    var expandedRows = React.useMemo(function () {
      if (paginateExpandedRows) {
        return expandRows(rows, {
          manualExpandedKey: manualExpandedKey,
          expanded: expanded,
          expandSubRows: expandSubRows
        });
      }

      return rows;
    }, [paginateExpandedRows, rows, manualExpandedKey, expanded, expandSubRows]);
    var expandedDepth = React.useMemo(function () {
      return findExpandedDepth(expanded);
    }, [expanded]);
    var getInstance = useGetLatest(instance);
    var getToggleAllRowsExpandedProps = makePropGetter(getHooks().getToggleAllRowsExpandedProps, {
      instance: getInstance()
    });
    Object.assign(instance, {
      preExpandedRows: rows,
      expandedRows: expandedRows,
      rows: expandedRows,
      expandedDepth: expandedDepth,
      isAllRowsExpanded: isAllRowsExpanded,
      toggleRowExpanded: toggleRowExpanded,
      toggleAllRowsExpanded: toggleAllRowsExpanded,
      getToggleAllRowsExpandedProps: getToggleAllRowsExpandedProps
    });
  }

  function prepareRow(row, _ref3) {
    var getHooks = _ref3.instance.getHooks,
        instance = _ref3.instance;

    row.toggleRowExpanded = function (set) {
      return instance.toggleRowExpanded(row.id, set);
    };

    row.getToggleRowExpandedProps = makePropGetter(getHooks().getToggleRowExpandedProps, {
      instance: instance,
      row: row
    });
  }

  function findExpandedDepth(expanded) {
    var maxDepth = 0;
    Object.keys(expanded).forEach(function (id) {
      var splitId = id.split('.');
      maxDepth = Math.max(maxDepth, splitId.length);
    });
    return maxDepth;
  }

  var text = function text(rows, ids, filterValue) {
    rows = rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase());
      });
    });
    return rows;
  };

  text.autoRemove = function (val) {
    return !val;
  };

  var exactText = function exactText(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue).toLowerCase() === String(filterValue).toLowerCase() : true;
      });
    });
  };

  exactText.autoRemove = function (val) {
    return !val;
  };

  var exactTextCase = function exactTextCase(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue) === String(filterValue) : true;
      });
    });
  };

  exactTextCase.autoRemove = function (val) {
    return !val;
  };

  var includes = function includes(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue.includes(filterValue);
      });
    });
  };

  includes.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesAll = function includesAll(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue && rowValue.length && filterValue.every(function (val) {
          return rowValue.includes(val);
        });
      });
    });
  };

  includesAll.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesSome = function includesSome(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue && rowValue.length && filterValue.some(function (val) {
          return rowValue.includes(val);
        });
      });
    });
  };

  includesSome.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesValue = function includesValue(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return filterValue.includes(rowValue);
      });
    });
  };

  includesValue.autoRemove = function (val) {
    return !val || !val.length;
  };

  var exact = function exact(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue === filterValue;
      });
    });
  };

  exact.autoRemove = function (val) {
    return typeof val === 'undefined';
  };

  var equals = function equals(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id]; // eslint-disable-next-line eqeqeq

        return rowValue == filterValue;
      });
    });
  };

  equals.autoRemove = function (val) {
    return val == null;
  };

  var between = function between(rows, ids, filterValue) {
    var _ref = filterValue || [],
        min = _ref[0],
        max = _ref[1];

    min = typeof min === 'number' ? min : -Infinity;
    max = typeof max === 'number' ? max : Infinity;

    if (min > max) {
      var temp = min;
      min = max;
      max = temp;
    }

    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue >= min && rowValue <= max;
      });
    });
  };

  between.autoRemove = function (val) {
    return !val || typeof val[0] !== 'number' && typeof val[1] !== 'number';
  };

  var filterTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    text: text,
    exactText: exactText,
    exactTextCase: exactTextCase,
    includes: includes,
    includesAll: includesAll,
    includesSome: includesSome,
    includesValue: includesValue,
    exact: exact,
    equals: equals,
    between: between
  });

  actions.resetFilters = 'resetFilters';
  actions.setFilter = 'setFilter';
  actions.setAllFilters = 'setAllFilters';
  var useFilters = function useFilters(hooks) {
    hooks.stateReducers.push(reducer$2);
    hooks.useInstance.push(useInstance$2);
  };
  useFilters.pluginName = 'useFilters';

  function reducer$2(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        filters: []
      }, state);
    }

    if (action.type === actions.resetFilters) {
      return _extends({}, state, {
        filters: instance.initialState.filters || []
      });
    }

    if (action.type === actions.setFilter) {
      var columnId = action.columnId,
          filterValue = action.filterValue;
      var allColumns = instance.allColumns,
          userFilterTypes = instance.filterTypes;
      var column = allColumns.find(function (d) {
        return d.id === columnId;
      });

      if (!column) {
        throw new Error("React-Table: Could not find a column with id: " + columnId);
      }

      var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);
      var previousfilter = state.filters.find(function (d) {
        return d.id === columnId;
      });
      var newFilter = functionalUpdate(filterValue, previousfilter && previousfilter.value); //

      if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter, column)) {
        return _extends({}, state, {
          filters: state.filters.filter(function (d) {
            return d.id !== columnId;
          })
        });
      }

      if (previousfilter) {
        return _extends({}, state, {
          filters: state.filters.map(function (d) {
            if (d.id === columnId) {
              return {
                id: columnId,
                value: newFilter
              };
            }

            return d;
          })
        });
      }

      return _extends({}, state, {
        filters: [].concat(state.filters, [{
          id: columnId,
          value: newFilter
        }])
      });
    }

    if (action.type === actions.setAllFilters) {
      var filters = action.filters;
      var _allColumns = instance.allColumns,
          _userFilterTypes = instance.filterTypes;
      return _extends({}, state, {
        // Filter out undefined values
        filters: functionalUpdate(filters, state.filters).filter(function (filter) {
          var column = _allColumns.find(function (d) {
            return d.id === filter.id;
          });

          var filterMethod = getFilterMethod(column.filter, _userFilterTypes || {}, filterTypes);

          if (shouldAutoRemoveFilter(filterMethod.autoRemove, filter.value, column)) {
            return false;
          }

          return true;
        })
      });
    }
  }

  function useInstance$2(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        userFilterTypes = instance.filterTypes,
        manualFilters = instance.manualFilters,
        _instance$defaultCanF = instance.defaultCanFilter,
        defaultCanFilter = _instance$defaultCanF === void 0 ? false : _instance$defaultCanF,
        disableFilters = instance.disableFilters,
        filters = instance.state.filters,
        dispatch = instance.dispatch,
        _instance$autoResetFi = instance.autoResetFilters,
        autoResetFilters = _instance$autoResetFi === void 0 ? true : _instance$autoResetFi;
    var setFilter = React.useCallback(function (columnId, filterValue) {
      dispatch({
        type: actions.setFilter,
        columnId: columnId,
        filterValue: filterValue
      });
    }, [dispatch]);
    var setAllFilters = React.useCallback(function (filters) {
      dispatch({
        type: actions.setAllFilters,
        filters: filters
      });
    }, [dispatch]);
    allColumns.forEach(function (column) {
      var id = column.id,
          accessor = column.accessor,
          columnDefaultCanFilter = column.defaultCanFilter,
          columnDisableFilters = column.disableFilters; // Determine if a column is filterable

      column.canFilter = accessor ? getFirstDefined(columnDisableFilters === true ? false : undefined, disableFilters === true ? false : undefined, true) : getFirstDefined(columnDefaultCanFilter, defaultCanFilter, false); // Provide the column a way of updating the filter value

      column.setFilter = function (val) {
        return setFilter(column.id, val);
      }; // Provide the current filter value to the column for
      // convenience


      var found = filters.find(function (d) {
        return d.id === id;
      });
      column.filterValue = found && found.value;
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualFilters || !filters.length) {
        return [rows, flatRows, rowsById];
      }

      var filteredFlatRows = [];
      var filteredRowsById = {}; // Filters top level and nested rows

      var filterRows = function filterRows(rows, depth) {
        if (depth === void 0) {
          depth = 0;
        }

        var filteredRows = rows;
        filteredRows = filters.reduce(function (filteredSoFar, _ref) {
          var columnId = _ref.id,
              filterValue = _ref.value;
          // Find the filters column
          var column = allColumns.find(function (d) {
            return d.id === columnId;
          });

          if (!column) {
            return filteredSoFar;
          }

          if (depth === 0) {
            column.preFilteredRows = filteredSoFar;
          }

          var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);

          if (!filterMethod) {
            console.warn("Could not find a valid 'column.filter' for column with the ID: " + column.id + ".");
            return filteredSoFar;
          } // Pass the rows, id, filterValue and column to the filterMethod
          // to get the filtered rows back


          column.filteredRows = filterMethod(filteredSoFar, [columnId], filterValue);
          return column.filteredRows;
        }, rows); // Apply the filter to any subRows
        // We technically could do this recursively in the above loop,
        // but that would severely hinder the API for the user, since they
        // would be required to do that recursion in some scenarios

        filteredRows.forEach(function (row) {
          filteredFlatRows.push(row);
          filteredRowsById[row.id] = row;

          if (!row.subRows) {
            return;
          }

          row.subRows = row.subRows && row.subRows.length > 0 ? filterRows(row.subRows, depth + 1) : row.subRows;
        });
        return filteredRows;
      };

      return [filterRows(rows), filteredFlatRows, filteredRowsById];
    }, [manualFilters, filters, rows, flatRows, rowsById, allColumns, userFilterTypes]),
        filteredRows = _React$useMemo[0],
        filteredFlatRows = _React$useMemo[1],
        filteredRowsById = _React$useMemo[2];

    React.useMemo(function () {
      // Now that each filtered column has it's partially filtered rows,
      // lets assign the final filtered rows to all of the other columns
      var nonFilteredColumns = allColumns.filter(function (column) {
        return !filters.find(function (d) {
          return d.id === column.id;
        });
      }); // This essentially enables faceted filter options to be built easily
      // using every column's preFilteredRows value

      nonFilteredColumns.forEach(function (column) {
        column.preFilteredRows = filteredRows;
        column.filteredRows = filteredRows;
      });
    }, [filteredRows, filters, allColumns]);
    var getAutoResetFilters = useGetLatest(autoResetFilters);
    useMountedLayoutEffect(function () {
      if (getAutoResetFilters()) {
        dispatch({
          type: actions.resetFilters
        });
      }
    }, [dispatch, manualFilters ? null : data]);
    Object.assign(instance, {
      preFilteredRows: rows,
      preFilteredFlatRows: flatRows,
      preFilteredRowsById: rowsById,
      filteredRows: filteredRows,
      filteredFlatRows: filteredFlatRows,
      filteredRowsById: filteredRowsById,
      rows: filteredRows,
      flatRows: filteredFlatRows,
      rowsById: filteredRowsById,
      setFilter: setFilter,
      setAllFilters: setAllFilters
    });
  }

  actions.resetGlobalFilter = 'resetGlobalFilter';
  actions.setGlobalFilter = 'setGlobalFilter';
  var useGlobalFilter = function useGlobalFilter(hooks) {
    hooks.stateReducers.push(reducer$3);
    hooks.useInstance.push(useInstance$3);
  };
  useGlobalFilter.pluginName = 'useGlobalFilter';

  function reducer$3(state, action, previousState, instance) {
    if (action.type === actions.resetGlobalFilter) {
      return _extends({}, state, {
        globalFilter: instance.initialState.globalFilter || undefined
      });
    }

    if (action.type === actions.setGlobalFilter) {
      var filterValue = action.filterValue;
      var userFilterTypes = instance.userFilterTypes;
      var filterMethod = getFilterMethod(instance.globalFilter, userFilterTypes || {}, filterTypes);
      var newFilter = functionalUpdate(filterValue, state.globalFilter); //

      if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter)) {
        var globalFilter = state.globalFilter,
            stateWithoutGlobalFilter = _objectWithoutPropertiesLoose(state, ["globalFilter"]);

        return stateWithoutGlobalFilter;
      }

      return _extends({}, state, {
        globalFilter: newFilter
      });
    }
  }

  function useInstance$3(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        userFilterTypes = instance.filterTypes,
        globalFilter = instance.globalFilter,
        manualGlobalFilter = instance.manualGlobalFilter,
        globalFilterValue = instance.state.globalFilter,
        dispatch = instance.dispatch,
        _instance$autoResetGl = instance.autoResetGlobalFilter,
        autoResetGlobalFilter = _instance$autoResetGl === void 0 ? true : _instance$autoResetGl,
        disableGlobalFilter = instance.disableGlobalFilter;
    var setGlobalFilter = React.useCallback(function (filterValue) {
      dispatch({
        type: actions.setGlobalFilter,
        filterValue: filterValue
      });
    }, [dispatch]); // TODO: Create a filter cache for incremental high speed multi-filtering
    // This gets pretty complicated pretty fast, since you have to maintain a
    // cache for each row group (top-level rows, and each row's recursive subrows)
    // This would make multi-filtering a lot faster though. Too far?

    var _React$useMemo = React.useMemo(function () {
      if (manualGlobalFilter || typeof globalFilterValue === 'undefined') {
        return [rows, flatRows, rowsById];
      }

      var filteredFlatRows = [];
      var filteredRowsById = {};
      var filterMethod = getFilterMethod(globalFilter, userFilterTypes || {}, filterTypes);

      if (!filterMethod) {
        console.warn("Could not find a valid 'globalFilter' option.");
        return rows;
      }

      allColumns.forEach(function (column) {
        var columnDisableGlobalFilter = column.disableGlobalFilter;
        column.canFilter = getFirstDefined(columnDisableGlobalFilter === true ? false : undefined, disableGlobalFilter === true ? false : undefined, true);
      });
      var filterableColumns = allColumns.filter(function (c) {
        return c.canFilter === true;
      }); // Filters top level and nested rows

      var filterRows = function filterRows(filteredRows) {
        filteredRows = filterMethod(filteredRows, filterableColumns.map(function (d) {
          return d.id;
        }), globalFilterValue);
        filteredRows.forEach(function (row) {
          filteredFlatRows.push(row);
          filteredRowsById[row.id] = row;
          row.subRows = row.subRows && row.subRows.length ? filterRows(row.subRows) : row.subRows;
        });
        return filteredRows;
      };

      return [filterRows(rows), filteredFlatRows, filteredRowsById];
    }, [manualGlobalFilter, globalFilterValue, globalFilter, userFilterTypes, allColumns, rows, flatRows, rowsById, disableGlobalFilter]),
        globalFilteredRows = _React$useMemo[0],
        globalFilteredFlatRows = _React$useMemo[1],
        globalFilteredRowsById = _React$useMemo[2];

    var getAutoResetGlobalFilter = useGetLatest(autoResetGlobalFilter);
    useMountedLayoutEffect(function () {
      if (getAutoResetGlobalFilter()) {
        dispatch({
          type: actions.resetGlobalFilter
        });
      }
    }, [dispatch, manualGlobalFilter ? null : data]);
    Object.assign(instance, {
      preGlobalFilteredRows: rows,
      preGlobalFilteredFlatRows: flatRows,
      preGlobalFilteredRowsById: rowsById,
      globalFilteredRows: globalFilteredRows,
      globalFilteredFlatRows: globalFilteredFlatRows,
      globalFilteredRowsById: globalFilteredRowsById,
      rows: globalFilteredRows,
      flatRows: globalFilteredFlatRows,
      rowsById: globalFilteredRowsById,
      setGlobalFilter: setGlobalFilter,
      disableGlobalFilter: disableGlobalFilter
    });
  }

  function sum(values, aggregatedValues) {
    // It's faster to just add the aggregations together instead of
    // process leaf nodes individually
    return aggregatedValues.reduce(function (sum, next) {
      return sum + (typeof next === 'number' ? next : 0);
    }, 0);
  }
  function min(values) {
    var min = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        min = Math.min(min, value);
      }
    });
    return min;
  }
  function max(values) {
    var max = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        max = Math.max(max, value);
      }
    });
    return max;
  }
  function minMax(values) {
    var min = values[0] || 0;
    var max = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        min = Math.min(min, value);
        max = Math.max(max, value);
      }
    });
    return min + ".." + max;
  }
  function average(values) {
    return sum(null, values) / values.length;
  }
  function median(values) {
    if (!values.length) {
      return null;
    }

    var mid = Math.floor(values.length / 2);
    var nums = [].concat(values).sort(function (a, b) {
      return a - b;
    });
    return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }
  function unique(values) {
    return Array.from(new Set(values).values());
  }
  function uniqueCount(values) {
    return new Set(values).size;
  }
  function count(values) {
    return values.length;
  }

  var aggregations = /*#__PURE__*/Object.freeze({
    __proto__: null,
    sum: sum,
    min: min,
    max: max,
    minMax: minMax,
    average: average,
    median: median,
    unique: unique,
    uniqueCount: uniqueCount,
    count: count
  });

  var emptyArray = [];
  var emptyObject = {}; // Actions

  actions.resetGroupBy = 'resetGroupBy';
  actions.setGroupBy = 'setGroupBy';
  actions.toggleGroupBy = 'toggleGroupBy';
  var useGroupBy = function useGroupBy(hooks) {
    hooks.getGroupByToggleProps = [defaultGetGroupByToggleProps];
    hooks.stateReducers.push(reducer$4);
    hooks.visibleColumnsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.groupBy]);
    });
    hooks.visibleColumns.push(visibleColumns);
    hooks.useInstance.push(useInstance$4);
    hooks.prepareRow.push(prepareRow$1);
  };
  useGroupBy.pluginName = 'useGroupBy';

  var defaultGetGroupByToggleProps = function defaultGetGroupByToggleProps(props, _ref2) {
    var header = _ref2.header;
    return [props, {
      onClick: header.canGroupBy ? function (e) {
        e.persist();
        header.toggleGroupBy();
      } : undefined,
      style: {
        cursor: header.canGroupBy ? 'pointer' : undefined
      },
      title: 'Toggle GroupBy'
    }];
  }; // Reducer


  function reducer$4(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        groupBy: []
      }, state);
    }

    if (action.type === actions.resetGroupBy) {
      return _extends({}, state, {
        groupBy: instance.initialState.groupBy || []
      });
    }

    if (action.type === actions.setGroupBy) {
      var value = action.value;
      return _extends({}, state, {
        groupBy: value
      });
    }

    if (action.type === actions.toggleGroupBy) {
      var columnId = action.columnId,
          setGroupBy = action.value;
      var resolvedGroupBy = typeof setGroupBy !== 'undefined' ? setGroupBy : !state.groupBy.includes(columnId);

      if (resolvedGroupBy) {
        return _extends({}, state, {
          groupBy: [].concat(state.groupBy, [columnId])
        });
      }

      return _extends({}, state, {
        groupBy: state.groupBy.filter(function (d) {
          return d !== columnId;
        })
      });
    }
  }

  function visibleColumns(columns, _ref3) {
    var groupBy = _ref3.instance.state.groupBy;
    // Sort grouped columns to the start of the column list
    // before the headers are built
    var groupByColumns = groupBy.map(function (g) {
      return columns.find(function (col) {
        return col.id === g;
      });
    }).filter(Boolean);
    var nonGroupByColumns = columns.filter(function (col) {
      return !groupBy.includes(col.id);
    });
    columns = [].concat(groupByColumns, nonGroupByColumns);
    columns.forEach(function (column) {
      column.isGrouped = groupBy.includes(column.id);
      column.groupedIndex = groupBy.indexOf(column.id);
    });
    return columns;
  }

  var defaultUserAggregations = {};

  function useInstance$4(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        flatHeaders = instance.flatHeaders,
        _instance$groupByFn = instance.groupByFn,
        groupByFn = _instance$groupByFn === void 0 ? defaultGroupByFn : _instance$groupByFn,
        manualGroupBy = instance.manualGroupBy,
        _instance$aggregation = instance.aggregations,
        userAggregations = _instance$aggregation === void 0 ? defaultUserAggregations : _instance$aggregation,
        plugins = instance.plugins,
        groupBy = instance.state.groupBy,
        dispatch = instance.dispatch,
        _instance$autoResetGr = instance.autoResetGroupBy,
        autoResetGroupBy = _instance$autoResetGr === void 0 ? true : _instance$autoResetGr,
        disableGroupBy = instance.disableGroupBy,
        defaultCanGroupBy = instance.defaultCanGroupBy,
        getHooks = instance.getHooks;
    ensurePluginOrder(plugins, ['useColumnOrder', 'useFilters'], 'useGroupBy');
    var getInstance = useGetLatest(instance);
    allColumns.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnGroupBy = column.defaultGroupBy,
          columnDisableGroupBy = column.disableGroupBy;
      column.canGroupBy = accessor ? getFirstDefined(column.canGroupBy, columnDisableGroupBy === true ? false : undefined, disableGroupBy === true ? false : undefined, true) : getFirstDefined(column.canGroupBy, defaultColumnGroupBy, defaultCanGroupBy, false);

      if (column.canGroupBy) {
        column.toggleGroupBy = function () {
          return instance.toggleGroupBy(column.id);
        };
      }

      column.Aggregated = column.Aggregated || column.Cell;
    });
    var toggleGroupBy = React.useCallback(function (columnId, value) {
      dispatch({
        type: actions.toggleGroupBy,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var setGroupBy = React.useCallback(function (value) {
      dispatch({
        type: actions.setGroupBy,
        value: value
      });
    }, [dispatch]);
    flatHeaders.forEach(function (header) {
      header.getGroupByToggleProps = makePropGetter(getHooks().getGroupByToggleProps, {
        instance: getInstance(),
        header: header
      });
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualGroupBy || !groupBy.length) {
        return [rows, flatRows, rowsById, emptyArray, emptyObject, flatRows, rowsById];
      } // Ensure that the list of filtered columns exist


      var existingGroupBy = groupBy.filter(function (g) {
        return allColumns.find(function (col) {
          return col.id === g;
        });
      }); // Find the columns that can or are aggregating
      // Uses each column to aggregate rows into a single value

      var aggregateRowsToValues = function aggregateRowsToValues(leafRows, groupedRows, depth) {
        var values = {};
        allColumns.forEach(function (column) {
          // Don't aggregate columns that are in the groupBy
          if (existingGroupBy.includes(column.id)) {
            values[column.id] = groupedRows[0] ? groupedRows[0].values[column.id] : null;
            return;
          } // Aggregate the values


          var aggregateFn = typeof column.aggregate === 'function' ? column.aggregate : userAggregations[column.aggregate] || aggregations[column.aggregate];

          if (aggregateFn) {
            // Get the columnValues to aggregate
            var groupedValues = groupedRows.map(function (row) {
              return row.values[column.id];
            }); // Get the columnValues to aggregate

            var leafValues = leafRows.map(function (row) {
              var columnValue = row.values[column.id];

              if (!depth && column.aggregateValue) {
                var aggregateValueFn = typeof column.aggregateValue === 'function' ? column.aggregateValue : userAggregations[column.aggregateValue] || aggregations[column.aggregateValue];

                if (!aggregateValueFn) {
                  console.info({
                    column: column
                  });
                  throw new Error("React Table: Invalid column.aggregateValue option for column listed above");
                }

                columnValue = aggregateValueFn(columnValue, row, column);
              }

              return columnValue;
            });
            values[column.id] = aggregateFn(leafValues, groupedValues);
          } else if (column.aggregate) {
            console.info({
              column: column
            });
            throw new Error("React Table: Invalid column.aggregate option for column listed above");
          } else {
            values[column.id] = null;
          }
        });
        return values;
      };

      var groupedFlatRows = [];
      var groupedRowsById = {};
      var onlyGroupedFlatRows = [];
      var onlyGroupedRowsById = {};
      var nonGroupedFlatRows = [];
      var nonGroupedRowsById = {}; // Recursively group the data

      var groupUpRecursively = function groupUpRecursively(rows, depth, parentId) {
        if (depth === void 0) {
          depth = 0;
        }

        // This is the last level, just return the rows
        if (depth === existingGroupBy.length) {
          return rows;
        }

        var columnId = existingGroupBy[depth]; // Group the rows together for this level

        var rowGroupsMap = groupByFn(rows, columnId); // Peform aggregations for each group

        var aggregatedGroupedRows = Object.entries(rowGroupsMap).map(function (_ref4, index) {
          var groupByVal = _ref4[0],
              groupedRows = _ref4[1];
          var id = columnId + ":" + groupByVal;
          id = parentId ? parentId + ">" + id : id; // First, Recurse to group sub rows before aggregation

          var subRows = groupUpRecursively(groupedRows, depth + 1, id); // Flatten the leaf rows of the rows in this group

          var leafRows = depth ? flattenBy(groupedRows, 'leafRows') : groupedRows;
          var values = aggregateRowsToValues(leafRows, groupedRows, depth);
          var row = {
            id: id,
            isGrouped: true,
            groupByID: columnId,
            groupByVal: groupByVal,
            values: values,
            subRows: subRows,
            leafRows: leafRows,
            depth: depth,
            index: index
          };
          subRows.forEach(function (subRow) {
            groupedFlatRows.push(subRow);
            groupedRowsById[subRow.id] = subRow;

            if (subRow.isGrouped) {
              onlyGroupedFlatRows.push(subRow);
              onlyGroupedRowsById[subRow.id] = subRow;
            } else {
              nonGroupedFlatRows.push(subRow);
              nonGroupedRowsById[subRow.id] = subRow;
            }
          });
          return row;
        });
        return aggregatedGroupedRows;
      };

      var groupedRows = groupUpRecursively(rows);
      groupedRows.forEach(function (subRow) {
        groupedFlatRows.push(subRow);
        groupedRowsById[subRow.id] = subRow;

        if (subRow.isGrouped) {
          onlyGroupedFlatRows.push(subRow);
          onlyGroupedRowsById[subRow.id] = subRow;
        } else {
          nonGroupedFlatRows.push(subRow);
          nonGroupedRowsById[subRow.id] = subRow;
        }
      }); // Assign the new data

      return [groupedRows, groupedFlatRows, groupedRowsById, onlyGroupedFlatRows, onlyGroupedRowsById, nonGroupedFlatRows, nonGroupedRowsById];
    }, [manualGroupBy, groupBy, rows, flatRows, rowsById, allColumns, userAggregations, groupByFn]),
        groupedRows = _React$useMemo[0],
        groupedFlatRows = _React$useMemo[1],
        groupedRowsById = _React$useMemo[2],
        onlyGroupedFlatRows = _React$useMemo[3],
        onlyGroupedRowsById = _React$useMemo[4],
        nonGroupedFlatRows = _React$useMemo[5],
        nonGroupedRowsById = _React$useMemo[6];

    var getAutoResetGroupBy = useGetLatest(autoResetGroupBy);
    useMountedLayoutEffect(function () {
      if (getAutoResetGroupBy()) {
        dispatch({
          type: actions.resetGroupBy
        });
      }
    }, [dispatch, manualGroupBy ? null : data]);
    Object.assign(instance, {
      preGroupedRows: rows,
      preGroupedFlatRow: flatRows,
      preGroupedRowsById: rowsById,
      groupedRows: groupedRows,
      groupedFlatRows: groupedFlatRows,
      groupedRowsById: groupedRowsById,
      onlyGroupedFlatRows: onlyGroupedFlatRows,
      onlyGroupedRowsById: onlyGroupedRowsById,
      nonGroupedFlatRows: nonGroupedFlatRows,
      nonGroupedRowsById: nonGroupedRowsById,
      rows: groupedRows,
      flatRows: groupedFlatRows,
      rowsById: groupedRowsById,
      toggleGroupBy: toggleGroupBy,
      setGroupBy: setGroupBy
    });
  }

  function prepareRow$1(row) {
    row.allCells.forEach(function (cell) {
      var _row$subRows;

      // Grouped cells are in the groupBy and the pivot cell for the row
      cell.isGrouped = cell.column.isGrouped && cell.column.id === row.groupByID; // Placeholder cells are any columns in the groupBy that are not grouped

      cell.isPlaceholder = !cell.isGrouped && cell.column.isGrouped; // Aggregated cells are not grouped, not repeated, but still have subRows

      cell.isAggregated = !cell.isGrouped && !cell.isPlaceholder && ((_row$subRows = row.subRows) == null ? void 0 : _row$subRows.length);
    });
  }

  function defaultGroupByFn(rows, columnId) {
    return rows.reduce(function (prev, row, i) {
      // TODO: Might want to implement a key serializer here so
      // irregular column values can still be grouped if needed?
      var resKey = "" + row.values[columnId];
      prev[resKey] = Array.isArray(prev[resKey]) ? prev[resKey] : [];
      prev[resKey].push(row);
      return prev;
    }, {});
  }

  var reSplitAlphaNumeric = /([0-9]+)/gm; // Mixed sorting is slow, but very inclusive of many edge cases.
  // It handles numbers, mixed alphanumeric combinations, and even
  // null, undefined, and Infinity

  var alphanumeric = function alphanumeric(rowA, rowB, columnId) {
    var a = getRowValueByColumnID(rowA, columnId);
    var b = getRowValueByColumnID(rowB, columnId); // Force to strings (or "" for unsupported types)

    a = toString(a);
    b = toString(b); // Split on number groups, but keep the delimiter
    // Then remove falsey split values

    a = a.split(reSplitAlphaNumeric).filter(Boolean);
    b = b.split(reSplitAlphaNumeric).filter(Boolean); // While

    while (a.length && b.length) {
      var aa = a.shift();
      var bb = b.shift();
      var an = parseInt(aa, 10);
      var bn = parseInt(bb, 10);
      var combo = [an, bn].sort(); // Both are string

      if (isNaN(combo[0])) {
        if (aa > bb) {
          return 1;
        }

        if (bb > aa) {
          return -1;
        }

        continue;
      } // One is a string, one is a number


      if (isNaN(combo[1])) {
        return isNaN(an) ? -1 : 1;
      } // Both are numbers


      if (an > bn) {
        return 1;
      }

      if (bn > an) {
        return -1;
      }
    }

    return a.length - b.length;
  };
  function datetime(rowA, rowB, columnId) {
    var a = getRowValueByColumnID(rowA, columnId);
    var b = getRowValueByColumnID(rowB, columnId);
    a = a.getTime();
    b = b.getTime();
    return compareBasic(a, b);
  }
  function basic(rowA, rowB, columnId) {
    var a = getRowValueByColumnID(rowA, columnId);
    var b = getRowValueByColumnID(rowB, columnId);
    return compareBasic(a, b);
  } // Utils

  function compareBasic(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  }

  function getRowValueByColumnID(row, columnId) {
    return row.values[columnId];
  }

  function toString(a) {
    if (typeof a === 'number') {
      if (isNaN(a) || a === Infinity || a === -Infinity) {
        return '';
      }

      return String(a);
    }

    if (typeof a === 'string') {
      return a;
    }

    return '';
  }

  var sortTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    alphanumeric: alphanumeric,
    datetime: datetime,
    basic: basic
  });

  actions.resetSortBy = 'resetSortBy';
  actions.setSortBy = 'setSortBy';
  actions.toggleSortBy = 'toggleSortBy';
  actions.clearSortBy = 'clearSortBy';
  defaultColumn.sortType = 'alphanumeric';
  defaultColumn.sortDescFirst = false;
  var useSortBy = function useSortBy(hooks) {
    hooks.getSortByToggleProps = [defaultGetSortByToggleProps];
    hooks.stateReducers.push(reducer$5);
    hooks.useInstance.push(useInstance$5);
  };
  useSortBy.pluginName = 'useSortBy';

  var defaultGetSortByToggleProps = function defaultGetSortByToggleProps(props, _ref) {
    var instance = _ref.instance,
        column = _ref.column;
    var _instance$isMultiSort = instance.isMultiSortEvent,
        isMultiSortEvent = _instance$isMultiSort === void 0 ? function (e) {
      return e.shiftKey;
    } : _instance$isMultiSort;
    return [props, {
      onClick: column.canSort ? function (e) {
        e.persist();
        column.toggleSortBy(undefined, !instance.disableMultiSort && isMultiSortEvent(e));
      } : undefined,
      style: {
        cursor: column.canSort ? 'pointer' : undefined
      },
      title: column.canSort ? 'Toggle SortBy' : undefined
    }];
  }; // Reducer


  function reducer$5(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        sortBy: []
      }, state);
    }

    if (action.type === actions.resetSortBy) {
      return _extends({}, state, {
        sortBy: instance.initialState.sortBy || []
      });
    }

    if (action.type === actions.clearSortBy) {
      var sortBy = state.sortBy;
      var newSortBy = sortBy.filter(function (d) {
        return d.id !== action.columnId;
      });
      return _extends({}, state, {
        sortBy: newSortBy
      });
    }

    if (action.type === actions.setSortBy) {
      var _sortBy = action.sortBy;
      return _extends({}, state, {
        sortBy: _sortBy
      });
    }

    if (action.type === actions.toggleSortBy) {
      var columnId = action.columnId,
          desc = action.desc,
          multi = action.multi;
      var allColumns = instance.allColumns,
          disableMultiSort = instance.disableMultiSort,
          disableSortRemove = instance.disableSortRemove,
          disableMultiRemove = instance.disableMultiRemove,
          _instance$maxMultiSor = instance.maxMultiSortColCount,
          maxMultiSortColCount = _instance$maxMultiSor === void 0 ? Number.MAX_SAFE_INTEGER : _instance$maxMultiSor;
      var _sortBy2 = state.sortBy; // Find the column for this columnId

      var column = allColumns.find(function (d) {
        return d.id === columnId;
      });
      var sortDescFirst = column.sortDescFirst; // Find any existing sortBy for this column

      var existingSortBy = _sortBy2.find(function (d) {
        return d.id === columnId;
      });

      var existingIndex = _sortBy2.findIndex(function (d) {
        return d.id === columnId;
      });

      var hasDescDefined = typeof desc !== 'undefined' && desc !== null;
      var _newSortBy = []; // What should we do with this sort action?

      var sortAction;

      if (!disableMultiSort && multi) {
        if (existingSortBy) {
          sortAction = 'toggle';
        } else {
          sortAction = 'add';
        }
      } else {
        // Normal mode
        if (existingIndex !== _sortBy2.length - 1 || _sortBy2.length !== 1) {
          sortAction = 'replace';
        } else if (existingSortBy) {
          sortAction = 'toggle';
        } else {
          sortAction = 'replace';
        }
      } // Handle toggle states that will remove the sortBy


      if (sortAction === 'toggle' && // Must be toggling
      !disableSortRemove && // If disableSortRemove, disable in general
      !hasDescDefined && ( // Must not be setting desc
      multi ? !disableMultiRemove : true) && ( // If multi, don't allow if disableMultiRemove
      existingSortBy && // Finally, detect if it should indeed be removed
      existingSortBy.desc && !sortDescFirst || !existingSortBy.desc && sortDescFirst)) {
        sortAction = 'remove';
      }

      if (sortAction === 'replace') {
        _newSortBy = [{
          id: columnId,
          desc: hasDescDefined ? desc : sortDescFirst
        }];
      } else if (sortAction === 'add') {
        _newSortBy = [].concat(_sortBy2, [{
          id: columnId,
          desc: hasDescDefined ? desc : sortDescFirst
        }]); // Take latest n columns

        _newSortBy.splice(0, _newSortBy.length - maxMultiSortColCount);
      } else if (sortAction === 'toggle') {
        // This flips (or sets) the
        _newSortBy = _sortBy2.map(function (d) {
          if (d.id === columnId) {
            return _extends({}, d, {
              desc: hasDescDefined ? desc : !existingSortBy.desc
            });
          }

          return d;
        });
      } else if (sortAction === 'remove') {
        _newSortBy = _sortBy2.filter(function (d) {
          return d.id !== columnId;
        });
      }

      return _extends({}, state, {
        sortBy: _newSortBy
      });
    }
  }

  function useInstance$5(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        allColumns = instance.allColumns,
        _instance$orderByFn = instance.orderByFn,
        orderByFn = _instance$orderByFn === void 0 ? defaultOrderByFn : _instance$orderByFn,
        userSortTypes = instance.sortTypes,
        manualSortBy = instance.manualSortBy,
        defaultCanSort = instance.defaultCanSort,
        disableSortBy = instance.disableSortBy,
        flatHeaders = instance.flatHeaders,
        sortBy = instance.state.sortBy,
        dispatch = instance.dispatch,
        plugins = instance.plugins,
        getHooks = instance.getHooks,
        _instance$autoResetSo = instance.autoResetSortBy,
        autoResetSortBy = _instance$autoResetSo === void 0 ? true : _instance$autoResetSo;
    ensurePluginOrder(plugins, ['useFilters', 'useGlobalFilter', 'useGroupBy', 'usePivotColumns'], 'useSortBy');
    var setSortBy = React.useCallback(function (sortBy) {
      dispatch({
        type: actions.setSortBy,
        sortBy: sortBy
      });
    }, [dispatch]); // Updates sorting based on a columnId, desc flag and multi flag

    var toggleSortBy = React.useCallback(function (columnId, desc, multi) {
      dispatch({
        type: actions.toggleSortBy,
        columnId: columnId,
        desc: desc,
        multi: multi
      });
    }, [dispatch]); // use reference to avoid memory leak in #1608

    var getInstance = useGetLatest(instance); // Add the getSortByToggleProps method to columns and headers

    flatHeaders.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnCanSort = column.canSort,
          columnDisableSortBy = column.disableSortBy,
          id = column.id;
      var canSort = accessor ? getFirstDefined(columnDisableSortBy === true ? false : undefined, disableSortBy === true ? false : undefined, true) : getFirstDefined(defaultCanSort, defaultColumnCanSort, false);
      column.canSort = canSort;

      if (column.canSort) {
        column.toggleSortBy = function (desc, multi) {
          return toggleSortBy(column.id, desc, multi);
        };

        column.clearSortBy = function () {
          dispatch({
            type: actions.clearSortBy,
            columnId: column.id
          });
        };
      }

      column.getSortByToggleProps = makePropGetter(getHooks().getSortByToggleProps, {
        instance: getInstance(),
        column: column
      });
      var columnSort = sortBy.find(function (d) {
        return d.id === id;
      });
      column.isSorted = !!columnSort;
      column.sortedIndex = sortBy.findIndex(function (d) {
        return d.id === id;
      });
      column.isSortedDesc = column.isSorted ? columnSort.desc : undefined;
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualSortBy || !sortBy.length) {
        return [rows, flatRows];
      }

      var sortedFlatRows = []; // Filter out sortBys that correspond to non existing columns

      var availableSortBy = sortBy.filter(function (sort) {
        return allColumns.find(function (col) {
          return col.id === sort.id;
        });
      });

      var sortData = function sortData(rows) {
        // Use the orderByFn to compose multiple sortBy's together.
        // This will also perform a stable sorting using the row index
        // if needed.
        var sortedData = orderByFn(rows, availableSortBy.map(function (sort) {
          // Support custom sorting methods for each column
          var column = allColumns.find(function (d) {
            return d.id === sort.id;
          });

          if (!column) {
            throw new Error("React-Table: Could not find a column with id: " + sort.id + " while sorting");
          }

          var sortType = column.sortType; // Look up sortBy functions in this order:
          // column function
          // column string lookup on user sortType
          // column string lookup on built-in sortType
          // default function
          // default string lookup on user sortType
          // default string lookup on built-in sortType

          var sortMethod = isFunction(sortType) || (userSortTypes || {})[sortType] || sortTypes[sortType];

          if (!sortMethod) {
            throw new Error("React-Table: Could not find a valid sortType of '" + sortType + "' for column '" + sort.id + "'.");
          } // Return the correct sortFn.
          // This function should always return in ascending order


          return function (a, b) {
            return sortMethod(a, b, sort.id, sort.desc);
          };
        }), // Map the directions
        availableSortBy.map(function (sort) {
          // Detect and use the sortInverted option
          var column = allColumns.find(function (d) {
            return d.id === sort.id;
          });

          if (column && column.sortInverted) {
            return sort.desc;
          }

          return !sort.desc;
        })); // If there are sub-rows, sort them

        sortedData.forEach(function (row) {
          sortedFlatRows.push(row);

          if (!row.subRows || row.subRows.length === 0) {
            return;
          }

          row.subRows = sortData(row.subRows);
        });
        return sortedData;
      };

      return [sortData(rows), sortedFlatRows];
    }, [manualSortBy, sortBy, rows, flatRows, allColumns, orderByFn, userSortTypes]),
        sortedRows = _React$useMemo[0],
        sortedFlatRows = _React$useMemo[1];

    var getAutoResetSortBy = useGetLatest(autoResetSortBy);
    useMountedLayoutEffect(function () {
      if (getAutoResetSortBy()) {
        dispatch({
          type: actions.resetSortBy
        });
      }
    }, [manualSortBy ? null : data]);
    Object.assign(instance, {
      preSortedRows: rows,
      preSortedFlatRows: flatRows,
      sortedRows: sortedRows,
      sortedFlatRows: sortedFlatRows,
      rows: sortedRows,
      flatRows: sortedFlatRows,
      setSortBy: setSortBy,
      toggleSortBy: toggleSortBy
    });
  }

  function defaultOrderByFn(arr, funcs, dirs) {
    return [].concat(arr).sort(function (rowA, rowB) {
      for (var i = 0; i < funcs.length; i += 1) {
        var sortFn = funcs[i];
        var desc = dirs[i] === false || dirs[i] === 'desc';
        var sortInt = sortFn(rowA, rowB);

        if (sortInt !== 0) {
          return desc ? -sortInt : sortInt;
        }
      }

      return dirs[0] ? rowA.index - rowB.index : rowB.index - rowA.index;
    });
  }

  var pluginName = 'usePagination'; // Actions

  actions.resetPage = 'resetPage';
  actions.gotoPage = 'gotoPage';
  actions.setPageSize = 'setPageSize';
  var usePagination = function usePagination(hooks) {
    hooks.stateReducers.push(reducer$6);
    hooks.useInstance.push(useInstance$6);
  };
  usePagination.pluginName = pluginName;

  function reducer$6(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        pageSize: 10,
        pageIndex: 0
      }, state);
    }

    if (action.type === actions.resetPage) {
      return _extends({}, state, {
        pageIndex: instance.initialState.pageIndex || 0
      });
    }

    if (action.type === actions.gotoPage) {
      var pageCount = instance.pageCount,
          page = instance.page;
      var newPageIndex = functionalUpdate(action.pageIndex, state.pageIndex);
      var canNavigate = false;

      if (newPageIndex > state.pageIndex) {
        // next page
        canNavigate = pageCount === -1 ? page.length >= state.pageSize : newPageIndex < pageCount;
      } else if (newPageIndex < state.pageIndex) {
        // prev page
        canNavigate = newPageIndex > -1;
      }

      if (!canNavigate) {
        return state;
      }

      return _extends({}, state, {
        pageIndex: newPageIndex
      });
    }

    if (action.type === actions.setPageSize) {
      var pageSize = action.pageSize;
      var topRowIndex = state.pageSize * state.pageIndex;
      var pageIndex = Math.floor(topRowIndex / pageSize);
      return _extends({}, state, {
        pageIndex: pageIndex,
        pageSize: pageSize
      });
    }
  }

  function useInstance$6(instance) {
    var rows = instance.rows,
        _instance$autoResetPa = instance.autoResetPage,
        autoResetPage = _instance$autoResetPa === void 0 ? true : _instance$autoResetPa,
        _instance$manualExpan = instance.manualExpandedKey,
        manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
        plugins = instance.plugins,
        userPageCount = instance.pageCount,
        _instance$paginateExp = instance.paginateExpandedRows,
        paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
        _instance$expandSubRo = instance.expandSubRows,
        expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
        _instance$state = instance.state,
        pageSize = _instance$state.pageSize,
        pageIndex = _instance$state.pageIndex,
        expanded = _instance$state.expanded,
        globalFilter = _instance$state.globalFilter,
        filters = _instance$state.filters,
        groupBy = _instance$state.groupBy,
        sortBy = _instance$state.sortBy,
        dispatch = instance.dispatch,
        data = instance.data,
        manualPagination = instance.manualPagination;
    ensurePluginOrder(plugins, ['useGlobalFilter', 'useFilters', 'useGroupBy', 'useSortBy', 'useExpanded'], 'usePagination');
    var getAutoResetPage = useGetLatest(autoResetPage);
    useMountedLayoutEffect(function () {
      if (getAutoResetPage()) {
        dispatch({
          type: actions.resetPage
        });
      }
    }, [dispatch, manualPagination ? null : data, globalFilter, filters, groupBy, sortBy]);
    var pageCount = manualPagination ? userPageCount : Math.ceil(rows.length / pageSize);
    var pageOptions = React.useMemo(function () {
      return pageCount > 0 ? [].concat(new Array(pageCount)).fill(null).map(function (d, i) {
        return i;
      }) : [];
    }, [pageCount]);
    var page = React.useMemo(function () {
      var page;

      if (manualPagination) {
        page = rows;
      } else {
        var pageStart = pageSize * pageIndex;
        var pageEnd = pageStart + pageSize;
        page = rows.slice(pageStart, pageEnd);
      }

      if (paginateExpandedRows) {
        return page;
      }

      return expandRows(page, {
        manualExpandedKey: manualExpandedKey,
        expanded: expanded,
        expandSubRows: expandSubRows
      });
    }, [expandSubRows, expanded, manualExpandedKey, manualPagination, pageIndex, pageSize, paginateExpandedRows, rows]);
    var canPreviousPage = pageIndex > 0;
    var canNextPage = pageCount === -1 ? page.length >= pageSize : pageIndex < pageCount - 1;
    var gotoPage = React.useCallback(function (pageIndex) {
      dispatch({
        type: actions.gotoPage,
        pageIndex: pageIndex
      });
    }, [dispatch]);
    var previousPage = React.useCallback(function () {
      return gotoPage(function (old) {
        return old - 1;
      });
    }, [gotoPage]);
    var nextPage = React.useCallback(function () {
      return gotoPage(function (old) {
        return old + 1;
      });
    }, [gotoPage]);
    var setPageSize = React.useCallback(function (pageSize) {
      dispatch({
        type: actions.setPageSize,
        pageSize: pageSize
      });
    }, [dispatch]);
    Object.assign(instance, {
      pageOptions: pageOptions,
      pageCount: pageCount,
      page: page,
      canPreviousPage: canPreviousPage,
      canNextPage: canNextPage,
      gotoPage: gotoPage,
      previousPage: previousPage,
      nextPage: nextPage,
      setPageSize: setPageSize
    });
  }

  actions.resetPivot = 'resetPivot';
  actions.togglePivot = 'togglePivot';
  var _UNSTABLE_usePivotColumns = function _UNSTABLE_usePivotColumns(hooks) {
    hooks.getPivotToggleProps = [defaultGetPivotToggleProps];
    hooks.stateReducers.push(reducer$7);
    hooks.useInstanceAfterData.push(useInstanceAfterData);
    hooks.allColumns.push(allColumns);
    hooks.accessValue.push(accessValue);
    hooks.materializedColumns.push(materializedColumns);
    hooks.materializedColumnsDeps.push(materializedColumnsDeps);
    hooks.visibleColumns.push(visibleColumns$1);
    hooks.visibleColumnsDeps.push(visibleColumnsDeps);
    hooks.useInstance.push(useInstance$7);
    hooks.prepareRow.push(prepareRow$2);
  };
  _UNSTABLE_usePivotColumns.pluginName = 'usePivotColumns';
  var defaultPivotColumns = [];

  var defaultGetPivotToggleProps = function defaultGetPivotToggleProps(props, _ref) {
    var header = _ref.header;
    return [props, {
      onClick: header.canPivot ? function (e) {
        e.persist();
        header.togglePivot();
      } : undefined,
      style: {
        cursor: header.canPivot ? 'pointer' : undefined
      },
      title: 'Toggle Pivot'
    }];
  }; // Reducer


  function reducer$7(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        pivotColumns: defaultPivotColumns
      }, state);
    }

    if (action.type === actions.resetPivot) {
      return _extends({}, state, {
        pivotColumns: instance.initialState.pivotColumns || defaultPivotColumns
      });
    }

    if (action.type === actions.togglePivot) {
      var columnId = action.columnId,
          setPivot = action.value;
      var resolvedPivot = typeof setPivot !== 'undefined' ? setPivot : !state.pivotColumns.includes(columnId);

      if (resolvedPivot) {
        return _extends({}, state, {
          pivotColumns: [].concat(state.pivotColumns, [columnId])
        });
      }

      return _extends({}, state, {
        pivotColumns: state.pivotColumns.filter(function (d) {
          return d !== columnId;
        })
      });
    }
  }

  function useInstanceAfterData(instance) {
    instance.allColumns.forEach(function (column) {
      column.isPivotSource = instance.state.pivotColumns.includes(column.id);
    });
  }

  function allColumns(columns, _ref2) {
    var instance = _ref2.instance;
    columns.forEach(function (column) {
      column.isPivotSource = instance.state.pivotColumns.includes(column.id);
      column.uniqueValues = new Set();
    });
    return columns;
  }

  function accessValue(value, _ref3) {
    var column = _ref3.column;

    if (column.uniqueValues && typeof value !== 'undefined') {
      column.uniqueValues.add(value);
    }

    return value;
  }

  function materializedColumns(materialized, _ref4) {
    var instance = _ref4.instance;
    var allColumns = instance.allColumns,
        state = instance.state;

    if (!state.pivotColumns.length || !state.groupBy || !state.groupBy.length) {
      return materialized;
    }

    var pivotColumns = state.pivotColumns.map(function (id) {
      return allColumns.find(function (d) {
        return d.id === id;
      });
    }).filter(Boolean);
    var sourceColumns = allColumns.filter(function (d) {
      return !d.isPivotSource && !state.groupBy.includes(d.id) && !state.pivotColumns.includes(d.id);
    });

    var buildPivotColumns = function buildPivotColumns(depth, parent, pivotFilters) {
      if (depth === void 0) {
        depth = 0;
      }

      if (pivotFilters === void 0) {
        pivotFilters = [];
      }

      var pivotColumn = pivotColumns[depth];

      if (!pivotColumn) {
        return sourceColumns.map(function (sourceColumn) {
          // TODO: We could offer support here for renesting pivoted
          // columns inside copies of their header groups. For now,
          // that seems like it would be (1) overkill on nesting, considering
          // you already get nesting for every pivot level and (2)
          // really hard. :)
          return _extends({}, sourceColumn, {
            canPivot: false,
            isPivoted: true,
            parent: parent,
            depth: depth,
            id: "" + (parent ? parent.id + "." + sourceColumn.id : sourceColumn.id),
            accessor: function accessor(originalRow, i, row) {
              if (pivotFilters.every(function (filter) {
                return filter(row);
              })) {
                return row.values[sourceColumn.id];
              }
            }
          });
        });
      }

      var uniqueValues = Array.from(pivotColumn.uniqueValues).sort();
      return uniqueValues.map(function (uniqueValue) {
        var columnGroup = _extends({}, pivotColumn, {
          Header: pivotColumn.PivotHeader || typeof pivotColumn.header === 'string' ? pivotColumn.Header + ": " + uniqueValue : uniqueValue,
          isPivotGroup: true,
          parent: parent,
          depth: depth,
          id: parent ? parent.id + "." + pivotColumn.id + "." + uniqueValue : pivotColumn.id + "." + uniqueValue,
          pivotValue: uniqueValue
        });

        columnGroup.columns = buildPivotColumns(depth + 1, columnGroup, [].concat(pivotFilters, [function (row) {
          return row.values[pivotColumn.id] === uniqueValue;
        }]));
        return columnGroup;
      });
    };

    var newMaterialized = flattenColumns(buildPivotColumns());
    return [].concat(materialized, newMaterialized);
  }

  function materializedColumnsDeps(deps, _ref5) {
    var _ref5$instance$state = _ref5.instance.state,
        pivotColumns = _ref5$instance$state.pivotColumns,
        groupBy = _ref5$instance$state.groupBy;
    return [].concat(deps, [pivotColumns, groupBy]);
  }

  function visibleColumns$1(visibleColumns, _ref6) {
    var state = _ref6.instance.state;
    visibleColumns = visibleColumns.filter(function (d) {
      return !d.isPivotSource;
    });

    if (state.pivotColumns.length && state.groupBy && state.groupBy.length) {
      visibleColumns = visibleColumns.filter(function (column) {
        return column.isGrouped || column.isPivoted;
      });
    }

    return visibleColumns;
  }

  function visibleColumnsDeps(deps, _ref7) {
    var instance = _ref7.instance;
    return [].concat(deps, [instance.state.pivotColumns, instance.state.groupBy]);
  }

  function useInstance$7(instance) {
    var columns = instance.columns,
        allColumns = instance.allColumns,
        flatHeaders = instance.flatHeaders,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        dispatch = instance.dispatch,
        _instance$autoResetPi = instance.autoResetPivot,
        autoResetPivot = _instance$autoResetPi === void 0 ? true : _instance$autoResetPi,
        manaulPivot = instance.manaulPivot,
        disablePivot = instance.disablePivot,
        defaultCanPivot = instance.defaultCanPivot;
    ensurePluginOrder(plugins, ['useGroupBy'], 'usePivotColumns');
    var getInstance = useGetLatest(instance);
    allColumns.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnPivot = column.defaultPivot,
          columnDisablePivot = column.disablePivot;
      column.canPivot = accessor ? getFirstDefined(column.canPivot, columnDisablePivot === true ? false : undefined, disablePivot === true ? false : undefined, true) : getFirstDefined(column.canPivot, defaultColumnPivot, defaultCanPivot, false);

      if (column.canPivot) {
        column.togglePivot = function () {
          return instance.togglePivot(column.id);
        };
      }

      column.Aggregated = column.Aggregated || column.Cell;
    });

    var togglePivot = function togglePivot(columnId, value) {
      dispatch({
        type: actions.togglePivot,
        columnId: columnId,
        value: value
      });
    };

    flatHeaders.forEach(function (header) {
      header.getPivotToggleProps = makePropGetter(getHooks().getPivotToggleProps, {
        instance: getInstance(),
        header: header
      });
    });
    var getAutoResetPivot = useGetLatest(autoResetPivot);
    useMountedLayoutEffect(function () {
      if (getAutoResetPivot()) {
        dispatch({
          type: actions.resetPivot
        });
      }
    }, [dispatch, manaulPivot ? null : columns]);
    Object.assign(instance, {
      togglePivot: togglePivot
    });
  }

  function prepareRow$2(row) {
    row.allCells.forEach(function (cell) {
      // Grouped cells are in the pivotColumns and the pivot cell for the row
      cell.isPivoted = cell.column.isPivoted;
    });
  }

  var pluginName$1 = 'useRowSelect'; // Actions

  actions.resetSelectedRows = 'resetSelectedRows';
  actions.toggleAllRowsSelected = 'toggleAllRowsSelected';
  actions.toggleRowSelected = 'toggleRowSelected';
  actions.toggleAllPageRowsSelected = 'toggleAllPageRowsSelected';
  var useRowSelect = function useRowSelect(hooks) {
    hooks.getToggleRowSelectedProps = [defaultGetToggleRowSelectedProps];
    hooks.getToggleAllRowsSelectedProps = [defaultGetToggleAllRowsSelectedProps];
    hooks.getToggleAllPageRowsSelectedProps = [defaultGetToggleAllPageRowsSelectedProps];
    hooks.stateReducers.push(reducer$8);
    hooks.useInstance.push(useInstance$8);
    hooks.prepareRow.push(prepareRow$3);
  };
  useRowSelect.pluginName = pluginName$1;

  var defaultGetToggleRowSelectedProps = function defaultGetToggleRowSelectedProps(props, _ref) {
    var instance = _ref.instance,
        row = _ref.row;
    var _instance$manualRowSe = instance.manualRowSelectedKey,
        manualRowSelectedKey = _instance$manualRowSe === void 0 ? 'isSelected' : _instance$manualRowSe;
    var checked = false;

    if (row.original && row.original[manualRowSelectedKey]) {
      checked = true;
    } else {
      checked = row.isSelected;
    }

    return [props, {
      onChange: function onChange(e) {
        row.toggleRowSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: checked,
      title: 'Toggle Row Selected',
      indeterminate: row.isSomeSelected
    }];
  };

  var defaultGetToggleAllRowsSelectedProps = function defaultGetToggleAllRowsSelectedProps(props, _ref2) {
    var instance = _ref2.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleAllRowsSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: instance.isAllRowsSelected,
      title: 'Toggle All Rows Selected',
      indeterminate: Boolean(!instance.isAllRowsSelected && Object.keys(instance.state.selectedRowIds).length)
    }];
  };

  var defaultGetToggleAllPageRowsSelectedProps = function defaultGetToggleAllPageRowsSelectedProps(props, _ref3) {
    var instance = _ref3.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleAllPageRowsSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: instance.isAllPageRowsSelected,
      title: 'Toggle All Current Page Rows Selected',
      indeterminate: Boolean(!instance.isAllPageRowsSelected && instance.page.some(function (_ref4) {
        var id = _ref4.id;
        return instance.state.selectedRowIds[id];
      }))
    }];
  }; // eslint-disable-next-line max-params


  function reducer$8(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        selectedRowIds: {}
      }, state);
    }

    if (action.type === actions.resetSelectedRows) {
      return _extends({}, state, {
        selectedRowIds: instance.initialState.selectedRowIds || {}
      });
    }

    if (action.type === actions.toggleAllRowsSelected) {
      var setSelected = action.value;
      var isAllRowsSelected = instance.isAllRowsSelected,
          rowsById = instance.rowsById,
          _instance$nonGroupedR = instance.nonGroupedRowsById,
          nonGroupedRowsById = _instance$nonGroupedR === void 0 ? rowsById : _instance$nonGroupedR;
      var selectAll = typeof setSelected !== 'undefined' ? setSelected : !isAllRowsSelected; // Only remove/add the rows that are visible on the screen
      //  Leave all the other rows that are selected alone.

      var selectedRowIds = Object.assign({}, state.selectedRowIds);

      if (selectAll) {
        Object.keys(nonGroupedRowsById).forEach(function (rowId) {
          selectedRowIds[rowId] = true;
        });
      } else {
        Object.keys(nonGroupedRowsById).forEach(function (rowId) {
          delete selectedRowIds[rowId];
        });
      }

      return _extends({}, state, {
        selectedRowIds: selectedRowIds
      });
    }

    if (action.type === actions.toggleRowSelected) {
      var id = action.id,
          _setSelected = action.value;
      var _rowsById = instance.rowsById,
          _instance$selectSubRo = instance.selectSubRows,
          selectSubRows = _instance$selectSubRo === void 0 ? true : _instance$selectSubRo,
          getSubRows = instance.getSubRows;
      var isSelected = state.selectedRowIds[id];
      var shouldExist = typeof _setSelected !== 'undefined' ? _setSelected : !isSelected;

      if (isSelected === shouldExist) {
        return state;
      }

      var newSelectedRowIds = _extends({}, state.selectedRowIds);

      var handleRowById = function handleRowById(id) {
        var row = _rowsById[id];

        if (!row.isGrouped) {
          if (shouldExist) {
            newSelectedRowIds[id] = true;
          } else {
            delete newSelectedRowIds[id];
          }
        }

        if (selectSubRows && getSubRows(row)) {
          return getSubRows(row).forEach(function (row) {
            return handleRowById(row.id);
          });
        }
      };

      handleRowById(id);
      return _extends({}, state, {
        selectedRowIds: newSelectedRowIds
      });
    }

    if (action.type === actions.toggleAllPageRowsSelected) {
      var _setSelected2 = action.value;

      var page = instance.page,
          _rowsById2 = instance.rowsById,
          _instance$selectSubRo2 = instance.selectSubRows,
          _selectSubRows = _instance$selectSubRo2 === void 0 ? true : _instance$selectSubRo2,
          isAllPageRowsSelected = instance.isAllPageRowsSelected,
          _getSubRows = instance.getSubRows;

      var _selectAll = typeof _setSelected2 !== 'undefined' ? _setSelected2 : !isAllPageRowsSelected;

      var _newSelectedRowIds = _extends({}, state.selectedRowIds);

      var _handleRowById = function _handleRowById(id) {
        var row = _rowsById2[id];

        if (!row.isGrouped) {
          if (_selectAll) {
            _newSelectedRowIds[id] = true;
          } else {
            delete _newSelectedRowIds[id];
          }
        }

        if (_selectSubRows && _getSubRows(row)) {
          return _getSubRows(row).forEach(function (row) {
            return _handleRowById(row.id);
          });
        }
      };

      page.forEach(function (row) {
        return _handleRowById(row.id);
      });
      return _extends({}, state, {
        selectedRowIds: _newSelectedRowIds
      });
    }

    return state;
  }

  function useInstance$8(instance) {
    var data = instance.data,
        rows = instance.rows,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        rowsById = instance.rowsById,
        _instance$nonGroupedR2 = instance.nonGroupedRowsById,
        nonGroupedRowsById = _instance$nonGroupedR2 === void 0 ? rowsById : _instance$nonGroupedR2,
        _instance$autoResetSe = instance.autoResetSelectedRows,
        autoResetSelectedRows = _instance$autoResetSe === void 0 ? true : _instance$autoResetSe,
        selectedRowIds = instance.state.selectedRowIds,
        _instance$selectSubRo3 = instance.selectSubRows,
        selectSubRows = _instance$selectSubRo3 === void 0 ? true : _instance$selectSubRo3,
        dispatch = instance.dispatch,
        page = instance.page,
        getSubRows = instance.getSubRows;
    ensurePluginOrder(plugins, ['useFilters', 'useGroupBy', 'useSortBy', 'useExpanded', 'usePagination'], 'useRowSelect');
    var selectedFlatRows = React.useMemo(function () {
      var selectedFlatRows = [];
      rows.forEach(function (row) {
        var isSelected = selectSubRows ? getRowIsSelected(row, selectedRowIds, getSubRows) : !!selectedRowIds[row.id];
        row.isSelected = !!isSelected;
        row.isSomeSelected = isSelected === null;

        if (isSelected) {
          selectedFlatRows.push(row);
        }
      });
      return selectedFlatRows;
    }, [rows, selectSubRows, selectedRowIds, getSubRows]);
    var isAllRowsSelected = Boolean(Object.keys(nonGroupedRowsById).length && Object.keys(selectedRowIds).length);
    var isAllPageRowsSelected = isAllRowsSelected;

    if (isAllRowsSelected) {
      if (Object.keys(nonGroupedRowsById).some(function (id) {
        return !selectedRowIds[id];
      })) {
        isAllRowsSelected = false;
      }
    }

    if (!isAllRowsSelected) {
      if (page && page.length && page.some(function (_ref5) {
        var id = _ref5.id;
        return !selectedRowIds[id];
      })) {
        isAllPageRowsSelected = false;
      }
    }

    var getAutoResetSelectedRows = useGetLatest(autoResetSelectedRows);
    useMountedLayoutEffect(function () {
      if (getAutoResetSelectedRows()) {
        dispatch({
          type: actions.resetSelectedRows
        });
      }
    }, [dispatch, data]);
    var toggleAllRowsSelected = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllRowsSelected,
        value: value
      });
    }, [dispatch]);
    var toggleAllPageRowsSelected = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllPageRowsSelected,
        value: value
      });
    }, [dispatch]);
    var toggleRowSelected = React.useCallback(function (id, value) {
      return dispatch({
        type: actions.toggleRowSelected,
        id: id,
        value: value
      });
    }, [dispatch]);
    var getInstance = useGetLatest(instance);
    var getToggleAllRowsSelectedProps = makePropGetter(getHooks().getToggleAllRowsSelectedProps, {
      instance: getInstance()
    });
    var getToggleAllPageRowsSelectedProps = makePropGetter(getHooks().getToggleAllPageRowsSelectedProps, {
      instance: getInstance()
    });
    Object.assign(instance, {
      selectedFlatRows: selectedFlatRows,
      isAllRowsSelected: isAllRowsSelected,
      isAllPageRowsSelected: isAllPageRowsSelected,
      toggleRowSelected: toggleRowSelected,
      toggleAllRowsSelected: toggleAllRowsSelected,
      getToggleAllRowsSelectedProps: getToggleAllRowsSelectedProps,
      getToggleAllPageRowsSelectedProps: getToggleAllPageRowsSelectedProps,
      toggleAllPageRowsSelected: toggleAllPageRowsSelected
    });
  }

  function prepareRow$3(row, _ref6) {
    var instance = _ref6.instance;

    row.toggleRowSelected = function (set) {
      return instance.toggleRowSelected(row.id, set);
    };

    row.getToggleRowSelectedProps = makePropGetter(instance.getHooks().getToggleRowSelectedProps, {
      instance: instance,
      row: row
    });
  }

  function getRowIsSelected(row, selectedRowIds, getSubRows) {
    if (selectedRowIds[row.id]) {
      return true;
    }

    var subRows = getSubRows(row);

    if (subRows && subRows.length) {
      var allChildrenSelected = true;
      var someSelected = false;
      subRows.forEach(function (subRow) {
        // Bail out early if we know both of these
        if (someSelected && !allChildrenSelected) {
          return;
        }

        if (getRowIsSelected(subRow, selectedRowIds, getSubRows)) {
          someSelected = true;
        } else {
          allChildrenSelected = false;
        }
      });
      return allChildrenSelected ? true : someSelected ? null : false;
    }

    return false;
  }

  var defaultInitialRowStateAccessor = function defaultInitialRowStateAccessor(row) {
    return {};
  };

  var defaultInitialCellStateAccessor = function defaultInitialCellStateAccessor(cell) {
    return {};
  }; // Actions


  actions.setRowState = 'setRowState';
  actions.setCellState = 'setCellState';
  actions.resetRowState = 'resetRowState';
  var useRowState = function useRowState(hooks) {
    hooks.stateReducers.push(reducer$9);
    hooks.useInstance.push(useInstance$9);
    hooks.prepareRow.push(prepareRow$4);
  };
  useRowState.pluginName = 'useRowState';

  function reducer$9(state, action, previousState, instance) {
    var _instance$initialRowS = instance.initialRowStateAccessor,
        initialRowStateAccessor = _instance$initialRowS === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS,
        _instance$initialCell = instance.initialCellStateAccessor,
        initialCellStateAccessor = _instance$initialCell === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell,
        rowsById = instance.rowsById;

    if (action.type === actions.init) {
      return _extends({
        rowState: {}
      }, state);
    }

    if (action.type === actions.resetRowState) {
      return _extends({}, state, {
        rowState: instance.initialState.rowState || {}
      });
    }

    if (action.type === actions.setRowState) {
      var _extends2;

      var rowId = action.rowId,
          value = action.value;
      var oldRowState = typeof state.rowState[rowId] !== 'undefined' ? state.rowState[rowId] : initialRowStateAccessor(rowsById[rowId]);
      return _extends({}, state, {
        rowState: _extends({}, state.rowState, (_extends2 = {}, _extends2[rowId] = functionalUpdate(value, oldRowState), _extends2))
      });
    }

    if (action.type === actions.setCellState) {
      var _oldRowState$cellStat, _rowsById$_rowId, _rowsById$_rowId$cell, _extends3, _extends4;

      var _rowId = action.rowId,
          columnId = action.columnId,
          _value = action.value;

      var _oldRowState = typeof state.rowState[_rowId] !== 'undefined' ? state.rowState[_rowId] : initialRowStateAccessor(rowsById[_rowId]);

      var oldCellState = typeof (_oldRowState == null ? void 0 : (_oldRowState$cellStat = _oldRowState.cellState) == null ? void 0 : _oldRowState$cellStat[columnId]) !== 'undefined' ? _oldRowState.cellState[columnId] : initialCellStateAccessor((_rowsById$_rowId = rowsById[_rowId]) == null ? void 0 : (_rowsById$_rowId$cell = _rowsById$_rowId.cells) == null ? void 0 : _rowsById$_rowId$cell.find(function (cell) {
        return cell.column.id === columnId;
      }));
      return _extends({}, state, {
        rowState: _extends({}, state.rowState, (_extends4 = {}, _extends4[_rowId] = _extends({}, _oldRowState, {
          cellState: _extends({}, _oldRowState.cellState || {}, (_extends3 = {}, _extends3[columnId] = functionalUpdate(_value, oldCellState), _extends3))
        }), _extends4))
      });
    }
  }

  function useInstance$9(instance) {
    var _instance$autoResetRo = instance.autoResetRowState,
        autoResetRowState = _instance$autoResetRo === void 0 ? true : _instance$autoResetRo,
        data = instance.data,
        dispatch = instance.dispatch;
    var setRowState = React.useCallback(function (rowId, value) {
      return dispatch({
        type: actions.setRowState,
        rowId: rowId,
        value: value
      });
    }, [dispatch]);
    var setCellState = React.useCallback(function (rowId, columnId, value) {
      return dispatch({
        type: actions.setCellState,
        rowId: rowId,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var getAutoResetRowState = useGetLatest(autoResetRowState);
    useMountedLayoutEffect(function () {
      if (getAutoResetRowState()) {
        dispatch({
          type: actions.resetRowState
        });
      }
    }, [data]);
    Object.assign(instance, {
      setRowState: setRowState,
      setCellState: setCellState
    });
  }

  function prepareRow$4(row, _ref) {
    var instance = _ref.instance;
    var _instance$initialRowS2 = instance.initialRowStateAccessor,
        initialRowStateAccessor = _instance$initialRowS2 === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS2,
        _instance$initialCell2 = instance.initialCellStateAccessor,
        initialCellStateAccessor = _instance$initialCell2 === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell2,
        rowState = instance.state.rowState;

    if (row) {
      row.state = typeof rowState[row.id] !== 'undefined' ? rowState[row.id] : initialRowStateAccessor(row);

      row.setState = function (updater) {
        return instance.setRowState(row.id, updater);
      };

      row.cells.forEach(function (cell) {
        if (!row.state.cellState) {
          row.state.cellState = {};
        }

        cell.state = typeof row.state.cellState[cell.column.id] !== 'undefined' ? row.state.cellState[cell.column.id] : initialCellStateAccessor(cell);

        cell.setState = function (updater) {
          return instance.setCellState(row.id, cell.column.id, updater);
        };
      });
    }
  }

  actions.resetColumnOrder = 'resetColumnOrder';
  actions.setColumnOrder = 'setColumnOrder';
  var useColumnOrder = function useColumnOrder(hooks) {
    hooks.stateReducers.push(reducer$a);
    hooks.visibleColumnsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.columnOrder]);
    });
    hooks.visibleColumns.push(visibleColumns$2);
    hooks.useInstance.push(useInstance$a);
  };
  useColumnOrder.pluginName = 'useColumnOrder';

  function reducer$a(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        columnOrder: []
      }, state);
    }

    if (action.type === actions.resetColumnOrder) {
      return _extends({}, state, {
        columnOrder: instance.initialState.columnOrder || []
      });
    }

    if (action.type === actions.setColumnOrder) {
      return _extends({}, state, {
        columnOrder: functionalUpdate(action.columnOrder, state.columnOrder)
      });
    }
  }

  function visibleColumns$2(columns, _ref2) {
    var columnOrder = _ref2.instance.state.columnOrder;

    // If there is no order, return the normal columns
    if (!columnOrder || !columnOrder.length) {
      return columns;
    }

    var columnOrderCopy = [].concat(columnOrder); // If there is an order, make a copy of the columns

    var columnsCopy = [].concat(columns); // And make a new ordered array of the columns

    var columnsInOrder = []; // Loop over the columns and place them in order into the new array

    var _loop = function _loop() {
      var targetColumnId = columnOrderCopy.shift();
      var foundIndex = columnsCopy.findIndex(function (d) {
        return d.id === targetColumnId;
      });

      if (foundIndex > -1) {
        columnsInOrder.push(columnsCopy.splice(foundIndex, 1)[0]);
      }
    };

    while (columnsCopy.length && columnOrderCopy.length) {
      _loop();
    } // If there are any columns left, add them to the end


    return [].concat(columnsInOrder, columnsCopy);
  }

  function useInstance$a(instance) {
    var dispatch = instance.dispatch;
    instance.setColumnOrder = React.useCallback(function (columnOrder) {
      return dispatch({
        type: actions.setColumnOrder,
        columnOrder: columnOrder
      });
    }, [dispatch]);
  }

  defaultColumn.canResize = true; // Actions

  actions.columnStartResizing = 'columnStartResizing';
  actions.columnResizing = 'columnResizing';
  actions.columnDoneResizing = 'columnDoneResizing';
  actions.resetResize = 'resetResize';
  var useResizeColumns = function useResizeColumns(hooks) {
    hooks.getResizerProps = [defaultGetResizerProps];
    hooks.getHeaderProps.push({
      style: {
        position: 'relative'
      }
    });
    hooks.stateReducers.push(reducer$b);
    hooks.useInstance.push(useInstance$b);
    hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions$1);
  };

  var defaultGetResizerProps = function defaultGetResizerProps(props, _ref) {
    var instance = _ref.instance,
        header = _ref.header;
    var dispatch = instance.dispatch;

    var onResizeStart = function onResizeStart(e, header) {
      var isTouchEvent = false;

      if (e.type === 'touchstart') {
        // lets not respond to multiple touches (e.g. 2 or 3 fingers)
        if (e.touches && e.touches.length > 1) {
          return;
        }

        isTouchEvent = true;
      }

      var headersToResize = getLeafHeaders(header);
      var headerIdWidths = headersToResize.map(function (d) {
        return [d.id, d.totalWidth];
      });
      var clientX = isTouchEvent ? Math.round(e.touches[0].clientX) : e.clientX;

      var dispatchMove = function dispatchMove(clientXPos) {
        dispatch({
          type: actions.columnResizing,
          clientX: clientXPos
        });
      };

      var dispatchEnd = function dispatchEnd() {
        return dispatch({
          type: actions.columnDoneResizing
        });
      };

      var handlersAndEvents = {
        mouse: {
          moveEvent: 'mousemove',
          moveHandler: function moveHandler(e) {
            return dispatchMove(e.clientX);
          },
          upEvent: 'mouseup',
          upHandler: function upHandler(e) {
            document.removeEventListener('mousemove', handlersAndEvents.mouse.moveHandler);
            document.removeEventListener('mouseup', handlersAndEvents.mouse.upHandler);
            dispatchEnd();
          }
        },
        touch: {
          moveEvent: 'touchmove',
          moveHandler: function moveHandler(e) {
            if (e.cancelable) {
              e.preventDefault();
              e.stopPropagation();
            }

            dispatchMove(e.touches[0].clientX);
            return false;
          },
          upEvent: 'touchend',
          upHandler: function upHandler(e) {
            document.removeEventListener(handlersAndEvents.touch.moveEvent, handlersAndEvents.touch.moveHandler);
            document.removeEventListener(handlersAndEvents.touch.upEvent, handlersAndEvents.touch.moveHandler);
            dispatchEnd();
          }
        }
      };
      var events = isTouchEvent ? handlersAndEvents.touch : handlersAndEvents.mouse;
      var passiveIfSupported = passiveEventSupported() ? {
        passive: false
      } : false;
      document.addEventListener(events.moveEvent, events.moveHandler, passiveIfSupported);
      document.addEventListener(events.upEvent, events.upHandler, passiveIfSupported);
      dispatch({
        type: actions.columnStartResizing,
        columnId: header.id,
        columnWidth: header.totalWidth,
        headerIdWidths: headerIdWidths,
        clientX: clientX
      });
    };

    return [props, {
      onMouseDown: function onMouseDown(e) {
        return e.persist() || onResizeStart(e, header);
      },
      onTouchStart: function onTouchStart(e) {
        return e.persist() || onResizeStart(e, header);
      },
      style: {
        cursor: 'col-resize'
      },
      draggable: false,
      role: 'separator'
    }];
  };

  useResizeColumns.pluginName = 'useResizeColumns';

  function reducer$b(state, action) {
    if (action.type === actions.init) {
      return _extends({
        columnResizing: {
          columnWidths: {}
        }
      }, state);
    }

    if (action.type === actions.resetResize) {
      return _extends({}, state, {
        columnResizing: {
          columnWidths: {}
        }
      });
    }

    if (action.type === actions.columnStartResizing) {
      var clientX = action.clientX,
          columnId = action.columnId,
          columnWidth = action.columnWidth,
          headerIdWidths = action.headerIdWidths;
      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          startX: clientX,
          headerIdWidths: headerIdWidths,
          columnWidth: columnWidth,
          isResizingColumn: columnId
        })
      });
    }

    if (action.type === actions.columnResizing) {
      var _clientX = action.clientX;

      var _state$columnResizing = state.columnResizing,
          startX = _state$columnResizing.startX,
          _columnWidth = _state$columnResizing.columnWidth,
          _state$columnResizing2 = _state$columnResizing.headerIdWidths,
          _headerIdWidths = _state$columnResizing2 === void 0 ? [] : _state$columnResizing2;

      var deltaX = _clientX - startX;
      var percentageDeltaX = deltaX / _columnWidth;
      var newColumnWidths = {};

      _headerIdWidths.forEach(function (_ref2) {
        var headerId = _ref2[0],
            headerWidth = _ref2[1];
        newColumnWidths[headerId] = Math.max(headerWidth + headerWidth * percentageDeltaX, 0);
      });

      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          columnWidths: _extends({}, state.columnResizing.columnWidths, {}, newColumnWidths)
        })
      });
    }

    if (action.type === actions.columnDoneResizing) {
      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          startX: null,
          isResizingColumn: null
        })
      });
    }
  }

  var useInstanceBeforeDimensions$1 = function useInstanceBeforeDimensions(instance) {
    var flatHeaders = instance.flatHeaders,
        disableResizing = instance.disableResizing,
        getHooks = instance.getHooks,
        columnResizing = instance.state.columnResizing;
    var getInstance = useGetLatest(instance);
    flatHeaders.forEach(function (header) {
      var canResize = getFirstDefined(header.disableResizing === true ? false : undefined, disableResizing === true ? false : undefined, true);
      header.canResize = canResize;
      header.width = columnResizing.columnWidths[header.id] || header.originalWidth || header.width;
      header.isResizing = columnResizing.isResizingColumn === header.id;

      if (canResize) {
        header.getResizerProps = makePropGetter(getHooks().getResizerProps, {
          instance: getInstance(),
          header: header
        });
      }
    });
  };

  function useInstance$b(instance) {
    var plugins = instance.plugins,
        dispatch = instance.dispatch,
        _instance$autoResetRe = instance.autoResetResize,
        autoResetResize = _instance$autoResetRe === void 0 ? true : _instance$autoResetRe,
        columns = instance.columns;
    ensurePluginOrder(plugins, ['useAbsoluteLayout'], 'useResizeColumns');
    var getAutoResetResize = useGetLatest(autoResetResize);
    useMountedLayoutEffect(function () {
      if (getAutoResetResize()) {
        dispatch({
          type: actions.resetResize
        });
      }
    }, [columns]);
    var resetResizing = React.useCallback(function () {
      return dispatch({
        type: actions.resetResize
      });
    }, [dispatch]);
    Object.assign(instance, {
      resetResizing: resetResizing
    });
  }

  function getLeafHeaders(header) {
    var leafHeaders = [];

    var recurseHeader = function recurseHeader(header) {
      if (header.columns && header.columns.length) {
        header.columns.map(recurseHeader);
      }

      leafHeaders.push(header);
    };

    recurseHeader(header);
    return leafHeaders;
  }

  var cellStyles = {
    position: 'absolute',
    top: 0
  };
  var useAbsoluteLayout = function useAbsoluteLayout(hooks) {
    hooks.getTableBodyProps.push(getRowStyles);
    hooks.getRowProps.push(getRowStyles);
    hooks.getHeaderGroupProps.push(getRowStyles);
    hooks.getFooterGroupProps.push(getRowStyles);
    hooks.getHeaderProps.push(function (props, _ref) {
      var column = _ref.column;
      return [props, {
        style: _extends({}, cellStyles, {
          left: column.totalLeft + "px",
          width: column.totalWidth + "px"
        })
      }];
    });
    hooks.getCellProps.push(function (props, _ref2) {
      var cell = _ref2.cell;
      return [props, {
        style: _extends({}, cellStyles, {
          left: cell.column.totalLeft + "px",
          width: cell.column.totalWidth + "px"
        })
      }];
    });
    hooks.getFooterProps.push(function (props, _ref3) {
      var column = _ref3.column;
      return [props, {
        style: _extends({}, cellStyles, {
          left: column.totalLeft + "px",
          width: column.totalWidth + "px"
        })
      }];
    });
  };
  useAbsoluteLayout.pluginName = 'useAbsoluteLayout';

  var getRowStyles = function getRowStyles(props, _ref4) {
    var instance = _ref4.instance;
    return [props, {
      style: {
        position: 'relative',
        width: instance.totalColumnsWidth + "px"
      }
    }];
  };

  var cellStyles$1 = {
    display: 'inline-block',
    boxSizing: 'border-box'
  };

  var getRowStyles$1 = function getRowStyles(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        display: 'flex',
        width: instance.totalColumnsWidth + "px"
      }
    }];
  };

  var useBlockLayout = function useBlockLayout(hooks) {
    hooks.getRowProps.push(getRowStyles$1);
    hooks.getHeaderGroupProps.push(getRowStyles$1);
    hooks.getFooterGroupProps.push(getRowStyles$1);
    hooks.getHeaderProps.push(function (props, _ref2) {
      var column = _ref2.column;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: column.totalWidth + "px"
        })
      }];
    });
    hooks.getCellProps.push(function (props, _ref3) {
      var cell = _ref3.cell;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: cell.column.totalWidth + "px"
        })
      }];
    });
    hooks.getFooterProps.push(function (props, _ref4) {
      var column = _ref4.column;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: column.totalWidth + "px"
        })
      }];
    });
  };
  useBlockLayout.pluginName = 'useBlockLayout';

  function useFlexLayout(hooks) {
    hooks.getTableProps.push(getTableProps);
    hooks.getRowProps.push(getRowStyles$2);
    hooks.getHeaderGroupProps.push(getRowStyles$2);
    hooks.getFooterGroupProps.push(getRowStyles$2);
    hooks.getHeaderProps.push(getHeaderProps);
    hooks.getCellProps.push(getCellProps);
    hooks.getFooterProps.push(getFooterProps);
  }
  useFlexLayout.pluginName = 'useFlexLayout';

  var getTableProps = function getTableProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        minWidth: instance.totalColumnsMinWidth + "px"
      }
    }];
  };

  var getRowStyles$2 = function getRowStyles(props, _ref2) {
    var instance = _ref2.instance;
    return [props, {
      style: {
        display: 'flex',
        flex: '1 0 auto',
        minWidth: instance.totalColumnsMinWidth + "px"
      }
    }];
  };

  var getHeaderProps = function getHeaderProps(props, _ref3) {
    var column = _ref3.column;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
        minWidth: column.totalMinWidth + "px",
        width: column.totalWidth + "px"
      }
    }];
  };

  var getCellProps = function getCellProps(props, _ref4) {
    var cell = _ref4.cell;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: cell.column.totalFlexWidth + " 0 auto",
        minWidth: cell.column.totalMinWidth + "px",
        width: cell.column.totalWidth + "px"
      }
    }];
  };

  var getFooterProps = function getFooterProps(props, _ref5) {
    var column = _ref5.column;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
        minWidth: column.totalMinWidth + "px",
        width: column.totalWidth + "px"
      }
    }];
  };

  function useGridLayout(hooks) {
    hooks.stateReducers.push(reducer$c);
    hooks.getTableProps.push(getTableProps$1);
    hooks.getHeaderProps.push(getHeaderProps$1);
  }
  useGridLayout.pluginName = 'useGridLayout';

  var getTableProps$1 = function getTableProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        display: "grid",
        gridTemplateColumns: instance.state.gridLayout.columnWidths.map(function (w) {
          return w;
        }).join(" ")
      }
    }];
  };

  var getHeaderProps$1 = function getHeaderProps(props, _ref2) {
    var column = _ref2.column;
    return [props, {
      id: "header-cell-" + column.id,
      style: {
        position: "sticky" //enables a scroll wrapper to be placed around the table and have sticky headers

      }
    }];
  };

  function reducer$c(state, action, previousState, instance) {
    if (action.type === "init") {
      return _extends({
        gridLayout: {
          columnWidths: instance.columns.map(function () {
            return "auto";
          })
        }
      }, state);
    }

    if (action.type === "columnStartResizing") {
      var columnId = action.columnId;
      var columnIndex = instance.visibleColumns.findIndex(function (col) {
        return col.id === columnId;
      });
      var elWidth = getElementWidth(columnId);

      if (elWidth !== undefined) {
        return _extends({}, state, {
          gridLayout: _extends({}, state.gridLayout, {
            columnId: columnId,
            columnIndex: columnIndex,
            startingWidth: elWidth
          })
        });
      } else {
        return state;
      }
    }

    if (action.type === "columnResizing") {
      var _state$gridLayout = state.gridLayout,
          _columnIndex = _state$gridLayout.columnIndex,
          startingWidth = _state$gridLayout.startingWidth,
          columnWidths = _state$gridLayout.columnWidths;
      var change = state.columnResizing.startX - action.clientX;
      var newWidth = startingWidth - change;
      var columnWidthsCopy = [].concat(columnWidths);
      columnWidthsCopy[_columnIndex] = newWidth + "px";
      return _extends({}, state, {
        gridLayout: _extends({}, state.gridLayout, {
          columnWidths: columnWidthsCopy
        })
      });
    }
  }

  function getElementWidth(columnId) {
    var _document$getElementB;

    var width = (_document$getElementB = document.getElementById("header-cell-" + columnId)) == null ? void 0 : _document$getElementB.offsetWidth;

    if (width !== undefined) {
      return width;
    }
  }

  exports._UNSTABLE_usePivotColumns = _UNSTABLE_usePivotColumns;
  exports.actions = actions;
  exports.defaultColumn = defaultColumn;
  exports.defaultGroupByFn = defaultGroupByFn;
  exports.defaultOrderByFn = defaultOrderByFn;
  exports.defaultRenderer = defaultRenderer;
  exports.emptyRenderer = emptyRenderer;
  exports.ensurePluginOrder = ensurePluginOrder;
  exports.flexRender = flexRender;
  exports.functionalUpdate = functionalUpdate;
  exports.loopHooks = loopHooks;
  exports.makePropGetter = makePropGetter;
  exports.makeRenderer = makeRenderer;
  exports.reduceHooks = reduceHooks;
  exports.safeUseLayoutEffect = safeUseLayoutEffect;
  exports.useAbsoluteLayout = useAbsoluteLayout;
  exports.useAsyncDebounce = useAsyncDebounce;
  exports.useBlockLayout = useBlockLayout;
  exports.useColumnOrder = useColumnOrder;
  exports.useExpanded = useExpanded;
  exports.useFilters = useFilters;
  exports.useFlexLayout = useFlexLayout;
  exports.useGetLatest = useGetLatest;
  exports.useGlobalFilter = useGlobalFilter;
  exports.useGridLayout = useGridLayout;
  exports.useGroupBy = useGroupBy;
  exports.useMountedLayoutEffect = useMountedLayoutEffect;
  exports.usePagination = usePagination;
  exports.useResizeColumns = useResizeColumns;
  exports.useRowSelect = useRowSelect;
  exports.useRowState = useRowState;
  exports.useSortBy = useSortBy;
  exports.useTable = useTable;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-table.development.js.map


/***/ }),

/***/ "./node_modules/react-table/index.js":
/*!*******************************************!*\
  !*** ./node_modules/react-table/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./dist/react-table.development.js */ "./node_modules/react-table/dist/react-table.development.js")
}


/***/ }),

/***/ "./node_modules/react-yandex-maps/dist/production/react-yandex-maps.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-yandex-maps/dist/production/react-yandex-maps.esm.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withYMaps": () => (/* binding */ N),
/* harmony export */   "YMaps": () => (/* binding */ Z),
/* harmony export */   "Map": () => (/* binding */ ot),
/* harmony export */   "Panorama": () => (/* binding */ st),
/* harmony export */   "Button": () => (/* binding */ at),
/* harmony export */   "FullscreenControl": () => (/* binding */ ct),
/* harmony export */   "GeolocationControl": () => (/* binding */ ut),
/* harmony export */   "ListBox": () => (/* binding */ pt),
/* harmony export */   "ListBoxItem": () => (/* binding */ ft),
/* harmony export */   "RouteButton": () => (/* binding */ lt),
/* harmony export */   "RouteEditor": () => (/* binding */ mt),
/* harmony export */   "RoutePanel": () => (/* binding */ dt),
/* harmony export */   "RulerControl": () => (/* binding */ yt),
/* harmony export */   "SearchControl": () => (/* binding */ ht),
/* harmony export */   "TrafficControl": () => (/* binding */ vt),
/* harmony export */   "TypeSelector": () => (/* binding */ bt),
/* harmony export */   "ZoomControl": () => (/* binding */ jt),
/* harmony export */   "Clusterer": () => (/* binding */ Ot),
/* harmony export */   "ObjectManager": () => (/* binding */ _t),
/* harmony export */   "GeoObject": () => (/* binding */ Ct),
/* harmony export */   "Circle": () => (/* binding */ wt),
/* harmony export */   "Placemark": () => (/* binding */ Pt),
/* harmony export */   "Polygon": () => (/* binding */ Rt),
/* harmony export */   "Polyline": () => (/* binding */ St),
/* harmony export */   "Rectangle": () => (/* binding */ Mt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function n(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function o(t,e){return t(e={exports:{}},e.exports),e.exports}var r="function"==typeof Symbol&&Symbol.for,s=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,p=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,m=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,j=r?Symbol.for("react.block"):60121,O=r?Symbol.for("react.fundamental"):60117,_=r?Symbol.for("react.responder"):60118,g=r?Symbol.for("react.scope"):60119;function E(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case s:switch(t=t.type){case l:case m:case a:case u:case c:case y:return t;default:switch(t=t&&t.$$typeof){case f:case d:case b:case v:case p:return t;default:return e}}case i:return e}}}function C(t){return E(t)===m}var w={AsyncMode:l,ConcurrentMode:m,ContextConsumer:f,ContextProvider:p,Element:s,ForwardRef:d,Fragment:a,Lazy:b,Memo:v,Portal:i,Profiler:u,StrictMode:c,Suspense:y,isAsyncMode:function(t){return C(t)||E(t)===l},isConcurrentMode:C,isContextConsumer:function(t){return E(t)===f},isContextProvider:function(t){return E(t)===p},isElement:function(t){return"object"==typeof t&&null!==t&&t.$$typeof===s},isForwardRef:function(t){return E(t)===d},isFragment:function(t){return E(t)===a},isLazy:function(t){return E(t)===b},isMemo:function(t){return E(t)===v},isPortal:function(t){return E(t)===i},isProfiler:function(t){return E(t)===u},isStrictMode:function(t){return E(t)===c},isSuspense:function(t){return E(t)===y},isValidElementType:function(t){return"string"==typeof t||"function"==typeof t||t===a||t===m||t===u||t===c||t===y||t===h||"object"==typeof t&&null!==t&&(t.$$typeof===b||t.$$typeof===v||t.$$typeof===p||t.$$typeof===f||t.$$typeof===d||t.$$typeof===O||t.$$typeof===_||t.$$typeof===g||t.$$typeof===j)},typeOf:E};o(function(t,e){}),o(function(t){t.exports=w}),Object,Object,Object,function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}()&&Object;var P="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function R(){}function S(){}Function.call.bind(Object.prototype.hasOwnProperty),S.resetWarningCache=R;var M=o(function(t){t.exports=function(){function t(t,e,n,o,r,s){if(s!==P){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:S,resetWarningCache:R};return n.PropTypes=n,n}()}),x=n(o(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t.displayName||t.name||("string"==typeof t&&t.length>0?t:"Unknown")}})),T=function(t,e){var n={};for(var o in t)-1===e.indexOf(o)&&(n[o]=t[o]);return n},k="__global_unique_id__",$=function(){return e[k]=(e[k]||0)+1},A=function(){},U=o(function(e,n){n.__esModule=!0;var o=s(M),r=s($);function s(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}s(A),n.default=function(e,n){var s,u,p="__create-react-context-"+(0,r.default)()+"__",f=function(t){function e(){var n,o,r,s;i(this,e);for(var c=arguments.length,u=Array(c),p=0;p<c;p++)u[p]=arguments[p];return n=o=a(this,t.call.apply(t,[this].concat(u))),o.emitter=(r=o.props.value,s=[],{on:function(t){s.push(t)},off:function(t){s=s.filter(function(e){return e!==t})},get:function(){return r},set:function(t,e){r=t,s.forEach(function(t){return t(r,e)})}}),a(o,n)}return c(e,t),e.prototype.getChildContext=function(){var t;return(t={})[p]=this.emitter,t},e.prototype.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var e=this.props.value,o=t.value,r=void 0;((s=e)===(i=o)?0!==s||1/s==1/i:s!=s&&i!=i)?r=0:(r="function"==typeof n?n(e,o):1073741823,0!=(r|=0)&&this.emitter.set(t.value,r))}var s,i},e.prototype.render=function(){return this.props.children},e}(react__WEBPACK_IMPORTED_MODULE_0__.Component);f.childContextTypes=((s={})[p]=o.default.object.isRequired,s);var l=function(t){function n(){var e,o;i(this,n);for(var r=arguments.length,s=Array(r),c=0;c<r;c++)s[c]=arguments[c];return e=o=a(this,t.call.apply(t,[this].concat(s))),o.state={value:o.getValue()},o.onUpdate=function(t,e){0!=((0|o.observedBits)&e)&&o.setState({value:o.getValue()})},a(o,e)}return c(n,t),n.prototype.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?1073741823:e},n.prototype.componentDidMount=function(){this.context[p]&&this.context[p].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?1073741823:t},n.prototype.componentWillUnmount=function(){this.context[p]&&this.context[p].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[p]?this.context[p].get():e},n.prototype.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);return l.contextTypes=((u={})[p]=o.default.object,u),{Provider:f,Consumer:l}},e.exports=n.default});n(U);var B=n(o(function(e,n){n.__esModule=!0;var o=s(react__WEBPACK_IMPORTED_MODULE_0__),r=s(U);function s(t){return t&&t.__esModule?t:{default:t}}n.default=o.default.createContext||r.default,e.exports=n.default})),D=B(null),L=function(e){var n=x(e);return function(o){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(D.Consumer,null,function(r){if(null===r)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that <"+n+" /> is inside <YMaps /> provider");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(e,Object.assign({},{ymaps:r},o))})}},F=B(null),W=function(e){return function(n){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(F.Consumer,null,function(o){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(e,Object.assign({},{parent:o},n))})}};function N(e,n,o){void 0===n&&(n=!1),void 0===o&&(o=[]);var r=function(r){function s(){r.call(this),this.state={loading:!0},this._isMounted=!1}return r&&(s.__proto__=r),(s.prototype=Object.create(r&&r.prototype)).constructor=s,s.prototype.componentDidMount=function(){var t=this;this._isMounted=!0,this.props.ymaps.load().then(function(e){return Promise.all(o.concat(t.props.modules).map(e.loadModule)).then(function(){!0===t._isMounted&&t.setState({loading:!1},function(){t.props.onLoad(e)})})}).catch(function(e){!0===t._isMounted&&t.props.onError(e)})},s.prototype.componentWillUnmount=function(){this._isMounted=!1},s.prototype.render=function(){var o=this.props.ymaps,r=!1===n||!1===this.state.loading,s=T(this.props,["onLoad","onError","modules","ymaps"]);return r&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(e,Object.assign({},{ymaps:o.getApi()},s))},s}(react__WEBPACK_IMPORTED_MODULE_0__.Component);return r.defaultProps={onLoad:Function.prototype,onError:Function.prototype,modules:[]},L(r)}var q={lang:"ru_RU",load:"",ns:"",mode:"release"},z={},I=function(t){var e=Date.now().toString(32);this.options=t,this.namespace=t.query.ns||q.ns,this.onload="__yandex-maps-api-onload__$$"+e,this.onerror="__yandex-maps-api-onerror__$$"+e};I.prototype.getApi=function(){return"undefined"!=typeof window&&this.namespace?window[this.namespace]:this.api},I.prototype.setApi=function(t){return this.api=t},I.prototype.getPromise=function(){return this.namespace?z[this.namespace]:this.promise},I.prototype.setPromise=function(t){return this.namespace?z[this.namespace]=this.promise=t:this.promise=t},I.prototype.load=function(){var t=this;if(this.getApi())return Promise.resolve(this.setApi(this.getApi()));if(this.getPromise())return this.setPromise(this.getPromise());var e=Object.assign({onload:this.onload,onerror:this.onerror},q,this.options.query),n=Object.keys(e).map(function(t){return t+"="+e[t]}).join("&"),o=["https://"+(this.options.enterprise?"enterprise.":"")+"api-maps.yandex.ru",this.options.version,"?"+n].join("/"),r=new Promise(function(e,n){window[t.onload]=function(n){delete window[t.onload],n.loadModule=t.loadModule.bind(t),n.ready(function(){return e(t.setApi(n))})},window[t.onerror]=function(e){delete window[t.onerror],n(e)},t.fetchScript(o).catch(window[t.onerror])});return this.setPromise(r)},I.prototype.fetchScript=function(t){var e=this;return new Promise(function(n,o){e.script=document.createElement("script"),e.script.type="text/javascript",e.script.onload=n,e.script.onerror=o,e.script.src=t,e.script.async="async",document.head.appendChild(e.script)})},I.prototype.loadModule=function(t){var e=this;return new Promise(function(n,o){e.getApi().modules.require(t,function(o){!function(t,e,n,o){void 0===o&&(o=!1),e="string"==typeof e?e.split("."):e.slice();for(var r,s=t;e.length>1;)s[r=e.shift()]||(s[r]={}),s=s[r];s[e[0]]=!0===o&&s[e[0]]||n}(e.api,t,o,!0),n(o)},o,e.getApi())})},I._name="__react-yandex-maps__";var Z=function(e){function n(t){e.call(this,t),this.ymaps=new I(t)}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.componentDidMount=function(){!0===this.props.preload&&this.ymaps.load()},n.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(D.Provider,{value:this.ymaps},this.props.children)},n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);Z.defaultProps={version:"2.1",enterprise:!1,query:{lang:"ru_RU",load:"",ns:""},preload:!1};var G=/^on(?=[A-Z])/;function V(t){return Object.keys(t).reduce(function(e,n){if(G.test(n)){var o=n.replace(G,"").toLowerCase();e._events[o]=t[n]}else e[n]=t[n];return e},{_events:{}})}function Y(t,e,n){"function"==typeof n&&t.events.add(e,n)}function H(t,e,n){"function"==typeof n&&t.events.remove(e,n)}function J(t,e,n){Object.keys(Object.assign({},e,n)).forEach(function(o){e[o]!==n[o]&&(H(t,o,e[o]),Y(t,o,n[o]))})}var K=function(t){return"default"+t.charAt(0).toUpperCase()+t.slice(1)};function Q(t,e){return void 0!==t[e]||void 0===t[K(e)]}function X(t,e,n){return(Q(t,e)?t[e]:t[K(e)])||n}function tt(t,e,n){if(void 0===n&&(n=null),t!==e){if(t&&(t.hasOwnProperty("current")?t.current=null:"function"==typeof t&&t(null)),!e)return;e.hasOwnProperty("current")?e.current=n:"function"==typeof e&&e(n)}}function et(t){var e=t.width,n=t.height,o=t.style,r=t.className;return void 0!==o||void 0!==r?Object.assign({},o&&{style:o},r&&{className:r}):{style:{width:e,height:n}}}var nt=function(e){function n(){var t=this;e.call(this),this.state={instance:null},this._parentElement=null,this._getRef=function(e){t._parentElement=e}}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.componentDidMount=function(){var t=n.mountObject(this._parentElement,this.props.ymaps.Map,this.props);this.setState({instance:t})},n.prototype.componentDidUpdate=function(t){null!==this.state.instance&&n.updateObject(this.state.instance,t,this.props)},n.prototype.componentWillUnmount=function(){n.unmountObject(this.state.instance,this.props)},n.prototype.render=function(){var e=et(this.props),n=V(this.props),o=T(n,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(F.Provider,{value:this.state.instance},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({},{ref:this._getRef},e,o),this.props.children))},n.mountObject=function(t,e,n){var o=V(n),r=o.instanceRef,s=o._events,i=new e(t,X(n,"state"),X(n,"options"));return Object.keys(s).forEach(function(t){return Y(i,t,s[t])}),tt(null,r,i),i},n.updateObject=function(t,e,n){var o=V(n),r=o._events,s=o.instanceRef,i=V(e),a=i._events,c=i.instanceRef;if(Q(n,"state")){var u=X(e,"state",{}),p=X(n,"state",{});u.type!==p.type&&t.setType(p.type),u.behaviors!==p.behaviors&&(u.behaviors&&t.behaviors.disable(u.behaviors),p.behaviors&&t.behaviors.enable(p.behaviors)),p.zoom&&u.zoom!==p.zoom&&t.setZoom(p.zoom),p.center&&u.center!==p.center&&t.setCenter(p.center),p.bounds&&u.bounds!==p.bounds&&t.setBounds(p.bounds)}if(Q(n,"options")){var f=X(e,"options"),l=X(n,"options",{});f!==l&&t.options.set(l)}X(e,"width")===X(n,"width")&&X(e,"height")===X(n,"height")||t.container.fitToViewport(),J(t,a,r),tt(c,s,t)},n.unmountObject=function(t,e){var n=V(e),o=n.instanceRef,r=n._events;null!==t&&(Object.keys(r).forEach(function(e){return H(t,e,r[e])}),t.destroy(),tt(o))},n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);nt.defaultProps={width:320,height:240};var ot=N(nt,!0,["Map"]),rt=function(e){function n(){var t=this;e.call(this),this.state={instance:null},this._parentElement=null,this._getRef=function(e){t._parentElement=e}}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.componentDidMount=function(){var t=this;this._mounted=!0,this.props.ymaps.panorama.isSupported()&&n.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then(function(e){return t._mounted&&t.setState({instance:e})})},n.prototype.componentDidUpdate=function(t){null!==this.state.instance&&n.updateObject(this.state.instance,t,this.props)},n.prototype.componentWillUnmount=function(){this._mounted=!1,n.unmountObject(this.state.instance,this.props)},n.prototype.render=function(){var e=et(this.props);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",Object.assign({},{ref:this._getRef},e))},n.mountObject=function(t,e,n){var o=V(n),r=o.instanceRef,s=o._events,i=X(n,"point"),a=X(n,"locateOptions"),c=X(n,"options");return new Promise(function(n,o){e.locate(i,a).done(function(o){if(o.length>0){var i=new e.Player(t,o[0],c);tt(null,r,i),Object.keys(s).forEach(function(t){return Y(i,t,s[t])}),n(i)}},o)})},n.updateObject=function(t,e,n){var o=V(n),r=o._events,s=o.instanceRef,i=V(e),a=i._events,c=i.instanceRef;if(Q(n,"options")){var u=X(e,"options"),p=X(n,"options");u!==p&&t.options.set(p)}if(Q(n,"point")){var f=X(n,"point"),l=X(e,"point"),m=X(n,"locateOptions");f!==l&&t.moveTo(f,m)}J(t,a,r),tt(c,s,t)},n.unmountObject=function(t,e){var n=V(e),o=n.instanceRef,r=n._events;null!==t&&(Object.keys(r).forEach(function(e){return H(t,e,r[e])}),tt(o))},n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);rt.defaultProps={width:320,height:240};var st=N(rt,!0,["panorama.isSupported","panorama.locate","panorama.createPlayer","panorama.Player"]),it=function(e){function n(){e.call(this),this.state={instance:null}}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.componentDidMount=function(){var t=n.mountControl(this.props.ymaps.control[this.props.name],this.props);this.setState({instance:t})},n.prototype.componentDidUpdate=function(t){null!==this.state.instance&&n.updateControl(this.state.instance,t,this.props)},n.prototype.componentWillUnmount=function(){n.unmountControl(this.state.instance,this.props)},n.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(F.Provider,{value:this.state.instance},this.props.children)},n.mountControl=function(t,e){var n=V(e),o=n.instanceRef,r=n.parent,s=n.lazy,i=n._events,a=new t({data:X(e,"data"),options:X(e,"options"),state:X(e,"state"),mapTypes:X(e,"mapTypes"),lazy:s});if(Object.keys(i).forEach(function(t){return Y(a,t,i[t])}),r&&r.controls&&"function"==typeof r.controls.add)r.controls.add(a);else{if(!r||!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount "+e.name);r.add(a)}return tt(null,o,a),a},n.updateControl=function(t,e,n){var o=V(n),r=o._events,s=o.instanceRef,i=V(e),a=i._events,c=i.instanceRef;if(Q(n,"options")){var u=X(e,"options"),p=X(n,"options");u!==p&&t.options.set(p)}if(Q(n,"data")){var f=X(e,"data"),l=X(n,"data");f!==l&&t.data.set(l)}if(Q(n,"state")){var m=X(e,"state"),d=X(n,"state");m!==d&&t.state.set(d)}if(Q(n,"mapTypes")){var y=X(e,"mapTypes"),h=X(n,"mapTypes");y!==h&&(t.removeAllMapTypes(),h.forEach(function(e){return t.addMapType(e)}))}J(t,a,r),tt(c,s,t)},n.unmountControl=function(t,e){var n=V(e),o=n.instanceRef,r=n.parent,s=n._events;null!==t&&(Object.keys(s).forEach(function(e){return H(t,e,s[e])}),r.controls&&"function"==typeof r.controls.remove?r.controls.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),tt(o))},n}(react__WEBPACK_IMPORTED_MODULE_0__.Component),at=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(it,Object.assign({},e,{name:"Button"}))},!0,["control.Button"])),ct=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(it,Object.assign({},e,{name:"FullscreenControl"}))},!0,["control.FullscreenControl"])),ut=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(it,Object.assign({},e,{name:"GeolocationControl"}))},!0,["control.GeolocationControl"])),pt=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(it,Object.assign({},e,{name:"ListBox"}))},!0,["control.ListBox"])),ft=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(it,Object.assign({},e,{name:"ListBoxItem"}))},!0,["control.ListBoxItem"])),lt=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(it,Object.assign({},e,{name:"RouteButton"}))},!0,["control.RouteButton"])),mt=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(it,Object.assign({},e,{name:"RouteEditor"}))},!0,["control.RouteEditor"])),dt=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(it,Object.assign({},e,{name:"RoutePanel"}))},!0,["control.RoutePanel"])),yt=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(it,Object.assign({},e,{name:"RulerControl"}))},!0,["control.RulerControl"])),ht=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(it,Object.assign({},e,{name:"SearchControl"}))},!0,["control.SearchControl"])),vt=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(it,Object.assign({},e,{name:"TrafficControl"}))},!0,["control.TrafficControl"])),bt=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(it,Object.assign({},e,{name:"TypeSelector"}))},!0,["control.TypeSelector"])),jt=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(it,Object.assign({},e,{name:"ZoomControl"}))},!0,["control.ZoomControl"])),Ot=W(N(function(e){function n(){e.call(this),this.state={instance:null}}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.componentDidMount=function(){var t=n.mountObject(this.props.ymaps.Clusterer,this.props);this.setState({instance:t})},n.prototype.componentDidUpdate=function(t){null!==this.state.instance&&n.updateObject(this.state.instance,t,this.props)},n.prototype.componentWillUnmount=function(){n.unmountObject(this.state.instance,this.props)},n.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(F.Provider,{value:this.state.instance},this.props.children)},n.mountObject=function(t,e){var n=V(e),o=n.instanceRef,r=n.parent,s=n._events,i=new t(X(e,"options"));if(Object.keys(s).forEach(function(t){return Y(i,t,s[t])}),r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(i);else{if(!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount Clusterer");r.add(i)}return tt(null,o,i),i},n.updateObject=function(t,e,n){var o=V(n),r=o._events,s=o.instanceRef,i=V(e),a=i._events,c=i.instanceRef;if(Q(n,"options")){var u=X(e,"options"),p=X(n,"options");u!==p&&t.options.set(p)}J(t,a,r),tt(c,s,t)},n.unmountObject=function(t,e){var n=V(e),o=n.instanceRef,r=n.parent,s=n._events;null!==t&&(Object.keys(s).forEach(function(e){return H(t,e,s[e])}),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),tt(o))},n}(react__WEBPACK_IMPORTED_MODULE_0__.Component),!0,["Clusterer"])),_t=W(N(function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountObject(this.props.ymaps.ObjectManager,this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){return null},e.mountObject=function(t,e){var n=V(e),o=n.instanceRef,r=n.parent,s=n._events,i=X(e,"options",{}),a=X(e,"features",{}),c=X(e,"filter",null),u=X(e,"objects",{}),p=X(e,"clusters",{}),f=new t(i);if(f.add(a||[]),f.setFilter(c),f.objects.options.set(u),f.clusters.options.set(p),Object.keys(s).forEach(function(t){return Y(f,t,s[t])}),r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(f);else{if(!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount ObjectManager");r.add(f)}return tt(null,o,f),f},e.updateObject=function(t,e,n){var o=V(n),r=o._events,s=o.instanceRef,i=V(e),a=i._events,c=i.instanceRef;if(Q(n,"options")){var u=X(e,"options"),p=X(n,"options");u!==p&&t.options.set(p)}if(Q(n,"objects")){var f=X(e,"objects"),l=X(n,"objects");f!==l&&t.objects.options.set(l)}if(Q(n,"clusters")){var m=X(e,"clusters"),d=X(n,"clusters");m!==d&&t.clusters.options.set(d)}if(Q(n,"filter")){var y=X(e,"filter"),h=X(n,"filter");y!==h&&t.setFilter(h)}if(Q(n,"features")){var v=X(e,"features"),b=X(n,"features");v!==b&&(t.remove(v),t.add(b))}J(t,a,r),tt(c,s,t)},e.unmountObject=function(t,e){var n=V(e),o=n.instanceRef,r=n.parent,s=n._events;null!==t&&(Object.keys(s).forEach(function(e){return H(t,e,s[e])}),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),tt(o))},e}(react__WEBPACK_IMPORTED_MODULE_0__.Component),!0,["ObjectManager"])),gt=function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=this.props,n=t.name,o=t.ymaps,r=t.dangerZone,s=e.mountObject(r&&"function"==typeof r.modifyConstructor?r.modifyConstructor(o[n]):o[n],this.props);this.setState({instance:s})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){return null},e.mountObject=function(t,e){var n=V(e),o=n.instanceRef,r=n.parent,s=n._events,i=new t(X(e,"geometry"),X(e,"properties"),X(e,"options"));if(Object.keys(s).forEach(function(t){return Y(i,t,s[t])}),r&&r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(i);else{if(!r||!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount "+e.name);r.add(i)}return tt(null,o,i),i},e.updateObject=function(t,e,n){var o=V(n),r=o._events,s=o.instanceRef,i=V(e),a=i._events,c=i.instanceRef;if(Q(n,"geometry")){var u=X(e,"geometry",{}),p=X(n,"geometry",{});Array.isArray(p)&&p!==u?Array.isArray(p[0])&&"number"==typeof p[1]?(t.geometry.setCoordinates(p[0]),t.geometry.setRadius(p[1])):t.geometry.setCoordinates(p):"object"==typeof p&&(p.coordinates!==u.coordinates&&t.geometry.setCoordinates(p.coordinates),p.radius!==u.radius&&t.geometry.setRadius(p.radius))}if(Q(n,"properties")){var f=X(e,"properties"),l=X(n,"properties");f!==l&&t.properties.set(l)}if(Q(n,"options")){var m=X(e,"options"),d=X(n,"options");m!==d&&t.options.set(d)}J(t,a,r),tt(c,s,t)},e.unmountObject=function(t,e){var n=V(e),o=n.instanceRef,r=n.parent,s=n._events;null!==t&&(Object.keys(s).forEach(function(e){return H(t,e,s[e])}),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),tt(o))},e}(react__WEBPACK_IMPORTED_MODULE_0__.Component),Et={modifyConstructor:function(t){function e(e,n,o){t.call(this,{geometry:e,properties:n},o)}return e.prototype=t.prototype,e}},Ct=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(gt,Object.assign({},e,{name:"GeoObject",dangerZone:Et}))},!0,["GeoObject"])),wt=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(gt,Object.assign({},e,{name:"Circle"}))},!0,["Circle"])),Pt=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(gt,Object.assign({},e,{name:"Placemark"}))},!0,["Placemark"])),Rt=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(gt,Object.assign({},e,{name:"Polygon"}))},!0,["Polygon"])),St=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(gt,Object.assign({},e,{name:"Polyline"}))},!0,["Polyline"])),Mt=W(N(function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(gt,Object.assign({},e,{name:"Rectangle"}))},!0,["Rectangle"]));
//# sourceMappingURL=react-yandex-maps.esm.js.map


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

/***/ "./node_modules/reactstrap/es/ButtonDropdown.js":
/*!******************************************************!*\
  !*** ./node_modules/reactstrap/es/ButtonDropdown.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dropdown */ "./node_modules/reactstrap/es/Dropdown.js");




var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)
};

var ButtonDropdown = function ButtonDropdown(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    group: true
  }, props));
};

ButtonDropdown.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonDropdown);

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

/***/ "./node_modules/reactstrap/es/Modal.js":
/*!*********************************************!*\
  !*** ./node_modules/reactstrap/es/Modal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Portal */ "./node_modules/reactstrap/es/Portal.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Fade */ "./node_modules/reactstrap/es/Fade.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function noop() {}

var FadePropTypes = prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape(_Fade__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes);
var propTypes = {
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  centered: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  scrollable: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  toggle: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  keyboard: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  role: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  labelledBy: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  backdrop: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(['static'])]),
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  onOpened: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  onClosed: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  wrapClassName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  modalClassName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  backdropClassName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  contentClassName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  external: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node),
  fade: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  zIndex: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)]),
  backdropTransition: FadePropTypes,
  modalTransition: FadePropTypes,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)]),
  unmountOnClose: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  returnFocusAfterClose: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  container: _utils__WEBPACK_IMPORTED_MODULE_8__.targetPropType,
  trapFocus: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)
};
var propsToOmit = Object.keys(propTypes);
var defaultProps = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  scrollable: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop,
  onClosed: noop,
  modalTransition: {
    timeout: _utils__WEBPACK_IMPORTED_MODULE_8__.TransitionTimeouts.Modal
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: _utils__WEBPACK_IMPORTED_MODULE_8__.TransitionTimeouts.Fade // uses standard fade transition

  },
  unmountOnClose: true,
  returnFocusAfterClose: true,
  container: 'body',
  trapFocus: false
};

var Modal = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._element = null;
    _this._originalBodyPadding = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleBackdropClick = _this.handleBackdropClick.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleEscape = _this.handleEscape.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleStaticBackdropAnimation = _this.handleStaticBackdropAnimation.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleTab = _this.handleTab.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.onOpened = _this.onOpened.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.onClosed = _this.onClosed.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.clearBackdropAnimationTimeout = _this.clearBackdropAnimationTimeout.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.trapFocus = _this.trapFocus.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.state = {
      isOpen: false,
      showStaticBackdropAnimation: false
    };
    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        isOpen = _this$props.isOpen,
        autoFocus = _this$props.autoFocus,
        onEnter = _this$props.onEnter;

    if (isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });

      if (autoFocus) {
        this.setFocus();
      }
    }

    if (onEnter) {
      onEnter();
    } // traps focus inside the Modal, even if the browser address bar is focused


    document.addEventListener('focus', this.trapFocus, true);
    this._isMounted = true;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({
        isOpen: true
      }); // let render() renders Modal Dialog first

      return;
    } // now Modal Dialog is rendered and we can refer this._element and this._dialog


    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }

    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearBackdropAnimationTimeout();

    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this._element) {
      this.destroy();

      if (this.props.isOpen || this.state.isOpen) {
        this.close();
      }
    }

    document.removeEventListener('focus', this.trapFocus, true);
    this._isMounted = false;
  };

  _proto.trapFocus = function trapFocus(ev) {
    if (!this.props.trapFocus) {
      return;
    }

    if (!this._element) //element is not attached
      return;
    if (this._dialog && this._dialog.parentNode === ev.target) // initial focus when the Modal is opened
      return;
    if (this.modalIndex < Modal.openCount - 1) // last opened modal
      return;
    var children = this.getFocusableChildren();

    for (var i = 0; i < children.length; i++) {
      // focus is already inside the Modal
      if (children[i] === ev.target) return;
    }

    if (children.length > 0) {
      // otherwise focus the first focusable element in the Modal
      ev.preventDefault();
      ev.stopPropagation();
      children[0].focus();
    }
  };

  _proto.onOpened = function onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.modalTransition.onEntered || noop)(node, isAppearing);
  };

  _proto.onClosed = function onClosed(node) {
    var unmountOnClose = this.props.unmountOnClose; // so all methods get called before it is unmounted

    this.props.onClosed();
    (this.props.modalTransition.onExited || noop)(node);

    if (unmountOnClose) {
      this.destroy();
    }

    this.close();

    if (this._isMounted) {
      this.setState({
        isOpen: false
      });
    }
  };

  _proto.setFocus = function setFocus() {
    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
      this._dialog.parentNode.focus();
    }
  };

  _proto.getFocusableChildren = function getFocusableChildren() {
    return this._element.querySelectorAll(_utils__WEBPACK_IMPORTED_MODULE_8__.focusableElements.join(', '));
  };

  _proto.getFocusedChild = function getFocusedChild() {
    var currentFocus;
    var focusableChildren = this.getFocusableChildren();

    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }

    return currentFocus;
  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
  ;

  _proto.handleBackdropClick = function handleBackdropClick(e) {
    if (e.target === this._mouseDownElement) {
      e.stopPropagation();
      var backdrop = this._dialog ? this._dialog.parentNode : null;

      if (backdrop && e.target === backdrop && this.props.backdrop === 'static') {
        this.handleStaticBackdropAnimation();
      }

      if (!this.props.isOpen || this.props.backdrop !== true) return;

      if (backdrop && e.target === backdrop && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  };

  _proto.handleTab = function handleTab(e) {
    if (e.which !== 9) return;
    if (this.modalIndex < Modal.openCount - 1) return; // last opened modal

    var focusableChildren = this.getFocusableChildren();
    var totalFocusable = focusableChildren.length;
    if (totalFocusable === 0) return;
    var currentFocus = this.getFocusedChild();
    var focusedIndex = 0;

    for (var i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }

    if (e.shiftKey && focusedIndex === 0) {
      e.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
      e.preventDefault();
      focusableChildren[0].focus();
    }
  };

  _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
    this._mouseDownElement = e.target;
  };

  _proto.handleEscape = function handleEscape(e) {
    if (this.props.isOpen && e.keyCode === _utils__WEBPACK_IMPORTED_MODULE_8__.keyCodes.esc && this.props.toggle) {
      if (this.props.keyboard) {
        e.preventDefault();
        e.stopPropagation();
        this.props.toggle(e);
      } else if (this.props.backdrop === 'static') {
        e.preventDefault();
        e.stopPropagation();
        this.handleStaticBackdropAnimation();
      }
    }
  };

  _proto.handleStaticBackdropAnimation = function handleStaticBackdropAnimation() {
    var _this2 = this;

    this.clearBackdropAnimationTimeout();
    this.setState({
      showStaticBackdropAnimation: true
    });
    this._backdropAnimationTimeout = setTimeout(function () {
      _this2.setState({
        showStaticBackdropAnimation: false
      });
    }, 100);
  };

  _proto.init = function init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }

    if (!this._element) {
      this._element = document.createElement('div');

      this._element.setAttribute('tabindex', '-1');

      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this._mountContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getTarget)(this.props.container);

      this._mountContainer.appendChild(this._element);
    }

    this._originalBodyPadding = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getOriginalBodyPadding)();
    (0,_utils__WEBPACK_IMPORTED_MODULE_8__.conditionallyUpdateScrollbar)();

    if (Modal.openCount === 0) {
      document.body.className = classnames__WEBPACK_IMPORTED_MODULE_6___default()(document.body.className, (0,_utils__WEBPACK_IMPORTED_MODULE_8__.mapToCssModules)('modal-open', this.props.cssModule));
    }

    this.modalIndex = Modal.openCount;
    Modal.openCount += 1;
  };

  _proto.destroy = function destroy() {
    if (this._element) {
      this._mountContainer.removeChild(this._element);

      this._element = null;
    }

    this.manageFocusAfterClose();
  };

  _proto.manageFocusAfterClose = function manageFocusAfterClose() {
    if (this._triggeringElement) {
      var returnFocusAfterClose = this.props.returnFocusAfterClose;
      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  };

  _proto.close = function close() {
    if (Modal.openCount <= 1) {
      var modalOpenClassName = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.mapToCssModules)('modal-open', this.props.cssModule); // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`

      var modalOpenClassNameRegex = new RegExp("(^| )" + modalOpenClassName + "( |$)");
      document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
    }

    this.manageFocusAfterClose();
    Modal.openCount = Math.max(0, Modal.openCount - 1);
    (0,_utils__WEBPACK_IMPORTED_MODULE_8__.setScrollbarWidth)(this._originalBodyPadding);
  };

  _proto.renderModalDialog = function renderModalDialog() {
    var _classNames,
        _this3 = this;

    var attributes = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.omit)(this.props, propsToOmit);
    var dialogBaseClass = 'modal-dialog';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attributes, {
      className: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_6___default()(dialogBaseClass, this.props.className, (_classNames = {}, _classNames["modal-" + this.props.size] = this.props.size, _classNames[dialogBaseClass + "-centered"] = this.props.centered, _classNames[dialogBaseClass + "-scrollable"] = this.props.scrollable, _classNames)), this.props.cssModule),
      role: "document",
      ref: function ref(c) {
        _this3._dialog = c;
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_6___default()('modal-content', this.props.contentClassName), this.props.cssModule)
    }, this.props.children));
  };

  _proto.render = function render() {
    var unmountOnClose = this.props.unmountOnClose;

    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      var isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isModalHidden ? 'none' : 'block';
      var _this$props2 = this.props,
          wrapClassName = _this$props2.wrapClassName,
          modalClassName = _this$props2.modalClassName,
          backdropClassName = _this$props2.backdropClassName,
          cssModule = _this$props2.cssModule,
          isOpen = _this$props2.isOpen,
          backdrop = _this$props2.backdrop,
          role = _this$props2.role,
          labelledBy = _this$props2.labelledBy,
          external = _this$props2.external,
          innerRef = _this$props2.innerRef;
      var modalAttributes = {
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown,
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        style: {
          display: 'block'
        },
        'aria-labelledby': labelledBy,
        role: role,
        tabIndex: '-1'
      };
      var hasTransition = this.props.fade;

      var modalTransition = _objectSpread(_objectSpread(_objectSpread({}, _Fade__WEBPACK_IMPORTED_MODULE_7__["default"].defaultProps), this.props.modalTransition), {}, {
        baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
        timeout: hasTransition ? this.props.modalTransition.timeout : 0
      });

      var backdropTransition = _objectSpread(_objectSpread(_objectSpread({}, _Fade__WEBPACK_IMPORTED_MODULE_7__["default"].defaultProps), this.props.backdropTransition), {}, {
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
      });

      var Backdrop = backdrop && (hasTransition ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Fade__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, backdropTransition, {
        in: isOpen && !!backdrop,
        cssModule: cssModule,
        className: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_6___default()('modal-backdrop', backdropClassName), cssModule)
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
        className: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_6___default()('modal-backdrop', 'show', backdropClassName), cssModule)
      }));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Portal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        node: this._element
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
        className: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.mapToCssModules)(wrapClassName)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Fade__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, modalAttributes, modalTransition, {
        in: isOpen,
        onEntered: this.onOpened,
        onExited: this.onClosed,
        cssModule: cssModule,
        className: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_6___default()('modal', modalClassName, this.state.showStaticBackdropAnimation && 'modal-static'), cssModule),
        innerRef: innerRef
      }), external, this.renderModalDialog()), Backdrop));
    }

    return null;
  };

  _proto.clearBackdropAnimationTimeout = function clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = undefined;
    }
  };

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
Modal.openCount = 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./node_modules/reactstrap/es/ModalBody.js":
/*!*************************************************!*\
  !*** ./node_modules/reactstrap/es/ModalBody.js ***!
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

var ModalBody = function ModalBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'modal-body'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

ModalBody.propTypes = propTypes;
ModalBody.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalBody);

/***/ }),

/***/ "./node_modules/reactstrap/es/ModalFooter.js":
/*!***************************************************!*\
  !*** ./node_modules/reactstrap/es/ModalFooter.js ***!
  \***************************************************/
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

var ModalFooter = function ModalFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'modal-footer'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }));
};

ModalFooter.propTypes = propTypes;
ModalFooter.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalFooter);

/***/ }),

/***/ "./node_modules/reactstrap/es/ModalHeader.js":
/*!***************************************************!*\
  !*** ./node_modules/reactstrap/es/ModalHeader.js ***!
  \***************************************************/
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


var _excluded = ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "charCode", "close"];




var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  wrapTag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  toggle: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  closeAriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  charCode: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)]),
  close: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'h5',
  wrapTag: 'div',
  closeAriaLabel: 'Close',
  charCode: 215
};

var ModalHeader = function ModalHeader(props) {
  var closeButton;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      charCode = props.charCode,
      close = props.close,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'modal-header'), cssModule);

  if (!close && toggle) {
    var closeIcon = typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
    closeButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
      type: "button",
      onClick: toggle,
      className: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)('close', cssModule),
      "aria-label": closeAriaLabel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      "aria-hidden": "true"
    }, closeIcon));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(WrapTag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    className: classes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, {
    className: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)('modal-title', cssModule)
  }, children), close || closeButton);
};

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalHeader);

/***/ }),

/***/ "./node_modules/reactstrap/es/Pagination.js":
/*!**************************************************!*\
  !*** ./node_modules/reactstrap/es/Pagination.js ***!
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

/***/ }),

/***/ "./node_modules/reactstrap/es/Portal.js":
/*!**********************************************!*\
  !*** ./node_modules/reactstrap/es/Portal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");





var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired),
  node: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
};

var Portal = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Portal, _React$Component);

  function Portal() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Portal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }

    this.defaultNode = null;
  };

  _proto.render = function render() {
    if (!_utils__WEBPACK_IMPORTED_MODULE_4__.canUseDOM) {
      return null;
    }

    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }

    return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal(this.props.children, this.props.node || this.defaultNode);
  };

  return Portal;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

Portal.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);

/***/ }),

/***/ "./node_modules/reactstrap/es/Row.js":
/*!*******************************************!*\
  !*** ./node_modules/reactstrap/es/Row.js ***!
  \*******************************************/
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

/***/ }),

/***/ "./node_modules/reactstrap/es/UncontrolledButtonDropdown.js":
/*!******************************************************************!*\
  !*** ./node_modules/reactstrap/es/UncontrolledButtonDropdown.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UncontrolledButtonDropdown)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ButtonDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ButtonDropdown */ "./node_modules/reactstrap/es/ButtonDropdown.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var omitKeys = ['defaultOpen'];

var UncontrolledButtonDropdown = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(UncontrolledButtonDropdown, _Component);

  function UncontrolledButtonDropdown(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  var _proto = UncontrolledButtonDropdown.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_ButtonDropdown__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, (0,_utils__WEBPACK_IMPORTED_MODULE_7__.omit)(this.props, omitKeys)));
  };

  return UncontrolledButtonDropdown;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);


UncontrolledButtonDropdown.propTypes = _objectSpread({
  defaultOpen: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)
}, _ButtonDropdown__WEBPACK_IMPORTED_MODULE_6__["default"].propTypes);

/***/ }),

/***/ "./node_modules/lodash-es/_DataView.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_DataView.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var DataView = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'DataView');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataView);


/***/ }),

/***/ "./node_modules/lodash-es/_Hash.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_Hash.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hashClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hashClear.js */ "./node_modules/lodash-es/_hashClear.js");
/* harmony import */ var _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hashDelete.js */ "./node_modules/lodash-es/_hashDelete.js");
/* harmony import */ var _hashGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_hashGet.js */ "./node_modules/lodash-es/_hashGet.js");
/* harmony import */ var _hashHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_hashHas.js */ "./node_modules/lodash-es/_hashHas.js");
/* harmony import */ var _hashSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_hashSet.js */ "./node_modules/lodash-es/_hashSet.js");






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
Hash.prototype['delete'] = _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Hash.prototype.get = _hashGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Hash.prototype.has = _hashHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Hash.prototype.set = _hashSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hash);


/***/ }),

/***/ "./node_modules/lodash-es/_ListCache.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_ListCache.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_listCacheClear.js */ "./node_modules/lodash-es/_listCacheClear.js");
/* harmony import */ var _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_listCacheDelete.js */ "./node_modules/lodash-es/_listCacheDelete.js");
/* harmony import */ var _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_listCacheGet.js */ "./node_modules/lodash-es/_listCacheGet.js");
/* harmony import */ var _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_listCacheHas.js */ "./node_modules/lodash-es/_listCacheHas.js");
/* harmony import */ var _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_listCacheSet.js */ "./node_modules/lodash-es/_listCacheSet.js");






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
ListCache.prototype['delete'] = _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
ListCache.prototype.get = _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
ListCache.prototype.has = _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
ListCache.prototype.set = _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListCache);


/***/ }),

/***/ "./node_modules/lodash-es/_Map.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Map.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Map = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Map');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);


/***/ }),

/***/ "./node_modules/lodash-es/_MapCache.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_MapCache.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_mapCacheClear.js */ "./node_modules/lodash-es/_mapCacheClear.js");
/* harmony import */ var _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_mapCacheDelete.js */ "./node_modules/lodash-es/_mapCacheDelete.js");
/* harmony import */ var _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_mapCacheGet.js */ "./node_modules/lodash-es/_mapCacheGet.js");
/* harmony import */ var _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapCacheHas.js */ "./node_modules/lodash-es/_mapCacheHas.js");
/* harmony import */ var _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_mapCacheSet.js */ "./node_modules/lodash-es/_mapCacheSet.js");






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
MapCache.prototype['delete'] = _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
MapCache.prototype.get = _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
MapCache.prototype.has = _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
MapCache.prototype.set = _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapCache);


/***/ }),

/***/ "./node_modules/lodash-es/_Promise.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_Promise.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Promise = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Promise');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promise);


/***/ }),

/***/ "./node_modules/lodash-es/_Set.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Set.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Set = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Set');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Set);


/***/ }),

/***/ "./node_modules/lodash-es/_Stack.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_Stack.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _stackClear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stackClear.js */ "./node_modules/lodash-es/_stackClear.js");
/* harmony import */ var _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stackDelete.js */ "./node_modules/lodash-es/_stackDelete.js");
/* harmony import */ var _stackGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stackGet.js */ "./node_modules/lodash-es/_stackGet.js");
/* harmony import */ var _stackHas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_stackHas.js */ "./node_modules/lodash-es/_stackHas.js");
/* harmony import */ var _stackSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_stackSet.js */ "./node_modules/lodash-es/_stackSet.js");







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"](entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Stack.prototype['delete'] = _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Stack.prototype.get = _stackGet_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Stack.prototype.has = _stackHas_js__WEBPACK_IMPORTED_MODULE_4__["default"];
Stack.prototype.set = _stackSet_js__WEBPACK_IMPORTED_MODULE_5__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);


/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Symbol);


/***/ }),

/***/ "./node_modules/lodash-es/_Uint8Array.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_Uint8Array.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Uint8Array = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Uint8Array;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Uint8Array);


/***/ }),

/***/ "./node_modules/lodash-es/_WeakMap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_WeakMap.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var WeakMap = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'WeakMap');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeakMap);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayEach.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayEach.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayEach);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayFilter.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_arrayFilter.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayFilter);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayLikeKeys.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_arrayLikeKeys.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTimes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseTimes.js */ "./node_modules/lodash-es/_baseTimes.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/lodash-es/isArguments.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_isIndex.js */ "./node_modules/lodash-es/_isIndex.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/lodash-es/isTypedArray.js");







/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value),
      isArg = !isArr && (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value),
      isBuff = !isArr && !isArg && (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value),
      isType = !isArr && !isArg && !isBuff && (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? (0,_baseTimes_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_5__["default"])(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayLikeKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayMap.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_arrayMap.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayMap);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayPush.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayPush.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayPush);


/***/ }),

/***/ "./node_modules/lodash-es/_assignValue.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_assignValue.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseAssignValue.js */ "./node_modules/lodash-es/_baseAssignValue.js");
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && (0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(objValue, value)) ||
      (value === undefined && !(key in object))) {
    (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, value);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assignValue);


/***/ }),

/***/ "./node_modules/lodash-es/_assocIndexOf.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_assocIndexOf.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if ((0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assocIndexOf);


/***/ }),

/***/ "./node_modules/lodash-es/_baseAssign.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseAssign.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");



/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssign);


/***/ }),

/***/ "./node_modules/lodash-es/_baseAssignIn.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ "./node_modules/lodash-es/keysIn.js");



/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssignIn);


/***/ }),

/***/ "./node_modules/lodash-es/_baseAssignValue.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignValue.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defineProperty.js */ "./node_modules/lodash-es/_defineProperty.js");


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssignValue);


/***/ }),

/***/ "./node_modules/lodash-es/_baseClone.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseClone.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_Stack.js */ "./node_modules/lodash-es/_Stack.js");
/* harmony import */ var _arrayEach_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_arrayEach.js */ "./node_modules/lodash-es/_arrayEach.js");
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_assignValue.js */ "./node_modules/lodash-es/_assignValue.js");
/* harmony import */ var _baseAssign_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_baseAssign.js */ "./node_modules/lodash-es/_baseAssign.js");
/* harmony import */ var _baseAssignIn_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_baseAssignIn.js */ "./node_modules/lodash-es/_baseAssignIn.js");
/* harmony import */ var _cloneBuffer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_cloneBuffer.js */ "./node_modules/lodash-es/_cloneBuffer.js");
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_copyArray.js */ "./node_modules/lodash-es/_copyArray.js");
/* harmony import */ var _copySymbols_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_copySymbols.js */ "./node_modules/lodash-es/_copySymbols.js");
/* harmony import */ var _copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_copySymbolsIn.js */ "./node_modules/lodash-es/_copySymbolsIn.js");
/* harmony import */ var _getAllKeys_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_getAllKeys.js */ "./node_modules/lodash-es/_getAllKeys.js");
/* harmony import */ var _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_getAllKeysIn.js */ "./node_modules/lodash-es/_getAllKeysIn.js");
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_getTag.js */ "./node_modules/lodash-es/_getTag.js");
/* harmony import */ var _initCloneArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_initCloneArray.js */ "./node_modules/lodash-es/_initCloneArray.js");
/* harmony import */ var _initCloneByTag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_initCloneByTag.js */ "./node_modules/lodash-es/_initCloneByTag.js");
/* harmony import */ var _initCloneObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_initCloneObject.js */ "./node_modules/lodash-es/_initCloneObject.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isMap_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isMap.js */ "./node_modules/lodash-es/isMap.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _isSet_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./isSet.js */ "./node_modules/lodash-es/isSet.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./keysIn.js */ "./node_modules/lodash-es/keysIn.js");























/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  if (isArr) {
    result = (0,_initCloneArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
    if (!isDeep) {
      return (0,_copyArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value, result);
    }
  } else {
    var tag = (0,_getTag_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value),
        isFunc = tag == funcTag || tag == genTag;

    if ((0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value)) {
      return (0,_cloneBuffer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : (0,_initCloneObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(value);
      if (!isDeep) {
        return isFlat
          ? (0,_copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__["default"])(value, (0,_baseAssignIn_js__WEBPACK_IMPORTED_MODULE_9__["default"])(result, value))
          : (0,_copySymbols_js__WEBPACK_IMPORTED_MODULE_10__["default"])(value, (0,_baseAssign_js__WEBPACK_IMPORTED_MODULE_11__["default"])(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = (0,_initCloneByTag_js__WEBPACK_IMPORTED_MODULE_12__["default"])(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if ((0,_isSet_js__WEBPACK_IMPORTED_MODULE_14__["default"])(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if ((0,_isMap_js__WEBPACK_IMPORTED_MODULE_15__["default"])(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_16__["default"] : _getAllKeys_js__WEBPACK_IMPORTED_MODULE_17__["default"])
    : (isFlat ? _keysIn_js__WEBPACK_IMPORTED_MODULE_18__["default"] : _keys_js__WEBPACK_IMPORTED_MODULE_19__["default"]);

  var props = isArr ? undefined : keysFunc(value);
  (0,_arrayEach_js__WEBPACK_IMPORTED_MODULE_20__["default"])(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    (0,_assignValue_js__WEBPACK_IMPORTED_MODULE_21__["default"])(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseClone);


/***/ }),

/***/ "./node_modules/lodash-es/_baseCreate.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseCreate.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseCreate);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetAllKeys.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_baseGetAllKeys.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ "./node_modules/lodash-es/_arrayPush.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? result : (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, symbolsFunc(object));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetAllKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "./node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? (0,_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : (0,_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetTag);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsArguments.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsArguments.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == argsTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsArguments);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsMap.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsMap.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getTag.js */ "./node_modules/lodash-es/_getTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == mapTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsMap);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsNative.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsNative.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isMasked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isMasked.js */ "./node_modules/lodash-es/_isMasked.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toSource.js */ "./node_modules/lodash-es/_toSource.js");





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || (0,_isMasked_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  var pattern = (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0,_toSource_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsNative);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsSet.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getTag.js */ "./node_modules/lodash-es/_getTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == setTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsSet);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsTypedArray.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsTypedArray.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLength.js */ "./node_modules/lodash-es/isLength.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) &&
    (0,_isLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.length) && !!typedArrayTags[(0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsTypedArray);


/***/ }),

/***/ "./node_modules/lodash-es/_baseKeys.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeys.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");
/* harmony import */ var _nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeys.js */ "./node_modules/lodash-es/_nativeKeys.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!(0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return (0,_nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_baseKeysIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeysIn.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");
/* harmony import */ var _nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeysIn.js */ "./node_modules/lodash-es/_nativeKeysIn.js");




/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return (0,_nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var isProto = (0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseKeysIn);


/***/ }),

/***/ "./node_modules/lodash-es/_baseTimes.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseTimes.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTimes);


/***/ }),

/***/ "./node_modules/lodash-es/_baseToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseToString.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value, baseToString) + '';
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseToString);


/***/ }),

/***/ "./node_modules/lodash-es/_baseUnary.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseUnary.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUnary);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneArrayBuffer.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_cloneArrayBuffer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Uint8Array.js */ "./node_modules/lodash-es/_Uint8Array.js");


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](result).set(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](arrayBuffer));
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneArrayBuffer);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneBuffer.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneBuffer.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneBuffer);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneDataView.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_cloneDataView.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "./node_modules/lodash-es/_cloneArrayBuffer.js");


/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneDataView);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneRegExp.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneRegExp.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneRegExp);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneSymbol.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneSymbol.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");


/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneSymbol);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneTypedArray.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_cloneTypedArray.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "./node_modules/lodash-es/_cloneArrayBuffer.js");


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneTypedArray);


/***/ }),

/***/ "./node_modules/lodash-es/_copyArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_copyArray.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyArray);


/***/ }),

/***/ "./node_modules/lodash-es/_copyObject.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_copyObject.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_assignValue.js */ "./node_modules/lodash-es/_assignValue.js");
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseAssignValue.js */ "./node_modules/lodash-es/_baseAssignValue.js");



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, newValue);
    } else {
      (0,_assignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, newValue);
    }
  }
  return object;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyObject);


/***/ }),

/***/ "./node_modules/lodash-es/_copySymbols.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_copySymbols.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbols.js */ "./node_modules/lodash-es/_getSymbols.js");



/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_getSymbols_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copySymbols);


/***/ }),

/***/ "./node_modules/lodash-es/_copySymbolsIn.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_copySymbolsIn.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbolsIn.js */ "./node_modules/lodash-es/_getSymbolsIn.js");



/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copySymbolsIn);


/***/ }),

/***/ "./node_modules/lodash-es/_coreJsData.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_coreJsData.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Used to detect overreaching core-js shims. */
var coreJsData = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"]["__core-js_shared__"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coreJsData);


/***/ }),

/***/ "./node_modules/lodash-es/_defineProperty.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_defineProperty.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");


var defineProperty = (function() {
  try {
    var func = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineProperty);


/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (freeGlobal);


/***/ }),

/***/ "./node_modules/lodash-es/_getAllKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ "./node_modules/lodash-es/_baseGetAllKeys.js");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ "./node_modules/lodash-es/_getSymbols.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return (0,_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keys_js__WEBPACK_IMPORTED_MODULE_1__["default"], _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_getAllKeysIn.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeysIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ "./node_modules/lodash-es/_baseGetAllKeys.js");
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbolsIn.js */ "./node_modules/lodash-es/_getSymbolsIn.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ "./node_modules/lodash-es/keysIn.js");




/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return (0,_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"], _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllKeysIn);


/***/ }),

/***/ "./node_modules/lodash-es/_getMapData.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getMapData.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isKeyable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKeyable.js */ "./node_modules/lodash-es/_isKeyable.js");


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return (0,_isKeyable_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMapData);


/***/ }),

/***/ "./node_modules/lodash-es/_getNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getNative.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsNative.js */ "./node_modules/lodash-es/_baseIsNative.js");
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getValue.js */ "./node_modules/lodash-es/_getValue.js");



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = (0,_getValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key);
  return (0,_baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) ? value : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNative);


/***/ }),

/***/ "./node_modules/lodash-es/_getPrototype.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getPrototype.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "./node_modules/lodash-es/_overArg.js");


/** Built-in value references. */
var getPrototype = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPrototype);


/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRawTag);


/***/ }),

/***/ "./node_modules/lodash-es/_getSymbols.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getSymbols.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayFilter.js */ "./node_modules/lodash-es/_arrayFilter.js");
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stubArray.js */ "./node_modules/lodash-es/stubArray.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return (0,_arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSymbols);


/***/ }),

/***/ "./node_modules/lodash-es/_getSymbolsIn.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getSymbolsIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ "./node_modules/lodash-es/_arrayPush.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ "./node_modules/lodash-es/_getSymbols.js");
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stubArray.js */ "./node_modules/lodash-es/stubArray.js");





/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function(object) {
  var result = [];
  while (object) {
    (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, (0,_getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object));
    object = (0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object);
  }
  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSymbolsIn);


/***/ }),

/***/ "./node_modules/lodash-es/_getTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_getTag.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_DataView.js */ "./node_modules/lodash-es/_DataView.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");
/* harmony import */ var _Promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Promise.js */ "./node_modules/lodash-es/_Promise.js");
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_Set.js */ "./node_modules/lodash-es/_Set.js");
/* harmony import */ var _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_WeakMap.js */ "./node_modules/lodash-es/_WeakMap.js");
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_toSource.js */ "./node_modules/lodash-es/_toSource.js");








/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
    mapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
    promiseCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
    setCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
    weakMapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"];

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"] && getTag(new _DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"](new ArrayBuffer(1))) != dataViewTag) ||
    (_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"] && getTag(new _Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]) != mapTag) ||
    (_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"] && getTag(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"].resolve()) != promiseTag) ||
    (_Set_js__WEBPACK_IMPORTED_MODULE_4__["default"] && getTag(new _Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]) != setTag) ||
    (_WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"] && getTag(new _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]) != weakMapTag)) {
  getTag = function(value) {
    var result = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTag);


/***/ }),

/***/ "./node_modules/lodash-es/_getValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_getValue.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValue);


/***/ }),

/***/ "./node_modules/lodash-es/_hashClear.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_hashClear.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? (0,_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(null) : {};
  this.size = 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashClear);


/***/ }),

/***/ "./node_modules/lodash-es/_hashDelete.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_hashDelete.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_hashGet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashGet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashGet);


/***/ }),

/***/ "./node_modules/lodash-es/_hashHas.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashHas.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashHas);


/***/ }),

/***/ "./node_modules/lodash-es/_hashSet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashSet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashSet);


/***/ }),

/***/ "./node_modules/lodash-es/_initCloneArray.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneArray.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneArray);


/***/ }),

/***/ "./node_modules/lodash-es/_initCloneByTag.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneByTag.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "./node_modules/lodash-es/_cloneArrayBuffer.js");
/* harmony import */ var _cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cloneDataView.js */ "./node_modules/lodash-es/_cloneDataView.js");
/* harmony import */ var _cloneRegExp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_cloneRegExp.js */ "./node_modules/lodash-es/_cloneRegExp.js");
/* harmony import */ var _cloneSymbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_cloneSymbol.js */ "./node_modules/lodash-es/_cloneSymbol.js");
/* harmony import */ var _cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cloneTypedArray.js */ "./node_modules/lodash-es/_cloneTypedArray.js");






/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return (0,_cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return (0,_cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return (0,_cloneRegExp_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return (0,_cloneSymbol_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneByTag);


/***/ }),

/***/ "./node_modules/lodash-es/_initCloneObject.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneObject.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseCreate.js */ "./node_modules/lodash-es/_baseCreate.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !(0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object))
    ? (0,_baseCreate_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object))
    : {};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneObject);


/***/ }),

/***/ "./node_modules/lodash-es/_isIndex.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_isIndex.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isIndex);


/***/ }),

/***/ "./node_modules/lodash-es/_isKeyable.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_isKeyable.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isKeyable);


/***/ }),

/***/ "./node_modules/lodash-es/_isMasked.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_isMasked.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_coreJsData.js */ "./node_modules/lodash-es/_coreJsData.js");


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMasked);


/***/ }),

/***/ "./node_modules/lodash-es/_isPrototype.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_isPrototype.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPrototype);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheClear.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheClear.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheClear);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheDelete.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheDelete.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheGet.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheGet.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheGet);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheHas.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheHas.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.__data__, key) > -1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheHas);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheSet.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheSet.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheSet);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheClear.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheClear.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Hash.js */ "./node_modules/lodash-es/_Hash.js");
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    'map': new (_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || _ListCache_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
    'string': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheClear);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheDelete.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheDelete.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheGet.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheGet.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).get(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheGet);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheHas.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheHas.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).has(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheHas);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheSet.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheSet.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheSet);


/***/ }),

/***/ "./node_modules/lodash-es/_memoizeCapped.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_memoizeCapped.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _memoize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memoize.js */ "./node_modules/lodash-es/memoize.js");


/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = (0,_memoize_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeCapped);


/***/ }),

/***/ "./node_modules/lodash-es/_nativeCreate.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeCreate.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");


/* Built-in method references that are verified to be native. */
var nativeCreate = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'create');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeCreate);


/***/ }),

/***/ "./node_modules/lodash-es/_nativeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "./node_modules/lodash-es/_overArg.js");


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.keys, Object);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_nativeKeysIn.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeysIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeKeysIn);


/***/ }),

/***/ "./node_modules/lodash-es/_nodeUtil.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_nodeUtil.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nodeUtil);


/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectToString);


/***/ }),

/***/ "./node_modules/lodash-es/_overArg.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_overArg.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overArg);


/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);


/***/ }),

/***/ "./node_modules/lodash-es/_stackClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_stackClear.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  this.size = 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackClear);


/***/ }),

/***/ "./node_modules/lodash-es/_stackDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_stackDelete.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_stackGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackGet.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackGet);


/***/ }),

/***/ "./node_modules/lodash-es/_stackHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackHas.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackHas);


/***/ }),

/***/ "./node_modules/lodash-es/_stackSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackSet.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_MapCache.js */ "./node_modules/lodash-es/_MapCache.js");




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var pairs = data.__data__;
    if (!_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_2__["default"](pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackSet);


/***/ }),

/***/ "./node_modules/lodash-es/_stringToPath.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_stringToPath.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_memoizeCapped.js */ "./node_modules/lodash-es/_memoizeCapped.js");


/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = (0,_memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringToPath);


/***/ }),

/***/ "./node_modules/lodash-es/_toKey.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_toKey.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toKey);


/***/ }),

/***/ "./node_modules/lodash-es/_toSource.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_toSource.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toSource);


/***/ }),

/***/ "./node_modules/lodash-es/clone.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/clone.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseClone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseClone.js */ "./node_modules/lodash-es/_baseClone.js");


/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return (0,_baseClone_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, CLONE_SYMBOLS_FLAG);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clone);


/***/ }),

/***/ "./node_modules/lodash-es/cloneDeep.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/cloneDeep.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseClone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseClone.js */ "./node_modules/lodash-es/_baseClone.js");


/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return (0,_baseClone_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneDeep);


/***/ }),

/***/ "./node_modules/lodash-es/eq.js":
/*!**************************************!*\
  !*** ./node_modules/lodash-es/eq.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eq);


/***/ }),

/***/ "./node_modules/lodash-es/isArguments.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArguments.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsArguments.js */ "./node_modules/lodash-es/_baseIsArguments.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = (0,_baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function() { return arguments; }()) ? _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArguments);


/***/ }),

/***/ "./node_modules/lodash-es/isArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isArray.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArray);


/***/ }),

/***/ "./node_modules/lodash-es/isArrayLike.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArrayLike.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isLength.js */ "./node_modules/lodash-es/isLength.js");



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.length) && !(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArrayLike);


/***/ }),

/***/ "./node_modules/lodash-es/isBuffer.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isBuffer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stubFalse.js */ "./node_modules/lodash-es/stubFalse.js");



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBuffer);


/***/ }),

/***/ "./node_modules/lodash-es/isFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/isFunction.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFunction);


/***/ }),

/***/ "./node_modules/lodash-es/isLength.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isLength.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLength);


/***/ }),

/***/ "./node_modules/lodash-es/isMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/isMap.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsMap.js */ "./node_modules/lodash-es/_baseIsMap.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ "./node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsMap = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsMap) : _baseIsMap_js__WEBPACK_IMPORTED_MODULE_2__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMap);


/***/ }),

/***/ "./node_modules/lodash-es/isObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isObject.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);


/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObjectLike);


/***/ }),

/***/ "./node_modules/lodash-es/isPlainObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/isPlainObject.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) != objectTag) {
    return false;
  }
  var proto = (0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPlainObject);


/***/ }),

/***/ "./node_modules/lodash-es/isSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/isSet.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsSet.js */ "./node_modules/lodash-es/_baseIsSet.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ "./node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsSet = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsSet) : _baseIsSet_js__WEBPACK_IMPORTED_MODULE_2__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSet);


/***/ }),

/***/ "./node_modules/lodash-es/isSymbol.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isSymbol.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    ((0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == symbolTag);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSymbol);


/***/ }),

/***/ "./node_modules/lodash-es/isTypedArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isTypedArray.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsTypedArray.js */ "./node_modules/lodash-es/_baseIsTypedArray.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ "./node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsTypedArray) : _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTypedArray);


/***/ }),

/***/ "./node_modules/lodash-es/keys.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/keys.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ "./node_modules/lodash-es/_arrayLikeKeys.js");
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseKeys.js */ "./node_modules/lodash-es/_baseKeys.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) : (0,_baseKeys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);


/***/ }),

/***/ "./node_modules/lodash-es/keysIn.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/keysIn.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ "./node_modules/lodash-es/_arrayLikeKeys.js");
/* harmony import */ var _baseKeysIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseKeysIn.js */ "./node_modules/lodash-es/_baseKeysIn.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, true) : (0,_baseKeysIn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keysIn);


/***/ }),

/***/ "./node_modules/lodash-es/memoize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/memoize.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MapCache.js */ "./node_modules/lodash-es/_MapCache.js");


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ "./node_modules/lodash-es/stubArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubArray.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubArray);


/***/ }),

/***/ "./node_modules/lodash-es/stubFalse.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubFalse.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubFalse);


/***/ }),

/***/ "./node_modules/lodash-es/toPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/toPath.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_copyArray.js */ "./node_modules/lodash-es/_copyArray.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");
/* harmony import */ var _stringToPath_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_stringToPath.js */ "./node_modules/lodash-es/_stringToPath.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_toKey.js */ "./node_modules/lodash-es/_toKey.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toString.js */ "./node_modules/lodash-es/toString.js");








/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, _toKey_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
  return (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value) ? [value] : (0,_copyArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_stringToPath_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_toString_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toPath);


/***/ }),

/***/ "./node_modules/lodash-es/toString.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toString.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseToString.js */ "./node_modules/lodash-es/_baseToString.js");


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : (0,_baseToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toString);


/***/ })

}]);