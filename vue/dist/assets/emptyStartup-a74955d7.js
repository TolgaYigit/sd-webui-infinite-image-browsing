import{Y as re,Z as ue,d as te,u as de,$ as A,g as D,a0 as ve,h as y,c as d,a1 as pe,a2 as he,a3 as fe,a4 as me,a5 as ge,a6 as _e,a as Y,a7 as be,P as C,a8 as ye,a9 as ke,aa as we,ab as Ce,ac as Oe,ad as xe,ae as Ie,af as Se,ag as ne,k as $e,ah as L,ai as Z,o as r,y as v,p as o,v as u,r as h,H as k,m as ze,n as E,q as F,z as H,A as j,x as Pe,aj as J,ak as Me,al as Ae,T as De,V as Le,W as Fe,X as He}from"./index-812384b6.js";var je={success:ye,info:ke,error:we,warning:Ce},Be={success:Oe,info:xe,error:Ie,warning:Se},Ne=ue("success","info","warning","error"),Ve=function(){return{type:C.oneOf(Ne),closable:{type:Boolean,default:void 0},closeText:C.any,message:C.any,description:C.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:C.any,closeIcon:C.any,onClose:Function}},Te=te({compatConfig:{MODE:3},name:"AAlert",inheritAttrs:!1,props:Ve(),setup:function(t,e){var l=e.slots,i=e.emit,b=e.attrs,I=e.expose,S=de("alert",t),B=S.prefixCls,N=S.direction,a=A(!1),f=A(!1),w=A(),m=function(n){n.preventDefault();var p=w.value;p.style.height="".concat(p.offsetHeight,"px"),p.style.height="".concat(p.offsetHeight,"px"),a.value=!0,i("close",n)},g=function(){var n;a.value=!1,f.value=!0,(n=t.afterClose)===null||n===void 0||n.call(t)};I({animationEnd:g});var $=A({});return function(){var _,n,p=t.banner,W=t.closeIcon,G=W===void 0?(_=l.closeIcon)===null||_===void 0?void 0:_.call(l):W,V=t.closable,O=t.type,x=t.showIcon,T=D(l,t,"closeText"),z=D(l,t,"description"),Q=D(l,t,"message"),P=D(l,t,"icon");x=p&&x===void 0?!0:x,O=p&&O===void 0?"warning":O||"info";var se=(z?Be:je)[O]||null;T&&(V=!0);var c=B.value,oe=ve(c,(n={},y(n,"".concat(c,"-").concat(O),!0),y(n,"".concat(c,"-closing"),a.value),y(n,"".concat(c,"-with-description"),!!z),y(n,"".concat(c,"-no-icon"),!x),y(n,"".concat(c,"-banner"),!!p),y(n,"".concat(c,"-closable"),V),y(n,"".concat(c,"-rtl"),N.value==="rtl"),n)),le=V?d("button",{type:"button",onClick:m,class:"".concat(c,"-close-icon"),tabindex:0},[T?d("span",{class:"".concat(c,"-close-text")},[T]):G===void 0?d(pe,null,null):G]):null,ce=P&&(he(P)?fe(P,{class:"".concat(c,"-icon")}):d("span",{class:"".concat(c,"-icon")},[P]))||d(se,{class:"".concat(c,"-icon")},null),ie=me("".concat(c,"-motion"),{appear:!1,css:!0,onAfterLeave:g,onBeforeLeave:function(M){M.style.maxHeight="".concat(M.offsetHeight,"px")},onLeave:function(M){M.style.maxHeight="0px"}});return f.value?null:d(be,ie,{default:function(){return[ge(d("div",Y(Y({role:"alert"},b),{},{style:[b.style,$.value],class:[b.class,oe],"data-show":!a.value,ref:w}),[x?ce:null,d("div",{class:"".concat(c,"-content")},[Q?d("div",{class:"".concat(c,"-message")},[Q]):null,z?d("div",{class:"".concat(c,"-description")},[z]):null]),le]),[[_e,!a.value]])]}})}}});const Ee=re(Te);var qe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-23.1-31.9a7.92 7.92 0 00-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"file-done",theme:"outlined"};const Re=qe;function U(s){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?Object(arguments[t]):{},l=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(e).filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),l.forEach(function(i){We(s,i,e[i])})}return s}function We(s,t,e){return t in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}var q=function(t,e){var l=U({},t,e.attrs);return d(ne,U({},l,{icon:Re}),null)};q.displayName="FileDoneOutlined";q.inheritAttrs=!1;const Ge=q;var Qe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"};const Xe=Qe;function K(s){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?Object(arguments[t]):{},l=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(e).filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),l.forEach(function(i){Ye(s,i,e[i])})}return s}function Ye(s,t,e){return t in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}var R=function(t,e){var l=K({},t,e.attrs);return d(ne,K({},l,{icon:Xe}),null)};R.displayName="LockOutlined";R.inheritAttrs=!1;const ee=R;const ae=s=>(Le("data-v-995a69ae"),s=s(),Fe(),s),Ze={class:"container"},Je={class:"header"},Ue={key:0,style:{"margin-left":"16px","font-size":"1.5em"}},Ke=ae(()=>o("div",{"flex-placeholder":""},null,-1)),et={href:"https://github.com/zanllp/sd-webui-infinite-image-browsing",target:"_blank",class:"last-record"},tt={href:"https://github.com/zanllp/sd-webui-infinite-image-browsing/issues/131",target:"_blank",class:"last-record"},nt={href:"https://github.com/zanllp/sd-webui-infinite-image-browsing/issues/90",target:"_blank",class:"last-record"},at={class:"access-mode-message"},st=ae(()=>o("div",{"flex-placeholder":""},null,-1)),ot={class:"content"},lt={key:0,class:"quick-start"},ct={key:1,class:"quick-start"},it=["onClick"],rt={class:"text line-clamp-1"},ut={class:"quick-start"},dt=["onClick"],vt={class:"text line-clamp-1"},pt={class:"text line-clamp-1"},ht={class:"text line-clamp-1"},ft={key:2,class:"quick-start"},mt=["onClick"],gt={class:"text line-clamp-1"},_t=te({__name:"emptyStartup",props:{tabIdx:{},paneIdx:{}},setup(s){const t=s,e=$e(),l={local:L("local"),"tag-search":L("imgSearch"),"fuzzy-search":L("fuzzy-search"),"global-setting":L("globalSettings")},i=(a,f,w=!1)=>{let m;switch(a){case"tag-search-matched-image-grid":return;case"global-setting":case"tag-search":case"fuzzy-search":case"empty":m={type:a,name:l[a],key:Date.now()+J()};break;case"local":m={type:a,name:l[a],key:Date.now()+J(),path:f,walkModePath:w?f:void 0}}const g=e.tabList[t.tabIdx];g.panes.splice(t.paneIdx,1,m),g.key=m.key},b=Z(()=>{var a;return(a=e.tabListHistoryRecord)==null?void 0:a[1]}),I=Z(()=>e.quickMovePaths.filter(({key:a})=>a==="outdir_txt2img_samples"||a==="outdir_img2img_samples")),S=window.parent!==window,B=()=>window.parent.open("/infinite_image_browsing"),N=()=>{Me(b.value),e.tabList=Ae(b.value.tabs)};return(a,f)=>{var g,$,_;const w=Ee,m=De;return r(),v("div",Ze,[o("div",Je,[o("h1",null,u(a.$t("welcome")),1),(g=h(e).conf)!=null&&g.enable_access_control&&h(e).dontShowAgain?(r(),v("div",Ue,[d(h(ee),{title:"Access Control mode",style:{"vertical-align":"text-bottom"}})])):k("",!0),Ke,o("a",et,u(a.$t("document")),1),o("a",tt,u(a.$t("changlog")),1),o("a",nt,u(a.$t("faq")),1)]),($=h(e).conf)!=null&&$.enable_access_control&&!h(e).dontShowAgain?(r(),ze(w,{key:0,"show-icon":""},{message:E(()=>[o("div",at,[o("div",null,u(a.$t("accessControlModeTips")),1),st,o("a",{onClick:f[0]||(f[0]=F(n=>h(e).dontShowAgain=!0,["prevent"]))},u(a.$t("dontShowAgain")),1)])]),icon:E(()=>[d(h(ee))]),_:1})):k("",!0),o("div",ot,[I.value.length?(r(),v("div",lt,[o("h2",null,u(a.$t("walkMode")),1),o("ul",null,[(r(!0),v(H,null,j(I.value,n=>(r(),v("li",{key:n.dir,class:"item"},[d(m,{onClick:p=>i("local",n.dir,!0),ghost:"",type:"primary",block:""},{default:E(()=>[Pe(u(n.zh),1)]),_:2},1032,["onClick"])]))),128))])])):k("",!0),h(e).quickMovePaths.length?(r(),v("div",ct,[o("h2",null,u(a.$t("launchFromQuickMove")),1),o("ul",null,[(r(!0),v(H,null,j(h(e).quickMovePaths,n=>(r(),v("li",{key:n.key,class:"item",onClick:F(p=>i("local",n.dir),["prevent"])},[o("span",rt,u(n.zh),1)],8,it))),128))])])):k("",!0),o("div",ut,[o("h2",null,u(a.$t("launch")),1),o("ul",null,[(r(!0),v(H,null,j(Object.keys(l),n=>(r(),v("li",{key:n,class:"item",onClick:F(p=>i(n),["prevent"])},[o("span",vt,u(l[n]),1)],8,dt))),128)),S?(r(),v("li",{key:0,class:"item",onClick:B},[o("span",pt,u(a.$t("openInNewWindow")),1)])):k("",!0),(_=b.value)!=null&&_.tabs.length?(r(),v("li",{key:1,class:"item",onClick:N},[o("span",ht,u(a.$t("restoreLastRecord")),1)])):k("",!0)])]),h(e).recent.length?(r(),v("div",ft,[o("h2",null,u(a.$t("recent")),1),o("ul",null,[(r(!0),v(H,null,j(h(e).recent,n=>(r(),v("li",{key:n.key,class:"item",onClick:F(p=>i("local",n.path),["prevent"])},[d(h(Ge),{class:"icon"}),o("span",gt,u(n.path),1)],8,mt))),128))])])):k("",!0)])])}}});const yt=He(_t,[["__scopeId","data-v-995a69ae"]]);export{yt as default};
