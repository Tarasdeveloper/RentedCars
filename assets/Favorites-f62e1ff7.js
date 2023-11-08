import{s as d,u as n,j as s,e as o}from"./index-08bd9280.js";import{d as c,a as p,b as m,C as g,u as f,e as v,g as F,F as C,c as b}from"./CarItem-d013e26a.js";import{P as l}from"./index-687b7502.js";const k=d.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 50px;
  margin-bottom: 100px;
  align-items: center;
  /* justify-content: center; */
`,y=()=>{const r=n(c),i=n(p),e=m(r,i);return s.jsxs("div",{children:[!e.length&&"Not Found",s.jsx(k,{children:e.map(a=>s.jsx(g,{car:a},a.id))})]})},x=({children:r})=>s.jsx("h2",{children:r});x.propTypes={children:l.node.isRequired,className:l.string};const T=d.ul`
  display: flex;
`,u=()=>{const r=f(),i=n(c),e=n(p),a=v(i,"rentalCompany"),h=t=>{!e||e.rentalCompany!==null?r(o({rentalCompany:t})):e.make===t?r(o({...e,rentalCompany:""})):r(o({...e,rentalCompany:t}))};return s.jsx(T,{children:a.map((t,j)=>s.jsxs("li",{children:[s.jsx("input",{id:t,type:"radio",name:"make",value:t,checked:(e==null?void 0:e.rentalCompany)===t,onChange:()=>h(t)}),s.jsx("label",{htmlFor:t,children:t})]},j))})};u.propTypes={open:l.bool};const P=()=>{const{isOpen:r,toggle:i}=F(!1),e=n(c);return s.jsxs("aside",{children:[s.jsxs("div",{children:[s.jsx("button",{type:"button",onClick:i,children:"svg"}),s.jsx("div",{children:e.length>0&&s.jsx(x,{children:"Company"})}),s.jsx(u,{open:r}),s.jsx("div",{children:s.jsx(C,{cars:e})})]}),s.jsx(y,{})]})},L=()=>s.jsx(s.Fragment,{children:s.jsx(b,{children:s.jsx(P,{})})});export{L as default};
