parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"F977":[function(require,module,exports) {
function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}module.exports=n;
},{}],"qjdW":[function(require,module,exports) {
function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}module.exports=r;
},{}],"tlMJ":[function(require,module,exports) {
function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(t)}function t(n){return"function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?module.exports=t=function(t){return o(t)}:module.exports=t=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)},t(n)}module.exports=t;
},{}],"RBd3":[function(require,module,exports) {
function e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}module.exports=e;
},{}],"VojR":[function(require,module,exports) {
var e=require("../helpers/typeof"),r=require("./assertThisInitialized");function t(t,i){return!i||"object"!==e(i)&&"function"!=typeof i?r(t):i}module.exports=t;
},{"../helpers/typeof":"tlMJ","./assertThisInitialized":"RBd3"}],"tv1K":[function(require,module,exports) {
function t(e){return module.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},t(e)}module.exports=t;
},{}],"hxEz":[function(require,module,exports) {
function t(o,e){return module.exports=t=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},t(o,e)}module.exports=t;
},{}],"jhNH":[function(require,module,exports) {
var e=require("./setPrototypeOf");function r(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&e(r,t)}module.exports=r;
},{"./setPrototypeOf":"hxEz"}],"alUq":[function(require,module,exports) {
function r(r){if(Array.isArray(r)){for(var e=0,n=new Array(r.length);e<r.length;e++)n[e]=r[e];return n}}module.exports=r;
},{}],"AZzA":[function(require,module,exports) {
function t(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}module.exports=t;
},{}],"OMtq":[function(require,module,exports) {
function e(){throw new TypeError("Invalid attempt to spread non-iterable instance")}module.exports=e;
},{}],"DRof":[function(require,module,exports) {
var r=require("./arrayWithoutHoles"),e=require("./iterableToArray"),a=require("./nonIterableSpread");function o(o){return r(o)||e(o)||a()}module.exports=o;
},{"./arrayWithoutHoles":"alUq","./iterableToArray":"AZzA","./nonIterableSpread":"OMtq"}],"lsuE":[function(require,module,exports) {
function e(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}module.exports=e;
},{}],"dgxz":[function(require,module,exports) {
var t=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=h(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={};function v(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(G([])));L&&L!==e&&n.call(L,i)&&(m=L);var x=g.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function b(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=h(t[e],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(f).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(r,e,n,o){var i=new b(u(r,e,n,o));return t.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=t}catch(r){Function("r","regeneratorRuntime = r")(t)}
},{}],"loFk":[function(require,module,exports) {
module.exports=require("regenerator-runtime");
},{"regenerator-runtime":"dgxz"}],"s1On":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("@babel/runtime/helpers/toConsumableArray")),r=n(require("@babel/runtime/helpers/defineProperty")),t=n(require("@babel/runtime/regenerator"));function n(e){return e&&e.__esModule?e:{default:e}}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){(0,r.default)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var o=t.default.mark(f),d=wp,s=d.apiFetch,i=wp.data.registerStore,c=lodash,p=c.reject,l=c.uniqueId;function f(e){var r,n,u;return t.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=!0,t.next=3,{type:"UPLOAD_START",uploading:r,file:e};case 3:return(u=new FormData).append("file",e),u.append("action","bp_attachments_media_upload"),r=!1,t.prev=7,t.next=10,m.uploadFile("/buddypress/v1/attachments",u);case 10:return n=t.sent,t.next=13,{type:"UPLOAD_END",uploading:r,uploaded:n};case 13:return n.uploaded=!0,t.abrupt("return",m.addFile(n));case 17:return t.prev=17,t.t0=t.catch(7),n={id:l(),name:e.name,error:t.t0.message},t.next=22,{type:"UPLOAD_END",uploading:r,uploaded:n};case 22:return t.abrupt("return",m.traceError(n));case 23:case"end":return t.stop()}},o,null,[[7,17]])}var g={user:{},files:[],uploaded:[],errored:[],uploading:!1,ended:!1},m={getLoggedInUser:function(e){return{type:"GET_LOGGED_IN_USER",user:e}},getFiles:function(e){return{type:"GET_FILES",files:e}},fetchFromAPI:function(e){return{type:"FETCH_FROM_API",path:e}},saveAttachment:f,uploadFile:function(e,r){return{type:"UPLOAD_FILE",path:e,formData:r}},reset:function(){return{type:"RESET_UPLOADS"}},addFile:function(e){return{type:"ADD_FILE",file:e}},traceError:function(e){return{type:"ADD_ERROR",file:e}}},b=i("bp-attachments",{reducer:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LOGGED_IN_USER":return a({},r,{user:t.user});case"GET_FILES":return a({},r,{files:t.files});case"ADD_FILE":return a({},r,{files:[].concat((0,e.default)(p(r.files,["id",t.file.id])),[t.file])});case"UPLOAD_START":return a({},r,{uploading:t.uploading,uploaded:[].concat((0,e.default)(r.uploaded),[t.file])});case"ADD_ERROR":return a({},r,{errored:[].concat((0,e.default)(r.errored),[t.file])});case"UPLOAD_END":return a({},r,{uploading:t.uploading,uploaded:p(r.uploaded,["name",t.uploaded.name]),ended:!0});case"RESET_UPLOADS":return a({},r,{uploading:!1,uploaded:[],errored:[],ended:!1})}return r},actions:m,selectors:{loggedInUser:function(e){return e.user},isUploading:function(e){return e.uploading},getUploadedFiles:function(e){return e.uploaded},getErroredFiles:function(e){return e.errored},getFiles:function(e){return e.files},hasUploaded:function(e){return e.ended}},controls:{UPLOAD_FILE:function(e){return s({path:e.path,method:"POST",body:e.formData})},FETCH_FROM_API:function(e){return s({path:e.path})}},resolvers:{loggedInUser:t.default.mark(function e(){var r;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"/buddypress/v1/members/me?context=edit",e.next=3,m.fetchFromAPI("/buddypress/v1/members/me?context=edit");case 3:return r=e.sent,e.next=6,m.getLoggedInUser(r);case 6:case"end":return e.stop()}},e)}),getFiles:t.default.mark(function e(){var r;return t.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"/buddypress/v1/attachments?context=edit",e.next=3,m.fetchFromAPI("/buddypress/v1/attachments?context=edit");case 3:return r=e.sent,e.abrupt("return",m.getFiles(r));case 5:case"end":return e.stop()}},e)})}}),h=b;exports.default=h;
},{"@babel/runtime/helpers/toConsumableArray":"DRof","@babel/runtime/helpers/defineProperty":"lsuE","@babel/runtime/regenerator":"loFk"}],"Cpsu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("@babel/runtime/helpers/assertThisInitialized")),t=r(require("@babel/runtime/helpers/classCallCheck")),a=r(require("@babel/runtime/helpers/createClass")),n=r(require("@babel/runtime/helpers/possibleConstructorReturn")),s=r(require("@babel/runtime/helpers/getPrototypeOf")),i=r(require("@babel/runtime/helpers/inherits"));function r(e){return e&&e.__esModule?e:{default:e}}var l=wp.element,o=l.Component,u=l.createPortal,p=l.createElement,d=wp.i18n.__,c=function(e){function r(){return(0,t.default)(this,r),(0,n.default)(this,(0,s.default)(r).apply(this,arguments))}return(0,i.default)(r,e),(0,a.default)(r,[{key:"render",value:function(){return u(this.props.children,document.querySelector("#bp-media-admin-page-title-actions"))}}]),r}(o),b=function(r){function l(){var a;return(0,t.default)(this,l),(a=(0,n.default)(this,(0,s.default)(l).apply(this,arguments))).state={is_open:!1},a.toggleClass=a.toggleClass.bind((0,e.default)(a)),a.doAction=a.doAction.bind((0,e.default)(a)),a}return(0,i.default)(l,r),(0,a.default)(l,[{key:"toggleClass",value:function(){this.setState({is_open:!this.state.is_open})}},{key:"doAction",value:function(e,t){t.preventDefault(),this.props.onDoAction(e)}},{key:"render",value:function(){var e=this,t=this.state.is_open,a=!0===t?"dashicons dashicons-arrow-up-alt2":"dashicons dashicons-arrow-down-alt2";return p(c,null,p("div",{className:!0===t?"split-button is-open":"split-button"},p("div",{className:"split-button-head"},p("a",{href:"#new-bp-media-upload",className:"button split-button-primary","aria-live":"polite",onClick:function(t){return e.doAction("upload",t)}},d("Upload new","bp-attachments")),p("button",{type:"button",className:"split-button-toggle","aria-haspopup":"true","aria-expanded":t,onClick:this.toggleClass},p("i",{className:a}),p("span",{className:"screen-reader-text"},d("More actions","bp-attachments")))),p("ul",{className:"split-button-body"},p("li",null,p("a",{href:"#new-bp-media-directory",className:"button-link directory-button split-button-option"},d("Add new directory","bp-attachments"))))))}}]),l}(o),h=b;exports.default=h;
},{"@babel/runtime/helpers/assertThisInitialized":"RBd3","@babel/runtime/helpers/classCallCheck":"F977","@babel/runtime/helpers/createClass":"qjdW","@babel/runtime/helpers/possibleConstructorReturn":"VojR","@babel/runtime/helpers/getPrototypeOf":"tv1K","@babel/runtime/helpers/inherits":"jhNH"}],"FFsE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("@babel/runtime/helpers/classCallCheck")),r=i(require("@babel/runtime/helpers/createClass")),t=i(require("@babel/runtime/helpers/possibleConstructorReturn")),a=i(require("@babel/runtime/helpers/getPrototypeOf")),s=i(require("@babel/runtime/helpers/inherits"));function i(e){return e&&e.__esModule?e:{default:e}}var l=wp.element,n=l.Component,u=l.createElement,c=wp.i18n.__,d=function(i){function l(){return(0,e.default)(this,l),(0,t.default)(this,(0,a.default)(l).apply(this,arguments))}return(0,s.default)(l,i),(0,r.default)(l,[{key:"render",value:function(){return u("div",{className:"media-toolbar wp-filter"},u("div",{className:"media-toolbar-secondary"},u("div",{className:"view-switch media-grid-view-switch"},u("a",{href:"#view-list",className:"view-list"},u("span",{className:"screen-reader-text"},c("Display list","bp-attachments"))),u("a",{href:"#view-grid",className:"view-grid current"},u("span",{className:"screen-reader-text"},c("Display grid","bp-attachments"))))))}}]),l}(n),o=d;exports.default=o;
},{"@babel/runtime/helpers/classCallCheck":"F977","@babel/runtime/helpers/createClass":"qjdW","@babel/runtime/helpers/possibleConstructorReturn":"VojR","@babel/runtime/helpers/getPrototypeOf":"tv1K","@babel/runtime/helpers/inherits":"jhNH"}],"Sr7m":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=lodash,t=e.template;function a(e){return t(document.querySelector("#tmpl-"+e).innerHTML,{evaluate:/<#([\s\S]+?)#>/g,interpolate:/\{\{\{([\s\S]+?)\}\}\}/g,escape:/\{\{([^\}]+?)\}\}(?!\})/g,variable:"data"})}var r=a;exports.default=r;
},{}],"eqwO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("@babel/runtime/helpers/classCallCheck")),t=i(require("@babel/runtime/helpers/createClass")),r=i(require("@babel/runtime/helpers/possibleConstructorReturn")),u=i(require("@babel/runtime/helpers/getPrototypeOf")),l=i(require("@babel/runtime/helpers/inherits")),a=i(require("../utils/set-template"));function i(e){return e&&e.__esModule?e:{default:e}}var s=wp.element,n=s.Component,o=s.createElement,p=function(i){function s(){return(0,e.default)(this,s),(0,r.default)(this,(0,u.default)(s).apply(this,arguments))}return(0,l.default)(s,i),(0,t.default)(s,[{key:"render",value:function(){var e=(0,a.default)("bp-attachments-media-item");return o("div",{className:"media-item",dangerouslySetInnerHTML:{__html:e(this.props)}})}}]),s}(n),d=p;exports.default=d;
},{"@babel/runtime/helpers/classCallCheck":"F977","@babel/runtime/helpers/createClass":"qjdW","@babel/runtime/helpers/possibleConstructorReturn":"VojR","@babel/runtime/helpers/getPrototypeOf":"tv1K","@babel/runtime/helpers/inherits":"jhNH","../utils/set-template":"Sr7m"}],"IXvi":[function(require,module,exports) {
"use strict";var e=p(require("@babel/runtime/helpers/classCallCheck")),a=p(require("@babel/runtime/helpers/createClass")),n=p(require("@babel/runtime/helpers/possibleConstructorReturn")),t=p(require("@babel/runtime/helpers/getPrototypeOf")),r=p(require("@babel/runtime/helpers/assertThisInitialized")),l=p(require("@babel/runtime/helpers/inherits")),s=p(require("./store")),i=p(require("./elements/split-button")),o=p(require("./elements/media-toolbar")),d=p(require("./elements/media-item"));function p(e){return e&&e.__esModule?e:{default:e}}var u=wp.element,c=u.Component,m=u.render,h=u.createElement,b=u.Fragment,f=wp.components,N=f.DropZoneProvider,g=f.DropZone,v=wp.i18n.__,k=wp.data,q=k.withDispatch,E=k.withSelect,U=k.dispatch,y=wp.compose.compose,w=lodash,D=w.find,A=w.forEach,C=function(s){function p(){var a;return(0,e.default)(this,p),(a=(0,n.default)(this,(0,t.default)(p).apply(this,arguments))).state={uploadEnabled:!1,makedirEnabled:!1},a.handleAction=a.handleAction.bind((0,r.default)(a)),a}return(0,l.default)(p,s),(0,a.default)(p,[{key:"handleAction",value:function(e){var a="upload"===e,n="makedir"===e;U("bp-attachments").reset(),this.setState({uploadEnabled:a,makedirEnabled:n})}},{key:"renderResult",value:function(e){var a=this.props,n=a.files,t=a.errored,r=D(t,{name:e.name});return D(n,{name:e.name})?h("span",{className:"bp-info"},h("span",{className:"bp-uploaded"}),h("span",{className:"screen-reader-text"},v("Uploaded!","bp-attachments"))):r?h("span",{className:"bp-info"},h("span",null,r.error),h("span",{className:"bp-errored"})):h("span",{className:"bp-info"},h("span",{className:"bp-uploading"}),h("span",{className:"screen-reader-text"},v("Uploading...","bp-attachments")))}},{key:"render",value:function(){var e,a=this,n=this.props,t=n.onFilesDropped,r=n.isUploading,l=n.hasUploaded,s=n.uploaded,p=n.files,u=n.errored,c=(n.user,this.state),m=c.uploadEnabled,f=(c.makedirEnabled,"disabled"),k=[];return!m||r||l||(f="enabled"),k=k.concat(s,u),p.length&&(e=p.map(function(e){return h(d.default,{key:"media-item-"+e.id,id:e.id,name:e.name,title:e.title,icon:e.icon})})),h(b,null,h(i.default,{onDoAction:this.handleAction}),h("div",{className:"uploader-container "+f},h("button",{className:"close dashicons dashicons-no",onClick:this.handleAction},h("span",{className:"screen-reader-text"},v("Close the upload panel","bp-attachments"))),h(N,null,h(g,{label:v("Drop your files here.","bp-attachments"),onFilesDrop:t,className:"uploader-inline"}))),h(o.default,null),!!k.length&&h("ol",{className:"bp-files-list"},k.map(function(e){return h("li",{key:e.name,className:"row"},h("span",{className:"filename"},e.name),a.renderResult(e))})),h("div",{className:"media-items"},e))}}]),p}(c),F=y([E(function(e){var a=e("bp-attachments");return{user:a.loggedInUser(),isUploading:a.isUploading(),hasUploaded:a.hasUploaded(),uploaded:a.getUploadedFiles(),files:a.getFiles(),errored:a.getErroredFiles()}}),q(function(e){return{onFilesDropped:function(a){a.forEach(function(a){e("bp-attachments").saveAttachment(a)})}}})])(C);m(h(F,null),document.querySelector("#bp-media-uploader"));
},{"@babel/runtime/helpers/classCallCheck":"F977","@babel/runtime/helpers/createClass":"qjdW","@babel/runtime/helpers/possibleConstructorReturn":"VojR","@babel/runtime/helpers/getPrototypeOf":"tv1K","@babel/runtime/helpers/assertThisInitialized":"RBd3","@babel/runtime/helpers/inherits":"jhNH","./store":"s1On","./elements/split-button":"Cpsu","./elements/media-toolbar":"FFsE","./elements/media-item":"eqwO"}]},{},["IXvi"], null)
//# sourceMappingURL=/uploader/index.js.map