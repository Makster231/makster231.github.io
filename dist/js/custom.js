!function e(t,n,r){function o(i,a){if(!n[i]){if(!t[i]){var u="function"==typeof require&&require;if(!a&&u)return u(i,!0);if(s)return s(i,!0);throw new Error("Cannot find module '"+i+"'")}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return o(n||e)},c,c.exports,e,t,n,r)}return n[i].exports}for(var s="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){(function(e,t,n,r,o,s,i,a,u){"use strict";function c(e){g?d.main.css({transform:"translateZ(-50vw) rotateY("+90*e+"deg)"}):h||p?d.main.css({transform:"translateX(-"+e/2*$(window).width()+"px)"}):d.main.css({transform:"translateZ(-50vh) rotateX("+90*e+"deg)"})}function f(e,t){g&&d.wrapper.css({height:e.outerHeight()+t+"px"})}var l={item:$(".js_nav-item"),about:$(".js_nav-about"),works:$(".js_nav-works"),costs:$(".js_nav-costs"),contacts:$(".js_nav-contacts")},d={wrapper:$(".js_wrapper-page"),main:$(".js_main-page"),section:$(".js_main-section"),about:$(".js_page-about"),works:$(".js_page-works"),costs:$(".js_page-costs"),contacts:$(".js_page-contacts")},g=$(window).width()<640,h=!!document.documentMode,p=!h&&!!window.StyleMedia;"objectFit"in document.documentElement.style==!1&&document.addEventListener("DOMContentLoaded",function(){Array.prototype.forEach.call(document.querySelectorAll("img[data-object-fit]"),function(e){(e.runtimeStyle||e.style).background='url("'+e.src+'") no-repeat 50%/'+(e.currentStyle?e.currentStyle["object-fit"]:e.getAttribute("data-object-fit")),e.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+e.width+"' height='"+e.height+"'%3E%3C/svg%3E"})}),function(e,t,n){e(".js_fancybox-valio").click(function(){e.fancybox.open([{src:"../../images/works/valio/1.jpg"},{src:"../../images/works/valio/2.jpg"},{src:"../../images/works/valio/3.jpg"},{src:"../../images/works/valio/4.jpg"},{src:"../../images/works/valio/5.jpg"},{src:"../../images/works/valio/6.jpg"},{src:"../../images/works/valio/7.jpg"},{src:"../../images/works/valio/8.jpg"},{src:"../../images/works/valio/9.jpg"},{src:"../../images/works/valio/10.jpg"},{src:"../../images/works/valio/11.jpg"},{src:"../../images/works/valio/12.jpg"},{src:"../../images/works/valio/13.jpg"},{src:"../../images/works/valio/14.jpg"},{src:"../../images/works/valio/15.jpg"},{src:"../../images/works/valio/16.jpg"},{src:"../../images/works/valio/17.jpg"},{src:"../../images/works/valio/18.jpg"},{src:"../../images/works/valio/19.jpg"},{src:"../../images/works/valio/20.jpg"},{src:"../../images/works/valio/21.jpg"},{src:"../../images/works/valio/22.jpg"},{src:"../../images/works/valio/23.jpg"},{src:"../../images/works/valio/24.jpg"},{src:"../../images/works/valio/25.jpg"},{src:"../../images/works/valio/26.jpg"}],{touch:!1,loop:!0})}),e(".js_fancybox-sberbank").click(function(){e.fancybox.open([{src:"../../images/works/sberbank/1.jpg"},{src:"../../images/works/sberbank/2.jpg"},{src:"../../images/works/sberbank/3.jpg"},{src:"../../images/works/sberbank/4.jpg"},{src:"../../images/works/sberbank/5.jpg"},{src:"../../images/works/sberbank/6.jpg"},{src:"../../images/works/sberbank/7.jpg"},{src:"../../images/works/sberbank/8.jpg"},{src:"../../images/works/sberbank/9.jpg"},{src:"../../images/works/sberbank/10.jpg"},{src:"../../images/works/sberbank/11.jpg"},{src:"../../images/works/sberbank/12.jpg"},{src:"../../images/works/sberbank/13.jpg"},{src:"../../images/works/sberbank/14.jpg"},{src:"../../images/works/sberbank/15.jpg"},{src:"../../images/works/sberbank/16.jpg"},{src:"../../images/works/sberbank/17.jpg"},{src:"../../images/works/sberbank/18.jpg"},{src:"../../images/works/sberbank/19.jpg"},{src:"../../images/works/sberbank/20.jpg"},{src:"../../images/works/sberbank/21.jpg"}],{touch:!1,loop:!0})}),e(".js_fancybox-bitbunch").click(function(){e.fancybox.open([{src:"../../images/works/bitbunch/full.jpg"},{src:"../../images/works/bitbunch/full_tablet.jpg"},{src:"../../images/works/bitbunch/full_mob.jpg"}],{loop:!0,touch:!1})})}(window.jQuery,window,document),function(e,t,n){function r(){l.item.click(function(){var t=e(this);l.item.removeClass("js_active"),t.addClass("js_active"),t.is(l.about)?(f(d.about,10),c(0),d.about.addClass("js_animation-about")):d.about.removeClass("js_animation-about"),t.is(l.works)?(f(e(".js_works-page--slider"),110),c(1),d.works.addClass("js_animation-works")):d.works.removeClass("js_animation-works"),t.is(l.costs)?(f(d.costs,20),c(2),d.costs.addClass("js_animation-costs")):d.costs.removeClass("js_animation-costs"),t.is(l.contacts)?(f(d.contacts,20),c(3),d.contacts.addClass("js_animation-contacts")):d.contacts.removeClass("js_animation-contacts")})}e(function(){f(d.about,10),r()})}(window.jQuery,window,document),function(e,t,n){function r(e){e=e||t.event;var n=e.deltaY||e.detail||e.wheelDelta;if(d.about.removeClass("js_animation-about"),d.works.removeClass("js_animation-works"),d.costs.removeClass("js_animation-costs"),d.contacts.removeClass("js_animation-contacts"),n<0){if(l.about.hasClass("js_active"))return c(3),l.about.removeClass("js_active"),l.contacts.addClass("js_active"),void d.contacts.addClass("js_animation-contacts");if(l.works.hasClass("js_active"))return c(0),l.works.removeClass("js_active"),l.about.addClass("js_active"),void d.about.addClass("js_animation-about");if(l.costs.hasClass("js_active"))return c(1),l.costs.removeClass("js_active"),l.works.addClass("js_active"),void d.works.addClass("js_animation-works");if(l.contacts.hasClass("js_active"))return c(2),l.contacts.removeClass("js_active"),l.costs.addClass("js_active"),void d.costs.addClass("js_animation-costs")}else{if(l.about.hasClass("js_active"))return c(1),l.about.removeClass("js_active"),l.works.addClass("js_active"),void d.works.addClass("js_animation-works");if(l.works.hasClass("js_active"))return c(2),l.works.removeClass("js_active"),l.costs.addClass("js_active"),void d.costs.addClass("js_animation-costs");if(l.costs.hasClass("js_active"))return c(3),l.costs.removeClass("js_active"),l.contacts.addClass("js_active"),void d.contacts.addClass("js_animation-contacts");if(l.contacts.hasClass("js_active"))return c(0),l.contacts.removeClass("js_active"),l.about.addClass("js_active"),void d.about.addClass("js_animation-about")}e.preventDefault?e.preventDefault():e.returnValue=!1}var o=n.getElementById("js_body");o.addEventListener?"onwheel"in n?o.addEventListener("wheel",r):"onmousewheel"in n?o.addEventListener("mousewheel",r):o.addEventListener("MozMousePixelScroll",r):o.attachEvent("onmousewheel",r),e(function(){})}(window.jQuery,window,document),function(e,t,n){function r(e){e.preventDefault()}function o(){n.body.addEventListener("touchmove",r,{passive:!1})}function s(){n.body.removeEventListener("touchmove",r,{passive:!1})}function i(){e(".js_form-control").on("focus",function(){e("#js_body").addClass("js_overflow-stop"),o()}),e(".js_form-control").on("blur",function(){e("#js_body").removeClass("js_overflow-stop"),s()})}function a(e){e.validate({rules:{name:{required:!0,minlength:3},email:{required:!0},textarea:{required:!0,minlength:20}},messages:{name:{required:"Введите Ваше Имя"},email:{required:"Введите Валидный E-mail"},textarea:{required:"Введите ваше сообщение",minlength:"Введите Как Минимум 20 Знаков"}}})}function u(){e(".js_form").on("submit",function(t){t.preventDefault();var n=e(this),r=e(this).find("button");if(a(n),n.valid()){r.addClass("js_loader").attr("disabled",!0);var o=n.serialize();e.ajax({type:"POST",url:"http://k92582vf.beget.tech/mail_send.php",data:o,success:function(e){"OK"==e?(n.addClass("js_form-success"),r.removeClass("js_loader").attr("disabled",!1)):(alert("Произошла какая-то ошибка, пожалуйста, попробуйте позже"),r.removeClass("js_loader").attr("disabled",!1))}})}})}jQuery.validator.setDefaults({errorElement:"label",errorClass:"error",focusInvalid:!1,errorPlacement:function(t,n){e(n).closest(".form-group").append(t)},highlight:function(t,n,r){e(t).closest(".form-group").addClass("has-error"),e(t).addClass("error")},unhighlight:function(t,n,r){e(t).closest(".form-group").removeClass("has-error"),e(t).removeClass("error")}}),e(function(){u(),i()})}(window.jQuery,window,document),function(e,t,n){e(function(){e("head").prepend('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />')})}(window.jQuery,window,document),function(e,t,n){function r(){e(".js_works-page--slider").slick({infinite:!0,speed:700,slidesToShow:3,lazyLoad:"ondemand",slidesToScroll:1,responsive:[{breakpoint:991,settings:{slidesToShow:1}}]})}e(function(){g||r(),(h||p)&&e(".js_wrapper-page").addClass("js_light-version"),e("body").css("opacity","1")})}(window.jQuery,window,document)}).call(this,e("9FoBSB"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_b9561ebe.js","/")},{"9FoBSB":5,buffer:3}],2:[function(e,t,n){(function(e,t,r,o,s,i,a,u,c){!function(e){"use strict";function t(e){var t=e.charCodeAt(0);return t===s||t===f?62:t===i||t===l?63:t<a?-1:t<a+10?t-a+26+26:t<c+26?t-c:t<u+26?t-u+26:void 0}function n(e){function n(e){c[l++]=e}var r,s,i,a,u,c;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var f=e.length;u="="===e.charAt(f-2)?2:"="===e.charAt(f-1)?1:0,c=new o(3*e.length/4-u),i=u>0?e.length-4:e.length;var l=0;for(r=0,s=0;r<i;r+=4,s+=3)a=t(e.charAt(r))<<18|t(e.charAt(r+1))<<12|t(e.charAt(r+2))<<6|t(e.charAt(r+3)),n((16711680&a)>>16),n((65280&a)>>8),n(255&a);return 2===u?(a=t(e.charAt(r))<<2|t(e.charAt(r+1))>>4,n(255&a)):1===u&&(a=t(e.charAt(r))<<10|t(e.charAt(r+1))<<4|t(e.charAt(r+2))>>2,n(a>>8&255),n(255&a)),c}function r(e){function t(e){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)}function n(e){return t(e>>18&63)+t(e>>12&63)+t(e>>6&63)+t(63&e)}var r,o,s,i=e.length%3,a="";for(r=0,s=e.length-i;r<s;r+=3)o=(e[r]<<16)+(e[r+1]<<8)+e[r+2],a+=n(o);switch(i){case 1:o=e[e.length-1],a+=t(o>>2),a+=t(o<<4&63),a+="==";break;case 2:o=(e[e.length-2]<<8)+e[e.length-1],a+=t(o>>10),a+=t(o>>4&63),a+=t(o<<2&63),a+="="}return a}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="+".charCodeAt(0),i="/".charCodeAt(0),a="0".charCodeAt(0),u="a".charCodeAt(0),c="A".charCodeAt(0),f="-".charCodeAt(0),l="_".charCodeAt(0);e.toByteArray=n,e.fromByteArray=r}(void 0===n?this.base64js={}:n)}).call(this,e("9FoBSB"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\node_modules\\base64-js\\lib\\b64.js","/..\\..\\..\\node_modules\\base64-js\\lib")},{"9FoBSB":5,buffer:3}],3:[function(e,t,n){(function(t,r,o,s,i,a,u,c,f){function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);var r=typeof e;if("base64"===t&&"string"===r)for(e=F(e);e.length%4!=0;)e+="=";var s;if("number"===r)s=D(e);else if("string"===r)s=o.byteLength(e,t);else{if("object"!==r)throw new Error("First argument needs to be a number, array or string.");s=D(e.length)}var i;o._useTypedArrays?i=o._augment(new Uint8Array(s)):(i=this,i.length=s,i._isBuffer=!0);var a;if(o._useTypedArrays&&"number"==typeof e.byteLength)i._set(e);else if(q(e))for(a=0;a<s;a++)o.isBuffer(e)?i[a]=e.readUInt8(a):i[a]=e[a];else if("string"===r)i.write(e,0,t);else if("number"===r&&!o._useTypedArrays&&!n)for(a=0;a<s;a++)i[a]=0;return i}function l(e,t,n,r){n=Number(n)||0;var s=e.length-n;r?(r=Number(r))>s&&(r=s):r=s;var i=t.length;H(i%2==0,"Invalid hex string"),r>i/2&&(r=i/2);for(var a=0;a<r;a++){var u=parseInt(t.substr(2*a,2),16);H(!isNaN(u),"Invalid hex string"),e[n+a]=u}return o._charsWritten=2*a,a}function d(e,t,n,r){return o._charsWritten=X(Q(t),e,n,r)}function g(e,t,n,r){return o._charsWritten=X(P(t),e,n,r)}function h(e,t,n,r){return g(e,t,n,r)}function p(e,t,n,r){return o._charsWritten=X(z(t),e,n,r)}function w(e,t,n,r){return o._charsWritten=X(W(t),e,n,r)}function m(e,t,n){return 0===t&&n===e.length?K.fromByteArray(e):K.fromByteArray(e.slice(t,n))}function v(e,t,n){var r="",o="";n=Math.min(e.length,n);for(var s=t;s<n;s++)e[s]<=127?(r+=Y(o)+String.fromCharCode(e[s]),o=""):o+="%"+e[s].toString(16);return r+Y(o)}function b(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;o<n;o++)r+=String.fromCharCode(e[o]);return r}function y(e,t,n){return b(e,t,n)}function j(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var o="",s=t;s<n;s++)o+=O(e[s]);return o}function k(e,t,n){for(var r=e.slice(t,n),o="",s=0;s<r.length;s+=2)o+=String.fromCharCode(r[s]+256*r[s+1]);return o}function _(e,t,n,r){r||(H("boolean"==typeof n,"missing or invalid endian"),H(void 0!==t&&null!==t,"missing offset"),H(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var s;return n?(s=e[t],t+1<o&&(s|=e[t+1]<<8)):(s=e[t]<<8,t+1<o&&(s|=e[t+1])),s}}function E(e,t,n,r){r||(H("boolean"==typeof n,"missing or invalid endian"),H(void 0!==t&&null!==t,"missing offset"),H(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var s;return n?(t+2<o&&(s=e[t+2]<<16),t+1<o&&(s|=e[t+1]<<8),s|=e[t],t+3<o&&(s+=e[t+3]<<24>>>0)):(t+1<o&&(s=e[t+1]<<16),t+2<o&&(s|=e[t+2]<<8),t+3<o&&(s|=e[t+3]),s+=e[t]<<24>>>0),s}}function C(e,t,n,r){if(r||(H("boolean"==typeof n,"missing or invalid endian"),H(void 0!==t&&null!==t,"missing offset"),H(t+1<e.length,"Trying to read beyond buffer length")),!(t>=e.length)){var o=_(e,t,n,!0);return 32768&o?-1*(65535-o+1):o}}function B(e,t,n,r){if(r||(H("boolean"==typeof n,"missing or invalid endian"),H(void 0!==t&&null!==t,"missing offset"),H(t+3<e.length,"Trying to read beyond buffer length")),!(t>=e.length)){var o=E(e,t,n,!0);return 2147483648&o?-1*(4294967295-o+1):o}}function I(e,t,n,r){return r||(H("boolean"==typeof n,"missing or invalid endian"),H(t+3<e.length,"Trying to read beyond buffer length")),V.read(e,t,n,23,4)}function A(e,t,n,r){return r||(H("boolean"==typeof n,"missing or invalid endian"),H(t+7<e.length,"Trying to read beyond buffer length")),V.read(e,t,n,52,8)}function L(e,t,n,r,o){o||(H(void 0!==t&&null!==t,"missing value"),H("boolean"==typeof r,"missing or invalid endian"),H(void 0!==n&&null!==n,"missing offset"),H(n+1<e.length,"trying to write beyond buffer length"),J(t,65535));var s=e.length;if(!(n>=s))for(var i=0,a=Math.min(s-n,2);i<a;i++)e[n+i]=(t&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function S(e,t,n,r,o){o||(H(void 0!==t&&null!==t,"missing value"),H("boolean"==typeof r,"missing or invalid endian"),H(void 0!==n&&null!==n,"missing offset"),H(n+3<e.length,"trying to write beyond buffer length"),J(t,4294967295));var s=e.length;if(!(n>=s))for(var i=0,a=Math.min(s-n,4);i<a;i++)e[n+i]=t>>>8*(r?i:3-i)&255}function U(e,t,n,r,o){o||(H(void 0!==t&&null!==t,"missing value"),H("boolean"==typeof r,"missing or invalid endian"),H(void 0!==n&&null!==n,"missing offset"),H(n+1<e.length,"Trying to write beyond buffer length"),R(t,32767,-32768)),n>=e.length||(t>=0?L(e,t,n,r,o):L(e,65535+t+1,n,r,o))}function x(e,t,n,r,o){o||(H(void 0!==t&&null!==t,"missing value"),H("boolean"==typeof r,"missing or invalid endian"),H(void 0!==n&&null!==n,"missing offset"),H(n+3<e.length,"Trying to write beyond buffer length"),R(t,2147483647,-2147483648)),n>=e.length||(t>=0?S(e,t,n,r,o):S(e,4294967295+t+1,n,r,o))}function T(e,t,n,r,o){o||(H(void 0!==t&&null!==t,"missing value"),H("boolean"==typeof r,"missing or invalid endian"),H(void 0!==n&&null!==n,"missing offset"),H(n+3<e.length,"Trying to write beyond buffer length"),Z(t,3.4028234663852886e38,-3.4028234663852886e38)),n>=e.length||V.write(e,t,n,r,23,4)}function M(e,t,n,r,o){o||(H(void 0!==t&&null!==t,"missing value"),H("boolean"==typeof r,"missing or invalid endian"),H(void 0!==n&&null!==n,"missing offset"),H(n+7<e.length,"Trying to write beyond buffer length"),Z(t,1.7976931348623157e308,-1.7976931348623157e308)),n>=e.length||V.write(e,t,n,r,52,8)}function F(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function N(e,t,n){return"number"!=typeof e?n:(e=~~e)>=t?t:e>=0?e:(e+=t,e>=0?e:0)}function D(e){return e=~~Math.ceil(+e),e<0?0:e}function $(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function q(e){return $(e)||o.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function O(e){return e<16?"0"+e.toString(16):e.toString(16)}function Q(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else{var o=n;r>=55296&&r<=57343&&n++;for(var s=encodeURIComponent(e.slice(o,n+1)).substr(1).split("%"),i=0;i<s.length;i++)t.push(parseInt(s[i],16))}}return t}function P(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}function W(e){for(var t,n,r,o=[],s=0;s<e.length;s++)t=e.charCodeAt(s),n=t>>8,r=t%256,o.push(r),o.push(n);return o}function z(e){return K.toByteArray(e)}function X(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);o++)t[o+n]=e[o];return o}function Y(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function J(e,t){H("number"==typeof e,"cannot write a non-number as a number"),H(e>=0,"specified a negative value for writing an unsigned value"),H(e<=t,"value is larger than maximum value for type"),H(Math.floor(e)===e,"value has a fractional component")}function R(e,t,n){H("number"==typeof e,"cannot write a non-number as a number"),H(e<=t,"value larger than maximum allowed value"),H(e>=n,"value smaller than minimum allowed value"),H(Math.floor(e)===e,"value has a fractional component")}function Z(e,t,n){H("number"==typeof e,"cannot write a non-number as a number"),H(e<=t,"value larger than maximum allowed value"),H(e>=n,"value smaller than minimum allowed value")}function H(e,t){if(!e)throw new Error(t||"Failed assertion")}var K=e("base64-js"),V=e("ieee754");n.Buffer=o,n.SlowBuffer=o,n.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},o.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=Q(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=z(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},o.concat=function(e,t){if(H($(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];var n;if("number"!=typeof t)for(t=0,n=0;n<e.length;n++)t+=e[n].length;var r=new o(t),s=0;for(n=0;n<e.length;n++){var i=e[n];i.copy(r,s),s+=i.length}return r},o.prototype.write=function(e,t,n,r){if(isFinite(t))isFinite(n)||(r=n,n=void 0);else{var o=r;r=t,t=n,n=o}t=Number(t)||0;var s=this.length-t;n?(n=Number(n))>s&&(n=s):n=s,r=String(r||"utf8").toLowerCase();var i;switch(r){case"hex":i=l(this,e,t,n);break;case"utf8":case"utf-8":i=d(this,e,t,n);break;case"ascii":i=g(this,e,t,n);break;case"binary":i=h(this,e,t,n);break;case"base64":i=p(this,e,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":i=w(this,e,t,n);break;default:throw new Error("Unknown encoding")}return i},o.prototype.toString=function(e,t,n){var r=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(n=void 0!==n?Number(n):n=r.length)===t)return"";var o;switch(e){case"hex":o=j(r,t,n);break;case"utf8":case"utf-8":o=v(r,t,n);break;case"ascii":o=b(r,t,n);break;case"binary":o=y(r,t,n);break;case"base64":o=m(r,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=k(r,t,n);break;default:throw new Error("Unknown encoding")}return o},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,t,n,r){var s=this;if(n||(n=0),r||0===r||(r=this.length),t||(t=0),r!==n&&0!==e.length&&0!==s.length){H(r>=n,"sourceEnd < sourceStart"),H(t>=0&&t<e.length,"targetStart out of bounds"),H(n>=0&&n<s.length,"sourceStart out of bounds"),H(r>=0&&r<=s.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i=r-n;if(i<100||!o._useTypedArrays)for(var a=0;a<i;a++)e[a+t]=this[a+n];else e._set(this.subarray(n,n+i),t)}},o.prototype.slice=function(e,t){var n=this.length;if(e=N(e,n,0),t=N(t,n,n),o._useTypedArrays)return o._augment(this.subarray(e,t));for(var r=t-e,s=new o(r,void 0,!0),i=0;i<r;i++)s[i]=this[i+e];return s},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},o.prototype.readUInt8=function(e,t){if(t||(H(void 0!==e&&null!==e,"missing offset"),H(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},o.prototype.readUInt16LE=function(e,t){return _(this,e,!0,t)},o.prototype.readUInt16BE=function(e,t){return _(this,e,!1,t)},o.prototype.readUInt32LE=function(e,t){return E(this,e,!0,t)},o.prototype.readUInt32BE=function(e,t){return E(this,e,!1,t)},o.prototype.readInt8=function(e,t){if(t||(H(void 0!==e&&null!==e,"missing offset"),H(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){return 128&this[e]?-1*(255-this[e]+1):this[e]}},o.prototype.readInt16LE=function(e,t){return C(this,e,!0,t)},o.prototype.readInt16BE=function(e,t){return C(this,e,!1,t)},o.prototype.readInt32LE=function(e,t){return B(this,e,!0,t)},o.prototype.readInt32BE=function(e,t){return B(this,e,!1,t)},o.prototype.readFloatLE=function(e,t){return I(this,e,!0,t)},o.prototype.readFloatBE=function(e,t){return I(this,e,!1,t)},o.prototype.readDoubleLE=function(e,t){return A(this,e,!0,t)},o.prototype.readDoubleBE=function(e,t){return A(this,e,!1,t)},o.prototype.writeUInt8=function(e,t,n){n||(H(void 0!==e&&null!==e,"missing value"),H(void 0!==t&&null!==t,"missing offset"),H(t<this.length,"trying to write beyond buffer length"),J(e,255)),t>=this.length||(this[t]=e)},o.prototype.writeUInt16LE=function(e,t,n){L(this,e,t,!0,n)},o.prototype.writeUInt16BE=function(e,t,n){L(this,e,t,!1,n)},o.prototype.writeUInt32LE=function(e,t,n){S(this,e,t,!0,n)},o.prototype.writeUInt32BE=function(e,t,n){S(this,e,t,!1,n)},o.prototype.writeInt8=function(e,t,n){n||(H(void 0!==e&&null!==e,"missing value"),H(void 0!==t&&null!==t,"missing offset"),H(t<this.length,"Trying to write beyond buffer length"),R(e,127,-128)),t>=this.length||(e>=0?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},o.prototype.writeInt16LE=function(e,t,n){U(this,e,t,!0,n)},o.prototype.writeInt16BE=function(e,t,n){U(this,e,t,!1,n)},o.prototype.writeInt32LE=function(e,t,n){x(this,e,t,!0,n)},o.prototype.writeInt32BE=function(e,t,n){x(this,e,t,!1,n)},o.prototype.writeFloatLE=function(e,t,n){T(this,e,t,!0,n)},o.prototype.writeFloatBE=function(e,t,n){T(this,e,t,!1,n)},o.prototype.writeDoubleLE=function(e,t,n){M(this,e,t,!0,n)},o.prototype.writeDoubleBE=function(e,t,n){M(this,e,t,!1,n)},o.prototype.fill=function(e,t,n){if(e||(e=0),t||(t=0),n||(n=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),H("number"==typeof e&&!isNaN(e),"value is not a number"),H(n>=t,"end < start"),n!==t&&0!==this.length){H(t>=0&&t<this.length,"start out of bounds"),H(n>=0&&n<=this.length,"end out of bounds");for(var r=t;r<n;r++)this[r]=e}},o.prototype.inspect=function(){for(var e=[],t=this.length,r=0;r<t;r++)if(e[r]=O(this[r]),r===n.INSPECT_MAX_BYTES){e[r+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var G=o.prototype;o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=G.get,e.set=G.set,e.write=G.write,e.toString=G.toString,e.toLocaleString=G.toString,e.toJSON=G.toJSON,e.copy=G.copy,e.slice=G.slice,e.readUInt8=G.readUInt8,e.readUInt16LE=G.readUInt16LE,e.readUInt16BE=G.readUInt16BE,e.readUInt32LE=G.readUInt32LE,e.readUInt32BE=G.readUInt32BE,e.readInt8=G.readInt8,e.readInt16LE=G.readInt16LE,e.readInt16BE=G.readInt16BE,e.readInt32LE=G.readInt32LE,e.readInt32BE=G.readInt32BE,e.readFloatLE=G.readFloatLE,e.readFloatBE=G.readFloatBE,e.readDoubleLE=G.readDoubleLE,e.readDoubleBE=G.readDoubleBE,e.writeUInt8=G.writeUInt8,e.writeUInt16LE=G.writeUInt16LE,e.writeUInt16BE=G.writeUInt16BE,e.writeUInt32LE=G.writeUInt32LE,e.writeUInt32BE=G.writeUInt32BE,e.writeInt8=G.writeInt8,e.writeInt16LE=G.writeInt16LE,e.writeInt16BE=G.writeInt16BE,e.writeInt32LE=G.writeInt32LE,e.writeInt32BE=G.writeInt32BE,e.writeFloatLE=G.writeFloatLE,e.writeFloatBE=G.writeFloatBE,e.writeDoubleLE=G.writeDoubleLE,e.writeDoubleBE=G.writeDoubleBE,e.fill=G.fill,e.inspect=G.inspect,e.toArrayBuffer=G.toArrayBuffer,e}}).call(this,e("9FoBSB"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\node_modules\\buffer\\index.js","/..\\..\\..\\node_modules\\buffer")},{"9FoBSB":5,"base64-js":2,buffer:3,ieee754:4}],4:[function(e,t,n){(function(e,t,r,o,s,i,a,u,c){n.read=function(e,t,n,r,o){var s,i,a=8*o-r-1,u=(1<<a)-1,c=u>>1,f=-7,l=n?o-1:0,d=n?-1:1,g=e[t+l];for(l+=d,s=g&(1<<-f)-1,g>>=-f,f+=a;f>0;s=256*s+e[t+l],l+=d,f-=8);for(i=s&(1<<-f)-1,s>>=-f,f+=r;f>0;i=256*i+e[t+l],l+=d,f-=8);if(0===s)s=1-c;else{if(s===u)return i?NaN:1/0*(g?-1:1);i+=Math.pow(2,r),s-=c}return(g?-1:1)*i*Math.pow(2,s-r)},n.write=function(e,t,n,r,o,s){var i,a,u,c=8*s-o-1,f=(1<<c)-1,l=f>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,g=r?0:s-1,h=r?1:-1,p=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,i=f):(i=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-i))<1&&(i--,u*=2),t+=i+l>=1?d/u:d*Math.pow(2,1-l),t*u>=2&&(i++,u/=2),i+l>=f?(a=0,i=f):i+l>=1?(a=(t*u-1)*Math.pow(2,o),i+=l):(a=t*Math.pow(2,l-1)*Math.pow(2,o),i=0));o>=8;e[n+g]=255&a,g+=h,a/=256,o-=8);for(i=i<<o|a,c+=o;c>0;e[n+g]=255&i,g+=h,i/=256,c-=8);e[n+g-h]|=128*p}}).call(this,e("9FoBSB"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\node_modules\\ieee754\\index.js","/..\\..\\..\\node_modules\\ieee754")},{"9FoBSB":5,buffer:3}],5:[function(e,t,n){(function(e,n,r,o,s,i,a,u,c){function f(){}var e=t.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),n.length>0)){n.shift()()}},!0),function(e){n.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=f,e.addListener=f,e.once=f,e.off=f,e.removeListener=f,e.removeAllListeners=f,e.emit=f,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")}}).call(this,e("9FoBSB"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\node_modules\\process\\browser.js","/..\\..\\..\\node_modules\\process")},{"9FoBSB":5,buffer:3}]},{},[1]);