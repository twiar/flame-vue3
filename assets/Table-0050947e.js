import{d as g,a as S,r as x,b as t,c as s,e as i,F as p,j as v,t as f,s as I,h as a,x as $,y as F,_ as N}from"./index-6ec0a73b.js";const R=u=>($("data-v-69fde75a"),u=u(),F(),u),T=R(()=>i("th",null,"Add/Remove Favorite",-1)),A=["onClick"],B={key:0,style:{width:"80px"}},V=["onClick"],j=["onClick"],z={key:1,style:{width:"80px"}},D=["onClick"],E=["onClick"],J=g({__name:"Table",props:{columns:{},results:{}},setup(u){const _=u,y=S(),o=x(!1),C=l=>{y.push(`/peoples/${n(l)}`)},h=(l,r)=>{o.value=!0,localStorage.setItem(n(l),JSON.stringify(r)),o.value=!1},k=l=>{o.value=!0,localStorage.removeItem(n(l)),o.value=!1},n=l=>l.split("/")[l.split("/").length-2],d=l=>{for(let r in localStorage)if(!isNaN(r)&&r===l)return!0;return!1};return(l,r)=>(t(),s("table",null,[i("thead",null,[i("tr",null,[(t(!0),s(p,null,v(_.columns,e=>(t(),s("th",null,f(e),1))),256)),T])]),i("tbody",null,[(t(!0),s(p,null,v(_.results,e=>(t(),s("tr",null,[(t(!0),s(p,null,v(e,(c,b)=>(t(),s("td",{class:I({hidden:!_.columns.find(m=>m===b)}),onClick:m=>C(e.url)},f(c),11,A))),256)),o.value?a("",!0):(t(),s("td",B,[d(n(e.url))?a("",!0):(t(),s("button",{key:0,onClick:c=>h(e.url,e)},"Add",8,V)),d(n(e.url))?(t(),s("button",{key:1,onClick:c=>k(e.url)},"Remove",8,j)):a("",!0)])),o.value?(t(),s("td",z,[d(n(e.url))?a("",!0):(t(),s("button",{key:0,onClick:c=>h(e.url,e)},"Add",8,D)),d(n(e.url))?(t(),s("button",{key:1,onClick:c=>k(e.url)},"Remove",8,E)):a("",!0)])):a("",!0)]))),256))])]))}});const O=N(J,[["__scopeId","data-v-69fde75a"]]);export{O as T};
