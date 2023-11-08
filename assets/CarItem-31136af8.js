import{R as _e,f as zt,h as Wt,j as u,r as ie,i as C,s as D,u as ht,k as Ht,e as Kt,l as Gt,m as Yt,b as Jt,n as Qt,o as Xt}from"./index-f9102487.js";import{P as y}from"./index-3923a116.js";function gt(e=_e){const s=e===_e?zt:Wt(e);return function(){const{store:r}=s();return r}}const Zt=gt();function er(e=_e){const s=e===_e?Zt:gt(e);return function(){return s().dispatch}}const pt=er(),cs=e=>e.cars.items,tr=e=>e.cars.favorites,rr=e=>e.cars.filter,yt=e=>{const s=e.split(", "),t=s[1],r=s[s.length-1];return{city:t,country:r}},sr=e=>{const{type:s,mileage:t,functionalities:r}=e;return{type:s,mileage:t,functionalities:r}},ir=(e,s)=>{const{city:t,country:r}=yt(e),{rentalCompany:n}=s;return[t,r,n]},Be=(e,s)=>e.map((t,r)=>u.jsxs("li",{children:[t,r<e.length-1&&s]},r)),nr=e=>{if(!e||e.length===0)return"";let s=e[0];for(let r=1;r<e.length;r++){const n=e[r];n.split(" ").length<s.split(" ").length&&(s=n)}const t=s.split(" ");return t.length>3?t.slice(0,3).join(" "):s},or=(e,s)=>e==="functionalities"?nr(s):e==="type"?s.split(",")[0].trim():s,ds=(e,s)=>e==null?void 0:e.slice(0,s),ar=({target:e,currentTarget:s,code:t},r)=>{(e===s||t==="Escape")&&r()},lr=(e,s)=>{const{city:t,country:r}=yt(e),{year:n,type:a,id:c}=s;return[t,r,`Id: ${c}`,`Year: ${n}`,`Type: ${a}`]},ur=e=>{const{fuelConsumption:s,engineSize:t}=e;return[`Fuel Consumption: ${s}`,`Engine Size: ${t}`]},cr=e=>{const s=e.split(`
`),t=s[0].split(" ").slice(-1).join("");return s[0]=s[0].replace(t,""),s.splice(1,0,t),s},dr=e=>e.toLocaleString("en-EN"),xt=e=>e.split("").slice(1).join(""),fr=e=>{if(!Array.isArray(e)||!e.length)return[];let s=0;const t=[];if(e.forEach(n=>{const a=+xt(n.rentalPrice);a>s&&(s=a)}),s===0)return[];let r=10;for(;r<=s;)t.push(r),r+=10;return t},fs=(e,s)=>s?e.filter(t=>{const r=parseInt(t.rentalPrice.substring(1)),n=parseFloat(t.mileage),a=!s.brand||t.make.toLowerCase()===s.brand.toLowerCase(),c=!s.price||r<=s.price,b=!s.from||n>=s.from,p=!s.to||n<=s.to,w=!s.rentalCompany||t.rentalCompany.toLowerCase()===s.rentalCompany.toLowerCase();return a&&c&&b&&p&&w}):e,hr=(e,s)=>{const[t,r]=ie.useState([]);return ie.useEffect(()=>{if(!s)return;const n=[...new Set(e.map(a=>a[s]))];r(n)},[e,s]),t};var ge=e=>e.type==="checkbox",ue=e=>e instanceof Date,I=e=>e==null;const mt=e=>typeof e=="object";var T=e=>!I(e)&&!Array.isArray(e)&&mt(e)&&!ue(e),bt=e=>T(e)&&e.target?ge(e.target)?e.target.checked:e.target.value:e,gr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,vt=(e,s)=>e.has(gr(s)),pr=e=>{const s=e.constructor&&e.constructor.prototype;return T(s)&&s.hasOwnProperty("isPrototypeOf")},Pe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function W(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Pe&&(e instanceof Blob||e instanceof FileList))&&(t||T(e)))if(s=t?[]:{},!t&&!pr(e))s=e;else for(const r in e)e.hasOwnProperty(r)&&(s[r]=W(e[r]));else return e;return s}var pe=e=>Array.isArray(e)?e.filter(Boolean):[],S=e=>e===void 0,h=(e,s,t)=>{if(!s||!T(e))return t;const r=pe(s.split(/[,[\].]+?/)).reduce((n,a)=>I(n)?n:n[a],e);return S(r)||r===e?S(e[s])?t:e[s]:r},Y=e=>typeof e=="boolean";const Fe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},H={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},yr=C.createContext(null),Ue=()=>C.useContext(yr);var _t=(e,s,t,r=!0)=>{const n={defaultValues:s._defaultValues};for(const a in e)Object.defineProperty(n,a,{get:()=>{const c=a;return s._proxyFormState[c]!==H.all&&(s._proxyFormState[c]=!r||H.all),t&&(t[c]=!0),e[c]}});return n},N=e=>T(e)&&!Object.keys(e).length,Ft=(e,s,t,r)=>{t(e);const{name:n,...a}=e;return N(a)||Object.keys(a).length>=Object.keys(s).length||Object.keys(a).find(c=>s[c]===(!r||H.all))},me=e=>Array.isArray(e)?e:[e],Vt=(e,s,t)=>!e||!s||e===s||me(e).some(r=>r&&(t?r===s:r.startsWith(s)||s.startsWith(r)));function $e(e){const s=C.useRef(e);s.current=e,C.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function xr(e){const s=Ue(),{control:t=s.control,disabled:r,name:n,exact:a}=e||{},[c,b]=C.useState(t._formState),p=C.useRef(!0),w=C.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),V=C.useRef(n);return V.current=n,$e({disabled:r,next:m=>p.current&&Vt(V.current,m.name,a)&&Ft(m,w.current,t._updateFormState)&&b({...t._formState,...m}),subject:t._subjects.state}),C.useEffect(()=>(p.current=!0,w.current.isValid&&t._updateValid(!0),()=>{p.current=!1}),[t]),_t(c,t,w.current,!1)}var J=e=>typeof e=="string",wt=(e,s,t,r,n)=>J(e)?(r&&s.watch.add(e),h(t,e,n)):Array.isArray(e)?e.map(a=>(r&&s.watch.add(a),h(t,a))):(r&&(s.watchAll=!0),t);function mr(e){const s=Ue(),{control:t=s.control,name:r,defaultValue:n,disabled:a,exact:c}=e||{},b=C.useRef(r);b.current=r,$e({disabled:a,subject:t._subjects.values,next:V=>{Vt(b.current,V.name,c)&&w(W(wt(b.current,t._names,V.values||t._formValues,!1,n)))}});const[p,w]=C.useState(t._getWatch(r,n));return C.useEffect(()=>t._removeUnmounted()),p}var Ne=e=>/^\w*$/.test(e),jt=e=>pe(e.replace(/["|']|\]/g,"").split(/\.|\[/));function k(e,s,t){let r=-1;const n=Ne(s)?[s]:jt(s),a=n.length,c=a-1;for(;++r<a;){const b=n[r];let p=t;if(r!==c){const w=e[b];p=T(w)||Array.isArray(w)?w:isNaN(+n[r+1])?{}:[]}e[b]=p,e=e[b]}return e}function br(e){const s=Ue(),{name:t,disabled:r,control:n=s.control,shouldUnregister:a}=e,c=vt(n._names.array,t),b=mr({control:n,name:t,defaultValue:h(n._formValues,t,h(n._defaultValues,t,e.defaultValue)),exact:!0}),p=xr({control:n,name:t}),w=C.useRef(n.register(t,{...e.rules,value:b}));return w.current=n.register(t,e.rules),C.useEffect(()=>{const V=n._options.shouldUnregister||a,m=(v,O)=>{const A=h(n._fields,v);A&&(A._f.mount=O)};if(m(t,!0),V){const v=W(h(n._options.defaultValues,t));k(n._defaultValues,t,v),S(h(n._formValues,t))&&k(n._formValues,t,v)}return()=>{(c?V&&!n._state.action:V)?n.unregister(t):m(t,!1)}},[t,n,c,a]),C.useEffect(()=>{h(n._fields,t)&&n._updateDisabledField({disabled:r,fields:n._fields,name:t,value:h(n._fields,t)._f.value})},[r,t,n]),{field:{name:t,value:b,...Y(r)||Y(p.disabled)?{disabled:p.disabled||r}:{},onChange:C.useCallback(V=>w.current.onChange({target:{value:bt(V),name:t},type:Fe.CHANGE}),[t]),onBlur:C.useCallback(()=>w.current.onBlur({target:{value:h(n._formValues,t),name:t},type:Fe.BLUR}),[t,n]),ref:V=>{const m=h(n._fields,t);m&&V&&(m._f.ref={focus:()=>V.focus(),select:()=>V.select(),setCustomValidity:v=>V.setCustomValidity(v),reportValidity:()=>V.reportValidity()})}},formState:p,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!h(p.errors,t)},isDirty:{enumerable:!0,get:()=>!!h(p.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!h(p.touchedFields,t)},error:{enumerable:!0,get:()=>h(p.errors,t)}})}}const st=e=>e.render(br(e));var vr=(e,s,t,r,n)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[r]:n||!0}}:{},it=e=>({isOnSubmit:!e||e===H.onSubmit,isOnBlur:e===H.onBlur,isOnChange:e===H.onChange,isOnAll:e===H.all,isOnTouch:e===H.onTouched}),nt=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const be=(e,s,t,r)=>{for(const n of t||Object.keys(e)){const a=h(e,n);if(a){const{_f:c,...b}=a;if(c){if(c.refs&&c.refs[0]&&s(c.refs[0],n)&&!r)break;if(c.ref&&s(c.ref,c.name)&&!r)break}else T(b)&&be(b,s)}}};var _r=(e,s,t)=>{const r=pe(h(e,t));return k(r,"root",s[t]),k(e,t,r),e},ze=e=>e.type==="file",ee=e=>typeof e=="function",Ve=e=>{if(!Pe)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>J(e),We=e=>e.type==="radio",we=e=>e instanceof RegExp;const ot={value:!1,isValid:!1},at={value:!0,isValid:!0};var At=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!S(e[0].attributes.value)?S(e[0].value)||e[0].value===""?at:{value:e[0].value,isValid:!0}:at:ot}return ot};const lt={isValid:!1,value:null};var Rt=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,lt):lt;function ut(e,s,t="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||Y(e)&&!e)return{type:t,message:ve(e)?e:"",ref:s}}var ae=e=>T(e)&&!we(e)?e:{value:e,message:""},ct=async(e,s,t,r,n)=>{const{ref:a,refs:c,required:b,maxLength:p,minLength:w,min:V,max:m,pattern:v,validate:O,name:A,valueAsNumber:B,mount:U,disabled:ce}=e._f,_=h(s,A);if(!U||ce)return{};const z=c?c[0]:a,Q=j=>{r&&z.reportValidity&&(z.setCustomValidity(Y(j)?"":j||""),z.reportValidity())},L={},de=We(a),ne=ge(a),ke=de||ne,K=(B||ze(a))&&S(a.value)&&S(_)||Ve(a)&&a.value===""||_===""||Array.isArray(_)&&!_.length,te=vr.bind(null,A,t,L),X=(j,F,q,P=Z.maxLength,$=Z.minLength)=>{const G=j?F:q;L[A]={type:j?P:$,message:G,ref:a,...te(j?P:$,G)}};if(n?!Array.isArray(_)||!_.length:b&&(!ke&&(K||I(_))||Y(_)&&!_||ne&&!At(c).isValid||de&&!Rt(c).isValid)){const{value:j,message:F}=ve(b)?{value:!!b,message:b}:ae(b);if(j&&(L[A]={type:Z.required,message:F,ref:z,...te(Z.required,F)},!t))return Q(F),L}if(!K&&(!I(V)||!I(m))){let j,F;const q=ae(m),P=ae(V);if(!I(_)&&!isNaN(_)){const $=a.valueAsNumber||_&&+_;I(q.value)||(j=$>q.value),I(P.value)||(F=$<P.value)}else{const $=a.valueAsDate||new Date(_),G=ye=>new Date(new Date().toDateString()+" "+ye),re=a.type=="time",fe=a.type=="week";J(q.value)&&_&&(j=re?G(_)>G(q.value):fe?_>q.value:$>new Date(q.value)),J(P.value)&&_&&(F=re?G(_)<G(P.value):fe?_<P.value:$<new Date(P.value))}if((j||F)&&(X(!!j,q.message,P.message,Z.max,Z.min),!t))return Q(L[A].message),L}if((p||w)&&!K&&(J(_)||n&&Array.isArray(_))){const j=ae(p),F=ae(w),q=!I(j.value)&&_.length>+j.value,P=!I(F.value)&&_.length<+F.value;if((q||P)&&(X(q,j.message,F.message),!t))return Q(L[A].message),L}if(v&&!K&&J(_)){const{value:j,message:F}=ae(v);if(we(j)&&!_.match(j)&&(L[A]={type:Z.pattern,message:F,ref:a,...te(Z.pattern,F)},!t))return Q(F),L}if(O){if(ee(O)){const j=await O(_,s),F=ut(j,z);if(F&&(L[A]={...F,...te(Z.validate,F.message)},!t))return Q(F.message),L}else if(T(O)){let j={};for(const F in O){if(!N(j)&&!t)break;const q=ut(await O[F](_,s),z,F);q&&(j={...q,...te(F,q.message)},Q(q.message),t&&(L[A]=j))}if(!N(j)&&(L[A]={ref:z,...j},!t))return L}}return Q(!0),L};function Fr(e,s){const t=s.slice(0,-1).length;let r=0;for(;r<t;)e=S(e)?r++:e[s[r++]];return e}function Vr(e){for(const s in e)if(e.hasOwnProperty(s)&&!S(e[s]))return!1;return!0}function M(e,s){const t=Array.isArray(s)?s:Ne(s)?[s]:jt(s),r=t.length===1?e:Fr(e,t),n=t.length-1,a=t[n];return r&&delete r[a],n!==0&&(T(r)&&N(r)||Array.isArray(r)&&Vr(r))&&M(e,t.slice(0,-1)),e}function Te(){let e=[];return{get observers(){return e},next:n=>{for(const a of e)a.next&&a.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(a=>a!==n)}}),unsubscribe:()=>{e=[]}}}var je=e=>I(e)||!mt(e);function se(e,s){if(je(e)||je(s))return e===s;if(ue(e)&&ue(s))return e.getTime()===s.getTime();const t=Object.keys(e),r=Object.keys(s);if(t.length!==r.length)return!1;for(const n of t){const a=e[n];if(!r.includes(n))return!1;if(n!=="ref"){const c=s[n];if(ue(a)&&ue(c)||T(a)&&T(c)||Array.isArray(a)&&Array.isArray(c)?!se(a,c):a!==c)return!1}}return!0}var kt=e=>e.type==="select-multiple",wr=e=>We(e)||ge(e),Le=e=>Ve(e)&&e.isConnected,Ct=e=>{for(const s in e)if(ee(e[s]))return!0;return!1};function Ae(e,s={}){const t=Array.isArray(e);if(T(e)||t)for(const r in e)Array.isArray(e[r])||T(e[r])&&!Ct(e[r])?(s[r]=Array.isArray(e[r])?[]:{},Ae(e[r],s[r])):I(e[r])||(s[r]=!0);return s}function Dt(e,s,t){const r=Array.isArray(e);if(T(e)||r)for(const n in e)Array.isArray(e[n])||T(e[n])&&!Ct(e[n])?S(s)||je(t[n])?t[n]=Array.isArray(e[n])?Ae(e[n],[]):{...Ae(e[n])}:Dt(e[n],I(s)?{}:s[n],t[n]):t[n]=!se(e[n],s[n]);return t}var Me=(e,s)=>Dt(e,s,Ae(s)),St=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:r})=>S(e)?e:s?e===""?NaN:e&&+e:t&&J(e)?new Date(e):r?r(e):e;function Oe(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return ze(s)?s.files:We(s)?Rt(e.refs).value:kt(s)?[...s.selectedOptions].map(({value:t})=>t):ge(s)?At(e.refs).value:St(S(s.value)?e.ref.value:s.value,e)}var jr=(e,s,t,r)=>{const n={};for(const a of e){const c=h(s,a);c&&k(n,a,c._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:r}},he=e=>S(e)?e:we(e)?e.source:T(e)?we(e.value)?e.value.source:e.value:e,Ar=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function dt(e,s,t){const r=h(e,t);if(r||Ne(t))return{error:r,name:t};const n=t.split(".");for(;n.length;){const a=n.join("."),c=h(s,a),b=h(e,a);if(c&&!Array.isArray(c)&&t!==a)return{name:t};if(b&&b.type)return{name:a,error:b};n.pop()}return{name:t}}var Rr=(e,s,t,r,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(s||e):(t?r.isOnBlur:n.isOnBlur)?!e:(t?r.isOnChange:n.isOnChange)?e:!0,kr=(e,s)=>!pe(h(e,s)).length&&M(e,s);const Cr={mode:H.onSubmit,reValidateMode:H.onChange,shouldFocusError:!0};function Dr(e={},s){let t={...Cr,...e},r={submitCount:0,isDirty:!1,isLoading:ee(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},n={},a=T(t.defaultValues)||T(t.values)?W(t.defaultValues||t.values)||{}:{},c=t.shouldUnregister?{}:W(a),b={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w,V=0;const m={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Te(),array:Te(),state:Te()},O=e.resetOptions&&e.resetOptions.keepDirtyValues,A=it(t.mode),B=it(t.reValidateMode),U=t.criteriaMode===H.all,ce=i=>o=>{clearTimeout(V),V=setTimeout(i,o)},_=async i=>{if(m.isValid||i){const o=t.resolver?N((await K()).errors):await X(n,!0);o!==r.isValid&&v.state.next({isValid:o})}},z=i=>m.isValidating&&v.state.next({isValidating:i}),Q=(i,o=[],l,g,f=!0,d=!0)=>{if(g&&l){if(b.action=!0,d&&Array.isArray(h(n,i))){const x=l(h(n,i),g.argA,g.argB);f&&k(n,i,x)}if(d&&Array.isArray(h(r.errors,i))){const x=l(h(r.errors,i),g.argA,g.argB);f&&k(r.errors,i,x),kr(r.errors,i)}if(m.touchedFields&&d&&Array.isArray(h(r.touchedFields,i))){const x=l(h(r.touchedFields,i),g.argA,g.argB);f&&k(r.touchedFields,i,x)}m.dirtyFields&&(r.dirtyFields=Me(a,c)),v.state.next({name:i,isDirty:F(i,o),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else k(c,i,o)},L=(i,o)=>{k(r.errors,i,o),v.state.next({errors:r.errors})},de=(i,o,l,g)=>{const f=h(n,i);if(f){const d=h(c,i,S(l)?h(a,i):l);S(d)||g&&g.defaultChecked||o?k(c,i,o?d:Oe(f._f)):$(i,d),b.mount&&_()}},ne=(i,o,l,g,f)=>{let d=!1,x=!1;const R={name:i};if(!l||g){m.isDirty&&(x=r.isDirty,r.isDirty=R.isDirty=F(),d=x!==R.isDirty);const E=se(h(a,i),o);x=h(r.dirtyFields,i),E?M(r.dirtyFields,i):k(r.dirtyFields,i,!0),R.dirtyFields=r.dirtyFields,d=d||m.dirtyFields&&x!==!E}if(l){const E=h(r.touchedFields,i);E||(k(r.touchedFields,i,l),R.touchedFields=r.touchedFields,d=d||m.touchedFields&&E!==l)}return d&&f&&v.state.next(R),d?R:{}},ke=(i,o,l,g)=>{const f=h(r.errors,i),d=m.isValid&&Y(o)&&r.isValid!==o;if(e.delayError&&l?(w=ce(()=>L(i,l)),w(e.delayError)):(clearTimeout(V),w=null,l?k(r.errors,i,l):M(r.errors,i)),(l?!se(f,l):f)||!N(g)||d){const x={...g,...d&&Y(o)?{isValid:o}:{},errors:r.errors,name:i};r={...r,...x},v.state.next(x)}z(!1)},K=async i=>t.resolver(c,t.context,jr(i||p.mount,n,t.criteriaMode,t.shouldUseNativeValidation)),te=async i=>{const{errors:o}=await K(i);if(i)for(const l of i){const g=h(o,l);g?k(r.errors,l,g):M(r.errors,l)}else r.errors=o;return o},X=async(i,o,l={valid:!0})=>{for(const g in i){const f=i[g];if(f){const{_f:d,...x}=f;if(d){const R=p.array.has(d.name),E=await ct(f,c,U,t.shouldUseNativeValidation&&!o,R);if(E[d.name]&&(l.valid=!1,o))break;!o&&(h(E,d.name)?R?_r(r.errors,E,d.name):k(r.errors,d.name,E[d.name]):M(r.errors,d.name))}x&&await X(x,o,l)}}return l.valid},j=()=>{for(const i of p.unMount){const o=h(n,i);o&&(o._f.refs?o._f.refs.every(l=>!Le(l)):!Le(o._f.ref))&&De(i)}p.unMount=new Set},F=(i,o)=>(i&&o&&k(c,i,o),!se(Ke(),a)),q=(i,o,l)=>wt(i,p,{...b.mount?c:S(o)?a:J(i)?{[i]:o}:o},l,o),P=i=>pe(h(b.mount?c:a,i,e.shouldUnregister?h(a,i,[]):[])),$=(i,o,l={})=>{const g=h(n,i);let f=o;if(g){const d=g._f;d&&(!d.disabled&&k(c,i,St(o,d)),f=Ve(d.ref)&&I(o)?"":o,kt(d.ref)?[...d.ref.options].forEach(x=>x.selected=f.includes(x.value)):d.refs?ge(d.ref)?d.refs.length>1?d.refs.forEach(x=>(!x.defaultChecked||!x.disabled)&&(x.checked=Array.isArray(f)?!!f.find(R=>R===x.value):f===x.value)):d.refs[0]&&(d.refs[0].checked=!!f):d.refs.forEach(x=>x.checked=x.value===f):ze(d.ref)?d.ref.value="":(d.ref.value=f,d.ref.type||v.values.next({name:i,values:{...c}})))}(l.shouldDirty||l.shouldTouch)&&ne(i,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&Ce(i)},G=(i,o,l)=>{for(const g in o){const f=o[g],d=`${i}.${g}`,x=h(n,d);(p.array.has(i)||!je(f)||x&&!x._f)&&!ue(f)?G(d,f,l):$(d,f,l)}},re=(i,o,l={})=>{const g=h(n,i),f=p.array.has(i),d=W(o);k(c,i,d),f?(v.array.next({name:i,values:{...c}}),(m.isDirty||m.dirtyFields)&&l.shouldDirty&&v.state.next({name:i,dirtyFields:Me(a,c),isDirty:F(i,d)})):g&&!g._f&&!I(d)?G(i,d,l):$(i,d,l),nt(i,p)&&v.state.next({...r}),v.values.next({name:i,values:{...c}}),!b.mount&&s()},fe=async i=>{const o=i.target;let l=o.name,g=!0;const f=h(n,l),d=()=>o.type?Oe(f._f):bt(i),x=R=>{g=Number.isNaN(R)||R===h(c,l,R)};if(f){let R,E;const xe=d(),oe=i.type===Fe.BLUR||i.type===Fe.FOCUS_OUT,Ut=!Ar(f._f)&&!t.resolver&&!h(r.errors,l)&&!f._f.deps||Rr(oe,h(r.touchedFields,l),r.isSubmitted,B,A),qe=nt(l,p,oe);k(c,l,xe),oe?(f._f.onBlur&&f._f.onBlur(i),w&&w(0)):f._f.onChange&&f._f.onChange(i);const Ee=ne(l,xe,oe,!1),$t=!N(Ee)||qe;if(!oe&&v.values.next({name:l,type:i.type,values:{...c}}),Ut)return m.isValid&&_(),$t&&v.state.next({name:l,...qe?{}:Ee});if(!oe&&qe&&v.state.next({...r}),z(!0),t.resolver){const{errors:tt}=await K([l]);if(x(xe),g){const Nt=dt(r.errors,n,l),rt=dt(tt,n,Nt.name||l);R=rt.error,l=rt.name,E=N(tt)}}else R=(await ct(f,c,U,t.shouldUseNativeValidation))[l],x(xe),g&&(R?E=!1:m.isValid&&(E=await X(n,!0)));g&&(f._f.deps&&Ce(f._f.deps),ke(l,E,R,Ee))}},ye=(i,o)=>{if(h(r.errors,o)&&i.focus)return i.focus(),1},Ce=async(i,o={})=>{let l,g;const f=me(i);if(z(!0),t.resolver){const d=await te(S(i)?i:f);l=N(d),g=i?!f.some(x=>h(d,x)):l}else i?(g=(await Promise.all(f.map(async d=>{const x=h(n,d);return await X(x&&x._f?{[d]:x}:x)}))).every(Boolean),!(!g&&!r.isValid)&&_()):g=l=await X(n);return v.state.next({...!J(i)||m.isValid&&l!==r.isValid?{}:{name:i},...t.resolver||!i?{isValid:l}:{},errors:r.errors,isValidating:!1}),o.shouldFocus&&!g&&be(n,ye,i?f:p.mount),g},Ke=i=>{const o={...a,...b.mount?c:{}};return S(i)?o:J(i)?h(o,i):i.map(l=>h(o,l))},Ge=(i,o)=>({invalid:!!h((o||r).errors,i),isDirty:!!h((o||r).dirtyFields,i),isTouched:!!h((o||r).touchedFields,i),error:h((o||r).errors,i)}),Ot=i=>{i&&me(i).forEach(o=>M(r.errors,o)),v.state.next({errors:i?r.errors:{}})},Ye=(i,o,l)=>{const g=(h(n,i,{_f:{}})._f||{}).ref;k(r.errors,i,{...o,ref:g}),v.state.next({name:i,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&g&&g.focus&&g.focus()},Bt=(i,o)=>ee(i)?v.values.subscribe({next:l=>i(q(void 0,o),l)}):q(i,o,!0),De=(i,o={})=>{for(const l of i?me(i):p.mount)p.mount.delete(l),p.array.delete(l),o.keepValue||(M(n,l),M(c,l)),!o.keepError&&M(r.errors,l),!o.keepDirty&&M(r.dirtyFields,l),!o.keepTouched&&M(r.touchedFields,l),!t.shouldUnregister&&!o.keepDefaultValue&&M(a,l);v.values.next({values:{...c}}),v.state.next({...r,...o.keepDirty?{isDirty:F()}:{}}),!o.keepIsValid&&_()},Je=({disabled:i,name:o,field:l,fields:g,value:f})=>{if(Y(i)){const d=i?void 0:S(f)?Oe(l?l._f:h(g,o)._f):f;k(c,o,d),ne(o,d,!1,!1,!0)}},Se=(i,o={})=>{let l=h(n,i);const g=Y(o.disabled);return k(n,i,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:i}},name:i,mount:!0,...o}}),p.mount.add(i),l?Je({field:l,disabled:o.disabled,name:i}):de(i,!0,o.value),{...g?{disabled:o.disabled}:{},...t.progressive?{required:!!o.required,min:he(o.min),max:he(o.max),minLength:he(o.minLength),maxLength:he(o.maxLength),pattern:he(o.pattern)}:{},name:i,onChange:fe,onBlur:fe,ref:f=>{if(f){Se(i,o),l=h(n,i);const d=S(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,x=wr(d),R=l._f.refs||[];if(x?R.find(E=>E===d):d===l._f.ref)return;k(n,i,{_f:{...l._f,...x?{refs:[...R.filter(Le),d,...Array.isArray(h(a,i))?[{}]:[]],ref:{type:d.type,name:i}}:{ref:d}}}),de(i,!1,void 0,d)}else l=h(n,i,{}),l._f&&(l._f.mount=!1),(t.shouldUnregister||o.shouldUnregister)&&!(vt(p.array,i)&&b.action)&&p.unMount.add(i)}}},Qe=()=>t.shouldFocusError&&be(n,ye,p.mount),It=i=>{Y(i)&&(v.state.next({disabled:i}),be(n,o=>{o.disabled=i},0,!1))},Xe=(i,o)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let g=W(c);if(v.state.next({isSubmitting:!0}),t.resolver){const{errors:f,values:d}=await K();r.errors=f,g=d}else await X(n);M(r.errors,"root"),N(r.errors)?(v.state.next({errors:{}}),await i(g,l)):(o&&await o({...r.errors},l),Qe(),setTimeout(Qe)),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:N(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Pt=(i,o={})=>{h(n,i)&&(S(o.defaultValue)?re(i,h(a,i)):(re(i,o.defaultValue),k(a,i,o.defaultValue)),o.keepTouched||M(r.touchedFields,i),o.keepDirty||(M(r.dirtyFields,i),r.isDirty=o.defaultValue?F(i,h(a,i)):F()),o.keepError||(M(r.errors,i),m.isValid&&_()),v.state.next({...r}))},Ze=(i,o={})=>{const l=i?W(i):a,g=W(l),f=i&&!N(i)?g:a;if(o.keepDefaultValues||(a=l),!o.keepValues){if(o.keepDirtyValues||O)for(const d of p.mount)h(r.dirtyFields,d)?k(f,d,h(c,d)):re(d,h(f,d));else{if(Pe&&S(i))for(const d of p.mount){const x=h(n,d);if(x&&x._f){const R=Array.isArray(x._f.refs)?x._f.refs[0]:x._f.ref;if(Ve(R)){const E=R.closest("form");if(E){E.reset();break}}}}n={}}c=e.shouldUnregister?o.keepDefaultValues?W(a):{}:W(f),v.array.next({values:{...f}}),v.values.next({values:{...f}})}p={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!b.mount&&s(),b.mount=!m.isValid||!!o.keepIsValid,b.watch=!!e.shouldUnregister,v.state.next({submitCount:o.keepSubmitCount?r.submitCount:0,isDirty:o.keepDirty?r.isDirty:!!(o.keepDefaultValues&&!se(i,a)),isSubmitted:o.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:o.keepDirtyValues?r.dirtyFields:o.keepDefaultValues&&i?Me(a,i):{},touchedFields:o.keepTouched?r.touchedFields:{},errors:o.keepErrors?r.errors:{},isSubmitSuccessful:o.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},et=(i,o)=>Ze(ee(i)?i(c):i,o);return{control:{register:Se,unregister:De,getFieldState:Ge,handleSubmit:Xe,setError:Ye,_executeSchema:K,_getWatch:q,_getDirty:F,_updateValid:_,_removeUnmounted:j,_updateFieldArray:Q,_updateDisabledField:Je,_getFieldArray:P,_reset:Ze,_resetDefaultValues:()=>ee(t.defaultValues)&&t.defaultValues().then(i=>{et(i,t.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:i=>{r={...r,...i}},_disableForm:It,_subjects:v,_proxyFormState:m,get _fields(){return n},get _formValues(){return c},get _state(){return b},set _state(i){b=i},get _defaultValues(){return a},get _names(){return p},set _names(i){p=i},get _formState(){return r},set _formState(i){r=i},get _options(){return t},set _options(i){t={...t,...i}}},trigger:Ce,register:Se,handleSubmit:Xe,watch:Bt,setValue:re,getValues:Ke,reset:et,resetField:Pt,clearErrors:Ot,unregister:De,setError:Ye,setFocus:(i,o={})=>{const l=h(n,i),g=l&&l._f;if(g){const f=g.refs?g.refs[0]:g.ref;f.focus&&(f.focus(),o.shouldSelect&&f.select())}},getFieldState:Ge}}function Sr(e={}){const s=C.useRef(),t=C.useRef(),[r,n]=C.useState({isDirty:!1,isValidating:!1,isLoading:ee(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:ee(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Dr(e,()=>n(c=>({...c}))),formState:r});const a=s.current.control;return a._options=e,$e({subject:a._subjects.state,next:c=>{Ft(c,a._proxyFormState,a._updateFormState,!0)&&n({...a._formState})}}),C.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),C.useEffect(()=>{if(a._proxyFormState.isDirty){const c=a._getDirty();c!==r.isDirty&&a._subjects.state.next({isDirty:c})}},[a,r.isDirty]),C.useEffect(()=>{e.values&&!se(e.values,t.current)?(a._reset(e.values,a._options.resetOptions),t.current=e.values):a._resetDefaultValues()},[e.values,a]),C.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),s.current.formState=_t(r,a),s.current}const qr=D.form`
  max-width: 1050px;
  margin: 20px auto;
`,Er=D.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`,Tr=D.div`
  display: flex;
  margin-right: 18px;

  & label {
    color: #8a8a89;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.285;
  }
`,Lr=D.select`
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
`,Mr=D.select`
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
`,Or=D.div`
  display: flex;
  flex-direction: column;
`,Br=D.input`
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
`,Ir=D.input`
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
`,Pr=D.label`
  position: relative;
`,Ur=D.label`
  position: relative;
`,$r=D.span`
  position: absolute;
  left: 24px;
  bottom: 0;
  font-size: 18px;
  line-height: 1.11;
  font-weight: 500;
  color: var(--title-color);
`,Nr=D.span`
  position: absolute;
  left: 24px;
  bottom: 0;
  font-size: 18px;
  line-height: 1.11;
  font-weight: 500;
  color: var(--title-color);
`,zr=D.div`
  margin-bottom: auto;
  margin-top: 28px;
  display: flex;
  gap: 18px;
`,ft=D.button`
  border-color: transparent;
  color: #ffffff;
  background-color: var(--accent);
  padding: 10px 44px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  align-self: flex-end;
`,hs=({cars:e})=>{const s=ht(rr),t=pt(),{pathname:r}=Ht(),n=r==="/favorites"&&(e==null?void 0:e.length)===0,a=fr(e),c=hr(e,"make"),{register:b,handleSubmit:p,control:w,reset:V,formState:{errors:m}}=Sr({mode:"onChange",shouldDisable:n});ie.useEffect(()=>{V(s)},[s,V]);const v=A=>{t(Kt(A))},O=()=>{t(Gt()),V({brand:"",price:"",from:"",to:""})};return u.jsx(qr,{onSubmit:p(v),disabled:n,children:u.jsxs(Er,{children:[u.jsxs(Tr,{children:[u.jsxs(Or,{children:[u.jsx("label",{htmlFor:"brand",children:"Car brand"}),u.jsx(st,{name:"brand",control:w,rules:{required:!0,message:"Brand is required"},render:({field:A})=>u.jsxs(u.Fragment,{children:[u.jsxs(Lr,{...A,children:[u.jsx("option",{value:"",children:"Enter the text"}),c&&c.map((B,U)=>u.jsx("option",{value:B,children:B},U))]}),m.brand&&u.jsx("p",{className:`error ${n?"opacity-0":"opacity-100"}`,children:m.brand.type==="required"?"Brand is required":m.brand.message})]})})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"price",children:"Price/ 1 hour"}),u.jsx("div",{children:u.jsx(st,{name:"price",control:w,rules:{required:!0,min:{value:0,message:"Must be 0 or greater"}},render:({field:A})=>u.jsxs(u.Fragment,{children:[u.jsxs(Mr,{...A,children:[u.jsx("option",{value:"",children:"To $"}),a&&a.map((B,U)=>u.jsx("option",{value:B,children:B},U))]}),m.price&&u.jsx("p",{className:`${n?"opacity-0":"opacity-100"}`,children:m.price.type==="required"?"Price is required":m.price.message})]})})})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"minMileage",children:"Car mileage / km (from)"}),u.jsxs("div",{children:[u.jsxs(Pr,{children:[u.jsx(Br,{type:"number",...b("from",{required:"This field is required",min:{value:0,message:"Must be 0 or greater"}})}),u.jsx($r,{children:"From"})]}),u.jsxs(Ur,{children:[u.jsx(Ir,{type:"number",...b("to",{required:"This field is required",min:{value:0,message:"Must be 0 or greater"},validate:(A,{from:B})=>parseInt(A)>parseInt(B)?!0:"To must be greater than From"})}),u.jsx(Nr,{children:"To"})]}),u.jsxs("p",{className:` ${n?"opacity-0":"opacity-100"}`,children:[(m==null?void 0:m.from)&&u.jsx("span",{children:m.from.message}),(m==null?void 0:m.to)&&u.jsx("span",{children:m.to.message})]})]})]})]}),u.jsxs(zr,{children:[u.jsx(ft,{type:"submit",label:"Search",children:"Search"}),u.jsx(ft,{type:"button",onClick:O,label:"Reset",children:"Reset"})]})]})})},gs=D.div`
  max-width: 1190px;
  margin: 0 auto;
`,Wr="/RentedCars/assets/matureman-7c08ad59.jpg",Hr=(e=!1)=>{const[s,t]=ie.useState(e);return{isOpen:s,open:()=>t(!0),close:()=>t(!1),toggle:()=>t(c=>!c)}},Kr=D.button``,Gr=D.div`
  /* position: relative; */
  width: 100vw;
  height: 100vh;
  background-color: 'rgba(0, 0, 0, 0.5)';
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
`,Yr=D.div`
  position: absolute;
  right: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  width: 545px;
  height: 760px;
  z-index: 10;
`,Jr=document.getElementById("modal"),qt=({onClose:e,children:s,isOpen:t})=>{ie.useEffect(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow="visible"},[t]);const r=ie.useCallback(n=>{document.body.style.overflow="visible",ar(n,e)},[e]);return ie.useEffect(()=>(document.body.addEventListener("keydown",r),()=>document.body.removeEventListener("keydown",r)),[r]),Yt.createPortal(u.jsx(Gr,{onClick:r,children:u.jsxs(Yr,{children:[u.jsx(Kr,{onClick:e,type:"button",children:"❌"}),s]})}),Jr)};qt.propTypes={children:y.node.isRequired,onClose:y.func.isRequired,isOpen:y.bool};const Qr="/RentedCars/assets/youngman-08677e87.jpg",He=({src:e,alt:s,width:t,height:r})=>u.jsx("div",{children:u.jsx("img",{src:e?`${e}`:Qr,alt:s,width:t,height:r,loading:"lazy"})});He.propTypes={src:y.string.isRequired,alt:y.string.isRequired,className:y.string,blockClass:y.string,width:y.string.isRequired,height:y.string};const le=({conditionText:e,conditionValue:s})=>u.jsxs("li",{children:[u.jsx("p",{children:e}),s&&u.jsx("span",{children:s})]});le.propTypes={conditionText:y.string.isRequired,conditionValue:y.string};const Et=({rentConditions:e,mile:s,price:t,title:r})=>u.jsxs("div",{children:[u.jsxs("p",{children:[r,":"]}),u.jsxs("ul",{children:[u.jsx(le,{conditionText:e[0],conditionValue:e[1]}),u.jsx(le,{conditionText:e[2]}),u.jsx(le,{conditionText:e[3]}),u.jsx(le,{conditionText:"Mileage: ",conditionValue:s}),u.jsx(le,{conditionText:"Price: ",conditionValue:`${t}$`})]})]});Et.propTypes={rentConditions:y.array.isRequired,mile:y.string.isRequired,price:y.string.isRequired,title:y.string.isRequired};const Re=()=>u.jsx("span",{children:"|"}),Ie=({items:e,separator:s})=>u.jsx("ul",{children:e.map((t,r)=>u.jsxs("li",{children:[t,r<e.length-1&&s]},r))});Ie.propTypes={items:y.array.isRequired,separator:y.any};const Tt=({accessories:e,functionalities:s,title:t})=>u.jsxs("div",{children:[u.jsxs("p",{children:[t,":"]}),u.jsx(Ie,{items:e,separator:u.jsx(Re,{})}),u.jsx(Ie,{items:s,separator:u.jsx(Re,{})})]});Tt.propTypes={accessories:y.array.isRequired,functionalities:y.array.isRequired,title:y.string.isRequired};const Lt=({car:e})=>{const{year:s,make:t,model:r,img:n,rentalPrice:a,address:c,description:b,accessories:p,functionalities:w,rentalConditions:V,mileage:m}=e,v=ur(e),O=lr(c,e),A=cr(V),B=dr(m),U=xt(a);return u.jsxs(u.Fragment,{children:[u.jsx(He,{width:"461",height:"248",src:n,alt:`${t} ${r}`,loading:"lazy"}),u.jsxs("div",{children:[t," ",u.jsx("span",{children:r}),", ",s]}),u.jsxs("div",{children:[u.jsx("ul",{children:Be(O)}),u.jsx("ul",{children:Be(v)})]}),u.jsx("div",{children:b}),u.jsx(Tt,{title:"Accessories and functionalities",accessories:p,functionalities:w}),u.jsx(Et,{title:"Rental Conditions",rentConditions:A,mile:B,price:U}),u.jsx("a",{href:"tel:+380730000000",children:"Rental car"})]})};Lt.propTypes={car:y.shape({id:y.number.isRequired,year:y.number.isRequired,make:y.string.isRequired,model:y.string.isRequired,type:y.string.isRequired,img:y.string.isRequired,description:y.string.isRequired,functionalities:y.array.isRequired,rentalPrice:y.string.isRequired,rentalCompany:y.string.isRequired,address:y.string.isRequired,mileage:y.number.isRequired,accessories:y.array.isRequired,rentalConditions:y.string.isRequired}).isRequired};const Mt=({locationData:e,carData:s})=>u.jsxs(u.Fragment,{children:[u.jsx("ul",{children:Be(e,u.jsx(Re,{}))}),u.jsx("ul",{children:Object.entries(s).map(([t,r],n,a)=>u.jsxs("li",{children:[or(t,r),n<a.length-1&&u.jsx(Re,{})]},n))})]});Mt.propTypes={carData:y.object.isRequired,locationData:y.array.isRequired};const Xr=D.li`
  width: 275px;
  position: relative;

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
`,Zr=D.svg`
  width: 18px;
  height: 16px;
  stroke: #ffffff;
`,es=D.button`
  width: 25px;
  height: 22px;
  border: none;
  position: absolute;
  z-index: 10;
  top: 15px;
  right: 14px;
`,ts=D.span`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 8px;
`,rs=D.span`
  & span {
    color: var(--accent);
  }
`,ss=D.button`
  color: #ffffff;
  border-color: transparent;
  font-weight: 600;
  background-color: var(--accent);
  border-radius: 12px;
  padding: 12px;
  width: 100%;
  max-width: 274px;
  margin-top: 28px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--hover-accent);
  }
`,is=({car:e})=>{const{isOpen:s,open:t,close:r}=Hr(!1),n=ht(tr),a=pt(),{id:c,year:b,make:p,model:w,img:V,rentalPrice:m,address:v}=e,O=sr(e),A=ir(v,e),B=n==null?void 0:n.some(ce=>ce.id===c),U=()=>a(B?Qt(e):Xt(e));return u.jsx(u.Fragment,{children:u.jsxs(Xr,{children:[u.jsx(es,{type:"button",onClick:U,children:u.jsx(Zr,{children:u.jsx("use",{href:`${Jt}#heart`})})}),u.jsx(He,{src:V||Wr,alt:`${p} ${w}`,loading:"lazy"}),u.jsxs(ts,{children:[u.jsxs(rs,{children:[p,u.jsxs("span",{children:[" ",w]}),", ",b]}),u.jsx("span",{children:m})]}),u.jsx(Mt,{locationData:A,carData:O}),u.jsx(ss,{label:"Learn more",onClick:t,children:"Learn more"}),s&&u.jsx(qt,{isOpen:s,onClose:r,children:u.jsx(Lt,{car:e})})]})})};is.propTypes={car:y.shape({id:y.number.isRequired,year:y.number.isRequired,make:y.string.isRequired,model:y.string.isRequired,type:y.string.isRequired,img:y.string.isRequired,description:y.string.isRequired,functionalities:y.array.isRequired,rentalPrice:y.string.isRequired,rentalCompany:y.string.isRequired,address:y.string.isRequired,mileage:y.number.isRequired}).isRequired,fav:y.bool};export{is as C,hs as F,rr as a,fs as b,gs as c,tr as d,hr as e,ds as f,Hr as g,cs as s,pt as u};
