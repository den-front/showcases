!function(){"use strict";window.onscroll=function(){const e=document.querySelector(".ud-header"),t=e.offsetTop,c=document.querySelector(".navbar-brand img:first-child"),o=document.querySelector(".navbar-brand img:last-child");window.pageYOffset>t?e.classList.add("sticky"):e.classList.remove("sticky"),e.classList.contains("sticky")?(c.hidden=!0,o.hidden=!1):(c.hidden=!1,o.hidden=!0);const n=document.querySelector(".back-to-top");document.body.scrollTop>50||document.documentElement.scrollTop>50?n.style.display="flex":n.style.display="none"};let e=document.querySelector(".navbar-toggler");const t=document.querySelector(".navbar-collapse");document.querySelectorAll(".ud-menu-scroll").forEach((c=>c.addEventListener("click",(()=>{e.classList.remove("active"),t.classList.remove("show")})))),e.addEventListener("click",(function(){e.classList.toggle("active"),t.classList.toggle("show")}));document.querySelectorAll(".nav-item-has-children").forEach((e=>{e.querySelector("a").addEventListener("click",(()=>{e.querySelector(".ud-submenu").classList.toggle("show")}))})),(new WOW).init(),Math.easeInOutQuad=function(e,t,c,o){return(e/=o/2)<1?c/2*e*e+t:-c/2*(--e*(e-2)-1)+t},document.querySelector(".back-to-top").onclick=()=>{!function(e,t=0,c=500){const o=e.scrollTop,n=t-o;let s=0;const l=()=>{s+=20;const t=Math.easeInOutQuad(s,o,n,c);e.scrollTop=t,s<c&&setTimeout(l,20)};l()}(document.documentElement)}}();
//# sourceMappingURL=index.0d6899e9.js.map
