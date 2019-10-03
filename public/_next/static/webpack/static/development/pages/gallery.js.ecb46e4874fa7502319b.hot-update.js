webpackHotUpdate("static\\development\\pages\\gallery.js",{

/***/ "./pages/components/Layout.js":
/*!************************************!*\
  !*** ./pages/components/Layout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-ga */ "./node_modules/next-ga/index.js");
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_ga__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\project\\react\\next-ssr-\\pages\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Layout() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("link", {
    rel: "stylesheet",
    href: "static/lib/bootstrap/dist/css/bootstrap.min.rtl.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "static/lib/font-awesome-4.7.0/css/font-awesome.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "static/fonts/font-fa.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "static/css/animate.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "static/css/styles.css?v=0.0.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "static/lib/pe-icon-7-stroke/css/helper.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "static/lib/pe-icon-7-stroke/css/pe-icon-7-stroke.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "static/css/override.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("meta", {
    charset: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: "\u0648\u0628 \u0633\u0627\u06CC\u062A \u0634\u062E\u0635\u06CC \u0645\u0647\u062F\u06CC \u0648 \u0645\u0628\u06CC\u0646 \u062D\u0633\u0646\u06CC",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("meta", {
    name: "keywords",
    content: "\u0645\u0647\u062F\u06CC \u062D\u0633\u0646\u06CC  , \u0645\u0628\u06CC\u0646 \u062D\u0633\u0646\u06CC  , \u062D\u0633\u0646\u06CC  , \u0628\u0631\u0627\u0631\u062F\u0627\u0646 \u062D\u0633\u0646\u06CC  , \u062F\u0648\u0642\u0644\u0648\u0647\u0627 , \u062D\u0633\u0646\u06CC \u062F\u0648\u0642\u0644\u0648 , \u0645\u0647\u062F\u06CC \u0648 \u0645\u0628\u06CC\u0646 \u062D\u0633\u0646\u06CC , \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06CC\u0633\u06CC  ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("meta", {
    name: "author",
    content: "John Doe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: "\u0648\u0628 \u0633\u0627\u06CC\u062A \u0634\u062E\u0635\u06CC \u0645\u0647\u062F\u06CC \u0648 \u0645\u0628\u06CC\u0646 \u062D\u0633\u0646\u06CC",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "http://mobinmahdi.ir",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "static/images/profile.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("link", {
    rel: "shortcut icon",
    type: "image/png",
    href: "static/images/icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("script", {
    src: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (next_ga__WEBPACK_IMPORTED_MODULE_4___default()("UA-123462599-1", next_router__WEBPACK_IMPORTED_MODULE_3___default.a)(Layout));

/***/ })

})
//# sourceMappingURL=gallery.js.ecb46e4874fa7502319b.hot-update.js.map