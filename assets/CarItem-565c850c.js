import{R as _e,f as $t,h as Wt,j as c,r as ee,i as R,s as A,u as ht,k as Ht,e as Jt,l as Kt,m as Gt,b as Yt,n as Qt,o as Xt}from"./index-75a2aac1.js";import{P as p}from"./index-ac106954.js";function gt(e=_e){const s=e===_e?$t:Wt(e);return function(){const{store:r}=s();return r}}const Zt=gt();function er(e=_e){const s=e===_e?Zt:gt(e);return function(){return s().dispatch}}const pt=er(),ps=e=>e.cars.items,tr=e=>e.cars.favorites,rr=e=>e.cars.filter,yt=e=>{const s=e.split(", "),t=s[1],r=s[s.length-1];return{city:t,country:r}},sr=e=>{const{type:s,mileage:t,functionalities:r}=e;return{type:s,mileage:t,functionalities:r}},ir=(e,s)=>{const{city:t,country:r}=yt(e),{rentalCompany:n}=s;return[t,r,n]},Ie=(e,s)=>e.map((t,r)=>c.jsxs("li",{children:[t,r<e.length-1&&s]},r)),nr=e=>{if(!e||e.length===0)return"";let s=e[0];for(let r=1;r<e.length;r++){const n=e[r];n.split(" ").length<s.split(" ").length&&(s=n)}const t=s.split(" ");return t.length>3?t.slice(0,3).join(" "):s},or=(e,s)=>e==="functionalities"?nr(s):e==="type"?s.split(",")[0].trim():s,ys=(e,s)=>e==null?void 0:e.slice(0,s),ar=({target:e,currentTarget:s,code:t},r)=>{(e===s||t==="Escape")&&r()},lr=(e,s)=>{const{city:t,country:r}=yt(e),{year:n,type:a,id:u}=s;return[t,r,`Id: ${u}`,`Year: ${n}`,`Type: ${a}`]},cr=e=>{const{fuelConsumption:s,engineSize:t}=e;return[`Fuel Consumption: ${s}`,`Engine Size: ${t}`]},ur=e=>{const s=e.split(`
`),t=s[0].split(" ").slice(-1).join("");return s[0]=s[0].replace(t,""),s.splice(1,0,t),s},dr=e=>e.toLocaleString("en-EN"),xt=e=>e.split("").slice(1).join(""),fr=e=>{if(!Array.isArray(e)||!e.length)return[];let s=0;const t=[];if(e.forEach(n=>{const a=+xt(n.rentalPrice);a>s&&(s=a)}),s===0)return[];let r=10;for(;r<=s;)t.push(r),r+=10;return t},xs=(e,s)=>s?e.filter(t=>{const r=parseInt(t.rentalPrice.substring(1)),n=parseFloat(t.mileage),a=!s.brand||t.make.toLowerCase()===s.brand.toLowerCase(),u=!s.price||r<=s.price,m=!s.from||n>=s.from,y=!s.to||n<=s.to,V=!s.rentalCompany||t.rentalCompany.toLowerCase()===s.rentalCompany.toLowerCase();return a&&u&&m&&y&&V}):e,hr=(e,s)=>{const[t,r]=ee.useState([]);return ee.useEffect(()=>{if(!s)return;const n=[...new Set(e.map(a=>a[s]))];r(n)},[e,s]),t};var ge=e=>e.type==="checkbox",ce=e=>e instanceof Date,B=e=>e==null;const mt=e=>typeof e=="object";var L=e=>!B(e)&&!Array.isArray(e)&&mt(e)&&!ce(e),bt=e=>L(e)&&e.target?ge(e.target)?e.target.checked:e.target.value:e,gr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,vt=(e,s)=>e.has(gr(s)),pr=e=>{const s=e.constructor&&e.constructor.prototype;return L(s)&&s.hasOwnProperty("isPrototypeOf")},Pe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function H(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Pe&&(e instanceof Blob||e instanceof FileList))&&(t||L(e)))if(s=t?[]:{},!t&&!pr(e))s=e;else for(const r in e)e.hasOwnProperty(r)&&(s[r]=H(e[r]));else return e;return s}var pe=e=>Array.isArray(e)?e.filter(Boolean):[],D=e=>e===void 0,h=(e,s,t)=>{if(!s||!L(e))return t;const r=pe(s.split(/[,[\].]+?/)).reduce((n,a)=>B(n)?n:n[a],e);return D(r)||r===e?D(e[s])?t:e[s]:r},Y=e=>typeof e=="boolean";const Fe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},J={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},yr=R.createContext(null),Ue=()=>R.useContext(yr);var _t=(e,s,t,r=!0)=>{const n={defaultValues:s._defaultValues};for(const a in e)Object.defineProperty(n,a,{get:()=>{const u=a;return s._proxyFormState[u]!==J.all&&(s._proxyFormState[u]=!r||J.all),t&&(t[u]=!0),e[u]}});return n},$=e=>L(e)&&!Object.keys(e).length,Ft=(e,s,t,r)=>{t(e);const{name:n,...a}=e;return $(a)||Object.keys(a).length>=Object.keys(s).length||Object.keys(a).find(u=>s[u]===(!r||J.all))},me=e=>Array.isArray(e)?e:[e],wt=(e,s,t)=>!e||!s||e===s||me(e).some(r=>r&&(t?r===s:r.startsWith(s)||s.startsWith(r)));function ze(e){const s=R.useRef(e);s.current=e,R.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function xr(e){const s=Ue(),{control:t=s.control,disabled:r,name:n,exact:a}=e||{},[u,m]=R.useState(t._formState),y=R.useRef(!0),V=R.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),w=R.useRef(n);return w.current=n,ze({disabled:r,next:b=>y.current&&wt(w.current,b.name,a)&&Ft(b,V.current,t._updateFormState)&&m({...t._formState,...b}),subject:t._subjects.state}),R.useEffect(()=>(y.current=!0,V.current.isValid&&t._updateValid(!0),()=>{y.current=!1}),[t]),_t(u,t,V.current,!1)}var Q=e=>typeof e=="string",Vt=(e,s,t,r,n)=>Q(e)?(r&&s.watch.add(e),h(t,e,n)):Array.isArray(e)?e.map(a=>(r&&s.watch.add(a),h(t,a))):(r&&(s.watchAll=!0),t);function mr(e){const s=Ue(),{control:t=s.control,name:r,defaultValue:n,disabled:a,exact:u}=e||{},m=R.useRef(r);m.current=r,ze({disabled:a,subject:t._subjects.values,next:w=>{wt(m.current,w.name,u)&&V(H(Vt(m.current,t._names,w.values||t._formValues,!1,n)))}});const[y,V]=R.useState(t._getWatch(r,n));return R.useEffect(()=>t._removeUnmounted()),y}var Ne=e=>/^\w*$/.test(e),jt=e=>pe(e.replace(/["|']|\]/g,"").split(/\.|\[/));function S(e,s,t){let r=-1;const n=Ne(s)?[s]:jt(s),a=n.length,u=a-1;for(;++r<a;){const m=n[r];let y=t;if(r!==u){const V=e[m];y=L(V)||Array.isArray(V)?V:isNaN(+n[r+1])?{}:[]}e[m]=y,e=e[m]}return e}function br(e){const s=Ue(),{name:t,disabled:r,control:n=s.control,shouldUnregister:a}=e,u=vt(n._names.array,t),m=mr({control:n,name:t,defaultValue:h(n._formValues,t,h(n._defaultValues,t,e.defaultValue)),exact:!0}),y=xr({control:n,name:t}),V=R.useRef(n.register(t,{...e.rules,value:m}));return V.current=n.register(t,e.rules),R.useEffect(()=>{const w=n._options.shouldUnregister||a,b=(v,M)=>{const k=h(n._fields,v);k&&(k._f.mount=M)};if(b(t,!0),w){const v=H(h(n._options.defaultValues,t));S(n._defaultValues,t,v),D(h(n._formValues,t))&&S(n._formValues,t,v)}return()=>{(u?w&&!n._state.action:w)?n.unregister(t):b(t,!1)}},[t,n,u,a]),R.useEffect(()=>{h(n._fields,t)&&n._updateDisabledField({disabled:r,fields:n._fields,name:t,value:h(n._fields,t)._f.value})},[r,t,n]),{field:{name:t,value:m,...Y(r)||Y(y.disabled)?{disabled:y.disabled||r}:{},onChange:R.useCallback(w=>V.current.onChange({target:{value:bt(w),name:t},type:Fe.CHANGE}),[t]),onBlur:R.useCallback(()=>V.current.onBlur({target:{value:h(n._formValues,t),name:t},type:Fe.BLUR}),[t,n]),ref:w=>{const b=h(n._fields,t);b&&w&&(b._f.ref={focus:()=>w.focus(),select:()=>w.select(),setCustomValidity:v=>w.setCustomValidity(v),reportValidity:()=>w.reportValidity()})}},formState:y,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!h(y.errors,t)},isDirty:{enumerable:!0,get:()=>!!h(y.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!h(y.touchedFields,t)},error:{enumerable:!0,get:()=>h(y.errors,t)}})}}const st=e=>e.render(br(e));var vr=(e,s,t,r,n)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[r]:n||!0}}:{},it=e=>({isOnSubmit:!e||e===J.onSubmit,isOnBlur:e===J.onBlur,isOnChange:e===J.onChange,isOnAll:e===J.all,isOnTouch:e===J.onTouched}),nt=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const be=(e,s,t,r)=>{for(const n of t||Object.keys(e)){const a=h(e,n);if(a){const{_f:u,...m}=a;if(u){if(u.refs&&u.refs[0]&&s(u.refs[0],n)&&!r)break;if(u.ref&&s(u.ref,u.name)&&!r)break}else L(m)&&be(m,s)}}};var _r=(e,s,t)=>{const r=pe(h(e,t));return S(r,"root",s[t]),S(e,t,r),e},$e=e=>e.type==="file",te=e=>typeof e=="function",we=e=>{if(!Pe)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>Q(e),We=e=>e.type==="radio",Ve=e=>e instanceof RegExp;const ot={value:!1,isValid:!1},at={value:!0,isValid:!0};var At=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!D(e[0].attributes.value)?D(e[0].value)||e[0].value===""?at:{value:e[0].value,isValid:!0}:at:ot}return ot};const lt={isValid:!1,value:null};var kt=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,lt):lt;function ct(e,s,t="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||Y(e)&&!e)return{type:t,message:ve(e)?e:"",ref:s}}var ae=e=>L(e)&&!Ve(e)?e:{value:e,message:""},ut=async(e,s,t,r,n)=>{const{ref:a,refs:u,required:m,maxLength:y,minLength:V,min:w,max:b,pattern:v,validate:M,name:k,valueAsNumber:I,mount:z,disabled:ue}=e._f,_=h(s,k);if(!z||ue)return{};const U=u?u[0]:a,W=j=>{r&&U.reportValidity&&(U.setCustomValidity(Y(j)?"":j||""),U.reportValidity())},E={},de=We(a),ne=ge(a),Ce=de||ne,K=(I||$e(a))&&D(a.value)&&D(_)||we(a)&&a.value===""||_===""||Array.isArray(_)&&!_.length,re=vr.bind(null,k,t,E),X=(j,F,q,P=Z.maxLength,N=Z.minLength)=>{const G=j?F:q;E[k]={type:j?P:N,message:G,ref:a,...re(j?P:N,G)}};if(n?!Array.isArray(_)||!_.length:m&&(!Ce&&(K||B(_))||Y(_)&&!_||ne&&!At(u).isValid||de&&!kt(u).isValid)){const{value:j,message:F}=ve(m)?{value:!!m,message:m}:ae(m);if(j&&(E[k]={type:Z.required,message:F,ref:U,...re(Z.required,F)},!t))return W(F),E}if(!K&&(!B(w)||!B(b))){let j,F;const q=ae(b),P=ae(w);if(!B(_)&&!isNaN(_)){const N=a.valueAsNumber||_&&+_;B(q.value)||(j=N>q.value),B(P.value)||(F=N<P.value)}else{const N=a.valueAsDate||new Date(_),G=ye=>new Date(new Date().toDateString()+" "+ye),se=a.type=="time",fe=a.type=="week";Q(q.value)&&_&&(j=se?G(_)>G(q.value):fe?_>q.value:N>new Date(q.value)),Q(P.value)&&_&&(F=se?G(_)<G(P.value):fe?_<P.value:N<new Date(P.value))}if((j||F)&&(X(!!j,q.message,P.message,Z.max,Z.min),!t))return W(E[k].message),E}if((y||V)&&!K&&(Q(_)||n&&Array.isArray(_))){const j=ae(y),F=ae(V),q=!B(j.value)&&_.length>+j.value,P=!B(F.value)&&_.length<+F.value;if((q||P)&&(X(q,j.message,F.message),!t))return W(E[k].message),E}if(v&&!K&&Q(_)){const{value:j,message:F}=ae(v);if(Ve(j)&&!_.match(j)&&(E[k]={type:Z.pattern,message:F,ref:a,...re(Z.pattern,F)},!t))return W(F),E}if(M){if(te(M)){const j=await M(_,s),F=ct(j,U);if(F&&(E[k]={...F,...re(Z.validate,F.message)},!t))return W(F.message),E}else if(L(M)){let j={};for(const F in M){if(!$(j)&&!t)break;const q=ct(await M[F](_,s),U,F);q&&(j={...q,...re(F,q.message)},W(q.message),t&&(E[k]=j))}if(!$(j)&&(E[k]={ref:U,...j},!t))return E}}return W(!0),E};function Fr(e,s){const t=s.slice(0,-1).length;let r=0;for(;r<t;)e=D(e)?r++:e[s[r++]];return e}function wr(e){for(const s in e)if(e.hasOwnProperty(s)&&!D(e[s]))return!1;return!0}function O(e,s){const t=Array.isArray(s)?s:Ne(s)?[s]:jt(s),r=t.length===1?e:Fr(e,t),n=t.length-1,a=t[n];return r&&delete r[a],n!==0&&(L(r)&&$(r)||Array.isArray(r)&&wr(r))&&O(e,t.slice(0,-1)),e}function Te(){let e=[];return{get observers(){return e},next:n=>{for(const a of e)a.next&&a.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(a=>a!==n)}}),unsubscribe:()=>{e=[]}}}var je=e=>B(e)||!mt(e);function ie(e,s){if(je(e)||je(s))return e===s;if(ce(e)&&ce(s))return e.getTime()===s.getTime();const t=Object.keys(e),r=Object.keys(s);if(t.length!==r.length)return!1;for(const n of t){const a=e[n];if(!r.includes(n))return!1;if(n!=="ref"){const u=s[n];if(ce(a)&&ce(u)||L(a)&&L(u)||Array.isArray(a)&&Array.isArray(u)?!ie(a,u):a!==u)return!1}}return!0}var Ct=e=>e.type==="select-multiple",Vr=e=>We(e)||ge(e),Le=e=>we(e)&&e.isConnected,St=e=>{for(const s in e)if(te(e[s]))return!0;return!1};function Ae(e,s={}){const t=Array.isArray(e);if(L(e)||t)for(const r in e)Array.isArray(e[r])||L(e[r])&&!St(e[r])?(s[r]=Array.isArray(e[r])?[]:{},Ae(e[r],s[r])):B(e[r])||(s[r]=!0);return s}function Rt(e,s,t){const r=Array.isArray(e);if(L(e)||r)for(const n in e)Array.isArray(e[n])||L(e[n])&&!St(e[n])?D(s)||je(t[n])?t[n]=Array.isArray(e[n])?Ae(e[n],[]):{...Ae(e[n])}:Rt(e[n],B(s)?{}:s[n],t[n]):t[n]=!ie(e[n],s[n]);return t}var Me=(e,s)=>Rt(e,s,Ae(s)),Dt=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:r})=>D(e)?e:s?e===""?NaN:e&&+e:t&&Q(e)?new Date(e):r?r(e):e;function Oe(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return $e(s)?s.files:We(s)?kt(e.refs).value:Ct(s)?[...s.selectedOptions].map(({value:t})=>t):ge(s)?At(e.refs).value:Dt(D(s.value)?e.ref.value:s.value,e)}var jr=(e,s,t,r)=>{const n={};for(const a of e){const u=h(s,a);u&&S(n,a,u._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:r}},he=e=>D(e)?e:Ve(e)?e.source:L(e)?Ve(e.value)?e.value.source:e.value:e,Ar=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function dt(e,s,t){const r=h(e,t);if(r||Ne(t))return{error:r,name:t};const n=t.split(".");for(;n.length;){const a=n.join("."),u=h(s,a),m=h(e,a);if(u&&!Array.isArray(u)&&t!==a)return{name:t};if(m&&m.type)return{name:a,error:m};n.pop()}return{name:t}}var kr=(e,s,t,r,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(s||e):(t?r.isOnBlur:n.isOnBlur)?!e:(t?r.isOnChange:n.isOnChange)?e:!0,Cr=(e,s)=>!pe(h(e,s)).length&&O(e,s);const Sr={mode:J.onSubmit,reValidateMode:J.onChange,shouldFocusError:!0};function Rr(e={},s){let t={...Sr,...e},r={submitCount:0,isDirty:!1,isLoading:te(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},n={},a=L(t.defaultValues)||L(t.values)?H(t.defaultValues||t.values)||{}:{},u=t.shouldUnregister?{}:H(a),m={action:!1,mount:!1,watch:!1},y={mount:new Set,unMount:new Set,array:new Set,watch:new Set},V,w=0;const b={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Te(),array:Te(),state:Te()},M=e.resetOptions&&e.resetOptions.keepDirtyValues,k=it(t.mode),I=it(t.reValidateMode),z=t.criteriaMode===J.all,ue=i=>o=>{clearTimeout(w),w=setTimeout(i,o)},_=async i=>{if(b.isValid||i){const o=t.resolver?$((await K()).errors):await X(n,!0);o!==r.isValid&&v.state.next({isValid:o})}},U=i=>b.isValidating&&v.state.next({isValidating:i}),W=(i,o=[],l,g,f=!0,d=!0)=>{if(g&&l){if(m.action=!0,d&&Array.isArray(h(n,i))){const x=l(h(n,i),g.argA,g.argB);f&&S(n,i,x)}if(d&&Array.isArray(h(r.errors,i))){const x=l(h(r.errors,i),g.argA,g.argB);f&&S(r.errors,i,x),Cr(r.errors,i)}if(b.touchedFields&&d&&Array.isArray(h(r.touchedFields,i))){const x=l(h(r.touchedFields,i),g.argA,g.argB);f&&S(r.touchedFields,i,x)}b.dirtyFields&&(r.dirtyFields=Me(a,u)),v.state.next({name:i,isDirty:F(i,o),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else S(u,i,o)},E=(i,o)=>{S(r.errors,i,o),v.state.next({errors:r.errors})},de=(i,o,l,g)=>{const f=h(n,i);if(f){const d=h(u,i,D(l)?h(a,i):l);D(d)||g&&g.defaultChecked||o?S(u,i,o?d:Oe(f._f)):N(i,d),m.mount&&_()}},ne=(i,o,l,g,f)=>{let d=!1,x=!1;const C={name:i};if(!l||g){b.isDirty&&(x=r.isDirty,r.isDirty=C.isDirty=F(),d=x!==C.isDirty);const T=ie(h(a,i),o);x=h(r.dirtyFields,i),T?O(r.dirtyFields,i):S(r.dirtyFields,i,!0),C.dirtyFields=r.dirtyFields,d=d||b.dirtyFields&&x!==!T}if(l){const T=h(r.touchedFields,i);T||(S(r.touchedFields,i,l),C.touchedFields=r.touchedFields,d=d||b.touchedFields&&T!==l)}return d&&f&&v.state.next(C),d?C:{}},Ce=(i,o,l,g)=>{const f=h(r.errors,i),d=b.isValid&&Y(o)&&r.isValid!==o;if(e.delayError&&l?(V=ue(()=>E(i,l)),V(e.delayError)):(clearTimeout(w),V=null,l?S(r.errors,i,l):O(r.errors,i)),(l?!ie(f,l):f)||!$(g)||d){const x={...g,...d&&Y(o)?{isValid:o}:{},errors:r.errors,name:i};r={...r,...x},v.state.next(x)}U(!1)},K=async i=>t.resolver(u,t.context,jr(i||y.mount,n,t.criteriaMode,t.shouldUseNativeValidation)),re=async i=>{const{errors:o}=await K(i);if(i)for(const l of i){const g=h(o,l);g?S(r.errors,l,g):O(r.errors,l)}else r.errors=o;return o},X=async(i,o,l={valid:!0})=>{for(const g in i){const f=i[g];if(f){const{_f:d,...x}=f;if(d){const C=y.array.has(d.name),T=await ut(f,u,z,t.shouldUseNativeValidation&&!o,C);if(T[d.name]&&(l.valid=!1,o))break;!o&&(h(T,d.name)?C?_r(r.errors,T,d.name):S(r.errors,d.name,T[d.name]):O(r.errors,d.name))}x&&await X(x,o,l)}}return l.valid},j=()=>{for(const i of y.unMount){const o=h(n,i);o&&(o._f.refs?o._f.refs.every(l=>!Le(l)):!Le(o._f.ref))&&Re(i)}y.unMount=new Set},F=(i,o)=>(i&&o&&S(u,i,o),!ie(Je(),a)),q=(i,o,l)=>Vt(i,y,{...m.mount?u:D(o)?a:Q(i)?{[i]:o}:o},l,o),P=i=>pe(h(m.mount?u:a,i,e.shouldUnregister?h(a,i,[]):[])),N=(i,o,l={})=>{const g=h(n,i);let f=o;if(g){const d=g._f;d&&(!d.disabled&&S(u,i,Dt(o,d)),f=we(d.ref)&&B(o)?"":o,Ct(d.ref)?[...d.ref.options].forEach(x=>x.selected=f.includes(x.value)):d.refs?ge(d.ref)?d.refs.length>1?d.refs.forEach(x=>(!x.defaultChecked||!x.disabled)&&(x.checked=Array.isArray(f)?!!f.find(C=>C===x.value):f===x.value)):d.refs[0]&&(d.refs[0].checked=!!f):d.refs.forEach(x=>x.checked=x.value===f):$e(d.ref)?d.ref.value="":(d.ref.value=f,d.ref.type||v.values.next({name:i,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&ne(i,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&Se(i)},G=(i,o,l)=>{for(const g in o){const f=o[g],d=`${i}.${g}`,x=h(n,d);(y.array.has(i)||!je(f)||x&&!x._f)&&!ce(f)?G(d,f,l):N(d,f,l)}},se=(i,o,l={})=>{const g=h(n,i),f=y.array.has(i),d=H(o);S(u,i,d),f?(v.array.next({name:i,values:{...u}}),(b.isDirty||b.dirtyFields)&&l.shouldDirty&&v.state.next({name:i,dirtyFields:Me(a,u),isDirty:F(i,d)})):g&&!g._f&&!B(d)?G(i,d,l):N(i,d,l),nt(i,y)&&v.state.next({...r}),v.values.next({name:i,values:{...u}}),!m.mount&&s()},fe=async i=>{const o=i.target;let l=o.name,g=!0;const f=h(n,l),d=()=>o.type?Oe(f._f):bt(i),x=C=>{g=Number.isNaN(C)||C===h(u,l,C)};if(f){let C,T;const xe=d(),oe=i.type===Fe.BLUR||i.type===Fe.FOCUS_OUT,Ut=!Ar(f._f)&&!t.resolver&&!h(r.errors,l)&&!f._f.deps||kr(oe,h(r.touchedFields,l),r.isSubmitted,I,k),qe=nt(l,y,oe);S(u,l,xe),oe?(f._f.onBlur&&f._f.onBlur(i),V&&V(0)):f._f.onChange&&f._f.onChange(i);const Ee=ne(l,xe,oe,!1),zt=!$(Ee)||qe;if(!oe&&v.values.next({name:l,type:i.type,values:{...u}}),Ut)return b.isValid&&_(),zt&&v.state.next({name:l,...qe?{}:Ee});if(!oe&&qe&&v.state.next({...r}),U(!0),t.resolver){const{errors:tt}=await K([l]);if(x(xe),g){const Nt=dt(r.errors,n,l),rt=dt(tt,n,Nt.name||l);C=rt.error,l=rt.name,T=$(tt)}}else C=(await ut(f,u,z,t.shouldUseNativeValidation))[l],x(xe),g&&(C?T=!1:b.isValid&&(T=await X(n,!0)));g&&(f._f.deps&&Se(f._f.deps),Ce(l,T,C,Ee))}},ye=(i,o)=>{if(h(r.errors,o)&&i.focus)return i.focus(),1},Se=async(i,o={})=>{let l,g;const f=me(i);if(U(!0),t.resolver){const d=await re(D(i)?i:f);l=$(d),g=i?!f.some(x=>h(d,x)):l}else i?(g=(await Promise.all(f.map(async d=>{const x=h(n,d);return await X(x&&x._f?{[d]:x}:x)}))).every(Boolean),!(!g&&!r.isValid)&&_()):g=l=await X(n);return v.state.next({...!Q(i)||b.isValid&&l!==r.isValid?{}:{name:i},...t.resolver||!i?{isValid:l}:{},errors:r.errors,isValidating:!1}),o.shouldFocus&&!g&&be(n,ye,i?f:y.mount),g},Je=i=>{const o={...a,...m.mount?u:{}};return D(i)?o:Q(i)?h(o,i):i.map(l=>h(o,l))},Ke=(i,o)=>({invalid:!!h((o||r).errors,i),isDirty:!!h((o||r).dirtyFields,i),isTouched:!!h((o||r).touchedFields,i),error:h((o||r).errors,i)}),Ot=i=>{i&&me(i).forEach(o=>O(r.errors,o)),v.state.next({errors:i?r.errors:{}})},Ge=(i,o,l)=>{const g=(h(n,i,{_f:{}})._f||{}).ref;S(r.errors,i,{...o,ref:g}),v.state.next({name:i,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&g&&g.focus&&g.focus()},It=(i,o)=>te(i)?v.values.subscribe({next:l=>i(q(void 0,o),l)}):q(i,o,!0),Re=(i,o={})=>{for(const l of i?me(i):y.mount)y.mount.delete(l),y.array.delete(l),o.keepValue||(O(n,l),O(u,l)),!o.keepError&&O(r.errors,l),!o.keepDirty&&O(r.dirtyFields,l),!o.keepTouched&&O(r.touchedFields,l),!t.shouldUnregister&&!o.keepDefaultValue&&O(a,l);v.values.next({values:{...u}}),v.state.next({...r,...o.keepDirty?{isDirty:F()}:{}}),!o.keepIsValid&&_()},Ye=({disabled:i,name:o,field:l,fields:g,value:f})=>{if(Y(i)){const d=i?void 0:D(f)?Oe(l?l._f:h(g,o)._f):f;S(u,o,d),ne(o,d,!1,!1,!0)}},De=(i,o={})=>{let l=h(n,i);const g=Y(o.disabled);return S(n,i,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:i}},name:i,mount:!0,...o}}),y.mount.add(i),l?Ye({field:l,disabled:o.disabled,name:i}):de(i,!0,o.value),{...g?{disabled:o.disabled}:{},...t.progressive?{required:!!o.required,min:he(o.min),max:he(o.max),minLength:he(o.minLength),maxLength:he(o.maxLength),pattern:he(o.pattern)}:{},name:i,onChange:fe,onBlur:fe,ref:f=>{if(f){De(i,o),l=h(n,i);const d=D(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,x=Vr(d),C=l._f.refs||[];if(x?C.find(T=>T===d):d===l._f.ref)return;S(n,i,{_f:{...l._f,...x?{refs:[...C.filter(Le),d,...Array.isArray(h(a,i))?[{}]:[]],ref:{type:d.type,name:i}}:{ref:d}}}),de(i,!1,void 0,d)}else l=h(n,i,{}),l._f&&(l._f.mount=!1),(t.shouldUnregister||o.shouldUnregister)&&!(vt(y.array,i)&&m.action)&&y.unMount.add(i)}}},Qe=()=>t.shouldFocusError&&be(n,ye,y.mount),Bt=i=>{Y(i)&&(v.state.next({disabled:i}),be(n,o=>{o.disabled=i},0,!1))},Xe=(i,o)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let g=H(u);if(v.state.next({isSubmitting:!0}),t.resolver){const{errors:f,values:d}=await K();r.errors=f,g=d}else await X(n);O(r.errors,"root"),$(r.errors)?(v.state.next({errors:{}}),await i(g,l)):(o&&await o({...r.errors},l),Qe(),setTimeout(Qe)),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:$(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Pt=(i,o={})=>{h(n,i)&&(D(o.defaultValue)?se(i,h(a,i)):(se(i,o.defaultValue),S(a,i,o.defaultValue)),o.keepTouched||O(r.touchedFields,i),o.keepDirty||(O(r.dirtyFields,i),r.isDirty=o.defaultValue?F(i,h(a,i)):F()),o.keepError||(O(r.errors,i),b.isValid&&_()),v.state.next({...r}))},Ze=(i,o={})=>{const l=i?H(i):a,g=H(l),f=i&&!$(i)?g:a;if(o.keepDefaultValues||(a=l),!o.keepValues){if(o.keepDirtyValues||M)for(const d of y.mount)h(r.dirtyFields,d)?S(f,d,h(u,d)):se(d,h(f,d));else{if(Pe&&D(i))for(const d of y.mount){const x=h(n,d);if(x&&x._f){const C=Array.isArray(x._f.refs)?x._f.refs[0]:x._f.ref;if(we(C)){const T=C.closest("form");if(T){T.reset();break}}}}n={}}u=e.shouldUnregister?o.keepDefaultValues?H(a):{}:H(f),v.array.next({values:{...f}}),v.values.next({values:{...f}})}y={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!m.mount&&s(),m.mount=!b.isValid||!!o.keepIsValid,m.watch=!!e.shouldUnregister,v.state.next({submitCount:o.keepSubmitCount?r.submitCount:0,isDirty:o.keepDirty?r.isDirty:!!(o.keepDefaultValues&&!ie(i,a)),isSubmitted:o.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:o.keepDirtyValues?r.dirtyFields:o.keepDefaultValues&&i?Me(a,i):{},touchedFields:o.keepTouched?r.touchedFields:{},errors:o.keepErrors?r.errors:{},isSubmitSuccessful:o.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},et=(i,o)=>Ze(te(i)?i(u):i,o);return{control:{register:De,unregister:Re,getFieldState:Ke,handleSubmit:Xe,setError:Ge,_executeSchema:K,_getWatch:q,_getDirty:F,_updateValid:_,_removeUnmounted:j,_updateFieldArray:W,_updateDisabledField:Ye,_getFieldArray:P,_reset:Ze,_resetDefaultValues:()=>te(t.defaultValues)&&t.defaultValues().then(i=>{et(i,t.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:i=>{r={...r,...i}},_disableForm:Bt,_subjects:v,_proxyFormState:b,get _fields(){return n},get _formValues(){return u},get _state(){return m},set _state(i){m=i},get _defaultValues(){return a},get _names(){return y},set _names(i){y=i},get _formState(){return r},set _formState(i){r=i},get _options(){return t},set _options(i){t={...t,...i}}},trigger:Se,register:De,handleSubmit:Xe,watch:It,setValue:se,getValues:Je,reset:et,resetField:Pt,clearErrors:Ot,unregister:Re,setError:Ge,setFocus:(i,o={})=>{const l=h(n,i),g=l&&l._f;if(g){const f=g.refs?g.refs[0]:g.ref;f.focus&&(f.focus(),o.shouldSelect&&f.select())}},getFieldState:Ke}}function Dr(e={}){const s=R.useRef(),t=R.useRef(),[r,n]=R.useState({isDirty:!1,isValidating:!1,isLoading:te(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:te(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Rr(e,()=>n(u=>({...u}))),formState:r});const a=s.current.control;return a._options=e,ze({subject:a._subjects.state,next:u=>{Ft(u,a._proxyFormState,a._updateFormState,!0)&&n({...a._formState})}}),R.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),R.useEffect(()=>{if(a._proxyFormState.isDirty){const u=a._getDirty();u!==r.isDirty&&a._subjects.state.next({isDirty:u})}},[a,r.isDirty]),R.useEffect(()=>{e.values&&!ie(e.values,t.current)?(a._reset(e.values,a._options.resetOptions),t.current=e.values):a._resetDefaultValues()},[e.values,a]),R.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),s.current.formState=_t(r,a),s.current}const qr=A.form`
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
`,Ir=A.input`
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
`,Br=A.input`
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
`,Nr=A.span`
  position: absolute;
  left: 24px;
  bottom: 0;
  font-size: 18px;
  line-height: 1.11;
  font-weight: 500;
  color: var(--title-color);
`,$r=A.div`
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
`,ms=({cars:e})=>{const s=ht(rr),t=pt(),{pathname:r}=Ht(),n=r==="/favorites"&&(e==null?void 0:e.length)===0,a=fr(e),u=hr(e,"make"),{register:m,handleSubmit:y,control:V,reset:w,formState:{errors:b}}=Dr({mode:"onChange",shouldDisable:n});ee.useEffect(()=>{w(s)},[s,w]);const v=k=>{t(Jt(k))},M=()=>{t(Kt()),w({brand:"",price:"",from:"",to:""})};return c.jsx(qr,{onSubmit:y(v),disabled:n,children:c.jsxs(Er,{children:[c.jsxs(Tr,{children:[c.jsxs(Or,{children:[c.jsx("label",{htmlFor:"brand",children:"Car brand"}),c.jsx(st,{name:"brand",control:V,rules:{required:!0,message:"Brand is required"},render:({field:k})=>c.jsxs(c.Fragment,{children:[c.jsxs(Lr,{...k,children:[c.jsx("option",{value:"",children:"Enter the text"}),u&&u.map((I,z)=>c.jsx("option",{value:I,children:I},z))]}),b.brand&&c.jsx("p",{className:`error ${n?"opacity-0":"opacity-100"}`,children:b.brand.type==="required"?"Brand is required":b.brand.message})]})})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"price",children:"Price/ 1 hour"}),c.jsx("div",{children:c.jsx(st,{name:"price",control:V,rules:{required:!0,min:{value:0,message:"Must be 0 or greater"}},render:({field:k})=>c.jsxs(c.Fragment,{children:[c.jsxs(Mr,{...k,children:[c.jsx("option",{value:"",children:"To $"}),a&&a.map((I,z)=>c.jsx("option",{value:I,children:I},z))]}),b.price&&c.jsx("p",{className:`${n?"opacity-0":"opacity-100"}`,children:b.price.type==="required"?"Price is required":b.price.message})]})})})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"minMileage",children:"Car mileage / km (from)"}),c.jsxs("div",{children:[c.jsxs(Pr,{children:[c.jsx(Ir,{type:"number",...m("from",{required:"This field is required",min:{value:0,message:"Must be 0 or greater"}})}),c.jsx(zr,{children:"From"})]}),c.jsxs(Ur,{children:[c.jsx(Br,{type:"number",...m("to",{required:"This field is required",min:{value:0,message:"Must be 0 or greater"},validate:(k,{from:I})=>parseInt(k)>parseInt(I)?!0:"To must be greater than From"})}),c.jsx(Nr,{children:"To"})]}),c.jsxs("p",{className:` ${n?"opacity-0":"opacity-100"}`,children:[(b==null?void 0:b.from)&&c.jsx("span",{children:b.from.message}),(b==null?void 0:b.to)&&c.jsx("span",{children:b.to.message})]})]})]})]}),c.jsxs($r,{children:[c.jsx(ft,{type:"submit",label:"Search",children:"Search"}),c.jsx(ft,{type:"button",onClick:M,label:"Reset",children:"Reset"})]})]})})},bs=A.div`
  max-width: 1222px;
  margin: 0 auto;
`,Wr="/RentedCars/assets/matureman-7c08ad59.jpg",Hr=(e=!1)=>{const[s,t]=ee.useState(e);return{isOpen:s,open:()=>t(!0),close:()=>t(!1),toggle:()=>t(u=>!u)}},Jr=A.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border-color: transparent;
  /* font-size: 20px; */
`,Kr=A.div`
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
`,Gr=A.div`
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
`,Yr=document.getElementById("modal"),qt=({onClose:e,children:s,isOpen:t})=>{ee.useEffect(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow="visible"},[t]);const r=ee.useCallback(n=>{document.body.style.overflow="visible",ar(n,e)},[e]);return ee.useEffect(()=>(document.body.addEventListener("keydown",r),()=>document.body.removeEventListener("keydown",r)),[r]),Gt.createPortal(c.jsx(Kr,{onClick:r,children:c.jsxs(Gr,{children:[c.jsx(Jr,{onClick:e,type:"button",children:"❌"}),s]})}),Yr)};qt.propTypes={children:p.node.isRequired,onClose:p.func.isRequired,isOpen:p.bool};const Qr="/RentedCars/assets/youngman-08677e87.jpg",He=({src:e,alt:s,width:t,height:r})=>c.jsx("div",{children:c.jsx("img",{src:e?`${e}`:Qr,alt:s,width:t,height:r,loading:"lazy"})});He.propTypes={src:p.string.isRequired,alt:p.string.isRequired,className:p.string,blockClass:p.string,width:p.string.isRequired,height:p.string};const le=({conditionText:e,conditionValue:s})=>c.jsxs("li",{children:[c.jsx("p",{children:e}),s&&c.jsx("span",{children:s})]});le.propTypes={conditionText:p.string.isRequired,conditionValue:p.string};const Et=({rentConditions:e,mile:s,price:t,title:r})=>c.jsxs("div",{children:[c.jsxs("p",{children:[r,":"]}),c.jsxs("ul",{children:[c.jsx(le,{conditionText:e[0],conditionValue:e[1]}),c.jsx(le,{conditionText:e[2]}),c.jsx(le,{conditionText:e[3]}),c.jsx(le,{conditionText:"Mileage: ",conditionValue:s}),c.jsx(le,{conditionText:"Price: ",conditionValue:`${t}$`})]})]});Et.propTypes={rentConditions:p.array.isRequired,mile:p.string.isRequired,price:p.string.isRequired,title:p.string.isRequired};const ke=()=>c.jsx("span",{children:"|"}),Xr=A.p`
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
`,Be=({items:e,separator:s})=>c.jsx(es,{children:e.map((t,r)=>c.jsxs("li",{children:[t,r<e.length-1&&s]},r))});Be.propTypes={items:p.array.isRequired,separator:p.any};const Tt=({accessories:e,functionalities:s,title:t})=>c.jsxs(Zr,{children:[c.jsxs(Xr,{children:[t,":"]}),c.jsx(Be,{items:e,separator:c.jsx(ke,{})}),c.jsx(Be,{items:s,separator:c.jsx(ke,{})})]});Tt.propTypes={accessories:p.array.isRequired,functionalities:p.array.isRequired,title:p.string.isRequired};const ts=A.div`
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
`,Lt=({car:e})=>{const{year:s,make:t,model:r,img:n,rentalPrice:a,address:u,description:m,accessories:y,functionalities:V,rentalConditions:w,mileage:b}=e,v=cr(e),M=lr(u,e),k=ur(w),I=dr(b),z=xt(a);return c.jsxs(c.Fragment,{children:[c.jsx(He,{width:"461",height:"248",src:n,alt:`${t} ${r}`,loading:"lazy"}),c.jsxs(ts,{children:[t," ",c.jsx("span",{children:r}),", ",s]}),c.jsxs(rs,{children:[c.jsx("ul",{children:Ie(M)}),c.jsx("ul",{children:Ie(v)})]}),c.jsx("div",{children:m}),c.jsx(Tt,{title:"Accessories and functionalities",accessories:y,functionalities:V}),c.jsx(Et,{title:"Rental Conditions",rentConditions:k,mile:I,price:z}),c.jsx("a",{href:"tel:+380730000000",children:"Rental car"})]})};Lt.propTypes={car:p.shape({id:p.number.isRequired,year:p.number.isRequired,make:p.string.isRequired,model:p.string.isRequired,type:p.string.isRequired,img:p.string.isRequired,description:p.string.isRequired,functionalities:p.array.isRequired,rentalPrice:p.string.isRequired,rentalCompany:p.string.isRequired,address:p.string.isRequired,mileage:p.number.isRequired,accessories:p.array.isRequired,rentalConditions:p.string.isRequired}).isRequired};const Mt=({locationData:e,carData:s})=>c.jsxs(c.Fragment,{children:[c.jsx("ul",{children:Ie(e,c.jsx(ke,{}))}),c.jsx("ul",{children:Object.entries(s).map(([t,r],n,a)=>c.jsxs("li",{children:[or(t,r),n<a.length-1&&c.jsx(ke,{})]},n))})]});Mt.propTypes={carData:p.object.isRequired,locationData:p.array.isRequired};const ss=A.li`
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
`,is=A.svg`
  width: 18px;
  height: 16px;
  stroke: #ffffff;
  fill: none;
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
  transition: background-color 0.2s ease-in-out;
  margin-top: auto;

  &:hover {
    background-color: var(--hover-accent);
  }
`,cs=({car:e})=>{const{isOpen:s,open:t,close:r}=Hr(!1),n=ht(tr),[a,u]=ee.useState(JSON.parse(localStorage.getItem("iconActive"))||!1),m=pt();ee.useEffect(()=>{localStorage.setItem("iconActive",JSON.stringify(a))},[a]);const y=()=>{u(!a)},V={fill:a?"var(--accent)":"none",stroke:a?"var(--accent)":"#ffffff"},{id:w,year:b,make:v,model:M,img:k,rentalPrice:I,address:z}=e,ue=sr(e),_=ir(z,e),U=n==null?void 0:n.some(E=>E.id===w),W=()=>m(U?Qt(e):Xt(e));return c.jsx(c.Fragment,{children:c.jsxs(ss,{children:[c.jsx(ns,{type:"button",onClick:W,children:c.jsx(is,{style:V,onClick:y,children:c.jsx("use",{href:`${Yt}#heart`})},w)}),c.jsx(He,{src:k||Wr,alt:`${v} ${M}`,loading:"lazy"}),c.jsxs(os,{children:[c.jsxs(as,{children:[v,c.jsxs("span",{children:[" ",M]}),", ",b]}),c.jsx("span",{children:I})]}),c.jsx(Mt,{locationData:_,carData:ue}),c.jsx(ls,{label:"Learn more",onClick:t,children:"Learn more"}),s&&c.jsx(qt,{isOpen:s,onClose:r,children:c.jsx(Lt,{car:e})})]})})};cs.propTypes={car:p.shape({id:p.number.isRequired,year:p.number.isRequired,make:p.string.isRequired,model:p.string.isRequired,type:p.string.isRequired,img:p.string.isRequired,description:p.string.isRequired,functionalities:p.array.isRequired,rentalPrice:p.string.isRequired,rentalCompany:p.string.isRequired,address:p.string.isRequired,mileage:p.number.isRequired}).isRequired,fav:p.bool};export{cs as C,ms as F,rr as a,xs as b,bs as c,tr as d,hr as e,ys as f,Hr as g,ps as s,pt as u};
