!function(){"use strict";window.onscroll=function(){const e=document.querySelector(".ud-header"),t=e.offsetTop,o=document.querySelector(".navbar-brand img");window.pageYOffset>t?e.classList.add("sticky"):e.classList.remove("sticky"),e.classList.contains("sticky")?o.src="assets/images/logo/logo-2.svg":o.src="assets/images/logo/logo.svg";const s=document.querySelector(".back-to-top");document.body.scrollTop>50||document.documentElement.scrollTop>50?s.style.display="flex":s.style.display="none"};let e=document.querySelector(".navbar-toggler");const t=document.querySelector(".navbar-collapse");document.querySelectorAll(".ud-menu-scroll").forEach((o=>o.addEventListener("click",(()=>{e.classList.remove("active"),t.classList.remove("show")})))),e.addEventListener("click",(function(){e.classList.toggle("active"),t.classList.toggle("show")}));document.querySelectorAll(".nav-item-has-children").forEach((e=>{e.querySelector("a").addEventListener("click",(()=>{e.querySelector(".ud-submenu").classList.toggle("show")}))})),(new WOW).init(),Math.easeInOutQuad=function(e,t,o,s){return(e/=s/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t},document.querySelector(".back-to-top").onclick=()=>{!function(e,t=0,o=500){const s=e.scrollTop,c=t-s;let l=0;const n=()=>{l+=20;const t=Math.easeInOutQuad(l,s,c,o);e.scrollTop=t,l<o&&setTimeout(n,20)};n()}(document.documentElement)}}();
//# sourceMappingURL=index.d3aab920.js.map
