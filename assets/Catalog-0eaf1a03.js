import{s as c,r as n,j as e,C as d,u as l,d as u,e as x}from"./index-00329686.js";import{f as m,C as g,u as f,s as C,a as h,b as j,F as L}from"./CarItem-cf1157d4.js";import{P as b}from"./index-9ec4e5b3.js";const P=c.div`
  max-width: 1222px;
  margin: 0 auto;
  width: 100%;
`,w=(t=10)=>{const[r,a]=n.useState(1),[s]=n.useState(t);return[s,r,()=>a(o=>o+1)]},y=c.button`
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
`,F=c.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 50px;
  margin-bottom: 100px;
  padding-left: 15px;
  padding-right: 15px;
`,p=({adverts:t})=>{const[r,a,s]=w(d),i=r*a;return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:m(t,i).map(o=>e.jsx(g,{car:o},o.id))}),(t==null?void 0:t.length)>=i&&e.jsx(y,{onClick:s,children:"Load more"})]})};p.propTypes={adverts:b.array};const A=()=>{const t=f(),r=l(C),a=l(h),s=j(r,a);return n.useEffect(()=>{t(u())},[t]),n.useEffect(()=>{t(x(null))},[t]),e.jsxs(P,{children:[e.jsx(L,{cars:s}),(r==null?void 0:r.length)>0&&e.jsx(p,{adverts:s})]})};export{A as default};
