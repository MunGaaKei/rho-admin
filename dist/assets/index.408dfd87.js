var _=Object.defineProperty,g=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var d=(e,o,n)=>o in e?_(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,i=(e,o)=>{for(var n in o||(o={}))O.call(o,n)&&d(e,n,o[n]);if(u)for(var n of u(o))h.call(o,n)&&d(e,n,o[n]);return e},m=(e,o)=>g(e,v(o));import{j as y,u as L,n as k,q as C,r as S,o as p,t as f,C as t,D as s,F as $,y as b,a2 as j}from"./vendor.9d0d582c.js";import{_ as B,m as N}from"./index.c0aecffe.js";const R=y({name:"User",setup(){const e=L(),o=k(),{t:n}=C();let a=S(!1);function l(){a.value?(e.commit("user/USER_LOGOUT"),o.push("/login")):a.value=!0}function c(){a.value=!1}return m(i({cancelable:a},N(e.state.user,["name"])),{handleLogOut:l,cancleLogOut:c,t:n})}}),U={class:"content"},V={class:"header"},D=j(" , ");function E(e,o,n,a,l,c){return p(),f("div",U,[t("div",V,[t("h3",null,s(e.t("common.hi"))+", "+s(e.name),1)]),t("p",null,[t("a",{onClick:o[0]||(o[0]=(...r)=>e.handleLogOut&&e.handleLogOut(...r))},s(e.cancelable?e.t("common.confirm"):e.t("common.sign_out")),1),e.cancelable?(p(),f($,{key:0},[D,t("a",{onClick:o[1]||(o[1]=(...r)=>e.cancleLogOut&&e.cancleLogOut(...r)),style:{opacity:"0.6"}},s(e.t("common.cancel")),1)],64)):b("",!0)])])}var q=B(R,[["render",E],["__scopeId","data-v-4393364d"]]);export{q as default};