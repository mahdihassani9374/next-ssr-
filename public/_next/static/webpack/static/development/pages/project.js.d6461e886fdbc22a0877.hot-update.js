webpackHotUpdate("static\\development\\pages\\project.js",{

/***/ "./pages/components/Layout.js":
/*!************************************!*\
  !*** ./pages/components/Layout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-ga */ "./node_modules/next-ga/index.js");
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_ga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "E:\\project\\react\\next-ssr-\\pages\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;







function Layout() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()(window).scroll(function () {
      scroll_menu();
    });
    scroll_menu();

    function scroll_menu() {
      var scroll = jquery__WEBPACK_IMPORTED_MODULE_5___default()(window).scrollTop();

      if (scroll > 58) {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()('.navbar.navbar-inverse').addClass('navbar-scroll');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()('.navbar.navbar-inverse').removeClass('navbar-scroll');
      }
    }

    window.addEventListener('load', handeLoad);
  }, []);

  var handeLoad = function handeLoad() {
    setLoading(false);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("link", {
    rel: "stylesheet",
    href: "static/lib/bootstrap/dist/css/bootstrap.min.rtl.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "static/lib/font-awesome-4.7.0/css/font-awesome.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "static/fonts/font-fa.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "static/css/animate.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "static/css/styles.css?v=0.0.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "static/lib/pe-icon-7-stroke/css/helper.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "static/lib/pe-icon-7-stroke/css/pe-icon-7-stroke.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "static/css/override.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("meta", {
    charset: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: "\u0648\u0628 \u0633\u0627\u06CC\u062A \u0634\u062E\u0635\u06CC \u0645\u0647\u062F\u06CC \u0648 \u0645\u0628\u06CC\u0646 \u062D\u0633\u0646\u06CC",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("meta", {
    name: "keywords",
    content: "\u0645\u0647\u062F\u06CC \u062D\u0633\u0646\u06CC  , \u0645\u0628\u06CC\u0646 \u062D\u0633\u0646\u06CC  , \u062D\u0633\u0646\u06CC  , \u0628\u0631\u0627\u0631\u062F\u0627\u0646 \u062D\u0633\u0646\u06CC  , \u062F\u0648\u0642\u0644\u0648\u0647\u0627 , \u062D\u0633\u0646\u06CC \u062F\u0648\u0642\u0644\u0648 , \u0645\u0647\u062F\u06CC \u0648 \u0645\u0628\u06CC\u0646 \u062D\u0633\u0646\u06CC , \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06CC\u0633\u06CC  ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("meta", {
    name: "author",
    content: "John Doe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: "\u0648\u0628 \u0633\u0627\u06CC\u062A \u0634\u062E\u0635\u06CC \u0645\u0647\u062F\u06CC \u0648 \u0645\u0628\u06CC\u0646 \u062D\u0633\u0646\u06CC",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "http://mobinmahdi.ir",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "static/images/profile.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("link", {
    rel: "shortcut icon",
    type: "image/png",
    href: "static/images/icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("script", {
    src: "static/lib/jquery-3.1.1/jquery-3.1.1.min.js",
    type: "text/javascript",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("script", {
    src: "static/lib/bootstrap/dist/js/bootstrap.min.js",
    type: "text/javascript",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), loading ? __jsx("div", {
    className: "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "loading-spin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })) : '');
}

/* harmony default export */ __webpack_exports__["default"] = (next_ga__WEBPACK_IMPORTED_MODULE_3___default()("UA-123462599-1", next_router__WEBPACK_IMPORTED_MODULE_2___default.a)(Layout));

/***/ })

})
//# sourceMappingURL=project.js.d6461e886fdbc22a0877.hot-update.js.map