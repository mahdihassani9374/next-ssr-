webpackHotUpdate("static\\development\\pages\\gallery.js",{

/***/ "./pages/components/Gallery.js":
/*!*************************************!*\
  !*** ./pages/components/Gallery.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-wow */ "./node_modules/react-wow/dist/index.js");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\project\\react\\next-ssr-\\pages\\components\\Gallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Gallery() {
  var gallery = ['../../static/images/profile.jpg', '../../static/images/profile1.jpg', '../../static/images/profile2.jpg', '../../static/images/4.jpg', '../../static/images/5.jpg', '../../static/images/6.jpg', '../../static/images/7.jpg', '../../static/images/8.JPG'];
  return __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "row gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, gallery.map(function (item, index) {
    return __jsx(react_wow__WEBPACK_IMPORTED_MODULE_1___default.a, {
      animation: "zoomIn",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("div", {
      className: "col-md-3 col-xs-6 col-sm-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("img", {
      src: item,
      className: "img-responsive img-thumbnail img-gallery",
      alt: "\u0645\u0647\u062F\u06CC \u0648 \u0645\u0628\u06CC\u0646 \u062D\u0633\u0646\u06CC ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    })));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./pages/components/ProjectItem.js":
false,

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header1 */ "./pages/components/Header1.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/About */ "./pages/components/About.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer */ "./pages/components/Footer.js");
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Gallery */ "./pages/components/Gallery.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Layout */ "./pages/components/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "E:\\project\\react\\next-ssr-\\pages\\gallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Project = function Project() {
  return __jsx("div", {
    dir: "rtl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "  \u06AF\u0627\u0644\u0631\u06CC \u0639\u06A9\u0633 - \u0645\u0647\u062F\u06CC \u0648 \u0645\u0628\u06CC\u0646 \u062D\u0633\u0646\u06CC ")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_components_Header1__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: "pe-7s-diamond",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, " \u06AF\u0627\u0644\u0631\u06CC \u0639\u06A9\u0633 - \u0645\u0647\u062F\u06CC \u0645\u0628\u06CC\u0646 \u062D\u0633\u0646\u06CC "), __jsx(_components_Gallery__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=gallery.js.f751cb5f91bd17d3dc6c.hot-update.js.map