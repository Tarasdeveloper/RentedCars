import{R as _e,f as Nt,h as Wt,j as u,r as ie,i as D,s as A,u as ht,k as Ht,e as Kt,l as Gt,m as Yt,b as Jt,n as Qt,o as Xt}from"./index-b2146a08.js";import{P as y}from"./index-cb49479c.js";function pt(e=_e){const s=e===_e?Nt:Wt(e);return function(){const{store:r}=s();return r}}const Zt=pt();function er(e=_e){const s=e===_e?Zt:pt(e);return function(){return s().dispatch}}const gt=er(),gs=e=>e.cars.items,tr=e=>e.cars.favorites,rr=e=>e.cars.filter,yt=e=>{const s=e.split(", "),t=s[1],r=s[s.length-1];return{city:t,country:r}},sr=e=>{const{type:s,mileage:t,functionalities:r}=e;return{type:s,mileage:t,functionalities:r}},ir=(e,s)=>{const{city:t,country:r}=yt(e),{rentalCompany:n}=s;return[t,r,n]},Be=(e,s)=>e.map((t,r)=>u.jsxs("li",{children:[t,r<e.length-1&&s]},r)),nr=e=>{if(!e||e.length===0)return"";let s=e[0];for(let r=1;r<e.length;r++){const n=e[r];n.split(" ").length<s.split(" ").length&&(s=n)}const t=s.split(" ");return t.length>3?t.slice(0,3).join(" "):s},or=(e,s)=>e==="functionalities"?nr(s):e==="type"?s.split(",")[0].trim():s,ys=(e,s)=>e==null?void 0:e.slice(0,s),ar=({target:e,currentTarget:s,code:t},r)=>{(e===s||t==="Escape")&&r()},lr=(e,s)=>{const{city:t,country:r}=yt(e),{year:n,type:a,id:c}=s;return[t,r,`Id: ${c}`,`Year: ${n}`,`Type: ${a}`]},ur=e=>{const{fuelConsumption:s,engineSize:t}=e;return[`Fuel Consumption: ${s}`,`Engine Size: ${t}`]},cr=e=>{const s=e.split(`
`),t=s[0].split(" ").slice(-1).join("");return s[0]=s[0].replace(t,""),s.splice(1,0,t),s},dr=e=>e.toLocaleString("en-EN"),xt=e=>e.split("").slice(1).join(""),fr=e=>{if(!Array.isArray(e)||!e.length)return[];let s=0;const t=[];if(e.forEach(n=>{const a=+xt(n.rentalPrice);a>s&&(s=a)}),s===0)return[];let r=10;for(;r<=s;)t.push(r),r+=10;return t},xs=(e,s)=>s?e.filter(t=>{const r=parseInt(t.rentalPrice.substring(1)),n=parseFloat(t.mileage),a=!s.brand||t.make.toLowerCase()===s.brand.toLowerCase(),c=!s.price||r<=s.price,b=!s.from||n>=s.from,g=!s.to||n<=s.to,V=!s.rentalCompany||t.rentalCompany.toLowerCase()===s.rentalCompany.toLowerCase();return a&&c&&b&&g&&V}):e,hr=(e,s)=>{const[t,r]=ie.useState([]);return ie.useEffect(()=>{if(!s)return;const n=[...new Set(e.map(a=>a[s]))];r(n)},[e,s]),t};var pe=e=>e.type==="checkbox",ue=e=>e instanceof Date,I=e=>e==null;const mt=e=>typeof e=="object";var T=e=>!I(e)&&!Array.isArray(e)&&mt(e)&&!ue(e),bt=e=>T(e)&&e.target?pe(e.target)?e.target.checked:e.target.value:e,pr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,vt=(e,s)=>e.has(pr(s)),gr=e=>{const s=e.constructor&&e.constructor.prototype;return T(s)&&s.hasOwnProperty("isPrototypeOf")},Pe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function W(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Pe&&(e instanceof Blob||e instanceof FileList))&&(t||T(e)))if(s=t?[]:{},!t&&!gr(e))s=e;else for(const r in e)e.hasOwnProperty(r)&&(s[r]=W(e[r]));else return e;return s}var ge=e=>Array.isArray(e)?e.filter(Boolean):[],S=e=>e===void 0,h=(e,s,t)=>{if(!s||!T(e))return t;const r=ge(s.split(/[,[\].]+?/)).reduce((n,a)=>I(n)?n:n[a],e);return S(r)||r===e?S(e[s])?t:e[s]:r},Y=e=>typeof e=="boolean";const Fe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},H={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},yr=D.createContext(null),Ue=()=>D.useContext(yr);var _t=(e,s,t,r=!0)=>{const n={defaultValues:s._defaultValues};for(const a in e)Object.defineProperty(n,a,{get:()=>{const c=a;return s._proxyFormState[c]!==H.all&&(s._proxyFormState[c]=!r||H.all),t&&(t[c]=!0),e[c]}});return n},$=e=>T(e)&&!Object.keys(e).length,Ft=(e,s,t,r)=>{t(e);const{name:n,...a}=e;return $(a)||Object.keys(a).length>=Object.keys(s).length||Object.keys(a).find(c=>s[c]===(!r||H.all))},me=e=>Array.isArray(e)?e:[e],wt=(e,s,t)=>!e||!s||e===s||me(e).some(r=>r&&(t?r===s:r.startsWith(s)||s.startsWith(r)));function ze(e){const s=D.useRef(e);s.current=e,D.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function xr(e){const s=Ue(),{control:t=s.control,disabled:r,name:n,exact:a}=e||{},[c,b]=D.useState(t._formState),g=D.useRef(!0),V=D.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),w=D.useRef(n);return w.current=n,ze({disabled:r,next:m=>g.current&&wt(w.current,m.name,a)&&Ft(m,V.current,t._updateFormState)&&b({...t._formState,...m}),subject:t._subjects.state}),D.useEffect(()=>(g.current=!0,V.current.isValid&&t._updateValid(!0),()=>{g.current=!1}),[t]),_t(c,t,V.current,!1)}var J=e=>typeof e=="string",Vt=(e,s,t,r,n)=>J(e)?(r&&s.watch.add(e),h(t,e,n)):Array.isArray(e)?e.map(a=>(r&&s.watch.add(a),h(t,a))):(r&&(s.watchAll=!0),t);function mr(e){const s=Ue(),{control:t=s.control,name:r,defaultValue:n,disabled:a,exact:c}=e||{},b=D.useRef(r);b.current=r,ze({disabled:a,subject:t._subjects.values,next:w=>{wt(b.current,w.name,c)&&V(W(Vt(b.current,t._names,w.values||t._formValues,!1,n)))}});const[g,V]=D.useState(t._getWatch(r,n));return D.useEffect(()=>t._removeUnmounted()),g}var $e=e=>/^\w*$/.test(e),jt=e=>ge(e.replace(/["|']|\]/g,"").split(/\.|\[/));function C(e,s,t){let r=-1;const n=$e(s)?[s]:jt(s),a=n.length,c=a-1;for(;++r<a;){const b=n[r];let g=t;if(r!==c){const V=e[b];g=T(V)||Array.isArray(V)?V:isNaN(+n[r+1])?{}:[]}e[b]=g,e=e[b]}return e}function br(e){const s=Ue(),{name:t,disabled:r,control:n=s.control,shouldUnregister:a}=e,c=vt(n._names.array,t),b=mr({control:n,name:t,defaultValue:h(n._formValues,t,h(n._defaultValues,t,e.defaultValue)),exact:!0}),g=xr({control:n,name:t}),V=D.useRef(n.register(t,{...e.rules,value:b}));return V.current=n.register(t,e.rules),D.useEffect(()=>{const w=n._options.shouldUnregister||a,m=(v,O)=>{const k=h(n._fields,v);k&&(k._f.mount=O)};if(m(t,!0),w){const v=W(h(n._options.defaultValues,t));C(n._defaultValues,t,v),S(h(n._formValues,t))&&C(n._formValues,t,v)}return()=>{(c?w&&!n._state.action:w)?n.unregister(t):m(t,!1)}},[t,n,c,a]),D.useEffect(()=>{h(n._fields,t)&&n._updateDisabledField({disabled:r,fields:n._fields,name:t,value:h(n._fields,t)._f.value})},[r,t,n]),{field:{name:t,value:b,...Y(r)||Y(g.disabled)?{disabled:g.disabled||r}:{},onChange:D.useCallback(w=>V.current.onChange({target:{value:bt(w),name:t},type:Fe.CHANGE}),[t]),onBlur:D.useCallback(()=>V.current.onBlur({target:{value:h(n._formValues,t),name:t},type:Fe.BLUR}),[t,n]),ref:w=>{const m=h(n._fields,t);m&&w&&(m._f.ref={focus:()=>w.focus(),select:()=>w.select(),setCustomValidity:v=>w.setCustomValidity(v),reportValidity:()=>w.reportValidity()})}},formState:g,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!h(g.errors,t)},isDirty:{enumerable:!0,get:()=>!!h(g.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!h(g.touchedFields,t)},error:{enumerable:!0,get:()=>h(g.errors,t)}})}}const st=e=>e.render(br(e));var vr=(e,s,t,r,n)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[r]:n||!0}}:{},it=e=>({isOnSubmit:!e||e===H.onSubmit,isOnBlur:e===H.onBlur,isOnChange:e===H.onChange,isOnAll:e===H.all,isOnTouch:e===H.onTouched}),nt=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const be=(e,s,t,r)=>{for(const n of t||Object.keys(e)){const a=h(e,n);if(a){const{_f:c,...b}=a;if(c){if(c.refs&&c.refs[0]&&s(c.refs[0],n)&&!r)break;if(c.ref&&s(c.ref,c.name)&&!r)break}else T(b)&&be(b,s)}}};var _r=(e,s,t)=>{const r=ge(h(e,t));return C(r,"root",s[t]),C(e,t,r),e},Ne=e=>e.type==="file",ee=e=>typeof e=="function",we=e=>{if(!Pe)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>J(e),We=e=>e.type==="radio",Ve=e=>e instanceof RegExp;const ot={value:!1,isValid:!1},at={value:!0,isValid:!0};var At=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!S(e[0].attributes.value)?S(e[0].value)||e[0].value===""?at:{value:e[0].value,isValid:!0}:at:ot}return ot};const lt={isValid:!1,value:null};var kt=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,lt):lt;function ut(e,s,t="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||Y(e)&&!e)return{type:t,message:ve(e)?e:"",ref:s}}var ae=e=>T(e)&&!Ve(e)?e:{value:e,message:""},ct=async(e,s,t,r,n)=>{const{ref:a,refs:c,required:b,maxLength:g,minLength:V,min:w,max:m,pattern:v,validate:O,name:k,valueAsNumber:B,mount:U,disabled:ce}=e._f,_=h(s,k);if(!U||ce)return{};const N=c?c[0]:a,Q=j=>{r&&N.reportValidity&&(N.setCustomValidity(Y(j)?"":j||""),N.reportValidity())},L={},de=We(a),ne=pe(a),Re=de||ne,K=(B||Ne(a))&&S(a.value)&&S(_)||we(a)&&a.value===""||_===""||Array.isArray(_)&&!_.length,te=vr.bind(null,k,t,L),X=(j,F,q,P=Z.maxLength,z=Z.minLength)=>{const G=j?F:q;L[k]={type:j?P:z,message:G,ref:a,...te(j?P:z,G)}};if(n?!Array.isArray(_)||!_.length:b&&(!Re&&(K||I(_))||Y(_)&&!_||ne&&!At(c).isValid||de&&!kt(c).isValid)){const{value:j,message:F}=ve(b)?{value:!!b,message:b}:ae(b);if(j&&(L[k]={type:Z.required,message:F,ref:N,...te(Z.required,F)},!t))return Q(F),L}if(!K&&(!I(w)||!I(m))){let j,F;const q=ae(m),P=ae(w);if(!I(_)&&!isNaN(_)){const z=a.valueAsNumber||_&&+_;I(q.value)||(j=z>q.value),I(P.value)||(F=z<P.value)}else{const z=a.valueAsDate||new Date(_),G=ye=>new Date(new Date().toDateString()+" "+ye),re=a.type=="time",fe=a.type=="week";J(q.value)&&_&&(j=re?G(_)>G(q.value):fe?_>q.value:z>new Date(q.value)),J(P.value)&&_&&(F=re?G(_)<G(P.value):fe?_<P.value:z<new Date(P.value))}if((j||F)&&(X(!!j,q.message,P.message,Z.max,Z.min),!t))return Q(L[k].message),L}if((g||V)&&!K&&(J(_)||n&&Array.isArray(_))){const j=ae(g),F=ae(V),q=!I(j.value)&&_.length>+j.value,P=!I(F.value)&&_.length<+F.value;if((q||P)&&(X(q,j.message,F.message),!t))return Q(L[k].message),L}if(v&&!K&&J(_)){const{value:j,message:F}=ae(v);if(Ve(j)&&!_.match(j)&&(L[k]={type:Z.pattern,message:F,ref:a,...te(Z.pattern,F)},!t))return Q(F),L}if(O){if(ee(O)){const j=await O(_,s),F=ut(j,N);if(F&&(L[k]={...F,...te(Z.validate,F.message)},!t))return Q(F.message),L}else if(T(O)){let j={};for(const F in O){if(!$(j)&&!t)break;const q=ut(await O[F](_,s),N,F);q&&(j={...q,...te(F,q.message)},Q(q.message),t&&(L[k]=j))}if(!$(j)&&(L[k]={ref:N,...j},!t))return L}}return Q(!0),L};function Fr(e,s){const t=s.slice(0,-1).length;let r=0;for(;r<t;)e=S(e)?r++:e[s[r++]];return e}function wr(e){for(const s in e)if(e.hasOwnProperty(s)&&!S(e[s]))return!1;return!0}function M(e,s){const t=Array.isArray(s)?s:$e(s)?[s]:jt(s),r=t.length===1?e:Fr(e,t),n=t.length-1,a=t[n];return r&&delete r[a],n!==0&&(T(r)&&$(r)||Array.isArray(r)&&wr(r))&&M(e,t.slice(0,-1)),e}function Te(){let e=[];return{get observers(){return e},next:n=>{for(const a of e)a.next&&a.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(a=>a!==n)}}),unsubscribe:()=>{e=[]}}}var je=e=>I(e)||!mt(e);function se(e,s){if(je(e)||je(s))return e===s;if(ue(e)&&ue(s))return e.getTime()===s.getTime();const t=Object.keys(e),r=Object.keys(s);if(t.length!==r.length)return!1;for(const n of t){const a=e[n];if(!r.includes(n))return!1;if(n!=="ref"){const c=s[n];if(ue(a)&&ue(c)||T(a)&&T(c)||Array.isArray(a)&&Array.isArray(c)?!se(a,c):a!==c)return!1}}return!0}var Rt=e=>e.type==="select-multiple",Vr=e=>We(e)||pe(e),Le=e=>we(e)&&e.isConnected,Ct=e=>{for(const s in e)if(ee(e[s]))return!0;return!1};function Ae(e,s={}){const t=Array.isArray(e);if(T(e)||t)for(const r in e)Array.isArray(e[r])||T(e[r])&&!Ct(e[r])?(s[r]=Array.isArray(e[r])?[]:{},Ae(e[r],s[r])):I(e[r])||(s[r]=!0);return s}function Dt(e,s,t){const r=Array.isArray(e);if(T(e)||r)for(const n in e)Array.isArray(e[n])||T(e[n])&&!Ct(e[n])?S(s)||je(t[n])?t[n]=Array.isArray(e[n])?Ae(e[n],[]):{...Ae(e[n])}:Dt(e[n],I(s)?{}:s[n],t[n]):t[n]=!se(e[n],s[n]);return t}var Me=(e,s)=>Dt(e,s,Ae(s)),St=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:r})=>S(e)?e:s?e===""?NaN:e&&+e:t&&J(e)?new Date(e):r?r(e):e;function Oe(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Ne(s)?s.files:We(s)?kt(e.refs).value:Rt(s)?[...s.selectedOptions].map(({value:t})=>t):pe(s)?At(e.refs).value:St(S(s.value)?e.ref.value:s.value,e)}var jr=(e,s,t,r)=>{const n={};for(const a of e){const c=h(s,a);c&&C(n,a,c._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:r}},he=e=>S(e)?e:Ve(e)?e.source:T(e)?Ve(e.value)?e.value.source:e.value:e,Ar=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function dt(e,s,t){const r=h(e,t);if(r||$e(t))return{error:r,name:t};const n=t.split(".");for(;n.length;){const a=n.join("."),c=h(s,a),b=h(e,a);if(c&&!Array.isArray(c)&&t!==a)return{name:t};if(b&&b.type)return{name:a,error:b};n.pop()}return{name:t}}var kr=(e,s,t,r,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(s||e):(t?r.isOnBlur:n.isOnBlur)?!e:(t?r.isOnChange:n.isOnChange)?e:!0,Rr=(e,s)=>!ge(h(e,s)).length&&M(e,s);const Cr={mode:H.onSubmit,reValidateMode:H.onChange,shouldFocusError:!0};function Dr(e={},s){let t={...Cr,...e},r={submitCount:0,isDirty:!1,isLoading:ee(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},n={},a=T(t.defaultValues)||T(t.values)?W(t.defaultValues||t.values)||{}:{},c=t.shouldUnregister?{}:W(a),b={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},V,w=0;const m={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Te(),array:Te(),state:Te()},O=e.resetOptions&&e.resetOptions.keepDirtyValues,k=it(t.mode),B=it(t.reValidateMode),U=t.criteriaMode===H.all,ce=i=>o=>{clearTimeout(w),w=setTimeout(i,o)},_=async i=>{if(m.isValid||i){const o=t.resolver?$((await K()).errors):await X(n,!0);o!==r.isValid&&v.state.next({isValid:o})}},N=i=>m.isValidating&&v.state.next({isValidating:i}),Q=(i,o=[],l,p,f=!0,d=!0)=>{if(p&&l){if(b.action=!0,d&&Array.isArray(h(n,i))){const x=l(h(n,i),p.argA,p.argB);f&&C(n,i,x)}if(d&&Array.isArray(h(r.errors,i))){const x=l(h(r.errors,i),p.argA,p.argB);f&&C(r.errors,i,x),Rr(r.errors,i)}if(m.touchedFields&&d&&Array.isArray(h(r.touchedFields,i))){const x=l(h(r.touchedFields,i),p.argA,p.argB);f&&C(r.touchedFields,i,x)}m.dirtyFields&&(r.dirtyFields=Me(a,c)),v.state.next({name:i,isDirty:F(i,o),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else C(c,i,o)},L=(i,o)=>{C(r.errors,i,o),v.state.next({errors:r.errors})},de=(i,o,l,p)=>{const f=h(n,i);if(f){const d=h(c,i,S(l)?h(a,i):l);S(d)||p&&p.defaultChecked||o?C(c,i,o?d:Oe(f._f)):z(i,d),b.mount&&_()}},ne=(i,o,l,p,f)=>{let d=!1,x=!1;const R={name:i};if(!l||p){m.isDirty&&(x=r.isDirty,r.isDirty=R.isDirty=F(),d=x!==R.isDirty);const E=se(h(a,i),o);x=h(r.dirtyFields,i),E?M(r.dirtyFields,i):C(r.dirtyFields,i,!0),R.dirtyFields=r.dirtyFields,d=d||m.dirtyFields&&x!==!E}if(l){const E=h(r.touchedFields,i);E||(C(r.touchedFields,i,l),R.touchedFields=r.touchedFields,d=d||m.touchedFields&&E!==l)}return d&&f&&v.state.next(R),d?R:{}},Re=(i,o,l,p)=>{const f=h(r.errors,i),d=m.isValid&&Y(o)&&r.isValid!==o;if(e.delayError&&l?(V=ce(()=>L(i,l)),V(e.delayError)):(clearTimeout(w),V=null,l?C(r.errors,i,l):M(r.errors,i)),(l?!se(f,l):f)||!$(p)||d){const x={...p,...d&&Y(o)?{isValid:o}:{},errors:r.errors,name:i};r={...r,...x},v.state.next(x)}N(!1)},K=async i=>t.resolver(c,t.context,jr(i||g.mount,n,t.criteriaMode,t.shouldUseNativeValidation)),te=async i=>{const{errors:o}=await K(i);if(i)for(const l of i){const p=h(o,l);p?C(r.errors,l,p):M(r.errors,l)}else r.errors=o;return o},X=async(i,o,l={valid:!0})=>{for(const p in i){const f=i[p];if(f){const{_f:d,...x}=f;if(d){const R=g.array.has(d.name),E=await ct(f,c,U,t.shouldUseNativeValidation&&!o,R);if(E[d.name]&&(l.valid=!1,o))break;!o&&(h(E,d.name)?R?_r(r.errors,E,d.name):C(r.errors,d.name,E[d.name]):M(r.errors,d.name))}x&&await X(x,o,l)}}return l.valid},j=()=>{for(const i of g.unMount){const o=h(n,i);o&&(o._f.refs?o._f.refs.every(l=>!Le(l)):!Le(o._f.ref))&&De(i)}g.unMount=new Set},F=(i,o)=>(i&&o&&C(c,i,o),!se(Ke(),a)),q=(i,o,l)=>Vt(i,g,{...b.mount?c:S(o)?a:J(i)?{[i]:o}:o},l,o),P=i=>ge(h(b.mount?c:a,i,e.shouldUnregister?h(a,i,[]):[])),z=(i,o,l={})=>{const p=h(n,i);let f=o;if(p){const d=p._f;d&&(!d.disabled&&C(c,i,St(o,d)),f=we(d.ref)&&I(o)?"":o,Rt(d.ref)?[...d.ref.options].forEach(x=>x.selected=f.includes(x.value)):d.refs?pe(d.ref)?d.refs.length>1?d.refs.forEach(x=>(!x.defaultChecked||!x.disabled)&&(x.checked=Array.isArray(f)?!!f.find(R=>R===x.value):f===x.value)):d.refs[0]&&(d.refs[0].checked=!!f):d.refs.forEach(x=>x.checked=x.value===f):Ne(d.ref)?d.ref.value="":(d.ref.value=f,d.ref.type||v.values.next({name:i,values:{...c}})))}(l.shouldDirty||l.shouldTouch)&&ne(i,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&Ce(i)},G=(i,o,l)=>{for(const p in o){const f=o[p],d=`${i}.${p}`,x=h(n,d);(g.array.has(i)||!je(f)||x&&!x._f)&&!ue(f)?G(d,f,l):z(d,f,l)}},re=(i,o,l={})=>{const p=h(n,i),f=g.array.has(i),d=W(o);C(c,i,d),f?(v.array.next({name:i,values:{...c}}),(m.isDirty||m.dirtyFields)&&l.shouldDirty&&v.state.next({name:i,dirtyFields:Me(a,c),isDirty:F(i,d)})):p&&!p._f&&!I(d)?G(i,d,l):z(i,d,l),nt(i,g)&&v.state.next({...r}),v.values.next({name:i,values:{...c}}),!b.mount&&s()},fe=async i=>{const o=i.target;let l=o.name,p=!0;const f=h(n,l),d=()=>o.type?Oe(f._f):bt(i),x=R=>{p=Number.isNaN(R)||R===h(c,l,R)};if(f){let R,E;const xe=d(),oe=i.type===Fe.BLUR||i.type===Fe.FOCUS_OUT,Ut=!Ar(f._f)&&!t.resolver&&!h(r.errors,l)&&!f._f.deps||kr(oe,h(r.touchedFields,l),r.isSubmitted,B,k),qe=nt(l,g,oe);C(c,l,xe),oe?(f._f.onBlur&&f._f.onBlur(i),V&&V(0)):f._f.onChange&&f._f.onChange(i);const Ee=ne(l,xe,oe,!1),zt=!$(Ee)||qe;if(!oe&&v.values.next({name:l,type:i.type,values:{...c}}),Ut)return m.isValid&&_(),zt&&v.state.next({name:l,...qe?{}:Ee});if(!oe&&qe&&v.state.next({...r}),N(!0),t.resolver){const{errors:tt}=await K([l]);if(x(xe),p){const $t=dt(r.errors,n,l),rt=dt(tt,n,$t.name||l);R=rt.error,l=rt.name,E=$(tt)}}else R=(await ct(f,c,U,t.shouldUseNativeValidation))[l],x(xe),p&&(R?E=!1:m.isValid&&(E=await X(n,!0)));p&&(f._f.deps&&Ce(f._f.deps),Re(l,E,R,Ee))}},ye=(i,o)=>{if(h(r.errors,o)&&i.focus)return i.focus(),1},Ce=async(i,o={})=>{let l,p;const f=me(i);if(N(!0),t.resolver){const d=await te(S(i)?i:f);l=$(d),p=i?!f.some(x=>h(d,x)):l}else i?(p=(await Promise.all(f.map(async d=>{const x=h(n,d);return await X(x&&x._f?{[d]:x}:x)}))).every(Boolean),!(!p&&!r.isValid)&&_()):p=l=await X(n);return v.state.next({...!J(i)||m.isValid&&l!==r.isValid?{}:{name:i},...t.resolver||!i?{isValid:l}:{},errors:r.errors,isValidating:!1}),o.shouldFocus&&!p&&be(n,ye,i?f:g.mount),p},Ke=i=>{const o={...a,...b.mount?c:{}};return S(i)?o:J(i)?h(o,i):i.map(l=>h(o,l))},Ge=(i,o)=>({invalid:!!h((o||r).errors,i),isDirty:!!h((o||r).dirtyFields,i),isTouched:!!h((o||r).touchedFields,i),error:h((o||r).errors,i)}),Ot=i=>{i&&me(i).forEach(o=>M(r.errors,o)),v.state.next({errors:i?r.errors:{}})},Ye=(i,o,l)=>{const p=(h(n,i,{_f:{}})._f||{}).ref;C(r.errors,i,{...o,ref:p}),v.state.next({name:i,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&p&&p.focus&&p.focus()},Bt=(i,o)=>ee(i)?v.values.subscribe({next:l=>i(q(void 0,o),l)}):q(i,o,!0),De=(i,o={})=>{for(const l of i?me(i):g.mount)g.mount.delete(l),g.array.delete(l),o.keepValue||(M(n,l),M(c,l)),!o.keepError&&M(r.errors,l),!o.keepDirty&&M(r.dirtyFields,l),!o.keepTouched&&M(r.touchedFields,l),!t.shouldUnregister&&!o.keepDefaultValue&&M(a,l);v.values.next({values:{...c}}),v.state.next({...r,...o.keepDirty?{isDirty:F()}:{}}),!o.keepIsValid&&_()},Je=({disabled:i,name:o,field:l,fields:p,value:f})=>{if(Y(i)){const d=i?void 0:S(f)?Oe(l?l._f:h(p,o)._f):f;C(c,o,d),ne(o,d,!1,!1,!0)}},Se=(i,o={})=>{let l=h(n,i);const p=Y(o.disabled);return C(n,i,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:i}},name:i,mount:!0,...o}}),g.mount.add(i),l?Je({field:l,disabled:o.disabled,name:i}):de(i,!0,o.value),{...p?{disabled:o.disabled}:{},...t.progressive?{required:!!o.required,min:he(o.min),max:he(o.max),minLength:he(o.minLength),maxLength:he(o.maxLength),pattern:he(o.pattern)}:{},name:i,onChange:fe,onBlur:fe,ref:f=>{if(f){Se(i,o),l=h(n,i);const d=S(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,x=Vr(d),R=l._f.refs||[];if(x?R.find(E=>E===d):d===l._f.ref)return;C(n,i,{_f:{...l._f,...x?{refs:[...R.filter(Le),d,...Array.isArray(h(a,i))?[{}]:[]],ref:{type:d.type,name:i}}:{ref:d}}}),de(i,!1,void 0,d)}else l=h(n,i,{}),l._f&&(l._f.mount=!1),(t.shouldUnregister||o.shouldUnregister)&&!(vt(g.array,i)&&b.action)&&g.unMount.add(i)}}},Qe=()=>t.shouldFocusError&&be(n,ye,g.mount),It=i=>{Y(i)&&(v.state.next({disabled:i}),be(n,o=>{o.disabled=i},0,!1))},Xe=(i,o)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let p=W(c);if(v.state.next({isSubmitting:!0}),t.resolver){const{errors:f,values:d}=await K();r.errors=f,p=d}else await X(n);M(r.errors,"root"),$(r.errors)?(v.state.next({errors:{}}),await i(p,l)):(o&&await o({...r.errors},l),Qe(),setTimeout(Qe)),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:$(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Pt=(i,o={})=>{h(n,i)&&(S(o.defaultValue)?re(i,h(a,i)):(re(i,o.defaultValue),C(a,i,o.defaultValue)),o.keepTouched||M(r.touchedFields,i),o.keepDirty||(M(r.dirtyFields,i),r.isDirty=o.defaultValue?F(i,h(a,i)):F()),o.keepError||(M(r.errors,i),m.isValid&&_()),v.state.next({...r}))},Ze=(i,o={})=>{const l=i?W(i):a,p=W(l),f=i&&!$(i)?p:a;if(o.keepDefaultValues||(a=l),!o.keepValues){if(o.keepDirtyValues||O)for(const d of g.mount)h(r.dirtyFields,d)?C(f,d,h(c,d)):re(d,h(f,d));else{if(Pe&&S(i))for(const d of g.mount){const x=h(n,d);if(x&&x._f){const R=Array.isArray(x._f.refs)?x._f.refs[0]:x._f.ref;if(we(R)){const E=R.closest("form");if(E){E.reset();break}}}}n={}}c=e.shouldUnregister?o.keepDefaultValues?W(a):{}:W(f),v.array.next({values:{...f}}),v.values.next({values:{...f}})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!b.mount&&s(),b.mount=!m.isValid||!!o.keepIsValid,b.watch=!!e.shouldUnregister,v.state.next({submitCount:o.keepSubmitCount?r.submitCount:0,isDirty:o.keepDirty?r.isDirty:!!(o.keepDefaultValues&&!se(i,a)),isSubmitted:o.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:o.keepDirtyValues?r.dirtyFields:o.keepDefaultValues&&i?Me(a,i):{},touchedFields:o.keepTouched?r.touchedFields:{},errors:o.keepErrors?r.errors:{},isSubmitSuccessful:o.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},et=(i,o)=>Ze(ee(i)?i(c):i,o);return{control:{register:Se,unregister:De,getFieldState:Ge,handleSubmit:Xe,setError:Ye,_executeSchema:K,_getWatch:q,_getDirty:F,_updateValid:_,_removeUnmounted:j,_updateFieldArray:Q,_updateDisabledField:Je,_getFieldArray:P,_reset:Ze,_resetDefaultValues:()=>ee(t.defaultValues)&&t.defaultValues().then(i=>{et(i,t.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:i=>{r={...r,...i}},_disableForm:It,_subjects:v,_proxyFormState:m,get _fields(){return n},get _formValues(){return c},get _state(){return b},set _state(i){b=i},get _defaultValues(){return a},get _names(){return g},set _names(i){g=i},get _formState(){return r},set _formState(i){r=i},get _options(){return t},set _options(i){t={...t,...i}}},trigger:Ce,register:Se,handleSubmit:Xe,watch:Bt,setValue:re,getValues:Ke,reset:et,resetField:Pt,clearErrors:Ot,unregister:De,setError:Ye,setFocus:(i,o={})=>{const l=h(n,i),p=l&&l._f;if(p){const f=p.refs?p.refs[0]:p.ref;f.focus&&(f.focus(),o.shouldSelect&&f.select())}},getFieldState:Ge}}function Sr(e={}){const s=D.useRef(),t=D.useRef(),[r,n]=D.useState({isDirty:!1,isValidating:!1,isLoading:ee(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:ee(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Dr(e,()=>n(c=>({...c}))),formState:r});const a=s.current.control;return a._options=e,ze({subject:a._subjects.state,next:c=>{Ft(c,a._proxyFormState,a._updateFormState,!0)&&n({...a._formState})}}),D.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),D.useEffect(()=>{if(a._proxyFormState.isDirty){const c=a._getDirty();c!==r.isDirty&&a._subjects.state.next({isDirty:c})}},[a,r.isDirty]),D.useEffect(()=>{e.values&&!se(e.values,t.current)?(a._reset(e.values,a._options.resetOptions),t.current=e.values):a._resetDefaultValues()},[e.values,a]),D.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),s.current.formState=_t(r,a),s.current}const qr=A.form`
  max-width: 1050px;
  margin: 20px auto;
`,Er=A.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`,Tr=A.div`
  display: flex;
  margin-right: 18px;

  & label {
    color: #8a8a89;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.285;
  }
`,Lr=A.select`
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
`,Mr=A.select`
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
`,Or=A.div`
  display: flex;
  flex-direction: column;
`,Br=A.input`
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
`,Ir=A.input`
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
`,Pr=A.label`
  position: relative;
`,Ur=A.label`
  position: relative;
`,zr=A.span`
  position: absolute;
  left: 24px;
  bottom: 0;
  font-size: 18px;
  line-height: 1.11;
  font-weight: 500;
  color: var(--title-color);
`,$r=A.span`
  position: absolute;
  left: 24px;
  bottom: 0;
  font-size: 18px;
  line-height: 1.11;
  font-weight: 500;
  color: var(--title-color);
`,Nr=A.div`
  margin-bottom: auto;
  margin-top: 28px;
  display: flex;
  gap: 18px;
`,ft=A.button`
  border-color: transparent;
  color: #ffffff;
  background-color: var(--accent);
  padding: 10px 44px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  align-self: flex-end;
`,ms=({cars:e})=>{const s=ht(rr),t=gt(),{pathname:r}=Ht(),n=r==="/favorites"&&(e==null?void 0:e.length)===0,a=fr(e),c=hr(e,"make"),{register:b,handleSubmit:g,control:V,reset:w,formState:{errors:m}}=Sr({mode:"onChange",shouldDisable:n});ie.useEffect(()=>{w(s)},[s,w]);const v=k=>{t(Kt(k))},O=()=>{t(Gt()),w({brand:"",price:"",from:"",to:""})};return u.jsx(qr,{onSubmit:g(v),disabled:n,children:u.jsxs(Er,{children:[u.jsxs(Tr,{children:[u.jsxs(Or,{children:[u.jsx("label",{htmlFor:"brand",children:"Car brand"}),u.jsx(st,{name:"brand",control:V,rules:{required:!0,message:"Brand is required"},render:({field:k})=>u.jsxs(u.Fragment,{children:[u.jsxs(Lr,{...k,children:[u.jsx("option",{value:"",children:"Enter the text"}),c&&c.map((B,U)=>u.jsx("option",{value:B,children:B},U))]}),m.brand&&u.jsx("p",{className:`error ${n?"opacity-0":"opacity-100"}`,children:m.brand.type==="required"?"Brand is required":m.brand.message})]})})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"price",children:"Price/ 1 hour"}),u.jsx("div",{children:u.jsx(st,{name:"price",control:V,rules:{required:!0,min:{value:0,message:"Must be 0 or greater"}},render:({field:k})=>u.jsxs(u.Fragment,{children:[u.jsxs(Mr,{...k,children:[u.jsx("option",{value:"",children:"To $"}),a&&a.map((B,U)=>u.jsx("option",{value:B,children:B},U))]}),m.price&&u.jsx("p",{className:`${n?"opacity-0":"opacity-100"}`,children:m.price.type==="required"?"Price is required":m.price.message})]})})})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"minMileage",children:"Car mileage / km (from)"}),u.jsxs("div",{children:[u.jsxs(Pr,{children:[u.jsx(Br,{type:"number",...b("from",{required:"This field is required",min:{value:0,message:"Must be 0 or greater"}})}),u.jsx(zr,{children:"From"})]}),u.jsxs(Ur,{children:[u.jsx(Ir,{type:"number",...b("to",{required:"This field is required",min:{value:0,message:"Must be 0 or greater"},validate:(k,{from:B})=>parseInt(k)>parseInt(B)?!0:"To must be greater than From"})}),u.jsx($r,{children:"To"})]}),u.jsxs("p",{className:` ${n?"opacity-0":"opacity-100"}`,children:[(m==null?void 0:m.from)&&u.jsx("span",{children:m.from.message}),(m==null?void 0:m.to)&&u.jsx("span",{children:m.to.message})]})]})]})]}),u.jsxs(Nr,{children:[u.jsx(ft,{type:"submit",label:"Search",children:"Search"}),u.jsx(ft,{type:"button",onClick:O,label:"Reset",children:"Reset"})]})]})})},bs=A.div`
  max-width: 1190px;
  margin: 0 auto;
`,Wr="/RentedCars/assets/matureman-7c08ad59.jpg",Hr=(e=!1)=>{const[s,t]=ie.useState(e);return{isOpen:s,open:()=>t(!0),close:()=>t(!1),toggle:()=>t(c=>!c)}},Kr=A.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border-color: transparent;
  /* font-size: 20px; */
`,Gr=A.div`
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
`,Yr=A.div`
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
  padding: 40px;
  z-index: 11;

  & img {
    border-radius: 14px;
    background: #f3f3f2;
    height: 248px;
    margin: 0 auto;
    object-fit: cover;
  }
`,Jr=document.getElementById("modal"),qt=({onClose:e,children:s,isOpen:t})=>{ie.useEffect(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow="visible"},[t]);const r=ie.useCallback(n=>{document.body.style.overflow="visible",ar(n,e)},[e]);return ie.useEffect(()=>(document.body.addEventListener("keydown",r),()=>document.body.removeEventListener("keydown",r)),[r]),Yt.createPortal(u.jsx(Gr,{onClick:r,children:u.jsxs(Yr,{children:[u.jsx(Kr,{onClick:e,type:"button",children:"❌"}),s]})}),Jr)};qt.propTypes={children:y.node.isRequired,onClose:y.func.isRequired,isOpen:y.bool};const Qr="/RentedCars/assets/youngman-08677e87.jpg",He=({src:e,alt:s,width:t,height:r})=>u.jsx("div",{children:u.jsx("img",{src:e?`${e}`:Qr,alt:s,width:t,height:r,loading:"lazy"})});He.propTypes={src:y.string.isRequired,alt:y.string.isRequired,className:y.string,blockClass:y.string,width:y.string.isRequired,height:y.string};const le=({conditionText:e,conditionValue:s})=>u.jsxs("li",{children:[u.jsx("p",{children:e}),s&&u.jsx("span",{children:s})]});le.propTypes={conditionText:y.string.isRequired,conditionValue:y.string};const Et=({rentConditions:e,mile:s,price:t,title:r})=>u.jsxs("div",{children:[u.jsxs("p",{children:[r,":"]}),u.jsxs("ul",{children:[u.jsx(le,{conditionText:e[0],conditionValue:e[1]}),u.jsx(le,{conditionText:e[2]}),u.jsx(le,{conditionText:e[3]}),u.jsx(le,{conditionText:"Mileage: ",conditionValue:s}),u.jsx(le,{conditionText:"Price: ",conditionValue:`${t}$`})]})]});Et.propTypes={rentConditions:y.array.isRequired,mile:y.string.isRequired,price:y.string.isRequired,title:y.string.isRequired};const ke=()=>u.jsx("span",{children:"|"}),Xr=A.p`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 8px;
`,Zr=A.div`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
`,es=A.ul`
  display: flex;
  & li {
    display: flex;
  }
  & span {
    margin-left: 4px;
  }
`,Ie=({items:e,separator:s})=>u.jsx(es,{children:e.map((t,r)=>u.jsxs("li",{children:[t,r<e.length-1&&s]},r))});Ie.propTypes={items:y.array.isRequired,separator:y.any};const Tt=({accessories:e,functionalities:s,title:t})=>u.jsxs(Zr,{children:[u.jsxs(Xr,{children:[t,":"]}),u.jsx(Ie,{items:e,separator:u.jsx(ke,{})}),u.jsx(Ie,{items:s,separator:u.jsx(ke,{})})]});Tt.propTypes={accessories:y.array.isRequired,functionalities:y.array.isRequired,title:y.string.isRequired};const ts=A.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 14px;
  & span {
    color: var(--accent);
  }
`,rs=A.div`
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
`,Lt=({car:e})=>{const{year:s,make:t,model:r,img:n,rentalPrice:a,address:c,description:b,accessories:g,functionalities:V,rentalConditions:w,mileage:m}=e,v=ur(e),O=lr(c,e),k=cr(w),B=dr(m),U=xt(a);return u.jsxs(u.Fragment,{children:[u.jsx(He,{width:"461",height:"248",src:n,alt:`${t} ${r}`,loading:"lazy"}),u.jsxs(ts,{children:[t," ",u.jsx("span",{children:r}),", ",s]}),u.jsxs(rs,{children:[u.jsx("ul",{children:Be(O)}),u.jsx("ul",{children:Be(v)})]}),u.jsx("div",{children:b}),u.jsx(Tt,{title:"Accessories and functionalities",accessories:g,functionalities:V}),u.jsx(Et,{title:"Rental Conditions",rentConditions:k,mile:B,price:U}),u.jsx("a",{href:"tel:+380730000000",children:"Rental car"})]})};Lt.propTypes={car:y.shape({id:y.number.isRequired,year:y.number.isRequired,make:y.string.isRequired,model:y.string.isRequired,type:y.string.isRequired,img:y.string.isRequired,description:y.string.isRequired,functionalities:y.array.isRequired,rentalPrice:y.string.isRequired,rentalCompany:y.string.isRequired,address:y.string.isRequired,mileage:y.number.isRequired,accessories:y.array.isRequired,rentalConditions:y.string.isRequired}).isRequired};const Mt=({locationData:e,carData:s})=>u.jsxs(u.Fragment,{children:[u.jsx("ul",{children:Be(e,u.jsx(ke,{}))}),u.jsx("ul",{children:Object.entries(s).map(([t,r],n,a)=>u.jsxs("li",{children:[or(t,r),n<a.length-1&&u.jsx(ke,{})]},n))})]});Mt.propTypes={carData:y.object.isRequired,locationData:y.array.isRequired};const ss=A.li`
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
`,is=A.svg`
  width: 18px;
  height: 16px;
  stroke: #ffffff;
`,ns=A.button`
  width: 25px;
  height: 22px;
  border: none;
  position: absolute;
  z-index: 9;
  top: 15px;
  right: 14px;
`,os=A.span`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 8px;
`,as=A.span`
  & span {
    color: var(--accent);
  }
`,ls=A.button`
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
`,us=({car:e})=>{const{isOpen:s,open:t,close:r}=Hr(!1),n=ht(tr),a=gt(),{id:c,year:b,make:g,model:V,img:w,rentalPrice:m,address:v}=e,O=sr(e),k=ir(v,e),B=n==null?void 0:n.some(ce=>ce.id===c),U=()=>a(B?Qt(e):Xt(e));return u.jsx(u.Fragment,{children:u.jsxs(ss,{children:[u.jsx(ns,{type:"button",onClick:U,children:u.jsx(is,{children:u.jsx("use",{href:`${Jt}#heart`})})}),u.jsx(He,{src:w||Wr,alt:`${g} ${V}`,loading:"lazy"}),u.jsxs(os,{children:[u.jsxs(as,{children:[g,u.jsxs("span",{children:[" ",V]}),", ",b]}),u.jsx("span",{children:m})]}),u.jsx(Mt,{locationData:k,carData:O}),u.jsx(ls,{label:"Learn more",onClick:t,children:"Learn more"}),s&&u.jsx(qt,{isOpen:s,onClose:r,children:u.jsx(Lt,{car:e})})]})})};us.propTypes={car:y.shape({id:y.number.isRequired,year:y.number.isRequired,make:y.string.isRequired,model:y.string.isRequired,type:y.string.isRequired,img:y.string.isRequired,description:y.string.isRequired,functionalities:y.array.isRequired,rentalPrice:y.string.isRequired,rentalCompany:y.string.isRequired,address:y.string.isRequired,mileage:y.number.isRequired}).isRequired,fav:y.bool};export{us as C,ms as F,rr as a,xs as b,bs as c,tr as d,hr as e,ys as f,Hr as g,gs as s,gt as u};
