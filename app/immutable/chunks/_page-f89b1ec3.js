import{c as t}from"./shared-23917130.js";const s=!0,l=async({fetch:r,params:e,url:n})=>{const o=await r(`${t}/`+e.slug+".md",{referrerPolicy:"same-origin"});return{slug:e.slug,mdslug:e.slug+".md",post:o}},a=Object.freeze(Object.defineProperty({__proto__:null,load:l,prerender:s},Symbol.toStringTag,{value:"Module"}));export{a as _,l,s as p};