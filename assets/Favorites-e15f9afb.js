import{u as n,j as s,e as l,s as o,L as v}from"./index-9d4f1248.js";import{c as d,a as p,b as g,C as b,u as k,d as C,e as F,B as N,F as $}from"./Filter-0cfab63e.js";import{P as c}from"./index-77f02436.js";const y=()=>{const e=n(d),a=n(p),r=g(e,a);return s.jsxs("div",{children:[!r.length&&{},s.jsx("ul",{children:r.map(t=>s.jsx(b,{car:t},t.id))})]})},u=({children:e,className:a})=>s.jsx("h2",{className:a?`${a}`:"title-card flex ",children:e});u.propTypes={children:c.node.isRequired,className:c.string};const f=({open:e})=>{const a=k(),r=n(d),t=n(p),h=C(r,"rentalCompany"),j=i=>{!t||t.rentalCompany!==null?a(l({rentalCompany:i})):t.make===i?a(l({...t,rentalCompany:""})):a(l({...t,rentalCompany:i}))},m=window.innerWidth>=768&&h.length<2||e;return s.jsx("ul",{children:h.map((i,x)=>s.jsxs("li",{className:`${!m&&x>0?"hidden":""}`,children:[s.jsx("input",{id:i,type:"radio",name:"make",value:i,checked:(t==null?void 0:t.rentalCompany)===i,className:"radio",onChange:()=>j(i)}),s.jsx("label",{htmlFor:i,children:i})]},x))})};f.propTypes={open:c.bool};const w=()=>{const{isOpen:e,toggle:a}=F(!1),r=n(d);return s.jsxs("aside",{children:[s.jsxs("div",{className:`${e?"sidebar-open":"sidebar-close"} sidebar relative`,children:[s.jsx(N,{iconURL:"#icon-arrow",type:"button",className:"sidebar-btn",svgClass:`${!e&&"ease-in-out"} transition`,onClick:a}),s.jsx("div",{className:"flex flex-col items-center gap-x-4",children:r.length>0&&s.jsx(u,{className:`gradient ${!e&&"hidden"} ${e&&"scale-[1]"}`,children:"Company"})}),s.jsx(f,{open:e}),s.jsx("div",{className:` ${e?"":"hidden"}`,children:s.jsx($,{cars:r})})]}),s.jsx(y,{})]})},T=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,L=o.div`
  text-align: center;
`;o.h1`
  color: var(--title-color);
`;o(v)`
  padding: 8px 16px;
  color: #ffffff;

  transition:
    color 0.3s,
    text-shadow 0.3s;
  display: block;
  &:hover,
  &:focus {
    color: var(--accent-hover);
  }
`;const B=()=>s.jsx(T,{children:s.jsx(L,{children:s.jsx(w,{})})});export{B as default};
