import{s as r,u as n,j as e,e as l}from"./index-d2132619.js";import{c as d,a as p,b as j,C as m,u as f,d as v,e as F,F as b}from"./CarItem-83ca5014.js";import{P as c}from"./index-69dfba81.js";const C=r.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 50px;
  margin-bottom: 100px;
  align-items: center;
  /* justify-content: center; */
`,k=()=>{const i=n(d),o=n(p),s=j(i,o);return e.jsxs("div",{children:[!s.length&&"Not Found",e.jsx(C,{children:s.map(a=>e.jsx(m,{car:a},a.id))})]})},x=({children:i})=>e.jsx("h2",{children:i});x.propTypes={children:c.node.isRequired,className:c.string};const w=r.ul`
  display: flex;
  gap: 20px;
`,h=()=>{const i=f(),o=n(d),s=n(p),a=v(o,"rentalCompany"),u=t=>{!s||s.rentalCompany!==null?i(l({rentalCompany:t})):s.make===t?i(l({...s,rentalCompany:""})):i(l({...s,rentalCompany:t}))};return e.jsx(w,{children:a.map((t,g)=>e.jsxs("li",{children:[e.jsx("input",{id:t,type:"radio",name:"make",value:t,checked:(s==null?void 0:s.rentalCompany)===t,onChange:()=>u(t)}),e.jsx("label",{htmlFor:t,children:t})]},g))})};h.propTypes={open:c.bool};const y=r.aside`
  padding: 30px 15px 0;
  & h2 {
    text-align: center;
    margin-bottom: 30px;
  }
`,T=r.div`
  position: relative;
`,P=r.button`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 20px;
  line-height: 1;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  border: 1px solid var(--accent);
  color: var(--accent);
`,R=()=>{const{isOpen:i,toggle:o}=F(!1),s=n(d);return e.jsxs(y,{children:[e.jsxs(T,{children:[e.jsx(P,{type:"button",onClick:o,children:"⇵"}),e.jsx("div",{children:s.length>0&&e.jsx(x,{children:"Favorites filter"})}),e.jsx(h,{open:i}),e.jsx("div",{children:e.jsx(b,{cars:s})})]}),e.jsx(k,{})]})},q=r.div`
  max-width: 1220px;
  margin: 0 auto;
  width: 100%;
`,N=()=>e.jsx(e.Fragment,{children:e.jsx(q,{children:e.jsx(R,{})})});export{N as default};
