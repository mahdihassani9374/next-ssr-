(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/h46":function(e,n,a){a("cHUd")("Map")},LX0d:function(e,n,a){e.exports=a("UDep")},UDep:function(e,n,a){a("wgeU"),a("FlQf"),a("bBy9"),a("g33z"),a("XLbu"),a("/h46"),a("dVTT"),e.exports=a("WEpk").Map},"W3S/":function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Header",function(){return a("sGm0")}])},XLbu:function(e,n,a){var t=a("Y7ZC");t(t.P+t.R,"Map",{toJSON:a("8iia")("Map")})},YFqc:function(e,n,a){e.exports=a("cTJO")},cTJO:function(e,n,a){"use strict";var t=a("/HRN"),r=a("WaGi"),o=a("ZDA2"),s=a("/+P4"),i=a("N9n2"),c=a("5Uuq"),l=a("KI45");n.__esModule=!0,n.default=void 0;var u,p=l(a("LX0d")),f=a("CxY0"),h=c(a("q1tI")),d=(l(a("17x9")),l(a("nOHt"))),m=(a("P5f7"),a("g/15"));function v(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var _=new p.default,b=window.IntersectionObserver;function g(){return u||(b?u=new b(function(e){e.forEach(function(e){if(_.has(e.target)){var n=_.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),_.delete(e.target),n())}})},{rootMargin:"200px"}):void 0)}var N=function(e){function n(e){var a;return t(this,n),(a=o(this,s(n).call(this,e))).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var n=null,a=null,t=null;return function(r,o){if(t&&r===n&&o===a)return t;var s=e(r,o);return n=r,a=o,t=s,s}}(function(e,n){return{href:v(e),as:n?v(n):n}}),a.linkClicked=function(e){var n=e.currentTarget,t=n.nodeName,r=n.target;if("A"!==t||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=a.formatUrls(a.props.href,a.props.as),s=o.href,i=o.as;if(function(e){var n=(0,f.parse)(e,!1,!0),a=(0,f.parse)((0,m.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===a.protocol&&n.host===a.host}(s)){var c=window.location.pathname;s=(0,f.resolve)(c,s),i=i?(0,f.resolve)(c,i):s,e.preventDefault();var l=a.props.scroll;null==l&&(l=i.indexOf("#")<0),d.default[a.props.replace?"replace":"push"](s,i,{shallow:a.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})}}},a.p=!1!==e.prefetch,a}return i(n,e),r(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var n=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,n){var a=g();return a?(a.observe(e),_.set(e,n),function(){try{a.unobserve(e)}catch(n){console.error(n)}_.delete(e)}):function(){}}(e,function(){n.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href,a=(0,f.resolve)(e,n);d.default.prefetch(a)}}},{key:"render",value:function(){var e=this,n=this.props.children,a=this.formatUrls(this.props.href,this.props.as),t=a.href,r=a.as;"string"===typeof n&&(n=h.default.createElement("a",null,n));var o=h.Children.only(n),s={ref:function(n){e.handleRef(n),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(n):"object"===typeof o.ref&&(o.ref.current=n))},onMouseEnter:function(n){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(n),e.prefetch()},onClick:function(n){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(s.href=r||t),h.default.cloneElement(o,s)}}]),n}(h.Component);N.propTypes=void 0;var y=N;n.default=y},dVTT:function(e,n,a){a("aPfg")("Map")},g33z:function(e,n,a){"use strict";var t=a("Wu5q"),r=a("n3ko");e.exports=a("raTm")("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var n=t.getEntry(r(this,"Map"),e);return n&&n.v},set:function(e,n){return t.def(r(this,"Map"),0===e?0:e,n)}},t,!0)},sGm0:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),r=a.n(t),o=a("2RFb"),s=a.n(o),i=a("YFqc"),c=a.n(i),l=r.a.createElement;n.default=function(){return l("header",{className:"header"},l("nav",{className:"navbar navbar-inverse"},l("div",{className:"container"},l("div",{className:"navbar-header"},l("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar"},l("span",{className:"icon-bar"}),l("span",{className:"icon-bar"}),l("span",{className:"icon-bar"}))),l("div",{className:"collapse navbar-collapse",id:"myNavbar"},l("ul",{className:"nav navbar-nav"},l("li",null,l(c.a,{href:"/"},l("a",null,"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc"))),l("li",null,l(c.a,{href:"/project"},l("a",null,"\u0646\u0645\u0648\u0646\u0647 \u06a9\u0627\u0631\u0647\u0627 "))),l("li",null,l(c.a,{href:"/about"},l("a",null,"\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0627")))),l("ul",{className:"nav navbar-nav navbar-right"},l("li",null,l(c.a,{href:"/gallery"},l("a",null,"\u06af\u0627\u0644\u0631\u06cc \u0639\u06a9\u0633"))))))),l("section",{className:"header__section"},l(s.a,{animation:"bounceInDown"},l("h1",{className:"header__section__title"},"\u0645\u0647\u062f\u06cc \u0648 \u0645\u0628\u06cc\u0646 \u062d\u0633\u0646\u06cc ")),l(s.a,{animation:"zoomIn"},l("div",{className:"text-center"},l("img",{src:"../static/images/profile.png",className:"header__section__img",alt:"\u0645\u0647\u062f\u06cc \u0648 \u0645\u0628\u06cc\u0646 \u062d\u0633\u0646\u06cc"}))),l("div",{className:"text-center"},l(s.a,{animation:"bounceInUp"},l("h4",{className:"header__section__desc"},"programmer and web designer")),l(s.a,{animation:"bounceInUp"},l("h4",{className:"header__section__desc"},"\u0645\u0627 \u0639\u0627\u0634\u0642 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06cc\u0633\u06cc \u0627\u06cc\u0645")),l(s.a,{animation:"bounceInLeft"},l("p",{className:"padding-10 line-height-30",style:{fontSize:12}}," \u0628\u06cc\u0634\u062a\u0631 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06cc\u0633\u0627\u0646 \u062e\u0648\u0628 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06cc\u0633\u06cc \u0645\u06cc \u06a9\u0646\u0646\u062f \u0646\u0647 \u0628\u0647 \u0627\u06cc\u0646 \u0639\u0644\u062a \u06a9\u0647 \u0627\u0646\u062a\u0638\u0627\u0631 \u062f\u0627\u0631\u0646\u062f \u062f\u0633\u062a\u0645\u0632\u062f \u0628\u06af\u06cc\u0631\u0646\u062f \u06cc\u0627 \u0627\u0632 \u0633\u0648\u06cc \u0639\u0645\u0648\u0645 \u062a\u062d\u0633\u06cc\u0646 \u0634\u0648\u0646\u062f\u060c \u0628\u0644\u06a9\u0647 \u0686\u0648\u0646 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06cc\u0633\u06cc \u0628\u0631\u0627\u06cc\u0634\u0627\u0646 \u0633\u0631\u06af\u0631\u0645 \u06a9\u0646\u0646\u062f\u0647 \u0627\u0633\u062a"))),l("div",{className:"text-center col-md-12 flex"},l(s.a,{animation:"bounceInUp"}),l(c.a,{href:"/"},l(s.a,{animation:"bounceInUp"},l("a",{className:"header__section__link"},l("i",{className:"pe-7s-home"})))),l(c.a,{href:"/about"},l(s.a,{animation:"bounceInUp"},l("a",{className:"header__section__link"},l("i",{className:"pe-7s-users"})))),l(c.a,{href:"/project"},l(s.a,{animation:"bounceInUp"},l("a",{className:"header__section__link"},l("i",{className:"pe-7s-diamond"})))),l(c.a,{href:"/gallery"},l(s.a,{animation:"bounceInUp"},l("a",{className:"header__section__link"},l("i",{className:"pe-7s-camera"})))))))}}},[["W3S/",1,0]]]);