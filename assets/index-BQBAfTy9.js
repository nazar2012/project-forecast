var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function O(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function k(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,k(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+re(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),k(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+re(a,u),c+=k(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+re(a,u++),c+=k(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return k(O(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function A(e,t,n){if(e==null)return e;var r=[],i=0;return k(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function j(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var M=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},N={map:A,forEach:function(e,t,n){A(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return A(e,function(){t++}),t},toArray:function(e){return A(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=N,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:j}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,M)}catch(e){M(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&re(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&re(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(ee)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=ee,D=function(){ne.postMessage(null)}}else D=function(){_(ee,0)};function re(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,re(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),re=Symbol.iterator;function O(e){return typeof e!=`object`||!e?null:(e=re&&e[re]||e[`@@iterator`],typeof e==`function`?e:null)}var k=Symbol.for(`react.client.reference`);function A(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===k?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?A(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return A(e(t))}catch{}}return null}var j=Array.isArray,M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},P=[],F=-1;function ae(e){return{current:e}}function oe(e){0>F||(e.current=P[F],P[F]=null,F--)}function I(e,t){F++,P[F]=e.current,e.current=t}var se=ae(null),ce=ae(null),R=ae(null),le=ae(null);function ue(e,t){switch(I(R,t),I(ce,e),I(se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}oe(se),I(se,e)}function de(){oe(se),oe(ce),oe(R)}function fe(e){e.memoizedState!==null&&I(le,e);var t=se.current,n=Ud(t,e.type);t!==n&&(I(ce,e),I(se,n))}function pe(e){ce.current===e&&(oe(se),oe(ce)),le.current===e&&(oe(le),$f._currentValue=ie)}var me,he;function ge(e){if(me===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);me=t&&t[1]||``,he=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+me+e+he}var _e=!1;function ve(e,t){if(!e||_e)return``;_e=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{_e=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ge(n):``}function ye(e,t){switch(e.tag){case 26:case 27:case 5:return ge(e.type);case 16:return ge(`Lazy`);case 13:return e.child!==t&&t!==null?ge(`Suspense Fallback`):ge(`Suspense`);case 19:return ge(`SuspenseList`);case 0:case 15:return ve(e.type,!1);case 11:return ve(e.type.render,!1);case 1:return ve(e.type,!0);case 31:return ge(`Activity`);default:return``}}function be(e){try{var t=``,n=null;do t+=ye(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var xe=Object.prototype.hasOwnProperty,Se=t.unstable_scheduleCallback,Ce=t.unstable_cancelCallback,we=t.unstable_shouldYield,Te=t.unstable_requestPaint,Ee=t.unstable_now,De=t.unstable_getCurrentPriorityLevel,Oe=t.unstable_ImmediatePriority,ke=t.unstable_UserBlockingPriority,Ae=t.unstable_NormalPriority,je=t.unstable_LowPriority,Me=t.unstable_IdlePriority,Ne=t.log,Pe=t.unstable_setDisableYieldValue,Fe=null,Ie=null;function Le(e){if(typeof Ne==`function`&&Pe(e),Ie&&typeof Ie.setStrictMode==`function`)try{Ie.setStrictMode(Fe,e)}catch{}}var Re=Math.clz32?Math.clz32:Be,ze=Math.log,z=Math.LN2;function Be(e){return e>>>=0,e===0?32:31-(ze(e)/z|0)|0}var Ve=256,He=262144,Ue=4194304;function We(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ge(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=We(n))):i=We(o):i=We(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=We(n))):i=We(o)):i=We(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ke(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function qe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Je(){var e=Ue;return Ue<<=1,!(Ue&62914560)&&(Ue=4194304),e}function Ye(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function B(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xe(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Re(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Ze(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Ze(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Re(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Qe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function $e(e,t){var n=t&-t;return n=n&42?1:et(n),(n&(e.suspendedLanes|t))===0?n:0}function et(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function nt(){var e=N.p;return e===0?(e=window.event,e===void 0?32:hp(e.type)):e}function rt(e,t){var n=N.p;try{return N.p=e,t()}finally{N.p=n}}var it=Math.random().toString(36).slice(2),at=`__reactFiber$`+it,ot=`__reactProps$`+it,st=`__reactContainer$`+it,ct=`__reactEvents$`+it,lt=`__reactListeners$`+it,ut=`__reactHandles$`+it,dt=`__reactResources$`+it,ft=`__reactMarker$`+it;function pt(e){delete e[at],delete e[ot],delete e[ct],delete e[lt],delete e[ut]}function mt(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ff(e);e!==null;){if(n=e[at])return n;e=ff(e)}return t}e=n,n=e.parentNode}return null}function ht(e){if(e=e[at]||e[st]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function gt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function _t(e){var t=e[dt];return t||=e[dt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function vt(e){e[ft]=!0}var yt=new Set,bt={};function V(e,t){xt(e,t),xt(e+`Capture`,t)}function xt(e,t){for(bt[e]=t,e=0;e<t.length;e++)yt.add(t[e])}var St=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ct={},wt={};function Tt(e){return xe.call(wt,e)?!0:xe.call(Ct,e)?!1:St.test(e)?wt[e]=!0:(Ct[e]=!0,!1)}function H(e,t,n){if(Tt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Et(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Dt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Ot(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function kt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function At(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jt(e){if(!e._valueTracker){var t=kt(e)?`checked`:`value`;e._valueTracker=At(e,t,``+e[t])}}function Mt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=kt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Nt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Pt=/[\n"\\]/g;function Ft(e){return e.replace(Pt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function It(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ot(t)):e.value!==``+Ot(t)&&(e.value=``+Ot(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Rt(e,o,Ot(n)):Rt(e,o,Ot(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ot(s):e.removeAttribute(`name`)}function Lt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){jt(e);return}n=n==null?``:``+Ot(n),t=t==null?n:``+Ot(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),jt(e)}function Rt(e,t,n){t===`number`&&Nt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ot(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bt(e,t,n){if(t!=null&&(t=``+Ot(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ot(n)}function Vt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(j(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ot(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),jt(e)}function Ht(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ut=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Wt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Ut.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Gt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Wt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Wt(e,o,t[o])}function Kt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var qt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),U=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jt(e){return U.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function W(){}var Yt=null;function Xt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zt=null,Qt=null;function $t(e){var t=ht(e);if(t&&(e=t.stateNode)){var n=e[ot]||null;a:switch(e=t.stateNode,t.type){case`input`:if(It(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Ft(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ot]||null;if(!a)throw Error(i(90));It(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Mt(r)}break a;case`textarea`:Bt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&zt(e,!!n.multiple,t,!1)}}}var en=!1;function tn(e,t,n){if(en)return e(t,n);en=!0;try{return e(t)}finally{if(en=!1,(Zt!==null||Qt!==null)&&(yu(),Zt&&(t=Zt,e=Qt,Qt=Zt=null,$t(t),e)))for(t=0;t<e.length;t++)$t(e[t])}}function nn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ot]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var rn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),an=!1;if(rn)try{var on={};Object.defineProperty(on,"passive",{get:function(){an=!0}}),window.addEventListener(`test`,on,on),window.removeEventListener(`test`,on,on)}catch{an=!1}var sn=null,cn=null,ln=null;function un(){if(ln)return ln;var e,t=cn,n=t.length,r,i=`value`in sn?sn.value:sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return ln=i.slice(e,1<r?1-r:void 0)}function dn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function G(){return!0}function fn(){return!1}function pn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?G:fn,this.isPropagationStopped=fn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=G)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=G)},persist:function(){},isPersistent:G}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hn=pn(mn),gn=h({},mn,{view:0,detail:0}),_n=pn(gn),vn,yn,bn,xn=h({},gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==bn&&(bn&&e.type===`mousemove`?(vn=e.screenX-bn.screenX,yn=e.screenY-bn.screenY):yn=vn=0,bn=e),vn)},movementY:function(e){return`movementY`in e?e.movementY:yn}}),Sn=pn(xn),Cn=pn(h({},xn,{dataTransfer:0})),wn=pn(h({},gn,{relatedTarget:0})),Tn=pn(h({},mn,{animationName:0,elapsedTime:0,pseudoElement:0})),En=pn(h({},mn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Dn=pn(h({},mn,{data:0})),On={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},kn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},An={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=An[e])?!!t[e]:!1}function Mn(){return jn}var Nn=pn(h({},gn,{key:function(e){if(e.key){var t=On[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=dn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?kn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mn,charCode:function(e){return e.type===`keypress`?dn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?dn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),K=pn(h({},xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=pn(h({},gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mn})),Fn=pn(h({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0})),In=pn(h({},xn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Ln=pn(h({},mn,{newState:0,oldState:0})),Rn=[9,13,27,32],zn=rn&&`CompositionEvent`in window,Bn=null;rn&&`documentMode`in document&&(Bn=document.documentMode);var Vn=rn&&`TextEvent`in window&&!Bn,Hn=rn&&(!zn||Bn&&8<Bn&&11>=Bn),Un=` `,Wn=!1;function Gn(e,t){switch(e){case`keyup`:return Rn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Kn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var qn=!1;function Jn(e,t){switch(e){case`compositionend`:return Kn(t);case`keypress`:return t.which===32?(Wn=!0,Un):null;case`textInput`:return e=t.data,e===Un&&Wn?null:e;default:return null}}function Yn(e,t){if(qn)return e===`compositionend`||!zn&&Gn(e,t)?(e=un(),ln=cn=sn=null,qn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Hn&&t.locale!==`ko`?null:t.data;default:return null}}var Xn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Xn[e.type]:t===`textarea`}function Qn(e,t,n,r){Zt?Qt?Qt.push(r):Qt=[r]:Zt=r,t=Ed(t,`onChange`),0<t.length&&(n=new hn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var $n=null,er=null;function tr(e){yd(e,0)}function nr(e){if(Mt(gt(e)))return e}function rr(e,t){if(e===`change`)return t}var ir=!1;if(rn){var ar;if(rn){var or=`oninput`in document;if(!or){var sr=document.createElement(`div`);sr.setAttribute(`oninput`,`return;`),or=typeof sr.oninput==`function`}ar=or}else ar=!1;ir=ar&&(!document.documentMode||9<document.documentMode)}function cr(){$n&&($n.detachEvent(`onpropertychange`,lr),er=$n=null)}function lr(e){if(e.propertyName===`value`&&nr(er)){var t=[];Qn(t,er,e,Xt(e)),tn(tr,t)}}function ur(e,t,n){e===`focusin`?(cr(),$n=t,er=n,$n.attachEvent(`onpropertychange`,lr)):e===`focusout`&&cr()}function dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return nr(er)}function fr(e,t){if(e===`click`)return nr(t)}function pr(e,t){if(e===`input`||e===`change`)return nr(t)}function mr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var hr=typeof Object.is==`function`?Object.is:mr;function gr(e,t){if(hr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xe.call(t,i)||!hr(e[i],t[i]))return!1}return!0}function _r(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vr(e,t){var n=_r(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=_r(n)}}function yr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function br(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Nt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Nt(e.document)}return t}function xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var q=rn&&`documentMode`in document&&11>=document.documentMode,Sr=null,Cr=null,wr=null,Tr=!1;function Er(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tr||Sr==null||Sr!==Nt(r)||(r=Sr,`selectionStart`in r&&xr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&gr(wr,r)||(wr=r,r=Ed(Cr,`onSelect`),0<r.length&&(t=new hn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Sr)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Or={animationend:Dr(`Animation`,`AnimationEnd`),animationiteration:Dr(`Animation`,`AnimationIteration`),animationstart:Dr(`Animation`,`AnimationStart`),transitionrun:Dr(`Transition`,`TransitionRun`),transitionstart:Dr(`Transition`,`TransitionStart`),transitioncancel:Dr(`Transition`,`TransitionCancel`),transitionend:Dr(`Transition`,`TransitionEnd`)},kr={},Ar={};rn&&(Ar=document.createElement(`div`).style,`AnimationEvent`in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),`TransitionEvent`in window||delete Or.transitionend.transition);function jr(e){if(kr[e])return kr[e];if(!Or[e])return e;var t=Or[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ar)return kr[e]=t[n];return e}var Mr=jr(`animationend`),Nr=jr(`animationiteration`),Pr=jr(`animationstart`),Fr=jr(`transitionrun`),Ir=jr(`transitionstart`),Lr=jr(`transitioncancel`),Rr=jr(`transitionend`),zr=new Map,Br=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Br.push(`scrollEnd`);function Vr(e,t){zr.set(e,t),V(t,[e])}var Hr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ur=[],Wr=0,Gr=0;function Kr(){for(var e=Wr,t=Gr=Wr=0;t<e;){var n=Ur[t];Ur[t++]=null;var r=Ur[t];Ur[t++]=null;var i=Ur[t];Ur[t++]=null;var a=Ur[t];if(Ur[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Xr(n,i,a)}}function qr(e,t,n,r){Ur[Wr++]=e,Ur[Wr++]=t,Ur[Wr++]=n,Ur[Wr++]=r,Gr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Jr(e,t,n,r){return qr(e,t,n,r),Zr(e)}function Yr(e,t){return qr(e,null,null,t),Zr(e)}function Xr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Re(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Zr(e){if(50<uu)throw uu=0,du=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Qr={};function $r(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,t,n,r){return new $r(e,t,n,r)}function ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ni(e,t){var n=e.alternate;return n===null?(n=ei(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ri(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ii(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ti(e)&&(s=1);else if(typeof e==`string`)s=Wf(e,n,se.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=ei(31,n,t,a),e.elementType=te,e.lanes=o,e;case y:return ai(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ei(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ei(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=ei(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ei(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ai(e,t,n,r){return e=ei(7,e,r,t),e.lanes=n,e}function oi(e,t,n){return e=ei(6,e,null,t),e.lanes=n,e}function si(e){var t=ei(18,null,null,0);return t.stateNode=e,t}function ci(e,t,n){return t=ei(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var li=new WeakMap;function ui(e,t){if(typeof e==`object`&&e){var n=li.get(e);return n===void 0?(t={value:e,source:t,stack:be(t)},li.set(e,t),t):n}return{value:e,source:t,stack:be(t)}}var di=[],fi=0,pi=null,mi=0,hi=[],gi=0,_i=null,vi=1,yi=``;function bi(e,t){di[fi++]=mi,di[fi++]=pi,pi=e,mi=t}function xi(e,t,n){hi[gi++]=vi,hi[gi++]=yi,hi[gi++]=_i,_i=e;var r=vi;e=yi;var i=32-Re(r)-1;r&=~(1<<i),n+=1;var a=32-Re(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vi=1<<32-Re(t)+i|n<<i|r,yi=a+e}else vi=1<<a|n<<i|r,yi=e}function Si(e){e.return!==null&&(bi(e,1),xi(e,1,0))}function Ci(e){for(;e===pi;)pi=di[--fi],di[fi]=null,mi=di[--fi],di[fi]=null;for(;e===_i;)_i=hi[--gi],hi[gi]=null,yi=hi[--gi],hi[gi]=null,vi=hi[--gi],hi[gi]=null}function wi(e,t){hi[gi++]=vi,hi[gi++]=yi,hi[gi++]=_i,vi=t.id,yi=t.overflow,_i=e}var Ti=null,Ei=null,J=!1,Di=null,Oi=!1,ki=Error(i(519));function Ai(e){throw Ii(ui(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ki}function ji(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[at]=e,t[ot]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)$(_d[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),Lt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),Vt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=W),t=!0):t=!1,t||Ai(e,!0)}function Mi(e){for(Ti=e.return;Ti;)switch(Ti.tag){case 5:case 31:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:Ti=Ti.return}}function Ni(e){if(e!==Ti)return!1;if(!J)return Mi(e),J=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Wd(e.type,e.memoizedProps)),n=!n),n&&Ei&&Ai(e),Mi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ei=df(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ei=df(e)}else t===27?(t=Ei,Qd(e.type)?(e=uf,uf=null,Ei=e):Ei=t):Ei=Ti?lf(e.stateNode.nextSibling):null;return!0}function Pi(){Ei=Ti=null,J=!1}function Fi(){var e=Di;return e!==null&&(Xl===null?Xl=e:Xl.push.apply(Xl,e),Di=null),e}function Ii(e){Di===null?Di=[e]:Di.push(e)}var Li=ae(null),Ri=null,zi=null;function Bi(e,t,n){I(Li,t._currentValue),t._currentValue=n}function Vi(e){e._currentValue=Li.current,oe(Li)}function Hi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ui(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Hi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Hi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Wi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;hr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===le.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[$f]:e.push($f))}a=a.return}e!==null&&Ui(t,e,n,r),t.flags|=262144}function Gi(e){for(e=e.firstContext;e!==null;){if(!hr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ki(e){Ri=e,zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function qi(e){return Yi(Ri,e)}function Ji(e,t){return Ri===null&&Ki(e),Yi(e,t)}function Yi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},zi===null){if(e===null)throw Error(i(308));zi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else zi=zi.next=t;return n}var Xi=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Zi=t.unstable_scheduleCallback,Qi=t.unstable_NormalPriority,$i={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ea(){return{controller:new Xi,data:new Map,refCount:0}}function Y(e){e.refCount--,e.refCount===0&&Zi(Qi,function(){e.controller.abort()})}var ta=null,na=0,ra=0,ia=null;function aa(e,t){if(ta===null){var n=ta=[];na=0,ra=dd(),ia={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return na++,t.then(oa,oa),t}function oa(){if(--na===0&&ta!==null){ia!==null&&(ia.status=`fulfilled`);var e=ta;ta=null,ra=0,ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ca=M.S;M.S=function(e,t){$l=Ee(),typeof t==`object`&&t&&typeof t.then==`function`&&aa(e,t),ca!==null&&ca(e,t)};var la=ae(null);function ua(){var e=la.current;return e===null?Il.pooledCache:e}function da(e,t){t===null?I(la,la.current):I(la,t.pool)}function fa(){var e=ua();return e===null?null:{parent:$i._currentValue,pool:e}}var pa=Error(i(460)),ma=Error(i(474)),ha=Error(i(542)),ga={then:function(){}};function _a(e){return e=e.status,e===`fulfilled`||e===`rejected`}function va(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(W,W),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Sa(e),e;default:if(typeof t.status==`string`)t.then(W,W);else{if(e=Il,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Sa(e),e}throw ba=t,pa}}function ya(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ba=e,pa):e}}var ba=null;function xa(){if(ba===null)throw Error(i(459));var e=ba;return ba=null,e}function Sa(e){if(e===pa||e===ha)throw Error(i(483))}var Ca=null,wa=0;function Ta(e){var t=wa;return wa+=1,Ca===null&&(Ca=[]),va(Ca,e,t)}function Ea(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Da(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Oa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ni(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=oi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&ya(i)===t.type)?(t=a(t,n.props),Ea(t,n),t.return=e,t):(t=ii(n.type,n.key,n.props,null,e.mode,r),Ea(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ci(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ai(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=oi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ii(t.type,t.key,t.props,null,e.mode,n),Ea(n,t),n.return=e,n;case v:return t=ci(t,e.mode,n),t.return=e,t;case D:return t=ya(t),f(e,t,n)}if(j(t)||O(t))return t=ai(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ta(t),n);if(t.$$typeof===C)return f(e,Ji(e,t),n);Da(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=ya(n),p(e,t,n,r)}if(j(n)||O(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ta(n),r);if(n.$$typeof===C)return p(e,t,Ji(e,n),r);Da(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=ya(r),m(e,t,n,r,i)}if(j(r)||O(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ta(r),i);if(r.$$typeof===C)return m(e,t,n,Ji(t,r),i);Da(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),J&&bi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return J&&bi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),J&&bi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),J&&bi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return J&&bi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),J&&bi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&ya(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ea(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=ai(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ii(o.type,o.key,o.props,null,e.mode,c),Ea(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=ci(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=ya(o),b(e,r,o,c)}if(j(o))return h(e,r,o,c);if(O(o)){if(l=O(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ta(o),c);if(o.$$typeof===C)return b(e,r,Ji(e,o),c);Da(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=oi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{wa=0;var i=b(e,t,n,r);return Ca=null,i}catch(t){if(t===pa||t===ha)throw t;var a=ei(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var ka=Oa(!0),Aa=Oa(!1),ja=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Na(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Fl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Zr(e),Xr(e,null,n),t}return qr(e,r,t,n),Zr(e)}function Ia(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qe(e,n)}}function La(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ra=!1;function za(){if(Ra){var e=ia;if(e!==null)throw e}}function Ba(e,t,n,r){Ra=!1;var i=e.updateQueue;ja=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Q&f)===f:(r&f)===f){f!==0&&f===ra&&(Ra=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:ja=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Wl|=o,e.lanes=o,e.memoizedState=d}}function Va(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ha(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Va(n[e],t)}var Ua=ae(null),Wa=ae(0);function Ga(e,t){e=Hl,I(Wa,e),I(Ua,t),Hl=e|t.baseLanes}function Ka(){I(Wa,Hl),I(Ua,Ua.current)}function qa(){Hl=Wa.current,oe(Ua),oe(Wa)}var Ja=ae(null),Ya=null;function Xa(e){var t=e.alternate;I(to,to.current&1),I(Ja,e),Ya===null&&(t===null||Ua.current!==null||t.memoizedState!==null)&&(Ya=e)}function Za(e){I(to,to.current),I(Ja,e),Ya===null&&(Ya=e)}function Qa(e){e.tag===22?(I(to,to.current),I(Ja,e),Ya===null&&(Ya=e)):$a(e)}function $a(){I(to,to.current),I(Ja,Ja.current)}function eo(e){oe(Ja),Ya===e&&(Ya=null),oe(to)}var to=ae(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ro=0,X=null,io=null,ao=null,oo=!1,so=!1,co=!1,lo=0,uo=0,fo=null,po=0;function mo(){throw Error(i(321))}function ho(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!hr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,i,a){return ro=a,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Ns:Ps,co=!1,a=n(r,i),co=!1,so&&(a=vo(t,n,r,i)),_o(e),a}function _o(e){M.H=Ms;var t=io!==null&&io.next!==null;if(ro=0,ao=io=X=null,oo=!1,uo=0,fo=null,t)throw Error(i(300));e===null||Zs||(e=e.dependencies,e!==null&&Gi(e)&&(Zs=!0))}function vo(e,t,n,r){X=e;var a=0;do{if(so&&(fo=null),uo=0,so=!1,25<=a)throw Error(i(301));if(a+=1,ao=io=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}M.H=Fs,o=t(n,r)}while(so);return o}function yo(){var e=M.H,t=e.useState()[0];return t=typeof t.then==`function`?Eo(t):t,e=e.useState()[0],(io===null?null:io.memoizedState)!==e&&(X.flags|=1024),t}function bo(){var e=lo!==0;return lo=0,e}function xo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function So(e){if(oo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}oo=!1}ro=0,ao=io=X=null,so=!1,uo=lo=0,fo=null}function Co(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ao===null?X.memoizedState=ao=e:ao=ao.next=e,ao}function wo(){if(io===null){var e=X.alternate;e=e===null?null:e.memoizedState}else e=io.next;var t=ao===null?X.memoizedState:ao.next;if(t!==null)ao=t,io=e;else{if(e===null)throw X.alternate===null?Error(i(467)):Error(i(310));io=e,e={memoizedState:io.memoizedState,baseState:io.baseState,baseQueue:io.baseQueue,queue:io.queue,next:null},ao===null?X.memoizedState=ao=e:ao=ao.next=e}return ao}function To(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var t=uo;return uo+=1,fo===null&&(fo=[]),e=va(fo,e,t),t=X,(ao===null?t.memoizedState:ao.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Ns:Ps),e}function Do(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Eo(e);if(e.$$typeof===C)return qi(e)}throw Error(i(438,String(e)))}function Oo(e){var t=null,n=X.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=X.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=To(),X.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function ko(e,t){return typeof t==`function`?t(e):t}function Ao(e){return jo(wo(),io,e)}function jo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ro&f)===f:(Q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ra&&(d=!0);else if((ro&p)===p){u=u.next,p===ra&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,X.lanes|=p,Wl|=p;f=u.action,co&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,X.lanes|=f,Wl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!hr(o,e.memoizedState)&&(Zs=!0,d&&(n=ia,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Mo(e){var t=wo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);hr(o,t.memoizedState)||(Zs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function No(e,t,n){var r=X,a=wo(),o=J;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!hr((io||a).memoizedState,n);if(s&&(a.memoizedState=n,Zs=!0),a=a.queue,is(Io.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ao!==null&&ao.memoizedState.tag&1){if(r.flags|=2048,$o(9,{destroy:void 0},Fo.bind(null,r,a,n,t),null),Il===null)throw Error(i(349));o||ro&127||Po(r,t,n)}return n}function Po(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t=To(),X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fo(e,t,n,r){t.value=n,t.getSnapshot=r,Lo(t)&&Ro(e)}function Io(e,t,n){return n(function(){Lo(t)&&Ro(e)})}function Lo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!hr(e,n)}catch{return!0}}function Ro(e){var t=Yr(e,2);t!==null&&mu(t,e,2)}function zo(e){var t=Co();if(typeof e==`function`){var n=e;if(e=n(),co){Le(!0);try{n()}finally{Le(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:e},t}function Bo(e,t,n,r){return e.baseState=n,jo(e,io,typeof r==`function`?r:ko)}function Vo(e,t,n,r,a){if(ks(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};M.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ho(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ho(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=M.T,o={};M.T=o;try{var s=n(i,r),c=M.S;c!==null&&c(o,s),Uo(e,t,s)}catch(n){Go(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),M.T=a}}else try{a=n(i,r),Uo(e,t,a)}catch(n){Go(e,t,n)}}function Uo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Wo(e,t,n)},function(n){return Go(e,t,n)}):Wo(e,t,n)}function Wo(e,t,n){t.status=`fulfilled`,t.value=n,Ko(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ho(e,n)))}function Go(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Ko(t),t=t.next;while(t!==r)}e.action=null}function Ko(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function qo(e,t){return t}function Jo(e,t){if(J){var n=Il.formState;if(n!==null){a:{var r=X;if(J){if(Ei){b:{for(var i=Ei,a=Oi;i.nodeType!==8;){if(!a){i=null;break b}if(i=lf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ei=lf(i.nextSibling),r=i.data===`F!`;break a}}Ai(r)}r=!1}r&&(t=n[0])}}return n=Co(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:t},n.queue=r,n=Es.bind(null,X,r),r.dispatch=n,r=zo(!1),a=Os.bind(null,X,!1,r.queue),r=Co(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Vo.bind(null,X,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Yo(e){return Xo(wo(),io,e)}function Xo(e,t,n){if(t=jo(e,t,qo)[0],e=Ao(ko)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Eo(t)}catch(e){throw e===pa?ha:e}else r=t;t=wo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(X.flags|=2048,$o(9,{destroy:void 0},Zo.bind(null,i,n),null)),[r,a,e]}function Zo(e,t){e.action=t}function Qo(e){var t=wo(),n=io;if(n!==null)return Xo(t,n,e);wo(),t=t.memoizedState,n=wo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function $o(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=X.updateQueue,t===null&&(t=To(),X.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function es(){return wo().memoizedState}function ts(e,t,n,r){var i=Co();X.flags|=e,i.memoizedState=$o(1|t,{destroy:void 0},n,r===void 0?null:r)}function ns(e,t,n,r){var i=wo();r=r===void 0?null:r;var a=i.memoizedState.inst;io!==null&&r!==null&&ho(r,io.memoizedState.deps)?i.memoizedState=$o(t,a,n,r):(X.flags|=e,i.memoizedState=$o(1|t,a,n,r))}function rs(e,t){ts(8390656,8,e,t)}function is(e,t){ns(2048,8,e,t)}function as(e){X.flags|=4;var t=X.updateQueue;if(t===null)t=To(),X.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function os(e){var t=wo().memoizedState;return as({ref:t,nextImpl:e}),function(){if(Fl&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ss(e,t){return ns(4,2,e,t)}function cs(e,t){return ns(4,4,e,t)}function ls(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function us(e,t,n){n=n==null?null:n.concat([e]),ns(4,4,ls.bind(null,t,e),n)}function ds(){}function fs(e,t){var n=wo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&ho(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ps(e,t){var n=wo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&ho(t,r[1]))return r[0];if(r=e(),co){Le(!0);try{e()}finally{Le(!1)}}return n.memoizedState=[r,t],r}function ms(e,t,n){return n===void 0||ro&1073741824&&!(Q&261930)?e.memoizedState=t:(e.memoizedState=n,e=pu(),X.lanes|=e,Wl|=e,n)}function hs(e,t,n,r){return hr(n,t)?n:Ua.current===null?!(ro&42)||ro&1073741824&&!(Q&261930)?(Zs=!0,e.memoizedState=n):(e=pu(),X.lanes|=e,Wl|=e,t):(e=ms(e,n,r),hr(e,t)||(Zs=!0),e)}function gs(e,t,n,r,i){var a=N.p;N.p=a!==0&&8>a?a:8;var o=M.T,s={};M.T=s,Os(e,!1,t,n);try{var c=i(),l=M.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ds(e,t,sa(c,r),fu(e)):Ds(e,t,r,fu(e))}catch(n){Ds(e,t,{then:function(){},status:`rejected`,reason:n},fu())}finally{N.p=a,o!==null&&s.types!==null&&(o.types=s.types),M.T=o}}function _s(){}function vs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ys(e).queue;gs(e,a,t,ie,n===null?_s:function(){return bs(e),n(r)})}function ys(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:ie},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bs(e){var t=ys(e);t.next===null&&(t=e.alternate.memoizedState),Ds(e,t.next.queue,{},fu())}function xs(){return qi($f)}function Ss(){return wo().memoizedState}function Cs(){return wo().memoizedState}function ws(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=fu();e=Pa(n);var r=Fa(t,e,n);r!==null&&(mu(r,t,n),Ia(r,t,n)),t={cache:ea()},e.payload=t;return}t=t.return}}function Ts(e,t,n){var r=fu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ks(e)?As(t,n):(n=Jr(e,t,n,r),n!==null&&(mu(n,e,r),js(n,t,r)))}function Es(e,t,n){Ds(e,t,n,fu())}function Ds(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ks(e))As(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,hr(s,o))return qr(e,t,i,0),Il===null&&Kr(),!1}catch{}if(n=Jr(e,t,i,r),n!==null)return mu(n,e,r),js(n,t,r),!0}return!1}function Os(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ks(e)){if(t)throw Error(i(479))}else t=Jr(e,n,r,2),t!==null&&mu(t,e,2)}function ks(e){var t=e.alternate;return e===X||t!==null&&t===X}function As(e,t){so=oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function js(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qe(e,n)}}var Ms={readContext:qi,use:Do,useCallback:mo,useContext:mo,useEffect:mo,useImperativeHandle:mo,useLayoutEffect:mo,useInsertionEffect:mo,useMemo:mo,useReducer:mo,useRef:mo,useState:mo,useDebugValue:mo,useDeferredValue:mo,useTransition:mo,useSyncExternalStore:mo,useId:mo,useHostTransitionStatus:mo,useFormState:mo,useActionState:mo,useOptimistic:mo,useMemoCache:mo,useCacheRefresh:mo};Ms.useEffectEvent=mo;var Ns={readContext:qi,use:Do,useCallback:function(e,t){return Co().memoizedState=[e,t===void 0?null:t],e},useContext:qi,useEffect:rs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ts(4194308,4,ls.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ts(4194308,4,e,t)},useInsertionEffect:function(e,t){ts(4,2,e,t)},useMemo:function(e,t){var n=Co();t=t===void 0?null:t;var r=e();if(co){Le(!0);try{e()}finally{Le(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Co();if(n!==void 0){var i=n(t);if(co){Le(!0);try{n(t)}finally{Le(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ts.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=Co();return e={current:e},t.memoizedState=e},useState:function(e){e=zo(e);var t=e.queue,n=Es.bind(null,X,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ds,useDeferredValue:function(e,t){return ms(Co(),e,t)},useTransition:function(){var e=zo(!1);return e=gs.bind(null,X,e.queue,!0,!1),Co().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=X,a=Co();if(J){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Il===null)throw Error(i(349));Q&127||Po(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,rs(Io.bind(null,r,o,e),[e]),r.flags|=2048,$o(9,{destroy:void 0},Fo.bind(null,r,o,n,t),null),n},useId:function(){var e=Co(),t=Il.identifierPrefix;if(J){var n=yi,r=vi;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=lo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=po++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:xs,useFormState:Jo,useActionState:Jo,useOptimistic:function(e){var t=Co();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Os.bind(null,X,!0,n),n.dispatch=t,[e,t]},useMemoCache:Oo,useCacheRefresh:function(){return Co().memoizedState=ws.bind(null,X)},useEffectEvent:function(e){var t=Co(),n={impl:e};return t.memoizedState=n,function(){if(Fl&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ps={readContext:qi,use:Do,useCallback:fs,useContext:qi,useEffect:is,useImperativeHandle:us,useInsertionEffect:ss,useLayoutEffect:cs,useMemo:ps,useReducer:Ao,useRef:es,useState:function(){return Ao(ko)},useDebugValue:ds,useDeferredValue:function(e,t){return hs(wo(),io.memoizedState,e,t)},useTransition:function(){var e=Ao(ko)[0],t=wo().memoizedState;return[typeof e==`boolean`?e:Eo(e),t]},useSyncExternalStore:No,useId:Ss,useHostTransitionStatus:xs,useFormState:Yo,useActionState:Yo,useOptimistic:function(e,t){return Bo(wo(),io,e,t)},useMemoCache:Oo,useCacheRefresh:Cs};Ps.useEffectEvent=os;var Fs={readContext:qi,use:Do,useCallback:fs,useContext:qi,useEffect:is,useImperativeHandle:us,useInsertionEffect:ss,useLayoutEffect:cs,useMemo:ps,useReducer:Mo,useRef:es,useState:function(){return Mo(ko)},useDebugValue:ds,useDeferredValue:function(e,t){var n=wo();return io===null?ms(n,e,t):hs(n,io.memoizedState,e,t)},useTransition:function(){var e=Mo(ko)[0],t=wo().memoizedState;return[typeof e==`boolean`?e:Eo(e),t]},useSyncExternalStore:No,useId:Ss,useHostTransitionStatus:xs,useFormState:Qo,useActionState:Qo,useOptimistic:function(e,t){var n=wo();return io===null?(n.baseState=e,[e,n.queue.dispatch]):Bo(n,io,e,t)},useMemoCache:Oo,useCacheRefresh:Cs};Fs.useEffectEvent=os;function Is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ls={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fu(),i=Pa(r);i.payload=t,n!=null&&(i.callback=n),t=Fa(e,i,r),t!==null&&(mu(t,e,r),Ia(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fu(),i=Pa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Fa(e,i,r),t!==null&&(mu(t,e,r),Ia(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fu(),r=Pa(n);r.tag=2,t!=null&&(r.callback=t),t=Fa(e,r,n),t!==null&&(mu(t,e,n),Ia(t,e,n))}};function Rs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!gr(n,r)||!gr(i,a):!0}function zs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ls.enqueueReplaceState(t,t.state,null)}function Bs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Vs(e){Hr(e)}function Hs(e){console.error(e)}function Us(e){Hr(e)}function Ws(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Gs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ks(e,t,n){return n=Pa(n),n.tag=3,n.payload={element:null},n.callback=function(){Ws(e,t)},n}function qs(e){return e=Pa(e),e.tag=3,e}function Js(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Gs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Gs(t,n,r),typeof i!=`function`&&(nu===null?nu=new Set([this]):nu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Ys(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Wi(t,n,a,!0),n=Ja.current,n!==null){switch(n.tag){case 31:case 13:return Ya===null?Eu():n.alternate===null&&Ul===0&&(Ul=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ga?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ga?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Eu(),!1}if(J)return t=Ja.current,t===null?(r!==ki&&(t=Error(i(423),{cause:r}),Ii(ui(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=ui(r,n),a=Ks(e.stateNode,r,a),La(e,a),Ul!==4&&(Ul=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ki&&(e=Error(i(422),{cause:r}),Ii(ui(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=ui(o,n),Yl===null?Yl=[o]:Yl.push(o),Ul!==4&&(Ul=2),t===null)return!0;r=ui(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ks(n.stateNode,r,e),La(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(nu===null||!nu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=qs(a),Js(a,e,n,r),La(n,a),!1}n=n.return}while(n!==null);return!1}var Xs=Error(i(461)),Zs=!1;function Qs(e,t,n,r){t.child=e===null?Aa(t,null,n,r):ka(t,e.child,n,r)}function $s(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Ki(t),r=go(e,t,n,o,a,i),s=bo(),e!==null&&!Zs?(xo(e,t,i),Cc(e,t,i)):(J&&s&&Si(t),t.flags|=1,Qs(e,t,r,i),t.child)}function ec(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ti(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,tc(e,t,a,r,i)):(e=ii(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!wc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?gr:n,n(o,r)&&e.ref===t.ref)return Cc(e,t,i)}return t.flags|=1,e=ni(a,r),e.ref=t.ref,e.return=t,t.child=e}function tc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(gr(a,r)&&e.ref===t.ref){if(Zs=!1,t.pendingProps=r=a,wc(e,i))e.flags&131072&&(Zs=!0);else return t.lanes=e.lanes,Cc(e,t,i)}}return lc(e,t,n,r,i)}function nc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return ic(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&da(t,a===null?null:a.cachePool),a===null?Ka():Ga(t,a),Qa(t);else return r=t.lanes=536870912,ic(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&da(t,null),Ka(),$a(t)):(da(t,a.cachePool),Ga(t,a),$a(t),t.memoizedState=null);return Qs(e,t,i,n),t.child}function rc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ic(e,t,n,r,i){var a=ua();return a=a===null?null:{parent:$i._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&da(t,null),Ka(),Qa(t),e!==null&&Wi(e,t,r,!0),t.childLanes=i,null}function ac(e,t){return t=vc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function oc(e,t,n){return ka(t,e.child,null,n),e=ac(t,t.pendingProps),e.flags|=2,eo(t),t.memoizedState=null,e}function sc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(J){if(r.mode===`hidden`)return e=ac(t,r),t.lanes=536870912,rc(null,e);if(Za(t),(e=Ei)?(e=af(e,Oi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_i===null?null:{id:vi,overflow:yi},retryLane:536870912,hydrationErrors:null},n=si(e),n.return=t,t.child=n,Ti=t,Ei=null)):e=null,e===null)throw Ai(t);return t.lanes=536870912,null}return ac(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Za(t),a){if(t.flags&256)t.flags&=-257,t=oc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Zs||Wi(e,t,n,!1),a=(n&e.childLanes)!==0,Zs||a){if(r=Il,r!==null&&(s=$e(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Yr(e,s),mu(r,e,s),Xs;Eu(),t=oc(e,t,n)}else e=o.treeContext,Ei=lf(s.nextSibling),Ti=t,J=!0,Di=null,Oi=!1,e!==null&&wi(t,e),t=ac(t,r),t.flags|=4096;return t}return e=ni(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function cc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function lc(e,t,n,r,i){return Ki(t),n=go(e,t,n,r,void 0,i),r=bo(),e!==null&&!Zs?(xo(e,t,i),Cc(e,t,i)):(J&&r&&Si(t),t.flags|=1,Qs(e,t,n,i),t.child)}function uc(e,t,n,r,i,a){return Ki(t),t.updateQueue=null,n=vo(t,r,n,i),_o(e),r=bo(),e!==null&&!Zs?(xo(e,t,a),Cc(e,t,a)):(J&&r&&Si(t),t.flags|=1,Qs(e,t,n,a),t.child)}function dc(e,t,n,r,i){if(Ki(t),t.stateNode===null){var a=Qr,o=n.contextType;typeof o==`object`&&o&&(a=qi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ls,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ma(t),o=n.contextType,a.context=typeof o==`object`&&o?qi(o):Qr,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Is(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ls.enqueueReplaceState(a,a.state,null),Ba(t,r,a,i),za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Bs(n,s);a.props=c;var l=a.context,u=n.contextType;o=Qr,typeof u==`object`&&u&&(o=qi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&zs(t,a,r,o),ja=!1;var f=t.memoizedState;a.state=f,Ba(t,r,a,i),za(),l=t.memoizedState,s||f!==l||ja?(typeof d==`function`&&(Is(t,n,d,r),l=t.memoizedState),(c=ja||Rs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Na(e,t),o=t.memoizedProps,u=Bs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Qr,typeof l==`object`&&l&&(c=qi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&zs(t,a,r,c),ja=!1,f=t.memoizedState,a.state=f,Ba(t,r,a,i),za();var p=t.memoizedState;o!==d||f!==p||ja||e!==null&&e.dependencies!==null&&Gi(e.dependencies)?(typeof s==`function`&&(Is(t,n,s,r),p=t.memoizedState),(u=ja||Rs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Gi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,cc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=ka(t,e.child,null,i),t.child=ka(t,null,n,i)):Qs(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Cc(e,t,i),e}function fc(e,t,n,r){return Pi(),t.flags|=256,Qs(e,t,n,r),t.child}var pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mc(e){return{baseLanes:e,cachePool:fa()}}function hc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ql),e}function gc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(to.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(J){if(a?Xa(t):$a(t),(e=Ei)?(e=af(e,Oi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_i===null?null:{id:vi,overflow:yi},retryLane:536870912,hydrationErrors:null},n=si(e),n.return=t,t.child=n,Ti=t,Ei=null)):e=null,e===null)throw Ai(t);return sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?($a(t),a=t.mode,c=vc({mode:`hidden`,children:c},a),r=ai(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=mc(n),r.childLanes=hc(e,s,n),t.memoizedState=pc,rc(null,r)):(Xa(t),_c(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(Xa(t),t.flags&=-257,t=yc(e,t,n)):t.memoizedState===null?($a(t),c=r.fallback,a=t.mode,r=vc({mode:`visible`,children:r.children},a),c=ai(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,ka(t,e.child,null,n),r=t.child,r.memoizedState=mc(n),r.childLanes=hc(e,s,n),t.memoizedState=pc,t=rc(null,r)):($a(t),t.child=e.child,t.flags|=128,t=null);else if(Xa(t),sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ii({value:r,source:null,stack:null}),t=yc(e,t,n)}else if(Zs||Wi(e,t,n,!1),s=(n&e.childLanes)!==0,Zs||s){if(s=Il,s!==null&&(r=$e(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Yr(e,r),mu(s,e,r),Xs;of(c)||Eu(),t=yc(e,t,n)}else of(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ei=lf(c.nextSibling),Ti=t,J=!0,Di=null,Oi=!1,e!==null&&wi(t,e),t=_c(t,r.children),t.flags|=4096);return t}return a?($a(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ni(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=ai(c,a,n,null),c.flags|=2):c=ni(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,rc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=mc(n):(a=c.cachePool,a===null?a=fa():(l=$i._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=hc(e,s,n),t.memoizedState=pc,rc(e.child,r)):(Xa(t),n=e.child,e=n.sibling,n=ni(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function _c(e,t){return t=vc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function vc(e,t){return e=ei(22,e,null,t),e.lanes=0,e}function yc(e,t,n){return ka(t,e.child,null,n),e=_c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hi(e.return,t,n)}function xc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Sc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=to.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,I(to,o),Qs(e,t,r,n),r=J?mi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,n,t);else if(e.tag===19)bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&no(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&no(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xc(t,!0,n,null,a,r);break;case`together`:xc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Cc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Wi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ni(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ni(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Gi(e)))}function Tc(e,t,n){switch(t.tag){case 3:ue(t,t.stateNode.containerInfo),Bi(t,$i,e.memoizedState.cache),Pi();break;case 27:case 5:fe(t);break;case 4:ue(t,t.stateNode.containerInfo);break;case 10:Bi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Za(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Xa(t),e=Cc(e,t,n),e===null?null:e.sibling):gc(e,t,n):(Xa(t),t.flags|=128,null);Xa(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(Wi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Sc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(to,to.current),r)break;return null;case 22:return t.lanes=0,nc(e,t,n,t.pendingProps);case 24:Bi(t,$i,e.memoizedState.cache)}return Cc(e,t,n)}function Ec(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Zs=!0;else{if(!wc(e,n)&&!(t.flags&128))return Zs=!1,Tc(e,t,n);Zs=!!(e.flags&131072)}}else Zs=!1,J&&t.flags&1048576&&xi(t,mi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ya(t.elementType),t.type=e,typeof e==`function`)ti(e)?(r=Bs(e,r),t.tag=1,t=dc(null,t,e,r,n)):(t.tag=0,t=lc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=$s(null,t,e,r,n);break a}if(a===ee){t.tag=14,t=ec(null,t,e,r,n);break a}}throw t=A(e)||e,Error(i(306,t,``))}}return t;case 0:return lc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Bs(r,t.pendingProps),dc(e,t,r,a,n);case 3:a:{if(ue(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Na(e,t),Ba(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Bi(t,$i,r),r!==o.cache&&Ui(t,[$i],n,!0),za(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=fc(e,t,r,n);break a}if(r!==a){a=ui(Error(i(424)),t),Ii(a),t=fc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ei=lf(e.firstChild),Ti=t,J=!0,Di=null,Oi=!0,n=Aa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Pi(),r===a){t=Cc(e,t,n);break a}Qs(e,t,r,n)}t=t.child}return t;case 26:return cc(e,t),e===null?(n=Af(t.type,null,t.pendingProps,null))?t.memoizedState=n:J||(n=t.type,e=t.pendingProps,r=Vd(R.current).createElement(n),r[at]=t,r[ot]=e,Fd(r,n,e),vt(r),t.stateNode=r):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fe(t),e===null&&J&&(r=t.stateNode=pf(t.type,t.pendingProps,R.current),Ti=t,Oi=!0,a=Ei,Qd(t.type)?(uf=a,Ei=lf(r.firstChild)):Ei=a),Qs(e,t,t.pendingProps.children,n),cc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&J&&((a=r=Ei)&&(r=nf(r,t.type,t.pendingProps,Oi),r===null?a=!1:(t.stateNode=r,Ti=t,Ei=lf(r.firstChild),Oi=!1,a=!0)),a||Ai(t)),fe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=go(e,t,yo,null,null,n),$f._currentValue=a),cc(e,t),Qs(e,t,r,n),t.child;case 6:return e===null&&J&&((e=n=Ei)&&(n=rf(n,t.pendingProps,Oi),n===null?e=!1:(t.stateNode=n,Ti=t,Ei=null,e=!0)),e||Ai(t)),null;case 13:return gc(e,t,n);case 4:return ue(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ka(t,null,r,n):Qs(e,t,r,n),t.child;case 11:return $s(e,t,t.type,t.pendingProps,n);case 7:return Qs(e,t,t.pendingProps,n),t.child;case 8:return Qs(e,t,t.pendingProps.children,n),t.child;case 12:return Qs(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Bi(t,t.type,r.value),Qs(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Ki(t),a=qi(a),r=r(a),t.flags|=1,Qs(e,t,r,n),t.child;case 14:return ec(e,t,t.type,t.pendingProps,n);case 15:return tc(e,t,t.type,t.pendingProps,n);case 19:return Sc(e,t,n);case 31:return sc(e,t,n);case 22:return nc(e,t,n,t.pendingProps);case 24:return Ki(t),r=qi($i),e===null?(a=ua(),a===null&&(a=Il,o=ea(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ma(t),Bi(t,$i,a)):((e.lanes&n)!==0&&(Na(e,t),Ba(t,null,null,n),za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Bi(t,$i,r),r!==a.cache&&Ui(t,[$i],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Bi(t,$i,r))),Qs(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Dc(e){e.flags|=4}function Oc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Cu())e.flags|=8192;else throw ba=ga,ma}}else e.flags&=-16777217}function kc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t)){if(Cu())e.flags|=8192;else throw ba=ga,ma}}function Ac(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Je(),e.lanes|=t,Jl|=t)}function jc(e,t){if(!J)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Mc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nc(e,t,n){var r=t.pendingProps;switch(Ci(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mc(t),null;case 1:return Mc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Vi($i),de(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ni(t)?Dc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fi())),Mc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Dc(t),o===null?(Mc(t),Oc(t,a,null,r,n)):(Mc(t),kc(t,o))):o?o===e.memoizedState?(Mc(t),t.flags&=-16777217):(Dc(t),Mc(t),kc(t,o)):(e=e.memoizedProps,e!==r&&Dc(t),Mc(t),Oc(t,a,e,r,n)),null;case 27:if(pe(t),n=R.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Mc(t),null}e=se.current,Ni(t)?ji(t,e):(e=pf(a,r,n),t.stateNode=e,Dc(t))}return Mc(t),null;case 5:if(pe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Mc(t),null}if(o=se.current,Ni(t))ji(t,o);else{var s=Vd(R.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[at]=t,o[ot]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Fd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Dc(t)}}return Mc(t),Oc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=R.current,Ni(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ti,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[at]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ai(t,!0)}else e=Vd(e).createTextNode(r),e[at]=t,t.stateNode=e}return Mc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ni(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[at]=t}else Pi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mc(t),e=!1}else n=Fi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(eo(t),t):(eo(t),null);if(t.flags&128)throw Error(i(558))}return Mc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ni(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[at]=t}else Pi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mc(t),a=!1}else a=Fi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(eo(t),t):(eo(t),null)}return eo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ac(t,t.updateQueue),Mc(t),null);case 4:return de(),e===null&&Sd(t.stateNode.containerInfo),Mc(t),null;case 10:return Vi(t.type),Mc(t),null;case 19:if(oe(to),r=t.memoizedState,r===null)return Mc(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)jc(r,!1);else{if(Ul!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=no(e),o!==null){for(t.flags|=128,jc(r,!1),e=o.updateQueue,t.updateQueue=e,Ac(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ri(n,e),n=n.sibling;return I(to,to.current&1|2),J&&bi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ee()>eu&&(t.flags|=128,a=!0,jc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=no(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ac(t,e),jc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!J)return Mc(t),null}else 2*Ee()-r.renderingStartTime>eu&&n!==536870912&&(t.flags|=128,a=!0,jc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Mc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ee(),e.sibling=null,n=to.current,I(to,a?n&1|2:n&1),J&&bi(t,r.treeForkCount),e);case 22:case 23:return eo(t),qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Mc(t),t.subtreeFlags&6&&(t.flags|=8192)):Mc(t),n=t.updateQueue,n!==null&&Ac(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&oe(la),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Vi($i),Mc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Pc(e,t){switch(Ci(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vi($i),de(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return pe(t),null;case 31:if(t.memoizedState!==null){if(eo(t),t.alternate===null)throw Error(i(340));Pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(eo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(to),null;case 4:return de(),null;case 10:return Vi(t.type),null;case 22:case 23:return eo(t),qa(),e!==null&&oe(la),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Vi($i),null;case 25:return null;default:return null}}function Fc(e,t){switch(Ci(t),t.tag){case 3:Vi($i),de();break;case 26:case 27:case 5:pe(t);break;case 4:de();break;case 31:t.memoizedState!==null&&eo(t);break;case 13:eo(t);break;case 19:oe(to);break;case 10:Vi(t.type);break;case 22:case 23:eo(t),qa(),e!==null&&oe(la);break;case 24:Vi($i)}}function Ic(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Wu(t,t.return,e)}}function Lc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Wu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Wu(t,t.return,e)}}function Rc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ha(t,n)}catch(t){Wu(e,e.return,t)}}}function zc(e,t,n){n.props=Bs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Wu(e,t,n)}}function Bc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Wu(e,t,n)}}function Vc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Wu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Wu(e,t,n)}else n.current=null}}function Hc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Wu(e,e.return,t)}}function Uc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[ot]=t}catch(t){Wu(e,e.return,t)}}function Wc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qd(e.type)||e.tag===4}function Gc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=W));else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Kc(e,t,n),e=e.sibling;e!==null;)Kc(e,t,n),e=e.sibling}function qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}function Jc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fd(t,r,n),t[at]=e,t[ot]=n}catch(t){Wu(e,e.return,t)}}var Yc=!1,Xc=!1,Zc=!1,Qc=typeof WeakSet==`function`?WeakSet:Set,$c=null;function el(e,t){if(e=e.containerInfo,zd=cp,e=br(e),xr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},cp=!1,$c=t;$c!==null;)if(t=$c,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,$c=e;else for(;$c!==null;){switch(t=$c,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Bs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Wu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:tf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,$c=e;break}$c=t.return}}function tl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:gl(e,n),r&4&&Ic(5,n);break;case 1:if(gl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Wu(n,n.return,e)}else{var i=Bs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Wu(n,n.return,e)}}}r&64&&Rc(n),r&512&&Bc(n,n.return);break;case 3:if(gl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ha(e,t)}catch(e){Wu(n,n.return,e)}}break;case 27:t===null&&r&4&&Jc(n);case 26:case 5:gl(e,n),t===null&&r&4&&Hc(n),r&512&&Bc(n,n.return);break;case 12:gl(e,n);break;case 31:gl(e,n),r&4&&sl(e,n);break;case 13:gl(e,n),r&4&&cl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),cf(e,n))));break;case 22:if(r=n.memoizedState!==null||Yc,!r){t=t!==null&&t.memoizedState!==null||Xc,i=Yc;var a=Xc;Yc=r,(Xc=t)&&!a?vl(e,n,!!(n.subtreeFlags&8772)):gl(e,n),Yc=i,Xc=a}break;case 30:break;default:gl(e,n)}}function nl(e){var t=e.alternate;t!==null&&(e.alternate=null,nl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&pt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rl=null,il=!1;function al(e,t,n){for(n=n.child;n!==null;)ol(e,t,n),n=n.sibling}function ol(e,t,n){if(Ie&&typeof Ie.onCommitFiberUnmount==`function`)try{Ie.onCommitFiberUnmount(Fe,n)}catch{}switch(n.tag){case 26:Xc||Vc(n,t),al(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xc||Vc(n,t);var r=rl,i=il;Qd(n.type)&&(rl=n.stateNode,il=!1),al(e,t,n),mf(n.stateNode),rl=r,il=i;break;case 5:Xc||Vc(n,t);case 6:if(r=rl,i=il,rl=null,al(e,t,n),rl=r,il=i,rl!==null){if(il)try{(rl.nodeType===9?rl.body:rl.nodeName===`HTML`?rl.ownerDocument.body:rl).removeChild(n.stateNode)}catch(e){Wu(n,t,e)}else try{rl.removeChild(n.stateNode)}catch(e){Wu(n,t,e)}}break;case 18:rl!==null&&(il?(e=rl,$d(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):$d(rl,n.stateNode));break;case 4:r=rl,i=il,rl=n.stateNode.containerInfo,il=!0,al(e,t,n),rl=r,il=i;break;case 0:case 11:case 14:case 15:Lc(2,n,t),Xc||Lc(4,n,t),al(e,t,n);break;case 1:Xc||(Vc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&zc(n,t,r)),al(e,t,n);break;case 21:al(e,t,n);break;case 22:Xc=(r=Xc)||n.memoizedState!==null,al(e,t,n),Xc=r;break;default:al(e,t,n)}}function sl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){Wu(t,t.return,e)}}}function cl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){Wu(t,t.return,e)}}function ll(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qc),t;default:throw Error(i(435,e.tag))}}function ul(e,t){var n=ll(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function dl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Qd(c.type)){rl=c.stateNode,il=!1;break a}break;case 5:rl=c.stateNode,il=!1;break a;case 3:case 4:rl=c.stateNode.containerInfo,il=!0;break a}c=c.return}if(rl===null)throw Error(i(160));ol(o,s,a),rl=null,il=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)pl(t,e),t=t.sibling}var fl=null;function pl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dl(t,e),ml(e),r&4&&(Lc(3,e,e.return),Ic(3,e),Lc(5,e,e.return));break;case 1:dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),r&64&&Yc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=fl;if(dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[ft]||o[at]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Fd(o,r,n),o[at]=e,vt(o),r=o;break a;case`link`:var s=Hf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Hf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[at]=e,vt(o),r=o}e.stateNode=r}else Uf(a,e.type,e.stateNode)}else e.stateNode=Lf(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Uc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Uf(a,e.type,e.stateNode):Lf(a,r,e.memoizedProps))}break;case 27:dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),n!==null&&r&4&&Uc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),e.flags&32){a=e.stateNode;try{Ht(a,``)}catch(t){Wu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Uc(e,a,n===null?a:n.memoizedProps)),r&1024&&(Zc=!0);break;case 6:if(dl(t,e),ml(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Wu(e,e.return,t)}}break;case 3:if(Vf=null,a=fl,fl=_f(t.containerInfo),dl(t,e),fl=a,ml(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){Wu(e,e.return,t)}Zc&&(Zc=!1,hl(e));break;case 4:r=fl,fl=_f(e.stateNode.containerInfo),dl(t,e),ml(e),fl=r;break;case 12:dl(t,e),ml(e);break;case 31:dl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 13:dl(t,e),ml(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ql=Ee()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Yc,d=Xc;if(Yc=u||a,Xc=d||l,dl(t,e),Xc=d,Yc=u,ml(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Yc||Xc||_l(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Wu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Wu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?ef(m,!0):ef(l.stateNode,!1)}catch(e){Wu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ul(e,n))));break;case 19:dl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 30:break;case 21:break;default:dl(t,e),ml(e)}}function ml(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Wc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;qc(e,Gc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Ht(o,``),n.flags&=-33),qc(e,Gc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Kc(e,Gc(e),s);break;default:throw Error(i(161))}}catch(t){Wu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;hl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function gl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tl(e,t.alternate,t),t=t.sibling}function _l(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Lc(4,t,t.return),_l(t);break;case 1:Vc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&zc(t,t.return,n),_l(t);break;case 27:mf(t.stateNode);case 26:case 5:Vc(t,t.return),_l(t);break;case 22:t.memoizedState===null&&_l(t);break;case 30:_l(t);break;default:_l(t)}e=e.sibling}}function vl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:vl(i,a,n),Ic(4,a);break;case 1:if(vl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Wu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Va(c[i],s)}catch(e){Wu(r,r.return,e)}}n&&o&64&&Rc(a),Bc(a,a.return);break;case 27:Jc(a);case 26:case 5:vl(i,a,n),n&&r===null&&o&4&&Hc(a),Bc(a,a.return);break;case 12:vl(i,a,n);break;case 31:vl(i,a,n),n&&o&4&&sl(i,a);break;case 13:vl(i,a,n),n&&o&4&&cl(i,a);break;case 22:a.memoizedState===null&&vl(i,a,n),Bc(a,a.return);break;case 30:break;default:vl(i,a,n)}t=t.sibling}}function yl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Y(n))}function bl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Y(e))}function xl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sl(e,t,n,r),t=t.sibling}function Sl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:xl(e,t,n,r),i&2048&&Ic(9,t);break;case 1:xl(e,t,n,r);break;case 3:xl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Y(e)));break;case 12:if(i&2048){xl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Wu(t,t.return,e)}}else xl(e,t,n,r);break;case 31:xl(e,t,n,r);break;case 13:xl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?xl(e,t,n,r):(a._visibility|=2,Cl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?xl(e,t,n,r):wl(e,t),i&2048&&yl(o,t);break;case 24:xl(e,t,n,r),i&2048&&bl(t.alternate,t);break;default:xl(e,t,n,r)}}function Cl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Cl(a,o,s,c,i),Ic(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Cl(a,o,s,c,i)):u._visibility&2?Cl(a,o,s,c,i):wl(a,o),i&&l&2048&&yl(o.alternate,o);break;case 24:Cl(a,o,s,c,i),i&&l&2048&&bl(o.alternate,o);break;default:Cl(a,o,s,c,i)}t=t.sibling}}function wl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:wl(n,r),i&2048&&yl(r.alternate,r);break;case 24:wl(n,r),i&2048&&bl(r.alternate,r);break;default:wl(n,r)}t=t.sibling}}var Tl=8192;function El(e,t,n){if(e.subtreeFlags&Tl)for(e=e.child;e!==null;)Dl(e,t,n),e=e.sibling}function Dl(e,t,n){switch(e.tag){case 26:El(e,t,n),e.flags&Tl&&e.memoizedState!==null&&Kf(n,fl,e.memoizedState,e.memoizedProps);break;case 5:El(e,t,n);break;case 3:case 4:var r=fl;fl=_f(e.stateNode.containerInfo),El(e,t,n),fl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Tl,Tl=16777216,El(e,t,n),Tl=r):El(e,t,n));break;default:El(e,t,n)}}function Ol(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function kl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];$c=r,Ml(r,e)}Ol(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Al(e),e=e.sibling}function Al(e){switch(e.tag){case 0:case 11:case 15:kl(e),e.flags&2048&&Lc(9,e,e.return);break;case 3:kl(e);break;case 12:kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,jl(e)):kl(e);break;default:kl(e)}}function jl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];$c=r,Ml(r,e)}Ol(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Lc(8,t,t.return),jl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,jl(t));break;default:jl(t)}e=e.sibling}}function Ml(e,t){for(;$c!==null;){var n=$c;switch(n.tag){case 0:case 11:case 15:Lc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Y(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,$c=r;else a:for(n=e;$c!==null;){r=$c;var i=r.sibling,a=r.return;if(nl(r),r===n){$c=null;break a}if(i!==null){i.return=a,$c=i;break a}$c=a}}}var Nl={getCacheForType:function(e){var t=qi($i),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return qi($i).controller.signal}},Pl=typeof WeakMap==`function`?WeakMap:Map,Fl=0,Il=null,Z=null,Q=0,Ll=0,Rl=null,zl=!1,Bl=!1,Vl=!1,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=null,Xl=null,Zl=!1,Ql=0,$l=0,eu=1/0,tu=null,nu=null,ru=0,iu=null,au=null,ou=0,su=0,cu=null,lu=null,uu=0,du=null;function fu(){return Fl&2&&Q!==0?Q&-Q:M.T===null?nt():dd()}function pu(){if(ql===0){if(!(Q&536870912)||J){var e=He;He<<=1,!(He&3932160)&&(He=262144),ql=e}else ql=536870912}return e=Ja.current,e!==null&&(e.flags|=32),ql}function mu(e,t,n){(e===Il&&(Ll===2||Ll===9)||e.cancelPendingCommit!==null)&&(xu(e,0),vu(e,Q,ql,!1)),B(e,n),(!(Fl&2)||e!==Il)&&(e===Il&&(!(Fl&2)&&(Gl|=n),Ul===4&&vu(e,Q,ql,!1)),rd(e))}function hu(e,t,n){if(Fl&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Ke(e,t),a=r?ku(e,t):Du(e,t,!0),o=r;do{if(a===0){Bl&&!r&&vu(e,t,0,!1);break}if(n=e.current.alternate,o&&!_u(n)){a=Du(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Yl;var l=c.current.memoizedState.isDehydrated;if(l&&(xu(c,s).flags|=256),s=Du(c,s,!1),s!==2){if(Vl&&!l){c.errorRecoveryDisabledLanes|=o,Gl|=o,a=4;break a}o=Xl,Xl=a,o!==null&&(Xl===null?Xl=o:Xl.push.apply(Xl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){xu(e,0),vu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:vu(r,t,ql,!zl);break a;case 2:Xl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Ql+300-Ee(),10<a)){if(vu(r,t,ql,!zl),Ge(r,0,!0)!==0)break a;ou=t,r.timeoutHandle=qd(gu.bind(null,r,n,Xl,tu,Zl,t,ql,Gl,Jl,zl,o,`Throttled`,-0,0),a);break a}gu(r,n,Xl,tu,Zl,t,ql,Gl,Jl,zl,o,null,-0,0)}break}while(1);rd(e)}function gu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:W},Dl(t,a,d);var m=(a&62914560)===a?Ql-Ee():(a&4194048)===a?$l-Ee():0;if(m=Jf(d,m),m!==null){ou=a,e.cancelPendingCommit=m(Iu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),vu(e,a,o,!l);return}}Iu(e,t,a,n,r,i,o,s,c)}function _u(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!hr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vu(e,t,n,r){t&=~Kl,t&=~Gl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Re(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Ze(e,n,t)}function yu(){return Fl&6?!0:(id(0,!1),!1)}function bu(){if(Z!==null){if(Ll===0)var e=Z.return;else e=Z,zi=Ri=null,So(e),Ca=null,wa=0,e=Z;for(;e!==null;)Fc(e.alternate,e),e=e.return;Z=null}}function xu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ou=0,bu(),Il=e,Z=n=ni(e.current,null),Q=t,Ll=0,Rl=null,zl=!1,Bl=Ke(e,t),Vl=!1,Jl=ql=Kl=Gl=Wl=Ul=0,Xl=Yl=null,Zl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Re(r),a=1<<i;t|=e[i],r&=~a}return Hl=t,Kr(),n}function Su(e,t){X=null,M.H=Ms,t===pa||t===ha?(t=xa(),Ll=3):t===ma?(t=xa(),Ll=4):Ll=t===Xs?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Rl=t,Z===null&&(Ul=1,Ws(e,ui(t,e.current)))}function Cu(){var e=Ja.current;return e===null?!0:(Q&4194048)===Q?Ya===null:(Q&62914560)===Q||Q&536870912?e===Ya:!1}function wu(){var e=M.H;return M.H=Ms,e===null?Ms:e}function Tu(){var e=M.A;return M.A=Nl,e}function Eu(){Ul=4,zl||(Q&4194048)!==Q&&Ja.current!==null||(Bl=!0),!(Wl&134217727)&&!(Gl&134217727)||Il===null||vu(Il,Q,ql,!1)}function Du(e,t,n){var r=Fl;Fl|=2;var i=wu(),a=Tu();(Il!==e||Q!==t)&&(tu=null,xu(e,t)),t=!1;var o=Ul;a:do try{if(Ll!==0&&Z!==null){var s=Z,c=Rl;switch(Ll){case 8:bu(),o=6;break a;case 3:case 2:case 9:case 6:Ja.current===null&&(t=!0);var l=Ll;if(Ll=0,Rl=null,Nu(e,s,c,l),n&&Bl){o=0;break a}break;default:l=Ll,Ll=0,Rl=null,Nu(e,s,c,l)}}Ou(),o=Ul;break}catch(t){Su(e,t)}while(1);return t&&e.shellSuspendCounter++,zi=Ri=null,Fl=r,M.H=i,M.A=a,Z===null&&(Il=null,Q=0,Kr()),o}function Ou(){for(;Z!==null;)ju(Z)}function ku(e,t){var n=Fl;Fl|=2;var r=wu(),a=Tu();Il!==e||Q!==t?(tu=null,eu=Ee()+500,xu(e,t)):Bl=Ke(e,t);a:do try{if(Ll!==0&&Z!==null){t=Z;var o=Rl;b:switch(Ll){case 1:Ll=0,Rl=null,Nu(e,t,o,1);break;case 2:case 9:if(_a(o)){Ll=0,Rl=null,Mu(t);break}t=function(){Ll!==2&&Ll!==9||Il!==e||(Ll=7),rd(e)},o.then(t,t);break a;case 3:Ll=7;break a;case 4:Ll=5;break a;case 7:_a(o)?(Ll=0,Rl=null,Mu(t)):(Ll=0,Rl=null,Nu(e,t,o,7));break;case 5:var s=null;switch(Z.tag){case 26:s=Z.memoizedState;case 5:case 27:var c=Z;if(s?Gf(s):c.stateNode.complete){Ll=0,Rl=null;var l=c.sibling;if(l!==null)Z=l;else{var u=c.return;u===null?Z=null:(Z=u,Pu(u))}break b}}Ll=0,Rl=null,Nu(e,t,o,5);break;case 6:Ll=0,Rl=null,Nu(e,t,o,6);break;case 8:bu(),Ul=6;break a;default:throw Error(i(462))}}Au();break}catch(t){Su(e,t)}while(1);return zi=Ri=null,M.H=r,M.A=a,Fl=n,Z===null?(Il=null,Q=0,Kr(),Ul):0}function Au(){for(;Z!==null&&!we();)ju(Z)}function ju(e){var t=Ec(e.alternate,e,Hl);e.memoizedProps=e.pendingProps,t===null?Pu(e):Z=t}function Mu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=uc(n,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=uc(n,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:So(t);default:Fc(n,t),t=Z=ri(t,Hl),t=Ec(n,t,Hl)}e.memoizedProps=e.pendingProps,t===null?Pu(e):Z=t}function Nu(e,t,n,r){zi=Ri=null,So(t),Ca=null,wa=0;var i=t.return;try{if(Ys(e,i,t,n,Q)){Ul=1,Ws(e,ui(n,e.current)),Z=null;return}}catch(t){if(i!==null)throw Z=i,t;Ul=1,Ws(e,ui(n,e.current)),Z=null;return}t.flags&32768?(J||r===1?e=!0:Bl||Q&536870912?e=!1:(zl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ja.current,r!==null&&r.tag===13&&(r.flags|=16384))),Fu(t,e)):Pu(t)}function Pu(e){var t=e;do{if(t.flags&32768){Fu(t,zl);return}e=t.return;var n=Nc(t.alternate,t,Hl);if(n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);Ul===0&&(Ul=5)}function Fu(e,t){do{var n=Pc(e.alternate,e);if(n!==null){n.flags&=32767,Z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=n}while(e!==null);Ul=6,Z=null}function Iu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Vu();while(ru!==0);if(Fl&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Gr,Xe(e,n,o,s,c,l),e===Il&&(Z=Il=null,Q=0),au=t,iu=e,ou=n,su=o,cu=a,lu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ae,function(){return Hu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=M.T,M.T=null,a=N.p,N.p=2,s=Fl,Fl|=4;try{el(e,t,n)}finally{Fl=s,N.p=a,M.T=r}}ru=1,Lu(),Ru(),zu()}}function Lu(){if(ru===1){ru=0;var e=iu,t=au,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=Fl;Fl|=4;try{pl(t,e);var a=Bd,o=br(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&yr(s.ownerDocument.documentElement,s)){if(c!==null&&xr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=vr(s,h),v=vr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}cp=!!zd,Bd=zd=null}finally{Fl=i,N.p=r,M.T=n}}e.current=t,ru=2}}function Ru(){if(ru===2){ru=0;var e=iu,t=au,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=Fl;Fl|=4;try{tl(e,t.alternate,t)}finally{Fl=i,N.p=r,M.T=n}}ru=3}}function zu(){if(ru===4||ru===3){ru=0,Te();var e=iu,t=au,n=ou,r=lu;t.subtreeFlags&10256||t.flags&10256?ru=5:(ru=0,au=iu=null,Bu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(nu=null),tt(n),t=t.stateNode,Ie&&typeof Ie.onCommitFiberRoot==`function`)try{Ie.onCommitFiberRoot(Fe,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=M.T,i=N.p,N.p=2,M.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{M.T=t,N.p=i}}ou&3&&Vu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===du?uu++:(uu=0,du=e):uu=0,id(0,!1)}}function Bu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Y(t)))}function Vu(){return Lu(),Ru(),zu(),Hu()}function Hu(){if(ru!==5)return!1;var e=iu,t=su;su=0;var n=tt(ou),r=M.T,a=N.p;try{N.p=32>n?32:n,M.T=null,n=cu,cu=null;var o=iu,s=ou;if(ru=0,au=iu=null,ou=0,Fl&6)throw Error(i(331));var c=Fl;if(Fl|=4,Al(o.current),Sl(o,o.current,s,n),Fl=c,id(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot==`function`)try{Ie.onPostCommitFiberRoot(Fe,o)}catch{}return!0}finally{N.p=a,M.T=r,Bu(e,t)}}function Uu(e,t,n){t=ui(n,t),t=Ks(e.stateNode,t,2),e=Fa(e,t,2),e!==null&&(B(e,2),rd(e))}function Wu(e,t,n){if(e.tag===3)Uu(e,e,n);else for(;t!==null;){if(t.tag===3){Uu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(nu===null||!nu.has(r))){e=ui(n,e),n=qs(2),r=Fa(t,n,2),r!==null&&(Js(n,r,t,e),B(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Vl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Il===e&&(Q&n)===n&&(Ul===4||Ul===3&&(Q&62914560)===Q&&300>Ee()-Ql?!(Fl&2)&&xu(e,0):Kl|=n,Jl===Q&&(Jl=0)),rd(e)}function qu(e,t){t===0&&(t=Je()),e=Yr(e,t),e!==null&&(B(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Se(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Re(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Q,a=Ge(r,r===Il?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ke(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Kd()&&(e=nd);for(var t=Ee(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}ru!==0&&ru!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Re(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=qe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Il,n=Q,n=Ge(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Ll===2||Ll===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ce(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ke(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ce(r),tt(n)){case 2:case 8:n=ke;break;case 32:n=Ae;break;case 268435456:n=Me;break;default:n=Ae}return r=cd.bind(null,e),n=Se(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ce(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(ru!==0&&ru!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vu()&&e.callbackNode!==n)return null;var r=Q;return r=Ge(e,e===Il?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(hu(e,r,t),sd(e,Ee()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Vu())return null;hu(e,t,!0)}function ud(){Xd(function(){Fl&6?Se(Oe,ad):od()})}function dd(){if(nd===0){var e=ra;e===0&&(e=Ve,Ve<<=1,!(Ve&261888)&&(Ve=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Jt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ot]||null).action),o=r.submitter;o&&(t=(t=o[ot]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new hn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);vs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),vs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Br.length;hd++){var gd=Br[hd];Vr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Vr(Mr,`onAnimationEnd`),Vr(Nr,`onAnimationIteration`),Vr(Pr,`onAnimationStart`),Vr(`dblclick`,`onDoubleClick`),Vr(`focusin`,`onFocus`),Vr(`focusout`,`onBlur`),Vr(Fr,`onTransitionRun`),Vr(Ir,`onTransitionStart`),Vr(Lr,`onTransitionCancel`),Vr(Rr,`onTransitionEnd`),xt(`onMouseEnter`,[`mouseout`,`mouseover`]),xt(`onMouseLeave`,[`mouseout`,`mouseover`]),xt(`onPointerEnter`,[`pointerout`,`pointerover`]),xt(`onPointerLeave`,[`pointerout`,`pointerover`]),V(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),V(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),V(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),V(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),V(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),V(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Hr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Hr(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[ct];n===void 0&&(n=t[ct]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,yt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(hp(t)){case 2:var i=lp;break;case 8:i=up;break;default:i=dp}n=i.bind(null,t,n,e),i=void 0,!an||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=mt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}tn(function(){var r=a,i=Xt(n),s=[];a:{var c=zr.get(e);if(c!==void 0){var l=hn,u=e;switch(e){case`keypress`:if(dn(n)===0)break a;case`keydown`:case`keyup`:l=Nn;break;case`focusin`:u=`focus`,l=wn;break;case`focusout`:u=`blur`,l=wn;break;case`beforeblur`:case`afterblur`:l=wn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Sn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Cn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Pn;break;case Mr:case Nr:case Pr:l=Tn;break;case Rr:l=Fn;break;case`scroll`:case`scrollend`:l=_n;break;case`wheel`:l=In;break;case`copy`:case`cut`:case`paste`:l=En;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=K;break;case`toggle`:case`beforetoggle`:l=Ln}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=nn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Yt&&(u=n.relatedTarget||n.fromElement)&&(mt(u)||u[st]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?mt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Sn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=K,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:gt(l),h=u==null?c:gt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,mt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?gt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=rr;else if(Zn(c)){if(ir)v=pr;else{v=dr;var y=ur}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Kt(r.elementType)&&(v=rr):v=fr;if(v&&=v(e,r)){Qn(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Rt(c,`number`,c.value)}switch(y=r?gt(r):window,e){case`focusin`:(Zn(y)||y.contentEditable===`true`)&&(Sr=y,Cr=r,wr=null);break;case`focusout`:wr=Cr=Sr=null;break;case`mousedown`:Tr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Tr=!1,Er(s,n,i);break;case`selectionchange`:if(q)break;case`keydown`:case`keyup`:Er(s,n,i)}var b;if(zn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else qn?Gn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Hn&&n.locale!==`ko`&&(qn||x!==`onCompositionStart`?x===`onCompositionEnd`&&qn&&(b=un()):(sn=i,cn=`value`in sn?sn.value:sn.textContent,qn=!0)),y=Ed(r,x),0<y.length&&(x=new Dn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Kn(n),b!==null&&(x.data=b)))),(b=Vn?Jn(e,n):Yn(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Dn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=nn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=nn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=nn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=nn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function Nd(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Ht(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Ht(e,``+r);break;case`className`:Et(e,`class`,r);break;case`tabIndex`:Et(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Et(e,n,r);break;case`style`:Gt(e,r,o);break;case`data`:if(t!==`object`){Et(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Jt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Nd(e,t,`name`,a.name,a,null),Nd(e,t,`formEncType`,a.formEncType,a,null),Nd(e,t,`formMethod`,a.formMethod,a,null),Nd(e,t,`formTarget`,a.formTarget,a,null)):(Nd(e,t,`encType`,a.encType,a,null),Nd(e,t,`method`,a.method,a,null),Nd(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Jt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=W);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Jt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),H(e,`popover`,r);break;case`xlinkActuate`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Dt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Dt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Dt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Dt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:H(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=qt.get(n)||n,H(e,n,r))}}function Pd(e,t,n,r,a,o){switch(n){case`style`:Gt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Ht(e,r):(typeof r==`number`||typeof r==`bigint`)&&Ht(e,``+r);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=W);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!bt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ot]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):H(e,n,r)}}}function Fd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Nd(e,t,o,s,n,null)}}a&&Nd(e,t,`srcSet`,n.srcSet,n,null),r&&Nd(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Nd(e,t,r,d,n,null)}}Lt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Nd(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&zt(e,!!r,n,!0):zt(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Nd(e,t,s,c,n,null)}Vt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Nd(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)$(_d[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Nd(e,t,u,r,n,null)}return;default:if(Kt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Nd(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Nd(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Nd(e,t,p,m,r,f)}}It(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Nd(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Nd(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?zt(e,!!n,n?[]:``,!1):zt(e,!!n,t,!0)):zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Nd(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Nd(e,t,s,a,r,o)}Bt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Nd(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Nd(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Nd(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Nd(e,t,u,p,r,m)}return;default:if(Kt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Nd(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Nd(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Kd(){var e=window.event;return e&&e.type===`popstate`?e!==Gd&&(Gd=e,!0):(Gd=null,!1)}var qd=typeof setTimeout==`function`?setTimeout:void 0,Jd=typeof clearTimeout==`function`?clearTimeout:void 0,Yd=typeof Promise==`function`?Promise:void 0,Xd=typeof queueMicrotask==`function`?queueMicrotask:Yd===void 0?qd:function(e){return Yd.resolve(null).then(e).catch(Zd)};function Zd(e){setTimeout(function(){throw e})}function Qd(e){return e===`head`}function $d(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)mf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,mf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[ft]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&mf(e.ownerDocument.body)}n=i}while(n);Pp(t)}function ef(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function tf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:tf(n),pt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function nf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[ft])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lf(e.nextSibling),e===null)break}return null}function rf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lf(e.nextSibling),e===null))return null;return e}function af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lf(e.nextSibling),e===null))return null;return e}function of(e){return e.data===`$?`||e.data===`$~`}function sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var uf=null;function df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pf(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);pt(e)}var hf=new Map,gf=new Set;function _f(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vf=N.d;N.d={f:yf,r:bf,D:Cf,C:wf,L:Tf,m:Ef,X:Of,S:Df,M:kf};function yf(){var e=vf.f(),t=yu();return e||t}function bf(e){var t=ht(e);t!==null&&t.tag===5&&t.type===`form`?bs(t):vf.r(e)}var xf=typeof document>`u`?null:document;function Sf(e,t,n){var r=xf;if(r&&typeof t==`string`&&t){var i=Ft(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),gf.has(i)||(gf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Fd(t,`link`,e),vt(t),r.head.appendChild(t)))}}function Cf(e){vf.D(e),Sf(`dns-prefetch`,e,null)}function wf(e,t){vf.C(e,t),Sf(`preconnect`,e,t)}function Tf(e,t,n){vf.L(e,t,n);var r=xf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Ft(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Ft(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Ft(n.imageSizes)+`"]`)):i+=`[href="`+Ft(e)+`"]`;var a=i;switch(t){case`style`:a=jf(e);break;case`script`:a=Ff(e)}hf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),hf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Mf(a))||t===`script`&&r.querySelector(If(a))||(t=r.createElement(`link`),Fd(t,`link`,e),vt(t),r.head.appendChild(t)))}}function Ef(e,t){vf.m(e,t);var n=xf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Ft(r)+`"][href="`+Ft(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Ff(e)}if(!hf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),hf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(If(a)))return}r=n.createElement(`link`),Fd(r,`link`,e),vt(r),n.head.appendChild(r)}}}function Df(e,t,n){vf.S(e,t,n);var r=xf;if(r&&e){var i=_t(r).hoistableStyles,a=jf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Mf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=hf.get(a))&&zf(e,n);var c=o=r.createElement(`link`);vt(c),Fd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Rf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Of(e,t){vf.X(e,t);var n=xf;if(n&&e){var r=_t(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),vt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t){vf.M(e,t);var n=xf;if(n&&e){var r=_t(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),vt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t,n,r){var a=(a=R.current)?_f(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=jf(n.href),n=_t(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=jf(n.href);var o=_t(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Mf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),hf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hf.set(e,n),o||Pf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Ff(n),n=_t(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function jf(e){return`href="`+Ft(e)+`"`}function Mf(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Fd(t,`link`,n),vt(t),e.head.appendChild(t))}function Ff(e){return`[src="`+Ft(e)+`"]`}function If(e){return`script[async]`+e}function Lf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Ft(n.href)+`"]`);if(r)return t.instance=r,vt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),vt(r),Fd(r,`style`,a),Rf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=jf(n.href);var o=e.querySelector(Mf(a));if(o)return t.state.loading|=4,t.instance=o,vt(o),o;r=Nf(n),(a=hf.get(a))&&zf(r,a),o=(e.ownerDocument||e).createElement(`link`),vt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Fd(o,`link`,r),t.state.loading|=4,Rf(o,n.precedence,e),t.instance=o;case`script`:return o=Ff(n.src),(a=e.querySelector(If(o)))?(t.instance=a,vt(a),a):(r=n,(a=hf.get(o))&&(r=h({},n),Bf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),vt(a),Fd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Rf(r,n.precedence,e));return t.instance}function Rf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Vf=null;function Hf(e,t,n){if(Vf===null){var r=new Map,i=Vf=new Map;i.set(n,r)}else i=Vf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[ft]||a[at]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Wf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Gf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Kf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=jf(r.href),a=t.querySelector(Mf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Yf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,vt(a);return}a=t.ownerDocument||t,r=Nf(r),(i=hf.get(i))&&zf(r,i),a=a.createElement(`link`),vt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Yf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var qf=0;function Jf(e,t){return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&qf===0&&(qf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>qf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xf=null;function Zf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xf=new Map,t.forEach(Qf,e),Xf=null,Yf.call(e))}function Qf(e,t){if(!(t.state.loading&4)){var n=Xf.get(e);if(n)var r=n.get(null);else{n=new Map,Xf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Yf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $f={$$typeof:C,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function ep(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function tp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ep(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ei(3,null,null,t),e.current=a,a.stateNode=e,t=ea(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ma(a),e}function np(e){return e?(e=Qr,e):Qr}function rp(e,t,n,r,i,a){i=np(i),r.context===null?r.context=i:r.pendingContext=i,r=Pa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Fa(e,r,t),n!==null&&(mu(n,e,t),Ia(n,e,t))}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ap(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function op(e){if(e.tag===13||e.tag===31){var t=Yr(e,67108864);t!==null&&mu(t,e,67108864),ap(e,67108864)}}function sp(e){if(e.tag===13||e.tag===31){var t=fu();t=et(t);var n=Yr(e,t);n!==null&&mu(n,e,t),ap(e,t)}}var cp=!0;function lp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=2,dp(e,t,n,r)}finally{N.p=a,M.T=i}}function up(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=8,dp(e,t,n,r)}finally{N.p=a,M.T=i}}function dp(e,t,n,r){if(cp){var i=fp(r);if(i===null)wd(e,t,r,pp,n),wp(e,r);else if(Ep(i,e,t,n,r))r.stopPropagation();else if(wp(e,r),t&4&&-1<Cp.indexOf(e)){for(;i!==null;){var a=ht(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=We(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Re(o);s.entanglements[1]|=c,o&=~c}rd(a),!(Fl&6)&&(eu=Ee()+500,id(0,!1))}}break;case 31:case 13:s=Yr(a,2),s!==null&&mu(s,a,2),yu(),ap(a,2)}if(a=fp(r),a===null&&wd(e,t,r,pp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function fp(e){return e=Xt(e),mp(e)}var pp=null;function mp(e){if(pp=null,e=mt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pp=e,null}function hp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(De()){case Oe:return 2;case ke:return 8;case Ae:case je:return 32;case Me:return 268435456;default:return 32}default:return 32}}var gp=!1,_p=null,vp=null,yp=null,bp=new Map,xp=new Map,Sp=[],Cp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function wp(e,t){switch(e){case`focusin`:case`focusout`:_p=null;break;case`dragenter`:case`dragleave`:vp=null;break;case`mouseover`:case`mouseout`:yp=null;break;case`pointerover`:case`pointerout`:bp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:xp.delete(t.pointerId)}}function Tp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ht(t),t!==null&&op(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,n,r,i){switch(t){case`focusin`:return _p=Tp(_p,e,t,n,r,i),!0;case`dragenter`:return vp=Tp(vp,e,t,n,r,i),!0;case`mouseover`:return yp=Tp(yp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return bp.set(a,Tp(bp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,xp.set(a,Tp(xp.get(a)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=mt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,rt(e.priority,function(){sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,rt(e.priority,function(){sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Op(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yt=r,n.target.dispatchEvent(r),Yt=null}else return t=ht(n),t!==null&&op(t),e.blockedOn=n,!1;t.shift()}return!0}function kp(e,t,n){Op(e)&&n.delete(t)}function Ap(){gp=!1,_p!==null&&Op(_p)&&(_p=null),vp!==null&&Op(vp)&&(vp=null),yp!==null&&Op(yp)&&(yp=null),bp.forEach(kp),xp.forEach(kp)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,gp||(gp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ap)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(mp(r||n)===null)continue;break}var a=ht(n);a!==null&&(e.splice(t,3),t-=3,vs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}_p!==null&&jp(_p,e),vp!==null&&jp(vp,e),yp!==null&&jp(yp,e),bp.forEach(t),xp.forEach(t);for(var n=0;n<Sp.length;n++){var r=Sp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Sp.length&&(n=Sp[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Sp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ot]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ot]||null)s=o.formAction;else if(mp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;rp(n,fu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rp(e.current,2,null,e,null,null),yu(),t[st]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=nt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sp.length&&t!==0&&t<Sp[n].priority;n++);Sp.splice(n,0,e),n===0&&Dp(e)}};var Rp=n.version;if(Rp!==`19.2.8`)throw Error(i(527,Rp,`19.2.8`));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:M,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{Fe=Bp.inject(zp),Ie=Bp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Vs,s=Hs,c=Us;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,r,null,o,s,c,Fp),e[st]=t.current,Sd(e),new Ip(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`-ms-`,v=`-moz-`,y=`-webkit-`,b=`comm`,x=`rule`,S=`decl`,C=`@import`,w=`@namespace`,T=`@keyframes`,E=`@layer`,ee=Math.abs,D=String.fromCharCode,te=Object.assign;function ne(e,t){return j(e,0)^45?(((t<<2^j(e,0))<<2^j(e,1))<<2^j(e,2))<<2^j(e,3):0}function re(e){return e.trim()}function O(e,t){return(e=t.exec(e))?e[0]:e}function k(e,t,n){return e.replace(t,n)}function A(e,t,n){return e.indexOf(t,n)}function j(e,t){return e.charCodeAt(t)|0}function M(e,t,n){return e.slice(t,n)}function N(e){return e.length}function ie(e){return e.length}function P(e,t){return t.push(e),e}function F(e,t){return e.map(t).join(``)}function ae(e,t){return e.filter(function(e){return!O(e,t)})}var oe=1,I=1,se=0,ce=0,R=0,le=``;function ue(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:oe,column:I,length:o,return:``,siblings:s}}function de(e,t){return te(ue(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function fe(e){for(;e.root;)e=de(e.root,{children:[e]});P(e,e.siblings)}function pe(){return R}function me(){return R=ce>0?j(le,--ce):0,I--,R===10&&(I=1,oe--),R}function he(){return R=ce<se?j(le,ce++):0,I++,R===10&&(I=1,oe++),R}function ge(){return j(le,ce)}function _e(){return ce}function ve(e,t){return M(le,e,t)}function ye(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function be(e){return oe=I=1,se=N(le=e),ce=0,[]}function xe(e){return le=``,e}function Se(e){return re(ve(ce-1,Te(e===91?e+2:e===40?e+1:e)))}function Ce(e){for(;(R=ge())&&R<33;)he();return ye(e)>2||ye(R)>3?``:` `}function we(e,t){for(;--t&&he()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return ve(e,_e()+(t<6&&ge()==32&&he()==32))}function Te(e){for(;he();)switch(R){case e:return ce;case 34:case 39:e!==34&&e!==39&&Te(R);break;case 40:e===41&&Te(e);break;case 92:he();break}return ce}function Ee(e,t){for(;he()&&e+R!==57&&(e+R!==84||ge()!==47););return`/*`+ve(t,ce-1)+`*`+D(e===47?e:he())}function De(e){for(;!ye(ge());)he();return ve(e,ce)}function Oe(e){return xe(ke(``,null,null,null,[``],e=be(e),0,[0],e))}function ke(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=he()){case 40:if(m!=108&&j(C,d-1)==58){A(C+=k(Se(v),`&`,`&\f`),`&\f`,ee(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Se(v);break;case 9:case 10:case 13:case 32:C+=Ce(m);break;case 92:C+=we(_e()-1,7);continue;case 47:switch(ge()){case 42:case 47:P(je(Ee(he(),_e()),t,n,c),c),(ye(m||1)==5||ye(ge()||1)==5)&&N(C)&&M(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=N(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=k(C,/\f/g,``)),p>0&&(N(C)-d||h===0&&m===47)&&P(p>32?Me(C+`;`,r,n,d-1,c):Me(k(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(P(S=Ae(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)ke(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(j(C,3)===110)break;case 108:if(j(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?ke(e,S,S,r&&P(Ae(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):ke(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+N(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&me()==125)continue}switch(C+=D(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(N(C)-1)*_,_=1;break;case 64:ge()===45&&(C+=Se(he())),f=ge(),u=d=N(y=C+=De(_e())),v++;break;case 45:m===45&&N(C)==2&&(h=0)}}return a}function Ae(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=ie(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=M(e,f+1,f=ee(g=o[h])),b=e;v<m;++v)(b=re(g>0?p[v]+` `+y:k(y,/&\f/g,p[v])))&&(c[_++]=b);return ue(e,t,n,i===0?x:s,c,l,u,d)}function je(e,t,n,r){return ue(e,t,n,b,D(pe()),M(e,2,-2),0,r)}function Me(e,t,n,r,i){return ue(e,t,n,S,M(e,0,r),M(e,r+1,-1),r,i)}function Ne(e,t,n){switch(ne(e,t)){case 5103:return y+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return y+e+e;case 4855:return y+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return v+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return y+e+v+e+_+e+e;case 5936:switch(j(e,t+11)){case 114:return y+e+_+k(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return y+e+_+k(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return y+e+_+k(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return y+e+_+e+e;case 6165:return y+e+_+`flex-`+e+e;case 5187:return y+e+k(e,/(\w+).+(:[^]+)/,y+`box-$1$2`+_+`flex-$1$2`)+e;case 5443:return y+e+_+`flex-item-`+k(e,/flex-|-self/g,``)+(O(e,/flex-|baseline/)?``:_+`grid-row-`+k(e,/flex-|-self/g,``))+e;case 4675:return y+e+_+`flex-line-pack`+k(e,/align-content|flex-|-self/g,``)+e;case 5548:return y+e+_+k(e,`shrink`,`negative`)+e;case 5292:return y+e+_+k(e,`basis`,`preferred-size`)+e;case 6060:return y+`box-`+k(e,`-grow`,``)+y+e+_+k(e,`grow`,`positive`)+e;case 4554:return y+k(e,/([^-])(transform)/g,`$1`+y+`$2`)+e;case 6187:return k(k(k(e,/(zoom-|grab)/,y+`$1`),/(image-set)/,y+`$1`),e,``)+e;case 5495:case 3959:return k(e,/(image-set\([^]*)/,y+"$1$`$1");case 4968:return k(k(e,/(.+:)(flex-)?(.*)/,y+`box-pack:$3`+_+`flex-pack:$3`),/space-between/,`justify`)+y+e+e;case 4200:if(!O(e,/flex-|baseline/))return _+`grid-column-align`+M(e,t)+e;break;case 2592:case 3360:return _+k(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,O(e.props,/grid-\w+-end/)})?~A(e+(n=n[t].value),`span`,0)?e:_+k(e,`-start`,``)+e+_+`grid-row-span:`+(~A(n,`span`,0)?O(n,/\d+/):O(n,/\d+/)-+O(e,/\d+/))+`;`:_+k(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return O(e.props,/grid-\w+-start/)})?e:_+k(k(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return k(e,/(.+)-inline(.+)/,y+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(N(e)-1-t>6)switch(j(e,t+1)){case 109:if(j(e,t+4)!==45)break;case 102:return k(e,/(.+:)(.+)-([^]+)/,`$1`+y+`$2-$3$1`+v+(j(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~A(e,`stretch`,0)?Ne(k(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return k(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return _+n+`:`+r+s+(i?_+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(j(e,t+6)===121)return k(e,`:`,`:`+y)+e;break;case 6444:switch(j(e,j(e,14)===45?18:11)){case 120:return k(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+y+(j(e,14)===45?`inline-`:``)+`box$3$1`+y+`$2$3$1`+_+`$2box$3`)+e;case 100:return k(e,`:`,`:`+_)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return k(e,`scroll-`,`scroll-snap-`)+e}return e}function Pe(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Fe(e,t,n,r){switch(e.type){case E:if(e.children.length)break;case C:case w:case S:return e.return=e.return||e.value;case b:return``;case T:return e.return=e.value+`{`+Pe(e.children,r)+`}`;case x:if(!N(e.value=e.props.join(`,`)))return``}return N(n=Pe(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Ie(e){var t=ie(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Le(e){return function(t){t.root||(t=t.return)&&e(t)}}function Re(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case S:e.return=Ne(e.value,e.length,n);return;case T:return Pe([de(e,{value:k(e.value,`@`,`@`+y)})],r);case x:if(e.length)return F(n=e.props,function(t){switch(O(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:fe(de(e,{props:[k(t,/:(read-\w+)/,`:`+v+`$1`)]})),fe(de(e,{props:[t]})),te(e,{props:ae(n,r)});break;case`::placeholder`:fe(de(e,{props:[k(t,/:(plac\w+)/,`:`+y+`input-$1`)]})),fe(de(e,{props:[k(t,/:(plac\w+)/,`:`+v+`$1`)]})),fe(de(e,{props:[k(t,/:(plac\w+)/,_+`input-$1`)]})),fe(de(e,{props:[t]})),te(e,{props:ae(n,r)})}return``})}}var ze=g(),z=c(u()),Be=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Ve=`active`,He=`data-styled-version`,Ue=`6.5.2`,We=`/*!sc*/
`,Ge=typeof window<`u`&&typeof document<`u`;function Ke(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var qe=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:Ke(`REACT_APP_SC_DISABLE_SPEEDY`)??Ke(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),Je=`sc-keyframes-`,Ye={};function B(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Xe=new Map,Ze=new Map,Qe=1,$e=e=>{if(Xe.has(e))return Xe.get(e);for(;Ze.has(Qe);)Qe++;let t=Qe++;return Xe.set(e,t),Ze.set(t,e),t},et=e=>Ze.get(e),tt=(e,t)=>{Qe=t+1,Xe.set(e,t),Ze.set(t,e)},nt=Object.freeze([]),rt=Object.freeze({});function it(e,t,n=rt){return e.theme!==n.theme&&e.theme||t||n.theme}var at=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ot=/(^-|-$)/g;function st(e){return e.replace(at,`-`).replace(ot,``)}var ct=/(a)(d)/gi,lt=e=>String.fromCharCode(e+(e>25?39:97));function ut(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=lt(t%52)+n;return(lt(t%52)+n).replace(ct,`$1-$2`)}var dt=5381,ft=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},pt=e=>ft(dt,e);function mt(e){return ut(pt(e)>>>0)}function ht(e){return e.displayName||e.name||`Component`}function gt(e){return typeof e==`string`&&!0}function _t(e){return gt(e)?`styled.${e}`:`Styled(${ht(e)})`}var vt=Symbol.for(`react.memo`),yt=Symbol.for(`react.forward_ref`),bt={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},V={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},St={[yt]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[vt]:xt};function Ct(e){return(`type`in(t=e)&&t.type.$$typeof)===vt?xt:`$$typeof`in e?St[e.$$typeof]:bt;var t}var wt=Object.defineProperty,Tt=Object.getOwnPropertyNames,H=Object.getOwnPropertySymbols,Et=Object.getOwnPropertyDescriptor,Dt=Object.getPrototypeOf,Ot=Object.prototype;function kt(e,t,n){if(typeof t!=`string`){let r=Dt(t);r&&r!==Ot&&kt(e,r,n);let i=Tt(t).concat(H(t)),a=Ct(e),o=Ct(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in V||n&&n[s]||o&&s in o||a&&s in a)){let n=Et(t,s);try{wt(e,s,n)}catch{}}}}return e}function At(e){return typeof e==`function`}var jt=Symbol.for(`react.forward_ref`);function Mt(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===jt&&`styledComponentId`in e}function Nt(e,t){return e&&t?e+` `+t:e||t||``}function Pt(e,t){return e.join(t||``)}function Ft(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function It(e,t,n=!1){if(!n&&!Ft(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=It(e[n],t[n]);else if(Ft(t))for(let n in t)e[n]=It(e[n],t[n]);return e}function Lt(e,t){Object.defineProperty(e,"toString",{value:t})}var Rt=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw B(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+We;return t}},zt=`style[${Be}][${He}="${Ue}"]`,Bt=RegExp(`^${Be}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Vt=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Ht=e=>{if(!e)return document;if(Vt(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Vt(t))return t}return document},Ut=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},Wt=(e,t)=>{let n=(t.textContent??``).split(We),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Bt);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(tt(n,t),Ut(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},Gt=e=>{let t=Ht(e.options.target).querySelectorAll(zt);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Be)!==Ve&&(Wt(e,r),r.parentNode&&r.parentNode.removeChild(r))}},Kt=!1;function qt(){if(!1!==Kt)return Kt;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return Kt=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return Kt=t.getAttribute(`content`)||void 0}return Kt=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var U=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Be}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Be,Ve),i.setAttribute(He,Ue);let s=t||qt();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Jt=class{constructor(e,t){this.element=U(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw B(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},W=class{constructor(e,t){this.element=U(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Yt=Ge,Xt={isServer:!Ge,useCSSOMInjection:!qe},Zt=class e{static registerId(e){return $e(e)}constructor(e=rt,t={},n){this.options=Object.assign(Object.assign({},Xt),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ge&&Yt&&(Yt=!1,Gt(this)),Lt(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=et(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Be+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&Ge&&Gt(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Ge&&t.target!==this.options.target&&Ht(this.options.target)!==Ht(t.target)&&Gt(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Jt(t,n):new W(t,n))(this.options),new Rt(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){$e(e),e.startsWith(Je)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules($e(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup($e(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},Qt=new WeakSet,$t={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function en(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in $t||e.startsWith(`--`)?String(t).trim():t+`px`}var tn=47;function nn(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var rn=Symbol.for(`sc-keyframes`);function an(e){return typeof e==`object`&&!!e&&rn in e}function on(e){return At(e)&&!(e.prototype&&e.prototype.isReactComponent)}var sn=e=>e==null||!1===e||e===``,cn=Symbol.for(`react.client.reference`);function ln(e){return e.$$typeof===cn}function un(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!sn(r)&&(Array.isArray(r)&&Qt.has(r)||At(r)?t.push(nn(n)+`:`,r,`;`):Ft(r)?(t.push(n+` {`),un(r,t),t.push(`}`)):t.push(nn(n)+`: `+en(n,r)+`;`))}}function dn(e,t,n,r,i=[]){if(sn(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return ln(e)?i:on(e)&&t?dn(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)dn(e[a],t,n,r,i);return i}return Mt(e)?(i.push(`.${e.styledComponentId}`),i):an(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):ln(e)?i:Ft(e)&&e.toString===Object.prototype.toString?(un(e,i),i):(i.push(e.toString()),i)}var G=pt(Ue),fn=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=ft(G,t),this.baseStyle=n,Zt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(on(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Pt(dn(r,e,t,n)))}else i+=Pt(dn(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=ut(ft(ft(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Nt(r,a)}}return r}},pn=/&/g;function mn(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function hn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==tn||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===tn&&(o=!1,c++);else if(l!==34&&l!==39||mn(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function gn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&gn(a.children,t)}return e}function _n({options:e=rt,plugins:t=nt}=rt){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(pn,r).replace(i,a))}),e.prefix&&o.push(Re),o.push(Fe);let s=[],c=Ie(o.concat(Le(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return hn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||mn(e,o)){if(s===0){if(t===tn&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==tn);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===tn)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===tn&&o+1<r&&e.charCodeAt(o+1)===tn){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:hn(i)):l===0?e:hn(e)}(t),d=Oe(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=gn(d,e.namespace)),s=[],Pe(d,c),s},u=e,d=dt;for(let e=0;e<t.length;e++)t[e].name||B(15),d=ft(d,t[e].name);return u!=null&&u.namespace&&(d=ft(d,u.namespace)),u!=null&&u.prefix&&(d=ft(d,`p`)),l.hash=d===dt?``:d.toString(),l}var vn=new Zt,yn=_n(),bn=z.createContext({shouldForwardProp:void 0,styleSheet:vn,stylis:yn,stylisPlugins:void 0});bn.Consumer;function xn(){return z.useContext(bn)}var Sn=z.createContext(void 0);Sn.Consumer;function Cn(e){let t=z.useContext(Sn),n=z.useMemo(()=>function(e,t){if(!e)throw B(14);if(At(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw B(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?z.createElement(Sn.Provider,{value:n},e.children):null}var wn=Object.prototype.hasOwnProperty,Tn={};function En(e,t){let n=typeof e==`string`?st(e):`sc`;Tn[n]=(Tn[n]||0)+1;let r=n+`-`+mt(Ue+n+Tn[n]);return t?t+`-`+r:r}function Dn(e,t,n){let r=Mt(e),i=e,a=!gt(e),{attrs:o=nt,componentId:s=En(t.displayName,t.parentComponentId),displayName:c=_t(e)}=t,l=t.displayName&&t.componentId?st(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new fn(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=z.useContext(Sn),u=xn(),d=e.shouldForwardProp||u.shouldForwardProp,f=it(t,l,a)||rt,p,m;{let e=z.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(wn.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=At(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=Nt(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=Nt(r.className,t.className)),r}(r,t,f),m=i.generateAndInjectStyles(p,u.styleSheet,u.stylis);let n=0;for(let e in t)wn.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,g=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),_=Nt(o,s);return m&&(_+=` `+m),p.className&&(_+=` `+p.className),g[gt(h)&&h.includes(`-`)?`class`:`className`]=_,n&&(g.ref=n),(0,z.createElement)(h,g)}(m,e,t)}p.displayName=c;let m=z.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Nt(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)It(e,n,!0);return e}({},i.defaultProps,e):e}}),Lt(m,()=>`.${m.styledComponentId}`),a&&kt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var On=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function kn(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var An=e=>(Qt.add(e),e);function jn(e,...t){if(At(e)||Ft(e))return An(dn(kn(nt,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?dn(n):An(dn(kn(n,t)))}function Mn(e,t,n=rt){if(!t)throw B(1,t);let r=(r,...i)=>e(t,n,jn(r,...i));return r.attrs=r=>Mn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Mn(e,t,Object.assign(Object.assign({},n),r)),r}var Nn=e=>Mn(Dn,e),K=Nn;On.forEach(e=>{K[e]=Nn(e)});var Pn=class{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){let n=e[t];if(At(n)&&!Mt(n))return!1}return!0}(e),Zt.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){let i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{let a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}let a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){let t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){let i=Pt(dn(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,``)};return this.instanceRules.set(e,a),a}rebuildGroup(e){let t=this.componentId;e.clearRules(t);for(let n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}};function Fn(e,...t){let n=jn(e,...t),r=`sc-global-${mt(JSON.stringify(n))}`,i=new Pn(n,r),a=e=>{let t=xn(),n=z.useContext(Sn),a;{let e=z.useRef(null);e.current===null&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{let s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],c=z.useRef(i);z.useLayoutEffect(()=>{t.styleSheet.server||(c.current!==i&&(t.styleSheet.clearRules(r),c.current=i),o(a,e,t.styleSheet,n,t.stylis))},s),z.useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(a,t.styleSheet)},[a,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,Ye,n,o);else{let s=Object.assign(Object.assign({},t),{theme:it(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return z.memo(a)}var In,Ln=class{constructor(e,t){this[In]=!0,this.inject=(e,t=yn)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=Je+e,this.rules=t,$e(this.id),Lt(this,()=>{throw B(12,String(this.name))})}getName(e=yn){return e.hash?this.name+ut(e.hash>>>0):this.name}};function Rn(e,...t){let n=Pt(jn(e,...t));return new Ln(mt(n),n)}In=rn,`${Be}`,`${Be}`,`${Be}`;var zn=`/project-forecast/assets/logo--nZl-i6T.png`,Bn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAACXFJREFUeAHNWnlsFNcZf/NmZu/Te/jCNjiEw0khEMCBioQkHCUlpBJHmjQxUKI0SpOG/tGDVsE0xChq+geBqIpSVeCQqpizGCjgUA41KEBEUy61TewYX8Jr7+G9vJ7ZOfq99a7rxsfOzG5QftLIa828N9/vfd/7rjcUyg1U+q/sdk+1FpaXLXAUuFbYbUXVepO1nGV1DlmW9KkHKWpAEJKRRH+0LRzuuRTp9R3vav/scigUCg+fB2kEhbQBwyUVFEy2PbBg0ebyife9hGnWkeiPIFFIIlkeXx4ghWiaRUaLDYlJPtRx+9b71y8frfP7/VG4TcMlIpVQS4QQkGfMWOCZNmf5cZvdPTcc6pGJ4CCbpkUByjIF09qdLioSCV25en7f6paWmx3pd0lK51HzcrJS8uqa1z+yFRQ+FunrlUB2jPIIWZJkm8NLRcO95w7U/+YxpEI7SoikVmbBkh8s/dbMRacDvZ0CmAaDvkaAhiWXpxT/+/rHT1xo+uBkWs5x7TUbESKwsHrD1gajwbIWNqoIJGh0NwBkDGYrTiT6Dx/cvWVVRpaxHh+PSGrg+ld3fp6I91VKkqSOAOwbCa7Mvoc9hDBWb4kUxoLJYm/ds/O1KfAvC1dy1OfGGD9I4pUd3fFo0A2zZSdBDQrv6wnJRoNBrJxULJYUu2mLxcDBlqVi/Qm2645fbm3txokBjvF6HCnvpQRgaoLF6gzseXdTERpDM9RYIq1/9Z3P45FApRISGFOoo8svL140m9tYsxyXFLlZUZQoPplEojzoeGjQBsswSMcwMhAS/rj3pHjm3FVDWakbiVL28EHIWO2u1t07f0I0M8Kjjboka9e/cRAefQq8SNZNzdAYtXf0iA31tUm7w2yIxvqzrjRx11azCQWDEf7ZF96ky0q8tChl97SYIo+JRw7Ub10z4t5X/qe/vbRmucFkXqWEBFmG2+0++WhDnUizlCEWTygyF/IMmBpi9Yyucd92sa3DJysZJ8kibTRbVi9c/OwyNOiaRyWS8tn3z1z4V4jQigIRzwnopReeTGCG0mlJEojwEIl0P/rhkxzPJxWN6e+PSlUPPHoKDbrjIfmHExHXrKs9G+jplJDCQBcIRaXvfXehjhtQJsRo4IDAqqceYfyBPkV5FqFOYtmqdVub0LB9khGYrqx8sNzq8DwKq6TYR3rdNtFsMtCaM7Y0jAYd7XE7lKcjEJDtDtfjkCp5UZpDRmhxzsMrD5K0A6mA2WwUZElzwjoEiFGUxWxSpdZIn1+cMmvJMZTWCiFCkSzWVuCdq0YbBHxSYBGVqz5QKlomBVFV2kMyDIeraB4pH1BmL8x86JFfh4O9qpcWstbc1TE0F6V6rkioV5750MOb4aecSsvLJ933ooxUWdU3AiQFmjBx+svkN+N0VtppRufI3T7uPigoZRhaZyfmhQvLJ1aTyk71JJCWROMxTSYxYi6YIRqNUWROtegH2d2lrvn09BnzN5nMznlIJcLhONryixpeb9SxKEckOB5VTZ+UbDrzKaPX61SNhWwfJXmhD1us7motNX8yKQhzZ03TZavPlQkjo3mzp7F8UhS0jLU5PNXYaLZWIA2AZJGCyjR/WwsEInMiDTCarBUYNrodaQS8Nm/ul0DrZNB2smNYCHVGmQEEMQjqedNILisC5qWHRZU0CQN7hLDIj0Zkol0Kelyq21n/Gw9+lEMaAHkWffLsFV6v06bQDGCfIZvFjI43fcIZTXpNjQ1YBA4LAh9GGmA269HWuj2kmNKewwPsNjPa9YfDiV3vHTFCfY+0gBe4MObi8dtIA0gpXlFeRJ298A+RYbS1uYjn5rmk8JfGjw1ulw1p9eRcf6wNh/t8lymNW1bH0ujAkfN0gc2iSQSjUYf2HTonFBe5KM3hCISPhHs/wcFg+zGa0SMtIC8fGODZazdbeLWCkEBmgrbRnxrOsCyrvefHMiwKBNpP4N5O/yUIKEgrXC47qt2+hyp0OVVRsZqM6O139iULvU46l+TAaLIhX/u/LmO//z9RURT6SFMQaQCpEKFHozt49PyAnlWWdhFtdPtC/MmmywaGyaEPDjLDMUYQEElViO1fXP89xlhzcLOYDbC6+w2QvSoKBF6XU9rw8m9xWakH5ZSqQV3Y+uWN91CmQrxx9eJbdocHaQURxmTSUxzHK1oMyDchrWAUdRjHg93ppm592vgW+Z2qEIl5BQN3LpF2PrpLyDW3IbJGIj2X0qdccsZAqWs3zq20OT2aDZbYvYplgK2V25oRWS9eOExapymXlxFcbv7s7/6w/04TCKT+/A6WlzRlC5w2RbbC0gw2GQ2I0rgtiYzhoO9MV/P1TpQ+0RquAerQh3XfcXnLaDVkiDCtbd2odnMNH4nHFQUEf18fVVe7UfyiuUtWTQZkc3kn0Ic+2LYEDev/DidCdI1vXP3b43Cwkv0oAdQQDEWIjfD762u56jlVRkFh9kqcQ0V5of7on7cloVPJdfuCCrUDQdRsp2/883ymiT30wlFHr6p5fS/L6p+B+DKCUKqTHksQzyO8WbtRePD+e/U9oT6K0pDnkHZOgc2K7nQHuG1vf4iaWzr1xcUuNFb3Eo5qBEqWjjTsrl074t4oz6cOUdb9eMeteCw0JXPwSeTkeAHSgbD4859+P7li6Xy9LxDKS2H1/4T2AqGuEYTgEcFsczTX79o0HY1yODqWICm1rXtlR0c8GioCEkx7p1/a8PwyfuNzT+hCkSgWBQnlrz4cm1AJEBJFcvTm6IWjtxKk4ugtg9SAZ1783c0JxbZ73/jlOjzA80yC5xBF5ZnBV5Ah1A2Efrblfcpsdd6uf/e1qWick91sEqU009bW1uB0uddG++MSxnRePxIYCyTQWC1mHAkF95eWlj6NshxPZxOKeAVcUVHx9Kmm00tLPB5oVkgaC2uFkFNfQIjFHhc+0Xh0WZoEkXPcnpfaTzjE5ubmj8oqJi72B0MSpnH+tCOnzgglj9OJW9vbz0y9555l6TuKUgA1gqS0M3ny5CVrnn+ulIvHrhS6CsiBvoxyy2FlGtOyu8CBErH41V9t3lwIJJam733tuV8qvlRVVVmOnzpVFwyHA5CiyBDZ5e5AUL7jD4x7dQcCcigak5PgjmLxeOjE6dPbV65cmanuNGk5V/cz9MFYdXW1bf7ChfNmzZq9YsrUafMLi7wVJqPJnvnwDGMGlBgL+3zdt1u+bLly/dq1Yxdv3rx0sbExivLw4dl/AddFSaEKS67DAAAAAElFTkSuQmCC`,Vn={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Hn=z.createContext&&z.createContext(Vn),Un=[`attr`,`size`,`title`];function Wn(e,t){if(e==null)return{};var n,r,i=Gn(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Gn(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Kn(){return Kn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Kn.apply(null,arguments)}function qn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Jn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?qn(Object(n),!0).forEach(function(t){Yn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Yn(e,t,n){return(t=Xn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xn(e){var t=Zn(e,`string`);return typeof t==`symbol`?t:t+``}function Zn(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Qn(e){return e&&e.map((e,t)=>z.createElement(e.tag,Jn({key:t},e.attr),Qn(e.child)))}function $n(e){return t=>z.createElement(er,Kn({attr:Jn({},e.attr)},t),Qn(e.child))}function er(e){var t=t=>{var n=e.attr,r=e.size,i=e.title,a=Wn(e,Un),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),z.createElement(`svg`,Kn({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:Jn(Jn({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&z.createElement(`title`,null,i),e.children)};return Hn===void 0?t(Vn):z.createElement(Hn.Consumer,null,e=>t(e))}function tr(e){return $n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`18`,y1:`6`,x2:`6`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`6`,x2:`18`,y2:`18`},child:[]}]})(e)}function nr(e){return $n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`3 6 5 6 21 6`},child:[]},{tag:`path`,attr:{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`},child:[]},{tag:`line`,attr:{x1:`10`,y1:`11`,x2:`10`,y2:`17`},child:[]},{tag:`line`,attr:{x1:`14`,y1:`11`,x2:`14`,y2:`17`},child:[]}]})(e)}function rr(e){return $n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`5`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`1`,x2:`12`,y2:`3`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`21`,x2:`12`,y2:`23`},child:[]},{tag:`line`,attr:{x1:`4.22`,y1:`4.22`,x2:`5.64`,y2:`5.64`},child:[]},{tag:`line`,attr:{x1:`18.36`,y1:`18.36`,x2:`19.78`,y2:`19.78`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`12`,x2:`3`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`12`,x2:`23`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`4.22`,y1:`19.78`,x2:`5.64`,y2:`18.36`},child:[]},{tag:`line`,attr:{x1:`18.36`,y1:`5.64`,x2:`19.78`,y2:`4.22`},child:[]}]})(e)}function ir(e){return $n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`11`,cy:`11`,r:`8`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`},child:[]}]})(e)}function ar(e){return $n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`23 4 23 10 17 10`},child:[]},{tag:`polyline`,attr:{points:`1 20 1 14 7 14`},child:[]},{tag:`path`,attr:{d:`M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15`},child:[]}]})(e)}function or(e){return $n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z`},child:[]}]})(e)}function sr(e){return $n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`10`,r:`3`},child:[]}]})(e)}function cr(e){return $n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z`},child:[]}]})(e)}function lr(e){return $n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`3`},child:[]}]})(e)}function ur(e){return $n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`1`,x2:`23`,y2:`23`},child:[]}]})(e)}function dr(e){return $n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z`},child:[]}]})(e)}function fr(e){return $n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z`},child:[]}]})(e)}function pr(e){return $n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`20 6 9 17 4 12`},child:[]}]})(e)}function mr(e){return $n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`13`,r:`4`},child:[]}]})(e)}function hr(e){return $n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`12`,y1:`19`,x2:`12`,y2:`5`},child:[]},{tag:`polyline`,attr:{points:`5 12 12 5 19 12`},child:[]}]})(e)}function gr(e){return $n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`5`,y1:`12`,x2:`19`,y2:`12`},child:[]},{tag:`polyline`,attr:{points:`12 5 19 12 12 19`},child:[]}]})(e)}var _r=Rn`
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
`,vr=K.button`
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
`,yr=K.span`
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

  ${({$active:e})=>e&&jn`
      animation: ${_r} 0.5s ease;
    `}
`,br=K.span`
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

  ${vr}:hover & {
    box-shadow:
      0 4px 10px rgba(0, 0, 0, 0.22);
  }

  ${vr}:active & {
    transform: ${({$dark:e})=>e?`translateX(44px) rotate(360deg) scale(0.92)`:`translateX(0) rotate(0deg) scale(0.92)`};
  }
`,xr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),q=o(((e,t)=>{t.exports=xr()}))();function Sr({darkMode:e,onToggle:t}){return(0,q.jsxs)(vr,{type:`button`,$dark:e,onClick:t,"aria-label":`Toggle theme`,children:[(0,q.jsx)(yr,{$active:!e,children:(0,q.jsx)(rr,{})}),(0,q.jsx)(br,{$dark:e,children:e?(0,q.jsx)(or,{}):(0,q.jsx)(rr,{})}),(0,q.jsx)(yr,{$active:e,children:(0,q.jsx)(or,{})})]})}var Cr=K.header`
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;

  min-height: ${({$scrolled:e})=>e?`62px`:`72px`};

  display: flex;
  align-items: center;

  padding: ${({$scrolled:e})=>e?`0 32px`:`0 40px`};

  z-index: 1000;

  box-sizing: border-box;

  background: ${({theme:e})=>e.background};

  color: ${({theme:e})=>e.text};

  box-shadow: ${({$scrolled:e})=>e?`0 6px 22px rgba(0, 0, 0, 0.16)`:`0 4px 16px rgba(0, 0, 0, 0.12)`};

  backdrop-filter: ${({$scrolled:e})=>e?`blur(10px)`:`none`};

  transition:
    min-height 0.3s ease,
    padding 0.3s ease,
    background 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease,
    backdrop-filter 0.3s ease;

  @media (max-width: 768px) {
    min-height: ${({$scrolled:e})=>e?`58px`:`64px`};

    padding: ${({$scrolled:e})=>e?`0 16px`:`0 20px`};
  }
`,wr=K.a`
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
      filter 0.3s ease;
  }

  &:hover img {
    transform: translateY(-2px) scale(1.06);
  }

  &:active img {
    transform: translateY(0) scale(0.98);
  }

  @media (max-width: 768px) {
    img {
      width: 80px;
    }
  }
`,Tr=K.nav`
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
`,Er=K.a`
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
    transition: transform 0.3s ease;
  }

  &:hover {
    opacity: 1;
    transform: translateY(-1px);
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:active {
    transform: translateY(0);
  }
`,Dr=K.div`
  display: flex;
  align-items: center;

  margin-right: 25px;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1100px) {
    margin-right: 18px;
  }
`,Or=K.div`
  display: flex;
  align-items: center;

  gap: 15px;

  @media (max-width: 768px) {
    display: none;
  }
`,kr=K.button`
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
  transform: scale(0.94);

  box-shadow:
    0 2px 6px
    rgba(0, 0, 0, 0.1);
}
`,Ar=K.div`
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
`,jr=K.img`
  width: 100% !important;
  height: 100% !important;

  display: block;

  object-fit: cover;
  object-position: center;

  border-radius: 50%;
`,Mr=K.button`
  display: none;

  margin-left: auto;

  border: none;
  background: transparent;

  color: ${({theme:e})=>e.text};

  font-size: 14px;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;

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
`,Nr=K.div`
  position: absolute;

  top: 64px;
  left: 0;

  width: 100%;

  padding: 20px;

  box-sizing: border-box;

  background: ${({theme:e})=>e.background};
  color: ${({theme:e})=>e.text};

  border-top: 1px solid
    ${({theme:e})=>e.secondary};

  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.12);

  z-index: 100;

  transform-origin: top;

  transform: ${({$open:e})=>e?`translateY(0) scaleY(1)`:`translateY(-12px) scaleY(0.96)`};

  opacity: ${({$open:e})=>+!!e};

  visibility: ${({$open:e})=>e?`visible`:`hidden`};

  transition:
    transform 0.35s
      cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.25s ease,
    visibility 0.35s ease;

  @media (min-width: 769px) {
    display: none;
  }
`,Pr=K.div`
  display: grid;

  grid-template-columns: 1fr auto;

  align-items: start;

  column-gap: 20px;
`,Fr=K.nav`
  display: flex;

  flex-direction: column;

  gap: 15px;
`,Ir=K.div`
  display: flex;

  flex-direction: column;

  align-items: flex-end;

  gap: 15px;
`,Lr=K.div`
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
`,Rr=K.button`
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
`,zr=K.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;function Br({user:e,avatar:t,onSignUp:n,onProfile:r,darkMode:i,onToggle:a}){let[o,s]=(0,z.useState)(!1),[c,l]=(0,z.useState)(!1);return(0,z.useEffect)(()=>{let e=()=>{l(window.scrollY>40)};return window.addEventListener(`scroll`,e),e(),()=>{window.removeEventListener(`scroll`,e)}},[]),(0,q.jsxs)(Cr,{$scrolled:c,children:[(0,q.jsx)(wr,{href:`/`,$dark:i,$scrolled:c,children:(0,q.jsx)(`img`,{src:zn,alt:`24 forecast`})}),(0,q.jsxs)(Tr,{children:[(0,q.jsx)(Er,{href:`#about`,children:`Who we are`}),(0,q.jsx)(Er,{href:`#contacts`,children:`Contacts`}),(0,q.jsx)(Er,{href:`#menu`,children:`Menu`})]}),(0,q.jsx)(Dr,{children:(0,q.jsx)(Sr,{darkMode:i,onToggle:a})}),(0,q.jsxs)(Or,{children:[!e&&(0,q.jsx)(kr,{type:`button`,onClick:n,children:`Sign up`}),(0,q.jsx)(Ar,{onClick:r,role:`button`,tabIndex:0,"aria-label":`Open profile`,children:t?(0,q.jsx)(jr,{src:t,alt:`Profile`}):(0,q.jsx)(`img`,{src:Bn,alt:`Profile`})})]}),(0,q.jsxs)(Mr,{type:`button`,onClick:()=>s(e=>!e),children:[`Menu`,o?` →`:` ↓`]}),(0,q.jsxs)(Nr,{$open:o,children:[(0,q.jsxs)(Pr,{children:[(0,q.jsxs)(Fr,{children:[(0,q.jsx)(Er,{href:`#about`,children:`Who we are`}),(0,q.jsx)(Er,{href:`#contacts`,children:`Contacts`}),(0,q.jsx)(Er,{href:`#menu`,children:`Menu`})]}),(0,q.jsxs)(Ir,{children:[(0,q.jsx)(Lr,{onClick:r,children:t?(0,q.jsx)(jr,{src:t,alt:`Profile`}):(0,q.jsx)(`img`,{src:Bn,alt:`Profile`})}),!e&&(0,q.jsx)(Rr,{type:`button`,onClick:n,children:`Sign Up`})]})]}),(0,q.jsx)(zr,{children:(0,q.jsx)(Sr,{darkMode:i,onToggle:a})})]})]})}var Vr=`/project-forecast/assets/weather-B4Nk2iEj.png`,Hr=K.section`
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
`,Ur=K.div`
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
    background: rgba(0, 0, 0, 0.48);
  }
`,Wr=K.div`
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
`,Gr=K.h1`
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
`,Kr=K.div`
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
`,qr=K.p`
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
`,Jr=K.div`
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
`,Yr=K.p`
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
`,Xr=K.div`
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
`,Zr=K.form`
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
`,Qr=K.input`
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

  @media screen and (min-width: 564px) {
    height: 42px;
    padding: 0 18px;
    font-size: 13px;
  }

  @media screen and (min-width: 1160px) {
    padding: 0 20px;
    font-size: 14px;
  }
`,$r=K.button`
  width: 40px;
  height: 40px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;

  background: ${({theme:e})=>e.button};
  color: #111111;

  cursor: pointer;

  transition:
    background 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: ${({theme:e})=>e.button};

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
`,ei=K.div`
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
    background: ${({theme:e})=>e.button};

    border-radius: 10px;

    transition:
      background 0.25s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.button};

    box-shadow:
      0 0 5px
      ${({theme:e})=>`${e.button}66`};
  }
`,ti=K.button`
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

    color: ${({theme:e})=>e.button};

    transition:
      color 0.25s ease,
      transform 0.2s ease;
  }

  &:hover {
    background: ${({theme:e})=>`${e.button}18`};

    svg {
      color: ${({theme:e})=>e.button};

      transform: translateY(-1px) scale(1.08);
    }
  }

  &:active {
    transform: scale(0.99);
  }

  @media screen and (min-width: 564px) {
    padding: 12px 16px;

    gap: 13px;
  }
`,ni=K.span`
  min-width: 0;

  display: flex;
  flex-direction: column;

  gap: 3px;
`,ri=K.span`
  color: #111111;

  font-size: 13px;
  font-weight: 600;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 564px) {
    font-size: 14px;
  }
`,ii=K.span`
  color: #888888;
  font-size: 11px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 564px) {
    font-size: 12px;
  }
`,ai=K.div`
  padding: 13px 16px;
  color: #888888;
  font-size: 12px;
  text-align: center;
`,oi=K.button`
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
`,si=`b5ad39bd417cd476cc1c17d9b2b53496`;function ci({onCityAdd:e}){let[t,n]=(0,z.useState)(``),[r,i]=(0,z.useState)([]),[a,o]=(0,z.useState)(!1),[s,c]=(0,z.useState)(new Date);(0,z.useEffect)(()=>{let e=setInterval(()=>{c(new Date)},1e3);return()=>clearInterval(e)},[]),(0,z.useEffect)(()=>{let e=t.trim();if(e.length<2){i([]);return}let n=setTimeout(async()=>{try{o(!0);let t=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(e)}&limit=5&appid=${si}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json();i(n)}catch(e){console.error(`Помилка отримання підказок:`,e),i([])}finally{o(!1)}},350);return()=>clearTimeout(n)},[t]);let l=async e=>{let t=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(e)}&limit=1&appid=${si}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json();if(n.length===0)throw Error(`Місто не знайдено`);return n[0]},u=async(r=null)=>{let a=r?r.name:t.trim();if(a)try{let t=r||await l(a),o=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t.lat}&lon=${t.lon}&appid=${si}&units=metric`);if(!o.ok)throw Error(`Weather HTTP error: ${o.status}`);let s=await o.json(),c={id:`${t.lat}-${t.lon}`,name:t.name,country:t.country,temperature:s.main.temp,icon:s.weather[0].icon,description:s.weather[0].description,timezone:s.timezone,latitude:t.lat,longitude:t.lon};e&&e(c),n(``),i([])}catch(e){console.error(`Помилка пошуку:`,e)}},d=e=>{n(e.name),i([]),u(e)},f=e=>{e.preventDefault(),u()},p=s.toLocaleString(`en-US`,{month:`long`}),m=s.getFullYear(),h=s.toLocaleString(`en-US`,{weekday:`long`}),g=s.getDate(),_=e=>{if(e>=11&&e<=13)return`th`;switch(e%10){case 1:return`st`;case 2:return`nd`;case 3:return`rd`;default:return`th`}},v=String(s.getHours()).padStart(2,`0`),y=String(s.getMinutes()).padStart(2,`0`);return(0,q.jsxs)(Hr,{id:`about`,children:[(0,q.jsx)(Ur,{style:{backgroundImage:`url(${Vr})`}}),(0,q.jsxs)(Wr,{children:[(0,q.jsx)(Gr,{children:`Weather dashboard`}),(0,q.jsxs)(Kr,{children:[(0,q.jsxs)(qr,{children:[`Create your personal list of`,(0,q.jsx)(`br`,{}),`favorite cities and always be`,(0,q.jsx)(`br`,{}),`aware of the weather.`]}),(0,q.jsx)(Jr,{}),(0,q.jsxs)(Yr,{children:[p,` `,m,(0,q.jsx)(`br`,{}),h,`, `,g,(0,q.jsx)(`sup`,{children:_(g)}),(0,q.jsx)(`br`,{}),v,`:`,y]})]}),(0,q.jsxs)(Xr,{children:[(0,q.jsxs)(Zr,{onSubmit:f,children:[(0,q.jsx)(Qr,{type:`text`,value:t,onChange:e=>n(e.target.value),placeholder:`Search location...`}),t&&(0,q.jsx)(oi,{type:`button`,onClick:()=>{n(``),i([])},"aria-label":`Clear search`,children:(0,q.jsx)(tr,{})}),(0,q.jsx)($r,{type:`submit`,children:(0,q.jsx)(ir,{})})]}),t.trim().length>=2&&(0,q.jsx)(ei,{children:a?(0,q.jsx)(ai,{children:`Searching...`}):r.length>0?r.map((e,t)=>(0,q.jsxs)(ti,{type:`button`,onClick:()=>d(e),children:[(0,q.jsx)(sr,{}),(0,q.jsxs)(ni,{children:[(0,q.jsx)(ri,{children:e.name}),(0,q.jsxs)(ii,{children:[e.state?`${e.state}, `:``,e.country]})]})]},`${e.lat}-${e.lon}-${t}`)):(0,q.jsx)(ai,{children:`Location not found`})})]})]})]})}function li(e){return e+.5|0}var ui=(e,t,n)=>Math.max(Math.min(e,n),t);function di(e){return ui(li(e*2.55),0,255)}function fi(e){return ui(li(e*255),0,255)}function pi(e){return ui(li(e/2.55)/100,0,1)}function mi(e){return ui(li(e*100),0,100)}var hi={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},gi=[...`0123456789ABCDEF`],_i=e=>gi[e&15],vi=e=>gi[(e&240)>>4]+gi[e&15],yi=e=>(e&240)>>4==(e&15),bi=e=>yi(e.r)&&yi(e.g)&&yi(e.b)&&yi(e.a);function xi(e){var t=e.length,n;return e[0]===`#`&&(t===4||t===5?n={r:255&hi[e[1]]*17,g:255&hi[e[2]]*17,b:255&hi[e[3]]*17,a:t===5?hi[e[4]]*17:255}:(t===7||t===9)&&(n={r:hi[e[1]]<<4|hi[e[2]],g:hi[e[3]]<<4|hi[e[4]],b:hi[e[5]]<<4|hi[e[6]],a:t===9?hi[e[7]]<<4|hi[e[8]]:255})),n}var Si=(e,t)=>e<255?t(e):``;function Ci(e){var t=bi(e)?_i:vi;return e?`#`+t(e.r)+t(e.g)+t(e.b)+Si(e.a,t):void 0}var wi=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Ti(e,t,n){let r=t*Math.min(n,1-n),i=(t,i=(t+e/30)%12)=>n-r*Math.max(Math.min(i-3,9-i,1),-1);return[i(0),i(8),i(4)]}function Ei(e,t,n){let r=(r,i=(r+e/60)%6)=>n-n*t*Math.max(Math.min(i,4-i,1),0);return[r(5),r(3),r(1)]}function J(e,t,n){let r=Ti(e,1,.5),i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function Di(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function Oi(e){let t=e.r/255,n=e.g/255,r=e.b/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2,s,c,l;return i!==a&&(l=i-a,c=o>.5?l/(2-i-a):l/(i+a),s=Di(t,n,r,l,i),s=s*60+.5),[s|0,c||0,o]}function ki(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(fi)}function Ai(e,t,n){return ki(Ti,e,t,n)}function ji(e,t,n){return ki(J,e,t,n)}function Mi(e,t,n){return ki(Ei,e,t,n)}function Ni(e){return(e%360+360)%360}function Pi(e){let t=wi.exec(e),n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?di(+t[5]):fi(+t[5]));let i=Ni(+t[2]),a=t[3]/100,o=t[4]/100;return r=t[1]===`hwb`?ji(i,a,o):t[1]===`hsv`?Mi(i,a,o):Ai(i,a,o),{r:r[0],g:r[1],b:r[2],a:n}}function Fi(e,t){var n=Oi(e);n[0]=Ni(n[0]+t),n=Ai(n),e.r=n[0],e.g=n[1],e.b=n[2]}function Ii(e){if(!e)return;let t=Oi(e),n=t[0],r=mi(t[1]),i=mi(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${pi(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}var Li={x:`dark`,Z:`light`,Y:`re`,X:`blu`,W:`gr`,V:`medium`,U:`slate`,A:`ee`,T:`ol`,S:`or`,B:`ra`,C:`lateg`,D:`ights`,R:`in`,Q:`turquois`,E:`hi`,P:`ro`,O:`al`,N:`le`,M:`de`,L:`yello`,F:`en`,K:`ch`,G:`arks`,H:`ea`,I:`ightg`,J:`wh`},Ri={OiceXe:`f0f8ff`,antiquewEte:`faebd7`,aqua:`ffff`,aquamarRe:`7fffd4`,azuY:`f0ffff`,beige:`f5f5dc`,bisque:`ffe4c4`,black:`0`,blanKedOmond:`ffebcd`,Xe:`ff`,XeviTet:`8a2be2`,bPwn:`a52a2a`,burlywood:`deb887`,caMtXe:`5f9ea0`,KartYuse:`7fff00`,KocTate:`d2691e`,cSO:`ff7f50`,cSnflowerXe:`6495ed`,cSnsilk:`fff8dc`,crimson:`dc143c`,cyan:`ffff`,xXe:`8b`,xcyan:`8b8b`,xgTMnPd:`b8860b`,xWay:`a9a9a9`,xgYF:`6400`,xgYy:`a9a9a9`,xkhaki:`bdb76b`,xmagFta:`8b008b`,xTivegYF:`556b2f`,xSange:`ff8c00`,xScEd:`9932cc`,xYd:`8b0000`,xsOmon:`e9967a`,xsHgYF:`8fbc8f`,xUXe:`483d8b`,xUWay:`2f4f4f`,xUgYy:`2f4f4f`,xQe:`ced1`,xviTet:`9400d3`,dAppRk:`ff1493`,dApskyXe:`bfff`,dimWay:`696969`,dimgYy:`696969`,dodgerXe:`1e90ff`,fiYbrick:`b22222`,flSOwEte:`fffaf0`,foYstWAn:`228b22`,fuKsia:`ff00ff`,gaRsbSo:`dcdcdc`,ghostwEte:`f8f8ff`,gTd:`ffd700`,gTMnPd:`daa520`,Way:`808080`,gYF:`8000`,gYFLw:`adff2f`,gYy:`808080`,honeyMw:`f0fff0`,hotpRk:`ff69b4`,RdianYd:`cd5c5c`,Rdigo:`4b0082`,ivSy:`fffff0`,khaki:`f0e68c`,lavFMr:`e6e6fa`,lavFMrXsh:`fff0f5`,lawngYF:`7cfc00`,NmoncEffon:`fffacd`,ZXe:`add8e6`,ZcSO:`f08080`,Zcyan:`e0ffff`,ZgTMnPdLw:`fafad2`,ZWay:`d3d3d3`,ZgYF:`90ee90`,ZgYy:`d3d3d3`,ZpRk:`ffb6c1`,ZsOmon:`ffa07a`,ZsHgYF:`20b2aa`,ZskyXe:`87cefa`,ZUWay:`778899`,ZUgYy:`778899`,ZstAlXe:`b0c4de`,ZLw:`ffffe0`,lime:`ff00`,limegYF:`32cd32`,lRF:`faf0e6`,magFta:`ff00ff`,maPon:`800000`,VaquamarRe:`66cdaa`,VXe:`cd`,VScEd:`ba55d3`,VpurpN:`9370db`,VsHgYF:`3cb371`,VUXe:`7b68ee`,VsprRggYF:`fa9a`,VQe:`48d1cc`,VviTetYd:`c71585`,midnightXe:`191970`,mRtcYam:`f5fffa`,mistyPse:`ffe4e1`,moccasR:`ffe4b5`,navajowEte:`ffdead`,navy:`80`,Tdlace:`fdf5e6`,Tive:`808000`,TivedBb:`6b8e23`,Sange:`ffa500`,SangeYd:`ff4500`,ScEd:`da70d6`,pOegTMnPd:`eee8aa`,pOegYF:`98fb98`,pOeQe:`afeeee`,pOeviTetYd:`db7093`,papayawEp:`ffefd5`,pHKpuff:`ffdab9`,peru:`cd853f`,pRk:`ffc0cb`,plum:`dda0dd`,powMrXe:`b0e0e6`,purpN:`800080`,YbeccapurpN:`663399`,Yd:`ff0000`,Psybrown:`bc8f8f`,PyOXe:`4169e1`,saddNbPwn:`8b4513`,sOmon:`fa8072`,sandybPwn:`f4a460`,sHgYF:`2e8b57`,sHshell:`fff5ee`,siFna:`a0522d`,silver:`c0c0c0`,skyXe:`87ceeb`,UXe:`6a5acd`,UWay:`708090`,UgYy:`708090`,snow:`fffafa`,sprRggYF:`ff7f`,stAlXe:`4682b4`,tan:`d2b48c`,teO:`8080`,tEstN:`d8bfd8`,tomato:`ff6347`,Qe:`40e0d0`,viTet:`ee82ee`,JHt:`f5deb3`,wEte:`ffffff`,wEtesmoke:`f5f5f5`,Lw:`ffff00`,LwgYF:`9acd32`};function zi(){let e={},t=Object.keys(Ri),n=Object.keys(Li),r,i,a,o,s;for(r=0;r<t.length;r++){for(o=s=t[r],i=0;i<n.length;i++)a=n[i],s=s.replace(a,Li[a]);a=parseInt(Ri[o],16),e[s]=[a>>16&255,a>>8&255,a&255]}return e}var Bi;function Vi(e){Bi||(Bi=zi(),Bi.transparent=[0,0,0,0]);let t=Bi[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var Hi=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Ui(e){let t=Hi.exec(e),n=255,r,i,a;if(t){if(t[7]!==r){let e=+t[7];n=t[8]?di(e):ui(e*255,0,255)}return r=+t[1],i=+t[3],a=+t[5],r=255&(t[2]?di(r):ui(r,0,255)),i=255&(t[4]?di(i):ui(i,0,255)),a=255&(t[6]?di(a):ui(a,0,255)),{r,g:i,b:a,a:n}}}function Wi(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${pi(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}var Gi=e=>e<=.0031308?e*12.92:e**(1/2.4)*1.055-.055,Ki=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function qi(e,t,n){let r=Ki(pi(e.r)),i=Ki(pi(e.g)),a=Ki(pi(e.b));return{r:fi(Gi(r+n*(Ki(pi(t.r))-r))),g:fi(Gi(i+n*(Ki(pi(t.g))-i))),b:fi(Gi(a+n*(Ki(pi(t.b))-a))),a:e.a+n*(t.a-e.a)}}function Ji(e,t,n){if(e){let r=Oi(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=Ai(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function Yi(e,t){return e&&Object.assign(t||{},e)}function Xi(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=fi(e[3]))):(t=Yi(e,{r:0,g:0,b:0,a:1}),t.a=fi(t.a)),t}function Zi(e){return e.charAt(0)===`r`?Ui(e):Pi(e)}var Qi=class e{constructor(t){if(t instanceof e)return t;let n=typeof t,r;n===`object`?r=Xi(t):n===`string`&&(r=xi(t)||Vi(t)||Zi(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var e=Yi(this._rgb);return e&&(e.a=pi(e.a)),e}set rgb(e){this._rgb=Xi(e)}rgbString(){return this._valid?Wi(this._rgb):void 0}hexString(){return this._valid?Ci(this._rgb):void 0}hslString(){return this._valid?Ii(this._rgb):void 0}mix(e,t){if(e){let n=this.rgb,r=e.rgb,i,a=t===i?.5:t,o=2*a-1,s=n.a-r.a,c=((o*s===-1?o:(o+s)/(1+o*s))+1)/2;i=1-c,n.r=255&c*n.r+i*r.r+.5,n.g=255&c*n.g+i*r.g+.5,n.b=255&c*n.b+i*r.b+.5,n.a=a*n.a+(1-a)*r.a,this.rgb=n}return this}interpolate(e,t){return e&&(this._rgb=qi(this._rgb,e._rgb,t)),this}clone(){return new e(this.rgb)}alpha(e){return this._rgb.a=fi(e),this}clearer(e){let t=this._rgb;return t.a*=1-e,this}greyscale(){let e=this._rgb;return e.r=e.g=e.b=li(e.r*.3+e.g*.59+e.b*.11),this}opaquer(e){let t=this._rgb;return t.a*=1+e,this}negate(){let e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Ji(this._rgb,2,e),this}darken(e){return Ji(this._rgb,2,-e),this}saturate(e){return Ji(this._rgb,1,e),this}desaturate(e){return Ji(this._rgb,1,-e),this}rotate(e){return Fi(this._rgb,e),this}};function $i(){}var ea=(()=>{let e=0;return()=>e++})();function Y(e){return e==null}function ta(e){if(Array.isArray&&Array.isArray(e))return!0;let t=Object.prototype.toString.call(e);return t.slice(0,7)===`[object`&&t.slice(-6)===`Array]`}function na(e){return e!==null&&Object.prototype.toString.call(e)===`[object Object]`}function ra(e){return(typeof e==`number`||e instanceof Number)&&isFinite(+e)}function ia(e,t){return ra(e)?e:t}function aa(e,t){return e===void 0?t:e}var oa=(e,t)=>typeof e==`string`&&e.endsWith(`%`)?parseFloat(e)/100*t:+e;function sa(e,t,n){if(e&&typeof e.call==`function`)return e.apply(n,t)}function ca(e,t,n,r){let i,a,o;if(ta(e)){if(a=e.length,r)for(i=a-1;i>=0;i--)t.call(n,e[i],i);else for(i=0;i<a;i++)t.call(n,e[i],i)}else if(na(e))for(o=Object.keys(e),a=o.length,i=0;i<a;i++)t.call(n,e[o[i]],o[i])}function la(e,t){let n,r,i,a;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],a=t[n],i.datasetIndex!==a.datasetIndex||i.index!==a.index)return!1;return!0}function ua(e){if(ta(e))return e.map(ua);if(na(e)){let t=Object.create(null),n=Object.keys(e),r=n.length,i=0;for(;i<r;++i)t[n[i]]=ua(e[n[i]]);return t}return e}function da(e){return[`__proto__`,`prototype`,`constructor`].indexOf(e)===-1}function fa(e,t,n,r){if(!da(e))return;let i=t[e],a=n[e];na(i)&&na(a)?pa(i,a,r):t[e]=ua(a)}function pa(e,t,n){let r=ta(t)?t:[t],i=r.length;if(!na(e))return e;n||={};let a=n.merger||fa,o;for(let t=0;t<i;++t){if(o=r[t],!na(o))continue;let i=Object.keys(o);for(let t=0,r=i.length;t<r;++t)a(i[t],e,o,n)}return e}function ma(e,t){return pa(e,t,{merger:ha})}function ha(e,t,n){if(!da(e))return;let r=t[e],i=n[e];na(r)&&na(i)?ma(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=ua(i))}var ga={"":e=>e,x:e=>e.x,y:e=>e.y};function _a(e){let t=e.split(`.`),n=[],r=``;for(let e of t)r+=e,r.endsWith(`\\`)?r=r.slice(0,-1)+`.`:(n.push(r),r=``);return n}function va(e){let t=_a(e);return e=>{for(let n of t){if(n===``)break;e&&=e[n]}return e}}function ya(e,t){return(ga[t]||(ga[t]=va(t)))(e)}function ba(e){return e.charAt(0).toUpperCase()+e.slice(1)}var xa=e=>e!==void 0,Sa=e=>typeof e==`function`,Ca=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0};function wa(e){return e.type===`mouseup`||e.type===`click`||e.type===`contextmenu`}var Ta=Math.PI,Ea=2*Ta,Da=Ea+Ta,Oa=1/0,ka=Ta/180,Aa=Ta/2,ja=Ta/4,Ma=Ta*2/3,Na=Math.log10,Pa=Math.sign;function Fa(e,t,n){return Math.abs(e-t)<n}function Ia(e){let t=Math.round(e);e=Fa(e,t,e/1e3)?t:e;let n=10**Math.floor(Na(e)),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function La(e){let t=[],n=Math.sqrt(e),r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((e,t)=>e-t).pop(),t}function Ra(e){return typeof e==`symbol`||typeof e==`object`&&!!e&&!(Symbol.toPrimitive in e||`toString`in e||`valueOf`in e)}function za(e){return!Ra(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function Ba(e,t){let n=Math.round(e);return n-t<=e&&n+t>=e}function Va(e,t,n){let r,i,a;for(r=0,i=e.length;r<i;r++)a=e[r][n],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function Ha(e){return Ta/180*e}function Ua(e){return 180/Ta*e}function Wa(e){if(!ra(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function Ga(e,t){let n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r),a=Math.atan2(r,n);return a<-.5*Ta&&(a+=Ea),{angle:a,distance:i}}function Ka(e,t){return Math.sqrt((t.x-e.x)**2+(t.y-e.y)**2)}function qa(e,t){return(e-t+Da)%Ea-Ta}function Ja(e){return(e%Ea+Ea)%Ea}function Ya(e,t,n,r){let i=Ja(e),a=Ja(t),o=Ja(n),s=Ja(a-i),c=Ja(o-i),l=Ja(i-a),u=Ja(i-o);return i===a||i===o||r&&a===o||s>c&&l<u}function Xa(e,t,n){return Math.max(t,Math.min(n,e))}function Za(e){return Xa(e,-32768,32767)}function Qa(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function $a(e,t,n){n||=(n=>e[n]<t);let r=e.length-1,i=0,a;for(;r-i>1;)a=i+r>>1,n(a)?i=a:r=a;return{lo:i,hi:r}}var eo=(e,t,n,r)=>$a(e,n,r?r=>{let i=e[r][t];return i<n||i===n&&e[r+1][t]===n}:r=>e[r][t]<n),to=(e,t,n)=>$a(e,n,r=>e[r][t]>=n);function no(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}var ro=[`push`,`pop`,`shift`,`splice`,`unshift`];function X(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),ro.forEach(t=>{let n=`_onData`+ba(t),r=e[t];Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value(...t){let i=r.apply(this,t);return e._chartjs.listeners.forEach(e=>{typeof e[n]==`function`&&e[n](...t)}),i}})})}function io(e,t){let n=e._chartjs;if(!n)return;let r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&(ro.forEach(t=>{delete e[t]}),delete e._chartjs)}function ao(e){let t=new Set(e);return t.size===e.length?e:Array.from(t)}var oo=function(){return typeof window>`u`?function(e){return e()}:window.requestAnimationFrame}();function so(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,oo.call(window,()=>{r=!1,e.apply(t,n)}))}}function co(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}var lo=e=>e===`start`?`left`:e===`end`?`right`:`center`,uo=(e,t,n)=>e===`start`?t:e===`end`?n:(t+n)/2;function fo(e,t,n){let r=t.length,i=0,a=r;if(e._sorted){let{iScale:o,vScale:s,_parsed:c}=e,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,u=o.axis,{min:d,max:f,minDefined:p,maxDefined:m}=o.getUserBounds();if(p){if(i=Math.min(eo(c,u,d).lo,n?r:eo(t,u,o.getPixelForValue(d)).lo),l){let e=c.slice(0,i+1).reverse().findIndex(e=>!Y(e[s.axis]));i-=Math.max(0,e)}i=Xa(i,0,r-1)}if(m){let e=Math.max(eo(c,o.axis,f,!0).hi+1,n?0:eo(t,u,o.getPixelForValue(f),!0).hi+1);if(l){let t=c.slice(e-1).findIndex(e=>!Y(e[s.axis]));e+=Math.max(0,t)}a=Xa(e,i,r)-i}else a=r-i}return{start:i,count:a}}function po(e){let{xScale:t,yScale:n,_scaleRanges:r}=e,i={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=i,!0;let a=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),a}var mo=e=>e===0||e===1,ho=(e,t,n)=>-(2**(10*--e)*Math.sin((e-t)*Ea/n)),go=(e,t,n)=>2**(-10*e)*Math.sin((e-t)*Ea/n)+1,_o={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-(--e*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>--e*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*Aa)+1,easeOutSine:e=>Math.sin(e*Aa),easeInOutSine:e=>-.5*(Math.cos(Ta*e)-1),easeInExpo:e=>e===0?0:2**(10*(e-1)),easeOutExpo:e=>e===1?1:-(2**(-10*e))+1,easeInOutExpo:e=>mo(e)?e:e<.5?.5*2**(10*(e*2-1)):.5*(-(2**(-10*(e*2-1)))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1- --e*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>mo(e)?e:ho(e,.075,.3),easeOutElastic:e=>mo(e)?e:go(e,.075,.3),easeInOutElastic(e){let t=.1125,n=.45;return mo(e)?e:e<.5?.5*ho(e*2,t,n):.5+.5*go(e*2-1,t,n)},easeInBack(e){return e*e*(2.70158*e-1.70158)},easeOutBack(e){return--e*e*(2.70158*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-_o.easeOutBounce(1-e),easeOutBounce(e){let t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},easeInOutBounce:e=>e<.5?_o.easeInBounce(e*2)*.5:_o.easeOutBounce(e*2-1)*.5+.5};function vo(e){if(e&&typeof e==`object`){let t=e.toString();return t===`[object CanvasPattern]`||t===`[object CanvasGradient]`}return!1}function yo(e){return vo(e)?e:new Qi(e)}function bo(e){return vo(e)?e:new Qi(e).saturate(.5).darken(.1).hexString()}var xo=[`x`,`y`,`borderWidth`,`radius`,`tension`],So=[`color`,`borderColor`,`backgroundColor`];function Co(e){e.set(`animation`,{delay:void 0,duration:1e3,easing:`easeOutQuart`,fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe(`animation`,{_fallback:!1,_indexable:!1,_scriptable:e=>e!==`onProgress`&&e!==`onComplete`&&e!==`fn`}),e.set(`animations`,{colors:{type:`color`,properties:So},numbers:{type:`number`,properties:xo}}),e.describe(`animations`,{_fallback:`animation`}),e.set(`transitions`,{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:`transparent`},visible:{type:`boolean`,duration:0}}},hide:{animations:{colors:{to:`transparent`},visible:{type:`boolean`,easing:`linear`,fn:e=>e|0}}}})}function wo(e){e.set(`layout`,{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var To=new Map;function Eo(e,t){t||={};let n=e+JSON.stringify(t),r=To.get(n);return r||(r=new Intl.NumberFormat(e,t),To.set(n,r)),r}function Do(e,t,n){return Eo(t,n).format(e)}var Oo={values(e){return ta(e)?e:``+e},numeric(e,t,n){if(e===0)return`0`;let r=this.chart.options.locale,i,a=e;if(n.length>1){let t=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(t<1e-4||t>0x38d7ea4c68000)&&(i=`scientific`),a=ko(e,n)}let o=Na(Math.abs(a)),s=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(c,this.options.ticks.format),Do(e,r,c)},logarithmic(e,t,n){if(e===0)return`0`;let r=n[t].significand||e/10**Math.floor(Na(e));return[1,2,3,5,10,15].includes(r)||t>.8*n.length?Oo.numeric.call(this,e,t,n):``}};function ko(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var Ao={formatters:Oo};function jo(e){e.set(`scale`,{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:`ticks`,clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:``,padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:``,padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Ao.formatters.values,minor:{},major:{},align:`center`,crossAlign:`near`,showLabelBackdrop:!1,backdropColor:`rgba(255, 255, 255, 0.75)`,backdropPadding:2}}),e.route(`scale.ticks`,`color`,``,`color`),e.route(`scale.grid`,`color`,``,`borderColor`),e.route(`scale.border`,`color`,``,`borderColor`),e.route(`scale.title`,`color`,``,`color`),e.describe(`scale`,{_fallback:!1,_scriptable:e=>!e.startsWith(`before`)&&!e.startsWith(`after`)&&e!==`callback`&&e!==`parser`,_indexable:e=>e!==`borderDash`&&e!==`tickBorderDash`&&e!==`dash`}),e.describe(`scales`,{_fallback:`scale`}),e.describe(`scale.ticks`,{_scriptable:e=>e!==`backdropPadding`&&e!==`callback`,_indexable:e=>e!==`backdropPadding`})}var Mo=Object.create(null),No=Object.create(null);function Po(e,t){if(!t)return e;let n=t.split(`.`);for(let t=0,r=n.length;t<r;++t){let r=n[t];e=e[r]||(e[r]=Object.create(null))}return e}function Fo(e,t,n){return typeof t==`string`?pa(Po(e,t),n):pa(Po(e,``),t)}var Io=new class{constructor(e,t){this.animation=void 0,this.backgroundColor=`rgba(0,0,0,0.1)`,this.borderColor=`rgba(0,0,0,0.1)`,this.color=`#666`,this.datasets={},this.devicePixelRatio=e=>e.chart.platform.getDevicePixelRatio(),this.elements={},this.events=[`mousemove`,`mouseout`,`click`,`touchstart`,`touchmove`],this.font={family:`'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,size:12,style:`normal`,lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(e,t)=>bo(t.backgroundColor),this.hoverBorderColor=(e,t)=>bo(t.borderColor),this.hoverColor=(e,t)=>bo(t.color),this.indexAxis=`x`,this.interaction={mode:`nearest`,intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return Fo(this,e,t)}get(e){return Po(this,e)}describe(e,t){return Fo(No,e,t)}override(e,t){return Fo(Mo,e,t)}route(e,t,n,r){let i=Po(this,e),a=Po(this,n),o=`_`+t;Object.defineProperties(i,{[o]:{value:i[t],writable:!0},[t]:{enumerable:!0,get(){let e=this[o],t=a[r];return na(e)?Object.assign({},t,e):aa(e,t)},set(e){this[o]=e}}})}apply(e){e.forEach(e=>e(this))}}({_scriptable:e=>!e.startsWith(`on`),_indexable:e=>e!==`events`,hover:{_fallback:`interaction`},interaction:{_scriptable:!1,_indexable:!1}},[Co,wo,jo]);function Lo(e){return!e||Y(e.size)||Y(e.family)?null:(e.style?e.style+` `:``)+(e.weight?e.weight+` `:``)+e.size+`px `+e.family}function Ro(e,t,n,r,i){let a=t[i];return a||(a=t[i]=e.measureText(i).width,n.push(i)),a>r&&(r=a),r}function zo(e,t,n,r){r||={};let i=r.data=r.data||{},a=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(i=r.data={},a=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let o=0,s=n.length,c,l,u,d,f;for(c=0;c<s;c++)if(d=n[c],d!=null&&!ta(d))o=Ro(e,i,a,o,d);else if(ta(d))for(l=0,u=d.length;l<u;l++)f=d[l],f!=null&&!ta(f)&&(o=Ro(e,i,a,o,f));e.restore();let p=a.length/2;if(p>n.length){for(c=0;c<p;c++)delete i[a[c]];a.splice(0,p)}return o}function Bo(e,t,n){let r=e.currentDevicePixelRatio,i=n===0?0:Math.max(n/2,.5);return Math.round((t-i)*r)/r+i}function Vo(e,t){!t&&!e||(t||=e.getContext(`2d`),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function Ho(e,t,n,r){Uo(e,t,n,r,null)}function Uo(e,t,n,r,i){let a,o,s,c,l,u,d,f,p=t.pointStyle,m=t.rotation,h=t.radius,g=(m||0)*ka;if(p&&typeof p==`object`&&(a=p.toString(),a===`[object HTMLImageElement]`||a===`[object HTMLCanvasElement]`)){e.save(),e.translate(n,r),e.rotate(g),e.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),e.restore();return}if(!(isNaN(h)||h<=0)){switch(e.beginPath(),p){default:i?e.ellipse(n,r,i/2,h,0,0,Ea):e.arc(n,r,h,0,Ea),e.closePath();break;case`triangle`:u=i?i/2:h,e.moveTo(n+Math.sin(g)*u,r-Math.cos(g)*h),g+=Ma,e.lineTo(n+Math.sin(g)*u,r-Math.cos(g)*h),g+=Ma,e.lineTo(n+Math.sin(g)*u,r-Math.cos(g)*h),e.closePath();break;case`rectRounded`:l=h*.516,c=h-l,o=Math.cos(g+ja)*c,d=Math.cos(g+ja)*(i?i/2-l:c),s=Math.sin(g+ja)*c,f=Math.sin(g+ja)*(i?i/2-l:c),e.arc(n-d,r-s,l,g-Ta,g-Aa),e.arc(n+f,r-o,l,g-Aa,g),e.arc(n+d,r+s,l,g,g+Aa),e.arc(n-f,r+o,l,g+Aa,g+Ta),e.closePath();break;case`rect`:if(!m){c=Math.SQRT1_2*h,u=i?i/2:c,e.rect(n-u,r-c,2*u,2*c);break}g+=ja;case`rectRot`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+f,r-o),e.lineTo(n+d,r+s),e.lineTo(n-f,r+o),e.closePath();break;case`crossRot`:g+=ja;case`cross`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o);break;case`star`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o),g+=ja,d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o);break;case`line`:o=i?i/2:Math.cos(g)*h,s=Math.sin(g)*h,e.moveTo(n-o,r-s),e.lineTo(n+o,r+s);break;case`dash`:e.moveTo(n,r),e.lineTo(n+Math.cos(g)*(i?i/2:h),r+Math.sin(g)*h);break;case!1:e.closePath()}e.fill(),t.borderWidth>0&&e.stroke()}}function Wo(e,t,n){return n||=.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function Go(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function Ko(e){e.restore()}function qo(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i===`middle`){let r=(t.x+n.x)/2;e.lineTo(r,t.y),e.lineTo(r,n.y)}else i===`after`==!!r?e.lineTo(n.x,t.y):e.lineTo(t.x,n.y);e.lineTo(n.x,n.y)}function Jo(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function Yo(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),Y(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function Xo(e,t,n,r,i){if(i.strikethrough||i.underline){let a=e.measureText(r),o=t-a.actualBoundingBoxLeft,s=t+a.actualBoundingBoxRight,c=n-a.actualBoundingBoxAscent,l=n+a.actualBoundingBoxDescent,u=i.strikethrough?(c+l)/2:l;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(o,u),e.lineTo(s,u),e.stroke()}}function Zo(e,t){let n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function Qo(e,t,n,r,i,a={}){let o=ta(t)?t:[t],s=a.strokeWidth>0&&a.strokeColor!==``,c,l;for(e.save(),e.font=i.string,Yo(e,a),c=0;c<o.length;++c)l=o[c],a.backdrop&&Zo(e,a.backdrop),s&&(a.strokeColor&&(e.strokeStyle=a.strokeColor),Y(a.strokeWidth)||(e.lineWidth=a.strokeWidth),e.strokeText(l,n,r,a.maxWidth)),e.fillText(l,n,r,a.maxWidth),Xo(e,n,r,l,a),r+=Number(i.lineHeight);e.restore()}function $o(e,t){let{x:n,y:r,w:i,h:a,radius:o}=t;e.arc(n+o.topLeft,r+o.topLeft,o.topLeft,1.5*Ta,Ta,!0),e.lineTo(n,r+a-o.bottomLeft),e.arc(n+o.bottomLeft,r+a-o.bottomLeft,o.bottomLeft,Ta,Aa,!0),e.lineTo(n+i-o.bottomRight,r+a),e.arc(n+i-o.bottomRight,r+a-o.bottomRight,o.bottomRight,Aa,0,!0),e.lineTo(n+i,r+o.topRight),e.arc(n+i-o.topRight,r+o.topRight,o.topRight,0,-Aa,!0),e.lineTo(n+o.topLeft,r)}var es=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,ts=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function ns(e,t){let n=(``+e).match(es);if(!n||n[1]===`normal`)return t*1.2;switch(e=+n[2],n[3]){case`px`:return e;case`%`:e/=100}return t*e}var rs=e=>+e||0;function is(e,t){let n={},r=na(t),i=r?Object.keys(t):t,a=na(e)?r?n=>aa(e[n],e[t[n]]):t=>e[t]:()=>e;for(let e of i)n[e]=rs(a(e));return n}function as(e){return is(e,{top:`y`,right:`x`,bottom:`y`,left:`x`})}function os(e){return is(e,[`topLeft`,`topRight`,`bottomLeft`,`bottomRight`])}function ss(e){let t=as(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function cs(e,t){e||={},t||=Io.font;let n=aa(e.size,t.size);typeof n==`string`&&(n=parseInt(n,10));let r=aa(e.style,t.style);r&&!(``+r).match(ts)&&(console.warn(`Invalid font style specified: "`+r+`"`),r=void 0);let i={family:aa(e.family,t.family),lineHeight:ns(aa(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:aa(e.weight,t.weight),string:``};return i.string=Lo(i),i}function ls(e,t,n,r){let i=!0,a,o,s;for(a=0,o=e.length;a<o;++a)if(s=e[a],s!==void 0&&(t!==void 0&&typeof s==`function`&&(s=s(t),i=!1),n!==void 0&&ta(s)&&(s=s[n%s.length],i=!1),s!==void 0))return r&&!i&&(r.cacheable=!1),s}function us(e,t,n){let{min:r,max:i}=e,a=oa(t,(i-r)/2),o=(e,t)=>n&&e===0?0:e+t;return{min:o(r,-Math.abs(a)),max:o(i,a)}}function ds(e,t){return Object.assign(Object.create(e),t)}function fs(e,t=[``],n,r,i=()=>e[0]){let a=n||e;return r===void 0&&(r=Os(`_fallback`,e)),new Proxy({[Symbol.toStringTag]:`Object`,_cacheable:!0,_scopes:e,_rootScopes:a,_fallback:r,_getTarget:i,override:n=>fs([n,...e],t,a,r)},{deleteProperty(t,n){return delete t[n],delete t._keys,delete e[0][n],!0},get(n,r){return _s(n,r,()=>Ds(r,t,e,n))},getOwnPropertyDescriptor(e,t){return Reflect.getOwnPropertyDescriptor(e._scopes[0],t)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(e,t){return ks(e).includes(t)},ownKeys(e){return ks(e)},set(e,t,n){let r=e._storage||=i();return e[t]=r[t]=n,delete e._keys,!0}})}function ps(e,t,n,r){let i={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:ms(e,r),setContext:t=>ps(e,t,n,r),override:i=>ps(e.override(i),t,n,r)};return new Proxy(i,{deleteProperty(t,n){return delete t[n],delete e[n],!0},get(e,t,n){return _s(e,t,()=>vs(e,t,n))},getOwnPropertyDescriptor(t,n){return t._descriptors.allKeys?Reflect.has(e,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,n)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(t,n){return Reflect.has(e,n)},ownKeys(){return Reflect.ownKeys(e)},set(t,n,r){return e[n]=r,delete t[n],!0}})}function ms(e,t={scriptable:!0,indexable:!0}){let{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:Sa(n)?n:()=>n,isIndexable:Sa(r)?r:()=>r}}var hs=(e,t)=>e?e+ba(t):t,gs=(e,t)=>na(t)&&e!==`adapters`&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function _s(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t===`constructor`)return e[t];let r=n();return e[t]=r,r}function vs(e,t,n){let{_proxy:r,_context:i,_subProxy:a,_descriptors:o}=e,s=r[t];return Sa(s)&&o.isScriptable(t)&&(s=ys(t,s,e,n)),ta(s)&&s.length&&(s=bs(t,s,e,o.isIndexable)),gs(t,s)&&(s=ps(s,i,a&&a[t],o)),s}function ys(e,t,n,r){let{_proxy:i,_context:a,_subProxy:o,_stack:s}=n;if(s.has(e))throw Error(`Recursion detected: `+Array.from(s).join(`->`)+`->`+e);s.add(e);let c=t(a,o||r);return s.delete(e),gs(e,c)&&(c=ws(i._scopes,i,e,c)),c}function bs(e,t,n,r){let{_proxy:i,_context:a,_subProxy:o,_descriptors:s}=n;if(a.index!==void 0&&r(e))return t[a.index%t.length];if(na(t[0])){let n=t,r=i._scopes.filter(e=>e!==n);t=[];for(let c of n){let n=ws(r,i,e,c);t.push(ps(n,a,o&&o[e],s))}}return t}function xs(e,t,n){return Sa(e)?e(t,n):e}var Ss=(e,t)=>e===!0?t:typeof e==`string`?ya(t,e):void 0;function Cs(e,t,n,r,i){for(let a of t){let t=Ss(n,a);if(t){e.add(t);let a=xs(t._fallback,n,i);if(a!==void 0&&a!==n&&a!==r)return a}else if(t===!1&&r!==void 0&&n!==r)return null}return!1}function ws(e,t,n,r){let i=t._rootScopes,a=xs(t._fallback,n,r),o=[...e,...i],s=new Set;s.add(r);let c=Ts(s,o,n,a||n,r);return c===null||a!==void 0&&a!==n&&(c=Ts(s,o,a,c,r),c===null)?!1:fs(Array.from(s),[``],i,a,()=>Es(t,n,r))}function Ts(e,t,n,r,i){for(;n;)n=Cs(e,t,n,r,i);return n}function Es(e,t,n){let r=e._getTarget();t in r||(r[t]={});let i=r[t];return ta(i)&&na(n)?n:i||{}}function Ds(e,t,n,r){let i;for(let a of t)if(i=Os(hs(a,e),n),i!==void 0)return gs(e,i)?ws(n,r,e,i):i}function Os(e,t){for(let n of t){if(!n)continue;let t=n[e];if(t!==void 0)return t}}function ks(e){let t=e._keys;return t||=e._keys=As(e._scopes),t}function As(e){let t=new Set;for(let n of e)for(let e of Object.keys(n).filter(e=>!e.startsWith(`_`)))t.add(e);return Array.from(t)}var js=2**-52||1e-14,Ms=(e,t)=>t<e.length&&!e[t].skip&&e[t],Ns=e=>e===`x`?`y`:`x`;function Ps(e,t,n,r){let i=e.skip?t:e,a=t,o=n.skip?t:n,s=Ka(a,i),c=Ka(o,a),l=s/(s+c),u=c/(s+c);l=isNaN(l)?0:l,u=isNaN(u)?0:u;let d=r*l,f=r*u;return{previous:{x:a.x-d*(o.x-i.x),y:a.y-d*(o.y-i.y)},next:{x:a.x+f*(o.x-i.x),y:a.y+f*(o.y-i.y)}}}function Fs(e,t,n){let r=e.length,i,a,o,s,c,l=Ms(e,0);for(let u=0;u<r-1;++u)if(c=l,l=Ms(e,u+1),!(!c||!l)){if(Fa(t[u],0,js)){n[u]=n[u+1]=0;continue}i=n[u]/t[u],a=n[u+1]/t[u],s=i**2+a**2,!(s<=9)&&(o=3/Math.sqrt(s),n[u]=i*o*t[u],n[u+1]=a*o*t[u])}}function Is(e,t,n=`x`){let r=Ns(n),i=e.length,a,o,s,c=Ms(e,0);for(let l=0;l<i;++l){if(o=s,s=c,c=Ms(e,l+1),!s)continue;let i=s[n],u=s[r];o&&(a=(i-o[n])/3,s[`cp1${n}`]=i-a,s[`cp1${r}`]=u-a*t[l]),c&&(a=(c[n]-i)/3,s[`cp2${n}`]=i+a,s[`cp2${r}`]=u+a*t[l])}}function Ls(e,t=`x`){let n=Ns(t),r=e.length,i=Array(r).fill(0),a=Array(r),o,s,c,l=Ms(e,0);for(o=0;o<r;++o)if(s=c,c=l,l=Ms(e,o+1),c){if(l){let e=l[t]-c[t];i[o]=e===0?0:(l[n]-c[n])/e}a[o]=s?l?Pa(i[o-1])===Pa(i[o])?(i[o-1]+i[o])/2:0:i[o-1]:i[o]}Fs(e,i,a),Is(e,a,t)}function Rs(e,t,n){return Math.max(Math.min(e,n),t)}function zs(e,t){let n,r,i,a,o,s=Wo(e[0],t);for(n=0,r=e.length;n<r;++n)o=a,a=s,s=n<r-1&&Wo(e[n+1],t),a&&(i=e[n],o&&(i.cp1x=Rs(i.cp1x,t.left,t.right),i.cp1y=Rs(i.cp1y,t.top,t.bottom)),s&&(i.cp2x=Rs(i.cp2x,t.left,t.right),i.cp2y=Rs(i.cp2y,t.top,t.bottom)))}function Bs(e,t,n,r,i){let a,o,s,c;if(t.spanGaps&&(e=e.filter(e=>!e.skip)),t.cubicInterpolationMode===`monotone`)Ls(e,i);else{let n=r?e[e.length-1]:e[0];for(a=0,o=e.length;a<o;++a)s=e[a],c=Ps(n,s,e[Math.min(a+1,o-+!r)%o],t.tension),s.cp1x=c.previous.x,s.cp1y=c.previous.y,s.cp2x=c.next.x,s.cp2y=c.next.y,n=s}t.capBezierPoints&&zs(e,n)}function Vs(){return typeof window<`u`&&typeof document<`u`}function Hs(e){let t=e.parentNode;return t&&t.toString()===`[object ShadowRoot]`&&(t=t.host),t}function Us(e,t,n){let r;return typeof e==`string`?(r=parseInt(e,10),e.indexOf(`%`)!==-1&&(r=r/100*t.parentNode[n])):r=e,r}var Ws=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function Gs(e,t){return Ws(e).getPropertyValue(t)}var Ks=[`top`,`right`,`bottom`,`left`];function qs(e,t,n){let r={};n=n?`-`+n:``;for(let i=0;i<4;i++){let a=Ks[i];r[a]=parseFloat(e[t+`-`+a+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}var Js=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function Ys(e,t){let n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:a}=r,o=!1,s,c;if(Js(i,a,e.target))s=i,c=a;else{let e=t.getBoundingClientRect();s=r.clientX-e.left,c=r.clientY-e.top,o=!0}return{x:s,y:c,box:o}}function Xs(e,t){if(`native`in e)return e;let{canvas:n,currentDevicePixelRatio:r}=t,i=Ws(n),a=i.boxSizing===`border-box`,o=qs(i,`padding`),s=qs(i,`border`,`width`),{x:c,y:l,box:u}=Ys(e,n),d=o.left+(u&&s.left),f=o.top+(u&&s.top),{width:p,height:m}=t;return a&&(p-=o.width+s.width,m-=o.height+s.height),{x:Math.round((c-d)/p*n.width/r),y:Math.round((l-f)/m*n.height/r)}}function Zs(e,t,n){let r,i;if(t===void 0||n===void 0){let a=e&&Hs(e);if(!a)t=e.clientWidth,n=e.clientHeight;else{let e=a.getBoundingClientRect(),o=Ws(a),s=qs(o,`border`,`width`),c=qs(o,`padding`);t=e.width-c.width-s.width,n=e.height-c.height-s.height,r=Us(o.maxWidth,a,`clientWidth`),i=Us(o.maxHeight,a,`clientHeight`)}}return{width:t,height:n,maxWidth:r||Oa,maxHeight:i||Oa}}var Qs=e=>Math.round(e*10)/10;function $s(e,t,n,r){let i=Ws(e),a=qs(i,`margin`),o=Us(i.maxWidth,e,`clientWidth`)||Oa,s=Us(i.maxHeight,e,`clientHeight`)||Oa,c=Zs(e,t,n),{width:l,height:u}=c;if(i.boxSizing===`content-box`){let e=qs(i,`border`,`width`),t=qs(i,`padding`);l-=t.width+e.width,u-=t.height+e.height}return l=Math.max(0,l-a.width),u=Math.max(0,r?l/r:u-a.height),l=Qs(Math.min(l,o,c.maxWidth)),u=Qs(Math.min(u,s,c.maxHeight)),l&&!u&&(u=Qs(l/2)),(t!==void 0||n!==void 0)&&r&&c.height&&u>c.height&&(u=c.height,l=Qs(Math.floor(u*r))),{width:l,height:u}}function ec(e,t,n){let r=t||1,i=Qs(e.height*r),a=Qs(e.width*r);e.height=Qs(e.height),e.width=Qs(e.width);let o=e.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${e.height}px`,o.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||o.height!==i||o.width!==a?(e.currentDevicePixelRatio=r,o.height=i,o.width=a,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}var tc=function(){let e=!1;try{let t={get passive(){return e=!0,!1}};Vs()&&(window.addEventListener(`test`,null,t),window.removeEventListener(`test`,null,t))}catch{}return e}();function nc(e,t){let n=Gs(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function rc(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function ic(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r===`middle`?n<.5?e.y:t.y:r===`after`?n<1?e.y:t.y:n>0?t.y:e.y}}function ac(e,t,n,r){let i={x:e.cp2x,y:e.cp2y},a={x:t.cp1x,y:t.cp1y},o=rc(e,i,n),s=rc(i,a,n),c=rc(a,t,n);return rc(rc(o,s,n),rc(s,c,n),n)}var oc=function(e,t){return{x(n){return e+e+t-n},setWidth(e){t=e},textAlign(e){return e===`center`?e:e===`right`?`left`:`right`},xPlus(e,t){return e-t},leftForLtr(e,t){return e-t}}},sc=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function cc(e,t,n){return e?oc(t,n):sc()}function lc(e,t){let n,r;(t===`ltr`||t===`rtl`)&&(n=e.canvas.style,r=[n.getPropertyValue(`direction`),n.getPropertyPriority(`direction`)],n.setProperty(`direction`,t,`important`),e.prevTextDirection=r)}function uc(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty(`direction`,t[0],t[1]))}function dc(e){return e===`angle`?{between:Ya,compare:qa,normalize:Ja}:{between:Qa,compare:(e,t)=>e-t,normalize:e=>e}}function fc({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:i}}function pc(e,t,n){let{property:r,start:i,end:a}=n,{between:o,normalize:s}=dc(r),c=t.length,{start:l,end:u,loop:d}=e,f,p;if(d){for(l+=c,u+=c,f=0,p=c;f<p&&o(s(t[l%c][r]),i,a);++f)l--,u--;l%=c,u%=c}return u<l&&(u+=c),{start:l,end:u,loop:d,style:e.style}}function mc(e,t,n){if(!n)return[e];let{property:r,start:i,end:a}=n,o=t.length,{compare:s,between:c,normalize:l}=dc(r),{start:u,end:d,loop:f,style:p}=pc(e,t,n),m=[],h=!1,g=null,_,v,y,b=()=>c(i,y,_)&&s(i,y)!==0,x=()=>s(a,_)===0||c(a,y,_),S=()=>h||b(),C=()=>!h||x();for(let e=u,n=u;e<=d;++e)v=t[e%o],!v.skip&&(_=l(v[r]),_!==y&&(h=c(_,i,a),g===null&&S()&&(g=s(_,i)===0?e:n),g!==null&&C()&&(m.push(fc({start:g,end:e,loop:f,count:o,style:p})),g=null),n=e,y=_));return g!==null&&m.push(fc({start:g,end:d,loop:f,count:o,style:p})),m}function hc(e,t){let n=[],r=e.segments;for(let i=0;i<r.length;i++){let a=mc(r[i],e.points,t);a.length&&n.push(...a)}return n}function gc(e,t,n,r){let i=0,a=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(a+=i);a>i&&e[a%t].skip;)a--;return a%=t,{start:i,end:a}}function _c(e,t,n,r){let i=e.length,a=[],o=t,s=e[t],c;for(c=t+1;c<=n;++c){let n=e[c%i];n.skip||n.stop?s.skip||(r=!1,a.push({start:t%i,end:(c-1)%i,loop:r}),t=o=n.stop?c:null):(o=c,s.skip&&(t=c)),s=n}return o!==null&&a.push({start:t%i,end:o%i,loop:r}),a}function vc(e,t){let n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];let a=!!e._loop,{start:o,end:s}=gc(n,i,a,r);return r===!0?yc(e,[{start:o,end:s,loop:a}],n,t):yc(e,_c(n,o,s<o?s+i:s,!!e._fullLoop&&o===0&&s===i-1),n,t)}function yc(e,t,n,r){return!r||!r.setContext||!n?t:bc(e,t,n,r)}function bc(e,t,n,r){let i=e._chart.getContext(),a=xc(e.options),{_datasetIndex:o,options:{spanGaps:s}}=e,c=n.length,l=[],u=a,d=t[0].start,f=d;function p(e,t,r,i){let a=s?-1:1;if(e!==t){for(e+=c;n[e%c].skip;)e-=a;for(;n[t%c].skip;)t+=a;e%c!==t%c&&(l.push({start:e%c,end:t%c,loop:r,style:i}),u=i,d=t%c)}}for(let e of t){d=s?d:e.start;let t=n[d%c],a;for(f=d+1;f<=e.end;f++){let s=n[f%c];a=xc(r.setContext(ds(i,{type:`segment`,p0:t,p1:s,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),Sc(a,u)&&p(d,f-1,e.loop,u),t=s,u=a}d<f-1&&p(d,f-1,e.loop,u)}return l}function xc(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function Sc(e,t){if(!t)return!1;let n=[],r=function(e,t){return vo(t)?(n.includes(t)||n.push(t),n.indexOf(t)):t};return JSON.stringify(e,r)!==JSON.stringify(t,r)}function Cc(e,t,n){return e.options.clip?e[n]:t[n]}function wc(e,t){let{xScale:n,yScale:r}=e;return n&&r?{left:Cc(n,t,`left`),right:Cc(n,t,`right`),top:Cc(r,t,`top`),bottom:Cc(r,t,`bottom`)}:t}function Tc(e,t){let n=t._clip;if(n.disabled)return!1;let r=wc(t,e.chartArea);return{left:n.left===!1?0:r.left-(n.left===!0?0:n.left),right:n.right===!1?e.width:r.right+(n.right===!0?0:n.right),top:n.top===!1?0:r.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?e.height:r.bottom+(n.bottom===!0?0:n.bottom)}}var Ec=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,n,r){let i=t.listeners[r],a=t.duration;i.forEach(r=>r({chart:e,initial:t.initial,numSteps:a,currentStep:Math.min(n-t.start,a)}))}_refresh(){this._request||=(this._running=!0,oo.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((n,r)=>{if(!n.running||!n.items.length)return;let i=n.items,a=i.length-1,o=!1,s;for(;a>=0;--a)s=i[a],s._active?(s._total>n.duration&&(n.duration=s._total),s.tick(e),o=!0):(i[a]=i[i.length-1],i.pop());o&&(r.draw(),this._notify(r,n,e,`progress`)),i.length||(n.running=!1,this._notify(r,n,e,`complete`),n.initial=!1),t+=i.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){let t=this._charts,n=t.get(e);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,n)),n}listen(e,t,n){this._getAnims(e).listeners[t].push(n)}add(e,t){!t||!t.length||this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){let t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((e,t)=>Math.max(e,t._duration),0),this._refresh())}running(e){if(!this._running)return!1;let t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){let t=this._charts.get(e);if(!t||!t.items.length)return;let n=t.items,r=n.length-1;for(;r>=0;--r)n[r].cancel();t.items=[],this._notify(e,t,Date.now(),`complete`)}remove(e){return this._charts.delete(e)}},Dc=`transparent`,Oc={boolean(e,t,n){return n>.5?t:e},color(e,t,n){let r=yo(e||Dc),i=r.valid&&yo(t||Dc);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}},kc=class{constructor(e,t,n,r){let i=t[n];r=ls([e.to,r,i,e.from]);let a=ls([e.from,i,r]);this._active=!0,this._fn=e.fn||Oc[e.type||typeof a],this._easing=_o[e.easing]||_o.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=n,this._from=a,this._to=r,this._promises=void 0}active(){return this._active}update(e,t,n){if(this._active){this._notify(!1);let r=this._target[this._prop],i=n-this._start,a=this._duration-i;this._start=n,this._duration=Math.floor(Math.max(a,e.duration)),this._total+=i,this._loop=!!e.loop,this._to=ls([e.to,t,r,e.from]),this._from=ls([e.from,r,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){let t=e-this._start,n=this._duration,r=this._prop,i=this._from,a=this._loop,o=this._to,s;if(this._active=i!==o&&(a||t<n),!this._active){this._target[r]=o,this._notify(!0);return}if(t<0){this._target[r]=i;return}s=t/n%2,s=a&&s>1?2-s:s,s=this._easing(Math.min(1,Math.max(0,s))),this._target[r]=this._fn(i,o,s)}wait(){let e=this._promises||=[];return new Promise((t,n)=>{e.push({res:t,rej:n})})}_notify(e){let t=e?`res`:`rej`,n=this._promises||[];for(let e=0;e<n.length;e++)n[e][t]()}},Ac=class{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!na(e))return;let t=Object.keys(Io.animation),n=this._properties;Object.getOwnPropertyNames(e).forEach(r=>{let i=e[r];if(!na(i))return;let a={};for(let e of t)a[e]=i[e];(ta(i.properties)&&i.properties||[r]).forEach(e=>{(e===r||!n.has(e))&&n.set(e,a)})})}_animateOptions(e,t){let n=t.options,r=Mc(e,n);if(!r)return[];let i=this._createAnimations(r,n);return n.$shared&&jc(e.options.$animations,n).then(()=>{e.options=n},()=>{}),i}_createAnimations(e,t){let n=this._properties,r=[],i=e.$animations||={},a=Object.keys(t),o=Date.now(),s;for(s=a.length-1;s>=0;--s){let c=a[s];if(c.charAt(0)===`$`)continue;if(c===`options`){r.push(...this._animateOptions(e,t));continue}let l=t[c],u=i[c],d=n.get(c);if(u){if(d&&u.active()){u.update(d,l,o);continue}u.cancel()}if(!d||!d.duration){e[c]=l;continue}i[c]=u=new kc(d,e,c,l),r.push(u)}return r}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}let n=this._createAnimations(e,t);if(n.length)return Ec.add(this._chart,n),!0}};function jc(e,t){let n=[],r=Object.keys(t);for(let t=0;t<r.length;t++){let i=e[r[t]];i&&i.active()&&n.push(i.wait())}return Promise.all(n)}function Mc(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Nc(e,t){let n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,a=n.max===void 0?t:0;return{start:r?a:i,end:r?i:a}}function Pc(e,t,n){if(n===!1)return!1;let r=Nc(e,n),i=Nc(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function Fc(e){let t,n,r,i;return na(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function Ic(e,t){let n=[],r=e._getSortedDatasetMetas(t),i,a;for(i=0,a=r.length;i<a;++i)n.push(r[i].index);return n}function Lc(e,t,n,r={}){let i=e.keys,a=r.mode===`single`,o,s,c,l;if(t===null)return;let u=!1;for(o=0,s=i.length;o<s;++o){if(c=+i[o],c===n){if(u=!0,r.all)continue;break}l=e.values[c],ra(l)&&(a||t===0||Pa(t)===Pa(l))&&(t+=l)}return!u&&!r.all?0:t}function Rc(e,t){let{iScale:n,vScale:r}=t,i=n.axis===`x`?`x`:`y`,a=r.axis===`x`?`x`:`y`,o=Object.keys(e),s=Array(o.length),c,l,u;for(c=0,l=o.length;c<l;++c)u=o[c],s[c]={[i]:u,[a]:e[u]};return s}function zc(e,t){let n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function Bc(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function Vc(e){let{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:-1/0,max:i?n:1/0}}function Hc(e,t,n){let r=e[t]||(e[t]={});return r[n]||(r[n]={})}function Uc(e,t,n,r){for(let i of t.getMatchingVisibleMetas(r).reverse()){let t=e[i.index];if(n&&t>0||!n&&t<0)return i.index}return null}function Wc(e,t){let{chart:n,_cachedMeta:r}=e,i=n._stacks||={},{iScale:a,vScale:o,index:s}=r,c=a.axis,l=o.axis,u=Bc(a,o,r),d=t.length,f;for(let e=0;e<d;++e){let n=t[e],{[c]:a,[l]:d}=n,p=n._stacks||={};f=p[l]=Hc(i,u,a),f[s]=d,f._top=Uc(f,o,!0,r.type),f._bottom=Uc(f,o,!1,r.type);let m=f._visualValues||(f._visualValues={});m[s]=d}}function Gc(e,t){let n=e.scales;return Object.keys(n).filter(e=>n[e].axis===t).shift()}function Kc(e,t){return ds(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:`default`,type:`dataset`})}function qc(e,t,n){return ds(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:`default`,type:`data`})}function Jc(e,t){let n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t||=e._parsed;for(let e of t){let t=e._stacks;if(!t||t[r]===void 0||t[r][n]===void 0)return;delete t[r][n],t[r]._visualValues!==void 0&&t[r]._visualValues[n]!==void 0&&delete t[r]._visualValues[n]}}}var Yc=e=>e===`reset`||e===`none`,Xc=(e,t)=>t?e:Object.assign({},e),Zc=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:Ic(n,!0),values:null},Qc=class{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=zc(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled(`filler`)&&console.warn(`Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options`)}updateIndex(e){this.index!==e&&Jc(this._cachedMeta),this.index=e}linkScales(){let e=this.chart,t=this._cachedMeta,n=this.getDataset(),r=(e,t,n,r)=>e===`x`?t:e===`r`?r:n,i=t.xAxisID=aa(n.xAxisID,Gc(e,`x`)),a=t.yAxisID=aa(n.yAxisID,Gc(e,`y`)),o=t.rAxisID=aa(n.rAxisID,Gc(e,`r`)),s=t.indexAxis,c=t.iAxisID=r(s,i,a,o),l=t.vAxisID=r(s,a,i,o);t.xScale=this.getScaleForId(i),t.yScale=this.getScaleForId(a),t.rScale=this.getScaleForId(o),t.iScale=this.getScaleForId(c),t.vScale=this.getScaleForId(l)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){let t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update(`reset`)}_destroy(){let e=this._cachedMeta;this._data&&io(this._data,this),e._stacked&&Jc(e)}_dataCheck(){let e=this.getDataset(),t=e.data||=[],n=this._data;if(na(t)){let e=this._cachedMeta;this._data=Rc(t,e)}else if(n!==t){if(n){io(n,this);let e=this._cachedMeta;Jc(e),e._parsed=[]}t&&Object.isExtensible(t)&&X(t,this),this._syncList=[],this._data=t}}addElements(){let e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){let t=this._cachedMeta,n=this.getDataset(),r=!1;this._dataCheck();let i=t._stacked;t._stacked=zc(t.vScale,t),t.stack!==n.stack&&(r=!0,Jc(t),t.stack=n.stack),this._resyncElements(e),(r||i!==t._stacked)&&(Wc(this,t._parsed),t._stacked=zc(t.vScale,t))}configure(){let e=this.chart.config,t=e.datasetScopeKeys(this._type),n=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){let{_cachedMeta:n,_data:r}=this,{iScale:i,_stacked:a}=n,o=i.axis,s=e===0&&t===r.length||n._sorted,c=e>0&&n._parsed[e-1],l,u,d;if(this._parsing===!1)n._parsed=r,n._sorted=!0,d=r;else{d=ta(r[e])?this.parseArrayData(n,r,e,t):na(r[e])?this.parseObjectData(n,r,e,t):this.parsePrimitiveData(n,r,e,t);let i=()=>u[o]===null||c&&u[o]<c[o];for(l=0;l<t;++l)n._parsed[l+e]=u=d[l],s&&(i()&&(s=!1),c=u);n._sorted=s}a&&Wc(this,d)}parsePrimitiveData(e,t,n,r){let{iScale:i,vScale:a}=e,o=i.axis,s=a.axis,c=i.getLabels(),l=i===a,u=Array(r),d,f,p;for(d=0,f=r;d<f;++d)p=d+n,u[d]={[o]:l||i.parse(c[p],p),[s]:a.parse(t[p],p)};return u}parseArrayData(e,t,n,r){let{xScale:i,yScale:a}=e,o=Array(r),s,c,l,u;for(s=0,c=r;s<c;++s)l=s+n,u=t[l],o[s]={x:i.parse(u[0],l),y:a.parse(u[1],l)};return o}parseObjectData(e,t,n,r){let{xScale:i,yScale:a}=e,{xAxisKey:o=`x`,yAxisKey:s=`y`}=this._parsing,c=Array(r),l,u,d,f;for(l=0,u=r;l<u;++l)d=l+n,f=t[d],c[l]={x:i.parse(ya(f,o),d),y:a.parse(ya(f,s),d)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,n){let r=this.chart,i=this._cachedMeta,a=t[e.axis];return Lc({keys:Ic(r,!0),values:t._stacks[e.axis]._visualValues},a,i.index,{mode:n})}updateRangeFromParsed(e,t,n,r){let i=n[t.axis],a=i===null?NaN:i,o=r&&n._stacks[t.axis];r&&o&&(r.values=o,a=Lc(r,i,this._cachedMeta.index)),e.min=Math.min(e.min,a),e.max=Math.max(e.max,a)}getMinMax(e,t){let n=this._cachedMeta,r=n._parsed,i=n._sorted&&e===n.iScale,a=r.length,o=this._getOtherScale(e),s=Zc(t,n,this.chart),c={min:1/0,max:-1/0},{min:l,max:u}=Vc(o),d,f;function p(){f=r[d];let t=f[o.axis];return!ra(f[e.axis])||l>t||u<t}for(d=0;d<a&&!(!p()&&(this.updateRangeFromParsed(c,e,f,s),i));++d);if(i){for(d=a-1;d>=0;--d)if(!p()){this.updateRangeFromParsed(c,e,f,s);break}}return c}getAllParsedValues(e){let t=this._cachedMeta._parsed,n=[],r,i,a;for(r=0,i=t.length;r<i;++r)a=t[r][e.axis],ra(a)&&n.push(a);return n}getMaxOverflow(){return!1}getLabelAndValue(e){let t=this._cachedMeta,n=t.iScale,r=t.vScale,i=this.getParsed(e);return{label:n?``+n.getLabelForValue(i[n.axis]):``,value:r?``+r.getLabelForValue(i[r.axis]):``}}_update(e){let t=this._cachedMeta;this.update(e||`default`),t._clip=Fc(aa(this.options.clip,Pc(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){let e=this._ctx,t=this.chart,n=this._cachedMeta,r=n.data||[],i=t.chartArea,a=[],o=this._drawStart||0,s=this._drawCount||r.length-o,c=this.options.drawActiveElementsOnTop,l;for(n.dataset&&n.dataset.draw(e,i,o,s),l=o;l<o+s;++l){let t=r[l];t.hidden||(t.active&&c?a.push(t):t.draw(e,i))}for(l=0;l<a.length;++l)a[l].draw(e,i)}getStyle(e,t){let n=t?`active`:`default`;return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(e||0,n)}getContext(e,t,n){let r=this.getDataset(),i;if(e>=0&&e<this._cachedMeta.data.length){let t=this._cachedMeta.data[e];i=t.$context||=qc(this.getContext(),e,t),i.parsed=this.getParsed(e),i.raw=r.data[e],i.index=i.dataIndex=e}else i=this.$context||=Kc(this.chart.getContext(),this.index),i.dataset=r,i.index=i.datasetIndex=this.index;return i.active=!!t,i.mode=n,i}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t=`default`,n){let r=t===`active`,i=this._cachedDataOpts,a=e+`-`+t,o=i[a],s=this.enableOptionSharing&&xa(n);if(o)return Xc(o,s);let c=this.chart.config,l=c.datasetElementScopeKeys(this._type,e),u=r?[`${e}Hover`,`hover`,e,``]:[e,``],d=c.getOptionScopes(this.getDataset(),l),f=Object.keys(Io.elements[e]),p=c.resolveNamedOptions(d,f,()=>this.getContext(n,r,t),u);return p.$shared&&(p.$shared=s,i[a]=Object.freeze(Xc(p,s))),p}_resolveAnimations(e,t,n){let r=this.chart,i=this._cachedDataOpts,a=`animation-${t}`,o=i[a];if(o)return o;let s;if(r.options.animation!==!1){let r=this.chart.config,i=r.datasetAnimationScopeKeys(this._type,t),a=r.getOptionScopes(this.getDataset(),i);s=r.createResolver(a,this.getContext(e,n,t))}let c=new Ac(r,s&&s.animations);return s&&s._cacheable&&(i[a]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||=Object.assign({},e)}includeOptions(e,t){return!t||Yc(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){let n=this.resolveDataElementOptions(e,t),r=this._sharedOptions,i=this.getSharedOptions(n),a=this.includeOptions(t,i)||i!==r;return this.updateSharedOptions(i,t,n),{sharedOptions:i,includeOptions:a}}updateElement(e,t,n,r){Yc(r)?Object.assign(e,n):this._resolveAnimations(t,r).update(e,n)}updateSharedOptions(e,t,n){e&&!Yc(t)&&this._resolveAnimations(void 0,t).update(e,n)}_setStyle(e,t,n,r){e.active=r;let i=this.getStyle(t,r);this._resolveAnimations(t,n,r).update(e,{options:!r&&this.getSharedOptions(i)||i})}removeHoverStyle(e,t,n){this._setStyle(e,n,`active`,!1)}setHoverStyle(e,t,n){this._setStyle(e,n,`active`,!0)}_removeDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,`active`,!1)}_setDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,`active`,!0)}_resyncElements(e){let t=this._data,n=this._cachedMeta.data;for(let[e,t,n]of this._syncList)this[e](t,n);this._syncList=[];let r=n.length,i=t.length,a=Math.min(i,r);a&&this.parse(0,a),i>r?this._insertElements(r,i-r,e):i<r&&this._removeElements(i,r-i)}_insertElements(e,t,n=!0){let r=this._cachedMeta,i=r.data,a=e+t,o,s=e=>{for(e.length+=t,o=e.length-1;o>=a;o--)e[o]=e[o-t]};for(s(i),o=e;o<a;++o)i[o]=new this.dataElementType;this._parsing&&s(r._parsed),this.parse(e,t),n&&this.updateElements(i,e,t,`reset`)}updateElements(e,t,n,r){}_removeElements(e,t){let n=this._cachedMeta;if(this._parsing){let r=n._parsed.splice(e,t);n._stacked&&Jc(n,r)}n.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{let[t,n,r]=e;this[t](n,r)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){let e=arguments.length;this._sync([`_insertElements`,this.getDataset().data.length-e,e])}_onDataPop(){this._sync([`_removeElements`,this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync([`_removeElements`,0,1])}_onDataSplice(e,t){t&&this._sync([`_removeElements`,e,t]);let n=arguments.length-2;n&&this._sync([`_insertElements`,e,n])}_onDataUnshift(){this._sync([`_insertElements`,0,arguments.length])}},$c=class extends Qc{static id=`line`;static defaults={datasetElementType:`line`,dataElementType:`point`,showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:`category`},_value_:{type:`linear`}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){let t=this._cachedMeta,{dataset:n,data:r=[],_dataset:i}=t,a=this.chart._animationsDisabled,{start:o,count:s}=fo(t,r,a);this._drawStart=o,this._drawCount=s,po(t)&&(o=0,s=r.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!i._decimated,n.points=r;let c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!a,options:c},e),this.updateElements(r,o,s,e)}updateElements(e,t,n,r){let i=r===`reset`,{iScale:a,vScale:o,_stacked:s,_dataset:c}=this._cachedMeta,{sharedOptions:l,includeOptions:u}=this._getSharedOptions(t,r),d=a.axis,f=o.axis,{spanGaps:p,segment:m}=this.options,h=za(p)?p:1/0,g=this.chart._animationsDisabled||i||r===`none`,_=t+n,v=e.length,y=t>0&&this.getParsed(t-1);for(let n=0;n<v;++n){let p=e[n],v=g?p:{};if(n<t||n>=_){v.skip=!0;continue}let b=this.getParsed(n),x=Y(b[f]),S=v[d]=a.getPixelForValue(b[d],n),C=v[f]=i||x?o.getBasePixel():o.getPixelForValue(s?this.applyStack(o,b,s):b[f],n);v.skip=isNaN(S)||isNaN(C)||x,v.stop=n>0&&Math.abs(b[d]-y[d])>h,m&&(v.parsed=b,v.raw=c.data[n]),u&&(v.options=l||this.resolveDataElementOptions(n,p.active?`active`:r)),g||this.updateElement(p,n,v,r),y=b}}getMaxOverflow(){let e=this._cachedMeta,t=e.dataset,n=t.options&&t.options.borderWidth||0,r=e.data||[];if(!r.length)return n;let i=r[0].size(this.resolveDataElementOptions(0)),a=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(n,i,a)/2}draw(){let e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}};function el(){throw Error(`This method is not implemented: Check that a complete date adapter is provided.`)}var tl={_date:class e{static override(t){Object.assign(e.prototype,t)}options;constructor(e){this.options=e||{}}init(){}formats(){return el()}parse(){return el()}format(){return el()}add(){return el()}diff(){return el()}startOf(){return el()}endOf(){return el()}}};function nl(e,t,n,r){let{controller:i,data:a,_sorted:o}=e,s=i._cachedMeta.iScale,c=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(s&&t===s.axis&&t!==`r`&&o&&a.length){let o=s._reversePixels?to:eo;if(!r){let r=o(a,t,n);if(c){let{vScale:t}=i._cachedMeta,{_parsed:n}=e,a=n.slice(0,r.lo+1).reverse().findIndex(e=>!Y(e[t.axis]));r.lo-=Math.max(0,a);let o=n.slice(r.hi).findIndex(e=>!Y(e[t.axis]));r.hi+=Math.max(0,o)}return r}if(i._sharedOptions){let e=a[0],r=typeof e.getRange==`function`&&e.getRange(t);if(r){let e=o(a,t,n-r),i=o(a,t,n+r);return{lo:e.lo,hi:i.hi}}}}return{lo:0,hi:a.length-1}}function rl(e,t,n,r,i){let a=e.getSortedVisibleDatasetMetas(),o=n[t];for(let e=0,n=a.length;e<n;++e){let{index:n,data:s}=a[e],{lo:c,hi:l}=nl(a[e],t,o,i);for(let e=c;e<=l;++e){let t=s[e];t.skip||r(t,n,e)}}}function il(e){let t=e.indexOf(`x`)!==-1,n=e.indexOf(`y`)!==-1;return function(e,r){let i=t?Math.abs(e.x-r.x):0,a=n?Math.abs(e.y-r.y):0;return Math.sqrt(i**2+a**2)}}function al(e,t,n,r,i){let a=[];return!i&&!e.isPointInArea(t)||rl(e,n,t,function(n,o,s){!i&&!Wo(n,e.chartArea,0)||n.inRange(t.x,t.y,r)&&a.push({element:n,datasetIndex:o,index:s})},!0),a}function ol(e,t,n,r){let i=[];function a(e,n,a){let{startAngle:o,endAngle:s}=e.getProps([`startAngle`,`endAngle`],r),{angle:c}=Ga(e,{x:t.x,y:t.y});Ya(c,o,s)&&i.push({element:e,datasetIndex:n,index:a})}return rl(e,n,t,a),i}function sl(e,t,n,r,i,a){let o=[],s=il(n),c=1/0;function l(n,l,u){let d=n.inRange(t.x,t.y,i);if(r&&!d)return;let f=n.getCenterPoint(i);if(!(a||e.isPointInArea(f))&&!d)return;let p=s(t,f);p<c?(o=[{element:n,datasetIndex:l,index:u}],c=p):p===c&&o.push({element:n,datasetIndex:l,index:u})}return rl(e,n,t,l),o}function cl(e,t,n,r,i,a){return!a&&!e.isPointInArea(t)?[]:n===`r`&&!r?ol(e,t,n,i):sl(e,t,n,r,i,a)}function ll(e,t,n,r,i){let a=[],o=n===`x`?`inXRange`:`inYRange`,s=!1;return rl(e,n,t,(e,r,c)=>{e[o]&&e[o](t[n],i)&&(a.push({element:e,datasetIndex:r,index:c}),s||=e.inRange(t.x,t.y,i))}),r&&!s?[]:a}var ul={evaluateInteractionItems:rl,modes:{index(e,t,n,r){let i=Xs(t,e),a=n.axis||`x`,o=n.includeInvisible||!1,s=n.intersect?al(e,i,a,r,o):cl(e,i,a,!1,r,o),c=[];return s.length?(e.getSortedVisibleDatasetMetas().forEach(e=>{let t=s[0].index,n=e.data[t];n&&!n.skip&&c.push({element:n,datasetIndex:e.index,index:t})}),c):[]},dataset(e,t,n,r){let i=Xs(t,e),a=n.axis||`xy`,o=n.includeInvisible||!1,s=n.intersect?al(e,i,a,r,o):cl(e,i,a,!1,r,o);if(s.length>0){let t=s[0].datasetIndex,n=e.getDatasetMeta(t).data;s=[];for(let e=0;e<n.length;++e)s.push({element:n[e],datasetIndex:t,index:e})}return s},point(e,t,n,r){return al(e,Xs(t,e),n.axis||`xy`,r,n.includeInvisible||!1)},nearest(e,t,n,r){let i=Xs(t,e),a=n.axis||`xy`,o=n.includeInvisible||!1;return cl(e,i,a,n.intersect,r,o)},x(e,t,n,r){return ll(e,Xs(t,e),`x`,n.intersect,r)},y(e,t,n,r){return ll(e,Xs(t,e),`y`,n.intersect,r)}}},dl=[`left`,`top`,`right`,`bottom`];function fl(e,t){return e.filter(e=>e.pos===t)}function pl(e,t){return e.filter(e=>dl.indexOf(e.pos)===-1&&e.box.axis===t)}function ml(e,t){return e.sort((e,n)=>{let r=t?n:e,i=t?e:n;return r.weight===i.weight?r.index-i.index:r.weight-i.weight})}function hl(e){let t=[],n,r,i,a,o,s;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:a,options:{stack:o,stackWeight:s=1}}=i,t.push({index:n,box:i,pos:a,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&a+o,stackWeight:s});return t}function gl(e){let t={};for(let n of e){let{stack:e,pos:r,stackWeight:i}=n;if(!e||!dl.includes(r))continue;let a=t[e]||(t[e]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=i}return t}function _l(e,t){let n=gl(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t,a,o,s;for(a=0,o=e.length;a<o;++a){s=e[a];let{fullSize:o}=s.box,c=n[s.stack],l=c&&s.stackWeight/c.weight;s.horizontal?(s.width=l?l*r:o&&t.availableWidth,s.height=i):(s.width=r,s.height=l?l*i:o&&t.availableHeight)}return n}function vl(e){let t=hl(e),n=ml(t.filter(e=>e.box.fullSize),!0),r=ml(fl(t,`left`),!0),i=ml(fl(t,`right`)),a=ml(fl(t,`top`),!0),o=ml(fl(t,`bottom`)),s=pl(t,`x`),c=pl(t,`y`);return{fullSize:n,leftAndTop:r.concat(a),rightAndBottom:i.concat(c).concat(o).concat(s),chartArea:fl(t,`chartArea`),vertical:r.concat(i).concat(c),horizontal:a.concat(o).concat(s)}}function yl(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function bl(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function xl(e,t,n,r){let{pos:i,box:a}=n,o=e.maxPadding;if(!na(i)){n.size&&(e[i]-=n.size);let t=r[n.stack]||{size:0,count:1};t.size=Math.max(t.size,n.horizontal?a.height:a.width),n.size=t.size/t.count,e[i]+=n.size}a.getPadding&&bl(o,a.getPadding());let s=Math.max(0,t.outerWidth-yl(o,e,`left`,`right`)),c=Math.max(0,t.outerHeight-yl(o,e,`top`,`bottom`)),l=s!==e.w,u=c!==e.h;return e.w=s,e.h=c,n.horizontal?{same:l,other:u}:{same:u,other:l}}function Sl(e){let t=e.maxPadding;function n(n){let r=Math.max(t[n]-e[n],0);return e[n]+=r,r}e.y+=n(`top`),e.x+=n(`left`),n(`right`),n(`bottom`)}function Cl(e,t){let n=t.maxPadding;function r(e){let r={left:0,top:0,right:0,bottom:0};return e.forEach(e=>{r[e]=Math.max(t[e],n[e])}),r}return r(e?[`left`,`right`]:[`top`,`bottom`])}function wl(e,t,n,r){let i=[],a,o,s,c,l,u;for(a=0,o=e.length,l=0;a<o;++a){s=e[a],c=s.box,c.update(s.width||t.w,s.height||t.h,Cl(s.horizontal,t));let{same:o,other:d}=xl(t,n,s,r);l|=o&&i.length,u||=d,c.fullSize||i.push(s)}return l&&wl(i,t,n,r)||u}function Tl(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function El(e,t,n,r){let i=n.padding,{x:a,y:o}=t;for(let s of e){let e=s.box,c=r[s.stack]||{count:1,placed:0,weight:1},l=s.stackWeight/c.weight||1;if(s.horizontal){let r=t.w*l,a=c.size||e.height;xa(c.start)&&(o=c.start),e.fullSize?Tl(e,i.left,o,n.outerWidth-i.right-i.left,a):Tl(e,t.left+c.placed,o,r,a),c.start=o,c.placed+=r,o=e.bottom}else{let r=t.h*l,o=c.size||e.width;xa(c.start)&&(a=c.start),e.fullSize?Tl(e,a,i.top,o,n.outerHeight-i.bottom-i.top):Tl(e,a,t.top+c.placed,o,r),c.start=a,c.placed+=r,a=e.right}}t.x=a,t.y=o}var Dl={addBox(e,t){e.boxes||=[],t.fullSize=t.fullSize||!1,t.position=t.position||`top`,t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},e.boxes.push(t)},removeBox(e,t){let n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;let i=ss(e.options.layout.padding),a=Math.max(t-i.width,0),o=Math.max(n-i.height,0),s=vl(e.boxes),c=s.vertical,l=s.horizontal;ca(e.boxes,e=>{typeof e.beforeLayout==`function`&&e.beforeLayout()});let u=c.reduce((e,t)=>t.box.options&&t.box.options.display===!1?e:e+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:a,availableHeight:o,vBoxMaxWidth:a/2/u,hBoxMaxHeight:o/2}),f=Object.assign({},i);bl(f,ss(r));let p=Object.assign({maxPadding:f,w:a,h:o,x:i.left,y:i.top},i),m=_l(c.concat(l),d);wl(s.fullSize,p,d,m),wl(c,p,d,m),wl(l,p,d,m)&&wl(c,p,d,m),Sl(p),El(s.leftAndTop,p,d,m),p.x+=p.w,p.y+=p.h,El(s.rightAndBottom,p,d,m),e.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},ca(s.chartArea,t=>{let n=t.box;Object.assign(n,e.chartArea),n.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}},Ol=class{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,n){}removeEventListener(e,t,n){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,n,r){return t=Math.max(0,t||e.width),n||=e.height,{width:t,height:Math.max(0,r?Math.floor(t/r):n)}}isAttached(e){return!0}updateConfig(e){}},kl=class extends Ol{acquireContext(e){return e&&e.getContext&&e.getContext(`2d`)||null}updateConfig(e){e.options.animation=!1}},Al=`$chartjs`,jl={touchstart:`mousedown`,touchmove:`mousemove`,touchend:`mouseup`,pointerenter:`mouseenter`,pointerdown:`mousedown`,pointermove:`mousemove`,pointerup:`mouseup`,pointerleave:`mouseout`,pointerout:`mouseout`},Ml=e=>e===null||e===``;function Nl(e,t){let n=e.style,r=e.getAttribute(`height`),i=e.getAttribute(`width`);if(e[Al]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||`block`,n.boxSizing=n.boxSizing||`border-box`,Ml(i)){let t=nc(e,`width`);t!==void 0&&(e.width=t)}if(Ml(r)){if(e.style.height===``)e.height=e.width/(t||2);else{let t=nc(e,`height`);t!==void 0&&(e.height=t)}}return e}var Pl=tc?{passive:!0}:!1;function Fl(e,t,n){e&&e.addEventListener(t,n,Pl)}function Il(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,Pl)}function Z(e,t){let n=jl[e.type]||e.type,{x:r,y:i}=Xs(e,t);return{type:n,chart:t,native:e,x:r===void 0?null:r,y:i===void 0?null:i}}function Q(e,t){for(let n of e)if(n===t||n.contains(t))return!0}function Ll(e,t,n){let r=e.canvas,i=new MutationObserver(e=>{let t=!1;for(let n of e)t||=Q(n.addedNodes,r),t&&=!Q(n.removedNodes,r);t&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function Rl(e,t,n){let r=e.canvas,i=new MutationObserver(e=>{let t=!1;for(let n of e)t||=Q(n.removedNodes,r),t&&=!Q(n.addedNodes,r);t&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}var zl=new Map,Bl=0;function Vl(){let e=window.devicePixelRatio;e!==Bl&&(Bl=e,zl.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function Hl(e,t){zl.size||window.addEventListener(`resize`,Vl),zl.set(e,t)}function Ul(e){zl.delete(e),zl.size||window.removeEventListener(`resize`,Vl)}function Wl(e,t,n){let r=e.canvas,i=r&&Hs(r);if(!i)return;let a=so((e,t)=>{let r=i.clientWidth;n(e,t),r<i.clientWidth&&n()},window),o=new ResizeObserver(e=>{let t=e[0],n=t.contentRect.width,r=t.contentRect.height;(n!==0||r!==0)&&a(n,r)});return o.observe(i),Hl(e,a),o}function Gl(e,t,n){n&&n.disconnect(),t===`resize`&&Ul(e)}function Kl(e,t,n){let r=e.canvas,i=so(t=>{e.ctx!==null&&n(Z(t,e))},e);return Fl(r,t,i),i}var ql=class extends Ol{acquireContext(e,t){let n=e&&e.getContext&&e.getContext(`2d`);return n&&n.canvas===e?(Nl(e,t),n):null}releaseContext(e){let t=e.canvas;if(!t[Al])return!1;let n=t[Al].initial;[`height`,`width`].forEach(e=>{let r=n[e];Y(r)?t.removeAttribute(e):t.setAttribute(e,r)});let r=n.style||{};return Object.keys(r).forEach(e=>{t.style[e]=r[e]}),t.width=t.width,delete t[Al],!0}addEventListener(e,t,n){this.removeEventListener(e,t);let r=e.$proxies||={};r[t]=({attach:Ll,detach:Rl,resize:Wl}[t]||Kl)(e,t,n)}removeEventListener(e,t){let n=e.$proxies||={},r=n[t];r&&(({attach:Gl,detach:Gl,resize:Gl}[t]||Il)(e,t,r),n[t]=void 0)}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,n,r){return $s(e,t,n,r)}isAttached(e){let t=e&&Hs(e);return!!(t&&t.isConnected)}};function Jl(e){return!Vs()||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas?kl:ql}var Yl=class{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(e){let{x:t,y:n}=this.getProps([`x`,`y`],e);return{x:t,y:n}}hasValue(){return za(this.x)&&za(this.y)}getProps(e,t){let n=this.$animations;if(!t||!n)return this;let r={};return e.forEach(e=>{r[e]=n[e]&&n[e].active()?n[e]._to:this[e]}),r}};function Xl(e,t){let n=e.options.ticks,r=Zl(e),i=Math.min(n.maxTicksLimit||r,r),a=n.major.enabled?$l(t):[],o=a.length,s=a[0],c=a[o-1],l=[];if(o>i)return eu(t,l,a,o/i),l;let u=Ql(a,t,i);if(o>0){let e,n,r=o>1?Math.round((c-s)/(o-1)):null;for(tu(t,l,u,Y(r)?0:s-r,s),e=0,n=o-1;e<n;e++)tu(t,l,u,a[e],a[e+1]);return tu(t,l,u,c,Y(r)?t.length:c+r),l}return tu(t,l,u),l}function Zl(e){let t=e.options.offset,n=e._tickSize(),r=e._length/n+ +!t,i=e._maxLength/n;return Math.floor(Math.min(r,i))}function Ql(e,t,n){let r=nu(e),i=t.length/n;if(!r)return Math.max(i,1);let a=La(r);for(let e=0,t=a.length-1;e<t;e++){let t=a[e];if(t>i)return t}return Math.max(i,1)}function $l(e){let t=[],n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function eu(e,t,n,r){let i=0,a=n[0],o;for(r=Math.ceil(r),o=0;o<e.length;o++)o===a&&(t.push(e[o]),i++,a=n[i*r])}function tu(e,t,n,r,i){let a=aa(r,0),o=Math.min(aa(i,e.length),e.length),s=0,c,l,u;for(n=Math.ceil(n),i&&(c=i-r,n=c/Math.floor(c/n)),u=a;u<0;)s++,u=Math.round(a+s*n);for(l=Math.max(a,0);l<o;l++)l===u&&(t.push(e[l]),s++,u=Math.round(a+s*n))}function nu(e){let t=e.length,n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}var ru=e=>e===`left`?`right`:e===`right`?`left`:e,iu=(e,t,n)=>t===`top`||t===`left`?e[t]+n:e[t]-n,au=(e,t)=>Math.min(t||e,e);function ou(e,t){let n=[],r=e.length/t,i=e.length,a=0;for(;a<i;a+=r)n.push(e[Math.floor(a)]);return n}function su(e,t,n){let r=e.ticks.length,i=Math.min(t,r-1),a=e._startPixel,o=e._endPixel,s=1e-6,c=e.getPixelForTick(i),l;if(!(n&&(l=r===1?Math.max(c-a,o-c):t===0?(e.getPixelForTick(1)-c)/2:(c-e.getPixelForTick(i-1))/2,c+=i<t?l:-l,c<a-s||c>o+s)))return c}function cu(e,t){ca(e,e=>{let n=e.gc,r=n.length/2,i;if(r>t){for(i=0;i<r;++i)delete e.data[n[i]];n.splice(0,r)}})}function lu(e){return e.drawTicks?e.tickLength:0}function uu(e,t){if(!e.display)return 0;let n=cs(e.font,t),r=ss(e.padding);return(ta(e.text)?e.text.length:1)*n.lineHeight+r.height}function du(e,t){return ds(e,{scale:t,type:`scale`})}function fu(e,t,n){return ds(e,{tick:n,index:t,type:`tick`})}function pu(e,t,n){let r=lo(e);return(n&&t!==`right`||!n&&t===`right`)&&(r=ru(r)),r}function mu(e,t,n,r){let{top:i,left:a,bottom:o,right:s,chart:c}=e,{chartArea:l,scales:u}=c,d=0,f,p,m,h=o-i,g=s-a;if(e.isHorizontal()){if(p=uo(r,a,s),na(n)){let e=Object.keys(n)[0],r=n[e];m=u[e].getPixelForValue(r)+h-t}else m=n===`center`?(l.bottom+l.top)/2+h-t:iu(e,n,t);f=s-a}else{if(na(n)){let e=Object.keys(n)[0],r=n[e];p=u[e].getPixelForValue(r)-g+t}else p=n===`center`?(l.left+l.right)/2-g+t:iu(e,n,t);m=uo(r,o,i),d=n===`left`?-Aa:Aa}return{titleX:p,titleY:m,maxWidth:f,rotation:d}}var hu=class e extends Yl{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:n,_suggestedMax:r}=this;return e=ia(e,1/0),t=ia(t,-1/0),n=ia(n,1/0),r=ia(r,-1/0),{min:ia(e,n),max:ia(t,r),minDefined:ra(e),maxDefined:ra(t)}}getMinMax(e){let{min:t,max:n,minDefined:r,maxDefined:i}=this.getUserBounds(),a;if(r&&i)return{min:t,max:n};let o=this.getMatchingVisibleMetas();for(let s=0,c=o.length;s<c;++s)a=o[s].controller.getMinMax(this,e),r||(t=Math.min(t,a.min)),i||(n=Math.max(n,a.max));return t=i&&t>n?n:t,n=r&&t>n?t:n,{min:ia(t,ia(n,t)),max:ia(n,ia(t,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||=this._computeLabelItems(e)}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){sa(this.options.beforeUpdate,[this])}update(e,t,n){let{beginAtZero:r,grace:i,ticks:a}=this.options,o=a.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||=(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=us(this,i,r),!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let s=o<this.ticks.length;this._convertTicksToLabels(s?ou(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source===`auto`)&&(this.ticks=Xl(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),s&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,n;this.isHorizontal()?(t=this.left,n=this.right):(t=this.top,n=this.bottom,e=!e),this._startPixel=t,this._endPixel=n,this._reversePixels=e,this._length=n-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){sa(this.options.afterUpdate,[this])}beforeSetDimensions(){sa(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){sa(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),sa(this.options[e],[this])}beforeDataLimits(){this._callHooks(`beforeDataLimits`)}determineDataLimits(){}afterDataLimits(){this._callHooks(`afterDataLimits`)}beforeBuildTicks(){this._callHooks(`beforeBuildTicks`)}buildTicks(){return[]}afterBuildTicks(){this._callHooks(`afterBuildTicks`)}beforeTickToLabelConversion(){sa(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){let t=this.options.ticks,n,r,i;for(n=0,r=e.length;n<r;n++)i=e[n],i.label=sa(t.callback,[i.value,n,e],this)}afterTickToLabelConversion(){sa(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){sa(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let e=this.options,t=e.ticks,n=au(this.ticks.length,e.ticks.maxTicksLimit),r=t.minRotation||0,i=t.maxRotation,a=r,o,s,c;if(!this._isVisible()||!t.display||r>=i||n<=1||!this.isHorizontal()){this.labelRotation=r;return}let l=this._getLabelSizes(),u=l.widest.width,d=l.highest.height,f=Xa(this.chart.width-u,0,this.maxWidth);o=e.offset?this.maxWidth/n:f/(n-1),u+6>o&&(o=f/(n-(e.offset?.5:1)),s=this.maxHeight-lu(e.grid)-t.padding-uu(e.title,this.chart.options.font),c=Math.sqrt(u*u+d*d),a=Ua(Math.min(Math.asin(Xa((l.highest.height+6)/o,-1,1)),Math.asin(Xa(s/c,-1,1))-Math.asin(Xa(d/c,-1,1)))),a=Math.max(r,Math.min(i,a))),this.labelRotation=a}afterCalculateLabelRotation(){sa(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){sa(this.options.beforeFit,[this])}fit(){let e={width:0,height:0},{chart:t,options:{ticks:n,title:r,grid:i}}=this,a=this._isVisible(),o=this.isHorizontal();if(a){let a=uu(r,t.options.font);if(o?(e.width=this.maxWidth,e.height=lu(i)+a):(e.height=this.maxHeight,e.width=lu(i)+a),n.display&&this.ticks.length){let{first:t,last:r,widest:i,highest:a}=this._getLabelSizes(),s=n.padding*2,c=Ha(this.labelRotation),l=Math.cos(c),u=Math.sin(c);if(o){let t=n.mirror?0:u*i.width+l*a.height;e.height=Math.min(this.maxHeight,e.height+t+s)}else{let t=n.mirror?0:l*i.width+u*a.height;e.width=Math.min(this.maxWidth,e.width+t+s)}this._calculatePadding(t,r,u,l)}}this._handleMargins(),o?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,n,r){let{ticks:{align:i,padding:a},position:o}=this.options,s=this.labelRotation!==0,c=o!==`top`&&this.axis===`x`;if(this.isHorizontal()){let o=this.getPixelForTick(0)-this.left,l=this.right-this.getPixelForTick(this.ticks.length-1),u=0,d=0;s?c?(u=r*e.width,d=n*t.height):(u=n*e.height,d=r*t.width):i===`start`?d=t.width:i===`end`?u=e.width:i!==`inner`&&(u=e.width/2,d=t.width/2),this.paddingLeft=Math.max((u-o+a)*this.width/(this.width-o),0),this.paddingRight=Math.max((d-l+a)*this.width/(this.width-l),0)}else{let n=t.height/2,r=e.height/2;i===`start`?(n=0,r=e.height):i===`end`&&(n=t.height,r=0),this.paddingTop=n+a,this.paddingBottom=r+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){sa(this.options.afterFit,[this])}isHorizontal(){let{axis:e,position:t}=this.options;return t===`top`||t===`bottom`||e===`x`}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,n;for(t=0,n=e.length;t<n;t++)Y(e[t].label)&&(e.splice(t,1),n--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){let t=this.options.ticks.sampleSize,n=this.ticks;t<n.length&&(n=ou(n,t)),this._labelSizes=e=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,n){let{ctx:r,_longestTextCache:i}=this,a=[],o=[],s=Math.floor(t/au(t,n)),c=0,l=0,u,d,f,p,m,h,g,_,v,y,b;for(u=0;u<t;u+=s){if(p=e[u].label,m=this._resolveTickFontOptions(u),r.font=h=m.string,g=i[h]=i[h]||{data:{},gc:[]},_=m.lineHeight,v=y=0,!Y(p)&&!ta(p))v=Ro(r,g.data,g.gc,v,p),y=_;else if(ta(p))for(d=0,f=p.length;d<f;++d)b=p[d],!Y(b)&&!ta(b)&&(v=Ro(r,g.data,g.gc,v,b),y+=_);a.push(v),o.push(y),c=Math.max(v,c),l=Math.max(y,l)}cu(i,t);let x=a.indexOf(c),S=o.indexOf(l),C=e=>({width:a[e]||0,height:o[e]||0});return{first:C(0),last:C(t-1),widest:C(x),highest:C(S),widths:a,heights:o}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);let t=this._startPixel+e*this._length;return Za(this._alignToPixels?Bo(this.chart,t,0):t)}getDecimalForPixel(e){let t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){let t=this.ticks||[];if(e>=0&&e<t.length){let n=t[e];return n.$context||=fu(this.getContext(),e,n)}return this.$context||=du(this.chart.getContext(),this)}_tickSize(){let e=this.options.ticks,t=Ha(this.labelRotation),n=Math.abs(Math.cos(t)),r=Math.abs(Math.sin(t)),i=this._getLabelSizes(),a=e.autoSkipPadding||0,o=i?i.widest.width+a:0,s=i?i.highest.height+a:0;return this.isHorizontal()?s*n>o*r?o/n:s/r:s*r<o*n?s/n:o/r}_isVisible(){let e=this.options.display;return e===`auto`?this.getMatchingVisibleMetas().length>0:!!e}_computeGridLineItems(e){let t=this.axis,n=this.chart,r=this.options,{grid:i,position:a,border:o}=r,s=i.offset,c=this.isHorizontal(),l=this.ticks.length+ +!!s,u=lu(i),d=[],f=o.setContext(this.getContext()),p=f.display?f.width:0,m=p/2,h=function(e){return Bo(n,e,p)},g,_,v,y,b,x,S,C,w,T,E,ee;if(a===`top`)g=h(this.bottom),x=this.bottom-u,C=g-m,T=h(e.top)+m,ee=e.bottom;else if(a===`bottom`)g=h(this.top),T=e.top,ee=h(e.bottom)-m,x=g+m,C=this.top+u;else if(a===`left`)g=h(this.right),b=this.right-u,S=g-m,w=h(e.left)+m,E=e.right;else if(a===`right`)g=h(this.left),w=e.left,E=h(e.right)-m,b=g+m,S=this.left+u;else if(t===`x`){if(a===`center`)g=h((e.top+e.bottom)/2+.5);else if(na(a)){let e=Object.keys(a)[0],t=a[e];g=h(this.chart.scales[e].getPixelForValue(t))}T=e.top,ee=e.bottom,x=g+m,C=x+u}else if(t===`y`){if(a===`center`)g=h((e.left+e.right)/2);else if(na(a)){let e=Object.keys(a)[0],t=a[e];g=h(this.chart.scales[e].getPixelForValue(t))}b=g-m,S=b-u,w=e.left,E=e.right}let D=aa(r.ticks.maxTicksLimit,l),te=Math.max(1,Math.ceil(l/D));for(_=0;_<l;_+=te){let e=this.getContext(_),t=i.setContext(e),r=o.setContext(e),a=t.lineWidth,l=t.color,u=r.dash||[],f=r.dashOffset,p=t.tickWidth,m=t.tickColor,h=t.tickBorderDash||[],g=t.tickBorderDashOffset;v=su(this,_,s),v!==void 0&&(y=Bo(n,v,a),c?b=S=w=E=y:x=C=T=ee=y,d.push({tx1:b,ty1:x,tx2:S,ty2:C,x1:w,y1:T,x2:E,y2:ee,width:a,color:l,borderDash:u,borderDashOffset:f,tickWidth:p,tickColor:m,tickBorderDash:h,tickBorderDashOffset:g}))}return this._ticksLength=l,this._borderValue=g,d}_computeLabelItems(e){let t=this.axis,n=this.options,{position:r,ticks:i}=n,a=this.isHorizontal(),o=this.ticks,{align:s,crossAlign:c,padding:l,mirror:u}=i,d=lu(n.grid),f=d+l,p=u?-l:f,m=-Ha(this.labelRotation),h=[],g,_,v,y,b,x,S,C,w,T,E,ee,D=`middle`;if(r===`top`)x=this.bottom-p,S=this._getXAxisLabelAlignment();else if(r===`bottom`)x=this.top+p,S=this._getXAxisLabelAlignment();else if(r===`left`){let e=this._getYAxisLabelAlignment(d);S=e.textAlign,b=e.x}else if(r===`right`){let e=this._getYAxisLabelAlignment(d);S=e.textAlign,b=e.x}else if(t===`x`){if(r===`center`)x=(e.top+e.bottom)/2+f;else if(na(r)){let e=Object.keys(r)[0],t=r[e];x=this.chart.scales[e].getPixelForValue(t)+f}S=this._getXAxisLabelAlignment()}else if(t===`y`){if(r===`center`)b=(e.left+e.right)/2-f;else if(na(r)){let e=Object.keys(r)[0],t=r[e];b=this.chart.scales[e].getPixelForValue(t)}S=this._getYAxisLabelAlignment(d).textAlign}t===`y`&&(s===`start`?D=`top`:s===`end`&&(D=`bottom`));let te=this._getLabelSizes();for(g=0,_=o.length;g<_;++g){v=o[g],y=v.label;let e=i.setContext(this.getContext(g));C=this.getPixelForTick(g)+i.labelOffset,w=this._resolveTickFontOptions(g),T=w.lineHeight,E=ta(y)?y.length:1;let t=E/2,n=e.color,s=e.textStrokeColor,l=e.textStrokeWidth,d=S;a?(b=C,S===`inner`&&(d=g===_-1?this.options.reverse?`left`:`right`:g===0?this.options.reverse?`right`:`left`:`center`),ee=r===`top`?c===`near`||m!==0?-E*T+T/2:c===`center`?-te.highest.height/2-t*T+T:-te.highest.height+T/2:c===`near`||m!==0?T/2:c===`center`?te.highest.height/2-t*T:te.highest.height-E*T,u&&(ee*=-1),m!==0&&!e.showLabelBackdrop&&(b+=T/2*Math.sin(m))):(x=C,ee=(1-E)*T/2);let f;if(e.showLabelBackdrop){let t=ss(e.backdropPadding),n=te.heights[g],r=te.widths[g],i=ee-t.top,a=0-t.left;switch(D){case`middle`:i-=n/2;break;case`bottom`:i-=n}switch(S){case`center`:a-=r/2;break;case`right`:a-=r;break;case`inner`:g===_-1?a-=r:g>0&&(a-=r/2)}f={left:a,top:i,width:r+t.width,height:n+t.height,color:e.backdropColor}}h.push({label:y,font:w,textOffset:ee,options:{rotation:m,color:n,strokeColor:s,strokeWidth:l,textAlign:d,textBaseline:D,translation:[b,x],backdrop:f}})}return h}_getXAxisLabelAlignment(){let{position:e,ticks:t}=this.options;if(-Ha(this.labelRotation))return e===`top`?`left`:`right`;let n=`center`;return t.align===`start`?n=`left`:t.align===`end`?n=`right`:t.align===`inner`&&(n=`inner`),n}_getYAxisLabelAlignment(e){let{position:t,ticks:{crossAlign:n,mirror:r,padding:i}}=this.options,a=this._getLabelSizes(),o=e+i,s=a.widest.width,c,l;return t===`left`?r?(l=this.right+i,n===`near`?c=`left`:n===`center`?(c=`center`,l+=s/2):(c=`right`,l+=s)):(l=this.right-o,n===`near`?c=`right`:n===`center`?(c=`center`,l-=s/2):(c=`left`,l=this.left)):t===`right`?r?(l=this.left+i,n===`near`?c=`right`:n===`center`?(c=`center`,l-=s/2):(c=`left`,l-=s)):(l=this.left+o,n===`near`?c=`left`:n===`center`?(c=`center`,l+=s/2):(c=`right`,l=this.right)):c=`right`,{textAlign:c,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;let e=this.chart,t=this.options.position;if(t===`left`||t===`right`)return{top:0,left:this.left,bottom:e.height,right:this.right};if(t===`top`||t===`bottom`)return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){let{ctx:e,options:{backgroundColor:t},left:n,top:r,width:i,height:a}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(n,r,i,a),e.restore())}getLineWidthForValue(e){let t=this.options.grid;if(!this._isVisible()||!t.display)return 0;let n=this.ticks.findIndex(t=>t.value===e);return n>=0?t.setContext(this.getContext(n)).lineWidth:0}drawGrid(e){let t=this.options.grid,n=this.ctx,r=this._gridLineItems||=this._computeGridLineItems(e),i,a,o=(e,t,r)=>{!r.width||!r.color||(n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.setLineDash(r.borderDash||[]),n.lineDashOffset=r.borderDashOffset,n.beginPath(),n.moveTo(e.x,e.y),n.lineTo(t.x,t.y),n.stroke(),n.restore())};if(t.display)for(i=0,a=r.length;i<a;++i){let e=r[i];t.drawOnChartArea&&o({x:e.x1,y:e.y1},{x:e.x2,y:e.y2},e),t.drawTicks&&o({x:e.tx1,y:e.ty1},{x:e.tx2,y:e.ty2},{color:e.tickColor,width:e.tickWidth,borderDash:e.tickBorderDash,borderDashOffset:e.tickBorderDashOffset})}}drawBorder(){let{chart:e,ctx:t,options:{border:n,grid:r}}=this,i=n.setContext(this.getContext()),a=n.display?i.width:0;if(!a)return;let o=r.setContext(this.getContext(0)).lineWidth,s=this._borderValue,c,l,u,d;this.isHorizontal()?(c=Bo(e,this.left,a)-a/2,l=Bo(e,this.right,o)+o/2,u=d=s):(u=Bo(e,this.top,a)-a/2,d=Bo(e,this.bottom,o)+o/2,c=l=s),t.save(),t.lineWidth=i.width,t.strokeStyle=i.color,t.beginPath(),t.moveTo(c,u),t.lineTo(l,d),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;let t=this.ctx,n=this._computeLabelArea();n&&Go(t,n);let r=this.getLabelItems(e);for(let e of r){let n=e.options,r=e.font,i=e.label,a=e.textOffset;Qo(t,i,0,a,r,n)}n&&Ko(t)}drawTitle(){let{ctx:e,options:{position:t,title:n,reverse:r}}=this;if(!n.display)return;let i=cs(n.font),a=ss(n.padding),o=n.align,s=i.lineHeight/2;t===`bottom`||t===`center`||na(t)?(s+=a.bottom,ta(n.text)&&(s+=i.lineHeight*(n.text.length-1))):s+=a.top;let{titleX:c,titleY:l,maxWidth:u,rotation:d}=mu(this,s,t,o);Qo(e,n.text,0,0,i,{color:n.color,maxWidth:u,rotation:d,textAlign:pu(o,t,r),textBaseline:`middle`,translation:[c,l]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){let t=this.options,n=t.ticks&&t.ticks.z||0,r=aa(t.grid&&t.grid.z,-1),i=aa(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==e.prototype.draw?[{z:n,draw:e=>{this.draw(e)}}]:[{z:r,draw:e=>{this.drawBackground(),this.drawGrid(e),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:e=>{this.drawLabels(e)}}]}getMatchingVisibleMetas(e){let t=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+`AxisID`,r=[],i,a;for(i=0,a=t.length;i<a;++i){let a=t[i];a[n]===this.id&&(!e||a.type===e)&&r.push(a)}return r}_resolveTickFontOptions(e){return cs(this.options.ticks.setContext(this.getContext(e)).font)}_maxDigits(){let e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}},gu=class{constructor(e,t,n){this.type=e,this.scope=t,this.override=n,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){let t=Object.getPrototypeOf(e),n;yu(t)&&(n=this.register(t));let r=this.items,i=e.id,a=this.scope+`.`+i;if(!i)throw Error(`class does not have id: `+e);return i in r?a:(r[i]=e,_u(e,a,n),this.override&&Io.override(e.id,e.overrides),a)}get(e){return this.items[e]}unregister(e){let t=this.items,n=e.id,r=this.scope;n in t&&delete t[n],r&&n in Io[r]&&(delete Io[r][n],this.override&&delete Mo[n])}};function _u(e,t,n){let r=pa(Object.create(null),[n?Io.get(n):{},Io.get(t),e.defaults]);Io.set(t,r),e.defaultRoutes&&vu(t,e.defaultRoutes),e.descriptors&&Io.describe(t,e.descriptors)}function vu(e,t){Object.keys(t).forEach(n=>{let r=n.split(`.`),i=r.pop(),a=[e].concat(r).join(`.`),o=t[n].split(`.`),s=o.pop(),c=o.join(`.`);Io.route(a,i,c,s)})}function yu(e){return`id`in e&&`defaults`in e}var bu=new class{constructor(){this.controllers=new gu(Qc,`datasets`,!0),this.elements=new gu(Yl,`elements`),this.plugins=new gu(Object,`plugins`),this.scales=new gu(hu,`scales`),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each(`register`,e)}remove(...e){this._each(`unregister`,e)}addControllers(...e){this._each(`register`,e,this.controllers)}addElements(...e){this._each(`register`,e,this.elements)}addPlugins(...e){this._each(`register`,e,this.plugins)}addScales(...e){this._each(`register`,e,this.scales)}getController(e){return this._get(e,this.controllers,`controller`)}getElement(e){return this._get(e,this.elements,`element`)}getPlugin(e){return this._get(e,this.plugins,`plugin`)}getScale(e){return this._get(e,this.scales,`scale`)}removeControllers(...e){this._each(`unregister`,e,this.controllers)}removeElements(...e){this._each(`unregister`,e,this.elements)}removePlugins(...e){this._each(`unregister`,e,this.plugins)}removeScales(...e){this._each(`unregister`,e,this.scales)}_each(e,t,n){[...t].forEach(t=>{let r=n||this._getRegistryForType(t);n||r.isForType(t)||r===this.plugins&&t.id?this._exec(e,r,t):ca(t,t=>{let r=n||this._getRegistryForType(t);this._exec(e,r,t)})})}_exec(e,t,n){let r=ba(e);sa(n[`before`+r],[],n),t[e](n),sa(n[`after`+r],[],n)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){let n=this._typedRegistries[t];if(n.isForType(e))return n}return this.plugins}_get(e,t,n){let r=t.get(e);if(r===void 0)throw Error(`"`+e+`" is not a registered `+n+`.`);return r}},xu=class{constructor(){this._init=void 0}notify(e,t,n,r){if(t===`beforeInit`&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,`install`)),this._init===void 0)return;let i=r?this._descriptors(e).filter(r):this._descriptors(e),a=this._notify(i,e,t,n);return t===`afterDestroy`&&(this._notify(i,e,`stop`),this._notify(this._init,e,`uninstall`),this._init=void 0),a}_notify(e,t,n,r){r||={};for(let i of e){let e=i.plugin,a=e[n];if(sa(a,[t,r,i.options],e)===!1&&r.cancelable)return!1}return!0}invalidate(){Y(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;let t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){let n=e&&e.config,r=aa(n.options&&n.options.plugins,{}),i=Su(n);return r===!1&&!t?[]:wu(e,i,r,t)}_notifyStateChanges(e){let t=this._oldCache||[],n=this._cache,r=(e,t)=>e.filter(e=>!t.some(t=>e.plugin.id===t.plugin.id));this._notify(r(t,n),e,`stop`),this._notify(r(n,t),e,`start`)}};function Su(e){let t={},n=[],r=Object.keys(bu.plugins.items);for(let e=0;e<r.length;e++)n.push(bu.getPlugin(r[e]));let i=e.plugins||[];for(let e=0;e<i.length;e++){let r=i[e];n.indexOf(r)===-1&&(n.push(r),t[r.id]=!0)}return{plugins:n,localIds:t}}function Cu(e,t){return!t&&e===!1?null:e===!0?{}:e}function wu(e,{plugins:t,localIds:n},r,i){let a=[],o=e.getContext();for(let s of t){let t=s.id,c=Cu(r[t],i);c!==null&&a.push({plugin:s,options:Tu(e.config,{plugin:s,local:n[t]},c,o)})}return a}function Tu(e,{plugin:t,local:n},r,i){let a=e.pluginScopeKeys(t),o=e.getOptionScopes(r,a);return n&&t.defaults&&o.push(t.defaults),e.createResolver(o,i,[``],{scriptable:!1,indexable:!1,allKeys:!0})}function Eu(e,t){let n=Io.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||`x`}function Du(e,t){let n=e;return e===`_index_`?n=t:e===`_value_`&&(n=t===`x`?`y`:`x`),n}function Ou(e,t){return e===t?`_index_`:`_value_`}function ku(e){if(e===`x`||e===`y`||e===`r`)return e}function Au(e){if(e===`top`||e===`bottom`)return`x`;if(e===`left`||e===`right`)return`y`}function ju(e,...t){if(ku(e))return e;for(let n of t){let t=n.axis||Au(n.position)||e.length>1&&ku(e[0].toLowerCase());if(t)return t}throw Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function Mu(e,t,n){if(n[t+`AxisID`]===e)return{axis:t}}function Nu(e,t){if(t.data&&t.data.datasets){let n=t.data.datasets.filter(t=>t.xAxisID===e||t.yAxisID===e);if(n.length)return Mu(e,`x`,n[0])||Mu(e,`y`,n[0])}return{}}function Pu(e,t){let n=Mo[e.type]||{scales:{}},r=t.scales||{},i=Eu(e.type,t),a=Object.create(null);return Object.keys(r).forEach(t=>{let o=r[t];if(!na(o))return console.error(`Invalid scale configuration for scale: ${t}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);let s=ju(t,o,Nu(t,e),Io.scales[o.type]),c=Ou(s,i),l=n.scales||{};a[t]=ma(Object.create(null),[{axis:s},o,l[s],l[c]])}),e.data.datasets.forEach(n=>{let i=n.type||e.type,o=n.indexAxis||Eu(i,t),s=(Mo[i]||{}).scales||{};Object.keys(s).forEach(e=>{let t=Du(e,o),i=n[t+`AxisID`]||t;a[i]=a[i]||Object.create(null),ma(a[i],[{axis:t},r[i],s[e]])})}),Object.keys(a).forEach(e=>{let t=a[e];ma(t,[Io.scales[t.type],Io.scale])}),a}function Fu(e){let t=e.options||={};t.plugins=aa(t.plugins,{}),t.scales=Pu(e,t)}function Iu(e){return e||={},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function Lu(e){return e||={},e.data=Iu(e.data),Fu(e),e}var Ru=new Map,zu=new Set;function Bu(e,t){let n=Ru.get(e);return n||(n=t(),Ru.set(e,n),zu.add(n)),n}var Vu=(e,t,n)=>{let r=ya(t,n);r!==void 0&&e.add(r)},Hu=class{constructor(e){this._config=Lu(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=Iu(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){let e=this._config;this.clearCache(),Fu(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Bu(e,()=>[[`datasets.${e}`,``]])}datasetAnimationScopeKeys(e,t){return Bu(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,``]])}datasetElementScopeKeys(e,t){return Bu(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,``]])}pluginScopeKeys(e){let t=e.id,n=this.type;return Bu(`${n}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){let n=this._scopeCache,r=n.get(e);return(!r||t)&&(r=new Map,n.set(e,r)),r}getOptionScopes(e,t,n){let{options:r,type:i}=this,a=this._cachedScopes(e,n),o=a.get(t);if(o)return o;let s=new Set;t.forEach(t=>{e&&(s.add(e),t.forEach(t=>Vu(s,e,t))),t.forEach(e=>Vu(s,r,e)),t.forEach(e=>Vu(s,Mo[i]||{},e)),t.forEach(e=>Vu(s,Io,e)),t.forEach(e=>Vu(s,No,e))});let c=Array.from(s);return c.length===0&&c.push(Object.create(null)),zu.has(t)&&a.set(t,c),c}chartOptionScopes(){let{options:e,type:t}=this;return[e,Mo[t]||{},Io.datasets[t]||{},{type:t},Io,No]}resolveNamedOptions(e,t,n,r=[``]){let i={$shared:!0},{resolver:a,subPrefixes:o}=Uu(this._resolverCache,e,r),s=a;if(Gu(a,t)){i.$shared=!1,n=Sa(n)?n():n;let t=this.createResolver(e,n,o);s=ps(a,n,t)}for(let e of t)i[e]=s[e];return i}createResolver(e,t,n=[``],r){let{resolver:i}=Uu(this._resolverCache,e,n);return na(t)?ps(i,t,void 0,r):i}};function Uu(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));let i=n.join(),a=r.get(i);return a||(a={resolver:fs(t,n),subPrefixes:n.filter(e=>!e.toLowerCase().includes(`hover`))},r.set(i,a)),a}var Wu=e=>na(e)&&Object.getOwnPropertyNames(e).some(t=>Sa(e[t]));function Gu(e,t){let{isScriptable:n,isIndexable:r}=ms(e);for(let i of t){let t=n(i),a=r(i),o=(a||t)&&e[i];if(t&&(Sa(o)||Wu(o))||a&&ta(o))return!0}return!1}var Ku=`4.5.1`,qu=[`top`,`bottom`,`left`,`right`,`chartArea`];function Ju(e,t){return e===`top`||e===`bottom`||qu.indexOf(e)===-1&&t===`x`}function Yu(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function Xu(e){let t=e.chart,n=t.options.animation;t.notifyPlugins(`afterRender`),sa(n&&n.onComplete,[e],t)}function Zu(e){let t=e.chart,n=t.options.animation;sa(n&&n.onProgress,[e],t)}function Qu(e){return Vs()&&typeof e==`string`?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}var $u={},ed=e=>{let t=Qu(e);return Object.values($u).filter(e=>e.canvas===t).pop()};function td(e,t,n){let r=Object.keys(e);for(let i of r){let r=+i;if(r>=t){let a=e[i];delete e[i],(n>0||r>t)&&(e[r+n]=a)}}}function nd(e,t,n,r){return!n||e.type===`mouseout`?null:r?t:e}var rd=class{static defaults=Io;static instances=$u;static overrides=Mo;static registry=bu;static version=Ku;static getChart=ed;static register(...e){bu.add(...e),id()}static unregister(...e){bu.remove(...e),id()}constructor(e,t){let n=this.config=new Hu(t),r=Qu(e),i=ed(r);if(i)throw Error(`Canvas is already in use. Chart with ID '`+i.id+`' must be destroyed before the canvas with ID '`+i.canvas.id+`' can be reused.`);let a=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||(Jl(r))),this.platform.updateConfig(n);let o=this.platform.acquireContext(r,a.aspectRatio),s=o&&o.canvas,c=s&&s.height,l=s&&s.width;if(this.id=ea(),this.ctx=o,this.canvas=s,this.width=l,this.height=c,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new xu,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=co(e=>this.update(e),a.resizeDelay||0),this._dataChanges=[],$u[this.id]=this,!o||!s){console.error(`Failed to create chart: can't acquire context from the given item`);return}Ec.listen(this,`complete`,Xu),Ec.listen(this,`progress`,Zu),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:e,maintainAspectRatio:t},width:n,height:r,_aspectRatio:i}=this;return Y(e)?t&&i?i:r?n/r:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return bu}_initialize(){return this.notifyPlugins(`beforeInit`),this.options.responsive?this.resize():ec(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins(`afterInit`),this}clear(){return Vo(this.canvas,this.ctx),this}stop(){return Ec.stop(this),this}resize(e,t){Ec.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){let n=this.options,r=this.canvas,i=n.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(r,e,t,i),o=n.devicePixelRatio||this.platform.getDevicePixelRatio(),s=this.width?`resize`:`attach`;this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,ec(this,o,!0)&&(this.notifyPlugins(`resize`,{size:a}),sa(n.onResize,[this,a],this),this.attached&&this._doResize(s)&&this.render())}ensureScalesHaveIDs(){ca(this.options.scales||{},(e,t)=>{e.id=t})}buildOrUpdateScales(){let e=this.options,t=e.scales,n=this.scales,r=Object.keys(n).reduce((e,t)=>(e[t]=!1,e),{}),i=[];t&&(i=i.concat(Object.keys(t).map(e=>{let n=t[e],r=ju(e,n),i=r===`r`,a=r===`x`;return{options:n,dposition:i?`chartArea`:a?`bottom`:`left`,dtype:i?`radialLinear`:a?`category`:`linear`}}))),ca(i,t=>{let i=t.options,a=i.id,o=ju(a,i),s=aa(i.type,t.dtype);(i.position===void 0||Ju(i.position,o)!==Ju(t.dposition))&&(i.position=t.dposition),r[a]=!0;let c=null;a in n&&n[a].type===s?c=n[a]:(c=new(bu.getScale(s))({id:a,type:s,ctx:this.ctx,chart:this}),n[c.id]=c),c.init(i,e)}),ca(r,(e,t)=>{e||delete n[t]}),ca(n,e=>{Dl.configure(this,e,e.options),Dl.addBox(this,e)})}_updateMetasets(){let e=this._metasets,t=this.data.datasets.length,n=e.length;if(e.sort((e,t)=>e.index-t.index),n>t){for(let e=t;e<n;++e)this._destroyDatasetMeta(e);e.splice(t,n-t)}this._sortedMetasets=e.slice(0).sort(Yu(`order`,`index`))}_removeUnreferencedMetasets(){let{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((e,n)=>{t.filter(t=>t===e._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){let e=[],t=this.data.datasets,n,r;for(this._removeUnreferencedMetasets(),n=0,r=t.length;n<r;n++){let r=t[n],i=this.getDatasetMeta(n),a=r.type||this.config.type;if(i.type&&i.type!==a&&(this._destroyDatasetMeta(n),i=this.getDatasetMeta(n)),i.type=a,i.indexAxis=r.indexAxis||Eu(a,this.options),i.order=r.order||0,i.index=n,i.label=``+r.label,i.visible=this.isDatasetVisible(n),i.controller)i.controller.updateIndex(n),i.controller.linkScales();else{let t=bu.getController(a),{datasetElementType:r,dataElementType:o}=Io.datasets[a];Object.assign(t,{dataElementType:bu.getElement(o),datasetElementType:r&&bu.getElement(r)}),i.controller=new t(this,n),e.push(i.controller)}}return this._updateMetasets(),e}_resetElements(){ca(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins(`reset`)}update(e){let t=this.config;t.update();let n=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins(`beforeUpdate`,{mode:e,cancelable:!0})===!1)return;let i=this.buildOrUpdateControllers();this.notifyPlugins(`beforeElementsUpdate`);let a=0;for(let e=0,t=this.data.datasets.length;e<t;e++){let{controller:t}=this.getDatasetMeta(e),n=!r&&i.indexOf(t)===-1;t.buildOrUpdateElements(n),a=Math.max(+t.getMaxOverflow(),a)}a=this._minPadding=n.layout.autoPadding?a:0,this._updateLayout(a),r||ca(i,e=>{e.reset()}),this._updateDatasets(e),this.notifyPlugins(`afterUpdate`,{mode:e}),this._layers.sort(Yu(`z`,`_idx`));let{_active:o,_lastEvent:s}=this;s?this._eventHandler(s,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){ca(this.scales,e=>{Dl.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let e=this.options;(!Ca(new Set(Object.keys(this._listeners)),new Set(e.events))||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(let{method:n,start:r,count:i}of t)td(e,r,n===`_removeElements`?-i:i)}_getUniformDataChanges(){let e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];let t=this.data.datasets.length,n=t=>new Set(e.filter(e=>e[0]===t).map((e,t)=>t+`,`+e.splice(1).join(`,`))),r=n(0);for(let e=1;e<t;e++)if(!Ca(r,n(e)))return;return Array.from(r).map(e=>e.split(`,`)).map(e=>({method:e[1],start:+e[2],count:+e[3]}))}_updateLayout(e){if(this.notifyPlugins(`beforeLayout`,{cancelable:!0})===!1)return;Dl.update(this,this.width,this.height,e);let t=this.chartArea,n=t.width<=0||t.height<=0;this._layers=[],ca(this.boxes,e=>{n&&e.position===`chartArea`||(e.configure&&e.configure(),this._layers.push(...e._layers()))},this),this._layers.forEach((e,t)=>{e._idx=t}),this.notifyPlugins(`afterLayout`)}_updateDatasets(e){if(this.notifyPlugins(`beforeDatasetsUpdate`,{mode:e,cancelable:!0})!==!1){for(let e=0,t=this.data.datasets.length;e<t;++e)this.getDatasetMeta(e).controller.configure();for(let t=0,n=this.data.datasets.length;t<n;++t)this._updateDataset(t,Sa(e)?e({datasetIndex:t}):e);this.notifyPlugins(`afterDatasetsUpdate`,{mode:e})}}_updateDataset(e,t){let n=this.getDatasetMeta(e),r={meta:n,index:e,mode:t,cancelable:!0};this.notifyPlugins(`beforeDatasetUpdate`,r)!==!1&&(n.controller._update(t),r.cancelable=!1,this.notifyPlugins(`afterDatasetUpdate`,r))}render(){this.notifyPlugins(`beforeRender`,{cancelable:!0})!==!1&&(Ec.has(this)?this.attached&&!Ec.running(this)&&Ec.start(this):(this.draw(),Xu({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){let{width:e,height:t}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(e,t)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins(`beforeDraw`,{cancelable:!0})===!1)return;let t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins(`afterDraw`)}_getSortedDatasetMetas(e){let t=this._sortedMetasets,n=[],r,i;for(r=0,i=t.length;r<i;++r){let i=t[r];(!e||i.visible)&&n.push(i)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins(`beforeDatasetsDraw`,{cancelable:!0})===!1)return;let e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins(`afterDatasetsDraw`)}_drawDataset(e){let t=this.ctx,n={meta:e,index:e.index,cancelable:!0},r=Tc(this,e);this.notifyPlugins(`beforeDatasetDraw`,n)!==!1&&(r&&Go(t,r),e.controller.draw(),r&&Ko(t),n.cancelable=!1,this.notifyPlugins(`afterDatasetDraw`,n))}isPointInArea(e){return Wo(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,n,r){let i=ul.modes[t];return typeof i==`function`?i(this,e,n,r):[]}getDatasetMeta(e){let t=this.data.datasets[e],n=this._metasets,r=n.filter(e=>e&&e._dataset===t).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},n.push(r)),r}getContext(){return this.$context||=ds(null,{chart:this,type:`chart`})}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){let t=this.data.datasets[e];if(!t)return!1;let n=this.getDatasetMeta(e);return typeof n.hidden==`boolean`?!n.hidden:!t.hidden}setDatasetVisibility(e,t){let n=this.getDatasetMeta(e);n.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,n){let r=n?`show`:`hide`,i=this.getDatasetMeta(e),a=i.controller._resolveAnimations(void 0,r);xa(t)?(i.data[t].hidden=!n,this.update()):(this.setDatasetVisibility(e,n),a.update(i,{visible:n}),this.update(t=>t.datasetIndex===e?r:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){let t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),Ec.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins(`beforeDestroy`);let{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Vo(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete $u[this.id],this.notifyPlugins(`afterDestroy`)}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let e=this._listeners,t=this.platform,n=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},r=(e,t,n)=>{e.offsetX=t,e.offsetY=n,this._eventHandler(e)};ca(this.options.events,e=>n(e,r))}bindResponsiveEvents(){this._responsiveListeners||={};let e=this._responsiveListeners,t=this.platform,n=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},r=(n,r)=>{e[n]&&(t.removeEventListener(this,n,r),delete e[n])},i=(e,t)=>{this.canvas&&this.resize(e,t)},a,o=()=>{r(`attach`,o),this.attached=!0,this.resize(),n(`resize`,i),n(`detach`,a)};a=()=>{this.attached=!1,r(`resize`,i),this._stop(),this._resize(0,0),n(`attach`,o)},t.isAttached(this.canvas)?o():a()}unbindEvents(){ca(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},ca(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,n){let r=n?`set`:`remove`,i,a,o,s;for(t===`dataset`&&(i=this.getDatasetMeta(e[0].datasetIndex),i.controller[`_`+r+`DatasetHoverStyle`]()),o=0,s=e.length;o<s;++o){a=e[o];let t=a&&this.getDatasetMeta(a.datasetIndex).controller;t&&t[r+`HoverStyle`](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){let t=this._active||[],n=e.map(({datasetIndex:e,index:t})=>{let n=this.getDatasetMeta(e);if(!n)throw Error(`No dataset found at index `+e);return{datasetIndex:e,element:n.data[t],index:t}});la(n,t)||(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,t))}notifyPlugins(e,t,n){return this._plugins.notify(this,e,t,n)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,n){let r=this.options.hover,i=(e,t)=>e.filter(e=>!t.some(t=>e.datasetIndex===t.datasetIndex&&e.index===t.index)),a=i(t,e),o=n?e:i(e,t);a.length&&this.updateHoverStyle(a,r.mode,!1),o.length&&r.mode&&this.updateHoverStyle(o,r.mode,!0)}_eventHandler(e,t){let n={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},r=t=>(t.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins(`beforeEvent`,n,r)===!1)return;let i=this._handleEvent(e,t,n.inChartArea);return n.cancelable=!1,this.notifyPlugins(`afterEvent`,n,r),(i||n.changed)&&this.render(),this}_handleEvent(e,t,n){let{_active:r=[],options:i}=this,a=t,o=this._getActiveElements(e,r,n,a),s=wa(e),c=nd(e,this._lastEvent,n,s);n&&(this._lastEvent=null,sa(i.onHover,[e,o,this],this),s&&sa(i.onClick,[e,o,this],this));let l=!la(o,r);return(l||t)&&(this._active=o,this._updateHoverStyles(o,r,t)),this._lastEvent=c,l}_getActiveElements(e,t,n,r){if(e.type===`mouseout`)return[];if(!n)return t;let i=this.options.hover;return this.getElementsAtEventForMode(e,i.mode,i,r)}};function id(){return ca(rd.instances,e=>e._plugins.invalidate())}function ad(e,t,n=t){e.lineCap=aa(n.borderCapStyle,t.borderCapStyle),e.setLineDash(aa(n.borderDash,t.borderDash)),e.lineDashOffset=aa(n.borderDashOffset,t.borderDashOffset),e.lineJoin=aa(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=aa(n.borderWidth,t.borderWidth),e.strokeStyle=aa(n.borderColor,t.borderColor)}function od(e,t,n){e.lineTo(n.x,n.y)}function sd(e){return e.stepped?qo:e.tension||e.cubicInterpolationMode===`monotone`?Jo:od}function cd(e,t,n={}){let r=e.length,{start:i=0,end:a=r-1}=n,{start:o,end:s}=t,c=Math.max(i,o),l=Math.min(a,s),u=i<o&&a<o||i>s&&a>s;return{count:r,start:c,loop:t.loop,ilen:l<c&&!u?r+l-c:l-c}}function ld(e,t,n,r){let{points:i,options:a}=t,{count:o,start:s,loop:c,ilen:l}=cd(i,n,r),u=sd(a),{move:d=!0,reverse:f}=r||{},p,m,h;for(p=0;p<=l;++p)m=i[(s+(f?l-p:p))%o],!m.skip&&(d?(e.moveTo(m.x,m.y),d=!1):u(e,h,m,f,a.stepped),h=m);return c&&(m=i[(s+(f?l:0))%o],u(e,h,m,f,a.stepped)),!!c}function ud(e,t,n,r){let i=t.points,{count:a,start:o,ilen:s}=cd(i,n,r),{move:c=!0,reverse:l}=r||{},u=0,d=0,f,p,m,h,g,_,v=e=>(o+(l?s-e:e))%a,y=()=>{h!==g&&(e.lineTo(u,g),e.lineTo(u,h),e.lineTo(u,_))};for(c&&(p=i[v(0)],e.moveTo(p.x,p.y)),f=0;f<=s;++f){if(p=i[v(f)],p.skip)continue;let t=p.x,n=p.y,r=t|0;r===m?(n<h?h=n:n>g&&(g=n),u=(d*u+t)/++d):(y(),e.lineTo(t,n),m=r,d=0,h=g=n),_=n}y()}function dd(e){let t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!==`monotone`&&!t.stepped&&!n?ud:ld}function fd(e){return e.stepped?ic:e.tension||e.cubicInterpolationMode===`monotone`?ac:rc}function pd(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),ad(e,t.options),e.stroke(i)}function md(e,t,n,r){let{segments:i,options:a}=t,o=dd(t);for(let s of i)ad(e,a,s.style),e.beginPath(),o(e,t,s,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}var hd=typeof Path2D==`function`;function gd(e,t,n,r){hd&&!t.options.segment?pd(e,t,n,r):md(e,t,n,r)}var _d=class extends Yl{static id=`line`;static defaults={borderCapStyle:`butt`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:`default`,fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};static descriptors={_scriptable:!0,_indexable:e=>e!==`borderDash`&&e!==`fill`};constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){let n=this.options;if((n.tension||n.cubicInterpolationMode===`monotone`)&&!n.stepped&&!this._pointsUpdated){let r=n.spanGaps?this._loop:this._fullLoop;Bs(this._points,n,e,r,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||=vc(this,this.options.segment)}first(){let e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){let e=this.segments,t=this.points,n=e.length;return n&&t[e[n-1].end]}interpolate(e,t){let n=this.options,r=e[t],i=this.points,a=hc(this,{property:t,start:r,end:r});if(!a.length)return;let o=[],s=fd(n),c,l;for(c=0,l=a.length;c<l;++c){let{start:l,end:u}=a[c],d=i[l],f=i[u];if(d===f){o.push(d);continue}let p=s(d,f,Math.abs((r-d[t])/(f[t]-d[t])),n.stepped);p[t]=e[t],o.push(p)}return o.length===1?o[0]:o}pathSegment(e,t,n){return dd(this)(e,this,t,n)}path(e,t,n){let r=this.segments,i=dd(this),a=this._loop;t||=0,n||=this.points.length-t;for(let o of r)a&=i(e,this,o,{start:t,end:t+n-1});return!!a}draw(e,t,n,r){let i=this.options||{};(this.points||[]).length&&i.borderWidth&&(e.save(),gd(e,this,n,r),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};function vd(e,t,n,r){let i=e.options,{[n]:a}=e.getProps([n],r);return Math.abs(t-a)<i.radius+i.hitRadius}var yd=class extends Yl{static id=`point`;parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:`circle`,radius:3,rotation:0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};constructor(e){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,t,n){let r=this.options,{x:i,y:a}=this.getProps([`x`,`y`],n);return(e-i)**2+(t-a)**2<(r.hitRadius+r.radius)**2}inXRange(e,t){return vd(this,e,`x`,t)}inYRange(e,t){return vd(this,e,`y`,t)}getCenterPoint(e){let{x:t,y:n}=this.getProps([`x`,`y`],e);return{x:t,y:n}}size(e){e=e||this.options||{};let t=e.radius||0;t=Math.max(t,t&&e.hoverRadius||0);let n=t&&e.borderWidth||0;return(t+n)*2}draw(e,t){let n=this.options;this.skip||n.radius<.1||!Wo(this,t,this.size(n)/2)||(e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.fillStyle=n.backgroundColor,Ho(e,n,this.x,this.y))}getRange(){let e=this.options||{};return e.radius+e.hitRadius}},$={average(e){if(!e.length)return!1;let t,n,r=new Set,i=0,a=0;for(t=0,n=e.length;t<n;++t){let n=e[t].element;if(n&&n.hasValue()){let e=n.tooltipPosition();r.add(e.x),i+=e.y,++a}}return a===0||r.size===0?!1:{x:[...r].reduce((e,t)=>e+t)/r.size,y:i/a}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=1/0,a,o,s;for(a=0,o=e.length;a<o;++a){let n=e[a].element;if(n&&n.hasValue()){let e=Ka(t,n.getCenterPoint());e<i&&(i=e,s=n)}}if(s){let e=s.tooltipPosition();n=e.x,r=e.y}return{x:n,y:r}}};function bd(e,t){return t&&(ta(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function xd(e){return(typeof e==`string`||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function Sd(e,t){let{element:n,datasetIndex:r,index:i}=t,a=e.getDatasetMeta(r).controller,{label:o,value:s}=a.getLabelAndValue(i);return{chart:e,label:o,parsed:a.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:s,dataset:a.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function Cd(e,t){let n=e.chart.ctx,{body:r,footer:i,title:a}=e,{boxWidth:o,boxHeight:s}=t,c=cs(t.bodyFont),l=cs(t.titleFont),u=cs(t.footerFont),d=a.length,f=i.length,p=r.length,m=ss(t.padding),h=m.height,g=0,_=r.reduce((e,t)=>e+t.before.length+t.lines.length+t.after.length,0);if(_+=e.beforeBody.length+e.afterBody.length,d&&(h+=d*l.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),_){let e=t.displayColors?Math.max(s,c.lineHeight):c.lineHeight;h+=p*e+(_-p)*c.lineHeight+(_-1)*t.bodySpacing}f&&(h+=t.footerMarginTop+f*u.lineHeight+(f-1)*t.footerSpacing);let v=0,y=function(e){g=Math.max(g,n.measureText(e).width+v)};return n.save(),n.font=l.string,ca(e.title,y),n.font=c.string,ca(e.beforeBody.concat(e.afterBody),y),v=t.displayColors?o+2+t.boxPadding:0,ca(r,e=>{ca(e.before,y),ca(e.lines,y),ca(e.after,y)}),v=0,n.font=u.string,ca(e.footer,y),n.restore(),g+=m.width,{width:g,height:h}}function wd(e,t){let{y:n,height:r}=t;return n<r/2?`top`:n>e.height-r/2?`bottom`:`center`}function Td(e,t,n,r){let{x:i,width:a}=r,o=n.caretSize+n.caretPadding;if(e===`left`&&i+a+o>t.width||e===`right`&&i-a-o<0)return!0}function Ed(e,t,n,r){let{x:i,width:a}=n,{width:o,chartArea:{left:s,right:c}}=e,l=`center`;return r===`center`?l=i<=(s+c)/2?`left`:`right`:i<=a/2?l=`left`:i>=o-a/2&&(l=`right`),Td(l,e,t,n)&&(l=`center`),l}function Dd(e,t,n){let r=n.yAlign||t.yAlign||wd(e,n);return{xAlign:n.xAlign||t.xAlign||Ed(e,t,n,r),yAlign:r}}function Od(e,t){let{x:n,width:r}=e;return t===`right`?n-=r:t===`center`&&(n-=r/2),n}function kd(e,t,n){let{y:r,height:i}=e;return t===`top`?r+=n:r-=t===`bottom`?i+n:i/2,r}function Ad(e,t,n,r){let{caretSize:i,caretPadding:a,cornerRadius:o}=e,{xAlign:s,yAlign:c}=n,l=i+a,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=os(o),m=Od(t,s),h=kd(t,c,l);return c===`center`?s===`left`?m+=l:s===`right`&&(m-=l):s===`left`?m-=Math.max(u,f)+i:s===`right`&&(m+=Math.max(d,p)+i),{x:Xa(m,0,r.width-t.width),y:Xa(h,0,r.height-t.height)}}function jd(e,t,n){let r=ss(n.padding);return t===`center`?e.x+e.width/2:t===`right`?e.x+e.width-r.right:e.x+r.left}function Md(e){return bd([],xd(e))}function Nd(e,t,n){return ds(e,{tooltip:t,tooltipItems:n,type:`tooltip`})}function Pd(e,t){let n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}var Fd={beforeTitle:$i,title(e){if(e.length>0){let t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode===`dataset`)return t.dataset.label||``;if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return``},afterTitle:$i,beforeBody:$i,beforeLabel:$i,label(e){if(this&&this.options&&this.options.mode===`dataset`)return e.label+`: `+e.formattedValue||e.formattedValue;let t=e.dataset.label||``;t&&(t+=`: `);let n=e.formattedValue;return Y(n)||(t+=n),t},labelColor(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:$i,afterBody:$i,beforeFooter:$i,footer:$i,afterFooter:$i};function Id(e,t,n,r){let i=e[t].call(n,r);return i===void 0?Fd[t].call(n,r):i}var Ld=class extends Yl{static positioners=$;constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let e=this._cachedAnimations;if(e)return e;let t=this.chart,n=this.options.setContext(this.getContext()),r=n.enabled&&t.options.animation&&n.animations,i=new Ac(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(i)),i}getContext(){return this.$context||=Nd(this.chart.getContext(),this,this._tooltipItems)}getTitle(e,t){let{callbacks:n}=t,r=Id(n,`beforeTitle`,this,e),i=Id(n,`title`,this,e),a=Id(n,`afterTitle`,this,e),o=[];return o=bd(o,xd(r)),o=bd(o,xd(i)),o=bd(o,xd(a)),o}getBeforeBody(e,t){return Md(Id(t.callbacks,`beforeBody`,this,e))}getBody(e,t){let{callbacks:n}=t,r=[];return ca(e,e=>{let t={before:[],lines:[],after:[]},i=Pd(n,e);bd(t.before,xd(Id(i,`beforeLabel`,this,e))),bd(t.lines,Id(i,`label`,this,e)),bd(t.after,xd(Id(i,`afterLabel`,this,e))),r.push(t)}),r}getAfterBody(e,t){return Md(Id(t.callbacks,`afterBody`,this,e))}getFooter(e,t){let{callbacks:n}=t,r=Id(n,`beforeFooter`,this,e),i=Id(n,`footer`,this,e),a=Id(n,`afterFooter`,this,e),o=[];return o=bd(o,xd(r)),o=bd(o,xd(i)),o=bd(o,xd(a)),o}_createItems(e){let t=this._active,n=this.chart.data,r=[],i=[],a=[],o=[],s,c;for(s=0,c=t.length;s<c;++s)o.push(Sd(this.chart,t[s]));return e.filter&&(o=o.filter((t,r,i)=>e.filter(t,r,i,n))),e.itemSort&&(o=o.sort((t,r)=>e.itemSort(t,r,n))),ca(o,t=>{let n=Pd(e.callbacks,t);r.push(Id(n,`labelColor`,this,t)),i.push(Id(n,`labelPointStyle`,this,t)),a.push(Id(n,`labelTextColor`,this,t))}),this.labelColors=r,this.labelPointStyles=i,this.labelTextColors=a,this.dataPoints=o,o}update(e,t){let n=this.options.setContext(this.getContext()),r=this._active,i,a=[];if(!r.length)this.opacity!==0&&(i={opacity:0});else{let e=$[n.position].call(this,r,this._eventPosition);a=this._createItems(n),this.title=this.getTitle(a,n),this.beforeBody=this.getBeforeBody(a,n),this.body=this.getBody(a,n),this.afterBody=this.getAfterBody(a,n),this.footer=this.getFooter(a,n);let t=this._size=Cd(this,n),o=Object.assign({},e,t),s=Dd(this.chart,n,o),c=Ad(n,o,s,this.chart);this.xAlign=s.xAlign,this.yAlign=s.yAlign,i={opacity:1,x:c.x,y:c.y,width:t.width,height:t.height,caretX:e.x,caretY:e.y}}this._tooltipItems=a,this.$context=void 0,i&&this._resolveAnimations().update(this,i),e&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,n,r){let i=this.getCaretPosition(e,n,r);t.lineTo(i.x1,i.y1),t.lineTo(i.x2,i.y2),t.lineTo(i.x3,i.y3)}getCaretPosition(e,t,n){let{xAlign:r,yAlign:i}=this,{caretSize:a,cornerRadius:o}=n,{topLeft:s,topRight:c,bottomLeft:l,bottomRight:u}=os(o),{x:d,y:f}=e,{width:p,height:m}=t,h,g,_,v,y,b;return i===`center`?(y=f+m/2,r===`left`?(h=d,g=h-a,v=y+a,b=y-a):(h=d+p,g=h+a,v=y-a,b=y+a),_=h):(g=r===`left`?d+Math.max(s,l)+a:r===`right`?d+p-Math.max(c,u)-a:this.caretX,i===`top`?(v=f,y=v-a,h=g-a,_=g+a):(v=f+m,y=v+a,h=g+a,_=g-a),b=v),{x1:h,x2:g,x3:_,y1:v,y2:y,y3:b}}drawTitle(e,t,n){let r=this.title,i=r.length,a,o,s;if(i){let c=cc(n.rtl,this.x,this.width);for(e.x=jd(this,n.titleAlign,n),t.textAlign=c.textAlign(n.titleAlign),t.textBaseline=`middle`,a=cs(n.titleFont),o=n.titleSpacing,t.fillStyle=n.titleColor,t.font=a.string,s=0;s<i;++s)t.fillText(r[s],c.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+o,s+1===i&&(e.y+=n.titleMarginBottom-o)}}_drawColorBox(e,t,n,r,i){let a=this.labelColors[n],o=this.labelPointStyles[n],{boxHeight:s,boxWidth:c}=i,l=cs(i.bodyFont),u=jd(this,`left`,i),d=r.x(u),f=s<l.lineHeight?(l.lineHeight-s)/2:0,p=t.y+f;if(i.usePointStyle){let t={radius:Math.min(c,s)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},n=r.leftForLtr(d,c)+c/2,l=p+s/2;e.strokeStyle=i.multiKeyBackground,e.fillStyle=i.multiKeyBackground,Ho(e,t,n,l),e.strokeStyle=a.borderColor,e.fillStyle=a.backgroundColor,Ho(e,t,n,l)}else{e.lineWidth=na(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,e.strokeStyle=a.borderColor,e.setLineDash(a.borderDash||[]),e.lineDashOffset=a.borderDashOffset||0;let t=r.leftForLtr(d,c),n=r.leftForLtr(r.xPlus(d,1),c-2),o=os(a.borderRadius);Object.values(o).some(e=>e!==0)?(e.beginPath(),e.fillStyle=i.multiKeyBackground,$o(e,{x:t,y:p,w:c,h:s,radius:o}),e.fill(),e.stroke(),e.fillStyle=a.backgroundColor,e.beginPath(),$o(e,{x:n,y:p+1,w:c-2,h:s-2,radius:o}),e.fill()):(e.fillStyle=i.multiKeyBackground,e.fillRect(t,p,c,s),e.strokeRect(t,p,c,s),e.fillStyle=a.backgroundColor,e.fillRect(n,p+1,c-2,s-2))}e.fillStyle=this.labelTextColors[n]}drawBody(e,t,n){let{body:r}=this,{bodySpacing:i,bodyAlign:a,displayColors:o,boxHeight:s,boxWidth:c,boxPadding:l}=n,u=cs(n.bodyFont),d=u.lineHeight,f=0,p=cc(n.rtl,this.x,this.width),m=function(n){t.fillText(n,p.x(e.x+f),e.y+d/2),e.y+=d+i},h=p.textAlign(a),g,_,v,y,b,x,S;for(t.textAlign=a,t.textBaseline=`middle`,t.font=u.string,e.x=jd(this,h,n),t.fillStyle=n.bodyColor,ca(this.beforeBody,m),f=o&&h!==`right`?a===`center`?c/2+l:c+2+l:0,y=0,x=r.length;y<x;++y){for(g=r[y],_=this.labelTextColors[y],t.fillStyle=_,ca(g.before,m),v=g.lines,o&&v.length&&(this._drawColorBox(t,e,y,p,n),d=Math.max(u.lineHeight,s)),b=0,S=v.length;b<S;++b)m(v[b]),d=u.lineHeight;ca(g.after,m)}f=0,d=u.lineHeight,ca(this.afterBody,m),e.y-=i}drawFooter(e,t,n){let r=this.footer,i=r.length,a,o;if(i){let s=cc(n.rtl,this.x,this.width);for(e.x=jd(this,n.footerAlign,n),e.y+=n.footerMarginTop,t.textAlign=s.textAlign(n.footerAlign),t.textBaseline=`middle`,a=cs(n.footerFont),t.fillStyle=n.footerColor,t.font=a.string,o=0;o<i;++o)t.fillText(r[o],s.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+n.footerSpacing}}drawBackground(e,t,n,r){let{xAlign:i,yAlign:a}=this,{x:o,y:s}=e,{width:c,height:l}=n,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=os(r.cornerRadius);t.fillStyle=r.backgroundColor,t.strokeStyle=r.borderColor,t.lineWidth=r.borderWidth,t.beginPath(),t.moveTo(o+u,s),a===`top`&&this.drawCaret(e,t,n,r),t.lineTo(o+c-d,s),t.quadraticCurveTo(o+c,s,o+c,s+d),a===`center`&&i===`right`&&this.drawCaret(e,t,n,r),t.lineTo(o+c,s+l-p),t.quadraticCurveTo(o+c,s+l,o+c-p,s+l),a===`bottom`&&this.drawCaret(e,t,n,r),t.lineTo(o+f,s+l),t.quadraticCurveTo(o,s+l,o,s+l-f),a===`center`&&i===`left`&&this.drawCaret(e,t,n,r),t.lineTo(o,s+u),t.quadraticCurveTo(o,s,o+u,s),t.closePath(),t.fill(),r.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){let t=this.chart,n=this.$animations,r=n&&n.x,i=n&&n.y;if(r||i){let n=$[e.position].call(this,this._active,this._eventPosition);if(!n)return;let a=this._size=Cd(this,e),o=Object.assign({},n,this._size),s=Dd(t,e,o),c=Ad(e,o,s,t);(r._to!==c.x||i._to!==c.y)&&(this.xAlign=s.xAlign,this.yAlign=s.yAlign,this.width=a.width,this.height=a.height,this.caretX=n.x,this.caretY=n.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(e){let t=this.options.setContext(this.getContext()),n=this.opacity;if(!n)return;this._updateAnimationTarget(t);let r={width:this.width,height:this.height},i={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;let a=ss(t.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&o&&(e.save(),e.globalAlpha=n,this.drawBackground(i,e,r,t),lc(e,t.textDirection),i.y+=a.top,this.drawTitle(i,e,t),this.drawBody(i,e,t),this.drawFooter(i,e,t),uc(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){let n=this._active,r=e.map(({datasetIndex:e,index:t})=>{let n=this.chart.getDatasetMeta(e);if(!n)throw Error(`Cannot find a dataset at index `+e);return{datasetIndex:e,element:n.data[t],index:t}}),i=!la(n,r),a=this._positionChanged(r,t);(i||a)&&(this._active=r,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,n=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let r=this.options,i=this._active||[],a=this._getActiveElements(e,i,t,n),o=this._positionChanged(a,e),s=t||!la(a,i)||o;return s&&(this._active=a,(r.enabled||r.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),s}_getActiveElements(e,t,n,r){let i=this.options;if(e.type===`mouseout`)return[];if(!r)return t.filter(e=>this.chart.data.datasets[e.datasetIndex]&&this.chart.getDatasetMeta(e.datasetIndex).controller.getParsed(e.index)!==void 0);let a=this.chart.getElementsAtEventForMode(e,i.mode,i,n);return i.reverse&&a.reverse(),a}_positionChanged(e,t){let{caretX:n,caretY:r,options:i}=this,a=$[i.position].call(this,e,t);return a!==!1&&(n!==a.x||r!==a.y)}},Rd={id:`tooltip`,_element:Ld,positioners:$,afterInit(e,t,n){n&&(e.tooltip=new Ld({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){let t=e.tooltip;if(t&&t._willRender()){let n={tooltip:t};if(e.notifyPlugins(`beforeTooltipDraw`,{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins(`afterTooltipDraw`,n)}},afterEvent(e,t){if(e.tooltip){let n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:`average`,backgroundColor:`rgba(0,0,0,0.8)`,titleColor:`#fff`,titleFont:{weight:`bold`},titleSpacing:2,titleMarginBottom:6,titleAlign:`left`,bodyColor:`#fff`,bodySpacing:2,bodyFont:{},bodyAlign:`left`,footerColor:`#fff`,footerSpacing:2,footerMarginTop:6,footerFont:{weight:`bold`},footerAlign:`left`,padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:`#fff`,displayColors:!0,boxPadding:0,borderColor:`rgba(0,0,0,0)`,borderWidth:0,animation:{duration:400,easing:`easeOutQuart`},animations:{numbers:{type:`number`,properties:[`x`,`y`,`width`,`height`,`caretX`,`caretY`]},opacity:{easing:`linear`,duration:200}},callbacks:Fd},defaultRoutes:{bodyFont:`font`,footerFont:`font`,titleFont:`font`},descriptors:{_scriptable:e=>e!==`filter`&&e!==`itemSort`&&e!==`external`,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:`animation`}},additionalOptionScopes:[`interaction`]},zd=(e,t,n,r)=>(typeof t==`string`?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function Bd(e,t,n,r){let i=e.indexOf(t);return i===-1?zd(e,t,n,r):i===e.lastIndexOf(t)?i:n}var Vd=(e,t)=>e===null?null:Xa(Math.round(e),0,t);function Hd(e){let t=this.getLabels();return e>=0&&e<t.length?t[e]:e}var Ud=class extends hu{static id=`category`;static defaults={ticks:{callback:Hd}};constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){let t=this._addedLabels;if(t.length){let e=this.getLabels();for(let{index:n,label:r}of t)e[n]===r&&e.splice(n,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(Y(e))return null;let n=this.getLabels();return t=isFinite(t)&&n[t]===e?t:Bd(n,e,aa(t,e),this._addedLabels),Vd(t,n.length-1)}determineDataLimits(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),{min:n,max:r}=this.getMinMax(!0);this.options.bounds===`ticks`&&(e||(n=0),t||(r=this.getLabels().length-1)),this.min=n,this.max=r}buildTicks(){let e=this.min,t=this.max,n=this.options.offset,r=[],i=this.getLabels();i=e===0&&t===i.length-1?i:i.slice(e,t+1),this._valueRange=Math.max(i.length-+!n,1),this._startValue=this.min-(n?.5:0);for(let n=e;n<=t;n++)r.push({value:n});return r}getLabelForValue(e){return Hd.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!=`number`&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}};function Wd(e,t){let n=[],{bounds:r,step:i,min:a,max:o,precision:s,count:c,maxTicks:l,maxDigits:u,includeBounds:d}=e,f=i||1,p=l-1,{min:m,max:h}=t,g=!Y(a),_=!Y(o),v=!Y(c),y=(h-m)/(u+1),b=Ia((h-m)/p/f)*f,x,S,C,w;if(b<1e-14&&!g&&!_)return[{value:m},{value:h}];w=Math.ceil(h/b)-Math.floor(m/b),w>p&&(b=Ia(w*b/p/f)*f),Y(s)||(x=10**s,b=Math.ceil(b*x)/x),r===`ticks`?(S=Math.floor(m/b)*b,C=Math.ceil(h/b)*b):(S=m,C=h),g&&_&&i&&Ba((o-a)/i,b/1e3)?(w=Math.round(Math.min((o-a)/b,l)),b=(o-a)/w,S=a,C=o):v?(S=g?a:S,C=_?o:C,w=c-1,b=(C-S)/w):(w=(C-S)/b,w=Fa(w,Math.round(w),b/1e3)?Math.round(w):Math.ceil(w));let T=Math.max(Wa(b),Wa(S));x=10**(Y(s)?T:s),S=Math.round(S*x)/x,C=Math.round(C*x)/x;let E=0;for(g&&(d&&S!==a?(n.push({value:a}),S<a&&E++,Fa(Math.round((S+E*b)*x)/x,a,Gd(a,y,e))&&E++):S<a&&E++);E<w;++E){let e=Math.round((S+E*b)*x)/x;if(_&&e>o)break;n.push({value:e})}return _&&d&&C!==o?n.length&&Fa(n[n.length-1].value,o,Gd(o,y,e))?n[n.length-1].value=o:n.push({value:o}):(!_||C===o)&&n.push({value:C}),n}function Gd(e,t,{horizontal:n,minRotation:r}){let i=Ha(r),a=(n?Math.sin(i):Math.cos(i))||.001,o=.75*t*(``+e).length;return Math.min(t/a,o)}var Kd=class extends hu{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return Y(e)||(typeof e==`number`||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){let{beginAtZero:e}=this.options,{minDefined:t,maxDefined:n}=this.getUserBounds(),{min:r,max:i}=this,a=e=>r=t?r:e,o=e=>i=n?i:e;if(e){let e=Pa(r),t=Pa(i);e<0&&t<0?o(0):e>0&&t>0&&a(0)}if(r===i){let t=i===0?1:Math.abs(i*.05);o(i+t),e||a(r-t)}this.min=r,this.max=i}getTickLimit(){let{maxTicksLimit:e,stepSize:t}=this.options.ticks,n;return t?(n=Math.ceil(this.max/t)-Math.floor(this.min/t)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${t} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),e||=11),e&&(n=Math.min(e,n)),n}computeTickLimit(){return 1/0}buildTicks(){let e=this.options,t=e.ticks,n=this.getTickLimit();n=Math.max(2,n);let r=Wd({maxTicks:n,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},this._range||this);return e.bounds===`ticks`&&Va(r,this,`value`),e.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){let e=this.ticks,t=this.min,n=this.max;if(super.configure(),this.options.offset&&e.length){let r=(n-t)/Math.max(e.length-1,1)/2;t-=r,n+=r}this._startValue=t,this._endValue=n,this._valueRange=n-t}getLabelForValue(e){return Do(e,this.chart.options.locale,this.options.ticks.format)}},qd=class extends Kd{static id=`linear`;static defaults={ticks:{callback:Ao.formatters.numeric}};determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=ra(e)?e:0,this.max=ra(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){let e=this.isHorizontal(),t=e?this.width:this.height,n=Ha(this.options.ticks.minRotation),r=(e?Math.sin(n):Math.cos(n))||.001,i=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,i.lineHeight/r))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}},Jd=e=>Math.floor(Na(e)),Yd=(e,t)=>10**(Jd(e)+t);function Xd(e){return e/10**Jd(e)==1}function Zd(e,t,n){let r=10**n,i=Math.floor(e/r);return Math.ceil(t/r)-i}function Qd(e,t){let n=Jd(t-e);for(;Zd(e,t,n)>10;)n++;for(;Zd(e,t,n)<10;)n--;return Math.min(n,Jd(e))}function $d(e,{min:t,max:n}){t=ia(e.min,t);let r=[],i=Jd(t),a=Qd(t,n),o=a<0?10**Math.abs(a):1,s=10**a,c=i>a?10**i:0,l=Math.round((t-c)*o)/o,u=Math.floor((t-c)/s/10)*s*10,d=Math.floor((l-u)/10**a),f=ia(e.min,Math.round((c+u+d*10**a)*o)/o);for(;f<n;)r.push({value:f,major:Xd(f),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(a++,d=2,o=a>=0?1:o),f=Math.round((c+u+d*10**a)*o)/o;let p=ia(e.max,f);return r.push({value:p,major:Xd(p),significand:d}),r}(class extends hu{static id=`logarithmic`;static defaults={ticks:{callback:Ao.formatters.logarithmic,major:{enabled:!0}}};constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,t){let n=Kd.prototype.parse.apply(this,[e,t]);if(n===0){this._zero=!0;return}return ra(n)&&n>0?n:null}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=ra(e)?Math.max(0,e):null,this.max=ra(t)?Math.max(0,t):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!ra(this._userMin)&&(this.min=e===Yd(this.min,0)?Yd(this.min,-1):Yd(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),n=this.min,r=this.max,i=t=>n=e?n:t,a=e=>r=t?r:e;n===r&&(n<=0?(i(1),a(10)):(i(Yd(n,-1)),a(Yd(r,1)))),n<=0&&i(Yd(r,-1)),r<=0&&a(Yd(n,1)),this.min=n,this.max=r}buildTicks(){let e=this.options,t=$d({min:this._userMin,max:this._userMax},this);return e.bounds===`ticks`&&Va(t,this,`value`),e.reverse?(t.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),t}getLabelForValue(e){return e===void 0?`0`:Do(e,this.chart.options.locale,this.options.ticks.format)}configure(){let e=this.min;super.configure(),this._startValue=Na(e),this._valueRange=Na(this.max)-Na(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(Na(e)-this._startValue)/this._valueRange)}getValueForPixel(e){let t=this.getDecimalForPixel(e);return 10**(this._startValue+t*this._valueRange)}});function ef(e){let t=e.ticks;if(t.display&&e.display){let e=ss(t.backdropPadding);return aa(t.font&&t.font.size,Io.font.size)+e.height}return 0}function tf(e,t,n){return n=ta(n)?n:[n],{w:zo(e,t.string,n),h:n.length*t.lineHeight}}function nf(e,t,n,r,i){return e===r||e===i?{start:t-n/2,end:t+n/2}:e<r||e>i?{start:t-n,end:t}:{start:t,end:t+n}}function rf(e){let t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],i=[],a=e._pointLabels.length,o=e.options.pointLabels,s=o.centerPointLabels?Ta/a:0;for(let c=0;c<a;c++){let a=o.setContext(e.getPointLabelContext(c));i[c]=a.padding;let l=e.getPointPosition(c,e.drawingArea+i[c],s),u=cs(a.font),d=tf(e.ctx,u,e._pointLabels[c]);r[c]=d;let f=Ja(e.getIndexAngle(c)+s),p=Math.round(Ua(f));af(n,t,f,nf(p,l.x,d.w,0,180),nf(p,l.y,d.h,90,270))}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=cf(e,r,i)}function af(e,t,n,r,i){let a=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n)),s=0,c=0;r.start<t.l?(s=(t.l-r.start)/a,e.l=Math.min(e.l,t.l-s)):r.end>t.r&&(s=(r.end-t.r)/a,e.r=Math.max(e.r,t.r+s)),i.start<t.t?(c=(t.t-i.start)/o,e.t=Math.min(e.t,t.t-c)):i.end>t.b&&(c=(i.end-t.b)/o,e.b=Math.max(e.b,t.b+c))}function of(e,t,n){let r=e.drawingArea,{extra:i,additionalAngle:a,padding:o,size:s}=n,c=e.getPointPosition(t,r+i+o,a),l=Math.round(Ua(Ja(c.angle+Aa))),u=df(c.y,s.h,l),d=lf(l),f=uf(c.x,s.w,d);return{visible:!0,x:c.x,y:u,textAlign:d,left:f,top:u,right:f+s.w,bottom:u+s.h}}function sf(e,t){if(!t)return!0;let{left:n,top:r,right:i,bottom:a}=e;return!(Wo({x:n,y:r},t)||Wo({x:n,y:a},t)||Wo({x:i,y:r},t)||Wo({x:i,y:a},t))}function cf(e,t,n){let r=[],i=e._pointLabels.length,a=e.options,{centerPointLabels:o,display:s}=a.pointLabels,c={extra:ef(a)/2,additionalAngle:o?Ta/i:0},l;for(let a=0;a<i;a++){c.padding=n[a],c.size=t[a];let i=of(e,a,c);r.push(i),s===`auto`&&(i.visible=sf(i,l),i.visible&&(l=i))}return r}function lf(e){return e===0||e===180?`center`:e<180?`left`:`right`}function uf(e,t,n){return n===`right`?e-=t:n===`center`&&(e-=t/2),e}function df(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function ff(e,t,n){let{left:r,top:i,right:a,bottom:o}=n,{backdropColor:s}=t;if(!Y(s)){let n=os(t.borderRadius),c=ss(t.backdropPadding);e.fillStyle=s;let l=r-c.left,u=i-c.top,d=a-r+c.width,f=o-i+c.height;Object.values(n).some(e=>e!==0)?(e.beginPath(),$o(e,{x:l,y:u,w:d,h:f,radius:n}),e.fill()):e.fillRect(l,u,d,f)}}function pf(e,t){let{ctx:n,options:{pointLabels:r}}=e;for(let i=t-1;i>=0;i--){let t=e._pointLabelItems[i];if(!t.visible)continue;let a=r.setContext(e.getPointLabelContext(i));ff(n,a,t);let o=cs(a.font),{x:s,y:c,textAlign:l}=t;Qo(n,e._pointLabels[i],s,c+o.lineHeight/2,o,{color:a.color,textAlign:l,textBaseline:`middle`})}}function mf(e,t,n,r){let{ctx:i}=e;if(n)i.arc(e.xCenter,e.yCenter,t,0,Ea);else{let n=e.getPointPosition(0,t);i.moveTo(n.x,n.y);for(let a=1;a<r;a++)n=e.getPointPosition(a,t),i.lineTo(n.x,n.y)}}function hf(e,t,n,r,i){let a=e.ctx,o=t.circular,{color:s,lineWidth:c}=t;!o&&!r||!s||!c||n<0||(a.save(),a.strokeStyle=s,a.lineWidth=c,a.setLineDash(i.dash||[]),a.lineDashOffset=i.dashOffset,a.beginPath(),mf(e,n,o,r),a.closePath(),a.stroke(),a.restore())}function gf(e,t,n){return ds(e,{label:n,index:t,type:`pointLabel`})}(class extends Kd{static id=`radialLinear`;static defaults={display:!0,animate:!0,position:`chartArea`,angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Ao.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":`borderColor`,"pointLabels.color":`color`,"ticks.color":`color`};static descriptors={angleLines:{_fallback:`grid`}};constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let e=this._padding=ss(ef(this.options)/2),t=this.width=this.maxWidth-e.width,n=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+t/2+e.left),this.yCenter=Math.floor(this.top+n/2+e.top),this.drawingArea=Math.floor(Math.min(t,n)/2)}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!1);this.min=ra(e)&&!isNaN(e)?e:0,this.max=ra(t)&&!isNaN(t)?t:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/ef(this.options))}generateTickLabels(e){Kd.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((e,t)=>{let n=sa(this.options.pointLabels.callback,[e,t],this);return n||n===0?n:``}).filter((e,t)=>this.chart.getDataVisibility(t))}fit(){let e=this.options;e.display&&e.pointLabels.display?rf(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,t,n,r){this.xCenter+=Math.floor((e-t)/2),this.yCenter+=Math.floor((n-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,t,n,r))}getIndexAngle(e){let t=Ea/(this._pointLabels.length||1),n=this.options.startAngle||0;return Ja(e*t+Ha(n))}getDistanceFromCenterForValue(e){if(Y(e))return NaN;let t=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*t:(e-this.min)*t}getValueForDistanceFromCenter(e){if(Y(e))return NaN;let t=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-t:this.min+t}getPointLabelContext(e){let t=this._pointLabels||[];if(e>=0&&e<t.length){let n=t[e];return gf(this.getContext(),e,n)}}getPointPosition(e,t,n=0){let r=this.getIndexAngle(e)-Aa+n;return{x:Math.cos(r)*t+this.xCenter,y:Math.sin(r)*t+this.yCenter,angle:r}}getPointPositionForValue(e,t){return this.getPointPosition(e,this.getDistanceFromCenterForValue(t))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){let{left:t,top:n,right:r,bottom:i}=this._pointLabelItems[e];return{left:t,top:n,right:r,bottom:i}}drawBackground(){let{backgroundColor:e,grid:{circular:t}}=this.options;if(e){let n=this.ctx;n.save(),n.beginPath(),mf(this,this.getDistanceFromCenterForValue(this._endValue),t,this._pointLabels.length),n.closePath(),n.fillStyle=e,n.fill(),n.restore()}}drawGrid(){let e=this.ctx,t=this.options,{angleLines:n,grid:r,border:i}=t,a=this._pointLabels.length,o,s,c;if(t.pointLabels.display&&pf(this,a),r.display&&this.ticks.forEach((e,t)=>{if(t!==0||t===0&&this.min<0){s=this.getDistanceFromCenterForValue(e.value);let n=this.getContext(t),o=r.setContext(n),c=i.setContext(n);hf(this,o,s,a,c)}}),n.display){for(e.save(),o=a-1;o>=0;o--){let r=n.setContext(this.getPointLabelContext(o)),{color:i,lineWidth:a}=r;!a||!i||(e.lineWidth=a,e.strokeStyle=i,e.setLineDash(r.borderDash),e.lineDashOffset=r.borderDashOffset,s=this.getDistanceFromCenterForValue(t.reverse?this.min:this.max),c=this.getPointPosition(o,s),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(c.x,c.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){let e=this.ctx,t=this.options,n=t.ticks;if(!n.display)return;let r=this.getIndexAngle(0),i,a;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(r),e.textAlign=`center`,e.textBaseline=`middle`,this.ticks.forEach((r,o)=>{if(o===0&&this.min>=0&&!t.reverse)return;let s=n.setContext(this.getContext(o)),c=cs(s.font);if(i=this.getDistanceFromCenterForValue(this.ticks[o].value),s.showLabelBackdrop){e.font=c.string,a=e.measureText(r.label).width,e.fillStyle=s.backdropColor;let t=ss(s.backdropPadding);e.fillRect(-a/2-t.left,-i-c.size/2-t.top,a+t.width,c.size+t.height)}Qo(e,r.label,0,-i,c,{color:s.color,strokeColor:s.textStrokeColor,strokeWidth:s.textStrokeWidth})}),e.restore()}drawTitle(){}});var _f={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},vf=Object.keys(_f);function yf(e,t){return e-t}function bf(e,t){if(Y(t))return null;let n=e._adapter,{parser:r,round:i,isoWeekday:a}=e._parseOpts,o=t;return typeof r==`function`&&(o=r(o)),ra(o)||(o=typeof r==`string`?n.parse(o,r):n.parse(o)),o===null?null:(i&&(o=i===`week`&&(za(a)||a===!0)?n.startOf(o,`isoWeek`,a):n.startOf(o,i)),+o)}function xf(e,t,n,r){let i=vf.length;for(let a=vf.indexOf(e);a<i-1;++a){let e=_f[vf[a]],i=e.steps?e.steps:2**53-1;if(e.common&&Math.ceil((n-t)/(i*e.size))<=r)return vf[a]}return vf[i-1]}function Sf(e,t,n,r,i){for(let a=vf.length-1;a>=vf.indexOf(n);a--){let n=vf[a];if(_f[n].common&&e._adapter.diff(i,r,n)>=t-1)return n}return vf[n?vf.indexOf(n):0]}function Cf(e){for(let t=vf.indexOf(e)+1,n=vf.length;t<n;++t)if(_f[vf[t]].common)return vf[t]}function wf(e,t,n){if(!n)e[t]=!0;else if(n.length){let{lo:r,hi:i}=$a(n,t),a=n[r]>=t?n[r]:n[i];e[a]=!0}}function Tf(e,t,n,r){let i=e._adapter,a=+i.startOf(t[0].value,r),o=t[t.length-1].value,s,c;for(s=a;s<=o;s=+i.add(s,1,r))c=n[s],c>=0&&(t[c].major=!0);return t}function Ef(e,t,n){let r=[],i={},a=t.length,o,s;for(o=0;o<a;++o)s=t[o],i[s]=o,r.push({value:s,major:!1});return a===0||!n?r:Tf(e,r,i,n)}var Df=class extends hu{static id=`time`;static defaults={bounds:`data`,adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:`millisecond`,displayFormats:{}},ticks:{source:`auto`,callback:!1,major:{enabled:!1}}};constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit=`day`,this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){let n=e.time||={},r=this._adapter=new tl._date(e.adapters.date);r.init(t),ma(n.displayFormats,r.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:bf(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let e=this.options,t=this._adapter,n=e.time.unit||`day`,{min:r,max:i,minDefined:a,maxDefined:o}=this.getUserBounds();function s(e){!a&&!isNaN(e.min)&&(r=Math.min(r,e.min)),!o&&!isNaN(e.max)&&(i=Math.max(i,e.max))}(!a||!o)&&(s(this._getLabelBounds()),(e.bounds!==`ticks`||e.ticks.source!==`labels`)&&s(this.getMinMax(!1))),r=ra(r)&&!isNaN(r)?r:+t.startOf(Date.now(),n),i=ra(i)&&!isNaN(i)?i:+t.endOf(Date.now(),n)+1,this.min=Math.min(r,i-1),this.max=Math.max(r+1,i)}_getLabelBounds(){let e=this.getLabelTimestamps(),t=1/0,n=-1/0;return e.length&&(t=e[0],n=e[e.length-1]),{min:t,max:n}}buildTicks(){let e=this.options,t=e.time,n=e.ticks,r=n.source===`labels`?this.getLabelTimestamps():this._generate();e.bounds===`ticks`&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);let i=this.min,a=this.max,o=no(r,i,a);return this._unit=t.unit||(n.autoSkip?xf(t.minUnit,this.min,this.max,this._getLabelCapacity(i)):Sf(this,o.length,t.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit===`year`?void 0:Cf(this._unit),this.initOffsets(r),e.reverse&&o.reverse(),Ef(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,n=0,r,i;this.options.offset&&e.length&&(r=this.getDecimalForValue(e[0]),t=e.length===1?1-r:(this.getDecimalForValue(e[1])-r)/2,i=this.getDecimalForValue(e[e.length-1]),n=e.length===1?i:(i-this.getDecimalForValue(e[e.length-2]))/2);let a=e.length<3?.5:.25;t=Xa(t,0,a),n=Xa(n,0,a),this._offsets={start:t,end:n,factor:1/(t+1+n)}}_generate(){let e=this._adapter,t=this.min,n=this.max,r=this.options,i=r.time,a=i.unit||xf(i.minUnit,t,n,this._getLabelCapacity(t)),o=aa(r.ticks.stepSize,1),s=a===`week`&&i.isoWeekday,c=za(s)||s===!0,l={},u=t,d,f;if(c&&(u=+e.startOf(u,`isoWeek`,s)),u=+e.startOf(u,c?`day`:a),e.diff(n,t,a)>1e5*o)throw Error(t+` and `+n+` are too far apart with stepSize of `+o+` `+a);let p=r.ticks.source===`data`&&this.getDataTimestamps();for(d=u,f=0;d<n;d=+e.add(d,o,a),f++)wf(l,d,p);return(d===n||r.bounds===`ticks`||f===1)&&wf(l,d,p),Object.keys(l).sort(yf).map(e=>+e)}getLabelForValue(e){let t=this._adapter,n=this.options.time;return n.tooltipFormat?t.format(e,n.tooltipFormat):t.format(e,n.displayFormats.datetime)}format(e,t){let n=this.options.time.displayFormats,r=this._unit,i=t||n[r];return this._adapter.format(e,i)}_tickFormatFunction(e,t,n,r){let i=this.options,a=i.ticks.callback;if(a)return sa(a,[e,t,n],this);let o=i.time.displayFormats,s=this._unit,c=this._majorUnit,l=s&&o[s],u=c&&o[c],d=n[t],f=c&&u&&d&&d.major;return this._adapter.format(e,r||(f?u:l))}generateTickLabels(e){let t,n,r;for(t=0,n=e.length;t<n;++t)r=e[t],r.label=this._tickFormatFunction(r.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){let t=this._offsets,n=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+n)*t.factor)}getValueForPixel(e){let t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+n*(this.max-this.min)}_getLabelSize(e){let t=this.options.ticks,n=this.ctx.measureText(e).width,r=Ha(this.isHorizontal()?t.maxRotation:t.minRotation),i=Math.cos(r),a=Math.sin(r),o=this._resolveTickFontOptions(0).size;return{w:n*i+o*a,h:n*a+o*i}}_getLabelCapacity(e){let t=this.options.time,n=t.displayFormats,r=n[t.unit]||n.millisecond,i=this._tickFormatFunction(e,0,Ef(this,[e],this._majorUnit),r),a=this._getLabelSize(i),o=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return o>0?o:1}getDataTimestamps(){let e=this._cache.data||[],t,n;if(e.length)return e;let r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(t=0,n=r.length;t<n;++t)e=e.concat(r[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){let e=this._cache.labels||[],t,n;if(e.length)return e;let r=this.getLabels();for(t=0,n=r.length;t<n;++t)e.push(bf(this,r[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return ao(e.sort(yf))}};function Of(e,t,n){let r=0,i=e.length-1,a,o,s,c;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=eo(e,`pos`,t)),{pos:a,time:s}=e[r],{pos:o,time:c}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=eo(e,`time`,t)),{time:a,pos:s}=e[r],{time:o,pos:c}=e[i]);let l=o-a;return l?s+(c-s)*(t-a)/l:s}(class extends Df{static id=`timeseries`;static defaults=Df.defaults;constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=Of(t,this.min),this._tableRange=Of(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){let{min:t,max:n}=this,r=[],i=[],a,o,s,c,l;for(a=0,o=e.length;a<o;++a)c=e[a],c>=t&&c<=n&&r.push(c);if(r.length<2)return[{time:t,pos:0},{time:n,pos:1}];for(a=0,o=r.length;a<o;++a)l=r[a+1],s=r[a-1],c=r[a],Math.round((l+s)/2)!==c&&i.push({time:c,pos:a/(o-1)});return i}_generate(){let e=this.min,t=this.max,n=super.getDataTimestamps();return(!n.includes(e)||!n.length)&&n.splice(0,0,e),(!n.includes(t)||n.length===1)&&n.push(t),n.sort((e,t)=>e-t)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;let t=this.getDataTimestamps(),n=this.getLabelTimestamps();return e=t.length&&n.length?this.normalize(t.concat(n)):t.length?t:n,e=this._cache.all=e,e}getDecimalForValue(e){return(Of(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){let t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return Of(this._table,n*this._tableRange+this._minPos,!0)}});var kf=K.section`
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
`,Af=K.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;

  @media (max-width: 450px) {
    margin-bottom: 8px;
  }
`,jf=K.h2`
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
`,Mf=K.p`
  margin: 5px 0 0;

  color: ${({theme:e})=>e.muted};

  font-size: 12px;
  font-weight: 400;

  @media (max-width: 450px) {
    margin-top: 4px;
    font-size: 11px;
  }
`,Nf=K.button`
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
`,Pf=K.div`
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
`,Ff=K.div`
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
`,If=K.div`
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
`;rd.register($c,_d,yd,qd,Ud,Rd);var Lf=`b5ad39bd417cd476cc1c17d9b2b53496`,Rf=(e,t=.08)=>{if(!e)return`rgba(255, 179, 108, ${t})`;if(e.startsWith(`rgb(`))return e.replace(`rgb(`,`rgba(`).replace(`)`,`, ${t})`);if(e.startsWith(`rgba(`))return e.replace(/[\d.]+\)$/g,`${t})`);let n=e.replace(`#`,``);return n.length===3&&(n=n.split(``).map(e=>e+e).join(``)),n.length===6?`rgba(${parseInt(n.substring(0,2),16)}, ${parseInt(n.substring(2,4),16)}, ${parseInt(n.substring(4,6),16)}, ${t})`:`rgba(255, 179, 108, ${t})`};function zf({city:e,unit:t=`C`,onClose:n,darkMode:r=!1,chartColor:i=`#ffb36c`}){let a=(0,z.useRef)(null),o=(0,z.useRef)(null),[s,c]=(0,z.useState)([]),[l,u]=(0,z.useState)(!0),[d,f]=(0,z.useState)(!1);return(0,z.useEffect)(()=>{(async()=>{try{u(!0),f(!1);let t=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e.latitude}&lon=${e.longitude}&appid=${Lf}&units=metric`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json();if(!n.list||!Array.isArray(n.list))throw Error(`Forecast data is unavailable`);c(n.list.slice(0,16))}catch(e){console.error(`Ошибка загрузки почасового прогноза:`,e),f(!0)}finally{u(!1)}})()},[e]),(0,z.useEffect)(()=>{if(l||d||s.length===0||!a.current)return;o.current&&=(o.current.destroy(),null);let e=s.map(e=>new Date(e.dt*1e3).toLocaleTimeString(`en-US`,{hour:`numeric`,hour12:!0})),n=s.map(e=>{let n=e.main.temp;return Math.round(t===`F`?n*9/5+32:n)}),c=r?`#ffffff`:`#111111`,u=r?`rgba(255, 255, 255, 0.08)`:`rgba(17, 17, 17, 0.08)`,f=i,p=Rf(i,.08),m=a.current.getContext(`2d`);return o.current=new rd(m,{type:`line`,data:{labels:e,datasets:[{data:n,borderColor:f,borderWidth:2,backgroundColor:p,pointBackgroundColor:f,pointBorderColor:f,pointRadius:3,pointHoverRadius:5,tension:.4,fill:!0}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:700,easing:`easeOutQuart`},interaction:{intersect:!1,mode:`index`},plugins:{legend:{display:!1},tooltip:{enabled:!0,displayColors:!1,backgroundColor:r?`#ffffff`:`#111111`,titleColor:r?`#111111`:`#ffffff`,bodyColor:r?`#111111`:`#ffffff`,padding:10,cornerRadius:8,callbacks:{title:e=>e[0]?.label||``,label:e=>`${e.raw}°${t}`}}},scales:{x:{grid:{display:!1},border:{display:!1},ticks:{color:c,font:{size:9},maxRotation:0,autoSkip:!1}},y:{grid:{color:u},border:{display:!1},ticks:{color:c,font:{size:9},callback:e=>`${e}°${t}`}}}}}),()=>{o.current&&=(o.current.destroy(),null)}},[s,l,d,t,r,i]),(0,q.jsxs)(kf,{children:[(0,q.jsxs)(Af,{children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(jf,{children:`Hourly forecast`}),(0,q.jsx)(Mf,{children:e.name})]}),(0,q.jsx)(Nf,{type:`button`,onClick:n,"aria-label":`Close hourly forecast`,children:(0,q.jsx)(`span`,{children:`×`})})]}),(0,q.jsxs)(Pf,{children:[l&&(0,q.jsx)(Ff,{children:`Loading...`}),d&&!l&&(0,q.jsx)(If,{children:`Failed to load forecast.`}),!l&&!d&&s.length>0&&(0,q.jsx)(`canvas`,{ref:a})]})]})}var Bf=K.section`
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
`,Vf=K.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 18px;

  @media (max-width: 550px) {
    margin-bottom: 14px;
  }
`,Hf=K.h2`
  margin: 0;

  color: ${({theme:e})=>e.text};

  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 550px) {
    font-size: 15px;
  }
`,Uf=K.p`
  margin: 6px 0 0;

  color: ${({theme:e})=>e.muted};

  font-size: 13px;
  font-weight: 400;

  @media (max-width: 550px) {
    margin-top: 4px;
    font-size: 12px;
  }
`,Wf=K.button`
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
`,Gf=K.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 9px;

  @media (max-width: 550px) {
    gap: 7px;
  }
`,Kf=K.div`
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
        ${qf} {
          color: #111111;
        }
        ${Xf} {
          color: #111111;
        }
        ${Zf} {
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
`,qf=K.div`
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
`,Jf=K.div`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 9px;

  @media (max-width: 550px) {
    gap: 5px;
  }
`,Yf=K.img`
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
`,Xf=K.span`
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
`,Zf=K.div`
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
`,Qf=K.div`
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
`,$f=K.div`
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
`,ep=`b5ad39bd417cd476cc1c17d9b2b53496`;function tp({city:e,unit:t=`C`,onClose:n,darkMode:r=!1,accentColor:i=`#ffb36c`}){let[a,o]=(0,z.useState)([]),[s,c]=(0,z.useState)(!0),[l,u]=(0,z.useState)(!1);(0,z.useEffect)(()=>{(async()=>{try{c(!0),u(!1);let t=await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${e.latitude}&lon=${e.longitude}&exclude=current,minutely,hourly,alerts&appid=${ep}&units=metric`);if(t.ok){let e=await t.json();if(Array.isArray(e.daily)&&e.daily.length>0){let t=e.daily.slice(0,8).map(e=>({date:new Date(e.dt*1e3),icon:e.weather?.[0]?.icon,description:e.weather?.[0]?.description||``,maxTemp:e.temp.max,minTemp:e.temp.min}));o(t);return}}let n=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e.latitude}&lon=${e.longitude}&appid=${ep}&units=metric`);if(!n.ok)throw Error(`HTTP error: ${n.status}`);let r=await n.json();if(!Array.isArray(r.list)||r.list.length===0)throw Error(`Forecast data is unavailable`);let i={};r.list.forEach(e=>{let t=new Date(e.dt*1e3).toLocaleDateString(`en-CA`);i[t]||(i[t]=[]),i[t].push(e)});let a=Object.values(i).slice(0,5).map(e=>{let t=e.map(e=>e.main.temp),n=e[Math.floor(e.length/2)];return{date:new Date(n.dt*1e3),icon:n.weather?.[0]?.icon,description:n.weather?.[0]?.description||``,maxTemp:Math.max(...t),minTemp:Math.min(...t)}});o(a)}catch(e){console.error(`Ошибка загрузки недельного прогноза:`,e),u(!0)}finally{c(!1)}})()},[e]);let d=e=>Math.round(t===`F`?e*9/5+32:e),f=e=>e.toLocaleDateString(`en-US`,{weekday:`long`,month:`long`,day:`numeric`});return(0,q.jsxs)(Bf,{children:[(0,q.jsxs)(Vf,{children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(Hf,{children:`5-day forecast`}),(0,q.jsx)(Uf,{children:e.name})]}),(0,q.jsx)(Wf,{type:`button`,onClick:n,"aria-label":`Close weekly forecast`,children:(0,q.jsx)(`span`,{children:`×`})})]}),s&&(0,q.jsx)(Qf,{children:`Loading...`}),l&&!s&&(0,q.jsx)($f,{children:`Failed to load forecast.`}),!s&&!l&&a.length>0&&(0,q.jsx)(Gf,{children:a.map((e,n)=>(0,q.jsxs)(Kf,{$darkMode:r,children:[(0,q.jsx)(qf,{children:f(e.date)}),(0,q.jsxs)(Jf,{children:[(0,q.jsx)(Yf,{src:`https://openweathermap.org/img/wn/${e.icon}@2x.png`,alt:e.description}),(0,q.jsxs)(Xf,{children:[d(e.maxTemp),`° /`,d(e.minTemp),`°`,t]})]}),(0,q.jsx)(Zf,{children:e.description})]},`${e.date.getTime()}-${n}`))})]})}var np=`/project-forecast/assets/ice-BVuotkio.png`,rp=`/project-forecast/assets/hot-shw1z_Oz.png`,ip=`/project-forecast/assets/ideal-DsCCYThy.png`,ap=K.section`
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
`,op=K.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`,sp=K.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: ${({theme:e})=>e.text};

  @media screen and (max-width: 560px) {
    font-size: 16px;
  }
`,cp=K.p`
  margin: 4px 0 0;
  font-size: 13px;
  color: ${({theme:e})=>e.muted};

  @media screen and (max-width: 560px) {
    font-size: 12px;
  }
`,lp=K.button`
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
`,up=K.div`
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
`,dp=K.div`
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
`,fp=K.span`
  font-size: 11px;
  line-height: 1;
  color: ${({theme:e})=>e.text};
  margin-bottom: 7px;

  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`,pp=K.span`
  font-size: 19px;
  line-height: 1;
  color: ${({theme:e})=>e.text};

  @media screen and (max-width: 450px) {
    font-size: 17px;
  }
`,mp=K.div`
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
`,hp=K.div`
  min-height: 276px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme:e})=>e.muted};

  @media screen and (max-width: 560px) {
    min-height: 220px;
  }
`,gp=K.div`
  min-height: 276px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme:e})=>e.muted};

  @media screen and (max-width: 560px) {
    min-height: 220px;
    text-align: center;
  }
`,_p=`b5ad39bd417cd476cc1c17d9b2b53496`;function vp({city:e,unit:t=`C`,onClose:n}){let[r,i]=(0,z.useState)(null),[a,o]=(0,z.useState)(!0),[s,c]=(0,z.useState)(!1);(0,z.useEffect)(()=>{(async()=>{try{o(!0),c(!1);let t=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e.latitude}&lon=${e.longitude}&appid=${_p}&units=metric`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json(),r=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e.latitude}&lon=${e.longitude}&appid=${_p}&units=metric`);if(!r.ok)throw Error(`HTTP error: ${r.status}`);let a=await r.json(),s=new Date,l=a.list.filter(e=>{let t=new Date(e.dt*1e3);return t.getDate()===s.getDate()&&t.getMonth()===s.getMonth()&&t.getFullYear()===s.getFullYear()}).map(e=>e.main.temp),u=l.length>0?Math.min(...l):n.main.temp_min,d=l.length>0?Math.max(...l):n.main.temp_max;i({feelsLike:n.main.feels_like,minTemp:u,maxTemp:d,humidity:n.main.humidity,pressure:n.main.pressure,windSpeed:n.wind.speed,visibility:n.visibility,sunrise:n.sys.sunrise,sunset:n.sys.sunset,timezone:n.timezone})}catch(e){console.error(`Ошибка загрузки подробной информации:`,e),c(!0)}finally{o(!1)}})()},[e]);let l=e=>t===`F`?e*9/5+32:e,u=e=>e<16?np:e<=19?ip:rp,d=(e,t)=>e?new Date((e+t)*1e3).toISOString().slice(11,16):`--:--`;return(0,q.jsxs)(ap,{children:[(0,q.jsxs)(op,{children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(sp,{children:`Weather details`}),(0,q.jsx)(cp,{children:e.name})]}),(0,q.jsx)(lp,{type:`button`,onClick:n,"aria-label":`Close weather details`,children:(0,q.jsx)(tr,{})})]}),a&&(0,q.jsx)(hp,{children:`Loading...`}),s&&!a&&(0,q.jsx)(gp,{children:`Failed to load weather details.`}),r&&!a&&!s&&(0,q.jsxs)(up,{children:[(0,q.jsxs)(dp,{children:[(0,q.jsx)(fp,{children:`Feels like`}),(0,q.jsxs)(pp,{children:[l(r.feelsLike).toFixed(1),`°`,t]}),(0,q.jsx)(mp,{children:(0,q.jsx)(`img`,{src:u(r.feelsLike),alt:`Temperature`})})]}),(0,q.jsxs)(dp,{children:[(0,q.jsx)(fp,{children:`Min / Max`}),(0,q.jsxs)(pp,{children:[l(r.minTemp).toFixed(1),`° /`,` `,l(r.maxTemp).toFixed(1),`°`,t]})]}),(0,q.jsxs)(dp,{children:[(0,q.jsx)(fp,{children:`Humidity`}),(0,q.jsxs)(pp,{children:[r.humidity,`%`]}),(0,q.jsx)(mp,{children:(0,q.jsx)(`img`,{src:`/project-forecast/assets/humidity-CUjCCt5g.png`,alt:`Humidity`})})]}),(0,q.jsxs)(dp,{children:[(0,q.jsx)(fp,{children:`Pressure`}),(0,q.jsxs)(pp,{children:[r.pressure,` hPa`]}),(0,q.jsx)(mp,{children:(0,q.jsx)(`img`,{src:`/project-forecast/assets/pressure-DNGAfX5a.png`,alt:`Pressure`})})]}),(0,q.jsxs)(dp,{children:[(0,q.jsx)(fp,{children:`Wind speed`}),(0,q.jsxs)(pp,{children:[r.windSpeed.toFixed(2),` `,`m/s`]}),(0,q.jsx)(mp,{children:(0,q.jsx)(`img`,{src:`/project-forecast/assets/wind-CthuVuVu.png`,alt:`Wind speed`})})]}),(0,q.jsxs)(dp,{children:[(0,q.jsx)(fp,{children:`Visibility`}),(0,q.jsx)(pp,{children:r.visibility>=1e4?`Unlimited`:`${(r.visibility/1e3).toFixed(1)} km`}),(0,q.jsx)(mp,{children:(0,q.jsx)(`img`,{src:`/project-forecast/assets/visibility-CQs0Kbtj.png`,alt:`Visibility`})})]}),(0,q.jsxs)(dp,{children:[(0,q.jsx)(fp,{children:`Sunrise`}),(0,q.jsx)(pp,{children:d(r.sunrise,r.timezone)}),(0,q.jsx)(mp,{children:(0,q.jsx)(`span`,{children:`🌅`})})]}),(0,q.jsxs)(dp,{children:[(0,q.jsx)(fp,{children:`Sunset`}),(0,q.jsx)(pp,{children:d(r.sunset,r.timezone)}),(0,q.jsx)(mp,{children:(0,q.jsx)(`span`,{children:`🌇`})})]})]})]})}var yp=K.div`
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
`,bp=K.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  line-height: 1;
`,xp=K.span`
  color: #111111;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.3px;
`;function Sp({description:e=``}){let t=e.toLowerCase(),n=`☀️`,r=`Clear`;return t.includes(`thunderstorm`)||t.includes(`storm`)?(n=`⛈️`,r=`Storm`):t.includes(`snow`)?(n=`❄️`,r=`Snow`):t.includes(`rain`)||t.includes(`drizzle`)?(n=`🌧️`,r=`Rain`):t.includes(`fog`)||t.includes(`mist`)||t.includes(`haze`)?(n=`🌫️`,r=`Fog`):t.includes(`cloud`)&&(n=`☁️`,r=`Cloudy`),(0,q.jsxs)(yp,{children:[(0,q.jsx)(bp,{children:n}),(0,q.jsx)(xp,{children:r})]})}var Cp=`/project-forecast/assets/clear-B12KMxvD.gif`,wp=`/project-forecast/assets/clouds-DKF1LhHM.gif`,Tp=`/project-forecast/assets/rain-CwG3OlJy.gif`,Ep=`/project-forecast/assets/snow-CxU5hFbN.gif`,Dp=`/project-forecast/assets/storm-CDiFKZbq.gif`,Op=`/project-forecast/assets/fog-DDjGpEi4.gif`;Rn`
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.97);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;var kp=Rn`
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
`;Rn`
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
`;var Ap=K.section`
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
`,jp=K.div`
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
`,Mp=K.article`
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
    0 8px 25px rgba(0, 0, 0, 0.08);
  transform: translateY(0) scale(1);
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-8px) scale(1.015);

    box-shadow:
      0 20px 45px rgba(0, 0, 0, 0.18);
  }

  &::before {
    content: "";

    position: absolute;

    top: -120%;
    left: -70%;

    width: 50%;
    height: 300%;

    background: linear-gradient(
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
`,Np=K.img`
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

  ${Mp}:hover & {
    transform: scale(1.09);
    filter: saturate(1.2);
  }
`,Pp=K.div`
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
`,Fp=K.div`
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
`,Ip=K.div`
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
`,Lp=K.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`,Rp=K.span`
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
`,zp=K.span`
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
`,Bp=K.div`
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
`,Vp=K.div`
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
`,Hp=K.button`
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
`,Up=K.div`
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
`,Wp=K.span`
  width: 1px;
  height: 16px;

  background:
    rgba(255, 255, 255, 0.65);

  @media screen and (min-width: 1160px) {
    height: 18px;
  }
`,Gp=K.img`
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

  ${Mp}:hover & {
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
`,Kp=K.div`
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
`,qp=K.div`
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
`,Jp=K.button`
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
`,Yp=K.button`
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

  cursor: pointer;

  animation:
    ${({$active:e})=>e?kp:`none`}
    0.45s ease;

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
`,Xp=K.button`
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
`,Zp=K.button`
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
`,Qp=K.button`
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
`;function $p({cities:e,favorites:t,onRefresh:n,onFavorite:r,onDelete:i,darkMode:a,userColor:o}){let[s,c]=(0,z.useState)(new Date),[l,u]=(0,z.useState)(null),[d,f]=(0,z.useState)(null),[p,m]=(0,z.useState)(null),[h,g]=(0,z.useState)({});(0,z.useEffect)(()=>{let e=setInterval(()=>{c(new Date)},1e3);return()=>clearInterval(e)},[]);let _=(e=``)=>{let t=e.toLowerCase();return t.includes(`thunderstorm`)?Dp:t.includes(`snow`)||t.includes(`sleet`)?Ep:t.includes(`rain`)||t.includes(`drizzle`)?Tp:t.includes(`mist`)||t.includes(`fog`)||t.includes(`haze`)?Op:t.includes(`cloud`)||t.includes(`overcast`)?wp:Cp},v=e=>{let t=s.getTime()+s.getTimezoneOffset()*6e4;return new Date(t+e*1e3)},y=e=>e.toLocaleTimeString(`en-GB`,{hour:`2-digit`,minute:`2-digit`,hour12:!1}),b=e=>`${String(e.getDate()).padStart(2,`0`)}.${String(e.getMonth()+1).padStart(2,`0`)}.${e.getFullYear()}`,x=e=>e.toLocaleDateString(`en-US`,{weekday:`long`}),S=e=>{g(t=>({...t,[e]:t[e]===`F`?`C`:`F`}))},C=e=>h[e]||`C`,w=(e,t)=>Math.round(t===`F`?e*9/5+32:e);return e.length===0?null:(0,q.jsxs)(Ap,{id:`menu`,children:[(0,q.jsx)(jp,{children:e.map(e=>{let s=v(e.timezone),c=C(e.id),l=t.some(t=>t.id===e.id),d=_(e.description);return(0,q.jsxs)(Mp,{$accent:o,$dark:a,children:[(0,q.jsx)(Np,{src:d,alt:``}),(0,q.jsx)(Pp,{}),(0,q.jsx)(Fp,{$accent:o,$dark:a}),(0,q.jsxs)(Ip,{children:[(0,q.jsxs)(Lp,{children:[(0,q.jsx)(Rp,{children:e.name}),(0,q.jsx)(zp,{children:e.country})]}),(0,q.jsx)(Bp,{children:y(s)}),(0,q.jsxs)(Vp,{children:[(0,q.jsx)(Hp,{type:`button`,$accent:o,onClick:()=>{u(e),f(null),m(null)},children:`Hourly forecast`}),(0,q.jsx)(Hp,{type:`button`,$accent:o,onClick:()=>{f(e),u(null),m(null)},children:`Weekly forecast`})]}),(0,q.jsxs)(Up,{children:[(0,q.jsx)(`span`,{children:b(s)}),(0,q.jsx)(Wp,{}),(0,q.jsx)(`span`,{children:x(s)})]}),(0,q.jsx)(Gp,{src:`https://openweathermap.org/img/wn/${e.icon}@2x.png`,alt:e.description}),(0,q.jsxs)(Kp,{children:[w(e.temperature,c),`°`,c]}),(0,q.jsx)(Sp,{description:e.description}),(0,q.jsxs)(qp,{children:[(0,q.jsx)(Jp,{type:`button`,onClick:()=>n(e),children:(0,q.jsx)(ar,{})}),(0,q.jsx)(Yp,{type:`button`,$active:l,$accent:o,onClick:()=>r(e.id),children:(0,q.jsx)(cr,{})}),(0,q.jsxs)(Xp,{type:`button`,$accent:o,onClick:()=>S(e.id),title:`Change temperature unit`,children:[`°`,c]}),(0,q.jsx)(Zp,{type:`button`,$accent:o,onClick:()=>{m(p?.id===e.id?null:e),u(null),f(null)},children:`See more`}),(0,q.jsx)(Qp,{type:`button`,onClick:()=>i(e.id),children:(0,q.jsx)(nr,{})})]})]})]},e.id)})}),l&&(0,q.jsx)(zf,{city:l,unit:C(l.id),darkMode:a,chartColor:o,onClose:()=>u(null)}),d&&(0,q.jsx)(tp,{city:d,unit:C(d.id),darkMode:a,accentColor:o,onClose:()=>f(null)}),p&&(0,q.jsx)(vp,{city:p,unit:C(p.id),onClose:()=>m(null)})]})}var em=K.section`
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
`,tm=K.div`
  width: 100%;
  max-width: 1380px;
  margin: 0 auto;
`,nm=K.div`
  opacity: 0;
  transform: translateY(30px);

  transition:
    opacity 1s ease,
    transform 1s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`,rm=K.h2`
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
`,im=K.div`
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
`,am=K.button`
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
`,om=K.div`
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
`,sm=K.article`
  width: 100%;
  min-width: 0;
`,cm=K.img`
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
`,lm=K.h3`
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
`,um=K.button`
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
`,dm=`https://reactproject-gsav.onrender.com/api/news`,fm=[`All`,`Nature`,`Weather`,`Animals`,`Science`],pm=e=>`
    ${e.title||``}
    ${e.description||``}
    ${e.content||``}
  `.toLowerCase(),mm=(e,t)=>{if(t===`All`)return!0;let n=pm(e);return{Nature:[`nature`,`forest`,`tree`,`trees`,`plant`,`plants`,`flower`,`flowers`,`ocean`,`sea`,`river`,`mountain`,`earth`,`wildlife`,`landscape`,`environment`],Weather:[`weather`,`rain`,`rainy`,`storm`,`snow`,`snowy`,`wind`,`windy`,`temperature`,`climate`,`hurricane`,`tornado`,`flood`,`heat`,`cold`,`sunny`,`cloud`,`cloudy`],Animals:[`animal`,`animals`,`dog`,`dogs`,`cat`,`cats`,`bird`,`birds`,`lion`,`tiger`,`bear`,`elephant`,`fish`,`whale`,`dolphin`,`horse`,`pet`,`pets`,`wildlife`],Science:[`science`,`scientist`,`scientists`,`research`,`researchers`,`study`,`space`,`nasa`,`planet`,`planets`,`technology`,`experiment`,`discovery`,`discover`,`physics`,`biology`,`chemistry`,`medical`]}[t].some(e=>n.includes(e))};function hm({darkMode:e,accentColor:t}){let[n,r]=(0,z.useState)([]),[i,a]=(0,z.useState)(1),[o,s]=(0,z.useState)(!0),[c,l]=(0,z.useState)(!1),[u,d]=(0,z.useState)(!1),[f,p]=(0,z.useState)(`All`),m=(0,z.useRef)(null),[h,g]=(0,z.useState)(!1);(0,z.useEffect)(()=>{let e=new IntersectionObserver(([t])=>{t.isIntersecting&&(g(!0),e.disconnect())},{threshold:.25});return m.current&&e.observe(m.current),()=>e.disconnect()},[]);let _=async(e=1)=>{try{e===1?s(!0):l(!0),d(!1);let t=await fetch(`${dm}?page=${e}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json();if(n.status!==`ok`||!Array.isArray(n.articles)||n.articles.length===0)throw Error(`Новости не найдены`);r(e=>{let t=new Set(e.map(e=>e.url)),r=n.articles.filter(e=>e.url&&!t.has(e.url));return[...e,...r]}),a(e)}catch(t){console.error(`Ошибка загрузки новостей:`,t),e===1&&d(!0)}finally{s(!1),l(!1)}};(0,z.useEffect)(()=>{_(1)},[]);let v=n.filter(e=>mm(e,f)),y=async()=>{if(c)return;let e=i+1;try{l(!0);let t=await fetch(`${dm}?page=${e}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json();if(n.status!==`ok`||!Array.isArray(n.articles)||n.articles.length===0){console.log(`Больше новостей нет`);return}r(e=>{let t=new Set(e.map(e=>e.url)),r=n.articles.filter(e=>e.url&&!t.has(e.url));return[...e,...r]}),a(e)}catch(e){console.error(`Ошибка загрузки новостей:`,e)}finally{l(!1)}},b=e=>{p(e)};return(0,q.jsx)(em,{ref:m,$dark:e,children:(0,q.jsx)(tm,{children:(0,q.jsxs)(nm,{className:h?`visible`:``,children:[(0,q.jsx)(rm,{$dark:e,children:`News`}),(0,q.jsx)(im,{children:fm.map(n=>(0,q.jsx)(am,{type:`button`,$active:f===n,$dark:e,$accent:t,onClick:()=>b(n),children:n},n))}),o?(0,q.jsx)(rm,{$dark:e,children:`Loading...`}):u?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(rm,{$dark:e,children:`Something went wrong`}),(0,q.jsxs)(um,{type:`button`,$accent:t,onClick:()=>_(1),children:[`Try again`,(0,q.jsx)(gr,{})]})]}):v.length===0?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(rm,{$dark:e,children:`No news in this category`}),(0,q.jsxs)(um,{type:`button`,$accent:t,onClick:()=>p(`All`),children:[`Show all`,(0,q.jsx)(gr,{})]})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(om,{children:v.map(t=>(0,q.jsxs)(sm,{children:[(0,q.jsx)(cm,{src:t.urlToImage||`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDPpcnj2HXmyTmKhnzxWy1UrVb9ySnJmvSvWpw0_yRw&s=10`,alt:t.title||`News`,onError:e=>{e.currentTarget.onerror=null,e.currentTarget.src=`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDPpcnj2HXmyTmKhnzxWy1UrVb9ySnJmvSvWpw0_yRw&s=10`}}),(0,q.jsx)(lm,{$dark:e,children:t.title})]},t.url))}),(0,q.jsxs)(um,{type:`button`,$accent:t,onClick:y,disabled:c,children:[c?`Loading...`:`See more`,(0,q.jsx)(gr,{})]})]})]})})})}var gm=Rn`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,_m=Rn`
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(150px, 60px) scale(1.2);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
`,vm=Rn`
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-120px, -80px) scale(1.15);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
`,ym=K.section`
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

  animation: ${gm} 14s ease-in-out infinite;

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
    animation: ${_m} 12s ease-in-out infinite;
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
    animation: ${vm} 15s ease-in-out infinite;
    pointer-events: none;
    transition: background 0.5s ease;
  }

  @media (max-width: 768px) {
    padding: 45px 0 50px;
  }

  @media (max-width: 550px) {
    padding: 35px 0 40px;
  }
`,bm=K.div`
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
`,xm=K.h2`
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
`,Sm=K.button`
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
`,Cm=K.div`
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
`,wm=K.div`
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
`,Tm=K.div`
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
`,Em=K.div`
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
`,Dm=K.div`
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
`,Om=K.button`
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
`,km=`54040917-f9e6420d7887ca7f24aa85fec`;function Am({darkMode:e,accentColor:t=`#ffb56c`}){let[n,r]=(0,z.useState)([]),[i,a]=(0,z.useState)(0),[o,s]=(0,z.useState)(!0),[c,l]=(0,z.useState)(!1),[u,d]=(0,z.useState)(!1);(0,z.useEffect)(()=>{(async()=>{try{s(!0),l(!1);let e=await fetch(`https://pixabay.com/api/?key=${km}&q=beautiful+nature&image_type=photo&orientation=horizontal&per_page=7&safesearch=true`),t=await e.json();if(!e.ok)throw Error(t.error||`HTTP error: ${e.status}`);if(!Array.isArray(t.hits)||t.hits.length===0)throw Error(`Nature images not found`);let n=t.hits.map(e=>({id:e.id,url:e.webformatURL,largeUrl:e.largeImageURL,alt:e.tags||`Beautiful nature`}));r(n),a(0)}catch(e){console.error(`Ошибка загрузки изображений:`,e),l(!0)}finally{s(!1)}})()},[]),(0,z.useEffect)(()=>{if(n.length===0||u)return;let e=setInterval(()=>{a(e=>e===n.length-1?0:e+1)},2e3);return()=>{clearInterval(e)}},[n,u]);let f=e=>{let t=e-i;return t>n.length/2&&(t-=n.length),t<-n.length/2&&(t+=n.length),t};return o?(0,q.jsxs)(ym,{$dark:e,children:[(0,q.jsx)(bm,{children:(0,q.jsx)(xm,{$dark:e,children:`Beautiful nature`})}),(0,q.jsx)(Tm,{$dark:e,children:`Loading...`})]}):c?(0,q.jsxs)(ym,{$dark:e,children:[(0,q.jsx)(bm,{children:(0,q.jsx)(xm,{$dark:e,children:`Beautiful nature`})}),(0,q.jsx)(Em,{$dark:e,children:`Failed to load images.`})]}):(0,q.jsxs)(ym,{$dark:e,children:[(0,q.jsxs)(bm,{children:[(0,q.jsx)(xm,{$dark:e,children:`Beautiful nature`}),(0,q.jsx)(Sm,{$dark:e,type:`button`,onClick:()=>d(e=>!e),children:u?`▶ Continue`:`Ⅱ Pause`})]}),(0,q.jsx)(Cm,{children:n.map((e,t)=>{let n=f(t);return(0,q.jsx)(wm,{$position:n,onClick:()=>a(t),children:(0,q.jsx)(`img`,{src:e.url,alt:e.alt})},e.id)})}),(0,q.jsx)(Dm,{children:n.map((n,r)=>(0,q.jsx)(Om,{type:`button`,$active:r===i,$dark:e,$accentColor:t,"aria-label":`Go to slide ${r+1}`,"aria-current":r===i?`true`:void 0,onClick:()=>a(r)},n.id))})]})}var jm=K.footer`
  width: 100%;

  background: ${({$dark:e,$accentColor:t})=>e?`#111111`:t||`#ffb56b`};

  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  border-top: 1px solid
    ${({$dark:e})=>e?`rgba(255, 255, 255, 0.08)`:`rgba(0, 0, 0, 0.08)`};

  transition:
    background 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
`,Mm=K.div`
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
`,Nm=K.div`
  display: flex;
  align-items: center;
  min-width: 180px;

  @media screen and (max-width: 563px) {
    min-width: 0;
    grid-column: 1;
    grid-row: 1;
  }
`,Pm=K.img`
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
`,Fm=K.div`
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
`,Im=K.h3`
  margin: 0 0 12px;

  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;

  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  transition: color 0.3s ease;

  @media screen and (max-width: 563px) {
    font-size: 15px;
  }
`,Lm=K.p`
  margin: 0;

  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.6;

  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  transition: color 0.3s ease;
`,Rm=K.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,zm=K.a`
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
`,Bm=K.img`
  width: 35px;
  height: 35px;
  object-fit: contain;
  display: block;
  filter: none;
  transition:
    transform 0.25s ease;
  ${zm}:hover & {
    transform: rotate(-3deg) scale(1.08);
  }
`,Vm=`/project-forecast/assets/logo--nZl-i6T.png`,Hm=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAACU1JREFUeAHtmHtwVNUdx7/nPvaZTTYhISY8wiNQQYeKFQuFQQQqDuKDIlBsmTIFOuLgFDutjg/qlLbI1LaICH9UGcvYjm3DQB2RKpRCmLEyVq0gYIEwJCaEvJMl2ezufZzT331sstndNBvKn56ZM/eec8+553O+5/f7nXMv8GWyE8P/ma73BRJlviq0pHiaNvPbk5VpD4cxaookAnkal2VTeIwuHm1u5FdOf45Tr10y33nvOI6bbl+BYabhQsoW3IGCHdtmKrM2tfAetcPsZYZQoFM2hAyDu/ec7u06FSFRigQ3r1aLg+tew/pD7nvMXAfNFdJ+6cnil7ffrEzZVKu3cBpcMlwwnbvXQUGdZyZXRaGYyI7i1YV78Ogxa8K5DJ4LpPJ83tKizYXrmy5rDZwLVTZcAAdqeKBWGSLP8EH7dB0mzEAOqipDAMpnyn724AR1fFWLcRleSSZA05m/bZUpLQcrZ6k3eFSJCNy2D1y8gvkq2avFYeA6IOXWsS+uCzJ1V4K3MoVZTcWQALmCgitKvbjEN+JdvQZ3BxrwAQYDHQxSPl6+Zn6Bgt2m2SvZgMMCyBlUqhf1fAdO9C6DapkeQxbvz2aTbN68efKx2GJddEbBNcu25AzbM3QZ8UgCminZz3SolB071MnM7Hu3TsheSB6/0zfDRq0+zCzFTZ2PIH9krpAwHniuFa29RVLMK6HXMxCUABKdvcjfuxK+RePB/AqGCn2JFg0XttXh05dq4Q8WQNOlDFC6NzvQuHkL5v4KaY6UDikfnnvvfQsKx+9nUVVGrwoLsg9Up+bfnAzf68tpqQhMyjGCCWcajJq/6f87VDmUFXSEGI1VCEpIm3XGKOKJjUJcjaEf0L3GvRDjRkJ651FqJCA0ju4fHUH8oyZSV+lTOTlwMpuKirK1lRi9YRyEIUAeiDfYYXh9+RlLr3OJd4vI3mcwc20qaCok2zpn2p1PTb/1n6xHlhDzDAQ9FwHrfJUWgkOcb0X37b8BLy2DbiaBHFA9OXBKHNUDDO1tUTwY/w6sCNb+fheqF52mNfVkgI7gE7Bc+AeIJ6UWHpk7bgdT4gx+HfBrQICuAfe69BZbQRC/ecsv4Lmp0NIPtO9AkUzI8V6grR3sWgSivRMy1+1nzBPHnIaHMGP7LHw4/wQYjVg8NwwjESV/dvoq1pWZdrlLqhPLsfmuVAFTQ5CoGKt+XdTrmbbGOdjDdzpGdaYB8pgQ3Zp9ayEIqOjMY5DLQ31deg7Woeb+t+HJD6Nx6xlc3nIWvQmzb+jCsT4k2oyM8GRAw2x2/0+rxM8XZii55GtlxZxHYavo051rUlEr53udhpFrQIFJIYVUVAQ8kwtQWPck5NI8Z6amY0rBe0bjNrER6O5C2/bP4CN/8LD+QOkNwFZPIbUHKmqw8XLlrFSb7FPyvqmBaUwih/GryEicFJBd5ayd1jIBRYZ0vgNyzTO2nWpv/Bvd6w9Al30wAirKazYBxH1rw/dxbtKbUP0Bipr9G4oFpCah0wK+ykx/6vB9Sk4co06HmqpgmqKyOzHFdG01AbZ7mR2KxMk68B+/BW95AXwjA6RaAA3FL5A9ylDKAvDmCVcpPQXS7LPDdEU5u4apmJeXAalLxij4aKbeLKBWlt1ZW7CWkrwbuHuKY79P7YMa8vQ5gAXjLw0j8d5l2wbD91Y4yqXEaOvedrqsoNQf3b6M5ZZUFzDb5sGlFEjuQCZsOZw6moxto1p/F0HrxuSkEhaQA5NMsqtktj1dEQZVcZZS5STmEVdsJS3VvFkUTUJKrpLF1PXkJ3ZYYr9dRUvR6YDaipBjNTXCs3C8PWm9+ryrpJG23K6SaYp6KTdBimZAnmuMnULAcACzgSZt0oK0ytRWvPyKE5amVoD9egXQ2gCpuRlKpB35nVtJbQNmXReV466jpDuOkRU0T1JxFR/3Ziz32ab4JwiTWmaWI52lvJJcbtOFpq6TRkBsehbspV9SsP8G2Ldm256uUMCnrYcMT0J0wjZ4RpdS0bTPRKlKmpKZ9VgnC01DWrWd9lRd62Bl3FHPl6aoVTa6nYahAqqLO6BeMszueoiHVgNXmt1JOK8UR87CUH8Iz7hCRzXLKXg/pByLOSpKZpqipmjAJesEnHXHQevV+L+KPcodyDh4qBAX94NNWQKUTwZilwh2av/jInq+4QmgmSDiFKW7yGPCpZAnFIJpVGd5EMEHF4x1tlbLRC62QS0tythxJArEx/TjzyPFhVP3bvbHfd0/EEFaAtXMVLTxkPNyQV773N9o3ztPahr9NltCm8DEMDA+CHwlnyZh2A6WdCa5pRGhw2vIHAS0E1/AW+RzFTYHKDpRKWEvxndWp0qUeVTrqYiL88ILjWZPp28kaPA4Ca7RaUgmB3mgCu6GDRx4gRS+4LZxc8xtnzxFaV6wFXReWDvLtldL0Q72LMxRpRmnpwSXzKgp/jSrc81qDHJUs5X9y87wkqULAgfkmCJlgNIBCYVzwBbsciCZhJwT5/ZwsfDTMItLYBis/1PEBR0hjUFB46IM4dJH4Sse73pbH4VO7jE4PGlL76PJRU5C/G4sxOWjNIG4Y2MWsJ2Fk3lqpvquHoitb0EEH4enJESBQhsQdqzllpguao0LP0GW1R3kQwzef/y1PIZ6KmnWUqcpmrBUpXJHBLBCrvuJ0X9I9jr3UfcqyEbVor7n6R93mikbfrmsK79+ZUkWHsjZKmtrIe65Xaouv1lZLWmC9c2FuZ5p39NVJSfx0RnSb+U8JwcoB4NOziNPD1ltPANVoLgrubseCc+LfBWyr3ZFcBDRBv3uNmeviFQ3fi49VlLk3SV3GDJucLLsTEkI7vOVS4svPu1zWYb1c8AGLZ/Suafu/aL20ZO8VazZsD/4cIMSHcgMxTdOueP0Ts/HqOH4H/+DhvoXZFTM7ti/Znmw7PU/F1w1PrN/Nw3DpbMmwSVJRNXguXD1hq8ihx9WuQzIf18VbWVSI2sS+m5WQW9UKSJnC/jeQc6jzr3gAY2zsqB5KPKfu8LVW6bDWZkh/1MOd/nsfzUX3x25rXJG3pNoYRAt5EFaqterzjVhB3Zhl9UQi8W8LQdO1Kz97tEPDiLzFDnkoNedFs8I3rTpe6FllZWBlSX5/koPvAWgTUDSFL2njXVc+cL46OSpyN4/fBg/cry2NuF2G/bv6C/TjUr/BYAx1ubkm1GFAAAAAElFTkSuQmCC`,Um=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABedJREFUeAHNWG1sU1UYfu9nP7d2H90GbAuwyfhYZgxoQEUd6hJFwhhbmAthGhLB6B8gxl/60wQT4Z8ZRNEZcRPoBhr5QTAbgmIUooh0MAZCKG7r19p17drbe+/xnK6b7bZ2PW1NfJLb3px733Oe+57347wvA/Rg8IVK6xpKzMZVrcbCiq2ixlTLsrwJASPiRwxCICGkeBTJPzg+dtfquveD1W2/9hAyAEPxLltdXS3kr9j7UcGi2jfDwTFGlUPpyCOe14GgMzHjzptHf/123x4yF77UNGTTIsjhS1nf/IlVZyjZFg64sBRD82H/MgWkavUWNhL09Fw62b4dD/H4kiELglxd/fvPlVRtPB/02ZUY2eyBVEVvruBGb3//8vULB8/hEQUoCUbHn2nrOqkqcqOqyrkhNnsRTpCx7Z66+FVrGxAFJyMyzxjatOvMzVDQVQUMy8N/CIRUVWMoutXf2bgakpCZM1bffsYWnnA9AiybseYQSlRISrNVVUU0Ft/u79xKSKJUBLln27q/jEjBFjwjNTlJUsA3EYbGF1dAzfLimck1IgcfHr0MRoOYXBjbpSAYei90tbZCnE3GE+RWb3q3odBS942qSlTbSpRz/+9x6P24BdbWls2rrQ3Nn+ENSe2T2JpUv2Og4Y++D/qnSbJxz5VFy58/S0uOwOWZhEtft8Nja8qSbqWK0ILzIFVmS6rqz0OcBqcJMk+3fN4z6X2gACUIn6fWlUNFWT5wKTTEpJkTgl678mTzp6cgFtKmCSJBX7gN65ja7gIBCd57a2PC9inqlLZcY0FwuIPg84exbYbSm5ABTmOw4CC+Osolup2Pbzl0BIcUFX8lC5TwYYKVi00JY0STprqDUFFuntFAkVk/x7OTAWcrtHbz64evfvfO21H5vOJVb2RCjkDF2ppt/L/bRqGm2gImowbyYle65KLAhmwurSM5G7FF5RuWREI+CumFEVEUqlPIfJBCY2xpVUMJW7r0ie2KPAm5BJM1PWzHkUnIX7xyB28oWNoEdMcu7AQqeLyhqAd7sRPMhhRRwOkJgCDEfA7vj9mkA56jWobJNy1rZNY3HxtmGaaMRnIpNv7jhxrjCKOEEEPMbXY43Ln/NPxl9wINkKKMYvtmCoESAp/oT7Pj33yx2j4yDrRgOc5MVhJpBVEGLjXiCgAtSAmBCTIZeTAtyVCYOklFF8GBGkn4VkMjNzDkhGGnH0IhBSRZgZplhQk5OCzJYB/2z4yNuicg30i9UQT4YKDKPmD5EhopUeRh8+7uKAFiW45f9ic8H7jjhp0HToPIT3kxx7GQZ6AnqCJ5jJfCfpuoK6AiSLKCXidE76f/40EUp9PwIArZVQoRKXCT9Xvv98L/EbgEDLjv9rDe4YFujtflNNVBDmbjRT04b13oYUfvnHOIenNOCSISILLMdoI2n3G7rz0kcZDxDv/ZQXfcSI1sZ8JUVN+I7Qi5JwTR1XvH9uHSL/sMP7MAZAWd0cJeOXtgL7mfylk2m4wPiVaET3eQI2T8tbi6CwfdVohxm06q6k+ndjcbTJUZHVrnLkJ+MqOoN1dyP554rRlizaV4QpzjTt8LpPQDGsyznSw+VqEMXJllBeXB0LmXIK4HNKdw39jW3aVIgaZ0C6gQTmt729YCG3Nb8n/5NzvcuO0EGmC/UHjBeOJi145dENfxStH6cFZjVaRVI6OZn9gElLuLuclao2Wwr3NrLSzQ+phBffvpG+GApyaTFgglOUVjKB7s/2L+5lFSp+jrbKzlBMMJrMQMzknpAbfeVF5r7MHk1iR9J4U8Ivbgsd94RW8qj34q5Aq4gW3Ac3oc1xsuHm99FVIkx3SsJdqm3dDSadXqC5tCQQcu8NmMwhHOEEhrLGImJ1zWn3FYg1h7OZUMjTlHG5vrthzuMFlW7iG1tCxNplVjcoIOidoCnL6ud1wZ7DgAQ0PyQsTiF80IReWPLrEsq28y5Fc2Cdq8lRzLFyBS30xVdBJuG/uksM824XrQ63UOdJNDyfRH0qzzD+bDR7GNxUL7AAAAAElFTkSuQmCC`,Wm=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAACGJJREFUeAG9WAtwVNUZ/u+9+7rZbJLdzYYk7K5BNjZugq2gph1Li05LeQQkQRK10HYGR0Cp7ciMrdM6004f1qlUCx2IWGitWG1CHgOWjq1FrFXRDIg8Fggx5LUh2SS7SXazj7t77/U/JyEkZLP3Bg3/zZ3s3j33nO/8j+///8PAzIXBW75tw/yc/FLLA5aitPuMVkMJp2MzZRl05Hf8L0BC8ocD8eb+C8G61trWuuYjA164DmFmMJZ1uVza0l327fZS25YRf4SJj4iK78v4p0/ngLcamO6mgT377317E5kLbwlUiBqAHN7iIyeW1ZkcfHmwJwIMClyHoGaljByeDQ5E6190H16LjzR4J+BzAOTW7L9zSdGaeW/5W4Miw1Kwn1tkURat80zcmdrOFYc2Hvs3PhJhhgDp863nV9VKrLRGFKQvBNi1gn6b0LDcgR2ugw8B9YZpgCR5Jj/RWX4+5I/MZzhGA7MoqE3JaOYvPO9scCf7nU32cFtHxbngQMQ12+CI4BosKuKWJ3BNSKKwawFyj7eU/T0YCBeyGmZWzJpMyFohf7jwh82rawAm+/lEgNyql7+6NCHJ9+Oubhi4K8IgSBHEijIMSpgAcpJKfzq0Tg50hmAmwuAlyDEIJgYBg5M+YzHcTVwm6FkePV+e0XyWAhM8k17DXJ1/7P9mz8o6KSGtVkslhAp7Y15YmPF1WJ//ONgN80DDaOlvsiyBN9YGB3pegnf8/4Rcg5M+UyOyhLtMyI17Fr5ZhV+vZoJtvRVyqC+iahJRTkCWNht+d8vfECgL5AqLIfDHfZgeJDBrbGDSZI6Pf6b1R3AhdAoMHK9q/vQcHv61pF7v8YBAAW44cs+LaTbDw6hPVunlCAKpytsCy7Ir0ZQcaunP8Gr3TuC5NASQRsdExTBEpTCszH4INjp+ggqJw/Gh/8ML7U9BpsaitARIsiyHeiK7X/v2O1spwCeDa+Wh9rDii6h7WG37PgUXlwVYd3IROA3zp/Uzotn2yEXYt+C/kK3LhePD70J1x69AxxoU18pypIvPZtZqWHuZfW54QFD0ZGJKHcPDClsVGlGEyjFwJECmA0jM7eDnw+azK9H8feivi6GA/5IaQ0E4EGFJxcSWLM1bK4QSii8MCD3wfFENEO6uPHkHOBCcT7gMvy7cC7cav0KjeTqZo58LPzi9BINIA0+7dkGP0Km4nhASIf9rWVWs7baMckZFVZOvv4ku8L/AYcjTO2FEDMLuYoxQ/Pyo8xfQhxtIJU6DC331T7SkuStzCagQJtuduYbVm7VFSiOJqQiVkKDY0/Eb+owAzNHlUc1pGR24029POQdxg7revdRVqnI308BREj5LW8yyHKMYVuFECAqNC+gyUWmUigjYhDzqGoQTm0dOK02DPqyj0W033AwhcUhxPKdls1i0rU5pIAkEI2eiQPVjEWjV5kBD7z6kBAlawmfHn6cSA2aWYcw4OlaPHYGy35MWgoSTcgTjRcxMzDMxYv9xuZpqhETm3ebvUBqi41GjQwn/lHkkfPdKMDEqinmyFotzCUoDyc7D6HM8Zxw3MREb+uADn5TS4NlofxI5cgP0xLrgcqQD/rLgCBL6ZvzeCVdqj4g4AmatDYk8AhpWq7Qs2YLAYrWs6AwGBHYCMwERYtqJO7Tr50H5iS9T+llhexAaFn4Cu0reoGT8TUsZNC48TXM2Eaye6WZawmdoMaEkoiAHWCRpj9JAYoz93TsQjgQ/LvjtpAgkps/TO2D1cTd4Qieo6fKRetgxMia5n2gQsxelIzJ+n/f3NMiUJDqcOM8GLoYaQIUk8CLmc6cvor40Ucii+YYC+GP7z6Dy4zsxeP4KXdFW+CDwH1j78e1gxTTXH++BxeblEBej4I1eUlwPrSP7PIP1mq73/a/fvGzOC0o9LtEIFpRUQ0OJAbBp86aMIeWWRWeDN/tr4VDfftAiQeQaHHApfB4O39FMXeKxc/eBBd1EqU7Um7TQdqCtnj31yqe+dDOvGMnD8UHqbz7BCwbMyf2YOUiRKkixpON1jJ66hF/oo+BIMfuydzvdhJoilrfqGXIaQZoipvNDX7Uxn9+SqiEvSCukExM/e9q1GwrTiqkfEYLe0f5zGq0kAJBj0IwxrF7yYOtNv4QF6aX0/b1dz0LT0NHxojaVkAbfe2zgJfKZAnK73brlbxfFpitYCbDvYqpbbF42zl+E/0h0OnkXjE7E0BKMjB3V3qiWCDE/5lmFUZuhuvg32Xh4bk49XYi2lR6PJ3G311HHaNhyhp1aCwXQTN9ABz8TbII3+l7F4vNdymMkI5DoXJf7CCzKXIyVdDbVYF/8MpwMvg+vde9C0DFKKWp7E3LqEOqPNsLY+c0kkz4VWif726Y2TcSUPqGbApiu4SMELkhRsgQC52nqU5MtrhWLE5umjKtN06S281xj17fwOGJKd0O4LFs7B1J1oyTbZGjMeFvo5+sBx+lZ8WzNpeUwoe2cCFBsXP/BUS3DYXcni3CDRULTogJqDj7c9BZMOExKejazraPcEwzcmKMPIrIoJUyWtObtjoYSuKZ4SdYcyNudDbciNzbL4uxrklgrw2y8iOCKIUllNW338gdnQ4neqK3hdNysgcSCVDIYdfXPOeuLpxuTqr2Sd7oOfa/tvd4yi8MEX6Q2yekBOeLoaPIt3Vl48EFIUZOqCTV6TLvJs6LOZOUrhnvDUjKuVAlMzshNY4a7RurwaON+GDteTvXOTLiAHmyuP3JPdf5d1k2R/pgcw3ZVTUeoNXJyupWXOo71VX/06NFtLS209FZlkes6DCdiv9c6t6SyoMLqMlVgYi9C/jQTjiYZA1sDQRLEocig4PGdHWzo+bD79VOv9PqubHIm63wGiDNt8r1lE8wAAAAASUVORK5CYII=`;function Gm({darkMode:e,accentColor:t=`#ffb56b`}){return(0,q.jsx)(jm,{id:`contacts`,$dark:e,$accentColor:t,children:(0,q.jsxs)(Mm,{children:[(0,q.jsx)(Nm,{children:(0,q.jsx)(Pm,{src:Vm,alt:`247 forecast`,$dark:e})}),(0,q.jsxs)(Fm,{children:[(0,q.jsx)(Im,{$dark:e,children:`Address`}),(0,q.jsxs)(Lm,{$dark:e,children:[`Svobody str. 35`,(0,q.jsx)(`br`,{}),`Kyiv`,(0,q.jsx)(`br`,{}),`Ukraine`]})]}),(0,q.jsxs)(Fm,{className:`contacts`,children:[(0,q.jsx)(Im,{$dark:e,children:`Contact us`}),(0,q.jsxs)(Rm,{children:[(0,q.jsx)(zm,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,children:(0,q.jsx)(Bm,{src:Hm,alt:`Instagram`,$dark:e})}),(0,q.jsx)(zm,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,children:(0,q.jsx)(Bm,{src:Um,alt:`Facebook`,$dark:e})}),(0,q.jsx)(zm,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,children:(0,q.jsx)(Bm,{src:Wm,alt:`WhatsApp`,$dark:e})})]})]})]})})}var Km=function(e){return qm(e)&&!Jm(e)};function qm(e){return!!e&&typeof e==`object`}function Jm(e){var t=Object.prototype.toString.call(e);return t===`[object RegExp]`||t===`[object Date]`||Xm(e)}var Ym=typeof Symbol==`function`&&Symbol.for?Symbol.for(`react.element`):60103;function Xm(e){return e.$$typeof===Ym}function Zm(e){return Array.isArray(e)?[]:{}}function Qm(e,t){return t.clone!==!1&&t.isMergeableObject(e)?th(Zm(e),e,t):e}function $m(e,t,n){return e.concat(t).map(function(e){return Qm(e,n)})}function eh(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(t){r[t]=Qm(e[t],n)}),Object.keys(t).forEach(function(i){r[i]=!n.isMergeableObject(t[i])||!e[i]?Qm(t[i],n):th(e[i],t[i],n)}),r}function th(e,t,n){n||={},n.arrayMerge=n.arrayMerge||$m,n.isMergeableObject=n.isMergeableObject||Km;var r=Array.isArray(t);return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):eh(e,t,n):Qm(t,n)}th.all=function(e,t){if(!Array.isArray(e))throw Error(`first argument should be an array`);return e.reduce(function(e,n){return th(e,n,t)},{})};var nh=th,rh=typeof global==`object`&&global&&global.Object===Object&&global,ih=typeof self==`object`&&self&&self.Object===Object&&self,ah=rh||ih||Function(`return this`)(),oh=ah.Symbol,sh=Object.prototype,ch=sh.hasOwnProperty,lh=sh.toString,uh=oh?oh.toStringTag:void 0;function dh(e){var t=ch.call(e,uh),n=e[uh];try{e[uh]=void 0;var r=!0}catch{}var i=lh.call(e);return r&&(t?e[uh]=n:delete e[uh]),i}var fh=Object.prototype.toString;function ph(e){return fh.call(e)}var mh=`[object Null]`,hh=`[object Undefined]`,gh=oh?oh.toStringTag:void 0;function _h(e){return e==null?e===void 0?hh:mh:gh&&gh in Object(e)?dh(e):ph(e)}function vh(e,t){return function(n){return e(t(n))}}var yh=vh(Object.getPrototypeOf,Object);function bh(e){return typeof e==`object`&&!!e}var xh=`[object Object]`,Sh=Function.prototype,Ch=Object.prototype,wh=Sh.toString,Th=Ch.hasOwnProperty,Eh=wh.call(Object);function Dh(e){if(!bh(e)||_h(e)!=xh)return!1;var t=yh(e);if(t===null)return!0;var n=Th.call(t,`constructor`)&&t.constructor;return typeof n==`function`&&n instanceof n&&wh.call(n)==Eh}function Oh(){this.__data__=[],this.size=0}function kh(e,t){return e===t||e!==e&&t!==t}function Ah(e,t){for(var n=e.length;n--;)if(kh(e[n][0],t))return n;return-1}var jh=Array.prototype.splice;function Mh(e){var t=this.__data__,n=Ah(t,e);return n<0?!1:(n==t.length-1?t.pop():jh.call(t,n,1),--this.size,!0)}function Nh(e){var t=this.__data__,n=Ah(t,e);return n<0?void 0:t[n][1]}function Ph(e){return Ah(this.__data__,e)>-1}function Fh(e,t){var n=this.__data__,r=Ah(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Ih(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ih.prototype.clear=Oh,Ih.prototype.delete=Mh,Ih.prototype.get=Nh,Ih.prototype.has=Ph,Ih.prototype.set=Fh;function Lh(){this.__data__=new Ih,this.size=0}function Rh(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function zh(e){return this.__data__.get(e)}function Bh(e){return this.__data__.has(e)}function Vh(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}var Hh=`[object AsyncFunction]`,Uh=`[object Function]`,Wh=`[object GeneratorFunction]`,Gh=`[object Proxy]`;function Kh(e){if(!Vh(e))return!1;var t=_h(e);return t==Uh||t==Wh||t==Hh||t==Gh}var qh=ah[`__core-js_shared__`],Jh=function(){var e=/[^.]+$/.exec(qh&&qh.keys&&qh.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}();function Yh(e){return!!Jh&&Jh in e}var Xh=Function.prototype.toString;function Zh(e){if(e!=null){try{return Xh.call(e)}catch{}try{return e+``}catch{}}return``}var Qh=/[\\^$.*+?()[\]{}|]/g,$h=/^\[object .+?Constructor\]$/,eg=Function.prototype,tg=Object.prototype,ng=eg.toString,rg=tg.hasOwnProperty,ig=RegExp(`^`+ng.call(rg).replace(Qh,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`);function ag(e){return!Vh(e)||Yh(e)?!1:(Kh(e)?ig:$h).test(Zh(e))}function og(e,t){return e?.[t]}function sg(e,t){var n=og(e,t);return ag(n)?n:void 0}var cg=sg(ah,`Map`),lg=sg(Object,`create`);function ug(){this.__data__=lg?lg(null):{},this.size=0}function dg(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}var fg=`__lodash_hash_undefined__`,pg=Object.prototype.hasOwnProperty;function mg(e){var t=this.__data__;if(lg){var n=t[e];return n===fg?void 0:n}return pg.call(t,e)?t[e]:void 0}var hg=Object.prototype.hasOwnProperty;function gg(e){var t=this.__data__;return lg?t[e]!==void 0:hg.call(t,e)}var _g=`__lodash_hash_undefined__`;function vg(e,t){var n=this.__data__;return this.size+=+!this.has(e),n[e]=lg&&t===void 0?_g:t,this}function yg(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}yg.prototype.clear=ug,yg.prototype.delete=dg,yg.prototype.get=mg,yg.prototype.has=gg,yg.prototype.set=vg;function bg(){this.size=0,this.__data__={hash:new yg,map:new(cg||Ih),string:new yg}}function xg(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function Sg(e,t){var n=e.__data__;return xg(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function Cg(e){var t=Sg(this,e).delete(e);return this.size-=+!!t,t}function wg(e){return Sg(this,e).get(e)}function Tg(e){return Sg(this,e).has(e)}function Eg(e,t){var n=Sg(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Dg(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Dg.prototype.clear=bg,Dg.prototype.delete=Cg,Dg.prototype.get=wg,Dg.prototype.has=Tg,Dg.prototype.set=Eg;var Og=200;function kg(e,t){var n=this.__data__;if(n instanceof Ih){var r=n.__data__;if(!cg||r.length<Og-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Dg(r)}return n.set(e,t),this.size=n.size,this}function Ag(e){var t=this.__data__=new Ih(e);this.size=t.size}Ag.prototype.clear=Lh,Ag.prototype.delete=Rh,Ag.prototype.get=zh,Ag.prototype.has=Bh,Ag.prototype.set=kg;function jg(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var Mg=function(){try{var e=sg(Object,`defineProperty`);return e({},``,{}),e}catch{}}();function Ng(e,t,n){t==`__proto__`&&Mg?Mg(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Pg=Object.prototype.hasOwnProperty;function Fg(e,t,n){var r=e[t];(!(Pg.call(e,t)&&kh(r,n))||n===void 0&&!(t in e))&&Ng(e,t,n)}function Ig(e,t,n,r){var i=!n;n||={};for(var a=-1,o=t.length;++a<o;){var s=t[a],c=r?r(n[s],e[s],s,n,e):void 0;c===void 0&&(c=e[s]),i?Ng(n,s,c):Fg(n,s,c)}return n}function Lg(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var Rg=`[object Arguments]`;function zg(e){return bh(e)&&_h(e)==Rg}var Bg=Object.prototype,Vg=Bg.hasOwnProperty,Hg=Bg.propertyIsEnumerable,Ug=zg(function(){return arguments}())?zg:function(e){return bh(e)&&Vg.call(e,`callee`)&&!Hg.call(e,`callee`)},Wg=Array.isArray;function Gg(){return!1}var Kg=typeof exports==`object`&&exports&&!exports.nodeType&&exports,qg=Kg&&typeof module==`object`&&module&&!module.nodeType&&module,Jg=qg&&qg.exports===Kg?ah.Buffer:void 0,Yg=(Jg?Jg.isBuffer:void 0)||Gg,Xg=9007199254740991,Zg=/^(?:0|[1-9]\d*)$/;function Qg(e,t){var n=typeof e;return t??=Xg,!!t&&(n==`number`||n!=`symbol`&&Zg.test(e))&&e>-1&&e%1==0&&e<t}var $g=9007199254740991;function e_(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=$g}var t_=`[object Arguments]`,n_=`[object Array]`,r_=`[object Boolean]`,i_=`[object Date]`,a_=`[object Error]`,o_=`[object Function]`,s_=`[object Map]`,c_=`[object Number]`,l_=`[object Object]`,u_=`[object RegExp]`,d_=`[object Set]`,f_=`[object String]`,p_=`[object WeakMap]`,m_=`[object ArrayBuffer]`,h_=`[object DataView]`,g_=`[object Float32Array]`,__=`[object Float64Array]`,v_=`[object Int8Array]`,y_=`[object Int16Array]`,b_=`[object Int32Array]`,x_=`[object Uint8Array]`,S_=`[object Uint8ClampedArray]`,C_=`[object Uint16Array]`,w_=`[object Uint32Array]`,T_={};T_[g_]=T_[__]=T_[v_]=T_[y_]=T_[b_]=T_[x_]=T_[S_]=T_[C_]=T_[w_]=!0,T_[t_]=T_[n_]=T_[m_]=T_[r_]=T_[h_]=T_[i_]=T_[a_]=T_[o_]=T_[s_]=T_[c_]=T_[l_]=T_[u_]=T_[d_]=T_[f_]=T_[p_]=!1;function E_(e){return bh(e)&&e_(e.length)&&!!T_[_h(e)]}function D_(e){return function(t){return e(t)}}var O_=typeof exports==`object`&&exports&&!exports.nodeType&&exports,k_=O_&&typeof module==`object`&&module&&!module.nodeType&&module,A_=k_&&k_.exports===O_&&rh.process,j_=function(){try{return k_&&k_.require&&k_.require(`util`).types||A_&&A_.binding&&A_.binding(`util`)}catch{}}(),M_=j_&&j_.isTypedArray,N_=M_?D_(M_):E_,P_=Object.prototype.hasOwnProperty;function F_(e,t){var n=Wg(e),r=!n&&Ug(e),i=!n&&!r&&Yg(e),a=!n&&!r&&!i&&N_(e),o=n||r||i||a,s=o?Lg(e.length,String):[],c=s.length;for(var l in e)(t||P_.call(e,l))&&!(o&&(l==`length`||i&&(l==`offset`||l==`parent`)||a&&(l==`buffer`||l==`byteLength`||l==`byteOffset`)||Qg(l,c)))&&s.push(l);return s}var I_=Object.prototype;function L_(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||I_)}var R_=vh(Object.keys,Object),z_=Object.prototype.hasOwnProperty;function B_(e){if(!L_(e))return R_(e);var t=[];for(var n in Object(e))z_.call(e,n)&&n!=`constructor`&&t.push(n);return t}function V_(e){return e!=null&&e_(e.length)&&!Kh(e)}function H_(e){return V_(e)?F_(e):B_(e)}function U_(e,t){return e&&Ig(t,H_(t),e)}function W_(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var G_=Object.prototype.hasOwnProperty;function K_(e){if(!Vh(e))return W_(e);var t=L_(e),n=[];for(var r in e)r==`constructor`&&(t||!G_.call(e,r))||n.push(r);return n}function q_(e){return V_(e)?F_(e,!0):K_(e)}function J_(e,t){return e&&Ig(t,q_(t),e)}var Y_=typeof exports==`object`&&exports&&!exports.nodeType&&exports,X_=Y_&&typeof module==`object`&&module&&!module.nodeType&&module,Z_=X_&&X_.exports===Y_?ah.Buffer:void 0,Q_=Z_?Z_.allocUnsafe:void 0;function $_(e,t){if(t)return e.slice();var n=e.length,r=Q_?Q_(n):new e.constructor(n);return e.copy(r),r}function ev(e,t){var n=-1,r=e.length;for(t||=Array(r);++n<r;)t[n]=e[n];return t}function tv(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function nv(){return[]}var rv=Object.prototype.propertyIsEnumerable,iv=Object.getOwnPropertySymbols,av=iv?function(e){return e==null?[]:(e=Object(e),tv(iv(e),function(t){return rv.call(e,t)}))}:nv;function ov(e,t){return Ig(e,av(e),t)}function sv(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var cv=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)sv(t,av(e)),e=yh(e);return t}:nv;function lv(e,t){return Ig(e,cv(e),t)}function uv(e,t,n){var r=t(e);return Wg(e)?r:sv(r,n(e))}function dv(e){return uv(e,H_,av)}function fv(e){return uv(e,q_,cv)}var pv=sg(ah,`DataView`),mv=sg(ah,`Promise`),hv=sg(ah,`Set`),gv=sg(ah,`WeakMap`),_v=`[object Map]`,vv=`[object Object]`,yv=`[object Promise]`,bv=`[object Set]`,xv=`[object WeakMap]`,Sv=`[object DataView]`,Cv=Zh(pv),wv=Zh(cg),Tv=Zh(mv),Ev=Zh(hv),Dv=Zh(gv),Ov=_h;(pv&&Ov(new pv(new ArrayBuffer(1)))!=Sv||cg&&Ov(new cg)!=_v||mv&&Ov(mv.resolve())!=yv||hv&&Ov(new hv)!=bv||gv&&Ov(new gv)!=xv)&&(Ov=function(e){var t=_h(e),n=t==vv?e.constructor:void 0,r=n?Zh(n):``;if(r)switch(r){case Cv:return Sv;case wv:return _v;case Tv:return yv;case Ev:return bv;case Dv:return xv}return t});var kv=Ov,Av=Object.prototype.hasOwnProperty;function jv(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]==`string`&&Av.call(e,`index`)&&(n.index=e.index,n.input=e.input),n}var Mv=ah.Uint8Array;function Nv(e){var t=new e.constructor(e.byteLength);return new Mv(t).set(new Mv(e)),t}function Pv(e,t){var n=t?Nv(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var Fv=/\w*$/;function Iv(e){var t=new e.constructor(e.source,Fv.exec(e));return t.lastIndex=e.lastIndex,t}var Lv=oh?oh.prototype:void 0,Rv=Lv?Lv.valueOf:void 0;function zv(e){return Rv?Object(Rv.call(e)):{}}function Bv(e,t){var n=t?Nv(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var Vv=`[object Boolean]`,Hv=`[object Date]`,Uv=`[object Map]`,Wv=`[object Number]`,Gv=`[object RegExp]`,Kv=`[object Set]`,qv=`[object String]`,Jv=`[object Symbol]`,Yv=`[object ArrayBuffer]`,Xv=`[object DataView]`,Zv=`[object Float32Array]`,Qv=`[object Float64Array]`,$v=`[object Int8Array]`,ey=`[object Int16Array]`,ty=`[object Int32Array]`,ny=`[object Uint8Array]`,ry=`[object Uint8ClampedArray]`,iy=`[object Uint16Array]`,ay=`[object Uint32Array]`;function oy(e,t,n){var r=e.constructor;switch(t){case Yv:return Nv(e);case Vv:case Hv:return new r(+e);case Xv:return Pv(e,n);case Zv:case Qv:case $v:case ey:case ty:case ny:case ry:case iy:case ay:return Bv(e,n);case Uv:return new r;case Wv:case qv:return new r(e);case Gv:return Iv(e);case Kv:return new r;case Jv:return zv(e)}}var sy=Object.create,cy=function(){function e(){}return function(t){if(!Vh(t))return{};if(sy)return sy(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function ly(e){return typeof e.constructor==`function`&&!L_(e)?cy(yh(e)):{}}var uy=`[object Map]`;function dy(e){return bh(e)&&kv(e)==uy}var fy=j_&&j_.isMap,py=fy?D_(fy):dy,my=`[object Set]`;function hy(e){return bh(e)&&kv(e)==my}var gy=j_&&j_.isSet,_y=gy?D_(gy):hy,vy=1,yy=2,by=4,xy=`[object Arguments]`,Sy=`[object Array]`,Cy=`[object Boolean]`,wy=`[object Date]`,Ty=`[object Error]`,Ey=`[object Function]`,Dy=`[object GeneratorFunction]`,Oy=`[object Map]`,ky=`[object Number]`,Ay=`[object Object]`,jy=`[object RegExp]`,My=`[object Set]`,Ny=`[object String]`,Py=`[object Symbol]`,Fy=`[object WeakMap]`,Iy=`[object ArrayBuffer]`,Ly=`[object DataView]`,Ry=`[object Float32Array]`,zy=`[object Float64Array]`,By=`[object Int8Array]`,Vy=`[object Int16Array]`,Hy=`[object Int32Array]`,Uy=`[object Uint8Array]`,Wy=`[object Uint8ClampedArray]`,Gy=`[object Uint16Array]`,Ky=`[object Uint32Array]`,qy={};qy[xy]=qy[Sy]=qy[Iy]=qy[Ly]=qy[Cy]=qy[wy]=qy[Ry]=qy[zy]=qy[By]=qy[Vy]=qy[Hy]=qy[Oy]=qy[ky]=qy[Ay]=qy[jy]=qy[My]=qy[Ny]=qy[Py]=qy[Uy]=qy[Wy]=qy[Gy]=qy[Ky]=!0,qy[Ty]=qy[Ey]=qy[Fy]=!1;function Jy(e,t,n,r,i,a){var o,s=t&vy,c=t&yy,l=t&by;if(n&&(o=i?n(e,r,i,a):n(e)),o!==void 0)return o;if(!Vh(e))return e;var u=Wg(e);if(u){if(o=jv(e),!s)return ev(e,o)}else{var d=kv(e),f=d==Ey||d==Dy;if(Yg(e))return $_(e,s);if(d==Ay||d==xy||f&&!i){if(o=c||f?{}:ly(e),!s)return c?lv(e,J_(o,e)):ov(e,U_(o,e))}else{if(!qy[d])return i?e:{};o=oy(e,d,s)}}a||=new Ag;var p=a.get(e);if(p)return p;a.set(e,o),_y(e)?e.forEach(function(r){o.add(Jy(r,t,n,r,e,a))}):py(e)&&e.forEach(function(r,i){o.set(i,Jy(r,t,n,i,e,a))});var m=u?void 0:(l?c?fv:dv:c?q_:H_)(e);return jg(m||e,function(r,i){m&&(i=r,r=e[i]),Fg(o,i,Jy(r,t,n,i,e,a))}),o}var Yy=1,Xy=4;function Zy(e){return Jy(e,Yy|Xy)}var Qy=c(o(((e,t)=>{var n=Array.isArray,r=Object.keys,i=Object.prototype.hasOwnProperty,a=typeof Element<`u`;function o(e,t){if(e===t)return!0;if(e&&t&&typeof e==`object`&&typeof t==`object`){var s=n(e),c=n(t),l,u,d;if(s&&c){if(u=e.length,u!=t.length)return!1;for(l=u;l--!==0;)if(!o(e[l],t[l]))return!1;return!0}if(s!=c)return!1;var f=e instanceof Date,p=t instanceof Date;if(f!=p)return!1;if(f&&p)return e.getTime()==t.getTime();var m=e instanceof RegExp,h=t instanceof RegExp;if(m!=h)return!1;if(m&&h)return e.toString()==t.toString();var g=r(e);if(u=g.length,u!==r(t).length)return!1;for(l=u;l--!==0;)if(!i.call(t,g[l]))return!1;if(a&&e instanceof Element&&t instanceof Element)return e===t;for(l=u;l--!==0;)if(d=g[l],!(d===`_owner`&&e.$$typeof)&&!o(e[d],t[d]))return!1;return!0}return e!==e&&t!==t}t.exports=function(e,t){try{return o(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||e.number===-2146828260)return console.warn(`Warning: react-fast-compare does not handle circular references.`,e.name,e.message),!1;throw e}}}))()),$y=4;function eb(e){return Jy(e,$y)}function tb(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var nb=`[object Symbol]`;function rb(e){return typeof e==`symbol`||bh(e)&&_h(e)==nb}var ib=`Expected a function`;function ab(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw TypeError(ib);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(ab.Cache||Dg),n}ab.Cache=Dg;var ob=500;function sb(e){var t=ab(e,function(e){return n.size===ob&&n.clear(),e}),n=t.cache;return t}var cb=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,lb=/\\(\\)?/g,ub=sb(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(``),e.replace(cb,function(e,n,r,i){t.push(r?i.replace(lb,`$1`):n||e)}),t}),db=1/0;function fb(e){if(typeof e==`string`||rb(e))return e;var t=e+``;return t==`0`&&1/e==-db?`-0`:t}var pb=1/0,mb=oh?oh.prototype:void 0,hb=mb?mb.toString:void 0;function gb(e){if(typeof e==`string`)return e;if(Wg(e))return tb(e,gb)+``;if(rb(e))return hb?hb.call(e):``;var t=e+``;return t==`0`&&1/e==-pb?`-0`:t}function _b(e){return e==null?``:gb(e)}function vb(e){return Wg(e)?tb(e,fb):rb(e)?[e]:ev(ub(_b(e)))}var yb=o((e=>{var t=typeof Symbol==`function`&&Symbol.for,n=t?Symbol.for(`react.element`):60103,r=t?Symbol.for(`react.portal`):60106,i=t?Symbol.for(`react.fragment`):60107,a=t?Symbol.for(`react.strict_mode`):60108,o=t?Symbol.for(`react.profiler`):60114,s=t?Symbol.for(`react.provider`):60109,c=t?Symbol.for(`react.context`):60110,l=t?Symbol.for(`react.async_mode`):60111,u=t?Symbol.for(`react.concurrent_mode`):60111,d=t?Symbol.for(`react.forward_ref`):60112,f=t?Symbol.for(`react.suspense`):60113,p=t?Symbol.for(`react.suspense_list`):60120,m=t?Symbol.for(`react.memo`):60115,h=t?Symbol.for(`react.lazy`):60116,g=t?Symbol.for(`react.block`):60121,_=t?Symbol.for(`react.fundamental`):60117,v=t?Symbol.for(`react.responder`):60118,y=t?Symbol.for(`react.scope`):60119;function b(e){if(typeof e==`object`&&e){var t=e.$$typeof;switch(t){case n:switch(e=e.type,e){case l:case u:case i:case o:case a:case f:return e;default:switch(e&&=e.$$typeof,e){case c:case d:case h:case m:case s:return e;default:return t}}case r:return t}}}function x(e){return b(e)===u}e.AsyncMode=l,e.ConcurrentMode=u,e.ContextConsumer=c,e.ContextProvider=s,e.Element=n,e.ForwardRef=d,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=o,e.StrictMode=a,e.Suspense=f,e.isAsyncMode=function(e){return x(e)||b(e)===l},e.isConcurrentMode=x,e.isContextConsumer=function(e){return b(e)===c},e.isContextProvider=function(e){return b(e)===s},e.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===n},e.isForwardRef=function(e){return b(e)===d},e.isFragment=function(e){return b(e)===i},e.isLazy=function(e){return b(e)===h},e.isMemo=function(e){return b(e)===m},e.isPortal=function(e){return b(e)===r},e.isProfiler=function(e){return b(e)===o},e.isStrictMode=function(e){return b(e)===a},e.isSuspense=function(e){return b(e)===f},e.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===i||e===u||e===o||e===a||e===f||e===p||typeof e==`object`&&!!e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===_||e.$$typeof===v||e.$$typeof===y||e.$$typeof===g)},e.typeOf=b})),bb=o(((e,t)=>{t.exports=yb()}));o(((e,t)=>{var n=bb(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=a,s[n.Memo]=o;function c(e){return n.isMemo(e)?o:s[e.$$typeof]||r}var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;function h(e,t,n){if(typeof t!=`string`){if(m){var r=p(t);r&&r!==m&&h(e,r,n)}var a=u(t);d&&(a=a.concat(d(t)));for(var o=c(e),s=c(t),g=0;g<a.length;++g){var _=a[g];if(!i[_]&&!(n&&n[_])&&!(s&&s[_])&&!(o&&o[_])){var v=f(t,_);try{l(e,_,v)}catch{}}}}return e}t.exports=h}))();function xb(){return xb=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xb.apply(this,arguments)}function Sb(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Cb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function wb(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}var Tb=(0,z.createContext)(void 0);Tb.displayName=`FormikContext`,Tb.Provider,Tb.Consumer;function Eb(){return(0,z.useContext)(Tb)}var Db=function(e){return Array.isArray(e)&&e.length===0},Ob=function(e){return typeof e==`function`},kb=function(e){return typeof e==`object`&&!!e},Ab=function(e){return String(Math.floor(Number(e)))===e},jb=function(e){return Object.prototype.toString.call(e)===`[object String]`},Mb=function(e){return z.Children.count(e)===0},Nb=function(e){return kb(e)&&Ob(e.then)};function Pb(e,t,n,r){r===void 0&&(r=0);for(var i=vb(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function Fb(e,t,n){for(var r=eb(e),i=r,a=0,o=vb(t);a<o.length-1;a++){var s=o[a],c=Pb(e,o.slice(0,a+1));if(c&&(kb(c)||Array.isArray(c)))i=i[s]=eb(c);else{var l=o[a+1];i=i[s]=Ab(l)&&Number(l)>=0?[]:{}}}return(a===0?e:i)[o[a]]===n?e:(n===void 0?delete i[o[a]]:i[o[a]]=n,a===0&&n===void 0&&delete r[o[a]],r)}function Ib(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,a=Object.keys(e);i<a.length;i++){var o=a[i],s=e[o];kb(s)?n.get(s)||(n.set(s,!0),r[o]=Array.isArray(s)?[]:{},Ib(s,t,n,r[o])):r[o]=t}return r}function Lb(e,t){switch(t.type){case`SET_VALUES`:return xb({},e,{values:t.payload});case`SET_TOUCHED`:return xb({},e,{touched:t.payload});case`SET_ERRORS`:return(0,Qy.default)(e.errors,t.payload)?e:xb({},e,{errors:t.payload});case`SET_STATUS`:return xb({},e,{status:t.payload});case`SET_ISSUBMITTING`:return xb({},e,{isSubmitting:t.payload});case`SET_ISVALIDATING`:return xb({},e,{isValidating:t.payload});case`SET_FIELD_VALUE`:return xb({},e,{values:Fb(e.values,t.payload.field,t.payload.value)});case`SET_FIELD_TOUCHED`:return xb({},e,{touched:Fb(e.touched,t.payload.field,t.payload.value)});case`SET_FIELD_ERROR`:return xb({},e,{errors:Fb(e.errors,t.payload.field,t.payload.value)});case`RESET_FORM`:return xb({},e,t.payload);case`SET_FORMIK_STATE`:return t.payload(e);case`SUBMIT_ATTEMPT`:return xb({},e,{touched:Ib(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case`SUBMIT_FAILURE`:return xb({},e,{isSubmitting:!1});case`SUBMIT_SUCCESS`:return xb({},e,{isSubmitting:!1});default:return e}}var Rb={},zb={};function Bb(e){var t=e.validateOnChange,n=t===void 0||t,r=e.validateOnBlur,i=r===void 0||r,a=e.validateOnMount,o=a!==void 0&&a,s=e.isInitialValid,c=e.enableReinitialize,l=c!==void 0&&c,u=e.onSubmit,d=Cb(e,[`validateOnChange`,`validateOnBlur`,`validateOnMount`,`isInitialValid`,`enableReinitialize`,`onSubmit`]),f=xb({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:u},d),p=(0,z.useRef)(f.initialValues),m=(0,z.useRef)(f.initialErrors||Rb),h=(0,z.useRef)(f.initialTouched||zb),g=(0,z.useRef)(f.initialStatus),_=(0,z.useRef)(!1),v=(0,z.useRef)({});(0,z.useEffect)(function(){return _.current=!0,function(){_.current=!1}},[]);var y=(0,z.useState)(0)[1],b=(0,z.useRef)({values:Zy(f.initialValues),errors:Zy(f.initialErrors)||Rb,touched:Zy(f.initialTouched)||zb,status:Zy(f.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0}),x=b.current,S=(0,z.useCallback)(function(e){var t=b.current;b.current=Lb(t,e),t!==b.current&&y(function(e){return e+1})},[]),C=(0,z.useCallback)(function(e,t){return new Promise(function(n,r){var i=f.validate(e,t);i==null?n(Rb):Nb(i)?i.then(function(e){n(e||Rb)},function(e){r(e)}):n(i)})},[f.validate]),w=(0,z.useCallback)(function(e,t){var n=f.validationSchema,r=Ob(n)?n(t):n,i=t&&r.validateAt?r.validateAt(t,e):Hb(e,r);return new Promise(function(e,t){i.then(function(){e(Rb)},function(n){n.name===`ValidationError`?e(Vb(n)):t(n)})})},[f.validationSchema]),T=(0,z.useCallback)(function(e,t){return new Promise(function(n){return n(v.current[e].validate(t))})},[]),E=(0,z.useCallback)(function(e){var t=Object.keys(v.current).filter(function(e){return Ob(v.current[e].validate)}),n=t.length>0?t.map(function(t){return T(t,Pb(e,t))}):[Promise.resolve(`DO_NOT_DELETE_YOU_WILL_BE_FIRED`)];return Promise.all(n).then(function(e){return e.reduce(function(e,n,r){return n===`DO_NOT_DELETE_YOU_WILL_BE_FIRED`||n&&(e=Fb(e,t[r],n)),e},{})})},[T]),ee=(0,z.useCallback)(function(e){return Promise.all([E(e),f.validationSchema?w(e):{},f.validate?C(e):{}]).then(function(e){var t=e[0],n=e[1],r=e[2];return nh.all([t,n,r],{arrayMerge:Wb})})},[f.validate,f.validationSchema,E,C,w]),D=Jb(function(e){return e===void 0&&(e=x.values),S({type:`SET_ISVALIDATING`,payload:!0}),ee(e).then(function(e){return _.current&&(S({type:`SET_ISVALIDATING`,payload:!1}),S({type:`SET_ERRORS`,payload:e})),e})});(0,z.useEffect)(function(){o&&_.current===!0&&(0,Qy.default)(p.current,f.initialValues)&&D(p.current)},[o,D]);var te=(0,z.useCallback)(function(e){var t=e&&e.values?e.values:p.current,n=e&&e.errors?e.errors:m.current?m.current:f.initialErrors||{},r=e&&e.touched?e.touched:h.current?h.current:f.initialTouched||{},i=e&&e.status?e.status:g.current?g.current:f.initialStatus;p.current=t,m.current=n,h.current=r,g.current=i;var a=function(){S({type:`RESET_FORM`,payload:{isSubmitting:!!e&&!!e.isSubmitting,errors:n,touched:r,status:i,values:t,isValidating:!!e&&!!e.isValidating,submitCount:e&&e.submitCount&&typeof e.submitCount==`number`?e.submitCount:0}})};if(f.onReset){var o=f.onReset(x.values,ue);Nb(o)?o.then(a):a()}else a()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);(0,z.useEffect)(function(){_.current===!0&&!(0,Qy.default)(p.current,f.initialValues)&&l&&(p.current=f.initialValues,te(),o&&D(p.current))},[l,f.initialValues,te,o,D]),(0,z.useEffect)(function(){l&&_.current===!0&&!(0,Qy.default)(m.current,f.initialErrors)&&(m.current=f.initialErrors||Rb,S({type:`SET_ERRORS`,payload:f.initialErrors||Rb}))},[l,f.initialErrors]),(0,z.useEffect)(function(){l&&_.current===!0&&!(0,Qy.default)(h.current,f.initialTouched)&&(h.current=f.initialTouched||zb,S({type:`SET_TOUCHED`,payload:f.initialTouched||zb}))},[l,f.initialTouched]),(0,z.useEffect)(function(){l&&_.current===!0&&!(0,Qy.default)(g.current,f.initialStatus)&&(g.current=f.initialStatus,S({type:`SET_STATUS`,payload:f.initialStatus}))},[l,f.initialStatus,f.initialTouched]);var ne=Jb(function(e){if(v.current[e]&&Ob(v.current[e].validate)){var t=Pb(x.values,e),n=v.current[e].validate(t);return Nb(n)?(S({type:`SET_ISVALIDATING`,payload:!0}),n.then(function(e){return e}).then(function(t){S({type:`SET_FIELD_ERROR`,payload:{field:e,value:t}}),S({type:`SET_ISVALIDATING`,payload:!1})})):(S({type:`SET_FIELD_ERROR`,payload:{field:e,value:n}}),Promise.resolve(n))}return f.validationSchema?(S({type:`SET_ISVALIDATING`,payload:!0}),w(x.values,e).then(function(e){return e}).then(function(t){S({type:`SET_FIELD_ERROR`,payload:{field:e,value:Pb(t,e)}}),S({type:`SET_ISVALIDATING`,payload:!1})})):Promise.resolve()}),re=(0,z.useCallback)(function(e,t){var n=t.validate;v.current[e]={validate:n}},[]),O=(0,z.useCallback)(function(e){delete v.current[e]},[]),k=Jb(function(e,t){return S({type:`SET_TOUCHED`,payload:e}),(t===void 0?i:t)?D(x.values):Promise.resolve()}),A=(0,z.useCallback)(function(e){S({type:`SET_ERRORS`,payload:e})},[]),j=Jb(function(e,t){var r=Ob(e)?e(x.values):e;return S({type:`SET_VALUES`,payload:r}),(t===void 0?n:t)?D(r):Promise.resolve()}),M=(0,z.useCallback)(function(e,t){S({type:`SET_FIELD_ERROR`,payload:{field:e,value:t}})},[]),N=Jb(function(e,t,r){var i=Ob(t)?t(Pb(x.values,e)):t;return S({type:`SET_FIELD_VALUE`,payload:{field:e,value:i}}),(r===void 0?n:r)?D(Fb(x.values,e,i)):Promise.resolve()}),ie=(0,z.useCallback)(function(e,t){var n=t,r=e,i;if(!jb(e)){e.persist&&e.persist();var a=e.target?e.target:e.currentTarget,o=a.type,s=a.name,c=a.id,l=a.value,u=a.checked;a.outerHTML;var d=a.options,f=a.multiple;n=t||s||c,r=/number|range/.test(o)?(i=parseFloat(l),isNaN(i)?``:i):/checkbox/.test(o)?Kb(Pb(x.values,n),u,l):d&&f?Gb(d):l}n&&N(n,r)},[N,x.values]),P=Jb(function(e){if(jb(e))return function(t){return ie(t,e)};ie(e)}),F=Jb(function(e,t,n){return t===void 0&&(t=!0),S({type:`SET_FIELD_TOUCHED`,payload:{field:e,value:t}}),(n===void 0?i:n)?D(x.values):Promise.resolve()}),ae=(0,z.useCallback)(function(e,t){e.persist&&e.persist();var n=e.target,r=n.name,i=n.id;n.outerHTML,F(t||r||i,!0)},[F]),oe=Jb(function(e){if(jb(e))return function(t){return ae(t,e)};ae(e)}),I=(0,z.useCallback)(function(e){Ob(e)?S({type:`SET_FORMIK_STATE`,payload:e}):S({type:`SET_FORMIK_STATE`,payload:function(){return e}})},[]),se=(0,z.useCallback)(function(e){S({type:`SET_STATUS`,payload:e})},[]),ce=(0,z.useCallback)(function(e){S({type:`SET_ISSUBMITTING`,payload:e})},[]),R=Jb(function(){return S({type:`SUBMIT_ATTEMPT`}),D().then(function(e){var t=e instanceof Error;if(!t&&Object.keys(e).length===0){var n;try{if(n=de(),n===void 0)return}catch(e){throw e}return Promise.resolve(n).then(function(e){return _.current&&S({type:`SUBMIT_SUCCESS`}),e}).catch(function(e){if(_.current)throw S({type:`SUBMIT_FAILURE`}),e})}if(_.current&&(S({type:`SUBMIT_FAILURE`}),t))throw e})}),le=Jb(function(e){e&&e.preventDefault&&Ob(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&Ob(e.stopPropagation)&&e.stopPropagation(),R().catch(function(e){console.warn(`Warning: An unhandled error was caught from submitForm()`,e)})}),ue={resetForm:te,validateForm:D,validateField:ne,setErrors:A,setFieldError:M,setFieldTouched:F,setFieldValue:N,setStatus:se,setSubmitting:ce,setTouched:k,setValues:j,setFormikState:I,submitForm:R},de=Jb(function(){return u(x.values,ue)}),fe=Jb(function(e){e&&e.preventDefault&&Ob(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&Ob(e.stopPropagation)&&e.stopPropagation(),te()}),pe=(0,z.useCallback)(function(e){return{value:Pb(x.values,e),error:Pb(x.errors,e),touched:!!Pb(x.touched,e),initialValue:Pb(p.current,e),initialTouched:!!Pb(h.current,e),initialError:Pb(m.current,e)}},[x.errors,x.touched,x.values]),me=(0,z.useCallback)(function(e){return{setValue:function(t,n){return N(e,t,n)},setTouched:function(t,n){return F(e,t,n)},setError:function(t){return M(e,t)}}},[N,F,M]),he=(0,z.useCallback)(function(e){var t=kb(e),n=t?e.name:e,r=Pb(x.values,n),i={name:n,value:r,onChange:P,onBlur:oe};if(t){var a=e.type,o=e.value,s=e.as,c=e.multiple;a===`checkbox`?o===void 0?i.checked=!!r:(i.checked=!!(Array.isArray(r)&&~r.indexOf(o)),i.value=o):a===`radio`?(i.checked=r===o,i.value=o):s===`select`&&c&&(i.value=i.value||[],i.multiple=!0)}return i},[oe,P,x.values]),ge=(0,z.useMemo)(function(){return!(0,Qy.default)(p.current,x.values)},[p.current,x.values]),_e=(0,z.useMemo)(function(){return s===void 0||ge?x.errors&&Object.keys(x.errors).length===0:s!==!1&&Ob(s)?s(f):s},[s,ge,x.errors,f]);return xb({},x,{initialValues:p.current,initialErrors:m.current,initialTouched:h.current,initialStatus:g.current,handleBlur:oe,handleChange:P,handleReset:fe,handleSubmit:le,resetForm:te,setErrors:A,setFormikState:I,setFieldTouched:F,setFieldValue:N,setFieldError:M,setStatus:se,setSubmitting:ce,setTouched:k,setValues:j,submitForm:R,validateForm:D,validateField:ne,isValid:_e,dirty:ge,unregisterField:O,registerField:re,getFieldProps:he,getFieldMeta:pe,getFieldHelpers:me,validateOnBlur:i,validateOnChange:n,validateOnMount:o})}function Vb(e){var t={};if(e.inner){if(e.inner.length===0)return Fb(t,e.path,e.message);for(var n=e.inner,r=Array.isArray(n),i=0,n=r?n:n[Symbol.iterator]();;){var a;if(r){if(i>=n.length)break;a=n[i++]}else{if(i=n.next(),i.done)break;a=i.value}var o=a;Pb(t,o.path)||(t=Fb(t,o.path,o.message))}}return t}function Hb(e,t,n,r){n===void 0&&(n=!1);var i=Ub(e);return t[n?`validateSync`:`validate`](i,{abortEarly:!1,context:r||i})}function Ub(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);t[r]=Array.isArray(e[r])===!0?e[r].map(function(e){return Array.isArray(e)===!0||Dh(e)?Ub(e):e===``?void 0:e}):Dh(e[r])?Ub(e[r]):e[r]===``?void 0:e[r]}return t}function Wb(e,t,n){var r=e.slice();return t.forEach(function(t,i){r[i]===void 0?r[i]=n.clone!==!1&&n.isMergeableObject(t)?nh(Array.isArray(t)?[]:{},t,n):t:n.isMergeableObject(t)?r[i]=nh(e[i],t,n):e.indexOf(t)===-1&&r.push(t)}),r}function Gb(e){return Array.from(e).filter(function(e){return e.selected}).map(function(e){return e.value})}function Kb(e,t,n){if(typeof e==`boolean`)return!!t;var r=[],i=!1,a=-1;if(Array.isArray(e))r=e,a=e.indexOf(n),i=a>=0;else if(!n||n==`true`||n==`false`)return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,a).concat(r.slice(a+1)):r}var qb=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0?z.useLayoutEffect:z.useEffect;function Jb(e){var t=(0,z.useRef)(e);return qb(function(){t.current=e}),(0,z.useCallback)(function(){var e=[...arguments];return t.current.apply(void 0,e)},[])}var Yb=(0,z.forwardRef)(function(e,t){var n=e.action,r=Cb(e,[`action`]),i=n??`#`,a=Eb(),o=a.handleReset,s=a.handleSubmit;return(0,z.createElement)(`form`,xb({onSubmit:s,ref:t,onReset:o,action:i},r))});Yb.displayName=`Form`;var Xb=function(e,t,n){var r=ex(e),i=r[t];return r.splice(t,1),r.splice(n,0,i),r},Zb=function(e,t,n){var r=ex(e),i=r[t];return r[t]=r[n],r[n]=i,r},Qb=function(e,t,n){var r=ex(e);return r.splice(t,0,n),r},$b=function(e,t,n){var r=ex(e);return r[t]=n,r},ex=function(e){if(!e)return[];if(Array.isArray(e))return[].concat(e);var t=Object.keys(e).map(function(e){return parseInt(e)}).reduce(function(e,t){return t>e?t:e},0);return Array.from(xb({},e,{length:t+1}))},tx=function(e,t){var n=typeof e==`function`?e:t;return function(e){return Array.isArray(e)||kb(e)?n(ex(e)):e}},nx=function(e){Sb(t,e);function t(t){var n=e.call(this,t)||this;return n.updateArrayField=function(e,t,r){var i=n.props,a=i.name,o=i.formik.setFormikState;o(function(n){var i=tx(r,e),o=tx(t,e),s=Fb(n.values,a,e(Pb(n.values,a))),c=r?i(Pb(n.errors,a)):void 0,l=t?o(Pb(n.touched,a)):void 0;return Db(c)&&(c=void 0),Db(l)&&(l=void 0),xb({},n,{values:s,errors:r?Fb(n.errors,a,c):n.errors,touched:t?Fb(n.touched,a,l):n.touched})})},n.push=function(e){return n.updateArrayField(function(t){return[].concat(ex(t),[Zy(e)])},!1,!1)},n.handlePush=function(e){return function(){return n.push(e)}},n.swap=function(e,t){return n.updateArrayField(function(n){return Zb(n,e,t)},!0,!0)},n.handleSwap=function(e,t){return function(){return n.swap(e,t)}},n.move=function(e,t){return n.updateArrayField(function(n){return Xb(n,e,t)},!0,!0)},n.handleMove=function(e,t){return function(){return n.move(e,t)}},n.insert=function(e,t){return n.updateArrayField(function(n){return Qb(n,e,t)},function(t){return Qb(t,e,null)},function(t){return Qb(t,e,null)})},n.handleInsert=function(e,t){return function(){return n.insert(e,t)}},n.replace=function(e,t){return n.updateArrayField(function(n){return $b(n,e,t)},!1,!1)},n.handleReplace=function(e,t){return function(){return n.replace(e,t)}},n.unshift=function(e){var t=-1;return n.updateArrayField(function(n){var r=n?[e].concat(n):[e];return t=r.length,r},function(e){return e?[null].concat(e):[null]},function(e){return e?[null].concat(e):[null]}),t},n.handleUnshift=function(e){return function(){return n.unshift(e)}},n.handleRemove=function(e){return function(){return n.remove(e)}},n.handlePop=function(){return function(){return n.pop()}},n.remove=n.remove.bind(wb(n)),n.pop=n.pop.bind(wb(n)),n}var n=t.prototype;return n.componentDidUpdate=function(e){this.props.validateOnChange&&this.props.formik.validateOnChange&&!(0,Qy.default)(Pb(e.formik.values,e.name),Pb(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(e){var t;return this.updateArrayField(function(n){var r=n?ex(n):[];return t||=r[e],Ob(r.splice)&&r.splice(e,1),Ob(r.every)&&r.every(function(e){return e===void 0})?[]:r},!0,!0),t},n.pop=function(){var e;return this.updateArrayField(function(t){var n=t.slice();return e||=n&&n.pop&&n.pop(),n},!0,!0),e},n.render=function(){var e={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},t=this.props,n=t.component,r=t.render,i=t.children,a=t.name,o=t.formik,s=Cb(o,[`validate`,`validationSchema`]),c=xb({},e,{form:s,name:a});return n?(0,z.createElement)(n,c):r?r(c):i?typeof i==`function`?i(c):Mb(i)?null:z.Children.only(i):null},t}(z.Component);nx.defaultProps={validateOnChange:!0};var rx=e=>typeof e==`number`&&!isNaN(e),ix=e=>typeof e==`string`,ax=e=>typeof e==`function`,ox=e=>ix(e)||rx(e),sx=e=>(0,z.isValidElement)(e)||ix(e)||ax(e)||rx(e);function cx(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight=`initial`,i.height=r+`px`,i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height=`0`,i.padding=`0`,i.margin=`0`,setTimeout(t,n)})})}function lx({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:a,position:o,preventExitTransition:s,done:c,nodeRef:l,isIn:u,playToast:d}){let f=n?`${e}--${o}`:e,p=n?`${t}--${o}`:t,m=(0,z.useRef)(0);return(0,z.useLayoutEffect)(()=>{let e=l.current,t=f.split(` `),n=r=>{r.target===l.current&&(d(),e.removeEventListener(`animationend`,n),e.removeEventListener(`animationcancel`,n),m.current===0&&r.type!==`animationcancel`&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener(`animationend`,n),e.addEventListener(`animationcancel`,n)},[]),(0,z.useEffect)(()=>{let e=l.current,t=()=>{e.removeEventListener(`animationend`,t),r?cx(e,c,i):c()};u||(s?t():(m.current=1,e.className+=` ${p}`,e.addEventListener(`animationend`,t)))},[u]),z.createElement(z.Fragment,null,a)}}var ux=1,dx=()=>`${ux++}`,fx=new Map,px=[],mx=new Set,hx=()=>fx.size>0,gx=(e,{containerId:t})=>fx.get(t||1)?.toasts.get(e);function _x(e,t){var n;if(t)return!!((n=fx.get(t))!=null&&n.isToastActive(e));let r=!1;return fx.forEach(t=>{t.isToastActive(e)&&(r=!0)}),r}function vx(e){if(!hx()){px=px.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||ox(e))fx.forEach(t=>{t.removeToast(e)});else if(e&&(`containerId`in e||`id`in e)){let t=fx.get(e.containerId);t?t.removeToast(e.id):fx.forEach(t=>{t.removeToast(e.id)})}}var yx=(e={})=>{fx.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function bx(e,t){sx(e)&&(hx()||px.push({content:e,options:t}),fx.forEach(n=>{n.buildToast(e,t)}))}function xx(e,t){fx.forEach(n=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===n.id)&&n.toggle(e,t?.id)})}function Sx(e){return mx.add(e),()=>{mx.delete(e)}}function Cx(e){return e&&(ix(e.toastId)||rx(e.toastId))?e.toastId:dx()}function wx(e,t){return bx(e,t),t.toastId}function Tx(e,t){return{...t,type:t&&t.type||e,toastId:Cx(t)}}function Ex(e){return(t,n)=>wx(t,Tx(e,n))}function Dx(e,t){return wx(e,Tx(`default`,t))}Dx.loading=(e,t)=>wx(e,Tx(`default`,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function Ox(e,{pending:t,error:n,success:r},i){let a;t&&(a=ix(t)?Dx.loading(t,i):Dx.loading(t.render,{...i,...t}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(e,t,n)=>{if(t==null){Dx.dismiss(a);return}let r={type:e,...o,...i,data:n},s=ix(t)?{render:t}:t;return a?Dx.update(a,{...r,...s}):Dx(s.render,{...r,...s}),n},c=ax(e)?e():e;return c.then(e=>s(`success`,r,e)).catch(e=>s(`error`,n,e)),c}Dx.promise=Ox,Dx.success=Ex(`success`),Dx.info=Ex(`info`),Dx.error=Ex(`error`),Dx.warning=Ex(`warning`),Dx.warn=Dx.warning,Dx.dark=(e,t)=>wx(e,Tx(`default`,{theme:`dark`,...t}));function kx(e){vx(e)}Dx.dismiss=kx,Dx.clearWaitingQueue=yx,Dx.isActive=_x,Dx.update=(e,t={})=>{let n=gx(e,t);if(n){let{props:r,content:i}=n,a={delay:100,...r,...t,toastId:t.toastId||e,updateId:dx()};a.toastId!==e&&(a.staleId=e);let o=a.render||i;delete a.render,wx(o,a)}},Dx.done=e=>{Dx.update(e,{progress:1})},Dx.onChange=Sx,Dx.play=e=>xx(!0,e),Dx.pause=e=>xx(!1,e);var Ax=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t});lx(Ax(`bounce`,!0)),lx(Ax(`slide`,!0)),lx(Ax(`zoom`)),lx(Ax(`flip`));var jx=`
  opacity: 0;
  transform: translateY(12px);
  animation: modalItemAppear 0.55s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
`,Mx=K.div`
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
`,Nx=K.div`
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
`,Px=K.div`
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
`,Fx=K.button`
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
`,Ix=K.h2`
  ${jx}

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
`,Lx=K.form`
  display: flex;
  flex-direction: column;

  gap: 11px;

  @media screen and (min-width: 564px) {
    gap: 14px;
  }

  @media screen and (min-width: 1160px) {
    gap: 16px;
  }
`,Rx=K.input`
  ${jx}

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
`,zx=K.button`
  ${jx}

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
`,Bx=K.p`
  ${jx}

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
`,Vx=K.a`
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
`,Hx=K.div`
  ${jx}

  animation-delay: 0.26s;

  position: relative;

  width: 100%;
`,Ux=K.button`
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
`;function Wx({onClose:e,onSubmit:t,darkMode:n}){let[r,i]=(0,z.useState)(!1),[a,o]=(0,z.useState)(()=>localStorage.getItem(`accentColor`)||`#ffb36c`),s=Bb({initialValues:{username:``,email:``,password:``},onSubmit:(n,{resetForm:r})=>{if(n.password.length<8){Dx.error(`Password must contain at least 8 characters!`);return}t?t(n):(localStorage.setItem(`weatherUser`,JSON.stringify(n)),Dx.success(`Registration successful!`)),r(),e()}});return(0,q.jsx)(Mx,{$dark:n,$accent:a,onClick:t=>{t.target===t.currentTarget&&e()},children:(0,q.jsxs)(Nx,{$dark:n,$accent:a,children:[(0,q.jsx)(Px,{$accent:a,$position:`top`}),(0,q.jsx)(Px,{$accent:a,$position:`bottom`}),(0,q.jsx)(Px,{$accent:a,$position:`center`}),(0,q.jsx)(Fx,{$dark:n,$accent:a,type:`button`,onClick:e,"aria-label":`Close`,children:(0,q.jsx)(tr,{size:24})}),(0,q.jsx)(Ix,{$dark:n,$accent:a,children:`Sign up`}),(0,q.jsxs)(Lx,{onSubmit:s.handleSubmit,children:[(0,q.jsx)(Rx,{$dark:n,$accent:a,type:`text`,name:`username`,placeholder:`Username`,value:s.values.username,onChange:s.handleChange,required:!0}),(0,q.jsx)(Rx,{$dark:n,$accent:a,type:`email`,name:`email`,placeholder:`E-Mail`,value:s.values.email,onChange:s.handleChange,required:!0}),(0,q.jsxs)(Hx,{children:[(0,q.jsx)(Rx,{$dark:n,$accent:a,type:r?`text`:`password`,name:`password`,placeholder:`Password`,value:s.values.password,onChange:s.handleChange,minLength:8,required:!0}),(0,q.jsx)(Ux,{$dark:n,$accent:a,type:`button`,onClick:()=>i(e=>!e),"aria-label":r?`Hide password`:`Show password`,children:r?(0,q.jsx)(ur,{}):(0,q.jsx)(lr,{})})]}),(0,q.jsx)(zx,{$accent:a,type:`submit`,children:`Sign up`})]}),(0,q.jsxs)(Bx,{$dark:n,children:[`Already have an account?`,` `,(0,q.jsx)(Vx,{$dark:n,$accent:a,href:`#login`,children:`Log In`})]})]})})}var Gx=`
  opacity: 0;
  transform: translateY(12px);
  animation: profileItemAppear 0.55s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
`,Kx=K.div`
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
`,qx=K.div`
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
`,Jx=K.div`
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
`,Yx=K.button`
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
`,Xx=K.h2`
  ${Gx}

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
`,Zx=K.div`
  ${Gx}

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
`,Qx=K.img`
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
`,$x=K.div`
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
`,eS=K.label`
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
`,tS=K.input`
  display: none;
`,nS=K.div`
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
`,rS=K.div`
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
`,iS=K.div`
  margin-bottom: 2px;

  color: ${({$dark:e})=>e?`#777777`:`#888888`};

  font-size: 9px;
  font-weight: 600;

  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media screen and (min-width: 1160px) {
    font-size: 10px;
  }
`,aS=K.div`
  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  font-size: 12px;
  font-weight: 600;

  word-break: break-word;

  @media screen and (min-width: 1160px) {
    font-size: 14px;
  }
`,oS=K.input`
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
`,sS=K.button`
  ${Gx}

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
`,cS=K(sS)`
  margin-top: 9px;
`,lS=K.button`
  ${Gx}

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
`,uS=K.div`
  position: relative;

  width: 100%;
`,dS=K.button`
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
`,fS=K.button`
  ${Gx}

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
`,pS=localStorage.getItem(`accentColor`)||`#ffb36c`;function mS({onClose:e,onAvatarChange:t,onUserUpdate:n,onLogout:r,darkMode:i,onOpenColor:a}){let o=JSON.parse(localStorage.getItem(`weatherUser`))||{},[s,c]=(0,z.useState)(!1),[l,u]=(0,z.useState)(o),[d,f]=(0,z.useState)(localStorage.getItem(`weatherAvatar`)||null),[p,m]=(0,z.useState)(!1),[h,g]=(0,z.useState)({username:o.username||``,email:o.email||``,password:o.password||``}),_=e=>{let n=e.target.files[0];if(!n)return;if(!n.type.startsWith(`image/`)){Dx.error(`Please select an image`);return}let r=new FileReader;r.onloadend=()=>{let e=r.result;localStorage.setItem(`weatherAvatar`,e),f(e),t&&t(e),Dx.success(`Avatar updated!`)},r.readAsDataURL(n)},v=e=>{let{name:t,value:n}=e.target;g(e=>({...e,[t]:n}))};return(0,q.jsx)(Kx,{$dark:i,onClick:t=>{t.target===t.currentTarget&&e()},children:(0,q.jsxs)(qx,{$dark:i,children:[(0,q.jsx)(Jx,{$accent:pS,$position:`top`}),(0,q.jsx)(Jx,{$accent:pS,$position:`bottom`}),(0,q.jsx)(Jx,{$accent:pS,$position:`center`}),(0,q.jsx)(Yx,{$dark:i,type:`button`,onClick:e,"aria-label":`Close`,children:(0,q.jsx)(tr,{size:24})}),(0,q.jsx)(Xx,{$dark:i,$accent:pS,children:`My profile`}),(0,q.jsxs)(Zx,{children:[d?(0,q.jsx)(Qx,{src:d,alt:`Profile avatar`}):(0,q.jsx)($x,{children:l.username?.charAt(0).toUpperCase()||`U`}),(0,q.jsx)(eS,{$dark:i,htmlFor:`avatar-upload`,children:(0,q.jsx)(mr,{size:18})}),(0,q.jsx)(tS,{id:`avatar-upload`,type:`file`,accept:`image/*`,onChange:_})]}),(0,q.jsxs)(nS,{children:[(0,q.jsxs)(rS,{$dark:i,children:[(0,q.jsx)(iS,{$dark:i,children:`Username`}),p?(0,q.jsx)(oS,{$dark:i,type:`text`,name:`username`,value:h.username,onChange:v,placeholder:`Username`}):(0,q.jsx)(aS,{$dark:i,children:l.username||`—`})]}),(0,q.jsxs)(rS,{$dark:i,children:[(0,q.jsx)(iS,{$dark:i,children:`E-Mail`}),p?(0,q.jsx)(oS,{$dark:i,type:`email`,name:`email`,value:h.email,onChange:v,placeholder:`E-Mail`}):(0,q.jsx)(aS,{$dark:i,children:l.email||`—`})]}),(0,q.jsxs)(rS,{$dark:i,children:[(0,q.jsx)(iS,{$dark:i,children:`Password`}),p?(0,q.jsxs)(uS,{children:[(0,q.jsx)(oS,{$dark:i,type:s?`text`:`password`,name:`password`,value:h.password,onChange:v,placeholder:`Password`}),(0,q.jsx)(dS,{$dark:i,type:`button`,onClick:()=>c(e=>!e),"aria-label":s?`Hide password`:`Show password`,children:s?(0,q.jsx)(ur,{}):(0,q.jsx)(lr,{})})]}):(0,q.jsx)(aS,{$dark:i,children:l.password?`•`.repeat(l.password.length):`—`})]})]}),p?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(cS,{type:`button`,onClick:()=>{if(!h.username.trim()||!h.email.trim()||!h.password.trim()){Dx.error(`Please fill in all fields`);return}let e={username:h.username.trim(),email:h.email.trim(),password:h.password};localStorage.setItem(`weatherUser`,JSON.stringify(e)),u(e),n&&n(e),m(!1),Dx.success(`Profile updated!`)},children:[(0,q.jsx)(pr,{size:18}),`Save changes`]}),(0,q.jsx)(sS,{type:`button`,onClick:()=>{g({username:l.username||``,email:l.email||``,password:l.password||``}),m(!1)},children:`Cancel`})]}):(0,q.jsxs)(sS,{type:`button`,onClick:()=>m(!0),children:[(0,q.jsx)(dr,{size:18}),`Edit profile`]}),(0,q.jsxs)(fS,{type:`button`,onClick:a,children:[(0,q.jsx)(fr,{size:18}),`Change color`]}),(0,q.jsx)(lS,{type:`button`,onClick:()=>{r&&r()},$dark:i,children:`Log out`})]})})}function hS(e,t){let n=(0,z.useRef)(t);(0,z.useEffect)(function(){t!==n.current&&e.attributionControl!=null&&(n.current!=null&&e.attributionControl.removeAttribution(n.current),t!=null&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}function gS(e){return Object.freeze({__version:1,map:e})}function _S(e,t){return Object.freeze({...e,...t})}var vS=(0,z.createContext)(null);function yS(){let e=(0,z.use)(vS);if(e==null)throw Error(`No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>`);return e}var bS=m();function xS(e){function t(t,n){let{instance:r,context:i}=e(t).current;(0,z.useImperativeHandle)(n,()=>r);let{children:a}=t;return a==null?null:z.createElement(vS,{value:i},a)}return(0,z.forwardRef)(t)}function SS(e){function t(t,n){let[r,i]=(0,z.useState)(!1),{instance:a}=e(t,i).current;(0,z.useImperativeHandle)(n,()=>a),(0,z.useEffect)(function(){r&&a.update()},[a,r,t.children]);let o=a._contentNode;return o?(0,bS.createPortal)(t.children,o):null}return(0,z.forwardRef)(t)}function CS(e){function t(t,n){let{instance:r}=e(t).current;return(0,z.useImperativeHandle)(n,()=>r),null}return(0,z.forwardRef)(t)}function wS(e,t){let n=(0,z.useRef)(void 0);(0,z.useEffect)(function(){return t!=null&&e.instance.on(t),n.current=t,function(){n.current!=null&&e.instance.off(n.current),n.current=null}},[e,t])}function TS(e,t){let n=e.pane??t.pane;return n?{...e,pane:n}:e}function ES(e,t){return function(n,r){let i=yS(),a=e(TS(n,i),i);return hS(i.map,n.attribution),wS(a.current,n.eventHandlers),t(a.current,i,n,r),a}}var DS=o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?r(e):typeof define==`function`&&define.amd?define([`exports`],r):(n=typeof globalThis<`u`?globalThis:n||self,r(n.leaflet={}))})(e,(function(e){var t=`1.9.4`;function n(e){var t,n,r,i;for(n=1,r=arguments.length;n<r;n++)for(t in i=arguments[n],i)e[t]=i[t];return e}var r=Object.create||(function(){function e(){}return function(t){return e.prototype=t,new e}})();function i(e,t){var n=Array.prototype.slice;if(e.bind)return e.bind.apply(e,n.call(arguments,1));var r=n.call(arguments,2);return function(){return e.apply(t,r.length?r.concat(n.call(arguments)):arguments)}}var a=0;function o(e){return`_leaflet_id`in e||(e._leaflet_id=++a),e._leaflet_id}function s(e,t,n){var r,i,a,o=function(){r=!1,i&&=(a.apply(n,i),!1)};return a=function(){r?i=arguments:(e.apply(n,arguments),setTimeout(o,t),r=!0)},a}function c(e,t,n){var r=t[1],i=t[0],a=r-i;return e===r&&n?e:((e-i)%a+a)%a+i}function l(){return!1}function u(e,t){if(t===!1)return e;var n=10**(t===void 0?6:t);return Math.round(e*n)/n}function d(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,``)}function f(e){return d(e).split(/\s+/)}function p(e,t){for(var n in Object.prototype.hasOwnProperty.call(e,`options`)||(e.options=e.options?r(e.options):{}),t)e.options[n]=t[n];return e.options}function m(e,t,n){var r=[];for(var i in e)r.push(encodeURIComponent(n?i.toUpperCase():i)+`=`+encodeURIComponent(e[i]));return(!t||t.indexOf(`?`)===-1?`?`:`&`)+r.join(`&`)}var h=/\{ *([\w_ -]+) *\}/g;function g(e,t){return e.replace(h,function(e,n){var r=t[n];if(r===void 0)throw Error(`No value provided for variable `+e);return typeof r==`function`&&(r=r(t)),r})}var _=Array.isArray||function(e){return Object.prototype.toString.call(e)===`[object Array]`};function v(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1}var y=`data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`;function b(e){return window[`webkit`+e]||window[`moz`+e]||window[`ms`+e]}var x=0;function S(e){var t=+new Date,n=Math.max(0,16-(t-x));return x=t+n,window.setTimeout(e,n)}var C=window.requestAnimationFrame||b(`RequestAnimationFrame`)||S,w=window.cancelAnimationFrame||b(`CancelAnimationFrame`)||b(`CancelRequestAnimationFrame`)||function(e){window.clearTimeout(e)};function T(e,t,n){if(n&&C===S)e.call(t);else return C.call(window,i(e,t))}function E(e){e&&w.call(window,e)}var ee={__proto__:null,extend:n,create:r,bind:i,get lastId(){return a},stamp:o,throttle:s,wrapNum:c,falseFn:l,formatNum:u,trim:d,splitWords:f,setOptions:p,getParamString:m,template:g,isArray:_,indexOf:v,emptyImageUrl:y,requestFn:C,cancelFn:w,requestAnimFrame:T,cancelAnimFrame:E};function D(){}D.extend=function(e){var t=function(){p(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=t.__super__=this.prototype,a=r(i);for(var o in a.constructor=t,t.prototype=a,this)Object.prototype.hasOwnProperty.call(this,o)&&o!==`prototype`&&o!==`__super__`&&(t[o]=this[o]);return e.statics&&n(t,e.statics),e.includes&&(te(e.includes),n.apply(null,[a].concat(e.includes))),n(a,e),delete a.statics,delete a.includes,a.options&&(a.options=i.options?r(i.options):{},n(a.options,e.options)),a._initHooks=[],a.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var e=0,t=a._initHooks.length;e<t;e++)a._initHooks[e].call(this)}},t},D.include=function(e){var t=this.prototype.options;return n(this.prototype,e),e.options&&(this.prototype.options=t,this.mergeOptions(e.options)),this},D.mergeOptions=function(e){return n(this.prototype.options,e),this},D.addInitHook=function(e){var t=Array.prototype.slice.call(arguments,1),n=typeof e==`function`?e:function(){this[e].apply(this,t)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(n),this};function te(e){if(!(typeof L>`u`||!L||!L.Mixin)){e=_(e)?e:[e];for(var t=0;t<e.length;t++)e[t]===L.Mixin.Events&&console.warn(`Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.`,Error().stack)}}var ne={on:function(e,t,n){if(typeof e==`object`)for(var r in e)this._on(r,e[r],t);else{e=f(e);for(var i=0,a=e.length;i<a;i++)this._on(e[i],t,n)}return this},off:function(e,t,n){if(!arguments.length)delete this._events;else if(typeof e==`object`)for(var r in e)this._off(r,e[r],t);else{e=f(e);for(var i=arguments.length===1,a=0,o=e.length;a<o;a++)i?this._off(e[a]):this._off(e[a],t,n)}return this},_on:function(e,t,n,r){if(typeof t!=`function`){console.warn(`wrong listener type: `+typeof t);return}if(this._listens(e,t,n)===!1){n===this&&(n=void 0);var i={fn:t,ctx:n};r&&(i.once=!0),this._events=this._events||{},this._events[e]=this._events[e]||[],this._events[e].push(i)}},_off:function(e,t,n){var r,i,a;if(this._events&&(r=this._events[e],r)){if(arguments.length===1){if(this._firingCount)for(i=0,a=r.length;i<a;i++)r[i].fn=l;delete this._events[e];return}if(typeof t!=`function`){console.warn(`wrong listener type: `+typeof t);return}var o=this._listens(e,t,n);if(o!==!1){var s=r[o];this._firingCount&&(s.fn=l,this._events[e]=r=r.slice()),r.splice(o,1)}}},fire:function(e,t,r){if(!this.listens(e,r))return this;var i=n({},t,{type:e,target:this,sourceTarget:t&&t.sourceTarget||this});if(this._events){var a=this._events[e];if(a){this._firingCount=this._firingCount+1||1;for(var o=0,s=a.length;o<s;o++){var c=a[o],l=c.fn;c.once&&this.off(e,l,c.ctx),l.call(c.ctx||this,i)}this._firingCount--}}return r&&this._propagateEvent(i),this},listens:function(e,t,n,r){typeof e!=`string`&&console.warn(`"string" type argument expected`);var i=t;typeof t!=`function`&&(r=!!t,i=void 0,n=void 0);var a=this._events&&this._events[e];if(a&&a.length&&this._listens(e,i,n)!==!1)return!0;if(r){for(var o in this._eventParents)if(this._eventParents[o].listens(e,t,n,r))return!0}return!1},_listens:function(e,t,n){if(!this._events)return!1;var r=this._events[e]||[];if(!t)return!!r.length;n===this&&(n=void 0);for(var i=0,a=r.length;i<a;i++)if(r[i].fn===t&&r[i].ctx===n)return i;return!1},once:function(e,t,n){if(typeof e==`object`)for(var r in e)this._on(r,e[r],t,!0);else{e=f(e);for(var i=0,a=e.length;i<a;i++)this._on(e[i],t,n,!0)}return this},addEventParent:function(e){return this._eventParents=this._eventParents||{},this._eventParents[o(e)]=e,this},removeEventParent:function(e){return this._eventParents&&delete this._eventParents[o(e)],this},_propagateEvent:function(e){for(var t in this._eventParents)this._eventParents[t].fire(e.type,n({layer:e.target,propagatedFrom:e.target},e),!0)}};ne.addEventListener=ne.on,ne.removeEventListener=ne.clearAllEventListeners=ne.off,ne.addOneTimeEventListener=ne.once,ne.fireEvent=ne.fire,ne.hasEventListeners=ne.listens;var re=D.extend(ne);function O(e,t,n){this.x=n?Math.round(e):e,this.y=n?Math.round(t):t}var k=Math.trunc||function(e){return e>0?Math.floor(e):Math.ceil(e)};O.prototype={clone:function(){return new O(this.x,this.y)},add:function(e){return this.clone()._add(A(e))},_add:function(e){return this.x+=e.x,this.y+=e.y,this},subtract:function(e){return this.clone()._subtract(A(e))},_subtract:function(e){return this.x-=e.x,this.y-=e.y,this},divideBy:function(e){return this.clone()._divideBy(e)},_divideBy:function(e){return this.x/=e,this.y/=e,this},multiplyBy:function(e){return this.clone()._multiplyBy(e)},_multiplyBy:function(e){return this.x*=e,this.y*=e,this},scaleBy:function(e){return new O(this.x*e.x,this.y*e.y)},unscaleBy:function(e){return new O(this.x/e.x,this.y/e.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=k(this.x),this.y=k(this.y),this},distanceTo:function(e){e=A(e);var t=e.x-this.x,n=e.y-this.y;return Math.sqrt(t*t+n*n)},equals:function(e){return e=A(e),e.x===this.x&&e.y===this.y},contains:function(e){return e=A(e),Math.abs(e.x)<=Math.abs(this.x)&&Math.abs(e.y)<=Math.abs(this.y)},toString:function(){return`Point(`+u(this.x)+`, `+u(this.y)+`)`}};function A(e,t,n){return e instanceof O?e:_(e)?new O(e[0],e[1]):e==null?e:typeof e==`object`&&`x`in e&&`y`in e?new O(e.x,e.y):new O(e,t,n)}function j(e,t){if(e)for(var n=t?[e,t]:e,r=0,i=n.length;r<i;r++)this.extend(n[r])}j.prototype={extend:function(e){var t,n;if(!e)return this;if(e instanceof O||typeof e[0]==`number`||`x`in e)t=n=A(e);else if(e=M(e),t=e.min,n=e.max,!t||!n)return this;return!this.min&&!this.max?(this.min=t.clone(),this.max=n.clone()):(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(n.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(n.y,this.max.y)),this},getCenter:function(e){return A((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,e)},getBottomLeft:function(){return A(this.min.x,this.max.y)},getTopRight:function(){return A(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(e){var t,n;return e=typeof e[0]==`number`||e instanceof O?A(e):M(e),e instanceof j?(t=e.min,n=e.max):t=n=e,t.x>=this.min.x&&n.x<=this.max.x&&t.y>=this.min.y&&n.y<=this.max.y},intersects:function(e){e=M(e);var t=this.min,n=this.max,r=e.min,i=e.max,a=i.x>=t.x&&r.x<=n.x,o=i.y>=t.y&&r.y<=n.y;return a&&o},overlaps:function(e){e=M(e);var t=this.min,n=this.max,r=e.min,i=e.max,a=i.x>t.x&&r.x<n.x,o=i.y>t.y&&r.y<n.y;return a&&o},isValid:function(){return!!(this.min&&this.max)},pad:function(e){var t=this.min,n=this.max,r=Math.abs(t.x-n.x)*e,i=Math.abs(t.y-n.y)*e;return M(A(t.x-r,t.y-i),A(n.x+r,n.y+i))},equals:function(e){return e?(e=M(e),this.min.equals(e.getTopLeft())&&this.max.equals(e.getBottomRight())):!1}};function M(e,t){return!e||e instanceof j?e:new j(e,t)}function N(e,t){if(e)for(var n=t?[e,t]:e,r=0,i=n.length;r<i;r++)this.extend(n[r])}N.prototype={extend:function(e){var t=this._southWest,n=this._northEast,r,i;if(e instanceof P)r=e,i=e;else if(e instanceof N){if(r=e._southWest,i=e._northEast,!r||!i)return this}else return e?this.extend(F(e)||ie(e)):this;return!t&&!n?(this._southWest=new P(r.lat,r.lng),this._northEast=new P(i.lat,i.lng)):(t.lat=Math.min(r.lat,t.lat),t.lng=Math.min(r.lng,t.lng),n.lat=Math.max(i.lat,n.lat),n.lng=Math.max(i.lng,n.lng)),this},pad:function(e){var t=this._southWest,n=this._northEast,r=Math.abs(t.lat-n.lat)*e,i=Math.abs(t.lng-n.lng)*e;return new N(new P(t.lat-r,t.lng-i),new P(n.lat+r,n.lng+i))},getCenter:function(){return new P((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new P(this.getNorth(),this.getWest())},getSouthEast:function(){return new P(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(e){e=typeof e[0]==`number`||e instanceof P||`lat`in e?F(e):ie(e);var t=this._southWest,n=this._northEast,r,i;return e instanceof N?(r=e.getSouthWest(),i=e.getNorthEast()):r=i=e,r.lat>=t.lat&&i.lat<=n.lat&&r.lng>=t.lng&&i.lng<=n.lng},intersects:function(e){e=ie(e);var t=this._southWest,n=this._northEast,r=e.getSouthWest(),i=e.getNorthEast(),a=i.lat>=t.lat&&r.lat<=n.lat,o=i.lng>=t.lng&&r.lng<=n.lng;return a&&o},overlaps:function(e){e=ie(e);var t=this._southWest,n=this._northEast,r=e.getSouthWest(),i=e.getNorthEast(),a=i.lat>t.lat&&r.lat<n.lat,o=i.lng>t.lng&&r.lng<n.lng;return a&&o},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(`,`)},equals:function(e,t){return e?(e=ie(e),this._southWest.equals(e.getSouthWest(),t)&&this._northEast.equals(e.getNorthEast(),t)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function ie(e,t){return e instanceof N?e:new N(e,t)}function P(e,t,n){if(isNaN(e)||isNaN(t))throw Error(`Invalid LatLng object: (`+e+`, `+t+`)`);this.lat=+e,this.lng=+t,n!==void 0&&(this.alt=+n)}P.prototype={equals:function(e,t){return e?(e=F(e),Math.max(Math.abs(this.lat-e.lat),Math.abs(this.lng-e.lng))<=(t===void 0?1e-9:t)):!1},toString:function(e){return`LatLng(`+u(this.lat,e)+`, `+u(this.lng,e)+`)`},distanceTo:function(e){return oe.distance(this,F(e))},wrap:function(){return oe.wrapLatLng(this)},toBounds:function(e){var t=180*e/40075017,n=t/Math.cos(Math.PI/180*this.lat);return ie([this.lat-t,this.lng-n],[this.lat+t,this.lng+n])},clone:function(){return new P(this.lat,this.lng,this.alt)}};function F(e,t,n){return e instanceof P?e:_(e)&&typeof e[0]!=`object`?e.length===3?new P(e[0],e[1],e[2]):e.length===2?new P(e[0],e[1]):null:e==null?e:typeof e==`object`&&`lat`in e?new P(e.lat,`lng`in e?e.lng:e.lon,e.alt):t===void 0?null:new P(e,t,n)}var ae={latLngToPoint:function(e,t){var n=this.projection.project(e),r=this.scale(t);return this.transformation._transform(n,r)},pointToLatLng:function(e,t){var n=this.scale(t),r=this.transformation.untransform(e,n);return this.projection.unproject(r)},project:function(e){return this.projection.project(e)},unproject:function(e){return this.projection.unproject(e)},scale:function(e){return 256*2**e},zoom:function(e){return Math.log(e/256)/Math.LN2},getProjectedBounds:function(e){if(this.infinite)return null;var t=this.projection.bounds,n=this.scale(e);return new j(this.transformation.transform(t.min,n),this.transformation.transform(t.max,n))},infinite:!1,wrapLatLng:function(e){var t=this.wrapLng?c(e.lng,this.wrapLng,!0):e.lng,n=this.wrapLat?c(e.lat,this.wrapLat,!0):e.lat,r=e.alt;return new P(n,t,r)},wrapLatLngBounds:function(e){var t=e.getCenter(),n=this.wrapLatLng(t),r=t.lat-n.lat,i=t.lng-n.lng;if(r===0&&i===0)return e;var a=e.getSouthWest(),o=e.getNorthEast();return new N(new P(a.lat-r,a.lng-i),new P(o.lat-r,o.lng-i))}},oe=n({},ae,{wrapLng:[-180,180],R:6371e3,distance:function(e,t){var n=Math.PI/180,r=e.lat*n,i=t.lat*n,a=Math.sin((t.lat-e.lat)*n/2),o=Math.sin((t.lng-e.lng)*n/2),s=a*a+Math.cos(r)*Math.cos(i)*o*o,c=2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s));return this.R*c}}),I=6378137,se={R:I,MAX_LATITUDE:85.0511287798,project:function(e){var t=Math.PI/180,n=this.MAX_LATITUDE,r=Math.max(Math.min(n,e.lat),-n),i=Math.sin(r*t);return new O(this.R*e.lng*t,this.R*Math.log((1+i)/(1-i))/2)},unproject:function(e){var t=180/Math.PI;return new P((2*Math.atan(Math.exp(e.y/this.R))-Math.PI/2)*t,e.x*t/this.R)},bounds:(function(){var e=I*Math.PI;return new j([-e,-e],[e,e])})()};function ce(e,t,n,r){if(_(e)){this._a=e[0],this._b=e[1],this._c=e[2],this._d=e[3];return}this._a=e,this._b=t,this._c=n,this._d=r}ce.prototype={transform:function(e,t){return this._transform(e.clone(),t)},_transform:function(e,t){return t||=1,e.x=t*(this._a*e.x+this._b),e.y=t*(this._c*e.y+this._d),e},untransform:function(e,t){return t||=1,new O((e.x/t-this._b)/this._a,(e.y/t-this._d)/this._c)}};function R(e,t,n,r){return new ce(e,t,n,r)}var le=n({},oe,{code:`EPSG:3857`,projection:se,transformation:function(){var e=.5/(Math.PI*se.R);return R(e,.5,-e,.5)}()}),ue=n({},le,{code:`EPSG:900913`});function de(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e)}function fe(e,t){var n=``,r,i,a,o,s,c;for(r=0,a=e.length;r<a;r++){for(s=e[r],i=0,o=s.length;i<o;i++)c=s[i],n+=(i?`L`:`M`)+c.x+` `+c.y;n+=t?B.svg?`z`:`x`:``}return n||`M0 0`}var pe=document.documentElement.style,me=`ActiveXObject`in window,he=me&&!document.addEventListener,ge=`msLaunchUri`in navigator&&!(`documentMode`in document),_e=Ye(`webkit`),ve=Ye(`android`),ye=Ye(`android 2`)||Ye(`android 3`),be=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),xe=ve&&Ye(`Google`)&&be<537&&!(`AudioNode`in window),Se=!!window.opera,Ce=!ge&&Ye(`chrome`),we=Ye(`gecko`)&&!_e&&!Se&&!me,Te=!Ce&&Ye(`safari`),Ee=Ye(`phantom`),De=`OTransition`in pe,Oe=navigator.platform.indexOf(`Win`)===0,ke=me&&`transition`in pe,Ae=`WebKitCSSMatrix`in window&&`m11`in new window.WebKitCSSMatrix&&!ye,je=`MozPerspective`in pe,Me=!window.L_DISABLE_3D&&(ke||Ae||je)&&!De&&!Ee,Ne=typeof orientation<`u`||Ye(`mobile`),Pe=Ne&&_e,Fe=Ne&&Ae,Ie=!window.PointerEvent&&window.MSPointerEvent,Le=!!(window.PointerEvent||Ie),Re=`ontouchstart`in window||!!window.TouchEvent,ze=!window.L_NO_TOUCH&&(Re||Le),z=Ne&&Se,Be=Ne&&we,Ve=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,He=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener(`testPassiveEventSupport`,l,t),window.removeEventListener(`testPassiveEventSupport`,l,t)}catch{}return e}(),Ue=function(){return!!document.createElement(`canvas`).getContext}(),We=!!(document.createElementNS&&de(`svg`).createSVGRect),Ge=!!We&&(function(){var e=document.createElement(`div`);return e.innerHTML=`<svg/>`,(e.firstChild&&e.firstChild.namespaceURI)===`http://www.w3.org/2000/svg`})(),Ke=!We&&function(){try{var e=document.createElement(`div`);e.innerHTML=`<v:shape adj="1"/>`;var t=e.firstChild;return t.style.behavior=`url(#default#VML)`,t&&typeof t.adj==`object`}catch{return!1}}(),qe=navigator.platform.indexOf(`Mac`)===0,Je=navigator.platform.indexOf(`Linux`)===0;function Ye(e){return navigator.userAgent.toLowerCase().indexOf(e)>=0}var B={ie:me,ielt9:he,edge:ge,webkit:_e,android:ve,android23:ye,androidStock:xe,opera:Se,chrome:Ce,gecko:we,safari:Te,phantom:Ee,opera12:De,win:Oe,ie3d:ke,webkit3d:Ae,gecko3d:je,any3d:Me,mobile:Ne,mobileWebkit:Pe,mobileWebkit3d:Fe,msPointer:Ie,pointer:Le,touch:ze,touchNative:Re,mobileOpera:z,mobileGecko:Be,retina:Ve,passiveEvents:He,canvas:Ue,svg:We,vml:Ke,inlineSvg:Ge,mac:qe,linux:Je},Xe=B.msPointer?`MSPointerDown`:`pointerdown`,Ze=B.msPointer?`MSPointerMove`:`pointermove`,Qe=B.msPointer?`MSPointerUp`:`pointerup`,$e=B.msPointer?`MSPointerCancel`:`pointercancel`,et={touchstart:Xe,touchmove:Ze,touchend:Qe,touchcancel:$e},tt={touchstart:dt,touchmove:ut,touchend:ut,touchcancel:ut},nt={},rt=!1;function it(e,t,n){return t===`touchstart`&&lt(),tt[t]?(n=tt[t].bind(this,n),e.addEventListener(et[t],n,!1),n):(console.warn(`wrong event specified:`,t),l)}function at(e,t,n){if(!et[t]){console.warn(`wrong event specified:`,t);return}e.removeEventListener(et[t],n,!1)}function ot(e){nt[e.pointerId]=e}function st(e){nt[e.pointerId]&&(nt[e.pointerId]=e)}function ct(e){delete nt[e.pointerId]}function lt(){rt||=(document.addEventListener(Xe,ot,!0),document.addEventListener(Ze,st,!0),document.addEventListener(Qe,ct,!0),document.addEventListener($e,ct,!0),!0)}function ut(e,t){if(t.pointerType!==(t.MSPOINTER_TYPE_MOUSE||`mouse`)){for(var n in t.touches=[],nt)t.touches.push(nt[n]);t.changedTouches=[t],e(t)}}function dt(e,t){t.MSPOINTER_TYPE_TOUCH&&t.pointerType===t.MSPOINTER_TYPE_TOUCH&&nn(t),ut(e,t)}function ft(e){var t={},n,r;for(r in e)n=e[r],t[r]=n&&n.bind?n.bind(e):n;return e=t,t.type=`dblclick`,t.detail=2,t.isTrusted=!1,t._simulated=!0,t}var pt=200;function mt(e,t){e.addEventListener(`dblclick`,t);var n=0,r;function i(e){if(e.detail!==1){r=e.detail;return}if(!(e.pointerType===`mouse`||e.sourceCapabilities&&!e.sourceCapabilities.firesTouchEvents)){var i=an(e);if(!(i.some(function(e){return e instanceof HTMLLabelElement&&e.attributes.for})&&!i.some(function(e){return e instanceof HTMLInputElement||e instanceof HTMLSelectElement}))){var a=Date.now();a-n<=pt?(r++,r===2&&t(ft(e))):r=1,n=a}}}return e.addEventListener(`click`,i),{dblclick:t,simDblclick:i}}function ht(e,t){e.removeEventListener(`dblclick`,t.dblclick),e.removeEventListener(`click`,t.simDblclick)}var gt=jt([`transform`,`webkitTransform`,`OTransform`,`MozTransform`,`msTransform`]),_t=jt([`webkitTransition`,`transition`,`OTransition`,`MozTransition`,`msTransition`]),vt=_t===`webkitTransition`||_t===`OTransition`?_t+`End`:`transitionend`;function yt(e){return typeof e==`string`?document.getElementById(e):e}function bt(e,t){var n=e.style[t]||e.currentStyle&&e.currentStyle[t];if((!n||n===`auto`)&&document.defaultView){var r=document.defaultView.getComputedStyle(e,null);n=r?r[t]:null}return n===`auto`?null:n}function V(e,t,n){var r=document.createElement(e);return r.className=t||``,n&&n.appendChild(r),r}function xt(e){var t=e.parentNode;t&&t.removeChild(e)}function St(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function Ct(e){var t=e.parentNode;t&&t.lastChild!==e&&t.appendChild(e)}function wt(e){var t=e.parentNode;t&&t.firstChild!==e&&t.insertBefore(e,t.firstChild)}function Tt(e,t){if(e.classList!==void 0)return e.classList.contains(t);var n=Ot(e);return n.length>0&&RegExp(`(^|\\s)`+t+`(\\s|$)`).test(n)}function H(e,t){if(e.classList!==void 0)for(var n=f(t),r=0,i=n.length;r<i;r++)e.classList.add(n[r]);else if(!Tt(e,t)){var a=Ot(e);Dt(e,(a?a+` `:``)+t)}}function Et(e,t){e.classList===void 0?Dt(e,d((` `+Ot(e)+` `).replace(` `+t+` `,` `))):e.classList.remove(t)}function Dt(e,t){e.className.baseVal===void 0?e.className=t:e.className.baseVal=t}function Ot(e){return e.correspondingElement&&(e=e.correspondingElement),e.className.baseVal===void 0?e.className:e.className.baseVal}function kt(e,t){`opacity`in e.style?e.style.opacity=t:`filter`in e.style&&At(e,t)}function At(e,t){var n=!1,r=`DXImageTransform.Microsoft.Alpha`;try{n=e.filters.item(r)}catch{if(t===1)return}t=Math.round(t*100),n?(n.Enabled=t!==100,n.Opacity=t):e.style.filter+=` progid:`+r+`(opacity=`+t+`)`}function jt(e){for(var t=document.documentElement.style,n=0;n<e.length;n++)if(e[n]in t)return e[n];return!1}function Mt(e,t,n){var r=t||new O(0,0);e.style[gt]=(B.ie3d?`translate(`+r.x+`px,`+r.y+`px)`:`translate3d(`+r.x+`px,`+r.y+`px,0)`)+(n?` scale(`+n+`)`:``)}function Nt(e,t){e._leaflet_pos=t,B.any3d?Mt(e,t):(e.style.left=t.x+`px`,e.style.top=t.y+`px`)}function Pt(e){return e._leaflet_pos||new O(0,0)}var Ft,It,Lt;if(`onselectstart`in document)Ft=function(){U(window,`selectstart`,nn)},It=function(){W(window,`selectstart`,nn)};else{var Rt=jt([`userSelect`,`WebkitUserSelect`,`OUserSelect`,`MozUserSelect`,`msUserSelect`]);Ft=function(){if(Rt){var e=document.documentElement.style;Lt=e[Rt],e[Rt]=`none`}},It=function(){Rt&&(document.documentElement.style[Rt]=Lt,Lt=void 0)}}function zt(){U(window,`dragstart`,nn)}function Bt(){W(window,`dragstart`,nn)}var Vt,Ht;function Ut(e){for(;e.tabIndex===-1;)e=e.parentNode;e.style&&(Wt(),Vt=e,Ht=e.style.outlineStyle,e.style.outlineStyle=`none`,U(window,`keydown`,Wt))}function Wt(){Vt&&(Vt.style.outlineStyle=Ht,Vt=void 0,Ht=void 0,W(window,`keydown`,Wt))}function Gt(e){do e=e.parentNode;while((!e.offsetWidth||!e.offsetHeight)&&e!==document.body);return e}function Kt(e){var t=e.getBoundingClientRect();return{x:t.width/e.offsetWidth||1,y:t.height/e.offsetHeight||1,boundingClientRect:t}}var qt={__proto__:null,TRANSFORM:gt,TRANSITION:_t,TRANSITION_END:vt,get:yt,getStyle:bt,create:V,remove:xt,empty:St,toFront:Ct,toBack:wt,hasClass:Tt,addClass:H,removeClass:Et,setClass:Dt,getClass:Ot,setOpacity:kt,testProp:jt,setTransform:Mt,setPosition:Nt,getPosition:Pt,get disableTextSelection(){return Ft},get enableTextSelection(){return It},disableImageDrag:zt,enableImageDrag:Bt,preventOutline:Ut,restoreOutline:Wt,getSizedParentNode:Gt,getScale:Kt};function U(e,t,n,r){if(t&&typeof t==`object`)for(var i in t)Zt(e,i,t[i],n);else{t=f(t);for(var a=0,o=t.length;a<o;a++)Zt(e,t[a],n,r)}return this}var Jt=`_leaflet_events`;function W(e,t,n,r){if(arguments.length===1)Yt(e),delete e[Jt];else if(t&&typeof t==`object`)for(var i in t)Qt(e,i,t[i],n);else if(t=f(t),arguments.length===2)Yt(e,function(e){return v(t,e)!==-1});else for(var a=0,o=t.length;a<o;a++)Qt(e,t[a],n,r);return this}function Yt(e,t){for(var n in e[Jt]){var r=n.split(/\d/)[0];(!t||t(r))&&Qt(e,r,null,null,n)}}var Xt={mouseenter:`mouseover`,mouseleave:`mouseout`,wheel:!(`onwheel`in window)&&`mousewheel`};function Zt(e,t,n,r){var i=t+o(n)+(r?`_`+o(r):``);if(e[Jt]&&e[Jt][i])return this;var a=function(t){return n.call(r||e,t||window.event)},s=a;!B.touchNative&&B.pointer&&t.indexOf(`touch`)===0?a=it(e,t,a):B.touch&&t===`dblclick`?a=mt(e,a):`addEventListener`in e?t===`touchstart`||t===`touchmove`||t===`wheel`||t===`mousewheel`?e.addEventListener(Xt[t]||t,a,B.passiveEvents?{passive:!1}:!1):t===`mouseenter`||t===`mouseleave`?(a=function(t){t||=window.event,ln(e,t)&&s(t)},e.addEventListener(Xt[t],a,!1)):e.addEventListener(t,s,!1):e.attachEvent(`on`+t,a),e[Jt]=e[Jt]||{},e[Jt][i]=a}function Qt(e,t,n,r,i){i||=t+o(n)+(r?`_`+o(r):``);var a=e[Jt]&&e[Jt][i];if(!a)return this;!B.touchNative&&B.pointer&&t.indexOf(`touch`)===0?at(e,t,a):B.touch&&t===`dblclick`?ht(e,a):`removeEventListener`in e?e.removeEventListener(Xt[t]||t,a,!1):e.detachEvent(`on`+t,a),e[Jt][i]=null}function $t(e){return e.stopPropagation?e.stopPropagation():e.originalEvent?e.originalEvent._stopped=!0:e.cancelBubble=!0,this}function en(e){return Zt(e,`wheel`,$t),this}function tn(e){return U(e,`mousedown touchstart dblclick contextmenu`,$t),e._leaflet_disable_click=!0,this}function nn(e){return e.preventDefault?e.preventDefault():e.returnValue=!1,this}function rn(e){return nn(e),$t(e),this}function an(e){if(e.composedPath)return e.composedPath();for(var t=[],n=e.target;n;)t.push(n),n=n.parentNode;return t}function on(e,t){if(!t)return new O(e.clientX,e.clientY);var n=Kt(t),r=n.boundingClientRect;return new O((e.clientX-r.left)/n.x-t.clientLeft,(e.clientY-r.top)/n.y-t.clientTop)}var sn=B.linux&&B.chrome?window.devicePixelRatio:B.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function cn(e){return B.edge?e.wheelDeltaY/2:e.deltaY&&e.deltaMode===0?-e.deltaY/sn:e.deltaY&&e.deltaMode===1?-e.deltaY*20:e.deltaY&&e.deltaMode===2?-e.deltaY*60:e.deltaX||e.deltaZ?0:e.wheelDelta?(e.wheelDeltaY||e.wheelDelta)/2:e.detail&&Math.abs(e.detail)<32765?-e.detail*20:e.detail?e.detail/-32765*60:0}function ln(e,t){var n=t.relatedTarget;if(!n)return!0;try{for(;n&&n!==e;)n=n.parentNode}catch{return!1}return n!==e}var un={__proto__:null,on:U,off:W,stopPropagation:$t,disableScrollPropagation:en,disableClickPropagation:tn,preventDefault:nn,stop:rn,getPropagationPath:an,getMousePosition:on,getWheelDelta:cn,isExternalTarget:ln,addListener:U,removeListener:W},dn=re.extend({run:function(e,t,n,r){this.stop(),this._el=e,this._inProgress=!0,this._duration=n||.25,this._easeOutPower=1/Math.max(r||.5,.2),this._startPos=Pt(e),this._offset=t.subtract(this._startPos),this._startTime=+new Date,this.fire(`start`),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=T(this._animate,this),this._step()},_step:function(e){var t=+new Date-this._startTime,n=this._duration*1e3;t<n?this._runFrame(this._easeOut(t/n),e):(this._runFrame(1),this._complete())},_runFrame:function(e,t){var n=this._startPos.add(this._offset.multiplyBy(e));t&&n._round(),Nt(this._el,n),this.fire(`step`)},_complete:function(){E(this._animId),this._inProgress=!1,this.fire(`end`)},_easeOut:function(e){return 1-(1-e)**this._easeOutPower}}),G=re.extend({options:{crs:le,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(e,t){t=p(this,t),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(e),this._initLayout(),this._onResize=i(this._onResize,this),this._initEvents(),t.maxBounds&&this.setMaxBounds(t.maxBounds),t.zoom!==void 0&&(this._zoom=this._limitZoom(t.zoom)),t.center&&t.zoom!==void 0&&this.setView(F(t.center),t.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=_t&&B.any3d&&!B.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),U(this._proxy,vt,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(e,t,r){return t=t===void 0?this._zoom:this._limitZoom(t),e=this._limitCenter(F(e),t,this.options.maxBounds),r||={},this._stop(),this._loaded&&!r.reset&&r!==!0&&(r.animate!==void 0&&(r.zoom=n({animate:r.animate},r.zoom),r.pan=n({animate:r.animate,duration:r.duration},r.pan)),this._zoom===t?this._tryAnimatedPan(e,r.pan):this._tryAnimatedZoom&&this._tryAnimatedZoom(e,t,r.zoom))?(clearTimeout(this._sizeTimer),this):(this._resetView(e,t,r.pan&&r.pan.noMoveStart),this)},setZoom:function(e,t){return this._loaded?this.setView(this.getCenter(),e,{zoom:t}):(this._zoom=e,this)},zoomIn:function(e,t){return e||=B.any3d?this.options.zoomDelta:1,this.setZoom(this._zoom+e,t)},zoomOut:function(e,t){return e||=B.any3d?this.options.zoomDelta:1,this.setZoom(this._zoom-e,t)},setZoomAround:function(e,t,n){var r=this.getZoomScale(t),i=this.getSize().divideBy(2),a=(e instanceof O?e:this.latLngToContainerPoint(e)).subtract(i).multiplyBy(1-1/r),o=this.containerPointToLatLng(i.add(a));return this.setView(o,t,{zoom:n})},_getBoundsCenterZoom:function(e,t){t||={},e=e.getBounds?e.getBounds():ie(e);var n=A(t.paddingTopLeft||t.padding||[0,0]),r=A(t.paddingBottomRight||t.padding||[0,0]),i=this.getBoundsZoom(e,!1,n.add(r));if(i=typeof t.maxZoom==`number`?Math.min(t.maxZoom,i):i,i===1/0)return{center:e.getCenter(),zoom:i};var a=r.subtract(n).divideBy(2),o=this.project(e.getSouthWest(),i),s=this.project(e.getNorthEast(),i);return{center:this.unproject(o.add(s).divideBy(2).add(a),i),zoom:i}},fitBounds:function(e,t){if(e=ie(e),!e.isValid())throw Error(`Bounds are not valid.`);var n=this._getBoundsCenterZoom(e,t);return this.setView(n.center,n.zoom,t)},fitWorld:function(e){return this.fitBounds([[-90,-180],[90,180]],e)},panTo:function(e,t){return this.setView(e,this._zoom,{pan:t})},panBy:function(e,t){if(e=A(e).round(),t||={},!e.x&&!e.y)return this.fire(`moveend`);if(t.animate!==!0&&!this.getSize().contains(e))return this._resetView(this.unproject(this.project(this.getCenter()).add(e)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new dn,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),t.noMoveStart||this.fire(`movestart`),t.animate!==!1){H(this._mapPane,`leaflet-pan-anim`);var n=this._getMapPanePos().subtract(e).round();this._panAnim.run(this._mapPane,n,t.duration||.25,t.easeLinearity)}else this._rawPanBy(e),this.fire(`move`).fire(`moveend`);return this},flyTo:function(e,t,n){if(n||={},n.animate===!1||!B.any3d)return this.setView(e,t,n);this._stop();var r=this.project(this.getCenter()),i=this.project(e),a=this.getSize(),o=this._zoom;e=F(e),t=t===void 0?o:t;var s=Math.max(a.x,a.y),c=s*this.getZoomScale(o,t),l=i.distanceTo(r)||1,u=1.42,d=u*u;function f(e){var t=e?-1:1,n=e?c:s,r=(c*c-s*s+t*d*d*l*l)/(2*n*d*l),i=Math.sqrt(r*r+1)-r;return i<1e-9?-18:Math.log(i)}function p(e){return(Math.exp(e)-Math.exp(-e))/2}function m(e){return(Math.exp(e)+Math.exp(-e))/2}function h(e){return p(e)/m(e)}var g=f(0);function _(e){return s*(m(g)/m(g+u*e))}function v(e){return s*(m(g)*h(g+u*e)-p(g))/d}function y(e){return 1-(1-e)**1.5}var b=Date.now(),x=(f(1)-g)/u,S=n.duration?1e3*n.duration:1e3*x*.8;function C(){var n=(Date.now()-b)/S,a=y(n)*x;n<=1?(this._flyToFrame=T(C,this),this._move(this.unproject(r.add(i.subtract(r).multiplyBy(v(a)/l)),o),this.getScaleZoom(s/_(a),o),{flyTo:!0})):this._move(e,t)._moveEnd(!0)}return this._moveStart(!0,n.noMoveStart),C.call(this),this},flyToBounds:function(e,t){var n=this._getBoundsCenterZoom(e,t);return this.flyTo(n.center,n.zoom,t)},setMaxBounds:function(e){return e=ie(e),this.listens(`moveend`,this._panInsideMaxBounds)&&this.off(`moveend`,this._panInsideMaxBounds),e.isValid()?(this.options.maxBounds=e,this._loaded&&this._panInsideMaxBounds(),this.on(`moveend`,this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(e){var t=this.options.minZoom;return this.options.minZoom=e,this._loaded&&t!==e&&(this.fire(`zoomlevelschange`),this.getZoom()<this.options.minZoom)?this.setZoom(e):this},setMaxZoom:function(e){var t=this.options.maxZoom;return this.options.maxZoom=e,this._loaded&&t!==e&&(this.fire(`zoomlevelschange`),this.getZoom()>this.options.maxZoom)?this.setZoom(e):this},panInsideBounds:function(e,t){this._enforcingBounds=!0;var n=this.getCenter(),r=this._limitCenter(n,this._zoom,ie(e));return n.equals(r)||this.panTo(r,t),this._enforcingBounds=!1,this},panInside:function(e,t){t||={};var n=A(t.paddingTopLeft||t.padding||[0,0]),r=A(t.paddingBottomRight||t.padding||[0,0]),i=this.project(this.getCenter()),a=this.project(e),o=this.getPixelBounds(),s=M([o.min.add(n),o.max.subtract(r)]),c=s.getSize();if(!s.contains(a)){this._enforcingBounds=!0;var l=a.subtract(s.getCenter()),u=s.extend(a).getSize().subtract(c);i.x+=l.x<0?-u.x:u.x,i.y+=l.y<0?-u.y:u.y,this.panTo(this.unproject(i),t),this._enforcingBounds=!1}return this},invalidateSize:function(e){if(!this._loaded)return this;e=n({animate:!1,pan:!0},e===!0?{animate:!0}:e);var t=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var r=this.getSize(),a=t.divideBy(2).round(),o=r.divideBy(2).round(),s=a.subtract(o);return!s.x&&!s.y?this:(e.animate&&e.pan?this.panBy(s):(e.pan&&this._rawPanBy(s),this.fire(`move`),e.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(i(this.fire,this,`moveend`),200)):this.fire(`moveend`)),this.fire(`resize`,{oldSize:t,newSize:r}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire(`viewreset`),this._stop()},locate:function(e){if(e=this._locateOptions=n({timeout:1e4,watch:!1},e),!(`geolocation`in navigator))return this._handleGeolocationError({code:0,message:`Geolocation not supported.`}),this;var t=i(this._handleGeolocationResponse,this),r=i(this._handleGeolocationError,this);return e.watch?this._locationWatchId=navigator.geolocation.watchPosition(t,r,e):navigator.geolocation.getCurrentPosition(t,r,e),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(e){if(this._container._leaflet_id){var t=e.code,n=e.message||(t===1?`permission denied`:t===2?`position unavailable`:`timeout`);this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire(`locationerror`,{code:t,message:`Geolocation error: `+n+`.`})}},_handleGeolocationResponse:function(e){if(this._container._leaflet_id){var t=e.coords.latitude,n=e.coords.longitude,r=new P(t,n),i=r.toBounds(e.coords.accuracy*2),a=this._locateOptions;if(a.setView){var o=this.getBoundsZoom(i);this.setView(r,a.maxZoom?Math.min(o,a.maxZoom):o)}var s={latlng:r,bounds:i,timestamp:e.timestamp};for(var c in e.coords)typeof e.coords[c]==`number`&&(s[c]=e.coords[c]);this.fire(`locationfound`,s)}},addHandler:function(e,t){if(!t)return this;var n=this[e]=new t(this);return this._handlers.push(n),this.options[e]&&n.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off(`moveend`,this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw Error(`Map container is being reused by another instance`);try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}for(var e in this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),xt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&=(E(this._resizeRequest),null),this._clearHandlers(),this._loaded&&this.fire(`unload`),this._layers)this._layers[e].remove();for(e in this._panes)xt(this._panes[e]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(e,t){var n=V(`div`,`leaflet-pane`+(e?` leaflet-`+e.replace(`Pane`,``)+`-pane`:``),t||this._mapPane);return e&&(this._panes[e]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var e=this.getPixelBounds();return new N(this.unproject(e.getBottomLeft()),this.unproject(e.getTopRight()))},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(e,t,n){e=ie(e),n=A(n||[0,0]);var r=this.getZoom()||0,i=this.getMinZoom(),a=this.getMaxZoom(),o=e.getNorthWest(),s=e.getSouthEast(),c=this.getSize().subtract(n),l=M(this.project(s,r),this.project(o,r)).getSize(),u=B.any3d?this.options.zoomSnap:1,d=c.x/l.x,f=c.y/l.y,p=t?Math.max(d,f):Math.min(d,f);return r=this.getScaleZoom(p,r),u&&(r=Math.round(r/(u/100))*(u/100),r=t?Math.ceil(r/u)*u:Math.floor(r/u)*u),Math.max(i,Math.min(a,r))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new O(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(e,t){var n=this._getTopLeftPoint(e,t);return new j(n,n.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(e){return this.options.crs.getProjectedBounds(e===void 0?this.getZoom():e)},getPane:function(e){return typeof e==`string`?this._panes[e]:e},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(e,t){var n=this.options.crs;return t=t===void 0?this._zoom:t,n.scale(e)/n.scale(t)},getScaleZoom:function(e,t){var n=this.options.crs;t=t===void 0?this._zoom:t;var r=n.zoom(e*n.scale(t));return isNaN(r)?1/0:r},project:function(e,t){return t=t===void 0?this._zoom:t,this.options.crs.latLngToPoint(F(e),t)},unproject:function(e,t){return t=t===void 0?this._zoom:t,this.options.crs.pointToLatLng(A(e),t)},layerPointToLatLng:function(e){var t=A(e).add(this.getPixelOrigin());return this.unproject(t)},latLngToLayerPoint:function(e){return this.project(F(e))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(e){return this.options.crs.wrapLatLng(F(e))},wrapLatLngBounds:function(e){return this.options.crs.wrapLatLngBounds(ie(e))},distance:function(e,t){return this.options.crs.distance(F(e),F(t))},containerPointToLayerPoint:function(e){return A(e).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(e){return A(e).add(this._getMapPanePos())},containerPointToLatLng:function(e){var t=this.containerPointToLayerPoint(A(e));return this.layerPointToLatLng(t)},latLngToContainerPoint:function(e){return this.layerPointToContainerPoint(this.latLngToLayerPoint(F(e)))},mouseEventToContainerPoint:function(e){return on(e,this._container)},mouseEventToLayerPoint:function(e){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e))},mouseEventToLatLng:function(e){return this.layerPointToLatLng(this.mouseEventToLayerPoint(e))},_initContainer:function(e){var t=this._container=yt(e);if(!t)throw Error(`Map container not found.`);if(t._leaflet_id)throw Error(`Map container is already initialized.`);U(t,`scroll`,this._onScroll,this),this._containerId=o(t)},_initLayout:function(){var e=this._container;this._fadeAnimated=this.options.fadeAnimation&&B.any3d,H(e,`leaflet-container`+(B.touch?` leaflet-touch`:``)+(B.retina?` leaflet-retina`:``)+(B.ielt9?` leaflet-oldie`:``)+(B.safari?` leaflet-safari`:``)+(this._fadeAnimated?` leaflet-fade-anim`:``));var t=bt(e,`position`);t!==`absolute`&&t!==`relative`&&t!==`fixed`&&t!==`sticky`&&(e.style.position=`relative`),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var e=this._panes={};this._paneRenderers={},this._mapPane=this.createPane(`mapPane`,this._container),Nt(this._mapPane,new O(0,0)),this.createPane(`tilePane`),this.createPane(`overlayPane`),this.createPane(`shadowPane`),this.createPane(`markerPane`),this.createPane(`tooltipPane`),this.createPane(`popupPane`),this.options.markerZoomAnimation||(H(e.markerPane,`leaflet-zoom-hide`),H(e.shadowPane,`leaflet-zoom-hide`))},_resetView:function(e,t,n){Nt(this._mapPane,new O(0,0));var r=!this._loaded;this._loaded=!0,t=this._limitZoom(t),this.fire(`viewprereset`);var i=this._zoom!==t;this._moveStart(i,n)._move(e,t)._moveEnd(i),this.fire(`viewreset`),r&&this.fire(`load`)},_moveStart:function(e,t){return e&&this.fire(`zoomstart`),t||this.fire(`movestart`),this},_move:function(e,t,n,r){t===void 0&&(t=this._zoom);var i=this._zoom!==t;return this._zoom=t,this._lastCenter=e,this._pixelOrigin=this._getNewPixelOrigin(e),r?n&&n.pinch&&this.fire(`zoom`,n):((i||n&&n.pinch)&&this.fire(`zoom`,n),this.fire(`move`,n)),this},_moveEnd:function(e){return e&&this.fire(`zoomend`),this.fire(`moveend`)},_stop:function(){return E(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(e){Nt(this._mapPane,this._getMapPanePos().subtract(e))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw Error(`Set map center and zoom first.`)},_initEvents:function(e){this._targets={},this._targets[o(this._container)]=this;var t=e?W:U;t(this._container,`click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup`,this._handleDOMEvent,this),this.options.trackResize&&t(window,`resize`,this._onResize,this),B.any3d&&this.options.transform3DLimit&&(e?this.off:this.on).call(this,`moveend`,this._onMoveEnd)},_onResize:function(){E(this._resizeRequest),this._resizeRequest=T(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var e=this._getMapPanePos();Math.max(Math.abs(e.x),Math.abs(e.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(e,t){for(var n=[],r,i=t===`mouseout`||t===`mouseover`,a=e.target||e.srcElement,s=!1;a;){if(r=this._targets[o(a)],r&&(t===`click`||t===`preclick`)&&this._draggableMoved(r)){s=!0;break}if(r&&r.listens(t,!0)&&(i&&!ln(a,e)||(n.push(r),i))||a===this._container)break;a=a.parentNode}return!n.length&&!s&&!i&&this.listens(t,!0)&&(n=[this]),n},_isClickDisabled:function(e){for(;e&&e!==this._container;){if(e._leaflet_disable_click)return!0;e=e.parentNode}},_handleDOMEvent:function(e){var t=e.target||e.srcElement;if(!(!this._loaded||t._leaflet_disable_events||e.type===`click`&&this._isClickDisabled(t))){var n=e.type;n===`mousedown`&&Ut(t),this._fireDOMEvent(e,n)}},_mouseEvents:[`click`,`dblclick`,`mouseover`,`mouseout`,`contextmenu`],_fireDOMEvent:function(e,t,r){if(e.type===`click`){var i=n({},e);i.type=`preclick`,this._fireDOMEvent(i,i.type,r)}var a=this._findEventTargets(e,t);if(r){for(var o=[],s=0;s<r.length;s++)r[s].listens(t,!0)&&o.push(r[s]);a=o.concat(a)}if(a.length){t===`contextmenu`&&nn(e);var c=a[0],l={originalEvent:e};if(e.type!==`keypress`&&e.type!==`keydown`&&e.type!==`keyup`){var u=c.getLatLng&&(!c._radius||c._radius<=10);l.containerPoint=u?this.latLngToContainerPoint(c.getLatLng()):this.mouseEventToContainerPoint(e),l.layerPoint=this.containerPointToLayerPoint(l.containerPoint),l.latlng=u?c.getLatLng():this.layerPointToLatLng(l.layerPoint)}for(s=0;s<a.length;s++)if(a[s].fire(t,l,!0),l.originalEvent._stopped||a[s].options.bubblingMouseEvents===!1&&v(this._mouseEvents,t)!==-1)return}},_draggableMoved:function(e){return e=e.dragging&&e.dragging.enabled()?e:this,e.dragging&&e.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var e=0,t=this._handlers.length;e<t;e++)this._handlers[e].disable()},whenReady:function(e,t){return this._loaded?e.call(t||this,{target:this}):this.on(`load`,e,t),this},_getMapPanePos:function(){return Pt(this._mapPane)||new O(0,0)},_moved:function(){var e=this._getMapPanePos();return e&&!e.equals([0,0])},_getTopLeftPoint:function(e,t){return(e&&t!==void 0?this._getNewPixelOrigin(e,t):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(e,t){var n=this.getSize()._divideBy(2);return this.project(e,t)._subtract(n)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(e,t,n){var r=this._getNewPixelOrigin(n,t);return this.project(e,t)._subtract(r)},_latLngBoundsToNewLayerBounds:function(e,t,n){var r=this._getNewPixelOrigin(n,t);return M([this.project(e.getSouthWest(),t)._subtract(r),this.project(e.getNorthWest(),t)._subtract(r),this.project(e.getSouthEast(),t)._subtract(r),this.project(e.getNorthEast(),t)._subtract(r)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(e){return this.latLngToLayerPoint(e).subtract(this._getCenterLayerPoint())},_limitCenter:function(e,t,n){if(!n)return e;var r=this.project(e,t),i=this.getSize().divideBy(2),a=new j(r.subtract(i),r.add(i)),o=this._getBoundsOffset(a,n,t);return Math.abs(o.x)<=1&&Math.abs(o.y)<=1?e:this.unproject(r.add(o),t)},_limitOffset:function(e,t){if(!t)return e;var n=this.getPixelBounds(),r=new j(n.min.add(e),n.max.add(e));return e.add(this._getBoundsOffset(r,t))},_getBoundsOffset:function(e,t,n){var r=M(this.project(t.getNorthEast(),n),this.project(t.getSouthWest(),n)),i=r.min.subtract(e.min),a=r.max.subtract(e.max);return new O(this._rebound(i.x,-a.x),this._rebound(i.y,-a.y))},_rebound:function(e,t){return e+t>0?Math.round(e-t)/2:Math.max(0,Math.ceil(e))-Math.max(0,Math.floor(t))},_limitZoom:function(e){var t=this.getMinZoom(),n=this.getMaxZoom(),r=B.any3d?this.options.zoomSnap:1;return r&&(e=Math.round(e/r)*r),Math.max(t,Math.min(n,e))},_onPanTransitionStep:function(){this.fire(`move`)},_onPanTransitionEnd:function(){Et(this._mapPane,`leaflet-pan-anim`),this.fire(`moveend`)},_tryAnimatedPan:function(e,t){var n=this._getCenterOffset(e)._trunc();return(t&&t.animate)!==!0&&!this.getSize().contains(n)?!1:(this.panBy(n,t),!0)},_createAnimProxy:function(){var e=this._proxy=V(`div`,`leaflet-proxy leaflet-zoom-animated`);this._panes.mapPane.appendChild(e),this.on(`zoomanim`,function(e){var t=gt,n=this._proxy.style[t];Mt(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[t]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on(`load moveend`,this._animMoveEnd,this),this._on(`unload`,this._destroyAnimProxy,this)},_destroyAnimProxy:function(){xt(this._proxy),this.off(`load moveend`,this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var e=this.getCenter(),t=this.getZoom();Mt(this._proxy,this.project(e,t),this.getZoomScale(t,1))},_catchTransitionEnd:function(e){this._animatingZoom&&e.propertyName.indexOf(`transform`)>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName(`leaflet-zoom-animated`).length},_tryAnimatedZoom:function(e,t,n){if(this._animatingZoom)return!0;if(n||={},!this._zoomAnimated||n.animate===!1||this._nothingToAnimate()||Math.abs(t-this._zoom)>this.options.zoomAnimationThreshold)return!1;var r=this.getZoomScale(t),i=this._getCenterOffset(e)._divideBy(1-1/r);return n.animate!==!0&&!this.getSize().contains(i)?!1:(T(function(){this._moveStart(!0,n.noMoveStart||!1)._animateZoom(e,t,!0)},this),!0)},_animateZoom:function(e,t,n,r){this._mapPane&&(n&&(this._animatingZoom=!0,this._animateToCenter=e,this._animateToZoom=t,H(this._mapPane,`leaflet-zoom-anim`)),this.fire(`zoomanim`,{center:e,zoom:t,noUpdate:r}),this._tempFireZoomEvent||=this._zoom!==this._animateToZoom,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(i(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Et(this._mapPane,`leaflet-zoom-anim`),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire(`zoom`),delete this._tempFireZoomEvent,this.fire(`move`),this._moveEnd(!0))}});function fn(e,t){return new G(e,t)}var pn=D.extend({options:{position:`topright`},initialize:function(e){p(this,e)},getPosition:function(){return this.options.position},setPosition:function(e){var t=this._map;return t&&t.removeControl(this),this.options.position=e,t&&t.addControl(this),this},getContainer:function(){return this._container},addTo:function(e){this.remove(),this._map=e;var t=this._container=this.onAdd(e),n=this.getPosition(),r=e._controlCorners[n];return H(t,`leaflet-control`),n.indexOf(`bottom`)===-1?r.appendChild(t):r.insertBefore(t,r.firstChild),this._map.on(`unload`,this.remove,this),this},remove:function(){return this._map?(xt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off(`unload`,this.remove,this),this._map=null,this):this},_refocusOnMap:function(e){this._map&&e&&e.screenX>0&&e.screenY>0&&this._map.getContainer().focus()}}),mn=function(e){return new pn(e)};G.include({addControl:function(e){return e.addTo(this),this},removeControl:function(e){return e.remove(),this},_initControlPos:function(){var e=this._controlCorners={},t=`leaflet-`,n=this._controlContainer=V(`div`,t+`control-container`,this._container);function r(r,i){var a=t+r+` `+t+i;e[r+i]=V(`div`,a,n)}r(`top`,`left`),r(`top`,`right`),r(`bottom`,`left`),r(`bottom`,`right`)},_clearControlPos:function(){for(var e in this._controlCorners)xt(this._controlCorners[e]);xt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var hn=pn.extend({options:{collapsed:!0,position:`topright`,autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(e,t,n,r){return n<r?-1:+(r<n)}},initialize:function(e,t,n){for(var r in p(this,n),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,e)this._addLayer(e[r],r);for(r in t)this._addLayer(t[r],r,!0)},onAdd:function(e){this._initLayout(),this._update(),this._map=e,e.on(`zoomend`,this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.on(`add remove`,this._onLayerChange,this);return this._container},addTo:function(e){return pn.prototype.addTo.call(this,e),this._expandIfNotCollapsed()},onRemove:function(){this._map.off(`zoomend`,this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.off(`add remove`,this._onLayerChange,this)},addBaseLayer:function(e,t){return this._addLayer(e,t),this._map?this._update():this},addOverlay:function(e,t){return this._addLayer(e,t,!0),this._map?this._update():this},removeLayer:function(e){e.off(`add remove`,this._onLayerChange,this);var t=this._getLayer(o(e));return t&&this._layers.splice(this._layers.indexOf(t),1),this._map?this._update():this},expand:function(){H(this._container,`leaflet-control-layers-expanded`),this._section.style.height=null;var e=this._map.getSize().y-(this._container.offsetTop+50);return e<this._section.clientHeight?(H(this._section,`leaflet-control-layers-scrollbar`),this._section.style.height=e+`px`):Et(this._section,`leaflet-control-layers-scrollbar`),this._checkDisabledLayers(),this},collapse:function(){return Et(this._container,`leaflet-control-layers-expanded`),this},_initLayout:function(){var e=`leaflet-control-layers`,t=this._container=V(`div`,e),n=this.options.collapsed;t.setAttribute(`aria-haspopup`,!0),tn(t),en(t);var r=this._section=V(`section`,e+`-list`);n&&(this._map.on(`click`,this.collapse,this),U(t,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var i=this._layersLink=V(`a`,e+`-toggle`,t);i.href=`#`,i.title=`Layers`,i.setAttribute(`role`,`button`),U(i,{keydown:function(e){e.keyCode===13&&this._expandSafely()},click:function(e){nn(e),this._expandSafely()}},this),n||this.expand(),this._baseLayersList=V(`div`,e+`-base`,r),this._separator=V(`div`,e+`-separator`,r),this._overlaysList=V(`div`,e+`-overlays`,r),t.appendChild(r)},_getLayer:function(e){for(var t=0;t<this._layers.length;t++)if(this._layers[t]&&o(this._layers[t].layer)===e)return this._layers[t]},_addLayer:function(e,t,n){this._map&&e.on(`add remove`,this._onLayerChange,this),this._layers.push({layer:e,name:t,overlay:n}),this.options.sortLayers&&this._layers.sort(i(function(e,t){return this.options.sortFunction(e.layer,t.layer,e.name,t.name)},this)),this.options.autoZIndex&&e.setZIndex&&(this._lastZIndex++,e.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;St(this._baseLayersList),St(this._overlaysList),this._layerControlInputs=[];var e,t,n,r,i=0;for(n=0;n<this._layers.length;n++)r=this._layers[n],this._addItem(r),t||=r.overlay,e||=!r.overlay,i+=+!r.overlay;return this.options.hideSingleBase&&(e&&=i>1,this._baseLayersList.style.display=e?``:`none`),this._separator.style.display=t&&e?``:`none`,this},_onLayerChange:function(e){this._handlingClick||this._update();var t=this._getLayer(o(e.target)),n=t.overlay?e.type===`add`?`overlayadd`:`overlayremove`:e.type===`add`?`baselayerchange`:null;n&&this._map.fire(n,t)},_createRadioElement:function(e,t){var n=`<input type="radio" class="leaflet-control-layers-selector" name="`+e+`"`+(t?` checked="checked"`:``)+`/>`,r=document.createElement(`div`);return r.innerHTML=n,r.firstChild},_addItem:function(e){var t=document.createElement(`label`),n=this._map.hasLayer(e.layer),r;e.overlay?(r=document.createElement(`input`),r.type=`checkbox`,r.className=`leaflet-control-layers-selector`,r.defaultChecked=n):r=this._createRadioElement(`leaflet-base-layers_`+o(this),n),this._layerControlInputs.push(r),r.layerId=o(e.layer),U(r,`click`,this._onInputClick,this);var i=document.createElement(`span`);i.innerHTML=` `+e.name;var a=document.createElement(`span`);return t.appendChild(a),a.appendChild(r),a.appendChild(i),(e.overlay?this._overlaysList:this._baseLayersList).appendChild(t),this._checkDisabledLayers(),t},_onInputClick:function(){if(!this._preventClick){var e=this._layerControlInputs,t,n,r=[],i=[];this._handlingClick=!0;for(var a=e.length-1;a>=0;a--)t=e[a],n=this._getLayer(t.layerId).layer,t.checked?r.push(n):t.checked||i.push(n);for(a=0;a<i.length;a++)this._map.hasLayer(i[a])&&this._map.removeLayer(i[a]);for(a=0;a<r.length;a++)this._map.hasLayer(r[a])||this._map.addLayer(r[a]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var e=this._layerControlInputs,t,n,r=this._map.getZoom(),i=e.length-1;i>=0;i--)t=e[i],n=this._getLayer(t.layerId).layer,t.disabled=n.options.minZoom!==void 0&&r<n.options.minZoom||n.options.maxZoom!==void 0&&r>n.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var e=this._section;this._preventClick=!0,U(e,`click`,nn),this.expand();var t=this;setTimeout(function(){W(e,`click`,nn),t._preventClick=!1})}}),gn=function(e,t,n){return new hn(e,t,n)},_n=pn.extend({options:{position:`topleft`,zoomInText:`<span aria-hidden="true">+</span>`,zoomInTitle:`Zoom in`,zoomOutText:`<span aria-hidden="true">&#x2212;</span>`,zoomOutTitle:`Zoom out`},onAdd:function(e){var t=`leaflet-control-zoom`,n=V(`div`,t+` leaflet-bar`),r=this.options;return this._zoomInButton=this._createButton(r.zoomInText,r.zoomInTitle,t+`-in`,n,this._zoomIn),this._zoomOutButton=this._createButton(r.zoomOutText,r.zoomOutTitle,t+`-out`,n,this._zoomOut),this._updateDisabled(),e.on(`zoomend zoomlevelschange`,this._updateDisabled,this),n},onRemove:function(e){e.off(`zoomend zoomlevelschange`,this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(e){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(e.shiftKey?3:1))},_zoomOut:function(e){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(e.shiftKey?3:1))},_createButton:function(e,t,n,r,i){var a=V(`a`,n,r);return a.innerHTML=e,a.href=`#`,a.title=t,a.setAttribute(`role`,`button`),a.setAttribute(`aria-label`,t),tn(a),U(a,`click`,rn),U(a,`click`,i,this),U(a,`click`,this._refocusOnMap,this),a},_updateDisabled:function(){var e=this._map,t=`leaflet-disabled`;Et(this._zoomInButton,t),Et(this._zoomOutButton,t),this._zoomInButton.setAttribute(`aria-disabled`,`false`),this._zoomOutButton.setAttribute(`aria-disabled`,`false`),(this._disabled||e._zoom===e.getMinZoom())&&(H(this._zoomOutButton,t),this._zoomOutButton.setAttribute(`aria-disabled`,`true`)),(this._disabled||e._zoom===e.getMaxZoom())&&(H(this._zoomInButton,t),this._zoomInButton.setAttribute(`aria-disabled`,`true`))}});G.mergeOptions({zoomControl:!0}),G.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new _n,this.addControl(this.zoomControl))});var vn=function(e){return new _n(e)},yn=pn.extend({options:{position:`bottomleft`,maxWidth:100,metric:!0,imperial:!0},onAdd:function(e){var t=`leaflet-control-scale`,n=V(`div`,t),r=this.options;return this._addScales(r,t+`-line`,n),e.on(r.updateWhenIdle?`moveend`:`move`,this._update,this),e.whenReady(this._update,this),n},onRemove:function(e){e.off(this.options.updateWhenIdle?`moveend`:`move`,this._update,this)},_addScales:function(e,t,n){e.metric&&(this._mScale=V(`div`,t,n)),e.imperial&&(this._iScale=V(`div`,t,n))},_update:function(){var e=this._map,t=e.getSize().y/2,n=e.distance(e.containerPointToLatLng([0,t]),e.containerPointToLatLng([this.options.maxWidth,t]));this._updateScales(n)},_updateScales:function(e){this.options.metric&&e&&this._updateMetric(e),this.options.imperial&&e&&this._updateImperial(e)},_updateMetric:function(e){var t=this._getRoundNum(e),n=t<1e3?t+` m`:t/1e3+` km`;this._updateScale(this._mScale,n,t/e)},_updateImperial:function(e){var t=e*3.2808399,n,r,i;t>5280?(n=t/5280,r=this._getRoundNum(n),this._updateScale(this._iScale,r+` mi`,r/n)):(i=this._getRoundNum(t),this._updateScale(this._iScale,i+` ft`,i/t))},_updateScale:function(e,t,n){e.style.width=Math.round(this.options.maxWidth*n)+`px`,e.innerHTML=t},_getRoundNum:function(e){var t=10**((Math.floor(e)+``).length-1),n=e/t;return n=n>=10?10:n>=5?5:n>=3?3:n>=2?2:1,t*n}}),bn=function(e){return new yn(e)},xn=pn.extend({options:{position:`bottomright`,prefix:`<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">`+(B.inlineSvg?`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> `:``)+`Leaflet</a>`},initialize:function(e){p(this,e),this._attributions={}},onAdd:function(e){for(var t in e.attributionControl=this,this._container=V(`div`,`leaflet-control-attribution`),tn(this._container),e._layers)e._layers[t].getAttribution&&this.addAttribution(e._layers[t].getAttribution());return this._update(),e.on(`layeradd`,this._addAttribution,this),this._container},onRemove:function(e){e.off(`layeradd`,this._addAttribution,this)},_addAttribution:function(e){e.layer.getAttribution&&(this.addAttribution(e.layer.getAttribution()),e.layer.once(`remove`,function(){this.removeAttribution(e.layer.getAttribution())},this))},setPrefix:function(e){return this.options.prefix=e,this._update(),this},addAttribution:function(e){return e?(this._attributions[e]||(this._attributions[e]=0),this._attributions[e]++,this._update(),this):this},removeAttribution:function(e){return e&&this._attributions[e]&&(this._attributions[e]--,this._update()),this},_update:function(){if(this._map){var e=[];for(var t in this._attributions)this._attributions[t]&&e.push(t);var n=[];this.options.prefix&&n.push(this.options.prefix),e.length&&n.push(e.join(`, `)),this._container.innerHTML=n.join(` <span aria-hidden="true">|</span> `)}}});G.mergeOptions({attributionControl:!0}),G.addInitHook(function(){this.options.attributionControl&&new xn().addTo(this)}),pn.Layers=hn,pn.Zoom=_n,pn.Scale=yn,pn.Attribution=xn,mn.layers=gn,mn.zoom=vn,mn.scale=bn,mn.attribution=function(e){return new xn(e)};var Sn=D.extend({initialize:function(e){this._map=e},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Sn.addTo=function(e,t){return e.addHandler(t,this),this};var Cn={Events:ne},wn=B.touch?`touchstart mousedown`:`mousedown`,Tn=re.extend({options:{clickTolerance:3},initialize:function(e,t,n,r){p(this,r),this._element=e,this._dragStartTarget=t||e,this._preventOutline=n},enable:function(){this._enabled||=(U(this._dragStartTarget,wn,this._onDown,this),!0)},disable:function(){this._enabled&&(Tn._dragging===this&&this.finishDrag(!0),W(this._dragStartTarget,wn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(e){if(this._enabled&&(this._moved=!1,!Tt(this._element,`leaflet-zoom-anim`))){if(e.touches&&e.touches.length!==1){Tn._dragging===this&&this.finishDrag();return}if(!(Tn._dragging||e.shiftKey||e.which!==1&&e.button!==1&&!e.touches)&&(Tn._dragging=this,this._preventOutline&&Ut(this._element),zt(),Ft(),!this._moving)){this.fire(`down`);var t=e.touches?e.touches[0]:e,n=Gt(this._element);this._startPoint=new O(t.clientX,t.clientY),this._startPos=Pt(this._element),this._parentScale=Kt(n);var r=e.type===`mousedown`;U(document,r?`mousemove`:`touchmove`,this._onMove,this),U(document,r?`mouseup`:`touchend touchcancel`,this._onUp,this)}}},_onMove:function(e){if(this._enabled){if(e.touches&&e.touches.length>1){this._moved=!0;return}var t=e.touches&&e.touches.length===1?e.touches[0]:e,n=new O(t.clientX,t.clientY)._subtract(this._startPoint);!n.x&&!n.y||Math.abs(n.x)+Math.abs(n.y)<this.options.clickTolerance||(n.x/=this._parentScale.x,n.y/=this._parentScale.y,nn(e),this._moved||(this.fire(`dragstart`),this._moved=!0,H(document.body,`leaflet-dragging`),this._lastTarget=e.target||e.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),H(this._lastTarget,`leaflet-drag-target`)),this._newPos=this._startPos.add(n),this._moving=!0,this._lastEvent=e,this._updatePosition())}},_updatePosition:function(){var e={originalEvent:this._lastEvent};this.fire(`predrag`,e),Nt(this._element,this._newPos),this.fire(`drag`,e)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(e){Et(document.body,`leaflet-dragging`),this._lastTarget&&=(Et(this._lastTarget,`leaflet-drag-target`),null),W(document,`mousemove touchmove`,this._onMove,this),W(document,`mouseup touchend touchcancel`,this._onUp,this),Bt(),It();var t=this._moved&&this._moving;this._moving=!1,Tn._dragging=!1,t&&this.fire(`dragend`,{noInertia:e,distance:this._newPos.distanceTo(this._startPos)})}});function En(e,t,n){var r,i=[1,4,2,8],a,o,s,c,l,u,d,f;for(a=0,u=e.length;a<u;a++)e[a]._code=Rn(e[a],t);for(s=0;s<4;s++){for(d=i[s],r=[],a=0,u=e.length,o=u-1;a<u;o=a++)c=e[a],l=e[o],c._code&d?l._code&d||(f=Ln(l,c,d,t,n),f._code=Rn(f,t),r.push(f)):(l._code&d&&(f=Ln(l,c,d,t,n),f._code=Rn(f,t),r.push(f)),r.push(c));e=r}return e}function Dn(e,t){var n,r,i,a,o,s,c,l,u;if(!e||e.length===0)throw Error(`latlngs not passed`);Vn(e)||(console.warn(`latlngs are not flat! Only the first ring will be used`),e=e[0]);var d=F([0,0]),f=ie(e);f.getNorthWest().distanceTo(f.getSouthWest())*f.getNorthEast().distanceTo(f.getNorthWest())<1700&&(d=On(e));var p=e.length,m=[];for(n=0;n<p;n++){var h=F(e[n]);m.push(t.project(F([h.lat-d.lat,h.lng-d.lng])))}for(s=c=l=0,n=0,r=p-1;n<p;r=n++)i=m[n],a=m[r],o=i.y*a.x-a.y*i.x,c+=(i.x+a.x)*o,l+=(i.y+a.y)*o,s+=o*3;u=s===0?m[0]:[c/s,l/s];var g=t.unproject(A(u));return F([g.lat+d.lat,g.lng+d.lng])}function On(e){for(var t=0,n=0,r=0,i=0;i<e.length;i++){var a=F(e[i]);t+=a.lat,n+=a.lng,r++}return F([t/r,n/r])}var kn={__proto__:null,clipPolygon:En,polygonCenter:Dn,centroid:On};function An(e,t){if(!t||!e.length)return e.slice();var n=t*t;return e=Pn(e,n),e=Nn(e,n),e}function jn(e,t,n){return Math.sqrt(Bn(e,t,n,!0))}function Mn(e,t,n){return Bn(e,t,n)}function Nn(e,t){var n=e.length,r=new(typeof Uint8Array<`u`?Uint8Array:Array)(n);r[0]=r[n-1]=1,K(e,r,t,0,n-1);var i,a=[];for(i=0;i<n;i++)r[i]&&a.push(e[i]);return a}function K(e,t,n,r,i){var a=0,o,s,c;for(s=r+1;s<=i-1;s++)c=Bn(e[s],e[r],e[i],!0),c>a&&(o=s,a=c);a>n&&(t[o]=1,K(e,t,n,r,o),K(e,t,n,o,i))}function Pn(e,t){for(var n=[e[0]],r=1,i=0,a=e.length;r<a;r++)zn(e[r],e[i])>t&&(n.push(e[r]),i=r);return i<a-1&&n.push(e[a-1]),n}var Fn;function In(e,t,n,r,i){var a=r?Fn:Rn(e,n),o=Rn(t,n),s,c,l;for(Fn=o;;){if(!(a|o))return[e,t];if(a&o)return!1;s=a||o,c=Ln(e,t,s,n,i),l=Rn(c,n),s===a?(e=c,a=l):(t=c,o=l)}}function Ln(e,t,n,r,i){var a=t.x-e.x,o=t.y-e.y,s=r.min,c=r.max,l,u;return n&8?(l=e.x+a*(c.y-e.y)/o,u=c.y):n&4?(l=e.x+a*(s.y-e.y)/o,u=s.y):n&2?(l=c.x,u=e.y+o*(c.x-e.x)/a):n&1&&(l=s.x,u=e.y+o*(s.x-e.x)/a),new O(l,u,i)}function Rn(e,t){var n=0;return e.x<t.min.x?n|=1:e.x>t.max.x&&(n|=2),e.y<t.min.y?n|=4:e.y>t.max.y&&(n|=8),n}function zn(e,t){var n=t.x-e.x,r=t.y-e.y;return n*n+r*r}function Bn(e,t,n,r){var i=t.x,a=t.y,o=n.x-i,s=n.y-a,c=o*o+s*s,l;return c>0&&(l=((e.x-i)*o+(e.y-a)*s)/c,l>1?(i=n.x,a=n.y):l>0&&(i+=o*l,a+=s*l)),o=e.x-i,s=e.y-a,r?o*o+s*s:new O(i,a)}function Vn(e){return!_(e[0])||typeof e[0][0]!=`object`&&e[0][0]!==void 0}function Hn(e){return console.warn(`Deprecated use of _flat, please use L.LineUtil.isFlat instead.`),Vn(e)}function Un(e,t){var n,r,i,a,o,s,c,l;if(!e||e.length===0)throw Error(`latlngs not passed`);Vn(e)||(console.warn(`latlngs are not flat! Only the first ring will be used`),e=e[0]);var u=F([0,0]),d=ie(e);d.getNorthWest().distanceTo(d.getSouthWest())*d.getNorthEast().distanceTo(d.getNorthWest())<1700&&(u=On(e));var f=e.length,p=[];for(n=0;n<f;n++){var m=F(e[n]);p.push(t.project(F([m.lat-u.lat,m.lng-u.lng])))}for(n=0,r=0;n<f-1;n++)r+=p[n].distanceTo(p[n+1])/2;if(r===0)l=p[0];else for(n=0,a=0;n<f-1;n++)if(o=p[n],s=p[n+1],i=o.distanceTo(s),a+=i,a>r){c=(a-r)/i,l=[s.x-c*(s.x-o.x),s.y-c*(s.y-o.y)];break}var h=t.unproject(A(l));return F([h.lat+u.lat,h.lng+u.lng])}var Wn={__proto__:null,simplify:An,pointToSegmentDistance:jn,closestPointOnSegment:Mn,clipSegment:In,_getEdgeIntersection:Ln,_getBitCode:Rn,_sqClosestPointOnSegment:Bn,isFlat:Vn,_flat:Hn,polylineCenter:Un},Gn={project:function(e){return new O(e.lng,e.lat)},unproject:function(e){return new P(e.y,e.x)},bounds:new j([-180,-90],[180,90])},Kn={R:6378137,R_MINOR:6356752.314245179,bounds:new j([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(e){var t=Math.PI/180,n=this.R,r=e.lat*t,i=this.R_MINOR/n,a=Math.sqrt(1-i*i),o=a*Math.sin(r),s=Math.tan(Math.PI/4-r/2)/((1-o)/(1+o))**(a/2);return r=-n*Math.log(Math.max(s,1e-10)),new O(e.lng*t*n,r)},unproject:function(e){for(var t=180/Math.PI,n=this.R,r=this.R_MINOR/n,i=Math.sqrt(1-r*r),a=Math.exp(-e.y/n),o=Math.PI/2-2*Math.atan(a),s=0,c=.1,l;s<15&&Math.abs(c)>1e-7;s++)l=i*Math.sin(o),l=((1-l)/(1+l))**(i/2),c=Math.PI/2-2*Math.atan(a*l)-o,o+=c;return new P(o*t,e.x*t/n)}},qn={__proto__:null,LonLat:Gn,Mercator:Kn,SphericalMercator:se},Jn=n({},oe,{code:`EPSG:3395`,projection:Kn,transformation:function(){var e=.5/(Math.PI*Kn.R);return R(e,.5,-e,.5)}()}),Yn=n({},oe,{code:`EPSG:4326`,projection:Gn,transformation:R(1/180,1,-1/180,.5)}),Xn=n({},ae,{projection:Gn,transformation:R(1,0,-1,0),scale:function(e){return 2**e},zoom:function(e){return Math.log(e)/Math.LN2},distance:function(e,t){var n=t.lng-e.lng,r=t.lat-e.lat;return Math.sqrt(n*n+r*r)},infinite:!0});ae.Earth=oe,ae.EPSG3395=Jn,ae.EPSG3857=le,ae.EPSG900913=ue,ae.EPSG4326=Yn,ae.Simple=Xn;var Zn=re.extend({options:{pane:`overlayPane`,attribution:null,bubblingMouseEvents:!0},addTo:function(e){return e.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(e){return e&&e.removeLayer(this),this},getPane:function(e){return this._map.getPane(e?this.options[e]||e:this.options.pane)},addInteractiveTarget:function(e){return this._map._targets[o(e)]=this,this},removeInteractiveTarget:function(e){return delete this._map._targets[o(e)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(e){var t=e.target;if(t.hasLayer(this)){if(this._map=t,this._zoomAnimated=t._zoomAnimated,this.getEvents){var n=this.getEvents();t.on(n,this),this.once(`remove`,function(){t.off(n,this)},this)}this.onAdd(t),this.fire(`add`),t.fire(`layeradd`,{layer:this})}}});G.include({addLayer:function(e){if(!e._layerAdd)throw Error(`The provided object is not a Layer.`);var t=o(e);return this._layers[t]?this:(this._layers[t]=e,e._mapToAdd=this,e.beforeAdd&&e.beforeAdd(this),this.whenReady(e._layerAdd,e),this)},removeLayer:function(e){var t=o(e);return this._layers[t]?(this._loaded&&e.onRemove(this),delete this._layers[t],this._loaded&&(this.fire(`layerremove`,{layer:e}),e.fire(`remove`)),e._map=e._mapToAdd=null,this):this},hasLayer:function(e){return o(e)in this._layers},eachLayer:function(e,t){for(var n in this._layers)e.call(t,this._layers[n]);return this},_addLayers:function(e){e=e?_(e)?e:[e]:[];for(var t=0,n=e.length;t<n;t++)this.addLayer(e[t])},_addZoomLimit:function(e){(!isNaN(e.options.maxZoom)||!isNaN(e.options.minZoom))&&(this._zoomBoundLayers[o(e)]=e,this._updateZoomLevels())},_removeZoomLimit:function(e){var t=o(e);this._zoomBoundLayers[t]&&(delete this._zoomBoundLayers[t],this._updateZoomLevels())},_updateZoomLevels:function(){var e=1/0,t=-1/0,n=this._getZoomSpan();for(var r in this._zoomBoundLayers){var i=this._zoomBoundLayers[r].options;e=i.minZoom===void 0?e:Math.min(e,i.minZoom),t=i.maxZoom===void 0?t:Math.max(t,i.maxZoom)}this._layersMaxZoom=t===-1/0?void 0:t,this._layersMinZoom=e===1/0?void 0:e,n!==this._getZoomSpan()&&this.fire(`zoomlevelschange`),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Qn=Zn.extend({initialize:function(e,t){p(this,t),this._layers={};var n,r;if(e)for(n=0,r=e.length;n<r;n++)this.addLayer(e[n])},addLayer:function(e){var t=this.getLayerId(e);return this._layers[t]=e,this._map&&this._map.addLayer(e),this},removeLayer:function(e){var t=e in this._layers?e:this.getLayerId(e);return this._map&&this._layers[t]&&this._map.removeLayer(this._layers[t]),delete this._layers[t],this},hasLayer:function(e){return(typeof e==`number`?e:this.getLayerId(e))in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(e){var t=Array.prototype.slice.call(arguments,1),n,r;for(n in this._layers)r=this._layers[n],r[e]&&r[e].apply(r,t);return this},onAdd:function(e){this.eachLayer(e.addLayer,e)},onRemove:function(e){this.eachLayer(e.removeLayer,e)},eachLayer:function(e,t){for(var n in this._layers)e.call(t,this._layers[n]);return this},getLayer:function(e){return this._layers[e]},getLayers:function(){var e=[];return this.eachLayer(e.push,e),e},setZIndex:function(e){return this.invoke(`setZIndex`,e)},getLayerId:function(e){return o(e)}}),$n=function(e,t){return new Qn(e,t)},er=Qn.extend({addLayer:function(e){return this.hasLayer(e)?this:(e.addEventParent(this),Qn.prototype.addLayer.call(this,e),this.fire(`layeradd`,{layer:e}))},removeLayer:function(e){return this.hasLayer(e)?(e in this._layers&&(e=this._layers[e]),e.removeEventParent(this),Qn.prototype.removeLayer.call(this,e),this.fire(`layerremove`,{layer:e})):this},setStyle:function(e){return this.invoke(`setStyle`,e)},bringToFront:function(){return this.invoke(`bringToFront`)},bringToBack:function(){return this.invoke(`bringToBack`)},getBounds:function(){var e=new N;for(var t in this._layers){var n=this._layers[t];e.extend(n.getBounds?n.getBounds():n.getLatLng())}return e}}),tr=function(e,t){return new er(e,t)},nr=D.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(e){p(this,e)},createIcon:function(e){return this._createIcon(`icon`,e)},createShadow:function(e){return this._createIcon(`shadow`,e)},_createIcon:function(e,t){var n=this._getIconUrl(e);if(!n){if(e===`icon`)throw Error(`iconUrl not set in Icon options (see the docs).`);return null}var r=this._createImg(n,t&&t.tagName===`IMG`?t:null);return this._setIconStyles(r,e),(this.options.crossOrigin||this.options.crossOrigin===``)&&(r.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),r},_setIconStyles:function(e,t){var n=this.options,r=n[t+`Size`];typeof r==`number`&&(r=[r,r]);var i=A(r),a=A(t===`shadow`&&n.shadowAnchor||n.iconAnchor||i&&i.divideBy(2,!0));e.className=`leaflet-marker-`+t+` `+(n.className||``),a&&(e.style.marginLeft=-a.x+`px`,e.style.marginTop=-a.y+`px`),i&&(e.style.width=i.x+`px`,e.style.height=i.y+`px`)},_createImg:function(e,t){return t||=document.createElement(`img`),t.src=e,t},_getIconUrl:function(e){return B.retina&&this.options[e+`RetinaUrl`]||this.options[e+`Url`]}});function rr(e){return new nr(e)}var ir=nr.extend({options:{iconUrl:`marker-icon.png`,iconRetinaUrl:`marker-icon-2x.png`,shadowUrl:`marker-shadow.png`,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(e){return typeof ir.imagePath!=`string`&&(ir.imagePath=this._detectIconPath()),(this.options.imagePath||ir.imagePath)+nr.prototype._getIconUrl.call(this,e)},_stripUrl:function(e){var t=function(e,t,n){var r=t.exec(e);return r&&r[n]};return e=t(e,/^url\((['"])?(.+)\1\)$/,2),e&&t(e,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var e=V(`div`,`leaflet-default-icon-path`,document.body),t=bt(e,`background-image`)||bt(e,`backgroundImage`);if(document.body.removeChild(e),t=this._stripUrl(t),t)return t;var n=document.querySelector(`link[href$="leaflet.css"]`);return n?n.href.substring(0,n.href.length-11-1):``}}),ar=Sn.extend({initialize:function(e){this._marker=e},addHooks:function(){var e=this._marker._icon;this._draggable||=new Tn(e,e,!0),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),H(e,`leaflet-marker-draggable`)},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Et(this._marker._icon,`leaflet-marker-draggable`)},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(e){var t=this._marker,n=t._map,r=this._marker.options.autoPanSpeed,i=this._marker.options.autoPanPadding,a=Pt(t._icon),o=n.getPixelBounds(),s=n.getPixelOrigin(),c=M(o.min._subtract(s).add(i),o.max._subtract(s).subtract(i));if(!c.contains(a)){var l=A((Math.max(c.max.x,a.x)-c.max.x)/(o.max.x-c.max.x)-(Math.min(c.min.x,a.x)-c.min.x)/(o.min.x-c.min.x),(Math.max(c.max.y,a.y)-c.max.y)/(o.max.y-c.max.y)-(Math.min(c.min.y,a.y)-c.min.y)/(o.min.y-c.min.y)).multiplyBy(r);n.panBy(l,{animate:!1}),this._draggable._newPos._add(l),this._draggable._startPos._add(l),Nt(t._icon,this._draggable._newPos),this._onDrag(e),this._panRequest=T(this._adjustPan.bind(this,e))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire(`movestart`).fire(`dragstart`)},_onPreDrag:function(e){this._marker.options.autoPan&&(E(this._panRequest),this._panRequest=T(this._adjustPan.bind(this,e)))},_onDrag:function(e){var t=this._marker,n=t._shadow,r=Pt(t._icon),i=t._map.layerPointToLatLng(r);n&&Nt(n,r),t._latlng=i,e.latlng=i,e.oldLatLng=this._oldLatLng,t.fire(`move`,e).fire(`drag`,e)},_onDragEnd:function(e){E(this._panRequest),delete this._oldLatLng,this._marker.fire(`moveend`).fire(`dragend`,e)}}),or=Zn.extend({options:{icon:new ir,interactive:!0,keyboard:!0,title:``,alt:`Marker`,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:`markerPane`,shadowPane:`shadowPane`,bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(e,t){p(this,t),this._latlng=F(e)},onAdd:function(e){this._zoomAnimated=this._zoomAnimated&&e.options.markerZoomAnimation,this._zoomAnimated&&e.on(`zoomanim`,this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(e){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&e.off(`zoomanim`,this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(e){var t=this._latlng;return this._latlng=F(e),this.update(),this.fire(`move`,{oldLatLng:t,latlng:this._latlng})},setZIndexOffset:function(e){return this.options.zIndexOffset=e,this.update()},getIcon:function(){return this.options.icon},setIcon:function(e){return this.options.icon=e,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var e=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(e)}return this},_initIcon:function(){var e=this.options,t=`leaflet-zoom-`+(this._zoomAnimated?`animated`:`hide`),n=e.icon.createIcon(this._icon),r=!1;n!==this._icon&&(this._icon&&this._removeIcon(),r=!0,e.title&&(n.title=e.title),n.tagName===`IMG`&&(n.alt=e.alt||``)),H(n,t),e.keyboard&&(n.tabIndex=`0`,n.setAttribute(`role`,`button`)),this._icon=n,e.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&U(n,`focus`,this._panOnFocus,this);var i=e.icon.createShadow(this._shadow),a=!1;i!==this._shadow&&(this._removeShadow(),a=!0),i&&(H(i,t),i.alt=``),this._shadow=i,e.opacity<1&&this._updateOpacity(),r&&this.getPane().appendChild(this._icon),this._initInteraction(),i&&a&&this.getPane(e.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&W(this._icon,`focus`,this._panOnFocus,this),xt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&xt(this._shadow),this._shadow=null},_setPos:function(e){this._icon&&Nt(this._icon,e),this._shadow&&Nt(this._shadow,e),this._zIndex=e.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(e){this._icon&&(this._icon.style.zIndex=this._zIndex+e)},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center).round();this._setPos(t)},_initInteraction:function(){if(this.options.interactive&&(H(this._icon,`leaflet-interactive`),this.addInteractiveTarget(this._icon),ar)){var e=this.options.draggable;this.dragging&&(e=this.dragging.enabled(),this.dragging.disable()),this.dragging=new ar(this),e&&this.dragging.enable()}},setOpacity:function(e){return this.options.opacity=e,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var e=this.options.opacity;this._icon&&kt(this._icon,e),this._shadow&&kt(this._shadow,e)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var e=this._map;if(e){var t=this.options.icon.options,n=t.iconSize?A(t.iconSize):A(0,0),r=t.iconAnchor?A(t.iconAnchor):A(0,0);e.panInside(this._latlng,{paddingTopLeft:r,paddingBottomRight:n.subtract(r)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function sr(e,t){return new or(e,t)}var cr=Zn.extend({options:{stroke:!0,color:`#3388ff`,weight:3,opacity:1,lineCap:`round`,lineJoin:`round`,dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:`evenodd`,interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(e){this._renderer=e.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(e){return p(this,e),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&e&&Object.prototype.hasOwnProperty.call(e,`weight`)&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),lr=cr.extend({options:{fill:!0,radius:10},initialize:function(e,t){p(this,t),this._latlng=F(e),this._radius=this.options.radius},setLatLng:function(e){var t=this._latlng;return this._latlng=F(e),this.redraw(),this.fire(`move`,{oldLatLng:t,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(e){return this.options.radius=this._radius=e,this.redraw()},getRadius:function(){return this._radius},setStyle:function(e){var t=e&&e.radius||this._radius;return cr.prototype.setStyle.call(this,e),this.setRadius(t),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var e=this._radius,t=this._radiusY||e,n=this._clickTolerance(),r=[e+n,t+n];this._pxBounds=new j(this._point.subtract(r),this._point.add(r))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(e){return e.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function ur(e,t){return new lr(e,t)}var dr=lr.extend({initialize:function(e,t,r){if(typeof t==`number`&&(t=n({},r,{radius:t})),p(this,t),this._latlng=F(e),isNaN(this.options.radius))throw Error(`Circle radius cannot be NaN`);this._mRadius=this.options.radius},setRadius:function(e){return this._mRadius=e,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var e=[this._radius,this._radiusY||this._radius];return new N(this._map.layerPointToLatLng(this._point.subtract(e)),this._map.layerPointToLatLng(this._point.add(e)))},setStyle:cr.prototype.setStyle,_project:function(){var e=this._latlng.lng,t=this._latlng.lat,n=this._map,r=n.options.crs;if(r.distance===oe.distance){var i=Math.PI/180,a=this._mRadius/oe.R/i,o=n.project([t+a,e]),s=n.project([t-a,e]),c=o.add(s).divideBy(2),l=n.unproject(c).lat,u=Math.acos((Math.cos(a*i)-Math.sin(t*i)*Math.sin(l*i))/(Math.cos(t*i)*Math.cos(l*i)))/i;(isNaN(u)||u===0)&&(u=a/Math.cos(Math.PI/180*t)),this._point=c.subtract(n.getPixelOrigin()),this._radius=isNaN(u)?0:c.x-n.project([l,e-u]).x,this._radiusY=c.y-o.y}else{var d=r.unproject(r.project(this._latlng).subtract([this._mRadius,0]));this._point=n.latLngToLayerPoint(this._latlng),this._radius=this._point.x-n.latLngToLayerPoint(d).x}this._updateBounds()}});function fr(e,t,n){return new dr(e,t,n)}var pr=cr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(e,t){p(this,t),this._setLatLngs(e)},getLatLngs:function(){return this._latlngs},setLatLngs:function(e){return this._setLatLngs(e),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(e){for(var t=1/0,n=null,r=Bn,i,a,o=0,s=this._parts.length;o<s;o++)for(var c=this._parts[o],l=1,u=c.length;l<u;l++){i=c[l-1],a=c[l];var d=r(e,i,a,!0);d<t&&(t=d,n=r(e,i,a))}return n&&(n.distance=Math.sqrt(t)),n},getCenter:function(){if(!this._map)throw Error(`Must add layer to map before using getCenter()`);return Un(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(e,t){return t||=this._defaultShape(),e=F(e),t.push(e),this._bounds.extend(e),this.redraw()},_setLatLngs:function(e){this._bounds=new N,this._latlngs=this._convertLatLngs(e)},_defaultShape:function(){return Vn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(e){for(var t=[],n=Vn(e),r=0,i=e.length;r<i;r++)n?(t[r]=F(e[r]),this._bounds.extend(t[r])):t[r]=this._convertLatLngs(e[r]);return t},_project:function(){var e=new j;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,e),this._bounds.isValid()&&e.isValid()&&(this._rawPxBounds=e,this._updateBounds())},_updateBounds:function(){var e=this._clickTolerance(),t=new O(e,e);this._rawPxBounds&&(this._pxBounds=new j([this._rawPxBounds.min.subtract(t),this._rawPxBounds.max.add(t)]))},_projectLatlngs:function(e,t,n){var r=e[0]instanceof P,i=e.length,a,o;if(r){for(o=[],a=0;a<i;a++)o[a]=this._map.latLngToLayerPoint(e[a]),n.extend(o[a]);t.push(o)}else for(a=0;a<i;a++)this._projectLatlngs(e[a],t,n)},_clipPoints:function(){var e=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(e))){if(this.options.noClip){this._parts=this._rings;return}var t=this._parts,n,r,i,a,o,s,c;for(n=0,i=0,a=this._rings.length;n<a;n++)for(c=this._rings[n],r=0,o=c.length;r<o-1;r++)s=In(c[r],c[r+1],e,r,!0),s&&(t[i]=t[i]||[],t[i].push(s[0]),(s[1]!==c[r+1]||r===o-2)&&(t[i].push(s[1]),i++))}},_simplifyPoints:function(){for(var e=this._parts,t=this.options.smoothFactor,n=0,r=e.length;n<r;n++)e[n]=An(e[n],t)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(e,t){var n,r,i,a,o,s,c=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(e))return!1;for(n=0,a=this._parts.length;n<a;n++)for(s=this._parts[n],r=0,o=s.length,i=o-1;r<o;i=r++)if(!(!t&&r===0)&&jn(e,s[i],s[r])<=c)return!0;return!1}});function mr(e,t){return new pr(e,t)}pr._flat=Hn;var hr=pr.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw Error(`Must add layer to map before using getCenter()`);return Dn(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(e){var t=pr.prototype._convertLatLngs.call(this,e),n=t.length;return n>=2&&t[0]instanceof P&&t[0].equals(t[n-1])&&t.pop(),t},_setLatLngs:function(e){pr.prototype._setLatLngs.call(this,e),Vn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Vn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var e=this._renderer._bounds,t=this.options.weight,n=new O(t,t);if(e=new j(e.min.subtract(n),e.max.add(n)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(e))){if(this.options.noClip){this._parts=this._rings;return}for(var r=0,i=this._rings.length,a;r<i;r++)a=En(this._rings[r],e,!0),a.length&&this._parts.push(a)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(e){var t=!1,n,r,i,a,o,s,c,l;if(!this._pxBounds||!this._pxBounds.contains(e))return!1;for(a=0,c=this._parts.length;a<c;a++)for(n=this._parts[a],o=0,l=n.length,s=l-1;o<l;s=o++)r=n[o],i=n[s],r.y>e.y!=i.y>e.y&&e.x<(i.x-r.x)*(e.y-r.y)/(i.y-r.y)+r.x&&(t=!t);return t||pr.prototype._containsPoint.call(this,e,!0)}});function gr(e,t){return new hr(e,t)}var _r=er.extend({initialize:function(e,t){p(this,t),this._layers={},e&&this.addData(e)},addData:function(e){var t=_(e)?e:e.features,n,r,i;if(t){for(n=0,r=t.length;n<r;n++)i=t[n],(i.geometries||i.geometry||i.features||i.coordinates)&&this.addData(i);return this}var a=this.options;if(a.filter&&!a.filter(e))return this;var o=vr(e,a);return o?(o.feature=wr(e),o.defaultOptions=o.options,this.resetStyle(o),a.onEachFeature&&a.onEachFeature(e,o),this.addLayer(o)):this},resetStyle:function(e){return e===void 0?this.eachLayer(this.resetStyle,this):(e.options=n({},e.defaultOptions),this._setLayerStyle(e,this.options.style),this)},setStyle:function(e){return this.eachLayer(function(t){this._setLayerStyle(t,e)},this)},_setLayerStyle:function(e,t){e.setStyle&&(typeof t==`function`&&(t=t(e.feature)),e.setStyle(t))}});function vr(e,t){var n=e.type===`Feature`?e.geometry:e,r=n?n.coordinates:null,i=[],a=t&&t.pointToLayer,o=t&&t.coordsToLatLng||br,s,c,l,u;if(!r&&!n)return null;switch(n.type){case`Point`:return s=o(r),yr(a,e,s,t);case`MultiPoint`:for(l=0,u=r.length;l<u;l++)s=o(r[l]),i.push(yr(a,e,s,t));return new er(i);case`LineString`:case`MultiLineString`:return c=xr(r,n.type===`LineString`?0:1,o),new pr(c,t);case`Polygon`:case`MultiPolygon`:return c=xr(r,n.type===`Polygon`?1:2,o),new hr(c,t);case`GeometryCollection`:for(l=0,u=n.geometries.length;l<u;l++){var d=vr({geometry:n.geometries[l],type:`Feature`,properties:e.properties},t);d&&i.push(d)}return new er(i);case`FeatureCollection`:for(l=0,u=n.features.length;l<u;l++){var f=vr(n.features[l],t);f&&i.push(f)}return new er(i);default:throw Error(`Invalid GeoJSON object.`)}}function yr(e,t,n,r){return e?e(t,n):new or(n,r&&r.markersInheritOptions&&r)}function br(e){return new P(e[1],e[0],e[2])}function xr(e,t,n){for(var r=[],i=0,a=e.length,o;i<a;i++)o=t?xr(e[i],t-1,n):(n||br)(e[i]),r.push(o);return r}function q(e,t){return e=F(e),e.alt===void 0?[u(e.lng,t),u(e.lat,t)]:[u(e.lng,t),u(e.lat,t),u(e.alt,t)]}function Sr(e,t,n,r){for(var i=[],a=0,o=e.length;a<o;a++)i.push(t?Sr(e[a],Vn(e[a])?0:t-1,n,r):q(e[a],r));return!t&&n&&i.length>0&&i.push(i[0].slice()),i}function Cr(e,t){return e.feature?n({},e.feature,{geometry:t}):wr(t)}function wr(e){return e.type===`Feature`||e.type===`FeatureCollection`?e:{type:`Feature`,properties:{},geometry:e}}var Tr={toGeoJSON:function(e){return Cr(this,{type:`Point`,coordinates:q(this.getLatLng(),e)})}};or.include(Tr),dr.include(Tr),lr.include(Tr),pr.include({toGeoJSON:function(e){var t=!Vn(this._latlngs),n=Sr(this._latlngs,+!!t,!1,e);return Cr(this,{type:(t?`Multi`:``)+`LineString`,coordinates:n})}}),hr.include({toGeoJSON:function(e){var t=!Vn(this._latlngs),n=t&&!Vn(this._latlngs[0]),r=Sr(this._latlngs,n?2:+!!t,!0,e);return t||(r=[r]),Cr(this,{type:(n?`Multi`:``)+`Polygon`,coordinates:r})}}),Qn.include({toMultiPoint:function(e){var t=[];return this.eachLayer(function(n){t.push(n.toGeoJSON(e).geometry.coordinates)}),Cr(this,{type:`MultiPoint`,coordinates:t})},toGeoJSON:function(e){var t=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(t===`MultiPoint`)return this.toMultiPoint(e);var n=t===`GeometryCollection`,r=[];return this.eachLayer(function(t){if(t.toGeoJSON){var i=t.toGeoJSON(e);if(n)r.push(i.geometry);else{var a=wr(i);a.type===`FeatureCollection`?r.push.apply(r,a.features):r.push(a)}}}),n?Cr(this,{geometries:r,type:`GeometryCollection`}):{type:`FeatureCollection`,features:r}}});function Er(e,t){return new _r(e,t)}var Dr=Er,Or=Zn.extend({options:{opacity:1,alt:``,interactive:!1,crossOrigin:!1,errorOverlayUrl:``,zIndex:1,className:``},initialize:function(e,t,n){this._url=e,this._bounds=ie(t),p(this,n)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(H(this._image,`leaflet-interactive`),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){xt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(e){return this.options.opacity=e,this._image&&this._updateOpacity(),this},setStyle:function(e){return e.opacity&&this.setOpacity(e.opacity),this},bringToFront:function(){return this._map&&Ct(this._image),this},bringToBack:function(){return this._map&&wt(this._image),this},setUrl:function(e){return this._url=e,this._image&&(this._image.src=e),this},setBounds:function(e){return this._bounds=ie(e),this._map&&this._reset(),this},getEvents:function(){var e={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var e=this._url.tagName===`IMG`,t=this._image=e?this._url:V(`img`);if(H(t,`leaflet-image-layer`),this._zoomAnimated&&H(t,`leaflet-zoom-animated`),this.options.className&&H(t,this.options.className),t.onselectstart=l,t.onmousemove=l,t.onload=i(this.fire,this,`load`),t.onerror=i(this._overlayOnError,this,`error`),(this.options.crossOrigin||this.options.crossOrigin===``)&&(t.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),e){this._url=t.src;return}t.src=this._url,t.alt=this.options.alt},_animateZoom:function(e){var t=this._map.getZoomScale(e.zoom),n=this._map._latLngBoundsToNewLayerBounds(this._bounds,e.zoom,e.center).min;Mt(this._image,n,t)},_reset:function(){var e=this._image,t=new j(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),n=t.getSize();Nt(e,t.min),e.style.width=n.x+`px`,e.style.height=n.y+`px`},_updateOpacity:function(){kt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire(`error`);var e=this.options.errorOverlayUrl;e&&this._url!==e&&(this._url=e,this._image.src=e)},getCenter:function(){return this._bounds.getCenter()}}),kr=function(e,t,n){return new Or(e,t,n)},Ar=Or.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var e=this._url.tagName===`VIDEO`,t=this._image=e?this._url:V(`video`);if(H(t,`leaflet-image-layer`),this._zoomAnimated&&H(t,`leaflet-zoom-animated`),this.options.className&&H(t,this.options.className),t.onselectstart=l,t.onmousemove=l,t.onloadeddata=i(this.fire,this,`load`),e){for(var n=t.getElementsByTagName(`source`),r=[],a=0;a<n.length;a++)r.push(n[a].src);this._url=n.length>0?r:[t.src];return}_(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(t.style,`objectFit`)&&(t.style.objectFit=`fill`),t.autoplay=!!this.options.autoplay,t.loop=!!this.options.loop,t.muted=!!this.options.muted,t.playsInline=!!this.options.playsInline;for(var o=0;o<this._url.length;o++){var s=V(`source`);s.src=this._url[o],t.appendChild(s)}}});function jr(e,t,n){return new Ar(e,t,n)}var Mr=Or.extend({_initImage:function(){var e=this._image=this._url;H(e,`leaflet-image-layer`),this._zoomAnimated&&H(e,`leaflet-zoom-animated`),this.options.className&&H(e,this.options.className),e.onselectstart=l,e.onmousemove=l}});function Nr(e,t,n){return new Mr(e,t,n)}var Pr=Zn.extend({options:{interactive:!1,offset:[0,0],className:``,pane:void 0,content:``},initialize:function(e,t){e&&(e instanceof P||_(e))?(this._latlng=F(e),p(this,t)):(p(this,e),this._source=t),this.options.content&&(this._content=this.options.content)},openOn:function(e){return e=arguments.length?e:this._source._map,e.hasLayer(this)||e.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(e){return this._map?this.close():(arguments.length?this._source=e:e=this._source,this._prepareOpen(),this.openOn(e._map)),this},onAdd:function(e){this._zoomAnimated=e._zoomAnimated,this._container||this._initLayout(),e._fadeAnimated&&kt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),e._fadeAnimated&&kt(this._container,1),this.bringToFront(),this.options.interactive&&(H(this._container,`leaflet-interactive`),this.addInteractiveTarget(this._container))},onRemove:function(e){e._fadeAnimated?(kt(this._container,0),this._removeTimeout=setTimeout(i(xt,void 0,this._container),200)):xt(this._container),this.options.interactive&&(Et(this._container,`leaflet-interactive`),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(e){return this._latlng=F(e),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(e){return this._content=e,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility=`hidden`,this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility=``,this._adjustPan())},getEvents:function(){var e={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Ct(this._container),this},bringToBack:function(){return this._map&&wt(this._container),this},_prepareOpen:function(e){var t=this._source;if(!t._map)return!1;if(t instanceof er){t=null;var n=this._source._layers;for(var r in n)if(n[r]._map){t=n[r];break}if(!t)return!1;this._source=t}if(!e){if(t.getCenter)e=t.getCenter();else if(t.getLatLng)e=t.getLatLng();else if(t.getBounds)e=t.getBounds().getCenter();else throw Error(`Unable to get source layer LatLng.`)}return this.setLatLng(e),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var e=this._contentNode,t=typeof this._content==`function`?this._content(this._source||this):this._content;if(typeof t==`string`)e.innerHTML=t;else{for(;e.hasChildNodes();)e.removeChild(e.firstChild);e.appendChild(t)}this.fire(`contentupdate`)}},_updatePosition:function(){if(this._map){var e=this._map.latLngToLayerPoint(this._latlng),t=A(this.options.offset),n=this._getAnchor();this._zoomAnimated?Nt(this._container,e.add(n)):t=t.add(e).add(n);var r=this._containerBottom=-t.y,i=this._containerLeft=-Math.round(this._containerWidth/2)+t.x;this._container.style.bottom=r+`px`,this._container.style.left=i+`px`}},_getAnchor:function(){return[0,0]}});G.include({_initOverlay:function(e,t,n,r){var i=t;return i instanceof e||(i=new e(r).setContent(t)),n&&i.setLatLng(n),i}}),Zn.include({_initOverlay:function(e,t,n,r){var i=n;return i instanceof e?(p(i,r),i._source=this):(i=t&&!r?t:new e(r,this),i.setContent(n)),i}});var Fr=Pr.extend({options:{pane:`popupPane`,offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:``},openOn:function(e){return e=arguments.length?e:this._source._map,!e.hasLayer(this)&&e._popup&&e._popup.options.autoClose&&e.removeLayer(e._popup),e._popup=this,Pr.prototype.openOn.call(this,e)},onAdd:function(e){Pr.prototype.onAdd.call(this,e),e.fire(`popupopen`,{popup:this}),this._source&&(this._source.fire(`popupopen`,{popup:this},!0),this._source instanceof cr||this._source.on(`preclick`,$t))},onRemove:function(e){Pr.prototype.onRemove.call(this,e),e.fire(`popupclose`,{popup:this}),this._source&&(this._source.fire(`popupclose`,{popup:this},!0),this._source instanceof cr||this._source.off(`preclick`,$t))},getEvents:function(){var e=Pr.prototype.getEvents.call(this);return(this.options.closeOnClick===void 0?this._map.options.closePopupOnClick:this.options.closeOnClick)&&(e.preclick=this.close),this.options.keepInView&&(e.moveend=this._adjustPan),e},_initLayout:function(){var e=`leaflet-popup`,t=this._container=V(`div`,e+` `+(this.options.className||``)+` leaflet-zoom-animated`),n=this._wrapper=V(`div`,e+`-content-wrapper`,t);if(this._contentNode=V(`div`,e+`-content`,n),tn(t),en(this._contentNode),U(t,`contextmenu`,$t),this._tipContainer=V(`div`,e+`-tip-container`,t),this._tip=V(`div`,e+`-tip`,this._tipContainer),this.options.closeButton){var r=this._closeButton=V(`a`,e+`-close-button`,t);r.setAttribute(`role`,`button`),r.setAttribute(`aria-label`,`Close popup`),r.href=`#close`,r.innerHTML=`<span aria-hidden="true">&#215;</span>`,U(r,`click`,function(e){nn(e),this.close()},this)}},_updateLayout:function(){var e=this._contentNode,t=e.style;t.width=``,t.whiteSpace=`nowrap`;var n=e.offsetWidth;n=Math.min(n,this.options.maxWidth),n=Math.max(n,this.options.minWidth),t.width=n+1+`px`,t.whiteSpace=``,t.height=``;var r=e.offsetHeight,i=this.options.maxHeight,a=`leaflet-popup-scrolled`;i&&r>i?(t.height=i+`px`,H(e,a)):Et(e,a),this._containerWidth=this._container.offsetWidth},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center),n=this._getAnchor();Nt(this._container,t.add(n))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var e=this._map,t=parseInt(bt(this._container,`marginBottom`),10)||0,n=this._container.offsetHeight+t,r=this._containerWidth,i=new O(this._containerLeft,-n-this._containerBottom);i._add(Pt(this._container));var a=e.layerPointToContainerPoint(i),o=A(this.options.autoPanPadding),s=A(this.options.autoPanPaddingTopLeft||o),c=A(this.options.autoPanPaddingBottomRight||o),l=e.getSize(),u=0,d=0;a.x+r+c.x>l.x&&(u=a.x+r-l.x+c.x),a.x-u-s.x<0&&(u=a.x-s.x),a.y+n+c.y>l.y&&(d=a.y+n-l.y+c.y),a.y-d-s.y<0&&(d=a.y-s.y),(u||d)&&(this.options.keepInView&&(this._autopanning=!0),e.fire(`autopanstart`).panBy([u,d]))}},_getAnchor:function(){return A(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Ir=function(e,t){return new Fr(e,t)};G.mergeOptions({closePopupOnClick:!0}),G.include({openPopup:function(e,t,n){return this._initOverlay(Fr,e,t,n).openOn(this),this},closePopup:function(e){return e=arguments.length?e:this._popup,e&&e.close(),this}}),Zn.include({bindPopup:function(e,t){return this._popup=this._initOverlay(Fr,this._popup,e,t),this._popupHandlersAdded||=(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),!0),this},unbindPopup:function(){return this._popup&&=(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,null),this},openPopup:function(e){return this._popup&&(this instanceof er||(this._popup._source=this),this._popup._prepareOpen(e||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(e){return this._popup&&this._popup.setContent(e),this},getPopup:function(){return this._popup},_openPopup:function(e){if(!(!this._popup||!this._map)){rn(e);var t=e.layer||e.target;if(this._popup._source===t&&!(t instanceof cr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(e.latlng);return}this._popup._source=t,this.openPopup(e.latlng)}},_movePopup:function(e){this._popup.setLatLng(e.latlng)},_onKeyPress:function(e){e.originalEvent.keyCode===13&&this._openPopup(e)}});var Lr=Pr.extend({options:{pane:`tooltipPane`,offset:[0,0],direction:`auto`,permanent:!1,sticky:!1,opacity:.9},onAdd:function(e){Pr.prototype.onAdd.call(this,e),this.setOpacity(this.options.opacity),e.fire(`tooltipopen`,{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire(`tooltipopen`,{tooltip:this},!0))},onRemove:function(e){Pr.prototype.onRemove.call(this,e),e.fire(`tooltipclose`,{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire(`tooltipclose`,{tooltip:this},!0))},getEvents:function(){var e=Pr.prototype.getEvents.call(this);return this.options.permanent||(e.preclick=this.close),e},_initLayout:function(){var e=`leaflet-tooltip `+(this.options.className||``)+` leaflet-zoom-`+(this._zoomAnimated?`animated`:`hide`);this._contentNode=this._container=V(`div`,e),this._container.setAttribute(`role`,`tooltip`),this._container.setAttribute(`id`,`leaflet-tooltip-`+o(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(e){var t,n,r=this._map,i=this._container,a=r.latLngToContainerPoint(r.getCenter()),o=r.layerPointToContainerPoint(e),s=this.options.direction,c=i.offsetWidth,l=i.offsetHeight,u=A(this.options.offset),d=this._getAnchor();s===`top`?(t=c/2,n=l):s===`bottom`?(t=c/2,n=0):s===`center`?(t=c/2,n=l/2):s===`right`?(t=0,n=l/2):s===`left`?(t=c,n=l/2):o.x<a.x?(s=`right`,t=0,n=l/2):(s=`left`,t=c+(u.x+d.x)*2,n=l/2),e=e.subtract(A(t,n,!0)).add(u).add(d),Et(i,`leaflet-tooltip-right`),Et(i,`leaflet-tooltip-left`),Et(i,`leaflet-tooltip-top`),Et(i,`leaflet-tooltip-bottom`),H(i,`leaflet-tooltip-`+s),Nt(i,e)},_updatePosition:function(){var e=this._map.latLngToLayerPoint(this._latlng);this._setPosition(e)},setOpacity:function(e){this.options.opacity=e,this._container&&kt(this._container,e)},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center);this._setPosition(t)},_getAnchor:function(){return A(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Rr=function(e,t){return new Lr(e,t)};G.include({openTooltip:function(e,t,n){return this._initOverlay(Lr,e,t,n).openOn(this),this},closeTooltip:function(e){return e.close(),this}}),Zn.include({bindTooltip:function(e,t){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Lr,this._tooltip,e,t),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&=(this._initTooltipInteractions(!0),this.closeTooltip(),null),this},_initTooltipInteractions:function(e){if(!(!e&&this._tooltipHandlersAdded)){var t=e?`off`:`on`,n={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?n.add=this._openTooltip:(n.mouseover=this._openTooltip,n.mouseout=this.closeTooltip,n.click=this._openTooltip,this._map?this._addFocusListeners():n.add=this._addFocusListeners),this._tooltip.options.sticky&&(n.mousemove=this._moveTooltip),this[t](n),this._tooltipHandlersAdded=!e}},openTooltip:function(e){return this._tooltip&&(this instanceof er||(this._tooltip._source=this),this._tooltip._prepareOpen(e)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(e){return this._tooltip&&this._tooltip.setContent(e),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(e){var t=typeof e.getElement==`function`&&e.getElement();t&&(U(t,`focus`,function(){this._tooltip._source=e,this.openTooltip()},this),U(t,`blur`,this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(e){var t=typeof e.getElement==`function`&&e.getElement();t&&t.setAttribute(`aria-describedby`,this._tooltip._container.id)},_openTooltip:function(e){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var t=this;this._map.once(`moveend`,function(){t._openOnceFlag=!1,t._openTooltip(e)});return}this._tooltip._source=e.layer||e.target,this.openTooltip(this._tooltip.options.sticky?e.latlng:void 0)}},_moveTooltip:function(e){var t=e.latlng,n,r;this._tooltip.options.sticky&&e.originalEvent&&(n=this._map.mouseEventToContainerPoint(e.originalEvent),r=this._map.containerPointToLayerPoint(n),t=this._map.layerPointToLatLng(r)),this._tooltip.setLatLng(t)}});var zr=nr.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:`leaflet-div-icon`},createIcon:function(e){var t=e&&e.tagName===`DIV`?e:document.createElement(`div`),n=this.options;if(n.html instanceof Element?(St(t),t.appendChild(n.html)):t.innerHTML=n.html===!1?``:n.html,n.bgPos){var r=A(n.bgPos);t.style.backgroundPosition=-r.x+`px `+-r.y+`px`}return this._setIconStyles(t,`icon`),t},createShadow:function(){return null}});function Br(e){return new zr(e)}nr.Default=ir;var Vr=Zn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:B.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:`tilePane`,className:``,keepBuffer:2},initialize:function(e){p(this,e)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(e){e._addZoomLimit(this)},onRemove:function(e){this._removeAllTiles(),xt(this._container),e._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Ct(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(wt(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(e){return this.options.opacity=e,this._updateOpacity(),this},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var e=this._clampZoom(this._map.getZoom());e!==this._tileZoom&&(this._tileZoom=e,this._updateLevels()),this._update()}return this},getEvents:function(){var e={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||=s(this._onMoveEnd,this.options.updateInterval,this),e.move=this._onMove),this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},createTile:function(){return document.createElement(`div`)},getTileSize:function(){var e=this.options.tileSize;return e instanceof O?e:new O(e,e)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(e){for(var t=this.getPane().children,n=-e(-1/0,1/0),r=0,i=t.length,a;r<i;r++)a=t[r].style.zIndex,t[r]!==this._container&&a&&(n=e(n,+a));isFinite(n)&&(this.options.zIndex=n+e(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!B.ielt9){kt(this._container,this.options.opacity);var e=+new Date,t=!1,n=!1;for(var r in this._tiles){var i=this._tiles[r];if(!(!i.current||!i.loaded)){var a=Math.min(1,(e-i.loaded)/200);kt(i.el,a),a<1?t=!0:(i.active?n=!0:this._onOpaqueTile(i),i.active=!0)}}n&&!this._noPrune&&this._pruneTiles(),t&&(E(this._fadeFrame),this._fadeFrame=T(this._updateOpacity,this))}},_onOpaqueTile:l,_initContainer:function(){this._container||(this._container=V(`div`,`leaflet-layer `+(this.options.className||``)),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var e=this._tileZoom,t=this.options.maxZoom;if(e!==void 0){for(var n in this._levels)n=Number(n),this._levels[n].el.children.length||n===e?(this._levels[n].el.style.zIndex=t-Math.abs(e-n),this._onUpdateLevel(n)):(xt(this._levels[n].el),this._removeTilesAtZoom(n),this._onRemoveLevel(n),delete this._levels[n]);var r=this._levels[e],i=this._map;return r||(r=this._levels[e]={},r.el=V(`div`,`leaflet-tile-container leaflet-zoom-animated`,this._container),r.el.style.zIndex=t,r.origin=i.project(i.unproject(i.getPixelOrigin()),e).round(),r.zoom=e,this._setZoomTransform(r,i.getCenter(),i.getZoom()),r.el.offsetWidth,this._onCreateLevel(r)),this._level=r,r}},_onUpdateLevel:l,_onRemoveLevel:l,_onCreateLevel:l,_pruneTiles:function(){if(this._map){var e,t,n=this._map.getZoom();if(n>this.options.maxZoom||n<this.options.minZoom){this._removeAllTiles();return}for(e in this._tiles)t=this._tiles[e],t.retain=t.current;for(e in this._tiles)if(t=this._tiles[e],t.current&&!t.active){var r=t.coords;this._retainParent(r.x,r.y,r.z,r.z-5)||this._retainChildren(r.x,r.y,r.z,r.z+2)}for(e in this._tiles)this._tiles[e].retain||this._removeTile(e)}},_removeTilesAtZoom:function(e){for(var t in this._tiles)this._tiles[t].coords.z===e&&this._removeTile(t)},_removeAllTiles:function(){for(var e in this._tiles)this._removeTile(e)},_invalidateAll:function(){for(var e in this._levels)xt(this._levels[e].el),this._onRemoveLevel(Number(e)),delete this._levels[e];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(e,t,n,r){var i=Math.floor(e/2),a=Math.floor(t/2),o=n-1,s=new O(+i,+a);s.z=+o;var c=this._tileCoordsToKey(s),l=this._tiles[c];return l&&l.active?(l.retain=!0,!0):(l&&l.loaded&&(l.retain=!0),o>r&&this._retainParent(i,a,o,r))},_retainChildren:function(e,t,n,r){for(var i=2*e;i<2*e+2;i++)for(var a=2*t;a<2*t+2;a++){var o=new O(i,a);o.z=n+1;var s=this._tileCoordsToKey(o),c=this._tiles[s];if(c&&c.active){c.retain=!0;continue}c&&c.loaded&&(c.retain=!0),n+1<r&&this._retainChildren(i,a,n+1,r)}},_resetView:function(e){var t=e&&(e.pinch||e.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),t,t)},_animateZoom:function(e){this._setView(e.center,e.zoom,!0,e.noUpdate)},_clampZoom:function(e){var t=this.options;return t.minNativeZoom!==void 0&&e<t.minNativeZoom?t.minNativeZoom:t.maxNativeZoom!==void 0&&t.maxNativeZoom<e?t.maxNativeZoom:e},_setView:function(e,t,n,r){var i=Math.round(t);i=this.options.maxZoom!==void 0&&i>this.options.maxZoom||this.options.minZoom!==void 0&&i<this.options.minZoom?void 0:this._clampZoom(i);var a=this.options.updateWhenZooming&&i!==this._tileZoom;(!r||a)&&(this._tileZoom=i,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),i!==void 0&&this._update(e),n||this._pruneTiles(),this._noPrune=!!n),this._setZoomTransforms(e,t)},_setZoomTransforms:function(e,t){for(var n in this._levels)this._setZoomTransform(this._levels[n],e,t)},_setZoomTransform:function(e,t,n){var r=this._map.getZoomScale(n,e.zoom),i=e.origin.multiplyBy(r).subtract(this._map._getNewPixelOrigin(t,n)).round();B.any3d?Mt(e.el,i,r):Nt(e.el,i)},_resetGrid:function(){var e=this._map,t=e.options.crs,n=this._tileSize=this.getTileSize(),r=this._tileZoom,i=this._map.getPixelWorldBounds(this._tileZoom);i&&(this._globalTileRange=this._pxBoundsToTileRange(i)),this._wrapX=t.wrapLng&&!this.options.noWrap&&[Math.floor(e.project([0,t.wrapLng[0]],r).x/n.x),Math.ceil(e.project([0,t.wrapLng[1]],r).x/n.y)],this._wrapY=t.wrapLat&&!this.options.noWrap&&[Math.floor(e.project([t.wrapLat[0],0],r).y/n.x),Math.ceil(e.project([t.wrapLat[1],0],r).y/n.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(e){var t=this._map,n=t._animatingZoom?Math.max(t._animateToZoom,t.getZoom()):t.getZoom(),r=t.getZoomScale(n,this._tileZoom),i=t.project(e,this._tileZoom).floor(),a=t.getSize().divideBy(r*2);return new j(i.subtract(a),i.add(a))},_update:function(e){var t=this._map;if(t){var n=this._clampZoom(t.getZoom());if(e===void 0&&(e=t.getCenter()),this._tileZoom!==void 0){var r=this._getTiledPixelBounds(e),i=this._pxBoundsToTileRange(r),a=i.getCenter(),o=[],s=this.options.keepBuffer,c=new j(i.getBottomLeft().subtract([s,-s]),i.getTopRight().add([s,-s]));if(!(isFinite(i.min.x)&&isFinite(i.min.y)&&isFinite(i.max.x)&&isFinite(i.max.y)))throw Error(`Attempted to load an infinite number of tiles`);for(var l in this._tiles){var u=this._tiles[l].coords;(u.z!==this._tileZoom||!c.contains(new O(u.x,u.y)))&&(this._tiles[l].current=!1)}if(Math.abs(n-this._tileZoom)>1){this._setView(e,n);return}for(var d=i.min.y;d<=i.max.y;d++)for(var f=i.min.x;f<=i.max.x;f++){var p=new O(f,d);if(p.z=this._tileZoom,this._isValidTile(p)){var m=this._tiles[this._tileCoordsToKey(p)];m?m.current=!0:o.push(p)}}if(o.sort(function(e,t){return e.distanceTo(a)-t.distanceTo(a)}),o.length!==0){this._loading||(this._loading=!0,this.fire(`loading`));var h=document.createDocumentFragment();for(f=0;f<o.length;f++)this._addTile(o[f],h);this._level.el.appendChild(h)}}}},_isValidTile:function(e){var t=this._map.options.crs;if(!t.infinite){var n=this._globalTileRange;if(!t.wrapLng&&(e.x<n.min.x||e.x>n.max.x)||!t.wrapLat&&(e.y<n.min.y||e.y>n.max.y))return!1}if(!this.options.bounds)return!0;var r=this._tileCoordsToBounds(e);return ie(this.options.bounds).overlaps(r)},_keyToBounds:function(e){return this._tileCoordsToBounds(this._keyToTileCoords(e))},_tileCoordsToNwSe:function(e){var t=this._map,n=this.getTileSize(),r=e.scaleBy(n),i=r.add(n);return[t.unproject(r,e.z),t.unproject(i,e.z)]},_tileCoordsToBounds:function(e){var t=this._tileCoordsToNwSe(e),n=new N(t[0],t[1]);return this.options.noWrap||(n=this._map.wrapLatLngBounds(n)),n},_tileCoordsToKey:function(e){return e.x+`:`+e.y+`:`+e.z},_keyToTileCoords:function(e){var t=e.split(`:`),n=new O(+t[0],+t[1]);return n.z=+t[2],n},_removeTile:function(e){var t=this._tiles[e];t&&(xt(t.el),delete this._tiles[e],this.fire(`tileunload`,{tile:t.el,coords:this._keyToTileCoords(e)}))},_initTile:function(e){H(e,`leaflet-tile`);var t=this.getTileSize();e.style.width=t.x+`px`,e.style.height=t.y+`px`,e.onselectstart=l,e.onmousemove=l,B.ielt9&&this.options.opacity<1&&kt(e,this.options.opacity)},_addTile:function(e,t){var n=this._getTilePos(e),r=this._tileCoordsToKey(e),a=this.createTile(this._wrapCoords(e),i(this._tileReady,this,e));this._initTile(a),this.createTile.length<2&&T(i(this._tileReady,this,e,null,a)),Nt(a,n),this._tiles[r]={el:a,coords:e,current:!0},t.appendChild(a),this.fire(`tileloadstart`,{tile:a,coords:e})},_tileReady:function(e,t,n){t&&this.fire(`tileerror`,{error:t,tile:n,coords:e});var r=this._tileCoordsToKey(e);n=this._tiles[r],n&&(n.loaded=+new Date,this._map._fadeAnimated?(kt(n.el,0),E(this._fadeFrame),this._fadeFrame=T(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),t||(H(n.el,`leaflet-tile-loaded`),this.fire(`tileload`,{tile:n.el,coords:e})),this._noTilesToLoad()&&(this._loading=!1,this.fire(`load`),B.ielt9||!this._map._fadeAnimated?T(this._pruneTiles,this):setTimeout(i(this._pruneTiles,this),250)))},_getTilePos:function(e){return e.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(e){var t=new O(this._wrapX?c(e.x,this._wrapX):e.x,this._wrapY?c(e.y,this._wrapY):e.y);return t.z=e.z,t},_pxBoundsToTileRange:function(e){var t=this.getTileSize();return new j(e.min.unscaleBy(t).floor(),e.max.unscaleBy(t).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var e in this._tiles)if(!this._tiles[e].loaded)return!1;return!0}});function Hr(e){return new Vr(e)}var Ur=Vr.extend({options:{minZoom:0,maxZoom:18,subdomains:`abc`,errorTileUrl:``,zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(e,t){this._url=e,t=p(this,t),t.detectRetina&&B.retina&&t.maxZoom>0?(t.tileSize=Math.floor(t.tileSize/2),t.zoomReverse?(t.zoomOffset--,t.minZoom=Math.min(t.maxZoom,t.minZoom+1)):(t.zoomOffset++,t.maxZoom=Math.max(t.minZoom,t.maxZoom-1)),t.minZoom=Math.max(0,t.minZoom)):t.zoomReverse?t.minZoom=Math.min(t.maxZoom,t.minZoom):t.maxZoom=Math.max(t.minZoom,t.maxZoom),typeof t.subdomains==`string`&&(t.subdomains=t.subdomains.split(``)),this.on(`tileunload`,this._onTileRemove)},setUrl:function(e,t){return this._url===e&&t===void 0&&(t=!0),this._url=e,t||this.redraw(),this},createTile:function(e,t){var n=document.createElement(`img`);return U(n,`load`,i(this._tileOnLoad,this,t,n)),U(n,`error`,i(this._tileOnError,this,t,n)),(this.options.crossOrigin||this.options.crossOrigin===``)&&(n.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),typeof this.options.referrerPolicy==`string`&&(n.referrerPolicy=this.options.referrerPolicy),n.alt=``,n.src=this.getTileUrl(e),n},getTileUrl:function(e){var t={r:B.retina?`@2x`:``,s:this._getSubdomain(e),x:e.x,y:e.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var r=this._globalTileRange.max.y-e.y;this.options.tms&&(t.y=r),t[`-y`]=r}return g(this._url,n(t,this.options))},_tileOnLoad:function(e,t){B.ielt9?setTimeout(i(e,this,null,t),0):e(null,t)},_tileOnError:function(e,t,n){var r=this.options.errorTileUrl;r&&t.getAttribute(`src`)!==r&&(t.src=r),e(n,t)},_onTileRemove:function(e){e.tile.onload=null},_getZoomForUrl:function(){var e=this._tileZoom,t=this.options.maxZoom,n=this.options.zoomReverse,r=this.options.zoomOffset;return n&&(e=t-e),e+r},_getSubdomain:function(e){var t=Math.abs(e.x+e.y)%this.options.subdomains.length;return this.options.subdomains[t]},_abortLoading:function(){var e,t;for(e in this._tiles)if(this._tiles[e].coords.z!==this._tileZoom&&(t=this._tiles[e].el,t.onload=l,t.onerror=l,!t.complete)){t.src=y;var n=this._tiles[e].coords;xt(t),delete this._tiles[e],this.fire(`tileabort`,{tile:t,coords:n})}},_removeTile:function(e){var t=this._tiles[e];if(t)return t.el.setAttribute(`src`,y),Vr.prototype._removeTile.call(this,e)},_tileReady:function(e,t,n){if(!(!this._map||n&&n.getAttribute(`src`)===y))return Vr.prototype._tileReady.call(this,e,t,n)}});function Wr(e,t){return new Ur(e,t)}var Gr=Ur.extend({defaultWmsParams:{service:`WMS`,request:`GetMap`,layers:``,styles:``,format:`image/jpeg`,transparent:!1,version:`1.1.1`},options:{crs:null,uppercase:!1},initialize:function(e,t){this._url=e;var r=n({},this.defaultWmsParams);for(var i in t)i in this.options||(r[i]=t[i]);t=p(this,t);var a=t.detectRetina&&B.retina?2:1,o=this.getTileSize();r.width=o.x*a,r.height=o.y*a,this.wmsParams=r},onAdd:function(e){this._crs=this.options.crs||e.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var t=this._wmsVersion>=1.3?`crs`:`srs`;this.wmsParams[t]=this._crs.code,Ur.prototype.onAdd.call(this,e)},getTileUrl:function(e){var t=this._tileCoordsToNwSe(e),n=this._crs,r=M(n.project(t[0]),n.project(t[1])),i=r.min,a=r.max,o=(this._wmsVersion>=1.3&&this._crs===Yn?[i.y,i.x,a.y,a.x]:[i.x,i.y,a.x,a.y]).join(`,`),s=Ur.prototype.getTileUrl.call(this,e);return s+m(this.wmsParams,s,this.options.uppercase)+(this.options.uppercase?`&BBOX=`:`&bbox=`)+o},setParams:function(e,t){return n(this.wmsParams,e),t||this.redraw(),this}});function Kr(e,t){return new Gr(e,t)}Ur.WMS=Gr,Wr.wms=Kr;var qr=Zn.extend({options:{padding:.1},initialize:function(e){p(this,e),o(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),H(this._container,`leaflet-zoom-animated`)),this.getPane().appendChild(this._container),this._update(),this.on(`update`,this._updatePaths,this)},onRemove:function(){this.off(`update`,this._updatePaths,this),this._destroyContainer()},getEvents:function(){var e={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(e.zoomanim=this._onAnimZoom),e},_onAnimZoom:function(e){this._updateTransform(e.center,e.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(e,t){var n=this._map.getZoomScale(t,this._zoom),r=this._map.getSize().multiplyBy(.5+this.options.padding),i=this._map.project(this._center,t),a=r.multiplyBy(-n).add(i).subtract(this._map._getNewPixelOrigin(e,t));B.any3d?Mt(this._container,a,n):Nt(this._container,a)},_reset:function(){for(var e in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[e]._reset()},_onZoomEnd:function(){for(var e in this._layers)this._layers[e]._project()},_updatePaths:function(){for(var e in this._layers)this._layers[e]._update()},_update:function(){var e=this.options.padding,t=this._map.getSize(),n=this._map.containerPointToLayerPoint(t.multiplyBy(-e)).round();this._bounds=new j(n,n.add(t.multiplyBy(1+e*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Jr=qr.extend({options:{tolerance:0},getEvents:function(){var e=qr.prototype.getEvents.call(this);return e.viewprereset=this._onViewPreReset,e},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){qr.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var e=this._container=document.createElement(`canvas`);U(e,`mousemove`,this._onMouseMove,this),U(e,`click dblclick mousedown mouseup contextmenu`,this._onClick,this),U(e,`mouseout`,this._handleMouseOut,this),e._leaflet_disable_events=!0,this._ctx=e.getContext(`2d`)},_destroyContainer:function(){E(this._redrawRequest),delete this._ctx,xt(this._container),W(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var e;for(var t in this._redrawBounds=null,this._layers)e=this._layers[t],e._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){qr.prototype._update.call(this);var e=this._bounds,t=this._container,n=e.getSize(),r=B.retina?2:1;Nt(t,e.min),t.width=r*n.x,t.height=r*n.y,t.style.width=n.x+`px`,t.style.height=n.y+`px`,B.retina&&this._ctx.scale(2,2),this._ctx.translate(-e.min.x,-e.min.y),this.fire(`update`)}},_reset:function(){qr.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(e){this._updateDashArray(e),this._layers[o(e)]=e;var t=e._order={layer:e,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=t),this._drawLast=t,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(e){this._requestRedraw(e)},_removePath:function(e){var t=e._order,n=t.next,r=t.prev;n?n.prev=r:this._drawLast=r,r?r.next=n:this._drawFirst=n,delete e._order,delete this._layers[o(e)],this._requestRedraw(e)},_updatePath:function(e){this._extendRedrawBounds(e),e._project(),e._update(),this._requestRedraw(e)},_updateStyle:function(e){this._updateDashArray(e),this._requestRedraw(e)},_updateDashArray:function(e){if(typeof e.options.dashArray==`string`){var t=e.options.dashArray.split(/[, ]+/),n=[],r,i;for(i=0;i<t.length;i++){if(r=Number(t[i]),isNaN(r))return;n.push(r)}e.options._dashArray=n}else e.options._dashArray=e.options.dashArray},_requestRedraw:function(e){this._map&&(this._extendRedrawBounds(e),this._redrawRequest=this._redrawRequest||T(this._redraw,this))},_extendRedrawBounds:function(e){if(e._pxBounds){var t=(e.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new j,this._redrawBounds.extend(e._pxBounds.min.subtract([t,t])),this._redrawBounds.extend(e._pxBounds.max.add([t,t]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var e=this._redrawBounds;if(e){var t=e.getSize();this._ctx.clearRect(e.min.x,e.min.y,t.x,t.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var e,t=this._redrawBounds;if(this._ctx.save(),t){var n=t.getSize();this._ctx.beginPath(),this._ctx.rect(t.min.x,t.min.y,n.x,n.y),this._ctx.clip()}this._drawing=!0;for(var r=this._drawFirst;r;r=r.next)e=r.layer,(!t||e._pxBounds&&e._pxBounds.intersects(t))&&e._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(e,t){if(this._drawing){var n,r,i,a,o=e._parts,s=o.length,c=this._ctx;if(s){for(c.beginPath(),n=0;n<s;n++){for(r=0,i=o[n].length;r<i;r++)a=o[n][r],c[r?`lineTo`:`moveTo`](a.x,a.y);t&&c.closePath()}this._fillStroke(c,e)}}},_updateCircle:function(e){if(!(!this._drawing||e._empty())){var t=e._point,n=this._ctx,r=Math.max(Math.round(e._radius),1),i=(Math.max(Math.round(e._radiusY),1)||r)/r;i!==1&&(n.save(),n.scale(1,i)),n.beginPath(),n.arc(t.x,t.y/i,r,0,Math.PI*2,!1),i!==1&&n.restore(),this._fillStroke(n,e)}},_fillStroke:function(e,t){var n=t.options;n.fill&&(e.globalAlpha=n.fillOpacity,e.fillStyle=n.fillColor||n.color,e.fill(n.fillRule||`evenodd`)),n.stroke&&n.weight!==0&&(e.setLineDash&&e.setLineDash(t.options&&t.options._dashArray||[]),e.globalAlpha=n.opacity,e.lineWidth=n.weight,e.strokeStyle=n.color,e.lineCap=n.lineCap,e.lineJoin=n.lineJoin,e.stroke())},_onClick:function(e){for(var t=this._map.mouseEventToLayerPoint(e),n,r,i=this._drawFirst;i;i=i.next)n=i.layer,n.options.interactive&&n._containsPoint(t)&&(e.type!==`click`&&e.type!==`preclick`||!this._map._draggableMoved(n))&&(r=n);this._fireEvent(r?[r]:!1,e)},_onMouseMove:function(e){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var t=this._map.mouseEventToLayerPoint(e);this._handleMouseHover(e,t)}},_handleMouseOut:function(e){var t=this._hoveredLayer;t&&(Et(this._container,`leaflet-interactive`),this._fireEvent([t],e,`mouseout`),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(e,t){if(!this._mouseHoverThrottled){for(var n,r,a=this._drawFirst;a;a=a.next)n=a.layer,n.options.interactive&&n._containsPoint(t)&&(r=n);r!==this._hoveredLayer&&(this._handleMouseOut(e),r&&(H(this._container,`leaflet-interactive`),this._fireEvent([r],e,`mouseover`),this._hoveredLayer=r)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,e),this._mouseHoverThrottled=!0,setTimeout(i(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(e,t,n){this._map._fireDOMEvent(t,n||t.type,e)},_bringToFront:function(e){var t=e._order;if(t){var n=t.next,r=t.prev;if(n)n.prev=r;else return;r?r.next=n:n&&(this._drawFirst=n),t.prev=this._drawLast,this._drawLast.next=t,t.next=null,this._drawLast=t,this._requestRedraw(e)}},_bringToBack:function(e){var t=e._order;if(t){var n=t.next,r=t.prev;if(r)r.next=n;else return;n?n.prev=r:r&&(this._drawLast=r),t.prev=null,t.next=this._drawFirst,this._drawFirst.prev=t,this._drawFirst=t,this._requestRedraw(e)}}});function Yr(e){return B.canvas?new Jr(e):null}var Xr=(function(){try{return document.namespaces.add(`lvml`,`urn:schemas-microsoft-com:vml`),function(e){return document.createElement(`<lvml:`+e+` class="lvml">`)}}catch{}return function(e){return document.createElement(`<`+e+` xmlns="urn:schemas-microsoft.com:vml" class="lvml">`)}})(),Zr={_initContainer:function(){this._container=V(`div`,`leaflet-vml-container`)},_update:function(){this._map._animatingZoom||(qr.prototype._update.call(this),this.fire(`update`))},_initPath:function(e){var t=e._container=Xr(`shape`);H(t,`leaflet-vml-shape `+(this.options.className||``)),t.coordsize=`1 1`,e._path=Xr(`path`),t.appendChild(e._path),this._updateStyle(e),this._layers[o(e)]=e},_addPath:function(e){var t=e._container;this._container.appendChild(t),e.options.interactive&&e.addInteractiveTarget(t)},_removePath:function(e){var t=e._container;xt(t),e.removeInteractiveTarget(t),delete this._layers[o(e)]},_updateStyle:function(e){var t=e._stroke,n=e._fill,r=e.options,i=e._container;i.stroked=!!r.stroke,i.filled=!!r.fill,r.stroke?(t||=e._stroke=Xr(`stroke`),i.appendChild(t),t.weight=r.weight+`px`,t.color=r.color,t.opacity=r.opacity,r.dashArray?t.dashStyle=_(r.dashArray)?r.dashArray.join(` `):r.dashArray.replace(/( *, *)/g,` `):t.dashStyle=``,t.endcap=r.lineCap.replace(`butt`,`flat`),t.joinstyle=r.lineJoin):t&&(i.removeChild(t),e._stroke=null),r.fill?(n||=e._fill=Xr(`fill`),i.appendChild(n),n.color=r.fillColor||r.color,n.opacity=r.fillOpacity):n&&(i.removeChild(n),e._fill=null)},_updateCircle:function(e){var t=e._point.round(),n=Math.round(e._radius),r=Math.round(e._radiusY||n);this._setPath(e,e._empty()?`M0 0`:`AL `+t.x+`,`+t.y+` `+n+`,`+r+` 0,23592600`)},_setPath:function(e,t){e._path.v=t},_bringToFront:function(e){Ct(e._container)},_bringToBack:function(e){wt(e._container)}},Qr=B.vml?Xr:de,$r=qr.extend({_initContainer:function(){this._container=Qr(`svg`),this._container.setAttribute(`pointer-events`,`none`),this._rootGroup=Qr(`g`),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){xt(this._container),W(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){qr.prototype._update.call(this);var e=this._bounds,t=e.getSize(),n=this._container;(!this._svgSize||!this._svgSize.equals(t))&&(this._svgSize=t,n.setAttribute(`width`,t.x),n.setAttribute(`height`,t.y)),Nt(n,e.min),n.setAttribute(`viewBox`,[e.min.x,e.min.y,t.x,t.y].join(` `)),this.fire(`update`)}},_initPath:function(e){var t=e._path=Qr(`path`);e.options.className&&H(t,e.options.className),e.options.interactive&&H(t,`leaflet-interactive`),this._updateStyle(e),this._layers[o(e)]=e},_addPath:function(e){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(e._path),e.addInteractiveTarget(e._path)},_removePath:function(e){xt(e._path),e.removeInteractiveTarget(e._path),delete this._layers[o(e)]},_updatePath:function(e){e._project(),e._update()},_updateStyle:function(e){var t=e._path,n=e.options;t&&(n.stroke?(t.setAttribute(`stroke`,n.color),t.setAttribute(`stroke-opacity`,n.opacity),t.setAttribute(`stroke-width`,n.weight),t.setAttribute(`stroke-linecap`,n.lineCap),t.setAttribute(`stroke-linejoin`,n.lineJoin),n.dashArray?t.setAttribute(`stroke-dasharray`,n.dashArray):t.removeAttribute(`stroke-dasharray`),n.dashOffset?t.setAttribute(`stroke-dashoffset`,n.dashOffset):t.removeAttribute(`stroke-dashoffset`)):t.setAttribute(`stroke`,`none`),n.fill?(t.setAttribute(`fill`,n.fillColor||n.color),t.setAttribute(`fill-opacity`,n.fillOpacity),t.setAttribute(`fill-rule`,n.fillRule||`evenodd`)):t.setAttribute(`fill`,`none`))},_updatePoly:function(e,t){this._setPath(e,fe(e._parts,t))},_updateCircle:function(e){var t=e._point,n=Math.max(Math.round(e._radius),1),r=Math.max(Math.round(e._radiusY),1)||n,i=`a`+n+`,`+r+` 0 1,0 `,a=e._empty()?`M0 0`:`M`+(t.x-n)+`,`+t.y+i+n*2+`,0 `+i+-n*2+`,0 `;this._setPath(e,a)},_setPath:function(e,t){e._path.setAttribute(`d`,t)},_bringToFront:function(e){Ct(e._path)},_bringToBack:function(e){wt(e._path)}});B.vml&&$r.include(Zr);function ei(e){return B.svg||B.vml?new $r(e):null}G.include({getRenderer:function(e){var t=e.options.renderer||this._getPaneRenderer(e.options.pane)||this.options.renderer||this._renderer;return t||=this._renderer=this._createRenderer(),this.hasLayer(t)||this.addLayer(t),t},_getPaneRenderer:function(e){if(e===`overlayPane`||e===void 0)return!1;var t=this._paneRenderers[e];return t===void 0&&(t=this._createRenderer({pane:e}),this._paneRenderers[e]=t),t},_createRenderer:function(e){return this.options.preferCanvas&&Yr(e)||ei(e)}});var ti=hr.extend({initialize:function(e,t){hr.prototype.initialize.call(this,this._boundsToLatLngs(e),t)},setBounds:function(e){return this.setLatLngs(this._boundsToLatLngs(e))},_boundsToLatLngs:function(e){return e=ie(e),[e.getSouthWest(),e.getNorthWest(),e.getNorthEast(),e.getSouthEast()]}});function ni(e,t){return new ti(e,t)}$r.create=Qr,$r.pointsToPath=fe,_r.geometryToLayer=vr,_r.coordsToLatLng=br,_r.coordsToLatLngs=xr,_r.latLngToCoords=q,_r.latLngsToCoords=Sr,_r.getFeature=Cr,_r.asFeature=wr,G.mergeOptions({boxZoom:!0});var ri=Sn.extend({initialize:function(e){this._map=e,this._container=e._container,this._pane=e._panes.overlayPane,this._resetStateTimeout=0,e.on(`unload`,this._destroy,this)},addHooks:function(){U(this._container,`mousedown`,this._onMouseDown,this)},removeHooks:function(){W(this._container,`mousedown`,this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){xt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(e){if(!e.shiftKey||e.which!==1&&e.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Ft(),zt(),this._startPoint=this._map.mouseEventToContainerPoint(e),U(document,{contextmenu:rn,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(e){this._moved||(this._moved=!0,this._box=V(`div`,`leaflet-zoom-box`,this._container),H(this._container,`leaflet-crosshair`),this._map.fire(`boxzoomstart`)),this._point=this._map.mouseEventToContainerPoint(e);var t=new j(this._point,this._startPoint),n=t.getSize();Nt(this._box,t.min),this._box.style.width=n.x+`px`,this._box.style.height=n.y+`px`},_finish:function(){this._moved&&(xt(this._box),Et(this._container,`leaflet-crosshair`)),It(),Bt(),W(document,{contextmenu:rn,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(e){if((e.which===1||e.button===1)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(i(this._resetState,this),0);var t=new N(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(t).fire(`boxzoomend`,{boxZoomBounds:t})}},_onKeyDown:function(e){e.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});G.addInitHook(`addHandler`,`boxZoom`,ri),G.mergeOptions({doubleClickZoom:!0});var ii=Sn.extend({addHooks:function(){this._map.on(`dblclick`,this._onDoubleClick,this)},removeHooks:function(){this._map.off(`dblclick`,this._onDoubleClick,this)},_onDoubleClick:function(e){var t=this._map,n=t.getZoom(),r=t.options.zoomDelta,i=e.originalEvent.shiftKey?n-r:n+r;t.options.doubleClickZoom===`center`?t.setZoom(i):t.setZoomAround(e.containerPoint,i)}});G.addInitHook(`addHandler`,`doubleClickZoom`,ii),G.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var ai=Sn.extend({addHooks:function(){if(!this._draggable){var e=this._map;this._draggable=new Tn(e._mapPane,e._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on(`predrag`,this._onPreDragLimit,this),e.options.worldCopyJump&&(this._draggable.on(`predrag`,this._onPreDragWrap,this),e.on(`zoomend`,this._onZoomEnd,this),e.whenReady(this._onZoomEnd,this))}H(this._map._container,`leaflet-grab leaflet-touch-drag`),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Et(this._map._container,`leaflet-grab`),Et(this._map._container,`leaflet-touch-drag`),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var e=this._map;if(e._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var t=ie(this._map.options.maxBounds);this._offsetLimit=M(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;e.fire(`movestart`).fire(`dragstart`),e.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(e){if(this._map.options.inertia){var t=this._lastTime=+new Date,n=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(n),this._times.push(t),this._prunePositions(t)}this._map.fire(`move`,e).fire(`drag`,e)},_prunePositions:function(e){for(;this._positions.length>1&&e-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var e=this._map.getSize().divideBy(2),t=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=t.subtract(e).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(e,t){return e-(e-t)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var e=this._draggable._newPos.subtract(this._draggable._startPos),t=this._offsetLimit;e.x<t.min.x&&(e.x=this._viscousLimit(e.x,t.min.x)),e.y<t.min.y&&(e.y=this._viscousLimit(e.y,t.min.y)),e.x>t.max.x&&(e.x=this._viscousLimit(e.x,t.max.x)),e.y>t.max.y&&(e.y=this._viscousLimit(e.y,t.max.y)),this._draggable._newPos=this._draggable._startPos.add(e)}},_onPreDragWrap:function(){var e=this._worldWidth,t=Math.round(e/2),n=this._initialWorldOffset,r=this._draggable._newPos.x,i=(r-t+n)%e+t-n,a=(r+t+n)%e-t-n,o=Math.abs(i+n)<Math.abs(a+n)?i:a;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=o},_onDragEnd:function(e){var t=this._map,n=t.options,r=!n.inertia||e.noInertia||this._times.length<2;if(t.fire(`dragend`,e),r)t.fire(`moveend`);else{this._prunePositions(+new Date);var i=this._lastPos.subtract(this._positions[0]),a=(this._lastTime-this._times[0])/1e3,o=n.easeLinearity,s=i.multiplyBy(o/a),c=s.distanceTo([0,0]),l=Math.min(n.inertiaMaxSpeed,c),u=s.multiplyBy(l/c),d=l/(n.inertiaDeceleration*o),f=u.multiplyBy(-d/2).round();!f.x&&!f.y?t.fire(`moveend`):(f=t._limitOffset(f,t.options.maxBounds),T(function(){t.panBy(f,{duration:d,easeLinearity:o,noMoveStart:!0,animate:!0})}))}}});G.addInitHook(`addHandler`,`dragging`,ai),G.mergeOptions({keyboard:!0,keyboardPanDelta:80});var oi=Sn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(e){this._map=e,this._setPanDelta(e.options.keyboardPanDelta),this._setZoomDelta(e.options.zoomDelta)},addHooks:function(){var e=this._map._container;e.tabIndex<=0&&(e.tabIndex=`0`),U(e,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),W(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var e=document.body,t=document.documentElement,n=e.scrollTop||t.scrollTop,r=e.scrollLeft||t.scrollLeft;this._map._container.focus(),window.scrollTo(r,n)}},_onFocus:function(){this._focused=!0,this._map.fire(`focus`)},_onBlur:function(){this._focused=!1,this._map.fire(`blur`)},_setPanDelta:function(e){var t=this._panKeys={},n=this.keyCodes,r,i;for(r=0,i=n.left.length;r<i;r++)t[n.left[r]]=[-1*e,0];for(r=0,i=n.right.length;r<i;r++)t[n.right[r]]=[e,0];for(r=0,i=n.down.length;r<i;r++)t[n.down[r]]=[0,e];for(r=0,i=n.up.length;r<i;r++)t[n.up[r]]=[0,-1*e]},_setZoomDelta:function(e){var t=this._zoomKeys={},n=this.keyCodes,r,i;for(r=0,i=n.zoomIn.length;r<i;r++)t[n.zoomIn[r]]=e;for(r=0,i=n.zoomOut.length;r<i;r++)t[n.zoomOut[r]]=-e},_addHooks:function(){U(document,`keydown`,this._onKeyDown,this)},_removeHooks:function(){W(document,`keydown`,this._onKeyDown,this)},_onKeyDown:function(e){if(!(e.altKey||e.ctrlKey||e.metaKey)){var t=e.keyCode,n=this._map,r;if(t in this._panKeys){if(!n._panAnim||!n._panAnim._inProgress){if(r=this._panKeys[t],e.shiftKey&&(r=A(r).multiplyBy(3)),n.options.maxBounds&&(r=n._limitOffset(A(r),n.options.maxBounds)),n.options.worldCopyJump){var i=n.wrapLatLng(n.unproject(n.project(n.getCenter()).add(r)));n.panTo(i)}else n.panBy(r)}}else if(t in this._zoomKeys)n.setZoom(n.getZoom()+(e.shiftKey?3:1)*this._zoomKeys[t]);else if(t===27&&n._popup&&n._popup.options.closeOnEscapeKey)n.closePopup();else return;rn(e)}}});G.addInitHook(`addHandler`,`keyboard`,oi),G.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var si=Sn.extend({addHooks:function(){U(this._map._container,`wheel`,this._onWheelScroll,this),this._delta=0},removeHooks:function(){W(this._map._container,`wheel`,this._onWheelScroll,this)},_onWheelScroll:function(e){var t=cn(e),n=this._map.options.wheelDebounceTime;this._delta+=t,this._lastMousePos=this._map.mouseEventToContainerPoint(e),this._startTime||=+new Date;var r=Math.max(n-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(i(this._performZoom,this),r),rn(e)},_performZoom:function(){var e=this._map,t=e.getZoom(),n=this._map.options.zoomSnap||0;e._stop();var r=this._delta/(this._map.options.wheelPxPerZoomLevel*4),i=4*Math.log(2/(1+Math.exp(-Math.abs(r))))/Math.LN2,a=n?Math.ceil(i/n)*n:i,o=e._limitZoom(t+(this._delta>0?a:-a))-t;this._delta=0,this._startTime=null,o&&(e.options.scrollWheelZoom===`center`?e.setZoom(t+o):e.setZoomAround(this._lastMousePos,t+o))}});G.addInitHook(`addHandler`,`scrollWheelZoom`,si);var ci=600;G.mergeOptions({tapHold:B.touchNative&&B.safari&&B.mobile,tapTolerance:15});var li=Sn.extend({addHooks:function(){U(this._map._container,`touchstart`,this._onDown,this)},removeHooks:function(){W(this._map._container,`touchstart`,this._onDown,this)},_onDown:function(e){if(clearTimeout(this._holdTimeout),e.touches.length===1){var t=e.touches[0];this._startPos=this._newPos=new O(t.clientX,t.clientY),this._holdTimeout=setTimeout(i(function(){this._cancel(),this._isTapValid()&&(U(document,`touchend`,nn),U(document,`touchend touchcancel`,this._cancelClickPrevent),this._simulateEvent(`contextmenu`,t))},this),ci),U(document,`touchend touchcancel contextmenu`,this._cancel,this),U(document,`touchmove`,this._onMove,this)}},_cancelClickPrevent:function e(){W(document,`touchend`,nn),W(document,`touchend touchcancel`,e)},_cancel:function(){clearTimeout(this._holdTimeout),W(document,`touchend touchcancel contextmenu`,this._cancel,this),W(document,`touchmove`,this._onMove,this)},_onMove:function(e){var t=e.touches[0];this._newPos=new O(t.clientX,t.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(e,t){var n=new MouseEvent(e,{bubbles:!0,cancelable:!0,view:window,screenX:t.screenX,screenY:t.screenY,clientX:t.clientX,clientY:t.clientY});n._simulated=!0,t.target.dispatchEvent(n)}});G.addInitHook(`addHandler`,`tapHold`,li),G.mergeOptions({touchZoom:B.touch,bounceAtZoomLimits:!0});var ui=Sn.extend({addHooks:function(){H(this._map._container,`leaflet-touch-zoom`),U(this._map._container,`touchstart`,this._onTouchStart,this)},removeHooks:function(){Et(this._map._container,`leaflet-touch-zoom`),W(this._map._container,`touchstart`,this._onTouchStart,this)},_onTouchStart:function(e){var t=this._map;if(!(!e.touches||e.touches.length!==2||t._animatingZoom||this._zooming)){var n=t.mouseEventToContainerPoint(e.touches[0]),r=t.mouseEventToContainerPoint(e.touches[1]);this._centerPoint=t.getSize()._divideBy(2),this._startLatLng=t.containerPointToLatLng(this._centerPoint),t.options.touchZoom!==`center`&&(this._pinchStartLatLng=t.containerPointToLatLng(n.add(r)._divideBy(2))),this._startDist=n.distanceTo(r),this._startZoom=t.getZoom(),this._moved=!1,this._zooming=!0,t._stop(),U(document,`touchmove`,this._onTouchMove,this),U(document,`touchend touchcancel`,this._onTouchEnd,this),nn(e)}},_onTouchMove:function(e){if(!(!e.touches||e.touches.length!==2||!this._zooming)){var t=this._map,n=t.mouseEventToContainerPoint(e.touches[0]),r=t.mouseEventToContainerPoint(e.touches[1]),a=n.distanceTo(r)/this._startDist;if(this._zoom=t.getScaleZoom(a,this._startZoom),!t.options.bounceAtZoomLimits&&(this._zoom<t.getMinZoom()&&a<1||this._zoom>t.getMaxZoom()&&a>1)&&(this._zoom=t._limitZoom(this._zoom)),t.options.touchZoom===`center`){if(this._center=this._startLatLng,a===1)return}else{var o=n._add(r)._divideBy(2)._subtract(this._centerPoint);if(a===1&&o.x===0&&o.y===0)return;this._center=t.unproject(t.project(this._pinchStartLatLng,this._zoom).subtract(o),this._zoom)}this._moved||=(t._moveStart(!0,!1),!0),E(this._animRequest);var s=i(t._move,t,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=T(s,this,!0),nn(e)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,E(this._animRequest),W(document,`touchmove`,this._onTouchMove,this),W(document,`touchend touchcancel`,this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});G.addInitHook(`addHandler`,`touchZoom`,ui),G.BoxZoom=ri,G.DoubleClickZoom=ii,G.Drag=ai,G.Keyboard=oi,G.ScrollWheelZoom=si,G.TapHold=li,G.TouchZoom=ui,e.Bounds=j,e.Browser=B,e.CRS=ae,e.Canvas=Jr,e.Circle=dr,e.CircleMarker=lr,e.Class=D,e.Control=pn,e.DivIcon=zr,e.DivOverlay=Pr,e.DomEvent=un,e.DomUtil=qt,e.Draggable=Tn,e.Evented=re,e.FeatureGroup=er,e.GeoJSON=_r,e.GridLayer=Vr,e.Handler=Sn,e.Icon=nr,e.ImageOverlay=Or,e.LatLng=P,e.LatLngBounds=N,e.Layer=Zn,e.LayerGroup=Qn,e.LineUtil=Wn,e.Map=G,e.Marker=or,e.Mixin=Cn,e.Path=cr,e.Point=O,e.PolyUtil=kn,e.Polygon=hr,e.Polyline=pr,e.Popup=Fr,e.PosAnimation=dn,e.Projection=qn,e.Rectangle=ti,e.Renderer=qr,e.SVG=$r,e.SVGOverlay=Mr,e.TileLayer=Ur,e.Tooltip=Lr,e.Transformation=ce,e.Util=ee,e.VideoOverlay=Ar,e.bind=i,e.bounds=M,e.canvas=Yr,e.circle=fr,e.circleMarker=ur,e.control=mn,e.divIcon=Br,e.extend=n,e.featureGroup=tr,e.geoJSON=Er,e.geoJson=Dr,e.gridLayer=Hr,e.icon=rr,e.imageOverlay=kr,e.latLng=F,e.latLngBounds=ie,e.layerGroup=$n,e.map=fn,e.marker=sr,e.point=A,e.polygon=gr,e.polyline=mr,e.popup=Ir,e.rectangle=ni,e.setOptions=p,e.stamp=o,e.svg=ei,e.svgOverlay=Nr,e.tileLayer=Wr,e.tooltip=Rr,e.transformation=R,e.version=t,e.videoOverlay=jr;var di=window.L;e.noConflict=function(){return window.L=di,this},window.L=e}))}));function OS(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function kS(e,t){return t==null?function(t,n){let r=(0,z.useRef)(void 0);return r.current||=e(t,n),r}:function(n,r){let i=(0,z.useRef)(void 0);i.current||=e(n,r);let a=(0,z.useRef)(n),{instance:o}=i.current;return(0,z.useEffect)(function(){a.current!==n&&(t(o,n,a.current),a.current=n)},[o,n,t]),i}}function AS(e,t){(0,z.useEffect)(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){t.layerContainer?.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function jS(e){return function(t){let n=yS(),r=e(TS(t,n),n);return hS(n.map,t.attribution),wS(r.current,t.eventHandlers),AS(r.current,n),r}}function MS(e,t){return xS(jS(kS(e,t)))}function NS(e,t){return SS(ES(kS(e),t))}function PS(e,t){return CS(jS(kS(e,t)))}function FS(e,t,n){let{opacity:r,zIndex:i}=t;r!=null&&r!==n.opacity&&e.setOpacity(r),i!=null&&i!==n.zIndex&&e.setZIndex(i)}function IS(){return yS().map}var LS=c(DS(),1);function RS({bounds:e,boundsOptions:t,center:n,children:r,className:i,id:a,placeholder:o,style:s,whenReady:c,zoom:l,...u},d){let[f]=(0,z.useState)({className:i,id:a,style:s}),[p,m]=(0,z.useState)(null),h=(0,z.useRef)(void 0);(0,z.useImperativeHandle)(d,()=>p?.map??null,[p]);let g=(0,z.useCallback)(r=>{if(r!==null&&!h.current){let i=new LS.Map(r,u);h.current=i,n!=null&&l!=null?i.setView(n,l):e!=null&&i.fitBounds(e,t),c!=null&&i.whenReady(c),m(gS(i))}},[]);(0,z.useEffect)(()=>()=>{p?.map.remove()},[p]);let _=p?z.createElement(vS,{value:p},r):o??null;return z.createElement(`div`,{...f,ref:g},_)}var zS=(0,z.forwardRef)(RS),BS=MS(function({position:e,...t},n){let r=new LS.Marker(e,t);return OS(r,_S(n,{overlayContainer:r}))},function(e,t,n){t.position!==n.position&&e.setLatLng(t.position),t.icon!=null&&t.icon!==n.icon&&e.setIcon(t.icon),t.zIndexOffset!=null&&t.zIndexOffset!==n.zIndexOffset&&e.setZIndexOffset(t.zIndexOffset),t.opacity!=null&&t.opacity!==n.opacity&&e.setOpacity(t.opacity),e.dragging!=null&&t.draggable!==n.draggable&&(t.draggable===!0?e.dragging.enable():e.dragging.disable())}),VS=NS(function(e,t){return OS(new LS.Popup(e,t.overlayContainer),t)},function(e,t,{position:n},r){(0,z.useEffect)(function(){let{instance:i}=e;function a(e){e.popup===i&&(i.update(),r(!0))}function o(e){e.popup===i&&r(!1)}return t.map.on({popupopen:a,popupclose:o}),t.overlayContainer==null?(n!=null&&i.setLatLng(n),i.openOn(t.map)):t.overlayContainer.bindPopup(i),function(){t.map.off({popupopen:a,popupclose:o}),t.overlayContainer?.unbindPopup(),t.map.removeLayer(i)}},[e,t,r,n])}),HS=PS(function({url:e,...t},n){return OS(new LS.TileLayer(e,TS(t,n)),n)},function(e,t,n){FS(e,t,n);let{url:r}=t;r!=null&&r!==n.url&&e.setUrl(r)}),US=K.section`
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
`,WS=K.div`
    width: 100%;
    max-width: 1380px;
    margin: 0 auto;
  `,GS=K.div`
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
  `,KS=K.div`
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
`,qS=K.h2`
    margin: 0;

    color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

    font-size: 32px;
    font-weight: 600;
    line-height: 1.1;

    transition: color 0.3s ease;

    @media screen and (max-width: 563px) {
      font-size: 25px;
    }
  `,JS=K.p`
    margin: 8px 0 0;

    color: ${({$dark:e})=>e?`#999999`:`#858585`};

    font-size: 14px;
    font-weight: 400;

    transition: color 0.3s ease;

    @media screen and (max-width: 563px) {
      font-size: 12px;
    }
  `,YS=K.div`
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
  `,XS=K.div`
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
  `,ZS=K.div`
    position: absolute;

    top: 20px;
    right: 20px;

    z-index: 1000;

    display: flex;
    flex-direction: column;
    gap: 7px;
  `,QS=K.button`
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
`,$S=K.div`
    padding: 18px;

    background: ${({$dark:e})=>e?`#1c1c1c`:`#ffffff`};

    transition: background 0.3s ease;
  `,eC=K.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,tC=K.div`
  color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

  font-size: 18px;
  font-weight: 700;
`,nC=K.div`
  margin-top: 3px;

  color: ${({$dark:e})=>e?`#999999`:`#888888`};

  font-size: 11px;
`,rC=K.div`
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
  `,iC=K.img`
    width: 55px;
    height: 55px;
    object-fit: contain;
  `,aC=K.div`
    color: ${({$dark:e})=>e?`#ffffff`:`#111111`};

    font-size: 25px;
    font-weight: 700;
  `,oC=K.div`
    margin-top: 2px;

    color: #888888;

    font-size: 11px;
    text-transform: capitalize;
  `,sC=K.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 8px;
  margin-top: 10px;
`,cC=K.div`
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
`,lC=K.div`
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
  `,uC=(e,t,n)=>{let r=Math.round(e.temperature);return LS.default.divIcon({className:`weather-marker-wrapper`,html:`
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
    `,iconSize:[150,58],iconAnchor:[75,58],popupAnchor:[0,-58]})};function dC({cities:e}){let t=IS();return(0,z.useEffect)(()=>{if(!e.length)return;if(e.length===1){t.setView([Number(e[0].latitude),Number(e[0].longitude)],8,{animate:!0});return}let n=LS.default.latLngBounds(e.map(e=>[Number(e.latitude),Number(e.longitude)]));t.fitBounds(n,{padding:[80,80],maxZoom:8,animate:!0})},[e,t]),null}function fC({accentColor:e}){let t=IS();return(0,q.jsxs)(ZS,{children:[(0,q.jsx)(QS,{type:`button`,$accentColor:e,onClick:()=>t.zoomIn(),children:`+`}),(0,q.jsx)(QS,{type:`button`,$accentColor:e,onClick:()=>t.zoomOut(),children:`−`})]})}function pC({cities:e,darkMode:t,accentColor:n=`#ffb36c`}){let r=e.filter(e=>Number.isFinite(Number(e.latitude))&&Number.isFinite(Number(e.longitude)));return(0,q.jsx)(US,{$dark:t,$accentColor:n,children:(0,q.jsxs)(WS,{children:[(0,q.jsxs)(GS,{children:[(0,q.jsxs)(`div`,{children:[(0,q.jsxs)(KS,{$dark:t,$accentColor:n,children:[(0,q.jsx)(`span`,{children:`●`}),`Interactive map`]}),(0,q.jsx)(qS,{$dark:t,children:`Weather Map`}),(0,q.jsx)(JS,{$dark:t,children:`Explore weather conditions in your cities`})]}),r.length>0&&(0,q.jsxs)(YS,{$dark:t,$accentColor:n,children:[(0,q.jsx)(`span`,{children:r.length}),`My cities`]})]}),r.length===0?(0,q.jsx)(lC,{$dark:t,$accentColor:n,children:(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`span`,{children:`📍`}),(0,q.jsx)(`strong`,{children:`No cities on the map`}),(0,q.jsx)(`p`,{children:`Add a city to see its weather here`})]})}):(0,q.jsx)(XS,{$dark:t,$accentColor:n,children:(0,q.jsxs)(zS,{center:[50.4501,30.5234],zoom:5,scrollWheelZoom:!0,zoomControl:!1,style:{width:`100%`,height:`100%`},children:[(0,q.jsx)(HS,{attribution:`© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>`,url:`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}),(0,q.jsx)(dC,{cities:r}),(0,q.jsx)(fC,{accentColor:n}),r.map(e=>(0,q.jsx)(BS,{position:[Number(e.latitude),Number(e.longitude)],icon:uC(e,t,n),children:(0,q.jsx)(VS,{children:(0,q.jsxs)($S,{$dark:t,$accentColor:n,children:[(0,q.jsx)(eC,{children:(0,q.jsxs)(`div`,{children:[(0,q.jsx)(tC,{$dark:t,children:e.name}),(0,q.jsx)(nC,{$dark:t,children:e.country})]})}),(0,q.jsxs)(rC,{$dark:t,$accentColor:n,children:[(0,q.jsx)(iC,{src:`https://openweathermap.org/img/wn/${e.icon}@2x.png`,alt:e.description}),(0,q.jsxs)(`div`,{children:[(0,q.jsxs)(aC,{$dark:t,children:[Math.round(e.temperature),`°C`]}),(0,q.jsx)(oC,{children:e.description})]})]}),(0,q.jsxs)(sC,{children:[(0,q.jsxs)(cC,{$dark:t,children:[(0,q.jsx)(`span`,{children:`🌡️`}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`small`,{children:`Temperature`}),(0,q.jsxs)(`strong`,{children:[Math.round(e.temperature),`°C`]})]})]}),(0,q.jsxs)(cC,{$dark:t,children:[(0,q.jsx)(`span`,{children:`📍`}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`small`,{children:`Location`}),(0,q.jsx)(`strong`,{children:e.country})]})]})]})]})})},e.id))]})})]})})}var mC=K.div`
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
`,hC=K.div`
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
`,gC=K.button`
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
`,_C=K.h2`
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
`,vC=K.p`
  margin: 0 0 20px;

  color: ${({theme:e})=>e.muted};

  font-size: 13px;
  line-height: 1.5;

  text-align: center;

  transition:
    color 0.3s ease;
`,yC=K.input`
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
`,bC=K.div`
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
`,xC=K.button`
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
`,SC=K.span`
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

  ${xC}:hover & {
    transform: scale(1.08);

    box-shadow:
      0 0 12px
      ${({$color:e})=>`${e}66`};
  }
`,CC=K.span`
  color: ${({theme:e})=>e.text};

  font-size: 13px;
  font-weight: 500;

  transition:
    color 0.25s ease;
`,wC=K.span`
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
`,TC=K.div`
  padding: 14px;

  color: ${({theme:e})=>e.muted};

  font-size: 13px;

  text-align: center;

  transition:
    color 0.25s ease;
`,EC=K.button`
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
`,DC=[{name:`Orange`,value:`#ffb36c`},{name:`Blue`,value:`#6caeff`},{name:`Light Blue`,value:`#87cefa`},{name:`Dark Blue`,value:`#4169e1`},{name:`Purple`,value:`#a66cff`},{name:`Violet`,value:`#8a2be2`},{name:`Green`,value:`#6cff91`},{name:`Dark Green`,value:`#228b22`},{name:`Red`,value:`#ff6c6c`},{name:`Pink`,value:`#ff6cba`},{name:`Yellow`,value:`#ffd66c`},{name:`Cyan`,value:`#6ce5ff`},{name:`Black`,value:`#111111`},{name:`White`,value:`#ffffff`}];function OC({onClose:e,onColorChange:t,currentColor:n}){let[r,i]=(0,z.useState)(n||`#ffb36c`),[a,o]=(0,z.useState)(``),s=a.trim()===``?DC:DC.filter(e=>e.name.toLowerCase().includes(a.toLowerCase())),c=e=>{i(e.value),o(e.name)};return(0,q.jsx)(mC,{onClick:t=>{t.target===t.currentTarget&&e()},children:(0,q.jsxs)(hC,{children:[(0,q.jsx)(gC,{type:`button`,onClick:e,"aria-label":`Close`,children:(0,q.jsx)(tr,{})}),(0,q.jsx)(_C,{children:`Choose your color`}),(0,q.jsx)(vC,{children:`Pick the accent color for your website.`}),(0,q.jsx)(yC,{type:`text`,placeholder:`Type a color...`,value:a,onChange:e=>{o(e.target.value)}}),(0,q.jsx)(bC,{children:s.length>0?s.map(e=>(0,q.jsxs)(xC,{type:`button`,$selected:r===e.value,onClick:()=>c(e),children:[(0,q.jsx)(SC,{$color:e.value}),(0,q.jsx)(CC,{children:e.name}),r===e.value&&(0,q.jsx)(wC,{children:(0,q.jsx)(pr,{})})]},e.name)):(0,q.jsx)(TC,{children:`No colors found`})}),(0,q.jsx)(EC,{type:`button`,onClick:()=>{r&&(localStorage.setItem(`accentColor`,r),t&&t(r),e())},children:`Apply color`})]})})}var kC=K.button`
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
`,AC=K.span`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  ${kC}:hover & {
    transform: translateY(-2px);
  }
`;function jC(){let[e,t]=(0,z.useState)(!1);return(0,z.useEffect)(()=>{let e=()=>{t(window.scrollY>400)};return window.addEventListener(`scroll`,e),e(),()=>{window.removeEventListener(`scroll`,e)}},[]),(0,q.jsx)(kC,{type:`button`,$visible:e,onClick:()=>{window.scrollTo({top:0,behavior:`smooth`})},"aria-label":`Back to top`,children:(0,q.jsx)(AC,{children:(0,q.jsx)(hr,{})})})}var MC=Fn`
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
`,NC=K.div`
  min-height: 100vh;

  background: ${({theme:e})=>e.background};

  color: ${({theme:e})=>e.text};

  transition:
    background-color 0.6s ease,
    color 0.6s ease;

  overflow-x: hidden;
`;K.main`
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
`;var PC={background:`#ffffff`,card:`#e9e9e9`,secondary:`#dcdcdc`,text:`#111111`,muted:`#666666`},FC={background:`#111111`,card:`#222222`,secondary:`#2d2d2d`,text:`#ffffff`,muted:`#b5b5b5`};function IC(){let[e,t]=(0,z.useState)(null),[n,r]=(0,z.useState)(null),[i,a]=(0,z.useState)([]),[o,s]=(0,z.useState)([]),[c,l]=(0,z.useState)(()=>localStorage.getItem(`temperatureUnit`)||`C`),[u,d]=(0,z.useState)(()=>localStorage.getItem(`theme`)===`dark`),[f,p]=(0,z.useState)(()=>localStorage.getItem(`accentColor`)||`#ffb36c`),[m,h]=(0,z.useState)(()=>!localStorage.getItem(`accentColor`)),[g,_]=(0,z.useState)(!1),[v,y]=(0,z.useState)(!1),[b,x]=(0,z.useState)(!1);(0,z.useEffect)(()=>{let e=localStorage.getItem(`weatherUser`),n=localStorage.getItem(`weatherAvatar`),i=localStorage.getItem(`weatherFavorites`);if(e&&t(JSON.parse(e)),n&&r(n),i){let e=JSON.parse(i);s(e),a(e)}_(!0)},[]),(0,z.useEffect)(()=>{g&&localStorage.setItem(`weatherFavorites`,JSON.stringify(o))},[o,g]);let S=e=>{localStorage.setItem(`weatherUser`,JSON.stringify(e)),t(e),y(!1)},C=e=>{localStorage.setItem(`weatherUser`,JSON.stringify(e)),t(e)},w=e=>{localStorage.setItem(`weatherAvatar`,e),r(e)},T=()=>{localStorage.removeItem(`weatherUser`),localStorage.removeItem(`weatherAvatar`),t(null),r(null),x(!1)},E=()=>{y(!0)},ee=()=>{y(!1)},D=()=>{e?x(!0):y(!0)},te=()=>{x(!1)},ne=e=>{a(t=>t.some(t=>t.id===e.id)?t:[...t,e])},re=()=>{d(e=>{let t=!e;return localStorage.setItem(`theme`,t?`dark`:`light`),t})},O=()=>{h(!0)},k=()=>{h(!1)},A=e=>{p(e),localStorage.setItem(`accentColor`,e)},j=e=>{a(t=>t.filter(t=>t.id!==e)),s(t=>t.filter(t=>t.id!==e))},M=e=>{s(t=>{if(t.some(t=>t.id===e)){let n=t.filter(t=>t.id!==e);return localStorage.setItem(`weatherFavorites`,JSON.stringify(n)),n}let n=i.find(t=>t.id===e);if(!n)return t;let r=[...t,n];return localStorage.setItem(`weatherFavorites`,JSON.stringify(r)),r})},N=async e=>{try{let t=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e.latitude}&lon=${e.longitude}&appid=b5ad39bd417cd476cc1c17d9b2b53496&units=metric`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json(),r={...e,temperature:n.main.temp,icon:n.weather[0].icon,description:n.weather[0].description,timezone:n.timezone};a(t=>t.map(t=>t.id===e.id?r:t)),s(t=>t.map(t=>t.id===e.id?r:t))}catch(e){console.error(`Помилка оновлення погоди:`,e)}},ie={...u?FC:PC,button:f,accent:f};return(0,q.jsxs)(Cn,{theme:ie,children:[(0,q.jsx)(MC,{}),(0,q.jsxs)(NC,{children:[(0,q.jsx)(Br,{user:e,avatar:n,onSignUp:E,onProfile:D,darkMode:u,onToggle:re}),(0,q.jsx)(ci,{onCityAdd:ne}),(0,q.jsx)($p,{cities:i,favorites:o,onRefresh:N,onFavorite:M,onDelete:j,darkMode:u,userColor:f}),(0,q.jsx)(pC,{cities:i,darkMode:u,accentColor:f}),(0,q.jsx)(hm,{darkMode:u,accentColor:f}),(0,q.jsx)(Am,{darkMode:u,accentColor:f}),(0,q.jsx)(Gm,{darkMode:u,accentColor:f}),v&&(0,q.jsx)(Wx,{darkMode:u,onClose:ee,onSubmit:S}),b&&e&&(0,q.jsx)(mS,{user:e,avatar:n,onClose:te,onUserUpdate:C,onAvatarChange:w,onLogout:T,darkMode:u,onOpenColor:O,accentColor:f}),m&&(0,q.jsx)(OC,{currentColor:f,onColorChange:A,onClose:k}),(0,q.jsx)(jC,{})]})]})}(0,ze.createRoot)(document.getElementById(`root`)).render((0,q.jsx)(z.StrictMode,{children:(0,q.jsx)(IC,{})}));