import{d as X,l as j,ax as H,o as r,y as g,c as l,n as o,r as e,s as S,p as c,t as J,v as m,x as T,m as V,L as K,C as v,N as $,Q as Y,R as Z,V as ee,X as te}from"./index-9d31071c.js";import{L as se,R as ie,f as ne,S as le}from"./fullScreenContextMenu-dbf2a274.js";import{g as oe,F as ae}from"./FileItem-135851bf.js";import{g as re}from"./db-7a9551b2.js";import{c as de,u as ce}from"./hook-816605c2.js";import{o as me}from"./functionalCallableComp-c955107a.js";const ue={class:"hint"},pe={key:1},ge={class:"no-res-hint"},ve={class:"hint"},fe={key:2,class:"preview-switch"},Ie=X({__name:"MatchedImageGrid",props:{tabIdx:{},paneIdx:{},selectedTagIds:{},id:{}},setup(D){const f=D,u=de(s=>re(f.selectedTagIds,s)),{queue:F,images:n,onContextMenuClickU:I,stackViewEl:z,previewIdx:a,previewing:k,onPreviewVisibleChange:B,previewImgMove:w,canPreview:C,itemSize:x,gridItems:R,showGenInfo:d,imageGenInfo:_,q:N,multiSelectedIdxs:G,onFileItemClick:A,scroller:h,showMenuIdx:p,onFileDragStart:E,onFileDragEnd:P,cellWidth:U,onScroll:y}=ce(u);return j(()=>f.selectedTagIds,async()=>{var s;await u.reset(),await H(),(s=h.value)==null||s.scrollToItem(0),y()},{immediate:!0}),(s,t)=>{const L=Y,O=Z,q=ee,Q=le;return r(),g("div",{class:"container",ref_key:"stackViewEl",ref:z},[l(Q,{size:"large",spinning:!e(F).isIdle},{default:o(()=>{var b;return[l(O,{visible:e(d),"onUpdate:visible":t[1]||(t[1]=i=>S(d)?d.value=i:null),width:"70vw","mask-closable":"",onOk:t[2]||(t[2]=i=>d.value=!1)},{cancelText:o(()=>[]),default:o(()=>[l(L,{active:"",loading:!e(N).isIdle},{default:o(()=>[c("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:t[0]||(t[0]=i=>e(J)(e(_)))},[c("div",ue,m(s.$t("doubleClickToCopy")),1),T(" "+m(e(_)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),(b=e(n))!=null&&b.length?(r(),V(e(oe),{key:0,ref_key:"scroller",ref:h,class:"file-list",items:e(n),"item-size":e(x).first,"key-field":"fullpath","item-secondary-size":e(x).second,gridItems:e(R),onScroll:e(y)},{default:o(({item:i,index:M})=>[l(ae,{idx:M,file:i,"cell-width":e(U),"show-menu-idx":e(p),"onUpdate:showMenuIdx":t[3]||(t[3]=W=>S(p)?p.value=W:null),onDragstart:e(E),onDragend:e(P),onFileItemClick:e(A),"full-screen-preview-image-url":e(n)[e(a)]?e(K)(e(n)[e(a)]):"",selected:e(G).includes(M),onContextMenuClick:e(I),onPreviewVisibleChange:e(B)},null,8,["idx","file","cell-width","show-menu-idx","onDragstart","onDragend","onFileItemClick","full-screen-preview-image-url","selected","onContextMenuClick","onPreviewVisibleChange"])]),_:1},8,["items","item-size","item-secondary-size","gridItems","onScroll"])):e(u).load&&s.selectedTagIds.and_tags.length===1?(r(),g("div",pe,[c("div",ge,[c("p",ve,m(s.$t("tagSearchNoResultsMessage")),1),l(q,{onClick:t[4]||(t[4]=i=>e(me)()),type:"primary"},{default:o(()=>[T(m(s.$t("rebuildImageIndex")),1)]),_:1})])])):v("",!0),e(k)?(r(),g("div",fe,[l(e(se),{onClick:t[5]||(t[5]=i=>e(w)("prev")),class:$({disable:!e(C)("prev")})},null,8,["class"]),l(e(ie),{onClick:t[6]||(t[6]=i=>e(w)("next")),class:$({disable:!e(C)("next")})},null,8,["class"])])):v("",!0)]}),_:1},8,["spinning"]),e(k)&&e(n)&&e(n)[e(a)]?(r(),V(ne,{key:0,file:e(n)[e(a)],idx:e(a),onContextMenuClick:e(I)},null,8,["file","idx","onContextMenuClick"])):v("",!0)],512)}}});const ye=te(Ie,[["__scopeId","data-v-e67ecd35"]]);export{ye as default};