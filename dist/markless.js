!function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){var n=t[a][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){(function(e,r,o,i,a,s,u,f,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var d={getActiveDom:function(e){var t=(e.offsetX,e.offsetY),n=document.querySelectorAll(".showdom"),r=null;for(var o in n)if(n[o]instanceof HTMLElement==!0){r=n[o];var i=n[o].offsetTop+n[o].offsetHeight;if(i>=t&&t>=n[o].offsetTop)break}return r}};n["default"]=d,t.exports=n["default"]}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/cursor.js","/")},{"1YiZ5S":11,buffer:8}],2:[function(e,t,n){(function(e,r,o,i,a,s,u,f,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var d={createDom:function(){var e=document.createElement("div");return e.setAttribute("class","showdom"),e.dataset.line=0,e.dataset.type="text",e},insert:function(){var e=d.createDom(),t=this.activeDom;t.parentNode.insertBefore(e,t.nextSibling),this.activeDom=e,this.editBox.value=""}};n["default"]=d,t.exports=n["default"]}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/editDom.js","/")},{"1YiZ5S":11,buffer:8}],3:[function(e,t,n){(function(t,n,r,o,i,a,s,u,f){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function d(e,t){this.editBoxConf={baseStyle:"; outline : none; "},this.activeDom=null,this.dom=document.getElementById(e),this.initDome(),this.initEvent()}var c=e("./cursor.js"),h=l(c),g=e("./editDom.js"),p=l(g),m=e("./modeRecognition.js"),y=l(m),v=e("./modeStyle.js"),b=l(v),w=e("./keyEvent.js"),E=l(w),B=e("./valueFormat.js"),I=l(B);d.prototype.initDome=function(){var e=this;e.dom.style.overflow="auto",e.dom.appendChild(p["default"].createDom());var t=e.editBox=document.createElement("textarea");t.setAttribute("style","position:absolute; bottom:10px; right:10px;"),e.dom.appendChild(t)},d.prototype.initEvent=function(){var e=this;e.dom.addEventListener("click",function(t){e.activeDom=h["default"].getActiveDom.apply(e,arguments),e.focus()}),e.editBox.addEventListener("keyup",function(t){E["default"].dispatch(t.keyCode,this,e);var n=this.value;console.log("what",n+"!!!");var r=e.activeDom.dataset.type,o=y["default"].judege(n);if(o){"h"==o.ret?o.ret+=o.hit[1].length:"ul"==o.ret&&(o.hit[1]="\\"+o.hit[1]),r=o.ret,e.activeDom.dataset.type=r,e.activeDom.dataset.line=o.line,e.activeDom.dataset.symbol=o.hit[1];var i=b["default"](r)+e.editBoxConf.baseStyle;e.activeDom.setAttribute("style",i),e.activeDom.setAttribute("class","showdom "+r)}return n=I["default"].call(e,n),e.activeDom.innerHTML=n,!1})},d.prototype.focus=function(){var e=this;e.editBox.focus()},n.Markless=d}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_b50e23d2.js","/")},{"./cursor.js":1,"./editDom.js":2,"./keyEvent.js":4,"./modeRecognition.js":5,"./modeStyle.js":6,"./valueFormat.js":7,"1YiZ5S":11,buffer:8}],4:[function(e,t,n){(function(r,o,i,a,s,u,f,l,d){"use strict";function c(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var h=e("./editDom.js"),g=c(h),p=e("./valueFormat.js"),m=c(p),y={dispatch:function(e,t,n){8===e&&y["delete"](t,n),13===e&&y.enter(t,n)},enter:function(e,t){var n=(t.activeDom.previousSibling,t.activeDom.dataset.line),r=e.value,o=0!=n,i=/\n\n$/.test(r);(o||i)&&(r=m["default"].call(t,r.replace(/\n+$/,"")),t.activeDom.innerHTML=r,g["default"].insert.apply(t),e.value="")},"delete":function(e,t){var n=e.value,r=new RegExp("^"+t.activeDom.dataset.symbol+"$");r.test(n)&&(n=t.activeDom.dataset.symbol.replace("\\",""),e.value=n,t.activeDom.dataset.type="text",delete t.activeDom.dataset.symbol,t.activeDom.setAttribute("class","showdom"),t.activeDom.setAttribute("style",t.editBoxConf.baseStyle))}};n["default"]=y,t.exports=n["default"]}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/keyEvent.js","/")},{"./editDom.js":2,"./valueFormat.js":7,"1YiZ5S":11,buffer:8}],5:[function(e,t,n){(function(e,r,o,i,a,s,u,f,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var d={judegeReg:{"^(#{1,6})[^#]+":{name:"h",line:1},"^(>)[^>]+":{name:"blockquotes",line:0},"^(\\*)[^\\*]+":{name:"ul",line:0},"^(1\\.)[^\\d]+":{name:"ol",line:0}},judege:function(e){var t=this.judegeReg,n=null;for(var r in t){var o=new RegExp(r),i=e.match(o);if(i){n={hit:i,ret:t[r].name,line:t[r].line};break}}return n}};n["default"]=d,t.exports=n["default"]}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/modeRecognition.js","/")},{"1YiZ5S":11,buffer:8}],6:[function(e,t,n){(function(e,r,o,i,a,s,u,f,l){"use strict";function d(e){return c[e]}Object.defineProperty(n,"__esModule",{value:!0});var c={h1:"margin: 50px 0 20px; font-size: 30px;",h2:"margin: 35px 0 20px; font-size: 26px;",h3:"margin: 20px 0; font-size: 21px;",h4:"font-size: 18px;",h5:"font-size: 16px;",h6:"font-size: 16px;",blockquotes:"padding: 10px 15px; border-left: 10px solid #D6DBDF;  margin: 0 0 20px; background:none repeat scroll 0 0 rgba(102,128,153,.05); color:rgb(44, 62, 80); min-height: 18px;",text:"margin-bottom:15px;",code:"border: 0; background-color: #D6DBDF; border-radius: 4px; color: #2C3E50; font-size: 14px; padding: 2px 4px; white-space: nowrap;"};n["default"]=d,t.exports=n["default"]}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/modeStyle.js","/")},{"1YiZ5S":11,buffer:8}],7:[function(e,t,n){(function(r,o,i,a,s,u,f,l,d){"use strict";function c(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var h=e("./modeStyle.js"),g=c(h),p={strong:"\\*\\*(.+?.)\\*\\*",code:"\\`(.+?)\\`",dispatch:function(e){for(var t in this)if("dispatch"!=t){var n=new RegExp(this[t],"g"),r=g["default"](t)?' style="'+g["default"](t)+'"':"";e=e.replace(n,"<"+t+r+">$1</"+t+">")}return e}},m={ul:function(e){return e.replace(/^\*(\s)*/,"<ul><li>").replace(/(\s)*\n(\s)*(\*){0,1}/g,"</li><li>").replace(/$/,"</li></ul>")},ol:function(e){return e.replace(/^1\.(\s)*/,"<ol><li>").replace(/(\s)*\n(\s)*(\*){0,1}/g,"</li><li>").replace(/$/,"</li></ol>")},"default":function(e){var t=this,n=new RegExp("^"+t.activeDom.dataset.symbol);return e=e.replace(n,""),e=e.replace(/\n/g,"<br>"),e=e.replace(/\s/g,"&nbsp;")},dispatch:function(e){var t=this.activeDom.dataset.type,n=m[t]||m["default"],r=n.call(this,e),o=p.dispatch(r);return o}};n["default"]=m.dispatch,t.exports=n["default"]}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/valueFormat.js","/")},{"./modeStyle.js":6,"1YiZ5S":11,buffer:8}],8:[function(e,t,n){(function(t,r,o,i,a,s,u,f,l){function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);var r=typeof e;if("base64"===t&&"string"===r)for(e=T(e);e.length%4!==0;)e+="=";var i;if("number"===r)i=F(e);else if("string"===r)i=o.byteLength(e,t);else{if("object"!==r)throw new Error("First argument needs to be a number, array or string.");i=F(e.length)}var a;o._useTypedArrays?a=o._augment(new Uint8Array(i)):(a=this,a.length=i,a._isBuffer=!0);var s;if(o._useTypedArrays&&"number"==typeof e.byteLength)a._set(e);else if(N(e))for(s=0;i>s;s++)a[s]=o.isBuffer(e)?e.readUInt8(s):e[s];else if("string"===r)a.write(e,0,t);else if("number"===r&&!o._useTypedArrays&&!n)for(s=0;i>s;s++)a[s]=0;return a}function d(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var a=t.length;G(a%2===0,"Invalid hex string"),r>a/2&&(r=a/2);for(var s=0;r>s;s++){var u=parseInt(t.substr(2*s,2),16);G(!isNaN(u),"Invalid hex string"),e[n+s]=u}return o._charsWritten=2*s,s}function c(e,t,n,r){var i=o._charsWritten=$(O(t),e,n,r);return i}function h(e,t,n,r){var i=o._charsWritten=$(P(t),e,n,r);return i}function g(e,t,n,r){return h(e,t,n,r)}function p(e,t,n,r){var i=o._charsWritten=$(q(t),e,n,r);return i}function m(e,t,n,r){var i=o._charsWritten=$(z(t),e,n,r);return i}function y(e,t,n){return K.fromByteArray(0===t&&n===e.length?e:e.slice(t,n))}function v(e,t,n){var r="",o="";n=Math.min(e.length,n);for(var i=t;n>i;i++)e[i]<=127?(r+=W(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return r+W(o)}function b(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;n>o;o++)r+=String.fromCharCode(e[o]);return r}function w(e,t,n){return b(e,t,n)}function E(e,t,n){var r=e.length;(!t||0>t)&&(t=0),(!n||0>n||n>r)&&(n=r);for(var o="",i=t;n>i;i++)o+=R(e[i]);return o}function B(e,t,n){for(var r=e.slice(t,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function I(e,t,n,r){r||(G("boolean"==typeof n,"missing or invalid endian"),G(void 0!==t&&null!==t,"missing offset"),G(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(i=e[t],o>t+1&&(i|=e[t+1]<<8)):(i=e[t]<<8,o>t+1&&(i|=e[t+1])),i}}function _(e,t,n,r){r||(G("boolean"==typeof n,"missing or invalid endian"),G(void 0!==t&&null!==t,"missing offset"),G(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(o>t+2&&(i=e[t+2]<<16),o>t+1&&(i|=e[t+1]<<8),i|=e[t],o>t+3&&(i+=e[t+3]<<24>>>0)):(o>t+1&&(i=e[t+1]<<16),o>t+2&&(i|=e[t+2]<<8),o>t+3&&(i|=e[t+3]),i+=e[t]<<24>>>0),i}}function A(e,t,n,r){r||(G("boolean"==typeof n,"missing or invalid endian"),G(void 0!==t&&null!==t,"missing offset"),G(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i=I(e,t,n,!0),a=32768&i;return a?-1*(65535-i+1):i}}function x(e,t,n,r){r||(G("boolean"==typeof n,"missing or invalid endian"),G(void 0!==t&&null!==t,"missing offset"),G(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i=_(e,t,n,!0),a=2147483648&i;return a?-1*(4294967295-i+1):i}}function S(e,t,n,r){return r||(G("boolean"==typeof n,"missing or invalid endian"),G(t+3<e.length,"Trying to read beyond buffer length")),Q.read(e,t,n,23,4)}function L(e,t,n,r){return r||(G("boolean"==typeof n,"missing or invalid endian"),G(t+7<e.length,"Trying to read beyond buffer length")),Q.read(e,t,n,52,8)}function D(e,t,n,r,o){o||(G(void 0!==t&&null!==t,"missing value"),G("boolean"==typeof r,"missing or invalid endian"),G(void 0!==n&&null!==n,"missing offset"),G(n+1<e.length,"trying to write beyond buffer length"),H(t,65535));var i=e.length;if(!(n>=i))for(var a=0,s=Math.min(i-n,2);s>a;a++)e[n+a]=(t&255<<8*(r?a:1-a))>>>8*(r?a:1-a)}function j(e,t,n,r,o){o||(G(void 0!==t&&null!==t,"missing value"),G("boolean"==typeof r,"missing or invalid endian"),G(void 0!==n&&null!==n,"missing offset"),G(n+3<e.length,"trying to write beyond buffer length"),H(t,4294967295));var i=e.length;if(!(n>=i))for(var a=0,s=Math.min(i-n,4);s>a;a++)e[n+a]=t>>>8*(r?a:3-a)&255}function U(e,t,n,r,o){o||(G(void 0!==t&&null!==t,"missing value"),G("boolean"==typeof r,"missing or invalid endian"),G(void 0!==n&&null!==n,"missing offset"),G(n+1<e.length,"Trying to write beyond buffer length"),J(t,32767,-32768));var i=e.length;n>=i||(t>=0?D(e,t,n,r,o):D(e,65535+t+1,n,r,o))}function k(e,t,n,r,o){o||(G(void 0!==t&&null!==t,"missing value"),G("boolean"==typeof r,"missing or invalid endian"),G(void 0!==n&&null!==n,"missing offset"),G(n+3<e.length,"Trying to write beyond buffer length"),J(t,2147483647,-2147483648));var i=e.length;n>=i||(t>=0?j(e,t,n,r,o):j(e,4294967295+t+1,n,r,o))}function M(e,t,n,r,o){o||(G(void 0!==t&&null!==t,"missing value"),G("boolean"==typeof r,"missing or invalid endian"),G(void 0!==n&&null!==n,"missing offset"),G(n+3<e.length,"Trying to write beyond buffer length"),X(t,3.4028234663852886e38,-3.4028234663852886e38));var i=e.length;n>=i||Q.write(e,t,n,r,23,4)}function C(e,t,n,r,o){o||(G(void 0!==t&&null!==t,"missing value"),G("boolean"==typeof r,"missing or invalid endian"),G(void 0!==n&&null!==n,"missing offset"),G(n+7<e.length,"Trying to write beyond buffer length"),X(t,1.7976931348623157e308,-1.7976931348623157e308));var i=e.length;n>=i||Q.write(e,t,n,r,52,8)}function T(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Y(e,t,n){return"number"!=typeof e?n:(e=~~e,e>=t?t:e>=0?e:(e+=t,e>=0?e:0))}function F(e){return e=~~Math.ceil(+e),0>e?0:e}function Z(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function N(e){return Z(e)||o.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function R(e){return 16>e?"0"+e.toString(16):e.toString(16)}function O(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(127>=r)t.push(e.charCodeAt(n));else{var o=n;r>=55296&&57343>=r&&n++;for(var i=encodeURIComponent(e.slice(o,n+1)).substr(1).split("%"),a=0;a<i.length;a++)t.push(parseInt(i[a],16))}}return t}function P(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}function z(e){for(var t,n,r,o=[],i=0;i<e.length;i++)t=e.charCodeAt(i),n=t>>8,r=t%256,o.push(r),o.push(n);return o}function q(e){return K.toByteArray(e)}function $(e,t,n,r){for(var o=0;r>o&&!(o+n>=t.length||o>=e.length);o++)t[o+n]=e[o];return o}function W(e){try{return decodeURIComponent(e)}catch(t){return String.fromCharCode(65533)}}function H(e,t){G("number"==typeof e,"cannot write a non-number as a number"),G(e>=0,"specified a negative value for writing an unsigned value"),G(t>=e,"value is larger than maximum value for type"),G(Math.floor(e)===e,"value has a fractional component")}function J(e,t,n){G("number"==typeof e,"cannot write a non-number as a number"),G(t>=e,"value larger than maximum allowed value"),G(e>=n,"value smaller than minimum allowed value"),G(Math.floor(e)===e,"value has a fractional component")}function X(e,t,n){G("number"==typeof e,"cannot write a non-number as a number"),G(t>=e,"value larger than maximum allowed value"),G(e>=n,"value smaller than minimum allowed value")}function G(e,t){if(!e)throw new Error(t||"Failed assertion")}var K=e("base64-js"),Q=e("ieee754");n.Buffer=o,n.SlowBuffer=o,n.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(n){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},o.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=O(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=q(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},o.concat=function(e,t){if(G(Z(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];var n;if("number"!=typeof t)for(t=0,n=0;n<e.length;n++)t+=e[n].length;var r=new o(t),i=0;for(n=0;n<e.length;n++){var a=e[n];a.copy(r,i),i+=a.length}return r},o.prototype.write=function(e,t,n,r){if(isFinite(t))isFinite(n)||(r=n,n=void 0);else{var o=r;r=t,t=n,n=o}t=Number(t)||0;var i=this.length-t;n?(n=Number(n),n>i&&(n=i)):n=i,r=String(r||"utf8").toLowerCase();var a;switch(r){case"hex":a=d(this,e,t,n);break;case"utf8":case"utf-8":a=c(this,e,t,n);break;case"ascii":a=h(this,e,t,n);break;case"binary":a=g(this,e,t,n);break;case"base64":a=p(this,e,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":a=m(this,e,t,n);break;default:throw new Error("Unknown encoding")}return a},o.prototype.toString=function(e,t,n){var r=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,n=void 0!==n?Number(n):n=r.length,n===t)return"";var o;switch(e){case"hex":o=E(r,t,n);break;case"utf8":case"utf-8":o=v(r,t,n);break;case"ascii":o=b(r,t,n);break;case"binary":o=w(r,t,n);break;case"base64":o=y(r,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=B(r,t,n);break;default:throw new Error("Unknown encoding")}return o},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,t,n,r){var i=this;if(n||(n=0),r||0===r||(r=this.length),t||(t=0),r!==n&&0!==e.length&&0!==i.length){G(r>=n,"sourceEnd < sourceStart"),G(t>=0&&t<e.length,"targetStart out of bounds"),G(n>=0&&n<i.length,"sourceStart out of bounds"),G(r>=0&&r<=i.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var a=r-n;if(100>a||!o._useTypedArrays)for(var s=0;a>s;s++)e[s+t]=this[s+n];else e._set(this.subarray(n,n+a),t)}},o.prototype.slice=function(e,t){var n=this.length;if(e=Y(e,n,0),t=Y(t,n,n),o._useTypedArrays)return o._augment(this.subarray(e,t));for(var r=t-e,i=new o(r,void 0,!0),a=0;r>a;a++)i[a]=this[a+e];return i},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},o.prototype.readUInt8=function(e,t){return t||(G(void 0!==e&&null!==e,"missing offset"),G(e<this.length,"Trying to read beyond buffer length")),e>=this.length?void 0:this[e]},o.prototype.readUInt16LE=function(e,t){return I(this,e,!0,t)},o.prototype.readUInt16BE=function(e,t){return I(this,e,!1,t)},o.prototype.readUInt32LE=function(e,t){return _(this,e,!0,t)},o.prototype.readUInt32BE=function(e,t){return _(this,e,!1,t)},o.prototype.readInt8=function(e,t){if(t||(G(void 0!==e&&null!==e,"missing offset"),G(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){var n=128&this[e];return n?-1*(255-this[e]+1):this[e]}},o.prototype.readInt16LE=function(e,t){return A(this,e,!0,t)},o.prototype.readInt16BE=function(e,t){return A(this,e,!1,t)},o.prototype.readInt32LE=function(e,t){return x(this,e,!0,t)},o.prototype.readInt32BE=function(e,t){return x(this,e,!1,t)},o.prototype.readFloatLE=function(e,t){return S(this,e,!0,t)},o.prototype.readFloatBE=function(e,t){return S(this,e,!1,t)},o.prototype.readDoubleLE=function(e,t){return L(this,e,!0,t)},o.prototype.readDoubleBE=function(e,t){return L(this,e,!1,t)},o.prototype.writeUInt8=function(e,t,n){n||(G(void 0!==e&&null!==e,"missing value"),G(void 0!==t&&null!==t,"missing offset"),G(t<this.length,"trying to write beyond buffer length"),H(e,255)),t>=this.length||(this[t]=e)},o.prototype.writeUInt16LE=function(e,t,n){D(this,e,t,!0,n)},o.prototype.writeUInt16BE=function(e,t,n){D(this,e,t,!1,n)},o.prototype.writeUInt32LE=function(e,t,n){j(this,e,t,!0,n)},o.prototype.writeUInt32BE=function(e,t,n){j(this,e,t,!1,n)},o.prototype.writeInt8=function(e,t,n){n||(G(void 0!==e&&null!==e,"missing value"),G(void 0!==t&&null!==t,"missing offset"),G(t<this.length,"Trying to write beyond buffer length"),J(e,127,-128)),t>=this.length||(e>=0?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},o.prototype.writeInt16LE=function(e,t,n){U(this,e,t,!0,n)},o.prototype.writeInt16BE=function(e,t,n){U(this,e,t,!1,n)},o.prototype.writeInt32LE=function(e,t,n){k(this,e,t,!0,n)},o.prototype.writeInt32BE=function(e,t,n){k(this,e,t,!1,n)},o.prototype.writeFloatLE=function(e,t,n){M(this,e,t,!0,n)},o.prototype.writeFloatBE=function(e,t,n){M(this,e,t,!1,n)},o.prototype.writeDoubleLE=function(e,t,n){C(this,e,t,!0,n)},o.prototype.writeDoubleBE=function(e,t,n){C(this,e,t,!1,n)},o.prototype.fill=function(e,t,n){if(e||(e=0),t||(t=0),n||(n=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),G("number"==typeof e&&!isNaN(e),"value is not a number"),G(n>=t,"end < start"),n!==t&&0!==this.length){G(t>=0&&t<this.length,"start out of bounds"),G(n>=0&&n<=this.length,"end out of bounds");for(var r=t;n>r;r++)this[r]=e}},o.prototype.inspect=function(){for(var e=[],t=this.length,r=0;t>r;r++)if(e[r]=R(this[r]),r===n.INSPECT_MAX_BYTES){e[r+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;n>t;t+=1)e[t]=this[t];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var V=o.prototype;o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=V.get,e.set=V.set,e.write=V.write,e.toString=V.toString,e.toLocaleString=V.toString,e.toJSON=V.toJSON,e.copy=V.copy,e.slice=V.slice,e.readUInt8=V.readUInt8,e.readUInt16LE=V.readUInt16LE,e.readUInt16BE=V.readUInt16BE,e.readUInt32LE=V.readUInt32LE,e.readUInt32BE=V.readUInt32BE,e.readInt8=V.readInt8,e.readInt16LE=V.readInt16LE,e.readInt16BE=V.readInt16BE,e.readInt32LE=V.readInt32LE,e.readInt32BE=V.readInt32BE,e.readFloatLE=V.readFloatLE,e.readFloatBE=V.readFloatBE,e.readDoubleLE=V.readDoubleLE,e.readDoubleBE=V.readDoubleBE,e.writeUInt8=V.writeUInt8,e.writeUInt16LE=V.writeUInt16LE,e.writeUInt16BE=V.writeUInt16BE,e.writeUInt32LE=V.writeUInt32LE,e.writeUInt32BE=V.writeUInt32BE,e.writeInt8=V.writeInt8,e.writeInt16LE=V.writeInt16LE,e.writeInt16BE=V.writeInt16BE,e.writeInt32LE=V.writeInt32LE,e.writeInt32BE=V.writeInt32BE,e.writeFloatLE=V.writeFloatLE,e.writeFloatBE=V.writeFloatBE,e.writeDoubleLE=V.writeDoubleLE,e.writeDoubleBE=V.writeDoubleBE,e.fill=V.fill,e.inspect=V.inspect,e.toArrayBuffer=V.toArrayBuffer,e}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")},{"1YiZ5S":11,"base64-js":9,buffer:8,ieee754:10}],9:[function(e,t,n){(function(e,t,r,o,i,a,s,u,f){var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(e){"use strict";function t(e){var t=e.charCodeAt(0);return t===i||t===d?62:t===a||t===c?63:s>t?-1:s+10>t?t-s+26+26:f+26>t?t-f:u+26>t?t-u+26:void 0}function n(e){function n(e){f[d++]=e}var r,i,a,s,u,f;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var l=e.length;u="="===e.charAt(l-2)?2:"="===e.charAt(l-1)?1:0,f=new o(3*e.length/4-u),a=u>0?e.length-4:e.length;var d=0;for(r=0,i=0;a>r;r+=4,i+=3)s=t(e.charAt(r))<<18|t(e.charAt(r+1))<<12|t(e.charAt(r+2))<<6|t(e.charAt(r+3)),n((16711680&s)>>16),n((65280&s)>>8),n(255&s);return 2===u?(s=t(e.charAt(r))<<2|t(e.charAt(r+1))>>4,n(255&s)):1===u&&(s=t(e.charAt(r))<<10|t(e.charAt(r+1))<<4|t(e.charAt(r+2))>>2,n(s>>8&255),n(255&s)),f}function r(e){function t(e){return l.charAt(e)}function n(e){return t(e>>18&63)+t(e>>12&63)+t(e>>6&63)+t(63&e)}var r,o,i,a=e.length%3,s="";for(r=0,i=e.length-a;i>r;r+=3)o=(e[r]<<16)+(e[r+1]<<8)+e[r+2],s+=n(o);switch(a){case 1:o=e[e.length-1],s+=t(o>>2),s+=t(o<<4&63),s+="==";break;case 2:o=(e[e.length-2]<<8)+e[e.length-1],s+=t(o>>10),s+=t(o>>4&63),s+=t(o<<2&63),s+="="}return s}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="+".charCodeAt(0),a="/".charCodeAt(0),s="0".charCodeAt(0),u="a".charCodeAt(0),f="A".charCodeAt(0),d="-".charCodeAt(0),c="_".charCodeAt(0);e.toByteArray=n,e.fromByteArray=r}("undefined"==typeof n?this.base64js={}:n)}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")},{"1YiZ5S":11,buffer:8}],10:[function(e,t,n){(function(e,t,r,o,i,a,s,u,f){n.read=function(e,t,n,r,o){var i,a,s=8*o-r-1,u=(1<<s)-1,f=u>>1,l=-7,d=n?o-1:0,c=n?-1:1,h=e[t+d];for(d+=c,i=h&(1<<-l)-1,h>>=-l,l+=s;l>0;i=256*i+e[t+d],d+=c,l-=8);for(a=i&(1<<-l)-1,i>>=-l,l+=r;l>0;a=256*a+e[t+d],d+=c,l-=8);if(0===i)i=1-f;else{if(i===u)return a?0/0:(h?-1:1)*(1/0);a+=Math.pow(2,r),i-=f}return(h?-1:1)*a*Math.pow(2,i-r)},n.write=function(e,t,n,r,o,i){var a,s,u,f=8*i-o-1,l=(1<<f)-1,d=l>>1,c=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:i-1,g=r?1:-1,p=0>t||0===t&&0>1/t?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=l):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),t+=a+d>=1?c/u:c*Math.pow(2,1-d),t*u>=2&&(a++,u/=2),a+d>=l?(s=0,a=l):a+d>=1?(s=(t*u-1)*Math.pow(2,o),a+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,o),a=0));o>=8;e[n+h]=255&s,h+=g,s/=256,o-=8);for(a=a<<o|s,f+=o;f>0;e[n+h]=255&a,h+=g,a/=256,f-=8);e[n+h-g]|=128*p}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")},{"1YiZ5S":11,buffer:8}],11:[function(e,t,n){(function(e,n,r,o,i,a,s,u,f){function l(){}var e=t.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),n.length>0)){var r=n.shift();r()}},!0),function(e){n.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=l,e.addListener=l,e.once=l,e.off=l,e.removeListener=l,e.removeAllListeners=l,e.emit=l,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")},{"1YiZ5S":11,buffer:8}]},{},[3]);
//# sourceMappingURL=markless.js.map