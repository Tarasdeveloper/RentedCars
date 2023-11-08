import{r as n,s as l,j as r,C as d,u as i,d as u,e as x}from"./index-e332e992.js";import{f as m,C as f,u as g,s as C,a as h,b as j,c as L,F as b}from"./CarItem-78004be4.js";import{P}from"./index-384aa39d.js";const y=(t=10)=>{const[e,a]=n.useState(1),[s]=n.useState(t);return[s,e,()=>a(o=>o+1)]},F=l.button`
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
`,E=l.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 50px;
  margin-bottom: 100px;
  padding-left: 15px;
  padding-right: 15px;
`,p=({adverts:t})=>{const[e,a,s]=y(d),c=e*a;return r.jsxs(r.Fragment,{children:[r.jsx(E,{children:m(t,c).map(o=>r.jsx(f,{car:o},o.id))}),(t==null?void 0:t.length)>=c&&r.jsx(F,{onClick:s,children:"Load more"})]})};p.propTypes={adverts:P.array};const A=()=>{const t=g(),e=i(C),a=i(h),s=j(e,a);return n.useEffect(()=>{t(u())},[t]),n.useEffect(()=>{t(x(null))},[t]),r.jsxs(L,{children:[r.jsx(b,{cars:s}),(e==null?void 0:e.length)>0&&r.jsx(p,{adverts:s})]})};export{A as default};
