!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,y=Math.min,m=function(){return d.Date.now()};function p(e,t,n){var i,r,u,f,a,c,l=0,d=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError(o);function j(t){var n=i,o=r;return i=r=void 0,l=t,f=e.apply(o,n)}function h(e){return l=e,a=setTimeout(T,t),d?j(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function T(){var e=m();if(O(e))return w(e);a=setTimeout(T,function(e){var n=t-(e-c);return s?y(n,u-(e-l)):n}(e))}function w(e){return a=void 0,p&&i?j(e):(i=r=void 0,f)}function S(){var e=m(),n=O(e);if(i=arguments,r=this,c=e,n){if(void 0===a)return h(c);if(s)return a=setTimeout(T,t),j(c)}return void 0===a&&(a=setTimeout(T,t)),f}return t=g(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(g(n.maxWait)||0,t):u,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=r=a=void 0},S.flush=function(){return void 0===a?f:w(m())},S}function b(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=b(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var c=u.test(e);return c||f.test(e)?a(e.slice(2),c?2:8):r.test(e)?NaN:+e}var j=document.querySelector("iframe"),h=new Vimeo.Player(j);h.on("timeupdate",(function(e){var t=e.seconds;localStorage.setItem("videoplayer-current-time",JSON.stringify(t))})),h.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.132a8030.js.map
