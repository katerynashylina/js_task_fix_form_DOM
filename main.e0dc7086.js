parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function n(n){return e(n)||r(n)||a(n)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function e(n){if(Array.isArray(n))return n}function o(n){if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(n=a(n))){var t=0,r=function(){};return{s:r,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var e,o,i=!0,l=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return i=n.done,n},e:function(n){l=!0,o=n},f:function(){try{i||null==e.return||e.return()}finally{if(l)throw o}}}}function a(n,t){if(n){if("string"==typeof n)return i(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(n,t):void 0}}function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}var l,c=document.querySelectorAll("input"),u=o(c);try{for(u.s();!(l=u.n()).done;){var f=l.value;f.insertAdjacentHTML("afterend",'\n      <label\n        class="field-label"\n        for='.concat(f.id,"\n      >\n        ").concat(y(f.name).toUpperCase(),"\n      </label>\n    ")),f.placeholder=y(f.name)}}catch(s){u.e(s)}finally{u.f()}function y(t){var r=n(t.split(/(?=[A-Z])/).join(" ")),e=r[0],o=r.slice(1);return"".concat(e.toUpperCase()).concat(o.join(""))}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e0dc7086.js.map