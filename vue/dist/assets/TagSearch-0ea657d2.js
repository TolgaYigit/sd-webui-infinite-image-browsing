import{P as L,au as ke,d as ae,by as _e,b2 as Se,r as R,bV as Pe,k as be,u as Ce,B as Q,aj as ne,h as x,c as v,a as J,bW as Oe,b as Te,f as Ne,bX as Be,al as ue,bY as Ee,aW as Ke,i as Me,ba as Re,bZ as De,ap as Fe,aq as je,ao as Ue,A as Le,aZ as Ve,aX as ze,b_ as Ge,aY as Xe,b$ as qe,N as _,O as S,Q as A,S as $,X as Z,Z as M,c0 as We,U as X,R as G,$ as ce,c1 as Ye,aa as Ae,V as Ie,W as Ze,c2 as He,ah as Qe,l as Je,t as ea,I as aa,o as ta,c3 as ve,n as na,av as la,z as pe,y as oa,c4 as sa,T as H,a6 as ie,Y as U,a2 as fe,aG as ia,c5 as ra,v as ge,x as re,ad as ca,c6 as da,af as me,c7 as ua,ae as va,c8 as pa,c9 as fa}from"./index-fa852b19.js";import{S as ga}from"./index-129882d0.js";/* empty css              *//* empty css              */var ma=function(){return{prefixCls:String,activeKey:{type:[Array,Number,String]},defaultActiveKey:{type:[Array,Number,String]},accordion:{type:Boolean,default:void 0},destroyInactivePanel:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},expandIcon:Function,openAnimation:L.object,expandIconPosition:L.oneOf(ke("left","right")),collapsible:{type:String},ghost:{type:Boolean,default:void 0},onChange:Function,"onUpdate:activeKey":Function}},$e=function(){return{openAnimation:L.object,prefixCls:String,header:L.any,headerClass:String,showArrow:{type:Boolean,default:void 0},isActive:{type:Boolean,default:void 0},destroyInactivePanel:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},accordion:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},expandIcon:Function,extra:L.any,panelKey:L.oneOfType([L.string,L.number]),collapsible:{type:String},role:String,onItemClick:{type:Function}}};function he(s){var e=s;if(!Array.isArray(e)){var t=Te(e);e=t==="number"||t==="string"?[e]:[]}return e.map(function(l){return String(l)})}const ee=ae({compatConfig:{MODE:3},name:"ACollapse",inheritAttrs:!1,props:_e(ma(),{accordion:!1,destroyInactivePanel:!1,bordered:!0,openAnimation:Se("ant-motion-collapse",!1),expandIconPosition:"left"}),slots:["expandIcon"],setup:function(e,t){var l=t.attrs,r=t.slots,i=t.emit,o=R(he(Pe([e.activeKey,e.defaultActiveKey])));be(function(){return e.activeKey},function(){o.value=he(e.activeKey)},{deep:!0});var m=Ce("collapse",e),f=m.prefixCls,O=m.direction,B=Q(function(){var g=e.expandIconPosition;return g!==void 0?g:O.value==="rtl"?"right":"left"}),k=function(c){var d=e.expandIcon,y=d===void 0?r.expandIcon:d,p=y?y(c):v(Ee,{rotate:c.isActive?90:void 0},null);return v("div",null,[Ke(Array.isArray(y)?p[0]:p)?ue(p,{class:"".concat(f.value,"-arrow")},!1):p])},E=function(c){e.activeKey===void 0&&(o.value=c);var d=e.accordion?c[0]:c;i("update:activeKey",d),i("change",d)},P=function(c){var d=o.value;if(e.accordion)d=d[0]===c?[]:[c];else{d=Me(d);var y=d.indexOf(c),p=y>-1;p?d.splice(y,1):d.push(c)}E(d)},q=function(c,d){var y,p,V;if(!Be(c)){var W=o.value,D=e.accordion,Y=e.destroyInactivePanel,F=e.collapsible,j=e.openAnimation,T=String((y=c.key)!==null&&y!==void 0?y:d),a=c.props||{},n=a.header,h=n===void 0?(p=c.children)===null||p===void 0||(V=p.header)===null||V===void 0?void 0:V.call(p):n,b=a.headerClass,I=a.collapsible,K=a.disabled,N=!1;D?N=W[0]===T:N=W.indexOf(T)>-1;var z=I??F;(K||K==="")&&(z="disabled");var oe={key:T,panelKey:T,header:h,headerClass:b,isActive:N,prefixCls:f.value,destroyInactivePanel:Y,openAnimation:j,accordion:D,onItemClick:z==="disabled"?null:P,expandIcon:k,collapsible:z};return ue(c,oe)}},w=function(){var c;return Ne((c=r.default)===null||c===void 0?void 0:c.call(r)).map(q)};return function(){var g,c=e.accordion,d=e.bordered,y=e.ghost,p=ne((g={},x(g,f.value,!0),x(g,"".concat(f.value,"-borderless"),!d),x(g,"".concat(f.value,"-icon-position-").concat(B.value),!0),x(g,"".concat(f.value,"-rtl"),O.value==="rtl"),x(g,"".concat(f.value,"-ghost"),!!y),x(g,l.class,!!l.class),g));return v("div",J(J({class:p},Oe(l)),{},{style:l.style,role:c?"tablist":null}),[w()])}}}),ha=ae({compatConfig:{MODE:3},name:"PanelContent",props:$e(),setup:function(e,t){var l=t.slots,r=R(!1);return Re(function(){(e.isActive||e.forceRender)&&(r.value=!0)}),function(){var i,o;if(!r.value)return null;var m=e.prefixCls,f=e.isActive,O=e.role;return v("div",{ref:R,class:ne("".concat(m,"-content"),(i={},x(i,"".concat(m,"-content-active"),f),x(i,"".concat(m,"-content-inactive"),!f),i)),role:O},[v("div",{class:"".concat(m,"-content-box")},[(o=l.default)===null||o===void 0?void 0:o.call(l)])])}}}),le=ae({compatConfig:{MODE:3},name:"ACollapsePanel",inheritAttrs:!1,props:_e($e(),{showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1}),slots:["expandIcon","extra","header"],setup:function(e,t){var l=t.slots,r=t.emit,i=t.attrs;De(e.disabled===void 0,"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var o=Ce("collapse",e),m=o.prefixCls,f=function(){r("itemClick",e.panelKey)},O=function(k){(k.key==="Enter"||k.keyCode===13||k.which===13)&&f()};return function(){var B,k,E,P,q=e.header,w=q===void 0?(B=l.header)===null||B===void 0?void 0:B.call(l):q,g=e.headerClass,c=e.isActive,d=e.showArrow,y=e.destroyInactivePanel,p=e.accordion,V=e.forceRender,W=e.openAnimation,D=e.expandIcon,Y=D===void 0?l.expandIcon:D,F=e.extra,j=F===void 0?(k=l.extra)===null||k===void 0?void 0:k.call(l):F,T=e.collapsible,a=T==="disabled",n=m.value,h=ne("".concat(n,"-header"),(E={},x(E,g,g),x(E,"".concat(n,"-header-collapsible-only"),T==="header"),E)),b=ne((P={},x(P,"".concat(n,"-item"),!0),x(P,"".concat(n,"-item-active"),c),x(P,"".concat(n,"-item-disabled"),a),x(P,"".concat(n,"-no-arrow"),!d),x(P,"".concat(i.class),!!i.class),P)),I=v("i",{class:"arrow"},null);d&&typeof Y=="function"&&(I=Y(e));var K=Fe(v(ha,{prefixCls:n,isActive:c,forceRender:V,role:p?"tabpanel":null},{default:l.default}),[[je,c]]),N=J({appear:!1,css:!1},W);return v("div",J(J({},i),{},{class:b}),[v("div",{class:h,onClick:function(){return T!=="header"&&f()},role:p?"tab":"button",tabindex:a?-1:0,"aria-expanded":c,onKeypress:O},[d&&I,T==="header"?v("span",{onClick:f,class:"".concat(n,"-header-text")},[w]):w,j&&v("div",{class:"".concat(n,"-extra")},[j])]),v(Ue,N,{default:function(){return[!y||c?K:null]}})])}}});ee.Panel=le;ee.install=function(s){return s.component(ee.name,ee),s.component(le.name,le),s};var ya={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};const _a=ya;function ye(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),l.forEach(function(r){ba(s,r,t[r])})}return s}function ba(s,e,t){return e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}var de=function(e,t){var l=ye({},e,t.attrs);return v(Le,ye({},l,{icon:_a}),null)};de.displayName="ArrowRightOutlined";de.inheritAttrs=!1;const Ca=de;function Aa(s,e,t,l){for(var r=-1,i=s==null?0:s.length;++r<i;){var o=s[r];e(l,o,t(o),s)}return l}function Ia(s){return function(e,t,l){for(var r=-1,i=Object(e),o=l(e),m=o.length;m--;){var f=o[s?m:++r];if(t(i[f],f,i)===!1)break}return e}}var $a=Ia();const xa=$a;function wa(s,e){return s&&xa(s,e,Ve)}function ka(s,e){return function(t,l){if(t==null)return t;if(!ze(t))return s(t,l);for(var r=t.length,i=e?r:-1,o=Object(t);(e?i--:++i<r)&&l(o[i],i,o)!==!1;);return t}}var Sa=ka(wa);const Pa=Sa;function Oa(s,e,t,l){return Pa(s,function(r,i,o){e(l,r,t(r),o)}),l}function Ta(s,e){return function(t,l){var r=Ge(t)?Aa:Oa,i=e?e():{};return r(t,s,Xe(l),i)}}var Na=Object.prototype,Ba=Na.hasOwnProperty,Ea=Ta(function(s,e,t){Ba.call(s,t)?s[t].push(e):qe(s,t,[e])});const Ka=Ea;const Ma={class:"tag-wrap"},Ra={class:"float-actions"},Da=["title"],Fa=ae({__name:"TagSearchItem",props:{tag:{},name:{},selected:{type:Boolean},idx:{}},emits:["remove","toggleAnd","toggleNot","toggleOr","click"],setup(s){const e=(t,l=!1)=>(l?`[${t.type}] `:"")+(t.display_name?`${t.display_name} : ${t.name}`:t.name);return(t,l)=>(_(),S("div",Ma,[A("div",Ra,[A("div",{onClick:l[0]||(l[0]=r=>t.$emit("toggleAnd"))},$(t.$t("exactMatch")),1),A("div",{onClick:l[1]||(l[1]=r=>t.$emit("toggleOr"))},$(t.$t("anyMatch")),1),A("div",{onClick:l[2]||(l[2]=r=>t.$emit("toggleNot"))},$(t.$t("exclude")),1)]),A("li",{class:Ae(["tag",{selected:t.selected}]),title:e(t.tag),onClick:l[4]||(l[4]=r=>t.$emit("click"))},[t.selected?(_(),Z(M(We),{key:0})):X("",!0),G(" "+$(e(t.tag))+" ",1),t.name==="custom"&&t.idx!==0?(_(),S("span",{key:1,class:"remove",onClickCapture:l[3]||(l[3]=ce(r=>t.$emit("remove"),["stop"]))},[v(M(Ye))],32)):X("",!0)],10,Da)]))}});const ja=Ie(Fa,[["__scopeId","data-v-7d7d9bbd"]]),Ua={class:"container"},La={class:"search-bar"},Va={class:"form-name"},za={class:"search-bar"},Ga={class:"form-name"},Xa={class:"search-bar"},qa={class:"form-name"},Wa={class:"search-bar"},Ya={class:"form-name"},Za={key:0,class:"generate-idx-hint"},Ha={class:"list-container"},Qa={key:0,class:"tag-list"},Ja=["onClick"],et={key:1},at={key:2,class:"spin-container"},tt=ae({__name:"TagSearch",props:{tabIdx:{},paneIdx:{},searchScope:{}},setup(s){const e=s,t=Ze(),l=He(),r=Q(()=>!l.isIdle),i=R(),o=R({and_tags:[],or_tags:[],not_tags:[],folder_paths_str:e.searchScope}),m=Q(()=>i.value?i.value.tags.slice().sort((a,n)=>n.count-a.count):[]),f=["custom","Source Identifier","Model","Media Type","lora","lyco","pos","size","Sampler","Postprocess upscaler","Postprocess upscale by"].reduce((a,n,h)=>(a[n]=h,a),{}),O=Q(()=>Object.entries(Ka(m.value,a=>a.type)).sort((a,n)=>{const h=f[a[0]]!==void 0?f[a[0]]:Number.MAX_SAFE_INTEGER,b=f[n[0]]!==void 0?f[n[0]]:Number.MAX_SAFE_INTEGER;return h-b})),B=Qe(new Map),k=a=>B.get(a)??512,E=R({}),P=R({});be(E,Je(a=>{P.value=ea(a)},300),{deep:!0});const q=aa(),w=R(O.value.map(a=>a[0]));ta(async()=>{console.log(new Date().toLocaleString()),i.value=await ve(),await na(20),console.log(new Date().toLocaleString()),w.value=O.value.map(a=>a[0]),la(()=>{console.log(new Date().toLocaleString())}),i.value.img_count&&i.value.expired&&await g(),e.searchScope&&c()}),pe("searchIndexExpired",()=>i.value&&(i.value.expired=!0));const g=oa(()=>l.pushAction(async()=>(await fa(),i.value=await ve(),w.value=O.value.map(a=>a[0]),i.value)).res),c=()=>{t.openTagSearchMatchedImageGridInRight(e.tabIdx,q,o.value)};pe("returnToIIB",async()=>{const a=await l.pushAction(sa).res;i.value.expired=a.expired});const d=(a,n=!1)=>(n?`[${a.type}] `:"")+(a.display_name?`${a.display_name} : ${a.name}`:a.name),y=R(!1),p=R(""),V=async()=>{var n,h,b;if(!p.value){y.value=!1;return}const a=await l.pushAction(()=>ra({tag_name:p.value})).res;a.type!=="custom"&&ge.error(re("existInOtherType")),(n=i.value)!=null&&n.tags.find(I=>I.id===a.id)?ge.error(re("alreadyExists")):((h=i.value)==null||h.tags.push(a),(b=t.conf)==null||b.all_custom_tags.push(a)),p.value="",y.value=!1},W=a=>{ca.confirm({title:re("confirmDelete"),async onOk(){var h,b,I,K;await da({tag_id:a});const n=((h=i.value)==null?void 0:h.tags.findIndex(N=>N.id===a))??-1;(b=i.value)==null||b.tags.splice(n,1),(K=t.conf)==null||K.all_custom_tags.splice((I=t.conf)==null?void 0:I.all_custom_tags.findIndex(N=>N.id===a),1)}})},D=Q(()=>new Set([o.value.and_tags,o.value.or_tags,o.value.not_tags].flat())),Y=a=>{D.value.has(a.id)?(o.value.and_tags=o.value.and_tags.filter(n=>n!==a.id),o.value.or_tags=o.value.or_tags.filter(n=>n!==a.id),o.value.not_tags=o.value.not_tags.filter(n=>n!==a.id)):o.value.and_tags.push(a.id)},F={value:a=>a.id,text:d,optionText:a=>d(a,!0)},j=(a,n)=>{const h=n.indexOf(a);h===-1?n.push(a):n.splice(h,1)},T=(a,n)=>{const h=k(n);let b=P.value[n];return b&&(b=b.trim(),a=a.filter(I=>d(I).toLowerCase().includes(b.toLowerCase()))),a.slice(0,h)};return(a,n)=>{const h=me,b=ua,I=va,K=me,N=pa,z=le,oe=ee,xe=ga;return _(),S("div",Ua,[X("",!0),i.value?(_(),S(H,{key:1},[A("div",null,[A("div",La,[A("div",Va,$(a.$t("exactMatch")),1),v(M(ie),{conv:F,mode:"multiple",style:{width:"100%"},options:m.value,value:o.value.and_tags,"onUpdate:value":n[0]||(n[0]=u=>o.value.and_tags=u),disabled:!m.value.length,placeholder:a.$t("selectExactMatchTag")},null,8,["options","value","disabled","placeholder"]),i.value.expired||!i.value.img_count?(_(),Z(h,{key:0,onClick:M(g),loading:!M(l).isIdle,type:"primary"},{default:U(()=>[G($(i.value.img_count===0?a.$t("generateIndexHint"):a.$t("UpdateIndex")),1)]),_:1},8,["onClick","loading"])):(_(),Z(h,{key:1,type:"primary",onClick:c,loading:!M(l).isIdle},{default:U(()=>[G($(a.$t("search")),1)]),_:1},8,["loading"]))]),A("div",za,[A("div",Ga,$(a.$t("anyMatch")),1),v(M(ie),{conv:F,mode:"multiple",style:{width:"100%"},options:m.value,value:o.value.or_tags,"onUpdate:value":n[1]||(n[1]=u=>o.value.or_tags=u),disabled:!m.value.length,placeholder:a.$t("selectAnyMatchTag")},null,8,["options","value","disabled","placeholder"])]),A("div",Xa,[A("div",qa,$(a.$t("exclude")),1),v(M(ie),{conv:F,mode:"multiple",style:{width:"100%"},options:m.value,value:o.value.not_tags,"onUpdate:value":n[2]||(n[2]=u=>o.value.not_tags=u),disabled:!m.value.length,placeholder:a.$t("selectExcludeTag")},null,8,["options","value","disabled","placeholder"])]),A("div",Wa,[A("div",Ya,$(a.$t("searchScope")),1),v(b,{"auto-size":{maxRows:8},value:o.value.folder_paths_str,"onUpdate:value":n[3]||(n[3]=u=>o.value.folder_paths_str=u),placeholder:a.$t("specifiedSearchFolder")},null,8,["value","placeholder"])])]),m.value.filter(u=>u.type!=="custom").length?X("",!0):(_(),S("p",Za,$(a.$t("needGenerateIdx")),1)),A("div",Ha,[(_(!0),S(H,null,fe(O.value,([u,se])=>(_(),S(H,{key:u},[u!=="Media Type"||se.length>1?(_(),S("ul",Qa,[A("h3",{class:"cat-name",onClick:C=>w.value.includes(u)?w.value.splice(w.value.indexOf(u),1):w.value.push(u)},[v(M(Ca),{class:Ae(["arrow",{down:w.value.includes(u)}])},null,8,["class"]),G(" "+$(a.$t(u))+" ",1),A("div",{onClick:n[4]||(n[4]=ce(()=>{},["stop","prevent"])),class:"filter-input"},[v(I,{value:E.value[u],"onUpdate:value":C=>E.value[u]=C,size:"small",allowClear:"",placeholder:a.$t("filterByKeyword")},null,8,["value","onUpdate:value","placeholder"])])],8,Ja),v(oe,{ghost:"",activeKey:w.value,"onUpdate:activeKey":n[7]||(n[7]=C=>w.value=C)},{expandIcon:U(()=>[]),default:U(()=>[(_(),Z(z,{key:u},{default:U(()=>[(_(!0),S(H,null,fe(T(se,u),(C,we)=>(_(),Z(ja,{onClick:te=>Y(C),onRemove:te=>W(C.id),onToggleAnd:te=>j(C.id,o.value.and_tags),onToggleOr:te=>j(C.id,o.value.or_tags),onToggleNot:te=>j(C.id,o.value.not_tags),key:C.id,idx:we,name:u,tag:C,selected:D.value.has(C.id)},null,8,["onClick","onRemove","onToggleAnd","onToggleOr","onToggleNot","idx","name","tag","selected"]))),128)),u==="custom"?(_(),S("li",{key:0,class:"tag",onClick:n[6]||(n[6]=C=>y.value=!0)},[y.value?(_(),Z(N,{key:0,compact:""},{default:U(()=>[v(I,{value:p.value,"onUpdate:value":n[5]||(n[5]=C=>p.value=C),style:{width:"128px"},loading:r.value,"allow-clear":"",size:"small"},null,8,["value","loading"]),v(K,{size:"small",type:"primary",onClickCapture:ce(V,["stop"]),loading:r.value},{default:U(()=>[G($(p.value?a.$t("submit"):a.$t("cancel")),1)]),_:1},8,["onClickCapture","loading"])]),_:1})):(_(),S(H,{key:1},[v(M(ia)),G(" "+$(a.$t("add")),1)],64))])):X("",!0),k(u)<se.length?(_(),S("div",et,[v(K,{block:"",onClick:C=>B.set(u,k(u)+512)},{default:U(()=>[G($(a.$t("loadmore")),1)]),_:2},1032,["onClick"])])):X("",!0)]),_:2},1024))]),_:2},1032,["activeKey"])])):X("",!0)],64))),128))])],64)):(_(),S("div",at,[v(xe,{size:"large"})]))])}}});const it=Ie(tt,[["__scopeId","data-v-aecca02e"]]);export{it as default};