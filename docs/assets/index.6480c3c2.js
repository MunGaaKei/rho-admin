import{i as h,u as S,m as b,p as N,U as w,r as y,_ as I,$ as C,a0 as k,a1 as A,f as m,o as _,s as B,g as s,a as t,B as v,C as i,c as M,a2 as g,x as O,z as P,A as $}from"./vendor.46850bd5.js";import{_ as E,A as F,O as R,M as V}from"./index.e1ea0fff.js";const q=h({setup(){const e=S(),a=b(),{t:c}=N(),n=w({username:"admin",password:"admin"}),f={username:{required:!0,trigger:"blur",message:""},password:{required:!0,trigger:"blur",message:""}};let u=y(!1);async function d(){u.value=!0;const{code:l,msg:o}=await e.dispatch("user/LOGIN",n);switch(l){case 200:a.push("/");break;case 1:case 2:V(`\u{1F616}   ${o}`),n.password="";break}u.value=!1}function r(){let{username:l,password:o}=n;return l===""||o===""}function p(){a.push("/")}return{APP_NAME:F,ON_PERMISSION:R,loading:u,formState:n,rules:f,handleSubmit:d,handleCancel:p,invalidForm:r,t:c}},components:{NForm:I,NFormItem:C,NInput:k,NButton:A}}),U=e=>(P("data-v-3b41d699"),e=e(),$(),e),j={class:"i-container"},z=U(()=>v("p",{class:"i-form-msg"},null,-1));function D(e,a,c,n,f,u){const d=m("n-input"),r=m("n-form-item"),p=m("n-button"),l=m("n-form");return _(),B("div",j,[s(l,{model:e.formState,rules:e.rules,class:"i-form","label-placement":"left"},{default:t(()=>[v("h1",null,i(e.APP_NAME),1),s(r,{path:"username"},{default:t(()=>[s(d,{value:e.formState.username,"onUpdate:value":a[0]||(a[0]=o=>e.formState.username=o),placeholder:e.t("common.username"),"input-props":{autocomplete:"off"}},null,8,["value","placeholder"])]),_:1}),s(r,{path:"password"},{default:t(()=>[s(d,{value:e.formState.password,"onUpdate:value":a[1]||(a[1]=o=>e.formState.password=o),type:"password",placeholder:e.t("common.password"),"input-props":{autocomplete:"off"}},null,8,["value","placeholder"])]),_:1}),s(r,null,{default:t(()=>[z,e.ON_PERMISSION?O("",!0):(_(),M(p,{key:0,quaternary:"",style:{margin:"0 12px 0 0"},onClick:e.handleCancel},{default:t(()=>[g(i(e.t("common.cancel")),1)]),_:1},8,["onClick"])),s(p,{type:"primary","attr-type":"submit",loading:e.loading,onClick:e.handleSubmit,disabled:e.invalidForm(),style:{width:"120px"}},{default:t(()=>[g(i(e.t("common.sign_in")),1)]),_:1},8,["loading","onClick","disabled"])]),_:1})]),_:1},8,["model","rules"])])}var T=E(q,[["render",D],["__scopeId","data-v-3b41d699"]]);export{T as default};
//# sourceMappingURL=index.6480c3c2.js.map
