import{d as v,cL as C,bZ as I,O as l,Q as _,R as f,c,Z as r,S as h,T as d,$ as e,Y as F,aa as z,cc as B,cM as $,ag as x,W as R}from"./index-1961a2a7.js";import{u as S,a as E,k as T,F as V,d as A}from"./FileItem-97e3c353.js";import"./functionalCallableComp-0536b145.js";import"./index-8dbf40be.js";/* empty css              */const L={class:"actions-panel actions"},N={key:0,class:"file-list"},U={class:"hint"},H=v({__name:"batchDownload",props:{tabIdx:{},paneIdx:{},id:{}},setup(O){const{stackViewEl:w}=S().toRefs(),{itemSize:p,gridItems:k,cellWidth:b}=E(),i=T(),{selectdFiles:n}=C(i),u=I(),y=async t=>{const s=B(t);s&&i.addFiles(s.nodes)},D=async()=>{u.pushAction(async()=>{const t=await $.value.post("/zip",{paths:n.value.map(o=>o.fullpath)},{responseType:"blob"}),s=window.URL.createObjectURL(new Blob([t.data])),a=document.createElement("a");a.href=s,a.setAttribute("download",`iib_${new Date().toLocaleString()}.zip`),document.body.appendChild(a),a.click()})},g=t=>{n.value.splice(t,1)};return(t,s)=>{const a=x;return l(),_("div",{class:"container",ref_key:"stackViewEl",ref:w,onDrop:y},[f("div",L,[c(a,{onClick:s[0]||(s[0]=o=>e(i).selectdFiles=[])},{default:r(()=>[h(d(t.$t("clear")),1)]),_:1}),c(a,{onClick:D,type:"primary",loading:!e(u).isIdle},{default:r(()=>[h(d(t.$t("zipDownload")),1)]),_:1},8,["loading"])]),e(n).length?(l(),F(e(A),{key:1,ref:"scroller",class:"file-list",items:e(n).slice(),"item-size":e(p).first,"key-field":"fullpath","item-secondary-size":e(p).second,gridItems:e(k)},{default:r(({item:o,index:m})=>[c(V,{idx:m,file:o,"cell-width":e(b),"enable-close-icon":"",onCloseIconClick:Q=>g(m),"full-screen-preview-image-url":e(z)(o),"enable-right-click-menu":!1},null,8,["idx","file","cell-width","onCloseIconClick","full-screen-preview-image-url"])]),_:1},8,["items","item-size","item-secondary-size","gridItems"])):(l(),_("div",N,[f("p",U,d(t.$t("batchDownloaDDragAndDropHint")),1)]))],544)}}});const Y=R(H,[["__scopeId","data-v-aab31da2"]]);export{Y as default};