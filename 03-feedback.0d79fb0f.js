var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=a||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var r,o,i,f,a,u,c=0,l=!1,p=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,a=setTimeout(S,t),l?b(e):f}function x(e){var n=e-u;return void 0===u||n>=t||n<0||p&&e-c>=i}function S(){var e=m();if(x(e))return h(e);a=setTimeout(S,function(e){var n=t-(e-u);return p?d(n,i-(e-c)):n}(e))}function h(e){return a=void 0,y&&r?b(e):(r=o=void 0,f)}function w(){var e=m(),n=x(e);if(r=arguments,o=this,u=e,n){if(void 0===a)return j(u);if(p)return a=setTimeout(S,t),b(u)}return void 0===a&&(a=setTimeout(S,t)),f}return t=g(t)||0,v(n)&&(l=!!n.leading,i=(p="maxWait"in n)?s(g(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=o=a=void 0},w.flush=function(){return void 0===a?f:h(m())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var a=o.test(e);return a||i.test(e)?f(e.slice(2),a?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};refs={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")};const y={};!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&(refs.input.value=t.email||"",refs.textarea.value=t.message||"")}(),refs.form.addEventListener("input",t((function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),refs.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(y),e.target.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.0d79fb0f.js.map
