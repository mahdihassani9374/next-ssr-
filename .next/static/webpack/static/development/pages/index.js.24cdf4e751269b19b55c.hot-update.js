webpackHotUpdate("static\\development\\pages\\index.js",{

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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Gallery() {
  var gallery = ['../../static/images/9.png', //'../../static/images/profile.png',
  '../../static/images/profile1.png', '../../static/images/profile2.png', // '../../static/images/4.png',
  //'../../static/images/5.png',
  //'../../static/images/6.png',
  //'../../static/images/7.png',
  //'../../static/images/11.png',
  //'../../static/images/12.png',
  //'../../static/images/10.png',
  '../../static/images/3.JPG' // '../../static/images/8.JPG'
  ];
  return __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row gallery"
  }, gallery.map(function (item, index) {
    return __jsx(react_wow__WEBPACK_IMPORTED_MODULE_1___default.a, {
      animation: "zoomIn",
      key: index
    }, __jsx("div", {
      className: "col-md-3 col-xs-6 col-sm-3"
    }, __jsx("img", {
      src: item,
      className: "img-responsive img-thumbnail img-gallery",
      alt: "\u0645\u0647\u062F\u06CC \u0648 \u0645\u0628\u06CC\u0646 \u062D\u0633\u0646\u06CC "
    })));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ })

})
//# sourceMappingURL=index.js.24cdf4e751269b19b55c.hot-update.js.map