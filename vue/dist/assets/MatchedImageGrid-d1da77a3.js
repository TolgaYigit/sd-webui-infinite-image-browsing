import{d as ne,m as R,aA as ae,a2 as ie,V as u,W as _,c as s,a5 as e,a4 as o,a7 as V,X as r,J as re,Z as i,Y as m,a3 as D,ag as de,a0 as k,ah as z,aj as ce,R as ue,al as B,aO as pe,aP as me,bE as ge,a1 as fe}from"./index-58aa78ac.js";import{S as ve}from"./index-57d8488e.js";import{L as Ie,R as _e,f as ke,M as he}from"./MultiSelectKeep-1837de31.js";import{c as Ce,d as we,F as Se}from"./FileItem-6f2c42a7.js";import{c as be,u as xe}from"./hook-862e57e6.js";import{a as ye}from"./functionalCallableComp-6dc127fa.js";import"./shortcut-e8cace8d.js";import"./Checkbox-f03883ba.js";/* empty css              */import"./index-a5a392f6.js";const Me=d=>(pe("data-v-fbf8262b"),d=d(),me(),d),Ae={class:"hint"},Te={class:"action-bar"},$e=Me(()=>r("div",{style:{padding:"16px 0 512px"}},null,-1)),Fe={key:1},Re={class:"no-res-hint"},Ve={class:"hint"},De={key:2,class:"preview-switch"},ze=ne({__name:"MatchedImageGrid",props:{tabIdx:{},paneIdx:{},selectedTagIds:{},id:{}},setup(d){const g=d,f=be(t=>ge(g.selectedTagIds,t)),{queue:G,images:a,onContextMenuClickU:h,stackViewEl:E,previewIdx:c,previewing:C,onPreviewVisibleChange:J,previewImgMove:w,canPreview:S,itemSize:b,gridItems:N,showGenInfo:p,imageGenInfo:x,q:P,multiSelectedIdxs:v,onFileItemClick:U,scroller:y,showMenuIdx:I,onFileDragStart:L,onFileDragEnd:O,cellWidth:K,onScroll:M,saveAllFileAsJson:q,props:W,saveLoadedFileAsJson:j}=xe(f);R(()=>g.selectedTagIds,async()=>{var t;await f.reset(),await ae(),(t=y.value)==null||t.scrollToItem(0),M()},{immediate:!0}),R(()=>g,async t=>{W.value=t},{deep:!0,immediate:!0});const Q=ie(),{onClearAllSelected:X,onSelectAll:Y,onReverseSelect:Z}=Ce();return(t,l)=>{const H=he,ee=ce,te=ue,A=B,le=B,se=ve;return u(),_("div",{class:"container",ref_key:"stackViewEl",ref:E},[s(H,{show:!!e(v).length||e(Q).keepMultiSelect,onClearAllSelected:e(X),onSelectAll:e(Y),onReverseSelect:e(Z)},null,8,["show","onClearAllSelected","onSelectAll","onReverseSelect"]),s(se,{size:"large",spinning:!e(G).isIdle},{default:o(()=>{var T,$;return[s(te,{visible:e(p),"onUpdate:visible":l[1]||(l[1]=n=>V(p)?p.value=n:null),width:"70vw","mask-closable":"",onOk:l[2]||(l[2]=n=>p.value=!1)},{cancelText:o(()=>[]),default:o(()=>[s(ee,{active:"",loading:!e(P).isIdle},{default:o(()=>[r("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:l[0]||(l[0]=n=>e(re)(e(x)))},[r("div",Ae,i(t.$t("doubleClickToCopy")),1),m(" "+i(e(x)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),r("div",Te,[s(A,{onClick:e(j)},{default:o(()=>[m(i(t.$t("saveLoadedImageAsJson")),1)]),_:1},8,["onClick"]),s(A,{onClick:e(q)},{default:o(()=>[m(i(t.$t("saveAllAsJson")),1)]),_:1},8,["onClick"])]),(T=e(a))!=null&&T.length?(u(),D(e(we),{key:0,ref_key:"scroller",ref:y,class:"file-list",items:e(a),"item-size":e(b).first,"key-field":"fullpath","item-secondary-size":e(b).second,gridItems:e(N),onScroll:e(M)},{after:o(()=>[$e]),default:o(({item:n,index:F})=>[s(Se,{idx:F,file:n,"cell-width":e(K),"show-menu-idx":e(I),"onUpdate:showMenuIdx":l[3]||(l[3]=oe=>V(I)?I.value=oe:null),onDragstart:e(L),onDragend:e(O),onFileItemClick:e(U),"full-screen-preview-image-url":e(a)[e(c)]?e(de)(e(a)[e(c)]):"",selected:e(v).includes(F),onContextMenuClick:e(h),onPreviewVisibleChange:e(J),"is-selected-mutil-files":e(v).length>1},null,8,["idx","file","cell-width","show-menu-idx","onDragstart","onDragend","onFileItemClick","full-screen-preview-image-url","selected","onContextMenuClick","onPreviewVisibleChange","is-selected-mutil-files"])]),_:1},8,["items","item-size","item-secondary-size","gridItems","onScroll"])):e(f).load&&t.selectedTagIds.and_tags.length===1&&!(($=t.selectedTagIds.folder_paths_str)!=null&&$.trim())?(u(),_("div",Fe,[r("div",Re,[r("p",Ve,i(t.$t("tagSearchNoResultsMessage")),1),s(le,{onClick:l[4]||(l[4]=n=>e(ye)()),type:"primary"},{default:o(()=>[m(i(t.$t("rebuildImageIndex")),1)]),_:1})])])):k("",!0),e(C)?(u(),_("div",De,[s(e(Ie),{onClick:l[5]||(l[5]=n=>e(w)("prev")),class:z({disable:!e(S)("prev")})},null,8,["class"]),s(e(_e),{onClick:l[6]||(l[6]=n=>e(w)("next")),class:z({disable:!e(S)("next")})},null,8,["class"])])):k("",!0)]}),_:1},8,["spinning"]),e(C)&&e(a)&&e(a)[e(c)]?(u(),D(ke,{key:0,file:e(a)[e(c)],idx:e(c),onContextMenuClick:e(h)},null,8,["file","idx","onContextMenuClick"])):k("",!0)],512)}}});const qe=fe(ze,[["__scopeId","data-v-fbf8262b"]]);export{qe as default};
