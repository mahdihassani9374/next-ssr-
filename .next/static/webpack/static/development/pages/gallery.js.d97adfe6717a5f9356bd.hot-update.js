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
  var gallery = ['../../static/images/9.jpg', '../../static/images/profile.jpg', '../../static/images/profile1.jpg', '../../static/images/profile2.jpg', // '../../static/images/4.jpg',
  '../../static/images/5.jpg', '../../static/images/6.jpg', '../../static/images/7.jpg' // '../../static/images/8.JPG'
  ];
  return __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "row gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, gallery.map(function (item, index) {
    return __jsx(react_wow__WEBPACK_IMPORTED_MODULE_1___default.a, {
      animation: "zoomIn",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("div", {
      className: "col-md-3 col-xs-6 col-sm-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("img", {
      src: item,
      className: "img-responsive img-thumbnail img-gallery",
      alt: "\u0645\u0647\u062F\u06CC \u0648 \u0645\u0628\u06CC\u0646 \u062D\u0633\u0646\u06CC ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ })

})
//# sourceMappingURL=gallery.js.d97adfe6717a5f9356bd.hot-update.js.map