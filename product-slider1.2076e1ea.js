parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D5bH":[function(require,module,exports) {
var t=document.querySelector(".ice-cream-product").children,e=document.querySelector(".product-button-right"),c=document.querySelector(".product-button-left"),n=t.length,o=0;function r(e){for("next"==e?++o==n&&(o=0):0==o?o=n-1:o--,i=0;i<t.length;i++)t[i].classList.remove("active");t[o].classList.add("active")}e.onclick=function(){r("next")},c.onclick=function(){r("prev")};
},{}]},{},["D5bH"], null)
//# sourceMappingURL=/ice-cream-progect/product-slider1.2076e1ea.js.map