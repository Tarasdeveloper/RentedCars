import{s as r,u as o,j as e,e as l}from"./index-684674ba.js";import{c as d,a as p,b as m,C as j,u as f,d as v,e as F,F as b}from"./CarItem-915db030.js";import{P as c}from"./index-cd938c7b.js";const w=r.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 50px;
  margin-bottom: 100px;
  align-items: center;
`,C=r.p`
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  padding-top: 50px;
`,k=()=>{const i=o(d),n=o(p),s=m(i,n);return e.jsxs("div",{children:[!s.length&&e.jsx(C,{children:"List is empty"}),e.jsx(w,{children:s.map(a=>e.jsx(j,{car:a},a.id))})]})},x=({children:i})=>e.jsx("h2",{children:i});x.propTypes={children:c.node.isRequired,className:c.string};const y=r.ul`
  display: flex;
  gap: 20px;
  max-width: 1220px;
  margin: 0 auto;
`,h=()=>{const i=f(),n=o(d),s=o(p),a=v(n,"rentalCompany"),u=t=>{!s||s.rentalCompany!==null?i(l({rentalCompany:t})):s.make===t?i(l({...s,rentalCompany:""})):i(l({...s,rentalCompany:t}))};return e.jsx(y,{children:a.map((t,g)=>e.jsxs("li",{children:[e.jsx("input",{id:t,type:"radio",name:"make",value:t,checked:(s==null?void 0:s.rentalCompany)===t,onChange:()=>u(t)}),e.jsx("label",{htmlFor:t,children:t})]},g))})};h.propTypes={open:c.bool};const T=r.aside`
  padding: 30px 15px 0;
  & h2 {
    text-align: center;
    margin-bottom: 30px;
  }
`,L=r.div`
  position: relative;
`,P=r.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 20px;
  line-height: 1;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  border: 1px solid var(--accent);
  color: var(--accent);
`,R=()=>{const{isOpen:i,toggle:n}=F(!1),s=o(d);return e.jsxs(T,{children:[e.jsxs(L,{children:[e.jsx(P,{type:"button",onClick:n,children:"⇵"}),e.jsx("div",{children:s.length>0&&e.jsx(x,{children:"Favorites filter"})}),e.jsx(h,{open:i}),e.jsx("div",{children:e.jsx(b,{cars:s})})]}),e.jsx(k,{})]})},q=r.div`
  max-width: 1220px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`,N=()=>e.jsx(e.Fragment,{children:e.jsx(q,{children:e.jsx(R,{})})});export{N as default};
