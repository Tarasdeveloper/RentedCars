import{r as n,s as i,j as r,C as u,u as l,d,e as x}from"./index-db1c00c6.js";import{f as m,C,u as f,s as g,a as h,b as j,c as L,F as b}from"./CarItem-f2ec6c56.js";import{P}from"./index-807a4696.js";const y=(t=10)=>{const[e,a]=n.useState(1),[s]=n.useState(t);return[s,e,()=>a(o=>o+1)]},F=i.button`
  color: var(--accent);
  margin: 0 auto;
  margin-bottom: 50px;
  display: block;
  border-color: transparent;
  text-decoration-line: underline;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
    color: var(--hover-accent);
  }
`,E=i.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 50px;
  margin-bottom: 100px;
`,p=({adverts:t})=>{const[e,a,s]=y(u),c=e*a;return r.jsxs(r.Fragment,{children:[r.jsx(E,{children:m(t,c).map(o=>r.jsx(C,{car:o},o.id))}),(t==null?void 0:t.length)>=c&&r.jsx(F,{onClick:s,children:"Load more"})]})};p.propTypes={adverts:P.array};const A=()=>{const t=f(),e=l(g),a=l(h),s=j(e,a);return n.useEffect(()=>{t(d())},[t]),n.useEffect(()=>{t(x(null))},[t]),r.jsxs(L,{children:[r.jsx(b,{cars:s}),(e==null?void 0:e.length)>0&&r.jsx(p,{adverts:s})]})};export{A as default};
