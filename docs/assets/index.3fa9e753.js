import{i,J as l,a3 as m,u,r as f,p as v,f as r,o as s,s as c,c as x,a as h,C as _,g as p}from"./vendor.46850bd5.js";import{_ as k}from"./index.e1ea0fff.js";const y=i({name:"Dashboard",components:{NSkeleton:l,NSpace:m},setup(){const e=u(),t=f(!0),{t:o}=v(),n=e.state.user.name;return setTimeout(()=>{t.value=!1},600),{loading:t,username:n,t:o}}}),g={class:"content"},S={key:1};function w(e,t,o,n,C,$){const a=r("n-skeleton"),d=r("n-space");return s(),c("div",g,[e.loading?(s(),x(d,{key:0,vertical:""},{default:h(()=>[p(a,{text:"",style:{width:"200px"}}),p(a,{text:"",style:{width:"100px"}})]),_:1})):(s(),c("h3",S,_(e.t("common.welcome"))+"! "+_(e.username)+" : )",1))])}var N=k(y,[["render",w],["__scopeId","data-v-3b362224"]]);export{N as default};
//# sourceMappingURL=index.3fa9e753.js.map