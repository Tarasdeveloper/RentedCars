import{r as n,s as i,j as e,C as p,u as l,d as C,e as d}from"./index-1aba33bc.js";import{f,C as x,u as m,s as g,a as j,b as h,c as L,F as P}from"./CarItem-d7ab8e92.js";import{P as F}from"./index-15ada3e0.js";const y=(s=10)=>{const[t,a]=n.useState(1),[r]=n.useState(s);return[r,t,()=>a(o=>o+1)]},E=i.button`
  background-color: var(--accent);
`,M=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`,u=({adverts:s})=>{const[t,a,r]=y(p),c=t*a;return e.jsxs(e.Fragment,{children:[e.jsx(M,{children:f(s,c).map(o=>e.jsx(x,{car:o},o.id))}),(s==null?void 0:s.length)>=c&&e.jsx(E,{onClick:r,children:"Load more"})]})};u.propTypes={adverts:F.array};const T=()=>{const s=m(),t=l(g),a=l(j),r=h(t,a);return n.useEffect(()=>{s(C())},[s]),n.useEffect(()=>{s(d(null))},[s]),e.jsxs(L,{children:[e.jsx(P,{cars:r}),(t==null?void 0:t.length)>0&&e.jsx(u,{adverts:r})]})};export{T as default};
