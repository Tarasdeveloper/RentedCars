import{s as t,L as e,j as o}from"./index-644efb49.js";const r=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,s=t.div`
  text-align: center;
`,n=t.h1`
  color: var(--title-color);
`;t(e)`
  padding: 8px 16px;
  color: #ffffff; /* White text color */

  transition:
    color 0.3s,
    text-shadow 0.3s;
  display: block;
  &:hover,
  &:focus {
    color: var(--accent-hover);
  }
`;const i=()=>o.jsx(r,{children:o.jsx(s,{children:o.jsx(n,{children:"Second Page"})})});export{i as default};
