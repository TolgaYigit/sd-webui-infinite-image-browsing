import{d as R,u as ue,g as Y,_ as De,c as o,a as re,P as K,D as Ae,f as je,w as lt,b as ot,e as st,h as xe,M as ee,i as ut,j as it,F as ae,A as H,k as ct,r as X,o as w,l as D,m as d,n as r,p as T,q as k,t as O,s as W,v as dt,x as mt,y as ie,z as ze,B as pt,C as vt,E as ft,G as gt,H as we,I,J as le,K as j,L as bt,N as B,O as oe,Q as E,R as Be,S as _t,T as yt,U as ht,V as Fe,W as Ct,X as kt,Y as $e,Z as Ot,$ as xt,a0 as wt}from"./index-a52af617.js";import{D as ce,S as G,s as $t,c as Ne,u as Lt,a as St,b as Pt,d as Mt,e as Et,f as It,g as Dt,h as At,i as jt,j as zt,k as Bt,t as Ft}from"./FileItem-1685864d.js";import{F as z,_ as Nt}from"./index-7127d6d5.js";import"./index-f3d83b70.js";import"./index-17b18069.js";import{I as Tt}from"./index-3d756f88.js";import{M as Te}from"./db-86011ee4.js";import{B as Ve}from"./button-4d75a231.js";import"./_baseIteratee-4a6b4f10.js";var Vt=["class","style"],Rt=function(){return{prefixCls:String,href:String,separator:K.any,overlay:K.any,onClick:Function}};const q=R({compatConfig:{MODE:3},name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:Rt(),slots:["separator","overlay"],setup:function(t,a){var n=a.slots,l=a.attrs,b=ue("breadcrumb",t),f=b.prefixCls,_=function(m,u){var s=Y(n,t,"overlay");return s?o(ce,{overlay:s,placement:"bottom"},{default:function(){return[o("span",{class:"".concat(u,"-overlay-link")},[m,o(Ae,null,null)])]}}):m};return function(){var x,m=(x=Y(n,t,"separator"))!==null&&x!==void 0?x:"/",u=Y(n,t),s=l.class,y=l.style,v=De(l,Vt),h;return t.href!==void 0?h=o("a",re({class:"".concat(f.value,"-link"),onClick:t.onClick},v),[u]):h=o("span",re({class:"".concat(f.value,"-link"),onClick:t.onClick},v),[u]),h=_(h,f.value),u?o("span",{class:s,style:y},[h,m&&o("span",{class:"".concat(f.value,"-separator")},[m])]):null}}});var Ut=function(){return{prefixCls:String,routes:{type:Array},params:K.any,separator:K.any,itemRender:{type:Function}}};function Xt(e,t){if(!e.breadcrumbName)return null;var a=Object.keys(t).join("|"),n=e.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),function(l,b){return t[b]||l});return n}function Le(e){var t=e.route,a=e.params,n=e.routes,l=e.paths,b=n.indexOf(t)===n.length-1,f=Xt(t,a);return b?o("span",null,[f]):o("a",{href:"#/".concat(l.join("/"))},[f])}const V=R({compatConfig:{MODE:3},name:"ABreadcrumb",props:Ut(),slots:["separator","itemRender"],setup:function(t,a){var n=a.slots,l=ue("breadcrumb",t),b=l.prefixCls,f=l.direction,_=function(s,y){return s=(s||"").replace(/^\//,""),Object.keys(y).forEach(function(v){s=s.replace(":".concat(v),y[v])}),s},x=function(s,y,v){var h=ut(s),$=_(y||"",v);return $&&h.push($),h},m=function(s){var y=s.routes,v=y===void 0?[]:y,h=s.params,$=h===void 0?{}:h,S=s.separator,C=s.itemRender,p=C===void 0?Le:C,L=[];return v.map(function(g){var M=_(g.path,$);M&&L.push(M);var A=[].concat(L),U=null;return g.children&&g.children.length&&(U=o(ee,null,{default:function(){return[g.children.map(function(F){return o(ee.Item,{key:F.path||F.breadcrumbName},{default:function(){return[p({route:F,params:$,routes:v,paths:x(A,F.path,$)})]}})})]}})),o(q,{overlay:U,separator:S,key:M||g.breadcrumbName},{default:function(){return[p({route:g,params:$,routes:v,paths:A})]}})})};return function(){var u,s,y,v=t.routes,h=t.params,$=h===void 0?{}:h,S=je(Y(n,t)),C=(u=Y(n,t,"separator"))!==null&&u!==void 0?u:"/",p=t.itemRender||n.itemRender||Le;v&&v.length>0?y=m({routes:v,params:$,separator:C,itemRender:p}):S.length&&(y=S.map(function(g,M){return lt(ot(g.type)==="object"&&(g.type.__ANT_BREADCRUMB_ITEM||g.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),st(g,{separator:C,key:M})}));var L=(s={},xe(s,b.value,!0),xe(s,"".concat(b.value,"-rtl"),f.value==="rtl"),s);return o("div",{class:L},[y])}}});var Yt=["separator","class"],Gt=function(){return{prefixCls:String}};const se=R({compatConfig:{MODE:3},name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:Gt(),setup:function(t,a){var n=a.slots,l=a.attrs,b=ue("breadcrumb",t),f=b.prefixCls;return function(){var _;l.separator;var x=l.class,m=De(l,Yt),u=je((_=n.default)===null||_===void 0?void 0:_.call(n));return o("span",re({class:["".concat(f.value,"-separator"),x]},m),[u.length>0?u:"/"])}}});V.Item=q;V.Separator=se;V.install=function(e){return e.component(V.name,V),e.component(q.name,q),e.component(se.name,se),e};z.useInjectFormItemContext=it;z.ItemRest=ae;z.install=function(e){return e.component(z.name,z),e.component(z.Item.name,z.Item),e.component(ae.name,ae),e};G.setDefaultIndicator=$t;G.install=function(e){return e.component(G.name,G),e};var Wt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.3 506.3L781.7 405.6a7.23 7.23 0 00-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7a7.14 7.14 0 00-11.3 0L405.6 242.3a7.23 7.23 0 005.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3a7.14 7.14 0 000 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8a7.3 7.3 0 00.1-11.4z"}}]},name:"drag",theme:"outlined"};const qt=Wt;function Se(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable}))),n.forEach(function(l){Ht(e,l,a[l])})}return e}function Ht(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var de=function(t,a){var n=Se({},t,a.attrs);return o(H,Se({},n,{icon:qt}),null)};de.displayName="DragOutlined";de.inheritAttrs=!1;const Qt=de;var Jt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 000 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 00391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 00-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"}}]},name:"fullscreen-exit",theme:"outlined"};const Zt=Jt;function Pe(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable}))),n.forEach(function(l){Kt(e,l,a[l])})}return e}function Kt(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var me=function(t,a){var n=Pe({},t,a.attrs);return o(H,Pe({},n,{icon:Zt}),null)};me.displayName="FullscreenExitOutlined";me.inheritAttrs=!1;const en=me;var tn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"}}]},name:"fullscreen",theme:"outlined"};const nn=tn;function Me(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable}))),n.forEach(function(l){rn(e,l,a[l])})}return e}function rn(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var pe=function(t,a){var n=Me({},t,a.attrs);return o(H,Me({},n,{icon:nn}),null)};pe.displayName="FullscreenOutlined";pe.inheritAttrs=!1;const an=pe;var ln={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M603.3 327.5l-246 178a7.95 7.95 0 000 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"left-circle",theme:"outlined"};const on=ln;function Ee(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable}))),n.forEach(function(l){sn(e,l,a[l])})}return e}function sn(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var ve=function(t,a){var n=Ee({},t,a.attrs);return o(H,Ee({},n,{icon:on}),null)};ve.displayName="LeftCircleOutlined";ve.inheritAttrs=!1;const un=ve;var cn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"};const dn=cn;function Ie(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable}))),n.forEach(function(l){mn(e,l,a[l])})}return e}function mn(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var fe=function(t,a){var n=Ie({},t,a.attrs);return o(H,Ie({},n,{icon:dn}),null)};fe.displayName="RightCircleOutlined";fe.inheritAttrs=!1;const pn=fe;const vn=R({__name:"folderNavigator",props:{loc:null},emits:["to"],setup(e,{emit:t}){const a=e,n=ct(()=>a.loc),l=X(!1),b=()=>{l.value=!1,t("to",n.value)};return(f,_)=>{const x=Tt,m=Te;return w(),D(W,null,[o(m,{visible:l.value,"onUpdate:visible":_[1]||(_[1]=u=>l.value=u),title:f.$t("inputAddressAndPressEnter"),onOk:b},{default:d(()=>[o(x,{onPressEnter:b,value:r(n),"onUpdate:value":_[0]||(_[0]=u=>T(n)?n.value=u:null),style:{width:"100%"},"allow-clear":""},null,8,["value"])]),_:1},8,["visible","title"]),k("a",{style:{"margin-left":"8px"},onClick:_[2]||(_[2]=u=>l.value=!0)},O(f.$t("go")),1)],64)}}});function fn(e,t,a,n){const l={x:0,y:0};let b=0,f=0,_=typeof(n==null?void 0:n.width)=="number"?n.width:0,x=typeof(n==null?void 0:n.height)=="number"?n.height:0,m=typeof(n==null?void 0:n.left)=="number"?n.left:0,u=typeof(n==null?void 0:n.top)=="number"?n.top:0,s=!1;const y=p=>{p.stopPropagation(),p.preventDefault(),!(!e.value||!t.value)&&(b=p.clientX,f=p.clientY,_=e.value.offsetWidth,x=e.value.offsetHeight,l.x=t.value.offsetLeft,l.y=t.value.offsetTop,document.documentElement.addEventListener("mousemove",v),document.documentElement.addEventListener("mouseup",h))},v=p=>{if(!e.value||!t.value)return;const L=_+p.clientX-b,g=x+p.clientY-f,M=l.x+p.clientX-b,A=l.y+p.clientY-f;e.value.style.width=`${L}px`,e.value.style.height=`${g}px`,t.value.style.left=`${M}px`,t.value.style.top=`${A}px`,n!=null&&n.onResize&&n.onResize(L,g)},h=()=>{document.documentElement.removeEventListener("mousemove",v),document.documentElement.removeEventListener("mouseup",h)},$=p=>{p.stopPropagation(),p.preventDefault(),!(!e.value||!a.value)&&(s=!0,m=e.value.offsetLeft,u=e.value.offsetTop,b=p.clientX,f=p.clientY,document.documentElement.addEventListener("mousemove",S),document.documentElement.addEventListener("mouseup",C))},S=p=>{if(!e.value||!a.value||!s)return;const L=m+p.clientX-b,g=u+p.clientY-f;e.value.style.left=`${L}px`,e.value.style.top=`${g}px`,n!=null&&n.onDrag&&n.onDrag(L,g)},C=()=>{s=!1,document.documentElement.removeEventListener("mousemove",S),document.documentElement.removeEventListener("mouseup",C)};return dt(()=>{!e.value||!n||(typeof n.width=="number"&&(e.value.style.width=`${n.width}px`),typeof n.height=="number"&&(e.value.style.height=`${n.height}px`),typeof n.left=="number"&&(e.value.style.left=`${n.left}px`),typeof n.top=="number"&&(e.value.style.top=`${n.top}px`))}),mt(()=>{document.documentElement.removeEventListener("mousemove",v),document.documentElement.removeEventListener("mouseup",h),document.documentElement.removeEventListener("mousemove",S),document.documentElement.removeEventListener("mouseup",C)}),ie(()=>[e.value,t.value,a.value],([p,L,g])=>{p&&L&&g&&(L.addEventListener("mousedown",y),g.addEventListener("mousedown",$))}),{handleResizeMouseDown:y,handleDragMouseDown:$}}const gn=e=>(yt("data-v-ea83da82"),e=e(),ht(),e),bn={class:"container"},_n={class:"actoion-bar"},yn=gn(()=>k("div",{"flex-placeholder":""},null,-1)),hn={key:0,class:"gen-info"},Cn=R({__name:"fullScreenContextMenu",props:{file:null,idx:null},emits:["contextMenuClick"],setup(e,{emit:t}){const a=e,n=ze(),l=X(),b=pt(new vt),f=X("");ie(()=>a.file.fullpath,async u=>{b.tasks.forEach(s=>s.cancel()),f.value=await b.pushAction(()=>ft(u)).res},{immediate:!0});const _=X(),x=X(),m=gt("fullScreenContextMenu.vue-drag",{left:100,top:100,width:512,height:384,expanded:!0});return fn(l,_,x,{...m.value,onDrag:we(function(u,s){m.value={...m.value,left:u,top:s}},300),onResize:we(function(u,s){m.value={...m.value,width:u,height:s}},300)}),(u,s)=>{const y=Ve,v=Be,h=_t,$=ee,S=ce;return w(),D("div",{ref_key:"el",ref:l,class:oe(["full-screen-menu",{"unset-size":!r(m).expanded}]),onWheelCapture:s[3]||(s[3]=E(()=>{},["stop"]))},[k("div",bn,[k("div",_n,[r(m).expanded?(w(),D(W,{key:0},[o(S,{trigger:["hover"],style:{"z-index":"99999"},"get-popup-container":C=>C.parentNode},{overlay:d(()=>[o($,{onClick:s[0]||(s[0]=C=>t("contextMenuClick",C,e.file,e.idx)),style:{"z-index":"99999"}},{default:d(()=>[o(v,{key:"send2txt2img"},{default:d(()=>[I(O(u.$t("sendToTxt2img")),1)]),_:1}),o(v,{key:"send2img2img"},{default:d(()=>[I(O(u.$t("sendToImg2img")),1)]),_:1}),o(v,{key:"send2inpaint"},{default:d(()=>[I(O(u.$t("sendToInpaint")),1)]),_:1}),o(v,{key:"send2extras"},{default:d(()=>[I(O(u.$t("sendToExtraFeatures")),1)]),_:1}),o(v,{key:"send2savedDir"},{default:d(()=>[I(O(u.$t("send2savedDir")),1)]),_:1}),o(h,{key:"add-custom-tag",title:u.$t("addCustomTag")},{default:d(()=>{var C;return[(w(!0),D(W,null,le(((C=r(n).conf)==null?void 0:C.all_custom_tags)??[],p=>(w(),j(v,{key:p.id},{default:d(()=>[I(O(p.name),1)]),_:2},1024))),128))]}),_:1},8,["title"])]),_:1})]),default:d(()=>[o(y,null,{default:d(()=>[I(O(r(bt)("openContextMenu")),1)]),_:1})]),_:1},8,["get-popup-container"]),o(y,{onClick:s[1]||(s[1]=C=>r(Ne)(f.value,"copied"))},{default:d(()=>[I(O(u.$t("copyPrompt")),1)]),_:1}),yn],64)):B("",!0),k("div",{class:"icon",style:{cursor:"pointer"},onClick:s[2]||(s[2]=C=>r(m).expanded=!r(m).expanded)},[r(m).expanded?(w(),j(r(en),{key:0})):(w(),j(r(an),{key:1}))]),k("div",{ref_key:"dragHandle",ref:x,class:"icon",style:{cursor:"grab"}},[o(r(Qt))],512)]),r(m).expanded?(w(),D("div",hn,O(f.value),1)):B("",!0)]),r(m).expanded?(w(),D("div",{key:0,class:"mouse-sensor",ref_key:"resizeHandle",ref:_},null,512)):B("",!0)],34)}}});const kn=Fe(Cn,[["__scopeId","data-v-ea83da82"]]),On={class:"hint"},xn={class:"location-bar"},wn={class:"breadcrumb"},$n=["onClick"],Ln={class:"actions"},Sn=["onClick"],Pn={style:{width:"512px",background:"var(--zp-primary-background)",padding:"16px","border-radius":"4px","box-shadow":"0 0 4px var(--zp-secondary-background)",border:"1px solid var(--zp-secondary-background)"}},Mn={key:0,class:"view"},En={key:0,class:"preview-switch"},In=R({__name:"stackView",props:{target:null,tabIdx:null,paneIdx:null,path:null,walkMode:{type:Boolean},stackKey:null},setup(e){const t=e,a=ze(),{scroller:n,walkModePath:l,stackViewEl:b,props:f,multiSelectedIdxs:_,spinning:x}=Lt().toRefs(),{currLocation:m,currPage:u,refresh:s,copyLocation:y,back:v,openNext:h,stack:$,to:S}=St(t),{gridItems:C,sortMethodConv:p,moreActionsDropdownShow:L,sortedFiles:g,sortMethod:M,viewMode:A,viewModeMap:U,itemSize:Q,loadNextDir:F,loadNextDirLoading:ge,canLoadNext:Re,onScroll:Ue}=Pt(t),{onDrop:Xe,onFileDragStart:Ye}=Mt(t),{onFileItemClick:Ge,onContextMenuClick:be,showGenInfo:J,imageGenInfo:_e,q:We}=Et(t,{openNext:h}),{previewIdx:Z,onPreviewVisibleChange:qe,previewing:ye,previewImgMove:he,canPreview:Ce}=It(t),{showMenuIdx:te}=Dt();return ie(()=>t,()=>{f.value=t,t.walkMode&&(l.value=t.path);const P=At.get(t.stackKey??"");P&&($.value=P.slice())},{immediate:!0}),(P,i)=>{const He=xt,Qe=wt,Je=Te,Ze=q,Ke=V,et=Be,tt=ee,ke=ce,ne=Nt,nt=z,rt=Ve,at=G;return w(),j(at,{spinning:r(x),size:"large"},{default:d(()=>[o(He,{style:{display:"none"}}),k("div",{ref_key:"stackViewEl",ref:b,onDragover:i[15]||(i[15]=E(()=>{},["prevent"])),onDrop:i[16]||(i[16]=E(c=>r(Xe)(c),["prevent"])),class:"container"},[o(Je,{visible:r(J),"onUpdate:visible":i[1]||(i[1]=c=>T(J)?J.value=c:null),width:"70vw","mask-closable":"",onOk:i[2]||(i[2]=c=>J.value=!1)},{cancelText:d(()=>[]),default:d(()=>[o(Qe,{active:"",loading:!r(We).isIdle},{default:d(()=>[k("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto","z-index":"9999"},onDblclick:i[0]||(i[0]=c=>r(Ne)(r(_e),"copied"))},[k("div",On,O(P.$t("doubleClickToCopy")),1),I(" "+O(r(_e)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),k("div",xn,[k("div",wn,[o(Ke,{style:{flex:"1"}},{default:d(()=>[(w(!0),D(W,null,le(r($),(c,N)=>(w(),j(Ze,{key:N},{default:d(()=>[k("a",{onClick:E(Oe=>r(v)(N),["prevent"])},O(c.curr==="/"?P.$t("root"):c.curr.replace(/:\/$/,P.$t("drive"))),9,$n)]),_:2},1024))),128))]),_:1})]),k("div",Ln,[k("a",{class:"opt",onClick:i[3]||(i[3]=E((...c)=>r(s)&&r(s)(...c),["prevent"]))},O(P.$t("refresh")),1),t.target==="local"?(w(),j(ke,{key:0},{overlay:d(()=>[o(tt,null,{default:d(()=>[(w(!0),D(W,null,le(r(a).autoCompletedDirList,c=>(w(),j(et,{key:c.dir},{default:d(()=>[k("a",{onClick:E(N=>r(S)(c.dir),["prevent"])},O(c.zh),9,Sn)]),_:2},1024))),128))]),_:1})]),default:d(()=>[k("a",{class:"opt",onClick:i[4]||(i[4]=E(()=>{},["prevent"]))},[I(O(P.$t("quickMove"))+" ",1),o(r(Ae))])]),_:1})):B("",!0),o(ke,{trigger:["click"],visible:r(L),"onUpdate:visible":i[11]||(i[11]=c=>T(L)?L.value=c:null),placement:"bottomLeft",getPopupContainer:c=>c.parentNode},{overlay:d(()=>[k("div",Pn,[o(nt,Ct(kt({labelCol:{span:6},wrapperCol:{span:18}})),{default:d(()=>[o(ne,{label:P.$t("viewMode")},{default:d(()=>[o(r($e),{value:r(A),"onUpdate:value":i[6]||(i[6]=c=>T(A)?A.value=c:null),onClick:i[7]||(i[7]=E(()=>{},["stop"])),conv:{value:c=>c,text:c=>r(U)[c]},options:Object.keys(r(U))},null,8,["value","conv","options"])]),_:1},8,["label"]),o(ne,{label:P.$t("sortingMethod")},{default:d(()=>[o(r($e),{value:r(M),"onUpdate:value":i[8]||(i[8]=c=>T(M)?M.value=c:null),onClick:i[9]||(i[9]=E(()=>{},["stop"])),conv:r(p),options:Object.keys(r(jt))},null,8,["value","conv","options"])]),_:1},8,["label"]),o(ne,null,{default:d(()=>[k("a",{onClick:i[10]||(i[10]=E((...c)=>r(y)&&r(y)(...c),["prevent"]))},O(P.$t("copyPath")),1),o(vn,{loc:r(m),onTo:r(S)},null,8,["loc","onTo"])]),_:1})]),_:1},16)])]),default:d(()=>[k("a",{class:"opt",onClick:i[5]||(i[5]=E(()=>{},["prevent"]))},O(P.$t("more")),1)]),_:1},8,["visible","getPopupContainer"])])]),r(u)?(w(),D("div",Mn,[o(r(zt),{class:"file-list",items:r(g),ref_key:"scroller",ref:n,onScroll:r(Ue),"item-size":r(Q).first,"key-field":"fullpath","item-secondary-size":r(Q).second,gridItems:r(C)},Ot({default:d(({item:c,index:N})=>[o(Bt,{idx:N,file:c,"full-screen-preview-image-url":r(g)[r(Z)]?r(Ft)(r(g)[r(Z)]):"","show-menu-idx":r(te),"onUpdate:showMenuIdx":i[12]||(i[12]=Oe=>T(te)?te.value=Oe:null),selected:r(_).includes(N),"view-mode":r(A),target:e.target,onFileItemClick:r(Ge),onDragstart:r(Ye),onPreviewVisibleChange:r(qe),onContextMenuClick:r(be)},null,8,["idx","file","full-screen-preview-image-url","show-menu-idx","selected","view-mode","target","onFileItemClick","onDragstart","onPreviewVisibleChange","onContextMenuClick"])]),_:2},[t.walkMode?{name:"after",fn:d(()=>[o(rt,{onClick:r(F),loading:r(ge),block:"",type:"primary",disabled:!r(Re),ghost:""},{default:d(()=>[I(O(P.$t("loadNextPage")),1)]),_:1},8,["onClick","loading","disabled"])]),key:"0"}:void 0]),1032,["items","onScroll","item-size","item-secondary-size","gridItems"]),r(ye)?(w(),D("div",En,[o(r(un),{onClick:i[13]||(i[13]=c=>r(he)("prev")),class:oe({disable:!r(Ce)("prev")})},null,8,["class"]),o(r(pn),{onClick:i[14]||(i[14]=c=>r(he)("next")),class:oe({disable:!r(Ce)("next")})},null,8,["class"])])):B("",!0)])):B("",!0)],544),r(ye)?(w(),j(kn,{key:0,file:r(g)[r(Z)],idx:r(Z),onContextMenuClick:r(be)},null,8,["file","idx","onContextMenuClick"])):B("",!0)]),_:1},8,["spinning"])}}});const Rn=Fe(In,[["__scopeId","data-v-3722ac77"]]);export{Rn as default};