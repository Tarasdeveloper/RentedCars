import{s as h,u as a,j as s,e as o}from"./index-c737ad88.js";import{d as c,a as u,b as f,C as v,u as F,e as C,g as b,F as k,c as w}from"./CarItem-25b78f56.js";import{P as l}from"./index-c06ae1d4.js";const y=h.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 50px;
  margin-bottom: 100px;
  align-items: center;
  /* justify-content: center; */
`,T=()=>{const i=a(c),n=a(u),r=f(i,n);return s.jsxs("div",{children:[!r.length&&"Not Found",s.jsx(y,{children:r.map(e=>s.jsx(v,{car:e},e.id))})]})},x=({children:i})=>s.jsx("h2",{children:i});x.propTypes={children:l.node.isRequired,className:l.string};const N=h.ul`
  display: flex;
`,j=({open:i})=>{const n=F(),r=a(c),e=a(u),d=C(r,"rentalCompany"),m=t=>{!e||e.rentalCompany!==null?n(o({rentalCompany:t})):e.make===t?n(o({...e,rentalCompany:""})):n(o({...e,rentalCompany:t}))},g=window.innerWidth>=768&&d.length<2||i;return s.jsx(N,{children:d.map((t,p)=>s.jsxs("li",{className:`${!g&&p>0?"hidden":""}`,children:[s.jsx("input",{id:t,type:"radio",name:"make",value:t,checked:(e==null?void 0:e.rentalCompany)===t,className:"radio",onChange:()=>m(t)}),s.jsx("label",{htmlFor:t,children:t})]},p))})};j.propTypes={open:l.bool};const P=()=>{const{isOpen:i,toggle:n}=b(!1),r=a(c);return s.jsxs("aside",{children:[s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:n,children:"svg"}),s.jsx("div",{children:r.length>0&&s.jsx(x,{children:"Company"})}),s.jsx(j,{open:i}),s.jsx("div",{children:s.jsx(k,{cars:r})})]}),s.jsx(T,{})]})},M=()=>s.jsx(s.Fragment,{children:s.jsx(w,{children:s.jsx(P,{})})});export{M as default};
