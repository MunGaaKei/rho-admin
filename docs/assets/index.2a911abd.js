var _=Object.defineProperty,g=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var d=(e,a,o)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,i=(e,a)=>{for(var o in a||(a={}))O.call(a,o)&&d(e,o,a[o]);if(c)for(var o of c(a))h.call(a,o)&&d(e,o,a[o]);return e},m=(e,a)=>g(e,v(a));import{j as y,u as L,n as b,q as k,r as C,o as p,t as f,C as t,D as s,F as S,y as $,a2 as j}from"./vendor.b5ddaeab.js";import{_ as B,m as N}from"./index.f4c4ab9c.js";const R=y({name:"User",setup(){const e=L(),a=b(),{t:o}=k();let n=C(!1);function l(){n.value?(e.commit("user/USER_LOGOUT"),a.push("/login")):n.value=!0}function u(){n.value=!1}return m(i({cancelable:n},N(e.state.user,["name"])),{handleLogOut:l,cancleLogOut:u,t:o})}}),U={class:"content"},V={class:"header"},D=j(" , ");function E(e,a,o,n,l,u){return p(),f("div",U,[t("div",V,[t("h3",null,s(e.t("common.hi"))+", "+s(e.name),1)]),t("p",null,[t("a",{onClick:a[0]||(a[0]=(...r)=>e.handleLogOut&&e.handleLogOut(...r))},s(e.cancelable?e.t("common.confirm"):e.t("common.sign_out")),1),e.cancelable?(p(),f(S,{key:0},[D,t("a",{onClick:a[1]||(a[1]=(...r)=>e.cancleLogOut&&e.cancleLogOut(...r)),style:{opacity:"0.6"}},s(e.t("common.cancel")),1)],64)):$("",!0)])])}var q=B(R,[["render",E],["__scopeId","data-v-4393364d"]]);export{q as default};
