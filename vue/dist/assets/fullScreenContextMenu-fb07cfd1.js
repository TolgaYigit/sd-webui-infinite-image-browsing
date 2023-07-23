import{d as oe,bq as de,aI as fe,bU as ve,ax as pe,aC as V,bV as me,bW as Z,e as J,c as o,_ as ge,h as x,a as K,bz as he,P as R,ag as A,aw as ye,aM as be,l as se,k as we,$ as W,aj as U,bO as Oe,bX as _e,bY as Ee,ai as T,o as h,y as _,p as j,r as f,m as z,n as c,L as ee,bZ as Le,E as N,z as I,A as B,x as g,v as m,t as $e,N as Se,q as xe,V as Pe,W as Ce,M as Me,b_ as ke,X as De}from"./index-24041d00.js";import{h as je,j as Ne,_ as ze,S as Ae,k as We,D as Te,l as Ie}from"./FileItem-ce43e0c3.js";import"./shortcut-f1370d0c.js";var Fe=["class","style"],Ue=function(){return{prefixCls:String,spinning:{type:Boolean,default:void 0},size:String,wrapperClassName:String,tip:R.any,delay:Number,indicator:R.any}},F=null;function Be(t,e){return!!t&&!!e&&!isNaN(Number(e))}function St(t){var e=t.indicator;F=typeof e=="function"?e:function(){return o(e,null,null)}}const xt=oe({compatConfig:{MODE:3},name:"ASpin",inheritAttrs:!1,props:de(Ue(),{size:"default",spinning:!0,wrapperClassName:""}),setup:function(){return{originalUpdateSpinning:null,configProvider:fe("configProvider",ve)}},data:function(){var e=this.spinning,i=this.delay,n=Be(e,i);return{sSpinning:e&&!n}},created:function(){this.originalUpdateSpinning=this.updateSpinning,this.debouncifyUpdateSpinning(this.$props)},mounted:function(){this.updateSpinning()},updated:function(){var e=this;pe(function(){e.debouncifyUpdateSpinning(),e.updateSpinning()})},beforeUnmount:function(){this.cancelExistingSpin()},methods:{debouncifyUpdateSpinning:function(e){var i=e||this.$props,n=i.delay;n&&(this.cancelExistingSpin(),this.updateSpinning=V(this.originalUpdateSpinning,n))},updateSpinning:function(){var e=this.spinning,i=this.sSpinning;i!==e&&(this.sSpinning=e)},cancelExistingSpin:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()},renderIndicator:function(e){var i="".concat(e,"-dot"),n=me(this,"indicator");return n===null?null:(Array.isArray(n)&&(n=n.length===1?n[0]:n),Z(n)?J(n,{class:i}):F&&Z(F())?J(F(),{class:i}):o("span",{class:"".concat(i," ").concat(e,"-dot-spin")},[o("i",{class:"".concat(e,"-dot-item")},null),o("i",{class:"".concat(e,"-dot-item")},null),o("i",{class:"".concat(e,"-dot-item")},null),o("i",{class:"".concat(e,"-dot-item")},null)]))}},render:function(){var e,i,n,s=this.$props,E=s.size,O=s.prefixCls,C=s.tip,L=C===void 0?(e=(i=this.$slots).tip)===null||e===void 0?void 0:e.call(i):C,M=s.wrapperClassName,$=this.$attrs,S=$.class,P=$.style,v=ge($,Fe),w=this.configProvider,k=w.getPrefixCls,r=w.direction,l=k("spin",O),b=this.sSpinning,a=(n={},x(n,l,!0),x(n,"".concat(l,"-sm"),E==="small"),x(n,"".concat(l,"-lg"),E==="large"),x(n,"".concat(l,"-spinning"),b),x(n,"".concat(l,"-show-text"),!!L),x(n,"".concat(l,"-rtl"),r==="rtl"),x(n,S,!!S),n),u=o("div",K(K({},v),{},{style:P,class:a}),[this.renderIndicator(l),L?o("div",{class:"".concat(l,"-text")},[L]):null]),d=he(this);if(d&&d.length){var y,D=(y={},x(y,"".concat(l,"-container"),!0),x(y,"".concat(l,"-blur"),b),y);return o("div",{class:["".concat(l,"-nested-loading"),M]},[b&&o("div",{key:"loading"},[u]),o("div",{class:D,key:"container"},[d])])}return u}});var Ve={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M855 160.1l-189.2 23.5c-6.6.8-9.3 8.8-4.7 13.5l54.7 54.7-153.5 153.5a8.03 8.03 0 000 11.3l45.1 45.1c3.1 3.1 8.2 3.1 11.3 0l153.6-153.6 54.7 54.7a7.94 7.94 0 0013.5-4.7L863.9 169a7.9 7.9 0 00-8.9-8.9zM416.6 562.3a8.03 8.03 0 00-11.3 0L251.8 715.9l-54.7-54.7a7.94 7.94 0 00-13.5 4.7L160.1 855c-.6 5.2 3.7 9.5 8.9 8.9l189.2-23.5c6.6-.8 9.3-8.8 4.7-13.5l-54.7-54.7 153.6-153.6c3.1-3.1 3.1-8.2 0-11.3l-45.2-45z"}}]},name:"arrows-alt",theme:"outlined"};const Xe=Ve;function te(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(s){return Object.getOwnPropertyDescriptor(i,s).enumerable}))),n.forEach(function(s){Ye(t,s,i[s])})}return t}function Ye(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var X=function(e,i){var n=te({},e,i.attrs);return o(A,te({},n,{icon:Xe}),null)};X.displayName="ArrowsAltOutlined";X.inheritAttrs=!1;const He=X;var qe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.3 506.3L781.7 405.6a7.23 7.23 0 00-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7a7.14 7.14 0 00-11.3 0L405.6 242.3a7.23 7.23 0 005.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3a7.14 7.14 0 000 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8a7.3 7.3 0 00.1-11.4z"}}]},name:"drag",theme:"outlined"};const Ge=qe;function ne(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(s){return Object.getOwnPropertyDescriptor(i,s).enumerable}))),n.forEach(function(s){Qe(t,s,i[s])})}return t}function Qe(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var Y=function(e,i){var n=ne({},e,i.attrs);return o(A,ne({},n,{icon:Ge}),null)};Y.displayName="DragOutlined";Y.inheritAttrs=!1;const Ze=Y;var Je={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 000 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 00391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 00-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"}}]},name:"fullscreen-exit",theme:"outlined"};const Ke=Je;function ie(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(s){return Object.getOwnPropertyDescriptor(i,s).enumerable}))),n.forEach(function(s){Re(t,s,i[s])})}return t}function Re(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var H=function(e,i){var n=ie({},e,i.attrs);return o(A,ie({},n,{icon:Ke}),null)};H.displayName="FullscreenExitOutlined";H.inheritAttrs=!1;const et=H;var tt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"}}]},name:"fullscreen",theme:"outlined"};const nt=tt;function ae(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(s){return Object.getOwnPropertyDescriptor(i,s).enumerable}))),n.forEach(function(s){it(t,s,i[s])})}return t}function it(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var q=function(e,i){var n=ae({},e,i.attrs);return o(A,ae({},n,{icon:nt}),null)};q.displayName="FullscreenOutlined";q.inheritAttrs=!1;const at=q;var rt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M603.3 327.5l-246 178a7.95 7.95 0 000 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"left-circle",theme:"outlined"};const lt=rt;function re(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(s){return Object.getOwnPropertyDescriptor(i,s).enumerable}))),n.forEach(function(s){ot(t,s,i[s])})}return t}function ot(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var G=function(e,i){var n=re({},e,i.attrs);return o(A,re({},n,{icon:lt}),null)};G.displayName="LeftCircleOutlined";G.inheritAttrs=!1;const Pt=G;var st={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"};const ut=st;function le(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(s){return Object.getOwnPropertyDescriptor(i,s).enumerable}))),n.forEach(function(s){ct(t,s,i[s])})}return t}function ct(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var Q=function(e,i){var n=le({},e,i.attrs);return o(A,le({},n,{icon:ut}),null)};Q.displayName="RightCircleOutlined";Q.inheritAttrs=!1;const Ct=Q;function dt(t,e,i,n){const s={x:0,y:0};let E=0,O=0,C=typeof(n==null?void 0:n.width)=="number"?n.width:0,L=typeof(n==null?void 0:n.height)=="number"?n.height:0,M=typeof(n==null?void 0:n.left)=="number"?n.left:0,$=typeof(n==null?void 0:n.top)=="number"?n.top:0,S=!1;const P=a=>{a.stopPropagation(),a.preventDefault(),!(!t.value||!e.value)&&(E=a instanceof MouseEvent?a.clientX:a.touches[0].clientX,O=a instanceof MouseEvent?a.clientY:a.touches[0].clientY,C=t.value.offsetWidth,L=t.value.offsetHeight,s.x=e.value.offsetLeft,s.y=e.value.offsetTop,document.documentElement.addEventListener("mousemove",v),document.documentElement.addEventListener("touchmove",v),document.documentElement.addEventListener("mouseup",w),document.documentElement.addEventListener("touchend",w))},v=a=>{if(!t.value||!e.value)return;let u=C+((a instanceof MouseEvent?a.clientX:a.touches[0].clientX)-E),d=L+((a instanceof MouseEvent?a.clientY:a.touches[0].clientY)-O),y=s.x+((a instanceof MouseEvent?a.clientX:a.touches[0].clientX)-E),D=s.y+((a instanceof MouseEvent?a.clientY:a.touches[0].clientY)-O);y+e.value.offsetWidth>window.innerWidth&&(y=window.innerWidth-e.value.offsetWidth),t.value.offsetLeft+u>window.innerWidth&&(u=window.innerWidth-t.value.offsetLeft),D+e.value.offsetHeight>window.innerHeight&&(D=window.innerHeight-e.value.offsetHeight),t.value.offsetTop+d>window.innerHeight&&(d=window.innerHeight-t.value.offsetTop),t.value.style.width=`${u}px`,t.value.style.height=`${d}px`,e.value.style.left=`${y}px`,e.value.style.top=`${D}px`,n!=null&&n.onResize&&n.onResize(u,d)},w=()=>{document.documentElement.removeEventListener("mousemove",v),document.documentElement.removeEventListener("touchmove",v),document.documentElement.removeEventListener("mouseup",w),document.documentElement.removeEventListener("touchend",w)},k=a=>{a.stopPropagation(),a.preventDefault(),!(!t.value||!i.value)&&(S=!0,M=t.value.offsetLeft,$=t.value.offsetTop,E=a instanceof MouseEvent?a.clientX:a.touches[0].clientX,O=a instanceof MouseEvent?a.clientY:a.touches[0].clientY,document.documentElement.addEventListener("mousemove",r),document.documentElement.addEventListener("touchmove",r),document.documentElement.addEventListener("mouseup",l),document.documentElement.addEventListener("touchend",l))},r=a=>{if(!t.value||!i.value||!S)return;const u=M+((a instanceof MouseEvent?a.clientX:a.touches[0].clientX)-E),d=$+((a instanceof MouseEvent?a.clientY:a.touches[0].clientY)-O);u<0?t.value.style.left="0px":u+t.value.offsetWidth>window.innerWidth?t.value.style.left=`${window.innerWidth-t.value.offsetWidth}px`:t.value.style.left=`${u}px`,d<0?t.value.style.top="0px":d+t.value.offsetHeight>window.innerHeight?t.value.style.top=`${window.innerHeight-t.value.offsetHeight}px`:t.value.style.top=`${d}px`,n!=null&&n.onDrag&&n.onDrag(u,d)},l=()=>{S=!1,document.documentElement.removeEventListener("mousemove",r),document.documentElement.removeEventListener("touchmove",r),document.documentElement.removeEventListener("mouseup",l),document.documentElement.removeEventListener("touchend",l)},b=()=>{if(!t.value||!e.value)return;let a=t.value.offsetLeft,u=t.value.offsetTop,d=t.value.offsetWidth,y=t.value.offsetHeight;a+d>window.innerWidth&&(a=window.innerWidth-d,a<0&&(a=0,d=window.innerWidth)),u+y>window.innerHeight&&(u=window.innerHeight-y,u<0&&(u=0,y=window.innerHeight)),t.value.style.left=`${a}px`,t.value.style.top=`${u}px`,t.value.style.width=`${d}px`,t.value.style.height=`${y}px`};return ye(()=>{!t.value||!n||(typeof n.width=="number"&&(t.value.style.width=`${n.width}px`),typeof n.height=="number"&&(t.value.style.height=`${n.height}px`),typeof n.left=="number"&&(t.value.style.left=`${n.left}px`),typeof n.top=="number"&&(t.value.style.top=`${n.top}px`),b(),window.addEventListener("resize",b))}),be(()=>{document.documentElement.removeEventListener("mousemove",v),document.documentElement.removeEventListener("touchmove",v),document.documentElement.removeEventListener("mouseup",w),document.documentElement.removeEventListener("touchend",w),document.documentElement.removeEventListener("mousemove",r),document.documentElement.removeEventListener("touchmove",r),document.documentElement.removeEventListener("mouseup",l),document.documentElement.removeEventListener("touchend",l),window.removeEventListener("resize",b)}),se(()=>[t.value,e.value,i.value],([a,u,d])=>{a&&u&&(u.addEventListener("mousedown",P),u.addEventListener("touchstart",P)),a&&d&&(d.addEventListener("mousedown",k),d.addEventListener("touchstart",k))}),{handleResizeMouseDown:P,handleDragMouseDown:k}}const ft={class:"container"},vt={class:"action-bar"},pt={key:0,class:"icon",style:{cursor:"pointer"}},mt={key:0,"flex-placeholder":""},gt={key:1,class:"action-bar"},ht={key:0,class:"gen-info"},yt={class:"tags"},bt={class:"name"},wt={class:"value"},Ot={key:0,class:"tags-container"},_t=oe({__name:"fullScreenContextMenu",props:{file:{},idx:{}},emits:["contextMenuClick"],setup(t,{emit:e}){const i=t,n=we(),s=je(),E=W(),O=U(()=>s.tagMap.get(i.file.fullpath)??[]),C=U(()=>{var r;return(((r=n.conf)==null?void 0:r.all_custom_tags)??[]).reduce((l,b)=>[...l,{...b,selected:!!O.value.find(a=>a.id===b.id)}],[])}),L=W(""),M=Oe(),$=W("");se(()=>{var r;return(r=i==null?void 0:i.file)==null?void 0:r.fullpath},async r=>{r&&(M.tasks.forEach(l=>l.cancel()),M.pushAction(()=>_e(r)).res.then(l=>{$.value=l}))},{immediate:!0});const S=W(),P=W(),v=Ee("fullScreenContextMenu.vue-drag",{left:100,top:100,width:512,height:384,expanded:!0});dt(E,S,P,{...v.value,onDrag:V(function(r,l){v.value={...v.value,left:r,top:l}},300),onResize:V(function(r,l){v.value={...v.value,width:r,height:l}},300)});function w(r){return r.parentNode}Ne("load",r=>{const l=r.target;l.className==="ant-image-preview-img"&&(L.value=`${l.naturalWidth} x ${l.naturalHeight}`)},{capture:!0});const k=U(()=>{const r=[{name:T("fileName"),val:i.file.name},{name:T("fileSize"),val:i.file.size}];return L.value&&r.push({name:T("resolution"),val:L.value}),r});return(r,l)=>{const b=Te,a=Pe,u=Ce,d=Me,y=ke,D=Ie;return h(),_("div",{ref_key:"el",ref:E,class:Se(["full-screen-menu",{"unset-size":!f(v).expanded}]),onWheelCapture:l[5]||(l[5]=xe(()=>{},["stop"]))},[j("div",ft,[j("div",vt,[j("div",{ref_key:"dragHandle",ref:P,class:"icon",style:{cursor:"grab"}},[o(f(Ze))],512),j("div",{class:"icon",style:{cursor:"pointer"},onClick:l[0]||(l[0]=p=>f(v).expanded=!f(v).expanded)},[f(v).expanded?(h(),z(f(et),{key:0})):(h(),z(f(at),{key:1}))]),o(b,{"get-popup-container":w},{overlay:c(()=>[o(ze,{file:r.file,idx:r.idx,"selected-tag":O.value,"disable-delete":f(ee)(r.file)===f(n).fullscreenPreviewInitialUrl,onContextMenuClick:l[1]||(l[1]=(p,ue,ce)=>e("contextMenuClick",p,ue,ce))},null,8,["file","idx","selected-tag","disable-delete"])]),default:c(()=>[f(v).expanded?N("",!0):(h(),_("div",pt,[o(f(Le))]))]),_:1}),f(v).expanded?(h(),_("div",mt)):N("",!0),f(v).expanded?(h(),_("div",gt,[o(b,{trigger:["hover"],"get-popup-container":w},{overlay:c(()=>[o(d,{onClick:l[2]||(l[2]=p=>e("contextMenuClick",p,r.file,r.idx))},{default:c(()=>[(h(!0),_(I,null,B(C.value,p=>(h(),z(u,{key:`toggle-tag-${p.id}`},{default:c(()=>[g(m(p.name)+" ",1),p.selected?(h(),z(f(Ae),{key:0})):(h(),z(f(We),{key:1}))]),_:2},1024))),128))]),_:1})]),default:c(()=>[o(a,null,{default:c(()=>[g(m(r.$t("toggleTag")),1)]),_:1})]),_:1}),o(b,{trigger:["hover"],"get-popup-container":w},{overlay:c(()=>[o(d,{onClick:l[3]||(l[3]=p=>e("contextMenuClick",p,r.file,r.idx))},{default:c(()=>{var p;return[((p=f(n).conf)==null?void 0:p.launch_mode)!=="server"?(h(),_(I,{key:0},[o(u,{key:"send2txt2img"},{default:c(()=>[g(m(r.$t("sendToTxt2img")),1)]),_:1}),o(u,{key:"send2img2img"},{default:c(()=>[g(m(r.$t("sendToImg2img")),1)]),_:1}),o(u,{key:"send2inpaint"},{default:c(()=>[g(m(r.$t("sendToInpaint")),1)]),_:1}),o(u,{key:"send2extras"},{default:c(()=>[g(m(r.$t("sendToExtraFeatures")),1)]),_:1}),o(y,{key:"sendToThirdPartyExtension",title:r.$t("sendToThirdPartyExtension")},{default:c(()=>[o(u,{key:"send2controlnet-txt2img"},{default:c(()=>[g("ControlNet - "+m(r.$t("t2i")),1)]),_:1}),o(u,{key:"send2controlnet-img2img"},{default:c(()=>[g("ControlNet - "+m(r.$t("i2i")),1)]),_:1}),o(u,{key:"send2outpaint"},{default:c(()=>[g("openOutpaint")]),_:1})]),_:1},8,["title"])],64)):N("",!0),o(u,{key:"send2BatchDownload"},{default:c(()=>[g(m(r.$t("sendToBatchDownload")),1)]),_:1}),o(u,{key:"send2savedDir"},{default:c(()=>[g(m(r.$t("send2savedDir")),1)]),_:1}),o(u,{key:"deleteFiles",disabled:f(ee)(r.file)===f(n).fullscreenPreviewInitialUrl},{default:c(()=>[g(m(r.$t("deleteSelected")),1)]),_:1},8,["disabled"]),o(u,{key:"previewInNewWindow"},{default:c(()=>[g(m(r.$t("previewInNewWindow")),1)]),_:1}),o(u,{key:"download"},{default:c(()=>[g(m(r.$t("download")),1)]),_:1}),o(u,{key:"copyPreviewUrl"},{default:c(()=>[g(m(r.$t("copySourceFilePreviewLink")),1)]),_:1})]}),_:1})]),default:c(()=>[o(a,null,{default:c(()=>[g(m(f(T)("openContextMenu")),1)]),_:1})]),_:1}),o(a,{onClick:l[4]||(l[4]=p=>f($e)($.value))},{default:c(()=>[g(m(r.$t("copyPrompt")),1)]),_:1})])):N("",!0)]),f(v).expanded?(h(),_("div",ht,[j("div",yt,[(h(!0),_(I,null,B(k.value,p=>(h(),_("span",{class:"tag",key:p.name},[j("span",bt,m(p.name),1),j("span",wt,m(p.val),1)]))),128))]),O.value?(h(),_("div",Ot,[(h(!0),_(I,null,B(O.value,p=>(h(),z(D,{key:p.id,color:f(s).getColor(p.name)},{default:c(()=>[g(m(p.name),1)]),_:2},1032,["color"]))),128))])):N("",!0),g(" "+m($.value),1)])):N("",!0)]),f(v).expanded?(h(),_("div",{key:0,class:"mouse-sensor",ref_key:"resizeHandle",ref:S},[o(f(He))],512)):N("",!0)],34)}}});const Mt=De(_t,[["__scopeId","data-v-c968315f"]]);export{Pt as L,Ct as R,xt as S,Mt as f,St as s};