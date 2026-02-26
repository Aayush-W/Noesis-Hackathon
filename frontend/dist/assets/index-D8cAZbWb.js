function iE(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var MU=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var cx={exports:{}},Qu={},ux={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zl=Symbol.for("react.element"),sE=Symbol.for("react.portal"),aE=Symbol.for("react.fragment"),oE=Symbol.for("react.strict_mode"),lE=Symbol.for("react.profiler"),cE=Symbol.for("react.provider"),uE=Symbol.for("react.context"),fE=Symbol.for("react.forward_ref"),dE=Symbol.for("react.suspense"),hE=Symbol.for("react.memo"),pE=Symbol.for("react.lazy"),i0=Symbol.iterator;function mE(n){return n===null||typeof n!="object"?null:(n=i0&&n[i0]||n["@@iterator"],typeof n=="function"?n:null)}var fx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dx=Object.assign,hx={};function _o(n,e,t){this.props=n,this.context=e,this.refs=hx,this.updater=t||fx}_o.prototype.isReactComponent={};_o.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};_o.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function px(){}px.prototype=_o.prototype;function fm(n,e,t){this.props=n,this.context=e,this.refs=hx,this.updater=t||fx}var dm=fm.prototype=new px;dm.constructor=fm;dx(dm,_o.prototype);dm.isPureReactComponent=!0;var r0=Array.isArray,mx=Object.prototype.hasOwnProperty,hm={current:null},gx={key:!0,ref:!0,__self:!0,__source:!0};function _x(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)mx.call(e,i)&&!gx.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:zl,type:n,key:s,ref:a,props:r,_owner:hm.current}}function gE(n,e){return{$$typeof:zl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function pm(n){return typeof n=="object"&&n!==null&&n.$$typeof===zl}function _E(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var s0=/\/+/g;function Ff(n,e){return typeof n=="object"&&n!==null&&n.key!=null?_E(""+n.key):e.toString(36)}function Xc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case zl:case sE:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+Ff(a,0):i,r0(r)?(t="",n!=null&&(t=n.replace(s0,"$&/")+"/"),Xc(r,e,t,"",function(c){return c})):r!=null&&(pm(r)&&(r=gE(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(s0,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",r0(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+Ff(s,o);a+=Xc(s,e,t,l,r)}else if(l=mE(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+Ff(s,o++),a+=Xc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function sc(n,e,t){if(n==null)return n;var i=[],r=0;return Xc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function vE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Tn={current:null},qc={transition:null},xE={ReactCurrentDispatcher:Tn,ReactCurrentBatchConfig:qc,ReactCurrentOwner:hm};function vx(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:sc,forEach:function(n,e,t){sc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return sc(n,function(){e++}),e},toArray:function(n){return sc(n,function(e){return e})||[]},only:function(n){if(!pm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Xe.Component=_o;Xe.Fragment=aE;Xe.Profiler=lE;Xe.PureComponent=fm;Xe.StrictMode=oE;Xe.Suspense=dE;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xE;Xe.act=vx;Xe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=dx({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=hm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)mx.call(e,l)&&!gx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:zl,type:n.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(n){return n={$$typeof:uE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:cE,_context:n},n.Consumer=n};Xe.createElement=_x;Xe.createFactory=function(n){var e=_x.bind(null,n);return e.type=n,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(n){return{$$typeof:fE,render:n}};Xe.isValidElement=pm;Xe.lazy=function(n){return{$$typeof:pE,_payload:{_status:-1,_result:n},_init:vE}};Xe.memo=function(n,e){return{$$typeof:hE,type:n,compare:e===void 0?null:e}};Xe.startTransition=function(n){var e=qc.transition;qc.transition={};try{n()}finally{qc.transition=e}};Xe.unstable_act=vx;Xe.useCallback=function(n,e){return Tn.current.useCallback(n,e)};Xe.useContext=function(n){return Tn.current.useContext(n)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(n){return Tn.current.useDeferredValue(n)};Xe.useEffect=function(n,e){return Tn.current.useEffect(n,e)};Xe.useId=function(){return Tn.current.useId()};Xe.useImperativeHandle=function(n,e,t){return Tn.current.useImperativeHandle(n,e,t)};Xe.useInsertionEffect=function(n,e){return Tn.current.useInsertionEffect(n,e)};Xe.useLayoutEffect=function(n,e){return Tn.current.useLayoutEffect(n,e)};Xe.useMemo=function(n,e){return Tn.current.useMemo(n,e)};Xe.useReducer=function(n,e,t){return Tn.current.useReducer(n,e,t)};Xe.useRef=function(n){return Tn.current.useRef(n)};Xe.useState=function(n){return Tn.current.useState(n)};Xe.useSyncExternalStore=function(n,e,t){return Tn.current.useSyncExternalStore(n,e,t)};Xe.useTransition=function(){return Tn.current.useTransition()};Xe.version="18.3.1";ux.exports=Xe;var Z=ux.exports;const xx=rE(Z),yE=iE({__proto__:null,default:xx},[Z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SE=Z,ME=Symbol.for("react.element"),EE=Symbol.for("react.fragment"),TE=Object.prototype.hasOwnProperty,wE=SE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,AE={key:!0,ref:!0,__self:!0,__source:!0};function yx(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)TE.call(e,i)&&!AE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ME,type:n,key:s,ref:a,props:r,_owner:wE.current}}Qu.Fragment=EE;Qu.jsx=yx;Qu.jsxs=yx;cx.exports=Qu;var A=cx.exports,nh={},Sx={exports:{}},ni={},Mx={exports:{}},Ex={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(F,W){var Q=F.length;F.push(W);e:for(;0<Q;){var te=Q-1>>>1,ne=F[te];if(0<r(ne,W))F[te]=W,F[Q]=ne,Q=te;else break e}}function t(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var W=F[0],Q=F.pop();if(Q!==W){F[0]=Q;e:for(var te=0,ne=F.length,we=ne>>>1;te<we;){var De=2*(te+1)-1,Oe=F[De],Y=De+1,re=F[Y];if(0>r(Oe,Q))Y<ne&&0>r(re,Oe)?(F[te]=re,F[Y]=Q,te=Y):(F[te]=Oe,F[De]=Q,te=De);else if(Y<ne&&0>r(re,Q))F[te]=re,F[Y]=Q,te=Y;else break e}}return W}function r(F,W){var Q=F.sortIndex-W.sortIndex;return Q!==0?Q:F.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,f=null,d=3,g=!1,p=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(F){for(var W=t(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=F)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=t(c)}}function S(F){if(v=!1,x(F),!p)if(t(l)!==null)p=!0,D(E);else{var W=t(c);W!==null&&k(S,W.startTime-F)}}function E(F,W){p=!1,v&&(v=!1,h(y),y=-1),g=!0;var Q=d;try{for(x(W),f=t(l);f!==null&&(!(f.expirationTime>W)||F&&!P());){var te=f.callback;if(typeof te=="function"){f.callback=null,d=f.priorityLevel;var ne=te(f.expirationTime<=W);W=n.unstable_now(),typeof ne=="function"?f.callback=ne:f===t(l)&&i(l),x(W)}else i(l);f=t(l)}if(f!==null)var we=!0;else{var De=t(c);De!==null&&k(S,De.startTime-W),we=!1}return we}finally{f=null,d=Q,g=!1}}var w=!1,C=null,y=-1,M=5,N=-1;function P(){return!(n.unstable_now()-N<M)}function L(){if(C!==null){var F=n.unstable_now();N=F;var W=!0;try{W=C(!0,F)}finally{W?U():(w=!1,C=null)}}else w=!1}var U;if(typeof _=="function")U=function(){_(L)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,z=B.port2;B.port1.onmessage=L,U=function(){z.postMessage(null)}}else U=function(){m(L,0)};function D(F){C=F,w||(w=!0,U())}function k(F,W){y=m(function(){F(n.unstable_now())},W)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(F){F.callback=null},n.unstable_continueExecution=function(){p||g||(p=!0,D(E))},n.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<F?Math.floor(1e3/F):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(F){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var Q=d;d=W;try{return F()}finally{d=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(F,W){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Q=d;d=F;try{return W()}finally{d=Q}},n.unstable_scheduleCallback=function(F,W,Q){var te=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?te+Q:te):Q=te,F){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=Q+ne,F={id:u++,callback:W,priorityLevel:F,startTime:Q,expirationTime:ne,sortIndex:-1},Q>te?(F.sortIndex=Q,e(c,F),t(l)===null&&F===t(c)&&(v?(h(y),y=-1):v=!0,k(S,Q-te))):(F.sortIndex=ne,e(l,F),p||g||(p=!0,D(E))),F},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(F){var W=d;return function(){var Q=d;d=W;try{return F.apply(this,arguments)}finally{d=Q}}}})(Ex);Mx.exports=Ex;var CE=Mx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bE=Z,Qn=CE;function se(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tx=new Set,ul={};function na(n,e){Za(n,e),Za(n+"Capture",e)}function Za(n,e){for(ul[n]=e,n=0;n<e.length;n++)Tx.add(e[n])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ih=Object.prototype.hasOwnProperty,RE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,a0={},o0={};function PE(n){return ih.call(o0,n)?!0:ih.call(a0,n)?!1:RE.test(n)?o0[n]=!0:(a0[n]=!0,!1)}function DE(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function NE(n,e,t,i){if(e===null||typeof e>"u"||DE(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var an={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){an[n]=new wn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];an[e]=new wn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){an[n]=new wn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){an[n]=new wn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){an[n]=new wn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){an[n]=new wn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){an[n]=new wn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){an[n]=new wn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){an[n]=new wn(n,5,!1,n.toLowerCase(),null,!1,!1)});var mm=/[\-:]([a-z])/g;function gm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(mm,gm);an[e]=new wn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(mm,gm);an[e]=new wn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(mm,gm);an[e]=new wn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){an[n]=new wn(n,1,!1,n.toLowerCase(),null,!1,!1)});an.xlinkHref=new wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){an[n]=new wn(n,1,!1,n.toLowerCase(),null,!0,!0)});function _m(n,e,t,i){var r=an.hasOwnProperty(e)?an[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(NE(e,t,r,i)&&(t=null),i||r===null?PE(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ar=bE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ac=Symbol.for("react.element"),Aa=Symbol.for("react.portal"),Ca=Symbol.for("react.fragment"),vm=Symbol.for("react.strict_mode"),rh=Symbol.for("react.profiler"),wx=Symbol.for("react.provider"),Ax=Symbol.for("react.context"),xm=Symbol.for("react.forward_ref"),sh=Symbol.for("react.suspense"),ah=Symbol.for("react.suspense_list"),ym=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),Cx=Symbol.for("react.offscreen"),l0=Symbol.iterator;function wo(n){return n===null||typeof n!="object"?null:(n=l0&&n[l0]||n["@@iterator"],typeof n=="function"?n:null)}var bt=Object.assign,Of;function Ho(n){if(Of===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Of=e&&e[1]||""}return`
`+Of+n}var kf=!1;function Bf(n,e){if(!n||kf)return"";kf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{kf=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ho(n):""}function LE(n){switch(n.tag){case 5:return Ho(n.type);case 16:return Ho("Lazy");case 13:return Ho("Suspense");case 19:return Ho("SuspenseList");case 0:case 2:case 15:return n=Bf(n.type,!1),n;case 11:return n=Bf(n.type.render,!1),n;case 1:return n=Bf(n.type,!0),n;default:return""}}function oh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ca:return"Fragment";case Aa:return"Portal";case rh:return"Profiler";case vm:return"StrictMode";case sh:return"Suspense";case ah:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Ax:return(n.displayName||"Context")+".Consumer";case wx:return(n._context.displayName||"Context")+".Provider";case xm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ym:return e=n.displayName||null,e!==null?e:oh(n.type)||"Memo";case Fr:e=n._payload,n=n._init;try{return oh(n(e))}catch{}}return null}function IE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oh(e);case 8:return e===vm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ss(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function bx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function UE(n){var e=bx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function oc(n){n._valueTracker||(n._valueTracker=UE(n))}function Rx(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=bx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function vu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function lh(n,e){var t=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function c0(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=ss(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Px(n,e){e=e.checked,e!=null&&_m(n,"checked",e,!1)}function ch(n,e){Px(n,e);var t=ss(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?uh(n,e.type,t):e.hasOwnProperty("defaultValue")&&uh(n,e.type,ss(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function u0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function uh(n,e,t){(e!=="number"||vu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Go=Array.isArray;function za(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+ss(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function fh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function f0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(se(92));if(Go(t)){if(1<t.length)throw Error(se(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ss(t)}}function Dx(n,e){var t=ss(e.value),i=ss(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function d0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Nx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Nx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var lc,Lx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(lc=lc||document.createElement("div"),lc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function fl(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},FE=["Webkit","ms","Moz","O"];Object.keys(Ko).forEach(function(n){FE.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ko[e]=Ko[n]})});function Ix(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ko.hasOwnProperty(n)&&Ko[n]?(""+e).trim():e+"px"}function Ux(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Ix(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var OE=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hh(n,e){if(e){if(OE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function ph(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mh=null;function Sm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var gh=null,Va=null,Ha=null;function h0(n){if(n=Gl(n)){if(typeof gh!="function")throw Error(se(280));var e=n.stateNode;e&&(e=sf(e),gh(n.stateNode,n.type,e))}}function Fx(n){Va?Ha?Ha.push(n):Ha=[n]:Va=n}function Ox(){if(Va){var n=Va,e=Ha;if(Ha=Va=null,h0(n),e)for(n=0;n<e.length;n++)h0(e[n])}}function kx(n,e){return n(e)}function Bx(){}var zf=!1;function zx(n,e,t){if(zf)return n(e,t);zf=!0;try{return kx(n,e,t)}finally{zf=!1,(Va!==null||Ha!==null)&&(Bx(),Ox())}}function dl(n,e){var t=n.stateNode;if(t===null)return null;var i=sf(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(se(231,e,typeof t));return t}var _h=!1;if(vr)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){_h=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{_h=!1}function kE(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Zo=!1,xu=null,yu=!1,vh=null,BE={onError:function(n){Zo=!0,xu=n}};function zE(n,e,t,i,r,s,a,o,l){Zo=!1,xu=null,kE.apply(BE,arguments)}function VE(n,e,t,i,r,s,a,o,l){if(zE.apply(this,arguments),Zo){if(Zo){var c=xu;Zo=!1,xu=null}else throw Error(se(198));yu||(yu=!0,vh=c)}}function ia(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Vx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function p0(n){if(ia(n)!==n)throw Error(se(188))}function HE(n){var e=n.alternate;if(!e){if(e=ia(n),e===null)throw Error(se(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return p0(r),n;if(s===i)return p0(r),e;s=s.sibling}throw Error(se(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(t.alternate!==i)throw Error(se(190))}if(t.tag!==3)throw Error(se(188));return t.stateNode.current===t?n:e}function Hx(n){return n=HE(n),n!==null?Gx(n):null}function Gx(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Gx(n);if(e!==null)return e;n=n.sibling}return null}var Wx=Qn.unstable_scheduleCallback,m0=Qn.unstable_cancelCallback,GE=Qn.unstable_shouldYield,WE=Qn.unstable_requestPaint,Ft=Qn.unstable_now,jE=Qn.unstable_getCurrentPriorityLevel,Mm=Qn.unstable_ImmediatePriority,jx=Qn.unstable_UserBlockingPriority,Su=Qn.unstable_NormalPriority,XE=Qn.unstable_LowPriority,Xx=Qn.unstable_IdlePriority,ef=null,ji=null;function qE(n){if(ji&&typeof ji.onCommitFiberRoot=="function")try{ji.onCommitFiberRoot(ef,n,void 0,(n.current.flags&128)===128)}catch{}}var Ai=Math.clz32?Math.clz32:KE,$E=Math.log,YE=Math.LN2;function KE(n){return n>>>=0,n===0?32:31-($E(n)/YE|0)|0}var cc=64,uc=4194304;function Wo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Mu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=Wo(o):(s&=a,s!==0&&(i=Wo(s)))}else a=t&~r,a!==0?i=Wo(a):s!==0&&(i=Wo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Ai(e),r=1<<t,i|=n[t],e&=~r;return i}function ZE(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JE(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-Ai(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=ZE(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function xh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function qx(){var n=cc;return cc<<=1,!(cc&4194240)&&(cc=64),n}function Vf(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Vl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Ai(e),n[e]=t}function QE(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Ai(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Em(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Ai(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var lt=0;function $x(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Yx,Tm,Kx,Zx,Jx,yh=!1,fc=[],Yr=null,Kr=null,Zr=null,hl=new Map,pl=new Map,kr=[],eT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function g0(n,e){switch(n){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":hl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(e.pointerId)}}function Co(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Gl(e),e!==null&&Tm(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function tT(n,e,t,i,r){switch(e){case"focusin":return Yr=Co(Yr,n,e,t,i,r),!0;case"dragenter":return Kr=Co(Kr,n,e,t,i,r),!0;case"mouseover":return Zr=Co(Zr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return hl.set(s,Co(hl.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,pl.set(s,Co(pl.get(s)||null,n,e,t,i,r)),!0}return!1}function Qx(n){var e=Ns(n.target);if(e!==null){var t=ia(e);if(t!==null){if(e=t.tag,e===13){if(e=Vx(t),e!==null){n.blockedOn=e,Jx(n.priority,function(){Kx(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $c(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Sh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);mh=i,t.target.dispatchEvent(i),mh=null}else return e=Gl(t),e!==null&&Tm(e),n.blockedOn=t,!1;e.shift()}return!0}function _0(n,e,t){$c(n)&&t.delete(e)}function nT(){yh=!1,Yr!==null&&$c(Yr)&&(Yr=null),Kr!==null&&$c(Kr)&&(Kr=null),Zr!==null&&$c(Zr)&&(Zr=null),hl.forEach(_0),pl.forEach(_0)}function bo(n,e){n.blockedOn===e&&(n.blockedOn=null,yh||(yh=!0,Qn.unstable_scheduleCallback(Qn.unstable_NormalPriority,nT)))}function ml(n){function e(r){return bo(r,n)}if(0<fc.length){bo(fc[0],n);for(var t=1;t<fc.length;t++){var i=fc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Yr!==null&&bo(Yr,n),Kr!==null&&bo(Kr,n),Zr!==null&&bo(Zr,n),hl.forEach(e),pl.forEach(e),t=0;t<kr.length;t++)i=kr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<kr.length&&(t=kr[0],t.blockedOn===null);)Qx(t),t.blockedOn===null&&kr.shift()}var Ga=Ar.ReactCurrentBatchConfig,Eu=!0;function iT(n,e,t,i){var r=lt,s=Ga.transition;Ga.transition=null;try{lt=1,wm(n,e,t,i)}finally{lt=r,Ga.transition=s}}function rT(n,e,t,i){var r=lt,s=Ga.transition;Ga.transition=null;try{lt=4,wm(n,e,t,i)}finally{lt=r,Ga.transition=s}}function wm(n,e,t,i){if(Eu){var r=Sh(n,e,t,i);if(r===null)Zf(n,e,i,Tu,t),g0(n,i);else if(tT(r,n,e,t,i))i.stopPropagation();else if(g0(n,i),e&4&&-1<eT.indexOf(n)){for(;r!==null;){var s=Gl(r);if(s!==null&&Yx(s),s=Sh(n,e,t,i),s===null&&Zf(n,e,i,Tu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Zf(n,e,i,null,t)}}var Tu=null;function Sh(n,e,t,i){if(Tu=null,n=Sm(i),n=Ns(n),n!==null)if(e=ia(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Vx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Tu=n,null}function ey(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jE()){case Mm:return 1;case jx:return 4;case Su:case XE:return 16;case Xx:return 536870912;default:return 16}default:return 16}}var Vr=null,Am=null,Yc=null;function ty(){if(Yc)return Yc;var n,e=Am,t=e.length,i,r="value"in Vr?Vr.value:Vr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Yc=r.slice(n,1<i?1-i:void 0)}function Kc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function dc(){return!0}function v0(){return!1}function ii(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dc:v0,this.isPropagationStopped=v0,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=dc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=dc)},persist:function(){},isPersistent:dc}),e}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cm=ii(vo),Hl=bt({},vo,{view:0,detail:0}),sT=ii(Hl),Hf,Gf,Ro,tf=bt({},Hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ro&&(Ro&&n.type==="mousemove"?(Hf=n.screenX-Ro.screenX,Gf=n.screenY-Ro.screenY):Gf=Hf=0,Ro=n),Hf)},movementY:function(n){return"movementY"in n?n.movementY:Gf}}),x0=ii(tf),aT=bt({},tf,{dataTransfer:0}),oT=ii(aT),lT=bt({},Hl,{relatedTarget:0}),Wf=ii(lT),cT=bt({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),uT=ii(cT),fT=bt({},vo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),dT=ii(fT),hT=bt({},vo,{data:0}),y0=ii(hT),pT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _T(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=gT[n])?!!e[n]:!1}function bm(){return _T}var vT=bt({},Hl,{key:function(n){if(n.key){var e=pT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Kc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?mT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bm,charCode:function(n){return n.type==="keypress"?Kc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Kc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),xT=ii(vT),yT=bt({},tf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S0=ii(yT),ST=bt({},Hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bm}),MT=ii(ST),ET=bt({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),TT=ii(ET),wT=bt({},tf,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),AT=ii(wT),CT=[9,13,27,32],Rm=vr&&"CompositionEvent"in window,Jo=null;vr&&"documentMode"in document&&(Jo=document.documentMode);var bT=vr&&"TextEvent"in window&&!Jo,ny=vr&&(!Rm||Jo&&8<Jo&&11>=Jo),M0=" ",E0=!1;function iy(n,e){switch(n){case"keyup":return CT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ry(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ba=!1;function RT(n,e){switch(n){case"compositionend":return ry(e);case"keypress":return e.which!==32?null:(E0=!0,M0);case"textInput":return n=e.data,n===M0&&E0?null:n;default:return null}}function PT(n,e){if(ba)return n==="compositionend"||!Rm&&iy(n,e)?(n=ty(),Yc=Am=Vr=null,ba=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ny&&e.locale!=="ko"?null:e.data;default:return null}}var DT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function T0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!DT[n.type]:e==="textarea"}function sy(n,e,t,i){Fx(i),e=wu(e,"onChange"),0<e.length&&(t=new Cm("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Qo=null,gl=null;function NT(n){gy(n,0)}function nf(n){var e=Da(n);if(Rx(e))return n}function LT(n,e){if(n==="change")return e}var ay=!1;if(vr){var jf;if(vr){var Xf="oninput"in document;if(!Xf){var w0=document.createElement("div");w0.setAttribute("oninput","return;"),Xf=typeof w0.oninput=="function"}jf=Xf}else jf=!1;ay=jf&&(!document.documentMode||9<document.documentMode)}function A0(){Qo&&(Qo.detachEvent("onpropertychange",oy),gl=Qo=null)}function oy(n){if(n.propertyName==="value"&&nf(gl)){var e=[];sy(e,gl,n,Sm(n)),zx(NT,e)}}function IT(n,e,t){n==="focusin"?(A0(),Qo=e,gl=t,Qo.attachEvent("onpropertychange",oy)):n==="focusout"&&A0()}function UT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return nf(gl)}function FT(n,e){if(n==="click")return nf(e)}function OT(n,e){if(n==="input"||n==="change")return nf(e)}function kT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var bi=typeof Object.is=="function"?Object.is:kT;function _l(n,e){if(bi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ih.call(e,r)||!bi(n[r],e[r]))return!1}return!0}function C0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function b0(n,e){var t=C0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=C0(t)}}function ly(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?ly(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function cy(){for(var n=window,e=vu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=vu(n.document)}return e}function Pm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function BT(n){var e=cy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&ly(t.ownerDocument.documentElement,t)){if(i!==null&&Pm(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=b0(t,s);var a=b0(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var zT=vr&&"documentMode"in document&&11>=document.documentMode,Ra=null,Mh=null,el=null,Eh=!1;function R0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Eh||Ra==null||Ra!==vu(i)||(i=Ra,"selectionStart"in i&&Pm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),el&&_l(el,i)||(el=i,i=wu(Mh,"onSelect"),0<i.length&&(e=new Cm("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ra)))}function hc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Pa={animationend:hc("Animation","AnimationEnd"),animationiteration:hc("Animation","AnimationIteration"),animationstart:hc("Animation","AnimationStart"),transitionend:hc("Transition","TransitionEnd")},qf={},uy={};vr&&(uy=document.createElement("div").style,"AnimationEvent"in window||(delete Pa.animationend.animation,delete Pa.animationiteration.animation,delete Pa.animationstart.animation),"TransitionEvent"in window||delete Pa.transitionend.transition);function rf(n){if(qf[n])return qf[n];if(!Pa[n])return n;var e=Pa[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in uy)return qf[n]=e[t];return n}var fy=rf("animationend"),dy=rf("animationiteration"),hy=rf("animationstart"),py=rf("transitionend"),my=new Map,P0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fs(n,e){my.set(n,e),na(e,[n])}for(var $f=0;$f<P0.length;$f++){var Yf=P0[$f],VT=Yf.toLowerCase(),HT=Yf[0].toUpperCase()+Yf.slice(1);fs(VT,"on"+HT)}fs(fy,"onAnimationEnd");fs(dy,"onAnimationIteration");fs(hy,"onAnimationStart");fs("dblclick","onDoubleClick");fs("focusin","onFocus");fs("focusout","onBlur");fs(py,"onTransitionEnd");Za("onMouseEnter",["mouseout","mouseover"]);Za("onMouseLeave",["mouseout","mouseover"]);Za("onPointerEnter",["pointerout","pointerover"]);Za("onPointerLeave",["pointerout","pointerover"]);na("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));na("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));na("onBeforeInput",["compositionend","keypress","textInput","paste"]);na("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));na("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));na("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GT=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function D0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,VE(i,e,void 0,n),n.currentTarget=null}function gy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;D0(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;D0(r,o,c),s=l}}}if(yu)throw n=vh,yu=!1,vh=null,n}function _t(n,e){var t=e[bh];t===void 0&&(t=e[bh]=new Set);var i=n+"__bubble";t.has(i)||(_y(e,n,2,!1),t.add(i))}function Kf(n,e,t){var i=0;e&&(i|=4),_y(t,n,i,e)}var pc="_reactListening"+Math.random().toString(36).slice(2);function vl(n){if(!n[pc]){n[pc]=!0,Tx.forEach(function(t){t!=="selectionchange"&&(GT.has(t)||Kf(t,!1,n),Kf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[pc]||(e[pc]=!0,Kf("selectionchange",!1,e))}}function _y(n,e,t,i){switch(ey(e)){case 1:var r=iT;break;case 4:r=rT;break;default:r=wm}t=r.bind(null,e,t,n),r=void 0,!_h||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Zf(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Ns(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}zx(function(){var c=s,u=Sm(t),f=[];e:{var d=my.get(n);if(d!==void 0){var g=Cm,p=n;switch(n){case"keypress":if(Kc(t)===0)break e;case"keydown":case"keyup":g=xT;break;case"focusin":p="focus",g=Wf;break;case"focusout":p="blur",g=Wf;break;case"beforeblur":case"afterblur":g=Wf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=x0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=oT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=MT;break;case fy:case dy:case hy:g=uT;break;case py:g=TT;break;case"scroll":g=sT;break;case"wheel":g=AT;break;case"copy":case"cut":case"paste":g=dT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=S0}var v=(e&4)!==0,m=!v&&n==="scroll",h=v?d!==null?d+"Capture":null:d;v=[];for(var _=c,x;_!==null;){x=_;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=dl(_,h),S!=null&&v.push(xl(_,S,x)))),m)break;_=_.return}0<v.length&&(d=new g(d,p,null,t,u),f.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",d&&t!==mh&&(p=t.relatedTarget||t.fromElement)&&(Ns(p)||p[xr]))break e;if((g||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,g?(p=t.relatedTarget||t.toElement,g=c,p=p?Ns(p):null,p!==null&&(m=ia(p),p!==m||p.tag!==5&&p.tag!==6)&&(p=null)):(g=null,p=c),g!==p)){if(v=x0,S="onMouseLeave",h="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(v=S0,S="onPointerLeave",h="onPointerEnter",_="pointer"),m=g==null?d:Da(g),x=p==null?d:Da(p),d=new v(S,_+"leave",g,t,u),d.target=m,d.relatedTarget=x,S=null,Ns(u)===c&&(v=new v(h,_+"enter",p,t,u),v.target=x,v.relatedTarget=m,S=v),m=S,g&&p)t:{for(v=g,h=p,_=0,x=v;x;x=ca(x))_++;for(x=0,S=h;S;S=ca(S))x++;for(;0<_-x;)v=ca(v),_--;for(;0<x-_;)h=ca(h),x--;for(;_--;){if(v===h||h!==null&&v===h.alternate)break t;v=ca(v),h=ca(h)}v=null}else v=null;g!==null&&N0(f,d,g,v,!1),p!==null&&m!==null&&N0(f,m,p,v,!0)}}e:{if(d=c?Da(c):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var E=LT;else if(T0(d))if(ay)E=OT;else{E=UT;var w=IT}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=FT);if(E&&(E=E(n,c))){sy(f,E,t,u);break e}w&&w(n,d,c),n==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&uh(d,"number",d.value)}switch(w=c?Da(c):window,n){case"focusin":(T0(w)||w.contentEditable==="true")&&(Ra=w,Mh=c,el=null);break;case"focusout":el=Mh=Ra=null;break;case"mousedown":Eh=!0;break;case"contextmenu":case"mouseup":case"dragend":Eh=!1,R0(f,t,u);break;case"selectionchange":if(zT)break;case"keydown":case"keyup":R0(f,t,u)}var C;if(Rm)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ba?iy(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(ny&&t.locale!=="ko"&&(ba||y!=="onCompositionStart"?y==="onCompositionEnd"&&ba&&(C=ty()):(Vr=u,Am="value"in Vr?Vr.value:Vr.textContent,ba=!0)),w=wu(c,y),0<w.length&&(y=new y0(y,n,null,t,u),f.push({event:y,listeners:w}),C?y.data=C:(C=ry(t),C!==null&&(y.data=C)))),(C=bT?RT(n,t):PT(n,t))&&(c=wu(c,"onBeforeInput"),0<c.length&&(u=new y0("onBeforeInput","beforeinput",null,t,u),f.push({event:u,listeners:c}),u.data=C))}gy(f,e)})}function xl(n,e,t){return{instance:n,listener:e,currentTarget:t}}function wu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=dl(n,t),s!=null&&i.unshift(xl(n,s,r)),s=dl(n,e),s!=null&&i.push(xl(n,s,r))),n=n.return}return i}function ca(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function N0(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=dl(t,s),l!=null&&a.unshift(xl(t,l,o))):r||(l=dl(t,s),l!=null&&a.push(xl(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var WT=/\r\n?/g,jT=/\u0000|\uFFFD/g;function L0(n){return(typeof n=="string"?n:""+n).replace(WT,`
`).replace(jT,"")}function mc(n,e,t){if(e=L0(e),L0(n)!==e&&t)throw Error(se(425))}function Au(){}var Th=null,wh=null;function Ah(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ch=typeof setTimeout=="function"?setTimeout:void 0,XT=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,qT=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(n){return I0.resolve(null).then(n).catch($T)}:Ch;function $T(n){setTimeout(function(){throw n})}function Jf(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ml(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ml(e)}function Jr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function U0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var xo=Math.random().toString(36).slice(2),zi="__reactFiber$"+xo,yl="__reactProps$"+xo,xr="__reactContainer$"+xo,bh="__reactEvents$"+xo,YT="__reactListeners$"+xo,KT="__reactHandles$"+xo;function Ns(n){var e=n[zi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[xr]||t[zi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=U0(n);n!==null;){if(t=n[zi])return t;n=U0(n)}return e}n=t,t=n.parentNode}return null}function Gl(n){return n=n[zi]||n[xr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Da(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(se(33))}function sf(n){return n[yl]||null}var Rh=[],Na=-1;function ds(n){return{current:n}}function vt(n){0>Na||(n.current=Rh[Na],Rh[Na]=null,Na--)}function gt(n,e){Na++,Rh[Na]=n.current,n.current=e}var as={},_n=ds(as),Rn=ds(!1),$s=as;function Ja(n,e){var t=n.type.contextTypes;if(!t)return as;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Pn(n){return n=n.childContextTypes,n!=null}function Cu(){vt(Rn),vt(_n)}function F0(n,e,t){if(_n.current!==as)throw Error(se(168));gt(_n,e),gt(Rn,t)}function vy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,IE(n)||"Unknown",r));return bt({},t,i)}function bu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||as,$s=_n.current,gt(_n,n),gt(Rn,Rn.current),!0}function O0(n,e,t){var i=n.stateNode;if(!i)throw Error(se(169));t?(n=vy(n,e,$s),i.__reactInternalMemoizedMergedChildContext=n,vt(Rn),vt(_n),gt(_n,n)):vt(Rn),gt(Rn,t)}var cr=null,af=!1,Qf=!1;function xy(n){cr===null?cr=[n]:cr.push(n)}function ZT(n){af=!0,xy(n)}function hs(){if(!Qf&&cr!==null){Qf=!0;var n=0,e=lt;try{var t=cr;for(lt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}cr=null,af=!1}catch(r){throw cr!==null&&(cr=cr.slice(n+1)),Wx(Mm,hs),r}finally{lt=e,Qf=!1}}return null}var La=[],Ia=0,Ru=null,Pu=0,li=[],ci=0,Ys=null,dr=1,hr="";function As(n,e){La[Ia++]=Pu,La[Ia++]=Ru,Ru=n,Pu=e}function yy(n,e,t){li[ci++]=dr,li[ci++]=hr,li[ci++]=Ys,Ys=n;var i=dr;n=hr;var r=32-Ai(i)-1;i&=~(1<<r),t+=1;var s=32-Ai(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,dr=1<<32-Ai(e)+r|t<<r|i,hr=s+n}else dr=1<<s|t<<r|i,hr=n}function Dm(n){n.return!==null&&(As(n,1),yy(n,1,0))}function Nm(n){for(;n===Ru;)Ru=La[--Ia],La[Ia]=null,Pu=La[--Ia],La[Ia]=null;for(;n===Ys;)Ys=li[--ci],li[ci]=null,hr=li[--ci],li[ci]=null,dr=li[--ci],li[ci]=null}var Zn=null,$n=null,yt=!1,Ei=null;function Sy(n,e){var t=ui(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function k0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Zn=n,$n=Jr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Zn=n,$n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ys!==null?{id:dr,overflow:hr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ui(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Zn=n,$n=null,!0):!1;default:return!1}}function Ph(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Dh(n){if(yt){var e=$n;if(e){var t=e;if(!k0(n,e)){if(Ph(n))throw Error(se(418));e=Jr(t.nextSibling);var i=Zn;e&&k0(n,e)?Sy(i,t):(n.flags=n.flags&-4097|2,yt=!1,Zn=n)}}else{if(Ph(n))throw Error(se(418));n.flags=n.flags&-4097|2,yt=!1,Zn=n}}}function B0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Zn=n}function gc(n){if(n!==Zn)return!1;if(!yt)return B0(n),yt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ah(n.type,n.memoizedProps)),e&&(e=$n)){if(Ph(n))throw My(),Error(se(418));for(;e;)Sy(n,e),e=Jr(e.nextSibling)}if(B0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(se(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){$n=Jr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}$n=null}}else $n=Zn?Jr(n.stateNode.nextSibling):null;return!0}function My(){for(var n=$n;n;)n=Jr(n.nextSibling)}function Qa(){$n=Zn=null,yt=!1}function Lm(n){Ei===null?Ei=[n]:Ei.push(n)}var JT=Ar.ReactCurrentBatchConfig;function Po(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(se(309));var i=t.stateNode}if(!i)throw Error(se(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(se(284));if(!t._owner)throw Error(se(290,n))}return n}function _c(n,e){throw n=Object.prototype.toString.call(e),Error(se(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function z0(n){var e=n._init;return e(n._payload)}function Ey(n){function e(h,_){if(n){var x=h.deletions;x===null?(h.deletions=[_],h.flags|=16):x.push(_)}}function t(h,_){if(!n)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=ns(h,_),h.index=0,h.sibling=null,h}function s(h,_,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<_?(h.flags|=2,_):x):(h.flags|=2,_)):(h.flags|=1048576,_)}function a(h){return n&&h.alternate===null&&(h.flags|=2),h}function o(h,_,x,S){return _===null||_.tag!==6?(_=ad(x,h.mode,S),_.return=h,_):(_=r(_,x),_.return=h,_)}function l(h,_,x,S){var E=x.type;return E===Ca?u(h,_,x.props.children,S,x.key):_!==null&&(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Fr&&z0(E)===_.type)?(S=r(_,x.props),S.ref=Po(h,_,x),S.return=h,S):(S=iu(x.type,x.key,x.props,null,h.mode,S),S.ref=Po(h,_,x),S.return=h,S)}function c(h,_,x,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=od(x,h.mode,S),_.return=h,_):(_=r(_,x.children||[]),_.return=h,_)}function u(h,_,x,S,E){return _===null||_.tag!==7?(_=Vs(x,h.mode,S,E),_.return=h,_):(_=r(_,x),_.return=h,_)}function f(h,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=ad(""+_,h.mode,x),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ac:return x=iu(_.type,_.key,_.props,null,h.mode,x),x.ref=Po(h,null,_),x.return=h,x;case Aa:return _=od(_,h.mode,x),_.return=h,_;case Fr:var S=_._init;return f(h,S(_._payload),x)}if(Go(_)||wo(_))return _=Vs(_,h.mode,x,null),_.return=h,_;_c(h,_)}return null}function d(h,_,x,S){var E=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:o(h,_,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ac:return x.key===E?l(h,_,x,S):null;case Aa:return x.key===E?c(h,_,x,S):null;case Fr:return E=x._init,d(h,_,E(x._payload),S)}if(Go(x)||wo(x))return E!==null?null:u(h,_,x,S,null);_c(h,x)}return null}function g(h,_,x,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,o(_,h,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ac:return h=h.get(S.key===null?x:S.key)||null,l(_,h,S,E);case Aa:return h=h.get(S.key===null?x:S.key)||null,c(_,h,S,E);case Fr:var w=S._init;return g(h,_,x,w(S._payload),E)}if(Go(S)||wo(S))return h=h.get(x)||null,u(_,h,S,E,null);_c(_,S)}return null}function p(h,_,x,S){for(var E=null,w=null,C=_,y=_=0,M=null;C!==null&&y<x.length;y++){C.index>y?(M=C,C=null):M=C.sibling;var N=d(h,C,x[y],S);if(N===null){C===null&&(C=M);break}n&&C&&N.alternate===null&&e(h,C),_=s(N,_,y),w===null?E=N:w.sibling=N,w=N,C=M}if(y===x.length)return t(h,C),yt&&As(h,y),E;if(C===null){for(;y<x.length;y++)C=f(h,x[y],S),C!==null&&(_=s(C,_,y),w===null?E=C:w.sibling=C,w=C);return yt&&As(h,y),E}for(C=i(h,C);y<x.length;y++)M=g(C,h,y,x[y],S),M!==null&&(n&&M.alternate!==null&&C.delete(M.key===null?y:M.key),_=s(M,_,y),w===null?E=M:w.sibling=M,w=M);return n&&C.forEach(function(P){return e(h,P)}),yt&&As(h,y),E}function v(h,_,x,S){var E=wo(x);if(typeof E!="function")throw Error(se(150));if(x=E.call(x),x==null)throw Error(se(151));for(var w=E=null,C=_,y=_=0,M=null,N=x.next();C!==null&&!N.done;y++,N=x.next()){C.index>y?(M=C,C=null):M=C.sibling;var P=d(h,C,N.value,S);if(P===null){C===null&&(C=M);break}n&&C&&P.alternate===null&&e(h,C),_=s(P,_,y),w===null?E=P:w.sibling=P,w=P,C=M}if(N.done)return t(h,C),yt&&As(h,y),E;if(C===null){for(;!N.done;y++,N=x.next())N=f(h,N.value,S),N!==null&&(_=s(N,_,y),w===null?E=N:w.sibling=N,w=N);return yt&&As(h,y),E}for(C=i(h,C);!N.done;y++,N=x.next())N=g(C,h,y,N.value,S),N!==null&&(n&&N.alternate!==null&&C.delete(N.key===null?y:N.key),_=s(N,_,y),w===null?E=N:w.sibling=N,w=N);return n&&C.forEach(function(L){return e(h,L)}),yt&&As(h,y),E}function m(h,_,x,S){if(typeof x=="object"&&x!==null&&x.type===Ca&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ac:e:{for(var E=x.key,w=_;w!==null;){if(w.key===E){if(E=x.type,E===Ca){if(w.tag===7){t(h,w.sibling),_=r(w,x.props.children),_.return=h,h=_;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Fr&&z0(E)===w.type){t(h,w.sibling),_=r(w,x.props),_.ref=Po(h,w,x),_.return=h,h=_;break e}t(h,w);break}else e(h,w);w=w.sibling}x.type===Ca?(_=Vs(x.props.children,h.mode,S,x.key),_.return=h,h=_):(S=iu(x.type,x.key,x.props,null,h.mode,S),S.ref=Po(h,_,x),S.return=h,h=S)}return a(h);case Aa:e:{for(w=x.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){t(h,_.sibling),_=r(_,x.children||[]),_.return=h,h=_;break e}else{t(h,_);break}else e(h,_);_=_.sibling}_=od(x,h.mode,S),_.return=h,h=_}return a(h);case Fr:return w=x._init,m(h,_,w(x._payload),S)}if(Go(x))return p(h,_,x,S);if(wo(x))return v(h,_,x,S);_c(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(t(h,_.sibling),_=r(_,x),_.return=h,h=_):(t(h,_),_=ad(x,h.mode,S),_.return=h,h=_),a(h)):t(h,_)}return m}var eo=Ey(!0),Ty=Ey(!1),Du=ds(null),Nu=null,Ua=null,Im=null;function Um(){Im=Ua=Nu=null}function Fm(n){var e=Du.current;vt(Du),n._currentValue=e}function Nh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Wa(n,e){Nu=n,Im=Ua=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(bn=!0),n.firstContext=null)}function pi(n){var e=n._currentValue;if(Im!==n)if(n={context:n,memoizedValue:e,next:null},Ua===null){if(Nu===null)throw Error(se(308));Ua=n,Nu.dependencies={lanes:0,firstContext:n}}else Ua=Ua.next=n;return e}var Ls=null;function Om(n){Ls===null?Ls=[n]:Ls.push(n)}function wy(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Om(e)):(t.next=r.next,r.next=t),e.interleaved=t,yr(n,i)}function yr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Or=!1;function km(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ay(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function mr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Qr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,yr(n,t)}return r=i.interleaved,r===null?(e.next=e,Om(i)):(e.next=r.next,r.next=e),i.interleaved=e,yr(n,t)}function Zc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Em(n,t)}}function V0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Lu(n,e,t,i){var r=n.updateQueue;Or=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,u=c=l=null,o=s;do{var d=o.lane,g=o.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var p=n,v=o;switch(d=e,g=t,v.tag){case 1:if(p=v.payload,typeof p=="function"){f=p.call(g,f,d);break e}f=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=v.payload,d=typeof p=="function"?p.call(g,f,d):p,d==null)break e;f=bt({},f,d);break e;case 2:Or=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else g={eventTime:g,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=g,l=f):u=u.next=g,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Zs|=a,n.lanes=a,n.memoizedState=f}}function H0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Wl={},Xi=ds(Wl),Sl=ds(Wl),Ml=ds(Wl);function Is(n){if(n===Wl)throw Error(se(174));return n}function Bm(n,e){switch(gt(Ml,e),gt(Sl,n),gt(Xi,Wl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=dh(e,n)}vt(Xi),gt(Xi,e)}function to(){vt(Xi),vt(Sl),vt(Ml)}function Cy(n){Is(Ml.current);var e=Is(Xi.current),t=dh(e,n.type);e!==t&&(gt(Sl,n),gt(Xi,t))}function zm(n){Sl.current===n&&(vt(Xi),vt(Sl))}var Et=ds(0);function Iu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ed=[];function Vm(){for(var n=0;n<ed.length;n++)ed[n]._workInProgressVersionPrimary=null;ed.length=0}var Jc=Ar.ReactCurrentDispatcher,td=Ar.ReactCurrentBatchConfig,Ks=0,At=null,Gt=null,Yt=null,Uu=!1,tl=!1,El=0,QT=0;function ln(){throw Error(se(321))}function Hm(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!bi(n[t],e[t]))return!1;return!0}function Gm(n,e,t,i,r,s){if(Ks=s,At=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jc.current=n===null||n.memoizedState===null?iw:rw,n=t(i,r),tl){s=0;do{if(tl=!1,El=0,25<=s)throw Error(se(301));s+=1,Yt=Gt=null,e.updateQueue=null,Jc.current=sw,n=t(i,r)}while(tl)}if(Jc.current=Fu,e=Gt!==null&&Gt.next!==null,Ks=0,Yt=Gt=At=null,Uu=!1,e)throw Error(se(300));return n}function Wm(){var n=El!==0;return El=0,n}function Fi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?At.memoizedState=Yt=n:Yt=Yt.next=n,Yt}function mi(){if(Gt===null){var n=At.alternate;n=n!==null?n.memoizedState:null}else n=Gt.next;var e=Yt===null?At.memoizedState:Yt.next;if(e!==null)Yt=e,Gt=n;else{if(n===null)throw Error(se(310));Gt=n,n={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},Yt===null?At.memoizedState=Yt=n:Yt=Yt.next=n}return Yt}function Tl(n,e){return typeof e=="function"?e(n):e}function nd(n){var e=mi(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=Gt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((Ks&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,At.lanes|=u,Zs|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,bi(i,e.memoizedState)||(bn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,At.lanes|=s,Zs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function id(n){var e=mi(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);bi(s,e.memoizedState)||(bn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function by(){}function Ry(n,e){var t=At,i=mi(),r=e(),s=!bi(i.memoizedState,r);if(s&&(i.memoizedState=r,bn=!0),i=i.queue,jm(Ny.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Yt!==null&&Yt.memoizedState.tag&1){if(t.flags|=2048,wl(9,Dy.bind(null,t,i,r,e),void 0,null),Zt===null)throw Error(se(349));Ks&30||Py(t,e,r)}return r}function Py(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Dy(n,e,t,i){e.value=t,e.getSnapshot=i,Ly(e)&&Iy(n)}function Ny(n,e,t){return t(function(){Ly(e)&&Iy(n)})}function Ly(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!bi(n,t)}catch{return!0}}function Iy(n){var e=yr(n,1);e!==null&&Ci(e,n,1,-1)}function G0(n){var e=Fi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tl,lastRenderedState:n},e.queue=n,n=n.dispatch=nw.bind(null,At,n),[e.memoizedState,n]}function wl(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Uy(){return mi().memoizedState}function Qc(n,e,t,i){var r=Fi();At.flags|=n,r.memoizedState=wl(1|e,t,void 0,i===void 0?null:i)}function of(n,e,t,i){var r=mi();i=i===void 0?null:i;var s=void 0;if(Gt!==null){var a=Gt.memoizedState;if(s=a.destroy,i!==null&&Hm(i,a.deps)){r.memoizedState=wl(e,t,s,i);return}}At.flags|=n,r.memoizedState=wl(1|e,t,s,i)}function W0(n,e){return Qc(8390656,8,n,e)}function jm(n,e){return of(2048,8,n,e)}function Fy(n,e){return of(4,2,n,e)}function Oy(n,e){return of(4,4,n,e)}function ky(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function By(n,e,t){return t=t!=null?t.concat([n]):null,of(4,4,ky.bind(null,e,n),t)}function Xm(){}function zy(n,e){var t=mi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Hm(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Vy(n,e){var t=mi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Hm(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Hy(n,e,t){return Ks&21?(bi(t,e)||(t=qx(),At.lanes|=t,Zs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,bn=!0),n.memoizedState=t)}function ew(n,e){var t=lt;lt=t!==0&&4>t?t:4,n(!0);var i=td.transition;td.transition={};try{n(!1),e()}finally{lt=t,td.transition=i}}function Gy(){return mi().memoizedState}function tw(n,e,t){var i=ts(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Wy(n))jy(e,t);else if(t=wy(n,e,t,i),t!==null){var r=Sn();Ci(t,n,i,r),Xy(t,e,i)}}function nw(n,e,t){var i=ts(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Wy(n))jy(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,bi(o,a)){var l=e.interleaved;l===null?(r.next=r,Om(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=wy(n,e,r,i),t!==null&&(r=Sn(),Ci(t,n,i,r),Xy(t,e,i))}}function Wy(n){var e=n.alternate;return n===At||e!==null&&e===At}function jy(n,e){tl=Uu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Xy(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Em(n,t)}}var Fu={readContext:pi,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},iw={readContext:pi,useCallback:function(n,e){return Fi().memoizedState=[n,e===void 0?null:e],n},useContext:pi,useEffect:W0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Qc(4194308,4,ky.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Qc(4194308,4,n,e)},useInsertionEffect:function(n,e){return Qc(4,2,n,e)},useMemo:function(n,e){var t=Fi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Fi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=tw.bind(null,At,n),[i.memoizedState,n]},useRef:function(n){var e=Fi();return n={current:n},e.memoizedState=n},useState:G0,useDebugValue:Xm,useDeferredValue:function(n){return Fi().memoizedState=n},useTransition:function(){var n=G0(!1),e=n[0];return n=ew.bind(null,n[1]),Fi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=At,r=Fi();if(yt){if(t===void 0)throw Error(se(407));t=t()}else{if(t=e(),Zt===null)throw Error(se(349));Ks&30||Py(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,W0(Ny.bind(null,i,s,n),[n]),i.flags|=2048,wl(9,Dy.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Fi(),e=Zt.identifierPrefix;if(yt){var t=hr,i=dr;t=(i&~(1<<32-Ai(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=El++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=QT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},rw={readContext:pi,useCallback:zy,useContext:pi,useEffect:jm,useImperativeHandle:By,useInsertionEffect:Fy,useLayoutEffect:Oy,useMemo:Vy,useReducer:nd,useRef:Uy,useState:function(){return nd(Tl)},useDebugValue:Xm,useDeferredValue:function(n){var e=mi();return Hy(e,Gt.memoizedState,n)},useTransition:function(){var n=nd(Tl)[0],e=mi().memoizedState;return[n,e]},useMutableSource:by,useSyncExternalStore:Ry,useId:Gy,unstable_isNewReconciler:!1},sw={readContext:pi,useCallback:zy,useContext:pi,useEffect:jm,useImperativeHandle:By,useInsertionEffect:Fy,useLayoutEffect:Oy,useMemo:Vy,useReducer:id,useRef:Uy,useState:function(){return id(Tl)},useDebugValue:Xm,useDeferredValue:function(n){var e=mi();return Gt===null?e.memoizedState=n:Hy(e,Gt.memoizedState,n)},useTransition:function(){var n=id(Tl)[0],e=mi().memoizedState;return[n,e]},useMutableSource:by,useSyncExternalStore:Ry,useId:Gy,unstable_isNewReconciler:!1};function Si(n,e){if(n&&n.defaultProps){e=bt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Lh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:bt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var lf={isMounted:function(n){return(n=n._reactInternals)?ia(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Sn(),r=ts(n),s=mr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Qr(n,s,r),e!==null&&(Ci(e,n,r,i),Zc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Sn(),r=ts(n),s=mr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Qr(n,s,r),e!==null&&(Ci(e,n,r,i),Zc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Sn(),i=ts(n),r=mr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Qr(n,r,i),e!==null&&(Ci(e,n,i,t),Zc(e,n,i))}};function j0(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!_l(t,i)||!_l(r,s):!0}function qy(n,e,t){var i=!1,r=as,s=e.contextType;return typeof s=="object"&&s!==null?s=pi(s):(r=Pn(e)?$s:_n.current,i=e.contextTypes,s=(i=i!=null)?Ja(n,r):as),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lf,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function X0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&lf.enqueueReplaceState(e,e.state,null)}function Ih(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},km(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=pi(s):(s=Pn(e)?$s:_n.current,r.context=Ja(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&lf.enqueueReplaceState(r,r.state,null),Lu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function no(n,e){try{var t="",i=e;do t+=LE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function rd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Uh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var aw=typeof WeakMap=="function"?WeakMap:Map;function $y(n,e,t){t=mr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ku||(ku=!0,jh=i),Uh(n,e)},t}function Yy(n,e,t){t=mr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Uh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Uh(n,e),typeof i!="function"&&(es===null?es=new Set([this]):es.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function q0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new aw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=yw.bind(null,n,e,t),e.then(n,n))}function $0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Y0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=mr(-1,1),e.tag=2,Qr(t,e,1))),t.lanes|=1),n)}var ow=Ar.ReactCurrentOwner,bn=!1;function xn(n,e,t,i){e.child=n===null?Ty(e,null,t,i):eo(e,n.child,t,i)}function K0(n,e,t,i,r){t=t.render;var s=e.ref;return Wa(e,r),i=Gm(n,e,t,i,s,r),t=Wm(),n!==null&&!bn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Sr(n,e,r)):(yt&&t&&Dm(e),e.flags|=1,xn(n,e,i,r),e.child)}function Z0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!eg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Ky(n,e,s,i,r)):(n=iu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:_l,t(a,i)&&n.ref===e.ref)return Sr(n,e,r)}return e.flags|=1,n=ns(s,i),n.ref=e.ref,n.return=e,e.child=n}function Ky(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(_l(s,i)&&n.ref===e.ref)if(bn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(bn=!0);else return e.lanes=n.lanes,Sr(n,e,r)}return Fh(n,e,t,i,r)}function Zy(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(Oa,Gn),Gn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,gt(Oa,Gn),Gn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,gt(Oa,Gn),Gn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,gt(Oa,Gn),Gn|=i;return xn(n,e,r,t),e.child}function Jy(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Fh(n,e,t,i,r){var s=Pn(t)?$s:_n.current;return s=Ja(e,s),Wa(e,r),t=Gm(n,e,t,i,s,r),i=Wm(),n!==null&&!bn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Sr(n,e,r)):(yt&&i&&Dm(e),e.flags|=1,xn(n,e,t,r),e.child)}function J0(n,e,t,i,r){if(Pn(t)){var s=!0;bu(e)}else s=!1;if(Wa(e,r),e.stateNode===null)eu(n,e),qy(e,t,i),Ih(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=pi(c):(c=Pn(t)?$s:_n.current,c=Ja(e,c));var u=t.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&X0(e,a,i,c),Or=!1;var d=e.memoizedState;a.state=d,Lu(e,i,a,r),l=e.memoizedState,o!==i||d!==l||Rn.current||Or?(typeof u=="function"&&(Lh(e,t,u,i),l=e.memoizedState),(o=Or||j0(e,t,o,i,d,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Ay(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:Si(e.type,o),a.props=c,f=e.pendingProps,d=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=pi(l):(l=Pn(t)?$s:_n.current,l=Ja(e,l));var g=t.getDerivedStateFromProps;(u=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&X0(e,a,i,l),Or=!1,d=e.memoizedState,a.state=d,Lu(e,i,a,r);var p=e.memoizedState;o!==f||d!==p||Rn.current||Or?(typeof g=="function"&&(Lh(e,t,g,i),p=e.memoizedState),(c=Or||j0(e,t,c,i,d,p,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),a.props=i,a.state=p,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Oh(n,e,t,i,s,r)}function Oh(n,e,t,i,r,s){Jy(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&O0(e,t,!1),Sr(n,e,s);i=e.stateNode,ow.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=eo(e,n.child,null,s),e.child=eo(e,null,o,s)):xn(n,e,o,s),e.memoizedState=i.state,r&&O0(e,t,!0),e.child}function Qy(n){var e=n.stateNode;e.pendingContext?F0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&F0(n,e.context,!1),Bm(n,e.containerInfo)}function Q0(n,e,t,i,r){return Qa(),Lm(r),e.flags|=256,xn(n,e,t,i),e.child}var kh={dehydrated:null,treeContext:null,retryLane:0};function Bh(n){return{baseLanes:n,cachePool:null,transitions:null}}function eS(n,e,t){var i=e.pendingProps,r=Et.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),gt(Et,r&1),n===null)return Dh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ff(a,i,0,null),n=Vs(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Bh(t),e.memoizedState=kh,n):qm(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return lw(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ns(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ns(o,s):(s=Vs(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?Bh(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=kh,i}return s=n.child,n=s.sibling,i=ns(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function qm(n,e){return e=ff({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function vc(n,e,t,i){return i!==null&&Lm(i),eo(e,n.child,null,t),n=qm(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function lw(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=rd(Error(se(422))),vc(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ff({mode:"visible",children:i.children},r,0,null),s=Vs(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&eo(e,n.child,null,a),e.child.memoizedState=Bh(a),e.memoizedState=kh,s);if(!(e.mode&1))return vc(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=rd(s,i,void 0),vc(n,e,a,i)}if(o=(a&n.childLanes)!==0,bn||o){if(i=Zt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,yr(n,r),Ci(i,n,r,-1))}return Qm(),i=rd(Error(se(421))),vc(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Sw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,$n=Jr(r.nextSibling),Zn=e,yt=!0,Ei=null,n!==null&&(li[ci++]=dr,li[ci++]=hr,li[ci++]=Ys,dr=n.id,hr=n.overflow,Ys=e),e=qm(e,i.children),e.flags|=4096,e)}function e_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Nh(n.return,e,t)}function sd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function tS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(xn(n,e,i.children,t),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&e_(n,t,e);else if(n.tag===19)e_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(gt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Iu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),sd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Iu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}sd(e,!0,t,null,s);break;case"together":sd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function eu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Sr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Zs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(se(153));if(e.child!==null){for(n=e.child,t=ns(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ns(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function cw(n,e,t){switch(e.tag){case 3:Qy(e),Qa();break;case 5:Cy(e);break;case 1:Pn(e.type)&&bu(e);break;case 4:Bm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(Du,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(Et,Et.current&1),e.flags|=128,null):t&e.child.childLanes?eS(n,e,t):(gt(Et,Et.current&1),n=Sr(n,e,t),n!==null?n.sibling:null);gt(Et,Et.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return tS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,Zy(n,e,t)}return Sr(n,e,t)}var nS,zh,iS,rS;nS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};zh=function(){};iS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Is(Xi.current);var s=null;switch(t){case"input":r=lh(n,r),i=lh(n,i),s=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),s=[];break;case"textarea":r=fh(n,r),i=fh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Au)}hh(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ul.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ul.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};rS=function(n,e,t,i){t!==i&&(e.flags|=4)};function Do(n,e){if(!yt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function cn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function uw(n,e,t){var i=e.pendingProps;switch(Nm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(e),null;case 1:return Pn(e.type)&&Cu(),cn(e),null;case 3:return i=e.stateNode,to(),vt(Rn),vt(_n),Vm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(gc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ei!==null&&($h(Ei),Ei=null))),zh(n,e),cn(e),null;case 5:zm(e);var r=Is(Ml.current);if(t=e.type,n!==null&&e.stateNode!=null)iS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return cn(e),null}if(n=Is(Xi.current),gc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[zi]=e,i[yl]=s,n=(e.mode&1)!==0,t){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<jo.length;r++)_t(jo[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":c0(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":f0(i,s),_t("invalid",i)}hh(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&mc(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&mc(i.textContent,o,n),r=["children",""+o]):ul.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&_t("scroll",i)}switch(t){case"input":oc(i),u0(i,s,!0);break;case"textarea":oc(i),d0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Au)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Nx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[zi]=e,n[yl]=i,nS(n,e,!1,!1),e.stateNode=n;e:{switch(a=ph(t,i),t){case"dialog":_t("cancel",n),_t("close",n),r=i;break;case"iframe":case"object":case"embed":_t("load",n),r=i;break;case"video":case"audio":for(r=0;r<jo.length;r++)_t(jo[r],n);r=i;break;case"source":_t("error",n),r=i;break;case"img":case"image":case"link":_t("error",n),_t("load",n),r=i;break;case"details":_t("toggle",n),r=i;break;case"input":c0(n,i),r=lh(n,i),_t("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),_t("invalid",n);break;case"textarea":f0(n,i),r=fh(n,i),_t("invalid",n);break;default:r=i}hh(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Ux(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&fl(n,l):typeof l=="number"&&fl(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ul.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",n):l!=null&&_m(n,s,l,a))}switch(t){case"input":oc(n),u0(n,i,!1);break;case"textarea":oc(n),d0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+ss(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?za(n,!!i.multiple,s,!1):i.defaultValue!=null&&za(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Au)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return cn(e),null;case 6:if(n&&e.stateNode!=null)rS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(t=Is(Ml.current),Is(Xi.current),gc(e)){if(i=e.stateNode,t=e.memoizedProps,i[zi]=e,(s=i.nodeValue!==t)&&(n=Zn,n!==null))switch(n.tag){case 3:mc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&mc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[zi]=e,e.stateNode=i}return cn(e),null;case 13:if(vt(Et),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(yt&&$n!==null&&e.mode&1&&!(e.flags&128))My(),Qa(),e.flags|=98560,s=!1;else if(s=gc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[zi]=e}else Qa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;cn(e),s=!1}else Ei!==null&&($h(Ei),Ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Et.current&1?Wt===0&&(Wt=3):Qm())),e.updateQueue!==null&&(e.flags|=4),cn(e),null);case 4:return to(),zh(n,e),n===null&&vl(e.stateNode.containerInfo),cn(e),null;case 10:return Fm(e.type._context),cn(e),null;case 17:return Pn(e.type)&&Cu(),cn(e),null;case 19:if(vt(Et),s=e.memoizedState,s===null)return cn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Do(s,!1);else{if(Wt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=Iu(n),a!==null){for(e.flags|=128,Do(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return gt(Et,Et.current&1|2),e.child}n=n.sibling}s.tail!==null&&Ft()>io&&(e.flags|=128,i=!0,Do(s,!1),e.lanes=4194304)}else{if(!i)if(n=Iu(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Do(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!yt)return cn(e),null}else 2*Ft()-s.renderingStartTime>io&&t!==1073741824&&(e.flags|=128,i=!0,Do(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ft(),e.sibling=null,t=Et.current,gt(Et,i?t&1|2:t&1),e):(cn(e),null);case 22:case 23:return Jm(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Gn&1073741824&&(cn(e),e.subtreeFlags&6&&(e.flags|=8192)):cn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function fw(n,e){switch(Nm(e),e.tag){case 1:return Pn(e.type)&&Cu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return to(),vt(Rn),vt(_n),Vm(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return zm(e),null;case 13:if(vt(Et),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Qa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return vt(Et),null;case 4:return to(),null;case 10:return Fm(e.type._context),null;case 22:case 23:return Jm(),null;case 24:return null;default:return null}}var xc=!1,dn=!1,dw=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Fa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Dt(n,e,i)}else t.current=null}function Vh(n,e,t){try{t()}catch(i){Dt(n,e,i)}}var t_=!1;function hw(n,e){if(Th=Eu,n=cy(),Pm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,u=0,f=n,d=null;t:for(;;){for(var g;f!==t||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===n)break t;if(d===t&&++c===r&&(o=a),d===s&&++u===i&&(l=a),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(wh={focusedElem:n,selectionRange:t},Eu=!1,ve=e;ve!==null;)if(e=ve,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ve=n;else for(;ve!==null;){e=ve;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var v=p.memoizedProps,m=p.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:Si(e.type,v),m);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){Dt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}return p=t_,t_=!1,p}function nl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Vh(e,t,s)}r=r.next}while(r!==i)}}function cf(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Hh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function sS(n){var e=n.alternate;e!==null&&(n.alternate=null,sS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[zi],delete e[yl],delete e[bh],delete e[YT],delete e[KT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function aS(n){return n.tag===5||n.tag===3||n.tag===4}function n_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||aS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Gh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Au));else if(i!==4&&(n=n.child,n!==null))for(Gh(n,e,t),n=n.sibling;n!==null;)Gh(n,e,t),n=n.sibling}function Wh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Wh(n,e,t),n=n.sibling;n!==null;)Wh(n,e,t),n=n.sibling}var en=null,Mi=!1;function Rr(n,e,t){for(t=t.child;t!==null;)oS(n,e,t),t=t.sibling}function oS(n,e,t){if(ji&&typeof ji.onCommitFiberUnmount=="function")try{ji.onCommitFiberUnmount(ef,t)}catch{}switch(t.tag){case 5:dn||Fa(t,e);case 6:var i=en,r=Mi;en=null,Rr(n,e,t),en=i,Mi=r,en!==null&&(Mi?(n=en,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):en.removeChild(t.stateNode));break;case 18:en!==null&&(Mi?(n=en,t=t.stateNode,n.nodeType===8?Jf(n.parentNode,t):n.nodeType===1&&Jf(n,t),ml(n)):Jf(en,t.stateNode));break;case 4:i=en,r=Mi,en=t.stateNode.containerInfo,Mi=!0,Rr(n,e,t),en=i,Mi=r;break;case 0:case 11:case 14:case 15:if(!dn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Vh(t,e,a),r=r.next}while(r!==i)}Rr(n,e,t);break;case 1:if(!dn&&(Fa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){Dt(t,e,o)}Rr(n,e,t);break;case 21:Rr(n,e,t);break;case 22:t.mode&1?(dn=(i=dn)||t.memoizedState!==null,Rr(n,e,t),dn=i):Rr(n,e,t);break;default:Rr(n,e,t)}}function i_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new dw),e.forEach(function(i){var r=Mw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function _i(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:en=o.stateNode,Mi=!1;break e;case 3:en=o.stateNode.containerInfo,Mi=!0;break e;case 4:en=o.stateNode.containerInfo,Mi=!0;break e}o=o.return}if(en===null)throw Error(se(160));oS(s,a,r),en=null,Mi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Dt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lS(e,n),e=e.sibling}function lS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(_i(e,n),Ni(n),i&4){try{nl(3,n,n.return),cf(3,n)}catch(v){Dt(n,n.return,v)}try{nl(5,n,n.return)}catch(v){Dt(n,n.return,v)}}break;case 1:_i(e,n),Ni(n),i&512&&t!==null&&Fa(t,t.return);break;case 5:if(_i(e,n),Ni(n),i&512&&t!==null&&Fa(t,t.return),n.flags&32){var r=n.stateNode;try{fl(r,"")}catch(v){Dt(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Px(r,s),ph(o,a);var c=ph(o,s);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?Ux(r,f):u==="dangerouslySetInnerHTML"?Lx(r,f):u==="children"?fl(r,f):_m(r,u,f,c)}switch(o){case"input":ch(r,s);break;case"textarea":Dx(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?za(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?za(r,!!s.multiple,s.defaultValue,!0):za(r,!!s.multiple,s.multiple?[]:"",!1))}r[yl]=s}catch(v){Dt(n,n.return,v)}}break;case 6:if(_i(e,n),Ni(n),i&4){if(n.stateNode===null)throw Error(se(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){Dt(n,n.return,v)}}break;case 3:if(_i(e,n),Ni(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ml(e.containerInfo)}catch(v){Dt(n,n.return,v)}break;case 4:_i(e,n),Ni(n);break;case 13:_i(e,n),Ni(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Km=Ft())),i&4&&i_(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(dn=(c=dn)||u,_i(e,n),dn=c):_i(e,n),Ni(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(ve=n,u=n.child;u!==null;){for(f=ve=u;ve!==null;){switch(d=ve,g=d.child,d.tag){case 0:case 11:case 14:case 15:nl(4,d,d.return);break;case 1:Fa(d,d.return);var p=d.stateNode;if(typeof p.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(v){Dt(i,t,v)}}break;case 5:Fa(d,d.return);break;case 22:if(d.memoizedState!==null){s_(f);continue}}g!==null?(g.return=d,ve=g):s_(f)}u=u.sibling}e:for(u=null,f=n;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Ix("display",a))}catch(v){Dt(n,n.return,v)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){Dt(n,n.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:_i(e,n),Ni(n),i&4&&i_(n);break;case 21:break;default:_i(e,n),Ni(n)}}function Ni(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(aS(t)){var i=t;break e}t=t.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(fl(r,""),i.flags&=-33);var s=n_(n);Wh(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=n_(n);Gh(n,o,a);break;default:throw Error(se(161))}}catch(l){Dt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function pw(n,e,t){ve=n,cS(n)}function cS(n,e,t){for(var i=(n.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||xc;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||dn;o=xc;var c=dn;if(xc=a,(dn=l)&&!c)for(ve=r;ve!==null;)a=ve,l=a.child,a.tag===22&&a.memoizedState!==null?a_(r):l!==null?(l.return=a,ve=l):a_(r);for(;s!==null;)ve=s,cS(s),s=s.sibling;ve=r,xc=o,dn=c}r_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):r_(n)}}function r_(n){for(;ve!==null;){var e=ve;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dn||cf(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!dn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Si(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&H0(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}H0(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&ml(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}dn||e.flags&512&&Hh(e)}catch(d){Dt(e,e.return,d)}}if(e===n){ve=null;break}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}}function s_(n){for(;ve!==null;){var e=ve;if(e===n){ve=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ve=t;break}ve=e.return}}function a_(n){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{cf(4,e)}catch(l){Dt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Dt(e,r,l)}}var s=e.return;try{Hh(e)}catch(l){Dt(e,s,l)}break;case 5:var a=e.return;try{Hh(e)}catch(l){Dt(e,a,l)}}}catch(l){Dt(e,e.return,l)}if(e===n){ve=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ve=o;break}ve=e.return}}var mw=Math.ceil,Ou=Ar.ReactCurrentDispatcher,$m=Ar.ReactCurrentOwner,hi=Ar.ReactCurrentBatchConfig,et=0,Zt=null,Vt=null,nn=0,Gn=0,Oa=ds(0),Wt=0,Al=null,Zs=0,uf=0,Ym=0,il=null,Cn=null,Km=0,io=1/0,or=null,ku=!1,jh=null,es=null,yc=!1,Hr=null,Bu=0,rl=0,Xh=null,tu=-1,nu=0;function Sn(){return et&6?Ft():tu!==-1?tu:tu=Ft()}function ts(n){return n.mode&1?et&2&&nn!==0?nn&-nn:JT.transition!==null?(nu===0&&(nu=qx()),nu):(n=lt,n!==0||(n=window.event,n=n===void 0?16:ey(n.type)),n):1}function Ci(n,e,t,i){if(50<rl)throw rl=0,Xh=null,Error(se(185));Vl(n,t,i),(!(et&2)||n!==Zt)&&(n===Zt&&(!(et&2)&&(uf|=t),Wt===4&&Br(n,nn)),Dn(n,i),t===1&&et===0&&!(e.mode&1)&&(io=Ft()+500,af&&hs()))}function Dn(n,e){var t=n.callbackNode;JE(n,e);var i=Mu(n,n===Zt?nn:0);if(i===0)t!==null&&m0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&m0(t),e===1)n.tag===0?ZT(o_.bind(null,n)):xy(o_.bind(null,n)),qT(function(){!(et&6)&&hs()}),t=null;else{switch($x(i)){case 1:t=Mm;break;case 4:t=jx;break;case 16:t=Su;break;case 536870912:t=Xx;break;default:t=Su}t=_S(t,uS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function uS(n,e){if(tu=-1,nu=0,et&6)throw Error(se(327));var t=n.callbackNode;if(ja()&&n.callbackNode!==t)return null;var i=Mu(n,n===Zt?nn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=zu(n,i);else{e=i;var r=et;et|=2;var s=dS();(Zt!==n||nn!==e)&&(or=null,io=Ft()+500,zs(n,e));do try{vw();break}catch(o){fS(n,o)}while(!0);Um(),Ou.current=s,et=r,Vt!==null?e=0:(Zt=null,nn=0,e=Wt)}if(e!==0){if(e===2&&(r=xh(n),r!==0&&(i=r,e=qh(n,r))),e===1)throw t=Al,zs(n,0),Br(n,i),Dn(n,Ft()),t;if(e===6)Br(n,i);else{if(r=n.current.alternate,!(i&30)&&!gw(r)&&(e=zu(n,i),e===2&&(s=xh(n),s!==0&&(i=s,e=qh(n,s))),e===1))throw t=Al,zs(n,0),Br(n,i),Dn(n,Ft()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Cs(n,Cn,or);break;case 3:if(Br(n,i),(i&130023424)===i&&(e=Km+500-Ft(),10<e)){if(Mu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Sn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ch(Cs.bind(null,n,Cn,or),e);break}Cs(n,Cn,or);break;case 4:if(Br(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-Ai(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*mw(i/1960))-i,10<i){n.timeoutHandle=Ch(Cs.bind(null,n,Cn,or),i);break}Cs(n,Cn,or);break;case 5:Cs(n,Cn,or);break;default:throw Error(se(329))}}}return Dn(n,Ft()),n.callbackNode===t?uS.bind(null,n):null}function qh(n,e){var t=il;return n.current.memoizedState.isDehydrated&&(zs(n,e).flags|=256),n=zu(n,e),n!==2&&(e=Cn,Cn=t,e!==null&&$h(e)),n}function $h(n){Cn===null?Cn=n:Cn.push.apply(Cn,n)}function gw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!bi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Br(n,e){for(e&=~Ym,e&=~uf,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Ai(e),i=1<<t;n[t]=-1,e&=~i}}function o_(n){if(et&6)throw Error(se(327));ja();var e=Mu(n,0);if(!(e&1))return Dn(n,Ft()),null;var t=zu(n,e);if(n.tag!==0&&t===2){var i=xh(n);i!==0&&(e=i,t=qh(n,i))}if(t===1)throw t=Al,zs(n,0),Br(n,e),Dn(n,Ft()),t;if(t===6)throw Error(se(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Cs(n,Cn,or),Dn(n,Ft()),null}function Zm(n,e){var t=et;et|=1;try{return n(e)}finally{et=t,et===0&&(io=Ft()+500,af&&hs())}}function Js(n){Hr!==null&&Hr.tag===0&&!(et&6)&&ja();var e=et;et|=1;var t=hi.transition,i=lt;try{if(hi.transition=null,lt=1,n)return n()}finally{lt=i,hi.transition=t,et=e,!(et&6)&&hs()}}function Jm(){Gn=Oa.current,vt(Oa)}function zs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,XT(t)),Vt!==null)for(t=Vt.return;t!==null;){var i=t;switch(Nm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Cu();break;case 3:to(),vt(Rn),vt(_n),Vm();break;case 5:zm(i);break;case 4:to();break;case 13:vt(Et);break;case 19:vt(Et);break;case 10:Fm(i.type._context);break;case 22:case 23:Jm()}t=t.return}if(Zt=n,Vt=n=ns(n.current,null),nn=Gn=e,Wt=0,Al=null,Ym=uf=Zs=0,Cn=il=null,Ls!==null){for(e=0;e<Ls.length;e++)if(t=Ls[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}Ls=null}return n}function fS(n,e){do{var t=Vt;try{if(Um(),Jc.current=Fu,Uu){for(var i=At.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Uu=!1}if(Ks=0,Yt=Gt=At=null,tl=!1,El=0,$m.current=null,t===null||t.return===null){Wt=1,Al=e,Vt=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=nn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=$0(a);if(g!==null){g.flags&=-257,Y0(g,a,o,s,e),g.mode&1&&q0(s,c,e),e=g,l=c;var p=e.updateQueue;if(p===null){var v=new Set;v.add(l),e.updateQueue=v}else p.add(l);break e}else{if(!(e&1)){q0(s,c,e),Qm();break e}l=Error(se(426))}}else if(yt&&o.mode&1){var m=$0(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Y0(m,a,o,s,e),Lm(no(l,o));break e}}s=l=no(l,o),Wt!==4&&(Wt=2),il===null?il=[s]:il.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=$y(s,l,e);V0(s,h);break e;case 1:o=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(es===null||!es.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Yy(s,o,e);V0(s,S);break e}}s=s.return}while(s!==null)}pS(t)}catch(E){e=E,Vt===t&&t!==null&&(Vt=t=t.return);continue}break}while(!0)}function dS(){var n=Ou.current;return Ou.current=Fu,n===null?Fu:n}function Qm(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),Zt===null||!(Zs&268435455)&&!(uf&268435455)||Br(Zt,nn)}function zu(n,e){var t=et;et|=2;var i=dS();(Zt!==n||nn!==e)&&(or=null,zs(n,e));do try{_w();break}catch(r){fS(n,r)}while(!0);if(Um(),et=t,Ou.current=i,Vt!==null)throw Error(se(261));return Zt=null,nn=0,Wt}function _w(){for(;Vt!==null;)hS(Vt)}function vw(){for(;Vt!==null&&!GE();)hS(Vt)}function hS(n){var e=gS(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,e===null?pS(n):Vt=e,$m.current=null}function pS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=fw(t,e),t!==null){t.flags&=32767,Vt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Wt=6,Vt=null;return}}else if(t=uw(t,e,Gn),t!==null){Vt=t;return}if(e=e.sibling,e!==null){Vt=e;return}Vt=e=n}while(e!==null);Wt===0&&(Wt=5)}function Cs(n,e,t){var i=lt,r=hi.transition;try{hi.transition=null,lt=1,xw(n,e,t,i)}finally{hi.transition=r,lt=i}return null}function xw(n,e,t,i){do ja();while(Hr!==null);if(et&6)throw Error(se(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(se(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(QE(n,s),n===Zt&&(Vt=Zt=null,nn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||yc||(yc=!0,_S(Su,function(){return ja(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=hi.transition,hi.transition=null;var a=lt;lt=1;var o=et;et|=4,$m.current=null,hw(n,t),lS(t,n),BT(wh),Eu=!!Th,wh=Th=null,n.current=t,pw(t),WE(),et=o,lt=a,hi.transition=s}else n.current=t;if(yc&&(yc=!1,Hr=n,Bu=r),s=n.pendingLanes,s===0&&(es=null),qE(t.stateNode),Dn(n,Ft()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ku)throw ku=!1,n=jh,jh=null,n;return Bu&1&&n.tag!==0&&ja(),s=n.pendingLanes,s&1?n===Xh?rl++:(rl=0,Xh=n):rl=0,hs(),null}function ja(){if(Hr!==null){var n=$x(Bu),e=hi.transition,t=lt;try{if(hi.transition=null,lt=16>n?16:n,Hr===null)var i=!1;else{if(n=Hr,Hr=null,Bu=0,et&6)throw Error(se(331));var r=et;for(et|=4,ve=n.current;ve!==null;){var s=ve,a=s.child;if(ve.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ve=c;ve!==null;){var u=ve;switch(u.tag){case 0:case 11:case 15:nl(8,u,s)}var f=u.child;if(f!==null)f.return=u,ve=f;else for(;ve!==null;){u=ve;var d=u.sibling,g=u.return;if(sS(u),u===c){ve=null;break}if(d!==null){d.return=g,ve=d;break}ve=g}}}var p=s.alternate;if(p!==null){var v=p.child;if(v!==null){p.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}ve=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ve=a;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:nl(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ve=h;break e}ve=s.return}}var _=n.current;for(ve=_;ve!==null;){a=ve;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,ve=x;else e:for(a=_;ve!==null;){if(o=ve,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:cf(9,o)}}catch(E){Dt(o,o.return,E)}if(o===a){ve=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ve=S;break e}ve=o.return}}if(et=r,hs(),ji&&typeof ji.onPostCommitFiberRoot=="function")try{ji.onPostCommitFiberRoot(ef,n)}catch{}i=!0}return i}finally{lt=t,hi.transition=e}}return!1}function l_(n,e,t){e=no(t,e),e=$y(n,e,1),n=Qr(n,e,1),e=Sn(),n!==null&&(Vl(n,1,e),Dn(n,e))}function Dt(n,e,t){if(n.tag===3)l_(n,n,t);else for(;e!==null;){if(e.tag===3){l_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(es===null||!es.has(i))){n=no(t,n),n=Yy(e,n,1),e=Qr(e,n,1),n=Sn(),e!==null&&(Vl(e,1,n),Dn(e,n));break}}e=e.return}}function yw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Sn(),n.pingedLanes|=n.suspendedLanes&t,Zt===n&&(nn&t)===t&&(Wt===4||Wt===3&&(nn&130023424)===nn&&500>Ft()-Km?zs(n,0):Ym|=t),Dn(n,e)}function mS(n,e){e===0&&(n.mode&1?(e=uc,uc<<=1,!(uc&130023424)&&(uc=4194304)):e=1);var t=Sn();n=yr(n,e),n!==null&&(Vl(n,e,t),Dn(n,t))}function Sw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),mS(n,t)}function Mw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),mS(n,t)}var gS;gS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Rn.current)bn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return bn=!1,cw(n,e,t);bn=!!(n.flags&131072)}else bn=!1,yt&&e.flags&1048576&&yy(e,Pu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;eu(n,e),n=e.pendingProps;var r=Ja(e,_n.current);Wa(e,t),r=Gm(null,e,i,n,r,t);var s=Wm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pn(i)?(s=!0,bu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,km(e),r.updater=lf,e.stateNode=r,r._reactInternals=e,Ih(e,i,n,t),e=Oh(null,e,i,!0,s,t)):(e.tag=0,yt&&s&&Dm(e),xn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(eu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Tw(i),n=Si(i,n),r){case 0:e=Fh(null,e,i,n,t);break e;case 1:e=J0(null,e,i,n,t);break e;case 11:e=K0(null,e,i,n,t);break e;case 14:e=Z0(null,e,i,Si(i.type,n),t);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Si(i,r),Fh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Si(i,r),J0(n,e,i,r,t);case 3:e:{if(Qy(e),n===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ay(n,e),Lu(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=no(Error(se(423)),e),e=Q0(n,e,i,t,r);break e}else if(i!==r){r=no(Error(se(424)),e),e=Q0(n,e,i,t,r);break e}else for($n=Jr(e.stateNode.containerInfo.firstChild),Zn=e,yt=!0,Ei=null,t=Ty(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Qa(),i===r){e=Sr(n,e,t);break e}xn(n,e,i,t)}e=e.child}return e;case 5:return Cy(e),n===null&&Dh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,Ah(i,r)?a=null:s!==null&&Ah(i,s)&&(e.flags|=32),Jy(n,e),xn(n,e,a,t),e.child;case 6:return n===null&&Dh(e),null;case 13:return eS(n,e,t);case 4:return Bm(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=eo(e,null,i,t):xn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Si(i,r),K0(n,e,i,r,t);case 7:return xn(n,e,e.pendingProps,t),e.child;case 8:return xn(n,e,e.pendingProps.children,t),e.child;case 12:return xn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,gt(Du,i._currentValue),i._currentValue=a,s!==null)if(bi(s.value,a)){if(s.children===r.children&&!Rn.current){e=Sr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=mr(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Nh(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Nh(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}xn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Wa(e,t),r=pi(r),i=i(r),e.flags|=1,xn(n,e,i,t),e.child;case 14:return i=e.type,r=Si(i,e.pendingProps),r=Si(i.type,r),Z0(n,e,i,r,t);case 15:return Ky(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Si(i,r),eu(n,e),e.tag=1,Pn(i)?(n=!0,bu(e)):n=!1,Wa(e,t),qy(e,i,r),Ih(e,i,r,t),Oh(null,e,i,!0,n,t);case 19:return tS(n,e,t);case 22:return Zy(n,e,t)}throw Error(se(156,e.tag))};function _S(n,e){return Wx(n,e)}function Ew(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(n,e,t,i){return new Ew(n,e,t,i)}function eg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Tw(n){if(typeof n=="function")return eg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===xm)return 11;if(n===ym)return 14}return 2}function ns(n,e){var t=n.alternate;return t===null?(t=ui(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function iu(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")eg(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case Ca:return Vs(t.children,r,s,e);case vm:a=8,r|=8;break;case rh:return n=ui(12,t,e,r|2),n.elementType=rh,n.lanes=s,n;case sh:return n=ui(13,t,e,r),n.elementType=sh,n.lanes=s,n;case ah:return n=ui(19,t,e,r),n.elementType=ah,n.lanes=s,n;case Cx:return ff(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case wx:a=10;break e;case Ax:a=9;break e;case xm:a=11;break e;case ym:a=14;break e;case Fr:a=16,i=null;break e}throw Error(se(130,n==null?n:typeof n,""))}return e=ui(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Vs(n,e,t,i){return n=ui(7,n,i,e),n.lanes=t,n}function ff(n,e,t,i){return n=ui(22,n,i,e),n.elementType=Cx,n.lanes=t,n.stateNode={isHidden:!1},n}function ad(n,e,t){return n=ui(6,n,null,e),n.lanes=t,n}function od(n,e,t){return e=ui(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function ww(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vf(0),this.expirationTimes=Vf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function tg(n,e,t,i,r,s,a,o,l){return n=new ww(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ui(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},km(s),n}function Aw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Aa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function vS(n){if(!n)return as;n=n._reactInternals;e:{if(ia(n)!==n||n.tag!==1)throw Error(se(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(n.tag===1){var t=n.type;if(Pn(t))return vy(n,t,e)}return e}function xS(n,e,t,i,r,s,a,o,l){return n=tg(t,i,!0,n,r,s,a,o,l),n.context=vS(null),t=n.current,i=Sn(),r=ts(t),s=mr(i,r),s.callback=e??null,Qr(t,s,r),n.current.lanes=r,Vl(n,r,i),Dn(n,i),n}function df(n,e,t,i){var r=e.current,s=Sn(),a=ts(r);return t=vS(t),e.context===null?e.context=t:e.pendingContext=t,e=mr(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Qr(r,e,a),n!==null&&(Ci(n,r,a,s),Zc(n,r,a)),a}function Vu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function c_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ng(n,e){c_(n,e),(n=n.alternate)&&c_(n,e)}function Cw(){return null}var yS=typeof reportError=="function"?reportError:function(n){console.error(n)};function ig(n){this._internalRoot=n}hf.prototype.render=ig.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(se(409));df(n,e,null,null)};hf.prototype.unmount=ig.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Js(function(){df(null,n,null,null)}),e[xr]=null}};function hf(n){this._internalRoot=n}hf.prototype.unstable_scheduleHydration=function(n){if(n){var e=Zx();n={blockedOn:null,target:n,priority:e};for(var t=0;t<kr.length&&e!==0&&e<kr[t].priority;t++);kr.splice(t,0,n),t===0&&Qx(n)}};function rg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function u_(){}function bw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Vu(a);s.call(c)}}var a=xS(e,i,n,0,null,!1,!1,"",u_);return n._reactRootContainer=a,n[xr]=a.current,vl(n.nodeType===8?n.parentNode:n),Js(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Vu(l);o.call(c)}}var l=tg(n,0,!1,null,null,!1,!1,"",u_);return n._reactRootContainer=l,n[xr]=l.current,vl(n.nodeType===8?n.parentNode:n),Js(function(){df(e,l,t,i)}),l}function mf(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Vu(a);o.call(l)}}df(e,a,n,r)}else a=bw(t,e,n,r,i);return Vu(a)}Yx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Wo(e.pendingLanes);t!==0&&(Em(e,t|1),Dn(e,Ft()),!(et&6)&&(io=Ft()+500,hs()))}break;case 13:Js(function(){var i=yr(n,1);if(i!==null){var r=Sn();Ci(i,n,1,r)}}),ng(n,1)}};Tm=function(n){if(n.tag===13){var e=yr(n,134217728);if(e!==null){var t=Sn();Ci(e,n,134217728,t)}ng(n,134217728)}};Kx=function(n){if(n.tag===13){var e=ts(n),t=yr(n,e);if(t!==null){var i=Sn();Ci(t,n,e,i)}ng(n,e)}};Zx=function(){return lt};Jx=function(n,e){var t=lt;try{return lt=n,e()}finally{lt=t}};gh=function(n,e,t){switch(e){case"input":if(ch(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=sf(i);if(!r)throw Error(se(90));Rx(i),ch(i,r)}}}break;case"textarea":Dx(n,t);break;case"select":e=t.value,e!=null&&za(n,!!t.multiple,e,!1)}};kx=Zm;Bx=Js;var Rw={usingClientEntryPoint:!1,Events:[Gl,Da,sf,Fx,Ox,Zm]},No={findFiberByHostInstance:Ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pw={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Hx(n),n===null?null:n.stateNode},findFiberByHostInstance:No.findFiberByHostInstance||Cw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{ef=Sc.inject(Pw),ji=Sc}catch{}}ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rw;ni.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rg(e))throw Error(se(200));return Aw(n,e,null,t)};ni.createRoot=function(n,e){if(!rg(n))throw Error(se(299));var t=!1,i="",r=yS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=tg(n,1,!1,null,null,t,!1,i,r),n[xr]=e.current,vl(n.nodeType===8?n.parentNode:n),new ig(e)};ni.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(se(188)):(n=Object.keys(n).join(","),Error(se(268,n)));return n=Hx(e),n=n===null?null:n.stateNode,n};ni.flushSync=function(n){return Js(n)};ni.hydrate=function(n,e,t){if(!pf(e))throw Error(se(200));return mf(null,n,e,!0,t)};ni.hydrateRoot=function(n,e,t){if(!rg(n))throw Error(se(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=yS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=xS(e,null,n,1,t??null,r,!1,s,a),n[xr]=e.current,vl(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new hf(e)};ni.render=function(n,e,t){if(!pf(e))throw Error(se(200));return mf(null,n,e,!1,t)};ni.unmountComponentAtNode=function(n){if(!pf(n))throw Error(se(40));return n._reactRootContainer?(Js(function(){mf(null,null,n,!1,function(){n._reactRootContainer=null,n[xr]=null})}),!0):!1};ni.unstable_batchedUpdates=Zm;ni.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!pf(t))throw Error(se(200));if(n==null||n._reactInternals===void 0)throw Error(se(38));return mf(n,e,t,!1,i)};ni.version="18.3.1-next-f1338f8080-20240426";function SS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(SS)}catch(n){console.error(n)}}SS(),Sx.exports=ni;var Dw=Sx.exports,f_=Dw;nh.createRoot=f_.createRoot,nh.hydrateRoot=f_.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cl(){return Cl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Cl.apply(this,arguments)}var Gr;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Gr||(Gr={}));const d_="popstate";function Nw(n){n===void 0&&(n={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return Yh("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:MS(r)}return Iw(e,t,null,n)}function Ht(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function sg(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Lw(){return Math.random().toString(36).substr(2,8)}function h_(n,e){return{usr:n.state,key:n.key,idx:e}}function Yh(n,e,t,i){return t===void 0&&(t=null),Cl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?yo(e):e,{state:t,key:e&&e.key||i||Lw()})}function MS(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function yo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function Iw(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Gr.Pop,l=null,c=u();c==null&&(c=0,a.replaceState(Cl({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function f(){o=Gr.Pop;let m=u(),h=m==null?null:m-c;c=m,l&&l({action:o,location:v.location,delta:h})}function d(m,h){o=Gr.Push;let _=Yh(v.location,m,h);c=u()+1;let x=h_(_,c),S=v.createHref(_);try{a.pushState(x,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;r.location.assign(S)}s&&l&&l({action:o,location:v.location,delta:1})}function g(m,h){o=Gr.Replace;let _=Yh(v.location,m,h);c=u();let x=h_(_,c),S=v.createHref(_);a.replaceState(x,"",S),s&&l&&l({action:o,location:v.location,delta:0})}function p(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof m=="string"?m:MS(m);return _=_.replace(/ $/,"%20"),Ht(h,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,h)}let v={get action(){return o},get location(){return n(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(d_,f),l=m,()=>{r.removeEventListener(d_,f),l=null}},createHref(m){return e(r,m)},createURL:p,encodeLocation(m){let h=p(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:g,go(m){return a.go(m)}};return v}var p_;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(p_||(p_={}));function Uw(n,e,t){return t===void 0&&(t="/"),Fw(n,e,t)}function Fw(n,e,t,i){let r=typeof e=="string"?yo(e):e,s=wS(r.pathname||"/",t);if(s==null)return null;let a=ES(n);Ow(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=Yw(s);o=Xw(a[l],c)}return o}function ES(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Ht(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Hs([i,l.relativePath]),u=t.concat(l);s.children&&s.children.length>0&&(Ht(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ES(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Ww(c,s.index),routesMeta:u})};return n.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of TS(s.path))r(s,a,l)}),e}function TS(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=TS(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>n.startsWith("/")&&l===""?"/":l)}function Ow(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:jw(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const kw=/^:[\w-]+$/,Bw=3,zw=2,Vw=1,Hw=10,Gw=-2,m_=n=>n==="*";function Ww(n,e){let t=n.split("/"),i=t.length;return t.some(m_)&&(i+=Gw),e&&(i+=zw),t.filter(r=>!m_(r)).reduce((r,s)=>r+(kw.test(s)?Bw:s===""?Vw:Hw),i)}function jw(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function Xw(n,e,t){let{routesMeta:i}=n,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",f=qw({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),d=l.route;if(!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:Hs([s,f.pathname]),pathnameBase:eA(Hs([s,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(s=Hs([s,f.pathnameBase]))}return a}function qw(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=$w(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,u,f)=>{let{paramName:d,isOptional:g}=u;if(d==="*"){let v=o[f]||"";a=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const p=o[f];return g&&!p?c[d]=void 0:c[d]=(p||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:n}}function $w(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),sg(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Yw(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return sg(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function wS(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const Kw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zw=n=>Kw.test(n);function Jw(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?yo(n):n,s;if(t)if(Zw(t))s=t;else{if(t.includes("//")){let a=t;t=t.replace(/\/\/+/g,"/"),sg(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?s=g_(t.substring(1),"/"):s=g_(t,e)}else s=e;return{pathname:s,search:tA(i),hash:nA(r)}}function g_(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function ld(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Qw(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function AS(n,e){let t=Qw(n);return e?t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function CS(n,e,t,i){i===void 0&&(i=!1);let r;typeof n=="string"?r=yo(n):(r=Cl({},n),Ht(!r.pathname||!r.pathname.includes("?"),ld("?","pathname","search",r)),Ht(!r.pathname||!r.pathname.includes("#"),ld("#","pathname","hash",r)),Ht(!r.search||!r.search.includes("#"),ld("#","search","hash",r)));let s=n===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=t;else{let f=e.length-1;if(!i&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;r.pathname=d.join("/")}o=f>=0?e[f]:"/"}let l=Jw(r,o),c=a&&a!=="/"&&a.endsWith("/"),u=(s||a===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Hs=n=>n.join("/").replace(/\/\/+/g,"/"),eA=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),tA=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,nA=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function iA(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const bS=["post","put","patch","delete"];new Set(bS);const rA=["get",...bS];new Set(rA);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bl(){return bl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},bl.apply(this,arguments)}const ag=Z.createContext(null),sA=Z.createContext(null),jl=Z.createContext(null),gf=Z.createContext(null),ps=Z.createContext({outlet:null,matches:[],isDataRoute:!1}),RS=Z.createContext(null);function Xl(){return Z.useContext(gf)!=null}function _f(){return Xl()||Ht(!1),Z.useContext(gf).location}function PS(n){Z.useContext(jl).static||Z.useLayoutEffect(n)}function ra(){let{isDataRoute:n}=Z.useContext(ps);return n?xA():aA()}function aA(){Xl()||Ht(!1);let n=Z.useContext(ag),{basename:e,future:t,navigator:i}=Z.useContext(jl),{matches:r}=Z.useContext(ps),{pathname:s}=_f(),a=JSON.stringify(AS(r,t.v7_relativeSplatPath)),o=Z.useRef(!1);return PS(()=>{o.current=!0}),Z.useCallback(function(c,u){if(u===void 0&&(u={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=CS(c,JSON.parse(a),s,u.relative==="path");n==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Hs([e,f.pathname])),(u.replace?i.replace:i.push)(f,u.state,u)},[e,i,a,s,n])}function oA(){let{matches:n}=Z.useContext(ps),e=n[n.length-1];return e?e.params:{}}function lA(n,e){return cA(n,e)}function cA(n,e,t,i){Xl()||Ht(!1);let{navigator:r}=Z.useContext(jl),{matches:s}=Z.useContext(ps),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=_f(),u;if(e){var f;let m=typeof e=="string"?yo(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||Ht(!1),u=m}else u=c;let d=u.pathname||"/",g=d;if(l!=="/"){let m=l.replace(/^\//,"").split("/");g="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let p=Uw(n,{pathname:g}),v=pA(p&&p.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Hs([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Hs([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,t,i);return e&&v?Z.createElement(gf.Provider,{value:{location:bl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Gr.Pop}},v):v}function uA(){let n=vA(),e=iA(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Z.createElement(Z.Fragment,null,Z.createElement("h2",null,"Unexpected Application Error!"),Z.createElement("h3",{style:{fontStyle:"italic"}},e),t?Z.createElement("pre",{style:r},t):null,null)}const fA=Z.createElement(uA,null);class dA extends Z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Z.createElement(ps.Provider,{value:this.props.routeContext},Z.createElement(RS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hA(n){let{routeContext:e,match:t,children:i}=n,r=Z.useContext(ag);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),Z.createElement(ps.Provider,{value:e},i)}function pA(n,e,t,i){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var s;if(!t)return null;if(t.errors)n=t.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,o=(r=t)==null?void 0:r.errors;if(o!=null){let u=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);u>=0||Ht(!1),a=a.slice(0,Math.min(a.length,u+1))}let l=!1,c=-1;if(t&&i&&i.v7_partialHydration)for(let u=0;u<a.length;u++){let f=a[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:d,errors:g}=t,p=f.route.loader&&d[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||p){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((u,f,d)=>{let g,p=!1,v=null,m=null;t&&(g=o&&f.route.id?o[f.route.id]:void 0,v=f.route.errorElement||fA,l&&(c<0&&d===0?(yA("route-fallback"),p=!0,m=null):c===d&&(p=!0,m=f.route.hydrateFallbackElement||null)));let h=e.concat(a.slice(0,d+1)),_=()=>{let x;return g?x=v:p?x=m:f.route.Component?x=Z.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=u,Z.createElement(hA,{match:f,routeContext:{outlet:u,matches:h,isDataRoute:t!=null},children:x})};return t&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?Z.createElement(dA,{location:t.location,revalidation:t.revalidation,component:v,error:g,children:_(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):_()},null)}var DS=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(DS||{}),NS=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(NS||{});function mA(n){let e=Z.useContext(ag);return e||Ht(!1),e}function gA(n){let e=Z.useContext(sA);return e||Ht(!1),e}function _A(n){let e=Z.useContext(ps);return e||Ht(!1),e}function LS(n){let e=_A(),t=e.matches[e.matches.length-1];return t.route.id||Ht(!1),t.route.id}function vA(){var n;let e=Z.useContext(RS),t=gA(),i=LS();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function xA(){let{router:n}=mA(DS.UseNavigateStable),e=LS(NS.UseNavigateStable),t=Z.useRef(!1);return PS(()=>{t.current=!0}),Z.useCallback(function(r,s){s===void 0&&(s={}),t.current&&(typeof r=="number"?n.navigate(r):n.navigate(r,bl({fromRouteId:e},s)))},[n,e])}const __={};function yA(n,e,t){__[n]||(__[n]=!0)}function SA(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function MA(n){let{to:e,replace:t,state:i,relative:r}=n;Xl()||Ht(!1);let{future:s,static:a}=Z.useContext(jl),{matches:o}=Z.useContext(ps),{pathname:l}=_f(),c=ra(),u=CS(e,AS(o,s.v7_relativeSplatPath),l,r==="path"),f=JSON.stringify(u);return Z.useEffect(()=>c(JSON.parse(f),{replace:t,state:i,relative:r}),[c,f,r,t,i]),null}function Ui(n){Ht(!1)}function EA(n){let{basename:e="/",children:t=null,location:i,navigationType:r=Gr.Pop,navigator:s,static:a=!1,future:o}=n;Xl()&&Ht(!1);let l=e.replace(/^\/*/,"/"),c=Z.useMemo(()=>({basename:l,navigator:s,static:a,future:bl({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=yo(i));let{pathname:u="/",search:f="",hash:d="",state:g=null,key:p="default"}=i,v=Z.useMemo(()=>{let m=wS(u,l);return m==null?null:{location:{pathname:m,search:f,hash:d,state:g,key:p},navigationType:r}},[l,u,f,d,g,p,r]);return v==null?null:Z.createElement(jl.Provider,{value:c},Z.createElement(gf.Provider,{children:t,value:v}))}function TA(n){let{children:e,location:t}=n;return lA(Kh(e),t)}new Promise(()=>{});function Kh(n,e){e===void 0&&(e=[]);let t=[];return Z.Children.forEach(n,(i,r)=>{if(!Z.isValidElement(i))return;let s=[...e,r];if(i.type===Z.Fragment){t.push.apply(t,Kh(i.props.children,s));return}i.type!==Ui&&Ht(!1),!i.props.index||!i.props.children||Ht(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Kh(i.props.children,s)),t.push(a)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const wA="6";try{window.__reactRouterVersion=wA}catch{}const AA="startTransition",v_=yE[AA];function CA(n){let{basename:e,children:t,future:i,window:r}=n,s=Z.useRef();s.current==null&&(s.current=Nw({window:r,v5Compat:!0}));let a=s.current,[o,l]=Z.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},u=Z.useCallback(f=>{c&&v_?v_(()=>l(f)):l(f)},[l,c]);return Z.useLayoutEffect(()=>a.listen(u),[a,u]),Z.useEffect(()=>SA(i),[i]),Z.createElement(EA,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,future:i})}var x_;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(x_||(x_={}));var y_;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(y_||(y_={}));const bA="modulepreload",RA=function(n){return"/"+n},S_={},PA=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=RA(l),l in S_)return;S_[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":bA,c||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),c)return new Promise((d,g)=>{f.addEventListener("load",d),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),NA=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),M_=n=>{const e=NA(n);return e.charAt(0).toUpperCase()+e.slice(1)},IS=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim(),LA=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var IA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=Z.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>Z.createElement("svg",{ref:l,...IA,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:IS("lucide",r),...!s&&!LA(o)&&{"aria-hidden":"true"},...o},[...a.map(([c,u])=>Z.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=(n,e)=>{const t=Z.forwardRef(({className:i,...r},s)=>Z.createElement(UA,{ref:s,iconNode:e,className:IS(`lucide-${DA(M_(n))}`,`lucide-${n}`,i),...r}));return t.displayName=M_(n),t};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],US=it("arrow-left",FA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],kA=it("bell",OA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]],ru=it("book-open-check",BA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h6",key:"1f0q6e"}]],VA=it("book-text",zA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],GA=it("brain",HA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],FS=it("chevron-down",WA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],XA=it("circle-check",jA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],$A=it("file-spreadsheet",qA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2",key:"9rb54x"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",key:"1059l0"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15",key:"16874u"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11",key:"k2ox98"}]],KA=it("file-stack",YA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],OS=it("file-text",ZA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],QA=it("flame",JA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],tC=it("folder",eC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],iC=it("gamepad-2",nC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],kS=it("globe",rC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],aC=it("house",sC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],lC=it("library",oC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],uC=it("menu",cC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],dC=it("play",fC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],BS=it("plus",hC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],mC=it("rotate-ccw",pC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],_C=it("search",gC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",key:"117uat"}],["path",{d:"M6 12h16",key:"s4cdu5"}]],xC=it("send-horizontal",vC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],SC=it("shield-check",yC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],og=it("sparkles",MC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]],TC=it("sword",EC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],AC=it("target",wC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],bC=it("triangle-alert",CC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],PC=it("trophy",RC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],lg=it("upload",DC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]],LC=it("users-round",NC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],zS=it("x",IC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],FC=it("zap",UC),OC=({searchValue:n,searchPlaceholder:e,avatarUrl:t,onSearchChange:i,onOpenPracticeModal:r,onOpenStudyGuidesModal:s,onProfileClick:a})=>{const[o,l]=Z.useState(!1);return A.jsxs("header",{className:"topbar",children:[A.jsxs("div",{className:"search-shell",children:[A.jsx(_C,{size:26}),A.jsx("input",{value:n,onChange:c=>i(c.target.value),placeholder:e,"aria-label":"Search"})]}),A.jsxs("div",{className:"topbar-actions",children:[A.jsxs("div",{className:"action-menu-wrap",children:[A.jsx("button",{className:"icon-circle",type:"button",onClick:()=>l(c=>!c),"aria-label":"Open quick actions",children:A.jsx(BS,{size:28})}),o?A.jsxs("div",{className:"action-menu",children:[A.jsx("button",{type:"button",onClick:()=>{r(),l(!1)},children:"Generate practice tests"}),A.jsx("button",{type:"button",onClick:()=>{s(),l(!1)},children:"Generate study guides"})]}):null]}),A.jsxs("button",{className:"profile-button",type:"button",onClick:a,children:[A.jsx("img",{src:t,alt:"Profile avatar"}),A.jsx(FS,{size:15})]})]})]})},kC=[{path:"/",label:"Home",icon:aC},{path:"/library",label:"Your library",icon:lC},{path:"/study-groups",label:"Study groups",icon:LC,badge:"New"},{path:"/notifications",label:"Notifications",icon:kA,alertCount:1}],BC=({activePath:n,folders:e,collapsed:t,onToggleCollapse:i,onNavigate:r,onAddFolder:s})=>A.jsxs("aside",{className:`sidebar ${t?"collapsed":""}`,children:[A.jsxs("div",{className:"brand-row",children:[A.jsx("button",{className:"ghost-icon",type:"button",onClick:i,"aria-label":"Toggle sidebar",children:A.jsx(uC,{size:29})}),A.jsx("button",{className:"brand-icon",type:"button",onClick:()=>r("/"),children:"Q"})]}),A.jsx("nav",{className:"sidebar-nav",children:kC.map(a=>A.jsxs("button",{className:n===a.path?"active":"",type:"button",onClick:()=>r(a.path),children:[A.jsx(a.icon,{size:21}),A.jsx("span",{children:a.label}),a.badge?A.jsx("small",{children:a.badge}):null,a.alertCount?A.jsx("em",{children:a.alertCount}):null]},a.path))}),A.jsxs("section",{className:"sidebar-section",children:[A.jsx("h4",{children:"Your folders"}),A.jsxs("button",{type:"button",onClick:s,children:[A.jsx(BS,{size:22}),A.jsx("span",{children:"New folder"})]}),e.map(a=>A.jsxs("article",{children:[A.jsx(tC,{size:18}),A.jsx("span",{children:a.name})]},a.id))]}),A.jsxs("section",{className:"sidebar-section",children:[A.jsx("h4",{children:"Exams"}),A.jsxs("button",{type:"button",onClick:()=>r("/subject/jee-main"),children:[A.jsx(ru,{size:18}),A.jsx("span",{children:"JEE Main"})]}),A.jsxs("button",{type:"button",onClick:()=>r("/subject/neet"),children:[A.jsx(ru,{size:18}),A.jsx("span",{children:"NEET"})]})]}),A.jsxs("section",{className:"sidebar-section footer",children:[A.jsx("h4",{children:"Start here"}),A.jsxs("button",{type:"button",onClick:()=>r("/flashcards"),children:[A.jsx(ru,{size:18}),A.jsx("span",{children:"Flashcards"})]})]})]}),zC=({open:n,onClose:e,onGenerated:t})=>{const[i,r]=Z.useState("paste"),[s,a]=Z.useState(""),[o,l]=Z.useState([]),[c,u]=Z.useState(!1),f=Z.useRef(null),d=Z.useMemo(()=>i==="paste"?s.trim().length>30:i==="upload"?o.length>0:c,[c,s,o.length,i]),g=p=>{l(Array.from(p.target.files??[]))};return n?A.jsx("div",{className:"overlay",children:A.jsxs("div",{className:"overlay__content",children:[A.jsxs("header",{className:"overlay__header",children:[A.jsxs("div",{className:"overlay__title",children:[A.jsx(VA,{size:25}),A.jsx("h2",{children:"Generate study guides"})]}),A.jsx("button",{className:"ghost-icon",type:"button",onClick:e,"aria-label":"Close modal",children:A.jsx(zS,{size:26})})]}),A.jsxs("div",{className:"overlay__body",children:[A.jsxs("div",{className:"tab-row",children:[A.jsx("button",{className:`tab-button ${i==="paste"?"active":""}`,onClick:()=>r("paste"),children:"Paste text"}),A.jsx("button",{className:`tab-button ${i==="upload"?"active":""}`,onClick:()=>r("upload"),children:"Upload files"}),A.jsx("button",{className:`tab-button ${i==="drive"?"active":""}`,onClick:()=>r("drive"),children:"Google Drive"})]}),i==="paste"?A.jsxs("div",{children:[A.jsx("textarea",{className:"text-area text-area--large",value:s,onChange:p=>a(p.target.value),placeholder:"Paste your notes here. We'll do the rest."}),A.jsxs("p",{className:"char-count",children:[s.length,"/100,000 characters"]})]}):null,i==="upload"?A.jsxs("div",{className:"upload-card upload-card--small",children:[A.jsx(lg,{size:48}),A.jsx("h4",{children:"Drop files to build your study guide"}),A.jsx("button",{type:"button",onClick:()=>{var p;return(p=f.current)==null?void 0:p.click()},children:"Browse files"}),A.jsx("input",{ref:f,type:"file",multiple:!0,accept:".pdf,.docx,.pptx,.txt,.png,.jpg,.jpeg",onChange:g,hidden:!0}),o.length?A.jsx("div",{className:"file-chip-row",children:o.map(p=>A.jsx("span",{className:"file-chip",children:p.name},p.name))}):null]}):null,i==="drive"?A.jsxs("div",{className:"upload-card upload-card--small",children:[A.jsx(kS,{size:48}),A.jsx("h4",{children:"Connect Google Drive to import source notes"}),A.jsx("button",{type:"button",onClick:()=>{u(!0),t("Google Drive connected for study guide generation.")},children:c?"Drive connected":"Connect Drive"})]}):null,A.jsxs("section",{className:"guide-meta",children:[A.jsx("h4",{children:"This upload will also provide:"}),A.jsxs("div",{children:[A.jsx("span",{className:"pill",children:"Flashcards"}),A.jsx("p",{children:"Memorise your material"})]})]})]}),A.jsxs("footer",{className:"overlay__footer",children:[A.jsx("p",{children:"This product is enhanced with AI and may provide incorrect or problematic content. Do not enter any personal data."}),A.jsx("button",{type:"button",disabled:!d,onClick:()=>{t(i==="paste"?"Study guide generated from pasted notes.":i==="upload"?"Study guide generated from uploaded files.":"Study guide generated from connected Google Drive notes."),e(),a(""),l([]),u(!1),r("paste")},children:"Generate"})]})]})}):null};function VS(n,e){return function(){return n.apply(e,arguments)}}const{toString:VC}=Object.prototype,{getPrototypeOf:cg}=Object,{iterator:vf,toStringTag:HS}=Symbol,xf=(n=>e=>{const t=VC.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Ri=n=>(n=n.toLowerCase(),e=>xf(e)===n),yf=n=>e=>typeof e===n,{isArray:So}=Array,ro=yf("undefined");function ql(n){return n!==null&&!ro(n)&&n.constructor!==null&&!ro(n.constructor)&&Nn(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const GS=Ri("ArrayBuffer");function HC(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&GS(n.buffer),e}const GC=yf("string"),Nn=yf("function"),WS=yf("number"),$l=n=>n!==null&&typeof n=="object",WC=n=>n===!0||n===!1,su=n=>{if(xf(n)!=="object")return!1;const e=cg(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(HS in n)&&!(vf in n)},jC=n=>{if(!$l(n)||ql(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},XC=Ri("Date"),qC=Ri("File"),$C=Ri("Blob"),YC=Ri("FileList"),KC=n=>$l(n)&&Nn(n.pipe),ZC=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||Nn(n.append)&&((e=xf(n))==="formdata"||e==="object"&&Nn(n.toString)&&n.toString()==="[object FormData]"))},JC=Ri("URLSearchParams"),[QC,eb,tb,nb]=["ReadableStream","Request","Response","Headers"].map(Ri),ib=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Yl(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),So(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{if(ql(n))return;const s=t?Object.getOwnPropertyNames(n):Object.keys(n),a=s.length;let o;for(i=0;i<a;i++)o=s[i],e.call(null,n[o],o,n)}}function jS(n,e){if(ql(n))return null;e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}const Us=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,XS=n=>!ro(n)&&n!==Us;function Zh(){const{caseless:n,skipUndefined:e}=XS(this)&&this||{},t={},i=(r,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const a=n&&jS(t,s)||s;su(t[a])&&su(r)?t[a]=Zh(t[a],r):su(r)?t[a]=Zh({},r):So(r)?t[a]=r.slice():(!e||!ro(r))&&(t[a]=r)};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Yl(arguments[r],i);return t}const rb=(n,e,t,{allOwnKeys:i}={})=>(Yl(e,(r,s)=>{t&&Nn(r)?Object.defineProperty(n,s,{value:VS(r,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(n,s,{value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),n),sb=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),ab=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),Object.defineProperty(n.prototype,"constructor",{value:n,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},ob=(n,e,t,i)=>{let r,s,a;const o={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),s=r.length;s-- >0;)a=r[s],(!i||i(a,n,e))&&!o[a]&&(e[a]=n[a],o[a]=!0);n=t!==!1&&cg(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},lb=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},cb=n=>{if(!n)return null;if(So(n))return n;let e=n.length;if(!WS(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},ub=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&cg(Uint8Array)),fb=(n,e)=>{const i=(n&&n[vf]).call(n);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(n,s[0],s[1])}},db=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},hb=Ri("HTMLFormElement"),pb=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),E_=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),mb=Ri("RegExp"),qS=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};Yl(t,(r,s)=>{let a;(a=e(r,s,n))!==!1&&(i[s]=a||r)}),Object.defineProperties(n,i)},gb=n=>{qS(n,(e,t)=>{if(Nn(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(Nn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},_b=(n,e)=>{const t={},i=r=>{r.forEach(s=>{t[s]=!0})};return So(n)?i(n):i(String(n).split(e)),t},vb=()=>{},xb=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function yb(n){return!!(n&&Nn(n.append)&&n[HS]==="FormData"&&n[vf])}const Sb=n=>{const e=new Array(10),t=(i,r)=>{if($l(i)){if(e.indexOf(i)>=0)return;if(ql(i))return i;if(!("toJSON"in i)){e[r]=i;const s=So(i)?[]:{};return Yl(i,(a,o)=>{const l=t(a,r+1);!ro(l)&&(s[o]=l)}),e[r]=void 0,s}}return i};return t(n,0)},Mb=Ri("AsyncFunction"),Eb=n=>n&&($l(n)||Nn(n))&&Nn(n.then)&&Nn(n.catch),$S=((n,e)=>n?setImmediate:e?((t,i)=>(Us.addEventListener("message",({source:r,data:s})=>{r===Us&&s===t&&i.length&&i.shift()()},!1),r=>{i.push(r),Us.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Nn(Us.postMessage)),Tb=typeof queueMicrotask<"u"?queueMicrotask.bind(Us):typeof process<"u"&&process.nextTick||$S,wb=n=>n!=null&&Nn(n[vf]),q={isArray:So,isArrayBuffer:GS,isBuffer:ql,isFormData:ZC,isArrayBufferView:HC,isString:GC,isNumber:WS,isBoolean:WC,isObject:$l,isPlainObject:su,isEmptyObject:jC,isReadableStream:QC,isRequest:eb,isResponse:tb,isHeaders:nb,isUndefined:ro,isDate:XC,isFile:qC,isBlob:$C,isRegExp:mb,isFunction:Nn,isStream:KC,isURLSearchParams:JC,isTypedArray:ub,isFileList:YC,forEach:Yl,merge:Zh,extend:rb,trim:ib,stripBOM:sb,inherits:ab,toFlatObject:ob,kindOf:xf,kindOfTest:Ri,endsWith:lb,toArray:cb,forEachEntry:fb,matchAll:db,isHTMLForm:hb,hasOwnProperty:E_,hasOwnProp:E_,reduceDescriptors:qS,freezeMethods:gb,toObjectSet:_b,toCamelCase:pb,noop:vb,toFiniteNumber:xb,findKey:jS,global:Us,isContextDefined:XS,isSpecCompliantForm:yb,toJSONObject:Sb,isAsyncFn:Mb,isThenable:Eb,setImmediate:$S,asap:Tb,isIterable:wb};let Ue=class YS extends Error{static from(e,t,i,r,s,a){const o=new YS(e.message,t||e.code,i,r,s);return o.cause=e,o.name=e.name,a&&Object.assign(o,a),o}constructor(e,t,i,r,s){super(e),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.status}}};Ue.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Ue.ERR_BAD_OPTION="ERR_BAD_OPTION";Ue.ECONNABORTED="ECONNABORTED";Ue.ETIMEDOUT="ETIMEDOUT";Ue.ERR_NETWORK="ERR_NETWORK";Ue.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Ue.ERR_DEPRECATED="ERR_DEPRECATED";Ue.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Ue.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Ue.ERR_CANCELED="ERR_CANCELED";Ue.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Ue.ERR_INVALID_URL="ERR_INVALID_URL";const Ab=null;function Jh(n){return q.isPlainObject(n)||q.isArray(n)}function KS(n){return q.endsWith(n,"[]")?n.slice(0,-2):n}function T_(n,e,t){return n?n.concat(e).map(function(r,s){return r=KS(r),!t&&s?"["+r+"]":r}).join(t?".":""):e}function Cb(n){return q.isArray(n)&&!n.some(Jh)}const bb=q.toFlatObject(q,{},null,function(e){return/^is[A-Z]/.test(e)});function Sf(n,e,t){if(!q.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=q.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,m){return!q.isUndefined(m[v])});const i=t.metaTokens,r=t.visitor||u,s=t.dots,a=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&q.isSpecCompliantForm(e);if(!q.isFunction(r))throw new TypeError("visitor must be a function");function c(p){if(p===null)return"";if(q.isDate(p))return p.toISOString();if(q.isBoolean(p))return p.toString();if(!l&&q.isBlob(p))throw new Ue("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(p)||q.isTypedArray(p)?l&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,v,m){let h=p;if(p&&!m&&typeof p=="object"){if(q.endsWith(v,"{}"))v=i?v:v.slice(0,-2),p=JSON.stringify(p);else if(q.isArray(p)&&Cb(p)||(q.isFileList(p)||q.endsWith(v,"[]"))&&(h=q.toArray(p)))return v=KS(v),h.forEach(function(x,S){!(q.isUndefined(x)||x===null)&&e.append(a===!0?T_([v],S,s):a===null?v:v+"[]",c(x))}),!1}return Jh(p)?!0:(e.append(T_(m,v,s),c(p)),!1)}const f=[],d=Object.assign(bb,{defaultVisitor:u,convertValue:c,isVisitable:Jh});function g(p,v){if(!q.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(p),q.forEach(p,function(h,_){(!(q.isUndefined(h)||h===null)&&r.call(e,h,q.isString(_)?_.trim():_,v,d))===!0&&g(h,v?v.concat(_):[_])}),f.pop()}}if(!q.isObject(n))throw new TypeError("data must be an object");return g(n),e}function w_(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function ug(n,e){this._pairs=[],n&&Sf(n,this,e)}const ZS=ug.prototype;ZS.append=function(e,t){this._pairs.push([e,t])};ZS.toString=function(e){const t=e?function(i){return e.call(this,i,w_)}:w_;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function Rb(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function JS(n,e,t){if(!e)return n;const i=t&&t.encode||Rb,r=q.isFunction(t)?{serialize:t}:t,s=r&&r.serialize;let a;if(s?a=s(e,r):a=q.isURLSearchParams(e)?e.toString():new ug(e,r).toString(i),a){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+a}return n}class A_{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){q.forEach(this.handlers,function(i){i!==null&&e(i)})}}const fg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Pb=typeof URLSearchParams<"u"?URLSearchParams:ug,Db=typeof FormData<"u"?FormData:null,Nb=typeof Blob<"u"?Blob:null,Lb={isBrowser:!0,classes:{URLSearchParams:Pb,FormData:Db,Blob:Nb},protocols:["http","https","file","blob","url","data"]},dg=typeof window<"u"&&typeof document<"u",Qh=typeof navigator=="object"&&navigator||void 0,Ib=dg&&(!Qh||["ReactNative","NativeScript","NS"].indexOf(Qh.product)<0),Ub=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Fb=dg&&window.location.href||"http://localhost",Ob=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:dg,hasStandardBrowserEnv:Ib,hasStandardBrowserWebWorkerEnv:Ub,navigator:Qh,origin:Fb},Symbol.toStringTag,{value:"Module"})),hn={...Ob,...Lb};function kb(n,e){return Sf(n,new hn.classes.URLSearchParams,{visitor:function(t,i,r,s){return hn.isNode&&q.isBuffer(t)?(this.append(i,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function Bb(n){return q.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function zb(n){const e={},t=Object.keys(n);let i;const r=t.length;let s;for(i=0;i<r;i++)s=t[i],e[s]=n[s];return e}function QS(n){function e(t,i,r,s){let a=t[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),l=s>=t.length;return a=!a&&q.isArray(r)?r.length:a,l?(q.hasOwnProp(r,a)?r[a]=[r[a],i]:r[a]=i,!o):((!r[a]||!q.isObject(r[a]))&&(r[a]=[]),e(t,i,r[a],s)&&q.isArray(r[a])&&(r[a]=zb(r[a])),!o)}if(q.isFormData(n)&&q.isFunction(n.entries)){const t={};return q.forEachEntry(n,(i,r)=>{e(Bb(i),r,t,0)}),t}return null}function Vb(n,e,t){if(q.isString(n))try{return(e||JSON.parse)(n),q.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const Kl={transitional:fg,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,s=q.isObject(e);if(s&&q.isHTMLForm(e)&&(e=new FormData(e)),q.isFormData(e))return r?JSON.stringify(QS(e)):e;if(q.isArrayBuffer(e)||q.isBuffer(e)||q.isStream(e)||q.isFile(e)||q.isBlob(e)||q.isReadableStream(e))return e;if(q.isArrayBufferView(e))return e.buffer;if(q.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return kb(e,this.formSerializer).toString();if((o=q.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Sf(o?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),Vb(e)):e}],transformResponse:[function(e){const t=this.transitional||Kl.transitional,i=t&&t.forcedJSONParsing,r=this.responseType==="json";if(q.isResponse(e)||q.isReadableStream(e))return e;if(e&&q.isString(e)&&(i&&!this.responseType||r)){const a=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(o){if(a)throw o.name==="SyntaxError"?Ue.from(o,Ue.ERR_BAD_RESPONSE,this,null,this.response):o}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:hn.classes.FormData,Blob:hn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};q.forEach(["delete","get","head","post","put","patch"],n=>{Kl.headers[n]={}});const Hb=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Gb=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(a){r=a.indexOf(":"),t=a.substring(0,r).trim().toLowerCase(),i=a.substring(r+1).trim(),!(!t||e[t]&&Hb[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},C_=Symbol("internals");function Lo(n){return n&&String(n).trim().toLowerCase()}function au(n){return n===!1||n==null?n:q.isArray(n)?n.map(au):String(n)}function Wb(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const jb=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function cd(n,e,t,i,r){if(q.isFunction(i))return i.call(this,e,t);if(r&&(e=t),!!q.isString(e)){if(q.isString(i))return e.indexOf(i)!==-1;if(q.isRegExp(i))return i.test(e)}}function Xb(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function qb(n,e){const t=q.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(r,s,a){return this[i].call(this,e,r,s,a)},configurable:!0})})}let Ln=class{constructor(e){e&&this.set(e)}set(e,t,i){const r=this;function s(o,l,c){const u=Lo(l);if(!u)throw new Error("header name must be a non-empty string");const f=q.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=au(o))}const a=(o,l)=>q.forEach(o,(c,u)=>s(c,u,l));if(q.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(q.isString(e)&&(e=e.trim())&&!jb(e))a(Gb(e),t);else if(q.isObject(e)&&q.isIterable(e)){let o={},l,c;for(const u of e){if(!q.isArray(u))throw TypeError("Object iterator must return a key-value pair");o[c=u[0]]=(l=o[c])?q.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}a(o,t)}else e!=null&&s(t,e,i);return this}get(e,t){if(e=Lo(e),e){const i=q.findKey(this,e);if(i){const r=this[i];if(!t)return r;if(t===!0)return Wb(r);if(q.isFunction(t))return t.call(this,r,i);if(q.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Lo(e),e){const i=q.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||cd(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let r=!1;function s(a){if(a=Lo(a),a){const o=q.findKey(i,a);o&&(!t||cd(i,i[o],o,t))&&(delete i[o],r=!0)}}return q.isArray(e)?e.forEach(s):s(e),r}clear(e){const t=Object.keys(this);let i=t.length,r=!1;for(;i--;){const s=t[i];(!e||cd(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const t=this,i={};return q.forEach(this,(r,s)=>{const a=q.findKey(i,s);if(a){t[a]=au(r),delete t[s];return}const o=e?Xb(s):String(s).trim();o!==s&&delete t[s],t[o]=au(r),i[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return q.forEach(this,(i,r)=>{i!=null&&i!==!1&&(t[r]=e&&q.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[C_]=this[C_]={accessors:{}}).accessors,r=this.prototype;function s(a){const o=Lo(a);i[o]||(qb(r,a),i[o]=!0)}return q.isArray(e)?e.forEach(s):s(e),this}};Ln.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.reduceDescriptors(Ln.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});q.freezeMethods(Ln);function ud(n,e){const t=this||Kl,i=e||t,r=Ln.from(i.headers);let s=i.data;return q.forEach(n,function(o){s=o.call(t,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function e1(n){return!!(n&&n.__CANCEL__)}let Zl=class extends Ue{constructor(e,t,i){super(e??"canceled",Ue.ERR_CANCELED,t,i),this.name="CanceledError",this.__CANCEL__=!0}};function t1(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new Ue("Request failed with status code "+t.status,[Ue.ERR_BAD_REQUEST,Ue.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function $b(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function Yb(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,s=0,a;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];a||(a=c),t[r]=l,i[r]=c;let f=s,d=0;for(;f!==r;)d+=t[f++],f=f%n;if(r=(r+1)%n,r===s&&(s=(s+1)%n),c-a<e)return;const g=u&&c-u;return g?Math.round(d*1e3/g):void 0}}function Kb(n,e){let t=0,i=1e3/e,r,s;const a=(c,u=Date.now())=>{t=u,r=null,s&&(clearTimeout(s),s=null),n(...c)};return[(...c)=>{const u=Date.now(),f=u-t;f>=i?a(c,u):(r=c,s||(s=setTimeout(()=>{s=null,a(r)},i-f)))},()=>r&&a(r)]}const Hu=(n,e,t=3)=>{let i=0;const r=Yb(50,250);return Kb(s=>{const a=s.loaded,o=s.lengthComputable?s.total:void 0,l=a-i,c=r(l),u=a<=o;i=a;const f={loaded:a,total:o,progress:o?a/o:void 0,bytes:l,rate:c||void 0,estimated:c&&o&&u?(o-a)/c:void 0,event:s,lengthComputable:o!=null,[e?"download":"upload"]:!0};n(f)},t)},b_=(n,e)=>{const t=n!=null;return[i=>e[0]({lengthComputable:t,total:n,loaded:i}),e[1]]},R_=n=>(...e)=>q.asap(()=>n(...e)),Zb=hn.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,hn.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(hn.origin),hn.navigator&&/(msie|trident)/i.test(hn.navigator.userAgent)):()=>!0,Jb=hn.hasStandardBrowserEnv?{write(n,e,t,i,r,s,a){if(typeof document>"u")return;const o=[`${n}=${encodeURIComponent(e)}`];q.isNumber(t)&&o.push(`expires=${new Date(t).toUTCString()}`),q.isString(i)&&o.push(`path=${i}`),q.isString(r)&&o.push(`domain=${r}`),s===!0&&o.push("secure"),q.isString(a)&&o.push(`SameSite=${a}`),document.cookie=o.join("; ")},read(n){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+n+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Qb(n){return typeof n!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function eR(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function n1(n,e,t){let i=!Qb(e);return n&&(i||t==!1)?eR(n,e):e}const P_=n=>n instanceof Ln?{...n}:n;function Qs(n,e){e=e||{};const t={};function i(c,u,f,d){return q.isPlainObject(c)&&q.isPlainObject(u)?q.merge.call({caseless:d},c,u):q.isPlainObject(u)?q.merge({},u):q.isArray(u)?u.slice():u}function r(c,u,f,d){if(q.isUndefined(u)){if(!q.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function s(c,u){if(!q.isUndefined(u))return i(void 0,u)}function a(c,u){if(q.isUndefined(u)){if(!q.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function o(c,u,f){if(f in e)return i(c,u);if(f in n)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:o,headers:(c,u,f)=>r(P_(c),P_(u),f,!0)};return q.forEach(Object.keys({...n,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const f=q.hasOwnProp(l,u)?l[u]:r,d=f(n[u],e[u],u);q.isUndefined(d)&&f!==o||(t[u]=d)}),t}const i1=n=>{const e=Qs({},n);let{data:t,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:a,auth:o}=e;if(e.headers=a=Ln.from(a),e.url=JS(n1(e.baseURL,e.url,e.allowAbsoluteUrls),n.params,n.paramsSerializer),o&&a.set("Authorization","Basic "+btoa((o.username||"")+":"+(o.password?unescape(encodeURIComponent(o.password)):""))),q.isFormData(t)){if(hn.hasStandardBrowserEnv||hn.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(q.isFunction(t.getHeaders)){const l=t.getHeaders(),c=["content-type","content-length"];Object.entries(l).forEach(([u,f])=>{c.includes(u.toLowerCase())&&a.set(u,f)})}}if(hn.hasStandardBrowserEnv&&(i&&q.isFunction(i)&&(i=i(e)),i||i!==!1&&Zb(e.url))){const l=r&&s&&Jb.read(s);l&&a.set(r,l)}return e},tR=typeof XMLHttpRequest<"u",nR=tR&&function(n){return new Promise(function(t,i){const r=i1(n);let s=r.data;const a=Ln.from(r.headers).normalize();let{responseType:o,onUploadProgress:l,onDownloadProgress:c}=r,u,f,d,g,p;function v(){g&&g(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function h(){if(!m)return;const x=Ln.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),E={data:!o||o==="text"||o==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:x,config:n,request:m};t1(function(C){t(C),v()},function(C){i(C),v()},E),m=null}"onloadend"in m?m.onloadend=h:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(h)},m.onabort=function(){m&&(i(new Ue("Request aborted",Ue.ECONNABORTED,n,m)),m=null)},m.onerror=function(S){const E=S&&S.message?S.message:"Network Error",w=new Ue(E,Ue.ERR_NETWORK,n,m);w.event=S||null,i(w),m=null},m.ontimeout=function(){let S=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const E=r.transitional||fg;r.timeoutErrorMessage&&(S=r.timeoutErrorMessage),i(new Ue(S,E.clarifyTimeoutError?Ue.ETIMEDOUT:Ue.ECONNABORTED,n,m)),m=null},s===void 0&&a.setContentType(null),"setRequestHeader"in m&&q.forEach(a.toJSON(),function(S,E){m.setRequestHeader(E,S)}),q.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),o&&o!=="json"&&(m.responseType=r.responseType),c&&([d,p]=Hu(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,g]=Hu(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",g)),(r.cancelToken||r.signal)&&(u=x=>{m&&(i(!x||x.type?new Zl(null,n,m):x),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const _=$b(r.url);if(_&&hn.protocols.indexOf(_)===-1){i(new Ue("Unsupported protocol "+_+":",Ue.ERR_BAD_REQUEST,n));return}m.send(s||null)})},iR=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let i=new AbortController,r;const s=function(c){if(!r){r=!0,o();const u=c instanceof Error?c:this.reason;i.abort(u instanceof Ue?u:new Zl(u instanceof Error?u.message:u))}};let a=e&&setTimeout(()=>{a=null,s(new Ue(`timeout of ${e}ms exceeded`,Ue.ETIMEDOUT))},e);const o=()=>{n&&(a&&clearTimeout(a),a=null,n.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),n=null)};n.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>q.asap(o),l}},rR=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let i=0,r;for(;i<t;)r=i+e,yield n.slice(i,r),i=r},sR=async function*(n,e){for await(const t of aR(n))yield*rR(t,e)},aR=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;yield i}}finally{await e.cancel()}},D_=(n,e,t,i)=>{const r=sR(n,e);let s=0,a,o=l=>{a||(a=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){o(),l.close();return}let f=u.byteLength;if(t){let d=s+=f;t(d)}l.enqueue(new Uint8Array(u))}catch(c){throw o(c),c}},cancel(l){return o(l),r.return()}},{highWaterMark:2})},N_=64*1024,{isFunction:Mc}=q,oR=(({Request:n,Response:e})=>({Request:n,Response:e}))(q.global),{ReadableStream:L_,TextEncoder:I_}=q.global,U_=(n,...e)=>{try{return!!n(...e)}catch{return!1}},lR=n=>{n=q.merge.call({skipUndefined:!0},oR,n);const{fetch:e,Request:t,Response:i}=n,r=e?Mc(e):typeof fetch=="function",s=Mc(t),a=Mc(i);if(!r)return!1;const o=r&&Mc(L_),l=r&&(typeof I_=="function"?(p=>v=>p.encode(v))(new I_):async p=>new Uint8Array(await new t(p).arrayBuffer())),c=s&&o&&U_(()=>{let p=!1;const v=new t(hn.origin,{body:new L_,method:"POST",get duplex(){return p=!0,"half"}}).headers.has("Content-Type");return p&&!v}),u=a&&o&&U_(()=>q.isReadableStream(new i("").body)),f={stream:u&&(p=>p.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!f[p]&&(f[p]=(v,m)=>{let h=v&&v[p];if(h)return h.call(v);throw new Ue(`Response type '${p}' is not supported`,Ue.ERR_NOT_SUPPORT,m)})});const d=async p=>{if(p==null)return 0;if(q.isBlob(p))return p.size;if(q.isSpecCompliantForm(p))return(await new t(hn.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(q.isArrayBufferView(p)||q.isArrayBuffer(p))return p.byteLength;if(q.isURLSearchParams(p)&&(p=p+""),q.isString(p))return(await l(p)).byteLength},g=async(p,v)=>{const m=q.toFiniteNumber(p.getContentLength());return m??d(v)};return async p=>{let{url:v,method:m,data:h,signal:_,cancelToken:x,timeout:S,onDownloadProgress:E,onUploadProgress:w,responseType:C,headers:y,withCredentials:M="same-origin",fetchOptions:N}=i1(p),P=e||fetch;C=C?(C+"").toLowerCase():"text";let L=iR([_,x&&x.toAbortSignal()],S),U=null;const B=L&&L.unsubscribe&&(()=>{L.unsubscribe()});let z;try{if(w&&c&&m!=="get"&&m!=="head"&&(z=await g(y,h))!==0){let te=new t(v,{method:"POST",body:h,duplex:"half"}),ne;if(q.isFormData(h)&&(ne=te.headers.get("content-type"))&&y.setContentType(ne),te.body){const[we,De]=b_(z,Hu(R_(w)));h=D_(te.body,N_,we,De)}}q.isString(M)||(M=M?"include":"omit");const D=s&&"credentials"in t.prototype,k={...N,signal:L,method:m.toUpperCase(),headers:y.normalize().toJSON(),body:h,duplex:"half",credentials:D?M:void 0};U=s&&new t(v,k);let F=await(s?P(U,N):P(v,k));const W=u&&(C==="stream"||C==="response");if(u&&(E||W&&B)){const te={};["status","statusText","headers"].forEach(Oe=>{te[Oe]=F[Oe]});const ne=q.toFiniteNumber(F.headers.get("content-length")),[we,De]=E&&b_(ne,Hu(R_(E),!0))||[];F=new i(D_(F.body,N_,we,()=>{De&&De(),B&&B()}),te)}C=C||"text";let Q=await f[q.findKey(f,C)||"text"](F,p);return!W&&B&&B(),await new Promise((te,ne)=>{t1(te,ne,{data:Q,headers:Ln.from(F.headers),status:F.status,statusText:F.statusText,config:p,request:U})})}catch(D){throw B&&B(),D&&D.name==="TypeError"&&/Load failed|fetch/i.test(D.message)?Object.assign(new Ue("Network Error",Ue.ERR_NETWORK,p,U,D&&D.response),{cause:D.cause||D}):Ue.from(D,D&&D.code,p,U,D&&D.response)}}},cR=new Map,r1=n=>{let e=n&&n.env||{};const{fetch:t,Request:i,Response:r}=e,s=[i,r,t];let a=s.length,o=a,l,c,u=cR;for(;o--;)l=s[o],c=u.get(l),c===void 0&&u.set(l,c=o?new Map:lR(e)),u=c;return c};r1();const hg={http:Ab,xhr:nR,fetch:{get:r1}};q.forEach(hg,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const F_=n=>`- ${n}`,uR=n=>q.isFunction(n)||n===null||n===!1;function fR(n,e){n=q.isArray(n)?n:[n];const{length:t}=n;let i,r;const s={};for(let a=0;a<t;a++){i=n[a];let o;if(r=i,!uR(i)&&(r=hg[(o=String(i)).toLowerCase()],r===void 0))throw new Ue(`Unknown adapter '${o}'`);if(r&&(q.isFunction(r)||(r=r.get(e))))break;s[o||"#"+a]=r}if(!r){const a=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=t?a.length>1?`since :
`+a.map(F_).join(`
`):" "+F_(a[0]):"as no adapter specified";throw new Ue("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r}const s1={getAdapter:fR,adapters:hg};function fd(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Zl(null,n)}function O_(n){return fd(n),n.headers=Ln.from(n.headers),n.data=ud.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),s1.getAdapter(n.adapter||Kl.adapter,n)(n).then(function(i){return fd(n),i.data=ud.call(n,n.transformResponse,i),i.headers=Ln.from(i.headers),i},function(i){return e1(i)||(fd(n),i&&i.response&&(i.response.data=ud.call(n,n.transformResponse,i.response),i.response.headers=Ln.from(i.response.headers))),Promise.reject(i)})}const a1="1.13.5",Mf={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Mf[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const k_={};Mf.transitional=function(e,t,i){function r(s,a){return"[Axios v"+a1+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return(s,a,o)=>{if(e===!1)throw new Ue(r(a," has been removed"+(t?" in "+t:"")),Ue.ERR_DEPRECATED);return t&&!k_[a]&&(k_[a]=!0,console.warn(r(a," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,a,o):!0}};Mf.spelling=function(e){return(t,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function dR(n,e,t){if(typeof n!="object")throw new Ue("options must be an object",Ue.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const s=i[r],a=e[s];if(a){const o=n[s],l=o===void 0||a(o,s,n);if(l!==!0)throw new Ue("option "+s+" must be "+l,Ue.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Ue("Unknown option "+s,Ue.ERR_BAD_OPTION)}}const ou={assertOptions:dR,validators:Mf},ri=ou.validators;let Gs=class{constructor(e){this.defaults=e||{},this.interceptors={request:new A_,response:new A_}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Qs(this.defaults,t);const{transitional:i,paramsSerializer:r,headers:s}=t;i!==void 0&&ou.assertOptions(i,{silentJSONParsing:ri.transitional(ri.boolean),forcedJSONParsing:ri.transitional(ri.boolean),clarifyTimeoutError:ri.transitional(ri.boolean),legacyInterceptorReqResOrdering:ri.transitional(ri.boolean)},!1),r!=null&&(q.isFunction(r)?t.paramsSerializer={serialize:r}:ou.assertOptions(r,{encode:ri.function,serialize:ri.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),ou.assertOptions(t,{baseUrl:ri.spelling("baseURL"),withXsrfToken:ri.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=s&&q.merge(s.common,s[t.method]);s&&q.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),t.headers=Ln.concat(a,s);const o=[];let l=!0;this.interceptors.request.forEach(function(v){if(typeof v.runWhen=="function"&&v.runWhen(t)===!1)return;l=l&&v.synchronous;const m=t.transitional||fg;m&&m.legacyInterceptorReqResOrdering?o.unshift(v.fulfilled,v.rejected):o.push(v.fulfilled,v.rejected)});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,d;if(!l){const p=[O_.bind(this),void 0];for(p.unshift(...o),p.push(...c),d=p.length,u=Promise.resolve(t);f<d;)u=u.then(p[f++],p[f++]);return u}d=o.length;let g=t;for(;f<d;){const p=o[f++],v=o[f++];try{g=p(g)}catch(m){v.call(this,m);break}}try{u=O_.call(this,g)}catch(p){return Promise.reject(p)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Qs(this.defaults,e);const t=n1(e.baseURL,e.url,e.allowAbsoluteUrls);return JS(t,e.params,e.paramsSerializer)}};q.forEach(["delete","get","head","options"],function(e){Gs.prototype[e]=function(t,i){return this.request(Qs(i||{},{method:e,url:t,data:(i||{}).data}))}});q.forEach(["post","put","patch"],function(e){function t(i){return function(s,a,o){return this.request(Qs(o||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}Gs.prototype[e]=t(),Gs.prototype[e+"Form"]=t(!0)});let hR=class o1{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const a=new Promise(o=>{i.subscribe(o),s=o}).then(r);return a.cancel=function(){i.unsubscribe(s)},a},e(function(s,a,o){i.reason||(i.reason=new Zl(s,a,o),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=i=>{e.abort(i)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new o1(function(r){e=r}),cancel:e}}};function pR(n){return function(t){return n.apply(null,t)}}function mR(n){return q.isObject(n)&&n.isAxiosError===!0}const ep={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ep).forEach(([n,e])=>{ep[e]=n});function l1(n){const e=new Gs(n),t=VS(Gs.prototype.request,e);return q.extend(t,Gs.prototype,e,{allOwnKeys:!0}),q.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return l1(Qs(n,r))},t}const Ot=l1(Kl);Ot.Axios=Gs;Ot.CanceledError=Zl;Ot.CancelToken=hR;Ot.isCancel=e1;Ot.VERSION=a1;Ot.toFormData=Sf;Ot.AxiosError=Ue;Ot.Cancel=Ot.CanceledError;Ot.all=function(e){return Promise.all(e)};Ot.spread=pR;Ot.isAxiosError=mR;Ot.mergeConfig=Qs;Ot.AxiosHeaders=Ln;Ot.formToJSON=n=>QS(q.isHTMLForm(n)?new FormData(n):n);Ot.getAdapter=s1.getAdapter;Ot.HttpStatusCode=ep;Ot.default=Ot;const{Axios:AU,AxiosError:CU,CanceledError:bU,isCancel:RU,CancelToken:PU,VERSION:DU,all:NU,Cancel:LU,isAxiosError:IU,spread:UU,toFormData:FU,AxiosHeaders:OU,HttpStatusCode:kU,formToJSON:BU,getAdapter:zU,mergeConfig:VU}=Ot,gR=Ot.create({baseURL:"http://localhost:8000",timeout:2e4});gR.interceptors.response.use(n=>n,n=>Promise.reject(n));const _R=[{id:"q1",question:"Which organelle is the primary site of photosynthesis?",options:["Mitochondria","Ribosome","Chloroplast","Nucleus"],answer:"Chloroplast",explanation:"The chloroplast contains chlorophyll and is where photosynthesis occurs.",sourceFormat:"PDF",locationRef:"Page 45"},{id:"q2",question:"What does Mendel's law of segregation state?",options:["Genes blend during inheritance","Alleles separate during gamete formation","Chromosomes duplicate in meiosis","Traits skip generations randomly"],answer:"Alleles separate during gamete formation",explanation:"Each parent contributes one allele because allele pairs separate in meiosis.",sourceFormat:"PPTX",locationRef:"Slide 12"},{id:"q3",question:"Write the overall photosynthesis equation.",answer:"CO2 + H2O + light -> C6H12O6 + O2",explanation:"This equation summarizes conversion of light energy into chemical energy.",sourceFormat:"XLSX",locationRef:"Sheet Reactions, Row B4"}],vR={async generatePracticeTest(){return await new Promise(n=>setTimeout(n,900)),_R}},B_={upload:"Upload files",paste:"Paste text",drive:"Google Drive",flashcards:"Flashcard sets"},xR=({open:n,onClose:e,onGenerated:t})=>{const[i,r]=Z.useState("upload"),[s,a]=Z.useState(""),[o,l]=Z.useState([]),[c,u]=Z.useState(!1),[f,d]=Z.useState(!1),[g,p]=Z.useState(!1),v=Z.useRef(null),m=Z.useMemo(()=>i==="upload"?o.length>0:i==="paste"?s.trim().length>25:i==="drive"?c:f,[c,f,s,o.length,i]);if(!n)return null;const h=x=>{l(Array.from(x.target.files??[]))},_=async()=>{if(!(!m||g)){p(!0);try{await vR.generatePracticeTest(),t("Practice test generated from selected material."),e(),a(""),l([]),u(!1),d(!1),r("upload")}finally{p(!1)}}};return A.jsx("div",{className:"overlay",children:A.jsxs("div",{className:"overlay__content",children:[A.jsxs("header",{className:"overlay__header",children:[A.jsxs("div",{className:"overlay__title",children:[A.jsx($A,{size:25}),A.jsx("h2",{children:"Generate practice tests"})]}),A.jsx("button",{className:"ghost-icon",type:"button",onClick:e,"aria-label":"Close modal",children:A.jsx(zS,{size:26})})]}),A.jsxs("div",{className:"overlay__body",children:[A.jsx("h3",{children:"Generate a practice test"}),A.jsx("p",{children:"Choose or upload materials to generate practice questions designed for you"}),A.jsx("div",{className:"tab-row",children:Object.keys(B_).map(x=>A.jsx("button",{className:`tab-button ${i===x?"active":""}`,type:"button",onClick:()=>r(x),children:B_[x]},x))}),i==="upload"?A.jsxs("div",{className:"upload-card",children:[A.jsxs("div",{className:"upload-icons",children:[A.jsx(OS,{size:45}),A.jsx(lg,{size:45})]}),A.jsx("h4",{children:"Drag and drop notes, readings, lecture slides, etc."}),A.jsx("p",{children:"Supported file types are .docx, .pdf, .pptx"}),A.jsx("button",{type:"button",onClick:()=>{var x;return(x=v.current)==null?void 0:x.click()},children:"Browse files"}),A.jsx("input",{ref:v,type:"file",multiple:!0,accept:".pdf,.docx,.pptx,.txt,.png,.jpg,.jpeg",onChange:h,hidden:!0}),o.length?A.jsx("div",{className:"file-chip-row",children:o.map(x=>A.jsx("span",{className:"file-chip",children:x.name},x.name))}):null]}):null,i==="paste"?A.jsx("textarea",{className:"text-area",value:s,onChange:x=>a(x.target.value),placeholder:"Paste your notes here. We'll do the rest."}):null,i==="drive"?A.jsxs("div",{className:"upload-card upload-card--small",children:[A.jsx(kS,{size:48}),A.jsx("h4",{children:"Connect Google Drive to import your notes."}),A.jsx("button",{type:"button",onClick:()=>{u(!0),t("Google Drive connected (mock). You can now generate.")},children:c?"Drive connected":"Connect Drive"})]}):null,i==="flashcards"?A.jsxs("div",{className:"upload-card upload-card--small",children:[A.jsx("h4",{children:"Use existing flashcard sets as practice material."}),A.jsx("button",{type:"button",onClick:()=>{d(!0),t("Flashcard set selected for practice generation.")},children:f?"Flashcard set selected":"Choose flashcard sets"})]}):null]}),A.jsxs("footer",{className:"overlay__footer",children:[A.jsx("p",{children:"This product is enhanced using AI and may provide incorrect or problematic content. Do not enter any personal data."}),A.jsx("button",{type:"button",disabled:!m||g,onClick:_,children:g?"Generating...":"Generate"})]})]})})};let dd={isAuthenticated:!0,user:{id:"user-1",name:"Aayush",avatarUrl:"https://i.pravatar.cc/80?img=13"}};const tp=new Set,z_=()=>{tp.forEach(n=>n())},sl={getState:()=>dd,subscribe:n=>(tp.add(n),()=>tp.delete(n)),login(n){dd={isAuthenticated:!0,user:{id:"user-1",name:n,avatarUrl:"https://i.pravatar.cc/80?img=13"}},z_()},logout(){dd={isAuthenticated:!1,user:null},z_()}},yR=()=>Z.useSyncExternalStore(sl.subscribe,sl.getState,sl.getState),SR=()=>({...yR(),login:sl.login,logout:sl.logout});let ua={selectedSubjectId:"jee-main",subjects:[{id:"jee-main",name:"JEE Main",examLabel:"Engineering Entrance",documentCount:5,coverage:62},{id:"neet",name:"NEET",examLabel:"Medical Entrance",documentCount:4,coverage:38},{id:"biology",name:"Biology",examLabel:"Subject Revision",documentCount:7,coverage:71}],folders:[{id:"folder-1",name:"Unit Tests"}]};const np=new Set,V_=()=>np.forEach(n=>n()),al={getState:()=>ua,subscribe:n=>(np.add(n),()=>np.delete(n)),setSelectedSubject(n){ua={...ua,selectedSubjectId:n},V_()},addFolder(n){const e=n.trim();e&&(ua={...ua,folders:[...ua.folders,{id:`folder-${Date.now()}`,name:e}]},V_())}},MR=()=>Z.useSyncExternalStore(al.subscribe,al.getState,al.getState),sa=()=>{const n=MR(),e=n.subjects.find(t=>t.id===n.selectedSubjectId)??n.subjects[0];return{...n,selectedSubject:e,setSelectedSubject:al.setSelectedSubject,addFolder:al.addFolder}};let hd={latestBySubject:{}};const ip=new Set,ER=()=>ip.forEach(n=>n()),lu={getState:()=>hd,subscribe:n=>(ip.add(n),()=>ip.delete(n)),setLatestInsight(n,e,t){hd={latestBySubject:{...hd.latestBySubject,[n]:{subjectId:n,question:e,payload:t,createdAt:Date.now()}}},ER()}},TR=()=>Z.useSyncExternalStore(lu.subscribe,lu.getState,lu.getState),pg=()=>({latestBySubject:TR().latestBySubject,setLatestInsight:lu.setLatestInsight}),H_=["Flashcard sets","Classes","Folders","Practice Tests","Study guides","Expert solutions"],wR=()=>{const n=ra(),{selectedSubject:e}=sa(),{latestBySubject:t}=pg(),[i,r]=Z.useState(H_[0]),[s,a]=Z.useState(!0),o=t[e.id];return A.jsxs("section",{className:"library-page",children:[A.jsxs("header",{className:"library-header",children:[A.jsx("h1",{children:"Your library"}),A.jsx("div",{className:"tab-row tab-row--library",children:H_.map(l=>A.jsx("button",{type:"button",className:`tab-button ${i===l?"active":""}`,onClick:()=>r(l),children:l},l))})]}),A.jsxs("button",{className:"sort-chip",type:"button",onClick:()=>a(l=>!l),children:[s?"Recent":"A-Z"," ",A.jsx(FS,{size:15})]}),A.jsxs("article",{className:"empty-state",children:[A.jsx(KA,{size:100}),A.jsx("h2",{children:"You have no sets yet"}),A.jsx("p",{children:"Sets you create or study will be shown here"}),A.jsx("button",{type:"button",onClick:()=>n("/flashcards"),children:"Create a set"})]}),A.jsxs("article",{className:"panel evidence-panel",children:[A.jsx("h3",{children:"Evidence dashboard"}),o?A.jsxs(A.Fragment,{children:[A.jsxs("p",{className:"evidence-panel__meta",children:["Subject: ",e.name,A.jsx("br",{}),"Last confidence: ",o.payload.confidenceTier," (",(o.payload.confidenceScore*100).toFixed(1),"%)"]}),A.jsx("div",{className:"evidence-cards",children:o.payload.evidenceSnippets.slice(0,3).map(l=>A.jsx("article",{className:"evidence-card",children:A.jsx("p",{children:l})},`${o.createdAt}-${l.slice(0,14)}`))})]}):A.jsx("p",{className:"evidence-panel__empty",children:"Ask a question in workspace chat to populate evidence snippets."})]})]})},AR=()=>{const{subjectId:n}=oA(),{selectedSubject:e,setSelectedSubject:t,subjects:i}=sa();return Z.useEffect(()=>{n&&i.some(r=>r.id===n)&&t(n)},[t,n,i]),A.jsxs("section",{className:"subject-page",children:[A.jsx("h1",{children:e.name}),A.jsx("p",{children:e.examLabel}),A.jsxs("article",{children:[A.jsx("h3",{children:"Documents indexed"}),A.jsx("strong",{children:e.documentCount})]}),A.jsxs("article",{children:[A.jsx("h3",{children:"Coverage"}),A.jsxs("strong",{children:[e.coverage,"%"]})]}),A.jsxs("p",{children:["Open ",A.jsx("strong",{children:"Flashcards"})," from the sidebar to ask subject-scoped questions and generate practice tests."]})]})},CR={photosynthesis:{answer:"Photosynthesis converts light energy into chemical energy in chloroplasts [SOURCE: Biology_Notes.pdf, Page 45].",citations:[{fileName:"Biology_Notes.pdf",locationRef:"Page 45",chunkId:"chunk-photosynthesis-45",sourceFormat:"PDF"}],evidenceSnippets:["[Biology_Notes.pdf | Page 45] Photosynthesis occurs in chloroplasts where light energy is transformed to glucose."]},genetics:{answer:"Mendel's law of segregation states that allele pairs separate during gamete formation [SOURCE: Genetics_Lecture.pptx, Slide 12].",citations:[{fileName:"Genetics_Lecture.pptx",locationRef:"Slide 12",chunkId:"chunk-genetics-12",sourceFormat:"PPTX"}],evidenceSnippets:["[Genetics_Lecture.pptx | Slide 12] During meiosis, alleles separate so each gamete receives one allele."]},equation:{answer:"The noted equation is CO2 + H2O + light -> C6H12O6 + O2 [SOURCE: Study_Table.xlsx, Sheet Reactions, Row B4:D7].",citations:[{fileName:"Study_Table.xlsx",locationRef:"Sheet Reactions, Row B4:D7",chunkId:"chunk-equation-b4",sourceFormat:"XLSX"}],evidenceSnippets:["[Study_Table.xlsx | Sheet Reactions, Row B4:D7] CO2 + H2O + light -> C6H12O6 + O2."]}},c1=n=>({answer:`Not found in your notes for ${n}`,confidenceTier:"NOT_FOUND",confidenceScore:0,citations:[],evidenceSnippets:[]}),bR=(n,e)=>{var o;const t=((o=n.answer)==null?void 0:o.trim())??"",i=n.confidenceTier??"NOT_FOUND",r=Number(n.confidenceScore),s=n.citations??[],a=n.evidenceSnippets??[];return i==="NOT_FOUND"||t.toLowerCase().startsWith("not found in your notes")||s.length===0?{...c1(e),evidenceSnippets:a}:{answer:t,confidenceTier:i,confidenceScore:r,citations:s,evidenceSnippets:a,topChunkIds:n.topChunkIds??[]}},RR={async askQuestion(n,e){await new Promise(i=>setTimeout(i,450));const t=Object.entries(CR).find(([i])=>n.toLowerCase().includes(i));return t?bR({answer:t[1].answer,confidenceTier:"HIGH",confidenceScore:.94,citations:t[1].citations,evidenceSnippets:t[1].evidenceSnippets,topChunkIds:t[1].citations.map(i=>i.chunkId)},e.name):c1(e.name)}},PR=()=>{const{selectedSubject:n}=sa(),{setLatestInsight:e}=pg(),[t,i]=Z.useState(""),[r,s]=Z.useState(!1),[a,o]=Z.useState([{id:"assistant-seed",role:"assistant",text:`Ask any question from ${n.name}. Answers are scoped only to your uploaded notes.`}]);Z.useEffect(()=>{o([{id:"assistant-seed",role:"assistant",text:`Ask any question from ${n.name}. Answers are scoped only to your uploaded notes.`}])},[n.id,n.name]);const l=async c=>{c.preventDefault();const u=t.trim();if(!(!u||r)){s(!0),o(f=>[...f,{id:`user-${Date.now()}`,role:"user",text:u}]),i("");try{const f=await RR.askQuestion(u,n);e(n.id,u,f),o(d=>[...d,{id:`assistant-${Date.now()}`,role:"assistant",text:f.answer,payload:f}])}finally{s(!1)}}};return A.jsxs("section",{className:"panel chat-panel",children:[A.jsxs("div",{className:"panel-title-row",children:[A.jsx("h2",{children:"Subject-scoped Q&A"}),A.jsx("span",{className:"pill",children:n.name})]}),A.jsx("div",{className:"chat-list",children:a.map(c=>A.jsxs("article",{className:`chat-bubble chat-bubble--${c.role}`,children:[A.jsx("p",{children:c.text}),c.payload?A.jsxs("footer",{children:[A.jsxs("strong",{children:[c.payload.confidenceTier," (",(c.payload.confidenceScore*100).toFixed(1),"%)"]}),c.payload.citations.length?c.payload.citations.map(u=>A.jsxs("span",{children:[u.fileName," | ",u.locationRef]},`${c.id}-${u.chunkId||u.locationRef}`)):A.jsx("span",{children:"No grounded citation found. Returned strict NOT_FOUND."}),c.payload.evidenceSnippets.length?A.jsx("div",{className:"evidence-list",children:c.payload.evidenceSnippets.slice(0,3).map(u=>A.jsx("small",{children:u},`${c.id}-${u.slice(0,20)}`))}):null]}):null]},c.id))}),A.jsxs("form",{className:"chat-input-row",onSubmit:l,children:[A.jsx("input",{value:t,onChange:c=>i(c.target.value),placeholder:"Ask from your notes only...","aria-label":"Ask question"}),A.jsxs("button",{type:"submit",disabled:r,children:[A.jsx(xC,{size:18}),r?"Checking...":"Ask"]})]})]})},G_=[{id:"c1",label:"PDF | Page 43",format:"PDF",coverage:88},{id:"c2",label:"PDF | Page 45",format:"PDF",coverage:62},{id:"c3",label:"PPTX | Slide 12",format:"PPTX",coverage:23},{id:"c4",label:"DOCX | Section 2.3",format:"DOCX",coverage:47},{id:"c5",label:"XLSX | Sheet Reactions",format:"XLSX",coverage:14},{id:"c6",label:"IMAGE | diagram_p3.jpg",format:"IMAGE",coverage:6}],DR=["ALL","PDF","DOCX","PPTX","XLSX","TXT","IMAGE","GDOC"],NR=n=>n>=65?"heat-cell hot":n>=35?"heat-cell warm":n>=15?"heat-cell cool":"heat-cell cold",LR=()=>{const[n,e]=Z.useState("ALL"),{selectedSubject:t}=sa(),{latestBySubject:i}=pg(),r=i[t.id],s=Z.useMemo(()=>n==="ALL"?G_:G_.filter(a=>a.format===n),[n]);return A.jsxs("section",{className:"panel heatmap-panel",children:[A.jsxs("div",{className:"panel-title-row",children:[A.jsx("h2",{children:"Coverage heatmap"}),A.jsx("span",{className:"pill",children:"Realtime"})]}),A.jsx("div",{className:"format-filters",children:DR.map(a=>A.jsx("button",{type:"button",className:a===n?"active":"",onClick:()=>e(a),children:a},a))}),A.jsx("div",{className:"heat-grid",children:s.map(a=>A.jsxs("article",{className:NR(a.coverage),children:[A.jsx("h4",{children:a.label}),A.jsxs("p",{children:[a.coverage,"% covered"]})]},a.id))}),A.jsxs("div",{className:"evidence-panel",children:[A.jsx("h3",{children:"Top supporting evidence snippets"}),r?A.jsxs(A.Fragment,{children:[A.jsxs("p",{className:"evidence-panel__meta",children:["Last question: ",r.question,A.jsx("br",{}),"Confidence: ",r.payload.confidenceTier," (",(r.payload.confidenceScore*100).toFixed(1),"%)"]}),r.payload.evidenceSnippets.length?A.jsx("div",{className:"evidence-cards",children:r.payload.evidenceSnippets.slice(0,3).map(a=>A.jsx("article",{className:"evidence-card",children:A.jsx("p",{children:a})},`${r.createdAt}-${a.slice(0,14)}`))}):A.jsx("p",{className:"evidence-panel__empty",children:"No supporting snippets available for this response."})]}):A.jsx("p",{className:"evidence-panel__empty",children:"Ask a question in chat to populate supporting evidence snippets."})]})]})},IR=({onOpenPracticeModal:n,onOpenStudyGuidesModal:e})=>{const{selectedSubject:t}=sa();return A.jsxs("section",{className:"workspace-page",children:[A.jsxs("header",{className:"workspace-header",children:[A.jsxs("div",{children:[A.jsx("small",{children:"AskMyNotes"}),A.jsxs("h1",{children:[t.name," workspace"]}),A.jsx("p",{children:"Chat with your notes, then generate practice tests and targeted study guides."})]}),A.jsxs("div",{className:"workspace-actions",children:[A.jsxs("button",{type:"button",onClick:n,children:[A.jsx(ru,{size:18}),"Practice test"]}),A.jsxs("button",{type:"button",onClick:e,children:[A.jsx(og,{size:18}),"Study guide"]})]})]}),A.jsxs("div",{className:"workspace-grid",children:[A.jsx(PR,{}),A.jsx(LR,{})]})]})},UR=({onLaunchMission:n,onOpenPracticeModal:e,onShowMessage:t})=>{const i=ra();return A.jsxs("div",{className:"home-shell",children:[A.jsxs("section",{className:"game-hero",children:[A.jsxs("div",{className:"game-hero__content",children:[A.jsx("span",{className:"eyebrow",children:"Gamified study cockpit"}),A.jsx("h1",{children:"Level up your preparation with missions, XP and quiz battles"}),A.jsx("p",{children:"A clean skeleton to build on: fewer blocks, clearer actions, and fun-first learning flow for test prep + general practice."}),A.jsxs("div",{className:"hero-actions",children:[A.jsxs("button",{type:"button",onClick:n,children:[A.jsx(TC,{size:18}),"Launch Test Mission"]}),A.jsxs("button",{type:"button",className:"button-ghost",onClick:()=>{i("/flashcards"),t("Open flashcard workspace for quick drills.")},children:[A.jsx(GA,{size:18}),"Open Quiz Workspace"]})]})]}),A.jsxs("div",{className:"game-scene","aria-hidden":"true",children:[A.jsx("div",{className:"scene-orb"}),A.jsx("div",{className:"scene-ring"}),A.jsx("div",{className:"scene-chip chip-a"}),A.jsx("div",{className:"scene-chip chip-b"}),A.jsx("div",{className:"scene-chip chip-c"})]})]}),A.jsxs("section",{className:"hud-strip",children:[A.jsxs("article",{children:[A.jsx(QA,{size:18}),A.jsx("strong",{children:"7 day streak"}),A.jsx("span",{children:"Keep it burning"})]}),A.jsxs("article",{children:[A.jsx(FC,{size:18}),A.jsx("strong",{children:"Mission XP"}),A.jsx("span",{children:"Earned from note-driven rounds"})]}),A.jsxs("article",{children:[A.jsx(PC,{size:18}),A.jsx("strong",{children:"Gold League"}),A.jsx("span",{children:"Top 12% this week"})]})]}),A.jsxs("section",{className:"arena-grid",children:[A.jsxs("article",{className:"arena-card arena-card--test",children:[A.jsxs("div",{className:"arena-head",children:[A.jsx(SC,{size:20}),A.jsx("h3",{children:"Test Arena"})]}),A.jsx("p",{children:"Timed mock tests with stricter scoring and confidence-aware hints."}),A.jsxs("div",{className:"tag-row",children:[A.jsx("span",{children:"Timed rounds"}),A.jsx("span",{children:"Ranked mode"}),A.jsx("span",{children:"Exam scope"})]}),A.jsx("button",{type:"button",onClick:n,children:"Start test arena"})]}),A.jsxs("article",{className:"arena-card arena-card--quiz",children:[A.jsxs("div",{className:"arena-head",children:[A.jsx(iC,{size:20}),A.jsx("h3",{children:"General Quiz Arena"})]}),A.jsx("p",{children:"Fast and playful quizzes for memory, speed, and concept retention."}),A.jsxs("div",{className:"tag-row",children:[A.jsx("span",{children:"Quick play"}),A.jsx("span",{children:"Bonus XP"}),A.jsx("span",{children:"Topic shuffle"})]}),A.jsx("button",{type:"button",onClick:n,children:"Play quick quiz"})]})]}),A.jsxs("section",{className:"quiz-play",children:[A.jsxs("div",{className:"quiz-play__header",children:[A.jsx("h2",{children:"Interland-style mission flow"}),A.jsx("span",{className:"pill",children:"3D scene + note-derived questions"})]}),A.jsxs("article",{className:"question-card",children:[A.jsxs("span",{className:"question-chip",children:[A.jsx(og,{size:14}),"Mission sequence"]}),A.jsx("h3",{children:"Click Launch Test Mission to enter the 3D quiz map and generate rounds from uploaded notes."}),A.jsxs("div",{className:"tag-row",children:[A.jsx("span",{children:"Upload or paste notes"}),A.jsx("span",{children:"Auto-generate MCQs"}),A.jsx("span",{children:"Progressive mission rounds"})]}),A.jsxs("div",{className:"question-footer",children:[A.jsx("button",{type:"button",onClick:n,children:"Launch test mission"}),A.jsx("button",{type:"button",className:"button-ghost",onClick:e,children:"Open classic generator"})]})]})]})]})},FR=({title:n,description:e})=>A.jsxs("section",{className:"subject-page",children:[A.jsx("h1",{children:n}),A.jsx("p",{children:e})]}),W_=["English (UK)","English (US)","Hindi"],OR=()=>{const n=ra(),[e,t]=Z.useState(0);return A.jsxs("section",{className:"study-groups-page",children:[A.jsxs("div",{className:"study-groups-hero",children:[A.jsxs("div",{className:"hero-graphic",children:[A.jsx("div",{className:"card"}),A.jsxs("div",{className:"avatar-row",children:[A.jsx("span",{}),A.jsx("span",{}),A.jsx("span",{}),A.jsx("span",{})]})]}),A.jsxs("h1",{children:["Get your study group on Quizlet",A.jsx("br",{}),"and study flashcards together"]}),A.jsx("button",{type:"button",onClick:()=>n("/flashcards"),children:"Create a group"}),A.jsx("a",{href:"https://quizlet.com/features/study-groups",target:"_blank",rel:"noreferrer",children:"Learn more about study groups"})]}),A.jsxs("footer",{children:[A.jsxs("div",{children:[A.jsx("a",{href:"https://www.google.com/policies/privacy/",target:"_blank",rel:"noreferrer",children:"Privacy"}),A.jsx("a",{href:"https://www.google.com/policies/terms/",target:"_blank",rel:"noreferrer",children:"Terms"})]}),A.jsx("button",{type:"button",onClick:()=>t(i=>(i+1)%W_.length),children:W_[e]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mg="183",kR=0,j_=1,BR=2,cu=1,zR=2,Xo=3,os=0,In=1,fr=2,gr=0,Xa=1,X_=2,q_=3,$_=4,VR=5,Ps=100,HR=101,GR=102,WR=103,jR=104,XR=200,qR=201,$R=202,YR=203,rp=204,sp=205,KR=206,ZR=207,JR=208,QR=209,e2=210,t2=211,n2=212,i2=213,r2=214,ap=0,op=1,lp=2,so=3,cp=4,up=5,fp=6,dp=7,u1=0,s2=1,a2=2,qi=0,f1=1,d1=2,h1=3,p1=4,m1=5,g1=6,_1=7,v1=300,ea=301,ao=302,pd=303,md=304,Ef=306,hp=1e3,pr=1001,pp=1002,tn=1003,o2=1004,Ec=1005,mn=1006,gd=1007,Fs=1008,Xn=1009,x1=1010,y1=1011,Rl=1012,gg=1013,Ki=1014,Hi=1015,Mr=1016,_g=1017,vg=1018,Pl=1020,S1=35902,M1=35899,E1=1021,T1=1022,wi=1023,Er=1026,Os=1027,w1=1028,xg=1029,oo=1030,yg=1031,Sg=1033,uu=33776,fu=33777,du=33778,hu=33779,mp=35840,gp=35841,_p=35842,vp=35843,xp=36196,yp=37492,Sp=37496,Mp=37488,Ep=37489,Tp=37490,wp=37491,Ap=37808,Cp=37809,bp=37810,Rp=37811,Pp=37812,Dp=37813,Np=37814,Lp=37815,Ip=37816,Up=37817,Fp=37818,Op=37819,kp=37820,Bp=37821,zp=36492,Vp=36494,Hp=36495,Gp=36283,Wp=36284,jp=36285,Xp=36286,l2=3200,A1=0,c2=1,zr="",oi="srgb",lo="srgb-linear",Gu="linear",ot="srgb",fa=7680,Y_=519,u2=512,f2=513,d2=514,Mg=515,h2=516,p2=517,Eg=518,m2=519,K_=35044,Z_="300 es",Gi=2e3,Dl=2001;function g2(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _2(){const n=Wu("canvas");return n.style.display="block",n}const J_={};function Q_(...n){const e="THREE."+n.shift();console.log(e,...n)}function C1(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ke(...n){n=C1(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Je(...n){n=C1(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ju(...n){const e=n.join(" ");e in J_||(J_[e]=!0,ke(...n))}function v2(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const x2={[ap]:op,[lp]:fp,[cp]:dp,[so]:up,[op]:ap,[fp]:lp,[dp]:cp,[up]:so};class Mo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_d=Math.PI/180,qp=180/Math.PI;function Jl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function y2(n,e){return(n%e+e)%e}function vd(n,e,t){return(1-t)*n+t*e}function Io(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function An(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Eo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],g=s[a+1],p=s[a+2],v=s[a+3];if(f!==v||l!==d||c!==g||u!==p){let m=l*d+c*g+u*p+f*v;m<0&&(d=-d,g=-g,p=-p,v=-v,m=-m);let h=1-o;if(m<.9995){const _=Math.acos(m),x=Math.sin(_);h=Math.sin(h*_)/x,o=Math.sin(o*_)/x,l=l*h+d*o,c=c*h+g*o,u=u*h+p*o,f=f*h+v*o}else{l=l*h+d*o,c=c*h+g*o,u=u*h+p*o,f=f*h+v*o;const _=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=_,c*=_,u*=_,f*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],g=s[a+2],p=s[a+3];return e[t]=o*p+u*f+l*g-c*d,e[t+1]=l*p+u*d+c*f-o*g,e[t+2]=c*p+u*g+o*d-l*f,e[t+3]=u*p-o*f-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),g=l(r/2),p=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*g*p,this._y=c*g*f-d*u*p,this._z=c*u*p+d*g*f,this._w=c*u*f-d*g*p;break;case"YXZ":this._x=d*u*f+c*g*p,this._y=c*g*f-d*u*p,this._z=c*u*p-d*g*f,this._w=c*u*f+d*g*p;break;case"ZXY":this._x=d*u*f-c*g*p,this._y=c*g*f+d*u*p,this._z=c*u*p+d*g*f,this._w=c*u*f-d*g*p;break;case"ZYX":this._x=d*u*f-c*g*p,this._y=c*g*f+d*u*p,this._z=c*u*p-d*g*f,this._w=c*u*f+d*g*p;break;case"YZX":this._x=d*u*f+c*g*p,this._y=c*g*f+d*u*p,this._z=c*u*p-d*g*f,this._w=c*u*f-d*g*p;break;case"XZY":this._x=d*u*f-c*g*p,this._y=c*g*f-d*u*p,this._z=c*u*p+d*g*f,this._w=c*u*f+d*g*p;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(u-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ev.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ev.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xd=new G,ev=new Eo;class He{constructor(e,t,i,r,s,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],g=i[5],p=i[8],v=r[0],m=r[3],h=r[6],_=r[1],x=r[4],S=r[7],E=r[2],w=r[5],C=r[8];return s[0]=a*v+o*_+l*E,s[3]=a*m+o*x+l*w,s[6]=a*h+o*S+l*C,s[1]=c*v+u*_+f*E,s[4]=c*m+u*x+f*w,s[7]=c*h+u*S+f*C,s[2]=d*v+g*_+p*E,s[5]=d*m+g*x+p*w,s[8]=d*h+g*S+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,g=c*s-a*l,p=t*f+i*d+r*g;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=g*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yd.makeScale(e,t)),this}rotate(e){return this.premultiply(yd.makeRotation(-e)),this}translate(e,t){return this.premultiply(yd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yd=new He,tv=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nv=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S2(){const n={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=qa(r.r),r.g=qa(r.g),r.b=qa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===zr?Gu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ju("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ju("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[lo]:{primaries:e,whitePoint:i,transfer:Gu,toXYZ:tv,fromXYZ:nv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:tv,fromXYZ:nv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),n}const Qe=S2();function _r(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let da;class M2{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{da===void 0&&(da=Wu("canvas")),da.width=e.width,da.height=e.height;const r=da.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=da}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=_r(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_r(t[i]/255)*255):t[i]=_r(t[i]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E2=0;class Tg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E2++}),this.uuid=Jl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Sd(r[a].image)):s.push(Sd(r[a]))}else s=Sd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Sd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?M2.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let T2=0;const Md=new G;class Mn extends Mo{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,i=pr,r=pr,s=mn,a=Fs,o=wi,l=Xn,c=Mn.DEFAULT_ANISOTROPY,u=zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T2++}),this.uuid=Jl(),this.name="",this.source=new Tg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hp:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case pp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hp:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case pp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=v1;Mn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],g=l[5],p=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+g+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(g+1)/2,E=(h+1)/2,w=(u+d)/4,C=(f+v)/4,y=(p+m)/4;return x>S&&x>E?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=C/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=y/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=C/s,r=y/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-p)*(m-p)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(f-v)/_,this.z=(d-u)/_,this.w=Math.acos((c+g+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w2 extends Mo{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Mn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Tg(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends w2{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class b1 extends Mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class A2 extends Mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ct{constructor(e,t,i,r,s,a,o,l,c,u,f,d,g,p,v,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,g,p,v,m)}set(e,t,i,r,s,a,o,l,c,u,f,d,g,p,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=g,h[7]=p,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ha.setFromMatrixColumn(e,0).length(),s=1/ha.setFromMatrixColumn(e,1).length(),a=1/ha.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,g=a*f,p=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=g+p*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=p+g*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,g=l*f,p=c*u,v=c*f;t[0]=d+v*o,t[4]=p*o-g,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=g*o-p,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,g=l*f,p=c*u,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=p+g*o,t[1]=g+p*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,g=a*f,p=o*u,v=o*f;t[0]=l*u,t[4]=p*c-g,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=g*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,g=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=v-d*f,t[8]=p*f+g,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=g*f+p,t[10]=d-v*f}else if(e.order==="XZY"){const d=a*l,g=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=a*u,t[9]=g*f-p,t[2]=p*f-g,t[6]=o*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C2,e,b2)}lookAt(e,t,i){const r=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Pr.crossVectors(i,Vn),Pr.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Pr.crossVectors(i,Vn)),Pr.normalize(),Tc.crossVectors(Vn,Pr),r[0]=Pr.x,r[4]=Tc.x,r[8]=Vn.x,r[1]=Pr.y,r[5]=Tc.y,r[9]=Vn.y,r[2]=Pr.z,r[6]=Tc.z,r[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],g=i[13],p=i[2],v=i[6],m=i[10],h=i[14],_=i[3],x=i[7],S=i[11],E=i[15],w=r[0],C=r[4],y=r[8],M=r[12],N=r[1],P=r[5],L=r[9],U=r[13],B=r[2],z=r[6],D=r[10],k=r[14],F=r[3],W=r[7],Q=r[11],te=r[15];return s[0]=a*w+o*N+l*B+c*F,s[4]=a*C+o*P+l*z+c*W,s[8]=a*y+o*L+l*D+c*Q,s[12]=a*M+o*U+l*k+c*te,s[1]=u*w+f*N+d*B+g*F,s[5]=u*C+f*P+d*z+g*W,s[9]=u*y+f*L+d*D+g*Q,s[13]=u*M+f*U+d*k+g*te,s[2]=p*w+v*N+m*B+h*F,s[6]=p*C+v*P+m*z+h*W,s[10]=p*y+v*L+m*D+h*Q,s[14]=p*M+v*U+m*k+h*te,s[3]=_*w+x*N+S*B+E*F,s[7]=_*C+x*P+S*z+E*W,s[11]=_*y+x*L+S*D+E*Q,s[15]=_*M+x*U+S*k+E*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],g=e[14],p=e[3],v=e[7],m=e[11],h=e[15],_=l*g-c*d,x=o*g-c*f,S=o*d-l*f,E=a*g-c*u,w=a*d-l*u,C=a*f-o*u;return t*(v*_-m*x+h*S)-i*(p*_-m*E+h*w)+r*(p*x-v*E+h*C)-s*(p*S-v*w+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],g=e[11],p=e[12],v=e[13],m=e[14],h=e[15],_=t*o-i*a,x=t*l-r*a,S=t*c-s*a,E=i*l-r*o,w=i*c-s*o,C=r*c-s*l,y=u*v-f*p,M=u*m-d*p,N=u*h-g*p,P=f*m-d*v,L=f*h-g*v,U=d*h-g*m,B=_*U-x*L+S*P+E*N-w*M+C*y;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return e[0]=(o*U-l*L+c*P)*z,e[1]=(r*L-i*U-s*P)*z,e[2]=(v*C-m*w+h*E)*z,e[3]=(d*w-f*C-g*E)*z,e[4]=(l*N-a*U-c*M)*z,e[5]=(t*U-r*N+s*M)*z,e[6]=(m*S-p*C-h*x)*z,e[7]=(u*C-d*S+g*x)*z,e[8]=(a*L-o*N+c*y)*z,e[9]=(i*N-t*L-s*y)*z,e[10]=(p*w-v*S+h*_)*z,e[11]=(f*S-u*w-g*_)*z,e[12]=(o*M-a*P-l*y)*z,e[13]=(t*P-i*M+r*y)*z,e[14]=(v*x-p*E-m*_)*z,e[15]=(u*E-f*x+d*_)*z,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,g=s*u,p=s*f,v=a*u,m=a*f,h=o*f,_=l*c,x=l*u,S=l*f,E=i.x,w=i.y,C=i.z;return r[0]=(1-(v+h))*E,r[1]=(g+S)*E,r[2]=(p-x)*E,r[3]=0,r[4]=(g-S)*w,r[5]=(1-(d+h))*w,r[6]=(m+_)*w,r[7]=0,r[8]=(p+x)*C,r[9]=(m-_)*C,r[10]=(1-(d+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=ha.set(r[0],r[1],r[2]).length();const o=ha.set(r[4],r[5],r[6]).length(),l=ha.set(r[8],r[9],r[10]).length();s<0&&(a=-a),vi.copy(this);const c=1/a,u=1/o,f=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=u,vi.elements[5]*=u,vi.elements[6]*=u,vi.elements[8]*=f,vi.elements[9]*=f,vi.elements[10]*=f,t.setFromRotationMatrix(vi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Gi,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),g=(i+r)/(i-r);let p,v;if(l)p=s/(a-s),v=a*s/(a-s);else if(o===Gi)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Dl)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Gi,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),g=-(i+r)/(i-r);let p,v;if(l)p=1/(a-s),v=a/(a-s);else if(o===Gi)p=-2/(a-s),v=-(a+s)/(a-s);else if(o===Dl)p=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ha=new G,vi=new Ct,C2=new G(0,0,0),b2=new G(1,1,1),Pr=new G,Tc=new G,Vn=new G,iv=new Ct,rv=new Eo;class Zi{constructor(e=0,t=0,i=0,r=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return iv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rv.setFromEuler(this),this.setFromQuaternion(rv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class wg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let R2=0;const sv=new G,pa=new Eo,nr=new Ct,wc=new G,Uo=new G,P2=new G,D2=new Eo,av=new G(1,0,0),ov=new G(0,1,0),lv=new G(0,0,1),cv={type:"added"},N2={type:"removed"},ma={type:"childadded",child:null},Ed={type:"childremoved",child:null};class rn extends Mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R2++}),this.uuid=Jl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new G,t=new Zi,i=new Eo,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new He}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pa.setFromAxisAngle(e,t),this.quaternion.multiply(pa),this}rotateOnWorldAxis(e,t){return pa.setFromAxisAngle(e,t),this.quaternion.premultiply(pa),this}rotateX(e){return this.rotateOnAxis(av,e)}rotateY(e){return this.rotateOnAxis(ov,e)}rotateZ(e){return this.rotateOnAxis(lv,e)}translateOnAxis(e,t){return sv.copy(e).applyQuaternion(this.quaternion),this.position.add(sv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(av,e)}translateY(e){return this.translateOnAxis(ov,e)}translateZ(e){return this.translateOnAxis(lv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wc.copy(e):wc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(Uo,wc,this.up):nr.lookAt(wc,Uo,this.up),this.quaternion.setFromRotationMatrix(nr),r&&(nr.extractRotation(r.matrixWorld),pa.setFromRotationMatrix(nr),this.quaternion.premultiply(pa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cv),ma.child=e,this.dispatchEvent(ma),ma.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(N2),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cv),ma.child=e,this.dispatchEvent(ma),ma.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,P2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,D2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),g=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),p.length>0&&(i.nodes=p)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new G(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wr extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L2={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),g=.02,p=.005;c.inputState.pinching&&d>g+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(L2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Wr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const R1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dr={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function wd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=y2(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=wd(a,s,e+1/3),this.g=wd(a,s,e),this.b=wd(a,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=oi){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){const i=R1[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}copyLinearToSRGB(e){return this.r=qa(e.r),this.g=qa(e.g),this.b=qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Qe.workingToColorSpace(fn.copy(this),e),Math.round(Ye(fn.r*255,0,255))*65536+Math.round(Ye(fn.g*255,0,255))*256+Math.round(Ye(fn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(fn.copy(this),t);const i=fn.r,r=fn.g,s=fn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=oi){Qe.workingToColorSpace(fn.copy(this),e);const t=fn.r,i=fn.g,r=fn.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Dr),this.setHSL(Dr.h+e,Dr.s+t,Dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Dr),e.getHSL(Ac);const i=vd(Dr.h,Ac.h,t),r=vd(Dr.s,Ac.s,t),s=vd(Dr.l,Ac.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new Ke;Ke.NAMES=R1;class Tf{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=i}clone(){return new Tf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class P1 extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xi=new G,ir=new G,Ad=new G,rr=new G,ga=new G,_a=new G,uv=new G,Cd=new G,bd=new G,Rd=new G,Pd=new Nt,Dd=new Nt,Nd=new Nt;class Ti{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),xi.subVectors(e,t),r.cross(xi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){xi.subVectors(r,t),ir.subVectors(i,t),Ad.subVectors(e,t);const a=xi.dot(xi),o=xi.dot(ir),l=xi.dot(Ad),c=ir.dot(ir),u=ir.dot(Ad),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,g=(c*l-o*u)*d,p=(a*u-o*l)*d;return s.set(1-g-p,p,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,rr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,rr.x),l.addScaledVector(a,rr.y),l.addScaledVector(o,rr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Pd.setScalar(0),Dd.setScalar(0),Nd.setScalar(0),Pd.fromBufferAttribute(e,t),Dd.fromBufferAttribute(e,i),Nd.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Pd,s.x),a.addScaledVector(Dd,s.y),a.addScaledVector(Nd,s.z),a}static isFrontFacing(e,t,i,r){return xi.subVectors(i,t),ir.subVectors(e,t),xi.cross(ir).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),xi.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Ti.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ga.subVectors(r,i),_a.subVectors(s,i),Cd.subVectors(e,i);const l=ga.dot(Cd),c=_a.dot(Cd);if(l<=0&&c<=0)return t.copy(i);bd.subVectors(e,r);const u=ga.dot(bd),f=_a.dot(bd);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ga,a);Rd.subVectors(e,s);const g=ga.dot(Rd),p=_a.dot(Rd);if(p>=0&&g<=p)return t.copy(s);const v=g*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(_a,o);const m=u*p-g*f;if(m<=0&&f-u>=0&&g-p>=0)return uv.subVectors(s,r),o=(f-u)/(f-u+(g-p)),t.copy(r).addScaledVector(uv,o);const h=1/(m+v+d);return a=v*h,o=d*h,t.copy(i).addScaledVector(ga,a).addScaledVector(_a,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ql{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yi):yi.fromBufferAttribute(s,a),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cc.copy(i.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),bc.subVectors(this.max,Fo),va.subVectors(e.a,Fo),xa.subVectors(e.b,Fo),ya.subVectors(e.c,Fo),Nr.subVectors(xa,va),Lr.subVectors(ya,xa),vs.subVectors(va,ya);let t=[0,-Nr.z,Nr.y,0,-Lr.z,Lr.y,0,-vs.z,vs.y,Nr.z,0,-Nr.x,Lr.z,0,-Lr.x,vs.z,0,-vs.x,-Nr.y,Nr.x,0,-Lr.y,Lr.x,0,-vs.y,vs.x,0];return!Ld(t,va,xa,ya,bc)||(t=[1,0,0,0,1,0,0,0,1],!Ld(t,va,xa,ya,bc))?!1:(Rc.crossVectors(Nr,Lr),t=[Rc.x,Rc.y,Rc.z],Ld(t,va,xa,ya,bc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sr=[new G,new G,new G,new G,new G,new G,new G,new G],yi=new G,Cc=new Ql,va=new G,xa=new G,ya=new G,Nr=new G,Lr=new G,vs=new G,Fo=new G,bc=new G,Rc=new G,xs=new G;function Ld(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){xs.fromArray(n,s);const o=r.x*Math.abs(xs.x)+r.y*Math.abs(xs.y)+r.z*Math.abs(xs.z),l=e.dot(xs),c=t.dot(xs),u=i.dot(xs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Bt=new G,Pc=new qe;let I2=0;class Yi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:I2++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=K_,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pc.fromBufferAttribute(this,t),Pc.applyMatrix3(e),this.setXY(t,Pc.x,Pc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Io(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=An(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Io(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Io(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Io(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Io(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),i=An(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),i=An(i,this.array),r=An(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),i=An(i,this.array),r=An(r,this.array),s=An(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==K_&&(e.usage=this.usage),e}}class D1 extends Yi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class N1 extends Yi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class En extends Yi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const U2=new Ql,Oo=new G,Id=new G;class Ag{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):U2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);const t=Oo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Oo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(Id)),this.expandByPoint(Oo.copy(e.center).sub(Id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let F2=0;const si=new Ct,Ud=new rn,Sa=new G,Hn=new Ql,ko=new Ql,$t=new G;class Pi extends Mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F2++}),this.uuid=Jl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g2(e)?N1:D1)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,i){return si.makeTranslation(e,t,i),this.applyMatrix4(si),this}scale(e,t,i){return si.makeScale(e,t,i),this.applyMatrix4(si),this}lookAt(e){return Ud.lookAt(e),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sa).negate(),this.translate(Sa.x,Sa.y,Sa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new En(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ql);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Hn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ag);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ko.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Hn.min,ko.min),Hn.expandByPoint($t),$t.addVectors(Hn.max,ko.max),Hn.expandByPoint($t)):(Hn.expandByPoint(ko.min),Hn.expandByPoint(ko.max))}Hn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)$t.fromBufferAttribute(o,c),l&&(Sa.fromBufferAttribute(e,c),$t.add(Sa)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new G,l[y]=new G;const c=new G,u=new G,f=new G,d=new qe,g=new qe,p=new qe,v=new G,m=new G;function h(y,M,N){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,N),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),p.fromBufferAttribute(s,N),u.sub(c),f.sub(c),g.sub(d),p.sub(d);const P=1/(g.x*p.y-p.x*g.y);isFinite(P)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(f,-g.y).multiplyScalar(P),m.copy(f).multiplyScalar(g.x).addScaledVector(u,-p.x).multiplyScalar(P),o[y].add(v),o[M].add(v),o[N].add(v),l[y].add(m),l[M].add(m),l[N].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let y=0,M=_.length;y<M;++y){const N=_[y],P=N.start,L=N.count;for(let U=P,B=P+L;U<B;U+=3)h(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new G,S=new G,E=new G,w=new G;function C(y){E.fromBufferAttribute(r,y),w.copy(E);const M=o[y];x.copy(M),x.sub(E.multiplyScalar(E.dot(M))).normalize(),S.crossVectors(w,M);const P=S.dot(l[y])<0?-1:1;a.setXYZW(y,x.x,x.y,x.z,P)}for(let y=0,M=_.length;y<M;++y){const N=_[y],P=N.start,L=N.count;for(let U=P,B=P+L;U<B;U+=3)C(e.getX(U+0)),C(e.getX(U+1)),C(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let d=0,g=e.count;d<g;d+=3){const p=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let g=0,p=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?g=l[v]*o.data.stride+o.offset:g=l[v]*u;for(let h=0;h<u;h++)d[p++]=c[g++]}return new Yi(d,u,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],g=e(d,i);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const g=c[f];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,g=f.length;d<g;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let O2=0;class ec extends Mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O2++}),this.uuid=Jl(),this.name="",this.type="Material",this.blending=Xa,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rp,this.blendDst=sp,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fa,this.stencilZFail=fa,this.stencilZPass=fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xa&&(i.blending=this.blending),this.side!==os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rp&&(i.blendSrc=this.blendSrc),this.blendDst!==sp&&(i.blendDst=this.blendDst),this.blendEquation!==Ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Y_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ar=new G,Fd=new G,Dc=new G,Ir=new G,Od=new G,Nc=new G,kd=new G;class L1{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fd.copy(e).add(t).multiplyScalar(.5),Dc.copy(t).sub(e).normalize(),Ir.copy(this.origin).sub(Fd);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Dc),o=Ir.dot(this.direction),l=-Ir.dot(Dc),c=Ir.lengthSq(),u=Math.abs(1-a*a);let f,d,g,p;if(u>0)if(f=a*l-o,d=a*o-l,p=s*u,f>=0)if(d>=-p)if(d<=p){const v=1/u;f*=v,d*=v,g=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Fd).addScaledVector(Dc,d),g}intersectSphere(e,t){ar.subVectors(e.center,this.origin);const i=ar.dot(this.direction),r=ar.dot(ar)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,i,r,s){Od.subVectors(t,e),Nc.subVectors(i,e),kd.crossVectors(Od,Nc);let a=this.direction.dot(kd),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ir.subVectors(this.origin,e);const l=o*this.direction.dot(Nc.crossVectors(Ir,Nc));if(l<0)return null;const c=o*this.direction.dot(Od.cross(Ir));if(c<0||l+c>a)return null;const u=-o*Ir.dot(kd);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class I1 extends ec{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=u1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fv=new Ct,ys=new L1,Lc=new Ag,dv=new G,Ic=new G,Uc=new G,Fc=new G,Bd=new G,Oc=new G,hv=new G,kc=new G;class Kt extends rn{constructor(e=new Pi,t=new I1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Oc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Bd.fromBufferAttribute(f,e),a?Oc.addScaledVector(Bd,u):Oc.addScaledVector(Bd.sub(t),u))}t.add(Oc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lc.copy(i.boundingSphere),Lc.applyMatrix4(s),ys.copy(e.ray).recast(e.near),!(Lc.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Lc,dv)===null||ys.origin.distanceToSquared(dv)>(e.far-e.near)**2))&&(fv.copy(s).invert(),ys.copy(e.ray).applyMatrix4(fv),!(i.boundingBox!==null&&ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){const m=d[p],h=a[m.materialIndex],_=Math.max(m.start,g.start),x=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let S=_,E=x;S<E;S+=3){const w=o.getX(S),C=o.getX(S+1),y=o.getX(S+2);r=Bc(this,h,e,i,c,u,f,w,C,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const p=Math.max(0,g.start),v=Math.min(o.count,g.start+g.count);for(let m=p,h=v;m<h;m+=3){const _=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);r=Bc(this,a,e,i,c,u,f,_,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){const m=d[p],h=a[m.materialIndex],_=Math.max(m.start,g.start),x=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=_,E=x;S<E;S+=3){const w=S,C=S+1,y=S+2;r=Bc(this,h,e,i,c,u,f,w,C,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const p=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let m=p,h=v;m<h;m+=3){const _=m,x=m+1,S=m+2;r=Bc(this,a,e,i,c,u,f,_,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function k2(n,e,t,i,r,s,a,o){let l;if(e.side===In?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===os,o),l===null)return null;kc.copy(o),kc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(kc);return c<t.near||c>t.far?null:{distance:c,point:kc.clone(),object:n}}function Bc(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ic),n.getVertexPosition(l,Uc),n.getVertexPosition(c,Fc);const u=k2(n,e,t,i,Ic,Uc,Fc,hv);if(u){const f=new G;Ti.getBarycoord(hv,Ic,Uc,Fc,f),r&&(u.uv=Ti.getInterpolatedAttribute(r,o,l,c,f,new qe)),s&&(u.uv1=Ti.getInterpolatedAttribute(s,o,l,c,f,new qe)),a&&(u.normal=Ti.getInterpolatedAttribute(a,o,l,c,f,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new G,materialIndex:0};Ti.getNormal(Ic,Uc,Fc,d.normal),u.face=d,u.barycoord=f}return u}class B2 extends Mn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=tn,u=tn,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zd=new G,z2=new G,V2=new He;class bs{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=zd.subVectors(i,t).cross(z2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(zd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||V2.getNormalMatrix(e),r=this.coplanarPoint(zd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new Ag,H2=new qe(.5,.5),zc=new G;class Cg{constructor(e=new bs,t=new bs,i=new bs,r=new bs,s=new bs,a=new bs){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],g=s[7],p=s[8],v=s[9],m=s[10],h=s[11],_=s[12],x=s[13],S=s[14],E=s[15];if(r[0].setComponents(c-a,g-u,h-p,E-_).normalize(),r[1].setComponents(c+a,g+u,h+p,E+_).normalize(),r[2].setComponents(c+o,g+f,h+v,E+x).normalize(),r[3].setComponents(c-o,g-f,h-v,E-x).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,g-d,h-m,E-S).normalize();else if(r[4].setComponents(c-l,g-d,h-m,E-S).normalize(),t===Gi)r[5].setComponents(c+l,g+d,h+m,E+S).normalize();else if(t===Dl)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);const t=H2.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(zc.x=r.normal.x>0?e.max.x:e.min.x,zc.y=r.normal.y>0?e.max.y:e.min.y,zc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class U1 extends Mn{constructor(e=[],t=ea,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nl extends Mn{constructor(e,t,i=Ki,r,s,a,o=tn,l=tn,c,u=Er,f=1){if(u!==Er&&u!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tg(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class G2 extends Nl{constructor(e,t=Ki,i=ea,r,s,a=tn,o=tn,l,c=Er){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class F1 extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ta extends Pi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,g=0;p("z","y","x",-1,-1,i,t,e,a,s,0),p("z","y","x",1,-1,i,t,-e,a,s,1),p("x","z","y",1,1,e,i,t,r,a,2),p("x","z","y",1,-1,e,i,-t,r,a,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(u,3)),this.setAttribute("uv",new En(f,2));function p(v,m,h,_,x,S,E,w,C,y,M){const N=S/C,P=E/y,L=S/2,U=E/2,B=w/2,z=C+1,D=y+1;let k=0,F=0;const W=new G;for(let Q=0;Q<D;Q++){const te=Q*P-U;for(let ne=0;ne<z;ne++){const we=ne*N-L;W[v]=we*_,W[m]=te*x,W[h]=B,c.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[h]=w>0?1:-1,u.push(W.x,W.y,W.z),f.push(ne/C),f.push(1-Q/y),k+=1}}for(let Q=0;Q<y;Q++)for(let te=0;te<C;te++){const ne=d+te+z*Q,we=d+te+z*(Q+1),De=d+(te+1)+z*(Q+1),Oe=d+(te+1)+z*Q;l.push(ne,we,Oe),l.push(we,De,Oe),F+=6}o.addGroup(g,F,M),g+=F,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wf extends Pi{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],g=[];let p=0;const v=[],m=i/2;let h=0;_(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new En(f,3)),this.setAttribute("normal",new En(d,3)),this.setAttribute("uv",new En(g,2));function _(){const S=new G,E=new G;let w=0;const C=(t-e)/i;for(let y=0;y<=s;y++){const M=[],N=y/s,P=N*(t-e)+e;for(let L=0;L<=r;L++){const U=L/r,B=U*l+o,z=Math.sin(B),D=Math.cos(B);E.x=P*z,E.y=-N*i+m,E.z=P*D,f.push(E.x,E.y,E.z),S.set(z,C,D).normalize(),d.push(S.x,S.y,S.z),g.push(U,1-N),M.push(p++)}v.push(M)}for(let y=0;y<r;y++)for(let M=0;M<s;M++){const N=v[M][y],P=v[M+1][y],L=v[M+1][y+1],U=v[M][y+1];(e>0||M!==0)&&(u.push(N,P,U),w+=3),(t>0||M!==s-1)&&(u.push(P,L,U),w+=3)}c.addGroup(h,w,0),h+=w}function x(S){const E=p,w=new qe,C=new G;let y=0;const M=S===!0?e:t,N=S===!0?1:-1;for(let L=1;L<=r;L++)f.push(0,m*N,0),d.push(0,N,0),g.push(.5,.5),p++;const P=p;for(let L=0;L<=r;L++){const B=L/r*l+o,z=Math.cos(B),D=Math.sin(B);C.x=M*D,C.y=m*N,C.z=M*z,f.push(C.x,C.y,C.z),d.push(0,N,0),w.x=z*.5+.5,w.y=D*.5*N+.5,g.push(w.x,w.y),p++}for(let L=0;L<r;L++){const U=E+L,B=P+L;S===!0?u.push(B,B+1,U):u.push(B+1,B,U),y+=3}c.addGroup(h,y,S===!0?1:2),h+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Af extends wf{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Af(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cf extends Pi{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new En(s,3)),this.setAttribute("normal",new En(s.slice(),3)),this.setAttribute("uv",new En(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const x=new G,S=new G,E=new G;for(let w=0;w<t.length;w+=3)g(t[w+0],x),g(t[w+1],S),g(t[w+2],E),l(x,S,E,_)}function l(_,x,S,E){const w=E+1,C=[];for(let y=0;y<=w;y++){C[y]=[];const M=_.clone().lerp(S,y/w),N=x.clone().lerp(S,y/w),P=w-y;for(let L=0;L<=P;L++)L===0&&y===w?C[y][L]=M:C[y][L]=M.clone().lerp(N,L/P)}for(let y=0;y<w;y++)for(let M=0;M<2*(w-y)-1;M++){const N=Math.floor(M/2);M%2===0?(d(C[y][N+1]),d(C[y+1][N]),d(C[y][N])):(d(C[y][N+1]),d(C[y+1][N+1]),d(C[y+1][N]))}}function c(_){const x=new G;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(_),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function u(){const _=new G;for(let x=0;x<s.length;x+=3){_.x=s[x+0],_.y=s[x+1],_.z=s[x+2];const S=m(_)/2/Math.PI+.5,E=h(_)/Math.PI+.5;a.push(S,1-E)}p(),f()}function f(){for(let _=0;_<a.length;_+=6){const x=a[_+0],S=a[_+2],E=a[_+4],w=Math.max(x,S,E),C=Math.min(x,S,E);w>.9&&C<.1&&(x<.2&&(a[_+0]+=1),S<.2&&(a[_+2]+=1),E<.2&&(a[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function g(_,x){const S=_*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function p(){const _=new G,x=new G,S=new G,E=new G,w=new qe,C=new qe,y=new qe;for(let M=0,N=0;M<s.length;M+=9,N+=6){_.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),S.set(s[M+6],s[M+7],s[M+8]),w.set(a[N+0],a[N+1]),C.set(a[N+2],a[N+3]),y.set(a[N+4],a[N+5]),E.copy(_).add(x).add(S).divideScalar(3);const P=m(E);v(w,N+0,_,P),v(C,N+2,x,P),v(y,N+4,S,P)}}function v(_,x,S,E){E<0&&_.x===1&&(a[x]=_.x-1),S.x===0&&S.z===0&&(a[x]=E/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function h(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cf(e.vertices,e.indices,e.radius,e.detail)}}class bf extends Cf{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bf(e.radius,e.detail)}}class O1 extends Cf{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new O1(e.radius,e.detail)}}class tc extends Pi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,g=[],p=[],v=[],m=[];for(let h=0;h<u;h++){const _=h*d-a;for(let x=0;x<c;x++){const S=x*f-s;p.push(S,-_,0),v.push(0,0,1),m.push(x/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<o;_++){const x=_+c*h,S=_+c*(h+1),E=_+1+c*(h+1),w=_+1+c*h;g.push(x,S,w),g.push(S,E,w)}this.setIndex(g),this.setAttribute("position",new En(p,3)),this.setAttribute("normal",new En(v,3)),this.setAttribute("uv",new En(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.width,e.height,e.widthSegments,e.heightSegments)}}function co(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function vn(n){const e={};for(let t=0;t<n.length;t++){const i=co(n[t]);for(const r in i)e[r]=i[r]}return e}function W2(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function k1(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const j2={clone:co,merge:vn};var X2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends ec{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X2,this.fragmentShader=q2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=W2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class $2 extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ks extends ec{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=A1,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Y2 extends ec{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class K2 extends ec{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class B1 extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class z1 extends B1{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Vd=new Ct,pv=new G,mv=new G;class Z2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cg,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;pv.setFromMatrixPosition(e.matrixWorld),t.position.copy(pv),mv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mv),t.updateMatrixWorld(),Vd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Dl||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vc=new G,Hc=new Eo,Li=new G;class V1 extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vc,Hc,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,Hc,Li.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Vc,Hc,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,Hc,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new G,gv=new qe,_v=new qe;class jn extends V1{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_d*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qp*2*Math.atan(Math.tan(_d*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,gv,_v),t.subVectors(_v,gv)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_d*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class bg extends V1{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class J2 extends Z2{constructor(){super(new bg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class H1 extends B1{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new J2}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ma=-90,Ea=1;class Q2 extends rn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jn(Ma,Ea,e,t);r.layers=this.layers,this.add(r);const s=new jn(Ma,Ea,e,t);s.layers=this.layers,this.add(s);const a=new jn(Ma,Ea,e,t);a.layers=this.layers,this.add(a);const o=new jn(Ma,Ea,e,t);o.layers=this.layers,this.add(o);const l=new jn(Ma,Ea,e,t);l.layers=this.layers,this.add(l);const c=new jn(Ma,Ea,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,g),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class eP extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const vv=new Ct;class tP{constructor(e,t,i=0,r=1/0){this.ray=new L1(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new wg,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vv),this}intersectObject(e,t=!0,i=[]){return $p(e,this,i,t),i.sort(xv),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)$p(e[r],this,i,t);return i.sort(xv),i}}function xv(n,e){return n.distance-e.distance}function $p(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)$p(s[a],e,t,!0)}}class G1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ke("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function yv(n,e,t,i){const r=nP(i);switch(t){case E1:return n*e;case w1:return n*e/r.components*r.byteLength;case xg:return n*e/r.components*r.byteLength;case oo:return n*e*2/r.components*r.byteLength;case yg:return n*e*2/r.components*r.byteLength;case T1:return n*e*3/r.components*r.byteLength;case wi:return n*e*4/r.components*r.byteLength;case Sg:return n*e*4/r.components*r.byteLength;case uu:case fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case du:case hu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gp:case vp:return Math.max(n,16)*Math.max(e,8)/4;case mp:case _p:return Math.max(n,8)*Math.max(e,8)/2;case xp:case yp:case Mp:case Ep:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sp:case Tp:case wp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ap:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case bp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Pp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Dp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Np:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Lp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ip:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Up:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Fp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Op:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case kp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Bp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case zp:case Vp:case Hp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Gp:case Wp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jp:case Xp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nP(n){switch(n){case Xn:case x1:return{byteLength:1,components:1};case Rl:case y1:case Mr:return{byteLength:2,components:1};case _g:case vg:return{byteLength:2,components:4};case Ki:case gg:case Hi:return{byteLength:4,components:1};case S1:case M1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mg}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mg);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function W1(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function iP(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((g,p)=>g.start-p.start);let d=0;for(let g=1;g<f.length;g++){const p=f[d],v=f[g];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,f[d]=v)}f.length=d+1;for(let g=0,p=f.length;g<p;g++){const v=f[g];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var rP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_P=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,TP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,AP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,CP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,RP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,PP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IP="gl_FragColor = linearToOutputTexel( gl_FragColor );",UP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,OP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,VP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$P=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,KP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ZP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,n3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,i3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,r3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,s3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,h3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,y3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,M3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,E3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,C3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,L3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,z3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,V3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,H3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,G3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,j3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,q3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,J3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Q3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_D=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ED=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ND=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ID=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:rP,alphahash_pars_fragment:sP,alphamap_fragment:aP,alphamap_pars_fragment:oP,alphatest_fragment:lP,alphatest_pars_fragment:cP,aomap_fragment:uP,aomap_pars_fragment:fP,batching_pars_vertex:dP,batching_vertex:hP,begin_vertex:pP,beginnormal_vertex:mP,bsdfs:gP,iridescence_fragment:_P,bumpmap_pars_fragment:vP,clipping_planes_fragment:xP,clipping_planes_pars_fragment:yP,clipping_planes_pars_vertex:SP,clipping_planes_vertex:MP,color_fragment:EP,color_pars_fragment:TP,color_pars_vertex:wP,color_vertex:AP,common:CP,cube_uv_reflection_fragment:bP,defaultnormal_vertex:RP,displacementmap_pars_vertex:PP,displacementmap_vertex:DP,emissivemap_fragment:NP,emissivemap_pars_fragment:LP,colorspace_fragment:IP,colorspace_pars_fragment:UP,envmap_fragment:FP,envmap_common_pars_fragment:OP,envmap_pars_fragment:kP,envmap_pars_vertex:BP,envmap_physical_pars_fragment:KP,envmap_vertex:zP,fog_vertex:VP,fog_pars_vertex:HP,fog_fragment:GP,fog_pars_fragment:WP,gradientmap_pars_fragment:jP,lightmap_pars_fragment:XP,lights_lambert_fragment:qP,lights_lambert_pars_fragment:$P,lights_pars_begin:YP,lights_toon_fragment:ZP,lights_toon_pars_fragment:JP,lights_phong_fragment:QP,lights_phong_pars_fragment:e3,lights_physical_fragment:t3,lights_physical_pars_fragment:n3,lights_fragment_begin:i3,lights_fragment_maps:r3,lights_fragment_end:s3,logdepthbuf_fragment:a3,logdepthbuf_pars_fragment:o3,logdepthbuf_pars_vertex:l3,logdepthbuf_vertex:c3,map_fragment:u3,map_pars_fragment:f3,map_particle_fragment:d3,map_particle_pars_fragment:h3,metalnessmap_fragment:p3,metalnessmap_pars_fragment:m3,morphinstance_vertex:g3,morphcolor_vertex:_3,morphnormal_vertex:v3,morphtarget_pars_vertex:x3,morphtarget_vertex:y3,normal_fragment_begin:S3,normal_fragment_maps:M3,normal_pars_fragment:E3,normal_pars_vertex:T3,normal_vertex:w3,normalmap_pars_fragment:A3,clearcoat_normal_fragment_begin:C3,clearcoat_normal_fragment_maps:b3,clearcoat_pars_fragment:R3,iridescence_pars_fragment:P3,opaque_fragment:D3,packing:N3,premultiplied_alpha_fragment:L3,project_vertex:I3,dithering_fragment:U3,dithering_pars_fragment:F3,roughnessmap_fragment:O3,roughnessmap_pars_fragment:k3,shadowmap_pars_fragment:B3,shadowmap_pars_vertex:z3,shadowmap_vertex:V3,shadowmask_pars_fragment:H3,skinbase_vertex:G3,skinning_pars_vertex:W3,skinning_vertex:j3,skinnormal_vertex:X3,specularmap_fragment:q3,specularmap_pars_fragment:$3,tonemapping_fragment:Y3,tonemapping_pars_fragment:K3,transmission_fragment:Z3,transmission_pars_fragment:J3,uv_pars_fragment:Q3,uv_pars_vertex:eD,uv_vertex:tD,worldpos_vertex:nD,background_vert:iD,background_frag:rD,backgroundCube_vert:sD,backgroundCube_frag:aD,cube_vert:oD,cube_frag:lD,depth_vert:cD,depth_frag:uD,distance_vert:fD,distance_frag:dD,equirect_vert:hD,equirect_frag:pD,linedashed_vert:mD,linedashed_frag:gD,meshbasic_vert:_D,meshbasic_frag:vD,meshlambert_vert:xD,meshlambert_frag:yD,meshmatcap_vert:SD,meshmatcap_frag:MD,meshnormal_vert:ED,meshnormal_frag:TD,meshphong_vert:wD,meshphong_frag:AD,meshphysical_vert:CD,meshphysical_frag:bD,meshtoon_vert:RD,meshtoon_frag:PD,points_vert:DD,points_frag:ND,shadow_vert:LD,shadow_frag:ID,sprite_vert:UD,sprite_frag:FD},he={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Bi={basic:{uniforms:vn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:vn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:vn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:vn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:vn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:vn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:vn([he.points,he.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:vn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:vn([he.common,he.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:vn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:vn([he.sprite,he.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:vn([he.common,he.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:vn([he.lights,he.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Bi.physical={uniforms:vn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Gc={r:0,b:0,g:0},Ms=new Zi,OD=new Ct;function kD(n,e,t,i,r,s){const a=new Ke(0);let o=r===!0?0:1,l,c,u=null,f=0,d=null;function g(_){let x=_.isScene===!0?_.background:null;if(x&&x.isTexture){const S=_.backgroundBlurriness>0;x=e.get(x,S)}return x}function p(_){let x=!1;const S=g(_);S===null?m(a,o):S&&S.isColor&&(m(S,1),x=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(_,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===Ef)?(c===void 0&&(c=new Kt(new ta(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:co(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Ms.copy(x.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(OD.makeRotationFromEuler(Ms)),c.material.toneMapped=Qe.getTransfer(S.colorSpace)!==ot,(u!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Kt(new tc(2,2),new Ji({name:"BackgroundMaterial",uniforms:co(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,x){_.getRGB(Gc,k1(n)),t.buffers.color.setClear(Gc.r,Gc.g,Gc.b,x,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),o=x,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:p,addToRenderList:v,dispose:h}}function BD(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(P,L,U,B,z){let D=!1;const k=f(P,B,U,L);s!==k&&(s=k,c(s.object)),D=g(P,B,U,z),D&&p(P,B,U,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,S(P,L,U,B),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function f(P,L,U,B){const z=B.wireframe===!0;let D=i[L.id];D===void 0&&(D={},i[L.id]=D);const k=P.isInstancedMesh===!0?P.id:0;let F=D[k];F===void 0&&(F={},D[k]=F);let W=F[U.id];W===void 0&&(W={},F[U.id]=W);let Q=W[z];return Q===void 0&&(Q=d(l()),W[z]=Q),Q}function d(P){const L=[],U=[],B=[];for(let z=0;z<t;z++)L[z]=0,U[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:B,object:P,attributes:{},index:null}}function g(P,L,U,B){const z=s.attributes,D=L.attributes;let k=0;const F=U.getAttributes();for(const W in F)if(F[W].location>=0){const te=z[W];let ne=D[W];if(ne===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),te===void 0||te.attribute!==ne||ne&&te.data!==ne.data)return!0;k++}return s.attributesNum!==k||s.index!==B}function p(P,L,U,B){const z={},D=L.attributes;let k=0;const F=U.getAttributes();for(const W in F)if(F[W].location>=0){let te=D[W];te===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));const ne={};ne.attribute=te,te&&te.data&&(ne.data=te.data),z[W]=ne,k++}s.attributes=z,s.attributesNum=k,s.index=B}function v(){const P=s.newAttributes;for(let L=0,U=P.length;L<U;L++)P[L]=0}function m(P){h(P,0)}function h(P,L){const U=s.newAttributes,B=s.enabledAttributes,z=s.attributeDivisors;U[P]=1,B[P]===0&&(n.enableVertexAttribArray(P),B[P]=1),z[P]!==L&&(n.vertexAttribDivisor(P,L),z[P]=L)}function _(){const P=s.newAttributes,L=s.enabledAttributes;for(let U=0,B=L.length;U<B;U++)L[U]!==P[U]&&(n.disableVertexAttribArray(U),L[U]=0)}function x(P,L,U,B,z,D,k){k===!0?n.vertexAttribIPointer(P,L,U,z,D):n.vertexAttribPointer(P,L,U,B,z,D)}function S(P,L,U,B){v();const z=B.attributes,D=U.getAttributes(),k=L.defaultAttributeValues;for(const F in D){const W=D[F];if(W.location>=0){let Q=z[F];if(Q===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){const te=Q.normalized,ne=Q.itemSize,we=e.get(Q);if(we===void 0)continue;const De=we.buffer,Oe=we.type,Y=we.bytesPerElement,re=Oe===n.INT||Oe===n.UNSIGNED_INT||Q.gpuType===gg;if(Q.isInterleavedBufferAttribute){const le=Q.data,Fe=le.stride,Ne=Q.offset;if(le.isInstancedInterleavedBuffer){for(let Le=0;Le<W.locationSize;Le++)h(W.location+Le,le.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Le=0;Le<W.locationSize;Le++)m(W.location+Le);n.bindBuffer(n.ARRAY_BUFFER,De);for(let Le=0;Le<W.locationSize;Le++)x(W.location+Le,ne/W.locationSize,Oe,te,Fe*Y,(Ne+ne/W.locationSize*Le)*Y,re)}else{if(Q.isInstancedBufferAttribute){for(let le=0;le<W.locationSize;le++)h(W.location+le,Q.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let le=0;le<W.locationSize;le++)m(W.location+le);n.bindBuffer(n.ARRAY_BUFFER,De);for(let le=0;le<W.locationSize;le++)x(W.location+le,ne/W.locationSize,Oe,te,ne*Y,ne/W.locationSize*le*Y,re)}}else if(k!==void 0){const te=k[F];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(W.location,te);break;case 3:n.vertexAttrib3fv(W.location,te);break;case 4:n.vertexAttrib4fv(W.location,te);break;default:n.vertexAttrib1fv(W.location,te)}}}}_()}function E(){M();for(const P in i){const L=i[P];for(const U in L){const B=L[U];for(const z in B){const D=B[z];for(const k in D)u(D[k].object),delete D[k];delete B[z]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;const L=i[P.id];for(const U in L){const B=L[U];for(const z in B){const D=B[z];for(const k in D)u(D[k].object),delete D[k];delete B[z]}}delete i[P.id]}function C(P){for(const L in i){const U=i[L];for(const B in U){const z=U[B];if(z[P.id]===void 0)continue;const D=z[P.id];for(const k in D)u(D[k].object),delete D[k];delete z[P.id]}}}function y(P){for(const L in i){const U=i[L],B=P.isInstancedMesh===!0?P.id:0,z=U[B];if(z!==void 0){for(const D in z){const k=z[D];for(const F in k)u(k[F].object),delete k[F];delete z[D]}delete U[B],Object.keys(U).length===0&&delete i[L]}}}function M(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:N,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function zD(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let g=0;for(let p=0;p<f;p++)g+=u[p];t.update(g,i,1)}function l(c,u,f,d){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<c.length;p++)a(c[p],u[p],d[p]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v]*d[v];t.update(p,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function VD(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==wi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const y=C===Mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Xn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Hi&&!y)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:S,maxSamples:E,samples:w}}function HD(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new bs,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const g=f.length!==0||d||i!==0||r;return r=d,i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,g){const p=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||p===null||p.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,x=_*4;let S=h.clippingState||null;l.value=S,S=u(p,d,x,g);for(let E=0;E!==x;++E)S[E]=t[E];h.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,g,p){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const h=g+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,S=g;x!==v;++x,S+=4)a.copy(f[x]).applyMatrix4(_,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const jr=4,Sv=[.125,.215,.35,.446,.526,.582],Ds=20,GD=256,Bo=new bg,Mv=new Ke;let Hd=null,Gd=0,Wd=0,jd=!1;const WD=new G;class Ev{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=WD}=s;Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hd,Gd,Wd),this._renderer.xr.enabled=jd,e.scissorTest=!1,Ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ea||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Mr,format:wi,colorSpace:lo,depthBuffer:!1},r=Tv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tv(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jD(s)),this._blurMaterial=qD(s,e,t),this._ggxMaterial=XD(s,e,t)}return r}_compileMaterial(e){const t=new Kt(new Pi,e);this._renderer.compile(t,Bo)}_sceneToCubeUV(e,t,i,r,s){const l=new jn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,g=f.toneMapping;f.getClearColor(Mv),f.toneMapping=qi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kt(new ta,new I1({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let h=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,h=!0):(m.color.copy(Mv),h=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):S===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const E=this._cubeSize;Ta(r,S*E,x>2?E:0,E,E),f.setRenderTarget(r),h&&f.render(v,l),f.render(e,l)}f.toneMapping=g,f.autoClear=d,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ea||e.mapping===ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Av()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wv());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ta(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Bo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,g=f*d,{_lodMax:p}=this,v=this._sizeLods[i],m=3*v*(i>p-jr?i-p+jr:0),h=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=p-t,Ta(s,m,h,3*v,2*v),r.setRenderTarget(s),r.render(o,Bo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-i,Ta(e,m,h,3*v,2*v),r.setRenderTarget(e),r.render(o,Bo)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,g=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ds-1),v=s/p,m=isFinite(s)?1+Math.floor(u*v):Ds;m>Ds&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ds}`);const h=[];let _=0;for(let C=0;C<Ds;++C){const y=C/v,M=Math.exp(-y*y/2);h.push(M),C===0?_+=M:C<m&&(_+=2*M)}for(let C=0;C<h.length;C++)h[C]=h[C]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-i;const S=this._sizeLods[r],E=3*S*(r>x-jr?r-x+jr:0),w=4*(this._cubeSize-S);Ta(t,E,w,3*S,2*S),l.setRenderTarget(t),l.render(f,Bo)}}function jD(n){const e=[],t=[],i=[];let r=n;const s=n-jr+1+Sv.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-jr?l=Sv[a-n+jr-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,p=6,v=3,m=2,h=1,_=new Float32Array(v*p*g),x=new Float32Array(m*p*g),S=new Float32Array(h*p*g);for(let w=0;w<g;w++){const C=w%3*2/3-1,y=w>2?0:-1,M=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];_.set(M,v*p*w),x.set(d,m*p*w);const N=[w,w,w,w,w,w];S.set(N,h*p*w)}const E=new Pi;E.setAttribute("position",new Yi(_,v)),E.setAttribute("uv",new Yi(x,m)),E.setAttribute("faceIndex",new Yi(S,h)),i.push(new Kt(E,null)),r>jr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Tv(n,e,t){const i=new $i(n,e,t);return i.texture.mapping=Ef,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ta(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function XD(n,e,t){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function qD(n,e,t){const i=new Float32Array(Ds),r=new G(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function wv(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Av(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Rf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class j1 extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new U1(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ta(5,5,5),s=new Ji({name:"CubemapFromEquirect",uniforms:co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:gr});s.uniforms.tEquirect.value=t;const a=new Kt(r,s),o=t.minFilter;return t.minFilter===Fs&&(t.minFilter=mn),new Q2(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function $D(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,g=!1){return d==null?null:g?a(d):s(d)}function s(d){if(d&&d.isTexture){const g=d.mapping;if(g===pd||g===md)if(e.has(d)){const p=e.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const v=new j1(p.height);return v.fromEquirectangularTexture(n,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const g=d.mapping,p=g===pd||g===md,v=g===ea||g===ao;if(p||v){let m=t.get(d);const h=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new Ev(n)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const _=d.image;return p&&_&&_.height>0||v&&_&&l(_)?(i===null&&(i=new Ev(n)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,g){return g===pd?d.mapping=ea:g===md&&(d.mapping=ao),d}function l(d){let g=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&g++;return g===p}function c(d){const g=d.target;g.removeEventListener("dispose",c);const p=e.get(g);p!==void 0&&(e.delete(g),p.dispose())}function u(d){const g=d.target;g.removeEventListener("dispose",u);const p=t.get(g);p!==void 0&&(t.delete(g),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function YD(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ju("WebGLRenderer: "+i+" extension not supported."),r}}}function KD(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER)}function c(f){const d=[],g=f.index,p=f.attributes.position;let v=0;if(p===void 0)return;if(g!==null){const _=g.array;v=g.version;for(let x=0,S=_.length;x<S;x+=3){const E=_[x+0],w=_[x+1],C=_[x+2];d.push(E,w,w,C,C,E)}}else{const _=p.array;v=p.version;for(let x=0,S=_.length/3-1;x<S;x+=3){const E=x+0,w=x+1,C=x+2;d.push(E,w,w,C,C,E)}}const m=new(p.count>=65535?N1:D1)(d,1);m.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function ZD(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,g){n.drawElements(i,g,s,d*a),t.update(g,i,1)}function c(d,g,p){p!==0&&(n.drawElementsInstanced(i,g,s,d*a,p),t.update(g,i,p))}function u(d,g,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,d,0,p);let m=0;for(let h=0;h<p;h++)m+=g[h];t.update(m,i,1)}function f(d,g,p,v){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/a,g[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,d,0,v,0,p);let h=0;for(let _=0;_<p;_++)h+=g[_]*v[_];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function JD(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function QD(n,e,t){const i=new WeakMap,r=new Nt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let M=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),p===!0&&(x=2),v===!0&&(x=3);let S=o.attributes.position.count*x,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const w=new Float32Array(S*E*4*f),C=new b1(w,S,E,f);C.type=Hi,C.needsUpdate=!0;const y=x*4;for(let N=0;N<f;N++){const P=m[N],L=h[N],U=_[N],B=S*E*4*N;for(let z=0;z<P.count;z++){const D=z*y;g===!0&&(r.fromBufferAttribute(P,z),w[B+D+0]=r.x,w[B+D+1]=r.y,w[B+D+2]=r.z,w[B+D+3]=0),p===!0&&(r.fromBufferAttribute(L,z),w[B+D+4]=r.x,w[B+D+5]=r.y,w[B+D+6]=r.z,w[B+D+7]=0),v===!0&&(r.fromBufferAttribute(U,z),w[B+D+8]=r.x,w[B+D+9]=r.y,w[B+D+10]=r.z,w[B+D+11]=U.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new qe(S,E)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let v=0;v<c.length;v++)g+=c[v];const p=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function eN(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const g=c.skeleton;s.get(g)!==u&&(g.update(),s.set(g,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const tN={[f1]:"LINEAR_TONE_MAPPING",[d1]:"REINHARD_TONE_MAPPING",[h1]:"CINEON_TONE_MAPPING",[p1]:"ACES_FILMIC_TONE_MAPPING",[g1]:"AGX_TONE_MAPPING",[_1]:"NEUTRAL_TONE_MAPPING",[m1]:"CUSTOM_TONE_MAPPING"};function nN(n,e,t,i,r){const s=new $i(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new $i(e,t,{type:Mr,depthBuffer:!1,stencilBuffer:!1}),o=new Pi;o.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new En([0,2,0,0,2,0],2));const l=new $2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Kt(o,l),u=new bg(-1,1,1,-1,0,1);let f=null,d=null,g=!1,p,v=null,m=[],h=!1;this.setSize=function(_,x){s.setSize(_,x),a.setSize(_,x);for(let S=0;S<m.length;S++){const E=m[S];E.setSize&&E.setSize(_,x)}},this.setEffects=function(_){m=_,h=m.length>0&&m[0].isRenderPass===!0;const x=s.width,S=s.height;for(let E=0;E<m.length;E++){const w=m[E];w.setSize&&w.setSize(x,S)}},this.begin=function(_,x){if(g||_.toneMapping===qi&&m.length===0)return!1;if(v=x,x!==null){const S=x.width,E=x.height;(s.width!==S||s.height!==E)&&this.setSize(S,E)}return h===!1&&_.setRenderTarget(s),p=_.toneMapping,_.toneMapping=qi,!0},this.hasRenderPass=function(){return h},this.end=function(_,x){_.toneMapping=p,g=!0;let S=s,E=a;for(let w=0;w<m.length;w++){const C=m[w];if(C.enabled!==!1&&(C.render(_,E,S,x),C.needsSwap!==!1)){const y=S;S=E,E=y}}if(f!==_.outputColorSpace||d!==_.toneMapping){f=_.outputColorSpace,d=_.toneMapping,l.defines={},Qe.getTransfer(f)===ot&&(l.defines.SRGB_TRANSFER="");const w=tN[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(v),_.render(c,u),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const X1=new Mn,Yp=new Nl(1,1),q1=new b1,$1=new A2,Y1=new U1,Cv=[],bv=[],Rv=new Float32Array(16),Pv=new Float32Array(9),Dv=new Float32Array(4);function To(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Cv[r];if(s===void 0&&(s=new Float32Array(r),Cv[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pf(n,e){let t=bv[e];t===void 0&&(t=new Int32Array(e),bv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function iN(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function sN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function aN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function oN(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,i))return;Dv.set(i),n.uniformMatrix2fv(this.addr,!1,Dv),Xt(t,i)}}function lN(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,i))return;Pv.set(i),n.uniformMatrix3fv(this.addr,!1,Pv),Xt(t,i)}}function cN(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,i))return;Rv.set(i),n.uniformMatrix4fv(this.addr,!1,Rv),Xt(t,i)}}function uN(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function dN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function hN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function pN(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function gN(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function _N(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function vN(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Yp.compareFunction=t.isReversedDepthBuffer()?Eg:Mg,s=Yp):s=X1,t.setTexture2D(e||s,r)}function xN(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||$1,r)}function yN(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Y1,r)}function SN(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||q1,r)}function MN(n){switch(n){case 5126:return iN;case 35664:return rN;case 35665:return sN;case 35666:return aN;case 35674:return oN;case 35675:return lN;case 35676:return cN;case 5124:case 35670:return uN;case 35667:case 35671:return fN;case 35668:case 35672:return dN;case 35669:case 35673:return hN;case 5125:return pN;case 36294:return mN;case 36295:return gN;case 36296:return _N;case 35678:case 36198:case 36298:case 36306:case 35682:return vN;case 35679:case 36299:case 36307:return xN;case 35680:case 36300:case 36308:case 36293:return yN;case 36289:case 36303:case 36311:case 36292:return SN}}function EN(n,e){n.uniform1fv(this.addr,e)}function TN(n,e){const t=To(e,this.size,2);n.uniform2fv(this.addr,t)}function wN(n,e){const t=To(e,this.size,3);n.uniform3fv(this.addr,t)}function AN(n,e){const t=To(e,this.size,4);n.uniform4fv(this.addr,t)}function CN(n,e){const t=To(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function bN(n,e){const t=To(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function RN(n,e){const t=To(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function PN(n,e){n.uniform1iv(this.addr,e)}function DN(n,e){n.uniform2iv(this.addr,e)}function NN(n,e){n.uniform3iv(this.addr,e)}function LN(n,e){n.uniform4iv(this.addr,e)}function IN(n,e){n.uniform1uiv(this.addr,e)}function UN(n,e){n.uniform2uiv(this.addr,e)}function FN(n,e){n.uniform3uiv(this.addr,e)}function ON(n,e){n.uniform4uiv(this.addr,e)}function kN(n,e,t){const i=this.cache,r=e.length,s=Pf(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Yp:a=X1;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function BN(n,e,t){const i=this.cache,r=e.length,s=Pf(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||$1,s[a])}function zN(n,e,t){const i=this.cache,r=e.length,s=Pf(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Y1,s[a])}function VN(n,e,t){const i=this.cache,r=e.length,s=Pf(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||q1,s[a])}function HN(n){switch(n){case 5126:return EN;case 35664:return TN;case 35665:return wN;case 35666:return AN;case 35674:return CN;case 35675:return bN;case 35676:return RN;case 5124:case 35670:return PN;case 35667:case 35671:return DN;case 35668:case 35672:return NN;case 35669:case 35673:return LN;case 5125:return IN;case 36294:return UN;case 36295:return FN;case 36296:return ON;case 35678:case 36198:case 36298:case 36306:case 35682:return kN;case 35679:case 36299:case 36307:return BN;case 35680:case 36300:case 36308:case 36293:return zN;case 36289:case 36303:case 36311:case 36292:return VN}}class GN{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=MN(t.type)}}class WN{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HN(t.type)}}class jN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function Nv(n,e){n.seq.push(e),n.map[e.id]=e}function XN(n,e,t){const i=n.name,r=i.length;for(Xd.lastIndex=0;;){const s=Xd.exec(i),a=Xd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Nv(t,c===void 0?new GN(o,n,e):new WN(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new jN(o),Nv(t,f)),t=f}}}class pu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);XN(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Lv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const qN=37297;let $N=0;function YN(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Iv=new He;function KN(n){Qe._getMatrix(Iv,Qe.workingColorSpace,n);const e=`mat3( ${Iv.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case Gu:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Uv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+YN(n.getShaderSource(e),o)}else return s}function ZN(n,e){const t=KN(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const JN={[f1]:"Linear",[d1]:"Reinhard",[h1]:"Cineon",[p1]:"ACESFilmic",[g1]:"AgX",[_1]:"Neutral",[m1]:"Custom"};function QN(n,e){const t=JN[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wc=new G;function eL(){Qe.getLuminanceCoefficients(Wc);const n=Wc.x.toFixed(4),e=Wc.y.toFixed(4),t=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function nL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function iL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function qo(n){return n!==""}function Fv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ov(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kp(n){return n.replace(rL,aL)}const sL=new Map;function aL(n,e){let t=Ge[e];if(t===void 0){const i=sL.get(e);if(i!==void 0)t=Ge[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kp(t)}const oL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kv(n){return n.replace(oL,lL)}function lL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bv(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const cL={[cu]:"SHADOWMAP_TYPE_PCF",[Xo]:"SHADOWMAP_TYPE_VSM"};function uL(n){return cL[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fL={[ea]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE",[Ef]:"ENVMAP_TYPE_CUBE_UV"};function dL(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":fL[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const hL={[ao]:"ENVMAP_MODE_REFRACTION"};function pL(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":hL[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mL={[u1]:"ENVMAP_BLENDING_MULTIPLY",[s2]:"ENVMAP_BLENDING_MIX",[a2]:"ENVMAP_BLENDING_ADD"};function gL(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":mL[n.combine]||"ENVMAP_BLENDING_NONE"}function _L(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vL(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=uL(t),c=dL(t),u=pL(t),f=gL(t),d=_L(t),g=tL(t),p=nL(s),v=r.createProgram();let m,h,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(qo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(qo).join(`
`),h.length>0&&(h+=`
`)):(m=[Bv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),h=[Bv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==qi?QN("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,ZN("linearToOutputTexel",t.outputColorSpace),eL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qo).join(`
`)),a=Kp(a),a=Fv(a,t),a=Ov(a,t),o=Kp(o),o=Fv(o,t),o=Ov(o,t),a=kv(a),o=kv(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Z_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Z_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=_+m+a,S=_+h+o,E=Lv(r,r.VERTEX_SHADER,x),w=Lv(r,r.FRAGMENT_SHADER,S);r.attachShader(v,E),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(P){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(v)||"",U=r.getShaderInfoLog(E)||"",B=r.getShaderInfoLog(w)||"",z=L.trim(),D=U.trim(),k=B.trim();let F=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,E,w);else{const Q=Uv(r,E,"vertex"),te=Uv(r,w,"fragment");Je("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+Q+`
`+te)}else z!==""?ke("WebGLProgram: Program Info Log:",z):(D===""||k==="")&&(W=!1);W&&(P.diagnostics={runnable:F,programLog:z,vertexShader:{log:D,prefix:m},fragmentShader:{log:k,prefix:h}})}r.deleteShader(E),r.deleteShader(w),y=new pu(r,v),M=iL(r,v)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(v,qN)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$N++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=w,this}let xL=0;class yL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new SL(e),t.set(e,i)),i}}class SL{constructor(e){this.id=xL++,this.code=e,this.usedTimes=0}}function ML(n,e,t,i,r,s){const a=new wg,o=new yL,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,M,N,P,L){const U=P.fog,B=L.geometry,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,k=e.get(y.envMap||z,D),F=k&&k.mapping===Ef?k.image.height:null,W=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&ke("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,te=Q!==void 0?Q.length:0;let ne=0;B.morphAttributes.position!==void 0&&(ne=1),B.morphAttributes.normal!==void 0&&(ne=2),B.morphAttributes.color!==void 0&&(ne=3);let we,De,Oe,Y;if(W){const at=Bi[W];we=at.vertexShader,De=at.fragmentShader}else we=y.vertexShader,De=y.fragmentShader,o.update(y),Oe=o.getVertexShaderID(y),Y=o.getFragmentShaderID(y);const re=n.getRenderTarget(),le=n.state.buffers.depth.getReversed(),Fe=L.isInstancedMesh===!0,Ne=L.isBatchedMesh===!0,Le=!!y.map,Rt=!!y.matcap,$e=!!k,tt=!!y.aoMap,rt=!!y.lightMap,ze=!!y.bumpMap,xt=!!y.normalMap,I=!!y.displacementMap,kt=!!y.emissiveMap,st=!!y.metalnessMap,pt=!!y.roughnessMap,Ae=y.anisotropy>0,R=y.clearcoat>0,T=y.dispersion>0,V=y.iridescence>0,ee=y.sheen>0,ie=y.transmission>0,J=Ae&&!!y.anisotropyMap,ye=R&&!!y.clearcoatMap,fe=R&&!!y.clearcoatNormalMap,Pe=R&&!!y.clearcoatRoughnessMap,Ie=V&&!!y.iridescenceMap,ae=V&&!!y.iridescenceThicknessMap,ce=ee&&!!y.sheenColorMap,Se=ee&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,ge=!!y.specularColorMap,We=!!y.specularIntensityMap,O=ie&&!!y.transmissionMap,de=ie&&!!y.thicknessMap,ue=!!y.gradientMap,xe=!!y.alphaMap,oe=y.alphaTest>0,K=!!y.alphaHash,Me=!!y.extensions;let Be=qi;y.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Be=n.toneMapping);const mt={shaderID:W,shaderType:y.type,shaderName:y.name,vertexShader:we,fragmentShader:De,defines:y.defines,customVertexShaderID:Oe,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ne,batchingColor:Ne&&L._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&L.instanceColor!==null,instancingMorph:Fe&&L.morphTexture!==null,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:lo,alphaToCoverage:!!y.alphaToCoverage,map:Le,matcap:Rt,envMap:$e,envMapMode:$e&&k.mapping,envMapCubeUVHeight:F,aoMap:tt,lightMap:rt,bumpMap:ze,normalMap:xt,displacementMap:I,emissiveMap:kt,normalMapObjectSpace:xt&&y.normalMapType===c2,normalMapTangentSpace:xt&&y.normalMapType===A1,metalnessMap:st,roughnessMap:pt,anisotropy:Ae,anisotropyMap:J,clearcoat:R,clearcoatMap:ye,clearcoatNormalMap:fe,clearcoatRoughnessMap:Pe,dispersion:T,iridescence:V,iridescenceMap:Ie,iridescenceThicknessMap:ae,sheen:ee,sheenColorMap:ce,sheenRoughnessMap:Se,specularMap:Ee,specularColorMap:ge,specularIntensityMap:We,transmission:ie,transmissionMap:O,thicknessMap:de,gradientMap:ue,opaque:y.transparent===!1&&y.blending===Xa&&y.alphaToCoverage===!1,alphaMap:xe,alphaTest:oe,alphaHash:K,combine:y.combine,mapUv:Le&&p(y.map.channel),aoMapUv:tt&&p(y.aoMap.channel),lightMapUv:rt&&p(y.lightMap.channel),bumpMapUv:ze&&p(y.bumpMap.channel),normalMapUv:xt&&p(y.normalMap.channel),displacementMapUv:I&&p(y.displacementMap.channel),emissiveMapUv:kt&&p(y.emissiveMap.channel),metalnessMapUv:st&&p(y.metalnessMap.channel),roughnessMapUv:pt&&p(y.roughnessMap.channel),anisotropyMapUv:J&&p(y.anisotropyMap.channel),clearcoatMapUv:ye&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Se&&p(y.sheenRoughnessMap.channel),specularMapUv:Ee&&p(y.specularMap.channel),specularColorMapUv:ge&&p(y.specularColorMap.channel),specularIntensityMapUv:We&&p(y.specularIntensityMap.channel),transmissionMapUv:O&&p(y.transmissionMap.channel),thicknessMapUv:de&&p(y.thicknessMap.channel),alphaMapUv:xe&&p(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(xt||Ae),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Le||xe),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&xt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:le,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Be,decodeVideoTexture:Le&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===ot,decodeVideoTextureEmissive:kt&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fr,flipSided:y.side===In,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Me&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&y.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function m(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)M.push(N),M.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(h(M,y),_(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function h(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function _(y,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const M=g[y.type];let N;if(M){const P=Bi[M];N=j2.clone(P.uniforms)}else N=y.uniforms;return N}function S(y,M){let N=u.get(M);return N!==void 0?++N.usedTimes:(N=new vL(n,M,y,r),c.push(N),u.set(M,N)),N}function E(y){if(--y.usedTimes===0){const M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:x,acquireProgram:S,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:C}}function EL(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function TL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function zv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function o(d,g,p,v,m,h){let _=n[e];return _===void 0?(_={id:d.id,object:d,geometry:g,material:p,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:h},n[e]=_):(_.id=d.id,_.object=d,_.geometry=g,_.material=p,_.materialVariant=a(d),_.groupOrder=v,_.renderOrder=d.renderOrder,_.z=m,_.group=h),e++,_}function l(d,g,p,v,m,h){const _=o(d,g,p,v,m,h);p.transmission>0?i.push(_):p.transparent===!0?r.push(_):t.push(_)}function c(d,g,p,v,m,h){const _=o(d,g,p,v,m,h);p.transmission>0?i.unshift(_):p.transparent===!0?r.unshift(_):t.unshift(_)}function u(d,g){t.length>1&&t.sort(d||TL),i.length>1&&i.sort(g||zv),r.length>1&&r.sort(g||zv)}function f(){for(let d=e,g=n.length;d<g;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function wL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Vv,n.set(i,[a])):r>=s.length?(a=new Vv,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function AL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Ke};break;case"SpotLight":t={position:new G,direction:new G,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function CL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let bL=0;function RL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function PL(n){const e=new AL,t=CL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new Ct,a=new Ct;function o(c){let u=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let g=0,p=0,v=0,m=0,h=0,_=0,x=0,S=0,E=0,w=0,C=0;c.sort(RL);for(let M=0,N=c.length;M<N;M++){const P=c[M],L=P.color,U=P.intensity,B=P.distance;let z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===oo?z=P.shadow.map.texture:z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=L.r*U,f+=L.g*U,d+=L.b*U;else if(P.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(P.sh.coefficients[D],U);C++}else if(P.isDirectionalLight){const D=e.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,F=t.get(P);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,i.directionalShadow[g]=F,i.directionalShadowMap[g]=z,i.directionalShadowMatrix[g]=P.shadow.matrix,_++}i.directional[g]=D,g++}else if(P.isSpotLight){const D=e.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(L).multiplyScalar(U),D.distance=B,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,i.spot[v]=D;const k=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,k.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[v]=k.matrix,P.castShadow){const F=t.get(P);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,i.spotShadow[v]=F,i.spotShadowMap[v]=z,S++}v++}else if(P.isRectAreaLight){const D=e.get(P);D.color.copy(L).multiplyScalar(U),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=D,m++}else if(P.isPointLight){const D=e.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),D.distance=P.distance,D.decay=P.decay,P.castShadow){const k=P.shadow,F=t.get(P);F.shadowIntensity=k.intensity,F.shadowBias=k.bias,F.shadowNormalBias=k.normalBias,F.shadowRadius=k.radius,F.shadowMapSize=k.mapSize,F.shadowCameraNear=k.camera.near,F.shadowCameraFar=k.camera.far,i.pointShadow[p]=F,i.pointShadowMap[p]=z,i.pointShadowMatrix[p]=P.shadow.matrix,x++}i.point[p]=D,p++}else if(P.isHemisphereLight){const D=e.get(P);D.skyColor.copy(P.color).multiplyScalar(U),D.groundColor.copy(P.groundColor).multiplyScalar(U),i.hemi[h]=D,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const y=i.hash;(y.directionalLength!==g||y.pointLength!==p||y.spotLength!==v||y.rectAreaLength!==m||y.hemiLength!==h||y.numDirectionalShadows!==_||y.numPointShadows!==x||y.numSpotShadows!==S||y.numSpotMaps!==E||y.numLightProbes!==C)&&(i.directional.length=g,i.spot.length=v,i.rectArea.length=m,i.point.length=p,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,y.directionalLength=g,y.pointLength=p,y.spotLength=v,y.rectAreaLength=m,y.hemiLength=h,y.numDirectionalShadows=_,y.numPointShadows=x,y.numSpotShadows=S,y.numSpotMaps=E,y.numLightProbes=C,i.version=bL++)}function l(c,u){let f=0,d=0,g=0,p=0,v=0;const m=u.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){const x=c[h];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(x.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Hv(n){const e=new PL(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function DL(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Hv(n),e.set(r,[o])):s>=a.length?(o=new Hv(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const NL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IL=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],UL=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Gv=new Ct,zo=new G,qd=new G;function FL(n,e,t){let i=new Cg;const r=new qe,s=new qe,a=new Nt,o=new Y2,l=new K2,c={},u=t.maxTextureSize,f={[os]:In,[In]:os,[fr]:fr},d=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:NL,fragmentShader:LL}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const p=new Pi;p.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Kt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let h=this.type;this.render=function(w,C,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===zR&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=cu);const M=n.getRenderTarget(),N=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),L=n.state;L.setBlending(gr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=h!==this.type;U&&C.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(z=>z.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,z=w.length;B<z;B++){const D=w[B],k=D.shadow;if(k===void 0){ke("WebGLShadowMap:",D,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const F=k.getFrameExtents();r.multiply(F),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/F.x),r.x=s.x*F.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/F.y),r.y=s.y*F.y,k.mapSize.y=s.y));const W=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=W,k.map===null||U===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Xo){if(D.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new $i(r.x,r.y,{format:oo,type:Mr,minFilter:mn,magFilter:mn,generateMipmaps:!1}),k.map.texture.name=D.name+".shadowMap",k.map.depthTexture=new Nl(r.x,r.y,Hi),k.map.depthTexture.name=D.name+".shadowMapDepth",k.map.depthTexture.format=Er,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=tn,k.map.depthTexture.magFilter=tn}else D.isPointLight?(k.map=new j1(r.x),k.map.depthTexture=new G2(r.x,Ki)):(k.map=new $i(r.x,r.y),k.map.depthTexture=new Nl(r.x,r.y,Ki)),k.map.depthTexture.name=D.name+".shadowMap",k.map.depthTexture.format=Er,this.type===cu?(k.map.depthTexture.compareFunction=W?Eg:Mg,k.map.depthTexture.minFilter=mn,k.map.depthTexture.magFilter=mn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=tn,k.map.depthTexture.magFilter=tn);k.camera.updateProjectionMatrix()}const Q=k.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<Q;te++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,te),n.clear();else{te===0&&(n.setRenderTarget(k.map),n.clear());const ne=k.getViewport(te);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),L.viewport(a)}if(D.isPointLight){const ne=k.camera,we=k.matrix,De=D.distance||ne.far;De!==ne.far&&(ne.far=De,ne.updateProjectionMatrix()),zo.setFromMatrixPosition(D.matrixWorld),ne.position.copy(zo),qd.copy(ne.position),qd.add(IL[te]),ne.up.copy(UL[te]),ne.lookAt(qd),ne.updateMatrixWorld(),we.makeTranslation(-zo.x,-zo.y,-zo.z),Gv.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Gv,ne.coordinateSystem,ne.reversedDepth)}else k.updateMatrices(D);i=k.getFrustum(),S(C,y,k.camera,D,this.type)}k.isPointLightShadow!==!0&&this.type===Xo&&_(k,y),k.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,N,P)};function _(w,C){const y=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new $i(r.x,r.y,{format:oo,type:Mr})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,y,d,v,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,y,g,v,null)}function x(w,C,y,M){let N=null;const P=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)N=P;else if(N=y.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const L=N.uuid,U=C.uuid;let B=c[L];B===void 0&&(B={},c[L]=B);let z=B[U];z===void 0&&(z=N.clone(),B[U]=z,C.addEventListener("dispose",E)),N=z}if(N.visible=C.visible,N.wireframe=C.wireframe,M===Xo?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:f[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,y.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const L=n.properties.get(N);L.light=y}return N}function S(w,C,y,M,N){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===Xo)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const U=e.update(w),B=w.material;if(Array.isArray(B)){const z=U.groups;for(let D=0,k=z.length;D<k;D++){const F=z[D],W=B[F.materialIndex];if(W&&W.visible){const Q=x(w,W,M,N);w.onBeforeShadow(n,w,C,y,U,Q,F),n.renderBufferDirect(y,null,U,Q,w,F),w.onAfterShadow(n,w,C,y,U,Q,F)}}}else if(B.visible){const z=x(w,B,M,N);w.onBeforeShadow(n,w,C,y,U,z,null),n.renderBufferDirect(y,null,U,z,w,null),w.onAfterShadow(n,w,C,y,U,z,null)}}const L=w.children;for(let U=0,B=L.length;U<B;U++)S(L[U],C,y,M,N)}function E(w){w.target.removeEventListener("dispose",E);for(const y in c){const M=c[y],N=w.target.uuid;N in M&&(M[N].dispose(),delete M[N])}}}function OL(n,e){function t(){let O=!1;const de=new Nt;let ue=null;const xe=new Nt(0,0,0,0);return{setMask:function(oe){ue!==oe&&!O&&(n.colorMask(oe,oe,oe,oe),ue=oe)},setLocked:function(oe){O=oe},setClear:function(oe,K,Me,Be,mt){mt===!0&&(oe*=Be,K*=Be,Me*=Be),de.set(oe,K,Me,Be),xe.equals(de)===!1&&(n.clearColor(oe,K,Me,Be),xe.copy(de))},reset:function(){O=!1,ue=null,xe.set(-1,0,0,0)}}}function i(){let O=!1,de=!1,ue=null,xe=null,oe=null;return{setReversed:function(K){if(de!==K){const Me=e.get("EXT_clip_control");K?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),de=K;const Be=oe;oe=null,this.setClear(Be)}},getReversed:function(){return de},setTest:function(K){K?re(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(K){ue!==K&&!O&&(n.depthMask(K),ue=K)},setFunc:function(K){if(de&&(K=x2[K]),xe!==K){switch(K){case ap:n.depthFunc(n.NEVER);break;case op:n.depthFunc(n.ALWAYS);break;case lp:n.depthFunc(n.LESS);break;case so:n.depthFunc(n.LEQUAL);break;case cp:n.depthFunc(n.EQUAL);break;case up:n.depthFunc(n.GEQUAL);break;case fp:n.depthFunc(n.GREATER);break;case dp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=K}},setLocked:function(K){O=K},setClear:function(K){oe!==K&&(oe=K,de&&(K=1-K),n.clearDepth(K))},reset:function(){O=!1,ue=null,xe=null,oe=null,de=!1}}}function r(){let O=!1,de=null,ue=null,xe=null,oe=null,K=null,Me=null,Be=null,mt=null;return{setTest:function(at){O||(at?re(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(at){de!==at&&!O&&(n.stencilMask(at),de=at)},setFunc:function(at,er,tr){(ue!==at||xe!==er||oe!==tr)&&(n.stencilFunc(at,er,tr),ue=at,xe=er,oe=tr)},setOp:function(at,er,tr){(K!==at||Me!==er||Be!==tr)&&(n.stencilOp(at,er,tr),K=at,Me=er,Be=tr)},setLocked:function(at){O=at},setClear:function(at){mt!==at&&(n.clearStencil(at),mt=at)},reset:function(){O=!1,de=null,ue=null,xe=null,oe=null,K=null,Me=null,Be=null,mt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,g=[],p=null,v=!1,m=null,h=null,_=null,x=null,S=null,E=null,w=null,C=new Ke(0,0,0),y=0,M=!1,N=null,P=null,L=null,U=null,B=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,k=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(F)[1]),D=k>=1):F.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),D=k>=2);let W=null,Q={};const te=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),we=new Nt().fromArray(te),De=new Nt().fromArray(ne);function Oe(O,de,ue,xe){const oe=new Uint8Array(4),K=n.createTexture();n.bindTexture(O,K),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<ue;Me++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(de+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return K}const Y={};Y[n.TEXTURE_2D]=Oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=Oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=Oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=Oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(n.DEPTH_TEST),a.setFunc(so),ze(!1),xt(j_),re(n.CULL_FACE),tt(gr);function re(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function le(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Fe(O,de){return f[O]!==de?(n.bindFramebuffer(O,de),f[O]=de,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=de),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=de),!0):!1}function Ne(O,de){let ue=g,xe=!1;if(O){ue=d.get(de),ue===void 0&&(ue=[],d.set(de,ue));const oe=O.textures;if(ue.length!==oe.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let K=0,Me=oe.length;K<Me;K++)ue[K]=n.COLOR_ATTACHMENT0+K;ue.length=oe.length,xe=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,xe=!0);xe&&n.drawBuffers(ue)}function Le(O){return p!==O?(n.useProgram(O),p=O,!0):!1}const Rt={[Ps]:n.FUNC_ADD,[HR]:n.FUNC_SUBTRACT,[GR]:n.FUNC_REVERSE_SUBTRACT};Rt[WR]=n.MIN,Rt[jR]=n.MAX;const $e={[XR]:n.ZERO,[qR]:n.ONE,[$R]:n.SRC_COLOR,[rp]:n.SRC_ALPHA,[e2]:n.SRC_ALPHA_SATURATE,[JR]:n.DST_COLOR,[KR]:n.DST_ALPHA,[YR]:n.ONE_MINUS_SRC_COLOR,[sp]:n.ONE_MINUS_SRC_ALPHA,[QR]:n.ONE_MINUS_DST_COLOR,[ZR]:n.ONE_MINUS_DST_ALPHA,[t2]:n.CONSTANT_COLOR,[n2]:n.ONE_MINUS_CONSTANT_COLOR,[i2]:n.CONSTANT_ALPHA,[r2]:n.ONE_MINUS_CONSTANT_ALPHA};function tt(O,de,ue,xe,oe,K,Me,Be,mt,at){if(O===gr){v===!0&&(le(n.BLEND),v=!1);return}if(v===!1&&(re(n.BLEND),v=!0),O!==VR){if(O!==m||at!==M){if((h!==Ps||S!==Ps)&&(n.blendEquation(n.FUNC_ADD),h=Ps,S=Ps),at)switch(O){case Xa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case X_:n.blendFunc(n.ONE,n.ONE);break;case q_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Je("WebGLState: Invalid blending: ",O);break}else switch(O){case Xa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case X_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case q_:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $_:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",O);break}_=null,x=null,E=null,w=null,C.set(0,0,0),y=0,m=O,M=at}return}oe=oe||de,K=K||ue,Me=Me||xe,(de!==h||oe!==S)&&(n.blendEquationSeparate(Rt[de],Rt[oe]),h=de,S=oe),(ue!==_||xe!==x||K!==E||Me!==w)&&(n.blendFuncSeparate($e[ue],$e[xe],$e[K],$e[Me]),_=ue,x=xe,E=K,w=Me),(Be.equals(C)===!1||mt!==y)&&(n.blendColor(Be.r,Be.g,Be.b,mt),C.copy(Be),y=mt),m=O,M=!1}function rt(O,de){O.side===fr?le(n.CULL_FACE):re(n.CULL_FACE);let ue=O.side===In;de&&(ue=!ue),ze(ue),O.blending===Xa&&O.transparent===!1?tt(gr):tt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const xe=O.stencilWrite;o.setTest(xe),xe&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),kt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(O){N!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),N=O)}function xt(O){O!==kR?(re(n.CULL_FACE),O!==P&&(O===j_?n.cullFace(n.BACK):O===BR?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),P=O}function I(O){O!==L&&(D&&n.lineWidth(O),L=O)}function kt(O,de,ue){O?(re(n.POLYGON_OFFSET_FILL),(U!==de||B!==ue)&&(U=de,B=ue,a.getReversed()&&(de=-de),n.polygonOffset(de,ue))):le(n.POLYGON_OFFSET_FILL)}function st(O){O?re(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function pt(O){O===void 0&&(O=n.TEXTURE0+z-1),W!==O&&(n.activeTexture(O),W=O)}function Ae(O,de,ue){ue===void 0&&(W===null?ue=n.TEXTURE0+z-1:ue=W);let xe=Q[ue];xe===void 0&&(xe={type:void 0,texture:void 0},Q[ue]=xe),(xe.type!==O||xe.texture!==de)&&(W!==ue&&(n.activeTexture(ue),W=ue),n.bindTexture(O,de||Y[O]),xe.type=O,xe.texture=de)}function R(){const O=Q[W];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function T(){try{n.compressedTexImage2D(...arguments)}catch(O){Je("WebGLState:",O)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(O){Je("WebGLState:",O)}}function ee(){try{n.texSubImage2D(...arguments)}catch(O){Je("WebGLState:",O)}}function ie(){try{n.texSubImage3D(...arguments)}catch(O){Je("WebGLState:",O)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(O){Je("WebGLState:",O)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(O){Je("WebGLState:",O)}}function fe(){try{n.texStorage2D(...arguments)}catch(O){Je("WebGLState:",O)}}function Pe(){try{n.texStorage3D(...arguments)}catch(O){Je("WebGLState:",O)}}function Ie(){try{n.texImage2D(...arguments)}catch(O){Je("WebGLState:",O)}}function ae(){try{n.texImage3D(...arguments)}catch(O){Je("WebGLState:",O)}}function ce(O){we.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),we.copy(O))}function Se(O){De.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),De.copy(O))}function Ee(O,de){let ue=c.get(de);ue===void 0&&(ue=new WeakMap,c.set(de,ue));let xe=ue.get(O);xe===void 0&&(xe=n.getUniformBlockIndex(de,O.name),ue.set(O,xe))}function ge(O,de){const xe=c.get(de).get(O);l.get(de)!==xe&&(n.uniformBlockBinding(de,xe,O.__bindingPointIndex),l.set(de,xe))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},W=null,Q={},f={},d=new WeakMap,g=[],p=null,v=!1,m=null,h=null,_=null,x=null,S=null,E=null,w=null,C=new Ke(0,0,0),y=0,M=!1,N=null,P=null,L=null,U=null,B=null,we.set(0,0,n.canvas.width,n.canvas.height),De.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:le,bindFramebuffer:Fe,drawBuffers:Ne,useProgram:Le,setBlending:tt,setMaterial:rt,setFlipSided:ze,setCullFace:xt,setLineWidth:I,setPolygonOffset:kt,setScissorTest:st,activeTexture:pt,bindTexture:Ae,unbindTexture:R,compressedTexImage2D:T,compressedTexImage3D:V,texImage2D:Ie,texImage3D:ae,updateUBOMapping:Ee,uniformBlockBinding:ge,texStorage2D:fe,texStorage3D:Pe,texSubImage2D:ee,texSubImage3D:ie,compressedTexSubImage2D:J,compressedTexSubImage3D:ye,scissor:ce,viewport:Se,reset:We}}function kL(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap;let f;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,T){return g?new OffscreenCanvas(R,T):Wu("canvas")}function v(R,T,V){let ee=1;const ie=Ae(R);if((ie.width>V||ie.height>V)&&(ee=V/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(ee*ie.width),ye=Math.floor(ee*ie.height);f===void 0&&(f=p(J,ye));const fe=T?p(J,ye):f;return fe.width=J,fe.height=ye,fe.getContext("2d").drawImage(R,0,0,J,ye),ke("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+ye+")."),fe}else return"data"in R&&ke("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function m(R){return R.generateMipmaps}function h(R){n.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,T,V,ee,ie=!1){if(R!==null){if(n[R]!==void 0)return n[R];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=T;if(T===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8)),T===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),T===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8)),T===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),T===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),T===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),T===n.RGB&&(V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),T===n.RGBA){const ye=ie?Gu:Qe.getTransfer(ee);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=ye===ot?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(R,T){let V;return R?T===null||T===Ki||T===Pl?V=n.DEPTH24_STENCIL8:T===Hi?V=n.DEPTH32F_STENCIL8:T===Rl&&(V=n.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ki||T===Pl?V=n.DEPTH_COMPONENT24:T===Hi?V=n.DEPTH_COMPONENT32F:T===Rl&&(V=n.DEPTH_COMPONENT16),V}function E(R,T){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==mn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function w(R){const T=R.target;T.removeEventListener("dispose",w),y(T),T.isVideoTexture&&u.delete(T)}function C(R){const T=R.target;T.removeEventListener("dispose",C),N(T)}function y(R){const T=i.get(R);if(T.__webglInit===void 0)return;const V=R.source,ee=d.get(V);if(ee){const ie=ee[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(R),Object.keys(ee).length===0&&d.delete(V)}i.remove(R)}function M(R){const T=i.get(R);n.deleteTexture(T.__webglTexture);const V=R.source,ee=d.get(V);delete ee[T.__cacheKey],a.memory.textures--}function N(R){const T=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let ie=0;ie<T.__webglFramebuffer[ee].length;ie++)n.deleteFramebuffer(T.__webglFramebuffer[ee][ie]);else n.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)n.deleteFramebuffer(T.__webglFramebuffer[ee]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=R.textures;for(let ee=0,ie=V.length;ee<ie;ee++){const J=i.get(V[ee]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(V[ee])}i.remove(R)}let P=0;function L(){P=0}function U(){const R=P;return R>=r.maxTextures&&ke("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function B(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function z(R,T){const V=i.get(R);if(R.isVideoTexture&&st(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){const ee=R.image;if(ee===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(V,R,T);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+T)}function D(R,T){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Y(V,R,T);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+T)}function k(R,T){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Y(V,R,T);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+T)}function F(R,T){const V=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){re(V,R,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+T)}const W={[hp]:n.REPEAT,[pr]:n.CLAMP_TO_EDGE,[pp]:n.MIRRORED_REPEAT},Q={[tn]:n.NEAREST,[o2]:n.NEAREST_MIPMAP_NEAREST,[Ec]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[gd]:n.LINEAR_MIPMAP_NEAREST,[Fs]:n.LINEAR_MIPMAP_LINEAR},te={[u2]:n.NEVER,[m2]:n.ALWAYS,[f2]:n.LESS,[Mg]:n.LEQUAL,[d2]:n.EQUAL,[Eg]:n.GEQUAL,[h2]:n.GREATER,[p2]:n.NOTEQUAL};function ne(R,T){if(T.type===Hi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===mn||T.magFilter===gd||T.magFilter===Ec||T.magFilter===Fs||T.minFilter===mn||T.minFilter===gd||T.minFilter===Ec||T.minFilter===Fs)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,W[T.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,W[T.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,W[T.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Q[T.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Q[T.minFilter]),T.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,te[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===tn||T.minFilter!==Ec&&T.minFilter!==Fs||T.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function we(R,T){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",w));const ee=T.source;let ie=d.get(ee);ie===void 0&&(ie={},d.set(ee,ie));const J=B(T);if(J!==R.__cacheKey){ie[J]===void 0&&(ie[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ie[J].usedTimes++;const ye=ie[R.__cacheKey];ye!==void 0&&(ie[R.__cacheKey].usedTimes--,ye.usedTimes===0&&M(T)),R.__cacheKey=J,R.__webglTexture=ie[J].texture}return V}function De(R,T,V){return Math.floor(Math.floor(R/V)/T)}function Oe(R,T,V,ee){const J=R.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,V,ee,T.data);else{J.sort((ae,ce)=>ae.start-ce.start);let ye=0;for(let ae=1;ae<J.length;ae++){const ce=J[ye],Se=J[ae],Ee=ce.start+ce.count,ge=De(Se.start,T.width,4),We=De(ce.start,T.width,4);Se.start<=Ee+1&&ge===We&&De(Se.start+Se.count-1,T.width,4)===ge?ce.count=Math.max(ce.count,Se.start+Se.count-ce.start):(++ye,J[ye]=Se)}J.length=ye+1;const fe=n.getParameter(n.UNPACK_ROW_LENGTH),Pe=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let ae=0,ce=J.length;ae<ce;ae++){const Se=J[ae],Ee=Math.floor(Se.start/4),ge=Math.ceil(Se.count/4),We=Ee%T.width,O=Math.floor(Ee/T.width),de=ge,ue=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,We,O,de,ue,V,ee,T.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Pe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function Y(R,T,V){let ee=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=n.TEXTURE_3D);const ie=we(R,T),J=T.source;t.bindTexture(ee,R.__webglTexture,n.TEXTURE0+V);const ye=i.get(J);if(J.version!==ye.__version||ie===!0){t.activeTexture(n.TEXTURE0+V);const fe=Qe.getPrimaries(Qe.workingColorSpace),Pe=T.colorSpace===zr?null:Qe.getPrimaries(T.colorSpace),Ie=T.colorSpace===zr||fe===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ae=v(T.image,!1,r.maxTextureSize);ae=pt(T,ae);const ce=s.convert(T.format,T.colorSpace),Se=s.convert(T.type);let Ee=x(T.internalFormat,ce,Se,T.colorSpace,T.isVideoTexture);ne(ee,T);let ge;const We=T.mipmaps,O=T.isVideoTexture!==!0,de=ye.__version===void 0||ie===!0,ue=J.dataReady,xe=E(T,ae);if(T.isDepthTexture)Ee=S(T.format===Os,T.type),de&&(O?t.texStorage2D(n.TEXTURE_2D,1,Ee,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ee,ae.width,ae.height,0,ce,Se,null));else if(T.isDataTexture)if(We.length>0){O&&de&&t.texStorage2D(n.TEXTURE_2D,xe,Ee,We[0].width,We[0].height);for(let oe=0,K=We.length;oe<K;oe++)ge=We[oe],O?ue&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ge.width,ge.height,ce,Se,ge.data):t.texImage2D(n.TEXTURE_2D,oe,Ee,ge.width,ge.height,0,ce,Se,ge.data);T.generateMipmaps=!1}else O?(de&&t.texStorage2D(n.TEXTURE_2D,xe,Ee,ae.width,ae.height),ue&&Oe(T,ae,ce,Se)):t.texImage2D(n.TEXTURE_2D,0,Ee,ae.width,ae.height,0,ce,Se,ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){O&&de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Ee,We[0].width,We[0].height,ae.depth);for(let oe=0,K=We.length;oe<K;oe++)if(ge=We[oe],T.format!==wi)if(ce!==null)if(O){if(ue)if(T.layerUpdates.size>0){const Me=yv(ge.width,ge.height,T.format,T.type);for(const Be of T.layerUpdates){const mt=ge.data.subarray(Be*Me/ge.data.BYTES_PER_ELEMENT,(Be+1)*Me/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,Be,ge.width,ge.height,1,ce,mt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ge.width,ge.height,ae.depth,ce,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Ee,ge.width,ge.height,ae.depth,0,ge.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ue&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ge.width,ge.height,ae.depth,ce,Se,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Ee,ge.width,ge.height,ae.depth,0,ce,Se,ge.data)}else{O&&de&&t.texStorage2D(n.TEXTURE_2D,xe,Ee,We[0].width,We[0].height);for(let oe=0,K=We.length;oe<K;oe++)ge=We[oe],T.format!==wi?ce!==null?O?ue&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,ge.width,ge.height,ce,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Ee,ge.width,ge.height,0,ge.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ue&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ge.width,ge.height,ce,Se,ge.data):t.texImage2D(n.TEXTURE_2D,oe,Ee,ge.width,ge.height,0,ce,Se,ge.data)}else if(T.isDataArrayTexture)if(O){if(de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Ee,ae.width,ae.height,ae.depth),ue)if(T.layerUpdates.size>0){const oe=yv(ae.width,ae.height,T.format,T.type);for(const K of T.layerUpdates){const Me=ae.data.subarray(K*oe/ae.data.BYTES_PER_ELEMENT,(K+1)*oe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ae.width,ae.height,1,ce,Se,Me)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ce,Se,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,ae.width,ae.height,ae.depth,0,ce,Se,ae.data);else if(T.isData3DTexture)O?(de&&t.texStorage3D(n.TEXTURE_3D,xe,Ee,ae.width,ae.height,ae.depth),ue&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ce,Se,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,ae.width,ae.height,ae.depth,0,ce,Se,ae.data);else if(T.isFramebufferTexture){if(de)if(O)t.texStorage2D(n.TEXTURE_2D,xe,Ee,ae.width,ae.height);else{let oe=ae.width,K=ae.height;for(let Me=0;Me<xe;Me++)t.texImage2D(n.TEXTURE_2D,Me,Ee,oe,K,0,ce,Se,null),oe>>=1,K>>=1}}else if(We.length>0){if(O&&de){const oe=Ae(We[0]);t.texStorage2D(n.TEXTURE_2D,xe,Ee,oe.width,oe.height)}for(let oe=0,K=We.length;oe<K;oe++)ge=We[oe],O?ue&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ce,Se,ge):t.texImage2D(n.TEXTURE_2D,oe,Ee,ce,Se,ge);T.generateMipmaps=!1}else if(O){if(de){const oe=Ae(ae);t.texStorage2D(n.TEXTURE_2D,xe,Ee,oe.width,oe.height)}ue&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Se,ae)}else t.texImage2D(n.TEXTURE_2D,0,Ee,ce,Se,ae);m(T)&&h(ee),ye.__version=J.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function re(R,T,V){if(T.image.length!==6)return;const ee=we(R,T),ie=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);const J=i.get(ie);if(ie.version!==J.__version||ee===!0){t.activeTexture(n.TEXTURE0+V);const ye=Qe.getPrimaries(Qe.workingColorSpace),fe=T.colorSpace===zr?null:Qe.getPrimaries(T.colorSpace),Pe=T.colorSpace===zr||ye===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ie=T.isCompressedTexture||T.image[0].isCompressedTexture,ae=T.image[0]&&T.image[0].isDataTexture,ce=[];for(let K=0;K<6;K++)!Ie&&!ae?ce[K]=v(T.image[K],!0,r.maxCubemapSize):ce[K]=ae?T.image[K].image:T.image[K],ce[K]=pt(T,ce[K]);const Se=ce[0],Ee=s.convert(T.format,T.colorSpace),ge=s.convert(T.type),We=x(T.internalFormat,Ee,ge,T.colorSpace),O=T.isVideoTexture!==!0,de=J.__version===void 0||ee===!0,ue=ie.dataReady;let xe=E(T,Se);ne(n.TEXTURE_CUBE_MAP,T);let oe;if(Ie){O&&de&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,We,Se.width,Se.height);for(let K=0;K<6;K++){oe=ce[K].mipmaps;for(let Me=0;Me<oe.length;Me++){const Be=oe[Me];T.format!==wi?Ee!==null?O?ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,0,0,Be.width,Be.height,Ee,Be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,We,Be.width,Be.height,0,Be.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,0,0,Be.width,Be.height,Ee,ge,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,We,Be.width,Be.height,0,Ee,ge,Be.data)}}}else{if(oe=T.mipmaps,O&&de){oe.length>0&&xe++;const K=Ae(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,We,K.width,K.height)}for(let K=0;K<6;K++)if(ae){O?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ce[K].width,ce[K].height,Ee,ge,ce[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,ce[K].width,ce[K].height,0,Ee,ge,ce[K].data);for(let Me=0;Me<oe.length;Me++){const mt=oe[Me].image[K].image;O?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,0,0,mt.width,mt.height,Ee,ge,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,We,mt.width,mt.height,0,Ee,ge,mt.data)}}else{O?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ee,ge,ce[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,Ee,ge,ce[K]);for(let Me=0;Me<oe.length;Me++){const Be=oe[Me];O?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,0,0,Ee,ge,Be.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,We,Ee,ge,Be.image[K])}}}m(T)&&h(n.TEXTURE_CUBE_MAP),J.__version=ie.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function le(R,T,V,ee,ie,J){const ye=s.convert(V.format,V.colorSpace),fe=s.convert(V.type),Pe=x(V.internalFormat,ye,fe,V.colorSpace),Ie=i.get(T),ae=i.get(V);if(ae.__renderTarget=T,!Ie.__hasExternalTextures){const ce=Math.max(1,T.width>>J),Se=Math.max(1,T.height>>J);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,Pe,ce,Se,T.depth,0,ye,fe,null):t.texImage2D(ie,J,Pe,ce,Se,0,ye,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),kt(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,ie,ae.__webglTexture,0,I(T)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,ie,ae.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(R,T,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),T.depthBuffer){const ee=T.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,J=S(T.stencilBuffer,ie),ye=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;kt(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(T),J,T.width,T.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(T),J,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,J,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,R)}else{const ee=T.textures;for(let ie=0;ie<ee.length;ie++){const J=ee[ie],ye=s.convert(J.format,J.colorSpace),fe=s.convert(J.type),Pe=x(J.internalFormat,ye,fe,J.colorSpace);kt(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(T),Pe,T.width,T.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(T),Pe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(R,T,V){const ee=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(T.depthTexture);if(ie.__renderTarget=T,(!ie.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ee){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,T.depthTexture.addEventListener("dispose",w)),ie.__webglTexture===void 0){ie.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),ne(n.TEXTURE_CUBE_MAP,T.depthTexture);const Ie=s.convert(T.depthTexture.format),ae=s.convert(T.depthTexture.type);let ce;T.depthTexture.format===Er?ce=n.DEPTH_COMPONENT24:T.depthTexture.format===Os&&(ce=n.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ce,T.width,T.height,0,Ie,ae,null)}}else z(T.depthTexture,0);const J=ie.__webglTexture,ye=I(T),fe=ee?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,Pe=T.depthTexture.format===Os?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Er)kt(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,fe,J,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,fe,J,0);else if(T.depthTexture.format===Os)kt(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,fe,J,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,fe,J,0);else throw new Error("Unknown depthTexture format")}function Le(R){const T=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const ee=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ee){const ie=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),T.__depthDisposeCallback=ie}T.__boundDepthTexture=ee}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(V)for(let ee=0;ee<6;ee++)Ne(T.__webglFramebuffer[ee],R,ee);else{const ee=R.texture.mipmaps;ee&&ee.length>0?Ne(T.__webglFramebuffer[0],R,0):Ne(T.__webglFramebuffer,R,0)}else if(V){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]===void 0)T.__webglDepthbuffer[ee]=n.createRenderbuffer(),Fe(T.__webglDepthbuffer[ee],R,!1);else{const ie=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,J)}}else{const ee=R.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Fe(T.__webglDepthbuffer,R,!1);else{const ie=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(R,T,V){const ee=i.get(R);T!==void 0&&le(ee.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Le(R)}function $e(R){const T=R.texture,V=i.get(R),ee=i.get(T);R.addEventListener("dispose",C);const ie=R.textures,J=R.isWebGLCubeRenderTarget===!0,ye=ie.length>1;if(ye||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=T.version,a.memory.textures++),J){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)V.__webglFramebuffer[fe][Pe]=n.createFramebuffer()}else V.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<T.mipmaps.length;fe++)V.__webglFramebuffer[fe]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(ye)for(let fe=0,Pe=ie.length;fe<Pe;fe++){const Ie=i.get(ie[fe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&kt(R)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const Pe=ie[fe];V.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[fe]);const Ie=s.convert(Pe.format,Pe.colorSpace),ae=s.convert(Pe.type),ce=x(Pe.internalFormat,Ie,ae,Pe.colorSpace,R.isXRRenderTarget===!0),Se=I(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ce,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,V.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),ne(n.TEXTURE_CUBE_MAP,T);for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)le(V.__webglFramebuffer[fe][Pe],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe);else le(V.__webglFramebuffer[fe],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(T)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let fe=0,Pe=ie.length;fe<Pe;fe++){const Ie=ie[fe],ae=i.get(Ie);let ce=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,ae.__webglTexture),ne(ce,Ie),le(V.__webglFramebuffer,R,Ie,n.COLOR_ATTACHMENT0+fe,ce,0),m(Ie)&&h(ce)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,ee.__webglTexture),ne(fe,T),T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)le(V.__webglFramebuffer[Pe],R,T,n.COLOR_ATTACHMENT0,fe,Pe);else le(V.__webglFramebuffer,R,T,n.COLOR_ATTACHMENT0,fe,0);m(T)&&h(fe),t.unbindTexture()}R.depthBuffer&&Le(R)}function tt(R){const T=R.textures;for(let V=0,ee=T.length;V<ee;V++){const ie=T[V];if(m(ie)){const J=_(R),ye=i.get(ie).__webglTexture;t.bindTexture(J,ye),h(J),t.unbindTexture()}}}const rt=[],ze=[];function xt(R){if(R.samples>0){if(kt(R)===!1){const T=R.textures,V=R.width,ee=R.height;let ie=n.COLOR_BUFFER_BIT;const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(R),fe=T.length>1;if(fe)for(let Ie=0;Ie<T.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Pe=R.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ie=0;Ie<T.length;Ie++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ie]);const ae=i.get(T[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,V,ee,0,0,V,ee,ie,n.NEAREST),l===!0&&(rt.length=0,ze.length=0,rt.push(n.COLOR_ATTACHMENT0+Ie),R.depthBuffer&&R.resolveDepthBuffer===!1&&(rt.push(J),ze.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Ie=0;Ie<T.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ie]);const ae=i.get(T[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const T=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function I(R){return Math.min(r.maxSamples,R.samples)}function kt(R){const T=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function st(R){const T=a.render.frame;u.get(R)!==T&&(u.set(R,T),R.update())}function pt(R,T){const V=R.colorSpace,ee=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==lo&&V!==zr&&(Qe.getTransfer(V)===ot?(ee!==wi||ie!==Xn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",V)),T}function Ae(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=z,this.setTexture2DArray=D,this.setTexture3D=k,this.setTextureCube=F,this.rebindTextures=Rt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=le,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function BL(n,e){function t(i,r=zr){let s;const a=Qe.getTransfer(r);if(i===Xn)return n.UNSIGNED_BYTE;if(i===_g)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===S1)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===M1)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===x1)return n.BYTE;if(i===y1)return n.SHORT;if(i===Rl)return n.UNSIGNED_SHORT;if(i===gg)return n.INT;if(i===Ki)return n.UNSIGNED_INT;if(i===Hi)return n.FLOAT;if(i===Mr)return n.HALF_FLOAT;if(i===E1)return n.ALPHA;if(i===T1)return n.RGB;if(i===wi)return n.RGBA;if(i===Er)return n.DEPTH_COMPONENT;if(i===Os)return n.DEPTH_STENCIL;if(i===w1)return n.RED;if(i===xg)return n.RED_INTEGER;if(i===oo)return n.RG;if(i===yg)return n.RG_INTEGER;if(i===Sg)return n.RGBA_INTEGER;if(i===uu||i===fu||i===du||i===hu)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===uu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===du)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===uu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===du)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mp||i===gp||i===_p||i===vp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_p)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xp||i===yp||i===Sp||i===Mp||i===Ep||i===Tp||i===wp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xp||i===yp)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Mp)return s.COMPRESSED_R11_EAC;if(i===Ep)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Tp)return s.COMPRESSED_RG11_EAC;if(i===wp)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ap||i===Cp||i===bp||i===Rp||i===Pp||i===Dp||i===Np||i===Lp||i===Ip||i===Up||i===Fp||i===Op||i===kp||i===Bp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ap)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Np)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ip)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Up)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Op)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zp||i===Vp||i===Hp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zp)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gp||i===Wp||i===jp||i===Xp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Gp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const zL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new F1(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ji({vertexShader:zL,fragmentShader:VL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new tc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GL extends Mo{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,g=null,p=null;const v=typeof XRWebGLBinding<"u",m=new HL,h={},_=t.getContextAttributes();let x=null,S=null;const E=[],w=[],C=new qe;let y=null;const M=new jn;M.viewport=new Nt;const N=new jn;N.viewport=new Nt;const P=[M,N],L=new eP;let U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let re=E[Y];return re===void 0&&(re=new Td,E[Y]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Y){let re=E[Y];return re===void 0&&(re=new Td,E[Y]=re),re.getGripSpace()},this.getHand=function(Y){let re=E[Y];return re===void 0&&(re=new Td,E[Y]=re),re.getHandSpace()};function z(Y){const re=w.indexOf(Y.inputSource);if(re===-1)return;const le=E[re];le!==void 0&&(le.update(Y.inputSource,Y.frame,c||a),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function D(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",k);for(let Y=0;Y<E.length;Y++){const re=w[Y];re!==null&&(w[Y]=null,E[Y].disconnect(re))}U=null,B=null,m.reset();for(const Y in h)delete h[Y];e.setRenderTarget(x),g=null,d=null,f=null,r=null,S=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",D),r.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Fe=null,Ne=null;_.depth&&(Ne=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=_.stencil?Os:Er,Fe=_.stencil?Pl:Ki);const Le={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new $i(d.textureWidth,d.textureHeight,{format:wi,type:Xn,depthTexture:new Nl(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),S=new $i(g.framebufferWidth,g.framebufferHeight,{format:wi,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(Y){for(let re=0;re<Y.removed.length;re++){const le=Y.removed[re],Fe=w.indexOf(le);Fe>=0&&(w[Fe]=null,E[Fe].disconnect(le))}for(let re=0;re<Y.added.length;re++){const le=Y.added[re];let Fe=w.indexOf(le);if(Fe===-1){for(let Le=0;Le<E.length;Le++)if(Le>=w.length){w.push(le),Fe=Le;break}else if(w[Le]===null){w[Le]=le,Fe=Le;break}if(Fe===-1)break}const Ne=E[Fe];Ne&&Ne.connect(le)}}const F=new G,W=new G;function Q(Y,re,le){F.setFromMatrixPosition(re.matrixWorld),W.setFromMatrixPosition(le.matrixWorld);const Fe=F.distanceTo(W),Ne=re.projectionMatrix.elements,Le=le.projectionMatrix.elements,Rt=Ne[14]/(Ne[10]-1),$e=Ne[14]/(Ne[10]+1),tt=(Ne[9]+1)/Ne[5],rt=(Ne[9]-1)/Ne[5],ze=(Ne[8]-1)/Ne[0],xt=(Le[8]+1)/Le[0],I=Rt*ze,kt=Rt*xt,st=Fe/(-ze+xt),pt=st*-ze;if(re.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(pt),Y.translateZ(st),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ne[10]===-1)Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ae=Rt+st,R=$e+st,T=I-pt,V=kt+(Fe-pt),ee=tt*$e/R*Ae,ie=rt*$e/R*Ae;Y.projectionMatrix.makePerspective(T,V,ee,ie,Ae,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function te(Y,re){re===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(re.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let re=Y.near,le=Y.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(le=m.depthFar)),L.near=N.near=M.near=re,L.far=N.far=M.far=le,(U!==L.near||B!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,B=L.far),L.layers.mask=Y.layers.mask|6,M.layers.mask=L.layers.mask&-5,N.layers.mask=L.layers.mask&-3;const Fe=Y.parent,Ne=L.cameras;te(L,Fe);for(let Le=0;Le<Ne.length;Le++)te(Ne[Le],Fe);Ne.length===2?Q(L,M,N):L.projectionMatrix.copy(M.projectionMatrix),ne(Y,L,Fe)};function ne(Y,re,le){le===null?Y.matrix.copy(re.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(re.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qp*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Y){return h[Y]};let we=null;function De(Y,re){if(u=re.getViewerPose(c||a),p=re,u!==null){const le=u.views;g!==null&&(e.setRenderTargetFramebuffer(S,g.framebuffer),e.setRenderTarget(S));let Fe=!1;le.length!==L.cameras.length&&(L.cameras.length=0,Fe=!0);for(let $e=0;$e<le.length;$e++){const tt=le[$e];let rt=null;if(g!==null)rt=g.getViewport(tt);else{const xt=f.getViewSubImage(d,tt);rt=xt.viewport,$e===0&&(e.setRenderTargetTextures(S,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(S))}let ze=P[$e];ze===void 0&&(ze=new jn,ze.layers.enable($e),ze.viewport=new Nt,P[$e]=ze),ze.matrix.fromArray(tt.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(tt.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(rt.x,rt.y,rt.width,rt.height),$e===0&&(L.matrix.copy(ze.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Fe===!0&&L.cameras.push(ze)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const $e=f.getDepthInformation(le[0]);$e&&$e.isValid&&$e.texture&&m.init($e,r.renderState)}if(Ne&&Ne.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let $e=0;$e<le.length;$e++){const tt=le[$e].camera;if(tt){let rt=h[tt];rt||(rt=new F1,h[tt]=rt);const ze=f.getCameraImage(tt);rt.sourceTexture=ze}}}}for(let le=0;le<E.length;le++){const Fe=w[le],Ne=E[le];Fe!==null&&Ne!==void 0&&Ne.update(Fe,re,c||a)}we&&we(Y,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),p=null}const Oe=new W1;Oe.setAnimationLoop(De),this.setAnimationLoop=function(Y){we=Y},this.dispose=function(){}}}const Es=new Zi,WL=new Ct;function jL(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,k1(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,x,S){h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&g(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),p(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,_,x):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===In&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===In&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h),x=_.envMap,S=_.envMapRotation;x&&(m.envMap.value=x,Es.copy(S),Es.x*=-1,Es.y*=-1,Es.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),m.envMapRotation.value.setFromMatrix4(WL.makeRotationFromEuler(Es)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function g(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===In&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function XL(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const S=x.program;i.uniformBlockBinding(_,S)}function c(_,x){let S=r[_.id];S===void 0&&(p(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",m));const E=x.program;i.updateUBOMapping(_,E);const w=e.render.frame;s[_.id]!==w&&(d(_),s[_.id]=w)}function u(_){const x=f();_.__bindingPointIndex=x;const S=n.createBuffer(),E=_.__size,w=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=r[_.id],S=_.uniforms,E=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,C=S.length;w<C;w++){const y=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,N=y.length;M<N;M++){const P=y[M];if(g(P,w,M,E)===!0){const L=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let B=0;for(let z=0;z<U.length;z++){const D=U[z],k=v(D);typeof D=="number"||typeof D=="boolean"?(P.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,L+B,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=0,P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=0,P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=0):(D.toArray(P.__data,B),B+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(_,x,S,E){const w=_.value,C=x+"_"+S;if(E[C]===void 0)return typeof w=="number"||typeof w=="boolean"?E[C]=w:E[C]=w.clone(),!0;{const y=E[C];if(typeof w=="number"||typeof w=="boolean"){if(y!==w)return E[C]=w,!0}else if(y.equals(w)===!1)return y.copy(w),!0}return!1}function p(_){const x=_.uniforms;let S=0;const E=16;for(let C=0,y=x.length;C<y;C++){const M=Array.isArray(x[C])?x[C]:[x[C]];for(let N=0,P=M.length;N<P;N++){const L=M[N],U=Array.isArray(L.value)?L.value:[L.value];for(let B=0,z=U.length;B<z;B++){const D=U[B],k=v(D),F=S%E,W=F%k.boundary,Q=F+W;S+=W,Q!==0&&E-Q<k.storage&&(S+=E-Q),L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=k.storage}}}const w=S%E;return w>0&&(S+=E-w),_.__size=S,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ke("WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const _ in r)n.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}const qL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function $L(){return Ii===null&&(Ii=new B2(qL,16,16,oo,Mr),Ii.name="DFG_LUT",Ii.minFilter=mn,Ii.magFilter=mn,Ii.wrapS=pr,Ii.wrapT=pr,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class K1{constructor(e={}){const{canvas:t=_2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:g=Xn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const v=g,m=new Set([Sg,yg,xg]),h=new Set([Xn,Ki,Rl,Pl,_g,vg]),_=new Uint32Array(4),x=new Int32Array(4);let S=null,E=null;const w=[],C=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let N=!1;this._outputColorSpace=oi;let P=0,L=0,U=null,B=-1,z=null;const D=new Nt,k=new Nt;let F=null;const W=new Ke(0);let Q=0,te=t.width,ne=t.height,we=1,De=null,Oe=null;const Y=new Nt(0,0,te,ne),re=new Nt(0,0,te,ne);let le=!1;const Fe=new Cg;let Ne=!1,Le=!1;const Rt=new Ct,$e=new G,tt=new Nt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function xt(){return U===null?we:1}let I=i;function kt(b,H){return t.getContext(b,H)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mg}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",mt,!1),I===null){const H="webgl2";if(I=kt(H,b),I===null)throw kt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Je("WebGLRenderer: "+b.message),b}let st,pt,Ae,R,T,V,ee,ie,J,ye,fe,Pe,Ie,ae,ce,Se,Ee,ge,We,O,de,ue,xe;function oe(){st=new YD(I),st.init(),de=new BL(I,st),pt=new VD(I,st,e,de),Ae=new OL(I,st),pt.reversedDepthBuffer&&d&&Ae.buffers.depth.setReversed(!0),R=new JD(I),T=new EL,V=new kL(I,st,Ae,T,pt,de,R),ee=new $D(M),ie=new iP(I),ue=new BD(I,ie),J=new KD(I,ie,R,ue),ye=new eN(I,J,ie,ue,R),ge=new QD(I,pt,V),ce=new HD(T),fe=new ML(M,ee,st,pt,ue,ce),Pe=new jL(M,T),Ie=new wL,ae=new DL(st),Ee=new kD(M,ee,Ae,ye,p,l),Se=new FL(M,ye,pt),xe=new XL(I,R,pt,Ae),We=new zD(I,st,R),O=new ZD(I,st,R),R.programs=fe.programs,M.capabilities=pt,M.extensions=st,M.properties=T,M.renderLists=Ie,M.shadowMap=Se,M.state=Ae,M.info=R}oe(),v!==Xn&&(y=new nN(v,t.width,t.height,r,s));const K=new GL(M,I);this.xr=K,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=st.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=st.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(b){b!==void 0&&(we=b,this.setSize(te,ne,!1))},this.getSize=function(b){return b.set(te,ne)},this.setSize=function(b,H,$=!0){if(K.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}te=b,ne=H,t.width=Math.floor(b*we),t.height=Math.floor(H*we),$===!0&&(t.style.width=b+"px",t.style.height=H+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(te*we,ne*we).floor()},this.setDrawingBufferSize=function(b,H,$){te=b,ne=H,we=$,t.width=Math.floor(b*$),t.height=Math.floor(H*$),this.setViewport(0,0,b,H)},this.setEffects=function(b){if(v===Xn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let H=0;H<b.length;H++)if(b[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(Y)},this.setViewport=function(b,H,$,X){b.isVector4?Y.set(b.x,b.y,b.z,b.w):Y.set(b,H,$,X),Ae.viewport(D.copy(Y).multiplyScalar(we).round())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,H,$,X){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,H,$,X),Ae.scissor(k.copy(re).multiplyScalar(we).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(b){Ae.setScissorTest(le=b)},this.setOpaqueSort=function(b){De=b},this.setTransparentSort=function(b){Oe=b},this.getClearColor=function(b){return b.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,$=!0){let X=0;if(b){let j=!1;if(U!==null){const pe=U.texture.format;j=m.has(pe)}if(j){const pe=U.texture.type,_e=h.has(pe),me=Ee.getClearColor(),Te=Ee.getClearAlpha(),be=me.r,Ve=me.g,je=me.b;_e?(_[0]=be,_[1]=Ve,_[2]=je,_[3]=Te,I.clearBufferuiv(I.COLOR,0,_)):(x[0]=be,x[1]=Ve,x[2]=je,x[3]=Te,I.clearBufferiv(I.COLOR,0,x))}else X|=I.COLOR_BUFFER_BIT}H&&(X|=I.DEPTH_BUFFER_BIT),$&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",mt,!1),Ee.dispose(),Ie.dispose(),ae.dispose(),T.dispose(),ee.dispose(),ye.dispose(),ue.dispose(),xe.dispose(),fe.dispose(),K.dispose(),K.removeEventListener("sessionstart",Yg),K.removeEventListener("sessionend",Kg),gs.stop()};function Me(b){b.preventDefault(),Q_("WebGLRenderer: Context Lost."),N=!0}function Be(){Q_("WebGLRenderer: Context Restored."),N=!1;const b=R.autoReset,H=Se.enabled,$=Se.autoUpdate,X=Se.needsUpdate,j=Se.type;oe(),R.autoReset=b,Se.enabled=H,Se.autoUpdate=$,Se.needsUpdate=X,Se.type=j}function mt(b){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function at(b){const H=b.target;H.removeEventListener("dispose",at),er(H)}function er(b){tr(b),T.remove(b)}function tr(b){const H=T.get(b).programs;H!==void 0&&(H.forEach(function($){fe.releaseProgram($)}),b.isShaderMaterial&&fe.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,$,X,j,pe){H===null&&(H=rt);const _e=j.isMesh&&j.matrixWorld.determinant()<0,me=ZM(b,H,$,X,j);Ae.setMaterial(X,_e);let Te=$.index,be=1;if(X.wireframe===!0){if(Te=J.getWireframeAttribute($),Te===void 0)return;be=2}const Ve=$.drawRange,je=$.attributes.position;let Re=Ve.start*be,ct=(Ve.start+Ve.count)*be;pe!==null&&(Re=Math.max(Re,pe.start*be),ct=Math.min(ct,(pe.start+pe.count)*be)),Te!==null?(Re=Math.max(Re,0),ct=Math.min(ct,Te.count)):je!=null&&(Re=Math.max(Re,0),ct=Math.min(ct,je.count));const It=ct-Re;if(It<0||It===1/0)return;ue.setup(j,X,me,$,Te);let Pt,ut=We;if(Te!==null&&(Pt=ie.get(Te),ut=O,ut.setIndex(Pt)),j.isMesh)X.wireframe===!0?(Ae.setLineWidth(X.wireframeLinewidth*xt()),ut.setMode(I.LINES)):ut.setMode(I.TRIANGLES);else if(j.isLine){let on=X.linewidth;on===void 0&&(on=1),Ae.setLineWidth(on*xt()),j.isLineSegments?ut.setMode(I.LINES):j.isLineLoop?ut.setMode(I.LINE_LOOP):ut.setMode(I.LINE_STRIP)}else j.isPoints?ut.setMode(I.POINTS):j.isSprite&&ut.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ju("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ut.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const on=j._multiDrawStarts,Ce=j._multiDrawCounts,zn=j._multiDrawCount,nt=Te?ie.get(Te).bytesPerElement:1,gi=T.get(X).currentProgram.getUniforms();for(let Di=0;Di<zn;Di++)gi.setValue(I,"_gl_DrawID",Di),ut.render(on[Di]/nt,Ce[Di])}else if(j.isInstancedMesh)ut.renderInstances(Re,It,j.count);else if($.isInstancedBufferGeometry){const on=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ce=Math.min($.instanceCount,on);ut.renderInstances(Re,It,Ce)}else ut.render(Re,It)};function $g(b,H,$){b.transparent===!0&&b.side===fr&&b.forceSinglePass===!1?(b.side=In,b.needsUpdate=!0,rc(b,H,$),b.side=os,b.needsUpdate=!0,rc(b,H,$),b.side=fr):rc(b,H,$)}this.compile=function(b,H,$=null){$===null&&($=b),E=ae.get($),E.init(H),C.push(E),$.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),b!==$&&b.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),E.setupLights();const X=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const pe=j.material;if(pe)if(Array.isArray(pe))for(let _e=0;_e<pe.length;_e++){const me=pe[_e];$g(me,$,j),X.add(me)}else $g(pe,$,j),X.add(pe)}),E=C.pop(),X},this.compileAsync=function(b,H,$=null){const X=this.compile(b,H,$);return new Promise(j=>{function pe(){if(X.forEach(function(_e){T.get(_e).currentProgram.isReady()&&X.delete(_e)}),X.size===0){j(b);return}setTimeout(pe,10)}st.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let If=null;function KM(b){If&&If(b)}function Yg(){gs.stop()}function Kg(){gs.start()}const gs=new W1;gs.setAnimationLoop(KM),typeof self<"u"&&gs.setContext(self),this.setAnimationLoop=function(b){If=b,K.setAnimationLoop(b),b===null?gs.stop():gs.start()},K.addEventListener("sessionstart",Yg),K.addEventListener("sessionend",Kg),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const $=K.enabled===!0&&K.isPresenting===!0,X=y!==null&&(U===null||$)&&y.begin(M,U);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(K.cameraAutoUpdate===!0&&K.updateCamera(H),H=K.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,H,U),E=ae.get(b,C.length),E.init(H),C.push(E),Rt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Fe.setFromProjectionMatrix(Rt,Gi,H.reversedDepth),Le=this.localClippingEnabled,Ne=ce.init(this.clippingPlanes,Le),S=Ie.get(b,w.length),S.init(),w.push(S),K.enabled===!0&&K.isPresenting===!0){const _e=M.xr.getDepthSensingMesh();_e!==null&&Uf(_e,H,-1/0,M.sortObjects)}Uf(b,H,0,M.sortObjects),S.finish(),M.sortObjects===!0&&S.sort(De,Oe),ze=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ze&&Ee.addToRenderList(S,b),this.info.render.frame++,Ne===!0&&ce.beginShadows();const j=E.state.shadowsArray;if(Se.render(j,b,H),Ne===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&y.hasRenderPass())===!1){const _e=S.opaque,me=S.transmissive;if(E.setupLights(),H.isArrayCamera){const Te=H.cameras;if(me.length>0)for(let be=0,Ve=Te.length;be<Ve;be++){const je=Te[be];Jg(_e,me,b,je)}ze&&Ee.render(b);for(let be=0,Ve=Te.length;be<Ve;be++){const je=Te[be];Zg(S,b,je,je.viewport)}}else me.length>0&&Jg(_e,me,b,H),ze&&Ee.render(b),Zg(S,b,H)}U!==null&&L===0&&(V.updateMultisampleRenderTarget(U),V.updateRenderTargetMipmap(U)),X&&y.end(M),b.isScene===!0&&b.onAfterRender(M,b,H),ue.resetDefaultState(),B=-1,z=null,C.pop(),C.length>0?(E=C[C.length-1],Ne===!0&&ce.setGlobalState(M.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function Uf(b,H,$,X){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Fe.intersectsSprite(b)){X&&tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Rt);const _e=ye.update(b),me=b.material;me.visible&&S.push(b,_e,me,$,tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Fe.intersectsObject(b))){const _e=ye.update(b),me=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),tt.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),tt.copy(_e.boundingSphere.center)),tt.applyMatrix4(b.matrixWorld).applyMatrix4(Rt)),Array.isArray(me)){const Te=_e.groups;for(let be=0,Ve=Te.length;be<Ve;be++){const je=Te[be],Re=me[je.materialIndex];Re&&Re.visible&&S.push(b,_e,Re,$,tt.z,je)}}else me.visible&&S.push(b,_e,me,$,tt.z,null)}}const pe=b.children;for(let _e=0,me=pe.length;_e<me;_e++)Uf(pe[_e],H,$,X)}function Zg(b,H,$,X){const{opaque:j,transmissive:pe,transparent:_e}=b;E.setupLightsView($),Ne===!0&&ce.setGlobalState(M.clippingPlanes,$),X&&Ae.viewport(D.copy(X)),j.length>0&&ic(j,H,$),pe.length>0&&ic(pe,H,$),_e.length>0&&ic(_e,H,$),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Jg(b,H,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){const Re=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new $i(1,1,{generateMipmaps:!0,type:Re?Mr:Xn,minFilter:Fs,samples:pt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const pe=E.state.transmissionRenderTarget[X.id],_e=X.viewport||D;pe.setSize(_e.z*M.transmissionResolutionScale,_e.w*M.transmissionResolutionScale);const me=M.getRenderTarget(),Te=M.getActiveCubeFace(),be=M.getActiveMipmapLevel();M.setRenderTarget(pe),M.getClearColor(W),Q=M.getClearAlpha(),Q<1&&M.setClearColor(16777215,.5),M.clear(),ze&&Ee.render($);const Ve=M.toneMapping;M.toneMapping=qi;const je=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),Ne===!0&&ce.setGlobalState(M.clippingPlanes,X),ic(b,$,X),V.updateMultisampleRenderTarget(pe),V.updateRenderTargetMipmap(pe),st.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ct=0,It=H.length;ct<It;ct++){const Pt=H[ct],{object:ut,geometry:on,material:Ce,group:zn}=Pt;if(Ce.side===fr&&ut.layers.test(X.layers)){const nt=Ce.side;Ce.side=In,Ce.needsUpdate=!0,Qg(ut,$,X,on,Ce,zn),Ce.side=nt,Ce.needsUpdate=!0,Re=!0}}Re===!0&&(V.updateMultisampleRenderTarget(pe),V.updateRenderTargetMipmap(pe))}M.setRenderTarget(me,Te,be),M.setClearColor(W,Q),je!==void 0&&(X.viewport=je),M.toneMapping=Ve}function ic(b,H,$){const X=H.isScene===!0?H.overrideMaterial:null;for(let j=0,pe=b.length;j<pe;j++){const _e=b[j],{object:me,geometry:Te,group:be}=_e;let Ve=_e.material;Ve.allowOverride===!0&&X!==null&&(Ve=X),me.layers.test($.layers)&&Qg(me,H,$,Te,Ve,be)}}function Qg(b,H,$,X,j,pe){b.onBeforeRender(M,H,$,X,j,pe),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(M,H,$,X,b,pe),j.transparent===!0&&j.side===fr&&j.forceSinglePass===!1?(j.side=In,j.needsUpdate=!0,M.renderBufferDirect($,H,X,j,b,pe),j.side=os,j.needsUpdate=!0,M.renderBufferDirect($,H,X,j,b,pe),j.side=fr):M.renderBufferDirect($,H,X,j,b,pe),b.onAfterRender(M,H,$,X,j,pe)}function rc(b,H,$){H.isScene!==!0&&(H=rt);const X=T.get(b),j=E.state.lights,pe=E.state.shadowsArray,_e=j.state.version,me=fe.getParameters(b,j.state,pe,H,$),Te=fe.getProgramCacheKey(me);let be=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,X.fog=H.fog;const Ve=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=ee.get(b.envMap||X.environment,Ve),X.envMapRotation=X.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,be===void 0&&(b.addEventListener("dispose",at),be=new Map,X.programs=be);let je=be.get(Te);if(je!==void 0){if(X.currentProgram===je&&X.lightsStateVersion===_e)return t0(b,me),je}else me.uniforms=fe.getUniforms(b),b.onBeforeCompile(me,M),je=fe.acquireProgram(me,Te),be.set(Te,je),X.uniforms=me.uniforms;const Re=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=ce.uniform),t0(b,me),X.needsLights=QM(b),X.lightsStateVersion=_e,X.needsLights&&(Re.ambientLightColor.value=j.state.ambient,Re.lightProbe.value=j.state.probe,Re.directionalLights.value=j.state.directional,Re.directionalLightShadows.value=j.state.directionalShadow,Re.spotLights.value=j.state.spot,Re.spotLightShadows.value=j.state.spotShadow,Re.rectAreaLights.value=j.state.rectArea,Re.ltc_1.value=j.state.rectAreaLTC1,Re.ltc_2.value=j.state.rectAreaLTC2,Re.pointLights.value=j.state.point,Re.pointLightShadows.value=j.state.pointShadow,Re.hemisphereLights.value=j.state.hemi,Re.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Re.spotLightMatrix.value=j.state.spotLightMatrix,Re.spotLightMap.value=j.state.spotLightMap,Re.pointShadowMatrix.value=j.state.pointShadowMatrix),X.currentProgram=je,X.uniformsList=null,je}function e0(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=pu.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function t0(b,H){const $=T.get(b);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function ZM(b,H,$,X,j){H.isScene!==!0&&(H=rt),V.resetTextureUnits();const pe=H.fog,_e=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?H.environment:null,me=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:lo,Te=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,be=ee.get(X.envMap||_e,Te),Ve=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,je=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Re=!!$.morphAttributes.position,ct=!!$.morphAttributes.normal,It=!!$.morphAttributes.color;let Pt=qi;X.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Pt=M.toneMapping);const ut=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,on=ut!==void 0?ut.length:0,Ce=T.get(X),zn=E.state.lights;if(Ne===!0&&(Le===!0||b!==z)){const qt=b===z&&X.id===B;ce.setState(X,b,qt)}let nt=!1;X.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==zn.state.version||Ce.outputColorSpace!==me||j.isBatchedMesh&&Ce.batching===!1||!j.isBatchedMesh&&Ce.batching===!0||j.isBatchedMesh&&Ce.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ce.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ce.instancing===!1||!j.isInstancedMesh&&Ce.instancing===!0||j.isSkinnedMesh&&Ce.skinning===!1||!j.isSkinnedMesh&&Ce.skinning===!0||j.isInstancedMesh&&Ce.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ce.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ce.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ce.instancingMorph===!1&&j.morphTexture!==null||Ce.envMap!==be||X.fog===!0&&Ce.fog!==pe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ce.numPlanes||Ce.numIntersection!==ce.numIntersection)||Ce.vertexAlphas!==Ve||Ce.vertexTangents!==je||Ce.morphTargets!==Re||Ce.morphNormals!==ct||Ce.morphColors!==It||Ce.toneMapping!==Pt||Ce.morphTargetsCount!==on)&&(nt=!0):(nt=!0,Ce.__version=X.version);let gi=Ce.currentProgram;nt===!0&&(gi=rc(X,H,j));let Di=!1,_s=!1,oa=!1;const ft=gi.getUniforms(),Qt=Ce.uniforms;if(Ae.useProgram(gi.program)&&(Di=!0,_s=!0,oa=!0),X.id!==B&&(B=X.id,_s=!0),Di||z!==b){Ae.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ft.setValue(I,"projectionMatrix",b.projectionMatrix),ft.setValue(I,"viewMatrix",b.matrixWorldInverse);const br=ft.map.cameraPosition;br!==void 0&&br.setValue(I,$e.setFromMatrixPosition(b.matrixWorld)),pt.logarithmicDepthBuffer&&ft.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ft.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),z!==b&&(z=b,_s=!0,oa=!0)}if(Ce.needsLights&&(zn.state.directionalShadowMap.length>0&&ft.setValue(I,"directionalShadowMap",zn.state.directionalShadowMap,V),zn.state.spotShadowMap.length>0&&ft.setValue(I,"spotShadowMap",zn.state.spotShadowMap,V),zn.state.pointShadowMap.length>0&&ft.setValue(I,"pointShadowMap",zn.state.pointShadowMap,V)),j.isSkinnedMesh){ft.setOptional(I,j,"bindMatrix"),ft.setOptional(I,j,"bindMatrixInverse");const qt=j.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),ft.setValue(I,"boneTexture",qt.boneTexture,V))}j.isBatchedMesh&&(ft.setOptional(I,j,"batchingTexture"),ft.setValue(I,"batchingTexture",j._matricesTexture,V),ft.setOptional(I,j,"batchingIdTexture"),ft.setValue(I,"batchingIdTexture",j._indirectTexture,V),ft.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&ft.setValue(I,"batchingColorTexture",j._colorsTexture,V));const Cr=$.morphAttributes;if((Cr.position!==void 0||Cr.normal!==void 0||Cr.color!==void 0)&&ge.update(j,$,gi),(_s||Ce.receiveShadow!==j.receiveShadow)&&(Ce.receiveShadow=j.receiveShadow,ft.setValue(I,"receiveShadow",j.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&H.environment!==null&&(Qt.envMapIntensity.value=H.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=$L()),_s&&(ft.setValue(I,"toneMappingExposure",M.toneMappingExposure),Ce.needsLights&&JM(Qt,oa),pe&&X.fog===!0&&Pe.refreshFogUniforms(Qt,pe),Pe.refreshMaterialUniforms(Qt,X,we,ne,E.state.transmissionRenderTarget[b.id]),pu.upload(I,e0(Ce),Qt,V)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(pu.upload(I,e0(Ce),Qt,V),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ft.setValue(I,"center",j.center),ft.setValue(I,"modelViewMatrix",j.modelViewMatrix),ft.setValue(I,"normalMatrix",j.normalMatrix),ft.setValue(I,"modelMatrix",j.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const qt=X.uniformsGroups;for(let br=0,la=qt.length;br<la;br++){const n0=qt[br];xe.update(n0,gi),xe.bind(n0,gi)}}return gi}function JM(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function QM(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,H,$){const X=T.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),T.get(b.texture).__webglTexture=H,T.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const $=T.get(b);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0};const eE=I.createFramebuffer();this.setRenderTarget=function(b,H=0,$=0){U=b,P=H,L=$;let X=null,j=!1,pe=!1;if(b){const me=T.get(b);if(me.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(I.FRAMEBUFFER,me.__webglFramebuffer),D.copy(b.viewport),k.copy(b.scissor),F=b.scissorTest,Ae.viewport(D),Ae.scissor(k),Ae.setScissorTest(F),B=-1;return}else if(me.__webglFramebuffer===void 0)V.setupRenderTarget(b);else if(me.__hasExternalTextures)V.rebindTextures(b,T.get(b.texture).__webglTexture,T.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ve=b.depthTexture;if(me.__boundDepthTexture!==Ve){if(Ve!==null&&T.has(Ve)&&(b.width!==Ve.image.width||b.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(b)}}const Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(pe=!0);const be=T.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(be[H])?X=be[H][$]:X=be[H],j=!0):b.samples>0&&V.useMultisampledRTT(b)===!1?X=T.get(b).__webglMultisampledFramebuffer:Array.isArray(be)?X=be[$]:X=be,D.copy(b.viewport),k.copy(b.scissor),F=b.scissorTest}else D.copy(Y).multiplyScalar(we).floor(),k.copy(re).multiplyScalar(we).floor(),F=le;if($!==0&&(X=eE),Ae.bindFramebuffer(I.FRAMEBUFFER,X)&&Ae.drawBuffers(b,X),Ae.viewport(D),Ae.scissor(k),Ae.setScissorTest(F),j){const me=T.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+H,me.__webglTexture,$)}else if(pe){const me=H;for(let Te=0;Te<b.textures.length;Te++){const be=T.get(b.textures[Te]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Te,be.__webglTexture,$,me)}}else if(b!==null&&$!==0){const me=T.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,me.__webglTexture,$)}B=-1},this.readRenderTargetPixels=function(b,H,$,X,j,pe,_e,me=0){if(!(b&&b.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){Ae.bindFramebuffer(I.FRAMEBUFFER,Te);try{const be=b.textures[me],Ve=be.format,je=be.type;if(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),!pt.textureFormatReadable(Ve)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(je)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-X&&$>=0&&$<=b.height-j&&I.readPixels(H,$,X,j,de.convert(Ve),de.convert(je),pe)}finally{const be=U!==null?T.get(U).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(b,H,$,X,j,pe,_e,me=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te)if(H>=0&&H<=b.width-X&&$>=0&&$<=b.height-j){Ae.bindFramebuffer(I.FRAMEBUFFER,Te);const be=b.textures[me],Ve=be.format,je=be.type;if(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),!pt.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.bufferData(I.PIXEL_PACK_BUFFER,pe.byteLength,I.STREAM_READ),I.readPixels(H,$,X,j,de.convert(Ve),de.convert(je),0);const ct=U!==null?T.get(U).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,ct);const It=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await v2(I,It,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pe),I.deleteBuffer(Re),I.deleteSync(It),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,$=0){const X=Math.pow(2,-$),j=Math.floor(b.image.width*X),pe=Math.floor(b.image.height*X),_e=H!==null?H.x:0,me=H!==null?H.y:0;V.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,_e,me,j,pe),Ae.unbindTexture()};const tE=I.createFramebuffer(),nE=I.createFramebuffer();this.copyTextureToTexture=function(b,H,$=null,X=null,j=0,pe=0){let _e,me,Te,be,Ve,je,Re,ct,It;const Pt=b.isCompressedTexture?b.mipmaps[pe]:b.image;if($!==null)_e=$.max.x-$.min.x,me=$.max.y-$.min.y,Te=$.isBox3?$.max.z-$.min.z:1,be=$.min.x,Ve=$.min.y,je=$.isBox3?$.min.z:0;else{const Qt=Math.pow(2,-j);_e=Math.floor(Pt.width*Qt),me=Math.floor(Pt.height*Qt),b.isDataArrayTexture?Te=Pt.depth:b.isData3DTexture?Te=Math.floor(Pt.depth*Qt):Te=1,be=0,Ve=0,je=0}X!==null?(Re=X.x,ct=X.y,It=X.z):(Re=0,ct=0,It=0);const ut=de.convert(H.format),on=de.convert(H.type);let Ce;H.isData3DTexture?(V.setTexture3D(H,0),Ce=I.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(V.setTexture2DArray(H,0),Ce=I.TEXTURE_2D_ARRAY):(V.setTexture2D(H,0),Ce=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);const zn=I.getParameter(I.UNPACK_ROW_LENGTH),nt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gi=I.getParameter(I.UNPACK_SKIP_PIXELS),Di=I.getParameter(I.UNPACK_SKIP_ROWS),_s=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,be),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ve),I.pixelStorei(I.UNPACK_SKIP_IMAGES,je);const oa=b.isDataArrayTexture||b.isData3DTexture,ft=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const Qt=T.get(b),Cr=T.get(H),qt=T.get(Qt.__renderTarget),br=T.get(Cr.__renderTarget);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,qt.__webglFramebuffer),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,br.__webglFramebuffer);for(let la=0;la<Te;la++)oa&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,T.get(b).__webglTexture,j,je+la),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,T.get(H).__webglTexture,pe,It+la)),I.blitFramebuffer(be,Ve,_e,me,Re,ct,_e,me,I.DEPTH_BUFFER_BIT,I.NEAREST);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||T.has(b)){const Qt=T.get(b),Cr=T.get(H);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,tE),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,nE);for(let qt=0;qt<Te;qt++)oa?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qt.__webglTexture,j,je+qt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Qt.__webglTexture,j),ft?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Cr.__webglTexture,pe,It+qt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Cr.__webglTexture,pe),j!==0?I.blitFramebuffer(be,Ve,_e,me,Re,ct,_e,me,I.COLOR_BUFFER_BIT,I.NEAREST):ft?I.copyTexSubImage3D(Ce,pe,Re,ct,It+qt,be,Ve,_e,me):I.copyTexSubImage2D(Ce,pe,Re,ct,be,Ve,_e,me);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ft?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Ce,pe,Re,ct,It,_e,me,Te,ut,on,Pt.data):H.isCompressedArrayTexture?I.compressedTexSubImage3D(Ce,pe,Re,ct,It,_e,me,Te,ut,Pt.data):I.texSubImage3D(Ce,pe,Re,ct,It,_e,me,Te,ut,on,Pt):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,pe,Re,ct,_e,me,ut,on,Pt.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,pe,Re,ct,Pt.width,Pt.height,ut,Pt.data):I.texSubImage2D(I.TEXTURE_2D,pe,Re,ct,_e,me,ut,on,Pt);I.pixelStorei(I.UNPACK_ROW_LENGTH,zn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Di),I.pixelStorei(I.UNPACK_SKIP_IMAGES,_s),pe===0&&H.generateMipmaps&&I.generateMipmap(Ce),Ae.unbindTexture()},this.initRenderTarget=function(b){T.get(b).__webglFramebuffer===void 0&&V.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?V.setTextureCube(b,0):b.isData3DTexture?V.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?V.setTexture2DArray(b,0):V.setTexture2D(b,0),Ae.unbindTexture()},this.resetState=function(){P=0,L=0,U=null,Ae.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function lr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Z1(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},uo={duration:.5,overwrite:!1,delay:0},Rg,sn,St,fi=1e8,ht=1/fi,Zp=Math.PI*2,YL=Zp/4,KL=0,J1=Math.sqrt,ZL=Math.cos,JL=Math.sin,Jt=function(e){return typeof e=="string"},Lt=function(e){return typeof e=="function"},Tr=function(e){return typeof e=="number"},Pg=function(e){return typeof e>"u"},Qi=function(e){return typeof e=="object"},Un=function(e){return e!==!1},Dg=function(){return typeof window<"u"},jc=function(e){return Lt(e)||Jt(e)},Q1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,QL=/random\([^)]+\)/g,eI=/,\s*/g,Wv=/(?:-?\.?\d|\.)+/gi,eM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ka=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$d=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,tM=/[+-]=-?[.\d]+/,tI=/[^,'"\[\]\s]+/gi,nI=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Tt,Oi,Jp,Ng,ei={},Xu={},nM,iM=function(e){return(Xu=fo(e,ei))&&Bn},Lg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ll=function(e,t){return!t&&console.warn(e)},rM=function(e,t){return e&&(ei[e]=t)&&Xu&&(Xu[e]=t)||ei},Il=function(){return 0},iI={suppressEvents:!0,isStart:!0,kill:!1},mu={suppressEvents:!0,kill:!1},rI={suppressEvents:!0},Ig={},is=[],Qp={},sM,Wn={},Yd={},jv=30,gu=[],Ug="",Fg=function(e){var t=e[0],i,r;if(Qi(t)||Lt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=gu.length;r--&&!gu[r].targetTest(t););i=gu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new RM(e[r],i)))||e.splice(r,1);return e},Ws=function(e){return e._gsap||Fg(di(e))[0]._gsap},aM=function(e,t,i){return(i=e[t])&&Lt(i)?e[t]():Pg(i)&&e.getAttribute&&e.getAttribute(t)||i},Fn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ut=function(e){return Math.round(e*1e5)/1e5||0},Mt=function(e){return Math.round(e*1e7)/1e7||0},$a=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},sI=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},qu=function(){var e=is.length,t=is.slice(0),i,r;for(Qp={},is.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Og=function(e){return!!(e._initted||e._startAt||e.add)},oM=function(e,t,i,r){is.length&&!sn&&qu(),e.render(t,i,!!(sn&&t<0&&Og(e))),is.length&&!sn&&qu()},lM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(tI).length<2?t:Jt(e)?e.trim():e},cM=function(e){return e},ti=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},aI=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},fo=function(e,t){for(var i in t)e[i]=t[i];return e},Xv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Qi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},$u=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},ol=function(e){var t=e.parent||Tt,i=e.keyframes?aI(gn(e.keyframes)):ti;if(Un(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},oI=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},uM=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Df=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ls=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},js=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},lI=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},em=function(e,t,i,r){return e._startAt&&(sn?e._startAt.revert(mu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},cI=function n(e){return!e||e._ts&&n(e.parent)},qv=function(e){return e._repeat?ho(e._tTime,e=e.duration()+e._rDelay)*e:0},ho=function(e,t){var i=Math.floor(e=Mt(e/t));return e&&i===e?i-1:i},Yu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Nf=function(e){return e._end=Mt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ht)||0))},Lf=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Mt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Nf(e),i._dirty||js(i,e)),e},fM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Yu(e.rawTime(),t),(!t._dur||nc(0,t.totalDuration(),i)-t._tTime>ht)&&t.render(i,!0)),js(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ht}},Vi=function(e,t,i,r){return t.parent&&ls(t),t._start=Mt((Tr(i)?i:i||e!==Tt?ai(e,i,t):e._time)+t._delay),t._end=Mt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),uM(e,t,"_first","_last",e._sort?"_start":0),tm(t)||(e._recent=t),r||fM(e,t),e._ts<0&&Lf(e,e._tTime),e},dM=function(e,t){return(ei.ScrollTrigger||Lg("scrollTrigger",t))&&ei.ScrollTrigger.create(t,e)},hM=function(e,t,i,r,s){if(Bg(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&sM!==qn.frame)return is.push(e),e._lazy=[s,r],1},uI=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},tm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},fI=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&uI(e)&&!(!e._initted&&tm(e))||(e._ts<0||e._dp._ts<0)&&!tm(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=nc(0,e._tDur,t),u=ho(l,o),e._yoyo&&u&1&&(a=1-a),u!==ho(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||sn||r||e._zTime===ht||!t&&e._zTime){if(!e._initted&&hM(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?ht:0),i||(i=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&em(e,t,i,!0),e._onUpdate&&!i&&Yn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Yn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ls(e,1),!i&&!sn&&(Yn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},dI=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},po=function(e,t,i,r){var s=e._repeat,a=Mt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Mt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Lf(e,e._tTime=e._tDur*o),e.parent&&Nf(e),i||js(e.parent,e),e},$v=function(e){return e instanceof yn?js(e):po(e,e._dur)},hI={_start:0,endTime:Il,totalDuration:Il},ai=function n(e,t,i){var r=e.labels,s=e._recent||hI,a=e.duration()>=fi?s.endTime(!1):e._dur,o,l,c;return Jt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(gn(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},ll=function(e,t,i){var r=Tr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Un(l.vars.inherit)&&l.parent;a.immediateRender=Un(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new zt(t[0],a,t[s+1])},ms=function(e,t){return e||e===0?t(e):t},nc=function(e,t,i){return i<e?e:i>t?t:i},pn=function(e,t){return!Jt(e)||!(t=nI.exec(e))?"":t[1]},pI=function(e,t,i){return ms(i,function(r){return nc(e,t,r)})},nm=[].slice,pM=function(e,t){return e&&Qi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Qi(e[0]))&&!e.nodeType&&e!==Oi},mI=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Jt(r)&&!t||pM(r,1)?(s=i).push.apply(s,di(r)):i.push(r)})||i},di=function(e,t,i){return St&&!t&&St.selector?St.selector(e):Jt(e)&&!i&&(Jp||!mo())?nm.call((t||Ng).querySelectorAll(e),0):gn(e)?mI(e,i):pM(e)?nm.call(e,0):e?[e]:[]},im=function(e){return e=di(e)[0]||Ll("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return di(t,i.querySelectorAll?i:i===e?Ll("Invalid scope")||Ng.createElement("div"):e)}},mM=function(e){return e.sort(function(){return .5-Math.random()})},gM=function(e){if(Lt(e))return e;var t=Qi(e)?e:{each:e},i=Xs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,f=r;return Jt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(d,g,p){var v=(p||t).length,m=a[v],h,_,x,S,E,w,C,y,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,fi])[1],!M){for(C=-fi;C<(C=p[M++].getBoundingClientRect().left)&&M<v;);M<v&&M--}for(m=a[v]=[],h=l?Math.min(M,v)*u-.5:r%M,_=M===fi?0:l?v*f/M-.5:r/M|0,C=0,y=fi,w=0;w<v;w++)x=w%M-h,S=_-(w/M|0),m[w]=E=c?Math.abs(c==="y"?S:x):J1(x*x+S*S),E>C&&(C=E),E<y&&(y=E);r==="random"&&mM(m),m.max=C-y,m.min=y,m.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(M>v?v-1:c?c==="y"?v/M:M:Math.max(M,v/M))||0)*(r==="edges"?-1:1),m.b=v<0?s-v:s,m.u=pn(t.amount||t.each)||0,i=i&&v<0?AM(i):i}return v=(m[d]-m.min)/m.max||0,Mt(m.b+(i?i(v):v)*m.v)+m.u}},rm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Mt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Tr(i)?0:pn(i))}},_M=function(e,t){var i=gn(e),r,s;return!i&&Qi(e)&&(r=i=e.radius||fi,e.values?(e=di(e.values),(s=!Tr(e[0]))&&(r*=r)):e=rm(e.increment)),ms(t,i?Lt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=fi,u=0,f=e.length,d,g;f--;)s?(d=e[f].x-o,g=e[f].y-l,d=d*d+g*g):d=Math.abs(e[f]-o),d<c&&(c=d,u=f);return u=!r||c<=r?e[u]:a,s||u===a||Tr(a)?u:u+pn(a)}:rm(e))},vM=function(e,t,i,r){return ms(gn(e)?!t:i===!0?!!(i=0):!r,function(){return gn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},gI=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},_I=function(e,t){return function(i){return e(parseFloat(i))+(t||pn(i))}},vI=function(e,t,i){return yM(e,t,0,1,i)},xM=function(e,t,i){return ms(i,function(r){return e[~~t(r)]})},xI=function n(e,t,i){var r=t-e;return gn(e)?xM(e,n(0,e.length),t):ms(i,function(s){return(r+(s-e)%r)%r+e})},yI=function n(e,t,i){var r=t-e,s=r*2;return gn(e)?xM(e,n(0,e.length-1),t):ms(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Ul=function(e){return e.replace(QL,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(eI);return vM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},yM=function(e,t,i,r,s){var a=t-e,o=r-i;return ms(s,function(l){return i+((l-e)/a*o||0)})},SI=function n(e,t,i,r){var s=isNaN(e+t)?0:function(g){return(1-g)*e+g*t};if(!s){var a=Jt(e),o={},l,c,u,f,d;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(gn(e)&&!gn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(p){p*=f;var v=Math.min(d,~~p);return u[v](p-v)},i=t}else r||(e=fo(gn(e)?[]:{},e));if(!u){for(l in t)kg.call(o,e,l,"get",t[l]);s=function(p){return Hg(p,o)||(a?e.p:e)}}}return ms(i,s)},Yv=function(e,t,i){var r=e.labels,s=fi,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Yn=function(e,t,i){var r=e.vars,s=r[t],a=St,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&is.length&&qu(),o&&(St=o),u=l?s.apply(c,l):s.call(c),St=a,u},$o=function(e){return ls(e),e.scrollTrigger&&e.scrollTrigger.kill(!!sn),e.progress()<1&&Yn(e,"onInterrupt"),e},Ba,SM=[],MM=function(e){if(e)if(e=!e.name&&e.default||e,Dg()||e.headless){var t=e.name,i=Lt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Il,render:Hg,add:kg,kill:OI,modifier:FI,rawVars:0},a={targetTest:0,get:0,getSetter:Vg,aliases:{},register:0};if(mo(),e!==r){if(Wn[t])return;ti(r,ti($u(e,s),a)),fo(r.prototype,fo(s,$u(e,a))),Wn[r.prop=t]=r,e.targetTest&&(gu.push(r),Ig[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}rM(t,r),e.register&&e.register(Bn,r,On)}else SM.push(e)},dt=255,Yo={aqua:[0,dt,dt],lime:[0,dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,dt],navy:[0,0,128],white:[dt,dt,dt],olive:[128,128,0],yellow:[dt,dt,0],orange:[dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[dt,0,0],pink:[dt,192,203],cyan:[0,dt,dt],transparent:[dt,dt,dt,0]},Kd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*dt+.5|0},EM=function(e,t,i){var r=e?Tr(e)?[e>>16,e>>8&dt,e&dt]:0:Yo.black,s,a,o,l,c,u,f,d,g,p;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Yo[e])r=Yo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&dt,r&dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&dt,e&dt]}else if(e.substr(0,3)==="hsl"){if(r=p=e.match(Wv),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Kd(l+1/3,s,a),r[1]=Kd(l,s,a),r[2]=Kd(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(eM),i&&r.length<4&&(r[3]=1),r}else r=e.match(Wv)||Yo.transparent;r=r.map(Number)}return t&&!p&&(s=r[0]/dt,a=r[1]/dt,o=r[2]/dt,f=Math.max(s,a,o),d=Math.min(s,a,o),u=(f+d)/2,f===d?l=c=0:(g=f-d,c=u>.5?g/(2-f-d):g/(f+d),l=f===s?(a-o)/g+(a<o?6:0):f===a?(o-s)/g+2:(s-a)/g+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},TM=function(e){var t=[],i=[],r=-1;return e.split(rs).forEach(function(s){var a=s.match(ka)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},Kv=function(e,t,i){var r="",s=(e+r).match(rs),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=EM(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=TM(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(rs,"1").split(ka),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(rs),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},rs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Yo)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),MI=/hsl[a]?\(/,wM=function(e){var t=e.join(" "),i;if(rs.lastIndex=0,rs.test(t))return i=MI.test(t),e[1]=Kv(e[1],i),e[0]=Kv(e[0],i,TM(e[1])),!0},Fl,qn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,c,u,f,d,g,p=function v(m){var h=n()-r,_=m===!0,x,S,E,w;if((h>e||h<0)&&(i+=h-t),r+=h,E=r-i,x=E-a,(x>0||_)&&(w=++f.frame,d=E-f.time*1e3,f.time=E=E/1e3,a+=x+(x>=s?4:s-x),S=1),_||(l=c(v)),S)for(g=0;g<o.length;g++)o[g](E,d,w,m)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){nM&&(!Jp&&Dg()&&(Oi=Jp=window,Ng=Oi.document||{},ei.gsap=Bn,(Oi.gsapVersions||(Oi.gsapVersions=[])).push(Bn.version),iM(Xu||Oi.GreenSockGlobals||!Oi.gsap&&Oi||{}),SM.forEach(MM)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},Fl=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Fl=0,c=Il},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,h,_){var x=h?function(S,E,w,C){m(S,E,w,C),f.remove(x)}:m;return f.remove(m),o[_?"unshift":"push"](x),mo(),x},remove:function(m,h){~(h=o.indexOf(m))&&o.splice(h,1)&&g>=h&&g--},_listeners:o},f}(),mo=function(){return!Fl&&qn.wake()},Ze={},EI=/^[\d.\-M][\d.\-,\s]/,TI=/["']/g,wI=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(TI,"").trim():+c,r=l.substr(o+1).trim();return t},AI=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},CI=function(e){var t=(e+"").split("("),i=Ze[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[wI(t[1])]:AI(e).split(",").map(lM)):Ze._CE&&EI.test(e)?Ze._CE("",e):i},AM=function(e){return function(t){return 1-e(1-t)}},CM=function n(e,t){for(var i=e._first,r;i;)i instanceof yn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Xs=function(e,t){return e&&(Lt(e)?e:Ze[e]||CI(e))||t},aa=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return Fn(e,function(o){Ze[o]=ei[o]=s,Ze[a=o.toLowerCase()]=i;for(var l in s)Ze[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ze[o+"."+l]=s[l]}),s},bM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Zd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/Zp*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*JL((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:bM(o);return s=Zp/s,l.config=function(c,u){return n(e,c,u)},l},Jd=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:bM(i);return r.config=function(s){return n(e,s)},r};Fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;aa(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ze.Linear.easeNone=Ze.none=Ze.Linear.easeIn;aa("Elastic",Zd("in"),Zd("out"),Zd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};aa("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);aa("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});aa("Circ",function(n){return-(J1(1-n*n)-1)});aa("Sine",function(n){return n===1?1:-ZL(n*YL)+1});aa("Back",Jd("in"),Jd("out"),Jd());Ze.SteppedEase=Ze.steps=ei.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-ht;return function(o){return((r*nc(0,a,o)|0)+s)*i}}};uo.ease=Ze["quad.out"];Fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Ug+=n+","+n+"Params,"});var RM=function(e,t){this.id=KL++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:aM,this.set=t?t.getSetter:Vg},Ol=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,po(this,+t.duration,1,1),this.data=t.data,St&&(this._ctx=St,St.data.push(this)),Fl||qn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,po(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(mo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Lf(this,i),!s._dp||s.parent||fM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Vi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ht||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),oM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+qv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+qv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?ho(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-ht?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Yu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ht?0:this._rts,this.totalTime(nc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Nf(this),lI(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(mo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ht&&(this._tTime-=ht)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Mt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Vi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Un(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Yu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=rI);var r=sn;return sn=i,Og(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),sn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,$v(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,$v(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(ai(this,i),Un(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Un(r)),this._dur||(this._zTime=-ht),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ht:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ht,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ht)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=Lt(i)?i:cM,l=function(){var u=r.then;r.then=null,s&&s(),Lt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){$o(this)},n}();ti(Ol.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ht,_prom:0,_ps:!1,_rts:1});var yn=function(n){Z1(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Un(i.sortChildren),Tt&&Vi(i.parent||Tt,lr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&dM(lr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return ll(0,arguments,this),this},t.from=function(r,s,a){return ll(1,arguments,this),this},t.fromTo=function(r,s,a,o){return ll(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,ol(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new zt(r,s,ai(this,a),1),this},t.call=function(r,s,a){return Vi(this,zt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new zt(r,a,ai(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,ol(a).immediateRender=Un(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,ol(o).immediateRender=Un(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Mt(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,g,p,v,m,h,_,x,S,E,w,C;if(this!==Tt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),d=u,S=this._start,x=this._ts,h=!x,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(d=Mt(u%m),u===l?(v=this._repeat,d=c):(E=Mt(u/m),v=~~E,v&&v===E&&(d=c,v--),d>c&&(d=c)),E=ho(this._tTime,m),!o&&this._tTime&&E!==v&&this._tTime-E*m-this._dur<=0&&(E=v),w&&v&1&&(d=c-d,C=1),v!==E&&!this._lock){var y=w&&E&1,M=y===(w&&v&1);if(v<E&&(y=!y),o=y?0:u%c?c:u,this._lock=1,this.render(o||(C?0:Mt(v*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Yn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,E=v),o&&o!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=y?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;CM(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=dI(this,Mt(o),Mt(d)),_&&(u-=d-(d=_._start))),this._tTime=u,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!E&&(Yn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&r>=0)for(g=this._first;g;){if(p=g._next,(g._act||d>=g._start)&&g._ts&&_!==g){if(g.parent!==this)return this.render(r,s,a);if(g.render(g._ts>0?(d-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(d-g._start)*g._ts,s,a),d!==this._time||!this._ts&&!h){_=0,p&&(u+=this._zTime=-ht);break}}g=p}else{g=this._last;for(var N=r<0?r:d;g;){if(p=g._prev,(g._act||N<=g._end)&&g._ts&&_!==g){if(g.parent!==this)return this.render(r,s,a);if(g.render(g._ts>0?(N-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(N-g._start)*g._ts,s,a||sn&&Og(g)),d!==this._time||!this._ts&&!h){_=0,p&&(u+=this._zTime=N?-ht:ht);break}}g=p}}if(_&&!s&&(this.pause(),_.render(d>=o?0:-ht)._zTime=d>=o?1:-1,this._ts))return this._start=S,Nf(this),this.render(r,s,a);this._onUpdate&&!s&&Yn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ls(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(Yn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Tr(s)||(s=ai(this,s,r)),!(r instanceof Ol)){if(gn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Jt(r))return this.addLabel(r,s);if(Lt(r))r=zt.delayedCall(0,r);else return this}return this!==r?Vi(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-fi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof zt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Jt(r)?this.removeLabel(r):Lt(r)?this.killTweensOf(r):(r.parent===this&&Df(this,r),r===this._recent&&(this._recent=this._last),js(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Mt(qn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ai(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=zt.delayedCall(0,s||Il,a);return o.data="isPause",this._hasPause=1,Vi(this,o,ai(this,r))},t.removePause=function(r){var s=this._first;for(r=ai(this,r);s;)s._start===r&&s.data==="isPause"&&ls(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Xr!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=di(r),l=this._first,c=Tr(s),u;l;)l instanceof zt?sI(l._targets,o)&&(c?(!Xr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=ai(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,g,p=zt.to(a,ti({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ht,onStart:function(){if(a.pause(),!g){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==m&&po(p,m,0,1).render(p._time,!0,!0),g=1}u&&u.apply(p,f||[])}},s));return d?p.render(0):p},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,ti({startAt:{time:ai(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Yv(this,ai(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Yv(this,ai(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ht)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=Mt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return js(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),js(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=fi,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Vi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Mt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;po(a,a===Tt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Tt._ts&&(oM(Tt,Yu(r,Tt)),sM=qn.frame),qn.frame>=jv){jv+=Jn.autoSleep||120;var s=Tt._first;if((!s||!s._ts)&&Jn.autoSleep&&qn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||qn.sleep()}}},e}(Ol);ti(yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var bI=function(e,t,i,r,s,a,o){var l=new On(this._pt,e,t,0,1,UM,null,s),c=0,u=0,f,d,g,p,v,m,h,_;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Ul(r)),a&&(_=[i,r],a(_,e,t),i=_[0],r=_[1]),d=i.match($d)||[];f=$d.exec(r);)p=f[0],v=r.substring(c,f.index),g?g=(g+1)%5:v.substr(-5)==="rgba("&&(g=1),p!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:v||u===1?v:",",s:m,c:p.charAt(1)==="="?$a(m,p)-m:parseFloat(p)-m,m:g&&g<4?Math.round:0},c=$d.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(tM.test(r)||h)&&(l.e=0),this._pt=l,l},kg=function(e,t,i,r,s,a,o,l,c,u){Lt(r)&&(r=r(s||0,e,a));var f=e[t],d=i!=="get"?i:Lt(f)?c?e[t.indexOf("set")||!Lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,g=Lt(f)?c?LI:LM:zg,p;if(Jt(r)&&(~r.indexOf("random(")&&(r=Ul(r)),r.charAt(1)==="="&&(p=$a(d,r)+(pn(d)||0),(p||p===0)&&(r=p))),!u||d!==r||sm)return!isNaN(d*r)&&r!==""?(p=new On(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?UI:IM,0,g),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!f&&!(t in e)&&Lg(t,r),bI.call(this,e,t,d,r,g,l||Jn.stringFilter,c))},RI=function(e,t,i,r,s){if(Lt(e)&&(e=cl(e,s,t,i,r)),!Qi(e)||e.style&&e.nodeType||gn(e)||Q1(e))return Jt(e)?cl(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=cl(e[o],s,t,i,r);return a},PM=function(e,t,i,r,s,a){var o,l,c,u;if(Wn[e]&&(o=new Wn[e]).init(s,o.rawVars?t[e]:RI(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new On(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Ba))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Xr,sm,Bg=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,g=r.autoRevert,p=e._dur,v=e._startAt,m=e._targets,h=e.parent,_=h&&h.data==="nested"?h.vars.targets:m,x=e._overwrite==="auto"&&!Rg,S=e.timeline,E,w,C,y,M,N,P,L,U,B,z,D,k;if(S&&(!d||!s)&&(s="none"),e._ease=Xs(s,uo.ease),e._yEase=f?AM(Xs(f===!0?s:f,uo.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!r.runBackwards,!S||d&&!r.stagger){if(L=m[0]?Ws(m[0]).harness:0,D=L&&r[L.prop],E=$u(r,Ig),v&&(v._zTime<0&&v.progress(1),t<0&&u&&o&&!g?v.render(-1,!0):v.revert(u&&p?mu:iI),v._lazy=0),a){if(ls(e._startAt=zt.set(m,ti({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!v&&Un(l),startAt:null,delay:0,onUpdate:c&&function(){return Yn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn||!o&&!g)&&e._startAt.revert(mu),o&&p&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&p&&!v){if(t&&(o=!1),C=ti({overwrite:!1,data:"isFromStart",lazy:o&&!v&&Un(l),immediateRender:o,stagger:0,parent:h},E),D&&(C[L.prop]=D),ls(e._startAt=zt.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn?e._startAt.revert(mu):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,ht,ht);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Un(l)||l&&!p,w=0;w<m.length;w++){if(M=m[w],P=M._gsap||Fg(m)[w]._gsap,e._ptLookup[w]=B={},Qp[P.id]&&is.length&&qu(),z=_===m?w:_.indexOf(M),L&&(U=new L).init(M,D||E,e,z,_)!==!1&&(e._pt=y=new On(e._pt,M,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(F){B[F]=y}),U.priority&&(N=1)),!L||D)for(C in E)Wn[C]&&(U=PM(C,E,e,z,M,_))?U.priority&&(N=1):B[C]=y=kg.call(e,M,C,"get",E[C],z,_,0,r.stringFilter);e._op&&e._op[w]&&e.kill(M,e._op[w]),x&&e._pt&&(Xr=e,Tt.killTweensOf(M,B,e.globalTime(t)),k=!e.parent,Xr=0),e._pt&&l&&(Qp[P.id]=1)}N&&FM(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,d&&t<=0&&S.render(fi,!0,!0)},PI=function(e,t,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,g;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,g=e._targets.length;g--;){if(u=d[g][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return sm=1,e.vars[t]="+=0",Bg(e,o),sm=0,l?Ll(t+" not eligible for reset"):1;c.push(u)}for(g=c.length;g--;)f=c[g],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,f.e&&(f.e=Ut(i)+pn(f.e)),f.b&&(f.b=u.s+pn(f.b))},DI=function(e,t){var i=e[0]?Ws(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=fo({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},NI=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(gn(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},cl=function(e,t,i,r,s){return Lt(e)?e.call(t,i,r,s):Jt(e)&&~e.indexOf("random(")?Ul(e):e},DM=Ug+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",NM={};Fn(DM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return NM[n]=1});var zt=function(n){Z1(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:ol(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,g=l.overwrite,p=l.keyframes,v=l.defaults,m=l.scrollTrigger,h=l.yoyoEase,_=r.parent||Tt,x=(gn(i)||Q1(i)?Tr(i[0]):"length"in r)?[i]:di(i),S,E,w,C,y,M,N,P;if(o._targets=x.length?Fg(x):Ll("GSAP target "+i+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=g,p||d||jc(c)||jc(u)){if(r=o.vars,S=o.timeline=new yn({data:"nested",defaults:v||{},targets:_&&_.data==="nested"?_.vars.targets:x}),S.kill(),S.parent=S._dp=lr(o),S._start=0,d||jc(c)||jc(u)){if(C=x.length,N=d&&gM(d),Qi(d))for(y in d)~DM.indexOf(y)&&(P||(P={}),P[y]=d[y]);for(E=0;E<C;E++)w=$u(r,NM),w.stagger=0,h&&(w.yoyoEase=h),P&&fo(w,P),M=x[E],w.duration=+cl(c,lr(o),E,M,x),w.delay=(+cl(u,lr(o),E,M,x)||0)-o._delay,!d&&C===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),S.to(M,w,N?N(E,M,x):0),S._ease=Ze.none;S.duration()?c=u=0:o.timeline=0}else if(p){ol(ti(S.vars.defaults,{ease:"none"})),S._ease=Xs(p.ease||r.ease||"none");var L=0,U,B,z;if(gn(p))p.forEach(function(D){return S.to(x,D,">")}),S.duration();else{w={};for(y in p)y==="ease"||y==="easeEach"||NI(y,p[y],w,p.easeEach);for(y in w)for(U=w[y].sort(function(D,k){return D.t-k.t}),L=0,E=0;E<U.length;E++)B=U[E],z={ease:B.e,duration:(B.t-(E?U[E-1].t:0))/100*c},z[y]=B.v,S.to(x,z,L),L+=z.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return g===!0&&!Rg&&(Xr=lr(o),Tt.killTweensOf(x),Xr=0),Vi(_,lr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!p&&o._start===Mt(_._time)&&Un(f)&&cI(lr(o))&&_.data!=="nested")&&(o._tTime=-ht,o.render(Math.max(0,-u)||0)),m&&dM(lr(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-ht&&!u?l:r<ht?0:r,d,g,p,v,m,h,_,x,S;if(!c)fI(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,x=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(v*100+r,s,a);if(d=Mt(f%v),f===l?(p=this._repeat,d=c):(m=Mt(f/v),p=~~m,p&&p===m?(d=c,p--):d>c&&(d=c)),h=this._yoyo&&p&1,h&&(S=this._yEase,d=c-d),m=ho(this._tTime,v),d===o&&!a&&this._initted&&p===m)return this._tTime=f,this;p!==m&&(x&&this._yEase&&CM(x,h),this.vars.repeatRefresh&&!h&&!this._lock&&d!==v&&this._initted&&(this._lock=a=1,this.render(Mt(v*p),!0).invalidate()._lock=0))}if(!this._initted){if(hM(this,u?r:d,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(S||this._ease)(d/c),this._from&&(this.ratio=_=1-_),!o&&f&&!s&&!m&&(Yn(this,"onStart"),this._tTime!==f))return this;for(g=this._pt;g;)g.r(_,g.d),g=g._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&em(this,r,s,a),Yn(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&Yn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&em(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ls(this,1),!s&&!(u&&!o)&&(f||o||h)&&(Yn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){Fl||qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Bg(this,c),u=this._ease(c/this._dur),PI(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Lf(this,0),this.parent||uM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?$o(this):this.scrollTrigger&&this.scrollTrigger.kill(!!sn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Xr&&Xr.vars.overwrite!==!0)._first||$o(this),this.parent&&a!==this.timeline.totalDuration()&&po(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?di(r):o,c=this._ptLookup,u=this._pt,f,d,g,p,v,m,h;if((!s||s==="all")&&oI(o,l))return s==="all"&&(this._pt=0),$o(this);for(f=this._op=this._op||[],s!=="all"&&(Jt(s)&&(v={},Fn(s,function(_){return v[_]=1}),s=v),s=DI(o,s)),h=o.length;h--;)if(~l.indexOf(o[h])){d=c[h],s==="all"?(f[h]=s,p=d,g={}):(g=f[h]=f[h]||{},p=s);for(v in p)m=d&&d[v],m&&((!("kill"in m.d)||m.d.kill(v)===!0)&&Df(this,m,"_pt"),delete d[v]),g!=="all"&&(g[v]=1)}return this._initted&&!this._pt&&u&&$o(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ll(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return ll(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Tt.killTweensOf(r,s,a)},e}(Ol);ti(zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fn("staggerTo,staggerFrom,staggerFromTo",function(n){zt[n]=function(){var e=new yn,t=nm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var zg=function(e,t,i){return e[t]=i},LM=function(e,t,i){return e[t](i)},LI=function(e,t,i,r){return e[t](r.fp,i)},II=function(e,t,i){return e.setAttribute(t,i)},Vg=function(e,t){return Lt(e[t])?LM:Pg(e[t])&&e.setAttribute?II:zg},IM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},UI=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},UM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Hg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},FI=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},OI=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Df(this,t,"_pt"):t.dep||(i=1),t=r;return!i},kI=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},FM=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},On=function(){function n(t,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||IM,this.d=l||this,this.set=c||zg,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=kI,this.m=i,this.mt=s,this.tween=r},n}();Fn(Ug+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Ig[n]=1});ei.TweenMax=ei.TweenLite=zt;ei.TimelineLite=ei.TimelineMax=yn;Tt=new yn({sortChildren:!1,defaults:uo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=wM;var qs=[],_u={},BI=[],Zv=0,zI=0,Qd=function(e){return(_u[e]||BI).map(function(t){return t()})},am=function(){var e=Date.now(),t=[];e-Zv>2&&(Qd("matchMediaInit"),qs.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=Oi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),Qd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Zv=e,Qd("matchMedia"))},OM=function(){function n(t,i){this.selector=i&&im(i),this.data=[],this._r=[],this.isReverted=!1,this.id=zI++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Lt(i)&&(s=r,r=i,i=Lt);var a=this,o=function(){var c=St,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=im(s)),St=a,f=r.apply(a,arguments),Lt(f)&&a._r.push(f),St=c,a.selector=u,a.isReverted=!1,f};return a.last=o,i===Lt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=St;St=null,i(this),St=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof zt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof yn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof zt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=qs.length;a--;)qs[a].id===this.id&&qs.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),VI=function(){function n(t){this.contexts=[],this.scope=t,St&&St.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Qi(i)||(i={matches:i});var a=new OM(0,s||this.scope),o=a.conditions={},l,c,u;St&&!a.selector&&(a.selector=St.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=Oi.matchMedia(i[c]),l&&(qs.indexOf(a)<0&&qs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(am):l.addEventListener("change",am)));return u&&r(a,function(f){return a.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Ku={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return MM(r)})},timeline:function(e){return new yn(e)},getTweensOf:function(e,t){return Tt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Jt(e)&&(e=di(e)[0]);var s=Ws(e||{}).get,a=i?cM:lM;return i==="native"&&(i=""),e&&(t?a((Wn[t]&&Wn[t].get||s)(e,t,i,r)):function(o,l,c){return a((Wn[o]&&Wn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=di(e),e.length>1){var r=e.map(function(u){return Bn.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var a=Wn[t],o=Ws(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;Ba._pt=0,f.init(e,i?u+i:u,Ba,0,[e]),f.render(1,f),Ba._pt&&Hg(1,Ba)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var r,s=Bn.to(e,ti((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Xs(e.ease,uo.ease)),Xv(uo,e||{})},config:function(e){return Xv(Jn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Wn[o]&&!ei[o]&&Ll(t+" effect requires "+o+" plugin.")}),Yd[t]=function(o,l,c){return i(di(o),ti(l||{},s),c)},a&&(yn.prototype[t]=function(o,l,c){return this.add(Yd[t](o,Qi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ze[e]=Xs(t)},parseEase:function(e,t){return arguments.length?Xs(e,t):Ze},getById:function(e){return Tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new yn(e),r,s;for(i.smoothChildTiming=Un(e.smoothChildTiming),Tt.remove(i),i._dp=0,i._time=i._tTime=Tt._time,r=Tt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof zt&&r.vars.onComplete===r._targets[0]))&&Vi(i,r,r._start-r._delay),r=s;return Vi(Tt,i,0),i},context:function(e,t){return e?new OM(e,t):St},matchMedia:function(e){return new VI(e)},matchMediaRefresh:function(){return qs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||am()},addEventListener:function(e,t){var i=_u[e]||(_u[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=_u[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:xI,wrapYoyo:yI,distribute:gM,random:vM,snap:_M,normalize:vI,getUnit:pn,clamp:pI,splitColor:EM,toArray:di,selector:im,mapRange:yM,pipe:gI,unitize:_I,interpolate:SI,shuffle:mM},install:iM,effects:Yd,ticker:qn,updateRoot:yn.updateRoot,plugins:Wn,globalTimeline:Tt,core:{PropTween:On,globals:rM,Tween:zt,Timeline:yn,Animation:Ol,getCache:Ws,_removeLinkedListItem:Df,reverting:function(){return sn},context:function(e){return e&&St&&(St.data.push(e),e._ctx=St),St},suppressOverwrites:function(e){return Rg=e}}};Fn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Ku[n]=zt[n]});qn.add(yn.updateRoot);Ba=Ku.to({},{duration:0});var HI=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},GI=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=HI(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},eh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Jt(s)&&(l={},Fn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}GI(o,s)}}}},Bn=Ku.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)sn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},eh("roundProps",rm),eh("modifiers"),eh("snap",_M))||Ku;zt.version=yn.version=Bn.version="3.14.2";nM=1;Dg()&&mo();Ze.Power0;Ze.Power1;Ze.Power2;Ze.Power3;Ze.Power4;Ze.Linear;Ze.Quad;Ze.Cubic;Ze.Quart;Ze.Quint;Ze.Strong;Ze.Elastic;Ze.Back;Ze.SteppedEase;Ze.Bounce;Ze.Sine;Ze.Expo;Ze.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jv,qr,Ya,Gg,Bs,Qv,Wg,WI=function(){return typeof window<"u"},wr={},Rs=180/Math.PI,Ka=Math.PI/180,wa=Math.atan2,ex=1e8,jg=/([A-Z])/g,jI=/(left|right|width|margin|padding|x)/i,XI=/[\s,\(]\S/,Wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},om=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qI=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$I=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},YI=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},KI=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},kM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},BM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ZI=function(e,t,i){return e.style[t]=i},JI=function(e,t,i){return e.style.setProperty(t,i)},QI=function(e,t,i){return e._gsap[t]=i},eU=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},tU=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},nU=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},wt="transform",kn=wt+"Origin",iU=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in wr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Wi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=ur(r,o)}):this.tfm[e]=a.x?a[e]:ur(r,e),e===kn&&(this.tfm.zOrigin=a.zOrigin);else return Wi.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(wt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(kn,t,"")),e=wt}(s||t)&&this.props.push(e,t,s[e])},zM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},rU=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(jg,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Wg(),(!s||!s.isStart)&&!i[wt]&&(zM(i),r.zOrigin&&i[kn]&&(i[kn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},VM=function(e,t){var i={target:e,props:[],revert:rU,save:iU};return e._gsap||Bn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},HM,lm=function(e,t){var i=qr.createElementNS?qr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):qr.createElement(e);return i&&i.style?i:qr.createElement(e)},Kn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(jg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,go(t)||t,1)||""},tx="O,Moz,ms,Ms,Webkit".split(","),go=function(e,t,i){var r=t||Bs,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(tx[a]+e in s););return a<0?null:(a===3?"ms":a>=0?tx[a]:"")+e},cm=function(){WI()&&window.document&&(Jv=window,qr=Jv.document,Ya=qr.documentElement,Bs=lm("div")||{style:{}},lm("div"),wt=go(wt),kn=wt+"Origin",Bs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",HM=!!go("perspective"),Wg=Bn.core.reverting,Gg=1)},nx=function(e){var t=e.ownerSVGElement,i=lm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ya.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ya.removeChild(i),s},ix=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},GM=function(e){var t,i;try{t=e.getBBox()}catch{t=nx(e),i=1}return t&&(t.width||t.height)||i||(t=nx(e)),t&&!t.width&&!t.x&&!t.y?{x:+ix(e,["x","cx","x1"])||0,y:+ix(e,["y","cy","y1"])||0,width:0,height:0}:t},WM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&GM(e))},cs=function(e,t){if(t){var i=e.style,r;t in wr&&t!==kn&&(t=wt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(jg,"-$1").toLowerCase())):i.removeAttribute(t)}},$r=function(e,t,i,r,s,a){var o=new On(e._pt,t,i,0,1,a?BM:kM);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},rx={deg:1,rad:1,turn:1},sU={grid:1,flex:1},us=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Bs.style,l=jI.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",g=r==="%",p,v,m,h;if(r===a||!s||rx[r]||rx[a])return s;if(a!=="px"&&!d&&(s=n(e,t,i,"px")),h=e.getCTM&&WM(e),(g||a==="%")&&(wr[t]||~t.indexOf("adius")))return p=h?e.getBBox()[l?"width":"height"]:e[u],Ut(g?s/p*f:s/100*p);if(o[l?"width":"height"]=f+(d?a:r),v=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,h&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===qr||!v.appendChild)&&(v=qr.body),m=v._gsap,m&&g&&m.width&&l&&m.time===qn.time&&!m.uncache)return Ut(s/m.width*f);if(g&&(t==="height"||t==="width")){var _=e.style[t];e.style[t]=f+r,p=e[u],_?e.style[t]=_:cs(e,t)}else(g||a==="%")&&!sU[Kn(v,"display")]&&(o.position=Kn(e,"position")),v===e&&(o.position="static"),v.appendChild(Bs),p=Bs[u],v.removeChild(Bs),o.position="absolute";return l&&g&&(m=Ws(v),m.time=qn.time,m.width=v[u]),Ut(d?p*s/f:p&&s?f/p*s:0)},ur=function(e,t,i,r){var s;return Gg||cm(),t in Wi&&t!=="transform"&&(t=Wi[t],~t.indexOf(",")&&(t=t.split(",")[0])),wr[t]&&t!=="transform"?(s=Bl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ju(Kn(e,kn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Zu[t]&&Zu[t](e,t,i)||Kn(e,t)||aM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?us(e,t,s,i)+i:s},aU=function(e,t,i,r){if(!i||i==="none"){var s=go(t,e,1),a=s&&Kn(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=Kn(e,"borderTopColor"))}var o=new On(this._pt,e.style,t,0,1,UM),l=0,c=0,u,f,d,g,p,v,m,h,_,x,S,E;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Kn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(v=e.style[t],e.style[t]=r,r=Kn(e,t)||r,v?e.style[t]=v:cs(e,t)),u=[i,r],wM(u),i=u[0],r=u[1],d=i.match(ka)||[],E=r.match(ka)||[],E.length){for(;f=ka.exec(r);)m=f[0],_=r.substring(l,f.index),p?p=(p+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(p=1),m!==(v=d[c++]||"")&&(g=parseFloat(v)||0,S=v.substr((g+"").length),m.charAt(1)==="="&&(m=$a(g,m)+S),h=parseFloat(m),x=m.substr((h+"").length),l=ka.lastIndex-x.length,x||(x=x||Jn.units[t]||S,l===r.length&&(r+=x,o.e+=x)),S!==x&&(g=us(e,t,v,x)||0),o._pt={_next:o._pt,p:_||c===1?_:",",s:g,c:h-g,m:p&&p<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?BM:kM;return tM.test(r)&&(o.e=0),this._pt=o,o},sx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},oU=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=sx[i]||i,t[1]=sx[r]||r,t.join(" ")},lU=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],wr[o]&&(l=1,o=o==="transformOrigin"?kn:wt),cs(i,o);l&&(cs(i,wt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Bl(i,1),a.uncache=1,zM(r)))}},Zu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new On(e._pt,t,i,0,0,lU);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},kl=[1,0,0,1,0,0],jM={},XM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ax=function(e){var t=Kn(e,wt);return XM(t)?kl:t.substr(7).match(eM).map(Ut)},Xg=function(e,t){var i=e._gsap||Ws(e),r=e.style,s=ax(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?kl:s):(s===kl&&!e.offsetParent&&e!==Ya&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ya.appendChild(e)),s=ax(e),l?r.display=l:cs(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ya.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},um=function(e,t,i,r,s,a){var o=e._gsap,l=s||Xg(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,d=o.yOffset||0,g=l[0],p=l[1],v=l[2],m=l[3],h=l[4],_=l[5],x=t.split(" "),S=parseFloat(x[0])||0,E=parseFloat(x[1])||0,w,C,y,M;i?l!==kl&&(C=g*m-p*v)&&(y=S*(m/C)+E*(-v/C)+(v*_-m*h)/C,M=S*(-p/C)+E*(g/C)-(g*_-p*h)/C,S=y,E=M):(w=GM(e),S=w.x+(~x[0].indexOf("%")?S/100*w.width:S),E=w.y+(~(x[1]||x[0]).indexOf("%")?E/100*w.height:E)),r||r!==!1&&o.smooth?(h=S-c,_=E-u,o.xOffset=f+(h*g+_*v)-h,o.yOffset=d+(h*p+_*m)-_):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=E,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[kn]="0px 0px",a&&($r(a,o,"xOrigin",c,S),$r(a,o,"yOrigin",u,E),$r(a,o,"xOffset",f,o.xOffset),$r(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+E)},Bl=function(e,t){var i=e._gsap||new RM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Kn(e,kn)||"0",u,f,d,g,p,v,m,h,_,x,S,E,w,C,y,M,N,P,L,U,B,z,D,k,F,W,Q,te,ne,we,De,Oe;return u=f=d=v=m=h=_=x=S=0,g=p=1,i.svg=!!(e.getCTM&&WM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[wt]!=="none"?l[wt]:"")),r.scale=r.rotate=r.translate="none"),C=Xg(e,i.svg),i.svg&&(i.uncache?(F=e.getBBox(),c=i.xOrigin-F.x+"px "+(i.yOrigin-F.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),um(e,k||c,!!k||i.originIsAbsolute,i.smooth!==!1,C)),E=i.xOrigin||0,w=i.yOrigin||0,C!==kl&&(P=C[0],L=C[1],U=C[2],B=C[3],u=z=C[4],f=D=C[5],C.length===6?(g=Math.sqrt(P*P+L*L),p=Math.sqrt(B*B+U*U),v=P||L?wa(L,P)*Rs:0,_=U||B?wa(U,B)*Rs+v:0,_&&(p*=Math.abs(Math.cos(_*Ka))),i.svg&&(u-=E-(E*P+w*U),f-=w-(E*L+w*B))):(Oe=C[6],we=C[7],Q=C[8],te=C[9],ne=C[10],De=C[11],u=C[12],f=C[13],d=C[14],y=wa(Oe,ne),m=y*Rs,y&&(M=Math.cos(-y),N=Math.sin(-y),k=z*M+Q*N,F=D*M+te*N,W=Oe*M+ne*N,Q=z*-N+Q*M,te=D*-N+te*M,ne=Oe*-N+ne*M,De=we*-N+De*M,z=k,D=F,Oe=W),y=wa(-U,ne),h=y*Rs,y&&(M=Math.cos(-y),N=Math.sin(-y),k=P*M-Q*N,F=L*M-te*N,W=U*M-ne*N,De=B*N+De*M,P=k,L=F,U=W),y=wa(L,P),v=y*Rs,y&&(M=Math.cos(y),N=Math.sin(y),k=P*M+L*N,F=z*M+D*N,L=L*M-P*N,D=D*M-z*N,P=k,z=F),m&&Math.abs(m)+Math.abs(v)>359.9&&(m=v=0,h=180-h),g=Ut(Math.sqrt(P*P+L*L+U*U)),p=Ut(Math.sqrt(D*D+Oe*Oe)),y=wa(z,D),_=Math.abs(y)>2e-4?y*Rs:0,S=De?1/(De<0?-De:De):0),i.svg&&(k=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!XM(Kn(e,wt)),k&&e.setAttribute("transform",k))),Math.abs(_)>90&&Math.abs(_)<270&&(s?(g*=-1,_+=v<=0?180:-180,v+=v<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=Ut(g),i.scaleY=Ut(p),i.rotation=Ut(v)+o,i.rotationX=Ut(m)+o,i.rotationY=Ut(h)+o,i.skewX=_+o,i.skewY=x+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[kn]=Ju(c)),i.xOffset=i.yOffset=0,i.force3D=Jn.force3D,i.renderTransform=i.svg?uU:HM?qM:cU,i.uncache=0,i},Ju=function(e){return(e=e.split(" "))[0]+" "+e[1]},th=function(e,t,i){var r=pn(t);return Ut(parseFloat(t)+parseFloat(us(e,"x",i+"px",r)))+r},cU=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,qM(e,t)},Ts="0deg",Vo="0px",ws=") ",qM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,d=i.skewX,g=i.skewY,p=i.scaleX,v=i.scaleY,m=i.transformPerspective,h=i.force3D,_=i.target,x=i.zOrigin,S="",E=h==="auto"&&e&&e!==1||h===!0;if(x&&(f!==Ts||u!==Ts)){var w=parseFloat(u)*Ka,C=Math.sin(w),y=Math.cos(w),M;w=parseFloat(f)*Ka,M=Math.cos(w),a=th(_,a,C*M*-x),o=th(_,o,-Math.sin(w)*-x),l=th(_,l,y*M*-x+x)}m!==Vo&&(S+="perspective("+m+ws),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(E||a!==Vo||o!==Vo||l!==Vo)&&(S+=l!==Vo||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ws),c!==Ts&&(S+="rotate("+c+ws),u!==Ts&&(S+="rotateY("+u+ws),f!==Ts&&(S+="rotateX("+f+ws),(d!==Ts||g!==Ts)&&(S+="skew("+d+", "+g+ws),(p!==1||v!==1)&&(S+="scale("+p+", "+v+ws),_.style[wt]=S||"translate(0, 0)"},uU=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,d=i.scaleY,g=i.target,p=i.xOrigin,v=i.yOrigin,m=i.xOffset,h=i.yOffset,_=i.forceCSS,x=parseFloat(a),S=parseFloat(o),E,w,C,y,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ka,c*=Ka,E=Math.cos(l)*f,w=Math.sin(l)*f,C=Math.sin(l-c)*-d,y=Math.cos(l-c)*d,c&&(u*=Ka,M=Math.tan(c-u),M=Math.sqrt(1+M*M),C*=M,y*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),E*=M,w*=M)),E=Ut(E),w=Ut(w),C=Ut(C),y=Ut(y)):(E=f,y=d,w=C=0),(x&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(x=us(g,"x",a,"px"),S=us(g,"y",o,"px")),(p||v||m||h)&&(x=Ut(x+p-(p*E+v*C)+m),S=Ut(S+v-(p*w+v*y)+h)),(r||s)&&(M=g.getBBox(),x=Ut(x+r/100*M.width),S=Ut(S+s/100*M.height)),M="matrix("+E+","+w+","+C+","+y+","+x+","+S+")",g.setAttribute("transform",M),_&&(g.style[wt]=M)},fU=function(e,t,i,r,s){var a=360,o=Jt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Rs:1),c=l-r,u=r+c+"deg",f,d;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*ex)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*ex)%a-~~(c/a)*a)),e._pt=d=new On(e._pt,t,i,r,c,qI),d.e=u,d.u="deg",e._props.push(i),d},ox=function(e,t){for(var i in t)e[i]=t[i];return e},dU=function(e,t,i){var r=ox({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,f,d,g,p;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[wt]=t,o=Bl(i,1),cs(i,wt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[wt],a[wt]=t,o=Bl(i,1),a[wt]=c);for(l in wr)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(g=pn(c),p=pn(u),f=g!==p?us(i,l,c,p):parseFloat(c),d=parseFloat(u),e._pt=new On(e._pt,o,l,f,d-f,om),e._pt.u=p||0,e._props.push(l));ox(o,r)};Fn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});Zu[e>1?"border"+n:n]=function(o,l,c,u,f){var d,g;if(arguments.length<4)return d=a.map(function(p){return ur(o,p,c)}),g=d.join(" "),g.split(d[0]).length===5?d[0]:g;d=(u+"").split(" "),g={},a.forEach(function(p,v){return g[p]=d[v]=d[v]||d[(v-1)/2|0]}),o.init(l,g,f)}});var $M={name:"css",register:cm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,f,d,g,p,v,m,h,_,x,S,E,w,C,y,M;Gg||cm(),this.styles=this.styles||VM(e),y=this.styles.props,this.tween=i;for(v in t)if(v!=="autoRound"&&(u=t[v],!(Wn[v]&&PM(v,t,i,r,e,s)))){if(g=typeof u,p=Zu[v],g==="function"&&(u=u.call(i,r,e,s),g=typeof u),g==="string"&&~u.indexOf("random(")&&(u=Ul(u)),p)p(this,e,v,u,i)&&(C=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),u+="",rs.lastIndex=0,rs.test(c)||(m=pn(c),h=pn(u),h?m!==h&&(c=us(e,v,c,h)+h):m&&(u+=m)),this.add(o,"setProperty",c,u,r,s,0,0,v),a.push(v),y.push(v,0,o[v]);else if(g!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(i,r,e,s):l[v],Jt(c)&&~c.indexOf("random(")&&(c=Ul(c)),pn(c+"")||c==="auto"||(c+=Jn.units[v]||pn(ur(e,v))||""),(c+"").charAt(1)==="="&&(c=ur(e,v))):c=ur(e,v),d=parseFloat(c),_=g==="string"&&u.charAt(1)==="="&&u.substr(0,2),_&&(u=u.substr(2)),f=parseFloat(u),v in Wi&&(v==="autoAlpha"&&(d===1&&ur(e,"visibility")==="hidden"&&f&&(d=0),y.push("visibility",0,o.visibility),$r(this,o,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),v!=="scale"&&v!=="transform"&&(v=Wi[v],~v.indexOf(",")&&(v=v.split(",")[0]))),x=v in wr,x){if(this.styles.save(v),M=u,g==="string"&&u.substring(0,6)==="var(--"){if(u=Kn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var N=e.style.perspective;e.style.perspective=u,u=Kn(e,"perspective"),N?e.style.perspective=N:cs(e,"perspective")}f=parseFloat(u)}if(S||(E=e._gsap,E.renderTransform&&!t.parseTransform||Bl(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,S=this._pt=new On(this._pt,o,wt,0,1,E.renderTransform,E,0,-1),S.dep=1),v==="scale")this._pt=new On(this._pt,E,"scaleY",E.scaleY,(_?$a(E.scaleY,_+f):f)-E.scaleY||0,om),this._pt.u=0,a.push("scaleY",v),v+="X";else if(v==="transformOrigin"){y.push(kn,0,o[kn]),u=oU(u),E.svg?um(e,u,0,w,0,this):(h=parseFloat(u.split(" ")[2])||0,h!==E.zOrigin&&$r(this,E,"zOrigin",E.zOrigin,h),$r(this,o,v,Ju(c),Ju(u)));continue}else if(v==="svgOrigin"){um(e,u,1,w,0,this);continue}else if(v in jM){fU(this,E,v,d,_?$a(d,_+u):u);continue}else if(v==="smoothOrigin"){$r(this,E,"smooth",E.smooth,u);continue}else if(v==="force3D"){E[v]=u;continue}else if(v==="transform"){dU(this,u,e);continue}}else v in o||(v=go(v)||v);if(x||(f||f===0)&&(d||d===0)&&!XI.test(u)&&v in o)m=(c+"").substr((d+"").length),f||(f=0),h=pn(u)||(v in Jn.units?Jn.units[v]:m),m!==h&&(d=us(e,v,c,h)),this._pt=new On(this._pt,x?E:o,v,d,(_?$a(d,_+f):f)-d,!x&&(h==="px"||v==="zIndex")&&t.autoRound!==!1?KI:om),this._pt.u=h||0,x&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=YI):m!==h&&h!=="%"&&(this._pt.b=c,this._pt.r=$I);else if(v in o)aU.call(this,e,v,c,_?_+u:u);else if(v in e)this.add(e,v,c||e[v],_?_+u:u,r,s);else if(v!=="parseTransform"){Lg(v,u);continue}x||(v in o?y.push(v,0,o[v]):typeof e[v]=="function"?y.push(v,2,e[v]()):y.push(v,1,c||e[v])),a.push(v)}}C&&FM(this)},render:function(e,t){if(t.tween._time||!Wg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ur,aliases:Wi,getSetter:function(e,t,i){var r=Wi[t];return r&&r.indexOf(",")<0&&(t=r),t in wr&&t!==kn&&(e._gsap.x||ur(e,"x"))?i&&Qv===i?t==="scale"?eU:QI:(Qv=i||{})&&(t==="scale"?tU:nU):e.style&&!Pg(e.style[t])?ZI:~t.indexOf("-")?JI:Vg(e,t)},core:{_removeProperty:cs,_getMatrix:Xg}};Bn.utils.checkPrefix=go;Bn.core.getStyleSaver=VM;(function(n,e,t,i){var r=Fn(n+","+e+","+t,function(s){wr[s]=1});Fn(e,function(s){Jn.units[s]="deg",jM[s]=1}),Wi[r[13]]=n+","+e,Fn(i,function(s){var a=s.split(":");Wi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Jn.units[n]="px"});Bn.registerPlugin($M);var ki=Bn.registerPlugin($M)||Bn;ki.core.Tween;const hU=()=>{const n=ra(),e=Z.useRef(null),[t,i]=Z.useState(null),[r,s]=Z.useState(!1);Z.useEffect(()=>{if(!e.current)return;const l=new P1;l.background=new Ke(7715837),l.fog=new Tf(7715837,15,50);const c=new jn(45,window.innerWidth/window.innerHeight,.1,100);c.position.set(0,5,20);const u=new K1({antialias:!0,alpha:!0});u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.current.appendChild(u.domElement);const f=new z1(16777215,4473924,1.2);f.position.set(0,20,0),l.add(f);const d=new H1(16777215,1.5);d.position.set(10,20,10),d.castShadow=!0,l.add(d);const g=new Wr;l.add(g);const p=(B,z,D,k,F)=>{const W=new Wr;W.userData={name:B};const Q=new bf(2.5,0),te=new ks({color:5592405,flatShading:!0,roughness:.8}),ne=new Kt(Q,te);ne.scale.set(1,.5,1),W.add(ne);const we=new wf(2.2,2.5,.5,7),De=new ks({color:z,flatShading:!0}),Oe=new Kt(we,De);Oe.position.y=1,W.add(Oe);const Y=new Af(.8,2,4),re=new ks({color:16777215,flatShading:!0}),le=new Kt(Y,re);return le.position.y=2.2,W.add(le),W.position.set(D,k,F),W},v=p("Reality River",16739179,-8,0,-5),m=p("Kind Kingdom",5090295,-4,2,-12),h=p("Mindful Mountain",5361510,6,-1,-8),_=p("Tower of Treasure",16565273,8,3,-15),x=[v,m,h,_];x.forEach(B=>g.add(B));const S=new qe;let E=0,w=5;const C=new tP,y=B=>{S.x=B.clientX/window.innerWidth*2-1,S.y=-(B.clientY/window.innerHeight)*2+1,E=S.x*3,w=5+S.y*1.5},M=B=>{C.setFromCamera(S,c);const z=C.intersectObjects(g.children,!0);if(z.length>0){let D=z[0].object;for(;D&&!D.userData.name;)D=D.parent;if(D&&D.userData.name){const k=D.userData.name;i(k),s(!0);const F=new G;D.getWorldPosition(F),ki.to(c.position,{x:F.x,y:F.y+2,z:F.z+10,duration:1.5,ease:"power3.inOut"}),ki.to(c.lookAt,{})}}};window.addEventListener("mousemove",y),window.addEventListener("click",M);const N=()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",N);const P=new G1;let L;const U=()=>{const B=P.getElapsedTime();if(x.forEach((z,D)=>{z.position.y+=Math.sin(B*1.5+D)*.005,z.rotation.y+=.002}),!t)c.position.x+=(E-c.position.x)*.02,c.position.y+=(w-c.position.y)*.02,c.lookAt(0,2,0);else{const z=g.children.find(D=>D.userData.name===t);if(z){const D=z.position.clone();D.y+=1}}u.render(l,c),L=requestAnimationFrame(U)};return U(),()=>{cancelAnimationFrame(L),window.removeEventListener("mousemove",y),window.removeEventListener("click",M),window.removeEventListener("resize",N),e.current&&(e.current.innerHTML=""),u.dispose()}},[t]);const a=()=>{n("/")},o=()=>{i(null),s(!1),window.location.reload()};return A.jsxs("div",{className:"interland-wrapper",children:[A.jsx("div",{ref:e,className:"interland-canvas-container"}),A.jsxs("div",{className:"interland-header",children:[A.jsxs("button",{className:"interland-btn-icon",onClick:a,children:[A.jsx(US,{size:24}),A.jsx("span",{children:"Exit"})]}),A.jsxs("div",{className:"interland-logo",children:[A.jsx("h2",{children:"INTERLAND"}),A.jsx("p",{children:"Be Internet Awesome."})]})]}),!t&&A.jsxs("div",{className:"interland-title-card",children:[A.jsx("h1",{children:"Play Your Way to Being Internet Awesome!"}),A.jsx("p",{children:"Explore the islands to learn digital citizenship and safety."})]}),r&&t&&A.jsxs("div",{className:"interland-action-card",children:[A.jsx("h2",{children:t}),A.jsx("p",{children:"Ready to test your skills?"}),A.jsxs("div",{className:"action-buttons",children:[A.jsxs("button",{className:"interland-btn-primary",onClick:()=>n("/interland/river"),children:[A.jsx(dC,{size:20,fill:"currentColor"})," Let's Do This!"]}),A.jsx("button",{className:"interland-btn-secondary",onClick:o,children:"Back to Map"})]})]})]})},YM=new Set(["about","after","again","against","almost","among","because","before","being","between","could","every","first","found","from","have","into","light","might","notes","other","should","their","there","these","those","through","under","using","where","which","while","would"]),lx=n=>{const e=[...n];for(let t=e.length-1;t>0;t-=1){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e},qg=n=>n.replace(/[^\x09\x0A\x0D\x20-\x7E]/g," ").replace(/\s+/g," ").trim(),pU=n=>{var e;return Array.from(new Set(((e=n.toLowerCase().match(/[a-z][a-z0-9-]{3,}/g))==null?void 0:e.filter(t=>!YM.has(t)))??[]))},mU=n=>{var t;const e=(t=n.toLowerCase().match(/[a-z][a-z0-9-]{3,}/g))==null?void 0:t.filter(i=>!YM.has(i));return e!=null&&e.length?[...e].sort((i,r)=>r.length-i.length)[0]:""},gU=(n,e)=>{const t=qg(n);if(t.length<120)return[];const i=t.split(new RegExp("(?<=[.!?])\\s+")).map(o=>o.trim()).filter(o=>o.length>=45),r=pU(t),s=i.slice(0,40),a=[];return s.forEach((o,l)=>{if(a.length>=e)return;const c=mU(o);if(!c)return;const u=o.replace(new RegExp(`\\b${c}\\b`,"i"),"____");if(u===o)return;const f=lx(r.filter(p=>p!==c&&!o.toLowerCase().includes(p))).slice(0,3);if(f.length<3)return;const d=lx([c,...f]).map(p=>p.charAt(0).toUpperCase()+p.slice(1)),g=d.findIndex(p=>p.toLowerCase()===c);g!==-1&&a.push({id:`local-${l}-${c}`,prompt:`Fill the missing term from your notes: ${u}`,options:d,answerIndex:g,explanation:o,sourceRef:`Uploaded notes segment ${l+1}`})}),a},_U=async n=>{const e=[];return await Promise.all(n.map(async t=>{try{const i=await t.text(),r=qg(i),s=(r.match(/[A-Za-z]/g)??[]).length;r.length>100&&s>r.length*.2&&e.push(`${t.name}: ${r}`)}catch{}})),e.join(" ")},vU={async buildMission({files:n,notesText:e,subject:t,questionCount:i=8}){const r=await _U(n),s=qg(`${e}
${r}`.trim()),a=gU(s,i);if(!a.length)throw new Error("Could not derive quiz questions from the current upload. Add more readable notes or enable backend mode.");return{questions:a}}},xU=()=>{const n=ra(),e=Z.useRef(null),t=Z.useRef(null),i=Z.useRef(null),{selectedSubject:r}=sa(),s=Z.useRef(null),a=Z.useRef(null),o=Z.useRef(null),[l,c]=Z.useState("setup"),[u,f]=Z.useState([]),[d,g]=Z.useState(0),[p,v]=Z.useState(0),[m,h]=Z.useState(null),[_,x]=Z.useState(!1),[S,E]=Z.useState("upload"),[w,C]=Z.useState([]),[y,M]=Z.useState(""),[N,P]=Z.useState(""),L=w.length>0||y.trim().length>50,U=u[d];Z.useEffect(()=>{if(!e.current)return;const D=new P1;D.background=new Ke(7715837),D.fog=new Tf(7715837,10,40),s.current=D;const k=new jn(50,window.innerWidth/window.innerHeight,.1,100);k.position.set(0,5,12),k.lookAt(0,0,-5);const F=new K1({antialias:!0,alpha:!0});F.setSize(window.innerWidth,window.innerHeight),F.shadowMap.enabled=!0,e.current.appendChild(F.domElement);const W=new z1(16777215,4473924,1.2);D.add(W);const Q=new H1(16777215,1.5);Q.position.set(10,20,10),Q.castShadow=!0,D.add(Q);const te=new tc(100,30),ne=new ks({color:5090295,transparent:!0,opacity:.8}),we=new Kt(te,ne);we.rotation.x=-Math.PI/2,we.position.y=-1,D.add(we);const De=new ta(20,3,10),Oe=new ks({color:6937468,flatShading:!0}),Y=new Kt(De,Oe);Y.position.set(0,-2,4),Y.receiveShadow=!0,D.add(Y);const re=new Kt(De,Oe);re.position.set(0,-2,-20),re.receiveShadow=!0,D.add(re);const le=new Wr;le.position.set(0,-.5,0),D.add(le),o.current=le;const Fe=new Wr,Ne=new ks({color:16739179,flatShading:!0}),Le=new Kt(new Af(.5,1.2,4),Ne);Le.position.y=.6,Le.castShadow=!0;const Rt=new Kt(new bf(.4,0),Ne);Rt.position.y=1.4,Rt.castShadow=!0,Fe.add(Le),Fe.add(Rt),Fe.position.set(0,-.5,2),D.add(Fe),a.current=Fe;const $e=new G1;let tt;const rt=()=>{const xt=$e.getElapsedTime();we.position.y=-1+Math.sin(xt*2)*.1,!_&&a.current&&(a.current.position.y=-.5+Math.sin(xt*3)*.05),F.render(D,k),tt=requestAnimationFrame(rt)};rt();const ze=()=>{k.aspect=window.innerWidth/window.innerHeight,k.updateProjectionMatrix(),F.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ze),()=>{cancelAnimationFrame(tt),window.removeEventListener("resize",ze),e.current&&(e.current.innerHTML=""),F.dispose()}},[_]),Z.useEffect(()=>{l==="setup"&&i.current&&ki.fromTo(i.current,{y:50,opacity:0},{y:0,opacity:1,duration:.5})},[l]),Z.useEffect(()=>{l==="playing"&&t.current&&!_&&ki.fromTo(t.current,{y:200,opacity:0},{y:0,opacity:1,duration:.6,ease:"back.out(1.2)"})},[d,l,_]);const B=async()=>{if(L){c("loading"),P("");try{const D=await vU.buildMission({files:w,notesText:y,subject:r||{id:"test",name:"General",folderId:"f1",isExam:!1}});f(D.questions),c("playing"),g(0),v(0)}catch(D){P(D instanceof Error?D.message:"Failed to load mission"),c("setup")}}},z=D=>{if(_||m!==null)return;h(D),x(!0);const k=D===U.answerIndex;if(k){if(v(F=>F+100),o.current&&a.current){const F=2-(d+1)*3,W=new ta(2,.5,2),Q=new ks({color:16565273}),te=new Kt(W,Q);te.position.set(0,-10,F),o.current.add(te),ki.to(te.position,{y:-.5,duration:.5,ease:"back.out(1.5)"}),ki.to(a.current.position,{z:F,duration:.6,delay:.2}),ki.to(a.current.position,{y:1,duration:.3,delay:.2,yoyo:!0,repeat:1})}}else t.current&&ki.fromTo(t.current,{x:-10},{x:10,duration:.1,yoyo:!0,repeat:5,ease:"linear",onComplete:()=>{ki.set(t.current,{x:0})}});setTimeout(()=>{d+1>=u.length||!k?c("complete"):(g(F=>F+1),h(null)),x(!1)},1500)};return A.jsxs("div",{className:"interland-wrapper",children:[A.jsx("div",{ref:e,className:"interland-canvas-container"}),A.jsxs("div",{className:"interland-header",children:[A.jsxs("button",{className:"interland-btn-icon",onClick:()=>n("/interland"),children:[A.jsx(US,{size:20})," Exit"]}),l==="playing"&&A.jsxs("div",{className:"hud-panel",children:[A.jsxs("span",{className:"hud-score",children:[A.jsx(og,{size:16})," ",p," XP"]}),A.jsxs("span",{className:"hud-progress",children:[A.jsx(AC,{size:16})," Q",d+1,"/",u.length]})]})]}),l==="setup"&&A.jsxs("div",{className:"interland-action-card",ref:i,style:{bottom:"20%",maxWidth:"500px"},children:[A.jsx("h2",{style:{color:"#4dabf7"},children:"Reality River"}),A.jsx("p",{children:"Don't fall for fake info! Answer correctly to build your bridge."}),A.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"15px"},children:[A.jsxs("button",{className:`interland-btn-secondary ${S==="upload"?"active":""}`,onClick:()=>E("upload"),style:{flex:1},children:[A.jsx(lg,{size:14,style:{marginRight:"5px"}})," Upload"]}),A.jsxs("button",{className:`interland-btn-secondary ${S==="paste"?"active":""}`,onClick:()=>E("paste"),style:{flex:1},children:[A.jsx(OS,{size:14,style:{marginRight:"5px"}})," Paste"]})]}),S==="upload"&&A.jsxs("div",{style:{border:"2px dashed #ccc",padding:"20px",borderRadius:"8px",cursor:"pointer",marginBottom:"20px"},onClick:()=>{var D;return(D=document.getElementById("river-upload"))==null?void 0:D.click()},children:[A.jsx("input",{id:"river-upload",type:"file",multiple:!0,style:{display:"none"},onChange:D=>C(Array.from(D.target.files||[]))}),A.jsx("p",{style:{margin:0,fontWeight:"bold"},children:w.length?`${w.length} files selected`:"Click to select notes"})]}),S==="paste"&&A.jsx("textarea",{style:{width:"100%",height:"100px",padding:"10px",borderRadius:"8px",borderColor:"#ccc",marginBottom:"20px"},placeholder:"Paste your study notes here...",value:y,onChange:D=>M(D.target.value)}),N&&A.jsxs("p",{style:{color:"#fa5252",fontWeight:700},children:[A.jsx(bC,{size:14})," ",N]}),A.jsx("button",{className:"interland-btn-primary",style:{width:"100%"},onClick:B,disabled:!L,children:"Start Building"})]}),l==="loading"&&A.jsx("div",{className:"interland-title-card",children:A.jsx("h1",{children:"Generating River Path..."})}),l==="playing"&&U&&A.jsx("div",{className:"quiz-overlay",children:A.jsxs("div",{className:"quiz-card",ref:t,children:[A.jsx("h3",{children:U.prompt}),A.jsx("div",{className:"quiz-options",children:U.options.map((D,k)=>{let F="quiz-option-btn";return m!==null&&(k===U.answerIndex?F+=" correct":k===m&&(F+=" wrong")),A.jsx("button",{className:F,disabled:m!==null,onClick:()=>z(k),children:D},k)})})]})}),l==="complete"&&A.jsxs("div",{className:"interland-action-card",style:{bottom:"20%"},children:[A.jsx("h2",{children:p>0&&m===(U==null?void 0:U.answerIndex)?"River Crossed!":"Splash! Try Again"}),A.jsxs("p",{children:["You earned ",p," XP."]}),A.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"center"},children:[A.jsxs("button",{className:"interland-btn-primary",onClick:()=>c("setup"),children:[A.jsx(mC,{size:16})," Replay"]}),A.jsxs("button",{className:"interland-btn-secondary",onClick:()=>n("/interland"),children:[A.jsx(XA,{size:16})," Done"]})]})]})]})},yU=Z.lazy(()=>PA(()=>import("./MissionGame-D-ZdKRkm.js"),[])),SU=()=>{const n=ra(),e=_f(),{user:t}=SR(),{addFolder:i,folders:r,selectedSubject:s,setSelectedSubject:a}=sa(),[o,l]=Z.useState(!1),[c,u]=Z.useState(""),[f,d]=Z.useState(!1),[g,p]=Z.useState(!1),[v,m]=Z.useState(!1),[h,_]=Z.useState(""),x=Z.useMemo(()=>e.pathname==="/library"?"Search for practice tests":e.pathname==="/study-groups"?"Flashcard sets, textbooks, questions":"Search for practice tests",[e.pathname]),S=E=>{_(E),window.setTimeout(()=>_(""),2300)};return A.jsxs("div",{className:"app-root",children:[A.jsx(BC,{activePath:e.pathname,folders:r,collapsed:o,onToggleCollapse:()=>l(E=>!E),onNavigate:E=>{if(E.startsWith("/subject/")){const w=E.replace("/subject/","");a(w)}n(E)},onAddFolder:()=>{i(`Folder ${r.length+1}`),S("New folder added.")}}),A.jsxs("main",{className:"content-shell",children:[A.jsx(OC,{searchValue:c,searchPlaceholder:x,avatarUrl:t==null?void 0:t.avatarUrl,onSearchChange:u,onOpenPracticeModal:()=>d(!0),onOpenStudyGuidesModal:()=>p(!0),onProfileClick:()=>S("Profile menu will be connected with auth settings.")}),A.jsx("div",{className:"page-scroll",children:A.jsxs(TA,{children:[A.jsx(Ui,{path:"/",element:A.jsx(UR,{onLaunchMission:()=>m(!0),onOpenPracticeModal:()=>d(!0),onShowMessage:S})}),A.jsx(Ui,{path:"/library",element:A.jsx(wR,{})}),A.jsx(Ui,{path:"/study-groups",element:A.jsx(OR,{})}),A.jsx(Ui,{path:"/flashcards",element:A.jsx(IR,{onOpenPracticeModal:()=>d(!0),onOpenStudyGuidesModal:()=>p(!0)})}),A.jsx(Ui,{path:"/subject/:subjectId",element:A.jsx(AR,{})}),A.jsx(Ui,{path:"/notifications",element:A.jsx(FR,{title:"Notifications",description:"You're all caught up. Notification actions can be wired to backend events later."})}),A.jsx(Ui,{path:"/interland",element:A.jsx(hU,{})}),A.jsx(Ui,{path:"/interland/river",element:A.jsx(xU,{})}),A.jsx(Ui,{path:"*",element:A.jsx(MA,{to:"/",replace:!0})})]})})]}),A.jsx(xR,{open:f,onClose:()=>d(!1),onGenerated:E=>S(E)}),A.jsx(Z.Suspense,{fallback:null,children:A.jsx(yU,{open:v,subject:s,onClose:()=>m(!1),onShowMessage:S})}),A.jsx(zC,{open:g,onClose:()=>p(!1),onGenerated:E=>S(E)}),h?A.jsx("div",{className:"toast",children:h}):null]})};nh.createRoot(document.getElementById("root")).render(A.jsx(xx.StrictMode,{children:A.jsx(CA,{children:A.jsx(SU,{})})}));export{ta as B,wf as C,H1 as D,Tf as F,Wr as G,z1 as H,Kt as M,O1 as O,jn as P,mC as R,P1 as S,AC as T,lg as U,K1 as W,zS as X,MU as a,oi as b,it as c,ks as d,G1 as e,ki as f,rE as g,Ke as h,og as i,A as j,OS as k,bC as l,XA as m,PC as n,Af as o,vU as p,Z as r};
