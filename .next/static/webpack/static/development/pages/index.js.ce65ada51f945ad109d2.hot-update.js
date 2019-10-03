webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/About.js":
/*!***********************************!*\
  !*** ./pages/components/About.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-wow */ "./node_modules/react-wow/dist/index.js");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\project\\react\\next-ssr-\\pages\\components\\About.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function About() {
  var user = [{
    name: 'مهدی حسنی ',
    title: 'برنامه نویس سمت کلاینت',
    desc: 'ui developer',
    skile: [{
      name: 'html5',
      range: '90%'
    }, {
      name: 'css3',
      range: '80%'
    }, {
      name: 'javascript',
      range: '70%'
    }, {
      name: 'react',
      range: '60%'
    }, {
      name: 'seo',
      range: '60%'
    }, {
      name: 'react-native',
      range: '50%'
    }, {
      name: 'vue js',
      range: '40%'
    }]
  }, {
    name: 'مبین حسنی ',
    title: 'برنامه نویس سمت سرور',
    desc: 'back end developer',
    skile: [{
      name: 'c#',
      range: '90%'
    }, {
      name: '.net core ',
      range: '80%'
    }, {
      name: 'mvc  ',
      range: '80%'
    }, {
      name: 'ef core ',
      range: '80%'
    }, {
      name: 'xamarin',
      range: '60%'
    }, {
      name: 'mobgo DB',
      range: '50%'
    }]
  }];
  return __jsx("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_1___default.a, {
    animation: "zoomIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "section__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\u062F\u0631\u0628\u0627\u0631\u0647 \u0647\u0627"), __jsx("div", {
    className: "section__subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0627 - \u0645\u0647\u062F\u06CC \u0645\u0628\u06CC\u0646 \u062D\u0633\u0646\u06CC"), __jsx("div", {
    className: "section__desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06CC\u0633 \u0648 \u0637\u0631\u0627\u062D \u0633\u0627\u06CC\u062A - \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06CC\u0633 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0647\u0627\u06CC \u0627\u0646\u062F\u0631\u0648\u06CC\u062F\u06CC \u0648 \u0622\u06CC \u0627\u0648 \u0627\u0633")))), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, user.map(function (item, index) {
    return __jsx("div", {
      className: "col-md-6 col-xs-12 col-sm-12 p-40",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("div", {
      className: "about__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, item.name), __jsx("div", {
      className: "about__desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, item.title), __jsx("div", {
      className: "about__desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, item.desc), __jsx("div", {
      className: "seperator",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), item.skile.map(function (skile, index) {
      return __jsx("div", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("div", {
        className: "about__desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, skile.name), __jsx("div", {
        className: "progress",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_1___default.a, {
        animation: "bounceInRight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("div", {
        className: "progress-bar progress-bar-success",
        role: "progressbar",
        "aria-valuenow": "70",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        style: {
          width: skile.range
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, skile.range))));
    }));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./pages/components/Home.js":
/*!**********************************!*\
  !*** ./pages/components/Home.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./pages/components/Header.js");
/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services */ "./pages/components/Services.js");
/* harmony import */ var _Bg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bg */ "./pages/components/Bg.js");
/* harmony import */ var _Bg1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Bg1 */ "./pages/components/Bg1.js");
/* harmony import */ var _ProjectItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectItem */ "./pages/components/ProjectItem.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./About */ "./pages/components/About.js");
var _jsxFileName = "E:\\project\\react\\next-ssr-\\pages\\components\\Home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Home() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(_Services__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_Bg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_ProjectItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_Bg1__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.ce65ada51f945ad109d2.hot-update.js.map