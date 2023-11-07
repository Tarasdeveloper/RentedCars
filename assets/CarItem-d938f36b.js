import{R as _e,f as Ht,h as Wt,j as u,r as ie,i as k,s as I,u as yt,k as Kt,e as Gt,l as Yt,m as Jt,n as Qt,o as Xt}from"./index-c81c54ec.js";import{P as p}from"./index-82245008.js";function gt(e=_e){const s=e===_e?Ht:Wt(e);return function(){const{store:r}=s();return r}}const Zt=gt();function er(e=_e){const s=e===_e?Zt:gt(e);return function(){return s().dispatch}}const pt=er(),Zr=e=>e.cars.items,tr=e=>e.cars.favorites,rr=e=>e.cars.filter,xt=e=>{const s=e.split(", "),t=s[1],r=s[s.length-1];return{city:t,country:r}},sr=e=>{const{type:s,mileage:t,functionalities:r}=e;return{type:s,mileage:t,functionalities:r}},ir=(e,s)=>{const{city:t,country:r}=xt(e),{rentalCompany:n}=s;return[t,r,n]},Be=(e,s)=>e.map((t,r)=>u.jsxs("li",{children:[t,r<e.length-1&&s]},r)),nr=e=>{if(!e||e.length===0)return"";let s=e[0];for(let r=1;r<e.length;r++){const n=e[r];n.split(" ").length<s.split(" ").length&&(s=n)}const t=s.split(" ");return t.length>3?t.slice(0,3).join(" "):s},or=(e,s)=>e==="functionalities"?nr(s):e==="type"?s.split(",")[0].trim():s,es=(e,s)=>e==null?void 0:e.slice(0,s),ar=({target:e,currentTarget:s,code:t},r)=>{(e===s||t==="Escape")&&r()},lr=(e,s)=>{const{city:t,country:r}=xt(e),{year:n,type:a,id:c}=s;return[t,r,`Id: ${c}`,`Year: ${n}`,`Type: ${a}`]},ur=e=>{const{fuelConsumption:s,engineSize:t}=e;return[`Fuel Consumption: ${s}`,`Engine Size: ${t}`]},cr=e=>{const s=e.split(`
`),t=s[0].split(" ").slice(-1).join("");return s[0]=s[0].replace(t,""),s.splice(1,0,t),s},dr=e=>e.toLocaleString("en-EN"),mt=e=>e.split("").slice(1).join(""),fr=e=>{if(!Array.isArray(e)||!e.length)return[];let s=0;const t=[];if(e.forEach(n=>{const a=+mt(n.rentalPrice);a>s&&(s=a)}),s===0)return[];let r=10;for(;r<=s;)t.push(r),r+=10;return t},ts=(e,s)=>s?e.filter(t=>{const r=parseInt(t.rentalPrice.substring(1)),n=parseFloat(t.mileage),a=!s.brand||t.make.toLowerCase()===s.brand.toLowerCase(),c=!s.price||r<=s.price,b=!s.from||n>=s.from,g=!s.to||n<=s.to,j=!s.rentalCompany||t.rentalCompany.toLowerCase()===s.rentalCompany.toLowerCase();return a&&c&&b&&g&&j}):e,hr=(e,s)=>{const[t,r]=ie.useState([]);return ie.useEffect(()=>{if(!s)return;const n=[...new Set(e.map(a=>a[s]))];r(n)},[e,s]),t};var ye=e=>e.type==="checkbox",ue=e=>e instanceof Date,B=e=>e==null;const bt=e=>typeof e=="object";var E=e=>!B(e)&&!Array.isArray(e)&&bt(e)&&!ue(e),vt=e=>E(e)&&e.target?ye(e.target)?e.target.checked:e.target.value:e,yr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,_t=(e,s)=>e.has(yr(s)),gr=e=>{const s=e.constructor&&e.constructor.prototype;return E(s)&&s.hasOwnProperty("isPrototypeOf")},Pe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function H(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Pe&&(e instanceof Blob||e instanceof FileList))&&(t||E(e)))if(s=t?[]:{},!t&&!gr(e))s=e;else for(const r in e)e.hasOwnProperty(r)&&(s[r]=H(e[r]));else return e;return s}var ge=e=>Array.isArray(e)?e.filter(Boolean):[],D=e=>e===void 0,h=(e,s,t)=>{if(!s||!E(e))return t;const r=ge(s.split(/[,[\].]+?/)).reduce((n,a)=>B(n)?n:n[a],e);return D(r)||r===e?D(e[s])?t:e[s]:r},Y=e=>typeof e=="boolean";const Fe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},W={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},pr=k.createContext(null),Ue=()=>k.useContext(pr);var Ft=(e,s,t,r=!0)=>{const n={defaultValues:s._defaultValues};for(const a in e)Object.defineProperty(n,a,{get:()=>{const c=a;return s._proxyFormState[c]!==W.all&&(s._proxyFormState[c]=!r||W.all),t&&(t[c]=!0),e[c]}});return n},$=e=>E(e)&&!Object.keys(e).length,Vt=(e,s,t,r)=>{t(e);const{name:n,...a}=e;return $(a)||Object.keys(a).length>=Object.keys(s).length||Object.keys(a).find(c=>s[c]===(!r||W.all))},me=e=>Array.isArray(e)?e:[e],jt=(e,s,t)=>!e||!s||e===s||me(e).some(r=>r&&(t?r===s:r.startsWith(s)||s.startsWith(r)));function Ne(e){const s=k.useRef(e);s.current=e,k.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function xr(e){const s=Ue(),{control:t=s.control,disabled:r,name:n,exact:a}=e||{},[c,b]=k.useState(t._formState),g=k.useRef(!0),j=k.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),V=k.useRef(n);return V.current=n,Ne({disabled:r,next:m=>g.current&&jt(V.current,m.name,a)&&Vt(m,j.current,t._updateFormState)&&b({...t._formState,...m}),subject:t._subjects.state}),k.useEffect(()=>(g.current=!0,j.current.isValid&&t._updateValid(!0),()=>{g.current=!1}),[t]),Ft(c,t,j.current,!1)}var J=e=>typeof e=="string",wt=(e,s,t,r,n)=>J(e)?(r&&s.watch.add(e),h(t,e,n)):Array.isArray(e)?e.map(a=>(r&&s.watch.add(a),h(t,a))):(r&&(s.watchAll=!0),t);function mr(e){const s=Ue(),{control:t=s.control,name:r,defaultValue:n,disabled:a,exact:c}=e||{},b=k.useRef(r);b.current=r,Ne({disabled:a,subject:t._subjects.values,next:V=>{jt(b.current,V.name,c)&&j(H(wt(b.current,t._names,V.values||t._formValues,!1,n)))}});const[g,j]=k.useState(t._getWatch(r,n));return k.useEffect(()=>t._removeUnmounted()),g}var $e=e=>/^\w*$/.test(e),At=e=>ge(e.replace(/["|']|\]/g,"").split(/\.|\[/));function C(e,s,t){let r=-1;const n=$e(s)?[s]:At(s),a=n.length,c=a-1;for(;++r<a;){const b=n[r];let g=t;if(r!==c){const j=e[b];g=E(j)||Array.isArray(j)?j:isNaN(+n[r+1])?{}:[]}e[b]=g,e=e[b]}return e}function br(e){const s=Ue(),{name:t,disabled:r,control:n=s.control,shouldUnregister:a}=e,c=_t(n._names.array,t),b=mr({control:n,name:t,defaultValue:h(n._formValues,t,h(n._defaultValues,t,e.defaultValue)),exact:!0}),g=xr({control:n,name:t}),j=k.useRef(n.register(t,{...e.rules,value:b}));return j.current=n.register(t,e.rules),k.useEffect(()=>{const V=n._options.shouldUnregister||a,m=(v,O)=>{const A=h(n._fields,v);A&&(A._f.mount=O)};if(m(t,!0),V){const v=H(h(n._options.defaultValues,t));C(n._defaultValues,t,v),D(h(n._formValues,t))&&C(n._formValues,t,v)}return()=>{(c?V&&!n._state.action:V)?n.unregister(t):m(t,!1)}},[t,n,c,a]),k.useEffect(()=>{h(n._fields,t)&&n._updateDisabledField({disabled:r,fields:n._fields,name:t,value:h(n._fields,t)._f.value})},[r,t,n]),{field:{name:t,value:b,...Y(r)||Y(g.disabled)?{disabled:g.disabled||r}:{},onChange:k.useCallback(V=>j.current.onChange({target:{value:vt(V),name:t},type:Fe.CHANGE}),[t]),onBlur:k.useCallback(()=>j.current.onBlur({target:{value:h(n._formValues,t),name:t},type:Fe.BLUR}),[t,n]),ref:V=>{const m=h(n._fields,t);m&&V&&(m._f.ref={focus:()=>V.focus(),select:()=>V.select(),setCustomValidity:v=>V.setCustomValidity(v),reportValidity:()=>V.reportValidity()})}},formState:g,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!h(g.errors,t)},isDirty:{enumerable:!0,get:()=>!!h(g.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!h(g.touchedFields,t)},error:{enumerable:!0,get:()=>h(g.errors,t)}})}}const st=e=>e.render(br(e));var vr=(e,s,t,r,n)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[r]:n||!0}}:{},it=e=>({isOnSubmit:!e||e===W.onSubmit,isOnBlur:e===W.onBlur,isOnChange:e===W.onChange,isOnAll:e===W.all,isOnTouch:e===W.onTouched}),nt=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const be=(e,s,t,r)=>{for(const n of t||Object.keys(e)){const a=h(e,n);if(a){const{_f:c,...b}=a;if(c){if(c.refs&&c.refs[0]&&s(c.refs[0],n)&&!r)break;if(c.ref&&s(c.ref,c.name)&&!r)break}else E(b)&&be(b,s)}}};var _r=(e,s,t)=>{const r=ge(h(e,t));return C(r,"root",s[t]),C(e,t,r),e},ze=e=>e.type==="file",ee=e=>typeof e=="function",Ve=e=>{if(!Pe)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>J(e),He=e=>e.type==="radio",je=e=>e instanceof RegExp;const ot={value:!1,isValid:!1},at={value:!0,isValid:!0};var Rt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!D(e[0].attributes.value)?D(e[0].value)||e[0].value===""?at:{value:e[0].value,isValid:!0}:at:ot}return ot};const lt={isValid:!1,value:null};var Ct=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,lt):lt;function ut(e,s,t="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||Y(e)&&!e)return{type:t,message:ve(e)?e:"",ref:s}}var ae=e=>E(e)&&!je(e)?e:{value:e,message:""},ct=async(e,s,t,r,n)=>{const{ref:a,refs:c,required:b,maxLength:g,minLength:j,min:V,max:m,pattern:v,validate:O,name:A,valueAsNumber:M,mount:U,disabled:ce}=e._f,_=h(s,A);if(!U||ce)return{};const z=c?c[0]:a,Q=w=>{r&&z.reportValidity&&(z.setCustomValidity(Y(w)?"":w||""),z.reportValidity())},T={},de=He(a),ne=ye(a),Ce=de||ne,K=(M||ze(a))&&D(a.value)&&D(_)||Ve(a)&&a.value===""||_===""||Array.isArray(_)&&!_.length,te=vr.bind(null,A,t,T),X=(w,F,S,P=Z.maxLength,N=Z.minLength)=>{const G=w?F:S;T[A]={type:w?P:N,message:G,ref:a,...te(w?P:N,G)}};if(n?!Array.isArray(_)||!_.length:b&&(!Ce&&(K||B(_))||Y(_)&&!_||ne&&!Rt(c).isValid||de&&!Ct(c).isValid)){const{value:w,message:F}=ve(b)?{value:!!b,message:b}:ae(b);if(w&&(T[A]={type:Z.required,message:F,ref:z,...te(Z.required,F)},!t))return Q(F),T}if(!K&&(!B(V)||!B(m))){let w,F;const S=ae(m),P=ae(V);if(!B(_)&&!isNaN(_)){const N=a.valueAsNumber||_&&+_;B(S.value)||(w=N>S.value),B(P.value)||(F=N<P.value)}else{const N=a.valueAsDate||new Date(_),G=pe=>new Date(new Date().toDateString()+" "+pe),re=a.type=="time",fe=a.type=="week";J(S.value)&&_&&(w=re?G(_)>G(S.value):fe?_>S.value:N>new Date(S.value)),J(P.value)&&_&&(F=re?G(_)<G(P.value):fe?_<P.value:N<new Date(P.value))}if((w||F)&&(X(!!w,S.message,P.message,Z.max,Z.min),!t))return Q(T[A].message),T}if((g||j)&&!K&&(J(_)||n&&Array.isArray(_))){const w=ae(g),F=ae(j),S=!B(w.value)&&_.length>+w.value,P=!B(F.value)&&_.length<+F.value;if((S||P)&&(X(S,w.message,F.message),!t))return Q(T[A].message),T}if(v&&!K&&J(_)){const{value:w,message:F}=ae(v);if(je(w)&&!_.match(w)&&(T[A]={type:Z.pattern,message:F,ref:a,...te(Z.pattern,F)},!t))return Q(F),T}if(O){if(ee(O)){const w=await O(_,s),F=ut(w,z);if(F&&(T[A]={...F,...te(Z.validate,F.message)},!t))return Q(F.message),T}else if(E(O)){let w={};for(const F in O){if(!$(w)&&!t)break;const S=ut(await O[F](_,s),z,F);S&&(w={...S,...te(F,S.message)},Q(S.message),t&&(T[A]=w))}if(!$(w)&&(T[A]={ref:z,...w},!t))return T}}return Q(!0),T};function Fr(e,s){const t=s.slice(0,-1).length;let r=0;for(;r<t;)e=D(e)?r++:e[s[r++]];return e}function Vr(e){for(const s in e)if(e.hasOwnProperty(s)&&!D(e[s]))return!1;return!0}function L(e,s){const t=Array.isArray(s)?s:$e(s)?[s]:At(s),r=t.length===1?e:Fr(e,t),n=t.length-1,a=t[n];return r&&delete r[a],n!==0&&(E(r)&&$(r)||Array.isArray(r)&&Vr(r))&&L(e,t.slice(0,-1)),e}function Te(){let e=[];return{get observers(){return e},next:n=>{for(const a of e)a.next&&a.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(a=>a!==n)}}),unsubscribe:()=>{e=[]}}}var we=e=>B(e)||!bt(e);function se(e,s){if(we(e)||we(s))return e===s;if(ue(e)&&ue(s))return e.getTime()===s.getTime();const t=Object.keys(e),r=Object.keys(s);if(t.length!==r.length)return!1;for(const n of t){const a=e[n];if(!r.includes(n))return!1;if(n!=="ref"){const c=s[n];if(ue(a)&&ue(c)||E(a)&&E(c)||Array.isArray(a)&&Array.isArray(c)?!se(a,c):a!==c)return!1}}return!0}var kt=e=>e.type==="select-multiple",jr=e=>He(e)||ye(e),Le=e=>Ve(e)&&e.isConnected,Dt=e=>{for(const s in e)if(ee(e[s]))return!0;return!1};function Ae(e,s={}){const t=Array.isArray(e);if(E(e)||t)for(const r in e)Array.isArray(e[r])||E(e[r])&&!Dt(e[r])?(s[r]=Array.isArray(e[r])?[]:{},Ae(e[r],s[r])):B(e[r])||(s[r]=!0);return s}function St(e,s,t){const r=Array.isArray(e);if(E(e)||r)for(const n in e)Array.isArray(e[n])||E(e[n])&&!Dt(e[n])?D(s)||we(t[n])?t[n]=Array.isArray(e[n])?Ae(e[n],[]):{...Ae(e[n])}:St(e[n],B(s)?{}:s[n],t[n]):t[n]=!se(e[n],s[n]);return t}var Oe=(e,s)=>St(e,s,Ae(s)),qt=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:r})=>D(e)?e:s?e===""?NaN:e&&+e:t&&J(e)?new Date(e):r?r(e):e;function Me(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return ze(s)?s.files:He(s)?Ct(e.refs).value:kt(s)?[...s.selectedOptions].map(({value:t})=>t):ye(s)?Rt(e.refs).value:qt(D(s.value)?e.ref.value:s.value,e)}var wr=(e,s,t,r)=>{const n={};for(const a of e){const c=h(s,a);c&&C(n,a,c._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:r}},he=e=>D(e)?e:je(e)?e.source:E(e)?je(e.value)?e.value.source:e.value:e,Ar=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function dt(e,s,t){const r=h(e,t);if(r||$e(t))return{error:r,name:t};const n=t.split(".");for(;n.length;){const a=n.join("."),c=h(s,a),b=h(e,a);if(c&&!Array.isArray(c)&&t!==a)return{name:t};if(b&&b.type)return{name:a,error:b};n.pop()}return{name:t}}var Rr=(e,s,t,r,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(s||e):(t?r.isOnBlur:n.isOnBlur)?!e:(t?r.isOnChange:n.isOnChange)?e:!0,Cr=(e,s)=>!ge(h(e,s)).length&&L(e,s);const kr={mode:W.onSubmit,reValidateMode:W.onChange,shouldFocusError:!0};function Dr(e={},s){let t={...kr,...e},r={submitCount:0,isDirty:!1,isLoading:ee(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},n={},a=E(t.defaultValues)||E(t.values)?H(t.defaultValues||t.values)||{}:{},c=t.shouldUnregister?{}:H(a),b={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},j,V=0;const m={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Te(),array:Te(),state:Te()},O=e.resetOptions&&e.resetOptions.keepDirtyValues,A=it(t.mode),M=it(t.reValidateMode),U=t.criteriaMode===W.all,ce=i=>o=>{clearTimeout(V),V=setTimeout(i,o)},_=async i=>{if(m.isValid||i){const o=t.resolver?$((await K()).errors):await X(n,!0);o!==r.isValid&&v.state.next({isValid:o})}},z=i=>m.isValidating&&v.state.next({isValidating:i}),Q=(i,o=[],l,y,f=!0,d=!0)=>{if(y&&l){if(b.action=!0,d&&Array.isArray(h(n,i))){const x=l(h(n,i),y.argA,y.argB);f&&C(n,i,x)}if(d&&Array.isArray(h(r.errors,i))){const x=l(h(r.errors,i),y.argA,y.argB);f&&C(r.errors,i,x),Cr(r.errors,i)}if(m.touchedFields&&d&&Array.isArray(h(r.touchedFields,i))){const x=l(h(r.touchedFields,i),y.argA,y.argB);f&&C(r.touchedFields,i,x)}m.dirtyFields&&(r.dirtyFields=Oe(a,c)),v.state.next({name:i,isDirty:F(i,o),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else C(c,i,o)},T=(i,o)=>{C(r.errors,i,o),v.state.next({errors:r.errors})},de=(i,o,l,y)=>{const f=h(n,i);if(f){const d=h(c,i,D(l)?h(a,i):l);D(d)||y&&y.defaultChecked||o?C(c,i,o?d:Me(f._f)):N(i,d),b.mount&&_()}},ne=(i,o,l,y,f)=>{let d=!1,x=!1;const R={name:i};if(!l||y){m.isDirty&&(x=r.isDirty,r.isDirty=R.isDirty=F(),d=x!==R.isDirty);const q=se(h(a,i),o);x=h(r.dirtyFields,i),q?L(r.dirtyFields,i):C(r.dirtyFields,i,!0),R.dirtyFields=r.dirtyFields,d=d||m.dirtyFields&&x!==!q}if(l){const q=h(r.touchedFields,i);q||(C(r.touchedFields,i,l),R.touchedFields=r.touchedFields,d=d||m.touchedFields&&q!==l)}return d&&f&&v.state.next(R),d?R:{}},Ce=(i,o,l,y)=>{const f=h(r.errors,i),d=m.isValid&&Y(o)&&r.isValid!==o;if(e.delayError&&l?(j=ce(()=>T(i,l)),j(e.delayError)):(clearTimeout(V),j=null,l?C(r.errors,i,l):L(r.errors,i)),(l?!se(f,l):f)||!$(y)||d){const x={...y,...d&&Y(o)?{isValid:o}:{},errors:r.errors,name:i};r={...r,...x},v.state.next(x)}z(!1)},K=async i=>t.resolver(c,t.context,wr(i||g.mount,n,t.criteriaMode,t.shouldUseNativeValidation)),te=async i=>{const{errors:o}=await K(i);if(i)for(const l of i){const y=h(o,l);y?C(r.errors,l,y):L(r.errors,l)}else r.errors=o;return o},X=async(i,o,l={valid:!0})=>{for(const y in i){const f=i[y];if(f){const{_f:d,...x}=f;if(d){const R=g.array.has(d.name),q=await ct(f,c,U,t.shouldUseNativeValidation&&!o,R);if(q[d.name]&&(l.valid=!1,o))break;!o&&(h(q,d.name)?R?_r(r.errors,q,d.name):C(r.errors,d.name,q[d.name]):L(r.errors,d.name))}x&&await X(x,o,l)}}return l.valid},w=()=>{for(const i of g.unMount){const o=h(n,i);o&&(o._f.refs?o._f.refs.every(l=>!Le(l)):!Le(o._f.ref))&&De(i)}g.unMount=new Set},F=(i,o)=>(i&&o&&C(c,i,o),!se(Ke(),a)),S=(i,o,l)=>wt(i,g,{...b.mount?c:D(o)?a:J(i)?{[i]:o}:o},l,o),P=i=>ge(h(b.mount?c:a,i,e.shouldUnregister?h(a,i,[]):[])),N=(i,o,l={})=>{const y=h(n,i);let f=o;if(y){const d=y._f;d&&(!d.disabled&&C(c,i,qt(o,d)),f=Ve(d.ref)&&B(o)?"":o,kt(d.ref)?[...d.ref.options].forEach(x=>x.selected=f.includes(x.value)):d.refs?ye(d.ref)?d.refs.length>1?d.refs.forEach(x=>(!x.defaultChecked||!x.disabled)&&(x.checked=Array.isArray(f)?!!f.find(R=>R===x.value):f===x.value)):d.refs[0]&&(d.refs[0].checked=!!f):d.refs.forEach(x=>x.checked=x.value===f):ze(d.ref)?d.ref.value="":(d.ref.value=f,d.ref.type||v.values.next({name:i,values:{...c}})))}(l.shouldDirty||l.shouldTouch)&&ne(i,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ke(i)},G=(i,o,l)=>{for(const y in o){const f=o[y],d=`${i}.${y}`,x=h(n,d);(g.array.has(i)||!we(f)||x&&!x._f)&&!ue(f)?G(d,f,l):N(d,f,l)}},re=(i,o,l={})=>{const y=h(n,i),f=g.array.has(i),d=H(o);C(c,i,d),f?(v.array.next({name:i,values:{...c}}),(m.isDirty||m.dirtyFields)&&l.shouldDirty&&v.state.next({name:i,dirtyFields:Oe(a,c),isDirty:F(i,d)})):y&&!y._f&&!B(d)?G(i,d,l):N(i,d,l),nt(i,g)&&v.state.next({...r}),v.values.next({name:i,values:{...c}}),!b.mount&&s()},fe=async i=>{const o=i.target;let l=o.name,y=!0;const f=h(n,l),d=()=>o.type?Me(f._f):vt(i),x=R=>{y=Number.isNaN(R)||R===h(c,l,R)};if(f){let R,q;const xe=d(),oe=i.type===Fe.BLUR||i.type===Fe.FOCUS_OUT,Nt=!Ar(f._f)&&!t.resolver&&!h(r.errors,l)&&!f._f.deps||Rr(oe,h(r.touchedFields,l),r.isSubmitted,M,A),qe=nt(l,g,oe);C(c,l,xe),oe?(f._f.onBlur&&f._f.onBlur(i),j&&j(0)):f._f.onChange&&f._f.onChange(i);const Ee=ne(l,xe,oe,!1),$t=!$(Ee)||qe;if(!oe&&v.values.next({name:l,type:i.type,values:{...c}}),Nt)return m.isValid&&_(),$t&&v.state.next({name:l,...qe?{}:Ee});if(!oe&&qe&&v.state.next({...r}),z(!0),t.resolver){const{errors:tt}=await K([l]);if(x(xe),y){const zt=dt(r.errors,n,l),rt=dt(tt,n,zt.name||l);R=rt.error,l=rt.name,q=$(tt)}}else R=(await ct(f,c,U,t.shouldUseNativeValidation))[l],x(xe),y&&(R?q=!1:m.isValid&&(q=await X(n,!0)));y&&(f._f.deps&&ke(f._f.deps),Ce(l,q,R,Ee))}},pe=(i,o)=>{if(h(r.errors,o)&&i.focus)return i.focus(),1},ke=async(i,o={})=>{let l,y;const f=me(i);if(z(!0),t.resolver){const d=await te(D(i)?i:f);l=$(d),y=i?!f.some(x=>h(d,x)):l}else i?(y=(await Promise.all(f.map(async d=>{const x=h(n,d);return await X(x&&x._f?{[d]:x}:x)}))).every(Boolean),!(!y&&!r.isValid)&&_()):y=l=await X(n);return v.state.next({...!J(i)||m.isValid&&l!==r.isValid?{}:{name:i},...t.resolver||!i?{isValid:l}:{},errors:r.errors,isValidating:!1}),o.shouldFocus&&!y&&be(n,pe,i?f:g.mount),y},Ke=i=>{const o={...a,...b.mount?c:{}};return D(i)?o:J(i)?h(o,i):i.map(l=>h(o,l))},Ge=(i,o)=>({invalid:!!h((o||r).errors,i),isDirty:!!h((o||r).dirtyFields,i),isTouched:!!h((o||r).touchedFields,i),error:h((o||r).errors,i)}),Bt=i=>{i&&me(i).forEach(o=>L(r.errors,o)),v.state.next({errors:i?r.errors:{}})},Ye=(i,o,l)=>{const y=(h(n,i,{_f:{}})._f||{}).ref;C(r.errors,i,{...o,ref:y}),v.state.next({name:i,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&y&&y.focus&&y.focus()},It=(i,o)=>ee(i)?v.values.subscribe({next:l=>i(S(void 0,o),l)}):S(i,o,!0),De=(i,o={})=>{for(const l of i?me(i):g.mount)g.mount.delete(l),g.array.delete(l),o.keepValue||(L(n,l),L(c,l)),!o.keepError&&L(r.errors,l),!o.keepDirty&&L(r.dirtyFields,l),!o.keepTouched&&L(r.touchedFields,l),!t.shouldUnregister&&!o.keepDefaultValue&&L(a,l);v.values.next({values:{...c}}),v.state.next({...r,...o.keepDirty?{isDirty:F()}:{}}),!o.keepIsValid&&_()},Je=({disabled:i,name:o,field:l,fields:y,value:f})=>{if(Y(i)){const d=i?void 0:D(f)?Me(l?l._f:h(y,o)._f):f;C(c,o,d),ne(o,d,!1,!1,!0)}},Se=(i,o={})=>{let l=h(n,i);const y=Y(o.disabled);return C(n,i,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:i}},name:i,mount:!0,...o}}),g.mount.add(i),l?Je({field:l,disabled:o.disabled,name:i}):de(i,!0,o.value),{...y?{disabled:o.disabled}:{},...t.progressive?{required:!!o.required,min:he(o.min),max:he(o.max),minLength:he(o.minLength),maxLength:he(o.maxLength),pattern:he(o.pattern)}:{},name:i,onChange:fe,onBlur:fe,ref:f=>{if(f){Se(i,o),l=h(n,i);const d=D(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,x=jr(d),R=l._f.refs||[];if(x?R.find(q=>q===d):d===l._f.ref)return;C(n,i,{_f:{...l._f,...x?{refs:[...R.filter(Le),d,...Array.isArray(h(a,i))?[{}]:[]],ref:{type:d.type,name:i}}:{ref:d}}}),de(i,!1,void 0,d)}else l=h(n,i,{}),l._f&&(l._f.mount=!1),(t.shouldUnregister||o.shouldUnregister)&&!(_t(g.array,i)&&b.action)&&g.unMount.add(i)}}},Qe=()=>t.shouldFocusError&&be(n,pe,g.mount),Pt=i=>{Y(i)&&(v.state.next({disabled:i}),be(n,o=>{o.disabled=i},0,!1))},Xe=(i,o)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let y=H(c);if(v.state.next({isSubmitting:!0}),t.resolver){const{errors:f,values:d}=await K();r.errors=f,y=d}else await X(n);L(r.errors,"root"),$(r.errors)?(v.state.next({errors:{}}),await i(y,l)):(o&&await o({...r.errors},l),Qe(),setTimeout(Qe)),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:$(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Ut=(i,o={})=>{h(n,i)&&(D(o.defaultValue)?re(i,h(a,i)):(re(i,o.defaultValue),C(a,i,o.defaultValue)),o.keepTouched||L(r.touchedFields,i),o.keepDirty||(L(r.dirtyFields,i),r.isDirty=o.defaultValue?F(i,h(a,i)):F()),o.keepError||(L(r.errors,i),m.isValid&&_()),v.state.next({...r}))},Ze=(i,o={})=>{const l=i?H(i):a,y=H(l),f=i&&!$(i)?y:a;if(o.keepDefaultValues||(a=l),!o.keepValues){if(o.keepDirtyValues||O)for(const d of g.mount)h(r.dirtyFields,d)?C(f,d,h(c,d)):re(d,h(f,d));else{if(Pe&&D(i))for(const d of g.mount){const x=h(n,d);if(x&&x._f){const R=Array.isArray(x._f.refs)?x._f.refs[0]:x._f.ref;if(Ve(R)){const q=R.closest("form");if(q){q.reset();break}}}}n={}}c=e.shouldUnregister?o.keepDefaultValues?H(a):{}:H(f),v.array.next({values:{...f}}),v.values.next({values:{...f}})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!b.mount&&s(),b.mount=!m.isValid||!!o.keepIsValid,b.watch=!!e.shouldUnregister,v.state.next({submitCount:o.keepSubmitCount?r.submitCount:0,isDirty:o.keepDirty?r.isDirty:!!(o.keepDefaultValues&&!se(i,a)),isSubmitted:o.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:o.keepDirtyValues?r.dirtyFields:o.keepDefaultValues&&i?Oe(a,i):{},touchedFields:o.keepTouched?r.touchedFields:{},errors:o.keepErrors?r.errors:{},isSubmitSuccessful:o.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},et=(i,o)=>Ze(ee(i)?i(c):i,o);return{control:{register:Se,unregister:De,getFieldState:Ge,handleSubmit:Xe,setError:Ye,_executeSchema:K,_getWatch:S,_getDirty:F,_updateValid:_,_removeUnmounted:w,_updateFieldArray:Q,_updateDisabledField:Je,_getFieldArray:P,_reset:Ze,_resetDefaultValues:()=>ee(t.defaultValues)&&t.defaultValues().then(i=>{et(i,t.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:i=>{r={...r,...i}},_disableForm:Pt,_subjects:v,_proxyFormState:m,get _fields(){return n},get _formValues(){return c},get _state(){return b},set _state(i){b=i},get _defaultValues(){return a},get _names(){return g},set _names(i){g=i},get _formState(){return r},set _formState(i){r=i},get _options(){return t},set _options(i){t={...t,...i}}},trigger:ke,register:Se,handleSubmit:Xe,watch:It,setValue:re,getValues:Ke,reset:et,resetField:Ut,clearErrors:Bt,unregister:De,setError:Ye,setFocus:(i,o={})=>{const l=h(n,i),y=l&&l._f;if(y){const f=y.refs?y.refs[0]:y.ref;f.focus&&(f.focus(),o.shouldSelect&&f.select())}},getFieldState:Ge}}function Sr(e={}){const s=k.useRef(),t=k.useRef(),[r,n]=k.useState({isDirty:!1,isValidating:!1,isLoading:ee(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:ee(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Dr(e,()=>n(c=>({...c}))),formState:r});const a=s.current.control;return a._options=e,Ne({subject:a._subjects.state,next:c=>{Vt(c,a._proxyFormState,a._updateFormState,!0)&&n({...a._formState})}}),k.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),k.useEffect(()=>{if(a._proxyFormState.isDirty){const c=a._getDirty();c!==r.isDirty&&a._subjects.state.next({isDirty:c})}},[a,r.isDirty]),k.useEffect(()=>{e.values&&!se(e.values,t.current)?(a._reset(e.values,a._options.resetOptions),t.current=e.values):a._resetDefaultValues()},[e.values,a]),k.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),s.current.formState=Ft(r,a),s.current}const qr=I.form`
  max-width: 1050px;
  margin: 0 auto;
`,Er=I.div`
  display: flex;
  align-items: center;
`,Tr=I.div`
  display: flex;
  margin-right: 18px;

  & label {
    color: #8a8a89;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.285;
  }
`,Lr=I.select`
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
`,Or=I.select`
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
`,Mr=I.div`
  display: flex;
  flex-direction: column;
`,Br=I.input`
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
`,Ir=I.input`
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
`,Pr=I.label`
  position: relative;
`,Ur=I.label`
  position: relative;
`,Nr=I.span`
  position: absolute;
  left: 24px;
  bottom: 0;
  font-size: 18px;
  line-height: 1.11;
  font-weight: 500;
  color: var(--title-color);
`,$r=I.span`
  position: absolute;
  left: 24px;
  bottom: 0;
  font-size: 18px;
  line-height: 1.11;
  font-weight: 500;
  color: var(--title-color);
`,ft=I.button`
  border-color: transparent;
  color: #ffffff;
  background-color: var(--accent);
  padding: 14px 44px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
`,rs=({cars:e})=>{const s=yt(rr),t=pt(),{pathname:r}=Kt(),n=r==="/favorites"&&(e==null?void 0:e.length)===0,a=fr(e),c=hr(e,"make"),{register:b,handleSubmit:g,control:j,reset:V,formState:{errors:m}}=Sr({mode:"onChange",shouldDisable:n});ie.useEffect(()=>{V(s)},[s,V]);const v=A=>{t(Gt(A))},O=()=>{t(Yt()),V({brand:"",price:"",from:"",to:""})};return u.jsx(qr,{onSubmit:g(v),disabled:n,children:u.jsxs(Er,{children:[u.jsxs(Tr,{children:[u.jsxs(Mr,{children:[u.jsx("label",{htmlFor:"brand",children:"Car brand"}),u.jsx(st,{name:"brand",control:j,rules:{required:!0,message:"Brand is required"},render:({field:A})=>u.jsxs(u.Fragment,{children:[u.jsxs(Lr,{...A,children:[u.jsx("option",{value:"",children:"Enter the text"}),c&&c.map((M,U)=>u.jsx("option",{value:M,children:M},U))]}),m.brand&&u.jsx("p",{className:`error ${n?"opacity-0":"opacity-100"}`,children:m.brand.type==="required"?"Brand is required":m.brand.message})]})})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"price",children:"Price/ 1 hour"}),u.jsx("div",{children:u.jsx(st,{name:"price",control:j,rules:{required:!0,min:{value:0,message:"Must be 0 or greater"}},render:({field:A})=>u.jsxs(u.Fragment,{children:[u.jsxs(Or,{...A,children:[u.jsx("option",{value:"",children:"To $"}),a&&a.map((M,U)=>u.jsx("option",{value:M,children:M},U))]}),m.price&&u.jsx("p",{className:`${n?"opacity-0":"opacity-100"}`,children:m.price.type==="required"?"Price is required":m.price.message})]})})})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"minMileage",children:"Car mileage / km (from)"}),u.jsxs("div",{children:[u.jsxs(Pr,{children:[u.jsx(Br,{type:"number",...b("from",{required:"This field is required",min:{value:0,message:"Must be 0 or greater"}})}),u.jsx(Nr,{children:"From"})]}),u.jsxs(Ur,{children:[u.jsx(Ir,{type:"number",...b("to",{required:"This field is required",min:{value:0,message:"Must be 0 or greater"},validate:(A,{from:M})=>parseInt(A)>parseInt(M)?!0:"To must be greater than From"})}),u.jsx($r,{children:"To"})]}),u.jsxs("p",{className:` ${n?"opacity-0":"opacity-100"}`,children:[(m==null?void 0:m.from)&&u.jsx("span",{children:m.from.message}),(m==null?void 0:m.to)&&u.jsx("span",{children:m.to.message})]})]})]})]}),u.jsxs("div",{children:[u.jsx(ft,{type:"submit",label:"Search",children:"Search"}),u.jsx(ft,{type:"button",onClick:O,label:"Reset",children:"Reset"})]})]})})},ss=I.div`
  max-width: 1190px;
  margin: 0 auto;
`,zr="/RentedCars/assets/matureman-7c08ad59.jpg",Hr=(e=!1)=>{const[s,t]=ie.useState(e);return{isOpen:s,open:()=>t(!0),close:()=>t(!1),toggle:()=>t(c=>!c)}},Wr=document.getElementById("modal"),Et=({onClose:e,children:s,isOpen:t})=>{ie.useEffect(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow="visible"},[t]);const r=ie.useCallback(n=>{document.body.style.overflow="visible",ar(n,e)},[e]);return ie.useEffect(()=>(document.body.addEventListener("keydown",r),()=>document.body.removeEventListener("keydown",r)),[r]),Jt.createPortal(u.jsx("div",{onClick:r,children:u.jsxs("div",{children:[u.jsx("button",{onClick:e,type:"button",children:"Close"}),s]})}),Wr)};Et.propTypes={children:p.node.isRequired,onClose:p.func.isRequired,isOpen:p.bool};const We=({src:e,alt:s,className:t,blockClass:r,width:n,height:a})=>u.jsx("div",{className:r?` ${r}`:"",children:u.jsx("img",{src:e?`${e}`:"",alt:s,className:t?`block ${t}`:"block",width:n,height:a,loading:"lazy"})});We.propTypes={src:p.string.isRequired,alt:p.string.isRequired,className:p.string,blockClass:p.string,width:p.string.isRequired,height:p.string};const le=({conditionText:e,conditionValue:s})=>u.jsxs("li",{children:[u.jsx("p",{children:e}),s&&u.jsx("span",{children:s})]});le.propTypes={conditionText:p.string.isRequired,conditionValue:p.string};const Tt=({rentConditions:e,mile:s,price:t,title:r})=>u.jsxs("div",{children:[u.jsxs("p",{children:[r,":"]}),u.jsxs("ul",{children:[u.jsx(le,{conditionText:e[0],conditionValue:e[1]}),u.jsx(le,{conditionText:e[2]}),u.jsx(le,{conditionText:e[3]}),u.jsx(le,{conditionText:"Mileage: ",conditionValue:s}),u.jsx(le,{conditionText:"Price: ",conditionValue:`${t}$`})]})]});Tt.propTypes={rentConditions:p.array.isRequired,mile:p.string.isRequired,price:p.string.isRequired,title:p.string.isRequired};const Re=()=>u.jsx("span",{children:"|"}),Ie=({items:e,separator:s})=>u.jsx("ul",{children:e.map((t,r)=>u.jsxs("li",{children:[t,r<e.length-1&&s]},r))});Ie.propTypes={items:p.array.isRequired,separator:p.any};const Lt=({accessories:e,functionalities:s,title:t})=>u.jsxs("div",{children:[u.jsxs("p",{children:[t,":"]}),u.jsx(Ie,{items:e,separator:u.jsx(Re,{})}),u.jsx(Ie,{items:s,separator:u.jsx(Re,{})})]});Lt.propTypes={accessories:p.array.isRequired,functionalities:p.array.isRequired,title:p.string.isRequired};const Ot=({car:e})=>{const{year:s,make:t,model:r,img:n,rentalPrice:a,address:c,description:b,accessories:g,functionalities:j,rentalConditions:V,mileage:m}=e,v=ur(e),O=lr(c,e),A=cr(V),M=dr(m),U=mt(a);return u.jsxs(u.Fragment,{children:[u.jsx(We,{width:"461",height:"248",src:n,alt:`${t} ${r}`,className:"modal-car",blockClass:"w-[461px] h-[248px]",loading:"lazy"}),t," ",u.jsx("span",{children:r}),", ",s,u.jsxs("div",{children:[u.jsx("ul",{children:Be(O)}),u.jsx("ul",{className:"modal-description flex items-center justify-start",children:Be(v)})]}),u.jsx("div",{className:"modal-accent-descr dark:text-white",children:b}),u.jsx(Lt,{title:"Accessories and functionalities",accessories:g,functionalities:j}),u.jsx(Tt,{title:"Rental Conditions",rentConditions:A,mile:M,price:U}),u.jsx("a",{href:"tel:+380730000000",children:"Rental car"})]})};Ot.propTypes={car:p.shape({id:p.number.isRequired,year:p.number.isRequired,make:p.string.isRequired,model:p.string.isRequired,type:p.string.isRequired,img:p.string.isRequired,description:p.string.isRequired,functionalities:p.array.isRequired,rentalPrice:p.string.isRequired,rentalCompany:p.string.isRequired,address:p.string.isRequired,mileage:p.number.isRequired,accessories:p.array.isRequired,rentalConditions:p.string.isRequired}).isRequired};const Mt=({locationData:e,carData:s})=>u.jsxs(u.Fragment,{children:[u.jsx("ul",{children:Be(e,u.jsx(Re,{}))}),u.jsx("ul",{children:Object.entries(s).map(([t,r],n,a)=>u.jsxs("li",{children:[or(t,r),n<a.length-1&&u.jsx(Re,{})]},n))})]});Mt.propTypes={carData:p.object.isRequired,locationData:p.array.isRequired};const ht=I.button``,Kr=({car:e})=>{const{isOpen:s,open:t,close:r}=Hr(!1),n=yt(tr),a=pt(),{id:c,year:b,make:g,model:j,img:V,rentalPrice:m,address:v}=e,O=sr(e),A=ir(v,e),M=n==null?void 0:n.some(ce=>ce.id===c),U=()=>a(M?Qt(e):Xt(e));return u.jsx(u.Fragment,{children:u.jsxs("li",{children:[u.jsx(ht,{type:"button",onClick:U,children:"heart icon"}),u.jsx(We,{src:V||zr,alt:`${g} ${j}`,width:"274",height:"275",loading:"lazy"}),u.jsxs("span",{children:[g,u.jsx("span",{children:j}),", ",b]}),u.jsx("span",{children:m}),u.jsx(Mt,{locationData:A,carData:O}),u.jsx(ht,{label:"Learn more",onClick:t,children:"Learn more"}),s&&u.jsx(Et,{isOpen:s,onClose:r,children:u.jsx(Ot,{car:e})})]})})};Kr.propTypes={car:p.shape({id:p.number.isRequired,year:p.number.isRequired,make:p.string.isRequired,model:p.string.isRequired,type:p.string.isRequired,img:p.string.isRequired,description:p.string.isRequired,functionalities:p.array.isRequired,rentalPrice:p.string.isRequired,rentalCompany:p.string.isRequired,address:p.string.isRequired,mileage:p.number.isRequired}).isRequired,fav:p.bool};export{Kr as C,rs as F,rr as a,ts as b,ss as c,tr as d,hr as e,es as f,Hr as g,Zr as s,pt as u};