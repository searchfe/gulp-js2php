!function(){window.fetch=null;console.log('fetch', window.fetch);console.log('<script>console.log("test");<\/script>');var e=document.createElement("script");e.innerText='console.log("test");',document.body.appendChild(e)}();
!function(t){"use strict";if(!t.fetch){var e="URLSearchParams"in t,r="Symbol"in t&&"iterator"in Symbol,s="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),o="FormData"in t,n="ArrayBuffer"in t;if(n)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=function(t){return t&&DataView.prototype.isPrototypeOf(t)},h=ArrayBuffer.isView||function(t){return t&&-1<i.indexOf(Object.prototype.toString.call(t))};c.prototype.append=function(t,e){t=d(t),e=y(e);var r=this.map[t];this.map[t]=r?r+","+e:e},c.prototype.delete=function(t){delete this.map[d(t)]},c.prototype.get=function(t){return t=d(t),this.has(t)?this.map[t]:null},c.prototype.has=function(t){return this.map.hasOwnProperty(d(t))},c.prototype.set=function(t,e){this.map[d(t)]=y(e)},c.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},c.prototype.keys=function(){var r=[];return this.forEach(function(t,e){r.push(e)}),p(r)},c.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),p(e)},c.prototype.entries=function(){var r=[];return this.forEach(function(t,e){r.push([e,t])}),p(r)},r&&(c.prototype[Symbol.iterator]=c.prototype.entries);var u=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];_.prototype.clone=function(){return new _(this,{body:this._bodyInit})},v.call(_.prototype),v.call(B.prototype),B.prototype.clone=function(){return new B(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},B.error=function(){var t=new B(null,{status:0,statusText:""});return t.type="error",t};var f=[301,302,303,307,308];B.redirect=function(t,e){if(-1===f.indexOf(e))throw new RangeError("Invalid status code");return new B(null,{status:e,headers:{location:t}})},t.Headers=c,t.Request=_,t.Response=B,t.fetch=function(n,i){return new Promise(function(r,t){var e=new _(n,i),o=new XMLHttpRequest;o.onload=function(){var t={status:o.status,statusText:o.statusText,headers:function(t){var n=new c;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e=t.split(":"),r=e.shift().trim();if(r){var o=e.join(":").trim();n.append(r,o)}}),n}(o.getAllResponseHeaders()||"")};t.url="responseURL"in o?o.responseURL:t.headers.get("X-Request-URL");var e="response"in o?o.response:o.responseText;r(new B(e,t))},o.onerror=function(){t(new TypeError("Network request failed"))},o.ontimeout=function(){t(new TypeError("Network request failed"))},o.open(e.method,e.url,!0),"include"===e.credentials?o.withCredentials=!0:"omit"===e.credentials&&(o.withCredentials=!1),"responseType"in o&&s&&(o.responseType="blob"),e.headers.forEach(function(t,e){o.setRequestHeader(e,t)}),o.send(void 0===e._bodyInit?null:e._bodyInit)})},t.fetch.polyfill=!0}function d(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function y(t){return"string"!=typeof t&&(t=String(t)),t}function p(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}function c(e){this.map={},e instanceof c?e.forEach(function(t,e){this.append(e,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function b(r){return new Promise(function(t,e){r.onload=function(){t(r.result)},r.onerror=function(){e(r.error)}})}function m(t){var e=new FileReader,r=b(e);return e.readAsArrayBuffer(t),r}function w(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t)if("string"==typeof t)this._bodyText=t;else if(s&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(o&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(n&&s&&a(t))this._bodyArrayBuffer=w(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!n||!ArrayBuffer.prototype.isPrototypeOf(t)&&!h(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=w(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(m)}),this.text=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,r=b(e);return e.readAsText(t),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(A)}),this.json=function(){return this.text().then(JSON.parse)},this}function _(t,e){var r=(e=e||{}).body;if(t instanceof _){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new c(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new c(e.headers)),this.method=function(t){var e=t.toUpperCase();return-1<u.indexOf(e)?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function A(t){var n=new FormData;return t.trim().split("&").forEach(function(t){if(t){var e=t.split("="),r=e.shift().replace(/\+/g," "),o=e.join("=").replace(/\+/g," ");n.append(decodeURIComponent(r),decodeURIComponent(o))}}),n}function B(t,e){e=e||{},this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new c(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this);
!function(){"use strict";var n=setTimeout;function o(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function r(t,o){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,i._immediateFn(function(){var e=1===t._state?o.onFulfilled:o.onRejected;if(null!==e){var n;try{n=e(t._value)}catch(e){return void u(o.promise,e)}f(o.promise,n)}else(1===t._state?f:u)(o.promise,t._value)})):t._deferreds.push(o)}function f(n,e){try{if(e===n)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if(e instanceof i)return n._state=3,n._value=e,void c(n);if("function"==typeof t)return void l(function(e,n){return function(){e.apply(n,arguments)}}(t,e),n)}n._state=1,n._value=e,c(n)}catch(e){u(n,e)}}function u(e,n){e._state=2,e._value=n,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;n<t;n++)r(e,e._deferreds[n]);e._deferreds=null}function a(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}function l(e,n){var t=!1;try{e(function(e){t||(t=!0,f(n,e))},function(e){t||(t=!0,u(n,e))})}catch(e){if(t)return;t=!0,u(n,e)}}i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,n){var t=new this.constructor(o);return r(this,new a(e,n,t)),t},i.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){return t.reject(e)})})},i.all=function(n){return new i(function(o,r){if(!n||void 0===n.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(n);if(0===i.length)return o([]);var f=i.length;function u(n,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void t.call(e,function(e){u(n,e)},r)}i[n]=e,0==--f&&o(i)}catch(e){r(e)}}for(var e=0;e<i.length;e++)u(e,i[e])})},i.resolve=function(n){return n&&"object"==typeof n&&n.constructor===i?n:new i(function(e){e(n)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(r){return new i(function(e,n){for(var t=0,o=r.length;t<o;t++)r[t].then(e,n)})},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){n(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var e=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("unable to locate global object")}();e.Promise||(e.Promise=i)}();
define("@molecule/polyfills/e2e/polyfill/fetch",["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=(i.prototype.run=function(){this.runner.it("fetch 存在",function(t){t(window.fetch)}),this.runner.it("fetch 一个页面",function(e){fetch("https://harttle.land/").then(function(t){return t.text()}).then(function(t){e(/Harttle Land/.test(t))}).catch(function(){e(!1)})}),this.runner.it("fetch 一个404的页面",function(e){fetch("http://yq01-sefe-mip-2.epc.baidu.com:8086/not-foud").then(function(t){e.equal(t.status,404)}).catch(function(){e(!1)})})},i);function i(t){this.options=t,this.runner=t,this.run()}e.default=n});
define("@molecule/polyfills/e2e/polyfill/promise",["require","exports"],function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=(t.prototype.run=function(){this.runner.it("Promise 存在",function(e){e(window.Promise)}),this.runner.it("Promise.resolve() 可用",function(e){e(Promise.resolve()instanceof Promise)}),this.runner.it("Promise.then() 可以 resolve",function(e){Promise.resolve().then(function(){e(!0)})}),this.runner.it("Promise.then() 可以 reject",function(e){Promise.reject().then(function(){},function(){e(!0)})}),this.runner.it("Promise.catch() 可以捕获 reject",function(e){Promise.reject().catch(function(){e(!0)})})},t);function t(e){this.options=e,this.runner=e,this.run()}n.default=i});
define("@molecule/polyfills/e2e/polyfill/testRunner",["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=(r.prototype.createTestContainer=function(){var t=document.createElement("div");return t.className="molecule-polyfills-testRunner",document.body.appendChild(t),t},r.prototype.update=function(){var r=this,t=this.results.reduce(function(t,e){return t+("OK"===e.status?1:0)},0);this.container.innerHTML=t+"/"+this.count+"成功<br/>",this.results.forEach(function(t,e){var s={PENDING:"blue",OK:"green",FAIL:"red"}[t.status];r.container.innerHTML+='<p style="color:'+s+'">'+(e+1)+". "+t.status+": "+t.msg+"</p>","FAIL"===t.status&&(r.container.innerHTML+='<p style="color:red">'+t.error+"</p>")})},r.prototype.it=function(t,e){var s=this,r=this.count++;function n(t){s.results[r].status=t?"OK":"FAIL",s.update()}this.results.push({status:"PENDING",msg:t}),this.update(),n.equal=function(t,e){t!==e&&(s.results[r].error="expected "+e+" got "+t),n(t===e)};try{0<e.length?e(n):(e(),n(!0),this.update())}catch(t){this.results[r].status="FAIL",this.results[r].error=t.message||t,this.update()}},r);function r(){this.container=this.createTestContainer(),this.count=0,this.results=[]}e.default=s});
define("@molecule/polyfills/e2e/test",["require","exports","@molecule/polyfills/e2e/polyfill/testRunner","@molecule/polyfills/e2e/polyfill/fetch","@molecule/polyfills/e2e/polyfill/promise"],function(e,l,t,i,n){"use strict";Object.defineProperty(l,"__esModule",{value:!0});function o(){console.log("Polyfill 测试"),this.runner=new t.default,this.fetch=new i.default(this.runner),this.promise=new n.default(this.runner)}l.default=o});
require(["@molecule/polyfills/e2e/test"],function(test){new test.default()});