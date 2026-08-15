var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function O(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function k(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,k(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+re(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),k(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+re(a,u),c+=k(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+re(a,u++),c+=k(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return k(O(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function A(e,t,n){if(e==null)return e;var r=[],i=0;return k(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function j(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var M=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},N={map:A,forEach:function(e,t,n){A(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return A(e,function(){t++}),t},toArray:function(e){return A(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=N,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:j}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,M)}catch(e){M(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&re(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&re(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(ee)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=ee,D=function(){ne.postMessage(null)}}else D=function(){_(ee,0)};function re(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,re(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),re=Symbol.iterator;function O(e){return typeof e!=`object`||!e?null:(e=re&&e[re]||e[`@@iterator`],typeof e==`function`?e:null)}var k=Symbol.for(`react.client.reference`);function A(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===k?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?A(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return A(e(t))}catch{}}return null}var j=Array.isArray,M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},F=[],I=-1;function ie(e){return{current:e}}function ae(e){0>I||(e.current=F[I],F[I]=null,I--)}function R(e,t){I++,F[I]=e.current,e.current=t}var oe=ie(null),se=ie(null),z=ie(null),ce=ie(null);function le(e,t){switch(R(z,t),R(se,e),R(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ae(oe),R(oe,e)}function ue(){ae(oe),ae(se),ae(z)}function de(e){e.memoizedState!==null&&R(ce,e);var t=oe.current,n=Ud(t,e.type);t!==n&&(R(se,e),R(oe,n))}function fe(e){se.current===e&&(ae(oe),ae(se)),ce.current===e&&(ae(ce),$f._currentValue=P)}var pe,me;function he(e){if(pe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);pe=t&&t[1]||``,me=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+pe+e+me}var ge=!1;function _e(e,t){if(!e||ge)return``;ge=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ge=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?he(n):``}function ve(e,t){switch(e.tag){case 26:case 27:case 5:return he(e.type);case 16:return he(`Lazy`);case 13:return e.child!==t&&t!==null?he(`Suspense Fallback`):he(`Suspense`);case 19:return he(`SuspenseList`);case 0:case 15:return _e(e.type,!1);case 11:return _e(e.type.render,!1);case 1:return _e(e.type,!0);case 31:return he(`Activity`);default:return``}}function ye(e){try{var t=``,n=null;do t+=ve(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var be=Object.prototype.hasOwnProperty,xe=t.unstable_scheduleCallback,Se=t.unstable_cancelCallback,Ce=t.unstable_shouldYield,we=t.unstable_requestPaint,Te=t.unstable_now,Ee=t.unstable_getCurrentPriorityLevel,De=t.unstable_ImmediatePriority,Oe=t.unstable_UserBlockingPriority,ke=t.unstable_NormalPriority,Ae=t.unstable_LowPriority,je=t.unstable_IdlePriority,Me=t.log,Ne=t.unstable_setDisableYieldValue,Pe=null,Fe=null;function Ie(e){if(typeof Me==`function`&&Ne(e),Fe&&typeof Fe.setStrictMode==`function`)try{Fe.setStrictMode(Pe,e)}catch{}}var Le=Math.clz32?Math.clz32:ze,Re=Math.log,B=Math.LN2;function ze(e){return e>>>=0,e===0?32:31-(Re(e)/B|0)|0}var Be=256,Ve=262144,He=4194304;function Ue(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function We(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ue(n))):i=Ue(o):i=Ue(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ue(n))):i=Ue(o)):i=Ue(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ge(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ke(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qe(){var e=He;return He<<=1,!(He&62914560)&&(He=4194304),e}function Je(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function V(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ye(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Le(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Xe(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Xe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Le(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Ze(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Qe(e,t){var n=t&-t;return n=n&42?1:$e(n),(n&(e.suspendedLanes|t))===0?n:0}function $e(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function et(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function tt(){var e=N.p;return e===0?(e=window.event,e===void 0?32:hp(e.type)):e}function nt(e,t){var n=N.p;try{return N.p=e,t()}finally{N.p=n}}var rt=Math.random().toString(36).slice(2),it=`__reactFiber$`+rt,at=`__reactProps$`+rt,ot=`__reactContainer$`+rt,st=`__reactEvents$`+rt,ct=`__reactListeners$`+rt,lt=`__reactHandles$`+rt,ut=`__reactResources$`+rt,dt=`__reactMarker$`+rt;function ft(e){delete e[it],delete e[at],delete e[st],delete e[ct],delete e[lt]}function pt(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ff(e);e!==null;){if(n=e[it])return n;e=ff(e)}return t}e=n,n=e.parentNode}return null}function mt(e){if(e=e[it]||e[ot]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ht(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function gt(e){var t=e[ut];return t||=e[ut]={hoistableStyles:new Map,hoistableScripts:new Map},t}function _t(e){e[dt]=!0}var vt=new Set,yt={};function H(e,t){bt(e,t),bt(e+`Capture`,t)}function bt(e,t){for(yt[e]=t,e=0;e<t.length;e++)vt.add(t[e])}var xt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),St={},Ct={};function wt(e){return be.call(Ct,e)?!0:be.call(St,e)?!1:xt.test(e)?Ct[e]=!0:(St[e]=!0,!1)}function U(e,t,n){if(wt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Tt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Et(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Dt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ot(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function kt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function At(e){if(!e._valueTracker){var t=Ot(e)?`checked`:`value`;e._valueTracker=kt(e,t,``+e[t])}}function jt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ot(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Mt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Nt=/[\n"\\]/g;function Pt(e){return e.replace(Nt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Ft(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Dt(t)):e.value!==``+Dt(t)&&(e.value=``+Dt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Lt(e,o,Dt(n)):Lt(e,o,Dt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Dt(s):e.removeAttribute(`name`)}function It(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){At(e);return}n=n==null?``:``+Dt(n),t=t==null?n:``+Dt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),At(e)}function Lt(e,t,n){t===`number`&&Mt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Rt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Dt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function zt(e,t,n){if(t!=null&&(t=``+Dt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Dt(n)}function Bt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(j(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Dt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),At(e)}function Vt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ht=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Ut(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Ht.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Wt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Ut(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Ut(e,o,t[o])}function Gt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Kt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),W=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qt(e){return W.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function G(){}var Jt=null;function Yt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xt=null,Zt=null;function Qt(e){var t=mt(e);if(t&&(e=t.stateNode)){var n=e[at]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Ft(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Pt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[at]||null;if(!a)throw Error(i(90));Ft(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&jt(r)}break a;case`textarea`:zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Rt(e,!!n.multiple,t,!1)}}}var $t=!1;function en(e,t,n){if($t)return e(t,n);$t=!0;try{return e(t)}finally{if($t=!1,(Xt!==null||Zt!==null)&&(yu(),Xt&&(t=Xt,e=Zt,Zt=Xt=null,Qt(t),e)))for(t=0;t<e.length;t++)Qt(e[t])}}function tn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[at]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var nn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),rn=!1;if(nn)try{var an={};Object.defineProperty(an,"passive",{get:function(){rn=!0}}),window.addEventListener(`test`,an,an),window.removeEventListener(`test`,an,an)}catch{rn=!1}var on=null,sn=null,cn=null;function ln(){if(cn)return cn;var e,t=sn,n=t.length,r,i=`value`in on?on.value:on.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return cn=i.slice(e,1<r?1-r:void 0)}function un(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function K(){return!0}function dn(){return!1}function fn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?K:dn,this.isPropagationStopped=dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=K)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=K)},persist:function(){},isPersistent:K}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mn=fn(pn),hn=h({},pn,{view:0,detail:0}),gn=fn(hn),_n,vn,yn,bn=h({},hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==yn&&(yn&&e.type===`mousemove`?(_n=e.screenX-yn.screenX,vn=e.screenY-yn.screenY):vn=_n=0,yn=e),_n)},movementY:function(e){return`movementY`in e?e.movementY:vn}}),xn=fn(bn),Sn=fn(h({},bn,{dataTransfer:0})),Cn=fn(h({},hn,{relatedTarget:0})),wn=fn(h({},pn,{animationName:0,elapsedTime:0,pseudoElement:0})),Tn=fn(h({},pn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),En=fn(h({},pn,{data:0})),Dn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},On={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},kn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function An(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kn[e])?!!t[e]:!1}function jn(){return An}var Mn=fn(h({},hn,{key:function(e){if(e.key){var t=Dn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=un(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?On[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(e){return e.type===`keypress`?un(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?un(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),q=fn(h({},bn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Nn=fn(h({},hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn})),Pn=fn(h({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Fn=fn(h({},bn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),In=fn(h({},pn,{newState:0,oldState:0})),Ln=[9,13,27,32],Rn=nn&&`CompositionEvent`in window,zn=null;nn&&`documentMode`in document&&(zn=document.documentMode);var Bn=nn&&`TextEvent`in window&&!zn,Vn=nn&&(!Rn||zn&&8<zn&&11>=zn),Hn=` `,Un=!1;function Wn(e,t){switch(e){case`keyup`:return Ln.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Gn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Kn=!1;function qn(e,t){switch(e){case`compositionend`:return Gn(t);case`keypress`:return t.which===32?(Un=!0,Hn):null;case`textInput`:return e=t.data,e===Hn&&Un?null:e;default:return null}}function Jn(e,t){if(Kn)return e===`compositionend`||!Rn&&Wn(e,t)?(e=ln(),cn=sn=on=null,Kn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Vn&&t.locale!==`ko`?null:t.data;default:return null}}var Yn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Yn[e.type]:t===`textarea`}function Zn(e,t,n,r){Xt?Zt?Zt.push(r):Zt=[r]:Xt=r,t=Ed(t,`onChange`),0<t.length&&(n=new mn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Qn=null,$n=null;function er(e){yd(e,0)}function tr(e){if(jt(ht(e)))return e}function nr(e,t){if(e===`change`)return t}var rr=!1;if(nn){var ir;if(nn){var ar=`oninput`in document;if(!ar){var or=document.createElement(`div`);or.setAttribute(`oninput`,`return;`),ar=typeof or.oninput==`function`}ir=ar}else ir=!1;rr=ir&&(!document.documentMode||9<document.documentMode)}function sr(){Qn&&(Qn.detachEvent(`onpropertychange`,cr),$n=Qn=null)}function cr(e){if(e.propertyName===`value`&&tr($n)){var t=[];Zn(t,$n,e,Yt(e)),en(er,t)}}function lr(e,t,n){e===`focusin`?(sr(),Qn=t,$n=n,Qn.attachEvent(`onpropertychange`,cr)):e===`focusout`&&sr()}function ur(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return tr($n)}function dr(e,t){if(e===`click`)return tr(t)}function fr(e,t){if(e===`input`||e===`change`)return tr(t)}function pr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var mr=typeof Object.is==`function`?Object.is:pr;function hr(e,t){if(mr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!be.call(t,i)||!mr(e[i],t[i]))return!1}return!0}function gr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _r(e,t){var n=gr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=gr(n)}}function vr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Mt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mt(e.document)}return t}function br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var xr=nn&&`documentMode`in document&&11>=document.documentMode,Sr=null,Cr=null,wr=null,Tr=!1;function J(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tr||Sr==null||Sr!==Mt(r)||(r=Sr,`selectionStart`in r&&br(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&hr(wr,r)||(wr=r,r=Ed(Cr,`onSelect`),0<r.length&&(t=new mn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Sr)))}function Er(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Dr={animationend:Er(`Animation`,`AnimationEnd`),animationiteration:Er(`Animation`,`AnimationIteration`),animationstart:Er(`Animation`,`AnimationStart`),transitionrun:Er(`Transition`,`TransitionRun`),transitionstart:Er(`Transition`,`TransitionStart`),transitioncancel:Er(`Transition`,`TransitionCancel`),transitionend:Er(`Transition`,`TransitionEnd`)},Or={},kr={};nn&&(kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),`TransitionEvent`in window||delete Dr.transitionend.transition);function Ar(e){if(Or[e])return Or[e];if(!Dr[e])return e;var t=Dr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kr)return Or[e]=t[n];return e}var jr=Ar(`animationend`),Mr=Ar(`animationiteration`),Nr=Ar(`animationstart`),Pr=Ar(`transitionrun`),Fr=Ar(`transitionstart`),Ir=Ar(`transitioncancel`),Lr=Ar(`transitionend`),Rr=new Map,zr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);zr.push(`scrollEnd`);function Br(e,t){Rr.set(e,t),H(t,[e])}var Vr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Hr=[],Ur=0,Wr=0;function Gr(){for(var e=Ur,t=Wr=Ur=0;t<e;){var n=Hr[t];Hr[t++]=null;var r=Hr[t];Hr[t++]=null;var i=Hr[t];Hr[t++]=null;var a=Hr[t];if(Hr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Yr(n,i,a)}}function Kr(e,t,n,r){Hr[Ur++]=e,Hr[Ur++]=t,Hr[Ur++]=n,Hr[Ur++]=r,Wr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function qr(e,t,n,r){return Kr(e,t,n,r),Xr(e)}function Jr(e,t){return Kr(e,null,null,t),Xr(e)}function Yr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Le(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Xr(e){if(50<uu)throw uu=0,du=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Zr={};function Qr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $r(e,t,n,r){return new Qr(e,t,n,r)}function ei(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ti(e,t){var n=e.alternate;return n===null?(n=$r(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ni(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ri(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ei(e)&&(s=1);else if(typeof e==`string`)s=Wf(e,n,oe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=$r(31,n,t,a),e.elementType=te,e.lanes=o,e;case y:return ii(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=$r(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=$r(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=$r(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=$r(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ii(e,t,n,r){return e=$r(7,e,r,t),e.lanes=n,e}function ai(e,t,n){return e=$r(6,e,null,t),e.lanes=n,e}function oi(e){var t=$r(18,null,null,0);return t.stateNode=e,t}function si(e,t,n){return t=$r(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ci=new WeakMap;function li(e,t){if(typeof e==`object`&&e){var n=ci.get(e);return n===void 0?(t={value:e,source:t,stack:ye(t)},ci.set(e,t),t):n}return{value:e,source:t,stack:ye(t)}}var ui=[],di=0,fi=null,pi=0,mi=[],hi=0,gi=null,_i=1,vi=``;function yi(e,t){ui[di++]=pi,ui[di++]=fi,fi=e,pi=t}function bi(e,t,n){mi[hi++]=_i,mi[hi++]=vi,mi[hi++]=gi,gi=e;var r=_i;e=vi;var i=32-Le(r)-1;r&=~(1<<i),n+=1;var a=32-Le(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_i=1<<32-Le(t)+i|n<<i|r,vi=a+e}else _i=1<<a|n<<i|r,vi=e}function xi(e){e.return!==null&&(yi(e,1),bi(e,1,0))}function Si(e){for(;e===fi;)fi=ui[--di],ui[di]=null,pi=ui[--di],ui[di]=null;for(;e===gi;)gi=mi[--hi],mi[hi]=null,vi=mi[--hi],mi[hi]=null,_i=mi[--hi],mi[hi]=null}function Ci(e,t){mi[hi++]=_i,mi[hi++]=vi,mi[hi++]=gi,_i=t.id,vi=t.overflow,gi=e}var wi=null,Ti=null,Y=!1,Ei=null,Di=!1,Oi=Error(i(519));function ki(e){throw Fi(li(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Oi}function Ai(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[it]=e,t[at]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)$(_d[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),It(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),Bt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=G),t=!0):t=!1,t||ki(e,!0)}function ji(e){for(wi=e.return;wi;)switch(wi.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:wi=wi.return}}function Mi(e){if(e!==wi)return!1;if(!Y)return ji(e),Y=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Wd(e.type,e.memoizedProps)),n=!n),n&&Ti&&ki(e),ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ti=df(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ti=df(e)}else t===27?(t=Ti,Qd(e.type)?(e=uf,uf=null,Ti=e):Ti=t):Ti=wi?lf(e.stateNode.nextSibling):null;return!0}function Ni(){Ti=wi=null,Y=!1}function Pi(){var e=Ei;return e!==null&&(Xl===null?Xl=e:Xl.push.apply(Xl,e),Ei=null),e}function Fi(e){Ei===null?Ei=[e]:Ei.push(e)}var Ii=ie(null),Li=null,Ri=null;function zi(e,t,n){R(Ii,t._currentValue),t._currentValue=n}function Bi(e){e._currentValue=Ii.current,ae(Ii)}function Vi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Hi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Vi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Vi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ui(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;mr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ce.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[$f]:e.push($f))}a=a.return}e!==null&&Hi(t,e,n,r),t.flags|=262144}function Wi(e){for(e=e.firstContext;e!==null;){if(!mr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gi(e){Li=e,Ri=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ki(e){return Ji(Li,e)}function qi(e,t){return Li===null&&Gi(e),Ji(e,t)}function Ji(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ri===null){if(e===null)throw Error(i(308));Ri=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ri=Ri.next=t;return n}var Yi=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Xi=t.unstable_scheduleCallback,Zi=t.unstable_NormalPriority,Qi={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $i(){return{controller:new Yi,data:new Map,refCount:0}}function ea(e){e.refCount--,e.refCount===0&&Xi(Zi,function(){e.controller.abort()})}var ta=null,na=0,ra=0,ia=null;function aa(e,t){if(ta===null){var n=ta=[];na=0,ra=dd(),ia={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return na++,t.then(oa,oa),t}function oa(){if(--na===0&&ta!==null){ia!==null&&(ia.status=`fulfilled`);var e=ta;ta=null,ra=0,ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ca=M.S;M.S=function(e,t){$l=Te(),typeof t==`object`&&t&&typeof t.then==`function`&&aa(e,t),ca!==null&&ca(e,t)};var la=ie(null);function ua(){var e=la.current;return e===null?Il.pooledCache:e}function da(e,t){t===null?R(la,la.current):R(la,t.pool)}function fa(){var e=ua();return e===null?null:{parent:Qi._currentValue,pool:e}}var pa=Error(i(460)),ma=Error(i(474)),ha=Error(i(542)),ga={then:function(){}};function _a(e){return e=e.status,e===`fulfilled`||e===`rejected`}function va(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(G,G),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Sa(e),e;default:if(typeof t.status==`string`)t.then(G,G);else{if(e=Il,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Sa(e),e}throw ba=t,pa}}function ya(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ba=e,pa):e}}var ba=null;function xa(){if(ba===null)throw Error(i(459));var e=ba;return ba=null,e}function Sa(e){if(e===pa||e===ha)throw Error(i(483))}var Ca=null,wa=0;function Ta(e){var t=wa;return wa+=1,Ca===null&&(Ca=[]),va(Ca,e,t)}function Ea(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Da(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Oa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ti(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ai(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&ya(i)===t.type)?(t=a(t,n.props),Ea(t,n),t.return=e,t):(t=ri(n.type,n.key,n.props,null,e.mode,r),Ea(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=si(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ii(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ai(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ri(t.type,t.key,t.props,null,e.mode,n),Ea(n,t),n.return=e,n;case v:return t=si(t,e.mode,n),t.return=e,t;case D:return t=ya(t),f(e,t,n)}if(j(t)||O(t))return t=ii(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ta(t),n);if(t.$$typeof===C)return f(e,qi(e,t),n);Da(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=ya(n),p(e,t,n,r)}if(j(n)||O(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ta(n),r);if(n.$$typeof===C)return p(e,t,qi(e,n),r);Da(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=ya(r),m(e,t,n,r,i)}if(j(r)||O(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ta(r),i);if(r.$$typeof===C)return m(e,t,n,qi(t,r),i);Da(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),Y&&yi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return Y&&yi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),Y&&yi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),Y&&yi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return Y&&yi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),Y&&yi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&ya(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ea(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=ii(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ri(o.type,o.key,o.props,null,e.mode,c),Ea(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=si(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=ya(o),b(e,r,o,c)}if(j(o))return h(e,r,o,c);if(O(o)){if(l=O(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ta(o),c);if(o.$$typeof===C)return b(e,r,qi(e,o),c);Da(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ai(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{wa=0;var i=b(e,t,n,r);return Ca=null,i}catch(t){if(t===pa||t===ha)throw t;var a=$r(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var ka=Oa(!0),Aa=Oa(!1),ja=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Na(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Fl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Xr(e),Yr(e,null,n),t}return Kr(e,r,t,n),Xr(e)}function Ia(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ze(e,n)}}function La(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ra=!1;function za(){if(Ra){var e=ia;if(e!==null)throw e}}function Ba(e,t,n,r){Ra=!1;var i=e.updateQueue;ja=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Q&f)===f:(r&f)===f){f!==0&&f===ra&&(Ra=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:ja=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Wl|=o,e.lanes=o,e.memoizedState=d}}function Va(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ha(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Va(n[e],t)}var Ua=ie(null),Wa=ie(0);function Ga(e,t){e=Hl,R(Wa,e),R(Ua,t),Hl=e|t.baseLanes}function Ka(){R(Wa,Hl),R(Ua,Ua.current)}function qa(){Hl=Wa.current,ae(Ua),ae(Wa)}var Ja=ie(null),Ya=null;function Xa(e){var t=e.alternate;R(to,to.current&1),R(Ja,e),Ya===null&&(t===null||Ua.current!==null||t.memoizedState!==null)&&(Ya=e)}function Za(e){R(to,to.current),R(Ja,e),Ya===null&&(Ya=e)}function Qa(e){e.tag===22?(R(to,to.current),R(Ja,e),Ya===null&&(Ya=e)):$a(e)}function $a(){R(to,to.current),R(Ja,Ja.current)}function eo(e){ae(Ja),Ya===e&&(Ya=null),ae(to)}var to=ie(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ro=0,X=null,io=null,ao=null,oo=!1,so=!1,co=!1,lo=0,uo=0,fo=null,po=0;function mo(){throw Error(i(321))}function ho(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,i,a){return ro=a,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Ns:Ps,co=!1,a=n(r,i),co=!1,so&&(a=vo(t,n,r,i)),_o(e),a}function _o(e){M.H=Ms;var t=io!==null&&io.next!==null;if(ro=0,ao=io=X=null,oo=!1,uo=0,fo=null,t)throw Error(i(300));e===null||Zs||(e=e.dependencies,e!==null&&Wi(e)&&(Zs=!0))}function vo(e,t,n,r){X=e;var a=0;do{if(so&&(fo=null),uo=0,so=!1,25<=a)throw Error(i(301));if(a+=1,ao=io=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}M.H=Fs,o=t(n,r)}while(so);return o}function yo(){var e=M.H,t=e.useState()[0];return t=typeof t.then==`function`?Eo(t):t,e=e.useState()[0],(io===null?null:io.memoizedState)!==e&&(X.flags|=1024),t}function bo(){var e=lo!==0;return lo=0,e}function xo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function So(e){if(oo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}oo=!1}ro=0,ao=io=X=null,so=!1,uo=lo=0,fo=null}function Co(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ao===null?X.memoizedState=ao=e:ao=ao.next=e,ao}function wo(){if(io===null){var e=X.alternate;e=e===null?null:e.memoizedState}else e=io.next;var t=ao===null?X.memoizedState:ao.next;if(t!==null)ao=t,io=e;else{if(e===null)throw X.alternate===null?Error(i(467)):Error(i(310));io=e,e={memoizedState:io.memoizedState,baseState:io.baseState,baseQueue:io.baseQueue,queue:io.queue,next:null},ao===null?X.memoizedState=ao=e:ao=ao.next=e}return ao}function To(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var t=uo;return uo+=1,fo===null&&(fo=[]),e=va(fo,e,t),t=X,(ao===null?t.memoizedState:ao.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Ns:Ps),e}function Do(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Eo(e);if(e.$$typeof===C)return Ki(e)}throw Error(i(438,String(e)))}function Oo(e){var t=null,n=X.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=X.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=To(),X.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function ko(e,t){return typeof t==`function`?t(e):t}function Ao(e){return jo(wo(),io,e)}function jo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ro&f)===f:(Q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ra&&(d=!0);else if((ro&p)===p){u=u.next,p===ra&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,X.lanes|=p,Wl|=p;f=u.action,co&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,X.lanes|=f,Wl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!mr(o,e.memoizedState)&&(Zs=!0,d&&(n=ia,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Mo(e){var t=wo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);mr(o,t.memoizedState)||(Zs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function No(e,t,n){var r=X,a=wo(),o=Y;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!mr((io||a).memoizedState,n);if(s&&(a.memoizedState=n,Zs=!0),a=a.queue,is(Io.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ao!==null&&ao.memoizedState.tag&1){if(r.flags|=2048,$o(9,{destroy:void 0},Fo.bind(null,r,a,n,t),null),Il===null)throw Error(i(349));o||ro&127||Po(r,t,n)}return n}function Po(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t=To(),X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fo(e,t,n,r){t.value=n,t.getSnapshot=r,Lo(t)&&Ro(e)}function Io(e,t,n){return n(function(){Lo(t)&&Ro(e)})}function Lo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mr(e,n)}catch{return!0}}function Ro(e){var t=Jr(e,2);t!==null&&mu(t,e,2)}function zo(e){var t=Co();if(typeof e==`function`){var n=e;if(e=n(),co){Ie(!0);try{n()}finally{Ie(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:e},t}function Bo(e,t,n,r){return e.baseState=n,jo(e,io,typeof r==`function`?r:ko)}function Vo(e,t,n,r,a){if(ks(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};M.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ho(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ho(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=M.T,o={};M.T=o;try{var s=n(i,r),c=M.S;c!==null&&c(o,s),Uo(e,t,s)}catch(n){Go(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),M.T=a}}else try{a=n(i,r),Uo(e,t,a)}catch(n){Go(e,t,n)}}function Uo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Wo(e,t,n)},function(n){return Go(e,t,n)}):Wo(e,t,n)}function Wo(e,t,n){t.status=`fulfilled`,t.value=n,Ko(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ho(e,n)))}function Go(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Ko(t),t=t.next;while(t!==r)}e.action=null}function Ko(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function qo(e,t){return t}function Jo(e,t){if(Y){var n=Il.formState;if(n!==null){a:{var r=X;if(Y){if(Ti){b:{for(var i=Ti,a=Di;i.nodeType!==8;){if(!a){i=null;break b}if(i=lf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ti=lf(i.nextSibling),r=i.data===`F!`;break a}}ki(r)}r=!1}r&&(t=n[0])}}return n=Co(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:t},n.queue=r,n=Es.bind(null,X,r),r.dispatch=n,r=zo(!1),a=Os.bind(null,X,!1,r.queue),r=Co(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Vo.bind(null,X,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Yo(e){return Xo(wo(),io,e)}function Xo(e,t,n){if(t=jo(e,t,qo)[0],e=Ao(ko)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Eo(t)}catch(e){throw e===pa?ha:e}else r=t;t=wo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(X.flags|=2048,$o(9,{destroy:void 0},Zo.bind(null,i,n),null)),[r,a,e]}function Zo(e,t){e.action=t}function Qo(e){var t=wo(),n=io;if(n!==null)return Xo(t,n,e);wo(),t=t.memoizedState,n=wo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function $o(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=X.updateQueue,t===null&&(t=To(),X.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function es(){return wo().memoizedState}function ts(e,t,n,r){var i=Co();X.flags|=e,i.memoizedState=$o(1|t,{destroy:void 0},n,r===void 0?null:r)}function ns(e,t,n,r){var i=wo();r=r===void 0?null:r;var a=i.memoizedState.inst;io!==null&&r!==null&&ho(r,io.memoizedState.deps)?i.memoizedState=$o(t,a,n,r):(X.flags|=e,i.memoizedState=$o(1|t,a,n,r))}function rs(e,t){ts(8390656,8,e,t)}function is(e,t){ns(2048,8,e,t)}function as(e){X.flags|=4;var t=X.updateQueue;if(t===null)t=To(),X.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function os(e){var t=wo().memoizedState;return as({ref:t,nextImpl:e}),function(){if(Fl&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ss(e,t){return ns(4,2,e,t)}function cs(e,t){return ns(4,4,e,t)}function ls(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function us(e,t,n){n=n==null?null:n.concat([e]),ns(4,4,ls.bind(null,t,e),n)}function ds(){}function fs(e,t){var n=wo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&ho(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ps(e,t){var n=wo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&ho(t,r[1]))return r[0];if(r=e(),co){Ie(!0);try{e()}finally{Ie(!1)}}return n.memoizedState=[r,t],r}function ms(e,t,n){return n===void 0||ro&1073741824&&!(Q&261930)?e.memoizedState=t:(e.memoizedState=n,e=pu(),X.lanes|=e,Wl|=e,n)}function hs(e,t,n,r){return mr(n,t)?n:Ua.current===null?!(ro&42)||ro&1073741824&&!(Q&261930)?(Zs=!0,e.memoizedState=n):(e=pu(),X.lanes|=e,Wl|=e,t):(e=ms(e,n,r),mr(e,t)||(Zs=!0),e)}function gs(e,t,n,r,i){var a=N.p;N.p=a!==0&&8>a?a:8;var o=M.T,s={};M.T=s,Os(e,!1,t,n);try{var c=i(),l=M.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ds(e,t,sa(c,r),fu(e)):Ds(e,t,r,fu(e))}catch(n){Ds(e,t,{then:function(){},status:`rejected`,reason:n},fu())}finally{N.p=a,o!==null&&s.types!==null&&(o.types=s.types),M.T=o}}function _s(){}function vs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ys(e).queue;gs(e,a,t,P,n===null?_s:function(){return bs(e),n(r)})}function ys(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bs(e){var t=ys(e);t.next===null&&(t=e.alternate.memoizedState),Ds(e,t.next.queue,{},fu())}function xs(){return Ki($f)}function Ss(){return wo().memoizedState}function Cs(){return wo().memoizedState}function ws(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=fu();e=Pa(n);var r=Fa(t,e,n);r!==null&&(mu(r,t,n),Ia(r,t,n)),t={cache:$i()},e.payload=t;return}t=t.return}}function Ts(e,t,n){var r=fu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ks(e)?As(t,n):(n=qr(e,t,n,r),n!==null&&(mu(n,e,r),js(n,t,r)))}function Es(e,t,n){Ds(e,t,n,fu())}function Ds(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ks(e))As(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,mr(s,o))return Kr(e,t,i,0),Il===null&&Gr(),!1}catch{}if(n=qr(e,t,i,r),n!==null)return mu(n,e,r),js(n,t,r),!0}return!1}function Os(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ks(e)){if(t)throw Error(i(479))}else t=qr(e,n,r,2),t!==null&&mu(t,e,2)}function ks(e){var t=e.alternate;return e===X||t!==null&&t===X}function As(e,t){so=oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function js(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ze(e,n)}}var Ms={readContext:Ki,use:Do,useCallback:mo,useContext:mo,useEffect:mo,useImperativeHandle:mo,useLayoutEffect:mo,useInsertionEffect:mo,useMemo:mo,useReducer:mo,useRef:mo,useState:mo,useDebugValue:mo,useDeferredValue:mo,useTransition:mo,useSyncExternalStore:mo,useId:mo,useHostTransitionStatus:mo,useFormState:mo,useActionState:mo,useOptimistic:mo,useMemoCache:mo,useCacheRefresh:mo};Ms.useEffectEvent=mo;var Ns={readContext:Ki,use:Do,useCallback:function(e,t){return Co().memoizedState=[e,t===void 0?null:t],e},useContext:Ki,useEffect:rs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ts(4194308,4,ls.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ts(4194308,4,e,t)},useInsertionEffect:function(e,t){ts(4,2,e,t)},useMemo:function(e,t){var n=Co();t=t===void 0?null:t;var r=e();if(co){Ie(!0);try{e()}finally{Ie(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Co();if(n!==void 0){var i=n(t);if(co){Ie(!0);try{n(t)}finally{Ie(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ts.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=Co();return e={current:e},t.memoizedState=e},useState:function(e){e=zo(e);var t=e.queue,n=Es.bind(null,X,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ds,useDeferredValue:function(e,t){return ms(Co(),e,t)},useTransition:function(){var e=zo(!1);return e=gs.bind(null,X,e.queue,!0,!1),Co().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=X,a=Co();if(Y){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Il===null)throw Error(i(349));Q&127||Po(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,rs(Io.bind(null,r,o,e),[e]),r.flags|=2048,$o(9,{destroy:void 0},Fo.bind(null,r,o,n,t),null),n},useId:function(){var e=Co(),t=Il.identifierPrefix;if(Y){var n=vi,r=_i;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=lo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=po++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:xs,useFormState:Jo,useActionState:Jo,useOptimistic:function(e){var t=Co();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Os.bind(null,X,!0,n),n.dispatch=t,[e,t]},useMemoCache:Oo,useCacheRefresh:function(){return Co().memoizedState=ws.bind(null,X)},useEffectEvent:function(e){var t=Co(),n={impl:e};return t.memoizedState=n,function(){if(Fl&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ps={readContext:Ki,use:Do,useCallback:fs,useContext:Ki,useEffect:is,useImperativeHandle:us,useInsertionEffect:ss,useLayoutEffect:cs,useMemo:ps,useReducer:Ao,useRef:es,useState:function(){return Ao(ko)},useDebugValue:ds,useDeferredValue:function(e,t){return hs(wo(),io.memoizedState,e,t)},useTransition:function(){var e=Ao(ko)[0],t=wo().memoizedState;return[typeof e==`boolean`?e:Eo(e),t]},useSyncExternalStore:No,useId:Ss,useHostTransitionStatus:xs,useFormState:Yo,useActionState:Yo,useOptimistic:function(e,t){return Bo(wo(),io,e,t)},useMemoCache:Oo,useCacheRefresh:Cs};Ps.useEffectEvent=os;var Fs={readContext:Ki,use:Do,useCallback:fs,useContext:Ki,useEffect:is,useImperativeHandle:us,useInsertionEffect:ss,useLayoutEffect:cs,useMemo:ps,useReducer:Mo,useRef:es,useState:function(){return Mo(ko)},useDebugValue:ds,useDeferredValue:function(e,t){var n=wo();return io===null?ms(n,e,t):hs(n,io.memoizedState,e,t)},useTransition:function(){var e=Mo(ko)[0],t=wo().memoizedState;return[typeof e==`boolean`?e:Eo(e),t]},useSyncExternalStore:No,useId:Ss,useHostTransitionStatus:xs,useFormState:Qo,useActionState:Qo,useOptimistic:function(e,t){var n=wo();return io===null?(n.baseState=e,[e,n.queue.dispatch]):Bo(n,io,e,t)},useMemoCache:Oo,useCacheRefresh:Cs};Fs.useEffectEvent=os;function Is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ls={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fu(),i=Pa(r);i.payload=t,n!=null&&(i.callback=n),t=Fa(e,i,r),t!==null&&(mu(t,e,r),Ia(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fu(),i=Pa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Fa(e,i,r),t!==null&&(mu(t,e,r),Ia(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fu(),r=Pa(n);r.tag=2,t!=null&&(r.callback=t),t=Fa(e,r,n),t!==null&&(mu(t,e,n),Ia(t,e,n))}};function Rs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!hr(n,r)||!hr(i,a):!0}function zs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ls.enqueueReplaceState(t,t.state,null)}function Bs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Vs(e){Vr(e)}function Hs(e){console.error(e)}function Us(e){Vr(e)}function Ws(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Gs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ks(e,t,n){return n=Pa(n),n.tag=3,n.payload={element:null},n.callback=function(){Ws(e,t)},n}function qs(e){return e=Pa(e),e.tag=3,e}function Js(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Gs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Gs(t,n,r),typeof i!=`function`&&(nu===null?nu=new Set([this]):nu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Ys(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ui(t,n,a,!0),n=Ja.current,n!==null){switch(n.tag){case 31:case 13:return Ya===null?Eu():n.alternate===null&&Ul===0&&(Ul=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ga?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ga?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Eu(),!1}if(Y)return t=Ja.current,t===null?(r!==Oi&&(t=Error(i(423),{cause:r}),Fi(li(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=li(r,n),a=Ks(e.stateNode,r,a),La(e,a),Ul!==4&&(Ul=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Oi&&(e=Error(i(422),{cause:r}),Fi(li(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=li(o,n),Yl===null?Yl=[o]:Yl.push(o),Ul!==4&&(Ul=2),t===null)return!0;r=li(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ks(n.stateNode,r,e),La(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(nu===null||!nu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=qs(a),Js(a,e,n,r),La(n,a),!1}n=n.return}while(n!==null);return!1}var Xs=Error(i(461)),Zs=!1;function Qs(e,t,n,r){t.child=e===null?Aa(t,null,n,r):ka(t,e.child,n,r)}function $s(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Gi(t),r=go(e,t,n,o,a,i),s=bo(),e!==null&&!Zs?(xo(e,t,i),Cc(e,t,i)):(Y&&s&&xi(t),t.flags|=1,Qs(e,t,r,i),t.child)}function ec(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ei(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,tc(e,t,a,r,i)):(e=ri(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!wc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?hr:n,n(o,r)&&e.ref===t.ref)return Cc(e,t,i)}return t.flags|=1,e=ti(a,r),e.ref=t.ref,e.return=t,t.child=e}function tc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(hr(a,r)&&e.ref===t.ref){if(Zs=!1,t.pendingProps=r=a,wc(e,i))e.flags&131072&&(Zs=!0);else return t.lanes=e.lanes,Cc(e,t,i)}}return lc(e,t,n,r,i)}function nc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return ic(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&da(t,a===null?null:a.cachePool),a===null?Ka():Ga(t,a),Qa(t);else return r=t.lanes=536870912,ic(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&da(t,null),Ka(),$a(t)):(da(t,a.cachePool),Ga(t,a),$a(t),t.memoizedState=null);return Qs(e,t,i,n),t.child}function rc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ic(e,t,n,r,i){var a=ua();return a=a===null?null:{parent:Qi._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&da(t,null),Ka(),Qa(t),e!==null&&Ui(e,t,r,!0),t.childLanes=i,null}function ac(e,t){return t=vc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function oc(e,t,n){return ka(t,e.child,null,n),e=ac(t,t.pendingProps),e.flags|=2,eo(t),t.memoizedState=null,e}function sc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(Y){if(r.mode===`hidden`)return e=ac(t,r),t.lanes=536870912,rc(null,e);if(Za(t),(e=Ti)?(e=af(e,Di),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:gi===null?null:{id:_i,overflow:vi},retryLane:536870912,hydrationErrors:null},n=oi(e),n.return=t,t.child=n,wi=t,Ti=null)):e=null,e===null)throw ki(t);return t.lanes=536870912,null}return ac(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Za(t),a){if(t.flags&256)t.flags&=-257,t=oc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Zs||Ui(e,t,n,!1),a=(n&e.childLanes)!==0,Zs||a){if(r=Il,r!==null&&(s=Qe(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Jr(e,s),mu(r,e,s),Xs;Eu(),t=oc(e,t,n)}else e=o.treeContext,Ti=lf(s.nextSibling),wi=t,Y=!0,Ei=null,Di=!1,e!==null&&Ci(t,e),t=ac(t,r),t.flags|=4096;return t}return e=ti(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function cc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function lc(e,t,n,r,i){return Gi(t),n=go(e,t,n,r,void 0,i),r=bo(),e!==null&&!Zs?(xo(e,t,i),Cc(e,t,i)):(Y&&r&&xi(t),t.flags|=1,Qs(e,t,n,i),t.child)}function uc(e,t,n,r,i,a){return Gi(t),t.updateQueue=null,n=vo(t,r,n,i),_o(e),r=bo(),e!==null&&!Zs?(xo(e,t,a),Cc(e,t,a)):(Y&&r&&xi(t),t.flags|=1,Qs(e,t,n,a),t.child)}function dc(e,t,n,r,i){if(Gi(t),t.stateNode===null){var a=Zr,o=n.contextType;typeof o==`object`&&o&&(a=Ki(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ls,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ma(t),o=n.contextType,a.context=typeof o==`object`&&o?Ki(o):Zr,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Is(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ls.enqueueReplaceState(a,a.state,null),Ba(t,r,a,i),za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Bs(n,s);a.props=c;var l=a.context,u=n.contextType;o=Zr,typeof u==`object`&&u&&(o=Ki(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&zs(t,a,r,o),ja=!1;var f=t.memoizedState;a.state=f,Ba(t,r,a,i),za(),l=t.memoizedState,s||f!==l||ja?(typeof d==`function`&&(Is(t,n,d,r),l=t.memoizedState),(c=ja||Rs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Na(e,t),o=t.memoizedProps,u=Bs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Zr,typeof l==`object`&&l&&(c=Ki(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&zs(t,a,r,c),ja=!1,f=t.memoizedState,a.state=f,Ba(t,r,a,i),za();var p=t.memoizedState;o!==d||f!==p||ja||e!==null&&e.dependencies!==null&&Wi(e.dependencies)?(typeof s==`function`&&(Is(t,n,s,r),p=t.memoizedState),(u=ja||Rs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Wi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,cc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=ka(t,e.child,null,i),t.child=ka(t,null,n,i)):Qs(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Cc(e,t,i),e}function fc(e,t,n,r){return Ni(),t.flags|=256,Qs(e,t,n,r),t.child}var pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mc(e){return{baseLanes:e,cachePool:fa()}}function hc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ql),e}function gc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(to.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(Y){if(a?Xa(t):$a(t),(e=Ti)?(e=af(e,Di),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:gi===null?null:{id:_i,overflow:vi},retryLane:536870912,hydrationErrors:null},n=oi(e),n.return=t,t.child=n,wi=t,Ti=null)):e=null,e===null)throw ki(t);return sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?($a(t),a=t.mode,c=vc({mode:`hidden`,children:c},a),r=ii(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=mc(n),r.childLanes=hc(e,s,n),t.memoizedState=pc,rc(null,r)):(Xa(t),_c(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(Xa(t),t.flags&=-257,t=yc(e,t,n)):t.memoizedState===null?($a(t),c=r.fallback,a=t.mode,r=vc({mode:`visible`,children:r.children},a),c=ii(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,ka(t,e.child,null,n),r=t.child,r.memoizedState=mc(n),r.childLanes=hc(e,s,n),t.memoizedState=pc,t=rc(null,r)):($a(t),t.child=e.child,t.flags|=128,t=null);else if(Xa(t),sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Fi({value:r,source:null,stack:null}),t=yc(e,t,n)}else if(Zs||Ui(e,t,n,!1),s=(n&e.childLanes)!==0,Zs||s){if(s=Il,s!==null&&(r=Qe(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Jr(e,r),mu(s,e,r),Xs;of(c)||Eu(),t=yc(e,t,n)}else of(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ti=lf(c.nextSibling),wi=t,Y=!0,Ei=null,Di=!1,e!==null&&Ci(t,e),t=_c(t,r.children),t.flags|=4096);return t}return a?($a(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ti(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=ii(c,a,n,null),c.flags|=2):c=ti(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,rc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=mc(n):(a=c.cachePool,a===null?a=fa():(l=Qi._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=hc(e,s,n),t.memoizedState=pc,rc(e.child,r)):(Xa(t),n=e.child,e=n.sibling,n=ti(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function _c(e,t){return t=vc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function vc(e,t){return e=$r(22,e,null,t),e.lanes=0,e}function yc(e,t,n){return ka(t,e.child,null,n),e=_c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vi(e.return,t,n)}function xc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Sc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=to.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,R(to,o),Qs(e,t,r,n),r=Y?pi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,n,t);else if(e.tag===19)bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&no(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&no(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xc(t,!0,n,null,a,r);break;case`together`:xc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Cc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Ui(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ti(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ti(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Wi(e)))}function Tc(e,t,n){switch(t.tag){case 3:le(t,t.stateNode.containerInfo),zi(t,Qi,e.memoizedState.cache),Ni();break;case 27:case 5:de(t);break;case 4:le(t,t.stateNode.containerInfo);break;case 10:zi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Za(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Xa(t),e=Cc(e,t,n),e===null?null:e.sibling):gc(e,t,n):(Xa(t),t.flags|=128,null);Xa(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(Ui(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Sc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),R(to,to.current),r)break;return null;case 22:return t.lanes=0,nc(e,t,n,t.pendingProps);case 24:zi(t,Qi,e.memoizedState.cache)}return Cc(e,t,n)}function Ec(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Zs=!0;else{if(!wc(e,n)&&!(t.flags&128))return Zs=!1,Tc(e,t,n);Zs=!!(e.flags&131072)}}else Zs=!1,Y&&t.flags&1048576&&bi(t,pi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ya(t.elementType),t.type=e,typeof e==`function`)ei(e)?(r=Bs(e,r),t.tag=1,t=dc(null,t,e,r,n)):(t.tag=0,t=lc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=$s(null,t,e,r,n);break a}if(a===ee){t.tag=14,t=ec(null,t,e,r,n);break a}}throw t=A(e)||e,Error(i(306,t,``))}}return t;case 0:return lc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Bs(r,t.pendingProps),dc(e,t,r,a,n);case 3:a:{if(le(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Na(e,t),Ba(t,r,null,n);var s=t.memoizedState;if(r=s.cache,zi(t,Qi,r),r!==o.cache&&Hi(t,[Qi],n,!0),za(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=fc(e,t,r,n);break a}if(r!==a){a=li(Error(i(424)),t),Fi(a),t=fc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ti=lf(e.firstChild),wi=t,Y=!0,Ei=null,Di=!0,n=Aa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ni(),r===a){t=Cc(e,t,n);break a}Qs(e,t,r,n)}t=t.child}return t;case 26:return cc(e,t),e===null?(n=Af(t.type,null,t.pendingProps,null))?t.memoizedState=n:Y||(n=t.type,e=t.pendingProps,r=Vd(z.current).createElement(n),r[it]=t,r[at]=e,Fd(r,n,e),_t(r),t.stateNode=r):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return de(t),e===null&&Y&&(r=t.stateNode=pf(t.type,t.pendingProps,z.current),wi=t,Di=!0,a=Ti,Qd(t.type)?(uf=a,Ti=lf(r.firstChild)):Ti=a),Qs(e,t,t.pendingProps.children,n),cc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Y&&((a=r=Ti)&&(r=nf(r,t.type,t.pendingProps,Di),r===null?a=!1:(t.stateNode=r,wi=t,Ti=lf(r.firstChild),Di=!1,a=!0)),a||ki(t)),de(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=go(e,t,yo,null,null,n),$f._currentValue=a),cc(e,t),Qs(e,t,r,n),t.child;case 6:return e===null&&Y&&((e=n=Ti)&&(n=rf(n,t.pendingProps,Di),n===null?e=!1:(t.stateNode=n,wi=t,Ti=null,e=!0)),e||ki(t)),null;case 13:return gc(e,t,n);case 4:return le(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ka(t,null,r,n):Qs(e,t,r,n),t.child;case 11:return $s(e,t,t.type,t.pendingProps,n);case 7:return Qs(e,t,t.pendingProps,n),t.child;case 8:return Qs(e,t,t.pendingProps.children,n),t.child;case 12:return Qs(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,zi(t,t.type,r.value),Qs(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Gi(t),a=Ki(a),r=r(a),t.flags|=1,Qs(e,t,r,n),t.child;case 14:return ec(e,t,t.type,t.pendingProps,n);case 15:return tc(e,t,t.type,t.pendingProps,n);case 19:return Sc(e,t,n);case 31:return sc(e,t,n);case 22:return nc(e,t,n,t.pendingProps);case 24:return Gi(t),r=Ki(Qi),e===null?(a=ua(),a===null&&(a=Il,o=$i(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ma(t),zi(t,Qi,a)):((e.lanes&n)!==0&&(Na(e,t),Ba(t,null,null,n),za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,zi(t,Qi,r),r!==a.cache&&Hi(t,[Qi],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),zi(t,Qi,r))),Qs(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Dc(e){e.flags|=4}function Oc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Cu())e.flags|=8192;else throw ba=ga,ma}}else e.flags&=-16777217}function kc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t)){if(Cu())e.flags|=8192;else throw ba=ga,ma}}function Ac(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:qe(),e.lanes|=t,Jl|=t)}function jc(e,t){if(!Y)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Mc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nc(e,t,n){var r=t.pendingProps;switch(Si(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mc(t),null;case 1:return Mc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Bi(Qi),ue(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Mi(t)?Dc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pi())),Mc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Dc(t),o===null?(Mc(t),Oc(t,a,null,r,n)):(Mc(t),kc(t,o))):o?o===e.memoizedState?(Mc(t),t.flags&=-16777217):(Dc(t),Mc(t),kc(t,o)):(e=e.memoizedProps,e!==r&&Dc(t),Mc(t),Oc(t,a,e,r,n)),null;case 27:if(fe(t),n=z.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Mc(t),null}e=oe.current,Mi(t)?Ai(t,e):(e=pf(a,r,n),t.stateNode=e,Dc(t))}return Mc(t),null;case 5:if(fe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Mc(t),null}if(o=oe.current,Mi(t))Ai(t,o);else{var s=Vd(z.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[it]=t,o[at]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Fd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Dc(t)}}return Mc(t),Oc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=z.current,Mi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=wi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||ki(t,!0)}else e=Vd(e).createTextNode(r),e[it]=t,t.stateNode=e}return Mc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Mi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[it]=t}else Ni(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mc(t),e=!1}else n=Pi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(eo(t),t):(eo(t),null);if(t.flags&128)throw Error(i(558))}return Mc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Mi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[it]=t}else Ni(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mc(t),a=!1}else a=Pi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(eo(t),t):(eo(t),null)}return eo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ac(t,t.updateQueue),Mc(t),null);case 4:return ue(),e===null&&Sd(t.stateNode.containerInfo),Mc(t),null;case 10:return Bi(t.type),Mc(t),null;case 19:if(ae(to),r=t.memoizedState,r===null)return Mc(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)jc(r,!1);else{if(Ul!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=no(e),o!==null){for(t.flags|=128,jc(r,!1),e=o.updateQueue,t.updateQueue=e,Ac(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ni(n,e),n=n.sibling;return R(to,to.current&1|2),Y&&yi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Te()>eu&&(t.flags|=128,a=!0,jc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=no(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ac(t,e),jc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!Y)return Mc(t),null}else 2*Te()-r.renderingStartTime>eu&&n!==536870912&&(t.flags|=128,a=!0,jc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Mc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Te(),e.sibling=null,n=to.current,R(to,a?n&1|2:n&1),Y&&yi(t,r.treeForkCount),e);case 22:case 23:return eo(t),qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Mc(t),t.subtreeFlags&6&&(t.flags|=8192)):Mc(t),n=t.updateQueue,n!==null&&Ac(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ae(la),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bi(Qi),Mc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Pc(e,t){switch(Si(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bi(Qi),ue(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return fe(t),null;case 31:if(t.memoizedState!==null){if(eo(t),t.alternate===null)throw Error(i(340));Ni()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(eo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ni()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(to),null;case 4:return ue(),null;case 10:return Bi(t.type),null;case 22:case 23:return eo(t),qa(),e!==null&&ae(la),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bi(Qi),null;case 25:return null;default:return null}}function Fc(e,t){switch(Si(t),t.tag){case 3:Bi(Qi),ue();break;case 26:case 27:case 5:fe(t);break;case 4:ue();break;case 31:t.memoizedState!==null&&eo(t);break;case 13:eo(t);break;case 19:ae(to);break;case 10:Bi(t.type);break;case 22:case 23:eo(t),qa(),e!==null&&ae(la);break;case 24:Bi(Qi)}}function Ic(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Wu(t,t.return,e)}}function Lc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Wu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Wu(t,t.return,e)}}function Rc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ha(t,n)}catch(t){Wu(e,e.return,t)}}}function zc(e,t,n){n.props=Bs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Wu(e,t,n)}}function Bc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Wu(e,t,n)}}function Vc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Wu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Wu(e,t,n)}else n.current=null}}function Hc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Wu(e,e.return,t)}}function Uc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[at]=t}catch(t){Wu(e,e.return,t)}}function Wc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qd(e.type)||e.tag===4}function Gc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=G));else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Kc(e,t,n),e=e.sibling;e!==null;)Kc(e,t,n),e=e.sibling}function qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}function Jc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fd(t,r,n),t[it]=e,t[at]=n}catch(t){Wu(e,e.return,t)}}var Yc=!1,Xc=!1,Zc=!1,Qc=typeof WeakSet==`function`?WeakSet:Set,$c=null;function el(e,t){if(e=e.containerInfo,zd=cp,e=yr(e),br(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},cp=!1,$c=t;$c!==null;)if(t=$c,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,$c=e;else for(;$c!==null;){switch(t=$c,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Bs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Wu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:tf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,$c=e;break}$c=t.return}}function tl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:gl(e,n),r&4&&Ic(5,n);break;case 1:if(gl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Wu(n,n.return,e)}else{var i=Bs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Wu(n,n.return,e)}}}r&64&&Rc(n),r&512&&Bc(n,n.return);break;case 3:if(gl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ha(e,t)}catch(e){Wu(n,n.return,e)}}break;case 27:t===null&&r&4&&Jc(n);case 26:case 5:gl(e,n),t===null&&r&4&&Hc(n),r&512&&Bc(n,n.return);break;case 12:gl(e,n);break;case 31:gl(e,n),r&4&&sl(e,n);break;case 13:gl(e,n),r&4&&cl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),cf(e,n))));break;case 22:if(r=n.memoizedState!==null||Yc,!r){t=t!==null&&t.memoizedState!==null||Xc,i=Yc;var a=Xc;Yc=r,(Xc=t)&&!a?vl(e,n,!!(n.subtreeFlags&8772)):gl(e,n),Yc=i,Xc=a}break;case 30:break;default:gl(e,n)}}function nl(e){var t=e.alternate;t!==null&&(e.alternate=null,nl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ft(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rl=null,il=!1;function al(e,t,n){for(n=n.child;n!==null;)ol(e,t,n),n=n.sibling}function ol(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount==`function`)try{Fe.onCommitFiberUnmount(Pe,n)}catch{}switch(n.tag){case 26:Xc||Vc(n,t),al(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xc||Vc(n,t);var r=rl,i=il;Qd(n.type)&&(rl=n.stateNode,il=!1),al(e,t,n),mf(n.stateNode),rl=r,il=i;break;case 5:Xc||Vc(n,t);case 6:if(r=rl,i=il,rl=null,al(e,t,n),rl=r,il=i,rl!==null){if(il)try{(rl.nodeType===9?rl.body:rl.nodeName===`HTML`?rl.ownerDocument.body:rl).removeChild(n.stateNode)}catch(e){Wu(n,t,e)}else try{rl.removeChild(n.stateNode)}catch(e){Wu(n,t,e)}}break;case 18:rl!==null&&(il?(e=rl,$d(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):$d(rl,n.stateNode));break;case 4:r=rl,i=il,rl=n.stateNode.containerInfo,il=!0,al(e,t,n),rl=r,il=i;break;case 0:case 11:case 14:case 15:Lc(2,n,t),Xc||Lc(4,n,t),al(e,t,n);break;case 1:Xc||(Vc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&zc(n,t,r)),al(e,t,n);break;case 21:al(e,t,n);break;case 22:Xc=(r=Xc)||n.memoizedState!==null,al(e,t,n),Xc=r;break;default:al(e,t,n)}}function sl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){Wu(t,t.return,e)}}}function cl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){Wu(t,t.return,e)}}function ll(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qc),t;default:throw Error(i(435,e.tag))}}function ul(e,t){var n=ll(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function dl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Qd(c.type)){rl=c.stateNode,il=!1;break a}break;case 5:rl=c.stateNode,il=!1;break a;case 3:case 4:rl=c.stateNode.containerInfo,il=!0;break a}c=c.return}if(rl===null)throw Error(i(160));ol(o,s,a),rl=null,il=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)pl(t,e),t=t.sibling}var fl=null;function pl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dl(t,e),ml(e),r&4&&(Lc(3,e,e.return),Ic(3,e),Lc(5,e,e.return));break;case 1:dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),r&64&&Yc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=fl;if(dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[dt]||o[it]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Fd(o,r,n),o[it]=e,_t(o),r=o;break a;case`link`:var s=Hf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Hf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[it]=e,_t(o),r=o}e.stateNode=r}else Uf(a,e.type,e.stateNode)}else e.stateNode=Lf(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Uc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Uf(a,e.type,e.stateNode):Lf(a,r,e.memoizedProps))}break;case 27:dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),n!==null&&r&4&&Uc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),e.flags&32){a=e.stateNode;try{Vt(a,``)}catch(t){Wu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Uc(e,a,n===null?a:n.memoizedProps)),r&1024&&(Zc=!0);break;case 6:if(dl(t,e),ml(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Wu(e,e.return,t)}}break;case 3:if(Vf=null,a=fl,fl=_f(t.containerInfo),dl(t,e),fl=a,ml(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){Wu(e,e.return,t)}Zc&&(Zc=!1,hl(e));break;case 4:r=fl,fl=_f(e.stateNode.containerInfo),dl(t,e),ml(e),fl=r;break;case 12:dl(t,e),ml(e);break;case 31:dl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 13:dl(t,e),ml(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ql=Te()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Yc,d=Xc;if(Yc=u||a,Xc=d||l,dl(t,e),Xc=d,Yc=u,ml(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Yc||Xc||_l(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Wu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Wu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?ef(m,!0):ef(l.stateNode,!1)}catch(e){Wu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ul(e,n))));break;case 19:dl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 30:break;case 21:break;default:dl(t,e),ml(e)}}function ml(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Wc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;qc(e,Gc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Vt(o,``),n.flags&=-33),qc(e,Gc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Kc(e,Gc(e),s);break;default:throw Error(i(161))}}catch(t){Wu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;hl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function gl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tl(e,t.alternate,t),t=t.sibling}function _l(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Lc(4,t,t.return),_l(t);break;case 1:Vc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&zc(t,t.return,n),_l(t);break;case 27:mf(t.stateNode);case 26:case 5:Vc(t,t.return),_l(t);break;case 22:t.memoizedState===null&&_l(t);break;case 30:_l(t);break;default:_l(t)}e=e.sibling}}function vl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:vl(i,a,n),Ic(4,a);break;case 1:if(vl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Wu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Va(c[i],s)}catch(e){Wu(r,r.return,e)}}n&&o&64&&Rc(a),Bc(a,a.return);break;case 27:Jc(a);case 26:case 5:vl(i,a,n),n&&r===null&&o&4&&Hc(a),Bc(a,a.return);break;case 12:vl(i,a,n);break;case 31:vl(i,a,n),n&&o&4&&sl(i,a);break;case 13:vl(i,a,n),n&&o&4&&cl(i,a);break;case 22:a.memoizedState===null&&vl(i,a,n),Bc(a,a.return);break;case 30:break;default:vl(i,a,n)}t=t.sibling}}function yl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ea(n))}function bl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ea(e))}function xl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sl(e,t,n,r),t=t.sibling}function Sl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:xl(e,t,n,r),i&2048&&Ic(9,t);break;case 1:xl(e,t,n,r);break;case 3:xl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ea(e)));break;case 12:if(i&2048){xl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Wu(t,t.return,e)}}else xl(e,t,n,r);break;case 31:xl(e,t,n,r);break;case 13:xl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?xl(e,t,n,r):(a._visibility|=2,Cl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?xl(e,t,n,r):wl(e,t),i&2048&&yl(o,t);break;case 24:xl(e,t,n,r),i&2048&&bl(t.alternate,t);break;default:xl(e,t,n,r)}}function Cl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Cl(a,o,s,c,i),Ic(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Cl(a,o,s,c,i)):u._visibility&2?Cl(a,o,s,c,i):wl(a,o),i&&l&2048&&yl(o.alternate,o);break;case 24:Cl(a,o,s,c,i),i&&l&2048&&bl(o.alternate,o);break;default:Cl(a,o,s,c,i)}t=t.sibling}}function wl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:wl(n,r),i&2048&&yl(r.alternate,r);break;case 24:wl(n,r),i&2048&&bl(r.alternate,r);break;default:wl(n,r)}t=t.sibling}}var Tl=8192;function El(e,t,n){if(e.subtreeFlags&Tl)for(e=e.child;e!==null;)Dl(e,t,n),e=e.sibling}function Dl(e,t,n){switch(e.tag){case 26:El(e,t,n),e.flags&Tl&&e.memoizedState!==null&&Kf(n,fl,e.memoizedState,e.memoizedProps);break;case 5:El(e,t,n);break;case 3:case 4:var r=fl;fl=_f(e.stateNode.containerInfo),El(e,t,n),fl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Tl,Tl=16777216,El(e,t,n),Tl=r):El(e,t,n));break;default:El(e,t,n)}}function Ol(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function kl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];$c=r,Ml(r,e)}Ol(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Al(e),e=e.sibling}function Al(e){switch(e.tag){case 0:case 11:case 15:kl(e),e.flags&2048&&Lc(9,e,e.return);break;case 3:kl(e);break;case 12:kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,jl(e)):kl(e);break;default:kl(e)}}function jl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];$c=r,Ml(r,e)}Ol(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Lc(8,t,t.return),jl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,jl(t));break;default:jl(t)}e=e.sibling}}function Ml(e,t){for(;$c!==null;){var n=$c;switch(n.tag){case 0:case 11:case 15:Lc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ea(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,$c=r;else a:for(n=e;$c!==null;){r=$c;var i=r.sibling,a=r.return;if(nl(r),r===n){$c=null;break a}if(i!==null){i.return=a,$c=i;break a}$c=a}}}var Nl={getCacheForType:function(e){var t=Ki(Qi),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ki(Qi).controller.signal}},Pl=typeof WeakMap==`function`?WeakMap:Map,Fl=0,Il=null,Z=null,Q=0,Ll=0,Rl=null,zl=!1,Bl=!1,Vl=!1,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=null,Xl=null,Zl=!1,Ql=0,$l=0,eu=1/0,tu=null,nu=null,ru=0,iu=null,au=null,ou=0,su=0,cu=null,lu=null,uu=0,du=null;function fu(){return Fl&2&&Q!==0?Q&-Q:M.T===null?tt():dd()}function pu(){if(ql===0){if(!(Q&536870912)||Y){var e=Ve;Ve<<=1,!(Ve&3932160)&&(Ve=262144),ql=e}else ql=536870912}return e=Ja.current,e!==null&&(e.flags|=32),ql}function mu(e,t,n){(e===Il&&(Ll===2||Ll===9)||e.cancelPendingCommit!==null)&&(xu(e,0),vu(e,Q,ql,!1)),V(e,n),(!(Fl&2)||e!==Il)&&(e===Il&&(!(Fl&2)&&(Gl|=n),Ul===4&&vu(e,Q,ql,!1)),rd(e))}function hu(e,t,n){if(Fl&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Ge(e,t),a=r?ku(e,t):Du(e,t,!0),o=r;do{if(a===0){Bl&&!r&&vu(e,t,0,!1);break}if(n=e.current.alternate,o&&!_u(n)){a=Du(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Yl;var l=c.current.memoizedState.isDehydrated;if(l&&(xu(c,s).flags|=256),s=Du(c,s,!1),s!==2){if(Vl&&!l){c.errorRecoveryDisabledLanes|=o,Gl|=o,a=4;break a}o=Xl,Xl=a,o!==null&&(Xl===null?Xl=o:Xl.push.apply(Xl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){xu(e,0),vu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:vu(r,t,ql,!zl);break a;case 2:Xl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Ql+300-Te(),10<a)){if(vu(r,t,ql,!zl),We(r,0,!0)!==0)break a;ou=t,r.timeoutHandle=qd(gu.bind(null,r,n,Xl,tu,Zl,t,ql,Gl,Jl,zl,o,`Throttled`,-0,0),a);break a}gu(r,n,Xl,tu,Zl,t,ql,Gl,Jl,zl,o,null,-0,0)}break}while(1);rd(e)}function gu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:G},Dl(t,a,d);var m=(a&62914560)===a?Ql-Te():(a&4194048)===a?$l-Te():0;if(m=Jf(d,m),m!==null){ou=a,e.cancelPendingCommit=m(Iu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),vu(e,a,o,!l);return}}Iu(e,t,a,n,r,i,o,s,c)}function _u(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!mr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vu(e,t,n,r){t&=~Kl,t&=~Gl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Le(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Xe(e,n,t)}function yu(){return Fl&6?!0:(id(0,!1),!1)}function bu(){if(Z!==null){if(Ll===0)var e=Z.return;else e=Z,Ri=Li=null,So(e),Ca=null,wa=0,e=Z;for(;e!==null;)Fc(e.alternate,e),e=e.return;Z=null}}function xu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ou=0,bu(),Il=e,Z=n=ti(e.current,null),Q=t,Ll=0,Rl=null,zl=!1,Bl=Ge(e,t),Vl=!1,Jl=ql=Kl=Gl=Wl=Ul=0,Xl=Yl=null,Zl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Le(r),a=1<<i;t|=e[i],r&=~a}return Hl=t,Gr(),n}function Su(e,t){X=null,M.H=Ms,t===pa||t===ha?(t=xa(),Ll=3):t===ma?(t=xa(),Ll=4):Ll=t===Xs?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Rl=t,Z===null&&(Ul=1,Ws(e,li(t,e.current)))}function Cu(){var e=Ja.current;return e===null?!0:(Q&4194048)===Q?Ya===null:(Q&62914560)===Q||Q&536870912?e===Ya:!1}function wu(){var e=M.H;return M.H=Ms,e===null?Ms:e}function Tu(){var e=M.A;return M.A=Nl,e}function Eu(){Ul=4,zl||(Q&4194048)!==Q&&Ja.current!==null||(Bl=!0),!(Wl&134217727)&&!(Gl&134217727)||Il===null||vu(Il,Q,ql,!1)}function Du(e,t,n){var r=Fl;Fl|=2;var i=wu(),a=Tu();(Il!==e||Q!==t)&&(tu=null,xu(e,t)),t=!1;var o=Ul;a:do try{if(Ll!==0&&Z!==null){var s=Z,c=Rl;switch(Ll){case 8:bu(),o=6;break a;case 3:case 2:case 9:case 6:Ja.current===null&&(t=!0);var l=Ll;if(Ll=0,Rl=null,Nu(e,s,c,l),n&&Bl){o=0;break a}break;default:l=Ll,Ll=0,Rl=null,Nu(e,s,c,l)}}Ou(),o=Ul;break}catch(t){Su(e,t)}while(1);return t&&e.shellSuspendCounter++,Ri=Li=null,Fl=r,M.H=i,M.A=a,Z===null&&(Il=null,Q=0,Gr()),o}function Ou(){for(;Z!==null;)ju(Z)}function ku(e,t){var n=Fl;Fl|=2;var r=wu(),a=Tu();Il!==e||Q!==t?(tu=null,eu=Te()+500,xu(e,t)):Bl=Ge(e,t);a:do try{if(Ll!==0&&Z!==null){t=Z;var o=Rl;b:switch(Ll){case 1:Ll=0,Rl=null,Nu(e,t,o,1);break;case 2:case 9:if(_a(o)){Ll=0,Rl=null,Mu(t);break}t=function(){Ll!==2&&Ll!==9||Il!==e||(Ll=7),rd(e)},o.then(t,t);break a;case 3:Ll=7;break a;case 4:Ll=5;break a;case 7:_a(o)?(Ll=0,Rl=null,Mu(t)):(Ll=0,Rl=null,Nu(e,t,o,7));break;case 5:var s=null;switch(Z.tag){case 26:s=Z.memoizedState;case 5:case 27:var c=Z;if(s?Gf(s):c.stateNode.complete){Ll=0,Rl=null;var l=c.sibling;if(l!==null)Z=l;else{var u=c.return;u===null?Z=null:(Z=u,Pu(u))}break b}}Ll=0,Rl=null,Nu(e,t,o,5);break;case 6:Ll=0,Rl=null,Nu(e,t,o,6);break;case 8:bu(),Ul=6;break a;default:throw Error(i(462))}}Au();break}catch(t){Su(e,t)}while(1);return Ri=Li=null,M.H=r,M.A=a,Fl=n,Z===null?(Il=null,Q=0,Gr(),Ul):0}function Au(){for(;Z!==null&&!Ce();)ju(Z)}function ju(e){var t=Ec(e.alternate,e,Hl);e.memoizedProps=e.pendingProps,t===null?Pu(e):Z=t}function Mu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=uc(n,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=uc(n,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:So(t);default:Fc(n,t),t=Z=ni(t,Hl),t=Ec(n,t,Hl)}e.memoizedProps=e.pendingProps,t===null?Pu(e):Z=t}function Nu(e,t,n,r){Ri=Li=null,So(t),Ca=null,wa=0;var i=t.return;try{if(Ys(e,i,t,n,Q)){Ul=1,Ws(e,li(n,e.current)),Z=null;return}}catch(t){if(i!==null)throw Z=i,t;Ul=1,Ws(e,li(n,e.current)),Z=null;return}t.flags&32768?(Y||r===1?e=!0:Bl||Q&536870912?e=!1:(zl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ja.current,r!==null&&r.tag===13&&(r.flags|=16384))),Fu(t,e)):Pu(t)}function Pu(e){var t=e;do{if(t.flags&32768){Fu(t,zl);return}e=t.return;var n=Nc(t.alternate,t,Hl);if(n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);Ul===0&&(Ul=5)}function Fu(e,t){do{var n=Pc(e.alternate,e);if(n!==null){n.flags&=32767,Z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=n}while(e!==null);Ul=6,Z=null}function Iu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Vu();while(ru!==0);if(Fl&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Wr,Ye(e,n,o,s,c,l),e===Il&&(Z=Il=null,Q=0),au=t,iu=e,ou=n,su=o,cu=a,lu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ke,function(){return Hu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=M.T,M.T=null,a=N.p,N.p=2,s=Fl,Fl|=4;try{el(e,t,n)}finally{Fl=s,N.p=a,M.T=r}}ru=1,Lu(),Ru(),zu()}}function Lu(){if(ru===1){ru=0;var e=iu,t=au,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=Fl;Fl|=4;try{pl(t,e);var a=Bd,o=yr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&vr(s.ownerDocument.documentElement,s)){if(c!==null&&br(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=_r(s,h),v=_r(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}cp=!!zd,Bd=zd=null}finally{Fl=i,N.p=r,M.T=n}}e.current=t,ru=2}}function Ru(){if(ru===2){ru=0;var e=iu,t=au,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=Fl;Fl|=4;try{tl(e,t.alternate,t)}finally{Fl=i,N.p=r,M.T=n}}ru=3}}function zu(){if(ru===4||ru===3){ru=0,we();var e=iu,t=au,n=ou,r=lu;t.subtreeFlags&10256||t.flags&10256?ru=5:(ru=0,au=iu=null,Bu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(nu=null),et(n),t=t.stateNode,Fe&&typeof Fe.onCommitFiberRoot==`function`)try{Fe.onCommitFiberRoot(Pe,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=M.T,i=N.p,N.p=2,M.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{M.T=t,N.p=i}}ou&3&&Vu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===du?uu++:(uu=0,du=e):uu=0,id(0,!1)}}function Bu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ea(t)))}function Vu(){return Lu(),Ru(),zu(),Hu()}function Hu(){if(ru!==5)return!1;var e=iu,t=su;su=0;var n=et(ou),r=M.T,a=N.p;try{N.p=32>n?32:n,M.T=null,n=cu,cu=null;var o=iu,s=ou;if(ru=0,au=iu=null,ou=0,Fl&6)throw Error(i(331));var c=Fl;if(Fl|=4,Al(o.current),Sl(o,o.current,s,n),Fl=c,id(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot==`function`)try{Fe.onPostCommitFiberRoot(Pe,o)}catch{}return!0}finally{N.p=a,M.T=r,Bu(e,t)}}function Uu(e,t,n){t=li(n,t),t=Ks(e.stateNode,t,2),e=Fa(e,t,2),e!==null&&(V(e,2),rd(e))}function Wu(e,t,n){if(e.tag===3)Uu(e,e,n);else for(;t!==null;){if(t.tag===3){Uu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(nu===null||!nu.has(r))){e=li(n,e),n=qs(2),r=Fa(t,n,2),r!==null&&(Js(n,r,t,e),V(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Vl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Il===e&&(Q&n)===n&&(Ul===4||Ul===3&&(Q&62914560)===Q&&300>Te()-Ql?!(Fl&2)&&xu(e,0):Kl|=n,Jl===Q&&(Jl=0)),rd(e)}function qu(e,t){t===0&&(t=qe()),e=Jr(e,t),e!==null&&(V(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return xe(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Le(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Q,a=We(r,r===Il?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ge(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Kd()&&(e=nd);for(var t=Te(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}ru!==0&&ru!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Le(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ke(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Il,n=Q,n=We(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Ll===2||Ll===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Se(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ge(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Se(r),et(n)){case 2:case 8:n=Oe;break;case 32:n=ke;break;case 268435456:n=je;break;default:n=ke}return r=cd.bind(null,e),n=xe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Se(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(ru!==0&&ru!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vu()&&e.callbackNode!==n)return null;var r=Q;return r=We(e,e===Il?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(hu(e,r,t),sd(e,Te()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Vu())return null;hu(e,t,!0)}function ud(){Xd(function(){Fl&6?xe(De,ad):od()})}function dd(){if(nd===0){var e=ra;e===0&&(e=Be,Be<<=1,!(Be&261888)&&(Be=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:qt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[at]||null).action),o=r.submitter;o&&(t=(t=o[at]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new mn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);vs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),vs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<zr.length;hd++){var gd=zr[hd];Br(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Br(jr,`onAnimationEnd`),Br(Mr,`onAnimationIteration`),Br(Nr,`onAnimationStart`),Br(`dblclick`,`onDoubleClick`),Br(`focusin`,`onFocus`),Br(`focusout`,`onBlur`),Br(Pr,`onTransitionRun`),Br(Fr,`onTransitionStart`),Br(Ir,`onTransitionCancel`),Br(Lr,`onTransitionEnd`),bt(`onMouseEnter`,[`mouseout`,`mouseover`]),bt(`onMouseLeave`,[`mouseout`,`mouseover`]),bt(`onPointerEnter`,[`pointerout`,`pointerover`]),bt(`onPointerLeave`,[`pointerout`,`pointerover`]),H(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),H(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),H(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),H(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),H(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),H(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Vr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Vr(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[st];n===void 0&&(n=t[st]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,vt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(hp(t)){case 2:var i=lp;break;case 8:i=up;break;default:i=dp}n=i.bind(null,t,n,e),i=void 0,!rn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=pt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}en(function(){var r=a,i=Yt(n),s=[];a:{var c=Rr.get(e);if(c!==void 0){var l=mn,u=e;switch(e){case`keypress`:if(un(n)===0)break a;case`keydown`:case`keyup`:l=Mn;break;case`focusin`:u=`focus`,l=Cn;break;case`focusout`:u=`blur`,l=Cn;break;case`beforeblur`:case`afterblur`:l=Cn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=xn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Sn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Nn;break;case jr:case Mr:case Nr:l=wn;break;case Lr:l=Pn;break;case`scroll`:case`scrollend`:l=gn;break;case`wheel`:l=Fn;break;case`copy`:case`cut`:case`paste`:l=Tn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=q;break;case`toggle`:case`beforetoggle`:l=In}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=tn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Jt&&(u=n.relatedTarget||n.fromElement)&&(pt(u)||u[ot]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?pt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=xn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=q,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:ht(l),h=u==null?c:ht(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,pt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?ht(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=nr;else if(Xn(c)){if(rr)v=fr;else{v=ur;var y=lr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Gt(r.elementType)&&(v=nr):v=dr;if(v&&=v(e,r)){Zn(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Lt(c,`number`,c.value)}switch(y=r?ht(r):window,e){case`focusin`:(Xn(y)||y.contentEditable===`true`)&&(Sr=y,Cr=r,wr=null);break;case`focusout`:wr=Cr=Sr=null;break;case`mousedown`:Tr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Tr=!1,J(s,n,i);break;case`selectionchange`:if(xr)break;case`keydown`:case`keyup`:J(s,n,i)}var b;if(Rn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Kn?Wn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Vn&&n.locale!==`ko`&&(Kn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Kn&&(b=ln()):(on=i,sn=`value`in on?on.value:on.textContent,Kn=!0)),y=Ed(r,x),0<y.length&&(x=new En(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Gn(n),b!==null&&(x.data=b)))),(b=Bn?qn(e,n):Jn(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new En(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=tn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=tn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=tn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=tn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function Nd(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Vt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Vt(e,``+r);break;case`className`:Tt(e,`class`,r);break;case`tabIndex`:Tt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Tt(e,n,r);break;case`style`:Wt(e,r,o);break;case`data`:if(t!==`object`){Tt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=qt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Nd(e,t,`name`,a.name,a,null),Nd(e,t,`formEncType`,a.formEncType,a,null),Nd(e,t,`formMethod`,a.formMethod,a,null),Nd(e,t,`formTarget`,a.formTarget,a,null)):(Nd(e,t,`encType`,a.encType,a,null),Nd(e,t,`method`,a.method,a,null),Nd(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=qt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=G);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=qt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),U(e,`popover`,r);break;case`xlinkActuate`:Et(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Et(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Et(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Et(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Et(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Et(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Et(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Et(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Et(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:U(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Kt.get(n)||n,U(e,n,r))}}function Pd(e,t,n,r,a,o){switch(n){case`style`:Wt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Vt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Vt(e,``+r);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=G);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!yt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[at]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):U(e,n,r)}}}function Fd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Nd(e,t,o,s,n,null)}}a&&Nd(e,t,`srcSet`,n.srcSet,n,null),r&&Nd(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Nd(e,t,r,d,n,null)}}It(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Nd(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Rt(e,!!r,n,!0):Rt(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Nd(e,t,s,c,n,null)}Bt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Nd(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)$(_d[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Nd(e,t,u,r,n,null)}return;default:if(Gt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Nd(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Nd(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Nd(e,t,p,m,r,f)}}Ft(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Nd(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Nd(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Rt(e,!!n,n?[]:``,!1):Rt(e,!!n,t,!0)):Rt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Nd(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Nd(e,t,s,a,r,o)}zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Nd(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Nd(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Nd(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Nd(e,t,u,p,r,m)}return;default:if(Gt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Nd(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Nd(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Kd(){var e=window.event;return e&&e.type===`popstate`?e!==Gd&&(Gd=e,!0):(Gd=null,!1)}var qd=typeof setTimeout==`function`?setTimeout:void 0,Jd=typeof clearTimeout==`function`?clearTimeout:void 0,Yd=typeof Promise==`function`?Promise:void 0,Xd=typeof queueMicrotask==`function`?queueMicrotask:Yd===void 0?qd:function(e){return Yd.resolve(null).then(e).catch(Zd)};function Zd(e){setTimeout(function(){throw e})}function Qd(e){return e===`head`}function $d(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)mf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,mf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[dt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&mf(e.ownerDocument.body)}n=i}while(n);Pp(t)}function ef(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function tf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:tf(n),ft(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function nf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[dt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lf(e.nextSibling),e===null)break}return null}function rf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lf(e.nextSibling),e===null))return null;return e}function af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lf(e.nextSibling),e===null))return null;return e}function of(e){return e.data===`$?`||e.data===`$~`}function sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var uf=null;function df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pf(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ft(e)}var hf=new Map,gf=new Set;function _f(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vf=N.d;N.d={f:yf,r:bf,D:Cf,C:wf,L:Tf,m:Ef,X:Of,S:Df,M:kf};function yf(){var e=vf.f(),t=yu();return e||t}function bf(e){var t=mt(e);t!==null&&t.tag===5&&t.type===`form`?bs(t):vf.r(e)}var xf=typeof document>`u`?null:document;function Sf(e,t,n){var r=xf;if(r&&typeof t==`string`&&t){var i=Pt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),gf.has(i)||(gf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Fd(t,`link`,e),_t(t),r.head.appendChild(t)))}}function Cf(e){vf.D(e),Sf(`dns-prefetch`,e,null)}function wf(e,t){vf.C(e,t),Sf(`preconnect`,e,t)}function Tf(e,t,n){vf.L(e,t,n);var r=xf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Pt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Pt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Pt(n.imageSizes)+`"]`)):i+=`[href="`+Pt(e)+`"]`;var a=i;switch(t){case`style`:a=jf(e);break;case`script`:a=Ff(e)}hf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),hf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Mf(a))||t===`script`&&r.querySelector(If(a))||(t=r.createElement(`link`),Fd(t,`link`,e),_t(t),r.head.appendChild(t)))}}function Ef(e,t){vf.m(e,t);var n=xf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Pt(r)+`"][href="`+Pt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Ff(e)}if(!hf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),hf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(If(a)))return}r=n.createElement(`link`),Fd(r,`link`,e),_t(r),n.head.appendChild(r)}}}function Df(e,t,n){vf.S(e,t,n);var r=xf;if(r&&e){var i=gt(r).hoistableStyles,a=jf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Mf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=hf.get(a))&&zf(e,n);var c=o=r.createElement(`link`);_t(c),Fd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Rf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Of(e,t){vf.X(e,t);var n=xf;if(n&&e){var r=gt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),_t(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t){vf.M(e,t);var n=xf;if(n&&e){var r=gt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),_t(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t,n,r){var a=(a=z.current)?_f(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=jf(n.href),n=gt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=jf(n.href);var o=gt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Mf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),hf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hf.set(e,n),o||Pf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Ff(n),n=gt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function jf(e){return`href="`+Pt(e)+`"`}function Mf(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Fd(t,`link`,n),_t(t),e.head.appendChild(t))}function Ff(e){return`[src="`+Pt(e)+`"]`}function If(e){return`script[async]`+e}function Lf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Pt(n.href)+`"]`);if(r)return t.instance=r,_t(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),_t(r),Fd(r,`style`,a),Rf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=jf(n.href);var o=e.querySelector(Mf(a));if(o)return t.state.loading|=4,t.instance=o,_t(o),o;r=Nf(n),(a=hf.get(a))&&zf(r,a),o=(e.ownerDocument||e).createElement(`link`),_t(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Fd(o,`link`,r),t.state.loading|=4,Rf(o,n.precedence,e),t.instance=o;case`script`:return o=Ff(n.src),(a=e.querySelector(If(o)))?(t.instance=a,_t(a),a):(r=n,(a=hf.get(o))&&(r=h({},n),Bf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),_t(a),Fd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Rf(r,n.precedence,e));return t.instance}function Rf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Vf=null;function Hf(e,t,n){if(Vf===null){var r=new Map,i=Vf=new Map;i.set(n,r)}else i=Vf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[dt]||a[it]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Wf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Gf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Kf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=jf(r.href),a=t.querySelector(Mf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Yf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,_t(a);return}a=t.ownerDocument||t,r=Nf(r),(i=hf.get(i))&&zf(r,i),a=a.createElement(`link`),_t(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Yf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var qf=0;function Jf(e,t){return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&qf===0&&(qf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>qf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xf=null;function Zf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xf=new Map,t.forEach(Qf,e),Xf=null,Yf.call(e))}function Qf(e,t){if(!(t.state.loading&4)){var n=Xf.get(e);if(n)var r=n.get(null);else{n=new Map,Xf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Yf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $f={$$typeof:C,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function ep(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Je(0),this.hiddenUpdates=Je(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function tp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ep(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=$r(3,null,null,t),e.current=a,a.stateNode=e,t=$i(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ma(a),e}function np(e){return e?(e=Zr,e):Zr}function rp(e,t,n,r,i,a){i=np(i),r.context===null?r.context=i:r.pendingContext=i,r=Pa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Fa(e,r,t),n!==null&&(mu(n,e,t),Ia(n,e,t))}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ap(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function op(e){if(e.tag===13||e.tag===31){var t=Jr(e,67108864);t!==null&&mu(t,e,67108864),ap(e,67108864)}}function sp(e){if(e.tag===13||e.tag===31){var t=fu();t=$e(t);var n=Jr(e,t);n!==null&&mu(n,e,t),ap(e,t)}}var cp=!0;function lp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=2,dp(e,t,n,r)}finally{N.p=a,M.T=i}}function up(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=8,dp(e,t,n,r)}finally{N.p=a,M.T=i}}function dp(e,t,n,r){if(cp){var i=fp(r);if(i===null)wd(e,t,r,pp,n),wp(e,r);else if(Ep(i,e,t,n,r))r.stopPropagation();else if(wp(e,r),t&4&&-1<Cp.indexOf(e)){for(;i!==null;){var a=mt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ue(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Le(o);s.entanglements[1]|=c,o&=~c}rd(a),!(Fl&6)&&(eu=Te()+500,id(0,!1))}}break;case 31:case 13:s=Jr(a,2),s!==null&&mu(s,a,2),yu(),ap(a,2)}if(a=fp(r),a===null&&wd(e,t,r,pp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function fp(e){return e=Yt(e),mp(e)}var pp=null;function mp(e){if(pp=null,e=pt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pp=e,null}function hp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ee()){case De:return 2;case Oe:return 8;case ke:case Ae:return 32;case je:return 268435456;default:return 32}default:return 32}}var gp=!1,_p=null,vp=null,yp=null,bp=new Map,xp=new Map,Sp=[],Cp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function wp(e,t){switch(e){case`focusin`:case`focusout`:_p=null;break;case`dragenter`:case`dragleave`:vp=null;break;case`mouseover`:case`mouseout`:yp=null;break;case`pointerover`:case`pointerout`:bp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:xp.delete(t.pointerId)}}function Tp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=mt(t),t!==null&&op(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,n,r,i){switch(t){case`focusin`:return _p=Tp(_p,e,t,n,r,i),!0;case`dragenter`:return vp=Tp(vp,e,t,n,r,i),!0;case`mouseover`:return yp=Tp(yp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return bp.set(a,Tp(bp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,xp.set(a,Tp(xp.get(a)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=pt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,nt(e.priority,function(){sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,nt(e.priority,function(){sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Op(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jt=r,n.target.dispatchEvent(r),Jt=null}else return t=mt(n),t!==null&&op(t),e.blockedOn=n,!1;t.shift()}return!0}function kp(e,t,n){Op(e)&&n.delete(t)}function Ap(){gp=!1,_p!==null&&Op(_p)&&(_p=null),vp!==null&&Op(vp)&&(vp=null),yp!==null&&Op(yp)&&(yp=null),bp.forEach(kp),xp.forEach(kp)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,gp||(gp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ap)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(mp(r||n)===null)continue;break}var a=mt(n);a!==null&&(e.splice(t,3),t-=3,vs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}_p!==null&&jp(_p,e),vp!==null&&jp(vp,e),yp!==null&&jp(yp,e),bp.forEach(t),xp.forEach(t);for(var n=0;n<Sp.length;n++){var r=Sp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Sp.length&&(n=Sp[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Sp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[at]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[at]||null)s=o.formAction;else if(mp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;rp(n,fu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rp(e.current,2,null,e,null,null),yu(),t[ot]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=tt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sp.length&&t!==0&&t<Sp[n].priority;n++);Sp.splice(n,0,e),n===0&&Dp(e)}};var Rp=n.version;if(Rp!==`19.2.8`)throw Error(i(527,Rp,`19.2.8`));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:M,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{Pe=Bp.inject(zp),Fe=Bp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Vs,s=Hs,c=Us;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,r,null,o,s,c,Fp),e[ot]=t.current,Sd(e),new Ip(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`-ms-`,v=`-moz-`,y=`-webkit-`,b=`comm`,x=`rule`,S=`decl`,C=`@import`,w=`@namespace`,T=`@keyframes`,E=`@layer`,ee=Math.abs,D=String.fromCharCode,te=Object.assign;function ne(e,t){return j(e,0)^45?(((t<<2^j(e,0))<<2^j(e,1))<<2^j(e,2))<<2^j(e,3):0}function re(e){return e.trim()}function O(e,t){return(e=t.exec(e))?e[0]:e}function k(e,t,n){return e.replace(t,n)}function A(e,t,n){return e.indexOf(t,n)}function j(e,t){return e.charCodeAt(t)|0}function M(e,t,n){return e.slice(t,n)}function N(e){return e.length}function P(e){return e.length}function F(e,t){return t.push(e),e}function I(e,t){return e.map(t).join(``)}function ie(e,t){return e.filter(function(e){return!O(e,t)})}var ae=1,R=1,oe=0,se=0,z=0,ce=``;function le(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ae,column:R,length:o,return:``,siblings:s}}function ue(e,t){return te(le(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function de(e){for(;e.root;)e=ue(e.root,{children:[e]});F(e,e.siblings)}function fe(){return z}function pe(){return z=se>0?j(ce,--se):0,R--,z===10&&(R=1,ae--),z}function me(){return z=se<oe?j(ce,se++):0,R++,z===10&&(R=1,ae++),z}function he(){return j(ce,se)}function ge(){return se}function _e(e,t){return M(ce,e,t)}function ve(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ye(e){return ae=R=1,oe=N(ce=e),se=0,[]}function be(e){return ce=``,e}function xe(e){return re(_e(se-1,we(e===91?e+2:e===40?e+1:e)))}function Se(e){for(;(z=he())&&z<33;)me();return ve(e)>2||ve(z)>3?``:` `}function Ce(e,t){for(;--t&&me()&&!(z<48||z>102||z>57&&z<65||z>70&&z<97););return _e(e,ge()+(t<6&&he()==32&&me()==32))}function we(e){for(;me();)switch(z){case e:return se;case 34:case 39:e!==34&&e!==39&&we(z);break;case 40:e===41&&we(e);break;case 92:me();break}return se}function Te(e,t){for(;me()&&e+z!==57&&(e+z!==84||he()!==47););return`/*`+_e(t,se-1)+`*`+D(e===47?e:me())}function Ee(e){for(;!ve(he());)me();return _e(e,se)}function De(e){return be(Oe(``,null,null,null,[``],e=ye(e),0,[0],e))}function Oe(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=me()){case 40:if(m!=108&&j(C,d-1)==58){A(C+=k(xe(v),`&`,`&\f`),`&\f`,ee(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=xe(v);break;case 9:case 10:case 13:case 32:C+=Se(m);break;case 92:C+=Ce(ge()-1,7);continue;case 47:switch(he()){case 42:case 47:F(Ae(Te(me(),ge()),t,n,c),c),(ve(m||1)==5||ve(he()||1)==5)&&N(C)&&M(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=N(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=k(C,/\f/g,``)),p>0&&(N(C)-d||h===0&&m===47)&&F(p>32?je(C+`;`,r,n,d-1,c):je(k(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(F(S=ke(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)Oe(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(j(C,3)===110)break;case 108:if(j(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Oe(e,S,S,r&&F(ke(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Oe(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+N(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&pe()==125)continue}switch(C+=D(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(N(C)-1)*_,_=1;break;case 64:he()===45&&(C+=xe(me())),f=he(),u=d=N(y=C+=Ee(ge())),v++;break;case 45:m===45&&N(C)==2&&(h=0)}}return a}function ke(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=P(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=M(e,f+1,f=ee(g=o[h])),b=e;v<m;++v)(b=re(g>0?p[v]+` `+y:k(y,/&\f/g,p[v])))&&(c[_++]=b);return le(e,t,n,i===0?x:s,c,l,u,d)}function Ae(e,t,n,r){return le(e,t,n,b,D(fe()),M(e,2,-2),0,r)}function je(e,t,n,r,i){return le(e,t,n,S,M(e,0,r),M(e,r+1,-1),r,i)}function Me(e,t,n){switch(ne(e,t)){case 5103:return y+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return y+e+e;case 4855:return y+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return v+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return y+e+v+e+_+e+e;case 5936:switch(j(e,t+11)){case 114:return y+e+_+k(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return y+e+_+k(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return y+e+_+k(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return y+e+_+e+e;case 6165:return y+e+_+`flex-`+e+e;case 5187:return y+e+k(e,/(\w+).+(:[^]+)/,y+`box-$1$2`+_+`flex-$1$2`)+e;case 5443:return y+e+_+`flex-item-`+k(e,/flex-|-self/g,``)+(O(e,/flex-|baseline/)?``:_+`grid-row-`+k(e,/flex-|-self/g,``))+e;case 4675:return y+e+_+`flex-line-pack`+k(e,/align-content|flex-|-self/g,``)+e;case 5548:return y+e+_+k(e,`shrink`,`negative`)+e;case 5292:return y+e+_+k(e,`basis`,`preferred-size`)+e;case 6060:return y+`box-`+k(e,`-grow`,``)+y+e+_+k(e,`grow`,`positive`)+e;case 4554:return y+k(e,/([^-])(transform)/g,`$1`+y+`$2`)+e;case 6187:return k(k(k(e,/(zoom-|grab)/,y+`$1`),/(image-set)/,y+`$1`),e,``)+e;case 5495:case 3959:return k(e,/(image-set\([^]*)/,y+"$1$`$1");case 4968:return k(k(e,/(.+:)(flex-)?(.*)/,y+`box-pack:$3`+_+`flex-pack:$3`),/space-between/,`justify`)+y+e+e;case 4200:if(!O(e,/flex-|baseline/))return _+`grid-column-align`+M(e,t)+e;break;case 2592:case 3360:return _+k(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,O(e.props,/grid-\w+-end/)})?~A(e+(n=n[t].value),`span`,0)?e:_+k(e,`-start`,``)+e+_+`grid-row-span:`+(~A(n,`span`,0)?O(n,/\d+/):O(n,/\d+/)-+O(e,/\d+/))+`;`:_+k(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return O(e.props,/grid-\w+-start/)})?e:_+k(k(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return k(e,/(.+)-inline(.+)/,y+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(N(e)-1-t>6)switch(j(e,t+1)){case 109:if(j(e,t+4)!==45)break;case 102:return k(e,/(.+:)(.+)-([^]+)/,`$1`+y+`$2-$3$1`+v+(j(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~A(e,`stretch`,0)?Me(k(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return k(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return _+n+`:`+r+s+(i?_+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(j(e,t+6)===121)return k(e,`:`,`:`+y)+e;break;case 6444:switch(j(e,j(e,14)===45?18:11)){case 120:return k(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+y+(j(e,14)===45?`inline-`:``)+`box$3$1`+y+`$2$3$1`+_+`$2box$3`)+e;case 100:return k(e,`:`,`:`+_)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return k(e,`scroll-`,`scroll-snap-`)+e}return e}function Ne(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Pe(e,t,n,r){switch(e.type){case E:if(e.children.length)break;case C:case w:case S:return e.return=e.return||e.value;case b:return``;case T:return e.return=e.value+`{`+Ne(e.children,r)+`}`;case x:if(!N(e.value=e.props.join(`,`)))return``}return N(n=Ne(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Fe(e){var t=P(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Ie(e){return function(t){t.root||(t=t.return)&&e(t)}}function Le(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case S:e.return=Me(e.value,e.length,n);return;case T:return Ne([ue(e,{value:k(e.value,`@`,`@`+y)})],r);case x:if(e.length)return I(n=e.props,function(t){switch(O(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:de(ue(e,{props:[k(t,/:(read-\w+)/,`:`+v+`$1`)]})),de(ue(e,{props:[t]})),te(e,{props:ie(n,r)});break;case`::placeholder`:de(ue(e,{props:[k(t,/:(plac\w+)/,`:`+y+`input-$1`)]})),de(ue(e,{props:[k(t,/:(plac\w+)/,`:`+v+`$1`)]})),de(ue(e,{props:[k(t,/:(plac\w+)/,_+`input-$1`)]})),de(ue(e,{props:[t]})),te(e,{props:ie(n,r)})}return``})}}var Re=g(),B=c(u()),ze=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Be=`active`,Ve=`data-styled-version`,He=`6.5.2`,Ue=`/*!sc*/
`,We=typeof window<`u`&&typeof document<`u`;function Ge(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Ke=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:Ge(`REACT_APP_SC_DISABLE_SPEEDY`)??Ge(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),qe=`sc-keyframes-`,Je={};function V(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Ye=new Map,Xe=new Map,Ze=1,Qe=e=>{if(Ye.has(e))return Ye.get(e);for(;Xe.has(Ze);)Ze++;let t=Ze++;return Ye.set(e,t),Xe.set(t,e),t},$e=e=>Xe.get(e),et=(e,t)=>{Ze=t+1,Ye.set(e,t),Xe.set(t,e)},tt=Object.freeze([]),nt=Object.freeze({});function rt(e,t,n=nt){return e.theme!==n.theme&&e.theme||t||n.theme}var it=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,at=/(^-|-$)/g;function ot(e){return e.replace(it,`-`).replace(at,``)}var st=/(a)(d)/gi,ct=e=>String.fromCharCode(e+(e>25?39:97));function lt(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=ct(t%52)+n;return(ct(t%52)+n).replace(st,`$1-$2`)}var ut=5381,dt=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},ft=e=>dt(ut,e);function pt(e){return lt(ft(e)>>>0)}function mt(e){return e.displayName||e.name||`Component`}function ht(e){return typeof e==`string`&&!0}function gt(e){return ht(e)?`styled.${e}`:`Styled(${mt(e)})`}var _t=Symbol.for(`react.memo`),vt=Symbol.for(`react.forward_ref`),yt={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},H={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xt={[vt]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[_t]:bt};function St(e){return(`type`in(t=e)&&t.type.$$typeof)===_t?bt:`$$typeof`in e?xt[e.$$typeof]:yt;var t}var Ct=Object.defineProperty,wt=Object.getOwnPropertyNames,U=Object.getOwnPropertySymbols,Tt=Object.getOwnPropertyDescriptor,Et=Object.getPrototypeOf,Dt=Object.prototype;function Ot(e,t,n){if(typeof t!=`string`){let r=Et(t);r&&r!==Dt&&Ot(e,r,n);let i=wt(t).concat(U(t)),a=St(e),o=St(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in H||n&&n[s]||o&&s in o||a&&s in a)){let n=Tt(t,s);try{Ct(e,s,n)}catch{}}}}return e}function kt(e){return typeof e==`function`}var At=Symbol.for(`react.forward_ref`);function jt(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===At&&`styledComponentId`in e}function Mt(e,t){return e&&t?e+` `+t:e||t||``}function Nt(e,t){return e.join(t||``)}function Pt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Ft(e,t,n=!1){if(!n&&!Pt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Ft(e[n],t[n]);else if(Pt(t))for(let n in t)e[n]=Ft(e[n],t[n]);return e}function It(e,t){Object.defineProperty(e,"toString",{value:t})}var Lt=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw V(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Ue;return t}},Rt=`style[${ze}][${Ve}="${He}"]`,zt=RegExp(`^${ze}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Bt=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Vt=e=>{if(!e)return document;if(Bt(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Bt(t))return t}return document},Ht=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},Ut=(e,t)=>{let n=(t.textContent??``).split(Ue),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(zt);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(et(n,t),Ht(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},Wt=e=>{let t=Vt(e.options.target).querySelectorAll(Rt);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(ze)!==Be&&(Ut(e,r),r.parentNode&&r.parentNode.removeChild(r))}},Gt=!1;function Kt(){if(!1!==Gt)return Gt;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return Gt=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return Gt=t.getAttribute(`content`)||void 0}return Gt=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var W=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${ze}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(ze,Be),i.setAttribute(Ve,He);let s=t||Kt();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},qt=class{constructor(e,t){this.element=W(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw V(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},G=class{constructor(e,t){this.element=W(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Jt=We,Yt={isServer:!We,useCSSOMInjection:!Ke},Xt=class e{static registerId(e){return Qe(e)}constructor(e=nt,t={},n){this.options=Object.assign(Object.assign({},Yt),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&We&&Jt&&(Jt=!1,Wt(this)),It(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=$e(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=ze+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&We&&Wt(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&We&&t.target!==this.options.target&&Vt(this.options.target)!==Vt(t.target)&&Wt(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new qt(t,n):new G(t,n))(this.options),new Lt(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){Qe(e),e.startsWith(qe)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Qe(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Qe(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},Zt=new WeakSet,Qt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function $t(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in Qt||e.startsWith(`--`)?String(t).trim():t+`px`}var en=47;function tn(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var nn=Symbol.for(`sc-keyframes`);function rn(e){return typeof e==`object`&&!!e&&nn in e}function an(e){return kt(e)&&!(e.prototype&&e.prototype.isReactComponent)}var on=e=>e==null||!1===e||e===``,sn=Symbol.for(`react.client.reference`);function cn(e){return e.$$typeof===sn}function ln(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!on(r)&&(Array.isArray(r)&&Zt.has(r)||kt(r)?t.push(tn(n)+`:`,r,`;`):Pt(r)?(t.push(n+` {`),ln(r,t),t.push(`}`)):t.push(tn(n)+`: `+$t(n,r)+`;`))}}function un(e,t,n,r,i=[]){if(on(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return cn(e)?i:an(e)&&t?un(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)un(e[a],t,n,r,i);return i}return jt(e)?(i.push(`.${e.styledComponentId}`),i):rn(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):cn(e)?i:Pt(e)&&e.toString===Object.prototype.toString?(ln(e,i),i):(i.push(e.toString()),i)}var K=ft(He),dn=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=dt(K,t),this.baseStyle=n,Xt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(an(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Nt(un(r,e,t,n)))}else i+=Nt(un(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=lt(dt(dt(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Mt(r,a)}}return r}},fn=/&/g;function pn(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function mn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==en||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===en&&(o=!1,c++);else if(l!==34&&l!==39||pn(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function hn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&hn(a.children,t)}return e}function gn({options:e=nt,plugins:t=tt}=nt){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(fn,r).replace(i,a))}),e.prefix&&o.push(Le),o.push(Pe);let s=[],c=Fe(o.concat(Ie(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return mn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||pn(e,o)){if(s===0){if(t===en&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==en);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===en)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===en&&o+1<r&&e.charCodeAt(o+1)===en){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:mn(i)):l===0?e:mn(e)}(t),d=De(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=hn(d,e.namespace)),s=[],Ne(d,c),s},u=e,d=ut;for(let e=0;e<t.length;e++)t[e].name||V(15),d=dt(d,t[e].name);return u!=null&&u.namespace&&(d=dt(d,u.namespace)),u!=null&&u.prefix&&(d=dt(d,`p`)),l.hash=d===ut?``:d.toString(),l}var _n=new Xt,vn=gn(),yn=B.createContext({shouldForwardProp:void 0,styleSheet:_n,stylis:vn,stylisPlugins:void 0});yn.Consumer;function bn(){return B.useContext(yn)}var xn=B.createContext(void 0);xn.Consumer;function Sn(e){let t=B.useContext(xn),n=B.useMemo(()=>function(e,t){if(!e)throw V(14);if(kt(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw V(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?B.createElement(xn.Provider,{value:n},e.children):null}var Cn=Object.prototype.hasOwnProperty,wn={};function Tn(e,t){let n=typeof e==`string`?ot(e):`sc`;wn[n]=(wn[n]||0)+1;let r=n+`-`+pt(He+n+wn[n]);return t?t+`-`+r:r}function En(e,t,n){let r=jt(e),i=e,a=!ht(e),{attrs:o=tt,componentId:s=Tn(t.displayName,t.parentComponentId),displayName:c=gt(e)}=t,l=t.displayName&&t.componentId?ot(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new dn(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=B.useContext(xn),u=bn(),d=e.shouldForwardProp||u.shouldForwardProp,f=rt(t,l,a)||nt,p,m;{let e=B.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(Cn.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=kt(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=Mt(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=Mt(r.className,t.className)),r}(r,t,f),m=i.generateAndInjectStyles(p,u.styleSheet,u.stylis);let n=0;for(let e in t)Cn.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,g=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),_=Mt(o,s);return m&&(_+=` `+m),p.className&&(_+=` `+p.className),g[ht(h)&&h.includes(`-`)?`class`:`className`]=_,n&&(g.ref=n),(0,B.createElement)(h,g)}(m,e,t)}p.displayName=c;let m=B.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Mt(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Ft(e,n,!0);return e}({},i.defaultProps,e):e}}),It(m,()=>`.${m.styledComponentId}`),a&&Ot(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Dn=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function On(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var kn=e=>(Zt.add(e),e);function An(e,...t){if(kt(e)||Pt(e))return kn(un(On(tt,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?un(n):kn(un(On(n,t)))}function jn(e,t,n=nt){if(!t)throw V(1,t);let r=(r,...i)=>e(t,n,An(r,...i));return r.attrs=r=>jn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>jn(e,t,Object.assign(Object.assign({},n),r)),r}var Mn=e=>jn(En,e),q=Mn;Dn.forEach(e=>{q[e]=Mn(e)});var Nn=class{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){let n=e[t];if(kt(n)&&!jt(n))return!1}return!0}(e),Xt.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){let i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{let a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}let a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){let t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){let i=Nt(un(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,``)};return this.instanceRules.set(e,a),a}rebuildGroup(e){let t=this.componentId;e.clearRules(t);for(let n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}};function Pn(e,...t){let n=An(e,...t),r=`sc-global-${pt(JSON.stringify(n))}`,i=new Nn(n,r),a=e=>{let t=bn(),n=B.useContext(xn),a;{let e=B.useRef(null);e.current===null&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{let s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],c=B.useRef(i);B.useLayoutEffect(()=>{t.styleSheet.server||(c.current!==i&&(t.styleSheet.clearRules(r),c.current=i),o(a,e,t.styleSheet,n,t.stylis))},s),B.useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(a,t.styleSheet)},[a,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,Je,n,o);else{let s=Object.assign(Object.assign({},t),{theme:rt(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return B.memo(a)}var Fn,In=class{constructor(e,t){this[Fn]=!0,this.inject=(e,t=vn)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=qe+e,this.rules=t,Qe(this.id),It(this,()=>{throw V(12,String(this.name))})}getName(e=vn){return e.hash?this.name+lt(e.hash>>>0):this.name}};function Ln(e,...t){let n=Nt(An(e,...t));return new In(pt(n),n)}Fn=nn,`${ze}`,`${ze}`,`${ze}`;var Rn=`/project-forecast/assets/logo--nZl-i6T.png`,zn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAACXFJREFUeAHNWnlsFNcZf/NmZu/Te/jCNjiEw0khEMCBioQkHCUlpBJHmjQxUKI0SpOG/tGDVsE0xChq+geBqIpSVeCQqpizGCjgUA41KEBEUy61TewYX8Jr7+G9vJ7ZOfq99a7rxsfOzG5QftLIa828N9/vfd/7rjcUyg1U+q/sdk+1FpaXLXAUuFbYbUXVepO1nGV1DlmW9KkHKWpAEJKRRH+0LRzuuRTp9R3vav/scigUCg+fB2kEhbQBwyUVFEy2PbBg0ebyife9hGnWkeiPIFFIIlkeXx4ghWiaRUaLDYlJPtRx+9b71y8frfP7/VG4TcMlIpVQS4QQkGfMWOCZNmf5cZvdPTcc6pGJ4CCbpkUByjIF09qdLioSCV25en7f6paWmx3pd0lK51HzcrJS8uqa1z+yFRQ+FunrlUB2jPIIWZJkm8NLRcO95w7U/+YxpEI7SoikVmbBkh8s/dbMRacDvZ0CmAaDvkaAhiWXpxT/+/rHT1xo+uBkWs5x7TUbESKwsHrD1gajwbIWNqoIJGh0NwBkDGYrTiT6Dx/cvWVVRpaxHh+PSGrg+ld3fp6I91VKkqSOAOwbCa7Mvoc9hDBWb4kUxoLJYm/ds/O1KfAvC1dy1OfGGD9I4pUd3fFo0A2zZSdBDQrv6wnJRoNBrJxULJYUu2mLxcDBlqVi/Qm2645fbm3txokBjvF6HCnvpQRgaoLF6gzseXdTERpDM9RYIq1/9Z3P45FApRISGFOoo8svL140m9tYsxyXFLlZUZQoPplEojzoeGjQBsswSMcwMhAS/rj3pHjm3FVDWakbiVL28EHIWO2u1t07f0I0M8Kjjboka9e/cRAefQq8SNZNzdAYtXf0iA31tUm7w2yIxvqzrjRx11azCQWDEf7ZF96ky0q8tChl97SYIo+JRw7Ub10z4t5X/qe/vbRmucFkXqWEBFmG2+0++WhDnUizlCEWTygyF/IMmBpi9Yyucd92sa3DJysZJ8kibTRbVi9c/OwyNOiaRyWS8tn3z1z4V4jQigIRzwnopReeTGCG0mlJEojwEIl0P/rhkxzPJxWN6e+PSlUPPHoKDbrjIfmHExHXrKs9G+jplJDCQBcIRaXvfXehjhtQJsRo4IDAqqceYfyBPkV5FqFOYtmqdVub0LB9khGYrqx8sNzq8DwKq6TYR3rdNtFsMtCaM7Y0jAYd7XE7lKcjEJDtDtfjkCp5UZpDRmhxzsMrD5K0A6mA2WwUZElzwjoEiFGUxWxSpdZIn1+cMmvJMZTWCiFCkSzWVuCdq0YbBHxSYBGVqz5QKlomBVFV2kMyDIeraB4pH1BmL8x86JFfh4O9qpcWstbc1TE0F6V6rkioV5750MOb4aecSsvLJ933ooxUWdU3AiQFmjBx+svkN+N0VtppRufI3T7uPigoZRhaZyfmhQvLJ1aTyk71JJCWROMxTSYxYi6YIRqNUWROtegH2d2lrvn09BnzN5nMznlIJcLhONryixpeb9SxKEckOB5VTZ+UbDrzKaPX61SNhWwfJXmhD1us7motNX8yKQhzZ03TZavPlQkjo3mzp7F8UhS0jLU5PNXYaLZWIA2AZJGCyjR/WwsEInMiDTCarBUYNrodaQS8Nm/ul0DrZNB2smNYCHVGmQEEMQjqedNILisC5qWHRZU0CQN7hLDIj0Zkol0Kelyq21n/Gw9+lEMaAHkWffLsFV6v06bQDGCfIZvFjI43fcIZTXpNjQ1YBA4LAh9GGmA269HWuj2kmNKewwPsNjPa9YfDiV3vHTFCfY+0gBe4MObi8dtIA0gpXlFeRJ298A+RYbS1uYjn5rmk8JfGjw1ulw1p9eRcf6wNh/t8lymNW1bH0ujAkfN0gc2iSQSjUYf2HTonFBe5KM3hCISPhHs/wcFg+zGa0SMtIC8fGODZazdbeLWCkEBmgrbRnxrOsCyrvefHMiwKBNpP4N5O/yUIKEgrXC47qt2+hyp0OVVRsZqM6O139iULvU46l+TAaLIhX/u/LmO//z9RURT6SFMQaQCpEKFHozt49PyAnlWWdhFtdPtC/MmmywaGyaEPDjLDMUYQEElViO1fXP89xlhzcLOYDbC6+w2QvSoKBF6XU9rw8m9xWakH5ZSqQV3Y+uWN91CmQrxx9eJbdocHaQURxmTSUxzHK1oMyDchrWAUdRjHg93ppm592vgW+Z2qEIl5BQN3LpF2PrpLyDW3IbJGIj2X0qdccsZAqWs3zq20OT2aDZbYvYplgK2V25oRWS9eOExapymXlxFcbv7s7/6w/04TCKT+/A6WlzRlC5w2RbbC0gw2GQ2I0rgtiYzhoO9MV/P1TpQ+0RquAerQh3XfcXnLaDVkiDCtbd2odnMNH4nHFQUEf18fVVe7UfyiuUtWTQZkc3kn0Ic+2LYEDev/DidCdI1vXP3b43Cwkv0oAdQQDEWIjfD762u56jlVRkFh9kqcQ0V5of7on7cloVPJdfuCCrUDQdRsp2/883ymiT30wlFHr6p5fS/L6p+B+DKCUKqTHksQzyO8WbtRePD+e/U9oT6K0pDnkHZOgc2K7nQHuG1vf4iaWzr1xcUuNFb3Eo5qBEqWjjTsrl074t4oz6cOUdb9eMeteCw0JXPwSeTkeAHSgbD4859+P7li6Xy9LxDKS2H1/4T2AqGuEYTgEcFsczTX79o0HY1yODqWICm1rXtlR0c8GioCEkx7p1/a8PwyfuNzT+hCkSgWBQnlrz4cm1AJEBJFcvTm6IWjtxKk4ugtg9SAZ1783c0JxbZ73/jlOjzA80yC5xBF5ZnBV5Ah1A2Efrblfcpsdd6uf/e1qWick91sEqU009bW1uB0uddG++MSxnRePxIYCyTQWC1mHAkF95eWlj6NshxPZxOKeAVcUVHx9Kmm00tLPB5oVkgaC2uFkFNfQIjFHhc+0Xh0WZoEkXPcnpfaTzjE5ubmj8oqJi72B0MSpnH+tCOnzgglj9OJW9vbz0y9555l6TuKUgA1gqS0M3ny5CVrnn+ulIvHrhS6CsiBvoxyy2FlGtOyu8CBErH41V9t3lwIJJam733tuV8qvlRVVVmOnzpVFwyHA5CiyBDZ5e5AUL7jD4x7dQcCcigak5PgjmLxeOjE6dPbV65cmanuNGk5V/cz9MFYdXW1bf7ChfNmzZq9YsrUafMLi7wVJqPJnvnwDGMGlBgL+3zdt1u+bLly/dq1Yxdv3rx0sbExivLw4dl/AddFSaEKS67DAAAAAElFTkSuQmCC`,Bn={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Vn=B.createContext&&B.createContext(Bn),Hn=[`attr`,`size`,`title`];function Un(e,t){if(e==null)return{};var n,r,i=Wn(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Wn(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Gn(){return Gn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gn.apply(null,arguments)}function Kn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function qn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Kn(Object(n),!0).forEach(function(t){Jn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Jn(e,t,n){return(t=Yn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yn(e){var t=Xn(e,`string`);return typeof t==`symbol`?t:t+``}function Xn(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Zn(e){return e&&e.map((e,t)=>B.createElement(e.tag,qn({key:t},e.attr),Zn(e.child)))}function Qn(e){return t=>B.createElement($n,Gn({attr:qn({},e.attr)},t),Zn(e.child))}function $n(e){var t=t=>{var n=e.attr,r=e.size,i=e.title,a=Un(e,Hn),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),B.createElement(`svg`,Gn({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:qn(qn({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&B.createElement(`title`,null,i),e.children)};return Vn===void 0?t(Bn):B.createElement(Vn.Consumer,null,e=>t(e))}function er(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`13 2 3 14 12 14 11 22 21 10 12 10 13 2`},child:[]}]})(e)}function tr(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`18`,y1:`6`,x2:`6`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`6`,x2:`18`,y2:`18`},child:[]}]})(e)}function nr(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`3 6 5 6 21 6`},child:[]},{tag:`path`,attr:{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`},child:[]},{tag:`line`,attr:{x1:`10`,y1:`11`,x2:`10`,y2:`17`},child:[]},{tag:`line`,attr:{x1:`14`,y1:`11`,x2:`14`,y2:`17`},child:[]}]})(e)}function rr(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`5`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`1`,x2:`12`,y2:`3`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`21`,x2:`12`,y2:`23`},child:[]},{tag:`line`,attr:{x1:`4.22`,y1:`4.22`,x2:`5.64`,y2:`5.64`},child:[]},{tag:`line`,attr:{x1:`18.36`,y1:`18.36`,x2:`19.78`,y2:`19.78`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`12`,x2:`3`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`12`,x2:`23`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`4.22`,y1:`19.78`,x2:`5.64`,y2:`18.36`},child:[]},{tag:`line`,attr:{x1:`18.36`,y1:`5.64`,x2:`19.78`,y2:`4.22`},child:[]}]})(e)}function ir(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2`},child:[]}]})(e)}function ar(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`11`,cy:`11`,r:`8`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`},child:[]}]})(e)}function or(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`23 4 23 10 17 10`},child:[]},{tag:`polyline`,attr:{points:`1 20 1 14 7 14`},child:[]},{tag:`path`,attr:{d:`M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15`},child:[]}]})(e)}function sr(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z`},child:[]}]})(e)}function cr(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`10`,r:`3`},child:[]}]})(e)}function lr(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z`},child:[]}]})(e)}function ur(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`3`},child:[]}]})(e)}function dr(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`1`,x2:`23`,y2:`23`},child:[]}]})(e)}function fr(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z`},child:[]}]})(e)}function pr(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z`},child:[]}]})(e)}function mr(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`9 18 15 12 9 6`},child:[]}]})(e)}function hr(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`15 18 9 12 15 6`},child:[]}]})(e)}function gr(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`20 6 9 17 4 12`},child:[]}]})(e)}function _r(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`13`,r:`4`},child:[]}]})(e)}function vr(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z`},child:[]},{tag:`path`,attr:{d:`M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z`},child:[]}]})(e)}function yr(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`12`,y1:`19`,x2:`12`,y2:`5`},child:[]},{tag:`polyline`,attr:{points:`5 12 12 5 19 12`},child:[]}]})(e)}function br(e){return Qn({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`5`,y1:`12`,x2:`19`,y2:`12`},child:[]},{tag:`polyline`,attr:{points:`12 5 19 12 12 19`},child:[]}]})(e)}var xr=Ln`
  0% {
    transform: scale(0.7) rotate(-20deg);
    opacity: 0.5;
  }

  60% {
    transform: scale(1.15) rotate(10deg);
    opacity: 1;
  }

  100% {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
`,Sr=q.button`
  position: relative;

  width: 82px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 4px;

  box-sizing: border-box;

  border: none;
  border-radius: 999px;

  background: ${({$dark:e})=>e?`#111111`:`#e8e8e8`};

  cursor: pointer;

  box-shadow:
    0 3px 10px rgba(0, 0, 0, 0.12);

  transition:
    background 0.5s ease,
    transform 0.25s ease,
    box-shadow 0.35s ease;

  &:hover {
    transform: scale(1.04);

    box-shadow:
      0 6px 18px rgba(0, 0, 0, 0.18);
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid
      ${({$dark:e})=>e?`#ffffff`:`#111111`};

    outline-offset: 3px;
  }
`,Cr=q.span`
  position: relative;
  z-index: 1;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$active:e})=>e?`#111111`:`#777777`};
  opacity: ${({$active:e})=>e?1:.55};
  transform: ${({$active:e})=>e?`scale(1.05)`:`scale(0.9)`};
  transition:
    color 0.4s ease,
    opacity 0.4s ease,
    transform 0.4s ease;

  svg {
    width: 16px;
    height: 16px;
    display: block;
  }

  ${({$active:e})=>e&&An`
      animation: ${xr} 0.5s ease;
    `}
`,wr=q.span`
  position: absolute;
  z-index: 2;
  top: 4px;
  left: 4px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 50%;
  background: #ffffff;
  color: #111111;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transform: ${({$dark:e})=>e?`translateX(44px) rotate(360deg)`:`translateX(0) rotate(0deg)`};
  transition:
    transform 0.65s
      cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease;

  svg {
    width: 15px;
    height: 15px;
    display: block;
    transition:
      transform 0.45s ease;
  }

  ${Sr}:hover & {
    box-shadow:
      0 4px 10px rgba(0, 0, 0, 0.22);
  }

  ${Sr}:active & {
    transform: ${({$dark:e})=>e?`translateX(44px) rotate(360deg) scale(0.92)`:`translateX(0) rotate(0deg) scale(0.92)`};
  }
`,Tr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),J=o(((e,t)=>{t.exports=Tr()}))();function Er({darkMode:e,onToggle:t}){return(0,J.jsxs)(Sr,{type:`button`,$dark:e,onClick:t,"aria-label":`Toggle theme`,children:[(0,J.jsx)(Cr,{$active:!e,children:(0,J.jsx)(rr,{})}),(0,J.jsx)(wr,{$dark:e,children:e?(0,J.jsx)(sr,{}):(0,J.jsx)(rr,{})}),(0,J.jsx)(Cr,{$active:e,children:(0,J.jsx)(sr,{})})]})}var Dr=q.header`
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;

  min-height: ${({$scrollingDown:e})=>e?`54px`:`72px`};

  display: flex;
  align-items: center;

  padding: ${({$scrollingDown:e})=>e?`0 26px`:`0 40px`};

  z-index: 1000;

  box-sizing: border-box;

  background: ${({theme:e,$scrolled:t})=>t?`${e.background}E6`:e.background};

  color: ${({theme:e})=>e.text};

  box-shadow: ${({$scrolled:e})=>e?`0 6px 22px rgba(0, 0, 0, 0.16)`:`0 4px 16px rgba(0, 0, 0, 0.12)`};

  backdrop-filter: ${({$scrolled:e})=>e?`blur(14px)`:`blur(0px)`};

  -webkit-backdrop-filter: ${({$scrolled:e})=>e?`blur(14px)`:`blur(0px)`};

  transition:
    min-height 0.35s ease,
    padding 0.35s ease,
    background 0.35s ease,
    color 0.3s ease,
    box-shadow 0.35s ease,
    backdrop-filter 0.5s ease,
    -webkit-backdrop-filter 0.5s ease;

  @media (max-width: 768px) {
    min-height: ${({$scrollingDown:e})=>e?`52px`:`64px`};

    padding: ${({$scrollingDown:e})=>e?`0 14px`:`0 20px`};

    backdrop-filter: ${({$scrolled:e})=>e?`blur(12px)`:`blur(0px)`};

    -webkit-backdrop-filter: ${({$scrolled:e})=>e?`blur(12px)`:`blur(0px)`};
  }
`,Or=q.a`
  display: flex;
  align-items: center;

  text-decoration: none;

  img {
    width: 82px;
    height: 56px;

    display: block;

    filter: ${({$dark:e})=>e?`brightness(0) invert(1)`:`none`};

    transition:
      transform 0.3s ease,
      filter 0.3s ease,
      width 0.35s ease,
      height 0.35s ease;
  }

  &:hover img {
    transform:
      translateY(-2px)
      scale(1.06);
  }

  &:active img {
    transform:
      translateY(0)
      scale(0.98);
  }

  @media (max-width: 768px) {
    img {
      width: 80px;
    }
  }
`,kr=q.nav`
  display: flex;
  align-items: center;

  gap: 30px;

  margin-left: 130px;
  margin-right: auto;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1100px) {
    margin-left: 35px;
    gap: 22px;
  }
`,Ar=q.a`
  position: relative;

  color: ${({theme:e})=>e.text};

  font-size: 14px;
  font-weight: 400;

  text-decoration: none;

  padding: 5px 0;

  transition:
    color 0.25s ease,
    opacity 0.25s ease,
    transform 0.25s ease;

  &::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: 0;

    width: 100%;
    height: 2px;

    background: ${({theme:e})=>e.button};

    border-radius: 10px;

    transform: scaleX(0);
    transform-origin: center;

    transition:
      transform 0.3s ease;
  }

  &:hover {
    opacity: 1;

    transform:
      translateY(-1px);
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:active {
    transform:
      translateY(0);
  }

  @media (max-width: 768px) {
    opacity: ${({$open:e})=>+!!e};

    transform: ${({$open:e})=>e?`translateY(0)`:`translateY(8px)`};

    ${({$open:e,$mobileIndex:t})=>e&&`
        transition-delay:
          ${.05+t*.06}s;
      `}
  }
`,jr=q.div`
  display: flex;
  align-items: center;

  margin-right: 25px;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1100px) {
    margin-right: 18px;
  }
`,Mr=q.div`
  display: flex;
  align-items: center;

  gap: 15px;

  @media (max-width: 768px) {
    display: none;
  }
`,Nr=q.button`
  height: 36px;

  padding: 0 18px;

  border: none;
  border-radius: 10px;

  background: ${({theme:e})=>e.button};

  color: #111111;

  font-size: 13px;
  font-weight: 400;

  cursor: pointer;

  box-shadow:
    0 4px 12px
    rgba(0, 0, 0, 0.08);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform:
      translateY(-2px)
      scale(1.03);

    box-shadow:
      0 8px 20px
      rgba(0, 0, 0, 0.14);
  }

  &:active {
    transform:
      scale(0.94);

    box-shadow:
      0 2px 6px
      rgba(0, 0, 0, 0.1);
  }
`,Pr=q.div`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: ${({theme:e})=>e.secondary};

  cursor: pointer;
  overflow: hidden;

  position: relative;

  transition:
    transform 0.25s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;

  &:hover {
    transform: scale(1.08);

    box-shadow:
      0 0 0 3px
        ${({theme:e})=>`${e.accent}33`},
      0 0 18px
        ${({theme:e})=>`${e.accent}88`},
      0 5px 20px
        rgba(0, 0, 0, 0.18);
  }

  &:active {
    transform: scale(0.96);
  }

  &::after {
    content: "";

    position: absolute;

    inset: -2px;

    border-radius: 50%;

    border: 1px solid
      ${({theme:e})=>e.accent};

    opacity: 0;

    transform: scale(0.8);

    transition:
      opacity 0.3s ease,
      transform 0.3s ease;

    pointer-events: none;
  }

  &:hover::after {
    opacity: 0.7;

    transform: scale(1);
  }

  img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    object-position: center;

    position: relative;
    z-index: 2;
  }
`,Fr=q.img`
  width: 100% !important;
  height: 100% !important;

  display: block;

  object-fit: cover;
  object-position: center;

  border-radius: 50%;
`,Ir=q.button`
  display: none;

  margin-left: auto;

  border: none;

  background: transparent;

  color: ${({theme:e})=>e.text};

  font-size: 14px;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    opacity 0.2s ease;

  .menu-arrow {
    display: inline-block;

    margin-left: 3px;

    transition:
      transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.05);

    opacity: 0.7;
  }

  &:active {
    transform: scale(0.94);
  }

  @media (max-width: 768px) {
    display: block;
  }
`,Lr=q.div`
  position: absolute;

  top: 100%;
  left: 0;

  width: 100%;

  padding: 20px;

  box-sizing: border-box;

  background: ${({theme:e})=>e.background};

  color: ${({theme:e})=>e.text};

  border-top: 1px solid
    ${({theme:e})=>e.secondary};

  box-shadow:
    0 8px 20px
    rgba(0, 0, 0, 0.12);

  z-index: 100;

  transform-origin: top;

  transform: ${({$open:e})=>e?`translateY(0) scaleY(1)`:`translateY(-18px) scaleY(0.96)`};

  opacity: ${({$open:e})=>+!!e};

  visibility: ${({$open:e})=>e?`visible`:`hidden`};

  filter: ${({$open:e})=>e?`blur(0)`:`blur(5px)`};

  pointer-events: ${({$open:e})=>e?`auto`:`none`};

  transition:
    transform 0.4s
      cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.25s ease,
    filter 0.35s ease,
    visibility 0.35s ease;

  @media (min-width: 769px) {
    display: none;
  }
`,Rr=q.div`
  display: grid;

  grid-template-columns: 1fr auto;

  align-items: start;

  column-gap: 20px;
`,zr=q.nav`
  display: flex;

  flex-direction: column;

  gap: 15px;

  a {
    opacity: ${({children:e})=>e?void 0:1};
  }
`,Br=q.div`
  display: flex;

  flex-direction: column;

  align-items: flex-end;

  gap: 15px;

  opacity: ${({$open:e})=>+!!e};

  transform: ${({$open:e})=>e?`translateX(0)`:`translateX(12px)`};

  transition:
    opacity 0.35s ease 0.2s,
    transform 0.4s
      cubic-bezier(0.22, 1, 0.36, 1)
      0.2s;
`,Vr=q.div`
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: ${({theme:e})=>e.secondary};

  cursor: pointer;
  overflow: hidden;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: scale(1.06);

    box-shadow:
      0 5px 15px
      rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    object-position: center;
  }
`,Hr=q.button`
  height: 36px;

  padding: 0 18px;

  border: none;
  border-radius: 10px;

  background: ${({theme:e})=>e.button};

  color: #111111;

  font-size: 13px;

  cursor: pointer;

  box-shadow:
    0 4px 12px
    rgba(0, 0, 0, 0.08);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform:
      translateY(-2px)
      scale(1.03);

    box-shadow:
      0 8px 20px
      rgba(0, 0, 0, 0.14);
  }

  &:active {
    transform: scale(0.94);

    box-shadow:
      0 2px 6px
      rgba(0, 0, 0, 0.1);
  }
`,Ur=q.div`
  display: flex;

  justify-content: center;
  align-items: center;

  margin-top: 20px;

  opacity: ${({$open:e})=>+!!e};

  transform: ${({$open:e})=>e?`translateY(0)`:`translateY(8px)`};

  transition:
    opacity 0.35s ease 0.35s,
    transform 0.35s ease 0.35s;
`;function Wr({user:e,avatar:t,onSignUp:n,onProfile:r,onGame:i,darkMode:a,onToggle:o}){let[s,c]=(0,B.useState)(!1),[l,u]=(0,B.useState)(!1),[d,f]=(0,B.useState)(!1);(0,B.useEffect)(()=>{let e=window.scrollY,t=()=>{let t=window.scrollY;u(t>40),t>e&&t>80?f(!0):t<e&&f(!1),t<=40&&f(!1),e=t};return window.addEventListener(`scroll`,t),t(),()=>{window.removeEventListener(`scroll`,t)}},[]);let p=e=>{e.preventDefault(),i&&i(),c(!1)};return(0,J.jsxs)(Dr,{$scrolled:l,$scrollingDown:d,children:[(0,J.jsx)(Or,{href:`/`,$dark:a,$scrolled:l,$scrollingDown:d,children:(0,J.jsx)(`img`,{src:Rn,alt:`24 forecast`})}),(0,J.jsxs)(kr,{children:[(0,J.jsx)(Ar,{href:`#about`,children:`Who we are`}),(0,J.jsx)(Ar,{href:`#contacts`,children:`Contacts`}),(0,J.jsx)(Ar,{href:`#menu`,children:`Menu`}),(0,J.jsx)(Ar,{href:`#game`,onClick:p,children:`🎮 Game`})]}),(0,J.jsx)(jr,{children:(0,J.jsx)(Er,{darkMode:a,onToggle:o})}),(0,J.jsxs)(Mr,{children:[!e&&(0,J.jsx)(Nr,{type:`button`,onClick:n,children:`Sign up`}),(0,J.jsx)(Pr,{onClick:r,role:`button`,tabIndex:0,"aria-label":`Open profile`,children:t?(0,J.jsx)(Fr,{src:t,alt:`Profile`}):(0,J.jsx)(`img`,{src:zn,alt:`Profile`})})]}),(0,J.jsxs)(Ir,{type:`button`,$open:s,onClick:()=>c(e=>!e),children:[`Menu`,(0,J.jsx)(`span`,{className:`menu-arrow`,children:s?`↑`:`↓`})]}),(0,J.jsxs)(Lr,{$open:s,children:[(0,J.jsxs)(Rr,{children:[(0,J.jsxs)(zr,{children:[(0,J.jsx)(Ar,{href:`#about`,$mobileIndex:0,$open:s,children:`Who we are`}),(0,J.jsx)(Ar,{href:`#contacts`,$mobileIndex:1,$open:s,children:`Contacts`}),(0,J.jsx)(Ar,{href:`#menu`,$mobileIndex:2,$open:s,children:`Menu`}),(0,J.jsx)(Ar,{href:`#game`,onClick:p,$mobileIndex:3,$open:s,children:`🎮 Game`})]}),(0,J.jsxs)(Br,{$open:s,children:[(0,J.jsx)(Vr,{onClick:r,children:t?(0,J.jsx)(Fr,{src:t,alt:`Profile`}):(0,J.jsx)(`img`,{src:zn,alt:`Profile`})}),!e&&(0,J.jsx)(Hr,{type:`button`,onClick:n,children:`Sign Up`})]})]}),(0,J.jsx)(Ur,{$open:s,children:(0,J.jsx)(Er,{darkMode:a,onToggle:o})})]})]})}var Gr=`/project-forecast/assets/weather-B4Nk2iEj.png`,Kr=q.section`
  position: relative;

  width: 100%;

  height: calc(100vh - 50px);

  min-height: 560px;

  margin: 0;

  overflow: visible;

  display: flex;
  justify-content: center;

  background: #111111;

  margin-top: 64px;

  @media screen and (min-width: 564px) {
    height: calc(100vh - 70px);

    min-height: 600px;

    margin-top: 72px;
  }

  @media screen and (min-width: 1160px) {
    height: calc(100vh - 82px);

    min-height: 650px;

    margin-top: 72px;
  }
`,qr=q.div`
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::after {
    content: "";

    position: absolute;

    inset: 0;

    background:
      rgba(0, 0, 0, 0.48);
  }
`,Jr=q.div`
  position: relative;

  z-index: 1;

  width: 100%;

  max-width: 1100px;

  height: 100%;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  box-sizing: border-box;

  padding: 0 16px;

  @media screen and (min-width: 564px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1160px) {
    padding: 0;
  }
`,Yr=q.h1`
  margin: 0;

  color: #ffffff;

  font-size: 28px;

  font-weight: 700;

  line-height: 1.2;

  text-align: center;

  @media screen and (min-width: 564px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1160px) {
    font-size: 42px;
  }
`,Xr=q.div`
  margin-top: 35px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 20px;

  @media screen and (min-width: 564px) {
    margin-top: 45px;

    gap: 30px;
  }

  @media screen and (min-width: 1160px) {
    margin-top: 55px;

    gap: 40px;
  }
`,Zr=q.p`
  margin: 0;

  color: #ffffff;

  font-size: 14px;

  font-weight: 400;

  line-height: 1.2;

  text-align: right;

  @media screen and (min-width: 564px) {
    font-size: 17px;
  }

  @media screen and (min-width: 1160px) {
    font-size: 20px;

    line-height: 1.15;
  }
`,Qr=q.div`
  width: 2px;

  height: 75px;

  flex-shrink: 0;

  background: #ffffff;

  @media screen and (min-width: 564px) {
    height: 90px;
  }

  @media screen and (min-width: 1160px) {
    height: 110px;
  }
`,$r=q.p`
  margin: 0;

  color: #ffffff;

  font-size: 14px;

  font-weight: 400;

  line-height: 1.2;

  text-align: left;

  sup {
    position: relative;

    top: -2px;

    font-size: 9px;
  }

  @media screen and (min-width: 564px) {
    font-size: 17px;

    sup {
      font-size: 10px;
    }
  }

  @media screen and (min-width: 1160px) {
    font-size: 20px;

    line-height: 1.15;

    sup {
      top: -3px;

      font-size: 12px;
    }
  }
`,ei=q.div`
  position: relative;

  width: calc(100% - 20px);

  max-width: 420px;

  margin-top: 55px;

  @media screen and (min-width: 564px) {
    width: 520px;

    max-width: 100%;

    margin-top: 70px;
  }

  @media screen and (min-width: 1160px) {
    width: 625px;

    margin-top: 90px;
  }
`,ti=q.form`
  width: 100%;

  height: 40px;

  display: flex;

  align-items: stretch;

  overflow: hidden;

  border-radius: 8px;

  background: #ffffff;

  box-shadow:
    0 4px 15px
    rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 564px) {
    height: 42px;
  }

  @media screen and (min-width: 1160px) {
    height: 42px;
  }
`,ni=q.input`
  flex: 1;

  width: 100%;

  min-width: 0;

  height: 40px;

  padding: 0 14px;

  border: none;

  outline: none;

  background: #ffffff;

  color: #222222;

  font-size: 12px;

  font-weight: 400;

  box-sizing: border-box;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 564px) {
    height: 42px;

    padding: 0 18px;

    font-size: 13px;
  }

  @media screen and (min-width: 1160px) {
    padding: 0 20px;

    font-size: 14px;
  }
`,ri=q.button`
  width: 40px;

  height: 40px;

  flex-shrink: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 0;

  border: none;

  background:
    ${({theme:e})=>e.button};

  color: #111111;

  cursor: pointer;

  transition:
    background 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease;

  &:hover {
    background:
      ${({theme:e})=>e.button};

    box-shadow:
      inset 0 -3px 0
      ${({theme:e})=>`${e.button}55`};
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 18px;

    height: 18px;

    transition:
      transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.08);
  }

  @media screen and (min-width: 564px) {
    width: 42px;

    height: 42px;

    svg {
      width: 19px;

      height: 19px;
    }
  }

  @media screen and (min-width: 1160px) {
    width: 42px;

    height: 42px;

    svg {
      width: 20px;

      height: 20px;
    }
  }
`,ii=q.div`
  position: absolute;

  top: calc(100% + 6px);

  left: 0;

  width: 100%;

  max-height: 260px;

  overflow-y: auto;

  overflow-x: hidden;

  border-radius: 10px;

  background: #ffffff;

  box-shadow:
    0 8px 25px
    rgba(0, 0, 0, 0.2);

  z-index: 100;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;

    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background:
      ${({theme:e})=>e.button};

    border-radius: 10px;

    transition:
      background 0.25s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background:
      ${({theme:e})=>e.button};

    box-shadow:
      0 0 5px
      ${({theme:e})=>`${e.button}66`};
  }
`,ai=q.button`
  width: 100%;

  display: flex;

  align-items: center;

  gap: 12px;

  padding: 10px 14px;

  border: none;

  background: #ffffff;

  color: #111111;

  text-align: left;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  svg {
    width: 17px;

    height: 17px;

    flex-shrink: 0;

    color:
      ${({theme:e})=>e.button};

    transition:
      color 0.25s ease,
      transform 0.2s ease;
  }

  &:hover {
    background:
      ${({theme:e})=>`${e.button}18`};

    svg {
      color:
        ${({theme:e})=>e.button};

      transform:
        translateY(-1px)
        scale(1.08);
    }
  }

  &:active {
    transform: scale(0.99);
  }

  @media screen and (min-width: 564px) {
    padding: 12px 16px;

    gap: 13px;
  }
`,oi=q.span`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
`,si=q.span`
  color: #111111;

  font-size: 13px;
  font-weight: 600;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 564px) {
    font-size: 14px;
  }
`,ci=q.span`
  color: #888888;
  font-size: 11px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 564px) {
    font-size: 12px;
  }
`,li=q.div`
  padding: 13px 16px;
  color: #888888;
  font-size: 12px;
  text-align: center;
`,ui=q.button`
  width: 36px;
  height: 40px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: #ffffff;
  color: #999999;

  cursor: pointer;

  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: #111111;
    transform: scale(1.08);
  }

  &:active {
    transform: scale(0.92);
  }

  svg {
    width: 17px;
    height: 17px;
  }
`,di=`b5ad39bd417cd476cc1c17d9b2b53496`;function fi({onCityAdd:e}){let[t,n]=(0,B.useState)(``),[r,i]=(0,B.useState)([]),[a,o]=(0,B.useState)(!1),[s,c]=(0,B.useState)(new Date);(0,B.useEffect)(()=>{let e=setInterval(()=>{c(new Date)},1e3);return()=>clearInterval(e)},[]),(0,B.useEffect)(()=>{let e=t.trim();if(e.length<2){i([]);return}let n=setTimeout(async()=>{try{o(!0);let t=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(e)}&limit=5&appid=${di}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json();i(n)}catch(e){console.error(`Помилка отримання підказок:`,e),i([])}finally{o(!1)}},350);return()=>clearTimeout(n)},[t]);let l=async e=>{let t=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(e)}&limit=1&appid=${di}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json();if(n.length===0)throw Error(`Місто не знайдено`);return n[0]},u=async(r=null)=>{let a=r?r.name:t.trim();if(a)try{let t=r||await l(a),o=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t.lat}&lon=${t.lon}&appid=${di}&units=metric`);if(!o.ok)throw Error(`Weather HTTP error: ${o.status}`);let s=await o.json(),c={id:`${t.lat}-${t.lon}`,name:t.name,country:t.country,temperature:s.main.temp,icon:s.weather[0].icon,description:s.weather[0].description,timezone:s.timezone,latitude:t.lat,longitude:t.lon};e&&e(c),n(``),i([])}catch(e){console.error(`Помилка пошуку:`,e)}},d=e=>{n(e.name),i([]),u(e)},f=e=>{e.preventDefault(),u()},p=s.toLocaleString(`en-US`,{month:`long`}),m=s.getFullYear(),h=s.toLocaleString(`en-US`,{weekday:`long`}),g=s.getDate(),_=e=>{if(e>=11&&e<=13)return`th`;switch(e%10){case 1:return`st`;case 2:return`nd`;case 3:return`rd`;default:return`th`}},v=String(s.getHours()).padStart(2,`0`),y=String(s.getMinutes()).padStart(2,`0`);return(0,J.jsxs)(Kr,{id:`about`,children:[(0,J.jsx)(qr,{style:{backgroundImage:`url(${Gr})`}}),(0,J.jsxs)(Jr,{children:[(0,J.jsx)(Yr,{children:`Weather dashboard`}),(0,J.jsxs)(Xr,{children:[(0,J.jsxs)(Zr,{children:[`Create your personal list of`,(0,J.jsx)(`br`,{}),`favorite cities and always be`,(0,J.jsx)(`br`,{}),`aware of the weather.`]}),(0,J.jsx)(Qr,{}),(0,J.jsxs)($r,{children:[p,` `,m,(0,J.jsx)(`br`,{}),h,`, `,g,(0,J.jsx)(`sup`,{children:_(g)}),(0,J.jsx)(`br`,{}),v,`:`,y]})]}),(0,J.jsxs)(ei,{children:[(0,J.jsxs)(ti,{onSubmit:f,children:[(0,J.jsx)(ni,{id:`weather-search-input`,type:`text`,value:t,onChange:e=>n(e.target.value),placeholder:`Search location...`}),t&&(0,J.jsx)(ui,{type:`button`,onClick:()=>{n(``),i([])},"aria-label":`Clear search`,children:(0,J.jsx)(tr,{})}),(0,J.jsx)(ri,{type:`submit`,children:(0,J.jsx)(ar,{})})]}),t.trim().length>=2&&(0,J.jsx)(ii,{children:a?(0,J.jsx)(li,{children:`Searching...`}):r.length>0?r.map((e,t)=>(0,J.jsxs)(ai,{type:`button`,onClick:()=>d(e),children:[(0,J.jsx)(cr,{}),(0,J.jsxs)(oi,{children:[(0,J.jsx)(si,{children:e.name}),(0,J.jsxs)(ci,{children:[e.state?`${e.state}, `:``,e.country]})]})]},`${e.lat}-${e.lon}-${t}`)):(0,J.jsx)(li,{children:`Location not found`})})]})]})]})}function pi(e){return e+.5|0}var mi=(e,t,n)=>Math.max(Math.min(e,n),t);function hi(e){return mi(pi(e*2.55),0,255)}function gi(e){return mi(pi(e*255),0,255)}function _i(e){return mi(pi(e/2.55)/100,0,1)}function vi(e){return mi(pi(e*100),0,100)}var yi={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},bi=[...`0123456789ABCDEF`],xi=e=>bi[e&15],Si=e=>bi[(e&240)>>4]+bi[e&15],Ci=e=>(e&240)>>4==(e&15),wi=e=>Ci(e.r)&&Ci(e.g)&&Ci(e.b)&&Ci(e.a);function Ti(e){var t=e.length,n;return e[0]===`#`&&(t===4||t===5?n={r:255&yi[e[1]]*17,g:255&yi[e[2]]*17,b:255&yi[e[3]]*17,a:t===5?yi[e[4]]*17:255}:(t===7||t===9)&&(n={r:yi[e[1]]<<4|yi[e[2]],g:yi[e[3]]<<4|yi[e[4]],b:yi[e[5]]<<4|yi[e[6]],a:t===9?yi[e[7]]<<4|yi[e[8]]:255})),n}var Y=(e,t)=>e<255?t(e):``;function Ei(e){var t=wi(e)?xi:Si;return e?`#`+t(e.r)+t(e.g)+t(e.b)+Y(e.a,t):void 0}var Di=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Oi(e,t,n){let r=t*Math.min(n,1-n),i=(t,i=(t+e/30)%12)=>n-r*Math.max(Math.min(i-3,9-i,1),-1);return[i(0),i(8),i(4)]}function ki(e,t,n){let r=(r,i=(r+e/60)%6)=>n-n*t*Math.max(Math.min(i,4-i,1),0);return[r(5),r(3),r(1)]}function Ai(e,t,n){let r=Oi(e,1,.5),i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function ji(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function Mi(e){let t=e.r/255,n=e.g/255,r=e.b/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2,s,c,l;return i!==a&&(l=i-a,c=o>.5?l/(2-i-a):l/(i+a),s=ji(t,n,r,l,i),s=s*60+.5),[s|0,c||0,o]}function Ni(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(gi)}function Pi(e,t,n){return Ni(Oi,e,t,n)}function Fi(e,t,n){return Ni(Ai,e,t,n)}function Ii(e,t,n){return Ni(ki,e,t,n)}function Li(e){return(e%360+360)%360}function Ri(e){let t=Di.exec(e),n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?hi(+t[5]):gi(+t[5]));let i=Li(+t[2]),a=t[3]/100,o=t[4]/100;return r=t[1]===`hwb`?Fi(i,a,o):t[1]===`hsv`?Ii(i,a,o):Pi(i,a,o),{r:r[0],g:r[1],b:r[2],a:n}}function zi(e,t){var n=Mi(e);n[0]=Li(n[0]+t),n=Pi(n),e.r=n[0],e.g=n[1],e.b=n[2]}function Bi(e){if(!e)return;let t=Mi(e),n=t[0],r=vi(t[1]),i=vi(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${_i(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}var Vi={x:`dark`,Z:`light`,Y:`re`,X:`blu`,W:`gr`,V:`medium`,U:`slate`,A:`ee`,T:`ol`,S:`or`,B:`ra`,C:`lateg`,D:`ights`,R:`in`,Q:`turquois`,E:`hi`,P:`ro`,O:`al`,N:`le`,M:`de`,L:`yello`,F:`en`,K:`ch`,G:`arks`,H:`ea`,I:`ightg`,J:`wh`},Hi={OiceXe:`f0f8ff`,antiquewEte:`faebd7`,aqua:`ffff`,aquamarRe:`7fffd4`,azuY:`f0ffff`,beige:`f5f5dc`,bisque:`ffe4c4`,black:`0`,blanKedOmond:`ffebcd`,Xe:`ff`,XeviTet:`8a2be2`,bPwn:`a52a2a`,burlywood:`deb887`,caMtXe:`5f9ea0`,KartYuse:`7fff00`,KocTate:`d2691e`,cSO:`ff7f50`,cSnflowerXe:`6495ed`,cSnsilk:`fff8dc`,crimson:`dc143c`,cyan:`ffff`,xXe:`8b`,xcyan:`8b8b`,xgTMnPd:`b8860b`,xWay:`a9a9a9`,xgYF:`6400`,xgYy:`a9a9a9`,xkhaki:`bdb76b`,xmagFta:`8b008b`,xTivegYF:`556b2f`,xSange:`ff8c00`,xScEd:`9932cc`,xYd:`8b0000`,xsOmon:`e9967a`,xsHgYF:`8fbc8f`,xUXe:`483d8b`,xUWay:`2f4f4f`,xUgYy:`2f4f4f`,xQe:`ced1`,xviTet:`9400d3`,dAppRk:`ff1493`,dApskyXe:`bfff`,dimWay:`696969`,dimgYy:`696969`,dodgerXe:`1e90ff`,fiYbrick:`b22222`,flSOwEte:`fffaf0`,foYstWAn:`228b22`,fuKsia:`ff00ff`,gaRsbSo:`dcdcdc`,ghostwEte:`f8f8ff`,gTd:`ffd700`,gTMnPd:`daa520`,Way:`808080`,gYF:`8000`,gYFLw:`adff2f`,gYy:`808080`,honeyMw:`f0fff0`,hotpRk:`ff69b4`,RdianYd:`cd5c5c`,Rdigo:`4b0082`,ivSy:`fffff0`,khaki:`f0e68c`,lavFMr:`e6e6fa`,lavFMrXsh:`fff0f5`,lawngYF:`7cfc00`,NmoncEffon:`fffacd`,ZXe:`add8e6`,ZcSO:`f08080`,Zcyan:`e0ffff`,ZgTMnPdLw:`fafad2`,ZWay:`d3d3d3`,ZgYF:`90ee90`,ZgYy:`d3d3d3`,ZpRk:`ffb6c1`,ZsOmon:`ffa07a`,ZsHgYF:`20b2aa`,ZskyXe:`87cefa`,ZUWay:`778899`,ZUgYy:`778899`,ZstAlXe:`b0c4de`,ZLw:`ffffe0`,lime:`ff00`,limegYF:`32cd32`,lRF:`faf0e6`,magFta:`ff00ff`,maPon:`800000`,VaquamarRe:`66cdaa`,VXe:`cd`,VScEd:`ba55d3`,VpurpN:`9370db`,VsHgYF:`3cb371`,VUXe:`7b68ee`,VsprRggYF:`fa9a`,VQe:`48d1cc`,VviTetYd:`c71585`,midnightXe:`191970`,mRtcYam:`f5fffa`,mistyPse:`ffe4e1`,moccasR:`ffe4b5`,navajowEte:`ffdead`,navy:`80`,Tdlace:`fdf5e6`,Tive:`808000`,TivedBb:`6b8e23`,Sange:`ffa500`,SangeYd:`ff4500`,ScEd:`da70d6`,pOegTMnPd:`eee8aa`,pOegYF:`98fb98`,pOeQe:`afeeee`,pOeviTetYd:`db7093`,papayawEp:`ffefd5`,pHKpuff:`ffdab9`,peru:`cd853f`,pRk:`ffc0cb`,plum:`dda0dd`,powMrXe:`b0e0e6`,purpN:`800080`,YbeccapurpN:`663399`,Yd:`ff0000`,Psybrown:`bc8f8f`,PyOXe:`4169e1`,saddNbPwn:`8b4513`,sOmon:`fa8072`,sandybPwn:`f4a460`,sHgYF:`2e8b57`,sHshell:`fff5ee`,siFna:`a0522d`,silver:`c0c0c0`,skyXe:`87ceeb`,UXe:`6a5acd`,UWay:`708090`,UgYy:`708090`,snow:`fffafa`,sprRggYF:`ff7f`,stAlXe:`4682b4`,tan:`d2b48c`,teO:`8080`,tEstN:`d8bfd8`,tomato:`ff6347`,Qe:`40e0d0`,viTet:`ee82ee`,JHt:`f5deb3`,wEte:`ffffff`,wEtesmoke:`f5f5f5`,Lw:`ffff00`,LwgYF:`9acd32`};function Ui(){let e={},t=Object.keys(Hi),n=Object.keys(Vi),r,i,a,o,s;for(r=0;r<t.length;r++){for(o=s=t[r],i=0;i<n.length;i++)a=n[i],s=s.replace(a,Vi[a]);a=parseInt(Hi[o],16),e[s]=[a>>16&255,a>>8&255,a&255]}return e}var Wi;function Gi(e){Wi||(Wi=Ui(),Wi.transparent=[0,0,0,0]);let t=Wi[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var Ki=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function qi(e){let t=Ki.exec(e),n=255,r,i,a;if(t){if(t[7]!==r){let e=+t[7];n=t[8]?hi(e):mi(e*255,0,255)}return r=+t[1],i=+t[3],a=+t[5],r=255&(t[2]?hi(r):mi(r,0,255)),i=255&(t[4]?hi(i):mi(i,0,255)),a=255&(t[6]?hi(a):mi(a,0,255)),{r,g:i,b:a,a:n}}}function Ji(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${_i(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}var Yi=e=>e<=.0031308?e*12.92:e**(1/2.4)*1.055-.055,Xi=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function Zi(e,t,n){let r=Xi(_i(e.r)),i=Xi(_i(e.g)),a=Xi(_i(e.b));return{r:gi(Yi(r+n*(Xi(_i(t.r))-r))),g:gi(Yi(i+n*(Xi(_i(t.g))-i))),b:gi(Yi(a+n*(Xi(_i(t.b))-a))),a:e.a+n*(t.a-e.a)}}function Qi(e,t,n){if(e){let r=Mi(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=Pi(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function $i(e,t){return e&&Object.assign(t||{},e)}function ea(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=gi(e[3]))):(t=$i(e,{r:0,g:0,b:0,a:1}),t.a=gi(t.a)),t}function ta(e){return e.charAt(0)===`r`?qi(e):Ri(e)}var na=class e{constructor(t){if(t instanceof e)return t;let n=typeof t,r;n===`object`?r=ea(t):n===`string`&&(r=Ti(t)||Gi(t)||ta(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var e=$i(this._rgb);return e&&(e.a=_i(e.a)),e}set rgb(e){this._rgb=ea(e)}rgbString(){return this._valid?Ji(this._rgb):void 0}hexString(){return this._valid?Ei(this._rgb):void 0}hslString(){return this._valid?Bi(this._rgb):void 0}mix(e,t){if(e){let n=this.rgb,r=e.rgb,i,a=t===i?.5:t,o=2*a-1,s=n.a-r.a,c=((o*s===-1?o:(o+s)/(1+o*s))+1)/2;i=1-c,n.r=255&c*n.r+i*r.r+.5,n.g=255&c*n.g+i*r.g+.5,n.b=255&c*n.b+i*r.b+.5,n.a=a*n.a+(1-a)*r.a,this.rgb=n}return this}interpolate(e,t){return e&&(this._rgb=Zi(this._rgb,e._rgb,t)),this}clone(){return new e(this.rgb)}alpha(e){return this._rgb.a=gi(e),this}clearer(e){let t=this._rgb;return t.a*=1-e,this}greyscale(){let e=this._rgb;return e.r=e.g=e.b=pi(e.r*.3+e.g*.59+e.b*.11),this}opaquer(e){let t=this._rgb;return t.a*=1+e,this}negate(){let e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Qi(this._rgb,2,e),this}darken(e){return Qi(this._rgb,2,-e),this}saturate(e){return Qi(this._rgb,1,e),this}desaturate(e){return Qi(this._rgb,1,-e),this}rotate(e){return zi(this._rgb,e),this}};function ra(){}var ia=(()=>{let e=0;return()=>e++})();function aa(e){return e==null}function oa(e){if(Array.isArray&&Array.isArray(e))return!0;let t=Object.prototype.toString.call(e);return t.slice(0,7)===`[object`&&t.slice(-6)===`Array]`}function sa(e){return e!==null&&Object.prototype.toString.call(e)===`[object Object]`}function ca(e){return(typeof e==`number`||e instanceof Number)&&isFinite(+e)}function la(e,t){return ca(e)?e:t}function ua(e,t){return e===void 0?t:e}var da=(e,t)=>typeof e==`string`&&e.endsWith(`%`)?parseFloat(e)/100*t:+e;function fa(e,t,n){if(e&&typeof e.call==`function`)return e.apply(n,t)}function pa(e,t,n,r){let i,a,o;if(oa(e)){if(a=e.length,r)for(i=a-1;i>=0;i--)t.call(n,e[i],i);else for(i=0;i<a;i++)t.call(n,e[i],i)}else if(sa(e))for(o=Object.keys(e),a=o.length,i=0;i<a;i++)t.call(n,e[o[i]],o[i])}function ma(e,t){let n,r,i,a;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],a=t[n],i.datasetIndex!==a.datasetIndex||i.index!==a.index)return!1;return!0}function ha(e){if(oa(e))return e.map(ha);if(sa(e)){let t=Object.create(null),n=Object.keys(e),r=n.length,i=0;for(;i<r;++i)t[n[i]]=ha(e[n[i]]);return t}return e}function ga(e){return[`__proto__`,`prototype`,`constructor`].indexOf(e)===-1}function _a(e,t,n,r){if(!ga(e))return;let i=t[e],a=n[e];sa(i)&&sa(a)?va(i,a,r):t[e]=ha(a)}function va(e,t,n){let r=oa(t)?t:[t],i=r.length;if(!sa(e))return e;n||={};let a=n.merger||_a,o;for(let t=0;t<i;++t){if(o=r[t],!sa(o))continue;let i=Object.keys(o);for(let t=0,r=i.length;t<r;++t)a(i[t],e,o,n)}return e}function ya(e,t){return va(e,t,{merger:ba})}function ba(e,t,n){if(!ga(e))return;let r=t[e],i=n[e];sa(r)&&sa(i)?ya(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=ha(i))}var xa={"":e=>e,x:e=>e.x,y:e=>e.y};function Sa(e){let t=e.split(`.`),n=[],r=``;for(let e of t)r+=e,r.endsWith(`\\`)?r=r.slice(0,-1)+`.`:(n.push(r),r=``);return n}function Ca(e){let t=Sa(e);return e=>{for(let n of t){if(n===``)break;e&&=e[n]}return e}}function wa(e,t){return(xa[t]||(xa[t]=Ca(t)))(e)}function Ta(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Ea=e=>e!==void 0,Da=e=>typeof e==`function`,Oa=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0};function ka(e){return e.type===`mouseup`||e.type===`click`||e.type===`contextmenu`}var Aa=Math.PI,ja=2*Aa,Ma=ja+Aa,Na=1/0,Pa=Aa/180,Fa=Aa/2,Ia=Aa/4,La=Aa*2/3,Ra=Math.log10,za=Math.sign;function Ba(e,t,n){return Math.abs(e-t)<n}function Va(e){let t=Math.round(e);e=Ba(e,t,e/1e3)?t:e;let n=10**Math.floor(Ra(e)),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function Ha(e){let t=[],n=Math.sqrt(e),r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((e,t)=>e-t).pop(),t}function Ua(e){return typeof e==`symbol`||typeof e==`object`&&!!e&&!(Symbol.toPrimitive in e||`toString`in e||`valueOf`in e)}function Wa(e){return!Ua(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function Ga(e,t){let n=Math.round(e);return n-t<=e&&n+t>=e}function Ka(e,t,n){let r,i,a;for(r=0,i=e.length;r<i;r++)a=e[r][n],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function qa(e){return Aa/180*e}function Ja(e){return 180/Aa*e}function Ya(e){if(!ca(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function Xa(e,t){let n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r),a=Math.atan2(r,n);return a<-.5*Aa&&(a+=ja),{angle:a,distance:i}}function Za(e,t){return Math.sqrt((t.x-e.x)**2+(t.y-e.y)**2)}function Qa(e,t){return(e-t+Ma)%ja-Aa}function $a(e){return(e%ja+ja)%ja}function eo(e,t,n,r){let i=$a(e),a=$a(t),o=$a(n),s=$a(a-i),c=$a(o-i),l=$a(i-a),u=$a(i-o);return i===a||i===o||r&&a===o||s>c&&l<u}function to(e,t,n){return Math.max(t,Math.min(n,e))}function no(e){return to(e,-32768,32767)}function ro(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function X(e,t,n){n||=(n=>e[n]<t);let r=e.length-1,i=0,a;for(;r-i>1;)a=i+r>>1,n(a)?i=a:r=a;return{lo:i,hi:r}}var io=(e,t,n,r)=>X(e,n,r?r=>{let i=e[r][t];return i<n||i===n&&e[r+1][t]===n}:r=>e[r][t]<n),ao=(e,t,n)=>X(e,n,r=>e[r][t]>=n);function oo(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}var so=[`push`,`pop`,`shift`,`splice`,`unshift`];function co(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),so.forEach(t=>{let n=`_onData`+Ta(t),r=e[t];Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value(...t){let i=r.apply(this,t);return e._chartjs.listeners.forEach(e=>{typeof e[n]==`function`&&e[n](...t)}),i}})})}function lo(e,t){let n=e._chartjs;if(!n)return;let r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&(so.forEach(t=>{delete e[t]}),delete e._chartjs)}function uo(e){let t=new Set(e);return t.size===e.length?e:Array.from(t)}var fo=function(){return typeof window>`u`?function(e){return e()}:window.requestAnimationFrame}();function po(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,fo.call(window,()=>{r=!1,e.apply(t,n)}))}}function mo(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}var ho=e=>e===`start`?`left`:e===`end`?`right`:`center`,go=(e,t,n)=>e===`start`?t:e===`end`?n:(t+n)/2;function _o(e,t,n){let r=t.length,i=0,a=r;if(e._sorted){let{iScale:o,vScale:s,_parsed:c}=e,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,u=o.axis,{min:d,max:f,minDefined:p,maxDefined:m}=o.getUserBounds();if(p){if(i=Math.min(io(c,u,d).lo,n?r:io(t,u,o.getPixelForValue(d)).lo),l){let e=c.slice(0,i+1).reverse().findIndex(e=>!aa(e[s.axis]));i-=Math.max(0,e)}i=to(i,0,r-1)}if(m){let e=Math.max(io(c,o.axis,f,!0).hi+1,n?0:io(t,u,o.getPixelForValue(f),!0).hi+1);if(l){let t=c.slice(e-1).findIndex(e=>!aa(e[s.axis]));e+=Math.max(0,t)}a=to(e,i,r)-i}else a=r-i}return{start:i,count:a}}function vo(e){let{xScale:t,yScale:n,_scaleRanges:r}=e,i={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=i,!0;let a=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),a}var yo=e=>e===0||e===1,bo=(e,t,n)=>-(2**(10*--e)*Math.sin((e-t)*ja/n)),xo=(e,t,n)=>2**(-10*e)*Math.sin((e-t)*ja/n)+1,So={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-(--e*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>--e*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*Fa)+1,easeOutSine:e=>Math.sin(e*Fa),easeInOutSine:e=>-.5*(Math.cos(Aa*e)-1),easeInExpo:e=>e===0?0:2**(10*(e-1)),easeOutExpo:e=>e===1?1:-(2**(-10*e))+1,easeInOutExpo:e=>yo(e)?e:e<.5?.5*2**(10*(e*2-1)):.5*(-(2**(-10*(e*2-1)))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1- --e*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>yo(e)?e:bo(e,.075,.3),easeOutElastic:e=>yo(e)?e:xo(e,.075,.3),easeInOutElastic(e){let t=.1125,n=.45;return yo(e)?e:e<.5?.5*bo(e*2,t,n):.5+.5*xo(e*2-1,t,n)},easeInBack(e){return e*e*(2.70158*e-1.70158)},easeOutBack(e){return--e*e*(2.70158*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-So.easeOutBounce(1-e),easeOutBounce(e){let t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},easeInOutBounce:e=>e<.5?So.easeInBounce(e*2)*.5:So.easeOutBounce(e*2-1)*.5+.5};function Co(e){if(e&&typeof e==`object`){let t=e.toString();return t===`[object CanvasPattern]`||t===`[object CanvasGradient]`}return!1}function wo(e){return Co(e)?e:new na(e)}function To(e){return Co(e)?e:new na(e).saturate(.5).darken(.1).hexString()}var Eo=[`x`,`y`,`borderWidth`,`radius`,`tension`],Do=[`color`,`borderColor`,`backgroundColor`];function Oo(e){e.set(`animation`,{delay:void 0,duration:1e3,easing:`easeOutQuart`,fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe(`animation`,{_fallback:!1,_indexable:!1,_scriptable:e=>e!==`onProgress`&&e!==`onComplete`&&e!==`fn`}),e.set(`animations`,{colors:{type:`color`,properties:Do},numbers:{type:`number`,properties:Eo}}),e.describe(`animations`,{_fallback:`animation`}),e.set(`transitions`,{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:`transparent`},visible:{type:`boolean`,duration:0}}},hide:{animations:{colors:{to:`transparent`},visible:{type:`boolean`,easing:`linear`,fn:e=>e|0}}}})}function ko(e){e.set(`layout`,{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var Ao=new Map;function jo(e,t){t||={};let n=e+JSON.stringify(t),r=Ao.get(n);return r||(r=new Intl.NumberFormat(e,t),Ao.set(n,r)),r}function Mo(e,t,n){return jo(t,n).format(e)}var No={values(e){return oa(e)?e:``+e},numeric(e,t,n){if(e===0)return`0`;let r=this.chart.options.locale,i,a=e;if(n.length>1){let t=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(t<1e-4||t>0x38d7ea4c68000)&&(i=`scientific`),a=Po(e,n)}let o=Ra(Math.abs(a)),s=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(c,this.options.ticks.format),Mo(e,r,c)},logarithmic(e,t,n){if(e===0)return`0`;let r=n[t].significand||e/10**Math.floor(Ra(e));return[1,2,3,5,10,15].includes(r)||t>.8*n.length?No.numeric.call(this,e,t,n):``}};function Po(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var Fo={formatters:No};function Io(e){e.set(`scale`,{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:`ticks`,clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:``,padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:``,padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Fo.formatters.values,minor:{},major:{},align:`center`,crossAlign:`near`,showLabelBackdrop:!1,backdropColor:`rgba(255, 255, 255, 0.75)`,backdropPadding:2}}),e.route(`scale.ticks`,`color`,``,`color`),e.route(`scale.grid`,`color`,``,`borderColor`),e.route(`scale.border`,`color`,``,`borderColor`),e.route(`scale.title`,`color`,``,`color`),e.describe(`scale`,{_fallback:!1,_scriptable:e=>!e.startsWith(`before`)&&!e.startsWith(`after`)&&e!==`callback`&&e!==`parser`,_indexable:e=>e!==`borderDash`&&e!==`tickBorderDash`&&e!==`dash`}),e.describe(`scales`,{_fallback:`scale`}),e.describe(`scale.ticks`,{_scriptable:e=>e!==`backdropPadding`&&e!==`callback`,_indexable:e=>e!==`backdropPadding`})}var Lo=Object.create(null),Ro=Object.create(null);function zo(e,t){if(!t)return e;let n=t.split(`.`);for(let t=0,r=n.length;t<r;++t){let r=n[t];e=e[r]||(e[r]=Object.create(null))}return e}function Bo(e,t,n){return typeof t==`string`?va(zo(e,t),n):va(zo(e,``),t)}var Vo=new class{constructor(e,t){this.animation=void 0,this.backgroundColor=`rgba(0,0,0,0.1)`,this.borderColor=`rgba(0,0,0,0.1)`,this.color=`#666`,this.datasets={},this.devicePixelRatio=e=>e.chart.platform.getDevicePixelRatio(),this.elements={},this.events=[`mousemove`,`mouseout`,`click`,`touchstart`,`touchmove`],this.font={family:`'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,size:12,style:`normal`,lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(e,t)=>To(t.backgroundColor),this.hoverBorderColor=(e,t)=>To(t.borderColor),this.hoverColor=(e,t)=>To(t.color),this.indexAxis=`x`,this.interaction={mode:`nearest`,intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return Bo(this,e,t)}get(e){return zo(this,e)}describe(e,t){return Bo(Ro,e,t)}override(e,t){return Bo(Lo,e,t)}route(e,t,n,r){let i=zo(this,e),a=zo(this,n),o=`_`+t;Object.defineProperties(i,{[o]:{value:i[t],writable:!0},[t]:{enumerable:!0,get(){let e=this[o],t=a[r];return sa(e)?Object.assign({},t,e):ua(e,t)},set(e){this[o]=e}}})}apply(e){e.forEach(e=>e(this))}}({_scriptable:e=>!e.startsWith(`on`),_indexable:e=>e!==`events`,hover:{_fallback:`interaction`},interaction:{_scriptable:!1,_indexable:!1}},[Oo,ko,Io]);function Ho(e){return!e||aa(e.size)||aa(e.family)?null:(e.style?e.style+` `:``)+(e.weight?e.weight+` `:``)+e.size+`px `+e.family}function Uo(e,t,n,r,i){let a=t[i];return a||(a=t[i]=e.measureText(i).width,n.push(i)),a>r&&(r=a),r}function Wo(e,t,n,r){r||={};let i=r.data=r.data||{},a=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(i=r.data={},a=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let o=0,s=n.length,c,l,u,d,f;for(c=0;c<s;c++)if(d=n[c],d!=null&&!oa(d))o=Uo(e,i,a,o,d);else if(oa(d))for(l=0,u=d.length;l<u;l++)f=d[l],f!=null&&!oa(f)&&(o=Uo(e,i,a,o,f));e.restore();let p=a.length/2;if(p>n.length){for(c=0;c<p;c++)delete i[a[c]];a.splice(0,p)}return o}function Go(e,t,n){let r=e.currentDevicePixelRatio,i=n===0?0:Math.max(n/2,.5);return Math.round((t-i)*r)/r+i}function Ko(e,t){!t&&!e||(t||=e.getContext(`2d`),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function qo(e,t,n,r){Jo(e,t,n,r,null)}function Jo(e,t,n,r,i){let a,o,s,c,l,u,d,f,p=t.pointStyle,m=t.rotation,h=t.radius,g=(m||0)*Pa;if(p&&typeof p==`object`&&(a=p.toString(),a===`[object HTMLImageElement]`||a===`[object HTMLCanvasElement]`)){e.save(),e.translate(n,r),e.rotate(g),e.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),e.restore();return}if(!(isNaN(h)||h<=0)){switch(e.beginPath(),p){default:i?e.ellipse(n,r,i/2,h,0,0,ja):e.arc(n,r,h,0,ja),e.closePath();break;case`triangle`:u=i?i/2:h,e.moveTo(n+Math.sin(g)*u,r-Math.cos(g)*h),g+=La,e.lineTo(n+Math.sin(g)*u,r-Math.cos(g)*h),g+=La,e.lineTo(n+Math.sin(g)*u,r-Math.cos(g)*h),e.closePath();break;case`rectRounded`:l=h*.516,c=h-l,o=Math.cos(g+Ia)*c,d=Math.cos(g+Ia)*(i?i/2-l:c),s=Math.sin(g+Ia)*c,f=Math.sin(g+Ia)*(i?i/2-l:c),e.arc(n-d,r-s,l,g-Aa,g-Fa),e.arc(n+f,r-o,l,g-Fa,g),e.arc(n+d,r+s,l,g,g+Fa),e.arc(n-f,r+o,l,g+Fa,g+Aa),e.closePath();break;case`rect`:if(!m){c=Math.SQRT1_2*h,u=i?i/2:c,e.rect(n-u,r-c,2*u,2*c);break}g+=Ia;case`rectRot`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+f,r-o),e.lineTo(n+d,r+s),e.lineTo(n-f,r+o),e.closePath();break;case`crossRot`:g+=Ia;case`cross`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o);break;case`star`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o),g+=Ia,d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o);break;case`line`:o=i?i/2:Math.cos(g)*h,s=Math.sin(g)*h,e.moveTo(n-o,r-s),e.lineTo(n+o,r+s);break;case`dash`:e.moveTo(n,r),e.lineTo(n+Math.cos(g)*(i?i/2:h),r+Math.sin(g)*h);break;case!1:e.closePath()}e.fill(),t.borderWidth>0&&e.stroke()}}function Yo(e,t,n){return n||=.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function Xo(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function Zo(e){e.restore()}function Qo(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i===`middle`){let r=(t.x+n.x)/2;e.lineTo(r,t.y),e.lineTo(r,n.y)}else i===`after`==!!r?e.lineTo(n.x,t.y):e.lineTo(t.x,n.y);e.lineTo(n.x,n.y)}function $o(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function es(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),aa(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function ts(e,t,n,r,i){if(i.strikethrough||i.underline){let a=e.measureText(r),o=t-a.actualBoundingBoxLeft,s=t+a.actualBoundingBoxRight,c=n-a.actualBoundingBoxAscent,l=n+a.actualBoundingBoxDescent,u=i.strikethrough?(c+l)/2:l;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(o,u),e.lineTo(s,u),e.stroke()}}function ns(e,t){let n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function rs(e,t,n,r,i,a={}){let o=oa(t)?t:[t],s=a.strokeWidth>0&&a.strokeColor!==``,c,l;for(e.save(),e.font=i.string,es(e,a),c=0;c<o.length;++c)l=o[c],a.backdrop&&ns(e,a.backdrop),s&&(a.strokeColor&&(e.strokeStyle=a.strokeColor),aa(a.strokeWidth)||(e.lineWidth=a.strokeWidth),e.strokeText(l,n,r,a.maxWidth)),e.fillText(l,n,r,a.maxWidth),ts(e,n,r,l,a),r+=Number(i.lineHeight);e.restore()}function is(e,t){let{x:n,y:r,w:i,h:a,radius:o}=t;e.arc(n+o.topLeft,r+o.topLeft,o.topLeft,1.5*Aa,Aa,!0),e.lineTo(n,r+a-o.bottomLeft),e.arc(n+o.bottomLeft,r+a-o.bottomLeft,o.bottomLeft,Aa,Fa,!0),e.lineTo(n+i-o.bottomRight,r+a),e.arc(n+i-o.bottomRight,r+a-o.bottomRight,o.bottomRight,Fa,0,!0),e.lineTo(n+i,r+o.topRight),e.arc(n+i-o.topRight,r+o.topRight,o.topRight,0,-Fa,!0),e.lineTo(n+o.topLeft,r)}var as=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,os=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function ss(e,t){let n=(``+e).match(as);if(!n||n[1]===`normal`)return t*1.2;switch(e=+n[2],n[3]){case`px`:return e;case`%`:e/=100}return t*e}var cs=e=>+e||0;function ls(e,t){let n={},r=sa(t),i=r?Object.keys(t):t,a=sa(e)?r?n=>ua(e[n],e[t[n]]):t=>e[t]:()=>e;for(let e of i)n[e]=cs(a(e));return n}function us(e){return ls(e,{top:`y`,right:`x`,bottom:`y`,left:`x`})}function ds(e){return ls(e,[`topLeft`,`topRight`,`bottomLeft`,`bottomRight`])}function fs(e){let t=us(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function ps(e,t){e||={},t||=Vo.font;let n=ua(e.size,t.size);typeof n==`string`&&(n=parseInt(n,10));let r=ua(e.style,t.style);r&&!(``+r).match(os)&&(console.warn(`Invalid font style specified: "`+r+`"`),r=void 0);let i={family:ua(e.family,t.family),lineHeight:ss(ua(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:ua(e.weight,t.weight),string:``};return i.string=Ho(i),i}function ms(e,t,n,r){let i=!0,a,o,s;for(a=0,o=e.length;a<o;++a)if(s=e[a],s!==void 0&&(t!==void 0&&typeof s==`function`&&(s=s(t),i=!1),n!==void 0&&oa(s)&&(s=s[n%s.length],i=!1),s!==void 0))return r&&!i&&(r.cacheable=!1),s}function hs(e,t,n){let{min:r,max:i}=e,a=da(t,(i-r)/2),o=(e,t)=>n&&e===0?0:e+t;return{min:o(r,-Math.abs(a)),max:o(i,a)}}function gs(e,t){return Object.assign(Object.create(e),t)}function _s(e,t=[``],n,r,i=()=>e[0]){let a=n||e;return r===void 0&&(r=Ns(`_fallback`,e)),new Proxy({[Symbol.toStringTag]:`Object`,_cacheable:!0,_scopes:e,_rootScopes:a,_fallback:r,_getTarget:i,override:n=>_s([n,...e],t,a,r)},{deleteProperty(t,n){return delete t[n],delete t._keys,delete e[0][n],!0},get(n,r){return Ss(n,r,()=>Ms(r,t,e,n))},getOwnPropertyDescriptor(e,t){return Reflect.getOwnPropertyDescriptor(e._scopes[0],t)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(e,t){return Ps(e).includes(t)},ownKeys(e){return Ps(e)},set(e,t,n){let r=e._storage||=i();return e[t]=r[t]=n,delete e._keys,!0}})}function vs(e,t,n,r){let i={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:ys(e,r),setContext:t=>vs(e,t,n,r),override:i=>vs(e.override(i),t,n,r)};return new Proxy(i,{deleteProperty(t,n){return delete t[n],delete e[n],!0},get(e,t,n){return Ss(e,t,()=>Cs(e,t,n))},getOwnPropertyDescriptor(t,n){return t._descriptors.allKeys?Reflect.has(e,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,n)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(t,n){return Reflect.has(e,n)},ownKeys(){return Reflect.ownKeys(e)},set(t,n,r){return e[n]=r,delete t[n],!0}})}function ys(e,t={scriptable:!0,indexable:!0}){let{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:Da(n)?n:()=>n,isIndexable:Da(r)?r:()=>r}}var bs=(e,t)=>e?e+Ta(t):t,xs=(e,t)=>sa(t)&&e!==`adapters`&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Ss(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t===`constructor`)return e[t];let r=n();return e[t]=r,r}function Cs(e,t,n){let{_proxy:r,_context:i,_subProxy:a,_descriptors:o}=e,s=r[t];return Da(s)&&o.isScriptable(t)&&(s=ws(t,s,e,n)),oa(s)&&s.length&&(s=Ts(t,s,e,o.isIndexable)),xs(t,s)&&(s=vs(s,i,a&&a[t],o)),s}function ws(e,t,n,r){let{_proxy:i,_context:a,_subProxy:o,_stack:s}=n;if(s.has(e))throw Error(`Recursion detected: `+Array.from(s).join(`->`)+`->`+e);s.add(e);let c=t(a,o||r);return s.delete(e),xs(e,c)&&(c=ks(i._scopes,i,e,c)),c}function Ts(e,t,n,r){let{_proxy:i,_context:a,_subProxy:o,_descriptors:s}=n;if(a.index!==void 0&&r(e))return t[a.index%t.length];if(sa(t[0])){let n=t,r=i._scopes.filter(e=>e!==n);t=[];for(let c of n){let n=ks(r,i,e,c);t.push(vs(n,a,o&&o[e],s))}}return t}function Es(e,t,n){return Da(e)?e(t,n):e}var Ds=(e,t)=>e===!0?t:typeof e==`string`?wa(t,e):void 0;function Os(e,t,n,r,i){for(let a of t){let t=Ds(n,a);if(t){e.add(t);let a=Es(t._fallback,n,i);if(a!==void 0&&a!==n&&a!==r)return a}else if(t===!1&&r!==void 0&&n!==r)return null}return!1}function ks(e,t,n,r){let i=t._rootScopes,a=Es(t._fallback,n,r),o=[...e,...i],s=new Set;s.add(r);let c=As(s,o,n,a||n,r);return c===null||a!==void 0&&a!==n&&(c=As(s,o,a,c,r),c===null)?!1:_s(Array.from(s),[``],i,a,()=>js(t,n,r))}function As(e,t,n,r,i){for(;n;)n=Os(e,t,n,r,i);return n}function js(e,t,n){let r=e._getTarget();t in r||(r[t]={});let i=r[t];return oa(i)&&sa(n)?n:i||{}}function Ms(e,t,n,r){let i;for(let a of t)if(i=Ns(bs(a,e),n),i!==void 0)return xs(e,i)?ks(n,r,e,i):i}function Ns(e,t){for(let n of t){if(!n)continue;let t=n[e];if(t!==void 0)return t}}function Ps(e){let t=e._keys;return t||=e._keys=Fs(e._scopes),t}function Fs(e){let t=new Set;for(let n of e)for(let e of Object.keys(n).filter(e=>!e.startsWith(`_`)))t.add(e);return Array.from(t)}var Is=2**-52||1e-14,Ls=(e,t)=>t<e.length&&!e[t].skip&&e[t],Rs=e=>e===`x`?`y`:`x`;function zs(e,t,n,r){let i=e.skip?t:e,a=t,o=n.skip?t:n,s=Za(a,i),c=Za(o,a),l=s/(s+c),u=c/(s+c);l=isNaN(l)?0:l,u=isNaN(u)?0:u;let d=r*l,f=r*u;return{previous:{x:a.x-d*(o.x-i.x),y:a.y-d*(o.y-i.y)},next:{x:a.x+f*(o.x-i.x),y:a.y+f*(o.y-i.y)}}}function Bs(e,t,n){let r=e.length,i,a,o,s,c,l=Ls(e,0);for(let u=0;u<r-1;++u)if(c=l,l=Ls(e,u+1),!(!c||!l)){if(Ba(t[u],0,Is)){n[u]=n[u+1]=0;continue}i=n[u]/t[u],a=n[u+1]/t[u],s=i**2+a**2,!(s<=9)&&(o=3/Math.sqrt(s),n[u]=i*o*t[u],n[u+1]=a*o*t[u])}}function Vs(e,t,n=`x`){let r=Rs(n),i=e.length,a,o,s,c=Ls(e,0);for(let l=0;l<i;++l){if(o=s,s=c,c=Ls(e,l+1),!s)continue;let i=s[n],u=s[r];o&&(a=(i-o[n])/3,s[`cp1${n}`]=i-a,s[`cp1${r}`]=u-a*t[l]),c&&(a=(c[n]-i)/3,s[`cp2${n}`]=i+a,s[`cp2${r}`]=u+a*t[l])}}function Hs(e,t=`x`){let n=Rs(t),r=e.length,i=Array(r).fill(0),a=Array(r),o,s,c,l=Ls(e,0);for(o=0;o<r;++o)if(s=c,c=l,l=Ls(e,o+1),c){if(l){let e=l[t]-c[t];i[o]=e===0?0:(l[n]-c[n])/e}a[o]=s?l?za(i[o-1])===za(i[o])?(i[o-1]+i[o])/2:0:i[o-1]:i[o]}Bs(e,i,a),Vs(e,a,t)}function Us(e,t,n){return Math.max(Math.min(e,n),t)}function Ws(e,t){let n,r,i,a,o,s=Yo(e[0],t);for(n=0,r=e.length;n<r;++n)o=a,a=s,s=n<r-1&&Yo(e[n+1],t),a&&(i=e[n],o&&(i.cp1x=Us(i.cp1x,t.left,t.right),i.cp1y=Us(i.cp1y,t.top,t.bottom)),s&&(i.cp2x=Us(i.cp2x,t.left,t.right),i.cp2y=Us(i.cp2y,t.top,t.bottom)))}function Gs(e,t,n,r,i){let a,o,s,c;if(t.spanGaps&&(e=e.filter(e=>!e.skip)),t.cubicInterpolationMode===`monotone`)Hs(e,i);else{let n=r?e[e.length-1]:e[0];for(a=0,o=e.length;a<o;++a)s=e[a],c=zs(n,s,e[Math.min(a+1,o-+!r)%o],t.tension),s.cp1x=c.previous.x,s.cp1y=c.previous.y,s.cp2x=c.next.x,s.cp2y=c.next.y,n=s}t.capBezierPoints&&Ws(e,n)}function Ks(){return typeof window<`u`&&typeof document<`u`}function qs(e){let t=e.parentNode;return t&&t.toString()===`[object ShadowRoot]`&&(t=t.host),t}function Js(e,t,n){let r;return typeof e==`string`?(r=parseInt(e,10),e.indexOf(`%`)!==-1&&(r=r/100*t.parentNode[n])):r=e,r}var Ys=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function Xs(e,t){return Ys(e).getPropertyValue(t)}var Zs=[`top`,`right`,`bottom`,`left`];function Qs(e,t,n){let r={};n=n?`-`+n:``;for(let i=0;i<4;i++){let a=Zs[i];r[a]=parseFloat(e[t+`-`+a+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}var $s=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function ec(e,t){let n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:a}=r,o=!1,s,c;if($s(i,a,e.target))s=i,c=a;else{let e=t.getBoundingClientRect();s=r.clientX-e.left,c=r.clientY-e.top,o=!0}return{x:s,y:c,box:o}}function tc(e,t){if(`native`in e)return e;let{canvas:n,currentDevicePixelRatio:r}=t,i=Ys(n),a=i.boxSizing===`border-box`,o=Qs(i,`padding`),s=Qs(i,`border`,`width`),{x:c,y:l,box:u}=ec(e,n),d=o.left+(u&&s.left),f=o.top+(u&&s.top),{width:p,height:m}=t;return a&&(p-=o.width+s.width,m-=o.height+s.height),{x:Math.round((c-d)/p*n.width/r),y:Math.round((l-f)/m*n.height/r)}}function nc(e,t,n){let r,i;if(t===void 0||n===void 0){let a=e&&qs(e);if(!a)t=e.clientWidth,n=e.clientHeight;else{let e=a.getBoundingClientRect(),o=Ys(a),s=Qs(o,`border`,`width`),c=Qs(o,`padding`);t=e.width-c.width-s.width,n=e.height-c.height-s.height,r=Js(o.maxWidth,a,`clientWidth`),i=Js(o.maxHeight,a,`clientHeight`)}}return{width:t,height:n,maxWidth:r||Na,maxHeight:i||Na}}var rc=e=>Math.round(e*10)/10;function ic(e,t,n,r){let i=Ys(e),a=Qs(i,`margin`),o=Js(i.maxWidth,e,`clientWidth`)||Na,s=Js(i.maxHeight,e,`clientHeight`)||Na,c=nc(e,t,n),{width:l,height:u}=c;if(i.boxSizing===`content-box`){let e=Qs(i,`border`,`width`),t=Qs(i,`padding`);l-=t.width+e.width,u-=t.height+e.height}return l=Math.max(0,l-a.width),u=Math.max(0,r?l/r:u-a.height),l=rc(Math.min(l,o,c.maxWidth)),u=rc(Math.min(u,s,c.maxHeight)),l&&!u&&(u=rc(l/2)),(t!==void 0||n!==void 0)&&r&&c.height&&u>c.height&&(u=c.height,l=rc(Math.floor(u*r))),{width:l,height:u}}function ac(e,t,n){let r=t||1,i=rc(e.height*r),a=rc(e.width*r);e.height=rc(e.height),e.width=rc(e.width);let o=e.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${e.height}px`,o.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||o.height!==i||o.width!==a?(e.currentDevicePixelRatio=r,o.height=i,o.width=a,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}var oc=function(){let e=!1;try{let t={get passive(){return e=!0,!1}};Ks()&&(window.addEventListener(`test`,null,t),window.removeEventListener(`test`,null,t))}catch{}return e}();function sc(e,t){let n=Xs(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function cc(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function lc(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r===`middle`?n<.5?e.y:t.y:r===`after`?n<1?e.y:t.y:n>0?t.y:e.y}}function uc(e,t,n,r){let i={x:e.cp2x,y:e.cp2y},a={x:t.cp1x,y:t.cp1y},o=cc(e,i,n),s=cc(i,a,n),c=cc(a,t,n);return cc(cc(o,s,n),cc(s,c,n),n)}var dc=function(e,t){return{x(n){return e+e+t-n},setWidth(e){t=e},textAlign(e){return e===`center`?e:e===`right`?`left`:`right`},xPlus(e,t){return e-t},leftForLtr(e,t){return e-t}}},fc=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function pc(e,t,n){return e?dc(t,n):fc()}function mc(e,t){let n,r;(t===`ltr`||t===`rtl`)&&(n=e.canvas.style,r=[n.getPropertyValue(`direction`),n.getPropertyPriority(`direction`)],n.setProperty(`direction`,t,`important`),e.prevTextDirection=r)}function hc(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty(`direction`,t[0],t[1]))}function gc(e){return e===`angle`?{between:eo,compare:Qa,normalize:$a}:{between:ro,compare:(e,t)=>e-t,normalize:e=>e}}function _c({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:i}}function vc(e,t,n){let{property:r,start:i,end:a}=n,{between:o,normalize:s}=gc(r),c=t.length,{start:l,end:u,loop:d}=e,f,p;if(d){for(l+=c,u+=c,f=0,p=c;f<p&&o(s(t[l%c][r]),i,a);++f)l--,u--;l%=c,u%=c}return u<l&&(u+=c),{start:l,end:u,loop:d,style:e.style}}function yc(e,t,n){if(!n)return[e];let{property:r,start:i,end:a}=n,o=t.length,{compare:s,between:c,normalize:l}=gc(r),{start:u,end:d,loop:f,style:p}=vc(e,t,n),m=[],h=!1,g=null,_,v,y,b=()=>c(i,y,_)&&s(i,y)!==0,x=()=>s(a,_)===0||c(a,y,_),S=()=>h||b(),C=()=>!h||x();for(let e=u,n=u;e<=d;++e)v=t[e%o],!v.skip&&(_=l(v[r]),_!==y&&(h=c(_,i,a),g===null&&S()&&(g=s(_,i)===0?e:n),g!==null&&C()&&(m.push(_c({start:g,end:e,loop:f,count:o,style:p})),g=null),n=e,y=_));return g!==null&&m.push(_c({start:g,end:d,loop:f,count:o,style:p})),m}function bc(e,t){let n=[],r=e.segments;for(let i=0;i<r.length;i++){let a=yc(r[i],e.points,t);a.length&&n.push(...a)}return n}function xc(e,t,n,r){let i=0,a=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(a+=i);a>i&&e[a%t].skip;)a--;return a%=t,{start:i,end:a}}function Sc(e,t,n,r){let i=e.length,a=[],o=t,s=e[t],c;for(c=t+1;c<=n;++c){let n=e[c%i];n.skip||n.stop?s.skip||(r=!1,a.push({start:t%i,end:(c-1)%i,loop:r}),t=o=n.stop?c:null):(o=c,s.skip&&(t=c)),s=n}return o!==null&&a.push({start:t%i,end:o%i,loop:r}),a}function Cc(e,t){let n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];let a=!!e._loop,{start:o,end:s}=xc(n,i,a,r);return r===!0?wc(e,[{start:o,end:s,loop:a}],n,t):wc(e,Sc(n,o,s<o?s+i:s,!!e._fullLoop&&o===0&&s===i-1),n,t)}function wc(e,t,n,r){return!r||!r.setContext||!n?t:Tc(e,t,n,r)}function Tc(e,t,n,r){let i=e._chart.getContext(),a=Ec(e.options),{_datasetIndex:o,options:{spanGaps:s}}=e,c=n.length,l=[],u=a,d=t[0].start,f=d;function p(e,t,r,i){let a=s?-1:1;if(e!==t){for(e+=c;n[e%c].skip;)e-=a;for(;n[t%c].skip;)t+=a;e%c!==t%c&&(l.push({start:e%c,end:t%c,loop:r,style:i}),u=i,d=t%c)}}for(let e of t){d=s?d:e.start;let t=n[d%c],a;for(f=d+1;f<=e.end;f++){let s=n[f%c];a=Ec(r.setContext(gs(i,{type:`segment`,p0:t,p1:s,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),Dc(a,u)&&p(d,f-1,e.loop,u),t=s,u=a}d<f-1&&p(d,f-1,e.loop,u)}return l}function Ec(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function Dc(e,t){if(!t)return!1;let n=[],r=function(e,t){return Co(t)?(n.includes(t)||n.push(t),n.indexOf(t)):t};return JSON.stringify(e,r)!==JSON.stringify(t,r)}function Oc(e,t,n){return e.options.clip?e[n]:t[n]}function kc(e,t){let{xScale:n,yScale:r}=e;return n&&r?{left:Oc(n,t,`left`),right:Oc(n,t,`right`),top:Oc(r,t,`top`),bottom:Oc(r,t,`bottom`)}:t}function Ac(e,t){let n=t._clip;if(n.disabled)return!1;let r=kc(t,e.chartArea);return{left:n.left===!1?0:r.left-(n.left===!0?0:n.left),right:n.right===!1?e.width:r.right+(n.right===!0?0:n.right),top:n.top===!1?0:r.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?e.height:r.bottom+(n.bottom===!0?0:n.bottom)}}var jc=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,n,r){let i=t.listeners[r],a=t.duration;i.forEach(r=>r({chart:e,initial:t.initial,numSteps:a,currentStep:Math.min(n-t.start,a)}))}_refresh(){this._request||=(this._running=!0,fo.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((n,r)=>{if(!n.running||!n.items.length)return;let i=n.items,a=i.length-1,o=!1,s;for(;a>=0;--a)s=i[a],s._active?(s._total>n.duration&&(n.duration=s._total),s.tick(e),o=!0):(i[a]=i[i.length-1],i.pop());o&&(r.draw(),this._notify(r,n,e,`progress`)),i.length||(n.running=!1,this._notify(r,n,e,`complete`),n.initial=!1),t+=i.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){let t=this._charts,n=t.get(e);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,n)),n}listen(e,t,n){this._getAnims(e).listeners[t].push(n)}add(e,t){!t||!t.length||this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){let t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((e,t)=>Math.max(e,t._duration),0),this._refresh())}running(e){if(!this._running)return!1;let t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){let t=this._charts.get(e);if(!t||!t.items.length)return;let n=t.items,r=n.length-1;for(;r>=0;--r)n[r].cancel();t.items=[],this._notify(e,t,Date.now(),`complete`)}remove(e){return this._charts.delete(e)}},Mc=`transparent`,Nc={boolean(e,t,n){return n>.5?t:e},color(e,t,n){let r=wo(e||Mc),i=r.valid&&wo(t||Mc);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}},Pc=class{constructor(e,t,n,r){let i=t[n];r=ms([e.to,r,i,e.from]);let a=ms([e.from,i,r]);this._active=!0,this._fn=e.fn||Nc[e.type||typeof a],this._easing=So[e.easing]||So.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=n,this._from=a,this._to=r,this._promises=void 0}active(){return this._active}update(e,t,n){if(this._active){this._notify(!1);let r=this._target[this._prop],i=n-this._start,a=this._duration-i;this._start=n,this._duration=Math.floor(Math.max(a,e.duration)),this._total+=i,this._loop=!!e.loop,this._to=ms([e.to,t,r,e.from]),this._from=ms([e.from,r,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){let t=e-this._start,n=this._duration,r=this._prop,i=this._from,a=this._loop,o=this._to,s;if(this._active=i!==o&&(a||t<n),!this._active){this._target[r]=o,this._notify(!0);return}if(t<0){this._target[r]=i;return}s=t/n%2,s=a&&s>1?2-s:s,s=this._easing(Math.min(1,Math.max(0,s))),this._target[r]=this._fn(i,o,s)}wait(){let e=this._promises||=[];return new Promise((t,n)=>{e.push({res:t,rej:n})})}_notify(e){let t=e?`res`:`rej`,n=this._promises||[];for(let e=0;e<n.length;e++)n[e][t]()}},Fc=class{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!sa(e))return;let t=Object.keys(Vo.animation),n=this._properties;Object.getOwnPropertyNames(e).forEach(r=>{let i=e[r];if(!sa(i))return;let a={};for(let e of t)a[e]=i[e];(oa(i.properties)&&i.properties||[r]).forEach(e=>{(e===r||!n.has(e))&&n.set(e,a)})})}_animateOptions(e,t){let n=t.options,r=Lc(e,n);if(!r)return[];let i=this._createAnimations(r,n);return n.$shared&&Ic(e.options.$animations,n).then(()=>{e.options=n},()=>{}),i}_createAnimations(e,t){let n=this._properties,r=[],i=e.$animations||={},a=Object.keys(t),o=Date.now(),s;for(s=a.length-1;s>=0;--s){let c=a[s];if(c.charAt(0)===`$`)continue;if(c===`options`){r.push(...this._animateOptions(e,t));continue}let l=t[c],u=i[c],d=n.get(c);if(u){if(d&&u.active()){u.update(d,l,o);continue}u.cancel()}if(!d||!d.duration){e[c]=l;continue}i[c]=u=new Pc(d,e,c,l),r.push(u)}return r}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}let n=this._createAnimations(e,t);if(n.length)return jc.add(this._chart,n),!0}};function Ic(e,t){let n=[],r=Object.keys(t);for(let t=0;t<r.length;t++){let i=e[r[t]];i&&i.active()&&n.push(i.wait())}return Promise.all(n)}function Lc(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Rc(e,t){let n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,a=n.max===void 0?t:0;return{start:r?a:i,end:r?i:a}}function zc(e,t,n){if(n===!1)return!1;let r=Rc(e,n),i=Rc(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function Bc(e){let t,n,r,i;return sa(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function Vc(e,t){let n=[],r=e._getSortedDatasetMetas(t),i,a;for(i=0,a=r.length;i<a;++i)n.push(r[i].index);return n}function Hc(e,t,n,r={}){let i=e.keys,a=r.mode===`single`,o,s,c,l;if(t===null)return;let u=!1;for(o=0,s=i.length;o<s;++o){if(c=+i[o],c===n){if(u=!0,r.all)continue;break}l=e.values[c],ca(l)&&(a||t===0||za(t)===za(l))&&(t+=l)}return!u&&!r.all?0:t}function Uc(e,t){let{iScale:n,vScale:r}=t,i=n.axis===`x`?`x`:`y`,a=r.axis===`x`?`x`:`y`,o=Object.keys(e),s=Array(o.length),c,l,u;for(c=0,l=o.length;c<l;++c)u=o[c],s[c]={[i]:u,[a]:e[u]};return s}function Wc(e,t){let n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function Gc(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function Kc(e){let{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:-1/0,max:i?n:1/0}}function qc(e,t,n){let r=e[t]||(e[t]={});return r[n]||(r[n]={})}function Jc(e,t,n,r){for(let i of t.getMatchingVisibleMetas(r).reverse()){let t=e[i.index];if(n&&t>0||!n&&t<0)return i.index}return null}function Yc(e,t){let{chart:n,_cachedMeta:r}=e,i=n._stacks||={},{iScale:a,vScale:o,index:s}=r,c=a.axis,l=o.axis,u=Gc(a,o,r),d=t.length,f;for(let e=0;e<d;++e){let n=t[e],{[c]:a,[l]:d}=n,p=n._stacks||={};f=p[l]=qc(i,u,a),f[s]=d,f._top=Jc(f,o,!0,r.type),f._bottom=Jc(f,o,!1,r.type);let m=f._visualValues||(f._visualValues={});m[s]=d}}function Xc(e,t){let n=e.scales;return Object.keys(n).filter(e=>n[e].axis===t).shift()}function Zc(e,t){return gs(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:`default`,type:`dataset`})}function Qc(e,t,n){return gs(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:`default`,type:`data`})}function $c(e,t){let n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t||=e._parsed;for(let e of t){let t=e._stacks;if(!t||t[r]===void 0||t[r][n]===void 0)return;delete t[r][n],t[r]._visualValues!==void 0&&t[r]._visualValues[n]!==void 0&&delete t[r]._visualValues[n]}}}var el=e=>e===`reset`||e===`none`,tl=(e,t)=>t?e:Object.assign({},e),nl=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:Vc(n,!0),values:null},rl=class{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Wc(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled(`filler`)&&console.warn(`Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options`)}updateIndex(e){this.index!==e&&$c(this._cachedMeta),this.index=e}linkScales(){let e=this.chart,t=this._cachedMeta,n=this.getDataset(),r=(e,t,n,r)=>e===`x`?t:e===`r`?r:n,i=t.xAxisID=ua(n.xAxisID,Xc(e,`x`)),a=t.yAxisID=ua(n.yAxisID,Xc(e,`y`)),o=t.rAxisID=ua(n.rAxisID,Xc(e,`r`)),s=t.indexAxis,c=t.iAxisID=r(s,i,a,o),l=t.vAxisID=r(s,a,i,o);t.xScale=this.getScaleForId(i),t.yScale=this.getScaleForId(a),t.rScale=this.getScaleForId(o),t.iScale=this.getScaleForId(c),t.vScale=this.getScaleForId(l)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){let t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update(`reset`)}_destroy(){let e=this._cachedMeta;this._data&&lo(this._data,this),e._stacked&&$c(e)}_dataCheck(){let e=this.getDataset(),t=e.data||=[],n=this._data;if(sa(t)){let e=this._cachedMeta;this._data=Uc(t,e)}else if(n!==t){if(n){lo(n,this);let e=this._cachedMeta;$c(e),e._parsed=[]}t&&Object.isExtensible(t)&&co(t,this),this._syncList=[],this._data=t}}addElements(){let e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){let t=this._cachedMeta,n=this.getDataset(),r=!1;this._dataCheck();let i=t._stacked;t._stacked=Wc(t.vScale,t),t.stack!==n.stack&&(r=!0,$c(t),t.stack=n.stack),this._resyncElements(e),(r||i!==t._stacked)&&(Yc(this,t._parsed),t._stacked=Wc(t.vScale,t))}configure(){let e=this.chart.config,t=e.datasetScopeKeys(this._type),n=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){let{_cachedMeta:n,_data:r}=this,{iScale:i,_stacked:a}=n,o=i.axis,s=e===0&&t===r.length||n._sorted,c=e>0&&n._parsed[e-1],l,u,d;if(this._parsing===!1)n._parsed=r,n._sorted=!0,d=r;else{d=oa(r[e])?this.parseArrayData(n,r,e,t):sa(r[e])?this.parseObjectData(n,r,e,t):this.parsePrimitiveData(n,r,e,t);let i=()=>u[o]===null||c&&u[o]<c[o];for(l=0;l<t;++l)n._parsed[l+e]=u=d[l],s&&(i()&&(s=!1),c=u);n._sorted=s}a&&Yc(this,d)}parsePrimitiveData(e,t,n,r){let{iScale:i,vScale:a}=e,o=i.axis,s=a.axis,c=i.getLabels(),l=i===a,u=Array(r),d,f,p;for(d=0,f=r;d<f;++d)p=d+n,u[d]={[o]:l||i.parse(c[p],p),[s]:a.parse(t[p],p)};return u}parseArrayData(e,t,n,r){let{xScale:i,yScale:a}=e,o=Array(r),s,c,l,u;for(s=0,c=r;s<c;++s)l=s+n,u=t[l],o[s]={x:i.parse(u[0],l),y:a.parse(u[1],l)};return o}parseObjectData(e,t,n,r){let{xScale:i,yScale:a}=e,{xAxisKey:o=`x`,yAxisKey:s=`y`}=this._parsing,c=Array(r),l,u,d,f;for(l=0,u=r;l<u;++l)d=l+n,f=t[d],c[l]={x:i.parse(wa(f,o),d),y:a.parse(wa(f,s),d)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,n){let r=this.chart,i=this._cachedMeta,a=t[e.axis];return Hc({keys:Vc(r,!0),values:t._stacks[e.axis]._visualValues},a,i.index,{mode:n})}updateRangeFromParsed(e,t,n,r){let i=n[t.axis],a=i===null?NaN:i,o=r&&n._stacks[t.axis];r&&o&&(r.values=o,a=Hc(r,i,this._cachedMeta.index)),e.min=Math.min(e.min,a),e.max=Math.max(e.max,a)}getMinMax(e,t){let n=this._cachedMeta,r=n._parsed,i=n._sorted&&e===n.iScale,a=r.length,o=this._getOtherScale(e),s=nl(t,n,this.chart),c={min:1/0,max:-1/0},{min:l,max:u}=Kc(o),d,f;function p(){f=r[d];let t=f[o.axis];return!ca(f[e.axis])||l>t||u<t}for(d=0;d<a&&!(!p()&&(this.updateRangeFromParsed(c,e,f,s),i));++d);if(i){for(d=a-1;d>=0;--d)if(!p()){this.updateRangeFromParsed(c,e,f,s);break}}return c}getAllParsedValues(e){let t=this._cachedMeta._parsed,n=[],r,i,a;for(r=0,i=t.length;r<i;++r)a=t[r][e.axis],ca(a)&&n.push(a);return n}getMaxOverflow(){return!1}getLabelAndValue(e){let t=this._cachedMeta,n=t.iScale,r=t.vScale,i=this.getParsed(e);return{label:n?``+n.getLabelForValue(i[n.axis]):``,value:r?``+r.getLabelForValue(i[r.axis]):``}}_update(e){let t=this._cachedMeta;this.update(e||`default`),t._clip=Bc(ua(this.options.clip,zc(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){let e=this._ctx,t=this.chart,n=this._cachedMeta,r=n.data||[],i=t.chartArea,a=[],o=this._drawStart||0,s=this._drawCount||r.length-o,c=this.options.drawActiveElementsOnTop,l;for(n.dataset&&n.dataset.draw(e,i,o,s),l=o;l<o+s;++l){let t=r[l];t.hidden||(t.active&&c?a.push(t):t.draw(e,i))}for(l=0;l<a.length;++l)a[l].draw(e,i)}getStyle(e,t){let n=t?`active`:`default`;return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(e||0,n)}getContext(e,t,n){let r=this.getDataset(),i;if(e>=0&&e<this._cachedMeta.data.length){let t=this._cachedMeta.data[e];i=t.$context||=Qc(this.getContext(),e,t),i.parsed=this.getParsed(e),i.raw=r.data[e],i.index=i.dataIndex=e}else i=this.$context||=Zc(this.chart.getContext(),this.index),i.dataset=r,i.index=i.datasetIndex=this.index;return i.active=!!t,i.mode=n,i}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t=`default`,n){let r=t===`active`,i=this._cachedDataOpts,a=e+`-`+t,o=i[a],s=this.enableOptionSharing&&Ea(n);if(o)return tl(o,s);let c=this.chart.config,l=c.datasetElementScopeKeys(this._type,e),u=r?[`${e}Hover`,`hover`,e,``]:[e,``],d=c.getOptionScopes(this.getDataset(),l),f=Object.keys(Vo.elements[e]),p=c.resolveNamedOptions(d,f,()=>this.getContext(n,r,t),u);return p.$shared&&(p.$shared=s,i[a]=Object.freeze(tl(p,s))),p}_resolveAnimations(e,t,n){let r=this.chart,i=this._cachedDataOpts,a=`animation-${t}`,o=i[a];if(o)return o;let s;if(r.options.animation!==!1){let r=this.chart.config,i=r.datasetAnimationScopeKeys(this._type,t),a=r.getOptionScopes(this.getDataset(),i);s=r.createResolver(a,this.getContext(e,n,t))}let c=new Fc(r,s&&s.animations);return s&&s._cacheable&&(i[a]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||=Object.assign({},e)}includeOptions(e,t){return!t||el(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){let n=this.resolveDataElementOptions(e,t),r=this._sharedOptions,i=this.getSharedOptions(n),a=this.includeOptions(t,i)||i!==r;return this.updateSharedOptions(i,t,n),{sharedOptions:i,includeOptions:a}}updateElement(e,t,n,r){el(r)?Object.assign(e,n):this._resolveAnimations(t,r).update(e,n)}updateSharedOptions(e,t,n){e&&!el(t)&&this._resolveAnimations(void 0,t).update(e,n)}_setStyle(e,t,n,r){e.active=r;let i=this.getStyle(t,r);this._resolveAnimations(t,n,r).update(e,{options:!r&&this.getSharedOptions(i)||i})}removeHoverStyle(e,t,n){this._setStyle(e,n,`active`,!1)}setHoverStyle(e,t,n){this._setStyle(e,n,`active`,!0)}_removeDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,`active`,!1)}_setDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,`active`,!0)}_resyncElements(e){let t=this._data,n=this._cachedMeta.data;for(let[e,t,n]of this._syncList)this[e](t,n);this._syncList=[];let r=n.length,i=t.length,a=Math.min(i,r);a&&this.parse(0,a),i>r?this._insertElements(r,i-r,e):i<r&&this._removeElements(i,r-i)}_insertElements(e,t,n=!0){let r=this._cachedMeta,i=r.data,a=e+t,o,s=e=>{for(e.length+=t,o=e.length-1;o>=a;o--)e[o]=e[o-t]};for(s(i),o=e;o<a;++o)i[o]=new this.dataElementType;this._parsing&&s(r._parsed),this.parse(e,t),n&&this.updateElements(i,e,t,`reset`)}updateElements(e,t,n,r){}_removeElements(e,t){let n=this._cachedMeta;if(this._parsing){let r=n._parsed.splice(e,t);n._stacked&&$c(n,r)}n.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{let[t,n,r]=e;this[t](n,r)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){let e=arguments.length;this._sync([`_insertElements`,this.getDataset().data.length-e,e])}_onDataPop(){this._sync([`_removeElements`,this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync([`_removeElements`,0,1])}_onDataSplice(e,t){t&&this._sync([`_removeElements`,e,t]);let n=arguments.length-2;n&&this._sync([`_insertElements`,e,n])}_onDataUnshift(){this._sync([`_insertElements`,0,arguments.length])}},il=class extends rl{static id=`line`;static defaults={datasetElementType:`line`,dataElementType:`point`,showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:`category`},_value_:{type:`linear`}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){let t=this._cachedMeta,{dataset:n,data:r=[],_dataset:i}=t,a=this.chart._animationsDisabled,{start:o,count:s}=_o(t,r,a);this._drawStart=o,this._drawCount=s,vo(t)&&(o=0,s=r.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!i._decimated,n.points=r;let c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!a,options:c},e),this.updateElements(r,o,s,e)}updateElements(e,t,n,r){let i=r===`reset`,{iScale:a,vScale:o,_stacked:s,_dataset:c}=this._cachedMeta,{sharedOptions:l,includeOptions:u}=this._getSharedOptions(t,r),d=a.axis,f=o.axis,{spanGaps:p,segment:m}=this.options,h=Wa(p)?p:1/0,g=this.chart._animationsDisabled||i||r===`none`,_=t+n,v=e.length,y=t>0&&this.getParsed(t-1);for(let n=0;n<v;++n){let p=e[n],v=g?p:{};if(n<t||n>=_){v.skip=!0;continue}let b=this.getParsed(n),x=aa(b[f]),S=v[d]=a.getPixelForValue(b[d],n),C=v[f]=i||x?o.getBasePixel():o.getPixelForValue(s?this.applyStack(o,b,s):b[f],n);v.skip=isNaN(S)||isNaN(C)||x,v.stop=n>0&&Math.abs(b[d]-y[d])>h,m&&(v.parsed=b,v.raw=c.data[n]),u&&(v.options=l||this.resolveDataElementOptions(n,p.active?`active`:r)),g||this.updateElement(p,n,v,r),y=b}}getMaxOverflow(){let e=this._cachedMeta,t=e.dataset,n=t.options&&t.options.borderWidth||0,r=e.data||[];if(!r.length)return n;let i=r[0].size(this.resolveDataElementOptions(0)),a=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(n,i,a)/2}draw(){let e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}};function al(){throw Error(`This method is not implemented: Check that a complete date adapter is provided.`)}var ol={_date:class e{static override(t){Object.assign(e.prototype,t)}options;constructor(e){this.options=e||{}}init(){}formats(){return al()}parse(){return al()}format(){return al()}add(){return al()}diff(){return al()}startOf(){return al()}endOf(){return al()}}};function sl(e,t,n,r){let{controller:i,data:a,_sorted:o}=e,s=i._cachedMeta.iScale,c=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(s&&t===s.axis&&t!==`r`&&o&&a.length){let o=s._reversePixels?ao:io;if(!r){let r=o(a,t,n);if(c){let{vScale:t}=i._cachedMeta,{_parsed:n}=e,a=n.slice(0,r.lo+1).reverse().findIndex(e=>!aa(e[t.axis]));r.lo-=Math.max(0,a);let o=n.slice(r.hi).findIndex(e=>!aa(e[t.axis]));r.hi+=Math.max(0,o)}return r}if(i._sharedOptions){let e=a[0],r=typeof e.getRange==`function`&&e.getRange(t);if(r){let e=o(a,t,n-r),i=o(a,t,n+r);return{lo:e.lo,hi:i.hi}}}}return{lo:0,hi:a.length-1}}function cl(e,t,n,r,i){let a=e.getSortedVisibleDatasetMetas(),o=n[t];for(let e=0,n=a.length;e<n;++e){let{index:n,data:s}=a[e],{lo:c,hi:l}=sl(a[e],t,o,i);for(let e=c;e<=l;++e){let t=s[e];t.skip||r(t,n,e)}}}function ll(e){let t=e.indexOf(`x`)!==-1,n=e.indexOf(`y`)!==-1;return function(e,r){let i=t?Math.abs(e.x-r.x):0,a=n?Math.abs(e.y-r.y):0;return Math.sqrt(i**2+a**2)}}function ul(e,t,n,r,i){let a=[];return!i&&!e.isPointInArea(t)||cl(e,n,t,function(n,o,s){!i&&!Yo(n,e.chartArea,0)||n.inRange(t.x,t.y,r)&&a.push({element:n,datasetIndex:o,index:s})},!0),a}function dl(e,t,n,r){let i=[];function a(e,n,a){let{startAngle:o,endAngle:s}=e.getProps([`startAngle`,`endAngle`],r),{angle:c}=Xa(e,{x:t.x,y:t.y});eo(c,o,s)&&i.push({element:e,datasetIndex:n,index:a})}return cl(e,n,t,a),i}function fl(e,t,n,r,i,a){let o=[],s=ll(n),c=1/0;function l(n,l,u){let d=n.inRange(t.x,t.y,i);if(r&&!d)return;let f=n.getCenterPoint(i);if(!(a||e.isPointInArea(f))&&!d)return;let p=s(t,f);p<c?(o=[{element:n,datasetIndex:l,index:u}],c=p):p===c&&o.push({element:n,datasetIndex:l,index:u})}return cl(e,n,t,l),o}function pl(e,t,n,r,i,a){return!a&&!e.isPointInArea(t)?[]:n===`r`&&!r?dl(e,t,n,i):fl(e,t,n,r,i,a)}function ml(e,t,n,r,i){let a=[],o=n===`x`?`inXRange`:`inYRange`,s=!1;return cl(e,n,t,(e,r,c)=>{e[o]&&e[o](t[n],i)&&(a.push({element:e,datasetIndex:r,index:c}),s||=e.inRange(t.x,t.y,i))}),r&&!s?[]:a}var hl={evaluateInteractionItems:cl,modes:{index(e,t,n,r){let i=tc(t,e),a=n.axis||`x`,o=n.includeInvisible||!1,s=n.intersect?ul(e,i,a,r,o):pl(e,i,a,!1,r,o),c=[];return s.length?(e.getSortedVisibleDatasetMetas().forEach(e=>{let t=s[0].index,n=e.data[t];n&&!n.skip&&c.push({element:n,datasetIndex:e.index,index:t})}),c):[]},dataset(e,t,n,r){let i=tc(t,e),a=n.axis||`xy`,o=n.includeInvisible||!1,s=n.intersect?ul(e,i,a,r,o):pl(e,i,a,!1,r,o);if(s.length>0){let t=s[0].datasetIndex,n=e.getDatasetMeta(t).data;s=[];for(let e=0;e<n.length;++e)s.push({element:n[e],datasetIndex:t,index:e})}return s},point(e,t,n,r){return ul(e,tc(t,e),n.axis||`xy`,r,n.includeInvisible||!1)},nearest(e,t,n,r){let i=tc(t,e),a=n.axis||`xy`,o=n.includeInvisible||!1;return pl(e,i,a,n.intersect,r,o)},x(e,t,n,r){return ml(e,tc(t,e),`x`,n.intersect,r)},y(e,t,n,r){return ml(e,tc(t,e),`y`,n.intersect,r)}}},gl=[`left`,`top`,`right`,`bottom`];function _l(e,t){return e.filter(e=>e.pos===t)}function vl(e,t){return e.filter(e=>gl.indexOf(e.pos)===-1&&e.box.axis===t)}function yl(e,t){return e.sort((e,n)=>{let r=t?n:e,i=t?e:n;return r.weight===i.weight?r.index-i.index:r.weight-i.weight})}function bl(e){let t=[],n,r,i,a,o,s;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:a,options:{stack:o,stackWeight:s=1}}=i,t.push({index:n,box:i,pos:a,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&a+o,stackWeight:s});return t}function xl(e){let t={};for(let n of e){let{stack:e,pos:r,stackWeight:i}=n;if(!e||!gl.includes(r))continue;let a=t[e]||(t[e]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=i}return t}function Sl(e,t){let n=xl(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t,a,o,s;for(a=0,o=e.length;a<o;++a){s=e[a];let{fullSize:o}=s.box,c=n[s.stack],l=c&&s.stackWeight/c.weight;s.horizontal?(s.width=l?l*r:o&&t.availableWidth,s.height=i):(s.width=r,s.height=l?l*i:o&&t.availableHeight)}return n}function Cl(e){let t=bl(e),n=yl(t.filter(e=>e.box.fullSize),!0),r=yl(_l(t,`left`),!0),i=yl(_l(t,`right`)),a=yl(_l(t,`top`),!0),o=yl(_l(t,`bottom`)),s=vl(t,`x`),c=vl(t,`y`);return{fullSize:n,leftAndTop:r.concat(a),rightAndBottom:i.concat(c).concat(o).concat(s),chartArea:_l(t,`chartArea`),vertical:r.concat(i).concat(c),horizontal:a.concat(o).concat(s)}}function wl(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function Tl(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function El(e,t,n,r){let{pos:i,box:a}=n,o=e.maxPadding;if(!sa(i)){n.size&&(e[i]-=n.size);let t=r[n.stack]||{size:0,count:1};t.size=Math.max(t.size,n.horizontal?a.height:a.width),n.size=t.size/t.count,e[i]+=n.size}a.getPadding&&Tl(o,a.getPadding());let s=Math.max(0,t.outerWidth-wl(o,e,`left`,`right`)),c=Math.max(0,t.outerHeight-wl(o,e,`top`,`bottom`)),l=s!==e.w,u=c!==e.h;return e.w=s,e.h=c,n.horizontal?{same:l,other:u}:{same:u,other:l}}function Dl(e){let t=e.maxPadding;function n(n){let r=Math.max(t[n]-e[n],0);return e[n]+=r,r}e.y+=n(`top`),e.x+=n(`left`),n(`right`),n(`bottom`)}function Ol(e,t){let n=t.maxPadding;function r(e){let r={left:0,top:0,right:0,bottom:0};return e.forEach(e=>{r[e]=Math.max(t[e],n[e])}),r}return r(e?[`left`,`right`]:[`top`,`bottom`])}function kl(e,t,n,r){let i=[],a,o,s,c,l,u;for(a=0,o=e.length,l=0;a<o;++a){s=e[a],c=s.box,c.update(s.width||t.w,s.height||t.h,Ol(s.horizontal,t));let{same:o,other:d}=El(t,n,s,r);l|=o&&i.length,u||=d,c.fullSize||i.push(s)}return l&&kl(i,t,n,r)||u}function Al(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function jl(e,t,n,r){let i=n.padding,{x:a,y:o}=t;for(let s of e){let e=s.box,c=r[s.stack]||{count:1,placed:0,weight:1},l=s.stackWeight/c.weight||1;if(s.horizontal){let r=t.w*l,a=c.size||e.height;Ea(c.start)&&(o=c.start),e.fullSize?Al(e,i.left,o,n.outerWidth-i.right-i.left,a):Al(e,t.left+c.placed,o,r,a),c.start=o,c.placed+=r,o=e.bottom}else{let r=t.h*l,o=c.size||e.width;Ea(c.start)&&(a=c.start),e.fullSize?Al(e,a,i.top,o,n.outerHeight-i.bottom-i.top):Al(e,a,t.top+c.placed,o,r),c.start=a,c.placed+=r,a=e.right}}t.x=a,t.y=o}var Ml={addBox(e,t){e.boxes||=[],t.fullSize=t.fullSize||!1,t.position=t.position||`top`,t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},e.boxes.push(t)},removeBox(e,t){let n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;let i=fs(e.options.layout.padding),a=Math.max(t-i.width,0),o=Math.max(n-i.height,0),s=Cl(e.boxes),c=s.vertical,l=s.horizontal;pa(e.boxes,e=>{typeof e.beforeLayout==`function`&&e.beforeLayout()});let u=c.reduce((e,t)=>t.box.options&&t.box.options.display===!1?e:e+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:a,availableHeight:o,vBoxMaxWidth:a/2/u,hBoxMaxHeight:o/2}),f=Object.assign({},i);Tl(f,fs(r));let p=Object.assign({maxPadding:f,w:a,h:o,x:i.left,y:i.top},i),m=Sl(c.concat(l),d);kl(s.fullSize,p,d,m),kl(c,p,d,m),kl(l,p,d,m)&&kl(c,p,d,m),Dl(p),jl(s.leftAndTop,p,d,m),p.x+=p.w,p.y+=p.h,jl(s.rightAndBottom,p,d,m),e.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},pa(s.chartArea,t=>{let n=t.box;Object.assign(n,e.chartArea),n.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}},Nl=class{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,n){}removeEventListener(e,t,n){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,n,r){return t=Math.max(0,t||e.width),n||=e.height,{width:t,height:Math.max(0,r?Math.floor(t/r):n)}}isAttached(e){return!0}updateConfig(e){}},Pl=class extends Nl{acquireContext(e){return e&&e.getContext&&e.getContext(`2d`)||null}updateConfig(e){e.options.animation=!1}},Fl=`$chartjs`,Il={touchstart:`mousedown`,touchmove:`mousemove`,touchend:`mouseup`,pointerenter:`mouseenter`,pointerdown:`mousedown`,pointermove:`mousemove`,pointerup:`mouseup`,pointerleave:`mouseout`,pointerout:`mouseout`},Z=e=>e===null||e===``;function Q(e,t){let n=e.style,r=e.getAttribute(`height`),i=e.getAttribute(`width`);if(e[Fl]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||`block`,n.boxSizing=n.boxSizing||`border-box`,Z(i)){let t=sc(e,`width`);t!==void 0&&(e.width=t)}if(Z(r)){if(e.style.height===``)e.height=e.width/(t||2);else{let t=sc(e,`height`);t!==void 0&&(e.height=t)}}return e}var Ll=oc?{passive:!0}:!1;function Rl(e,t,n){e&&e.addEventListener(t,n,Ll)}function zl(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,Ll)}function Bl(e,t){let n=Il[e.type]||e.type,{x:r,y:i}=tc(e,t);return{type:n,chart:t,native:e,x:r===void 0?null:r,y:i===void 0?null:i}}function Vl(e,t){for(let n of e)if(n===t||n.contains(t))return!0}function Hl(e,t,n){let r=e.canvas,i=new MutationObserver(e=>{let t=!1;for(let n of e)t||=Vl(n.addedNodes,r),t&&=!Vl(n.removedNodes,r);t&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function Ul(e,t,n){let r=e.canvas,i=new MutationObserver(e=>{let t=!1;for(let n of e)t||=Vl(n.removedNodes,r),t&&=!Vl(n.addedNodes,r);t&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}var Wl=new Map,Gl=0;function Kl(){let e=window.devicePixelRatio;e!==Gl&&(Gl=e,Wl.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function ql(e,t){Wl.size||window.addEventListener(`resize`,Kl),Wl.set(e,t)}function Jl(e){Wl.delete(e),Wl.size||window.removeEventListener(`resize`,Kl)}function Yl(e,t,n){let r=e.canvas,i=r&&qs(r);if(!i)return;let a=po((e,t)=>{let r=i.clientWidth;n(e,t),r<i.clientWidth&&n()},window),o=new ResizeObserver(e=>{let t=e[0],n=t.contentRect.width,r=t.contentRect.height;(n!==0||r!==0)&&a(n,r)});return o.observe(i),ql(e,a),o}function Xl(e,t,n){n&&n.disconnect(),t===`resize`&&Jl(e)}function Zl(e,t,n){let r=e.canvas,i=po(t=>{e.ctx!==null&&n(Bl(t,e))},e);return Rl(r,t,i),i}var Ql=class extends Nl{acquireContext(e,t){let n=e&&e.getContext&&e.getContext(`2d`);return n&&n.canvas===e?(Q(e,t),n):null}releaseContext(e){let t=e.canvas;if(!t[Fl])return!1;let n=t[Fl].initial;[`height`,`width`].forEach(e=>{let r=n[e];aa(r)?t.removeAttribute(e):t.setAttribute(e,r)});let r=n.style||{};return Object.keys(r).forEach(e=>{t.style[e]=r[e]}),t.width=t.width,delete t[Fl],!0}addEventListener(e,t,n){this.removeEventListener(e,t);let r=e.$proxies||={};r[t]=({attach:Hl,detach:Ul,resize:Yl}[t]||Zl)(e,t,n)}removeEventListener(e,t){let n=e.$proxies||={},r=n[t];r&&(({attach:Xl,detach:Xl,resize:Xl}[t]||zl)(e,t,r),n[t]=void 0)}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,n,r){return ic(e,t,n,r)}isAttached(e){let t=e&&qs(e);return!!(t&&t.isConnected)}};function $l(e){return!Ks()||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas?Pl:Ql}var eu=class{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(e){let{x:t,y:n}=this.getProps([`x`,`y`],e);return{x:t,y:n}}hasValue(){return Wa(this.x)&&Wa(this.y)}getProps(e,t){let n=this.$animations;if(!t||!n)return this;let r={};return e.forEach(e=>{r[e]=n[e]&&n[e].active()?n[e]._to:this[e]}),r}};function tu(e,t){let n=e.options.ticks,r=nu(e),i=Math.min(n.maxTicksLimit||r,r),a=n.major.enabled?iu(t):[],o=a.length,s=a[0],c=a[o-1],l=[];if(o>i)return au(t,l,a,o/i),l;let u=ru(a,t,i);if(o>0){let e,n,r=o>1?Math.round((c-s)/(o-1)):null;for(ou(t,l,u,aa(r)?0:s-r,s),e=0,n=o-1;e<n;e++)ou(t,l,u,a[e],a[e+1]);return ou(t,l,u,c,aa(r)?t.length:c+r),l}return ou(t,l,u),l}function nu(e){let t=e.options.offset,n=e._tickSize(),r=e._length/n+ +!t,i=e._maxLength/n;return Math.floor(Math.min(r,i))}function ru(e,t,n){let r=su(e),i=t.length/n;if(!r)return Math.max(i,1);let a=Ha(r);for(let e=0,t=a.length-1;e<t;e++){let t=a[e];if(t>i)return t}return Math.max(i,1)}function iu(e){let t=[],n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function au(e,t,n,r){let i=0,a=n[0],o;for(r=Math.ceil(r),o=0;o<e.length;o++)o===a&&(t.push(e[o]),i++,a=n[i*r])}function ou(e,t,n,r,i){let a=ua(r,0),o=Math.min(ua(i,e.length),e.length),s=0,c,l,u;for(n=Math.ceil(n),i&&(c=i-r,n=c/Math.floor(c/n)),u=a;u<0;)s++,u=Math.round(a+s*n);for(l=Math.max(a,0);l<o;l++)l===u&&(t.push(e[l]),s++,u=Math.round(a+s*n))}function su(e){let t=e.length,n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}var cu=e=>e===`left`?`right`:e===`right`?`left`:e,lu=(e,t,n)=>t===`top`||t===`left`?e[t]+n:e[t]-n,uu=(e,t)=>Math.min(t||e,e);function du(e,t){let n=[],r=e.length/t,i=e.length,a=0;for(;a<i;a+=r)n.push(e[Math.floor(a)]);return n}function fu(e,t,n){let r=e.ticks.length,i=Math.min(t,r-1),a=e._startPixel,o=e._endPixel,s=1e-6,c=e.getPixelForTick(i),l;if(!(n&&(l=r===1?Math.max(c-a,o-c):t===0?(e.getPixelForTick(1)-c)/2:(c-e.getPixelForTick(i-1))/2,c+=i<t?l:-l,c<a-s||c>o+s)))return c}function pu(e,t){pa(e,e=>{let n=e.gc,r=n.length/2,i;if(r>t){for(i=0;i<r;++i)delete e.data[n[i]];n.splice(0,r)}})}function mu(e){return e.drawTicks?e.tickLength:0}function hu(e,t){if(!e.display)return 0;let n=ps(e.font,t),r=fs(e.padding);return(oa(e.text)?e.text.length:1)*n.lineHeight+r.height}function gu(e,t){return gs(e,{scale:t,type:`scale`})}function _u(e,t,n){return gs(e,{tick:n,index:t,type:`tick`})}function vu(e,t,n){let r=ho(e);return(n&&t!==`right`||!n&&t===`right`)&&(r=cu(r)),r}function yu(e,t,n,r){let{top:i,left:a,bottom:o,right:s,chart:c}=e,{chartArea:l,scales:u}=c,d=0,f,p,m,h=o-i,g=s-a;if(e.isHorizontal()){if(p=go(r,a,s),sa(n)){let e=Object.keys(n)[0],r=n[e];m=u[e].getPixelForValue(r)+h-t}else m=n===`center`?(l.bottom+l.top)/2+h-t:lu(e,n,t);f=s-a}else{if(sa(n)){let e=Object.keys(n)[0],r=n[e];p=u[e].getPixelForValue(r)-g+t}else p=n===`center`?(l.left+l.right)/2-g+t:lu(e,n,t);m=go(r,o,i),d=n===`left`?-Fa:Fa}return{titleX:p,titleY:m,maxWidth:f,rotation:d}}var bu=class e extends eu{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:n,_suggestedMax:r}=this;return e=la(e,1/0),t=la(t,-1/0),n=la(n,1/0),r=la(r,-1/0),{min:la(e,n),max:la(t,r),minDefined:ca(e),maxDefined:ca(t)}}getMinMax(e){let{min:t,max:n,minDefined:r,maxDefined:i}=this.getUserBounds(),a;if(r&&i)return{min:t,max:n};let o=this.getMatchingVisibleMetas();for(let s=0,c=o.length;s<c;++s)a=o[s].controller.getMinMax(this,e),r||(t=Math.min(t,a.min)),i||(n=Math.max(n,a.max));return t=i&&t>n?n:t,n=r&&t>n?t:n,{min:la(t,la(n,t)),max:la(n,la(t,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||=this._computeLabelItems(e)}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){fa(this.options.beforeUpdate,[this])}update(e,t,n){let{beginAtZero:r,grace:i,ticks:a}=this.options,o=a.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||=(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=hs(this,i,r),!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let s=o<this.ticks.length;this._convertTicksToLabels(s?du(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source===`auto`)&&(this.ticks=tu(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),s&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,n;this.isHorizontal()?(t=this.left,n=this.right):(t=this.top,n=this.bottom,e=!e),this._startPixel=t,this._endPixel=n,this._reversePixels=e,this._length=n-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){fa(this.options.afterUpdate,[this])}beforeSetDimensions(){fa(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){fa(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),fa(this.options[e],[this])}beforeDataLimits(){this._callHooks(`beforeDataLimits`)}determineDataLimits(){}afterDataLimits(){this._callHooks(`afterDataLimits`)}beforeBuildTicks(){this._callHooks(`beforeBuildTicks`)}buildTicks(){return[]}afterBuildTicks(){this._callHooks(`afterBuildTicks`)}beforeTickToLabelConversion(){fa(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){let t=this.options.ticks,n,r,i;for(n=0,r=e.length;n<r;n++)i=e[n],i.label=fa(t.callback,[i.value,n,e],this)}afterTickToLabelConversion(){fa(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){fa(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let e=this.options,t=e.ticks,n=uu(this.ticks.length,e.ticks.maxTicksLimit),r=t.minRotation||0,i=t.maxRotation,a=r,o,s,c;if(!this._isVisible()||!t.display||r>=i||n<=1||!this.isHorizontal()){this.labelRotation=r;return}let l=this._getLabelSizes(),u=l.widest.width,d=l.highest.height,f=to(this.chart.width-u,0,this.maxWidth);o=e.offset?this.maxWidth/n:f/(n-1),u+6>o&&(o=f/(n-(e.offset?.5:1)),s=this.maxHeight-mu(e.grid)-t.padding-hu(e.title,this.chart.options.font),c=Math.sqrt(u*u+d*d),a=Ja(Math.min(Math.asin(to((l.highest.height+6)/o,-1,1)),Math.asin(to(s/c,-1,1))-Math.asin(to(d/c,-1,1)))),a=Math.max(r,Math.min(i,a))),this.labelRotation=a}afterCalculateLabelRotation(){fa(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){fa(this.options.beforeFit,[this])}fit(){let e={width:0,height:0},{chart:t,options:{ticks:n,title:r,grid:i}}=this,a=this._isVisible(),o=this.isHorizontal();if(a){let a=hu(r,t.options.font);if(o?(e.width=this.maxWidth,e.height=mu(i)+a):(e.height=this.maxHeight,e.width=mu(i)+a),n.display&&this.ticks.length){let{first:t,last:r,widest:i,highest:a}=this._getLabelSizes(),s=n.padding*2,c=qa(this.labelRotation),l=Math.cos(c),u=Math.sin(c);if(o){let t=n.mirror?0:u*i.width+l*a.height;e.height=Math.min(this.maxHeight,e.height+t+s)}else{let t=n.mirror?0:l*i.width+u*a.height;e.width=Math.min(this.maxWidth,e.width+t+s)}this._calculatePadding(t,r,u,l)}}this._handleMargins(),o?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,n,r){let{ticks:{align:i,padding:a},position:o}=this.options,s=this.labelRotation!==0,c=o!==`top`&&this.axis===`x`;if(this.isHorizontal()){let o=this.getPixelForTick(0)-this.left,l=this.right-this.getPixelForTick(this.ticks.length-1),u=0,d=0;s?c?(u=r*e.width,d=n*t.height):(u=n*e.height,d=r*t.width):i===`start`?d=t.width:i===`end`?u=e.width:i!==`inner`&&(u=e.width/2,d=t.width/2),this.paddingLeft=Math.max((u-o+a)*this.width/(this.width-o),0),this.paddingRight=Math.max((d-l+a)*this.width/(this.width-l),0)}else{let n=t.height/2,r=e.height/2;i===`start`?(n=0,r=e.height):i===`end`&&(n=t.height,r=0),this.paddingTop=n+a,this.paddingBottom=r+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){fa(this.options.afterFit,[this])}isHorizontal(){let{axis:e,position:t}=this.options;return t===`top`||t===`bottom`||e===`x`}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,n;for(t=0,n=e.length;t<n;t++)aa(e[t].label)&&(e.splice(t,1),n--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){let t=this.options.ticks.sampleSize,n=this.ticks;t<n.length&&(n=du(n,t)),this._labelSizes=e=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,n){let{ctx:r,_longestTextCache:i}=this,a=[],o=[],s=Math.floor(t/uu(t,n)),c=0,l=0,u,d,f,p,m,h,g,_,v,y,b;for(u=0;u<t;u+=s){if(p=e[u].label,m=this._resolveTickFontOptions(u),r.font=h=m.string,g=i[h]=i[h]||{data:{},gc:[]},_=m.lineHeight,v=y=0,!aa(p)&&!oa(p))v=Uo(r,g.data,g.gc,v,p),y=_;else if(oa(p))for(d=0,f=p.length;d<f;++d)b=p[d],!aa(b)&&!oa(b)&&(v=Uo(r,g.data,g.gc,v,b),y+=_);a.push(v),o.push(y),c=Math.max(v,c),l=Math.max(y,l)}pu(i,t);let x=a.indexOf(c),S=o.indexOf(l),C=e=>({width:a[e]||0,height:o[e]||0});return{first:C(0),last:C(t-1),widest:C(x),highest:C(S),widths:a,heights:o}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);let t=this._startPixel+e*this._length;return no(this._alignToPixels?Go(this.chart,t,0):t)}getDecimalForPixel(e){let t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){let t=this.ticks||[];if(e>=0&&e<t.length){let n=t[e];return n.$context||=_u(this.getContext(),e,n)}return this.$context||=gu(this.chart.getContext(),this)}_tickSize(){let e=this.options.ticks,t=qa(this.labelRotation),n=Math.abs(Math.cos(t)),r=Math.abs(Math.sin(t)),i=this._getLabelSizes(),a=e.autoSkipPadding||0,o=i?i.widest.width+a:0,s=i?i.highest.height+a:0;return this.isHorizontal()?s*n>o*r?o/n:s/r:s*r<o*n?s/n:o/r}_isVisible(){let e=this.options.display;return e===`auto`?this.getMatchingVisibleMetas().length>0:!!e}_computeGridLineItems(e){let t=this.axis,n=this.chart,r=this.options,{grid:i,position:a,border:o}=r,s=i.offset,c=this.isHorizontal(),l=this.ticks.length+ +!!s,u=mu(i),d=[],f=o.setContext(this.getContext()),p=f.display?f.width:0,m=p/2,h=function(e){return Go(n,e,p)},g,_,v,y,b,x,S,C,w,T,E,ee;if(a===`top`)g=h(this.bottom),x=this.bottom-u,C=g-m,T=h(e.top)+m,ee=e.bottom;else if(a===`bottom`)g=h(this.top),T=e.top,ee=h(e.bottom)-m,x=g+m,C=this.top+u;else if(a===`left`)g=h(this.right),b=this.right-u,S=g-m,w=h(e.left)+m,E=e.right;else if(a===`right`)g=h(this.left),w=e.left,E=h(e.right)-m,b=g+m,S=this.left+u;else if(t===`x`){if(a===`center`)g=h((e.top+e.bottom)/2+.5);else if(sa(a)){let e=Object.keys(a)[0],t=a[e];g=h(this.chart.scales[e].getPixelForValue(t))}T=e.top,ee=e.bottom,x=g+m,C=x+u}else if(t===`y`){if(a===`center`)g=h((e.left+e.right)/2);else if(sa(a)){let e=Object.keys(a)[0],t=a[e];g=h(this.chart.scales[e].getPixelForValue(t))}b=g-m,S=b-u,w=e.left,E=e.right}let D=ua(r.ticks.maxTicksLimit,l),te=Math.max(1,Math.ceil(l/D));for(_=0;_<l;_+=te){let e=this.getContext(_),t=i.setContext(e),r=o.setContext(e),a=t.lineWidth,l=t.color,u=r.dash||[],f=r.dashOffset,p=t.tickWidth,m=t.tickColor,h=t.tickBorderDash||[],g=t.tickBorderDashOffset;v=fu(this,_,s),v!==void 0&&(y=Go(n,v,a),c?b=S=w=E=y:x=C=T=ee=y,d.push({tx1:b,ty1:x,tx2:S,ty2:C,x1:w,y1:T,x2:E,y2:ee,width:a,color:l,borderDash:u,borderDashOffset:f,tickWidth:p,tickColor:m,tickBorderDash:h,tickBorderDashOffset:g}))}return this._ticksLength=l,this._borderValue=g,d}_computeLabelItems(e){let t=this.axis,n=this.options,{position:r,ticks:i}=n,a=this.isHorizontal(),o=this.ticks,{align:s,crossAlign:c,padding:l,mirror:u}=i,d=mu(n.grid),f=d+l,p=u?-l:f,m=-qa(this.labelRotation),h=[],g,_,v,y,b,x,S,C,w,T,E,ee,D=`middle`;if(r===`top`)x=this.bottom-p,S=this._getXAxisLabelAlignment();else if(r===`bottom`)x=this.top+p,S=this._getXAxisLabelAlignment();else if(r===`left`){let e=this._getYAxisLabelAlignment(d);S=e.textAlign,b=e.x}else if(r===`right`){let e=this._getYAxisLabelAlignment(d);S=e.textAlign,b=e.x}else if(t===`x`){if(r===`center`)x=(e.top+e.bottom)/2+f;else if(sa(r)){let e=Object.keys(r)[0],t=r[e];x=this.chart.scales[e].getPixelForValue(t)+f}S=this._getXAxisLabelAlignment()}else if(t===`y`){if(r===`center`)b=(e.left+e.right)/2-f;else if(sa(r)){let e=Object.keys(r)[0],t=r[e];b=this.chart.scales[e].getPixelForValue(t)}S=this._getYAxisLabelAlignment(d).textAlign}t===`y`&&(s===`start`?D=`top`:s===`end`&&(D=`bottom`));let te=this._getLabelSizes();for(g=0,_=o.length;g<_;++g){v=o[g],y=v.label;let e=i.setContext(this.getContext(g));C=this.getPixelForTick(g)+i.labelOffset,w=this._resolveTickFontOptions(g),T=w.lineHeight,E=oa(y)?y.length:1;let t=E/2,n=e.color,s=e.textStrokeColor,l=e.textStrokeWidth,d=S;a?(b=C,S===`inner`&&(d=g===_-1?this.options.reverse?`left`:`right`:g===0?this.options.reverse?`right`:`left`:`center`),ee=r===`top`?c===`near`||m!==0?-E*T+T/2:c===`center`?-te.highest.height/2-t*T+T:-te.highest.height+T/2:c===`near`||m!==0?T/2:c===`center`?te.highest.height/2-t*T:te.highest.height-E*T,u&&(ee*=-1),m!==0&&!e.showLabelBackdrop&&(b+=T/2*Math.sin(m))):(x=C,ee=(1-E)*T/2);let f;if(e.showLabelBackdrop){let t=fs(e.backdropPadding),n=te.heights[g],r=te.widths[g],i=ee-t.top,a=0-t.left;switch(D){case`middle`:i-=n/2;break;case`bottom`:i-=n}switch(S){case`center`:a-=r/2;break;case`right`:a-=r;break;case`inner`:g===_-1?a-=r:g>0&&(a-=r/2)}f={left:a,top:i,width:r+t.width,height:n+t.height,color:e.backdropColor}}h.push({label:y,font:w,textOffset:ee,options:{rotation:m,color:n,strokeColor:s,strokeWidth:l,textAlign:d,textBaseline:D,translation:[b,x],backdrop:f}})}return h}_getXAxisLabelAlignment(){let{position:e,ticks:t}=this.options;if(-qa(this.labelRotation))return e===`top`?`left`:`right`;let n=`center`;return t.align===`start`?n=`left`:t.align===`end`?n=`right`:t.align===`inner`&&(n=`inner`),n}_getYAxisLabelAlignment(e){let{position:t,ticks:{crossAlign:n,mirror:r,padding:i}}=this.options,a=this._getLabelSizes(),o=e+i,s=a.widest.width,c,l;return t===`left`?r?(l=this.right+i,n===`near`?c=`left`:n===`center`?(c=`center`,l+=s/2):(c=`right`,l+=s)):(l=this.right-o,n===`near`?c=`right`:n===`center`?(c=`center`,l-=s/2):(c=`left`,l=this.left)):t===`right`?r?(l=this.left+i,n===`near`?c=`right`:n===`center`?(c=`center`,l-=s/2):(c=`left`,l-=s)):(l=this.left+o,n===`near`?c=`left`:n===`center`?(c=`center`,l+=s/2):(c=`right`,l=this.right)):c=`right`,{textAlign:c,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;let e=this.chart,t=this.options.position;if(t===`left`||t===`right`)return{top:0,left:this.left,bottom:e.height,right:this.right};if(t===`top`||t===`bottom`)return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){let{ctx:e,options:{backgroundColor:t},left:n,top:r,width:i,height:a}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(n,r,i,a),e.restore())}getLineWidthForValue(e){let t=this.options.grid;if(!this._isVisible()||!t.display)return 0;let n=this.ticks.findIndex(t=>t.value===e);return n>=0?t.setContext(this.getContext(n)).lineWidth:0}drawGrid(e){let t=this.options.grid,n=this.ctx,r=this._gridLineItems||=this._computeGridLineItems(e),i,a,o=(e,t,r)=>{!r.width||!r.color||(n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.setLineDash(r.borderDash||[]),n.lineDashOffset=r.borderDashOffset,n.beginPath(),n.moveTo(e.x,e.y),n.lineTo(t.x,t.y),n.stroke(),n.restore())};if(t.display)for(i=0,a=r.length;i<a;++i){let e=r[i];t.drawOnChartArea&&o({x:e.x1,y:e.y1},{x:e.x2,y:e.y2},e),t.drawTicks&&o({x:e.tx1,y:e.ty1},{x:e.tx2,y:e.ty2},{color:e.tickColor,width:e.tickWidth,borderDash:e.tickBorderDash,borderDashOffset:e.tickBorderDashOffset})}}drawBorder(){let{chart:e,ctx:t,options:{border:n,grid:r}}=this,i=n.setContext(this.getContext()),a=n.display?i.width:0;if(!a)return;let o=r.setContext(this.getContext(0)).lineWidth,s=this._borderValue,c,l,u,d;this.isHorizontal()?(c=Go(e,this.left,a)-a/2,l=Go(e,this.right,o)+o/2,u=d=s):(u=Go(e,this.top,a)-a/2,d=Go(e,this.bottom,o)+o/2,c=l=s),t.save(),t.lineWidth=i.width,t.strokeStyle=i.color,t.beginPath(),t.moveTo(c,u),t.lineTo(l,d),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;let t=this.ctx,n=this._computeLabelArea();n&&Xo(t,n);let r=this.getLabelItems(e);for(let e of r){let n=e.options,r=e.font,i=e.label,a=e.textOffset;rs(t,i,0,a,r,n)}n&&Zo(t)}drawTitle(){let{ctx:e,options:{position:t,title:n,reverse:r}}=this;if(!n.display)return;let i=ps(n.font),a=fs(n.padding),o=n.align,s=i.lineHeight/2;t===`bottom`||t===`center`||sa(t)?(s+=a.bottom,oa(n.text)&&(s+=i.lineHeight*(n.text.length-1))):s+=a.top;let{titleX:c,titleY:l,maxWidth:u,rotation:d}=yu(this,s,t,o);rs(e,n.text,0,0,i,{color:n.color,maxWidth:u,rotation:d,textAlign:vu(o,t,r),textBaseline:`middle`,translation:[c,l]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){let t=this.options,n=t.ticks&&t.ticks.z||0,r=ua(t.grid&&t.grid.z,-1),i=ua(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==e.prototype.draw?[{z:n,draw:e=>{this.draw(e)}}]:[{z:r,draw:e=>{this.drawBackground(),this.drawGrid(e),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:e=>{this.drawLabels(e)}}]}getMatchingVisibleMetas(e){let t=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+`AxisID`,r=[],i,a;for(i=0,a=t.length;i<a;++i){let a=t[i];a[n]===this.id&&(!e||a.type===e)&&r.push(a)}return r}_resolveTickFontOptions(e){return ps(this.options.ticks.setContext(this.getContext(e)).font)}_maxDigits(){let e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}},xu=class{constructor(e,t,n){this.type=e,this.scope=t,this.override=n,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){let t=Object.getPrototypeOf(e),n;wu(t)&&(n=this.register(t));let r=this.items,i=e.id,a=this.scope+`.`+i;if(!i)throw Error(`class does not have id: `+e);return i in r?a:(r[i]=e,Su(e,a,n),this.override&&Vo.override(e.id,e.overrides),a)}get(e){return this.items[e]}unregister(e){let t=this.items,n=e.id,r=this.scope;n in t&&delete t[n],r&&n in Vo[r]&&(delete Vo[r][n],this.override&&delete Lo[n])}};function Su(e,t,n){let r=va(Object.create(null),[n?Vo.get(n):{},Vo.get(t),e.defaults]);Vo.set(t,r),e.defaultRoutes&&Cu(t,e.defaultRoutes),e.descriptors&&Vo.describe(t,e.descriptors)}function Cu(e,t){Object.keys(t).forEach(n=>{let r=n.split(`.`),i=r.pop(),a=[e].concat(r).join(`.`),o=t[n].split(`.`),s=o.pop(),c=o.join(`.`);Vo.route(a,i,c,s)})}function wu(e){return`id`in e&&`defaults`in e}var Tu=new class{constructor(){this.controllers=new xu(rl,`datasets`,!0),this.elements=new xu(eu,`elements`),this.plugins=new xu(Object,`plugins`),this.scales=new xu(bu,`scales`),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each(`register`,e)}remove(...e){this._each(`unregister`,e)}addControllers(...e){this._each(`register`,e,this.controllers)}addElements(...e){this._each(`register`,e,this.elements)}addPlugins(...e){this._each(`register`,e,this.plugins)}addScales(...e){this._each(`register`,e,this.scales)}getController(e){return this._get(e,this.controllers,`controller`)}getElement(e){return this._get(e,this.elements,`element`)}getPlugin(e){return this._get(e,this.plugins,`plugin`)}getScale(e){return this._get(e,this.scales,`scale`)}removeControllers(...e){this._each(`unregister`,e,this.controllers)}removeElements(...e){this._each(`unregister`,e,this.elements)}removePlugins(...e){this._each(`unregister`,e,this.plugins)}removeScales(...e){this._each(`unregister`,e,this.scales)}_each(e,t,n){[...t].forEach(t=>{let r=n||this._getRegistryForType(t);n||r.isForType(t)||r===this.plugins&&t.id?this._exec(e,r,t):pa(t,t=>{let r=n||this._getRegistryForType(t);this._exec(e,r,t)})})}_exec(e,t,n){let r=Ta(e);fa(n[`before`+r],[],n),t[e](n),fa(n[`after`+r],[],n)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){let n=this._typedRegistries[t];if(n.isForType(e))return n}return this.plugins}_get(e,t,n){let r=t.get(e);if(r===void 0)throw Error(`"`+e+`" is not a registered `+n+`.`);return r}},Eu=class{constructor(){this._init=void 0}notify(e,t,n,r){if(t===`beforeInit`&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,`install`)),this._init===void 0)return;let i=r?this._descriptors(e).filter(r):this._descriptors(e),a=this._notify(i,e,t,n);return t===`afterDestroy`&&(this._notify(i,e,`stop`),this._notify(this._init,e,`uninstall`),this._init=void 0),a}_notify(e,t,n,r){r||={};for(let i of e){let e=i.plugin,a=e[n];if(fa(a,[t,r,i.options],e)===!1&&r.cancelable)return!1}return!0}invalidate(){aa(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;let t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){let n=e&&e.config,r=ua(n.options&&n.options.plugins,{}),i=Du(n);return r===!1&&!t?[]:ku(e,i,r,t)}_notifyStateChanges(e){let t=this._oldCache||[],n=this._cache,r=(e,t)=>e.filter(e=>!t.some(t=>e.plugin.id===t.plugin.id));this._notify(r(t,n),e,`stop`),this._notify(r(n,t),e,`start`)}};function Du(e){let t={},n=[],r=Object.keys(Tu.plugins.items);for(let e=0;e<r.length;e++)n.push(Tu.getPlugin(r[e]));let i=e.plugins||[];for(let e=0;e<i.length;e++){let r=i[e];n.indexOf(r)===-1&&(n.push(r),t[r.id]=!0)}return{plugins:n,localIds:t}}function Ou(e,t){return!t&&e===!1?null:e===!0?{}:e}function ku(e,{plugins:t,localIds:n},r,i){let a=[],o=e.getContext();for(let s of t){let t=s.id,c=Ou(r[t],i);c!==null&&a.push({plugin:s,options:Au(e.config,{plugin:s,local:n[t]},c,o)})}return a}function Au(e,{plugin:t,local:n},r,i){let a=e.pluginScopeKeys(t),o=e.getOptionScopes(r,a);return n&&t.defaults&&o.push(t.defaults),e.createResolver(o,i,[``],{scriptable:!1,indexable:!1,allKeys:!0})}function ju(e,t){let n=Vo.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||`x`}function Mu(e,t){let n=e;return e===`_index_`?n=t:e===`_value_`&&(n=t===`x`?`y`:`x`),n}function Nu(e,t){return e===t?`_index_`:`_value_`}function Pu(e){if(e===`x`||e===`y`||e===`r`)return e}function Fu(e){if(e===`top`||e===`bottom`)return`x`;if(e===`left`||e===`right`)return`y`}function Iu(e,...t){if(Pu(e))return e;for(let n of t){let t=n.axis||Fu(n.position)||e.length>1&&Pu(e[0].toLowerCase());if(t)return t}throw Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function Lu(e,t,n){if(n[t+`AxisID`]===e)return{axis:t}}function Ru(e,t){if(t.data&&t.data.datasets){let n=t.data.datasets.filter(t=>t.xAxisID===e||t.yAxisID===e);if(n.length)return Lu(e,`x`,n[0])||Lu(e,`y`,n[0])}return{}}function zu(e,t){let n=Lo[e.type]||{scales:{}},r=t.scales||{},i=ju(e.type,t),a=Object.create(null);return Object.keys(r).forEach(t=>{let o=r[t];if(!sa(o))return console.error(`Invalid scale configuration for scale: ${t}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);let s=Iu(t,o,Ru(t,e),Vo.scales[o.type]),c=Nu(s,i),l=n.scales||{};a[t]=ya(Object.create(null),[{axis:s},o,l[s],l[c]])}),e.data.datasets.forEach(n=>{let i=n.type||e.type,o=n.indexAxis||ju(i,t),s=(Lo[i]||{}).scales||{};Object.keys(s).forEach(e=>{let t=Mu(e,o),i=n[t+`AxisID`]||t;a[i]=a[i]||Object.create(null),ya(a[i],[{axis:t},r[i],s[e]])})}),Object.keys(a).forEach(e=>{let t=a[e];ya(t,[Vo.scales[t.type],Vo.scale])}),a}function Bu(e){let t=e.options||={};t.plugins=ua(t.plugins,{}),t.scales=zu(e,t)}function Vu(e){return e||={},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function Hu(e){return e||={},e.data=Vu(e.data),Bu(e),e}var Uu=new Map,Wu=new Set;function Gu(e,t){let n=Uu.get(e);return n||(n=t(),Uu.set(e,n),Wu.add(n)),n}var Ku=(e,t,n)=>{let r=wa(t,n);r!==void 0&&e.add(r)},qu=class{constructor(e){this._config=Hu(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=Vu(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){let e=this._config;this.clearCache(),Bu(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Gu(e,()=>[[`datasets.${e}`,``]])}datasetAnimationScopeKeys(e,t){return Gu(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,``]])}datasetElementScopeKeys(e,t){return Gu(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,``]])}pluginScopeKeys(e){let t=e.id,n=this.type;return Gu(`${n}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){let n=this._scopeCache,r=n.get(e);return(!r||t)&&(r=new Map,n.set(e,r)),r}getOptionScopes(e,t,n){let{options:r,type:i}=this,a=this._cachedScopes(e,n),o=a.get(t);if(o)return o;let s=new Set;t.forEach(t=>{e&&(s.add(e),t.forEach(t=>Ku(s,e,t))),t.forEach(e=>Ku(s,r,e)),t.forEach(e=>Ku(s,Lo[i]||{},e)),t.forEach(e=>Ku(s,Vo,e)),t.forEach(e=>Ku(s,Ro,e))});let c=Array.from(s);return c.length===0&&c.push(Object.create(null)),Wu.has(t)&&a.set(t,c),c}chartOptionScopes(){let{options:e,type:t}=this;return[e,Lo[t]||{},Vo.datasets[t]||{},{type:t},Vo,Ro]}resolveNamedOptions(e,t,n,r=[``]){let i={$shared:!0},{resolver:a,subPrefixes:o}=Ju(this._resolverCache,e,r),s=a;if(Xu(a,t)){i.$shared=!1,n=Da(n)?n():n;let t=this.createResolver(e,n,o);s=vs(a,n,t)}for(let e of t)i[e]=s[e];return i}createResolver(e,t,n=[``],r){let{resolver:i}=Ju(this._resolverCache,e,n);return sa(t)?vs(i,t,void 0,r):i}};function Ju(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));let i=n.join(),a=r.get(i);return a||(a={resolver:_s(t,n),subPrefixes:n.filter(e=>!e.toLowerCase().includes(`hover`))},r.set(i,a)),a}var Yu=e=>sa(e)&&Object.getOwnPropertyNames(e).some(t=>Da(e[t]));function Xu(e,t){let{isScriptable:n,isIndexable:r}=ys(e);for(let i of t){let t=n(i),a=r(i),o=(a||t)&&e[i];if(t&&(Da(o)||Yu(o))||a&&oa(o))return!0}return!1}var Zu=`4.5.1`,Qu=[`top`,`bottom`,`left`,`right`,`chartArea`];function $u(e,t){return e===`top`||e===`bottom`||Qu.indexOf(e)===-1&&t===`x`}function ed(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function td(e){let t=e.chart,n=t.options.animation;t.notifyPlugins(`afterRender`),fa(n&&n.onComplete,[e],t)}function nd(e){let t=e.chart,n=t.options.animation;fa(n&&n.onProgress,[e],t)}function rd(e){return Ks()&&typeof e==`string`?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}var id={},ad=e=>{let t=rd(e);return Object.values(id).filter(e=>e.canvas===t).pop()};function od(e,t,n){let r=Object.keys(e);for(let i of r){let r=+i;if(r>=t){let a=e[i];delete e[i],(n>0||r>t)&&(e[r+n]=a)}}}function sd(e,t,n,r){return!n||e.type===`mouseout`?null:r?t:e}var cd=class{static defaults=Vo;static instances=id;static overrides=Lo;static registry=Tu;static version=Zu;static getChart=ad;static register(...e){Tu.add(...e),ld()}static unregister(...e){Tu.remove(...e),ld()}constructor(e,t){let n=this.config=new qu(t),r=rd(e),i=ad(r);if(i)throw Error(`Canvas is already in use. Chart with ID '`+i.id+`' must be destroyed before the canvas with ID '`+i.canvas.id+`' can be reused.`);let a=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||($l(r))),this.platform.updateConfig(n);let o=this.platform.acquireContext(r,a.aspectRatio),s=o&&o.canvas,c=s&&s.height,l=s&&s.width;if(this.id=ia(),this.ctx=o,this.canvas=s,this.width=l,this.height=c,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Eu,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=mo(e=>this.update(e),a.resizeDelay||0),this._dataChanges=[],id[this.id]=this,!o||!s){console.error(`Failed to create chart: can't acquire context from the given item`);return}jc.listen(this,`complete`,td),jc.listen(this,`progress`,nd),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:e,maintainAspectRatio:t},width:n,height:r,_aspectRatio:i}=this;return aa(e)?t&&i?i:r?n/r:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return Tu}_initialize(){return this.notifyPlugins(`beforeInit`),this.options.responsive?this.resize():ac(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins(`afterInit`),this}clear(){return Ko(this.canvas,this.ctx),this}stop(){return jc.stop(this),this}resize(e,t){jc.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){let n=this.options,r=this.canvas,i=n.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(r,e,t,i),o=n.devicePixelRatio||this.platform.getDevicePixelRatio(),s=this.width?`resize`:`attach`;this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,ac(this,o,!0)&&(this.notifyPlugins(`resize`,{size:a}),fa(n.onResize,[this,a],this),this.attached&&this._doResize(s)&&this.render())}ensureScalesHaveIDs(){pa(this.options.scales||{},(e,t)=>{e.id=t})}buildOrUpdateScales(){let e=this.options,t=e.scales,n=this.scales,r=Object.keys(n).reduce((e,t)=>(e[t]=!1,e),{}),i=[];t&&(i=i.concat(Object.keys(t).map(e=>{let n=t[e],r=Iu(e,n),i=r===`r`,a=r===`x`;return{options:n,dposition:i?`chartArea`:a?`bottom`:`left`,dtype:i?`radialLinear`:a?`category`:`linear`}}))),pa(i,t=>{let i=t.options,a=i.id,o=Iu(a,i),s=ua(i.type,t.dtype);(i.position===void 0||$u(i.position,o)!==$u(t.dposition))&&(i.position=t.dposition),r[a]=!0;let c=null;a in n&&n[a].type===s?c=n[a]:(c=new(Tu.getScale(s))({id:a,type:s,ctx:this.ctx,chart:this}),n[c.id]=c),c.init(i,e)}),pa(r,(e,t)=>{e||delete n[t]}),pa(n,e=>{Ml.configure(this,e,e.options),Ml.addBox(this,e)})}_updateMetasets(){let e=this._metasets,t=this.data.datasets.length,n=e.length;if(e.sort((e,t)=>e.index-t.index),n>t){for(let e=t;e<n;++e)this._destroyDatasetMeta(e);e.splice(t,n-t)}this._sortedMetasets=e.slice(0).sort(ed(`order`,`index`))}_removeUnreferencedMetasets(){let{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((e,n)=>{t.filter(t=>t===e._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){let e=[],t=this.data.datasets,n,r;for(this._removeUnreferencedMetasets(),n=0,r=t.length;n<r;n++){let r=t[n],i=this.getDatasetMeta(n),a=r.type||this.config.type;if(i.type&&i.type!==a&&(this._destroyDatasetMeta(n),i=this.getDatasetMeta(n)),i.type=a,i.indexAxis=r.indexAxis||ju(a,this.options),i.order=r.order||0,i.index=n,i.label=``+r.label,i.visible=this.isDatasetVisible(n),i.controller)i.controller.updateIndex(n),i.controller.linkScales();else{let t=Tu.getController(a),{datasetElementType:r,dataElementType:o}=Vo.datasets[a];Object.assign(t,{dataElementType:Tu.getElement(o),datasetElementType:r&&Tu.getElement(r)}),i.controller=new t(this,n),e.push(i.controller)}}return this._updateMetasets(),e}_resetElements(){pa(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins(`reset`)}update(e){let t=this.config;t.update();let n=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins(`beforeUpdate`,{mode:e,cancelable:!0})===!1)return;let i=this.buildOrUpdateControllers();this.notifyPlugins(`beforeElementsUpdate`);let a=0;for(let e=0,t=this.data.datasets.length;e<t;e++){let{controller:t}=this.getDatasetMeta(e),n=!r&&i.indexOf(t)===-1;t.buildOrUpdateElements(n),a=Math.max(+t.getMaxOverflow(),a)}a=this._minPadding=n.layout.autoPadding?a:0,this._updateLayout(a),r||pa(i,e=>{e.reset()}),this._updateDatasets(e),this.notifyPlugins(`afterUpdate`,{mode:e}),this._layers.sort(ed(`z`,`_idx`));let{_active:o,_lastEvent:s}=this;s?this._eventHandler(s,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){pa(this.scales,e=>{Ml.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let e=this.options;(!Oa(new Set(Object.keys(this._listeners)),new Set(e.events))||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(let{method:n,start:r,count:i}of t)od(e,r,n===`_removeElements`?-i:i)}_getUniformDataChanges(){let e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];let t=this.data.datasets.length,n=t=>new Set(e.filter(e=>e[0]===t).map((e,t)=>t+`,`+e.splice(1).join(`,`))),r=n(0);for(let e=1;e<t;e++)if(!Oa(r,n(e)))return;return Array.from(r).map(e=>e.split(`,`)).map(e=>({method:e[1],start:+e[2],count:+e[3]}))}_updateLayout(e){if(this.notifyPlugins(`beforeLayout`,{cancelable:!0})===!1)return;Ml.update(this,this.width,this.height,e);let t=this.chartArea,n=t.width<=0||t.height<=0;this._layers=[],pa(this.boxes,e=>{n&&e.position===`chartArea`||(e.configure&&e.configure(),this._layers.push(...e._layers()))},this),this._layers.forEach((e,t)=>{e._idx=t}),this.notifyPlugins(`afterLayout`)}_updateDatasets(e){if(this.notifyPlugins(`beforeDatasetsUpdate`,{mode:e,cancelable:!0})!==!1){for(let e=0,t=this.data.datasets.length;e<t;++e)this.getDatasetMeta(e).controller.configure();for(let t=0,n=this.data.datasets.length;t<n;++t)this._updateDataset(t,Da(e)?e({datasetIndex:t}):e);this.notifyPlugins(`afterDatasetsUpdate`,{mode:e})}}_updateDataset(e,t){let n=this.getDatasetMeta(e),r={meta:n,index:e,mode:t,cancelable:!0};this.notifyPlugins(`beforeDatasetUpdate`,r)!==!1&&(n.controller._update(t),r.cancelable=!1,this.notifyPlugins(`afterDatasetUpdate`,r))}render(){this.notifyPlugins(`beforeRender`,{cancelable:!0})!==!1&&(jc.has(this)?this.attached&&!jc.running(this)&&jc.start(this):(this.draw(),td({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){let{width:e,height:t}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(e,t)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins(`beforeDraw`,{cancelable:!0})===!1)return;let t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins(`afterDraw`)}_getSortedDatasetMetas(e){let t=this._sortedMetasets,n=[],r,i;for(r=0,i=t.length;r<i;++r){let i=t[r];(!e||i.visible)&&n.push(i)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins(`beforeDatasetsDraw`,{cancelable:!0})===!1)return;let e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins(`afterDatasetsDraw`)}_drawDataset(e){let t=this.ctx,n={meta:e,index:e.index,cancelable:!0},r=Ac(this,e);this.notifyPlugins(`beforeDatasetDraw`,n)!==!1&&(r&&Xo(t,r),e.controller.draw(),r&&Zo(t),n.cancelable=!1,this.notifyPlugins(`afterDatasetDraw`,n))}isPointInArea(e){return Yo(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,n,r){let i=hl.modes[t];return typeof i==`function`?i(this,e,n,r):[]}getDatasetMeta(e){let t=this.data.datasets[e],n=this._metasets,r=n.filter(e=>e&&e._dataset===t).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},n.push(r)),r}getContext(){return this.$context||=gs(null,{chart:this,type:`chart`})}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){let t=this.data.datasets[e];if(!t)return!1;let n=this.getDatasetMeta(e);return typeof n.hidden==`boolean`?!n.hidden:!t.hidden}setDatasetVisibility(e,t){let n=this.getDatasetMeta(e);n.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,n){let r=n?`show`:`hide`,i=this.getDatasetMeta(e),a=i.controller._resolveAnimations(void 0,r);Ea(t)?(i.data[t].hidden=!n,this.update()):(this.setDatasetVisibility(e,n),a.update(i,{visible:n}),this.update(t=>t.datasetIndex===e?r:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){let t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),jc.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins(`beforeDestroy`);let{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Ko(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete id[this.id],this.notifyPlugins(`afterDestroy`)}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let e=this._listeners,t=this.platform,n=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},r=(e,t,n)=>{e.offsetX=t,e.offsetY=n,this._eventHandler(e)};pa(this.options.events,e=>n(e,r))}bindResponsiveEvents(){this._responsiveListeners||={};let e=this._responsiveListeners,t=this.platform,n=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},r=(n,r)=>{e[n]&&(t.removeEventListener(this,n,r),delete e[n])},i=(e,t)=>{this.canvas&&this.resize(e,t)},a,o=()=>{r(`attach`,o),this.attached=!0,this.resize(),n(`resize`,i),n(`detach`,a)};a=()=>{this.attached=!1,r(`resize`,i),this._stop(),this._resize(0,0),n(`attach`,o)},t.isAttached(this.canvas)?o():a()}unbindEvents(){pa(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},pa(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,n){let r=n?`set`:`remove`,i,a,o,s;for(t===`dataset`&&(i=this.getDatasetMeta(e[0].datasetIndex),i.controller[`_`+r+`DatasetHoverStyle`]()),o=0,s=e.length;o<s;++o){a=e[o];let t=a&&this.getDatasetMeta(a.datasetIndex).controller;t&&t[r+`HoverStyle`](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){let t=this._active||[],n=e.map(({datasetIndex:e,index:t})=>{let n=this.getDatasetMeta(e);if(!n)throw Error(`No dataset found at index `+e);return{datasetIndex:e,element:n.data[t],index:t}});ma(n,t)||(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,t))}notifyPlugins(e,t,n){return this._plugins.notify(this,e,t,n)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,n){let r=this.options.hover,i=(e,t)=>e.filter(e=>!t.some(t=>e.datasetIndex===t.datasetIndex&&e.index===t.index)),a=i(t,e),o=n?e:i(e,t);a.length&&this.updateHoverStyle(a,r.mode,!1),o.length&&r.mode&&this.updateHoverStyle(o,r.mode,!0)}_eventHandler(e,t){let n={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},r=t=>(t.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins(`beforeEvent`,n,r)===!1)return;let i=this._handleEvent(e,t,n.inChartArea);return n.cancelable=!1,this.notifyPlugins(`afterEvent`,n,r),(i||n.changed)&&this.render(),this}_handleEvent(e,t,n){let{_active:r=[],options:i}=this,a=t,o=this._getActiveElements(e,r,n,a),s=ka(e),c=sd(e,this._lastEvent,n,s);n&&(this._lastEvent=null,fa(i.onHover,[e,o,this],this),s&&fa(i.onClick,[e,o,this],this));let l=!ma(o,r);return(l||t)&&(this._active=o,this._updateHoverStyles(o,r,t)),this._lastEvent=c,l}_getActiveElements(e,t,n,r){if(e.type===`mouseout`)return[];if(!n)return t;let i=this.options.hover;return this.getElementsAtEventForMode(e,i.mode,i,r)}};function ld(){return pa(cd.instances,e=>e._plugins.invalidate())}function ud(e,t,n=t){e.lineCap=ua(n.borderCapStyle,t.borderCapStyle),e.setLineDash(ua(n.borderDash,t.borderDash)),e.lineDashOffset=ua(n.borderDashOffset,t.borderDashOffset),e.lineJoin=ua(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=ua(n.borderWidth,t.borderWidth),e.strokeStyle=ua(n.borderColor,t.borderColor)}function dd(e,t,n){e.lineTo(n.x,n.y)}function fd(e){return e.stepped?Qo:e.tension||e.cubicInterpolationMode===`monotone`?$o:dd}function pd(e,t,n={}){let r=e.length,{start:i=0,end:a=r-1}=n,{start:o,end:s}=t,c=Math.max(i,o),l=Math.min(a,s),u=i<o&&a<o||i>s&&a>s;return{count:r,start:c,loop:t.loop,ilen:l<c&&!u?r+l-c:l-c}}function md(e,t,n,r){let{points:i,options:a}=t,{count:o,start:s,loop:c,ilen:l}=pd(i,n,r),u=fd(a),{move:d=!0,reverse:f}=r||{},p,m,h;for(p=0;p<=l;++p)m=i[(s+(f?l-p:p))%o],!m.skip&&(d?(e.moveTo(m.x,m.y),d=!1):u(e,h,m,f,a.stepped),h=m);return c&&(m=i[(s+(f?l:0))%o],u(e,h,m,f,a.stepped)),!!c}function hd(e,t,n,r){let i=t.points,{count:a,start:o,ilen:s}=pd(i,n,r),{move:c=!0,reverse:l}=r||{},u=0,d=0,f,p,m,h,g,_,v=e=>(o+(l?s-e:e))%a,y=()=>{h!==g&&(e.lineTo(u,g),e.lineTo(u,h),e.lineTo(u,_))};for(c&&(p=i[v(0)],e.moveTo(p.x,p.y)),f=0;f<=s;++f){if(p=i[v(f)],p.skip)continue;let t=p.x,n=p.y,r=t|0;r===m?(n<h?h=n:n>g&&(g=n),u=(d*u+t)/++d):(y(),e.lineTo(t,n),m=r,d=0,h=g=n),_=n}y()}function gd(e){let t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!==`monotone`&&!t.stepped&&!n?hd:md}function _d(e){return e.stepped?lc:e.tension||e.cubicInterpolationMode===`monotone`?uc:cc}function vd(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),ud(e,t.options),e.stroke(i)}function yd(e,t,n,r){let{segments:i,options:a}=t,o=gd(t);for(let s of i)ud(e,a,s.style),e.beginPath(),o(e,t,s,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}var $=typeof Path2D==`function`;function bd(e,t,n,r){$&&!t.options.segment?vd(e,t,n,r):yd(e,t,n,r)}var xd=class extends eu{static id=`line`;static defaults={borderCapStyle:`butt`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:`default`,fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};static descriptors={_scriptable:!0,_indexable:e=>e!==`borderDash`&&e!==`fill`};constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){let n=this.options;if((n.tension||n.cubicInterpolationMode===`monotone`)&&!n.stepped&&!this._pointsUpdated){let r=n.spanGaps?this._loop:this._fullLoop;Gs(this._points,n,e,r,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||=Cc(this,this.options.segment)}first(){let e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){let e=this.segments,t=this.points,n=e.length;return n&&t[e[n-1].end]}interpolate(e,t){let n=this.options,r=e[t],i=this.points,a=bc(this,{property:t,start:r,end:r});if(!a.length)return;let o=[],s=_d(n),c,l;for(c=0,l=a.length;c<l;++c){let{start:l,end:u}=a[c],d=i[l],f=i[u];if(d===f){o.push(d);continue}let p=s(d,f,Math.abs((r-d[t])/(f[t]-d[t])),n.stepped);p[t]=e[t],o.push(p)}return o.length===1?o[0]:o}pathSegment(e,t,n){return gd(this)(e,this,t,n)}path(e,t,n){let r=this.segments,i=gd(this),a=this._loop;t||=0,n||=this.points.length-t;for(let o of r)a&=i(e,this,o,{start:t,end:t+n-1});return!!a}draw(e,t,n,r){let i=this.options||{};(this.points||[]).length&&i.borderWidth&&(e.save(),bd(e,this,n,r),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};function Sd(e,t,n,r){let i=e.options,{[n]:a}=e.getProps([n],r);return Math.abs(t-a)<i.radius+i.hitRadius}var Cd=class extends eu{static id=`point`;parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:`circle`,radius:3,rotation:0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};constructor(e){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,t,n){let r=this.options,{x:i,y:a}=this.getProps([`x`,`y`],n);return(e-i)**2+(t-a)**2<(r.hitRadius+r.radius)**2}inXRange(e,t){return Sd(this,e,`x`,t)}inYRange(e,t){return Sd(this,e,`y`,t)}getCenterPoint(e){let{x:t,y:n}=this.getProps([`x`,`y`],e);return{x:t,y:n}}size(e){e=e||this.options||{};let t=e.radius||0;t=Math.max(t,t&&e.hoverRadius||0);let n=t&&e.borderWidth||0;return(t+n)*2}draw(e,t){let n=this.options;this.skip||n.radius<.1||!Yo(this,t,this.size(n)/2)||(e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.fillStyle=n.backgroundColor,qo(e,n,this.x,this.y))}getRange(){let e=this.options||{};return e.radius+e.hitRadius}},wd={average(e){if(!e.length)return!1;let t,n,r=new Set,i=0,a=0;for(t=0,n=e.length;t<n;++t){let n=e[t].element;if(n&&n.hasValue()){let e=n.tooltipPosition();r.add(e.x),i+=e.y,++a}}return a===0||r.size===0?!1:{x:[...r].reduce((e,t)=>e+t)/r.size,y:i/a}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=1/0,a,o,s;for(a=0,o=e.length;a<o;++a){let n=e[a].element;if(n&&n.hasValue()){let e=Za(t,n.getCenterPoint());e<i&&(i=e,s=n)}}if(s){let e=s.tooltipPosition();n=e.x,r=e.y}return{x:n,y:r}}};function Td(e,t){return t&&(oa(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function Ed(e){return(typeof e==`string`||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function Dd(e,t){let{element:n,datasetIndex:r,index:i}=t,a=e.getDatasetMeta(r).controller,{label:o,value:s}=a.getLabelAndValue(i);return{chart:e,label:o,parsed:a.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:s,dataset:a.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function Od(e,t){let n=e.chart.ctx,{body:r,footer:i,title:a}=e,{boxWidth:o,boxHeight:s}=t,c=ps(t.bodyFont),l=ps(t.titleFont),u=ps(t.footerFont),d=a.length,f=i.length,p=r.length,m=fs(t.padding),h=m.height,g=0,_=r.reduce((e,t)=>e+t.before.length+t.lines.length+t.after.length,0);if(_+=e.beforeBody.length+e.afterBody.length,d&&(h+=d*l.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),_){let e=t.displayColors?Math.max(s,c.lineHeight):c.lineHeight;h+=p*e+(_-p)*c.lineHeight+(_-1)*t.bodySpacing}f&&(h+=t.footerMarginTop+f*u.lineHeight+(f-1)*t.footerSpacing);let v=0,y=function(e){g=Math.max(g,n.measureText(e).width+v)};return n.save(),n.font=l.string,pa(e.title,y),n.font=c.string,pa(e.beforeBody.concat(e.afterBody),y),v=t.displayColors?o+2+t.boxPadding:0,pa(r,e=>{pa(e.before,y),pa(e.lines,y),pa(e.after,y)}),v=0,n.font=u.string,pa(e.footer,y),n.restore(),g+=m.width,{width:g,height:h}}function kd(e,t){let{y:n,height:r}=t;return n<r/2?`top`:n>e.height-r/2?`bottom`:`center`}function Ad(e,t,n,r){let{x:i,width:a}=r,o=n.caretSize+n.caretPadding;if(e===`left`&&i+a+o>t.width||e===`right`&&i-a-o<0)return!0}function jd(e,t,n,r){let{x:i,width:a}=n,{width:o,chartArea:{left:s,right:c}}=e,l=`center`;return r===`center`?l=i<=(s+c)/2?`left`:`right`:i<=a/2?l=`left`:i>=o-a/2&&(l=`right`),Ad(l,e,t,n)&&(l=`center`),l}function Md(e,t,n){let r=n.yAlign||t.yAlign||kd(e,n);return{xAlign:n.xAlign||t.xAlign||jd(e,t,n,r),yAlign:r}}function Nd(e,t){let{x:n,width:r}=e;return t===`right`?n-=r:t===`center`&&(n-=r/2),n}function Pd(e,t,n){let{y:r,height:i}=e;return t===`top`?r+=n:r-=t===`bottom`?i+n:i/2,r}function Fd(e,t,n,r){let{caretSize:i,caretPadding:a,cornerRadius:o}=e,{xAlign:s,yAlign:c}=n,l=i+a,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=ds(o),m=Nd(t,s),h=Pd(t,c,l);return c===`center`?s===`left`?m+=l:s===`right`&&(m-=l):s===`left`?m-=Math.max(u,f)+i:s===`right`&&(m+=Math.max(d,p)+i),{x:to(m,0,r.width-t.width),y:to(h,0,r.height-t.height)}}function Id(e,t,n){let r=fs(n.padding);return t===`center`?e.x+e.width/2:t===`right`?e.x+e.width-r.right:e.x+r.left}function Ld(e){return Td([],Ed(e))}function Rd(e,t,n){return gs(e,{tooltip:t,tooltipItems:n,type:`tooltip`})}function zd(e,t){let n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}var Bd={beforeTitle:ra,title(e){if(e.length>0){let t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode===`dataset`)return t.dataset.label||``;if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return``},afterTitle:ra,beforeBody:ra,beforeLabel:ra,label(e){if(this&&this.options&&this.options.mode===`dataset`)return e.label+`: `+e.formattedValue||e.formattedValue;let t=e.dataset.label||``;t&&(t+=`: `);let n=e.formattedValue;return aa(n)||(t+=n),t},labelColor(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:ra,afterBody:ra,beforeFooter:ra,footer:ra,afterFooter:ra};function Vd(e,t,n,r){let i=e[t].call(n,r);return i===void 0?Bd[t].call(n,r):i}var Hd=class extends eu{static positioners=wd;constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let e=this._cachedAnimations;if(e)return e;let t=this.chart,n=this.options.setContext(this.getContext()),r=n.enabled&&t.options.animation&&n.animations,i=new Fc(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(i)),i}getContext(){return this.$context||=Rd(this.chart.getContext(),this,this._tooltipItems)}getTitle(e,t){let{callbacks:n}=t,r=Vd(n,`beforeTitle`,this,e),i=Vd(n,`title`,this,e),a=Vd(n,`afterTitle`,this,e),o=[];return o=Td(o,Ed(r)),o=Td(o,Ed(i)),o=Td(o,Ed(a)),o}getBeforeBody(e,t){return Ld(Vd(t.callbacks,`beforeBody`,this,e))}getBody(e,t){let{callbacks:n}=t,r=[];return pa(e,e=>{let t={before:[],lines:[],after:[]},i=zd(n,e);Td(t.before,Ed(Vd(i,`beforeLabel`,this,e))),Td(t.lines,Vd(i,`label`,this,e)),Td(t.after,Ed(Vd(i,`afterLabel`,this,e))),r.push(t)}),r}getAfterBody(e,t){return Ld(Vd(t.callbacks,`afterBody`,this,e))}getFooter(e,t){let{callbacks:n}=t,r=Vd(n,`beforeFooter`,this,e),i=Vd(n,`footer`,this,e),a=Vd(n,`afterFooter`,this,e),o=[];return o=Td(o,Ed(r)),o=Td(o,Ed(i)),o=Td(o,Ed(a)),o}_createItems(e){let t=this._active,n=this.chart.data,r=[],i=[],a=[],o=[],s,c;for(s=0,c=t.length;s<c;++s)o.push(Dd(this.chart,t[s]));return e.filter&&(o=o.filter((t,r,i)=>e.filter(t,r,i,n))),e.itemSort&&(o=o.sort((t,r)=>e.itemSort(t,r,n))),pa(o,t=>{let n=zd(e.callbacks,t);r.push(Vd(n,`labelColor`,this,t)),i.push(Vd(n,`labelPointStyle`,this,t)),a.push(Vd(n,`labelTextColor`,this,t))}),this.labelColors=r,this.labelPointStyles=i,this.labelTextColors=a,this.dataPoints=o,o}update(e,t){let n=this.options.setContext(this.getContext()),r=this._active,i,a=[];if(!r.length)this.opacity!==0&&(i={opacity:0});else{let e=wd[n.position].call(this,r,this._eventPosition);a=this._createItems(n),this.title=this.getTitle(a,n),this.beforeBody=this.getBeforeBody(a,n),this.body=this.getBody(a,n),this.afterBody=this.getAfterBody(a,n),this.footer=this.getFooter(a,n);let t=this._size=Od(this,n),o=Object.assign({},e,t),s=Md(this.chart,n,o),c=Fd(n,o,s,this.chart);this.xAlign=s.xAlign,this.yAlign=s.yAlign,i={opacity:1,x:c.x,y:c.y,width:t.width,height:t.height,caretX:e.x,caretY:e.y}}this._tooltipItems=a,this.$context=void 0,i&&this._resolveAnimations().update(this,i),e&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,n,r){let i=this.getCaretPosition(e,n,r);t.lineTo(i.x1,i.y1),t.lineTo(i.x2,i.y2),t.lineTo(i.x3,i.y3)}getCaretPosition(e,t,n){let{xAlign:r,yAlign:i}=this,{caretSize:a,cornerRadius:o}=n,{topLeft:s,topRight:c,bottomLeft:l,bottomRight:u}=ds(o),{x:d,y:f}=e,{width:p,height:m}=t,h,g,_,v,y,b;return i===`center`?(y=f+m/2,r===`left`?(h=d,g=h-a,v=y+a,b=y-a):(h=d+p,g=h+a,v=y-a,b=y+a),_=h):(g=r===`left`?d+Math.max(s,l)+a:r===`right`?d+p-Math.max(c,u)-a:this.caretX,i===`top`?(v=f,y=v-a,h=g-a,_=g+a):(v=f+m,y=v+a,h=g+a,_=g-a),b=v),{x1:h,x2:g,x3:_,y1:v,y2:y,y3:b}}drawTitle(e,t,n){let r=this.title,i=r.length,a,o,s;if(i){let c=pc(n.rtl,this.x,this.width);for(e.x=Id(this,n.titleAlign,n),t.textAlign=c.textAlign(n.titleAlign),t.textBaseline=`middle`,a=ps(n.titleFont),o=n.titleSpacing,t.fillStyle=n.titleColor,t.font=a.string,s=0;s<i;++s)t.fillText(r[s],c.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+o,s+1===i&&(e.y+=n.titleMarginBottom-o)}}_drawColorBox(e,t,n,r,i){let a=this.labelColors[n],o=this.labelPointStyles[n],{boxHeight:s,boxWidth:c}=i,l=ps(i.bodyFont),u=Id(this,`left`,i),d=r.x(u),f=s<l.lineHeight?(l.lineHeight-s)/2:0,p=t.y+f;if(i.usePointStyle){let t={radius:Math.min(c,s)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},n=r.leftForLtr(d,c)+c/2,l=p+s/2;e.strokeStyle=i.multiKeyBackground,e.fillStyle=i.multiKeyBackground,qo(e,t,n,l),e.strokeStyle=a.borderColor,e.fillStyle=a.backgroundColor,qo(e,t,n,l)}else{e.lineWidth=sa(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,e.strokeStyle=a.borderColor,e.setLineDash(a.borderDash||[]),e.lineDashOffset=a.borderDashOffset||0;let t=r.leftForLtr(d,c),n=r.leftForLtr(r.xPlus(d,1),c-2),o=ds(a.borderRadius);Object.values(o).some(e=>e!==0)?(e.beginPath(),e.fillStyle=i.multiKeyBackground,is(e,{x:t,y:p,w:c,h:s,radius:o}),e.fill(),e.stroke(),e.fillStyle=a.backgroundColor,e.beginPath(),is(e,{x:n,y:p+1,w:c-2,h:s-2,radius:o}),e.fill()):(e.fillStyle=i.multiKeyBackground,e.fillRect(t,p,c,s),e.strokeRect(t,p,c,s),e.fillStyle=a.backgroundColor,e.fillRect(n,p+1,c-2,s-2))}e.fillStyle=this.labelTextColors[n]}drawBody(e,t,n){let{body:r}=this,{bodySpacing:i,bodyAlign:a,displayColors:o,boxHeight:s,boxWidth:c,boxPadding:l}=n,u=ps(n.bodyFont),d=u.lineHeight,f=0,p=pc(n.rtl,this.x,this.width),m=function(n){t.fillText(n,p.x(e.x+f),e.y+d/2),e.y+=d+i},h=p.textAlign(a),g,_,v,y,b,x,S;for(t.textAlign=a,t.textBaseline=`middle`,t.font=u.string,e.x=Id(this,h,n),t.fillStyle=n.bodyColor,pa(this.beforeBody,m),f=o&&h!==`right`?a===`center`?c/2+l:c+2+l:0,y=0,x=r.length;y<x;++y){for(g=r[y],_=this.labelTextColors[y],t.fillStyle=_,pa(g.before,m),v=g.lines,o&&v.length&&(this._drawColorBox(t,e,y,p,n),d=Math.max(u.lineHeight,s)),b=0,S=v.length;b<S;++b)m(v[b]),d=u.lineHeight;pa(g.after,m)}f=0,d=u.lineHeight,pa(this.afterBody,m),e.y-=i}drawFooter(e,t,n){let r=this.footer,i=r.length,a,o;if(i){let s=pc(n.rtl,this.x,this.width);for(e.x=Id(this,n.footerAlign,n),e.y+=n.footerMarginTop,t.textAlign=s.textAlign(n.footerAlign),t.textBaseline=`middle`,a=ps(n.footerFont),t.fillStyle=n.footerColor,t.font=a.string,o=0;o<i;++o)t.fillText(r[o],s.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+n.footerSpacing}}drawBackground(e,t,n,r){let{xAlign:i,yAlign:a}=this,{x:o,y:s}=e,{width:c,height:l}=n,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=ds(r.cornerRadius);t.fillStyle=r.backgroundColor,t.strokeStyle=r.borderColor,t.lineWidth=r.borderWidth,t.beginPath(),t.moveTo(o+u,s),a===`top`&&this.drawCaret(e,t,n,r),t.lineTo(o+c-d,s),t.quadraticCurveTo(o+c,s,o+c,s+d),a===`center`&&i===`right`&&this.drawCaret(e,t,n,r),t.lineTo(o+c,s+l-p),t.quadraticCurveTo(o+c,s+l,o+c-p,s+l),a===`bottom`&&this.drawCaret(e,t,n,r),t.lineTo(o+f,s+l),t.quadraticCurveTo(o,s+l,o,s+l-f),a===`center`&&i===`left`&&this.drawCaret(e,t,n,r),t.lineTo(o,s+u),t.quadraticCurveTo(o,s,o+u,s),t.closePath(),t.fill(),r.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){let t=this.chart,n=this.$animations,r=n&&n.x,i=n&&n.y;if(r||i){let n=wd[e.position].call(this,this._active,this._eventPosition);if(!n)return;let a=this._size=Od(this,e),o=Object.assign({},n,this._size),s=Md(t,e,o),c=Fd(e,o,s,t);(r._to!==c.x||i._to!==c.y)&&(this.xAlign=s.xAlign,this.yAlign=s.yAlign,this.width=a.width,this.height=a.height,this.caretX=n.x,this.caretY=n.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(e){let t=this.options.setContext(this.getContext()),n=this.opacity;if(!n)return;this._updateAnimationTarget(t);let r={width:this.width,height:this.height},i={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;let a=fs(t.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&o&&(e.save(),e.globalAlpha=n,this.drawBackground(i,e,r,t),mc(e,t.textDirection),i.y+=a.top,this.drawTitle(i,e,t),this.drawBody(i,e,t),this.drawFooter(i,e,t),hc(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){let n=this._active,r=e.map(({datasetIndex:e,index:t})=>{let n=this.chart.getDatasetMeta(e);if(!n)throw Error(`Cannot find a dataset at index `+e);return{datasetIndex:e,element:n.data[t],index:t}}),i=!ma(n,r),a=this._positionChanged(r,t);(i||a)&&(this._active=r,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,n=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let r=this.options,i=this._active||[],a=this._getActiveElements(e,i,t,n),o=this._positionChanged(a,e),s=t||!ma(a,i)||o;return s&&(this._active=a,(r.enabled||r.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),s}_getActiveElements(e,t,n,r){let i=this.options;if(e.type===`mouseout`)return[];if(!r)return t.filter(e=>this.chart.data.datasets[e.datasetIndex]&&this.chart.getDatasetMeta(e.datasetIndex).controller.getParsed(e.index)!==void 0);let a=this.chart.getElementsAtEventForMode(e,i.mode,i,n);return i.reverse&&a.reverse(),a}_positionChanged(e,t){let{caretX:n,caretY:r,options:i}=this,a=wd[i.position].call(this,e,t);return a!==!1&&(n!==a.x||r!==a.y)}},Ud={id:`tooltip`,_element:Hd,positioners:wd,afterInit(e,t,n){n&&(e.tooltip=new Hd({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){let t=e.tooltip;if(t&&t._willRender()){let n={tooltip:t};if(e.notifyPlugins(`beforeTooltipDraw`,{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins(`afterTooltipDraw`,n)}},afterEvent(e,t){if(e.tooltip){let n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:`average`,backgroundColor:`rgba(0,0,0,0.8)`,titleColor:`#fff`,titleFont:{weight:`bold`},titleSpacing:2,titleMarginBottom:6,titleAlign:`left`,bodyColor:`#fff`,bodySpacing:2,bodyFont:{},bodyAlign:`left`,footerColor:`#fff`,footerSpacing:2,footerMarginTop:6,footerFont:{weight:`bold`},footerAlign:`left`,padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:`#fff`,displayColors:!0,boxPadding:0,borderColor:`rgba(0,0,0,0)`,borderWidth:0,animation:{duration:400,easing:`easeOutQuart`},animations:{numbers:{type:`number`,properties:[`x`,`y`,`width`,`height`,`caretX`,`caretY`]},opacity:{easing:`linear`,duration:200}},callbacks:Bd},defaultRoutes:{bodyFont:`font`,footerFont:`font`,titleFont:`font`},descriptors:{_scriptable:e=>e!==`filter`&&e!==`itemSort`&&e!==`external`,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:`animation`}},additionalOptionScopes:[`interaction`]},Wd=(e,t,n,r)=>(typeof t==`string`?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function Gd(e,t,n,r){let i=e.indexOf(t);return i===-1?Wd(e,t,n,r):i===e.lastIndexOf(t)?i:n}var Kd=(e,t)=>e===null?null:to(Math.round(e),0,t);function qd(e){let t=this.getLabels();return e>=0&&e<t.length?t[e]:e}var Jd=class extends bu{static id=`category`;static defaults={ticks:{callback:qd}};constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){let t=this._addedLabels;if(t.length){let e=this.getLabels();for(let{index:n,label:r}of t)e[n]===r&&e.splice(n,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(aa(e))return null;let n=this.getLabels();return t=isFinite(t)&&n[t]===e?t:Gd(n,e,ua(t,e),this._addedLabels),Kd(t,n.length-1)}determineDataLimits(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),{min:n,max:r}=this.getMinMax(!0);this.options.bounds===`ticks`&&(e||(n=0),t||(r=this.getLabels().length-1)),this.min=n,this.max=r}buildTicks(){let e=this.min,t=this.max,n=this.options.offset,r=[],i=this.getLabels();i=e===0&&t===i.length-1?i:i.slice(e,t+1),this._valueRange=Math.max(i.length-+!n,1),this._startValue=this.min-(n?.5:0);for(let n=e;n<=t;n++)r.push({value:n});return r}getLabelForValue(e){return qd.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!=`number`&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}};function Yd(e,t){let n=[],{bounds:r,step:i,min:a,max:o,precision:s,count:c,maxTicks:l,maxDigits:u,includeBounds:d}=e,f=i||1,p=l-1,{min:m,max:h}=t,g=!aa(a),_=!aa(o),v=!aa(c),y=(h-m)/(u+1),b=Va((h-m)/p/f)*f,x,S,C,w;if(b<1e-14&&!g&&!_)return[{value:m},{value:h}];w=Math.ceil(h/b)-Math.floor(m/b),w>p&&(b=Va(w*b/p/f)*f),aa(s)||(x=10**s,b=Math.ceil(b*x)/x),r===`ticks`?(S=Math.floor(m/b)*b,C=Math.ceil(h/b)*b):(S=m,C=h),g&&_&&i&&Ga((o-a)/i,b/1e3)?(w=Math.round(Math.min((o-a)/b,l)),b=(o-a)/w,S=a,C=o):v?(S=g?a:S,C=_?o:C,w=c-1,b=(C-S)/w):(w=(C-S)/b,w=Ba(w,Math.round(w),b/1e3)?Math.round(w):Math.ceil(w));let T=Math.max(Ya(b),Ya(S));x=10**(aa(s)?T:s),S=Math.round(S*x)/x,C=Math.round(C*x)/x;let E=0;for(g&&(d&&S!==a?(n.push({value:a}),S<a&&E++,Ba(Math.round((S+E*b)*x)/x,a,Xd(a,y,e))&&E++):S<a&&E++);E<w;++E){let e=Math.round((S+E*b)*x)/x;if(_&&e>o)break;n.push({value:e})}return _&&d&&C!==o?n.length&&Ba(n[n.length-1].value,o,Xd(o,y,e))?n[n.length-1].value=o:n.push({value:o}):(!_||C===o)&&n.push({value:C}),n}function Xd(e,t,{horizontal:n,minRotation:r}){let i=qa(r),a=(n?Math.sin(i):Math.cos(i))||.001,o=.75*t*(``+e).length;return Math.min(t/a,o)}var Zd=class extends bu{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return aa(e)||(typeof e==`number`||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){let{beginAtZero:e}=this.options,{minDefined:t,maxDefined:n}=this.getUserBounds(),{min:r,max:i}=this,a=e=>r=t?r:e,o=e=>i=n?i:e;if(e){let e=za(r),t=za(i);e<0&&t<0?o(0):e>0&&t>0&&a(0)}if(r===i){let t=i===0?1:Math.abs(i*.05);o(i+t),e||a(r-t)}this.min=r,this.max=i}getTickLimit(){let{maxTicksLimit:e,stepSize:t}=this.options.ticks,n;return t?(n=Math.ceil(this.max/t)-Math.floor(this.min/t)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${t} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),e||=11),e&&(n=Math.min(e,n)),n}computeTickLimit(){return 1/0}buildTicks(){let e=this.options,t=e.ticks,n=this.getTickLimit();n=Math.max(2,n);let r=Yd({maxTicks:n,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},this._range||this);return e.bounds===`ticks`&&Ka(r,this,`value`),e.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){let e=this.ticks,t=this.min,n=this.max;if(super.configure(),this.options.offset&&e.length){let r=(n-t)/Math.max(e.length-1,1)/2;t-=r,n+=r}this._startValue=t,this._endValue=n,this._valueRange=n-t}getLabelForValue(e){return Mo(e,this.chart.options.locale,this.options.ticks.format)}},Qd=class extends Zd{static id=`linear`;static defaults={ticks:{callback:Fo.formatters.numeric}};determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=ca(e)?e:0,this.max=ca(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){let e=this.isHorizontal(),t=e?this.width:this.height,n=qa(this.options.ticks.minRotation),r=(e?Math.sin(n):Math.cos(n))||.001,i=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,i.lineHeight/r))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}},$d=e=>Math.floor(Ra(e)),ef=(e,t)=>10**($d(e)+t);function tf(e){return e/10**$d(e)==1}function nf(e,t,n){let r=10**n,i=Math.floor(e/r);return Math.ceil(t/r)-i}function rf(e,t){let n=$d(t-e);for(;nf(e,t,n)>10;)n++;for(;nf(e,t,n)<10;)n--;return Math.min(n,$d(e))}function af(e,{min:t,max:n}){t=la(e.min,t);let r=[],i=$d(t),a=rf(t,n),o=a<0?10**Math.abs(a):1,s=10**a,c=i>a?10**i:0,l=Math.round((t-c)*o)/o,u=Math.floor((t-c)/s/10)*s*10,d=Math.floor((l-u)/10**a),f=la(e.min,Math.round((c+u+d*10**a)*o)/o);for(;f<n;)r.push({value:f,major:tf(f),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(a++,d=2,o=a>=0?1:o),f=Math.round((c+u+d*10**a)*o)/o;let p=la(e.max,f);return r.push({value:p,major:tf(p),significand:d}),r}(class extends bu{static id=`logarithmic`;static defaults={ticks:{callback:Fo.formatters.logarithmic,major:{enabled:!0}}};constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,t){let n=Zd.prototype.parse.apply(this,[e,t]);if(n===0){this._zero=!0;return}return ca(n)&&n>0?n:null}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=ca(e)?Math.max(0,e):null,this.max=ca(t)?Math.max(0,t):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!ca(this._userMin)&&(this.min=e===ef(this.min,0)?ef(this.min,-1):ef(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),n=this.min,r=this.max,i=t=>n=e?n:t,a=e=>r=t?r:e;n===r&&(n<=0?(i(1),a(10)):(i(ef(n,-1)),a(ef(r,1)))),n<=0&&i(ef(r,-1)),r<=0&&a(ef(n,1)),this.min=n,this.max=r}buildTicks(){let e=this.options,t=af({min:this._userMin,max:this._userMax},this);return e.bounds===`ticks`&&Ka(t,this,`value`),e.reverse?(t.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),t}getLabelForValue(e){return e===void 0?`0`:Mo(e,this.chart.options.locale,this.options.ticks.format)}configure(){let e=this.min;super.configure(),this._startValue=Ra(e),this._valueRange=Ra(this.max)-Ra(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(Ra(e)-this._startValue)/this._valueRange)}getValueForPixel(e){let t=this.getDecimalForPixel(e);return 10**(this._startValue+t*this._valueRange)}});function of(e){let t=e.ticks;if(t.display&&e.display){let e=fs(t.backdropPadding);return ua(t.font&&t.font.size,Vo.font.size)+e.height}return 0}function sf(e,t,n){return n=oa(n)?n:[n],{w:Wo(e,t.string,n),h:n.length*t.lineHeight}}function cf(e,t,n,r,i){return e===r||e===i?{start:t-n/2,end:t+n/2}:e<r||e>i?{start:t-n,end:t}:{start:t,end:t+n}}function lf(e){let t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],i=[],a=e._pointLabels.length,o=e.options.pointLabels,s=o.centerPointLabels?Aa/a:0;for(let c=0;c<a;c++){let a=o.setContext(e.getPointLabelContext(c));i[c]=a.padding;let l=e.getPointPosition(c,e.drawingArea+i[c],s),u=ps(a.font),d=sf(e.ctx,u,e._pointLabels[c]);r[c]=d;let f=$a(e.getIndexAngle(c)+s),p=Math.round(Ja(f));uf(n,t,f,cf(p,l.x,d.w,0,180),cf(p,l.y,d.h,90,270))}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=pf(e,r,i)}function uf(e,t,n,r,i){let a=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n)),s=0,c=0;r.start<t.l?(s=(t.l-r.start)/a,e.l=Math.min(e.l,t.l-s)):r.end>t.r&&(s=(r.end-t.r)/a,e.r=Math.max(e.r,t.r+s)),i.start<t.t?(c=(t.t-i.start)/o,e.t=Math.min(e.t,t.t-c)):i.end>t.b&&(c=(i.end-t.b)/o,e.b=Math.max(e.b,t.b+c))}function df(e,t,n){let r=e.drawingArea,{extra:i,additionalAngle:a,padding:o,size:s}=n,c=e.getPointPosition(t,r+i+o,a),l=Math.round(Ja($a(c.angle+Fa))),u=gf(c.y,s.h,l),d=mf(l),f=hf(c.x,s.w,d);return{visible:!0,x:c.x,y:u,textAlign:d,left:f,top:u,right:f+s.w,bottom:u+s.h}}function ff(e,t){if(!t)return!0;let{left:n,top:r,right:i,bottom:a}=e;return!(Yo({x:n,y:r},t)||Yo({x:n,y:a},t)||Yo({x:i,y:r},t)||Yo({x:i,y:a},t))}function pf(e,t,n){let r=[],i=e._pointLabels.length,a=e.options,{centerPointLabels:o,display:s}=a.pointLabels,c={extra:of(a)/2,additionalAngle:o?Aa/i:0},l;for(let a=0;a<i;a++){c.padding=n[a],c.size=t[a];let i=df(e,a,c);r.push(i),s===`auto`&&(i.visible=ff(i,l),i.visible&&(l=i))}return r}function mf(e){return e===0||e===180?`center`:e<180?`left`:`right`}function hf(e,t,n){return n===`right`?e-=t:n===`center`&&(e-=t/2),e}function gf(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function _f(e,t,n){let{left:r,top:i,right:a,bottom:o}=n,{backdropColor:s}=t;if(!aa(s)){let n=ds(t.borderRadius),c=fs(t.backdropPadding);e.fillStyle=s;let l=r-c.left,u=i-c.top,d=a-r+c.width,f=o-i+c.height;Object.values(n).some(e=>e!==0)?(e.beginPath(),is(e,{x:l,y:u,w:d,h:f,radius:n}),e.fill()):e.fillRect(l,u,d,f)}}function vf(e,t){let{ctx:n,options:{pointLabels:r}}=e;for(let i=t-1;i>=0;i--){let t=e._pointLabelItems[i];if(!t.visible)continue;let a=r.setContext(e.getPointLabelContext(i));_f(n,a,t);let o=ps(a.font),{x:s,y:c,textAlign:l}=t;rs(n,e._pointLabels[i],s,c+o.lineHeight/2,o,{color:a.color,textAlign:l,textBaseline:`middle`})}}function yf(e,t,n,r){let{ctx:i}=e;if(n)i.arc(e.xCenter,e.yCenter,t,0,ja);else{let n=e.getPointPosition(0,t);i.moveTo(n.x,n.y);for(let a=1;a<r;a++)n=e.getPointPosition(a,t),i.lineTo(n.x,n.y)}}function bf(e,t,n,r,i){let a=e.ctx,o=t.circular,{color:s,lineWidth:c}=t;!o&&!r||!s||!c||n<0||(a.save(),a.strokeStyle=s,a.lineWidth=c,a.setLineDash(i.dash||[]),a.lineDashOffset=i.dashOffset,a.beginPath(),yf(e,n,o,r),a.closePath(),a.stroke(),a.restore())}function xf(e,t,n){return gs(e,{label:n,index:t,type:`pointLabel`})}(class extends Zd{static id=`radialLinear`;static defaults={display:!0,animate:!0,position:`chartArea`,angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Fo.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":`borderColor`,"pointLabels.color":`color`,"ticks.color":`color`};static descriptors={angleLines:{_fallback:`grid`}};constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let e=this._padding=fs(of(this.options)/2),t=this.width=this.maxWidth-e.width,n=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+t/2+e.left),this.yCenter=Math.floor(this.top+n/2+e.top),this.drawingArea=Math.floor(Math.min(t,n)/2)}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!1);this.min=ca(e)&&!isNaN(e)?e:0,this.max=ca(t)&&!isNaN(t)?t:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/of(this.options))}generateTickLabels(e){Zd.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((e,t)=>{let n=fa(this.options.pointLabels.callback,[e,t],this);return n||n===0?n:``}).filter((e,t)=>this.chart.getDataVisibility(t))}fit(){let e=this.options;e.display&&e.pointLabels.display?lf(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,t,n,r){this.xCenter+=Math.floor((e-t)/2),this.yCenter+=Math.floor((n-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,t,n,r))}getIndexAngle(e){let t=ja/(this._pointLabels.length||1),n=this.options.startAngle||0;return $a(e*t+qa(n))}getDistanceFromCenterForValue(e){if(aa(e))return NaN;let t=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*t:(e-this.min)*t}getValueForDistanceFromCenter(e){if(aa(e))return NaN;let t=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-t:this.min+t}getPointLabelContext(e){let t=this._pointLabels||[];if(e>=0&&e<t.length){let n=t[e];return xf(this.getContext(),e,n)}}getPointPosition(e,t,n=0){let r=this.getIndexAngle(e)-Fa+n;return{x:Math.cos(r)*t+this.xCenter,y:Math.sin(r)*t+this.yCenter,angle:r}}getPointPositionForValue(e,t){return this.getPointPosition(e,this.getDistanceFromCenterForValue(t))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){let{left:t,top:n,right:r,bottom:i}=this._pointLabelItems[e];return{left:t,top:n,right:r,bottom:i}}drawBackground(){let{backgroundColor:e,grid:{circular:t}}=this.options;if(e){let n=this.ctx;n.save(),n.beginPath(),yf(this,this.getDistanceFromCenterForValue(this._endValue),t,this._pointLabels.length),n.closePath(),n.fillStyle=e,n.fill(),n.restore()}}drawGrid(){let e=this.ctx,t=this.options,{angleLines:n,grid:r,border:i}=t,a=this._pointLabels.length,o,s,c;if(t.pointLabels.display&&vf(this,a),r.display&&this.ticks.forEach((e,t)=>{if(t!==0||t===0&&this.min<0){s=this.getDistanceFromCenterForValue(e.value);let n=this.getContext(t),o=r.setContext(n),c=i.setContext(n);bf(this,o,s,a,c)}}),n.display){for(e.save(),o=a-1;o>=0;o--){let r=n.setContext(this.getPointLabelContext(o)),{color:i,lineWidth:a}=r;!a||!i||(e.lineWidth=a,e.strokeStyle=i,e.setLineDash(r.borderDash),e.lineDashOffset=r.borderDashOffset,s=this.getDistanceFromCenterForValue(t.reverse?this.min:this.max),c=this.getPointPosition(o,s),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(c.x,c.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){let e=this.ctx,t=this.options,n=t.ticks;if(!n.display)return;let r=this.getIndexAngle(0),i,a;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(r),e.textAlign=`center`,e.textBaseline=`middle`,this.ticks.forEach((r,o)=>{if(o===0&&this.min>=0&&!t.reverse)return;let s=n.setContext(this.getContext(o)),c=ps(s.font);if(i=this.getDistanceFromCenterForValue(this.ticks[o].value),s.showLabelBackdrop){e.font=c.string,a=e.measureText(r.label).width,e.fillStyle=s.backdropColor;let t=fs(s.backdropPadding);e.fillRect(-a/2-t.left,-i-c.size/2-t.top,a+t.width,c.size+t.height)}rs(e,r.label,0,-i,c,{color:s.color,strokeColor:s.textStrokeColor,strokeWidth:s.textStrokeWidth})}),e.restore()}drawTitle(){}});var Sf={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Cf=Object.keys(Sf);function wf(e,t){return e-t}function Tf(e,t){if(aa(t))return null;let n=e._adapter,{parser:r,round:i,isoWeekday:a}=e._parseOpts,o=t;return typeof r==`function`&&(o=r(o)),ca(o)||(o=typeof r==`string`?n.parse(o,r):n.parse(o)),o===null?null:(i&&(o=i===`week`&&(Wa(a)||a===!0)?n.startOf(o,`isoWeek`,a):n.startOf(o,i)),+o)}function Ef(e,t,n,r){let i=Cf.length;for(let a=Cf.indexOf(e);a<i-1;++a){let e=Sf[Cf[a]],i=e.steps?e.steps:2**53-1;if(e.common&&Math.ceil((n-t)/(i*e.size))<=r)return Cf[a]}return Cf[i-1]}function Df(e,t,n,r,i){for(let a=Cf.length-1;a>=Cf.indexOf(n);a--){let n=Cf[a];if(Sf[n].common&&e._adapter.diff(i,r,n)>=t-1)return n}return Cf[n?Cf.indexOf(n):0]}function Of(e){for(let t=Cf.indexOf(e)+1,n=Cf.length;t<n;++t)if(Sf[Cf[t]].common)return Cf[t]}function kf(e,t,n){if(!n)e[t]=!0;else if(n.length){let{lo:r,hi:i}=X(n,t),a=n[r]>=t?n[r]:n[i];e[a]=!0}}function Af(e,t,n,r){let i=e._adapter,a=+i.startOf(t[0].value,r),o=t[t.length-1].value,s,c;for(s=a;s<=o;s=+i.add(s,1,r))c=n[s],c>=0&&(t[c].major=!0);return t}function jf(e,t,n){let r=[],i={},a=t.length,o,s;for(o=0;o<a;++o)s=t[o],i[s]=o,r.push({value:s,major:!1});return a===0||!n?r:Af(e,r,i,n)}var Mf=class extends bu{static id=`time`;static defaults={bounds:`data`,adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:`millisecond`,displayFormats:{}},ticks:{source:`auto`,callback:!1,major:{enabled:!1}}};constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit=`day`,this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){let n=e.time||={},r=this._adapter=new ol._date(e.adapters.date);r.init(t),ya(n.displayFormats,r.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:Tf(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let e=this.options,t=this._adapter,n=e.time.unit||`day`,{min:r,max:i,minDefined:a,maxDefined:o}=this.getUserBounds();function s(e){!a&&!isNaN(e.min)&&(r=Math.min(r,e.min)),!o&&!isNaN(e.max)&&(i=Math.max(i,e.max))}(!a||!o)&&(s(this._getLabelBounds()),(e.bounds!==`ticks`||e.ticks.source!==`labels`)&&s(this.getMinMax(!1))),r=ca(r)&&!isNaN(r)?r:+t.startOf(Date.now(),n),i=ca(i)&&!isNaN(i)?i:+t.endOf(Date.now(),n)+1,this.min=Math.min(r,i-1),this.max=Math.max(r+1,i)}_getLabelBounds(){let e=this.getLabelTimestamps(),t=1/0,n=-1/0;return e.length&&(t=e[0],n=e[e.length-1]),{min:t,max:n}}buildTicks(){let e=this.options,t=e.time,n=e.ticks,r=n.source===`labels`?this.getLabelTimestamps():this._generate();e.bounds===`ticks`&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);let i=this.min,a=this.max,o=oo(r,i,a);return this._unit=t.unit||(n.autoSkip?Ef(t.minUnit,this.min,this.max,this._getLabelCapacity(i)):Df(this,o.length,t.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit===`year`?void 0:Of(this._unit),this.initOffsets(r),e.reverse&&o.reverse(),jf(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,n=0,r,i;this.options.offset&&e.length&&(r=this.getDecimalForValue(e[0]),t=e.length===1?1-r:(this.getDecimalForValue(e[1])-r)/2,i=this.getDecimalForValue(e[e.length-1]),n=e.length===1?i:(i-this.getDecimalForValue(e[e.length-2]))/2);let a=e.length<3?.5:.25;t=to(t,0,a),n=to(n,0,a),this._offsets={start:t,end:n,factor:1/(t+1+n)}}_generate(){let e=this._adapter,t=this.min,n=this.max,r=this.options,i=r.time,a=i.unit||Ef(i.minUnit,t,n,this._getLabelCapacity(t)),o=ua(r.ticks.stepSize,1),s=a===`week`&&i.isoWeekday,c=Wa(s)||s===!0,l={},u=t,d,f;if(c&&(u=+e.startOf(u,`isoWeek`,s)),u=+e.startOf(u,c?`day`:a),e.diff(n,t,a)>1e5*o)throw Error(t+` and `+n+` are too far apart with stepSize of `+o+` `+a);let p=r.ticks.source===`data`&&this.getDataTimestamps();for(d=u,f=0;d<n;d=+e.add(d,o,a),f++)kf(l,d,p);return(d===n||r.bounds===`ticks`||f===1)&&kf(l,d,p),Object.keys(l).sort(wf).map(e=>+e)}getLabelForValue(e){let t=this._adapter,n=this.options.time;return n.tooltipFormat?t.format(e,n.tooltipFormat):t.format(e,n.displayFormats.datetime)}format(e,t){let n=this.options.time.displayFormats,r=this._unit,i=t||n[r];return this._adapter.format(e,i)}_tickFormatFunction(e,t,n,r){let i=this.options,a=i.ticks.callback;if(a)return fa(a,[e,t,n],this);let o=i.time.displayFormats,s=this._unit,c=this._majorUnit,l=s&&o[s],u=c&&o[c],d=n[t],f=c&&u&&d&&d.major;return this._adapter.format(e,r||(f?u:l))}generateTickLabels(e){let t,n,r;for(t=0,n=e.length;t<n;++t)r=e[t],r.label=this._tickFormatFunction(r.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){let t=this._offsets,n=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+n)*t.factor)}getValueForPixel(e){let t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+n*(this.max-this.min)}_getLabelSize(e){let t=this.options.ticks,n=this.ctx.measureText(e).width,r=qa(this.isHorizontal()?t.maxRotation:t.minRotation),i=Math.cos(r),a=Math.sin(r),o=this._resolveTickFontOptions(0).size;return{w:n*i+o*a,h:n*a+o*i}}_getLabelCapacity(e){let t=this.options.time,n=t.displayFormats,r=n[t.unit]||n.millisecond,i=this._tickFormatFunction(e,0,jf(this,[e],this._majorUnit),r),a=this._getLabelSize(i),o=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return o>0?o:1}getDataTimestamps(){let e=this._cache.data||[],t,n;if(e.length)return e;let r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(t=0,n=r.length;t<n;++t)e=e.concat(r[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){let e=this._cache.labels||[],t,n;if(e.length)return e;let r=this.getLabels();for(t=0,n=r.length;t<n;++t)e.push(Tf(this,r[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return uo(e.sort(wf))}};function Nf(e,t,n){let r=0,i=e.length-1,a,o,s,c;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=io(e,`pos`,t)),{pos:a,time:s}=e[r],{pos:o,time:c}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=io(e,`time`,t)),{time:a,pos:s}=e[r],{time:o,pos:c}=e[i]);let l=o-a;return l?s+(c-s)*(t-a)/l:s}(class extends Mf{static id=`timeseries`;static defaults=Mf.defaults;constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=Nf(t,this.min),this._tableRange=Nf(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){let{min:t,max:n}=this,r=[],i=[],a,o,s,c,l;for(a=0,o=e.length;a<o;++a)c=e[a],c>=t&&c<=n&&r.push(c);if(r.length<2)return[{time:t,pos:0},{time:n,pos:1}];for(a=0,o=r.length;a<o;++a)l=r[a+1],s=r[a-1],c=r[a],Math.round((l+s)/2)!==c&&i.push({time:c,pos:a/(o-1)});return i}_generate(){let e=this.min,t=this.max,n=super.getDataTimestamps();return(!n.includes(e)||!n.length)&&n.splice(0,0,e),(!n.includes(t)||n.length===1)&&n.push(t),n.sort((e,t)=>e-t)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;let t=this.getDataTimestamps(),n=this.getLabelTimestamps();return e=t.length&&n.length?this.normalize(t.concat(n)):t.length?t:n,e=this._cache.all=e,e}getDecimalForValue(e){return(Nf(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){let t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return Nf(this._table,n*this._tableRange+this._minPos,!0)}});var Pf=q.section`
  width: 100%;
  max-width: 1150px;
  margin: 10px auto 0;
  padding: 22px 30px 30px;
  box-sizing: border-box;

  border-radius: 18px;

  background: ${({theme:e})=>e.card};
  color: ${({theme:e})=>e.text};

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);

  animation: forecastIn 0.45s
    cubic-bezier(0.22, 1, 0.36, 1);

  @keyframes forecastIn {
    from {
      opacity: 0;
      transform: translateY(18px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: calc(100% - 30px);
    max-width: 700px;
    margin: 20px auto 0;
    padding: 20px 20px 25px;
    border-radius: 16px;
  }

  @media (max-width: 600px) {
    padding: 18px 16px 22px;
    border-radius: 14px;
  }

  @media (max-width: 450px) {
    width: calc(100% - 20px);
    margin: 15px auto 0;
    padding: 16px 10px 18px;
    border-radius: 12px;
  }
`,Ff=q.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;

  @media (max-width: 450px) {
    margin-bottom: 8px;
  }
`,If=q.h2`
  margin: 0;

  color: ${({theme:e})=>e.text};

  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 18px;
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }
`,Lf=q.p`
  margin: 5px 0 0;

  color: ${({theme:e})=>e.muted};

  font-size: 12px;
  font-weight: 400;

  @media (max-width: 450px) {
    margin-top: 4px;
    font-size: 11px;
  }
`,Rf=q.button`
  width: 34px;
  height: 34px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: ${({theme:e})=>e.text};
  cursor: pointer;
  box-sizing: border-box;
  transition:
    background 0.25s ease,
    color 0.25s ease;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    font-size: 25px;
    font-weight: 300;
    line-height: 24px;
    transform: translate(-50%, -53%) rotate(0deg);
    transform-origin: center;
    transition:
      transform 0.3s ease;
  }

  &:hover {
    background: ${({theme:e})=>e.button};
    transform: rotate(90deg);
  }

  @media (max-width: 450px) {
    width: 30px;
    height: 30px;

    span {
      width: 22px;
      height: 22px;
      font-size: 22px;
    }
  }
`,zf=q.div`
  position: relative;
  width: 100%;
  height: 330px;
  margin-top: 5px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 270px;
  }

  @media (max-width: 600px) {
    height: 250px;
  }

  @media (max-width: 450px) {
    height: 220px;
    margin-top: 2px;
  }

  @media (max-width: 360px) {
    height: 200px;
  }
`,Bf=q.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme:e})=>e.muted};
  font-size: 13px;

  @media (max-width: 450px) {
    font-size: 12px;
  }
`,Vf=q.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme:e})=>e.muted};

  font-size: 13px;
  text-align: center;

  @media (max-width: 450px) {
    padding: 0 15px;
    font-size: 12px;
  }
`;cd.register(il,xd,Cd,Qd,Jd,Ud);var Hf=`b5ad39bd417cd476cc1c17d9b2b53496`,Uf=(e,t=.08)=>{if(!e)return`rgba(255, 179, 108, ${t})`;if(e.startsWith(`rgb(`))return e.replace(`rgb(`,`rgba(`).replace(`)`,`, ${t})`);if(e.startsWith(`rgba(`))return e.replace(/[\d.]+\)$/g,`${t})`);let n=e.replace(`#`,``);return n.length===3&&(n=n.split(``).map(e=>e+e).join(``)),n.length===6?`rgba(${parseInt(n.substring(0,2),16)}, ${parseInt(n.substring(2,4),16)}, ${parseInt(n.substring(4,6),16)}, ${t})`:`rgba(255, 179, 108, ${t})`};function Wf({city:e,unit:t=`C`,onClose:n,darkMode:r=!1,chartColor:i=`#ffb36c`}){let a=(0,B.useRef)(null),o=(0,B.useRef)(null),[s,c]=(0,B.useState)([]),[l,u]=(0,B.useState)(!0),[d,f]=(0,B.useState)(!1);return(0,B.useEffect)(()=>{(async()=>{try{u(!0),f(!1);let t=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e.latitude}&lon=${e.longitude}&appid=${Hf}&units=metric`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json();if(!n.list||!Array.isArray(n.list))throw Error(`Forecast data is unavailable`);c(n.list.slice(0,16))}catch(e){console.error(`Ошибка загрузки почасового прогноза:`,e),f(!0)}finally{u(!1)}})()},[e]),(0,B.useEffect)(()=>{if(l||d||s.length===0||!a.current)return;o.current&&=(o.current.destroy(),null);let e=s.map(e=>new Date(e.dt*1e3).toLocaleTimeString(`en-US`,{hour:`numeric`,hour12:!0})),n=s.map(e=>{let n=e.main.temp;return Math.round(t===`F`?n*9/5+32:n)}),c=r?`#ffffff`:`#111111`,u=r?`rgba(255, 255, 255, 0.08)`:`rgba(17, 17, 17, 0.08)`,f=i,p=Uf(i,.08),m=a.current.getContext(`2d`);return o.current=new cd(m,{type:`line`,data:{labels:e,datasets:[{data:n,borderColor:f,borderWidth:2,backgroundColor:p,pointBackgroundColor:f,pointBorderColor:f,pointRadius:3,pointHoverRadius:5,tension:.4,fill:!0}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:700,easing:`easeOutQuart`},interaction:{intersect:!1,mode:`index`},plugins:{legend:{display:!1},tooltip:{enabled:!0,displayColors:!1,backgroundColor:r?`#ffffff`:`#111111`,titleColor:r?`#111111`:`#ffffff`,bodyColor:r?`#111111`:`#ffffff`,padding:10,cornerRadius:8,callbacks:{title:e=>e[0]?.label||``,label:e=>`${e.raw}°${t}`}}},scales:{x:{grid:{display:!1},border:{display:!1},ticks:{color:c,font:{size:9},maxRotation:0,autoSkip:!1}},y:{grid:{color:u},border:{display:!1},ticks:{color:c,font:{size:9},callback:e=>`${e}°${t}`}}}}}),()=>{o.current&&=(o.current.destroy(),null)}},[s,l,d,t,r,i]),(0,J.jsxs)(Pf,{children:[(0,J.jsxs)(Ff,{children:[(0,J.jsxs)(`div`,{children:[(0,J.jsx)(If,{children:`Hourly forecast`}),(0,J.jsx)(Lf,{children:e.name})]}),(0,J.jsx)(Rf,{type:`button`,onClick:n,"aria-label":`Close hourly forecast`,children:(0,J.jsx)(`span`,{children:`×`})})]}),(0,J.jsxs)(zf,{children:[l&&(0,J.jsx)(Bf,{children:`Loading...`}),d&&!l&&(0,J.jsx)(Vf,{children:`Failed to load forecast.`}),!l&&!d&&s.length>0&&(0,J.jsx)(`canvas`,{ref:a})]})]})}var Gf=q.section`
  width: 100%;
  max-width: 1200px;
  margin: 15px auto 0;
  padding: 27px 35px 35px;
  box-sizing: border-box;

  border-radius: 20px;

  background: ${({theme:e})=>e.card};
  color: ${({theme:e})=>e.text};

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);

  animation: weeklyIn 0.45s
    cubic-bezier(0.22, 1, 0.36, 1);

  @keyframes weeklyIn {
    from {
      opacity: 0;
      transform: translateY(18px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: calc(100% - 30px);
    max-width: 700px;
    margin: 20px auto 0;
    padding: 22px 20px 28px;
    border-radius: 17px;
  }

  @media (max-width: 550px) {
    width: calc(100% - 20px);
    margin: 15px auto 0;
    padding: 18px 12px 22px;
    border-radius: 14px;
  }
`,Kf=q.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 18px;

  @media (max-width: 550px) {
    margin-bottom: 14px;
  }
`,qf=q.h2`
  margin: 0;

  color: ${({theme:e})=>e.text};

  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 550px) {
    font-size: 15px;
  }
`,Jf=q.p`
  margin: 6px 0 0;

  color: ${({theme:e})=>e.muted};

  font-size: 13px;
  font-weight: 400;

  @media (max-width: 550px) {
    margin-top: 4px;
    font-size: 12px;
  }
`,Yf=q.button`
  width: 36px;
  height: 36px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  margin: 0;

  border: none;
  border-radius: 50%;

  background: transparent;
  color: ${({theme:e})=>e.text};

  cursor: pointer;
  box-sizing: border-box;

  transition: background 0.2s ease;

  span {
    position: absolute;
    top: 50%;
    left: 50%;

    width: 25px;
    height: 25px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0;

    font-size: 26px;
    font-weight: 300;
    line-height: 25px;

    transform: translate(-50%, -53%);

    transition: transform 0.2s ease;
  }

  &:hover {
    background: ${({theme:e})=>e.button};
  }

  &:hover span {
    transform: translate(-50%, -53%) scale(1.1);
  }

  &:active span {
    transform: translate(-50%, -53%) scale(0.9);
  }

  @media (max-width: 550px) {
    width: 32px;
    height: 32px;

    span {
      font-size: 23px;
    }
  }
`,Xf=q.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 9px;

  @media (max-width: 550px) {
    gap: 7px;
  }
`,Zf=q.div`
  width: 100%;
  min-height: 43px;
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    240px
    minmax(0, 1fr);

  align-items: center;
  padding: 0 42px;
  box-sizing: border-box;
  border-radius: 10px;
  background: ${({theme:e})=>e.secondary};
  color: ${({theme:e})=>e.text};

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.dark?`#383838`:`#d6d6d6`};

    transform: translateX(2px);

    ${({$darkMode:e})=>e&&`
        color: #111111;
        ${Qf} {
          color: #111111;
        }
        ${tp} {
          color: #111111;
        }
        ${np} {
          color: #111111;
        }
      `}
  }

  @media (max-width: 768px) {
    grid-template-columns:
      minmax(0, 1fr)
      190px
      minmax(0, 1fr);
    min-height: 46px;
    padding: 0 20px;
  }

  @media (max-width: 650px) {
    grid-template-columns:
      minmax(0, 1fr)
      150px
      minmax(0, 1fr);

    padding: 0 15px;
  }

  @media (max-width: 550px) {
    grid-template-columns:
      minmax(0, 1fr)
      auto;

    min-height: 54px;

    padding: 0 12px;

    border-radius: 8px;
  }
`,Qf=q.div`
  min-width: 0;

  color: ${({theme:e})=>e.text};

  font-size: 14px;
  font-weight: 400;

  text-align: left;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 650px) {
    font-size: 13px;
  }

  @media (max-width: 550px) {
    font-size: 12px;
  }

  @media (max-width: 380px) {
    font-size: 11px;
  }
`,$f=q.div`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 9px;

  @media (max-width: 550px) {
    gap: 5px;
  }
`,ep=q.img`
  width: 48px;
  height: 48px;

  object-fit: contain;

  flex-shrink: 0;

  @media (max-width: 550px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 380px) {
    width: 36px;
    height: 36px;
  }
`,tp=q.span`
  color: ${({theme:e})=>e.text};

  font-size: 14px;
  font-weight: 400;

  white-space: nowrap;

  @media (max-width: 650px) {
    font-size: 13px;
  }

  @media (max-width: 550px) {
    font-size: 12px;
  }

  @media (max-width: 380px) {
    font-size: 11px;
  }
`,np=q.div`
  min-width: 0;

  color: ${({theme:e})=>e.text};

  font-size: 14px;
  font-weight: 400;

  text-align: right;

  text-transform: lowercase;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 650px) {
    font-size: 13px;
  }

  @media (max-width: 550px) {
    display: none;
  }
`,rp=q.div`
  width: 100%;
  min-height: 280px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme:e})=>e.muted};

  font-size: 14px;

  @media (max-width: 550px) {
    min-height: 220px;
    font-size: 13px;
  }
`,ip=q.div`
  width: 100%;
  min-height: 280px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme:e})=>e.muted};

  font-size: 14px;
  text-align: center;

  @media (max-width: 550px) {
    min-height: 220px;
    padding: 0 20px;
    font-size: 13px;
  }
`,ap=`b5ad39bd417cd476cc1c17d9b2b53496`;function op({city:e,unit:t=`C`,onClose:n,darkMode:r=!1,accentColor:i=`#ffb36c`}){let[a,o]=(0,B.useState)([]),[s,c]=(0,B.useState)(!0),[l,u]=(0,B.useState)(!1);(0,B.useEffect)(()=>{(async()=>{try{c(!0),u(!1);let t=await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${e.latitude}&lon=${e.longitude}&exclude=current,minutely,hourly,alerts&appid=${ap}&units=metric`);if(t.ok){let e=await t.json();if(Array.isArray(e.daily)&&e.daily.length>0){let t=e.daily.slice(0,8).map(e=>({date:new Date(e.dt*1e3),icon:e.weather?.[0]?.icon,description:e.weather?.[0]?.description||``,maxTemp:e.temp.max,minTemp:e.temp.min}));o(t);return}}let n=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e.latitude}&lon=${e.longitude}&appid=${ap}&units=metric`);if(!n.ok)throw Error(`HTTP error: ${n.status}`);let r=await n.json();if(!Array.isArray(r.list)||r.list.length===0)throw Error(`Forecast data is unavailable`);let i={};r.list.forEach(e=>{let t=new Date(e.dt*1e3).toLocaleDateString(`en-CA`);i[t]||(i[t]=[]),i[t].push(e)});let a=Object.values(i).slice(0,5).map(e=>{let t=e.map(e=>e.main.temp),n=e[Math.floor(e.length/2)];return{date:new Date(n.dt*1e3),icon:n.weather?.[0]?.icon,description:n.weather?.[0]?.description||``,maxTemp:Math.max(...t),minTemp:Math.min(...t)}});o(a)}catch(e){console.error(`Ошибка загрузки недельного прогноза:`,e),u(!0)}finally{c(!1)}})()},[e]);let d=e=>Math.round(t===`F`?e*9/5+32:e),f=e=>e.toLocaleDateString(`en-US`,{weekday:`long`,month:`long`,day:`numeric`});return(0,J.jsxs)(Gf,{children:[(0,J.jsxs)(Kf,{children:[(0,J.jsxs)(`div`,{children:[(0,J.jsx)(qf,{children:`5-day forecast`}),(0,J.jsx)(Jf,{children:e.name})]}),(0,J.jsx)(Yf,{type:`button`,onClick:n,"aria-label":`Close weekly forecast`,children:(0,J.jsx)(`span`,{children:`×`})})]}),s&&(0,J.jsx)(rp,{children:`Loading...`}),l&&!s&&(0,J.jsx)(ip,{children:`Failed to load forecast.`}),!s&&!l&&a.length>0&&(0,J.jsx)(Xf,{children:a.map((e,n)=>(0,J.jsxs)(Zf,{$darkMode:r,children:[(0,J.jsx)(Qf,{children:f(e.date)}),(0,J.jsxs)($f,{children:[(0,J.jsx)(ep,{src:`https://openweathermap.org/img/wn/${e.icon}@2x.png`,alt:e.description}),(0,J.jsxs)(tp,{children:[d(e.maxTemp),`° /`,d(e.minTemp),`°`,t]})]}),(0,J.jsx)(np,{children:e.description})]},`${e.date.getTime()}-${n}`))})]})}var sp=`/project-forecast/assets/ice-BVuotkio.png`,cp=`/project-forecast/assets/hot-shw1z_Oz.png`,lp=`/project-forecast/assets/ideal-DsCCYThy.png`,up=q.section`
  position: relative;
  width: 100%;
  max-width: 668px;
  margin: 35px auto 0;
  padding: 24px 45px;
  box-sizing: border-box;
  border-radius: 10px;

  background: ${({theme:e})=>e.card};
  color: ${({theme:e})=>e.text};

  animation: showMoreWeather 0.3s ease;

  @keyframes showMoreWeather {
    from {
      opacity: 0;
      transform: translateY(10px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 700px) {
    max-width: 620px;
    padding: 22px 25px;
  }

  @media screen and (max-width: 560px) {
    width: calc(100% - 30px);
    max-width: 430px;
    margin: 25px auto 0;
    padding: 20px 15px;
    border-radius: 10px;
  }
`,dp=q.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`,fp=q.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: ${({theme:e})=>e.text};

  @media screen and (max-width: 560px) {
    font-size: 16px;
  }
`,pp=q.p`
  margin: 4px 0 0;
  font-size: 13px;
  color: ${({theme:e})=>e.muted};

  @media screen and (max-width: 560px) {
    font-size: 12px;
  }
`,mp=q.button`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  border: none;
  border-radius: 50%;

  background: transparent;
  color: ${({theme:e})=>e.text};

  cursor: pointer;
  font-size: 22px;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.secondary};
    transform: rotate(90deg);
  }

  @media screen and (max-width: 560px) {
    width: 28px;
    height: 28px;
    font-size: 19px;
  }
`,hp=q.div`
  display: grid;
  grid-template-columns: repeat(3, 170px);
  grid-template-rows: repeat(2, 127px);
  gap: 23px 34px;
  justify-content: center;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: auto;
    gap: 20px;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`,gp=q.div`
  width: 170px;
  height: 127px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding-top: 12px;
  box-sizing: border-box;
  border-radius: 6px;

  background: ${({theme:e})=>e.secondary};
  color: ${({theme:e})=>e.text};

  @media screen and (max-width: 700px) {
    width: 100%;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    max-width: 240px;
    height: 115px;
    margin: 0 auto;
  }
`,_p=q.span`
  font-size: 11px;
  line-height: 1;
  color: ${({theme:e})=>e.text};
  margin-bottom: 7px;

  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`,vp=q.span`
  font-size: 19px;
  line-height: 1;
  color: ${({theme:e})=>e.text};

  @media screen and (max-width: 450px) {
    font-size: 17px;
  }
`,yp=q.div`
  margin-top: 9px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 55px;
    height: 55px;
    object-fit: contain;
  }

  @media screen and (max-width: 450px) {
    img {
      width: 48px;
      height: 48px;
    }
  }
`,bp=q.div`
  min-height: 276px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme:e})=>e.muted};

  @media screen and (max-width: 560px) {
    min-height: 220px;
  }
`,xp=q.div`
  min-height: 276px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme:e})=>e.muted};

  @media screen and (max-width: 560px) {
    min-height: 220px;
    text-align: center;
  }
`,Sp=`b5ad39bd417cd476cc1c17d9b2b53496`;function Cp({city:e,unit:t=`C`,onClose:n}){let[r,i]=(0,B.useState)(null),[a,o]=(0,B.useState)(!0),[s,c]=(0,B.useState)(!1);(0,B.useEffect)(()=>{(async()=>{try{o(!0),c(!1);let t=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e.latitude}&lon=${e.longitude}&appid=${Sp}&units=metric`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json(),r=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e.latitude}&lon=${e.longitude}&appid=${Sp}&units=metric`);if(!r.ok)throw Error(`HTTP error: ${r.status}`);let a=await r.json(),s=new Date,l=a.list.filter(e=>{let t=new Date(e.dt*1e3);return t.getDate()===s.getDate()&&t.getMonth()===s.getMonth()&&t.getFullYear()===s.getFullYear()}).map(e=>e.main.temp),u=l.length>0?Math.min(...l):n.main.temp_min,d=l.length>0?Math.max(...l):n.main.temp_max;i({feelsLike:n.main.feels_like,minTemp:u,maxTemp:d,humidity:n.main.humidity,pressure:n.main.pressure,windSpeed:n.wind.speed,visibility:n.visibility,sunrise:n.sys.sunrise,sunset:n.sys.sunset,timezone:n.timezone})}catch(e){console.error(`Ошибка загрузки подробной информации:`,e),c(!0)}finally{o(!1)}})()},[e]);let l=e=>t===`F`?e*9/5+32:e,u=e=>e<16?sp:e<=19?lp:cp,d=(e,t)=>e?new Date((e+t)*1e3).toISOString().slice(11,16):`--:--`;return(0,J.jsxs)(up,{children:[(0,J.jsxs)(dp,{children:[(0,J.jsxs)(`div`,{children:[(0,J.jsx)(fp,{children:`Weather details`}),(0,J.jsx)(pp,{children:e.name})]}),(0,J.jsx)(mp,{type:`button`,onClick:n,"aria-label":`Close weather details`,children:(0,J.jsx)(tr,{})})]}),a&&(0,J.jsx)(bp,{children:`Loading...`}),s&&!a&&(0,J.jsx)(xp,{children:`Failed to load weather details.`}),r&&!a&&!s&&(0,J.jsxs)(hp,{children:[(0,J.jsxs)(gp,{children:[(0,J.jsx)(_p,{children:`Feels like`}),(0,J.jsxs)(vp,{children:[l(r.feelsLike).toFixed(1),`°`,t]}),(0,J.jsx)(yp,{children:(0,J.jsx)(`img`,{src:u(r.feelsLike),alt:`Temperature`})})]}),(0,J.jsxs)(gp,{children:[(0,J.jsx)(_p,{children:`Min / Max`}),(0,J.jsxs)(vp,{children:[l(r.minTemp).toFixed(1),`° /`,` `,l(r.maxTemp).toFixed(1),`°`,t]})]}),(0,J.jsxs)(gp,{children:[(0,J.jsx)(_p,{children:`Humidity`}),(0,J.jsxs)(vp,{children:[r.humidity,`%`]}),(0,J.jsx)(yp,{children:(0,J.jsx)(`img`,{src:`/project-forecast/assets/humidity-CUjCCt5g.png`,alt:`Humidity`})})]}),(0,J.jsxs)(gp,{children:[(0,J.jsx)(_p,{children:`Pressure`}),(0,J.jsxs)(vp,{children:[r.pressure,` hPa`]}),(0,J.jsx)(yp,{children:(0,J.jsx)(`img`,{src:`/project-forecast/assets/pressure-DNGAfX5a.png`,alt:`Pressure`})})]}),(0,J.jsxs)(gp,{children:[(0,J.jsx)(_p,{children:`Wind speed`}),(0,J.jsxs)(vp,{children:[r.windSpeed.toFixed(2),` `,`m/s`]}),(0,J.jsx)(yp,{children:(0,J.jsx)(`img`,{src:`/project-forecast/assets/wind-CthuVuVu.png`,alt:`Wind speed`})})]}),(0,J.jsxs)(gp,{children:[(0,J.jsx)(_p,{children:`Visibility`}),(0,J.jsx)(vp,{children:r.visibility>=1e4?`Unlimited`:`${(r.visibility/1e3).toFixed(1)} km`}),(0,J.jsx)(yp,{children:(0,J.jsx)(`img`,{src:`/project-forecast/assets/visibility-CQs0Kbtj.png`,alt:`Visibility`})})]}),(0,J.jsxs)(gp,{children:[(0,J.jsx)(_p,{children:`Sunrise`}),(0,J.jsx)(vp,{children:d(r.sunrise,r.timezone)}),(0,J.jsx)(yp,{children:(0,J.jsx)(`span`,{children:`🌅`})})]}),(0,J.jsxs)(gp,{children:[(0,J.jsx)(_p,{children:`Sunset`}),(0,J.jsx)(vp,{children:d(r.sunset,r.timezone)}),(0,J.jsx)(yp,{children:(0,J.jsx)(`span`,{children:`🌇`})})]})]})]})}var wp=q.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  width: fit-content;
  margin: 20px auto 40px 0;
  padding: 6px 12px;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(8px);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 18px rgba(0, 0, 0, 0.1);
  }
`,Tp=q.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  line-height: 1;
`,Ep=q.span`
  color: #111111;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.3px;
`;function Dp({description:e=``}){let t=e.toLowerCase(),n=`☀️`,r=`Clear`;return t.includes(`thunderstorm`)||t.includes(`storm`)?(n=`⛈️`,r=`Storm`):t.includes(`snow`)?(n=`❄️`,r=`Snow`):t.includes(`rain`)||t.includes(`drizzle`)?(n=`🌧️`,r=`Rain`):t.includes(`fog`)||t.includes(`mist`)||t.includes(`haze`)?(n=`🌫️`,r=`Fog`):t.includes(`cloud`)&&(n=`☁️`,r=`Cloudy`),(0,J.jsxs)(wp,{children:[(0,J.jsx)(Tp,{children:n}),(0,J.jsx)(Ep,{children:r})]})}var Op=`/project-forecast/assets/clear-B12KMxvD.gif`,kp=`/project-forecast/assets/clouds-DKF1LhHM.gif`,Ap=`/project-forecast/assets/rain-CwG3OlJy.gif`,jp=`/project-forecast/assets/snow-CxU5hFbN.gif`,Mp=`/project-forecast/assets/storm-CDiFKZbq.gif`,Np=`/project-forecast/assets/fog-DDjGpEi4.gif`,Pp=Ln`
  0% {
    transform: scale(1);
  }

  45% {
    transform: scale(1.35);
  }

  70% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
`,Fp=q.section`
  width: 100%;
  padding: 30px 0 50px;

  background: ${({theme:e})=>e.background};

  box-sizing: border-box;

  @media screen and (min-width: 564px) {
    padding: 40px 0 55px;
  }

  @media screen and (min-width: 1160px) {
    padding: 45px 0 60px;
  }
`,Ip=q.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  flex-wrap: wrap;

  gap: 30px;

  padding: 0 16px;

  box-sizing: border-box;

  @media screen and (min-width: 564px) {
    gap: 30px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1160px) {
    gap: 40px;
    padding: 0 64px;
  }
`,Lp=q.article`
  position: relative;
  overflow: hidden;

  width: 100%;
  max-width: 340px;
  min-height: 455px;

  padding: 14px 22px 28px;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  border-radius: 18px;

  background: ${({theme:e})=>e.card};

  box-shadow:
    0 8px 25px
    rgba(0, 0, 0, 0.08);

  transform: translateY(0) scale(1);

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;

  &:hover {
    transform:
      translateY(-8px)
      scale(1.015);

    box-shadow:
      0 20px 45px
      rgba(0, 0, 0, 0.18);
  }

  &::before {
    content: "";

    position: absolute;

    top: -120%;
    left: -70%;

    width: 50%;
    height: 300%;

    background:
      linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.18),
        transparent
      );

    transform: rotate(20deg);

    opacity: 0;

    pointer-events: none;

    transition:
      left 0.7s ease,
      opacity 0.3s ease;

    z-index: 3;
  }

  &:hover::before {
    left: 120%;
    opacity: 1;
  }

  @media screen and (min-width: 564px) {
    max-width: 330px;
    min-height: 455px;

    padding: 15px 24px 38px;
  }

  @media screen and (min-width: 1160px) {
    width: 375px;
    max-width: 375px;

    height: 500px;
    min-height: 500px;

    padding: 16px 30px 40px;

    border-radius: 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }

    &::before {
      display: none;
    }
  }
`,Rp=q.img`
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  z-index: -3;

  transform: scale(1.01);

  filter: saturate(1.08);

  transition:
    transform 1s
      cubic-bezier(0.22, 1, 0.36, 1),
    filter 1s ease;

  ${Lp}:hover & {
    transform: scale(1.09);
    filter: saturate(1.2);
  }
`,zp=q.div`
  position: absolute;

  inset: 0;

  z-index: -2;

  background:
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.18) 0%,
      rgba(0, 0, 0, 0.08) 45%,
      rgba(0, 0, 0, 0.35) 100%
    );

  pointer-events: none;
`,Bp=q.div`
  position: absolute;

  inset: 0;

  z-index: -1;

  border-radius: inherit;

  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.18),
      rgba(255, 255, 255, 0.05) 45%,
      rgba(255, 255, 255, 0.02)
    );

  backdrop-filter:
    blur(2px)
    saturate(115%);

  -webkit-backdrop-filter:
    blur(2px)
    saturate(115%);

  box-shadow:
    inset 0 1px 0
      rgba(255, 255, 255, 0.22),
    inset 0 0 30px
      ${({$accent:e})=>`${e}08`};

  pointer-events: none;
`,Vp=q.div`
  position: relative;

  z-index: 2;

  width: 100%;
  min-height: 0;

  display: flex;
  flex-direction: column;

  flex: 1;
`,Hp=q.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`,Up=q.span`
  color: #ffffff;

  font-size: 14px;
  font-weight: 500;

  line-height: 1;

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;

  max-width: 60%;

  @media screen and (min-width: 564px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1160px) {
    font-size: 16px;
  }
`,Wp=q.span`
  color: rgba(255, 255, 255, 0.9);

  font-size: 14px;
  font-weight: 500;

  line-height: 1;

  text-align: right;

  @media screen and (min-width: 564px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1160px) {
    font-size: 16px;
  }
`,Gp=q.div`
  margin-top: 20px;

  color: #ffffff;

  font-size: 25px;
  font-weight: 500;

  line-height: 1;

  letter-spacing: -0.5px;

  @media screen and (min-width: 564px) {
    margin-top: 22px;
    font-size: 27px;
  }

  @media screen and (min-width: 1160px) {
    margin-top: 24px;
    font-size: 28px;
  }
`,Kp=q.div`
  margin-top: 15px;

  display: flex;
  align-items: center;

  gap: 12px;

  @media screen and (min-width: 564px) {
    gap: 18px;
  }

  @media screen and (min-width: 1160px) {
    margin-top: 17px;
    gap: 30px;
  }
`,qp=q.button`
  width: 125px;
  height: 32px;

  padding: 0;

  border: 1px solid
    rgba(255, 255, 255, 0.18);

  border-radius: 10px;

  background:
    ${({$accent:e})=>`${e}dd`};

  color: #111111;

  font-size: 10px;
  font-weight: 600;

  cursor: pointer;

  box-shadow:
    0 5px 15px
    rgba(0, 0, 0, 0.12);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    filter 0.25s ease;

  &:hover {
    transform: translateY(-2px);

    filter: brightness(0.92);

    box-shadow:
      0 8px 20px
      ${({$accent:e})=>`${e}55`};
  }

  &:active {
    transform: scale(0.97);
  }

  @media screen and (min-width: 564px) {
    width: 125px;
    height: 33px;

    font-size: 11px;
  }

  @media screen and (min-width: 1160px) {
    width: 134px;
    height: 34px;

    font-size: 12px;
  }
`,Jp=q.div`
  margin-top: 17px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 9px;

  color: rgba(255, 255, 255, 0.92);

  font-size: 12px;
  font-weight: 500;

  line-height: 1;

  @media screen and (min-width: 564px) {
    gap: 11px;
    font-size: 13px;
  }

  @media screen and (min-width: 1160px) {
    margin-top: 20px;
    gap: 13px;
    font-size: 14px;
  }
`,Yp=q.span`
  width: 1px;
  height: 16px;

  background:
    rgba(255, 255, 255, 0.65);

  @media screen and (min-width: 1160px) {
    height: 18px;
  }
`,Xp=q.img`
  width: 110px;
  height: 110px;

  margin-top: 12px;

  object-fit: contain;

  filter:
    drop-shadow(
      0 10px 15px
      rgba(0, 0, 0, 0.2)
    );

  transition:
    transform 0.45s
      cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.45s ease;

  ${Lp}:hover & {
    transform:
      translateY(-4px)
      scale(1.06);

    filter:
      drop-shadow(
        0 14px 22px
        rgba(0, 0, 0, 0.3)
      );
  }

  @media screen and (min-width: 564px) {
    width: 115px;
    height: 115px;

    margin-top: 14px;
  }

  @media screen and (min-width: 1160px) {
    width: 125px;
    height: 125px;

    margin-top: 17px;
  }
`,Zp=q.div`
  margin-top: 2px;

  color: #ffffff;

  font-size: 32px;
  font-weight: 500;

  line-height: 1;

  letter-spacing: -1px;

  @media screen and (min-width: 564px) {
    font-size: 34px;
  }

  @media screen and (min-width: 1160px) {
    margin-top: 3px;
    font-size: 36px;
  }
`,Qp=q.div`
  width: 100%;

  margin-top: auto;
  padding-top: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-shrink: 0;

  box-sizing: border-box;

  @media screen and (min-width: 1160px) {
    padding-top: 14px;
  }
`,$p=q.button`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: 1px solid
    rgba(255, 255, 255, 0.14);

  border-radius: 10px;

  background:
    rgba(255, 255, 255, 0.10);

  backdrop-filter: blur(8px);

  color: #ffffff;

  cursor: pointer;

  transition:
    color 0.25s ease,
    transform 0.3s ease,
    background 0.25s ease;

  svg {
    width: 21px;
    height: 21px;

    stroke-width: 2;
  }

  &:hover {
    color: #111111;

    background:
      ${({theme:e})=>e.button};

    transform: rotate(180deg);
  }

  @media screen and (min-width: 1160px) {
    width: 34px;
    height: 34px;

    svg {
      width: 23px;
      height: 23px;
    }
  }
`,em=q.button`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: 1px solid
    rgba(255, 255, 255, 0.14);

  border-radius: 10px;

  background:
    rgba(255, 255, 255, 0.10);

  backdrop-filter: blur(8px);

  color:
    ${({$active:e})=>e?`#ff4141`:`#ffffff`};

  animation:
    ${({$active:e})=>e?Pp:`none`}
    0.45s ease;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    color 0.25s ease;

  svg {
    width: 22px;
    height: 22px;

    stroke-width: 1.8;

    fill:
      ${({$active:e})=>e?`#ff4141`:`transparent`};
  }

  &:hover {
    transform: scale(1.1);

    background:
      rgba(255, 255, 255, 0.2);
  }

  @media screen and (min-width: 1160px) {
    width: 34px;
    height: 34px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`,tm=q.button`
  min-width: 42px;
  height: 32px;

  padding: 0 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid
    rgba(255, 255, 255, 0.18);

  border-radius: 10px;

  background:
    rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(8px);

  color: #ffffff;

  font-size: 11px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.2s ease;

  &:hover {
    background:
      ${({$accent:e})=>e};

    color: #111111;

    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.95);
  }

  @media screen and (min-width: 1160px) {
    min-width: 45px;
    height: 34px;

    font-size: 12px;
  }
`,nm=q.button`
  width: 105px;
  height: 31px;

  padding: 0;

  border: 1px solid
    rgba(255, 255, 255, 0.18);

  border-radius: 10px;

  background:
    ${({$accent:e})=>`${e}dd`};

  color: #111111;

  font-size: 11px;
  font-weight: 600;

  cursor: pointer;

  box-shadow:
    0 5px 15px
    rgba(0, 0, 0, 0.12);

  transition:
    transform 0.25s ease,
    filter 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    filter: brightness(0.92);

    transform: translateY(-2px);

    box-shadow:
      0 8px 20px
      ${({$accent:e})=>`${e}50`};
  }

  &:active {
    transform: scale(0.97);
  }

  @media screen and (min-width: 1160px) {
    width: 116px;
    height: 33px;

    font-size: 12px;
  }
`,rm=q.button`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: 1px solid
    rgba(255, 255, 255, 0.14);

  border-radius: 10px;

  background:
    rgba(255, 255, 255, 0.10);

  backdrop-filter: blur(8px);

  color: #ffffff;

  cursor: pointer;

  transition:
    color 0.2s ease,
    transform 0.2s ease,
    background 0.2s ease;

  svg {
    width: 21px;
    height: 21px;

    stroke-width: 2;
  }

  &:hover {
    color: #ffffff;

    background:
      rgba(255, 65, 65, 0.75);

    transform:
      translateY(-2px)
      scale(1.05);
  }

  @media screen and (min-width: 1160px) {
    width: 34px;
    height: 34px;

    svg {
      width: 23px;
      height: 23px;
    }
  }
`,im=q.div`
  width: 100%;

  padding: 30px 20px 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  text-align: center;
`,am=q.h2`
  margin: 0;

  color: ${({theme:e})=>e.text||`#222222`};

  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;

  @media screen and (min-width: 564px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1160px) {
    font-size: 30px;
  }
`,om=q.p`
  margin: 10px 0 0;

  color: ${({theme:e})=>e.secondaryText||`#777777`};

  font-size: 14px;
  line-height: 1.5;

  @media screen and (min-width: 564px) {
    font-size: 15px;
  }
`,sm=q.button`
  margin-top: 20px;

  min-width: 150px;
  height: 40px;

  padding: 0 20px;

  border: none;

  border-radius: 10px;

  background:
    ${({$accent:e})=>e};

  color: #111111;

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  box-shadow:
    0 6px 18px
    rgba(0, 0, 0, 0.12);

  transition:
    transform 0.2s ease,
    filter 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    filter: brightness(0.95);

    box-shadow:
      0 9px 24px
      rgba(0, 0, 0, 0.16);
  }

  &:active {
    transform: scale(0.97);
  }
`;function cm({cities:e,favorites:t,onRefresh:n,onFavorite:r,onDelete:i,darkMode:a,userColor:o}){let[s,c]=(0,B.useState)(new Date),[l,u]=(0,B.useState)(null),[d,f]=(0,B.useState)(null),[p,m]=(0,B.useState)(null),[h,g]=(0,B.useState)({});(0,B.useEffect)(()=>{let e=setInterval(()=>{c(new Date)},1e3);return()=>clearInterval(e)},[]);let _=(e=``)=>{let t=e.toLowerCase();return t.includes(`thunderstorm`)?Mp:t.includes(`snow`)||t.includes(`sleet`)?jp:t.includes(`rain`)||t.includes(`drizzle`)?Ap:t.includes(`mist`)||t.includes(`fog`)||t.includes(`haze`)?Np:t.includes(`cloud`)||t.includes(`overcast`)?kp:Op},v=e=>{let t=s.getTime()+s.getTimezoneOffset()*6e4;return new Date(t+e*1e3)},y=e=>e.toLocaleTimeString(`en-GB`,{hour:`2-digit`,minute:`2-digit`,hour12:!1}),b=e=>`${String(e.getDate()).padStart(2,`0`)}.${String(e.getMonth()+1).padStart(2,`0`)}.${e.getFullYear()}`,x=e=>e.toLocaleDateString(`en-US`,{weekday:`long`}),S=e=>{g(t=>({...t,[e]:t[e]===`F`?`C`:`F`}))},C=e=>h[e]||`C`,w=(e,t)=>Math.round(t===`F`?e*9/5+32:e);return e.length===0?(0,J.jsx)(Fp,{id:`menu`,children:(0,J.jsxs)(im,{children:[(0,J.jsx)(am,{children:`No cities yet`}),(0,J.jsx)(om,{children:`Add a city to see the weather here`}),(0,J.jsx)(sm,{type:`button`,$accent:o,onClick:()=>{let e=document.getElementById(`about`);e&&e.scrollIntoView({behavior:`smooth`,block:`start`}),setTimeout(()=>{let e=document.getElementById(`weather-search-input`);e&&e.focus()},500)},children:`Search for a city`})]})}):(0,J.jsxs)(Fp,{id:`menu`,children:[(0,J.jsx)(Ip,{children:e.map(e=>{let s=v(e.timezone),c=C(e.id),l=t.some(t=>t.id===e.id),d=_(e.description);return(0,J.jsxs)(Lp,{$accent:o,$dark:a,children:[(0,J.jsx)(Rp,{src:d,alt:``}),(0,J.jsx)(zp,{}),(0,J.jsx)(Bp,{$accent:o,$dark:a}),(0,J.jsxs)(Vp,{children:[(0,J.jsxs)(Hp,{children:[(0,J.jsx)(Up,{children:e.name}),(0,J.jsx)(Wp,{children:e.country})]}),(0,J.jsx)(Gp,{children:y(s)}),(0,J.jsxs)(Kp,{children:[(0,J.jsx)(qp,{type:`button`,$accent:o,onClick:()=>{u(e),f(null),m(null)},children:`Hourly forecast`}),(0,J.jsx)(qp,{type:`button`,$accent:o,onClick:()=>{f(e),u(null),m(null)},children:`Weekly forecast`})]}),(0,J.jsxs)(Jp,{children:[(0,J.jsx)(`span`,{children:b(s)}),(0,J.jsx)(Yp,{}),(0,J.jsx)(`span`,{children:x(s)})]}),(0,J.jsx)(Xp,{src:`https://openweathermap.org/img/wn/${e.icon}@2x.png`,alt:e.description}),(0,J.jsxs)(Zp,{children:[w(e.temperature,c),`°`,c]}),(0,J.jsx)(Dp,{description:e.description}),(0,J.jsxs)(Qp,{children:[(0,J.jsx)($p,{type:`button`,onClick:()=>n(e),children:(0,J.jsx)(or,{})}),(0,J.jsx)(em,{type:`button`,$active:l,$accent:o,onClick:()=>r(e.id),children:(0,J.jsx)(lr,{})}),(0,J.jsxs)(tm,{type:`button`,$accent:o,onClick:()=>S(e.id),title:`Change temperature unit`,children:[`°`,c]}),(0,J.jsx)(nm,{type:`button`,$accent:o,onClick:()=>{m(p?.id===e.id?null:e),u(null),f(null)},children:`See more`}),(0,J.jsx)(rm,{type:`button`,onClick:()=>i(e.id),children:(0,J.jsx)(nr,{})})]})]})]},e.id)})}),l&&(0,J.jsx)(Wf,{city:l,unit:C(l.id),darkMode:a,chartColor:o,onClose:()=>u(null)}),d&&(0,J.jsx)(op,{city:d,unit:C(d.id),darkMode:a,accentColor:o,onClose:()=>f(null)}),p&&(0,J.jsx)(Cp,{city:p,unit:C(p.id),onClose:()=>m(null)})]})}var lm=q.section`
  width: 100%;
  padding: 50px 52px;
  box-sizing: border-box;
  overflow: hidden;

  background: ${({$dark:e})=>e?`#111111`:`#ffffff`};

  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  transition:
    background 0.3s ease,
    color 0.3s ease;

  @media (max-width: 900px) {
    padding: 40px 30px;
  }

  @media (max-width: 600px) {
    padding: 30px 15px;
  }

  @media (max-width: 380px) {
    padding: 25px 12px;
  }
`,um=q.div`
  width: 100%;
  max-width: 1380px;
  margin: 0 auto;
`,dm=q.div`
  opacity: 0;
  transform: translateY(30px);

  transition:
    opacity 1s ease,
    transform 1s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`,fm=q.h2`
  margin: 0;

  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  font-size: 26px;
  font-weight: 500;
  line-height: 1.2;

  transition: color 0.3s ease;

  @media (max-width: 900px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 21px;
  }

  @media (max-width: 380px) {
    font-size: 19px;
  }
`,pm=q.div`
  display: flex;
  align-items: center;
  gap: 12px;

  margin-top: 30px;
  margin-bottom: 38px;

  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 8px;
    margin-top: 24px;
    margin-bottom: 28px;
  }
`,mm=q.button`
  height: 42px;

  padding: 0 20px;

  border: 1px solid
    ${({$active:e,$dark:t,$accent:n})=>e?n:t?`#444444`:`#dddddd`};

  border-radius: 999px;

  background: ${({$active:e,$dark:t,$accent:n})=>e?n:t?`#222222`:`#ffffff`};

  color: ${({$active:e,$dark:t})=>e||!t?`#111111`:`#ffffff`};

  font-size: 15px;
  font-weight: 500;

  cursor: pointer;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    border-color: ${({$accent:e})=>e};

    transform: translateY(-2px);

    box-shadow: ${({$accent:e})=>`0 6px 16px ${e}33`};
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 600px) {
    height: 38px;
    padding: 0 15px;
    font-size: 14px;
  }
`,hm=q.div`
  width: 100%;

  display: grid;

  grid-template-columns:
    repeat(4, minmax(0, 1fr));

  gap: 24px;

  margin: 0 0 28px;

  @media (max-width: 1100px) {
    grid-template-columns:
      repeat(3, minmax(0, 1fr));

    gap: 22px;
  }

  @media (max-width: 850px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap: 24px 18px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`,gm=q.article`
  width: 100%;
  min-width: 0;
`,_m=q.img`
  display: block;

  width: 100%;
  height: 250px;

  object-fit: cover;

  border-radius: 14px;

  background: #eeeeee;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);

    box-shadow:
      0 10px 25px
      rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 1100px) {
    height: 230px;
  }

  @media (max-width: 850px) {
    height: 250px;
  }

  @media (max-width: 600px) {
    height: 240px;
    border-radius: 12px;
  }

  @media (max-width: 380px) {
    height: 210px;
  }
`,vm=q.h3`
  margin: 20px 0 0;

  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  font-size: 19px;
  font-weight: 500;
  line-height: 1.25;

  transition: color 0.3s ease;

  @media (max-width: 900px) {
    font-size: 18px;
    margin-top: 16px;
  }

  @media (max-width: 600px) {
    font-size: 17px;
    margin-top: 14px;
  }

  @media (max-width: 380px) {
    font-size: 16px;
  }
`,ym=q.button`
  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 10px;

  height: 48px;

  padding: 0 40px;

  border: none;
  border-radius: 12px;

  background: ${({$accent:e})=>e};

  color: #111111;

  font-size: 16px;
  font-weight: 500;

  cursor: pointer;

  transition:
    background 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease,
    opacity 0.25s ease;

  &:hover {
    background: ${({$accent:e})=>e};

    transform: translateY(-2px);

    box-shadow: ${({$accent:e})=>`0 8px 20px ${e}4d`};
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;

    transform: none;

    box-shadow: none;
  }

  svg {
    width: 18px;
    height: 18px;

    flex-shrink: 0;

    transition:
      transform 0.25s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: 600px) {
    width: 100%;
    max-width: 280px;
    height: 46px;
    padding: 0 25px;
    font-size: 15px;
  }

  @media (max-width: 380px) {
    max-width: 100%;
    height: 44px;
    font-size: 14px;
  }
`,bm=`https://reactproject-gsav.onrender.com/api/news`,xm=[`All`,`Nature`,`Weather`,`Animals`,`Science`],Sm=e=>`
    ${e.title||``}
    ${e.description||``}
    ${e.content||``}
  `.toLowerCase(),Cm=(e,t)=>{if(t===`All`)return!0;let n=Sm(e);return{Nature:[`nature`,`forest`,`tree`,`trees`,`plant`,`plants`,`flower`,`flowers`,`ocean`,`sea`,`river`,`mountain`,`earth`,`wildlife`,`landscape`,`environment`],Weather:[`weather`,`rain`,`rainy`,`storm`,`snow`,`snowy`,`wind`,`windy`,`temperature`,`climate`,`hurricane`,`tornado`,`flood`,`heat`,`cold`,`sunny`,`cloud`,`cloudy`],Animals:[`animal`,`animals`,`dog`,`dogs`,`cat`,`cats`,`bird`,`birds`,`lion`,`tiger`,`bear`,`elephant`,`fish`,`whale`,`dolphin`,`horse`,`pet`,`pets`,`wildlife`],Science:[`science`,`scientist`,`scientists`,`research`,`researchers`,`study`,`space`,`nasa`,`planet`,`planets`,`technology`,`experiment`,`discovery`,`discover`,`physics`,`biology`,`chemistry`,`medical`]}[t].some(e=>n.includes(e))};function wm({darkMode:e,accentColor:t}){let[n,r]=(0,B.useState)([]),[i,a]=(0,B.useState)(1),[o,s]=(0,B.useState)(!0),[c,l]=(0,B.useState)(!1),[u,d]=(0,B.useState)(!1),[f,p]=(0,B.useState)(`All`),m=(0,B.useRef)(null),[h,g]=(0,B.useState)(!1);(0,B.useEffect)(()=>{let e=new IntersectionObserver(([t])=>{t.isIntersecting&&(g(!0),e.disconnect())},{threshold:.25});return m.current&&e.observe(m.current),()=>e.disconnect()},[]);let _=async(e=1)=>{try{e===1?s(!0):l(!0),d(!1);let t=await fetch(`${bm}?page=${e}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json();if(n.status!==`ok`||!Array.isArray(n.articles)||n.articles.length===0)throw Error(`Новости не найдены`);r(e=>{let t=new Set(e.map(e=>e.url)),r=n.articles.filter(e=>e.url&&!t.has(e.url));return[...e,...r]}),a(e)}catch(t){console.error(`Ошибка загрузки новостей:`,t),e===1&&d(!0)}finally{s(!1),l(!1)}};(0,B.useEffect)(()=>{_(1)},[]);let v=n.filter(e=>Cm(e,f)),y=async()=>{if(c)return;let e=i+1;try{l(!0);let t=await fetch(`${bm}?page=${e}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json();if(n.status!==`ok`||!Array.isArray(n.articles)||n.articles.length===0){console.log(`Больше новостей нет`);return}r(e=>{let t=new Set(e.map(e=>e.url)),r=n.articles.filter(e=>e.url&&!t.has(e.url));return[...e,...r]}),a(e)}catch(e){console.error(`Ошибка загрузки новостей:`,e)}finally{l(!1)}},b=e=>{p(e)};return(0,J.jsx)(lm,{ref:m,$dark:e,children:(0,J.jsx)(um,{children:(0,J.jsxs)(dm,{className:h?`visible`:``,children:[(0,J.jsx)(fm,{$dark:e,children:`News`}),(0,J.jsx)(pm,{children:xm.map(n=>(0,J.jsx)(mm,{type:`button`,$active:f===n,$dark:e,$accent:t,onClick:()=>b(n),children:n},n))}),o?(0,J.jsx)(fm,{$dark:e,children:`Loading...`}):u?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(fm,{$dark:e,children:`Something went wrong`}),(0,J.jsxs)(ym,{type:`button`,$accent:t,onClick:()=>_(1),children:[`Try again`,(0,J.jsx)(br,{})]})]}):v.length===0?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(fm,{$dark:e,children:`No news in this category`}),(0,J.jsxs)(ym,{type:`button`,$accent:t,onClick:()=>p(`All`),children:[`Show all`,(0,J.jsx)(br,{})]})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(hm,{children:v.map(t=>(0,J.jsxs)(gm,{children:[(0,J.jsx)(_m,{src:t.urlToImage||`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDPpcnj2HXmyTmKhnzxWy1UrVb9ySnJmvSvWpw0_yRw&s=10`,alt:t.title||`News`,onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDPpcnj2HXmyTmKhnzxWy1UrVb9ySnJmvSvWpw0_yRw&s=10`}}),(0,J.jsx)(vm,{$dark:e,children:t.title})]},t.url))}),(0,J.jsxs)(ym,{type:`button`,$accent:t,onClick:y,disabled:c,children:[c?`Loading...`:`See more`,(0,J.jsx)(br,{})]})]})]})})})}var Tm=Ln`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Em=Ln`
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(150px, 60px) scale(1.2);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
`,Dm=Ln`
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-120px, -80px) scale(1.15);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
`,Om=q.section`
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 55px 0 65px;
  box-sizing: border-box;
  overflow: hidden;

  background: ${({$dark:e})=>e?`#111111`:`
        linear-gradient(
          120deg,
          #f2f5f4,
          #e4ece9,
          #f8f8f8,
          #e6efec,
          #f2f5f4
        )
      `};

  background-size: 300% 300%;

  border-top: 1px solid ${({$dark:e})=>e?`#222222`:`#ffffff`};

  border-bottom: 1px solid ${({$dark:e})=>e?`#222222`:`#e5e5e5`};

  box-shadow:
    0 -10px 35px rgba(0, 0, 0, 0.04),
    0 10px 35px rgba(0, 0, 0, 0.05);

  animation: ${Tm} 14s ease-in-out infinite;

  transition:
    background 0.5s ease,
    border-color 0.5s ease;

  &::before {
    content: "";
    position: absolute;
    width: 450px;
    height: 450px;
    top: -220px;
    left: -160px;
    border-radius: 50%;

    background: ${({$dark:e})=>e?`rgba(255, 255, 255, 0.02)`:`rgba(255, 255, 255, 0.65)`};

    filter: blur(35px);
    animation: ${Em} 12s ease-in-out infinite;
    pointer-events: none;
    transition: background 0.5s ease;
  }

  &::after {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    right: -220px;
    bottom: -280px;
    border-radius: 50%;

    background: ${({$dark:e})=>e?`rgba(255, 255, 255, 0.02)`:`rgba(210, 225, 220, 0.5)`};

    filter: blur(40px);
    animation: ${Dm} 15s ease-in-out infinite;
    pointer-events: none;
    transition: background 0.5s ease;
  }

  @media (max-width: 768px) {
    padding: 45px 0 50px;
  }

  @media (max-width: 550px) {
    padding: 35px 0 40px;
  }
`,km=q.div`
  position: relative;
  z-index: 10;
  width: calc(100% - 80px);
  margin: 0 auto 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    width: calc(100% - 50px);
    margin-bottom: 30px;
  }

  @media (max-width: 550px) {
    width: calc(100% - 30px);
    margin-bottom: 25px;
    gap: 10px;
  }
`,Am=q.h2`
  margin: 0;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 2px;

  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  transition:
    color 0.5s ease,
    letter-spacing 0.5s ease,
    transform 0.5s ease;

  @media (max-width: 768px) {
    font-size: 24px;
    letter-spacing: 1.5px;
  }

  @media (max-width: 550px) {
    font-size: 21px;
    letter-spacing: 1px;
  }

  @media (max-width: 380px) {
    font-size: 19px;
  }
`,jm=q.button`
  flex-shrink: 0;
  padding: 9px 16px;

  border: 1px solid ${({$dark:e})=>e?`rgba(255, 255, 255, 0.15)`:`rgba(17, 17, 17, 0.15)`};

  border-radius: 20px;

  background: ${({$dark:e})=>e?`rgba(255, 255, 255, 0.08)`:`rgba(255, 255, 255, 0.7)`};

  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  font-size: 13px;
  font-weight: 500;
  cursor: pointer;

  transition:
    background 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background: ${({$dark:e})=>e?`rgba(255, 255, 255, 0.14)`:`#ffffff`};

    transform: translateY(-2px);

    box-shadow:
      0 5px 15px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 550px) {
    padding: 7px 12px;
    font-size: 11px;
  }
`,Mm=q.div`
  position: relative;
  z-index: 5;
  width: 100%;
  height: 390px;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 550px) {
    height: 240px;
  }

  @media (max-width: 380px) {
    height: 215px;
  }
`,Nm=q.div`
  position: absolute;
  left: 50%;

  width: ${({$position:e})=>e===0?`590px`:`340px`};

  height: ${({$position:e})=>e===0?`350px`:`220px`};

  overflow: hidden;
  cursor: pointer;
  background: #dddddd;

  transform: translateX(
      ${({$position:e})=>e===0?`-50%`:e===-1?`calc(-50% - 390px)`:e===1?`calc(-50% + 390px)`:e===-2?`calc(-50% - 780px)`:`calc(-50% + 780px)`}
    )
    scale(
      ${({$position:e})=>e===0?`1`:`0.86`}
    );

  opacity: ${({$position:e})=>Math.abs(e)>2?`0`:e===0?`1`:`0.65`};

  z-index: ${({$position:e})=>20-Math.abs(e)};

  filter: ${({$position:e})=>e===0?`none`:`brightness(0.72)`};

  box-shadow: ${({$position:e})=>e===0?`0 30px 70px rgba(0, 0, 0, 0.25)`:`0 12px 30px rgba(0, 0, 0, 0.12)`};

  transition:
    transform 0.7s ease,
    width 0.7s ease,
    height 0.7s ease,
    opacity 0.6s ease,
    filter 0.6s ease,
    box-shadow 0.7s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;

    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.18),
      transparent 35%,
      transparent 65%,
      rgba(255, 255, 255, 0.08)
    );
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 3;
    pointer-events: none;

    background: ${({$position:e})=>e===0?`linear-gradient(to bottom, transparent 55%, rgba(0, 0, 0, 0.2))`:`rgba(0, 0, 0, 0.08)`};

    transition: background 0.6s ease;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;

    transition: transform 0.8s ease;
  }

  &:hover img {
    transform: scale(1.06);
  }

  &:hover {
    box-shadow:
      0 35px 80px rgba(0, 0, 0, 0.28);
  }

  @media (max-width: 768px) {
    width: ${({$position:e})=>e===0?`420px`:`240px`};

    height: ${({$position:e})=>e===0?`260px`:`160px`};

    transform: translateX(
        ${({$position:e})=>e===0?`-50%`:e===-1?`calc(-50% - 260px)`:e===1?`calc(-50% + 260px)`:e===-2?`calc(-50% - 520px)`:`calc(-50% + 520px)`}
      )
      scale(
        ${({$position:e})=>e===0?`1`:`0.8`}
      );
  }

  @media (max-width: 550px) {
    width: ${({$position:e})=>e===0?`300px`:`190px`};

    height: ${({$position:e})=>e===0?`200px`:`130px`};

    transform: translateX(
        ${({$position:e})=>e===0?`-50%`:e===-1?`calc(-50% - 190px)`:e===1?`calc(-50% + 190px)`:e===-2?`calc(-50% - 380px)`:`calc(-50% + 380px)`}
      )
      scale(
        ${({$position:e})=>e===0?`1`:`0.75`}
      );
  }

  @media (max-width: 380px) {
    width: ${({$position:e})=>e===0?`270px`:`170px`};

    height: ${({$position:e})=>e===0?`180px`:`115px`};

    transform: translateX(
        ${({$position:e})=>e===0?`-50%`:e===-1?`calc(-50% - 170px)`:e===1?`calc(-50% + 170px)`:e===-2?`calc(-50% - 340px)`:`calc(-50% + 340px)`}
      )
      scale(
        ${({$position:e})=>e===0?`1`:`0.75`}
      );
  }
`,Pm=q.div`
  position: relative;
  z-index: 5;
  width: 100%;
  height: 390px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;

  color: ${({$dark:e})=>e?`#ffffff`:`#555555`};

  transition: color 0.4s ease;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 550px) {
    height: 240px;
    font-size: 14px;
  }

  @media (max-width: 380px) {
    height: 215px;
    font-size: 13px;
  }
`,Fm=q.div`
  position: relative;
  z-index: 5;
  width: 100%;
  height: 390px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;

  color: ${({$dark:e})=>e?`#ffffff`:`#555555`};

  transition: color 0.4s ease;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 550px) {
    height: 240px;
    padding: 0 20px;
    box-sizing: border-box;
    font-size: 14px;
    text-align: center;
  }

  @media (max-width: 380px) {
    height: 215px;
    font-size: 13px;
  }
`,Im=q.div`
  position: relative;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  margin-top: 18px;

  @media (max-width: 550px) {
    gap: 7px;
    margin-top: 14px;
  }
`,Lm=q.button`
  width: ${({$active:e})=>e?`26px`:`7px`};

  height: 7px;

  padding: 0;
  border: none;
  border-radius: 10px;

  background: ${({$active:e,$accentColor:t,$dark:n})=>e?t:n?`rgba(255, 255, 255, 0.25)`:`rgba(17, 17, 17, 0.2)`};

  cursor: pointer;

  opacity: ${({$active:e})=>e?`1`:`0.7`};

  transform: ${({$active:e})=>e?`scale(1)`:`scale(0.9)`};

  transition:
    width 0.35s ease,
    background 0.3s ease,
    opacity 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    opacity: 1;

    transform: scale(1.15);
  }

  &:focus-visible {
    outline: 2px solid
      ${({$accentColor:e})=>e};

    outline-offset: 4px;
  }

  @media (max-width: 550px) {
    width: ${({$active:e})=>e?`21px`:`6px`};

    height: 6px;
  }
`,Rm=`54040917-f9e6420d7887ca7f24aa85fec`;function zm({darkMode:e,accentColor:t=`#ffb56c`}){let[n,r]=(0,B.useState)([]),[i,a]=(0,B.useState)(0),[o,s]=(0,B.useState)(!0),[c,l]=(0,B.useState)(!1),[u,d]=(0,B.useState)(!1);(0,B.useEffect)(()=>{(async()=>{try{s(!0),l(!1);let e=await fetch(`https://pixabay.com/api/?key=${Rm}&q=beautiful+nature&image_type=photo&orientation=horizontal&per_page=7&safesearch=true`),t=await e.json();if(!e.ok)throw Error(t.error||`HTTP error: ${e.status}`);if(!Array.isArray(t.hits)||t.hits.length===0)throw Error(`Nature images not found`);let n=t.hits.map(e=>({id:e.id,url:e.webformatURL,largeUrl:e.largeImageURL,alt:e.tags||`Beautiful nature`}));r(n),a(0)}catch(e){console.error(`Ошибка загрузки изображений:`,e),l(!0)}finally{s(!1)}})()},[]),(0,B.useEffect)(()=>{if(n.length===0||u)return;let e=setInterval(()=>{a(e=>e===n.length-1?0:e+1)},2e3);return()=>{clearInterval(e)}},[n,u]);let f=e=>{let t=e-i;return t>n.length/2&&(t-=n.length),t<-n.length/2&&(t+=n.length),t};return o?(0,J.jsxs)(Om,{$dark:e,children:[(0,J.jsx)(km,{children:(0,J.jsx)(Am,{$dark:e,children:`Beautiful nature`})}),(0,J.jsx)(Pm,{$dark:e,children:`Loading...`})]}):c?(0,J.jsxs)(Om,{$dark:e,children:[(0,J.jsx)(km,{children:(0,J.jsx)(Am,{$dark:e,children:`Beautiful nature`})}),(0,J.jsx)(Fm,{$dark:e,children:`Failed to load images.`})]}):(0,J.jsxs)(Om,{$dark:e,children:[(0,J.jsxs)(km,{children:[(0,J.jsx)(Am,{$dark:e,children:`Beautiful nature`}),(0,J.jsx)(jm,{$dark:e,type:`button`,onClick:()=>d(e=>!e),children:u?`▶ Continue`:`Ⅱ Pause`})]}),(0,J.jsx)(Mm,{children:n.map((e,t)=>{let n=f(t);return(0,J.jsx)(Nm,{$position:n,onClick:()=>a(t),children:(0,J.jsx)(`img`,{src:e.url,alt:e.alt})},e.id)})}),(0,J.jsx)(Im,{children:n.map((n,r)=>(0,J.jsx)(Lm,{type:`button`,$active:r===i,$dark:e,$accentColor:t,"aria-label":`Go to slide ${r+1}`,"aria-current":r===i?`true`:void 0,onClick:()=>a(r)},n.id))})]})}var Bm=q.footer`
  width: 100%;

  background: ${({$dark:e,$accentColor:t})=>e?`#111111`:t||`#ffb56b`};

  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  border-top: 1px solid
    ${({$dark:e})=>e?`rgba(255, 255, 255, 0.08)`:`rgba(0, 0, 0, 0.08)`};

  transition:
    background 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
`,Vm=q.div`
  width: 100%;
  max-width: 1440px;
  min-height: 190px;
  margin: 0 auto;
  padding: 10px 70px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: 564px) {
    padding: 40px 50px;
    gap: 50px;
  }

  @media screen and (min-width: 1160px) {
    padding: 10px 70px;
    gap: 30px;
  }

  @media screen and (max-width: 563px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    align-items: center;
    column-gap: 35px;
    row-gap: 30px;
    padding: 35px 30px;
  }
`,Hm=q.div`
  display: flex;
  align-items: center;
  min-width: 180px;

  @media screen and (max-width: 563px) {
    min-width: 0;
    grid-column: 1;
    grid-row: 1;
  }
`,Um=q.img`
  width: 82px;
  height: 56px;
  object-fit: contain;
  display: block;

  filter: ${({$dark:e})=>e?`brightness(0) invert(1)`:`none`};

  cursor: pointer;

  transition:
    transform 0.3s ease,
    filter 0.3s ease;

  &:hover {
    transform: translateY(-2px) scale(1.06);
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }

  @media screen and (max-width: 563px) {
    width: 75px;
    height: 52px;
  }
`,Wm=q.div`
  display: flex;
  flex-direction: column;
  min-width: 170px;

  @media screen and (max-width: 563px) {
    min-width: 0;
  }

  &.contacts {
    @media screen and (max-width: 563px) {
      grid-column: 1 / -1;
      grid-row: 2;
      align-items: center;
      justify-self: center;
      text-align: center;
    }
  }
`,Gm=q.h3`
  margin: 0 0 12px;

  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;

  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  transition: color 0.3s ease;

  @media screen and (max-width: 563px) {
    font-size: 15px;
  }
`,Km=q.p`
  margin: 0;

  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.6;

  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  transition: color 0.3s ease;
`,qm=q.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,Jm=q.a`
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  text-decoration: none;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px) scale(1.05);

    background: ${({$dark:e})=>e?`rgba(255, 255, 255, 0.08)`:`rgba(255, 255, 255, 0.35)`};

    box-shadow:
      0 8px 20px rgba(0, 0, 0, 0.12);
  }

  &:active {
    transform: translateY(-1px) scale(0.96);
  }
`,Ym=q.img`
  width: 35px;
  height: 35px;
  object-fit: contain;
  display: block;
  filter: none;
  transition:
    transform 0.25s ease;
  ${Jm}:hover & {
    transform: rotate(-3deg) scale(1.08);
  }
`,Xm=`/project-forecast/assets/logo--nZl-i6T.png`,Zm=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAACU1JREFUeAHtmHtwVNUdx7/nPvaZTTYhISY8wiNQQYeKFQuFQQQqDuKDIlBsmTIFOuLgFDutjg/qlLbI1LaICH9UGcvYjm3DQB2RKpRCmLEyVq0gYIEwJCaEvJMl2ezufZzT331sstndNBvKn56ZM/eec8+553O+5/f7nXMv8GWyE8P/ma73BRJlviq0pHiaNvPbk5VpD4cxaookAnkal2VTeIwuHm1u5FdOf45Tr10y33nvOI6bbl+BYabhQsoW3IGCHdtmKrM2tfAetcPsZYZQoFM2hAyDu/ec7u06FSFRigQ3r1aLg+tew/pD7nvMXAfNFdJ+6cnil7ffrEzZVKu3cBpcMlwwnbvXQUGdZyZXRaGYyI7i1YV78Ogxa8K5DJ4LpPJ83tKizYXrmy5rDZwLVTZcAAdqeKBWGSLP8EH7dB0mzEAOqipDAMpnyn724AR1fFWLcRleSSZA05m/bZUpLQcrZ6k3eFSJCNy2D1y8gvkq2avFYeA6IOXWsS+uCzJ1V4K3MoVZTcWQALmCgitKvbjEN+JdvQZ3BxrwAQYDHQxSPl6+Zn6Bgt2m2SvZgMMCyBlUqhf1fAdO9C6DapkeQxbvz2aTbN68efKx2GJddEbBNcu25AzbM3QZ8UgCminZz3SolB071MnM7Hu3TsheSB6/0zfDRq0+zCzFTZ2PIH9krpAwHniuFa29RVLMK6HXMxCUABKdvcjfuxK+RePB/AqGCn2JFg0XttXh05dq4Q8WQNOlDFC6NzvQuHkL5v4KaY6UDikfnnvvfQsKx+9nUVVGrwoLsg9Up+bfnAzf68tpqQhMyjGCCWcajJq/6f87VDmUFXSEGI1VCEpIm3XGKOKJjUJcjaEf0L3GvRDjRkJ651FqJCA0ju4fHUH8oyZSV+lTOTlwMpuKirK1lRi9YRyEIUAeiDfYYXh9+RlLr3OJd4vI3mcwc20qaCok2zpn2p1PTb/1n6xHlhDzDAQ9FwHrfJUWgkOcb0X37b8BLy2DbiaBHFA9OXBKHNUDDO1tUTwY/w6sCNb+fheqF52mNfVkgI7gE7Bc+AeIJ6UWHpk7bgdT4gx+HfBrQICuAfe69BZbQRC/ecsv4Lmp0NIPtO9AkUzI8V6grR3sWgSivRMy1+1nzBPHnIaHMGP7LHw4/wQYjVg8NwwjESV/dvoq1pWZdrlLqhPLsfmuVAFTQ5CoGKt+XdTrmbbGOdjDdzpGdaYB8pgQ3Zp9ayEIqOjMY5DLQ31deg7Woeb+t+HJD6Nx6xlc3nIWvQmzb+jCsT4k2oyM8GRAw2x2/0+rxM8XZii55GtlxZxHYavo051rUlEr53udhpFrQIFJIYVUVAQ8kwtQWPck5NI8Z6amY0rBe0bjNrER6O5C2/bP4CN/8LD+QOkNwFZPIbUHKmqw8XLlrFSb7FPyvqmBaUwih/GryEicFJBd5ayd1jIBRYZ0vgNyzTO2nWpv/Bvd6w9Al30wAirKazYBxH1rw/dxbtKbUP0Bipr9G4oFpCah0wK+ykx/6vB9Sk4co06HmqpgmqKyOzHFdG01AbZ7mR2KxMk68B+/BW95AXwjA6RaAA3FL5A9ylDKAvDmCVcpPQXS7LPDdEU5u4apmJeXAalLxij4aKbeLKBWlt1ZW7CWkrwbuHuKY79P7YMa8vQ5gAXjLw0j8d5l2wbD91Y4yqXEaOvedrqsoNQf3b6M5ZZUFzDb5sGlFEjuQCZsOZw6moxto1p/F0HrxuSkEhaQA5NMsqtktj1dEQZVcZZS5STmEVdsJS3VvFkUTUJKrpLF1PXkJ3ZYYr9dRUvR6YDaipBjNTXCs3C8PWm9+ryrpJG23K6SaYp6KTdBimZAnmuMnULAcACzgSZt0oK0ytRWvPyKE5amVoD9egXQ2gCpuRlKpB35nVtJbQNmXReV466jpDuOkRU0T1JxFR/3Ziz32ab4JwiTWmaWI52lvJJcbtOFpq6TRkBsehbspV9SsP8G2Ldm256uUMCnrYcMT0J0wjZ4RpdS0bTPRKlKmpKZ9VgnC01DWrWd9lRd62Bl3FHPl6aoVTa6nYahAqqLO6BeMszueoiHVgNXmt1JOK8UR87CUH8Iz7hCRzXLKXg/pByLOSpKZpqipmjAJesEnHXHQevV+L+KPcodyDh4qBAX94NNWQKUTwZilwh2av/jInq+4QmgmSDiFKW7yGPCpZAnFIJpVGd5EMEHF4x1tlbLRC62QS0tythxJArEx/TjzyPFhVP3bvbHfd0/EEFaAtXMVLTxkPNyQV773N9o3ztPahr9NltCm8DEMDA+CHwlnyZh2A6WdCa5pRGhw2vIHAS0E1/AW+RzFTYHKDpRKWEvxndWp0qUeVTrqYiL88ILjWZPp28kaPA4Ca7RaUgmB3mgCu6GDRx4gRS+4LZxc8xtnzxFaV6wFXReWDvLtldL0Q72LMxRpRmnpwSXzKgp/jSrc81qDHJUs5X9y87wkqULAgfkmCJlgNIBCYVzwBbsciCZhJwT5/ZwsfDTMItLYBis/1PEBR0hjUFB46IM4dJH4Sse73pbH4VO7jE4PGlL76PJRU5C/G4sxOWjNIG4Y2MWsJ2Fk3lqpvquHoitb0EEH4enJESBQhsQdqzllpguao0LP0GW1R3kQwzef/y1PIZ6KmnWUqcpmrBUpXJHBLBCrvuJ0X9I9jr3UfcqyEbVor7n6R93mikbfrmsK79+ZUkWHsjZKmtrIe65Xaouv1lZLWmC9c2FuZ5p39NVJSfx0RnSb+U8JwcoB4NOziNPD1ltPANVoLgrubseCc+LfBWyr3ZFcBDRBv3uNmeviFQ3fi49VlLk3SV3GDJucLLsTEkI7vOVS4svPu1zWYb1c8AGLZ/Suafu/aL20ZO8VazZsD/4cIMSHcgMxTdOueP0Ts/HqOH4H/+DhvoXZFTM7ti/Znmw7PU/F1w1PrN/Nw3DpbMmwSVJRNXguXD1hq8ihx9WuQzIf18VbWVSI2sS+m5WQW9UKSJnC/jeQc6jzr3gAY2zsqB5KPKfu8LVW6bDWZkh/1MOd/nsfzUX3x25rXJG3pNoYRAt5EFaqterzjVhB3Zhl9UQi8W8LQdO1Kz97tEPDiLzFDnkoNedFs8I3rTpe6FllZWBlSX5/koPvAWgTUDSFL2njXVc+cL46OSpyN4/fBg/cry2NuF2G/bv6C/TjUr/BYAx1ubkm1GFAAAAAElFTkSuQmCC`,Qm=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABedJREFUeAHNWG1sU1UYfu9nP7d2H90GbAuwyfhYZgxoQEUd6hJFwhhbmAthGhLB6B8gxl/60wQT4Z8ZRNEZcRPoBhr5QTAbgmIUooh0MAZCKG7r19p17drbe+/xnK6b7bZ2PW1NfJLb3px733Oe+57347wvA/Rg8IVK6xpKzMZVrcbCiq2ixlTLsrwJASPiRwxCICGkeBTJPzg+dtfquveD1W2/9hAyAEPxLltdXS3kr9j7UcGi2jfDwTFGlUPpyCOe14GgMzHjzptHf/123x4yF77UNGTTIsjhS1nf/IlVZyjZFg64sBRD82H/MgWkavUWNhL09Fw62b4dD/H4kiELglxd/fvPlVRtPB/02ZUY2eyBVEVvruBGb3//8vULB8/hEQUoCUbHn2nrOqkqcqOqyrkhNnsRTpCx7Z66+FVrGxAFJyMyzxjatOvMzVDQVQUMy8N/CIRUVWMoutXf2bgakpCZM1bffsYWnnA9AiybseYQSlRISrNVVUU0Ft/u79xKSKJUBLln27q/jEjBFjwjNTlJUsA3EYbGF1dAzfLimck1IgcfHr0MRoOYXBjbpSAYei90tbZCnE3GE+RWb3q3odBS942qSlTbSpRz/+9x6P24BdbWls2rrQ3Nn+ENSe2T2JpUv2Og4Y++D/qnSbJxz5VFy58/S0uOwOWZhEtft8Nja8qSbqWK0ILzIFVmS6rqz0OcBqcJMk+3fN4z6X2gACUIn6fWlUNFWT5wKTTEpJkTgl678mTzp6cgFtKmCSJBX7gN65ja7gIBCd57a2PC9inqlLZcY0FwuIPg84exbYbSm5ABTmOw4CC+Osolup2Pbzl0BIcUFX8lC5TwYYKVi00JY0STprqDUFFuntFAkVk/x7OTAWcrtHbz64evfvfO21H5vOJVb2RCjkDF2ppt/L/bRqGm2gImowbyYle65KLAhmwurSM5G7FF5RuWREI+CumFEVEUqlPIfJBCY2xpVUMJW7r0ie2KPAm5BJM1PWzHkUnIX7xyB28oWNoEdMcu7AQqeLyhqAd7sRPMhhRRwOkJgCDEfA7vj9mkA56jWobJNy1rZNY3HxtmGaaMRnIpNv7jhxrjCKOEEEPMbXY43Ln/NPxl9wINkKKMYvtmCoESAp/oT7Pj33yx2j4yDrRgOc5MVhJpBVEGLjXiCgAtSAmBCTIZeTAtyVCYOklFF8GBGkn4VkMjNzDkhGGnH0IhBSRZgZplhQk5OCzJYB/2z4yNuicg30i9UQT4YKDKPmD5EhopUeRh8+7uKAFiW45f9ic8H7jjhp0HToPIT3kxx7GQZ6AnqCJ5jJfCfpuoK6AiSLKCXidE76f/40EUp9PwIArZVQoRKXCT9Xvv98L/EbgEDLjv9rDe4YFujtflNNVBDmbjRT04b13oYUfvnHOIenNOCSISILLMdoI2n3G7rz0kcZDxDv/ZQXfcSI1sZ8JUVN+I7Qi5JwTR1XvH9uHSL/sMP7MAZAWd0cJeOXtgL7mfylk2m4wPiVaET3eQI2T8tbi6CwfdVohxm06q6k+ndjcbTJUZHVrnLkJ+MqOoN1dyP554rRlizaV4QpzjTt8LpPQDGsyznSw+VqEMXJllBeXB0LmXIK4HNKdw39jW3aVIgaZ0C6gQTmt729YCG3Nb8n/5NzvcuO0EGmC/UHjBeOJi145dENfxStH6cFZjVaRVI6OZn9gElLuLuclao2Wwr3NrLSzQ+phBffvpG+GApyaTFgglOUVjKB7s/2L+5lFSp+jrbKzlBMMJrMQMzknpAbfeVF5r7MHk1iR9J4U8Ivbgsd94RW8qj34q5Aq4gW3Ac3oc1xsuHm99FVIkx3SsJdqm3dDSadXqC5tCQQcu8NmMwhHOEEhrLGImJ1zWn3FYg1h7OZUMjTlHG5vrthzuMFlW7iG1tCxNplVjcoIOidoCnL6ud1wZ7DgAQ0PyQsTiF80IReWPLrEsq28y5Fc2Cdq8lRzLFyBS30xVdBJuG/uksM824XrQ63UOdJNDyfRH0qzzD+bDR7GNxUL7AAAAAElFTkSuQmCC`,$m=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAACGJJREFUeAG9WAtwVNUZ/u+9+7rZbJLdzYYk7K5BNjZugq2gph1Li05LeQQkQRK10HYGR0Cp7ciMrdM6004f1qlUCx2IWGitWG1CHgOWjq1FrFXRDIg8Fggx5LUh2SS7SXazj7t77/U/JyEkZLP3Bg3/zZ3s3j33nO/8j+///8PAzIXBW75tw/yc/FLLA5aitPuMVkMJp2MzZRl05Hf8L0BC8ocD8eb+C8G61trWuuYjA164DmFmMJZ1uVza0l327fZS25YRf4SJj4iK78v4p0/ngLcamO6mgT377317E5kLbwlUiBqAHN7iIyeW1ZkcfHmwJwIMClyHoGaljByeDQ5E6190H16LjzR4J+BzAOTW7L9zSdGaeW/5W4Miw1Kwn1tkURat80zcmdrOFYc2Hvs3PhJhhgDp863nV9VKrLRGFKQvBNi1gn6b0LDcgR2ugw8B9YZpgCR5Jj/RWX4+5I/MZzhGA7MoqE3JaOYvPO9scCf7nU32cFtHxbngQMQ12+CI4BosKuKWJ3BNSKKwawFyj7eU/T0YCBeyGmZWzJpMyFohf7jwh82rawAm+/lEgNyql7+6NCHJ9+Oubhi4K8IgSBHEijIMSpgAcpJKfzq0Tg50hmAmwuAlyDEIJgYBg5M+YzHcTVwm6FkePV+e0XyWAhM8k17DXJ1/7P9mz8o6KSGtVkslhAp7Y15YmPF1WJ//ONgN80DDaOlvsiyBN9YGB3pegnf8/4Rcg5M+UyOyhLtMyI17Fr5ZhV+vZoJtvRVyqC+iahJRTkCWNht+d8vfECgL5AqLIfDHfZgeJDBrbGDSZI6Pf6b1R3AhdAoMHK9q/vQcHv61pF7v8YBAAW44cs+LaTbDw6hPVunlCAKpytsCy7Ir0ZQcaunP8Gr3TuC5NASQRsdExTBEpTCszH4INjp+ggqJw/Gh/8ML7U9BpsaitARIsiyHeiK7X/v2O1spwCeDa+Wh9rDii6h7WG37PgUXlwVYd3IROA3zp/Uzotn2yEXYt+C/kK3LhePD70J1x69AxxoU18pypIvPZtZqWHuZfW54QFD0ZGJKHcPDClsVGlGEyjFwJECmA0jM7eDnw+azK9H8feivi6GA/5IaQ0E4EGFJxcSWLM1bK4QSii8MCD3wfFENEO6uPHkHOBCcT7gMvy7cC7cav0KjeTqZo58LPzi9BINIA0+7dkGP0Km4nhASIf9rWVWs7baMckZFVZOvv4ku8L/AYcjTO2FEDMLuYoxQ/Pyo8xfQhxtIJU6DC331T7SkuStzCagQJtuduYbVm7VFSiOJqQiVkKDY0/Eb+owAzNHlUc1pGR24029POQdxg7revdRVqnI308BREj5LW8yyHKMYVuFECAqNC+gyUWmUigjYhDzqGoQTm0dOK02DPqyj0W033AwhcUhxPKdls1i0rU5pIAkEI2eiQPVjEWjV5kBD7z6kBAlawmfHn6cSA2aWYcw4OlaPHYGy35MWgoSTcgTjRcxMzDMxYv9xuZpqhETm3ebvUBqi41GjQwn/lHkkfPdKMDEqinmyFotzCUoDyc7D6HM8Zxw3MREb+uADn5TS4NlofxI5cgP0xLrgcqQD/rLgCBL6ZvzeCVdqj4g4AmatDYk8AhpWq7Qs2YLAYrWs6AwGBHYCMwERYtqJO7Tr50H5iS9T+llhexAaFn4Cu0reoGT8TUsZNC48TXM2Eaye6WZawmdoMaEkoiAHWCRpj9JAYoz93TsQjgQ/LvjtpAgkps/TO2D1cTd4Qieo6fKRetgxMia5n2gQsxelIzJ+n/f3NMiUJDqcOM8GLoYaQIUk8CLmc6cvor40Ucii+YYC+GP7z6Dy4zsxeP4KXdFW+CDwH1j78e1gxTTXH++BxeblEBej4I1eUlwPrSP7PIP1mq73/a/fvGzOC0o9LtEIFpRUQ0OJAbBp86aMIeWWRWeDN/tr4VDfftAiQeQaHHApfB4O39FMXeKxc/eBBd1EqU7Um7TQdqCtnj31yqe+dDOvGMnD8UHqbz7BCwbMyf2YOUiRKkixpON1jJ66hF/oo+BIMfuydzvdhJoilrfqGXIaQZoipvNDX7Uxn9+SqiEvSCukExM/e9q1GwrTiqkfEYLe0f5zGq0kAJBj0IwxrF7yYOtNv4QF6aX0/b1dz0LT0NHxojaVkAbfe2zgJfKZAnK73brlbxfFpitYCbDvYqpbbF42zl+E/0h0OnkXjE7E0BKMjB3V3qiWCDE/5lmFUZuhuvg32Xh4bk49XYi2lR6PJ3G311HHaNhyhp1aCwXQTN9ABz8TbII3+l7F4vNdymMkI5DoXJf7CCzKXIyVdDbVYF/8MpwMvg+vde9C0DFKKWp7E3LqEOqPNsLY+c0kkz4VWif726Y2TcSUPqGbApiu4SMELkhRsgQC52nqU5MtrhWLE5umjKtN06S281xj17fwOGJKd0O4LFs7B1J1oyTbZGjMeFvo5+sBx+lZ8WzNpeUwoe2cCFBsXP/BUS3DYXcni3CDRULTogJqDj7c9BZMOExKejazraPcEwzcmKMPIrIoJUyWtObtjoYSuKZ4SdYcyNudDbciNzbL4uxrklgrw2y8iOCKIUllNW338gdnQ4neqK3hdNysgcSCVDIYdfXPOeuLpxuTqr2Sd7oOfa/tvd4yi8MEX6Q2yekBOeLoaPIt3Vl48EFIUZOqCTV6TLvJs6LOZOUrhnvDUjKuVAlMzshNY4a7RurwaON+GDteTvXOTLiAHmyuP3JPdf5d1k2R/pgcw3ZVTUeoNXJyupWXOo71VX/06NFtLS209FZlkes6DCdiv9c6t6SyoMLqMlVgYi9C/jQTjiYZA1sDQRLEocig4PGdHWzo+bD79VOv9PqubHIm63wGiDNt8r1lE8wAAAAASUVORK5CYII=`;function eh({darkMode:e,accentColor:t=`#ffb56b`}){return(0,J.jsx)(Bm,{id:`contacts`,$dark:e,$accentColor:t,children:(0,J.jsxs)(Vm,{children:[(0,J.jsx)(Hm,{children:(0,J.jsx)(Um,{src:Xm,alt:`247 forecast`,$dark:e})}),(0,J.jsxs)(Wm,{children:[(0,J.jsx)(Gm,{$dark:e,children:`Address`}),(0,J.jsxs)(Km,{$dark:e,children:[`Svobody str. 35`,(0,J.jsx)(`br`,{}),`Kyiv`,(0,J.jsx)(`br`,{}),`Ukraine`]})]}),(0,J.jsxs)(Wm,{className:`contacts`,children:[(0,J.jsx)(Gm,{$dark:e,children:`Contact us`}),(0,J.jsxs)(qm,{children:[(0,J.jsx)(Jm,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,children:(0,J.jsx)(Ym,{src:Zm,alt:`Instagram`,$dark:e})}),(0,J.jsx)(Jm,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,children:(0,J.jsx)(Ym,{src:Qm,alt:`Facebook`,$dark:e})}),(0,J.jsx)(Jm,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,children:(0,J.jsx)(Ym,{src:$m,alt:`WhatsApp`,$dark:e})})]})]})]})})}var th=function(e){return nh(e)&&!rh(e)};function nh(e){return!!e&&typeof e==`object`}function rh(e){var t=Object.prototype.toString.call(e);return t===`[object RegExp]`||t===`[object Date]`||ah(e)}var ih=typeof Symbol==`function`&&Symbol.for?Symbol.for(`react.element`):60103;function ah(e){return e.$$typeof===ih}function oh(e){return Array.isArray(e)?[]:{}}function sh(e,t){return t.clone!==!1&&t.isMergeableObject(e)?uh(oh(e),e,t):e}function ch(e,t,n){return e.concat(t).map(function(e){return sh(e,n)})}function lh(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(t){r[t]=sh(e[t],n)}),Object.keys(t).forEach(function(i){r[i]=!n.isMergeableObject(t[i])||!e[i]?sh(t[i],n):uh(e[i],t[i],n)}),r}function uh(e,t,n){n||={},n.arrayMerge=n.arrayMerge||ch,n.isMergeableObject=n.isMergeableObject||th;var r=Array.isArray(t);return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):lh(e,t,n):sh(t,n)}uh.all=function(e,t){if(!Array.isArray(e))throw Error(`first argument should be an array`);return e.reduce(function(e,n){return uh(e,n,t)},{})};var dh=uh,fh=typeof global==`object`&&global&&global.Object===Object&&global,ph=typeof self==`object`&&self&&self.Object===Object&&self,mh=fh||ph||Function(`return this`)(),hh=mh.Symbol,gh=Object.prototype,_h=gh.hasOwnProperty,vh=gh.toString,yh=hh?hh.toStringTag:void 0;function bh(e){var t=_h.call(e,yh),n=e[yh];try{e[yh]=void 0;var r=!0}catch{}var i=vh.call(e);return r&&(t?e[yh]=n:delete e[yh]),i}var xh=Object.prototype.toString;function Sh(e){return xh.call(e)}var Ch=`[object Null]`,wh=`[object Undefined]`,Th=hh?hh.toStringTag:void 0;function Eh(e){return e==null?e===void 0?wh:Ch:Th&&Th in Object(e)?bh(e):Sh(e)}function Dh(e,t){return function(n){return e(t(n))}}var Oh=Dh(Object.getPrototypeOf,Object);function kh(e){return typeof e==`object`&&!!e}var Ah=`[object Object]`,jh=Function.prototype,Mh=Object.prototype,Nh=jh.toString,Ph=Mh.hasOwnProperty,Fh=Nh.call(Object);function Ih(e){if(!kh(e)||Eh(e)!=Ah)return!1;var t=Oh(e);if(t===null)return!0;var n=Ph.call(t,`constructor`)&&t.constructor;return typeof n==`function`&&n instanceof n&&Nh.call(n)==Fh}function Lh(){this.__data__=[],this.size=0}function Rh(e,t){return e===t||e!==e&&t!==t}function zh(e,t){for(var n=e.length;n--;)if(Rh(e[n][0],t))return n;return-1}var Bh=Array.prototype.splice;function Vh(e){var t=this.__data__,n=zh(t,e);return n<0?!1:(n==t.length-1?t.pop():Bh.call(t,n,1),--this.size,!0)}function Hh(e){var t=this.__data__,n=zh(t,e);return n<0?void 0:t[n][1]}function Uh(e){return zh(this.__data__,e)>-1}function Wh(e,t){var n=this.__data__,r=zh(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Gh(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Gh.prototype.clear=Lh,Gh.prototype.delete=Vh,Gh.prototype.get=Hh,Gh.prototype.has=Uh,Gh.prototype.set=Wh;function Kh(){this.__data__=new Gh,this.size=0}function qh(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Jh(e){return this.__data__.get(e)}function Yh(e){return this.__data__.has(e)}function Xh(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}var Zh=`[object AsyncFunction]`,Qh=`[object Function]`,$h=`[object GeneratorFunction]`,eg=`[object Proxy]`;function tg(e){if(!Xh(e))return!1;var t=Eh(e);return t==Qh||t==$h||t==Zh||t==eg}var ng=mh[`__core-js_shared__`],rg=function(){var e=/[^.]+$/.exec(ng&&ng.keys&&ng.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}();function ig(e){return!!rg&&rg in e}var ag=Function.prototype.toString;function og(e){if(e!=null){try{return ag.call(e)}catch{}try{return e+``}catch{}}return``}var sg=/[\\^$.*+?()[\]{}|]/g,cg=/^\[object .+?Constructor\]$/,lg=Function.prototype,ug=Object.prototype,dg=lg.toString,fg=ug.hasOwnProperty,pg=RegExp(`^`+dg.call(fg).replace(sg,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`);function mg(e){return!Xh(e)||ig(e)?!1:(tg(e)?pg:cg).test(og(e))}function hg(e,t){return e?.[t]}function gg(e,t){var n=hg(e,t);return mg(n)?n:void 0}var _g=gg(mh,`Map`),vg=gg(Object,`create`);function yg(){this.__data__=vg?vg(null):{},this.size=0}function bg(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}var xg=`__lodash_hash_undefined__`,Sg=Object.prototype.hasOwnProperty;function Cg(e){var t=this.__data__;if(vg){var n=t[e];return n===xg?void 0:n}return Sg.call(t,e)?t[e]:void 0}var wg=Object.prototype.hasOwnProperty;function Tg(e){var t=this.__data__;return vg?t[e]!==void 0:wg.call(t,e)}var Eg=`__lodash_hash_undefined__`;function Dg(e,t){var n=this.__data__;return this.size+=+!this.has(e),n[e]=vg&&t===void 0?Eg:t,this}function Og(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Og.prototype.clear=yg,Og.prototype.delete=bg,Og.prototype.get=Cg,Og.prototype.has=Tg,Og.prototype.set=Dg;function kg(){this.size=0,this.__data__={hash:new Og,map:new(_g||Gh),string:new Og}}function Ag(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function jg(e,t){var n=e.__data__;return Ag(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function Mg(e){var t=jg(this,e).delete(e);return this.size-=+!!t,t}function Ng(e){return jg(this,e).get(e)}function Pg(e){return jg(this,e).has(e)}function Fg(e,t){var n=jg(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Ig(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ig.prototype.clear=kg,Ig.prototype.delete=Mg,Ig.prototype.get=Ng,Ig.prototype.has=Pg,Ig.prototype.set=Fg;var Lg=200;function Rg(e,t){var n=this.__data__;if(n instanceof Gh){var r=n.__data__;if(!_g||r.length<Lg-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Ig(r)}return n.set(e,t),this.size=n.size,this}function zg(e){var t=this.__data__=new Gh(e);this.size=t.size}zg.prototype.clear=Kh,zg.prototype.delete=qh,zg.prototype.get=Jh,zg.prototype.has=Yh,zg.prototype.set=Rg;function Bg(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var Vg=function(){try{var e=gg(Object,`defineProperty`);return e({},``,{}),e}catch{}}();function Hg(e,t,n){t==`__proto__`&&Vg?Vg(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Ug=Object.prototype.hasOwnProperty;function Wg(e,t,n){var r=e[t];(!(Ug.call(e,t)&&Rh(r,n))||n===void 0&&!(t in e))&&Hg(e,t,n)}function Gg(e,t,n,r){var i=!n;n||={};for(var a=-1,o=t.length;++a<o;){var s=t[a],c=r?r(n[s],e[s],s,n,e):void 0;c===void 0&&(c=e[s]),i?Hg(n,s,c):Wg(n,s,c)}return n}function Kg(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var qg=`[object Arguments]`;function Jg(e){return kh(e)&&Eh(e)==qg}var Yg=Object.prototype,Xg=Yg.hasOwnProperty,Zg=Yg.propertyIsEnumerable,Qg=Jg(function(){return arguments}())?Jg:function(e){return kh(e)&&Xg.call(e,`callee`)&&!Zg.call(e,`callee`)},$g=Array.isArray;function e_(){return!1}var t_=typeof exports==`object`&&exports&&!exports.nodeType&&exports,n_=t_&&typeof module==`object`&&module&&!module.nodeType&&module,r_=n_&&n_.exports===t_?mh.Buffer:void 0,i_=(r_?r_.isBuffer:void 0)||e_,a_=9007199254740991,o_=/^(?:0|[1-9]\d*)$/;function s_(e,t){var n=typeof e;return t??=a_,!!t&&(n==`number`||n!=`symbol`&&o_.test(e))&&e>-1&&e%1==0&&e<t}var c_=9007199254740991;function l_(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=c_}var u_=`[object Arguments]`,d_=`[object Array]`,f_=`[object Boolean]`,p_=`[object Date]`,m_=`[object Error]`,h_=`[object Function]`,g_=`[object Map]`,__=`[object Number]`,v_=`[object Object]`,y_=`[object RegExp]`,b_=`[object Set]`,x_=`[object String]`,S_=`[object WeakMap]`,C_=`[object ArrayBuffer]`,w_=`[object DataView]`,T_=`[object Float32Array]`,E_=`[object Float64Array]`,D_=`[object Int8Array]`,O_=`[object Int16Array]`,k_=`[object Int32Array]`,A_=`[object Uint8Array]`,j_=`[object Uint8ClampedArray]`,M_=`[object Uint16Array]`,N_=`[object Uint32Array]`,P_={};P_[T_]=P_[E_]=P_[D_]=P_[O_]=P_[k_]=P_[A_]=P_[j_]=P_[M_]=P_[N_]=!0,P_[u_]=P_[d_]=P_[C_]=P_[f_]=P_[w_]=P_[p_]=P_[m_]=P_[h_]=P_[g_]=P_[__]=P_[v_]=P_[y_]=P_[b_]=P_[x_]=P_[S_]=!1;function F_(e){return kh(e)&&l_(e.length)&&!!P_[Eh(e)]}function I_(e){return function(t){return e(t)}}var L_=typeof exports==`object`&&exports&&!exports.nodeType&&exports,R_=L_&&typeof module==`object`&&module&&!module.nodeType&&module,z_=R_&&R_.exports===L_&&fh.process,B_=function(){try{return R_&&R_.require&&R_.require(`util`).types||z_&&z_.binding&&z_.binding(`util`)}catch{}}(),V_=B_&&B_.isTypedArray,H_=V_?I_(V_):F_,U_=Object.prototype.hasOwnProperty;function W_(e,t){var n=$g(e),r=!n&&Qg(e),i=!n&&!r&&i_(e),a=!n&&!r&&!i&&H_(e),o=n||r||i||a,s=o?Kg(e.length,String):[],c=s.length;for(var l in e)(t||U_.call(e,l))&&!(o&&(l==`length`||i&&(l==`offset`||l==`parent`)||a&&(l==`buffer`||l==`byteLength`||l==`byteOffset`)||s_(l,c)))&&s.push(l);return s}var G_=Object.prototype;function K_(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||G_)}var q_=Dh(Object.keys,Object),J_=Object.prototype.hasOwnProperty;function Y_(e){if(!K_(e))return q_(e);var t=[];for(var n in Object(e))J_.call(e,n)&&n!=`constructor`&&t.push(n);return t}function X_(e){return e!=null&&l_(e.length)&&!tg(e)}function Z_(e){return X_(e)?W_(e):Y_(e)}function Q_(e,t){return e&&Gg(t,Z_(t),e)}function $_(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var ev=Object.prototype.hasOwnProperty;function tv(e){if(!Xh(e))return $_(e);var t=K_(e),n=[];for(var r in e)r==`constructor`&&(t||!ev.call(e,r))||n.push(r);return n}function nv(e){return X_(e)?W_(e,!0):tv(e)}function rv(e,t){return e&&Gg(t,nv(t),e)}var iv=typeof exports==`object`&&exports&&!exports.nodeType&&exports,av=iv&&typeof module==`object`&&module&&!module.nodeType&&module,ov=av&&av.exports===iv?mh.Buffer:void 0,sv=ov?ov.allocUnsafe:void 0;function cv(e,t){if(t)return e.slice();var n=e.length,r=sv?sv(n):new e.constructor(n);return e.copy(r),r}function lv(e,t){var n=-1,r=e.length;for(t||=Array(r);++n<r;)t[n]=e[n];return t}function uv(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function dv(){return[]}var fv=Object.prototype.propertyIsEnumerable,pv=Object.getOwnPropertySymbols,mv=pv?function(e){return e==null?[]:(e=Object(e),uv(pv(e),function(t){return fv.call(e,t)}))}:dv;function hv(e,t){return Gg(e,mv(e),t)}function gv(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var _v=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)gv(t,mv(e)),e=Oh(e);return t}:dv;function vv(e,t){return Gg(e,_v(e),t)}function yv(e,t,n){var r=t(e);return $g(e)?r:gv(r,n(e))}function bv(e){return yv(e,Z_,mv)}function xv(e){return yv(e,nv,_v)}var Sv=gg(mh,`DataView`),Cv=gg(mh,`Promise`),wv=gg(mh,`Set`),Tv=gg(mh,`WeakMap`),Ev=`[object Map]`,Dv=`[object Object]`,Ov=`[object Promise]`,kv=`[object Set]`,Av=`[object WeakMap]`,jv=`[object DataView]`,Mv=og(Sv),Nv=og(_g),Pv=og(Cv),Fv=og(wv),Iv=og(Tv),Lv=Eh;(Sv&&Lv(new Sv(new ArrayBuffer(1)))!=jv||_g&&Lv(new _g)!=Ev||Cv&&Lv(Cv.resolve())!=Ov||wv&&Lv(new wv)!=kv||Tv&&Lv(new Tv)!=Av)&&(Lv=function(e){var t=Eh(e),n=t==Dv?e.constructor:void 0,r=n?og(n):``;if(r)switch(r){case Mv:return jv;case Nv:return Ev;case Pv:return Ov;case Fv:return kv;case Iv:return Av}return t});var Rv=Lv,zv=Object.prototype.hasOwnProperty;function Bv(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]==`string`&&zv.call(e,`index`)&&(n.index=e.index,n.input=e.input),n}var Vv=mh.Uint8Array;function Hv(e){var t=new e.constructor(e.byteLength);return new Vv(t).set(new Vv(e)),t}function Uv(e,t){var n=t?Hv(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var Wv=/\w*$/;function Gv(e){var t=new e.constructor(e.source,Wv.exec(e));return t.lastIndex=e.lastIndex,t}var Kv=hh?hh.prototype:void 0,qv=Kv?Kv.valueOf:void 0;function Jv(e){return qv?Object(qv.call(e)):{}}function Yv(e,t){var n=t?Hv(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var Xv=`[object Boolean]`,Zv=`[object Date]`,Qv=`[object Map]`,$v=`[object Number]`,ey=`[object RegExp]`,ty=`[object Set]`,ny=`[object String]`,ry=`[object Symbol]`,iy=`[object ArrayBuffer]`,ay=`[object DataView]`,oy=`[object Float32Array]`,sy=`[object Float64Array]`,cy=`[object Int8Array]`,ly=`[object Int16Array]`,uy=`[object Int32Array]`,dy=`[object Uint8Array]`,fy=`[object Uint8ClampedArray]`,py=`[object Uint16Array]`,my=`[object Uint32Array]`;function hy(e,t,n){var r=e.constructor;switch(t){case iy:return Hv(e);case Xv:case Zv:return new r(+e);case ay:return Uv(e,n);case oy:case sy:case cy:case ly:case uy:case dy:case fy:case py:case my:return Yv(e,n);case Qv:return new r;case $v:case ny:return new r(e);case ey:return Gv(e);case ty:return new r;case ry:return Jv(e)}}var gy=Object.create,_y=function(){function e(){}return function(t){if(!Xh(t))return{};if(gy)return gy(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function vy(e){return typeof e.constructor==`function`&&!K_(e)?_y(Oh(e)):{}}var yy=`[object Map]`;function by(e){return kh(e)&&Rv(e)==yy}var xy=B_&&B_.isMap,Sy=xy?I_(xy):by,Cy=`[object Set]`;function wy(e){return kh(e)&&Rv(e)==Cy}var Ty=B_&&B_.isSet,Ey=Ty?I_(Ty):wy,Dy=1,Oy=2,ky=4,Ay=`[object Arguments]`,jy=`[object Array]`,My=`[object Boolean]`,Ny=`[object Date]`,Py=`[object Error]`,Fy=`[object Function]`,Iy=`[object GeneratorFunction]`,Ly=`[object Map]`,Ry=`[object Number]`,zy=`[object Object]`,By=`[object RegExp]`,Vy=`[object Set]`,Hy=`[object String]`,Uy=`[object Symbol]`,Wy=`[object WeakMap]`,Gy=`[object ArrayBuffer]`,Ky=`[object DataView]`,qy=`[object Float32Array]`,Jy=`[object Float64Array]`,Yy=`[object Int8Array]`,Xy=`[object Int16Array]`,Zy=`[object Int32Array]`,Qy=`[object Uint8Array]`,$y=`[object Uint8ClampedArray]`,eb=`[object Uint16Array]`,tb=`[object Uint32Array]`,nb={};nb[Ay]=nb[jy]=nb[Gy]=nb[Ky]=nb[My]=nb[Ny]=nb[qy]=nb[Jy]=nb[Yy]=nb[Xy]=nb[Zy]=nb[Ly]=nb[Ry]=nb[zy]=nb[By]=nb[Vy]=nb[Hy]=nb[Uy]=nb[Qy]=nb[$y]=nb[eb]=nb[tb]=!0,nb[Py]=nb[Fy]=nb[Wy]=!1;function rb(e,t,n,r,i,a){var o,s=t&Dy,c=t&Oy,l=t&ky;if(n&&(o=i?n(e,r,i,a):n(e)),o!==void 0)return o;if(!Xh(e))return e;var u=$g(e);if(u){if(o=Bv(e),!s)return lv(e,o)}else{var d=Rv(e),f=d==Fy||d==Iy;if(i_(e))return cv(e,s);if(d==zy||d==Ay||f&&!i){if(o=c||f?{}:vy(e),!s)return c?vv(e,rv(o,e)):hv(e,Q_(o,e))}else{if(!nb[d])return i?e:{};o=hy(e,d,s)}}a||=new zg;var p=a.get(e);if(p)return p;a.set(e,o),Ey(e)?e.forEach(function(r){o.add(rb(r,t,n,r,e,a))}):Sy(e)&&e.forEach(function(r,i){o.set(i,rb(r,t,n,i,e,a))});var m=u?void 0:(l?c?xv:bv:c?nv:Z_)(e);return Bg(m||e,function(r,i){m&&(i=r,r=e[i]),Wg(o,i,rb(r,t,n,i,e,a))}),o}var ib=1,ab=4;function ob(e){return rb(e,ib|ab)}var sb=c(o(((e,t)=>{var n=Array.isArray,r=Object.keys,i=Object.prototype.hasOwnProperty,a=typeof Element<`u`;function o(e,t){if(e===t)return!0;if(e&&t&&typeof e==`object`&&typeof t==`object`){var s=n(e),c=n(t),l,u,d;if(s&&c){if(u=e.length,u!=t.length)return!1;for(l=u;l--!==0;)if(!o(e[l],t[l]))return!1;return!0}if(s!=c)return!1;var f=e instanceof Date,p=t instanceof Date;if(f!=p)return!1;if(f&&p)return e.getTime()==t.getTime();var m=e instanceof RegExp,h=t instanceof RegExp;if(m!=h)return!1;if(m&&h)return e.toString()==t.toString();var g=r(e);if(u=g.length,u!==r(t).length)return!1;for(l=u;l--!==0;)if(!i.call(t,g[l]))return!1;if(a&&e instanceof Element&&t instanceof Element)return e===t;for(l=u;l--!==0;)if(d=g[l],!(d===`_owner`&&e.$$typeof)&&!o(e[d],t[d]))return!1;return!0}return e!==e&&t!==t}t.exports=function(e,t){try{return o(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||e.number===-2146828260)return console.warn(`Warning: react-fast-compare does not handle circular references.`,e.name,e.message),!1;throw e}}}))()),cb=4;function lb(e){return rb(e,cb)}function ub(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var db=`[object Symbol]`;function fb(e){return typeof e==`symbol`||kh(e)&&Eh(e)==db}var pb=`Expected a function`;function mb(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw TypeError(pb);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(mb.Cache||Ig),n}mb.Cache=Ig;var hb=500;function gb(e){var t=mb(e,function(e){return n.size===hb&&n.clear(),e}),n=t.cache;return t}var _b=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,vb=/\\(\\)?/g,yb=gb(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(``),e.replace(_b,function(e,n,r,i){t.push(r?i.replace(vb,`$1`):n||e)}),t}),bb=1/0;function xb(e){if(typeof e==`string`||fb(e))return e;var t=e+``;return t==`0`&&1/e==-bb?`-0`:t}var Sb=1/0,Cb=hh?hh.prototype:void 0,wb=Cb?Cb.toString:void 0;function Tb(e){if(typeof e==`string`)return e;if($g(e))return ub(e,Tb)+``;if(fb(e))return wb?wb.call(e):``;var t=e+``;return t==`0`&&1/e==-Sb?`-0`:t}function Eb(e){return e==null?``:Tb(e)}function Db(e){return $g(e)?ub(e,xb):fb(e)?[e]:lv(yb(Eb(e)))}var Ob=o((e=>{var t=typeof Symbol==`function`&&Symbol.for,n=t?Symbol.for(`react.element`):60103,r=t?Symbol.for(`react.portal`):60106,i=t?Symbol.for(`react.fragment`):60107,a=t?Symbol.for(`react.strict_mode`):60108,o=t?Symbol.for(`react.profiler`):60114,s=t?Symbol.for(`react.provider`):60109,c=t?Symbol.for(`react.context`):60110,l=t?Symbol.for(`react.async_mode`):60111,u=t?Symbol.for(`react.concurrent_mode`):60111,d=t?Symbol.for(`react.forward_ref`):60112,f=t?Symbol.for(`react.suspense`):60113,p=t?Symbol.for(`react.suspense_list`):60120,m=t?Symbol.for(`react.memo`):60115,h=t?Symbol.for(`react.lazy`):60116,g=t?Symbol.for(`react.block`):60121,_=t?Symbol.for(`react.fundamental`):60117,v=t?Symbol.for(`react.responder`):60118,y=t?Symbol.for(`react.scope`):60119;function b(e){if(typeof e==`object`&&e){var t=e.$$typeof;switch(t){case n:switch(e=e.type,e){case l:case u:case i:case o:case a:case f:return e;default:switch(e&&=e.$$typeof,e){case c:case d:case h:case m:case s:return e;default:return t}}case r:return t}}}function x(e){return b(e)===u}e.AsyncMode=l,e.ConcurrentMode=u,e.ContextConsumer=c,e.ContextProvider=s,e.Element=n,e.ForwardRef=d,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=o,e.StrictMode=a,e.Suspense=f,e.isAsyncMode=function(e){return x(e)||b(e)===l},e.isConcurrentMode=x,e.isContextConsumer=function(e){return b(e)===c},e.isContextProvider=function(e){return b(e)===s},e.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===n},e.isForwardRef=function(e){return b(e)===d},e.isFragment=function(e){return b(e)===i},e.isLazy=function(e){return b(e)===h},e.isMemo=function(e){return b(e)===m},e.isPortal=function(e){return b(e)===r},e.isProfiler=function(e){return b(e)===o},e.isStrictMode=function(e){return b(e)===a},e.isSuspense=function(e){return b(e)===f},e.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===i||e===u||e===o||e===a||e===f||e===p||typeof e==`object`&&!!e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===_||e.$$typeof===v||e.$$typeof===y||e.$$typeof===g)},e.typeOf=b})),kb=o(((e,t)=>{t.exports=Ob()}));o(((e,t)=>{var n=kb(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=a,s[n.Memo]=o;function c(e){return n.isMemo(e)?o:s[e.$$typeof]||r}var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;function h(e,t,n){if(typeof t!=`string`){if(m){var r=p(t);r&&r!==m&&h(e,r,n)}var a=u(t);d&&(a=a.concat(d(t)));for(var o=c(e),s=c(t),g=0;g<a.length;++g){var _=a[g];if(!i[_]&&!(n&&n[_])&&!(s&&s[_])&&!(o&&o[_])){var v=f(t,_);try{l(e,_,v)}catch{}}}}return e}t.exports=h}))();function Ab(){return Ab=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ab.apply(this,arguments)}function jb(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Mb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Nb(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}var Pb=(0,B.createContext)(void 0);Pb.displayName=`FormikContext`,Pb.Provider,Pb.Consumer;function Fb(){return(0,B.useContext)(Pb)}var Ib=function(e){return Array.isArray(e)&&e.length===0},Lb=function(e){return typeof e==`function`},Rb=function(e){return typeof e==`object`&&!!e},zb=function(e){return String(Math.floor(Number(e)))===e},Bb=function(e){return Object.prototype.toString.call(e)===`[object String]`},Vb=function(e){return B.Children.count(e)===0},Hb=function(e){return Rb(e)&&Lb(e.then)};function Ub(e,t,n,r){r===void 0&&(r=0);for(var i=Db(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function Wb(e,t,n){for(var r=lb(e),i=r,a=0,o=Db(t);a<o.length-1;a++){var s=o[a],c=Ub(e,o.slice(0,a+1));if(c&&(Rb(c)||Array.isArray(c)))i=i[s]=lb(c);else{var l=o[a+1];i=i[s]=zb(l)&&Number(l)>=0?[]:{}}}return(a===0?e:i)[o[a]]===n?e:(n===void 0?delete i[o[a]]:i[o[a]]=n,a===0&&n===void 0&&delete r[o[a]],r)}function Gb(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,a=Object.keys(e);i<a.length;i++){var o=a[i],s=e[o];Rb(s)?n.get(s)||(n.set(s,!0),r[o]=Array.isArray(s)?[]:{},Gb(s,t,n,r[o])):r[o]=t}return r}function Kb(e,t){switch(t.type){case`SET_VALUES`:return Ab({},e,{values:t.payload});case`SET_TOUCHED`:return Ab({},e,{touched:t.payload});case`SET_ERRORS`:return(0,sb.default)(e.errors,t.payload)?e:Ab({},e,{errors:t.payload});case`SET_STATUS`:return Ab({},e,{status:t.payload});case`SET_ISSUBMITTING`:return Ab({},e,{isSubmitting:t.payload});case`SET_ISVALIDATING`:return Ab({},e,{isValidating:t.payload});case`SET_FIELD_VALUE`:return Ab({},e,{values:Wb(e.values,t.payload.field,t.payload.value)});case`SET_FIELD_TOUCHED`:return Ab({},e,{touched:Wb(e.touched,t.payload.field,t.payload.value)});case`SET_FIELD_ERROR`:return Ab({},e,{errors:Wb(e.errors,t.payload.field,t.payload.value)});case`RESET_FORM`:return Ab({},e,t.payload);case`SET_FORMIK_STATE`:return t.payload(e);case`SUBMIT_ATTEMPT`:return Ab({},e,{touched:Gb(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case`SUBMIT_FAILURE`:return Ab({},e,{isSubmitting:!1});case`SUBMIT_SUCCESS`:return Ab({},e,{isSubmitting:!1});default:return e}}var qb={},Jb={};function Yb(e){var t=e.validateOnChange,n=t===void 0||t,r=e.validateOnBlur,i=r===void 0||r,a=e.validateOnMount,o=a!==void 0&&a,s=e.isInitialValid,c=e.enableReinitialize,l=c!==void 0&&c,u=e.onSubmit,d=Mb(e,[`validateOnChange`,`validateOnBlur`,`validateOnMount`,`isInitialValid`,`enableReinitialize`,`onSubmit`]),f=Ab({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:u},d),p=(0,B.useRef)(f.initialValues),m=(0,B.useRef)(f.initialErrors||qb),h=(0,B.useRef)(f.initialTouched||Jb),g=(0,B.useRef)(f.initialStatus),_=(0,B.useRef)(!1),v=(0,B.useRef)({});(0,B.useEffect)(function(){return _.current=!0,function(){_.current=!1}},[]);var y=(0,B.useState)(0)[1],b=(0,B.useRef)({values:ob(f.initialValues),errors:ob(f.initialErrors)||qb,touched:ob(f.initialTouched)||Jb,status:ob(f.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0}),x=b.current,S=(0,B.useCallback)(function(e){var t=b.current;b.current=Kb(t,e),t!==b.current&&y(function(e){return e+1})},[]),C=(0,B.useCallback)(function(e,t){return new Promise(function(n,r){var i=f.validate(e,t);i==null?n(qb):Hb(i)?i.then(function(e){n(e||qb)},function(e){r(e)}):n(i)})},[f.validate]),w=(0,B.useCallback)(function(e,t){var n=f.validationSchema,r=Lb(n)?n(t):n,i=t&&r.validateAt?r.validateAt(t,e):Zb(e,r);return new Promise(function(e,t){i.then(function(){e(qb)},function(n){n.name===`ValidationError`?e(Xb(n)):t(n)})})},[f.validationSchema]),T=(0,B.useCallback)(function(e,t){return new Promise(function(n){return n(v.current[e].validate(t))})},[]),E=(0,B.useCallback)(function(e){var t=Object.keys(v.current).filter(function(e){return Lb(v.current[e].validate)}),n=t.length>0?t.map(function(t){return T(t,Ub(e,t))}):[Promise.resolve(`DO_NOT_DELETE_YOU_WILL_BE_FIRED`)];return Promise.all(n).then(function(e){return e.reduce(function(e,n,r){return n===`DO_NOT_DELETE_YOU_WILL_BE_FIRED`||n&&(e=Wb(e,t[r],n)),e},{})})},[T]),ee=(0,B.useCallback)(function(e){return Promise.all([E(e),f.validationSchema?w(e):{},f.validate?C(e):{}]).then(function(e){var t=e[0],n=e[1],r=e[2];return dh.all([t,n,r],{arrayMerge:$b})})},[f.validate,f.validationSchema,E,C,w]),D=rx(function(e){return e===void 0&&(e=x.values),S({type:`SET_ISVALIDATING`,payload:!0}),ee(e).then(function(e){return _.current&&(S({type:`SET_ISVALIDATING`,payload:!1}),S({type:`SET_ERRORS`,payload:e})),e})});(0,B.useEffect)(function(){o&&_.current===!0&&(0,sb.default)(p.current,f.initialValues)&&D(p.current)},[o,D]);var te=(0,B.useCallback)(function(e){var t=e&&e.values?e.values:p.current,n=e&&e.errors?e.errors:m.current?m.current:f.initialErrors||{},r=e&&e.touched?e.touched:h.current?h.current:f.initialTouched||{},i=e&&e.status?e.status:g.current?g.current:f.initialStatus;p.current=t,m.current=n,h.current=r,g.current=i;var a=function(){S({type:`RESET_FORM`,payload:{isSubmitting:!!e&&!!e.isSubmitting,errors:n,touched:r,status:i,values:t,isValidating:!!e&&!!e.isValidating,submitCount:e&&e.submitCount&&typeof e.submitCount==`number`?e.submitCount:0}})};if(f.onReset){var o=f.onReset(x.values,le);Hb(o)?o.then(a):a()}else a()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);(0,B.useEffect)(function(){_.current===!0&&!(0,sb.default)(p.current,f.initialValues)&&l&&(p.current=f.initialValues,te(),o&&D(p.current))},[l,f.initialValues,te,o,D]),(0,B.useEffect)(function(){l&&_.current===!0&&!(0,sb.default)(m.current,f.initialErrors)&&(m.current=f.initialErrors||qb,S({type:`SET_ERRORS`,payload:f.initialErrors||qb}))},[l,f.initialErrors]),(0,B.useEffect)(function(){l&&_.current===!0&&!(0,sb.default)(h.current,f.initialTouched)&&(h.current=f.initialTouched||Jb,S({type:`SET_TOUCHED`,payload:f.initialTouched||Jb}))},[l,f.initialTouched]),(0,B.useEffect)(function(){l&&_.current===!0&&!(0,sb.default)(g.current,f.initialStatus)&&(g.current=f.initialStatus,S({type:`SET_STATUS`,payload:f.initialStatus}))},[l,f.initialStatus,f.initialTouched]);var ne=rx(function(e){if(v.current[e]&&Lb(v.current[e].validate)){var t=Ub(x.values,e),n=v.current[e].validate(t);return Hb(n)?(S({type:`SET_ISVALIDATING`,payload:!0}),n.then(function(e){return e}).then(function(t){S({type:`SET_FIELD_ERROR`,payload:{field:e,value:t}}),S({type:`SET_ISVALIDATING`,payload:!1})})):(S({type:`SET_FIELD_ERROR`,payload:{field:e,value:n}}),Promise.resolve(n))}return f.validationSchema?(S({type:`SET_ISVALIDATING`,payload:!0}),w(x.values,e).then(function(e){return e}).then(function(t){S({type:`SET_FIELD_ERROR`,payload:{field:e,value:Ub(t,e)}}),S({type:`SET_ISVALIDATING`,payload:!1})})):Promise.resolve()}),re=(0,B.useCallback)(function(e,t){var n=t.validate;v.current[e]={validate:n}},[]),O=(0,B.useCallback)(function(e){delete v.current[e]},[]),k=rx(function(e,t){return S({type:`SET_TOUCHED`,payload:e}),(t===void 0?i:t)?D(x.values):Promise.resolve()}),A=(0,B.useCallback)(function(e){S({type:`SET_ERRORS`,payload:e})},[]),j=rx(function(e,t){var r=Lb(e)?e(x.values):e;return S({type:`SET_VALUES`,payload:r}),(t===void 0?n:t)?D(r):Promise.resolve()}),M=(0,B.useCallback)(function(e,t){S({type:`SET_FIELD_ERROR`,payload:{field:e,value:t}})},[]),N=rx(function(e,t,r){var i=Lb(t)?t(Ub(x.values,e)):t;return S({type:`SET_FIELD_VALUE`,payload:{field:e,value:i}}),(r===void 0?n:r)?D(Wb(x.values,e,i)):Promise.resolve()}),P=(0,B.useCallback)(function(e,t){var n=t,r=e,i;if(!Bb(e)){e.persist&&e.persist();var a=e.target?e.target:e.currentTarget,o=a.type,s=a.name,c=a.id,l=a.value,u=a.checked;a.outerHTML;var d=a.options,f=a.multiple;n=t||s||c,r=/number|range/.test(o)?(i=parseFloat(l),isNaN(i)?``:i):/checkbox/.test(o)?tx(Ub(x.values,n),u,l):d&&f?ex(d):l}n&&N(n,r)},[N,x.values]),F=rx(function(e){if(Bb(e))return function(t){return P(t,e)};P(e)}),I=rx(function(e,t,n){return t===void 0&&(t=!0),S({type:`SET_FIELD_TOUCHED`,payload:{field:e,value:t}}),(n===void 0?i:n)?D(x.values):Promise.resolve()}),ie=(0,B.useCallback)(function(e,t){e.persist&&e.persist();var n=e.target,r=n.name,i=n.id;n.outerHTML,I(t||r||i,!0)},[I]),ae=rx(function(e){if(Bb(e))return function(t){return ie(t,e)};ie(e)}),R=(0,B.useCallback)(function(e){Lb(e)?S({type:`SET_FORMIK_STATE`,payload:e}):S({type:`SET_FORMIK_STATE`,payload:function(){return e}})},[]),oe=(0,B.useCallback)(function(e){S({type:`SET_STATUS`,payload:e})},[]),se=(0,B.useCallback)(function(e){S({type:`SET_ISSUBMITTING`,payload:e})},[]),z=rx(function(){return S({type:`SUBMIT_ATTEMPT`}),D().then(function(e){var t=e instanceof Error;if(!t&&Object.keys(e).length===0){var n;try{if(n=ue(),n===void 0)return}catch(e){throw e}return Promise.resolve(n).then(function(e){return _.current&&S({type:`SUBMIT_SUCCESS`}),e}).catch(function(e){if(_.current)throw S({type:`SUBMIT_FAILURE`}),e})}if(_.current&&(S({type:`SUBMIT_FAILURE`}),t))throw e})}),ce=rx(function(e){e&&e.preventDefault&&Lb(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&Lb(e.stopPropagation)&&e.stopPropagation(),z().catch(function(e){console.warn(`Warning: An unhandled error was caught from submitForm()`,e)})}),le={resetForm:te,validateForm:D,validateField:ne,setErrors:A,setFieldError:M,setFieldTouched:I,setFieldValue:N,setStatus:oe,setSubmitting:se,setTouched:k,setValues:j,setFormikState:R,submitForm:z},ue=rx(function(){return u(x.values,le)}),de=rx(function(e){e&&e.preventDefault&&Lb(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&Lb(e.stopPropagation)&&e.stopPropagation(),te()}),fe=(0,B.useCallback)(function(e){return{value:Ub(x.values,e),error:Ub(x.errors,e),touched:!!Ub(x.touched,e),initialValue:Ub(p.current,e),initialTouched:!!Ub(h.current,e),initialError:Ub(m.current,e)}},[x.errors,x.touched,x.values]),pe=(0,B.useCallback)(function(e){return{setValue:function(t,n){return N(e,t,n)},setTouched:function(t,n){return I(e,t,n)},setError:function(t){return M(e,t)}}},[N,I,M]),me=(0,B.useCallback)(function(e){var t=Rb(e),n=t?e.name:e,r=Ub(x.values,n),i={name:n,value:r,onChange:F,onBlur:ae};if(t){var a=e.type,o=e.value,s=e.as,c=e.multiple;a===`checkbox`?o===void 0?i.checked=!!r:(i.checked=!!(Array.isArray(r)&&~r.indexOf(o)),i.value=o):a===`radio`?(i.checked=r===o,i.value=o):s===`select`&&c&&(i.value=i.value||[],i.multiple=!0)}return i},[ae,F,x.values]),he=(0,B.useMemo)(function(){return!(0,sb.default)(p.current,x.values)},[p.current,x.values]),ge=(0,B.useMemo)(function(){return s===void 0||he?x.errors&&Object.keys(x.errors).length===0:s!==!1&&Lb(s)?s(f):s},[s,he,x.errors,f]);return Ab({},x,{initialValues:p.current,initialErrors:m.current,initialTouched:h.current,initialStatus:g.current,handleBlur:ae,handleChange:F,handleReset:de,handleSubmit:ce,resetForm:te,setErrors:A,setFormikState:R,setFieldTouched:I,setFieldValue:N,setFieldError:M,setStatus:oe,setSubmitting:se,setTouched:k,setValues:j,submitForm:z,validateForm:D,validateField:ne,isValid:ge,dirty:he,unregisterField:O,registerField:re,getFieldProps:me,getFieldMeta:fe,getFieldHelpers:pe,validateOnBlur:i,validateOnChange:n,validateOnMount:o})}function Xb(e){var t={};if(e.inner){if(e.inner.length===0)return Wb(t,e.path,e.message);for(var n=e.inner,r=Array.isArray(n),i=0,n=r?n:n[Symbol.iterator]();;){var a;if(r){if(i>=n.length)break;a=n[i++]}else{if(i=n.next(),i.done)break;a=i.value}var o=a;Ub(t,o.path)||(t=Wb(t,o.path,o.message))}}return t}function Zb(e,t,n,r){n===void 0&&(n=!1);var i=Qb(e);return t[n?`validateSync`:`validate`](i,{abortEarly:!1,context:r||i})}function Qb(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);t[r]=Array.isArray(e[r])===!0?e[r].map(function(e){return Array.isArray(e)===!0||Ih(e)?Qb(e):e===``?void 0:e}):Ih(e[r])?Qb(e[r]):e[r]===``?void 0:e[r]}return t}function $b(e,t,n){var r=e.slice();return t.forEach(function(t,i){r[i]===void 0?r[i]=n.clone!==!1&&n.isMergeableObject(t)?dh(Array.isArray(t)?[]:{},t,n):t:n.isMergeableObject(t)?r[i]=dh(e[i],t,n):e.indexOf(t)===-1&&r.push(t)}),r}function ex(e){return Array.from(e).filter(function(e){return e.selected}).map(function(e){return e.value})}function tx(e,t,n){if(typeof e==`boolean`)return!!t;var r=[],i=!1,a=-1;if(Array.isArray(e))r=e,a=e.indexOf(n),i=a>=0;else if(!n||n==`true`||n==`false`)return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,a).concat(r.slice(a+1)):r}var nx=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0?B.useLayoutEffect:B.useEffect;function rx(e){var t=(0,B.useRef)(e);return nx(function(){t.current=e}),(0,B.useCallback)(function(){var e=[...arguments];return t.current.apply(void 0,e)},[])}var ix=(0,B.forwardRef)(function(e,t){var n=e.action,r=Mb(e,[`action`]),i=n??`#`,a=Fb(),o=a.handleReset,s=a.handleSubmit;return(0,B.createElement)(`form`,Ab({onSubmit:s,ref:t,onReset:o,action:i},r))});ix.displayName=`Form`;var ax=function(e,t,n){var r=lx(e),i=r[t];return r.splice(t,1),r.splice(n,0,i),r},ox=function(e,t,n){var r=lx(e),i=r[t];return r[t]=r[n],r[n]=i,r},sx=function(e,t,n){var r=lx(e);return r.splice(t,0,n),r},cx=function(e,t,n){var r=lx(e);return r[t]=n,r},lx=function(e){if(!e)return[];if(Array.isArray(e))return[].concat(e);var t=Object.keys(e).map(function(e){return parseInt(e)}).reduce(function(e,t){return t>e?t:e},0);return Array.from(Ab({},e,{length:t+1}))},ux=function(e,t){var n=typeof e==`function`?e:t;return function(e){return Array.isArray(e)||Rb(e)?n(lx(e)):e}},dx=function(e){jb(t,e);function t(t){var n=e.call(this,t)||this;return n.updateArrayField=function(e,t,r){var i=n.props,a=i.name,o=i.formik.setFormikState;o(function(n){var i=ux(r,e),o=ux(t,e),s=Wb(n.values,a,e(Ub(n.values,a))),c=r?i(Ub(n.errors,a)):void 0,l=t?o(Ub(n.touched,a)):void 0;return Ib(c)&&(c=void 0),Ib(l)&&(l=void 0),Ab({},n,{values:s,errors:r?Wb(n.errors,a,c):n.errors,touched:t?Wb(n.touched,a,l):n.touched})})},n.push=function(e){return n.updateArrayField(function(t){return[].concat(lx(t),[ob(e)])},!1,!1)},n.handlePush=function(e){return function(){return n.push(e)}},n.swap=function(e,t){return n.updateArrayField(function(n){return ox(n,e,t)},!0,!0)},n.handleSwap=function(e,t){return function(){return n.swap(e,t)}},n.move=function(e,t){return n.updateArrayField(function(n){return ax(n,e,t)},!0,!0)},n.handleMove=function(e,t){return function(){return n.move(e,t)}},n.insert=function(e,t){return n.updateArrayField(function(n){return sx(n,e,t)},function(t){return sx(t,e,null)},function(t){return sx(t,e,null)})},n.handleInsert=function(e,t){return function(){return n.insert(e,t)}},n.replace=function(e,t){return n.updateArrayField(function(n){return cx(n,e,t)},!1,!1)},n.handleReplace=function(e,t){return function(){return n.replace(e,t)}},n.unshift=function(e){var t=-1;return n.updateArrayField(function(n){var r=n?[e].concat(n):[e];return t=r.length,r},function(e){return e?[null].concat(e):[null]},function(e){return e?[null].concat(e):[null]}),t},n.handleUnshift=function(e){return function(){return n.unshift(e)}},n.handleRemove=function(e){return function(){return n.remove(e)}},n.handlePop=function(){return function(){return n.pop()}},n.remove=n.remove.bind(Nb(n)),n.pop=n.pop.bind(Nb(n)),n}var n=t.prototype;return n.componentDidUpdate=function(e){this.props.validateOnChange&&this.props.formik.validateOnChange&&!(0,sb.default)(Ub(e.formik.values,e.name),Ub(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(e){var t;return this.updateArrayField(function(n){var r=n?lx(n):[];return t||=r[e],Lb(r.splice)&&r.splice(e,1),Lb(r.every)&&r.every(function(e){return e===void 0})?[]:r},!0,!0),t},n.pop=function(){var e;return this.updateArrayField(function(t){var n=t.slice();return e||=n&&n.pop&&n.pop(),n},!0,!0),e},n.render=function(){var e={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},t=this.props,n=t.component,r=t.render,i=t.children,a=t.name,o=t.formik,s=Mb(o,[`validate`,`validationSchema`]),c=Ab({},e,{form:s,name:a});return n?(0,B.createElement)(n,c):r?r(c):i?typeof i==`function`?i(c):Vb(i)?null:B.Children.only(i):null},t}(B.Component);dx.defaultProps={validateOnChange:!0};var fx=e=>typeof e==`number`&&!isNaN(e),px=e=>typeof e==`string`,mx=e=>typeof e==`function`,hx=e=>px(e)||fx(e),gx=e=>(0,B.isValidElement)(e)||px(e)||mx(e)||fx(e);function _x(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight=`initial`,i.height=r+`px`,i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height=`0`,i.padding=`0`,i.margin=`0`,setTimeout(t,n)})})}function vx({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:a,position:o,preventExitTransition:s,done:c,nodeRef:l,isIn:u,playToast:d}){let f=n?`${e}--${o}`:e,p=n?`${t}--${o}`:t,m=(0,B.useRef)(0);return(0,B.useLayoutEffect)(()=>{let e=l.current,t=f.split(` `),n=r=>{r.target===l.current&&(d(),e.removeEventListener(`animationend`,n),e.removeEventListener(`animationcancel`,n),m.current===0&&r.type!==`animationcancel`&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener(`animationend`,n),e.addEventListener(`animationcancel`,n)},[]),(0,B.useEffect)(()=>{let e=l.current,t=()=>{e.removeEventListener(`animationend`,t),r?_x(e,c,i):c()};u||(s?t():(m.current=1,e.className+=` ${p}`,e.addEventListener(`animationend`,t)))},[u]),B.createElement(B.Fragment,null,a)}}var yx=1,bx=()=>`${yx++}`,xx=new Map,Sx=[],Cx=new Set,wx=()=>xx.size>0,Tx=(e,{containerId:t})=>xx.get(t||1)?.toasts.get(e);function Ex(e,t){var n;if(t)return!!((n=xx.get(t))!=null&&n.isToastActive(e));let r=!1;return xx.forEach(t=>{t.isToastActive(e)&&(r=!0)}),r}function Dx(e){if(!wx()){Sx=Sx.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||hx(e))xx.forEach(t=>{t.removeToast(e)});else if(e&&(`containerId`in e||`id`in e)){let t=xx.get(e.containerId);t?t.removeToast(e.id):xx.forEach(t=>{t.removeToast(e.id)})}}var Ox=(e={})=>{xx.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function kx(e,t){gx(e)&&(wx()||Sx.push({content:e,options:t}),xx.forEach(n=>{n.buildToast(e,t)}))}function Ax(e,t){xx.forEach(n=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===n.id)&&n.toggle(e,t?.id)})}function jx(e){return Cx.add(e),()=>{Cx.delete(e)}}function Mx(e){return e&&(px(e.toastId)||fx(e.toastId))?e.toastId:bx()}function Nx(e,t){return kx(e,t),t.toastId}function Px(e,t){return{...t,type:t&&t.type||e,toastId:Mx(t)}}function Fx(e){return(t,n)=>Nx(t,Px(e,n))}function Ix(e,t){return Nx(e,Px(`default`,t))}Ix.loading=(e,t)=>Nx(e,Px(`default`,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function Lx(e,{pending:t,error:n,success:r},i){let a;t&&(a=px(t)?Ix.loading(t,i):Ix.loading(t.render,{...i,...t}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(e,t,n)=>{if(t==null){Ix.dismiss(a);return}let r={type:e,...o,...i,data:n},s=px(t)?{render:t}:t;return a?Ix.update(a,{...r,...s}):Ix(s.render,{...r,...s}),n},c=mx(e)?e():e;return c.then(e=>s(`success`,r,e)).catch(e=>s(`error`,n,e)),c}Ix.promise=Lx,Ix.success=Fx(`success`),Ix.info=Fx(`info`),Ix.error=Fx(`error`),Ix.warning=Fx(`warning`),Ix.warn=Ix.warning,Ix.dark=(e,t)=>Nx(e,Px(`default`,{theme:`dark`,...t}));function Rx(e){Dx(e)}Ix.dismiss=Rx,Ix.clearWaitingQueue=Ox,Ix.isActive=Ex,Ix.update=(e,t={})=>{let n=Tx(e,t);if(n){let{props:r,content:i}=n,a={delay:100,...r,...t,toastId:t.toastId||e,updateId:bx()};a.toastId!==e&&(a.staleId=e);let o=a.render||i;delete a.render,Nx(o,a)}},Ix.done=e=>{Ix.update(e,{progress:1})},Ix.onChange=jx,Ix.play=e=>Ax(!0,e),Ix.pause=e=>Ax(!1,e);var zx=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t});vx(zx(`bounce`,!0)),vx(zx(`slide`,!0)),vx(zx(`zoom`)),vx(zx(`flip`));var Bx=`
  opacity: 0;
  transform: translateY(12px);
  animation: modalItemAppear 0.55s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
`,Vx=q.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;

  background: ${({$dark:e})=>e?`rgba(0, 0, 0, 0.32)`:`rgba(17, 17, 17, 0.18)`};

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  animation: overlayAppear 0.3s ease;

  @keyframes overlayAppear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`,Hx=q.div`
  position: relative;
  isolation: isolate;

  width: 100%;
  max-width: 360px;

  padding: 30px;

  box-sizing: border-box;

  background: ${({$dark:e})=>e?`rgba(25, 25, 25, 0.55)`:`rgba(255, 255, 255, 0.5)`};

  backdrop-filter: blur(24px) saturate(150%);
  -webkit-backdrop-filter: blur(24px) saturate(150%);

  border: 1px solid
    ${({$dark:e})=>e?`rgba(255, 255, 255, 0.14)`:`rgba(255, 255, 255, 0.7)`};

  border-radius: 18px;

  box-shadow:
    0 25px 70px rgba(0, 0, 0, 0.25),
    0 0 40px
      ${({$accent:e})=>`${e}18`},
    inset 0 1px 1px
      rgba(255, 255, 255, 0.25);

  overflow: hidden;

  animation:
    modalAppear 0.35s
    cubic-bezier(0.22, 1, 0.36, 1);

  @keyframes modalAppear {
    from {
      opacity: 0;
      transform:
        translateY(18px)
        scale(0.96);
      filter: blur(5px);
    }

    to {
      opacity: 1;
      transform:
        translateY(0)
        scale(1);
      filter: blur(0);
    }
  }

  @keyframes modalItemAppear {
    from {
      opacity: 0;
      transform:
        translateY(12px)
        scale(0.985);
    }

    to {
      opacity: 1;
      transform:
        translateY(0)
        scale(1);
    }
  }

  /* Glass shine */

  &::before {
    content: "";

    position: absolute;
    inset: 0;

    pointer-events: none;

    background:
      linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.2),
        transparent 32%,
        transparent 68%,
        rgba(255, 255, 255, 0.05)
      );

    z-index: 1;
  }

  /* All modal content stays above bubbles */

  > * {
    position: relative;
    z-index: 2;
  }

  @media screen and (min-width: 564px) {
    max-width: 450px;

    padding: 38px;

    border-radius: 20px;
  }

  @media screen and (min-width: 1160px) {
    max-width: 500px;

    padding: 42px;

    border-radius: 22px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;

    > * {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    }
  }
`,Ux=q.div`
  position: absolute;

  width: 190px;
  height: 190px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      ${({$accent:e})=>`${e}85`} 0%,
      ${({$accent:e})=>`${e}55`} 30%,
      ${({$accent:e})=>`${e}28`} 55%,
      transparent 75%
    );

  filter: blur(25px);

  opacity: 0.95;

  pointer-events: none;

  z-index: 0 !important;

  animation:
    modalBubbleFloat 8s
    ease-in-out infinite;

  ${({$position:e})=>e===`top`&&`
      top: -85px;
      right: -65px;

      width: 210px;
      height: 210px;

      animation-delay: 0s;
    `}

  ${({$position:e})=>e===`bottom`&&`
      bottom: -90px;
      left: -70px;

      width: 190px;
      height: 190px;

      animation-delay: -2.5s;
    `}

  ${({$position:e})=>e===`center`&&`
      top: 42%;
      left: 43%;

      width: 130px;
      height: 130px;

      opacity: 0.55;

      animation-delay: -5s;
    `}

  @keyframes modalBubbleFloat {
    0%,
    100% {
      transform:
        translate3d(0, 0, 0)
        scale(1);
    }

    25% {
      transform:
        translate3d(-18px, 14px, 0)
        scale(1.08);
    }

    50% {
      transform:
        translate3d(16px, 24px, 0)
        scale(0.94);
    }

    75% {
      transform:
        translate3d(25px, -14px, 0)
        scale(1.05);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Wx=q.button`
  position: absolute;

  top: 11px;
  right: 11px;

  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: 1px solid
    rgba(255, 255, 255, 0.12);

  border-radius: 50%;

  background: ${({$dark:e})=>e?`rgba(255,255,255,0.08)`:`rgba(255,255,255,0.45)`};

  color: ${({$dark:e})=>e?`#ffffff`:`#333333`};

  cursor: pointer;

  backdrop-filter: blur(10px);

  transition:
    background 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: ${({$accent:e})=>`${e}35`};

    transform: rotate(90deg);

    box-shadow:
      0 0 15px
        ${({$accent:e})=>`${e}35`};
  }

  &:active {
    transform: scale(0.94);
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 564px) {
    top: 14px;
    right: 14px;

    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 1160px) {
    top: 16px;
    right: 16px;

    width: 34px;
    height: 34px;
  }
`,Gx=q.h2`
  ${Bx}

  animation-delay: 0.08s;

  margin: 0 0 22px;

  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  font-size: 25px;
  font-weight: 800;

  letter-spacing: -0.5px;

  text-align: center;

text-shadow:
  0 0 8px ${({$accent:e})=>`${e}80`},
  0 0 20px ${({$accent:e})=>`${e}65`},
  0 0 40px ${({$accent:e})=>`${e}45`},
  0 0 70px ${({$accent:e})=>`${e}25`};

transition: text-shadow 0.6s ease;

  @media screen and (min-width: 564px) {
    margin-bottom: 27px;
    font-size: 29px;
  }

  @media screen and (min-width: 1160px) {
    margin-bottom: 30px;
    font-size: 32px;
  }
`,Kx=q.form`
  display: flex;
  flex-direction: column;

  gap: 11px;

  @media screen and (min-width: 564px) {
    gap: 14px;
  }

  @media screen and (min-width: 1160px) {
    gap: 16px;
  }
`,qx=q.input`
  ${Bx}

  &:nth-child(1) {
    animation-delay: 0.14s;
  }

  &:nth-child(2) {
    animation-delay: 0.20s;
  }

  &:nth-child(3) {
    animation-delay: 0.26s;
  }

  width: 100%;
  height: 44px;

  padding: 0 14px;

  border: 1px solid
    ${({$dark:e})=>e?`rgba(255,255,255,0.12)`:`rgba(255,255,255,0.7)`};

  border-radius: 9px;

  outline: none;

  box-sizing: border-box;

  background: ${({$dark:e})=>e?`rgba(255,255,255,0.06)`:`rgba(255,255,255,0.45)`};

  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  backdrop-filter: blur(10px);

  font-size: 14px;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.2s ease;

  &::placeholder {
    color: ${({$dark:e})=>e?`#777777`:`#888888`};
  }

  &:hover {
    background: ${({$dark:e})=>e?`rgba(255,255,255,0.08)`:`rgba(255,255,255,0.58)`};
  }

  &:focus {
    background: ${({$dark:e})=>e?`rgba(255,255,255,0.09)`:`rgba(255,255,255,0.65)`};

    border-color: ${({$accent:e})=>e};

    box-shadow:
      0 0 0 3px
        ${({$accent:e})=>`${e}22`},
      0 0 18px
        ${({$accent:e})=>`${e}15`};
  }

  @media screen and (min-width: 564px) {
    height: 50px;
    padding: 0 16px;
    font-size: 15px;
  }

  @media screen and (min-width: 1160px) {
    height: 54px;
    font-size: 16px;
  }
`,Jx=q.button`
  ${Bx}

  animation-delay: 0.34s;

  width: 92px;
  height: 37px;

  margin: 4px auto 0;

  border: none;

  border-radius: 9px;

  background: ${({$accent:e})=>e};

  color: #111111;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  box-shadow:
    0 7px 20px
      ${({$accent:e})=>`${e}35`};

  transition:
    transform 0.2s ease,
    box-shadow 0.25s ease,
    filter 0.25s ease;

  &:hover {
    transform: translateY(-2px);

    filter: brightness(1.04);

    box-shadow:
      0 10px 25px
        ${({$accent:e})=>`${e}55`};
  }

  &:active {
    transform:
      translateY(0)
      scale(0.97);
  }

  @media screen and (min-width: 564px) {
    width: 105px;
    height: 41px;
    font-size: 15px;
  }

  @media screen and (min-width: 1160px) {
    width: 115px;
    height: 44px;
    font-size: 16px;
  }
`,Yx=q.p`
  ${Bx}

  animation-delay: 0.40s;

  margin: 17px 0 0;

  color: #888888;

  font-size: 12px;

  text-align: center;

  @media screen and (min-width: 564px) {
    margin-top: 21px;
    font-size: 13px;
  }

  @media screen and (min-width: 1160px) {
    margin-top: 24px;
    font-size: 14px;
  }
`,Xx=q.a`
  color: ${({$accent:e})=>e};

  font-weight: 700;

  text-decoration: none;

  transition:
    filter 0.2s ease,
    text-shadow 0.2s ease;

  &:hover {
    filter: brightness(0.85);

    text-shadow:
      0 0 12px
        ${({$accent:e})=>`${e}55`};
  }
`,Zx=q.div`
  ${Bx}

  animation-delay: 0.26s;

  position: relative;

  width: 100%;
`,Qx=q.button`
  position: absolute;

  top: 50%;
  right: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  padding: 0;

  border: none;

  background: transparent;

  color: ${({$dark:e})=>e?`#888888`:`#777777`};

  cursor: pointer;

  transform: translateY(-50%);

  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: ${({$accent:e})=>e};

    transform:
      translateY(-50%)
      scale(1.08);
  }

  svg {
    width: 19px;
    height: 19px;
  }

  @media screen and (min-width: 564px) {
    right: 14px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;function $x({onClose:e,onSubmit:t,darkMode:n}){let[r,i]=(0,B.useState)(!1),[a,o]=(0,B.useState)(()=>localStorage.getItem(`accentColor`)||`#ffb36c`),s=Yb({initialValues:{username:``,email:``,password:``},onSubmit:(n,{resetForm:r})=>{if(n.password.length<8){Ix.error(`Password must contain at least 8 characters!`);return}t?t(n):(localStorage.setItem(`weatherUser`,JSON.stringify(n)),Ix.success(`Registration successful!`)),r(),e()}});return(0,J.jsx)(Vx,{$dark:n,$accent:a,onClick:t=>{t.target===t.currentTarget&&e()},children:(0,J.jsxs)(Hx,{$dark:n,$accent:a,children:[(0,J.jsx)(Ux,{$accent:a,$position:`top`}),(0,J.jsx)(Ux,{$accent:a,$position:`bottom`}),(0,J.jsx)(Ux,{$accent:a,$position:`center`}),(0,J.jsx)(Wx,{$dark:n,$accent:a,type:`button`,onClick:e,"aria-label":`Close`,children:(0,J.jsx)(tr,{size:24})}),(0,J.jsx)(Gx,{$dark:n,$accent:a,children:`Sign up`}),(0,J.jsxs)(Kx,{onSubmit:s.handleSubmit,children:[(0,J.jsx)(qx,{$dark:n,$accent:a,type:`text`,name:`username`,placeholder:`Username`,value:s.values.username,onChange:s.handleChange,required:!0}),(0,J.jsx)(qx,{$dark:n,$accent:a,type:`email`,name:`email`,placeholder:`E-Mail`,value:s.values.email,onChange:s.handleChange,required:!0}),(0,J.jsxs)(Zx,{children:[(0,J.jsx)(qx,{$dark:n,$accent:a,type:r?`text`:`password`,name:`password`,placeholder:`Password`,value:s.values.password,onChange:s.handleChange,minLength:8,required:!0}),(0,J.jsx)(Qx,{$dark:n,$accent:a,type:`button`,onClick:()=>i(e=>!e),"aria-label":r?`Hide password`:`Show password`,children:r?(0,J.jsx)(dr,{}):(0,J.jsx)(ur,{})})]}),(0,J.jsx)(Jx,{$accent:a,type:`submit`,children:`Sign up`})]}),(0,J.jsxs)(Yx,{$dark:n,children:[`Already have an account?`,` `,(0,J.jsx)(Xx,{$dark:n,$accent:a,href:`#login`,children:`Log In`})]})]})})}var eS=`
  opacity: 0;
  transform: translateY(12px);
  animation: profileItemAppear 0.55s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
`,tS=q.div`
  position: fixed;
  inset: 0;

  z-index: 1100;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  box-sizing: border-box;

  background: ${({$dark:e})=>e?`rgba(0, 0, 0, 0.32)`:`rgba(17, 17, 17, 0.18)`};

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  animation: overlayAppear 0.3s ease;

  @keyframes overlayAppear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`,nS=q.div`
  position: relative;
  isolation: isolate;
  width: 100%;
  max-width: 350px;

  padding: 21px 25px;

  box-sizing: border-box;

  background: ${({$dark:e})=>e?`rgba(25, 25, 25, 0.55)`:`rgba(255, 255, 255, 0.5)`};

  backdrop-filter: blur(24px) saturate(150%);
  -webkit-backdrop-filter: blur(24px) saturate(150%);

  border: 1px solid
    ${({$dark:e})=>e?`rgba(255, 255, 255, 0.14)`:`rgba(255, 255, 255, 0.7)`};

  border-radius: 18px;

box-shadow:
  0 25px 70px rgba(0, 0, 0, 0.25),
  0 0 40px
    ${({$accent:e})=>`${e}35`},
  inset 0 1px 1px
    rgba(255, 255, 255, 0.25);

  overflow: hidden;

  animation:
    profileAppear 0.35s
    cubic-bezier(0.22, 1, 0.36, 1);

  @keyframes profileAppear {
    from {
      opacity: 0;
      transform:
        translateY(18px)
        scale(0.96);
      filter: blur(5px);
    }

    to {
      opacity: 1;
      transform:
        translateY(0)
        scale(1);
      filter: blur(0);
    }
  }

  @keyframes profileItemAppear {
    from {
      opacity: 0;
      transform:
        translateY(12px)
        scale(0.985);
    }

    to {
      opacity: 1;
      transform:
        translateY(0)
        scale(1);
    }
  }

  &::before {
    content: "";

    position: absolute;
    inset: 0;

    pointer-events: none;

    background:
      linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.2),
        transparent 35%,
        transparent 70%,
        rgba(255, 255, 255, 0.05)
      );

    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media screen and (min-width: 564px) {
    max-width: 370px;
    padding: 20px 25px;
  }

  @media screen and (min-width: 1160px) {
    max-width: 450px;
    padding: 32px 36px;
    border-radius: 22px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;

    &::after {
      animation: none;
    }

    > div:first-of-type::before {
      animation: none;
    }

    > * {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    }
  }
`,rS=q.div`
  position: absolute;

  width: 240px;
  height: 240px;

  border-radius: 50%;

  background: ${({$accent:e})=>`
    radial-gradient(
      circle,
      ${e}d9 0%,
      ${e}a8 22%,
      ${e}70 45%,
      ${e}35 68%,
      transparent 100%
    )
  `};

  filter: blur(20px);

  opacity: 1;

  pointer-events: none;

  z-index: 0 !important;

  mix-blend-mode: screen;

  transition:
    background 0.8s ease,
    opacity 0.5s ease,
    filter 0.5s ease;

  animation:
    profileBubbleFloat 8s ease-in-out infinite;

  ${({$position:e})=>e===`top`&&`
      top: -105px;
      right: -85px;

      width: 250px;
      height: 250px;

      animation-delay: 0s;
    `}

  ${({$position:e})=>e===`bottom`&&`
      bottom: -105px;
      left: -85px;

      width: 230px;
      height: 230px;

      animation-delay: -2.5s;
    `}

  ${({$position:e})=>e===`center`&&`
      top: 38%;
      left: 40%;

      width: 170px;
      height: 170px;

      opacity: 0.8;

      animation-delay: -5s;
    `}

  @keyframes profileBubbleFloat {
    0%,
    100% {
      transform:
        translate3d(0, 0, 0)
        scale(1);
    }

    25% {
      transform:
        translate3d(-20px, 16px, 0)
        scale(1.08);
    }

    50% {
      transform:
        translate3d(18px, 28px, 0)
        scale(0.94);
    }

    75% {
      transform:
        translate3d(28px, -16px, 0)
        scale(1.06);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
`,iS=q.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 29px;
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 1px solid
    rgba(255, 255, 255, 0.12);

  border-radius: 50%;
  background: ${({$dark:e})=>e?`rgba(255,255,255,0.08)`:`rgba(255,255,255,0.45)`};

  color: ${({$dark:e})=>e?`#ffffff`:`#333333`};
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: ${({theme:e})=>`${e.button}35`};

    color: ${({theme:e})=>e.text};

    transform: rotate(90deg);

    box-shadow:
      0 0 15px
        ${({theme:e})=>`${e.button}35`};
  }

  &:active {
    transform: scale(0.9);
  }

  svg {
    width: 17px;
    height: 17px;
  }

  @media screen and (min-width: 1160px) {
    top: 14px;
    right: 14px;

    width: 34px;
    height: 34px;
  }
`,aS=q.h2`
  ${eS}

  animation-delay: 0.08s;

  margin: 0 0 13px;

  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  font-size: 23px;
  font-weight: 800;

  letter-spacing: -0.5px;

  text-align: center;

  text-shadow:
    0 0 8px ${({$accent:e})=>`${e}80`},
    0 0 20px ${({$accent:e})=>`${e}65`},
    0 0 40px ${({$accent:e})=>`${e}45`},
    0 0 70px ${({$accent:e})=>`${e}25`};

  transition:
    color 0.5s ease,
    text-shadow 0.6s ease;

  @media screen and (min-width: 1160px) {
    margin-bottom: 20px;

    font-size: 29px;
  }
`,oS=q.div`
  ${eS}

  animation-delay: 0.14s;

  position: relative;

  width: 76px;
  height: 76px;

  margin: 0 auto 13px;

  &::before {
    content: "";

    position: absolute;

    inset: -6px;

    border-radius: 50%;

    background:
      ${({theme:e})=>`${e.button}35`};

    filter: blur(8px);

    animation:
      avatarGlow 3s
      ease-in-out infinite;
  }

  @keyframes avatarGlow {
    0%,
    100% {
      opacity: 0.5;
      transform: scale(0.95);
    }

    50% {
      opacity: 0.9;
      transform: scale(1.05);
    }
  }

  @media screen and (min-width: 564px) {
    width: 80px;
    height: 80px;
  }

  @media screen and (min-width: 1160px) {
    width: 105px;
    height: 105px;

    margin-bottom: 20px;
  }
`,sS=q.img`
  position: relative;

  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  border: 3px solid
    ${({$dark:e})=>e?`rgba(255,255,255,0.18)`:`rgba(255,255,255,0.8)`};

  border-radius: 50%;

  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.18);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.04);

    box-shadow:
      0 10px 30px
        ${({theme:e})=>`${e.button}40`};
  }
`,cS=q.div`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background:
    ${({theme:e})=>`linear-gradient(
        135deg,
        ${e.button},
        ${e.button}bb
      )`};

  color: #111111;

  font-size: 30px;
  font-weight: 800;

  box-shadow:
    0 8px 25px
      ${({theme:e})=>`${e.button}40`};

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.04);

    box-shadow:
      0 12px 30px
        ${({theme:e})=>`${e.button}55`};
  }

  @media screen and (min-width: 1160px) {
    font-size: 42px;
  }
`,lS=q.label`
  position: absolute;

  right: -2px;
  bottom: -2px;

  width: 27px;
  height: 27px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid
    ${({$dark:e})=>e?`#202020`:`#ffffff`};

  border-radius: 50%;

  background:
    ${({theme:e})=>e.button};

  color: #111111;

  cursor: pointer;

  box-shadow:
    0 5px 15px
      rgba(0, 0, 0, 0.18);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform:
      scale(1.12)
      rotate(8deg);

    box-shadow:
      0 7px 20px
        ${({theme:e})=>`${e.button}55`};
  }

  &:active {
    transform: scale(0.95);
  }
`,uS=q.input`
  display: none;
`,dS=q.div`
  display: flex;
  flex-direction: column;

  gap: 6px;

  animation: profileInfoAppear 0.55s
    cubic-bezier(0.22, 1, 0.36, 1)
    0.20s both;

  @keyframes profileInfoAppear {
    from {
      opacity: 0;
      transform: translateY(12px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (min-width: 1160px) {
    gap: 10px;
  }
`,fS=q.div`
  padding: 8px 10px;

  border: 1px solid
    ${({$dark:e})=>e?`rgba(255,255,255,0.09)`:`rgba(255,255,255,0.65)`};

  border-radius: 9px;

  background:
    ${({$dark:e})=>e?`rgba(255,255,255,0.045)`:`rgba(255,255,255,0.32)`};

  backdrop-filter: blur(10px);

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    background:
      ${({theme:e})=>`${e.button}12`};

    border-color:
      ${({theme:e})=>`${e.button}70`};

    transform: translateY(-2px);

    box-shadow:
      0 8px 20px
        rgba(0, 0, 0, 0.08);
  }

  @media screen and (min-width: 1160px) {
    padding: 12px 14px;
    border-radius: 11px;
  }
`,pS=q.div`
  margin-bottom: 2px;

  color: ${({$dark:e})=>e?`#777777`:`#888888`};

  font-size: 9px;
  font-weight: 600;

  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media screen and (min-width: 1160px) {
    font-size: 10px;
  }
`,mS=q.div`
  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  font-size: 12px;
  font-weight: 600;

  word-break: break-word;

  @media screen and (min-width: 1160px) {
    font-size: 14px;
  }
`,hS=q.input`
  width: 100%;
  height: 33px;

  padding: 0 9px;

  border: 1px solid
    ${({$dark:e})=>e?`rgba(255,255,255,0.12)`:`rgba(255,255,255,0.7)`};

  border-radius: 7px;

  outline: none;

  background:
    ${({$dark:e})=>e?`rgba(255,255,255,0.06)`:`rgba(255,255,255,0.5)`};

  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  backdrop-filter: blur(10px);

  font-size: 12px;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;

  &:focus {
    border-color:
      ${({theme:e})=>e.button};

    box-shadow:
      0 0 0 3px
        ${({theme:e})=>`${e.button}22`},
      0 0 18px
        ${({theme:e})=>`${e.button}12`};

    background:
      ${({$dark:e})=>e?`rgba(255,255,255,0.09)`:`rgba(255,255,255,0.7)`};
  }

  @media screen and (min-width: 1160px) {
    height: 42px;
    font-size: 14px;
    padding: 0 12px;
  }
`,gS=q.button`
  ${eS}

  animation-delay: 0.30s;

  width: 100%;
  height: 35px;

  margin-top: 10px;

  border: none;

  border-radius: 8px;

  background:
    ${({theme:e})=>e.button};

  color: #111111;

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);

    box-shadow:
      0 8px 22px
        ${({theme:e})=>`${e.button}45`};
  }

  &:active {
    transform: scale(0.98);
  }

  @media screen and (min-width: 1160px) {
    height: 42px;
    font-size: 14px;
  }
`,_S=q(gS)`
  margin-top: 9px;
`,vS=q.button`
  ${eS}

  animation-delay: 0.44s;

  width: 100%;
  height: 35px;

  margin-top: 6px;

  border: 1px solid
    rgba(255, 107, 107, 0.55);

  border-radius: 8px;

  background:
    rgba(255, 107, 107, 0.06);

  color: ${({$dark:e})=>e?`#ff8585`:`#ff5c5c`};

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  backdrop-filter: blur(10px);

  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease;

  &:hover {
    background:
      rgba(255, 107, 107, 0.9);

    color: #ffffff;

    transform: translateY(-1px);

    box-shadow:
      0 8px 20px
        rgba(255, 107, 107, 0.25);
  }

  &:active {
    transform: scale(0.98);
  }

  @media screen and (min-width: 1160px) {
    height: 42px;
    font-size: 14px;
  }
`,yS=q.div`
  position: relative;

  width: 100%;
`,bS=q.button`
  position: absolute;

  top: 50%;
  right: 8px;

  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;

  background: transparent;

  color: ${({$dark:e})=>e?`#888888`:`#777777`};

  cursor: pointer;

  transform: translateY(-50%);

  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color:
      ${({theme:e})=>e.button};

    transform:
      translateY(-50%)
      scale(1.08);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,xS=q.button`
  ${eS}

  animation-delay: 0.37s;

  width: 100%;
  height: 35px;

  margin-top: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 6px;

  border: 1px solid
    ${({theme:e})=>`${e.button}80`};

  border-radius: 8px;

  background:
    ${({theme:e})=>`${e.button}0d`};

  color:
    ${({theme:e})=>e.text};

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  backdrop-filter: blur(10px);

  transition:
    background 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease;

  &:hover {
    background:
      ${({theme:e})=>e.button};

    color: #111111;

    transform: translateY(-2px);

    box-shadow:
      0 8px 20px
        ${({theme:e})=>`${e.button}40`};
  }

  &:active {
    transform: scale(0.98);
  }

  @media screen and (min-width: 1160px) {
    height: 42px;
    font-size: 14px;
  }
`,SS=localStorage.getItem(`accentColor`)||`#ffb36c`;function CS({onClose:e,onAvatarChange:t,onUserUpdate:n,onLogout:r,darkMode:i,onOpenColor:a}){let o=JSON.parse(localStorage.getItem(`weatherUser`))||{},[s,c]=(0,B.useState)(!1),[l,u]=(0,B.useState)(o),[d,f]=(0,B.useState)(localStorage.getItem(`weatherAvatar`)||null),[p,m]=(0,B.useState)(!1),[h,g]=(0,B.useState)({username:o.username||``,email:o.email||``,password:o.password||``}),_=e=>{let n=e.target.files[0];if(!n)return;if(!n.type.startsWith(`image/`)){Ix.error(`Please select an image`);return}let r=new FileReader;r.onloadend=()=>{let e=r.result;localStorage.setItem(`weatherAvatar`,e),f(e),t&&t(e),Ix.success(`Avatar updated!`)},r.readAsDataURL(n)},v=e=>{let{name:t,value:n}=e.target;g(e=>({...e,[t]:n}))};return(0,J.jsx)(tS,{$dark:i,onClick:t=>{t.target===t.currentTarget&&e()},children:(0,J.jsxs)(nS,{$dark:i,children:[(0,J.jsx)(rS,{$accent:SS,$position:`top`}),(0,J.jsx)(rS,{$accent:SS,$position:`bottom`}),(0,J.jsx)(rS,{$accent:SS,$position:`center`}),(0,J.jsx)(iS,{$dark:i,type:`button`,onClick:e,"aria-label":`Close`,children:(0,J.jsx)(tr,{size:24})}),(0,J.jsx)(aS,{$dark:i,$accent:SS,children:`My profile`}),(0,J.jsxs)(oS,{children:[d?(0,J.jsx)(sS,{src:d,alt:`Profile avatar`}):(0,J.jsx)(cS,{children:l.username?.charAt(0).toUpperCase()||`U`}),(0,J.jsx)(lS,{$dark:i,htmlFor:`avatar-upload`,children:(0,J.jsx)(_r,{size:18})}),(0,J.jsx)(uS,{id:`avatar-upload`,type:`file`,accept:`image/*`,onChange:_})]}),(0,J.jsxs)(dS,{children:[(0,J.jsxs)(fS,{$dark:i,children:[(0,J.jsx)(pS,{$dark:i,children:`Username`}),p?(0,J.jsx)(hS,{$dark:i,type:`text`,name:`username`,value:h.username,onChange:v,placeholder:`Username`}):(0,J.jsx)(mS,{$dark:i,children:l.username||`—`})]}),(0,J.jsxs)(fS,{$dark:i,children:[(0,J.jsx)(pS,{$dark:i,children:`E-Mail`}),p?(0,J.jsx)(hS,{$dark:i,type:`email`,name:`email`,value:h.email,onChange:v,placeholder:`E-Mail`}):(0,J.jsx)(mS,{$dark:i,children:l.email||`—`})]}),(0,J.jsxs)(fS,{$dark:i,children:[(0,J.jsx)(pS,{$dark:i,children:`Password`}),p?(0,J.jsxs)(yS,{children:[(0,J.jsx)(hS,{$dark:i,type:s?`text`:`password`,name:`password`,value:h.password,onChange:v,placeholder:`Password`}),(0,J.jsx)(bS,{$dark:i,type:`button`,onClick:()=>c(e=>!e),"aria-label":s?`Hide password`:`Show password`,children:s?(0,J.jsx)(dr,{}):(0,J.jsx)(ur,{})})]}):(0,J.jsx)(mS,{$dark:i,children:l.password?`•`.repeat(l.password.length):`—`})]})]}),p?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(_S,{type:`button`,onClick:()=>{if(!h.username.trim()||!h.email.trim()||!h.password.trim()){Ix.error(`Please fill in all fields`);return}let e={username:h.username.trim(),email:h.email.trim(),password:h.password};localStorage.setItem(`weatherUser`,JSON.stringify(e)),u(e),n&&n(e),m(!1),Ix.success(`Profile updated!`)},children:[(0,J.jsx)(gr,{size:18}),`Save changes`]}),(0,J.jsx)(gS,{type:`button`,onClick:()=>{g({username:l.username||``,email:l.email||``,password:l.password||``}),m(!1)},children:`Cancel`})]}):(0,J.jsxs)(gS,{type:`button`,onClick:()=>m(!0),children:[(0,J.jsx)(fr,{size:18}),`Edit profile`]}),(0,J.jsxs)(xS,{type:`button`,onClick:a,children:[(0,J.jsx)(pr,{size:18}),`Change color`]}),(0,J.jsx)(vS,{type:`button`,onClick:()=>{r&&r()},$dark:i,children:`Log out`})]})})}function wS(e,t){let n=(0,B.useRef)(t);(0,B.useEffect)(function(){t!==n.current&&e.attributionControl!=null&&(n.current!=null&&e.attributionControl.removeAttribution(n.current),t!=null&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}function TS(e){return Object.freeze({__version:1,map:e})}function ES(e,t){return Object.freeze({...e,...t})}var DS=(0,B.createContext)(null);function OS(){let e=(0,B.use)(DS);if(e==null)throw Error(`No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>`);return e}var kS=m();function AS(e){function t(t,n){let{instance:r,context:i}=e(t).current;(0,B.useImperativeHandle)(n,()=>r);let{children:a}=t;return a==null?null:B.createElement(DS,{value:i},a)}return(0,B.forwardRef)(t)}function jS(e){function t(t,n){let[r,i]=(0,B.useState)(!1),{instance:a}=e(t,i).current;(0,B.useImperativeHandle)(n,()=>a),(0,B.useEffect)(function(){r&&a.update()},[a,r,t.children]);let o=a._contentNode;return o?(0,kS.createPortal)(t.children,o):null}return(0,B.forwardRef)(t)}function MS(e){function t(t,n){let{instance:r}=e(t).current;return(0,B.useImperativeHandle)(n,()=>r),null}return(0,B.forwardRef)(t)}function NS(e,t){let n=(0,B.useRef)(void 0);(0,B.useEffect)(function(){return t!=null&&e.instance.on(t),n.current=t,function(){n.current!=null&&e.instance.off(n.current),n.current=null}},[e,t])}function PS(e,t){let n=e.pane??t.pane;return n?{...e,pane:n}:e}function FS(e,t){return function(n,r){let i=OS(),a=e(PS(n,i),i);return wS(i.map,n.attribution),NS(a.current,n.eventHandlers),t(a.current,i,n,r),a}}var IS=o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?r(e):typeof define==`function`&&define.amd?define([`exports`],r):(n=typeof globalThis<`u`?globalThis:n||self,r(n.leaflet={}))})(e,(function(e){var t=`1.9.4`;function n(e){var t,n,r,i;for(n=1,r=arguments.length;n<r;n++)for(t in i=arguments[n],i)e[t]=i[t];return e}var r=Object.create||(function(){function e(){}return function(t){return e.prototype=t,new e}})();function i(e,t){var n=Array.prototype.slice;if(e.bind)return e.bind.apply(e,n.call(arguments,1));var r=n.call(arguments,2);return function(){return e.apply(t,r.length?r.concat(n.call(arguments)):arguments)}}var a=0;function o(e){return`_leaflet_id`in e||(e._leaflet_id=++a),e._leaflet_id}function s(e,t,n){var r,i,a,o=function(){r=!1,i&&=(a.apply(n,i),!1)};return a=function(){r?i=arguments:(e.apply(n,arguments),setTimeout(o,t),r=!0)},a}function c(e,t,n){var r=t[1],i=t[0],a=r-i;return e===r&&n?e:((e-i)%a+a)%a+i}function l(){return!1}function u(e,t){if(t===!1)return e;var n=10**(t===void 0?6:t);return Math.round(e*n)/n}function d(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,``)}function f(e){return d(e).split(/\s+/)}function p(e,t){for(var n in Object.prototype.hasOwnProperty.call(e,`options`)||(e.options=e.options?r(e.options):{}),t)e.options[n]=t[n];return e.options}function m(e,t,n){var r=[];for(var i in e)r.push(encodeURIComponent(n?i.toUpperCase():i)+`=`+encodeURIComponent(e[i]));return(!t||t.indexOf(`?`)===-1?`?`:`&`)+r.join(`&`)}var h=/\{ *([\w_ -]+) *\}/g;function g(e,t){return e.replace(h,function(e,n){var r=t[n];if(r===void 0)throw Error(`No value provided for variable `+e);return typeof r==`function`&&(r=r(t)),r})}var _=Array.isArray||function(e){return Object.prototype.toString.call(e)===`[object Array]`};function v(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1}var y=`data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`;function b(e){return window[`webkit`+e]||window[`moz`+e]||window[`ms`+e]}var x=0;function S(e){var t=+new Date,n=Math.max(0,16-(t-x));return x=t+n,window.setTimeout(e,n)}var C=window.requestAnimationFrame||b(`RequestAnimationFrame`)||S,w=window.cancelAnimationFrame||b(`CancelAnimationFrame`)||b(`CancelRequestAnimationFrame`)||function(e){window.clearTimeout(e)};function T(e,t,n){if(n&&C===S)e.call(t);else return C.call(window,i(e,t))}function E(e){e&&w.call(window,e)}var ee={__proto__:null,extend:n,create:r,bind:i,get lastId(){return a},stamp:o,throttle:s,wrapNum:c,falseFn:l,formatNum:u,trim:d,splitWords:f,setOptions:p,getParamString:m,template:g,isArray:_,indexOf:v,emptyImageUrl:y,requestFn:C,cancelFn:w,requestAnimFrame:T,cancelAnimFrame:E};function D(){}D.extend=function(e){var t=function(){p(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=t.__super__=this.prototype,a=r(i);for(var o in a.constructor=t,t.prototype=a,this)Object.prototype.hasOwnProperty.call(this,o)&&o!==`prototype`&&o!==`__super__`&&(t[o]=this[o]);return e.statics&&n(t,e.statics),e.includes&&(te(e.includes),n.apply(null,[a].concat(e.includes))),n(a,e),delete a.statics,delete a.includes,a.options&&(a.options=i.options?r(i.options):{},n(a.options,e.options)),a._initHooks=[],a.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var e=0,t=a._initHooks.length;e<t;e++)a._initHooks[e].call(this)}},t},D.include=function(e){var t=this.prototype.options;return n(this.prototype,e),e.options&&(this.prototype.options=t,this.mergeOptions(e.options)),this},D.mergeOptions=function(e){return n(this.prototype.options,e),this},D.addInitHook=function(e){var t=Array.prototype.slice.call(arguments,1),n=typeof e==`function`?e:function(){this[e].apply(this,t)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(n),this};function te(e){if(!(typeof L>`u`||!L||!L.Mixin)){e=_(e)?e:[e];for(var t=0;t<e.length;t++)e[t]===L.Mixin.Events&&console.warn(`Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.`,Error().stack)}}var ne={on:function(e,t,n){if(typeof e==`object`)for(var r in e)this._on(r,e[r],t);else{e=f(e);for(var i=0,a=e.length;i<a;i++)this._on(e[i],t,n)}return this},off:function(e,t,n){if(!arguments.length)delete this._events;else if(typeof e==`object`)for(var r in e)this._off(r,e[r],t);else{e=f(e);for(var i=arguments.length===1,a=0,o=e.length;a<o;a++)i?this._off(e[a]):this._off(e[a],t,n)}return this},_on:function(e,t,n,r){if(typeof t!=`function`){console.warn(`wrong listener type: `+typeof t);return}if(this._listens(e,t,n)===!1){n===this&&(n=void 0);var i={fn:t,ctx:n};r&&(i.once=!0),this._events=this._events||{},this._events[e]=this._events[e]||[],this._events[e].push(i)}},_off:function(e,t,n){var r,i,a;if(this._events&&(r=this._events[e],r)){if(arguments.length===1){if(this._firingCount)for(i=0,a=r.length;i<a;i++)r[i].fn=l;delete this._events[e];return}if(typeof t!=`function`){console.warn(`wrong listener type: `+typeof t);return}var o=this._listens(e,t,n);if(o!==!1){var s=r[o];this._firingCount&&(s.fn=l,this._events[e]=r=r.slice()),r.splice(o,1)}}},fire:function(e,t,r){if(!this.listens(e,r))return this;var i=n({},t,{type:e,target:this,sourceTarget:t&&t.sourceTarget||this});if(this._events){var a=this._events[e];if(a){this._firingCount=this._firingCount+1||1;for(var o=0,s=a.length;o<s;o++){var c=a[o],l=c.fn;c.once&&this.off(e,l,c.ctx),l.call(c.ctx||this,i)}this._firingCount--}}return r&&this._propagateEvent(i),this},listens:function(e,t,n,r){typeof e!=`string`&&console.warn(`"string" type argument expected`);var i=t;typeof t!=`function`&&(r=!!t,i=void 0,n=void 0);var a=this._events&&this._events[e];if(a&&a.length&&this._listens(e,i,n)!==!1)return!0;if(r){for(var o in this._eventParents)if(this._eventParents[o].listens(e,t,n,r))return!0}return!1},_listens:function(e,t,n){if(!this._events)return!1;var r=this._events[e]||[];if(!t)return!!r.length;n===this&&(n=void 0);for(var i=0,a=r.length;i<a;i++)if(r[i].fn===t&&r[i].ctx===n)return i;return!1},once:function(e,t,n){if(typeof e==`object`)for(var r in e)this._on(r,e[r],t,!0);else{e=f(e);for(var i=0,a=e.length;i<a;i++)this._on(e[i],t,n,!0)}return this},addEventParent:function(e){return this._eventParents=this._eventParents||{},this._eventParents[o(e)]=e,this},removeEventParent:function(e){return this._eventParents&&delete this._eventParents[o(e)],this},_propagateEvent:function(e){for(var t in this._eventParents)this._eventParents[t].fire(e.type,n({layer:e.target,propagatedFrom:e.target},e),!0)}};ne.addEventListener=ne.on,ne.removeEventListener=ne.clearAllEventListeners=ne.off,ne.addOneTimeEventListener=ne.once,ne.fireEvent=ne.fire,ne.hasEventListeners=ne.listens;var re=D.extend(ne);function O(e,t,n){this.x=n?Math.round(e):e,this.y=n?Math.round(t):t}var k=Math.trunc||function(e){return e>0?Math.floor(e):Math.ceil(e)};O.prototype={clone:function(){return new O(this.x,this.y)},add:function(e){return this.clone()._add(A(e))},_add:function(e){return this.x+=e.x,this.y+=e.y,this},subtract:function(e){return this.clone()._subtract(A(e))},_subtract:function(e){return this.x-=e.x,this.y-=e.y,this},divideBy:function(e){return this.clone()._divideBy(e)},_divideBy:function(e){return this.x/=e,this.y/=e,this},multiplyBy:function(e){return this.clone()._multiplyBy(e)},_multiplyBy:function(e){return this.x*=e,this.y*=e,this},scaleBy:function(e){return new O(this.x*e.x,this.y*e.y)},unscaleBy:function(e){return new O(this.x/e.x,this.y/e.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=k(this.x),this.y=k(this.y),this},distanceTo:function(e){e=A(e);var t=e.x-this.x,n=e.y-this.y;return Math.sqrt(t*t+n*n)},equals:function(e){return e=A(e),e.x===this.x&&e.y===this.y},contains:function(e){return e=A(e),Math.abs(e.x)<=Math.abs(this.x)&&Math.abs(e.y)<=Math.abs(this.y)},toString:function(){return`Point(`+u(this.x)+`, `+u(this.y)+`)`}};function A(e,t,n){return e instanceof O?e:_(e)?new O(e[0],e[1]):e==null?e:typeof e==`object`&&`x`in e&&`y`in e?new O(e.x,e.y):new O(e,t,n)}function j(e,t){if(e)for(var n=t?[e,t]:e,r=0,i=n.length;r<i;r++)this.extend(n[r])}j.prototype={extend:function(e){var t,n;if(!e)return this;if(e instanceof O||typeof e[0]==`number`||`x`in e)t=n=A(e);else if(e=M(e),t=e.min,n=e.max,!t||!n)return this;return!this.min&&!this.max?(this.min=t.clone(),this.max=n.clone()):(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(n.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(n.y,this.max.y)),this},getCenter:function(e){return A((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,e)},getBottomLeft:function(){return A(this.min.x,this.max.y)},getTopRight:function(){return A(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(e){var t,n;return e=typeof e[0]==`number`||e instanceof O?A(e):M(e),e instanceof j?(t=e.min,n=e.max):t=n=e,t.x>=this.min.x&&n.x<=this.max.x&&t.y>=this.min.y&&n.y<=this.max.y},intersects:function(e){e=M(e);var t=this.min,n=this.max,r=e.min,i=e.max,a=i.x>=t.x&&r.x<=n.x,o=i.y>=t.y&&r.y<=n.y;return a&&o},overlaps:function(e){e=M(e);var t=this.min,n=this.max,r=e.min,i=e.max,a=i.x>t.x&&r.x<n.x,o=i.y>t.y&&r.y<n.y;return a&&o},isValid:function(){return!!(this.min&&this.max)},pad:function(e){var t=this.min,n=this.max,r=Math.abs(t.x-n.x)*e,i=Math.abs(t.y-n.y)*e;return M(A(t.x-r,t.y-i),A(n.x+r,n.y+i))},equals:function(e){return e?(e=M(e),this.min.equals(e.getTopLeft())&&this.max.equals(e.getBottomRight())):!1}};function M(e,t){return!e||e instanceof j?e:new j(e,t)}function N(e,t){if(e)for(var n=t?[e,t]:e,r=0,i=n.length;r<i;r++)this.extend(n[r])}N.prototype={extend:function(e){var t=this._southWest,n=this._northEast,r,i;if(e instanceof F)r=e,i=e;else if(e instanceof N){if(r=e._southWest,i=e._northEast,!r||!i)return this}else return e?this.extend(I(e)||P(e)):this;return!t&&!n?(this._southWest=new F(r.lat,r.lng),this._northEast=new F(i.lat,i.lng)):(t.lat=Math.min(r.lat,t.lat),t.lng=Math.min(r.lng,t.lng),n.lat=Math.max(i.lat,n.lat),n.lng=Math.max(i.lng,n.lng)),this},pad:function(e){var t=this._southWest,n=this._northEast,r=Math.abs(t.lat-n.lat)*e,i=Math.abs(t.lng-n.lng)*e;return new N(new F(t.lat-r,t.lng-i),new F(n.lat+r,n.lng+i))},getCenter:function(){return new F((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new F(this.getNorth(),this.getWest())},getSouthEast:function(){return new F(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(e){e=typeof e[0]==`number`||e instanceof F||`lat`in e?I(e):P(e);var t=this._southWest,n=this._northEast,r,i;return e instanceof N?(r=e.getSouthWest(),i=e.getNorthEast()):r=i=e,r.lat>=t.lat&&i.lat<=n.lat&&r.lng>=t.lng&&i.lng<=n.lng},intersects:function(e){e=P(e);var t=this._southWest,n=this._northEast,r=e.getSouthWest(),i=e.getNorthEast(),a=i.lat>=t.lat&&r.lat<=n.lat,o=i.lng>=t.lng&&r.lng<=n.lng;return a&&o},overlaps:function(e){e=P(e);var t=this._southWest,n=this._northEast,r=e.getSouthWest(),i=e.getNorthEast(),a=i.lat>t.lat&&r.lat<n.lat,o=i.lng>t.lng&&r.lng<n.lng;return a&&o},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(`,`)},equals:function(e,t){return e?(e=P(e),this._southWest.equals(e.getSouthWest(),t)&&this._northEast.equals(e.getNorthEast(),t)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function P(e,t){return e instanceof N?e:new N(e,t)}function F(e,t,n){if(isNaN(e)||isNaN(t))throw Error(`Invalid LatLng object: (`+e+`, `+t+`)`);this.lat=+e,this.lng=+t,n!==void 0&&(this.alt=+n)}F.prototype={equals:function(e,t){return e?(e=I(e),Math.max(Math.abs(this.lat-e.lat),Math.abs(this.lng-e.lng))<=(t===void 0?1e-9:t)):!1},toString:function(e){return`LatLng(`+u(this.lat,e)+`, `+u(this.lng,e)+`)`},distanceTo:function(e){return ae.distance(this,I(e))},wrap:function(){return ae.wrapLatLng(this)},toBounds:function(e){var t=180*e/40075017,n=t/Math.cos(Math.PI/180*this.lat);return P([this.lat-t,this.lng-n],[this.lat+t,this.lng+n])},clone:function(){return new F(this.lat,this.lng,this.alt)}};function I(e,t,n){return e instanceof F?e:_(e)&&typeof e[0]!=`object`?e.length===3?new F(e[0],e[1],e[2]):e.length===2?new F(e[0],e[1]):null:e==null?e:typeof e==`object`&&`lat`in e?new F(e.lat,`lng`in e?e.lng:e.lon,e.alt):t===void 0?null:new F(e,t,n)}var ie={latLngToPoint:function(e,t){var n=this.projection.project(e),r=this.scale(t);return this.transformation._transform(n,r)},pointToLatLng:function(e,t){var n=this.scale(t),r=this.transformation.untransform(e,n);return this.projection.unproject(r)},project:function(e){return this.projection.project(e)},unproject:function(e){return this.projection.unproject(e)},scale:function(e){return 256*2**e},zoom:function(e){return Math.log(e/256)/Math.LN2},getProjectedBounds:function(e){if(this.infinite)return null;var t=this.projection.bounds,n=this.scale(e);return new j(this.transformation.transform(t.min,n),this.transformation.transform(t.max,n))},infinite:!1,wrapLatLng:function(e){var t=this.wrapLng?c(e.lng,this.wrapLng,!0):e.lng,n=this.wrapLat?c(e.lat,this.wrapLat,!0):e.lat,r=e.alt;return new F(n,t,r)},wrapLatLngBounds:function(e){var t=e.getCenter(),n=this.wrapLatLng(t),r=t.lat-n.lat,i=t.lng-n.lng;if(r===0&&i===0)return e;var a=e.getSouthWest(),o=e.getNorthEast();return new N(new F(a.lat-r,a.lng-i),new F(o.lat-r,o.lng-i))}},ae=n({},ie,{wrapLng:[-180,180],R:6371e3,distance:function(e,t){var n=Math.PI/180,r=e.lat*n,i=t.lat*n,a=Math.sin((t.lat-e.lat)*n/2),o=Math.sin((t.lng-e.lng)*n/2),s=a*a+Math.cos(r)*Math.cos(i)*o*o,c=2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s));return this.R*c}}),R=6378137,oe={R,MAX_LATITUDE:85.0511287798,project:function(e){var t=Math.PI/180,n=this.MAX_LATITUDE,r=Math.max(Math.min(n,e.lat),-n),i=Math.sin(r*t);return new O(this.R*e.lng*t,this.R*Math.log((1+i)/(1-i))/2)},unproject:function(e){var t=180/Math.PI;return new F((2*Math.atan(Math.exp(e.y/this.R))-Math.PI/2)*t,e.x*t/this.R)},bounds:(function(){var e=R*Math.PI;return new j([-e,-e],[e,e])})()};function se(e,t,n,r){if(_(e)){this._a=e[0],this._b=e[1],this._c=e[2],this._d=e[3];return}this._a=e,this._b=t,this._c=n,this._d=r}se.prototype={transform:function(e,t){return this._transform(e.clone(),t)},_transform:function(e,t){return t||=1,e.x=t*(this._a*e.x+this._b),e.y=t*(this._c*e.y+this._d),e},untransform:function(e,t){return t||=1,new O((e.x/t-this._b)/this._a,(e.y/t-this._d)/this._c)}};function z(e,t,n,r){return new se(e,t,n,r)}var ce=n({},ae,{code:`EPSG:3857`,projection:oe,transformation:function(){var e=.5/(Math.PI*oe.R);return z(e,.5,-e,.5)}()}),le=n({},ce,{code:`EPSG:900913`});function ue(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e)}function de(e,t){var n=``,r,i,a,o,s,c;for(r=0,a=e.length;r<a;r++){for(s=e[r],i=0,o=s.length;i<o;i++)c=s[i],n+=(i?`L`:`M`)+c.x+` `+c.y;n+=t?V.svg?`z`:`x`:``}return n||`M0 0`}var fe=document.documentElement.style,pe=`ActiveXObject`in window,me=pe&&!document.addEventListener,he=`msLaunchUri`in navigator&&!(`documentMode`in document),ge=Je(`webkit`),_e=Je(`android`),ve=Je(`android 2`)||Je(`android 3`),ye=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),be=_e&&Je(`Google`)&&ye<537&&!(`AudioNode`in window),xe=!!window.opera,Se=!he&&Je(`chrome`),Ce=Je(`gecko`)&&!ge&&!xe&&!pe,we=!Se&&Je(`safari`),Te=Je(`phantom`),Ee=`OTransition`in fe,De=navigator.platform.indexOf(`Win`)===0,Oe=pe&&`transition`in fe,ke=`WebKitCSSMatrix`in window&&`m11`in new window.WebKitCSSMatrix&&!ve,Ae=`MozPerspective`in fe,je=!window.L_DISABLE_3D&&(Oe||ke||Ae)&&!Ee&&!Te,Me=typeof orientation<`u`||Je(`mobile`),Ne=Me&&ge,Pe=Me&&ke,Fe=!window.PointerEvent&&window.MSPointerEvent,Ie=!!(window.PointerEvent||Fe),Le=`ontouchstart`in window||!!window.TouchEvent,Re=!window.L_NO_TOUCH&&(Le||Ie),B=Me&&xe,ze=Me&&Ce,Be=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Ve=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener(`testPassiveEventSupport`,l,t),window.removeEventListener(`testPassiveEventSupport`,l,t)}catch{}return e}(),He=function(){return!!document.createElement(`canvas`).getContext}(),Ue=!!(document.createElementNS&&ue(`svg`).createSVGRect),We=!!Ue&&(function(){var e=document.createElement(`div`);return e.innerHTML=`<svg/>`,(e.firstChild&&e.firstChild.namespaceURI)===`http://www.w3.org/2000/svg`})(),Ge=!Ue&&function(){try{var e=document.createElement(`div`);e.innerHTML=`<v:shape adj="1"/>`;var t=e.firstChild;return t.style.behavior=`url(#default#VML)`,t&&typeof t.adj==`object`}catch{return!1}}(),Ke=navigator.platform.indexOf(`Mac`)===0,qe=navigator.platform.indexOf(`Linux`)===0;function Je(e){return navigator.userAgent.toLowerCase().indexOf(e)>=0}var V={ie:pe,ielt9:me,edge:he,webkit:ge,android:_e,android23:ve,androidStock:be,opera:xe,chrome:Se,gecko:Ce,safari:we,phantom:Te,opera12:Ee,win:De,ie3d:Oe,webkit3d:ke,gecko3d:Ae,any3d:je,mobile:Me,mobileWebkit:Ne,mobileWebkit3d:Pe,msPointer:Fe,pointer:Ie,touch:Re,touchNative:Le,mobileOpera:B,mobileGecko:ze,retina:Be,passiveEvents:Ve,canvas:He,svg:Ue,vml:Ge,inlineSvg:We,mac:Ke,linux:qe},Ye=V.msPointer?`MSPointerDown`:`pointerdown`,Xe=V.msPointer?`MSPointerMove`:`pointermove`,Ze=V.msPointer?`MSPointerUp`:`pointerup`,Qe=V.msPointer?`MSPointerCancel`:`pointercancel`,$e={touchstart:Ye,touchmove:Xe,touchend:Ze,touchcancel:Qe},et={touchstart:ut,touchmove:lt,touchend:lt,touchcancel:lt},tt={},nt=!1;function rt(e,t,n){return t===`touchstart`&&ct(),et[t]?(n=et[t].bind(this,n),e.addEventListener($e[t],n,!1),n):(console.warn(`wrong event specified:`,t),l)}function it(e,t,n){if(!$e[t]){console.warn(`wrong event specified:`,t);return}e.removeEventListener($e[t],n,!1)}function at(e){tt[e.pointerId]=e}function ot(e){tt[e.pointerId]&&(tt[e.pointerId]=e)}function st(e){delete tt[e.pointerId]}function ct(){nt||=(document.addEventListener(Ye,at,!0),document.addEventListener(Xe,ot,!0),document.addEventListener(Ze,st,!0),document.addEventListener(Qe,st,!0),!0)}function lt(e,t){if(t.pointerType!==(t.MSPOINTER_TYPE_MOUSE||`mouse`)){for(var n in t.touches=[],tt)t.touches.push(tt[n]);t.changedTouches=[t],e(t)}}function ut(e,t){t.MSPOINTER_TYPE_TOUCH&&t.pointerType===t.MSPOINTER_TYPE_TOUCH&&tn(t),lt(e,t)}function dt(e){var t={},n,r;for(r in e)n=e[r],t[r]=n&&n.bind?n.bind(e):n;return e=t,t.type=`dblclick`,t.detail=2,t.isTrusted=!1,t._simulated=!0,t}var ft=200;function pt(e,t){e.addEventListener(`dblclick`,t);var n=0,r;function i(e){if(e.detail!==1){r=e.detail;return}if(!(e.pointerType===`mouse`||e.sourceCapabilities&&!e.sourceCapabilities.firesTouchEvents)){var i=rn(e);if(!(i.some(function(e){return e instanceof HTMLLabelElement&&e.attributes.for})&&!i.some(function(e){return e instanceof HTMLInputElement||e instanceof HTMLSelectElement}))){var a=Date.now();a-n<=ft?(r++,r===2&&t(dt(e))):r=1,n=a}}}return e.addEventListener(`click`,i),{dblclick:t,simDblclick:i}}function mt(e,t){e.removeEventListener(`dblclick`,t.dblclick),e.removeEventListener(`click`,t.simDblclick)}var ht=At([`transform`,`webkitTransform`,`OTransform`,`MozTransform`,`msTransform`]),gt=At([`webkitTransition`,`transition`,`OTransition`,`MozTransition`,`msTransition`]),_t=gt===`webkitTransition`||gt===`OTransition`?gt+`End`:`transitionend`;function vt(e){return typeof e==`string`?document.getElementById(e):e}function yt(e,t){var n=e.style[t]||e.currentStyle&&e.currentStyle[t];if((!n||n===`auto`)&&document.defaultView){var r=document.defaultView.getComputedStyle(e,null);n=r?r[t]:null}return n===`auto`?null:n}function H(e,t,n){var r=document.createElement(e);return r.className=t||``,n&&n.appendChild(r),r}function bt(e){var t=e.parentNode;t&&t.removeChild(e)}function xt(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function St(e){var t=e.parentNode;t&&t.lastChild!==e&&t.appendChild(e)}function Ct(e){var t=e.parentNode;t&&t.firstChild!==e&&t.insertBefore(e,t.firstChild)}function wt(e,t){if(e.classList!==void 0)return e.classList.contains(t);var n=Dt(e);return n.length>0&&RegExp(`(^|\\s)`+t+`(\\s|$)`).test(n)}function U(e,t){if(e.classList!==void 0)for(var n=f(t),r=0,i=n.length;r<i;r++)e.classList.add(n[r]);else if(!wt(e,t)){var a=Dt(e);Et(e,(a?a+` `:``)+t)}}function Tt(e,t){e.classList===void 0?Et(e,d((` `+Dt(e)+` `).replace(` `+t+` `,` `))):e.classList.remove(t)}function Et(e,t){e.className.baseVal===void 0?e.className=t:e.className.baseVal=t}function Dt(e){return e.correspondingElement&&(e=e.correspondingElement),e.className.baseVal===void 0?e.className:e.className.baseVal}function Ot(e,t){`opacity`in e.style?e.style.opacity=t:`filter`in e.style&&kt(e,t)}function kt(e,t){var n=!1,r=`DXImageTransform.Microsoft.Alpha`;try{n=e.filters.item(r)}catch{if(t===1)return}t=Math.round(t*100),n?(n.Enabled=t!==100,n.Opacity=t):e.style.filter+=` progid:`+r+`(opacity=`+t+`)`}function At(e){for(var t=document.documentElement.style,n=0;n<e.length;n++)if(e[n]in t)return e[n];return!1}function jt(e,t,n){var r=t||new O(0,0);e.style[ht]=(V.ie3d?`translate(`+r.x+`px,`+r.y+`px)`:`translate3d(`+r.x+`px,`+r.y+`px,0)`)+(n?` scale(`+n+`)`:``)}function Mt(e,t){e._leaflet_pos=t,V.any3d?jt(e,t):(e.style.left=t.x+`px`,e.style.top=t.y+`px`)}function Nt(e){return e._leaflet_pos||new O(0,0)}var Pt,Ft,It;if(`onselectstart`in document)Pt=function(){W(window,`selectstart`,tn)},Ft=function(){G(window,`selectstart`,tn)};else{var Lt=At([`userSelect`,`WebkitUserSelect`,`OUserSelect`,`MozUserSelect`,`msUserSelect`]);Pt=function(){if(Lt){var e=document.documentElement.style;It=e[Lt],e[Lt]=`none`}},Ft=function(){Lt&&(document.documentElement.style[Lt]=It,It=void 0)}}function Rt(){W(window,`dragstart`,tn)}function zt(){G(window,`dragstart`,tn)}var Bt,Vt;function Ht(e){for(;e.tabIndex===-1;)e=e.parentNode;e.style&&(Ut(),Bt=e,Vt=e.style.outlineStyle,e.style.outlineStyle=`none`,W(window,`keydown`,Ut))}function Ut(){Bt&&(Bt.style.outlineStyle=Vt,Bt=void 0,Vt=void 0,G(window,`keydown`,Ut))}function Wt(e){do e=e.parentNode;while((!e.offsetWidth||!e.offsetHeight)&&e!==document.body);return e}function Gt(e){var t=e.getBoundingClientRect();return{x:t.width/e.offsetWidth||1,y:t.height/e.offsetHeight||1,boundingClientRect:t}}var Kt={__proto__:null,TRANSFORM:ht,TRANSITION:gt,TRANSITION_END:_t,get:vt,getStyle:yt,create:H,remove:bt,empty:xt,toFront:St,toBack:Ct,hasClass:wt,addClass:U,removeClass:Tt,setClass:Et,getClass:Dt,setOpacity:Ot,testProp:At,setTransform:jt,setPosition:Mt,getPosition:Nt,get disableTextSelection(){return Pt},get enableTextSelection(){return Ft},disableImageDrag:Rt,enableImageDrag:zt,preventOutline:Ht,restoreOutline:Ut,getSizedParentNode:Wt,getScale:Gt};function W(e,t,n,r){if(t&&typeof t==`object`)for(var i in t)Xt(e,i,t[i],n);else{t=f(t);for(var a=0,o=t.length;a<o;a++)Xt(e,t[a],n,r)}return this}var qt=`_leaflet_events`;function G(e,t,n,r){if(arguments.length===1)Jt(e),delete e[qt];else if(t&&typeof t==`object`)for(var i in t)Zt(e,i,t[i],n);else if(t=f(t),arguments.length===2)Jt(e,function(e){return v(t,e)!==-1});else for(var a=0,o=t.length;a<o;a++)Zt(e,t[a],n,r);return this}function Jt(e,t){for(var n in e[qt]){var r=n.split(/\d/)[0];(!t||t(r))&&Zt(e,r,null,null,n)}}var Yt={mouseenter:`mouseover`,mouseleave:`mouseout`,wheel:!(`onwheel`in window)&&`mousewheel`};function Xt(e,t,n,r){var i=t+o(n)+(r?`_`+o(r):``);if(e[qt]&&e[qt][i])return this;var a=function(t){return n.call(r||e,t||window.event)},s=a;!V.touchNative&&V.pointer&&t.indexOf(`touch`)===0?a=rt(e,t,a):V.touch&&t===`dblclick`?a=pt(e,a):`addEventListener`in e?t===`touchstart`||t===`touchmove`||t===`wheel`||t===`mousewheel`?e.addEventListener(Yt[t]||t,a,V.passiveEvents?{passive:!1}:!1):t===`mouseenter`||t===`mouseleave`?(a=function(t){t||=window.event,cn(e,t)&&s(t)},e.addEventListener(Yt[t],a,!1)):e.addEventListener(t,s,!1):e.attachEvent(`on`+t,a),e[qt]=e[qt]||{},e[qt][i]=a}function Zt(e,t,n,r,i){i||=t+o(n)+(r?`_`+o(r):``);var a=e[qt]&&e[qt][i];if(!a)return this;!V.touchNative&&V.pointer&&t.indexOf(`touch`)===0?it(e,t,a):V.touch&&t===`dblclick`?mt(e,a):`removeEventListener`in e?e.removeEventListener(Yt[t]||t,a,!1):e.detachEvent(`on`+t,a),e[qt][i]=null}function Qt(e){return e.stopPropagation?e.stopPropagation():e.originalEvent?e.originalEvent._stopped=!0:e.cancelBubble=!0,this}function $t(e){return Xt(e,`wheel`,Qt),this}function en(e){return W(e,`mousedown touchstart dblclick contextmenu`,Qt),e._leaflet_disable_click=!0,this}function tn(e){return e.preventDefault?e.preventDefault():e.returnValue=!1,this}function nn(e){return tn(e),Qt(e),this}function rn(e){if(e.composedPath)return e.composedPath();for(var t=[],n=e.target;n;)t.push(n),n=n.parentNode;return t}function an(e,t){if(!t)return new O(e.clientX,e.clientY);var n=Gt(t),r=n.boundingClientRect;return new O((e.clientX-r.left)/n.x-t.clientLeft,(e.clientY-r.top)/n.y-t.clientTop)}var on=V.linux&&V.chrome?window.devicePixelRatio:V.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function sn(e){return V.edge?e.wheelDeltaY/2:e.deltaY&&e.deltaMode===0?-e.deltaY/on:e.deltaY&&e.deltaMode===1?-e.deltaY*20:e.deltaY&&e.deltaMode===2?-e.deltaY*60:e.deltaX||e.deltaZ?0:e.wheelDelta?(e.wheelDeltaY||e.wheelDelta)/2:e.detail&&Math.abs(e.detail)<32765?-e.detail*20:e.detail?e.detail/-32765*60:0}function cn(e,t){var n=t.relatedTarget;if(!n)return!0;try{for(;n&&n!==e;)n=n.parentNode}catch{return!1}return n!==e}var ln={__proto__:null,on:W,off:G,stopPropagation:Qt,disableScrollPropagation:$t,disableClickPropagation:en,preventDefault:tn,stop:nn,getPropagationPath:rn,getMousePosition:an,getWheelDelta:sn,isExternalTarget:cn,addListener:W,removeListener:G},un=re.extend({run:function(e,t,n,r){this.stop(),this._el=e,this._inProgress=!0,this._duration=n||.25,this._easeOutPower=1/Math.max(r||.5,.2),this._startPos=Nt(e),this._offset=t.subtract(this._startPos),this._startTime=+new Date,this.fire(`start`),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=T(this._animate,this),this._step()},_step:function(e){var t=+new Date-this._startTime,n=this._duration*1e3;t<n?this._runFrame(this._easeOut(t/n),e):(this._runFrame(1),this._complete())},_runFrame:function(e,t){var n=this._startPos.add(this._offset.multiplyBy(e));t&&n._round(),Mt(this._el,n),this.fire(`step`)},_complete:function(){E(this._animId),this._inProgress=!1,this.fire(`end`)},_easeOut:function(e){return 1-(1-e)**this._easeOutPower}}),K=re.extend({options:{crs:ce,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(e,t){t=p(this,t),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(e),this._initLayout(),this._onResize=i(this._onResize,this),this._initEvents(),t.maxBounds&&this.setMaxBounds(t.maxBounds),t.zoom!==void 0&&(this._zoom=this._limitZoom(t.zoom)),t.center&&t.zoom!==void 0&&this.setView(I(t.center),t.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=gt&&V.any3d&&!V.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),W(this._proxy,_t,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(e,t,r){return t=t===void 0?this._zoom:this._limitZoom(t),e=this._limitCenter(I(e),t,this.options.maxBounds),r||={},this._stop(),this._loaded&&!r.reset&&r!==!0&&(r.animate!==void 0&&(r.zoom=n({animate:r.animate},r.zoom),r.pan=n({animate:r.animate,duration:r.duration},r.pan)),this._zoom===t?this._tryAnimatedPan(e,r.pan):this._tryAnimatedZoom&&this._tryAnimatedZoom(e,t,r.zoom))?(clearTimeout(this._sizeTimer),this):(this._resetView(e,t,r.pan&&r.pan.noMoveStart),this)},setZoom:function(e,t){return this._loaded?this.setView(this.getCenter(),e,{zoom:t}):(this._zoom=e,this)},zoomIn:function(e,t){return e||=V.any3d?this.options.zoomDelta:1,this.setZoom(this._zoom+e,t)},zoomOut:function(e,t){return e||=V.any3d?this.options.zoomDelta:1,this.setZoom(this._zoom-e,t)},setZoomAround:function(e,t,n){var r=this.getZoomScale(t),i=this.getSize().divideBy(2),a=(e instanceof O?e:this.latLngToContainerPoint(e)).subtract(i).multiplyBy(1-1/r),o=this.containerPointToLatLng(i.add(a));return this.setView(o,t,{zoom:n})},_getBoundsCenterZoom:function(e,t){t||={},e=e.getBounds?e.getBounds():P(e);var n=A(t.paddingTopLeft||t.padding||[0,0]),r=A(t.paddingBottomRight||t.padding||[0,0]),i=this.getBoundsZoom(e,!1,n.add(r));if(i=typeof t.maxZoom==`number`?Math.min(t.maxZoom,i):i,i===1/0)return{center:e.getCenter(),zoom:i};var a=r.subtract(n).divideBy(2),o=this.project(e.getSouthWest(),i),s=this.project(e.getNorthEast(),i);return{center:this.unproject(o.add(s).divideBy(2).add(a),i),zoom:i}},fitBounds:function(e,t){if(e=P(e),!e.isValid())throw Error(`Bounds are not valid.`);var n=this._getBoundsCenterZoom(e,t);return this.setView(n.center,n.zoom,t)},fitWorld:function(e){return this.fitBounds([[-90,-180],[90,180]],e)},panTo:function(e,t){return this.setView(e,this._zoom,{pan:t})},panBy:function(e,t){if(e=A(e).round(),t||={},!e.x&&!e.y)return this.fire(`moveend`);if(t.animate!==!0&&!this.getSize().contains(e))return this._resetView(this.unproject(this.project(this.getCenter()).add(e)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new un,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),t.noMoveStart||this.fire(`movestart`),t.animate!==!1){U(this._mapPane,`leaflet-pan-anim`);var n=this._getMapPanePos().subtract(e).round();this._panAnim.run(this._mapPane,n,t.duration||.25,t.easeLinearity)}else this._rawPanBy(e),this.fire(`move`).fire(`moveend`);return this},flyTo:function(e,t,n){if(n||={},n.animate===!1||!V.any3d)return this.setView(e,t,n);this._stop();var r=this.project(this.getCenter()),i=this.project(e),a=this.getSize(),o=this._zoom;e=I(e),t=t===void 0?o:t;var s=Math.max(a.x,a.y),c=s*this.getZoomScale(o,t),l=i.distanceTo(r)||1,u=1.42,d=u*u;function f(e){var t=e?-1:1,n=e?c:s,r=(c*c-s*s+t*d*d*l*l)/(2*n*d*l),i=Math.sqrt(r*r+1)-r;return i<1e-9?-18:Math.log(i)}function p(e){return(Math.exp(e)-Math.exp(-e))/2}function m(e){return(Math.exp(e)+Math.exp(-e))/2}function h(e){return p(e)/m(e)}var g=f(0);function _(e){return s*(m(g)/m(g+u*e))}function v(e){return s*(m(g)*h(g+u*e)-p(g))/d}function y(e){return 1-(1-e)**1.5}var b=Date.now(),x=(f(1)-g)/u,S=n.duration?1e3*n.duration:1e3*x*.8;function C(){var n=(Date.now()-b)/S,a=y(n)*x;n<=1?(this._flyToFrame=T(C,this),this._move(this.unproject(r.add(i.subtract(r).multiplyBy(v(a)/l)),o),this.getScaleZoom(s/_(a),o),{flyTo:!0})):this._move(e,t)._moveEnd(!0)}return this._moveStart(!0,n.noMoveStart),C.call(this),this},flyToBounds:function(e,t){var n=this._getBoundsCenterZoom(e,t);return this.flyTo(n.center,n.zoom,t)},setMaxBounds:function(e){return e=P(e),this.listens(`moveend`,this._panInsideMaxBounds)&&this.off(`moveend`,this._panInsideMaxBounds),e.isValid()?(this.options.maxBounds=e,this._loaded&&this._panInsideMaxBounds(),this.on(`moveend`,this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(e){var t=this.options.minZoom;return this.options.minZoom=e,this._loaded&&t!==e&&(this.fire(`zoomlevelschange`),this.getZoom()<this.options.minZoom)?this.setZoom(e):this},setMaxZoom:function(e){var t=this.options.maxZoom;return this.options.maxZoom=e,this._loaded&&t!==e&&(this.fire(`zoomlevelschange`),this.getZoom()>this.options.maxZoom)?this.setZoom(e):this},panInsideBounds:function(e,t){this._enforcingBounds=!0;var n=this.getCenter(),r=this._limitCenter(n,this._zoom,P(e));return n.equals(r)||this.panTo(r,t),this._enforcingBounds=!1,this},panInside:function(e,t){t||={};var n=A(t.paddingTopLeft||t.padding||[0,0]),r=A(t.paddingBottomRight||t.padding||[0,0]),i=this.project(this.getCenter()),a=this.project(e),o=this.getPixelBounds(),s=M([o.min.add(n),o.max.subtract(r)]),c=s.getSize();if(!s.contains(a)){this._enforcingBounds=!0;var l=a.subtract(s.getCenter()),u=s.extend(a).getSize().subtract(c);i.x+=l.x<0?-u.x:u.x,i.y+=l.y<0?-u.y:u.y,this.panTo(this.unproject(i),t),this._enforcingBounds=!1}return this},invalidateSize:function(e){if(!this._loaded)return this;e=n({animate:!1,pan:!0},e===!0?{animate:!0}:e);var t=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var r=this.getSize(),a=t.divideBy(2).round(),o=r.divideBy(2).round(),s=a.subtract(o);return!s.x&&!s.y?this:(e.animate&&e.pan?this.panBy(s):(e.pan&&this._rawPanBy(s),this.fire(`move`),e.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(i(this.fire,this,`moveend`),200)):this.fire(`moveend`)),this.fire(`resize`,{oldSize:t,newSize:r}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire(`viewreset`),this._stop()},locate:function(e){if(e=this._locateOptions=n({timeout:1e4,watch:!1},e),!(`geolocation`in navigator))return this._handleGeolocationError({code:0,message:`Geolocation not supported.`}),this;var t=i(this._handleGeolocationResponse,this),r=i(this._handleGeolocationError,this);return e.watch?this._locationWatchId=navigator.geolocation.watchPosition(t,r,e):navigator.geolocation.getCurrentPosition(t,r,e),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(e){if(this._container._leaflet_id){var t=e.code,n=e.message||(t===1?`permission denied`:t===2?`position unavailable`:`timeout`);this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire(`locationerror`,{code:t,message:`Geolocation error: `+n+`.`})}},_handleGeolocationResponse:function(e){if(this._container._leaflet_id){var t=e.coords.latitude,n=e.coords.longitude,r=new F(t,n),i=r.toBounds(e.coords.accuracy*2),a=this._locateOptions;if(a.setView){var o=this.getBoundsZoom(i);this.setView(r,a.maxZoom?Math.min(o,a.maxZoom):o)}var s={latlng:r,bounds:i,timestamp:e.timestamp};for(var c in e.coords)typeof e.coords[c]==`number`&&(s[c]=e.coords[c]);this.fire(`locationfound`,s)}},addHandler:function(e,t){if(!t)return this;var n=this[e]=new t(this);return this._handlers.push(n),this.options[e]&&n.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off(`moveend`,this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw Error(`Map container is being reused by another instance`);try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}for(var e in this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),bt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&=(E(this._resizeRequest),null),this._clearHandlers(),this._loaded&&this.fire(`unload`),this._layers)this._layers[e].remove();for(e in this._panes)bt(this._panes[e]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(e,t){var n=H(`div`,`leaflet-pane`+(e?` leaflet-`+e.replace(`Pane`,``)+`-pane`:``),t||this._mapPane);return e&&(this._panes[e]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var e=this.getPixelBounds();return new N(this.unproject(e.getBottomLeft()),this.unproject(e.getTopRight()))},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(e,t,n){e=P(e),n=A(n||[0,0]);var r=this.getZoom()||0,i=this.getMinZoom(),a=this.getMaxZoom(),o=e.getNorthWest(),s=e.getSouthEast(),c=this.getSize().subtract(n),l=M(this.project(s,r),this.project(o,r)).getSize(),u=V.any3d?this.options.zoomSnap:1,d=c.x/l.x,f=c.y/l.y,p=t?Math.max(d,f):Math.min(d,f);return r=this.getScaleZoom(p,r),u&&(r=Math.round(r/(u/100))*(u/100),r=t?Math.ceil(r/u)*u:Math.floor(r/u)*u),Math.max(i,Math.min(a,r))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new O(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(e,t){var n=this._getTopLeftPoint(e,t);return new j(n,n.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(e){return this.options.crs.getProjectedBounds(e===void 0?this.getZoom():e)},getPane:function(e){return typeof e==`string`?this._panes[e]:e},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(e,t){var n=this.options.crs;return t=t===void 0?this._zoom:t,n.scale(e)/n.scale(t)},getScaleZoom:function(e,t){var n=this.options.crs;t=t===void 0?this._zoom:t;var r=n.zoom(e*n.scale(t));return isNaN(r)?1/0:r},project:function(e,t){return t=t===void 0?this._zoom:t,this.options.crs.latLngToPoint(I(e),t)},unproject:function(e,t){return t=t===void 0?this._zoom:t,this.options.crs.pointToLatLng(A(e),t)},layerPointToLatLng:function(e){var t=A(e).add(this.getPixelOrigin());return this.unproject(t)},latLngToLayerPoint:function(e){return this.project(I(e))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(e){return this.options.crs.wrapLatLng(I(e))},wrapLatLngBounds:function(e){return this.options.crs.wrapLatLngBounds(P(e))},distance:function(e,t){return this.options.crs.distance(I(e),I(t))},containerPointToLayerPoint:function(e){return A(e).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(e){return A(e).add(this._getMapPanePos())},containerPointToLatLng:function(e){var t=this.containerPointToLayerPoint(A(e));return this.layerPointToLatLng(t)},latLngToContainerPoint:function(e){return this.layerPointToContainerPoint(this.latLngToLayerPoint(I(e)))},mouseEventToContainerPoint:function(e){return an(e,this._container)},mouseEventToLayerPoint:function(e){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e))},mouseEventToLatLng:function(e){return this.layerPointToLatLng(this.mouseEventToLayerPoint(e))},_initContainer:function(e){var t=this._container=vt(e);if(!t)throw Error(`Map container not found.`);if(t._leaflet_id)throw Error(`Map container is already initialized.`);W(t,`scroll`,this._onScroll,this),this._containerId=o(t)},_initLayout:function(){var e=this._container;this._fadeAnimated=this.options.fadeAnimation&&V.any3d,U(e,`leaflet-container`+(V.touch?` leaflet-touch`:``)+(V.retina?` leaflet-retina`:``)+(V.ielt9?` leaflet-oldie`:``)+(V.safari?` leaflet-safari`:``)+(this._fadeAnimated?` leaflet-fade-anim`:``));var t=yt(e,`position`);t!==`absolute`&&t!==`relative`&&t!==`fixed`&&t!==`sticky`&&(e.style.position=`relative`),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var e=this._panes={};this._paneRenderers={},this._mapPane=this.createPane(`mapPane`,this._container),Mt(this._mapPane,new O(0,0)),this.createPane(`tilePane`),this.createPane(`overlayPane`),this.createPane(`shadowPane`),this.createPane(`markerPane`),this.createPane(`tooltipPane`),this.createPane(`popupPane`),this.options.markerZoomAnimation||(U(e.markerPane,`leaflet-zoom-hide`),U(e.shadowPane,`leaflet-zoom-hide`))},_resetView:function(e,t,n){Mt(this._mapPane,new O(0,0));var r=!this._loaded;this._loaded=!0,t=this._limitZoom(t),this.fire(`viewprereset`);var i=this._zoom!==t;this._moveStart(i,n)._move(e,t)._moveEnd(i),this.fire(`viewreset`),r&&this.fire(`load`)},_moveStart:function(e,t){return e&&this.fire(`zoomstart`),t||this.fire(`movestart`),this},_move:function(e,t,n,r){t===void 0&&(t=this._zoom);var i=this._zoom!==t;return this._zoom=t,this._lastCenter=e,this._pixelOrigin=this._getNewPixelOrigin(e),r?n&&n.pinch&&this.fire(`zoom`,n):((i||n&&n.pinch)&&this.fire(`zoom`,n),this.fire(`move`,n)),this},_moveEnd:function(e){return e&&this.fire(`zoomend`),this.fire(`moveend`)},_stop:function(){return E(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(e){Mt(this._mapPane,this._getMapPanePos().subtract(e))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw Error(`Set map center and zoom first.`)},_initEvents:function(e){this._targets={},this._targets[o(this._container)]=this;var t=e?G:W;t(this._container,`click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup`,this._handleDOMEvent,this),this.options.trackResize&&t(window,`resize`,this._onResize,this),V.any3d&&this.options.transform3DLimit&&(e?this.off:this.on).call(this,`moveend`,this._onMoveEnd)},_onResize:function(){E(this._resizeRequest),this._resizeRequest=T(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var e=this._getMapPanePos();Math.max(Math.abs(e.x),Math.abs(e.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(e,t){for(var n=[],r,i=t===`mouseout`||t===`mouseover`,a=e.target||e.srcElement,s=!1;a;){if(r=this._targets[o(a)],r&&(t===`click`||t===`preclick`)&&this._draggableMoved(r)){s=!0;break}if(r&&r.listens(t,!0)&&(i&&!cn(a,e)||(n.push(r),i))||a===this._container)break;a=a.parentNode}return!n.length&&!s&&!i&&this.listens(t,!0)&&(n=[this]),n},_isClickDisabled:function(e){for(;e&&e!==this._container;){if(e._leaflet_disable_click)return!0;e=e.parentNode}},_handleDOMEvent:function(e){var t=e.target||e.srcElement;if(!(!this._loaded||t._leaflet_disable_events||e.type===`click`&&this._isClickDisabled(t))){var n=e.type;n===`mousedown`&&Ht(t),this._fireDOMEvent(e,n)}},_mouseEvents:[`click`,`dblclick`,`mouseover`,`mouseout`,`contextmenu`],_fireDOMEvent:function(e,t,r){if(e.type===`click`){var i=n({},e);i.type=`preclick`,this._fireDOMEvent(i,i.type,r)}var a=this._findEventTargets(e,t);if(r){for(var o=[],s=0;s<r.length;s++)r[s].listens(t,!0)&&o.push(r[s]);a=o.concat(a)}if(a.length){t===`contextmenu`&&tn(e);var c=a[0],l={originalEvent:e};if(e.type!==`keypress`&&e.type!==`keydown`&&e.type!==`keyup`){var u=c.getLatLng&&(!c._radius||c._radius<=10);l.containerPoint=u?this.latLngToContainerPoint(c.getLatLng()):this.mouseEventToContainerPoint(e),l.layerPoint=this.containerPointToLayerPoint(l.containerPoint),l.latlng=u?c.getLatLng():this.layerPointToLatLng(l.layerPoint)}for(s=0;s<a.length;s++)if(a[s].fire(t,l,!0),l.originalEvent._stopped||a[s].options.bubblingMouseEvents===!1&&v(this._mouseEvents,t)!==-1)return}},_draggableMoved:function(e){return e=e.dragging&&e.dragging.enabled()?e:this,e.dragging&&e.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var e=0,t=this._handlers.length;e<t;e++)this._handlers[e].disable()},whenReady:function(e,t){return this._loaded?e.call(t||this,{target:this}):this.on(`load`,e,t),this},_getMapPanePos:function(){return Nt(this._mapPane)||new O(0,0)},_moved:function(){var e=this._getMapPanePos();return e&&!e.equals([0,0])},_getTopLeftPoint:function(e,t){return(e&&t!==void 0?this._getNewPixelOrigin(e,t):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(e,t){var n=this.getSize()._divideBy(2);return this.project(e,t)._subtract(n)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(e,t,n){var r=this._getNewPixelOrigin(n,t);return this.project(e,t)._subtract(r)},_latLngBoundsToNewLayerBounds:function(e,t,n){var r=this._getNewPixelOrigin(n,t);return M([this.project(e.getSouthWest(),t)._subtract(r),this.project(e.getNorthWest(),t)._subtract(r),this.project(e.getSouthEast(),t)._subtract(r),this.project(e.getNorthEast(),t)._subtract(r)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(e){return this.latLngToLayerPoint(e).subtract(this._getCenterLayerPoint())},_limitCenter:function(e,t,n){if(!n)return e;var r=this.project(e,t),i=this.getSize().divideBy(2),a=new j(r.subtract(i),r.add(i)),o=this._getBoundsOffset(a,n,t);return Math.abs(o.x)<=1&&Math.abs(o.y)<=1?e:this.unproject(r.add(o),t)},_limitOffset:function(e,t){if(!t)return e;var n=this.getPixelBounds(),r=new j(n.min.add(e),n.max.add(e));return e.add(this._getBoundsOffset(r,t))},_getBoundsOffset:function(e,t,n){var r=M(this.project(t.getNorthEast(),n),this.project(t.getSouthWest(),n)),i=r.min.subtract(e.min),a=r.max.subtract(e.max);return new O(this._rebound(i.x,-a.x),this._rebound(i.y,-a.y))},_rebound:function(e,t){return e+t>0?Math.round(e-t)/2:Math.max(0,Math.ceil(e))-Math.max(0,Math.floor(t))},_limitZoom:function(e){var t=this.getMinZoom(),n=this.getMaxZoom(),r=V.any3d?this.options.zoomSnap:1;return r&&(e=Math.round(e/r)*r),Math.max(t,Math.min(n,e))},_onPanTransitionStep:function(){this.fire(`move`)},_onPanTransitionEnd:function(){Tt(this._mapPane,`leaflet-pan-anim`),this.fire(`moveend`)},_tryAnimatedPan:function(e,t){var n=this._getCenterOffset(e)._trunc();return(t&&t.animate)!==!0&&!this.getSize().contains(n)?!1:(this.panBy(n,t),!0)},_createAnimProxy:function(){var e=this._proxy=H(`div`,`leaflet-proxy leaflet-zoom-animated`);this._panes.mapPane.appendChild(e),this.on(`zoomanim`,function(e){var t=ht,n=this._proxy.style[t];jt(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[t]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on(`load moveend`,this._animMoveEnd,this),this._on(`unload`,this._destroyAnimProxy,this)},_destroyAnimProxy:function(){bt(this._proxy),this.off(`load moveend`,this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var e=this.getCenter(),t=this.getZoom();jt(this._proxy,this.project(e,t),this.getZoomScale(t,1))},_catchTransitionEnd:function(e){this._animatingZoom&&e.propertyName.indexOf(`transform`)>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName(`leaflet-zoom-animated`).length},_tryAnimatedZoom:function(e,t,n){if(this._animatingZoom)return!0;if(n||={},!this._zoomAnimated||n.animate===!1||this._nothingToAnimate()||Math.abs(t-this._zoom)>this.options.zoomAnimationThreshold)return!1;var r=this.getZoomScale(t),i=this._getCenterOffset(e)._divideBy(1-1/r);return n.animate!==!0&&!this.getSize().contains(i)?!1:(T(function(){this._moveStart(!0,n.noMoveStart||!1)._animateZoom(e,t,!0)},this),!0)},_animateZoom:function(e,t,n,r){this._mapPane&&(n&&(this._animatingZoom=!0,this._animateToCenter=e,this._animateToZoom=t,U(this._mapPane,`leaflet-zoom-anim`)),this.fire(`zoomanim`,{center:e,zoom:t,noUpdate:r}),this._tempFireZoomEvent||=this._zoom!==this._animateToZoom,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(i(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Tt(this._mapPane,`leaflet-zoom-anim`),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire(`zoom`),delete this._tempFireZoomEvent,this.fire(`move`),this._moveEnd(!0))}});function dn(e,t){return new K(e,t)}var fn=D.extend({options:{position:`topright`},initialize:function(e){p(this,e)},getPosition:function(){return this.options.position},setPosition:function(e){var t=this._map;return t&&t.removeControl(this),this.options.position=e,t&&t.addControl(this),this},getContainer:function(){return this._container},addTo:function(e){this.remove(),this._map=e;var t=this._container=this.onAdd(e),n=this.getPosition(),r=e._controlCorners[n];return U(t,`leaflet-control`),n.indexOf(`bottom`)===-1?r.appendChild(t):r.insertBefore(t,r.firstChild),this._map.on(`unload`,this.remove,this),this},remove:function(){return this._map?(bt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off(`unload`,this.remove,this),this._map=null,this):this},_refocusOnMap:function(e){this._map&&e&&e.screenX>0&&e.screenY>0&&this._map.getContainer().focus()}}),pn=function(e){return new fn(e)};K.include({addControl:function(e){return e.addTo(this),this},removeControl:function(e){return e.remove(),this},_initControlPos:function(){var e=this._controlCorners={},t=`leaflet-`,n=this._controlContainer=H(`div`,t+`control-container`,this._container);function r(r,i){var a=t+r+` `+t+i;e[r+i]=H(`div`,a,n)}r(`top`,`left`),r(`top`,`right`),r(`bottom`,`left`),r(`bottom`,`right`)},_clearControlPos:function(){for(var e in this._controlCorners)bt(this._controlCorners[e]);bt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var mn=fn.extend({options:{collapsed:!0,position:`topright`,autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(e,t,n,r){return n<r?-1:+(r<n)}},initialize:function(e,t,n){for(var r in p(this,n),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,e)this._addLayer(e[r],r);for(r in t)this._addLayer(t[r],r,!0)},onAdd:function(e){this._initLayout(),this._update(),this._map=e,e.on(`zoomend`,this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.on(`add remove`,this._onLayerChange,this);return this._container},addTo:function(e){return fn.prototype.addTo.call(this,e),this._expandIfNotCollapsed()},onRemove:function(){this._map.off(`zoomend`,this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.off(`add remove`,this._onLayerChange,this)},addBaseLayer:function(e,t){return this._addLayer(e,t),this._map?this._update():this},addOverlay:function(e,t){return this._addLayer(e,t,!0),this._map?this._update():this},removeLayer:function(e){e.off(`add remove`,this._onLayerChange,this);var t=this._getLayer(o(e));return t&&this._layers.splice(this._layers.indexOf(t),1),this._map?this._update():this},expand:function(){U(this._container,`leaflet-control-layers-expanded`),this._section.style.height=null;var e=this._map.getSize().y-(this._container.offsetTop+50);return e<this._section.clientHeight?(U(this._section,`leaflet-control-layers-scrollbar`),this._section.style.height=e+`px`):Tt(this._section,`leaflet-control-layers-scrollbar`),this._checkDisabledLayers(),this},collapse:function(){return Tt(this._container,`leaflet-control-layers-expanded`),this},_initLayout:function(){var e=`leaflet-control-layers`,t=this._container=H(`div`,e),n=this.options.collapsed;t.setAttribute(`aria-haspopup`,!0),en(t),$t(t);var r=this._section=H(`section`,e+`-list`);n&&(this._map.on(`click`,this.collapse,this),W(t,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var i=this._layersLink=H(`a`,e+`-toggle`,t);i.href=`#`,i.title=`Layers`,i.setAttribute(`role`,`button`),W(i,{keydown:function(e){e.keyCode===13&&this._expandSafely()},click:function(e){tn(e),this._expandSafely()}},this),n||this.expand(),this._baseLayersList=H(`div`,e+`-base`,r),this._separator=H(`div`,e+`-separator`,r),this._overlaysList=H(`div`,e+`-overlays`,r),t.appendChild(r)},_getLayer:function(e){for(var t=0;t<this._layers.length;t++)if(this._layers[t]&&o(this._layers[t].layer)===e)return this._layers[t]},_addLayer:function(e,t,n){this._map&&e.on(`add remove`,this._onLayerChange,this),this._layers.push({layer:e,name:t,overlay:n}),this.options.sortLayers&&this._layers.sort(i(function(e,t){return this.options.sortFunction(e.layer,t.layer,e.name,t.name)},this)),this.options.autoZIndex&&e.setZIndex&&(this._lastZIndex++,e.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;xt(this._baseLayersList),xt(this._overlaysList),this._layerControlInputs=[];var e,t,n,r,i=0;for(n=0;n<this._layers.length;n++)r=this._layers[n],this._addItem(r),t||=r.overlay,e||=!r.overlay,i+=+!r.overlay;return this.options.hideSingleBase&&(e&&=i>1,this._baseLayersList.style.display=e?``:`none`),this._separator.style.display=t&&e?``:`none`,this},_onLayerChange:function(e){this._handlingClick||this._update();var t=this._getLayer(o(e.target)),n=t.overlay?e.type===`add`?`overlayadd`:`overlayremove`:e.type===`add`?`baselayerchange`:null;n&&this._map.fire(n,t)},_createRadioElement:function(e,t){var n=`<input type="radio" class="leaflet-control-layers-selector" name="`+e+`"`+(t?` checked="checked"`:``)+`/>`,r=document.createElement(`div`);return r.innerHTML=n,r.firstChild},_addItem:function(e){var t=document.createElement(`label`),n=this._map.hasLayer(e.layer),r;e.overlay?(r=document.createElement(`input`),r.type=`checkbox`,r.className=`leaflet-control-layers-selector`,r.defaultChecked=n):r=this._createRadioElement(`leaflet-base-layers_`+o(this),n),this._layerControlInputs.push(r),r.layerId=o(e.layer),W(r,`click`,this._onInputClick,this);var i=document.createElement(`span`);i.innerHTML=` `+e.name;var a=document.createElement(`span`);return t.appendChild(a),a.appendChild(r),a.appendChild(i),(e.overlay?this._overlaysList:this._baseLayersList).appendChild(t),this._checkDisabledLayers(),t},_onInputClick:function(){if(!this._preventClick){var e=this._layerControlInputs,t,n,r=[],i=[];this._handlingClick=!0;for(var a=e.length-1;a>=0;a--)t=e[a],n=this._getLayer(t.layerId).layer,t.checked?r.push(n):t.checked||i.push(n);for(a=0;a<i.length;a++)this._map.hasLayer(i[a])&&this._map.removeLayer(i[a]);for(a=0;a<r.length;a++)this._map.hasLayer(r[a])||this._map.addLayer(r[a]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var e=this._layerControlInputs,t,n,r=this._map.getZoom(),i=e.length-1;i>=0;i--)t=e[i],n=this._getLayer(t.layerId).layer,t.disabled=n.options.minZoom!==void 0&&r<n.options.minZoom||n.options.maxZoom!==void 0&&r>n.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var e=this._section;this._preventClick=!0,W(e,`click`,tn),this.expand();var t=this;setTimeout(function(){G(e,`click`,tn),t._preventClick=!1})}}),hn=function(e,t,n){return new mn(e,t,n)},gn=fn.extend({options:{position:`topleft`,zoomInText:`<span aria-hidden="true">+</span>`,zoomInTitle:`Zoom in`,zoomOutText:`<span aria-hidden="true">&#x2212;</span>`,zoomOutTitle:`Zoom out`},onAdd:function(e){var t=`leaflet-control-zoom`,n=H(`div`,t+` leaflet-bar`),r=this.options;return this._zoomInButton=this._createButton(r.zoomInText,r.zoomInTitle,t+`-in`,n,this._zoomIn),this._zoomOutButton=this._createButton(r.zoomOutText,r.zoomOutTitle,t+`-out`,n,this._zoomOut),this._updateDisabled(),e.on(`zoomend zoomlevelschange`,this._updateDisabled,this),n},onRemove:function(e){e.off(`zoomend zoomlevelschange`,this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(e){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(e.shiftKey?3:1))},_zoomOut:function(e){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(e.shiftKey?3:1))},_createButton:function(e,t,n,r,i){var a=H(`a`,n,r);return a.innerHTML=e,a.href=`#`,a.title=t,a.setAttribute(`role`,`button`),a.setAttribute(`aria-label`,t),en(a),W(a,`click`,nn),W(a,`click`,i,this),W(a,`click`,this._refocusOnMap,this),a},_updateDisabled:function(){var e=this._map,t=`leaflet-disabled`;Tt(this._zoomInButton,t),Tt(this._zoomOutButton,t),this._zoomInButton.setAttribute(`aria-disabled`,`false`),this._zoomOutButton.setAttribute(`aria-disabled`,`false`),(this._disabled||e._zoom===e.getMinZoom())&&(U(this._zoomOutButton,t),this._zoomOutButton.setAttribute(`aria-disabled`,`true`)),(this._disabled||e._zoom===e.getMaxZoom())&&(U(this._zoomInButton,t),this._zoomInButton.setAttribute(`aria-disabled`,`true`))}});K.mergeOptions({zoomControl:!0}),K.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new gn,this.addControl(this.zoomControl))});var _n=function(e){return new gn(e)},vn=fn.extend({options:{position:`bottomleft`,maxWidth:100,metric:!0,imperial:!0},onAdd:function(e){var t=`leaflet-control-scale`,n=H(`div`,t),r=this.options;return this._addScales(r,t+`-line`,n),e.on(r.updateWhenIdle?`moveend`:`move`,this._update,this),e.whenReady(this._update,this),n},onRemove:function(e){e.off(this.options.updateWhenIdle?`moveend`:`move`,this._update,this)},_addScales:function(e,t,n){e.metric&&(this._mScale=H(`div`,t,n)),e.imperial&&(this._iScale=H(`div`,t,n))},_update:function(){var e=this._map,t=e.getSize().y/2,n=e.distance(e.containerPointToLatLng([0,t]),e.containerPointToLatLng([this.options.maxWidth,t]));this._updateScales(n)},_updateScales:function(e){this.options.metric&&e&&this._updateMetric(e),this.options.imperial&&e&&this._updateImperial(e)},_updateMetric:function(e){var t=this._getRoundNum(e),n=t<1e3?t+` m`:t/1e3+` km`;this._updateScale(this._mScale,n,t/e)},_updateImperial:function(e){var t=e*3.2808399,n,r,i;t>5280?(n=t/5280,r=this._getRoundNum(n),this._updateScale(this._iScale,r+` mi`,r/n)):(i=this._getRoundNum(t),this._updateScale(this._iScale,i+` ft`,i/t))},_updateScale:function(e,t,n){e.style.width=Math.round(this.options.maxWidth*n)+`px`,e.innerHTML=t},_getRoundNum:function(e){var t=10**((Math.floor(e)+``).length-1),n=e/t;return n=n>=10?10:n>=5?5:n>=3?3:n>=2?2:1,t*n}}),yn=function(e){return new vn(e)},bn=fn.extend({options:{position:`bottomright`,prefix:`<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">`+(V.inlineSvg?`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> `:``)+`Leaflet</a>`},initialize:function(e){p(this,e),this._attributions={}},onAdd:function(e){for(var t in e.attributionControl=this,this._container=H(`div`,`leaflet-control-attribution`),en(this._container),e._layers)e._layers[t].getAttribution&&this.addAttribution(e._layers[t].getAttribution());return this._update(),e.on(`layeradd`,this._addAttribution,this),this._container},onRemove:function(e){e.off(`layeradd`,this._addAttribution,this)},_addAttribution:function(e){e.layer.getAttribution&&(this.addAttribution(e.layer.getAttribution()),e.layer.once(`remove`,function(){this.removeAttribution(e.layer.getAttribution())},this))},setPrefix:function(e){return this.options.prefix=e,this._update(),this},addAttribution:function(e){return e?(this._attributions[e]||(this._attributions[e]=0),this._attributions[e]++,this._update(),this):this},removeAttribution:function(e){return e&&this._attributions[e]&&(this._attributions[e]--,this._update()),this},_update:function(){if(this._map){var e=[];for(var t in this._attributions)this._attributions[t]&&e.push(t);var n=[];this.options.prefix&&n.push(this.options.prefix),e.length&&n.push(e.join(`, `)),this._container.innerHTML=n.join(` <span aria-hidden="true">|</span> `)}}});K.mergeOptions({attributionControl:!0}),K.addInitHook(function(){this.options.attributionControl&&new bn().addTo(this)}),fn.Layers=mn,fn.Zoom=gn,fn.Scale=vn,fn.Attribution=bn,pn.layers=hn,pn.zoom=_n,pn.scale=yn,pn.attribution=function(e){return new bn(e)};var xn=D.extend({initialize:function(e){this._map=e},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});xn.addTo=function(e,t){return e.addHandler(t,this),this};var Sn={Events:ne},Cn=V.touch?`touchstart mousedown`:`mousedown`,wn=re.extend({options:{clickTolerance:3},initialize:function(e,t,n,r){p(this,r),this._element=e,this._dragStartTarget=t||e,this._preventOutline=n},enable:function(){this._enabled||=(W(this._dragStartTarget,Cn,this._onDown,this),!0)},disable:function(){this._enabled&&(wn._dragging===this&&this.finishDrag(!0),G(this._dragStartTarget,Cn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(e){if(this._enabled&&(this._moved=!1,!wt(this._element,`leaflet-zoom-anim`))){if(e.touches&&e.touches.length!==1){wn._dragging===this&&this.finishDrag();return}if(!(wn._dragging||e.shiftKey||e.which!==1&&e.button!==1&&!e.touches)&&(wn._dragging=this,this._preventOutline&&Ht(this._element),Rt(),Pt(),!this._moving)){this.fire(`down`);var t=e.touches?e.touches[0]:e,n=Wt(this._element);this._startPoint=new O(t.clientX,t.clientY),this._startPos=Nt(this._element),this._parentScale=Gt(n);var r=e.type===`mousedown`;W(document,r?`mousemove`:`touchmove`,this._onMove,this),W(document,r?`mouseup`:`touchend touchcancel`,this._onUp,this)}}},_onMove:function(e){if(this._enabled){if(e.touches&&e.touches.length>1){this._moved=!0;return}var t=e.touches&&e.touches.length===1?e.touches[0]:e,n=new O(t.clientX,t.clientY)._subtract(this._startPoint);!n.x&&!n.y||Math.abs(n.x)+Math.abs(n.y)<this.options.clickTolerance||(n.x/=this._parentScale.x,n.y/=this._parentScale.y,tn(e),this._moved||(this.fire(`dragstart`),this._moved=!0,U(document.body,`leaflet-dragging`),this._lastTarget=e.target||e.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),U(this._lastTarget,`leaflet-drag-target`)),this._newPos=this._startPos.add(n),this._moving=!0,this._lastEvent=e,this._updatePosition())}},_updatePosition:function(){var e={originalEvent:this._lastEvent};this.fire(`predrag`,e),Mt(this._element,this._newPos),this.fire(`drag`,e)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(e){Tt(document.body,`leaflet-dragging`),this._lastTarget&&=(Tt(this._lastTarget,`leaflet-drag-target`),null),G(document,`mousemove touchmove`,this._onMove,this),G(document,`mouseup touchend touchcancel`,this._onUp,this),zt(),Ft();var t=this._moved&&this._moving;this._moving=!1,wn._dragging=!1,t&&this.fire(`dragend`,{noInertia:e,distance:this._newPos.distanceTo(this._startPos)})}});function Tn(e,t,n){var r,i=[1,4,2,8],a,o,s,c,l,u,d,f;for(a=0,u=e.length;a<u;a++)e[a]._code=Ln(e[a],t);for(s=0;s<4;s++){for(d=i[s],r=[],a=0,u=e.length,o=u-1;a<u;o=a++)c=e[a],l=e[o],c._code&d?l._code&d||(f=In(l,c,d,t,n),f._code=Ln(f,t),r.push(f)):(l._code&d&&(f=In(l,c,d,t,n),f._code=Ln(f,t),r.push(f)),r.push(c));e=r}return e}function En(e,t){var n,r,i,a,o,s,c,l,u;if(!e||e.length===0)throw Error(`latlngs not passed`);Bn(e)||(console.warn(`latlngs are not flat! Only the first ring will be used`),e=e[0]);var d=I([0,0]),f=P(e);f.getNorthWest().distanceTo(f.getSouthWest())*f.getNorthEast().distanceTo(f.getNorthWest())<1700&&(d=Dn(e));var p=e.length,m=[];for(n=0;n<p;n++){var h=I(e[n]);m.push(t.project(I([h.lat-d.lat,h.lng-d.lng])))}for(s=c=l=0,n=0,r=p-1;n<p;r=n++)i=m[n],a=m[r],o=i.y*a.x-a.y*i.x,c+=(i.x+a.x)*o,l+=(i.y+a.y)*o,s+=o*3;u=s===0?m[0]:[c/s,l/s];var g=t.unproject(A(u));return I([g.lat+d.lat,g.lng+d.lng])}function Dn(e){for(var t=0,n=0,r=0,i=0;i<e.length;i++){var a=I(e[i]);t+=a.lat,n+=a.lng,r++}return I([t/r,n/r])}var On={__proto__:null,clipPolygon:Tn,polygonCenter:En,centroid:Dn};function kn(e,t){if(!t||!e.length)return e.slice();var n=t*t;return e=Nn(e,n),e=Mn(e,n),e}function An(e,t,n){return Math.sqrt(zn(e,t,n,!0))}function jn(e,t,n){return zn(e,t,n)}function Mn(e,t){var n=e.length,r=new(typeof Uint8Array<`u`?Uint8Array:Array)(n);r[0]=r[n-1]=1,q(e,r,t,0,n-1);var i,a=[];for(i=0;i<n;i++)r[i]&&a.push(e[i]);return a}function q(e,t,n,r,i){var a=0,o,s,c;for(s=r+1;s<=i-1;s++)c=zn(e[s],e[r],e[i],!0),c>a&&(o=s,a=c);a>n&&(t[o]=1,q(e,t,n,r,o),q(e,t,n,o,i))}function Nn(e,t){for(var n=[e[0]],r=1,i=0,a=e.length;r<a;r++)Rn(e[r],e[i])>t&&(n.push(e[r]),i=r);return i<a-1&&n.push(e[a-1]),n}var Pn;function Fn(e,t,n,r,i){var a=r?Pn:Ln(e,n),o=Ln(t,n),s,c,l;for(Pn=o;;){if(!(a|o))return[e,t];if(a&o)return!1;s=a||o,c=In(e,t,s,n,i),l=Ln(c,n),s===a?(e=c,a=l):(t=c,o=l)}}function In(e,t,n,r,i){var a=t.x-e.x,o=t.y-e.y,s=r.min,c=r.max,l,u;return n&8?(l=e.x+a*(c.y-e.y)/o,u=c.y):n&4?(l=e.x+a*(s.y-e.y)/o,u=s.y):n&2?(l=c.x,u=e.y+o*(c.x-e.x)/a):n&1&&(l=s.x,u=e.y+o*(s.x-e.x)/a),new O(l,u,i)}function Ln(e,t){var n=0;return e.x<t.min.x?n|=1:e.x>t.max.x&&(n|=2),e.y<t.min.y?n|=4:e.y>t.max.y&&(n|=8),n}function Rn(e,t){var n=t.x-e.x,r=t.y-e.y;return n*n+r*r}function zn(e,t,n,r){var i=t.x,a=t.y,o=n.x-i,s=n.y-a,c=o*o+s*s,l;return c>0&&(l=((e.x-i)*o+(e.y-a)*s)/c,l>1?(i=n.x,a=n.y):l>0&&(i+=o*l,a+=s*l)),o=e.x-i,s=e.y-a,r?o*o+s*s:new O(i,a)}function Bn(e){return!_(e[0])||typeof e[0][0]!=`object`&&e[0][0]!==void 0}function Vn(e){return console.warn(`Deprecated use of _flat, please use L.LineUtil.isFlat instead.`),Bn(e)}function Hn(e,t){var n,r,i,a,o,s,c,l;if(!e||e.length===0)throw Error(`latlngs not passed`);Bn(e)||(console.warn(`latlngs are not flat! Only the first ring will be used`),e=e[0]);var u=I([0,0]),d=P(e);d.getNorthWest().distanceTo(d.getSouthWest())*d.getNorthEast().distanceTo(d.getNorthWest())<1700&&(u=Dn(e));var f=e.length,p=[];for(n=0;n<f;n++){var m=I(e[n]);p.push(t.project(I([m.lat-u.lat,m.lng-u.lng])))}for(n=0,r=0;n<f-1;n++)r+=p[n].distanceTo(p[n+1])/2;if(r===0)l=p[0];else for(n=0,a=0;n<f-1;n++)if(o=p[n],s=p[n+1],i=o.distanceTo(s),a+=i,a>r){c=(a-r)/i,l=[s.x-c*(s.x-o.x),s.y-c*(s.y-o.y)];break}var h=t.unproject(A(l));return I([h.lat+u.lat,h.lng+u.lng])}var Un={__proto__:null,simplify:kn,pointToSegmentDistance:An,closestPointOnSegment:jn,clipSegment:Fn,_getEdgeIntersection:In,_getBitCode:Ln,_sqClosestPointOnSegment:zn,isFlat:Bn,_flat:Vn,polylineCenter:Hn},Wn={project:function(e){return new O(e.lng,e.lat)},unproject:function(e){return new F(e.y,e.x)},bounds:new j([-180,-90],[180,90])},Gn={R:6378137,R_MINOR:6356752.314245179,bounds:new j([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(e){var t=Math.PI/180,n=this.R,r=e.lat*t,i=this.R_MINOR/n,a=Math.sqrt(1-i*i),o=a*Math.sin(r),s=Math.tan(Math.PI/4-r/2)/((1-o)/(1+o))**(a/2);return r=-n*Math.log(Math.max(s,1e-10)),new O(e.lng*t*n,r)},unproject:function(e){for(var t=180/Math.PI,n=this.R,r=this.R_MINOR/n,i=Math.sqrt(1-r*r),a=Math.exp(-e.y/n),o=Math.PI/2-2*Math.atan(a),s=0,c=.1,l;s<15&&Math.abs(c)>1e-7;s++)l=i*Math.sin(o),l=((1-l)/(1+l))**(i/2),c=Math.PI/2-2*Math.atan(a*l)-o,o+=c;return new F(o*t,e.x*t/n)}},Kn={__proto__:null,LonLat:Wn,Mercator:Gn,SphericalMercator:oe},qn=n({},ae,{code:`EPSG:3395`,projection:Gn,transformation:function(){var e=.5/(Math.PI*Gn.R);return z(e,.5,-e,.5)}()}),Jn=n({},ae,{code:`EPSG:4326`,projection:Wn,transformation:z(1/180,1,-1/180,.5)}),Yn=n({},ie,{projection:Wn,transformation:z(1,0,-1,0),scale:function(e){return 2**e},zoom:function(e){return Math.log(e)/Math.LN2},distance:function(e,t){var n=t.lng-e.lng,r=t.lat-e.lat;return Math.sqrt(n*n+r*r)},infinite:!0});ie.Earth=ae,ie.EPSG3395=qn,ie.EPSG3857=ce,ie.EPSG900913=le,ie.EPSG4326=Jn,ie.Simple=Yn;var Xn=re.extend({options:{pane:`overlayPane`,attribution:null,bubblingMouseEvents:!0},addTo:function(e){return e.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(e){return e&&e.removeLayer(this),this},getPane:function(e){return this._map.getPane(e?this.options[e]||e:this.options.pane)},addInteractiveTarget:function(e){return this._map._targets[o(e)]=this,this},removeInteractiveTarget:function(e){return delete this._map._targets[o(e)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(e){var t=e.target;if(t.hasLayer(this)){if(this._map=t,this._zoomAnimated=t._zoomAnimated,this.getEvents){var n=this.getEvents();t.on(n,this),this.once(`remove`,function(){t.off(n,this)},this)}this.onAdd(t),this.fire(`add`),t.fire(`layeradd`,{layer:this})}}});K.include({addLayer:function(e){if(!e._layerAdd)throw Error(`The provided object is not a Layer.`);var t=o(e);return this._layers[t]?this:(this._layers[t]=e,e._mapToAdd=this,e.beforeAdd&&e.beforeAdd(this),this.whenReady(e._layerAdd,e),this)},removeLayer:function(e){var t=o(e);return this._layers[t]?(this._loaded&&e.onRemove(this),delete this._layers[t],this._loaded&&(this.fire(`layerremove`,{layer:e}),e.fire(`remove`)),e._map=e._mapToAdd=null,this):this},hasLayer:function(e){return o(e)in this._layers},eachLayer:function(e,t){for(var n in this._layers)e.call(t,this._layers[n]);return this},_addLayers:function(e){e=e?_(e)?e:[e]:[];for(var t=0,n=e.length;t<n;t++)this.addLayer(e[t])},_addZoomLimit:function(e){(!isNaN(e.options.maxZoom)||!isNaN(e.options.minZoom))&&(this._zoomBoundLayers[o(e)]=e,this._updateZoomLevels())},_removeZoomLimit:function(e){var t=o(e);this._zoomBoundLayers[t]&&(delete this._zoomBoundLayers[t],this._updateZoomLevels())},_updateZoomLevels:function(){var e=1/0,t=-1/0,n=this._getZoomSpan();for(var r in this._zoomBoundLayers){var i=this._zoomBoundLayers[r].options;e=i.minZoom===void 0?e:Math.min(e,i.minZoom),t=i.maxZoom===void 0?t:Math.max(t,i.maxZoom)}this._layersMaxZoom=t===-1/0?void 0:t,this._layersMinZoom=e===1/0?void 0:e,n!==this._getZoomSpan()&&this.fire(`zoomlevelschange`),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Zn=Xn.extend({initialize:function(e,t){p(this,t),this._layers={};var n,r;if(e)for(n=0,r=e.length;n<r;n++)this.addLayer(e[n])},addLayer:function(e){var t=this.getLayerId(e);return this._layers[t]=e,this._map&&this._map.addLayer(e),this},removeLayer:function(e){var t=e in this._layers?e:this.getLayerId(e);return this._map&&this._layers[t]&&this._map.removeLayer(this._layers[t]),delete this._layers[t],this},hasLayer:function(e){return(typeof e==`number`?e:this.getLayerId(e))in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(e){var t=Array.prototype.slice.call(arguments,1),n,r;for(n in this._layers)r=this._layers[n],r[e]&&r[e].apply(r,t);return this},onAdd:function(e){this.eachLayer(e.addLayer,e)},onRemove:function(e){this.eachLayer(e.removeLayer,e)},eachLayer:function(e,t){for(var n in this._layers)e.call(t,this._layers[n]);return this},getLayer:function(e){return this._layers[e]},getLayers:function(){var e=[];return this.eachLayer(e.push,e),e},setZIndex:function(e){return this.invoke(`setZIndex`,e)},getLayerId:function(e){return o(e)}}),Qn=function(e,t){return new Zn(e,t)},$n=Zn.extend({addLayer:function(e){return this.hasLayer(e)?this:(e.addEventParent(this),Zn.prototype.addLayer.call(this,e),this.fire(`layeradd`,{layer:e}))},removeLayer:function(e){return this.hasLayer(e)?(e in this._layers&&(e=this._layers[e]),e.removeEventParent(this),Zn.prototype.removeLayer.call(this,e),this.fire(`layerremove`,{layer:e})):this},setStyle:function(e){return this.invoke(`setStyle`,e)},bringToFront:function(){return this.invoke(`bringToFront`)},bringToBack:function(){return this.invoke(`bringToBack`)},getBounds:function(){var e=new N;for(var t in this._layers){var n=this._layers[t];e.extend(n.getBounds?n.getBounds():n.getLatLng())}return e}}),er=function(e,t){return new $n(e,t)},tr=D.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(e){p(this,e)},createIcon:function(e){return this._createIcon(`icon`,e)},createShadow:function(e){return this._createIcon(`shadow`,e)},_createIcon:function(e,t){var n=this._getIconUrl(e);if(!n){if(e===`icon`)throw Error(`iconUrl not set in Icon options (see the docs).`);return null}var r=this._createImg(n,t&&t.tagName===`IMG`?t:null);return this._setIconStyles(r,e),(this.options.crossOrigin||this.options.crossOrigin===``)&&(r.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),r},_setIconStyles:function(e,t){var n=this.options,r=n[t+`Size`];typeof r==`number`&&(r=[r,r]);var i=A(r),a=A(t===`shadow`&&n.shadowAnchor||n.iconAnchor||i&&i.divideBy(2,!0));e.className=`leaflet-marker-`+t+` `+(n.className||``),a&&(e.style.marginLeft=-a.x+`px`,e.style.marginTop=-a.y+`px`),i&&(e.style.width=i.x+`px`,e.style.height=i.y+`px`)},_createImg:function(e,t){return t||=document.createElement(`img`),t.src=e,t},_getIconUrl:function(e){return V.retina&&this.options[e+`RetinaUrl`]||this.options[e+`Url`]}});function nr(e){return new tr(e)}var rr=tr.extend({options:{iconUrl:`marker-icon.png`,iconRetinaUrl:`marker-icon-2x.png`,shadowUrl:`marker-shadow.png`,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(e){return typeof rr.imagePath!=`string`&&(rr.imagePath=this._detectIconPath()),(this.options.imagePath||rr.imagePath)+tr.prototype._getIconUrl.call(this,e)},_stripUrl:function(e){var t=function(e,t,n){var r=t.exec(e);return r&&r[n]};return e=t(e,/^url\((['"])?(.+)\1\)$/,2),e&&t(e,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var e=H(`div`,`leaflet-default-icon-path`,document.body),t=yt(e,`background-image`)||yt(e,`backgroundImage`);if(document.body.removeChild(e),t=this._stripUrl(t),t)return t;var n=document.querySelector(`link[href$="leaflet.css"]`);return n?n.href.substring(0,n.href.length-11-1):``}}),ir=xn.extend({initialize:function(e){this._marker=e},addHooks:function(){var e=this._marker._icon;this._draggable||=new wn(e,e,!0),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),U(e,`leaflet-marker-draggable`)},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Tt(this._marker._icon,`leaflet-marker-draggable`)},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(e){var t=this._marker,n=t._map,r=this._marker.options.autoPanSpeed,i=this._marker.options.autoPanPadding,a=Nt(t._icon),o=n.getPixelBounds(),s=n.getPixelOrigin(),c=M(o.min._subtract(s).add(i),o.max._subtract(s).subtract(i));if(!c.contains(a)){var l=A((Math.max(c.max.x,a.x)-c.max.x)/(o.max.x-c.max.x)-(Math.min(c.min.x,a.x)-c.min.x)/(o.min.x-c.min.x),(Math.max(c.max.y,a.y)-c.max.y)/(o.max.y-c.max.y)-(Math.min(c.min.y,a.y)-c.min.y)/(o.min.y-c.min.y)).multiplyBy(r);n.panBy(l,{animate:!1}),this._draggable._newPos._add(l),this._draggable._startPos._add(l),Mt(t._icon,this._draggable._newPos),this._onDrag(e),this._panRequest=T(this._adjustPan.bind(this,e))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire(`movestart`).fire(`dragstart`)},_onPreDrag:function(e){this._marker.options.autoPan&&(E(this._panRequest),this._panRequest=T(this._adjustPan.bind(this,e)))},_onDrag:function(e){var t=this._marker,n=t._shadow,r=Nt(t._icon),i=t._map.layerPointToLatLng(r);n&&Mt(n,r),t._latlng=i,e.latlng=i,e.oldLatLng=this._oldLatLng,t.fire(`move`,e).fire(`drag`,e)},_onDragEnd:function(e){E(this._panRequest),delete this._oldLatLng,this._marker.fire(`moveend`).fire(`dragend`,e)}}),ar=Xn.extend({options:{icon:new rr,interactive:!0,keyboard:!0,title:``,alt:`Marker`,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:`markerPane`,shadowPane:`shadowPane`,bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(e,t){p(this,t),this._latlng=I(e)},onAdd:function(e){this._zoomAnimated=this._zoomAnimated&&e.options.markerZoomAnimation,this._zoomAnimated&&e.on(`zoomanim`,this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(e){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&e.off(`zoomanim`,this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(e){var t=this._latlng;return this._latlng=I(e),this.update(),this.fire(`move`,{oldLatLng:t,latlng:this._latlng})},setZIndexOffset:function(e){return this.options.zIndexOffset=e,this.update()},getIcon:function(){return this.options.icon},setIcon:function(e){return this.options.icon=e,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var e=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(e)}return this},_initIcon:function(){var e=this.options,t=`leaflet-zoom-`+(this._zoomAnimated?`animated`:`hide`),n=e.icon.createIcon(this._icon),r=!1;n!==this._icon&&(this._icon&&this._removeIcon(),r=!0,e.title&&(n.title=e.title),n.tagName===`IMG`&&(n.alt=e.alt||``)),U(n,t),e.keyboard&&(n.tabIndex=`0`,n.setAttribute(`role`,`button`)),this._icon=n,e.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&W(n,`focus`,this._panOnFocus,this);var i=e.icon.createShadow(this._shadow),a=!1;i!==this._shadow&&(this._removeShadow(),a=!0),i&&(U(i,t),i.alt=``),this._shadow=i,e.opacity<1&&this._updateOpacity(),r&&this.getPane().appendChild(this._icon),this._initInteraction(),i&&a&&this.getPane(e.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&G(this._icon,`focus`,this._panOnFocus,this),bt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&bt(this._shadow),this._shadow=null},_setPos:function(e){this._icon&&Mt(this._icon,e),this._shadow&&Mt(this._shadow,e),this._zIndex=e.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(e){this._icon&&(this._icon.style.zIndex=this._zIndex+e)},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center).round();this._setPos(t)},_initInteraction:function(){if(this.options.interactive&&(U(this._icon,`leaflet-interactive`),this.addInteractiveTarget(this._icon),ir)){var e=this.options.draggable;this.dragging&&(e=this.dragging.enabled(),this.dragging.disable()),this.dragging=new ir(this),e&&this.dragging.enable()}},setOpacity:function(e){return this.options.opacity=e,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var e=this.options.opacity;this._icon&&Ot(this._icon,e),this._shadow&&Ot(this._shadow,e)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var e=this._map;if(e){var t=this.options.icon.options,n=t.iconSize?A(t.iconSize):A(0,0),r=t.iconAnchor?A(t.iconAnchor):A(0,0);e.panInside(this._latlng,{paddingTopLeft:r,paddingBottomRight:n.subtract(r)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function or(e,t){return new ar(e,t)}var sr=Xn.extend({options:{stroke:!0,color:`#3388ff`,weight:3,opacity:1,lineCap:`round`,lineJoin:`round`,dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:`evenodd`,interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(e){this._renderer=e.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(e){return p(this,e),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&e&&Object.prototype.hasOwnProperty.call(e,`weight`)&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),cr=sr.extend({options:{fill:!0,radius:10},initialize:function(e,t){p(this,t),this._latlng=I(e),this._radius=this.options.radius},setLatLng:function(e){var t=this._latlng;return this._latlng=I(e),this.redraw(),this.fire(`move`,{oldLatLng:t,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(e){return this.options.radius=this._radius=e,this.redraw()},getRadius:function(){return this._radius},setStyle:function(e){var t=e&&e.radius||this._radius;return sr.prototype.setStyle.call(this,e),this.setRadius(t),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var e=this._radius,t=this._radiusY||e,n=this._clickTolerance(),r=[e+n,t+n];this._pxBounds=new j(this._point.subtract(r),this._point.add(r))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(e){return e.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function lr(e,t){return new cr(e,t)}var ur=cr.extend({initialize:function(e,t,r){if(typeof t==`number`&&(t=n({},r,{radius:t})),p(this,t),this._latlng=I(e),isNaN(this.options.radius))throw Error(`Circle radius cannot be NaN`);this._mRadius=this.options.radius},setRadius:function(e){return this._mRadius=e,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var e=[this._radius,this._radiusY||this._radius];return new N(this._map.layerPointToLatLng(this._point.subtract(e)),this._map.layerPointToLatLng(this._point.add(e)))},setStyle:sr.prototype.setStyle,_project:function(){var e=this._latlng.lng,t=this._latlng.lat,n=this._map,r=n.options.crs;if(r.distance===ae.distance){var i=Math.PI/180,a=this._mRadius/ae.R/i,o=n.project([t+a,e]),s=n.project([t-a,e]),c=o.add(s).divideBy(2),l=n.unproject(c).lat,u=Math.acos((Math.cos(a*i)-Math.sin(t*i)*Math.sin(l*i))/(Math.cos(t*i)*Math.cos(l*i)))/i;(isNaN(u)||u===0)&&(u=a/Math.cos(Math.PI/180*t)),this._point=c.subtract(n.getPixelOrigin()),this._radius=isNaN(u)?0:c.x-n.project([l,e-u]).x,this._radiusY=c.y-o.y}else{var d=r.unproject(r.project(this._latlng).subtract([this._mRadius,0]));this._point=n.latLngToLayerPoint(this._latlng),this._radius=this._point.x-n.latLngToLayerPoint(d).x}this._updateBounds()}});function dr(e,t,n){return new ur(e,t,n)}var fr=sr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(e,t){p(this,t),this._setLatLngs(e)},getLatLngs:function(){return this._latlngs},setLatLngs:function(e){return this._setLatLngs(e),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(e){for(var t=1/0,n=null,r=zn,i,a,o=0,s=this._parts.length;o<s;o++)for(var c=this._parts[o],l=1,u=c.length;l<u;l++){i=c[l-1],a=c[l];var d=r(e,i,a,!0);d<t&&(t=d,n=r(e,i,a))}return n&&(n.distance=Math.sqrt(t)),n},getCenter:function(){if(!this._map)throw Error(`Must add layer to map before using getCenter()`);return Hn(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(e,t){return t||=this._defaultShape(),e=I(e),t.push(e),this._bounds.extend(e),this.redraw()},_setLatLngs:function(e){this._bounds=new N,this._latlngs=this._convertLatLngs(e)},_defaultShape:function(){return Bn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(e){for(var t=[],n=Bn(e),r=0,i=e.length;r<i;r++)n?(t[r]=I(e[r]),this._bounds.extend(t[r])):t[r]=this._convertLatLngs(e[r]);return t},_project:function(){var e=new j;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,e),this._bounds.isValid()&&e.isValid()&&(this._rawPxBounds=e,this._updateBounds())},_updateBounds:function(){var e=this._clickTolerance(),t=new O(e,e);this._rawPxBounds&&(this._pxBounds=new j([this._rawPxBounds.min.subtract(t),this._rawPxBounds.max.add(t)]))},_projectLatlngs:function(e,t,n){var r=e[0]instanceof F,i=e.length,a,o;if(r){for(o=[],a=0;a<i;a++)o[a]=this._map.latLngToLayerPoint(e[a]),n.extend(o[a]);t.push(o)}else for(a=0;a<i;a++)this._projectLatlngs(e[a],t,n)},_clipPoints:function(){var e=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(e))){if(this.options.noClip){this._parts=this._rings;return}var t=this._parts,n,r,i,a,o,s,c;for(n=0,i=0,a=this._rings.length;n<a;n++)for(c=this._rings[n],r=0,o=c.length;r<o-1;r++)s=Fn(c[r],c[r+1],e,r,!0),s&&(t[i]=t[i]||[],t[i].push(s[0]),(s[1]!==c[r+1]||r===o-2)&&(t[i].push(s[1]),i++))}},_simplifyPoints:function(){for(var e=this._parts,t=this.options.smoothFactor,n=0,r=e.length;n<r;n++)e[n]=kn(e[n],t)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(e,t){var n,r,i,a,o,s,c=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(e))return!1;for(n=0,a=this._parts.length;n<a;n++)for(s=this._parts[n],r=0,o=s.length,i=o-1;r<o;i=r++)if(!(!t&&r===0)&&An(e,s[i],s[r])<=c)return!0;return!1}});function pr(e,t){return new fr(e,t)}fr._flat=Vn;var mr=fr.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw Error(`Must add layer to map before using getCenter()`);return En(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(e){var t=fr.prototype._convertLatLngs.call(this,e),n=t.length;return n>=2&&t[0]instanceof F&&t[0].equals(t[n-1])&&t.pop(),t},_setLatLngs:function(e){fr.prototype._setLatLngs.call(this,e),Bn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Bn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var e=this._renderer._bounds,t=this.options.weight,n=new O(t,t);if(e=new j(e.min.subtract(n),e.max.add(n)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(e))){if(this.options.noClip){this._parts=this._rings;return}for(var r=0,i=this._rings.length,a;r<i;r++)a=Tn(this._rings[r],e,!0),a.length&&this._parts.push(a)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(e){var t=!1,n,r,i,a,o,s,c,l;if(!this._pxBounds||!this._pxBounds.contains(e))return!1;for(a=0,c=this._parts.length;a<c;a++)for(n=this._parts[a],o=0,l=n.length,s=l-1;o<l;s=o++)r=n[o],i=n[s],r.y>e.y!=i.y>e.y&&e.x<(i.x-r.x)*(e.y-r.y)/(i.y-r.y)+r.x&&(t=!t);return t||fr.prototype._containsPoint.call(this,e,!0)}});function hr(e,t){return new mr(e,t)}var gr=$n.extend({initialize:function(e,t){p(this,t),this._layers={},e&&this.addData(e)},addData:function(e){var t=_(e)?e:e.features,n,r,i;if(t){for(n=0,r=t.length;n<r;n++)i=t[n],(i.geometries||i.geometry||i.features||i.coordinates)&&this.addData(i);return this}var a=this.options;if(a.filter&&!a.filter(e))return this;var o=_r(e,a);return o?(o.feature=wr(e),o.defaultOptions=o.options,this.resetStyle(o),a.onEachFeature&&a.onEachFeature(e,o),this.addLayer(o)):this},resetStyle:function(e){return e===void 0?this.eachLayer(this.resetStyle,this):(e.options=n({},e.defaultOptions),this._setLayerStyle(e,this.options.style),this)},setStyle:function(e){return this.eachLayer(function(t){this._setLayerStyle(t,e)},this)},_setLayerStyle:function(e,t){e.setStyle&&(typeof t==`function`&&(t=t(e.feature)),e.setStyle(t))}});function _r(e,t){var n=e.type===`Feature`?e.geometry:e,r=n?n.coordinates:null,i=[],a=t&&t.pointToLayer,o=t&&t.coordsToLatLng||yr,s,c,l,u;if(!r&&!n)return null;switch(n.type){case`Point`:return s=o(r),vr(a,e,s,t);case`MultiPoint`:for(l=0,u=r.length;l<u;l++)s=o(r[l]),i.push(vr(a,e,s,t));return new $n(i);case`LineString`:case`MultiLineString`:return c=br(r,n.type===`LineString`?0:1,o),new fr(c,t);case`Polygon`:case`MultiPolygon`:return c=br(r,n.type===`Polygon`?1:2,o),new mr(c,t);case`GeometryCollection`:for(l=0,u=n.geometries.length;l<u;l++){var d=_r({geometry:n.geometries[l],type:`Feature`,properties:e.properties},t);d&&i.push(d)}return new $n(i);case`FeatureCollection`:for(l=0,u=n.features.length;l<u;l++){var f=_r(n.features[l],t);f&&i.push(f)}return new $n(i);default:throw Error(`Invalid GeoJSON object.`)}}function vr(e,t,n,r){return e?e(t,n):new ar(n,r&&r.markersInheritOptions&&r)}function yr(e){return new F(e[1],e[0],e[2])}function br(e,t,n){for(var r=[],i=0,a=e.length,o;i<a;i++)o=t?br(e[i],t-1,n):(n||yr)(e[i]),r.push(o);return r}function xr(e,t){return e=I(e),e.alt===void 0?[u(e.lng,t),u(e.lat,t)]:[u(e.lng,t),u(e.lat,t),u(e.alt,t)]}function Sr(e,t,n,r){for(var i=[],a=0,o=e.length;a<o;a++)i.push(t?Sr(e[a],Bn(e[a])?0:t-1,n,r):xr(e[a],r));return!t&&n&&i.length>0&&i.push(i[0].slice()),i}function Cr(e,t){return e.feature?n({},e.feature,{geometry:t}):wr(t)}function wr(e){return e.type===`Feature`||e.type===`FeatureCollection`?e:{type:`Feature`,properties:{},geometry:e}}var Tr={toGeoJSON:function(e){return Cr(this,{type:`Point`,coordinates:xr(this.getLatLng(),e)})}};ar.include(Tr),ur.include(Tr),cr.include(Tr),fr.include({toGeoJSON:function(e){var t=!Bn(this._latlngs),n=Sr(this._latlngs,+!!t,!1,e);return Cr(this,{type:(t?`Multi`:``)+`LineString`,coordinates:n})}}),mr.include({toGeoJSON:function(e){var t=!Bn(this._latlngs),n=t&&!Bn(this._latlngs[0]),r=Sr(this._latlngs,n?2:+!!t,!0,e);return t||(r=[r]),Cr(this,{type:(n?`Multi`:``)+`Polygon`,coordinates:r})}}),Zn.include({toMultiPoint:function(e){var t=[];return this.eachLayer(function(n){t.push(n.toGeoJSON(e).geometry.coordinates)}),Cr(this,{type:`MultiPoint`,coordinates:t})},toGeoJSON:function(e){var t=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(t===`MultiPoint`)return this.toMultiPoint(e);var n=t===`GeometryCollection`,r=[];return this.eachLayer(function(t){if(t.toGeoJSON){var i=t.toGeoJSON(e);if(n)r.push(i.geometry);else{var a=wr(i);a.type===`FeatureCollection`?r.push.apply(r,a.features):r.push(a)}}}),n?Cr(this,{geometries:r,type:`GeometryCollection`}):{type:`FeatureCollection`,features:r}}});function J(e,t){return new gr(e,t)}var Er=J,Dr=Xn.extend({options:{opacity:1,alt:``,interactive:!1,crossOrigin:!1,errorOverlayUrl:``,zIndex:1,className:``},initialize:function(e,t,n){this._url=e,this._bounds=P(t),p(this,n)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(U(this._image,`leaflet-interactive`),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){bt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(e){return this.options.opacity=e,this._image&&this._updateOpacity(),this},setStyle:function(e){return e.opacity&&this.setOpacity(e.opacity),this},bringToFront:function(){return this._map&&St(this._image),this},bringToBack:function(){return this._map&&Ct(this._image),this},setUrl:function(e){return this._url=e,this._image&&(this._image.src=e),this},setBounds:function(e){return this._bounds=P(e),this._map&&this._reset(),this},getEvents:function(){var e={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var e=this._url.tagName===`IMG`,t=this._image=e?this._url:H(`img`);if(U(t,`leaflet-image-layer`),this._zoomAnimated&&U(t,`leaflet-zoom-animated`),this.options.className&&U(t,this.options.className),t.onselectstart=l,t.onmousemove=l,t.onload=i(this.fire,this,`load`),t.onerror=i(this._overlayOnError,this,`error`),(this.options.crossOrigin||this.options.crossOrigin===``)&&(t.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),e){this._url=t.src;return}t.src=this._url,t.alt=this.options.alt},_animateZoom:function(e){var t=this._map.getZoomScale(e.zoom),n=this._map._latLngBoundsToNewLayerBounds(this._bounds,e.zoom,e.center).min;jt(this._image,n,t)},_reset:function(){var e=this._image,t=new j(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),n=t.getSize();Mt(e,t.min),e.style.width=n.x+`px`,e.style.height=n.y+`px`},_updateOpacity:function(){Ot(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire(`error`);var e=this.options.errorOverlayUrl;e&&this._url!==e&&(this._url=e,this._image.src=e)},getCenter:function(){return this._bounds.getCenter()}}),Or=function(e,t,n){return new Dr(e,t,n)},kr=Dr.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var e=this._url.tagName===`VIDEO`,t=this._image=e?this._url:H(`video`);if(U(t,`leaflet-image-layer`),this._zoomAnimated&&U(t,`leaflet-zoom-animated`),this.options.className&&U(t,this.options.className),t.onselectstart=l,t.onmousemove=l,t.onloadeddata=i(this.fire,this,`load`),e){for(var n=t.getElementsByTagName(`source`),r=[],a=0;a<n.length;a++)r.push(n[a].src);this._url=n.length>0?r:[t.src];return}_(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(t.style,`objectFit`)&&(t.style.objectFit=`fill`),t.autoplay=!!this.options.autoplay,t.loop=!!this.options.loop,t.muted=!!this.options.muted,t.playsInline=!!this.options.playsInline;for(var o=0;o<this._url.length;o++){var s=H(`source`);s.src=this._url[o],t.appendChild(s)}}});function Ar(e,t,n){return new kr(e,t,n)}var jr=Dr.extend({_initImage:function(){var e=this._image=this._url;U(e,`leaflet-image-layer`),this._zoomAnimated&&U(e,`leaflet-zoom-animated`),this.options.className&&U(e,this.options.className),e.onselectstart=l,e.onmousemove=l}});function Mr(e,t,n){return new jr(e,t,n)}var Nr=Xn.extend({options:{interactive:!1,offset:[0,0],className:``,pane:void 0,content:``},initialize:function(e,t){e&&(e instanceof F||_(e))?(this._latlng=I(e),p(this,t)):(p(this,e),this._source=t),this.options.content&&(this._content=this.options.content)},openOn:function(e){return e=arguments.length?e:this._source._map,e.hasLayer(this)||e.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(e){return this._map?this.close():(arguments.length?this._source=e:e=this._source,this._prepareOpen(),this.openOn(e._map)),this},onAdd:function(e){this._zoomAnimated=e._zoomAnimated,this._container||this._initLayout(),e._fadeAnimated&&Ot(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),e._fadeAnimated&&Ot(this._container,1),this.bringToFront(),this.options.interactive&&(U(this._container,`leaflet-interactive`),this.addInteractiveTarget(this._container))},onRemove:function(e){e._fadeAnimated?(Ot(this._container,0),this._removeTimeout=setTimeout(i(bt,void 0,this._container),200)):bt(this._container),this.options.interactive&&(Tt(this._container,`leaflet-interactive`),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(e){return this._latlng=I(e),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(e){return this._content=e,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility=`hidden`,this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility=``,this._adjustPan())},getEvents:function(){var e={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&St(this._container),this},bringToBack:function(){return this._map&&Ct(this._container),this},_prepareOpen:function(e){var t=this._source;if(!t._map)return!1;if(t instanceof $n){t=null;var n=this._source._layers;for(var r in n)if(n[r]._map){t=n[r];break}if(!t)return!1;this._source=t}if(!e){if(t.getCenter)e=t.getCenter();else if(t.getLatLng)e=t.getLatLng();else if(t.getBounds)e=t.getBounds().getCenter();else throw Error(`Unable to get source layer LatLng.`)}return this.setLatLng(e),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var e=this._contentNode,t=typeof this._content==`function`?this._content(this._source||this):this._content;if(typeof t==`string`)e.innerHTML=t;else{for(;e.hasChildNodes();)e.removeChild(e.firstChild);e.appendChild(t)}this.fire(`contentupdate`)}},_updatePosition:function(){if(this._map){var e=this._map.latLngToLayerPoint(this._latlng),t=A(this.options.offset),n=this._getAnchor();this._zoomAnimated?Mt(this._container,e.add(n)):t=t.add(e).add(n);var r=this._containerBottom=-t.y,i=this._containerLeft=-Math.round(this._containerWidth/2)+t.x;this._container.style.bottom=r+`px`,this._container.style.left=i+`px`}},_getAnchor:function(){return[0,0]}});K.include({_initOverlay:function(e,t,n,r){var i=t;return i instanceof e||(i=new e(r).setContent(t)),n&&i.setLatLng(n),i}}),Xn.include({_initOverlay:function(e,t,n,r){var i=n;return i instanceof e?(p(i,r),i._source=this):(i=t&&!r?t:new e(r,this),i.setContent(n)),i}});var Pr=Nr.extend({options:{pane:`popupPane`,offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:``},openOn:function(e){return e=arguments.length?e:this._source._map,!e.hasLayer(this)&&e._popup&&e._popup.options.autoClose&&e.removeLayer(e._popup),e._popup=this,Nr.prototype.openOn.call(this,e)},onAdd:function(e){Nr.prototype.onAdd.call(this,e),e.fire(`popupopen`,{popup:this}),this._source&&(this._source.fire(`popupopen`,{popup:this},!0),this._source instanceof sr||this._source.on(`preclick`,Qt))},onRemove:function(e){Nr.prototype.onRemove.call(this,e),e.fire(`popupclose`,{popup:this}),this._source&&(this._source.fire(`popupclose`,{popup:this},!0),this._source instanceof sr||this._source.off(`preclick`,Qt))},getEvents:function(){var e=Nr.prototype.getEvents.call(this);return(this.options.closeOnClick===void 0?this._map.options.closePopupOnClick:this.options.closeOnClick)&&(e.preclick=this.close),this.options.keepInView&&(e.moveend=this._adjustPan),e},_initLayout:function(){var e=`leaflet-popup`,t=this._container=H(`div`,e+` `+(this.options.className||``)+` leaflet-zoom-animated`),n=this._wrapper=H(`div`,e+`-content-wrapper`,t);if(this._contentNode=H(`div`,e+`-content`,n),en(t),$t(this._contentNode),W(t,`contextmenu`,Qt),this._tipContainer=H(`div`,e+`-tip-container`,t),this._tip=H(`div`,e+`-tip`,this._tipContainer),this.options.closeButton){var r=this._closeButton=H(`a`,e+`-close-button`,t);r.setAttribute(`role`,`button`),r.setAttribute(`aria-label`,`Close popup`),r.href=`#close`,r.innerHTML=`<span aria-hidden="true">&#215;</span>`,W(r,`click`,function(e){tn(e),this.close()},this)}},_updateLayout:function(){var e=this._contentNode,t=e.style;t.width=``,t.whiteSpace=`nowrap`;var n=e.offsetWidth;n=Math.min(n,this.options.maxWidth),n=Math.max(n,this.options.minWidth),t.width=n+1+`px`,t.whiteSpace=``,t.height=``;var r=e.offsetHeight,i=this.options.maxHeight,a=`leaflet-popup-scrolled`;i&&r>i?(t.height=i+`px`,U(e,a)):Tt(e,a),this._containerWidth=this._container.offsetWidth},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center),n=this._getAnchor();Mt(this._container,t.add(n))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var e=this._map,t=parseInt(yt(this._container,`marginBottom`),10)||0,n=this._container.offsetHeight+t,r=this._containerWidth,i=new O(this._containerLeft,-n-this._containerBottom);i._add(Nt(this._container));var a=e.layerPointToContainerPoint(i),o=A(this.options.autoPanPadding),s=A(this.options.autoPanPaddingTopLeft||o),c=A(this.options.autoPanPaddingBottomRight||o),l=e.getSize(),u=0,d=0;a.x+r+c.x>l.x&&(u=a.x+r-l.x+c.x),a.x-u-s.x<0&&(u=a.x-s.x),a.y+n+c.y>l.y&&(d=a.y+n-l.y+c.y),a.y-d-s.y<0&&(d=a.y-s.y),(u||d)&&(this.options.keepInView&&(this._autopanning=!0),e.fire(`autopanstart`).panBy([u,d]))}},_getAnchor:function(){return A(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Fr=function(e,t){return new Pr(e,t)};K.mergeOptions({closePopupOnClick:!0}),K.include({openPopup:function(e,t,n){return this._initOverlay(Pr,e,t,n).openOn(this),this},closePopup:function(e){return e=arguments.length?e:this._popup,e&&e.close(),this}}),Xn.include({bindPopup:function(e,t){return this._popup=this._initOverlay(Pr,this._popup,e,t),this._popupHandlersAdded||=(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),!0),this},unbindPopup:function(){return this._popup&&=(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,null),this},openPopup:function(e){return this._popup&&(this instanceof $n||(this._popup._source=this),this._popup._prepareOpen(e||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(e){return this._popup&&this._popup.setContent(e),this},getPopup:function(){return this._popup},_openPopup:function(e){if(!(!this._popup||!this._map)){nn(e);var t=e.layer||e.target;if(this._popup._source===t&&!(t instanceof sr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(e.latlng);return}this._popup._source=t,this.openPopup(e.latlng)}},_movePopup:function(e){this._popup.setLatLng(e.latlng)},_onKeyPress:function(e){e.originalEvent.keyCode===13&&this._openPopup(e)}});var Ir=Nr.extend({options:{pane:`tooltipPane`,offset:[0,0],direction:`auto`,permanent:!1,sticky:!1,opacity:.9},onAdd:function(e){Nr.prototype.onAdd.call(this,e),this.setOpacity(this.options.opacity),e.fire(`tooltipopen`,{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire(`tooltipopen`,{tooltip:this},!0))},onRemove:function(e){Nr.prototype.onRemove.call(this,e),e.fire(`tooltipclose`,{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire(`tooltipclose`,{tooltip:this},!0))},getEvents:function(){var e=Nr.prototype.getEvents.call(this);return this.options.permanent||(e.preclick=this.close),e},_initLayout:function(){var e=`leaflet-tooltip `+(this.options.className||``)+` leaflet-zoom-`+(this._zoomAnimated?`animated`:`hide`);this._contentNode=this._container=H(`div`,e),this._container.setAttribute(`role`,`tooltip`),this._container.setAttribute(`id`,`leaflet-tooltip-`+o(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(e){var t,n,r=this._map,i=this._container,a=r.latLngToContainerPoint(r.getCenter()),o=r.layerPointToContainerPoint(e),s=this.options.direction,c=i.offsetWidth,l=i.offsetHeight,u=A(this.options.offset),d=this._getAnchor();s===`top`?(t=c/2,n=l):s===`bottom`?(t=c/2,n=0):s===`center`?(t=c/2,n=l/2):s===`right`?(t=0,n=l/2):s===`left`?(t=c,n=l/2):o.x<a.x?(s=`right`,t=0,n=l/2):(s=`left`,t=c+(u.x+d.x)*2,n=l/2),e=e.subtract(A(t,n,!0)).add(u).add(d),Tt(i,`leaflet-tooltip-right`),Tt(i,`leaflet-tooltip-left`),Tt(i,`leaflet-tooltip-top`),Tt(i,`leaflet-tooltip-bottom`),U(i,`leaflet-tooltip-`+s),Mt(i,e)},_updatePosition:function(){var e=this._map.latLngToLayerPoint(this._latlng);this._setPosition(e)},setOpacity:function(e){this.options.opacity=e,this._container&&Ot(this._container,e)},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center);this._setPosition(t)},_getAnchor:function(){return A(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Lr=function(e,t){return new Ir(e,t)};K.include({openTooltip:function(e,t,n){return this._initOverlay(Ir,e,t,n).openOn(this),this},closeTooltip:function(e){return e.close(),this}}),Xn.include({bindTooltip:function(e,t){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ir,this._tooltip,e,t),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&=(this._initTooltipInteractions(!0),this.closeTooltip(),null),this},_initTooltipInteractions:function(e){if(!(!e&&this._tooltipHandlersAdded)){var t=e?`off`:`on`,n={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?n.add=this._openTooltip:(n.mouseover=this._openTooltip,n.mouseout=this.closeTooltip,n.click=this._openTooltip,this._map?this._addFocusListeners():n.add=this._addFocusListeners),this._tooltip.options.sticky&&(n.mousemove=this._moveTooltip),this[t](n),this._tooltipHandlersAdded=!e}},openTooltip:function(e){return this._tooltip&&(this instanceof $n||(this._tooltip._source=this),this._tooltip._prepareOpen(e)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(e){return this._tooltip&&this._tooltip.setContent(e),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(e){var t=typeof e.getElement==`function`&&e.getElement();t&&(W(t,`focus`,function(){this._tooltip._source=e,this.openTooltip()},this),W(t,`blur`,this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(e){var t=typeof e.getElement==`function`&&e.getElement();t&&t.setAttribute(`aria-describedby`,this._tooltip._container.id)},_openTooltip:function(e){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var t=this;this._map.once(`moveend`,function(){t._openOnceFlag=!1,t._openTooltip(e)});return}this._tooltip._source=e.layer||e.target,this.openTooltip(this._tooltip.options.sticky?e.latlng:void 0)}},_moveTooltip:function(e){var t=e.latlng,n,r;this._tooltip.options.sticky&&e.originalEvent&&(n=this._map.mouseEventToContainerPoint(e.originalEvent),r=this._map.containerPointToLayerPoint(n),t=this._map.layerPointToLatLng(r)),this._tooltip.setLatLng(t)}});var Rr=tr.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:`leaflet-div-icon`},createIcon:function(e){var t=e&&e.tagName===`DIV`?e:document.createElement(`div`),n=this.options;if(n.html instanceof Element?(xt(t),t.appendChild(n.html)):t.innerHTML=n.html===!1?``:n.html,n.bgPos){var r=A(n.bgPos);t.style.backgroundPosition=-r.x+`px `+-r.y+`px`}return this._setIconStyles(t,`icon`),t},createShadow:function(){return null}});function zr(e){return new Rr(e)}tr.Default=rr;var Br=Xn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:V.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:`tilePane`,className:``,keepBuffer:2},initialize:function(e){p(this,e)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(e){e._addZoomLimit(this)},onRemove:function(e){this._removeAllTiles(),bt(this._container),e._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(St(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Ct(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(e){return this.options.opacity=e,this._updateOpacity(),this},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var e=this._clampZoom(this._map.getZoom());e!==this._tileZoom&&(this._tileZoom=e,this._updateLevels()),this._update()}return this},getEvents:function(){var e={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||=s(this._onMoveEnd,this.options.updateInterval,this),e.move=this._onMove),this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},createTile:function(){return document.createElement(`div`)},getTileSize:function(){var e=this.options.tileSize;return e instanceof O?e:new O(e,e)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(e){for(var t=this.getPane().children,n=-e(-1/0,1/0),r=0,i=t.length,a;r<i;r++)a=t[r].style.zIndex,t[r]!==this._container&&a&&(n=e(n,+a));isFinite(n)&&(this.options.zIndex=n+e(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!V.ielt9){Ot(this._container,this.options.opacity);var e=+new Date,t=!1,n=!1;for(var r in this._tiles){var i=this._tiles[r];if(!(!i.current||!i.loaded)){var a=Math.min(1,(e-i.loaded)/200);Ot(i.el,a),a<1?t=!0:(i.active?n=!0:this._onOpaqueTile(i),i.active=!0)}}n&&!this._noPrune&&this._pruneTiles(),t&&(E(this._fadeFrame),this._fadeFrame=T(this._updateOpacity,this))}},_onOpaqueTile:l,_initContainer:function(){this._container||(this._container=H(`div`,`leaflet-layer `+(this.options.className||``)),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var e=this._tileZoom,t=this.options.maxZoom;if(e!==void 0){for(var n in this._levels)n=Number(n),this._levels[n].el.children.length||n===e?(this._levels[n].el.style.zIndex=t-Math.abs(e-n),this._onUpdateLevel(n)):(bt(this._levels[n].el),this._removeTilesAtZoom(n),this._onRemoveLevel(n),delete this._levels[n]);var r=this._levels[e],i=this._map;return r||(r=this._levels[e]={},r.el=H(`div`,`leaflet-tile-container leaflet-zoom-animated`,this._container),r.el.style.zIndex=t,r.origin=i.project(i.unproject(i.getPixelOrigin()),e).round(),r.zoom=e,this._setZoomTransform(r,i.getCenter(),i.getZoom()),r.el.offsetWidth,this._onCreateLevel(r)),this._level=r,r}},_onUpdateLevel:l,_onRemoveLevel:l,_onCreateLevel:l,_pruneTiles:function(){if(this._map){var e,t,n=this._map.getZoom();if(n>this.options.maxZoom||n<this.options.minZoom){this._removeAllTiles();return}for(e in this._tiles)t=this._tiles[e],t.retain=t.current;for(e in this._tiles)if(t=this._tiles[e],t.current&&!t.active){var r=t.coords;this._retainParent(r.x,r.y,r.z,r.z-5)||this._retainChildren(r.x,r.y,r.z,r.z+2)}for(e in this._tiles)this._tiles[e].retain||this._removeTile(e)}},_removeTilesAtZoom:function(e){for(var t in this._tiles)this._tiles[t].coords.z===e&&this._removeTile(t)},_removeAllTiles:function(){for(var e in this._tiles)this._removeTile(e)},_invalidateAll:function(){for(var e in this._levels)bt(this._levels[e].el),this._onRemoveLevel(Number(e)),delete this._levels[e];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(e,t,n,r){var i=Math.floor(e/2),a=Math.floor(t/2),o=n-1,s=new O(+i,+a);s.z=+o;var c=this._tileCoordsToKey(s),l=this._tiles[c];return l&&l.active?(l.retain=!0,!0):(l&&l.loaded&&(l.retain=!0),o>r&&this._retainParent(i,a,o,r))},_retainChildren:function(e,t,n,r){for(var i=2*e;i<2*e+2;i++)for(var a=2*t;a<2*t+2;a++){var o=new O(i,a);o.z=n+1;var s=this._tileCoordsToKey(o),c=this._tiles[s];if(c&&c.active){c.retain=!0;continue}c&&c.loaded&&(c.retain=!0),n+1<r&&this._retainChildren(i,a,n+1,r)}},_resetView:function(e){var t=e&&(e.pinch||e.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),t,t)},_animateZoom:function(e){this._setView(e.center,e.zoom,!0,e.noUpdate)},_clampZoom:function(e){var t=this.options;return t.minNativeZoom!==void 0&&e<t.minNativeZoom?t.minNativeZoom:t.maxNativeZoom!==void 0&&t.maxNativeZoom<e?t.maxNativeZoom:e},_setView:function(e,t,n,r){var i=Math.round(t);i=this.options.maxZoom!==void 0&&i>this.options.maxZoom||this.options.minZoom!==void 0&&i<this.options.minZoom?void 0:this._clampZoom(i);var a=this.options.updateWhenZooming&&i!==this._tileZoom;(!r||a)&&(this._tileZoom=i,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),i!==void 0&&this._update(e),n||this._pruneTiles(),this._noPrune=!!n),this._setZoomTransforms(e,t)},_setZoomTransforms:function(e,t){for(var n in this._levels)this._setZoomTransform(this._levels[n],e,t)},_setZoomTransform:function(e,t,n){var r=this._map.getZoomScale(n,e.zoom),i=e.origin.multiplyBy(r).subtract(this._map._getNewPixelOrigin(t,n)).round();V.any3d?jt(e.el,i,r):Mt(e.el,i)},_resetGrid:function(){var e=this._map,t=e.options.crs,n=this._tileSize=this.getTileSize(),r=this._tileZoom,i=this._map.getPixelWorldBounds(this._tileZoom);i&&(this._globalTileRange=this._pxBoundsToTileRange(i)),this._wrapX=t.wrapLng&&!this.options.noWrap&&[Math.floor(e.project([0,t.wrapLng[0]],r).x/n.x),Math.ceil(e.project([0,t.wrapLng[1]],r).x/n.y)],this._wrapY=t.wrapLat&&!this.options.noWrap&&[Math.floor(e.project([t.wrapLat[0],0],r).y/n.x),Math.ceil(e.project([t.wrapLat[1],0],r).y/n.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(e){var t=this._map,n=t._animatingZoom?Math.max(t._animateToZoom,t.getZoom()):t.getZoom(),r=t.getZoomScale(n,this._tileZoom),i=t.project(e,this._tileZoom).floor(),a=t.getSize().divideBy(r*2);return new j(i.subtract(a),i.add(a))},_update:function(e){var t=this._map;if(t){var n=this._clampZoom(t.getZoom());if(e===void 0&&(e=t.getCenter()),this._tileZoom!==void 0){var r=this._getTiledPixelBounds(e),i=this._pxBoundsToTileRange(r),a=i.getCenter(),o=[],s=this.options.keepBuffer,c=new j(i.getBottomLeft().subtract([s,-s]),i.getTopRight().add([s,-s]));if(!(isFinite(i.min.x)&&isFinite(i.min.y)&&isFinite(i.max.x)&&isFinite(i.max.y)))throw Error(`Attempted to load an infinite number of tiles`);for(var l in this._tiles){var u=this._tiles[l].coords;(u.z!==this._tileZoom||!c.contains(new O(u.x,u.y)))&&(this._tiles[l].current=!1)}if(Math.abs(n-this._tileZoom)>1){this._setView(e,n);return}for(var d=i.min.y;d<=i.max.y;d++)for(var f=i.min.x;f<=i.max.x;f++){var p=new O(f,d);if(p.z=this._tileZoom,this._isValidTile(p)){var m=this._tiles[this._tileCoordsToKey(p)];m?m.current=!0:o.push(p)}}if(o.sort(function(e,t){return e.distanceTo(a)-t.distanceTo(a)}),o.length!==0){this._loading||(this._loading=!0,this.fire(`loading`));var h=document.createDocumentFragment();for(f=0;f<o.length;f++)this._addTile(o[f],h);this._level.el.appendChild(h)}}}},_isValidTile:function(e){var t=this._map.options.crs;if(!t.infinite){var n=this._globalTileRange;if(!t.wrapLng&&(e.x<n.min.x||e.x>n.max.x)||!t.wrapLat&&(e.y<n.min.y||e.y>n.max.y))return!1}if(!this.options.bounds)return!0;var r=this._tileCoordsToBounds(e);return P(this.options.bounds).overlaps(r)},_keyToBounds:function(e){return this._tileCoordsToBounds(this._keyToTileCoords(e))},_tileCoordsToNwSe:function(e){var t=this._map,n=this.getTileSize(),r=e.scaleBy(n),i=r.add(n);return[t.unproject(r,e.z),t.unproject(i,e.z)]},_tileCoordsToBounds:function(e){var t=this._tileCoordsToNwSe(e),n=new N(t[0],t[1]);return this.options.noWrap||(n=this._map.wrapLatLngBounds(n)),n},_tileCoordsToKey:function(e){return e.x+`:`+e.y+`:`+e.z},_keyToTileCoords:function(e){var t=e.split(`:`),n=new O(+t[0],+t[1]);return n.z=+t[2],n},_removeTile:function(e){var t=this._tiles[e];t&&(bt(t.el),delete this._tiles[e],this.fire(`tileunload`,{tile:t.el,coords:this._keyToTileCoords(e)}))},_initTile:function(e){U(e,`leaflet-tile`);var t=this.getTileSize();e.style.width=t.x+`px`,e.style.height=t.y+`px`,e.onselectstart=l,e.onmousemove=l,V.ielt9&&this.options.opacity<1&&Ot(e,this.options.opacity)},_addTile:function(e,t){var n=this._getTilePos(e),r=this._tileCoordsToKey(e),a=this.createTile(this._wrapCoords(e),i(this._tileReady,this,e));this._initTile(a),this.createTile.length<2&&T(i(this._tileReady,this,e,null,a)),Mt(a,n),this._tiles[r]={el:a,coords:e,current:!0},t.appendChild(a),this.fire(`tileloadstart`,{tile:a,coords:e})},_tileReady:function(e,t,n){t&&this.fire(`tileerror`,{error:t,tile:n,coords:e});var r=this._tileCoordsToKey(e);n=this._tiles[r],n&&(n.loaded=+new Date,this._map._fadeAnimated?(Ot(n.el,0),E(this._fadeFrame),this._fadeFrame=T(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),t||(U(n.el,`leaflet-tile-loaded`),this.fire(`tileload`,{tile:n.el,coords:e})),this._noTilesToLoad()&&(this._loading=!1,this.fire(`load`),V.ielt9||!this._map._fadeAnimated?T(this._pruneTiles,this):setTimeout(i(this._pruneTiles,this),250)))},_getTilePos:function(e){return e.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(e){var t=new O(this._wrapX?c(e.x,this._wrapX):e.x,this._wrapY?c(e.y,this._wrapY):e.y);return t.z=e.z,t},_pxBoundsToTileRange:function(e){var t=this.getTileSize();return new j(e.min.unscaleBy(t).floor(),e.max.unscaleBy(t).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var e in this._tiles)if(!this._tiles[e].loaded)return!1;return!0}});function Vr(e){return new Br(e)}var Hr=Br.extend({options:{minZoom:0,maxZoom:18,subdomains:`abc`,errorTileUrl:``,zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(e,t){this._url=e,t=p(this,t),t.detectRetina&&V.retina&&t.maxZoom>0?(t.tileSize=Math.floor(t.tileSize/2),t.zoomReverse?(t.zoomOffset--,t.minZoom=Math.min(t.maxZoom,t.minZoom+1)):(t.zoomOffset++,t.maxZoom=Math.max(t.minZoom,t.maxZoom-1)),t.minZoom=Math.max(0,t.minZoom)):t.zoomReverse?t.minZoom=Math.min(t.maxZoom,t.minZoom):t.maxZoom=Math.max(t.minZoom,t.maxZoom),typeof t.subdomains==`string`&&(t.subdomains=t.subdomains.split(``)),this.on(`tileunload`,this._onTileRemove)},setUrl:function(e,t){return this._url===e&&t===void 0&&(t=!0),this._url=e,t||this.redraw(),this},createTile:function(e,t){var n=document.createElement(`img`);return W(n,`load`,i(this._tileOnLoad,this,t,n)),W(n,`error`,i(this._tileOnError,this,t,n)),(this.options.crossOrigin||this.options.crossOrigin===``)&&(n.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),typeof this.options.referrerPolicy==`string`&&(n.referrerPolicy=this.options.referrerPolicy),n.alt=``,n.src=this.getTileUrl(e),n},getTileUrl:function(e){var t={r:V.retina?`@2x`:``,s:this._getSubdomain(e),x:e.x,y:e.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var r=this._globalTileRange.max.y-e.y;this.options.tms&&(t.y=r),t[`-y`]=r}return g(this._url,n(t,this.options))},_tileOnLoad:function(e,t){V.ielt9?setTimeout(i(e,this,null,t),0):e(null,t)},_tileOnError:function(e,t,n){var r=this.options.errorTileUrl;r&&t.getAttribute(`src`)!==r&&(t.src=r),e(n,t)},_onTileRemove:function(e){e.tile.onload=null},_getZoomForUrl:function(){var e=this._tileZoom,t=this.options.maxZoom,n=this.options.zoomReverse,r=this.options.zoomOffset;return n&&(e=t-e),e+r},_getSubdomain:function(e){var t=Math.abs(e.x+e.y)%this.options.subdomains.length;return this.options.subdomains[t]},_abortLoading:function(){var e,t;for(e in this._tiles)if(this._tiles[e].coords.z!==this._tileZoom&&(t=this._tiles[e].el,t.onload=l,t.onerror=l,!t.complete)){t.src=y;var n=this._tiles[e].coords;bt(t),delete this._tiles[e],this.fire(`tileabort`,{tile:t,coords:n})}},_removeTile:function(e){var t=this._tiles[e];if(t)return t.el.setAttribute(`src`,y),Br.prototype._removeTile.call(this,e)},_tileReady:function(e,t,n){if(!(!this._map||n&&n.getAttribute(`src`)===y))return Br.prototype._tileReady.call(this,e,t,n)}});function Ur(e,t){return new Hr(e,t)}var Wr=Hr.extend({defaultWmsParams:{service:`WMS`,request:`GetMap`,layers:``,styles:``,format:`image/jpeg`,transparent:!1,version:`1.1.1`},options:{crs:null,uppercase:!1},initialize:function(e,t){this._url=e;var r=n({},this.defaultWmsParams);for(var i in t)i in this.options||(r[i]=t[i]);t=p(this,t);var a=t.detectRetina&&V.retina?2:1,o=this.getTileSize();r.width=o.x*a,r.height=o.y*a,this.wmsParams=r},onAdd:function(e){this._crs=this.options.crs||e.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var t=this._wmsVersion>=1.3?`crs`:`srs`;this.wmsParams[t]=this._crs.code,Hr.prototype.onAdd.call(this,e)},getTileUrl:function(e){var t=this._tileCoordsToNwSe(e),n=this._crs,r=M(n.project(t[0]),n.project(t[1])),i=r.min,a=r.max,o=(this._wmsVersion>=1.3&&this._crs===Jn?[i.y,i.x,a.y,a.x]:[i.x,i.y,a.x,a.y]).join(`,`),s=Hr.prototype.getTileUrl.call(this,e);return s+m(this.wmsParams,s,this.options.uppercase)+(this.options.uppercase?`&BBOX=`:`&bbox=`)+o},setParams:function(e,t){return n(this.wmsParams,e),t||this.redraw(),this}});function Gr(e,t){return new Wr(e,t)}Hr.WMS=Wr,Ur.wms=Gr;var Kr=Xn.extend({options:{padding:.1},initialize:function(e){p(this,e),o(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),U(this._container,`leaflet-zoom-animated`)),this.getPane().appendChild(this._container),this._update(),this.on(`update`,this._updatePaths,this)},onRemove:function(){this.off(`update`,this._updatePaths,this),this._destroyContainer()},getEvents:function(){var e={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(e.zoomanim=this._onAnimZoom),e},_onAnimZoom:function(e){this._updateTransform(e.center,e.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(e,t){var n=this._map.getZoomScale(t,this._zoom),r=this._map.getSize().multiplyBy(.5+this.options.padding),i=this._map.project(this._center,t),a=r.multiplyBy(-n).add(i).subtract(this._map._getNewPixelOrigin(e,t));V.any3d?jt(this._container,a,n):Mt(this._container,a)},_reset:function(){for(var e in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[e]._reset()},_onZoomEnd:function(){for(var e in this._layers)this._layers[e]._project()},_updatePaths:function(){for(var e in this._layers)this._layers[e]._update()},_update:function(){var e=this.options.padding,t=this._map.getSize(),n=this._map.containerPointToLayerPoint(t.multiplyBy(-e)).round();this._bounds=new j(n,n.add(t.multiplyBy(1+e*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),qr=Kr.extend({options:{tolerance:0},getEvents:function(){var e=Kr.prototype.getEvents.call(this);return e.viewprereset=this._onViewPreReset,e},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Kr.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var e=this._container=document.createElement(`canvas`);W(e,`mousemove`,this._onMouseMove,this),W(e,`click dblclick mousedown mouseup contextmenu`,this._onClick,this),W(e,`mouseout`,this._handleMouseOut,this),e._leaflet_disable_events=!0,this._ctx=e.getContext(`2d`)},_destroyContainer:function(){E(this._redrawRequest),delete this._ctx,bt(this._container),G(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var e;for(var t in this._redrawBounds=null,this._layers)e=this._layers[t],e._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Kr.prototype._update.call(this);var e=this._bounds,t=this._container,n=e.getSize(),r=V.retina?2:1;Mt(t,e.min),t.width=r*n.x,t.height=r*n.y,t.style.width=n.x+`px`,t.style.height=n.y+`px`,V.retina&&this._ctx.scale(2,2),this._ctx.translate(-e.min.x,-e.min.y),this.fire(`update`)}},_reset:function(){Kr.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(e){this._updateDashArray(e),this._layers[o(e)]=e;var t=e._order={layer:e,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=t),this._drawLast=t,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(e){this._requestRedraw(e)},_removePath:function(e){var t=e._order,n=t.next,r=t.prev;n?n.prev=r:this._drawLast=r,r?r.next=n:this._drawFirst=n,delete e._order,delete this._layers[o(e)],this._requestRedraw(e)},_updatePath:function(e){this._extendRedrawBounds(e),e._project(),e._update(),this._requestRedraw(e)},_updateStyle:function(e){this._updateDashArray(e),this._requestRedraw(e)},_updateDashArray:function(e){if(typeof e.options.dashArray==`string`){var t=e.options.dashArray.split(/[, ]+/),n=[],r,i;for(i=0;i<t.length;i++){if(r=Number(t[i]),isNaN(r))return;n.push(r)}e.options._dashArray=n}else e.options._dashArray=e.options.dashArray},_requestRedraw:function(e){this._map&&(this._extendRedrawBounds(e),this._redrawRequest=this._redrawRequest||T(this._redraw,this))},_extendRedrawBounds:function(e){if(e._pxBounds){var t=(e.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new j,this._redrawBounds.extend(e._pxBounds.min.subtract([t,t])),this._redrawBounds.extend(e._pxBounds.max.add([t,t]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var e=this._redrawBounds;if(e){var t=e.getSize();this._ctx.clearRect(e.min.x,e.min.y,t.x,t.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var e,t=this._redrawBounds;if(this._ctx.save(),t){var n=t.getSize();this._ctx.beginPath(),this._ctx.rect(t.min.x,t.min.y,n.x,n.y),this._ctx.clip()}this._drawing=!0;for(var r=this._drawFirst;r;r=r.next)e=r.layer,(!t||e._pxBounds&&e._pxBounds.intersects(t))&&e._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(e,t){if(this._drawing){var n,r,i,a,o=e._parts,s=o.length,c=this._ctx;if(s){for(c.beginPath(),n=0;n<s;n++){for(r=0,i=o[n].length;r<i;r++)a=o[n][r],c[r?`lineTo`:`moveTo`](a.x,a.y);t&&c.closePath()}this._fillStroke(c,e)}}},_updateCircle:function(e){if(!(!this._drawing||e._empty())){var t=e._point,n=this._ctx,r=Math.max(Math.round(e._radius),1),i=(Math.max(Math.round(e._radiusY),1)||r)/r;i!==1&&(n.save(),n.scale(1,i)),n.beginPath(),n.arc(t.x,t.y/i,r,0,Math.PI*2,!1),i!==1&&n.restore(),this._fillStroke(n,e)}},_fillStroke:function(e,t){var n=t.options;n.fill&&(e.globalAlpha=n.fillOpacity,e.fillStyle=n.fillColor||n.color,e.fill(n.fillRule||`evenodd`)),n.stroke&&n.weight!==0&&(e.setLineDash&&e.setLineDash(t.options&&t.options._dashArray||[]),e.globalAlpha=n.opacity,e.lineWidth=n.weight,e.strokeStyle=n.color,e.lineCap=n.lineCap,e.lineJoin=n.lineJoin,e.stroke())},_onClick:function(e){for(var t=this._map.mouseEventToLayerPoint(e),n,r,i=this._drawFirst;i;i=i.next)n=i.layer,n.options.interactive&&n._containsPoint(t)&&(e.type!==`click`&&e.type!==`preclick`||!this._map._draggableMoved(n))&&(r=n);this._fireEvent(r?[r]:!1,e)},_onMouseMove:function(e){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var t=this._map.mouseEventToLayerPoint(e);this._handleMouseHover(e,t)}},_handleMouseOut:function(e){var t=this._hoveredLayer;t&&(Tt(this._container,`leaflet-interactive`),this._fireEvent([t],e,`mouseout`),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(e,t){if(!this._mouseHoverThrottled){for(var n,r,a=this._drawFirst;a;a=a.next)n=a.layer,n.options.interactive&&n._containsPoint(t)&&(r=n);r!==this._hoveredLayer&&(this._handleMouseOut(e),r&&(U(this._container,`leaflet-interactive`),this._fireEvent([r],e,`mouseover`),this._hoveredLayer=r)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,e),this._mouseHoverThrottled=!0,setTimeout(i(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(e,t,n){this._map._fireDOMEvent(t,n||t.type,e)},_bringToFront:function(e){var t=e._order;if(t){var n=t.next,r=t.prev;if(n)n.prev=r;else return;r?r.next=n:n&&(this._drawFirst=n),t.prev=this._drawLast,this._drawLast.next=t,t.next=null,this._drawLast=t,this._requestRedraw(e)}},_bringToBack:function(e){var t=e._order;if(t){var n=t.next,r=t.prev;if(r)r.next=n;else return;n?n.prev=r:r&&(this._drawLast=r),t.prev=null,t.next=this._drawFirst,this._drawFirst.prev=t,this._drawFirst=t,this._requestRedraw(e)}}});function Jr(e){return V.canvas?new qr(e):null}var Yr=(function(){try{return document.namespaces.add(`lvml`,`urn:schemas-microsoft-com:vml`),function(e){return document.createElement(`<lvml:`+e+` class="lvml">`)}}catch{}return function(e){return document.createElement(`<`+e+` xmlns="urn:schemas-microsoft.com:vml" class="lvml">`)}})(),Xr={_initContainer:function(){this._container=H(`div`,`leaflet-vml-container`)},_update:function(){this._map._animatingZoom||(Kr.prototype._update.call(this),this.fire(`update`))},_initPath:function(e){var t=e._container=Yr(`shape`);U(t,`leaflet-vml-shape `+(this.options.className||``)),t.coordsize=`1 1`,e._path=Yr(`path`),t.appendChild(e._path),this._updateStyle(e),this._layers[o(e)]=e},_addPath:function(e){var t=e._container;this._container.appendChild(t),e.options.interactive&&e.addInteractiveTarget(t)},_removePath:function(e){var t=e._container;bt(t),e.removeInteractiveTarget(t),delete this._layers[o(e)]},_updateStyle:function(e){var t=e._stroke,n=e._fill,r=e.options,i=e._container;i.stroked=!!r.stroke,i.filled=!!r.fill,r.stroke?(t||=e._stroke=Yr(`stroke`),i.appendChild(t),t.weight=r.weight+`px`,t.color=r.color,t.opacity=r.opacity,r.dashArray?t.dashStyle=_(r.dashArray)?r.dashArray.join(` `):r.dashArray.replace(/( *, *)/g,` `):t.dashStyle=``,t.endcap=r.lineCap.replace(`butt`,`flat`),t.joinstyle=r.lineJoin):t&&(i.removeChild(t),e._stroke=null),r.fill?(n||=e._fill=Yr(`fill`),i.appendChild(n),n.color=r.fillColor||r.color,n.opacity=r.fillOpacity):n&&(i.removeChild(n),e._fill=null)},_updateCircle:function(e){var t=e._point.round(),n=Math.round(e._radius),r=Math.round(e._radiusY||n);this._setPath(e,e._empty()?`M0 0`:`AL `+t.x+`,`+t.y+` `+n+`,`+r+` 0,23592600`)},_setPath:function(e,t){e._path.v=t},_bringToFront:function(e){St(e._container)},_bringToBack:function(e){Ct(e._container)}},Zr=V.vml?Yr:ue,Qr=Kr.extend({_initContainer:function(){this._container=Zr(`svg`),this._container.setAttribute(`pointer-events`,`none`),this._rootGroup=Zr(`g`),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){bt(this._container),G(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Kr.prototype._update.call(this);var e=this._bounds,t=e.getSize(),n=this._container;(!this._svgSize||!this._svgSize.equals(t))&&(this._svgSize=t,n.setAttribute(`width`,t.x),n.setAttribute(`height`,t.y)),Mt(n,e.min),n.setAttribute(`viewBox`,[e.min.x,e.min.y,t.x,t.y].join(` `)),this.fire(`update`)}},_initPath:function(e){var t=e._path=Zr(`path`);e.options.className&&U(t,e.options.className),e.options.interactive&&U(t,`leaflet-interactive`),this._updateStyle(e),this._layers[o(e)]=e},_addPath:function(e){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(e._path),e.addInteractiveTarget(e._path)},_removePath:function(e){bt(e._path),e.removeInteractiveTarget(e._path),delete this._layers[o(e)]},_updatePath:function(e){e._project(),e._update()},_updateStyle:function(e){var t=e._path,n=e.options;t&&(n.stroke?(t.setAttribute(`stroke`,n.color),t.setAttribute(`stroke-opacity`,n.opacity),t.setAttribute(`stroke-width`,n.weight),t.setAttribute(`stroke-linecap`,n.lineCap),t.setAttribute(`stroke-linejoin`,n.lineJoin),n.dashArray?t.setAttribute(`stroke-dasharray`,n.dashArray):t.removeAttribute(`stroke-dasharray`),n.dashOffset?t.setAttribute(`stroke-dashoffset`,n.dashOffset):t.removeAttribute(`stroke-dashoffset`)):t.setAttribute(`stroke`,`none`),n.fill?(t.setAttribute(`fill`,n.fillColor||n.color),t.setAttribute(`fill-opacity`,n.fillOpacity),t.setAttribute(`fill-rule`,n.fillRule||`evenodd`)):t.setAttribute(`fill`,`none`))},_updatePoly:function(e,t){this._setPath(e,de(e._parts,t))},_updateCircle:function(e){var t=e._point,n=Math.max(Math.round(e._radius),1),r=Math.max(Math.round(e._radiusY),1)||n,i=`a`+n+`,`+r+` 0 1,0 `,a=e._empty()?`M0 0`:`M`+(t.x-n)+`,`+t.y+i+n*2+`,0 `+i+-n*2+`,0 `;this._setPath(e,a)},_setPath:function(e,t){e._path.setAttribute(`d`,t)},_bringToFront:function(e){St(e._path)},_bringToBack:function(e){Ct(e._path)}});V.vml&&Qr.include(Xr);function $r(e){return V.svg||V.vml?new Qr(e):null}K.include({getRenderer:function(e){var t=e.options.renderer||this._getPaneRenderer(e.options.pane)||this.options.renderer||this._renderer;return t||=this._renderer=this._createRenderer(),this.hasLayer(t)||this.addLayer(t),t},_getPaneRenderer:function(e){if(e===`overlayPane`||e===void 0)return!1;var t=this._paneRenderers[e];return t===void 0&&(t=this._createRenderer({pane:e}),this._paneRenderers[e]=t),t},_createRenderer:function(e){return this.options.preferCanvas&&Jr(e)||$r(e)}});var ei=mr.extend({initialize:function(e,t){mr.prototype.initialize.call(this,this._boundsToLatLngs(e),t)},setBounds:function(e){return this.setLatLngs(this._boundsToLatLngs(e))},_boundsToLatLngs:function(e){return e=P(e),[e.getSouthWest(),e.getNorthWest(),e.getNorthEast(),e.getSouthEast()]}});function ti(e,t){return new ei(e,t)}Qr.create=Zr,Qr.pointsToPath=de,gr.geometryToLayer=_r,gr.coordsToLatLng=yr,gr.coordsToLatLngs=br,gr.latLngToCoords=xr,gr.latLngsToCoords=Sr,gr.getFeature=Cr,gr.asFeature=wr,K.mergeOptions({boxZoom:!0});var ni=xn.extend({initialize:function(e){this._map=e,this._container=e._container,this._pane=e._panes.overlayPane,this._resetStateTimeout=0,e.on(`unload`,this._destroy,this)},addHooks:function(){W(this._container,`mousedown`,this._onMouseDown,this)},removeHooks:function(){G(this._container,`mousedown`,this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){bt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(e){if(!e.shiftKey||e.which!==1&&e.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Pt(),Rt(),this._startPoint=this._map.mouseEventToContainerPoint(e),W(document,{contextmenu:nn,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(e){this._moved||(this._moved=!0,this._box=H(`div`,`leaflet-zoom-box`,this._container),U(this._container,`leaflet-crosshair`),this._map.fire(`boxzoomstart`)),this._point=this._map.mouseEventToContainerPoint(e);var t=new j(this._point,this._startPoint),n=t.getSize();Mt(this._box,t.min),this._box.style.width=n.x+`px`,this._box.style.height=n.y+`px`},_finish:function(){this._moved&&(bt(this._box),Tt(this._container,`leaflet-crosshair`)),Ft(),zt(),G(document,{contextmenu:nn,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(e){if((e.which===1||e.button===1)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(i(this._resetState,this),0);var t=new N(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(t).fire(`boxzoomend`,{boxZoomBounds:t})}},_onKeyDown:function(e){e.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});K.addInitHook(`addHandler`,`boxZoom`,ni),K.mergeOptions({doubleClickZoom:!0});var ri=xn.extend({addHooks:function(){this._map.on(`dblclick`,this._onDoubleClick,this)},removeHooks:function(){this._map.off(`dblclick`,this._onDoubleClick,this)},_onDoubleClick:function(e){var t=this._map,n=t.getZoom(),r=t.options.zoomDelta,i=e.originalEvent.shiftKey?n-r:n+r;t.options.doubleClickZoom===`center`?t.setZoom(i):t.setZoomAround(e.containerPoint,i)}});K.addInitHook(`addHandler`,`doubleClickZoom`,ri),K.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var ii=xn.extend({addHooks:function(){if(!this._draggable){var e=this._map;this._draggable=new wn(e._mapPane,e._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on(`predrag`,this._onPreDragLimit,this),e.options.worldCopyJump&&(this._draggable.on(`predrag`,this._onPreDragWrap,this),e.on(`zoomend`,this._onZoomEnd,this),e.whenReady(this._onZoomEnd,this))}U(this._map._container,`leaflet-grab leaflet-touch-drag`),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Tt(this._map._container,`leaflet-grab`),Tt(this._map._container,`leaflet-touch-drag`),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var e=this._map;if(e._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var t=P(this._map.options.maxBounds);this._offsetLimit=M(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;e.fire(`movestart`).fire(`dragstart`),e.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(e){if(this._map.options.inertia){var t=this._lastTime=+new Date,n=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(n),this._times.push(t),this._prunePositions(t)}this._map.fire(`move`,e).fire(`drag`,e)},_prunePositions:function(e){for(;this._positions.length>1&&e-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var e=this._map.getSize().divideBy(2),t=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=t.subtract(e).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(e,t){return e-(e-t)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var e=this._draggable._newPos.subtract(this._draggable._startPos),t=this._offsetLimit;e.x<t.min.x&&(e.x=this._viscousLimit(e.x,t.min.x)),e.y<t.min.y&&(e.y=this._viscousLimit(e.y,t.min.y)),e.x>t.max.x&&(e.x=this._viscousLimit(e.x,t.max.x)),e.y>t.max.y&&(e.y=this._viscousLimit(e.y,t.max.y)),this._draggable._newPos=this._draggable._startPos.add(e)}},_onPreDragWrap:function(){var e=this._worldWidth,t=Math.round(e/2),n=this._initialWorldOffset,r=this._draggable._newPos.x,i=(r-t+n)%e+t-n,a=(r+t+n)%e-t-n,o=Math.abs(i+n)<Math.abs(a+n)?i:a;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=o},_onDragEnd:function(e){var t=this._map,n=t.options,r=!n.inertia||e.noInertia||this._times.length<2;if(t.fire(`dragend`,e),r)t.fire(`moveend`);else{this._prunePositions(+new Date);var i=this._lastPos.subtract(this._positions[0]),a=(this._lastTime-this._times[0])/1e3,o=n.easeLinearity,s=i.multiplyBy(o/a),c=s.distanceTo([0,0]),l=Math.min(n.inertiaMaxSpeed,c),u=s.multiplyBy(l/c),d=l/(n.inertiaDeceleration*o),f=u.multiplyBy(-d/2).round();!f.x&&!f.y?t.fire(`moveend`):(f=t._limitOffset(f,t.options.maxBounds),T(function(){t.panBy(f,{duration:d,easeLinearity:o,noMoveStart:!0,animate:!0})}))}}});K.addInitHook(`addHandler`,`dragging`,ii),K.mergeOptions({keyboard:!0,keyboardPanDelta:80});var ai=xn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(e){this._map=e,this._setPanDelta(e.options.keyboardPanDelta),this._setZoomDelta(e.options.zoomDelta)},addHooks:function(){var e=this._map._container;e.tabIndex<=0&&(e.tabIndex=`0`),W(e,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),G(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var e=document.body,t=document.documentElement,n=e.scrollTop||t.scrollTop,r=e.scrollLeft||t.scrollLeft;this._map._container.focus(),window.scrollTo(r,n)}},_onFocus:function(){this._focused=!0,this._map.fire(`focus`)},_onBlur:function(){this._focused=!1,this._map.fire(`blur`)},_setPanDelta:function(e){var t=this._panKeys={},n=this.keyCodes,r,i;for(r=0,i=n.left.length;r<i;r++)t[n.left[r]]=[-1*e,0];for(r=0,i=n.right.length;r<i;r++)t[n.right[r]]=[e,0];for(r=0,i=n.down.length;r<i;r++)t[n.down[r]]=[0,e];for(r=0,i=n.up.length;r<i;r++)t[n.up[r]]=[0,-1*e]},_setZoomDelta:function(e){var t=this._zoomKeys={},n=this.keyCodes,r,i;for(r=0,i=n.zoomIn.length;r<i;r++)t[n.zoomIn[r]]=e;for(r=0,i=n.zoomOut.length;r<i;r++)t[n.zoomOut[r]]=-e},_addHooks:function(){W(document,`keydown`,this._onKeyDown,this)},_removeHooks:function(){G(document,`keydown`,this._onKeyDown,this)},_onKeyDown:function(e){if(!(e.altKey||e.ctrlKey||e.metaKey)){var t=e.keyCode,n=this._map,r;if(t in this._panKeys){if(!n._panAnim||!n._panAnim._inProgress){if(r=this._panKeys[t],e.shiftKey&&(r=A(r).multiplyBy(3)),n.options.maxBounds&&(r=n._limitOffset(A(r),n.options.maxBounds)),n.options.worldCopyJump){var i=n.wrapLatLng(n.unproject(n.project(n.getCenter()).add(r)));n.panTo(i)}else n.panBy(r)}}else if(t in this._zoomKeys)n.setZoom(n.getZoom()+(e.shiftKey?3:1)*this._zoomKeys[t]);else if(t===27&&n._popup&&n._popup.options.closeOnEscapeKey)n.closePopup();else return;nn(e)}}});K.addInitHook(`addHandler`,`keyboard`,ai),K.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var oi=xn.extend({addHooks:function(){W(this._map._container,`wheel`,this._onWheelScroll,this),this._delta=0},removeHooks:function(){G(this._map._container,`wheel`,this._onWheelScroll,this)},_onWheelScroll:function(e){var t=sn(e),n=this._map.options.wheelDebounceTime;this._delta+=t,this._lastMousePos=this._map.mouseEventToContainerPoint(e),this._startTime||=+new Date;var r=Math.max(n-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(i(this._performZoom,this),r),nn(e)},_performZoom:function(){var e=this._map,t=e.getZoom(),n=this._map.options.zoomSnap||0;e._stop();var r=this._delta/(this._map.options.wheelPxPerZoomLevel*4),i=4*Math.log(2/(1+Math.exp(-Math.abs(r))))/Math.LN2,a=n?Math.ceil(i/n)*n:i,o=e._limitZoom(t+(this._delta>0?a:-a))-t;this._delta=0,this._startTime=null,o&&(e.options.scrollWheelZoom===`center`?e.setZoom(t+o):e.setZoomAround(this._lastMousePos,t+o))}});K.addInitHook(`addHandler`,`scrollWheelZoom`,oi);var si=600;K.mergeOptions({tapHold:V.touchNative&&V.safari&&V.mobile,tapTolerance:15});var ci=xn.extend({addHooks:function(){W(this._map._container,`touchstart`,this._onDown,this)},removeHooks:function(){G(this._map._container,`touchstart`,this._onDown,this)},_onDown:function(e){if(clearTimeout(this._holdTimeout),e.touches.length===1){var t=e.touches[0];this._startPos=this._newPos=new O(t.clientX,t.clientY),this._holdTimeout=setTimeout(i(function(){this._cancel(),this._isTapValid()&&(W(document,`touchend`,tn),W(document,`touchend touchcancel`,this._cancelClickPrevent),this._simulateEvent(`contextmenu`,t))},this),si),W(document,`touchend touchcancel contextmenu`,this._cancel,this),W(document,`touchmove`,this._onMove,this)}},_cancelClickPrevent:function e(){G(document,`touchend`,tn),G(document,`touchend touchcancel`,e)},_cancel:function(){clearTimeout(this._holdTimeout),G(document,`touchend touchcancel contextmenu`,this._cancel,this),G(document,`touchmove`,this._onMove,this)},_onMove:function(e){var t=e.touches[0];this._newPos=new O(t.clientX,t.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(e,t){var n=new MouseEvent(e,{bubbles:!0,cancelable:!0,view:window,screenX:t.screenX,screenY:t.screenY,clientX:t.clientX,clientY:t.clientY});n._simulated=!0,t.target.dispatchEvent(n)}});K.addInitHook(`addHandler`,`tapHold`,ci),K.mergeOptions({touchZoom:V.touch,bounceAtZoomLimits:!0});var li=xn.extend({addHooks:function(){U(this._map._container,`leaflet-touch-zoom`),W(this._map._container,`touchstart`,this._onTouchStart,this)},removeHooks:function(){Tt(this._map._container,`leaflet-touch-zoom`),G(this._map._container,`touchstart`,this._onTouchStart,this)},_onTouchStart:function(e){var t=this._map;if(!(!e.touches||e.touches.length!==2||t._animatingZoom||this._zooming)){var n=t.mouseEventToContainerPoint(e.touches[0]),r=t.mouseEventToContainerPoint(e.touches[1]);this._centerPoint=t.getSize()._divideBy(2),this._startLatLng=t.containerPointToLatLng(this._centerPoint),t.options.touchZoom!==`center`&&(this._pinchStartLatLng=t.containerPointToLatLng(n.add(r)._divideBy(2))),this._startDist=n.distanceTo(r),this._startZoom=t.getZoom(),this._moved=!1,this._zooming=!0,t._stop(),W(document,`touchmove`,this._onTouchMove,this),W(document,`touchend touchcancel`,this._onTouchEnd,this),tn(e)}},_onTouchMove:function(e){if(!(!e.touches||e.touches.length!==2||!this._zooming)){var t=this._map,n=t.mouseEventToContainerPoint(e.touches[0]),r=t.mouseEventToContainerPoint(e.touches[1]),a=n.distanceTo(r)/this._startDist;if(this._zoom=t.getScaleZoom(a,this._startZoom),!t.options.bounceAtZoomLimits&&(this._zoom<t.getMinZoom()&&a<1||this._zoom>t.getMaxZoom()&&a>1)&&(this._zoom=t._limitZoom(this._zoom)),t.options.touchZoom===`center`){if(this._center=this._startLatLng,a===1)return}else{var o=n._add(r)._divideBy(2)._subtract(this._centerPoint);if(a===1&&o.x===0&&o.y===0)return;this._center=t.unproject(t.project(this._pinchStartLatLng,this._zoom).subtract(o),this._zoom)}this._moved||=(t._moveStart(!0,!1),!0),E(this._animRequest);var s=i(t._move,t,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=T(s,this,!0),tn(e)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,E(this._animRequest),G(document,`touchmove`,this._onTouchMove,this),G(document,`touchend touchcancel`,this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});K.addInitHook(`addHandler`,`touchZoom`,li),K.BoxZoom=ni,K.DoubleClickZoom=ri,K.Drag=ii,K.Keyboard=ai,K.ScrollWheelZoom=oi,K.TapHold=ci,K.TouchZoom=li,e.Bounds=j,e.Browser=V,e.CRS=ie,e.Canvas=qr,e.Circle=ur,e.CircleMarker=cr,e.Class=D,e.Control=fn,e.DivIcon=Rr,e.DivOverlay=Nr,e.DomEvent=ln,e.DomUtil=Kt,e.Draggable=wn,e.Evented=re,e.FeatureGroup=$n,e.GeoJSON=gr,e.GridLayer=Br,e.Handler=xn,e.Icon=tr,e.ImageOverlay=Dr,e.LatLng=F,e.LatLngBounds=N,e.Layer=Xn,e.LayerGroup=Zn,e.LineUtil=Un,e.Map=K,e.Marker=ar,e.Mixin=Sn,e.Path=sr,e.Point=O,e.PolyUtil=On,e.Polygon=mr,e.Polyline=fr,e.Popup=Pr,e.PosAnimation=un,e.Projection=Kn,e.Rectangle=ei,e.Renderer=Kr,e.SVG=Qr,e.SVGOverlay=jr,e.TileLayer=Hr,e.Tooltip=Ir,e.Transformation=se,e.Util=ee,e.VideoOverlay=kr,e.bind=i,e.bounds=M,e.canvas=Jr,e.circle=dr,e.circleMarker=lr,e.control=pn,e.divIcon=zr,e.extend=n,e.featureGroup=er,e.geoJSON=J,e.geoJson=Er,e.gridLayer=Vr,e.icon=nr,e.imageOverlay=Or,e.latLng=I,e.latLngBounds=P,e.layerGroup=Qn,e.map=dn,e.marker=or,e.point=A,e.polygon=hr,e.polyline=pr,e.popup=Fr,e.rectangle=ti,e.setOptions=p,e.stamp=o,e.svg=$r,e.svgOverlay=Mr,e.tileLayer=Ur,e.tooltip=Lr,e.transformation=z,e.version=t,e.videoOverlay=Ar;var ui=window.L;e.noConflict=function(){return window.L=ui,this},window.L=e}))}));function LS(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function RS(e,t){return t==null?function(t,n){let r=(0,B.useRef)(void 0);return r.current||=e(t,n),r}:function(n,r){let i=(0,B.useRef)(void 0);i.current||=e(n,r);let a=(0,B.useRef)(n),{instance:o}=i.current;return(0,B.useEffect)(function(){a.current!==n&&(t(o,n,a.current),a.current=n)},[o,n,t]),i}}function zS(e,t){(0,B.useEffect)(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){t.layerContainer?.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function BS(e){return function(t){let n=OS(),r=e(PS(t,n),n);return wS(n.map,t.attribution),NS(r.current,t.eventHandlers),zS(r.current,n),r}}function VS(e,t){return AS(BS(RS(e,t)))}function HS(e,t){return jS(FS(RS(e),t))}function US(e,t){return MS(BS(RS(e,t)))}function WS(e,t,n){let{opacity:r,zIndex:i}=t;r!=null&&r!==n.opacity&&e.setOpacity(r),i!=null&&i!==n.zIndex&&e.setZIndex(i)}function GS(){return OS().map}var KS=c(IS(),1);function qS({bounds:e,boundsOptions:t,center:n,children:r,className:i,id:a,placeholder:o,style:s,whenReady:c,zoom:l,...u},d){let[f]=(0,B.useState)({className:i,id:a,style:s}),[p,m]=(0,B.useState)(null),h=(0,B.useRef)(void 0);(0,B.useImperativeHandle)(d,()=>p?.map??null,[p]);let g=(0,B.useCallback)(r=>{if(r!==null&&!h.current){let i=new KS.Map(r,u);h.current=i,n!=null&&l!=null?i.setView(n,l):e!=null&&i.fitBounds(e,t),c!=null&&i.whenReady(c),m(TS(i))}},[]);(0,B.useEffect)(()=>()=>{p?.map.remove()},[p]);let _=p?B.createElement(DS,{value:p},r):o??null;return B.createElement(`div`,{...f,ref:g},_)}var JS=(0,B.forwardRef)(qS),YS=VS(function({position:e,...t},n){let r=new KS.Marker(e,t);return LS(r,ES(n,{overlayContainer:r}))},function(e,t,n){t.position!==n.position&&e.setLatLng(t.position),t.icon!=null&&t.icon!==n.icon&&e.setIcon(t.icon),t.zIndexOffset!=null&&t.zIndexOffset!==n.zIndexOffset&&e.setZIndexOffset(t.zIndexOffset),t.opacity!=null&&t.opacity!==n.opacity&&e.setOpacity(t.opacity),e.dragging!=null&&t.draggable!==n.draggable&&(t.draggable===!0?e.dragging.enable():e.dragging.disable())}),XS=HS(function(e,t){return LS(new KS.Popup(e,t.overlayContainer),t)},function(e,t,{position:n},r){(0,B.useEffect)(function(){let{instance:i}=e;function a(e){e.popup===i&&(i.update(),r(!0))}function o(e){e.popup===i&&r(!1)}return t.map.on({popupopen:a,popupclose:o}),t.overlayContainer==null?(n!=null&&i.setLatLng(n),i.openOn(t.map)):t.overlayContainer.bindPopup(i),function(){t.map.off({popupopen:a,popupclose:o}),t.overlayContainer?.unbindPopup(),t.map.removeLayer(i)}},[e,t,r,n])}),ZS=US(function({url:e,...t},n){return LS(new KS.TileLayer(e,PS(t,n)),n)},function(e,t,n){WS(e,t,n);let{url:r}=t;r!=null&&r!==n.url&&e.setUrl(r)}),QS=q.section`
  width: 100%;
  padding: 65px 64px 80px;
  box-sizing: border-box;

  background: ${({theme:e})=>e.background};

  color: ${({theme:e})=>e.text};

  transition:
    background 0.3s ease,
    color 0.3s ease;

  position: relative;
  z-index: 1;

  @media screen and (max-width: 900px) {
    padding: 50px 32px 65px;
  }

  @media screen and (max-width: 563px) {
    padding: 40px 16px 50px;
  }
`,$S=q.div`
    width: 100%;
    max-width: 1380px;
    margin: 0 auto;
  `,eC=q.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    gap: 30px;
    margin-bottom: 25px;

    @media screen and (max-width: 563px) {
      align-items: flex-start;
      flex-direction: column;
      gap: 15px;
    }
  `,tC=q.div`
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 7px;

  margin-bottom: 10px;
  padding: 7px 12px;

  border-radius: 20px;

  background: ${({$dark:e,$accentColor:t})=>e?`${t}22`:`${t}18`};

  color: ${({$accentColor:e})=>e};

  font-size: 11px;
  font-weight: 600;

  text-transform: uppercase;
  letter-spacing: 0.5px;

  transition:
    background 0.3s ease,
    color 0.3s ease;

  span {
    font-size: 9px;
  }
`,nC=q.h2`
    margin: 0;

    color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

    font-size: 32px;
    font-weight: 600;
    line-height: 1.1;

    transition: color 0.3s ease;

    @media screen and (max-width: 563px) {
      font-size: 25px;
    }
  `,rC=q.p`
    margin: 8px 0 0;

    color: ${({$dark:e})=>e?`#999999`:`#858585`};

    font-size: 14px;
    font-weight: 400;

    transition: color 0.3s ease;

    @media screen and (max-width: 563px) {
      font-size: 12px;
    }
  `,iC=q.div`
    display: flex;
    align-items: center;
    gap: 9px;

    padding: 10px 15px;

    border-radius: 12px;

    background: ${({$dark:e})=>e?`#ffffff`:`#111111`};

    color: ${({$dark:e})=>e?`#111111`:`#ffffff`};

    font-size: 12px;
    font-weight: 500;

    transition:
      background 0.3s ease,
      color 0.3s ease;

    span {
      width: 24px;
      height: 24px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      background: ${({$accentColor:e})=>e};

      color: #111111;

      font-size: 11px;
      font-weight: 600;
    }
  `,aC=q.div`
    position: relative;

    width: 100%;
    height: 560px;

    overflow: hidden;

    border-radius: 24px;

    background: ${({$dark:e})=>e?`#252525`:`#e8f3f7`};

    box-shadow: ${({$dark:e})=>e?`
          0 15px 45px rgba(0, 0, 0, 0.4),
          0 3px 10px rgba(0, 0, 0, 0.25)
        `:`
          0 15px 45px rgba(0, 0, 0, 0.12),
          0 3px 10px rgba(0, 0, 0, 0.05)
        `};

    isolation: isolate;

    transition:
      background 0.3s ease,
      box-shadow 0.3s ease;

    .leaflet-container {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      font-family: inherit;
    }

    .leaflet-pane,
    .leaflet-top,
    .leaflet-bottom {
      z-index: 10;
    }

    .leaflet-control-attribution {
      font-size: 9px;
      padding: 2px 6px;
      border-radius: 6px 0 0 0;
    }

    .leaflet-popup-content-wrapper {
      padding: 0;
      overflow: hidden;

      border-radius: 18px;

      background: ${({$dark:e})=>e?`#1c1c1c`:`#ffffff`};

      box-shadow: ${({$dark:e})=>e?`0 15px 40px rgba(0, 0, 0, 0.5)`:`0 15px 40px rgba(0, 0, 0, 0.18)`};
    }

    .leaflet-popup-content {
      margin: 0;
      width: 260px !important;
    }

    .leaflet-popup-tip {
      background: ${({$dark:e})=>e?`#1c1c1c`:`#ffffff`};

      box-shadow:
        0 4px 8px
        rgba(0, 0, 0, 0.08);
    }

    .leaflet-popup-close-button {
      top: 10px !important;
      right: 12px !important;

      color: ${({$dark:e})=>e?`#aaaaaa`:`#777777`} !important;

      font-size: 20px !important;
      font-weight: 400 !important;

      z-index: 5;
    }

    .weather-marker-wrapper {
      background: transparent !important;
      border: none !important;
    }

    .weather-marker {
      --accent-color: #ffb36c;

      position: relative;

      width: 145px;
      height: 52px;

      display: flex;
      align-items: center;

      padding: 4px 12px 4px 4px;
      box-sizing: border-box;

      border-radius: 30px;

      background: rgba(
        255,
        255,
        255,
        0.96
      );

      box-shadow:
        0 7px 20px
          rgba(0, 0, 0, 0.16),
        0 0 0 2px
          color-mix(
            in srgb,
            var(--accent-color) 90%,
            transparent
          );

      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

      cursor: pointer;
    }

    .weather-marker.dark {
      background: rgba(
        30,
        30,
        30,
        0.97
      );
    }

    .weather-marker:hover {
      transform: translateY(-3px);

      box-shadow:
        0 12px 25px
          rgba(0, 0, 0, 0.2),
        0 0 0 3px
          color-mix(
            in srgb,
            var(--accent-color) 90%,
            transparent
          );
    }

    .weather-marker-icon {
      width: 44px;
      height: 44px;

      flex-shrink: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      background: #fff3df;
    }

    .weather-marker-icon img {
      width: 43px;
      height: 43px;
      object-fit: contain;
    }

    .weather-marker-info {
      min-width: 0;

      display: flex;
      flex-direction: column;

      margin-left: 8px;
    }

    .weather-marker-temperature {
      color: #111111;

      font-size: 15px;
      font-weight: 700;
      line-height: 1.1;
    }

    .weather-marker.dark
      .weather-marker-temperature {
      color: #ffffff;
    }

    .weather-marker-city {
      max-width: 78px;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      margin-top: 3px;

      color: #777777;

      font-size: 10px;
      font-weight: 500;
    }

    .weather-marker.dark
      .weather-marker-city {
      color: #aaaaaa;
    }

    .weather-marker-point {
      --accent-color: #ffb36c;

      position: absolute;

      left: 50%;
      bottom: -7px;

      width: 14px;
      height: 14px;

      transform:
        translateX(-50%)
        rotate(45deg);

      background: #ffffff;

      box-shadow:
        3px 3px 7px
        rgba(0, 0, 0, 0.1);

      z-index: -1;
    }

    .weather-marker-point.dark {
      background: #1e1e1e;
    }

    @media screen and (max-width: 900px) {
      height: 480px;
    }

    @media screen and (max-width: 563px) {
      height: 360px;
      border-radius: 17px;

      .leaflet-popup-content {
        width: 230px !important;
      }

      .weather-marker {
        width: 125px;
        height: 46px;
      }

      .weather-marker-icon {
        width: 38px;
        height: 38px;
      }

      .weather-marker-icon img {
        width: 37px;
        height: 37px;
      }

      .weather-marker-temperature {
        font-size: 13px;
      }

      .weather-marker-city {
        font-size: 9px;
        max-width: 65px;
      }
    }
  `,oC=q.div`
    position: absolute;

    top: 20px;
    right: 20px;

    z-index: 1000;

    display: flex;
    flex-direction: column;
    gap: 7px;
  `,sC=q.button`
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 12px;

  background: rgba(
    255,
    255,
    255,
    0.96
  );

  color: #111111;

  font-size: 22px;
  font-weight: 400;

  box-shadow:
    0 5px 15px
    rgba(0, 0, 0, 0.14);

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: ${({$accentColor:e})=>e};
  }

  &:active {
    transform: scale(0.94);
  }

  @media screen and (max-width: 563px) {
    width: 36px;
    height: 36px;
    font-size: 19px;
  }
`,cC=q.div`
    padding: 18px;

    background: ${({$dark:e})=>e?`#1c1c1c`:`#ffffff`};

    transition: background 0.3s ease;
  `,lC=q.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,uC=q.div`
  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  font-size: 18px;
  font-weight: 700;
`,dC=q.div`
  margin-top: 3px;

  color: ${({$dark:e})=>e?`#999999`:`#888888`};

  font-size: 11px;
`,fC=q.div`
    display: flex;
    align-items: center;
    gap: 10px;

    margin-top: 12px;
    padding: 10px;

    border-radius: 13px;

    /*
     * ФОН ТЕПЕРЬ ЦВЕТ ПОЛЬЗОВАТЕЛЯ
     */
    background: ${({$accentColor:e})=>`${e}22`};

    transition:
      background 0.3s ease;
  `,pC=q.img`
    width: 55px;
    height: 55px;
    object-fit: contain;
  `,mC=q.div`
    color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

    font-size: 25px;
    font-weight: 700;
  `,hC=q.div`
    margin-top: 2px;

    color: #888888;

    font-size: 11px;
    text-transform: capitalize;
  `,gC=q.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 8px;
  margin-top: 10px;
`,_C=q.div`
  display: flex;
  align-items: center;
  gap: 7px;

  padding: 8px;

  border-radius: 10px;

  background: ${({$dark:e})=>e?`#292929`:`#f6f6f6`};

  transition:
    background 0.3s ease;

  span {
    font-size: 14px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  small {
    color: ${({$dark:e})=>e?`#888888`:`#999999`};

    font-size: 8px;
  }

  strong {
    margin-top: 2px;

    color: ${({$dark:e})=>e?`#eeeeee`:`#333333`};

    font-size: 10px;
    font-weight: 600;
  }
`,vC=q.div`
    width: 100%;
    height: 420px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 24px;

    background: ${({$dark:e})=>e?`radial-gradient(circle at center, #292929, #181818 65%)`:`radial-gradient(circle at center, #fff4e8, #f5f5f5 65%)`};

    text-align: center;

    transition:
      background 0.3s ease;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    span {
      width: 65px;
      height: 65px;

      display: flex;
      align-items: center;
      justify-content: center;

      margin-bottom: 15px;

      border-radius: 50%;

      background: ${({$accentColor:e})=>e};

      font-size: 27px;
    }

    strong {
      color: ${({$dark:e})=>e?`#ffffff`:`#222222`};

      font-size: 17px;
      font-weight: 600;
    }

    p {
      margin: 6px 0 0;

      color: #888888;

      font-size: 12px;
    }

    @media screen and (max-width: 563px) {
      height: 300px;
      border-radius: 17px;
    }
  `,yC=(e,t,n)=>{let r=Math.round(e.temperature);return KS.default.divIcon({className:`weather-marker-wrapper`,html:`
      <div
        class="weather-marker ${t?`dark`:``}"
        style="
          --accent-color: ${n};
        "
      >
        <div class="weather-marker-icon">
          <img
            src="https://openweathermap.org/img/wn/${e.icon}@2x.png"
            alt=""
          />
        </div>

        <div class="weather-marker-info">
          <span class="weather-marker-temperature">
            ${r}°C
          </span>

          <span class="weather-marker-city">
            ${e.name}
          </span>
        </div>
      </div>

      <div
        class="weather-marker-point ${t?`dark`:``}"
        style="
          --accent-color: ${n};
        "
      ></div>
    `,iconSize:[150,58],iconAnchor:[75,58],popupAnchor:[0,-58]})};function bC({cities:e}){let t=GS();return(0,B.useEffect)(()=>{if(!e.length)return;if(e.length===1){t.setView([Number(e[0].latitude),Number(e[0].longitude)],8,{animate:!0});return}let n=KS.default.latLngBounds(e.map(e=>[Number(e.latitude),Number(e.longitude)]));t.fitBounds(n,{padding:[80,80],maxZoom:8,animate:!0})},[e,t]),null}function xC({accentColor:e}){let t=GS();return(0,J.jsxs)(oC,{children:[(0,J.jsx)(sC,{type:`button`,$accentColor:e,onClick:()=>t.zoomIn(),children:`+`}),(0,J.jsx)(sC,{type:`button`,$accentColor:e,onClick:()=>t.zoomOut(),children:`−`})]})}function SC({cities:e,darkMode:t,accentColor:n=`#ffb36c`}){let r=e.filter(e=>Number.isFinite(Number(e.latitude))&&Number.isFinite(Number(e.longitude)));return(0,J.jsx)(QS,{$dark:t,$accentColor:n,children:(0,J.jsxs)($S,{children:[(0,J.jsxs)(eC,{children:[(0,J.jsxs)(`div`,{children:[(0,J.jsxs)(tC,{$dark:t,$accentColor:n,children:[(0,J.jsx)(`span`,{children:`●`}),`Interactive map`]}),(0,J.jsx)(nC,{$dark:t,children:`Weather Map`}),(0,J.jsx)(rC,{$dark:t,children:`Explore weather conditions in your cities`})]}),r.length>0&&(0,J.jsxs)(iC,{$dark:t,$accentColor:n,children:[(0,J.jsx)(`span`,{children:r.length}),`My cities`]})]}),r.length===0?(0,J.jsx)(vC,{$dark:t,$accentColor:n,children:(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`span`,{children:`📍`}),(0,J.jsx)(`strong`,{children:`No cities on the map`}),(0,J.jsx)(`p`,{children:`Add a city to see its weather here`})]})}):(0,J.jsx)(aC,{$dark:t,$accentColor:n,children:(0,J.jsxs)(JS,{center:[50.4501,30.5234],zoom:5,scrollWheelZoom:!0,zoomControl:!1,style:{width:`100%`,height:`100%`},children:[(0,J.jsx)(ZS,{attribution:`© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>`,url:`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}),(0,J.jsx)(bC,{cities:r}),(0,J.jsx)(xC,{accentColor:n}),r.map(e=>(0,J.jsx)(YS,{position:[Number(e.latitude),Number(e.longitude)],icon:yC(e,t,n),children:(0,J.jsx)(XS,{children:(0,J.jsxs)(cC,{$dark:t,$accentColor:n,children:[(0,J.jsx)(lC,{children:(0,J.jsxs)(`div`,{children:[(0,J.jsx)(uC,{$dark:t,children:e.name}),(0,J.jsx)(dC,{$dark:t,children:e.country})]})}),(0,J.jsxs)(fC,{$dark:t,$accentColor:n,children:[(0,J.jsx)(pC,{src:`https://openweathermap.org/img/wn/${e.icon}@2x.png`,alt:e.description}),(0,J.jsxs)(`div`,{children:[(0,J.jsxs)(mC,{$dark:t,children:[Math.round(e.temperature),`°C`]}),(0,J.jsx)(hC,{children:e.description})]})]}),(0,J.jsxs)(gC,{children:[(0,J.jsxs)(_C,{$dark:t,children:[(0,J.jsx)(`span`,{children:`🌡️`}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`small`,{children:`Temperature`}),(0,J.jsxs)(`strong`,{children:[Math.round(e.temperature),`°C`]})]})]}),(0,J.jsxs)(_C,{$dark:t,children:[(0,J.jsx)(`span`,{children:`📍`}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`small`,{children:`Location`}),(0,J.jsx)(`strong`,{children:e.country})]})]})]})]})})},e.id))]})})]})})}var CC=q.div`
  position: fixed;
  inset: 0;

  z-index: 1200;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;
  box-sizing: border-box;

background: ${({theme:e})=>e.background===`#111111`?`rgba(0, 0, 0, 0.35)`:`rgba(17, 17, 17, 0.18)`};

  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  animation: colorOverlayAppear 0.25s ease;

  @keyframes colorOverlayAppear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`,wC=q.div`
  position: relative;

  width: 100%;
  max-width: 390px;

  padding: 28px;

  box-sizing: border-box;

  /* настоящее полупрозрачное стекло */
  background: ${({theme:e})=>e.background===`#111111`?`rgba(255, 255, 255, 0.08)`:`rgba(255, 255, 255, 0.32)`};

  color: ${({theme:e})=>e.text};

  border: 1px solid
    ${({theme:e})=>e.background===`#111111`?`rgba(255, 255, 255, 0.22)`:`rgba(255, 255, 255, 0.7)`};

  border-radius: 20px;

  /* главный эффект стекла */
  backdrop-filter: blur(22px) saturate(150%);
  -webkit-backdrop-filter: blur(22px) saturate(150%);

  box-shadow:
    0 25px 70px rgba(0, 0, 0, 0.25),
    inset 0 1px 0
      rgba(255, 255, 255, 0.25),
    inset 0 -1px 0
      rgba(255, 255, 255, 0.06);

  overflow: hidden;

  animation: glassAppear 0.4s
    cubic-bezier(0.22, 1, 0.36, 1);

  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  /* мягкий блик внутри стекла */
  &::before {
    content: "";

    position: absolute;

    top: -50%;
    left: -30%;

    width: 160%;
    height: 100%;

    background: linear-gradient(
      120deg,
      transparent 30%,
      rgba(255, 255, 255, 0.12) 50%,
      transparent 70%
    );

    pointer-events: none;

    transform: rotate(-8deg);
  }

  /* весь настоящий контент поверх блика */
  & > * {
    position: relative;
    z-index: 1;
  }

  @keyframes glassAppear {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.94);
      backdrop-filter: blur(0);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
      backdrop-filter: blur(22px)
        saturate(150%);
    }
  }

  @media screen and (min-width: 564px) {
    max-width: 430px;
    padding: 32px;
  }

  @media screen and (min-width: 1160px) {
    max-width: 460px;
    padding: 36px;

    border-radius: 22px;
  }
`,TC=q.button`
  position: absolute;

  top: 10px;
  right: 10px;

  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;
  border-radius: 50%;

  background: ${({theme:e})=>e.card};

  color: ${({theme:e})=>e.text};

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.25s ease;

  &:hover {
    background: ${({theme:e})=>e.secondary};

    transform: rotate(90deg);
  }

  &:active {
    transform: scale(0.92);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,EC=q.h2`
  margin: 0 0 8px;

  color: ${({theme:e})=>e.text};

  font-size: 24px;
  font-weight: 800;

  letter-spacing: -0.5px;

  text-align: center;

  transition:
    color 0.3s ease;

  @media screen and (min-width: 564px) {
    font-size: 27px;
  }
`,DC=q.p`
  margin: 0 0 20px;

  color: ${({theme:e})=>e.muted};

  font-size: 13px;
  line-height: 1.5;

  text-align: center;

  transition:
    color 0.3s ease;
`,OC=q.input`
  width: 100%;
  height: 44px;

  padding: 0 13px;

  box-sizing: border-box;

  border: 1px solid
    ${({theme:e})=>e.secondary};

  border-radius: 9px;

  outline: none;

  background: ${({theme:e})=>e.card};

  color: ${({theme:e})=>e.text};

  font-size: 14px;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &::placeholder {
    color: ${({theme:e})=>e.muted};
  }

  &:focus {
    border-color: ${({theme:e})=>e.button};

    box-shadow:
      0 0 0 3px
      ${({theme:e})=>`${e.button}26`};
  }
`,kC=q.div`
  display: flex;
  flex-direction: column;

  margin-top: 8px;

  max-height: 230px;

  overflow-y: auto;

  border: 1px solid
    ${({theme:e})=>e.secondary};

  border-radius: 9px;

  background: ${({theme:e})=>e.card};

  box-shadow:
    0 8px 20px
    rgba(0, 0, 0, 0.08);

  animation: suggestionsAppear 0.2s ease;

  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.secondary};

    border-radius: 10px;
  }

  @keyframes suggestionsAppear {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,AC=q.button`
  width: 100%;
  min-height: 44px;

  display: flex;
  align-items: center;

  gap: 10px;

  padding: 8px 10px;

  box-sizing: border-box;

  border: none;

  border-bottom: 1px solid
    ${({theme:e})=>e.secondary};

  background: ${({theme:e,$selected:t})=>t?e.secondary:`transparent`};

  color: ${({theme:e})=>e.text};

  cursor: pointer;

  text-align: left;

  transition:
    background 0.2s ease,
    transform 0.15s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({theme:e})=>e.secondary};
  }

  &:active {
    transform: scale(0.99);
  }
`,jC=q.span`
  width: 26px;
  height: 26px;

  flex-shrink: 0;

  border-radius: 7px;

  background: ${({$color:e})=>e};

  border: 1px solid
    rgba(0, 0, 0, 0.08);

  box-shadow:
    inset 0 0 0 1px
    rgba(255, 255, 255, 0.15);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  ${AC}:hover & {
    transform: scale(1.08);

    box-shadow:
      0 0 12px
      ${({$color:e})=>`${e}66`};
  }
`,MC=q.span`
  color: ${({theme:e})=>e.text};

  font-size: 13px;
  font-weight: 500;

  transition:
    color 0.25s ease;
`,NC=q.span`
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme:e})=>e.text};

  animation: checkAppear 0.2s ease;

  svg {
    width: 17px;
    height: 17px;
  }

  @keyframes checkAppear {
    from {
      opacity: 0;
      transform: scale(0.6);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`,PC=q.div`
  padding: 14px;

  color: ${({theme:e})=>e.muted};

  font-size: 13px;

  text-align: center;

  transition:
    color 0.25s ease;
`,FC=q.button`
  position: relative;

  width: 100%;
  height: 42px;

  margin-top: 18px;

  overflow: hidden;

  border: none;
  border-radius: 9px;

  background: ${({theme:e})=>e.button};

  color: #111111;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

  box-shadow:
    0 5px 15px
    ${({theme:e})=>`${e.button}38`};

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &::before {
    content: "";

    position: absolute;

    top: 0;
    left: -100%;

    width: 60%;
    height: 100%;

    background: linear-gradient(
      110deg,
      transparent,
      rgba(255, 255, 255, 0.45),
      transparent
    );

    transform: skewX(-20deg);

    transition:
      left 0.55s ease;
  }

  &:hover {
    transform: translateY(-2px);

    box-shadow:
      0 8px 24px
      ${({theme:e})=>`${e.button}55`};

    &::before {
      left: 140%;
    }
  }

  &:active {
    transform: translateY(0)
      scale(0.98);
  }

  @media screen and (min-width: 564px) {
    height: 44px;
  }
`,IC=[{name:`Orange`,value:`#ffb36c`},{name:`Blue`,value:`#6caeff`},{name:`Light Blue`,value:`#87cefa`},{name:`Dark Blue`,value:`#4169e1`},{name:`Purple`,value:`#a66cff`},{name:`Violet`,value:`#8a2be2`},{name:`Green`,value:`#6cff91`},{name:`Dark Green`,value:`#228b22`},{name:`Red`,value:`#ff6c6c`},{name:`Pink`,value:`#ff6cba`},{name:`Yellow`,value:`#ffd66c`},{name:`Cyan`,value:`#6ce5ff`},{name:`Black`,value:`#111111`},{name:`White`,value:`#ffffff`}];function LC({onClose:e,onColorChange:t,currentColor:n}){let[r,i]=(0,B.useState)(n||`#ffb36c`),[a,o]=(0,B.useState)(``),s=a.trim()===``?IC:IC.filter(e=>e.name.toLowerCase().includes(a.toLowerCase())),c=e=>{i(e.value),o(e.name)};return(0,J.jsx)(CC,{onClick:t=>{t.target===t.currentTarget&&e()},children:(0,J.jsxs)(wC,{children:[(0,J.jsx)(TC,{type:`button`,onClick:e,"aria-label":`Close`,children:(0,J.jsx)(tr,{})}),(0,J.jsx)(EC,{children:`Choose your color`}),(0,J.jsx)(DC,{children:`Pick the accent color for your website.`}),(0,J.jsx)(OC,{type:`text`,placeholder:`Type a color...`,value:a,onChange:e=>{o(e.target.value)}}),(0,J.jsx)(kC,{children:s.length>0?s.map(e=>(0,J.jsxs)(AC,{type:`button`,$selected:r===e.value,onClick:()=>c(e),children:[(0,J.jsx)(jC,{$color:e.value}),(0,J.jsx)(MC,{children:e.name}),r===e.value&&(0,J.jsx)(NC,{children:(0,J.jsx)(gr,{})})]},e.name)):(0,J.jsx)(PC,{children:`No colors found`})}),(0,J.jsx)(FC,{type:`button`,onClick:()=>{r&&(localStorage.setItem(`accentColor`,r),t&&t(r),e())},children:`Apply color`})]})})}var RC=q.button`
  position: fixed;

  right: 28px;
  bottom: 28px;

  width: 46px;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid
    ${({$visible:e,theme:t})=>t.text===`#ffffff`?`rgba(255, 255, 255, 0.12)`:`rgba(0, 0, 0, 0.08)`};

  border-radius: 50%;

  background: ${({theme:e})=>e.background};
  color: ${({theme:e})=>e.text};

  cursor: pointer;

  opacity: ${({$visible:e})=>+!!e};

  visibility: ${({$visible:e})=>e?`visible`:`hidden`};

  transform: ${({$visible:e})=>e?`translateY(0) scale(1)`:`translateY(20px) scale(0.8)`};

  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.15);

  z-index: 900;

  transition:
    opacity 0.3s ease,
    visibility 0.3s ease,
    transform 0.4s
      cubic-bezier(0.22, 1, 0.36, 1),
    background 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform:
      translateY(-4px)
      scale(1.05);

    background: ${({theme:e})=>e.button};
    color: #111111;

    box-shadow:
      0 12px 30px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform:
      translateY(-1px)
      scale(0.95);
  }

  &:focus-visible {
    outline: 2px solid
      ${({theme:e})=>e.button};

    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    right: 20px;
    bottom: 20px;

    width: 42px;
    height: 42px;
  }

  @media (max-width: 480px) {
    right: 16px;
    bottom: 16px;

    width: 40px;
    height: 40px;
  }
`,zC=q.span`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  ${RC}:hover & {
    transform: translateY(-2px);
  }
`;function BC(){let[e,t]=(0,B.useState)(!1);return(0,B.useEffect)(()=>{let e=()=>{t(window.scrollY>400)};return window.addEventListener(`scroll`,e),e(),()=>{window.removeEventListener(`scroll`,e)}},[]),(0,J.jsx)(RC,{type:`button`,$visible:e,onClick:()=>{window.scrollTo({top:0,behavior:`smooth`})},"aria-label":`Back to top`,children:(0,J.jsx)(zC,{children:(0,J.jsx)(yr,{})})})}var VC=Ln`
    from {
        opacity: 0;
        transform: scale(0.96);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
`,HC=Ln`
    0%,
    100% {
        transform: translate(-50%, -50%) translateY(0);
    }

    50% {
        transform: translate(-50%, -50%) translateY(-8px);
    }
`,UC=Ln`
    0%,
    100% {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    50% {
        transform: translate(-50%, -50%) rotate(12deg) scale(1.12);
    }
`,WC=Ln`
    0%,
    100% {
        opacity: 0.25;
        transform: translate(-50%, -50%) scale(0.8);
    }

    50% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.2);
    }
`,GC=q.div`
    position: fixed;
    inset: 0;
    z-index: 2000;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 14px;
    box-sizing: border-box;

    background: ${({theme:e})=>e.background===`#111111`?`rgba(0, 0, 0, 0.55)`:`rgba(17, 17, 17, 0.28)`};

    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    animation: ${VC} 0.3s ease;
`,KC=q.div`
    position: relative;
    width: min(1100px, 100%);
    max-height: 94vh;
    padding: 18px;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid
        ${({theme:e})=>`${e.button}45`};
    border-radius: 24px;
    background: ${({theme:e})=>e.background===`#111111`?`rgba(24, 24, 24, 0.72)`:`rgba(255, 255, 255, 0.68)`};

    backdrop-filter: blur(28px) saturate(160%);
    -webkit-backdrop-filter: blur(28px) saturate(160%);

    box-shadow:
        0 30px 100px rgba(0, 0, 0, 0.32),
        0 0 80px ${({theme:e})=>`${e.button}20`},
        inset 0 1px 1px
            rgba(255, 255, 255, 0.22);

    @media (max-width: 700px) {
        padding: 12px;
        border-radius: 18px;
    }
`,qC=q.div`
    position: relative;
    z-index: 5;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 12px;
`,JC=q.h2`
    display: flex;
    align-items: center;
    gap: 9px;

    margin: 0;

    color: ${({theme:e})=>e.text};

    font-size: 22px;
    font-weight: 800;
    letter-spacing: -0.5px;

    text-shadow:
        0 0 8px ${({theme:e})=>`${e.button}80`},
        0 0 20px ${({theme:e})=>`${e.button}65`},
        0 0 40px ${({theme:e})=>`${e.button}45`};

    @media (max-width: 600px) {
        font-size: 18px;
    }
`,YC=q.button`
    width: 34px;
    height: 34px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;

    border: 1px solid
        ${({theme:e})=>`${e.button}30`};

    border-radius: 50%;

    background: ${({theme:e})=>e.background===`#111111`?`rgba(255,255,255,0.07)`:`rgba(255,255,255,0.5)`};

    color: ${({theme:e})=>e.text};

    cursor: pointer;

    transition:
        transform 0.25s ease,
        background 0.25s ease,
        box-shadow 0.25s ease;

    &:hover {
        transform: rotate(90deg);

        background: ${({theme:e})=>`${e.button}30`};

        box-shadow:
            0 0 18px ${({theme:e})=>`${e.button}45`};
    }
`,XC=q.div`
    position: relative;
`,ZC=q.div`
    position: relative;

    width: 100%;
    height: min(620px, 72vh);

    min-height: 430px;

    overflow: hidden;

    border: 1px solid
        ${({theme:e})=>`${e.button}30`};

    border-radius: 20px;

    cursor: crosshair;

    background:
        radial-gradient(
            circle at 50% 50%,
            ${({theme:e})=>`${e.button}12`},
            transparent 42%
        ),
        ${({$weather:e,theme:t})=>e===`storm`?`linear-gradient(145deg, rgba(30,25,50,.88), rgba(10,10,18,.96))`:t.background===`#111111`?`linear-gradient(145deg, rgba(25,25,25,.82), rgba(10,10,10,.95))`:`linear-gradient(145deg, rgba(255,255,255,.66), rgba(235,235,235,.9))`};

    transition: background 0.8s ease;

    @media (max-width: 700px) {
        height: 68vh;
        min-height: 430px;
    }
`,QC=q.div`
    position: absolute;
    z-index: 20;

    top: 14px;
    left: 14px;
    right: 14px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);

    gap: 8px;

    pointer-events: none;

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }
`,$C=q.div`
    padding: 8px 10px;

    border: 1px solid
        ${({theme:e})=>`${e.button}25`};

    border-radius: 12px;

    background: ${({theme:e})=>e.background===`#111111`?`rgba(255,255,255,.055)`:`rgba(255,255,255,.45)`};

    backdrop-filter: blur(14px);
`,ew=q.div`
    color: ${({theme:e})=>e.muted};

    font-size: 9px;
    font-weight: 700;

    text-transform: uppercase;
    letter-spacing: 0.5px;
`,tw=q.div`
    display: flex;
    align-items: center;
    gap: 3px;

    margin-top: 2px;

    color: ${({$danger:e,theme:t})=>e?`#ff6b6b`:t.text};

    font-size: 15px;
    font-weight: 800;

    svg {
        width: 13px;
        height: 13px;
    }
`,nw=q.div`
    position: absolute;
    z-index: 20;

    top: 105px;
    left: 50%;

    display: flex;
    align-items: center;
    gap: 6px;

    padding: 7px 12px;

    transform: translateX(-50%);

    border: 1px solid
        ${({theme:e})=>`${e.button}30`};

    border-radius: 999px;

    background: ${({theme:e})=>e.background===`#111111`?`rgba(255,255,255,.06)`:`rgba(255,255,255,.5)`};

    backdrop-filter: blur(14px);

    color: ${({theme:e})=>e.text};

    font-size: 11px;
    font-weight: 700;
`,rw=q.div`
    position: absolute;
    z-index: 20;

    top: 105px;
    right: 14px;

    padding: 7px 10px;

    border: 1px solid
        ${({$difficulty:e})=>e===`easy`?`rgba(72,187,120,.45)`:e===`medium`?`rgba(237,173,64,.45)`:`rgba(220,70,70,.45)`};

    border-radius: 999px;

    background: ${({$difficulty:e})=>e===`easy`?`rgba(72,187,120,.12)`:e===`medium`?`rgba(237,173,64,.12)`:`rgba(220,70,70,.12)`};

    color: ${({$difficulty:e})=>e===`easy`?`#48bb78`:e===`medium`?`#edad40`:`#dc4646`};

    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
`,iw=q.div`
    position: absolute;
    z-index: 15;

    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    transform: translate(-50%, -50%);

    border: 2px solid
        ${({theme:e})=>`${e.button}cc`};

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            ${({theme:e})=>`${e.button}65`},
            ${({theme:e})=>`${e.button}20`}
        );

    box-shadow:
        0 0 20px ${({theme:e})=>`${e.button}80`},
        0 0 45px ${({theme:e})=>`${e.button}45`};

    color: ${({theme:e})=>e.button};

    animation: ${HC} 2s ease-in-out infinite;

    pointer-events: none;

    svg {
        width: 22px;
        height: 22px;
    }
`,aw=q.div`
    position: absolute;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;

    transform: translate(-50%, -50%);

    border-radius: 50%;

    font-size: 23px;

    filter:
        drop-shadow(
            0 0 8px
                ${({$danger:e,theme:t})=>e?`rgba(255,90,90,.8)`:`${t.button}80`}
        );

    animation: ${UC}
        1.7s ease-in-out infinite;

    pointer-events: none;
`,ow=q.div`
    position: absolute;
    z-index: 8;

    width: 72px;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: center;

    transform: translate(-50%, -50%);

    border: 2px dashed
        rgba(255, 215, 80, 0.8);

    border-radius: 50%;

    background: rgba(
        255,
        210,
        60,
        0.12
    );

    color: #ffd43b;

    animation: ${WC}
        0.8s ease-in-out infinite;

    svg {
        width: 28px;
        height: 28px;
    }
`,sw=q.div`
    position: absolute;
    z-index: 30;

    top: 155px;
    left: 50%;

    transform: translateX(-50%);

    color: ${({theme:e})=>e.button};

    font-size: 16px;
    font-weight: 900;

    text-shadow:
        0 0 10px ${({theme:e})=>`${e.button}aa`},
        0 0 25px ${({theme:e})=>`${e.button}70`};

    pointer-events: none;
`,cw=q.div`
    position: absolute;
    z-index: 30;

    left: 50%;
    top: 58%;

    transform: translate(-50%, -50%);

    color: ${({theme:e})=>e.button};

    font-size: 25px;
    font-weight: 900;

    text-shadow:
        0 0 15px ${({theme:e})=>`${e.button}cc`};

    pointer-events: none;
`,lw=q.div`
    position: absolute;
    z-index: 50;

    inset: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 30px;

    text-align: center;

    background:
        radial-gradient(
            circle,
            ${({theme:e})=>`${e.button}14`},
            transparent 50%
        );
`,uw=q.div`
    margin-bottom: 10px;

    font-size: 58px;

    filter:
        drop-shadow(
            0 0 18px
                ${({theme:e})=>`${e.button}75`}
        );
`,dw=q.h1`
    margin: 0;

    color: ${({theme:e})=>e.text};

    font-size: 30px;
    font-weight: 900;

    text-shadow:
        0 0 8px ${({theme:e})=>`${e.button}80`},
        0 0 22px ${({theme:e})=>`${e.button}55`};
`,fw=q.p`
    max-width: 430px;

    margin: 10px 0 20px;

    color: ${({theme:e})=>e.muted};

    font-size: 14px;
    line-height: 1.6;
`,pw=q.div`
    margin-bottom: 10px;

    color: ${({theme:e})=>e.muted};

    font-size: 11px;
    font-weight: 800;

    text-transform: uppercase;
    letter-spacing: 1px;
`,mw=q.div`
    display: flex;
    gap: 8px;

    margin-bottom: 18px;

    @media (max-width: 500px) {
        flex-direction: column;
        width: 180px;
    }
`,hw=q.button`
    min-width: 95px;
    height: 40px;

    padding: 0 15px;

    border: 1px solid
        ${({$difficulty:e})=>e===`easy`?`#48bb78`:e===`medium`?`#edad40`:`#dc4646`};

    border-radius: 10px;

    background: ${({$active:e,$difficulty:t})=>e?t===`easy`?`#48bb78`:t===`medium`?`#edad40`:`#dc4646`:`transparent`};

    color: ${({$active:e,theme:t})=>e?`#111`:t.text};

    font-size: 12px;
    font-weight: 800;

    cursor: pointer;

    transition:
        transform 0.2s ease,
        background 0.2s ease,
        box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);

        box-shadow:
            0 6px 18px
                ${({$difficulty:e})=>e===`easy`?`rgba(72,187,120,0.25)`:e===`medium`?`rgba(237,173,64,0.25)`:`rgba(220,70,70,0.25)`};
    }

    &:active {
        transform: scale(0.97);
    }
`,gw=q.div`
    position: absolute;

    bottom: 12px;
    left: 50%;

    transform: translateX(-50%);

    color: ${({theme:e})=>e.muted};

    font-size: 10px;

    opacity: 0.75;

    pointer-events: none;
`,_w=q(lw)`
    background:
        radial-gradient(
            circle,
            ${({theme:e})=>`${e.button}18`},
            transparent 55%
        );
`,vw=q.div`
    margin: 10px 0;

    color: ${({theme:e})=>e.button};

    font-size: 58px;
    font-weight: 900;

    text-shadow:
        0 0 15px ${({theme:e})=>`${e.button}80`},
        0 0 40px ${({theme:e})=>`${e.button}45`};
`,yw=q.div`
    color: ${({theme:e})=>e.button};

    font-size: 12px;
    font-weight: 900;

    letter-spacing: 2px;
`,bw=q.div`
    display: flex;
    gap: 10px;

    margin-bottom: 20px;

    @media (max-width: 500px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`,xw=q.div`
    min-width: 110px;

    padding: 10px 14px;

    border: 1px solid
        ${({theme:e})=>`${e.button}25`};

    border-radius: 12px;

    background: ${({theme:e})=>e.background===`#111111`?`rgba(255,255,255,.05)`:`rgba(255,255,255,.45)`};
`,Sw=q.div`
    color: ${({theme:e})=>e.muted};

    font-size: 9px;
    text-transform: uppercase;
`,Cw=q.div`
    margin-top: 3px;

    color: ${({theme:e})=>e.text};

    font-size: 18px;
    font-weight: 800;
`,ww=q.div`
    display: flex;
    gap: 8px;

    @media (max-width: 600px) {
        flex-direction: column;
        width: min(260px, 100%);
    }
`,Tw=q(q.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;

    min-width: 130px;
    height: 43px;

    border: none;
    border-radius: 11px;

    background: ${({theme:e})=>e.button};

    color: #111;

    font-size: 14px;
    font-weight: 800;

    cursor: pointer;

    box-shadow:
        0 8px 25px ${({theme:e})=>`${e.button}45`};

    transition:
        transform 0.2s ease,
        box-shadow 0.25s ease;

    &:hover {
        transform: translateY(-2px);

        box-shadow:
            0 12px 30px
                ${({theme:e})=>`${e.button}65`};
    }

    &:active {
        transform: scale(0.97);
    }
`)`
    min-width: 130px;
`,Ew=q.button`
    min-width: 90px;
    height: 43px;

    padding: 0 12px;

    border: 1px solid
        ${({theme:e})=>`${e.button}35`};

    border-radius: 11px;

    background: transparent;

    color: ${({theme:e})=>e.text};

    font-size: 13px;
    font-weight: 700;

    cursor: pointer;

    transition:
        background 0.2s ease,
        transform 0.2s ease;

    &:hover {
        background: ${({theme:e})=>`${e.button}15`};

        transform: translateY(-2px);
    }
`,Dw=q.button`
    position: absolute;
    z-index: 100;

    top: 50%;
    right: -1px;

    display: flex;
    align-items: center;
    gap: 7px;

    padding: 10px 9px;

    transform: translateY(-50%);

    border: 1px solid
        ${({theme:e})=>`${e.button}35`};

    border-right: none;

    border-radius: 12px 0 0 12px;

    background: ${({theme:e})=>e.background===`#111111`?`rgba(25,25,25,.82)`:`rgba(255,255,255,.68)`};

    backdrop-filter: blur(16px);

    color: ${({theme:e})=>e.button};

    font-size: 10px;
    font-weight: 800;

    cursor: pointer;

    writing-mode: vertical-rl;

    box-shadow:
        0 0 20px ${({theme:e})=>`${e.button}20`};

    transition:
        background 0.25s ease,
        box-shadow 0.25s ease;

    &:hover {
        background: ${({theme:e})=>`${e.button}18`};

        box-shadow:
            0 0 25px ${({theme:e})=>`${e.button}40`};
    }

    svg {
        width: 16px;
        height: 16px;
    }
`,Ow=q.aside`
    position: absolute;
    z-index: 200;

    top: 50%;
    right: 0;

    width: min(340px, 92%);

    max-height: 80%;

    padding: 16px;

    box-sizing: border-box;

    transform: translateY(-50%);

    overflow: hidden;

    border: 1px solid
        ${({theme:e})=>`${e.button}40`};

    border-radius: 18px 0 0 18px;

    background: ${({theme:e})=>e.background===`#111111`?`rgba(20,20,20,.88)`:`rgba(255,255,255,.86)`};

    backdrop-filter: blur(24px) saturate(160%);

    box-shadow:
        -20px 20px 60px rgba(0,0,0,.2),
        0 0 50px ${({theme:e})=>`${e.button}20`};

    animation: ${VC} 0.25s ease;
`,kw=q.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 12px;
`,Aw=q.div`
    display: flex;
    align-items: center;
    gap: 7px;

    color: ${({theme:e})=>e.text};

    font-size: 14px;
    font-weight: 800;

    svg {
        color: ${({theme:e})=>e.button};
    }
`,jw=q.button`
    width: 28px;
    height: 28px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 50%;

    background: transparent;

    color: ${({theme:e})=>e.muted};

    cursor: pointer;

    &:hover {
        color: ${({theme:e})=>e.button};
    }
`,Mw=q.div`
    max-height: 52vh;

    overflow-y: auto;

    padding-right: 3px;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;

        background: ${({theme:e})=>`${e.button}55`};
    }
`,Nw=q.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
`,Pw=q.h3`
    margin: 0 0 5px;

    color: ${({theme:e})=>e.text};

    font-size: 15px;
`,Fw=q.div`
    display: flex;
    align-items: center;
    gap: 10px;

    min-height: 54px;

    padding: 8px 10px;

    box-sizing: border-box;

    border: 1px solid
        ${({$unlocked:e,theme:t})=>e?`${t.button}45`:`rgba(128,128,128,.15)`};

    border-radius: 11px;

    background: ${({$unlocked:e,theme:t})=>e?`${t.button}0d`:`rgba(128,128,128,.06)`};
`,Iw=q.div`
    width: 34px;
    height: 34px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    border-radius: 9px;

    background: ${({theme:e})=>`${e.button}12`};

    font-size: 19px;
`,Lw=q.div`
    flex: 1;
    min-width: 0;
`,Rw=q.div`
    color: ${({theme:e})=>e.text};

    font-size: 11px;
    font-weight: 800;
`,zw=q.div`
    margin-top: 2px;

    color: ${({theme:e})=>e.muted};

    font-size: 9px;
    line-height: 1.4;
`,Bw=q.span`
    filter: grayscale(1);
    opacity: 0.45;
`,Vw=q.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    margin-top: 12px;
`,Hw=q.button`
    width: 29px;
    height: 29px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid
        ${({theme:e})=>`${e.button}30`};

    border-radius: 8px;

    background: transparent;

    color: ${({theme:e})=>e.button};

    cursor: pointer;

    &:disabled {
        opacity: 0.25;
        cursor: default;
    }
`,Uw=q.span`
    color: ${({theme:e})=>e.muted};

    font-size: 10px;
    font-weight: 700;
`,Ww=q.div`
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 8px;
`,Gw=q.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    padding: 12px 6px;

    border: 1px solid
        ${({$unlocked:e,theme:t})=>e?`${t.button}35`:`rgba(128,128,128,.15)`};

    border-radius: 11px;

    background: ${({$unlocked:e,theme:t})=>e?`${t.button}0d`:`rgba(128,128,128,.06)`};

    opacity: ${({$unlocked:e})=>e?1:.5};
`,Kw=q.div`
    font-size: 25px;
`,qw=q.div`
    color: ${({theme:e})=>e.text};

    font-size: 9px;
    font-weight: 700;
`,Jw=60,Yw={easy:{name:`Easy`,time:60,lives:3,spawnRate:2e3,score:10,dangerChance:.25},medium:{name:`Medium`,time:60,lives:3,spawnRate:1400,score:15,dangerChance:.45},hard:{name:`Hard`,time:60,lives:2,spawnRate:900,score:20,dangerChance:.65}},Xw=[{id:`sun`,name:`Sunny`,icon:`☀️`,color:`#ffd166`},{id:`rain`,name:`Rain`,icon:`🌧️`,color:`#60a5fa`},{id:`wind`,name:`Wind`,icon:`💨`,color:`#94a3b8`},{id:`storm`,name:`Storm`,icon:`⛈️`,color:`#a78bfa`},{id:`snow`,name:`Snow`,icon:`❄️`,color:`#bae6fd`}],Zw=[{id:`first`,icon:`🏆`,name:`First Forecast`,description:`Play your first Weather Rush game.`},{id:`sun`,icon:`☀️`,name:`Sun Chaser`,description:`Collect 100 sunny objects.`},{id:`rain`,icon:`💧`,name:`Rain Collector`,description:`Collect 100 rain drops.`},{id:`storm`,icon:`⚡`,name:`Storm Survivor`,description:`Dodge 50 lightning strikes.`},{id:`combo`,icon:`🔥`,name:`Combo Master`,description:`Reach a x10 combo.`}],Qw=[{id:`clear`,icon:`☀️`,name:`Clear`},{id:`cloudy`,icon:`🌤️`,name:`Cloudy`},{id:`rain`,icon:`🌧️`,name:`Rain`},{id:`storm`,icon:`⛈️`,name:`Storm`},{id:`snow`,icon:`❄️`,name:`Snow`},{id:`rainbow`,icon:`🌈`,name:`Rainbow`}],$w=()=>({games:0,bestScores:{easy:0,medium:0,hard:0},bestCombo:0,sun:0,rain:0,stormDodged:0,rainbow:0}),eT=()=>{try{let e=localStorage.getItem(`weatherGameStats`);if(!e)return $w();let t=JSON.parse(e);return{games:Number(t.games)||0,bestScores:{easy:Number(t.bestScores?.easy)||0,medium:Number(t.bestScores?.medium)||0,hard:Number(t.bestScores?.hard)||0},bestCombo:Number(t.bestCombo)||0,sun:Number(t.sun)||0,rain:Number(t.rain)||0,stormDodged:Number(t.stormDodged)||0,rainbow:Number(t.rainbow)||0}}catch{return $w()}},tT=()=>Xw[Math.floor(Math.random()*Xw.length)],nT=()=>({x:Math.random()*82+6,y:Math.random()*72+12}),rT=(e,t)=>{let n=nT(),r=e.id===`storm`&&Math.random()<Yw[t].dangerChance;return{id:`${Date.now()}-${Math.random()}`,type:e.id,icon:e.icon,x:n.x,y:n.y,danger:r}};function iT({onClose:e}){let t=(0,B.useRef)(null),n=(0,B.useRef)({x:50,y:50}),r=(0,B.useRef)({}),i=(0,B.useRef)(0),a=(0,B.useRef)(0),o=(0,B.useRef)(3),s=(0,B.useRef)({sun:0,rain:0,stormDodged:0,rainbow:0}),c=(0,B.useRef)(!1),l=(0,B.useRef)(null),u=(0,B.useRef)(null),d=(0,B.useRef)(null),f=(0,B.useRef)(null),p=(0,B.useRef)(null),m=(0,B.useRef)(null),h=(0,B.useRef)(null),[g,_]=(0,B.useState)(null),[v,y]=(0,B.useState)(!1),[b,x]=(0,B.useState)(!1),[S,C]=(0,B.useState)(0),[w,T]=(0,B.useState)(0),[E,ee]=(0,B.useState)(3),[D,te]=(0,B.useState)(Jw),[ne,re]=(0,B.useState)({x:50,y:50}),[O,k]=(0,B.useState)([]),[A,j]=(0,B.useState)(null),[M,N]=(0,B.useState)({sun:0,rain:0,stormDodged:0,rainbow:0}),[P,F]=(0,B.useState)(Xw[0]),[I,ie]=(0,B.useState)(``),[ae,R]=(0,B.useState)(!1),[oe,se]=(0,B.useState)(0),[z,ce]=(0,B.useState)(eT),le=(0,B.useCallback)(()=>{u.current&&=(cancelAnimationFrame(u.current),null),d.current&&=(clearInterval(d.current),null),f.current&&=(clearInterval(f.current),null),p.current&&=(clearTimeout(p.current),null),m.current=null},[]),ue=(0,B.useCallback)((e,t,n,r)=>{ce(i=>{let a={...i,games:(i.games||0)+1,bestScores:{...i.bestScores,[r]:Math.max(i.bestScores?.[r]||0,e)},bestCombo:Math.max(i.bestCombo||0,t),sun:(i.sun||0)+(n.sun||0),rain:(i.rain||0)+(n.rain||0),stormDodged:(i.stormDodged||0)+(n.stormDodged||0),rainbow:(i.rainbow||0)+(n.rainbow||0)};try{localStorage.setItem(`weatherGameStats`,JSON.stringify(a))}catch{}return a})},[]);h.current=(0,B.useCallback)(()=>{if(!c.current||!l.current)return;let e=l.current,t=i.current,n=a.current,r={...s.current};c.current=!1,y(!1),x(!0),le(),ue(t,n,r,e)},[le,ue]);let de=(0,B.useCallback)(e=>{let t=Yw[e];le(),i.current=0,a.current=0,o.current=t.lives,s.current={sun:0,rain:0,stormDodged:0,rainbow:0},n.current={x:50,y:50},C(0),T(0),ee(t.lives),te(t.time),k([]),j(null),ie(``),re({x:50,y:50}),N({sun:0,rain:0,stormDodged:0,rainbow:0}),F(Xw[0])},[le]),fe=(0,B.useCallback)(e=>{de(e),l.current=e,c.current=!0,_(e),y(!0),x(!1)},[de]);(0,B.useEffect)(()=>{if(!v)return;let e=setInterval(()=>{te(t=>t<=1?(clearInterval(e),h.current&&h.current(),0):t-1)},1e3);return()=>clearInterval(e)},[v]),(0,B.useEffect)(()=>{if(!v||!g)return;let e=Yw[g];return d.current=setInterval(()=>{let t=tT();if(F(t),k(e=>{let n=rT(t,g);return[...e.slice(-9),n]}),t.id===`storm`&&Math.random()<e.dangerChance){let e=nT(),t=Date.now();m.current=t,j({id:t,x:e.x,y:e.y}),p.current&&clearTimeout(p.current),p.current=setTimeout(()=>{m.current===t&&(j(null),p.current=null,s.current={...s.current,stormDodged:s.current.stormDodged+1},N(s.current))},1200)}},e.spawnRate),()=>{d.current&&=(clearInterval(d.current),null)}},[v,g]),(0,B.useEffect)(()=>{if(!v)return;let e=e=>{let t=e.key.length===1?e.key.toLowerCase():e.key;r.current[t]=!0},t=e=>{let t=e.key.length===1?e.key.toLowerCase():e.key;r.current[t]=!1};return window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,t),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,t)}},[v]),(0,B.useEffect)(()=>{if(!v)return;let e=()=>{let t=l.current,i=t===`hard`?1:t===`medium`?.9:.8,{x:a,y:o}=n.current;(r.current.ArrowLeft||r.current.a)&&(a-=i),(r.current.ArrowRight||r.current.d)&&(a+=i),(r.current.ArrowUp||r.current.w)&&(o-=i),(r.current.ArrowDown||r.current.s)&&(o+=i),a=Math.max(4,Math.min(96,a)),o=Math.max(8,Math.min(92,o)),n.current={x:a,y:o},re({x:a,y:o}),u.current=requestAnimationFrame(e)};return u.current=requestAnimationFrame(e),()=>{u.current&&=(cancelAnimationFrame(u.current),null)}},[v]),(0,B.useEffect)(()=>{if(!v||!g)return;let e=Yw[g];return f.current=setInterval(()=>{let t=n.current;k(n=>{let r=[],c=i.current,l=a.current,u=o.current,d={...s.current},f=!1,p=!1,m=0;return n.forEach(n=>{let i=n.x-t.x,a=n.y-t.y;if(Math.sqrt(i*i+a*a)<7){if(f=!0,n.danger)u=Math.max(0,u-1),l=0,p=!0;else{let t=e.score+l*2;c+=t,l+=1,m+=t,d[n.type]=(d[n.type]||0)+1}return}r.push(n)}),f&&(i.current=c,a.current=l,o.current=u,s.current=d,C(c),T(l),ee(u),N(d),p?ie(`⚡ Storm hit!`):m>0&&ie(`+${m}`),u<=0&&h.current&&setTimeout(()=>{h.current()},0)),r})},50),()=>{f.current&&=(clearInterval(f.current),null)}},[v,g]),(0,B.useEffect)(()=>{if(!I)return;let e=setTimeout(()=>{ie(``)},600);return()=>clearTimeout(e)},[I]),(0,B.useEffect)(()=>()=>{c.current=!1,le(),window.removeEventListener(`keydown`,()=>{}),window.removeEventListener(`keyup`,()=>{})},[le]);let pe=e=>{if(!v)return;let r=t.current?.getBoundingClientRect();if(!r)return;let i=(e.clientX-r.left)/r.width*100,a=(e.clientY-r.top)/r.height*100;n.current={x:Math.max(4,Math.min(96,i)),y:Math.max(8,Math.min(92,a))},re(n.current)},me=()=>g&&z.bestScores?.[g]||0,he=b&&S>0&&S>=me(),ge=e=>e.id===`first`?z.games>0:e.id===`sun`?z.sun>=100:e.id===`rain`?z.rain>=100:e.id===`storm`?z.stormDodged>=50:e.id===`combo`&&z.bestCombo>=10;return(0,J.jsx)(GC,{onClick:e,children:(0,J.jsxs)(KC,{onClick:e=>e.stopPropagation(),children:[(0,J.jsxs)(qC,{children:[(0,J.jsxs)(JC,{children:[(0,J.jsx)(`span`,{children:`🌦️`}),`Weather Rush`]}),(0,J.jsx)(YC,{type:`button`,onClick:e,"aria-label":`Close game`,children:(0,J.jsx)(tr,{})})]}),(0,J.jsxs)(XC,{children:[(0,J.jsxs)(ZC,{ref:t,$weather:P.id,onClick:pe,children:[!v&&!b&&(0,J.jsxs)(lw,{children:[(0,J.jsx)(uw,{children:`🌦️`}),(0,J.jsx)(dw,{children:`Weather Rush`}),(0,J.jsx)(fw,{children:`Survive changing weather, collect bonuses and build the highest combo.`}),(0,J.jsx)(pw,{children:`Choose difficulty`}),(0,J.jsxs)(mw,{children:[(0,J.jsx)(hw,{type:`button`,$active:g===`easy`,$difficulty:`easy`,onClick:()=>fe(`easy`),children:`Easy`}),(0,J.jsx)(hw,{type:`button`,$active:g===`medium`,$difficulty:`medium`,onClick:()=>fe(`medium`),children:`Medium`}),(0,J.jsx)(hw,{type:`button`,$active:g===`hard`,$difficulty:`hard`,onClick:()=>fe(`hard`),children:`Hard`})]}),(0,J.jsx)(gw,{children:`Easy · Medium · Hard`})]}),v&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(QC,{children:[(0,J.jsxs)($C,{children:[(0,J.jsx)(ew,{children:`Score`}),(0,J.jsx)(tw,{children:S})]}),(0,J.jsxs)($C,{children:[(0,J.jsx)(ew,{children:`Combo`}),(0,J.jsxs)(tw,{children:[`x`,w]})]}),(0,J.jsxs)($C,{children:[(0,J.jsx)(ew,{children:`Time`}),(0,J.jsxs)(tw,{$danger:D<=10,children:[D,`s`]})]}),(0,J.jsxs)($C,{children:[(0,J.jsx)(ew,{children:`Lives`}),(0,J.jsx)(tw,{children:Array.from({length:Yw[g].lives}).map((e,t)=>(0,J.jsx)(lr,{fill:t<E?`currentColor`:`none`},t))})]})]}),(0,J.jsxs)(nw,{children:[P.icon,` `,P.name]}),(0,J.jsx)(rw,{$difficulty:g,children:Yw[g].name}),w>=3&&(0,J.jsxs)(sw,{children:[`🔥 COMBO x`,w]}),I&&(0,J.jsx)(cw,{children:I}),(0,J.jsx)(iw,{style:{left:`${ne.x}%`,top:`${ne.y}%`},children:(0,J.jsx)(ir,{})}),O.map(e=>(0,J.jsx)(aw,{$danger:e.danger,style:{left:`${e.x}%`,top:`${e.y}%`},children:e.icon},e.id)),A&&(0,J.jsx)(ow,{style:{left:`${A.x}%`,top:`${A.y}%`},children:(0,J.jsx)(er,{})}),(0,J.jsx)(gw,{children:`WASD / arrows · tap to move`})]}),b&&(0,J.jsxs)(_w,{children:[(0,J.jsx)(uw,{children:E<=0?`⚡`:`🏆`}),(0,J.jsx)(dw,{children:E<=0?`Storm got you!`:`Weather Complete!`}),(0,J.jsx)(rw,{$difficulty:g,children:Yw[g].name}),he&&(0,J.jsx)(yw,{children:`NEW RECORD!`}),(0,J.jsx)(vw,{children:S}),(0,J.jsxs)(bw,{children:[(0,J.jsxs)(xw,{children:[(0,J.jsx)(Sw,{children:`Best score`}),(0,J.jsx)(Cw,{children:Math.max(S,me())})]}),(0,J.jsxs)(xw,{children:[(0,J.jsx)(Sw,{children:`Best combo`}),(0,J.jsxs)(Cw,{children:[`x`,Math.max(w,z.bestCombo)]})]})]}),(0,J.jsxs)(ww,{children:[(0,J.jsxs)(Tw,{type:`button`,onClick:()=>fe(g),children:[(0,J.jsx)(or,{}),`Play again`]}),(0,J.jsx)(Ew,{type:`button`,onClick:()=>{le(),c.current=!1,l.current=null,y(!1),x(!1),_(null)},children:`Change difficulty`}),(0,J.jsx)(Ew,{type:`button`,onClick:e,children:`Close`})]})]})]}),(0,J.jsxs)(Dw,{type:`button`,onClick:()=>R(e=>!e),"aria-label":`Open weather journal`,children:[(0,J.jsx)(vr,{}),(0,J.jsx)(`span`,{children:`Journal`})]}),ae&&(0,J.jsxs)(Ow,{children:[(0,J.jsxs)(kw,{children:[(0,J.jsxs)(Aw,{children:[(0,J.jsx)(vr,{}),`Weather Journal`]}),(0,J.jsx)(jw,{type:`button`,onClick:()=>R(!1),children:(0,J.jsx)(tr,{})})]}),(0,J.jsxs)(Mw,{children:[oe===0&&(0,J.jsxs)(Nw,{children:[(0,J.jsx)(Pw,{children:`Achievements`}),Zw.map(e=>{let t=ge(e);return(0,J.jsxs)(Fw,{$unlocked:t,children:[(0,J.jsx)(Iw,{children:t?e.icon:(0,J.jsx)(Bw,{children:`🔒`})}),(0,J.jsxs)(Lw,{children:[(0,J.jsx)(Rw,{children:t?e.name:`Unknown weather`}),(0,J.jsx)(zw,{children:t?e.description:`Keep playing to discover this achievement.`})]})]},e.id)})]}),oe===1&&(0,J.jsxs)(Nw,{children:[(0,J.jsx)(Pw,{children:`Statistics`}),(0,J.jsxs)(Fw,{children:[(0,J.jsx)(Iw,{children:`🎮`}),(0,J.jsxs)(Lw,{children:[(0,J.jsx)(Rw,{children:`Games played`}),(0,J.jsx)(zw,{children:`Total Weather Rush sessions`})]}),(0,J.jsx)(Rw,{children:z.games})]}),(0,J.jsxs)(Fw,{children:[(0,J.jsx)(Iw,{children:`🏆`}),(0,J.jsxs)(Lw,{children:[(0,J.jsx)(Rw,{children:`Easy best`}),(0,J.jsx)(zw,{children:`Best Easy score`})]}),(0,J.jsx)(Rw,{children:z.bestScores.easy})]}),(0,J.jsxs)(Fw,{children:[(0,J.jsx)(Iw,{children:`🌦️`}),(0,J.jsxs)(Lw,{children:[(0,J.jsx)(Rw,{children:`Medium best`}),(0,J.jsx)(zw,{children:`Best Medium score`})]}),(0,J.jsx)(Rw,{children:z.bestScores.medium})]}),(0,J.jsxs)(Fw,{children:[(0,J.jsx)(Iw,{children:`⛈️`}),(0,J.jsxs)(Lw,{children:[(0,J.jsx)(Rw,{children:`Hard best`}),(0,J.jsx)(zw,{children:`Best Hard score`})]}),(0,J.jsx)(Rw,{children:z.bestScores.hard})]}),(0,J.jsxs)(Fw,{children:[(0,J.jsx)(Iw,{children:`🔥`}),(0,J.jsxs)(Lw,{children:[(0,J.jsx)(Rw,{children:`Best combo`}),(0,J.jsx)(zw,{children:`Highest combo reached`})]}),(0,J.jsxs)(Rw,{children:[`x`,z.bestCombo]})]}),(0,J.jsxs)(Fw,{children:[(0,J.jsx)(Iw,{children:`☀️`}),(0,J.jsxs)(Lw,{children:[(0,J.jsx)(Rw,{children:`Sun objects`}),(0,J.jsx)(zw,{children:`Total collected`})]}),(0,J.jsx)(Rw,{children:z.sun})]}),(0,J.jsxs)(Fw,{children:[(0,J.jsx)(Iw,{children:`💧`}),(0,J.jsxs)(Lw,{children:[(0,J.jsx)(Rw,{children:`Rain drops`}),(0,J.jsx)(zw,{children:`Total collected`})]}),(0,J.jsx)(Rw,{children:z.rain})]})]}),oe===2&&(0,J.jsxs)(Nw,{children:[(0,J.jsx)(Pw,{children:`Weather Collection`}),(0,J.jsx)(Ww,{children:Qw.map(e=>{let t=e.id===`clear`||e.id===`cloudy`||e.id===`rain`&&z.rain>0||e.id===`storm`&&z.stormDodged>0||e.id===`rainbow`&&z.rainbow>0;return(0,J.jsxs)(Gw,{$unlocked:t,children:[(0,J.jsx)(Kw,{children:t?e.icon:`?`}),(0,J.jsx)(qw,{children:t?e.name:`Unknown`})]},e.id)})})]})]}),(0,J.jsxs)(Vw,{children:[(0,J.jsx)(Hw,{type:`button`,disabled:oe===0,onClick:()=>se(e=>Math.max(0,e-1)),children:(0,J.jsx)(hr,{})}),(0,J.jsxs)(Uw,{children:[oe+1,` `,`/ 3`]}),(0,J.jsx)(Hw,{type:`button`,disabled:oe===2,onClick:()=>se(e=>Math.min(2,e+1)),children:(0,J.jsx)(mr,{})})]})]})]})]})})}var aT=Pn`
  * {
    box-sizing: border-box;
  }

html {
  scroll-behavior: smooth;
}

[id] {
  scroll-margin-top: 90px;
}

body {
  margin: 0;

  background: ${({theme:e})=>e.background};

  color: ${({theme:e})=>e.text};

  transition:
    background-color 0.6s ease,
    color 0.6s ease;

  font-family:
    "Poppins",
    sans-serif;
}

  button,
  input {
    font-family: inherit;
  }

  button {
    -webkit-tap-highlight-color: transparent;
  }

  a {
    -webkit-tap-highlight-color: transparent;
  }
`,oT=q.div`
  min-height: 100vh;

  background: ${({theme:e})=>e.background};

  color: ${({theme:e})=>e.text};

  transition:
    background-color 0.6s ease,
    color 0.6s ease;

  overflow-x: hidden;
`;q.main`
  width: 100%;
  min-height: calc(100vh - 82px);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 40px 64px;

  box-sizing: border-box;

  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(255, 179, 108, 0.08),
      transparent 30%
    ),
    #ffffff;
`;var sT={background:`#ffffff`,card:`#e9e9e9`,secondary:`#dcdcdc`,text:`#111111`,muted:`#666666`},cT={background:`#111111`,card:`#222222`,secondary:`#2d2d2d`,text:`#ffffff`,muted:`#b5b5b5`};function lT(){let[e,t]=(0,B.useState)(null),[n,r]=(0,B.useState)(null),[i,a]=(0,B.useState)([]),[o,s]=(0,B.useState)([]),[c,l]=(0,B.useState)(!1),[u,d]=(0,B.useState)(()=>localStorage.getItem(`temperatureUnit`)||`C`),[f,p]=(0,B.useState)(()=>localStorage.getItem(`theme`)===`dark`),[m,h]=(0,B.useState)(()=>localStorage.getItem(`accentColor`)||`#ffb36c`),[g,_]=(0,B.useState)(()=>!localStorage.getItem(`accentColor`)),[v,y]=(0,B.useState)(!1),[b,x]=(0,B.useState)(!1),[S,C]=(0,B.useState)(!1);(0,B.useEffect)(()=>{let e=localStorage.getItem(`weatherUser`),n=localStorage.getItem(`weatherAvatar`),i=localStorage.getItem(`weatherFavorites`);if(e&&t(JSON.parse(e)),n&&r(n),i){let e=JSON.parse(i);s(e),a(e)}y(!0)},[]),(0,B.useEffect)(()=>{v&&localStorage.setItem(`weatherFavorites`,JSON.stringify(o))},[o,v]);let w=e=>{localStorage.setItem(`weatherUser`,JSON.stringify(e)),t(e),x(!1)},T=e=>{localStorage.setItem(`weatherUser`,JSON.stringify(e)),t(e)},E=()=>{l(!0)},ee=()=>{l(!1)},D=e=>{localStorage.setItem(`weatherAvatar`,e),r(e)},te=()=>{localStorage.removeItem(`weatherUser`),localStorage.removeItem(`weatherAvatar`),t(null),r(null),C(!1)},ne=()=>{x(!0)},re=()=>{x(!1)},O=()=>{e?C(!0):x(!0)},k=()=>{C(!1)},A=e=>{a(t=>t.some(t=>t.id===e.id)?t:[...t,e])},j=()=>{p(e=>{let t=!e;return localStorage.setItem(`theme`,t?`dark`:`light`),t})},M=()=>{_(!0)},N=()=>{_(!1)},P=e=>{h(e),localStorage.setItem(`accentColor`,e)},F=e=>{a(t=>t.filter(t=>t.id!==e)),s(t=>t.filter(t=>t.id!==e))},I=e=>{s(t=>{if(t.some(t=>t.id===e)){let n=t.filter(t=>t.id!==e);return localStorage.setItem(`weatherFavorites`,JSON.stringify(n)),n}let n=i.find(t=>t.id===e);if(!n)return t;let r=[...t,n];return localStorage.setItem(`weatherFavorites`,JSON.stringify(r)),r})},ie=async e=>{try{let t=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e.latitude}&lon=${e.longitude}&appid=b5ad39bd417cd476cc1c17d9b2b53496&units=metric`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json(),r={...e,temperature:n.main.temp,icon:n.weather[0].icon,description:n.weather[0].description,timezone:n.timezone};a(t=>t.map(t=>t.id===e.id?r:t)),s(t=>t.map(t=>t.id===e.id?r:t))}catch(e){console.error(`Помилка оновлення погоди:`,e)}},ae={...f?cT:sT,button:m,accent:m};return(0,J.jsxs)(Sn,{theme:ae,children:[(0,J.jsx)(aT,{}),(0,J.jsxs)(oT,{children:[(0,J.jsx)(Wr,{user:e,avatar:n,onSignUp:ne,onProfile:O,onGame:E,darkMode:f,onToggle:j}),(0,J.jsx)(fi,{onCityAdd:A}),(0,J.jsx)(cm,{cities:i,favorites:o,onRefresh:ie,onFavorite:I,onDelete:F,darkMode:f,userColor:m}),(0,J.jsx)(SC,{cities:i,darkMode:f,accentColor:m}),(0,J.jsx)(wm,{darkMode:f,accentColor:m}),(0,J.jsx)(zm,{darkMode:f,accentColor:m}),(0,J.jsx)(eh,{darkMode:f,accentColor:m}),b&&(0,J.jsx)($x,{darkMode:f,onClose:re,onSubmit:w}),S&&e&&(0,J.jsx)(CS,{user:e,avatar:n,onClose:k,onUserUpdate:T,onAvatarChange:D,onLogout:te,darkMode:f,onOpenColor:M,accentColor:m}),g&&(0,J.jsx)(LC,{currentColor:m,onColorChange:P,onClose:N}),c&&(0,J.jsx)(iT,{onClose:ee}),(0,J.jsx)(BC,{})]})]})}(0,Re.createRoot)(document.getElementById(`root`)).render((0,J.jsx)(B.StrictMode,{children:(0,J.jsx)(lT,{})}));