!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/axie-tracker-dashboard/",e(e.s="mdyV")}({"6Fm8":function(){},QfWi:function(t,e,n){"use strict";n.r(e),function(t){var r=n("Y3FI"),o=n("qIj5"),i=n("wqv2");n("6Fm8");e.default=()=>t("div",{class:"at-container"},t(o.a,null),t(r.a,null,t(i.a,{path:"/axie-tracker-dashboard/:roninAddress"})))}.call(this,n("hosL").h)},Y3FI:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),_={};if(i&&i[1])for(var u=i[1].split("&"),c=0;c<u.length;c++){var a=u[c].split("=");_[decodeURIComponent(a[0])]=decodeURIComponent(a.slice(1).join("="))}t=l(t.replace(o,"")),e=l(e||"");for(var s=Math.max(t.length,e.length),f=0;f<s;f++)if(e[f]&&":"===e[f].charAt(0)){var p=e[f].replace(/(^:|[+*?]+$)/g,""),h=(e[f].match(/[+*?]+$/)||m)[0]||"",d=~h.indexOf("+"),v=~h.indexOf("*"),y=t[f]||"";if(!y&&!v&&(h.indexOf("?")<0||d)){r=!1;break}if(_[p]=decodeURIComponent(y),d||v){_[p]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){r=!1;break}return(!0===n.default||!1!==r)&&_}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function _(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(u).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function u(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function c(){var t;return""+((t=y&&y.location?y.location:y&&y.getCurrentLocation?y.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(t.search||"")}function a(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=b.length;e--;)if(b[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),y&&y[e]?y[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),s(t)}function s(t){for(var e=!1,n=0;n<b.length;n++)!0===b[n].routeTo(t)&&(e=!0);for(var r=g.length;r--;)g[r](t);return e}function f(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return a(e)}}function p(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return f(t.currentTarget||t.target||this),h(t)}function h(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function d(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(f(e))return h(t)}}while(e=e.parentNode)}}var v=n("hosL"),m={},y=null,b=[],g=[],k={},O=!1,j=function(t){function e(e){t.call(this,e),e.history&&(y=e.history),this.state={url:e.url||c()},O||("function"==typeof addEventListener&&(y||addEventListener("popstate",(function(){s(c())})),addEventListener("click",d)),O=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){b.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;y&&(this.unlisten=y.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),b.splice(b.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(_).sort(i).map((function(t){var i=o(e,t.props.path,t.props);if(i){if(!1!==n){var _={url:e,matches:i};return r(_,i),delete _.ref,delete _.key,Object(v.cloneElement)(t,_)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),o,!0),_=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:_})),_},e}(v.Component);j.subscribers=g,j.getCurrentUrl=c,j.route=a,j.Router=j,j.Route=function(t){return Object(v.createElement)(t.component,t)},j.Link=function(t){return Object(v.createElement)("a",r({onClick:p},t))},j.exec=o,e.a=j},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o,i,l={};for(i in e)"key"==i?r=e[i]:"ref"==i?o=e[i]:l[i]=e[i];if(arguments.length>2&&(l.children=arguments.length>3?L.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===l[i]&&(l[i]=t.defaultProps[i]);return _(t,l,r,o,null)}function _(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++T:o};return null==o&&null!=R.vnode&&R.vnode(i),i}function l(){return{current:null}}function u(t){return t.children}function c(t,e){this.props=t,this.context=e}function a(t,e){if(null==e)return t.__?a(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?a(t):null}function s(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return s(t)}}function f(t){(!t.__d&&(t.__d=!0)&&M.push(t)&&!p.__r++||W!==R.debounceRendering)&&((W=R.debounceRendering)||H)(p)}function p(){for(var t;p.__r=M.length;)t=M.sort((function(t,e){return t.__v.__b-e.__v.__b})),M=[],t.some((function(t){var e,n,o,i,_,l;t.__d&&(_=(i=(e=t).__v).__e,(l=e.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,O(l,i,o,e.__n,void 0!==l.ownerSVGElement,null!=i.__h?[_]:null,n,null==_?a(i):_,i.__h),j(n,i),i.__e!=_&&s(i)))}))}function h(t,e,n,r,o,i,l,c,s,f){var p,h,v,y,b,g,k,j=r&&r.__k||N,x=j.length;for(n.__k=[],p=0;p<e.length;p++)if(null!=(y=n.__k[p]=null==(y=e[p])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?_(null,y,null,null,y):Array.isArray(y)?_(u,{children:y},null,null,null):y.__b>0?_(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(v=j[p])||v&&y.key==v.key&&y.type===v.type)j[p]=void 0;else for(h=0;h<x;h++){if((v=j[h])&&y.key==v.key&&y.type===v.type){j[h]=void 0;break}v=null}O(t,y,v=v||F,o,i,l,c,s,f),b=y.__e,(h=y.ref)&&v.ref!=h&&(k||(k=[]),v.ref&&k.push(v.ref,null,y),k.push(h,y.__c||b,y)),null!=b?(null==g&&(g=b),"function"==typeof y.type&&y.__k===v.__k?y.__d=s=d(y,s,t):s=m(t,y,v,j,b,s),"function"==typeof n.type&&(n.__d=s)):s&&v.__e==s&&s.parentNode!=t&&(s=a(v))}for(n.__e=g,p=x;p--;)null!=j[p]&&("function"==typeof n.type&&null!=j[p].__e&&j[p].__e==n.__d&&(n.__d=a(r,p+1)),P(j[p],j[p]));if(k)for(p=0;p<k.length;p++)C(k[p],k[++p],k[++p])}function d(t,e,n){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,e="function"==typeof r.type?d(r,e,n):m(n,r,r,o,r.__e,e));return e}function v(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){v(t,e)})):e.push(t)),e}function m(t,e,n,r,o,i){var _,l,u;if(void 0!==e.__d)_=e.__d,e.__d=void 0;else if(null==n||o!=i||null==o.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(o),_=null;else{for(l=i,u=0;(l=l.nextSibling)&&u<r.length;u+=2)if(l==o)break t;t.insertBefore(o,i),_=i}return void 0!==_?_:o.nextSibling}function y(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||$.test(e)?n:n+"px"}function b(t,e,n,r,o){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||y(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||y(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?k:g,i):t.removeEventListener(e,i?k:g,i);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function g(t){this.l[t.type+!1](R.event?R.event(t):t)}function k(t){this.l[t.type+!0](R.event?R.event(t):t)}function O(t,e,n,o,i,_,l,a,s){var f,p,d,v,m,y,b,g,k,O,j,C=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(s=n.__h,a=e.__e=n.__e,e.__h=null,_=[a]),(f=R.__b)&&f(e);try{t:if("function"==typeof C){if(g=e.props,k=(f=C.contextType)&&o[f.__c],O=f?k?k.props.value:f.__:o,n.__c?b=(p=e.__c=n.__c).__=p.__E:("prototype"in C&&C.prototype.render?e.__c=p=new C(g,O):(e.__c=p=new c(g,O),p.constructor=C,p.render=A),k&&k.sub(p),p.props=g,p.state||(p.state={}),p.context=O,p.__n=o,d=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=C.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,C.getDerivedStateFromProps(g,p.__s))),v=p.props,m=p.state,d)null==C.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==C.getDerivedStateFromProps&&g!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,O),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,O)||e.__v===n.__v){p.props=g,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),p.__h.length&&l.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,O),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,m,y)}))}p.context=O,p.props=g,p.state=p.__s,(f=R.__r)&&f(e),p.__d=!1,p.__v=e,p.__P=t,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),d||null==p.getSnapshotBeforeUpdate||(y=p.getSnapshotBeforeUpdate(v,m)),j=null!=f&&f.type===u&&null==f.key?f.props.children:f,h(t,Array.isArray(j)?j:[j],e,n,o,i,_,l,a,s),p.base=e.__e,e.__h=null,p.__h.length&&l.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==_&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=x(n.__e,e,n,o,i,_,l,s);(f=R.diffed)&&f(e)}catch(t){e.__v=null,(s||null!=_)&&(e.__e=a,e.__h=!!s,_[_.indexOf(a)]=null),R.__e(t,e,n)}}function j(t,e){R.__c&&R.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){R.__e(t,e.__v)}}))}function x(t,e,n,r,i,_,l,u){var c,s,f,p=n.props,d=e.props,v=e.type,m=0;if("svg"===v&&(i=!0),null!=_)for(;m<_.length;m++)if((c=_[m])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){t=c,_[m]=null;break}if(null==t){if(null===v)return document.createTextNode(d);t=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,d.is&&d),_=null,u=!1}if(null===v)p===d||u&&t.data===d||(t.data=d);else{if(_=_&&L.call(t.childNodes),s=(p=n.props||F).dangerouslySetInnerHTML,f=d.dangerouslySetInnerHTML,!u){if(null!=_)for(p={},m=0;m<t.attributes.length;m++)p[t.attributes[m].name]=t.attributes[m].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===t.innerHTML)||(t.innerHTML=f&&f.__html||""))}if(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||b(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||b(t,i,e[i],n[i],r)}(t,d,p,i,u),f)e.__k=[];else if(m=e.props.children,h(t,Array.isArray(m)?m:[m],e,n,r,i&&"foreignObject"!==v,_,l,_?_[0]:n.__k&&a(n,0),u),null!=_)for(m=_.length;m--;)null!=_[m]&&o(_[m]);u||("value"in d&&void 0!==(m=d.value)&&(m!==t.value||"progress"===v&&!m||"option"===v&&m!==p.value)&&b(t,"value",m,p.value,!1),"checked"in d&&void 0!==(m=d.checked)&&m!==t.checked&&b(t,"checked",m,p.checked,!1))}return t}function C(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){R.__e(t,n)}}function P(t,e,n){var r,i;if(R.unmount&&R.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||C(r,null,e)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){R.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&P(r[i],e,"function"!=typeof t.type);n||null==t.__e||o(t.__e),t.__e=t.__d=void 0}function A(t,e,n){return this.constructor(t,n)}function S(t,e,n){var r,o,_;R.__&&R.__(t,e),o=(r="function"==typeof n)?null:n&&n.__k||e.__k,_=[],O(e,t=(!r&&n||e).__k=i(u,null,[t]),o||F,F,void 0!==e.ownerSVGElement,!r&&n?[n]:o?null:e.firstChild?L.call(e.childNodes):null,_,!r&&n?n:o?o.__e:e.firstChild,r),j(_,t)}function w(t,e){S(t,e,w)}function E(t,e,n){var o,i,l,u=r({},t.props);for(l in e)"key"==l?o=e[l]:"ref"==l?i=e[l]:u[l]=e[l];return arguments.length>2&&(u.children=arguments.length>3?L.call(arguments,2):n),_(t.type,u,o||t.key,i||t.ref,null)}function U(t,e){var n={__c:e="__cC"+I++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(f)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"render",(function(){return S})),n.d(e,"hydrate",(function(){return w})),n.d(e,"createElement",(function(){return i})),n.d(e,"h",(function(){return i})),n.d(e,"Fragment",(function(){return u})),n.d(e,"createRef",(function(){return l})),n.d(e,"isValidElement",(function(){return D})),n.d(e,"Component",(function(){return c})),n.d(e,"cloneElement",(function(){return E})),n.d(e,"createContext",(function(){return U})),n.d(e,"toChildArray",(function(){return v})),n.d(e,"options",(function(){return R}));var L,R,T,D,M,H,W,I,F={},N=[],$=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;L=N.slice,R={__e:function(t,e){for(var n,r,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(t)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(e){t=e}throw t}},T=0,D=function(t){return null!=t&&void 0===t.constructor},c.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),f(this))},c.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),f(this))},c.prototype.render=u,M=[],H="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,I=0},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL");const{h:o,render:i,hydrate:_}=r,l=t=>t&&t.default?t.default:t,u=t=>"/"===t[t.length-1]?t:t+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(u(n.p)+"sw-esm.js"),"function"==typeof l(n("QfWi"))){let t=document.getElementById("preact_root")||document.body.firstElementChild,e=()=>{let e=l(n("QfWi")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const a={preRenderData:r},s=r.url?u(r.url):"";(_&&s===u(location.pathname)?_:i)(o(e,{CLI_DATA:a}),document.body,t)};0,e()}},qIj5:function(t,e,n){"use strict";var r=n("hosL");e.a=()=>Object(r.h)("div",{class:"at-bg"})},wqv2:function(t,e,n){"use strict";function r(t,e){S.options.__h&&S.options.__h(P,t,w||e),w=0;var n=P.__H||(P.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function o(t){return w=1,i(s,t)}function i(t,e,n){var o=r(C++,2);return o.t=t,o.__c||(o.__=[n?n(e):s(void 0,e),function(t){var e=o.t(o.__[0],t);o.__[0]!==e&&(o.__=[e,o.__[1]],o.__c.setState({}))}],o.__c=P),o.__}function _(t,e){var n=r(C++,3);!S.options.__s&&a(n.__H,e)&&(n.__=t,n.__H=e,P.__H.__h.push(n))}function l(){for(var t;t=E.shift();)if(t.__P)try{t.__H.__h.forEach(u),t.__H.__h.forEach(c),t.__H.__h=[]}catch(e){t.__H.__h=[],S.options.__e(e,t.__v)}}function u(t){var e=P,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),P=e}function c(t){var e=P;t.__c=t.__(),P=e}function a(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function s(t,e){return"function"==typeof e?e(t):e}function f(t,e){for(var n in e)t[n]=e[n];return t}function p(t,e){for(var n in t)if("__source"!==n&&!(n in e))return!0;for(var r in e)if("__source"!==r&&t[r]!==e[r])return!0;return!1}function h(t){this.props=t}function d(){this.__u=0,this.t=null,this.__b=null}function v(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function m(){this.u=null,this.o=null}function y(){}function b(){return this.cancelBubble}function g(){return this.defaultPrevented}function k(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C,P,A,S=n("hosL"),w=0,E=[],U=S.options.__b,L=S.options.__r,R=S.options.diffed,T=S.options.__c,D=S.options.unmount;S.options.__b=function(t){P=null,U&&U(t)},S.options.__r=function(t){L&&L(t),C=0;var e=(P=t.__c).__H;e&&(e.__h.forEach(u),e.__h.forEach(c),e.__h=[])},S.options.diffed=function(t){R&&R(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==E.push(e)&&A===S.options.requestAnimationFrame||((A=S.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),M&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);M&&(e=requestAnimationFrame(n))})(l)),P=null},S.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(u),t.__h=t.__h.filter((function(t){return!t.__||c(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],S.options.__e(n,t.__v)}})),T&&T(t,e)},S.options.unmount=function(t){D&&D(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((function(t){try{u(t)}catch(t){e=t}})),e&&S.options.__e(e,n.__v))};var M="function"==typeof requestAnimationFrame;(h.prototype=new S.Component).isPureReactComponent=!0,h.prototype.shouldComponentUpdate=function(t,e){return p(this.props,t)||p(this.state,e)};var H=S.options.__b;S.options.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),H&&H(t)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var W=S.options.__e;S.options.__e=function(t,e,n){if(t.then)for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return null==e.__e&&(e.__e=n.__e,e.__k=n.__k),r.__c(t,e);W(t,e,n)};var I=S.options.unmount;S.options.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&!0===t.__h&&(t.type=null),I&&I(t)},(d.prototype=new S.Component).__c=function(t,e){var n=e.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=v(r.__v),i=!1,_=function(){i||(i=!0,n.__R=null,o?o(l):l())};n.__R=_;var l=function(){if(!--r.__u){if(r.state.__e){var t=r.state.__e;r.__v.__k[0]=function t(e,n,r){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return t(e,n,r)})),e.__c&&e.__c.__P===n&&(e.__e&&r.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=r)),e}(t,t.__c.__P,t.__c.__O)}var e;for(r.setState({__e:r.__b=null});e=r.t.pop();)e.forceUpdate()}},u=!0===e.__h;r.__u++||u||r.setState({__e:r.__b=r.__v.__k[0]}),t.then(_,_)},d.prototype.componentWillUnmount=function(){this.t=[]},d.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function t(e,n,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(t){"function"==typeof t.__c&&t.__c()})),e.__c.__H=null),null!=(e=f({},e)).__c&&(e.__c.__P===r&&(e.__c.__P=n),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return t(e,n,r)}))),e}(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__e&&Object(S.createElement)(S.Fragment,null,t.fallback);return o&&(o.__h=null),[Object(S.createElement)(S.Fragment,null,e.__e?null:t.children),o]};var F=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};(m.prototype=new S.Component).__e=function(t){var e=this,n=v(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),F(e,t,r)):o()};n?n(i):i()}},m.prototype.render=function(t){this.u=null,this.o=new Map;var e=Object(S.toChildArray)(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},m.prototype.componentDidUpdate=m.prototype.componentDidMount=function(){var t=this;this.o.forEach((function(e,n){F(t,n,e)}))};var N="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,$=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V="undefined"!=typeof document,q=function(t){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(t)};S.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(t){Object.defineProperty(S.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})}));var B=S.options.event;S.options.event=function(t){return B&&(t=B(t)),t.persist=y,t.isPropagationStopped=b,t.isDefaultPrevented=g,t.nativeEvent=t};var K={configurable:!0,get:function(){return this.class}},z=S.options.vnode;S.options.vnode=function(t){var e=t.type,n=t.props,r=n;if("string"==typeof e){var o=-1===e.indexOf("-");for(var i in r={},n){var _=n[i];V&&"children"===i&&"noscript"===e||"value"===i&&"defaultValue"in n&&null==_||("defaultValue"===i&&"value"in n&&null==n.value?i="value":"download"===i&&!0===_?_="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+e)&&!q(n.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():o&&$.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===_&&(_=void 0),r[i]=_)}"select"==e&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(S.toChildArray)(n.children).forEach((function(t){t.props.selected=-1!=r.value.indexOf(t.props.value)}))),"select"==e&&null!=r.defaultValue&&(r.value=Object(S.toChildArray)(n.children).forEach((function(t){t.props.selected=r.multiple?-1!=r.defaultValue.indexOf(t.props.value):r.defaultValue==t.props.value}))),t.props=r,n.class!=n.className&&(K.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",K))}t.$$typeof=N,z&&z(t)};var G=S.options.__r;S.options.__r=function(t){G&&G(t),t.__c};var Q=t=>Object(S.h)("div",{class:"at-card"},t.children),Y=t=>Object(S.h)("div",{class:"at-stats"},Object(S.h)("div",{class:"at-stats-metric"},Object(S.h)("i",{class:"fa-solid fa-flask"}),Object(S.h)("h2",{class:"at-stats-metric__label"},"Total SLP Earned"),": ",Object(S.h)("p",{class:"at-stats-metric__value"},t.total_slp_earned)),Object(S.h)("div",{class:"at-stats-metric"},Object(S.h)("i",{class:"fa-solid fa-trophy"}),Object(S.h)("h2",{class:"at-stats-metric__label"},"Leaderboard Rank"),": ",Object(S.h)("p",{class:"at-stats-metric__value"},t.leaderboard_rank)),Object(S.h)("div",{class:"at-stats-metric"},Object(S.h)("i",{class:"fa-solid fa-shield"}),Object(S.h)("h2",{class:"at-stats-metric__label"},"Elo Rating (MMR) "),": ",Object(S.h)("p",{class:"at-stats-metric__value"},t.elo_rating))),Z=()=>Object(S.h)("div",{class:"at-footer"},Object(S.h)("div",{class:"at-footer__copyright content-wrapper"},Object(S.h)("p",null,"© 2022 Axie Tracker | v0.0.1"),Object(S.h)("p",null,"Powered by ",Object(S.h)("a",{href:"https://preactjs.com/",rel:"noopener noreferrer",target:"_blank"},"Preact")," and ",Object(S.h)("a",{href:"https://pages.github.com/",rel:"noopener noreferrer",target:"_blank"},"Github Pages"))));e.a=t=>{console.log(t);const[e,n]=o({total_slp_earned:0,leaderboard_rank:0,elo_rating:0});return _((()=>{let e=t.roninAddress.replace("ronin:","0x");const r=t=>{n((e=>j(j({},e),t)))};fetch(`https://game-api.axie.technology/slp/${e}`).then((t=>t.ok?t.json():Promise.reject(!1))).then((t=>{r({total_slp_earned:t[0].total||0})})).catch((()=>{console.error("Axie API for SLP is not working.")})),fetch(`https://game-api.axie.technology/mmr/${e}`).then((t=>t.ok?t.json():Promise.reject(!1))).then((t=>{r({leaderboard_rank:t[0].items[1].rank||0,elo_rating:t[0].items[1].elo||0})})).catch((()=>{console.error("Axie API for MMR is not working.")}))}),[]),Object(S.h)("div",{class:"at-home"},Object(S.h)("div",{class:"content-wrapper content-padding"},Object(S.h)(Q,null,Object(S.h)("h1",null,"Axie Tracker Dashboard"),Object(S.h)("p",null,"A simplified dashboard for your axie account stats."),Object(S.h)("div",{class:"at-axie-watermark-1",style:"background-image: url('https://storage.googleapis.com/assets.axieinfinity.com/axies/265/axie/axie-half.png');"}),Object(S.h)("div",{class:"at-axie-watermark-2",style:"background-image: url('https://storage.googleapis.com/assets.axieinfinity.com/axies/1367/axie/axie-half.png');"}),Object(S.h)(Y,{total_slp_earned:k(e.total_slp_earned),leaderboard_rank:k(e.leaderboard_rank),elo_rating:k(e.elo_rating)}))),Object(S.h)(Z,null))}}});
//# sourceMappingURL=bundle.ab1b7.esm.js.map