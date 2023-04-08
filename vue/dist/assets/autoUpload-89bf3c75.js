import{b as ce,t as z,w as Q,c as i,d as P,i as J,u as de,_,S as ve,a as me,P as x,e as pe,r as k,o as ge,f as _e,g as q,h as Se,A as be,j as Ce,k as O,l as ye,m as $e,n as F,p as xe,q as R,s as $,v as Re,x as we,y as Oe,z as ke,B as Te,C as he,D as Ae}from"./index-17d0f6c7.js";import{b as Me,a as De,t as W,R as Ne,C as Pe}from"./index-568fd7dd.js";import{I as je,T as Ee}from"./index-b763ff03.js";import"./index-56112ae2.js";import{B as Ie}from"./button-051495da.js";var Ue=9007199254740991,Le=Math.floor;function B(t,e){var a="";if(!t||e<1||e>Ue)return a;do e%2&&(a+=t),e=Le(e/2),e&&(t+=t);while(e);return a}function Fe(t,e,a){var n=t.length;return a=a===void 0?n:a,!e&&a>=n?t:Me(t,e,a)}var Be="\\ud800-\\udfff",He="\\u0300-\\u036f",Ve="\\ufe20-\\ufe2f",ze="\\u20d0-\\u20ff",Qe=He+Ve+ze,Je="\\ufe0e\\ufe0f",qe="\\u200d",We=RegExp("["+qe+Be+Qe+Je+"]");function j(t){return We.test(t)}var Ze=De("length");const Ge=Ze;var Z="\\ud800-\\udfff",Xe="\\u0300-\\u036f",Ye="\\ufe20-\\ufe2f",Ke="\\u20d0-\\u20ff",et=Xe+Ye+Ke,tt="\\ufe0e\\ufe0f",at="["+Z+"]",A="["+et+"]",M="\\ud83c[\\udffb-\\udfff]",nt="(?:"+A+"|"+M+")",G="[^"+Z+"]",X="(?:\\ud83c[\\udde6-\\uddff]){2}",Y="[\\ud800-\\udbff][\\udc00-\\udfff]",rt="\\u200d",K=nt+"?",ee="["+tt+"]?",ot="(?:"+rt+"(?:"+[G,X,Y].join("|")+")"+ee+K+")*",ut=ee+K+ot,it="(?:"+[G+A+"?",A,X,Y,at].join("|")+")",H=RegExp(M+"(?="+M+")|"+it+ut,"g");function st(t){for(var e=H.lastIndex=0;H.test(t);)++e;return e}function E(t){return j(t)?st(t):Ge(t)}function lt(t){return t.split("")}var te="\\ud800-\\udfff",ft="\\u0300-\\u036f",ct="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",vt=ft+ct+dt,mt="\\ufe0e\\ufe0f",pt="["+te+"]",D="["+vt+"]",N="\\ud83c[\\udffb-\\udfff]",gt="(?:"+D+"|"+N+")",ae="[^"+te+"]",ne="(?:\\ud83c[\\udde6-\\uddff]){2}",re="[\\ud800-\\udbff][\\udc00-\\udfff]",_t="\\u200d",oe=gt+"?",ue="["+mt+"]?",St="(?:"+_t+"(?:"+[ae,ne,re].join("|")+")"+ue+oe+")*",bt=ue+oe+St,Ct="(?:"+[ae+D+"?",D,ne,re,pt].join("|")+")",yt=RegExp(N+"(?="+N+")|"+Ct+bt,"g");function $t(t){return t.match(yt)||[]}function xt(t){return j(t)?$t(t):lt(t)}var Rt=Math.ceil;function ie(t,e){e=e===void 0?" ":ce(e);var a=e.length;if(a<2)return a?B(e,t):e;var n=B(e,Rt(t/E(e)));return j(e)?Fe(xt(n),0,t).join(""):n.slice(0,t)}function wt(t,e,a){t=z(t),e=W(e);var n=e?E(t):0;return e&&n<e?ie(e-n,a)+t:t}const Ot=Q(Ne),kt=Q(Pe);function Tt(t,e,a){t=z(t),e=W(e);var n=e?E(t):0;return e&&n<e?t+ie(e-n,a):t}var se=function(e){var a=e.value,n=e.formatter,u=e.precision,f=e.decimalSeparator,m=e.groupSeparator,c=m===void 0?"":m,l=e.prefixCls,d;if(typeof n=="function")d=n({value:a});else{var p=String(a),v=p.match(/^(-?)(\d*)(\.(\d+))?$/);if(!v)d=p;else{var r=v[1],o=v[2]||"0",s=v[4]||"";o=o.replace(/\B(?=(\d{3})+(?!\d))/g,c),typeof u=="number"&&(s=Tt(s,u,"0").slice(0,u)),s&&(s="".concat(f).concat(s)),d=[i("span",{key:"int",class:"".concat(l,"-content-value-int")},[r,o]),s&&i("span",{key:"decimal",class:"".concat(l,"-content-value-decimal")},[s])]}}return i("span",{class:"".concat(l,"-content-value")},[d])};se.displayName="StatisticNumber";const ht=se;var le=function(){return{prefixCls:String,decimalSeparator:String,groupSeparator:String,format:String,value:{type:[String,Number,Object]},valueStyle:{type:Object,default:void 0},valueRender:x.any,formatter:x.any,precision:Number,prefix:x.any,suffix:x.any,title:x.any,loading:{type:Boolean,default:void 0}}};const S=P({compatConfig:{MODE:3},name:"AStatistic",props:J(le(),{decimalSeparator:".",groupSeparator:",",loading:!1}),slots:["title","prefix","suffix","formatter"],setup:function(e,a){var n=a.slots,u=de("statistic",e),f=u.prefixCls,m=u.direction;return function(){var c,l,d,p,v,r,o,s=e.value,b=s===void 0?0:s,C=e.valueStyle,y=e.valueRender,g=f.value,w=(c=e.title)!==null&&c!==void 0?c:(l=n.title)===null||l===void 0?void 0:l.call(n),U=(d=e.prefix)!==null&&d!==void 0?d:(p=n.prefix)===null||p===void 0?void 0:p.call(n),L=(v=e.suffix)!==null&&v!==void 0?v:(r=n.suffix)===null||r===void 0?void 0:r.call(n),fe=(o=e.formatter)!==null&&o!==void 0?o:n.formatter,T=i(ht,_({"data-for-update":Date.now()},_(_({},e),{},{prefixCls:g,value:b,formatter:fe})),null);return y&&(T=y(T)),i("div",{class:[g,me({},"".concat(g,"-rtl"),m.value==="rtl")]},[w&&i("div",{class:"".concat(g,"-title")},[w]),i(ve,{paragraph:!1,loading:e.loading},{default:function(){return[i("div",{style:C,class:"".concat(g,"-content")},[U&&i("span",{class:"".concat(g,"-content-prefix")},[U]),T,L&&i("span",{class:"".concat(g,"-content-suffix")},[L])])]}})])}}});var At=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function Mt(t,e){var a=t,n=/\[[^\]]*]/g,u=(e.match(n)||[]).map(function(l){return l.slice(1,-1)}),f=e.replace(n,"[]"),m=At.reduce(function(l,d){var p=pe(d,2),v=p[0],r=p[1];if(l.indexOf(v)!==-1){var o=Math.floor(a/r);return a-=o*r,l.replace(new RegExp("".concat(v,"+"),"g"),function(s){var b=s.length;return wt(o.toString(),b,"0")})}return l},f),c=0;return m.replace(n,function(){var l=u[c];return c+=1,l})}function Dt(t,e){var a=e.format,n=a===void 0?"":a,u=new Date(t).getTime(),f=Date.now(),m=Math.max(u-f,0);return Mt(m,n)}var Nt=1e3/30;function h(t){return new Date(t).getTime()}var Pt=function(){return _(_({},le()),{},{value:[Number,String,Object],format:String,onFinish:Function,onChange:Function})};const jt=P({compatConfig:{MODE:3},name:"AStatisticCountdown",props:J(Pt(),{format:"HH:mm:ss"}),setup:function(e,a){var n=a.emit,u=a.slots,f=k(),m=k(),c=function(){var o=e.value,s=h(o);s>=Date.now()?l():d()},l=function(){if(!f.value){var o=h(e.value);f.value=setInterval(function(){m.value.$forceUpdate(),o>Date.now()&&n("change",o-Date.now()),c()},Nt)}},d=function(){var o=e.value;if(f.value){clearInterval(f.value),f.value=void 0;var s=h(o);s<Date.now()&&n("finish")}},p=function(o){var s=o.value,b=o.config,C=e.format;return Dt(s,_(_({},b),{},{format:C}))},v=function(o){return o};return ge(function(){c()}),_e(function(){c()}),q(function(){d()}),function(){var r=e.value;return i(S,_({ref:m},_(_({},Se(e,["onFinish","onChange"])),{},{value:r,valueRender:v,formatter:p})),u)}}});S.Countdown=jt;S.install=function(t){return t.component(S.name,S),t.component(S.Countdown.name,S.Countdown),t};S.Countdown;var Et={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"}}]},name:"loading-3-quarters",theme:"outlined"};const It=Et;function V(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(u){return Object.getOwnPropertyDescriptor(a,u).enumerable}))),n.forEach(function(u){Ut(t,u,a[u])})}return t}function Ut(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var I=function(e,a){var n=V({},e,a.attrs);return i(be,V({},n,{icon:It}),null)};I.displayName="Loading3QuartersOutlined";I.inheritAttrs=!1;const Lt=I,Ft={class:"container"},Bt=P({__name:"autoUpload",emits:["runningChange"],setup(t,{emit:e}){const a=Ce(),n=k([]),u=k(),f=O(()=>!!(u.value||n.value.length));ye(()=>e("runningChange",f.value));const m=$e(new Map),c=O(()=>Array.from(m.values())),l=O(()=>c.value.reduce((r,o)=>r+o.n_success_files,0)),d=O(()=>c.value.reduce((r,o)=>r+o.n_failed_files,0));q(()=>{var r;(r=u.value)==null||r.clearTask()});const p=()=>Ee.run({action:async()=>{const r=await Te(a.autoUploadRecvDir);return r.tick_info&&m.set(r.tick_info.task_summary.id,r.tick_info.task_summary),n.value=r.pending_files,await he(1e4*Math.random()),r},pollInterval:3e4}),v=async()=>{u.value?(u.value.clearTask(),u.value=void 0,n.value=[]):u.value=p()};return(r,o)=>{const s=je,b=Ie,C=S,y=kt,g=Ot;return F(),xe("div",Ft,[i(s,{value:R(a).autoUploadRecvDir,"onUpdate:value":o[0]||(o[0]=w=>R(a).autoUploadRecvDir=w)},null,8,["value"]),i(b,{onClick:v},{default:$(()=>[u.value?(F(),Re(R(Lt),{key:0,spin:""})):we("",!0),Oe(" "+ke(u.value?"暂停":"开始"),1)]),_:1}),i(g,null,{default:$(()=>[i(y,{span:12},{default:$(()=>[i(C,{title:"等待上传数量",value:n.value.length,style:{"margin-right":"50px"}},null,8,["value"])]),_:1}),i(y,{span:12},{default:$(()=>[i(C,{title:"上传失败数量",value:R(d)},null,8,["value"])]),_:1})]),_:1}),i(g,null,{default:$(()=>[i(y,{span:12},{default:$(()=>[i(C,{title:"已完成数量",value:R(l),style:{"margin-right":"50px"}},null,8,["value"])]),_:1})]),_:1})])}}});const Wt=Ae(Bt,[["__scopeId","data-v-d72d4be0"]]);export{Wt as default};