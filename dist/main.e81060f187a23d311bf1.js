(()=>{var e={303:()=>{window.addEventListener("load",(function(){document.getElementById("arrow-left").addEventListener("click",a),document.getElementById("arrow-right").addEventListener("click",l),document.querySelector(".c-fourth").addEventListener("keydown",(function(e){switch(e.key){case"ArrowLeft":a();break;case"ArrowRight":l()}})),document.querySelector(e).addEventListener("touchstart",(function(e){t=e.changedTouches[0].screenX,n=e.changedTouches[0].screenY,console.log("Xstart = %d",t),console.log("Ystart = %d",n)})),document.querySelector(e).addEventListener("touchend",(function(e){o=e.changedTouches[0].screenX,r=e.changedTouches[0].screenY,console.log("Xend = %d",o),console.log("Yend = %d",r),function(){c=Math.sqrt(Math.pow(n-r,2)),console.log(c),t-o>=30&&c<50?(d="right",l()):t-o<=-30&&c<50?(d="left",a()):d="central";console.log(d)}()}))}));var e=".carousel",t=0,n=0,o=0,r=0,c=0,d="";function a(){var e=parseInt(getComputedStyle(document.getElementById("carousel-window")).width,10),t=parseInt(getComputedStyle(document.querySelector(".carousel-container")).left,10);if(0!==t){var n=t+e;switch(document.querySelector(".carousel-container").style.left="".concat(n,"px"),n){case-e:document.getElementById("knowledge-3").setAttribute("tabindex","-1"),document.getElementById("knowledge-2").removeAttribute("tabindex");break;case 0:document.getElementById("knowledge-2").setAttribute("tabindex","-1"),document.getElementById("knowledge-1").removeAttribute("tabindex")}}}function l(){var e=parseInt(getComputedStyle(document.getElementById("carousel-window")).width,10),t=parseInt(getComputedStyle(document.querySelector(".carousel-container")).left,10);if(!(t<-e)){var n=t-e;switch(document.querySelector(".carousel-container").style.left="".concat(n,"px"),n){case-e:document.getElementById("knowledge-1").setAttribute("tabindex","-1"),document.getElementById("knowledge-2").removeAttribute("tabindex");break;case-2*e:document.getElementById("knowledge-2").setAttribute("tabindex","-1"),document.getElementById("knowledge-3").removeAttribute("tabindex")}}}},69:()=>{var e,t,n,o;e="main-menu-toggle",t="main-nav",n=document.getElementById(e),o=document.getElementById(t),n&&o&&n.addEventListener("click",(function(){o.classList.toggle("show")}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(69),n(303)})()})();