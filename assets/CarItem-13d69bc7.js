import{R as _e,f as Nt,h as Wt,j as c,r as ee,i as R,s as A,u as ht,k as Ht,e as Jt,l as Kt,m as Gt,b as Yt,n as Qt,o as Xt}from"./index-0fe2f60b.js";import{P as x}from"./index-af2c772f.js";function gt(e=_e){const s=e===_e?Nt:Wt(e);return function(){const{store:r}=s();return r}}const Zt=gt();function er(e=_e){const s=e===_e?Zt:gt(e);return function(){return s().dispatch}}const pt=er(),ps=e=>e.cars.items,tr=e=>e.cars.favorites,rr=e=>e.cars.filter,yt=e=>{const s=e.split(", "),t=s[1],r=s[s.length-1];return{city:t,country:r}},sr=e=>{const{type:s,mileage:t,functionalities:r}=e;return{type:s,mileage:t,functionalities:r}},ir=(e,s)=>{const{city:t,country:r}=yt(e),{rentalCompany:n}=s;return[t,r,n]},Ie=(e,s)=>e.map((t,r)=>c.jsxs("li",{children:[t,r<e.length-1&&s]},r)),nr=e=>{if(!e||e.length===0)return"";let s=e[0];for(let r=1;r<e.length;r++){const n=e[r];n.split(" ").length<s.split(" ").length&&(s=n)}const t=s.split(" ");return t.length>3?t.slice(0,3).join(" "):s},or=(e,s)=>e==="functionalities"?nr(s):e==="type"?s.split(",")[0].trim():s,ys=(e,s)=>e==null?void 0:e.slice(0,s),ar=({target:e,currentTarget:s,code:t},r)=>{(e===s||t==="Escape")&&r()},lr=(e,s)=>{const{city:t,country:r}=yt(e),{year:n,type:a,id:u}=s;return[t,r,`Id: ${u}`,`Year: ${n}`,`Type: ${a}`]},cr=e=>{const{fuelConsumption:s,engineSize:t}=e;return[`Fuel Consumption: ${s}`,`Engine Size: ${t}`]},ur=e=>{const s=e.split(`
`),t=s[0].split(" ").slice(-1).join("");return s[0]=s[0].replace(t,""),s.splice(1,0,t),s},dr=e=>e.toLocaleString("en-EN"),xt=e=>e.split("").slice(1).join(""),fr=e=>{if(!Array.isArray(e)||!e.length)return[];let s=0;const t=[];if(e.forEach(n=>{const a=+xt(n.rentalPrice);a>s&&(s=a)}),s===0)return[];let r=10;for(;r<=s;)t.push(r),r+=10;return t},xs=(e,s)=>s?e.filter(t=>{const r=parseInt(t.rentalPrice.substring(1)),n=parseFloat(t.mileage),a=!s.brand||t.make.toLowerCase()===s.brand.toLowerCase(),u=!s.price||r<=s.price,b=!s.from||n>=s.from,p=!s.to||n<=s.to,w=!s.rentalCompany||t.rentalCompany.toLowerCase()===s.rentalCompany.toLowerCase();return a&&u&&b&&p&&w}):e,hr=(e,s)=>{const[t,r]=ee.useState([]);return ee.useEffect(()=>{if(!s)return;const n=[...new Set(e.map(a=>a[s]))];r(n)},[e,s]),t};var ge=e=>e.type==="checkbox",ce=e=>e instanceof Date,B=e=>e==null;const mt=e=>typeof e=="object";var T=e=>!B(e)&&!Array.isArray(e)&&mt(e)&&!ce(e),bt=e=>T(e)&&e.target?ge(e.target)?e.target.checked:e.target.value:e,gr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,vt=(e,s)=>e.has(gr(s)),pr=e=>{const s=e.constructor&&e.constructor.prototype;return T(s)&&s.hasOwnProperty("isPrototypeOf")},Pe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function H(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Pe&&(e instanceof Blob||e instanceof FileList))&&(t||T(e)))if(s=t?[]:{},!t&&!pr(e))s=e;else for(const r in e)e.hasOwnProperty(r)&&(s[r]=H(e[r]));else return e;return s}var pe=e=>Array.isArray(e)?e.filter(Boolean):[],D=e=>e===void 0,h=(e,s,t)=>{if(!s||!T(e))return t;const r=pe(s.split(/[,[\].]+?/)).reduce((n,a)=>B(n)?n:n[a],e);return D(r)||r===e?D(e[s])?t:e[s]:r},Y=e=>typeof e=="boolean";const Fe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},J={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},yr=R.createContext(null),Ue=()=>R.useContext(yr);var _t=(e,s,t,r=!0)=>{const n={defaultValues:s._defaultValues};for(const a in e)Object.defineProperty(n,a,{get:()=>{const u=a;return s._proxyFormState[u]!==J.all&&(s._proxyFormState[u]=!r||J.all),t&&(t[u]=!0),e[u]}});return n},N=e=>T(e)&&!Object.keys(e).length,Ft=(e,s,t,r)=>{t(e);const{name:n,...a}=e;return N(a)||Object.keys(a).length>=Object.keys(s).length||Object.keys(a).find(u=>s[u]===(!r||J.all))},me=e=>Array.isArray(e)?e:[e],wt=(e,s,t)=>!e||!s||e===s||me(e).some(r=>r&&(t?r===s:r.startsWith(s)||s.startsWith(r)));function ze(e){const s=R.useRef(e);s.current=e,R.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function xr(e){const s=Ue(),{control:t=s.control,disabled:r,name:n,exact:a}=e||{},[u,b]=R.useState(t._formState),p=R.useRef(!0),w=R.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),V=R.useRef(n);return V.current=n,ze({disabled:r,next:v=>p.current&&wt(V.current,v.name,a)&&Ft(v,w.current,t._updateFormState)&&b({...t._formState,...v}),subject:t._subjects.state}),R.useEffect(()=>(p.current=!0,w.current.isValid&&t._updateValid(!0),()=>{p.current=!1}),[t]),_t(u,t,w.current,!1)}var Q=e=>typeof e=="string",Vt=(e,s,t,r,n)=>Q(e)?(r&&s.watch.add(e),h(t,e,n)):Array.isArray(e)?e.map(a=>(r&&s.watch.add(a),h(t,a))):(r&&(s.watchAll=!0),t);function mr(e){const s=Ue(),{control:t=s.control,name:r,defaultValue:n,disabled:a,exact:u}=e||{},b=R.useRef(r);b.current=r,ze({disabled:a,subject:t._subjects.values,next:V=>{wt(b.current,V.name,u)&&w(H(Vt(b.current,t._names,V.values||t._formValues,!1,n)))}});const[p,w]=R.useState(t._getWatch(r,n));return R.useEffect(()=>t._removeUnmounted()),p}var $e=e=>/^\w*$/.test(e),jt=e=>pe(e.replace(/["|']|\]/g,"").split(/\.|\[/));function C(e,s,t){let r=-1;const n=$e(s)?[s]:jt(s),a=n.length,u=a-1;for(;++r<a;){const b=n[r];let p=t;if(r!==u){const w=e[b];p=T(w)||Array.isArray(w)?w:isNaN(+n[r+1])?{}:[]}e[b]=p,e=e[b]}return e}function br(e){const s=Ue(),{name:t,disabled:r,control:n=s.control,shouldUnregister:a}=e,u=vt(n._names.array,t),b=mr({control:n,name:t,defaultValue:h(n._formValues,t,h(n._defaultValues,t,e.defaultValue)),exact:!0}),p=xr({control:n,name:t}),w=R.useRef(n.register(t,{...e.rules,value:b}));return w.current=n.register(t,e.rules),R.useEffect(()=>{const V=n._options.shouldUnregister||a,v=(m,O)=>{const k=h(n._fields,m);k&&(k._f.mount=O)};if(v(t,!0),V){const m=H(h(n._options.defaultValues,t));C(n._defaultValues,t,m),D(h(n._formValues,t))&&C(n._formValues,t,m)}return()=>{(u?V&&!n._state.action:V)?n.unregister(t):v(t,!1)}},[t,n,u,a]),R.useEffect(()=>{h(n._fields,t)&&n._updateDisabledField({disabled:r,fields:n._fields,name:t,value:h(n._fields,t)._f.value})},[r,t,n]),{field:{name:t,value:b,...Y(r)||Y(p.disabled)?{disabled:p.disabled||r}:{},onChange:R.useCallback(V=>w.current.onChange({target:{value:bt(V),name:t},type:Fe.CHANGE}),[t]),onBlur:R.useCallback(()=>w.current.onBlur({target:{value:h(n._formValues,t),name:t},type:Fe.BLUR}),[t,n]),ref:V=>{const v=h(n._fields,t);v&&V&&(v._f.ref={focus:()=>V.focus(),select:()=>V.select(),setCustomValidity:m=>V.setCustomValidity(m),reportValidity:()=>V.reportValidity()})}},formState:p,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!h(p.errors,t)},isDirty:{enumerable:!0,get:()=>!!h(p.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!h(p.touchedFields,t)},error:{enumerable:!0,get:()=>h(p.errors,t)}})}}const st=e=>e.render(br(e));var vr=(e,s,t,r,n)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[r]:n||!0}}:{},it=e=>({isOnSubmit:!e||e===J.onSubmit,isOnBlur:e===J.onBlur,isOnChange:e===J.onChange,isOnAll:e===J.all,isOnTouch:e===J.onTouched}),nt=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const be=(e,s,t,r)=>{for(const n of t||Object.keys(e)){const a=h(e,n);if(a){const{_f:u,...b}=a;if(u){if(u.refs&&u.refs[0]&&s(u.refs[0],n)&&!r)break;if(u.ref&&s(u.ref,u.name)&&!r)break}else T(b)&&be(b,s)}}};var _r=(e,s,t)=>{const r=pe(h(e,t));return C(r,"root",s[t]),C(e,t,r),e},Ne=e=>e.type==="file",te=e=>typeof e=="function",we=e=>{if(!Pe)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>Q(e),We=e=>e.type==="radio",Ve=e=>e instanceof RegExp;const ot={value:!1,isValid:!1},at={value:!0,isValid:!0};var At=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!D(e[0].attributes.value)?D(e[0].value)||e[0].value===""?at:{value:e[0].value,isValid:!0}:at:ot}return ot};const lt={isValid:!1,value:null};var kt=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,lt):lt;function ct(e,s,t="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||Y(e)&&!e)return{type:t,message:ve(e)?e:"",ref:s}}var ae=e=>T(e)&&!Ve(e)?e:{value:e,message:""},ut=async(e,s,t,r,n)=>{const{ref:a,refs:u,required:b,maxLength:p,minLength:w,min:V,max:v,pattern:m,validate:O,name:k,valueAsNumber:I,mount:z,disabled:ue}=e._f,_=h(s,k);if(!z||ue)return{};const U=u?u[0]:a,W=j=>{r&&U.reportValidity&&(U.setCustomValidity(Y(j)?"":j||""),U.reportValidity())},L={},de=We(a),ne=ge(a),Se=de||ne,K=(I||Ne(a))&&D(a.value)&&D(_)||we(a)&&a.value===""||_===""||Array.isArray(_)&&!_.length,re=vr.bind(null,k,t,L),X=(j,F,q,P=Z.maxLength,$=Z.minLength)=>{const G=j?F:q;L[k]={type:j?P:$,message:G,ref:a,...re(j?P:$,G)}};if(n?!Array.isArray(_)||!_.length:b&&(!Se&&(K||B(_))||Y(_)&&!_||ne&&!At(u).isValid||de&&!kt(u).isValid)){const{value:j,message:F}=ve(b)?{value:!!b,message:b}:ae(b);if(j&&(L[k]={type:Z.required,message:F,ref:U,...re(Z.required,F)},!t))return W(F),L}if(!K&&(!B(V)||!B(v))){let j,F;const q=ae(v),P=ae(V);if(!B(_)&&!isNaN(_)){const $=a.valueAsNumber||_&&+_;B(q.value)||(j=$>q.value),B(P.value)||(F=$<P.value)}else{const $=a.valueAsDate||new Date(_),G=ye=>new Date(new Date().toDateString()+" "+ye),se=a.type=="time",fe=a.type=="week";Q(q.value)&&_&&(j=se?G(_)>G(q.value):fe?_>q.value:$>new Date(q.value)),Q(P.value)&&_&&(F=se?G(_)<G(P.value):fe?_<P.value:$<new Date(P.value))}if((j||F)&&(X(!!j,q.message,P.message,Z.max,Z.min),!t))return W(L[k].message),L}if((p||w)&&!K&&(Q(_)||n&&Array.isArray(_))){const j=ae(p),F=ae(w),q=!B(j.value)&&_.length>+j.value,P=!B(F.value)&&_.length<+F.value;if((q||P)&&(X(q,j.message,F.message),!t))return W(L[k].message),L}if(m&&!K&&Q(_)){const{value:j,message:F}=ae(m);if(Ve(j)&&!_.match(j)&&(L[k]={type:Z.pattern,message:F,ref:a,...re(Z.pattern,F)},!t))return W(F),L}if(O){if(te(O)){const j=await O(_,s),F=ct(j,U);if(F&&(L[k]={...F,...re(Z.validate,F.message)},!t))return W(F.message),L}else if(T(O)){let j={};for(const F in O){if(!N(j)&&!t)break;const q=ct(await O[F](_,s),U,F);q&&(j={...q,...re(F,q.message)},W(q.message),t&&(L[k]=j))}if(!N(j)&&(L[k]={ref:U,...j},!t))return L}}return W(!0),L};function Fr(e,s){const t=s.slice(0,-1).length;let r=0;for(;r<t;)e=D(e)?r++:e[s[r++]];return e}function wr(e){for(const s in e)if(e.hasOwnProperty(s)&&!D(e[s]))return!1;return!0}function M(e,s){const t=Array.isArray(s)?s:$e(s)?[s]:jt(s),r=t.length===1?e:Fr(e,t),n=t.length-1,a=t[n];return r&&delete r[a],n!==0&&(T(r)&&N(r)||Array.isArray(r)&&wr(r))&&M(e,t.slice(0,-1)),e}function Te(){let e=[];return{get observers(){return e},next:n=>{for(const a of e)a.next&&a.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(a=>a!==n)}}),unsubscribe:()=>{e=[]}}}var je=e=>B(e)||!mt(e);function ie(e,s){if(je(e)||je(s))return e===s;if(ce(e)&&ce(s))return e.getTime()===s.getTime();const t=Object.keys(e),r=Object.keys(s);if(t.length!==r.length)return!1;for(const n of t){const a=e[n];if(!r.includes(n))return!1;if(n!=="ref"){const u=s[n];if(ce(a)&&ce(u)||T(a)&&T(u)||Array.isArray(a)&&Array.isArray(u)?!ie(a,u):a!==u)return!1}}return!0}var St=e=>e.type==="select-multiple",Vr=e=>We(e)||ge(e),Le=e=>we(e)&&e.isConnected,Ct=e=>{for(const s in e)if(te(e[s]))return!0;return!1};function Ae(e,s={}){const t=Array.isArray(e);if(T(e)||t)for(const r in e)Array.isArray(e[r])||T(e[r])&&!Ct(e[r])?(s[r]=Array.isArray(e[r])?[]:{},Ae(e[r],s[r])):B(e[r])||(s[r]=!0);return s}function Rt(e,s,t){const r=Array.isArray(e);if(T(e)||r)for(const n in e)Array.isArray(e[n])||T(e[n])&&!Ct(e[n])?D(s)||je(t[n])?t[n]=Array.isArray(e[n])?Ae(e[n],[]):{...Ae(e[n])}:Rt(e[n],B(s)?{}:s[n],t[n]):t[n]=!ie(e[n],s[n]);return t}var Me=(e,s)=>Rt(e,s,Ae(s)),Dt=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:r})=>D(e)?e:s?e===""?NaN:e&&+e:t&&Q(e)?new Date(e):r?r(e):e;function Oe(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Ne(s)?s.files:We(s)?kt(e.refs).value:St(s)?[...s.selectedOptions].map(({value:t})=>t):ge(s)?At(e.refs).value:Dt(D(s.value)?e.ref.value:s.value,e)}var jr=(e,s,t,r)=>{const n={};for(const a of e){const u=h(s,a);u&&C(n,a,u._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:r}},he=e=>D(e)?e:Ve(e)?e.source:T(e)?Ve(e.value)?e.value.source:e.value:e,Ar=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function dt(e,s,t){const r=h(e,t);if(r||$e(t))return{error:r,name:t};const n=t.split(".");for(;n.length;){const a=n.join("."),u=h(s,a),b=h(e,a);if(u&&!Array.isArray(u)&&t!==a)return{name:t};if(b&&b.type)return{name:a,error:b};n.pop()}return{name:t}}var kr=(e,s,t,r,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(s||e):(t?r.isOnBlur:n.isOnBlur)?!e:(t?r.isOnChange:n.isOnChange)?e:!0,Sr=(e,s)=>!pe(h(e,s)).length&&M(e,s);const Cr={mode:J.onSubmit,reValidateMode:J.onChange,shouldFocusError:!0};function Rr(e={},s){let t={...Cr,...e},r={submitCount:0,isDirty:!1,isLoading:te(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},n={},a=T(t.defaultValues)||T(t.values)?H(t.defaultValues||t.values)||{}:{},u=t.shouldUnregister?{}:H(a),b={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w,V=0;const v={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:Te(),array:Te(),state:Te()},O=e.resetOptions&&e.resetOptions.keepDirtyValues,k=it(t.mode),I=it(t.reValidateMode),z=t.criteriaMode===J.all,ue=i=>o=>{clearTimeout(V),V=setTimeout(i,o)},_=async i=>{if(v.isValid||i){const o=t.resolver?N((await K()).errors):await X(n,!0);o!==r.isValid&&m.state.next({isValid:o})}},U=i=>v.isValidating&&m.state.next({isValidating:i}),W=(i,o=[],l,g,f=!0,d=!0)=>{if(g&&l){if(b.action=!0,d&&Array.isArray(h(n,i))){const y=l(h(n,i),g.argA,g.argB);f&&C(n,i,y)}if(d&&Array.isArray(h(r.errors,i))){const y=l(h(r.errors,i),g.argA,g.argB);f&&C(r.errors,i,y),Sr(r.errors,i)}if(v.touchedFields&&d&&Array.isArray(h(r.touchedFields,i))){const y=l(h(r.touchedFields,i),g.argA,g.argB);f&&C(r.touchedFields,i,y)}v.dirtyFields&&(r.dirtyFields=Me(a,u)),m.state.next({name:i,isDirty:F(i,o),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else C(u,i,o)},L=(i,o)=>{C(r.errors,i,o),m.state.next({errors:r.errors})},de=(i,o,l,g)=>{const f=h(n,i);if(f){const d=h(u,i,D(l)?h(a,i):l);D(d)||g&&g.defaultChecked||o?C(u,i,o?d:Oe(f._f)):$(i,d),b.mount&&_()}},ne=(i,o,l,g,f)=>{let d=!1,y=!1;const S={name:i};if(!l||g){v.isDirty&&(y=r.isDirty,r.isDirty=S.isDirty=F(),d=y!==S.isDirty);const E=ie(h(a,i),o);y=h(r.dirtyFields,i),E?M(r.dirtyFields,i):C(r.dirtyFields,i,!0),S.dirtyFields=r.dirtyFields,d=d||v.dirtyFields&&y!==!E}if(l){const E=h(r.touchedFields,i);E||(C(r.touchedFields,i,l),S.touchedFields=r.touchedFields,d=d||v.touchedFields&&E!==l)}return d&&f&&m.state.next(S),d?S:{}},Se=(i,o,l,g)=>{const f=h(r.errors,i),d=v.isValid&&Y(o)&&r.isValid!==o;if(e.delayError&&l?(w=ue(()=>L(i,l)),w(e.delayError)):(clearTimeout(V),w=null,l?C(r.errors,i,l):M(r.errors,i)),(l?!ie(f,l):f)||!N(g)||d){const y={...g,...d&&Y(o)?{isValid:o}:{},errors:r.errors,name:i};r={...r,...y},m.state.next(y)}U(!1)},K=async i=>t.resolver(u,t.context,jr(i||p.mount,n,t.criteriaMode,t.shouldUseNativeValidation)),re=async i=>{const{errors:o}=await K(i);if(i)for(const l of i){const g=h(o,l);g?C(r.errors,l,g):M(r.errors,l)}else r.errors=o;return o},X=async(i,o,l={valid:!0})=>{for(const g in i){const f=i[g];if(f){const{_f:d,...y}=f;if(d){const S=p.array.has(d.name),E=await ut(f,u,z,t.shouldUseNativeValidation&&!o,S);if(E[d.name]&&(l.valid=!1,o))break;!o&&(h(E,d.name)?S?_r(r.errors,E,d.name):C(r.errors,d.name,E[d.name]):M(r.errors,d.name))}y&&await X(y,o,l)}}return l.valid},j=()=>{for(const i of p.unMount){const o=h(n,i);o&&(o._f.refs?o._f.refs.every(l=>!Le(l)):!Le(o._f.ref))&&Re(i)}p.unMount=new Set},F=(i,o)=>(i&&o&&C(u,i,o),!ie(Je(),a)),q=(i,o,l)=>Vt(i,p,{...b.mount?u:D(o)?a:Q(i)?{[i]:o}:o},l,o),P=i=>pe(h(b.mount?u:a,i,e.shouldUnregister?h(a,i,[]):[])),$=(i,o,l={})=>{const g=h(n,i);let f=o;if(g){const d=g._f;d&&(!d.disabled&&C(u,i,Dt(o,d)),f=we(d.ref)&&B(o)?"":o,St(d.ref)?[...d.ref.options].forEach(y=>y.selected=f.includes(y.value)):d.refs?ge(d.ref)?d.refs.length>1?d.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(f)?!!f.find(S=>S===y.value):f===y.value)):d.refs[0]&&(d.refs[0].checked=!!f):d.refs.forEach(y=>y.checked=y.value===f):Ne(d.ref)?d.ref.value="":(d.ref.value=f,d.ref.type||m.values.next({name:i,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&ne(i,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&Ce(i)},G=(i,o,l)=>{for(const g in o){const f=o[g],d=`${i}.${g}`,y=h(n,d);(p.array.has(i)||!je(f)||y&&!y._f)&&!ce(f)?G(d,f,l):$(d,f,l)}},se=(i,o,l={})=>{const g=h(n,i),f=p.array.has(i),d=H(o);C(u,i,d),f?(m.array.next({name:i,values:{...u}}),(v.isDirty||v.dirtyFields)&&l.shouldDirty&&m.state.next({name:i,dirtyFields:Me(a,u),isDirty:F(i,d)})):g&&!g._f&&!B(d)?G(i,d,l):$(i,d,l),nt(i,p)&&m.state.next({...r}),m.values.next({name:i,values:{...u}}),!b.mount&&s()},fe=async i=>{const o=i.target;let l=o.name,g=!0;const f=h(n,l),d=()=>o.type?Oe(f._f):bt(i),y=S=>{g=Number.isNaN(S)||S===h(u,l,S)};if(f){let S,E;const xe=d(),oe=i.type===Fe.BLUR||i.type===Fe.FOCUS_OUT,Ut=!Ar(f._f)&&!t.resolver&&!h(r.errors,l)&&!f._f.deps||kr(oe,h(r.touchedFields,l),r.isSubmitted,I,k),qe=nt(l,p,oe);C(u,l,xe),oe?(f._f.onBlur&&f._f.onBlur(i),w&&w(0)):f._f.onChange&&f._f.onChange(i);const Ee=ne(l,xe,oe,!1),zt=!N(Ee)||qe;if(!oe&&m.values.next({name:l,type:i.type,values:{...u}}),Ut)return v.isValid&&_(),zt&&m.state.next({name:l,...qe?{}:Ee});if(!oe&&qe&&m.state.next({...r}),U(!0),t.resolver){const{errors:tt}=await K([l]);if(y(xe),g){const $t=dt(r.errors,n,l),rt=dt(tt,n,$t.name||l);S=rt.error,l=rt.name,E=N(tt)}}else S=(await ut(f,u,z,t.shouldUseNativeValidation))[l],y(xe),g&&(S?E=!1:v.isValid&&(E=await X(n,!0)));g&&(f._f.deps&&Ce(f._f.deps),Se(l,E,S,Ee))}},ye=(i,o)=>{if(h(r.errors,o)&&i.focus)return i.focus(),1},Ce=async(i,o={})=>{let l,g;const f=me(i);if(U(!0),t.resolver){const d=await re(D(i)?i:f);l=N(d),g=i?!f.some(y=>h(d,y)):l}else i?(g=(await Promise.all(f.map(async d=>{const y=h(n,d);return await X(y&&y._f?{[d]:y}:y)}))).every(Boolean),!(!g&&!r.isValid)&&_()):g=l=await X(n);return m.state.next({...!Q(i)||v.isValid&&l!==r.isValid?{}:{name:i},...t.resolver||!i?{isValid:l}:{},errors:r.errors,isValidating:!1}),o.shouldFocus&&!g&&be(n,ye,i?f:p.mount),g},Je=i=>{const o={...a,...b.mount?u:{}};return D(i)?o:Q(i)?h(o,i):i.map(l=>h(o,l))},Ke=(i,o)=>({invalid:!!h((o||r).errors,i),isDirty:!!h((o||r).dirtyFields,i),isTouched:!!h((o||r).touchedFields,i),error:h((o||r).errors,i)}),Ot=i=>{i&&me(i).forEach(o=>M(r.errors,o)),m.state.next({errors:i?r.errors:{}})},Ge=(i,o,l)=>{const g=(h(n,i,{_f:{}})._f||{}).ref;C(r.errors,i,{...o,ref:g}),m.state.next({name:i,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&g&&g.focus&&g.focus()},It=(i,o)=>te(i)?m.values.subscribe({next:l=>i(q(void 0,o),l)}):q(i,o,!0),Re=(i,o={})=>{for(const l of i?me(i):p.mount)p.mount.delete(l),p.array.delete(l),o.keepValue||(M(n,l),M(u,l)),!o.keepError&&M(r.errors,l),!o.keepDirty&&M(r.dirtyFields,l),!o.keepTouched&&M(r.touchedFields,l),!t.shouldUnregister&&!o.keepDefaultValue&&M(a,l);m.values.next({values:{...u}}),m.state.next({...r,...o.keepDirty?{isDirty:F()}:{}}),!o.keepIsValid&&_()},Ye=({disabled:i,name:o,field:l,fields:g,value:f})=>{if(Y(i)){const d=i?void 0:D(f)?Oe(l?l._f:h(g,o)._f):f;C(u,o,d),ne(o,d,!1,!1,!0)}},De=(i,o={})=>{let l=h(n,i);const g=Y(o.disabled);return C(n,i,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:i}},name:i,mount:!0,...o}}),p.mount.add(i),l?Ye({field:l,disabled:o.disabled,name:i}):de(i,!0,o.value),{...g?{disabled:o.disabled}:{},...t.progressive?{required:!!o.required,min:he(o.min),max:he(o.max),minLength:he(o.minLength),maxLength:he(o.maxLength),pattern:he(o.pattern)}:{},name:i,onChange:fe,onBlur:fe,ref:f=>{if(f){De(i,o),l=h(n,i);const d=D(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,y=Vr(d),S=l._f.refs||[];if(y?S.find(E=>E===d):d===l._f.ref)return;C(n,i,{_f:{...l._f,...y?{refs:[...S.filter(Le),d,...Array.isArray(h(a,i))?[{}]:[]],ref:{type:d.type,name:i}}:{ref:d}}}),de(i,!1,void 0,d)}else l=h(n,i,{}),l._f&&(l._f.mount=!1),(t.shouldUnregister||o.shouldUnregister)&&!(vt(p.array,i)&&b.action)&&p.unMount.add(i)}}},Qe=()=>t.shouldFocusError&&be(n,ye,p.mount),Bt=i=>{Y(i)&&(m.state.next({disabled:i}),be(n,o=>{o.disabled=i},0,!1))},Xe=(i,o)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let g=H(u);if(m.state.next({isSubmitting:!0}),t.resolver){const{errors:f,values:d}=await K();r.errors=f,g=d}else await X(n);M(r.errors,"root"),N(r.errors)?(m.state.next({errors:{}}),await i(g,l)):(o&&await o({...r.errors},l),Qe(),setTimeout(Qe)),m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:N(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Pt=(i,o={})=>{h(n,i)&&(D(o.defaultValue)?se(i,h(a,i)):(se(i,o.defaultValue),C(a,i,o.defaultValue)),o.keepTouched||M(r.touchedFields,i),o.keepDirty||(M(r.dirtyFields,i),r.isDirty=o.defaultValue?F(i,h(a,i)):F()),o.keepError||(M(r.errors,i),v.isValid&&_()),m.state.next({...r}))},Ze=(i,o={})=>{const l=i?H(i):a,g=H(l),f=i&&!N(i)?g:a;if(o.keepDefaultValues||(a=l),!o.keepValues){if(o.keepDirtyValues||O)for(const d of p.mount)h(r.dirtyFields,d)?C(f,d,h(u,d)):se(d,h(f,d));else{if(Pe&&D(i))for(const d of p.mount){const y=h(n,d);if(y&&y._f){const S=Array.isArray(y._f.refs)?y._f.refs[0]:y._f.ref;if(we(S)){const E=S.closest("form");if(E){E.reset();break}}}}n={}}u=e.shouldUnregister?o.keepDefaultValues?H(a):{}:H(f),m.array.next({values:{...f}}),m.values.next({values:{...f}})}p={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!b.mount&&s(),b.mount=!v.isValid||!!o.keepIsValid,b.watch=!!e.shouldUnregister,m.state.next({submitCount:o.keepSubmitCount?r.submitCount:0,isDirty:o.keepDirty?r.isDirty:!!(o.keepDefaultValues&&!ie(i,a)),isSubmitted:o.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:o.keepDirtyValues?r.dirtyFields:o.keepDefaultValues&&i?Me(a,i):{},touchedFields:o.keepTouched?r.touchedFields:{},errors:o.keepErrors?r.errors:{},isSubmitSuccessful:o.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},et=(i,o)=>Ze(te(i)?i(u):i,o);return{control:{register:De,unregister:Re,getFieldState:Ke,handleSubmit:Xe,setError:Ge,_executeSchema:K,_getWatch:q,_getDirty:F,_updateValid:_,_removeUnmounted:j,_updateFieldArray:W,_updateDisabledField:Ye,_getFieldArray:P,_reset:Ze,_resetDefaultValues:()=>te(t.defaultValues)&&t.defaultValues().then(i=>{et(i,t.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:i=>{r={...r,...i}},_disableForm:Bt,_subjects:m,_proxyFormState:v,get _fields(){return n},get _formValues(){return u},get _state(){return b},set _state(i){b=i},get _defaultValues(){return a},get _names(){return p},set _names(i){p=i},get _formState(){return r},set _formState(i){r=i},get _options(){return t},set _options(i){t={...t,...i}}},trigger:Ce,register:De,handleSubmit:Xe,watch:It,setValue:se,getValues:Je,reset:et,resetField:Pt,clearErrors:Ot,unregister:Re,setError:Ge,setFocus:(i,o={})=>{const l=h(n,i),g=l&&l._f;if(g){const f=g.refs?g.refs[0]:g.ref;f.focus&&(f.focus(),o.shouldSelect&&f.select())}},getFieldState:Ke}}function Dr(e={}){const s=R.useRef(),t=R.useRef(),[r,n]=R.useState({isDirty:!1,isValidating:!1,isLoading:te(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:te(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Rr(e,()=>n(u=>({...u}))),formState:r});const a=s.current.control;return a._options=e,ze({subject:a._subjects.state,next:u=>{Ft(u,a._proxyFormState,a._updateFormState,!0)&&n({...a._formState})}}),R.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),R.useEffect(()=>{if(a._proxyFormState.isDirty){const u=a._getDirty();u!==r.isDirty&&a._subjects.state.next({isDirty:u})}},[a,r.isDirty]),R.useEffect(()=>{e.values&&!ie(e.values,t.current)?(a._reset(e.values,a._options.resetOptions),t.current=e.values):a._resetDefaultValues()},[e.values,a]),R.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),s.current.formState=_t(r,a),s.current}const qr=A.form`
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
`,ms=({cars:e})=>{const s=ht(rr),t=pt(),{pathname:r}=Ht(),n=r==="/favorites"&&(e==null?void 0:e.length)===0,a=fr(e),u=hr(e,"make"),{register:b,handleSubmit:p,control:w,reset:V,formState:{errors:v}}=Dr({mode:"onChange",shouldDisable:n});ee.useEffect(()=>{V(s)},[s,V]);const m=k=>{t(Jt(k))},O=()=>{t(Kt()),V({brand:"",price:"",from:"",to:""})};return c.jsx(qr,{onSubmit:p(m),disabled:n,children:c.jsxs(Er,{children:[c.jsxs(Tr,{children:[c.jsxs(Or,{children:[c.jsx("label",{htmlFor:"brand",children:"Car brand"}),c.jsx(st,{name:"brand",control:w,rules:{required:!0,message:"Brand is required"},render:({field:k})=>c.jsxs(c.Fragment,{children:[c.jsxs(Lr,{...k,children:[c.jsx("option",{value:"",children:"Enter the text"}),u&&u.map((I,z)=>c.jsx("option",{value:I,children:I},z))]}),v.brand&&c.jsx("p",{className:`error ${n?"opacity-0":"opacity-100"}`,children:v.brand.type==="required"?"Brand is required":v.brand.message})]})})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"price",children:"Price/ 1 hour"}),c.jsx("div",{children:c.jsx(st,{name:"price",control:w,rules:{required:!0,min:{value:0,message:"Must be 0 or greater"}},render:({field:k})=>c.jsxs(c.Fragment,{children:[c.jsxs(Mr,{...k,children:[c.jsx("option",{value:"",children:"To $"}),a&&a.map((I,z)=>c.jsx("option",{value:I,children:I},z))]}),v.price&&c.jsx("p",{className:`${n?"opacity-0":"opacity-100"}`,children:v.price.type==="required"?"Price is required":v.price.message})]})})})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"minMileage",children:"Car mileage / km (from)"}),c.jsxs("div",{children:[c.jsxs(Pr,{children:[c.jsx(Ir,{type:"number",...b("from",{required:"This field is required",min:{value:0,message:"Must be 0 or greater"}})}),c.jsx(zr,{children:"From"})]}),c.jsxs(Ur,{children:[c.jsx(Br,{type:"number",...b("to",{required:"This field is required",min:{value:0,message:"Must be 0 or greater"},validate:(k,{from:I})=>parseInt(k)>parseInt(I)?!0:"To must be greater than From"})}),c.jsx($r,{children:"To"})]}),c.jsxs("p",{className:` ${n?"opacity-0":"opacity-100"}`,children:[(v==null?void 0:v.from)&&c.jsx("span",{children:v.from.message}),(v==null?void 0:v.to)&&c.jsx("span",{children:v.to.message})]})]})]})]}),c.jsxs(Nr,{children:[c.jsx(ft,{type:"submit",label:"Search",children:"Search"}),c.jsx(ft,{type:"button",onClick:O,label:"Reset",children:"Reset"})]})]})})},bs=A.div`
  max-width: 1222px;
  margin: 0 auto;
  width: 100%;
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
`,Yr=document.getElementById("modal"),qt=({onClose:e,children:s,isOpen:t})=>{ee.useEffect(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow="visible"},[t]);const r=ee.useCallback(n=>{document.body.style.overflow="visible",ar(n,e)},[e]);return ee.useEffect(()=>(document.body.addEventListener("keydown",r),()=>document.body.removeEventListener("keydown",r)),[r]),Gt.createPortal(c.jsx(Kr,{onClick:r,children:c.jsxs(Gr,{children:[c.jsx(Jr,{onClick:e,type:"button",children:"❌"}),s]})}),Yr)};qt.propTypes={children:x.node.isRequired,onClose:x.func.isRequired,isOpen:x.bool};const Qr="/RentedCars/assets/youngman-08677e87.jpg",He=({src:e,alt:s,width:t,height:r})=>c.jsx("div",{children:c.jsx("img",{src:e?`${e}`:Qr,alt:s,width:t,height:r,loading:"lazy"})});He.propTypes={src:x.string.isRequired,alt:x.string.isRequired,className:x.string,blockClass:x.string,height:x.string};const le=({conditionText:e,conditionValue:s})=>c.jsxs("li",{children:[c.jsx("p",{children:e}),s&&c.jsx("span",{children:s})]});le.propTypes={conditionText:x.string.isRequired,conditionValue:x.string};const Et=({rentConditions:e,mile:s,price:t,title:r})=>c.jsxs("div",{children:[c.jsxs("p",{children:[r,":"]}),c.jsxs("ul",{children:[c.jsx(le,{conditionText:e[0],conditionValue:e[1]}),c.jsx(le,{conditionText:e[2]}),c.jsx(le,{conditionText:e[3]}),c.jsx(le,{conditionText:"Mileage: ",conditionValue:s}),c.jsx(le,{conditionText:"Price: ",conditionValue:`${t}$`})]})]});Et.propTypes={rentConditions:x.array.isRequired,mile:x.string.isRequired,price:x.string.isRequired,title:x.string.isRequired};const ke=()=>c.jsx("span",{children:"|"}),Xr=A.p`
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
`,Be=({items:e,separator:s})=>c.jsx(es,{children:e.map((t,r)=>c.jsxs("li",{children:[t,r<e.length-1&&s]},r))});Be.propTypes={items:x.array.isRequired,separator:x.any};const Tt=({accessories:e,functionalities:s,title:t})=>c.jsxs(Zr,{children:[c.jsxs(Xr,{children:[t,":"]}),c.jsx(Be,{items:e,separator:c.jsx(ke,{})}),c.jsx(Be,{items:s,separator:c.jsx(ke,{})})]});Tt.propTypes={accessories:x.array.isRequired,functionalities:x.array.isRequired,title:x.string.isRequired};const ts=A.div`
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
`,Lt=({car:e})=>{const{year:s,make:t,model:r,img:n,rentalPrice:a,address:u,description:b,accessories:p,functionalities:w,rentalConditions:V,mileage:v}=e,m=cr(e),O=lr(u,e),k=ur(V),I=dr(v),z=xt(a);return c.jsxs(c.Fragment,{children:[c.jsx(He,{width:"461",height:"248",src:n,alt:`${t} ${r}`,loading:"lazy"}),c.jsxs(ts,{children:[t," ",c.jsx("span",{children:r}),", ",s]}),c.jsxs(rs,{children:[c.jsx("ul",{children:Ie(O)}),c.jsx("ul",{children:Ie(m)})]}),c.jsx("div",{children:b}),c.jsx(Tt,{title:"Accessories and functionalities",accessories:p,functionalities:w}),c.jsx(Et,{title:"Rental Conditions",rentConditions:k,mile:I,price:z}),c.jsx("a",{href:"tel:+380730000000",children:"Rental car"})]})};Lt.propTypes={car:x.shape({id:x.number.isRequired,year:x.number.isRequired,make:x.string.isRequired,model:x.string.isRequired,type:x.string.isRequired,img:x.string.isRequired,description:x.string.isRequired,functionalities:x.array.isRequired,rentalPrice:x.string.isRequired,rentalCompany:x.string.isRequired,address:x.string.isRequired,mileage:x.number.isRequired,accessories:x.array.isRequired,rentalConditions:x.string.isRequired}).isRequired};const Mt=({locationData:e,carData:s})=>c.jsxs(c.Fragment,{children:[c.jsx("ul",{children:Ie(e,c.jsx(ke,{}))}),c.jsx("ul",{children:Object.entries(s).map(([t,r],n,a)=>c.jsxs("li",{children:[or(t,r),n<a.length-1&&c.jsx(ke,{})]},n))})]});Mt.propTypes={carData:x.object.isRequired,locationData:x.array.isRequired};const ss=A.li`
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
`,cs=({car:e})=>{const{isOpen:s,open:t,close:r}=Hr(!1),n=ht(tr),{id:a,year:u,make:b,model:p,img:w,rentalPrice:V,address:v}=e,[m,O]=ee.useState(JSON.parse(localStorage.getItem(`iconActive ${a}`))||!1),k=pt();ee.useEffect(()=>{localStorage.setItem(`iconActive ${a}`,JSON.stringify(m))},[m,a]);const I={fill:m?"var(--accent)":"none",stroke:m?"var(--accent)":"#ffffff"},z=sr(e),ue=ir(v,e),_=n==null?void 0:n.some(W=>W.id===a),U=()=>{k(_?Qt(e):Xt(e)),O(!_)};return c.jsx(c.Fragment,{children:c.jsxs(ss,{children:[c.jsx(ns,{type:"button",onClick:U,children:c.jsx(is,{style:I,children:c.jsx("use",{href:`${Yt}#heart`})})}),c.jsx(He,{src:w||Wr,alt:`${b} ${p}`,loading:"lazy"}),c.jsxs(os,{children:[c.jsxs(as,{children:[b,c.jsxs("span",{children:[" ",p]}),", ",u]}),c.jsx("span",{children:V})]}),c.jsx(Mt,{locationData:ue,carData:z}),c.jsx(ls,{label:"Learn more",onClick:t,children:"Learn more"}),s&&c.jsx(qt,{isOpen:s,onClose:r,children:c.jsx(Lt,{car:e})})]})})};cs.propTypes={car:x.shape({id:x.number.isRequired,year:x.number.isRequired,make:x.string.isRequired,model:x.string.isRequired,type:x.string.isRequired,img:x.string.isRequired,description:x.string.isRequired,functionalities:x.array.isRequired,rentalPrice:x.string.isRequired,rentalCompany:x.string.isRequired,address:x.string.isRequired,mileage:x.number.isRequired}).isRequired,fav:x.bool};export{cs as C,ms as F,rr as a,xs as b,bs as c,tr as d,hr as e,ys as f,Hr as g,ps as s,pt as u};
