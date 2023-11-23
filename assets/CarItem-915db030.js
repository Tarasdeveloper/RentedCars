import{R as _e,f as Nt,h as Wt,j as c,r as ee,i as C,s as j,u as pt,k as Ht,e as Jt,l as Kt,m as Gt,L as Yt,b as Qt,n as Xt,o as Zt}from"./index-684674ba.js";import{P as x}from"./index-cd938c7b.js";function gt(e=_e){const s=e===_e?Nt:Wt(e);return function(){const{store:r}=s();return r}}const er=gt();function tr(e=_e){const s=e===_e?er:gt(e);return function(){return s().dispatch}}const ht=tr(),vs=e=>e.cars.items,rr=e=>e.cars.favorites,sr=e=>e.cars.filter,yt=e=>{const s=e.split(", "),t=s[1],r=s[s.length-1];return{city:t,country:r}},ir=e=>{const{type:s,mileage:t,functionalities:r}=e;return{type:s,mileage:t,functionalities:r}},nr=(e,s)=>{const{city:t,country:r}=yt(e),{rentalCompany:n}=s;return[t,r,n]},Oe=(e,s)=>e.map((t,r)=>c.jsxs("li",{children:[t,r<e.length-1&&s]},r)),or=e=>{if(!e||e.length===0)return"";let s=e[0];for(let r=1;r<e.length;r++){const n=e[r];n.split(" ").length<s.split(" ").length&&(s=n)}const t=s.split(" ");return t.length>3?t.slice(0,3).join(" "):s},ar=(e,s)=>e==="functionalities"?or(s):e==="type"?s.split(",")[0].trim():s,_s=(e,s)=>e==null?void 0:e.slice(0,s),lr=({target:e,currentTarget:s,code:t},r)=>{(e===s||t==="Escape")&&r()},cr=(e,s)=>{const{city:t,country:r}=yt(e),{year:n,type:a,id:u}=s;return[t,r,`Id: ${u}`,`Year: ${n}`,`Type: ${a}`]},ur=e=>{const{fuelConsumption:s,engineSize:t}=e;return[`Fuel Consumption: ${s}`,`Engine Size: ${t}`]},dr=e=>{const s=e.split(`
`),t=s[0].split(" ").slice(-1).join("");return s[0]=s[0].replace(t,""),s.splice(1,0,t),s},fr=e=>e.toLocaleString("en-EN"),xt=e=>e.split("").slice(1).join(""),pr=e=>{if(!Array.isArray(e)||!e.length)return[];let s=0;const t=[];if(e.forEach(n=>{const a=+xt(n.rentalPrice);a>s&&(s=a)}),s===0)return[];let r=10;for(;r<=s;)t.push(r),r+=10;return t},ws=(e,s)=>s?e.filter(t=>{const r=parseInt(t.rentalPrice.substring(1)),n=parseFloat(t.mileage),a=!s.brand||t.make.toLowerCase()===s.brand.toLowerCase(),u=!s.price||r<=s.price,b=!s.from||n>=s.from,h=!s.to||n<=s.to,F=!s.rentalCompany||t.rentalCompany.toLowerCase()===s.rentalCompany.toLowerCase();return a&&u&&b&&h&&F}):e,gr=(e,s)=>{const[t,r]=ee.useState([]);return ee.useEffect(()=>{if(!s)return;const n=[...new Set(e.map(a=>a[s]))];r(n)},[e,s]),t};var ge=e=>e.type==="checkbox",ce=e=>e instanceof Date,B=e=>e==null;const mt=e=>typeof e=="object";var T=e=>!B(e)&&!Array.isArray(e)&&mt(e)&&!ce(e),bt=e=>T(e)&&e.target?ge(e.target)?e.target.checked:e.target.value:e,hr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,vt=(e,s)=>e.has(hr(s)),yr=e=>{const s=e.constructor&&e.constructor.prototype;return T(s)&&s.hasOwnProperty("isPrototypeOf")},Pe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function H(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Pe&&(e instanceof Blob||e instanceof FileList))&&(t||T(e)))if(s=t?[]:{},!t&&!yr(e))s=e;else for(const r in e)e.hasOwnProperty(r)&&(s[r]=H(e[r]));else return e;return s}var he=e=>Array.isArray(e)?e.filter(Boolean):[],D=e=>e===void 0,p=(e,s,t)=>{if(!s||!T(e))return t;const r=he(s.split(/[,[\].]+?/)).reduce((n,a)=>B(n)?n:n[a],e);return D(r)||r===e?D(e[s])?t:e[s]:r},Y=e=>typeof e=="boolean";const we={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},J={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},xr=C.createContext(null),Ue=()=>C.useContext(xr);var _t=(e,s,t,r=!0)=>{const n={defaultValues:s._defaultValues};for(const a in e)Object.defineProperty(n,a,{get:()=>{const u=a;return s._proxyFormState[u]!==J.all&&(s._proxyFormState[u]=!r||J.all),t&&(t[u]=!0),e[u]}});return n},N=e=>T(e)&&!Object.keys(e).length,wt=(e,s,t,r)=>{t(e);const{name:n,...a}=e;return N(a)||Object.keys(a).length>=Object.keys(s).length||Object.keys(a).find(u=>s[u]===(!r||J.all))},me=e=>Array.isArray(e)?e:[e],Ft=(e,s,t)=>!e||!s||e===s||me(e).some(r=>r&&(t?r===s:r.startsWith(s)||s.startsWith(r)));function ze(e){const s=C.useRef(e);s.current=e,C.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function mr(e){const s=Ue(),{control:t=s.control,disabled:r,name:n,exact:a}=e||{},[u,b]=C.useState(t._formState),h=C.useRef(!0),F=C.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),V=C.useRef(n);return V.current=n,ze({disabled:r,next:v=>h.current&&Ft(V.current,v.name,a)&&wt(v,F.current,t._updateFormState)&&b({...t._formState,...v}),subject:t._subjects.state}),C.useEffect(()=>(h.current=!0,F.current.isValid&&t._updateValid(!0),()=>{h.current=!1}),[t]),_t(u,t,F.current,!1)}var Q=e=>typeof e=="string",Vt=(e,s,t,r,n)=>Q(e)?(r&&s.watch.add(e),p(t,e,n)):Array.isArray(e)?e.map(a=>(r&&s.watch.add(a),p(t,a))):(r&&(s.watchAll=!0),t);function br(e){const s=Ue(),{control:t=s.control,name:r,defaultValue:n,disabled:a,exact:u}=e||{},b=C.useRef(r);b.current=r,ze({disabled:a,subject:t._subjects.values,next:V=>{Ft(b.current,V.name,u)&&F(H(Vt(b.current,t._names,V.values||t._formValues,!1,n)))}});const[h,F]=C.useState(t._getWatch(r,n));return C.useEffect(()=>t._removeUnmounted()),h}var $e=e=>/^\w*$/.test(e),jt=e=>he(e.replace(/["|']|\]/g,"").split(/\.|\[/));function S(e,s,t){let r=-1;const n=$e(s)?[s]:jt(s),a=n.length,u=a-1;for(;++r<a;){const b=n[r];let h=t;if(r!==u){const F=e[b];h=T(F)||Array.isArray(F)?F:isNaN(+n[r+1])?{}:[]}e[b]=h,e=e[b]}return e}function vr(e){const s=Ue(),{name:t,disabled:r,control:n=s.control,shouldUnregister:a}=e,u=vt(n._names.array,t),b=br({control:n,name:t,defaultValue:p(n._formValues,t,p(n._defaultValues,t,e.defaultValue)),exact:!0}),h=mr({control:n,name:t}),F=C.useRef(n.register(t,{...e.rules,value:b}));return F.current=n.register(t,e.rules),C.useEffect(()=>{const V=n._options.shouldUnregister||a,v=(m,I)=>{const k=p(n._fields,m);k&&(k._f.mount=I)};if(v(t,!0),V){const m=H(p(n._options.defaultValues,t));S(n._defaultValues,t,m),D(p(n._formValues,t))&&S(n._formValues,t,m)}return()=>{(u?V&&!n._state.action:V)?n.unregister(t):v(t,!1)}},[t,n,u,a]),C.useEffect(()=>{p(n._fields,t)&&n._updateDisabledField({disabled:r,fields:n._fields,name:t,value:p(n._fields,t)._f.value})},[r,t,n]),{field:{name:t,value:b,...Y(r)||Y(h.disabled)?{disabled:h.disabled||r}:{},onChange:C.useCallback(V=>F.current.onChange({target:{value:bt(V),name:t},type:we.CHANGE}),[t]),onBlur:C.useCallback(()=>F.current.onBlur({target:{value:p(n._formValues,t),name:t},type:we.BLUR}),[t,n]),ref:V=>{const v=p(n._fields,t);v&&V&&(v._f.ref={focus:()=>V.focus(),select:()=>V.select(),setCustomValidity:m=>V.setCustomValidity(m),reportValidity:()=>V.reportValidity()})}},formState:h,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!p(h.errors,t)},isDirty:{enumerable:!0,get:()=>!!p(h.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!p(h.touchedFields,t)},error:{enumerable:!0,get:()=>p(h.errors,t)}})}}const st=e=>e.render(vr(e));var _r=(e,s,t,r,n)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[r]:n||!0}}:{},it=e=>({isOnSubmit:!e||e===J.onSubmit,isOnBlur:e===J.onBlur,isOnChange:e===J.onChange,isOnAll:e===J.all,isOnTouch:e===J.onTouched}),nt=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const be=(e,s,t,r)=>{for(const n of t||Object.keys(e)){const a=p(e,n);if(a){const{_f:u,...b}=a;if(u){if(u.refs&&u.refs[0]&&s(u.refs[0],n)&&!r)break;if(u.ref&&s(u.ref,u.name)&&!r)break}else T(b)&&be(b,s)}}};var wr=(e,s,t)=>{const r=he(p(e,t));return S(r,"root",s[t]),S(e,t,r),e},Ne=e=>e.type==="file",te=e=>typeof e=="function",Fe=e=>{if(!Pe)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>Q(e),We=e=>e.type==="radio",Ve=e=>e instanceof RegExp;const ot={value:!1,isValid:!1},at={value:!0,isValid:!0};var At=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!D(e[0].attributes.value)?D(e[0].value)||e[0].value===""?at:{value:e[0].value,isValid:!0}:at:ot}return ot};const lt={isValid:!1,value:null};var kt=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,lt):lt;function ct(e,s,t="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||Y(e)&&!e)return{type:t,message:ve(e)?e:"",ref:s}}var ae=e=>T(e)&&!Ve(e)?e:{value:e,message:""},ut=async(e,s,t,r,n)=>{const{ref:a,refs:u,required:b,maxLength:h,minLength:F,min:V,max:v,pattern:m,validate:I,name:k,valueAsNumber:O,mount:z,disabled:ue}=e._f,_=p(s,k);if(!z||ue)return{};const U=u?u[0]:a,W=A=>{r&&U.reportValidity&&(U.setCustomValidity(Y(A)?"":A||""),U.reportValidity())},L={},de=We(a),ne=ge(a),Re=de||ne,K=(O||Ne(a))&&D(a.value)&&D(_)||Fe(a)&&a.value===""||_===""||Array.isArray(_)&&!_.length,re=_r.bind(null,k,t,L),X=(A,w,q,P=Z.maxLength,$=Z.minLength)=>{const G=A?w:q;L[k]={type:A?P:$,message:G,ref:a,...re(A?P:$,G)}};if(n?!Array.isArray(_)||!_.length:b&&(!Re&&(K||B(_))||Y(_)&&!_||ne&&!At(u).isValid||de&&!kt(u).isValid)){const{value:A,message:w}=ve(b)?{value:!!b,message:b}:ae(b);if(A&&(L[k]={type:Z.required,message:w,ref:U,...re(Z.required,w)},!t))return W(w),L}if(!K&&(!B(V)||!B(v))){let A,w;const q=ae(v),P=ae(V);if(!B(_)&&!isNaN(_)){const $=a.valueAsNumber||_&&+_;B(q.value)||(A=$>q.value),B(P.value)||(w=$<P.value)}else{const $=a.valueAsDate||new Date(_),G=ye=>new Date(new Date().toDateString()+" "+ye),se=a.type=="time",fe=a.type=="week";Q(q.value)&&_&&(A=se?G(_)>G(q.value):fe?_>q.value:$>new Date(q.value)),Q(P.value)&&_&&(w=se?G(_)<G(P.value):fe?_<P.value:$<new Date(P.value))}if((A||w)&&(X(!!A,q.message,P.message,Z.max,Z.min),!t))return W(L[k].message),L}if((h||F)&&!K&&(Q(_)||n&&Array.isArray(_))){const A=ae(h),w=ae(F),q=!B(A.value)&&_.length>+A.value,P=!B(w.value)&&_.length<+w.value;if((q||P)&&(X(q,A.message,w.message),!t))return W(L[k].message),L}if(m&&!K&&Q(_)){const{value:A,message:w}=ae(m);if(Ve(A)&&!_.match(A)&&(L[k]={type:Z.pattern,message:w,ref:a,...re(Z.pattern,w)},!t))return W(w),L}if(I){if(te(I)){const A=await I(_,s),w=ct(A,U);if(w&&(L[k]={...w,...re(Z.validate,w.message)},!t))return W(w.message),L}else if(T(I)){let A={};for(const w in I){if(!N(A)&&!t)break;const q=ct(await I[w](_,s),U,w);q&&(A={...q,...re(w,q.message)},W(q.message),t&&(L[k]=A))}if(!N(A)&&(L[k]={ref:U,...A},!t))return L}}return W(!0),L};function Fr(e,s){const t=s.slice(0,-1).length;let r=0;for(;r<t;)e=D(e)?r++:e[s[r++]];return e}function Vr(e){for(const s in e)if(e.hasOwnProperty(s)&&!D(e[s]))return!1;return!0}function M(e,s){const t=Array.isArray(s)?s:$e(s)?[s]:jt(s),r=t.length===1?e:Fr(e,t),n=t.length-1,a=t[n];return r&&delete r[a],n!==0&&(T(r)&&N(r)||Array.isArray(r)&&Vr(r))&&M(e,t.slice(0,-1)),e}function Te(){let e=[];return{get observers(){return e},next:n=>{for(const a of e)a.next&&a.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(a=>a!==n)}}),unsubscribe:()=>{e=[]}}}var je=e=>B(e)||!mt(e);function ie(e,s){if(je(e)||je(s))return e===s;if(ce(e)&&ce(s))return e.getTime()===s.getTime();const t=Object.keys(e),r=Object.keys(s);if(t.length!==r.length)return!1;for(const n of t){const a=e[n];if(!r.includes(n))return!1;if(n!=="ref"){const u=s[n];if(ce(a)&&ce(u)||T(a)&&T(u)||Array.isArray(a)&&Array.isArray(u)?!ie(a,u):a!==u)return!1}}return!0}var Rt=e=>e.type==="select-multiple",jr=e=>We(e)||ge(e),Le=e=>Fe(e)&&e.isConnected,St=e=>{for(const s in e)if(te(e[s]))return!0;return!1};function Ae(e,s={}){const t=Array.isArray(e);if(T(e)||t)for(const r in e)Array.isArray(e[r])||T(e[r])&&!St(e[r])?(s[r]=Array.isArray(e[r])?[]:{},Ae(e[r],s[r])):B(e[r])||(s[r]=!0);return s}function Ct(e,s,t){const r=Array.isArray(e);if(T(e)||r)for(const n in e)Array.isArray(e[n])||T(e[n])&&!St(e[n])?D(s)||je(t[n])?t[n]=Array.isArray(e[n])?Ae(e[n],[]):{...Ae(e[n])}:Ct(e[n],B(s)?{}:s[n],t[n]):t[n]=!ie(e[n],s[n]);return t}var Me=(e,s)=>Ct(e,s,Ae(s)),Dt=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:r})=>D(e)?e:s?e===""?NaN:e&&+e:t&&Q(e)?new Date(e):r?r(e):e;function Ie(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Ne(s)?s.files:We(s)?kt(e.refs).value:Rt(s)?[...s.selectedOptions].map(({value:t})=>t):ge(s)?At(e.refs).value:Dt(D(s.value)?e.ref.value:s.value,e)}var Ar=(e,s,t,r)=>{const n={};for(const a of e){const u=p(s,a);u&&S(n,a,u._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:r}},pe=e=>D(e)?e:Ve(e)?e.source:T(e)?Ve(e.value)?e.value.source:e.value:e,kr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function dt(e,s,t){const r=p(e,t);if(r||$e(t))return{error:r,name:t};const n=t.split(".");for(;n.length;){const a=n.join("."),u=p(s,a),b=p(e,a);if(u&&!Array.isArray(u)&&t!==a)return{name:t};if(b&&b.type)return{name:a,error:b};n.pop()}return{name:t}}var Rr=(e,s,t,r,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(s||e):(t?r.isOnBlur:n.isOnBlur)?!e:(t?r.isOnChange:n.isOnChange)?e:!0,Sr=(e,s)=>!he(p(e,s)).length&&M(e,s);const Cr={mode:J.onSubmit,reValidateMode:J.onChange,shouldFocusError:!0};function Dr(e={},s){let t={...Cr,...e},r={submitCount:0,isDirty:!1,isLoading:te(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},n={},a=T(t.defaultValues)||T(t.values)?H(t.defaultValues||t.values)||{}:{},u=t.shouldUnregister?{}:H(a),b={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},F,V=0;const v={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:Te(),array:Te(),state:Te()},I=e.resetOptions&&e.resetOptions.keepDirtyValues,k=it(t.mode),O=it(t.reValidateMode),z=t.criteriaMode===J.all,ue=i=>o=>{clearTimeout(V),V=setTimeout(i,o)},_=async i=>{if(v.isValid||i){const o=t.resolver?N((await K()).errors):await X(n,!0);o!==r.isValid&&m.state.next({isValid:o})}},U=i=>v.isValidating&&m.state.next({isValidating:i}),W=(i,o=[],l,g,f=!0,d=!0)=>{if(g&&l){if(b.action=!0,d&&Array.isArray(p(n,i))){const y=l(p(n,i),g.argA,g.argB);f&&S(n,i,y)}if(d&&Array.isArray(p(r.errors,i))){const y=l(p(r.errors,i),g.argA,g.argB);f&&S(r.errors,i,y),Sr(r.errors,i)}if(v.touchedFields&&d&&Array.isArray(p(r.touchedFields,i))){const y=l(p(r.touchedFields,i),g.argA,g.argB);f&&S(r.touchedFields,i,y)}v.dirtyFields&&(r.dirtyFields=Me(a,u)),m.state.next({name:i,isDirty:w(i,o),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else S(u,i,o)},L=(i,o)=>{S(r.errors,i,o),m.state.next({errors:r.errors})},de=(i,o,l,g)=>{const f=p(n,i);if(f){const d=p(u,i,D(l)?p(a,i):l);D(d)||g&&g.defaultChecked||o?S(u,i,o?d:Ie(f._f)):$(i,d),b.mount&&_()}},ne=(i,o,l,g,f)=>{let d=!1,y=!1;const R={name:i};if(!l||g){v.isDirty&&(y=r.isDirty,r.isDirty=R.isDirty=w(),d=y!==R.isDirty);const E=ie(p(a,i),o);y=p(r.dirtyFields,i),E?M(r.dirtyFields,i):S(r.dirtyFields,i,!0),R.dirtyFields=r.dirtyFields,d=d||v.dirtyFields&&y!==!E}if(l){const E=p(r.touchedFields,i);E||(S(r.touchedFields,i,l),R.touchedFields=r.touchedFields,d=d||v.touchedFields&&E!==l)}return d&&f&&m.state.next(R),d?R:{}},Re=(i,o,l,g)=>{const f=p(r.errors,i),d=v.isValid&&Y(o)&&r.isValid!==o;if(e.delayError&&l?(F=ue(()=>L(i,l)),F(e.delayError)):(clearTimeout(V),F=null,l?S(r.errors,i,l):M(r.errors,i)),(l?!ie(f,l):f)||!N(g)||d){const y={...g,...d&&Y(o)?{isValid:o}:{},errors:r.errors,name:i};r={...r,...y},m.state.next(y)}U(!1)},K=async i=>t.resolver(u,t.context,Ar(i||h.mount,n,t.criteriaMode,t.shouldUseNativeValidation)),re=async i=>{const{errors:o}=await K(i);if(i)for(const l of i){const g=p(o,l);g?S(r.errors,l,g):M(r.errors,l)}else r.errors=o;return o},X=async(i,o,l={valid:!0})=>{for(const g in i){const f=i[g];if(f){const{_f:d,...y}=f;if(d){const R=h.array.has(d.name),E=await ut(f,u,z,t.shouldUseNativeValidation&&!o,R);if(E[d.name]&&(l.valid=!1,o))break;!o&&(p(E,d.name)?R?wr(r.errors,E,d.name):S(r.errors,d.name,E[d.name]):M(r.errors,d.name))}y&&await X(y,o,l)}}return l.valid},A=()=>{for(const i of h.unMount){const o=p(n,i);o&&(o._f.refs?o._f.refs.every(l=>!Le(l)):!Le(o._f.ref))&&Ce(i)}h.unMount=new Set},w=(i,o)=>(i&&o&&S(u,i,o),!ie(Je(),a)),q=(i,o,l)=>Vt(i,h,{...b.mount?u:D(o)?a:Q(i)?{[i]:o}:o},l,o),P=i=>he(p(b.mount?u:a,i,e.shouldUnregister?p(a,i,[]):[])),$=(i,o,l={})=>{const g=p(n,i);let f=o;if(g){const d=g._f;d&&(!d.disabled&&S(u,i,Dt(o,d)),f=Fe(d.ref)&&B(o)?"":o,Rt(d.ref)?[...d.ref.options].forEach(y=>y.selected=f.includes(y.value)):d.refs?ge(d.ref)?d.refs.length>1?d.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(f)?!!f.find(R=>R===y.value):f===y.value)):d.refs[0]&&(d.refs[0].checked=!!f):d.refs.forEach(y=>y.checked=y.value===f):Ne(d.ref)?d.ref.value="":(d.ref.value=f,d.ref.type||m.values.next({name:i,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&ne(i,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&Se(i)},G=(i,o,l)=>{for(const g in o){const f=o[g],d=`${i}.${g}`,y=p(n,d);(h.array.has(i)||!je(f)||y&&!y._f)&&!ce(f)?G(d,f,l):$(d,f,l)}},se=(i,o,l={})=>{const g=p(n,i),f=h.array.has(i),d=H(o);S(u,i,d),f?(m.array.next({name:i,values:{...u}}),(v.isDirty||v.dirtyFields)&&l.shouldDirty&&m.state.next({name:i,dirtyFields:Me(a,u),isDirty:w(i,d)})):g&&!g._f&&!B(d)?G(i,d,l):$(i,d,l),nt(i,h)&&m.state.next({...r}),m.values.next({name:i,values:{...u}}),!b.mount&&s()},fe=async i=>{const o=i.target;let l=o.name,g=!0;const f=p(n,l),d=()=>o.type?Ie(f._f):bt(i),y=R=>{g=Number.isNaN(R)||R===p(u,l,R)};if(f){let R,E;const xe=d(),oe=i.type===we.BLUR||i.type===we.FOCUS_OUT,Ut=!kr(f._f)&&!t.resolver&&!p(r.errors,l)&&!f._f.deps||Rr(oe,p(r.touchedFields,l),r.isSubmitted,O,k),qe=nt(l,h,oe);S(u,l,xe),oe?(f._f.onBlur&&f._f.onBlur(i),F&&F(0)):f._f.onChange&&f._f.onChange(i);const Ee=ne(l,xe,oe,!1),zt=!N(Ee)||qe;if(!oe&&m.values.next({name:l,type:i.type,values:{...u}}),Ut)return v.isValid&&_(),zt&&m.state.next({name:l,...qe?{}:Ee});if(!oe&&qe&&m.state.next({...r}),U(!0),t.resolver){const{errors:tt}=await K([l]);if(y(xe),g){const $t=dt(r.errors,n,l),rt=dt(tt,n,$t.name||l);R=rt.error,l=rt.name,E=N(tt)}}else R=(await ut(f,u,z,t.shouldUseNativeValidation))[l],y(xe),g&&(R?E=!1:v.isValid&&(E=await X(n,!0)));g&&(f._f.deps&&Se(f._f.deps),Re(l,E,R,Ee))}},ye=(i,o)=>{if(p(r.errors,o)&&i.focus)return i.focus(),1},Se=async(i,o={})=>{let l,g;const f=me(i);if(U(!0),t.resolver){const d=await re(D(i)?i:f);l=N(d),g=i?!f.some(y=>p(d,y)):l}else i?(g=(await Promise.all(f.map(async d=>{const y=p(n,d);return await X(y&&y._f?{[d]:y}:y)}))).every(Boolean),!(!g&&!r.isValid)&&_()):g=l=await X(n);return m.state.next({...!Q(i)||v.isValid&&l!==r.isValid?{}:{name:i},...t.resolver||!i?{isValid:l}:{},errors:r.errors,isValidating:!1}),o.shouldFocus&&!g&&be(n,ye,i?f:h.mount),g},Je=i=>{const o={...a,...b.mount?u:{}};return D(i)?o:Q(i)?p(o,i):i.map(l=>p(o,l))},Ke=(i,o)=>({invalid:!!p((o||r).errors,i),isDirty:!!p((o||r).dirtyFields,i),isTouched:!!p((o||r).touchedFields,i),error:p((o||r).errors,i)}),It=i=>{i&&me(i).forEach(o=>M(r.errors,o)),m.state.next({errors:i?r.errors:{}})},Ge=(i,o,l)=>{const g=(p(n,i,{_f:{}})._f||{}).ref;S(r.errors,i,{...o,ref:g}),m.state.next({name:i,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&g&&g.focus&&g.focus()},Ot=(i,o)=>te(i)?m.values.subscribe({next:l=>i(q(void 0,o),l)}):q(i,o,!0),Ce=(i,o={})=>{for(const l of i?me(i):h.mount)h.mount.delete(l),h.array.delete(l),o.keepValue||(M(n,l),M(u,l)),!o.keepError&&M(r.errors,l),!o.keepDirty&&M(r.dirtyFields,l),!o.keepTouched&&M(r.touchedFields,l),!t.shouldUnregister&&!o.keepDefaultValue&&M(a,l);m.values.next({values:{...u}}),m.state.next({...r,...o.keepDirty?{isDirty:w()}:{}}),!o.keepIsValid&&_()},Ye=({disabled:i,name:o,field:l,fields:g,value:f})=>{if(Y(i)){const d=i?void 0:D(f)?Ie(l?l._f:p(g,o)._f):f;S(u,o,d),ne(o,d,!1,!1,!0)}},De=(i,o={})=>{let l=p(n,i);const g=Y(o.disabled);return S(n,i,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:i}},name:i,mount:!0,...o}}),h.mount.add(i),l?Ye({field:l,disabled:o.disabled,name:i}):de(i,!0,o.value),{...g?{disabled:o.disabled}:{},...t.progressive?{required:!!o.required,min:pe(o.min),max:pe(o.max),minLength:pe(o.minLength),maxLength:pe(o.maxLength),pattern:pe(o.pattern)}:{},name:i,onChange:fe,onBlur:fe,ref:f=>{if(f){De(i,o),l=p(n,i);const d=D(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,y=jr(d),R=l._f.refs||[];if(y?R.find(E=>E===d):d===l._f.ref)return;S(n,i,{_f:{...l._f,...y?{refs:[...R.filter(Le),d,...Array.isArray(p(a,i))?[{}]:[]],ref:{type:d.type,name:i}}:{ref:d}}}),de(i,!1,void 0,d)}else l=p(n,i,{}),l._f&&(l._f.mount=!1),(t.shouldUnregister||o.shouldUnregister)&&!(vt(h.array,i)&&b.action)&&h.unMount.add(i)}}},Qe=()=>t.shouldFocusError&&be(n,ye,h.mount),Bt=i=>{Y(i)&&(m.state.next({disabled:i}),be(n,o=>{o.disabled=i},0,!1))},Xe=(i,o)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let g=H(u);if(m.state.next({isSubmitting:!0}),t.resolver){const{errors:f,values:d}=await K();r.errors=f,g=d}else await X(n);M(r.errors,"root"),N(r.errors)?(m.state.next({errors:{}}),await i(g,l)):(o&&await o({...r.errors},l),Qe(),setTimeout(Qe)),m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:N(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Pt=(i,o={})=>{p(n,i)&&(D(o.defaultValue)?se(i,p(a,i)):(se(i,o.defaultValue),S(a,i,o.defaultValue)),o.keepTouched||M(r.touchedFields,i),o.keepDirty||(M(r.dirtyFields,i),r.isDirty=o.defaultValue?w(i,p(a,i)):w()),o.keepError||(M(r.errors,i),v.isValid&&_()),m.state.next({...r}))},Ze=(i,o={})=>{const l=i?H(i):a,g=H(l),f=i&&!N(i)?g:a;if(o.keepDefaultValues||(a=l),!o.keepValues){if(o.keepDirtyValues||I)for(const d of h.mount)p(r.dirtyFields,d)?S(f,d,p(u,d)):se(d,p(f,d));else{if(Pe&&D(i))for(const d of h.mount){const y=p(n,d);if(y&&y._f){const R=Array.isArray(y._f.refs)?y._f.refs[0]:y._f.ref;if(Fe(R)){const E=R.closest("form");if(E){E.reset();break}}}}n={}}u=e.shouldUnregister?o.keepDefaultValues?H(a):{}:H(f),m.array.next({values:{...f}}),m.values.next({values:{...f}})}h={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!b.mount&&s(),b.mount=!v.isValid||!!o.keepIsValid,b.watch=!!e.shouldUnregister,m.state.next({submitCount:o.keepSubmitCount?r.submitCount:0,isDirty:o.keepDirty?r.isDirty:!!(o.keepDefaultValues&&!ie(i,a)),isSubmitted:o.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:o.keepDirtyValues?r.dirtyFields:o.keepDefaultValues&&i?Me(a,i):{},touchedFields:o.keepTouched?r.touchedFields:{},errors:o.keepErrors?r.errors:{},isSubmitSuccessful:o.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},et=(i,o)=>Ze(te(i)?i(u):i,o);return{control:{register:De,unregister:Ce,getFieldState:Ke,handleSubmit:Xe,setError:Ge,_executeSchema:K,_getWatch:q,_getDirty:w,_updateValid:_,_removeUnmounted:A,_updateFieldArray:W,_updateDisabledField:Ye,_getFieldArray:P,_reset:Ze,_resetDefaultValues:()=>te(t.defaultValues)&&t.defaultValues().then(i=>{et(i,t.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:i=>{r={...r,...i}},_disableForm:Bt,_subjects:m,_proxyFormState:v,get _fields(){return n},get _formValues(){return u},get _state(){return b},set _state(i){b=i},get _defaultValues(){return a},get _names(){return h},set _names(i){h=i},get _formState(){return r},set _formState(i){r=i},get _options(){return t},set _options(i){t={...t,...i}}},trigger:Se,register:De,handleSubmit:Xe,watch:Ot,setValue:se,getValues:Je,reset:et,resetField:Pt,clearErrors:It,unregister:Ce,setError:Ge,setFocus:(i,o={})=>{const l=p(n,i),g=l&&l._f;if(g){const f=g.refs?g.refs[0]:g.ref;f.focus&&(f.focus(),o.shouldSelect&&f.select())}},getFieldState:Ke}}function qr(e={}){const s=C.useRef(),t=C.useRef(),[r,n]=C.useState({isDirty:!1,isValidating:!1,isLoading:te(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:te(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Dr(e,()=>n(u=>({...u}))),formState:r});const a=s.current.control;return a._options=e,ze({subject:a._subjects.state,next:u=>{wt(u,a._proxyFormState,a._updateFormState,!0)&&n({...a._formState})}}),C.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),C.useEffect(()=>{if(a._proxyFormState.isDirty){const u=a._getDirty();u!==r.isDirty&&a._subjects.state.next({isDirty:u})}},[a,r.isDirty]),C.useEffect(()=>{e.values&&!ie(e.values,t.current)?(a._reset(e.values,a._options.resetOptions),t.current=e.values):a._resetDefaultValues()},[e.values,a]),C.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),s.current.formState=_t(r,a),s.current}const Er=j.form`
  max-width: 1050px;
  margin: 0 auto auto;
  height: 150px;
  padding-top: 30px;
`,Tr=j.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`,Lr=j.div`
  display: flex;
  margin-right: 18px;

  & label {
    color: #8a8a89;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.285;
  }
`,Mr=j.select`
  border-radius: 14px;
  background: #f7f7fb;
  padding: 14px 18px;
  font-size: 18px;
  font-weight: 500;
  border: none;
  margin-right: 18px;
  width: 225px;
  margin-top: 8px;

  & option {
    color: rgba(18, 20, 23, 0.2);
    font-size: 16px;
    line-height: 1.25;
  }
`,Ir=j.select`
  border-radius: 14px;
  background: #f7f7fb;
  padding: 14px 18px;
  padding: 14px 18px;
  font-size: 18px;
  font-weight: 500;
  border: none;
  margin-right: 18px;
  width: 125px;
  margin-top: 8px;
  color: var(--title-color);

  & option {
    color: rgba(18, 20, 23, 0.2);
    font-size: 16px;
    line-height: 1.25;
  }
`,Or=j.div`
  display: flex;
  flex-direction: column;
`,Br=j.input`
  border-radius: 14px 0px 0px 14px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: #f7f7fb;
  width: 160px;
  height: 48px;
  color: inherit;
  font-size: 18px;
  line-height: 1.11;
  font-weight: 500;
  padding-left: 74px;
  margin-top: 8px;
  color: var(--title-color);
`,Pr=j.input`
  border: none;
  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;
  width: 160px;
  height: 48px;
  color: inherit;
  font-size: 18px;
  line-height: 1.11;
  font-weight: 500;
  padding-left: 50px;
  color: var(--title-color);
`,Ur=j.label`
  position: relative;
`,zr=j.label`
  position: relative;
`,$r=j.span`
  position: absolute;
  left: 24px;
  bottom: 0;
  font-size: 18px;
  line-height: 1.11;
  font-weight: 500;
  color: var(--title-color);
`,Nr=j.span`
  position: absolute;
  left: 24px;
  bottom: 0;
  font-size: 18px;
  line-height: 1.11;
  font-weight: 500;
  color: var(--title-color);
`,Wr=j.div`
  margin-bottom: auto;
  margin-top: 28px;
  display: flex;
  gap: 18px;
`,ft=j.button`
  border-color: transparent;
  color: #ffffff;
  background-color: var(--accent);
  padding: 10px 44px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  align-self: flex-end;
`,Fs=({cars:e})=>{const s=pt(sr),t=ht(),{pathname:r}=Ht(),n=r==="/favorites"&&(e==null?void 0:e.length)===0,a=pr(e),u=gr(e,"make"),{register:b,handleSubmit:h,control:F,reset:V,formState:{errors:v}}=qr({mode:"onChange",shouldDisable:n});ee.useEffect(()=>{V(s)},[s,V]);const m=k=>{t(Jt(k))},I=()=>{t(Kt()),V({brand:"",price:"",from:"",to:""})};return c.jsx(Er,{onSubmit:h(m),disabled:n,children:c.jsxs(Tr,{children:[c.jsxs(Lr,{children:[c.jsxs(Or,{children:[c.jsx("label",{htmlFor:"brand",children:"Car brand"}),c.jsx(st,{name:"brand",control:F,rules:{required:!0,message:"Brand is required"},render:({field:k})=>c.jsxs(c.Fragment,{children:[c.jsxs(Mr,{...k,children:[c.jsx("option",{value:"",children:"Enter the text"}),u&&u.map((O,z)=>c.jsx("option",{value:O,children:O},z))]}),v.brand&&c.jsx("p",{className:`error ${n?"opacity-0":"opacity-100"}`,children:v.brand.type==="required"?"Brand is required":v.brand.message})]})})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"price",children:"Price/ 1 hour"}),c.jsx("div",{children:c.jsx(st,{name:"price",control:F,rules:{required:!0,min:{value:0,message:"Must be 0 or greater"}},render:({field:k})=>c.jsxs(c.Fragment,{children:[c.jsxs(Ir,{...k,children:[c.jsx("option",{value:"",children:"To $"}),a&&a.map((O,z)=>c.jsx("option",{value:O,children:O},z))]}),v.price&&c.jsx("p",{className:`${n?"opacity-0":"opacity-100"}`,children:v.price.type==="required"?"Price is required":v.price.message})]})})})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"minMileage",children:"Car mileage / km (from)"}),c.jsxs("div",{children:[c.jsxs(Ur,{children:[c.jsx(Br,{type:"number",...b("from",{required:"This field is required",min:{value:0,message:"Must be 0 or greater"}})}),c.jsx($r,{children:"From"})]}),c.jsxs(zr,{children:[c.jsx(Pr,{type:"number",...b("to",{required:"This field is required",min:{value:0,message:"Must be 0 or greater"},validate:(k,{from:O})=>parseInt(k)>parseInt(O)?!0:"To must be greater than From"})}),c.jsx(Nr,{children:"To"})]}),c.jsxs("p",{className:` ${n?"opacity-0":"opacity-100"}`,children:[(v==null?void 0:v.from)&&c.jsx("span",{children:v.from.message}),(v==null?void 0:v.to)&&c.jsx("span",{children:v.to.message})]})]})]})]}),c.jsxs(Wr,{children:[c.jsx(ft,{type:"submit",label:"Search",children:"Search"}),c.jsx(ft,{type:"button",onClick:I,label:"Reset",children:"Reset"})]})]})})},Hr="/RentedCars/assets/matureman-7c08ad59.jpg",Jr=(e=!1)=>{const[s,t]=ee.useState(e);return{isOpen:s,open:()=>t(!0),close:()=>t(!1),toggle:()=>t(u=>!u)}},Kr=j.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border-color: transparent;
  /* font-size: 20px; */
`,Gr=j.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 20, 23, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,Yr=j.div`
  position: fixed;
  right: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  width: 545px;
  height: 760px;
  z-index: 10;
  border-radius: 24px;
  padding: 37px;
  z-index: 11;
  display: flex;
  flex-direction: column;

  & img {
    border-radius: 14px;
    background: #f3f3f2;
    height: 248px;
    margin: 0 auto;
    object-fit: cover;
  }
`,Qr=document.getElementById("modal"),qt=({onClose:e,children:s,isOpen:t})=>{ee.useEffect(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow="visible"},[t]);const r=ee.useCallback(n=>{document.body.style.overflow="visible",lr(n,e)},[e]);return ee.useEffect(()=>(document.body.addEventListener("keydown",r),()=>document.body.removeEventListener("keydown",r)),[r]),Gt.createPortal(c.jsx(Gr,{onClick:r,children:c.jsxs(Yr,{children:[c.jsx(Kr,{onClick:e,type:"button",children:"❌"}),s]})}),Qr)};qt.propTypes={children:x.node.isRequired,onClose:x.func.isRequired,isOpen:x.bool};const Xr="/RentedCars/assets/youngman-08677e87.jpg",He=({src:e,alt:s,width:t,height:r})=>c.jsx("div",{children:c.jsx("img",{src:e?`${e}`:Xr,alt:s,width:t,height:r,loading:"lazy"})});He.propTypes={src:x.string.isRequired,alt:x.string.isRequired,className:x.string,blockClass:x.string,height:x.string};const Zr=j.p`
  font-weight: 500;
  margin-bottom: 8px;
`,es=j.li`
  display: inline-flex;
  color: #363535;
  font-size: 12px;
  letter-spacing: -0.24px;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 35px;
  background-color: #f9f9f9;
  & span {
    color: var(--accent);
    font-weight: 600;
  }
`,ts=j.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,le=({conditionText:e,conditionValue:s})=>c.jsxs(es,{children:[c.jsx("p",{children:e}),s&&c.jsx("span",{children:s})]});le.propTypes={conditionText:x.string.isRequired,conditionValue:x.string};const Et=({rentConditions:e,mile:s,price:t,title:r})=>c.jsxs("div",{children:[c.jsxs(Zr,{children:[r,":"]}),c.jsxs(ts,{children:[c.jsx(le,{conditionText:e[0],conditionValue:e[1]}),c.jsx(le,{conditionText:e[2]}),c.jsx(le,{conditionText:e[3]}),c.jsx(le,{conditionText:"Mileage: ",conditionValue:s}),c.jsx(le,{conditionText:"Price: ",conditionValue:`${t}$`})]})]});Et.propTypes={rentConditions:x.array.isRequired,mile:x.string.isRequired,price:x.string.isRequired,title:x.string.isRequired};const ke=()=>c.jsx("span",{children:"|"}),rs=j.p`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 8px;
`,ss=j.div`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
`,is=j.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  & li {
    display: flex;
  }
  & span {
    margin-left: 4px;
  }
`,Be=({items:e,separator:s})=>c.jsx(is,{children:e.map((t,r)=>c.jsxs("li",{children:[t,r<e.length-1&&s]},r))});Be.propTypes={items:x.array.isRequired,separator:x.any};const Tt=({accessories:e,functionalities:s,title:t})=>c.jsxs(ss,{children:[c.jsxs(rs,{children:[t,":"]}),c.jsx(Be,{items:e,separator:c.jsx(ke,{})}),c.jsx(Be,{items:s,separator:c.jsx(ke,{})})]});Tt.propTypes={accessories:x.array.isRequired,functionalities:x.array.isRequired,title:x.string.isRequired};const ns=j.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 14px;
  & span {
    color: var(--accent);
  }
`,os=j.div`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  margin-bottom: 14px;
  margin-top: 8px;
  & ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 4px;
  }
`,as=j(Yt)`
  color: #ffffff;
  padding: 12px 50px;
  background-color: var(--accent);
  display: inline-flex;
  width: 170px;
  border-radius: 12px;
  margin-top: auto;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--hover-accent);
  }
`,Lt=({car:e})=>{const{year:s,make:t,model:r,img:n,rentalPrice:a,address:u,description:b,accessories:h,functionalities:F,rentalConditions:V,mileage:v}=e,m=ur(e),I=cr(u,e),k=dr(V),O=fr(v),z=xt(a);return c.jsxs(c.Fragment,{children:[c.jsx(He,{width:"461",height:"248",src:n,alt:`${t} ${r}`,loading:"lazy"}),c.jsxs(ns,{children:[t," ",c.jsx("span",{children:r}),", ",s]}),c.jsxs(os,{children:[c.jsx("ul",{children:Oe(I)}),c.jsx("ul",{children:Oe(m)})]}),c.jsx("div",{children:b}),c.jsx(Tt,{title:"Accessories and functionalities",accessories:h,functionalities:F}),c.jsx(Et,{title:"Rental Conditions",rentConditions:k,mile:O,price:z}),c.jsx(as,{to:"tel:+380730000000",children:"Rental car"})]})};Lt.propTypes={car:x.shape({id:x.number.isRequired,year:x.number.isRequired,make:x.string.isRequired,model:x.string.isRequired,type:x.string.isRequired,img:x.string.isRequired,description:x.string.isRequired,functionalities:x.array.isRequired,rentalPrice:x.string.isRequired,rentalCompany:x.string.isRequired,address:x.string.isRequired,mileage:x.number.isRequired,accessories:x.array.isRequired,rentalConditions:x.string.isRequired}).isRequired};const Mt=({locationData:e,carData:s})=>c.jsxs(c.Fragment,{children:[c.jsx("ul",{children:Oe(e,c.jsx(ke,{}))}),c.jsx("ul",{children:Object.entries(s).map(([t,r],n,a)=>c.jsxs("li",{children:[ar(t,r),n<a.length-1&&c.jsx(ke,{})]},n))})]});Mt.propTypes={carData:x.object.isRequired,locationData:x.array.isRequired};const ls=j.li`
  width: 275px;
  position: relative;
  height: 430px;
  display: flex;
  flex-direction: column;

  & img {
    height: 270px;
    object-fit: cover;
    border-radius: 14px;
  }
  & ul {
    font-size: 12px;
    color: rgba(18, 20, 23, 0.5);
    font-weight: 400;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    & li {
      & span {
        display: inline-block;
        margin-left: 6px;
      }
    }
  }
`,cs=j.svg`
  width: 18px;
  height: 16px;
  stroke: #ffffff;
  fill: none;
`,us=j.button`
  width: 25px;
  height: 22px;
  border: none;
  position: absolute;
  z-index: 9;
  top: 15px;
  right: 14px;
`,ds=j.span`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 8px;
`,fs=j.span`
  & span {
    color: var(--accent);
  }
`,ps=j.button`
  color: #ffffff;
  border-color: transparent;
  font-weight: 600;
  background-color: var(--accent);
  border-radius: 12px;
  padding: 12px;
  width: 100%;
  max-width: 274px;
  transition: background-color 0.2s ease-in-out;
  margin-top: auto;

  &:hover {
    background-color: var(--hover-accent);
  }
`,gs=({car:e})=>{const{isOpen:s,open:t,close:r}=Jr(!1),n=pt(rr),{id:a,year:u,make:b,model:h,img:F,rentalPrice:V,address:v}=e,[m,I]=ee.useState(JSON.parse(localStorage.getItem(`iconActive ${a}`))||!1),k=ht();ee.useEffect(()=>{localStorage.setItem(`iconActive ${a}`,JSON.stringify(m))},[m,a]);const O={fill:m?"var(--accent)":"none",stroke:m?"var(--accent)":"#ffffff"},z=ir(e),ue=nr(v,e),_=n==null?void 0:n.some(W=>W.id===a),U=()=>{k(_?Xt(e):Zt(e)),I(!_)};return c.jsx(c.Fragment,{children:c.jsxs(ls,{children:[c.jsx(us,{type:"button",onClick:U,children:c.jsx(cs,{style:O,children:c.jsx("use",{href:`${Qt}#heart`})})}),c.jsx(He,{src:F||Hr,alt:`${b} ${h}`,loading:"lazy"}),c.jsxs(ds,{children:[c.jsxs(fs,{children:[b,c.jsxs("span",{children:[" ",h]}),", ",u]}),c.jsx("span",{children:V})]}),c.jsx(Mt,{locationData:ue,carData:z}),c.jsx(ps,{label:"Learn more",onClick:t,children:"Learn more"}),s&&c.jsx(qt,{isOpen:s,onClose:r,children:c.jsx(Lt,{car:e})})]})})};gs.propTypes={car:x.shape({id:x.number.isRequired,year:x.number.isRequired,make:x.string.isRequired,model:x.string.isRequired,type:x.string.isRequired,img:x.string.isRequired,description:x.string.isRequired,functionalities:x.array.isRequired,rentalPrice:x.string.isRequired,rentalCompany:x.string.isRequired,address:x.string.isRequired,mileage:x.number.isRequired}).isRequired,fav:x.bool};export{gs as C,Fs as F,sr as a,ws as b,rr as c,gr as d,Jr as e,_s as f,vs as s,ht as u};
