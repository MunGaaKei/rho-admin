import{j as i,K as l,a4 as m,u,r as f,q as v,f as c,o as s,t as r,c as x,a as h,D as _,g as d}from"./vendor.9d0d582c.js";import{_ as k}from"./index.c0aecffe.js";const y=i({name:"Dashboard",components:{NSkeleton:l,NSpace:m},setup(){const e=u(),t=f(!0),{t:o}=v(),n=e.state.user.name;return setTimeout(()=>{t.value=!1},600),{loading:t,username:n,t:o}}}),g={class:"content"},S={key:1};function w(e,t,o,n,$,j){const a=c("n-skeleton"),p=c("n-space");return s(),r("div",g,[e.loading?(s(),x(p,{key:0,vertical:""},{default:h(()=>[d(a,{text:"",style:{width:"200px"}}),d(a,{text:"",style:{width:"100px"}})]),_:1})):(s(),r("h3",S,_(e.t("common.welcome"))+"! "+_(e.username)+" : )",1))])}var D=k(y,[["render",w],["__scopeId","data-v-3b362224"]]);export{D as default};
