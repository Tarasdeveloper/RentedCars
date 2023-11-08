import{r as n,s as i,j as r,C as u,u as l,d,e as m}from"./index-567fa773.js";import{f as x,C,u as f,s as g,a as j,b as h,c as L,F as b}from"./CarItem-05fef99e.js";import{P}from"./index-bcbffe4e.js";const y=(s=10)=>{const[t,a]=n.useState(1),[e]=n.useState(s);return[e,t,()=>a(o=>o+1)]},F=i.button`
  color: var(--accent);
  margin: 0 auto;
  margin-bottom: 50px;
  display: block;
  border-color: transparent;
  text-decoration: underline;
`,E=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 100px;
`,p=({adverts:s})=>{const[t,a,e]=y(u),c=t*a;return r.jsxs(r.Fragment,{children:[r.jsx(E,{children:x(s,c).map(o=>r.jsx(C,{car:o},o.id))}),(s==null?void 0:s.length)>=c&&r.jsx(F,{onClick:e,children:"Load more"})]})};p.propTypes={adverts:P.array};const T=()=>{const s=f(),t=l(g),a=l(j),e=h(t,a);return n.useEffect(()=>{s(d())},[s]),n.useEffect(()=>{s(m(null))},[s]),r.jsxs(L,{children:[r.jsx(b,{cars:e}),(t==null?void 0:t.length)>0&&r.jsx(p,{adverts:e})]})};export{T as default};
