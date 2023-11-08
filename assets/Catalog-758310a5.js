import{r as n,s as i,j as r,C as u,u as l,d,e as x}from"./index-6e4c3229.js";import{f as m,C,u as f,s as g,a as h,b as j,c as b,F as L}from"./CarItem-8f32e29b.js";import{P}from"./index-e5c0392d.js";const y=(t=10)=>{const[e,a]=n.useState(1),[s]=n.useState(t);return[s,e,()=>a(o=>o+1)]},F=i.button`
  color: var(--accent);
  margin: 0 auto;
  margin-bottom: 50px;
  display: block;
  border-color: transparent;
  text-decoration-line: underline;
  /* border-bottom: 1px solid var(--accent); */
  transition: all 0.3s ease-in-out;

  &:hover {
    text-decoration: none;
    color: var(--hover-accent);
  }
`,E=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 100px;
`,p=({adverts:t})=>{const[e,a,s]=y(u),c=e*a;return r.jsxs(r.Fragment,{children:[r.jsx(E,{children:m(t,c).map(o=>r.jsx(C,{car:o},o.id))}),(t==null?void 0:t.length)>=c&&r.jsx(F,{onClick:s,children:"Load more"})]})};p.propTypes={adverts:P.array};const T=()=>{const t=f(),e=l(g),a=l(h),s=j(e,a);return n.useEffect(()=>{t(d())},[t]),n.useEffect(()=>{t(x(null))},[t]),r.jsxs(b,{children:[r.jsx(L,{cars:s}),(e==null?void 0:e.length)>0&&r.jsx(p,{adverts:s})]})};export{T as default};
