import{s as n,u as o,j as e,e as l}from"./index-e973fd64.js";import{d,a as p,b as j,C as m,u as f,e as v,g as F,F as b,c as C}from"./CarItem-b9a0c23b.js";import{P as c}from"./index-3ea66982.js";const k=n.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 50px;
  margin-bottom: 100px;
  align-items: center;
  /* justify-content: center; */
`,y=()=>{const i=o(d),r=o(p),s=j(i,r);return e.jsxs("div",{children:[!s.length&&"Not Found",e.jsx(k,{children:s.map(a=>e.jsx(m,{car:a},a.id))})]})},x=({children:i})=>e.jsx("h2",{children:i});x.propTypes={children:c.node.isRequired,className:c.string};const T=n.ul`
  display: flex;
  gap: 20px;
`,h=()=>{const i=f(),r=o(d),s=o(p),a=v(r,"rentalCompany"),u=t=>{!s||s.rentalCompany!==null?i(l({rentalCompany:t})):s.make===t?i(l({...s,rentalCompany:""})):i(l({...s,rentalCompany:t}))};return e.jsx(T,{children:a.map((t,g)=>e.jsxs("li",{children:[e.jsx("input",{id:t,type:"radio",name:"make",value:t,checked:(s==null?void 0:s.rentalCompany)===t,onChange:()=>u(t)}),e.jsx("label",{htmlFor:t,children:t})]},g))})};h.propTypes={open:c.bool};const w=n.aside`
  padding-top: 30px;
  & h2 {
    text-align: center;
    margin-bottom: 30px;
  }
`,P=n.div`
  position: relative;
`,R=n.button`
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
`,q=()=>{const{isOpen:i,toggle:r}=F(!1),s=o(d);return e.jsxs(w,{children:[e.jsxs(P,{children:[e.jsx(R,{type:"button",onClick:r,children:"⇵"}),e.jsx("div",{children:s.length>0&&e.jsx(x,{children:"Favorites filter"})}),e.jsx(h,{open:i}),e.jsx("div",{children:e.jsx(b,{cars:s})})]}),e.jsx(y,{})]})},N=()=>e.jsx(e.Fragment,{children:e.jsx(C,{children:e.jsx(q,{})})});export{N as default};
