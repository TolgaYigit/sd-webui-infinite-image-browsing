import{d as xe,r as k,o as Ce,bP as W,m as Ie,B as Re,aA as $e,y as Ae,z as Me,C as Q,bQ as ze,a2 as Fe,V as c,W as I,c as t,a4 as s,a5 as e,X as u,Y as i,Z as o,a3 as m,a0 as v,a6 as X,bW as Be,ah as B,a7 as j,J as De,ag as Ue,$ as Ve,R as Y,ak as Ee,al as Z,bT as Te,aj as He,aO as Ke,aP as Pe,bX as Je,bV as Le,a1 as Oe}from"./index-58aa78ac.js";import{S as qe}from"./index-57d8488e.js";/* empty css              */import"./index-f0ca4af8.js";import{c as Ge,d as Ne,F as We}from"./FileItem-6f2c42a7.js";import{M as Qe,L as Xe,R as je,f as Ye}from"./MultiSelectKeep-1837de31.js";import{c as Ze,u as es}from"./hook-862e57e6.js";import{f as R,H as ee,_ as ss,a as ts}from"./searchHistory-46cc14f4.js";import"./functionalCallableComp-6dc127fa.js";/* empty css              */import"./index-a5a392f6.js";import"./shortcut-e8cace8d.js";import"./Checkbox-f03883ba.js";const ls="/infinite_image_browsing/fe-static/assets/regex-a447f877.svg",D=b=>(Ke("data-v-9cf612bf"),b=b(),Pe(),b),as={style:{"padding-right":"16px"}},ns=D(()=>u("div",null,null,-1)),os=["src"],is={class:"search-bar"},rs={class:"form-name"},us={class:"search-bar last actions"},ds={class:"hint"},cs={key:0,style:{margin:"64px 16px 32px",padding:"8px",background:"var(--zp-secondary-variant-background)","border-radius":"16px"}},ps={style:{margin:"16px 32px 16px"}},vs={style:{"padding-right":"16px"}},fs=D(()=>u("div",null,null,-1)),ms=D(()=>u("div",{style:{padding:"16px 0 512px"}},null,-1)),_s={key:2,class:"preview-switch"},gs=xe({__name:"SubstrSearch",props:{tabIdx:{},paneIdx:{},searchScope:{}},setup(b){const $=b,_=k(!1),g=k(""),h=k($.searchScope??""),w=k(!1),U=k(0),A=Ze(l=>{const a={cursor:l,regexp:_.value?g.value:"",surstr:_.value?"":g.value,folder_paths:(h.value??"").split(/,|\n/).map(r=>r.trim()).filter(r=>r)};return Je(a)}),{queue:y,images:p,onContextMenuClickU:V,stackViewEl:se,previewIdx:S,previewing:E,onPreviewVisibleChange:te,previewImgMove:T,canPreview:H,itemSize:K,gridItems:le,showGenInfo:x,imageGenInfo:P,q:ae,multiSelectedIdxs:M,onFileItemClick:ne,scroller:J,showMenuIdx:z,onFileDragStart:oe,onFileDragEnd:ie,cellWidth:re,onScroll:L,saveAllFileAsJson:ue,saveLoadedFileAsJson:de,props:ce}=es(A),d=k();Ce(async()=>{d.value=await W(),d.value.img_count&&d.value.expired&&await O(),$.searchScope&&await C()}),Ie(()=>$,async l=>{ce.value=l},{deep:!0,immediate:!0});const O=Re(()=>y.pushAction(async()=>(await Le(),d.value=await W(),d.value)).res),q=l=>{g.value=l.substr,h.value=l.folder_paths_str,_.value=l.isRegex,w.value=!1,C()},C=async()=>{U.value++,R.value.add({substr:g.value,folder_paths_str:h.value,isRegex:_.value}),await A.reset({refetch:!0}),await $e(),L(),J.value.scrollToItem(0),p.value.length||Ae.info(Me("fuzzy-search-noResults"))};Q("returnToIIB",async()=>{const l=await y.pushAction(ze).res;d.value.expired=l.expired}),Q("searchIndexExpired",()=>d.value&&(d.value.expired=!0));const pe=()=>{_.value=!_.value},ve=Fe(),{onClearAllSelected:fe,onSelectAll:me,onReverseSelect:_e}=Ge();return(l,a)=>{const r=ss,f=ts,ge=Y,he=Ee,G=Z,ye=Te,F=Z,ke=He,be=Y,we=qe;return c(),I(Ve,null,[t(ge,{visible:w.value,"onUpdate:visible":a[0]||(a[0]=n=>w.value=n),width:"70vw","mask-closable":"",onOk:a[1]||(a[1]=n=>w.value=!1)},{default:s(()=>[t(ee,{records:e(R),onReuseRecord:q},{default:s(({record:n})=>[u("div",as,[t(f,null,{default:s(()=>[t(r,{span:4},{default:s(()=>[i(o(l.$t("historyRecordsSubstr"))+":",1)]),_:1}),t(r,{span:20},{default:s(()=>[i(o(n.substr),1)]),_:2},1024)]),_:2},1024),n.folder_paths_str?(c(),m(f,{key:0},{default:s(()=>[t(r,{span:4},{default:s(()=>[i(o(l.$t("searchScope"))+":",1)]),_:1}),t(r,{span:20},{default:s(()=>[i(o(n.folder_paths_str),1)]),_:2},1024)]),_:2},1024)):v("",!0),t(f,null,{default:s(()=>[t(r,{span:4},{default:s(()=>[i(o(l.$t("historyRecordsisRegex"))+":",1)]),_:1}),t(r,{span:20},{default:s(()=>[i(o(n.isRegex),1)]),_:2},1024)]),_:2},1024),t(f,null,{default:s(()=>[t(r,{span:4},{default:s(()=>[i(o(l.$t("time"))+":",1)]),_:1}),t(r,{span:20},{default:s(()=>[i(o(n.time),1)]),_:2},1024)]),_:2},1024),ns])]),_:1},8,["records"])]),_:1},8,["visible"]),u("div",{class:"container",ref_key:"stackViewEl",ref:se},[t(Qe,{show:!!e(M).length||e(ve).keepMultiSelect,onClearAllSelected:e(fe),onSelectAll:e(me),onReverseSelect:e(_e)},null,8,["show","onClearAllSelected","onSelectAll","onReverseSelect"]),d.value?(c(),I("div",{key:0,class:"search-bar",onKeydown:a[4]||(a[4]=X(()=>{},["stop"]))},[t(he,{value:g.value,"onUpdate:value":a[2]||(a[2]=n=>g.value=n),placeholder:l.$t("fuzzy-search-placeholder")+" "+l.$t("regexSearchEnabledHint"),disabled:!e(y).isIdle,onKeydown:Be(C,["enter"]),"allow-clear":""},null,8,["value","placeholder","disabled","onKeydown"]),u("div",{class:B(["regex-icon",{selected:_.value}]),onKeydown:a[3]||(a[3]=X(()=>{},["stop"])),onClick:pe,title:"Use Regular Expression"},[u("img",{src:e(ls)},null,8,os)],34),d.value.expired||!d.value.img_count?(c(),m(G,{key:0,onClick:e(O),loading:!e(y).isIdle,type:"primary"},{default:s(()=>[i(o(d.value.img_count===0?l.$t("generateIndexHint"):l.$t("UpdateIndex")),1)]),_:1},8,["onClick","loading"])):(c(),m(G,{key:1,type:"primary",onClick:C,loading:!e(y).isIdle||e(A).loading,disabled:!g.value&&!h.value},{default:s(()=>[i(o(l.$t("search")),1)]),_:1},8,["loading","disabled"]))],32)):v("",!0),u("div",is,[u("div",rs,o(l.$t("searchScope")),1),t(ye,{"auto-size":{maxRows:8},value:h.value,"onUpdate:value":a[5]||(a[5]=n=>h.value=n),placeholder:l.$t("specifiedSearchFolder")},null,8,["value","placeholder"])]),u("div",us,[e(p).length?(c(),m(F,{key:0,onClick:e(de)},{default:s(()=>[i(o(l.$t("saveLoadedImageAsJson")),1)]),_:1},8,["onClick"])):v("",!0),e(p).length?(c(),m(F,{key:1,onClick:e(ue)},{default:s(()=>[i(o(l.$t("saveAllAsJson")),1)]),_:1},8,["onClick"])):v("",!0),t(F,{onClick:a[6]||(a[6]=n=>w.value=!0)},{default:s(()=>[i(o(l.$t("history")),1)]),_:1})]),t(we,{size:"large",spinning:!e(y).isIdle},{default:s(()=>[t(be,{visible:e(x),"onUpdate:visible":a[8]||(a[8]=n=>j(x)?x.value=n:null),width:"70vw","mask-closable":"",onOk:a[9]||(a[9]=n=>x.value=!1)},{cancelText:s(()=>[]),default:s(()=>[t(ke,{active:"",loading:!e(ae).isIdle},{default:s(()=>[u("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:a[7]||(a[7]=n=>e(De)(e(P)))},[u("div",ds,o(l.$t("doubleClickToCopy")),1),i(" "+o(e(P)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),U.value===0&&!e(p).length&&e(R).getRecords().length?(c(),I("div",cs,[u("h2",ps,o(l.$t("restoreFromHistory")),1),t(ee,{records:e(R),onReuseRecord:q},{default:s(({record:n})=>[u("div",vs,[t(f,null,{default:s(()=>[t(r,{span:4},{default:s(()=>[i(o(l.$t("historyRecordsSubstr"))+":",1)]),_:1}),t(r,{span:20},{default:s(()=>[i(o(n.substr),1)]),_:2},1024)]),_:2},1024),n.folder_paths_str?(c(),m(f,{key:0},{default:s(()=>[t(r,{span:4},{default:s(()=>[i(o(l.$t("searchScope"))+":",1)]),_:1}),t(r,{span:20},{default:s(()=>[i(o(n.folder_paths_str),1)]),_:2},1024)]),_:2},1024)):v("",!0),t(f,null,{default:s(()=>[t(r,{span:4},{default:s(()=>[i(o(l.$t("historyRecordsisRegex"))+":",1)]),_:1}),t(r,{span:20},{default:s(()=>[i(o(n.isRegex),1)]),_:2},1024)]),_:2},1024),t(f,null,{default:s(()=>[t(r,{span:4},{default:s(()=>[i(o(l.$t("time"))+":",1)]),_:1}),t(r,{span:20},{default:s(()=>[i(o(n.time),1)]),_:2},1024)]),_:2},1024),fs])]),_:1},8,["records"])])):v("",!0),e(p)?(c(),m(e(Ne),{key:1,ref_key:"scroller",ref:J,class:"file-list",items:e(p),"item-size":e(K).first,"key-field":"fullpath","item-secondary-size":e(K).second,gridItems:e(le),onScroll:e(L)},{after:s(()=>[ms]),default:s(({item:n,index:N})=>[t(We,{idx:N,file:n,"show-menu-idx":e(z),"onUpdate:showMenuIdx":a[10]||(a[10]=Se=>j(z)?z.value=Se:null),onFileItemClick:e(ne),"full-screen-preview-image-url":e(p)[e(S)]?e(Ue)(e(p)[e(S)]):"","cell-width":e(re),selected:e(M).includes(N),onContextMenuClick:e(V),onDragstart:e(oe),onDragend:e(ie),"is-selected-mutil-files":e(M).length>1,onPreviewVisibleChange:e(te)},null,8,["idx","file","show-menu-idx","onFileItemClick","full-screen-preview-image-url","cell-width","selected","onContextMenuClick","onDragstart","onDragend","is-selected-mutil-files","onPreviewVisibleChange"])]),_:1},8,["items","item-size","item-secondary-size","gridItems","onScroll"])):v("",!0),e(E)?(c(),I("div",_s,[t(e(Xe),{onClick:a[11]||(a[11]=n=>e(T)("prev")),class:B({disable:!e(H)("prev")})},null,8,["class"]),t(e(je),{onClick:a[12]||(a[12]=n=>e(T)("next")),class:B({disable:!e(H)("next")})},null,8,["class"])])):v("",!0)]),_:1},8,["spinning"]),e(E)&&e(p)&&e(p)[e(S)]?(c(),m(Ye,{key:1,file:e(p)[e(S)],idx:e(S),onContextMenuClick:e(V)},null,8,["file","idx","onContextMenuClick"])):v("",!0)],512)],64)}}});const zs=Oe(gs,[["__scopeId","data-v-9cf612bf"]]);export{zs as default};
