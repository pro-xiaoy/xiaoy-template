!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("y-compentent",[],t):"object"==typeof exports?exports["y-compentent"]=t():e["y-compentent"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=5)}([function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=f[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(i(n.parts[r]));f[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function i(e){var t,n,o=document.querySelector("style["+y+'~="'+e.id+'"]');if(o){if(v)return h;o.parentNode.removeChild(o)}if(g){var i=p++;o=d||(d=r()),t=s.bind(null,o,i,!1),n=s.bind(null,o,i,!0)}else o=r(),t=a.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function s(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),m.ssrId&&e.setAttribute(y,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(10),f={},l=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,v=!1,h=function(){},m=null,y="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,r){v=n,m=r||{};var i=u(e,t);return o(i),function(t){for(var n=[],r=0;r<i.length;r++){var s=i[r],a=f[s.id];a.refs--,n.push(a)}t?(i=u(e,t),o(i)):i=[];for(var r=0;r<n.length;r++){var a=n[r];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete f[a.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,o,r,i){var s,a=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(s=e,a=e.default);var u="function"==typeof a?a.options:a;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId=r);var f;if(i?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=f):o&&(f=o),f){var l=u.functional,d=l?u.render:u.beforeCreate;l?(u._injectStyles=f,u.render=function(e,t){return f.call(t),d(e,t)}):u.beforeCreate=d?[].concat(d,f):[f]}return{esModule:s,exports:a,options:u}}},function(e,t,n){"use strict";t.a={name:"countDown",props:{num:{type:Number}},data:function(){return{isShow:!0,isLoad:!1,tickTime:this.num}},methods:{getNum:function(){var e=this;if(!0===this.isShow){this.isShow=!1,this.isLoad=!0;var t=window.setInterval(function(){e.tickTime--<=1&&(e.tickTime=e.num,e.isShow=!0,e.isLoad=!1,window.clearInterval(t))},1e3)}}}}},function(e,t,n){"use strict";t.a={name:"Notice",props:{content:{type:String}},data:function(){return{left:this.biDivWidth,scollSwidth:!0,timer:null}},mounted:function(){var e=this;this.bigDiv=this.$refs.example.clientWidth,this.left=this.bigDiv;var t=this.$refs.scrollDiv.style,n=this.$refs.scrollDiv.offsetWidth;window.setInter=window.setInterval(function(){e.scollSwidth&&(e.left<-n?(e.left=e.bigDiv,t.left=e.left+"px"):(e.left=e.left-.2,t.left=e.left+"px"))},5)},methods:{openNotice:function(){this.$notify({title:"公告",message:this.content,duration:0})},handMouseOver:function(){this.scollSwidth=!1},handMouseOut:function(){this.scollSwidth=!0}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),r=n(12),i=[o.a,r.a],s=function e(t){e.installed||i.map(function(e){t.component(e.name,e)})};"undefined"!=typeof window&&window.Vue&&s(window.Vue),t.default={install:s,countDown:o.a,Notice:r.a}},function(e,t,n){"use strict";var o=n(7);o.a.install=function(e){return e.component(o.a.name,o.a)},t.a=o.a},function(e,t,n){"use strict";function o(e){n(8)}var r=n(3),i=n(11),s=n(2),a=o,c=s(r.a,i.a,!1,a,"data-v-cfdf34fc",null);t.a=c.exports},function(e,t,n){var o=n(9);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(1)("0f7f8cfa",o,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"",""])},function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=i[0],a=i[1],c=i[2],u=i[3],f={id:e+":"+r,css:a,media:c,sourceMap:u};o[s]?o[s].parts.push(f):n.push(o[s]={id:s,parts:[f]})}return n}},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-button",{attrs:{type:"primary",loading:e.isLoad},on:{click:e.getNum}},[e.isShow?n("span",[e._v("查询验证码")]):n("span",[e._v("剩余"+e._s(e.tickTime)+"秒")])])],1)},r=[],i={render:o,staticRenderFns:r};t.a=i},function(e,t,n){"use strict";var o=n(13);o.a.install=function(e){return e.component(o.a.name,o.a)},t.a=o.a},function(e,t,n){"use strict";function o(e){n(14)}var r=n(4),i=n(16),s=n(2),a=o,c=s(r.a,i.a,!1,a,"data-v-3faf9e2f",null);t.a=c.exports},function(e,t,n){var o=n(15);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(1)("56398dfa",o,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".example[data-v-3faf9e2f]{overflow-x:auto}.example .notice-body[data-v-3faf9e2f]{display:block;height:100%;overflow:hidden}.example .notice-containr[data-v-3faf9e2f]{position:relative;white-space:nowrap;cursor:pointer}",""])},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"example",staticClass:"example"},[n("div",{ref:"noticeBody",staticClass:"notice-body"},[n("div",{ref:"scrollDiv",staticClass:"notice-containr",on:{click:e.openNotice,mouseover:e.handMouseOver,mouseout:e.handMouseOut}},[n("i",{staticClass:"el-icon-bell",staticStyle:{"margin-right":"10px"}}),e._v(" "),n("span",[e._v(e._s(e.content))])])])])},r=[],i={render:o,staticRenderFns:r};t.a=i}])});
//# sourceMappingURL=y-compentent.js.map