const Ke={},Xr="modulepreload",u0={},Qr="/blog/",f1=function(t,n){return!n||n.length===0?t():Promise.all(n.map(l=>{if(l=`${Qr}${l}`,l in u0)return;u0[l]=!0;const i=l.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${a}`))return;const d=document.createElement("link");if(d.rel=i?"stylesheet":Xr,i||(d.as="script",d.crossOrigin=""),d.href=l,document.head.appendChild(d),i)return new Promise((w,_)=>{d.addEventListener("load",w),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())},Yr={"v-8daa1a0e":()=>f1(()=>import("./index.html.8e70d63e.js"),[]).then(({data:e})=>e),"v-e93607ce":()=>f1(()=>import("./1.html.b4ba0c66.js"),[]).then(({data:e})=>e),"v-e5cc5690":()=>f1(()=>import("./2.html.3dd089b6.js"),[]).then(({data:e})=>e),"v-e262a552":()=>f1(()=>import("./3.html.b21144d8.js"),[]).then(({data:e})=>e),"v-3706649a":()=>f1(()=>import("./404.html.265028f6.js"),[]).then(({data:e})=>e),"v-1f6a4033":()=>f1(()=>import("./index.html.9491b450.js"),[]).then(({data:e})=>e),"v-5632ec49":()=>f1(()=>import("./index.html.e01732d3.js"),[]).then(({data:e})=>e),"v-5918fef3":()=>f1(()=>import("./index.html.58b58892.js"),[]).then(({data:e})=>e),"v-d5e062a4":()=>f1(()=>import("./index.html.0c28231b.js"),[]).then(({data:e})=>e),"v-3601bd88":()=>f1(()=>import("./index.html.fdf22af8.js"),[]).then(({data:e})=>e),"v-0164be0f":()=>f1(()=>import("./index.html.9b36add4.js"),[]).then(({data:e})=>e),"v-01560935":()=>f1(()=>import("./index.html.4adc75b4.js"),[]).then(({data:e})=>e),"v-03d52fd3":()=>f1(()=>import("./index.html.97ccf788.js"),[]).then(({data:e})=>e)};function Dt(e,t){const n=Object.create(null),l=e.split(",");for(let i=0;i<l.length;i++)n[l[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const e6="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",t6=Dt(e6);function Y4(e){return!!e||e===""}function B2(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++){const l=e[n],i=H1(l)?c6(l):B2(l);if(i)for(const a in i)t[a]=i[a]}return t}else{if(H1(e))return e;if(P1(e))return e}}const n6=/;(?![^(]*\))/g,r6=/:(.+)/;function c6(e){const t={};return e.split(n6).forEach(n=>{if(n){const l=n.split(r6);l.length>1&&(t[l[0].trim()]=l[1].trim())}}),t}function G1(e){let t="";if(H1(e))t=e;else if(Q(e))for(let n=0;n<e.length;n++){const l=G1(e[n]);l&&(t+=l+" ")}else if(P1(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function o6(e,t){if(e.length!==t.length)return!1;let n=!0;for(let l=0;n&&l<e.length;l++)n=n3(e[l],t[l]);return n}function n3(e,t){if(e===t)return!0;let n=x0(e),l=x0(t);if(n||l)return n&&l?e.getTime()===t.getTime():!1;if(n=G3(e),l=G3(t),n||l)return e===t;if(n=Q(e),l=Q(t),n||l)return n&&l?o6(e,t):!1;if(n=P1(e),l=P1(t),n||l){if(!n||!l)return!1;const i=Object.keys(e).length,a=Object.keys(t).length;if(i!==a)return!1;for(const d in e){const w=e.hasOwnProperty(d),_=t.hasOwnProperty(d);if(w&&!_||!w&&_||!n3(e[d],t[d]))return!1}}return String(e)===String(t)}function Ft(e,t){return e.findIndex(n=>n3(n,t))}const y1=e=>H1(e)?e:e==null?"":Q(e)||P1(e)&&(e.toString===nn||!w1(e.toString))?JSON.stringify(e,en,2):String(e),en=(e,t)=>t&&t.__v_isRef?en(e,t.value):h3(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[l,i])=>(n[`${l} =>`]=i,n),{})}:g3(t)?{[`Set(${t.size})`]:[...t.values()]}:P1(t)&&!Q(t)&&!rn(t)?String(t):t,j1={},a3=[],d2=()=>{},s6=()=>!1,l6=/^on[^a-z]/,te=e=>l6.test(e),It=e=>e.startsWith("onUpdate:"),J1=Object.assign,qt=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},i6=Object.prototype.hasOwnProperty,g1=(e,t)=>i6.call(e,t),Q=Array.isArray,h3=e=>ne(e)==="[object Map]",g3=e=>ne(e)==="[object Set]",x0=e=>ne(e)==="[object Date]",w1=e=>typeof e=="function",H1=e=>typeof e=="string",G3=e=>typeof e=="symbol",P1=e=>e!==null&&typeof e=="object",tn=e=>P1(e)&&w1(e.then)&&w1(e.catch),nn=Object.prototype.toString,ne=e=>nn.call(e),a6=e=>ne(e).slice(8,-1),rn=e=>ne(e)==="[object Object]",Ot=e=>H1(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,R3=Dt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ae=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},h6=/-(\w)/g,g2=Ae(e=>e.replace(h6,(t,n)=>n?n.toUpperCase():"")),d6=/\B([A-Z])/g,m3=Ae(e=>e.replace(d6,"-$1").toLowerCase()),je=Ae(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ze=Ae(e=>e?`on${je(e)}`:""),N3=(e,t)=>!Object.is(e,t),me=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$e=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},U3=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let g0;const w6=()=>g0||(g0=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Y1;class _6{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Y1&&(this.parent=Y1,this.index=(Y1.scopes||(Y1.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Y1;try{return Y1=this,t()}finally{Y1=n}}}on(){Y1=this}off(){Y1=this.parent}stop(t){if(this.active){let n,l;for(n=0,l=this.effects.length;n<l;n++)this.effects[n].stop();for(n=0,l=this.cleanups.length;n<l;n++)this.cleanups[n]();if(this.scopes)for(n=0,l=this.scopes.length;n<l;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function p6(e,t=Y1){t&&t.active&&t.effects.push(e)}function v6(){return Y1}function u6(e){Y1&&Y1.cleanups.push(e)}const Gt=e=>{const t=new Set(e);return t.w=0,t.n=0,t},cn=e=>(e.w&q2)>0,on=e=>(e.n&q2)>0,x6=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=q2},g6=e=>{const{deps:t}=e;if(t.length){let n=0;for(let l=0;l<t.length;l++){const i=t[l];cn(i)&&!on(i)?i.delete(e):t[n++]=i,i.w&=~q2,i.n&=~q2}t.length=n}},xt=new WeakMap;let S3=0,q2=1;const gt=30;let a2;const e3=Symbol(""),mt=Symbol("");class Nt{constructor(t,n=null,l){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,p6(this,l)}run(){if(!this.active)return this.fn();let t=a2,n=F2;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=a2,a2=this,F2=!0,q2=1<<++S3,S3<=gt?x6(this):m0(this),this.fn()}finally{S3<=gt&&g6(this),q2=1<<--S3,a2=this.parent,F2=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){a2===this?this.deferStop=!0:this.active&&(m0(this),this.onStop&&this.onStop(),this.active=!1)}}function m0(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let F2=!0;const sn=[];function k3(){sn.push(F2),F2=!1}function f3(){const e=sn.pop();F2=e===void 0?!0:e}function n2(e,t,n){if(F2&&a2){let l=xt.get(e);l||xt.set(e,l=new Map);let i=l.get(n);i||l.set(n,i=Gt()),ln(i)}}function ln(e,t){let n=!1;S3<=gt?on(e)||(e.n|=q2,n=!cn(e)):n=!e.has(a2),n&&(e.add(a2),a2.deps.push(e))}function y2(e,t,n,l,i,a){const d=xt.get(e);if(!d)return;let w=[];if(t==="clear")w=[...d.values()];else if(n==="length"&&Q(e))d.forEach((_,p)=>{(p==="length"||p>=l)&&w.push(_)});else switch(n!==void 0&&w.push(d.get(n)),t){case"add":Q(e)?Ot(n)&&w.push(d.get("length")):(w.push(d.get(e3)),h3(e)&&w.push(d.get(mt)));break;case"delete":Q(e)||(w.push(d.get(e3)),h3(e)&&w.push(d.get(mt)));break;case"set":h3(e)&&w.push(d.get(e3));break}if(w.length===1)w[0]&&kt(w[0]);else{const _=[];for(const p of w)p&&_.push(...p);kt(Gt(_))}}function kt(e,t){const n=Q(e)?e:[...e];for(const l of n)l.computed&&k0(l);for(const l of n)l.computed||k0(l)}function k0(e,t){(e!==a2||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const m6=Dt("__proto__,__v_isRef,__isVue"),an=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(G3)),k6=Ut(),f6=Ut(!1,!0),$6=Ut(!0),f0=M6();function M6(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const l=C1(this);for(let a=0,d=this.length;a<d;a++)n2(l,"get",a+"");const i=l[t](...n);return i===-1||i===!1?l[t](...n.map(C1)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){k3();const l=C1(this)[t].apply(this,n);return f3(),l}}),e}function Ut(e=!1,t=!1){return function(l,i,a){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&a===(e?t?D6:pn:t?_n:wn).get(l))return l;const d=Q(l);if(!e&&d&&g1(f0,i))return Reflect.get(f0,i,a);const w=Reflect.get(l,i,a);return(G3(i)?an.has(i):m6(i))||(e||n2(l,"get",i),t)?w:U1(w)?d&&Ot(i)?w:w.value:P1(w)?e?Te(w):r3(w):w}}const C6=hn(),z6=hn(!0);function hn(e=!1){return function(n,l,i,a){let d=n[l];if(W3(d)&&U1(d)&&!U1(i))return!1;if(!e&&!W3(i)&&(ft(i)||(i=C1(i),d=C1(d)),!Q(n)&&U1(d)&&!U1(i)))return d.value=i,!0;const w=Q(n)&&Ot(l)?Number(l)<n.length:g1(n,l),_=Reflect.set(n,l,i,a);return n===C1(a)&&(w?N3(i,d)&&y2(n,"set",l,i):y2(n,"add",l,i)),_}}function B6(e,t){const n=g1(e,t);e[t];const l=Reflect.deleteProperty(e,t);return l&&n&&y2(e,"delete",t,void 0),l}function y6(e,t){const n=Reflect.has(e,t);return(!G3(t)||!an.has(t))&&n2(e,"has",t),n}function H6(e){return n2(e,"iterate",Q(e)?"length":e3),Reflect.ownKeys(e)}const dn={get:k6,set:C6,deleteProperty:B6,has:y6,ownKeys:H6},b6={get:$6,set(e,t){return!0},deleteProperty(e,t){return!0}},L6=J1({},dn,{get:f6,set:z6}),Wt=e=>e,Re=e=>Reflect.getPrototypeOf(e);function se(e,t,n=!1,l=!1){e=e.__v_raw;const i=C1(e),a=C1(t);n||(t!==a&&n2(i,"get",t),n2(i,"get",a));const{has:d}=Re(i),w=l?Wt:n?Zt:J3;if(d.call(i,t))return w(e.get(t));if(d.call(i,a))return w(e.get(a));e!==i&&e.get(t)}function le(e,t=!1){const n=this.__v_raw,l=C1(n),i=C1(e);return t||(e!==i&&n2(l,"has",e),n2(l,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function ie(e,t=!1){return e=e.__v_raw,!t&&n2(C1(e),"iterate",e3),Reflect.get(e,"size",e)}function $0(e){e=C1(e);const t=C1(this);return Re(t).has.call(t,e)||(t.add(e),y2(t,"add",e,e)),this}function M0(e,t){t=C1(t);const n=C1(this),{has:l,get:i}=Re(n);let a=l.call(n,e);a||(e=C1(e),a=l.call(n,e));const d=i.call(n,e);return n.set(e,t),a?N3(t,d)&&y2(n,"set",e,t):y2(n,"add",e,t),this}function C0(e){const t=C1(this),{has:n,get:l}=Re(t);let i=n.call(t,e);i||(e=C1(e),i=n.call(t,e)),l&&l.call(t,e);const a=t.delete(e);return i&&y2(t,"delete",e,void 0),a}function z0(){const e=C1(this),t=e.size!==0,n=e.clear();return t&&y2(e,"clear",void 0,void 0),n}function ae(e,t){return function(l,i){const a=this,d=a.__v_raw,w=C1(d),_=t?Wt:e?Zt:J3;return!e&&n2(w,"iterate",e3),d.forEach((p,v)=>l.call(i,_(p),_(v),a))}}function he(e,t,n){return function(...l){const i=this.__v_raw,a=C1(i),d=h3(a),w=e==="entries"||e===Symbol.iterator&&d,_=e==="keys"&&d,p=i[e](...l),v=n?Wt:t?Zt:J3;return!t&&n2(a,"iterate",_?mt:e3),{next(){const{value:g,done:u}=p.next();return u?{value:g,done:u}:{value:w?[v(g[0]),v(g[1])]:v(g),done:u}},[Symbol.iterator](){return this}}}}function V2(e){return function(...t){return e==="delete"?!1:this}}function V6(){const e={get(a){return se(this,a)},get size(){return ie(this)},has:le,add:$0,set:M0,delete:C0,clear:z0,forEach:ae(!1,!1)},t={get(a){return se(this,a,!1,!0)},get size(){return ie(this)},has:le,add:$0,set:M0,delete:C0,clear:z0,forEach:ae(!1,!0)},n={get(a){return se(this,a,!0)},get size(){return ie(this,!0)},has(a){return le.call(this,a,!0)},add:V2("add"),set:V2("set"),delete:V2("delete"),clear:V2("clear"),forEach:ae(!0,!1)},l={get(a){return se(this,a,!0,!0)},get size(){return ie(this,!0)},has(a){return le.call(this,a,!0)},add:V2("add"),set:V2("set"),delete:V2("delete"),clear:V2("clear"),forEach:ae(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=he(a,!1,!1),n[a]=he(a,!0,!1),t[a]=he(a,!1,!0),l[a]=he(a,!0,!0)}),[e,n,t,l]}const[S6,A6,j6,R6]=V6();function Jt(e,t){const n=t?e?R6:j6:e?A6:S6;return(l,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?l:Reflect.get(g1(n,i)&&i in l?n:l,i,a)}const T6={get:Jt(!1,!1)},E6={get:Jt(!1,!0)},P6={get:Jt(!0,!1)},wn=new WeakMap,_n=new WeakMap,pn=new WeakMap,D6=new WeakMap;function F6(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function I6(e){return e.__v_skip||!Object.isExtensible(e)?0:F6(a6(e))}function r3(e){return W3(e)?e:Kt(e,!1,dn,T6,wn)}function q6(e){return Kt(e,!1,L6,E6,_n)}function Te(e){return Kt(e,!0,b6,P6,pn)}function Kt(e,t,n,l,i){if(!P1(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const d=I6(e);if(d===0)return e;const w=new Proxy(e,d===2?l:n);return i.set(e,w),w}function d3(e){return W3(e)?d3(e.__v_raw):!!(e&&e.__v_isReactive)}function W3(e){return!!(e&&e.__v_isReadonly)}function ft(e){return!!(e&&e.__v_isShallow)}function vn(e){return d3(e)||W3(e)}function C1(e){const t=e&&e.__v_raw;return t?C1(t):e}function un(e){return $e(e,"__v_skip",!0),e}const J3=e=>P1(e)?r3(e):e,Zt=e=>P1(e)?Te(e):e;function xn(e){F2&&a2&&(e=C1(e),ln(e.dep||(e.dep=Gt())))}function gn(e,t){e=C1(e),e.dep&&kt(e.dep)}function U1(e){return!!(e&&e.__v_isRef===!0)}function Y(e){return kn(e,!1)}function mn(e){return kn(e,!0)}function kn(e,t){return U1(e)?e:new O6(e,t)}class O6{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:C1(t),this._value=n?t:J3(t)}get value(){return xn(this),this._value}set value(t){t=this.__v_isShallow?t:C1(t),N3(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:J3(t),gn(this))}}function N1(e){return U1(e)?e.value:e}const G6={get:(e,t,n)=>N1(Reflect.get(e,t,n)),set:(e,t,n,l)=>{const i=e[t];return U1(i)&&!U1(n)?(i.value=n,!0):Reflect.set(e,t,n,l)}};function fn(e){return d3(e)?e:new Proxy(e,G6)}function $3(e){const t=Q(e)?new Array(e.length):{};for(const n in e)t[n]=U6(e,n);return t}class N6{constructor(t,n,l){this._object=t,this._key=n,this._defaultValue=l,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function U6(e,t,n){const l=e[t];return U1(l)?l:new N6(e,t,n)}class W6{constructor(t,n,l,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Nt(t,()=>{this._dirty||(this._dirty=!0,gn(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=l}get value(){const t=C1(this);return xn(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function J6(e,t,n=!1){let l,i;const a=w1(e);return a?(l=e,i=d2):(l=e.get,i=e.set),new W6(l,i,a||!i,n)}function I2(e,t,n,l){let i;try{i=l?e(...l):e()}catch(a){re(a,t,n)}return i}function s2(e,t,n,l){if(w1(e)){const a=I2(e,t,n,l);return a&&tn(a)&&a.catch(d=>{re(d,t,n)}),a}const i=[];for(let a=0;a<e.length;a++)i.push(s2(e[a],t,n,l));return i}function re(e,t,n,l=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const d=t.proxy,w=n;for(;a;){const p=a.ec;if(p){for(let v=0;v<p.length;v++)if(p[v](e,d,w)===!1)return}a=a.parent}const _=t.appContext.config.errorHandler;if(_){I2(_,null,10,[e,d,w]);return}}K6(e,n,i,l)}function K6(e,t,n,l=!0){console.error(e)}let Me=!1,$t=!1;const e2=[];let $2=0;const T3=[];let A3=null,s3=0;const E3=[];let T2=null,l3=0;const $n=Promise.resolve();let Xt=null,Mt=null;function Qt(e){const t=Xt||$n;return e?t.then(this?e.bind(this):e):t}function Z6(e){let t=$2+1,n=e2.length;for(;t<n;){const l=t+n>>>1;K3(e2[l])<e?t=l+1:n=l}return t}function Yt(e){(!e2.length||!e2.includes(e,Me&&e.allowRecurse?$2+1:$2))&&e!==Mt&&(e.id==null?e2.push(e):e2.splice(Z6(e.id),0,e),Mn())}function Mn(){!Me&&!$t&&($t=!0,Xt=$n.then(zn))}function X6(e){const t=e2.indexOf(e);t>$2&&e2.splice(t,1)}function Cn(e,t,n,l){Q(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?l+1:l))&&n.push(e),Mn()}function Q6(e){Cn(e,A3,T3,s3)}function Y6(e){Cn(e,T2,E3,l3)}function Ee(e,t=null){if(T3.length){for(Mt=t,A3=[...new Set(T3)],T3.length=0,s3=0;s3<A3.length;s3++)A3[s3]();A3=null,s3=0,Mt=null,Ee(e,t)}}function Ce(e){if(Ee(),E3.length){const t=[...new Set(E3)];if(E3.length=0,T2){T2.push(...t);return}for(T2=t,T2.sort((n,l)=>K3(n)-K3(l)),l3=0;l3<T2.length;l3++)T2[l3]();T2=null,l3=0}}const K3=e=>e.id==null?1/0:e.id;function zn(e){$t=!1,Me=!0,Ee(e),e2.sort((n,l)=>K3(n)-K3(l));const t=d2;try{for($2=0;$2<e2.length;$2++){const n=e2[$2];n&&n.active!==!1&&I2(n,null,14)}}finally{$2=0,e2.length=0,Ce(),Me=!1,Xt=null,(e2.length||T3.length||E3.length)&&zn(e)}}function ec(e,t,...n){if(e.isUnmounted)return;const l=e.vnode.props||j1;let i=n;const a=t.startsWith("update:"),d=a&&t.slice(7);if(d&&d in l){const v=`${d==="modelValue"?"model":d}Modifiers`,{number:g,trim:u}=l[v]||j1;u&&(i=n.map(x=>x.trim())),g&&(i=n.map(U3))}let w,_=l[w=Ze(t)]||l[w=Ze(g2(t))];!_&&a&&(_=l[w=Ze(m3(t))]),_&&s2(_,e,6,i);const p=l[w+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[w])return;e.emitted[w]=!0,s2(p,e,6,i)}}function Bn(e,t,n=!1){const l=t.emitsCache,i=l.get(e);if(i!==void 0)return i;const a=e.emits;let d={},w=!1;if(!w1(e)){const _=p=>{const v=Bn(p,t,!0);v&&(w=!0,J1(d,v))};!n&&t.mixins.length&&t.mixins.forEach(_),e.extends&&_(e.extends),e.mixins&&e.mixins.forEach(_)}return!a&&!w?(l.set(e,null),null):(Q(a)?a.forEach(_=>d[_]=null):J1(d,a),l.set(e,d),d)}function Pe(e,t){return!e||!te(t)?!1:(t=t.slice(2).replace(/Once$/,""),g1(e,t[0].toLowerCase()+t.slice(1))||g1(e,m3(t))||g1(e,t))}let K1=null,yn=null;function ze(e){const t=K1;return K1=e,yn=e&&e.type.__scopeId||null,t}function tc(e,t=K1,n){if(!t||e._n)return e;const l=(...i)=>{l._d&&T0(-1);const a=ze(t),d=e(...i);return ze(a),l._d&&T0(1),d};return l._n=!0,l._c=!0,l._d=!0,l}function Xe(e){const{type:t,vnode:n,proxy:l,withProxy:i,props:a,propsOptions:[d],slots:w,attrs:_,emit:p,render:v,renderCache:g,data:u,setupState:x,ctx:k,inheritAttrs:C}=e;let B,f;const M=ze(e);try{if(n.shapeFlag&4){const y=i||l;B=i2(v.call(y,y,g,a,x,u,k)),f=_}else{const y=t;B=i2(y.length>1?y(a,{attrs:_,slots:w,emit:p}):y(a,null)),f=t.props?_:nc(_)}}catch(y){D3.length=0,re(y,e,1),B=u1(t2)}let b=B;if(f&&C!==!1){const y=Object.keys(f),{shapeFlag:A}=b;y.length&&A&7&&(d&&y.some(It)&&(f=rc(f,d)),b=O2(b,f))}return n.dirs&&(b=O2(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),B=b,ze(M),B}const nc=e=>{let t;for(const n in e)(n==="class"||n==="style"||te(n))&&((t||(t={}))[n]=e[n]);return t},rc=(e,t)=>{const n={};for(const l in e)(!It(l)||!(l.slice(9)in t))&&(n[l]=e[l]);return n};function cc(e,t,n){const{props:l,children:i,component:a}=e,{props:d,children:w,patchFlag:_}=t,p=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&_>=0){if(_&1024)return!0;if(_&16)return l?B0(l,d,p):!!d;if(_&8){const v=t.dynamicProps;for(let g=0;g<v.length;g++){const u=v[g];if(d[u]!==l[u]&&!Pe(p,u))return!0}}}else return(i||w)&&(!w||!w.$stable)?!0:l===d?!1:l?d?B0(l,d,p):!0:!!d;return!1}function B0(e,t,n){const l=Object.keys(t);if(l.length!==Object.keys(e).length)return!0;for(let i=0;i<l.length;i++){const a=l[i];if(t[a]!==e[a]&&!Pe(n,a))return!0}return!1}function oc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const sc=e=>e.__isSuspense;function Hn(e,t){t&&t.pendingBranch?Q(e)?t.effects.push(...e):t.effects.push(e):Y6(e)}function w2(e,t){if(q1){let n=q1.provides;const l=q1.parent&&q1.parent.provides;l===n&&(n=q1.provides=Object.create(l)),n[e]=t}}function E1(e,t,n=!1){const l=q1||K1;if(l){const i=l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&w1(t)?t.call(l.proxy):t}}const y0={};function W1(e,t,n){return bn(e,t,n)}function bn(e,t,{immediate:n,deep:l,flush:i,onTrack:a,onTrigger:d}=j1){const w=q1;let _,p=!1,v=!1;if(U1(e)?(_=()=>e.value,p=ft(e)):d3(e)?(_=()=>e,l=!0):Q(e)?(v=!0,p=e.some(f=>d3(f)||ft(f)),_=()=>e.map(f=>{if(U1(f))return f.value;if(d3(f))return Y2(f);if(w1(f))return I2(f,w,2)})):w1(e)?t?_=()=>I2(e,w,2):_=()=>{if(!(w&&w.isUnmounted))return g&&g(),s2(e,w,3,[u])}:_=d2,t&&l){const f=_;_=()=>Y2(f())}let g,u=f=>{g=B.onStop=()=>{I2(f,w,4)}};if(p3)return u=d2,t?n&&s2(t,w,3,[_(),v?[]:void 0,u]):_(),d2;let x=v?[]:y0;const k=()=>{if(!!B.active)if(t){const f=B.run();(l||p||(v?f.some((M,b)=>N3(M,x[b])):N3(f,x)))&&(g&&g(),s2(t,w,3,[f,x===y0?void 0:x,u]),x=f)}else B.run()};k.allowRecurse=!!t;let C;i==="sync"?C=k:i==="post"?C=()=>X1(k,w&&w.suspense):C=()=>Q6(k);const B=new Nt(_,C);return t?n?k():x=B.run():i==="post"?X1(B.run.bind(B),w&&w.suspense):B.run(),()=>{B.stop(),w&&w.scope&&qt(w.scope.effects,B)}}function lc(e,t,n){const l=this.proxy,i=H1(e)?e.includes(".")?Ln(l,e):()=>l[e]:e.bind(l,l);let a;w1(t)?a=t:(a=t.handler,n=t);const d=q1;_3(this);const w=bn(i,a.bind(l),n);return d?_3(d):t3(),w}function Ln(e,t){const n=t.split(".");return()=>{let l=e;for(let i=0;i<n.length&&l;i++)l=l[n[i]];return l}}function Y2(e,t){if(!P1(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),U1(e))Y2(e.value,t);else if(Q(e))for(let n=0;n<e.length;n++)Y2(e[n],t);else if(g3(e)||h3(e))e.forEach(n=>{Y2(n,t)});else if(rn(e))for(const n in e)Y2(e[n],t);return e}function ic(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return r2(()=>{e.isMounted=!0}),oe(()=>{e.isUnmounting=!0}),e}const c2=[Function,Array],ac={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:c2,onEnter:c2,onAfterEnter:c2,onEnterCancelled:c2,onBeforeLeave:c2,onLeave:c2,onAfterLeave:c2,onLeaveCancelled:c2,onBeforeAppear:c2,onAppear:c2,onAfterAppear:c2,onAppearCancelled:c2},setup(e,{slots:t}){const n=Nc(),l=ic();let i;return()=>{const a=t.default&&An(t.default(),!0);if(!a||!a.length)return;let d=a[0];if(a.length>1){for(const C of a)if(C.type!==t2){d=C;break}}const w=C1(e),{mode:_}=w;if(l.isLeaving)return Qe(d);const p=H0(d);if(!p)return Qe(d);const v=Ct(p,w,l,n);zt(p,v);const g=n.subTree,u=g&&H0(g);let x=!1;const{getTransitionKey:k}=p.type;if(k){const C=k();i===void 0?i=C:C!==i&&(i=C,x=!0)}if(u&&u.type!==t2&&(!X2(p,u)||x)){const C=Ct(u,w,l,n);if(zt(u,C),_==="out-in")return l.isLeaving=!0,C.afterLeave=()=>{l.isLeaving=!1,n.update()},Qe(d);_==="in-out"&&p.type!==t2&&(C.delayLeave=(B,f,M)=>{const b=Sn(l,u);b[String(u.key)]=u,B._leaveCb=()=>{f(),B._leaveCb=void 0,delete v.delayedLeave},v.delayedLeave=M})}return d}}},Vn=ac;function Sn(e,t){const{leavingVNodes:n}=e;let l=n.get(t.type);return l||(l=Object.create(null),n.set(t.type,l)),l}function Ct(e,t,n,l){const{appear:i,mode:a,persisted:d=!1,onBeforeEnter:w,onEnter:_,onAfterEnter:p,onEnterCancelled:v,onBeforeLeave:g,onLeave:u,onAfterLeave:x,onLeaveCancelled:k,onBeforeAppear:C,onAppear:B,onAfterAppear:f,onAppearCancelled:M}=t,b=String(e.key),y=Sn(n,e),A=(T,J)=>{T&&s2(T,l,9,J)},I=(T,J)=>{const X=J[1];A(T,J),Q(T)?T.every(i1=>i1.length<=1)&&X():T.length<=1&&X()},K={mode:a,persisted:d,beforeEnter(T){let J=w;if(!n.isMounted)if(i)J=C||w;else return;T._leaveCb&&T._leaveCb(!0);const X=y[b];X&&X2(e,X)&&X.el._leaveCb&&X.el._leaveCb(),A(J,[T])},enter(T){let J=_,X=p,i1=v;if(!n.isMounted)if(i)J=B||_,X=f||p,i1=M||v;else return;let P=!1;const a1=T._enterCb=U=>{P||(P=!0,U?A(i1,[T]):A(X,[T]),K.delayedLeave&&K.delayedLeave(),T._enterCb=void 0)};J?I(J,[T,a1]):a1()},leave(T,J){const X=String(e.key);if(T._enterCb&&T._enterCb(!0),n.isUnmounting)return J();A(g,[T]);let i1=!1;const P=T._leaveCb=a1=>{i1||(i1=!0,J(),a1?A(k,[T]):A(x,[T]),T._leaveCb=void 0,y[X]===e&&delete y[X])};y[X]=e,u?I(u,[T,P]):P()},clone(T){return Ct(T,t,n,l)}};return K}function Qe(e){if(ce(e))return e=O2(e),e.children=null,e}function H0(e){return ce(e)?e.children?e.children[0]:void 0:e}function zt(e,t){e.shapeFlag&6&&e.component?zt(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function An(e,t=!1,n){let l=[],i=0;for(let a=0;a<e.length;a++){let d=e[a];const w=n==null?d.key:String(n)+String(d.key!=null?d.key:a);d.type===L1?(d.patchFlag&128&&i++,l=l.concat(An(d.children,t,w))):(t||d.type!==t2)&&l.push(w!=null?O2(d,{key:w}):d)}if(i>1)for(let a=0;a<l.length;a++)l[a].patchFlag=-2;return l}function s(e){return w1(e)?{setup:e,name:e.name}:e}const w3=e=>!!e.type.__asyncLoader;function I1(e){w1(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:l,delay:i=200,timeout:a,suspensible:d=!0,onError:w}=e;let _=null,p,v=0;const g=()=>(v++,_=null,u()),u=()=>{let x;return _||(x=_=t().catch(k=>{if(k=k instanceof Error?k:new Error(String(k)),w)return new Promise((C,B)=>{w(k,()=>C(g()),()=>B(k),v+1)});throw k}).then(k=>x!==_&&_?_:(k&&(k.__esModule||k[Symbol.toStringTag]==="Module")&&(k=k.default),p=k,k)))};return s({name:"AsyncComponentWrapper",__asyncLoader:u,get __asyncResolved(){return p},setup(){const x=q1;if(p)return()=>Ye(p,x);const k=M=>{_=null,re(M,x,13,!l)};if(d&&x.suspense||p3)return u().then(M=>()=>Ye(M,x)).catch(M=>(k(M),()=>l?u1(l,{error:M}):null));const C=Y(!1),B=Y(),f=Y(!!i);return i&&setTimeout(()=>{f.value=!1},i),a!=null&&setTimeout(()=>{if(!C.value&&!B.value){const M=new Error(`Async component timed out after ${a}ms.`);k(M),B.value=M}},a),u().then(()=>{C.value=!0,x.parent&&ce(x.parent.vnode)&&Yt(x.parent.update)}).catch(M=>{k(M),B.value=M}),()=>{if(C.value&&p)return Ye(p,x);if(B.value&&l)return u1(l,{error:B.value});if(n&&!f.value)return u1(n)}}})}function Ye(e,{vnode:{ref:t,props:n,children:l,shapeFlag:i},parent:a}){const d=u1(e,n,l);return d.ref=t,d}const ce=e=>e.type.__isKeepAlive;function hc(e,t){jn(e,"a",t)}function dc(e,t){jn(e,"da",t)}function jn(e,t,n=q1){const l=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(De(t,l,n),n){let i=n.parent;for(;i&&i.parent;)ce(i.parent.vnode)&&wc(l,t,n,i),i=i.parent}}function wc(e,t,n,l){const i=De(t,e,l,!0);e0(()=>{qt(l[t],i)},n)}function De(e,t,n=q1,l=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...d)=>{if(n.isUnmounted)return;k3(),_3(n);const w=s2(t,n,e,d);return t3(),f3(),w});return l?i.unshift(a):i.push(a),a}}const L2=e=>(t,n=q1)=>(!p3||e==="sp")&&De(e,t,n),_c=L2("bm"),r2=L2("m"),pc=L2("bu"),vc=L2("u"),oe=L2("bum"),e0=L2("um"),uc=L2("sp"),xc=L2("rtg"),gc=L2("rtc");function mc(e,t=q1){De("ec",e,t)}function de(e,t){const n=K1;if(n===null)return e;const l=qe(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[d,w,_,p=j1]=t[a];w1(d)&&(d={mounted:d,updated:d}),d.deep&&Y2(w),i.push({dir:d,instance:l,value:w,oldValue:void 0,arg:_,modifiers:p})}return e}function x2(e,t,n,l){const i=e.dirs,a=t&&t.dirs;for(let d=0;d<i.length;d++){const w=i[d];a&&(w.oldValue=a[d].value);let _=w.dir[l];_&&(k3(),s2(_,n,8,[e.el,w,e,t]),f3())}}const t0="components";function F1(e,t){return En(t0,e,!0,t)||e}const Rn=Symbol();function Tn(e){return H1(e)?En(t0,e,!1)||e:e||Rn}function En(e,t,n=!0,l=!1){const i=K1||q1;if(i){const a=i.type;if(e===t0){const w=Zc(a,!1);if(w&&(w===t||w===g2(t)||w===je(g2(t))))return a}const d=b0(i[e]||a[e],t)||b0(i.appContext[e],t);return!d&&l?a:d}}function b0(e,t){return e&&(e[t]||e[g2(t)]||e[je(g2(t))])}function z2(e,t,n,l){let i;const a=n&&n[l];if(Q(e)||H1(e)){i=new Array(e.length);for(let d=0,w=e.length;d<w;d++)i[d]=t(e[d],d,void 0,a&&a[d])}else if(typeof e=="number"){i=new Array(e);for(let d=0;d<e;d++)i[d]=t(d+1,d,void 0,a&&a[d])}else if(P1(e))if(e[Symbol.iterator])i=Array.from(e,(d,w)=>t(d,w,void 0,a&&a[w]));else{const d=Object.keys(e);i=new Array(d.length);for(let w=0,_=d.length;w<_;w++){const p=d[w];i[w]=t(e[p],p,w,a&&a[w])}}else i=[];return n&&(n[l]=i),i}function Fe(e,t,n={},l,i){if(K1.isCE||K1.parent&&w3(K1.parent)&&K1.parent.isCE)return u1("slot",t==="default"?null:{name:t},l&&l());let a=e[t];a&&a._c&&(a._d=!1),c();const d=a&&Pn(a(n)),w=m2(L1,{key:n.key||`_${t}`},d||(l?l():[]),d&&e._===1?64:-2);return!i&&w.scopeId&&(w.slotScopeIds=[w.scopeId+"-s"]),a&&a._c&&(a._d=!0),w}function Pn(e){return e.some(t=>be(t)?!(t.type===t2||t.type===L1&&!Pn(t.children)):!0)?e:null}const Bt=e=>e?Zn(e)?qe(e)||e.proxy:Bt(e.parent):null,Be=J1(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Bt(e.parent),$root:e=>Bt(e.root),$emit:e=>e.emit,$options:e=>Fn(e),$forceUpdate:e=>e.f||(e.f=()=>Yt(e.update)),$nextTick:e=>e.n||(e.n=Qt.bind(e.proxy)),$watch:e=>lc.bind(e)}),kc={get({_:e},t){const{ctx:n,setupState:l,data:i,props:a,accessCache:d,type:w,appContext:_}=e;let p;if(t[0]!=="$"){const x=d[t];if(x!==void 0)switch(x){case 1:return l[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(l!==j1&&g1(l,t))return d[t]=1,l[t];if(i!==j1&&g1(i,t))return d[t]=2,i[t];if((p=e.propsOptions[0])&&g1(p,t))return d[t]=3,a[t];if(n!==j1&&g1(n,t))return d[t]=4,n[t];yt&&(d[t]=0)}}const v=Be[t];let g,u;if(v)return t==="$attrs"&&n2(e,"get",t),v(e);if((g=w.__cssModules)&&(g=g[t]))return g;if(n!==j1&&g1(n,t))return d[t]=4,n[t];if(u=_.config.globalProperties,g1(u,t))return u[t]},set({_:e},t,n){const{data:l,setupState:i,ctx:a}=e;return i!==j1&&g1(i,t)?(i[t]=n,!0):l!==j1&&g1(l,t)?(l[t]=n,!0):g1(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:l,appContext:i,propsOptions:a}},d){let w;return!!n[d]||e!==j1&&g1(e,d)||t!==j1&&g1(t,d)||(w=a[0])&&g1(w,d)||g1(l,d)||g1(Be,d)||g1(i.config.globalProperties,d)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:g1(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let yt=!0;function fc(e){const t=Fn(e),n=e.proxy,l=e.ctx;yt=!1,t.beforeCreate&&L0(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:d,watch:w,provide:_,inject:p,created:v,beforeMount:g,mounted:u,beforeUpdate:x,updated:k,activated:C,deactivated:B,beforeDestroy:f,beforeUnmount:M,destroyed:b,unmounted:y,render:A,renderTracked:I,renderTriggered:K,errorCaptured:T,serverPrefetch:J,expose:X,inheritAttrs:i1,components:P,directives:a1,filters:U}=t;if(p&&$c(p,l,null,e.appContext.config.unwrapInjectedRef),d)for(const z1 in d){const B1=d[z1];w1(B1)&&(l[z1]=B1.bind(n))}if(i){const z1=i.call(n,n);P1(z1)&&(e.data=r3(z1))}if(yt=!0,a)for(const z1 in a){const B1=a[z1],O=w1(B1)?B1.bind(n,n):w1(B1.get)?B1.get.bind(n,n):d2,c1=!w1(B1)&&w1(B1.set)?B1.set.bind(n):d2,s1=n1({get:O,set:c1});Object.defineProperty(l,z1,{enumerable:!0,configurable:!0,get:()=>s1.value,set:b1=>s1.value=b1})}if(w)for(const z1 in w)Dn(w[z1],l,n,z1);if(_){const z1=w1(_)?_.call(n):_;Reflect.ownKeys(z1).forEach(B1=>{w2(B1,z1[B1])})}v&&L0(v,e,"c");function x1(z1,B1){Q(B1)?B1.forEach(O=>z1(O.bind(n))):B1&&z1(B1.bind(n))}if(x1(_c,g),x1(r2,u),x1(pc,x),x1(vc,k),x1(hc,C),x1(dc,B),x1(mc,T),x1(gc,I),x1(xc,K),x1(oe,M),x1(e0,y),x1(uc,J),Q(X))if(X.length){const z1=e.exposed||(e.exposed={});X.forEach(B1=>{Object.defineProperty(z1,B1,{get:()=>n[B1],set:O=>n[B1]=O})})}else e.exposed||(e.exposed={});A&&e.render===d2&&(e.render=A),i1!=null&&(e.inheritAttrs=i1),P&&(e.components=P),a1&&(e.directives=a1)}function $c(e,t,n=d2,l=!1){Q(e)&&(e=Ht(e));for(const i in e){const a=e[i];let d;P1(a)?"default"in a?d=E1(a.from||i,a.default,!0):d=E1(a.from||i):d=E1(a),U1(d)&&l?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>d.value,set:w=>d.value=w}):t[i]=d}}function L0(e,t,n){s2(Q(e)?e.map(l=>l.bind(t.proxy)):e.bind(t.proxy),t,n)}function Dn(e,t,n,l){const i=l.includes(".")?Ln(n,l):()=>n[l];if(H1(e)){const a=t[e];w1(a)&&W1(i,a)}else if(w1(e))W1(i,e.bind(n));else if(P1(e))if(Q(e))e.forEach(a=>Dn(a,t,n,l));else{const a=w1(e.handler)?e.handler.bind(n):t[e.handler];w1(a)&&W1(i,a,e)}}function Fn(e){const t=e.type,{mixins:n,extends:l}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:d}}=e.appContext,w=a.get(t);let _;return w?_=w:!i.length&&!n&&!l?_=t:(_={},i.length&&i.forEach(p=>ye(_,p,d,!0)),ye(_,t,d)),a.set(t,_),_}function ye(e,t,n,l=!1){const{mixins:i,extends:a}=t;a&&ye(e,a,n,!0),i&&i.forEach(d=>ye(e,d,n,!0));for(const d in t)if(!(l&&d==="expose")){const w=Mc[d]||n&&n[d];e[d]=w?w(e[d],t[d]):t[d]}return e}const Mc={data:V0,props:K2,emits:K2,methods:K2,computed:K2,beforeCreate:Z1,created:Z1,beforeMount:Z1,mounted:Z1,beforeUpdate:Z1,updated:Z1,beforeDestroy:Z1,beforeUnmount:Z1,destroyed:Z1,unmounted:Z1,activated:Z1,deactivated:Z1,errorCaptured:Z1,serverPrefetch:Z1,components:K2,directives:K2,watch:zc,provide:V0,inject:Cc};function V0(e,t){return t?e?function(){return J1(w1(e)?e.call(this,this):e,w1(t)?t.call(this,this):t)}:t:e}function Cc(e,t){return K2(Ht(e),Ht(t))}function Ht(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Z1(e,t){return e?[...new Set([].concat(e,t))]:t}function K2(e,t){return e?J1(J1(Object.create(null),e),t):t}function zc(e,t){if(!e)return t;if(!t)return e;const n=J1(Object.create(null),e);for(const l in t)n[l]=Z1(e[l],t[l]);return n}function Bc(e,t,n,l=!1){const i={},a={};$e(a,Ie,1),e.propsDefaults=Object.create(null),In(e,t,i,a);for(const d in e.propsOptions[0])d in i||(i[d]=void 0);n?e.props=l?i:q6(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function yc(e,t,n,l){const{props:i,attrs:a,vnode:{patchFlag:d}}=e,w=C1(i),[_]=e.propsOptions;let p=!1;if((l||d>0)&&!(d&16)){if(d&8){const v=e.vnode.dynamicProps;for(let g=0;g<v.length;g++){let u=v[g];if(Pe(e.emitsOptions,u))continue;const x=t[u];if(_)if(g1(a,u))x!==a[u]&&(a[u]=x,p=!0);else{const k=g2(u);i[k]=bt(_,w,k,x,e,!1)}else x!==a[u]&&(a[u]=x,p=!0)}}}else{In(e,t,i,a)&&(p=!0);let v;for(const g in w)(!t||!g1(t,g)&&((v=m3(g))===g||!g1(t,v)))&&(_?n&&(n[g]!==void 0||n[v]!==void 0)&&(i[g]=bt(_,w,g,void 0,e,!0)):delete i[g]);if(a!==w)for(const g in a)(!t||!g1(t,g)&&!0)&&(delete a[g],p=!0)}p&&y2(e,"set","$attrs")}function In(e,t,n,l){const[i,a]=e.propsOptions;let d=!1,w;if(t)for(let _ in t){if(R3(_))continue;const p=t[_];let v;i&&g1(i,v=g2(_))?!a||!a.includes(v)?n[v]=p:(w||(w={}))[v]=p:Pe(e.emitsOptions,_)||(!(_ in l)||p!==l[_])&&(l[_]=p,d=!0)}if(a){const _=C1(n),p=w||j1;for(let v=0;v<a.length;v++){const g=a[v];n[g]=bt(i,_,g,p[g],e,!g1(p,g))}}return d}function bt(e,t,n,l,i,a){const d=e[n];if(d!=null){const w=g1(d,"default");if(w&&l===void 0){const _=d.default;if(d.type!==Function&&w1(_)){const{propsDefaults:p}=i;n in p?l=p[n]:(_3(i),l=p[n]=_.call(null,t),t3())}else l=_}d[0]&&(a&&!w?l=!1:d[1]&&(l===""||l===m3(n))&&(l=!0))}return l}function qn(e,t,n=!1){const l=t.propsCache,i=l.get(e);if(i)return i;const a=e.props,d={},w=[];let _=!1;if(!w1(e)){const v=g=>{_=!0;const[u,x]=qn(g,t,!0);J1(d,u),x&&w.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(v),e.extends&&v(e.extends),e.mixins&&e.mixins.forEach(v)}if(!a&&!_)return l.set(e,a3),a3;if(Q(a))for(let v=0;v<a.length;v++){const g=g2(a[v]);S0(g)&&(d[g]=j1)}else if(a)for(const v in a){const g=g2(v);if(S0(g)){const u=a[v],x=d[g]=Q(u)||w1(u)?{type:u}:u;if(x){const k=R0(Boolean,x.type),C=R0(String,x.type);x[0]=k>-1,x[1]=C<0||k<C,(k>-1||g1(x,"default"))&&w.push(g)}}}const p=[d,w];return l.set(e,p),p}function S0(e){return e[0]!=="$"}function A0(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function j0(e,t){return A0(e)===A0(t)}function R0(e,t){return Q(t)?t.findIndex(n=>j0(n,e)):w1(t)&&j0(t,e)?0:-1}const On=e=>e[0]==="_"||e==="$stable",n0=e=>Q(e)?e.map(i2):[i2(e)],Hc=(e,t,n)=>{if(t._n)return t;const l=tc((...i)=>n0(t(...i)),n);return l._c=!1,l},Gn=(e,t,n)=>{const l=e._ctx;for(const i in e){if(On(i))continue;const a=e[i];if(w1(a))t[i]=Hc(i,a,l);else if(a!=null){const d=n0(a);t[i]=()=>d}}},Nn=(e,t)=>{const n=n0(t);e.slots.default=()=>n},bc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=C1(t),$e(t,"_",n)):Gn(t,e.slots={})}else e.slots={},t&&Nn(e,t);$e(e.slots,Ie,1)},Lc=(e,t,n)=>{const{vnode:l,slots:i}=e;let a=!0,d=j1;if(l.shapeFlag&32){const w=t._;w?n&&w===1?a=!1:(J1(i,t),!n&&w===1&&delete i._):(a=!t.$stable,Gn(t,i)),d=t}else t&&(Nn(e,t),d={default:1});if(a)for(const w in i)!On(w)&&!(w in d)&&delete i[w]};function Un(){return{app:null,config:{isNativeTag:s6,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vc=0;function Sc(e,t){return function(l,i=null){w1(l)||(l=Object.assign({},l)),i!=null&&!P1(i)&&(i=null);const a=Un(),d=new Set;let w=!1;const _=a.app={_uid:Vc++,_component:l,_props:i,_container:null,_context:a,_instance:null,version:Qc,get config(){return a.config},set config(p){},use(p,...v){return d.has(p)||(p&&w1(p.install)?(d.add(p),p.install(_,...v)):w1(p)&&(d.add(p),p(_,...v))),_},mixin(p){return a.mixins.includes(p)||a.mixins.push(p),_},component(p,v){return v?(a.components[p]=v,_):a.components[p]},directive(p,v){return v?(a.directives[p]=v,_):a.directives[p]},mount(p,v,g){if(!w){const u=u1(l,i);return u.appContext=a,v&&t?t(u,p):e(u,p,g),w=!0,_._container=p,p.__vue_app__=_,qe(u.component)||u.component.proxy}},unmount(){w&&(e(null,_._container),delete _._container.__vue_app__)},provide(p,v){return a.provides[p]=v,_}};return _}}function He(e,t,n,l,i=!1){if(Q(e)){e.forEach((u,x)=>He(u,t&&(Q(t)?t[x]:t),n,l,i));return}if(w3(l)&&!i)return;const a=l.shapeFlag&4?qe(l.component)||l.component.proxy:l.el,d=i?null:a,{i:w,r:_}=e,p=t&&t.r,v=w.refs===j1?w.refs={}:w.refs,g=w.setupState;if(p!=null&&p!==_&&(H1(p)?(v[p]=null,g1(g,p)&&(g[p]=null)):U1(p)&&(p.value=null)),w1(_))I2(_,w,12,[d,v]);else{const u=H1(_),x=U1(_);if(u||x){const k=()=>{if(e.f){const C=u?v[_]:_.value;i?Q(C)&&qt(C,a):Q(C)?C.includes(a)||C.push(a):u?(v[_]=[a],g1(g,_)&&(g[_]=v[_])):(_.value=[a],e.k&&(v[e.k]=_.value))}else u?(v[_]=d,g1(g,_)&&(g[_]=d)):x&&(_.value=d,e.k&&(v[e.k]=d))};d?(k.id=-1,X1(k,n)):k()}}}let S2=!1;const we=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",_e=e=>e.nodeType===8;function Ac(e){const{mt:t,p:n,o:{patchProp:l,createText:i,nextSibling:a,parentNode:d,remove:w,insert:_,createComment:p}}=e,v=(f,M)=>{if(!M.hasChildNodes()){n(null,f,M),Ce(),M._vnode=f;return}S2=!1,g(M.firstChild,f,null,null,null),Ce(),M._vnode=f,S2&&console.error("Hydration completed but contains mismatches.")},g=(f,M,b,y,A,I=!1)=>{const K=_e(f)&&f.data==="[",T=()=>C(f,M,b,y,A,K),{type:J,ref:X,shapeFlag:i1,patchFlag:P}=M,a1=f.nodeType;M.el=f,P===-2&&(I=!1,M.dynamicChildren=null);let U=null;switch(J){case Z3:a1!==3?M.children===""?(_(M.el=i(""),d(f),f),U=f):U=T():(f.data!==M.children&&(S2=!0,f.data=M.children),U=a(f));break;case t2:a1!==8||K?U=T():U=a(f);break;case P3:if(a1!==1&&a1!==3)U=T();else{U=f;const D1=!M.children.length;for(let x1=0;x1<M.staticCount;x1++)D1&&(M.children+=U.nodeType===1?U.outerHTML:U.data),x1===M.staticCount-1&&(M.anchor=U),U=a(U);return U}break;case L1:K?U=k(f,M,b,y,A,I):U=T();break;default:if(i1&1)a1!==1||M.type.toLowerCase()!==f.tagName.toLowerCase()?U=T():U=u(f,M,b,y,A,I);else if(i1&6){M.slotScopeIds=A;const D1=d(f);if(t(M,D1,null,b,y,we(D1),I),U=K?B(f):a(f),U&&_e(U)&&U.data==="teleport end"&&(U=a(U)),w3(M)){let x1;K?(x1=u1(L1),x1.anchor=U?U.previousSibling:D1.lastChild):x1=f.nodeType===3?_2(""):u1("div"),x1.el=f,M.component.subTree=x1}}else i1&64?a1!==8?U=T():U=M.type.hydrate(f,M,b,y,A,I,e,x):i1&128&&(U=M.type.hydrate(f,M,b,y,we(d(f)),A,I,e,g))}return X!=null&&He(X,null,y,M),U},u=(f,M,b,y,A,I)=>{I=I||!!M.dynamicChildren;const{type:K,props:T,patchFlag:J,shapeFlag:X,dirs:i1}=M,P=K==="input"&&i1||K==="option";if(P||J!==-1){if(i1&&x2(M,null,b,"created"),T)if(P||!I||J&48)for(const U in T)(P&&U.endsWith("value")||te(U)&&!R3(U))&&l(f,U,null,T[U],!1,void 0,b);else T.onClick&&l(f,"onClick",null,T.onClick,!1,void 0,b);let a1;if((a1=T&&T.onVnodeBeforeMount)&&o2(a1,b,M),i1&&x2(M,null,b,"beforeMount"),((a1=T&&T.onVnodeMounted)||i1)&&Hn(()=>{a1&&o2(a1,b,M),i1&&x2(M,null,b,"mounted")},y),X&16&&!(T&&(T.innerHTML||T.textContent))){let U=x(f.firstChild,M,f,b,y,A,I);for(;U;){S2=!0;const D1=U;U=U.nextSibling,w(D1)}}else X&8&&f.textContent!==M.children&&(S2=!0,f.textContent=M.children)}return f.nextSibling},x=(f,M,b,y,A,I,K)=>{K=K||!!M.dynamicChildren;const T=M.children,J=T.length;for(let X=0;X<J;X++){const i1=K?T[X]:T[X]=i2(T[X]);if(f)f=g(f,i1,y,A,I,K);else{if(i1.type===Z3&&!i1.children)continue;S2=!0,n(null,i1,b,null,y,A,we(b),I)}}return f},k=(f,M,b,y,A,I)=>{const{slotScopeIds:K}=M;K&&(A=A?A.concat(K):K);const T=d(f),J=x(a(f),M,T,b,y,A,I);return J&&_e(J)&&J.data==="]"?a(M.anchor=J):(S2=!0,_(M.anchor=p("]"),T,J),J)},C=(f,M,b,y,A,I)=>{if(S2=!0,M.el=null,I){const J=B(f);for(;;){const X=a(f);if(X&&X!==J)w(X);else break}}const K=a(f),T=d(f);return w(f),n(null,M,T,K,b,y,we(T),A),K},B=f=>{let M=0;for(;f;)if(f=a(f),f&&_e(f)&&(f.data==="["&&M++,f.data==="]")){if(M===0)return a(f);M--}return f};return[v,g]}const X1=Hn;function jc(e){return Rc(e,Ac)}function Rc(e,t){const n=w6();n.__VUE__=!0;const{insert:l,remove:i,patchProp:a,createElement:d,createText:w,createComment:_,setText:p,setElementText:v,parentNode:g,nextSibling:u,setScopeId:x=d2,cloneNode:k,insertStaticContent:C}=e,B=(m,$,z,V=null,L=null,E=null,q=!1,R=null,F=!!$.dynamicChildren)=>{if(m===$)return;m&&!X2(m,$)&&(V=W(m),M1(m,L,E,!0),m=null),$.patchFlag===-2&&(F=!1,$.dynamicChildren=null);const{type:S,ref:e1,shapeFlag:Z}=$;switch(S){case Z3:f(m,$,z,V);break;case t2:M(m,$,z,V);break;case P3:m==null&&b($,z,V,q);break;case L1:a1(m,$,z,V,L,E,q,R,F);break;default:Z&1?I(m,$,z,V,L,E,q,R,F):Z&6?U(m,$,z,V,L,E,q,R,F):(Z&64||Z&128)&&S.process(m,$,z,V,L,E,q,R,F,v1)}e1!=null&&L&&He(e1,m&&m.ref,E,$||m,!$)},f=(m,$,z,V)=>{if(m==null)l($.el=w($.children),z,V);else{const L=$.el=m.el;$.children!==m.children&&p(L,$.children)}},M=(m,$,z,V)=>{m==null?l($.el=_($.children||""),z,V):$.el=m.el},b=(m,$,z,V)=>{[m.el,m.anchor]=C(m.children,$,z,V,m.el,m.anchor)},y=({el:m,anchor:$},z,V)=>{let L;for(;m&&m!==$;)L=u(m),l(m,z,V),m=L;l($,z,V)},A=({el:m,anchor:$})=>{let z;for(;m&&m!==$;)z=u(m),i(m),m=z;i($)},I=(m,$,z,V,L,E,q,R,F)=>{q=q||$.type==="svg",m==null?K($,z,V,L,E,q,R,F):X(m,$,L,E,q,R,F)},K=(m,$,z,V,L,E,q,R)=>{let F,S;const{type:e1,props:Z,shapeFlag:t1,transition:l1,patchFlag:m1,dirs:V1}=m;if(m.el&&k!==void 0&&m1===-1)F=m.el=k(m.el);else{if(F=m.el=d(m.type,E,Z&&Z.is,Z),t1&8?v(F,m.children):t1&16&&J(m.children,F,null,V,L,E&&e1!=="foreignObject",q,R),V1&&x2(m,null,V,"created"),Z){for(const T1 in Z)T1!=="value"&&!R3(T1)&&a(F,T1,null,Z[T1],E,m.children,V,L,j);"value"in Z&&a(F,"value",null,Z.value),(S=Z.onVnodeBeforeMount)&&o2(S,V,m)}T(F,m,m.scopeId,q,V)}V1&&x2(m,null,V,"beforeMount");const S1=(!L||L&&!L.pendingBranch)&&l1&&!l1.persisted;S1&&l1.beforeEnter(F),l(F,$,z),((S=Z&&Z.onVnodeMounted)||S1||V1)&&X1(()=>{S&&o2(S,V,m),S1&&l1.enter(F),V1&&x2(m,null,V,"mounted")},L)},T=(m,$,z,V,L)=>{if(z&&x(m,z),V)for(let E=0;E<V.length;E++)x(m,V[E]);if(L){let E=L.subTree;if($===E){const q=L.vnode;T(m,q,q.scopeId,q.slotScopeIds,L.parent)}}},J=(m,$,z,V,L,E,q,R,F=0)=>{for(let S=F;S<m.length;S++){const e1=m[S]=R?E2(m[S]):i2(m[S]);B(null,e1,$,z,V,L,E,q,R)}},X=(m,$,z,V,L,E,q)=>{const R=$.el=m.el;let{patchFlag:F,dynamicChildren:S,dirs:e1}=$;F|=m.patchFlag&16;const Z=m.props||j1,t1=$.props||j1;let l1;z&&N2(z,!1),(l1=t1.onVnodeBeforeUpdate)&&o2(l1,z,$,m),e1&&x2($,m,z,"beforeUpdate"),z&&N2(z,!0);const m1=L&&$.type!=="foreignObject";if(S?i1(m.dynamicChildren,S,R,z,V,m1,E):q||O(m,$,R,null,z,V,m1,E,!1),F>0){if(F&16)P(R,$,Z,t1,z,V,L);else if(F&2&&Z.class!==t1.class&&a(R,"class",null,t1.class,L),F&4&&a(R,"style",Z.style,t1.style,L),F&8){const V1=$.dynamicProps;for(let S1=0;S1<V1.length;S1++){const T1=V1[S1],l2=Z[T1],c3=t1[T1];(c3!==l2||T1==="value")&&a(R,T1,l2,c3,L,m.children,z,V,j)}}F&1&&m.children!==$.children&&v(R,$.children)}else!q&&S==null&&P(R,$,Z,t1,z,V,L);((l1=t1.onVnodeUpdated)||e1)&&X1(()=>{l1&&o2(l1,z,$,m),e1&&x2($,m,z,"updated")},V)},i1=(m,$,z,V,L,E,q)=>{for(let R=0;R<$.length;R++){const F=m[R],S=$[R],e1=F.el&&(F.type===L1||!X2(F,S)||F.shapeFlag&70)?g(F.el):z;B(F,S,e1,null,V,L,E,q,!0)}},P=(m,$,z,V,L,E,q)=>{if(z!==V){for(const R in V){if(R3(R))continue;const F=V[R],S=z[R];F!==S&&R!=="value"&&a(m,R,S,F,q,$.children,L,E,j)}if(z!==j1)for(const R in z)!R3(R)&&!(R in V)&&a(m,R,z[R],null,q,$.children,L,E,j);"value"in V&&a(m,"value",z.value,V.value)}},a1=(m,$,z,V,L,E,q,R,F)=>{const S=$.el=m?m.el:w(""),e1=$.anchor=m?m.anchor:w("");let{patchFlag:Z,dynamicChildren:t1,slotScopeIds:l1}=$;l1&&(R=R?R.concat(l1):l1),m==null?(l(S,z,V),l(e1,z,V),J($.children,z,e1,L,E,q,R,F)):Z>0&&Z&64&&t1&&m.dynamicChildren?(i1(m.dynamicChildren,t1,z,L,E,q,R),($.key!=null||L&&$===L.subTree)&&Wn(m,$,!0)):O(m,$,z,e1,L,E,q,R,F)},U=(m,$,z,V,L,E,q,R,F)=>{$.slotScopeIds=R,m==null?$.shapeFlag&512?L.ctx.activate($,z,V,q,F):D1($,z,V,L,E,q,F):x1(m,$,F)},D1=(m,$,z,V,L,E,q)=>{const R=m.component=Gc(m,V,L);if(ce(m)&&(R.ctx.renderer=v1),Uc(R),R.asyncDep){if(L&&L.registerDep(R,z1),!m.el){const F=R.subTree=u1(t2);M(null,F,$,z)}return}z1(R,m,$,z,L,E,q)},x1=(m,$,z)=>{const V=$.component=m.component;if(cc(m,$,z))if(V.asyncDep&&!V.asyncResolved){B1(V,$,z);return}else V.next=$,X6(V.update),V.update();else $.el=m.el,V.vnode=$},z1=(m,$,z,V,L,E,q)=>{const R=()=>{if(m.isMounted){let{next:e1,bu:Z,u:t1,parent:l1,vnode:m1}=m,V1=e1,S1;N2(m,!1),e1?(e1.el=m1.el,B1(m,e1,q)):e1=m1,Z&&me(Z),(S1=e1.props&&e1.props.onVnodeBeforeUpdate)&&o2(S1,l1,e1,m1),N2(m,!0);const T1=Xe(m),l2=m.subTree;m.subTree=T1,B(l2,T1,g(l2.el),W(l2),m,L,E),e1.el=T1.el,V1===null&&oc(m,T1.el),t1&&X1(t1,L),(S1=e1.props&&e1.props.onVnodeUpdated)&&X1(()=>o2(S1,l1,e1,m1),L)}else{let e1;const{el:Z,props:t1}=$,{bm:l1,m:m1,parent:V1}=m,S1=w3($);if(N2(m,!1),l1&&me(l1),!S1&&(e1=t1&&t1.onVnodeBeforeMount)&&o2(e1,V1,$),N2(m,!0),Z&&h1){const T1=()=>{m.subTree=Xe(m),h1(Z,m.subTree,m,L,null)};S1?$.type.__asyncLoader().then(()=>!m.isUnmounted&&T1()):T1()}else{const T1=m.subTree=Xe(m);B(null,T1,z,V,m,L,E),$.el=T1.el}if(m1&&X1(m1,L),!S1&&(e1=t1&&t1.onVnodeMounted)){const T1=$;X1(()=>o2(e1,V1,T1),L)}($.shapeFlag&256||V1&&w3(V1.vnode)&&V1.vnode.shapeFlag&256)&&m.a&&X1(m.a,L),m.isMounted=!0,$=z=V=null}},F=m.effect=new Nt(R,()=>Yt(S),m.scope),S=m.update=()=>F.run();S.id=m.uid,N2(m,!0),S()},B1=(m,$,z)=>{$.component=m;const V=m.vnode.props;m.vnode=$,m.next=null,yc(m,$.props,V,z),Lc(m,$.children,z),k3(),Ee(void 0,m.update),f3()},O=(m,$,z,V,L,E,q,R,F=!1)=>{const S=m&&m.children,e1=m?m.shapeFlag:0,Z=$.children,{patchFlag:t1,shapeFlag:l1}=$;if(t1>0){if(t1&128){s1(S,Z,z,V,L,E,q,R,F);return}else if(t1&256){c1(S,Z,z,V,L,E,q,R,F);return}}l1&8?(e1&16&&j(S,L,E),Z!==S&&v(z,Z)):e1&16?l1&16?s1(S,Z,z,V,L,E,q,R,F):j(S,L,E,!0):(e1&8&&v(z,""),l1&16&&J(Z,z,V,L,E,q,R,F))},c1=(m,$,z,V,L,E,q,R,F)=>{m=m||a3,$=$||a3;const S=m.length,e1=$.length,Z=Math.min(S,e1);let t1;for(t1=0;t1<Z;t1++){const l1=$[t1]=F?E2($[t1]):i2($[t1]);B(m[t1],l1,z,null,L,E,q,R,F)}S>e1?j(m,L,E,!0,!1,Z):J($,z,V,L,E,q,R,F,Z)},s1=(m,$,z,V,L,E,q,R,F)=>{let S=0;const e1=$.length;let Z=m.length-1,t1=e1-1;for(;S<=Z&&S<=t1;){const l1=m[S],m1=$[S]=F?E2($[S]):i2($[S]);if(X2(l1,m1))B(l1,m1,z,null,L,E,q,R,F);else break;S++}for(;S<=Z&&S<=t1;){const l1=m[Z],m1=$[t1]=F?E2($[t1]):i2($[t1]);if(X2(l1,m1))B(l1,m1,z,null,L,E,q,R,F);else break;Z--,t1--}if(S>Z){if(S<=t1){const l1=t1+1,m1=l1<e1?$[l1].el:V;for(;S<=t1;)B(null,$[S]=F?E2($[S]):i2($[S]),z,m1,L,E,q,R,F),S++}}else if(S>t1)for(;S<=Z;)M1(m[S],L,E,!0),S++;else{const l1=S,m1=S,V1=new Map;for(S=m1;S<=t1;S++){const Q1=$[S]=F?E2($[S]):i2($[S]);Q1.key!=null&&V1.set(Q1.key,S)}let S1,T1=0;const l2=t1-m1+1;let c3=!1,_0=0;const y3=new Array(l2);for(S=0;S<l2;S++)y3[S]=0;for(S=l1;S<=Z;S++){const Q1=m[S];if(T1>=l2){M1(Q1,L,E,!0);continue}let u2;if(Q1.key!=null)u2=V1.get(Q1.key);else for(S1=m1;S1<=t1;S1++)if(y3[S1-m1]===0&&X2(Q1,$[S1])){u2=S1;break}u2===void 0?M1(Q1,L,E,!0):(y3[u2-m1]=S+1,u2>=_0?_0=u2:c3=!0,B(Q1,$[u2],z,null,L,E,q,R,F),T1++)}const p0=c3?Tc(y3):a3;for(S1=p0.length-1,S=l2-1;S>=0;S--){const Q1=m1+S,u2=$[Q1],v0=Q1+1<e1?$[Q1+1].el:V;y3[S]===0?B(null,u2,z,v0,L,E,q,R,F):c3&&(S1<0||S!==p0[S1]?b1(u2,z,v0,2):S1--)}}},b1=(m,$,z,V,L=null)=>{const{el:E,type:q,transition:R,children:F,shapeFlag:S}=m;if(S&6){b1(m.component.subTree,$,z,V);return}if(S&128){m.suspense.move($,z,V);return}if(S&64){q.move(m,$,z,v1);return}if(q===L1){l(E,$,z);for(let Z=0;Z<F.length;Z++)b1(F[Z],$,z,V);l(m.anchor,$,z);return}if(q===P3){y(m,$,z);return}if(V!==2&&S&1&&R)if(V===0)R.beforeEnter(E),l(E,$,z),X1(()=>R.enter(E),L);else{const{leave:Z,delayLeave:t1,afterLeave:l1}=R,m1=()=>l(E,$,z),V1=()=>{Z(E,()=>{m1(),l1&&l1()})};t1?t1(E,m1,V1):V1()}else l(E,$,z)},M1=(m,$,z,V=!1,L=!1)=>{const{type:E,props:q,ref:R,children:F,dynamicChildren:S,shapeFlag:e1,patchFlag:Z,dirs:t1}=m;if(R!=null&&He(R,null,z,m,!0),e1&256){$.ctx.deactivate(m);return}const l1=e1&1&&t1,m1=!w3(m);let V1;if(m1&&(V1=q&&q.onVnodeBeforeUnmount)&&o2(V1,$,m),e1&6)D(m.component,z,V);else{if(e1&128){m.suspense.unmount(z,V);return}l1&&x2(m,null,$,"beforeUnmount"),e1&64?m.type.remove(m,$,z,L,v1,V):S&&(E!==L1||Z>0&&Z&64)?j(S,$,z,!1,!0):(E===L1&&Z&384||!L&&e1&16)&&j(F,$,z),V&&_1(m)}(m1&&(V1=q&&q.onVnodeUnmounted)||l1)&&X1(()=>{V1&&o2(V1,$,m),l1&&x2(m,null,$,"unmounted")},z)},_1=m=>{const{type:$,el:z,anchor:V,transition:L}=m;if($===L1){H(z,V);return}if($===P3){A(m);return}const E=()=>{i(z),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(m.shapeFlag&1&&L&&!L.persisted){const{leave:q,delayLeave:R}=L,F=()=>q(z,E);R?R(m.el,E,F):F()}else E()},H=(m,$)=>{let z;for(;m!==$;)z=u(m),i(m),m=z;i($)},D=(m,$,z)=>{const{bum:V,scope:L,update:E,subTree:q,um:R}=m;V&&me(V),L.stop(),E&&(E.active=!1,M1(q,m,$,z)),R&&X1(R,$),X1(()=>{m.isUnmounted=!0},$),$&&$.pendingBranch&&!$.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===$.pendingId&&($.deps--,$.deps===0&&$.resolve())},j=(m,$,z,V=!1,L=!1,E=0)=>{for(let q=E;q<m.length;q++)M1(m[q],$,z,V,L)},W=m=>m.shapeFlag&6?W(m.component.subTree):m.shapeFlag&128?m.suspense.next():u(m.anchor||m.el),$1=(m,$,z)=>{m==null?$._vnode&&M1($._vnode,null,null,!0):B($._vnode||null,m,$,null,null,null,z),Ce(),$._vnode=m},v1={p:B,um:M1,m:b1,r:_1,mt:D1,mc:J,pc:O,pbc:i1,n:W,o:e};let d1,h1;return t&&([d1,h1]=t(v1)),{render:$1,hydrate:d1,createApp:Sc($1,d1)}}function N2({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Wn(e,t,n=!1){const l=e.children,i=t.children;if(Q(l)&&Q(i))for(let a=0;a<l.length;a++){const d=l[a];let w=i[a];w.shapeFlag&1&&!w.dynamicChildren&&((w.patchFlag<=0||w.patchFlag===32)&&(w=i[a]=E2(i[a]),w.el=d.el),n||Wn(d,w))}}function Tc(e){const t=e.slice(),n=[0];let l,i,a,d,w;const _=e.length;for(l=0;l<_;l++){const p=e[l];if(p!==0){if(i=n[n.length-1],e[i]<p){t[l]=i,n.push(l);continue}for(a=0,d=n.length-1;a<d;)w=a+d>>1,e[n[w]]<p?a=w+1:d=w;p<e[n[a]]&&(a>0&&(t[l]=n[a-1]),n[a]=l)}}for(a=n.length,d=n[a-1];a-- >0;)n[a]=d,d=t[d];return n}const Ec=e=>e.__isTeleport,L1=Symbol(void 0),Z3=Symbol(void 0),t2=Symbol(void 0),P3=Symbol(void 0),D3=[];let h2=null;function c(e=!1){D3.push(h2=e?null:[])}function Pc(){D3.pop(),h2=D3[D3.length-1]||null}let X3=1;function T0(e){X3+=e}function Jn(e){return e.dynamicChildren=X3>0?h2||a3:null,Pc(),X3>0&&h2&&h2.push(e),e}function o(e,t,n,l,i,a){return Jn(r(e,t,n,l,i,a,!0))}function m2(e,t,n,l,i){return Jn(u1(e,t,n,l,i,!0))}function be(e){return e?e.__v_isVNode===!0:!1}function X2(e,t){return e.type===t.type&&e.key===t.key}const Ie="__vInternal",Kn=({key:e})=>e!=null?e:null,ke=({ref:e,ref_key:t,ref_for:n})=>e!=null?H1(e)||U1(e)||w1(e)?{i:K1,r:e,k:t,f:!!n}:e:null;function r(e,t=null,n=null,l=0,i=null,a=e===L1?0:1,d=!1,w=!1){const _={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Kn(t),ref:t&&ke(t),scopeId:yn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:l,dynamicProps:i,dynamicChildren:null,appContext:null};return w?(r0(_,n),a&128&&e.normalize(_)):n&&(_.shapeFlag|=H1(n)?8:16),X3>0&&!d&&h2&&(_.patchFlag>0||a&6)&&_.patchFlag!==32&&h2.push(_),_}const u1=Dc;function Dc(e,t=null,n=null,l=0,i=null,a=!1){if((!e||e===Rn)&&(e=t2),be(e)){const w=O2(e,t,!0);return n&&r0(w,n),X3>0&&!a&&h2&&(w.shapeFlag&6?h2[h2.indexOf(e)]=w:h2.push(w)),w.patchFlag|=-2,w}if(Xc(e)&&(e=e.__vccOpts),t){t=Fc(t);let{class:w,style:_}=t;w&&!H1(w)&&(t.class=G1(w)),P1(_)&&(vn(_)&&!Q(_)&&(_=J1({},_)),t.style=B2(_))}const d=H1(e)?1:sc(e)?128:Ec(e)?64:P1(e)?4:w1(e)?2:0;return r(e,t,n,l,i,d,a,!0)}function Fc(e){return e?vn(e)||Ie in e?J1({},e):e:null}function O2(e,t,n=!1){const{props:l,ref:i,patchFlag:a,children:d}=e,w=t?Ic(l||{},t):l;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:w,key:w&&Kn(w),ref:t&&t.ref?n&&i?Q(i)?i.concat(ke(t)):[i,ke(t)]:ke(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:d,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==L1?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&O2(e.ssContent),ssFallback:e.ssFallback&&O2(e.ssFallback),el:e.el,anchor:e.anchor}}function _2(e=" ",t=0){return u1(Z3,null,e,t)}function h(e,t){const n=u1(P3,null,e);return n.staticCount=t,n}function p1(e="",t=!1){return t?(c(),m2(t2,null,e)):u1(t2,null,e)}function i2(e){return e==null||typeof e=="boolean"?u1(t2):Q(e)?u1(L1,null,e.slice()):typeof e=="object"?E2(e):u1(Z3,null,String(e))}function E2(e){return e.el===null||e.memo?e:O2(e)}function r0(e,t){let n=0;const{shapeFlag:l}=e;if(t==null)t=null;else if(Q(t))n=16;else if(typeof t=="object")if(l&65){const i=t.default;i&&(i._c&&(i._d=!1),r0(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Ie in t)?t._ctx=K1:i===3&&K1&&(K1.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else w1(t)?(t={default:t,_ctx:K1},n=32):(t=String(t),l&64?(n=16,t=[_2(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ic(...e){const t={};for(let n=0;n<e.length;n++){const l=e[n];for(const i in l)if(i==="class")t.class!==l.class&&(t.class=G1([t.class,l.class]));else if(i==="style")t.style=B2([t.style,l.style]);else if(te(i)){const a=t[i],d=l[i];d&&a!==d&&!(Q(a)&&a.includes(d))&&(t[i]=a?[].concat(a,d):d)}else i!==""&&(t[i]=l[i])}return t}function o2(e,t,n,l=null){s2(e,t,7,[n,l])}const qc=Un();let Oc=0;function Gc(e,t,n){const l=e.type,i=(t?t.appContext:e.appContext)||qc,a={uid:Oc++,vnode:e,type:l,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new _6(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qn(l,i),emitsOptions:Bn(l,i),emit:null,emitted:null,propsDefaults:j1,inheritAttrs:l.inheritAttrs,ctx:j1,data:j1,props:j1,attrs:j1,slots:j1,refs:j1,setupState:j1,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=ec.bind(null,a),e.ce&&e.ce(a),a}let q1=null;const Nc=()=>q1||K1,_3=e=>{q1=e,e.scope.on()},t3=()=>{q1&&q1.scope.off(),q1=null};function Zn(e){return e.vnode.shapeFlag&4}let p3=!1;function Uc(e,t=!1){p3=t;const{props:n,children:l}=e.vnode,i=Zn(e);Bc(e,n,i,t),bc(e,l);const a=i?Wc(e,t):void 0;return p3=!1,a}function Wc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=un(new Proxy(e.ctx,kc));const{setup:l}=n;if(l){const i=e.setupContext=l.length>1?Kc(e):null;_3(e),k3();const a=I2(l,e,0,[e.props,i]);if(f3(),t3(),tn(a)){if(a.then(t3,t3),t)return a.then(d=>{E0(e,d,t)}).catch(d=>{re(d,e,0)});e.asyncDep=a}else E0(e,a,t)}else Xn(e,t)}function E0(e,t,n){w1(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:P1(t)&&(e.setupState=fn(t)),Xn(e,n)}let P0;function Xn(e,t,n){const l=e.type;if(!e.render){if(!t&&P0&&!l.render){const i=l.template;if(i){const{isCustomElement:a,compilerOptions:d}=e.appContext.config,{delimiters:w,compilerOptions:_}=l,p=J1(J1({isCustomElement:a,delimiters:w},d),_);l.render=P0(i,p)}}e.render=l.render||d2}_3(e),k3(),fc(e),f3(),t3()}function Jc(e){return new Proxy(e.attrs,{get(t,n){return n2(e,"get","$attrs"),t[n]}})}function Kc(e){const t=l=>{e.exposed=l||{}};let n;return{get attrs(){return n||(n=Jc(e))},slots:e.slots,emit:e.emit,expose:t}}function qe(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(fn(un(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Be)return Be[n](e)}}))}function Zc(e,t=!0){return w1(e)?e.displayName||e.name:e.name||t&&e.__name}function Xc(e){return w1(e)&&"__vccOpts"in e}const n1=(e,t)=>J6(e,t,p3);function G(e,t,n){const l=arguments.length;return l===2?P1(t)&&!Q(t)?be(t)?u1(e,null,[t]):u1(e,t):u1(e,null,t):(l>3?n=Array.prototype.slice.call(arguments,2):l===3&&be(n)&&(n=[n]),u1(e,t,n))}const Qc="3.2.37",Yc="http://www.w3.org/2000/svg",Q2=typeof document!="undefined"?document:null,D0=Q2&&Q2.createElement("template"),eo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,l)=>{const i=t?Q2.createElementNS(Yc,e):Q2.createElement(e,n?{is:n}:void 0);return e==="select"&&l&&l.multiple!=null&&i.setAttribute("multiple",l.multiple),i},createText:e=>Q2.createTextNode(e),createComment:e=>Q2.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Q2.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,l,i,a){const d=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{D0.innerHTML=l?`<svg>${e}</svg>`:e;const w=D0.content;if(l){const _=w.firstChild;for(;_.firstChild;)w.appendChild(_.firstChild);w.removeChild(_)}t.insertBefore(w,n)}return[d?d.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function to(e,t,n){const l=e._vtc;l&&(t=(t?[t,...l]:[...l]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function no(e,t,n){const l=e.style,i=H1(n);if(n&&!i){for(const a in n)Lt(l,a,n[a]);if(t&&!H1(t))for(const a in t)n[a]==null&&Lt(l,a,"")}else{const a=l.display;i?t!==n&&(l.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(l.display=a)}}const F0=/\s*!important$/;function Lt(e,t,n){if(Q(n))n.forEach(l=>Lt(e,t,l));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const l=ro(e,t);F0.test(n)?e.setProperty(m3(l),n.replace(F0,""),"important"):e[l]=n}}const I0=["Webkit","Moz","ms"],et={};function ro(e,t){const n=et[t];if(n)return n;let l=g2(t);if(l!=="filter"&&l in e)return et[t]=l;l=je(l);for(let i=0;i<I0.length;i++){const a=I0[i]+l;if(a in e)return et[t]=a}return t}const q0="http://www.w3.org/1999/xlink";function co(e,t,n,l,i){if(l&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(q0,t.slice(6,t.length)):e.setAttributeNS(q0,t,n);else{const a=t6(t);n==null||a&&!Y4(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function oo(e,t,n,l,i,a,d){if(t==="innerHTML"||t==="textContent"){l&&d(l,i,a),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const _=n==null?"":n;(e.value!==_||e.tagName==="OPTION")&&(e.value=_),n==null&&e.removeAttribute(t);return}let w=!1;if(n===""||n==null){const _=typeof e[t];_==="boolean"?n=Y4(n):n==null&&_==="string"?(n="",w=!0):_==="number"&&(n=0,w=!0)}try{e[t]=n}catch{}w&&e.removeAttribute(t)}const[Qn,so]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Vt=0;const lo=Promise.resolve(),io=()=>{Vt=0},ao=()=>Vt||(lo.then(io),Vt=Qn());function M2(e,t,n,l){e.addEventListener(t,n,l)}function ho(e,t,n,l){e.removeEventListener(t,n,l)}function wo(e,t,n,l,i=null){const a=e._vei||(e._vei={}),d=a[t];if(l&&d)d.value=l;else{const[w,_]=_o(t);if(l){const p=a[t]=po(l,i);M2(e,w,p,_)}else d&&(ho(e,w,d,_),a[t]=void 0)}}const O0=/(?:Once|Passive|Capture)$/;function _o(e){let t;if(O0.test(e)){t={};let n;for(;n=e.match(O0);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[m3(e.slice(2)),t]}function po(e,t){const n=l=>{const i=l.timeStamp||Qn();(so||i>=n.attached-1)&&s2(vo(l,n.value),t,5,[l])};return n.value=e,n.attached=ao(),n}function vo(e,t){if(Q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(l=>i=>!i._stopped&&l&&l(i))}else return t}const G0=/^on[a-z]/,uo=(e,t,n,l,i=!1,a,d,w,_)=>{t==="class"?to(e,l,i):t==="style"?no(e,n,l):te(t)?It(t)||wo(e,t,n,l,d):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xo(e,t,l,i))?oo(e,t,l,a,d,w,_):(t==="true-value"?e._trueValue=l:t==="false-value"&&(e._falseValue=l),co(e,t,l,i))};function xo(e,t,n,l){return l?!!(t==="innerHTML"||t==="textContent"||t in e&&G0.test(t)&&w1(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||G0.test(t)&&H1(n)?!1:t in e}const A2="transition",H3="animation",c0=(e,{slots:t})=>G(Vn,go(e),t);c0.displayName="Transition";const Yn={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};c0.props=J1({},Vn.props,Yn);const U2=(e,t=[])=>{Q(e)?e.forEach(n=>n(...t)):e&&e(...t)},N0=e=>e?Q(e)?e.some(t=>t.length>1):e.length>1:!1;function go(e){const t={};for(const P in e)P in Yn||(t[P]=e[P]);if(e.css===!1)return t;const{name:n="v",type:l,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:d=`${n}-enter-active`,enterToClass:w=`${n}-enter-to`,appearFromClass:_=a,appearActiveClass:p=d,appearToClass:v=w,leaveFromClass:g=`${n}-leave-from`,leaveActiveClass:u=`${n}-leave-active`,leaveToClass:x=`${n}-leave-to`}=e,k=mo(i),C=k&&k[0],B=k&&k[1],{onBeforeEnter:f,onEnter:M,onEnterCancelled:b,onLeave:y,onLeaveCancelled:A,onBeforeAppear:I=f,onAppear:K=M,onAppearCancelled:T=b}=t,J=(P,a1,U)=>{W2(P,a1?v:w),W2(P,a1?p:d),U&&U()},X=(P,a1)=>{P._isLeaving=!1,W2(P,g),W2(P,x),W2(P,u),a1&&a1()},i1=P=>(a1,U)=>{const D1=P?K:M,x1=()=>J(a1,P,U);U2(D1,[a1,x1]),U0(()=>{W2(a1,P?_:a),j2(a1,P?v:w),N0(D1)||W0(a1,l,C,x1)})};return J1(t,{onBeforeEnter(P){U2(f,[P]),j2(P,a),j2(P,d)},onBeforeAppear(P){U2(I,[P]),j2(P,_),j2(P,p)},onEnter:i1(!1),onAppear:i1(!0),onLeave(P,a1){P._isLeaving=!0;const U=()=>X(P,a1);j2(P,g),$o(),j2(P,u),U0(()=>{!P._isLeaving||(W2(P,g),j2(P,x),N0(y)||W0(P,l,B,U))}),U2(y,[P,U])},onEnterCancelled(P){J(P,!1),U2(b,[P])},onAppearCancelled(P){J(P,!0),U2(T,[P])},onLeaveCancelled(P){X(P),U2(A,[P])}})}function mo(e){if(e==null)return null;if(P1(e))return[tt(e.enter),tt(e.leave)];{const t=tt(e);return[t,t]}}function tt(e){return U3(e)}function j2(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function W2(e,t){t.split(/\s+/).forEach(l=>l&&e.classList.remove(l));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function U0(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ko=0;function W0(e,t,n,l){const i=e._endId=++ko,a=()=>{i===e._endId&&l()};if(n)return setTimeout(a,n);const{type:d,timeout:w,propCount:_}=fo(e,t);if(!d)return l();const p=d+"end";let v=0;const g=()=>{e.removeEventListener(p,u),a()},u=x=>{x.target===e&&++v>=_&&g()};setTimeout(()=>{v<_&&g()},w+1),e.addEventListener(p,u)}function fo(e,t){const n=window.getComputedStyle(e),l=k=>(n[k]||"").split(", "),i=l(A2+"Delay"),a=l(A2+"Duration"),d=J0(i,a),w=l(H3+"Delay"),_=l(H3+"Duration"),p=J0(w,_);let v=null,g=0,u=0;t===A2?d>0&&(v=A2,g=d,u=a.length):t===H3?p>0&&(v=H3,g=p,u=_.length):(g=Math.max(d,p),v=g>0?d>p?A2:H3:null,u=v?v===A2?a.length:_.length:0);const x=v===A2&&/\b(transform|all)(,|$)/.test(n[A2+"Property"]);return{type:v,timeout:g,propCount:u,hasTransform:x}}function J0(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,l)=>K0(n)+K0(e[l])))}function K0(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function $o(){return document.body.offsetHeight}const G2=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Q(t)?n=>me(t,n):t};function Mo(e){e.target.composing=!0}function Z0(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const St={created(e,{modifiers:{lazy:t,trim:n,number:l}},i){e._assign=G2(i);const a=l||i.props&&i.props.type==="number";M2(e,t?"change":"input",d=>{if(d.target.composing)return;let w=e.value;n&&(w=w.trim()),a&&(w=U3(w)),e._assign(w)}),n&&M2(e,"change",()=>{e.value=e.value.trim()}),t||(M2(e,"compositionstart",Mo),M2(e,"compositionend",Z0),M2(e,"change",Z0))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:l,number:i}},a){if(e._assign=G2(a),e.composing||document.activeElement===e&&e.type!=="range"&&(n||l&&e.value.trim()===t||(i||e.type==="number")&&U3(e.value)===t))return;const d=t==null?"":t;e.value!==d&&(e.value=d)}},Co={deep:!0,created(e,t,n){e._assign=G2(n),M2(e,"change",()=>{const l=e._modelValue,i=v3(e),a=e.checked,d=e._assign;if(Q(l)){const w=Ft(l,i),_=w!==-1;if(a&&!_)d(l.concat(i));else if(!a&&_){const p=[...l];p.splice(w,1),d(p)}}else if(g3(l)){const w=new Set(l);a?w.add(i):w.delete(i),d(w)}else d(er(e,a))})},mounted:X0,beforeUpdate(e,t,n){e._assign=G2(n),X0(e,t,n)}};function X0(e,{value:t,oldValue:n},l){e._modelValue=t,Q(t)?e.checked=Ft(t,l.props.value)>-1:g3(t)?e.checked=t.has(l.props.value):t!==n&&(e.checked=n3(t,er(e,!0)))}const zo={created(e,{value:t},n){e.checked=n3(t,n.props.value),e._assign=G2(n),M2(e,"change",()=>{e._assign(v3(e))})},beforeUpdate(e,{value:t,oldValue:n},l){e._assign=G2(l),t!==n&&(e.checked=n3(t,l.props.value))}},Bo={deep:!0,created(e,{value:t,modifiers:{number:n}},l){const i=g3(t);M2(e,"change",()=>{const a=Array.prototype.filter.call(e.options,d=>d.selected).map(d=>n?U3(v3(d)):v3(d));e._assign(e.multiple?i?new Set(a):a:a[0])}),e._assign=G2(l)},mounted(e,{value:t}){Q0(e,t)},beforeUpdate(e,t,n){e._assign=G2(n)},updated(e,{value:t}){Q0(e,t)}};function Q0(e,t){const n=e.multiple;if(!(n&&!Q(t)&&!g3(t))){for(let l=0,i=e.options.length;l<i;l++){const a=e.options[l],d=v3(a);if(n)Q(t)?a.selected=Ft(t,d)>-1:a.selected=t.has(d);else if(n3(v3(a),t)){e.selectedIndex!==l&&(e.selectedIndex=l);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function v3(e){return"_value"in e?e._value:e.value}function er(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const yo={created(e,t,n){pe(e,t,n,null,"created")},mounted(e,t,n){pe(e,t,n,null,"mounted")},beforeUpdate(e,t,n,l){pe(e,t,n,l,"beforeUpdate")},updated(e,t,n,l){pe(e,t,n,l,"updated")}};function Ho(e,t){switch(e){case"SELECT":return Bo;case"TEXTAREA":return St;default:switch(t){case"checkbox":return Co;case"radio":return zo;default:return St}}}function pe(e,t,n,l,i){const d=Ho(e.tagName,n.props&&n.props.type)[i];d&&d(e,t,n,l)}const Y0={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):b3(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:l}){!t!=!n&&(l?t?(l.beforeEnter(e),b3(e,!0),l.enter(e)):l.leave(e,()=>{b3(e,!1)}):b3(e,t))},beforeUnmount(e,{value:t}){b3(e,t)}};function b3(e,t){e.style.display=t?e._vod:"none"}const bo=J1({patchProp:uo},eo);let nt,e4=!1;function Lo(){return nt=e4?nt:jc(bo),e4=!0,nt}const Vo=(...e)=>{const t=Lo().createApp(...e),{mount:n}=t;return t.mount=l=>{const i=So(l);if(i)return n(i,!0,i instanceof SVGElement)},t};function So(e){return H1(e)?document.querySelector(e):e}const Ao=JSON.parse('{"base":"/blog/","lang":"zh-CN","title":"SihaoLin","description":"hehe","head":[["link",{"rel":"icon","href":"/favicon.ico"}],["meta",{"name":"viewport","content":"width=device-width,initial-scale=1,user-scalable=no"}]],"locales":{}}');var jo=([e,t,n])=>e==="meta"&&t.name?`${e}.${t.name}`:["title","base"].includes(e)?e:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,t,n]),Ro=e=>{const t=new Set,n=[];return e.forEach(l=>{const i=jo(l);t.has(i)||(t.add(i),n.push(l))}),n},To=e=>/^(https?:)?\/\//.test(e),WU3=e=>/^mailto:/.test(e),JU3=e=>/^tel:/.test(e),tr=e=>Object.prototype.toString.call(e)==="[object Object]",Eo=e=>e.replace(/\/$/,""),Po=e=>e.replace(/^\//,""),nr=(e,t)=>{const n=Object.keys(e).sort((l,i)=>{const a=i.split("/").length-l.split("/").length;return a!==0?a:i.length-l.length});for(const l of n)if(t.startsWith(l))return l;return"/"};const rr={"v-8daa1a0e":I1(()=>f1(()=>import("./index.html.8318c048.js"),[])),"v-e93607ce":I1(()=>f1(()=>import("./1.html.e55fccd3.js"),[])),"v-e5cc5690":I1(()=>f1(()=>import("./2.html.dcbce6e0.js"),[])),"v-e262a552":I1(()=>f1(()=>import("./3.html.dce29ee0.js"),[])),"v-3706649a":I1(()=>f1(()=>import("./404.html.8c9d618f.js"),[])),"v-1f6a4033":I1(()=>f1(()=>import("./index.html.a4133ae4.js"),[])),"v-5632ec49":I1(()=>f1(()=>import("./index.html.83570361.js"),[])),"v-5918fef3":I1(()=>f1(()=>import("./index.html.20338e7f.js"),[])),"v-d5e062a4":I1(()=>f1(()=>import("./index.html.2e0e6027.js"),[])),"v-3601bd88":I1(()=>f1(()=>import("./index.html.96448113.js"),[])),"v-0164be0f":I1(()=>f1(()=>import("./index.html.b019238e.js"),[])),"v-01560935":I1(()=>f1(()=>import("./index.html.a98ec509.js"),[])),"v-03d52fd3":I1(()=>f1(()=>import("./index.html.6d330be8.js"),[]))},Do={404:I1(()=>f1(()=>import("./404.5b219cf2.js"),["assets/404.5b219cf2.js","assets/index.40f1c1e3.js"])),Categories:I1(()=>f1(()=>import("./Categories.72f01e86.js"),["assets/Categories.72f01e86.js","assets/index.40f1c1e3.js","assets/Pagation.09246823.js"])),Layout:I1(()=>f1(()=>import("./Layout.b2dc33b3.js"),["assets/Layout.b2dc33b3.js","assets/index.40f1c1e3.js","assets/Pagation.09246823.js"])),Post:I1(()=>f1(()=>import("./Post.3bb3f601.js"),[])),Timeline:I1(()=>f1(()=>import("./Timeline.99ac3bd7.js"),[]))};var cr=Y(Yr),or=Te({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),C2=Y(or),Oe=()=>C2;Ke.webpackHot&&(__VUE_HMR_RUNTIME__.updatePageData=e=>{cr.value[e.key]=()=>Promise.resolve(e),e.key===C2.value.key&&(C2.value=e)});var sr=Symbol(""),Fo=()=>{const e=E1(sr);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},lr=Symbol(""),Io=()=>{const e=E1(lr);if(!e)throw new Error("usePageHead() is called without provider.");return e},qo=Symbol(""),ir=Symbol(""),ar=()=>{const e=E1(ir);if(!e)throw new Error("usePageLang() is called without provider.");return e},o0=Symbol(""),hr=()=>{const e=E1(o0);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},D2=Y(Ao),dr=()=>D2;Ke.webpackHot&&(__VUE_HMR_RUNTIME__.updateSiteData=e=>{D2.value=e});var wr=Symbol(""),KU3=()=>{const e=E1(wr);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},Oo=Symbol(""),Z2=r3({resolvePageData:async e=>{const t=cr.value[e],n=await(t==null?void 0:t());return n!=null?n:or},resolvePageFrontmatter:e=>e.frontmatter,resolvePageHead:(e,t,n)=>{const l=H1(t.description)?t.description:n.description,i=[...Q(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:l}]];return Ro(i)},resolvePageHeadTitle:(e,t)=>`${e.title?`${e.title} | `:""}${t.title}`,resolvePageLang:e=>e.lang||"en",resolveRouteLocale:(e,t)=>nr(e,t),resolveSiteLocaleData:(e,t)=>({...e,...e.locales[t]})}),Go=s({name:"ClientOnly",setup(e,t){const n=Y(!1);return r2(()=>{n.value=!0}),()=>{var l,i;return n.value?(i=(l=t.slots).default)==null?void 0:i.call(l):null}}}),No=s({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(e){const t=Oe(),n=n1(()=>rr[e.pageKey||t.value.key]);return()=>n.value?G(n.value):G("div","404 Not Found")}}),t4=s({name:"Vuepress",setup(){const e=Oe(),t=n1(()=>{let n;if(e.value.path){const l=e.value.frontmatter.layout;H1(l)?n=l:n="Layout"}else n="404";return Do[n]||F1(n,!1)});return()=>G(t.value)}}),_r=e=>To(e)?e:`${dr().value.base}${Po(e)}`,k2=e=>e;const Uo=JSON.parse('{"password":"e10adc3949ba59abbe56e057f20f883e","style":"@vuepress-reco/style-default","logo":"/avatar.jpg","navbar":[{"text":"\u9996\u9875","icon":"reco-home","link":"/"},{"text":"\u5173\u4E8E","link":"/about"}],"componentsDir":"./docs/.vuepress/components","catalogTitle":"\u76EE\u5F55","author":"SihaoLin","authorAvatar":"/avatar.jpg","autoSetCategory":false,"lastUpdated":"","search":true,"searchMaxSuggestions":10,"activeHeaderLinks":false}'),pr=Y(Uo),Wo=()=>pr;Ke.webpackHot&&(__VUE_HMR_RUNTIME__.updateThemeData=e=>{pr.value=e});const vr=Symbol(""),Ge=()=>{const e=E1(vr);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},Jo=(e,t)=>{var n;return{...e,...(n=e.locales)==null?void 0:n[t]}};function Ko(){const e=Ge(),t=n1(()=>{var a;return(a=e==null?void 0:e.value)===null||a===void 0?void 0:a.bulletin}),n=Y(!1),l="__CLOSE_BULLETIN_POPOVER__";return r2(()=>{var a;const d=sessionStorage.getItem(l);n.value=d!=="true"&&!!(!((a=t==null?void 0:t.value)===null||a===void 0)&&a.body)}),{visible:n,bulletin:t,closeBulletinPopover:()=>{n.value=!1,sessionStorage.setItem(l,"true")}}}const Zo={handleImage(e){return`<img style="${e.style||""}" src="${e.src}" />`},handleText(e){return`<div style="${e.style||""}">${e.content}</div>`},handleTitle(e){return`<h5 style="${e.style||""}">${e.content}</h5>`},handleButton(e){return`<a style="${e.style||""}" class="btn" href="${e.link}">${e.text}</a>`},handleButtongroup(e){return`<div class="btn-group">${(e.children||[]).reduce((n,l)=>n+=`<a style="${l.style||e.style||""}" class="btn" href="${l.link}">${l.text}</a>`,"")}</div>`},handleHr(e){return"<hr />"}};function Xo(){const e=Ge();function t(l){if(Array.isArray(l))return l.map(i=>t(i));{let i=l.type;return i=i.slice(0,1).toUpperCase()+i.slice(1),Zo[`handle${i}`](l)}}return{bodyNodes:n1(()=>{var l,i;return t((i=(l=e==null?void 0:e.value)===null||l===void 0?void 0:l.bulletin)===null||i===void 0?void 0:i.body).join("")}),handleNode:t}}var M3=(e,t)=>{const n=e.__vccOpts||e;for(const[l,i]of t)n[l]=i;return n};const Qo={class:"bulletin-title"},Yo=r("svg",{t:"1573745677073",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4448",width:"22",height:"22"},[r("path",{d:"M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0","p-id":"4449"})],-1),e8=[Yo],t8=["innerHTML"],n8=s({__name:"Bulletin",setup(e){const{visible:t,bulletin:n,closeBulletinPopover:l}=Ko(),{bodyNodes:i}=Xo();return(a,d)=>{var _,p;const w=F1("Xicons");return N1(t)?(c(),o("div",{key:0,class:"bulletin-wrapper",style:B2({width:((_=N1(n))==null?void 0:_.width)||"300px"})},[r("div",Qo,[u1(w,{icon:"Bulb","icon-size":"28","icon-color":"#fff",text:((p=N1(n))==null?void 0:p.title)||"\u516C\u544A","text-color":"#fff","text-size":"16"},null,8,["text"]),r("i",{class:"btn-close",onClick:d[0]||(d[0]=(...v)=>N1(l)&&N1(l)(...v))},e8)]),r("div",{class:"bulletin-content",innerHTML:N1(i)},null,8,t8)],4)):p1("",!0)}}});var r8=M3(n8,[["__file","Bulletin.vue"]]),c8=k2({rootComponents:[r8]});function o8(){const e=Ge(),t=n1(()=>{var l;switch((l=e.value.commentConfig)===null||l===void 0?void 0:l.type){case"valine":return"valine";case"waline":return"waline";default:return""}}),n=n1(()=>{var l,i;return((i=(l=e.value)===null||l===void 0?void 0:l.commentConfig)===null||i===void 0?void 0:i.options)||{}});return{solution:t,options:n}}/*!
  * vue-router v4.1.1
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const i3=typeof window!="undefined";function s8(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const A1=Object.assign;function rt(e,t){const n={};for(const l in t){const i=t[l];n[l]=p2(i)?i.map(e):e(i)}return n}const F3=()=>{},p2=Array.isArray,l8=/\/$/,i8=e=>e.replace(l8,"");function ct(e,t,n="/"){let l,i={},a="",d="";const w=t.indexOf("#");let _=t.indexOf("?");return w<_&&w>=0&&(_=-1),_>-1&&(l=t.slice(0,_),a=t.slice(_+1,w>-1?w:t.length),i=e(a)),w>-1&&(l=l||t.slice(0,w),d=t.slice(w,t.length)),l=w8(l!=null?l:t,n),{fullPath:l+(a&&"?")+a+d,path:l,query:i,hash:d}}function a8(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function n4(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function h8(e,t,n){const l=t.matched.length-1,i=n.matched.length-1;return l>-1&&l===i&&u3(t.matched[l],n.matched[i])&&ur(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function u3(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ur(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!d8(e[n],t[n]))return!1;return!0}function d8(e,t){return p2(e)?r4(e,t):p2(t)?r4(t,e):e===t}function r4(e,t){return p2(t)?e.length===t.length&&e.every((n,l)=>n===t[l]):e.length===1&&e[0]===t}function w8(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),l=e.split("/");let i=n.length-1,a,d;for(a=0;a<l.length;a++)if(d=l[a],d!==".")if(d==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+l.slice(a-(a===l.length?1:0)).join("/")}var Q3;(function(e){e.pop="pop",e.push="push"})(Q3||(Q3={}));var I3;(function(e){e.back="back",e.forward="forward",e.unknown=""})(I3||(I3={}));function _8(e){if(!e)if(i3){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),i8(e)}const p8=/^[^#]+#/;function v8(e,t){return e.replace(p8,"#")+t}function u8(e,t){const n=document.documentElement.getBoundingClientRect(),l=e.getBoundingClientRect();return{behavior:t.behavior,left:l.left-n.left-(t.left||0),top:l.top-n.top-(t.top||0)}}const Ne=()=>({left:window.pageXOffset,top:window.pageYOffset});function x8(e){let t;if("el"in e){const n=e.el,l=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?l?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=u8(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function c4(e,t){return(history.state?history.state.position-t:-1)+e}const At=new Map;function g8(e,t){At.set(e,t)}function m8(e){const t=At.get(e);return At.delete(e),t}let k8=()=>location.protocol+"//"+location.host;function xr(e,t){const{pathname:n,search:l,hash:i}=t,a=e.indexOf("#");if(a>-1){let w=i.includes(e.slice(a))?e.slice(a).length:1,_=i.slice(w);return _[0]!=="/"&&(_="/"+_),n4(_,"")}return n4(n,e)+l+i}function f8(e,t,n,l){let i=[],a=[],d=null;const w=({state:u})=>{const x=xr(e,location),k=n.value,C=t.value;let B=0;if(u){if(n.value=x,t.value=u,d&&d===k){d=null;return}B=C?u.position-C.position:0}else l(x);i.forEach(f=>{f(n.value,k,{delta:B,type:Q3.pop,direction:B?B>0?I3.forward:I3.back:I3.unknown})})};function _(){d=n.value}function p(u){i.push(u);const x=()=>{const k=i.indexOf(u);k>-1&&i.splice(k,1)};return a.push(x),x}function v(){const{history:u}=window;!u.state||u.replaceState(A1({},u.state,{scroll:Ne()}),"")}function g(){for(const u of a)u();a=[],window.removeEventListener("popstate",w),window.removeEventListener("beforeunload",v)}return window.addEventListener("popstate",w),window.addEventListener("beforeunload",v),{pauseListeners:_,listen:p,destroy:g}}function o4(e,t,n,l=!1,i=!1){return{back:e,current:t,forward:n,replaced:l,position:window.history.length,scroll:i?Ne():null}}function $8(e){const{history:t,location:n}=window,l={value:xr(e,n)},i={value:t.state};i.value||a(l.value,{back:null,current:l.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(_,p,v){const g=e.indexOf("#"),u=g>-1?(n.host&&document.querySelector("base")?e:e.slice(g))+_:k8()+e+_;try{t[v?"replaceState":"pushState"](p,"",u),i.value=p}catch(x){console.error(x),n[v?"replace":"assign"](u)}}function d(_,p){const v=A1({},t.state,o4(i.value.back,_,i.value.forward,!0),p,{position:i.value.position});a(_,v,!0),l.value=_}function w(_,p){const v=A1({},i.value,t.state,{forward:_,scroll:Ne()});a(v.current,v,!0);const g=A1({},o4(l.value,_,null),{position:v.position+1},p);a(_,g,!1),l.value=_}return{location:l,state:i,push:w,replace:d}}function M8(e){e=_8(e);const t=$8(e),n=f8(e,t.state,t.location,t.replace);function l(a,d=!0){d||n.pauseListeners(),history.go(a)}const i=A1({location:"",base:e,go:l,createHref:v8.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function C8(e){return typeof e=="string"||e&&typeof e=="object"}function gr(e){return typeof e=="string"||typeof e=="symbol"}const f2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},mr=Symbol("");var s4;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(s4||(s4={}));function x3(e,t){return A1(new Error,{type:e,[mr]:!0},t)}function R2(e,t){return e instanceof Error&&mr in e&&(t==null||!!(e.type&t))}const l4="[^/]+?",z8={sensitive:!1,strict:!1,start:!0,end:!0},B8=/[.+*?^${}()[\]/\\]/g;function y8(e,t){const n=A1({},z8,t),l=[];let i=n.start?"^":"";const a=[];for(const p of e){const v=p.length?[]:[90];n.strict&&!p.length&&(i+="/");for(let g=0;g<p.length;g++){const u=p[g];let x=40+(n.sensitive?.25:0);if(u.type===0)g||(i+="/"),i+=u.value.replace(B8,"\\$&"),x+=40;else if(u.type===1){const{value:k,repeatable:C,optional:B,regexp:f}=u;a.push({name:k,repeatable:C,optional:B});const M=f||l4;if(M!==l4){x+=10;try{new RegExp(`(${M})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${k}" (${M}): `+y.message)}}let b=C?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;g||(b=B&&p.length<2?`(?:/${b})`:"/"+b),B&&(b+="?"),i+=b,x+=20,B&&(x+=-8),C&&(x+=-20),M===".*"&&(x+=-50)}v.push(x)}l.push(v)}if(n.strict&&n.end){const p=l.length-1;l[p][l[p].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const d=new RegExp(i,n.sensitive?"":"i");function w(p){const v=p.match(d),g={};if(!v)return null;for(let u=1;u<v.length;u++){const x=v[u]||"",k=a[u-1];g[k.name]=x&&k.repeatable?x.split("/"):x}return g}function _(p){let v="",g=!1;for(const u of e){(!g||!v.endsWith("/"))&&(v+="/"),g=!1;for(const x of u)if(x.type===0)v+=x.value;else if(x.type===1){const{value:k,repeatable:C,optional:B}=x,f=k in p?p[k]:"";if(p2(f)&&!C)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const M=p2(f)?f.join("/"):f;if(!M)if(B)u.length<2&&e.length>1&&(v.endsWith("/")?v=v.slice(0,-1):g=!0);else throw new Error(`Missing required param "${k}"`);v+=M}}return v}return{re:d,score:l,keys:a,parse:w,stringify:_}}function H8(e,t){let n=0;for(;n<e.length&&n<t.length;){const l=t[n]-e[n];if(l)return l;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function b8(e,t){let n=0;const l=e.score,i=t.score;for(;n<l.length&&n<i.length;){const a=H8(l[n],i[n]);if(a)return a;n++}if(Math.abs(i.length-l.length)===1){if(i4(l))return 1;if(i4(i))return-1}return i.length-l.length}function i4(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const L8={type:0,value:""},V8=/[a-zA-Z0-9_]/;function S8(e){if(!e)return[[]];if(e==="/")return[[L8]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(x){throw new Error(`ERR (${n})/"${p}": ${x}`)}let n=0,l=n;const i=[];let a;function d(){a&&i.push(a),a=[]}let w=0,_,p="",v="";function g(){!p||(n===0?a.push({type:0,value:p}):n===1||n===2||n===3?(a.length>1&&(_==="*"||_==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:p,regexp:v,repeatable:_==="*"||_==="+",optional:_==="*"||_==="?"})):t("Invalid state to consume buffer"),p="")}function u(){p+=_}for(;w<e.length;){if(_=e[w++],_==="\\"&&n!==2){l=n,n=4;continue}switch(n){case 0:_==="/"?(p&&g(),d()):_===":"?(g(),n=1):u();break;case 4:u(),n=l;break;case 1:_==="("?n=2:V8.test(_)?u():(g(),n=0,_!=="*"&&_!=="?"&&_!=="+"&&w--);break;case 2:_===")"?v[v.length-1]=="\\"?v=v.slice(0,-1)+_:n=3:v+=_;break;case 3:g(),n=0,_!=="*"&&_!=="?"&&_!=="+"&&w--,v="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${p}"`),g(),d(),i}function A8(e,t,n){const l=y8(S8(e.path),n),i=A1(l,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function j8(e,t){const n=[],l=new Map;t=h4({strict:!1,end:!0,sensitive:!1},t);function i(v){return l.get(v)}function a(v,g,u){const x=!u,k=T8(v);k.aliasOf=u&&u.record;const C=h4(t,v),B=[k];if("alias"in v){const b=typeof v.alias=="string"?[v.alias]:v.alias;for(const y of b)B.push(A1({},k,{components:u?u.record.components:k.components,path:y,aliasOf:u?u.record:k}))}let f,M;for(const b of B){const{path:y}=b;if(g&&y[0]!=="/"){const A=g.record.path,I=A[A.length-1]==="/"?"":"/";b.path=g.record.path+(y&&I+y)}if(f=A8(b,g,C),u?u.alias.push(f):(M=M||f,M!==f&&M.alias.push(f),x&&v.name&&!a4(f)&&d(v.name)),k.children){const A=k.children;for(let I=0;I<A.length;I++)a(A[I],f,u&&u.children[I])}u=u||f,_(f)}return M?()=>{d(M)}:F3}function d(v){if(gr(v)){const g=l.get(v);g&&(l.delete(v),n.splice(n.indexOf(g),1),g.children.forEach(d),g.alias.forEach(d))}else{const g=n.indexOf(v);g>-1&&(n.splice(g,1),v.record.name&&l.delete(v.record.name),v.children.forEach(d),v.alias.forEach(d))}}function w(){return n}function _(v){let g=0;for(;g<n.length&&b8(v,n[g])>=0&&(v.record.path!==n[g].record.path||!kr(v,n[g]));)g++;n.splice(g,0,v),v.record.name&&!a4(v)&&l.set(v.record.name,v)}function p(v,g){let u,x={},k,C;if("name"in v&&v.name){if(u=l.get(v.name),!u)throw x3(1,{location:v});C=u.record.name,x=A1(R8(g.params,u.keys.filter(M=>!M.optional).map(M=>M.name)),v.params),k=u.stringify(x)}else if("path"in v)k=v.path,u=n.find(M=>M.re.test(k)),u&&(x=u.parse(k),C=u.record.name);else{if(u=g.name?l.get(g.name):n.find(M=>M.re.test(g.path)),!u)throw x3(1,{location:v,currentLocation:g});C=u.record.name,x=A1({},g.params,v.params),k=u.stringify(x)}const B=[];let f=u;for(;f;)B.unshift(f.record),f=f.parent;return{name:C,path:k,params:x,matched:B,meta:P8(B)}}return e.forEach(v=>a(v)),{addRoute:a,resolve:p,removeRoute:d,getRoutes:w,getRecordMatcher:i}}function R8(e,t){const n={};for(const l of t)l in e&&(n[l]=e[l]);return n}function T8(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:E8(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function E8(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const l in e.components)t[l]=typeof n=="boolean"?n:n[l];return t}function a4(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function P8(e){return e.reduce((t,n)=>A1(t,n.meta),{})}function h4(e,t){const n={};for(const l in e)n[l]=l in t?t[l]:e[l];return n}function kr(e,t){return t.children.some(n=>n===e||kr(e,n))}const fr=/#/g,D8=/&/g,F8=/\//g,I8=/=/g,q8=/\?/g,$r=/\+/g,O8=/%5B/g,G8=/%5D/g,Mr=/%5E/g,N8=/%60/g,Cr=/%7B/g,U8=/%7C/g,zr=/%7D/g,W8=/%20/g;function s0(e){return encodeURI(""+e).replace(U8,"|").replace(O8,"[").replace(G8,"]")}function J8(e){return s0(e).replace(Cr,"{").replace(zr,"}").replace(Mr,"^")}function jt(e){return s0(e).replace($r,"%2B").replace(W8,"+").replace(fr,"%23").replace(D8,"%26").replace(N8,"`").replace(Cr,"{").replace(zr,"}").replace(Mr,"^")}function K8(e){return jt(e).replace(I8,"%3D")}function Z8(e){return s0(e).replace(fr,"%23").replace(q8,"%3F")}function X8(e){return e==null?"":Z8(e).replace(F8,"%2F")}function Le(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Q8(e){const t={};if(e===""||e==="?")return t;const l=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<l.length;++i){const a=l[i].replace($r," "),d=a.indexOf("="),w=Le(d<0?a:a.slice(0,d)),_=d<0?null:Le(a.slice(d+1));if(w in t){let p=t[w];p2(p)||(p=t[w]=[p]),p.push(_)}else t[w]=_}return t}function d4(e){let t="";for(let n in e){const l=e[n];if(n=K8(n),l==null){l!==void 0&&(t+=(t.length?"&":"")+n);continue}(p2(l)?l.map(a=>a&&jt(a)):[l&&jt(l)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function Y8(e){const t={};for(const n in e){const l=e[n];l!==void 0&&(t[n]=p2(l)?l.map(i=>i==null?null:""+i):l==null?l:""+l)}return t}const e5=Symbol(""),w4=Symbol(""),Ue=Symbol(""),l0=Symbol(""),Rt=Symbol("");function L3(){let e=[];function t(l){return e.push(l),()=>{const i=e.indexOf(l);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function P2(e,t,n,l,i){const a=l&&(l.enterCallbacks[i]=l.enterCallbacks[i]||[]);return()=>new Promise((d,w)=>{const _=g=>{g===!1?w(x3(4,{from:n,to:t})):g instanceof Error?w(g):C8(g)?w(x3(2,{from:t,to:g})):(a&&l.enterCallbacks[i]===a&&typeof g=="function"&&a.push(g),d())},p=e.call(l&&l.instances[i],t,n,_);let v=Promise.resolve(p);e.length<3&&(v=v.then(_)),v.catch(g=>w(g))})}function ot(e,t,n,l){const i=[];for(const a of e)for(const d in a.components){let w=a.components[d];if(!(t!=="beforeRouteEnter"&&!a.instances[d]))if(t5(w)){const p=(w.__vccOpts||w)[t];p&&i.push(P2(p,n,l,a,d))}else{let _=w();i.push(()=>_.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${a.path}"`));const v=s8(p)?p.default:p;a.components[d]=v;const u=(v.__vccOpts||v)[t];return u&&P2(u,n,l,a,d)()}))}}return i}function t5(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function _4(e){const t=E1(Ue),n=E1(l0),l=n1(()=>t.resolve(N1(e.to))),i=n1(()=>{const{matched:_}=l.value,{length:p}=_,v=_[p-1],g=n.matched;if(!v||!g.length)return-1;const u=g.findIndex(u3.bind(null,v));if(u>-1)return u;const x=p4(_[p-2]);return p>1&&p4(v)===x&&g[g.length-1].path!==x?g.findIndex(u3.bind(null,_[p-2])):u}),a=n1(()=>i.value>-1&&o5(n.params,l.value.params)),d=n1(()=>i.value>-1&&i.value===n.matched.length-1&&ur(n.params,l.value.params));function w(_={}){return c5(_)?t[N1(e.replace)?"replace":"push"](N1(e.to)).catch(F3):Promise.resolve()}return{route:l,href:n1(()=>l.value.href),isActive:a,isExactActive:d,navigate:w}}const n5=s({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_4,setup(e,{slots:t}){const n=r3(_4(e)),{options:l}=E1(Ue),i=n1(()=>({[v4(e.activeClass,l.linkActiveClass,"router-link-active")]:n.isActive,[v4(e.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:G("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},a)}}}),r5=n5;function c5(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function o5(e,t){for(const n in t){const l=t[n],i=e[n];if(typeof l=="string"){if(l!==i)return!1}else if(!p2(i)||i.length!==l.length||l.some((a,d)=>a!==i[d]))return!1}return!0}function p4(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const v4=(e,t,n)=>e!=null?e:t!=null?t:n,s5=s({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const l=E1(Rt),i=n1(()=>e.route||l.value),a=E1(w4,0),d=n1(()=>{let p=N1(a);const{matched:v}=i.value;let g;for(;(g=v[p])&&!g.components;)p++;return p}),w=n1(()=>i.value.matched[d.value]);w2(w4,n1(()=>d.value+1)),w2(e5,w),w2(Rt,i);const _=Y();return W1(()=>[_.value,w.value,e.name],([p,v,g],[u,x,k])=>{v&&(v.instances[g]=p,x&&x!==v&&p&&p===u&&(v.leaveGuards.size||(v.leaveGuards=x.leaveGuards),v.updateGuards.size||(v.updateGuards=x.updateGuards))),p&&v&&(!x||!u3(v,x)||!u)&&(v.enterCallbacks[g]||[]).forEach(C=>C(p))},{flush:"post"}),()=>{const p=i.value,v=w.value,g=v&&v.components[e.name],u=e.name;if(!g)return u4(n.default,{Component:g,route:p});const x=v.props[e.name],k=x?x===!0?p.params:typeof x=="function"?x(p):x:null,B=G(g,A1({},k,t,{onVnodeUnmounted:f=>{f.component.isUnmounted&&(v.instances[u]=null)},ref:_}));return u4(n.default,{Component:B,route:p})||B}}});function u4(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Br=s5;function l5(e){const t=j8(e.routes,e),n=e.parseQuery||Q8,l=e.stringifyQuery||d4,i=e.history,a=L3(),d=L3(),w=L3(),_=mn(f2);let p=f2;i3&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=rt.bind(null,H=>""+H),g=rt.bind(null,X8),u=rt.bind(null,Le);function x(H,D){let j,W;return gr(H)?(j=t.getRecordMatcher(H),W=D):W=H,t.addRoute(W,j)}function k(H){const D=t.getRecordMatcher(H);D&&t.removeRoute(D)}function C(){return t.getRoutes().map(H=>H.record)}function B(H){return!!t.getRecordMatcher(H)}function f(H,D){if(D=A1({},D||_.value),typeof H=="string"){const h1=ct(n,H,D.path),m=t.resolve({path:h1.path},D),$=i.createHref(h1.fullPath);return A1(h1,m,{params:u(m.params),hash:Le(h1.hash),redirectedFrom:void 0,href:$})}let j;if("path"in H)j=A1({},H,{path:ct(n,H.path,D.path).path});else{const h1=A1({},H.params);for(const m in h1)h1[m]==null&&delete h1[m];j=A1({},H,{params:g(H.params)}),D.params=g(D.params)}const W=t.resolve(j,D),$1=H.hash||"";W.params=v(u(W.params));const v1=a8(l,A1({},H,{hash:J8($1),path:W.path})),d1=i.createHref(v1);return A1({fullPath:v1,hash:$1,query:l===d4?Y8(H.query):H.query||{}},W,{redirectedFrom:void 0,href:d1})}function M(H){return typeof H=="string"?ct(n,H,_.value.path):A1({},H)}function b(H,D){if(p!==H)return x3(8,{from:D,to:H})}function y(H){return K(H)}function A(H){return y(A1(M(H),{replace:!0}))}function I(H){const D=H.matched[H.matched.length-1];if(D&&D.redirect){const{redirect:j}=D;let W=typeof j=="function"?j(H):j;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=M(W):{path:W},W.params={}),A1({query:H.query,hash:H.hash,params:"path"in W?{}:H.params},W)}}function K(H,D){const j=p=f(H),W=_.value,$1=H.state,v1=H.force,d1=H.replace===!0,h1=I(j);if(h1)return K(A1(M(h1),{state:$1,force:v1,replace:d1}),D||j);const m=j;m.redirectedFrom=D;let $;return!v1&&h8(l,W,j)&&($=x3(16,{to:m,from:W}),c1(W,W,!0,!1)),($?Promise.resolve($):J(m,W)).catch(z=>R2(z)?R2(z,2)?z:O(z):z1(z,m,W)).then(z=>{if(z){if(R2(z,2))return K(A1(M(z.to),{state:$1,force:v1,replace:d1}),D||m)}else z=i1(m,W,!0,d1,$1);return X(m,W,z),z})}function T(H,D){const j=b(H,D);return j?Promise.reject(j):Promise.resolve()}function J(H,D){let j;const[W,$1,v1]=i5(H,D);j=ot(W.reverse(),"beforeRouteLeave",H,D);for(const h1 of W)h1.leaveGuards.forEach(m=>{j.push(P2(m,H,D))});const d1=T.bind(null,H,D);return j.push(d1),o3(j).then(()=>{j=[];for(const h1 of a.list())j.push(P2(h1,H,D));return j.push(d1),o3(j)}).then(()=>{j=ot($1,"beforeRouteUpdate",H,D);for(const h1 of $1)h1.updateGuards.forEach(m=>{j.push(P2(m,H,D))});return j.push(d1),o3(j)}).then(()=>{j=[];for(const h1 of H.matched)if(h1.beforeEnter&&!D.matched.includes(h1))if(p2(h1.beforeEnter))for(const m of h1.beforeEnter)j.push(P2(m,H,D));else j.push(P2(h1.beforeEnter,H,D));return j.push(d1),o3(j)}).then(()=>(H.matched.forEach(h1=>h1.enterCallbacks={}),j=ot(v1,"beforeRouteEnter",H,D),j.push(d1),o3(j))).then(()=>{j=[];for(const h1 of d.list())j.push(P2(h1,H,D));return j.push(d1),o3(j)}).catch(h1=>R2(h1,8)?h1:Promise.reject(h1))}function X(H,D,j){for(const W of w.list())W(H,D,j)}function i1(H,D,j,W,$1){const v1=b(H,D);if(v1)return v1;const d1=D===f2,h1=i3?history.state:{};j&&(W||d1?i.replace(H.fullPath,A1({scroll:d1&&h1&&h1.scroll},$1)):i.push(H.fullPath,$1)),_.value=H,c1(H,D,j,d1),O()}let P;function a1(){P||(P=i.listen((H,D,j)=>{if(!_1.listening)return;const W=f(H),$1=I(W);if($1){K(A1($1,{replace:!0}),W).catch(F3);return}p=W;const v1=_.value;i3&&g8(c4(v1.fullPath,j.delta),Ne()),J(W,v1).catch(d1=>R2(d1,12)?d1:R2(d1,2)?(K(d1.to,W).then(h1=>{R2(h1,20)&&!j.delta&&j.type===Q3.pop&&i.go(-1,!1)}).catch(F3),Promise.reject()):(j.delta&&i.go(-j.delta,!1),z1(d1,W,v1))).then(d1=>{d1=d1||i1(W,v1,!1),d1&&(j.delta?i.go(-j.delta,!1):j.type===Q3.pop&&R2(d1,20)&&i.go(-1,!1)),X(W,v1,d1)}).catch(F3)}))}let U=L3(),D1=L3(),x1;function z1(H,D,j){O(H);const W=D1.list();return W.length?W.forEach($1=>$1(H,D,j)):console.error(H),Promise.reject(H)}function B1(){return x1&&_.value!==f2?Promise.resolve():new Promise((H,D)=>{U.add([H,D])})}function O(H){return x1||(x1=!H,a1(),U.list().forEach(([D,j])=>H?j(H):D()),U.reset()),H}function c1(H,D,j,W){const{scrollBehavior:$1}=e;if(!i3||!$1)return Promise.resolve();const v1=!j&&m8(c4(H.fullPath,0))||(W||!j)&&history.state&&history.state.scroll||null;return Qt().then(()=>$1(H,D,v1)).then(d1=>d1&&x8(d1)).catch(d1=>z1(d1,H,D))}const s1=H=>i.go(H);let b1;const M1=new Set,_1={currentRoute:_,listening:!0,addRoute:x,removeRoute:k,hasRoute:B,getRoutes:C,resolve:f,options:e,push:y,replace:A,go:s1,back:()=>s1(-1),forward:()=>s1(1),beforeEach:a.add,beforeResolve:d.add,afterEach:w.add,onError:D1.add,isReady:B1,install(H){const D=this;H.component("RouterLink",r5),H.component("RouterView",Br),H.config.globalProperties.$router=D,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>N1(_)}),i3&&!b1&&_.value===f2&&(b1=!0,y(i.location).catch($1=>{}));const j={};for(const $1 in f2)j[$1]=n1(()=>_.value[$1]);H.provide(Ue,D),H.provide(l0,r3(j)),H.provide(Rt,_);const W=H.unmount;M1.add(H),H.unmount=function(){M1.delete(H),M1.size<1&&(p=f2,P&&P(),P=null,_.value=f2,b1=!1,x1=!1),W()}}};return _1}function o3(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function i5(e,t){const n=[],l=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let d=0;d<a;d++){const w=t.matched[d];w&&(e.matched.find(p=>u3(p,w))?l.push(w):n.push(w));const _=e.matched[d];_&&(t.matched.find(p=>u3(p,_))||i.push(_))}return[n,l,i]}function C3(){return E1(Ue)}function We(){return E1(l0)}var x4=s({name:"Valine",props:{options:{type:Object,default(){return{}}}},setup(e){const t=C3(),{options:n}=$3(e);r2(()=>{const l=async()=>{const{Valine:i}=await f1(()=>import("./reco-valine.88224ab5.js"),[]),a={el:"#valine",placeholder:"just go go",notify:!1,verify:!1,avatar:"retro",visitor:!0,recordIP:!1,path:window.location.pathname,...n.value};new i(a)};l(),W1(()=>t.currentRoute.value.path,i=>{l()},{immediate:!0,deep:!0})})},render(){return G("div",{class:"reco-valine-wrapper"},G("div",{id:"valine"}))}}),J2,ve,q3=typeof Map=="function"?new Map:(J2=[],ve=[],{has:function(e){return J2.indexOf(e)>-1},get:function(e){return ve[J2.indexOf(e)]},set:function(e,t){J2.indexOf(e)===-1&&(J2.push(e),ve.push(t))},delete:function(e){var t=J2.indexOf(e);t>-1&&(J2.splice(t,1),ve.splice(t,1))}}),yr=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch{yr=function(t){var n=document.createEvent("Event");return n.initEvent(t,!0,!1),n}}function a5(e){var t=q3.get(e);t&&t.destroy()}function h5(e){var t=q3.get(e);t&&t.update()}var j3=null;typeof window=="undefined"||typeof window.getComputedStyle!="function"?((j3=function(e){return e}).destroy=function(e){return e},j3.update=function(e){return e}):((j3=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(n){return function(l){if(l&&l.nodeName&&l.nodeName==="TEXTAREA"&&!q3.has(l)){var i,a=null,d=null,w=null,_=function(){l.clientWidth!==d&&u()},p=function(x){window.removeEventListener("resize",_,!1),l.removeEventListener("input",u,!1),l.removeEventListener("keyup",u,!1),l.removeEventListener("autosize:destroy",p,!1),l.removeEventListener("autosize:update",u,!1),Object.keys(x).forEach(function(k){l.style[k]=x[k]}),q3.delete(l)}.bind(l,{height:l.style.height,resize:l.style.resize,overflowY:l.style.overflowY,overflowX:l.style.overflowX,wordWrap:l.style.wordWrap});l.addEventListener("autosize:destroy",p,!1),"onpropertychange"in l&&"oninput"in l&&l.addEventListener("keyup",u,!1),window.addEventListener("resize",_,!1),l.addEventListener("input",u,!1),l.addEventListener("autosize:update",u,!1),l.style.overflowX="hidden",l.style.wordWrap="break-word",q3.set(l,{destroy:p,update:u}),(i=window.getComputedStyle(l,null)).resize==="vertical"?l.style.resize="none":i.resize==="both"&&(l.style.resize="horizontal"),a=i.boxSizing==="content-box"?-(parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)):parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),isNaN(a)&&(a=0),u()}function v(x){var k=l.style.width;l.style.width="0px",l.style.width=k,l.style.overflowY=x}function g(){if(l.scrollHeight!==0){var x=function(C){for(var B=[];C&&C.parentNode&&C.parentNode instanceof Element;)C.parentNode.scrollTop&&B.push({node:C.parentNode,scrollTop:C.parentNode.scrollTop}),C=C.parentNode;return B}(l),k=document.documentElement&&document.documentElement.scrollTop;l.style.height="",l.style.height=l.scrollHeight+a+"px",d=l.clientWidth,x.forEach(function(C){C.node.scrollTop=C.scrollTop}),k&&(document.documentElement.scrollTop=k)}}function u(){g();var x=Math.round(parseFloat(l.style.height)),k=window.getComputedStyle(l,null),C=k.boxSizing==="content-box"?Math.round(parseFloat(k.height)):l.offsetHeight;if(C<x?k.overflowY==="hidden"&&(v("scroll"),g(),C=k.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(l,null).height)):l.offsetHeight):k.overflowY!=="hidden"&&(v("hidden"),g(),C=k.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(l,null).height)):l.offsetHeight),w!==C){w=C;var B=yr("autosize:resized");try{l.dispatchEvent(B)}catch{}}}}(n)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],a5),e},j3.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],h5),e});var g4=j3;function Hr(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let z3=Hr();function d5(e){z3=e}const w5=/[&<>"']/,_5=/[&<>"']/g,p5=/[<>"']|&(?!#?\w+;)/,v5=/[<>"']|&(?!#?\w+;)/g,u5={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},m4=e=>u5[e];function O1(e,t){if(t){if(w5.test(e))return e.replace(_5,m4)}else if(p5.test(e))return e.replace(v5,m4);return e}const x5=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function br(e){return e.replace(x5,(t,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const g5=/(^|[^\[])\^/g;function R1(e,t){e=typeof e=="string"?e:e.source,t=t||"";const n={replace:(l,i)=>(i=i.source||i,i=i.replace(g5,"$1"),e=e.replace(l,i),n),getRegex:()=>new RegExp(e,t)};return n}const m5=/[^\w:]/g,k5=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function k4(e,t,n){if(e){let l;try{l=decodeURIComponent(br(n)).replace(m5,"").toLowerCase()}catch{return null}if(l.indexOf("javascript:")===0||l.indexOf("vbscript:")===0||l.indexOf("data:")===0)return null}t&&!k5.test(n)&&(n=C5(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const ue={},f5=/^[^:]+:\/*[^/]*$/,$5=/^([^:]+:)[\s\S]*$/,M5=/^([^:]+:\/*[^/]*)[\s\S]*$/;function C5(e,t){ue[" "+e]||(f5.test(e)?ue[" "+e]=e+"/":ue[" "+e]=fe(e,"/",!0)),e=ue[" "+e];const n=e.indexOf(":")===-1;return t.substring(0,2)==="//"?n?t:e.replace($5,"$1")+t:t.charAt(0)==="/"?n?t:e.replace(M5,"$1")+t:e+t}const Ve={exec:function(){}};function v2(e){let t=1,n,l;for(;t<arguments.length;t++){n=arguments[t];for(l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}function f4(e,t){const n=e.replace(/\|/g,(a,d,w)=>{let _=!1,p=d;for(;--p>=0&&w[p]==="\\";)_=!_;return _?"|":" |"}),l=n.split(/ \|/);let i=0;if(l[0].trim()||l.shift(),l.length>0&&!l[l.length-1].trim()&&l.pop(),l.length>t)l.splice(t);else for(;l.length<t;)l.push("");for(;i<l.length;i++)l[i]=l[i].trim().replace(/\\\|/g,"|");return l}function fe(e,t,n){const l=e.length;if(l===0)return"";let i=0;for(;i<l;){const a=e.charAt(l-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,l-i)}function z5(e,t){if(e.indexOf(t[1])===-1)return-1;const n=e.length;let l=0,i=0;for(;i<n;i++)if(e[i]==="\\")i++;else if(e[i]===t[0])l++;else if(e[i]===t[1]&&(l--,l<0))return i;return-1}function Lr(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function $4(e,t){if(t<1)return"";let n="";for(;t>1;)t&1&&(n+=e),t>>=1,e+=e;return n+e}function M4(e,t,n,l){const i=t.href,a=t.title?O1(t.title):null,d=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){l.state.inLink=!0;const w={type:"link",raw:n,href:i,title:a,text:d,tokens:l.inlineTokens(d,[])};return l.state.inLink=!1,w}return{type:"image",raw:n,href:i,title:a,text:O1(d)}}function B5(e,t){const n=e.match(/^(\s+)(?:```)/);if(n===null)return t;const l=n[1];return t.split(`
`).map(i=>{const a=i.match(/^\s+/);if(a===null)return i;const[d]=a;return d.length>=l.length?i.slice(l.length):i}).join(`
`)}class i0{constructor(t){this.options=t||z3}space(t){const n=this.rules.block.newline.exec(t);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(t){const n=this.rules.block.code.exec(t);if(n){const l=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?l:fe(l,`
`)}}}fences(t){const n=this.rules.block.fences.exec(t);if(n){const l=n[0],i=B5(l,n[3]||"");return{type:"code",raw:l,lang:n[2]?n[2].trim():n[2],text:i}}}heading(t){const n=this.rules.block.heading.exec(t);if(n){let l=n[2].trim();if(/#$/.test(l)){const a=fe(l,"#");(this.options.pedantic||!a||/ $/.test(a))&&(l=a.trim())}const i={type:"heading",raw:n[0],depth:n[1].length,text:l,tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}hr(t){const n=this.rules.block.hr.exec(t);if(n)return{type:"hr",raw:n[0]}}blockquote(t){const n=this.rules.block.blockquote.exec(t);if(n){const l=n[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:n[0],tokens:this.lexer.blockTokens(l,[]),text:l}}}list(t){let n=this.rules.block.list.exec(t);if(n){let l,i,a,d,w,_,p,v,g,u,x,k,C=n[1].trim();const B=C.length>1,f={type:"list",raw:"",ordered:B,start:B?+C.slice(0,-1):"",loose:!1,items:[]};C=B?`\\d{1,9}\\${C.slice(-1)}`:`\\${C}`,this.options.pedantic&&(C=B?C:"[*+-]");const M=new RegExp(`^( {0,3}${C})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;t&&(k=!1,!(!(n=M.exec(t))||this.rules.block.hr.test(t)));){if(l=n[0],t=t.substring(l.length),v=n[2].split(`
`,1)[0],g=t.split(`
`,1)[0],this.options.pedantic?(d=2,x=v.trimLeft()):(d=n[2].search(/[^ ]/),d=d>4?1:d,x=v.slice(d),d+=n[1].length),_=!1,!v&&/^ *$/.test(g)&&(l+=g+`
`,t=t.substring(g.length+1),k=!0),!k){const y=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,d-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),I=new RegExp(`^( {0,${Math.min(3,d-1)}})(\`\`\`|~~~)`);for(;t&&(u=t.split(`
`,1)[0],v=u,this.options.pedantic&&(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(I.test(v)||this.rules.block.heading.test(v)||y.test(v)||A.test(t)));){if(v.search(/[^ ]/)>=d||!v.trim())x+=`
`+v.slice(d);else if(!_)x+=`
`+v;else break;!_&&!v.trim()&&(_=!0),l+=u+`
`,t=t.substring(u.length+1)}}f.loose||(p?f.loose=!0:/\n *\n *$/.test(l)&&(p=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(x),i&&(a=i[0]!=="[ ] ",x=x.replace(/^\[[ xX]\] +/,""))),f.items.push({type:"list_item",raw:l,task:!!i,checked:a,loose:!1,text:x}),f.raw+=l}f.items[f.items.length-1].raw=l.trimRight(),f.items[f.items.length-1].text=x.trimRight(),f.raw=f.raw.trimRight();const b=f.items.length;for(w=0;w<b;w++){this.lexer.state.top=!1,f.items[w].tokens=this.lexer.blockTokens(f.items[w].text,[]);const y=f.items[w].tokens.filter(I=>I.type==="space"),A=y.every(I=>{const K=I.raw.split("");let T=0;for(const J of K)if(J===`
`&&(T+=1),T>1)return!0;return!1});!f.loose&&y.length&&A&&(f.loose=!0,f.items[w].loose=!0)}return f}}html(t){const n=this.rules.block.html.exec(t);if(n){const l={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};return this.options.sanitize&&(l.type="paragraph",l.text=this.options.sanitizer?this.options.sanitizer(n[0]):O1(n[0]),l.tokens=[],this.lexer.inline(l.text,l.tokens)),l}}def(t){const n=this.rules.block.def.exec(t);if(n){n[3]&&(n[3]=n[3].substring(1,n[3].length-1));const l=n[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:l,raw:n[0],href:n[2],title:n[3]}}}table(t){const n=this.rules.block.table.exec(t);if(n){const l={type:"table",header:f4(n[1]).map(i=>({text:i})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(l.header.length===l.align.length){l.raw=n[0];let i=l.align.length,a,d,w,_;for(a=0;a<i;a++)/^ *-+: *$/.test(l.align[a])?l.align[a]="right":/^ *:-+: *$/.test(l.align[a])?l.align[a]="center":/^ *:-+ *$/.test(l.align[a])?l.align[a]="left":l.align[a]=null;for(i=l.rows.length,a=0;a<i;a++)l.rows[a]=f4(l.rows[a],l.header.length).map(p=>({text:p}));for(i=l.header.length,d=0;d<i;d++)l.header[d].tokens=[],this.lexer.inline(l.header[d].text,l.header[d].tokens);for(i=l.rows.length,d=0;d<i;d++)for(_=l.rows[d],w=0;w<_.length;w++)_[w].tokens=[],this.lexer.inline(_[w].text,_[w].tokens);return l}}}lheading(t){const n=this.rules.block.lheading.exec(t);if(n){const l={type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}paragraph(t){const n=this.rules.block.paragraph.exec(t);if(n){const l={type:"paragraph",raw:n[0],text:n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1],tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}text(t){const n=this.rules.block.text.exec(t);if(n){const l={type:"text",raw:n[0],text:n[0],tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}escape(t){const n=this.rules.inline.escape.exec(t);if(n)return{type:"escape",raw:n[0],text:O1(n[1])}}tag(t){const n=this.rules.inline.tag.exec(t);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):O1(n[0]):n[0]}}link(t){const n=this.rules.inline.link.exec(t);if(n){const l=n[2].trim();if(!this.options.pedantic&&/^</.test(l)){if(!/>$/.test(l))return;const d=fe(l.slice(0,-1),"\\");if((l.length-d.length)%2===0)return}else{const d=z5(n[2],"()");if(d>-1){const _=(n[0].indexOf("!")===0?5:4)+n[1].length+d;n[2]=n[2].substring(0,d),n[0]=n[0].substring(0,_).trim(),n[3]=""}}let i=n[2],a="";if(this.options.pedantic){const d=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);d&&(i=d[1],a=d[3])}else a=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(l)?i=i.slice(1):i=i.slice(1,-1)),M4(n,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:a&&a.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(t,n){let l;if((l=this.rules.inline.reflink.exec(t))||(l=this.rules.inline.nolink.exec(t))){let i=(l[2]||l[1]).replace(/\s+/g," ");if(i=n[i.toLowerCase()],!i||!i.href){const a=l[0].charAt(0);return{type:"text",raw:a,text:a}}return M4(l,i,l[0],this.lexer)}}emStrong(t,n,l=""){let i=this.rules.inline.emStrong.lDelim.exec(t);if(!i||i[3]&&l.match(/[\p{L}\p{N}]/u))return;const a=i[1]||i[2]||"";if(!a||a&&(l===""||this.rules.inline.punctuation.exec(l))){const d=i[0].length-1;let w,_,p=d,v=0;const g=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(g.lastIndex=0,n=n.slice(-1*t.length+d);(i=g.exec(n))!=null;){if(w=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!w)continue;if(_=w.length,i[3]||i[4]){p+=_;continue}else if((i[5]||i[6])&&d%3&&!((d+_)%3)){v+=_;continue}if(p-=_,p>0)continue;if(_=Math.min(_,_+p+v),Math.min(d,_)%2){const x=t.slice(1,d+i.index+_);return{type:"em",raw:t.slice(0,d+i.index+_+1),text:x,tokens:this.lexer.inlineTokens(x,[])}}const u=t.slice(2,d+i.index+_-1);return{type:"strong",raw:t.slice(0,d+i.index+_+1),text:u,tokens:this.lexer.inlineTokens(u,[])}}}}codespan(t){const n=this.rules.inline.code.exec(t);if(n){let l=n[2].replace(/\n/g," ");const i=/[^ ]/.test(l),a=/^ /.test(l)&&/ $/.test(l);return i&&a&&(l=l.substring(1,l.length-1)),l=O1(l,!0),{type:"codespan",raw:n[0],text:l}}}br(t){const n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t){const n=this.rules.inline.del.exec(t);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2],[])}}autolink(t,n){const l=this.rules.inline.autolink.exec(t);if(l){let i,a;return l[2]==="@"?(i=O1(this.options.mangle?n(l[1]):l[1]),a="mailto:"+i):(i=O1(l[1]),a=i),{type:"link",raw:l[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}url(t,n){let l;if(l=this.rules.inline.url.exec(t)){let i,a;if(l[2]==="@")i=O1(this.options.mangle?n(l[0]):l[0]),a="mailto:"+i;else{let d;do d=l[0],l[0]=this.rules.inline._backpedal.exec(l[0])[0];while(d!==l[0]);i=O1(l[0]),l[1]==="www."?a="http://"+i:a=i}return{type:"link",raw:l[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(t,n){const l=this.rules.inline.text.exec(t);if(l){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):O1(l[0]):l[0]:i=O1(this.options.smartypants?n(l[0]):l[0]),{type:"text",raw:l[0],text:i}}}}const r1={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Ve,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};r1._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;r1._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;r1.def=R1(r1.def).replace("label",r1._label).replace("title",r1._title).getRegex();r1.bullet=/(?:[*+-]|\d{1,9}[.)])/;r1.listItemStart=R1(/^( *)(bull) */).replace("bull",r1.bullet).getRegex();r1.list=R1(r1.list).replace(/bull/g,r1.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+r1.def.source+")").getRegex();r1._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";r1._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;r1.html=R1(r1.html,"i").replace("comment",r1._comment).replace("tag",r1._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();r1.paragraph=R1(r1._paragraph).replace("hr",r1.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",r1._tag).getRegex();r1.blockquote=R1(r1.blockquote).replace("paragraph",r1.paragraph).getRegex();r1.normal=v2({},r1);r1.gfm=v2({},r1.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});r1.gfm.table=R1(r1.gfm.table).replace("hr",r1.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",r1._tag).getRegex();r1.gfm.paragraph=R1(r1._paragraph).replace("hr",r1.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",r1.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",r1._tag).getRegex();r1.pedantic=v2({},r1.normal,{html:R1(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",r1._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ve,paragraph:R1(r1.normal._paragraph).replace("hr",r1.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",r1.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const N={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Ve,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Ve,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};N._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";N.punctuation=R1(N.punctuation).replace(/punctuation/g,N._punctuation).getRegex();N.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;N.escapedEmSt=/\\\*|\\_/g;N._comment=R1(r1._comment).replace("(?:-->|$)","-->").getRegex();N.emStrong.lDelim=R1(N.emStrong.lDelim).replace(/punct/g,N._punctuation).getRegex();N.emStrong.rDelimAst=R1(N.emStrong.rDelimAst,"g").replace(/punct/g,N._punctuation).getRegex();N.emStrong.rDelimUnd=R1(N.emStrong.rDelimUnd,"g").replace(/punct/g,N._punctuation).getRegex();N._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;N._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;N._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;N.autolink=R1(N.autolink).replace("scheme",N._scheme).replace("email",N._email).getRegex();N._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;N.tag=R1(N.tag).replace("comment",N._comment).replace("attribute",N._attribute).getRegex();N._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;N._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;N._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;N.link=R1(N.link).replace("label",N._label).replace("href",N._href).replace("title",N._title).getRegex();N.reflink=R1(N.reflink).replace("label",N._label).replace("ref",r1._label).getRegex();N.nolink=R1(N.nolink).replace("ref",r1._label).getRegex();N.reflinkSearch=R1(N.reflinkSearch,"g").replace("reflink",N.reflink).replace("nolink",N.nolink).getRegex();N.normal=v2({},N);N.pedantic=v2({},N.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:R1(/^!?\[(label)\]\((.*?)\)/).replace("label",N._label).getRegex(),reflink:R1(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",N._label).getRegex()});N.gfm=v2({},N.normal,{escape:R1(N.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});N.gfm.url=R1(N.gfm.url,"i").replace("email",N.gfm._extended_email).getRegex();N.breaks=v2({},N.gfm,{br:R1(N.br).replace("{2,}","*").getRegex(),text:R1(N.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function y5(e){return e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function C4(e){let t="",n,l;const i=e.length;for(n=0;n<i;n++)l=e.charCodeAt(n),Math.random()>.5&&(l="x"+l.toString(16)),t+="&#"+l+";";return t}class H2{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||z3,this.options.tokenizer=this.options.tokenizer||new i0,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:r1.normal,inline:N.normal};this.options.pedantic?(n.block=r1.pedantic,n.inline=N.pedantic):this.options.gfm&&(n.block=r1.gfm,this.options.breaks?n.inline=N.breaks:n.inline=N.gfm),this.tokenizer.rules=n}static get rules(){return{block:r1,inline:N}}static lex(t,n){return new H2(n).lex(t)}static lexInline(t,n){return new H2(n).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(t,n=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(w,_,p)=>_+"    ".repeat(p.length));let l,i,a,d;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(w=>(l=w.call({lexer:this},t,n))?(t=t.substring(l.raw.length),n.push(l),!0):!1))){if(l=this.tokenizer.space(t)){t=t.substring(l.raw.length),l.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(l);continue}if(l=this.tokenizer.code(t)){t=t.substring(l.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+l.raw,i.text+=`
`+l.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(l);continue}if(l=this.tokenizer.fences(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.heading(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.hr(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.blockquote(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.list(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.html(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.def(t)){t=t.substring(l.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+l.raw,i.text+=`
`+l.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.lheading(t)){t=t.substring(l.raw.length),n.push(l);continue}if(a=t,this.options.extensions&&this.options.extensions.startBlock){let w=1/0;const _=t.slice(1);let p;this.options.extensions.startBlock.forEach(function(v){p=v.call({lexer:this},_),typeof p=="number"&&p>=0&&(w=Math.min(w,p))}),w<1/0&&w>=0&&(a=t.substring(0,w+1))}if(this.state.top&&(l=this.tokenizer.paragraph(a))){i=n[n.length-1],d&&i.type==="paragraph"?(i.raw+=`
`+l.raw,i.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(l),d=a.length!==t.length,t=t.substring(l.raw.length);continue}if(l=this.tokenizer.text(t)){t=t.substring(l.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+l.raw,i.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(l);continue}if(t){const w="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(w);break}else throw new Error(w)}}return this.state.top=!0,n}inline(t,n){this.inlineQueue.push({src:t,tokens:n})}inlineTokens(t,n=[]){let l,i,a,d=t,w,_,p;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(w=this.tokenizer.rules.inline.reflinkSearch.exec(d))!=null;)v.includes(w[0].slice(w[0].lastIndexOf("[")+1,-1))&&(d=d.slice(0,w.index)+"["+$4("a",w[0].length-2)+"]"+d.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(w=this.tokenizer.rules.inline.blockSkip.exec(d))!=null;)d=d.slice(0,w.index)+"["+$4("a",w[0].length-2)+"]"+d.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(w=this.tokenizer.rules.inline.escapedEmSt.exec(d))!=null;)d=d.slice(0,w.index)+"++"+d.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;t;)if(_||(p=""),_=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>(l=v.call({lexer:this},t,n))?(t=t.substring(l.raw.length),n.push(l),!0):!1))){if(l=this.tokenizer.escape(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.tag(t)){t=t.substring(l.raw.length),i=n[n.length-1],i&&l.type==="text"&&i.type==="text"?(i.raw+=l.raw,i.text+=l.text):n.push(l);continue}if(l=this.tokenizer.link(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(l.raw.length),i=n[n.length-1],i&&l.type==="text"&&i.type==="text"?(i.raw+=l.raw,i.text+=l.text):n.push(l);continue}if(l=this.tokenizer.emStrong(t,d,p)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.codespan(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.br(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.del(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.autolink(t,C4)){t=t.substring(l.raw.length),n.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(t,C4))){t=t.substring(l.raw.length),n.push(l);continue}if(a=t,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const g=t.slice(1);let u;this.options.extensions.startInline.forEach(function(x){u=x.call({lexer:this},g),typeof u=="number"&&u>=0&&(v=Math.min(v,u))}),v<1/0&&v>=0&&(a=t.substring(0,v+1))}if(l=this.tokenizer.inlineText(a,y5)){t=t.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(p=l.raw.slice(-1)),_=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=l.raw,i.text+=l.text):n.push(l);continue}if(t){const v="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return n}}class a0{constructor(t){this.options=t||z3}code(t,n,l){const i=(n||"").match(/\S*/)[0];if(this.options.highlight){const a=this.options.highlight(t,i);a!=null&&a!==t&&(l=!0,t=a)}return t=t.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+O1(i,!0)+'">'+(l?t:O1(t,!0))+`</code></pre>
`:"<pre><code>"+(l?t:O1(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t){return t}heading(t,n,l,i){if(this.options.headerIds){const a=this.options.headerPrefix+i.slug(l);return`<h${n} id="${a}">${t}</h${n}>
`}return`<h${n}>${t}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,n,l){const i=n?"ol":"ul",a=n&&l!==1?' start="'+l+'"':"";return"<"+i+a+`>
`+t+"</"+i+`>
`}listitem(t){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return`<p>${t}</p>
`}table(t,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+n+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,n){const l=n.header?"th":"td";return(n.align?`<${l} align="${n.align}">`:`<${l}>`)+t+`</${l}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return`<del>${t}</del>`}link(t,n,l){if(t=k4(this.options.sanitize,this.options.baseUrl,t),t===null)return l;let i='<a href="'+O1(t)+'"';return n&&(i+=' title="'+n+'"'),i+=">"+l+"</a>",i}image(t,n,l){if(t=k4(this.options.sanitize,this.options.baseUrl,t),t===null)return l;let i=`<img src="${t}" alt="${l}"`;return n&&(i+=` title="${n}"`),i+=this.options.xhtml?"/>":">",i}text(t){return t}}class Vr{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,n,l){return""+l}image(t,n,l){return""+l}br(){return""}}class Sr{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,n){let l=t,i=0;if(this.seen.hasOwnProperty(l)){i=this.seen[t];do i++,l=t+"-"+i;while(this.seen.hasOwnProperty(l))}return n||(this.seen[t]=i,this.seen[l]=0),l}slug(t,n={}){const l=this.serialize(t);return this.getNextSafeSlug(l,n.dryrun)}}class b2{constructor(t){this.options=t||z3,this.options.renderer=this.options.renderer||new a0,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Vr,this.slugger=new Sr}static parse(t,n){return new b2(n).parse(t)}static parseInline(t,n){return new b2(n).parseInline(t)}parse(t,n=!0){let l="",i,a,d,w,_,p,v,g,u,x,k,C,B,f,M,b,y,A,I;const K=t.length;for(i=0;i<K;i++){if(x=t[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[x.type]&&(I=this.options.extensions.renderers[x.type].call({parser:this},x),I!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(x.type))){l+=I||"";continue}switch(x.type){case"space":continue;case"hr":{l+=this.renderer.hr();continue}case"heading":{l+=this.renderer.heading(this.parseInline(x.tokens),x.depth,br(this.parseInline(x.tokens,this.textRenderer)),this.slugger);continue}case"code":{l+=this.renderer.code(x.text,x.lang,x.escaped);continue}case"table":{for(g="",v="",w=x.header.length,a=0;a<w;a++)v+=this.renderer.tablecell(this.parseInline(x.header[a].tokens),{header:!0,align:x.align[a]});for(g+=this.renderer.tablerow(v),u="",w=x.rows.length,a=0;a<w;a++){for(p=x.rows[a],v="",_=p.length,d=0;d<_;d++)v+=this.renderer.tablecell(this.parseInline(p[d].tokens),{header:!1,align:x.align[d]});u+=this.renderer.tablerow(v)}l+=this.renderer.table(g,u);continue}case"blockquote":{u=this.parse(x.tokens),l+=this.renderer.blockquote(u);continue}case"list":{for(k=x.ordered,C=x.start,B=x.loose,w=x.items.length,u="",a=0;a<w;a++)M=x.items[a],b=M.checked,y=M.task,f="",M.task&&(A=this.renderer.checkbox(b),B?M.tokens.length>0&&M.tokens[0].type==="paragraph"?(M.tokens[0].text=A+" "+M.tokens[0].text,M.tokens[0].tokens&&M.tokens[0].tokens.length>0&&M.tokens[0].tokens[0].type==="text"&&(M.tokens[0].tokens[0].text=A+" "+M.tokens[0].tokens[0].text)):M.tokens.unshift({type:"text",text:A}):f+=A),f+=this.parse(M.tokens,B),u+=this.renderer.listitem(f,y,b);l+=this.renderer.list(u,k,C);continue}case"html":{l+=this.renderer.html(x.text);continue}case"paragraph":{l+=this.renderer.paragraph(this.parseInline(x.tokens));continue}case"text":{for(u=x.tokens?this.parseInline(x.tokens):x.text;i+1<K&&t[i+1].type==="text";)x=t[++i],u+=`
`+(x.tokens?this.parseInline(x.tokens):x.text);l+=n?this.renderer.paragraph(u):u;continue}default:{const T='Token with "'+x.type+'" type was not found.';if(this.options.silent){console.error(T);return}else throw new Error(T)}}}return l}parseInline(t,n){n=n||this.renderer;let l="",i,a,d;const w=t.length;for(i=0;i<w;i++){if(a=t[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(d=this.options.extensions.renderers[a.type].call({parser:this},a),d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type))){l+=d||"";continue}switch(a.type){case"escape":{l+=n.text(a.text);break}case"html":{l+=n.html(a.text);break}case"link":{l+=n.link(a.href,a.title,this.parseInline(a.tokens,n));break}case"image":{l+=n.image(a.href,a.title,a.text);break}case"strong":{l+=n.strong(this.parseInline(a.tokens,n));break}case"em":{l+=n.em(this.parseInline(a.tokens,n));break}case"codespan":{l+=n.codespan(a.text);break}case"br":{l+=n.br();break}case"del":{l+=n.del(this.parseInline(a.tokens,n));break}case"text":{l+=n.text(a.text);break}default:{const _='Token with "'+a.type+'" type was not found.';if(this.options.silent){console.error(_);return}else throw new Error(_)}}}return l}}function o1(e,t,n){if(typeof e=="undefined"||e===null)throw new Error("marked(): input parameter is undefined or null");if(typeof e!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(typeof t=="function"&&(n=t,t=null),t=v2({},o1.defaults,t||{}),Lr(t),n){const l=t.highlight;let i;try{i=H2.lex(e,t)}catch(w){return n(w)}const a=function(w){let _;if(!w)try{t.walkTokens&&o1.walkTokens(i,t.walkTokens),_=b2.parse(i,t)}catch(p){w=p}return t.highlight=l,w?n(w):n(null,_)};if(!l||l.length<3||(delete t.highlight,!i.length))return a();let d=0;o1.walkTokens(i,function(w){w.type==="code"&&(d++,setTimeout(()=>{l(w.text,w.lang,function(_,p){if(_)return a(_);p!=null&&p!==w.text&&(w.text=p,w.escaped=!0),d--,d===0&&a()})},0))}),d===0&&a();return}try{const l=H2.lex(e,t);return t.walkTokens&&o1.walkTokens(l,t.walkTokens),b2.parse(l,t)}catch(l){if(l.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+O1(l.message+"",!0)+"</pre>";throw l}}o1.options=o1.setOptions=function(e){return v2(o1.defaults,e),d5(o1.defaults),o1};o1.getDefaults=Hr;o1.defaults=z3;o1.use=function(...e){const t=v2({},...e),n=o1.defaults.extensions||{renderers:{},childTokens:{}};let l;e.forEach(i=>{if(i.extensions&&(l=!0,i.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if(a.renderer){const d=n.renderers?n.renderers[a.name]:null;d?n.renderers[a.name]=function(...w){let _=a.renderer.apply(this,w);return _===!1&&(_=d.apply(this,w)),_}:n.renderers[a.name]=a.renderer}if(a.tokenizer){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[a.level]?n[a.level].unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}a.childTokens&&(n.childTokens[a.name]=a.childTokens)})),i.renderer){const a=o1.defaults.renderer||new a0;for(const d in i.renderer){const w=a[d];a[d]=(..._)=>{let p=i.renderer[d].apply(a,_);return p===!1&&(p=w.apply(a,_)),p}}t.renderer=a}if(i.tokenizer){const a=o1.defaults.tokenizer||new i0;for(const d in i.tokenizer){const w=a[d];a[d]=(..._)=>{let p=i.tokenizer[d].apply(a,_);return p===!1&&(p=w.apply(a,_)),p}}t.tokenizer=a}if(i.walkTokens){const a=o1.defaults.walkTokens;t.walkTokens=function(d){i.walkTokens.call(this,d),a&&a.call(this,d)}}l&&(t.extensions=n),o1.setOptions(t)})};o1.walkTokens=function(e,t){for(const n of e)switch(t.call(o1,n),n.type){case"table":{for(const l of n.header)o1.walkTokens(l.tokens,t);for(const l of n.rows)for(const i of l)o1.walkTokens(i.tokens,t);break}case"list":{o1.walkTokens(n.items,t);break}default:o1.defaults.extensions&&o1.defaults.extensions.childTokens&&o1.defaults.extensions.childTokens[n.type]?o1.defaults.extensions.childTokens[n.type].forEach(function(l){o1.walkTokens(n[l],t)}):n.tokens&&o1.walkTokens(n.tokens,t)}};o1.parseInline=function(e,t){if(typeof e=="undefined"||e===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof e!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=v2({},o1.defaults,t||{}),Lr(t);try{const n=H2.lexInline(e,t);return t.walkTokens&&o1.walkTokens(n,t.walkTokens),b2.parseInline(n,t)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+O1(n.message+"",!0)+"</pre>";throw n}};o1.Parser=b2;o1.parser=b2.parse;o1.Renderer=a0;o1.TextRenderer=Vr;o1.Lexer=H2;o1.lexer=H2.lex;o1.Tokenizer=i0;o1.Slugger=Sr;o1.parse=o1;o1.options;o1.setOptions;o1.use;o1.walkTokens;o1.parseInline;b2.parse;H2.lex;function O3(e){return!!v6()&&(u6(e),!0)}var z4;const Y3=typeof window!="undefined",st=()=>{};function Ar(e,t){return function(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}}Y3&&((z4=window==null?void 0:window.navigator)==null?void 0:z4.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const jr=e=>e();function H5(e,t=200,n={}){return Ar(function(l,i={}){let a,d;return w=>{const _=N1(l),p=N1(i.maxWait);if(a&&clearTimeout(a),_<=0||p!==void 0&&p<=0)return d&&(clearTimeout(d),d=null),w();p&&!d&&(d=setTimeout(()=>{a&&clearTimeout(a),d=null,w()},p)),a=setTimeout(()=>{d&&clearTimeout(d),d=null,w()},_)}}(t,n),e)}var B4=Object.getOwnPropertySymbols,b5=Object.prototype.hasOwnProperty,L5=Object.prototype.propertyIsEnumerable;function V5(e,t,n={}){const l=n,{eventFilter:i=jr}=l,a=((d,w)=>{var _={};for(var p in d)b5.call(d,p)&&w.indexOf(p)<0&&(_[p]=d[p]);if(d!=null&&B4)for(var p of B4(d))w.indexOf(p)<0&&L5.call(d,p)&&(_[p]=d[p]);return _})(l,["eventFilter"]);return W1(e,Ar(i,t),a)}var S5=Object.defineProperty,A5=Object.defineProperties,j5=Object.getOwnPropertyDescriptors,xe=Object.getOwnPropertySymbols,y4=Object.prototype.hasOwnProperty,H4=Object.prototype.propertyIsEnumerable,b4=(e,t,n)=>t in e?S5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function R5(e,t,n={}){const l=n,{eventFilter:i}=l,a=((u,x)=>{var k={};for(var C in u)y4.call(u,C)&&x.indexOf(C)<0&&(k[C]=u[C]);if(u!=null&&xe)for(var C of xe(u))x.indexOf(C)<0&&H4.call(u,C)&&(k[C]=u[C]);return k})(l,["eventFilter"]),{eventFilter:d,pause:w,resume:_,isActive:p}=function(u=jr){const x=Y(!0);return{isActive:x,pause:function(){x.value=!1},resume:function(){x.value=!0},eventFilter:(...k)=>{x.value&&u(...k)}}}(i),v=V5(e,t,(g=((u,x)=>{for(var k in x||(x={}))y4.call(x,k)&&b4(u,k,x[k]);if(xe)for(var k of xe(x))H4.call(x,k)&&b4(u,k,x[k]);return u})({},a),A5(g,j5({eventFilter:d}))));var g;return{stop:v,pause:w,resume:_,isActive:p}}const Se=Y3?window:void 0,T5=Y3?window.document:void 0;function E5(...e){let t,n,l,i;if(typeof e[0]=="string"?([n,l,i]=e,t=Se):[t,n,l,i]=e,!t)return st;let a=st;const d=W1(()=>function(_){var p;const v=N1(_);return(p=v==null?void 0:v.$el)!=null?p:v}(t),_=>{a(),_&&(_.addEventListener(n,l,i),a=()=>{_.removeEventListener(n,l,i),a=st})},{immediate:!0,flush:"post"}),w=()=>{d(),a()};return O3(w),w}const Tt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Et="__vueuse_ssr_handlers__";Tt[Et]=Tt[Et]||{};const P5=Tt[Et],D5={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function ee(e,t,n,l={}){var i;const{flush:a="pre",deep:d=!0,listenToStorageChanges:w=!0,writeDefaults:_=!0,shallow:p,window:v=Se,eventFilter:g,onError:u=y=>{console.error(y)}}=l,x=(p?mn:Y)(t);if(!n)try{n=function(y,A){return P5[y]||A}("getDefaultStorage",()=>{var y;return(y=Se)==null?void 0:y.localStorage})()}catch(y){u(y)}if(!n)return x;const k=N1(t),C=function(y){return y==null?"any":y instanceof Set?"set":y instanceof Map?"map":y instanceof Date?"date":typeof y=="boolean"?"boolean":typeof y=="string"?"string":typeof y=="object"||Array.isArray(y)?"object":Number.isNaN(y)?"any":"number"}(k),B=(i=l.serializer)!=null?i:D5[C],{pause:f,resume:M}=R5(x,()=>function(y){try{y==null?n.removeItem(e):n.setItem(e,B.write(y))}catch(A){u(A)}}(x.value),{flush:a,deep:d,eventFilter:g});return v&&w&&E5(v,"storage",b),b(),x;function b(y){y&&y.key!==e||(x.value=function(A){if(!A||A.key===e){f();try{const I=A?A.newValue:n.getItem(e);return I==null?(_&&k!==null&&n.setItem(e,B.write(k)),k):typeof I!="string"?I:B.read(I)}catch(I){u(I)}finally{M()}}}(y))}}var L4,V3,F5=Object.defineProperty,V4=Object.getOwnPropertySymbols,I5=Object.prototype.hasOwnProperty,q5=Object.prototype.propertyIsEnumerable,S4=(e,t,n)=>t in e?F5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function O5(e={}){const{controls:t=!1,interval:n="requestAnimationFrame"}=e,l=Y(new Date),i=()=>l.value=new Date,a=n==="requestAnimationFrame"?function(d,w={}){const{immediate:_=!0,window:p=Se}=w,v=Y(!1);let g=null;function u(){v.value&&p&&(d(),g=p.requestAnimationFrame(u))}function x(){!v.value&&p&&(v.value=!0,u())}function k(){v.value=!1,g!=null&&p&&(p.cancelAnimationFrame(g),g=null)}return _&&x(),O3(k),{isActive:v,pause:k,resume:x}}(i,{immediate:!0}):function(d,w=1e3,_={}){const{immediate:p=!0,immediateCallback:v=!1}=_;let g=null;const u=Y(!1);function x(){g&&(clearInterval(g),g=null)}function k(){u.value=!1,x()}function C(){N1(w)<=0||(u.value=!0,v&&d(),x(),g=setInterval(d,N1(w)))}return p&&Y3&&C(),U1(w)&&O3(W1(w,()=>{p&&Y3&&C()})),O3(k),{isActive:u,pause:k,resume:C}}(i,n,{immediate:!0});return t?((d,w)=>{for(var _ in w||(w={}))I5.call(w,_)&&S4(d,_,w[_]);if(V4)for(var _ of V4(w))q5.call(w,_)&&S4(d,_,w[_]);return d})({now:l},a):l}(V3=L4||(L4={})).UP="UP",V3.RIGHT="RIGHT",V3.DOWN="DOWN",V3.LEFT="LEFT",V3.NONE="NONE";let G5=0;const h0=({size:e})=>G("svg",{width:e,height:e,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},G("circle",{cx:50,cy:50,fill:"none",stroke:"currentColor",strokeWidth:"4",r:"40","stroke-dasharray":"85 30"},G("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})));var Je=(e,t)=>{const n=e.__vccOpts||e;for(const[l,i]of t)n[l]=i;return n};const N5=s({name:"ImageWall",components:{LoadingIcon:h0},props:{items:{type:Array,default:()=>[]},columnWidth:{type:Number,default:300},gap:{type:Number,default:0}},emit:["insert"],setup(e){let t=null;const n=Y(null),l=Y({}),i=Y([]),a=()=>{const _=Math.floor((n.value.getBoundingClientRect().width+e.gap)/(e.columnWidth+e.gap));return _>0?_:1},d=async _=>{var v;if(_>=e.items.length)return;await Qt();const p=Array.from(((v=n.value)==null?void 0:v.children)||[]).reduce((g,u)=>u.getBoundingClientRect().height<g.getBoundingClientRect().height?u:g);i.value[Number(p.dataset.index)].push(_),await d(_+1)},w=async(_=!1)=>{if(i.value.length===a()&&!_)return;var p;i.value=(p=a(),new Array(p).fill(null).map(()=>[]));const v=window.scrollY;await d(0),window.scrollTo({top:v})};return W1(()=>[e.items],()=>{l.value={},w(!0)}),W1(()=>[e.columnWidth,e.gap],()=>w()),r2(()=>{w(!0),t=new ResizeObserver(()=>w()),t.observe(n.value)}),oe(()=>t.unobserve(n.value)),{columns:i,state:l,wall:n}}}),U5=["data-index"],W5=["src","title","onLoad","onClick"];var J5=Je(N5,[["render",function(e,t,n,l,i,a){const d=F1("LoadingIcon");return c(),o("div",{ref:"wall",class:"wl-gallery",style:B2({gap:`${e.gap}px`})},[(c(!0),o(L1,null,z2(e.columns,(w,_)=>(c(),o("div",{key:_,class:"wl-gallery-column","data-index":_,style:B2({gap:`${e.gap}px`})},[(c(!0),o(L1,null,z2(w,p=>(c(),o(L1,{key:p},[e.state[e.items[p].src]?p1("v-if",!0):(c(),m2(d,{key:0,size:36,style:{margin:"20px auto"}})),r("img",{class:"wl-gallery-item",src:e.items[p].src,title:e.items[p].title,loading:"lazy",onLoad:v=>e.state[e.items[p].src]=!0,onClick:v=>e.$emit("insert",`![](${e.items[p].src})`)},null,40,W5)],64))),128))],12,U5))),128))],4)}],["__file","ImageWall.vue"]]);const K5=["nick","mail","link"],A4=e=>e.filter(t=>K5.includes(t)),Z5=e=>new Promise((t,n)=>{const l=new FileReader;l.readAsDataURL(e),l.onload=()=>{var i;return t(((i=l.result)==null?void 0:i.toString())||"")},l.onerror=n}),X5=e=>e===!0?'<p class="wl-tex">Tex is not available in preview</p>':'<span class="wl-tex">Tex is not available in preview</span>',Q5=()=>{const e={next:""},t=({keyword:n,pos:l})=>{const i=new URLSearchParams("media_filter=minimal");return i.set("key","PAY5JLFIH6V6"),i.set("limit","20"),i.set("pos",l||""),i.set("q",n),fetch(`https://g.tenor.com/v1/search?${i.toString()}`,{headers:{"Content-Type":"application/json"}}).then(a=>a.json()).catch(()=>({next:l||"",results:[]}))};return{search:(n="")=>t({keyword:n}).then(l=>(e.next=l.next,l.results.map(i=>({title:i.title,src:i.media[0].tinygif.url})))),more:n=>t({keyword:n,pos:e.next}).then(l=>(e.next=l.next,l.results.map(i=>({title:i.title,src:i.media[0].tinygif.url}))))}},Y5=new RegExp(`(${/[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source}|${/</.source})|((?:${/(?:^|\s)\/\/(.+?)$/gm.source})|(?:${/\/\*([\S\s]*?)\*\//gm.source}))`,"gmi"),j4=["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"],lt={},es=e=>{let t=0;return e.replace(Y5,(n,l,i)=>{if(i)return`<span style="color: slategray">${i}</span>`;if(l==="<")return"&lt;";let a;lt[l]?a=lt[l]:(a=j4[t],lt[l]=a);const d=`<span style="color: #${a}">${l}</span>`;return t=++t%j4.length,d})},ts=["nick","nickError","mail","mailError","link","optional","placeholder","sofa","submit","like","cancelLike","reply","cancelReply","comment","refresh","more","preview","emoji","uploadImage","seconds","minutes","hours","days","now","uploading","login","logout","admin","sticky","word","wordHint","anonymous","level0","level1","level2","level3","level4","level5","gif","gifSearchPlaceholder"],B3=e=>Object.fromEntries(e.map((t,n)=>[ts[n],t]));var it=B3(["NickName","NickName cannot be less than 3 bytes.","E-Mail","Please confirm your email address.","Website","Optional","Comment here...","No comment yet.","Submit","Like","Cancel like","Reply","Cancel reply","Comments","Refresh","Load More...","Preview","Emoji","Upload Image","seconds ago","minutes ago","hours ago","days ago","just now","Uploading","Login","logout","Admin","Sticky","Words",`Please input comments between $0 and $1 words!
 Current word number: $2`,"Anonymous","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Search GIF"]),at=B3(["\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0","3\u30D0\u30A4\u30C8\u4EE5\u4E0A\u306E\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\u3092\u3054\u5165\u529B\u304F\u3060\u3055\u3044.","\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9","\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044.","\u30B5\u30A4\u30C8","\u30AA\u30D7\u30B7\u30E7\u30F3","\u3053\u3053\u306B\u30B3\u30E1\u30F3\u30C8","\u30B3\u30E1\u30F3\u30C8\u3057\u307E\u3057\u3087\u3046~","\u63D0\u51FA\u3059\u308B","Like","Cancel like","\u8FD4\u4FE1\u3059\u308B","\u30AD\u30E3\u30F3\u30BB\u30EB","\u30B3\u30E1\u30F3\u30C8","\u66F4\u65B0","\u3055\u3089\u306B\u8AAD\u307F\u8FBC\u3080","\u30D7\u30EC\u30D3\u30E5\u30FC","\u7D75\u6587\u5B57","\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9","\u79D2\u524D","\u5206\u524D","\u6642\u9593\u524D","\u65E5\u524D","\u305F\u3063\u3060\u4ECA","\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9","\u30ED\u30B0\u30A4\u30F3\u3059\u308B","\u30ED\u30B0\u30A2\u30A6\u30C8","\u7BA1\u7406\u8005","\u30C8\u30C3\u30D7\u306B\u7F6E\u304F","\u30EF\u30FC\u30C9",`\u30B3\u30E1\u30F3\u30C8\u306F $0 \u304B\u3089 $1 \u30EF\u30FC\u30C9\u306E\u9593\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093!
 \u73FE\u5728\u306E\u5358\u8A9E\u756A\u53F7: $2`,"\u533F\u540D","\u3046\u3048\u306B\u3093","\u306A\u304B\u306B\u3093","\u3057\u3082\u304A\u3057","\u7279\u306B\u3057\u3082\u304A\u3057","\u304B\u3052","\u306A\u306C\u3057","GIF","\u63A2\u3059 GIF"]),ht=B3(["\u6635\u79F0","\u6635\u79F0\u4E0D\u80FD\u5C11\u4E8E3\u4E2A\u5B57\u7B26","\u90AE\u7BB1","\u8BF7\u586B\u5199\u6B63\u786E\u7684\u90AE\u4EF6\u5730\u5740","\u7F51\u5740","\u53EF\u9009","\u6B22\u8FCE\u8BC4\u8BBA","\u6765\u53D1\u8BC4\u8BBA\u5427~","\u63D0\u4EA4","\u559C\u6B22","\u53D6\u6D88\u559C\u6B22","\u56DE\u590D","\u53D6\u6D88\u56DE\u590D","\u8BC4\u8BBA","\u5237\u65B0","\u52A0\u8F7D\u66F4\u591A...","\u9884\u89C8","\u8868\u60C5","\u4E0A\u4F20\u56FE\u7247","\u79D2\u524D","\u5206\u949F\u524D","\u5C0F\u65F6\u524D","\u5929\u524D","\u521A\u521A","\u6B63\u5728\u4E0A\u4F20","\u767B\u5F55","\u9000\u51FA","\u535A\u4E3B","\u7F6E\u9876","\u5B57",`\u8BC4\u8BBA\u5B57\u6570\u5E94\u5728 $0 \u5230 $1 \u5B57\u4E4B\u95F4\uFF01
\u5F53\u524D\u5B57\u6570\uFF1A$2`,"\u533F\u540D","\u6F5C\u6C34","\u5192\u6CE1","\u5410\u69FD","\u6D3B\u8DC3","\u8BDD\u75E8","\u4F20\u8BF4","\u8868\u60C5\u5305","\u641C\u7D22\u8868\u60C5\u5305"]),R4=B3(["\u66B1\u7A31","\u90F5\u7BB1","\u7DB2\u5740","\u53EF\u9078","\u66B1\u7A31\u4E0D\u80FD\u5C11\u65BC3\u500B\u5B57\u5143","\u8ACB\u586B\u5BEB\u6B63\u78BA\u7684\u90F5\u4EF6\u5730\u5740","\u6B61\u8FCE\u8A55\u8AD6","\u4F86\u767C\u8A55\u8AD6\u5427~","\u63D0\u4EA4","\u559C\u6B61","\u53D6\u6D88\u559C\u6B61","\u56DE\u8986","\u53D6\u6D88\u56DE\u8986","\u8A55\u8AD6","\u5237\u65B0","\u8F09\u5165\u66F4\u591A...","\u9810\u89BD","\u8868\u60C5","\u4E0A\u50B3\u5716\u7247","\u79D2\u524D","\u5206\u9418\u524D","\u5C0F\u6642\u524D","\u5929\u524D","\u525B\u525B","\u6B63\u5728\u4E0A\u50B3","\u767B\u9304","\u9000\u51FA","\u535A\u4E3B","\u7F6E\u9802","\u5B57",`\u8A55\u8AD6\u5B57\u6578\u61C9\u5728 $0 \u5230 $1 \u5B57\u4E4B\u9593\uFF01
\u7576\u524D\u5B57\u6578\uFF1A$2`,"\u533F\u540D","\u6F5B\u6C34","\u5192\u6CE1","\u5410\u69FD","\u6D3B\u8E8D","\u8A71\u7646","\u50B3\u8AAA","\u8868\u60C5\u5305","\u641C\u7D22\u8868\u60C5\u5305"]),T4=B3(["Apelido","Apelido n\xE3o pode ser menor que 3 bytes.","E-Mail","Por favor, confirme seu endere\xE7o de e-mail.","Website","Opcional","Comente aqui...","Nenhum coment\xE1rio, ainda.","Enviar","Like","Cancel like","Responder","Cancelar resposta","Coment\xE1rios","Refrescar","Carregar Mais...","Visualizar","Emoji","Enviar Imagem","segundos atr\xE1s","minutos atr\xE1s","horas atr\xE1s","dias atr\xE1s","agora mesmo","Enviando","Entrar","Sair","Admin","Sticky","Palavras",`Favor enviar coment\xE1rio com $0 a $1 palavras!
 N\xFAmero de palavras atuais: $2`,"An\xF4nimo","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Pesquisar GIF"]),dt=B3(["\u041F\u0441\u0435\u0432\u0434\u043E\u043D\u0438\u043C","\u041D\u0438\u043A\u043D\u0435\u0439\u043C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 3 \u0431\u0430\u0439\u0442.","\u042D\u043B. \u0430\u0434\u0440\u0435\u0441","\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0432\u0430\u0448\u0435\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B.","\u0412\u0435\u0431-\u0441\u0430\u0439\u0442","\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439","\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0437\u0434\u0435\u0441\u044C...","\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432.","\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","Like","Cancel like","\u041E\u0442\u0432\u0435\u0447\u0430\u0442\u044C","\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442","\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438","\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C","\u0417\u0430\u0433\u0440\u0443\u0437\u0438 \u0431\u043E\u043B\u044C\u0448\u0435...","\u041F\u0440\u0435\u0432\u044C\u044E","\u044D\u043C\u043E\u0434\u0437\u0438","\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435","\u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434","\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434","\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0447\u0430\u0441\u043E\u0432 \u043D\u0430\u0437\u0430\u0434","\u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434","\u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441","\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430","\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F","\u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043C\u044B","\u0410\u0434\u043C\u0438\u043D","\u041B\u0438\u043F\u043A\u0438\u0439","\u0421\u043B\u043E\u0432\u0430",`\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u043E\u0442 $0 \u0434\u043E $1 \u0441\u043B\u043E\u0432!
\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0441\u043B\u043E\u0432\u0430: $2`,"\u0410\u043D\u043E\u043D\u0438\u043C\u043D\u044B\u0439","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","\u041F\u043E\u0438\u0441\u043A GIF"]);const E4={zh:ht,"zh-cn":ht,"zh-CN":ht,"zh-tw":R4,"zh-TW":R4,en:it,"en-US":it,"en-us":it,jp:at,"jp-jp":at,"jp-JP":at,"pt-br":T4,"pt-BR":T4,ru:dt,"ru-ru":dt,"ru-RU":dt},ns=e=>{try{e=decodeURI(e)}catch{}return e},Rr=(e="")=>e.replace(/\/$/u,""),Tr=e=>/^(https?:)?\/\//.test(e),rs=e=>{const t=Rr(e);return Tr(t)?t:`https://${t}`},cs=e=>Array.isArray(e)?e:!!e&&[0,e],wt=(e,t)=>typeof e=="function"?e:e!==!1&&t,_t="{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bgcolor:#1e1e1e;--waline-bgcolor-light:#272727;--waline-bgcolor-hover: #444;--waline-border-color:#333;--waline-disable-bgcolor:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bgcolor:#272727;--waline-info-color:#666}",pt=(e,t)=>{let n=e.toString();for(;n.length<t;)n="0"+n;return n},os=(e,t,n)=>{if(!e)return"";const l=typeof e=="string"?new Date(e.indexOf(" ")!==-1?e.replace(/-/g,"/"):e):e,i=t.getTime()-l.getTime(),a=Math.floor(i/864e5);if(a===0){const d=i%864e5,w=Math.floor(d/36e5);if(w===0){const _=d%36e5,p=Math.floor(_/6e4);if(p===0){const v=_%6e4;return`${Math.round(v/1e3)} ${n.seconds}`}return`${p} ${n.minutes}`}return`${w} ${n.hours}`}return a<0?n.now:a<8?`${a} ${n.days}`:(d=>{const w=pt(d.getDate(),2),_=pt(d.getMonth()+1,2);return`${pt(d.getFullYear(),2)}-${_}-${w}`})(l)},ss=e=>{const t=ee("WALINE_EMOJI",{}),n=Boolean(/@[0-9]+\.[0-9]+\.[0-9]+/.test(e));if(n){const l=t.value[e];if(l)return Promise.resolve(l)}return fetch(`${e}/info.json`).then(l=>l.json()).then(l=>{const i={folder:e,...l};return n&&(t.value[e]=i),i})},P4=(e,t="",n="",l="")=>`${t?`${t}/`:""}${n}${e}${l?`.${l}`:""}`,ls={"Content-Type":"application/json"},is=({serverURL:e,lang:t,path:n,page:l,pageSize:i,signal:a,token:d})=>{const w={};return d&&(w.Authorization=`Bearer ${d}`),fetch(`${e}/comment?path=${encodeURIComponent(n)}&pageSize=${i}&page=${l}&lang=${t}`,{signal:a,headers:w}).then(_=>_.json()).then(_=>((p,v="")=>{if(typeof p=="object"&&p.errno)throw new TypeError(`Fetch ${v} failed with ${p.errno}: ${p.errmsg}`);return p})(_,"comment list"))},D4=({serverURL:e,lang:t,token:n,objectId:l,...i})=>fetch(`${e}/comment/${l}?lang=${t}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(i)}).then(a=>a.json()),as=e=>e.type.includes("image"),F4=e=>{const t=Array.from(e).find(as);return t?t.getAsFile():null},hs=/\$.*?\$/,ds=/^\$(.*?)\$/,ws=/^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,Er=(e="",t={})=>e.replace(/:(.+?):/g,(n,l)=>t[l]?`<img class="wl-emoji" src="${t[l]}" alt="${l}">`:n),_s=(e,{emojiMap:t,highlighter:n,texRenderer:l})=>{if(o1.setOptions({highlight:n||void 0,breaks:!0,smartLists:!0,smartypants:!0}),l){const i=(a=>[{name:"blockMath",level:"block",tokenizer(d){const w=ws.exec(d);if(w!==null)return{type:"html",raw:w[0],text:a(!0,w[1])}}},{name:"inlineMath",level:"inline",start(d){const w=d.search(hs);return w!==-1?w:d.length},tokenizer(d){const w=ds.exec(d);if(w!==null)return{type:"html",raw:w[0],text:a(!1,w[1])}}}])(l);o1.use({extensions:i})}return o1.parse(Er(e,t))};let I4=null;const d0=()=>I4||(I4=ee("USER_KEY",{}));let q4=null;const Pr=()=>q4||(q4=ee("WALINE_LIKE",[])),ps=s({name:"CommentBox",components:{CloseIcon:({size:e})=>G("svg",{class:"wl-close-icon",viewBox:"0 0 1024 1024",width:e,height:e},[G("path",{d:"M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z",fill:"currentColor"}),G("path",{d:"m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z",fill:"#888"})]),EmojiIcon:()=>G("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},G("path",{d:"M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z",fill:"currentColor"})),ImageIcon:()=>G("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[G("path",{d:"M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z",fill:"currentColor"}),G("path",{d:"M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z",fill:"currentColor"})]),ImageWall:J5,MarkdownIcon:()=>G("svg",{width:"16",height:"16",ariaHidden:"true"},G("path",{d:"M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z",fill:"currentColor"})),PreviewIcon:()=>G("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[G("path",{d:"M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0",fill:"currentColor"}),G("path",{d:"M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0",fill:"currentColor"})]),LoadingIcon:h0,GifIcon:()=>G("svg",{width:24,height:24,fill:"currentcolor",viewBox:"0 0 24 24"},[G("path",{style:"transform: translateY(0.5px)",d:"M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z"}),G("path",{d:"M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z"})])},props:{rootId:{type:String,default:""},replyId:{type:String,default:""},replyUser:{type:String,default:""}},emits:["submit","cancel-reply"],setup(e,{emit:t}){const n=E1("config"),l=ee("WALINE_COMMENT_BOX_EDITOR",""),i=ee("WALINE_USER_META",{nick:"",mail:"",link:""}),a=d0(),d=Y({}),w=Y(null),_=Y(null),p=Y(null),v=Y(null),g=Y(null),u=Y(null),x=Y(null),k=Y({tabs:[],map:{}}),C=Y(0),B=Y(!1),f=Y(!1),M=Y(!1),b=Y(""),y=Y(0),A=r3({loading:!0,list:[]}),I=Y(0),K=Y(!1),T=Y(""),J=Y(!1),X=n1(()=>n.value.locale),i1=n1(()=>{var O;return Boolean((O=a.value)==null?void 0:O.token)}),P=n1(()=>n.value.imageUploader!==!1),a1=O=>{const c1=w.value,s1=c1.selectionStart,b1=c1.selectionEnd||0,M1=c1.scrollTop;l.value=c1.value.substring(0,s1)+O+c1.value.substring(b1,c1.value.length),c1.focus(),c1.selectionStart=s1+O.length,c1.selectionEnd=s1+O.length,c1.scrollTop=M1},U=O=>{const c1=`![${n.value.locale.uploading} ${O.name}]()`;return a1(c1),Promise.resolve().then(()=>n.value.imageUploader(O)).then(s1=>{l.value=l.value.replace(c1,`\r
![${O.name}](${s1})`)})},D1=()=>{var H,D,j,W,$1;const{serverURL:O,lang:c1,login:s1,wordLimit:b1,requiredMeta:M1}=n.value,_1={comment:T.value,nick:i.value.nick,mail:i.value.mail,link:i.value.link,ua:navigator.userAgent,url:n.value.path};if((H=a.value)!=null&&H.token)_1.nick=a.value.display_name,_1.mail=a.value.email,_1.link=a.value.url;else{if(s1==="force")return;if(M1.indexOf("nick")>-1&&!_1.nick)return(D=d.value.nick)==null||D.focus(),alert(X.value.nickError);if(M1.indexOf("mail")>-1&&!_1.mail||_1.mail&&!/^\w(?:[\w._-]*\w)?@(?:\w(?:[\w-]*\w)?\.)*\w+$/.exec(_1.mail))return(j=d.value.mail)==null||j.focus(),alert(X.value.mailError);if(!_1.comment)return void((W=w.value)==null?void 0:W.focus());_1.nick||(_1.nick=X.value.anonymous)}if(!K.value)return alert(X.value.wordHint.replace("$0",b1[0].toString()).replace("$1",b1[1].toString()).replace("$2",y.value.toString()));_1.comment=Er(_1.comment,k.value.map),e.replyId&&e.rootId&&(_1.pid=e.replyId,_1.rid=e.rootId,_1.at=e.replyUser),J.value=!0,(({serverURL:v1,lang:d1,token:h1,comment:m})=>{const $={"Content-Type":"application/json"};return h1&&($.Authorization=`Bearer ${h1}`),fetch(`${v1}/comment?lang=${d1}`,{method:"POST",headers:$,body:JSON.stringify(m)}).then(z=>z.json())})({serverURL:O,lang:c1,token:($1=a.value)==null?void 0:$1.token,comment:_1}).then(v1=>{if(J.value=!1,v1.errmsg)return alert(v1.errmsg);t("submit",v1.data),l.value="",b.value="",e.replyId&&t("cancel-reply")}).catch(v1=>{J.value=!1,alert(v1.message)})},x1=O=>{p.value.contains(O.target)||v.value.contains(O.target)||(B.value=!1),g.value.contains(O.target)||u.value.contains(O.target)||(f.value=!1)},z1=async O=>{var D;const{scrollTop:c1,clientHeight:s1,scrollHeight:b1}=O.target,M1=(s1+c1)/b1,_1=n.value.search,H=((D=x.value)==null?void 0:D.value)||"";M1<.9||A.loading||(A.loading=!0,A.list.push(..._1.more?await _1.more(H,A.list.length):await _1.search(H)),A.loading=!1,setTimeout(()=>{O.target.scrollTop=c1},50))},B1=H5(O=>{A.list=[],z1(O)},300);return W1([n,y],([O,c1])=>{const{wordLimit:s1}=O;s1?c1<s1[0]&&s1[0]!==0?(I.value=s1[0],K.value=!1):c1>s1[1]?(I.value=s1[1],K.value=!1):(I.value=s1[1],K.value=!0):(I.value=0,K.value=!0)},{immediate:!0}),W1(f,async O=>{if(!O)return;const c1=n.value.search;x.value&&(x.value.value=""),A.loading=!0,A.list=c1.default?await c1.default():await c1.search(""),A.loading=!1}),r2(()=>{document.body.addEventListener("click",x1),W1(()=>l.value,O=>{const{highlighter:c1,texRenderer:s1}=n.value;T.value=O,b.value=_s(O,{emojiMap:k.value.map,highlighter:c1,texRenderer:s1}),y.value=(b1=>(M1=>M1.match(/[\w\d\s\u00C0-\u024F]+/giu)||[])(b1).reduce((M1,_1)=>M1+(_1.trim()===""?0:_1.trim().split(/\s+/u).length),0)+(M1=>M1.match(/[\u4E00-\u9FA5]/gu)||[])(b1).length)(O),O?g4(w.value):g4.destroy(w.value)},{immediate:!0}),W1(()=>n.value.emoji,O=>{return(c1=Array.isArray(O)?O:[],Promise.all(c1.map(s1=>typeof s1=="string"?ss(Rr(s1)):Promise.resolve(s1))).then(s1=>{const b1={tabs:[],map:{}};return s1.forEach(M1=>{const{name:_1,folder:H,icon:D,prefix:j,type:W,items:$1}=M1;b1.tabs.push({name:_1,icon:P4(D,H,j,W),items:$1.map(v1=>{const d1=`${j||""}${v1}`;return b1.map[d1]=P4(v1,H,j,W),d1})})}),b1})).then(s1=>{k.value=s1});var c1},{immediate:!0})}),e0(()=>{document.body.removeEventListener("click",x1)}),{config:n,locale:X,insert:a1,onChange:()=>{const O=_.value;O.files&&P.value&&U(O.files[0]).then(()=>{O.value=""})},onDrop:O=>{var c1;if((c1=O.dataTransfer)!=null&&c1.items){const s1=F4(O.dataTransfer.items);s1&&P.value&&(U(s1),O.preventDefault())}},onKeyDown:O=>{const c1=O.key;(O.ctrlKey||O.metaKey)&&c1==="Enter"&&D1()},onPaste:O=>{if(O.clipboardData){const c1=F4(O.clipboardData.items);c1&&P.value&&U(c1)}},onLogin:O=>{O.preventDefault();const{lang:c1,serverURL:s1}=n.value,b1=(window.innerWidth-450)/2,M1=(window.innerHeight-450)/2,_1=window.open(`${s1}/ui/login?lng=${encodeURIComponent(c1)}`,"_blank",`width=450,height=450,left=${b1},top=${M1},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);_1==null||_1.postMessage({type:"TOKEN",data:null},"*");const H=({data:D})=>{D&&D.type==="userInfo"&&D.data.token&&(_1==null||_1.close(),a.value=D.data,(D.data.remember?localStorage:sessionStorage).setItem("WALINE_USER",JSON.stringify(D.data)),window.removeEventListener("message",H))};window.addEventListener("message",H)},onLogout:()=>{a.value={},localStorage.setItem("WALINE_USER","null"),sessionStorage.setItem("WALINE_USER","null")},onProfile:O=>{var H;O.preventDefault();const{lang:c1,serverURL:s1}=n.value,b1=(window.innerWidth-800)/2,M1=(window.innerHeight-800)/2;(H=window.open(`${s1}/ui/profile?lng=${encodeURIComponent(c1)}`,"_blank",`width=800,height=800,left=${b1},top=${M1},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`))==null||H.postMessage({type:"TOKEN",data:a.value.token},"*");const _1=({data:D})=>{D&&D.type==="profile"&&(a.value={...a.value,...D},[localStorage,sessionStorage].filter(j=>j.getItem("WALINE_USER")).forEach(j=>j.setItem("WALINE_USER",JSON.stringify(a))),window.removeEventListener("message",_1))};window.addEventListener("message",_1)},submitComment:D1,onImageWallScroll:z1,onGifSearch:B1,isLogin:i1,userInfo:a,isSubmitting:J,wordNumber:y,wordLimit:I,isWordNumberLegal:K,editor:l,userMeta:i,emoji:k,emojiTabIndex:C,showEmoji:B,gifData:A,showGif:f,canUploadImage:P,previewText:b,showPreview:M,inputRefs:d,editorRef:w,emojiButtonRef:p,emojiPopupRef:v,gifButtonRef:g,gifPopupRef:u,imageUploadRef:_,gifSearchInputRef:x}}}),vs={class:"wl-comment"},us={key:0,class:"wl-login-info"},xs={class:"wl-avatar"},gs=["title"],ms=["src"],ks=["textContent"],fs={class:"wl-panel"},$s=["for","textContent"],Ms=["id","name","type","onUpdate:modelValue"],Cs=["placeholder"],zs={class:"wl-preview"},Bs=r("hr",null,null,-1),ys=["innerHTML"],Hs={class:"wl-footer"},bs={class:"wl-actions"},Ls={href:"https://guides.github.com/features/mastering-markdown/",title:"Markdown Guide","aria-label":"Markdown is supported",class:"wl-action",target:"_blank",rel:"noreferrer"},Vs=["title"],Ss=["title"],As=["title"],js=["title"],Rs={class:"wl-info"},Ts={class:"wl-text-number"},Es={key:0},Ps=_2(" \xA0/\xA0 "),Ds=["textContent"],Fs=["textContent"],Is=["disabled"],qs=["placeholder"],Os={key:0,class:"wl-loading"},Gs={key:0,class:"wl-tab-wrapper"},Ns=["title","onClick"],Us=["src","alt"],Ws={key:0,class:"wl-tabs"},Js=["onClick"],Ks=["src","alt","title"],Zs=["title"];var Dr=Je(ps,[["render",function(e,t,n,l,i,a){const d=F1("CloseIcon"),w=F1("MarkdownIcon"),_=F1("EmojiIcon"),p=F1("GifIcon"),v=F1("ImageIcon"),g=F1("PreviewIcon"),u=F1("LoadingIcon"),x=F1("ImageWall");return c(),o("div",vs,[e.config.login!=="disable"&&e.isLogin?(c(),o("div",us,[r("div",xs,[r("button",{class:"wl-logout-btn",title:e.locale.logout,onClick:t[0]||(t[0]=(...k)=>e.onLogout&&e.onLogout(...k))},[u1(d,{size:14})],8,gs),r("img",{src:e.userInfo.avatar,alt:"avatar"},null,8,ms)]),r("a",{href:"#",class:"wl-login-nick","aria-label":"Profile",onClick:t[1]||(t[1]=(...k)=>e.onProfile&&e.onProfile(...k)),textContent:y1(e.userInfo.display_name)},null,8,ks)])):p1("v-if",!0),r("div",fs,[e.config.login!=="force"&&e.config.meta.length&&!e.isLogin?(c(),o("div",{key:0,class:G1(["wl-header",`item${e.config.meta.length}`])},[(c(!0),o(L1,null,z2(e.config.meta,k=>(c(),o("div",{class:"wl-header-item",key:k},[r("label",{for:k,textContent:y1(e.locale[k]+(e.config.requiredMeta.includes(k)||!e.config.requiredMeta.length?"":`(${e.locale.optional})`))},null,8,$s),de(r("input",{ref_for:!0,ref:C=>{C&&(e.inputRefs[k]=C)},id:`wl-${k}`,class:G1(["wl-input",`wl-${k}`]),name:k,type:k==="mail"?"email":"text","onUpdate:modelValue":C=>e.userMeta[k]=C},null,10,Ms),[[yo,e.userMeta[k]]])]))),128))],2)):p1("v-if",!0),de(r("textarea",{class:"wl-editor",ref:"editorRef",id:"wl-edit",placeholder:e.replyUser?`@${e.replyUser}`:e.locale.placeholder,"onUpdate:modelValue":t[2]||(t[2]=k=>e.editor=k),onKeydown:t[3]||(t[3]=(...k)=>e.onKeyDown&&e.onKeyDown(...k)),onDrop:t[4]||(t[4]=(...k)=>e.onDrop&&e.onDrop(...k)),onPaste:t[5]||(t[5]=(...k)=>e.onPaste&&e.onPaste(...k))},null,40,Cs),[[St,e.editor]]),de(r("div",zs,[Bs,r("h4",null,y1(e.locale.preview)+":",1),r("div",{class:"wl-content",innerHTML:e.previewText},null,8,ys)],512),[[Y0,e.showPreview]]),r("div",Hs,[r("div",bs,[r("a",Ls,[u1(w)]),de(r("button",{ref:"emojiButtonRef",class:G1(["wl-action",{actived:e.showEmoji}]),title:e.locale.emoji,onClick:t[6]||(t[6]=k=>e.showEmoji=!e.showEmoji)},[u1(_)],10,Vs),[[Y0,e.emoji.tabs.length]]),e.config.search?(c(),o("button",{key:0,ref:"gifButtonRef",class:G1(["wl-action",{actived:e.showGif}]),title:e.locale.gif,onClick:t[7]||(t[7]=k=>e.showGif=!e.showGif)},[u1(p)],10,Ss)):p1("v-if",!0),r("input",{ref:"imageUploadRef",class:"upload",id:"wl-image-upload",type:"file",accept:".png,.jpg,.jpeg,.webp,.bmp,.gif",onChange:t[8]||(t[8]=(...k)=>e.onChange&&e.onChange(...k))},null,544),e.canUploadImage?(c(),o("label",{key:1,for:"wl-image-upload",class:"wl-action",title:e.locale.uploadImage},[u1(v)],8,As)):p1("v-if",!0),r("button",{class:G1(["wl-action",{actived:e.showPreview}]),title:e.locale.preview,onClick:t[9]||(t[9]=k=>e.showPreview=!e.showPreview)},[u1(g)],10,js)]),r("div",Rs,[r("div",Ts,[_2(y1(e.wordNumber)+" ",1),e.config.wordLimit?(c(),o("span",Es,[Ps,r("span",{class:G1({illegal:!e.isWordNumberLegal}),textContent:y1(e.wordLimit)},null,10,Ds)])):p1("v-if",!0),_2(" \xA0"+y1(e.locale.word),1)]),e.config.login==="disable"||e.isLogin?p1("v-if",!0):(c(),o("button",{key:0,class:"wl-btn",onClick:t[10]||(t[10]=(...k)=>e.onLogin&&e.onLogin(...k)),textContent:y1(e.locale.login)},null,8,Fs)),e.config.login!=="force"||e.isLogin?(c(),o("button",{key:1,class:"wl-btn primary",title:"Cmd|Ctrl + Enter",disabled:e.isSubmitting,onClick:t[11]||(t[11]=(...k)=>e.submitComment&&e.submitComment(...k))},[e.isSubmitting?(c(),m2(u,{key:0,size:16})):(c(),o(L1,{key:1},[_2(y1(e.locale.submit),1)],64))],8,Is)):p1("v-if",!0)]),r("div",{ref:"gifPopupRef",class:G1(["wl-gif-popup",{display:e.showGif}])},[r("input",{type:"text",placeholder:e.locale.gifSearchPlaceholder,ref:"gifSearchInputRef",onInput:t[12]||(t[12]=(...k)=>e.onGifSearch&&e.onGifSearch(...k))},null,40,qs),u1(x,{items:e.gifData.list,"column-width":200,gap:6,onInsert:t[13]||(t[13]=k=>e.insert(k)),onScroll:e.onImageWallScroll},null,8,["items","onScroll"]),e.gifData.loading?(c(),o("div",Os,[u1(u,{size:30})])):p1("v-if",!0)],2),r("div",{ref:"emojiPopupRef",class:G1(["wl-emoji-popup",{display:e.showEmoji}])},[(c(!0),o(L1,null,z2(e.emoji.tabs,(k,C)=>(c(),o(L1,{key:k.name},[C===e.emojiTabIndex?(c(),o("div",Gs,[(c(!0),o(L1,null,z2(k.items,B=>(c(),o("button",{key:B,title:B,onClick:f=>e.insert(`:${B}:`)},[e.showEmoji?(c(),o("img",{key:0,class:"wl-emoji",src:e.emoji.map[B],alt:B,loading:"lazy",referrerPolicy:"no-referrer"},null,8,Us)):p1("v-if",!0)],8,Ns))),128))])):p1("v-if",!0)],64))),128)),e.emoji.tabs.length>1?(c(),o("div",Ws,[(c(!0),o(L1,null,z2(e.emoji.tabs,(k,C)=>(c(),o("button",{key:k.name,class:G1(["wl-tab",{active:e.emojiTabIndex===C}]),onClick:B=>e.emojiTabIndex=C},[r("img",{class:"wl-emoji",src:k.icon,alt:k.name,title:k.name,loading:"lazy",referrerPolicy:"no-referrer"},null,8,Ks)],10,Js))),128))])):p1("v-if",!0)],2)])]),e.replyId?(c(),o("button",{key:1,class:"wl-close",title:e.locale.cancelReply,onClick:t[14]||(t[14]=k=>e.$emit("cancel-reply"))},[u1(d,{size:24})],8,Zs)):p1("v-if",!0)])}],["__file","CommentBox.vue"]]);const Xs=["approved","waiting","spam"],Qs=s({props:{comment:{type:Object,required:!0},rootId:{type:String,required:!0},reply:{type:Object}},components:{CommentBox:Dr,DeleteIcon:()=>G("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},G("path",{d:"m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z",fill:"red"})),LikeIcon:({active:e=!1})=>G("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[G("path",{d:"M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z"+(e?"":"M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"),fill:e?"red":"currentColor"})]),ReplyIcon:()=>G("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},G("path",{d:"M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z",fill:"currentColor"})),VerifiedIcon:()=>G("svg",{class:"verified-icon",viewBox:"0 0 1024 1024",width:"14",height:"14"},G("path",{d:"m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z",fill:"#27ae60"}))},emits:["submit","reply","like","delete","status","sticky"],setup(e){const t=E1("config"),n=Pr(),l=d0(),i=n1(()=>t.value.locale),a=n1(()=>{let{link:g}=e.comment;return g?Tr(g)?g:`https://${g}`:""}),d=n1(()=>n.value.includes(e.comment.objectId)),w=((g,u)=>{const x=O5();return n1(()=>os(g,x.value,u))})(e.comment.insertedAt,i.value),_=n1(()=>l.value.type==="administrator"),p=n1(()=>e.comment.user_id&&l.value.objectId===e.comment.user_id),v=n1(()=>{var g;return e.comment.objectId===((g=e.reply)==null?void 0:g.objectId)});return{config:t,locale:i,isReplyingCurrent:v,link:a,like:d,time:w,isAdmin:_,isOwner:p,commentStatus:Xs}}}),Ys=["id"],el={class:"wl-user","aria-hidden":"true"},tl=["src"],nl={class:"wl-card"},rl={class:"wl-head"},cl=["href"],ol={key:1,class:"wl-nick"},sl=["textContent"],ll=["textContent"],il=["textContent"],al=["textContent"],hl=["textContent"],dl={class:"wl-comment-actions"},wl=["title"],_l=["textContent"],pl=["title"],vl={class:"wl-meta","aria-hidden":"true"},ul=["textContent"],xl=["textContent"],gl=["textContent"],ml=["innerHTML"],kl={key:0,class:"wl-admin-actions"},fl={class:"wl-comment-status"},$l=["disabled","onClick","textContent"],Ml={key:1,class:"wl-reply-wrapper"},Cl={key:2,class:"wl-quote"},zl=s({name:"WalineRoot",components:{CommentBox:Dr,CommentCard:Je(Qs,[["render",function(e,t,n,l,i,a){const d=F1("VerifiedIcon"),w=F1("DeleteIcon"),_=F1("LikeIcon"),p=F1("ReplyIcon"),v=F1("CommentBox"),g=F1("CommentCard",!0);return c(),o("div",{class:"wl-item",id:e.comment.objectId},[r("div",el,[e.comment.avatar?(c(),o("img",{key:0,src:e.comment.avatar},null,8,tl)):p1("v-if",!0),e.comment.type?(c(),m2(d,{key:1})):p1("v-if",!0)]),r("div",nl,[r("div",rl,[e.link?(c(),o("a",{key:0,class:"wl-nick",href:e.link,target:"_blank",rel:"nofollow noreferrer"},y1(e.comment.nick),9,cl)):(c(),o("span",ol,y1(e.comment.nick),1)),e.comment.type==="administrator"?(c(),o("span",{key:2,class:"wl-badge",textContent:y1(e.locale.admin)},null,8,sl)):p1("v-if",!0),e.comment.label?(c(),o("span",{key:3,class:"wl-badge",textContent:y1(e.comment.label)},null,8,ll)):p1("v-if",!0),e.comment.sticky?(c(),o("span",{key:4,class:"wl-badge",textContent:y1(e.locale.sticky)},null,8,il)):p1("v-if",!0),e.comment.level!==void 0&&e.comment.level>=0?(c(),o("span",{key:5,class:G1(`wl-badge level${e.comment.level}`),textContent:y1(e.locale[`level${e.comment.level}`]||`Level ${e.comment.level}`)},null,10,al)):p1("v-if",!0),r("span",{class:"wl-time",textContent:y1(e.time)},null,8,hl),r("div",dl,[e.isAdmin||e.isOwner?(c(),o("button",{key:0,class:"wl-delete",onClick:t[0]||(t[0]=u=>e.$emit("delete",e.comment))},[u1(w)])):p1("v-if",!0),r("button",{class:"wl-like",onClick:t[1]||(t[1]=u=>e.$emit("like",e.comment)),title:e.like?e.locale.cancelLike:e.locale.like},[u1(_,{active:e.like},null,8,["active"]),"like"in e.comment?(c(),o("span",{key:0,textContent:y1(e.comment.like)},null,8,_l)):p1("v-if",!0)],8,wl),r("button",{class:G1(["wl-reply",{active:e.isReplyingCurrent}]),title:e.isReplyingCurrent?e.locale.cancelReply:e.locale.reply,onClick:t[2]||(t[2]=u=>e.$emit("reply",e.isReplyingCurrent?null:e.comment))},[u1(p)],10,pl)])]),r("div",vl,[e.comment.addr?(c(),o("span",{key:0,textContent:y1(e.comment.addr)},null,8,ul)):p1("v-if",!0),e.comment.browser?(c(),o("span",{key:1,textContent:y1(e.comment.browser)},null,8,xl)):p1("v-if",!0),e.comment.os?(c(),o("span",{key:2,textContent:y1(e.comment.os)},null,8,gl)):p1("v-if",!0)]),r("div",{class:"wl-content",innerHTML:e.comment.comment},null,8,ml),e.isAdmin?(c(),o("div",kl,[r("span",fl,[(c(!0),o(L1,null,z2(e.commentStatus,u=>(c(),o("button",{key:u,class:G1(`wl-btn wl-${u}`),disabled:e.comment.status===u,onClick:x=>e.$emit("status",{status:u,comment:e.comment}),textContent:y1(u)},null,10,$l))),128))]),e.isAdmin&&!e.comment.rid?(c(),o("button",{key:0,class:"wl-btn wl-sticky",onClick:t[3]||(t[3]=u=>e.$emit("sticky",e.comment))},y1(e.comment.sticky?"unsticky":"sticky"),1)):p1("v-if",!0)])):p1("v-if",!0),e.isReplyingCurrent?(c(),o("div",Ml,[u1(v,{replyId:e.comment.objectId,replyUser:e.comment.nick,rootId:e.rootId,onSubmit:t[4]||(t[4]=u=>e.$emit("submit",u)),onCancelReply:t[5]||(t[5]=u=>e.$emit("reply",null))},null,8,["replyId","replyUser","rootId"])])):p1("v-if",!0),e.comment.children?(c(),o("div",Cl,[(c(!0),o(L1,null,z2(e.comment.children,u=>(c(),m2(g,{key:u.objectId,comment:u,reply:e.reply,rootId:e.rootId,onReply:t[6]||(t[6]=x=>e.$emit("reply",x)),onSubmit:t[7]||(t[7]=x=>e.$emit("submit",x)),onLike:t[8]||(t[8]=x=>e.$emit("like",x)),onDelete:t[9]||(t[9]=x=>e.$emit("delete",x)),onStatus:t[10]||(t[10]=x=>e.$emit("status",x)),onSticky:t[11]||(t[11]=x=>e.$emit("sticky",x))},null,8,["comment","reply","rootId"]))),128))])):p1("v-if",!0)])],8,Ys)}],["__file","CommentCard.vue"]]),LoadingIcon:h0},props:["serverURL","path","meta","requiredMeta","dark","lang","locale","pageSize","wordLimit","emoji","login","highlighter","texRenderer","imageUploader","copyright"],setup(e){const t=n1(()=>(({serverURL:k,path:C=location.pathname,lang:B="zh-CN",locale:f,emoji:M=["//unpkg.com/@waline/emojis@1.0.1/weibo"],meta:b=["nick","mail","link"],requiredMeta:y=[],dark:A=!1,pageSize:I=10,wordLimit:K,imageUploader:T,highlighter:J,texRenderer:X,copyright:i1=!0,login:P="enable",search:a1=Q5(),...U})=>({serverURL:rs(k),path:ns(C),locale:{...E4[B]||E4["zh-CN"],...typeof f=="object"?f:{}},wordLimit:cs(K),meta:A4(b),requiredMeta:A4(y),imageUploader:wt(T,Z5),highlighter:wt(J,es),texRenderer:wt(X,X5),lang:B,dark:A,emoji:M,pageSize:I,login:P,copyright:i1,search:a1,...U}))(e)),n=d0(),l=Pr(),i=Y("loading"),a=Y(0),d=Y(1),w=Y(0),_=Y([]),p=Y(null),v=n1(()=>{return typeof(k=t.value.dark)=="string"?k==="auto"?`@media(prefers-color-scheme:dark){body${_t}}`:`${k}${_t}`:k===!0?`:root${_t}`:"";var k});let g;(function(k,C={}){const B=Y(!1),{document:f=T5,immediate:M=!0,manual:b=!1,id:y="vueuse_styletag_"+ ++G5}=C,A=Y(k);let I=()=>{};const K=()=>{if(!f)return;const J=f.getElementById(y)||f.createElement("style");J.type="text/css",J.id=y,C.media&&(J.media=C.media),f.head.appendChild(J),B.value||(I=W1(A,X=>{J.innerText=X},{immediate:!0}),B.value=!0)},T=()=>{f&&B.value&&(I(),f.head.removeChild(f.getElementById(y)),B.value=!1)};M&&!b&&K(),b||O3(T),Te(B)})(v);const u=k=>{var b;const{serverURL:C,path:B,pageSize:f}=t.value,M=new AbortController;i.value="loading",g==null||g(),is({serverURL:C,lang:t.value.lang,path:B,pageSize:f,page:k,signal:M.signal,token:(b=n.value)==null?void 0:b.token}).then(y=>{i.value="success",a.value=y.count,_.value.push(...y.data),d.value=k,w.value=y.totalPages}).catch(y=>{y.name!=="AbortError"&&(console.error(y.message),i.value="error")}),g=M.abort.bind(M)},x=()=>{a.value=0,_.value=[],u(1)};return w2("config",t),W1(()=>e.path,x),r2(()=>x()),{config:t,darkmodeStyle:v,i18n:n1(()=>t.value.locale),status:i,count:a,page:d,totalPages:w,data:_,reply:p,loadMore:()=>u(d.value+1),refresh:x,onReply:k=>{p.value=k},onSubmit:k=>{if(k.rid){const C=_.value.find(({objectId:B})=>B===k.rid);if(!C)return;Array.isArray(C.children)||(C.children=[]),C.children.push(k)}else _.value.unshift(k)},onStatusChange:async({comment:k,status:C})=>{var M;if(k.status===C)return;const{serverURL:B,lang:f}=t.value;await D4({serverURL:B,lang:f,token:(M=n.value)==null?void 0:M.token,objectId:k.objectId,status:C}),k.status=C},onDelete:async({objectId:k})=>{var f;if(!confirm("Are you sure you want to delete this comment?"))return;const{serverURL:C,lang:B}=t.value;await(({serverURL:M,lang:b,token:y,objectId:A})=>fetch(`${M}/comment/${A}?lang=${b}`,{method:"DELETE",headers:{Authorization:`Bearer ${y}`}}).then(I=>I.json()))({serverURL:C,lang:B,token:(f=n.value)==null?void 0:f.token,objectId:k}),_.value.some((M,b)=>M.objectId===k?(_.value=_.value.filter((y,A)=>A!==b),!0):M.children.some((y,A)=>y.objectId===k&&(_.value[b].children=M.children.filter((I,K)=>K!==A),!0)))},onSticky:async k=>{var f;if(k.rid)return;const{serverURL:C,lang:B}=t.value;await D4({serverURL:C,lang:B,token:(f=n.value)==null?void 0:f.token,objectId:k.objectId,sticky:k.sticky?0:1}),k.sticky=!k.sticky},onLike:async k=>{const{serverURL:C,lang:B}=t.value,{objectId:f}=k,M=l.value.includes(f);await(({serverURL:b,lang:y,objectId:A,like:I})=>fetch(`${b}/comment/${A}?lang=${y}`,{method:"PUT",headers:ls,body:JSON.stringify({like:I})}).then(K=>K.json()))({serverURL:C,lang:B,objectId:f,like:!M}),M?l.value=l.value.filter(b=>b!==f):(l.value=[...l.value,f],l.value.length>50&&(l.value=l.value.slice(-50))),k.like=(k.like||0)+(M?-1:1)},version:"2.6.1"}}}),Bl={"data-waline":""},yl={class:"wl-count"},Hl=["textContent"],bl={class:"wl-cards"},Ll={key:1,class:"wl-operation"},Vl=["textContent"],Sl={key:0,class:"wl-loading"},Al=["textContent"],jl={class:"wl-operation"},Rl=["textContent"],Tl={key:3,class:"wl-power"},El=_2(" Powered by "),Pl=r("a",{href:"https://github.com/walinejs/waline",target:"_blank",rel:"noreferrer"}," Waline ",-1);var Dl=Je(zl,[["render",function(e,t,n,l,i,a){const d=F1("CommentBox"),w=F1("CommentCard"),_=F1("LoadingIcon");return c(),o("div",Bl,[e.reply?p1("v-if",!0):(c(),m2(d,{key:0,onSubmit:e.onSubmit},null,8,["onSubmit"])),r("div",yl,[e.count?(c(),o("span",{key:0,class:"wl-num",textContent:y1(e.count)},null,8,Hl)):p1("v-if",!0),_2(" "+y1(e.i18n.comment),1)]),r("div",bl,[(c(!0),o(L1,null,z2(e.data,p=>(c(),m2(w,{key:p.objectId,"root-id":p.objectId,comment:p,reply:e.reply,onReply:e.onReply,onSubmit:e.onSubmit,onStatus:e.onStatusChange,onDelete:e.onDelete,onSticky:e.onSticky,onLike:e.onLike},null,8,["root-id","comment","reply","onReply","onSubmit","onStatus","onDelete","onSticky","onLike"]))),128))]),e.status==="error"?(c(),o("div",Ll,[r("button",{type:"button",class:"wl-btn",onClick:t[0]||(t[0]=(...p)=>e.refresh&&e.refresh(...p)),textContent:y1(e.i18n.refresh)},null,8,Vl)])):(c(),o(L1,{key:2},[e.status==="loading"?(c(),o("div",Sl,[u1(_,{size:30})])):e.data.length?e.page<e.totalPages?(c(),o(L1,{key:2},[p1(" Load more button "),r("div",jl,[r("button",{type:"button",class:"wl-btn",onClick:t[1]||(t[1]=(...p)=>e.loadMore&&e.loadMore(...p)),textContent:y1(e.i18n.more)},null,8,Rl)])],2112)):p1("v-if",!0):(c(),o("div",{key:1,class:"wl-empty",textContent:y1(e.i18n.sofa)},null,8,Al))],64)),p1(" Copyright Information "),e.config.copyright?(c(),o("div",Tl,[El,Pl,_2(" v"+y1(e.version),1)])):p1("v-if",!0)])}],["__file","Waline.vue"]]);var O4=s({name:"Waline",props:{options:{type:Object,default(){return{}}}},setup(e){const t=We(),{options:n}=$3(e),l=ar(),i=n1(()=>({lang:l.value||"zh-CN",dark:"html.dark",path:_r(t.path),...n.value}));return()=>G("div",{class:"reco-waline-wrapper"},G(Dl,i.value))}}),Fl=s({components:{Valine:x4,Waline:O4},props:{hideComments:{type:Boolean,default:!0}},setup(e){const{solution:t,options:n}=o8(),{hideComments:l}=$3(e);let i;switch(t.value){case"valine":i=x4;break;case"waline":i=O4;break;default:i="";break}return()=>i?G(i,{options:n.value,style:`display: ${l.value?"none":"block"}`}):null}}),Il=s({name:"ValineViews",props:{idVal:String,numStyle:Object,flagTitle:{type:String,default:"Your Article Title"}},setup(e){const t=dr(),n=We(),{idVal:l,numStyle:i,flagTitle:a}=$3(e),d=w=>t.value.base.slice(0,t.value.base.length-1)+w;return()=>G("span",{id:d(l.value||n.path),class:"leancloud-visitors","data-flag-title":a.value},G("a",{class:"leancloud-visitors-count",style:i.value}))}});function ql({app:e}){e.component("Comments",t=>G(Fl,{...t})),e.component("ValineViews",t=>G(Il,{...t}))}var Ol=k2({enhance(...e){ql(...e)}});const Fr=Symbol(""),Ir=Symbol(""),Pt=Symbol("");function ZU3(){const e=E1(Ir)||{},t=E1(Pt)||{},n=E1(Fr)||{};if(!Pt)throw new Error("useSiteLocaleData() is called without provider.");const{currentRoute:l}=C3();return{classificationPosts:n1(()=>n.value[l.value.path]||{}),classificationSummary:e,posts:t}}const Gl={"/categories/Linux/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"categories",currentClassificationValue:"Linux",pages:[{data:{key:"v-e5cc5690",path:"/20220711/2.html",title:"Centos7\u73AF\u5883\u642D\u5EFA",lang:"zh-CN",frontmatter:{title:"Centos7\u73AF\u5883\u642D\u5EFA",date:"2022-07-12 17:55:44",sidebar:"auto",categories:["Linux"],tags:["java","mysql","redis"],publish:!0},excerpt:"",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],git:{},filePathRelative:"20220711/2.md"},key:"v-e5cc5690",path:"/20220711/2.html",title:"Centos7\u73AF\u5883\u642D\u5EFA",lang:"zh-CN",frontmatter:{title:"Centos7\u73AF\u5883\u642D\u5EFA",date:"2022-07-12 17:55:44",sidebar:"auto",categories:["Linux"],tags:["java","mysql","redis"],publish:!0},excerpt:"",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],content:`\r
<!-- more -->\r
\r
### \u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\r
\r
**1. \u521B\u5EFA jdk \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09**\r
\`mkdir -p usr/local/src\`\r
**2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D jdk \u5305**\r
\`wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz\`\r
**3. \u89E3\u538B\uFF08\u5982\u4E0B\u64CD\u4F5C\u662F\u5DF2\u7ECF\u8DF3\u5230\u6307\u5B9A\u5B58\u653E jdk \u7684\u76EE\u5F55\u4F4D\u7F6E\uFF09**\r
\`tar -zxvf jdk-8u131-linux-x64.tar.gz\`\r
**4. \u91CD\u547D\u540D**\r
\`mv jdk1.8.0_131 jdk1.8\`\r
**5. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF**\r
(1)\u8FDB\u5165\u7CFB\u7EDF\u6587\u4EF6\u547D\u4EE4\u5982\u4E0B\uFF1A\`vi /etc/profile\`\r
(2)\u6309\u201Cshift+g\u201D\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u6587\u672C\u672B\u5C3E\uFF0C\u518D\u6309\u201Ci\u201D\u6309\u952E\u8FDB\u884C\u7F16\u8F91\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6587\u672C(\u5199\u5B8C\u540E\uFF0C\u6309 ESC \u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\u5E76\u8F93\u5165\u201C:x\u201D\u4EE5\u4FDD\u5B58\u5E76\u9000\u51FA)\uFF1A\r
\r
\`\`\`/\r
export JAVA_HOME=/usr/local/src/jdk1.8\r
export PATH=$PATH:$JAVA_HOME/bin\r
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar\r
\`\`\`\r
\r
**6. \u8BA9\u914D\u7F6E\u6587\u4EF6\u751F\u6548\uFF1A**\`source /etc/profile\`\r
**7. \u68C0\u67E5 jdk \u662F\u5426\u914D\u7F6E\u6210\u529F\uFF1A** \`java -version\`\r
\r
### \u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09\r
\r
**1. \u521B\u5EFA tomcat \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09**\r
\r
**2. \u4F7F\u7528 wget \u4E0B\u8F7D tomcat**\r
\r
**3. \u89E3\u538B**\r
\r
**4. \u542F\u52A8 tomcat**\r
\r
**5. \u4FEE\u6539 tomcat \u7AEF\u53E3**\r
\r
**6. \u6D4B\u8BD5\u8BBF\u95EE**\r
\r
### \u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**_\u6CE8\u610F\uFF1A\u9664\u4E86\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 3306 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 3306 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09_**\r
\r
**1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B**\r
\r
**2. \u4E0B\u8F7D mysql \u5E76\u542F\u52A8\u670D\u52A1**\r
(1)\u4F7F\u7528 wget \u4E0B\u8F7D mysql \u6E90\u5305\u5E76\u7528 yum \u5B89\u88C5\uFF1A\r
\`\u4E0B\u8F7D\uFF1A wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm\`\r
\`\u5B89\u88C5\uFF1A yum -y localinstall mysql57-community-release-el7-11.noarch.rpm\`\r
(3)\u5728\u7EBF\u5B89\u88C5 Mysql\uFF1A\`yum -y install mysql-community-server\`\r
(4)\u542F\u52A8\u670D\u52A1\uFF1A\`systemctl start mysqld\`\r
(5)\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\uFF1A\r
\`systemctl enable mysqld\`\r
\`systemctl deaemon-reload\`\r
\r
**3. \u4FEE\u6539\u672C\u5730\u767B\u5F55\u5BC6\u7801**\r
(1) \u901A\u8FC7\`vi /var/log/mysqld.log\`\u8FDB\u5165\u8BE5\u6587\u4EF6\u4E2D\u627E\u5230\u6807\u9EC4\u8FD9\u6BB5\uFF0C\u800C\u7EA2\u8272\u5708\u4FBF\u662F\u9ED8\u8BA4\u767B\u9646\u5BC6\u7801\uFF1A\r
![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191227220213561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70)\r
(2)\u901A\u8FC7\u4EE5\u4E0A\u5F97\u5230\u7684\u5BC6\u7801\u767B\u5F55\u547D\u4EE4\`mysql -u root -p\` \uFF0C\u5373\u53EF\u8FDB\u5165 mysql \u4E2D\u3002\u4E0B\u9762\u5219\u662F\u4FEE\u6539\u5BC6\u7801\uFF1A\r
\`mysql> alter user 'root'@'localhost' identified by 'Qq88888.';\`\r
\r
**4. \u8BBE\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF08\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF09\uFF0C\u5F00\u542F\u8FDC\u7A0B\u767B\u5F55\u524D\u63D0\u8981\u4FDD\u8BC1\u5F00\u542F\u9632\u706B\u5899\uFF0C\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A**\r
(1)\u5141\u8BB8\u8BE5\u8D26\u53F7\u80FD\u591F\u88AB\u8FDC\u7A0B\u767B\u5F55\uFF1A \` mysql> grant all privileges on *.* to 'root'@'%' identified by 'Qq88888.' with grant option;\`\r
(2)\u67E5\u770B\u9632\u706B\u5899\u662F\u5426\u5F00\u542F\uFF1A \`firewall-cmd --state\`\r
(3)\u5F00\u542F\u9632\u706B\u5899\uFF1A \`systemctl start firewalld.service\` - \u5173\u95ED\u9632\u706B\u5899: \`systemctl stop firewalld.service\` - \u7981\u7528\u9632\u706B\u5899: \`systemctl disable firewalld.service\` - \u67E5\u770B\u9632\u706B\u5899\u76D1\u542C\u7684\u7AEF\u53E3: \`firewall-cmd --list-port\`\r
(4)\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A\`firewall-cmd --zone=public --add-port=3306/tcp --permanent\`\r
(5)\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\`\r
\r
**5. \u914D\u7F6E my.cnf**\r
\u8FDB\u5165\`vi /etc/my.cnf\`\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u672C\u6587\u8FDB\u884C\u7F16\u7801\u8BBE\u7F6E\uFF1A\r
\r
\`\`\`/\r
character_set_server=utf8\r
init_connect='SET NAMES utf8'\r
\`\`\`\r
\r
**6. \u91CD\u542F\u52A8 mysql**\r
\`systemctl restart mysqld\`\r
\r
### \u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**_\u6CE8\u610F\uFF1A\u540C\u4E0A\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 6379 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09_**\r
\r
**1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B**\r
\r
**2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D redis\uFF1A**\`wget http://download.redis.io/releases/redis-4.0.8.tar.gz\`\r
\r
**3. \u89E3\u538B\u3001\u7F16\u8BD1\u548C\u5B89\u88C5\uFF1A**\r
(1) \u89E3\u538B\uFF1A\`tar -zxvf redis-4.0.8.tar.gz\`\r
(2) \u5B8C\u6210\u540E\u8FDB\u5165\u89E3\u538B\u7684 redis-4.0.8 \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 make \u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF1A\`make\`\r
(3) \u5B89\u88C5\uFF1A\`make install\`\r
\r
**4. \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8**\r
(1) \u521B\u5EFA\u65B0\u76EE\u5F55\uFF1A\`mkdir -p /usr/local/redis\`\r
(2) \u5C06/usr/local/src/redis-4.0.8/src \u76EE\u5F55\u4E0B\u7684 redis-server\u3001redis-cli \u548C/usr/local/src/redis-4.0.8 \u76EE\u5F55\u4E0B\u7684 redis.conf \u6587\u4EF6\u62F7\u8D1D\u5230\u521B\u5EFA\u7684\u76EE\u5F55\u4E2D\uFF1A\r
\`cp redis-server /usr/local/redis\`\r
\`cp redis-cli /usr/local/redis\`\r
\`cp ../redis.conf /usr/local/redis\`\r
(3)\u5F00\u542F\u540E\u53F0\u8FD0\u884C\uFF0C\u4FEE\u6539\u62F7\u8D1D\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF1A\`vi /usr/local/redis/redis.conf\`\r
\r
-   \u5C06\u8424\u5149\u5B57\u4E0A\u7684\u201Cno\u201D\u8BE5\u4E3A\u201Cyes\u201D\uFF1A ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/2019122819072660.png)\r
\r
(4) \u521B\u5EFA\u670D\u52A1\u6587\u4EF6 redis.service\uFF1A\`vi /usr/lib/systemd/system/redis.service\`\r
\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u4E2D\u7684\u8DEF\u5F84\u4EE5\u5B9E\u9645\u5404\u5F02\uFF09\uFF1A\r
\r
\`\`\`/\r
	[Unit]\r
	Description=The redis-server Process Manager\r
	After=syslog.target network.target\r
\r
	[Service]\r
	Type=simple\r
	PIDFile=/var/run/redis_6379.pid\r
	ExecStart=/usr/local/redis/redis-server /usr/local/redis/redis.conf\r
	ExecReload=/bin/kill -USR2 $MAINPID\r
	ExecStop=/bin/kill -SIGINT $MAINPID\r
\r
	[Install]\r
	WantedBy=multi-user.target\r
\`\`\`\r
\r
**5. \u5F00\u542F redis \u8FDC\u7A0B\u8BBF\u95EE\uFF08\u53EF\u5FFD\u7565\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF09\uFF1A**\r
(1) \u4FEE\u6539 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A\r
\r
-   \u8BBE\u7F6E\u53EF\u8BBF\u95EE\u7684 ip\uFF1A\u4FEE\u6539\u8424\u5149\u5B57\u7684\u6587\u672C\u4E2D\u753B\u5708\u7684 ip \u5730\u5740\u8BA9\u5176\u4ED6\u53EF\u4EE5\u8BBF\u95EE\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228214121699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70)\r
-   \u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F\uFF1A\u5C06\u8424\u5149\u5B57\u6587\u672C\u7684\u201Cyes\u201D\u4FEE\u6539\u4E3A\u201Cno\u201D\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228211505882.png)\r
-   \u8BBE\u7F6E\u5BC6\u7801\uFF1A\u6DFB\u52A0\u8424\u5149\u5B57\u7684\u6587\u672C\u6240\u793A\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228205849892.png)\r
\r
(2) \u4FEE\u6539\u5B8C\u540E\u5E94\u5728 redis \u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u547D\u4EE4\`redis-server redis.conf\`\u6765\u68C0\u67E5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u4EA6\u53EF\u68C0\u67E5\u662F\u5426\u51FA\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u907F\u514D\u540E\u7EED\u4E0D\u5FC5\u8981\u7684\u95EE\u9898\r
(3) \u56E0\u4E3A\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u6240\u4EE5\u52BF\u5FC5\u8981\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u7684\u76D1\u542C\uFF1A - \u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A\`firewall-cmd --zone=public --add-port=6379/tcp --permanent\` - \u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\` - \u67E5\u770B\u9632\u706B\u5899\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --list-ports\`\r
**6. \u5F00\u542F\u670D\u52A1\u548C\u5F00\u673A\u81EA\u542F\u52A8\uFF1A**\r
(1) \u5237\u65B0\u670D\u52A1\u914D\u7F6E\uFF1A\`systemctl daemon-reload\`\r
(2) \u5F00\u542F redis: \`systemctl start redis\`\r
(3) \u52A0\u5165\u5F00\u673A\u542F\u52A8\uFF1A\`systemctl enable redis\`\r
\r
### \u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**1. \u5B89\u88C5 gcc\uFF08gcc \u7528\u4E8E\u7F16\u8BD1\u63A5\u4E0B\u6765\u4E0B\u8F7D\u7684 nginx \u6E90\u7801\uFF09**\r
\u4F7F\u7528\`gcc -v\`\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u8BE5\u547D\u4EE4\uFF0C\u5982\u672A\u5B89\u88C5\u5219\u6267\u884C\`yum install gcc-c++\`\r
\r
**2. \u5B89\u88C5 pcre \u548C pcre-devel \u4F9D\u8D56\uFF08nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002\uFF09**\r
\`yum install -y pcre pcre-devel\`\r
\r
**3. \u5B89\u88C5 zlib zlib-devel \u4F9D\u8D56\uFF08zlib \u63D0\u4F9B\u4E86\u5F88\u591A\u538B\u7F29\u548C\u89E3\u65B9\u5F0F\uFF0Cnginx \u9700\u8981 zlib \u5BF9 http \u8FDB\u884C gzip\uFF09**\r
\`yum install -y zlib zlib-devel\`\r
\r
**4. \u5B89\u88C5 openssl openssl-devel\uFF08openssl \u662F\u4E00\u4E2A\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0Cnginx \u8981\u652F\u6301 https \u5C31\u9700\u8981\u5B83\uFF09**\r
\`yum install -y openssl openssl-devel\`\r
\r
**5. \u4E0B\u8F7D nginx \u5E76\u89E3\u538B**\r
\`wget http://nginx.org/download/nginx-1.9.9.tar.gz\`\r
\`tar -zxvf nginx-1.9.9\`\r
\r
**6. \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FFD\u52A0\u5B89\u88C5 ssl \u6A21\u5757**\r
\`./configure --with-http_ssl_module\`\r
\r
**7. \u4F7F\u7528 make \u7F16\u8BD1\u548C\u5B89\u88C5**\r
\`make && make install\`\r
\r
\`\`\`\r
\u6CE8\u610F\uFF1A\u5982\u679C\u5B89\u88C5\u540E\u51FA\u73B0\u4E00\u4E2AMake[1]: Leaving directory \`/usr/local/nginx-1.9.9\`\r
\u5E76\u4E14\u5728nginx-1.9.9\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u5DF2\u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3Anginx\u7684\u6587\u4EF6\u5939\u5373\u53EF\u5FFD\u7565\u8BE5\u9519\u8BEF~\r
\`\`\`\r
\r
**8. \u67E5\u770B nginx \u662F\u5426\u5B89\u88C5\u6210\u529F**\r
(1). \u8FDB\u5165 nginx \u6587\u4EF6\u4E0B\u7684 sbin \u76EE\u5F55\u8F93\u5165\`./nginx -v\`\u67E5\u770B\u7248\u672C\u53F7\r
(2).\u4F7F\u7528\`netstat -ntpl | grep nginx\`\u67E5\u770B\u5F53\u524D nginx \u5360\u7528\u7684\u7AEF\u53E3\u53F7\r
(3). \u4F7F\u7528\`wget 127.0.0.1\`\u6D4B\u8BD5\u8FD4\u56DE\u8868\u793A\u662F\u5426\u6B63\u5E38\r
(4). \u4F7F\u7528\`curl 127.0.0.1\`\u6D4B\u8BD5\u8FD4\u56DE\u9875\u9762\u7684\u503C\u662F\u5426\u6B63\u5E38\r
\r
**9. \u914D\u7F6E nginx \u5F00\u673A\u81EA\u542F\u52A8**\r
(1). \u8FDB\u5165\u76EE\u5F55\`cd /usr/lib/systemd/system\`\r
(2). \u521B\u5EFA nginx.service \u670D\u52A1\u6587\u4EF6\`vi nginx.service\`\r
(3). \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A\r
\r
\`\`\`/\r
[Unit]\r
Description=nginx\r
After=network.target\r
\r
[Service]\r
Type=forking\r
ExecStart=/usr/local/nginx/sbin/nginx\r
ExecReload=/usr/local/nginx/sbin/nginx reload\r
ExecStop=/usr/local/nginx/sbin/nginx quit\r
PrivateTmp=true\r
\r
[Install]\r
WantedBy=multi-user.target\r
\`\`\`\r
\r
(4). \u5F00\u673A\u81EA\u542F\u52A8\uFF1A\`systemctl enable nginx.service\`\r
(5). nginx \u670D\u52A1\u7684\u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F\uFF1A\r
\u542F\u52A8\uFF1A\`systemctl start nginx.service\`\r
\u5173\u95ED\uFF1A\`systemctl stop nginx.service\`\r
\u91CD\u542F\uFF1A\`systemctl restart nginx.service\`\r
\r
**10. \u9632\u706B\u5899\u5F00\u542F http\u3001https \u670D\u52A1\u4EE5\u53CA\u7AEF\u53E3\u76D1\u542C**\r
\u5F00\u542F http \u670D\u52A1\uFF1A\`firewall-cmd --zone=public --add-service=http --permanent\`\r
\u5F00\u542F 80 \u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --add-port=80/tcp --permanent\`\r
\u5F00\u542F https \u670D\u52A1\uFF1A\`firewall-cmd --zone=public --add-service=https --permanent\`\r
\u5F00\u542F 443 \u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --add-port=443/tcp --permanent\`\r
\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\`\r
\r
**11. nginx + \u4E00\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A**\r
(1). \u4FEE\u6539\u5B89\u88C5\u540E nginx \u6587\u4EF6\u7684 conf \u76EE\u5F55\u4E0B\u7684 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1A \`vi nginx.conf\`\r
(2). \u627E\u5230\u5E26\u6709# HTTPS Server \u7684\u5B57\u6837\uFF0C\u5C06\u5176\u4E0B\u6587\u672C\u6309\u7167\u4EE5\u4E0B\u6587\u672C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A\r
\r
\`\`\`\\\r
    # HTTPS Server\r
    #\r
    server {\r
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443\r
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D\r
\r
        ssl_certificate      cert/www/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem\r
        ssl_certificate_key  cert/www/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key\r
        ssl   on;\r
\r
        ssl_session_cache    shared:SSL:1m;\r
        ssl_session_timeout  5m;\r
\r
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\r
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\r
        ssl_prefer_server_ciphers  on;\r
\r
        location / {\r
            proxy_pass   http://127.0.0.1:8080; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
            proxy_set_header Host                               $http_addr;\r
            proxy_set_header X-Real-IP                        $remote_addr;\r
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
            root   html;\r
            index  index.html index.htm;\r
        }\r
\r
		# \u914D\u7F6E\u53E6\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528443\u7AEF\u53E3\r
		# location /test {\r
        #    proxy_pass   http://127.0.0.1:9090/test; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
        #    proxy_set_header Host                               $http_addr;\r
        #    proxy_set_header X-Real-IP                        $remote_addr;\r
        #    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
        #    root   html;\r
        #    index  index.html index.htm;\r
		# }\r
    }\r
\`\`\`\r
\r
(3). \u5C06 http \u8BF7\u6C42\u91CD\u5B9A\u5411\u4E3A https \u8BF7\u6C42\uFF0C\u5728\u539F nginx.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u4E3A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF1A\r
\r
\`\`\`/\r
	server {\r
        listen       80;\r
        server_name  www.shnice.club; #\u586B\u5199\u8BBF\u95EE\u7684\u57DF\u540D\r
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps\r
		.....\r
\`\`\`\r
\r
(4). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -t\`\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E\r
(5). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -s reload\`\u52A0\u8F7D\u914D\u7F6E\r
\r
**12\u3001nginx + \u4E8C\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A**\r
(1). \u5728 nginx \u6587\u4EF6\u5939\u4E0B\u4E0B\u521B\u5EFA vhosts \u76EE\u5F55\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A\\*.conf \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B\uFF1A\r
\r
\`\`\`/\r
# HTTP Server\r
#\r
server {\r
        listen 80;\r
        server_name localhost; #\u586B\u5199\u4F60\u8BBF\u95EE\u7684\u57DF\u540D\r
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps\r
\r
        location / {\r
            index index.html index.htm;\r
        }\r
}\r
\r
# HTTPS Server\r
#\r
server {\r
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443\r
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D\r
\r
        ssl_certificate      cert/abc/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem\r
        ssl_certificate_key  cert/abc/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key\r
        ssl   on;\r
\r
        ssl_session_cache    shared:SSL:1m;\r
        ssl_session_timeout  5m;\r
\r
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\r
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\r
        ssl_prefer_server_ciphers  on;\r
\r
        location /abc {\r
            proxy_pass   http://127.0.0.1:8080/abc; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
            proxy_set_header Host                               $http_addr;\r
            proxy_set_header X-Real-IP                        $remote_addr;\r
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
            root   html;\r
            index  index.html index.htm;\r
        }\r
}\r
\`\`\`\r
\r
(2). \u5BFC\u5165\u4E8C\u7EA7\u57DF\u540D\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u5230 nginx.conf \u4E2D\uFF1A\r
\u8FDB\u5165 conf \u76EE\u5F55\u4E0B\uFF0C\u5728 nginx.conf \u6587\u4EF6\u4E2D\u7684 http{}\u5305\u88F9\u4E2D\u5904\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A\r
\r
\`\`\`\\\r
	include /usr/local/nginx/vhosts/*;\r
\`\`\`\r
\r
(3). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -t\`\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E\r
(4). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -s reload\`\u52A0\u8F7D\u914D\u7F6E\r
`,contentRendered:`<!-- more -->
<h3 id="\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</h3>
<p><strong>1. \u521B\u5EFA jdk \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09</strong>
<code v-pre>mkdir -p usr/local/src</code>
<strong>2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D jdk \u5305</strong>
<code v-pre>wget --no-check-certificate --no-cookies --header &quot;Cookie: oraclelicense=accept-securebackup-cookie&quot; http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz</code>
<strong>3. \u89E3\u538B\uFF08\u5982\u4E0B\u64CD\u4F5C\u662F\u5DF2\u7ECF\u8DF3\u5230\u6307\u5B9A\u5B58\u653E jdk \u7684\u76EE\u5F55\u4F4D\u7F6E\uFF09</strong>
<code v-pre>tar -zxvf jdk-8u131-linux-x64.tar.gz</code>
<strong>4. \u91CD\u547D\u540D</strong>
<code v-pre>mv jdk1.8.0_131 jdk1.8</code>
<strong>5. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF</strong>
(1)\u8FDB\u5165\u7CFB\u7EDF\u6587\u4EF6\u547D\u4EE4\u5982\u4E0B\uFF1A<code v-pre>vi /etc/profile</code>
(2)\u6309\u201Cshift+g\u201D\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u6587\u672C\u672B\u5C3E\uFF0C\u518D\u6309\u201Ci\u201D\u6309\u952E\u8FDB\u884C\u7F16\u8F91\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6587\u672C(\u5199\u5B8C\u540E\uFF0C\u6309 ESC \u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\u5E76\u8F93\u5165\u201C:x\u201D\u4EE5\u4FDD\u5B58\u5E76\u9000\u51FA)\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>export JAVA_HOME=/usr/local/src/jdk1.8
export PATH=$PATH:$JAVA_HOME/bin
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. \u8BA9\u914D\u7F6E\u6587\u4EF6\u751F\u6548\uFF1A</strong><code v-pre>source /etc/profile</code>
<strong>7. \u68C0\u67E5 jdk \u662F\u5426\u914D\u7F6E\u6210\u529F\uFF1A</strong> <code v-pre>java -version</code></p>
<h3 id="\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981" aria-hidden="true">#</a> \u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09</h3>
<p><strong>1. \u521B\u5EFA tomcat \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09</strong></p>
<p><strong>2. \u4F7F\u7528 wget \u4E0B\u8F7D tomcat</strong></p>
<p><strong>3. \u89E3\u538B</strong></p>
<p><strong>4. \u542F\u52A8 tomcat</strong></p>
<p><strong>5. \u4FEE\u6539 tomcat \u7AEF\u53E3</strong></p>
<p><strong>6. \u6D4B\u8BD5\u8BBF\u95EE</strong></p>
<h3 id="\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong><em>\u6CE8\u610F\uFF1A\u9664\u4E86\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 3306 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 3306 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09</em></strong></p>
<p><strong>1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B</strong></p>
<p><strong>2. \u4E0B\u8F7D mysql \u5E76\u542F\u52A8\u670D\u52A1</strong>
(1)\u4F7F\u7528 wget \u4E0B\u8F7D mysql \u6E90\u5305\u5E76\u7528 yum \u5B89\u88C5\uFF1A
<code v-pre>\u4E0B\u8F7D\uFF1A wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm</code>
<code v-pre>\u5B89\u88C5\uFF1A yum -y localinstall mysql57-community-release-el7-11.noarch.rpm</code>
(3)\u5728\u7EBF\u5B89\u88C5 Mysql\uFF1A<code v-pre>yum -y install mysql-community-server</code>
(4)\u542F\u52A8\u670D\u52A1\uFF1A<code v-pre>systemctl start mysqld</code>
(5)\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\uFF1A
<code v-pre>systemctl enable mysqld</code>
<code v-pre>systemctl deaemon-reload</code></p>
<p><strong>3. \u4FEE\u6539\u672C\u5730\u767B\u5F55\u5BC6\u7801</strong>
(1) \u901A\u8FC7<code v-pre>vi /var/log/mysqld.log</code>\u8FDB\u5165\u8BE5\u6587\u4EF6\u4E2D\u627E\u5230\u6807\u9EC4\u8FD9\u6BB5\uFF0C\u800C\u7EA2\u8272\u5708\u4FBF\u662F\u9ED8\u8BA4\u767B\u9646\u5BC6\u7801\uFF1A
<img src="https://img-blog.csdnimg.cn/20191227220213561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0">
(2)\u901A\u8FC7\u4EE5\u4E0A\u5F97\u5230\u7684\u5BC6\u7801\u767B\u5F55\u547D\u4EE4<code v-pre>mysql -u root -p</code> \uFF0C\u5373\u53EF\u8FDB\u5165 mysql \u4E2D\u3002\u4E0B\u9762\u5219\u662F\u4FEE\u6539\u5BC6\u7801\uFF1A
<code v-pre>mysql&gt; alter user 'root'@'localhost' identified by 'Qq88888.';</code></p>
<p><strong>4. \u8BBE\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF08\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF09\uFF0C\u5F00\u542F\u8FDC\u7A0B\u767B\u5F55\u524D\u63D0\u8981\u4FDD\u8BC1\u5F00\u542F\u9632\u706B\u5899\uFF0C\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A</strong>
(1)\u5141\u8BB8\u8BE5\u8D26\u53F7\u80FD\u591F\u88AB\u8FDC\u7A0B\u767B\u5F55\uFF1A <code v-pre> mysql&gt; grant all privileges on *.* to 'root'@'%' identified by 'Qq88888.' with grant option;</code>
(2)\u67E5\u770B\u9632\u706B\u5899\u662F\u5426\u5F00\u542F\uFF1A <code v-pre>firewall-cmd --state</code>
(3)\u5F00\u542F\u9632\u706B\u5899\uFF1A <code v-pre>systemctl start firewalld.service</code> - \u5173\u95ED\u9632\u706B\u5899: <code v-pre>systemctl stop firewalld.service</code> - \u7981\u7528\u9632\u706B\u5899: <code v-pre>systemctl disable firewalld.service</code> - \u67E5\u770B\u9632\u706B\u5899\u76D1\u542C\u7684\u7AEF\u53E3: <code v-pre>firewall-cmd --list-port</code>
(4)\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=3306/tcp --permanent</code>
(5)\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code></p>
<p><strong>5. \u914D\u7F6E my.cnf</strong>
\u8FDB\u5165<code v-pre>vi /etc/my.cnf</code>\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u672C\u6587\u8FDB\u884C\u7F16\u7801\u8BBE\u7F6E\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>character_set_server=utf8
init_connect='SET NAMES utf8'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. \u91CD\u542F\u52A8 mysql</strong>
<code v-pre>systemctl restart mysqld</code></p>
<h3 id="\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong><em>\u6CE8\u610F\uFF1A\u540C\u4E0A\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 6379 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09</em></strong></p>
<p><strong>1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B</strong></p>
<p><strong>2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D redis\uFF1A</strong><code v-pre>wget http://download.redis.io/releases/redis-4.0.8.tar.gz</code></p>
<p><strong>3. \u89E3\u538B\u3001\u7F16\u8BD1\u548C\u5B89\u88C5\uFF1A</strong>
(1) \u89E3\u538B\uFF1A<code v-pre>tar -zxvf redis-4.0.8.tar.gz</code>
(2) \u5B8C\u6210\u540E\u8FDB\u5165\u89E3\u538B\u7684 redis-4.0.8 \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 make \u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF1A<code v-pre>make</code>
(3) \u5B89\u88C5\uFF1A<code v-pre>make install</code></p>
<p><strong>4. \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8</strong>
(1) \u521B\u5EFA\u65B0\u76EE\u5F55\uFF1A<code v-pre>mkdir -p /usr/local/redis</code>
(2) \u5C06/usr/local/src/redis-4.0.8/src \u76EE\u5F55\u4E0B\u7684 redis-server\u3001redis-cli \u548C/usr/local/src/redis-4.0.8 \u76EE\u5F55\u4E0B\u7684 redis.conf \u6587\u4EF6\u62F7\u8D1D\u5230\u521B\u5EFA\u7684\u76EE\u5F55\u4E2D\uFF1A
<code v-pre>cp redis-server /usr/local/redis</code>
<code v-pre>cp redis-cli /usr/local/redis</code>
<code v-pre>cp ../redis.conf /usr/local/redis</code>
(3)\u5F00\u542F\u540E\u53F0\u8FD0\u884C\uFF0C\u4FEE\u6539\u62F7\u8D1D\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF1A<code v-pre>vi /usr/local/redis/redis.conf</code></p>
<ul>
<li>\u5C06\u8424\u5149\u5B57\u4E0A\u7684\u201Cno\u201D\u8BE5\u4E3A\u201Cyes\u201D\uFF1A <img src="https://img-blog.csdnimg.cn/2019122819072660.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
</ul>
<p>(4) \u521B\u5EFA\u670D\u52A1\u6587\u4EF6 redis.service\uFF1A<code v-pre>vi /usr/lib/systemd/system/redis.service</code>
\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u4E2D\u7684\u8DEF\u5F84\u4EE5\u5B9E\u9645\u5404\u5F02\uFF09\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>	[Unit]
	Description=The redis-server Process Manager
	After=syslog.target network.target

	[Service]
	Type=simple
	PIDFile=/var/run/redis_6379.pid
	ExecStart=/usr/local/redis/redis-server /usr/local/redis/redis.conf
	ExecReload=/bin/kill -USR2 $MAINPID
	ExecStop=/bin/kill -SIGINT $MAINPID

	[Install]
	WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. \u5F00\u542F redis \u8FDC\u7A0B\u8BBF\u95EE\uFF08\u53EF\u5FFD\u7565\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF09\uFF1A</strong>
(1) \u4FEE\u6539 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A</p>
<ul>
<li>\u8BBE\u7F6E\u53EF\u8BBF\u95EE\u7684 ip\uFF1A\u4FEE\u6539\u8424\u5149\u5B57\u7684\u6587\u672C\u4E2D\u753B\u5708\u7684 ip \u5730\u5740\u8BA9\u5176\u4ED6\u53EF\u4EE5\u8BBF\u95EE
<img src="https://img-blog.csdnimg.cn/20191228214121699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
<li>\u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F\uFF1A\u5C06\u8424\u5149\u5B57\u6587\u672C\u7684\u201Cyes\u201D\u4FEE\u6539\u4E3A\u201Cno\u201D
<img src="https://img-blog.csdnimg.cn/20191228211505882.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
<li>\u8BBE\u7F6E\u5BC6\u7801\uFF1A\u6DFB\u52A0\u8424\u5149\u5B57\u7684\u6587\u672C\u6240\u793A
<img src="https://img-blog.csdnimg.cn/20191228205849892.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
</ul>
<p>(2) \u4FEE\u6539\u5B8C\u540E\u5E94\u5728 redis \u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u547D\u4EE4<code v-pre>redis-server redis.conf</code>\u6765\u68C0\u67E5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u4EA6\u53EF\u68C0\u67E5\u662F\u5426\u51FA\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u907F\u514D\u540E\u7EED\u4E0D\u5FC5\u8981\u7684\u95EE\u9898
(3) \u56E0\u4E3A\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u6240\u4EE5\u52BF\u5FC5\u8981\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u7684\u76D1\u542C\uFF1A - \u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=6379/tcp --permanent</code> - \u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code> - \u67E5\u770B\u9632\u706B\u5899\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --list-ports</code>
<strong>6. \u5F00\u542F\u670D\u52A1\u548C\u5F00\u673A\u81EA\u542F\u52A8\uFF1A</strong>
(1) \u5237\u65B0\u670D\u52A1\u914D\u7F6E\uFF1A<code v-pre>systemctl daemon-reload</code>
(2) \u5F00\u542F redis: <code v-pre>systemctl start redis</code>
(3) \u52A0\u5165\u5F00\u673A\u542F\u52A8\uFF1A<code v-pre>systemctl enable redis</code></p>
<h3 id="\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong>1. \u5B89\u88C5 gcc\uFF08gcc \u7528\u4E8E\u7F16\u8BD1\u63A5\u4E0B\u6765\u4E0B\u8F7D\u7684 nginx \u6E90\u7801\uFF09</strong>
\u4F7F\u7528<code v-pre>gcc -v</code>\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u8BE5\u547D\u4EE4\uFF0C\u5982\u672A\u5B89\u88C5\u5219\u6267\u884C<code v-pre>yum install gcc-c++</code></p>
<p><strong>2. \u5B89\u88C5 pcre \u548C pcre-devel \u4F9D\u8D56\uFF08nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002\uFF09</strong>
<code v-pre>yum install -y pcre pcre-devel</code></p>
<p><strong>3. \u5B89\u88C5 zlib zlib-devel \u4F9D\u8D56\uFF08zlib \u63D0\u4F9B\u4E86\u5F88\u591A\u538B\u7F29\u548C\u89E3\u65B9\u5F0F\uFF0Cnginx \u9700\u8981 zlib \u5BF9 http \u8FDB\u884C gzip\uFF09</strong>
<code v-pre>yum install -y zlib zlib-devel</code></p>
<p><strong>4. \u5B89\u88C5 openssl openssl-devel\uFF08openssl \u662F\u4E00\u4E2A\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0Cnginx \u8981\u652F\u6301 https \u5C31\u9700\u8981\u5B83\uFF09</strong>
<code v-pre>yum install -y openssl openssl-devel</code></p>
<p><strong>5. \u4E0B\u8F7D nginx \u5E76\u89E3\u538B</strong>
<code v-pre>wget http://nginx.org/download/nginx-1.9.9.tar.gz</code>
<code v-pre>tar -zxvf nginx-1.9.9</code></p>
<p><strong>6. \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FFD\u52A0\u5B89\u88C5 ssl \u6A21\u5757</strong>
<code v-pre>./configure --with-http_ssl_module</code></p>
<p><strong>7. \u4F7F\u7528 make \u7F16\u8BD1\u548C\u5B89\u88C5</strong>
<code v-pre>make &amp;&amp; make install</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>\u6CE8\u610F\uFF1A\u5982\u679C\u5B89\u88C5\u540E\u51FA\u73B0\u4E00\u4E2AMake[1]: Leaving directory \`/usr/local/nginx-1.9.9\`
\u5E76\u4E14\u5728nginx-1.9.9\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u5DF2\u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3Anginx\u7684\u6587\u4EF6\u5939\u5373\u53EF\u5FFD\u7565\u8BE5\u9519\u8BEF~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>8. \u67E5\u770B nginx \u662F\u5426\u5B89\u88C5\u6210\u529F</strong>
(1). \u8FDB\u5165 nginx \u6587\u4EF6\u4E0B\u7684 sbin \u76EE\u5F55\u8F93\u5165<code v-pre>./nginx -v</code>\u67E5\u770B\u7248\u672C\u53F7
(2).\u4F7F\u7528<code v-pre>netstat -ntpl | grep nginx</code>\u67E5\u770B\u5F53\u524D nginx \u5360\u7528\u7684\u7AEF\u53E3\u53F7
(3). \u4F7F\u7528<code v-pre>wget 127.0.0.1</code>\u6D4B\u8BD5\u8FD4\u56DE\u8868\u793A\u662F\u5426\u6B63\u5E38
(4). \u4F7F\u7528<code v-pre>curl 127.0.0.1</code>\u6D4B\u8BD5\u8FD4\u56DE\u9875\u9762\u7684\u503C\u662F\u5426\u6B63\u5E38</p>
<p><strong>9. \u914D\u7F6E nginx \u5F00\u673A\u81EA\u542F\u52A8</strong>
(1). \u8FDB\u5165\u76EE\u5F55<code v-pre>cd /usr/lib/systemd/system</code>
(2). \u521B\u5EFA nginx.service \u670D\u52A1\u6587\u4EF6<code v-pre>vi nginx.service</code>
(3). \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>[Unit]
Description=nginx
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx reload
ExecStop=/usr/local/nginx/sbin/nginx quit
PrivateTmp=true

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4). \u5F00\u673A\u81EA\u542F\u52A8\uFF1A<code v-pre>systemctl enable nginx.service</code>
(5). nginx \u670D\u52A1\u7684\u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F\uFF1A
\u542F\u52A8\uFF1A<code v-pre>systemctl start nginx.service</code>
\u5173\u95ED\uFF1A<code v-pre>systemctl stop nginx.service</code>
\u91CD\u542F\uFF1A<code v-pre>systemctl restart nginx.service</code></p>
<p><strong>10. \u9632\u706B\u5899\u5F00\u542F http\u3001https \u670D\u52A1\u4EE5\u53CA\u7AEF\u53E3\u76D1\u542C</strong>
\u5F00\u542F http \u670D\u52A1\uFF1A<code v-pre>firewall-cmd --zone=public --add-service=http --permanent</code>
\u5F00\u542F 80 \u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=80/tcp --permanent</code>
\u5F00\u542F https \u670D\u52A1\uFF1A<code v-pre>firewall-cmd --zone=public --add-service=https --permanent</code>
\u5F00\u542F 443 \u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=443/tcp --permanent</code>
\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code></p>
<p><strong>11. nginx + \u4E00\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A</strong>
(1). \u4FEE\u6539\u5B89\u88C5\u540E nginx \u6587\u4EF6\u7684 conf \u76EE\u5F55\u4E0B\u7684 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1A <code v-pre>vi nginx.conf</code>
(2). \u627E\u5230\u5E26\u6709# HTTPS Server \u7684\u5B57\u6837\uFF0C\u5C06\u5176\u4E0B\u6587\u672C\u6309\u7167\u4EE5\u4E0B\u6587\u672C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A</p>
<div class="language-\\ ext-\\ line-numbers-mode"><pre v-pre class="language-\\"><code>    # HTTPS Server
    #
    server {
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D

        ssl_certificate      cert/www/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem
        ssl_certificate_key  cert/www/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key
        ssl   on;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

        location / {
            proxy_pass   http://127.0.0.1:8080; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
            proxy_set_header Host                               $http_addr;
            proxy_set_header X-Real-IP                        $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            root   html;
            index  index.html index.htm;
        }

		# \u914D\u7F6E\u53E6\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528443\u7AEF\u53E3
		# location /test {
        #    proxy_pass   http://127.0.0.1:9090/test; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
        #    proxy_set_header Host                               $http_addr;
        #    proxy_set_header X-Real-IP                        $remote_addr;
        #    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        #    root   html;
        #    index  index.html index.htm;
		# }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3). \u5C06 http \u8BF7\u6C42\u91CD\u5B9A\u5411\u4E3A https \u8BF7\u6C42\uFF0C\u5728\u539F nginx.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u4E3A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>	server {
        listen       80;
        server_name  www.shnice.club; #\u586B\u5199\u8BBF\u95EE\u7684\u57DF\u540D
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps
		.....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -t</code>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E
(5). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -s reload</code>\u52A0\u8F7D\u914D\u7F6E</p>
<p><strong>12\u3001nginx + \u4E8C\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A</strong>
(1). \u5728 nginx \u6587\u4EF6\u5939\u4E0B\u4E0B\u521B\u5EFA vhosts \u76EE\u5F55\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A*.conf \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code># HTTP Server
#
server {
        listen 80;
        server_name localhost; #\u586B\u5199\u4F60\u8BBF\u95EE\u7684\u57DF\u540D
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps

        location / {
            index index.html index.htm;
        }
}

# HTTPS Server
#
server {
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D

        ssl_certificate      cert/abc/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem
        ssl_certificate_key  cert/abc/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key
        ssl   on;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

        location /abc {
            proxy_pass   http://127.0.0.1:8080/abc; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
            proxy_set_header Host                               $http_addr;
            proxy_set_header X-Real-IP                        $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            root   html;
            index  index.html index.htm;
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2). \u5BFC\u5165\u4E8C\u7EA7\u57DF\u540D\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u5230 nginx.conf \u4E2D\uFF1A
\u8FDB\u5165 conf \u76EE\u5F55\u4E0B\uFF0C\u5728 nginx.conf \u6587\u4EF6\u4E2D\u7684 http{}\u5305\u88F9\u4E2D\u5904\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="language-\\ ext-\\ line-numbers-mode"><pre v-pre class="language-\\"><code>	include /usr/local/nginx/vhosts/*;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -t</code>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E
(4). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -s reload</code>\u52A0\u8F7D\u914D\u7F6E</p>
`,date:"2022-07-12",deps:[],hoistedTags:[],links:[],pathInferred:"/20220711/2.html",pathLocale:"/",permalink:null,routeMeta:{title:"Centos7\u73AF\u5883\u642D\u5EFA"},slug:"2",filePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/20220711/2.md",filePathRelative:"20220711/2.md",componentFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/2.html.vue",componentFilePathRelative:"pages/20220711/2.html.vue",componentFileChunkName:"v-e5cc5690",dataFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/2.html.js",dataFilePathRelative:"pages/20220711/2.html.js",dataFileChunkName:"v-e5cc5690",htmlFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/dist/20220711/2.html",htmlFilePathRelative:"20220711/2.html"}]},"/categories/Vscode/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"categories",currentClassificationValue:"Vscode",pages:[{data:{key:"v-e262a552",path:"/20220711/3.html",title:"vscode\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5",lang:"zh-CN",frontmatter:{title:"vscode\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5",date:"2022-07-12 17:55:44",author:"sihaolin",categories:["Vscode"]},excerpt:"",headers:[],git:{},filePathRelative:"20220711/3.md"},key:"v-e262a552",path:"/20220711/3.html",title:"vscode\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5",lang:"zh-CN",frontmatter:{title:"vscode\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5",date:"2022-07-12 17:55:44",author:"sihaolin",categories:["Vscode"]},excerpt:"",headers:[],content:`\r
<!-- more -->\r
\r
::: details \u521B\u5EFA\u4EE3\u7801\u7247\u6BB5\uFF1Amarkdown \u7684\u5143\u4FE1\u606F\r
\r
\`\`\`json\r
{\r
    "Print blog meta": {\r
        "prefix": "blogmeta",\r
        "body": [\r
            "---",\r
            "title: \${1:$TM_FILENAME_BASE}",\r
            "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND",\r
            "author: \${2:sihaolin}",\r
            "tags:",\r
            "  - $3",\r
            "---",\r
            "\\r"\r
        ],\r
        "description": "\u751F\u6210\u535A\u5BA2\u5143\u4FE1\u606F"\r
    }\r
}\r
\`\`\`\r
\r
:::\r
\r
::: details \u521B\u5EFA\u4EE3\u7801\u7247\u6BB5\uFF1A\u83B7\u53D6\u5F53\u524D\u65E5\u671F\u65F6\u95F4\r
\r
\`\`\`json\r
{\r
    "Print blog meta": {\r
        "prefix": "nowdate",\r
        "body": [\r
            "'$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND'"\r
        ],\r
        "description": "\u751F\u6210\u5F53\u524D\u65E5\u671F\u65F6\u95F4"\r
    }\r
}\r
\`\`\`\r
\r
:::\r
\r
\u6700\u540E\uFF0C\u5728 setting.json \u6587\u4EF6\u6DFB\u52A0\u4E0B\u9762\u914D\u7F6E\r
\r
\`\`\`json\r
{\r
    "[markdown]": {\r
        "editor.quickSuggestions": true\r
    }\r
}\r
\`\`\`\r
`,contentRendered:`<!-- more -->
<details class="custom-container details"><summary class="custom-container-title">\u521B\u5EFA\u4EE3\u7801\u7247\u6BB5\uFF1Amarkdown</summary><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"Print blog meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"prefix"</span><span class="token operator">:</span> <span class="token string">"blogmeta"</span><span class="token punctuation">,</span>
        <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"---"</span><span class="token punctuation">,</span>
            <span class="token string">"title: \${1:$TM_FILENAME_BASE}"</span><span class="token punctuation">,</span>
            <span class="token string">"date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND"</span><span class="token punctuation">,</span>
            <span class="token string">"author: \${2:sihaolin}"</span><span class="token punctuation">,</span>
            <span class="token string">"tags:"</span><span class="token punctuation">,</span>
            <span class="token string">"  - $3"</span><span class="token punctuation">,</span>
            <span class="token string">"---"</span><span class="token punctuation">,</span>
            <span class="token string">"\\r"</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"\u751F\u6210\u535A\u5BA2\u5143\u4FE1\u606F"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary class="custom-container-title">\u521B\u5EFA\u4EE3\u7801\u7247\u6BB5\uFF1A\u83B7\u53D6\u5F53\u524D\u65E5\u671F\u65F6\u95F4</summary><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"Print blog meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"prefix"</span><span class="token operator">:</span> <span class="token string">"nowdate"</span><span class="token punctuation">,</span>
        <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"'$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND'"</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"\u751F\u6210\u5F53\u524D\u65E5\u671F\u65F6\u95F4"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>\u6700\u540E\uFF0C\u5728 setting.json \u6587\u4EF6\u6DFB\u52A0\u4E0B\u9762\u914D\u7F6E</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"[markdown]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"editor.quickSuggestions"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-07-12",deps:[],hoistedTags:[],links:[],pathInferred:"/20220711/3.html",pathLocale:"/",permalink:null,routeMeta:{title:"vscode\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5"},slug:"3",filePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/20220711/3.md",filePathRelative:"20220711/3.md",componentFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/3.html.vue",componentFilePathRelative:"pages/20220711/3.html.vue",componentFileChunkName:"v-e262a552",dataFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/3.html.js",dataFilePathRelative:"pages/20220711/3.html.js",dataFileChunkName:"v-e262a552",htmlFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/dist/20220711/3.html",htmlFilePathRelative:"20220711/3.html"}]},"/tags/vuepress/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"tags",currentClassificationValue:"vuepress",pages:[{data:{key:"v-e93607ce",path:"/20220711/1.html",title:"Vuepress\u4F7F\u7528\u6307\u5357(reco)",lang:"zh-CN",frontmatter:{title:"Vuepress\u4F7F\u7528\u6307\u5357(reco)",date:"2022-07-12 17:55:44",sidebar:"auto",tags:["vuepress"],publish:!0},excerpt:"",headers:[{level:3,title:"markdown \u6B63\u6587",slug:"markdown-\u6B63\u6587",children:[]}],git:{},filePathRelative:"20220711/1.md"},key:"v-e93607ce",path:"/20220711/1.html",title:"Vuepress\u4F7F\u7528\u6307\u5357(reco)",lang:"zh-CN",frontmatter:{title:"Vuepress\u4F7F\u7528\u6307\u5357(reco)",date:"2022-07-12 17:55:44",sidebar:"auto",tags:["vuepress"],publish:!0},excerpt:"",headers:[{level:3,title:"markdown \u6B63\u6587",slug:"markdown-\u6B63\u6587",children:[]}],content:`\r
<!-- more -->\r
\r
### markdown \u6B63\u6587\r
\r
::: tip\r
Vuepress \u662F Vue \u4F5C\u8005\u5C24\u96E8\u6EAA\u5F00\u53D1\u7684\u6587\u6863\u5DE5\u5177\uFF0C\u672C\u6587\u91C7\u7528 Vuepress \u7684 reco \u4E3B\u9898\u8FDB\u884C\u76F8\u5173\u914D\u7F6E\u8BF4\u660E\r
:::\r
`,contentRendered:`<!-- more -->
<h3 id="markdown-\u6B63\u6587" tabindex="-1"><a class="header-anchor" href="#markdown-\u6B63\u6587" aria-hidden="true">#</a> markdown \u6B63\u6587</h3>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>Vuepress \u662F Vue \u4F5C\u8005\u5C24\u96E8\u6EAA\u5F00\u53D1\u7684\u6587\u6863\u5DE5\u5177\uFF0C\u672C\u6587\u91C7\u7528 Vuepress \u7684 reco \u4E3B\u9898\u8FDB\u884C\u76F8\u5173\u914D\u7F6E\u8BF4\u660E</p>
</div>`,date:"2022-07-12",deps:[],hoistedTags:[],links:[],pathInferred:"/20220711/1.html",pathLocale:"/",permalink:null,routeMeta:{title:"Vuepress\u4F7F\u7528\u6307\u5357(reco)"},slug:"1",filePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/20220711/1.md",filePathRelative:"20220711/1.md",componentFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/1.html.vue",componentFilePathRelative:"pages/20220711/1.html.vue",componentFileChunkName:"v-e93607ce",dataFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/1.html.js",dataFilePathRelative:"pages/20220711/1.html.js",dataFileChunkName:"v-e93607ce",htmlFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/dist/20220711/1.html",htmlFilePathRelative:"20220711/1.html"}]},"/tags/java/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"tags",currentClassificationValue:"java",pages:[{data:{key:"v-e5cc5690",path:"/20220711/2.html",title:"Centos7\u73AF\u5883\u642D\u5EFA",lang:"zh-CN",frontmatter:{title:"Centos7\u73AF\u5883\u642D\u5EFA",date:"2022-07-12 17:55:44",sidebar:"auto",categories:["Linux"],tags:["java","mysql","redis"],publish:!0},excerpt:"",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],git:{},filePathRelative:"20220711/2.md"},key:"v-e5cc5690",path:"/20220711/2.html",title:"Centos7\u73AF\u5883\u642D\u5EFA",lang:"zh-CN",frontmatter:{title:"Centos7\u73AF\u5883\u642D\u5EFA",date:"2022-07-12 17:55:44",sidebar:"auto",categories:["Linux"],tags:["java","mysql","redis"],publish:!0},excerpt:"",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],content:`\r
<!-- more -->\r
\r
### \u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\r
\r
**1. \u521B\u5EFA jdk \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09**\r
\`mkdir -p usr/local/src\`\r
**2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D jdk \u5305**\r
\`wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz\`\r
**3. \u89E3\u538B\uFF08\u5982\u4E0B\u64CD\u4F5C\u662F\u5DF2\u7ECF\u8DF3\u5230\u6307\u5B9A\u5B58\u653E jdk \u7684\u76EE\u5F55\u4F4D\u7F6E\uFF09**\r
\`tar -zxvf jdk-8u131-linux-x64.tar.gz\`\r
**4. \u91CD\u547D\u540D**\r
\`mv jdk1.8.0_131 jdk1.8\`\r
**5. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF**\r
(1)\u8FDB\u5165\u7CFB\u7EDF\u6587\u4EF6\u547D\u4EE4\u5982\u4E0B\uFF1A\`vi /etc/profile\`\r
(2)\u6309\u201Cshift+g\u201D\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u6587\u672C\u672B\u5C3E\uFF0C\u518D\u6309\u201Ci\u201D\u6309\u952E\u8FDB\u884C\u7F16\u8F91\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6587\u672C(\u5199\u5B8C\u540E\uFF0C\u6309 ESC \u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\u5E76\u8F93\u5165\u201C:x\u201D\u4EE5\u4FDD\u5B58\u5E76\u9000\u51FA)\uFF1A\r
\r
\`\`\`/\r
export JAVA_HOME=/usr/local/src/jdk1.8\r
export PATH=$PATH:$JAVA_HOME/bin\r
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar\r
\`\`\`\r
\r
**6. \u8BA9\u914D\u7F6E\u6587\u4EF6\u751F\u6548\uFF1A**\`source /etc/profile\`\r
**7. \u68C0\u67E5 jdk \u662F\u5426\u914D\u7F6E\u6210\u529F\uFF1A** \`java -version\`\r
\r
### \u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09\r
\r
**1. \u521B\u5EFA tomcat \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09**\r
\r
**2. \u4F7F\u7528 wget \u4E0B\u8F7D tomcat**\r
\r
**3. \u89E3\u538B**\r
\r
**4. \u542F\u52A8 tomcat**\r
\r
**5. \u4FEE\u6539 tomcat \u7AEF\u53E3**\r
\r
**6. \u6D4B\u8BD5\u8BBF\u95EE**\r
\r
### \u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**_\u6CE8\u610F\uFF1A\u9664\u4E86\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 3306 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 3306 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09_**\r
\r
**1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B**\r
\r
**2. \u4E0B\u8F7D mysql \u5E76\u542F\u52A8\u670D\u52A1**\r
(1)\u4F7F\u7528 wget \u4E0B\u8F7D mysql \u6E90\u5305\u5E76\u7528 yum \u5B89\u88C5\uFF1A\r
\`\u4E0B\u8F7D\uFF1A wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm\`\r
\`\u5B89\u88C5\uFF1A yum -y localinstall mysql57-community-release-el7-11.noarch.rpm\`\r
(3)\u5728\u7EBF\u5B89\u88C5 Mysql\uFF1A\`yum -y install mysql-community-server\`\r
(4)\u542F\u52A8\u670D\u52A1\uFF1A\`systemctl start mysqld\`\r
(5)\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\uFF1A\r
\`systemctl enable mysqld\`\r
\`systemctl deaemon-reload\`\r
\r
**3. \u4FEE\u6539\u672C\u5730\u767B\u5F55\u5BC6\u7801**\r
(1) \u901A\u8FC7\`vi /var/log/mysqld.log\`\u8FDB\u5165\u8BE5\u6587\u4EF6\u4E2D\u627E\u5230\u6807\u9EC4\u8FD9\u6BB5\uFF0C\u800C\u7EA2\u8272\u5708\u4FBF\u662F\u9ED8\u8BA4\u767B\u9646\u5BC6\u7801\uFF1A\r
![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191227220213561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70)\r
(2)\u901A\u8FC7\u4EE5\u4E0A\u5F97\u5230\u7684\u5BC6\u7801\u767B\u5F55\u547D\u4EE4\`mysql -u root -p\` \uFF0C\u5373\u53EF\u8FDB\u5165 mysql \u4E2D\u3002\u4E0B\u9762\u5219\u662F\u4FEE\u6539\u5BC6\u7801\uFF1A\r
\`mysql> alter user 'root'@'localhost' identified by 'Qq88888.';\`\r
\r
**4. \u8BBE\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF08\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF09\uFF0C\u5F00\u542F\u8FDC\u7A0B\u767B\u5F55\u524D\u63D0\u8981\u4FDD\u8BC1\u5F00\u542F\u9632\u706B\u5899\uFF0C\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A**\r
(1)\u5141\u8BB8\u8BE5\u8D26\u53F7\u80FD\u591F\u88AB\u8FDC\u7A0B\u767B\u5F55\uFF1A \` mysql> grant all privileges on *.* to 'root'@'%' identified by 'Qq88888.' with grant option;\`\r
(2)\u67E5\u770B\u9632\u706B\u5899\u662F\u5426\u5F00\u542F\uFF1A \`firewall-cmd --state\`\r
(3)\u5F00\u542F\u9632\u706B\u5899\uFF1A \`systemctl start firewalld.service\` - \u5173\u95ED\u9632\u706B\u5899: \`systemctl stop firewalld.service\` - \u7981\u7528\u9632\u706B\u5899: \`systemctl disable firewalld.service\` - \u67E5\u770B\u9632\u706B\u5899\u76D1\u542C\u7684\u7AEF\u53E3: \`firewall-cmd --list-port\`\r
(4)\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A\`firewall-cmd --zone=public --add-port=3306/tcp --permanent\`\r
(5)\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\`\r
\r
**5. \u914D\u7F6E my.cnf**\r
\u8FDB\u5165\`vi /etc/my.cnf\`\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u672C\u6587\u8FDB\u884C\u7F16\u7801\u8BBE\u7F6E\uFF1A\r
\r
\`\`\`/\r
character_set_server=utf8\r
init_connect='SET NAMES utf8'\r
\`\`\`\r
\r
**6. \u91CD\u542F\u52A8 mysql**\r
\`systemctl restart mysqld\`\r
\r
### \u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**_\u6CE8\u610F\uFF1A\u540C\u4E0A\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 6379 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09_**\r
\r
**1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B**\r
\r
**2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D redis\uFF1A**\`wget http://download.redis.io/releases/redis-4.0.8.tar.gz\`\r
\r
**3. \u89E3\u538B\u3001\u7F16\u8BD1\u548C\u5B89\u88C5\uFF1A**\r
(1) \u89E3\u538B\uFF1A\`tar -zxvf redis-4.0.8.tar.gz\`\r
(2) \u5B8C\u6210\u540E\u8FDB\u5165\u89E3\u538B\u7684 redis-4.0.8 \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 make \u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF1A\`make\`\r
(3) \u5B89\u88C5\uFF1A\`make install\`\r
\r
**4. \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8**\r
(1) \u521B\u5EFA\u65B0\u76EE\u5F55\uFF1A\`mkdir -p /usr/local/redis\`\r
(2) \u5C06/usr/local/src/redis-4.0.8/src \u76EE\u5F55\u4E0B\u7684 redis-server\u3001redis-cli \u548C/usr/local/src/redis-4.0.8 \u76EE\u5F55\u4E0B\u7684 redis.conf \u6587\u4EF6\u62F7\u8D1D\u5230\u521B\u5EFA\u7684\u76EE\u5F55\u4E2D\uFF1A\r
\`cp redis-server /usr/local/redis\`\r
\`cp redis-cli /usr/local/redis\`\r
\`cp ../redis.conf /usr/local/redis\`\r
(3)\u5F00\u542F\u540E\u53F0\u8FD0\u884C\uFF0C\u4FEE\u6539\u62F7\u8D1D\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF1A\`vi /usr/local/redis/redis.conf\`\r
\r
-   \u5C06\u8424\u5149\u5B57\u4E0A\u7684\u201Cno\u201D\u8BE5\u4E3A\u201Cyes\u201D\uFF1A ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/2019122819072660.png)\r
\r
(4) \u521B\u5EFA\u670D\u52A1\u6587\u4EF6 redis.service\uFF1A\`vi /usr/lib/systemd/system/redis.service\`\r
\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u4E2D\u7684\u8DEF\u5F84\u4EE5\u5B9E\u9645\u5404\u5F02\uFF09\uFF1A\r
\r
\`\`\`/\r
	[Unit]\r
	Description=The redis-server Process Manager\r
	After=syslog.target network.target\r
\r
	[Service]\r
	Type=simple\r
	PIDFile=/var/run/redis_6379.pid\r
	ExecStart=/usr/local/redis/redis-server /usr/local/redis/redis.conf\r
	ExecReload=/bin/kill -USR2 $MAINPID\r
	ExecStop=/bin/kill -SIGINT $MAINPID\r
\r
	[Install]\r
	WantedBy=multi-user.target\r
\`\`\`\r
\r
**5. \u5F00\u542F redis \u8FDC\u7A0B\u8BBF\u95EE\uFF08\u53EF\u5FFD\u7565\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF09\uFF1A**\r
(1) \u4FEE\u6539 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A\r
\r
-   \u8BBE\u7F6E\u53EF\u8BBF\u95EE\u7684 ip\uFF1A\u4FEE\u6539\u8424\u5149\u5B57\u7684\u6587\u672C\u4E2D\u753B\u5708\u7684 ip \u5730\u5740\u8BA9\u5176\u4ED6\u53EF\u4EE5\u8BBF\u95EE\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228214121699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70)\r
-   \u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F\uFF1A\u5C06\u8424\u5149\u5B57\u6587\u672C\u7684\u201Cyes\u201D\u4FEE\u6539\u4E3A\u201Cno\u201D\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228211505882.png)\r
-   \u8BBE\u7F6E\u5BC6\u7801\uFF1A\u6DFB\u52A0\u8424\u5149\u5B57\u7684\u6587\u672C\u6240\u793A\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228205849892.png)\r
\r
(2) \u4FEE\u6539\u5B8C\u540E\u5E94\u5728 redis \u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u547D\u4EE4\`redis-server redis.conf\`\u6765\u68C0\u67E5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u4EA6\u53EF\u68C0\u67E5\u662F\u5426\u51FA\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u907F\u514D\u540E\u7EED\u4E0D\u5FC5\u8981\u7684\u95EE\u9898\r
(3) \u56E0\u4E3A\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u6240\u4EE5\u52BF\u5FC5\u8981\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u7684\u76D1\u542C\uFF1A - \u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A\`firewall-cmd --zone=public --add-port=6379/tcp --permanent\` - \u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\` - \u67E5\u770B\u9632\u706B\u5899\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --list-ports\`\r
**6. \u5F00\u542F\u670D\u52A1\u548C\u5F00\u673A\u81EA\u542F\u52A8\uFF1A**\r
(1) \u5237\u65B0\u670D\u52A1\u914D\u7F6E\uFF1A\`systemctl daemon-reload\`\r
(2) \u5F00\u542F redis: \`systemctl start redis\`\r
(3) \u52A0\u5165\u5F00\u673A\u542F\u52A8\uFF1A\`systemctl enable redis\`\r
\r
### \u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**1. \u5B89\u88C5 gcc\uFF08gcc \u7528\u4E8E\u7F16\u8BD1\u63A5\u4E0B\u6765\u4E0B\u8F7D\u7684 nginx \u6E90\u7801\uFF09**\r
\u4F7F\u7528\`gcc -v\`\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u8BE5\u547D\u4EE4\uFF0C\u5982\u672A\u5B89\u88C5\u5219\u6267\u884C\`yum install gcc-c++\`\r
\r
**2. \u5B89\u88C5 pcre \u548C pcre-devel \u4F9D\u8D56\uFF08nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002\uFF09**\r
\`yum install -y pcre pcre-devel\`\r
\r
**3. \u5B89\u88C5 zlib zlib-devel \u4F9D\u8D56\uFF08zlib \u63D0\u4F9B\u4E86\u5F88\u591A\u538B\u7F29\u548C\u89E3\u65B9\u5F0F\uFF0Cnginx \u9700\u8981 zlib \u5BF9 http \u8FDB\u884C gzip\uFF09**\r
\`yum install -y zlib zlib-devel\`\r
\r
**4. \u5B89\u88C5 openssl openssl-devel\uFF08openssl \u662F\u4E00\u4E2A\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0Cnginx \u8981\u652F\u6301 https \u5C31\u9700\u8981\u5B83\uFF09**\r
\`yum install -y openssl openssl-devel\`\r
\r
**5. \u4E0B\u8F7D nginx \u5E76\u89E3\u538B**\r
\`wget http://nginx.org/download/nginx-1.9.9.tar.gz\`\r
\`tar -zxvf nginx-1.9.9\`\r
\r
**6. \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FFD\u52A0\u5B89\u88C5 ssl \u6A21\u5757**\r
\`./configure --with-http_ssl_module\`\r
\r
**7. \u4F7F\u7528 make \u7F16\u8BD1\u548C\u5B89\u88C5**\r
\`make && make install\`\r
\r
\`\`\`\r
\u6CE8\u610F\uFF1A\u5982\u679C\u5B89\u88C5\u540E\u51FA\u73B0\u4E00\u4E2AMake[1]: Leaving directory \`/usr/local/nginx-1.9.9\`\r
\u5E76\u4E14\u5728nginx-1.9.9\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u5DF2\u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3Anginx\u7684\u6587\u4EF6\u5939\u5373\u53EF\u5FFD\u7565\u8BE5\u9519\u8BEF~\r
\`\`\`\r
\r
**8. \u67E5\u770B nginx \u662F\u5426\u5B89\u88C5\u6210\u529F**\r
(1). \u8FDB\u5165 nginx \u6587\u4EF6\u4E0B\u7684 sbin \u76EE\u5F55\u8F93\u5165\`./nginx -v\`\u67E5\u770B\u7248\u672C\u53F7\r
(2).\u4F7F\u7528\`netstat -ntpl | grep nginx\`\u67E5\u770B\u5F53\u524D nginx \u5360\u7528\u7684\u7AEF\u53E3\u53F7\r
(3). \u4F7F\u7528\`wget 127.0.0.1\`\u6D4B\u8BD5\u8FD4\u56DE\u8868\u793A\u662F\u5426\u6B63\u5E38\r
(4). \u4F7F\u7528\`curl 127.0.0.1\`\u6D4B\u8BD5\u8FD4\u56DE\u9875\u9762\u7684\u503C\u662F\u5426\u6B63\u5E38\r
\r
**9. \u914D\u7F6E nginx \u5F00\u673A\u81EA\u542F\u52A8**\r
(1). \u8FDB\u5165\u76EE\u5F55\`cd /usr/lib/systemd/system\`\r
(2). \u521B\u5EFA nginx.service \u670D\u52A1\u6587\u4EF6\`vi nginx.service\`\r
(3). \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A\r
\r
\`\`\`/\r
[Unit]\r
Description=nginx\r
After=network.target\r
\r
[Service]\r
Type=forking\r
ExecStart=/usr/local/nginx/sbin/nginx\r
ExecReload=/usr/local/nginx/sbin/nginx reload\r
ExecStop=/usr/local/nginx/sbin/nginx quit\r
PrivateTmp=true\r
\r
[Install]\r
WantedBy=multi-user.target\r
\`\`\`\r
\r
(4). \u5F00\u673A\u81EA\u542F\u52A8\uFF1A\`systemctl enable nginx.service\`\r
(5). nginx \u670D\u52A1\u7684\u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F\uFF1A\r
\u542F\u52A8\uFF1A\`systemctl start nginx.service\`\r
\u5173\u95ED\uFF1A\`systemctl stop nginx.service\`\r
\u91CD\u542F\uFF1A\`systemctl restart nginx.service\`\r
\r
**10. \u9632\u706B\u5899\u5F00\u542F http\u3001https \u670D\u52A1\u4EE5\u53CA\u7AEF\u53E3\u76D1\u542C**\r
\u5F00\u542F http \u670D\u52A1\uFF1A\`firewall-cmd --zone=public --add-service=http --permanent\`\r
\u5F00\u542F 80 \u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --add-port=80/tcp --permanent\`\r
\u5F00\u542F https \u670D\u52A1\uFF1A\`firewall-cmd --zone=public --add-service=https --permanent\`\r
\u5F00\u542F 443 \u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --add-port=443/tcp --permanent\`\r
\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\`\r
\r
**11. nginx + \u4E00\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A**\r
(1). \u4FEE\u6539\u5B89\u88C5\u540E nginx \u6587\u4EF6\u7684 conf \u76EE\u5F55\u4E0B\u7684 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1A \`vi nginx.conf\`\r
(2). \u627E\u5230\u5E26\u6709# HTTPS Server \u7684\u5B57\u6837\uFF0C\u5C06\u5176\u4E0B\u6587\u672C\u6309\u7167\u4EE5\u4E0B\u6587\u672C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A\r
\r
\`\`\`\\\r
    # HTTPS Server\r
    #\r
    server {\r
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443\r
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D\r
\r
        ssl_certificate      cert/www/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem\r
        ssl_certificate_key  cert/www/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key\r
        ssl   on;\r
\r
        ssl_session_cache    shared:SSL:1m;\r
        ssl_session_timeout  5m;\r
\r
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\r
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\r
        ssl_prefer_server_ciphers  on;\r
\r
        location / {\r
            proxy_pass   http://127.0.0.1:8080; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
            proxy_set_header Host                               $http_addr;\r
            proxy_set_header X-Real-IP                        $remote_addr;\r
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
            root   html;\r
            index  index.html index.htm;\r
        }\r
\r
		# \u914D\u7F6E\u53E6\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528443\u7AEF\u53E3\r
		# location /test {\r
        #    proxy_pass   http://127.0.0.1:9090/test; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
        #    proxy_set_header Host                               $http_addr;\r
        #    proxy_set_header X-Real-IP                        $remote_addr;\r
        #    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
        #    root   html;\r
        #    index  index.html index.htm;\r
		# }\r
    }\r
\`\`\`\r
\r
(3). \u5C06 http \u8BF7\u6C42\u91CD\u5B9A\u5411\u4E3A https \u8BF7\u6C42\uFF0C\u5728\u539F nginx.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u4E3A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF1A\r
\r
\`\`\`/\r
	server {\r
        listen       80;\r
        server_name  www.shnice.club; #\u586B\u5199\u8BBF\u95EE\u7684\u57DF\u540D\r
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps\r
		.....\r
\`\`\`\r
\r
(4). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -t\`\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E\r
(5). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -s reload\`\u52A0\u8F7D\u914D\u7F6E\r
\r
**12\u3001nginx + \u4E8C\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A**\r
(1). \u5728 nginx \u6587\u4EF6\u5939\u4E0B\u4E0B\u521B\u5EFA vhosts \u76EE\u5F55\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A\\*.conf \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B\uFF1A\r
\r
\`\`\`/\r
# HTTP Server\r
#\r
server {\r
        listen 80;\r
        server_name localhost; #\u586B\u5199\u4F60\u8BBF\u95EE\u7684\u57DF\u540D\r
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps\r
\r
        location / {\r
            index index.html index.htm;\r
        }\r
}\r
\r
# HTTPS Server\r
#\r
server {\r
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443\r
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D\r
\r
        ssl_certificate      cert/abc/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem\r
        ssl_certificate_key  cert/abc/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key\r
        ssl   on;\r
\r
        ssl_session_cache    shared:SSL:1m;\r
        ssl_session_timeout  5m;\r
\r
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\r
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\r
        ssl_prefer_server_ciphers  on;\r
\r
        location /abc {\r
            proxy_pass   http://127.0.0.1:8080/abc; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
            proxy_set_header Host                               $http_addr;\r
            proxy_set_header X-Real-IP                        $remote_addr;\r
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
            root   html;\r
            index  index.html index.htm;\r
        }\r
}\r
\`\`\`\r
\r
(2). \u5BFC\u5165\u4E8C\u7EA7\u57DF\u540D\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u5230 nginx.conf \u4E2D\uFF1A\r
\u8FDB\u5165 conf \u76EE\u5F55\u4E0B\uFF0C\u5728 nginx.conf \u6587\u4EF6\u4E2D\u7684 http{}\u5305\u88F9\u4E2D\u5904\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A\r
\r
\`\`\`\\\r
	include /usr/local/nginx/vhosts/*;\r
\`\`\`\r
\r
(3). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -t\`\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E\r
(4). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -s reload\`\u52A0\u8F7D\u914D\u7F6E\r
`,contentRendered:`<!-- more -->
<h3 id="\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</h3>
<p><strong>1. \u521B\u5EFA jdk \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09</strong>
<code v-pre>mkdir -p usr/local/src</code>
<strong>2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D jdk \u5305</strong>
<code v-pre>wget --no-check-certificate --no-cookies --header &quot;Cookie: oraclelicense=accept-securebackup-cookie&quot; http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz</code>
<strong>3. \u89E3\u538B\uFF08\u5982\u4E0B\u64CD\u4F5C\u662F\u5DF2\u7ECF\u8DF3\u5230\u6307\u5B9A\u5B58\u653E jdk \u7684\u76EE\u5F55\u4F4D\u7F6E\uFF09</strong>
<code v-pre>tar -zxvf jdk-8u131-linux-x64.tar.gz</code>
<strong>4. \u91CD\u547D\u540D</strong>
<code v-pre>mv jdk1.8.0_131 jdk1.8</code>
<strong>5. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF</strong>
(1)\u8FDB\u5165\u7CFB\u7EDF\u6587\u4EF6\u547D\u4EE4\u5982\u4E0B\uFF1A<code v-pre>vi /etc/profile</code>
(2)\u6309\u201Cshift+g\u201D\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u6587\u672C\u672B\u5C3E\uFF0C\u518D\u6309\u201Ci\u201D\u6309\u952E\u8FDB\u884C\u7F16\u8F91\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6587\u672C(\u5199\u5B8C\u540E\uFF0C\u6309 ESC \u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\u5E76\u8F93\u5165\u201C:x\u201D\u4EE5\u4FDD\u5B58\u5E76\u9000\u51FA)\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>export JAVA_HOME=/usr/local/src/jdk1.8
export PATH=$PATH:$JAVA_HOME/bin
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. \u8BA9\u914D\u7F6E\u6587\u4EF6\u751F\u6548\uFF1A</strong><code v-pre>source /etc/profile</code>
<strong>7. \u68C0\u67E5 jdk \u662F\u5426\u914D\u7F6E\u6210\u529F\uFF1A</strong> <code v-pre>java -version</code></p>
<h3 id="\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981" aria-hidden="true">#</a> \u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09</h3>
<p><strong>1. \u521B\u5EFA tomcat \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09</strong></p>
<p><strong>2. \u4F7F\u7528 wget \u4E0B\u8F7D tomcat</strong></p>
<p><strong>3. \u89E3\u538B</strong></p>
<p><strong>4. \u542F\u52A8 tomcat</strong></p>
<p><strong>5. \u4FEE\u6539 tomcat \u7AEF\u53E3</strong></p>
<p><strong>6. \u6D4B\u8BD5\u8BBF\u95EE</strong></p>
<h3 id="\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong><em>\u6CE8\u610F\uFF1A\u9664\u4E86\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 3306 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 3306 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09</em></strong></p>
<p><strong>1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B</strong></p>
<p><strong>2. \u4E0B\u8F7D mysql \u5E76\u542F\u52A8\u670D\u52A1</strong>
(1)\u4F7F\u7528 wget \u4E0B\u8F7D mysql \u6E90\u5305\u5E76\u7528 yum \u5B89\u88C5\uFF1A
<code v-pre>\u4E0B\u8F7D\uFF1A wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm</code>
<code v-pre>\u5B89\u88C5\uFF1A yum -y localinstall mysql57-community-release-el7-11.noarch.rpm</code>
(3)\u5728\u7EBF\u5B89\u88C5 Mysql\uFF1A<code v-pre>yum -y install mysql-community-server</code>
(4)\u542F\u52A8\u670D\u52A1\uFF1A<code v-pre>systemctl start mysqld</code>
(5)\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\uFF1A
<code v-pre>systemctl enable mysqld</code>
<code v-pre>systemctl deaemon-reload</code></p>
<p><strong>3. \u4FEE\u6539\u672C\u5730\u767B\u5F55\u5BC6\u7801</strong>
(1) \u901A\u8FC7<code v-pre>vi /var/log/mysqld.log</code>\u8FDB\u5165\u8BE5\u6587\u4EF6\u4E2D\u627E\u5230\u6807\u9EC4\u8FD9\u6BB5\uFF0C\u800C\u7EA2\u8272\u5708\u4FBF\u662F\u9ED8\u8BA4\u767B\u9646\u5BC6\u7801\uFF1A
<img src="https://img-blog.csdnimg.cn/20191227220213561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0">
(2)\u901A\u8FC7\u4EE5\u4E0A\u5F97\u5230\u7684\u5BC6\u7801\u767B\u5F55\u547D\u4EE4<code v-pre>mysql -u root -p</code> \uFF0C\u5373\u53EF\u8FDB\u5165 mysql \u4E2D\u3002\u4E0B\u9762\u5219\u662F\u4FEE\u6539\u5BC6\u7801\uFF1A
<code v-pre>mysql&gt; alter user 'root'@'localhost' identified by 'Qq88888.';</code></p>
<p><strong>4. \u8BBE\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF08\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF09\uFF0C\u5F00\u542F\u8FDC\u7A0B\u767B\u5F55\u524D\u63D0\u8981\u4FDD\u8BC1\u5F00\u542F\u9632\u706B\u5899\uFF0C\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A</strong>
(1)\u5141\u8BB8\u8BE5\u8D26\u53F7\u80FD\u591F\u88AB\u8FDC\u7A0B\u767B\u5F55\uFF1A <code v-pre> mysql&gt; grant all privileges on *.* to 'root'@'%' identified by 'Qq88888.' with grant option;</code>
(2)\u67E5\u770B\u9632\u706B\u5899\u662F\u5426\u5F00\u542F\uFF1A <code v-pre>firewall-cmd --state</code>
(3)\u5F00\u542F\u9632\u706B\u5899\uFF1A <code v-pre>systemctl start firewalld.service</code> - \u5173\u95ED\u9632\u706B\u5899: <code v-pre>systemctl stop firewalld.service</code> - \u7981\u7528\u9632\u706B\u5899: <code v-pre>systemctl disable firewalld.service</code> - \u67E5\u770B\u9632\u706B\u5899\u76D1\u542C\u7684\u7AEF\u53E3: <code v-pre>firewall-cmd --list-port</code>
(4)\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=3306/tcp --permanent</code>
(5)\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code></p>
<p><strong>5. \u914D\u7F6E my.cnf</strong>
\u8FDB\u5165<code v-pre>vi /etc/my.cnf</code>\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u672C\u6587\u8FDB\u884C\u7F16\u7801\u8BBE\u7F6E\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>character_set_server=utf8
init_connect='SET NAMES utf8'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. \u91CD\u542F\u52A8 mysql</strong>
<code v-pre>systemctl restart mysqld</code></p>
<h3 id="\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong><em>\u6CE8\u610F\uFF1A\u540C\u4E0A\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 6379 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09</em></strong></p>
<p><strong>1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B</strong></p>
<p><strong>2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D redis\uFF1A</strong><code v-pre>wget http://download.redis.io/releases/redis-4.0.8.tar.gz</code></p>
<p><strong>3. \u89E3\u538B\u3001\u7F16\u8BD1\u548C\u5B89\u88C5\uFF1A</strong>
(1) \u89E3\u538B\uFF1A<code v-pre>tar -zxvf redis-4.0.8.tar.gz</code>
(2) \u5B8C\u6210\u540E\u8FDB\u5165\u89E3\u538B\u7684 redis-4.0.8 \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 make \u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF1A<code v-pre>make</code>
(3) \u5B89\u88C5\uFF1A<code v-pre>make install</code></p>
<p><strong>4. \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8</strong>
(1) \u521B\u5EFA\u65B0\u76EE\u5F55\uFF1A<code v-pre>mkdir -p /usr/local/redis</code>
(2) \u5C06/usr/local/src/redis-4.0.8/src \u76EE\u5F55\u4E0B\u7684 redis-server\u3001redis-cli \u548C/usr/local/src/redis-4.0.8 \u76EE\u5F55\u4E0B\u7684 redis.conf \u6587\u4EF6\u62F7\u8D1D\u5230\u521B\u5EFA\u7684\u76EE\u5F55\u4E2D\uFF1A
<code v-pre>cp redis-server /usr/local/redis</code>
<code v-pre>cp redis-cli /usr/local/redis</code>
<code v-pre>cp ../redis.conf /usr/local/redis</code>
(3)\u5F00\u542F\u540E\u53F0\u8FD0\u884C\uFF0C\u4FEE\u6539\u62F7\u8D1D\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF1A<code v-pre>vi /usr/local/redis/redis.conf</code></p>
<ul>
<li>\u5C06\u8424\u5149\u5B57\u4E0A\u7684\u201Cno\u201D\u8BE5\u4E3A\u201Cyes\u201D\uFF1A <img src="https://img-blog.csdnimg.cn/2019122819072660.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
</ul>
<p>(4) \u521B\u5EFA\u670D\u52A1\u6587\u4EF6 redis.service\uFF1A<code v-pre>vi /usr/lib/systemd/system/redis.service</code>
\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u4E2D\u7684\u8DEF\u5F84\u4EE5\u5B9E\u9645\u5404\u5F02\uFF09\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>	[Unit]
	Description=The redis-server Process Manager
	After=syslog.target network.target

	[Service]
	Type=simple
	PIDFile=/var/run/redis_6379.pid
	ExecStart=/usr/local/redis/redis-server /usr/local/redis/redis.conf
	ExecReload=/bin/kill -USR2 $MAINPID
	ExecStop=/bin/kill -SIGINT $MAINPID

	[Install]
	WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. \u5F00\u542F redis \u8FDC\u7A0B\u8BBF\u95EE\uFF08\u53EF\u5FFD\u7565\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF09\uFF1A</strong>
(1) \u4FEE\u6539 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A</p>
<ul>
<li>\u8BBE\u7F6E\u53EF\u8BBF\u95EE\u7684 ip\uFF1A\u4FEE\u6539\u8424\u5149\u5B57\u7684\u6587\u672C\u4E2D\u753B\u5708\u7684 ip \u5730\u5740\u8BA9\u5176\u4ED6\u53EF\u4EE5\u8BBF\u95EE
<img src="https://img-blog.csdnimg.cn/20191228214121699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
<li>\u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F\uFF1A\u5C06\u8424\u5149\u5B57\u6587\u672C\u7684\u201Cyes\u201D\u4FEE\u6539\u4E3A\u201Cno\u201D
<img src="https://img-blog.csdnimg.cn/20191228211505882.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
<li>\u8BBE\u7F6E\u5BC6\u7801\uFF1A\u6DFB\u52A0\u8424\u5149\u5B57\u7684\u6587\u672C\u6240\u793A
<img src="https://img-blog.csdnimg.cn/20191228205849892.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
</ul>
<p>(2) \u4FEE\u6539\u5B8C\u540E\u5E94\u5728 redis \u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u547D\u4EE4<code v-pre>redis-server redis.conf</code>\u6765\u68C0\u67E5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u4EA6\u53EF\u68C0\u67E5\u662F\u5426\u51FA\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u907F\u514D\u540E\u7EED\u4E0D\u5FC5\u8981\u7684\u95EE\u9898
(3) \u56E0\u4E3A\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u6240\u4EE5\u52BF\u5FC5\u8981\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u7684\u76D1\u542C\uFF1A - \u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=6379/tcp --permanent</code> - \u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code> - \u67E5\u770B\u9632\u706B\u5899\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --list-ports</code>
<strong>6. \u5F00\u542F\u670D\u52A1\u548C\u5F00\u673A\u81EA\u542F\u52A8\uFF1A</strong>
(1) \u5237\u65B0\u670D\u52A1\u914D\u7F6E\uFF1A<code v-pre>systemctl daemon-reload</code>
(2) \u5F00\u542F redis: <code v-pre>systemctl start redis</code>
(3) \u52A0\u5165\u5F00\u673A\u542F\u52A8\uFF1A<code v-pre>systemctl enable redis</code></p>
<h3 id="\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong>1. \u5B89\u88C5 gcc\uFF08gcc \u7528\u4E8E\u7F16\u8BD1\u63A5\u4E0B\u6765\u4E0B\u8F7D\u7684 nginx \u6E90\u7801\uFF09</strong>
\u4F7F\u7528<code v-pre>gcc -v</code>\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u8BE5\u547D\u4EE4\uFF0C\u5982\u672A\u5B89\u88C5\u5219\u6267\u884C<code v-pre>yum install gcc-c++</code></p>
<p><strong>2. \u5B89\u88C5 pcre \u548C pcre-devel \u4F9D\u8D56\uFF08nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002\uFF09</strong>
<code v-pre>yum install -y pcre pcre-devel</code></p>
<p><strong>3. \u5B89\u88C5 zlib zlib-devel \u4F9D\u8D56\uFF08zlib \u63D0\u4F9B\u4E86\u5F88\u591A\u538B\u7F29\u548C\u89E3\u65B9\u5F0F\uFF0Cnginx \u9700\u8981 zlib \u5BF9 http \u8FDB\u884C gzip\uFF09</strong>
<code v-pre>yum install -y zlib zlib-devel</code></p>
<p><strong>4. \u5B89\u88C5 openssl openssl-devel\uFF08openssl \u662F\u4E00\u4E2A\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0Cnginx \u8981\u652F\u6301 https \u5C31\u9700\u8981\u5B83\uFF09</strong>
<code v-pre>yum install -y openssl openssl-devel</code></p>
<p><strong>5. \u4E0B\u8F7D nginx \u5E76\u89E3\u538B</strong>
<code v-pre>wget http://nginx.org/download/nginx-1.9.9.tar.gz</code>
<code v-pre>tar -zxvf nginx-1.9.9</code></p>
<p><strong>6. \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FFD\u52A0\u5B89\u88C5 ssl \u6A21\u5757</strong>
<code v-pre>./configure --with-http_ssl_module</code></p>
<p><strong>7. \u4F7F\u7528 make \u7F16\u8BD1\u548C\u5B89\u88C5</strong>
<code v-pre>make &amp;&amp; make install</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>\u6CE8\u610F\uFF1A\u5982\u679C\u5B89\u88C5\u540E\u51FA\u73B0\u4E00\u4E2AMake[1]: Leaving directory \`/usr/local/nginx-1.9.9\`
\u5E76\u4E14\u5728nginx-1.9.9\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u5DF2\u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3Anginx\u7684\u6587\u4EF6\u5939\u5373\u53EF\u5FFD\u7565\u8BE5\u9519\u8BEF~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>8. \u67E5\u770B nginx \u662F\u5426\u5B89\u88C5\u6210\u529F</strong>
(1). \u8FDB\u5165 nginx \u6587\u4EF6\u4E0B\u7684 sbin \u76EE\u5F55\u8F93\u5165<code v-pre>./nginx -v</code>\u67E5\u770B\u7248\u672C\u53F7
(2).\u4F7F\u7528<code v-pre>netstat -ntpl | grep nginx</code>\u67E5\u770B\u5F53\u524D nginx \u5360\u7528\u7684\u7AEF\u53E3\u53F7
(3). \u4F7F\u7528<code v-pre>wget 127.0.0.1</code>\u6D4B\u8BD5\u8FD4\u56DE\u8868\u793A\u662F\u5426\u6B63\u5E38
(4). \u4F7F\u7528<code v-pre>curl 127.0.0.1</code>\u6D4B\u8BD5\u8FD4\u56DE\u9875\u9762\u7684\u503C\u662F\u5426\u6B63\u5E38</p>
<p><strong>9. \u914D\u7F6E nginx \u5F00\u673A\u81EA\u542F\u52A8</strong>
(1). \u8FDB\u5165\u76EE\u5F55<code v-pre>cd /usr/lib/systemd/system</code>
(2). \u521B\u5EFA nginx.service \u670D\u52A1\u6587\u4EF6<code v-pre>vi nginx.service</code>
(3). \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>[Unit]
Description=nginx
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx reload
ExecStop=/usr/local/nginx/sbin/nginx quit
PrivateTmp=true

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4). \u5F00\u673A\u81EA\u542F\u52A8\uFF1A<code v-pre>systemctl enable nginx.service</code>
(5). nginx \u670D\u52A1\u7684\u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F\uFF1A
\u542F\u52A8\uFF1A<code v-pre>systemctl start nginx.service</code>
\u5173\u95ED\uFF1A<code v-pre>systemctl stop nginx.service</code>
\u91CD\u542F\uFF1A<code v-pre>systemctl restart nginx.service</code></p>
<p><strong>10. \u9632\u706B\u5899\u5F00\u542F http\u3001https \u670D\u52A1\u4EE5\u53CA\u7AEF\u53E3\u76D1\u542C</strong>
\u5F00\u542F http \u670D\u52A1\uFF1A<code v-pre>firewall-cmd --zone=public --add-service=http --permanent</code>
\u5F00\u542F 80 \u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=80/tcp --permanent</code>
\u5F00\u542F https \u670D\u52A1\uFF1A<code v-pre>firewall-cmd --zone=public --add-service=https --permanent</code>
\u5F00\u542F 443 \u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=443/tcp --permanent</code>
\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code></p>
<p><strong>11. nginx + \u4E00\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A</strong>
(1). \u4FEE\u6539\u5B89\u88C5\u540E nginx \u6587\u4EF6\u7684 conf \u76EE\u5F55\u4E0B\u7684 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1A <code v-pre>vi nginx.conf</code>
(2). \u627E\u5230\u5E26\u6709# HTTPS Server \u7684\u5B57\u6837\uFF0C\u5C06\u5176\u4E0B\u6587\u672C\u6309\u7167\u4EE5\u4E0B\u6587\u672C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A</p>
<div class="language-\\ ext-\\ line-numbers-mode"><pre v-pre class="language-\\"><code>    # HTTPS Server
    #
    server {
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D

        ssl_certificate      cert/www/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem
        ssl_certificate_key  cert/www/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key
        ssl   on;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

        location / {
            proxy_pass   http://127.0.0.1:8080; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
            proxy_set_header Host                               $http_addr;
            proxy_set_header X-Real-IP                        $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            root   html;
            index  index.html index.htm;
        }

		# \u914D\u7F6E\u53E6\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528443\u7AEF\u53E3
		# location /test {
        #    proxy_pass   http://127.0.0.1:9090/test; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
        #    proxy_set_header Host                               $http_addr;
        #    proxy_set_header X-Real-IP                        $remote_addr;
        #    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        #    root   html;
        #    index  index.html index.htm;
		# }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3). \u5C06 http \u8BF7\u6C42\u91CD\u5B9A\u5411\u4E3A https \u8BF7\u6C42\uFF0C\u5728\u539F nginx.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u4E3A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>	server {
        listen       80;
        server_name  www.shnice.club; #\u586B\u5199\u8BBF\u95EE\u7684\u57DF\u540D
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps
		.....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -t</code>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E
(5). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -s reload</code>\u52A0\u8F7D\u914D\u7F6E</p>
<p><strong>12\u3001nginx + \u4E8C\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A</strong>
(1). \u5728 nginx \u6587\u4EF6\u5939\u4E0B\u4E0B\u521B\u5EFA vhosts \u76EE\u5F55\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A*.conf \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code># HTTP Server
#
server {
        listen 80;
        server_name localhost; #\u586B\u5199\u4F60\u8BBF\u95EE\u7684\u57DF\u540D
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps

        location / {
            index index.html index.htm;
        }
}

# HTTPS Server
#
server {
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D

        ssl_certificate      cert/abc/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem
        ssl_certificate_key  cert/abc/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key
        ssl   on;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

        location /abc {
            proxy_pass   http://127.0.0.1:8080/abc; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
            proxy_set_header Host                               $http_addr;
            proxy_set_header X-Real-IP                        $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            root   html;
            index  index.html index.htm;
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2). \u5BFC\u5165\u4E8C\u7EA7\u57DF\u540D\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u5230 nginx.conf \u4E2D\uFF1A
\u8FDB\u5165 conf \u76EE\u5F55\u4E0B\uFF0C\u5728 nginx.conf \u6587\u4EF6\u4E2D\u7684 http{}\u5305\u88F9\u4E2D\u5904\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="language-\\ ext-\\ line-numbers-mode"><pre v-pre class="language-\\"><code>	include /usr/local/nginx/vhosts/*;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -t</code>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E
(4). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -s reload</code>\u52A0\u8F7D\u914D\u7F6E</p>
`,date:"2022-07-12",deps:[],hoistedTags:[],links:[],pathInferred:"/20220711/2.html",pathLocale:"/",permalink:null,routeMeta:{title:"Centos7\u73AF\u5883\u642D\u5EFA"},slug:"2",filePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/20220711/2.md",filePathRelative:"20220711/2.md",componentFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/2.html.vue",componentFilePathRelative:"pages/20220711/2.html.vue",componentFileChunkName:"v-e5cc5690",dataFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/2.html.js",dataFilePathRelative:"pages/20220711/2.html.js",dataFileChunkName:"v-e5cc5690",htmlFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/dist/20220711/2.html",htmlFilePathRelative:"20220711/2.html"}]},"/tags/mysql/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"tags",currentClassificationValue:"mysql",pages:[{data:{key:"v-e5cc5690",path:"/20220711/2.html",title:"Centos7\u73AF\u5883\u642D\u5EFA",lang:"zh-CN",frontmatter:{title:"Centos7\u73AF\u5883\u642D\u5EFA",date:"2022-07-12 17:55:44",sidebar:"auto",categories:["Linux"],tags:["java","mysql","redis"],publish:!0},excerpt:"",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],git:{},filePathRelative:"20220711/2.md"},key:"v-e5cc5690",path:"/20220711/2.html",title:"Centos7\u73AF\u5883\u642D\u5EFA",lang:"zh-CN",frontmatter:{title:"Centos7\u73AF\u5883\u642D\u5EFA",date:"2022-07-12 17:55:44",sidebar:"auto",categories:["Linux"],tags:["java","mysql","redis"],publish:!0},excerpt:"",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],content:`\r
<!-- more -->\r
\r
### \u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\r
\r
**1. \u521B\u5EFA jdk \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09**\r
\`mkdir -p usr/local/src\`\r
**2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D jdk \u5305**\r
\`wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz\`\r
**3. \u89E3\u538B\uFF08\u5982\u4E0B\u64CD\u4F5C\u662F\u5DF2\u7ECF\u8DF3\u5230\u6307\u5B9A\u5B58\u653E jdk \u7684\u76EE\u5F55\u4F4D\u7F6E\uFF09**\r
\`tar -zxvf jdk-8u131-linux-x64.tar.gz\`\r
**4. \u91CD\u547D\u540D**\r
\`mv jdk1.8.0_131 jdk1.8\`\r
**5. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF**\r
(1)\u8FDB\u5165\u7CFB\u7EDF\u6587\u4EF6\u547D\u4EE4\u5982\u4E0B\uFF1A\`vi /etc/profile\`\r
(2)\u6309\u201Cshift+g\u201D\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u6587\u672C\u672B\u5C3E\uFF0C\u518D\u6309\u201Ci\u201D\u6309\u952E\u8FDB\u884C\u7F16\u8F91\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6587\u672C(\u5199\u5B8C\u540E\uFF0C\u6309 ESC \u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\u5E76\u8F93\u5165\u201C:x\u201D\u4EE5\u4FDD\u5B58\u5E76\u9000\u51FA)\uFF1A\r
\r
\`\`\`/\r
export JAVA_HOME=/usr/local/src/jdk1.8\r
export PATH=$PATH:$JAVA_HOME/bin\r
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar\r
\`\`\`\r
\r
**6. \u8BA9\u914D\u7F6E\u6587\u4EF6\u751F\u6548\uFF1A**\`source /etc/profile\`\r
**7. \u68C0\u67E5 jdk \u662F\u5426\u914D\u7F6E\u6210\u529F\uFF1A** \`java -version\`\r
\r
### \u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09\r
\r
**1. \u521B\u5EFA tomcat \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09**\r
\r
**2. \u4F7F\u7528 wget \u4E0B\u8F7D tomcat**\r
\r
**3. \u89E3\u538B**\r
\r
**4. \u542F\u52A8 tomcat**\r
\r
**5. \u4FEE\u6539 tomcat \u7AEF\u53E3**\r
\r
**6. \u6D4B\u8BD5\u8BBF\u95EE**\r
\r
### \u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**_\u6CE8\u610F\uFF1A\u9664\u4E86\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 3306 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 3306 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09_**\r
\r
**1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B**\r
\r
**2. \u4E0B\u8F7D mysql \u5E76\u542F\u52A8\u670D\u52A1**\r
(1)\u4F7F\u7528 wget \u4E0B\u8F7D mysql \u6E90\u5305\u5E76\u7528 yum \u5B89\u88C5\uFF1A\r
\`\u4E0B\u8F7D\uFF1A wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm\`\r
\`\u5B89\u88C5\uFF1A yum -y localinstall mysql57-community-release-el7-11.noarch.rpm\`\r
(3)\u5728\u7EBF\u5B89\u88C5 Mysql\uFF1A\`yum -y install mysql-community-server\`\r
(4)\u542F\u52A8\u670D\u52A1\uFF1A\`systemctl start mysqld\`\r
(5)\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\uFF1A\r
\`systemctl enable mysqld\`\r
\`systemctl deaemon-reload\`\r
\r
**3. \u4FEE\u6539\u672C\u5730\u767B\u5F55\u5BC6\u7801**\r
(1) \u901A\u8FC7\`vi /var/log/mysqld.log\`\u8FDB\u5165\u8BE5\u6587\u4EF6\u4E2D\u627E\u5230\u6807\u9EC4\u8FD9\u6BB5\uFF0C\u800C\u7EA2\u8272\u5708\u4FBF\u662F\u9ED8\u8BA4\u767B\u9646\u5BC6\u7801\uFF1A\r
![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191227220213561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70)\r
(2)\u901A\u8FC7\u4EE5\u4E0A\u5F97\u5230\u7684\u5BC6\u7801\u767B\u5F55\u547D\u4EE4\`mysql -u root -p\` \uFF0C\u5373\u53EF\u8FDB\u5165 mysql \u4E2D\u3002\u4E0B\u9762\u5219\u662F\u4FEE\u6539\u5BC6\u7801\uFF1A\r
\`mysql> alter user 'root'@'localhost' identified by 'Qq88888.';\`\r
\r
**4. \u8BBE\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF08\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF09\uFF0C\u5F00\u542F\u8FDC\u7A0B\u767B\u5F55\u524D\u63D0\u8981\u4FDD\u8BC1\u5F00\u542F\u9632\u706B\u5899\uFF0C\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A**\r
(1)\u5141\u8BB8\u8BE5\u8D26\u53F7\u80FD\u591F\u88AB\u8FDC\u7A0B\u767B\u5F55\uFF1A \` mysql> grant all privileges on *.* to 'root'@'%' identified by 'Qq88888.' with grant option;\`\r
(2)\u67E5\u770B\u9632\u706B\u5899\u662F\u5426\u5F00\u542F\uFF1A \`firewall-cmd --state\`\r
(3)\u5F00\u542F\u9632\u706B\u5899\uFF1A \`systemctl start firewalld.service\` - \u5173\u95ED\u9632\u706B\u5899: \`systemctl stop firewalld.service\` - \u7981\u7528\u9632\u706B\u5899: \`systemctl disable firewalld.service\` - \u67E5\u770B\u9632\u706B\u5899\u76D1\u542C\u7684\u7AEF\u53E3: \`firewall-cmd --list-port\`\r
(4)\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A\`firewall-cmd --zone=public --add-port=3306/tcp --permanent\`\r
(5)\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\`\r
\r
**5. \u914D\u7F6E my.cnf**\r
\u8FDB\u5165\`vi /etc/my.cnf\`\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u672C\u6587\u8FDB\u884C\u7F16\u7801\u8BBE\u7F6E\uFF1A\r
\r
\`\`\`/\r
character_set_server=utf8\r
init_connect='SET NAMES utf8'\r
\`\`\`\r
\r
**6. \u91CD\u542F\u52A8 mysql**\r
\`systemctl restart mysqld\`\r
\r
### \u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**_\u6CE8\u610F\uFF1A\u540C\u4E0A\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 6379 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09_**\r
\r
**1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B**\r
\r
**2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D redis\uFF1A**\`wget http://download.redis.io/releases/redis-4.0.8.tar.gz\`\r
\r
**3. \u89E3\u538B\u3001\u7F16\u8BD1\u548C\u5B89\u88C5\uFF1A**\r
(1) \u89E3\u538B\uFF1A\`tar -zxvf redis-4.0.8.tar.gz\`\r
(2) \u5B8C\u6210\u540E\u8FDB\u5165\u89E3\u538B\u7684 redis-4.0.8 \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 make \u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF1A\`make\`\r
(3) \u5B89\u88C5\uFF1A\`make install\`\r
\r
**4. \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8**\r
(1) \u521B\u5EFA\u65B0\u76EE\u5F55\uFF1A\`mkdir -p /usr/local/redis\`\r
(2) \u5C06/usr/local/src/redis-4.0.8/src \u76EE\u5F55\u4E0B\u7684 redis-server\u3001redis-cli \u548C/usr/local/src/redis-4.0.8 \u76EE\u5F55\u4E0B\u7684 redis.conf \u6587\u4EF6\u62F7\u8D1D\u5230\u521B\u5EFA\u7684\u76EE\u5F55\u4E2D\uFF1A\r
\`cp redis-server /usr/local/redis\`\r
\`cp redis-cli /usr/local/redis\`\r
\`cp ../redis.conf /usr/local/redis\`\r
(3)\u5F00\u542F\u540E\u53F0\u8FD0\u884C\uFF0C\u4FEE\u6539\u62F7\u8D1D\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF1A\`vi /usr/local/redis/redis.conf\`\r
\r
-   \u5C06\u8424\u5149\u5B57\u4E0A\u7684\u201Cno\u201D\u8BE5\u4E3A\u201Cyes\u201D\uFF1A ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/2019122819072660.png)\r
\r
(4) \u521B\u5EFA\u670D\u52A1\u6587\u4EF6 redis.service\uFF1A\`vi /usr/lib/systemd/system/redis.service\`\r
\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u4E2D\u7684\u8DEF\u5F84\u4EE5\u5B9E\u9645\u5404\u5F02\uFF09\uFF1A\r
\r
\`\`\`/\r
	[Unit]\r
	Description=The redis-server Process Manager\r
	After=syslog.target network.target\r
\r
	[Service]\r
	Type=simple\r
	PIDFile=/var/run/redis_6379.pid\r
	ExecStart=/usr/local/redis/redis-server /usr/local/redis/redis.conf\r
	ExecReload=/bin/kill -USR2 $MAINPID\r
	ExecStop=/bin/kill -SIGINT $MAINPID\r
\r
	[Install]\r
	WantedBy=multi-user.target\r
\`\`\`\r
\r
**5. \u5F00\u542F redis \u8FDC\u7A0B\u8BBF\u95EE\uFF08\u53EF\u5FFD\u7565\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF09\uFF1A**\r
(1) \u4FEE\u6539 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A\r
\r
-   \u8BBE\u7F6E\u53EF\u8BBF\u95EE\u7684 ip\uFF1A\u4FEE\u6539\u8424\u5149\u5B57\u7684\u6587\u672C\u4E2D\u753B\u5708\u7684 ip \u5730\u5740\u8BA9\u5176\u4ED6\u53EF\u4EE5\u8BBF\u95EE\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228214121699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70)\r
-   \u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F\uFF1A\u5C06\u8424\u5149\u5B57\u6587\u672C\u7684\u201Cyes\u201D\u4FEE\u6539\u4E3A\u201Cno\u201D\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228211505882.png)\r
-   \u8BBE\u7F6E\u5BC6\u7801\uFF1A\u6DFB\u52A0\u8424\u5149\u5B57\u7684\u6587\u672C\u6240\u793A\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228205849892.png)\r
\r
(2) \u4FEE\u6539\u5B8C\u540E\u5E94\u5728 redis \u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u547D\u4EE4\`redis-server redis.conf\`\u6765\u68C0\u67E5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u4EA6\u53EF\u68C0\u67E5\u662F\u5426\u51FA\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u907F\u514D\u540E\u7EED\u4E0D\u5FC5\u8981\u7684\u95EE\u9898\r
(3) \u56E0\u4E3A\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u6240\u4EE5\u52BF\u5FC5\u8981\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u7684\u76D1\u542C\uFF1A - \u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A\`firewall-cmd --zone=public --add-port=6379/tcp --permanent\` - \u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\` - \u67E5\u770B\u9632\u706B\u5899\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --list-ports\`\r
**6. \u5F00\u542F\u670D\u52A1\u548C\u5F00\u673A\u81EA\u542F\u52A8\uFF1A**\r
(1) \u5237\u65B0\u670D\u52A1\u914D\u7F6E\uFF1A\`systemctl daemon-reload\`\r
(2) \u5F00\u542F redis: \`systemctl start redis\`\r
(3) \u52A0\u5165\u5F00\u673A\u542F\u52A8\uFF1A\`systemctl enable redis\`\r
\r
### \u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**1. \u5B89\u88C5 gcc\uFF08gcc \u7528\u4E8E\u7F16\u8BD1\u63A5\u4E0B\u6765\u4E0B\u8F7D\u7684 nginx \u6E90\u7801\uFF09**\r
\u4F7F\u7528\`gcc -v\`\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u8BE5\u547D\u4EE4\uFF0C\u5982\u672A\u5B89\u88C5\u5219\u6267\u884C\`yum install gcc-c++\`\r
\r
**2. \u5B89\u88C5 pcre \u548C pcre-devel \u4F9D\u8D56\uFF08nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002\uFF09**\r
\`yum install -y pcre pcre-devel\`\r
\r
**3. \u5B89\u88C5 zlib zlib-devel \u4F9D\u8D56\uFF08zlib \u63D0\u4F9B\u4E86\u5F88\u591A\u538B\u7F29\u548C\u89E3\u65B9\u5F0F\uFF0Cnginx \u9700\u8981 zlib \u5BF9 http \u8FDB\u884C gzip\uFF09**\r
\`yum install -y zlib zlib-devel\`\r
\r
**4. \u5B89\u88C5 openssl openssl-devel\uFF08openssl \u662F\u4E00\u4E2A\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0Cnginx \u8981\u652F\u6301 https \u5C31\u9700\u8981\u5B83\uFF09**\r
\`yum install -y openssl openssl-devel\`\r
\r
**5. \u4E0B\u8F7D nginx \u5E76\u89E3\u538B**\r
\`wget http://nginx.org/download/nginx-1.9.9.tar.gz\`\r
\`tar -zxvf nginx-1.9.9\`\r
\r
**6. \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FFD\u52A0\u5B89\u88C5 ssl \u6A21\u5757**\r
\`./configure --with-http_ssl_module\`\r
\r
**7. \u4F7F\u7528 make \u7F16\u8BD1\u548C\u5B89\u88C5**\r
\`make && make install\`\r
\r
\`\`\`\r
\u6CE8\u610F\uFF1A\u5982\u679C\u5B89\u88C5\u540E\u51FA\u73B0\u4E00\u4E2AMake[1]: Leaving directory \`/usr/local/nginx-1.9.9\`\r
\u5E76\u4E14\u5728nginx-1.9.9\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u5DF2\u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3Anginx\u7684\u6587\u4EF6\u5939\u5373\u53EF\u5FFD\u7565\u8BE5\u9519\u8BEF~\r
\`\`\`\r
\r
**8. \u67E5\u770B nginx \u662F\u5426\u5B89\u88C5\u6210\u529F**\r
(1). \u8FDB\u5165 nginx \u6587\u4EF6\u4E0B\u7684 sbin \u76EE\u5F55\u8F93\u5165\`./nginx -v\`\u67E5\u770B\u7248\u672C\u53F7\r
(2).\u4F7F\u7528\`netstat -ntpl | grep nginx\`\u67E5\u770B\u5F53\u524D nginx \u5360\u7528\u7684\u7AEF\u53E3\u53F7\r
(3). \u4F7F\u7528\`wget 127.0.0.1\`\u6D4B\u8BD5\u8FD4\u56DE\u8868\u793A\u662F\u5426\u6B63\u5E38\r
(4). \u4F7F\u7528\`curl 127.0.0.1\`\u6D4B\u8BD5\u8FD4\u56DE\u9875\u9762\u7684\u503C\u662F\u5426\u6B63\u5E38\r
\r
**9. \u914D\u7F6E nginx \u5F00\u673A\u81EA\u542F\u52A8**\r
(1). \u8FDB\u5165\u76EE\u5F55\`cd /usr/lib/systemd/system\`\r
(2). \u521B\u5EFA nginx.service \u670D\u52A1\u6587\u4EF6\`vi nginx.service\`\r
(3). \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A\r
\r
\`\`\`/\r
[Unit]\r
Description=nginx\r
After=network.target\r
\r
[Service]\r
Type=forking\r
ExecStart=/usr/local/nginx/sbin/nginx\r
ExecReload=/usr/local/nginx/sbin/nginx reload\r
ExecStop=/usr/local/nginx/sbin/nginx quit\r
PrivateTmp=true\r
\r
[Install]\r
WantedBy=multi-user.target\r
\`\`\`\r
\r
(4). \u5F00\u673A\u81EA\u542F\u52A8\uFF1A\`systemctl enable nginx.service\`\r
(5). nginx \u670D\u52A1\u7684\u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F\uFF1A\r
\u542F\u52A8\uFF1A\`systemctl start nginx.service\`\r
\u5173\u95ED\uFF1A\`systemctl stop nginx.service\`\r
\u91CD\u542F\uFF1A\`systemctl restart nginx.service\`\r
\r
**10. \u9632\u706B\u5899\u5F00\u542F http\u3001https \u670D\u52A1\u4EE5\u53CA\u7AEF\u53E3\u76D1\u542C**\r
\u5F00\u542F http \u670D\u52A1\uFF1A\`firewall-cmd --zone=public --add-service=http --permanent\`\r
\u5F00\u542F 80 \u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --add-port=80/tcp --permanent\`\r
\u5F00\u542F https \u670D\u52A1\uFF1A\`firewall-cmd --zone=public --add-service=https --permanent\`\r
\u5F00\u542F 443 \u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --add-port=443/tcp --permanent\`\r
\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\`\r
\r
**11. nginx + \u4E00\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A**\r
(1). \u4FEE\u6539\u5B89\u88C5\u540E nginx \u6587\u4EF6\u7684 conf \u76EE\u5F55\u4E0B\u7684 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1A \`vi nginx.conf\`\r
(2). \u627E\u5230\u5E26\u6709# HTTPS Server \u7684\u5B57\u6837\uFF0C\u5C06\u5176\u4E0B\u6587\u672C\u6309\u7167\u4EE5\u4E0B\u6587\u672C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A\r
\r
\`\`\`\\\r
    # HTTPS Server\r
    #\r
    server {\r
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443\r
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D\r
\r
        ssl_certificate      cert/www/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem\r
        ssl_certificate_key  cert/www/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key\r
        ssl   on;\r
\r
        ssl_session_cache    shared:SSL:1m;\r
        ssl_session_timeout  5m;\r
\r
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\r
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\r
        ssl_prefer_server_ciphers  on;\r
\r
        location / {\r
            proxy_pass   http://127.0.0.1:8080; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
            proxy_set_header Host                               $http_addr;\r
            proxy_set_header X-Real-IP                        $remote_addr;\r
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
            root   html;\r
            index  index.html index.htm;\r
        }\r
\r
		# \u914D\u7F6E\u53E6\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528443\u7AEF\u53E3\r
		# location /test {\r
        #    proxy_pass   http://127.0.0.1:9090/test; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
        #    proxy_set_header Host                               $http_addr;\r
        #    proxy_set_header X-Real-IP                        $remote_addr;\r
        #    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
        #    root   html;\r
        #    index  index.html index.htm;\r
		# }\r
    }\r
\`\`\`\r
\r
(3). \u5C06 http \u8BF7\u6C42\u91CD\u5B9A\u5411\u4E3A https \u8BF7\u6C42\uFF0C\u5728\u539F nginx.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u4E3A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF1A\r
\r
\`\`\`/\r
	server {\r
        listen       80;\r
        server_name  www.shnice.club; #\u586B\u5199\u8BBF\u95EE\u7684\u57DF\u540D\r
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps\r
		.....\r
\`\`\`\r
\r
(4). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -t\`\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E\r
(5). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -s reload\`\u52A0\u8F7D\u914D\u7F6E\r
\r
**12\u3001nginx + \u4E8C\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A**\r
(1). \u5728 nginx \u6587\u4EF6\u5939\u4E0B\u4E0B\u521B\u5EFA vhosts \u76EE\u5F55\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A\\*.conf \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B\uFF1A\r
\r
\`\`\`/\r
# HTTP Server\r
#\r
server {\r
        listen 80;\r
        server_name localhost; #\u586B\u5199\u4F60\u8BBF\u95EE\u7684\u57DF\u540D\r
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps\r
\r
        location / {\r
            index index.html index.htm;\r
        }\r
}\r
\r
# HTTPS Server\r
#\r
server {\r
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443\r
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D\r
\r
        ssl_certificate      cert/abc/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem\r
        ssl_certificate_key  cert/abc/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key\r
        ssl   on;\r
\r
        ssl_session_cache    shared:SSL:1m;\r
        ssl_session_timeout  5m;\r
\r
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\r
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\r
        ssl_prefer_server_ciphers  on;\r
\r
        location /abc {\r
            proxy_pass   http://127.0.0.1:8080/abc; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
            proxy_set_header Host                               $http_addr;\r
            proxy_set_header X-Real-IP                        $remote_addr;\r
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
            root   html;\r
            index  index.html index.htm;\r
        }\r
}\r
\`\`\`\r
\r
(2). \u5BFC\u5165\u4E8C\u7EA7\u57DF\u540D\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u5230 nginx.conf \u4E2D\uFF1A\r
\u8FDB\u5165 conf \u76EE\u5F55\u4E0B\uFF0C\u5728 nginx.conf \u6587\u4EF6\u4E2D\u7684 http{}\u5305\u88F9\u4E2D\u5904\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A\r
\r
\`\`\`\\\r
	include /usr/local/nginx/vhosts/*;\r
\`\`\`\r
\r
(3). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -t\`\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E\r
(4). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -s reload\`\u52A0\u8F7D\u914D\u7F6E\r
`,contentRendered:`<!-- more -->
<h3 id="\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</h3>
<p><strong>1. \u521B\u5EFA jdk \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09</strong>
<code v-pre>mkdir -p usr/local/src</code>
<strong>2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D jdk \u5305</strong>
<code v-pre>wget --no-check-certificate --no-cookies --header &quot;Cookie: oraclelicense=accept-securebackup-cookie&quot; http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz</code>
<strong>3. \u89E3\u538B\uFF08\u5982\u4E0B\u64CD\u4F5C\u662F\u5DF2\u7ECF\u8DF3\u5230\u6307\u5B9A\u5B58\u653E jdk \u7684\u76EE\u5F55\u4F4D\u7F6E\uFF09</strong>
<code v-pre>tar -zxvf jdk-8u131-linux-x64.tar.gz</code>
<strong>4. \u91CD\u547D\u540D</strong>
<code v-pre>mv jdk1.8.0_131 jdk1.8</code>
<strong>5. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF</strong>
(1)\u8FDB\u5165\u7CFB\u7EDF\u6587\u4EF6\u547D\u4EE4\u5982\u4E0B\uFF1A<code v-pre>vi /etc/profile</code>
(2)\u6309\u201Cshift+g\u201D\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u6587\u672C\u672B\u5C3E\uFF0C\u518D\u6309\u201Ci\u201D\u6309\u952E\u8FDB\u884C\u7F16\u8F91\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6587\u672C(\u5199\u5B8C\u540E\uFF0C\u6309 ESC \u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\u5E76\u8F93\u5165\u201C:x\u201D\u4EE5\u4FDD\u5B58\u5E76\u9000\u51FA)\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>export JAVA_HOME=/usr/local/src/jdk1.8
export PATH=$PATH:$JAVA_HOME/bin
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. \u8BA9\u914D\u7F6E\u6587\u4EF6\u751F\u6548\uFF1A</strong><code v-pre>source /etc/profile</code>
<strong>7. \u68C0\u67E5 jdk \u662F\u5426\u914D\u7F6E\u6210\u529F\uFF1A</strong> <code v-pre>java -version</code></p>
<h3 id="\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981" aria-hidden="true">#</a> \u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09</h3>
<p><strong>1. \u521B\u5EFA tomcat \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09</strong></p>
<p><strong>2. \u4F7F\u7528 wget \u4E0B\u8F7D tomcat</strong></p>
<p><strong>3. \u89E3\u538B</strong></p>
<p><strong>4. \u542F\u52A8 tomcat</strong></p>
<p><strong>5. \u4FEE\u6539 tomcat \u7AEF\u53E3</strong></p>
<p><strong>6. \u6D4B\u8BD5\u8BBF\u95EE</strong></p>
<h3 id="\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong><em>\u6CE8\u610F\uFF1A\u9664\u4E86\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 3306 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 3306 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09</em></strong></p>
<p><strong>1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B</strong></p>
<p><strong>2. \u4E0B\u8F7D mysql \u5E76\u542F\u52A8\u670D\u52A1</strong>
(1)\u4F7F\u7528 wget \u4E0B\u8F7D mysql \u6E90\u5305\u5E76\u7528 yum \u5B89\u88C5\uFF1A
<code v-pre>\u4E0B\u8F7D\uFF1A wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm</code>
<code v-pre>\u5B89\u88C5\uFF1A yum -y localinstall mysql57-community-release-el7-11.noarch.rpm</code>
(3)\u5728\u7EBF\u5B89\u88C5 Mysql\uFF1A<code v-pre>yum -y install mysql-community-server</code>
(4)\u542F\u52A8\u670D\u52A1\uFF1A<code v-pre>systemctl start mysqld</code>
(5)\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\uFF1A
<code v-pre>systemctl enable mysqld</code>
<code v-pre>systemctl deaemon-reload</code></p>
<p><strong>3. \u4FEE\u6539\u672C\u5730\u767B\u5F55\u5BC6\u7801</strong>
(1) \u901A\u8FC7<code v-pre>vi /var/log/mysqld.log</code>\u8FDB\u5165\u8BE5\u6587\u4EF6\u4E2D\u627E\u5230\u6807\u9EC4\u8FD9\u6BB5\uFF0C\u800C\u7EA2\u8272\u5708\u4FBF\u662F\u9ED8\u8BA4\u767B\u9646\u5BC6\u7801\uFF1A
<img src="https://img-blog.csdnimg.cn/20191227220213561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0">
(2)\u901A\u8FC7\u4EE5\u4E0A\u5F97\u5230\u7684\u5BC6\u7801\u767B\u5F55\u547D\u4EE4<code v-pre>mysql -u root -p</code> \uFF0C\u5373\u53EF\u8FDB\u5165 mysql \u4E2D\u3002\u4E0B\u9762\u5219\u662F\u4FEE\u6539\u5BC6\u7801\uFF1A
<code v-pre>mysql&gt; alter user 'root'@'localhost' identified by 'Qq88888.';</code></p>
<p><strong>4. \u8BBE\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF08\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF09\uFF0C\u5F00\u542F\u8FDC\u7A0B\u767B\u5F55\u524D\u63D0\u8981\u4FDD\u8BC1\u5F00\u542F\u9632\u706B\u5899\uFF0C\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A</strong>
(1)\u5141\u8BB8\u8BE5\u8D26\u53F7\u80FD\u591F\u88AB\u8FDC\u7A0B\u767B\u5F55\uFF1A <code v-pre> mysql&gt; grant all privileges on *.* to 'root'@'%' identified by 'Qq88888.' with grant option;</code>
(2)\u67E5\u770B\u9632\u706B\u5899\u662F\u5426\u5F00\u542F\uFF1A <code v-pre>firewall-cmd --state</code>
(3)\u5F00\u542F\u9632\u706B\u5899\uFF1A <code v-pre>systemctl start firewalld.service</code> - \u5173\u95ED\u9632\u706B\u5899: <code v-pre>systemctl stop firewalld.service</code> - \u7981\u7528\u9632\u706B\u5899: <code v-pre>systemctl disable firewalld.service</code> - \u67E5\u770B\u9632\u706B\u5899\u76D1\u542C\u7684\u7AEF\u53E3: <code v-pre>firewall-cmd --list-port</code>
(4)\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=3306/tcp --permanent</code>
(5)\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code></p>
<p><strong>5. \u914D\u7F6E my.cnf</strong>
\u8FDB\u5165<code v-pre>vi /etc/my.cnf</code>\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u672C\u6587\u8FDB\u884C\u7F16\u7801\u8BBE\u7F6E\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>character_set_server=utf8
init_connect='SET NAMES utf8'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. \u91CD\u542F\u52A8 mysql</strong>
<code v-pre>systemctl restart mysqld</code></p>
<h3 id="\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong><em>\u6CE8\u610F\uFF1A\u540C\u4E0A\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 6379 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09</em></strong></p>
<p><strong>1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B</strong></p>
<p><strong>2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D redis\uFF1A</strong><code v-pre>wget http://download.redis.io/releases/redis-4.0.8.tar.gz</code></p>
<p><strong>3. \u89E3\u538B\u3001\u7F16\u8BD1\u548C\u5B89\u88C5\uFF1A</strong>
(1) \u89E3\u538B\uFF1A<code v-pre>tar -zxvf redis-4.0.8.tar.gz</code>
(2) \u5B8C\u6210\u540E\u8FDB\u5165\u89E3\u538B\u7684 redis-4.0.8 \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 make \u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF1A<code v-pre>make</code>
(3) \u5B89\u88C5\uFF1A<code v-pre>make install</code></p>
<p><strong>4. \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8</strong>
(1) \u521B\u5EFA\u65B0\u76EE\u5F55\uFF1A<code v-pre>mkdir -p /usr/local/redis</code>
(2) \u5C06/usr/local/src/redis-4.0.8/src \u76EE\u5F55\u4E0B\u7684 redis-server\u3001redis-cli \u548C/usr/local/src/redis-4.0.8 \u76EE\u5F55\u4E0B\u7684 redis.conf \u6587\u4EF6\u62F7\u8D1D\u5230\u521B\u5EFA\u7684\u76EE\u5F55\u4E2D\uFF1A
<code v-pre>cp redis-server /usr/local/redis</code>
<code v-pre>cp redis-cli /usr/local/redis</code>
<code v-pre>cp ../redis.conf /usr/local/redis</code>
(3)\u5F00\u542F\u540E\u53F0\u8FD0\u884C\uFF0C\u4FEE\u6539\u62F7\u8D1D\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF1A<code v-pre>vi /usr/local/redis/redis.conf</code></p>
<ul>
<li>\u5C06\u8424\u5149\u5B57\u4E0A\u7684\u201Cno\u201D\u8BE5\u4E3A\u201Cyes\u201D\uFF1A <img src="https://img-blog.csdnimg.cn/2019122819072660.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
</ul>
<p>(4) \u521B\u5EFA\u670D\u52A1\u6587\u4EF6 redis.service\uFF1A<code v-pre>vi /usr/lib/systemd/system/redis.service</code>
\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u4E2D\u7684\u8DEF\u5F84\u4EE5\u5B9E\u9645\u5404\u5F02\uFF09\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>	[Unit]
	Description=The redis-server Process Manager
	After=syslog.target network.target

	[Service]
	Type=simple
	PIDFile=/var/run/redis_6379.pid
	ExecStart=/usr/local/redis/redis-server /usr/local/redis/redis.conf
	ExecReload=/bin/kill -USR2 $MAINPID
	ExecStop=/bin/kill -SIGINT $MAINPID

	[Install]
	WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. \u5F00\u542F redis \u8FDC\u7A0B\u8BBF\u95EE\uFF08\u53EF\u5FFD\u7565\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF09\uFF1A</strong>
(1) \u4FEE\u6539 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A</p>
<ul>
<li>\u8BBE\u7F6E\u53EF\u8BBF\u95EE\u7684 ip\uFF1A\u4FEE\u6539\u8424\u5149\u5B57\u7684\u6587\u672C\u4E2D\u753B\u5708\u7684 ip \u5730\u5740\u8BA9\u5176\u4ED6\u53EF\u4EE5\u8BBF\u95EE
<img src="https://img-blog.csdnimg.cn/20191228214121699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
<li>\u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F\uFF1A\u5C06\u8424\u5149\u5B57\u6587\u672C\u7684\u201Cyes\u201D\u4FEE\u6539\u4E3A\u201Cno\u201D
<img src="https://img-blog.csdnimg.cn/20191228211505882.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
<li>\u8BBE\u7F6E\u5BC6\u7801\uFF1A\u6DFB\u52A0\u8424\u5149\u5B57\u7684\u6587\u672C\u6240\u793A
<img src="https://img-blog.csdnimg.cn/20191228205849892.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
</ul>
<p>(2) \u4FEE\u6539\u5B8C\u540E\u5E94\u5728 redis \u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u547D\u4EE4<code v-pre>redis-server redis.conf</code>\u6765\u68C0\u67E5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u4EA6\u53EF\u68C0\u67E5\u662F\u5426\u51FA\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u907F\u514D\u540E\u7EED\u4E0D\u5FC5\u8981\u7684\u95EE\u9898
(3) \u56E0\u4E3A\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u6240\u4EE5\u52BF\u5FC5\u8981\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u7684\u76D1\u542C\uFF1A - \u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=6379/tcp --permanent</code> - \u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code> - \u67E5\u770B\u9632\u706B\u5899\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --list-ports</code>
<strong>6. \u5F00\u542F\u670D\u52A1\u548C\u5F00\u673A\u81EA\u542F\u52A8\uFF1A</strong>
(1) \u5237\u65B0\u670D\u52A1\u914D\u7F6E\uFF1A<code v-pre>systemctl daemon-reload</code>
(2) \u5F00\u542F redis: <code v-pre>systemctl start redis</code>
(3) \u52A0\u5165\u5F00\u673A\u542F\u52A8\uFF1A<code v-pre>systemctl enable redis</code></p>
<h3 id="\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong>1. \u5B89\u88C5 gcc\uFF08gcc \u7528\u4E8E\u7F16\u8BD1\u63A5\u4E0B\u6765\u4E0B\u8F7D\u7684 nginx \u6E90\u7801\uFF09</strong>
\u4F7F\u7528<code v-pre>gcc -v</code>\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u8BE5\u547D\u4EE4\uFF0C\u5982\u672A\u5B89\u88C5\u5219\u6267\u884C<code v-pre>yum install gcc-c++</code></p>
<p><strong>2. \u5B89\u88C5 pcre \u548C pcre-devel \u4F9D\u8D56\uFF08nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002\uFF09</strong>
<code v-pre>yum install -y pcre pcre-devel</code></p>
<p><strong>3. \u5B89\u88C5 zlib zlib-devel \u4F9D\u8D56\uFF08zlib \u63D0\u4F9B\u4E86\u5F88\u591A\u538B\u7F29\u548C\u89E3\u65B9\u5F0F\uFF0Cnginx \u9700\u8981 zlib \u5BF9 http \u8FDB\u884C gzip\uFF09</strong>
<code v-pre>yum install -y zlib zlib-devel</code></p>
<p><strong>4. \u5B89\u88C5 openssl openssl-devel\uFF08openssl \u662F\u4E00\u4E2A\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0Cnginx \u8981\u652F\u6301 https \u5C31\u9700\u8981\u5B83\uFF09</strong>
<code v-pre>yum install -y openssl openssl-devel</code></p>
<p><strong>5. \u4E0B\u8F7D nginx \u5E76\u89E3\u538B</strong>
<code v-pre>wget http://nginx.org/download/nginx-1.9.9.tar.gz</code>
<code v-pre>tar -zxvf nginx-1.9.9</code></p>
<p><strong>6. \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FFD\u52A0\u5B89\u88C5 ssl \u6A21\u5757</strong>
<code v-pre>./configure --with-http_ssl_module</code></p>
<p><strong>7. \u4F7F\u7528 make \u7F16\u8BD1\u548C\u5B89\u88C5</strong>
<code v-pre>make &amp;&amp; make install</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>\u6CE8\u610F\uFF1A\u5982\u679C\u5B89\u88C5\u540E\u51FA\u73B0\u4E00\u4E2AMake[1]: Leaving directory \`/usr/local/nginx-1.9.9\`
\u5E76\u4E14\u5728nginx-1.9.9\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u5DF2\u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3Anginx\u7684\u6587\u4EF6\u5939\u5373\u53EF\u5FFD\u7565\u8BE5\u9519\u8BEF~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>8. \u67E5\u770B nginx \u662F\u5426\u5B89\u88C5\u6210\u529F</strong>
(1). \u8FDB\u5165 nginx \u6587\u4EF6\u4E0B\u7684 sbin \u76EE\u5F55\u8F93\u5165<code v-pre>./nginx -v</code>\u67E5\u770B\u7248\u672C\u53F7
(2).\u4F7F\u7528<code v-pre>netstat -ntpl | grep nginx</code>\u67E5\u770B\u5F53\u524D nginx \u5360\u7528\u7684\u7AEF\u53E3\u53F7
(3). \u4F7F\u7528<code v-pre>wget 127.0.0.1</code>\u6D4B\u8BD5\u8FD4\u56DE\u8868\u793A\u662F\u5426\u6B63\u5E38
(4). \u4F7F\u7528<code v-pre>curl 127.0.0.1</code>\u6D4B\u8BD5\u8FD4\u56DE\u9875\u9762\u7684\u503C\u662F\u5426\u6B63\u5E38</p>
<p><strong>9. \u914D\u7F6E nginx \u5F00\u673A\u81EA\u542F\u52A8</strong>
(1). \u8FDB\u5165\u76EE\u5F55<code v-pre>cd /usr/lib/systemd/system</code>
(2). \u521B\u5EFA nginx.service \u670D\u52A1\u6587\u4EF6<code v-pre>vi nginx.service</code>
(3). \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>[Unit]
Description=nginx
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx reload
ExecStop=/usr/local/nginx/sbin/nginx quit
PrivateTmp=true

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4). \u5F00\u673A\u81EA\u542F\u52A8\uFF1A<code v-pre>systemctl enable nginx.service</code>
(5). nginx \u670D\u52A1\u7684\u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F\uFF1A
\u542F\u52A8\uFF1A<code v-pre>systemctl start nginx.service</code>
\u5173\u95ED\uFF1A<code v-pre>systemctl stop nginx.service</code>
\u91CD\u542F\uFF1A<code v-pre>systemctl restart nginx.service</code></p>
<p><strong>10. \u9632\u706B\u5899\u5F00\u542F http\u3001https \u670D\u52A1\u4EE5\u53CA\u7AEF\u53E3\u76D1\u542C</strong>
\u5F00\u542F http \u670D\u52A1\uFF1A<code v-pre>firewall-cmd --zone=public --add-service=http --permanent</code>
\u5F00\u542F 80 \u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=80/tcp --permanent</code>
\u5F00\u542F https \u670D\u52A1\uFF1A<code v-pre>firewall-cmd --zone=public --add-service=https --permanent</code>
\u5F00\u542F 443 \u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=443/tcp --permanent</code>
\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code></p>
<p><strong>11. nginx + \u4E00\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A</strong>
(1). \u4FEE\u6539\u5B89\u88C5\u540E nginx \u6587\u4EF6\u7684 conf \u76EE\u5F55\u4E0B\u7684 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1A <code v-pre>vi nginx.conf</code>
(2). \u627E\u5230\u5E26\u6709# HTTPS Server \u7684\u5B57\u6837\uFF0C\u5C06\u5176\u4E0B\u6587\u672C\u6309\u7167\u4EE5\u4E0B\u6587\u672C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A</p>
<div class="language-\\ ext-\\ line-numbers-mode"><pre v-pre class="language-\\"><code>    # HTTPS Server
    #
    server {
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D

        ssl_certificate      cert/www/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem
        ssl_certificate_key  cert/www/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key
        ssl   on;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

        location / {
            proxy_pass   http://127.0.0.1:8080; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
            proxy_set_header Host                               $http_addr;
            proxy_set_header X-Real-IP                        $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            root   html;
            index  index.html index.htm;
        }

		# \u914D\u7F6E\u53E6\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528443\u7AEF\u53E3
		# location /test {
        #    proxy_pass   http://127.0.0.1:9090/test; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
        #    proxy_set_header Host                               $http_addr;
        #    proxy_set_header X-Real-IP                        $remote_addr;
        #    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        #    root   html;
        #    index  index.html index.htm;
		# }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3). \u5C06 http \u8BF7\u6C42\u91CD\u5B9A\u5411\u4E3A https \u8BF7\u6C42\uFF0C\u5728\u539F nginx.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u4E3A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>	server {
        listen       80;
        server_name  www.shnice.club; #\u586B\u5199\u8BBF\u95EE\u7684\u57DF\u540D
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps
		.....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -t</code>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E
(5). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -s reload</code>\u52A0\u8F7D\u914D\u7F6E</p>
<p><strong>12\u3001nginx + \u4E8C\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A</strong>
(1). \u5728 nginx \u6587\u4EF6\u5939\u4E0B\u4E0B\u521B\u5EFA vhosts \u76EE\u5F55\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A*.conf \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code># HTTP Server
#
server {
        listen 80;
        server_name localhost; #\u586B\u5199\u4F60\u8BBF\u95EE\u7684\u57DF\u540D
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps

        location / {
            index index.html index.htm;
        }
}

# HTTPS Server
#
server {
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D

        ssl_certificate      cert/abc/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem
        ssl_certificate_key  cert/abc/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key
        ssl   on;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

        location /abc {
            proxy_pass   http://127.0.0.1:8080/abc; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
            proxy_set_header Host                               $http_addr;
            proxy_set_header X-Real-IP                        $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            root   html;
            index  index.html index.htm;
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2). \u5BFC\u5165\u4E8C\u7EA7\u57DF\u540D\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u5230 nginx.conf \u4E2D\uFF1A
\u8FDB\u5165 conf \u76EE\u5F55\u4E0B\uFF0C\u5728 nginx.conf \u6587\u4EF6\u4E2D\u7684 http{}\u5305\u88F9\u4E2D\u5904\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="language-\\ ext-\\ line-numbers-mode"><pre v-pre class="language-\\"><code>	include /usr/local/nginx/vhosts/*;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -t</code>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E
(4). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -s reload</code>\u52A0\u8F7D\u914D\u7F6E</p>
`,date:"2022-07-12",deps:[],hoistedTags:[],links:[],pathInferred:"/20220711/2.html",pathLocale:"/",permalink:null,routeMeta:{title:"Centos7\u73AF\u5883\u642D\u5EFA"},slug:"2",filePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/20220711/2.md",filePathRelative:"20220711/2.md",componentFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/2.html.vue",componentFilePathRelative:"pages/20220711/2.html.vue",componentFileChunkName:"v-e5cc5690",dataFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/2.html.js",dataFilePathRelative:"pages/20220711/2.html.js",dataFileChunkName:"v-e5cc5690",htmlFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/dist/20220711/2.html",htmlFilePathRelative:"20220711/2.html"}]},"/tags/redis/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"tags",currentClassificationValue:"redis",pages:[{data:{key:"v-e5cc5690",path:"/20220711/2.html",title:"Centos7\u73AF\u5883\u642D\u5EFA",lang:"zh-CN",frontmatter:{title:"Centos7\u73AF\u5883\u642D\u5EFA",date:"2022-07-12 17:55:44",sidebar:"auto",categories:["Linux"],tags:["java","mysql","redis"],publish:!0},excerpt:"",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],git:{},filePathRelative:"20220711/2.md"},key:"v-e5cc5690",path:"/20220711/2.html",title:"Centos7\u73AF\u5883\u642D\u5EFA",lang:"zh-CN",frontmatter:{title:"Centos7\u73AF\u5883\u642D\u5EFA",date:"2022-07-12 17:55:44",sidebar:"auto",categories:["Linux"],tags:["java","mysql","redis"],publish:!0},excerpt:"",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],content:`\r
<!-- more -->\r
\r
### \u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\r
\r
**1. \u521B\u5EFA jdk \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09**\r
\`mkdir -p usr/local/src\`\r
**2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D jdk \u5305**\r
\`wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz\`\r
**3. \u89E3\u538B\uFF08\u5982\u4E0B\u64CD\u4F5C\u662F\u5DF2\u7ECF\u8DF3\u5230\u6307\u5B9A\u5B58\u653E jdk \u7684\u76EE\u5F55\u4F4D\u7F6E\uFF09**\r
\`tar -zxvf jdk-8u131-linux-x64.tar.gz\`\r
**4. \u91CD\u547D\u540D**\r
\`mv jdk1.8.0_131 jdk1.8\`\r
**5. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF**\r
(1)\u8FDB\u5165\u7CFB\u7EDF\u6587\u4EF6\u547D\u4EE4\u5982\u4E0B\uFF1A\`vi /etc/profile\`\r
(2)\u6309\u201Cshift+g\u201D\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u6587\u672C\u672B\u5C3E\uFF0C\u518D\u6309\u201Ci\u201D\u6309\u952E\u8FDB\u884C\u7F16\u8F91\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6587\u672C(\u5199\u5B8C\u540E\uFF0C\u6309 ESC \u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\u5E76\u8F93\u5165\u201C:x\u201D\u4EE5\u4FDD\u5B58\u5E76\u9000\u51FA)\uFF1A\r
\r
\`\`\`/\r
export JAVA_HOME=/usr/local/src/jdk1.8\r
export PATH=$PATH:$JAVA_HOME/bin\r
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar\r
\`\`\`\r
\r
**6. \u8BA9\u914D\u7F6E\u6587\u4EF6\u751F\u6548\uFF1A**\`source /etc/profile\`\r
**7. \u68C0\u67E5 jdk \u662F\u5426\u914D\u7F6E\u6210\u529F\uFF1A** \`java -version\`\r
\r
### \u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09\r
\r
**1. \u521B\u5EFA tomcat \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09**\r
\r
**2. \u4F7F\u7528 wget \u4E0B\u8F7D tomcat**\r
\r
**3. \u89E3\u538B**\r
\r
**4. \u542F\u52A8 tomcat**\r
\r
**5. \u4FEE\u6539 tomcat \u7AEF\u53E3**\r
\r
**6. \u6D4B\u8BD5\u8BBF\u95EE**\r
\r
### \u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**_\u6CE8\u610F\uFF1A\u9664\u4E86\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 3306 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 3306 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09_**\r
\r
**1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B**\r
\r
**2. \u4E0B\u8F7D mysql \u5E76\u542F\u52A8\u670D\u52A1**\r
(1)\u4F7F\u7528 wget \u4E0B\u8F7D mysql \u6E90\u5305\u5E76\u7528 yum \u5B89\u88C5\uFF1A\r
\`\u4E0B\u8F7D\uFF1A wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm\`\r
\`\u5B89\u88C5\uFF1A yum -y localinstall mysql57-community-release-el7-11.noarch.rpm\`\r
(3)\u5728\u7EBF\u5B89\u88C5 Mysql\uFF1A\`yum -y install mysql-community-server\`\r
(4)\u542F\u52A8\u670D\u52A1\uFF1A\`systemctl start mysqld\`\r
(5)\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\uFF1A\r
\`systemctl enable mysqld\`\r
\`systemctl deaemon-reload\`\r
\r
**3. \u4FEE\u6539\u672C\u5730\u767B\u5F55\u5BC6\u7801**\r
(1) \u901A\u8FC7\`vi /var/log/mysqld.log\`\u8FDB\u5165\u8BE5\u6587\u4EF6\u4E2D\u627E\u5230\u6807\u9EC4\u8FD9\u6BB5\uFF0C\u800C\u7EA2\u8272\u5708\u4FBF\u662F\u9ED8\u8BA4\u767B\u9646\u5BC6\u7801\uFF1A\r
![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191227220213561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70)\r
(2)\u901A\u8FC7\u4EE5\u4E0A\u5F97\u5230\u7684\u5BC6\u7801\u767B\u5F55\u547D\u4EE4\`mysql -u root -p\` \uFF0C\u5373\u53EF\u8FDB\u5165 mysql \u4E2D\u3002\u4E0B\u9762\u5219\u662F\u4FEE\u6539\u5BC6\u7801\uFF1A\r
\`mysql> alter user 'root'@'localhost' identified by 'Qq88888.';\`\r
\r
**4. \u8BBE\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF08\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF09\uFF0C\u5F00\u542F\u8FDC\u7A0B\u767B\u5F55\u524D\u63D0\u8981\u4FDD\u8BC1\u5F00\u542F\u9632\u706B\u5899\uFF0C\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A**\r
(1)\u5141\u8BB8\u8BE5\u8D26\u53F7\u80FD\u591F\u88AB\u8FDC\u7A0B\u767B\u5F55\uFF1A \` mysql> grant all privileges on *.* to 'root'@'%' identified by 'Qq88888.' with grant option;\`\r
(2)\u67E5\u770B\u9632\u706B\u5899\u662F\u5426\u5F00\u542F\uFF1A \`firewall-cmd --state\`\r
(3)\u5F00\u542F\u9632\u706B\u5899\uFF1A \`systemctl start firewalld.service\` - \u5173\u95ED\u9632\u706B\u5899: \`systemctl stop firewalld.service\` - \u7981\u7528\u9632\u706B\u5899: \`systemctl disable firewalld.service\` - \u67E5\u770B\u9632\u706B\u5899\u76D1\u542C\u7684\u7AEF\u53E3: \`firewall-cmd --list-port\`\r
(4)\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A\`firewall-cmd --zone=public --add-port=3306/tcp --permanent\`\r
(5)\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\`\r
\r
**5. \u914D\u7F6E my.cnf**\r
\u8FDB\u5165\`vi /etc/my.cnf\`\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u672C\u6587\u8FDB\u884C\u7F16\u7801\u8BBE\u7F6E\uFF1A\r
\r
\`\`\`/\r
character_set_server=utf8\r
init_connect='SET NAMES utf8'\r
\`\`\`\r
\r
**6. \u91CD\u542F\u52A8 mysql**\r
\`systemctl restart mysqld\`\r
\r
### \u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**_\u6CE8\u610F\uFF1A\u540C\u4E0A\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 6379 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09_**\r
\r
**1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B**\r
\r
**2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D redis\uFF1A**\`wget http://download.redis.io/releases/redis-4.0.8.tar.gz\`\r
\r
**3. \u89E3\u538B\u3001\u7F16\u8BD1\u548C\u5B89\u88C5\uFF1A**\r
(1) \u89E3\u538B\uFF1A\`tar -zxvf redis-4.0.8.tar.gz\`\r
(2) \u5B8C\u6210\u540E\u8FDB\u5165\u89E3\u538B\u7684 redis-4.0.8 \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 make \u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF1A\`make\`\r
(3) \u5B89\u88C5\uFF1A\`make install\`\r
\r
**4. \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8**\r
(1) \u521B\u5EFA\u65B0\u76EE\u5F55\uFF1A\`mkdir -p /usr/local/redis\`\r
(2) \u5C06/usr/local/src/redis-4.0.8/src \u76EE\u5F55\u4E0B\u7684 redis-server\u3001redis-cli \u548C/usr/local/src/redis-4.0.8 \u76EE\u5F55\u4E0B\u7684 redis.conf \u6587\u4EF6\u62F7\u8D1D\u5230\u521B\u5EFA\u7684\u76EE\u5F55\u4E2D\uFF1A\r
\`cp redis-server /usr/local/redis\`\r
\`cp redis-cli /usr/local/redis\`\r
\`cp ../redis.conf /usr/local/redis\`\r
(3)\u5F00\u542F\u540E\u53F0\u8FD0\u884C\uFF0C\u4FEE\u6539\u62F7\u8D1D\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF1A\`vi /usr/local/redis/redis.conf\`\r
\r
-   \u5C06\u8424\u5149\u5B57\u4E0A\u7684\u201Cno\u201D\u8BE5\u4E3A\u201Cyes\u201D\uFF1A ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/2019122819072660.png)\r
\r
(4) \u521B\u5EFA\u670D\u52A1\u6587\u4EF6 redis.service\uFF1A\`vi /usr/lib/systemd/system/redis.service\`\r
\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u4E2D\u7684\u8DEF\u5F84\u4EE5\u5B9E\u9645\u5404\u5F02\uFF09\uFF1A\r
\r
\`\`\`/\r
	[Unit]\r
	Description=The redis-server Process Manager\r
	After=syslog.target network.target\r
\r
	[Service]\r
	Type=simple\r
	PIDFile=/var/run/redis_6379.pid\r
	ExecStart=/usr/local/redis/redis-server /usr/local/redis/redis.conf\r
	ExecReload=/bin/kill -USR2 $MAINPID\r
	ExecStop=/bin/kill -SIGINT $MAINPID\r
\r
	[Install]\r
	WantedBy=multi-user.target\r
\`\`\`\r
\r
**5. \u5F00\u542F redis \u8FDC\u7A0B\u8BBF\u95EE\uFF08\u53EF\u5FFD\u7565\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF09\uFF1A**\r
(1) \u4FEE\u6539 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A\r
\r
-   \u8BBE\u7F6E\u53EF\u8BBF\u95EE\u7684 ip\uFF1A\u4FEE\u6539\u8424\u5149\u5B57\u7684\u6587\u672C\u4E2D\u753B\u5708\u7684 ip \u5730\u5740\u8BA9\u5176\u4ED6\u53EF\u4EE5\u8BBF\u95EE\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228214121699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70)\r
-   \u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F\uFF1A\u5C06\u8424\u5149\u5B57\u6587\u672C\u7684\u201Cyes\u201D\u4FEE\u6539\u4E3A\u201Cno\u201D\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228211505882.png)\r
-   \u8BBE\u7F6E\u5BC6\u7801\uFF1A\u6DFB\u52A0\u8424\u5149\u5B57\u7684\u6587\u672C\u6240\u793A\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228205849892.png)\r
\r
(2) \u4FEE\u6539\u5B8C\u540E\u5E94\u5728 redis \u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u547D\u4EE4\`redis-server redis.conf\`\u6765\u68C0\u67E5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u4EA6\u53EF\u68C0\u67E5\u662F\u5426\u51FA\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u907F\u514D\u540E\u7EED\u4E0D\u5FC5\u8981\u7684\u95EE\u9898\r
(3) \u56E0\u4E3A\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u6240\u4EE5\u52BF\u5FC5\u8981\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u7684\u76D1\u542C\uFF1A - \u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A\`firewall-cmd --zone=public --add-port=6379/tcp --permanent\` - \u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\` - \u67E5\u770B\u9632\u706B\u5899\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --list-ports\`\r
**6. \u5F00\u542F\u670D\u52A1\u548C\u5F00\u673A\u81EA\u542F\u52A8\uFF1A**\r
(1) \u5237\u65B0\u670D\u52A1\u914D\u7F6E\uFF1A\`systemctl daemon-reload\`\r
(2) \u5F00\u542F redis: \`systemctl start redis\`\r
(3) \u52A0\u5165\u5F00\u673A\u542F\u52A8\uFF1A\`systemctl enable redis\`\r
\r
### \u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**1. \u5B89\u88C5 gcc\uFF08gcc \u7528\u4E8E\u7F16\u8BD1\u63A5\u4E0B\u6765\u4E0B\u8F7D\u7684 nginx \u6E90\u7801\uFF09**\r
\u4F7F\u7528\`gcc -v\`\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u8BE5\u547D\u4EE4\uFF0C\u5982\u672A\u5B89\u88C5\u5219\u6267\u884C\`yum install gcc-c++\`\r
\r
**2. \u5B89\u88C5 pcre \u548C pcre-devel \u4F9D\u8D56\uFF08nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002\uFF09**\r
\`yum install -y pcre pcre-devel\`\r
\r
**3. \u5B89\u88C5 zlib zlib-devel \u4F9D\u8D56\uFF08zlib \u63D0\u4F9B\u4E86\u5F88\u591A\u538B\u7F29\u548C\u89E3\u65B9\u5F0F\uFF0Cnginx \u9700\u8981 zlib \u5BF9 http \u8FDB\u884C gzip\uFF09**\r
\`yum install -y zlib zlib-devel\`\r
\r
**4. \u5B89\u88C5 openssl openssl-devel\uFF08openssl \u662F\u4E00\u4E2A\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0Cnginx \u8981\u652F\u6301 https \u5C31\u9700\u8981\u5B83\uFF09**\r
\`yum install -y openssl openssl-devel\`\r
\r
**5. \u4E0B\u8F7D nginx \u5E76\u89E3\u538B**\r
\`wget http://nginx.org/download/nginx-1.9.9.tar.gz\`\r
\`tar -zxvf nginx-1.9.9\`\r
\r
**6. \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FFD\u52A0\u5B89\u88C5 ssl \u6A21\u5757**\r
\`./configure --with-http_ssl_module\`\r
\r
**7. \u4F7F\u7528 make \u7F16\u8BD1\u548C\u5B89\u88C5**\r
\`make && make install\`\r
\r
\`\`\`\r
\u6CE8\u610F\uFF1A\u5982\u679C\u5B89\u88C5\u540E\u51FA\u73B0\u4E00\u4E2AMake[1]: Leaving directory \`/usr/local/nginx-1.9.9\`\r
\u5E76\u4E14\u5728nginx-1.9.9\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u5DF2\u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3Anginx\u7684\u6587\u4EF6\u5939\u5373\u53EF\u5FFD\u7565\u8BE5\u9519\u8BEF~\r
\`\`\`\r
\r
**8. \u67E5\u770B nginx \u662F\u5426\u5B89\u88C5\u6210\u529F**\r
(1). \u8FDB\u5165 nginx \u6587\u4EF6\u4E0B\u7684 sbin \u76EE\u5F55\u8F93\u5165\`./nginx -v\`\u67E5\u770B\u7248\u672C\u53F7\r
(2).\u4F7F\u7528\`netstat -ntpl | grep nginx\`\u67E5\u770B\u5F53\u524D nginx \u5360\u7528\u7684\u7AEF\u53E3\u53F7\r
(3). \u4F7F\u7528\`wget 127.0.0.1\`\u6D4B\u8BD5\u8FD4\u56DE\u8868\u793A\u662F\u5426\u6B63\u5E38\r
(4). \u4F7F\u7528\`curl 127.0.0.1\`\u6D4B\u8BD5\u8FD4\u56DE\u9875\u9762\u7684\u503C\u662F\u5426\u6B63\u5E38\r
\r
**9. \u914D\u7F6E nginx \u5F00\u673A\u81EA\u542F\u52A8**\r
(1). \u8FDB\u5165\u76EE\u5F55\`cd /usr/lib/systemd/system\`\r
(2). \u521B\u5EFA nginx.service \u670D\u52A1\u6587\u4EF6\`vi nginx.service\`\r
(3). \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A\r
\r
\`\`\`/\r
[Unit]\r
Description=nginx\r
After=network.target\r
\r
[Service]\r
Type=forking\r
ExecStart=/usr/local/nginx/sbin/nginx\r
ExecReload=/usr/local/nginx/sbin/nginx reload\r
ExecStop=/usr/local/nginx/sbin/nginx quit\r
PrivateTmp=true\r
\r
[Install]\r
WantedBy=multi-user.target\r
\`\`\`\r
\r
(4). \u5F00\u673A\u81EA\u542F\u52A8\uFF1A\`systemctl enable nginx.service\`\r
(5). nginx \u670D\u52A1\u7684\u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F\uFF1A\r
\u542F\u52A8\uFF1A\`systemctl start nginx.service\`\r
\u5173\u95ED\uFF1A\`systemctl stop nginx.service\`\r
\u91CD\u542F\uFF1A\`systemctl restart nginx.service\`\r
\r
**10. \u9632\u706B\u5899\u5F00\u542F http\u3001https \u670D\u52A1\u4EE5\u53CA\u7AEF\u53E3\u76D1\u542C**\r
\u5F00\u542F http \u670D\u52A1\uFF1A\`firewall-cmd --zone=public --add-service=http --permanent\`\r
\u5F00\u542F 80 \u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --add-port=80/tcp --permanent\`\r
\u5F00\u542F https \u670D\u52A1\uFF1A\`firewall-cmd --zone=public --add-service=https --permanent\`\r
\u5F00\u542F 443 \u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --add-port=443/tcp --permanent\`\r
\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\`\r
\r
**11. nginx + \u4E00\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A**\r
(1). \u4FEE\u6539\u5B89\u88C5\u540E nginx \u6587\u4EF6\u7684 conf \u76EE\u5F55\u4E0B\u7684 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1A \`vi nginx.conf\`\r
(2). \u627E\u5230\u5E26\u6709# HTTPS Server \u7684\u5B57\u6837\uFF0C\u5C06\u5176\u4E0B\u6587\u672C\u6309\u7167\u4EE5\u4E0B\u6587\u672C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A\r
\r
\`\`\`\\\r
    # HTTPS Server\r
    #\r
    server {\r
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443\r
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D\r
\r
        ssl_certificate      cert/www/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem\r
        ssl_certificate_key  cert/www/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key\r
        ssl   on;\r
\r
        ssl_session_cache    shared:SSL:1m;\r
        ssl_session_timeout  5m;\r
\r
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\r
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\r
        ssl_prefer_server_ciphers  on;\r
\r
        location / {\r
            proxy_pass   http://127.0.0.1:8080; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
            proxy_set_header Host                               $http_addr;\r
            proxy_set_header X-Real-IP                        $remote_addr;\r
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
            root   html;\r
            index  index.html index.htm;\r
        }\r
\r
		# \u914D\u7F6E\u53E6\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528443\u7AEF\u53E3\r
		# location /test {\r
        #    proxy_pass   http://127.0.0.1:9090/test; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
        #    proxy_set_header Host                               $http_addr;\r
        #    proxy_set_header X-Real-IP                        $remote_addr;\r
        #    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
        #    root   html;\r
        #    index  index.html index.htm;\r
		# }\r
    }\r
\`\`\`\r
\r
(3). \u5C06 http \u8BF7\u6C42\u91CD\u5B9A\u5411\u4E3A https \u8BF7\u6C42\uFF0C\u5728\u539F nginx.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u4E3A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF1A\r
\r
\`\`\`/\r
	server {\r
        listen       80;\r
        server_name  www.shnice.club; #\u586B\u5199\u8BBF\u95EE\u7684\u57DF\u540D\r
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps\r
		.....\r
\`\`\`\r
\r
(4). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -t\`\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E\r
(5). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -s reload\`\u52A0\u8F7D\u914D\u7F6E\r
\r
**12\u3001nginx + \u4E8C\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A**\r
(1). \u5728 nginx \u6587\u4EF6\u5939\u4E0B\u4E0B\u521B\u5EFA vhosts \u76EE\u5F55\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A\\*.conf \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B\uFF1A\r
\r
\`\`\`/\r
# HTTP Server\r
#\r
server {\r
        listen 80;\r
        server_name localhost; #\u586B\u5199\u4F60\u8BBF\u95EE\u7684\u57DF\u540D\r
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps\r
\r
        location / {\r
            index index.html index.htm;\r
        }\r
}\r
\r
# HTTPS Server\r
#\r
server {\r
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443\r
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D\r
\r
        ssl_certificate      cert/abc/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem\r
        ssl_certificate_key  cert/abc/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key\r
        ssl   on;\r
\r
        ssl_session_cache    shared:SSL:1m;\r
        ssl_session_timeout  5m;\r
\r
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\r
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\r
        ssl_prefer_server_ciphers  on;\r
\r
        location /abc {\r
            proxy_pass   http://127.0.0.1:8080/abc; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
            proxy_set_header Host                               $http_addr;\r
            proxy_set_header X-Real-IP                        $remote_addr;\r
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
            root   html;\r
            index  index.html index.htm;\r
        }\r
}\r
\`\`\`\r
\r
(2). \u5BFC\u5165\u4E8C\u7EA7\u57DF\u540D\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u5230 nginx.conf \u4E2D\uFF1A\r
\u8FDB\u5165 conf \u76EE\u5F55\u4E0B\uFF0C\u5728 nginx.conf \u6587\u4EF6\u4E2D\u7684 http{}\u5305\u88F9\u4E2D\u5904\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A\r
\r
\`\`\`\\\r
	include /usr/local/nginx/vhosts/*;\r
\`\`\`\r
\r
(3). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -t\`\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E\r
(4). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -s reload\`\u52A0\u8F7D\u914D\u7F6E\r
`,contentRendered:`<!-- more -->
<h3 id="\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</h3>
<p><strong>1. \u521B\u5EFA jdk \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09</strong>
<code v-pre>mkdir -p usr/local/src</code>
<strong>2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D jdk \u5305</strong>
<code v-pre>wget --no-check-certificate --no-cookies --header &quot;Cookie: oraclelicense=accept-securebackup-cookie&quot; http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz</code>
<strong>3. \u89E3\u538B\uFF08\u5982\u4E0B\u64CD\u4F5C\u662F\u5DF2\u7ECF\u8DF3\u5230\u6307\u5B9A\u5B58\u653E jdk \u7684\u76EE\u5F55\u4F4D\u7F6E\uFF09</strong>
<code v-pre>tar -zxvf jdk-8u131-linux-x64.tar.gz</code>
<strong>4. \u91CD\u547D\u540D</strong>
<code v-pre>mv jdk1.8.0_131 jdk1.8</code>
<strong>5. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF</strong>
(1)\u8FDB\u5165\u7CFB\u7EDF\u6587\u4EF6\u547D\u4EE4\u5982\u4E0B\uFF1A<code v-pre>vi /etc/profile</code>
(2)\u6309\u201Cshift+g\u201D\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u6587\u672C\u672B\u5C3E\uFF0C\u518D\u6309\u201Ci\u201D\u6309\u952E\u8FDB\u884C\u7F16\u8F91\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6587\u672C(\u5199\u5B8C\u540E\uFF0C\u6309 ESC \u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\u5E76\u8F93\u5165\u201C:x\u201D\u4EE5\u4FDD\u5B58\u5E76\u9000\u51FA)\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>export JAVA_HOME=/usr/local/src/jdk1.8
export PATH=$PATH:$JAVA_HOME/bin
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. \u8BA9\u914D\u7F6E\u6587\u4EF6\u751F\u6548\uFF1A</strong><code v-pre>source /etc/profile</code>
<strong>7. \u68C0\u67E5 jdk \u662F\u5426\u914D\u7F6E\u6210\u529F\uFF1A</strong> <code v-pre>java -version</code></p>
<h3 id="\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981" aria-hidden="true">#</a> \u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09</h3>
<p><strong>1. \u521B\u5EFA tomcat \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09</strong></p>
<p><strong>2. \u4F7F\u7528 wget \u4E0B\u8F7D tomcat</strong></p>
<p><strong>3. \u89E3\u538B</strong></p>
<p><strong>4. \u542F\u52A8 tomcat</strong></p>
<p><strong>5. \u4FEE\u6539 tomcat \u7AEF\u53E3</strong></p>
<p><strong>6. \u6D4B\u8BD5\u8BBF\u95EE</strong></p>
<h3 id="\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong><em>\u6CE8\u610F\uFF1A\u9664\u4E86\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 3306 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 3306 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09</em></strong></p>
<p><strong>1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B</strong></p>
<p><strong>2. \u4E0B\u8F7D mysql \u5E76\u542F\u52A8\u670D\u52A1</strong>
(1)\u4F7F\u7528 wget \u4E0B\u8F7D mysql \u6E90\u5305\u5E76\u7528 yum \u5B89\u88C5\uFF1A
<code v-pre>\u4E0B\u8F7D\uFF1A wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm</code>
<code v-pre>\u5B89\u88C5\uFF1A yum -y localinstall mysql57-community-release-el7-11.noarch.rpm</code>
(3)\u5728\u7EBF\u5B89\u88C5 Mysql\uFF1A<code v-pre>yum -y install mysql-community-server</code>
(4)\u542F\u52A8\u670D\u52A1\uFF1A<code v-pre>systemctl start mysqld</code>
(5)\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\uFF1A
<code v-pre>systemctl enable mysqld</code>
<code v-pre>systemctl deaemon-reload</code></p>
<p><strong>3. \u4FEE\u6539\u672C\u5730\u767B\u5F55\u5BC6\u7801</strong>
(1) \u901A\u8FC7<code v-pre>vi /var/log/mysqld.log</code>\u8FDB\u5165\u8BE5\u6587\u4EF6\u4E2D\u627E\u5230\u6807\u9EC4\u8FD9\u6BB5\uFF0C\u800C\u7EA2\u8272\u5708\u4FBF\u662F\u9ED8\u8BA4\u767B\u9646\u5BC6\u7801\uFF1A
<img src="https://img-blog.csdnimg.cn/20191227220213561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0">
(2)\u901A\u8FC7\u4EE5\u4E0A\u5F97\u5230\u7684\u5BC6\u7801\u767B\u5F55\u547D\u4EE4<code v-pre>mysql -u root -p</code> \uFF0C\u5373\u53EF\u8FDB\u5165 mysql \u4E2D\u3002\u4E0B\u9762\u5219\u662F\u4FEE\u6539\u5BC6\u7801\uFF1A
<code v-pre>mysql&gt; alter user 'root'@'localhost' identified by 'Qq88888.';</code></p>
<p><strong>4. \u8BBE\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF08\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF09\uFF0C\u5F00\u542F\u8FDC\u7A0B\u767B\u5F55\u524D\u63D0\u8981\u4FDD\u8BC1\u5F00\u542F\u9632\u706B\u5899\uFF0C\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A</strong>
(1)\u5141\u8BB8\u8BE5\u8D26\u53F7\u80FD\u591F\u88AB\u8FDC\u7A0B\u767B\u5F55\uFF1A <code v-pre> mysql&gt; grant all privileges on *.* to 'root'@'%' identified by 'Qq88888.' with grant option;</code>
(2)\u67E5\u770B\u9632\u706B\u5899\u662F\u5426\u5F00\u542F\uFF1A <code v-pre>firewall-cmd --state</code>
(3)\u5F00\u542F\u9632\u706B\u5899\uFF1A <code v-pre>systemctl start firewalld.service</code> - \u5173\u95ED\u9632\u706B\u5899: <code v-pre>systemctl stop firewalld.service</code> - \u7981\u7528\u9632\u706B\u5899: <code v-pre>systemctl disable firewalld.service</code> - \u67E5\u770B\u9632\u706B\u5899\u76D1\u542C\u7684\u7AEF\u53E3: <code v-pre>firewall-cmd --list-port</code>
(4)\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=3306/tcp --permanent</code>
(5)\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code></p>
<p><strong>5. \u914D\u7F6E my.cnf</strong>
\u8FDB\u5165<code v-pre>vi /etc/my.cnf</code>\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u672C\u6587\u8FDB\u884C\u7F16\u7801\u8BBE\u7F6E\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>character_set_server=utf8
init_connect='SET NAMES utf8'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. \u91CD\u542F\u52A8 mysql</strong>
<code v-pre>systemctl restart mysqld</code></p>
<h3 id="\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong><em>\u6CE8\u610F\uFF1A\u540C\u4E0A\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 6379 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09</em></strong></p>
<p><strong>1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B</strong></p>
<p><strong>2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D redis\uFF1A</strong><code v-pre>wget http://download.redis.io/releases/redis-4.0.8.tar.gz</code></p>
<p><strong>3. \u89E3\u538B\u3001\u7F16\u8BD1\u548C\u5B89\u88C5\uFF1A</strong>
(1) \u89E3\u538B\uFF1A<code v-pre>tar -zxvf redis-4.0.8.tar.gz</code>
(2) \u5B8C\u6210\u540E\u8FDB\u5165\u89E3\u538B\u7684 redis-4.0.8 \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 make \u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF1A<code v-pre>make</code>
(3) \u5B89\u88C5\uFF1A<code v-pre>make install</code></p>
<p><strong>4. \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8</strong>
(1) \u521B\u5EFA\u65B0\u76EE\u5F55\uFF1A<code v-pre>mkdir -p /usr/local/redis</code>
(2) \u5C06/usr/local/src/redis-4.0.8/src \u76EE\u5F55\u4E0B\u7684 redis-server\u3001redis-cli \u548C/usr/local/src/redis-4.0.8 \u76EE\u5F55\u4E0B\u7684 redis.conf \u6587\u4EF6\u62F7\u8D1D\u5230\u521B\u5EFA\u7684\u76EE\u5F55\u4E2D\uFF1A
<code v-pre>cp redis-server /usr/local/redis</code>
<code v-pre>cp redis-cli /usr/local/redis</code>
<code v-pre>cp ../redis.conf /usr/local/redis</code>
(3)\u5F00\u542F\u540E\u53F0\u8FD0\u884C\uFF0C\u4FEE\u6539\u62F7\u8D1D\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF1A<code v-pre>vi /usr/local/redis/redis.conf</code></p>
<ul>
<li>\u5C06\u8424\u5149\u5B57\u4E0A\u7684\u201Cno\u201D\u8BE5\u4E3A\u201Cyes\u201D\uFF1A <img src="https://img-blog.csdnimg.cn/2019122819072660.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
</ul>
<p>(4) \u521B\u5EFA\u670D\u52A1\u6587\u4EF6 redis.service\uFF1A<code v-pre>vi /usr/lib/systemd/system/redis.service</code>
\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u4E2D\u7684\u8DEF\u5F84\u4EE5\u5B9E\u9645\u5404\u5F02\uFF09\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>	[Unit]
	Description=The redis-server Process Manager
	After=syslog.target network.target

	[Service]
	Type=simple
	PIDFile=/var/run/redis_6379.pid
	ExecStart=/usr/local/redis/redis-server /usr/local/redis/redis.conf
	ExecReload=/bin/kill -USR2 $MAINPID
	ExecStop=/bin/kill -SIGINT $MAINPID

	[Install]
	WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. \u5F00\u542F redis \u8FDC\u7A0B\u8BBF\u95EE\uFF08\u53EF\u5FFD\u7565\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF09\uFF1A</strong>
(1) \u4FEE\u6539 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A</p>
<ul>
<li>\u8BBE\u7F6E\u53EF\u8BBF\u95EE\u7684 ip\uFF1A\u4FEE\u6539\u8424\u5149\u5B57\u7684\u6587\u672C\u4E2D\u753B\u5708\u7684 ip \u5730\u5740\u8BA9\u5176\u4ED6\u53EF\u4EE5\u8BBF\u95EE
<img src="https://img-blog.csdnimg.cn/20191228214121699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
<li>\u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F\uFF1A\u5C06\u8424\u5149\u5B57\u6587\u672C\u7684\u201Cyes\u201D\u4FEE\u6539\u4E3A\u201Cno\u201D
<img src="https://img-blog.csdnimg.cn/20191228211505882.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
<li>\u8BBE\u7F6E\u5BC6\u7801\uFF1A\u6DFB\u52A0\u8424\u5149\u5B57\u7684\u6587\u672C\u6240\u793A
<img src="https://img-blog.csdnimg.cn/20191228205849892.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
</ul>
<p>(2) \u4FEE\u6539\u5B8C\u540E\u5E94\u5728 redis \u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u547D\u4EE4<code v-pre>redis-server redis.conf</code>\u6765\u68C0\u67E5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u4EA6\u53EF\u68C0\u67E5\u662F\u5426\u51FA\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u907F\u514D\u540E\u7EED\u4E0D\u5FC5\u8981\u7684\u95EE\u9898
(3) \u56E0\u4E3A\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u6240\u4EE5\u52BF\u5FC5\u8981\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u7684\u76D1\u542C\uFF1A - \u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=6379/tcp --permanent</code> - \u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code> - \u67E5\u770B\u9632\u706B\u5899\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --list-ports</code>
<strong>6. \u5F00\u542F\u670D\u52A1\u548C\u5F00\u673A\u81EA\u542F\u52A8\uFF1A</strong>
(1) \u5237\u65B0\u670D\u52A1\u914D\u7F6E\uFF1A<code v-pre>systemctl daemon-reload</code>
(2) \u5F00\u542F redis: <code v-pre>systemctl start redis</code>
(3) \u52A0\u5165\u5F00\u673A\u542F\u52A8\uFF1A<code v-pre>systemctl enable redis</code></p>
<h3 id="\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong>1. \u5B89\u88C5 gcc\uFF08gcc \u7528\u4E8E\u7F16\u8BD1\u63A5\u4E0B\u6765\u4E0B\u8F7D\u7684 nginx \u6E90\u7801\uFF09</strong>
\u4F7F\u7528<code v-pre>gcc -v</code>\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u8BE5\u547D\u4EE4\uFF0C\u5982\u672A\u5B89\u88C5\u5219\u6267\u884C<code v-pre>yum install gcc-c++</code></p>
<p><strong>2. \u5B89\u88C5 pcre \u548C pcre-devel \u4F9D\u8D56\uFF08nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002\uFF09</strong>
<code v-pre>yum install -y pcre pcre-devel</code></p>
<p><strong>3. \u5B89\u88C5 zlib zlib-devel \u4F9D\u8D56\uFF08zlib \u63D0\u4F9B\u4E86\u5F88\u591A\u538B\u7F29\u548C\u89E3\u65B9\u5F0F\uFF0Cnginx \u9700\u8981 zlib \u5BF9 http \u8FDB\u884C gzip\uFF09</strong>
<code v-pre>yum install -y zlib zlib-devel</code></p>
<p><strong>4. \u5B89\u88C5 openssl openssl-devel\uFF08openssl \u662F\u4E00\u4E2A\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0Cnginx \u8981\u652F\u6301 https \u5C31\u9700\u8981\u5B83\uFF09</strong>
<code v-pre>yum install -y openssl openssl-devel</code></p>
<p><strong>5. \u4E0B\u8F7D nginx \u5E76\u89E3\u538B</strong>
<code v-pre>wget http://nginx.org/download/nginx-1.9.9.tar.gz</code>
<code v-pre>tar -zxvf nginx-1.9.9</code></p>
<p><strong>6. \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FFD\u52A0\u5B89\u88C5 ssl \u6A21\u5757</strong>
<code v-pre>./configure --with-http_ssl_module</code></p>
<p><strong>7. \u4F7F\u7528 make \u7F16\u8BD1\u548C\u5B89\u88C5</strong>
<code v-pre>make &amp;&amp; make install</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>\u6CE8\u610F\uFF1A\u5982\u679C\u5B89\u88C5\u540E\u51FA\u73B0\u4E00\u4E2AMake[1]: Leaving directory \`/usr/local/nginx-1.9.9\`
\u5E76\u4E14\u5728nginx-1.9.9\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u5DF2\u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3Anginx\u7684\u6587\u4EF6\u5939\u5373\u53EF\u5FFD\u7565\u8BE5\u9519\u8BEF~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>8. \u67E5\u770B nginx \u662F\u5426\u5B89\u88C5\u6210\u529F</strong>
(1). \u8FDB\u5165 nginx \u6587\u4EF6\u4E0B\u7684 sbin \u76EE\u5F55\u8F93\u5165<code v-pre>./nginx -v</code>\u67E5\u770B\u7248\u672C\u53F7
(2).\u4F7F\u7528<code v-pre>netstat -ntpl | grep nginx</code>\u67E5\u770B\u5F53\u524D nginx \u5360\u7528\u7684\u7AEF\u53E3\u53F7
(3). \u4F7F\u7528<code v-pre>wget 127.0.0.1</code>\u6D4B\u8BD5\u8FD4\u56DE\u8868\u793A\u662F\u5426\u6B63\u5E38
(4). \u4F7F\u7528<code v-pre>curl 127.0.0.1</code>\u6D4B\u8BD5\u8FD4\u56DE\u9875\u9762\u7684\u503C\u662F\u5426\u6B63\u5E38</p>
<p><strong>9. \u914D\u7F6E nginx \u5F00\u673A\u81EA\u542F\u52A8</strong>
(1). \u8FDB\u5165\u76EE\u5F55<code v-pre>cd /usr/lib/systemd/system</code>
(2). \u521B\u5EFA nginx.service \u670D\u52A1\u6587\u4EF6<code v-pre>vi nginx.service</code>
(3). \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>[Unit]
Description=nginx
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx reload
ExecStop=/usr/local/nginx/sbin/nginx quit
PrivateTmp=true

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4). \u5F00\u673A\u81EA\u542F\u52A8\uFF1A<code v-pre>systemctl enable nginx.service</code>
(5). nginx \u670D\u52A1\u7684\u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F\uFF1A
\u542F\u52A8\uFF1A<code v-pre>systemctl start nginx.service</code>
\u5173\u95ED\uFF1A<code v-pre>systemctl stop nginx.service</code>
\u91CD\u542F\uFF1A<code v-pre>systemctl restart nginx.service</code></p>
<p><strong>10. \u9632\u706B\u5899\u5F00\u542F http\u3001https \u670D\u52A1\u4EE5\u53CA\u7AEF\u53E3\u76D1\u542C</strong>
\u5F00\u542F http \u670D\u52A1\uFF1A<code v-pre>firewall-cmd --zone=public --add-service=http --permanent</code>
\u5F00\u542F 80 \u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=80/tcp --permanent</code>
\u5F00\u542F https \u670D\u52A1\uFF1A<code v-pre>firewall-cmd --zone=public --add-service=https --permanent</code>
\u5F00\u542F 443 \u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=443/tcp --permanent</code>
\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code></p>
<p><strong>11. nginx + \u4E00\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A</strong>
(1). \u4FEE\u6539\u5B89\u88C5\u540E nginx \u6587\u4EF6\u7684 conf \u76EE\u5F55\u4E0B\u7684 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1A <code v-pre>vi nginx.conf</code>
(2). \u627E\u5230\u5E26\u6709# HTTPS Server \u7684\u5B57\u6837\uFF0C\u5C06\u5176\u4E0B\u6587\u672C\u6309\u7167\u4EE5\u4E0B\u6587\u672C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A</p>
<div class="language-\\ ext-\\ line-numbers-mode"><pre v-pre class="language-\\"><code>    # HTTPS Server
    #
    server {
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D

        ssl_certificate      cert/www/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem
        ssl_certificate_key  cert/www/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key
        ssl   on;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

        location / {
            proxy_pass   http://127.0.0.1:8080; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
            proxy_set_header Host                               $http_addr;
            proxy_set_header X-Real-IP                        $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            root   html;
            index  index.html index.htm;
        }

		# \u914D\u7F6E\u53E6\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528443\u7AEF\u53E3
		# location /test {
        #    proxy_pass   http://127.0.0.1:9090/test; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
        #    proxy_set_header Host                               $http_addr;
        #    proxy_set_header X-Real-IP                        $remote_addr;
        #    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        #    root   html;
        #    index  index.html index.htm;
		# }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3). \u5C06 http \u8BF7\u6C42\u91CD\u5B9A\u5411\u4E3A https \u8BF7\u6C42\uFF0C\u5728\u539F nginx.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u4E3A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>	server {
        listen       80;
        server_name  www.shnice.club; #\u586B\u5199\u8BBF\u95EE\u7684\u57DF\u540D
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps
		.....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -t</code>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E
(5). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -s reload</code>\u52A0\u8F7D\u914D\u7F6E</p>
<p><strong>12\u3001nginx + \u4E8C\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A</strong>
(1). \u5728 nginx \u6587\u4EF6\u5939\u4E0B\u4E0B\u521B\u5EFA vhosts \u76EE\u5F55\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A*.conf \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code># HTTP Server
#
server {
        listen 80;
        server_name localhost; #\u586B\u5199\u4F60\u8BBF\u95EE\u7684\u57DF\u540D
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps

        location / {
            index index.html index.htm;
        }
}

# HTTPS Server
#
server {
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D

        ssl_certificate      cert/abc/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem
        ssl_certificate_key  cert/abc/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key
        ssl   on;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

        location /abc {
            proxy_pass   http://127.0.0.1:8080/abc; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
            proxy_set_header Host                               $http_addr;
            proxy_set_header X-Real-IP                        $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            root   html;
            index  index.html index.htm;
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2). \u5BFC\u5165\u4E8C\u7EA7\u57DF\u540D\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u5230 nginx.conf \u4E2D\uFF1A
\u8FDB\u5165 conf \u76EE\u5F55\u4E0B\uFF0C\u5728 nginx.conf \u6587\u4EF6\u4E2D\u7684 http{}\u5305\u88F9\u4E2D\u5904\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="language-\\ ext-\\ line-numbers-mode"><pre v-pre class="language-\\"><code>	include /usr/local/nginx/vhosts/*;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -t</code>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E
(4). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -s reload</code>\u52A0\u8F7D\u914D\u7F6E</p>
`,date:"2022-07-12",deps:[],hoistedTags:[],links:[],pathInferred:"/20220711/2.html",pathLocale:"/",permalink:null,routeMeta:{title:"Centos7\u73AF\u5883\u642D\u5EFA"},slug:"2",filePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/20220711/2.md",filePathRelative:"20220711/2.md",componentFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/2.html.vue",componentFilePathRelative:"pages/20220711/2.html.vue",componentFileChunkName:"v-e5cc5690",dataFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/2.html.js",dataFilePathRelative:"pages/20220711/2.html.js",dataFileChunkName:"v-e5cc5690",htmlFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/dist/20220711/2.html",htmlFilePathRelative:"20220711/2.html"}]}},Nl=[{data:{key:"v-e93607ce",path:"/20220711/1.html",title:"Vuepress\u4F7F\u7528\u6307\u5357(reco)",lang:"zh-CN",frontmatter:{title:"Vuepress\u4F7F\u7528\u6307\u5357(reco)",date:"2022-07-12 17:55:44",sidebar:"auto",tags:["vuepress"],publish:!0},excerpt:"",headers:[{level:3,title:"markdown \u6B63\u6587",slug:"markdown-\u6B63\u6587",children:[]}],git:{},filePathRelative:"20220711/1.md"},key:"v-e93607ce",path:"/20220711/1.html",title:"Vuepress\u4F7F\u7528\u6307\u5357(reco)",lang:"zh-CN",frontmatter:{title:"Vuepress\u4F7F\u7528\u6307\u5357(reco)",date:"2022-07-12 17:55:44",sidebar:"auto",tags:["vuepress"],publish:!0},excerpt:"",headers:[{level:3,title:"markdown \u6B63\u6587",slug:"markdown-\u6B63\u6587",children:[]}],content:`\r
<!-- more -->\r
\r
### markdown \u6B63\u6587\r
\r
::: tip\r
Vuepress \u662F Vue \u4F5C\u8005\u5C24\u96E8\u6EAA\u5F00\u53D1\u7684\u6587\u6863\u5DE5\u5177\uFF0C\u672C\u6587\u91C7\u7528 Vuepress \u7684 reco \u4E3B\u9898\u8FDB\u884C\u76F8\u5173\u914D\u7F6E\u8BF4\u660E\r
:::\r
`,contentRendered:`<!-- more -->
<h3 id="markdown-\u6B63\u6587" tabindex="-1"><a class="header-anchor" href="#markdown-\u6B63\u6587" aria-hidden="true">#</a> markdown \u6B63\u6587</h3>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>Vuepress \u662F Vue \u4F5C\u8005\u5C24\u96E8\u6EAA\u5F00\u53D1\u7684\u6587\u6863\u5DE5\u5177\uFF0C\u672C\u6587\u91C7\u7528 Vuepress \u7684 reco \u4E3B\u9898\u8FDB\u884C\u76F8\u5173\u914D\u7F6E\u8BF4\u660E</p>
</div>`,date:"2022-07-12",deps:[],hoistedTags:[],links:[],pathInferred:"/20220711/1.html",pathLocale:"/",permalink:null,routeMeta:{title:"Vuepress\u4F7F\u7528\u6307\u5357(reco)"},slug:"1",filePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/20220711/1.md",filePathRelative:"20220711/1.md",componentFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/1.html.vue",componentFilePathRelative:"pages/20220711/1.html.vue",componentFileChunkName:"v-e93607ce",dataFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/1.html.js",dataFilePathRelative:"pages/20220711/1.html.js",dataFileChunkName:"v-e93607ce",htmlFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/dist/20220711/1.html",htmlFilePathRelative:"20220711/1.html"},{data:{key:"v-e5cc5690",path:"/20220711/2.html",title:"Centos7\u73AF\u5883\u642D\u5EFA",lang:"zh-CN",frontmatter:{title:"Centos7\u73AF\u5883\u642D\u5EFA",date:"2022-07-12 17:55:44",sidebar:"auto",categories:["Linux"],tags:["java","mysql","redis"],publish:!0},excerpt:"",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],git:{},filePathRelative:"20220711/2.md"},key:"v-e5cc5690",path:"/20220711/2.html",title:"Centos7\u73AF\u5883\u642D\u5EFA",lang:"zh-CN",frontmatter:{title:"Centos7\u73AF\u5883\u642D\u5EFA",date:"2022-07-12 17:55:44",sidebar:"auto",categories:["Linux"],tags:["java","mysql","redis"],publish:!0},excerpt:"",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],content:`\r
<!-- more -->\r
\r
### \u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\r
\r
**1. \u521B\u5EFA jdk \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09**\r
\`mkdir -p usr/local/src\`\r
**2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D jdk \u5305**\r
\`wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz\`\r
**3. \u89E3\u538B\uFF08\u5982\u4E0B\u64CD\u4F5C\u662F\u5DF2\u7ECF\u8DF3\u5230\u6307\u5B9A\u5B58\u653E jdk \u7684\u76EE\u5F55\u4F4D\u7F6E\uFF09**\r
\`tar -zxvf jdk-8u131-linux-x64.tar.gz\`\r
**4. \u91CD\u547D\u540D**\r
\`mv jdk1.8.0_131 jdk1.8\`\r
**5. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF**\r
(1)\u8FDB\u5165\u7CFB\u7EDF\u6587\u4EF6\u547D\u4EE4\u5982\u4E0B\uFF1A\`vi /etc/profile\`\r
(2)\u6309\u201Cshift+g\u201D\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u6587\u672C\u672B\u5C3E\uFF0C\u518D\u6309\u201Ci\u201D\u6309\u952E\u8FDB\u884C\u7F16\u8F91\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6587\u672C(\u5199\u5B8C\u540E\uFF0C\u6309 ESC \u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\u5E76\u8F93\u5165\u201C:x\u201D\u4EE5\u4FDD\u5B58\u5E76\u9000\u51FA)\uFF1A\r
\r
\`\`\`/\r
export JAVA_HOME=/usr/local/src/jdk1.8\r
export PATH=$PATH:$JAVA_HOME/bin\r
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar\r
\`\`\`\r
\r
**6. \u8BA9\u914D\u7F6E\u6587\u4EF6\u751F\u6548\uFF1A**\`source /etc/profile\`\r
**7. \u68C0\u67E5 jdk \u662F\u5426\u914D\u7F6E\u6210\u529F\uFF1A** \`java -version\`\r
\r
### \u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09\r
\r
**1. \u521B\u5EFA tomcat \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09**\r
\r
**2. \u4F7F\u7528 wget \u4E0B\u8F7D tomcat**\r
\r
**3. \u89E3\u538B**\r
\r
**4. \u542F\u52A8 tomcat**\r
\r
**5. \u4FEE\u6539 tomcat \u7AEF\u53E3**\r
\r
**6. \u6D4B\u8BD5\u8BBF\u95EE**\r
\r
### \u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**_\u6CE8\u610F\uFF1A\u9664\u4E86\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 3306 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 3306 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09_**\r
\r
**1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B**\r
\r
**2. \u4E0B\u8F7D mysql \u5E76\u542F\u52A8\u670D\u52A1**\r
(1)\u4F7F\u7528 wget \u4E0B\u8F7D mysql \u6E90\u5305\u5E76\u7528 yum \u5B89\u88C5\uFF1A\r
\`\u4E0B\u8F7D\uFF1A wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm\`\r
\`\u5B89\u88C5\uFF1A yum -y localinstall mysql57-community-release-el7-11.noarch.rpm\`\r
(3)\u5728\u7EBF\u5B89\u88C5 Mysql\uFF1A\`yum -y install mysql-community-server\`\r
(4)\u542F\u52A8\u670D\u52A1\uFF1A\`systemctl start mysqld\`\r
(5)\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\uFF1A\r
\`systemctl enable mysqld\`\r
\`systemctl deaemon-reload\`\r
\r
**3. \u4FEE\u6539\u672C\u5730\u767B\u5F55\u5BC6\u7801**\r
(1) \u901A\u8FC7\`vi /var/log/mysqld.log\`\u8FDB\u5165\u8BE5\u6587\u4EF6\u4E2D\u627E\u5230\u6807\u9EC4\u8FD9\u6BB5\uFF0C\u800C\u7EA2\u8272\u5708\u4FBF\u662F\u9ED8\u8BA4\u767B\u9646\u5BC6\u7801\uFF1A\r
![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191227220213561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70)\r
(2)\u901A\u8FC7\u4EE5\u4E0A\u5F97\u5230\u7684\u5BC6\u7801\u767B\u5F55\u547D\u4EE4\`mysql -u root -p\` \uFF0C\u5373\u53EF\u8FDB\u5165 mysql \u4E2D\u3002\u4E0B\u9762\u5219\u662F\u4FEE\u6539\u5BC6\u7801\uFF1A\r
\`mysql> alter user 'root'@'localhost' identified by 'Qq88888.';\`\r
\r
**4. \u8BBE\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF08\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF09\uFF0C\u5F00\u542F\u8FDC\u7A0B\u767B\u5F55\u524D\u63D0\u8981\u4FDD\u8BC1\u5F00\u542F\u9632\u706B\u5899\uFF0C\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A**\r
(1)\u5141\u8BB8\u8BE5\u8D26\u53F7\u80FD\u591F\u88AB\u8FDC\u7A0B\u767B\u5F55\uFF1A \` mysql> grant all privileges on *.* to 'root'@'%' identified by 'Qq88888.' with grant option;\`\r
(2)\u67E5\u770B\u9632\u706B\u5899\u662F\u5426\u5F00\u542F\uFF1A \`firewall-cmd --state\`\r
(3)\u5F00\u542F\u9632\u706B\u5899\uFF1A \`systemctl start firewalld.service\` - \u5173\u95ED\u9632\u706B\u5899: \`systemctl stop firewalld.service\` - \u7981\u7528\u9632\u706B\u5899: \`systemctl disable firewalld.service\` - \u67E5\u770B\u9632\u706B\u5899\u76D1\u542C\u7684\u7AEF\u53E3: \`firewall-cmd --list-port\`\r
(4)\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A\`firewall-cmd --zone=public --add-port=3306/tcp --permanent\`\r
(5)\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\`\r
\r
**5. \u914D\u7F6E my.cnf**\r
\u8FDB\u5165\`vi /etc/my.cnf\`\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u672C\u6587\u8FDB\u884C\u7F16\u7801\u8BBE\u7F6E\uFF1A\r
\r
\`\`\`/\r
character_set_server=utf8\r
init_connect='SET NAMES utf8'\r
\`\`\`\r
\r
**6. \u91CD\u542F\u52A8 mysql**\r
\`systemctl restart mysqld\`\r
\r
### \u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**_\u6CE8\u610F\uFF1A\u540C\u4E0A\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 6379 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09_**\r
\r
**1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B**\r
\r
**2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D redis\uFF1A**\`wget http://download.redis.io/releases/redis-4.0.8.tar.gz\`\r
\r
**3. \u89E3\u538B\u3001\u7F16\u8BD1\u548C\u5B89\u88C5\uFF1A**\r
(1) \u89E3\u538B\uFF1A\`tar -zxvf redis-4.0.8.tar.gz\`\r
(2) \u5B8C\u6210\u540E\u8FDB\u5165\u89E3\u538B\u7684 redis-4.0.8 \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 make \u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF1A\`make\`\r
(3) \u5B89\u88C5\uFF1A\`make install\`\r
\r
**4. \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8**\r
(1) \u521B\u5EFA\u65B0\u76EE\u5F55\uFF1A\`mkdir -p /usr/local/redis\`\r
(2) \u5C06/usr/local/src/redis-4.0.8/src \u76EE\u5F55\u4E0B\u7684 redis-server\u3001redis-cli \u548C/usr/local/src/redis-4.0.8 \u76EE\u5F55\u4E0B\u7684 redis.conf \u6587\u4EF6\u62F7\u8D1D\u5230\u521B\u5EFA\u7684\u76EE\u5F55\u4E2D\uFF1A\r
\`cp redis-server /usr/local/redis\`\r
\`cp redis-cli /usr/local/redis\`\r
\`cp ../redis.conf /usr/local/redis\`\r
(3)\u5F00\u542F\u540E\u53F0\u8FD0\u884C\uFF0C\u4FEE\u6539\u62F7\u8D1D\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF1A\`vi /usr/local/redis/redis.conf\`\r
\r
-   \u5C06\u8424\u5149\u5B57\u4E0A\u7684\u201Cno\u201D\u8BE5\u4E3A\u201Cyes\u201D\uFF1A ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/2019122819072660.png)\r
\r
(4) \u521B\u5EFA\u670D\u52A1\u6587\u4EF6 redis.service\uFF1A\`vi /usr/lib/systemd/system/redis.service\`\r
\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u4E2D\u7684\u8DEF\u5F84\u4EE5\u5B9E\u9645\u5404\u5F02\uFF09\uFF1A\r
\r
\`\`\`/\r
	[Unit]\r
	Description=The redis-server Process Manager\r
	After=syslog.target network.target\r
\r
	[Service]\r
	Type=simple\r
	PIDFile=/var/run/redis_6379.pid\r
	ExecStart=/usr/local/redis/redis-server /usr/local/redis/redis.conf\r
	ExecReload=/bin/kill -USR2 $MAINPID\r
	ExecStop=/bin/kill -SIGINT $MAINPID\r
\r
	[Install]\r
	WantedBy=multi-user.target\r
\`\`\`\r
\r
**5. \u5F00\u542F redis \u8FDC\u7A0B\u8BBF\u95EE\uFF08\u53EF\u5FFD\u7565\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF09\uFF1A**\r
(1) \u4FEE\u6539 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A\r
\r
-   \u8BBE\u7F6E\u53EF\u8BBF\u95EE\u7684 ip\uFF1A\u4FEE\u6539\u8424\u5149\u5B57\u7684\u6587\u672C\u4E2D\u753B\u5708\u7684 ip \u5730\u5740\u8BA9\u5176\u4ED6\u53EF\u4EE5\u8BBF\u95EE\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228214121699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70)\r
-   \u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F\uFF1A\u5C06\u8424\u5149\u5B57\u6587\u672C\u7684\u201Cyes\u201D\u4FEE\u6539\u4E3A\u201Cno\u201D\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228211505882.png)\r
-   \u8BBE\u7F6E\u5BC6\u7801\uFF1A\u6DFB\u52A0\u8424\u5149\u5B57\u7684\u6587\u672C\u6240\u793A\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228205849892.png)\r
\r
(2) \u4FEE\u6539\u5B8C\u540E\u5E94\u5728 redis \u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u547D\u4EE4\`redis-server redis.conf\`\u6765\u68C0\u67E5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u4EA6\u53EF\u68C0\u67E5\u662F\u5426\u51FA\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u907F\u514D\u540E\u7EED\u4E0D\u5FC5\u8981\u7684\u95EE\u9898\r
(3) \u56E0\u4E3A\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u6240\u4EE5\u52BF\u5FC5\u8981\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u7684\u76D1\u542C\uFF1A - \u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A\`firewall-cmd --zone=public --add-port=6379/tcp --permanent\` - \u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\` - \u67E5\u770B\u9632\u706B\u5899\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --list-ports\`\r
**6. \u5F00\u542F\u670D\u52A1\u548C\u5F00\u673A\u81EA\u542F\u52A8\uFF1A**\r
(1) \u5237\u65B0\u670D\u52A1\u914D\u7F6E\uFF1A\`systemctl daemon-reload\`\r
(2) \u5F00\u542F redis: \`systemctl start redis\`\r
(3) \u52A0\u5165\u5F00\u673A\u542F\u52A8\uFF1A\`systemctl enable redis\`\r
\r
### \u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**1. \u5B89\u88C5 gcc\uFF08gcc \u7528\u4E8E\u7F16\u8BD1\u63A5\u4E0B\u6765\u4E0B\u8F7D\u7684 nginx \u6E90\u7801\uFF09**\r
\u4F7F\u7528\`gcc -v\`\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u8BE5\u547D\u4EE4\uFF0C\u5982\u672A\u5B89\u88C5\u5219\u6267\u884C\`yum install gcc-c++\`\r
\r
**2. \u5B89\u88C5 pcre \u548C pcre-devel \u4F9D\u8D56\uFF08nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002\uFF09**\r
\`yum install -y pcre pcre-devel\`\r
\r
**3. \u5B89\u88C5 zlib zlib-devel \u4F9D\u8D56\uFF08zlib \u63D0\u4F9B\u4E86\u5F88\u591A\u538B\u7F29\u548C\u89E3\u65B9\u5F0F\uFF0Cnginx \u9700\u8981 zlib \u5BF9 http \u8FDB\u884C gzip\uFF09**\r
\`yum install -y zlib zlib-devel\`\r
\r
**4. \u5B89\u88C5 openssl openssl-devel\uFF08openssl \u662F\u4E00\u4E2A\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0Cnginx \u8981\u652F\u6301 https \u5C31\u9700\u8981\u5B83\uFF09**\r
\`yum install -y openssl openssl-devel\`\r
\r
**5. \u4E0B\u8F7D nginx \u5E76\u89E3\u538B**\r
\`wget http://nginx.org/download/nginx-1.9.9.tar.gz\`\r
\`tar -zxvf nginx-1.9.9\`\r
\r
**6. \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FFD\u52A0\u5B89\u88C5 ssl \u6A21\u5757**\r
\`./configure --with-http_ssl_module\`\r
\r
**7. \u4F7F\u7528 make \u7F16\u8BD1\u548C\u5B89\u88C5**\r
\`make && make install\`\r
\r
\`\`\`\r
\u6CE8\u610F\uFF1A\u5982\u679C\u5B89\u88C5\u540E\u51FA\u73B0\u4E00\u4E2AMake[1]: Leaving directory \`/usr/local/nginx-1.9.9\`\r
\u5E76\u4E14\u5728nginx-1.9.9\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u5DF2\u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3Anginx\u7684\u6587\u4EF6\u5939\u5373\u53EF\u5FFD\u7565\u8BE5\u9519\u8BEF~\r
\`\`\`\r
\r
**8. \u67E5\u770B nginx \u662F\u5426\u5B89\u88C5\u6210\u529F**\r
(1). \u8FDB\u5165 nginx \u6587\u4EF6\u4E0B\u7684 sbin \u76EE\u5F55\u8F93\u5165\`./nginx -v\`\u67E5\u770B\u7248\u672C\u53F7\r
(2).\u4F7F\u7528\`netstat -ntpl | grep nginx\`\u67E5\u770B\u5F53\u524D nginx \u5360\u7528\u7684\u7AEF\u53E3\u53F7\r
(3). \u4F7F\u7528\`wget 127.0.0.1\`\u6D4B\u8BD5\u8FD4\u56DE\u8868\u793A\u662F\u5426\u6B63\u5E38\r
(4). \u4F7F\u7528\`curl 127.0.0.1\`\u6D4B\u8BD5\u8FD4\u56DE\u9875\u9762\u7684\u503C\u662F\u5426\u6B63\u5E38\r
\r
**9. \u914D\u7F6E nginx \u5F00\u673A\u81EA\u542F\u52A8**\r
(1). \u8FDB\u5165\u76EE\u5F55\`cd /usr/lib/systemd/system\`\r
(2). \u521B\u5EFA nginx.service \u670D\u52A1\u6587\u4EF6\`vi nginx.service\`\r
(3). \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A\r
\r
\`\`\`/\r
[Unit]\r
Description=nginx\r
After=network.target\r
\r
[Service]\r
Type=forking\r
ExecStart=/usr/local/nginx/sbin/nginx\r
ExecReload=/usr/local/nginx/sbin/nginx reload\r
ExecStop=/usr/local/nginx/sbin/nginx quit\r
PrivateTmp=true\r
\r
[Install]\r
WantedBy=multi-user.target\r
\`\`\`\r
\r
(4). \u5F00\u673A\u81EA\u542F\u52A8\uFF1A\`systemctl enable nginx.service\`\r
(5). nginx \u670D\u52A1\u7684\u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F\uFF1A\r
\u542F\u52A8\uFF1A\`systemctl start nginx.service\`\r
\u5173\u95ED\uFF1A\`systemctl stop nginx.service\`\r
\u91CD\u542F\uFF1A\`systemctl restart nginx.service\`\r
\r
**10. \u9632\u706B\u5899\u5F00\u542F http\u3001https \u670D\u52A1\u4EE5\u53CA\u7AEF\u53E3\u76D1\u542C**\r
\u5F00\u542F http \u670D\u52A1\uFF1A\`firewall-cmd --zone=public --add-service=http --permanent\`\r
\u5F00\u542F 80 \u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --add-port=80/tcp --permanent\`\r
\u5F00\u542F https \u670D\u52A1\uFF1A\`firewall-cmd --zone=public --add-service=https --permanent\`\r
\u5F00\u542F 443 \u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --add-port=443/tcp --permanent\`\r
\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\`\r
\r
**11. nginx + \u4E00\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A**\r
(1). \u4FEE\u6539\u5B89\u88C5\u540E nginx \u6587\u4EF6\u7684 conf \u76EE\u5F55\u4E0B\u7684 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1A \`vi nginx.conf\`\r
(2). \u627E\u5230\u5E26\u6709# HTTPS Server \u7684\u5B57\u6837\uFF0C\u5C06\u5176\u4E0B\u6587\u672C\u6309\u7167\u4EE5\u4E0B\u6587\u672C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A\r
\r
\`\`\`\\\r
    # HTTPS Server\r
    #\r
    server {\r
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443\r
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D\r
\r
        ssl_certificate      cert/www/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem\r
        ssl_certificate_key  cert/www/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key\r
        ssl   on;\r
\r
        ssl_session_cache    shared:SSL:1m;\r
        ssl_session_timeout  5m;\r
\r
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\r
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\r
        ssl_prefer_server_ciphers  on;\r
\r
        location / {\r
            proxy_pass   http://127.0.0.1:8080; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
            proxy_set_header Host                               $http_addr;\r
            proxy_set_header X-Real-IP                        $remote_addr;\r
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
            root   html;\r
            index  index.html index.htm;\r
        }\r
\r
		# \u914D\u7F6E\u53E6\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528443\u7AEF\u53E3\r
		# location /test {\r
        #    proxy_pass   http://127.0.0.1:9090/test; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
        #    proxy_set_header Host                               $http_addr;\r
        #    proxy_set_header X-Real-IP                        $remote_addr;\r
        #    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
        #    root   html;\r
        #    index  index.html index.htm;\r
		# }\r
    }\r
\`\`\`\r
\r
(3). \u5C06 http \u8BF7\u6C42\u91CD\u5B9A\u5411\u4E3A https \u8BF7\u6C42\uFF0C\u5728\u539F nginx.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u4E3A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF1A\r
\r
\`\`\`/\r
	server {\r
        listen       80;\r
        server_name  www.shnice.club; #\u586B\u5199\u8BBF\u95EE\u7684\u57DF\u540D\r
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps\r
		.....\r
\`\`\`\r
\r
(4). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -t\`\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E\r
(5). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -s reload\`\u52A0\u8F7D\u914D\u7F6E\r
\r
**12\u3001nginx + \u4E8C\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A**\r
(1). \u5728 nginx \u6587\u4EF6\u5939\u4E0B\u4E0B\u521B\u5EFA vhosts \u76EE\u5F55\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A\\*.conf \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B\uFF1A\r
\r
\`\`\`/\r
# HTTP Server\r
#\r
server {\r
        listen 80;\r
        server_name localhost; #\u586B\u5199\u4F60\u8BBF\u95EE\u7684\u57DF\u540D\r
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps\r
\r
        location / {\r
            index index.html index.htm;\r
        }\r
}\r
\r
# HTTPS Server\r
#\r
server {\r
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443\r
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D\r
\r
        ssl_certificate      cert/abc/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem\r
        ssl_certificate_key  cert/abc/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key\r
        ssl   on;\r
\r
        ssl_session_cache    shared:SSL:1m;\r
        ssl_session_timeout  5m;\r
\r
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\r
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\r
        ssl_prefer_server_ciphers  on;\r
\r
        location /abc {\r
            proxy_pass   http://127.0.0.1:8080/abc; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
            proxy_set_header Host                               $http_addr;\r
            proxy_set_header X-Real-IP                        $remote_addr;\r
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
            root   html;\r
            index  index.html index.htm;\r
        }\r
}\r
\`\`\`\r
\r
(2). \u5BFC\u5165\u4E8C\u7EA7\u57DF\u540D\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u5230 nginx.conf \u4E2D\uFF1A\r
\u8FDB\u5165 conf \u76EE\u5F55\u4E0B\uFF0C\u5728 nginx.conf \u6587\u4EF6\u4E2D\u7684 http{}\u5305\u88F9\u4E2D\u5904\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A\r
\r
\`\`\`\\\r
	include /usr/local/nginx/vhosts/*;\r
\`\`\`\r
\r
(3). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -t\`\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E\r
(4). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -s reload\`\u52A0\u8F7D\u914D\u7F6E\r
`,contentRendered:`<!-- more -->
<h3 id="\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</h3>
<p><strong>1. \u521B\u5EFA jdk \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09</strong>
<code v-pre>mkdir -p usr/local/src</code>
<strong>2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D jdk \u5305</strong>
<code v-pre>wget --no-check-certificate --no-cookies --header &quot;Cookie: oraclelicense=accept-securebackup-cookie&quot; http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz</code>
<strong>3. \u89E3\u538B\uFF08\u5982\u4E0B\u64CD\u4F5C\u662F\u5DF2\u7ECF\u8DF3\u5230\u6307\u5B9A\u5B58\u653E jdk \u7684\u76EE\u5F55\u4F4D\u7F6E\uFF09</strong>
<code v-pre>tar -zxvf jdk-8u131-linux-x64.tar.gz</code>
<strong>4. \u91CD\u547D\u540D</strong>
<code v-pre>mv jdk1.8.0_131 jdk1.8</code>
<strong>5. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF</strong>
(1)\u8FDB\u5165\u7CFB\u7EDF\u6587\u4EF6\u547D\u4EE4\u5982\u4E0B\uFF1A<code v-pre>vi /etc/profile</code>
(2)\u6309\u201Cshift+g\u201D\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u6587\u672C\u672B\u5C3E\uFF0C\u518D\u6309\u201Ci\u201D\u6309\u952E\u8FDB\u884C\u7F16\u8F91\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6587\u672C(\u5199\u5B8C\u540E\uFF0C\u6309 ESC \u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\u5E76\u8F93\u5165\u201C:x\u201D\u4EE5\u4FDD\u5B58\u5E76\u9000\u51FA)\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>export JAVA_HOME=/usr/local/src/jdk1.8
export PATH=$PATH:$JAVA_HOME/bin
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. \u8BA9\u914D\u7F6E\u6587\u4EF6\u751F\u6548\uFF1A</strong><code v-pre>source /etc/profile</code>
<strong>7. \u68C0\u67E5 jdk \u662F\u5426\u914D\u7F6E\u6210\u529F\uFF1A</strong> <code v-pre>java -version</code></p>
<h3 id="\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981" aria-hidden="true">#</a> \u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09</h3>
<p><strong>1. \u521B\u5EFA tomcat \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09</strong></p>
<p><strong>2. \u4F7F\u7528 wget \u4E0B\u8F7D tomcat</strong></p>
<p><strong>3. \u89E3\u538B</strong></p>
<p><strong>4. \u542F\u52A8 tomcat</strong></p>
<p><strong>5. \u4FEE\u6539 tomcat \u7AEF\u53E3</strong></p>
<p><strong>6. \u6D4B\u8BD5\u8BBF\u95EE</strong></p>
<h3 id="\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong><em>\u6CE8\u610F\uFF1A\u9664\u4E86\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 3306 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 3306 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09</em></strong></p>
<p><strong>1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B</strong></p>
<p><strong>2. \u4E0B\u8F7D mysql \u5E76\u542F\u52A8\u670D\u52A1</strong>
(1)\u4F7F\u7528 wget \u4E0B\u8F7D mysql \u6E90\u5305\u5E76\u7528 yum \u5B89\u88C5\uFF1A
<code v-pre>\u4E0B\u8F7D\uFF1A wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm</code>
<code v-pre>\u5B89\u88C5\uFF1A yum -y localinstall mysql57-community-release-el7-11.noarch.rpm</code>
(3)\u5728\u7EBF\u5B89\u88C5 Mysql\uFF1A<code v-pre>yum -y install mysql-community-server</code>
(4)\u542F\u52A8\u670D\u52A1\uFF1A<code v-pre>systemctl start mysqld</code>
(5)\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\uFF1A
<code v-pre>systemctl enable mysqld</code>
<code v-pre>systemctl deaemon-reload</code></p>
<p><strong>3. \u4FEE\u6539\u672C\u5730\u767B\u5F55\u5BC6\u7801</strong>
(1) \u901A\u8FC7<code v-pre>vi /var/log/mysqld.log</code>\u8FDB\u5165\u8BE5\u6587\u4EF6\u4E2D\u627E\u5230\u6807\u9EC4\u8FD9\u6BB5\uFF0C\u800C\u7EA2\u8272\u5708\u4FBF\u662F\u9ED8\u8BA4\u767B\u9646\u5BC6\u7801\uFF1A
<img src="https://img-blog.csdnimg.cn/20191227220213561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0">
(2)\u901A\u8FC7\u4EE5\u4E0A\u5F97\u5230\u7684\u5BC6\u7801\u767B\u5F55\u547D\u4EE4<code v-pre>mysql -u root -p</code> \uFF0C\u5373\u53EF\u8FDB\u5165 mysql \u4E2D\u3002\u4E0B\u9762\u5219\u662F\u4FEE\u6539\u5BC6\u7801\uFF1A
<code v-pre>mysql&gt; alter user 'root'@'localhost' identified by 'Qq88888.';</code></p>
<p><strong>4. \u8BBE\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF08\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF09\uFF0C\u5F00\u542F\u8FDC\u7A0B\u767B\u5F55\u524D\u63D0\u8981\u4FDD\u8BC1\u5F00\u542F\u9632\u706B\u5899\uFF0C\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A</strong>
(1)\u5141\u8BB8\u8BE5\u8D26\u53F7\u80FD\u591F\u88AB\u8FDC\u7A0B\u767B\u5F55\uFF1A <code v-pre> mysql&gt; grant all privileges on *.* to 'root'@'%' identified by 'Qq88888.' with grant option;</code>
(2)\u67E5\u770B\u9632\u706B\u5899\u662F\u5426\u5F00\u542F\uFF1A <code v-pre>firewall-cmd --state</code>
(3)\u5F00\u542F\u9632\u706B\u5899\uFF1A <code v-pre>systemctl start firewalld.service</code> - \u5173\u95ED\u9632\u706B\u5899: <code v-pre>systemctl stop firewalld.service</code> - \u7981\u7528\u9632\u706B\u5899: <code v-pre>systemctl disable firewalld.service</code> - \u67E5\u770B\u9632\u706B\u5899\u76D1\u542C\u7684\u7AEF\u53E3: <code v-pre>firewall-cmd --list-port</code>
(4)\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=3306/tcp --permanent</code>
(5)\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code></p>
<p><strong>5. \u914D\u7F6E my.cnf</strong>
\u8FDB\u5165<code v-pre>vi /etc/my.cnf</code>\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u672C\u6587\u8FDB\u884C\u7F16\u7801\u8BBE\u7F6E\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>character_set_server=utf8
init_connect='SET NAMES utf8'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. \u91CD\u542F\u52A8 mysql</strong>
<code v-pre>systemctl restart mysqld</code></p>
<h3 id="\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong><em>\u6CE8\u610F\uFF1A\u540C\u4E0A\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 6379 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09</em></strong></p>
<p><strong>1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B</strong></p>
<p><strong>2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D redis\uFF1A</strong><code v-pre>wget http://download.redis.io/releases/redis-4.0.8.tar.gz</code></p>
<p><strong>3. \u89E3\u538B\u3001\u7F16\u8BD1\u548C\u5B89\u88C5\uFF1A</strong>
(1) \u89E3\u538B\uFF1A<code v-pre>tar -zxvf redis-4.0.8.tar.gz</code>
(2) \u5B8C\u6210\u540E\u8FDB\u5165\u89E3\u538B\u7684 redis-4.0.8 \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 make \u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF1A<code v-pre>make</code>
(3) \u5B89\u88C5\uFF1A<code v-pre>make install</code></p>
<p><strong>4. \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8</strong>
(1) \u521B\u5EFA\u65B0\u76EE\u5F55\uFF1A<code v-pre>mkdir -p /usr/local/redis</code>
(2) \u5C06/usr/local/src/redis-4.0.8/src \u76EE\u5F55\u4E0B\u7684 redis-server\u3001redis-cli \u548C/usr/local/src/redis-4.0.8 \u76EE\u5F55\u4E0B\u7684 redis.conf \u6587\u4EF6\u62F7\u8D1D\u5230\u521B\u5EFA\u7684\u76EE\u5F55\u4E2D\uFF1A
<code v-pre>cp redis-server /usr/local/redis</code>
<code v-pre>cp redis-cli /usr/local/redis</code>
<code v-pre>cp ../redis.conf /usr/local/redis</code>
(3)\u5F00\u542F\u540E\u53F0\u8FD0\u884C\uFF0C\u4FEE\u6539\u62F7\u8D1D\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF1A<code v-pre>vi /usr/local/redis/redis.conf</code></p>
<ul>
<li>\u5C06\u8424\u5149\u5B57\u4E0A\u7684\u201Cno\u201D\u8BE5\u4E3A\u201Cyes\u201D\uFF1A <img src="https://img-blog.csdnimg.cn/2019122819072660.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
</ul>
<p>(4) \u521B\u5EFA\u670D\u52A1\u6587\u4EF6 redis.service\uFF1A<code v-pre>vi /usr/lib/systemd/system/redis.service</code>
\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u4E2D\u7684\u8DEF\u5F84\u4EE5\u5B9E\u9645\u5404\u5F02\uFF09\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>	[Unit]
	Description=The redis-server Process Manager
	After=syslog.target network.target

	[Service]
	Type=simple
	PIDFile=/var/run/redis_6379.pid
	ExecStart=/usr/local/redis/redis-server /usr/local/redis/redis.conf
	ExecReload=/bin/kill -USR2 $MAINPID
	ExecStop=/bin/kill -SIGINT $MAINPID

	[Install]
	WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. \u5F00\u542F redis \u8FDC\u7A0B\u8BBF\u95EE\uFF08\u53EF\u5FFD\u7565\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF09\uFF1A</strong>
(1) \u4FEE\u6539 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A</p>
<ul>
<li>\u8BBE\u7F6E\u53EF\u8BBF\u95EE\u7684 ip\uFF1A\u4FEE\u6539\u8424\u5149\u5B57\u7684\u6587\u672C\u4E2D\u753B\u5708\u7684 ip \u5730\u5740\u8BA9\u5176\u4ED6\u53EF\u4EE5\u8BBF\u95EE
<img src="https://img-blog.csdnimg.cn/20191228214121699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
<li>\u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F\uFF1A\u5C06\u8424\u5149\u5B57\u6587\u672C\u7684\u201Cyes\u201D\u4FEE\u6539\u4E3A\u201Cno\u201D
<img src="https://img-blog.csdnimg.cn/20191228211505882.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
<li>\u8BBE\u7F6E\u5BC6\u7801\uFF1A\u6DFB\u52A0\u8424\u5149\u5B57\u7684\u6587\u672C\u6240\u793A
<img src="https://img-blog.csdnimg.cn/20191228205849892.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
</ul>
<p>(2) \u4FEE\u6539\u5B8C\u540E\u5E94\u5728 redis \u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u547D\u4EE4<code v-pre>redis-server redis.conf</code>\u6765\u68C0\u67E5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u4EA6\u53EF\u68C0\u67E5\u662F\u5426\u51FA\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u907F\u514D\u540E\u7EED\u4E0D\u5FC5\u8981\u7684\u95EE\u9898
(3) \u56E0\u4E3A\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u6240\u4EE5\u52BF\u5FC5\u8981\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u7684\u76D1\u542C\uFF1A - \u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=6379/tcp --permanent</code> - \u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code> - \u67E5\u770B\u9632\u706B\u5899\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --list-ports</code>
<strong>6. \u5F00\u542F\u670D\u52A1\u548C\u5F00\u673A\u81EA\u542F\u52A8\uFF1A</strong>
(1) \u5237\u65B0\u670D\u52A1\u914D\u7F6E\uFF1A<code v-pre>systemctl daemon-reload</code>
(2) \u5F00\u542F redis: <code v-pre>systemctl start redis</code>
(3) \u52A0\u5165\u5F00\u673A\u542F\u52A8\uFF1A<code v-pre>systemctl enable redis</code></p>
<h3 id="\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong>1. \u5B89\u88C5 gcc\uFF08gcc \u7528\u4E8E\u7F16\u8BD1\u63A5\u4E0B\u6765\u4E0B\u8F7D\u7684 nginx \u6E90\u7801\uFF09</strong>
\u4F7F\u7528<code v-pre>gcc -v</code>\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u8BE5\u547D\u4EE4\uFF0C\u5982\u672A\u5B89\u88C5\u5219\u6267\u884C<code v-pre>yum install gcc-c++</code></p>
<p><strong>2. \u5B89\u88C5 pcre \u548C pcre-devel \u4F9D\u8D56\uFF08nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002\uFF09</strong>
<code v-pre>yum install -y pcre pcre-devel</code></p>
<p><strong>3. \u5B89\u88C5 zlib zlib-devel \u4F9D\u8D56\uFF08zlib \u63D0\u4F9B\u4E86\u5F88\u591A\u538B\u7F29\u548C\u89E3\u65B9\u5F0F\uFF0Cnginx \u9700\u8981 zlib \u5BF9 http \u8FDB\u884C gzip\uFF09</strong>
<code v-pre>yum install -y zlib zlib-devel</code></p>
<p><strong>4. \u5B89\u88C5 openssl openssl-devel\uFF08openssl \u662F\u4E00\u4E2A\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0Cnginx \u8981\u652F\u6301 https \u5C31\u9700\u8981\u5B83\uFF09</strong>
<code v-pre>yum install -y openssl openssl-devel</code></p>
<p><strong>5. \u4E0B\u8F7D nginx \u5E76\u89E3\u538B</strong>
<code v-pre>wget http://nginx.org/download/nginx-1.9.9.tar.gz</code>
<code v-pre>tar -zxvf nginx-1.9.9</code></p>
<p><strong>6. \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FFD\u52A0\u5B89\u88C5 ssl \u6A21\u5757</strong>
<code v-pre>./configure --with-http_ssl_module</code></p>
<p><strong>7. \u4F7F\u7528 make \u7F16\u8BD1\u548C\u5B89\u88C5</strong>
<code v-pre>make &amp;&amp; make install</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>\u6CE8\u610F\uFF1A\u5982\u679C\u5B89\u88C5\u540E\u51FA\u73B0\u4E00\u4E2AMake[1]: Leaving directory \`/usr/local/nginx-1.9.9\`
\u5E76\u4E14\u5728nginx-1.9.9\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u5DF2\u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3Anginx\u7684\u6587\u4EF6\u5939\u5373\u53EF\u5FFD\u7565\u8BE5\u9519\u8BEF~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>8. \u67E5\u770B nginx \u662F\u5426\u5B89\u88C5\u6210\u529F</strong>
(1). \u8FDB\u5165 nginx \u6587\u4EF6\u4E0B\u7684 sbin \u76EE\u5F55\u8F93\u5165<code v-pre>./nginx -v</code>\u67E5\u770B\u7248\u672C\u53F7
(2).\u4F7F\u7528<code v-pre>netstat -ntpl | grep nginx</code>\u67E5\u770B\u5F53\u524D nginx \u5360\u7528\u7684\u7AEF\u53E3\u53F7
(3). \u4F7F\u7528<code v-pre>wget 127.0.0.1</code>\u6D4B\u8BD5\u8FD4\u56DE\u8868\u793A\u662F\u5426\u6B63\u5E38
(4). \u4F7F\u7528<code v-pre>curl 127.0.0.1</code>\u6D4B\u8BD5\u8FD4\u56DE\u9875\u9762\u7684\u503C\u662F\u5426\u6B63\u5E38</p>
<p><strong>9. \u914D\u7F6E nginx \u5F00\u673A\u81EA\u542F\u52A8</strong>
(1). \u8FDB\u5165\u76EE\u5F55<code v-pre>cd /usr/lib/systemd/system</code>
(2). \u521B\u5EFA nginx.service \u670D\u52A1\u6587\u4EF6<code v-pre>vi nginx.service</code>
(3). \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>[Unit]
Description=nginx
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx reload
ExecStop=/usr/local/nginx/sbin/nginx quit
PrivateTmp=true

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4). \u5F00\u673A\u81EA\u542F\u52A8\uFF1A<code v-pre>systemctl enable nginx.service</code>
(5). nginx \u670D\u52A1\u7684\u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F\uFF1A
\u542F\u52A8\uFF1A<code v-pre>systemctl start nginx.service</code>
\u5173\u95ED\uFF1A<code v-pre>systemctl stop nginx.service</code>
\u91CD\u542F\uFF1A<code v-pre>systemctl restart nginx.service</code></p>
<p><strong>10. \u9632\u706B\u5899\u5F00\u542F http\u3001https \u670D\u52A1\u4EE5\u53CA\u7AEF\u53E3\u76D1\u542C</strong>
\u5F00\u542F http \u670D\u52A1\uFF1A<code v-pre>firewall-cmd --zone=public --add-service=http --permanent</code>
\u5F00\u542F 80 \u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=80/tcp --permanent</code>
\u5F00\u542F https \u670D\u52A1\uFF1A<code v-pre>firewall-cmd --zone=public --add-service=https --permanent</code>
\u5F00\u542F 443 \u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=443/tcp --permanent</code>
\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code></p>
<p><strong>11. nginx + \u4E00\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A</strong>
(1). \u4FEE\u6539\u5B89\u88C5\u540E nginx \u6587\u4EF6\u7684 conf \u76EE\u5F55\u4E0B\u7684 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1A <code v-pre>vi nginx.conf</code>
(2). \u627E\u5230\u5E26\u6709# HTTPS Server \u7684\u5B57\u6837\uFF0C\u5C06\u5176\u4E0B\u6587\u672C\u6309\u7167\u4EE5\u4E0B\u6587\u672C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A</p>
<div class="language-\\ ext-\\ line-numbers-mode"><pre v-pre class="language-\\"><code>    # HTTPS Server
    #
    server {
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D

        ssl_certificate      cert/www/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem
        ssl_certificate_key  cert/www/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key
        ssl   on;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

        location / {
            proxy_pass   http://127.0.0.1:8080; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
            proxy_set_header Host                               $http_addr;
            proxy_set_header X-Real-IP                        $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            root   html;
            index  index.html index.htm;
        }

		# \u914D\u7F6E\u53E6\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528443\u7AEF\u53E3
		# location /test {
        #    proxy_pass   http://127.0.0.1:9090/test; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
        #    proxy_set_header Host                               $http_addr;
        #    proxy_set_header X-Real-IP                        $remote_addr;
        #    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        #    root   html;
        #    index  index.html index.htm;
		# }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3). \u5C06 http \u8BF7\u6C42\u91CD\u5B9A\u5411\u4E3A https \u8BF7\u6C42\uFF0C\u5728\u539F nginx.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u4E3A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>	server {
        listen       80;
        server_name  www.shnice.club; #\u586B\u5199\u8BBF\u95EE\u7684\u57DF\u540D
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps
		.....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -t</code>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E
(5). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -s reload</code>\u52A0\u8F7D\u914D\u7F6E</p>
<p><strong>12\u3001nginx + \u4E8C\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A</strong>
(1). \u5728 nginx \u6587\u4EF6\u5939\u4E0B\u4E0B\u521B\u5EFA vhosts \u76EE\u5F55\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A*.conf \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code># HTTP Server
#
server {
        listen 80;
        server_name localhost; #\u586B\u5199\u4F60\u8BBF\u95EE\u7684\u57DF\u540D
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps

        location / {
            index index.html index.htm;
        }
}

# HTTPS Server
#
server {
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D

        ssl_certificate      cert/abc/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem
        ssl_certificate_key  cert/abc/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key
        ssl   on;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

        location /abc {
            proxy_pass   http://127.0.0.1:8080/abc; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
            proxy_set_header Host                               $http_addr;
            proxy_set_header X-Real-IP                        $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            root   html;
            index  index.html index.htm;
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2). \u5BFC\u5165\u4E8C\u7EA7\u57DF\u540D\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u5230 nginx.conf \u4E2D\uFF1A
\u8FDB\u5165 conf \u76EE\u5F55\u4E0B\uFF0C\u5728 nginx.conf \u6587\u4EF6\u4E2D\u7684 http{}\u5305\u88F9\u4E2D\u5904\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="language-\\ ext-\\ line-numbers-mode"><pre v-pre class="language-\\"><code>	include /usr/local/nginx/vhosts/*;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -t</code>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E
(4). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -s reload</code>\u52A0\u8F7D\u914D\u7F6E</p>
`,date:"2022-07-12",deps:[],hoistedTags:[],links:[],pathInferred:"/20220711/2.html",pathLocale:"/",permalink:null,routeMeta:{title:"Centos7\u73AF\u5883\u642D\u5EFA"},slug:"2",filePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/20220711/2.md",filePathRelative:"20220711/2.md",componentFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/2.html.vue",componentFilePathRelative:"pages/20220711/2.html.vue",componentFileChunkName:"v-e5cc5690",dataFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/2.html.js",dataFilePathRelative:"pages/20220711/2.html.js",dataFileChunkName:"v-e5cc5690",htmlFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/dist/20220711/2.html",htmlFilePathRelative:"20220711/2.html"},{data:{key:"v-e262a552",path:"/20220711/3.html",title:"vscode\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5",lang:"zh-CN",frontmatter:{title:"vscode\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5",date:"2022-07-12 17:55:44",author:"sihaolin",categories:["Vscode"]},excerpt:"",headers:[],git:{},filePathRelative:"20220711/3.md"},key:"v-e262a552",path:"/20220711/3.html",title:"vscode\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5",lang:"zh-CN",frontmatter:{title:"vscode\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5",date:"2022-07-12 17:55:44",author:"sihaolin",categories:["Vscode"]},excerpt:"",headers:[],content:`\r
<!-- more -->\r
\r
::: details \u521B\u5EFA\u4EE3\u7801\u7247\u6BB5\uFF1Amarkdown \u7684\u5143\u4FE1\u606F\r
\r
\`\`\`json\r
{\r
    "Print blog meta": {\r
        "prefix": "blogmeta",\r
        "body": [\r
            "---",\r
            "title: \${1:$TM_FILENAME_BASE}",\r
            "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND",\r
            "author: \${2:sihaolin}",\r
            "tags:",\r
            "  - $3",\r
            "---",\r
            "\\r"\r
        ],\r
        "description": "\u751F\u6210\u535A\u5BA2\u5143\u4FE1\u606F"\r
    }\r
}\r
\`\`\`\r
\r
:::\r
\r
::: details \u521B\u5EFA\u4EE3\u7801\u7247\u6BB5\uFF1A\u83B7\u53D6\u5F53\u524D\u65E5\u671F\u65F6\u95F4\r
\r
\`\`\`json\r
{\r
    "Print blog meta": {\r
        "prefix": "nowdate",\r
        "body": [\r
            "'$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND'"\r
        ],\r
        "description": "\u751F\u6210\u5F53\u524D\u65E5\u671F\u65F6\u95F4"\r
    }\r
}\r
\`\`\`\r
\r
:::\r
\r
\u6700\u540E\uFF0C\u5728 setting.json \u6587\u4EF6\u6DFB\u52A0\u4E0B\u9762\u914D\u7F6E\r
\r
\`\`\`json\r
{\r
    "[markdown]": {\r
        "editor.quickSuggestions": true\r
    }\r
}\r
\`\`\`\r
`,contentRendered:`<!-- more -->
<details class="custom-container details"><summary class="custom-container-title">\u521B\u5EFA\u4EE3\u7801\u7247\u6BB5\uFF1Amarkdown</summary><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"Print blog meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"prefix"</span><span class="token operator">:</span> <span class="token string">"blogmeta"</span><span class="token punctuation">,</span>
        <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"---"</span><span class="token punctuation">,</span>
            <span class="token string">"title: \${1:$TM_FILENAME_BASE}"</span><span class="token punctuation">,</span>
            <span class="token string">"date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND"</span><span class="token punctuation">,</span>
            <span class="token string">"author: \${2:sihaolin}"</span><span class="token punctuation">,</span>
            <span class="token string">"tags:"</span><span class="token punctuation">,</span>
            <span class="token string">"  - $3"</span><span class="token punctuation">,</span>
            <span class="token string">"---"</span><span class="token punctuation">,</span>
            <span class="token string">"\\r"</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"\u751F\u6210\u535A\u5BA2\u5143\u4FE1\u606F"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary class="custom-container-title">\u521B\u5EFA\u4EE3\u7801\u7247\u6BB5\uFF1A\u83B7\u53D6\u5F53\u524D\u65E5\u671F\u65F6\u95F4</summary><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"Print blog meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"prefix"</span><span class="token operator">:</span> <span class="token string">"nowdate"</span><span class="token punctuation">,</span>
        <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"'$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND'"</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"\u751F\u6210\u5F53\u524D\u65E5\u671F\u65F6\u95F4"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>\u6700\u540E\uFF0C\u5728 setting.json \u6587\u4EF6\u6DFB\u52A0\u4E0B\u9762\u914D\u7F6E</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"[markdown]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"editor.quickSuggestions"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-07-12",deps:[],hoistedTags:[],links:[],pathInferred:"/20220711/3.html",pathLocale:"/",permalink:null,routeMeta:{title:"vscode\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5"},slug:"3",filePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/20220711/3.md",filePathRelative:"20220711/3.md",componentFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/3.html.vue",componentFilePathRelative:"pages/20220711/3.html.vue",componentFileChunkName:"v-e262a552",dataFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/3.html.js",dataFilePathRelative:"pages/20220711/3.html.js",dataFileChunkName:"v-e262a552",htmlFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/dist/20220711/3.html",htmlFilePathRelative:"20220711/3.html"}],Ul={categories:{pagination:10,extendedPages:[{},{}],items:{Linux:{pages:[{data:{key:"v-e5cc5690",path:"/20220711/2.html",title:"Centos7\u73AF\u5883\u642D\u5EFA",lang:"zh-CN",frontmatter:{title:"Centos7\u73AF\u5883\u642D\u5EFA",date:"2022-07-12 17:55:44",sidebar:"auto",categories:["Linux"],tags:["java","mysql","redis"],publish:!0},excerpt:"",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],git:{},filePathRelative:"20220711/2.md"},key:"v-e5cc5690",path:"/20220711/2.html",title:"Centos7\u73AF\u5883\u642D\u5EFA",lang:"zh-CN",frontmatter:{title:"Centos7\u73AF\u5883\u642D\u5EFA",date:"2022-07-12 17:55:44",sidebar:"auto",categories:["Linux"],tags:["java","mysql","redis"],publish:!0},excerpt:"",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],content:`\r
<!-- more -->\r
\r
### \u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\r
\r
**1. \u521B\u5EFA jdk \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09**\r
\`mkdir -p usr/local/src\`\r
**2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D jdk \u5305**\r
\`wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz\`\r
**3. \u89E3\u538B\uFF08\u5982\u4E0B\u64CD\u4F5C\u662F\u5DF2\u7ECF\u8DF3\u5230\u6307\u5B9A\u5B58\u653E jdk \u7684\u76EE\u5F55\u4F4D\u7F6E\uFF09**\r
\`tar -zxvf jdk-8u131-linux-x64.tar.gz\`\r
**4. \u91CD\u547D\u540D**\r
\`mv jdk1.8.0_131 jdk1.8\`\r
**5. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF**\r
(1)\u8FDB\u5165\u7CFB\u7EDF\u6587\u4EF6\u547D\u4EE4\u5982\u4E0B\uFF1A\`vi /etc/profile\`\r
(2)\u6309\u201Cshift+g\u201D\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u6587\u672C\u672B\u5C3E\uFF0C\u518D\u6309\u201Ci\u201D\u6309\u952E\u8FDB\u884C\u7F16\u8F91\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6587\u672C(\u5199\u5B8C\u540E\uFF0C\u6309 ESC \u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\u5E76\u8F93\u5165\u201C:x\u201D\u4EE5\u4FDD\u5B58\u5E76\u9000\u51FA)\uFF1A\r
\r
\`\`\`/\r
export JAVA_HOME=/usr/local/src/jdk1.8\r
export PATH=$PATH:$JAVA_HOME/bin\r
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar\r
\`\`\`\r
\r
**6. \u8BA9\u914D\u7F6E\u6587\u4EF6\u751F\u6548\uFF1A**\`source /etc/profile\`\r
**7. \u68C0\u67E5 jdk \u662F\u5426\u914D\u7F6E\u6210\u529F\uFF1A** \`java -version\`\r
\r
### \u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09\r
\r
**1. \u521B\u5EFA tomcat \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09**\r
\r
**2. \u4F7F\u7528 wget \u4E0B\u8F7D tomcat**\r
\r
**3. \u89E3\u538B**\r
\r
**4. \u542F\u52A8 tomcat**\r
\r
**5. \u4FEE\u6539 tomcat \u7AEF\u53E3**\r
\r
**6. \u6D4B\u8BD5\u8BBF\u95EE**\r
\r
### \u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**_\u6CE8\u610F\uFF1A\u9664\u4E86\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 3306 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 3306 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09_**\r
\r
**1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B**\r
\r
**2. \u4E0B\u8F7D mysql \u5E76\u542F\u52A8\u670D\u52A1**\r
(1)\u4F7F\u7528 wget \u4E0B\u8F7D mysql \u6E90\u5305\u5E76\u7528 yum \u5B89\u88C5\uFF1A\r
\`\u4E0B\u8F7D\uFF1A wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm\`\r
\`\u5B89\u88C5\uFF1A yum -y localinstall mysql57-community-release-el7-11.noarch.rpm\`\r
(3)\u5728\u7EBF\u5B89\u88C5 Mysql\uFF1A\`yum -y install mysql-community-server\`\r
(4)\u542F\u52A8\u670D\u52A1\uFF1A\`systemctl start mysqld\`\r
(5)\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\uFF1A\r
\`systemctl enable mysqld\`\r
\`systemctl deaemon-reload\`\r
\r
**3. \u4FEE\u6539\u672C\u5730\u767B\u5F55\u5BC6\u7801**\r
(1) \u901A\u8FC7\`vi /var/log/mysqld.log\`\u8FDB\u5165\u8BE5\u6587\u4EF6\u4E2D\u627E\u5230\u6807\u9EC4\u8FD9\u6BB5\uFF0C\u800C\u7EA2\u8272\u5708\u4FBF\u662F\u9ED8\u8BA4\u767B\u9646\u5BC6\u7801\uFF1A\r
![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191227220213561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70)\r
(2)\u901A\u8FC7\u4EE5\u4E0A\u5F97\u5230\u7684\u5BC6\u7801\u767B\u5F55\u547D\u4EE4\`mysql -u root -p\` \uFF0C\u5373\u53EF\u8FDB\u5165 mysql \u4E2D\u3002\u4E0B\u9762\u5219\u662F\u4FEE\u6539\u5BC6\u7801\uFF1A\r
\`mysql> alter user 'root'@'localhost' identified by 'Qq88888.';\`\r
\r
**4. \u8BBE\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF08\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF09\uFF0C\u5F00\u542F\u8FDC\u7A0B\u767B\u5F55\u524D\u63D0\u8981\u4FDD\u8BC1\u5F00\u542F\u9632\u706B\u5899\uFF0C\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A**\r
(1)\u5141\u8BB8\u8BE5\u8D26\u53F7\u80FD\u591F\u88AB\u8FDC\u7A0B\u767B\u5F55\uFF1A \` mysql> grant all privileges on *.* to 'root'@'%' identified by 'Qq88888.' with grant option;\`\r
(2)\u67E5\u770B\u9632\u706B\u5899\u662F\u5426\u5F00\u542F\uFF1A \`firewall-cmd --state\`\r
(3)\u5F00\u542F\u9632\u706B\u5899\uFF1A \`systemctl start firewalld.service\` - \u5173\u95ED\u9632\u706B\u5899: \`systemctl stop firewalld.service\` - \u7981\u7528\u9632\u706B\u5899: \`systemctl disable firewalld.service\` - \u67E5\u770B\u9632\u706B\u5899\u76D1\u542C\u7684\u7AEF\u53E3: \`firewall-cmd --list-port\`\r
(4)\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A\`firewall-cmd --zone=public --add-port=3306/tcp --permanent\`\r
(5)\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\`\r
\r
**5. \u914D\u7F6E my.cnf**\r
\u8FDB\u5165\`vi /etc/my.cnf\`\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u672C\u6587\u8FDB\u884C\u7F16\u7801\u8BBE\u7F6E\uFF1A\r
\r
\`\`\`/\r
character_set_server=utf8\r
init_connect='SET NAMES utf8'\r
\`\`\`\r
\r
**6. \u91CD\u542F\u52A8 mysql**\r
\`systemctl restart mysqld\`\r
\r
### \u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**_\u6CE8\u610F\uFF1A\u540C\u4E0A\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 6379 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09_**\r
\r
**1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B**\r
\r
**2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D redis\uFF1A**\`wget http://download.redis.io/releases/redis-4.0.8.tar.gz\`\r
\r
**3. \u89E3\u538B\u3001\u7F16\u8BD1\u548C\u5B89\u88C5\uFF1A**\r
(1) \u89E3\u538B\uFF1A\`tar -zxvf redis-4.0.8.tar.gz\`\r
(2) \u5B8C\u6210\u540E\u8FDB\u5165\u89E3\u538B\u7684 redis-4.0.8 \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 make \u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF1A\`make\`\r
(3) \u5B89\u88C5\uFF1A\`make install\`\r
\r
**4. \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8**\r
(1) \u521B\u5EFA\u65B0\u76EE\u5F55\uFF1A\`mkdir -p /usr/local/redis\`\r
(2) \u5C06/usr/local/src/redis-4.0.8/src \u76EE\u5F55\u4E0B\u7684 redis-server\u3001redis-cli \u548C/usr/local/src/redis-4.0.8 \u76EE\u5F55\u4E0B\u7684 redis.conf \u6587\u4EF6\u62F7\u8D1D\u5230\u521B\u5EFA\u7684\u76EE\u5F55\u4E2D\uFF1A\r
\`cp redis-server /usr/local/redis\`\r
\`cp redis-cli /usr/local/redis\`\r
\`cp ../redis.conf /usr/local/redis\`\r
(3)\u5F00\u542F\u540E\u53F0\u8FD0\u884C\uFF0C\u4FEE\u6539\u62F7\u8D1D\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF1A\`vi /usr/local/redis/redis.conf\`\r
\r
-   \u5C06\u8424\u5149\u5B57\u4E0A\u7684\u201Cno\u201D\u8BE5\u4E3A\u201Cyes\u201D\uFF1A ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/2019122819072660.png)\r
\r
(4) \u521B\u5EFA\u670D\u52A1\u6587\u4EF6 redis.service\uFF1A\`vi /usr/lib/systemd/system/redis.service\`\r
\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u4E2D\u7684\u8DEF\u5F84\u4EE5\u5B9E\u9645\u5404\u5F02\uFF09\uFF1A\r
\r
\`\`\`/\r
	[Unit]\r
	Description=The redis-server Process Manager\r
	After=syslog.target network.target\r
\r
	[Service]\r
	Type=simple\r
	PIDFile=/var/run/redis_6379.pid\r
	ExecStart=/usr/local/redis/redis-server /usr/local/redis/redis.conf\r
	ExecReload=/bin/kill -USR2 $MAINPID\r
	ExecStop=/bin/kill -SIGINT $MAINPID\r
\r
	[Install]\r
	WantedBy=multi-user.target\r
\`\`\`\r
\r
**5. \u5F00\u542F redis \u8FDC\u7A0B\u8BBF\u95EE\uFF08\u53EF\u5FFD\u7565\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF09\uFF1A**\r
(1) \u4FEE\u6539 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A\r
\r
-   \u8BBE\u7F6E\u53EF\u8BBF\u95EE\u7684 ip\uFF1A\u4FEE\u6539\u8424\u5149\u5B57\u7684\u6587\u672C\u4E2D\u753B\u5708\u7684 ip \u5730\u5740\u8BA9\u5176\u4ED6\u53EF\u4EE5\u8BBF\u95EE\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228214121699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70)\r
-   \u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F\uFF1A\u5C06\u8424\u5149\u5B57\u6587\u672C\u7684\u201Cyes\u201D\u4FEE\u6539\u4E3A\u201Cno\u201D\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228211505882.png)\r
-   \u8BBE\u7F6E\u5BC6\u7801\uFF1A\u6DFB\u52A0\u8424\u5149\u5B57\u7684\u6587\u672C\u6240\u793A\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228205849892.png)\r
\r
(2) \u4FEE\u6539\u5B8C\u540E\u5E94\u5728 redis \u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u547D\u4EE4\`redis-server redis.conf\`\u6765\u68C0\u67E5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u4EA6\u53EF\u68C0\u67E5\u662F\u5426\u51FA\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u907F\u514D\u540E\u7EED\u4E0D\u5FC5\u8981\u7684\u95EE\u9898\r
(3) \u56E0\u4E3A\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u6240\u4EE5\u52BF\u5FC5\u8981\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u7684\u76D1\u542C\uFF1A - \u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A\`firewall-cmd --zone=public --add-port=6379/tcp --permanent\` - \u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\` - \u67E5\u770B\u9632\u706B\u5899\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --list-ports\`\r
**6. \u5F00\u542F\u670D\u52A1\u548C\u5F00\u673A\u81EA\u542F\u52A8\uFF1A**\r
(1) \u5237\u65B0\u670D\u52A1\u914D\u7F6E\uFF1A\`systemctl daemon-reload\`\r
(2) \u5F00\u542F redis: \`systemctl start redis\`\r
(3) \u52A0\u5165\u5F00\u673A\u542F\u52A8\uFF1A\`systemctl enable redis\`\r
\r
### \u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**1. \u5B89\u88C5 gcc\uFF08gcc \u7528\u4E8E\u7F16\u8BD1\u63A5\u4E0B\u6765\u4E0B\u8F7D\u7684 nginx \u6E90\u7801\uFF09**\r
\u4F7F\u7528\`gcc -v\`\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u8BE5\u547D\u4EE4\uFF0C\u5982\u672A\u5B89\u88C5\u5219\u6267\u884C\`yum install gcc-c++\`\r
\r
**2. \u5B89\u88C5 pcre \u548C pcre-devel \u4F9D\u8D56\uFF08nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002\uFF09**\r
\`yum install -y pcre pcre-devel\`\r
\r
**3. \u5B89\u88C5 zlib zlib-devel \u4F9D\u8D56\uFF08zlib \u63D0\u4F9B\u4E86\u5F88\u591A\u538B\u7F29\u548C\u89E3\u65B9\u5F0F\uFF0Cnginx \u9700\u8981 zlib \u5BF9 http \u8FDB\u884C gzip\uFF09**\r
\`yum install -y zlib zlib-devel\`\r
\r
**4. \u5B89\u88C5 openssl openssl-devel\uFF08openssl \u662F\u4E00\u4E2A\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0Cnginx \u8981\u652F\u6301 https \u5C31\u9700\u8981\u5B83\uFF09**\r
\`yum install -y openssl openssl-devel\`\r
\r
**5. \u4E0B\u8F7D nginx \u5E76\u89E3\u538B**\r
\`wget http://nginx.org/download/nginx-1.9.9.tar.gz\`\r
\`tar -zxvf nginx-1.9.9\`\r
\r
**6. \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FFD\u52A0\u5B89\u88C5 ssl \u6A21\u5757**\r
\`./configure --with-http_ssl_module\`\r
\r
**7. \u4F7F\u7528 make \u7F16\u8BD1\u548C\u5B89\u88C5**\r
\`make && make install\`\r
\r
\`\`\`\r
\u6CE8\u610F\uFF1A\u5982\u679C\u5B89\u88C5\u540E\u51FA\u73B0\u4E00\u4E2AMake[1]: Leaving directory \`/usr/local/nginx-1.9.9\`\r
\u5E76\u4E14\u5728nginx-1.9.9\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u5DF2\u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3Anginx\u7684\u6587\u4EF6\u5939\u5373\u53EF\u5FFD\u7565\u8BE5\u9519\u8BEF~\r
\`\`\`\r
\r
**8. \u67E5\u770B nginx \u662F\u5426\u5B89\u88C5\u6210\u529F**\r
(1). \u8FDB\u5165 nginx \u6587\u4EF6\u4E0B\u7684 sbin \u76EE\u5F55\u8F93\u5165\`./nginx -v\`\u67E5\u770B\u7248\u672C\u53F7\r
(2).\u4F7F\u7528\`netstat -ntpl | grep nginx\`\u67E5\u770B\u5F53\u524D nginx \u5360\u7528\u7684\u7AEF\u53E3\u53F7\r
(3). \u4F7F\u7528\`wget 127.0.0.1\`\u6D4B\u8BD5\u8FD4\u56DE\u8868\u793A\u662F\u5426\u6B63\u5E38\r
(4). \u4F7F\u7528\`curl 127.0.0.1\`\u6D4B\u8BD5\u8FD4\u56DE\u9875\u9762\u7684\u503C\u662F\u5426\u6B63\u5E38\r
\r
**9. \u914D\u7F6E nginx \u5F00\u673A\u81EA\u542F\u52A8**\r
(1). \u8FDB\u5165\u76EE\u5F55\`cd /usr/lib/systemd/system\`\r
(2). \u521B\u5EFA nginx.service \u670D\u52A1\u6587\u4EF6\`vi nginx.service\`\r
(3). \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A\r
\r
\`\`\`/\r
[Unit]\r
Description=nginx\r
After=network.target\r
\r
[Service]\r
Type=forking\r
ExecStart=/usr/local/nginx/sbin/nginx\r
ExecReload=/usr/local/nginx/sbin/nginx reload\r
ExecStop=/usr/local/nginx/sbin/nginx quit\r
PrivateTmp=true\r
\r
[Install]\r
WantedBy=multi-user.target\r
\`\`\`\r
\r
(4). \u5F00\u673A\u81EA\u542F\u52A8\uFF1A\`systemctl enable nginx.service\`\r
(5). nginx \u670D\u52A1\u7684\u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F\uFF1A\r
\u542F\u52A8\uFF1A\`systemctl start nginx.service\`\r
\u5173\u95ED\uFF1A\`systemctl stop nginx.service\`\r
\u91CD\u542F\uFF1A\`systemctl restart nginx.service\`\r
\r
**10. \u9632\u706B\u5899\u5F00\u542F http\u3001https \u670D\u52A1\u4EE5\u53CA\u7AEF\u53E3\u76D1\u542C**\r
\u5F00\u542F http \u670D\u52A1\uFF1A\`firewall-cmd --zone=public --add-service=http --permanent\`\r
\u5F00\u542F 80 \u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --add-port=80/tcp --permanent\`\r
\u5F00\u542F https \u670D\u52A1\uFF1A\`firewall-cmd --zone=public --add-service=https --permanent\`\r
\u5F00\u542F 443 \u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --add-port=443/tcp --permanent\`\r
\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\`\r
\r
**11. nginx + \u4E00\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A**\r
(1). \u4FEE\u6539\u5B89\u88C5\u540E nginx \u6587\u4EF6\u7684 conf \u76EE\u5F55\u4E0B\u7684 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1A \`vi nginx.conf\`\r
(2). \u627E\u5230\u5E26\u6709# HTTPS Server \u7684\u5B57\u6837\uFF0C\u5C06\u5176\u4E0B\u6587\u672C\u6309\u7167\u4EE5\u4E0B\u6587\u672C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A\r
\r
\`\`\`\\\r
    # HTTPS Server\r
    #\r
    server {\r
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443\r
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D\r
\r
        ssl_certificate      cert/www/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem\r
        ssl_certificate_key  cert/www/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key\r
        ssl   on;\r
\r
        ssl_session_cache    shared:SSL:1m;\r
        ssl_session_timeout  5m;\r
\r
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\r
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\r
        ssl_prefer_server_ciphers  on;\r
\r
        location / {\r
            proxy_pass   http://127.0.0.1:8080; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
            proxy_set_header Host                               $http_addr;\r
            proxy_set_header X-Real-IP                        $remote_addr;\r
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
            root   html;\r
            index  index.html index.htm;\r
        }\r
\r
		# \u914D\u7F6E\u53E6\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528443\u7AEF\u53E3\r
		# location /test {\r
        #    proxy_pass   http://127.0.0.1:9090/test; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
        #    proxy_set_header Host                               $http_addr;\r
        #    proxy_set_header X-Real-IP                        $remote_addr;\r
        #    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
        #    root   html;\r
        #    index  index.html index.htm;\r
		# }\r
    }\r
\`\`\`\r
\r
(3). \u5C06 http \u8BF7\u6C42\u91CD\u5B9A\u5411\u4E3A https \u8BF7\u6C42\uFF0C\u5728\u539F nginx.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u4E3A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF1A\r
\r
\`\`\`/\r
	server {\r
        listen       80;\r
        server_name  www.shnice.club; #\u586B\u5199\u8BBF\u95EE\u7684\u57DF\u540D\r
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps\r
		.....\r
\`\`\`\r
\r
(4). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -t\`\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E\r
(5). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -s reload\`\u52A0\u8F7D\u914D\u7F6E\r
\r
**12\u3001nginx + \u4E8C\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A**\r
(1). \u5728 nginx \u6587\u4EF6\u5939\u4E0B\u4E0B\u521B\u5EFA vhosts \u76EE\u5F55\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A\\*.conf \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B\uFF1A\r
\r
\`\`\`/\r
# HTTP Server\r
#\r
server {\r
        listen 80;\r
        server_name localhost; #\u586B\u5199\u4F60\u8BBF\u95EE\u7684\u57DF\u540D\r
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps\r
\r
        location / {\r
            index index.html index.htm;\r
        }\r
}\r
\r
# HTTPS Server\r
#\r
server {\r
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443\r
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D\r
\r
        ssl_certificate      cert/abc/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem\r
        ssl_certificate_key  cert/abc/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key\r
        ssl   on;\r
\r
        ssl_session_cache    shared:SSL:1m;\r
        ssl_session_timeout  5m;\r
\r
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\r
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\r
        ssl_prefer_server_ciphers  on;\r
\r
        location /abc {\r
            proxy_pass   http://127.0.0.1:8080/abc; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
            proxy_set_header Host                               $http_addr;\r
            proxy_set_header X-Real-IP                        $remote_addr;\r
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
            root   html;\r
            index  index.html index.htm;\r
        }\r
}\r
\`\`\`\r
\r
(2). \u5BFC\u5165\u4E8C\u7EA7\u57DF\u540D\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u5230 nginx.conf \u4E2D\uFF1A\r
\u8FDB\u5165 conf \u76EE\u5F55\u4E0B\uFF0C\u5728 nginx.conf \u6587\u4EF6\u4E2D\u7684 http{}\u5305\u88F9\u4E2D\u5904\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A\r
\r
\`\`\`\\\r
	include /usr/local/nginx/vhosts/*;\r
\`\`\`\r
\r
(3). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -t\`\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E\r
(4). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -s reload\`\u52A0\u8F7D\u914D\u7F6E\r
`,contentRendered:`<!-- more -->
<h3 id="\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</h3>
<p><strong>1. \u521B\u5EFA jdk \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09</strong>
<code v-pre>mkdir -p usr/local/src</code>
<strong>2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D jdk \u5305</strong>
<code v-pre>wget --no-check-certificate --no-cookies --header &quot;Cookie: oraclelicense=accept-securebackup-cookie&quot; http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz</code>
<strong>3. \u89E3\u538B\uFF08\u5982\u4E0B\u64CD\u4F5C\u662F\u5DF2\u7ECF\u8DF3\u5230\u6307\u5B9A\u5B58\u653E jdk \u7684\u76EE\u5F55\u4F4D\u7F6E\uFF09</strong>
<code v-pre>tar -zxvf jdk-8u131-linux-x64.tar.gz</code>
<strong>4. \u91CD\u547D\u540D</strong>
<code v-pre>mv jdk1.8.0_131 jdk1.8</code>
<strong>5. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF</strong>
(1)\u8FDB\u5165\u7CFB\u7EDF\u6587\u4EF6\u547D\u4EE4\u5982\u4E0B\uFF1A<code v-pre>vi /etc/profile</code>
(2)\u6309\u201Cshift+g\u201D\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u6587\u672C\u672B\u5C3E\uFF0C\u518D\u6309\u201Ci\u201D\u6309\u952E\u8FDB\u884C\u7F16\u8F91\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6587\u672C(\u5199\u5B8C\u540E\uFF0C\u6309 ESC \u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\u5E76\u8F93\u5165\u201C:x\u201D\u4EE5\u4FDD\u5B58\u5E76\u9000\u51FA)\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>export JAVA_HOME=/usr/local/src/jdk1.8
export PATH=$PATH:$JAVA_HOME/bin
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. \u8BA9\u914D\u7F6E\u6587\u4EF6\u751F\u6548\uFF1A</strong><code v-pre>source /etc/profile</code>
<strong>7. \u68C0\u67E5 jdk \u662F\u5426\u914D\u7F6E\u6210\u529F\uFF1A</strong> <code v-pre>java -version</code></p>
<h3 id="\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981" aria-hidden="true">#</a> \u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09</h3>
<p><strong>1. \u521B\u5EFA tomcat \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09</strong></p>
<p><strong>2. \u4F7F\u7528 wget \u4E0B\u8F7D tomcat</strong></p>
<p><strong>3. \u89E3\u538B</strong></p>
<p><strong>4. \u542F\u52A8 tomcat</strong></p>
<p><strong>5. \u4FEE\u6539 tomcat \u7AEF\u53E3</strong></p>
<p><strong>6. \u6D4B\u8BD5\u8BBF\u95EE</strong></p>
<h3 id="\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong><em>\u6CE8\u610F\uFF1A\u9664\u4E86\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 3306 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 3306 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09</em></strong></p>
<p><strong>1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B</strong></p>
<p><strong>2. \u4E0B\u8F7D mysql \u5E76\u542F\u52A8\u670D\u52A1</strong>
(1)\u4F7F\u7528 wget \u4E0B\u8F7D mysql \u6E90\u5305\u5E76\u7528 yum \u5B89\u88C5\uFF1A
<code v-pre>\u4E0B\u8F7D\uFF1A wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm</code>
<code v-pre>\u5B89\u88C5\uFF1A yum -y localinstall mysql57-community-release-el7-11.noarch.rpm</code>
(3)\u5728\u7EBF\u5B89\u88C5 Mysql\uFF1A<code v-pre>yum -y install mysql-community-server</code>
(4)\u542F\u52A8\u670D\u52A1\uFF1A<code v-pre>systemctl start mysqld</code>
(5)\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\uFF1A
<code v-pre>systemctl enable mysqld</code>
<code v-pre>systemctl deaemon-reload</code></p>
<p><strong>3. \u4FEE\u6539\u672C\u5730\u767B\u5F55\u5BC6\u7801</strong>
(1) \u901A\u8FC7<code v-pre>vi /var/log/mysqld.log</code>\u8FDB\u5165\u8BE5\u6587\u4EF6\u4E2D\u627E\u5230\u6807\u9EC4\u8FD9\u6BB5\uFF0C\u800C\u7EA2\u8272\u5708\u4FBF\u662F\u9ED8\u8BA4\u767B\u9646\u5BC6\u7801\uFF1A
<img src="https://img-blog.csdnimg.cn/20191227220213561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0">
(2)\u901A\u8FC7\u4EE5\u4E0A\u5F97\u5230\u7684\u5BC6\u7801\u767B\u5F55\u547D\u4EE4<code v-pre>mysql -u root -p</code> \uFF0C\u5373\u53EF\u8FDB\u5165 mysql \u4E2D\u3002\u4E0B\u9762\u5219\u662F\u4FEE\u6539\u5BC6\u7801\uFF1A
<code v-pre>mysql&gt; alter user 'root'@'localhost' identified by 'Qq88888.';</code></p>
<p><strong>4. \u8BBE\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF08\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF09\uFF0C\u5F00\u542F\u8FDC\u7A0B\u767B\u5F55\u524D\u63D0\u8981\u4FDD\u8BC1\u5F00\u542F\u9632\u706B\u5899\uFF0C\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A</strong>
(1)\u5141\u8BB8\u8BE5\u8D26\u53F7\u80FD\u591F\u88AB\u8FDC\u7A0B\u767B\u5F55\uFF1A <code v-pre> mysql&gt; grant all privileges on *.* to 'root'@'%' identified by 'Qq88888.' with grant option;</code>
(2)\u67E5\u770B\u9632\u706B\u5899\u662F\u5426\u5F00\u542F\uFF1A <code v-pre>firewall-cmd --state</code>
(3)\u5F00\u542F\u9632\u706B\u5899\uFF1A <code v-pre>systemctl start firewalld.service</code> - \u5173\u95ED\u9632\u706B\u5899: <code v-pre>systemctl stop firewalld.service</code> - \u7981\u7528\u9632\u706B\u5899: <code v-pre>systemctl disable firewalld.service</code> - \u67E5\u770B\u9632\u706B\u5899\u76D1\u542C\u7684\u7AEF\u53E3: <code v-pre>firewall-cmd --list-port</code>
(4)\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=3306/tcp --permanent</code>
(5)\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code></p>
<p><strong>5. \u914D\u7F6E my.cnf</strong>
\u8FDB\u5165<code v-pre>vi /etc/my.cnf</code>\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u672C\u6587\u8FDB\u884C\u7F16\u7801\u8BBE\u7F6E\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>character_set_server=utf8
init_connect='SET NAMES utf8'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. \u91CD\u542F\u52A8 mysql</strong>
<code v-pre>systemctl restart mysqld</code></p>
<h3 id="\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong><em>\u6CE8\u610F\uFF1A\u540C\u4E0A\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 6379 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09</em></strong></p>
<p><strong>1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B</strong></p>
<p><strong>2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D redis\uFF1A</strong><code v-pre>wget http://download.redis.io/releases/redis-4.0.8.tar.gz</code></p>
<p><strong>3. \u89E3\u538B\u3001\u7F16\u8BD1\u548C\u5B89\u88C5\uFF1A</strong>
(1) \u89E3\u538B\uFF1A<code v-pre>tar -zxvf redis-4.0.8.tar.gz</code>
(2) \u5B8C\u6210\u540E\u8FDB\u5165\u89E3\u538B\u7684 redis-4.0.8 \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 make \u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF1A<code v-pre>make</code>
(3) \u5B89\u88C5\uFF1A<code v-pre>make install</code></p>
<p><strong>4. \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8</strong>
(1) \u521B\u5EFA\u65B0\u76EE\u5F55\uFF1A<code v-pre>mkdir -p /usr/local/redis</code>
(2) \u5C06/usr/local/src/redis-4.0.8/src \u76EE\u5F55\u4E0B\u7684 redis-server\u3001redis-cli \u548C/usr/local/src/redis-4.0.8 \u76EE\u5F55\u4E0B\u7684 redis.conf \u6587\u4EF6\u62F7\u8D1D\u5230\u521B\u5EFA\u7684\u76EE\u5F55\u4E2D\uFF1A
<code v-pre>cp redis-server /usr/local/redis</code>
<code v-pre>cp redis-cli /usr/local/redis</code>
<code v-pre>cp ../redis.conf /usr/local/redis</code>
(3)\u5F00\u542F\u540E\u53F0\u8FD0\u884C\uFF0C\u4FEE\u6539\u62F7\u8D1D\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF1A<code v-pre>vi /usr/local/redis/redis.conf</code></p>
<ul>
<li>\u5C06\u8424\u5149\u5B57\u4E0A\u7684\u201Cno\u201D\u8BE5\u4E3A\u201Cyes\u201D\uFF1A <img src="https://img-blog.csdnimg.cn/2019122819072660.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
</ul>
<p>(4) \u521B\u5EFA\u670D\u52A1\u6587\u4EF6 redis.service\uFF1A<code v-pre>vi /usr/lib/systemd/system/redis.service</code>
\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u4E2D\u7684\u8DEF\u5F84\u4EE5\u5B9E\u9645\u5404\u5F02\uFF09\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>	[Unit]
	Description=The redis-server Process Manager
	After=syslog.target network.target

	[Service]
	Type=simple
	PIDFile=/var/run/redis_6379.pid
	ExecStart=/usr/local/redis/redis-server /usr/local/redis/redis.conf
	ExecReload=/bin/kill -USR2 $MAINPID
	ExecStop=/bin/kill -SIGINT $MAINPID

	[Install]
	WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. \u5F00\u542F redis \u8FDC\u7A0B\u8BBF\u95EE\uFF08\u53EF\u5FFD\u7565\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF09\uFF1A</strong>
(1) \u4FEE\u6539 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A</p>
<ul>
<li>\u8BBE\u7F6E\u53EF\u8BBF\u95EE\u7684 ip\uFF1A\u4FEE\u6539\u8424\u5149\u5B57\u7684\u6587\u672C\u4E2D\u753B\u5708\u7684 ip \u5730\u5740\u8BA9\u5176\u4ED6\u53EF\u4EE5\u8BBF\u95EE
<img src="https://img-blog.csdnimg.cn/20191228214121699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
<li>\u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F\uFF1A\u5C06\u8424\u5149\u5B57\u6587\u672C\u7684\u201Cyes\u201D\u4FEE\u6539\u4E3A\u201Cno\u201D
<img src="https://img-blog.csdnimg.cn/20191228211505882.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
<li>\u8BBE\u7F6E\u5BC6\u7801\uFF1A\u6DFB\u52A0\u8424\u5149\u5B57\u7684\u6587\u672C\u6240\u793A
<img src="https://img-blog.csdnimg.cn/20191228205849892.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
</ul>
<p>(2) \u4FEE\u6539\u5B8C\u540E\u5E94\u5728 redis \u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u547D\u4EE4<code v-pre>redis-server redis.conf</code>\u6765\u68C0\u67E5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u4EA6\u53EF\u68C0\u67E5\u662F\u5426\u51FA\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u907F\u514D\u540E\u7EED\u4E0D\u5FC5\u8981\u7684\u95EE\u9898
(3) \u56E0\u4E3A\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u6240\u4EE5\u52BF\u5FC5\u8981\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u7684\u76D1\u542C\uFF1A - \u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=6379/tcp --permanent</code> - \u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code> - \u67E5\u770B\u9632\u706B\u5899\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --list-ports</code>
<strong>6. \u5F00\u542F\u670D\u52A1\u548C\u5F00\u673A\u81EA\u542F\u52A8\uFF1A</strong>
(1) \u5237\u65B0\u670D\u52A1\u914D\u7F6E\uFF1A<code v-pre>systemctl daemon-reload</code>
(2) \u5F00\u542F redis: <code v-pre>systemctl start redis</code>
(3) \u52A0\u5165\u5F00\u673A\u542F\u52A8\uFF1A<code v-pre>systemctl enable redis</code></p>
<h3 id="\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong>1. \u5B89\u88C5 gcc\uFF08gcc \u7528\u4E8E\u7F16\u8BD1\u63A5\u4E0B\u6765\u4E0B\u8F7D\u7684 nginx \u6E90\u7801\uFF09</strong>
\u4F7F\u7528<code v-pre>gcc -v</code>\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u8BE5\u547D\u4EE4\uFF0C\u5982\u672A\u5B89\u88C5\u5219\u6267\u884C<code v-pre>yum install gcc-c++</code></p>
<p><strong>2. \u5B89\u88C5 pcre \u548C pcre-devel \u4F9D\u8D56\uFF08nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002\uFF09</strong>
<code v-pre>yum install -y pcre pcre-devel</code></p>
<p><strong>3. \u5B89\u88C5 zlib zlib-devel \u4F9D\u8D56\uFF08zlib \u63D0\u4F9B\u4E86\u5F88\u591A\u538B\u7F29\u548C\u89E3\u65B9\u5F0F\uFF0Cnginx \u9700\u8981 zlib \u5BF9 http \u8FDB\u884C gzip\uFF09</strong>
<code v-pre>yum install -y zlib zlib-devel</code></p>
<p><strong>4. \u5B89\u88C5 openssl openssl-devel\uFF08openssl \u662F\u4E00\u4E2A\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0Cnginx \u8981\u652F\u6301 https \u5C31\u9700\u8981\u5B83\uFF09</strong>
<code v-pre>yum install -y openssl openssl-devel</code></p>
<p><strong>5. \u4E0B\u8F7D nginx \u5E76\u89E3\u538B</strong>
<code v-pre>wget http://nginx.org/download/nginx-1.9.9.tar.gz</code>
<code v-pre>tar -zxvf nginx-1.9.9</code></p>
<p><strong>6. \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FFD\u52A0\u5B89\u88C5 ssl \u6A21\u5757</strong>
<code v-pre>./configure --with-http_ssl_module</code></p>
<p><strong>7. \u4F7F\u7528 make \u7F16\u8BD1\u548C\u5B89\u88C5</strong>
<code v-pre>make &amp;&amp; make install</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>\u6CE8\u610F\uFF1A\u5982\u679C\u5B89\u88C5\u540E\u51FA\u73B0\u4E00\u4E2AMake[1]: Leaving directory \`/usr/local/nginx-1.9.9\`
\u5E76\u4E14\u5728nginx-1.9.9\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u5DF2\u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3Anginx\u7684\u6587\u4EF6\u5939\u5373\u53EF\u5FFD\u7565\u8BE5\u9519\u8BEF~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>8. \u67E5\u770B nginx \u662F\u5426\u5B89\u88C5\u6210\u529F</strong>
(1). \u8FDB\u5165 nginx \u6587\u4EF6\u4E0B\u7684 sbin \u76EE\u5F55\u8F93\u5165<code v-pre>./nginx -v</code>\u67E5\u770B\u7248\u672C\u53F7
(2).\u4F7F\u7528<code v-pre>netstat -ntpl | grep nginx</code>\u67E5\u770B\u5F53\u524D nginx \u5360\u7528\u7684\u7AEF\u53E3\u53F7
(3). \u4F7F\u7528<code v-pre>wget 127.0.0.1</code>\u6D4B\u8BD5\u8FD4\u56DE\u8868\u793A\u662F\u5426\u6B63\u5E38
(4). \u4F7F\u7528<code v-pre>curl 127.0.0.1</code>\u6D4B\u8BD5\u8FD4\u56DE\u9875\u9762\u7684\u503C\u662F\u5426\u6B63\u5E38</p>
<p><strong>9. \u914D\u7F6E nginx \u5F00\u673A\u81EA\u542F\u52A8</strong>
(1). \u8FDB\u5165\u76EE\u5F55<code v-pre>cd /usr/lib/systemd/system</code>
(2). \u521B\u5EFA nginx.service \u670D\u52A1\u6587\u4EF6<code v-pre>vi nginx.service</code>
(3). \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>[Unit]
Description=nginx
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx reload
ExecStop=/usr/local/nginx/sbin/nginx quit
PrivateTmp=true

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4). \u5F00\u673A\u81EA\u542F\u52A8\uFF1A<code v-pre>systemctl enable nginx.service</code>
(5). nginx \u670D\u52A1\u7684\u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F\uFF1A
\u542F\u52A8\uFF1A<code v-pre>systemctl start nginx.service</code>
\u5173\u95ED\uFF1A<code v-pre>systemctl stop nginx.service</code>
\u91CD\u542F\uFF1A<code v-pre>systemctl restart nginx.service</code></p>
<p><strong>10. \u9632\u706B\u5899\u5F00\u542F http\u3001https \u670D\u52A1\u4EE5\u53CA\u7AEF\u53E3\u76D1\u542C</strong>
\u5F00\u542F http \u670D\u52A1\uFF1A<code v-pre>firewall-cmd --zone=public --add-service=http --permanent</code>
\u5F00\u542F 80 \u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=80/tcp --permanent</code>
\u5F00\u542F https \u670D\u52A1\uFF1A<code v-pre>firewall-cmd --zone=public --add-service=https --permanent</code>
\u5F00\u542F 443 \u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=443/tcp --permanent</code>
\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code></p>
<p><strong>11. nginx + \u4E00\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A</strong>
(1). \u4FEE\u6539\u5B89\u88C5\u540E nginx \u6587\u4EF6\u7684 conf \u76EE\u5F55\u4E0B\u7684 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1A <code v-pre>vi nginx.conf</code>
(2). \u627E\u5230\u5E26\u6709# HTTPS Server \u7684\u5B57\u6837\uFF0C\u5C06\u5176\u4E0B\u6587\u672C\u6309\u7167\u4EE5\u4E0B\u6587\u672C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A</p>
<div class="language-\\ ext-\\ line-numbers-mode"><pre v-pre class="language-\\"><code>    # HTTPS Server
    #
    server {
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D

        ssl_certificate      cert/www/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem
        ssl_certificate_key  cert/www/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key
        ssl   on;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

        location / {
            proxy_pass   http://127.0.0.1:8080; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
            proxy_set_header Host                               $http_addr;
            proxy_set_header X-Real-IP                        $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            root   html;
            index  index.html index.htm;
        }

		# \u914D\u7F6E\u53E6\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528443\u7AEF\u53E3
		# location /test {
        #    proxy_pass   http://127.0.0.1:9090/test; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
        #    proxy_set_header Host                               $http_addr;
        #    proxy_set_header X-Real-IP                        $remote_addr;
        #    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        #    root   html;
        #    index  index.html index.htm;
		# }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3). \u5C06 http \u8BF7\u6C42\u91CD\u5B9A\u5411\u4E3A https \u8BF7\u6C42\uFF0C\u5728\u539F nginx.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u4E3A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>	server {
        listen       80;
        server_name  www.shnice.club; #\u586B\u5199\u8BBF\u95EE\u7684\u57DF\u540D
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps
		.....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -t</code>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E
(5). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -s reload</code>\u52A0\u8F7D\u914D\u7F6E</p>
<p><strong>12\u3001nginx + \u4E8C\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A</strong>
(1). \u5728 nginx \u6587\u4EF6\u5939\u4E0B\u4E0B\u521B\u5EFA vhosts \u76EE\u5F55\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A*.conf \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code># HTTP Server
#
server {
        listen 80;
        server_name localhost; #\u586B\u5199\u4F60\u8BBF\u95EE\u7684\u57DF\u540D
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps

        location / {
            index index.html index.htm;
        }
}

# HTTPS Server
#
server {
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D

        ssl_certificate      cert/abc/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem
        ssl_certificate_key  cert/abc/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key
        ssl   on;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

        location /abc {
            proxy_pass   http://127.0.0.1:8080/abc; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
            proxy_set_header Host                               $http_addr;
            proxy_set_header X-Real-IP                        $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            root   html;
            index  index.html index.htm;
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2). \u5BFC\u5165\u4E8C\u7EA7\u57DF\u540D\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u5230 nginx.conf \u4E2D\uFF1A
\u8FDB\u5165 conf \u76EE\u5F55\u4E0B\uFF0C\u5728 nginx.conf \u6587\u4EF6\u4E2D\u7684 http{}\u5305\u88F9\u4E2D\u5904\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="language-\\ ext-\\ line-numbers-mode"><pre v-pre class="language-\\"><code>	include /usr/local/nginx/vhosts/*;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -t</code>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E
(4). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -s reload</code>\u52A0\u8F7D\u914D\u7F6E</p>
`,date:"2022-07-12",deps:[],hoistedTags:[],links:[],pathInferred:"/20220711/2.html",pathLocale:"/",permalink:null,routeMeta:{title:"Centos7\u73AF\u5883\u642D\u5EFA"},slug:"2",filePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/20220711/2.md",filePathRelative:"20220711/2.md",componentFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/2.html.vue",componentFilePathRelative:"pages/20220711/2.html.vue",componentFileChunkName:"v-e5cc5690",dataFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/2.html.js",dataFilePathRelative:"pages/20220711/2.html.js",dataFileChunkName:"v-e5cc5690",htmlFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/dist/20220711/2.html",htmlFilePathRelative:"20220711/2.html"}],length:1,label:"Linux"},Vscode:{pages:[{data:{key:"v-e262a552",path:"/20220711/3.html",title:"vscode\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5",lang:"zh-CN",frontmatter:{title:"vscode\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5",date:"2022-07-12 17:55:44",author:"sihaolin",categories:["Vscode"]},excerpt:"",headers:[],git:{},filePathRelative:"20220711/3.md"},key:"v-e262a552",path:"/20220711/3.html",title:"vscode\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5",lang:"zh-CN",frontmatter:{title:"vscode\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5",date:"2022-07-12 17:55:44",author:"sihaolin",categories:["Vscode"]},excerpt:"",headers:[],content:`\r
<!-- more -->\r
\r
::: details \u521B\u5EFA\u4EE3\u7801\u7247\u6BB5\uFF1Amarkdown \u7684\u5143\u4FE1\u606F\r
\r
\`\`\`json\r
{\r
    "Print blog meta": {\r
        "prefix": "blogmeta",\r
        "body": [\r
            "---",\r
            "title: \${1:$TM_FILENAME_BASE}",\r
            "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND",\r
            "author: \${2:sihaolin}",\r
            "tags:",\r
            "  - $3",\r
            "---",\r
            "\\r"\r
        ],\r
        "description": "\u751F\u6210\u535A\u5BA2\u5143\u4FE1\u606F"\r
    }\r
}\r
\`\`\`\r
\r
:::\r
\r
::: details \u521B\u5EFA\u4EE3\u7801\u7247\u6BB5\uFF1A\u83B7\u53D6\u5F53\u524D\u65E5\u671F\u65F6\u95F4\r
\r
\`\`\`json\r
{\r
    "Print blog meta": {\r
        "prefix": "nowdate",\r
        "body": [\r
            "'$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND'"\r
        ],\r
        "description": "\u751F\u6210\u5F53\u524D\u65E5\u671F\u65F6\u95F4"\r
    }\r
}\r
\`\`\`\r
\r
:::\r
\r
\u6700\u540E\uFF0C\u5728 setting.json \u6587\u4EF6\u6DFB\u52A0\u4E0B\u9762\u914D\u7F6E\r
\r
\`\`\`json\r
{\r
    "[markdown]": {\r
        "editor.quickSuggestions": true\r
    }\r
}\r
\`\`\`\r
`,contentRendered:`<!-- more -->
<details class="custom-container details"><summary class="custom-container-title">\u521B\u5EFA\u4EE3\u7801\u7247\u6BB5\uFF1Amarkdown</summary><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"Print blog meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"prefix"</span><span class="token operator">:</span> <span class="token string">"blogmeta"</span><span class="token punctuation">,</span>
        <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"---"</span><span class="token punctuation">,</span>
            <span class="token string">"title: \${1:$TM_FILENAME_BASE}"</span><span class="token punctuation">,</span>
            <span class="token string">"date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND"</span><span class="token punctuation">,</span>
            <span class="token string">"author: \${2:sihaolin}"</span><span class="token punctuation">,</span>
            <span class="token string">"tags:"</span><span class="token punctuation">,</span>
            <span class="token string">"  - $3"</span><span class="token punctuation">,</span>
            <span class="token string">"---"</span><span class="token punctuation">,</span>
            <span class="token string">"\\r"</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"\u751F\u6210\u535A\u5BA2\u5143\u4FE1\u606F"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary class="custom-container-title">\u521B\u5EFA\u4EE3\u7801\u7247\u6BB5\uFF1A\u83B7\u53D6\u5F53\u524D\u65E5\u671F\u65F6\u95F4</summary><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"Print blog meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"prefix"</span><span class="token operator">:</span> <span class="token string">"nowdate"</span><span class="token punctuation">,</span>
        <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"'$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND'"</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"\u751F\u6210\u5F53\u524D\u65E5\u671F\u65F6\u95F4"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>\u6700\u540E\uFF0C\u5728 setting.json \u6587\u4EF6\u6DFB\u52A0\u4E0B\u9762\u914D\u7F6E</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"[markdown]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"editor.quickSuggestions"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-07-12",deps:[],hoistedTags:[],links:[],pathInferred:"/20220711/3.html",pathLocale:"/",permalink:null,routeMeta:{title:"vscode\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5"},slug:"3",filePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/20220711/3.md",filePathRelative:"20220711/3.md",componentFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/3.html.vue",componentFilePathRelative:"pages/20220711/3.html.vue",componentFileChunkName:"v-e262a552",dataFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/3.html.js",dataFilePathRelative:"pages/20220711/3.html.js",dataFileChunkName:"v-e262a552",htmlFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/dist/20220711/3.html",htmlFilePathRelative:"20220711/3.html"}],length:1,label:"Vscode"}},layout:"Categories"},tags:{pagination:10,extendedPages:[{},{},{},{}],items:{vuepress:{pages:[{data:{key:"v-e93607ce",path:"/20220711/1.html",title:"Vuepress\u4F7F\u7528\u6307\u5357(reco)",lang:"zh-CN",frontmatter:{title:"Vuepress\u4F7F\u7528\u6307\u5357(reco)",date:"2022-07-12 17:55:44",sidebar:"auto",tags:["vuepress"],publish:!0},excerpt:"",headers:[{level:3,title:"markdown \u6B63\u6587",slug:"markdown-\u6B63\u6587",children:[]}],git:{},filePathRelative:"20220711/1.md"},key:"v-e93607ce",path:"/20220711/1.html",title:"Vuepress\u4F7F\u7528\u6307\u5357(reco)",lang:"zh-CN",frontmatter:{title:"Vuepress\u4F7F\u7528\u6307\u5357(reco)",date:"2022-07-12 17:55:44",sidebar:"auto",tags:["vuepress"],publish:!0},excerpt:"",headers:[{level:3,title:"markdown \u6B63\u6587",slug:"markdown-\u6B63\u6587",children:[]}],content:`\r
<!-- more -->\r
\r
### markdown \u6B63\u6587\r
\r
::: tip\r
Vuepress \u662F Vue \u4F5C\u8005\u5C24\u96E8\u6EAA\u5F00\u53D1\u7684\u6587\u6863\u5DE5\u5177\uFF0C\u672C\u6587\u91C7\u7528 Vuepress \u7684 reco \u4E3B\u9898\u8FDB\u884C\u76F8\u5173\u914D\u7F6E\u8BF4\u660E\r
:::\r
`,contentRendered:`<!-- more -->
<h3 id="markdown-\u6B63\u6587" tabindex="-1"><a class="header-anchor" href="#markdown-\u6B63\u6587" aria-hidden="true">#</a> markdown \u6B63\u6587</h3>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>Vuepress \u662F Vue \u4F5C\u8005\u5C24\u96E8\u6EAA\u5F00\u53D1\u7684\u6587\u6863\u5DE5\u5177\uFF0C\u672C\u6587\u91C7\u7528 Vuepress \u7684 reco \u4E3B\u9898\u8FDB\u884C\u76F8\u5173\u914D\u7F6E\u8BF4\u660E</p>
</div>`,date:"2022-07-12",deps:[],hoistedTags:[],links:[],pathInferred:"/20220711/1.html",pathLocale:"/",permalink:null,routeMeta:{title:"Vuepress\u4F7F\u7528\u6307\u5357(reco)"},slug:"1",filePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/20220711/1.md",filePathRelative:"20220711/1.md",componentFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/1.html.vue",componentFilePathRelative:"pages/20220711/1.html.vue",componentFileChunkName:"v-e93607ce",dataFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/1.html.js",dataFilePathRelative:"pages/20220711/1.html.js",dataFileChunkName:"v-e93607ce",htmlFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/dist/20220711/1.html",htmlFilePathRelative:"20220711/1.html"}],length:1,label:"vuepress"},java:{pages:[{data:{key:"v-e5cc5690",path:"/20220711/2.html",title:"Centos7\u73AF\u5883\u642D\u5EFA",lang:"zh-CN",frontmatter:{title:"Centos7\u73AF\u5883\u642D\u5EFA",date:"2022-07-12 17:55:44",sidebar:"auto",categories:["Linux"],tags:["java","mysql","redis"],publish:!0},excerpt:"",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],git:{},filePathRelative:"20220711/2.md"},key:"v-e5cc5690",path:"/20220711/2.html",title:"Centos7\u73AF\u5883\u642D\u5EFA",lang:"zh-CN",frontmatter:{title:"Centos7\u73AF\u5883\u642D\u5EFA",date:"2022-07-12 17:55:44",sidebar:"auto",categories:["Linux"],tags:["java","mysql","redis"],publish:!0},excerpt:"",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],content:`\r
<!-- more -->\r
\r
### \u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\r
\r
**1. \u521B\u5EFA jdk \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09**\r
\`mkdir -p usr/local/src\`\r
**2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D jdk \u5305**\r
\`wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz\`\r
**3. \u89E3\u538B\uFF08\u5982\u4E0B\u64CD\u4F5C\u662F\u5DF2\u7ECF\u8DF3\u5230\u6307\u5B9A\u5B58\u653E jdk \u7684\u76EE\u5F55\u4F4D\u7F6E\uFF09**\r
\`tar -zxvf jdk-8u131-linux-x64.tar.gz\`\r
**4. \u91CD\u547D\u540D**\r
\`mv jdk1.8.0_131 jdk1.8\`\r
**5. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF**\r
(1)\u8FDB\u5165\u7CFB\u7EDF\u6587\u4EF6\u547D\u4EE4\u5982\u4E0B\uFF1A\`vi /etc/profile\`\r
(2)\u6309\u201Cshift+g\u201D\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u6587\u672C\u672B\u5C3E\uFF0C\u518D\u6309\u201Ci\u201D\u6309\u952E\u8FDB\u884C\u7F16\u8F91\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6587\u672C(\u5199\u5B8C\u540E\uFF0C\u6309 ESC \u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\u5E76\u8F93\u5165\u201C:x\u201D\u4EE5\u4FDD\u5B58\u5E76\u9000\u51FA)\uFF1A\r
\r
\`\`\`/\r
export JAVA_HOME=/usr/local/src/jdk1.8\r
export PATH=$PATH:$JAVA_HOME/bin\r
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar\r
\`\`\`\r
\r
**6. \u8BA9\u914D\u7F6E\u6587\u4EF6\u751F\u6548\uFF1A**\`source /etc/profile\`\r
**7. \u68C0\u67E5 jdk \u662F\u5426\u914D\u7F6E\u6210\u529F\uFF1A** \`java -version\`\r
\r
### \u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09\r
\r
**1. \u521B\u5EFA tomcat \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09**\r
\r
**2. \u4F7F\u7528 wget \u4E0B\u8F7D tomcat**\r
\r
**3. \u89E3\u538B**\r
\r
**4. \u542F\u52A8 tomcat**\r
\r
**5. \u4FEE\u6539 tomcat \u7AEF\u53E3**\r
\r
**6. \u6D4B\u8BD5\u8BBF\u95EE**\r
\r
### \u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**_\u6CE8\u610F\uFF1A\u9664\u4E86\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 3306 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 3306 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09_**\r
\r
**1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B**\r
\r
**2. \u4E0B\u8F7D mysql \u5E76\u542F\u52A8\u670D\u52A1**\r
(1)\u4F7F\u7528 wget \u4E0B\u8F7D mysql \u6E90\u5305\u5E76\u7528 yum \u5B89\u88C5\uFF1A\r
\`\u4E0B\u8F7D\uFF1A wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm\`\r
\`\u5B89\u88C5\uFF1A yum -y localinstall mysql57-community-release-el7-11.noarch.rpm\`\r
(3)\u5728\u7EBF\u5B89\u88C5 Mysql\uFF1A\`yum -y install mysql-community-server\`\r
(4)\u542F\u52A8\u670D\u52A1\uFF1A\`systemctl start mysqld\`\r
(5)\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\uFF1A\r
\`systemctl enable mysqld\`\r
\`systemctl deaemon-reload\`\r
\r
**3. \u4FEE\u6539\u672C\u5730\u767B\u5F55\u5BC6\u7801**\r
(1) \u901A\u8FC7\`vi /var/log/mysqld.log\`\u8FDB\u5165\u8BE5\u6587\u4EF6\u4E2D\u627E\u5230\u6807\u9EC4\u8FD9\u6BB5\uFF0C\u800C\u7EA2\u8272\u5708\u4FBF\u662F\u9ED8\u8BA4\u767B\u9646\u5BC6\u7801\uFF1A\r
![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191227220213561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70)\r
(2)\u901A\u8FC7\u4EE5\u4E0A\u5F97\u5230\u7684\u5BC6\u7801\u767B\u5F55\u547D\u4EE4\`mysql -u root -p\` \uFF0C\u5373\u53EF\u8FDB\u5165 mysql \u4E2D\u3002\u4E0B\u9762\u5219\u662F\u4FEE\u6539\u5BC6\u7801\uFF1A\r
\`mysql> alter user 'root'@'localhost' identified by 'Qq88888.';\`\r
\r
**4. \u8BBE\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF08\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF09\uFF0C\u5F00\u542F\u8FDC\u7A0B\u767B\u5F55\u524D\u63D0\u8981\u4FDD\u8BC1\u5F00\u542F\u9632\u706B\u5899\uFF0C\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A**\r
(1)\u5141\u8BB8\u8BE5\u8D26\u53F7\u80FD\u591F\u88AB\u8FDC\u7A0B\u767B\u5F55\uFF1A \` mysql> grant all privileges on *.* to 'root'@'%' identified by 'Qq88888.' with grant option;\`\r
(2)\u67E5\u770B\u9632\u706B\u5899\u662F\u5426\u5F00\u542F\uFF1A \`firewall-cmd --state\`\r
(3)\u5F00\u542F\u9632\u706B\u5899\uFF1A \`systemctl start firewalld.service\` - \u5173\u95ED\u9632\u706B\u5899: \`systemctl stop firewalld.service\` - \u7981\u7528\u9632\u706B\u5899: \`systemctl disable firewalld.service\` - \u67E5\u770B\u9632\u706B\u5899\u76D1\u542C\u7684\u7AEF\u53E3: \`firewall-cmd --list-port\`\r
(4)\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A\`firewall-cmd --zone=public --add-port=3306/tcp --permanent\`\r
(5)\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\`\r
\r
**5. \u914D\u7F6E my.cnf**\r
\u8FDB\u5165\`vi /etc/my.cnf\`\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u672C\u6587\u8FDB\u884C\u7F16\u7801\u8BBE\u7F6E\uFF1A\r
\r
\`\`\`/\r
character_set_server=utf8\r
init_connect='SET NAMES utf8'\r
\`\`\`\r
\r
**6. \u91CD\u542F\u52A8 mysql**\r
\`systemctl restart mysqld\`\r
\r
### \u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**_\u6CE8\u610F\uFF1A\u540C\u4E0A\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 6379 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09_**\r
\r
**1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B**\r
\r
**2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D redis\uFF1A**\`wget http://download.redis.io/releases/redis-4.0.8.tar.gz\`\r
\r
**3. \u89E3\u538B\u3001\u7F16\u8BD1\u548C\u5B89\u88C5\uFF1A**\r
(1) \u89E3\u538B\uFF1A\`tar -zxvf redis-4.0.8.tar.gz\`\r
(2) \u5B8C\u6210\u540E\u8FDB\u5165\u89E3\u538B\u7684 redis-4.0.8 \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 make \u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF1A\`make\`\r
(3) \u5B89\u88C5\uFF1A\`make install\`\r
\r
**4. \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8**\r
(1) \u521B\u5EFA\u65B0\u76EE\u5F55\uFF1A\`mkdir -p /usr/local/redis\`\r
(2) \u5C06/usr/local/src/redis-4.0.8/src \u76EE\u5F55\u4E0B\u7684 redis-server\u3001redis-cli \u548C/usr/local/src/redis-4.0.8 \u76EE\u5F55\u4E0B\u7684 redis.conf \u6587\u4EF6\u62F7\u8D1D\u5230\u521B\u5EFA\u7684\u76EE\u5F55\u4E2D\uFF1A\r
\`cp redis-server /usr/local/redis\`\r
\`cp redis-cli /usr/local/redis\`\r
\`cp ../redis.conf /usr/local/redis\`\r
(3)\u5F00\u542F\u540E\u53F0\u8FD0\u884C\uFF0C\u4FEE\u6539\u62F7\u8D1D\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF1A\`vi /usr/local/redis/redis.conf\`\r
\r
-   \u5C06\u8424\u5149\u5B57\u4E0A\u7684\u201Cno\u201D\u8BE5\u4E3A\u201Cyes\u201D\uFF1A ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/2019122819072660.png)\r
\r
(4) \u521B\u5EFA\u670D\u52A1\u6587\u4EF6 redis.service\uFF1A\`vi /usr/lib/systemd/system/redis.service\`\r
\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u4E2D\u7684\u8DEF\u5F84\u4EE5\u5B9E\u9645\u5404\u5F02\uFF09\uFF1A\r
\r
\`\`\`/\r
	[Unit]\r
	Description=The redis-server Process Manager\r
	After=syslog.target network.target\r
\r
	[Service]\r
	Type=simple\r
	PIDFile=/var/run/redis_6379.pid\r
	ExecStart=/usr/local/redis/redis-server /usr/local/redis/redis.conf\r
	ExecReload=/bin/kill -USR2 $MAINPID\r
	ExecStop=/bin/kill -SIGINT $MAINPID\r
\r
	[Install]\r
	WantedBy=multi-user.target\r
\`\`\`\r
\r
**5. \u5F00\u542F redis \u8FDC\u7A0B\u8BBF\u95EE\uFF08\u53EF\u5FFD\u7565\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF09\uFF1A**\r
(1) \u4FEE\u6539 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A\r
\r
-   \u8BBE\u7F6E\u53EF\u8BBF\u95EE\u7684 ip\uFF1A\u4FEE\u6539\u8424\u5149\u5B57\u7684\u6587\u672C\u4E2D\u753B\u5708\u7684 ip \u5730\u5740\u8BA9\u5176\u4ED6\u53EF\u4EE5\u8BBF\u95EE\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228214121699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70)\r
-   \u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F\uFF1A\u5C06\u8424\u5149\u5B57\u6587\u672C\u7684\u201Cyes\u201D\u4FEE\u6539\u4E3A\u201Cno\u201D\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228211505882.png)\r
-   \u8BBE\u7F6E\u5BC6\u7801\uFF1A\u6DFB\u52A0\u8424\u5149\u5B57\u7684\u6587\u672C\u6240\u793A\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228205849892.png)\r
\r
(2) \u4FEE\u6539\u5B8C\u540E\u5E94\u5728 redis \u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u547D\u4EE4\`redis-server redis.conf\`\u6765\u68C0\u67E5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u4EA6\u53EF\u68C0\u67E5\u662F\u5426\u51FA\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u907F\u514D\u540E\u7EED\u4E0D\u5FC5\u8981\u7684\u95EE\u9898\r
(3) \u56E0\u4E3A\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u6240\u4EE5\u52BF\u5FC5\u8981\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u7684\u76D1\u542C\uFF1A - \u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A\`firewall-cmd --zone=public --add-port=6379/tcp --permanent\` - \u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\` - \u67E5\u770B\u9632\u706B\u5899\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --list-ports\`\r
**6. \u5F00\u542F\u670D\u52A1\u548C\u5F00\u673A\u81EA\u542F\u52A8\uFF1A**\r
(1) \u5237\u65B0\u670D\u52A1\u914D\u7F6E\uFF1A\`systemctl daemon-reload\`\r
(2) \u5F00\u542F redis: \`systemctl start redis\`\r
(3) \u52A0\u5165\u5F00\u673A\u542F\u52A8\uFF1A\`systemctl enable redis\`\r
\r
### \u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**1. \u5B89\u88C5 gcc\uFF08gcc \u7528\u4E8E\u7F16\u8BD1\u63A5\u4E0B\u6765\u4E0B\u8F7D\u7684 nginx \u6E90\u7801\uFF09**\r
\u4F7F\u7528\`gcc -v\`\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u8BE5\u547D\u4EE4\uFF0C\u5982\u672A\u5B89\u88C5\u5219\u6267\u884C\`yum install gcc-c++\`\r
\r
**2. \u5B89\u88C5 pcre \u548C pcre-devel \u4F9D\u8D56\uFF08nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002\uFF09**\r
\`yum install -y pcre pcre-devel\`\r
\r
**3. \u5B89\u88C5 zlib zlib-devel \u4F9D\u8D56\uFF08zlib \u63D0\u4F9B\u4E86\u5F88\u591A\u538B\u7F29\u548C\u89E3\u65B9\u5F0F\uFF0Cnginx \u9700\u8981 zlib \u5BF9 http \u8FDB\u884C gzip\uFF09**\r
\`yum install -y zlib zlib-devel\`\r
\r
**4. \u5B89\u88C5 openssl openssl-devel\uFF08openssl \u662F\u4E00\u4E2A\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0Cnginx \u8981\u652F\u6301 https \u5C31\u9700\u8981\u5B83\uFF09**\r
\`yum install -y openssl openssl-devel\`\r
\r
**5. \u4E0B\u8F7D nginx \u5E76\u89E3\u538B**\r
\`wget http://nginx.org/download/nginx-1.9.9.tar.gz\`\r
\`tar -zxvf nginx-1.9.9\`\r
\r
**6. \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FFD\u52A0\u5B89\u88C5 ssl \u6A21\u5757**\r
\`./configure --with-http_ssl_module\`\r
\r
**7. \u4F7F\u7528 make \u7F16\u8BD1\u548C\u5B89\u88C5**\r
\`make && make install\`\r
\r
\`\`\`\r
\u6CE8\u610F\uFF1A\u5982\u679C\u5B89\u88C5\u540E\u51FA\u73B0\u4E00\u4E2AMake[1]: Leaving directory \`/usr/local/nginx-1.9.9\`\r
\u5E76\u4E14\u5728nginx-1.9.9\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u5DF2\u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3Anginx\u7684\u6587\u4EF6\u5939\u5373\u53EF\u5FFD\u7565\u8BE5\u9519\u8BEF~\r
\`\`\`\r
\r
**8. \u67E5\u770B nginx \u662F\u5426\u5B89\u88C5\u6210\u529F**\r
(1). \u8FDB\u5165 nginx \u6587\u4EF6\u4E0B\u7684 sbin \u76EE\u5F55\u8F93\u5165\`./nginx -v\`\u67E5\u770B\u7248\u672C\u53F7\r
(2).\u4F7F\u7528\`netstat -ntpl | grep nginx\`\u67E5\u770B\u5F53\u524D nginx \u5360\u7528\u7684\u7AEF\u53E3\u53F7\r
(3). \u4F7F\u7528\`wget 127.0.0.1\`\u6D4B\u8BD5\u8FD4\u56DE\u8868\u793A\u662F\u5426\u6B63\u5E38\r
(4). \u4F7F\u7528\`curl 127.0.0.1\`\u6D4B\u8BD5\u8FD4\u56DE\u9875\u9762\u7684\u503C\u662F\u5426\u6B63\u5E38\r
\r
**9. \u914D\u7F6E nginx \u5F00\u673A\u81EA\u542F\u52A8**\r
(1). \u8FDB\u5165\u76EE\u5F55\`cd /usr/lib/systemd/system\`\r
(2). \u521B\u5EFA nginx.service \u670D\u52A1\u6587\u4EF6\`vi nginx.service\`\r
(3). \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A\r
\r
\`\`\`/\r
[Unit]\r
Description=nginx\r
After=network.target\r
\r
[Service]\r
Type=forking\r
ExecStart=/usr/local/nginx/sbin/nginx\r
ExecReload=/usr/local/nginx/sbin/nginx reload\r
ExecStop=/usr/local/nginx/sbin/nginx quit\r
PrivateTmp=true\r
\r
[Install]\r
WantedBy=multi-user.target\r
\`\`\`\r
\r
(4). \u5F00\u673A\u81EA\u542F\u52A8\uFF1A\`systemctl enable nginx.service\`\r
(5). nginx \u670D\u52A1\u7684\u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F\uFF1A\r
\u542F\u52A8\uFF1A\`systemctl start nginx.service\`\r
\u5173\u95ED\uFF1A\`systemctl stop nginx.service\`\r
\u91CD\u542F\uFF1A\`systemctl restart nginx.service\`\r
\r
**10. \u9632\u706B\u5899\u5F00\u542F http\u3001https \u670D\u52A1\u4EE5\u53CA\u7AEF\u53E3\u76D1\u542C**\r
\u5F00\u542F http \u670D\u52A1\uFF1A\`firewall-cmd --zone=public --add-service=http --permanent\`\r
\u5F00\u542F 80 \u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --add-port=80/tcp --permanent\`\r
\u5F00\u542F https \u670D\u52A1\uFF1A\`firewall-cmd --zone=public --add-service=https --permanent\`\r
\u5F00\u542F 443 \u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --add-port=443/tcp --permanent\`\r
\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\`\r
\r
**11. nginx + \u4E00\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A**\r
(1). \u4FEE\u6539\u5B89\u88C5\u540E nginx \u6587\u4EF6\u7684 conf \u76EE\u5F55\u4E0B\u7684 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1A \`vi nginx.conf\`\r
(2). \u627E\u5230\u5E26\u6709# HTTPS Server \u7684\u5B57\u6837\uFF0C\u5C06\u5176\u4E0B\u6587\u672C\u6309\u7167\u4EE5\u4E0B\u6587\u672C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A\r
\r
\`\`\`\\\r
    # HTTPS Server\r
    #\r
    server {\r
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443\r
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D\r
\r
        ssl_certificate      cert/www/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem\r
        ssl_certificate_key  cert/www/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key\r
        ssl   on;\r
\r
        ssl_session_cache    shared:SSL:1m;\r
        ssl_session_timeout  5m;\r
\r
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\r
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\r
        ssl_prefer_server_ciphers  on;\r
\r
        location / {\r
            proxy_pass   http://127.0.0.1:8080; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
            proxy_set_header Host                               $http_addr;\r
            proxy_set_header X-Real-IP                        $remote_addr;\r
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
            root   html;\r
            index  index.html index.htm;\r
        }\r
\r
		# \u914D\u7F6E\u53E6\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528443\u7AEF\u53E3\r
		# location /test {\r
        #    proxy_pass   http://127.0.0.1:9090/test; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
        #    proxy_set_header Host                               $http_addr;\r
        #    proxy_set_header X-Real-IP                        $remote_addr;\r
        #    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
        #    root   html;\r
        #    index  index.html index.htm;\r
		# }\r
    }\r
\`\`\`\r
\r
(3). \u5C06 http \u8BF7\u6C42\u91CD\u5B9A\u5411\u4E3A https \u8BF7\u6C42\uFF0C\u5728\u539F nginx.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u4E3A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF1A\r
\r
\`\`\`/\r
	server {\r
        listen       80;\r
        server_name  www.shnice.club; #\u586B\u5199\u8BBF\u95EE\u7684\u57DF\u540D\r
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps\r
		.....\r
\`\`\`\r
\r
(4). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -t\`\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E\r
(5). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -s reload\`\u52A0\u8F7D\u914D\u7F6E\r
\r
**12\u3001nginx + \u4E8C\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A**\r
(1). \u5728 nginx \u6587\u4EF6\u5939\u4E0B\u4E0B\u521B\u5EFA vhosts \u76EE\u5F55\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A\\*.conf \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B\uFF1A\r
\r
\`\`\`/\r
# HTTP Server\r
#\r
server {\r
        listen 80;\r
        server_name localhost; #\u586B\u5199\u4F60\u8BBF\u95EE\u7684\u57DF\u540D\r
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps\r
\r
        location / {\r
            index index.html index.htm;\r
        }\r
}\r
\r
# HTTPS Server\r
#\r
server {\r
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443\r
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D\r
\r
        ssl_certificate      cert/abc/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem\r
        ssl_certificate_key  cert/abc/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key\r
        ssl   on;\r
\r
        ssl_session_cache    shared:SSL:1m;\r
        ssl_session_timeout  5m;\r
\r
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\r
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\r
        ssl_prefer_server_ciphers  on;\r
\r
        location /abc {\r
            proxy_pass   http://127.0.0.1:8080/abc; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
            proxy_set_header Host                               $http_addr;\r
            proxy_set_header X-Real-IP                        $remote_addr;\r
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
            root   html;\r
            index  index.html index.htm;\r
        }\r
}\r
\`\`\`\r
\r
(2). \u5BFC\u5165\u4E8C\u7EA7\u57DF\u540D\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u5230 nginx.conf \u4E2D\uFF1A\r
\u8FDB\u5165 conf \u76EE\u5F55\u4E0B\uFF0C\u5728 nginx.conf \u6587\u4EF6\u4E2D\u7684 http{}\u5305\u88F9\u4E2D\u5904\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A\r
\r
\`\`\`\\\r
	include /usr/local/nginx/vhosts/*;\r
\`\`\`\r
\r
(3). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -t\`\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E\r
(4). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -s reload\`\u52A0\u8F7D\u914D\u7F6E\r
`,contentRendered:`<!-- more -->
<h3 id="\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</h3>
<p><strong>1. \u521B\u5EFA jdk \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09</strong>
<code v-pre>mkdir -p usr/local/src</code>
<strong>2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D jdk \u5305</strong>
<code v-pre>wget --no-check-certificate --no-cookies --header &quot;Cookie: oraclelicense=accept-securebackup-cookie&quot; http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz</code>
<strong>3. \u89E3\u538B\uFF08\u5982\u4E0B\u64CD\u4F5C\u662F\u5DF2\u7ECF\u8DF3\u5230\u6307\u5B9A\u5B58\u653E jdk \u7684\u76EE\u5F55\u4F4D\u7F6E\uFF09</strong>
<code v-pre>tar -zxvf jdk-8u131-linux-x64.tar.gz</code>
<strong>4. \u91CD\u547D\u540D</strong>
<code v-pre>mv jdk1.8.0_131 jdk1.8</code>
<strong>5. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF</strong>
(1)\u8FDB\u5165\u7CFB\u7EDF\u6587\u4EF6\u547D\u4EE4\u5982\u4E0B\uFF1A<code v-pre>vi /etc/profile</code>
(2)\u6309\u201Cshift+g\u201D\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u6587\u672C\u672B\u5C3E\uFF0C\u518D\u6309\u201Ci\u201D\u6309\u952E\u8FDB\u884C\u7F16\u8F91\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6587\u672C(\u5199\u5B8C\u540E\uFF0C\u6309 ESC \u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\u5E76\u8F93\u5165\u201C:x\u201D\u4EE5\u4FDD\u5B58\u5E76\u9000\u51FA)\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>export JAVA_HOME=/usr/local/src/jdk1.8
export PATH=$PATH:$JAVA_HOME/bin
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. \u8BA9\u914D\u7F6E\u6587\u4EF6\u751F\u6548\uFF1A</strong><code v-pre>source /etc/profile</code>
<strong>7. \u68C0\u67E5 jdk \u662F\u5426\u914D\u7F6E\u6210\u529F\uFF1A</strong> <code v-pre>java -version</code></p>
<h3 id="\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981" aria-hidden="true">#</a> \u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09</h3>
<p><strong>1. \u521B\u5EFA tomcat \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09</strong></p>
<p><strong>2. \u4F7F\u7528 wget \u4E0B\u8F7D tomcat</strong></p>
<p><strong>3. \u89E3\u538B</strong></p>
<p><strong>4. \u542F\u52A8 tomcat</strong></p>
<p><strong>5. \u4FEE\u6539 tomcat \u7AEF\u53E3</strong></p>
<p><strong>6. \u6D4B\u8BD5\u8BBF\u95EE</strong></p>
<h3 id="\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong><em>\u6CE8\u610F\uFF1A\u9664\u4E86\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 3306 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 3306 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09</em></strong></p>
<p><strong>1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B</strong></p>
<p><strong>2. \u4E0B\u8F7D mysql \u5E76\u542F\u52A8\u670D\u52A1</strong>
(1)\u4F7F\u7528 wget \u4E0B\u8F7D mysql \u6E90\u5305\u5E76\u7528 yum \u5B89\u88C5\uFF1A
<code v-pre>\u4E0B\u8F7D\uFF1A wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm</code>
<code v-pre>\u5B89\u88C5\uFF1A yum -y localinstall mysql57-community-release-el7-11.noarch.rpm</code>
(3)\u5728\u7EBF\u5B89\u88C5 Mysql\uFF1A<code v-pre>yum -y install mysql-community-server</code>
(4)\u542F\u52A8\u670D\u52A1\uFF1A<code v-pre>systemctl start mysqld</code>
(5)\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\uFF1A
<code v-pre>systemctl enable mysqld</code>
<code v-pre>systemctl deaemon-reload</code></p>
<p><strong>3. \u4FEE\u6539\u672C\u5730\u767B\u5F55\u5BC6\u7801</strong>
(1) \u901A\u8FC7<code v-pre>vi /var/log/mysqld.log</code>\u8FDB\u5165\u8BE5\u6587\u4EF6\u4E2D\u627E\u5230\u6807\u9EC4\u8FD9\u6BB5\uFF0C\u800C\u7EA2\u8272\u5708\u4FBF\u662F\u9ED8\u8BA4\u767B\u9646\u5BC6\u7801\uFF1A
<img src="https://img-blog.csdnimg.cn/20191227220213561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0">
(2)\u901A\u8FC7\u4EE5\u4E0A\u5F97\u5230\u7684\u5BC6\u7801\u767B\u5F55\u547D\u4EE4<code v-pre>mysql -u root -p</code> \uFF0C\u5373\u53EF\u8FDB\u5165 mysql \u4E2D\u3002\u4E0B\u9762\u5219\u662F\u4FEE\u6539\u5BC6\u7801\uFF1A
<code v-pre>mysql&gt; alter user 'root'@'localhost' identified by 'Qq88888.';</code></p>
<p><strong>4. \u8BBE\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF08\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF09\uFF0C\u5F00\u542F\u8FDC\u7A0B\u767B\u5F55\u524D\u63D0\u8981\u4FDD\u8BC1\u5F00\u542F\u9632\u706B\u5899\uFF0C\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A</strong>
(1)\u5141\u8BB8\u8BE5\u8D26\u53F7\u80FD\u591F\u88AB\u8FDC\u7A0B\u767B\u5F55\uFF1A <code v-pre> mysql&gt; grant all privileges on *.* to 'root'@'%' identified by 'Qq88888.' with grant option;</code>
(2)\u67E5\u770B\u9632\u706B\u5899\u662F\u5426\u5F00\u542F\uFF1A <code v-pre>firewall-cmd --state</code>
(3)\u5F00\u542F\u9632\u706B\u5899\uFF1A <code v-pre>systemctl start firewalld.service</code> - \u5173\u95ED\u9632\u706B\u5899: <code v-pre>systemctl stop firewalld.service</code> - \u7981\u7528\u9632\u706B\u5899: <code v-pre>systemctl disable firewalld.service</code> - \u67E5\u770B\u9632\u706B\u5899\u76D1\u542C\u7684\u7AEF\u53E3: <code v-pre>firewall-cmd --list-port</code>
(4)\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=3306/tcp --permanent</code>
(5)\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code></p>
<p><strong>5. \u914D\u7F6E my.cnf</strong>
\u8FDB\u5165<code v-pre>vi /etc/my.cnf</code>\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u672C\u6587\u8FDB\u884C\u7F16\u7801\u8BBE\u7F6E\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>character_set_server=utf8
init_connect='SET NAMES utf8'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. \u91CD\u542F\u52A8 mysql</strong>
<code v-pre>systemctl restart mysqld</code></p>
<h3 id="\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong><em>\u6CE8\u610F\uFF1A\u540C\u4E0A\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 6379 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09</em></strong></p>
<p><strong>1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B</strong></p>
<p><strong>2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D redis\uFF1A</strong><code v-pre>wget http://download.redis.io/releases/redis-4.0.8.tar.gz</code></p>
<p><strong>3. \u89E3\u538B\u3001\u7F16\u8BD1\u548C\u5B89\u88C5\uFF1A</strong>
(1) \u89E3\u538B\uFF1A<code v-pre>tar -zxvf redis-4.0.8.tar.gz</code>
(2) \u5B8C\u6210\u540E\u8FDB\u5165\u89E3\u538B\u7684 redis-4.0.8 \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 make \u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF1A<code v-pre>make</code>
(3) \u5B89\u88C5\uFF1A<code v-pre>make install</code></p>
<p><strong>4. \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8</strong>
(1) \u521B\u5EFA\u65B0\u76EE\u5F55\uFF1A<code v-pre>mkdir -p /usr/local/redis</code>
(2) \u5C06/usr/local/src/redis-4.0.8/src \u76EE\u5F55\u4E0B\u7684 redis-server\u3001redis-cli \u548C/usr/local/src/redis-4.0.8 \u76EE\u5F55\u4E0B\u7684 redis.conf \u6587\u4EF6\u62F7\u8D1D\u5230\u521B\u5EFA\u7684\u76EE\u5F55\u4E2D\uFF1A
<code v-pre>cp redis-server /usr/local/redis</code>
<code v-pre>cp redis-cli /usr/local/redis</code>
<code v-pre>cp ../redis.conf /usr/local/redis</code>
(3)\u5F00\u542F\u540E\u53F0\u8FD0\u884C\uFF0C\u4FEE\u6539\u62F7\u8D1D\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF1A<code v-pre>vi /usr/local/redis/redis.conf</code></p>
<ul>
<li>\u5C06\u8424\u5149\u5B57\u4E0A\u7684\u201Cno\u201D\u8BE5\u4E3A\u201Cyes\u201D\uFF1A <img src="https://img-blog.csdnimg.cn/2019122819072660.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
</ul>
<p>(4) \u521B\u5EFA\u670D\u52A1\u6587\u4EF6 redis.service\uFF1A<code v-pre>vi /usr/lib/systemd/system/redis.service</code>
\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u4E2D\u7684\u8DEF\u5F84\u4EE5\u5B9E\u9645\u5404\u5F02\uFF09\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>	[Unit]
	Description=The redis-server Process Manager
	After=syslog.target network.target

	[Service]
	Type=simple
	PIDFile=/var/run/redis_6379.pid
	ExecStart=/usr/local/redis/redis-server /usr/local/redis/redis.conf
	ExecReload=/bin/kill -USR2 $MAINPID
	ExecStop=/bin/kill -SIGINT $MAINPID

	[Install]
	WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. \u5F00\u542F redis \u8FDC\u7A0B\u8BBF\u95EE\uFF08\u53EF\u5FFD\u7565\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF09\uFF1A</strong>
(1) \u4FEE\u6539 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A</p>
<ul>
<li>\u8BBE\u7F6E\u53EF\u8BBF\u95EE\u7684 ip\uFF1A\u4FEE\u6539\u8424\u5149\u5B57\u7684\u6587\u672C\u4E2D\u753B\u5708\u7684 ip \u5730\u5740\u8BA9\u5176\u4ED6\u53EF\u4EE5\u8BBF\u95EE
<img src="https://img-blog.csdnimg.cn/20191228214121699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
<li>\u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F\uFF1A\u5C06\u8424\u5149\u5B57\u6587\u672C\u7684\u201Cyes\u201D\u4FEE\u6539\u4E3A\u201Cno\u201D
<img src="https://img-blog.csdnimg.cn/20191228211505882.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
<li>\u8BBE\u7F6E\u5BC6\u7801\uFF1A\u6DFB\u52A0\u8424\u5149\u5B57\u7684\u6587\u672C\u6240\u793A
<img src="https://img-blog.csdnimg.cn/20191228205849892.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
</ul>
<p>(2) \u4FEE\u6539\u5B8C\u540E\u5E94\u5728 redis \u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u547D\u4EE4<code v-pre>redis-server redis.conf</code>\u6765\u68C0\u67E5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u4EA6\u53EF\u68C0\u67E5\u662F\u5426\u51FA\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u907F\u514D\u540E\u7EED\u4E0D\u5FC5\u8981\u7684\u95EE\u9898
(3) \u56E0\u4E3A\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u6240\u4EE5\u52BF\u5FC5\u8981\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u7684\u76D1\u542C\uFF1A - \u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=6379/tcp --permanent</code> - \u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code> - \u67E5\u770B\u9632\u706B\u5899\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --list-ports</code>
<strong>6. \u5F00\u542F\u670D\u52A1\u548C\u5F00\u673A\u81EA\u542F\u52A8\uFF1A</strong>
(1) \u5237\u65B0\u670D\u52A1\u914D\u7F6E\uFF1A<code v-pre>systemctl daemon-reload</code>
(2) \u5F00\u542F redis: <code v-pre>systemctl start redis</code>
(3) \u52A0\u5165\u5F00\u673A\u542F\u52A8\uFF1A<code v-pre>systemctl enable redis</code></p>
<h3 id="\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong>1. \u5B89\u88C5 gcc\uFF08gcc \u7528\u4E8E\u7F16\u8BD1\u63A5\u4E0B\u6765\u4E0B\u8F7D\u7684 nginx \u6E90\u7801\uFF09</strong>
\u4F7F\u7528<code v-pre>gcc -v</code>\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u8BE5\u547D\u4EE4\uFF0C\u5982\u672A\u5B89\u88C5\u5219\u6267\u884C<code v-pre>yum install gcc-c++</code></p>
<p><strong>2. \u5B89\u88C5 pcre \u548C pcre-devel \u4F9D\u8D56\uFF08nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002\uFF09</strong>
<code v-pre>yum install -y pcre pcre-devel</code></p>
<p><strong>3. \u5B89\u88C5 zlib zlib-devel \u4F9D\u8D56\uFF08zlib \u63D0\u4F9B\u4E86\u5F88\u591A\u538B\u7F29\u548C\u89E3\u65B9\u5F0F\uFF0Cnginx \u9700\u8981 zlib \u5BF9 http \u8FDB\u884C gzip\uFF09</strong>
<code v-pre>yum install -y zlib zlib-devel</code></p>
<p><strong>4. \u5B89\u88C5 openssl openssl-devel\uFF08openssl \u662F\u4E00\u4E2A\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0Cnginx \u8981\u652F\u6301 https \u5C31\u9700\u8981\u5B83\uFF09</strong>
<code v-pre>yum install -y openssl openssl-devel</code></p>
<p><strong>5. \u4E0B\u8F7D nginx \u5E76\u89E3\u538B</strong>
<code v-pre>wget http://nginx.org/download/nginx-1.9.9.tar.gz</code>
<code v-pre>tar -zxvf nginx-1.9.9</code></p>
<p><strong>6. \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FFD\u52A0\u5B89\u88C5 ssl \u6A21\u5757</strong>
<code v-pre>./configure --with-http_ssl_module</code></p>
<p><strong>7. \u4F7F\u7528 make \u7F16\u8BD1\u548C\u5B89\u88C5</strong>
<code v-pre>make &amp;&amp; make install</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>\u6CE8\u610F\uFF1A\u5982\u679C\u5B89\u88C5\u540E\u51FA\u73B0\u4E00\u4E2AMake[1]: Leaving directory \`/usr/local/nginx-1.9.9\`
\u5E76\u4E14\u5728nginx-1.9.9\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u5DF2\u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3Anginx\u7684\u6587\u4EF6\u5939\u5373\u53EF\u5FFD\u7565\u8BE5\u9519\u8BEF~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>8. \u67E5\u770B nginx \u662F\u5426\u5B89\u88C5\u6210\u529F</strong>
(1). \u8FDB\u5165 nginx \u6587\u4EF6\u4E0B\u7684 sbin \u76EE\u5F55\u8F93\u5165<code v-pre>./nginx -v</code>\u67E5\u770B\u7248\u672C\u53F7
(2).\u4F7F\u7528<code v-pre>netstat -ntpl | grep nginx</code>\u67E5\u770B\u5F53\u524D nginx \u5360\u7528\u7684\u7AEF\u53E3\u53F7
(3). \u4F7F\u7528<code v-pre>wget 127.0.0.1</code>\u6D4B\u8BD5\u8FD4\u56DE\u8868\u793A\u662F\u5426\u6B63\u5E38
(4). \u4F7F\u7528<code v-pre>curl 127.0.0.1</code>\u6D4B\u8BD5\u8FD4\u56DE\u9875\u9762\u7684\u503C\u662F\u5426\u6B63\u5E38</p>
<p><strong>9. \u914D\u7F6E nginx \u5F00\u673A\u81EA\u542F\u52A8</strong>
(1). \u8FDB\u5165\u76EE\u5F55<code v-pre>cd /usr/lib/systemd/system</code>
(2). \u521B\u5EFA nginx.service \u670D\u52A1\u6587\u4EF6<code v-pre>vi nginx.service</code>
(3). \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>[Unit]
Description=nginx
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx reload
ExecStop=/usr/local/nginx/sbin/nginx quit
PrivateTmp=true

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4). \u5F00\u673A\u81EA\u542F\u52A8\uFF1A<code v-pre>systemctl enable nginx.service</code>
(5). nginx \u670D\u52A1\u7684\u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F\uFF1A
\u542F\u52A8\uFF1A<code v-pre>systemctl start nginx.service</code>
\u5173\u95ED\uFF1A<code v-pre>systemctl stop nginx.service</code>
\u91CD\u542F\uFF1A<code v-pre>systemctl restart nginx.service</code></p>
<p><strong>10. \u9632\u706B\u5899\u5F00\u542F http\u3001https \u670D\u52A1\u4EE5\u53CA\u7AEF\u53E3\u76D1\u542C</strong>
\u5F00\u542F http \u670D\u52A1\uFF1A<code v-pre>firewall-cmd --zone=public --add-service=http --permanent</code>
\u5F00\u542F 80 \u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=80/tcp --permanent</code>
\u5F00\u542F https \u670D\u52A1\uFF1A<code v-pre>firewall-cmd --zone=public --add-service=https --permanent</code>
\u5F00\u542F 443 \u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=443/tcp --permanent</code>
\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code></p>
<p><strong>11. nginx + \u4E00\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A</strong>
(1). \u4FEE\u6539\u5B89\u88C5\u540E nginx \u6587\u4EF6\u7684 conf \u76EE\u5F55\u4E0B\u7684 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1A <code v-pre>vi nginx.conf</code>
(2). \u627E\u5230\u5E26\u6709# HTTPS Server \u7684\u5B57\u6837\uFF0C\u5C06\u5176\u4E0B\u6587\u672C\u6309\u7167\u4EE5\u4E0B\u6587\u672C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A</p>
<div class="language-\\ ext-\\ line-numbers-mode"><pre v-pre class="language-\\"><code>    # HTTPS Server
    #
    server {
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D

        ssl_certificate      cert/www/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem
        ssl_certificate_key  cert/www/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key
        ssl   on;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

        location / {
            proxy_pass   http://127.0.0.1:8080; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
            proxy_set_header Host                               $http_addr;
            proxy_set_header X-Real-IP                        $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            root   html;
            index  index.html index.htm;
        }

		# \u914D\u7F6E\u53E6\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528443\u7AEF\u53E3
		# location /test {
        #    proxy_pass   http://127.0.0.1:9090/test; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
        #    proxy_set_header Host                               $http_addr;
        #    proxy_set_header X-Real-IP                        $remote_addr;
        #    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        #    root   html;
        #    index  index.html index.htm;
		# }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3). \u5C06 http \u8BF7\u6C42\u91CD\u5B9A\u5411\u4E3A https \u8BF7\u6C42\uFF0C\u5728\u539F nginx.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u4E3A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>	server {
        listen       80;
        server_name  www.shnice.club; #\u586B\u5199\u8BBF\u95EE\u7684\u57DF\u540D
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps
		.....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -t</code>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E
(5). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -s reload</code>\u52A0\u8F7D\u914D\u7F6E</p>
<p><strong>12\u3001nginx + \u4E8C\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A</strong>
(1). \u5728 nginx \u6587\u4EF6\u5939\u4E0B\u4E0B\u521B\u5EFA vhosts \u76EE\u5F55\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A*.conf \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code># HTTP Server
#
server {
        listen 80;
        server_name localhost; #\u586B\u5199\u4F60\u8BBF\u95EE\u7684\u57DF\u540D
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps

        location / {
            index index.html index.htm;
        }
}

# HTTPS Server
#
server {
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D

        ssl_certificate      cert/abc/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem
        ssl_certificate_key  cert/abc/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key
        ssl   on;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

        location /abc {
            proxy_pass   http://127.0.0.1:8080/abc; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
            proxy_set_header Host                               $http_addr;
            proxy_set_header X-Real-IP                        $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            root   html;
            index  index.html index.htm;
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2). \u5BFC\u5165\u4E8C\u7EA7\u57DF\u540D\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u5230 nginx.conf \u4E2D\uFF1A
\u8FDB\u5165 conf \u76EE\u5F55\u4E0B\uFF0C\u5728 nginx.conf \u6587\u4EF6\u4E2D\u7684 http{}\u5305\u88F9\u4E2D\u5904\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="language-\\ ext-\\ line-numbers-mode"><pre v-pre class="language-\\"><code>	include /usr/local/nginx/vhosts/*;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -t</code>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E
(4). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -s reload</code>\u52A0\u8F7D\u914D\u7F6E</p>
`,date:"2022-07-12",deps:[],hoistedTags:[],links:[],pathInferred:"/20220711/2.html",pathLocale:"/",permalink:null,routeMeta:{title:"Centos7\u73AF\u5883\u642D\u5EFA"},slug:"2",filePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/20220711/2.md",filePathRelative:"20220711/2.md",componentFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/2.html.vue",componentFilePathRelative:"pages/20220711/2.html.vue",componentFileChunkName:"v-e5cc5690",dataFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/2.html.js",dataFilePathRelative:"pages/20220711/2.html.js",dataFileChunkName:"v-e5cc5690",htmlFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/dist/20220711/2.html",htmlFilePathRelative:"20220711/2.html"}],length:1,label:"java"},mysql:{pages:[{data:{key:"v-e5cc5690",path:"/20220711/2.html",title:"Centos7\u73AF\u5883\u642D\u5EFA",lang:"zh-CN",frontmatter:{title:"Centos7\u73AF\u5883\u642D\u5EFA",date:"2022-07-12 17:55:44",sidebar:"auto",categories:["Linux"],tags:["java","mysql","redis"],publish:!0},excerpt:"",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],git:{},filePathRelative:"20220711/2.md"},key:"v-e5cc5690",path:"/20220711/2.html",title:"Centos7\u73AF\u5883\u642D\u5EFA",lang:"zh-CN",frontmatter:{title:"Centos7\u73AF\u5883\u642D\u5EFA",date:"2022-07-12 17:55:44",sidebar:"auto",categories:["Linux"],tags:["java","mysql","redis"],publish:!0},excerpt:"",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],content:`\r
<!-- more -->\r
\r
### \u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\r
\r
**1. \u521B\u5EFA jdk \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09**\r
\`mkdir -p usr/local/src\`\r
**2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D jdk \u5305**\r
\`wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz\`\r
**3. \u89E3\u538B\uFF08\u5982\u4E0B\u64CD\u4F5C\u662F\u5DF2\u7ECF\u8DF3\u5230\u6307\u5B9A\u5B58\u653E jdk \u7684\u76EE\u5F55\u4F4D\u7F6E\uFF09**\r
\`tar -zxvf jdk-8u131-linux-x64.tar.gz\`\r
**4. \u91CD\u547D\u540D**\r
\`mv jdk1.8.0_131 jdk1.8\`\r
**5. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF**\r
(1)\u8FDB\u5165\u7CFB\u7EDF\u6587\u4EF6\u547D\u4EE4\u5982\u4E0B\uFF1A\`vi /etc/profile\`\r
(2)\u6309\u201Cshift+g\u201D\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u6587\u672C\u672B\u5C3E\uFF0C\u518D\u6309\u201Ci\u201D\u6309\u952E\u8FDB\u884C\u7F16\u8F91\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6587\u672C(\u5199\u5B8C\u540E\uFF0C\u6309 ESC \u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\u5E76\u8F93\u5165\u201C:x\u201D\u4EE5\u4FDD\u5B58\u5E76\u9000\u51FA)\uFF1A\r
\r
\`\`\`/\r
export JAVA_HOME=/usr/local/src/jdk1.8\r
export PATH=$PATH:$JAVA_HOME/bin\r
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar\r
\`\`\`\r
\r
**6. \u8BA9\u914D\u7F6E\u6587\u4EF6\u751F\u6548\uFF1A**\`source /etc/profile\`\r
**7. \u68C0\u67E5 jdk \u662F\u5426\u914D\u7F6E\u6210\u529F\uFF1A** \`java -version\`\r
\r
### \u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09\r
\r
**1. \u521B\u5EFA tomcat \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09**\r
\r
**2. \u4F7F\u7528 wget \u4E0B\u8F7D tomcat**\r
\r
**3. \u89E3\u538B**\r
\r
**4. \u542F\u52A8 tomcat**\r
\r
**5. \u4FEE\u6539 tomcat \u7AEF\u53E3**\r
\r
**6. \u6D4B\u8BD5\u8BBF\u95EE**\r
\r
### \u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**_\u6CE8\u610F\uFF1A\u9664\u4E86\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 3306 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 3306 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09_**\r
\r
**1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B**\r
\r
**2. \u4E0B\u8F7D mysql \u5E76\u542F\u52A8\u670D\u52A1**\r
(1)\u4F7F\u7528 wget \u4E0B\u8F7D mysql \u6E90\u5305\u5E76\u7528 yum \u5B89\u88C5\uFF1A\r
\`\u4E0B\u8F7D\uFF1A wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm\`\r
\`\u5B89\u88C5\uFF1A yum -y localinstall mysql57-community-release-el7-11.noarch.rpm\`\r
(3)\u5728\u7EBF\u5B89\u88C5 Mysql\uFF1A\`yum -y install mysql-community-server\`\r
(4)\u542F\u52A8\u670D\u52A1\uFF1A\`systemctl start mysqld\`\r
(5)\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\uFF1A\r
\`systemctl enable mysqld\`\r
\`systemctl deaemon-reload\`\r
\r
**3. \u4FEE\u6539\u672C\u5730\u767B\u5F55\u5BC6\u7801**\r
(1) \u901A\u8FC7\`vi /var/log/mysqld.log\`\u8FDB\u5165\u8BE5\u6587\u4EF6\u4E2D\u627E\u5230\u6807\u9EC4\u8FD9\u6BB5\uFF0C\u800C\u7EA2\u8272\u5708\u4FBF\u662F\u9ED8\u8BA4\u767B\u9646\u5BC6\u7801\uFF1A\r
![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191227220213561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70)\r
(2)\u901A\u8FC7\u4EE5\u4E0A\u5F97\u5230\u7684\u5BC6\u7801\u767B\u5F55\u547D\u4EE4\`mysql -u root -p\` \uFF0C\u5373\u53EF\u8FDB\u5165 mysql \u4E2D\u3002\u4E0B\u9762\u5219\u662F\u4FEE\u6539\u5BC6\u7801\uFF1A\r
\`mysql> alter user 'root'@'localhost' identified by 'Qq88888.';\`\r
\r
**4. \u8BBE\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF08\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF09\uFF0C\u5F00\u542F\u8FDC\u7A0B\u767B\u5F55\u524D\u63D0\u8981\u4FDD\u8BC1\u5F00\u542F\u9632\u706B\u5899\uFF0C\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A**\r
(1)\u5141\u8BB8\u8BE5\u8D26\u53F7\u80FD\u591F\u88AB\u8FDC\u7A0B\u767B\u5F55\uFF1A \` mysql> grant all privileges on *.* to 'root'@'%' identified by 'Qq88888.' with grant option;\`\r
(2)\u67E5\u770B\u9632\u706B\u5899\u662F\u5426\u5F00\u542F\uFF1A \`firewall-cmd --state\`\r
(3)\u5F00\u542F\u9632\u706B\u5899\uFF1A \`systemctl start firewalld.service\` - \u5173\u95ED\u9632\u706B\u5899: \`systemctl stop firewalld.service\` - \u7981\u7528\u9632\u706B\u5899: \`systemctl disable firewalld.service\` - \u67E5\u770B\u9632\u706B\u5899\u76D1\u542C\u7684\u7AEF\u53E3: \`firewall-cmd --list-port\`\r
(4)\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A\`firewall-cmd --zone=public --add-port=3306/tcp --permanent\`\r
(5)\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\`\r
\r
**5. \u914D\u7F6E my.cnf**\r
\u8FDB\u5165\`vi /etc/my.cnf\`\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u672C\u6587\u8FDB\u884C\u7F16\u7801\u8BBE\u7F6E\uFF1A\r
\r
\`\`\`/\r
character_set_server=utf8\r
init_connect='SET NAMES utf8'\r
\`\`\`\r
\r
**6. \u91CD\u542F\u52A8 mysql**\r
\`systemctl restart mysqld\`\r
\r
### \u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**_\u6CE8\u610F\uFF1A\u540C\u4E0A\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 6379 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09_**\r
\r
**1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B**\r
\r
**2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D redis\uFF1A**\`wget http://download.redis.io/releases/redis-4.0.8.tar.gz\`\r
\r
**3. \u89E3\u538B\u3001\u7F16\u8BD1\u548C\u5B89\u88C5\uFF1A**\r
(1) \u89E3\u538B\uFF1A\`tar -zxvf redis-4.0.8.tar.gz\`\r
(2) \u5B8C\u6210\u540E\u8FDB\u5165\u89E3\u538B\u7684 redis-4.0.8 \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 make \u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF1A\`make\`\r
(3) \u5B89\u88C5\uFF1A\`make install\`\r
\r
**4. \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8**\r
(1) \u521B\u5EFA\u65B0\u76EE\u5F55\uFF1A\`mkdir -p /usr/local/redis\`\r
(2) \u5C06/usr/local/src/redis-4.0.8/src \u76EE\u5F55\u4E0B\u7684 redis-server\u3001redis-cli \u548C/usr/local/src/redis-4.0.8 \u76EE\u5F55\u4E0B\u7684 redis.conf \u6587\u4EF6\u62F7\u8D1D\u5230\u521B\u5EFA\u7684\u76EE\u5F55\u4E2D\uFF1A\r
\`cp redis-server /usr/local/redis\`\r
\`cp redis-cli /usr/local/redis\`\r
\`cp ../redis.conf /usr/local/redis\`\r
(3)\u5F00\u542F\u540E\u53F0\u8FD0\u884C\uFF0C\u4FEE\u6539\u62F7\u8D1D\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF1A\`vi /usr/local/redis/redis.conf\`\r
\r
-   \u5C06\u8424\u5149\u5B57\u4E0A\u7684\u201Cno\u201D\u8BE5\u4E3A\u201Cyes\u201D\uFF1A ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/2019122819072660.png)\r
\r
(4) \u521B\u5EFA\u670D\u52A1\u6587\u4EF6 redis.service\uFF1A\`vi /usr/lib/systemd/system/redis.service\`\r
\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u4E2D\u7684\u8DEF\u5F84\u4EE5\u5B9E\u9645\u5404\u5F02\uFF09\uFF1A\r
\r
\`\`\`/\r
	[Unit]\r
	Description=The redis-server Process Manager\r
	After=syslog.target network.target\r
\r
	[Service]\r
	Type=simple\r
	PIDFile=/var/run/redis_6379.pid\r
	ExecStart=/usr/local/redis/redis-server /usr/local/redis/redis.conf\r
	ExecReload=/bin/kill -USR2 $MAINPID\r
	ExecStop=/bin/kill -SIGINT $MAINPID\r
\r
	[Install]\r
	WantedBy=multi-user.target\r
\`\`\`\r
\r
**5. \u5F00\u542F redis \u8FDC\u7A0B\u8BBF\u95EE\uFF08\u53EF\u5FFD\u7565\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF09\uFF1A**\r
(1) \u4FEE\u6539 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A\r
\r
-   \u8BBE\u7F6E\u53EF\u8BBF\u95EE\u7684 ip\uFF1A\u4FEE\u6539\u8424\u5149\u5B57\u7684\u6587\u672C\u4E2D\u753B\u5708\u7684 ip \u5730\u5740\u8BA9\u5176\u4ED6\u53EF\u4EE5\u8BBF\u95EE\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228214121699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70)\r
-   \u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F\uFF1A\u5C06\u8424\u5149\u5B57\u6587\u672C\u7684\u201Cyes\u201D\u4FEE\u6539\u4E3A\u201Cno\u201D\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228211505882.png)\r
-   \u8BBE\u7F6E\u5BC6\u7801\uFF1A\u6DFB\u52A0\u8424\u5149\u5B57\u7684\u6587\u672C\u6240\u793A\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228205849892.png)\r
\r
(2) \u4FEE\u6539\u5B8C\u540E\u5E94\u5728 redis \u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u547D\u4EE4\`redis-server redis.conf\`\u6765\u68C0\u67E5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u4EA6\u53EF\u68C0\u67E5\u662F\u5426\u51FA\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u907F\u514D\u540E\u7EED\u4E0D\u5FC5\u8981\u7684\u95EE\u9898\r
(3) \u56E0\u4E3A\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u6240\u4EE5\u52BF\u5FC5\u8981\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u7684\u76D1\u542C\uFF1A - \u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A\`firewall-cmd --zone=public --add-port=6379/tcp --permanent\` - \u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\` - \u67E5\u770B\u9632\u706B\u5899\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --list-ports\`\r
**6. \u5F00\u542F\u670D\u52A1\u548C\u5F00\u673A\u81EA\u542F\u52A8\uFF1A**\r
(1) \u5237\u65B0\u670D\u52A1\u914D\u7F6E\uFF1A\`systemctl daemon-reload\`\r
(2) \u5F00\u542F redis: \`systemctl start redis\`\r
(3) \u52A0\u5165\u5F00\u673A\u542F\u52A8\uFF1A\`systemctl enable redis\`\r
\r
### \u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**1. \u5B89\u88C5 gcc\uFF08gcc \u7528\u4E8E\u7F16\u8BD1\u63A5\u4E0B\u6765\u4E0B\u8F7D\u7684 nginx \u6E90\u7801\uFF09**\r
\u4F7F\u7528\`gcc -v\`\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u8BE5\u547D\u4EE4\uFF0C\u5982\u672A\u5B89\u88C5\u5219\u6267\u884C\`yum install gcc-c++\`\r
\r
**2. \u5B89\u88C5 pcre \u548C pcre-devel \u4F9D\u8D56\uFF08nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002\uFF09**\r
\`yum install -y pcre pcre-devel\`\r
\r
**3. \u5B89\u88C5 zlib zlib-devel \u4F9D\u8D56\uFF08zlib \u63D0\u4F9B\u4E86\u5F88\u591A\u538B\u7F29\u548C\u89E3\u65B9\u5F0F\uFF0Cnginx \u9700\u8981 zlib \u5BF9 http \u8FDB\u884C gzip\uFF09**\r
\`yum install -y zlib zlib-devel\`\r
\r
**4. \u5B89\u88C5 openssl openssl-devel\uFF08openssl \u662F\u4E00\u4E2A\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0Cnginx \u8981\u652F\u6301 https \u5C31\u9700\u8981\u5B83\uFF09**\r
\`yum install -y openssl openssl-devel\`\r
\r
**5. \u4E0B\u8F7D nginx \u5E76\u89E3\u538B**\r
\`wget http://nginx.org/download/nginx-1.9.9.tar.gz\`\r
\`tar -zxvf nginx-1.9.9\`\r
\r
**6. \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FFD\u52A0\u5B89\u88C5 ssl \u6A21\u5757**\r
\`./configure --with-http_ssl_module\`\r
\r
**7. \u4F7F\u7528 make \u7F16\u8BD1\u548C\u5B89\u88C5**\r
\`make && make install\`\r
\r
\`\`\`\r
\u6CE8\u610F\uFF1A\u5982\u679C\u5B89\u88C5\u540E\u51FA\u73B0\u4E00\u4E2AMake[1]: Leaving directory \`/usr/local/nginx-1.9.9\`\r
\u5E76\u4E14\u5728nginx-1.9.9\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u5DF2\u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3Anginx\u7684\u6587\u4EF6\u5939\u5373\u53EF\u5FFD\u7565\u8BE5\u9519\u8BEF~\r
\`\`\`\r
\r
**8. \u67E5\u770B nginx \u662F\u5426\u5B89\u88C5\u6210\u529F**\r
(1). \u8FDB\u5165 nginx \u6587\u4EF6\u4E0B\u7684 sbin \u76EE\u5F55\u8F93\u5165\`./nginx -v\`\u67E5\u770B\u7248\u672C\u53F7\r
(2).\u4F7F\u7528\`netstat -ntpl | grep nginx\`\u67E5\u770B\u5F53\u524D nginx \u5360\u7528\u7684\u7AEF\u53E3\u53F7\r
(3). \u4F7F\u7528\`wget 127.0.0.1\`\u6D4B\u8BD5\u8FD4\u56DE\u8868\u793A\u662F\u5426\u6B63\u5E38\r
(4). \u4F7F\u7528\`curl 127.0.0.1\`\u6D4B\u8BD5\u8FD4\u56DE\u9875\u9762\u7684\u503C\u662F\u5426\u6B63\u5E38\r
\r
**9. \u914D\u7F6E nginx \u5F00\u673A\u81EA\u542F\u52A8**\r
(1). \u8FDB\u5165\u76EE\u5F55\`cd /usr/lib/systemd/system\`\r
(2). \u521B\u5EFA nginx.service \u670D\u52A1\u6587\u4EF6\`vi nginx.service\`\r
(3). \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A\r
\r
\`\`\`/\r
[Unit]\r
Description=nginx\r
After=network.target\r
\r
[Service]\r
Type=forking\r
ExecStart=/usr/local/nginx/sbin/nginx\r
ExecReload=/usr/local/nginx/sbin/nginx reload\r
ExecStop=/usr/local/nginx/sbin/nginx quit\r
PrivateTmp=true\r
\r
[Install]\r
WantedBy=multi-user.target\r
\`\`\`\r
\r
(4). \u5F00\u673A\u81EA\u542F\u52A8\uFF1A\`systemctl enable nginx.service\`\r
(5). nginx \u670D\u52A1\u7684\u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F\uFF1A\r
\u542F\u52A8\uFF1A\`systemctl start nginx.service\`\r
\u5173\u95ED\uFF1A\`systemctl stop nginx.service\`\r
\u91CD\u542F\uFF1A\`systemctl restart nginx.service\`\r
\r
**10. \u9632\u706B\u5899\u5F00\u542F http\u3001https \u670D\u52A1\u4EE5\u53CA\u7AEF\u53E3\u76D1\u542C**\r
\u5F00\u542F http \u670D\u52A1\uFF1A\`firewall-cmd --zone=public --add-service=http --permanent\`\r
\u5F00\u542F 80 \u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --add-port=80/tcp --permanent\`\r
\u5F00\u542F https \u670D\u52A1\uFF1A\`firewall-cmd --zone=public --add-service=https --permanent\`\r
\u5F00\u542F 443 \u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --add-port=443/tcp --permanent\`\r
\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\`\r
\r
**11. nginx + \u4E00\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A**\r
(1). \u4FEE\u6539\u5B89\u88C5\u540E nginx \u6587\u4EF6\u7684 conf \u76EE\u5F55\u4E0B\u7684 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1A \`vi nginx.conf\`\r
(2). \u627E\u5230\u5E26\u6709# HTTPS Server \u7684\u5B57\u6837\uFF0C\u5C06\u5176\u4E0B\u6587\u672C\u6309\u7167\u4EE5\u4E0B\u6587\u672C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A\r
\r
\`\`\`\\\r
    # HTTPS Server\r
    #\r
    server {\r
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443\r
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D\r
\r
        ssl_certificate      cert/www/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem\r
        ssl_certificate_key  cert/www/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key\r
        ssl   on;\r
\r
        ssl_session_cache    shared:SSL:1m;\r
        ssl_session_timeout  5m;\r
\r
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\r
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\r
        ssl_prefer_server_ciphers  on;\r
\r
        location / {\r
            proxy_pass   http://127.0.0.1:8080; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
            proxy_set_header Host                               $http_addr;\r
            proxy_set_header X-Real-IP                        $remote_addr;\r
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
            root   html;\r
            index  index.html index.htm;\r
        }\r
\r
		# \u914D\u7F6E\u53E6\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528443\u7AEF\u53E3\r
		# location /test {\r
        #    proxy_pass   http://127.0.0.1:9090/test; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
        #    proxy_set_header Host                               $http_addr;\r
        #    proxy_set_header X-Real-IP                        $remote_addr;\r
        #    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
        #    root   html;\r
        #    index  index.html index.htm;\r
		# }\r
    }\r
\`\`\`\r
\r
(3). \u5C06 http \u8BF7\u6C42\u91CD\u5B9A\u5411\u4E3A https \u8BF7\u6C42\uFF0C\u5728\u539F nginx.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u4E3A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF1A\r
\r
\`\`\`/\r
	server {\r
        listen       80;\r
        server_name  www.shnice.club; #\u586B\u5199\u8BBF\u95EE\u7684\u57DF\u540D\r
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps\r
		.....\r
\`\`\`\r
\r
(4). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -t\`\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E\r
(5). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -s reload\`\u52A0\u8F7D\u914D\u7F6E\r
\r
**12\u3001nginx + \u4E8C\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A**\r
(1). \u5728 nginx \u6587\u4EF6\u5939\u4E0B\u4E0B\u521B\u5EFA vhosts \u76EE\u5F55\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A\\*.conf \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B\uFF1A\r
\r
\`\`\`/\r
# HTTP Server\r
#\r
server {\r
        listen 80;\r
        server_name localhost; #\u586B\u5199\u4F60\u8BBF\u95EE\u7684\u57DF\u540D\r
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps\r
\r
        location / {\r
            index index.html index.htm;\r
        }\r
}\r
\r
# HTTPS Server\r
#\r
server {\r
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443\r
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D\r
\r
        ssl_certificate      cert/abc/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem\r
        ssl_certificate_key  cert/abc/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key\r
        ssl   on;\r
\r
        ssl_session_cache    shared:SSL:1m;\r
        ssl_session_timeout  5m;\r
\r
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\r
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\r
        ssl_prefer_server_ciphers  on;\r
\r
        location /abc {\r
            proxy_pass   http://127.0.0.1:8080/abc; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
            proxy_set_header Host                               $http_addr;\r
            proxy_set_header X-Real-IP                        $remote_addr;\r
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
            root   html;\r
            index  index.html index.htm;\r
        }\r
}\r
\`\`\`\r
\r
(2). \u5BFC\u5165\u4E8C\u7EA7\u57DF\u540D\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u5230 nginx.conf \u4E2D\uFF1A\r
\u8FDB\u5165 conf \u76EE\u5F55\u4E0B\uFF0C\u5728 nginx.conf \u6587\u4EF6\u4E2D\u7684 http{}\u5305\u88F9\u4E2D\u5904\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A\r
\r
\`\`\`\\\r
	include /usr/local/nginx/vhosts/*;\r
\`\`\`\r
\r
(3). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -t\`\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E\r
(4). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -s reload\`\u52A0\u8F7D\u914D\u7F6E\r
`,contentRendered:`<!-- more -->
<h3 id="\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</h3>
<p><strong>1. \u521B\u5EFA jdk \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09</strong>
<code v-pre>mkdir -p usr/local/src</code>
<strong>2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D jdk \u5305</strong>
<code v-pre>wget --no-check-certificate --no-cookies --header &quot;Cookie: oraclelicense=accept-securebackup-cookie&quot; http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz</code>
<strong>3. \u89E3\u538B\uFF08\u5982\u4E0B\u64CD\u4F5C\u662F\u5DF2\u7ECF\u8DF3\u5230\u6307\u5B9A\u5B58\u653E jdk \u7684\u76EE\u5F55\u4F4D\u7F6E\uFF09</strong>
<code v-pre>tar -zxvf jdk-8u131-linux-x64.tar.gz</code>
<strong>4. \u91CD\u547D\u540D</strong>
<code v-pre>mv jdk1.8.0_131 jdk1.8</code>
<strong>5. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF</strong>
(1)\u8FDB\u5165\u7CFB\u7EDF\u6587\u4EF6\u547D\u4EE4\u5982\u4E0B\uFF1A<code v-pre>vi /etc/profile</code>
(2)\u6309\u201Cshift+g\u201D\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u6587\u672C\u672B\u5C3E\uFF0C\u518D\u6309\u201Ci\u201D\u6309\u952E\u8FDB\u884C\u7F16\u8F91\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6587\u672C(\u5199\u5B8C\u540E\uFF0C\u6309 ESC \u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\u5E76\u8F93\u5165\u201C:x\u201D\u4EE5\u4FDD\u5B58\u5E76\u9000\u51FA)\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>export JAVA_HOME=/usr/local/src/jdk1.8
export PATH=$PATH:$JAVA_HOME/bin
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. \u8BA9\u914D\u7F6E\u6587\u4EF6\u751F\u6548\uFF1A</strong><code v-pre>source /etc/profile</code>
<strong>7. \u68C0\u67E5 jdk \u662F\u5426\u914D\u7F6E\u6210\u529F\uFF1A</strong> <code v-pre>java -version</code></p>
<h3 id="\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981" aria-hidden="true">#</a> \u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09</h3>
<p><strong>1. \u521B\u5EFA tomcat \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09</strong></p>
<p><strong>2. \u4F7F\u7528 wget \u4E0B\u8F7D tomcat</strong></p>
<p><strong>3. \u89E3\u538B</strong></p>
<p><strong>4. \u542F\u52A8 tomcat</strong></p>
<p><strong>5. \u4FEE\u6539 tomcat \u7AEF\u53E3</strong></p>
<p><strong>6. \u6D4B\u8BD5\u8BBF\u95EE</strong></p>
<h3 id="\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong><em>\u6CE8\u610F\uFF1A\u9664\u4E86\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 3306 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 3306 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09</em></strong></p>
<p><strong>1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B</strong></p>
<p><strong>2. \u4E0B\u8F7D mysql \u5E76\u542F\u52A8\u670D\u52A1</strong>
(1)\u4F7F\u7528 wget \u4E0B\u8F7D mysql \u6E90\u5305\u5E76\u7528 yum \u5B89\u88C5\uFF1A
<code v-pre>\u4E0B\u8F7D\uFF1A wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm</code>
<code v-pre>\u5B89\u88C5\uFF1A yum -y localinstall mysql57-community-release-el7-11.noarch.rpm</code>
(3)\u5728\u7EBF\u5B89\u88C5 Mysql\uFF1A<code v-pre>yum -y install mysql-community-server</code>
(4)\u542F\u52A8\u670D\u52A1\uFF1A<code v-pre>systemctl start mysqld</code>
(5)\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\uFF1A
<code v-pre>systemctl enable mysqld</code>
<code v-pre>systemctl deaemon-reload</code></p>
<p><strong>3. \u4FEE\u6539\u672C\u5730\u767B\u5F55\u5BC6\u7801</strong>
(1) \u901A\u8FC7<code v-pre>vi /var/log/mysqld.log</code>\u8FDB\u5165\u8BE5\u6587\u4EF6\u4E2D\u627E\u5230\u6807\u9EC4\u8FD9\u6BB5\uFF0C\u800C\u7EA2\u8272\u5708\u4FBF\u662F\u9ED8\u8BA4\u767B\u9646\u5BC6\u7801\uFF1A
<img src="https://img-blog.csdnimg.cn/20191227220213561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0">
(2)\u901A\u8FC7\u4EE5\u4E0A\u5F97\u5230\u7684\u5BC6\u7801\u767B\u5F55\u547D\u4EE4<code v-pre>mysql -u root -p</code> \uFF0C\u5373\u53EF\u8FDB\u5165 mysql \u4E2D\u3002\u4E0B\u9762\u5219\u662F\u4FEE\u6539\u5BC6\u7801\uFF1A
<code v-pre>mysql&gt; alter user 'root'@'localhost' identified by 'Qq88888.';</code></p>
<p><strong>4. \u8BBE\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF08\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF09\uFF0C\u5F00\u542F\u8FDC\u7A0B\u767B\u5F55\u524D\u63D0\u8981\u4FDD\u8BC1\u5F00\u542F\u9632\u706B\u5899\uFF0C\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A</strong>
(1)\u5141\u8BB8\u8BE5\u8D26\u53F7\u80FD\u591F\u88AB\u8FDC\u7A0B\u767B\u5F55\uFF1A <code v-pre> mysql&gt; grant all privileges on *.* to 'root'@'%' identified by 'Qq88888.' with grant option;</code>
(2)\u67E5\u770B\u9632\u706B\u5899\u662F\u5426\u5F00\u542F\uFF1A <code v-pre>firewall-cmd --state</code>
(3)\u5F00\u542F\u9632\u706B\u5899\uFF1A <code v-pre>systemctl start firewalld.service</code> - \u5173\u95ED\u9632\u706B\u5899: <code v-pre>systemctl stop firewalld.service</code> - \u7981\u7528\u9632\u706B\u5899: <code v-pre>systemctl disable firewalld.service</code> - \u67E5\u770B\u9632\u706B\u5899\u76D1\u542C\u7684\u7AEF\u53E3: <code v-pre>firewall-cmd --list-port</code>
(4)\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=3306/tcp --permanent</code>
(5)\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code></p>
<p><strong>5. \u914D\u7F6E my.cnf</strong>
\u8FDB\u5165<code v-pre>vi /etc/my.cnf</code>\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u672C\u6587\u8FDB\u884C\u7F16\u7801\u8BBE\u7F6E\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>character_set_server=utf8
init_connect='SET NAMES utf8'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. \u91CD\u542F\u52A8 mysql</strong>
<code v-pre>systemctl restart mysqld</code></p>
<h3 id="\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong><em>\u6CE8\u610F\uFF1A\u540C\u4E0A\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 6379 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09</em></strong></p>
<p><strong>1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B</strong></p>
<p><strong>2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D redis\uFF1A</strong><code v-pre>wget http://download.redis.io/releases/redis-4.0.8.tar.gz</code></p>
<p><strong>3. \u89E3\u538B\u3001\u7F16\u8BD1\u548C\u5B89\u88C5\uFF1A</strong>
(1) \u89E3\u538B\uFF1A<code v-pre>tar -zxvf redis-4.0.8.tar.gz</code>
(2) \u5B8C\u6210\u540E\u8FDB\u5165\u89E3\u538B\u7684 redis-4.0.8 \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 make \u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF1A<code v-pre>make</code>
(3) \u5B89\u88C5\uFF1A<code v-pre>make install</code></p>
<p><strong>4. \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8</strong>
(1) \u521B\u5EFA\u65B0\u76EE\u5F55\uFF1A<code v-pre>mkdir -p /usr/local/redis</code>
(2) \u5C06/usr/local/src/redis-4.0.8/src \u76EE\u5F55\u4E0B\u7684 redis-server\u3001redis-cli \u548C/usr/local/src/redis-4.0.8 \u76EE\u5F55\u4E0B\u7684 redis.conf \u6587\u4EF6\u62F7\u8D1D\u5230\u521B\u5EFA\u7684\u76EE\u5F55\u4E2D\uFF1A
<code v-pre>cp redis-server /usr/local/redis</code>
<code v-pre>cp redis-cli /usr/local/redis</code>
<code v-pre>cp ../redis.conf /usr/local/redis</code>
(3)\u5F00\u542F\u540E\u53F0\u8FD0\u884C\uFF0C\u4FEE\u6539\u62F7\u8D1D\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF1A<code v-pre>vi /usr/local/redis/redis.conf</code></p>
<ul>
<li>\u5C06\u8424\u5149\u5B57\u4E0A\u7684\u201Cno\u201D\u8BE5\u4E3A\u201Cyes\u201D\uFF1A <img src="https://img-blog.csdnimg.cn/2019122819072660.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
</ul>
<p>(4) \u521B\u5EFA\u670D\u52A1\u6587\u4EF6 redis.service\uFF1A<code v-pre>vi /usr/lib/systemd/system/redis.service</code>
\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u4E2D\u7684\u8DEF\u5F84\u4EE5\u5B9E\u9645\u5404\u5F02\uFF09\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>	[Unit]
	Description=The redis-server Process Manager
	After=syslog.target network.target

	[Service]
	Type=simple
	PIDFile=/var/run/redis_6379.pid
	ExecStart=/usr/local/redis/redis-server /usr/local/redis/redis.conf
	ExecReload=/bin/kill -USR2 $MAINPID
	ExecStop=/bin/kill -SIGINT $MAINPID

	[Install]
	WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. \u5F00\u542F redis \u8FDC\u7A0B\u8BBF\u95EE\uFF08\u53EF\u5FFD\u7565\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF09\uFF1A</strong>
(1) \u4FEE\u6539 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A</p>
<ul>
<li>\u8BBE\u7F6E\u53EF\u8BBF\u95EE\u7684 ip\uFF1A\u4FEE\u6539\u8424\u5149\u5B57\u7684\u6587\u672C\u4E2D\u753B\u5708\u7684 ip \u5730\u5740\u8BA9\u5176\u4ED6\u53EF\u4EE5\u8BBF\u95EE
<img src="https://img-blog.csdnimg.cn/20191228214121699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
<li>\u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F\uFF1A\u5C06\u8424\u5149\u5B57\u6587\u672C\u7684\u201Cyes\u201D\u4FEE\u6539\u4E3A\u201Cno\u201D
<img src="https://img-blog.csdnimg.cn/20191228211505882.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
<li>\u8BBE\u7F6E\u5BC6\u7801\uFF1A\u6DFB\u52A0\u8424\u5149\u5B57\u7684\u6587\u672C\u6240\u793A
<img src="https://img-blog.csdnimg.cn/20191228205849892.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
</ul>
<p>(2) \u4FEE\u6539\u5B8C\u540E\u5E94\u5728 redis \u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u547D\u4EE4<code v-pre>redis-server redis.conf</code>\u6765\u68C0\u67E5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u4EA6\u53EF\u68C0\u67E5\u662F\u5426\u51FA\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u907F\u514D\u540E\u7EED\u4E0D\u5FC5\u8981\u7684\u95EE\u9898
(3) \u56E0\u4E3A\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u6240\u4EE5\u52BF\u5FC5\u8981\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u7684\u76D1\u542C\uFF1A - \u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=6379/tcp --permanent</code> - \u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code> - \u67E5\u770B\u9632\u706B\u5899\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --list-ports</code>
<strong>6. \u5F00\u542F\u670D\u52A1\u548C\u5F00\u673A\u81EA\u542F\u52A8\uFF1A</strong>
(1) \u5237\u65B0\u670D\u52A1\u914D\u7F6E\uFF1A<code v-pre>systemctl daemon-reload</code>
(2) \u5F00\u542F redis: <code v-pre>systemctl start redis</code>
(3) \u52A0\u5165\u5F00\u673A\u542F\u52A8\uFF1A<code v-pre>systemctl enable redis</code></p>
<h3 id="\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong>1. \u5B89\u88C5 gcc\uFF08gcc \u7528\u4E8E\u7F16\u8BD1\u63A5\u4E0B\u6765\u4E0B\u8F7D\u7684 nginx \u6E90\u7801\uFF09</strong>
\u4F7F\u7528<code v-pre>gcc -v</code>\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u8BE5\u547D\u4EE4\uFF0C\u5982\u672A\u5B89\u88C5\u5219\u6267\u884C<code v-pre>yum install gcc-c++</code></p>
<p><strong>2. \u5B89\u88C5 pcre \u548C pcre-devel \u4F9D\u8D56\uFF08nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002\uFF09</strong>
<code v-pre>yum install -y pcre pcre-devel</code></p>
<p><strong>3. \u5B89\u88C5 zlib zlib-devel \u4F9D\u8D56\uFF08zlib \u63D0\u4F9B\u4E86\u5F88\u591A\u538B\u7F29\u548C\u89E3\u65B9\u5F0F\uFF0Cnginx \u9700\u8981 zlib \u5BF9 http \u8FDB\u884C gzip\uFF09</strong>
<code v-pre>yum install -y zlib zlib-devel</code></p>
<p><strong>4. \u5B89\u88C5 openssl openssl-devel\uFF08openssl \u662F\u4E00\u4E2A\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0Cnginx \u8981\u652F\u6301 https \u5C31\u9700\u8981\u5B83\uFF09</strong>
<code v-pre>yum install -y openssl openssl-devel</code></p>
<p><strong>5. \u4E0B\u8F7D nginx \u5E76\u89E3\u538B</strong>
<code v-pre>wget http://nginx.org/download/nginx-1.9.9.tar.gz</code>
<code v-pre>tar -zxvf nginx-1.9.9</code></p>
<p><strong>6. \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FFD\u52A0\u5B89\u88C5 ssl \u6A21\u5757</strong>
<code v-pre>./configure --with-http_ssl_module</code></p>
<p><strong>7. \u4F7F\u7528 make \u7F16\u8BD1\u548C\u5B89\u88C5</strong>
<code v-pre>make &amp;&amp; make install</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>\u6CE8\u610F\uFF1A\u5982\u679C\u5B89\u88C5\u540E\u51FA\u73B0\u4E00\u4E2AMake[1]: Leaving directory \`/usr/local/nginx-1.9.9\`
\u5E76\u4E14\u5728nginx-1.9.9\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u5DF2\u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3Anginx\u7684\u6587\u4EF6\u5939\u5373\u53EF\u5FFD\u7565\u8BE5\u9519\u8BEF~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>8. \u67E5\u770B nginx \u662F\u5426\u5B89\u88C5\u6210\u529F</strong>
(1). \u8FDB\u5165 nginx \u6587\u4EF6\u4E0B\u7684 sbin \u76EE\u5F55\u8F93\u5165<code v-pre>./nginx -v</code>\u67E5\u770B\u7248\u672C\u53F7
(2).\u4F7F\u7528<code v-pre>netstat -ntpl | grep nginx</code>\u67E5\u770B\u5F53\u524D nginx \u5360\u7528\u7684\u7AEF\u53E3\u53F7
(3). \u4F7F\u7528<code v-pre>wget 127.0.0.1</code>\u6D4B\u8BD5\u8FD4\u56DE\u8868\u793A\u662F\u5426\u6B63\u5E38
(4). \u4F7F\u7528<code v-pre>curl 127.0.0.1</code>\u6D4B\u8BD5\u8FD4\u56DE\u9875\u9762\u7684\u503C\u662F\u5426\u6B63\u5E38</p>
<p><strong>9. \u914D\u7F6E nginx \u5F00\u673A\u81EA\u542F\u52A8</strong>
(1). \u8FDB\u5165\u76EE\u5F55<code v-pre>cd /usr/lib/systemd/system</code>
(2). \u521B\u5EFA nginx.service \u670D\u52A1\u6587\u4EF6<code v-pre>vi nginx.service</code>
(3). \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>[Unit]
Description=nginx
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx reload
ExecStop=/usr/local/nginx/sbin/nginx quit
PrivateTmp=true

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4). \u5F00\u673A\u81EA\u542F\u52A8\uFF1A<code v-pre>systemctl enable nginx.service</code>
(5). nginx \u670D\u52A1\u7684\u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F\uFF1A
\u542F\u52A8\uFF1A<code v-pre>systemctl start nginx.service</code>
\u5173\u95ED\uFF1A<code v-pre>systemctl stop nginx.service</code>
\u91CD\u542F\uFF1A<code v-pre>systemctl restart nginx.service</code></p>
<p><strong>10. \u9632\u706B\u5899\u5F00\u542F http\u3001https \u670D\u52A1\u4EE5\u53CA\u7AEF\u53E3\u76D1\u542C</strong>
\u5F00\u542F http \u670D\u52A1\uFF1A<code v-pre>firewall-cmd --zone=public --add-service=http --permanent</code>
\u5F00\u542F 80 \u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=80/tcp --permanent</code>
\u5F00\u542F https \u670D\u52A1\uFF1A<code v-pre>firewall-cmd --zone=public --add-service=https --permanent</code>
\u5F00\u542F 443 \u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=443/tcp --permanent</code>
\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code></p>
<p><strong>11. nginx + \u4E00\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A</strong>
(1). \u4FEE\u6539\u5B89\u88C5\u540E nginx \u6587\u4EF6\u7684 conf \u76EE\u5F55\u4E0B\u7684 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1A <code v-pre>vi nginx.conf</code>
(2). \u627E\u5230\u5E26\u6709# HTTPS Server \u7684\u5B57\u6837\uFF0C\u5C06\u5176\u4E0B\u6587\u672C\u6309\u7167\u4EE5\u4E0B\u6587\u672C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A</p>
<div class="language-\\ ext-\\ line-numbers-mode"><pre v-pre class="language-\\"><code>    # HTTPS Server
    #
    server {
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D

        ssl_certificate      cert/www/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem
        ssl_certificate_key  cert/www/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key
        ssl   on;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

        location / {
            proxy_pass   http://127.0.0.1:8080; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
            proxy_set_header Host                               $http_addr;
            proxy_set_header X-Real-IP                        $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            root   html;
            index  index.html index.htm;
        }

		# \u914D\u7F6E\u53E6\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528443\u7AEF\u53E3
		# location /test {
        #    proxy_pass   http://127.0.0.1:9090/test; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
        #    proxy_set_header Host                               $http_addr;
        #    proxy_set_header X-Real-IP                        $remote_addr;
        #    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        #    root   html;
        #    index  index.html index.htm;
		# }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3). \u5C06 http \u8BF7\u6C42\u91CD\u5B9A\u5411\u4E3A https \u8BF7\u6C42\uFF0C\u5728\u539F nginx.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u4E3A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>	server {
        listen       80;
        server_name  www.shnice.club; #\u586B\u5199\u8BBF\u95EE\u7684\u57DF\u540D
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps
		.....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -t</code>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E
(5). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -s reload</code>\u52A0\u8F7D\u914D\u7F6E</p>
<p><strong>12\u3001nginx + \u4E8C\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A</strong>
(1). \u5728 nginx \u6587\u4EF6\u5939\u4E0B\u4E0B\u521B\u5EFA vhosts \u76EE\u5F55\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A*.conf \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code># HTTP Server
#
server {
        listen 80;
        server_name localhost; #\u586B\u5199\u4F60\u8BBF\u95EE\u7684\u57DF\u540D
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps

        location / {
            index index.html index.htm;
        }
}

# HTTPS Server
#
server {
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D

        ssl_certificate      cert/abc/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem
        ssl_certificate_key  cert/abc/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key
        ssl   on;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

        location /abc {
            proxy_pass   http://127.0.0.1:8080/abc; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
            proxy_set_header Host                               $http_addr;
            proxy_set_header X-Real-IP                        $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            root   html;
            index  index.html index.htm;
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2). \u5BFC\u5165\u4E8C\u7EA7\u57DF\u540D\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u5230 nginx.conf \u4E2D\uFF1A
\u8FDB\u5165 conf \u76EE\u5F55\u4E0B\uFF0C\u5728 nginx.conf \u6587\u4EF6\u4E2D\u7684 http{}\u5305\u88F9\u4E2D\u5904\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="language-\\ ext-\\ line-numbers-mode"><pre v-pre class="language-\\"><code>	include /usr/local/nginx/vhosts/*;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -t</code>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E
(4). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -s reload</code>\u52A0\u8F7D\u914D\u7F6E</p>
`,date:"2022-07-12",deps:[],hoistedTags:[],links:[],pathInferred:"/20220711/2.html",pathLocale:"/",permalink:null,routeMeta:{title:"Centos7\u73AF\u5883\u642D\u5EFA"},slug:"2",filePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/20220711/2.md",filePathRelative:"20220711/2.md",componentFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/2.html.vue",componentFilePathRelative:"pages/20220711/2.html.vue",componentFileChunkName:"v-e5cc5690",dataFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/2.html.js",dataFilePathRelative:"pages/20220711/2.html.js",dataFileChunkName:"v-e5cc5690",htmlFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/dist/20220711/2.html",htmlFilePathRelative:"20220711/2.html"}],length:1,label:"mysql"},redis:{pages:[{data:{key:"v-e5cc5690",path:"/20220711/2.html",title:"Centos7\u73AF\u5883\u642D\u5EFA",lang:"zh-CN",frontmatter:{title:"Centos7\u73AF\u5883\u642D\u5EFA",date:"2022-07-12 17:55:44",sidebar:"auto",categories:["Linux"],tags:["java","mysql","redis"],publish:!0},excerpt:"",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],git:{},filePathRelative:"20220711/2.md"},key:"v-e5cc5690",path:"/20220711/2.html",title:"Centos7\u73AF\u5883\u642D\u5EFA",lang:"zh-CN",frontmatter:{title:"Centos7\u73AF\u5883\u642D\u5EFA",date:"2022-07-12 17:55:44",sidebar:"auto",categories:["Linux"],tags:["java","mysql","redis"],publish:!0},excerpt:"",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],content:`\r
<!-- more -->\r
\r
### \u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\r
\r
**1. \u521B\u5EFA jdk \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09**\r
\`mkdir -p usr/local/src\`\r
**2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D jdk \u5305**\r
\`wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz\`\r
**3. \u89E3\u538B\uFF08\u5982\u4E0B\u64CD\u4F5C\u662F\u5DF2\u7ECF\u8DF3\u5230\u6307\u5B9A\u5B58\u653E jdk \u7684\u76EE\u5F55\u4F4D\u7F6E\uFF09**\r
\`tar -zxvf jdk-8u131-linux-x64.tar.gz\`\r
**4. \u91CD\u547D\u540D**\r
\`mv jdk1.8.0_131 jdk1.8\`\r
**5. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF**\r
(1)\u8FDB\u5165\u7CFB\u7EDF\u6587\u4EF6\u547D\u4EE4\u5982\u4E0B\uFF1A\`vi /etc/profile\`\r
(2)\u6309\u201Cshift+g\u201D\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u6587\u672C\u672B\u5C3E\uFF0C\u518D\u6309\u201Ci\u201D\u6309\u952E\u8FDB\u884C\u7F16\u8F91\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6587\u672C(\u5199\u5B8C\u540E\uFF0C\u6309 ESC \u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\u5E76\u8F93\u5165\u201C:x\u201D\u4EE5\u4FDD\u5B58\u5E76\u9000\u51FA)\uFF1A\r
\r
\`\`\`/\r
export JAVA_HOME=/usr/local/src/jdk1.8\r
export PATH=$PATH:$JAVA_HOME/bin\r
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar\r
\`\`\`\r
\r
**6. \u8BA9\u914D\u7F6E\u6587\u4EF6\u751F\u6548\uFF1A**\`source /etc/profile\`\r
**7. \u68C0\u67E5 jdk \u662F\u5426\u914D\u7F6E\u6210\u529F\uFF1A** \`java -version\`\r
\r
### \u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09\r
\r
**1. \u521B\u5EFA tomcat \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09**\r
\r
**2. \u4F7F\u7528 wget \u4E0B\u8F7D tomcat**\r
\r
**3. \u89E3\u538B**\r
\r
**4. \u542F\u52A8 tomcat**\r
\r
**5. \u4FEE\u6539 tomcat \u7AEF\u53E3**\r
\r
**6. \u6D4B\u8BD5\u8BBF\u95EE**\r
\r
### \u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**_\u6CE8\u610F\uFF1A\u9664\u4E86\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 3306 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 3306 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09_**\r
\r
**1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B**\r
\r
**2. \u4E0B\u8F7D mysql \u5E76\u542F\u52A8\u670D\u52A1**\r
(1)\u4F7F\u7528 wget \u4E0B\u8F7D mysql \u6E90\u5305\u5E76\u7528 yum \u5B89\u88C5\uFF1A\r
\`\u4E0B\u8F7D\uFF1A wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm\`\r
\`\u5B89\u88C5\uFF1A yum -y localinstall mysql57-community-release-el7-11.noarch.rpm\`\r
(3)\u5728\u7EBF\u5B89\u88C5 Mysql\uFF1A\`yum -y install mysql-community-server\`\r
(4)\u542F\u52A8\u670D\u52A1\uFF1A\`systemctl start mysqld\`\r
(5)\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\uFF1A\r
\`systemctl enable mysqld\`\r
\`systemctl deaemon-reload\`\r
\r
**3. \u4FEE\u6539\u672C\u5730\u767B\u5F55\u5BC6\u7801**\r
(1) \u901A\u8FC7\`vi /var/log/mysqld.log\`\u8FDB\u5165\u8BE5\u6587\u4EF6\u4E2D\u627E\u5230\u6807\u9EC4\u8FD9\u6BB5\uFF0C\u800C\u7EA2\u8272\u5708\u4FBF\u662F\u9ED8\u8BA4\u767B\u9646\u5BC6\u7801\uFF1A\r
![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191227220213561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70)\r
(2)\u901A\u8FC7\u4EE5\u4E0A\u5F97\u5230\u7684\u5BC6\u7801\u767B\u5F55\u547D\u4EE4\`mysql -u root -p\` \uFF0C\u5373\u53EF\u8FDB\u5165 mysql \u4E2D\u3002\u4E0B\u9762\u5219\u662F\u4FEE\u6539\u5BC6\u7801\uFF1A\r
\`mysql> alter user 'root'@'localhost' identified by 'Qq88888.';\`\r
\r
**4. \u8BBE\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF08\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF09\uFF0C\u5F00\u542F\u8FDC\u7A0B\u767B\u5F55\u524D\u63D0\u8981\u4FDD\u8BC1\u5F00\u542F\u9632\u706B\u5899\uFF0C\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A**\r
(1)\u5141\u8BB8\u8BE5\u8D26\u53F7\u80FD\u591F\u88AB\u8FDC\u7A0B\u767B\u5F55\uFF1A \` mysql> grant all privileges on *.* to 'root'@'%' identified by 'Qq88888.' with grant option;\`\r
(2)\u67E5\u770B\u9632\u706B\u5899\u662F\u5426\u5F00\u542F\uFF1A \`firewall-cmd --state\`\r
(3)\u5F00\u542F\u9632\u706B\u5899\uFF1A \`systemctl start firewalld.service\` - \u5173\u95ED\u9632\u706B\u5899: \`systemctl stop firewalld.service\` - \u7981\u7528\u9632\u706B\u5899: \`systemctl disable firewalld.service\` - \u67E5\u770B\u9632\u706B\u5899\u76D1\u542C\u7684\u7AEF\u53E3: \`firewall-cmd --list-port\`\r
(4)\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A\`firewall-cmd --zone=public --add-port=3306/tcp --permanent\`\r
(5)\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\`\r
\r
**5. \u914D\u7F6E my.cnf**\r
\u8FDB\u5165\`vi /etc/my.cnf\`\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u672C\u6587\u8FDB\u884C\u7F16\u7801\u8BBE\u7F6E\uFF1A\r
\r
\`\`\`/\r
character_set_server=utf8\r
init_connect='SET NAMES utf8'\r
\`\`\`\r
\r
**6. \u91CD\u542F\u52A8 mysql**\r
\`systemctl restart mysqld\`\r
\r
### \u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**_\u6CE8\u610F\uFF1A\u540C\u4E0A\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 6379 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09_**\r
\r
**1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B**\r
\r
**2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D redis\uFF1A**\`wget http://download.redis.io/releases/redis-4.0.8.tar.gz\`\r
\r
**3. \u89E3\u538B\u3001\u7F16\u8BD1\u548C\u5B89\u88C5\uFF1A**\r
(1) \u89E3\u538B\uFF1A\`tar -zxvf redis-4.0.8.tar.gz\`\r
(2) \u5B8C\u6210\u540E\u8FDB\u5165\u89E3\u538B\u7684 redis-4.0.8 \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 make \u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF1A\`make\`\r
(3) \u5B89\u88C5\uFF1A\`make install\`\r
\r
**4. \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8**\r
(1) \u521B\u5EFA\u65B0\u76EE\u5F55\uFF1A\`mkdir -p /usr/local/redis\`\r
(2) \u5C06/usr/local/src/redis-4.0.8/src \u76EE\u5F55\u4E0B\u7684 redis-server\u3001redis-cli \u548C/usr/local/src/redis-4.0.8 \u76EE\u5F55\u4E0B\u7684 redis.conf \u6587\u4EF6\u62F7\u8D1D\u5230\u521B\u5EFA\u7684\u76EE\u5F55\u4E2D\uFF1A\r
\`cp redis-server /usr/local/redis\`\r
\`cp redis-cli /usr/local/redis\`\r
\`cp ../redis.conf /usr/local/redis\`\r
(3)\u5F00\u542F\u540E\u53F0\u8FD0\u884C\uFF0C\u4FEE\u6539\u62F7\u8D1D\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF1A\`vi /usr/local/redis/redis.conf\`\r
\r
-   \u5C06\u8424\u5149\u5B57\u4E0A\u7684\u201Cno\u201D\u8BE5\u4E3A\u201Cyes\u201D\uFF1A ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/2019122819072660.png)\r
\r
(4) \u521B\u5EFA\u670D\u52A1\u6587\u4EF6 redis.service\uFF1A\`vi /usr/lib/systemd/system/redis.service\`\r
\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u4E2D\u7684\u8DEF\u5F84\u4EE5\u5B9E\u9645\u5404\u5F02\uFF09\uFF1A\r
\r
\`\`\`/\r
	[Unit]\r
	Description=The redis-server Process Manager\r
	After=syslog.target network.target\r
\r
	[Service]\r
	Type=simple\r
	PIDFile=/var/run/redis_6379.pid\r
	ExecStart=/usr/local/redis/redis-server /usr/local/redis/redis.conf\r
	ExecReload=/bin/kill -USR2 $MAINPID\r
	ExecStop=/bin/kill -SIGINT $MAINPID\r
\r
	[Install]\r
	WantedBy=multi-user.target\r
\`\`\`\r
\r
**5. \u5F00\u542F redis \u8FDC\u7A0B\u8BBF\u95EE\uFF08\u53EF\u5FFD\u7565\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF09\uFF1A**\r
(1) \u4FEE\u6539 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A\r
\r
-   \u8BBE\u7F6E\u53EF\u8BBF\u95EE\u7684 ip\uFF1A\u4FEE\u6539\u8424\u5149\u5B57\u7684\u6587\u672C\u4E2D\u753B\u5708\u7684 ip \u5730\u5740\u8BA9\u5176\u4ED6\u53EF\u4EE5\u8BBF\u95EE\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228214121699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70)\r
-   \u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F\uFF1A\u5C06\u8424\u5149\u5B57\u6587\u672C\u7684\u201Cyes\u201D\u4FEE\u6539\u4E3A\u201Cno\u201D\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228211505882.png)\r
-   \u8BBE\u7F6E\u5BC6\u7801\uFF1A\u6DFB\u52A0\u8424\u5149\u5B57\u7684\u6587\u672C\u6240\u793A\r
    ![\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0](https://img-blog.csdnimg.cn/20191228205849892.png)\r
\r
(2) \u4FEE\u6539\u5B8C\u540E\u5E94\u5728 redis \u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u547D\u4EE4\`redis-server redis.conf\`\u6765\u68C0\u67E5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u4EA6\u53EF\u68C0\u67E5\u662F\u5426\u51FA\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u907F\u514D\u540E\u7EED\u4E0D\u5FC5\u8981\u7684\u95EE\u9898\r
(3) \u56E0\u4E3A\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u6240\u4EE5\u52BF\u5FC5\u8981\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u7684\u76D1\u542C\uFF1A - \u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A\`firewall-cmd --zone=public --add-port=6379/tcp --permanent\` - \u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\` - \u67E5\u770B\u9632\u706B\u5899\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --list-ports\`\r
**6. \u5F00\u542F\u670D\u52A1\u548C\u5F00\u673A\u81EA\u542F\u52A8\uFF1A**\r
(1) \u5237\u65B0\u670D\u52A1\u914D\u7F6E\uFF1A\`systemctl daemon-reload\`\r
(2) \u5F00\u542F redis: \`systemctl start redis\`\r
(3) \u52A0\u5165\u5F00\u673A\u542F\u52A8\uFF1A\`systemctl enable redis\`\r
\r
### \u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\r
\r
**1. \u5B89\u88C5 gcc\uFF08gcc \u7528\u4E8E\u7F16\u8BD1\u63A5\u4E0B\u6765\u4E0B\u8F7D\u7684 nginx \u6E90\u7801\uFF09**\r
\u4F7F\u7528\`gcc -v\`\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u8BE5\u547D\u4EE4\uFF0C\u5982\u672A\u5B89\u88C5\u5219\u6267\u884C\`yum install gcc-c++\`\r
\r
**2. \u5B89\u88C5 pcre \u548C pcre-devel \u4F9D\u8D56\uFF08nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002\uFF09**\r
\`yum install -y pcre pcre-devel\`\r
\r
**3. \u5B89\u88C5 zlib zlib-devel \u4F9D\u8D56\uFF08zlib \u63D0\u4F9B\u4E86\u5F88\u591A\u538B\u7F29\u548C\u89E3\u65B9\u5F0F\uFF0Cnginx \u9700\u8981 zlib \u5BF9 http \u8FDB\u884C gzip\uFF09**\r
\`yum install -y zlib zlib-devel\`\r
\r
**4. \u5B89\u88C5 openssl openssl-devel\uFF08openssl \u662F\u4E00\u4E2A\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0Cnginx \u8981\u652F\u6301 https \u5C31\u9700\u8981\u5B83\uFF09**\r
\`yum install -y openssl openssl-devel\`\r
\r
**5. \u4E0B\u8F7D nginx \u5E76\u89E3\u538B**\r
\`wget http://nginx.org/download/nginx-1.9.9.tar.gz\`\r
\`tar -zxvf nginx-1.9.9\`\r
\r
**6. \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FFD\u52A0\u5B89\u88C5 ssl \u6A21\u5757**\r
\`./configure --with-http_ssl_module\`\r
\r
**7. \u4F7F\u7528 make \u7F16\u8BD1\u548C\u5B89\u88C5**\r
\`make && make install\`\r
\r
\`\`\`\r
\u6CE8\u610F\uFF1A\u5982\u679C\u5B89\u88C5\u540E\u51FA\u73B0\u4E00\u4E2AMake[1]: Leaving directory \`/usr/local/nginx-1.9.9\`\r
\u5E76\u4E14\u5728nginx-1.9.9\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u5DF2\u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3Anginx\u7684\u6587\u4EF6\u5939\u5373\u53EF\u5FFD\u7565\u8BE5\u9519\u8BEF~\r
\`\`\`\r
\r
**8. \u67E5\u770B nginx \u662F\u5426\u5B89\u88C5\u6210\u529F**\r
(1). \u8FDB\u5165 nginx \u6587\u4EF6\u4E0B\u7684 sbin \u76EE\u5F55\u8F93\u5165\`./nginx -v\`\u67E5\u770B\u7248\u672C\u53F7\r
(2).\u4F7F\u7528\`netstat -ntpl | grep nginx\`\u67E5\u770B\u5F53\u524D nginx \u5360\u7528\u7684\u7AEF\u53E3\u53F7\r
(3). \u4F7F\u7528\`wget 127.0.0.1\`\u6D4B\u8BD5\u8FD4\u56DE\u8868\u793A\u662F\u5426\u6B63\u5E38\r
(4). \u4F7F\u7528\`curl 127.0.0.1\`\u6D4B\u8BD5\u8FD4\u56DE\u9875\u9762\u7684\u503C\u662F\u5426\u6B63\u5E38\r
\r
**9. \u914D\u7F6E nginx \u5F00\u673A\u81EA\u542F\u52A8**\r
(1). \u8FDB\u5165\u76EE\u5F55\`cd /usr/lib/systemd/system\`\r
(2). \u521B\u5EFA nginx.service \u670D\u52A1\u6587\u4EF6\`vi nginx.service\`\r
(3). \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A\r
\r
\`\`\`/\r
[Unit]\r
Description=nginx\r
After=network.target\r
\r
[Service]\r
Type=forking\r
ExecStart=/usr/local/nginx/sbin/nginx\r
ExecReload=/usr/local/nginx/sbin/nginx reload\r
ExecStop=/usr/local/nginx/sbin/nginx quit\r
PrivateTmp=true\r
\r
[Install]\r
WantedBy=multi-user.target\r
\`\`\`\r
\r
(4). \u5F00\u673A\u81EA\u542F\u52A8\uFF1A\`systemctl enable nginx.service\`\r
(5). nginx \u670D\u52A1\u7684\u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F\uFF1A\r
\u542F\u52A8\uFF1A\`systemctl start nginx.service\`\r
\u5173\u95ED\uFF1A\`systemctl stop nginx.service\`\r
\u91CD\u542F\uFF1A\`systemctl restart nginx.service\`\r
\r
**10. \u9632\u706B\u5899\u5F00\u542F http\u3001https \u670D\u52A1\u4EE5\u53CA\u7AEF\u53E3\u76D1\u542C**\r
\u5F00\u542F http \u670D\u52A1\uFF1A\`firewall-cmd --zone=public --add-service=http --permanent\`\r
\u5F00\u542F 80 \u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --add-port=80/tcp --permanent\`\r
\u5F00\u542F https \u670D\u52A1\uFF1A\`firewall-cmd --zone=public --add-service=https --permanent\`\r
\u5F00\u542F 443 \u7AEF\u53E3\uFF1A\`firewall-cmd --zone=public --add-port=443/tcp --permanent\`\r
\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A\`firewall-cmd --reload\`\r
\r
**11. nginx + \u4E00\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A**\r
(1). \u4FEE\u6539\u5B89\u88C5\u540E nginx \u6587\u4EF6\u7684 conf \u76EE\u5F55\u4E0B\u7684 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1A \`vi nginx.conf\`\r
(2). \u627E\u5230\u5E26\u6709# HTTPS Server \u7684\u5B57\u6837\uFF0C\u5C06\u5176\u4E0B\u6587\u672C\u6309\u7167\u4EE5\u4E0B\u6587\u672C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A\r
\r
\`\`\`\\\r
    # HTTPS Server\r
    #\r
    server {\r
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443\r
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D\r
\r
        ssl_certificate      cert/www/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem\r
        ssl_certificate_key  cert/www/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key\r
        ssl   on;\r
\r
        ssl_session_cache    shared:SSL:1m;\r
        ssl_session_timeout  5m;\r
\r
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\r
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\r
        ssl_prefer_server_ciphers  on;\r
\r
        location / {\r
            proxy_pass   http://127.0.0.1:8080; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
            proxy_set_header Host                               $http_addr;\r
            proxy_set_header X-Real-IP                        $remote_addr;\r
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
            root   html;\r
            index  index.html index.htm;\r
        }\r
\r
		# \u914D\u7F6E\u53E6\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528443\u7AEF\u53E3\r
		# location /test {\r
        #    proxy_pass   http://127.0.0.1:9090/test; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
        #    proxy_set_header Host                               $http_addr;\r
        #    proxy_set_header X-Real-IP                        $remote_addr;\r
        #    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
        #    root   html;\r
        #    index  index.html index.htm;\r
		# }\r
    }\r
\`\`\`\r
\r
(3). \u5C06 http \u8BF7\u6C42\u91CD\u5B9A\u5411\u4E3A https \u8BF7\u6C42\uFF0C\u5728\u539F nginx.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u4E3A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF1A\r
\r
\`\`\`/\r
	server {\r
        listen       80;\r
        server_name  www.shnice.club; #\u586B\u5199\u8BBF\u95EE\u7684\u57DF\u540D\r
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps\r
		.....\r
\`\`\`\r
\r
(4). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -t\`\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E\r
(5). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -s reload\`\u52A0\u8F7D\u914D\u7F6E\r
\r
**12\u3001nginx + \u4E8C\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A**\r
(1). \u5728 nginx \u6587\u4EF6\u5939\u4E0B\u4E0B\u521B\u5EFA vhosts \u76EE\u5F55\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A\\*.conf \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B\uFF1A\r
\r
\`\`\`/\r
# HTTP Server\r
#\r
server {\r
        listen 80;\r
        server_name localhost; #\u586B\u5199\u4F60\u8BBF\u95EE\u7684\u57DF\u540D\r
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps\r
\r
        location / {\r
            index index.html index.htm;\r
        }\r
}\r
\r
# HTTPS Server\r
#\r
server {\r
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443\r
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D\r
\r
        ssl_certificate      cert/abc/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem\r
        ssl_certificate_key  cert/abc/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key\r
        ssl   on;\r
\r
        ssl_session_cache    shared:SSL:1m;\r
        ssl_session_timeout  5m;\r
\r
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\r
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\r
        ssl_prefer_server_ciphers  on;\r
\r
        location /abc {\r
            proxy_pass   http://127.0.0.1:8080/abc; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3\r
            proxy_set_header Host                               $http_addr;\r
            proxy_set_header X-Real-IP                        $remote_addr;\r
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\r
            root   html;\r
            index  index.html index.htm;\r
        }\r
}\r
\`\`\`\r
\r
(2). \u5BFC\u5165\u4E8C\u7EA7\u57DF\u540D\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u5230 nginx.conf \u4E2D\uFF1A\r
\u8FDB\u5165 conf \u76EE\u5F55\u4E0B\uFF0C\u5728 nginx.conf \u6587\u4EF6\u4E2D\u7684 http{}\u5305\u88F9\u4E2D\u5904\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A\r
\r
\`\`\`\\\r
	include /usr/local/nginx/vhosts/*;\r
\`\`\`\r
\r
(3). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -t\`\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E\r
(4). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528\`./nginx -s reload\`\u52A0\u8F7D\u914D\u7F6E\r
`,contentRendered:`<!-- more -->
<h3 id="\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</h3>
<p><strong>1. \u521B\u5EFA jdk \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09</strong>
<code v-pre>mkdir -p usr/local/src</code>
<strong>2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D jdk \u5305</strong>
<code v-pre>wget --no-check-certificate --no-cookies --header &quot;Cookie: oraclelicense=accept-securebackup-cookie&quot; http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz</code>
<strong>3. \u89E3\u538B\uFF08\u5982\u4E0B\u64CD\u4F5C\u662F\u5DF2\u7ECF\u8DF3\u5230\u6307\u5B9A\u5B58\u653E jdk \u7684\u76EE\u5F55\u4F4D\u7F6E\uFF09</strong>
<code v-pre>tar -zxvf jdk-8u131-linux-x64.tar.gz</code>
<strong>4. \u91CD\u547D\u540D</strong>
<code v-pre>mv jdk1.8.0_131 jdk1.8</code>
<strong>5. \u914D\u7F6E\u73AF\u5883\u53D8\u91CF</strong>
(1)\u8FDB\u5165\u7CFB\u7EDF\u6587\u4EF6\u547D\u4EE4\u5982\u4E0B\uFF1A<code v-pre>vi /etc/profile</code>
(2)\u6309\u201Cshift+g\u201D\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u6587\u672C\u672B\u5C3E\uFF0C\u518D\u6309\u201Ci\u201D\u6309\u952E\u8FDB\u884C\u7F16\u8F91\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6587\u672C(\u5199\u5B8C\u540E\uFF0C\u6309 ESC \u952E\u9000\u51FA\u7F16\u8F91\u6A21\u5F0F\u5E76\u8F93\u5165\u201C:x\u201D\u4EE5\u4FDD\u5B58\u5E76\u9000\u51FA)\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>export JAVA_HOME=/usr/local/src/jdk1.8
export PATH=$PATH:$JAVA_HOME/bin
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. \u8BA9\u914D\u7F6E\u6587\u4EF6\u751F\u6548\uFF1A</strong><code v-pre>source /etc/profile</code>
<strong>7. \u68C0\u67E5 jdk \u662F\u5426\u914D\u7F6E\u6210\u529F\uFF1A</strong> <code v-pre>java -version</code></p>
<h3 id="\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981" aria-hidden="true">#</a> \u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09</h3>
<p><strong>1. \u521B\u5EFA tomcat \u5B89\u88C5\u76EE\u5F55\uFF08\u521B\u5EFA\u8FC7\u5219\u8DF3\u8F6C\u5373\u53EF\uFF09</strong></p>
<p><strong>2. \u4F7F\u7528 wget \u4E0B\u8F7D tomcat</strong></p>
<p><strong>3. \u89E3\u538B</strong></p>
<p><strong>4. \u542F\u52A8 tomcat</strong></p>
<p><strong>5. \u4FEE\u6539 tomcat \u7AEF\u53E3</strong></p>
<p><strong>6. \u6D4B\u8BD5\u8BBF\u95EE</strong></p>
<h3 id="\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong><em>\u6CE8\u610F\uFF1A\u9664\u4E86\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 3306 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 3306 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09</em></strong></p>
<p><strong>1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B</strong></p>
<p><strong>2. \u4E0B\u8F7D mysql \u5E76\u542F\u52A8\u670D\u52A1</strong>
(1)\u4F7F\u7528 wget \u4E0B\u8F7D mysql \u6E90\u5305\u5E76\u7528 yum \u5B89\u88C5\uFF1A
<code v-pre>\u4E0B\u8F7D\uFF1A wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm</code>
<code v-pre>\u5B89\u88C5\uFF1A yum -y localinstall mysql57-community-release-el7-11.noarch.rpm</code>
(3)\u5728\u7EBF\u5B89\u88C5 Mysql\uFF1A<code v-pre>yum -y install mysql-community-server</code>
(4)\u542F\u52A8\u670D\u52A1\uFF1A<code v-pre>systemctl start mysqld</code>
(5)\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8\uFF1A
<code v-pre>systemctl enable mysqld</code>
<code v-pre>systemctl deaemon-reload</code></p>
<p><strong>3. \u4FEE\u6539\u672C\u5730\u767B\u5F55\u5BC6\u7801</strong>
(1) \u901A\u8FC7<code v-pre>vi /var/log/mysqld.log</code>\u8FDB\u5165\u8BE5\u6587\u4EF6\u4E2D\u627E\u5230\u6807\u9EC4\u8FD9\u6BB5\uFF0C\u800C\u7EA2\u8272\u5708\u4FBF\u662F\u9ED8\u8BA4\u767B\u9646\u5BC6\u7801\uFF1A
<img src="https://img-blog.csdnimg.cn/20191227220213561.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0">
(2)\u901A\u8FC7\u4EE5\u4E0A\u5F97\u5230\u7684\u5BC6\u7801\u767B\u5F55\u547D\u4EE4<code v-pre>mysql -u root -p</code> \uFF0C\u5373\u53EF\u8FDB\u5165 mysql \u4E2D\u3002\u4E0B\u9762\u5219\u662F\u4FEE\u6539\u5BC6\u7801\uFF1A
<code v-pre>mysql&gt; alter user 'root'@'localhost' identified by 'Qq88888.';</code></p>
<p><strong>4. \u8BBE\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF08\u9ED8\u8BA4\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55\uFF09\uFF0C\u5F00\u542F\u8FDC\u7A0B\u767B\u5F55\u524D\u63D0\u8981\u4FDD\u8BC1\u5F00\u542F\u9632\u706B\u5899\uFF0C\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A</strong>
(1)\u5141\u8BB8\u8BE5\u8D26\u53F7\u80FD\u591F\u88AB\u8FDC\u7A0B\u767B\u5F55\uFF1A <code v-pre> mysql&gt; grant all privileges on *.* to 'root'@'%' identified by 'Qq88888.' with grant option;</code>
(2)\u67E5\u770B\u9632\u706B\u5899\u662F\u5426\u5F00\u542F\uFF1A <code v-pre>firewall-cmd --state</code>
(3)\u5F00\u542F\u9632\u706B\u5899\uFF1A <code v-pre>systemctl start firewalld.service</code> - \u5173\u95ED\u9632\u706B\u5899: <code v-pre>systemctl stop firewalld.service</code> - \u7981\u7528\u9632\u706B\u5899: <code v-pre>systemctl disable firewalld.service</code> - \u67E5\u770B\u9632\u706B\u5899\u76D1\u542C\u7684\u7AEF\u53E3: <code v-pre>firewall-cmd --list-port</code>
(4)\u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=3306/tcp --permanent</code>
(5)\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code></p>
<p><strong>5. \u914D\u7F6E my.cnf</strong>
\u8FDB\u5165<code v-pre>vi /etc/my.cnf</code>\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u672C\u6587\u8FDB\u884C\u7F16\u7801\u8BBE\u7F6E\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>character_set_server=utf8
init_connect='SET NAMES utf8'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. \u91CD\u542F\u52A8 mysql</strong>
<code v-pre>systemctl restart mysqld</code></p>
<h3 id="\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong><em>\u6CE8\u610F\uFF1A\u540C\u4E0A\u5728\u7CFB\u7EDF\u4E2D\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u5916\uFF0C\u8FD8\u9700\u8981\u5728\u963F\u91CC\u4E91\u670D\u52A1\u5668\u63A7\u5236\u53F0\u4E2D\u5BF9\u5F53\u524D\u7684 ecs \u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A 6379 \u7AEF\u53E3\u53EF\u5BF9\u5916\u76D1\u542C\u7684\u5B89\u5168\u7EC4\u89C4\u5219\uFF0C\u8FD9\u662F\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u53E6\u4E00\u5C42\u865A\u62DF\u9632\u706B\u5899\uFF08\u5B89\u5168\u7B56\u7565\uFF09</em></strong></p>
<p><strong>1. \u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF08\u8FD9\u91CC\u4E0D\u505A\u8BE6\u8BF4\uFF09\uFF1B</strong></p>
<p><strong>2. \u4F7F\u7528 wget \u547D\u4EE4\u4E0B\u8F7D redis\uFF1A</strong><code v-pre>wget http://download.redis.io/releases/redis-4.0.8.tar.gz</code></p>
<p><strong>3. \u89E3\u538B\u3001\u7F16\u8BD1\u548C\u5B89\u88C5\uFF1A</strong>
(1) \u89E3\u538B\uFF1A<code v-pre>tar -zxvf redis-4.0.8.tar.gz</code>
(2) \u5B8C\u6210\u540E\u8FDB\u5165\u89E3\u538B\u7684 redis-4.0.8 \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 make \u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF1A<code v-pre>make</code>
(3) \u5B89\u88C5\uFF1A<code v-pre>make install</code></p>
<p><strong>4. \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8</strong>
(1) \u521B\u5EFA\u65B0\u76EE\u5F55\uFF1A<code v-pre>mkdir -p /usr/local/redis</code>
(2) \u5C06/usr/local/src/redis-4.0.8/src \u76EE\u5F55\u4E0B\u7684 redis-server\u3001redis-cli \u548C/usr/local/src/redis-4.0.8 \u76EE\u5F55\u4E0B\u7684 redis.conf \u6587\u4EF6\u62F7\u8D1D\u5230\u521B\u5EFA\u7684\u76EE\u5F55\u4E2D\uFF1A
<code v-pre>cp redis-server /usr/local/redis</code>
<code v-pre>cp redis-cli /usr/local/redis</code>
<code v-pre>cp ../redis.conf /usr/local/redis</code>
(3)\u5F00\u542F\u540E\u53F0\u8FD0\u884C\uFF0C\u4FEE\u6539\u62F7\u8D1D\u7684 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF1A<code v-pre>vi /usr/local/redis/redis.conf</code></p>
<ul>
<li>\u5C06\u8424\u5149\u5B57\u4E0A\u7684\u201Cno\u201D\u8BE5\u4E3A\u201Cyes\u201D\uFF1A <img src="https://img-blog.csdnimg.cn/2019122819072660.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
</ul>
<p>(4) \u521B\u5EFA\u670D\u52A1\u6587\u4EF6 redis.service\uFF1A<code v-pre>vi /usr/lib/systemd/system/redis.service</code>
\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u5185\u5BB9\u4E2D\u7684\u8DEF\u5F84\u4EE5\u5B9E\u9645\u5404\u5F02\uFF09\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>	[Unit]
	Description=The redis-server Process Manager
	After=syslog.target network.target

	[Service]
	Type=simple
	PIDFile=/var/run/redis_6379.pid
	ExecStart=/usr/local/redis/redis-server /usr/local/redis/redis.conf
	ExecReload=/bin/kill -USR2 $MAINPID
	ExecStop=/bin/kill -SIGINT $MAINPID

	[Install]
	WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. \u5F00\u542F redis \u8FDC\u7A0B\u8BBF\u95EE\uFF08\u53EF\u5FFD\u7565\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF09\uFF1A</strong>
(1) \u4FEE\u6539 redis.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A</p>
<ul>
<li>\u8BBE\u7F6E\u53EF\u8BBF\u95EE\u7684 ip\uFF1A\u4FEE\u6539\u8424\u5149\u5B57\u7684\u6587\u672C\u4E2D\u753B\u5708\u7684 ip \u5730\u5740\u8BA9\u5176\u4ED6\u53EF\u4EE5\u8BBF\u95EE
<img src="https://img-blog.csdnimg.cn/20191228214121699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzI2MDIzOA==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
<li>\u5173\u95ED\u4FDD\u62A4\u6A21\u5F0F\uFF1A\u5C06\u8424\u5149\u5B57\u6587\u672C\u7684\u201Cyes\u201D\u4FEE\u6539\u4E3A\u201Cno\u201D
<img src="https://img-blog.csdnimg.cn/20191228211505882.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
<li>\u8BBE\u7F6E\u5BC6\u7801\uFF1A\u6DFB\u52A0\u8424\u5149\u5B57\u7684\u6587\u672C\u6240\u793A
<img src="https://img-blog.csdnimg.cn/20191228205849892.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li>
</ul>
<p>(2) \u4FEE\u6539\u5B8C\u540E\u5E94\u5728 redis \u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528\u547D\u4EE4<code v-pre>redis-server redis.conf</code>\u6765\u68C0\u67E5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u4EA6\u53EF\u68C0\u67E5\u662F\u5426\u51FA\u73B0\u4FEE\u6539\u9519\u8BEF\uFF0C\u907F\u514D\u540E\u7EED\u4E0D\u5FC5\u8981\u7684\u95EE\u9898
(3) \u56E0\u4E3A\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u6240\u4EE5\u52BF\u5FC5\u8981\u8BA9\u9632\u706B\u5899\u5F00\u653E 6379 \u7AEF\u53E3\u7684\u76D1\u542C\uFF1A - \u5F00\u653E 3306 \u7AEF\u53E3\u76D1\u542C\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=6379/tcp --permanent</code> - \u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code> - \u67E5\u770B\u9632\u706B\u5899\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --list-ports</code>
<strong>6. \u5F00\u542F\u670D\u52A1\u548C\u5F00\u673A\u81EA\u542F\u52A8\uFF1A</strong>
(1) \u5237\u65B0\u670D\u52A1\u914D\u7F6E\uFF1A<code v-pre>systemctl daemon-reload</code>
(2) \u5F00\u542F redis: <code v-pre>systemctl start redis</code>
(3) \u52A0\u5165\u5F00\u673A\u542F\u52A8\uFF1A<code v-pre>systemctl enable redis</code></p>
<h3 id="\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> \u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h3>
<p><strong>1. \u5B89\u88C5 gcc\uFF08gcc \u7528\u4E8E\u7F16\u8BD1\u63A5\u4E0B\u6765\u4E0B\u8F7D\u7684 nginx \u6E90\u7801\uFF09</strong>
\u4F7F\u7528<code v-pre>gcc -v</code>\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u8BE5\u547D\u4EE4\uFF0C\u5982\u672A\u5B89\u88C5\u5219\u6267\u884C<code v-pre>yum install gcc-c++</code></p>
<p><strong>2. \u5B89\u88C5 pcre \u548C pcre-devel \u4F9D\u8D56\uFF08nginx \u7684 http \u6A21\u5757\u4F7F\u7528 pcre \u6765\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cpcre-devel \u662F\u4F7F\u7528 pcre \u5F00\u53D1\u7684\u4E00\u4E2A\u4E8C\u6B21\u5F00\u53D1\u5E93\u3002\uFF09</strong>
<code v-pre>yum install -y pcre pcre-devel</code></p>
<p><strong>3. \u5B89\u88C5 zlib zlib-devel \u4F9D\u8D56\uFF08zlib \u63D0\u4F9B\u4E86\u5F88\u591A\u538B\u7F29\u548C\u89E3\u65B9\u5F0F\uFF0Cnginx \u9700\u8981 zlib \u5BF9 http \u8FDB\u884C gzip\uFF09</strong>
<code v-pre>yum install -y zlib zlib-devel</code></p>
<p><strong>4. \u5B89\u88C5 openssl openssl-devel\uFF08openssl \u662F\u4E00\u4E2A\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u5BC6\u7801\u5E93\uFF0Cnginx \u8981\u652F\u6301 https \u5C31\u9700\u8981\u5B83\uFF09</strong>
<code v-pre>yum install -y openssl openssl-devel</code></p>
<p><strong>5. \u4E0B\u8F7D nginx \u5E76\u89E3\u538B</strong>
<code v-pre>wget http://nginx.org/download/nginx-1.9.9.tar.gz</code>
<code v-pre>tar -zxvf nginx-1.9.9</code></p>
<p><strong>6. \u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FFD\u52A0\u5B89\u88C5 ssl \u6A21\u5757</strong>
<code v-pre>./configure --with-http_ssl_module</code></p>
<p><strong>7. \u4F7F\u7528 make \u7F16\u8BD1\u548C\u5B89\u88C5</strong>
<code v-pre>make &amp;&amp; make install</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>\u6CE8\u610F\uFF1A\u5982\u679C\u5B89\u88C5\u540E\u51FA\u73B0\u4E00\u4E2AMake[1]: Leaving directory \`/usr/local/nginx-1.9.9\`
\u5E76\u4E14\u5728nginx-1.9.9\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u5DF2\u5B89\u88C5\u4E86\u4E00\u4E2A\u540D\u4E3Anginx\u7684\u6587\u4EF6\u5939\u5373\u53EF\u5FFD\u7565\u8BE5\u9519\u8BEF~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>8. \u67E5\u770B nginx \u662F\u5426\u5B89\u88C5\u6210\u529F</strong>
(1). \u8FDB\u5165 nginx \u6587\u4EF6\u4E0B\u7684 sbin \u76EE\u5F55\u8F93\u5165<code v-pre>./nginx -v</code>\u67E5\u770B\u7248\u672C\u53F7
(2).\u4F7F\u7528<code v-pre>netstat -ntpl | grep nginx</code>\u67E5\u770B\u5F53\u524D nginx \u5360\u7528\u7684\u7AEF\u53E3\u53F7
(3). \u4F7F\u7528<code v-pre>wget 127.0.0.1</code>\u6D4B\u8BD5\u8FD4\u56DE\u8868\u793A\u662F\u5426\u6B63\u5E38
(4). \u4F7F\u7528<code v-pre>curl 127.0.0.1</code>\u6D4B\u8BD5\u8FD4\u56DE\u9875\u9762\u7684\u503C\u662F\u5426\u6B63\u5E38</p>
<p><strong>9. \u914D\u7F6E nginx \u5F00\u673A\u81EA\u542F\u52A8</strong>
(1). \u8FDB\u5165\u76EE\u5F55<code v-pre>cd /usr/lib/systemd/system</code>
(2). \u521B\u5EFA nginx.service \u670D\u52A1\u6587\u4EF6<code v-pre>vi nginx.service</code>
(3). \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>[Unit]
Description=nginx
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx reload
ExecStop=/usr/local/nginx/sbin/nginx quit
PrivateTmp=true

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4). \u5F00\u673A\u81EA\u542F\u52A8\uFF1A<code v-pre>systemctl enable nginx.service</code>
(5). nginx \u670D\u52A1\u7684\u542F\u52A8\u3001\u5173\u95ED\u548C\u91CD\u542F\uFF1A
\u542F\u52A8\uFF1A<code v-pre>systemctl start nginx.service</code>
\u5173\u95ED\uFF1A<code v-pre>systemctl stop nginx.service</code>
\u91CD\u542F\uFF1A<code v-pre>systemctl restart nginx.service</code></p>
<p><strong>10. \u9632\u706B\u5899\u5F00\u542F http\u3001https \u670D\u52A1\u4EE5\u53CA\u7AEF\u53E3\u76D1\u542C</strong>
\u5F00\u542F http \u670D\u52A1\uFF1A<code v-pre>firewall-cmd --zone=public --add-service=http --permanent</code>
\u5F00\u542F 80 \u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=80/tcp --permanent</code>
\u5F00\u542F https \u670D\u52A1\uFF1A<code v-pre>firewall-cmd --zone=public --add-service=https --permanent</code>
\u5F00\u542F 443 \u7AEF\u53E3\uFF1A<code v-pre>firewall-cmd --zone=public --add-port=443/tcp --permanent</code>
\u5237\u65B0\u9632\u706B\u5899\u8BBE\u7F6E\uFF1A<code v-pre>firewall-cmd --reload</code></p>
<p><strong>11. nginx + \u4E00\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A</strong>
(1). \u4FEE\u6539\u5B89\u88C5\u540E nginx \u6587\u4EF6\u7684 conf \u76EE\u5F55\u4E0B\u7684 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1A <code v-pre>vi nginx.conf</code>
(2). \u627E\u5230\u5E26\u6709# HTTPS Server \u7684\u5B57\u6837\uFF0C\u5C06\u5176\u4E0B\u6587\u672C\u6309\u7167\u4EE5\u4E0B\u6587\u672C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A</p>
<div class="language-\\ ext-\\ line-numbers-mode"><pre v-pre class="language-\\"><code>    # HTTPS Server
    #
    server {
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D

        ssl_certificate      cert/www/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem
        ssl_certificate_key  cert/www/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key
        ssl   on;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

        location / {
            proxy_pass   http://127.0.0.1:8080; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
            proxy_set_header Host                               $http_addr;
            proxy_set_header X-Real-IP                        $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            root   html;
            index  index.html index.htm;
        }

		# \u914D\u7F6E\u53E6\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528443\u7AEF\u53E3
		# location /test {
        #    proxy_pass   http://127.0.0.1:9090/test; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
        #    proxy_set_header Host                               $http_addr;
        #    proxy_set_header X-Real-IP                        $remote_addr;
        #    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        #    root   html;
        #    index  index.html index.htm;
		# }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3). \u5C06 http \u8BF7\u6C42\u91CD\u5B9A\u5411\u4E3A https \u8BF7\u6C42\uFF0C\u5728\u539F nginx.conf \u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u4E3A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code>	server {
        listen       80;
        server_name  www.shnice.club; #\u586B\u5199\u8BBF\u95EE\u7684\u57DF\u540D
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps
		.....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -t</code>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E
(5). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -s reload</code>\u52A0\u8F7D\u914D\u7F6E</p>
<p><strong>12\u3001nginx + \u4E8C\u7EA7\u57DF\u540D + https \u652F\u6301\u7684\u914D\u7F6E\uFF1A</strong>
(1). \u5728 nginx \u6587\u4EF6\u5939\u4E0B\u4E0B\u521B\u5EFA vhosts \u76EE\u5F55\uFF0C\u63A5\u7740\u521B\u5EFA\u4E00\u4E2A*.conf \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5185\u5BB9\u5982\u4E0B\uFF1A</p>
<div class="language-/ ext-/ line-numbers-mode"><pre v-pre class="language-/"><code># HTTP Server
#
server {
        listen 80;
        server_name localhost; #\u586B\u5199\u4F60\u8BBF\u95EE\u7684\u57DF\u540D
        rewrite ^(.*) https://$server_name$1 permanent; #\u5C06http\u8BBF\u95EE\u91CD\u5B9A\u5411\u4E3Ahttps

        location / {
            index index.html index.htm;
        }
}

# HTTPS Server
#
server {
        listen       443 ssl;   #ssl\u534F\u8BAE\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7443
        server_name  localhost;   #\u5C06localhost\u4FEE\u6539\u4E3Assl\u8BC1\u4E66\u6240\u7ED1\u5B9A\u7684\u57DF\u540D

        ssl_certificate      cert/abc/cert.pem;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66pem
        ssl_certificate_key  cert/abc/cert.key;	#\u57DF\u540D\u7684\u7ED1\u5B9A\u7684ssl\u8BC1\u4E66key
        ssl   on;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers  on;

        location /abc {
            proxy_pass   http://127.0.0.1:8080/abc; #\u8FD9\u91CC\u586B\u5199\u9879\u76EE\u7684\u8BBF\u95EE\u5730\u5740\u4EE5\u53CA\u7AEF\u53E3
            proxy_set_header Host                               $http_addr;
            proxy_set_header X-Real-IP                        $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            root   html;
            index  index.html index.htm;
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2). \u5BFC\u5165\u4E8C\u7EA7\u57DF\u540D\u6240\u5728\u7684\u914D\u7F6E\u6587\u4EF6\u5230 nginx.conf \u4E2D\uFF1A
\u8FDB\u5165 conf \u76EE\u5F55\u4E0B\uFF0C\u5728 nginx.conf \u6587\u4EF6\u4E2D\u7684 http{}\u5305\u88F9\u4E2D\u5904\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="language-\\ ext-\\ line-numbers-mode"><pre v-pre class="language-\\"><code>	include /usr/local/nginx/vhosts/*;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3). \u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u8FDB\u5165 nginx \u7684 sbin \u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -t</code>\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u4FEE\u6539\u6B63\u786E
(4). \u6D4B\u8BD5\u6210\u529F\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u4F7F\u7528<code v-pre>./nginx -s reload</code>\u52A0\u8F7D\u914D\u7F6E</p>
`,date:"2022-07-12",deps:[],hoistedTags:[],links:[],pathInferred:"/20220711/2.html",pathLocale:"/",permalink:null,routeMeta:{title:"Centos7\u73AF\u5883\u642D\u5EFA"},slug:"2",filePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/20220711/2.md",filePathRelative:"20220711/2.md",componentFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/2.html.vue",componentFilePathRelative:"pages/20220711/2.html.vue",componentFileChunkName:"v-e5cc5690",dataFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/.temp/pages/20220711/2.html.js",dataFilePathRelative:"pages/20220711/2.html.js",dataFileChunkName:"v-e5cc5690",htmlFilePath:"E:/\u5F00\u53D1PROJECT/\u5B9E\u9645\u9879\u76EE/ibw-blog/docs/.vuepress/dist/20220711/2.html",htmlFilePathRelative:"20220711/2.html"}],length:1,label:"redis"}},layout:"Categories"}};async function Wl(){const e=n1(()=>Gl),t=n1(()=>Nl),n=n1(()=>Ul);w2(Fr,e),w2(Ir,n),w2(Pt,t)}var Jl=k2({setup(){Wl()}}),Kl=k2({enhance({app:e}){const t=Wo(),n=e._context.provides[o0],l=n1(()=>Jo(t.value,n.value));e.provide(vr,l),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return l.value}}})}});const Zl=(e,t)=>t.some(n=>{if(H1(n))return n===e.key;const{key:l,ctrl:i=!1,shift:a=!1,alt:d=!1}=n;return l===e.key&&i===e.ctrlKey&&a===e.shiftKey&&d===e.altKey}),Xl=/[^\x00-\x7F]/,Ql=e=>e.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t),G4=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),N4=(e,t)=>{const n=t.join(" "),l=Ql(e);if(Xl.test(e))return l.some(d=>n.toLowerCase().indexOf(d)>-1);const i=e.endsWith(" ");return new RegExp(l.map((d,w)=>l.length===w+1&&!i?`(?=.*\\b${G4(d)})`:`(?=.*\\b${G4(d)}\\b)`).join("")+".+","gi").test(n)},Yl=({input:e,hotKeys:t})=>{if(t.value.length===0)return;const n=l=>{!e.value||Zl(l,t.value)&&!e.value.contains(l.target)&&(l.preventDefault(),e.value.focus())};r2(()=>{document.addEventListener("keydown",n)}),oe(()=>{document.removeEventListener("keydown",n)})},e9=[{title:"",headers:[],path:"/",pathLocale:"/",extraFields:[]},{title:"Vuepress\u4F7F\u7528\u6307\u5357(reco)",headers:[{level:3,title:"markdown \u6B63\u6587",slug:"markdown-\u6B63\u6587",children:[]}],path:"/20220711/1.html",pathLocale:"/",extraFields:[]},{title:"Centos7\u73AF\u5883\u642D\u5EFA",headers:[{level:3,title:"\u4E00\u3001\u5B89\u88C5 JDK \u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",slug:"\u4E00\u3001\u5B89\u88C5-jdk-\u548C\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",children:[]},{level:3,title:"\u4E8C\u3001Tomcat \u7684\u5B89\u88C5\u53CA\u914D\u7F6E\uFF08\u6682\u672A\u9700\u8981\uFF09",slug:"\u4E8C\u3001tomcat-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E-\u6682\u672A\u9700\u8981",children:[]},{level:3,title:"\u4E09\u3001Mysql \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E09\u3001mysql-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u56DB\u3001Reids \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u56DB\u3001reids-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]},{level:3,title:"\u4E94\u3001Nginx \u7684\u5B89\u88C5\u53CA\u914D\u7F6E",slug:"\u4E94\u3001nginx-\u7684\u5B89\u88C5\u53CA\u914D\u7F6E",children:[]}],path:"/20220711/2.html",pathLocale:"/",extraFields:[]},{title:"vscode\u81EA\u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5",headers:[],path:"/20220711/3.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/categories/Linux/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/categories/Vscode/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/vuepress/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/java/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/mysql/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/redis/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/timeline/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/1/",pathLocale:"/",extraFields:[]}],qr=Y(e9),t9=()=>qr;Ke.webpackHot&&(__VUE_HMR_RUNTIME__.updateSearchIndex=e=>{qr.value=e});const n9=({searchIndex:e,routeLocale:t,query:n,maxSuggestions:l})=>{const i=n1(()=>e.value.filter(a=>a.pathLocale===t.value));return n1(()=>{const a=n.value.trim().toLowerCase();if(!a)return[];const d=[],w=(_,p)=>{N4(a,[p.title])&&d.push({link:`${_.path}#${p.slug}`,title:_.title,header:p.title});for(const v of p.children){if(d.length>=l.value)return;w(_,v)}};for(const _ of i.value){if(d.length>=l.value)break;if(N4(a,[_.title,..._.extraFields])){d.push({link:_.path,title:_.title});continue}for(const p of _.headers){if(d.length>=l.value)break;w(_,p)}}return d})},r9=e=>{const t=Y(0);return{focusIndex:t,focusNext:()=>{t.value<e.value.length-1?t.value+=1:t.value=0},focusPrev:()=>{t.value>0?t.value-=1:t.value=e.value.length-1}}},c9=s({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(e){const{locales:t,hotKeys:n,maxSuggestions:l}=$3(e),i=C3(),a=hr(),d=t9(),w=Y(null),_=Y(!1),p=Y(""),v=n1(()=>{var b;return(b=t.value[a.value])!=null?b:{}}),g=n9({searchIndex:d,routeLocale:a,query:p,maxSuggestions:l}),{focusIndex:u,focusNext:x,focusPrev:k}=r9(g);Yl({input:w,hotKeys:n});const C=n1(()=>_.value&&!!g.value.length),B=()=>{!C.value||k()},f=()=>{!C.value||x()},M=b=>{if(!C.value)return;const y=g.value[b];!y||i.push(y.link).then(()=>{p.value="",u.value=0})};return()=>G("form",{class:"search-box",role:"search"},[G("input",{ref:w,type:"search",placeholder:v.value.placeholder,autocomplete:"off",spellcheck:!1,value:p.value,onFocus:()=>_.value=!0,onBlur:()=>_.value=!1,onInput:b=>p.value=b.target.value,onKeydown:b=>{switch(b.key){case"ArrowUp":{B();break}case"ArrowDown":{f();break}case"Enter":{b.preventDefault(),M(u.value);break}}}}),C.value&&G("ul",{class:"suggestions",onMouseleave:()=>u.value=-1},g.value.map(({link:b,title:y,header:A},I)=>G("li",{class:["suggestion",{focus:u.value===I}],onMouseenter:()=>u.value=I,onMousedown:()=>M(I)},G("a",{href:b,onClick:K=>K.preventDefault()},[G("span",{class:"page-title"},y),A&&G("span",{class:"page-header"},`> ${A}`)]))))])}});const o9={},s9=["s","/"],l9=5;var i9=k2({enhance({app:e}){e.component("SearchBox",t=>G(c9,{locales:o9,hotKeys:s9,maxSuggestions:l9,...t}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT