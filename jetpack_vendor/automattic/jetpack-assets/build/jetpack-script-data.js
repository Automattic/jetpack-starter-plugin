!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.JetpackScriptDataModule=t():e.JetpackScriptDataModule=t()}(self,(()=>(()=>{var e={537:(e,t,r)=>{"use strict";r.r(t),r.d(t,{getActiveFeatures:()=>a.$l,getAdminUrl:()=>a.A7,getJetpackAdminPageUrl:()=>a.Z$,getMyJetpackUrl:()=>a.n3,getScriptData:()=>a.I4,getSiteData:()=>a.zf});var n=r(352),o={};for(const e in n)"default"!==e&&(o[e]=()=>n[e]);r.d(t,o);var a=r(618)},352:()=>{},618:(e,t,r)=>{"use strict";function n(){return window.JetpackScriptData}function o(){return n().site}function a(e=""){return`${n().site.admin_url}${e}`}function i(e=""){return a(`admin.php?page=jetpack${e}`)}function u(e=""){return a(`admin.php?page=my-jetpack${e}`)}function p(){return n().site.plan?.features?.active??[]}r.d(t,{$l:()=>p,A7:()=>a,I4:()=>n,Z$:()=>i,n3:()=>u,zf:()=>o})}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";r.r(n);var e=r(537),t={};for(const r in e)"default"!==r&&(t[r]=()=>e[r]);r.d(n,t)})(),n})()));