(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("L1EO");const o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],c=document.querySelector("body"),a=document.querySelector('[data-action="start"]'),d=document.querySelector('[data-action="stop"]');let r=null;function i(t){const e=(n=0,o=t.length-1,Math.floor(Math.random()*(o-n+1)+n));var n,o;c.style.background=t[e]}a.addEventListener("click",()=>{a.disabled=!0,r=setInterval(()=>{i(o)},1e3)}),d.addEventListener("click",()=>{a.disabled=!1,clearInterval(r)})}},[["QfWi",1]]]);
//# sourceMappingURL=main.11582047d77ae870d53e.js.map