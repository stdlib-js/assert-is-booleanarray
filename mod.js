// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,d=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":f(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,d,"e"),n=s.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),e.alternate&&(n=s.call(n,y,"$1."),n=s.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):c.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var E=String.fromCharCode,_=isNaN,T=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,o,a,f,c,l,s,p,g,y,h;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(f="",c=1,l=0;l<e.length;l++)if(n=e[l],"string"==typeof n)f+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,y=n.padRight,h=void 0,(h=g-p.length)<0?p:p=y?p+m(h):m(h)+p)),f+=n.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,i;for(t=[],i=0,n=S.exec(e);n;)(r=e.slice(i,S.lastIndex-n[0].length)).length&&t.push(r),t.push(x(n)),i=S.lastIndex,n=S.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function k(e){var r,t;if("string"!=typeof e)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return A.apply(null,r)}var B,O=Object.prototype,I=O.toString,P=O.__defineGetter__,L=O.__defineSetter__,N=O.__lookupGetter__,F=O.__lookupSetter__;B=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(e,r)||F.call(e,r)?(n=e.__proto__,e.__proto__=O,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(e,r,t.get),a&&L&&L.call(e,r,t.set),e};var M=B;function R(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"number"==typeof e}var $="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function C(){return $&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var G=Object.prototype.hasOwnProperty;function Z(e,r){return null!=e&&G.call(e,r)}var W="function"==typeof Symbol?Symbol:void 0,X="function"==typeof W?W.toStringTag:"";var z=C()?function(e){var r,t,n;if(null==e)return Y.call(e);t=e[X],r=Z(e,X);try{e[X]=void 0}catch(r){return Y.call(e)}return n=Y.call(e),r?e[X]=t:delete e[X],n}:function(e){return Y.call(e)},q=Number,D=q.prototype.toString;var H=C();function J(e){return"object"==typeof e&&(e instanceof q||(H?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object Number]"===z(e)))}function K(e){return U(e)||J(e)}R(K,"isPrimitive",U),R(K,"isObject",J);var Q=Number.POSITIVE_INFINITY,ee=q.NEGATIVE_INFINITY,re=Math.floor;function te(e){return re(e)===e}function ne(e){return e<Q&&e>ee&&te(e)}function ie(e){return U(e)&&ne(e)}function oe(e){return J(e)&&ne(e.valueOf())}function ae(e){return ie(e)||oe(e)}function ue(e){return ie(e)&&e>=0}function fe(e){return oe(e)&&e.valueOf()>=0}function ce(e){return ue(e)||fe(e)}R(ae,"isPrimitive",ie),R(ae,"isObject",oe),R(ce,"isPrimitive",ue),R(ce,"isObject",fe);var le=9007199254740991;function se(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&te(e.length)&&e.length>=0&&e.length<=le}var pe="function"==typeof ArrayBuffer;function ge(e){return pe&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===z(e)}var ye=Array.isArray?Array.isArray:function(e){return"[object Array]"===z(e)};function he(e){return"object"==typeof e&&null!==e&&!ye(e)}var be=/./;function de(e){return"boolean"==typeof e}var ve=Boolean,we=Boolean.prototype.toString;var me=C();function Ee(e){return"object"==typeof e&&(e instanceof ve||(me?function(e){try{return we.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===z(e)))}function _e(e){return de(e)||Ee(e)}R(_e,"isPrimitive",de),R(_e,"isObject",Ee);var Te="object"==typeof self?self:null,je="object"==typeof window?window:null,Ae="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Se="object"==typeof Ae?Ae:null,xe="object"==typeof globalThis?globalThis:null;var Ve=function(e){if(arguments.length){if(!de(e))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(xe)return xe;if(Te)return Te;if(je)return je;if(Se)return Se;throw new Error("unexpected error. Unable to resolve global object.")}(),ke=Ve.document&&Ve.document.childNodes,Be=Int8Array;function Oe(){return/^\s*function\s*([^(]*)/i}var Ie=/^\s*function\s*([^(]*)/i;function Pe(e){return null!==e&&"object"==typeof e}function Le(e){var r,t,n,i;if(("Object"===(t=z(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Ie.exec(n.toString()))return r[1]}return Pe(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}R(Oe,"REGEXP",Ie),R(Pe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ye(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Pe));var Ne="function"==typeof be||"object"==typeof Be||"function"==typeof ke?function(e){return Le(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Le(e).toLowerCase():r};function Fe(e){return"function"===Ne(e)}function Me(){return"function"==typeof W&&"symbol"==typeof W("foo")&&Z(W,"iterator")&&"symbol"==typeof W.iterator}var Re=Me()?Symbol.iterator:null;function Ue(e,r,t){M(e,r,{configurable:!1,enumerable:!1,get:t})}var $e="function"==typeof Uint8Array;var Ce="function"==typeof Uint8Array?Uint8Array:null;var Ye="function"==typeof Uint8Array?Uint8Array:void 0;var Ge=function(){var e,r,t;if("function"!=typeof Ce)return!1;try{r=new Ce(r=[1,3.14,-3.14,256,257]),t=r,e=($e&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ye:function(){throw new Error("not implemented")},Ze={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};var We={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function Xe(e){var r,t;for(r=[];!(t=e.next()).done;)r.push(ve(t.value));return r}var ze=Ge.BYTES_PER_ELEMENT,qe=Me();function De(e){return"object"==typeof e&&null!==e&&"BooleanArray"===e.constructor.name&&e.BYTES_PER_ELEMENT===ze}function He(e){return e===Je}function Je(){var e,r,t,n,i;if(r=arguments.length,!(this instanceof Je))return 0===r?new Je:1===r?new Je(arguments[0]):2===r?new Je(arguments[0],arguments[1]):new Je(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Ge(0);else if(1===r)if(ue(i=arguments[0]))t=new Ge(i);else if(se(i))t=function(e,r){var t,n;for(t=r.length,n=0;n<t;n++)e[n]=ve(r[n]);return e}(new Ge(i.length),i);else if(ge(i))t=new Ge(i);else{if(!he(i))throw new TypeError(k("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",i));if(!1===qe)throw new TypeError(k("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",i));if(!Fe(i[Re]))throw new TypeError(k("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",i));if(!Fe((t=i[Re]()).next))throw new TypeError(k("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",i));t=new Ge(Xe(t))}else{if(!ge(t=arguments[0]))throw new TypeError(k("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ue(e=arguments[1]))throw new TypeError(k("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(2===r)t=new Ge(t,e);else{if(!ue(n=arguments[2]))throw new TypeError(k("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ze>t.byteLength-e)throw new RangeError(k("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ze));t=new Ge(t,e,n)}}return R(this,"_buffer",t),R(this,"_length",t.length),this}function Ke(e){return e instanceof Je||"BooleanArray"===Le(e)}R(Je,"BYTES_PER_ELEMENT",ze),R(Je,"name","BooleanArray"),R(Je,"from",(function(e){var r,t,n,i,o,a,u,f,c;if(!Fe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!He(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if((t=arguments.length)>1){if(!Fe(n=arguments[1]))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(se(e)){if(n){for(f=e.length,u=e.get&&e.set?function(e){var r=We[e];return"function"==typeof r?r:We.default}("default"):function(e){var r=Ze[e];return"function"==typeof r?r:Ze.default}("default"),o=(i=new this(f))._buffer,c=0;c<f;c++)o[c]=ve(n.call(r,u(e,c),c));return i}return new this(e)}if(he(e)&&qe&&Fe(e[Re])){if(!Fe((o=e[Re]()).next))throw new TypeError(k("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));for(a=n?function(e,r,t){var n,i,o;for(n=[],o=-1;!(i=e.next()).done;)o+=1,n.push(ve(r.call(t,i.value,o)));return n}(o,n,r):Xe(o),o=(i=new this(f=a.length))._buffer,c=0;c<f;c++)o[c]=a[c];return i}throw new TypeError(k("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),R(Je,"of",(function(){var e,r;if(!Fe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!He(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Ue(Je.prototype,"buffer",(function(){return this._buffer.buffer})),Ue(Je.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ue(Je.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),R(Je.prototype,"BYTES_PER_ELEMENT",Je.BYTES_PER_ELEMENT),R(Je.prototype,"get",(function(e){if(!De(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(!ue(e))throw new TypeError(k("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return ve(this._buffer[e])})),Ue(Je.prototype,"length",(function(){return this._length})),R(Je.prototype,"set",(function(e){var r,t,n,i,o,a,u;if(!De(this))throw new TypeError("invalid invocation. `this` is not a boolean array.");if(n=this._buffer,arguments.length>1){if(!ue(t=arguments[1]))throw new TypeError(k("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(se(e)){if(t+(o=e.length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=De(e)?e._buffer:e,u=n.byteOffset+t*ze,r.buffer===n.buffer&&r.byteOffset<u&&r.byteOffset+r.byteLength>u){for(i=new Ge(r.length),a=0;a<r.length;a++)i[a]=r[a];r=i}for(a=0;a<o;t++,a++)n[t]=r[a]?1:0}else{if(t>=this._length)throw new RangeError(k("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));n[t]=e?1:0}}));export{Ke as default};
//# sourceMappingURL=mod.js.map
