!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/axie-tracker-dashboard/",e(e.s="mdyV")}({"1cg6":function(t,e,n){"use strict";(function(t){var r=n("83eF");n("4jLH");e.a=function(){return t("div",{class:"atd-footer"},t("div",{class:"atd-footer__copyright content-wrapper"},t("p",null,"© ",r.b," Axie Tracker Dashboard | v",r.a),t("p",null,"Made with ",t("i",{class:"fa-solid fa-heart"})),t("p",null,"Powered by ",t("a",{href:"https://preactjs.com/",rel:"noopener noreferrer",target:"_blank"},"Preact")," and ",t("a",{href:"https://pages.github.com/",rel:"noopener noreferrer",target:"_blank"},"Github Pages"))))}}).call(this,n("hosL").h)},"3Ukk":function(){},"4jLH":function(){},"6Fm8":function(){},"83eF":function(t,e,n){"use strict";function r(t,e){t=t.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}function o(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return o}));var i="0.0.3",u="2022"},BrCq:function(t,e,n){"use strict";(function(t){n("3Ukk");e.a=function(e){return t("div",{class:"atd-stats"},t("div",{class:"atd-stats-metric"},t("i",{class:"fa-solid fa-flask"}),t("h2",{class:"atd-stats-metric__label"},"Total SLP Earned"),": ",t("p",{class:"atd-stats-metric__value"},e.total_slp_earned)),t("div",{class:"atd-stats-metric"},t("i",{class:"fa-solid fa-trophy"}),t("h2",{class:"atd-stats-metric__label"},"Leaderboard Rank"),": ",t("p",{class:"atd-stats-metric__value"},e.leaderboard_rank)),t("div",{class:"atd-stats-metric"},t("i",{class:"fa-solid fa-shield"}),t("h2",{class:"atd-stats-metric__label"},"Elo Rating (MMR) "),": ",t("p",{class:"atd-stats-metric__value"},e.elo_rating)))}}).call(this,n("hosL").h)},ClKT:function(){},LEnQ:function(t,e,n){"use strict";(function(t){n("QRet"),n("OvJ7");e.a=function(e){return t("ins",{class:"adt-adsense adsbygoogle","data-ad-client":e.adClient,"data-ad-slot":e.adSlot,"data-ad-format":e.adformat,"data-full-width-responsive":e.fullWidthResponsive})}}).call(this,n("hosL").h)},OvJ7:function(){},QRet:function(t,e,n){"use strict";function r(t,e){w.options.__h&&w.options.__h(b,t,O||e),O=0;var n=b.__H||(b.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function o(t){return O=1,i(y,t)}function i(t,e,n){var o=r(g++,2);return o.t=t,o.__c||(o.__=[n?n(e):y(void 0,e),function(t){var e=o.t(o.__[0],t);o.__[0]!==e&&(o.__=[e,o.__[1]],o.__c.setState({}))}],o.__c=b),o.__}function u(t,e){var n=r(g++,3);!w.options.__s&&m(n.__H,e)&&(n.__=t,n.__H=e,b.__H.__h.push(n))}function a(t,e){var n=r(g++,4);!w.options.__s&&m(n.__H,e)&&(n.__=t,n.__H=e,b.__h.push(n))}function l(t){return O=5,_((function(){return{current:t}}),[])}function c(t,e,n){O=6,a((function(){"function"==typeof t?t(e()):t&&(t.current=e())}),null==n?n:n.concat(t))}function _(t,e){var n=r(g++,7);return m(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function s(t,e){return O=8,_((function(){return t}),e)}function f(t){var e=b.context[t.__c],n=r(g++,9);return n.c=t,e?(null==n.__&&(n.__=!0,e.sub(b)),e.props.value):t.__}function p(t,e){w.options.useDebugValue&&w.options.useDebugValue(e?e(t):t)}function d(){for(var t;t=j.shift();)if(t.__P)try{t.__H.__h.forEach(h),t.__H.__h.forEach(v),t.__H.__h=[]}catch(e){t.__H.__h=[],w.options.__e(e,t.__v)}}function h(t){var e=b,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),b=e}function v(t){var e=b;t.__c=t.__(),b=e}function m(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function y(t,e){return"function"==typeof e?e(t):e}n.d(e,"j",(function(){return o})),n.d(e,"h",(function(){return i})),n.d(e,"d",(function(){return u})),n.d(e,"f",(function(){return a})),n.d(e,"i",(function(){return l})),n.d(e,"e",(function(){return c})),n.d(e,"g",(function(){return _})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return p}));var g,b,k,w=n("hosL"),O=0,j=[],C=w.options.__b,x=w.options.__r,P=w.options.diffed,S=w.options.__c,A=w.options.unmount;w.options.__b=function(t){b=null,C&&C(t)},w.options.__r=function(t){x&&x(t),g=0;var e=(b=t.__c).__H;e&&(e.__h.forEach(h),e.__h.forEach(v),e.__h=[])},w.options.diffed=function(t){P&&P(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==j.push(e)&&k===w.options.requestAnimationFrame||((k=w.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),E&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);E&&(e=requestAnimationFrame(n))})(d)),b=null},w.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(h),t.__h=t.__h.filter((function(t){return!t.__||v(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],w.options.__e(n,t.__v)}})),S&&S(t,e)},w.options.unmount=function(t){A&&A(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((function(t){try{h(t)}catch(t){e=t}})),e&&w.options.__e(e,n.__v))};var E="function"==typeof requestAnimationFrame},QfWi:function(t,e,n){"use strict";n.r(e),function(t){var r=n("Y3FI"),o=n("wqv2");n("6Fm8");e.default=function(){return t("div",{class:"atd"},t(r.a,null,t(o.a,{path:"/axie-tracker-dashboard/"})))}}.call(this,n("hosL").h)},Ql2l:function(){},"S/9D":function(){},Y3FI:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var l=i[1].split("&"),c=0;c<l.length;c++){var _=l[c].split("=");u[decodeURIComponent(_[0])]=decodeURIComponent(_.slice(1).join("="))}t=a(t.replace(o,"")),e=a(e||"");for(var s=Math.max(t.length,e.length),f=0;f<s;f++)if(e[f]&&":"===e[f].charAt(0)){var p=e[f].replace(/(^:|[+*?]+$)/g,""),d=(e[f].match(/[+*?]+$/)||m)[0]||"",h=~d.indexOf("+"),v=~d.indexOf("*"),y=t[f]||"";if(!y&&!v&&(d.indexOf("?")<0||h)){r=!1;break}if(u[p]=decodeURIComponent(y),h||v){u[p]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,a(e).map(l).join(""));var e}(t),t.props}function a(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function l(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function c(){var t;return""+((t=y&&y.location?y.location:y&&y.getCurrentLocation?y.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(t.search||"")}function _(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=g.length;e--;)if(g[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),y&&y[e]?y[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),s(t)}function s(t){for(var e=!1,n=0;n<g.length;n++)!0===g[n].routeTo(t)&&(e=!0);for(var r=b.length;r--;)b[r](t);return e}function f(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return _(e)}}function p(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return f(t.currentTarget||t.target||this),d(t)}function d(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function h(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(f(e))return d(t)}}while(e=e.parentNode)}}var v=n("hosL"),m={},y=null,g=[],b=[],k={},w=!1,O=function(t){function e(e){t.call(this,e),e.history&&(y=e.history),this.state={url:e.url||c()},w||("function"==typeof addEventListener&&(y||addEventListener("popstate",(function(){s(c())})),addEventListener("click",h)),w=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){g.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;y&&(this.unlisten=y.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),g.splice(g.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(i).map((function(t){var i=o(e,t.props.path,t.props);if(i){if(!1!==n){var u={url:e,matches:i};return r(u,i),delete u.ref,delete u.key,Object(v.cloneElement)(t,u)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),o,!0),u=i[0]||null,a=this.previousUrl;return o!==a&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:a,active:i,current:u})),u},e}(v.Component);O.subscribers=b,O.getCurrentUrl=c,O.route=_,O.Router=O,O.Route=function(t){return Object(v.createElement)(t.component,t)},O.Link=function(t){return Object(v.createElement)("a",r({onClick:p},t))},O.exec=o,e.a=O},YIiA:function(t,e,n){"use strict";(function(t){n("Ql2l");e.a=function(e){return t("div",{class:"atd-card"},e.children)}}).call(this,n("hosL").h)},aKi1:function(t,e,n){"use strict";var r=n("QRet");e.a=function(t){Object(r.d)((function(){if("undefined"!=typeof window&&!window.dataLayer){var e=document.createElement("script");e.type="text/javascript",e.src="https://www.googletagmanager.com/gtag/js?id="+t.trackingId,document.body.appendChild(e)}"undefined"!=typeof window&&function e(){"undefined"!=typeof window&&void 0!==window.dataLayer&&window.dataLayer?(window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",t.trackingId,{send_page_view:!0,page_path:window.document.location.pathname})):setTimeout(e,1e3)}()}))}},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o,i,a={};for(i in e)"key"==i?r=e[i]:"ref"==i?o=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?U.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===a[i]&&(a[i]=t.defaultProps[i]);return u(t,a,r,o,null)}function u(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++D:o};return null==o&&null!=R.vnode&&R.vnode(i),i}function a(){return{current:null}}function l(t){return t.children}function c(t,e){this.props=t,this.context=e}function _(t,e){if(null==e)return t.__?_(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?_(t):null}function s(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return s(t)}}function f(t){(!t.__d&&(t.__d=!0)&&H.push(t)&&!p.__r++||M!==R.debounceRendering)&&((M=R.debounceRendering)||I)(p)}function p(){for(var t;p.__r=H.length;)t=H.sort((function(t,e){return t.__v.__b-e.__v.__b})),H=[],t.some((function(t){var e,n,o,i,u,a;t.__d&&(u=(i=(e=t).__v).__e,(a=e.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,w(a,i,o,e.__n,void 0!==a.ownerSVGElement,null!=i.__h?[u]:null,n,null==u?_(i):u,i.__h),O(n,i),i.__e!=u&&s(i)))}))}function d(t,e,n,r,o,i,a,c,s,f){var p,d,v,y,g,b,k,O=r&&r.__k||N,j=O.length;for(n.__k=[],p=0;p<e.length;p++)if(null!=(y=n.__k[p]=null==(y=e[p])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?u(null,y,null,null,y):Array.isArray(y)?u(l,{children:y},null,null,null):y.__b>0?u(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(v=O[p])||v&&y.key==v.key&&y.type===v.type)O[p]=void 0;else for(d=0;d<j;d++){if((v=O[d])&&y.key==v.key&&y.type===v.type){O[d]=void 0;break}v=null}w(t,y,v=v||F,o,i,a,c,s,f),g=y.__e,(d=y.ref)&&v.ref!=d&&(k||(k=[]),v.ref&&k.push(v.ref,null,y),k.push(d,y.__c||g,y)),null!=g?(null==b&&(b=g),"function"==typeof y.type&&y.__k===v.__k?y.__d=s=h(y,s,t):s=m(t,y,v,O,g,s),"function"==typeof n.type&&(n.__d=s)):s&&v.__e==s&&s.parentNode!=t&&(s=_(v))}for(n.__e=b,p=j;p--;)null!=O[p]&&("function"==typeof n.type&&null!=O[p].__e&&O[p].__e==n.__d&&(n.__d=_(r,p+1)),x(O[p],O[p]));if(k)for(p=0;p<k.length;p++)C(k[p],k[++p],k[++p])}function h(t,e,n){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,e="function"==typeof r.type?h(r,e,n):m(n,r,r,o,r.__e,e));return e}function v(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){v(t,e)})):e.push(t)),e}function m(t,e,n,r,o,i){var u,a,l;if(void 0!==e.__d)u=e.__d,e.__d=void 0;else if(null==n||o!=i||null==o.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(o),u=null;else{for(a=i,l=0;(a=a.nextSibling)&&l<r.length;l+=2)if(a==o)break t;t.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function y(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||$.test(e)?n:n+"px"}function g(t,e,n,r,o){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||y(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||y(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?k:b,i):t.removeEventListener(e,i?k:b,i);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function b(t){this.l[t.type+!1](R.event?R.event(t):t)}function k(t){this.l[t.type+!0](R.event?R.event(t):t)}function w(t,e,n,o,i,u,a,_,s){var f,p,h,v,m,y,g,b,k,w,O,C=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(s=n.__h,_=e.__e=n.__e,e.__h=null,u=[_]),(f=R.__b)&&f(e);try{t:if("function"==typeof C){if(b=e.props,k=(f=C.contextType)&&o[f.__c],w=f?k?k.props.value:f.__:o,n.__c?g=(p=e.__c=n.__c).__=p.__E:("prototype"in C&&C.prototype.render?e.__c=p=new C(b,w):(e.__c=p=new c(b,w),p.constructor=C,p.render=P),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=w,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=C.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,C.getDerivedStateFromProps(b,p.__s))),v=p.props,m=p.state,h)null==C.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==C.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,w),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,w)||e.__v===n.__v){p.props=b,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),p.__h.length&&a.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,w),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,m,y)}))}p.context=w,p.props=b,p.state=p.__s,(f=R.__r)&&f(e),p.__d=!1,p.__v=e,p.__P=t,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(y=p.getSnapshotBeforeUpdate(v,m)),O=null!=f&&f.type===l&&null==f.key?f.props.children:f,d(t,Array.isArray(O)?O:[O],e,n,o,i,u,a,_,s),p.base=e.__e,e.__h=null,p.__h.length&&a.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==u&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=j(n.__e,e,n,o,i,u,a,s);(f=R.diffed)&&f(e)}catch(t){e.__v=null,(s||null!=u)&&(e.__e=_,e.__h=!!s,u[u.indexOf(_)]=null),R.__e(t,e,n)}}function O(t,e){R.__c&&R.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){R.__e(t,e.__v)}}))}function j(t,e,n,r,i,u,a,l){var c,s,f,p=n.props,h=e.props,v=e.type,m=0;if("svg"===v&&(i=!0),null!=u)for(;m<u.length;m++)if((c=u[m])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){t=c,u[m]=null;break}if(null==t){if(null===v)return document.createTextNode(h);t=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),u=null,l=!1}if(null===v)p===h||l&&t.data===h||(t.data=h);else{if(u=u&&U.call(t.childNodes),s=(p=n.props||F).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!l){if(null!=u)for(p={},m=0;m<t.attributes.length;m++)p[t.attributes[m].name]=t.attributes[m].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===t.innerHTML)||(t.innerHTML=f&&f.__html||""))}if(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||g(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||g(t,i,e[i],n[i],r)}(t,h,p,i,l),f)e.__k=[];else if(m=e.props.children,d(t,Array.isArray(m)?m:[m],e,n,r,i&&"foreignObject"!==v,u,a,u?u[0]:n.__k&&_(n,0),l),null!=u)for(m=u.length;m--;)null!=u[m]&&o(u[m]);l||("value"in h&&void 0!==(m=h.value)&&(m!==t.value||"progress"===v&&!m||"option"===v&&m!==p.value)&&g(t,"value",m,p.value,!1),"checked"in h&&void 0!==(m=h.checked)&&m!==t.checked&&g(t,"checked",m,p.checked,!1))}return t}function C(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){R.__e(t,n)}}function x(t,e,n){var r,i;if(R.unmount&&R.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||C(r,null,e)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){R.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&x(r[i],e,"function"!=typeof t.type);n||null==t.__e||o(t.__e),t.__e=t.__d=void 0}function P(t,e,n){return this.constructor(t,n)}function S(t,e,n){var r,o,u;R.__&&R.__(t,e),o=(r="function"==typeof n)?null:n&&n.__k||e.__k,u=[],w(e,t=(!r&&n||e).__k=i(l,null,[t]),o||F,F,void 0!==e.ownerSVGElement,!r&&n?[n]:o?null:e.firstChild?U.call(e.childNodes):null,u,!r&&n?n:o?o.__e:e.firstChild,r),O(u,t)}function A(t,e){S(t,e,A)}function E(t,e,n){var o,i,a,l=r({},t.props);for(a in e)"key"==a?o=e[a]:"ref"==a?i=e[a]:l[a]=e[a];return arguments.length>2&&(l.children=arguments.length>3?U.call(arguments,2):n),u(t.type,l,o||t.key,i||t.ref,null)}function L(t,e){var n={__c:e="__cC"+W++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(f)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"render",(function(){return S})),n.d(e,"hydrate",(function(){return A})),n.d(e,"createElement",(function(){return i})),n.d(e,"h",(function(){return i})),n.d(e,"Fragment",(function(){return l})),n.d(e,"createRef",(function(){return a})),n.d(e,"isValidElement",(function(){return T})),n.d(e,"Component",(function(){return c})),n.d(e,"cloneElement",(function(){return E})),n.d(e,"createContext",(function(){return L})),n.d(e,"toChildArray",(function(){return v})),n.d(e,"options",(function(){return R}));var U,R,D,T,H,I,M,W,F={},N=[],$=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;U=N.slice,R={__e:function(t,e){for(var n,r,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(t)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(e){t=e}throw t}},D=0,T=function(t){return null!=t&&void 0===t.constructor},c.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),f(this))},c.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),f(this))},c.prototype.render=l,H=[],I="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,W=0},l8WD:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n in e)t[n]=e[n];return t}function i(t,e){for(var n in t)if("__source"!==n&&!(n in e))return!0;for(var r in e)if("__source"!==r&&t[r]!==e[r])return!0;return!1}function u(t){this.props=t}function a(){this.__u=0,this.t=null,this.__b=null}function l(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function c(){this.u=null,this.o=null}function _(){}function s(){return this.cancelBubble}function f(){return this.defaultPrevented}var p=n("QRet");n.d(e,"a",(function(){return p.d})),n.d(e,"b",(function(){return p.j}));var d=n("hosL");(u.prototype=new d.Component).isPureReactComponent=!0,u.prototype.shouldComponentUpdate=function(t,e){return i(this.props,t)||i(this.state,e)};var h=d.options.__b;d.options.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),h&&h(t)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var v=d.options.__e;d.options.__e=function(t,e,n){if(t.then)for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return null==e.__e&&(e.__e=n.__e,e.__k=n.__k),r.__c(t,e);v(t,e,n)};var m=d.options.unmount;d.options.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&!0===t.__h&&(t.type=null),m&&m(t)},(a.prototype=new d.Component).__c=function(t,e){var n=e.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=l(r.__v),i=!1,u=function(){i||(i=!0,n.__R=null,o?o(a):a())};n.__R=u;var a=function(){if(!--r.__u){if(r.state.__e){var t=r.state.__e;r.__v.__k[0]=function t(e,n,r){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return t(e,n,r)})),e.__c&&e.__c.__P===n&&(e.__e&&r.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=r)),e}(t,t.__c.__P,t.__c.__O)}var e;for(r.setState({__e:r.__b=null});e=r.t.pop();)e.forceUpdate()}},c=!0===e.__h;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),t.then(u,u)},a.prototype.componentWillUnmount=function(){this.t=[]},a.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function t(e,n,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(t){"function"==typeof t.__c&&t.__c()})),e.__c.__H=null),null!=(e=o({},e)).__c&&(e.__c.__P===r&&(e.__c.__P=n),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return t(e,n,r)}))),e}(this.__b,n,r.__O=r.__P)}this.__b=null}var i=e.__e&&Object(d.createElement)(d.Fragment,null,t.fallback);return i&&(i.__h=null),[Object(d.createElement)(d.Fragment,null,e.__e?null:t.children),i]};var y=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};(c.prototype=new d.Component).__e=function(t){var e=this,n=l(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),y(e,t,r)):o()};n?n(i):i()}},c.prototype.render=function(t){this.u=null,this.o=new Map;var e=Object(d.toChildArray)(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},c.prototype.componentDidUpdate=c.prototype.componentDidMount=function(){var t=this;this.o.forEach((function(e,n){y(t,n,e)}))};var g="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,b=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,k="undefined"!=typeof document,w=function(t){return("undefined"!=typeof Symbol&&"symbol"==r(Symbol())?/fil|che|rad/i:/fil|che|ra/i).test(t)};d.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(t){Object.defineProperty(d.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})}));var O=d.options.event;d.options.event=function(t){return O&&(t=O(t)),t.persist=_,t.isPropagationStopped=s,t.isDefaultPrevented=f,t.nativeEvent=t};var j={configurable:!0,get:function(){return this.class}},C=d.options.vnode;d.options.vnode=function(t){var e=t.type,n=t.props,r=n;if("string"==typeof e){var o=-1===e.indexOf("-");for(var i in r={},n){var u=n[i];k&&"children"===i&&"noscript"===e||"value"===i&&"defaultValue"in n&&null==u||("defaultValue"===i&&"value"in n&&null==n.value?i="value":"download"===i&&!0===u?u="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+e)&&!w(n.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():o&&b.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===u&&(u=void 0),r[i]=u)}"select"==e&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(d.toChildArray)(n.children).forEach((function(t){t.props.selected=-1!=r.value.indexOf(t.props.value)}))),"select"==e&&null!=r.defaultValue&&(r.value=Object(d.toChildArray)(n.children).forEach((function(t){t.props.selected=r.multiple?-1!=r.defaultValue.indexOf(t.props.value):r.defaultValue==t.props.value}))),t.props=r,n.class!=n.className&&(j.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",j))}t.$$typeof=g,C&&C(t)};var x=d.options.__r;d.options.__r=function(t){x&&x(t),t.__c}},lHuD:function(t,e,n){"use strict";var r=n("QRet");e.a=function(){Object(r.d)((function(){if("undefined"!=typeof window&&!window.adsbygoogle){(window.adsbygoogle=window.adsbygoogle||[]).push({});var t=document.createElement("script");t.type="text/javascript",t.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",document.body.appendChild(t)}}))}},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL"),o=r.h,i=r.render,u=r.hydrate,a=function(t){return t&&t.default?t.default:t},l=function(t){return"/"===t[t.length-1]?t:t+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(l(n.p)+"sw.js"),"function"==typeof a(n("QfWi"))){var c=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=a(n("QfWi")),e={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(e=JSON.parse(decodeURI(r.innerHTML)).preRenderData||e);var _={preRenderData:e},s=e.url?l(e.url):"";(u&&s===l(location.pathname)?u:i)(o(t,{CLI_DATA:_}),document.body,c)}()}},nxb6:function(){},qIj5:function(t,e,n){"use strict";(function(t){n("ClKT");e.a=function(){return t("div",{class:"atd-bg"})}}).call(this,n("hosL").h)},wqv2:function(t,e,n){"use strict";(function(t){function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var l=n("hosL"),c=n("l8WD"),_=n("83eF"),s=n("aKi1"),f=n("lHuD"),p=n("LEnQ"),d=n("qIj5"),h=n("YIiA"),v=n("BrCq"),m=n("1cg6");n("S/9D"),n("nxb6");e.a=function(){var e=u(Object(c.b)({total_slp_earned:0,leaderboard_rank:0,elo_rating:0}),2),n=e[0],r=e[1];return Object(c.a)((function(){var t=Object(_.d)("id",window.location.href);if(t){var e=t.replace("ronin:","0x"),n=function(t){r((function(e){return o(o({},e),t)}))};fetch("https://game-api.axie.technology/slp/".concat(e)).then((function(t){return t.ok?t.json():Promise.reject(!1)})).then((function(t){n({total_slp_earned:t[0].total||0})})).catch((function(){console.error("Axie API for SLP is not working.")})),fetch("https://game-api.axie.technology/mmr/".concat(e)).then((function(t){return t.ok?t.json():Promise.reject(!1)})).then((function(t){n({leaderboard_rank:t[0].items[1].rank||0,elo_rating:t[0].items[1].elo||0})})).catch((function(){console.error("Axie API for MMR is not working.")}))}}),[]),Object(l.h)(t,null,Object(l.h)(d.a,null),Object(l.h)("div",{class:"atd-home"},Object(l.h)("div",{class:"atd-home-content content-wrapper content-padding"},Object(l.h)(h.a,null,Object(l.h)("h1",{class:"atd-home-title"},"Axie Tracker Dashboard"),Object(l.h)("p",{class:"atd-home-description"},"A simplified dashboard for your axie account stats."),Object(l.h)("p",{class:"atd-home-description"},"Other features coming soon!"),Object(l.h)("div",{class:"atd-home-axie-watermark-1",style:"background-image: url('https://storage.googleapis.com/assets.axieinfinity.com/axies/265/axie/axie-half.png');"}),Object(l.h)("div",{class:"atd-home-axie-watermark-2",style:"background-image: url('https://storage.googleapis.com/assets.axieinfinity.com/axies/1367/axie/axie-half.png');"}),Object(l.h)(v.a,{total_slp_earned:Object(_.c)(n.total_slp_earned),leaderboard_rank:Object(_.c)(n.leaderboard_rank),elo_rating:Object(_.c)(n.elo_rating)})),Object(l.h)("div",{class:"atd-home-ads"},Object(l.h)(p.a,{adClient:"ca-pub-3427694918014398",adSlot:"2369194966",adFormat:"auto",fullWidthResponsive:"true"}))),Object(l.h)(m.a,null),Object(l.h)(s.a,{trackingId:"UA-128894279-1"}),Object(l.h)(f.a,null)))}}).call(this,n("hosL").Fragment)}});
//# sourceMappingURL=bundle.dcb84.js.map