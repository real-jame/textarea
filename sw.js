if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const c=e=>n(e,o),t={module:{uri:o},exports:d,require:c};i[o]=Promise.all(r.map((e=>t[e]||c(e)))).then((e=>(s(...e),d)))}}define(["./workbox-0858eadd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-C-GFlQ20.css",revision:"914aa4cc622f6acad1d9d0b37b709929"},{url:"assets/index-CELtsUAW.js",revision:"40a35751a078084030f334f7bd103126"},{url:"icon-192x192.png",revision:"7be4ca6606a0b273b1e9122fb90a86a4"},{url:"icon-256x256.png",revision:"74aeb0e9781783ac6b073d02b78fe064"},{url:"icon-32x32.png",revision:"429f6d88a276ecf10e9f62e9067e70b7"},{url:"icon-384x384.png",revision:"53ba4bb00b4dec3549b4ac4944fe34ee"},{url:"icon-512x512.png",revision:"4dbd059ea7ee99d8c3355ae9663f9906"},{url:"icon-transparent-32x32.png",revision:"b45a943f67d30804ede58096164b92fd"},{url:"icon-transparent-512x512.png",revision:"add0d9115528b9791b58b4beaf431974"},{url:"index.html",revision:"e3224cbd10d3cd2b67637f0df8eb0793"},{url:"registerSW.js",revision:"9328c2efaec03d1018c156d74d36430b"}],{})}));
//# sourceMappingURL=sw.js.map