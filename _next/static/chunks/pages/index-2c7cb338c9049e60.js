(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(85)}])},85:function(e,n,i){"use strict";i.r(n);var r=i(5893),t=i(7294),_=i(2729),o=i.n(_);let d=[[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0]],a=()=>{let[e,n]=(0,t.useState)([[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,0],[1,2,2,2,2,2,1,0],[1,2,2,2,2,2,1,0],[1,2,2,0,2,2,1,0],[1,2,2,2,2,2,1,0],[1,2,2,2,2,2,1,0],[1,1,1,1,1,1,1,0]]),[i,_]=(0,t.useState)(1),a=JSON.parse(JSON.stringify(e)),c=(r,t)=>{if(0===e[t][r])for(let o of d)for(let d=1;d<=7&&void 0!==e[t+d*o[0]]&&void 0!==e[t+d*o[0]][r+d*o[1]];d++){if(e[t+d*o[0]][r+d*o[1]]===i){if(d>1){for(let e=d;e>=0;e-=1)a[t+e*o[0]][r+e*o[1]]=i;n(a),_(3-i)}break}if(e[t+d*o[0]][r+d*o[1]]===3-i)continue;else if(0===e[t+d*o[0]][r+d*o[1]])break;else console.log("error")}};return(0,r.jsxs)("div",{className:o().container,children:[(0,r.jsx)(r.Fragment,{children:e.flat().filter(e=>1===e).length}),(0,r.jsx)(r.Fragment,{children:e.flat().filter(e=>2===e).length}),(0,r.jsx)(r.Fragment,{children:["","black turn","white turn"][i]}),(0,r.jsx)("div",{className:o().board,children:e.map((e,n)=>e.map((e,i)=>(0,r.jsx)("div",{className:o().boarder,onClick:()=>c(i,n),children:0!==e&&(0,r.jsx)("div",{className:o().disk,style:{backgroundColor:1===e?"#000":"#fff"}})},"".concat(n,"-").concat(i))))})]})};n.default=a},2729:function(e){e.exports={container:"index_container__gnN1f",board:"index_board__2d6xe",boarder:"index_boarder__q7QDR",disk:"index_disk__y_WBN",main:"index_main__kAcUb",footer:"index_footer__qq_p6",title:"index_title__gEapU",description:"index_description__087sm",code:"index_code__VeCgy",grid:"index_grid__FmmIe",card:"index_card__kAxi6",logo:"index_logo__FcDOZ"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);