var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function te(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(te(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!te(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=te,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,te());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?te():S=!1}}}var te;if(typeof y==`function`)te=function(){y(ee)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=ee,te=function(){re.postMessage(null)}}else te=function(){_(ee,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,te()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),te=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case te:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function pe(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function k(e,t){de++,ue[de]=e.current,e.current=t}var me=fe(null),he=fe(null),ge=fe(null),_e=fe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}pe(me),k(me,e)}function ye(){pe(me),pe(he),pe(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Ud(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(pe(me),pe(he)),_e.current===e&&(pe(_e),$f._currentValue=le)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=O.p;return e===0?(e=window.event,e===void 0?32:hp(e.type)):e}function pt(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ff(e);e!==null;){if(n=e[ht])return n;e=ff(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ot(e){e[St]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return ke.call(Ft,e)?!0:ke.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[gt]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(xu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),A=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Xn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=On(h({},kn,{newState:0,oldState:0})),$n=[9,13,27,32],er=vn&&`CompositionEvent`in window,tr=null;vn&&`documentMode`in document&&(tr=document.documentMode);var nr=vn&&`TextEvent`in window&&!tr,rr=vn&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=wn(),Cn=Sn=xn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Dd(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function j(e){bd(e,0)}function gr(e){if(Wt(Et(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(vn){var yr;if(vn){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){mr&&(mr.detachEvent(`onpropertychange`,Cr),hr=mr=null)}function Cr(e){if(e.propertyName===`value`&&gr(hr)){var t=[];pr(t,hr,e,dn(e)),gn(j,t)}}function wr(e,t,n){e===`focusin`?(Sr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(hr)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ir=vn&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function Vr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==Gt(r)||(r=Lr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ar(zr,r)||(zr=r,r=Dd(Rr,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ur={animationend:Hr(`Animation`,`AnimationEnd`),animationiteration:Hr(`Animation`,`AnimationIteration`),animationstart:Hr(`Animation`,`AnimationStart`),transitionrun:Hr(`Transition`,`TransitionRun`),transitionstart:Hr(`Transition`,`TransitionStart`),transitioncancel:Hr(`Transition`,`TransitionCancel`),transitionend:Hr(`Transition`,`TransitionEnd`)},Wr={},Gr={};vn&&(Gr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),`TransitionEvent`in window||delete Ur.transitionend.transition);function Kr(e){if(Wr[e])return Wr[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gr)return Wr[e]=t[n];return e}var qr=Kr(`animationend`),Jr=Kr(`animationiteration`),Yr=Kr(`animationstart`),Xr=Kr(`transitionrun`),Zr=Kr(`transitionstart`),Qr=Kr(`transitioncancel`),$r=Kr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),jt(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),fi(e)}function ui(e,t){return ci(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<fu)throw fu=0,pu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,t,n,r){return new mi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _i(e,t){var n=e.alternate;return n===null?(n=hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)gi(e)&&(s=1);else if(typeof e==`string`)s=Wf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=hi(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return bi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=hi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=hi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=hi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case te:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=hi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function bi(e,t,n,r){return e=hi(7,e,r,t),e.lanes=n,e}function xi(e,t,n){return e=hi(6,e,null,t),e.lanes=n,e}function Si(e){var t=hi(18,null,null,0);return t.stateNode=e,t}function Ci(e,t,n){return t=hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wi=new WeakMap;function Ti(e,t){if(typeof e==`object`&&e){var n=wi.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},wi.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Ei=[],Di=0,Oi=null,ki=0,Ai=[],ji=0,Mi=null,Ni=1,Pi=``;function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Oi,Oi=e,ki=t}function M(e,t,n){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Mi=e;var r=Ni;e=Pi;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ni=1<<32-Ke(t)+i|n<<i|r,Pi=a+e}else Ni=1<<a|n<<i|r,Pi=e}function Ii(e){e.return!==null&&(Fi(e,1),M(e,1,0))}function N(e){for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null;for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Pi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null}function Li(e,t){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Ni=t.id,Pi=t.overflow,Mi=e}var P=null,F=null,I=!1,L=null,R=!1,Ri=Error(i(519));function zi(e){throw Gi(Ti(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ri}function Bi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Z(`cancel`,t),Z(`close`,t);break;case`iframe`:case`object`:case`embed`:Z(`load`,t);break;case`video`:case`audio`:for(n=0;n<vd.length;n++)Z(vd[n],t);break;case`source`:Z(`error`,t);break;case`img`:case`image`:case`link`:Z(`error`,t),Z(`load`,t);break;case`details`:Z(`toggle`,t);break;case`input`:Z(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Z(`invalid`,t);break;case`textarea`:Z(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Nd(t.textContent,n)?(r.popover!=null&&(Z(`beforetoggle`,t),Z(`toggle`,t)),r.onScroll!=null&&Z(`scroll`,t),r.onScrollEnd!=null&&Z(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||zi(e,!0)}function Vi(e){for(P=e.return;P;)switch(P.tag){case 5:case 31:case 13:R=!1;return;case 27:case 3:R=!0;return;default:P=P.return}}function Hi(e){if(e!==P)return!1;if(!I)return Vi(e),I=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Wd(e.type,e.memoizedProps)),n=!n),n&&F&&zi(e),Vi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=df(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=df(e)}else t===27?(t=F,Qd(e.type)?(e=uf,uf=null,F=e):F=t):F=P?lf(e.stateNode.nextSibling):null;return!0}function Ui(){F=P=null,I=!1}function Wi(){var e=L;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),L=null),e}function Gi(e){L===null?L=[e]:L.push(e)}var Ki=fe(null),qi=null,Ji=null;function Yi(e,t,n){k(Ki,t._currentValue),t._currentValue=n}function Xi(e){e._currentValue=Ki.current,pe(Ki)}function Zi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Zi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Zi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function $i(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;kr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[$f]:e.push($f))}a=a.return}e!==null&&Qi(t,e,n,r),t.flags|=262144}function ea(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ta(e){qi=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function na(e){return ia(qi,e)}function ra(e,t){return qi===null&&ta(e),ia(e,t)}function ia(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ji===null){if(e===null)throw Error(i(308));Ji=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ji=Ji.next=t;return n}var aa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},oa=t.unstable_scheduleCallback,sa=t.unstable_NormalPriority,z={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ca(){return{controller:new aa,data:new Map,refCount:0}}function la(e){e.refCount--,e.refCount===0&&oa(sa,function(){e.controller.abort()})}var ua=null,da=0,fa=0,pa=null;function ma(e,t){if(ua===null){var n=ua=[];da=0,fa=fd(),pa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return da++,t.then(ha,ha),t}function ha(){if(--da===0&&ua!==null){pa!==null&&(pa.status=`fulfilled`);var e=ua;ua=null,fa=0,pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ga(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var _a=D.S;D.S=function(e,t){tu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&ma(e,t),_a!==null&&_a(e,t)};var va=fe(null);function ya(){var e=va.current;return e===null?K.pooledCache:e}function ba(e,t){t===null?k(va,va.current):k(va,t.pool)}function xa(){var e=ya();return e===null?null:{parent:z._currentValue,pool:e}}var Sa=Error(i(460)),Ca=Error(i(474)),wa=Error(i(542)),Ta={then:function(){}};function Ea(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Da(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ja(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ja(e),e}throw ka=t,Sa}}function Oa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ka=e,Sa):e}}var ka=null;function Aa(){if(ka===null)throw Error(i(459));var e=ka;return ka=null,e}function ja(e){if(e===Sa||e===wa)throw Error(i(483))}var Ma=null,Na=0;function Pa(e){var t=Na;return Na+=1,Ma===null&&(Ma=[]),Da(Ma,e,t)}function Fa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ia(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function La(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=_i(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===te&&Oa(i)===t.type)?(t=a(t,n.props),Fa(t,n),t.return=e,t):(t=yi(n.type,n.key,n.props,null,e.mode,r),Fa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=bi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=yi(t.type,t.key,t.props,null,e.mode,n),Fa(n,t),n.return=e,n;case v:return t=Ci(t,e.mode,n),t.return=e,t;case te:return t=Oa(t),f(e,t,n)}if(ce(t)||ae(t))return t=bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Pa(t),n);if(t.$$typeof===C)return f(e,ra(e,t),n);Ia(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case te:return n=Oa(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Pa(n),r);if(n.$$typeof===C)return p(e,t,ra(e,n),r);Ia(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case te:return r=Oa(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Pa(r),i);if(r.$$typeof===C)return m(e,t,n,ra(t,r),i);Ia(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),I&&Fi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return I&&Fi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),I&&Fi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),I&&Fi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return I&&Fi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),I&&Fi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===te&&Oa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Fa(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=bi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=yi(o.type,o.key,o.props,null,e.mode,c),Fa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Ci(o,e.mode,c),c.return=e,e=c}return s(e);case te:return o=Oa(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Pa(o),c);if(o.$$typeof===C)return b(e,r,ra(e,o),c);Ia(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=xi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Na=0;var i=b(e,t,n,r);return Ma=null,i}catch(t){if(t===Sa||t===wa)throw t;var a=hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ra=La(!0),za=La(!1),Ba=!1;function Va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ha(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return ci(e,r,t,n),fi(e)}function Ga(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var qa=!1;function Ja(){if(qa){var e=pa;if(e!==null)throw e}}function Ya(e,t,n,r){qa=!1;var i=e.updateQueue;Ba=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===fa&&(qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ba=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function Xa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Za(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xa(n[e],t)}var Qa=fe(null),$a=fe(0);function eo(e,t){e=Wl,k($a,e),k(Qa,t),Wl=e|t.baseLanes}function to(){k($a,Wl),k(Qa,Qa.current)}function no(){Wl=$a.current,pe(Qa),pe($a)}var ro=fe(null),io=null;function ao(e){var t=e.alternate;k(B,B.current&1),k(ro,e),io===null&&(t===null||Qa.current!==null||t.memoizedState!==null)&&(io=e)}function oo(e){k(B,B.current),k(ro,e),io===null&&(io=e)}function so(e){e.tag===22?(k(B,B.current),k(ro,e),io===null&&(io=e)):co(e)}function co(){k(B,B.current),k(ro,ro.current)}function lo(e){pe(ro),io===e&&(io=null),pe(B)}var B=fe(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fo=0,V=null,H=null,po=null,mo=!1,ho=!1,go=!1,_o=0,vo=0,yo=null,bo=0;function xo(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return fo=a,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Bs:Vs,go=!1,a=n(r,i),go=!1,ho&&(a=To(t,n,r,i)),wo(e),a}function wo(e){D.H=zs;var t=H!==null&&H.next!==null;if(fo=0,po=H=V=null,mo=!1,vo=0,yo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ea(e)&&(ic=!0))}function To(e,t,n,r){V=e;var a=0;do{if(ho&&(yo=null),vo=0,ho=!1,25<=a)throw Error(i(301));if(a+=1,po=H=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Hs,o=t(n,r)}while(ho);return o}function Eo(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(H===null?null:H.memoizedState)!==e&&(V.flags|=1024),t}function Do(){var e=_o!==0;return _o=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(mo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mo=!1}fo=0,po=H=V=null,ho=!1,vo=_o=0,yo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return po===null?V.memoizedState=po=e:po=po.next=e,po}function jo(){if(H===null){var e=V.alternate;e=e===null?null:e.memoizedState}else e=H.next;var t=po===null?V.memoizedState:po.next;if(t!==null)po=t,H=e;else{if(e===null)throw V.alternate===null?Error(i(467)):Error(i(310));H=e,e={memoizedState:H.memoizedState,baseState:H.baseState,baseQueue:H.baseQueue,queue:H.queue,next:null},po===null?V.memoizedState=po=e:po=po.next=e}return po}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=vo;return vo+=1,yo===null&&(yo=[]),e=Da(yo,e,t),t=V,(po===null?t.memoizedState:po.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return na(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=V.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=V.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),V.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(jo(),H,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(fo&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===fa&&(d=!0);else if((fo&p)===p){u=u.next,p===fa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,V.lanes|=p,Kl|=p;f=u.action,go&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,V.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!kr(o,e.memoizedState)&&(ic=!0,d&&(n=pa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=jo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=V,a=jo(),o=I;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!kr((H||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||po!==null&&po.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||fo&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t=Mo(),V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function Go(e){var t=ui(e,2);t!==null&&gu(t,e,2)}function Ko(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),go){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,H,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(I){var n=K.formState;if(n!==null){a:{var r=V;if(I){if(F){b:{for(var i=F,a=R;i.nodeType!==8;){if(!a){i=null;break b}if(i=lf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){F=lf(i.nextSibling),r=i.data===`F!`;break a}}zi(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,V,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,V,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,V,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(jo(),H,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===Sa?wa:e}else r=t;t=jo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(V.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=jo(),n=H;if(n!==null)return rs(t,n,e);jo(),t=t.memoizedState,n=jo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=V.updateQueue,t===null&&(t=Mo(),V.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return jo().memoizedState}function cs(e,t,n,r){var i=Ao();V.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=jo();r=r===void 0?null:r;var a=i.memoizedState.inst;H!==null&&r!==null&&So(r,H.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(V.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){V.flags|=4;var t=V.updateQueue;if(t===null)t=Mo(),V.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=jo().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),go){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||fo&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=hu(),V.lanes|=e,Kl|=e,n)}function Ss(e,t,n,r){return kr(n,t)?n:Qa.current===null?!(fo&42)||fo&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=hu(),V.lanes|=e,Kl|=e,t):(e=xs(e,n,r),kr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Fs(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,ga(c,r),mu(e)):Ps(e,t,r,mu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},mu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,le,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},mu())}function Os(){return na($f)}function ks(){return jo().memoizedState}function As(){return jo().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=mu();e=Ua(n);var r=Wa(t,e,n);r!==null&&(gu(r,t,n),Ga(r,t,n)),t={cache:ca()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=mu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=li(e,t,n,r),n!==null&&(gu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,mu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return gu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:fd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=li(e,n,r,2),t!==null&&gu(t,e,2)}function Is(e){var t=e.alternate;return e===V||t!==null&&t===V}function Ls(e,t){ho=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var zs={readContext:na,use:Po,useCallback:xo,useContext:xo,useEffect:xo,useImperativeHandle:xo,useLayoutEffect:xo,useInsertionEffect:xo,useMemo:xo,useReducer:xo,useRef:xo,useState:xo,useDebugValue:xo,useDeferredValue:xo,useTransition:xo,useSyncExternalStore:xo,useId:xo,useHostTransitionStatus:xo,useFormState:xo,useActionState:xo,useOptimistic:xo,useMemoCache:xo,useCacheRefresh:xo};zs.useEffectEvent=xo;var Bs={readContext:na,use:Po,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:na,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(go){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(go){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,V,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(Ao(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,V,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=V,a=Ao();if(I){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=K.identifierPrefix;if(I){var n=Pi,r=Ni;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=_o++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=bo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,V,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Ao().memoizedState=js.bind(null,V)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:na,use:Po,useCallback:ys,useContext:na,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(jo(),H.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(jo(),H,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:na,use:Po,useCallback:ys,useContext:na,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=jo();return H===null?xs(n,e,t):Ss(n,H.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=jo();return H===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,H,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Ua(r);i.payload=t,n!=null&&(i.callback=n),t=Wa(e,i,r),t!==null&&(gu(t,e,r),Ga(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Ua(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Wa(e,i,r),t!==null&&(gu(t,e,r),Ga(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mu(),r=Ua(n);r.tag=2,t!=null&&(r.callback=t),t=Wa(e,r,n),t!==null&&(gu(t,e,n),Ga(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ri(e)}function Ys(e){console.error(e)}function Xs(e){ri(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ua(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ua(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&$i(t,n,a,!0),n=ro.current,n!==null){switch(n.tag){case 31:case 13:return io===null?Ou():n.alternate===null&&Gl===0&&(Gl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ta?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ku(e,r,a)),!1;case 22:return n.flags|=65536,r===Ta?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ku(e,r,a)),!1}throw Error(i(435,n.tag))}return Ku(e,r,a),Ou(),!1}if(I)return t=ro.current,t===null?(r!==Ri&&(t=Error(i(423),{cause:r}),Gi(Ti(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ti(r,n),a=$s(e.stateNode,r,a),Ka(e,a),Gl!==4&&(Gl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ri&&(e=Error(i(422),{cause:r}),Gi(Ti(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ti(o,n),Zl===null?Zl=[o]:Zl.push(o),Gl!==4&&(Gl=2),t===null)return!0;r=Ti(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ka(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ka(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?za(t,null,n,r):Ra(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ta(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(I&&s&&Ii(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=_i(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref){if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ba(t,a===null?null:a.cachePool),a===null?to():eo(t,a),so(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ba(t,null),to(),co(t)):(ba(t,a.cachePool),eo(t,a),co(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=ya();return a=a===null?null:{parent:z._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ba(t,null),to(),so(t),e!==null&&$i(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ra(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,lo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(I){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(oo(t),(e=F)?(e=af(e,R),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,P=t,F=null)):e=null,e===null)throw zi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(oo(t),a){if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(ic||$i(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=lt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ui(e,s),gu(r,e,s),rc;Ou(),t=pc(e,t,n)}else e=o.treeContext,F=lf(s.nextSibling),P=t,I=!0,L=null,R=!1,e!==null&&Li(t,e),t=fc(t,r),t.flags|=4096;return t}return e=_i(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return ta(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(I&&r&&Ii(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return ta(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!ic?(Oo(e,t,a),Ac(e,t,a)):(I&&r&&Ii(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(ta(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=na(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Va(t),o=n.contextType,a.context=typeof o==`object`&&o?na(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Ya(t,r,a,i),Ja(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=na(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ba=!1;var f=t.memoizedState;a.state=f,Ya(t,r,a,i),Ja(),l=t.memoizedState,s||f!==l||Ba?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ba||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ha(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=na(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ba=!1,f=t.memoizedState,a.state=f,Ya(t,r,a,i),Ja();var p=t.memoizedState;o!==d||f!==p||Ba||e!==null&&e.dependencies!==null&&ea(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ba||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ea(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ra(t,e.child,null,i),t.child=Ra(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Ui(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:xa()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(B.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(I){if(a?ao(t):co(t),(e=F)?(e=af(e,R),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,P=t,F=null)):e=null,e===null)throw zi(t);return sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(co(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=bi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(ao(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(ao(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(co(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=bi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ra(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(co(t),t.child=e.child,t.flags|=128,t=null);else if(ao(t),sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Gi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||$i(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=lt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),gu(s,e,r),rc;of(c)||Ou(),t=Ec(e,t,n)}else of(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,F=lf(c.nextSibling),P=t,I=!0,L=null,R=!1,e!==null&&Li(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(co(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=_i(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=bi(c,a,n,null),c.flags|=2):c=_i(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=xa():(l=z._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(ao(t),n=e.child,e=n.sibling,n=_i(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=hi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ra(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=B.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,k(B,o),ac(e,t,r,n),r=I?ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if($i(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ea(e)))}function Mc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Yi(t,z,e.memoizedState.cache),Ui();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Yi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,oo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ao(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(ao(t),t.flags|=128,null);ao(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=($i(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(B,B.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Yi(t,z,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}}else ic=!1,I&&t.flags&1048576&&M(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Oa(t.elementType),t.type=e,typeof e==`function`)gi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}if(a===ee){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ha(e,t),Ya(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Yi(t,z,r),r!==o.cache&&Qi(t,[z],n,!0),Ja(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}if(r!==a){a=Ti(Error(i(424)),t),Gi(a),t=yc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(F=lf(e.firstChild),P=t,I=!0,L=null,R=!0,n=za(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ui(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=Af(t.type,null,t.pendingProps,null))?t.memoizedState=n:I||(n=t.type,e=t.pendingProps,r=Vd(ge.current).createElement(n),r[ht]=t,r[gt]=e,Fd(r,n,e),Ot(r),t.stateNode=r):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&I&&(r=t.stateNode=pf(t.type,t.pendingProps,ge.current),P=t,R=!0,a=F,Qd(t.type)?(uf=a,F=lf(r.firstChild)):F=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&I&&((a=r=F)&&(r=nf(r,t.type,t.pendingProps,R),r===null?a=!1:(t.stateNode=r,P=t,F=lf(r.firstChild),R=!1,a=!0)),a||zi(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),$f._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&I&&((e=n=F)&&(n=rf(n,t.pendingProps,R),n===null?e=!1:(t.stateNode=n,P=t,F=null,e=!0)),e||zi(t)),null;case 13:return Cc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ra(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Yi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ta(t),a=na(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return ta(t),r=na(z),e===null?(a=ya(),a===null&&(a=K,o=ca(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Va(t),Yi(t,z,a)):((e.lanes&n)!==0&&(Ha(e,t),Ya(t,null,null,n),Ja()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Yi(t,z,r),r!==a.cache&&Qi(t,[z],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Yi(t,z,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Tu())e.flags|=8192;else throw ka=Ta,Ca}}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t)){if(Tu())e.flags|=8192;else throw ka=Ta,Ca}}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Xl|=t)}function Rc(e,t){if(!I)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(N(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Xi(z),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Hi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wi())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=me.current,Hi(t)?Bi(t,e):(e=pf(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=me.current,Hi(t))Bi(t,o);else{var s=Vd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ht]=t,o[gt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Fd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Hi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=P,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Nd(e.nodeValue,n)),e||zi(t,!0)}else e=Vd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Hi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ht]=t}else Ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(lo(t),t):(lo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ht]=t}else Ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(lo(t),t):(lo(t),null)}return lo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return ye(),e===null&&Cd(t.stateNode.containerInfo),U(t),null;case 10:return Xi(t.type),U(t),null;case 19:if(pe(B),r=t.memoizedState,r===null)return U(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Rc(r,!1);else{if(Gl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=uo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vi(n,e),n=n.sibling;return k(B,B.current&1|2),I&&Fi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>nu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=uo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!I)return U(t),null}else 2*Pe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=B.current,k(B,a?n&1|2:n&1),I&&Fi(t,r.treeForkCount),e);case 22:case 23:return lo(t),no(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&pe(va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Xi(z),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(N(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xi(z),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(lo(t),t.alternate===null)throw Error(i(340));Ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(lo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(B),null;case 4:return ye(),null;case 10:return Xi(t.type),null;case 22:case 23:return lo(t),no(),e!==null&&pe(va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xi(z),null;case 25:return null;default:return null}}function Vc(e,t){switch(N(t),t.tag){case 3:Xi(z),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&lo(t);break;case 13:lo(t);break;case 19:pe(B);break;case 10:Xi(t.type);break;case 22:case 23:lo(t),no(),e!==null&&pe(va);break;case 24:Xi(z)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){X(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){X(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){X(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Za(t,n)}catch(t){X(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){X(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){X(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){X(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){X(e,t,n)}else n.current=null}}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){X(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[gt]=t}catch(t){X(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fd(t,r,n),t[ht]=e,t[gt]=n}catch(t){X(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,zd=cp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},cp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){X(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:tf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){X(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){X(n,n.return,e)}}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Za(e,t)}catch(e){X(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yu.bind(null,n),cf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,!!(n.subtreeFlags&8772)):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Qd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),mf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null){if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){X(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){X(n,t,e)}}break;case 18:W!==null&&(ll?(e=W,$d(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):$d(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){X(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){X(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Xu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Qd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[St]||o[ht]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Fd(o,r,n),o[ht]=e,Ot(o),r=o;break a;case`link`:var s=Hf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Hf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ht]=e,Ot(o),r=o}e.stateNode=r}else Uf(a,e.type,e.stateNode)}else e.stateNode=Lf(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Uf(a,e.type,e.stateNode):Lf(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){X(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){X(e,e.return,t)}}break;case 3:if(Vf=null,a=_l,_l=_f(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){X(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=_f(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){X(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){X(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?ef(m,!0):ef(l.stateNode,!1)}catch(e){X(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){X(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:mf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){X(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Xa(c[i],s)}catch(e){X(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&la(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&la(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&la(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){X(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Kf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=_f(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:la(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=na(z),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return na(z).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,au=0,ou=null,su=null,cu=0,lu=0,uu=null,du=null,fu=0,pu=null;function mu(){return G&2&&J!==0?J&-J:D.T===null?ft():fd()}function hu(){if(Yl===0){if(!(J&536870912)||I){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Yl=e}else Yl=536870912}return e=ro.current,e!==null&&(e.flags|=32),Yl}function gu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Cu(e,0),bu(e,J,Yl,!1)),at(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(ql|=n),Gl===4&&bu(e,J,Yl,!1)),id(e))}function _u(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||tt(e,t),a=r?ju(e,t):ku(e,t,!0),o=r;do{if(a===0){Hl&&!r&&bu(e,t,0,!1);break}if(n=e.current.alternate,o&&!yu(n)){a=ku(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Cu(c,s).flags|=256),s=ku(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Cu(e,0),bu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:bu(r,t,Yl,!Vl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Pe(),10<a)){if(bu(r,t,Yl,!Vl),et(r,0,!0)!==0)break a;cu=t,r.timeoutHandle=qd(vu.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,`Throttled`,-0,0),a);break a}vu(r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,null,-0,0)}break}while(1);id(e)}function vu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Ml(t,a,d);var m=(a&62914560)===a?eu-Pe():(a&4194048)===a?tu-Pe():0;if(m=Jf(d,m),m!==null){cu=a,e.cancelPendingCommit=m(Ru.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),bu(e,a,o,!l);return}}Ru(e,t,a,n,r,i,o,s,c)}function yu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function xu(){return G&6?!0:(ad(0,!1),!1)}function Su(){if(q!==null){if(Y===0)var e=q.return;else e=q,Ji=qi=null,ko(e),Ma=null,Na=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Cu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),cu=0,Su(),K=e,q=n=_i(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=tt(e,t),Ul=!1,Xl=Yl=Jl=ql=Kl=Gl=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function wu(e,t){V=null,D.H=zs,t===Sa||t===wa?(t=Aa(),Y=3):t===Ca?(t=Aa(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(Gl=1,Zs(e,Ti(t,e.current)))}function Tu(){var e=ro.current;return e===null?!0:(J&4194048)===J?io===null:(J&62914560)===J||J&536870912?e===io:!1}function Eu(){var e=D.H;return D.H=zs,e===null?zs:e}function Du(){var e=D.A;return D.A=Rl,e}function Ou(){Gl=4,Vl||(J&4194048)!==J&&ro.current!==null||(Hl=!0),!(Kl&134217727)&&!(ql&134217727)||K===null||bu(K,J,Yl,!1)}function ku(e,t,n){var r=G;G|=2;var i=Eu(),a=Du();(K!==e||J!==t)&&(ru=null,Cu(e,t)),t=!1;var o=Gl;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:Su(),o=6;break a;case 3:case 2:case 9:case 6:ro.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Fu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Fu(e,s,c,l)}}Au(),o=Gl;break}catch(t){wu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ji=qi=null,G=r,D.H=i,D.A=a,q===null&&(K=null,J=0,si()),o}function Au(){for(;q!==null;)Nu(q)}function ju(e,t){var n=G;G|=2;var r=Eu(),a=Du();K!==e||J!==t?(ru=null,nu=Pe()+500,Cu(e,t)):Hl=tt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Fu(e,t,o,1);break;case 2:case 9:if(Ea(o)){Y=0,Bl=null,Pu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),id(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Ea(o)?(Y=0,Bl=null,Pu(t)):(Y=0,Bl=null,Fu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Gf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Iu(u))}break b}}Y=0,Bl=null,Fu(e,t,o,5);break;case 6:Y=0,Bl=null,Fu(e,t,o,6);break;case 8:Su(),Gl=6;break a;default:throw Error(i(462))}}Mu();break}catch(t){wu(e,t)}while(1);return Ji=qi=null,D.H=r,D.A=a,G=n,q===null?(K=null,J=0,si(),Gl):0}function Mu(){for(;q!==null&&!Me();)Nu(q)}function Nu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Iu(e):q=t}function Pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:ko(t);default:Vc(n,t),t=q=vi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Iu(e):q=t}function Fu(e,t,n,r){Ji=qi=null,ko(t),Ma=null,Na=0;var i=t.return;try{if(nc(e,i,t,n,J)){Gl=1,Zs(e,Ti(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;Gl=1,Zs(e,Ti(n,e.current)),q=null;return}t.flags&32768?(I||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ro.current,r!==null&&r.tag===13&&(r.flags|=16384))),Lu(t,e)):Iu(t)}function Iu(e){var t=e;do{if(t.flags&32768){Lu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);Gl===0&&(Gl=5)}function Lu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);Gl=6,q=null}function Ru(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Uu();while(au!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=oi,ot(e,n,o,s,c,l),e===K&&(q=K=null,J=0),su=t,ou=e,cu=n,lu=o,uu=a,du=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Zu(Re,function(){return Wu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,O.p=a,D.T=r}}au=1,zu(),Bu(),Vu()}}function zu(){if(au===1){au=0;var e=ou,t=su,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{vl(t,e);var a=Bd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}cp=!!zd,Bd=zd=null}finally{G=i,O.p=r,D.T=n}}e.current=t,au=2}}function Bu(){if(au===2){au=0;var e=ou,t=su,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,O.p=r,D.T=n}}au=3}}function Vu(){if(au===4||au===3){au=0,Ne();var e=ou,t=su,n=cu,r=du;t.subtreeFlags&10256||t.flags&10256?au=5:(au=0,su=ou=null,Hu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}cu&3&&Uu(),id(e),i=e.pendingLanes,n&261930&&i&42?e===pu?fu++:(fu=0,pu=e):fu=0,ad(0,!1)}}function Hu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,la(t)))}function Uu(){return zu(),Bu(),Vu(),Wu()}function Wu(){if(au!==5)return!1;var e=ou,t=lu;lu=0;var n=dt(cu),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=uu,uu=null;var o=ou,s=cu;if(au=0,su=ou=null,cu=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,ad(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,o)}catch{}return!0}finally{O.p=a,D.T=r,Hu(e,t)}}function Gu(e,t,n){t=Ti(n,t),t=$s(e.stateNode,t,2),e=Wa(e,t,2),e!==null&&(at(e,2),id(e))}function X(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ti(n,e),n=ec(2),r=Wa(t,n,2),r!==null&&(tc(n,r,t,e),at(r,2),id(r));break}}t=t.return}}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=qu.bind(null,e,t,n),t.then(e,e))}function qu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(Gl===4||Gl===3&&(J&62914560)===J&&300>Pe()-eu?!(G&2)&&Cu(e,0):Jl|=n,Xl===J&&(Xl=0)),id(e)}function Ju(e,t){t===0&&(t=rt()),e=ui(e,t),e!==null&&(at(e,t),id(e))}function Yu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Xu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ju(e,n)}function Zu(e,t){return Ae(e,t)}var Qu=null,$u=null,ed=!1,td=!1,nd=!1,rd=0;function id(e){e!==$u&&e.next===null&&($u===null?Qu=$u=e:$u=$u.next=e),td=!0,ed||(ed=!0,dd())}function ad(e,t){if(!nd&&td){nd=!0;do for(var n=!1,r=Qu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ud(r,a))}else a=J,a=et(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ud(r,a))}r=r.next}while(n);nd=!1}}function od(){sd()}function sd(){td=ed=!1;var e=0;rd!==0&&Kd()&&(e=rd);for(var t=Pe(),n=null,r=Qu;r!==null;){var i=r.next,a=cd(r,t);a===0?(r.next=null,n===null?Qu=i:n.next=i,i===null&&($u=n)):(n=r,(e!==0||a&3)&&(td=!0)),r=i}au!==0&&au!==5||ad(e,!1),rd!==0&&(rd=0)}function cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=ld.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function ld(e,t){if(au!==0&&au!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Uu()&&e.callbackNode!==n)return null;var r=J;return r=et(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(_u(e,r,t),cd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?ld.bind(null,e):null)}function ud(e,t){if(Uu())return null;_u(e,t,!0)}function dd(){Xd(function(){G&6?Ae(Ie,od):sd()})}function fd(){if(rd===0){var e=fa;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),rd=e}return rd}function pd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function md(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=pd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?pd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rd!==0){var e=o?md(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?md(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var gd=0;gd<ti.length;gd++){var _d=ti[gd];ni(_d.toLowerCase(),`on`+(_d[0].toUpperCase()+_d.slice(1)))}ni(qr,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var vd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),yd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(vd));function bd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Z(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(wd(t,e,2,!1),n.add(r))}function xd(e,t,n){var r=0;t&&(r|=4),wd(n,e,r,t)}var Sd=`_reactListening`+Math.random().toString(36).slice(2);function Cd(e){if(!e[Sd]){e[Sd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(yd.has(t)||xd(t,!1,e),xd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sd]||(t[Sd]=!0,xd(`selectionchange`,!1,t))}}function wd(e,t,n,r){switch(hp(t)){case 2:var i=lp;break;case 8:i=up;break;default:i=dp}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Td(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=ei.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=Jn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=A;break;case qr:case Jr:case Yr:l=Bn;break;case $r:l=Xn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Zn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Yn;break;case`toggle`:case`beforetoggle`:l=Qn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Ed(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?wt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Et(l),h=u==null?c:Et(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Od,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&kd(s,c,l,d,!1),u!==null&&f!==null&&kd(s,f,u,d,!0)}}a:{if(c=r?Et(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=_r;else if(fr(c)){if(vr)v=Dr;else{v=Tr;var y=wr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=_r):v=Er;if(v&&=v(e,r)){pr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Et(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Lr=y,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,Vr(s,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:Vr(s,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,cr=!0)),y=Dd(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Dd(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),hd(s,e,r,n,i)}bd(s,t)})}function Ed(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Ed(e,i,a)),i=_n(e,t),i!=null&&r.push(Ed(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Od(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Ed(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Ed(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ad=/\r\n?/g,jd=/\u0000|\uFFFD/g;function Md(e){return(typeof e==`string`?e:``+e).replace(Ad,`
`).replace(jd,``)}function Nd(e,t){return t=Md(t),Md(e)===t}function Q(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Q(e,t,`name`,a.name,a,null),Q(e,t,`formEncType`,a.formEncType,a,null),Q(e,t,`formMethod`,a.formMethod,a,null),Q(e,t,`formTarget`,a.formTarget,a,null)):(Q(e,t,`encType`,a.encType,a,null),Q(e,t,`method`,a.method,a,null),Q(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Z(`beforetoggle`,e),Z(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Pd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[gt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Fd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Z(`error`,e),Z(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,o,s,n,null)}}a&&Q(e,t,`srcSet`,n.srcSet,n,null),r&&Q(e,t,`src`,n.src,n,null);return;case`input`:Z(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Q(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Z(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Q(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Z(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Q(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Q(e,t,l,r,n,null)}return;case`dialog`:Z(`beforetoggle`,e),Z(`toggle`,e),Z(`cancel`,e),Z(`close`,e);break;case`iframe`:case`object`:Z(`load`,e);break;case`video`:case`audio`:for(r=0;r<vd.length;r++)Z(vd[r],e);break;case`image`:Z(`error`,e),Z(`load`,e);break;case`details`:Z(`toggle`,e);break;case`embed`:case`source`:case`link`:Z(`error`,e),Z(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Q(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Q(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Q(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Q(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Q(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Q(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Q(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Q(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Q(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Q(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Q(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Q(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Q(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Kd(){var e=window.event;return e&&e.type===`popstate`?e!==Gd&&(Gd=e,!0):(Gd=null,!1)}var qd=typeof setTimeout==`function`?setTimeout:void 0,Jd=typeof clearTimeout==`function`?clearTimeout:void 0,Yd=typeof Promise==`function`?Promise:void 0,Xd=typeof queueMicrotask==`function`?queueMicrotask:Yd===void 0?qd:function(e){return Yd.resolve(null).then(e).catch(Zd)};function Zd(e){setTimeout(function(){throw e})}function Qd(e){return e===`head`}function $d(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)mf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,mf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&mf(e.ownerDocument.body)}n=i}while(n);Pp(t)}function ef(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function tf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:tf(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function nf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lf(e.nextSibling),e===null)break}return null}function rf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lf(e.nextSibling),e===null))return null;return e}function af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lf(e.nextSibling),e===null))return null;return e}function of(e){return e.data===`$?`||e.data===`$~`}function sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var uf=null;function df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pf(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var hf=new Map,gf=new Set;function _f(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vf=O.d;O.d={f:yf,r:bf,D:Cf,C:wf,L:Tf,m:Ef,X:Of,S:Df,M:kf};function yf(){var e=vf.f(),t=xu();return e||t}function bf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):vf.r(e)}var xf=typeof document>`u`?null:document;function Sf(e,t,n){var r=xf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),gf.has(i)||(gf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Fd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Cf(e){vf.D(e),Sf(`dns-prefetch`,e,null)}function wf(e,t){vf.C(e,t),Sf(`preconnect`,e,t)}function Tf(e,t,n){vf.L(e,t,n);var r=xf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=jf(e);break;case`script`:a=Ff(e)}hf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),hf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Mf(a))||t===`script`&&r.querySelector(If(a))||(t=r.createElement(`link`),Fd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Ef(e,t){vf.m(e,t);var n=xf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Ff(e)}if(!hf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),hf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(If(a)))return}r=n.createElement(`link`),Fd(r,`link`,e),Ot(r),n.head.appendChild(r)}}}function Df(e,t,n){vf.S(e,t,n);var r=xf;if(r&&e){var i=Dt(r).hoistableStyles,a=jf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Mf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=hf.get(a))&&zf(e,n);var c=o=r.createElement(`link`);Ot(c),Fd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Rf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Of(e,t){vf.X(e,t);var n=xf;if(n&&e){var r=Dt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),Ot(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t){vf.M(e,t);var n=xf;if(n&&e){var r=Dt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),Ot(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t,n,r){var a=(a=ge.current)?_f(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=jf(n.href),n=Dt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=jf(n.href);var o=Dt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Mf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),hf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hf.set(e,n),o||Pf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Ff(n),n=Dt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function jf(e){return`href="`+qt(e)+`"`}function Mf(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Fd(t,`link`,n),Ot(t),e.head.appendChild(t))}function Ff(e){return`[src="`+qt(e)+`"]`}function If(e){return`script[async]`+e}function Lf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,Ot(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ot(r),Fd(r,`style`,a),Rf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=jf(n.href);var o=e.querySelector(Mf(a));if(o)return t.state.loading|=4,t.instance=o,Ot(o),o;r=Nf(n),(a=hf.get(a))&&zf(r,a),o=(e.ownerDocument||e).createElement(`link`),Ot(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Fd(o,`link`,r),t.state.loading|=4,Rf(o,n.precedence,e),t.instance=o;case`script`:return o=Ff(n.src),(a=e.querySelector(If(o)))?(t.instance=a,Ot(a),a):(r=n,(a=hf.get(o))&&(r=h({},n),Bf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ot(a),Fd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Rf(r,n.precedence,e));return t.instance}function Rf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Vf=null;function Hf(e,t,n){if(Vf===null){var r=new Map,i=Vf=new Map;i.set(n,r)}else i=Vf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Wf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Gf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Kf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=jf(r.href),a=t.querySelector(Mf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Yf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ot(a);return}a=t.ownerDocument||t,r=Nf(r),(i=hf.get(i))&&zf(r,i),a=a.createElement(`link`),Ot(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Yf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var qf=0;function Jf(e,t){return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&qf===0&&(qf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>qf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xf=null;function Zf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xf=new Map,t.forEach(Qf,e),Xf=null,Yf.call(e))}function Qf(e,t){if(!(t.state.loading&4)){var n=Xf.get(e);if(n)var r=n.get(null);else{n=new Map,Xf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Yf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $f={$$typeof:C,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function ep(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function tp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ep(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=hi(3,null,null,t),e.current=a,a.stateNode=e,t=ca(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Va(a),e}function np(e){return e?(e=pi,e):pi}function rp(e,t,n,r,i,a){i=np(i),r.context===null?r.context=i:r.pendingContext=i,r=Ua(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Wa(e,r,t),n!==null&&(gu(n,e,t),Ga(n,e,t))}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ap(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function op(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&gu(t,e,67108864),ap(e,67108864)}}function sp(e){if(e.tag===13||e.tag===31){var t=mu();t=ut(t);var n=ui(e,t);n!==null&&gu(n,e,t),ap(e,t)}}var cp=!0;function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,dp(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,dp(e,t,n,r)}finally{O.p=a,D.T=i}}function dp(e,t,n,r){if(cp){var i=fp(r);if(i===null)Td(e,t,r,pp,n),wp(e,r);else if(Ep(i,e,t,n,r))r.stopPropagation();else if(wp(e,r),t&4&&-1<Cp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}id(a),!(G&6)&&(nu=Pe()+500,ad(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&gu(s,a,2),xu(),ap(a,2)}if(a=fp(r),a===null&&Td(e,t,r,pp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Td(e,t,r,null,n)}}function fp(e){return e=dn(e),mp(e)}var pp=null;function mp(e){if(pp=null,e=wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pp=e,null}function hp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var gp=!1,_p=null,vp=null,yp=null,bp=new Map,xp=new Map,Sp=[],Cp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function wp(e,t){switch(e){case`focusin`:case`focusout`:_p=null;break;case`dragenter`:case`dragleave`:vp=null;break;case`mouseover`:case`mouseout`:yp=null;break;case`pointerover`:case`pointerout`:bp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:xp.delete(t.pointerId)}}function Tp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&op(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,n,r,i){switch(t){case`focusin`:return _p=Tp(_p,e,t,n,r,i),!0;case`dragenter`:return vp=Tp(vp,e,t,n,r,i),!0;case`mouseover`:return yp=Tp(yp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return bp.set(a,Tp(bp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,xp.set(a,Tp(xp.get(a)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,pt(e.priority,function(){sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,pt(e.priority,function(){sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Op(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Tt(n),t!==null&&op(t),e.blockedOn=n,!1;t.shift()}return!0}function kp(e,t,n){Op(e)&&n.delete(t)}function Ap(){gp=!1,_p!==null&&Op(_p)&&(_p=null),vp!==null&&Op(vp)&&(vp=null),yp!==null&&Op(yp)&&(yp=null),bp.forEach(kp),xp.forEach(kp)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,gp||(gp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ap)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(mp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}_p!==null&&jp(_p,e),vp!==null&&jp(vp,e),yp!==null&&jp(yp,e),bp.forEach(t),xp.forEach(t);for(var n=0;n<Sp.length;n++){var r=Sp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Sp.length&&(n=Sp[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Sp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(mp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;rp(n,mu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rp(e.current,2,null,e,null,null),xu(),t[_t]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sp.length&&t!==0&&t<Sp[n].priority;n++);Sp.splice(n,0,e),n===0&&Dp(e)}};var Rp=n.version;if(Rp!==`19.2.8`)throw Error(i(527,Rp,`19.2.8`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{Ue=Bp.inject(zp),We=Bp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,r,null,o,s,c,Fp),e[_t]=t.current,Cd(e),new Ip(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u()),v=g(),y=`/project-forecast/assets/logo--nZl-i6T.png`,b=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAACXFJREFUeAHNWnlsFNcZf/NmZu/Te/jCNjiEw0khEMCBioQkHCUlpBJHmjQxUKI0SpOG/tGDVsE0xChq+geBqIpSVeCQqpizGCjgUA41KEBEUy61TewYX8Jr7+G9vJ7ZOfq99a7rxsfOzG5QftLIa828N9/vfd/7rjcUyg1U+q/sdk+1FpaXLXAUuFbYbUXVepO1nGV1DlmW9KkHKWpAEJKRRH+0LRzuuRTp9R3vav/scigUCg+fB2kEhbQBwyUVFEy2PbBg0ebyife9hGnWkeiPIFFIIlkeXx4ghWiaRUaLDYlJPtRx+9b71y8frfP7/VG4TcMlIpVQS4QQkGfMWOCZNmf5cZvdPTcc6pGJ4CCbpkUByjIF09qdLioSCV25en7f6paWmx3pd0lK51HzcrJS8uqa1z+yFRQ+FunrlUB2jPIIWZJkm8NLRcO95w7U/+YxpEI7SoikVmbBkh8s/dbMRacDvZ0CmAaDvkaAhiWXpxT/+/rHT1xo+uBkWs5x7TUbESKwsHrD1gajwbIWNqoIJGh0NwBkDGYrTiT6Dx/cvWVVRpaxHh+PSGrg+ld3fp6I91VKkqSOAOwbCa7Mvoc9hDBWb4kUxoLJYm/ds/O1KfAvC1dy1OfGGD9I4pUd3fFo0A2zZSdBDQrv6wnJRoNBrJxULJYUu2mLxcDBlqVi/Qm2645fbm3txokBjvF6HCnvpQRgaoLF6gzseXdTERpDM9RYIq1/9Z3P45FApRISGFOoo8svL140m9tYsxyXFLlZUZQoPplEojzoeGjQBsswSMcwMhAS/rj3pHjm3FVDWakbiVL28EHIWO2u1t07f0I0M8Kjjboka9e/cRAefQq8SNZNzdAYtXf0iA31tUm7w2yIxvqzrjRx11azCQWDEf7ZF96ky0q8tChl97SYIo+JRw7Ub10z4t5X/qe/vbRmucFkXqWEBFmG2+0++WhDnUizlCEWTygyF/IMmBpi9Yyucd92sa3DJysZJ8kibTRbVi9c/OwyNOiaRyWS8tn3z1z4V4jQigIRzwnopReeTGCG0mlJEojwEIl0P/rhkxzPJxWN6e+PSlUPPHoKDbrjIfmHExHXrKs9G+jplJDCQBcIRaXvfXehjhtQJsRo4IDAqqceYfyBPkV5FqFOYtmqdVub0LB9khGYrqx8sNzq8DwKq6TYR3rdNtFsMtCaM7Y0jAYd7XE7lKcjEJDtDtfjkCp5UZpDRmhxzsMrD5K0A6mA2WwUZElzwjoEiFGUxWxSpdZIn1+cMmvJMZTWCiFCkSzWVuCdq0YbBHxSYBGVqz5QKlomBVFV2kMyDIeraB4pH1BmL8x86JFfh4O9qpcWstbc1TE0F6V6rkioV5750MOb4aecSsvLJ933ooxUWdU3AiQFmjBx+svkN+N0VtppRufI3T7uPigoZRhaZyfmhQvLJ1aTyk71JJCWROMxTSYxYi6YIRqNUWROtegH2d2lrvn09BnzN5nMznlIJcLhONryixpeb9SxKEckOB5VTZ+UbDrzKaPX61SNhWwfJXmhD1us7motNX8yKQhzZ03TZavPlQkjo3mzp7F8UhS0jLU5PNXYaLZWIA2AZJGCyjR/WwsEInMiDTCarBUYNrodaQS8Nm/ul0DrZNB2smNYCHVGmQEEMQjqedNILisC5qWHRZU0CQN7hLDIj0Zkol0Kelyq21n/Gw9+lEMaAHkWffLsFV6v06bQDGCfIZvFjI43fcIZTXpNjQ1YBA4LAh9GGmA269HWuj2kmNKewwPsNjPa9YfDiV3vHTFCfY+0gBe4MObi8dtIA0gpXlFeRJ298A+RYbS1uYjn5rmk8JfGjw1ulw1p9eRcf6wNh/t8lymNW1bH0ujAkfN0gc2iSQSjUYf2HTonFBe5KM3hCISPhHs/wcFg+zGa0SMtIC8fGODZazdbeLWCkEBmgrbRnxrOsCyrvefHMiwKBNpP4N5O/yUIKEgrXC47qt2+hyp0OVVRsZqM6O139iULvU46l+TAaLIhX/u/LmO//z9RURT6SFMQaQCpEKFHozt49PyAnlWWdhFtdPtC/MmmywaGyaEPDjLDMUYQEElViO1fXP89xlhzcLOYDbC6+w2QvSoKBF6XU9rw8m9xWakH5ZSqQV3Y+uWN91CmQrxx9eJbdocHaQURxmTSUxzHK1oMyDchrWAUdRjHg93ppm592vgW+Z2qEIl5BQN3LpF2PrpLyDW3IbJGIj2X0qdccsZAqWs3zq20OT2aDZbYvYplgK2V25oRWS9eOExapymXlxFcbv7s7/6w/04TCKT+/A6WlzRlC5w2RbbC0gw2GQ2I0rgtiYzhoO9MV/P1TpQ+0RquAerQh3XfcXnLaDVkiDCtbd2odnMNH4nHFQUEf18fVVe7UfyiuUtWTQZkc3kn0Ic+2LYEDev/DidCdI1vXP3b43Cwkv0oAdQQDEWIjfD762u56jlVRkFh9kqcQ0V5of7on7cloVPJdfuCCrUDQdRsp2/883ymiT30wlFHr6p5fS/L6p+B+DKCUKqTHksQzyO8WbtRePD+e/U9oT6K0pDnkHZOgc2K7nQHuG1vf4iaWzr1xcUuNFb3Eo5qBEqWjjTsrl074t4oz6cOUdb9eMeteCw0JXPwSeTkeAHSgbD4859+P7li6Xy9LxDKS2H1/4T2AqGuEYTgEcFsczTX79o0HY1yODqWICm1rXtlR0c8GioCEkx7p1/a8PwyfuNzT+hCkSgWBQnlrz4cm1AJEBJFcvTm6IWjtxKk4ugtg9SAZ1783c0JxbZ73/jlOjzA80yC5xBF5ZnBV5Ah1A2Efrblfcpsdd6uf/e1qWick91sEqU009bW1uB0uddG++MSxnRePxIYCyTQWC1mHAkF95eWlj6NshxPZxOKeAVcUVHx9Kmm00tLPB5oVkgaC2uFkFNfQIjFHhc+0Xh0WZoEkXPcnpfaTzjE5ubmj8oqJi72B0MSpnH+tCOnzgglj9OJW9vbz0y9555l6TuKUgA1gqS0M3ny5CVrnn+ulIvHrhS6CsiBvoxyy2FlGtOyu8CBErH41V9t3lwIJJam733tuV8qvlRVVVmOnzpVFwyHA5CiyBDZ5e5AUL7jD4x7dQcCcigak5PgjmLxeOjE6dPbV65cmanuNGk5V/cz9MFYdXW1bf7ChfNmzZq9YsrUafMLi7wVJqPJnvnwDGMGlBgL+3zdt1u+bLly/dq1Yxdv3rx0sbExivLw4dl/AddFSaEKS67DAAAAAElFTkSuQmCC`,x=`-ms-`,S=`-moz-`,C=`-webkit-`,w=`comm`,T=`rule`,E=`decl`,ee=`@import`,te=`@namespace`,ne=`@keyframes`,re=`@layer`,ie=Math.abs,ae=String.fromCharCode,oe=Object.assign;function se(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function ce(e){return e.trim()}function D(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function le(e,t,n){return e.indexOf(t,n)}function ue(e,t){return e.charCodeAt(t)|0}function de(e,t,n){return e.slice(t,n)}function fe(e){return e.length}function pe(e){return e.length}function k(e,t){return t.push(e),e}function me(e,t){return e.map(t).join(``)}function he(e,t){return e.filter(function(e){return!D(e,t)})}var ge=1,_e=1,ve=0,ye=0,be=0,xe=``;function Se(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ge,column:_e,length:o,return:``,siblings:s}}function Ce(e,t){return oe(Se(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function we(e){for(;e.root;)e=Ce(e.root,{children:[e]});k(e,e.siblings)}function Te(){return be}function Ee(){return be=ye>0?ue(xe,--ye):0,_e--,be===10&&(_e=1,ge--),be}function De(){return be=ye<ve?ue(xe,ye++):0,_e++,be===10&&(_e=1,ge++),be}function Oe(){return ue(xe,ye)}function ke(){return ye}function Ae(e,t){return de(xe,e,t)}function je(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Me(e){return ge=_e=1,ve=fe(xe=e),ye=0,[]}function Ne(e){return xe=``,e}function Pe(e){return ce(Ae(ye-1,Le(e===91?e+2:e===40?e+1:e)))}function Fe(e){for(;(be=Oe())&&be<33;)De();return je(e)>2||je(be)>3?``:` `}function Ie(e,t){for(;--t&&De()&&!(be<48||be>102||be>57&&be<65||be>70&&be<97););return Ae(e,ke()+(t<6&&Oe()==32&&De()==32))}function Le(e){for(;De();)switch(be){case e:return ye;case 34:case 39:e!==34&&e!==39&&Le(be);break;case 40:e===41&&Le(e);break;case 92:De();break}return ye}function Re(e,t){for(;De()&&e+be!==57&&(e+be!==84||Oe()!==47););return`/*`+Ae(t,ye-1)+`*`+ae(e===47?e:De())}function ze(e){for(;!je(Oe());)De();return Ae(e,ye)}function Be(e){return Ne(Ve(``,null,null,null,[``],e=Me(e),0,[0],e))}function Ve(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=De()){case 40:if(m!=108&&ue(C,d-1)==58){le(C+=O(Pe(v),`&`,`&\f`),`&\f`,ie(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Pe(v);break;case 9:case 10:case 13:case 32:C+=Fe(m);break;case 92:C+=Ie(ke()-1,7);continue;case 47:switch(Oe()){case 42:case 47:k(Ue(Re(De(),ke()),t,n,c),c),(je(m||1)==5||je(Oe()||1)==5)&&fe(C)&&de(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=fe(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=O(C,/\f/g,``)),p>0&&(fe(C)-d||h===0&&m===47)&&k(p>32?We(C+`;`,r,n,d-1,c):We(O(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(k(S=He(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)Ve(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(ue(C,3)===110)break;case 108:if(ue(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Ve(e,S,S,r&&k(He(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Ve(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+fe(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Ee()==125)continue}switch(C+=ae(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(fe(C)-1)*_,_=1;break;case 64:Oe()===45&&(C+=Pe(De())),f=Oe(),u=d=fe(y=C+=ze(ke())),v++;break;case 45:m===45&&fe(C)==2&&(h=0)}}return a}function He(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=pe(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=de(e,f+1,f=ie(g=o[h])),b=e;v<m;++v)(b=ce(g>0?p[v]+` `+y:O(y,/&\f/g,p[v])))&&(c[_++]=b);return Se(e,t,n,i===0?T:s,c,l,u,d)}function Ue(e,t,n,r){return Se(e,t,n,w,ae(Te()),de(e,2,-2),0,r)}function We(e,t,n,r,i){return Se(e,t,n,E,de(e,0,r),de(e,r+1,-1),r,i)}function Ge(e,t,n){switch(se(e,t)){case 5103:return C+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return C+e+e;case 4855:return C+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return S+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return C+e+S+e+x+e+e;case 5936:switch(ue(e,t+11)){case 114:return C+e+x+O(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return C+e+x+O(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return C+e+x+O(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return C+e+x+e+e;case 6165:return C+e+x+`flex-`+e+e;case 5187:return C+e+O(e,/(\w+).+(:[^]+)/,C+`box-$1$2`+x+`flex-$1$2`)+e;case 5443:return C+e+x+`flex-item-`+O(e,/flex-|-self/g,``)+(D(e,/flex-|baseline/)?``:x+`grid-row-`+O(e,/flex-|-self/g,``))+e;case 4675:return C+e+x+`flex-line-pack`+O(e,/align-content|flex-|-self/g,``)+e;case 5548:return C+e+x+O(e,`shrink`,`negative`)+e;case 5292:return C+e+x+O(e,`basis`,`preferred-size`)+e;case 6060:return C+`box-`+O(e,`-grow`,``)+C+e+x+O(e,`grow`,`positive`)+e;case 4554:return C+O(e,/([^-])(transform)/g,`$1`+C+`$2`)+e;case 6187:return O(O(O(e,/(zoom-|grab)/,C+`$1`),/(image-set)/,C+`$1`),e,``)+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,C+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,C+`box-pack:$3`+x+`flex-pack:$3`),/space-between/,`justify`)+C+e+e;case 4200:if(!D(e,/flex-|baseline/))return x+`grid-column-align`+de(e,t)+e;break;case 2592:case 3360:return x+O(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,D(e.props,/grid-\w+-end/)})?~le(e+(n=n[t].value),`span`,0)?e:x+O(e,`-start`,``)+e+x+`grid-row-span:`+(~le(n,`span`,0)?D(n,/\d+/):D(n,/\d+/)-+D(e,/\d+/))+`;`:x+O(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return D(e.props,/grid-\w+-start/)})?e:x+O(O(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,C+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fe(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,`$1`+C+`$2-$3$1`+S+(ue(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~le(e,`stretch`,0)?Ge(O(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return x+n+`:`+r+s+(i?x+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(ue(e,t+6)===121)return O(e,`:`,`:`+C)+e;break;case 6444:switch(ue(e,ue(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+C+(ue(e,14)===45?`inline-`:``)+`box$3$1`+C+`$2$3$1`+x+`$2box$3`)+e;case 100:return O(e,`:`,`:`+x)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,`scroll-`,`scroll-snap-`)+e}return e}function Ke(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function qe(e,t,n,r){switch(e.type){case re:if(e.children.length)break;case ee:case te:case E:return e.return=e.return||e.value;case w:return``;case ne:return e.return=e.value+`{`+Ke(e.children,r)+`}`;case T:if(!fe(e.value=e.props.join(`,`)))return``}return fe(n=Ke(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Je(e){var t=pe(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Ye(e){return function(t){t.root||(t=t.return)&&e(t)}}function Xe(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case E:e.return=Ge(e.value,e.length,n);return;case ne:return Ke([Ce(e,{value:O(e.value,`@`,`@`+C)})],r);case T:if(e.length)return me(n=e.props,function(t){switch(D(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:we(Ce(e,{props:[O(t,/:(read-\w+)/,`:`+S+`$1`)]})),we(Ce(e,{props:[t]})),oe(e,{props:he(n,r)});break;case`::placeholder`:we(Ce(e,{props:[O(t,/:(plac\w+)/,`:`+C+`input-$1`)]})),we(Ce(e,{props:[O(t,/:(plac\w+)/,`:`+S+`$1`)]})),we(Ce(e,{props:[O(t,/:(plac\w+)/,x+`input-$1`)]})),we(Ce(e,{props:[t]})),oe(e,{props:he(n,r)})}return``})}}var Ze=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Qe=`active`,$e=`data-styled-version`,et=`6.5.2`,tt=`/*!sc*/
`,nt=typeof window<`u`&&typeof document<`u`;function rt(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var it=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:rt(`REACT_APP_SC_DISABLE_SPEEDY`)??rt(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),at=`sc-keyframes-`,ot={};function st(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var ct=new Map,lt=new Map,ut=1,dt=e=>{if(ct.has(e))return ct.get(e);for(;lt.has(ut);)ut++;let t=ut++;return ct.set(e,t),lt.set(t,e),t},ft=e=>lt.get(e),pt=(e,t)=>{ut=t+1,ct.set(e,t),lt.set(t,e)},mt=Object.freeze([]),ht=Object.freeze({});function gt(e,t,n=ht){return e.theme!==n.theme&&e.theme||t||n.theme}var _t=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vt=/(^-|-$)/g;function yt(e){return e.replace(_t,`-`).replace(vt,``)}var bt=/(a)(d)/gi,xt=e=>String.fromCharCode(e+(e>25?39:97));function St(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=xt(t%52)+n;return(xt(t%52)+n).replace(bt,`$1-$2`)}var Ct=5381,wt=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Tt=e=>wt(Ct,e);function Et(e){return St(Tt(e)>>>0)}function Dt(e){return e.displayName||e.name||`Component`}function Ot(e){return typeof e==`string`&&!0}function kt(e){return Ot(e)?`styled.${e}`:`Styled(${Dt(e)})`}var At=Symbol.for(`react.memo`),jt=Symbol.for(`react.forward_ref`),Mt={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Nt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ft={[jt]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[At]:Pt};function It(e){return(`type`in(t=e)&&t.type.$$typeof)===At?Pt:`$$typeof`in e?Ft[e.$$typeof]:Mt;var t}var Lt=Object.defineProperty,Rt=Object.getOwnPropertyNames,zt=Object.getOwnPropertySymbols,Bt=Object.getOwnPropertyDescriptor,Vt=Object.getPrototypeOf,Ht=Object.prototype;function Ut(e,t,n){if(typeof t!=`string`){let r=Vt(t);r&&r!==Ht&&Ut(e,r,n);let i=Rt(t).concat(zt(t)),a=It(e),o=It(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in Nt||n&&n[s]||o&&s in o||a&&s in a)){let n=Bt(t,s);try{Lt(e,s,n)}catch{}}}}return e}function Wt(e){return typeof e==`function`}var Gt=Symbol.for(`react.forward_ref`);function Kt(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===Gt&&`styledComponentId`in e}function qt(e,t){return e&&t?e+` `+t:e||t||``}function Jt(e,t){return e.join(t||``)}function Yt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Xt(e,t,n=!1){if(!n&&!Yt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Xt(e[n],t[n]);else if(Yt(t))for(let n in t)e[n]=Xt(e[n],t[n]);return e}function Zt(e,t){Object.defineProperty(e,"toString",{value:t})}var Qt=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw st(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+tt;return t}},$t=`style[${Ze}][${$e}="${et}"]`,en=RegExp(`^${Ze}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),tn=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,nn=e=>{if(!e)return document;if(tn(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(tn(t))return t}return document},rn=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},an=(e,t)=>{let n=(t.textContent??``).split(tt),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(en);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(pt(n,t),rn(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},on=e=>{let t=nn(e.options.target).querySelectorAll($t);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Ze)!==Qe&&(an(e,r),r.parentNode&&r.parentNode.removeChild(r))}},sn=!1;function cn(){if(!1!==sn)return sn;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return sn=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return sn=t.getAttribute(`content`)||void 0}return sn=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var ln=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Ze}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Ze,Qe),i.setAttribute($e,et);let s=t||cn();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},un=class{constructor(e,t){this.element=ln(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw st(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},dn=class{constructor(e,t){this.element=ln(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},fn=nt,pn={isServer:!nt,useCSSOMInjection:!it},mn=class e{static registerId(e){return dt(e)}constructor(e=ht,t={},n){this.options=Object.assign(Object.assign({},pn),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&nt&&fn&&(fn=!1,on(this)),Zt(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=ft(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Ze+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&nt&&on(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&nt&&t.target!==this.options.target&&nn(this.options.target)!==nn(t.target)&&on(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new un(t,n):new dn(t,n))(this.options),new Qt(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){dt(e),e.startsWith(at)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(dt(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(dt(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},hn=new WeakSet,gn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function _n(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in gn||e.startsWith(`--`)?String(t).trim():t+`px`}var vn=47;function yn(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var bn=Symbol.for(`sc-keyframes`);function xn(e){return typeof e==`object`&&!!e&&bn in e}function Sn(e){return Wt(e)&&!(e.prototype&&e.prototype.isReactComponent)}var Cn=e=>e==null||!1===e||e===``,wn=Symbol.for(`react.client.reference`);function Tn(e){return e.$$typeof===wn}function En(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!Cn(r)&&(Array.isArray(r)&&hn.has(r)||Wt(r)?t.push(yn(n)+`:`,r,`;`):Yt(r)?(t.push(n+` {`),En(r,t),t.push(`}`)):t.push(yn(n)+`: `+_n(n,r)+`;`))}}function Dn(e,t,n,r,i=[]){if(Cn(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return Tn(e)?i:Sn(e)&&t?Dn(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)Dn(e[a],t,n,r,i);return i}return Kt(e)?(i.push(`.${e.styledComponentId}`),i):xn(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):Tn(e)?i:Yt(e)&&e.toString===Object.prototype.toString?(En(e,i),i):(i.push(e.toString()),i)}var On=Tt(et),kn=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=wt(On,t),this.baseStyle=n,mn.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(Sn(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Jt(Dn(r,e,t,n)))}else i+=Jt(Dn(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=St(wt(wt(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=qt(r,a)}}return r}},An=/&/g;function jn(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Mn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==vn||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===vn&&(o=!1,c++);else if(l!==34&&l!==39||jn(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function Nn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&Nn(a.children,t)}return e}function Pn({options:e=ht,plugins:t=mt}=ht){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(An,r).replace(i,a))}),e.prefix&&o.push(Xe),o.push(qe);let s=[],c=Je(o.concat(Ye(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return Mn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||jn(e,o)){if(s===0){if(t===vn&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==vn);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===vn)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===vn&&o+1<r&&e.charCodeAt(o+1)===vn){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:Mn(i)):l===0?e:Mn(e)}(t),d=Be(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=Nn(d,e.namespace)),s=[],Ke(d,c),s},u=e,d=Ct;for(let e=0;e<t.length;e++)t[e].name||st(15),d=wt(d,t[e].name);return u!=null&&u.namespace&&(d=wt(d,u.namespace)),u!=null&&u.prefix&&(d=wt(d,`p`)),l.hash=d===Ct?``:d.toString(),l}var Fn=new mn,In=Pn(),Ln=_.createContext({shouldForwardProp:void 0,styleSheet:Fn,stylis:In,stylisPlugins:void 0});Ln.Consumer;function Rn(){return _.useContext(Ln)}var zn=_.createContext(void 0);zn.Consumer;var Bn=Object.prototype.hasOwnProperty,Vn={};function Hn(e,t){let n=typeof e==`string`?yt(e):`sc`;Vn[n]=(Vn[n]||0)+1;let r=n+`-`+Et(et+n+Vn[n]);return t?t+`-`+r:r}function Un(e,t,n){let r=Kt(e),i=e,a=!Ot(e),{attrs:o=mt,componentId:s=Hn(t.displayName,t.parentComponentId),displayName:c=kt(e)}=t,l=t.displayName&&t.componentId?yt(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new kn(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=_.useContext(zn),u=Rn(),d=e.shouldForwardProp||u.shouldForwardProp,f=gt(t,l,a)||ht,p,m;{let e=_.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(Bn.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=Wt(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=qt(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=qt(r.className,t.className)),r}(r,t,f),m=i.generateAndInjectStyles(p,u.styleSheet,u.stylis);let n=0;for(let e in t)Bn.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,g=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),v=qt(o,s);return m&&(v+=` `+m),p.className&&(v+=` `+p.className),g[Ot(h)&&h.includes(`-`)?`class`:`className`]=v,n&&(g.ref=n),(0,_.createElement)(h,g)}(m,e,t)}p.displayName=c;let m=_.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?qt(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Xt(e,n,!0);return e}({},i.defaultProps,e):e}}),Zt(m,()=>`.${m.styledComponentId}`),a&&Ut(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Wn=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function Gn(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Kn=e=>(hn.add(e),e);function qn(e,...t){if(Wt(e)||Yt(e))return Kn(Dn(Gn(mt,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?Dn(n):Kn(Dn(Gn(n,t)))}function Jn(e,t,n=ht){if(!t)throw st(1,t);let r=(r,...i)=>e(t,n,qn(r,...i));return r.attrs=r=>Jn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Jn(e,t,Object.assign(Object.assign({},n),r)),r}var Yn=e=>Jn(Un,e),A=Yn;Wn.forEach(e=>{A[e]=Yn(e)});var Xn=class{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){let n=e[t];if(Wt(n)&&!Kt(n))return!1}return!0}(e),mn.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){let i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{let a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}let a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){let t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){let i=Jt(Dn(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,``)};return this.instanceRules.set(e,a),a}rebuildGroup(e){let t=this.componentId;e.clearRules(t);for(let n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}};function Zn(e,...t){let n=qn(e,...t),r=`sc-global-${Et(JSON.stringify(n))}`,i=new Xn(n,r),a=e=>{let t=Rn(),n=_.useContext(zn),a;{let e=_.useRef(null);e.current===null&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{let s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],c=_.useRef(i);_.useLayoutEffect(()=>{t.styleSheet.server||(c.current!==i&&(t.styleSheet.clearRules(r),c.current=i),o(a,e,t.styleSheet,n,t.stylis))},s),_.useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(a,t.styleSheet)},[a,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,ot,n,o);else{let s=Object.assign(Object.assign({},t),{theme:gt(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return _.memo(a)}var Qn,$n=class{constructor(e,t){this[Qn]=!0,this.inject=(e,t=In)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=at+e,this.rules=t,dt(this.id),Zt(this,()=>{throw st(12,String(this.name))})}getName(e=In){return e.hash?this.name+St(e.hash>>>0):this.name}};function er(e,...t){let n=Jt(qn(e,...t));return new $n(Et(n),n)}Qn=bn,`${Ze}`,`${Ze}`,`${Ze}`;var tr=A.header`
  position: relative;
  z-index: 100;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
  box-sizing: border-box;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 564px) {
    height: 70px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1160px) {
    height: 82px;
    padding: 0 64px;
  }
`,nr=A.a`
  width: 34px;
  height: 22px;
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    width: 50px;
    height: 50px;
    display: block;
    object-fit: contain;
  }

  @media screen and (min-width: 564px) {
    width: 54px;
    height: 36px;

    img {
      width: 54px;
      height: 36px;
    }
  }

  @media screen and (min-width: 1160px) {
    width: 82px;
    height: 56px;

    img {
      width: 82px;
      height: 56px;
    }
  }
`,rr=A.nav`
  display: none;

  @media screen and (min-width: 564px) {
    display: flex;
    align-items: center;
    gap: 46px;
    margin-left: 40px;
    margin-right: auto;
  }

  @media screen and (min-width: 1160px) {
    gap: 42px;
    margin-left: 150px;
  }
`,ir=A.a`
  position: relative;
  color: #111111;
  font-size: 10px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #ff9d4d;
  }

  @media screen and (min-width: 1160px) {
    font-size: 14px;
  }
`,ar=A.div`
  display: none;

  @media screen and (min-width: 564px) {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  @media screen and (min-width: 1160px) {
    gap: 20px;
  }
`,or=A.button`
  width: 74px;
  height: 38px;
  border: none;
  border-radius: 9px;
  background: #ffb36c;
  color: #111111;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #ffa451;
  }

  @media screen and (min-width: 564px) {
    width: auto;
    height: auto;
    padding: 8px 16px;
  }

  @media screen and (min-width: 1160px) {
    width: 74px;
    height: 38px;
    padding: 0;
    font-size: 13px;
  }
`,sr=A.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  border-radius: 50%;
  background: #f5f5f5;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 1160px) {
    width: 42px;
    height: 42px;
  }
`,cr=A.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`,lr=A.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: none;
  background: none;
  color: #111111;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;

  @media screen and (min-width: 564px) {
    display: none;
  }
`,ur=A.div`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  height: 268px;
  display: flex;
  justify-content: space-between;
  padding: 48px 50px 40px;
  background: #e9e9e9;
  box-sizing: border-box;
  z-index: 999;

  box-shadow: inset 0 20px 30px rgba(0, 0, 0, 0.25); 
  @media screen and (min-width: 564px) {
    display: none;
  }
`,dr=A.nav`
  display: flex;
  flex-direction: column;
  gap: 36px;

  ${ir} {
    font-size: 16px;
    font-weight: 500;
    color: #111111;

    &::after {
      display: none;
    }
  }
`,fr=A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`,pr=A.div`
  width: 54px;
  height: 54px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  border-radius: 50%;
  background: #59698f;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,mr=A.button`
  width: 110px;
  height: 44px;
  border: none;
  border-radius: 14px;
  background: #ffb36c;
  color: #111111;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #ffa451;
  }
`,hr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),j=o(((e,t)=>{t.exports=hr()}))();function gr({user:e,avatar:t,onSignUp:n,onProfile:r}){let[i,a]=(0,_.useState)(!1);return(0,j.jsxs)(tr,{children:[(0,j.jsx)(nr,{href:`/`,children:(0,j.jsx)(`img`,{src:y,alt:`24 forecast`})}),(0,j.jsxs)(rr,{children:[(0,j.jsx)(ir,{href:`#about`,children:`Who we are`}),(0,j.jsx)(ir,{href:`#contacts`,children:`Contacts`}),(0,j.jsx)(ir,{href:`#menu`,children:`Menu`})]}),(0,j.jsxs)(ar,{children:[!e&&(0,j.jsx)(or,{type:`button`,onClick:n,children:`Sign up`}),(0,j.jsx)(sr,{onClick:r,role:`button`,tabIndex:0,"aria-label":`Open profile`,children:t?(0,j.jsx)(cr,{src:t,alt:`Profile`}):(0,j.jsx)(`img`,{src:b,alt:`Profile`})})]}),(0,j.jsxs)(lr,{type:`button`,onClick:()=>a(e=>!e),children:[`Menu`,i?` →`:` ↓`]}),i&&(0,j.jsxs)(ur,{children:[(0,j.jsxs)(dr,{children:[(0,j.jsx)(ir,{href:`#about`,children:`Who we are`}),(0,j.jsx)(ir,{href:`#contacts`,children:`Contacts`}),(0,j.jsx)(ir,{href:`#menu`,children:`Menu`})]}),(0,j.jsxs)(fr,{children:[(0,j.jsx)(pr,{onClick:r,children:t?(0,j.jsx)(cr,{src:t,alt:`Profile`}):(0,j.jsx)(`img`,{src:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAACXFJREFUeAHNWnlsFNcZf/NmZu/Te/jCNjiEw0khEMCBioQkHCUlpBJHmjQxUKI0SpOG/tGDVsE0xChq+geBqIpSVeCQqpizGCjgUA41KEBEUy61TewYX8Jr7+G9vJ7ZOfq99a7rxsfOzG5QftLIa828N9/vfd/7rjcUyg1U+q/sdk+1FpaXLXAUuFbYbUXVepO1nGV1DlmW9KkHKWpAEJKRRH+0LRzuuRTp9R3vav/scigUCg+fB2kEhbQBwyUVFEy2PbBg0ebyife9hGnWkeiPIFFIIlkeXx4ghWiaRUaLDYlJPtRx+9b71y8frfP7/VG4TcMlIpVQS4QQkGfMWOCZNmf5cZvdPTcc6pGJ4CCbpkUByjIF09qdLioSCV25en7f6paWmx3pd0lK51HzcrJS8uqa1z+yFRQ+FunrlUB2jPIIWZJkm8NLRcO95w7U/+YxpEI7SoikVmbBkh8s/dbMRacDvZ0CmAaDvkaAhiWXpxT/+/rHT1xo+uBkWs5x7TUbESKwsHrD1gajwbIWNqoIJGh0NwBkDGYrTiT6Dx/cvWVVRpaxHh+PSGrg+ld3fp6I91VKkqSOAOwbCa7Mvoc9hDBWb4kUxoLJYm/ds/O1KfAvC1dy1OfGGD9I4pUd3fFo0A2zZSdBDQrv6wnJRoNBrJxULJYUu2mLxcDBlqVi/Qm2645fbm3txokBjvF6HCnvpQRgaoLF6gzseXdTERpDM9RYIq1/9Z3P45FApRISGFOoo8svL140m9tYsxyXFLlZUZQoPplEojzoeGjQBsswSMcwMhAS/rj3pHjm3FVDWakbiVL28EHIWO2u1t07f0I0M8Kjjboka9e/cRAefQq8SNZNzdAYtXf0iA31tUm7w2yIxvqzrjRx11azCQWDEf7ZF96ky0q8tChl97SYIo+JRw7Ub10z4t5X/qe/vbRmucFkXqWEBFmG2+0++WhDnUizlCEWTygyF/IMmBpi9Yyucd92sa3DJysZJ8kibTRbVi9c/OwyNOiaRyWS8tn3z1z4V4jQigIRzwnopReeTGCG0mlJEojwEIl0P/rhkxzPJxWN6e+PSlUPPHoKDbrjIfmHExHXrKs9G+jplJDCQBcIRaXvfXehjhtQJsRo4IDAqqceYfyBPkV5FqFOYtmqdVub0LB9khGYrqx8sNzq8DwKq6TYR3rdNtFsMtCaM7Y0jAYd7XE7lKcjEJDtDtfjkCp5UZpDRmhxzsMrD5K0A6mA2WwUZElzwjoEiFGUxWxSpdZIn1+cMmvJMZTWCiFCkSzWVuCdq0YbBHxSYBGVqz5QKlomBVFV2kMyDIeraB4pH1BmL8x86JFfh4O9qpcWstbc1TE0F6V6rkioV5750MOb4aecSsvLJ933ooxUWdU3AiQFmjBx+svkN+N0VtppRufI3T7uPigoZRhaZyfmhQvLJ1aTyk71JJCWROMxTSYxYi6YIRqNUWROtegH2d2lrvn09BnzN5nMznlIJcLhONryixpeb9SxKEckOB5VTZ+UbDrzKaPX61SNhWwfJXmhD1us7motNX8yKQhzZ03TZavPlQkjo3mzp7F8UhS0jLU5PNXYaLZWIA2AZJGCyjR/WwsEInMiDTCarBUYNrodaQS8Nm/ul0DrZNB2smNYCHVGmQEEMQjqedNILisC5qWHRZU0CQN7hLDIj0Zkol0Kelyq21n/Gw9+lEMaAHkWffLsFV6v06bQDGCfIZvFjI43fcIZTXpNjQ1YBA4LAh9GGmA269HWuj2kmNKewwPsNjPa9YfDiV3vHTFCfY+0gBe4MObi8dtIA0gpXlFeRJ298A+RYbS1uYjn5rmk8JfGjw1ulw1p9eRcf6wNh/t8lymNW1bH0ujAkfN0gc2iSQSjUYf2HTonFBe5KM3hCISPhHs/wcFg+zGa0SMtIC8fGODZazdbeLWCkEBmgrbRnxrOsCyrvefHMiwKBNpP4N5O/yUIKEgrXC47qt2+hyp0OVVRsZqM6O139iULvU46l+TAaLIhX/u/LmO//z9RURT6SFMQaQCpEKFHozt49PyAnlWWdhFtdPtC/MmmywaGyaEPDjLDMUYQEElViO1fXP89xlhzcLOYDbC6+w2QvSoKBF6XU9rw8m9xWakH5ZSqQV3Y+uWN91CmQrxx9eJbdocHaQURxmTSUxzHK1oMyDchrWAUdRjHg93ppm592vgW+Z2qEIl5BQN3LpF2PrpLyDW3IbJGIj2X0qdccsZAqWs3zq20OT2aDZbYvYplgK2V25oRWS9eOExapymXlxFcbv7s7/6w/04TCKT+/A6WlzRlC5w2RbbC0gw2GQ2I0rgtiYzhoO9MV/P1TpQ+0RquAerQh3XfcXnLaDVkiDCtbd2odnMNH4nHFQUEf18fVVe7UfyiuUtWTQZkc3kn0Ic+2LYEDev/DidCdI1vXP3b43Cwkv0oAdQQDEWIjfD762u56jlVRkFh9kqcQ0V5of7on7cloVPJdfuCCrUDQdRsp2/883ymiT30wlFHr6p5fS/L6p+B+DKCUKqTHksQzyO8WbtRePD+e/U9oT6K0pDnkHZOgc2K7nQHuG1vf4iaWzr1xcUuNFb3Eo5qBEqWjjTsrl074t4oz6cOUdb9eMeteCw0JXPwSeTkeAHSgbD4859+P7li6Xy9LxDKS2H1/4T2AqGuEYTgEcFsczTX79o0HY1yODqWICm1rXtlR0c8GioCEkx7p1/a8PwyfuNzT+hCkSgWBQnlrz4cm1AJEBJFcvTm6IWjtxKk4ugtg9SAZ1783c0JxbZ73/jlOjzA80yC5xBF5ZnBV5Ah1A2Efrblfcpsdd6uf/e1qWick91sEqU009bW1uB0uddG++MSxnRePxIYCyTQWC1mHAkF95eWlj6NshxPZxOKeAVcUVHx9Kmm00tLPB5oVkgaC2uFkFNfQIjFHhc+0Xh0WZoEkXPcnpfaTzjE5ubmj8oqJi72B0MSpnH+tCOnzgglj9OJW9vbz0y9555l6TuKUgA1gqS0M3ny5CVrnn+ulIvHrhS6CsiBvoxyy2FlGtOyu8CBErH41V9t3lwIJJam733tuV8qvlRVVVmOnzpVFwyHA5CiyBDZ5e5AUL7jD4x7dQcCcigak5PgjmLxeOjE6dPbV65cmanuNGk5V/cz9MFYdXW1bf7ChfNmzZq9YsrUafMLi7wVJqPJnvnwDGMGlBgL+3zdt1u+bLly/dq1Yxdv3rx0sbExivLw4dl/AddFSaEKS67DAAAAAElFTkSuQmCC`,alt:`Profile`})}),!e&&(0,j.jsx)(mr,{type:`button`,onClick:n,children:`Sign Up`})]})]})]})}var _r=o(((e,t)=>{t.exports.IconsManifest=[{id:`ci`,name:`Circum Icons`,projectUrl:`https://circumicons.com/`,license:`MPL-2.0 license`,licenseUrl:`https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE`},{id:`fa`,name:`Font Awesome 5`,projectUrl:`https://fontawesome.com/`,license:`CC BY 4.0 License`,licenseUrl:`https://creativecommons.org/licenses/by/4.0/`},{id:`fa6`,name:`Font Awesome 6`,projectUrl:`https://fontawesome.com/`,license:`CC BY 4.0 License`,licenseUrl:`https://creativecommons.org/licenses/by/4.0/`},{id:`io`,name:`Ionicons 4`,projectUrl:`https://ionicons.com/`,license:`MIT`,licenseUrl:`https://github.com/ionic-team/ionicons/blob/master/LICENSE`},{id:`io5`,name:`Ionicons 5`,projectUrl:`https://ionicons.com/`,license:`MIT`,licenseUrl:`https://github.com/ionic-team/ionicons/blob/master/LICENSE`},{id:`md`,name:`Material Design icons`,projectUrl:`http://google.github.io/material-design-icons/`,license:`Apache License Version 2.0`,licenseUrl:`https://github.com/google/material-design-icons/blob/master/LICENSE`},{id:`ti`,name:`Typicons`,projectUrl:`http://s-ings.com/typicons/`,license:`CC BY-SA 3.0`,licenseUrl:`https://creativecommons.org/licenses/by-sa/3.0/`},{id:`go`,name:`Github Octicons icons`,projectUrl:`https://octicons.github.com/`,license:`MIT`,licenseUrl:`https://github.com/primer/octicons/blob/master/LICENSE`},{id:`fi`,name:`Feather`,projectUrl:`https://feathericons.com/`,license:`MIT`,licenseUrl:`https://github.com/feathericons/feather/blob/master/LICENSE`},{id:`lu`,name:`Lucide`,projectUrl:`https://lucide.dev/`,license:`ISC`,licenseUrl:`https://github.com/lucide-icons/lucide/blob/main/LICENSE`},{id:`gi`,name:`Game Icons`,projectUrl:`https://game-icons.net/`,license:`CC BY 3.0`,licenseUrl:`https://creativecommons.org/licenses/by/3.0/`},{id:`wi`,name:`Weather Icons`,projectUrl:`https://erikflowers.github.io/weather-icons/`,license:`SIL OFL 1.1`,licenseUrl:`http://scripts.sil.org/OFL`},{id:`di`,name:`Devicons`,projectUrl:`https://vorillaz.github.io/devicons/`,license:`MIT`,licenseUrl:`https://opensource.org/licenses/MIT`},{id:`ai`,name:`Ant Design Icons`,projectUrl:`https://github.com/ant-design/ant-design-icons`,license:`MIT`,licenseUrl:`https://opensource.org/licenses/MIT`},{id:`bs`,name:`Bootstrap Icons`,projectUrl:`https://github.com/twbs/icons`,license:`MIT`,licenseUrl:`https://opensource.org/licenses/MIT`},{id:`ri`,name:`Remix Icon`,projectUrl:`https://github.com/Remix-Design/RemixIcon`,license:`Apache License Version 2.0`,licenseUrl:`http://www.apache.org/licenses/`},{id:`fc`,name:`Flat Color Icons`,projectUrl:`https://github.com/icons8/flat-color-icons`,license:`MIT`,licenseUrl:`https://opensource.org/licenses/MIT`},{id:`gr`,name:`Grommet-Icons`,projectUrl:`https://github.com/grommet/grommet-icons`,license:`Apache License Version 2.0`,licenseUrl:`http://www.apache.org/licenses/`},{id:`hi`,name:`Heroicons`,projectUrl:`https://github.com/tailwindlabs/heroicons`,license:`MIT`,licenseUrl:`https://opensource.org/licenses/MIT`},{id:`hi2`,name:`Heroicons 2`,projectUrl:`https://github.com/tailwindlabs/heroicons`,license:`MIT`,licenseUrl:`https://opensource.org/licenses/MIT`},{id:`si`,name:`Simple Icons`,projectUrl:`https://simpleicons.org/`,license:`CC0 1.0 Universal`,licenseUrl:`https://creativecommons.org/publicdomain/zero/1.0/`},{id:`sl`,name:`Simple Line Icons`,projectUrl:`https://thesabbir.github.io/simple-line-icons/`,license:`MIT`,licenseUrl:`https://opensource.org/licenses/MIT`},{id:`im`,name:`IcoMoon Free`,projectUrl:`https://github.com/Keyamoon/IcoMoon-Free`,license:`CC BY 4.0 License`,licenseUrl:`https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt`},{id:`bi`,name:`BoxIcons`,projectUrl:`https://github.com/atisawd/boxicons`,license:`MIT`,licenseUrl:`https://github.com/atisawd/boxicons/blob/master/LICENSE`},{id:`cg`,name:`css.gg`,projectUrl:`https://github.com/astrit/css.gg`,license:`MIT`,licenseUrl:`https://opensource.org/licenses/MIT`},{id:`vsc`,name:`VS Code Icons`,projectUrl:`https://github.com/microsoft/vscode-codicons`,license:`CC BY 4.0`,licenseUrl:`https://creativecommons.org/licenses/by/4.0/`},{id:`tb`,name:`Tabler Icons`,projectUrl:`https://github.com/tabler/tabler-icons`,license:`MIT`,licenseUrl:`https://opensource.org/licenses/MIT`},{id:`tfi`,name:`Themify Icons`,projectUrl:`https://github.com/lykmapipo/themify-icons`,license:`MIT`,licenseUrl:`https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE`},{id:`rx`,name:`Radix Icons`,projectUrl:`https://icons.radix-ui.com`,license:`MIT`,licenseUrl:`https://github.com/radix-ui/icons/blob/master/LICENSE`},{id:`pi`,name:`Phosphor Icons`,projectUrl:`https://github.com/phosphor-icons/core`,license:`MIT`,licenseUrl:`https://github.com/phosphor-icons/core/blob/main/LICENSE`},{id:`lia`,name:`Icons8 Line Awesome`,projectUrl:`https://icons8.com/line-awesome`,license:`MIT`,licenseUrl:`https://github.com/icons8/line-awesome/blob/master/LICENSE.md`}]})),vr=o((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.IconContext=e.DefaultContext=void 0;var t=n(u());function n(e){return e&&e.__esModule?e:{default:e}}var r=e.DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0};e.IconContext=t.default.createContext&&t.default.createContext(r)})),yr=o((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.GenIcon=h,e.IconBase=g;var t=i(u()),n=vr(),r=[`attr`,`size`,`title`];function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(e==null)return{};var n,r,i=o(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function o(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?c(Object(n),!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e,t,n){return(t=f(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){var t=p(e,`string`);return typeof t==`symbol`?t:t+``}function p(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function m(e){return e&&e.map((e,n)=>t.default.createElement(e.tag,l({key:n},e.attr),m(e.child)))}function h(e){return n=>t.default.createElement(g,s({attr:l({},e.attr)},n),m(e.child))}function g(e){var i=n=>{var i=e.attr,o=e.size,c=e.title,u=a(e,r),d=o||n.size||`1em`,f;return n.className&&(f=n.className),e.className&&(f=(f?f+` `:``)+e.className),t.default.createElement(`svg`,s({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},n.attr,i,u,{className:f,style:l(l({color:e.color||n.color},n.style),e.style),height:d,width:d,xmlns:`http://www.w3.org/2000/svg`}),c&&t.default.createElement(`title`,null,c),e.children)};return n.IconContext===void 0?i(n.DefaultContext):t.default.createElement(n.IconContext.Consumer,null,e=>i(e))}})),br=o((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=_r();Object.keys(t).forEach(function(n){n!=="default"&&n!=="__esModule"&&(n in e&&e[n]===t[n]||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}}))});var n=yr();Object.keys(n).forEach(function(t){t!=="default"&&t!=="__esModule"&&(t in e&&e[t]===n[t]||Object.defineProperty(e,t,{enumerable:!0,get:function(){return n[t]}}))});var r=vr();Object.keys(r).forEach(function(t){t!=="default"&&t!=="__esModule"&&(t in e&&e[t]===r[t]||Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}}))})})),xr=o(((e,t)=>{var n=br().GenIcon;t.exports.FiZoomOut=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`11`,cy:`11`,r:`8`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`11`,x2:`14`,y2:`11`},child:[]}]})(e)},t.exports.FiZoomIn=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`11`,cy:`11`,r:`8`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`},child:[]},{tag:`line`,attr:{x1:`11`,y1:`8`,x2:`11`,y2:`14`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`11`,x2:`14`,y2:`11`},child:[]}]})(e)},t.exports.FiZap=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`13 2 3 14 12 14 11 22 21 10 12 10 13 2`},child:[]}]})(e)},t.exports.FiZapOff=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`12.41 6.75 13 2 10.57 4.92`},child:[]},{tag:`polyline`,attr:{points:`18.57 12.91 21 10 15.66 10`},child:[]},{tag:`polyline`,attr:{points:`8 8 3 14 12 14 11 22 16 16`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`1`,x2:`23`,y2:`23`},child:[]}]})(e)},t.exports.FiYoutube=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z`},child:[]},{tag:`polygon`,attr:{points:`9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02`},child:[]}]})(e)},t.exports.FiX=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`18`,y1:`6`,x2:`6`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`6`,x2:`18`,y2:`18`},child:[]}]})(e)},t.exports.FiXSquare=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,ry:`2`},child:[]},{tag:`line`,attr:{x1:`9`,y1:`9`,x2:`15`,y2:`15`},child:[]},{tag:`line`,attr:{x1:`15`,y1:`9`,x2:`9`,y2:`15`},child:[]}]})(e)},t.exports.FiXOctagon=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2`},child:[]},{tag:`line`,attr:{x1:`15`,y1:`9`,x2:`9`,y2:`15`},child:[]},{tag:`line`,attr:{x1:`9`,y1:`9`,x2:`15`,y2:`15`},child:[]}]})(e)},t.exports.FiXCircle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`line`,attr:{x1:`15`,y1:`9`,x2:`9`,y2:`15`},child:[]},{tag:`line`,attr:{x1:`9`,y1:`9`,x2:`15`,y2:`15`},child:[]}]})(e)},t.exports.FiWind=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2`},child:[]}]})(e)},t.exports.FiWifi=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M5 12.55a11 11 0 0 1 14.08 0`},child:[]},{tag:`path`,attr:{d:`M1.42 9a16 16 0 0 1 21.16 0`},child:[]},{tag:`path`,attr:{d:`M8.53 16.11a6 6 0 0 1 6.95 0`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`20`,x2:`12.01`,y2:`20`},child:[]}]})(e)},t.exports.FiWifiOff=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`1`,y1:`1`,x2:`23`,y2:`23`},child:[]},{tag:`path`,attr:{d:`M16.72 11.06A10.94 10.94 0 0 1 19 12.55`},child:[]},{tag:`path`,attr:{d:`M5 12.55a10.94 10.94 0 0 1 5.17-2.39`},child:[]},{tag:`path`,attr:{d:`M10.71 5.05A16 16 0 0 1 22.58 9`},child:[]},{tag:`path`,attr:{d:`M1.42 9a15.91 15.91 0 0 1 4.7-2.88`},child:[]},{tag:`path`,attr:{d:`M8.53 16.11a6 6 0 0 1 6.95 0`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`20`,x2:`12.01`,y2:`20`},child:[]}]})(e)},t.exports.FiWatch=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`7`},child:[]},{tag:`polyline`,attr:{points:`12 9 12 12 13.5 13.5`},child:[]},{tag:`path`,attr:{d:`M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83`},child:[]}]})(e)},t.exports.FiVolume=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`11 5 6 9 2 9 2 15 6 15 11 19 11 5`},child:[]}]})(e)},t.exports.FiVolumeX=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`11 5 6 9 2 9 2 15 6 15 11 19 11 5`},child:[]},{tag:`line`,attr:{x1:`23`,y1:`9`,x2:`17`,y2:`15`},child:[]},{tag:`line`,attr:{x1:`17`,y1:`9`,x2:`23`,y2:`15`},child:[]}]})(e)},t.exports.FiVolume2=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`11 5 6 9 2 9 2 15 6 15 11 19 11 5`},child:[]},{tag:`path`,attr:{d:`M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07`},child:[]}]})(e)},t.exports.FiVolume1=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`11 5 6 9 2 9 2 15 6 15 11 19 11 5`},child:[]},{tag:`path`,attr:{d:`M15.54 8.46a5 5 0 0 1 0 7.07`},child:[]}]})(e)},t.exports.FiVoicemail=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`5.5`,cy:`11.5`,r:`4.5`},child:[]},{tag:`circle`,attr:{cx:`18.5`,cy:`11.5`,r:`4.5`},child:[]},{tag:`line`,attr:{x1:`5.5`,y1:`16`,x2:`18.5`,y2:`16`},child:[]}]})(e)},t.exports.FiVideo=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`23 7 16 12 23 17 23 7`},child:[]},{tag:`rect`,attr:{x:`1`,y:`5`,width:`15`,height:`14`,rx:`2`,ry:`2`},child:[]}]})(e)},t.exports.FiVideoOff=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`1`,x2:`23`,y2:`23`},child:[]}]})(e)},t.exports.FiUsers=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2`},child:[]},{tag:`circle`,attr:{cx:`9`,cy:`7`,r:`4`},child:[]},{tag:`path`,attr:{d:`M23 21v-2a4 4 0 0 0-3-3.87`},child:[]},{tag:`path`,attr:{d:`M16 3.13a4 4 0 0 1 0 7.75`},child:[]}]})(e)},t.exports.FiUser=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`7`,r:`4`},child:[]}]})(e)},t.exports.FiUserX=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2`},child:[]},{tag:`circle`,attr:{cx:`8.5`,cy:`7`,r:`4`},child:[]},{tag:`line`,attr:{x1:`18`,y1:`8`,x2:`23`,y2:`13`},child:[]},{tag:`line`,attr:{x1:`23`,y1:`8`,x2:`18`,y2:`13`},child:[]}]})(e)},t.exports.FiUserPlus=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2`},child:[]},{tag:`circle`,attr:{cx:`8.5`,cy:`7`,r:`4`},child:[]},{tag:`line`,attr:{x1:`20`,y1:`8`,x2:`20`,y2:`14`},child:[]},{tag:`line`,attr:{x1:`23`,y1:`11`,x2:`17`,y2:`11`},child:[]}]})(e)},t.exports.FiUserMinus=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2`},child:[]},{tag:`circle`,attr:{cx:`8.5`,cy:`7`,r:`4`},child:[]},{tag:`line`,attr:{x1:`23`,y1:`11`,x2:`17`,y2:`11`},child:[]}]})(e)},t.exports.FiUserCheck=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2`},child:[]},{tag:`circle`,attr:{cx:`8.5`,cy:`7`,r:`4`},child:[]},{tag:`polyline`,attr:{points:`17 11 19 13 23 9`},child:[]}]})(e)},t.exports.FiUpload=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`},child:[]},{tag:`polyline`,attr:{points:`17 8 12 3 7 8`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`3`,x2:`12`,y2:`15`},child:[]}]})(e)},t.exports.FiUploadCloud=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`16 16 12 12 8 16`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`12`,x2:`12`,y2:`21`},child:[]},{tag:`path`,attr:{d:`M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3`},child:[]},{tag:`polyline`,attr:{points:`16 16 12 12 8 16`},child:[]}]})(e)},t.exports.FiUnlock=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`11`,width:`18`,height:`11`,rx:`2`,ry:`2`},child:[]},{tag:`path`,attr:{d:`M7 11V7a5 5 0 0 1 9.9-1`},child:[]}]})(e)},t.exports.FiUnderline=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3`},child:[]},{tag:`line`,attr:{x1:`4`,y1:`21`,x2:`20`,y2:`21`},child:[]}]})(e)},t.exports.FiUmbrella=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7`},child:[]}]})(e)},t.exports.FiType=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`4 7 4 4 20 4 20 7`},child:[]},{tag:`line`,attr:{x1:`9`,y1:`20`,x2:`15`,y2:`20`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`4`,x2:`12`,y2:`20`},child:[]}]})(e)},t.exports.FiTwitter=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z`},child:[]}]})(e)},t.exports.FiTwitch=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7`},child:[]}]})(e)},t.exports.FiTv=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`2`,y:`7`,width:`20`,height:`15`,rx:`2`,ry:`2`},child:[]},{tag:`polyline`,attr:{points:`17 2 12 7 7 2`},child:[]}]})(e)},t.exports.FiTruck=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`1`,y:`3`,width:`15`,height:`13`},child:[]},{tag:`polygon`,attr:{points:`16 8 20 8 23 11 23 16 16 16 16 8`},child:[]},{tag:`circle`,attr:{cx:`5.5`,cy:`18.5`,r:`2.5`},child:[]},{tag:`circle`,attr:{cx:`18.5`,cy:`18.5`,r:`2.5`},child:[]}]})(e)},t.exports.FiTriangle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z`},child:[]}]})(e)},t.exports.FiTrendingUp=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`23 6 13.5 15.5 8.5 10.5 1 18`},child:[]},{tag:`polyline`,attr:{points:`17 6 23 6 23 12`},child:[]}]})(e)},t.exports.FiTrendingDown=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`23 18 13.5 8.5 8.5 13.5 1 6`},child:[]},{tag:`polyline`,attr:{points:`17 18 23 18 23 12`},child:[]}]})(e)},t.exports.FiTrello=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,ry:`2`},child:[]},{tag:`rect`,attr:{x:`7`,y:`7`,width:`3`,height:`9`},child:[]},{tag:`rect`,attr:{x:`14`,y:`7`,width:`3`,height:`5`},child:[]}]})(e)},t.exports.FiTrash=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`3 6 5 6 21 6`},child:[]},{tag:`path`,attr:{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`},child:[]}]})(e)},t.exports.FiTrash2=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`3 6 5 6 21 6`},child:[]},{tag:`path`,attr:{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`},child:[]},{tag:`line`,attr:{x1:`10`,y1:`11`,x2:`10`,y2:`17`},child:[]},{tag:`line`,attr:{x1:`14`,y1:`11`,x2:`14`,y2:`17`},child:[]}]})(e)},t.exports.FiTool=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z`},child:[]}]})(e)},t.exports.FiToggleRight=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`1`,y:`5`,width:`22`,height:`14`,rx:`7`,ry:`7`},child:[]},{tag:`circle`,attr:{cx:`16`,cy:`12`,r:`3`},child:[]}]})(e)},t.exports.FiToggleLeft=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`1`,y:`5`,width:`22`,height:`14`,rx:`7`,ry:`7`},child:[]},{tag:`circle`,attr:{cx:`8`,cy:`12`,r:`3`},child:[]}]})(e)},t.exports.FiThumbsUp=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3`},child:[]}]})(e)},t.exports.FiThumbsDown=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17`},child:[]}]})(e)},t.exports.FiThermometer=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z`},child:[]}]})(e)},t.exports.FiTerminal=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`4 17 10 11 4 5`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`19`,x2:`20`,y2:`19`},child:[]}]})(e)},t.exports.FiTarget=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`6`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`2`},child:[]}]})(e)},t.exports.FiTag=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z`},child:[]},{tag:`line`,attr:{x1:`7`,y1:`7`,x2:`7.01`,y2:`7`},child:[]}]})(e)},t.exports.FiTablet=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`4`,y:`2`,width:`16`,height:`20`,rx:`2`,ry:`2`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`18`,x2:`12.01`,y2:`18`},child:[]}]})(e)},t.exports.FiTable=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18`},child:[]}]})(e)},t.exports.FiSunset=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M17 18a5 5 0 0 0-10 0`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`9`,x2:`12`,y2:`2`},child:[]},{tag:`line`,attr:{x1:`4.22`,y1:`10.22`,x2:`5.64`,y2:`11.64`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`18`,x2:`3`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`18`,x2:`23`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`18.36`,y1:`11.64`,x2:`19.78`,y2:`10.22`},child:[]},{tag:`line`,attr:{x1:`23`,y1:`22`,x2:`1`,y2:`22`},child:[]},{tag:`polyline`,attr:{points:`16 5 12 9 8 5`},child:[]}]})(e)},t.exports.FiSunrise=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M17 18a5 5 0 0 0-10 0`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`2`,x2:`12`,y2:`9`},child:[]},{tag:`line`,attr:{x1:`4.22`,y1:`10.22`,x2:`5.64`,y2:`11.64`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`18`,x2:`3`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`18`,x2:`23`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`18.36`,y1:`11.64`,x2:`19.78`,y2:`10.22`},child:[]},{tag:`line`,attr:{x1:`23`,y1:`22`,x2:`1`,y2:`22`},child:[]},{tag:`polyline`,attr:{points:`8 6 12 2 16 6`},child:[]}]})(e)},t.exports.FiSun=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`5`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`1`,x2:`12`,y2:`3`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`21`,x2:`12`,y2:`23`},child:[]},{tag:`line`,attr:{x1:`4.22`,y1:`4.22`,x2:`5.64`,y2:`5.64`},child:[]},{tag:`line`,attr:{x1:`18.36`,y1:`18.36`,x2:`19.78`,y2:`19.78`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`12`,x2:`3`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`12`,x2:`23`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`4.22`,y1:`19.78`,x2:`5.64`,y2:`18.36`},child:[]},{tag:`line`,attr:{x1:`18.36`,y1:`5.64`,x2:`19.78`,y2:`4.22`},child:[]}]})(e)},t.exports.FiStopCircle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`rect`,attr:{x:`9`,y:`9`,width:`6`,height:`6`},child:[]}]})(e)},t.exports.FiStar=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2`},child:[]}]})(e)},t.exports.FiSquare=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,ry:`2`},child:[]}]})(e)},t.exports.FiSpeaker=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`4`,y:`2`,width:`16`,height:`20`,rx:`2`,ry:`2`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`14`,r:`4`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`6`,x2:`12.01`,y2:`6`},child:[]}]})(e)},t.exports.FiSmile=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`path`,attr:{d:`M8 14s1.5 2 4 2 4-2 4-2`},child:[]},{tag:`line`,attr:{x1:`9`,y1:`9`,x2:`9.01`,y2:`9`},child:[]},{tag:`line`,attr:{x1:`15`,y1:`9`,x2:`15.01`,y2:`9`},child:[]}]})(e)},t.exports.FiSmartphone=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`5`,y:`2`,width:`14`,height:`20`,rx:`2`,ry:`2`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`18`,x2:`12.01`,y2:`18`},child:[]}]})(e)},t.exports.FiSliders=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`4`,y1:`21`,x2:`4`,y2:`14`},child:[]},{tag:`line`,attr:{x1:`4`,y1:`10`,x2:`4`,y2:`3`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`21`,x2:`12`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`8`,x2:`12`,y2:`3`},child:[]},{tag:`line`,attr:{x1:`20`,y1:`21`,x2:`20`,y2:`16`},child:[]},{tag:`line`,attr:{x1:`20`,y1:`12`,x2:`20`,y2:`3`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`14`,x2:`7`,y2:`14`},child:[]},{tag:`line`,attr:{x1:`9`,y1:`8`,x2:`15`,y2:`8`},child:[]},{tag:`line`,attr:{x1:`17`,y1:`16`,x2:`23`,y2:`16`},child:[]}]})(e)},t.exports.FiSlash=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`line`,attr:{x1:`4.93`,y1:`4.93`,x2:`19.07`,y2:`19.07`},child:[]}]})(e)},t.exports.FiSlack=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z`},child:[]},{tag:`path`,attr:{d:`M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z`},child:[]},{tag:`path`,attr:{d:`M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z`},child:[]},{tag:`path`,attr:{d:`M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z`},child:[]},{tag:`path`,attr:{d:`M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z`},child:[]},{tag:`path`,attr:{d:`M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z`},child:[]},{tag:`path`,attr:{d:`M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z`},child:[]},{tag:`path`,attr:{d:`M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z`},child:[]}]})(e)},t.exports.FiSkipForward=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`5 4 15 12 5 20 5 4`},child:[]},{tag:`line`,attr:{x1:`19`,y1:`5`,x2:`19`,y2:`19`},child:[]}]})(e)},t.exports.FiSkipBack=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`19 20 9 12 19 4 19 20`},child:[]},{tag:`line`,attr:{x1:`5`,y1:`19`,x2:`5`,y2:`5`},child:[]}]})(e)},t.exports.FiSidebar=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,ry:`2`},child:[]},{tag:`line`,attr:{x1:`9`,y1:`3`,x2:`9`,y2:`21`},child:[]}]})(e)},t.exports.FiShuffle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`16 3 21 3 21 8`},child:[]},{tag:`line`,attr:{x1:`4`,y1:`20`,x2:`21`,y2:`3`},child:[]},{tag:`polyline`,attr:{points:`21 16 21 21 16 21`},child:[]},{tag:`line`,attr:{x1:`15`,y1:`15`,x2:`21`,y2:`21`},child:[]},{tag:`line`,attr:{x1:`4`,y1:`4`,x2:`9`,y2:`9`},child:[]}]})(e)},t.exports.FiShoppingCart=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`9`,cy:`21`,r:`1`},child:[]},{tag:`circle`,attr:{cx:`20`,cy:`21`,r:`1`},child:[]},{tag:`path`,attr:{d:`M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6`},child:[]}]})(e)},t.exports.FiShoppingBag=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`6`,x2:`21`,y2:`6`},child:[]},{tag:`path`,attr:{d:`M16 10a4 4 0 0 1-8 0`},child:[]}]})(e)},t.exports.FiShield=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z`},child:[]}]})(e)},t.exports.FiShieldOff=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18`},child:[]},{tag:`path`,attr:{d:`M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`1`,x2:`23`,y2:`23`},child:[]}]})(e)},t.exports.FiShare=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8`},child:[]},{tag:`polyline`,attr:{points:`16 6 12 2 8 6`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`2`,x2:`12`,y2:`15`},child:[]}]})(e)},t.exports.FiShare2=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`18`,cy:`5`,r:`3`},child:[]},{tag:`circle`,attr:{cx:`6`,cy:`12`,r:`3`},child:[]},{tag:`circle`,attr:{cx:`18`,cy:`19`,r:`3`},child:[]},{tag:`line`,attr:{x1:`8.59`,y1:`13.51`,x2:`15.42`,y2:`17.49`},child:[]},{tag:`line`,attr:{x1:`15.41`,y1:`6.51`,x2:`8.59`,y2:`10.49`},child:[]}]})(e)},t.exports.FiSettings=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`3`},child:[]},{tag:`path`,attr:{d:`M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z`},child:[]}]})(e)},t.exports.FiServer=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`2`,y:`2`,width:`20`,height:`8`,rx:`2`,ry:`2`},child:[]},{tag:`rect`,attr:{x:`2`,y:`14`,width:`20`,height:`8`,rx:`2`,ry:`2`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`6`,x2:`6.01`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`18`,x2:`6.01`,y2:`18`},child:[]}]})(e)},t.exports.FiSend=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`22`,y1:`2`,x2:`11`,y2:`13`},child:[]},{tag:`polygon`,attr:{points:`22 2 15 22 11 13 2 9 22 2`},child:[]}]})(e)},t.exports.FiSearch=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`11`,cy:`11`,r:`8`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`},child:[]}]})(e)},t.exports.FiScissors=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`6`,cy:`6`,r:`3`},child:[]},{tag:`circle`,attr:{cx:`6`,cy:`18`,r:`3`},child:[]},{tag:`line`,attr:{x1:`20`,y1:`4`,x2:`8.12`,y2:`15.88`},child:[]},{tag:`line`,attr:{x1:`14.47`,y1:`14.48`,x2:`20`,y2:`20`},child:[]},{tag:`line`,attr:{x1:`8.12`,y1:`8.12`,x2:`12`,y2:`12`},child:[]}]})(e)},t.exports.FiSave=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z`},child:[]},{tag:`polyline`,attr:{points:`17 21 17 13 7 13 7 21`},child:[]},{tag:`polyline`,attr:{points:`7 3 7 8 15 8`},child:[]}]})(e)},t.exports.FiRss=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M4 11a9 9 0 0 1 9 9`},child:[]},{tag:`path`,attr:{d:`M4 4a16 16 0 0 1 16 16`},child:[]},{tag:`circle`,attr:{cx:`5`,cy:`19`,r:`1`},child:[]}]})(e)},t.exports.FiRotateCw=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`23 4 23 10 17 10`},child:[]},{tag:`path`,attr:{d:`M20.49 15a9 9 0 1 1-2.12-9.36L23 10`},child:[]}]})(e)},t.exports.FiRotateCcw=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`1 4 1 10 7 10`},child:[]},{tag:`path`,attr:{d:`M3.51 15a9 9 0 1 0 2.13-9.36L1 10`},child:[]}]})(e)},t.exports.FiRewind=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`11 19 2 12 11 5 11 19`},child:[]},{tag:`polygon`,attr:{points:`22 19 13 12 22 5 22 19`},child:[]}]})(e)},t.exports.FiRepeat=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`17 1 21 5 17 9`},child:[]},{tag:`path`,attr:{d:`M3 11V9a4 4 0 0 1 4-4h14`},child:[]},{tag:`polyline`,attr:{points:`7 23 3 19 7 15`},child:[]},{tag:`path`,attr:{d:`M21 13v2a4 4 0 0 1-4 4H3`},child:[]}]})(e)},t.exports.FiRefreshCw=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`23 4 23 10 17 10`},child:[]},{tag:`polyline`,attr:{points:`1 20 1 14 7 14`},child:[]},{tag:`path`,attr:{d:`M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15`},child:[]}]})(e)},t.exports.FiRefreshCcw=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`1 4 1 10 7 10`},child:[]},{tag:`polyline`,attr:{points:`23 20 23 14 17 14`},child:[]},{tag:`path`,attr:{d:`M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15`},child:[]}]})(e)},t.exports.FiRadio=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`2`},child:[]},{tag:`path`,attr:{d:`M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14`},child:[]}]})(e)},t.exports.FiPrinter=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`6 9 6 2 18 2 18 9`},child:[]},{tag:`path`,attr:{d:`M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`},child:[]},{tag:`rect`,attr:{x:`6`,y:`14`,width:`12`,height:`8`},child:[]}]})(e)},t.exports.FiPower=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M18.36 6.64a9 9 0 1 1-12.73 0`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`2`,x2:`12`,y2:`12`},child:[]}]})(e)},t.exports.FiPocket=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z`},child:[]},{tag:`polyline`,attr:{points:`8 10 12 14 16 10`},child:[]}]})(e)},t.exports.FiPlus=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`12`,y1:`5`,x2:`12`,y2:`19`},child:[]},{tag:`line`,attr:{x1:`5`,y1:`12`,x2:`19`,y2:`12`},child:[]}]})(e)},t.exports.FiPlusSquare=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,ry:`2`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`8`,x2:`12`,y2:`16`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`12`,x2:`16`,y2:`12`},child:[]}]})(e)},t.exports.FiPlusCircle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`8`,x2:`12`,y2:`16`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`12`,x2:`16`,y2:`12`},child:[]}]})(e)},t.exports.FiPlay=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`5 3 19 12 5 21 5 3`},child:[]}]})(e)},t.exports.FiPlayCircle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`polygon`,attr:{points:`10 8 16 12 10 16 10 8`},child:[]}]})(e)},t.exports.FiPieChart=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21.21 15.89A10 10 0 1 1 8 2.83`},child:[]},{tag:`path`,attr:{d:`M22 12A10 10 0 0 0 12 2v10z`},child:[]}]})(e)},t.exports.FiPhone=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`},child:[]}]})(e)},t.exports.FiPhoneOutgoing=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`23 7 23 1 17 1`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`8`,x2:`23`,y2:`1`},child:[]},{tag:`path`,attr:{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`},child:[]}]})(e)},t.exports.FiPhoneOff=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91`},child:[]},{tag:`line`,attr:{x1:`23`,y1:`1`,x2:`1`,y2:`23`},child:[]}]})(e)},t.exports.FiPhoneMissed=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`23`,y1:`1`,x2:`17`,y2:`7`},child:[]},{tag:`line`,attr:{x1:`17`,y1:`1`,x2:`23`,y2:`7`},child:[]},{tag:`path`,attr:{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`},child:[]}]})(e)},t.exports.FiPhoneIncoming=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`16 2 16 8 22 8`},child:[]},{tag:`line`,attr:{x1:`23`,y1:`1`,x2:`16`,y2:`8`},child:[]},{tag:`path`,attr:{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`},child:[]}]})(e)},t.exports.FiPhoneForwarded=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`19 1 23 5 19 9`},child:[]},{tag:`line`,attr:{x1:`15`,y1:`5`,x2:`23`,y2:`5`},child:[]},{tag:`path`,attr:{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`},child:[]}]})(e)},t.exports.FiPhoneCall=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`},child:[]}]})(e)},t.exports.FiPercent=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`19`,y1:`5`,x2:`5`,y2:`19`},child:[]},{tag:`circle`,attr:{cx:`6.5`,cy:`6.5`,r:`2.5`},child:[]},{tag:`circle`,attr:{cx:`17.5`,cy:`17.5`,r:`2.5`},child:[]}]})(e)},t.exports.FiPenTool=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M12 19l7-7 3 3-7 7-3-3z`},child:[]},{tag:`path`,attr:{d:`M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z`},child:[]},{tag:`path`,attr:{d:`M2 2l7.586 7.586`},child:[]},{tag:`circle`,attr:{cx:`11`,cy:`11`,r:`2`},child:[]}]})(e)},t.exports.FiPause=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`6`,y:`4`,width:`4`,height:`16`},child:[]},{tag:`rect`,attr:{x:`14`,y:`4`,width:`4`,height:`16`},child:[]}]})(e)},t.exports.FiPauseCircle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`line`,attr:{x1:`10`,y1:`15`,x2:`10`,y2:`9`},child:[]},{tag:`line`,attr:{x1:`14`,y1:`15`,x2:`14`,y2:`9`},child:[]}]})(e)},t.exports.FiPaperclip=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48`},child:[]}]})(e)},t.exports.FiPackage=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`16.5`,y1:`9.4`,x2:`7.5`,y2:`4.21`},child:[]},{tag:`path`,attr:{d:`M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z`},child:[]},{tag:`polyline`,attr:{points:`3.27 6.96 12 12.01 20.73 6.96`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`22.08`,x2:`12`,y2:`12`},child:[]}]})(e)},t.exports.FiOctagon=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2`},child:[]}]})(e)},t.exports.FiNavigation=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`3 11 22 2 13 21 11 13 3 11`},child:[]}]})(e)},t.exports.FiNavigation2=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`12 2 19 21 12 17 5 21 12 2`},child:[]}]})(e)},t.exports.FiMusic=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M9 18V5l12-2v13`},child:[]},{tag:`circle`,attr:{cx:`6`,cy:`18`,r:`3`},child:[]},{tag:`circle`,attr:{cx:`18`,cy:`16`,r:`3`},child:[]}]})(e)},t.exports.FiMove=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`5 9 2 12 5 15`},child:[]},{tag:`polyline`,attr:{points:`9 5 12 2 15 5`},child:[]},{tag:`polyline`,attr:{points:`15 19 12 22 9 19`},child:[]},{tag:`polyline`,attr:{points:`19 9 22 12 19 15`},child:[]},{tag:`line`,attr:{x1:`2`,y1:`12`,x2:`22`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`2`,x2:`12`,y2:`22`},child:[]}]})(e)},t.exports.FiMousePointer=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z`},child:[]},{tag:`path`,attr:{d:`M13 13l6 6`},child:[]}]})(e)},t.exports.FiMoreVertical=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`1`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`5`,r:`1`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`19`,r:`1`},child:[]}]})(e)},t.exports.FiMoreHorizontal=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`1`},child:[]},{tag:`circle`,attr:{cx:`19`,cy:`12`,r:`1`},child:[]},{tag:`circle`,attr:{cx:`5`,cy:`12`,r:`1`},child:[]}]})(e)},t.exports.FiMoon=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z`},child:[]}]})(e)},t.exports.FiMonitor=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`2`,y:`3`,width:`20`,height:`14`,rx:`2`,ry:`2`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`21`,x2:`16`,y2:`21`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`17`,x2:`12`,y2:`21`},child:[]}]})(e)},t.exports.FiMinus=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`5`,y1:`12`,x2:`19`,y2:`12`},child:[]}]})(e)},t.exports.FiMinusSquare=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,ry:`2`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`12`,x2:`16`,y2:`12`},child:[]}]})(e)},t.exports.FiMinusCircle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`12`,x2:`16`,y2:`12`},child:[]}]})(e)},t.exports.FiMinimize=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3`},child:[]}]})(e)},t.exports.FiMinimize2=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`4 14 10 14 10 20`},child:[]},{tag:`polyline`,attr:{points:`20 10 14 10 14 4`},child:[]},{tag:`line`,attr:{x1:`14`,y1:`10`,x2:`21`,y2:`3`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`21`,x2:`10`,y2:`14`},child:[]}]})(e)},t.exports.FiMic=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z`},child:[]},{tag:`path`,attr:{d:`M19 10v2a7 7 0 0 1-14 0v-2`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`19`,x2:`12`,y2:`23`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`23`,x2:`16`,y2:`23`},child:[]}]})(e)},t.exports.FiMicOff=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`1`,y1:`1`,x2:`23`,y2:`23`},child:[]},{tag:`path`,attr:{d:`M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6`},child:[]},{tag:`path`,attr:{d:`M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`19`,x2:`12`,y2:`23`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`23`,x2:`16`,y2:`23`},child:[]}]})(e)},t.exports.FiMessageSquare=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z`},child:[]}]})(e)},t.exports.FiMessageCircle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z`},child:[]}]})(e)},t.exports.FiMenu=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`3`,y1:`12`,x2:`21`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`6`,x2:`21`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`18`,x2:`21`,y2:`18`},child:[]}]})(e)},t.exports.FiMeh=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`15`,x2:`16`,y2:`15`},child:[]},{tag:`line`,attr:{x1:`9`,y1:`9`,x2:`9.01`,y2:`9`},child:[]},{tag:`line`,attr:{x1:`15`,y1:`9`,x2:`15.01`,y2:`9`},child:[]}]})(e)},t.exports.FiMaximize=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3`},child:[]}]})(e)},t.exports.FiMaximize2=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`15 3 21 3 21 9`},child:[]},{tag:`polyline`,attr:{points:`9 21 3 21 3 15`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`3`,x2:`14`,y2:`10`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`21`,x2:`10`,y2:`14`},child:[]}]})(e)},t.exports.FiMap=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`2`,x2:`8`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`6`,x2:`16`,y2:`22`},child:[]}]})(e)},t.exports.FiMapPin=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`10`,r:`3`},child:[]}]})(e)},t.exports.FiMail=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`},child:[]},{tag:`polyline`,attr:{points:`22,6 12,13 2,6`},child:[]}]})(e)},t.exports.FiLogOut=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`},child:[]},{tag:`polyline`,attr:{points:`16 17 21 12 16 7`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`12`,x2:`9`,y2:`12`},child:[]}]})(e)},t.exports.FiLogIn=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4`},child:[]},{tag:`polyline`,attr:{points:`10 17 15 12 10 7`},child:[]},{tag:`line`,attr:{x1:`15`,y1:`12`,x2:`3`,y2:`12`},child:[]}]})(e)},t.exports.FiLock=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`11`,width:`18`,height:`11`,rx:`2`,ry:`2`},child:[]},{tag:`path`,attr:{d:`M7 11V7a5 5 0 0 1 10 0v4`},child:[]}]})(e)},t.exports.FiLoader=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`12`,y1:`2`,x2:`12`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`18`,x2:`12`,y2:`22`},child:[]},{tag:`line`,attr:{x1:`4.93`,y1:`4.93`,x2:`7.76`,y2:`7.76`},child:[]},{tag:`line`,attr:{x1:`16.24`,y1:`16.24`,x2:`19.07`,y2:`19.07`},child:[]},{tag:`line`,attr:{x1:`2`,y1:`12`,x2:`6`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`18`,y1:`12`,x2:`22`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`4.93`,y1:`19.07`,x2:`7.76`,y2:`16.24`},child:[]},{tag:`line`,attr:{x1:`16.24`,y1:`7.76`,x2:`19.07`,y2:`4.93`},child:[]}]})(e)},t.exports.FiList=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`8`,y1:`6`,x2:`21`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`12`,x2:`21`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`18`,x2:`21`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`6`,x2:`3.01`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`12`,x2:`3.01`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`18`,x2:`3.01`,y2:`18`},child:[]}]})(e)},t.exports.FiLinkedin=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z`},child:[]},{tag:`rect`,attr:{x:`2`,y:`9`,width:`4`,height:`12`},child:[]},{tag:`circle`,attr:{cx:`4`,cy:`4`,r:`2`},child:[]}]})(e)},t.exports.FiLink=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71`},child:[]},{tag:`path`,attr:{d:`M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71`},child:[]}]})(e)},t.exports.FiLink2=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`12`,x2:`16`,y2:`12`},child:[]}]})(e)},t.exports.FiLifeBuoy=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`4`},child:[]},{tag:`line`,attr:{x1:`4.93`,y1:`4.93`,x2:`9.17`,y2:`9.17`},child:[]},{tag:`line`,attr:{x1:`14.83`,y1:`14.83`,x2:`19.07`,y2:`19.07`},child:[]},{tag:`line`,attr:{x1:`14.83`,y1:`9.17`,x2:`19.07`,y2:`4.93`},child:[]},{tag:`line`,attr:{x1:`14.83`,y1:`9.17`,x2:`18.36`,y2:`5.64`},child:[]},{tag:`line`,attr:{x1:`4.93`,y1:`19.07`,x2:`9.17`,y2:`14.83`},child:[]}]})(e)},t.exports.FiLayout=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,ry:`2`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`9`,x2:`21`,y2:`9`},child:[]},{tag:`line`,attr:{x1:`9`,y1:`21`,x2:`9`,y2:`9`},child:[]}]})(e)},t.exports.FiLayers=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`12 2 2 7 12 12 22 7 12 2`},child:[]},{tag:`polyline`,attr:{points:`2 17 12 22 22 17`},child:[]},{tag:`polyline`,attr:{points:`2 12 12 17 22 12`},child:[]}]})(e)},t.exports.FiKey=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4`},child:[]}]})(e)},t.exports.FiItalic=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`19`,y1:`4`,x2:`10`,y2:`4`},child:[]},{tag:`line`,attr:{x1:`14`,y1:`20`,x2:`5`,y2:`20`},child:[]},{tag:`line`,attr:{x1:`15`,y1:`4`,x2:`9`,y2:`20`},child:[]}]})(e)},t.exports.FiInstagram=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`2`,y:`2`,width:`20`,height:`20`,rx:`5`,ry:`5`},child:[]},{tag:`path`,attr:{d:`M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`},child:[]},{tag:`line`,attr:{x1:`17.5`,y1:`6.5`,x2:`17.51`,y2:`6.5`},child:[]}]})(e)},t.exports.FiInfo=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`16`,x2:`12`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`8`,x2:`12.01`,y2:`8`},child:[]}]})(e)},t.exports.FiInbox=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`22 12 16 12 14 15 10 15 8 12 2 12`},child:[]},{tag:`path`,attr:{d:`M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`},child:[]}]})(e)},t.exports.FiImage=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,ry:`2`},child:[]},{tag:`circle`,attr:{cx:`8.5`,cy:`8.5`,r:`1.5`},child:[]},{tag:`polyline`,attr:{points:`21 15 16 10 5 21`},child:[]}]})(e)},t.exports.FiHome=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`},child:[]},{tag:`polyline`,attr:{points:`9 22 9 12 15 12 15 22`},child:[]}]})(e)},t.exports.FiHexagon=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z`},child:[]}]})(e)},t.exports.FiHelpCircle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`path`,attr:{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`17`,x2:`12.01`,y2:`17`},child:[]}]})(e)},t.exports.FiHeart=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z`},child:[]}]})(e)},t.exports.FiHeadphones=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M3 18v-6a9 9 0 0 1 18 0v6`},child:[]},{tag:`path`,attr:{d:`M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z`},child:[]}]})(e)},t.exports.FiHash=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`4`,y1:`9`,x2:`20`,y2:`9`},child:[]},{tag:`line`,attr:{x1:`4`,y1:`15`,x2:`20`,y2:`15`},child:[]},{tag:`line`,attr:{x1:`10`,y1:`3`,x2:`8`,y2:`21`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`3`,x2:`14`,y2:`21`},child:[]}]})(e)},t.exports.FiHardDrive=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`22`,y1:`12`,x2:`2`,y2:`12`},child:[]},{tag:`path`,attr:{d:`M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`16`,x2:`6.01`,y2:`16`},child:[]},{tag:`line`,attr:{x1:`10`,y1:`16`,x2:`10.01`,y2:`16`},child:[]}]})(e)},t.exports.FiGrid=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`3`,width:`7`,height:`7`},child:[]},{tag:`rect`,attr:{x:`14`,y:`3`,width:`7`,height:`7`},child:[]},{tag:`rect`,attr:{x:`14`,y:`14`,width:`7`,height:`7`},child:[]},{tag:`rect`,attr:{x:`3`,y:`14`,width:`7`,height:`7`},child:[]}]})(e)},t.exports.FiGlobe=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`line`,attr:{x1:`2`,y1:`12`,x2:`22`,y2:`12`},child:[]},{tag:`path`,attr:{d:`M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z`},child:[]}]})(e)},t.exports.FiGitlab=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z`},child:[]}]})(e)},t.exports.FiGithub=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22`},child:[]}]})(e)},t.exports.FiGitPullRequest=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`18`,cy:`18`,r:`3`},child:[]},{tag:`circle`,attr:{cx:`6`,cy:`6`,r:`3`},child:[]},{tag:`path`,attr:{d:`M13 6h3a2 2 0 0 1 2 2v7`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`9`,x2:`6`,y2:`21`},child:[]}]})(e)},t.exports.FiGitMerge=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`18`,cy:`18`,r:`3`},child:[]},{tag:`circle`,attr:{cx:`6`,cy:`6`,r:`3`},child:[]},{tag:`path`,attr:{d:`M6 21V9a9 9 0 0 0 9 9`},child:[]}]})(e)},t.exports.FiGitCommit=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`4`},child:[]},{tag:`line`,attr:{x1:`1.05`,y1:`12`,x2:`7`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`17.01`,y1:`12`,x2:`22.96`,y2:`12`},child:[]}]})(e)},t.exports.FiGitBranch=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`6`,y1:`3`,x2:`6`,y2:`15`},child:[]},{tag:`circle`,attr:{cx:`18`,cy:`6`,r:`3`},child:[]},{tag:`circle`,attr:{cx:`6`,cy:`18`,r:`3`},child:[]},{tag:`path`,attr:{d:`M18 9a9 9 0 0 1-9 9`},child:[]}]})(e)},t.exports.FiGift=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`20 12 20 22 4 22 4 12`},child:[]},{tag:`rect`,attr:{x:`2`,y:`7`,width:`20`,height:`5`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`22`,x2:`12`,y2:`7`},child:[]},{tag:`path`,attr:{d:`M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z`},child:[]},{tag:`path`,attr:{d:`M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z`},child:[]}]})(e)},t.exports.FiFrown=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`path`,attr:{d:`M16 16s-1.5-2-4-2-4 2-4 2`},child:[]},{tag:`line`,attr:{x1:`9`,y1:`9`,x2:`9.01`,y2:`9`},child:[]},{tag:`line`,attr:{x1:`15`,y1:`9`,x2:`15.01`,y2:`9`},child:[]}]})(e)},t.exports.FiFramer=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7`},child:[]}]})(e)},t.exports.FiFolder=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z`},child:[]}]})(e)},t.exports.FiFolderPlus=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`11`,x2:`12`,y2:`17`},child:[]},{tag:`line`,attr:{x1:`9`,y1:`14`,x2:`15`,y2:`14`},child:[]}]})(e)},t.exports.FiFolderMinus=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z`},child:[]},{tag:`line`,attr:{x1:`9`,y1:`14`,x2:`15`,y2:`14`},child:[]}]})(e)},t.exports.FiFlag=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z`},child:[]},{tag:`line`,attr:{x1:`4`,y1:`22`,x2:`4`,y2:`15`},child:[]}]})(e)},t.exports.FiFilter=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3`},child:[]}]})(e)},t.exports.FiFilm=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`2`,y:`2`,width:`20`,height:`20`,rx:`2.18`,ry:`2.18`},child:[]},{tag:`line`,attr:{x1:`7`,y1:`2`,x2:`7`,y2:`22`},child:[]},{tag:`line`,attr:{x1:`17`,y1:`2`,x2:`17`,y2:`22`},child:[]},{tag:`line`,attr:{x1:`2`,y1:`12`,x2:`22`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`2`,y1:`7`,x2:`7`,y2:`7`},child:[]},{tag:`line`,attr:{x1:`2`,y1:`17`,x2:`7`,y2:`17`},child:[]},{tag:`line`,attr:{x1:`17`,y1:`17`,x2:`22`,y2:`17`},child:[]},{tag:`line`,attr:{x1:`17`,y1:`7`,x2:`22`,y2:`7`},child:[]}]})(e)},t.exports.FiFile=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z`},child:[]},{tag:`polyline`,attr:{points:`13 2 13 9 20 9`},child:[]}]})(e)},t.exports.FiFileText=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`},child:[]},{tag:`polyline`,attr:{points:`14 2 14 8 20 8`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`13`,x2:`8`,y2:`13`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`17`,x2:`8`,y2:`17`},child:[]},{tag:`polyline`,attr:{points:`10 9 9 9 8 9`},child:[]}]})(e)},t.exports.FiFilePlus=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`},child:[]},{tag:`polyline`,attr:{points:`14 2 14 8 20 8`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`18`,x2:`12`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`9`,y1:`15`,x2:`15`,y2:`15`},child:[]}]})(e)},t.exports.FiFileMinus=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`},child:[]},{tag:`polyline`,attr:{points:`14 2 14 8 20 8`},child:[]},{tag:`line`,attr:{x1:`9`,y1:`15`,x2:`15`,y2:`15`},child:[]}]})(e)},t.exports.FiFigma=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z`},child:[]},{tag:`path`,attr:{d:`M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z`},child:[]},{tag:`path`,attr:{d:`M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z`},child:[]},{tag:`path`,attr:{d:`M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z`},child:[]},{tag:`path`,attr:{d:`M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z`},child:[]}]})(e)},t.exports.FiFeather=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`8`,x2:`2`,y2:`22`},child:[]},{tag:`line`,attr:{x1:`17.5`,y1:`15`,x2:`9`,y2:`15`},child:[]}]})(e)},t.exports.FiFastForward=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`13 19 22 12 13 5 13 19`},child:[]},{tag:`polygon`,attr:{points:`2 19 11 12 2 5 2 19`},child:[]}]})(e)},t.exports.FiFacebook=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z`},child:[]}]})(e)},t.exports.FiEye=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`3`},child:[]}]})(e)},t.exports.FiEyeOff=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`1`,x2:`23`,y2:`23`},child:[]}]})(e)},t.exports.FiExternalLink=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`},child:[]},{tag:`polyline`,attr:{points:`15 3 21 3 21 9`},child:[]},{tag:`line`,attr:{x1:`10`,y1:`14`,x2:`21`,y2:`3`},child:[]}]})(e)},t.exports.FiEdit=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7`},child:[]},{tag:`path`,attr:{d:`M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z`},child:[]}]})(e)},t.exports.FiEdit3=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M12 20h9`},child:[]},{tag:`path`,attr:{d:`M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z`},child:[]}]})(e)},t.exports.FiEdit2=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z`},child:[]}]})(e)},t.exports.FiDroplet=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z`},child:[]}]})(e)},t.exports.FiDribbble=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`path`,attr:{d:`M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32`},child:[]}]})(e)},t.exports.FiDownload=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`},child:[]},{tag:`polyline`,attr:{points:`7 10 12 15 17 10`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`15`,x2:`12`,y2:`3`},child:[]}]})(e)},t.exports.FiDownloadCloud=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`8 17 12 21 16 17`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`12`,x2:`12`,y2:`21`},child:[]},{tag:`path`,attr:{d:`M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29`},child:[]}]})(e)},t.exports.FiDollarSign=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`12`,y1:`1`,x2:`12`,y2:`23`},child:[]},{tag:`path`,attr:{d:`M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6`},child:[]}]})(e)},t.exports.FiDivide=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`6`,r:`2`},child:[]},{tag:`line`,attr:{x1:`5`,y1:`12`,x2:`19`,y2:`12`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`18`,r:`2`},child:[]}]})(e)},t.exports.FiDivideSquare=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,ry:`2`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`12`,x2:`16`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`16`,x2:`12`,y2:`16`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`8`,x2:`12`,y2:`8`},child:[]}]})(e)},t.exports.FiDivideCircle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`8`,y1:`12`,x2:`16`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`16`,x2:`12`,y2:`16`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`8`,x2:`12`,y2:`8`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]}]})(e)},t.exports.FiDisc=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`3`},child:[]}]})(e)},t.exports.FiDelete=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z`},child:[]},{tag:`line`,attr:{x1:`18`,y1:`9`,x2:`12`,y2:`15`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`9`,x2:`18`,y2:`15`},child:[]}]})(e)},t.exports.FiDatabase=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`ellipse`,attr:{cx:`12`,cy:`5`,rx:`9`,ry:`3`},child:[]},{tag:`path`,attr:{d:`M21 12c0 1.66-4 3-9 3s-9-1.34-9-3`},child:[]},{tag:`path`,attr:{d:`M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5`},child:[]}]})(e)},t.exports.FiCrosshair=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`line`,attr:{x1:`22`,y1:`12`,x2:`18`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`12`,x2:`2`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`6`,x2:`12`,y2:`2`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`22`,x2:`12`,y2:`18`},child:[]}]})(e)},t.exports.FiCrop=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M6.13 1L6 16a2 2 0 0 0 2 2h15`},child:[]},{tag:`path`,attr:{d:`M1 6.13L16 6a2 2 0 0 1 2 2v15`},child:[]}]})(e)},t.exports.FiCreditCard=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`1`,y:`4`,width:`22`,height:`16`,rx:`2`,ry:`2`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`10`,x2:`23`,y2:`10`},child:[]}]})(e)},t.exports.FiCpu=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`,ry:`2`},child:[]},{tag:`rect`,attr:{x:`9`,y:`9`,width:`6`,height:`6`},child:[]},{tag:`line`,attr:{x1:`9`,y1:`1`,x2:`9`,y2:`4`},child:[]},{tag:`line`,attr:{x1:`15`,y1:`1`,x2:`15`,y2:`4`},child:[]},{tag:`line`,attr:{x1:`9`,y1:`20`,x2:`9`,y2:`23`},child:[]},{tag:`line`,attr:{x1:`15`,y1:`20`,x2:`15`,y2:`23`},child:[]},{tag:`line`,attr:{x1:`20`,y1:`9`,x2:`23`,y2:`9`},child:[]},{tag:`line`,attr:{x1:`20`,y1:`14`,x2:`23`,y2:`14`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`9`,x2:`4`,y2:`9`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`14`,x2:`4`,y2:`14`},child:[]}]})(e)},t.exports.FiCornerUpRight=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`15 14 20 9 15 4`},child:[]},{tag:`path`,attr:{d:`M4 20v-7a4 4 0 0 1 4-4h12`},child:[]}]})(e)},t.exports.FiCornerUpLeft=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`9 14 4 9 9 4`},child:[]},{tag:`path`,attr:{d:`M20 20v-7a4 4 0 0 0-4-4H4`},child:[]}]})(e)},t.exports.FiCornerRightUp=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`10 9 15 4 20 9`},child:[]},{tag:`path`,attr:{d:`M4 20h7a4 4 0 0 0 4-4V4`},child:[]}]})(e)},t.exports.FiCornerRightDown=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`10 15 15 20 20 15`},child:[]},{tag:`path`,attr:{d:`M4 4h7a4 4 0 0 1 4 4v12`},child:[]}]})(e)},t.exports.FiCornerLeftUp=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`14 9 9 4 4 9`},child:[]},{tag:`path`,attr:{d:`M20 20h-7a4 4 0 0 1-4-4V4`},child:[]}]})(e)},t.exports.FiCornerLeftDown=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`14 15 9 20 4 15`},child:[]},{tag:`path`,attr:{d:`M20 4h-7a4 4 0 0 0-4 4v12`},child:[]}]})(e)},t.exports.FiCornerDownRight=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`15 10 20 15 15 20`},child:[]},{tag:`path`,attr:{d:`M4 4v7a4 4 0 0 0 4 4h12`},child:[]}]})(e)},t.exports.FiCornerDownLeft=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`9 10 4 15 9 20`},child:[]},{tag:`path`,attr:{d:`M20 4v7a4 4 0 0 1-4 4H4`},child:[]}]})(e)},t.exports.FiCopy=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,ry:`2`},child:[]},{tag:`path`,attr:{d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`},child:[]}]})(e)},t.exports.FiCompass=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`polygon`,attr:{points:`16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76`},child:[]}]})(e)},t.exports.FiCommand=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z`},child:[]}]})(e)},t.exports.FiColumns=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18`},child:[]}]})(e)},t.exports.FiCoffee=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M18 8h1a4 4 0 0 1 0 8h-1`},child:[]},{tag:`path`,attr:{d:`M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`1`,x2:`6`,y2:`4`},child:[]},{tag:`line`,attr:{x1:`10`,y1:`1`,x2:`10`,y2:`4`},child:[]},{tag:`line`,attr:{x1:`14`,y1:`1`,x2:`14`,y2:`4`},child:[]}]})(e)},t.exports.FiCodesandbox=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z`},child:[]},{tag:`polyline`,attr:{points:`7.5 4.21 12 6.81 16.5 4.21`},child:[]},{tag:`polyline`,attr:{points:`7.5 19.79 7.5 14.6 3 12`},child:[]},{tag:`polyline`,attr:{points:`21 12 16.5 14.6 16.5 19.79`},child:[]},{tag:`polyline`,attr:{points:`3.27 6.96 12 12.01 20.73 6.96`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`22.08`,x2:`12`,y2:`12`},child:[]}]})(e)},t.exports.FiCodepen=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`22`,x2:`12`,y2:`15.5`},child:[]},{tag:`polyline`,attr:{points:`22 8.5 12 15.5 2 8.5`},child:[]},{tag:`polyline`,attr:{points:`2 15.5 12 8.5 22 15.5`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`2`,x2:`12`,y2:`8.5`},child:[]}]})(e)},t.exports.FiCode=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`16 18 22 12 16 6`},child:[]},{tag:`polyline`,attr:{points:`8 6 2 12 8 18`},child:[]}]})(e)},t.exports.FiCloud=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`},child:[]}]})(e)},t.exports.FiCloudSnow=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`16`,x2:`8.01`,y2:`16`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`20`,x2:`8.01`,y2:`20`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`18`,x2:`12.01`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`22`,x2:`12.01`,y2:`22`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`16`,x2:`16.01`,y2:`16`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`20`,x2:`16.01`,y2:`20`},child:[]}]})(e)},t.exports.FiCloudRain=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`16`,y1:`13`,x2:`16`,y2:`21`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`13`,x2:`8`,y2:`21`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`15`,x2:`12`,y2:`23`},child:[]},{tag:`path`,attr:{d:`M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25`},child:[]}]})(e)},t.exports.FiCloudOff=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`1`,x2:`23`,y2:`23`},child:[]}]})(e)},t.exports.FiCloudLightning=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9`},child:[]},{tag:`polyline`,attr:{points:`13 11 9 17 15 17 11 23`},child:[]}]})(e)},t.exports.FiCloudDrizzle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`8`,y1:`19`,x2:`8`,y2:`21`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`13`,x2:`8`,y2:`15`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`19`,x2:`16`,y2:`21`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`13`,x2:`16`,y2:`15`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`21`,x2:`12`,y2:`23`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`15`,x2:`12`,y2:`17`},child:[]},{tag:`path`,attr:{d:`M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25`},child:[]}]})(e)},t.exports.FiClock=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`polyline`,attr:{points:`12 6 12 12 16 14`},child:[]}]})(e)},t.exports.FiClipboard=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`},child:[]},{tag:`rect`,attr:{x:`8`,y:`2`,width:`8`,height:`4`,rx:`1`,ry:`1`},child:[]}]})(e)},t.exports.FiCircle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]}]})(e)},t.exports.FiChrome=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`4`},child:[]},{tag:`line`,attr:{x1:`21.17`,y1:`8`,x2:`12`,y2:`8`},child:[]},{tag:`line`,attr:{x1:`3.95`,y1:`6.06`,x2:`8.54`,y2:`14`},child:[]},{tag:`line`,attr:{x1:`10.88`,y1:`21.94`,x2:`15.46`,y2:`14`},child:[]}]})(e)},t.exports.FiChevronsUp=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`17 11 12 6 7 11`},child:[]},{tag:`polyline`,attr:{points:`17 18 12 13 7 18`},child:[]}]})(e)},t.exports.FiChevronsRight=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`13 17 18 12 13 7`},child:[]},{tag:`polyline`,attr:{points:`6 17 11 12 6 7`},child:[]}]})(e)},t.exports.FiChevronsLeft=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`11 17 6 12 11 7`},child:[]},{tag:`polyline`,attr:{points:`18 17 13 12 18 7`},child:[]}]})(e)},t.exports.FiChevronsDown=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`7 13 12 18 17 13`},child:[]},{tag:`polyline`,attr:{points:`7 6 12 11 17 6`},child:[]}]})(e)},t.exports.FiChevronUp=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`18 15 12 9 6 15`},child:[]}]})(e)},t.exports.FiChevronRight=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`9 18 15 12 9 6`},child:[]}]})(e)},t.exports.FiChevronLeft=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`15 18 9 12 15 6`},child:[]}]})(e)},t.exports.FiChevronDown=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`6 9 12 15 18 9`},child:[]}]})(e)},t.exports.FiCheck=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`20 6 9 17 4 12`},child:[]}]})(e)},t.exports.FiCheckSquare=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`9 11 12 14 22 4`},child:[]},{tag:`path`,attr:{d:`M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11`},child:[]}]})(e)},t.exports.FiCheckCircle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M22 11.08V12a10 10 0 1 1-5.93-9.14`},child:[]},{tag:`polyline`,attr:{points:`22 4 12 14.01 9 11.01`},child:[]}]})(e)},t.exports.FiCast=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6`},child:[]},{tag:`line`,attr:{x1:`2`,y1:`20`,x2:`2.01`,y2:`20`},child:[]}]})(e)},t.exports.FiCamera=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`13`,r:`4`},child:[]}]})(e)},t.exports.FiCameraOff=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`1`,y1:`1`,x2:`23`,y2:`23`},child:[]},{tag:`path`,attr:{d:`M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56`},child:[]}]})(e)},t.exports.FiCalendar=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`4`,width:`18`,height:`18`,rx:`2`,ry:`2`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`2`,x2:`16`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`2`,x2:`8`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`10`,x2:`21`,y2:`10`},child:[]}]})(e)},t.exports.FiBriefcase=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`2`,y:`7`,width:`20`,height:`14`,rx:`2`,ry:`2`},child:[]},{tag:`path`,attr:{d:`M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`},child:[]}]})(e)},t.exports.FiBox=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z`},child:[]},{tag:`polyline`,attr:{points:`3.27 6.96 12 12.01 20.73 6.96`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`22.08`,x2:`12`,y2:`12`},child:[]}]})(e)},t.exports.FiBookmark=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z`},child:[]}]})(e)},t.exports.FiBook=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M4 19.5A2.5 2.5 0 0 1 6.5 17H20`},child:[]},{tag:`path`,attr:{d:`M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z`},child:[]}]})(e)},t.exports.FiBookOpen=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z`},child:[]},{tag:`path`,attr:{d:`M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z`},child:[]}]})(e)},t.exports.FiBold=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z`},child:[]},{tag:`path`,attr:{d:`M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z`},child:[]}]})(e)},t.exports.FiBluetooth=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5`},child:[]}]})(e)},t.exports.FiBell=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9`},child:[]},{tag:`path`,attr:{d:`M13.73 21a2 2 0 0 1-3.46 0`},child:[]}]})(e)},t.exports.FiBellOff=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M13.73 21a2 2 0 0 1-3.46 0`},child:[]},{tag:`path`,attr:{d:`M18.63 13A17.89 17.89 0 0 1 18 8`},child:[]},{tag:`path`,attr:{d:`M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14`},child:[]},{tag:`path`,attr:{d:`M18 8a6 6 0 0 0-9.33-5`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`1`,x2:`23`,y2:`23`},child:[]}]})(e)},t.exports.FiBattery=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`1`,y:`6`,width:`18`,height:`12`,rx:`2`,ry:`2`},child:[]},{tag:`line`,attr:{x1:`23`,y1:`13`,x2:`23`,y2:`11`},child:[]}]})(e)},t.exports.FiBatteryCharging=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19`},child:[]},{tag:`line`,attr:{x1:`23`,y1:`13`,x2:`23`,y2:`11`},child:[]},{tag:`polyline`,attr:{points:`11 6 7 12 13 12 9 18`},child:[]}]})(e)},t.exports.FiBarChart=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`12`,y1:`20`,x2:`12`,y2:`10`},child:[]},{tag:`line`,attr:{x1:`18`,y1:`20`,x2:`18`,y2:`4`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`20`,x2:`6`,y2:`16`},child:[]}]})(e)},t.exports.FiBarChart2=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`18`,y1:`20`,x2:`18`,y2:`10`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`20`,x2:`12`,y2:`4`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`20`,x2:`6`,y2:`14`},child:[]}]})(e)},t.exports.FiAward=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`8`,r:`7`},child:[]},{tag:`polyline`,attr:{points:`8.21 13.89 7 23 12 20 17 23 15.79 13.88`},child:[]}]})(e)},t.exports.FiAtSign=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`4`},child:[]},{tag:`path`,attr:{d:`M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94`},child:[]}]})(e)},t.exports.FiArrowUp=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`12`,y1:`19`,x2:`12`,y2:`5`},child:[]},{tag:`polyline`,attr:{points:`5 12 12 5 19 12`},child:[]}]})(e)},t.exports.FiArrowUpRight=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`7`,y1:`17`,x2:`17`,y2:`7`},child:[]},{tag:`polyline`,attr:{points:`7 7 17 7 17 17`},child:[]}]})(e)},t.exports.FiArrowUpLeft=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`17`,y1:`17`,x2:`7`,y2:`7`},child:[]},{tag:`polyline`,attr:{points:`7 17 7 7 17 7`},child:[]}]})(e)},t.exports.FiArrowUpCircle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`polyline`,attr:{points:`16 12 12 8 8 12`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`16`,x2:`12`,y2:`8`},child:[]}]})(e)},t.exports.FiArrowRight=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`5`,y1:`12`,x2:`19`,y2:`12`},child:[]},{tag:`polyline`,attr:{points:`12 5 19 12 12 19`},child:[]}]})(e)},t.exports.FiArrowRightCircle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`polyline`,attr:{points:`12 16 16 12 12 8`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`12`,x2:`16`,y2:`12`},child:[]}]})(e)},t.exports.FiArrowLeft=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`19`,y1:`12`,x2:`5`,y2:`12`},child:[]},{tag:`polyline`,attr:{points:`12 19 5 12 12 5`},child:[]}]})(e)},t.exports.FiArrowLeftCircle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`polyline`,attr:{points:`12 8 8 12 12 16`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`12`,x2:`8`,y2:`12`},child:[]}]})(e)},t.exports.FiArrowDown=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`12`,y1:`5`,x2:`12`,y2:`19`},child:[]},{tag:`polyline`,attr:{points:`19 12 12 19 5 12`},child:[]}]})(e)},t.exports.FiArrowDownRight=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`7`,y1:`7`,x2:`17`,y2:`17`},child:[]},{tag:`polyline`,attr:{points:`17 7 17 17 7 17`},child:[]}]})(e)},t.exports.FiArrowDownLeft=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`17`,y1:`7`,x2:`7`,y2:`17`},child:[]},{tag:`polyline`,attr:{points:`17 17 7 17 7 7`},child:[]}]})(e)},t.exports.FiArrowDownCircle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`polyline`,attr:{points:`8 12 12 16 16 12`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`8`,x2:`12`,y2:`16`},child:[]}]})(e)},t.exports.FiArchive=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`21 8 21 21 3 21 3 8`},child:[]},{tag:`rect`,attr:{x:`1`,y:`3`,width:`22`,height:`5`},child:[]},{tag:`line`,attr:{x1:`10`,y1:`12`,x2:`14`,y2:`12`},child:[]}]})(e)},t.exports.FiAperture=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`line`,attr:{x1:`14.31`,y1:`8`,x2:`20.05`,y2:`17.94`},child:[]},{tag:`line`,attr:{x1:`9.69`,y1:`8`,x2:`21.17`,y2:`8`},child:[]},{tag:`line`,attr:{x1:`7.38`,y1:`12`,x2:`13.12`,y2:`2.06`},child:[]},{tag:`line`,attr:{x1:`9.69`,y1:`16`,x2:`3.95`,y2:`6.06`},child:[]},{tag:`line`,attr:{x1:`14.31`,y1:`16`,x2:`2.83`,y2:`16`},child:[]},{tag:`line`,attr:{x1:`16.62`,y1:`12`,x2:`10.88`,y2:`21.94`},child:[]}]})(e)},t.exports.FiAnchor=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`5`,r:`3`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`22`,x2:`12`,y2:`8`},child:[]},{tag:`path`,attr:{d:`M5 12H2a10 10 0 0 0 20 0h-3`},child:[]}]})(e)},t.exports.FiAlignRight=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`21`,y1:`10`,x2:`7`,y2:`10`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`6`,x2:`3`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`14`,x2:`3`,y2:`14`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`18`,x2:`7`,y2:`18`},child:[]}]})(e)},t.exports.FiAlignLeft=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`17`,y1:`10`,x2:`3`,y2:`10`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`6`,x2:`3`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`14`,x2:`3`,y2:`14`},child:[]},{tag:`line`,attr:{x1:`17`,y1:`18`,x2:`3`,y2:`18`},child:[]}]})(e)},t.exports.FiAlignJustify=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`21`,y1:`10`,x2:`3`,y2:`10`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`6`,x2:`3`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`14`,x2:`3`,y2:`14`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`18`,x2:`3`,y2:`18`},child:[]}]})(e)},t.exports.FiAlignCenter=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`18`,y1:`10`,x2:`6`,y2:`10`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`6`,x2:`3`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`14`,x2:`3`,y2:`14`},child:[]},{tag:`line`,attr:{x1:`18`,y1:`18`,x2:`6`,y2:`18`},child:[]}]})(e)},t.exports.FiAlertTriangle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`9`,x2:`12`,y2:`13`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`17`,x2:`12.01`,y2:`17`},child:[]}]})(e)},t.exports.FiAlertOctagon=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`8`,x2:`12`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`16`,x2:`12.01`,y2:`16`},child:[]}]})(e)},t.exports.FiAlertCircle=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`8`,x2:`12`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`16`,x2:`12.01`,y2:`16`},child:[]}]})(e)},t.exports.FiAirplay=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1`},child:[]},{tag:`polygon`,attr:{points:`12 15 17 21 7 21 12 15`},child:[]}]})(e)},t.exports.FiActivity=function(e){return n({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`22 12 18 12 15 21 9 3 6 12 2 12`},child:[]}]})(e)}}))(),Sr=`/project-forecast/assets/weather-B4Nk2iEj.png`,Cr=A.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 50px);
  min-height: 560px;
  margin: 0;
  overflow: visible;
  display: flex;
  justify-content: center;
  background: #111111;

  @media screen and (min-width: 564px) {
    height: calc(100vh - 70px);
    min-height: 600px;
  }

  @media screen and (min-width: 1160px) {
    height: calc(100vh - 82px);
    min-height: 650px;
  }
`,wr=A.div`
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
`,Tr=A.div`
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
`,Er=A.h1`
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
`,Dr=A.div`
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
`,Or=A.p`
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
`,kr=A.div`
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
`,Ar=A.p`
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
`,jr=A.div`
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
`,Mr=A.form`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: stretch;

  overflow: hidden;

  border-radius: 8px;

  background: #ffffff;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 564px) {
    height: 42px;
  }

  @media screen and (min-width: 1160px) {
    height: 42px;
  }
`,Nr=A.input`
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
`,Pr=A.button`
  width: 40px;
  height: 40px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;

  background: #ffb36c;
  color: #111111;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ffa451;
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 18px;
    height: 18px;
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
`,Fr=A.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  width: 100%;
  max-height: 260px;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  z-index: 100;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ffa451;
  }
`,Ir=A.button`
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

  transition: background 0.2s ease;

  svg {
    width: 17px;
    height: 17px;

    flex-shrink: 0;

    color: #ff9d4d;
  }

  &:hover {
    background: #f5f5f5;
  }

  @media screen and (min-width: 564px) {
    padding: 12px 16px;

    gap: 13px;
  }
`,Lr=A.span`
  min-width: 0;

  display: flex;
  flex-direction: column;

  gap: 3px;
`,Rr=A.span`
  color: #111111;

  font-size: 13px;
  font-weight: 600;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 564px) {
    font-size: 14px;
  }
`,zr=A.span`
  color: #888888;

  font-size: 11px;
  font-weight: 400;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 564px) {
    font-size: 12px;
  }
`,Br=A.div`
  padding: 13px 16px;

  color: #888888;

  font-size: 12px;

  text-align: center;
`,Vr=`b5ad39bd417cd476cc1c17d9b2b53496`;function Hr({onCityAdd:e}){let[t,n]=(0,_.useState)(``),[r,i]=(0,_.useState)([]),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(new Date);(0,_.useEffect)(()=>{let e=setInterval(()=>{c(new Date)},1e3);return()=>clearInterval(e)},[]),(0,_.useEffect)(()=>{let e=t.trim();if(e.length<2){i([]);return}let n=setTimeout(async()=>{try{o(!0);let t=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(e)}&limit=5&appid=${Vr}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json();i(n)}catch(e){console.error(`Помилка отримання підказок:`,e),i([])}finally{o(!1)}},350);return()=>clearTimeout(n)},[t]);let l=async e=>{let t=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(e)}&limit=1&appid=${Vr}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json();if(n.length===0)throw Error(`Місто не знайдено`);return n[0]},u=async(r=null)=>{let a=r?r.name:t.trim();if(a)try{let t=r||await l(a),o=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t.lat}&lon=${t.lon}&appid=${Vr}&units=metric`);if(!o.ok)throw Error(`Weather HTTP error: ${o.status}`);let s=await o.json(),c={id:`${t.lat}-${t.lon}`,name:t.name,country:t.country,temperature:s.main.temp,icon:s.weather[0].icon,description:s.weather[0].description,timezone:s.timezone,latitude:t.lat,longitude:t.lon};e&&e(c),n(``),i([])}catch(e){console.error(`Помилка пошуку:`,e)}},d=e=>{n(e.name),i([]),u(e)},f=e=>{e.preventDefault(),u()},p=s.toLocaleString(`en-US`,{month:`long`}),m=s.getFullYear(),h=s.toLocaleString(`en-US`,{weekday:`long`}),g=s.getDate(),v=e=>{if(e>=11&&e<=13)return`th`;switch(e%10){case 1:return`st`;case 2:return`nd`;case 3:return`rd`;default:return`th`}},y=String(s.getHours()).padStart(2,`0`),b=String(s.getMinutes()).padStart(2,`0`);return(0,j.jsxs)(Cr,{children:[(0,j.jsx)(wr,{style:{backgroundImage:`url(${Sr})`}}),(0,j.jsxs)(Tr,{children:[(0,j.jsx)(Er,{children:`Weather dashboard`}),(0,j.jsxs)(Dr,{children:[(0,j.jsxs)(Or,{children:[`Create your personal list of`,(0,j.jsx)(`br`,{}),`favorite cities and always be`,(0,j.jsx)(`br`,{}),`aware of the weather.`]}),(0,j.jsx)(kr,{}),(0,j.jsxs)(Ar,{children:[p,` `,m,(0,j.jsx)(`br`,{}),h,`, `,g,(0,j.jsx)(`sup`,{children:v(g)}),(0,j.jsx)(`br`,{}),y,`:`,b]})]}),(0,j.jsxs)(jr,{children:[(0,j.jsxs)(Mr,{onSubmit:f,children:[(0,j.jsx)(Nr,{type:`text`,value:t,onChange:e=>n(e.target.value),placeholder:`Search location...`}),(0,j.jsx)(Pr,{type:`submit`,children:(0,j.jsx)(xr.FiSearch,{})})]}),t.trim().length>=2&&(0,j.jsx)(Fr,{children:a?(0,j.jsx)(Br,{children:`Searching...`}):r.length>0?r.map((e,t)=>(0,j.jsxs)(Ir,{type:`button`,onClick:()=>d(e),children:[(0,j.jsx)(xr.FiMapPin,{}),(0,j.jsxs)(Lr,{children:[(0,j.jsx)(Rr,{children:e.name}),(0,j.jsxs)(zr,{children:[e.state?`${e.state}, `:``,e.country]})]})]},`${e.lat}-${e.lon}-${t}`)):(0,j.jsx)(Br,{children:`Location not found`})})]})]})]})}function Ur(e){return e+.5|0}var Wr=(e,t,n)=>Math.max(Math.min(e,n),t);function Gr(e){return Wr(Ur(e*2.55),0,255)}function Kr(e){return Wr(Ur(e*255),0,255)}function qr(e){return Wr(Ur(e/2.55)/100,0,1)}function Jr(e){return Wr(Ur(e*100),0,100)}var Yr={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Xr=[...`0123456789ABCDEF`],Zr=e=>Xr[e&15],Qr=e=>Xr[(e&240)>>4]+Xr[e&15],$r=e=>(e&240)>>4==(e&15),ei=e=>$r(e.r)&&$r(e.g)&&$r(e.b)&&$r(e.a);function ti(e){var t=e.length,n;return e[0]===`#`&&(t===4||t===5?n={r:255&Yr[e[1]]*17,g:255&Yr[e[2]]*17,b:255&Yr[e[3]]*17,a:t===5?Yr[e[4]]*17:255}:(t===7||t===9)&&(n={r:Yr[e[1]]<<4|Yr[e[2]],g:Yr[e[3]]<<4|Yr[e[4]],b:Yr[e[5]]<<4|Yr[e[6]],a:t===9?Yr[e[7]]<<4|Yr[e[8]]:255})),n}var ni=(e,t)=>e<255?t(e):``;function ri(e){var t=ei(e)?Zr:Qr;return e?`#`+t(e.r)+t(e.g)+t(e.b)+ni(e.a,t):void 0}var ii=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function ai(e,t,n){let r=t*Math.min(n,1-n),i=(t,i=(t+e/30)%12)=>n-r*Math.max(Math.min(i-3,9-i,1),-1);return[i(0),i(8),i(4)]}function oi(e,t,n){let r=(r,i=(r+e/60)%6)=>n-n*t*Math.max(Math.min(i,4-i,1),0);return[r(5),r(3),r(1)]}function si(e,t,n){let r=ai(e,1,.5),i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function ci(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function li(e){let t=e.r/255,n=e.g/255,r=e.b/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2,s,c,l;return i!==a&&(l=i-a,c=o>.5?l/(2-i-a):l/(i+a),s=ci(t,n,r,l,i),s=s*60+.5),[s|0,c||0,o]}function ui(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(Kr)}function di(e,t,n){return ui(ai,e,t,n)}function fi(e,t,n){return ui(si,e,t,n)}function pi(e,t,n){return ui(oi,e,t,n)}function mi(e){return(e%360+360)%360}function hi(e){let t=ii.exec(e),n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?Gr(+t[5]):Kr(+t[5]));let i=mi(+t[2]),a=t[3]/100,o=t[4]/100;return r=t[1]===`hwb`?fi(i,a,o):t[1]===`hsv`?pi(i,a,o):di(i,a,o),{r:r[0],g:r[1],b:r[2],a:n}}function gi(e,t){var n=li(e);n[0]=mi(n[0]+t),n=di(n),e.r=n[0],e.g=n[1],e.b=n[2]}function _i(e){if(!e)return;let t=li(e),n=t[0],r=Jr(t[1]),i=Jr(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${qr(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}var vi={x:`dark`,Z:`light`,Y:`re`,X:`blu`,W:`gr`,V:`medium`,U:`slate`,A:`ee`,T:`ol`,S:`or`,B:`ra`,C:`lateg`,D:`ights`,R:`in`,Q:`turquois`,E:`hi`,P:`ro`,O:`al`,N:`le`,M:`de`,L:`yello`,F:`en`,K:`ch`,G:`arks`,H:`ea`,I:`ightg`,J:`wh`},yi={OiceXe:`f0f8ff`,antiquewEte:`faebd7`,aqua:`ffff`,aquamarRe:`7fffd4`,azuY:`f0ffff`,beige:`f5f5dc`,bisque:`ffe4c4`,black:`0`,blanKedOmond:`ffebcd`,Xe:`ff`,XeviTet:`8a2be2`,bPwn:`a52a2a`,burlywood:`deb887`,caMtXe:`5f9ea0`,KartYuse:`7fff00`,KocTate:`d2691e`,cSO:`ff7f50`,cSnflowerXe:`6495ed`,cSnsilk:`fff8dc`,crimson:`dc143c`,cyan:`ffff`,xXe:`8b`,xcyan:`8b8b`,xgTMnPd:`b8860b`,xWay:`a9a9a9`,xgYF:`6400`,xgYy:`a9a9a9`,xkhaki:`bdb76b`,xmagFta:`8b008b`,xTivegYF:`556b2f`,xSange:`ff8c00`,xScEd:`9932cc`,xYd:`8b0000`,xsOmon:`e9967a`,xsHgYF:`8fbc8f`,xUXe:`483d8b`,xUWay:`2f4f4f`,xUgYy:`2f4f4f`,xQe:`ced1`,xviTet:`9400d3`,dAppRk:`ff1493`,dApskyXe:`bfff`,dimWay:`696969`,dimgYy:`696969`,dodgerXe:`1e90ff`,fiYbrick:`b22222`,flSOwEte:`fffaf0`,foYstWAn:`228b22`,fuKsia:`ff00ff`,gaRsbSo:`dcdcdc`,ghostwEte:`f8f8ff`,gTd:`ffd700`,gTMnPd:`daa520`,Way:`808080`,gYF:`8000`,gYFLw:`adff2f`,gYy:`808080`,honeyMw:`f0fff0`,hotpRk:`ff69b4`,RdianYd:`cd5c5c`,Rdigo:`4b0082`,ivSy:`fffff0`,khaki:`f0e68c`,lavFMr:`e6e6fa`,lavFMrXsh:`fff0f5`,lawngYF:`7cfc00`,NmoncEffon:`fffacd`,ZXe:`add8e6`,ZcSO:`f08080`,Zcyan:`e0ffff`,ZgTMnPdLw:`fafad2`,ZWay:`d3d3d3`,ZgYF:`90ee90`,ZgYy:`d3d3d3`,ZpRk:`ffb6c1`,ZsOmon:`ffa07a`,ZsHgYF:`20b2aa`,ZskyXe:`87cefa`,ZUWay:`778899`,ZUgYy:`778899`,ZstAlXe:`b0c4de`,ZLw:`ffffe0`,lime:`ff00`,limegYF:`32cd32`,lRF:`faf0e6`,magFta:`ff00ff`,maPon:`800000`,VaquamarRe:`66cdaa`,VXe:`cd`,VScEd:`ba55d3`,VpurpN:`9370db`,VsHgYF:`3cb371`,VUXe:`7b68ee`,VsprRggYF:`fa9a`,VQe:`48d1cc`,VviTetYd:`c71585`,midnightXe:`191970`,mRtcYam:`f5fffa`,mistyPse:`ffe4e1`,moccasR:`ffe4b5`,navajowEte:`ffdead`,navy:`80`,Tdlace:`fdf5e6`,Tive:`808000`,TivedBb:`6b8e23`,Sange:`ffa500`,SangeYd:`ff4500`,ScEd:`da70d6`,pOegTMnPd:`eee8aa`,pOegYF:`98fb98`,pOeQe:`afeeee`,pOeviTetYd:`db7093`,papayawEp:`ffefd5`,pHKpuff:`ffdab9`,peru:`cd853f`,pRk:`ffc0cb`,plum:`dda0dd`,powMrXe:`b0e0e6`,purpN:`800080`,YbeccapurpN:`663399`,Yd:`ff0000`,Psybrown:`bc8f8f`,PyOXe:`4169e1`,saddNbPwn:`8b4513`,sOmon:`fa8072`,sandybPwn:`f4a460`,sHgYF:`2e8b57`,sHshell:`fff5ee`,siFna:`a0522d`,silver:`c0c0c0`,skyXe:`87ceeb`,UXe:`6a5acd`,UWay:`708090`,UgYy:`708090`,snow:`fffafa`,sprRggYF:`ff7f`,stAlXe:`4682b4`,tan:`d2b48c`,teO:`8080`,tEstN:`d8bfd8`,tomato:`ff6347`,Qe:`40e0d0`,viTet:`ee82ee`,JHt:`f5deb3`,wEte:`ffffff`,wEtesmoke:`f5f5f5`,Lw:`ffff00`,LwgYF:`9acd32`};function bi(){let e={},t=Object.keys(yi),n=Object.keys(vi),r,i,a,o,s;for(r=0;r<t.length;r++){for(o=s=t[r],i=0;i<n.length;i++)a=n[i],s=s.replace(a,vi[a]);a=parseInt(yi[o],16),e[s]=[a>>16&255,a>>8&255,a&255]}return e}var xi;function Si(e){xi||(xi=bi(),xi.transparent=[0,0,0,0]);let t=xi[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var Ci=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function wi(e){let t=Ci.exec(e),n=255,r,i,a;if(t){if(t[7]!==r){let e=+t[7];n=t[8]?Gr(e):Wr(e*255,0,255)}return r=+t[1],i=+t[3],a=+t[5],r=255&(t[2]?Gr(r):Wr(r,0,255)),i=255&(t[4]?Gr(i):Wr(i,0,255)),a=255&(t[6]?Gr(a):Wr(a,0,255)),{r,g:i,b:a,a:n}}}function Ti(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${qr(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}var Ei=e=>e<=.0031308?e*12.92:e**(1/2.4)*1.055-.055,Di=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function Oi(e,t,n){let r=Di(qr(e.r)),i=Di(qr(e.g)),a=Di(qr(e.b));return{r:Kr(Ei(r+n*(Di(qr(t.r))-r))),g:Kr(Ei(i+n*(Di(qr(t.g))-i))),b:Kr(Ei(a+n*(Di(qr(t.b))-a))),a:e.a+n*(t.a-e.a)}}function ki(e,t,n){if(e){let r=li(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=di(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function Ai(e,t){return e&&Object.assign(t||{},e)}function ji(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=Kr(e[3]))):(t=Ai(e,{r:0,g:0,b:0,a:1}),t.a=Kr(t.a)),t}function Mi(e){return e.charAt(0)===`r`?wi(e):hi(e)}var Ni=class e{constructor(t){if(t instanceof e)return t;let n=typeof t,r;n===`object`?r=ji(t):n===`string`&&(r=ti(t)||Si(t)||Mi(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var e=Ai(this._rgb);return e&&(e.a=qr(e.a)),e}set rgb(e){this._rgb=ji(e)}rgbString(){return this._valid?Ti(this._rgb):void 0}hexString(){return this._valid?ri(this._rgb):void 0}hslString(){return this._valid?_i(this._rgb):void 0}mix(e,t){if(e){let n=this.rgb,r=e.rgb,i,a=t===i?.5:t,o=2*a-1,s=n.a-r.a,c=((o*s===-1?o:(o+s)/(1+o*s))+1)/2;i=1-c,n.r=255&c*n.r+i*r.r+.5,n.g=255&c*n.g+i*r.g+.5,n.b=255&c*n.b+i*r.b+.5,n.a=a*n.a+(1-a)*r.a,this.rgb=n}return this}interpolate(e,t){return e&&(this._rgb=Oi(this._rgb,e._rgb,t)),this}clone(){return new e(this.rgb)}alpha(e){return this._rgb.a=Kr(e),this}clearer(e){let t=this._rgb;return t.a*=1-e,this}greyscale(){let e=this._rgb;return e.r=e.g=e.b=Ur(e.r*.3+e.g*.59+e.b*.11),this}opaquer(e){let t=this._rgb;return t.a*=1+e,this}negate(){let e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return ki(this._rgb,2,e),this}darken(e){return ki(this._rgb,2,-e),this}saturate(e){return ki(this._rgb,1,e),this}desaturate(e){return ki(this._rgb,1,-e),this}rotate(e){return gi(this._rgb,e),this}};function Pi(){}var Fi=(()=>{let e=0;return()=>e++})();function M(e){return e==null}function Ii(e){if(Array.isArray&&Array.isArray(e))return!0;let t=Object.prototype.toString.call(e);return t.slice(0,7)===`[object`&&t.slice(-6)===`Array]`}function N(e){return e!==null&&Object.prototype.toString.call(e)===`[object Object]`}function Li(e){return(typeof e==`number`||e instanceof Number)&&isFinite(+e)}function P(e,t){return Li(e)?e:t}function F(e,t){return e===void 0?t:e}var I=(e,t)=>typeof e==`string`&&e.endsWith(`%`)?parseFloat(e)/100*t:+e;function L(e,t,n){if(e&&typeof e.call==`function`)return e.apply(n,t)}function R(e,t,n,r){let i,a,o;if(Ii(e)){if(a=e.length,r)for(i=a-1;i>=0;i--)t.call(n,e[i],i);else for(i=0;i<a;i++)t.call(n,e[i],i)}else if(N(e))for(o=Object.keys(e),a=o.length,i=0;i<a;i++)t.call(n,e[o[i]],o[i])}function Ri(e,t){let n,r,i,a;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],a=t[n],i.datasetIndex!==a.datasetIndex||i.index!==a.index)return!1;return!0}function zi(e){if(Ii(e))return e.map(zi);if(N(e)){let t=Object.create(null),n=Object.keys(e),r=n.length,i=0;for(;i<r;++i)t[n[i]]=zi(e[n[i]]);return t}return e}function Bi(e){return[`__proto__`,`prototype`,`constructor`].indexOf(e)===-1}function Vi(e,t,n,r){if(!Bi(e))return;let i=t[e],a=n[e];N(i)&&N(a)?Hi(i,a,r):t[e]=zi(a)}function Hi(e,t,n){let r=Ii(t)?t:[t],i=r.length;if(!N(e))return e;n||={};let a=n.merger||Vi,o;for(let t=0;t<i;++t){if(o=r[t],!N(o))continue;let i=Object.keys(o);for(let t=0,r=i.length;t<r;++t)a(i[t],e,o,n)}return e}function Ui(e,t){return Hi(e,t,{merger:Wi})}function Wi(e,t,n){if(!Bi(e))return;let r=t[e],i=n[e];N(r)&&N(i)?Ui(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=zi(i))}var Gi={"":e=>e,x:e=>e.x,y:e=>e.y};function Ki(e){let t=e.split(`.`),n=[],r=``;for(let e of t)r+=e,r.endsWith(`\\`)?r=r.slice(0,-1)+`.`:(n.push(r),r=``);return n}function qi(e){let t=Ki(e);return e=>{for(let n of t){if(n===``)break;e&&=e[n]}return e}}function Ji(e,t){return(Gi[t]||(Gi[t]=qi(t)))(e)}function Yi(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Xi=e=>e!==void 0,Zi=e=>typeof e==`function`,Qi=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0};function $i(e){return e.type===`mouseup`||e.type===`click`||e.type===`contextmenu`}var ea=Math.PI,ta=2*ea,na=ta+ea,ra=1/0,ia=ea/180,aa=ea/2,oa=ea/4,sa=ea*2/3,z=Math.log10,ca=Math.sign;function la(e,t,n){return Math.abs(e-t)<n}function ua(e){let t=Math.round(e);e=la(e,t,e/1e3)?t:e;let n=10**Math.floor(z(e)),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function da(e){let t=[],n=Math.sqrt(e),r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((e,t)=>e-t).pop(),t}function fa(e){return typeof e==`symbol`||typeof e==`object`&&!!e&&!(Symbol.toPrimitive in e||`toString`in e||`valueOf`in e)}function pa(e){return!fa(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function ma(e,t){let n=Math.round(e);return n-t<=e&&n+t>=e}function ha(e,t,n){let r,i,a;for(r=0,i=e.length;r<i;r++)a=e[r][n],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function ga(e){return ea/180*e}function _a(e){return 180/ea*e}function va(e){if(!Li(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function ya(e,t){let n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r),a=Math.atan2(r,n);return a<-.5*ea&&(a+=ta),{angle:a,distance:i}}function ba(e,t){return Math.sqrt((t.x-e.x)**2+(t.y-e.y)**2)}function xa(e,t){return(e-t+na)%ta-ea}function Sa(e){return(e%ta+ta)%ta}function Ca(e,t,n,r){let i=Sa(e),a=Sa(t),o=Sa(n),s=Sa(a-i),c=Sa(o-i),l=Sa(i-a),u=Sa(i-o);return i===a||i===o||r&&a===o||s>c&&l<u}function wa(e,t,n){return Math.max(t,Math.min(n,e))}function Ta(e){return wa(e,-32768,32767)}function Ea(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function Da(e,t,n){n||=(n=>e[n]<t);let r=e.length-1,i=0,a;for(;r-i>1;)a=i+r>>1,n(a)?i=a:r=a;return{lo:i,hi:r}}var Oa=(e,t,n,r)=>Da(e,n,r?r=>{let i=e[r][t];return i<n||i===n&&e[r+1][t]===n}:r=>e[r][t]<n),ka=(e,t,n)=>Da(e,n,r=>e[r][t]>=n);function Aa(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}var ja=[`push`,`pop`,`shift`,`splice`,`unshift`];function Ma(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),ja.forEach(t=>{let n=`_onData`+Yi(t),r=e[t];Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value(...t){let i=r.apply(this,t);return e._chartjs.listeners.forEach(e=>{typeof e[n]==`function`&&e[n](...t)}),i}})})}function Na(e,t){let n=e._chartjs;if(!n)return;let r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&(ja.forEach(t=>{delete e[t]}),delete e._chartjs)}function Pa(e){let t=new Set(e);return t.size===e.length?e:Array.from(t)}var Fa=function(){return typeof window>`u`?function(e){return e()}:window.requestAnimationFrame}();function Ia(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,Fa.call(window,()=>{r=!1,e.apply(t,n)}))}}function La(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}var Ra=e=>e===`start`?`left`:e===`end`?`right`:`center`,za=(e,t,n)=>e===`start`?t:e===`end`?n:(t+n)/2;function Ba(e,t,n){let r=t.length,i=0,a=r;if(e._sorted){let{iScale:o,vScale:s,_parsed:c}=e,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,u=o.axis,{min:d,max:f,minDefined:p,maxDefined:m}=o.getUserBounds();if(p){if(i=Math.min(Oa(c,u,d).lo,n?r:Oa(t,u,o.getPixelForValue(d)).lo),l){let e=c.slice(0,i+1).reverse().findIndex(e=>!M(e[s.axis]));i-=Math.max(0,e)}i=wa(i,0,r-1)}if(m){let e=Math.max(Oa(c,o.axis,f,!0).hi+1,n?0:Oa(t,u,o.getPixelForValue(f),!0).hi+1);if(l){let t=c.slice(e-1).findIndex(e=>!M(e[s.axis]));e+=Math.max(0,t)}a=wa(e,i,r)-i}else a=r-i}return{start:i,count:a}}function Va(e){let{xScale:t,yScale:n,_scaleRanges:r}=e,i={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=i,!0;let a=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),a}var Ha=e=>e===0||e===1,Ua=(e,t,n)=>-(2**(10*--e)*Math.sin((e-t)*ta/n)),Wa=(e,t,n)=>2**(-10*e)*Math.sin((e-t)*ta/n)+1,Ga={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-(--e*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>--e*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*aa)+1,easeOutSine:e=>Math.sin(e*aa),easeInOutSine:e=>-.5*(Math.cos(ea*e)-1),easeInExpo:e=>e===0?0:2**(10*(e-1)),easeOutExpo:e=>e===1?1:-(2**(-10*e))+1,easeInOutExpo:e=>Ha(e)?e:e<.5?.5*2**(10*(e*2-1)):.5*(-(2**(-10*(e*2-1)))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1- --e*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>Ha(e)?e:Ua(e,.075,.3),easeOutElastic:e=>Ha(e)?e:Wa(e,.075,.3),easeInOutElastic(e){let t=.1125,n=.45;return Ha(e)?e:e<.5?.5*Ua(e*2,t,n):.5+.5*Wa(e*2-1,t,n)},easeInBack(e){return e*e*(2.70158*e-1.70158)},easeOutBack(e){return--e*e*(2.70158*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Ga.easeOutBounce(1-e),easeOutBounce(e){let t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},easeInOutBounce:e=>e<.5?Ga.easeInBounce(e*2)*.5:Ga.easeOutBounce(e*2-1)*.5+.5};function Ka(e){if(e&&typeof e==`object`){let t=e.toString();return t===`[object CanvasPattern]`||t===`[object CanvasGradient]`}return!1}function qa(e){return Ka(e)?e:new Ni(e)}function Ja(e){return Ka(e)?e:new Ni(e).saturate(.5).darken(.1).hexString()}var Ya=[`x`,`y`,`borderWidth`,`radius`,`tension`],Xa=[`color`,`borderColor`,`backgroundColor`];function Za(e){e.set(`animation`,{delay:void 0,duration:1e3,easing:`easeOutQuart`,fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe(`animation`,{_fallback:!1,_indexable:!1,_scriptable:e=>e!==`onProgress`&&e!==`onComplete`&&e!==`fn`}),e.set(`animations`,{colors:{type:`color`,properties:Xa},numbers:{type:`number`,properties:Ya}}),e.describe(`animations`,{_fallback:`animation`}),e.set(`transitions`,{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:`transparent`},visible:{type:`boolean`,duration:0}}},hide:{animations:{colors:{to:`transparent`},visible:{type:`boolean`,easing:`linear`,fn:e=>e|0}}}})}function Qa(e){e.set(`layout`,{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var $a=new Map;function eo(e,t){t||={};let n=e+JSON.stringify(t),r=$a.get(n);return r||(r=new Intl.NumberFormat(e,t),$a.set(n,r)),r}function to(e,t,n){return eo(t,n).format(e)}var no={values(e){return Ii(e)?e:``+e},numeric(e,t,n){if(e===0)return`0`;let r=this.chart.options.locale,i,a=e;if(n.length>1){let t=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(t<1e-4||t>0x38d7ea4c68000)&&(i=`scientific`),a=ro(e,n)}let o=z(Math.abs(a)),s=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(c,this.options.ticks.format),to(e,r,c)},logarithmic(e,t,n){if(e===0)return`0`;let r=n[t].significand||e/10**Math.floor(z(e));return[1,2,3,5,10,15].includes(r)||t>.8*n.length?no.numeric.call(this,e,t,n):``}};function ro(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var io={formatters:no};function ao(e){e.set(`scale`,{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:`ticks`,clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:``,padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:``,padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:io.formatters.values,minor:{},major:{},align:`center`,crossAlign:`near`,showLabelBackdrop:!1,backdropColor:`rgba(255, 255, 255, 0.75)`,backdropPadding:2}}),e.route(`scale.ticks`,`color`,``,`color`),e.route(`scale.grid`,`color`,``,`borderColor`),e.route(`scale.border`,`color`,``,`borderColor`),e.route(`scale.title`,`color`,``,`color`),e.describe(`scale`,{_fallback:!1,_scriptable:e=>!e.startsWith(`before`)&&!e.startsWith(`after`)&&e!==`callback`&&e!==`parser`,_indexable:e=>e!==`borderDash`&&e!==`tickBorderDash`&&e!==`dash`}),e.describe(`scales`,{_fallback:`scale`}),e.describe(`scale.ticks`,{_scriptable:e=>e!==`backdropPadding`&&e!==`callback`,_indexable:e=>e!==`backdropPadding`})}var oo=Object.create(null),so=Object.create(null);function co(e,t){if(!t)return e;let n=t.split(`.`);for(let t=0,r=n.length;t<r;++t){let r=n[t];e=e[r]||(e[r]=Object.create(null))}return e}function lo(e,t,n){return typeof t==`string`?Hi(co(e,t),n):Hi(co(e,``),t)}var B=new class{constructor(e,t){this.animation=void 0,this.backgroundColor=`rgba(0,0,0,0.1)`,this.borderColor=`rgba(0,0,0,0.1)`,this.color=`#666`,this.datasets={},this.devicePixelRatio=e=>e.chart.platform.getDevicePixelRatio(),this.elements={},this.events=[`mousemove`,`mouseout`,`click`,`touchstart`,`touchmove`],this.font={family:`'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,size:12,style:`normal`,lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(e,t)=>Ja(t.backgroundColor),this.hoverBorderColor=(e,t)=>Ja(t.borderColor),this.hoverColor=(e,t)=>Ja(t.color),this.indexAxis=`x`,this.interaction={mode:`nearest`,intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return lo(this,e,t)}get(e){return co(this,e)}describe(e,t){return lo(so,e,t)}override(e,t){return lo(oo,e,t)}route(e,t,n,r){let i=co(this,e),a=co(this,n),o=`_`+t;Object.defineProperties(i,{[o]:{value:i[t],writable:!0},[t]:{enumerable:!0,get(){let e=this[o],t=a[r];return N(e)?Object.assign({},t,e):F(e,t)},set(e){this[o]=e}}})}apply(e){e.forEach(e=>e(this))}}({_scriptable:e=>!e.startsWith(`on`),_indexable:e=>e!==`events`,hover:{_fallback:`interaction`},interaction:{_scriptable:!1,_indexable:!1}},[Za,Qa,ao]);function uo(e){return!e||M(e.size)||M(e.family)?null:(e.style?e.style+` `:``)+(e.weight?e.weight+` `:``)+e.size+`px `+e.family}function fo(e,t,n,r,i){let a=t[i];return a||(a=t[i]=e.measureText(i).width,n.push(i)),a>r&&(r=a),r}function V(e,t,n,r){r||={};let i=r.data=r.data||{},a=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(i=r.data={},a=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let o=0,s=n.length,c,l,u,d,f;for(c=0;c<s;c++)if(d=n[c],d!=null&&!Ii(d))o=fo(e,i,a,o,d);else if(Ii(d))for(l=0,u=d.length;l<u;l++)f=d[l],f!=null&&!Ii(f)&&(o=fo(e,i,a,o,f));e.restore();let p=a.length/2;if(p>n.length){for(c=0;c<p;c++)delete i[a[c]];a.splice(0,p)}return o}function H(e,t,n){let r=e.currentDevicePixelRatio,i=n===0?0:Math.max(n/2,.5);return Math.round((t-i)*r)/r+i}function po(e,t){!t&&!e||(t||=e.getContext(`2d`),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function mo(e,t,n,r){ho(e,t,n,r,null)}function ho(e,t,n,r,i){let a,o,s,c,l,u,d,f,p=t.pointStyle,m=t.rotation,h=t.radius,g=(m||0)*ia;if(p&&typeof p==`object`&&(a=p.toString(),a===`[object HTMLImageElement]`||a===`[object HTMLCanvasElement]`)){e.save(),e.translate(n,r),e.rotate(g),e.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),e.restore();return}if(!(isNaN(h)||h<=0)){switch(e.beginPath(),p){default:i?e.ellipse(n,r,i/2,h,0,0,ta):e.arc(n,r,h,0,ta),e.closePath();break;case`triangle`:u=i?i/2:h,e.moveTo(n+Math.sin(g)*u,r-Math.cos(g)*h),g+=sa,e.lineTo(n+Math.sin(g)*u,r-Math.cos(g)*h),g+=sa,e.lineTo(n+Math.sin(g)*u,r-Math.cos(g)*h),e.closePath();break;case`rectRounded`:l=h*.516,c=h-l,o=Math.cos(g+oa)*c,d=Math.cos(g+oa)*(i?i/2-l:c),s=Math.sin(g+oa)*c,f=Math.sin(g+oa)*(i?i/2-l:c),e.arc(n-d,r-s,l,g-ea,g-aa),e.arc(n+f,r-o,l,g-aa,g),e.arc(n+d,r+s,l,g,g+aa),e.arc(n-f,r+o,l,g+aa,g+ea),e.closePath();break;case`rect`:if(!m){c=Math.SQRT1_2*h,u=i?i/2:c,e.rect(n-u,r-c,2*u,2*c);break}g+=oa;case`rectRot`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+f,r-o),e.lineTo(n+d,r+s),e.lineTo(n-f,r+o),e.closePath();break;case`crossRot`:g+=oa;case`cross`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o);break;case`star`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o),g+=oa,d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o);break;case`line`:o=i?i/2:Math.cos(g)*h,s=Math.sin(g)*h,e.moveTo(n-o,r-s),e.lineTo(n+o,r+s);break;case`dash`:e.moveTo(n,r),e.lineTo(n+Math.cos(g)*(i?i/2:h),r+Math.sin(g)*h);break;case!1:e.closePath()}e.fill(),t.borderWidth>0&&e.stroke()}}function go(e,t,n){return n||=.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function _o(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function vo(e){e.restore()}function yo(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i===`middle`){let r=(t.x+n.x)/2;e.lineTo(r,t.y),e.lineTo(r,n.y)}else i===`after`==!!r?e.lineTo(n.x,t.y):e.lineTo(t.x,n.y);e.lineTo(n.x,n.y)}function bo(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function xo(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),M(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function So(e,t,n,r,i){if(i.strikethrough||i.underline){let a=e.measureText(r),o=t-a.actualBoundingBoxLeft,s=t+a.actualBoundingBoxRight,c=n-a.actualBoundingBoxAscent,l=n+a.actualBoundingBoxDescent,u=i.strikethrough?(c+l)/2:l;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(o,u),e.lineTo(s,u),e.stroke()}}function Co(e,t){let n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function wo(e,t,n,r,i,a={}){let o=Ii(t)?t:[t],s=a.strokeWidth>0&&a.strokeColor!==``,c,l;for(e.save(),e.font=i.string,xo(e,a),c=0;c<o.length;++c)l=o[c],a.backdrop&&Co(e,a.backdrop),s&&(a.strokeColor&&(e.strokeStyle=a.strokeColor),M(a.strokeWidth)||(e.lineWidth=a.strokeWidth),e.strokeText(l,n,r,a.maxWidth)),e.fillText(l,n,r,a.maxWidth),So(e,n,r,l,a),r+=Number(i.lineHeight);e.restore()}function To(e,t){let{x:n,y:r,w:i,h:a,radius:o}=t;e.arc(n+o.topLeft,r+o.topLeft,o.topLeft,1.5*ea,ea,!0),e.lineTo(n,r+a-o.bottomLeft),e.arc(n+o.bottomLeft,r+a-o.bottomLeft,o.bottomLeft,ea,aa,!0),e.lineTo(n+i-o.bottomRight,r+a),e.arc(n+i-o.bottomRight,r+a-o.bottomRight,o.bottomRight,aa,0,!0),e.lineTo(n+i,r+o.topRight),e.arc(n+i-o.topRight,r+o.topRight,o.topRight,0,-aa,!0),e.lineTo(n+o.topLeft,r)}var Eo=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Do=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Oo(e,t){let n=(``+e).match(Eo);if(!n||n[1]===`normal`)return t*1.2;switch(e=+n[2],n[3]){case`px`:return e;case`%`:e/=100}return t*e}var ko=e=>+e||0;function Ao(e,t){let n={},r=N(t),i=r?Object.keys(t):t,a=N(e)?r?n=>F(e[n],e[t[n]]):t=>e[t]:()=>e;for(let e of i)n[e]=ko(a(e));return n}function jo(e){return Ao(e,{top:`y`,right:`x`,bottom:`y`,left:`x`})}function Mo(e){return Ao(e,[`topLeft`,`topRight`,`bottomLeft`,`bottomRight`])}function No(e){let t=jo(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Po(e,t){e||={},t||=B.font;let n=F(e.size,t.size);typeof n==`string`&&(n=parseInt(n,10));let r=F(e.style,t.style);r&&!(``+r).match(Do)&&(console.warn(`Invalid font style specified: "`+r+`"`),r=void 0);let i={family:F(e.family,t.family),lineHeight:Oo(F(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:F(e.weight,t.weight),string:``};return i.string=uo(i),i}function Fo(e,t,n,r){let i=!0,a,o,s;for(a=0,o=e.length;a<o;++a)if(s=e[a],s!==void 0&&(t!==void 0&&typeof s==`function`&&(s=s(t),i=!1),n!==void 0&&Ii(s)&&(s=s[n%s.length],i=!1),s!==void 0))return r&&!i&&(r.cacheable=!1),s}function Io(e,t,n){let{min:r,max:i}=e,a=I(t,(i-r)/2),o=(e,t)=>n&&e===0?0:e+t;return{min:o(r,-Math.abs(a)),max:o(i,a)}}function Lo(e,t){return Object.assign(Object.create(e),t)}function Ro(e,t=[``],n,r,i=()=>e[0]){let a=n||e;return r===void 0&&(r=es(`_fallback`,e)),new Proxy({[Symbol.toStringTag]:`Object`,_cacheable:!0,_scopes:e,_rootScopes:a,_fallback:r,_getTarget:i,override:n=>Ro([n,...e],t,a,r)},{deleteProperty(t,n){return delete t[n],delete t._keys,delete e[0][n],!0},get(n,r){return Uo(n,r,()=>$o(r,t,e,n))},getOwnPropertyDescriptor(e,t){return Reflect.getOwnPropertyDescriptor(e._scopes[0],t)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(e,t){return ts(e).includes(t)},ownKeys(e){return ts(e)},set(e,t,n){let r=e._storage||=i();return e[t]=r[t]=n,delete e._keys,!0}})}function zo(e,t,n,r){let i={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:Bo(e,r),setContext:t=>zo(e,t,n,r),override:i=>zo(e.override(i),t,n,r)};return new Proxy(i,{deleteProperty(t,n){return delete t[n],delete e[n],!0},get(e,t,n){return Uo(e,t,()=>Wo(e,t,n))},getOwnPropertyDescriptor(t,n){return t._descriptors.allKeys?Reflect.has(e,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,n)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(t,n){return Reflect.has(e,n)},ownKeys(){return Reflect.ownKeys(e)},set(t,n,r){return e[n]=r,delete t[n],!0}})}function Bo(e,t={scriptable:!0,indexable:!0}){let{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:Zi(n)?n:()=>n,isIndexable:Zi(r)?r:()=>r}}var Vo=(e,t)=>e?e+Yi(t):t,Ho=(e,t)=>N(t)&&e!==`adapters`&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Uo(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t===`constructor`)return e[t];let r=n();return e[t]=r,r}function Wo(e,t,n){let{_proxy:r,_context:i,_subProxy:a,_descriptors:o}=e,s=r[t];return Zi(s)&&o.isScriptable(t)&&(s=Go(t,s,e,n)),Ii(s)&&s.length&&(s=Ko(t,s,e,o.isIndexable)),Ho(t,s)&&(s=zo(s,i,a&&a[t],o)),s}function Go(e,t,n,r){let{_proxy:i,_context:a,_subProxy:o,_stack:s}=n;if(s.has(e))throw Error(`Recursion detected: `+Array.from(s).join(`->`)+`->`+e);s.add(e);let c=t(a,o||r);return s.delete(e),Ho(e,c)&&(c=Xo(i._scopes,i,e,c)),c}function Ko(e,t,n,r){let{_proxy:i,_context:a,_subProxy:o,_descriptors:s}=n;if(a.index!==void 0&&r(e))return t[a.index%t.length];if(N(t[0])){let n=t,r=i._scopes.filter(e=>e!==n);t=[];for(let c of n){let n=Xo(r,i,e,c);t.push(zo(n,a,o&&o[e],s))}}return t}function qo(e,t,n){return Zi(e)?e(t,n):e}var Jo=(e,t)=>e===!0?t:typeof e==`string`?Ji(t,e):void 0;function Yo(e,t,n,r,i){for(let a of t){let t=Jo(n,a);if(t){e.add(t);let a=qo(t._fallback,n,i);if(a!==void 0&&a!==n&&a!==r)return a}else if(t===!1&&r!==void 0&&n!==r)return null}return!1}function Xo(e,t,n,r){let i=t._rootScopes,a=qo(t._fallback,n,r),o=[...e,...i],s=new Set;s.add(r);let c=Zo(s,o,n,a||n,r);return c===null||a!==void 0&&a!==n&&(c=Zo(s,o,a,c,r),c===null)?!1:Ro(Array.from(s),[``],i,a,()=>Qo(t,n,r))}function Zo(e,t,n,r,i){for(;n;)n=Yo(e,t,n,r,i);return n}function Qo(e,t,n){let r=e._getTarget();t in r||(r[t]={});let i=r[t];return Ii(i)&&N(n)?n:i||{}}function $o(e,t,n,r){let i;for(let a of t)if(i=es(Vo(a,e),n),i!==void 0)return Ho(e,i)?Xo(n,r,e,i):i}function es(e,t){for(let n of t){if(!n)continue;let t=n[e];if(t!==void 0)return t}}function ts(e){let t=e._keys;return t||=e._keys=ns(e._scopes),t}function ns(e){let t=new Set;for(let n of e)for(let e of Object.keys(n).filter(e=>!e.startsWith(`_`)))t.add(e);return Array.from(t)}var rs=2**-52||1e-14,is=(e,t)=>t<e.length&&!e[t].skip&&e[t],as=e=>e===`x`?`y`:`x`;function os(e,t,n,r){let i=e.skip?t:e,a=t,o=n.skip?t:n,s=ba(a,i),c=ba(o,a),l=s/(s+c),u=c/(s+c);l=isNaN(l)?0:l,u=isNaN(u)?0:u;let d=r*l,f=r*u;return{previous:{x:a.x-d*(o.x-i.x),y:a.y-d*(o.y-i.y)},next:{x:a.x+f*(o.x-i.x),y:a.y+f*(o.y-i.y)}}}function ss(e,t,n){let r=e.length,i,a,o,s,c,l=is(e,0);for(let u=0;u<r-1;++u)if(c=l,l=is(e,u+1),!(!c||!l)){if(la(t[u],0,rs)){n[u]=n[u+1]=0;continue}i=n[u]/t[u],a=n[u+1]/t[u],s=i**2+a**2,!(s<=9)&&(o=3/Math.sqrt(s),n[u]=i*o*t[u],n[u+1]=a*o*t[u])}}function cs(e,t,n=`x`){let r=as(n),i=e.length,a,o,s,c=is(e,0);for(let l=0;l<i;++l){if(o=s,s=c,c=is(e,l+1),!s)continue;let i=s[n],u=s[r];o&&(a=(i-o[n])/3,s[`cp1${n}`]=i-a,s[`cp1${r}`]=u-a*t[l]),c&&(a=(c[n]-i)/3,s[`cp2${n}`]=i+a,s[`cp2${r}`]=u+a*t[l])}}function ls(e,t=`x`){let n=as(t),r=e.length,i=Array(r).fill(0),a=Array(r),o,s,c,l=is(e,0);for(o=0;o<r;++o)if(s=c,c=l,l=is(e,o+1),c){if(l){let e=l[t]-c[t];i[o]=e===0?0:(l[n]-c[n])/e}a[o]=s?l?ca(i[o-1])===ca(i[o])?(i[o-1]+i[o])/2:0:i[o-1]:i[o]}ss(e,i,a),cs(e,a,t)}function us(e,t,n){return Math.max(Math.min(e,n),t)}function ds(e,t){let n,r,i,a,o,s=go(e[0],t);for(n=0,r=e.length;n<r;++n)o=a,a=s,s=n<r-1&&go(e[n+1],t),a&&(i=e[n],o&&(i.cp1x=us(i.cp1x,t.left,t.right),i.cp1y=us(i.cp1y,t.top,t.bottom)),s&&(i.cp2x=us(i.cp2x,t.left,t.right),i.cp2y=us(i.cp2y,t.top,t.bottom)))}function fs(e,t,n,r,i){let a,o,s,c;if(t.spanGaps&&(e=e.filter(e=>!e.skip)),t.cubicInterpolationMode===`monotone`)ls(e,i);else{let n=r?e[e.length-1]:e[0];for(a=0,o=e.length;a<o;++a)s=e[a],c=os(n,s,e[Math.min(a+1,o-+!r)%o],t.tension),s.cp1x=c.previous.x,s.cp1y=c.previous.y,s.cp2x=c.next.x,s.cp2y=c.next.y,n=s}t.capBezierPoints&&ds(e,n)}function ps(){return typeof window<`u`&&typeof document<`u`}function ms(e){let t=e.parentNode;return t&&t.toString()===`[object ShadowRoot]`&&(t=t.host),t}function hs(e,t,n){let r;return typeof e==`string`?(r=parseInt(e,10),e.indexOf(`%`)!==-1&&(r=r/100*t.parentNode[n])):r=e,r}var gs=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function _s(e,t){return gs(e).getPropertyValue(t)}var vs=[`top`,`right`,`bottom`,`left`];function ys(e,t,n){let r={};n=n?`-`+n:``;for(let i=0;i<4;i++){let a=vs[i];r[a]=parseFloat(e[t+`-`+a+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}var bs=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function xs(e,t){let n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:a}=r,o=!1,s,c;if(bs(i,a,e.target))s=i,c=a;else{let e=t.getBoundingClientRect();s=r.clientX-e.left,c=r.clientY-e.top,o=!0}return{x:s,y:c,box:o}}function Ss(e,t){if(`native`in e)return e;let{canvas:n,currentDevicePixelRatio:r}=t,i=gs(n),a=i.boxSizing===`border-box`,o=ys(i,`padding`),s=ys(i,`border`,`width`),{x:c,y:l,box:u}=xs(e,n),d=o.left+(u&&s.left),f=o.top+(u&&s.top),{width:p,height:m}=t;return a&&(p-=o.width+s.width,m-=o.height+s.height),{x:Math.round((c-d)/p*n.width/r),y:Math.round((l-f)/m*n.height/r)}}function Cs(e,t,n){let r,i;if(t===void 0||n===void 0){let a=e&&ms(e);if(!a)t=e.clientWidth,n=e.clientHeight;else{let e=a.getBoundingClientRect(),o=gs(a),s=ys(o,`border`,`width`),c=ys(o,`padding`);t=e.width-c.width-s.width,n=e.height-c.height-s.height,r=hs(o.maxWidth,a,`clientWidth`),i=hs(o.maxHeight,a,`clientHeight`)}}return{width:t,height:n,maxWidth:r||ra,maxHeight:i||ra}}var ws=e=>Math.round(e*10)/10;function Ts(e,t,n,r){let i=gs(e),a=ys(i,`margin`),o=hs(i.maxWidth,e,`clientWidth`)||ra,s=hs(i.maxHeight,e,`clientHeight`)||ra,c=Cs(e,t,n),{width:l,height:u}=c;if(i.boxSizing===`content-box`){let e=ys(i,`border`,`width`),t=ys(i,`padding`);l-=t.width+e.width,u-=t.height+e.height}return l=Math.max(0,l-a.width),u=Math.max(0,r?l/r:u-a.height),l=ws(Math.min(l,o,c.maxWidth)),u=ws(Math.min(u,s,c.maxHeight)),l&&!u&&(u=ws(l/2)),(t!==void 0||n!==void 0)&&r&&c.height&&u>c.height&&(u=c.height,l=ws(Math.floor(u*r))),{width:l,height:u}}function Es(e,t,n){let r=t||1,i=ws(e.height*r),a=ws(e.width*r);e.height=ws(e.height),e.width=ws(e.width);let o=e.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${e.height}px`,o.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||o.height!==i||o.width!==a?(e.currentDevicePixelRatio=r,o.height=i,o.width=a,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}var Ds=function(){let e=!1;try{let t={get passive(){return e=!0,!1}};ps()&&(window.addEventListener(`test`,null,t),window.removeEventListener(`test`,null,t))}catch{}return e}();function Os(e,t){let n=_s(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function ks(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function As(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r===`middle`?n<.5?e.y:t.y:r===`after`?n<1?e.y:t.y:n>0?t.y:e.y}}function js(e,t,n,r){let i={x:e.cp2x,y:e.cp2y},a={x:t.cp1x,y:t.cp1y},o=ks(e,i,n),s=ks(i,a,n),c=ks(a,t,n);return ks(ks(o,s,n),ks(s,c,n),n)}var Ms=function(e,t){return{x(n){return e+e+t-n},setWidth(e){t=e},textAlign(e){return e===`center`?e:e===`right`?`left`:`right`},xPlus(e,t){return e-t},leftForLtr(e,t){return e-t}}},Ns=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function Ps(e,t,n){return e?Ms(t,n):Ns()}function Fs(e,t){let n,r;(t===`ltr`||t===`rtl`)&&(n=e.canvas.style,r=[n.getPropertyValue(`direction`),n.getPropertyPriority(`direction`)],n.setProperty(`direction`,t,`important`),e.prevTextDirection=r)}function Is(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty(`direction`,t[0],t[1]))}function Ls(e){return e===`angle`?{between:Ca,compare:xa,normalize:Sa}:{between:Ea,compare:(e,t)=>e-t,normalize:e=>e}}function Rs({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:i}}function zs(e,t,n){let{property:r,start:i,end:a}=n,{between:o,normalize:s}=Ls(r),c=t.length,{start:l,end:u,loop:d}=e,f,p;if(d){for(l+=c,u+=c,f=0,p=c;f<p&&o(s(t[l%c][r]),i,a);++f)l--,u--;l%=c,u%=c}return u<l&&(u+=c),{start:l,end:u,loop:d,style:e.style}}function Bs(e,t,n){if(!n)return[e];let{property:r,start:i,end:a}=n,o=t.length,{compare:s,between:c,normalize:l}=Ls(r),{start:u,end:d,loop:f,style:p}=zs(e,t,n),m=[],h=!1,g=null,_,v,y,b=()=>c(i,y,_)&&s(i,y)!==0,x=()=>s(a,_)===0||c(a,y,_),S=()=>h||b(),C=()=>!h||x();for(let e=u,n=u;e<=d;++e)v=t[e%o],!v.skip&&(_=l(v[r]),_!==y&&(h=c(_,i,a),g===null&&S()&&(g=s(_,i)===0?e:n),g!==null&&C()&&(m.push(Rs({start:g,end:e,loop:f,count:o,style:p})),g=null),n=e,y=_));return g!==null&&m.push(Rs({start:g,end:d,loop:f,count:o,style:p})),m}function Vs(e,t){let n=[],r=e.segments;for(let i=0;i<r.length;i++){let a=Bs(r[i],e.points,t);a.length&&n.push(...a)}return n}function Hs(e,t,n,r){let i=0,a=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(a+=i);a>i&&e[a%t].skip;)a--;return a%=t,{start:i,end:a}}function Us(e,t,n,r){let i=e.length,a=[],o=t,s=e[t],c;for(c=t+1;c<=n;++c){let n=e[c%i];n.skip||n.stop?s.skip||(r=!1,a.push({start:t%i,end:(c-1)%i,loop:r}),t=o=n.stop?c:null):(o=c,s.skip&&(t=c)),s=n}return o!==null&&a.push({start:t%i,end:o%i,loop:r}),a}function Ws(e,t){let n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];let a=!!e._loop,{start:o,end:s}=Hs(n,i,a,r);return r===!0?Gs(e,[{start:o,end:s,loop:a}],n,t):Gs(e,Us(n,o,s<o?s+i:s,!!e._fullLoop&&o===0&&s===i-1),n,t)}function Gs(e,t,n,r){return!r||!r.setContext||!n?t:Ks(e,t,n,r)}function Ks(e,t,n,r){let i=e._chart.getContext(),a=qs(e.options),{_datasetIndex:o,options:{spanGaps:s}}=e,c=n.length,l=[],u=a,d=t[0].start,f=d;function p(e,t,r,i){let a=s?-1:1;if(e!==t){for(e+=c;n[e%c].skip;)e-=a;for(;n[t%c].skip;)t+=a;e%c!==t%c&&(l.push({start:e%c,end:t%c,loop:r,style:i}),u=i,d=t%c)}}for(let e of t){d=s?d:e.start;let t=n[d%c],a;for(f=d+1;f<=e.end;f++){let s=n[f%c];a=qs(r.setContext(Lo(i,{type:`segment`,p0:t,p1:s,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),Js(a,u)&&p(d,f-1,e.loop,u),t=s,u=a}d<f-1&&p(d,f-1,e.loop,u)}return l}function qs(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function Js(e,t){if(!t)return!1;let n=[],r=function(e,t){return Ka(t)?(n.includes(t)||n.push(t),n.indexOf(t)):t};return JSON.stringify(e,r)!==JSON.stringify(t,r)}function Ys(e,t,n){return e.options.clip?e[n]:t[n]}function Xs(e,t){let{xScale:n,yScale:r}=e;return n&&r?{left:Ys(n,t,`left`),right:Ys(n,t,`right`),top:Ys(r,t,`top`),bottom:Ys(r,t,`bottom`)}:t}function Zs(e,t){let n=t._clip;if(n.disabled)return!1;let r=Xs(t,e.chartArea);return{left:n.left===!1?0:r.left-(n.left===!0?0:n.left),right:n.right===!1?e.width:r.right+(n.right===!0?0:n.right),top:n.top===!1?0:r.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?e.height:r.bottom+(n.bottom===!0?0:n.bottom)}}var Qs=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,n,r){let i=t.listeners[r],a=t.duration;i.forEach(r=>r({chart:e,initial:t.initial,numSteps:a,currentStep:Math.min(n-t.start,a)}))}_refresh(){this._request||=(this._running=!0,Fa.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((n,r)=>{if(!n.running||!n.items.length)return;let i=n.items,a=i.length-1,o=!1,s;for(;a>=0;--a)s=i[a],s._active?(s._total>n.duration&&(n.duration=s._total),s.tick(e),o=!0):(i[a]=i[i.length-1],i.pop());o&&(r.draw(),this._notify(r,n,e,`progress`)),i.length||(n.running=!1,this._notify(r,n,e,`complete`),n.initial=!1),t+=i.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){let t=this._charts,n=t.get(e);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,n)),n}listen(e,t,n){this._getAnims(e).listeners[t].push(n)}add(e,t){!t||!t.length||this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){let t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((e,t)=>Math.max(e,t._duration),0),this._refresh())}running(e){if(!this._running)return!1;let t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){let t=this._charts.get(e);if(!t||!t.items.length)return;let n=t.items,r=n.length-1;for(;r>=0;--r)n[r].cancel();t.items=[],this._notify(e,t,Date.now(),`complete`)}remove(e){return this._charts.delete(e)}},$s=`transparent`,ec={boolean(e,t,n){return n>.5?t:e},color(e,t,n){let r=qa(e||$s),i=r.valid&&qa(t||$s);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}},tc=class{constructor(e,t,n,r){let i=t[n];r=Fo([e.to,r,i,e.from]);let a=Fo([e.from,i,r]);this._active=!0,this._fn=e.fn||ec[e.type||typeof a],this._easing=Ga[e.easing]||Ga.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=n,this._from=a,this._to=r,this._promises=void 0}active(){return this._active}update(e,t,n){if(this._active){this._notify(!1);let r=this._target[this._prop],i=n-this._start,a=this._duration-i;this._start=n,this._duration=Math.floor(Math.max(a,e.duration)),this._total+=i,this._loop=!!e.loop,this._to=Fo([e.to,t,r,e.from]),this._from=Fo([e.from,r,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){let t=e-this._start,n=this._duration,r=this._prop,i=this._from,a=this._loop,o=this._to,s;if(this._active=i!==o&&(a||t<n),!this._active){this._target[r]=o,this._notify(!0);return}if(t<0){this._target[r]=i;return}s=t/n%2,s=a&&s>1?2-s:s,s=this._easing(Math.min(1,Math.max(0,s))),this._target[r]=this._fn(i,o,s)}wait(){let e=this._promises||=[];return new Promise((t,n)=>{e.push({res:t,rej:n})})}_notify(e){let t=e?`res`:`rej`,n=this._promises||[];for(let e=0;e<n.length;e++)n[e][t]()}},nc=class{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!N(e))return;let t=Object.keys(B.animation),n=this._properties;Object.getOwnPropertyNames(e).forEach(r=>{let i=e[r];if(!N(i))return;let a={};for(let e of t)a[e]=i[e];(Ii(i.properties)&&i.properties||[r]).forEach(e=>{(e===r||!n.has(e))&&n.set(e,a)})})}_animateOptions(e,t){let n=t.options,r=ic(e,n);if(!r)return[];let i=this._createAnimations(r,n);return n.$shared&&rc(e.options.$animations,n).then(()=>{e.options=n},()=>{}),i}_createAnimations(e,t){let n=this._properties,r=[],i=e.$animations||={},a=Object.keys(t),o=Date.now(),s;for(s=a.length-1;s>=0;--s){let c=a[s];if(c.charAt(0)===`$`)continue;if(c===`options`){r.push(...this._animateOptions(e,t));continue}let l=t[c],u=i[c],d=n.get(c);if(u){if(d&&u.active()){u.update(d,l,o);continue}u.cancel()}if(!d||!d.duration){e[c]=l;continue}i[c]=u=new tc(d,e,c,l),r.push(u)}return r}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}let n=this._createAnimations(e,t);if(n.length)return Qs.add(this._chart,n),!0}};function rc(e,t){let n=[],r=Object.keys(t);for(let t=0;t<r.length;t++){let i=e[r[t]];i&&i.active()&&n.push(i.wait())}return Promise.all(n)}function ic(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function ac(e,t){let n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,a=n.max===void 0?t:0;return{start:r?a:i,end:r?i:a}}function oc(e,t,n){if(n===!1)return!1;let r=ac(e,n),i=ac(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function sc(e){let t,n,r,i;return N(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function cc(e,t){let n=[],r=e._getSortedDatasetMetas(t),i,a;for(i=0,a=r.length;i<a;++i)n.push(r[i].index);return n}function lc(e,t,n,r={}){let i=e.keys,a=r.mode===`single`,o,s,c,l;if(t===null)return;let u=!1;for(o=0,s=i.length;o<s;++o){if(c=+i[o],c===n){if(u=!0,r.all)continue;break}l=e.values[c],Li(l)&&(a||t===0||ca(t)===ca(l))&&(t+=l)}return!u&&!r.all?0:t}function uc(e,t){let{iScale:n,vScale:r}=t,i=n.axis===`x`?`x`:`y`,a=r.axis===`x`?`x`:`y`,o=Object.keys(e),s=Array(o.length),c,l,u;for(c=0,l=o.length;c<l;++c)u=o[c],s[c]={[i]:u,[a]:e[u]};return s}function dc(e,t){let n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function fc(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function pc(e){let{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:-1/0,max:i?n:1/0}}function mc(e,t,n){let r=e[t]||(e[t]={});return r[n]||(r[n]={})}function hc(e,t,n,r){for(let i of t.getMatchingVisibleMetas(r).reverse()){let t=e[i.index];if(n&&t>0||!n&&t<0)return i.index}return null}function gc(e,t){let{chart:n,_cachedMeta:r}=e,i=n._stacks||={},{iScale:a,vScale:o,index:s}=r,c=a.axis,l=o.axis,u=fc(a,o,r),d=t.length,f;for(let e=0;e<d;++e){let n=t[e],{[c]:a,[l]:d}=n,p=n._stacks||={};f=p[l]=mc(i,u,a),f[s]=d,f._top=hc(f,o,!0,r.type),f._bottom=hc(f,o,!1,r.type);let m=f._visualValues||(f._visualValues={});m[s]=d}}function _c(e,t){let n=e.scales;return Object.keys(n).filter(e=>n[e].axis===t).shift()}function vc(e,t){return Lo(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:`default`,type:`dataset`})}function yc(e,t,n){return Lo(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:`default`,type:`data`})}function bc(e,t){let n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t||=e._parsed;for(let e of t){let t=e._stacks;if(!t||t[r]===void 0||t[r][n]===void 0)return;delete t[r][n],t[r]._visualValues!==void 0&&t[r]._visualValues[n]!==void 0&&delete t[r]._visualValues[n]}}}var xc=e=>e===`reset`||e===`none`,Sc=(e,t)=>t?e:Object.assign({},e),Cc=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:cc(n,!0),values:null},wc=class{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=dc(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled(`filler`)&&console.warn(`Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options`)}updateIndex(e){this.index!==e&&bc(this._cachedMeta),this.index=e}linkScales(){let e=this.chart,t=this._cachedMeta,n=this.getDataset(),r=(e,t,n,r)=>e===`x`?t:e===`r`?r:n,i=t.xAxisID=F(n.xAxisID,_c(e,`x`)),a=t.yAxisID=F(n.yAxisID,_c(e,`y`)),o=t.rAxisID=F(n.rAxisID,_c(e,`r`)),s=t.indexAxis,c=t.iAxisID=r(s,i,a,o),l=t.vAxisID=r(s,a,i,o);t.xScale=this.getScaleForId(i),t.yScale=this.getScaleForId(a),t.rScale=this.getScaleForId(o),t.iScale=this.getScaleForId(c),t.vScale=this.getScaleForId(l)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){let t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update(`reset`)}_destroy(){let e=this._cachedMeta;this._data&&Na(this._data,this),e._stacked&&bc(e)}_dataCheck(){let e=this.getDataset(),t=e.data||=[],n=this._data;if(N(t)){let e=this._cachedMeta;this._data=uc(t,e)}else if(n!==t){if(n){Na(n,this);let e=this._cachedMeta;bc(e),e._parsed=[]}t&&Object.isExtensible(t)&&Ma(t,this),this._syncList=[],this._data=t}}addElements(){let e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){let t=this._cachedMeta,n=this.getDataset(),r=!1;this._dataCheck();let i=t._stacked;t._stacked=dc(t.vScale,t),t.stack!==n.stack&&(r=!0,bc(t),t.stack=n.stack),this._resyncElements(e),(r||i!==t._stacked)&&(gc(this,t._parsed),t._stacked=dc(t.vScale,t))}configure(){let e=this.chart.config,t=e.datasetScopeKeys(this._type),n=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){let{_cachedMeta:n,_data:r}=this,{iScale:i,_stacked:a}=n,o=i.axis,s=e===0&&t===r.length||n._sorted,c=e>0&&n._parsed[e-1],l,u,d;if(this._parsing===!1)n._parsed=r,n._sorted=!0,d=r;else{d=Ii(r[e])?this.parseArrayData(n,r,e,t):N(r[e])?this.parseObjectData(n,r,e,t):this.parsePrimitiveData(n,r,e,t);let i=()=>u[o]===null||c&&u[o]<c[o];for(l=0;l<t;++l)n._parsed[l+e]=u=d[l],s&&(i()&&(s=!1),c=u);n._sorted=s}a&&gc(this,d)}parsePrimitiveData(e,t,n,r){let{iScale:i,vScale:a}=e,o=i.axis,s=a.axis,c=i.getLabels(),l=i===a,u=Array(r),d,f,p;for(d=0,f=r;d<f;++d)p=d+n,u[d]={[o]:l||i.parse(c[p],p),[s]:a.parse(t[p],p)};return u}parseArrayData(e,t,n,r){let{xScale:i,yScale:a}=e,o=Array(r),s,c,l,u;for(s=0,c=r;s<c;++s)l=s+n,u=t[l],o[s]={x:i.parse(u[0],l),y:a.parse(u[1],l)};return o}parseObjectData(e,t,n,r){let{xScale:i,yScale:a}=e,{xAxisKey:o=`x`,yAxisKey:s=`y`}=this._parsing,c=Array(r),l,u,d,f;for(l=0,u=r;l<u;++l)d=l+n,f=t[d],c[l]={x:i.parse(Ji(f,o),d),y:a.parse(Ji(f,s),d)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,n){let r=this.chart,i=this._cachedMeta,a=t[e.axis];return lc({keys:cc(r,!0),values:t._stacks[e.axis]._visualValues},a,i.index,{mode:n})}updateRangeFromParsed(e,t,n,r){let i=n[t.axis],a=i===null?NaN:i,o=r&&n._stacks[t.axis];r&&o&&(r.values=o,a=lc(r,i,this._cachedMeta.index)),e.min=Math.min(e.min,a),e.max=Math.max(e.max,a)}getMinMax(e,t){let n=this._cachedMeta,r=n._parsed,i=n._sorted&&e===n.iScale,a=r.length,o=this._getOtherScale(e),s=Cc(t,n,this.chart),c={min:1/0,max:-1/0},{min:l,max:u}=pc(o),d,f;function p(){f=r[d];let t=f[o.axis];return!Li(f[e.axis])||l>t||u<t}for(d=0;d<a&&!(!p()&&(this.updateRangeFromParsed(c,e,f,s),i));++d);if(i){for(d=a-1;d>=0;--d)if(!p()){this.updateRangeFromParsed(c,e,f,s);break}}return c}getAllParsedValues(e){let t=this._cachedMeta._parsed,n=[],r,i,a;for(r=0,i=t.length;r<i;++r)a=t[r][e.axis],Li(a)&&n.push(a);return n}getMaxOverflow(){return!1}getLabelAndValue(e){let t=this._cachedMeta,n=t.iScale,r=t.vScale,i=this.getParsed(e);return{label:n?``+n.getLabelForValue(i[n.axis]):``,value:r?``+r.getLabelForValue(i[r.axis]):``}}_update(e){let t=this._cachedMeta;this.update(e||`default`),t._clip=sc(F(this.options.clip,oc(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){let e=this._ctx,t=this.chart,n=this._cachedMeta,r=n.data||[],i=t.chartArea,a=[],o=this._drawStart||0,s=this._drawCount||r.length-o,c=this.options.drawActiveElementsOnTop,l;for(n.dataset&&n.dataset.draw(e,i,o,s),l=o;l<o+s;++l){let t=r[l];t.hidden||(t.active&&c?a.push(t):t.draw(e,i))}for(l=0;l<a.length;++l)a[l].draw(e,i)}getStyle(e,t){let n=t?`active`:`default`;return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(e||0,n)}getContext(e,t,n){let r=this.getDataset(),i;if(e>=0&&e<this._cachedMeta.data.length){let t=this._cachedMeta.data[e];i=t.$context||=yc(this.getContext(),e,t),i.parsed=this.getParsed(e),i.raw=r.data[e],i.index=i.dataIndex=e}else i=this.$context||=vc(this.chart.getContext(),this.index),i.dataset=r,i.index=i.datasetIndex=this.index;return i.active=!!t,i.mode=n,i}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t=`default`,n){let r=t===`active`,i=this._cachedDataOpts,a=e+`-`+t,o=i[a],s=this.enableOptionSharing&&Xi(n);if(o)return Sc(o,s);let c=this.chart.config,l=c.datasetElementScopeKeys(this._type,e),u=r?[`${e}Hover`,`hover`,e,``]:[e,``],d=c.getOptionScopes(this.getDataset(),l),f=Object.keys(B.elements[e]),p=c.resolveNamedOptions(d,f,()=>this.getContext(n,r,t),u);return p.$shared&&(p.$shared=s,i[a]=Object.freeze(Sc(p,s))),p}_resolveAnimations(e,t,n){let r=this.chart,i=this._cachedDataOpts,a=`animation-${t}`,o=i[a];if(o)return o;let s;if(r.options.animation!==!1){let r=this.chart.config,i=r.datasetAnimationScopeKeys(this._type,t),a=r.getOptionScopes(this.getDataset(),i);s=r.createResolver(a,this.getContext(e,n,t))}let c=new nc(r,s&&s.animations);return s&&s._cacheable&&(i[a]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||=Object.assign({},e)}includeOptions(e,t){return!t||xc(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){let n=this.resolveDataElementOptions(e,t),r=this._sharedOptions,i=this.getSharedOptions(n),a=this.includeOptions(t,i)||i!==r;return this.updateSharedOptions(i,t,n),{sharedOptions:i,includeOptions:a}}updateElement(e,t,n,r){xc(r)?Object.assign(e,n):this._resolveAnimations(t,r).update(e,n)}updateSharedOptions(e,t,n){e&&!xc(t)&&this._resolveAnimations(void 0,t).update(e,n)}_setStyle(e,t,n,r){e.active=r;let i=this.getStyle(t,r);this._resolveAnimations(t,n,r).update(e,{options:!r&&this.getSharedOptions(i)||i})}removeHoverStyle(e,t,n){this._setStyle(e,n,`active`,!1)}setHoverStyle(e,t,n){this._setStyle(e,n,`active`,!0)}_removeDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,`active`,!1)}_setDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,`active`,!0)}_resyncElements(e){let t=this._data,n=this._cachedMeta.data;for(let[e,t,n]of this._syncList)this[e](t,n);this._syncList=[];let r=n.length,i=t.length,a=Math.min(i,r);a&&this.parse(0,a),i>r?this._insertElements(r,i-r,e):i<r&&this._removeElements(i,r-i)}_insertElements(e,t,n=!0){let r=this._cachedMeta,i=r.data,a=e+t,o,s=e=>{for(e.length+=t,o=e.length-1;o>=a;o--)e[o]=e[o-t]};for(s(i),o=e;o<a;++o)i[o]=new this.dataElementType;this._parsing&&s(r._parsed),this.parse(e,t),n&&this.updateElements(i,e,t,`reset`)}updateElements(e,t,n,r){}_removeElements(e,t){let n=this._cachedMeta;if(this._parsing){let r=n._parsed.splice(e,t);n._stacked&&bc(n,r)}n.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{let[t,n,r]=e;this[t](n,r)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){let e=arguments.length;this._sync([`_insertElements`,this.getDataset().data.length-e,e])}_onDataPop(){this._sync([`_removeElements`,this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync([`_removeElements`,0,1])}_onDataSplice(e,t){t&&this._sync([`_removeElements`,e,t]);let n=arguments.length-2;n&&this._sync([`_insertElements`,e,n])}_onDataUnshift(){this._sync([`_insertElements`,0,arguments.length])}},Tc=class extends wc{static id=`line`;static defaults={datasetElementType:`line`,dataElementType:`point`,showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:`category`},_value_:{type:`linear`}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){let t=this._cachedMeta,{dataset:n,data:r=[],_dataset:i}=t,a=this.chart._animationsDisabled,{start:o,count:s}=Ba(t,r,a);this._drawStart=o,this._drawCount=s,Va(t)&&(o=0,s=r.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!i._decimated,n.points=r;let c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!a,options:c},e),this.updateElements(r,o,s,e)}updateElements(e,t,n,r){let i=r===`reset`,{iScale:a,vScale:o,_stacked:s,_dataset:c}=this._cachedMeta,{sharedOptions:l,includeOptions:u}=this._getSharedOptions(t,r),d=a.axis,f=o.axis,{spanGaps:p,segment:m}=this.options,h=pa(p)?p:1/0,g=this.chart._animationsDisabled||i||r===`none`,_=t+n,v=e.length,y=t>0&&this.getParsed(t-1);for(let n=0;n<v;++n){let p=e[n],v=g?p:{};if(n<t||n>=_){v.skip=!0;continue}let b=this.getParsed(n),x=M(b[f]),S=v[d]=a.getPixelForValue(b[d],n),C=v[f]=i||x?o.getBasePixel():o.getPixelForValue(s?this.applyStack(o,b,s):b[f],n);v.skip=isNaN(S)||isNaN(C)||x,v.stop=n>0&&Math.abs(b[d]-y[d])>h,m&&(v.parsed=b,v.raw=c.data[n]),u&&(v.options=l||this.resolveDataElementOptions(n,p.active?`active`:r)),g||this.updateElement(p,n,v,r),y=b}}getMaxOverflow(){let e=this._cachedMeta,t=e.dataset,n=t.options&&t.options.borderWidth||0,r=e.data||[];if(!r.length)return n;let i=r[0].size(this.resolveDataElementOptions(0)),a=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(n,i,a)/2}draw(){let e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}};function Ec(){throw Error(`This method is not implemented: Check that a complete date adapter is provided.`)}var Dc={_date:class e{static override(t){Object.assign(e.prototype,t)}options;constructor(e){this.options=e||{}}init(){}formats(){return Ec()}parse(){return Ec()}format(){return Ec()}add(){return Ec()}diff(){return Ec()}startOf(){return Ec()}endOf(){return Ec()}}};function Oc(e,t,n,r){let{controller:i,data:a,_sorted:o}=e,s=i._cachedMeta.iScale,c=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(s&&t===s.axis&&t!==`r`&&o&&a.length){let o=s._reversePixels?ka:Oa;if(!r){let r=o(a,t,n);if(c){let{vScale:t}=i._cachedMeta,{_parsed:n}=e,a=n.slice(0,r.lo+1).reverse().findIndex(e=>!M(e[t.axis]));r.lo-=Math.max(0,a);let o=n.slice(r.hi).findIndex(e=>!M(e[t.axis]));r.hi+=Math.max(0,o)}return r}if(i._sharedOptions){let e=a[0],r=typeof e.getRange==`function`&&e.getRange(t);if(r){let e=o(a,t,n-r),i=o(a,t,n+r);return{lo:e.lo,hi:i.hi}}}}return{lo:0,hi:a.length-1}}function kc(e,t,n,r,i){let a=e.getSortedVisibleDatasetMetas(),o=n[t];for(let e=0,n=a.length;e<n;++e){let{index:n,data:s}=a[e],{lo:c,hi:l}=Oc(a[e],t,o,i);for(let e=c;e<=l;++e){let t=s[e];t.skip||r(t,n,e)}}}function Ac(e){let t=e.indexOf(`x`)!==-1,n=e.indexOf(`y`)!==-1;return function(e,r){let i=t?Math.abs(e.x-r.x):0,a=n?Math.abs(e.y-r.y):0;return Math.sqrt(i**2+a**2)}}function jc(e,t,n,r,i){let a=[];return!i&&!e.isPointInArea(t)||kc(e,n,t,function(n,o,s){!i&&!go(n,e.chartArea,0)||n.inRange(t.x,t.y,r)&&a.push({element:n,datasetIndex:o,index:s})},!0),a}function Mc(e,t,n,r){let i=[];function a(e,n,a){let{startAngle:o,endAngle:s}=e.getProps([`startAngle`,`endAngle`],r),{angle:c}=ya(e,{x:t.x,y:t.y});Ca(c,o,s)&&i.push({element:e,datasetIndex:n,index:a})}return kc(e,n,t,a),i}function Nc(e,t,n,r,i,a){let o=[],s=Ac(n),c=1/0;function l(n,l,u){let d=n.inRange(t.x,t.y,i);if(r&&!d)return;let f=n.getCenterPoint(i);if(!(a||e.isPointInArea(f))&&!d)return;let p=s(t,f);p<c?(o=[{element:n,datasetIndex:l,index:u}],c=p):p===c&&o.push({element:n,datasetIndex:l,index:u})}return kc(e,n,t,l),o}function Pc(e,t,n,r,i,a){return!a&&!e.isPointInArea(t)?[]:n===`r`&&!r?Mc(e,t,n,i):Nc(e,t,n,r,i,a)}function Fc(e,t,n,r,i){let a=[],o=n===`x`?`inXRange`:`inYRange`,s=!1;return kc(e,n,t,(e,r,c)=>{e[o]&&e[o](t[n],i)&&(a.push({element:e,datasetIndex:r,index:c}),s||=e.inRange(t.x,t.y,i))}),r&&!s?[]:a}var Ic={evaluateInteractionItems:kc,modes:{index(e,t,n,r){let i=Ss(t,e),a=n.axis||`x`,o=n.includeInvisible||!1,s=n.intersect?jc(e,i,a,r,o):Pc(e,i,a,!1,r,o),c=[];return s.length?(e.getSortedVisibleDatasetMetas().forEach(e=>{let t=s[0].index,n=e.data[t];n&&!n.skip&&c.push({element:n,datasetIndex:e.index,index:t})}),c):[]},dataset(e,t,n,r){let i=Ss(t,e),a=n.axis||`xy`,o=n.includeInvisible||!1,s=n.intersect?jc(e,i,a,r,o):Pc(e,i,a,!1,r,o);if(s.length>0){let t=s[0].datasetIndex,n=e.getDatasetMeta(t).data;s=[];for(let e=0;e<n.length;++e)s.push({element:n[e],datasetIndex:t,index:e})}return s},point(e,t,n,r){return jc(e,Ss(t,e),n.axis||`xy`,r,n.includeInvisible||!1)},nearest(e,t,n,r){let i=Ss(t,e),a=n.axis||`xy`,o=n.includeInvisible||!1;return Pc(e,i,a,n.intersect,r,o)},x(e,t,n,r){return Fc(e,Ss(t,e),`x`,n.intersect,r)},y(e,t,n,r){return Fc(e,Ss(t,e),`y`,n.intersect,r)}}},Lc=[`left`,`top`,`right`,`bottom`];function Rc(e,t){return e.filter(e=>e.pos===t)}function U(e,t){return e.filter(e=>Lc.indexOf(e.pos)===-1&&e.box.axis===t)}function zc(e,t){return e.sort((e,n)=>{let r=t?n:e,i=t?e:n;return r.weight===i.weight?r.index-i.index:r.weight-i.weight})}function Bc(e){let t=[],n,r,i,a,o,s;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:a,options:{stack:o,stackWeight:s=1}}=i,t.push({index:n,box:i,pos:a,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&a+o,stackWeight:s});return t}function Vc(e){let t={};for(let n of e){let{stack:e,pos:r,stackWeight:i}=n;if(!e||!Lc.includes(r))continue;let a=t[e]||(t[e]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=i}return t}function Hc(e,t){let n=Vc(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t,a,o,s;for(a=0,o=e.length;a<o;++a){s=e[a];let{fullSize:o}=s.box,c=n[s.stack],l=c&&s.stackWeight/c.weight;s.horizontal?(s.width=l?l*r:o&&t.availableWidth,s.height=i):(s.width=r,s.height=l?l*i:o&&t.availableHeight)}return n}function Uc(e){let t=Bc(e),n=zc(t.filter(e=>e.box.fullSize),!0),r=zc(Rc(t,`left`),!0),i=zc(Rc(t,`right`)),a=zc(Rc(t,`top`),!0),o=zc(Rc(t,`bottom`)),s=U(t,`x`),c=U(t,`y`);return{fullSize:n,leftAndTop:r.concat(a),rightAndBottom:i.concat(c).concat(o).concat(s),chartArea:Rc(t,`chartArea`),vertical:r.concat(i).concat(c),horizontal:a.concat(o).concat(s)}}function Wc(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function Gc(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function Kc(e,t,n,r){let{pos:i,box:a}=n,o=e.maxPadding;if(!N(i)){n.size&&(e[i]-=n.size);let t=r[n.stack]||{size:0,count:1};t.size=Math.max(t.size,n.horizontal?a.height:a.width),n.size=t.size/t.count,e[i]+=n.size}a.getPadding&&Gc(o,a.getPadding());let s=Math.max(0,t.outerWidth-Wc(o,e,`left`,`right`)),c=Math.max(0,t.outerHeight-Wc(o,e,`top`,`bottom`)),l=s!==e.w,u=c!==e.h;return e.w=s,e.h=c,n.horizontal?{same:l,other:u}:{same:u,other:l}}function qc(e){let t=e.maxPadding;function n(n){let r=Math.max(t[n]-e[n],0);return e[n]+=r,r}e.y+=n(`top`),e.x+=n(`left`),n(`right`),n(`bottom`)}function Jc(e,t){let n=t.maxPadding;function r(e){let r={left:0,top:0,right:0,bottom:0};return e.forEach(e=>{r[e]=Math.max(t[e],n[e])}),r}return r(e?[`left`,`right`]:[`top`,`bottom`])}function Yc(e,t,n,r){let i=[],a,o,s,c,l,u;for(a=0,o=e.length,l=0;a<o;++a){s=e[a],c=s.box,c.update(s.width||t.w,s.height||t.h,Jc(s.horizontal,t));let{same:o,other:d}=Kc(t,n,s,r);l|=o&&i.length,u||=d,c.fullSize||i.push(s)}return l&&Yc(i,t,n,r)||u}function Xc(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function Zc(e,t,n,r){let i=n.padding,{x:a,y:o}=t;for(let s of e){let e=s.box,c=r[s.stack]||{count:1,placed:0,weight:1},l=s.stackWeight/c.weight||1;if(s.horizontal){let r=t.w*l,a=c.size||e.height;Xi(c.start)&&(o=c.start),e.fullSize?Xc(e,i.left,o,n.outerWidth-i.right-i.left,a):Xc(e,t.left+c.placed,o,r,a),c.start=o,c.placed+=r,o=e.bottom}else{let r=t.h*l,o=c.size||e.width;Xi(c.start)&&(a=c.start),e.fullSize?Xc(e,a,i.top,o,n.outerHeight-i.bottom-i.top):Xc(e,a,t.top+c.placed,o,r),c.start=a,c.placed+=r,a=e.right}}t.x=a,t.y=o}var Qc={addBox(e,t){e.boxes||=[],t.fullSize=t.fullSize||!1,t.position=t.position||`top`,t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},e.boxes.push(t)},removeBox(e,t){let n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;let i=No(e.options.layout.padding),a=Math.max(t-i.width,0),o=Math.max(n-i.height,0),s=Uc(e.boxes),c=s.vertical,l=s.horizontal;R(e.boxes,e=>{typeof e.beforeLayout==`function`&&e.beforeLayout()});let u=c.reduce((e,t)=>t.box.options&&t.box.options.display===!1?e:e+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:a,availableHeight:o,vBoxMaxWidth:a/2/u,hBoxMaxHeight:o/2}),f=Object.assign({},i);Gc(f,No(r));let p=Object.assign({maxPadding:f,w:a,h:o,x:i.left,y:i.top},i),m=Hc(c.concat(l),d);Yc(s.fullSize,p,d,m),Yc(c,p,d,m),Yc(l,p,d,m)&&Yc(c,p,d,m),qc(p),Zc(s.leftAndTop,p,d,m),p.x+=p.w,p.y+=p.h,Zc(s.rightAndBottom,p,d,m),e.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},R(s.chartArea,t=>{let n=t.box;Object.assign(n,e.chartArea),n.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}},$c=class{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,n){}removeEventListener(e,t,n){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,n,r){return t=Math.max(0,t||e.width),n||=e.height,{width:t,height:Math.max(0,r?Math.floor(t/r):n)}}isAttached(e){return!0}updateConfig(e){}},el=class extends $c{acquireContext(e){return e&&e.getContext&&e.getContext(`2d`)||null}updateConfig(e){e.options.animation=!1}},tl=`$chartjs`,nl={touchstart:`mousedown`,touchmove:`mousemove`,touchend:`mouseup`,pointerenter:`mouseenter`,pointerdown:`mousedown`,pointermove:`mousemove`,pointerup:`mouseup`,pointerleave:`mouseout`,pointerout:`mouseout`},rl=e=>e===null||e===``;function il(e,t){let n=e.style,r=e.getAttribute(`height`),i=e.getAttribute(`width`);if(e[tl]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||`block`,n.boxSizing=n.boxSizing||`border-box`,rl(i)){let t=Os(e,`width`);t!==void 0&&(e.width=t)}if(rl(r)){if(e.style.height===``)e.height=e.width/(t||2);else{let t=Os(e,`height`);t!==void 0&&(e.height=t)}}return e}var al=Ds?{passive:!0}:!1;function ol(e,t,n){e&&e.addEventListener(t,n,al)}function sl(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,al)}function cl(e,t){let n=nl[e.type]||e.type,{x:r,y:i}=Ss(e,t);return{type:n,chart:t,native:e,x:r===void 0?null:r,y:i===void 0?null:i}}function W(e,t){for(let n of e)if(n===t||n.contains(t))return!0}function ll(e,t,n){let r=e.canvas,i=new MutationObserver(e=>{let t=!1;for(let n of e)t||=W(n.addedNodes,r),t&&=!W(n.removedNodes,r);t&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function ul(e,t,n){let r=e.canvas,i=new MutationObserver(e=>{let t=!1;for(let n of e)t||=W(n.removedNodes,r),t&&=!W(n.addedNodes,r);t&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}var dl=new Map,fl=0;function pl(){let e=window.devicePixelRatio;e!==fl&&(fl=e,dl.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function ml(e,t){dl.size||window.addEventListener(`resize`,pl),dl.set(e,t)}function hl(e){dl.delete(e),dl.size||window.removeEventListener(`resize`,pl)}function gl(e,t,n){let r=e.canvas,i=r&&ms(r);if(!i)return;let a=Ia((e,t)=>{let r=i.clientWidth;n(e,t),r<i.clientWidth&&n()},window),o=new ResizeObserver(e=>{let t=e[0],n=t.contentRect.width,r=t.contentRect.height;(n!==0||r!==0)&&a(n,r)});return o.observe(i),ml(e,a),o}function _l(e,t,n){n&&n.disconnect(),t===`resize`&&hl(e)}function vl(e,t,n){let r=e.canvas,i=Ia(t=>{e.ctx!==null&&n(cl(t,e))},e);return ol(r,t,i),i}var yl=class extends $c{acquireContext(e,t){let n=e&&e.getContext&&e.getContext(`2d`);return n&&n.canvas===e?(il(e,t),n):null}releaseContext(e){let t=e.canvas;if(!t[tl])return!1;let n=t[tl].initial;[`height`,`width`].forEach(e=>{let r=n[e];M(r)?t.removeAttribute(e):t.setAttribute(e,r)});let r=n.style||{};return Object.keys(r).forEach(e=>{t.style[e]=r[e]}),t.width=t.width,delete t[tl],!0}addEventListener(e,t,n){this.removeEventListener(e,t);let r=e.$proxies||={};r[t]=({attach:ll,detach:ul,resize:gl}[t]||vl)(e,t,n)}removeEventListener(e,t){let n=e.$proxies||={},r=n[t];r&&(({attach:_l,detach:_l,resize:_l}[t]||sl)(e,t,r),n[t]=void 0)}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,n,r){return Ts(e,t,n,r)}isAttached(e){let t=e&&ms(e);return!!(t&&t.isConnected)}};function bl(e){return!ps()||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas?el:yl}var xl=class{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(e){let{x:t,y:n}=this.getProps([`x`,`y`],e);return{x:t,y:n}}hasValue(){return pa(this.x)&&pa(this.y)}getProps(e,t){let n=this.$animations;if(!t||!n)return this;let r={};return e.forEach(e=>{r[e]=n[e]&&n[e].active()?n[e]._to:this[e]}),r}};function Sl(e,t){let n=e.options.ticks,r=Cl(e),i=Math.min(n.maxTicksLimit||r,r),a=n.major.enabled?Tl(t):[],o=a.length,s=a[0],c=a[o-1],l=[];if(o>i)return El(t,l,a,o/i),l;let u=wl(a,t,i);if(o>0){let e,n,r=o>1?Math.round((c-s)/(o-1)):null;for(Dl(t,l,u,M(r)?0:s-r,s),e=0,n=o-1;e<n;e++)Dl(t,l,u,a[e],a[e+1]);return Dl(t,l,u,c,M(r)?t.length:c+r),l}return Dl(t,l,u),l}function Cl(e){let t=e.options.offset,n=e._tickSize(),r=e._length/n+ +!t,i=e._maxLength/n;return Math.floor(Math.min(r,i))}function wl(e,t,n){let r=Ol(e),i=t.length/n;if(!r)return Math.max(i,1);let a=da(r);for(let e=0,t=a.length-1;e<t;e++){let t=a[e];if(t>i)return t}return Math.max(i,1)}function Tl(e){let t=[],n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function El(e,t,n,r){let i=0,a=n[0],o;for(r=Math.ceil(r),o=0;o<e.length;o++)o===a&&(t.push(e[o]),i++,a=n[i*r])}function Dl(e,t,n,r,i){let a=F(r,0),o=Math.min(F(i,e.length),e.length),s=0,c,l,u;for(n=Math.ceil(n),i&&(c=i-r,n=c/Math.floor(c/n)),u=a;u<0;)s++,u=Math.round(a+s*n);for(l=Math.max(a,0);l<o;l++)l===u&&(t.push(e[l]),s++,u=Math.round(a+s*n))}function Ol(e){let t=e.length,n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}var kl=e=>e===`left`?`right`:e===`right`?`left`:e,Al=(e,t,n)=>t===`top`||t===`left`?e[t]+n:e[t]-n,jl=(e,t)=>Math.min(t||e,e);function Ml(e,t){let n=[],r=e.length/t,i=e.length,a=0;for(;a<i;a+=r)n.push(e[Math.floor(a)]);return n}function Nl(e,t,n){let r=e.ticks.length,i=Math.min(t,r-1),a=e._startPixel,o=e._endPixel,s=1e-6,c=e.getPixelForTick(i),l;if(!(n&&(l=r===1?Math.max(c-a,o-c):t===0?(e.getPixelForTick(1)-c)/2:(c-e.getPixelForTick(i-1))/2,c+=i<t?l:-l,c<a-s||c>o+s)))return c}function Pl(e,t){R(e,e=>{let n=e.gc,r=n.length/2,i;if(r>t){for(i=0;i<r;++i)delete e.data[n[i]];n.splice(0,r)}})}function Fl(e){return e.drawTicks?e.tickLength:0}function Il(e,t){if(!e.display)return 0;let n=Po(e.font,t),r=No(e.padding);return(Ii(e.text)?e.text.length:1)*n.lineHeight+r.height}function Ll(e,t){return Lo(e,{scale:t,type:`scale`})}function Rl(e,t,n){return Lo(e,{tick:n,index:t,type:`tick`})}function zl(e,t,n){let r=Ra(e);return(n&&t!==`right`||!n&&t===`right`)&&(r=kl(r)),r}function G(e,t,n,r){let{top:i,left:a,bottom:o,right:s,chart:c}=e,{chartArea:l,scales:u}=c,d=0,f,p,m,h=o-i,g=s-a;if(e.isHorizontal()){if(p=za(r,a,s),N(n)){let e=Object.keys(n)[0],r=n[e];m=u[e].getPixelForValue(r)+h-t}else m=n===`center`?(l.bottom+l.top)/2+h-t:Al(e,n,t);f=s-a}else{if(N(n)){let e=Object.keys(n)[0],r=n[e];p=u[e].getPixelForValue(r)-g+t}else p=n===`center`?(l.left+l.right)/2-g+t:Al(e,n,t);m=za(r,o,i),d=n===`left`?-aa:aa}return{titleX:p,titleY:m,maxWidth:f,rotation:d}}var K=class e extends xl{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:n,_suggestedMax:r}=this;return e=P(e,1/0),t=P(t,-1/0),n=P(n,1/0),r=P(r,-1/0),{min:P(e,n),max:P(t,r),minDefined:Li(e),maxDefined:Li(t)}}getMinMax(e){let{min:t,max:n,minDefined:r,maxDefined:i}=this.getUserBounds(),a;if(r&&i)return{min:t,max:n};let o=this.getMatchingVisibleMetas();for(let s=0,c=o.length;s<c;++s)a=o[s].controller.getMinMax(this,e),r||(t=Math.min(t,a.min)),i||(n=Math.max(n,a.max));return t=i&&t>n?n:t,n=r&&t>n?t:n,{min:P(t,P(n,t)),max:P(n,P(t,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||=this._computeLabelItems(e)}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){L(this.options.beforeUpdate,[this])}update(e,t,n){let{beginAtZero:r,grace:i,ticks:a}=this.options,o=a.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||=(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Io(this,i,r),!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let s=o<this.ticks.length;this._convertTicksToLabels(s?Ml(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source===`auto`)&&(this.ticks=Sl(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),s&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,n;this.isHorizontal()?(t=this.left,n=this.right):(t=this.top,n=this.bottom,e=!e),this._startPixel=t,this._endPixel=n,this._reversePixels=e,this._length=n-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){L(this.options.afterUpdate,[this])}beforeSetDimensions(){L(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){L(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),L(this.options[e],[this])}beforeDataLimits(){this._callHooks(`beforeDataLimits`)}determineDataLimits(){}afterDataLimits(){this._callHooks(`afterDataLimits`)}beforeBuildTicks(){this._callHooks(`beforeBuildTicks`)}buildTicks(){return[]}afterBuildTicks(){this._callHooks(`afterBuildTicks`)}beforeTickToLabelConversion(){L(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){let t=this.options.ticks,n,r,i;for(n=0,r=e.length;n<r;n++)i=e[n],i.label=L(t.callback,[i.value,n,e],this)}afterTickToLabelConversion(){L(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){L(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let e=this.options,t=e.ticks,n=jl(this.ticks.length,e.ticks.maxTicksLimit),r=t.minRotation||0,i=t.maxRotation,a=r,o,s,c;if(!this._isVisible()||!t.display||r>=i||n<=1||!this.isHorizontal()){this.labelRotation=r;return}let l=this._getLabelSizes(),u=l.widest.width,d=l.highest.height,f=wa(this.chart.width-u,0,this.maxWidth);o=e.offset?this.maxWidth/n:f/(n-1),u+6>o&&(o=f/(n-(e.offset?.5:1)),s=this.maxHeight-Fl(e.grid)-t.padding-Il(e.title,this.chart.options.font),c=Math.sqrt(u*u+d*d),a=_a(Math.min(Math.asin(wa((l.highest.height+6)/o,-1,1)),Math.asin(wa(s/c,-1,1))-Math.asin(wa(d/c,-1,1)))),a=Math.max(r,Math.min(i,a))),this.labelRotation=a}afterCalculateLabelRotation(){L(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){L(this.options.beforeFit,[this])}fit(){let e={width:0,height:0},{chart:t,options:{ticks:n,title:r,grid:i}}=this,a=this._isVisible(),o=this.isHorizontal();if(a){let a=Il(r,t.options.font);if(o?(e.width=this.maxWidth,e.height=Fl(i)+a):(e.height=this.maxHeight,e.width=Fl(i)+a),n.display&&this.ticks.length){let{first:t,last:r,widest:i,highest:a}=this._getLabelSizes(),s=n.padding*2,c=ga(this.labelRotation),l=Math.cos(c),u=Math.sin(c);if(o){let t=n.mirror?0:u*i.width+l*a.height;e.height=Math.min(this.maxHeight,e.height+t+s)}else{let t=n.mirror?0:l*i.width+u*a.height;e.width=Math.min(this.maxWidth,e.width+t+s)}this._calculatePadding(t,r,u,l)}}this._handleMargins(),o?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,n,r){let{ticks:{align:i,padding:a},position:o}=this.options,s=this.labelRotation!==0,c=o!==`top`&&this.axis===`x`;if(this.isHorizontal()){let o=this.getPixelForTick(0)-this.left,l=this.right-this.getPixelForTick(this.ticks.length-1),u=0,d=0;s?c?(u=r*e.width,d=n*t.height):(u=n*e.height,d=r*t.width):i===`start`?d=t.width:i===`end`?u=e.width:i!==`inner`&&(u=e.width/2,d=t.width/2),this.paddingLeft=Math.max((u-o+a)*this.width/(this.width-o),0),this.paddingRight=Math.max((d-l+a)*this.width/(this.width-l),0)}else{let n=t.height/2,r=e.height/2;i===`start`?(n=0,r=e.height):i===`end`&&(n=t.height,r=0),this.paddingTop=n+a,this.paddingBottom=r+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){L(this.options.afterFit,[this])}isHorizontal(){let{axis:e,position:t}=this.options;return t===`top`||t===`bottom`||e===`x`}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,n;for(t=0,n=e.length;t<n;t++)M(e[t].label)&&(e.splice(t,1),n--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){let t=this.options.ticks.sampleSize,n=this.ticks;t<n.length&&(n=Ml(n,t)),this._labelSizes=e=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,n){let{ctx:r,_longestTextCache:i}=this,a=[],o=[],s=Math.floor(t/jl(t,n)),c=0,l=0,u,d,f,p,m,h,g,_,v,y,b;for(u=0;u<t;u+=s){if(p=e[u].label,m=this._resolveTickFontOptions(u),r.font=h=m.string,g=i[h]=i[h]||{data:{},gc:[]},_=m.lineHeight,v=y=0,!M(p)&&!Ii(p))v=fo(r,g.data,g.gc,v,p),y=_;else if(Ii(p))for(d=0,f=p.length;d<f;++d)b=p[d],!M(b)&&!Ii(b)&&(v=fo(r,g.data,g.gc,v,b),y+=_);a.push(v),o.push(y),c=Math.max(v,c),l=Math.max(y,l)}Pl(i,t);let x=a.indexOf(c),S=o.indexOf(l),C=e=>({width:a[e]||0,height:o[e]||0});return{first:C(0),last:C(t-1),widest:C(x),highest:C(S),widths:a,heights:o}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);let t=this._startPixel+e*this._length;return Ta(this._alignToPixels?H(this.chart,t,0):t)}getDecimalForPixel(e){let t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){let t=this.ticks||[];if(e>=0&&e<t.length){let n=t[e];return n.$context||=Rl(this.getContext(),e,n)}return this.$context||=Ll(this.chart.getContext(),this)}_tickSize(){let e=this.options.ticks,t=ga(this.labelRotation),n=Math.abs(Math.cos(t)),r=Math.abs(Math.sin(t)),i=this._getLabelSizes(),a=e.autoSkipPadding||0,o=i?i.widest.width+a:0,s=i?i.highest.height+a:0;return this.isHorizontal()?s*n>o*r?o/n:s/r:s*r<o*n?s/n:o/r}_isVisible(){let e=this.options.display;return e===`auto`?this.getMatchingVisibleMetas().length>0:!!e}_computeGridLineItems(e){let t=this.axis,n=this.chart,r=this.options,{grid:i,position:a,border:o}=r,s=i.offset,c=this.isHorizontal(),l=this.ticks.length+ +!!s,u=Fl(i),d=[],f=o.setContext(this.getContext()),p=f.display?f.width:0,m=p/2,h=function(e){return H(n,e,p)},g,_,v,y,b,x,S,C,w,T,E,ee;if(a===`top`)g=h(this.bottom),x=this.bottom-u,C=g-m,T=h(e.top)+m,ee=e.bottom;else if(a===`bottom`)g=h(this.top),T=e.top,ee=h(e.bottom)-m,x=g+m,C=this.top+u;else if(a===`left`)g=h(this.right),b=this.right-u,S=g-m,w=h(e.left)+m,E=e.right;else if(a===`right`)g=h(this.left),w=e.left,E=h(e.right)-m,b=g+m,S=this.left+u;else if(t===`x`){if(a===`center`)g=h((e.top+e.bottom)/2+.5);else if(N(a)){let e=Object.keys(a)[0],t=a[e];g=h(this.chart.scales[e].getPixelForValue(t))}T=e.top,ee=e.bottom,x=g+m,C=x+u}else if(t===`y`){if(a===`center`)g=h((e.left+e.right)/2);else if(N(a)){let e=Object.keys(a)[0],t=a[e];g=h(this.chart.scales[e].getPixelForValue(t))}b=g-m,S=b-u,w=e.left,E=e.right}let te=F(r.ticks.maxTicksLimit,l),ne=Math.max(1,Math.ceil(l/te));for(_=0;_<l;_+=ne){let e=this.getContext(_),t=i.setContext(e),r=o.setContext(e),a=t.lineWidth,l=t.color,u=r.dash||[],f=r.dashOffset,p=t.tickWidth,m=t.tickColor,h=t.tickBorderDash||[],g=t.tickBorderDashOffset;v=Nl(this,_,s),v!==void 0&&(y=H(n,v,a),c?b=S=w=E=y:x=C=T=ee=y,d.push({tx1:b,ty1:x,tx2:S,ty2:C,x1:w,y1:T,x2:E,y2:ee,width:a,color:l,borderDash:u,borderDashOffset:f,tickWidth:p,tickColor:m,tickBorderDash:h,tickBorderDashOffset:g}))}return this._ticksLength=l,this._borderValue=g,d}_computeLabelItems(e){let t=this.axis,n=this.options,{position:r,ticks:i}=n,a=this.isHorizontal(),o=this.ticks,{align:s,crossAlign:c,padding:l,mirror:u}=i,d=Fl(n.grid),f=d+l,p=u?-l:f,m=-ga(this.labelRotation),h=[],g,_,v,y,b,x,S,C,w,T,E,ee,te=`middle`;if(r===`top`)x=this.bottom-p,S=this._getXAxisLabelAlignment();else if(r===`bottom`)x=this.top+p,S=this._getXAxisLabelAlignment();else if(r===`left`){let e=this._getYAxisLabelAlignment(d);S=e.textAlign,b=e.x}else if(r===`right`){let e=this._getYAxisLabelAlignment(d);S=e.textAlign,b=e.x}else if(t===`x`){if(r===`center`)x=(e.top+e.bottom)/2+f;else if(N(r)){let e=Object.keys(r)[0],t=r[e];x=this.chart.scales[e].getPixelForValue(t)+f}S=this._getXAxisLabelAlignment()}else if(t===`y`){if(r===`center`)b=(e.left+e.right)/2-f;else if(N(r)){let e=Object.keys(r)[0],t=r[e];b=this.chart.scales[e].getPixelForValue(t)}S=this._getYAxisLabelAlignment(d).textAlign}t===`y`&&(s===`start`?te=`top`:s===`end`&&(te=`bottom`));let ne=this._getLabelSizes();for(g=0,_=o.length;g<_;++g){v=o[g],y=v.label;let e=i.setContext(this.getContext(g));C=this.getPixelForTick(g)+i.labelOffset,w=this._resolveTickFontOptions(g),T=w.lineHeight,E=Ii(y)?y.length:1;let t=E/2,n=e.color,s=e.textStrokeColor,l=e.textStrokeWidth,d=S;a?(b=C,S===`inner`&&(d=g===_-1?this.options.reverse?`left`:`right`:g===0?this.options.reverse?`right`:`left`:`center`),ee=r===`top`?c===`near`||m!==0?-E*T+T/2:c===`center`?-ne.highest.height/2-t*T+T:-ne.highest.height+T/2:c===`near`||m!==0?T/2:c===`center`?ne.highest.height/2-t*T:ne.highest.height-E*T,u&&(ee*=-1),m!==0&&!e.showLabelBackdrop&&(b+=T/2*Math.sin(m))):(x=C,ee=(1-E)*T/2);let f;if(e.showLabelBackdrop){let t=No(e.backdropPadding),n=ne.heights[g],r=ne.widths[g],i=ee-t.top,a=0-t.left;switch(te){case`middle`:i-=n/2;break;case`bottom`:i-=n}switch(S){case`center`:a-=r/2;break;case`right`:a-=r;break;case`inner`:g===_-1?a-=r:g>0&&(a-=r/2)}f={left:a,top:i,width:r+t.width,height:n+t.height,color:e.backdropColor}}h.push({label:y,font:w,textOffset:ee,options:{rotation:m,color:n,strokeColor:s,strokeWidth:l,textAlign:d,textBaseline:te,translation:[b,x],backdrop:f}})}return h}_getXAxisLabelAlignment(){let{position:e,ticks:t}=this.options;if(-ga(this.labelRotation))return e===`top`?`left`:`right`;let n=`center`;return t.align===`start`?n=`left`:t.align===`end`?n=`right`:t.align===`inner`&&(n=`inner`),n}_getYAxisLabelAlignment(e){let{position:t,ticks:{crossAlign:n,mirror:r,padding:i}}=this.options,a=this._getLabelSizes(),o=e+i,s=a.widest.width,c,l;return t===`left`?r?(l=this.right+i,n===`near`?c=`left`:n===`center`?(c=`center`,l+=s/2):(c=`right`,l+=s)):(l=this.right-o,n===`near`?c=`right`:n===`center`?(c=`center`,l-=s/2):(c=`left`,l=this.left)):t===`right`?r?(l=this.left+i,n===`near`?c=`right`:n===`center`?(c=`center`,l-=s/2):(c=`left`,l-=s)):(l=this.left+o,n===`near`?c=`left`:n===`center`?(c=`center`,l+=s/2):(c=`right`,l=this.right)):c=`right`,{textAlign:c,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;let e=this.chart,t=this.options.position;if(t===`left`||t===`right`)return{top:0,left:this.left,bottom:e.height,right:this.right};if(t===`top`||t===`bottom`)return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){let{ctx:e,options:{backgroundColor:t},left:n,top:r,width:i,height:a}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(n,r,i,a),e.restore())}getLineWidthForValue(e){let t=this.options.grid;if(!this._isVisible()||!t.display)return 0;let n=this.ticks.findIndex(t=>t.value===e);return n>=0?t.setContext(this.getContext(n)).lineWidth:0}drawGrid(e){let t=this.options.grid,n=this.ctx,r=this._gridLineItems||=this._computeGridLineItems(e),i,a,o=(e,t,r)=>{!r.width||!r.color||(n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.setLineDash(r.borderDash||[]),n.lineDashOffset=r.borderDashOffset,n.beginPath(),n.moveTo(e.x,e.y),n.lineTo(t.x,t.y),n.stroke(),n.restore())};if(t.display)for(i=0,a=r.length;i<a;++i){let e=r[i];t.drawOnChartArea&&o({x:e.x1,y:e.y1},{x:e.x2,y:e.y2},e),t.drawTicks&&o({x:e.tx1,y:e.ty1},{x:e.tx2,y:e.ty2},{color:e.tickColor,width:e.tickWidth,borderDash:e.tickBorderDash,borderDashOffset:e.tickBorderDashOffset})}}drawBorder(){let{chart:e,ctx:t,options:{border:n,grid:r}}=this,i=n.setContext(this.getContext()),a=n.display?i.width:0;if(!a)return;let o=r.setContext(this.getContext(0)).lineWidth,s=this._borderValue,c,l,u,d;this.isHorizontal()?(c=H(e,this.left,a)-a/2,l=H(e,this.right,o)+o/2,u=d=s):(u=H(e,this.top,a)-a/2,d=H(e,this.bottom,o)+o/2,c=l=s),t.save(),t.lineWidth=i.width,t.strokeStyle=i.color,t.beginPath(),t.moveTo(c,u),t.lineTo(l,d),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;let t=this.ctx,n=this._computeLabelArea();n&&_o(t,n);let r=this.getLabelItems(e);for(let e of r){let n=e.options,r=e.font,i=e.label,a=e.textOffset;wo(t,i,0,a,r,n)}n&&vo(t)}drawTitle(){let{ctx:e,options:{position:t,title:n,reverse:r}}=this;if(!n.display)return;let i=Po(n.font),a=No(n.padding),o=n.align,s=i.lineHeight/2;t===`bottom`||t===`center`||N(t)?(s+=a.bottom,Ii(n.text)&&(s+=i.lineHeight*(n.text.length-1))):s+=a.top;let{titleX:c,titleY:l,maxWidth:u,rotation:d}=G(this,s,t,o);wo(e,n.text,0,0,i,{color:n.color,maxWidth:u,rotation:d,textAlign:zl(o,t,r),textBaseline:`middle`,translation:[c,l]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){let t=this.options,n=t.ticks&&t.ticks.z||0,r=F(t.grid&&t.grid.z,-1),i=F(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==e.prototype.draw?[{z:n,draw:e=>{this.draw(e)}}]:[{z:r,draw:e=>{this.drawBackground(),this.drawGrid(e),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:e=>{this.drawLabels(e)}}]}getMatchingVisibleMetas(e){let t=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+`AxisID`,r=[],i,a;for(i=0,a=t.length;i<a;++i){let a=t[i];a[n]===this.id&&(!e||a.type===e)&&r.push(a)}return r}_resolveTickFontOptions(e){return Po(this.options.ticks.setContext(this.getContext(e)).font)}_maxDigits(){let e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}},q=class{constructor(e,t,n){this.type=e,this.scope=t,this.override=n,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){let t=Object.getPrototypeOf(e),n;Bl(t)&&(n=this.register(t));let r=this.items,i=e.id,a=this.scope+`.`+i;if(!i)throw Error(`class does not have id: `+e);return i in r?a:(r[i]=e,J(e,a,n),this.override&&B.override(e.id,e.overrides),a)}get(e){return this.items[e]}unregister(e){let t=this.items,n=e.id,r=this.scope;n in t&&delete t[n],r&&n in B[r]&&(delete B[r][n],this.override&&delete oo[n])}};function J(e,t,n){let r=Hi(Object.create(null),[n?B.get(n):{},B.get(t),e.defaults]);B.set(t,r),e.defaultRoutes&&Y(t,e.defaultRoutes),e.descriptors&&B.describe(t,e.descriptors)}function Y(e,t){Object.keys(t).forEach(n=>{let r=n.split(`.`),i=r.pop(),a=[e].concat(r).join(`.`),o=t[n].split(`.`),s=o.pop(),c=o.join(`.`);B.route(a,i,c,s)})}function Bl(e){return`id`in e&&`defaults`in e}var Vl=new class{constructor(){this.controllers=new q(wc,`datasets`,!0),this.elements=new q(xl,`elements`),this.plugins=new q(Object,`plugins`),this.scales=new q(K,`scales`),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each(`register`,e)}remove(...e){this._each(`unregister`,e)}addControllers(...e){this._each(`register`,e,this.controllers)}addElements(...e){this._each(`register`,e,this.elements)}addPlugins(...e){this._each(`register`,e,this.plugins)}addScales(...e){this._each(`register`,e,this.scales)}getController(e){return this._get(e,this.controllers,`controller`)}getElement(e){return this._get(e,this.elements,`element`)}getPlugin(e){return this._get(e,this.plugins,`plugin`)}getScale(e){return this._get(e,this.scales,`scale`)}removeControllers(...e){this._each(`unregister`,e,this.controllers)}removeElements(...e){this._each(`unregister`,e,this.elements)}removePlugins(...e){this._each(`unregister`,e,this.plugins)}removeScales(...e){this._each(`unregister`,e,this.scales)}_each(e,t,n){[...t].forEach(t=>{let r=n||this._getRegistryForType(t);n||r.isForType(t)||r===this.plugins&&t.id?this._exec(e,r,t):R(t,t=>{let r=n||this._getRegistryForType(t);this._exec(e,r,t)})})}_exec(e,t,n){let r=Yi(e);L(n[`before`+r],[],n),t[e](n),L(n[`after`+r],[],n)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){let n=this._typedRegistries[t];if(n.isForType(e))return n}return this.plugins}_get(e,t,n){let r=t.get(e);if(r===void 0)throw Error(`"`+e+`" is not a registered `+n+`.`);return r}},Hl=class{constructor(){this._init=void 0}notify(e,t,n,r){if(t===`beforeInit`&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,`install`)),this._init===void 0)return;let i=r?this._descriptors(e).filter(r):this._descriptors(e),a=this._notify(i,e,t,n);return t===`afterDestroy`&&(this._notify(i,e,`stop`),this._notify(this._init,e,`uninstall`),this._init=void 0),a}_notify(e,t,n,r){r||={};for(let i of e){let e=i.plugin,a=e[n];if(L(a,[t,r,i.options],e)===!1&&r.cancelable)return!1}return!0}invalidate(){M(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;let t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){let n=e&&e.config,r=F(n.options&&n.options.plugins,{}),i=Ul(n);return r===!1&&!t?[]:Gl(e,i,r,t)}_notifyStateChanges(e){let t=this._oldCache||[],n=this._cache,r=(e,t)=>e.filter(e=>!t.some(t=>e.plugin.id===t.plugin.id));this._notify(r(t,n),e,`stop`),this._notify(r(n,t),e,`start`)}};function Ul(e){let t={},n=[],r=Object.keys(Vl.plugins.items);for(let e=0;e<r.length;e++)n.push(Vl.getPlugin(r[e]));let i=e.plugins||[];for(let e=0;e<i.length;e++){let r=i[e];n.indexOf(r)===-1&&(n.push(r),t[r.id]=!0)}return{plugins:n,localIds:t}}function Wl(e,t){return!t&&e===!1?null:e===!0?{}:e}function Gl(e,{plugins:t,localIds:n},r,i){let a=[],o=e.getContext();for(let s of t){let t=s.id,c=Wl(r[t],i);c!==null&&a.push({plugin:s,options:Kl(e.config,{plugin:s,local:n[t]},c,o)})}return a}function Kl(e,{plugin:t,local:n},r,i){let a=e.pluginScopeKeys(t),o=e.getOptionScopes(r,a);return n&&t.defaults&&o.push(t.defaults),e.createResolver(o,i,[``],{scriptable:!1,indexable:!1,allKeys:!0})}function ql(e,t){let n=B.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||`x`}function Jl(e,t){let n=e;return e===`_index_`?n=t:e===`_value_`&&(n=t===`x`?`y`:`x`),n}function Yl(e,t){return e===t?`_index_`:`_value_`}function Xl(e){if(e===`x`||e===`y`||e===`r`)return e}function Zl(e){if(e===`top`||e===`bottom`)return`x`;if(e===`left`||e===`right`)return`y`}function Ql(e,...t){if(Xl(e))return e;for(let n of t){let t=n.axis||Zl(n.position)||e.length>1&&Xl(e[0].toLowerCase());if(t)return t}throw Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function $l(e,t,n){if(n[t+`AxisID`]===e)return{axis:t}}function eu(e,t){if(t.data&&t.data.datasets){let n=t.data.datasets.filter(t=>t.xAxisID===e||t.yAxisID===e);if(n.length)return $l(e,`x`,n[0])||$l(e,`y`,n[0])}return{}}function tu(e,t){let n=oo[e.type]||{scales:{}},r=t.scales||{},i=ql(e.type,t),a=Object.create(null);return Object.keys(r).forEach(t=>{let o=r[t];if(!N(o))return console.error(`Invalid scale configuration for scale: ${t}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);let s=Ql(t,o,eu(t,e),B.scales[o.type]),c=Yl(s,i),l=n.scales||{};a[t]=Ui(Object.create(null),[{axis:s},o,l[s],l[c]])}),e.data.datasets.forEach(n=>{let i=n.type||e.type,o=n.indexAxis||ql(i,t),s=(oo[i]||{}).scales||{};Object.keys(s).forEach(e=>{let t=Jl(e,o),i=n[t+`AxisID`]||t;a[i]=a[i]||Object.create(null),Ui(a[i],[{axis:t},r[i],s[e]])})}),Object.keys(a).forEach(e=>{let t=a[e];Ui(t,[B.scales[t.type],B.scale])}),a}function nu(e){let t=e.options||={};t.plugins=F(t.plugins,{}),t.scales=tu(e,t)}function ru(e){return e||={},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function iu(e){return e||={},e.data=ru(e.data),nu(e),e}var au=new Map,ou=new Set;function su(e,t){let n=au.get(e);return n||(n=t(),au.set(e,n),ou.add(n)),n}var cu=(e,t,n)=>{let r=Ji(t,n);r!==void 0&&e.add(r)},lu=class{constructor(e){this._config=iu(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=ru(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){let e=this._config;this.clearCache(),nu(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return su(e,()=>[[`datasets.${e}`,``]])}datasetAnimationScopeKeys(e,t){return su(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,``]])}datasetElementScopeKeys(e,t){return su(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,``]])}pluginScopeKeys(e){let t=e.id,n=this.type;return su(`${n}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){let n=this._scopeCache,r=n.get(e);return(!r||t)&&(r=new Map,n.set(e,r)),r}getOptionScopes(e,t,n){let{options:r,type:i}=this,a=this._cachedScopes(e,n),o=a.get(t);if(o)return o;let s=new Set;t.forEach(t=>{e&&(s.add(e),t.forEach(t=>cu(s,e,t))),t.forEach(e=>cu(s,r,e)),t.forEach(e=>cu(s,oo[i]||{},e)),t.forEach(e=>cu(s,B,e)),t.forEach(e=>cu(s,so,e))});let c=Array.from(s);return c.length===0&&c.push(Object.create(null)),ou.has(t)&&a.set(t,c),c}chartOptionScopes(){let{options:e,type:t}=this;return[e,oo[t]||{},B.datasets[t]||{},{type:t},B,so]}resolveNamedOptions(e,t,n,r=[``]){let i={$shared:!0},{resolver:a,subPrefixes:o}=uu(this._resolverCache,e,r),s=a;if(fu(a,t)){i.$shared=!1,n=Zi(n)?n():n;let t=this.createResolver(e,n,o);s=zo(a,n,t)}for(let e of t)i[e]=s[e];return i}createResolver(e,t,n=[``],r){let{resolver:i}=uu(this._resolverCache,e,n);return N(t)?zo(i,t,void 0,r):i}};function uu(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));let i=n.join(),a=r.get(i);return a||(a={resolver:Ro(t,n),subPrefixes:n.filter(e=>!e.toLowerCase().includes(`hover`))},r.set(i,a)),a}var du=e=>N(e)&&Object.getOwnPropertyNames(e).some(t=>Zi(e[t]));function fu(e,t){let{isScriptable:n,isIndexable:r}=Bo(e);for(let i of t){let t=n(i),a=r(i),o=(a||t)&&e[i];if(t&&(Zi(o)||du(o))||a&&Ii(o))return!0}return!1}var pu=`4.5.1`,mu=[`top`,`bottom`,`left`,`right`,`chartArea`];function hu(e,t){return e===`top`||e===`bottom`||mu.indexOf(e)===-1&&t===`x`}function gu(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function _u(e){let t=e.chart,n=t.options.animation;t.notifyPlugins(`afterRender`),L(n&&n.onComplete,[e],t)}function vu(e){let t=e.chart,n=t.options.animation;L(n&&n.onProgress,[e],t)}function yu(e){return ps()&&typeof e==`string`?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}var bu={},xu=e=>{let t=yu(e);return Object.values(bu).filter(e=>e.canvas===t).pop()};function Su(e,t,n){let r=Object.keys(e);for(let i of r){let r=+i;if(r>=t){let a=e[i];delete e[i],(n>0||r>t)&&(e[r+n]=a)}}}function Cu(e,t,n,r){return!n||e.type===`mouseout`?null:r?t:e}var wu=class{static defaults=B;static instances=bu;static overrides=oo;static registry=Vl;static version=pu;static getChart=xu;static register(...e){Vl.add(...e),Tu()}static unregister(...e){Vl.remove(...e),Tu()}constructor(e,t){let n=this.config=new lu(t),r=yu(e),i=xu(r);if(i)throw Error(`Canvas is already in use. Chart with ID '`+i.id+`' must be destroyed before the canvas with ID '`+i.canvas.id+`' can be reused.`);let a=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||(bl(r))),this.platform.updateConfig(n);let o=this.platform.acquireContext(r,a.aspectRatio),s=o&&o.canvas,c=s&&s.height,l=s&&s.width;if(this.id=Fi(),this.ctx=o,this.canvas=s,this.width=l,this.height=c,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Hl,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=La(e=>this.update(e),a.resizeDelay||0),this._dataChanges=[],bu[this.id]=this,!o||!s){console.error(`Failed to create chart: can't acquire context from the given item`);return}Qs.listen(this,`complete`,_u),Qs.listen(this,`progress`,vu),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:e,maintainAspectRatio:t},width:n,height:r,_aspectRatio:i}=this;return M(e)?t&&i?i:r?n/r:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return Vl}_initialize(){return this.notifyPlugins(`beforeInit`),this.options.responsive?this.resize():Es(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins(`afterInit`),this}clear(){return po(this.canvas,this.ctx),this}stop(){return Qs.stop(this),this}resize(e,t){Qs.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){let n=this.options,r=this.canvas,i=n.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(r,e,t,i),o=n.devicePixelRatio||this.platform.getDevicePixelRatio(),s=this.width?`resize`:`attach`;this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,Es(this,o,!0)&&(this.notifyPlugins(`resize`,{size:a}),L(n.onResize,[this,a],this),this.attached&&this._doResize(s)&&this.render())}ensureScalesHaveIDs(){R(this.options.scales||{},(e,t)=>{e.id=t})}buildOrUpdateScales(){let e=this.options,t=e.scales,n=this.scales,r=Object.keys(n).reduce((e,t)=>(e[t]=!1,e),{}),i=[];t&&(i=i.concat(Object.keys(t).map(e=>{let n=t[e],r=Ql(e,n),i=r===`r`,a=r===`x`;return{options:n,dposition:i?`chartArea`:a?`bottom`:`left`,dtype:i?`radialLinear`:a?`category`:`linear`}}))),R(i,t=>{let i=t.options,a=i.id,o=Ql(a,i),s=F(i.type,t.dtype);(i.position===void 0||hu(i.position,o)!==hu(t.dposition))&&(i.position=t.dposition),r[a]=!0;let c=null;a in n&&n[a].type===s?c=n[a]:(c=new(Vl.getScale(s))({id:a,type:s,ctx:this.ctx,chart:this}),n[c.id]=c),c.init(i,e)}),R(r,(e,t)=>{e||delete n[t]}),R(n,e=>{Qc.configure(this,e,e.options),Qc.addBox(this,e)})}_updateMetasets(){let e=this._metasets,t=this.data.datasets.length,n=e.length;if(e.sort((e,t)=>e.index-t.index),n>t){for(let e=t;e<n;++e)this._destroyDatasetMeta(e);e.splice(t,n-t)}this._sortedMetasets=e.slice(0).sort(gu(`order`,`index`))}_removeUnreferencedMetasets(){let{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((e,n)=>{t.filter(t=>t===e._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){let e=[],t=this.data.datasets,n,r;for(this._removeUnreferencedMetasets(),n=0,r=t.length;n<r;n++){let r=t[n],i=this.getDatasetMeta(n),a=r.type||this.config.type;if(i.type&&i.type!==a&&(this._destroyDatasetMeta(n),i=this.getDatasetMeta(n)),i.type=a,i.indexAxis=r.indexAxis||ql(a,this.options),i.order=r.order||0,i.index=n,i.label=``+r.label,i.visible=this.isDatasetVisible(n),i.controller)i.controller.updateIndex(n),i.controller.linkScales();else{let t=Vl.getController(a),{datasetElementType:r,dataElementType:o}=B.datasets[a];Object.assign(t,{dataElementType:Vl.getElement(o),datasetElementType:r&&Vl.getElement(r)}),i.controller=new t(this,n),e.push(i.controller)}}return this._updateMetasets(),e}_resetElements(){R(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins(`reset`)}update(e){let t=this.config;t.update();let n=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins(`beforeUpdate`,{mode:e,cancelable:!0})===!1)return;let i=this.buildOrUpdateControllers();this.notifyPlugins(`beforeElementsUpdate`);let a=0;for(let e=0,t=this.data.datasets.length;e<t;e++){let{controller:t}=this.getDatasetMeta(e),n=!r&&i.indexOf(t)===-1;t.buildOrUpdateElements(n),a=Math.max(+t.getMaxOverflow(),a)}a=this._minPadding=n.layout.autoPadding?a:0,this._updateLayout(a),r||R(i,e=>{e.reset()}),this._updateDatasets(e),this.notifyPlugins(`afterUpdate`,{mode:e}),this._layers.sort(gu(`z`,`_idx`));let{_active:o,_lastEvent:s}=this;s?this._eventHandler(s,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){R(this.scales,e=>{Qc.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let e=this.options;(!Qi(new Set(Object.keys(this._listeners)),new Set(e.events))||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(let{method:n,start:r,count:i}of t)Su(e,r,n===`_removeElements`?-i:i)}_getUniformDataChanges(){let e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];let t=this.data.datasets.length,n=t=>new Set(e.filter(e=>e[0]===t).map((e,t)=>t+`,`+e.splice(1).join(`,`))),r=n(0);for(let e=1;e<t;e++)if(!Qi(r,n(e)))return;return Array.from(r).map(e=>e.split(`,`)).map(e=>({method:e[1],start:+e[2],count:+e[3]}))}_updateLayout(e){if(this.notifyPlugins(`beforeLayout`,{cancelable:!0})===!1)return;Qc.update(this,this.width,this.height,e);let t=this.chartArea,n=t.width<=0||t.height<=0;this._layers=[],R(this.boxes,e=>{n&&e.position===`chartArea`||(e.configure&&e.configure(),this._layers.push(...e._layers()))},this),this._layers.forEach((e,t)=>{e._idx=t}),this.notifyPlugins(`afterLayout`)}_updateDatasets(e){if(this.notifyPlugins(`beforeDatasetsUpdate`,{mode:e,cancelable:!0})!==!1){for(let e=0,t=this.data.datasets.length;e<t;++e)this.getDatasetMeta(e).controller.configure();for(let t=0,n=this.data.datasets.length;t<n;++t)this._updateDataset(t,Zi(e)?e({datasetIndex:t}):e);this.notifyPlugins(`afterDatasetsUpdate`,{mode:e})}}_updateDataset(e,t){let n=this.getDatasetMeta(e),r={meta:n,index:e,mode:t,cancelable:!0};this.notifyPlugins(`beforeDatasetUpdate`,r)!==!1&&(n.controller._update(t),r.cancelable=!1,this.notifyPlugins(`afterDatasetUpdate`,r))}render(){this.notifyPlugins(`beforeRender`,{cancelable:!0})!==!1&&(Qs.has(this)?this.attached&&!Qs.running(this)&&Qs.start(this):(this.draw(),_u({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){let{width:e,height:t}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(e,t)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins(`beforeDraw`,{cancelable:!0})===!1)return;let t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins(`afterDraw`)}_getSortedDatasetMetas(e){let t=this._sortedMetasets,n=[],r,i;for(r=0,i=t.length;r<i;++r){let i=t[r];(!e||i.visible)&&n.push(i)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins(`beforeDatasetsDraw`,{cancelable:!0})===!1)return;let e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins(`afterDatasetsDraw`)}_drawDataset(e){let t=this.ctx,n={meta:e,index:e.index,cancelable:!0},r=Zs(this,e);this.notifyPlugins(`beforeDatasetDraw`,n)!==!1&&(r&&_o(t,r),e.controller.draw(),r&&vo(t),n.cancelable=!1,this.notifyPlugins(`afterDatasetDraw`,n))}isPointInArea(e){return go(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,n,r){let i=Ic.modes[t];return typeof i==`function`?i(this,e,n,r):[]}getDatasetMeta(e){let t=this.data.datasets[e],n=this._metasets,r=n.filter(e=>e&&e._dataset===t).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},n.push(r)),r}getContext(){return this.$context||=Lo(null,{chart:this,type:`chart`})}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){let t=this.data.datasets[e];if(!t)return!1;let n=this.getDatasetMeta(e);return typeof n.hidden==`boolean`?!n.hidden:!t.hidden}setDatasetVisibility(e,t){let n=this.getDatasetMeta(e);n.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,n){let r=n?`show`:`hide`,i=this.getDatasetMeta(e),a=i.controller._resolveAnimations(void 0,r);Xi(t)?(i.data[t].hidden=!n,this.update()):(this.setDatasetVisibility(e,n),a.update(i,{visible:n}),this.update(t=>t.datasetIndex===e?r:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){let t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),Qs.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins(`beforeDestroy`);let{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),po(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete bu[this.id],this.notifyPlugins(`afterDestroy`)}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let e=this._listeners,t=this.platform,n=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},r=(e,t,n)=>{e.offsetX=t,e.offsetY=n,this._eventHandler(e)};R(this.options.events,e=>n(e,r))}bindResponsiveEvents(){this._responsiveListeners||={};let e=this._responsiveListeners,t=this.platform,n=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},r=(n,r)=>{e[n]&&(t.removeEventListener(this,n,r),delete e[n])},i=(e,t)=>{this.canvas&&this.resize(e,t)},a,o=()=>{r(`attach`,o),this.attached=!0,this.resize(),n(`resize`,i),n(`detach`,a)};a=()=>{this.attached=!1,r(`resize`,i),this._stop(),this._resize(0,0),n(`attach`,o)},t.isAttached(this.canvas)?o():a()}unbindEvents(){R(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},R(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,n){let r=n?`set`:`remove`,i,a,o,s;for(t===`dataset`&&(i=this.getDatasetMeta(e[0].datasetIndex),i.controller[`_`+r+`DatasetHoverStyle`]()),o=0,s=e.length;o<s;++o){a=e[o];let t=a&&this.getDatasetMeta(a.datasetIndex).controller;t&&t[r+`HoverStyle`](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){let t=this._active||[],n=e.map(({datasetIndex:e,index:t})=>{let n=this.getDatasetMeta(e);if(!n)throw Error(`No dataset found at index `+e);return{datasetIndex:e,element:n.data[t],index:t}});Ri(n,t)||(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,t))}notifyPlugins(e,t,n){return this._plugins.notify(this,e,t,n)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,n){let r=this.options.hover,i=(e,t)=>e.filter(e=>!t.some(t=>e.datasetIndex===t.datasetIndex&&e.index===t.index)),a=i(t,e),o=n?e:i(e,t);a.length&&this.updateHoverStyle(a,r.mode,!1),o.length&&r.mode&&this.updateHoverStyle(o,r.mode,!0)}_eventHandler(e,t){let n={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},r=t=>(t.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins(`beforeEvent`,n,r)===!1)return;let i=this._handleEvent(e,t,n.inChartArea);return n.cancelable=!1,this.notifyPlugins(`afterEvent`,n,r),(i||n.changed)&&this.render(),this}_handleEvent(e,t,n){let{_active:r=[],options:i}=this,a=t,o=this._getActiveElements(e,r,n,a),s=$i(e),c=Cu(e,this._lastEvent,n,s);n&&(this._lastEvent=null,L(i.onHover,[e,o,this],this),s&&L(i.onClick,[e,o,this],this));let l=!Ri(o,r);return(l||t)&&(this._active=o,this._updateHoverStyles(o,r,t)),this._lastEvent=c,l}_getActiveElements(e,t,n,r){if(e.type===`mouseout`)return[];if(!n)return t;let i=this.options.hover;return this.getElementsAtEventForMode(e,i.mode,i,r)}};function Tu(){return R(wu.instances,e=>e._plugins.invalidate())}function Eu(e,t,n=t){e.lineCap=F(n.borderCapStyle,t.borderCapStyle),e.setLineDash(F(n.borderDash,t.borderDash)),e.lineDashOffset=F(n.borderDashOffset,t.borderDashOffset),e.lineJoin=F(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=F(n.borderWidth,t.borderWidth),e.strokeStyle=F(n.borderColor,t.borderColor)}function Du(e,t,n){e.lineTo(n.x,n.y)}function Ou(e){return e.stepped?yo:e.tension||e.cubicInterpolationMode===`monotone`?bo:Du}function ku(e,t,n={}){let r=e.length,{start:i=0,end:a=r-1}=n,{start:o,end:s}=t,c=Math.max(i,o),l=Math.min(a,s),u=i<o&&a<o||i>s&&a>s;return{count:r,start:c,loop:t.loop,ilen:l<c&&!u?r+l-c:l-c}}function Au(e,t,n,r){let{points:i,options:a}=t,{count:o,start:s,loop:c,ilen:l}=ku(i,n,r),u=Ou(a),{move:d=!0,reverse:f}=r||{},p,m,h;for(p=0;p<=l;++p)m=i[(s+(f?l-p:p))%o],!m.skip&&(d?(e.moveTo(m.x,m.y),d=!1):u(e,h,m,f,a.stepped),h=m);return c&&(m=i[(s+(f?l:0))%o],u(e,h,m,f,a.stepped)),!!c}function ju(e,t,n,r){let i=t.points,{count:a,start:o,ilen:s}=ku(i,n,r),{move:c=!0,reverse:l}=r||{},u=0,d=0,f,p,m,h,g,_,v=e=>(o+(l?s-e:e))%a,y=()=>{h!==g&&(e.lineTo(u,g),e.lineTo(u,h),e.lineTo(u,_))};for(c&&(p=i[v(0)],e.moveTo(p.x,p.y)),f=0;f<=s;++f){if(p=i[v(f)],p.skip)continue;let t=p.x,n=p.y,r=t|0;r===m?(n<h?h=n:n>g&&(g=n),u=(d*u+t)/++d):(y(),e.lineTo(t,n),m=r,d=0,h=g=n),_=n}y()}function Mu(e){let t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!==`monotone`&&!t.stepped&&!n?ju:Au}function Nu(e){return e.stepped?As:e.tension||e.cubicInterpolationMode===`monotone`?js:ks}function Pu(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),Eu(e,t.options),e.stroke(i)}function Fu(e,t,n,r){let{segments:i,options:a}=t,o=Mu(t);for(let s of i)Eu(e,a,s.style),e.beginPath(),o(e,t,s,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}var Iu=typeof Path2D==`function`;function Lu(e,t,n,r){Iu&&!t.options.segment?Pu(e,t,n,r):Fu(e,t,n,r)}var Ru=class extends xl{static id=`line`;static defaults={borderCapStyle:`butt`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:`default`,fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};static descriptors={_scriptable:!0,_indexable:e=>e!==`borderDash`&&e!==`fill`};constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){let n=this.options;if((n.tension||n.cubicInterpolationMode===`monotone`)&&!n.stepped&&!this._pointsUpdated){let r=n.spanGaps?this._loop:this._fullLoop;fs(this._points,n,e,r,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||=Ws(this,this.options.segment)}first(){let e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){let e=this.segments,t=this.points,n=e.length;return n&&t[e[n-1].end]}interpolate(e,t){let n=this.options,r=e[t],i=this.points,a=Vs(this,{property:t,start:r,end:r});if(!a.length)return;let o=[],s=Nu(n),c,l;for(c=0,l=a.length;c<l;++c){let{start:l,end:u}=a[c],d=i[l],f=i[u];if(d===f){o.push(d);continue}let p=s(d,f,Math.abs((r-d[t])/(f[t]-d[t])),n.stepped);p[t]=e[t],o.push(p)}return o.length===1?o[0]:o}pathSegment(e,t,n){return Mu(this)(e,this,t,n)}path(e,t,n){let r=this.segments,i=Mu(this),a=this._loop;t||=0,n||=this.points.length-t;for(let o of r)a&=i(e,this,o,{start:t,end:t+n-1});return!!a}draw(e,t,n,r){let i=this.options||{};(this.points||[]).length&&i.borderWidth&&(e.save(),Lu(e,this,n,r),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};function zu(e,t,n,r){let i=e.options,{[n]:a}=e.getProps([n],r);return Math.abs(t-a)<i.radius+i.hitRadius}var Bu=class extends xl{static id=`point`;parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:`circle`,radius:3,rotation:0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};constructor(e){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,t,n){let r=this.options,{x:i,y:a}=this.getProps([`x`,`y`],n);return(e-i)**2+(t-a)**2<(r.hitRadius+r.radius)**2}inXRange(e,t){return zu(this,e,`x`,t)}inYRange(e,t){return zu(this,e,`y`,t)}getCenterPoint(e){let{x:t,y:n}=this.getProps([`x`,`y`],e);return{x:t,y:n}}size(e){e=e||this.options||{};let t=e.radius||0;t=Math.max(t,t&&e.hoverRadius||0);let n=t&&e.borderWidth||0;return(t+n)*2}draw(e,t){let n=this.options;this.skip||n.radius<.1||!go(this,t,this.size(n)/2)||(e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.fillStyle=n.backgroundColor,mo(e,n,this.x,this.y))}getRange(){let e=this.options||{};return e.radius+e.hitRadius}},Vu={average(e){if(!e.length)return!1;let t,n,r=new Set,i=0,a=0;for(t=0,n=e.length;t<n;++t){let n=e[t].element;if(n&&n.hasValue()){let e=n.tooltipPosition();r.add(e.x),i+=e.y,++a}}return a===0||r.size===0?!1:{x:[...r].reduce((e,t)=>e+t)/r.size,y:i/a}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=1/0,a,o,s;for(a=0,o=e.length;a<o;++a){let n=e[a].element;if(n&&n.hasValue()){let e=ba(t,n.getCenterPoint());e<i&&(i=e,s=n)}}if(s){let e=s.tooltipPosition();n=e.x,r=e.y}return{x:n,y:r}}};function Hu(e,t){return t&&(Ii(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function Uu(e){return(typeof e==`string`||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function Wu(e,t){let{element:n,datasetIndex:r,index:i}=t,a=e.getDatasetMeta(r).controller,{label:o,value:s}=a.getLabelAndValue(i);return{chart:e,label:o,parsed:a.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:s,dataset:a.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function Gu(e,t){let n=e.chart.ctx,{body:r,footer:i,title:a}=e,{boxWidth:o,boxHeight:s}=t,c=Po(t.bodyFont),l=Po(t.titleFont),u=Po(t.footerFont),d=a.length,f=i.length,p=r.length,m=No(t.padding),h=m.height,g=0,_=r.reduce((e,t)=>e+t.before.length+t.lines.length+t.after.length,0);if(_+=e.beforeBody.length+e.afterBody.length,d&&(h+=d*l.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),_){let e=t.displayColors?Math.max(s,c.lineHeight):c.lineHeight;h+=p*e+(_-p)*c.lineHeight+(_-1)*t.bodySpacing}f&&(h+=t.footerMarginTop+f*u.lineHeight+(f-1)*t.footerSpacing);let v=0,y=function(e){g=Math.max(g,n.measureText(e).width+v)};return n.save(),n.font=l.string,R(e.title,y),n.font=c.string,R(e.beforeBody.concat(e.afterBody),y),v=t.displayColors?o+2+t.boxPadding:0,R(r,e=>{R(e.before,y),R(e.lines,y),R(e.after,y)}),v=0,n.font=u.string,R(e.footer,y),n.restore(),g+=m.width,{width:g,height:h}}function X(e,t){let{y:n,height:r}=t;return n<r/2?`top`:n>e.height-r/2?`bottom`:`center`}function Ku(e,t,n,r){let{x:i,width:a}=r,o=n.caretSize+n.caretPadding;if(e===`left`&&i+a+o>t.width||e===`right`&&i-a-o<0)return!0}function qu(e,t,n,r){let{x:i,width:a}=n,{width:o,chartArea:{left:s,right:c}}=e,l=`center`;return r===`center`?l=i<=(s+c)/2?`left`:`right`:i<=a/2?l=`left`:i>=o-a/2&&(l=`right`),Ku(l,e,t,n)&&(l=`center`),l}function Ju(e,t,n){let r=n.yAlign||t.yAlign||X(e,n);return{xAlign:n.xAlign||t.xAlign||qu(e,t,n,r),yAlign:r}}function Yu(e,t){let{x:n,width:r}=e;return t===`right`?n-=r:t===`center`&&(n-=r/2),n}function Xu(e,t,n){let{y:r,height:i}=e;return t===`top`?r+=n:r-=t===`bottom`?i+n:i/2,r}function Zu(e,t,n,r){let{caretSize:i,caretPadding:a,cornerRadius:o}=e,{xAlign:s,yAlign:c}=n,l=i+a,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=Mo(o),m=Yu(t,s),h=Xu(t,c,l);return c===`center`?s===`left`?m+=l:s===`right`&&(m-=l):s===`left`?m-=Math.max(u,f)+i:s===`right`&&(m+=Math.max(d,p)+i),{x:wa(m,0,r.width-t.width),y:wa(h,0,r.height-t.height)}}function Qu(e,t,n){let r=No(n.padding);return t===`center`?e.x+e.width/2:t===`right`?e.x+e.width-r.right:e.x+r.left}function $u(e){return Hu([],Uu(e))}function ed(e,t,n){return Lo(e,{tooltip:t,tooltipItems:n,type:`tooltip`})}function td(e,t){let n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}var nd={beforeTitle:Pi,title(e){if(e.length>0){let t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode===`dataset`)return t.dataset.label||``;if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return``},afterTitle:Pi,beforeBody:Pi,beforeLabel:Pi,label(e){if(this&&this.options&&this.options.mode===`dataset`)return e.label+`: `+e.formattedValue||e.formattedValue;let t=e.dataset.label||``;t&&(t+=`: `);let n=e.formattedValue;return M(n)||(t+=n),t},labelColor(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:Pi,afterBody:Pi,beforeFooter:Pi,footer:Pi,afterFooter:Pi};function rd(e,t,n,r){let i=e[t].call(n,r);return i===void 0?nd[t].call(n,r):i}var id=class extends xl{static positioners=Vu;constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let e=this._cachedAnimations;if(e)return e;let t=this.chart,n=this.options.setContext(this.getContext()),r=n.enabled&&t.options.animation&&n.animations,i=new nc(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(i)),i}getContext(){return this.$context||=ed(this.chart.getContext(),this,this._tooltipItems)}getTitle(e,t){let{callbacks:n}=t,r=rd(n,`beforeTitle`,this,e),i=rd(n,`title`,this,e),a=rd(n,`afterTitle`,this,e),o=[];return o=Hu(o,Uu(r)),o=Hu(o,Uu(i)),o=Hu(o,Uu(a)),o}getBeforeBody(e,t){return $u(rd(t.callbacks,`beforeBody`,this,e))}getBody(e,t){let{callbacks:n}=t,r=[];return R(e,e=>{let t={before:[],lines:[],after:[]},i=td(n,e);Hu(t.before,Uu(rd(i,`beforeLabel`,this,e))),Hu(t.lines,rd(i,`label`,this,e)),Hu(t.after,Uu(rd(i,`afterLabel`,this,e))),r.push(t)}),r}getAfterBody(e,t){return $u(rd(t.callbacks,`afterBody`,this,e))}getFooter(e,t){let{callbacks:n}=t,r=rd(n,`beforeFooter`,this,e),i=rd(n,`footer`,this,e),a=rd(n,`afterFooter`,this,e),o=[];return o=Hu(o,Uu(r)),o=Hu(o,Uu(i)),o=Hu(o,Uu(a)),o}_createItems(e){let t=this._active,n=this.chart.data,r=[],i=[],a=[],o=[],s,c;for(s=0,c=t.length;s<c;++s)o.push(Wu(this.chart,t[s]));return e.filter&&(o=o.filter((t,r,i)=>e.filter(t,r,i,n))),e.itemSort&&(o=o.sort((t,r)=>e.itemSort(t,r,n))),R(o,t=>{let n=td(e.callbacks,t);r.push(rd(n,`labelColor`,this,t)),i.push(rd(n,`labelPointStyle`,this,t)),a.push(rd(n,`labelTextColor`,this,t))}),this.labelColors=r,this.labelPointStyles=i,this.labelTextColors=a,this.dataPoints=o,o}update(e,t){let n=this.options.setContext(this.getContext()),r=this._active,i,a=[];if(!r.length)this.opacity!==0&&(i={opacity:0});else{let e=Vu[n.position].call(this,r,this._eventPosition);a=this._createItems(n),this.title=this.getTitle(a,n),this.beforeBody=this.getBeforeBody(a,n),this.body=this.getBody(a,n),this.afterBody=this.getAfterBody(a,n),this.footer=this.getFooter(a,n);let t=this._size=Gu(this,n),o=Object.assign({},e,t),s=Ju(this.chart,n,o),c=Zu(n,o,s,this.chart);this.xAlign=s.xAlign,this.yAlign=s.yAlign,i={opacity:1,x:c.x,y:c.y,width:t.width,height:t.height,caretX:e.x,caretY:e.y}}this._tooltipItems=a,this.$context=void 0,i&&this._resolveAnimations().update(this,i),e&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,n,r){let i=this.getCaretPosition(e,n,r);t.lineTo(i.x1,i.y1),t.lineTo(i.x2,i.y2),t.lineTo(i.x3,i.y3)}getCaretPosition(e,t,n){let{xAlign:r,yAlign:i}=this,{caretSize:a,cornerRadius:o}=n,{topLeft:s,topRight:c,bottomLeft:l,bottomRight:u}=Mo(o),{x:d,y:f}=e,{width:p,height:m}=t,h,g,_,v,y,b;return i===`center`?(y=f+m/2,r===`left`?(h=d,g=h-a,v=y+a,b=y-a):(h=d+p,g=h+a,v=y-a,b=y+a),_=h):(g=r===`left`?d+Math.max(s,l)+a:r===`right`?d+p-Math.max(c,u)-a:this.caretX,i===`top`?(v=f,y=v-a,h=g-a,_=g+a):(v=f+m,y=v+a,h=g+a,_=g-a),b=v),{x1:h,x2:g,x3:_,y1:v,y2:y,y3:b}}drawTitle(e,t,n){let r=this.title,i=r.length,a,o,s;if(i){let c=Ps(n.rtl,this.x,this.width);for(e.x=Qu(this,n.titleAlign,n),t.textAlign=c.textAlign(n.titleAlign),t.textBaseline=`middle`,a=Po(n.titleFont),o=n.titleSpacing,t.fillStyle=n.titleColor,t.font=a.string,s=0;s<i;++s)t.fillText(r[s],c.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+o,s+1===i&&(e.y+=n.titleMarginBottom-o)}}_drawColorBox(e,t,n,r,i){let a=this.labelColors[n],o=this.labelPointStyles[n],{boxHeight:s,boxWidth:c}=i,l=Po(i.bodyFont),u=Qu(this,`left`,i),d=r.x(u),f=s<l.lineHeight?(l.lineHeight-s)/2:0,p=t.y+f;if(i.usePointStyle){let t={radius:Math.min(c,s)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},n=r.leftForLtr(d,c)+c/2,l=p+s/2;e.strokeStyle=i.multiKeyBackground,e.fillStyle=i.multiKeyBackground,mo(e,t,n,l),e.strokeStyle=a.borderColor,e.fillStyle=a.backgroundColor,mo(e,t,n,l)}else{e.lineWidth=N(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,e.strokeStyle=a.borderColor,e.setLineDash(a.borderDash||[]),e.lineDashOffset=a.borderDashOffset||0;let t=r.leftForLtr(d,c),n=r.leftForLtr(r.xPlus(d,1),c-2),o=Mo(a.borderRadius);Object.values(o).some(e=>e!==0)?(e.beginPath(),e.fillStyle=i.multiKeyBackground,To(e,{x:t,y:p,w:c,h:s,radius:o}),e.fill(),e.stroke(),e.fillStyle=a.backgroundColor,e.beginPath(),To(e,{x:n,y:p+1,w:c-2,h:s-2,radius:o}),e.fill()):(e.fillStyle=i.multiKeyBackground,e.fillRect(t,p,c,s),e.strokeRect(t,p,c,s),e.fillStyle=a.backgroundColor,e.fillRect(n,p+1,c-2,s-2))}e.fillStyle=this.labelTextColors[n]}drawBody(e,t,n){let{body:r}=this,{bodySpacing:i,bodyAlign:a,displayColors:o,boxHeight:s,boxWidth:c,boxPadding:l}=n,u=Po(n.bodyFont),d=u.lineHeight,f=0,p=Ps(n.rtl,this.x,this.width),m=function(n){t.fillText(n,p.x(e.x+f),e.y+d/2),e.y+=d+i},h=p.textAlign(a),g,_,v,y,b,x,S;for(t.textAlign=a,t.textBaseline=`middle`,t.font=u.string,e.x=Qu(this,h,n),t.fillStyle=n.bodyColor,R(this.beforeBody,m),f=o&&h!==`right`?a===`center`?c/2+l:c+2+l:0,y=0,x=r.length;y<x;++y){for(g=r[y],_=this.labelTextColors[y],t.fillStyle=_,R(g.before,m),v=g.lines,o&&v.length&&(this._drawColorBox(t,e,y,p,n),d=Math.max(u.lineHeight,s)),b=0,S=v.length;b<S;++b)m(v[b]),d=u.lineHeight;R(g.after,m)}f=0,d=u.lineHeight,R(this.afterBody,m),e.y-=i}drawFooter(e,t,n){let r=this.footer,i=r.length,a,o;if(i){let s=Ps(n.rtl,this.x,this.width);for(e.x=Qu(this,n.footerAlign,n),e.y+=n.footerMarginTop,t.textAlign=s.textAlign(n.footerAlign),t.textBaseline=`middle`,a=Po(n.footerFont),t.fillStyle=n.footerColor,t.font=a.string,o=0;o<i;++o)t.fillText(r[o],s.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+n.footerSpacing}}drawBackground(e,t,n,r){let{xAlign:i,yAlign:a}=this,{x:o,y:s}=e,{width:c,height:l}=n,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=Mo(r.cornerRadius);t.fillStyle=r.backgroundColor,t.strokeStyle=r.borderColor,t.lineWidth=r.borderWidth,t.beginPath(),t.moveTo(o+u,s),a===`top`&&this.drawCaret(e,t,n,r),t.lineTo(o+c-d,s),t.quadraticCurveTo(o+c,s,o+c,s+d),a===`center`&&i===`right`&&this.drawCaret(e,t,n,r),t.lineTo(o+c,s+l-p),t.quadraticCurveTo(o+c,s+l,o+c-p,s+l),a===`bottom`&&this.drawCaret(e,t,n,r),t.lineTo(o+f,s+l),t.quadraticCurveTo(o,s+l,o,s+l-f),a===`center`&&i===`left`&&this.drawCaret(e,t,n,r),t.lineTo(o,s+u),t.quadraticCurveTo(o,s,o+u,s),t.closePath(),t.fill(),r.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){let t=this.chart,n=this.$animations,r=n&&n.x,i=n&&n.y;if(r||i){let n=Vu[e.position].call(this,this._active,this._eventPosition);if(!n)return;let a=this._size=Gu(this,e),o=Object.assign({},n,this._size),s=Ju(t,e,o),c=Zu(e,o,s,t);(r._to!==c.x||i._to!==c.y)&&(this.xAlign=s.xAlign,this.yAlign=s.yAlign,this.width=a.width,this.height=a.height,this.caretX=n.x,this.caretY=n.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(e){let t=this.options.setContext(this.getContext()),n=this.opacity;if(!n)return;this._updateAnimationTarget(t);let r={width:this.width,height:this.height},i={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;let a=No(t.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&o&&(e.save(),e.globalAlpha=n,this.drawBackground(i,e,r,t),Fs(e,t.textDirection),i.y+=a.top,this.drawTitle(i,e,t),this.drawBody(i,e,t),this.drawFooter(i,e,t),Is(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){let n=this._active,r=e.map(({datasetIndex:e,index:t})=>{let n=this.chart.getDatasetMeta(e);if(!n)throw Error(`Cannot find a dataset at index `+e);return{datasetIndex:e,element:n.data[t],index:t}}),i=!Ri(n,r),a=this._positionChanged(r,t);(i||a)&&(this._active=r,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,n=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let r=this.options,i=this._active||[],a=this._getActiveElements(e,i,t,n),o=this._positionChanged(a,e),s=t||!Ri(a,i)||o;return s&&(this._active=a,(r.enabled||r.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),s}_getActiveElements(e,t,n,r){let i=this.options;if(e.type===`mouseout`)return[];if(!r)return t.filter(e=>this.chart.data.datasets[e.datasetIndex]&&this.chart.getDatasetMeta(e.datasetIndex).controller.getParsed(e.index)!==void 0);let a=this.chart.getElementsAtEventForMode(e,i.mode,i,n);return i.reverse&&a.reverse(),a}_positionChanged(e,t){let{caretX:n,caretY:r,options:i}=this,a=Vu[i.position].call(this,e,t);return a!==!1&&(n!==a.x||r!==a.y)}},ad={id:`tooltip`,_element:id,positioners:Vu,afterInit(e,t,n){n&&(e.tooltip=new id({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){let t=e.tooltip;if(t&&t._willRender()){let n={tooltip:t};if(e.notifyPlugins(`beforeTooltipDraw`,{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins(`afterTooltipDraw`,n)}},afterEvent(e,t){if(e.tooltip){let n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:`average`,backgroundColor:`rgba(0,0,0,0.8)`,titleColor:`#fff`,titleFont:{weight:`bold`},titleSpacing:2,titleMarginBottom:6,titleAlign:`left`,bodyColor:`#fff`,bodySpacing:2,bodyFont:{},bodyAlign:`left`,footerColor:`#fff`,footerSpacing:2,footerMarginTop:6,footerFont:{weight:`bold`},footerAlign:`left`,padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:`#fff`,displayColors:!0,boxPadding:0,borderColor:`rgba(0,0,0,0)`,borderWidth:0,animation:{duration:400,easing:`easeOutQuart`},animations:{numbers:{type:`number`,properties:[`x`,`y`,`width`,`height`,`caretX`,`caretY`]},opacity:{easing:`linear`,duration:200}},callbacks:nd},defaultRoutes:{bodyFont:`font`,footerFont:`font`,titleFont:`font`},descriptors:{_scriptable:e=>e!==`filter`&&e!==`itemSort`&&e!==`external`,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:`animation`}},additionalOptionScopes:[`interaction`]},od=(e,t,n,r)=>(typeof t==`string`?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function sd(e,t,n,r){let i=e.indexOf(t);return i===-1?od(e,t,n,r):i===e.lastIndexOf(t)?i:n}var cd=(e,t)=>e===null?null:wa(Math.round(e),0,t);function ld(e){let t=this.getLabels();return e>=0&&e<t.length?t[e]:e}var ud=class extends K{static id=`category`;static defaults={ticks:{callback:ld}};constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){let t=this._addedLabels;if(t.length){let e=this.getLabels();for(let{index:n,label:r}of t)e[n]===r&&e.splice(n,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(M(e))return null;let n=this.getLabels();return t=isFinite(t)&&n[t]===e?t:sd(n,e,F(t,e),this._addedLabels),cd(t,n.length-1)}determineDataLimits(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),{min:n,max:r}=this.getMinMax(!0);this.options.bounds===`ticks`&&(e||(n=0),t||(r=this.getLabels().length-1)),this.min=n,this.max=r}buildTicks(){let e=this.min,t=this.max,n=this.options.offset,r=[],i=this.getLabels();i=e===0&&t===i.length-1?i:i.slice(e,t+1),this._valueRange=Math.max(i.length-+!n,1),this._startValue=this.min-(n?.5:0);for(let n=e;n<=t;n++)r.push({value:n});return r}getLabelForValue(e){return ld.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!=`number`&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}};function dd(e,t){let n=[],{bounds:r,step:i,min:a,max:o,precision:s,count:c,maxTicks:l,maxDigits:u,includeBounds:d}=e,f=i||1,p=l-1,{min:m,max:h}=t,g=!M(a),_=!M(o),v=!M(c),y=(h-m)/(u+1),b=ua((h-m)/p/f)*f,x,S,C,w;if(b<1e-14&&!g&&!_)return[{value:m},{value:h}];w=Math.ceil(h/b)-Math.floor(m/b),w>p&&(b=ua(w*b/p/f)*f),M(s)||(x=10**s,b=Math.ceil(b*x)/x),r===`ticks`?(S=Math.floor(m/b)*b,C=Math.ceil(h/b)*b):(S=m,C=h),g&&_&&i&&ma((o-a)/i,b/1e3)?(w=Math.round(Math.min((o-a)/b,l)),b=(o-a)/w,S=a,C=o):v?(S=g?a:S,C=_?o:C,w=c-1,b=(C-S)/w):(w=(C-S)/b,w=la(w,Math.round(w),b/1e3)?Math.round(w):Math.ceil(w));let T=Math.max(va(b),va(S));x=10**(M(s)?T:s),S=Math.round(S*x)/x,C=Math.round(C*x)/x;let E=0;for(g&&(d&&S!==a?(n.push({value:a}),S<a&&E++,la(Math.round((S+E*b)*x)/x,a,fd(a,y,e))&&E++):S<a&&E++);E<w;++E){let e=Math.round((S+E*b)*x)/x;if(_&&e>o)break;n.push({value:e})}return _&&d&&C!==o?n.length&&la(n[n.length-1].value,o,fd(o,y,e))?n[n.length-1].value=o:n.push({value:o}):(!_||C===o)&&n.push({value:C}),n}function fd(e,t,{horizontal:n,minRotation:r}){let i=ga(r),a=(n?Math.sin(i):Math.cos(i))||.001,o=.75*t*(``+e).length;return Math.min(t/a,o)}var pd=class extends K{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return M(e)||(typeof e==`number`||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){let{beginAtZero:e}=this.options,{minDefined:t,maxDefined:n}=this.getUserBounds(),{min:r,max:i}=this,a=e=>r=t?r:e,o=e=>i=n?i:e;if(e){let e=ca(r),t=ca(i);e<0&&t<0?o(0):e>0&&t>0&&a(0)}if(r===i){let t=i===0?1:Math.abs(i*.05);o(i+t),e||a(r-t)}this.min=r,this.max=i}getTickLimit(){let{maxTicksLimit:e,stepSize:t}=this.options.ticks,n;return t?(n=Math.ceil(this.max/t)-Math.floor(this.min/t)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${t} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),e||=11),e&&(n=Math.min(e,n)),n}computeTickLimit(){return 1/0}buildTicks(){let e=this.options,t=e.ticks,n=this.getTickLimit();n=Math.max(2,n);let r=dd({maxTicks:n,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},this._range||this);return e.bounds===`ticks`&&ha(r,this,`value`),e.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){let e=this.ticks,t=this.min,n=this.max;if(super.configure(),this.options.offset&&e.length){let r=(n-t)/Math.max(e.length-1,1)/2;t-=r,n+=r}this._startValue=t,this._endValue=n,this._valueRange=n-t}getLabelForValue(e){return to(e,this.chart.options.locale,this.options.ticks.format)}},md=class extends pd{static id=`linear`;static defaults={ticks:{callback:io.formatters.numeric}};determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=Li(e)?e:0,this.max=Li(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){let e=this.isHorizontal(),t=e?this.width:this.height,n=ga(this.options.ticks.minRotation),r=(e?Math.sin(n):Math.cos(n))||.001,i=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,i.lineHeight/r))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}},hd=e=>Math.floor(z(e)),gd=(e,t)=>10**(hd(e)+t);function _d(e){return e/10**hd(e)==1}function vd(e,t,n){let r=10**n,i=Math.floor(e/r);return Math.ceil(t/r)-i}function yd(e,t){let n=hd(t-e);for(;vd(e,t,n)>10;)n++;for(;vd(e,t,n)<10;)n--;return Math.min(n,hd(e))}function bd(e,{min:t,max:n}){t=P(e.min,t);let r=[],i=hd(t),a=yd(t,n),o=a<0?10**Math.abs(a):1,s=10**a,c=i>a?10**i:0,l=Math.round((t-c)*o)/o,u=Math.floor((t-c)/s/10)*s*10,d=Math.floor((l-u)/10**a),f=P(e.min,Math.round((c+u+d*10**a)*o)/o);for(;f<n;)r.push({value:f,major:_d(f),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(a++,d=2,o=a>=0?1:o),f=Math.round((c+u+d*10**a)*o)/o;let p=P(e.max,f);return r.push({value:p,major:_d(p),significand:d}),r}(class extends K{static id=`logarithmic`;static defaults={ticks:{callback:io.formatters.logarithmic,major:{enabled:!0}}};constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,t){let n=pd.prototype.parse.apply(this,[e,t]);if(n===0){this._zero=!0;return}return Li(n)&&n>0?n:null}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=Li(e)?Math.max(0,e):null,this.max=Li(t)?Math.max(0,t):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Li(this._userMin)&&(this.min=e===gd(this.min,0)?gd(this.min,-1):gd(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),n=this.min,r=this.max,i=t=>n=e?n:t,a=e=>r=t?r:e;n===r&&(n<=0?(i(1),a(10)):(i(gd(n,-1)),a(gd(r,1)))),n<=0&&i(gd(r,-1)),r<=0&&a(gd(n,1)),this.min=n,this.max=r}buildTicks(){let e=this.options,t=bd({min:this._userMin,max:this._userMax},this);return e.bounds===`ticks`&&ha(t,this,`value`),e.reverse?(t.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),t}getLabelForValue(e){return e===void 0?`0`:to(e,this.chart.options.locale,this.options.ticks.format)}configure(){let e=this.min;super.configure(),this._startValue=z(e),this._valueRange=z(this.max)-z(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(z(e)-this._startValue)/this._valueRange)}getValueForPixel(e){let t=this.getDecimalForPixel(e);return 10**(this._startValue+t*this._valueRange)}});function Z(e){let t=e.ticks;if(t.display&&e.display){let e=No(t.backdropPadding);return F(t.font&&t.font.size,B.font.size)+e.height}return 0}function xd(e,t,n){return n=Ii(n)?n:[n],{w:V(e,t.string,n),h:n.length*t.lineHeight}}function Sd(e,t,n,r,i){return e===r||e===i?{start:t-n/2,end:t+n/2}:e<r||e>i?{start:t-n,end:t}:{start:t,end:t+n}}function Cd(e){let t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],i=[],a=e._pointLabels.length,o=e.options.pointLabels,s=o.centerPointLabels?ea/a:0;for(let c=0;c<a;c++){let a=o.setContext(e.getPointLabelContext(c));i[c]=a.padding;let l=e.getPointPosition(c,e.drawingArea+i[c],s),u=Po(a.font),d=xd(e.ctx,u,e._pointLabels[c]);r[c]=d;let f=Sa(e.getIndexAngle(c)+s),p=Math.round(_a(f));wd(n,t,f,Sd(p,l.x,d.w,0,180),Sd(p,l.y,d.h,90,270))}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=Dd(e,r,i)}function wd(e,t,n,r,i){let a=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n)),s=0,c=0;r.start<t.l?(s=(t.l-r.start)/a,e.l=Math.min(e.l,t.l-s)):r.end>t.r&&(s=(r.end-t.r)/a,e.r=Math.max(e.r,t.r+s)),i.start<t.t?(c=(t.t-i.start)/o,e.t=Math.min(e.t,t.t-c)):i.end>t.b&&(c=(i.end-t.b)/o,e.b=Math.max(e.b,t.b+c))}function Td(e,t,n){let r=e.drawingArea,{extra:i,additionalAngle:a,padding:o,size:s}=n,c=e.getPointPosition(t,r+i+o,a),l=Math.round(_a(Sa(c.angle+aa))),u=Ad(c.y,s.h,l),d=Od(l),f=kd(c.x,s.w,d);return{visible:!0,x:c.x,y:u,textAlign:d,left:f,top:u,right:f+s.w,bottom:u+s.h}}function Ed(e,t){if(!t)return!0;let{left:n,top:r,right:i,bottom:a}=e;return!(go({x:n,y:r},t)||go({x:n,y:a},t)||go({x:i,y:r},t)||go({x:i,y:a},t))}function Dd(e,t,n){let r=[],i=e._pointLabels.length,a=e.options,{centerPointLabels:o,display:s}=a.pointLabels,c={extra:Z(a)/2,additionalAngle:o?ea/i:0},l;for(let a=0;a<i;a++){c.padding=n[a],c.size=t[a];let i=Td(e,a,c);r.push(i),s===`auto`&&(i.visible=Ed(i,l),i.visible&&(l=i))}return r}function Od(e){return e===0||e===180?`center`:e<180?`left`:`right`}function kd(e,t,n){return n===`right`?e-=t:n===`center`&&(e-=t/2),e}function Ad(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function jd(e,t,n){let{left:r,top:i,right:a,bottom:o}=n,{backdropColor:s}=t;if(!M(s)){let n=Mo(t.borderRadius),c=No(t.backdropPadding);e.fillStyle=s;let l=r-c.left,u=i-c.top,d=a-r+c.width,f=o-i+c.height;Object.values(n).some(e=>e!==0)?(e.beginPath(),To(e,{x:l,y:u,w:d,h:f,radius:n}),e.fill()):e.fillRect(l,u,d,f)}}function Md(e,t){let{ctx:n,options:{pointLabels:r}}=e;for(let i=t-1;i>=0;i--){let t=e._pointLabelItems[i];if(!t.visible)continue;let a=r.setContext(e.getPointLabelContext(i));jd(n,a,t);let o=Po(a.font),{x:s,y:c,textAlign:l}=t;wo(n,e._pointLabels[i],s,c+o.lineHeight/2,o,{color:a.color,textAlign:l,textBaseline:`middle`})}}function Nd(e,t,n,r){let{ctx:i}=e;if(n)i.arc(e.xCenter,e.yCenter,t,0,ta);else{let n=e.getPointPosition(0,t);i.moveTo(n.x,n.y);for(let a=1;a<r;a++)n=e.getPointPosition(a,t),i.lineTo(n.x,n.y)}}function Q(e,t,n,r,i){let a=e.ctx,o=t.circular,{color:s,lineWidth:c}=t;!o&&!r||!s||!c||n<0||(a.save(),a.strokeStyle=s,a.lineWidth=c,a.setLineDash(i.dash||[]),a.lineDashOffset=i.dashOffset,a.beginPath(),Nd(e,n,o,r),a.closePath(),a.stroke(),a.restore())}function Pd(e,t,n){return Lo(e,{label:n,index:t,type:`pointLabel`})}(class extends pd{static id=`radialLinear`;static defaults={display:!0,animate:!0,position:`chartArea`,angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:io.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":`borderColor`,"pointLabels.color":`color`,"ticks.color":`color`};static descriptors={angleLines:{_fallback:`grid`}};constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let e=this._padding=No(Z(this.options)/2),t=this.width=this.maxWidth-e.width,n=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+t/2+e.left),this.yCenter=Math.floor(this.top+n/2+e.top),this.drawingArea=Math.floor(Math.min(t,n)/2)}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!1);this.min=Li(e)&&!isNaN(e)?e:0,this.max=Li(t)&&!isNaN(t)?t:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Z(this.options))}generateTickLabels(e){pd.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((e,t)=>{let n=L(this.options.pointLabels.callback,[e,t],this);return n||n===0?n:``}).filter((e,t)=>this.chart.getDataVisibility(t))}fit(){let e=this.options;e.display&&e.pointLabels.display?Cd(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,t,n,r){this.xCenter+=Math.floor((e-t)/2),this.yCenter+=Math.floor((n-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,t,n,r))}getIndexAngle(e){let t=ta/(this._pointLabels.length||1),n=this.options.startAngle||0;return Sa(e*t+ga(n))}getDistanceFromCenterForValue(e){if(M(e))return NaN;let t=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*t:(e-this.min)*t}getValueForDistanceFromCenter(e){if(M(e))return NaN;let t=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-t:this.min+t}getPointLabelContext(e){let t=this._pointLabels||[];if(e>=0&&e<t.length){let n=t[e];return Pd(this.getContext(),e,n)}}getPointPosition(e,t,n=0){let r=this.getIndexAngle(e)-aa+n;return{x:Math.cos(r)*t+this.xCenter,y:Math.sin(r)*t+this.yCenter,angle:r}}getPointPositionForValue(e,t){return this.getPointPosition(e,this.getDistanceFromCenterForValue(t))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){let{left:t,top:n,right:r,bottom:i}=this._pointLabelItems[e];return{left:t,top:n,right:r,bottom:i}}drawBackground(){let{backgroundColor:e,grid:{circular:t}}=this.options;if(e){let n=this.ctx;n.save(),n.beginPath(),Nd(this,this.getDistanceFromCenterForValue(this._endValue),t,this._pointLabels.length),n.closePath(),n.fillStyle=e,n.fill(),n.restore()}}drawGrid(){let e=this.ctx,t=this.options,{angleLines:n,grid:r,border:i}=t,a=this._pointLabels.length,o,s,c;if(t.pointLabels.display&&Md(this,a),r.display&&this.ticks.forEach((e,t)=>{if(t!==0||t===0&&this.min<0){s=this.getDistanceFromCenterForValue(e.value);let n=this.getContext(t),o=r.setContext(n),c=i.setContext(n);Q(this,o,s,a,c)}}),n.display){for(e.save(),o=a-1;o>=0;o--){let r=n.setContext(this.getPointLabelContext(o)),{color:i,lineWidth:a}=r;!a||!i||(e.lineWidth=a,e.strokeStyle=i,e.setLineDash(r.borderDash),e.lineDashOffset=r.borderDashOffset,s=this.getDistanceFromCenterForValue(t.reverse?this.min:this.max),c=this.getPointPosition(o,s),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(c.x,c.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){let e=this.ctx,t=this.options,n=t.ticks;if(!n.display)return;let r=this.getIndexAngle(0),i,a;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(r),e.textAlign=`center`,e.textBaseline=`middle`,this.ticks.forEach((r,o)=>{if(o===0&&this.min>=0&&!t.reverse)return;let s=n.setContext(this.getContext(o)),c=Po(s.font);if(i=this.getDistanceFromCenterForValue(this.ticks[o].value),s.showLabelBackdrop){e.font=c.string,a=e.measureText(r.label).width,e.fillStyle=s.backdropColor;let t=No(s.backdropPadding);e.fillRect(-a/2-t.left,-i-c.size/2-t.top,a+t.width,c.size+t.height)}wo(e,r.label,0,-i,c,{color:s.color,strokeColor:s.textStrokeColor,strokeWidth:s.textStrokeWidth})}),e.restore()}drawTitle(){}});var Fd={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Id=Object.keys(Fd);function Ld(e,t){return e-t}function Rd(e,t){if(M(t))return null;let n=e._adapter,{parser:r,round:i,isoWeekday:a}=e._parseOpts,o=t;return typeof r==`function`&&(o=r(o)),Li(o)||(o=typeof r==`string`?n.parse(o,r):n.parse(o)),o===null?null:(i&&(o=i===`week`&&(pa(a)||a===!0)?n.startOf(o,`isoWeek`,a):n.startOf(o,i)),+o)}function zd(e,t,n,r){let i=Id.length;for(let a=Id.indexOf(e);a<i-1;++a){let e=Fd[Id[a]],i=e.steps?e.steps:2**53-1;if(e.common&&Math.ceil((n-t)/(i*e.size))<=r)return Id[a]}return Id[i-1]}function Bd(e,t,n,r,i){for(let a=Id.length-1;a>=Id.indexOf(n);a--){let n=Id[a];if(Fd[n].common&&e._adapter.diff(i,r,n)>=t-1)return n}return Id[n?Id.indexOf(n):0]}function Vd(e){for(let t=Id.indexOf(e)+1,n=Id.length;t<n;++t)if(Fd[Id[t]].common)return Id[t]}function Hd(e,t,n){if(!n)e[t]=!0;else if(n.length){let{lo:r,hi:i}=Da(n,t),a=n[r]>=t?n[r]:n[i];e[a]=!0}}function Ud(e,t,n,r){let i=e._adapter,a=+i.startOf(t[0].value,r),o=t[t.length-1].value,s,c;for(s=a;s<=o;s=+i.add(s,1,r))c=n[s],c>=0&&(t[c].major=!0);return t}function Wd(e,t,n){let r=[],i={},a=t.length,o,s;for(o=0;o<a;++o)s=t[o],i[s]=o,r.push({value:s,major:!1});return a===0||!n?r:Ud(e,r,i,n)}var Gd=class extends K{static id=`time`;static defaults={bounds:`data`,adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:`millisecond`,displayFormats:{}},ticks:{source:`auto`,callback:!1,major:{enabled:!1}}};constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit=`day`,this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){let n=e.time||={},r=this._adapter=new Dc._date(e.adapters.date);r.init(t),Ui(n.displayFormats,r.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:Rd(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let e=this.options,t=this._adapter,n=e.time.unit||`day`,{min:r,max:i,minDefined:a,maxDefined:o}=this.getUserBounds();function s(e){!a&&!isNaN(e.min)&&(r=Math.min(r,e.min)),!o&&!isNaN(e.max)&&(i=Math.max(i,e.max))}(!a||!o)&&(s(this._getLabelBounds()),(e.bounds!==`ticks`||e.ticks.source!==`labels`)&&s(this.getMinMax(!1))),r=Li(r)&&!isNaN(r)?r:+t.startOf(Date.now(),n),i=Li(i)&&!isNaN(i)?i:+t.endOf(Date.now(),n)+1,this.min=Math.min(r,i-1),this.max=Math.max(r+1,i)}_getLabelBounds(){let e=this.getLabelTimestamps(),t=1/0,n=-1/0;return e.length&&(t=e[0],n=e[e.length-1]),{min:t,max:n}}buildTicks(){let e=this.options,t=e.time,n=e.ticks,r=n.source===`labels`?this.getLabelTimestamps():this._generate();e.bounds===`ticks`&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);let i=this.min,a=this.max,o=Aa(r,i,a);return this._unit=t.unit||(n.autoSkip?zd(t.minUnit,this.min,this.max,this._getLabelCapacity(i)):Bd(this,o.length,t.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit===`year`?void 0:Vd(this._unit),this.initOffsets(r),e.reverse&&o.reverse(),Wd(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,n=0,r,i;this.options.offset&&e.length&&(r=this.getDecimalForValue(e[0]),t=e.length===1?1-r:(this.getDecimalForValue(e[1])-r)/2,i=this.getDecimalForValue(e[e.length-1]),n=e.length===1?i:(i-this.getDecimalForValue(e[e.length-2]))/2);let a=e.length<3?.5:.25;t=wa(t,0,a),n=wa(n,0,a),this._offsets={start:t,end:n,factor:1/(t+1+n)}}_generate(){let e=this._adapter,t=this.min,n=this.max,r=this.options,i=r.time,a=i.unit||zd(i.minUnit,t,n,this._getLabelCapacity(t)),o=F(r.ticks.stepSize,1),s=a===`week`&&i.isoWeekday,c=pa(s)||s===!0,l={},u=t,d,f;if(c&&(u=+e.startOf(u,`isoWeek`,s)),u=+e.startOf(u,c?`day`:a),e.diff(n,t,a)>1e5*o)throw Error(t+` and `+n+` are too far apart with stepSize of `+o+` `+a);let p=r.ticks.source===`data`&&this.getDataTimestamps();for(d=u,f=0;d<n;d=+e.add(d,o,a),f++)Hd(l,d,p);return(d===n||r.bounds===`ticks`||f===1)&&Hd(l,d,p),Object.keys(l).sort(Ld).map(e=>+e)}getLabelForValue(e){let t=this._adapter,n=this.options.time;return n.tooltipFormat?t.format(e,n.tooltipFormat):t.format(e,n.displayFormats.datetime)}format(e,t){let n=this.options.time.displayFormats,r=this._unit,i=t||n[r];return this._adapter.format(e,i)}_tickFormatFunction(e,t,n,r){let i=this.options,a=i.ticks.callback;if(a)return L(a,[e,t,n],this);let o=i.time.displayFormats,s=this._unit,c=this._majorUnit,l=s&&o[s],u=c&&o[c],d=n[t],f=c&&u&&d&&d.major;return this._adapter.format(e,r||(f?u:l))}generateTickLabels(e){let t,n,r;for(t=0,n=e.length;t<n;++t)r=e[t],r.label=this._tickFormatFunction(r.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){let t=this._offsets,n=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+n)*t.factor)}getValueForPixel(e){let t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+n*(this.max-this.min)}_getLabelSize(e){let t=this.options.ticks,n=this.ctx.measureText(e).width,r=ga(this.isHorizontal()?t.maxRotation:t.minRotation),i=Math.cos(r),a=Math.sin(r),o=this._resolveTickFontOptions(0).size;return{w:n*i+o*a,h:n*a+o*i}}_getLabelCapacity(e){let t=this.options.time,n=t.displayFormats,r=n[t.unit]||n.millisecond,i=this._tickFormatFunction(e,0,Wd(this,[e],this._majorUnit),r),a=this._getLabelSize(i),o=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return o>0?o:1}getDataTimestamps(){let e=this._cache.data||[],t,n;if(e.length)return e;let r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(t=0,n=r.length;t<n;++t)e=e.concat(r[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){let e=this._cache.labels||[],t,n;if(e.length)return e;let r=this.getLabels();for(t=0,n=r.length;t<n;++t)e.push(Rd(this,r[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Pa(e.sort(Ld))}};function Kd(e,t,n){let r=0,i=e.length-1,a,o,s,c;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=Oa(e,`pos`,t)),{pos:a,time:s}=e[r],{pos:o,time:c}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=Oa(e,`time`,t)),{time:a,pos:s}=e[r],{time:o,pos:c}=e[i]);let l=o-a;return l?s+(c-s)*(t-a)/l:s}(class extends Gd{static id=`timeseries`;static defaults=Gd.defaults;constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=Kd(t,this.min),this._tableRange=Kd(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){let{min:t,max:n}=this,r=[],i=[],a,o,s,c,l;for(a=0,o=e.length;a<o;++a)c=e[a],c>=t&&c<=n&&r.push(c);if(r.length<2)return[{time:t,pos:0},{time:n,pos:1}];for(a=0,o=r.length;a<o;++a)l=r[a+1],s=r[a-1],c=r[a],Math.round((l+s)/2)!==c&&i.push({time:c,pos:a/(o-1)});return i}_generate(){let e=this.min,t=this.max,n=super.getDataTimestamps();return(!n.includes(e)||!n.length)&&n.splice(0,0,e),(!n.includes(t)||n.length===1)&&n.push(t),n.sort((e,t)=>e-t)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;let t=this.getDataTimestamps(),n=this.getLabelTimestamps();return e=t.length&&n.length?this.normalize(t.concat(n)):t.length?t:n,e=this._cache.all=e,e}getDecimalForValue(e){return(Kd(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){let t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return Kd(this._table,n*this._tableRange+this._minPos,!0)}});var qd=A.section`
  width: 100%;
  max-width: 1150px;
  margin: 10px auto 0;
  padding: 22px 30px 30px;
  box-sizing: border-box;
  border-radius: 18px;
  background: #e9e9e9;
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
`,Jd=A.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  @media (max-width: 450px) {
    margin-bottom: 8px;
  }
`,Yd=A.h2`
  margin: 0;
  color: #111111;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 18px;
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }
`,Xd=A.p`
  margin: 5px 0 0;
  color: #666666;
  font-size: 12px;
  font-weight: 400;

  @media (max-width: 450px) {
    margin-top: 4px;
    font-size: 11px;
  }
`,Zd=A.button`
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
  color: #111111;
  cursor: pointer;
  box-sizing: border-box;
  transition:
    background 0.2s ease,
    transform 0.2s ease;

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
    transform: translate(-50%, -53%);
    transition: transform 0.2s ease;
  }

  &:hover {
    background: rgba(255, 179, 108, 0.35);
  }

  &:hover span {
    transform:
      translate(-50%, -53%)
      scale(1.1);
  }

  &:active span {
    transform:
      translate(-50%, -53%)
      scale(0.9);
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
`,Qd=A.div`
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
`,$d=A.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
  font-size: 13px;

  @media (max-width: 450px) {
    font-size: 12px;
  }
`,ef=A.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
  font-size: 13px;
  text-align: center;

  @media (max-width: 450px) {
    padding: 0 15px;
    font-size: 12px;
  }
`;wu.register(Tc,Ru,Bu,md,ud,ad);var tf=`b5ad39bd417cd476cc1c17d9b2b53496`;function nf({city:e,unit:t=`C`,onClose:n}){let r=(0,_.useRef)(null),i=(0,_.useRef)(null),[a,o]=(0,_.useState)([]),[s,c]=(0,_.useState)(!0),[l,u]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{(async()=>{try{c(!0),u(!1);let t=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e.latitude}&lon=${e.longitude}&appid=${tf}&units=metric`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json();if(!n.list||!Array.isArray(n.list))throw Error(`Forecast data is unavailable`);o(n.list.slice(0,16))}catch(e){console.error(`Ошибка загрузки почасового прогноза:`,e),u(!0)}finally{c(!1)}})()},[e]),(0,_.useEffect)(()=>{if(s||l||a.length===0||!r.current)return;i.current&&=(i.current.destroy(),null);let e=a.map(e=>new Date(e.dt*1e3).toLocaleTimeString(`en-US`,{hour:`numeric`,hour12:!0})),n=a.map(e=>{let n=e.main.temp;return Math.round(t===`F`?n*9/5+32:n)}),o=r.current.getContext(`2d`);return i.current=new wu(o,{type:`line`,data:{labels:e,datasets:[{data:n,borderColor:`#ffb36c`,borderWidth:2,backgroundColor:`rgba(255, 179, 108, 0.08)`,pointBackgroundColor:`#ffb36c`,pointBorderColor:`#ffb36c`,pointRadius:3,pointHoverRadius:5,tension:.4,fill:!0}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:700,easing:`easeOutQuart`},interaction:{intersect:!1,mode:`index`},plugins:{legend:{display:!1},tooltip:{enabled:!0,displayColors:!1,backgroundColor:`#111111`,titleColor:`#ffffff`,bodyColor:`#ffffff`,padding:10,cornerRadius:8,callbacks:{title:e=>e[0]?.label||``,label:e=>`${e.raw}°${t}`}}},scales:{x:{grid:{display:!1},border:{display:!1},ticks:{color:`#111111`,font:{size:9},maxRotation:0,autoSkip:!1}},y:{grid:{color:`rgba(17, 17, 17, 0.08)`},border:{display:!1},ticks:{color:`#111111`,font:{size:9},callback:e=>`${e}°${t}`}}}}}),()=>{i.current&&=(i.current.destroy(),null)}},[a,s,l,t]),(0,j.jsxs)(qd,{children:[(0,j.jsxs)(Jd,{children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(Yd,{children:`Hourly forecast`}),(0,j.jsx)(Xd,{children:e.name})]}),(0,j.jsx)(Zd,{type:`button`,onClick:n,"aria-label":`Close hourly forecast`,children:(0,j.jsx)(`span`,{children:`×`})})]}),(0,j.jsxs)(Qd,{children:[s&&(0,j.jsx)($d,{children:`Loading...`}),l&&!s&&(0,j.jsx)(ef,{children:`Failed to load forecast.`}),!s&&!l&&a.length>0&&(0,j.jsx)(`canvas`,{ref:r})]})]})}var rf=A.section`
  width: 100%;
  max-width: 1200px;
  margin: 15px auto 0;
  padding: 27px 35px 35px;
  box-sizing: border-box;
  border-radius: 20px;
  background: #e9e9e9;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  animation: weeklyIn 0.45s cubic-bezier(0.22, 1, 0.36, 1);
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
`,af=A.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  @media (max-width: 550px) {
    margin-bottom: 14px;
  }
`,of=A.h2`
  margin: 0;
  color: #111111;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  @media (max-width: 550px) {
    font-size: 15px;
  }
`,sf=A.p`
  margin: 6px 0 0;
  color: #666666;
  font-size: 13px;
  font-weight: 400;
  @media (max-width: 550px) {
    margin-top: 4px;
    font-size: 12px;
  }
`,cf=A.button`
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
  color: #111111;
  cursor: pointer;
  box-sizing: border-box;
  transition: background 0.2s ease, transform 0.2s ease;
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
    background: rgba(255, 179, 108, 0.35);
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
`,lf=A.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 9px;
  @media (max-width: 550px) {
    gap: 7px;
  }
`,uf=A.div`
  width: 100%;
  min-height: 43px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 240px minmax(0, 1fr);
  align-items: center;
  padding: 0 42px;
  box-sizing: border-box;
  border-radius: 10px;
  background: #dcdcdc;
  color: #111111;
  transition: background 0.2s ease, transform 0.2s ease;
  &:hover {
    background: #d6d6d6;
    transform: translateX(2px);
  }
  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr) 190px minmax(0, 1fr);
    min-height: 46px;
    padding: 0 20px;
  }
  @media (max-width: 650px) {
    grid-template-columns: minmax(0, 1fr) 150px minmax(0, 1fr);
    padding: 0 15px;
  }
  @media (max-width: 550px) {
    grid-template-columns: minmax(0, 1fr) auto;
    min-height: 54px;
    padding: 0 12px;
    border-radius: 8px;
  }
`,df=A.div`
  min-width: 0;
  color: #111111;
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
`,ff=A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  @media (max-width: 550px) {
    gap: 5px;
  }
`,pf=A.img`
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
`,mf=A.span`
  color: #111111;
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
`,hf=A.div`
  min-width: 0;
  color: #111111;
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
`,gf=A.div`
  width: 100%;
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
  font-size: 14px;
  @media (max-width: 550px) {
    min-height: 220px;
    font-size: 13px;
  }
`,_f=A.div`
  width: 100%;
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
  font-size: 14px;
  text-align: center;
  @media (max-width: 550px) {
    min-height: 220px;
    padding: 0 20px;
    font-size: 13px;
  }
`,vf=`b5ad39bd417cd476cc1c17d9b2b53496`;function yf({city:e,unit:t=`C`,onClose:n}){let[r,i]=(0,_.useState)([]),[a,o]=(0,_.useState)(!0),[s,c]=(0,_.useState)(!1);(0,_.useEffect)(()=>{(async()=>{try{o(!0),c(!1);let t=await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${e.latitude}&lon=${e.longitude}&exclude=current,minutely,hourly,alerts&appid=${vf}&units=metric`);if(t.ok){let e=await t.json();if(Array.isArray(e.daily)&&e.daily.length>0){let t=e.daily.slice(0,8).map(e=>({date:new Date(e.dt*1e3),icon:e.weather?.[0]?.icon,description:e.weather?.[0]?.description||``,maxTemp:e.temp.max,minTemp:e.temp.min}));i(t);return}}let n=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e.latitude}&lon=${e.longitude}&appid=${vf}&units=metric`);if(!n.ok)throw Error(`HTTP error: ${n.status}`);let r=await n.json();if(!Array.isArray(r.list)||r.list.length===0)throw Error(`Forecast data is unavailable`);let a={};r.list.forEach(e=>{let t=new Date(e.dt*1e3).toLocaleDateString(`en-CA`);a[t]||(a[t]=[]),a[t].push(e)});let s=Object.values(a).slice(0,5).map(e=>{let t=e.map(e=>e.main.temp),n=e[Math.floor(e.length/2)];return{date:new Date(n.dt*1e3),icon:n.weather?.[0]?.icon,description:n.weather?.[0]?.description||``,maxTemp:Math.max(...t),minTemp:Math.min(...t)}});i(s)}catch(e){console.error(`Ошибка загрузки недельного прогноза:`,e),c(!0)}finally{o(!1)}})()},[e]);let l=e=>Math.round(t===`F`?e*9/5+32:e),u=e=>e.toLocaleDateString(`en-US`,{weekday:`long`,month:`long`,day:`numeric`});return(0,j.jsxs)(rf,{children:[(0,j.jsxs)(af,{children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(of,{children:`5-day forecast`}),(0,j.jsx)(sf,{children:e.name})]}),(0,j.jsx)(cf,{type:`button`,onClick:n,"aria-label":`Close weekly forecast`,children:(0,j.jsx)(`span`,{children:`×`})})]}),a&&(0,j.jsx)(gf,{children:`Loading...`}),s&&!a&&(0,j.jsx)(_f,{children:`Failed to load forecast.`}),!a&&!s&&r.length>0&&(0,j.jsx)(lf,{children:r.map((e,n)=>(0,j.jsxs)(uf,{children:[(0,j.jsx)(df,{children:u(e.date)}),(0,j.jsxs)(ff,{children:[(0,j.jsx)(pf,{src:`https://openweathermap.org/img/wn/${e.icon}@2x.png`,alt:e.description}),(0,j.jsxs)(mf,{children:[l(e.maxTemp),`° /`,l(e.minTemp),`°`,t]})]}),(0,j.jsx)(hf,{children:e.description})]},`${e.date.getTime()}-${n}`))})]})}var bf=`/project-forecast/assets/ice-BVuotkio.png`,xf=`/project-forecast/assets/hot-shw1z_Oz.png`,Sf=`/project-forecast/assets/ideal-DsCCYThy.png`,Cf=A.section`
  position: relative;
  width: 100%;
  max-width: 668px;
  margin: 35px auto 0;
  padding: 24px 45px;
  box-sizing: border-box;
  border-radius: 10px;
  background: #e9e9e9;
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
`,wf=A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`,Tf=A.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #111;

  @media screen and (max-width: 560px) {
    font-size: 16px;
  }
`,Ef=A.p`
  margin: 4px 0 0;
  font-size: 13px;
  color: #555;

  @media screen and (max-width: 560px) {
    font-size: 12px;
  }
`,Df=A.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: #111;
  cursor: pointer;
  font-size: 22px;
  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #d5d5d5;
    transform: rotate(90deg);
  }

  @media screen and (max-width: 560px) {
    width: 28px;
    height: 28px;
    font-size: 19px;
  }
`,Of=A.div`
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
`,kf=A.div`
  width: 170px;
  height: 127px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 12px;
  box-sizing: border-box;
  border-radius: 6px;
  background: rgb(217, 217, 217);

  @media screen and (max-width: 700px) {
    width: 100%;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    max-width: 240px;
    height: 115px;
    margin: 0 auto;
  }
`,Af=A.span`
  font-size: 11px;
  line-height: 1;
  color: #111;
  margin-bottom: 7px;

  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`,jf=A.span`
  font-size: 19px;
  line-height: 1;
  color: #111;

  @media screen and (max-width: 450px) {
    font-size: 17px;
  }
`,Mf=A.div`
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
`,Nf=A.div`
  min-height: 276px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;

  @media screen and (max-width: 560px) {
    min-height: 220px;
  }
`,Pf=A.div`
  min-height: 276px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;

  @media screen and (max-width: 560px) {
    min-height: 220px;
    text-align: center;
  }
`,Ff=`b5ad39bd417cd476cc1c17d9b2b53496`;function If({city:e,unit:t=`C`,onClose:n}){let[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(!0),[s,c]=(0,_.useState)(!1);(0,_.useEffect)(()=>{(async()=>{try{o(!0),c(!1);let t=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e.latitude}&lon=${e.longitude}&appid=${Ff}&units=metric`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json(),r=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e.latitude}&lon=${e.longitude}&appid=${Ff}&units=metric`);if(!r.ok)throw Error(`HTTP error: ${r.status}`);let a=await r.json(),s=new Date,l=a.list.filter(e=>{let t=new Date(e.dt*1e3);return t.getDate()===s.getDate()&&t.getMonth()===s.getMonth()&&t.getFullYear()===s.getFullYear()}).map(e=>e.main.temp),u=l.length>0?Math.min(...l):n.main.temp_min,d=l.length>0?Math.max(...l):n.main.temp_max;i({feelsLike:n.main.feels_like,minTemp:u,maxTemp:d,humidity:n.main.humidity,pressure:n.main.pressure,windSpeed:n.wind.speed,visibility:n.visibility})}catch(e){console.error(`Ошибка загрузки подробной информации:`,e),c(!0)}finally{o(!1)}})()},[e]);let l=e=>t===`F`?e*9/5+32:e;return(0,j.jsxs)(Cf,{children:[(0,j.jsxs)(wf,{children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(Tf,{children:`Weather details`}),(0,j.jsx)(Ef,{children:e.name})]}),(0,j.jsx)(Df,{type:`button`,onClick:n,"aria-label":`Close weather details`,children:(0,j.jsx)(xr.FiX,{})})]}),a&&(0,j.jsx)(Nf,{children:`Loading...`}),s&&!a&&(0,j.jsx)(Pf,{children:`Failed to load weather details.`}),r&&!a&&!s&&(0,j.jsxs)(Of,{children:[(0,j.jsxs)(kf,{children:[(0,j.jsx)(Af,{children:`Feels like`}),(0,j.jsxs)(jf,{children:[l(r.feelsLike).toFixed(1),`°`,t]}),(0,j.jsx)(Mf,{children:(0,j.jsx)(`img`,{src:(e=>e<16?bf:e<=19?Sf:xf)(r.feelsLike),alt:`Temperature`})})]}),(0,j.jsxs)(kf,{children:[(0,j.jsxs)(Af,{children:[`Min °`,t]}),(0,j.jsxs)(jf,{children:[l(r.minTemp).toFixed(1),`°`,t]}),(0,j.jsxs)(Af,{children:[`Max °`,t]}),(0,j.jsxs)(jf,{children:[l(r.maxTemp).toFixed(1),`°`,t]})]}),(0,j.jsxs)(kf,{children:[(0,j.jsx)(Af,{children:`Humidity`}),(0,j.jsxs)(jf,{children:[r.humidity,`%`]}),(0,j.jsx)(Mf,{children:(0,j.jsx)(`img`,{src:`/project-forecast/assets/humidity-CUjCCt5g.png`,alt:`Humidity`})})]}),(0,j.jsxs)(kf,{children:[(0,j.jsx)(Af,{children:`Pressure`}),(0,j.jsxs)(jf,{children:[r.pressure,` hPa`]}),(0,j.jsx)(Mf,{children:(0,j.jsx)(`img`,{src:`/project-forecast/assets/pressure-DNGAfX5a.png`,alt:`Pressure`})})]}),(0,j.jsxs)(kf,{children:[(0,j.jsx)(Af,{children:`Wind speed`}),(0,j.jsxs)(jf,{children:[r.windSpeed.toFixed(2),` `,`m/s`]}),(0,j.jsx)(Mf,{children:(0,j.jsx)(`img`,{src:`/project-forecast/assets/wind-CthuVuVu.png`,alt:`Wind speed`})})]}),(0,j.jsxs)(kf,{children:[(0,j.jsx)(Af,{children:`Visibility`}),(0,j.jsx)(jf,{children:r.visibility>=1e4?`Unlimited`:`${(r.visibility/1e3).toFixed(1)} km`}),(0,j.jsx)(Mf,{children:(0,j.jsx)(`img`,{src:`/project-forecast/assets/visibility-CQs0Kbtj.png`,alt:`Visibility`})})]})]})]})}var Lf=A.div`
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
`,Rf=A.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  line-height: 1;
`,zf=A.span`
  color: #111111;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.3px;
`;function Bf({description:e=``}){let t=e.toLowerCase(),n=`☀️`,r=`Clear`;return t.includes(`thunderstorm`)||t.includes(`storm`)?(n=`⛈️`,r=`Storm`):t.includes(`snow`)?(n=`❄️`,r=`Snow`):t.includes(`rain`)||t.includes(`drizzle`)?(n=`🌧️`,r=`Rain`):t.includes(`fog`)||t.includes(`mist`)||t.includes(`haze`)?(n=`🌫️`,r=`Fog`):t.includes(`cloud`)&&(n=`☁️`,r=`Cloudy`),(0,j.jsxs)(Lf,{children:[(0,j.jsx)(Rf,{children:n}),(0,j.jsx)(zf,{children:r})]})}var Vf=`/project-forecast/assets/clear-B12KMxvD.gif`,Hf=`/project-forecast/assets/clouds-DKF1LhHM.gif`,Uf=`/project-forecast/assets/rain-CwG3OlJy.gif`,Wf=`/project-forecast/assets/snow-CxU5hFbN.gif`,Gf=`/project-forecast/assets/storm-CDiFKZbq.gif`,Kf=`/project-forecast/assets/fog-DDjGpEi4.gif`,qf=A.section`
  width: 100%;
  padding: 30px 0 50px;
  background: #ffffff;
  box-sizing: border-box;

  @media screen and (min-width: 564px) {
    padding: 40px 0 55px;
  }

  @media screen and (min-width: 1160px) {
    padding: 45px 0 60px;
  }
`,Jf=A.div`
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
`,Yf=A.article`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 340px;
  min-height: 455px;
  padding: 14px 22px 18px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  border-radius: 18px;
  background: #e9e9e9;

  @media screen and (min-width: 564px) {
    max-width: 330px;
    min-height: 455px;
    padding: 15px 24px 18px;
  }

  @media screen and (min-width: 1160px) {
    width: 375px;
    max-width: 375px;
    height: 500px;
    min-height: 500px;
    padding: 16px 30px 20px;
  }
`,Xf=A.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  z-index: 0;
`,Zf=A.div`
  position: absolute;
  inset: 0;

  background: rgba(0, 0, 0, 0.35);

  z-index: 1;
`,Qf=A.div`
  position: relative;
  z-index: 2;

  width: 100%;
`,$f=A.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ep=A.span`
  color: #111111;
  font-size: 14px;
  font-weight: 400;
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
`,tp=A.span`
  color: #111111;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-align: right;

  @media screen and (min-width: 564px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1160px) {
    font-size: 16px;
  }
`,np=A.div`
  margin-top: 20px;
  color: #111111;
  font-size: 25px;
  font-weight: 400;
  line-height: 1;

  @media screen and (min-width: 564px) {
    margin-top: 22px;
    font-size: 27px;
  }

  @media screen and (min-width: 1160px) {
    margin-top: 24px;
    font-size: 28px;
  }
`,rp=A.div`
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
`,ip=A.button`
  width: 125px;
  height: 32px;

  padding: 0;
  border: none;
  border-radius: 10px;

  background: #ffb36c;
  color: #111111;

  font-size: 10px;
  font-weight: 400;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ffa451;
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
`,ap=A.div`
  margin-top: 17px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 9px;

  color: #111111;
  font-size: 12px;
  font-weight: 400;
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
`,op=A.span`
  width: 1px;
  height: 16px;
  background: #111111;

  @media screen and (min-width: 1160px) {
    height: 18px;
  }
`,sp=A.img`
  width: 110px;
  height: 110px;

  margin-top: 12px;

  object-fit: contain;

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
`,cp=A.div`
  margin-top: 2px;

  color: #111111;
  font-size: 32px;
  font-weight: 400;
  line-height: 1;

  @media screen and (min-width: 564px) {
    font-size: 34px;
  }

  @media screen and (min-width: 1160px) {
    margin-top: 3px;
    font-size: 36px;
  }
`,lp=A.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,up=A.button`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  border: none;

  background: transparent;
  color: #111111;

  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
    stroke-width: 2;
  }

  &:hover {
    transform: rotate(180deg);
  }

  @media screen and (min-width: 1160px) {
    width: 34px;
    height: 34px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`,dp=A.button`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  border: none;

  background: transparent;
  color: #ff4141;

  cursor: pointer;

  svg {
    width: 28px;
    height: 28px;
    stroke-width: 1.8;

    fill: ${e=>e.$active?`#ff4141`:`transparent`};
  }

  @media screen and (min-width: 1160px) {
    width: 34px;
    height: 34px;

    svg {
      width: 31px;
      height: 31px;
    }
  }
`,fp=A.button`
  min-width: 42px;
  height: 32px;

  padding: 0 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;

  border: none;
  border-radius: 10px;

  background: #111111;
  color: #ffffff;

  font-size: 11px;
  font-weight: 500;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #333333;
  }

  &:active {
    transform: scale(0.95);
  }

  @media screen and (min-width: 1160px) {
    min-width: 45px;
    height: 34px;
    font-size: 12px;
  }
`,pp=A.button`
  width: 105px;
  height: 31px;

  padding: 0;
  border: none;
  border-radius: 10px;

  background: #ffb36c;
  color: #111111;

  font-size: 11px;
  font-weight: 400;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ffa451;
  }

  &:active {
    transform: scale(0.97);
  }

  @media screen and (min-width: 1160px) {
    width: 116px;
    height: 33px;
    font-size: 12px;
  }
`,mp=A.button`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  border: none;

  background: transparent;
  color: #111111;

  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
    stroke-width: 2;
  }

  &:hover {
    color: #ff4141;
  }

  @media screen and (min-width: 1160px) {
    width: 34px;
    height: 34px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;function hp({cities:e,favorites:t,onRefresh:n,onFavorite:r,onDelete:i}){let[a,o]=(0,_.useState)(new Date),[s,c]=(0,_.useState)(null),[l,u]=(0,_.useState)(null),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)({});(0,_.useEffect)(()=>{let e=setInterval(()=>{o(new Date)},1e3);return()=>clearInterval(e)},[]);let h=(e=``)=>{let t=e.toLowerCase();return t.includes(`thunderstorm`)?Gf:t.includes(`snow`)||t.includes(`sleet`)?Wf:t.includes(`rain`)||t.includes(`drizzle`)?Uf:t.includes(`mist`)||t.includes(`fog`)||t.includes(`haze`)?Kf:t.includes(`cloud`)||t.includes(`overcast`)?Hf:Vf},g=e=>{let t=a.getTime()+a.getTimezoneOffset()*6e4;return new Date(t+e*1e3)},v=e=>e.toLocaleTimeString(`en-GB`,{hour:`2-digit`,minute:`2-digit`,hour12:!1}),y=e=>`${String(e.getDate()).padStart(2,`0`)}.${String(e.getMonth()+1).padStart(2,`0`)}.${e.getFullYear()}`,b=e=>e.toLocaleDateString(`en-US`,{weekday:`long`}),x=e=>{m(t=>({...t,[e]:t[e]===`F`?`C`:`F`}))},S=e=>p[e]||`C`,C=(e,t)=>Math.round(t===`F`?e*9/5+32:e);return e.length===0?null:(0,j.jsxs)(qf,{children:[(0,j.jsx)(Jf,{children:e.map(e=>{let a=g(e.timezone),o=S(e.id),s=t.some(t=>t.id===e.id),l=h(e.description);return(0,j.jsxs)(Yf,{children:[(0,j.jsx)(Xf,{src:l,alt:``}),(0,j.jsx)(Zf,{}),(0,j.jsxs)(Qf,{children:[(0,j.jsxs)($f,{children:[(0,j.jsx)(ep,{children:e.name}),(0,j.jsx)(tp,{children:e.country})]}),(0,j.jsx)(np,{children:v(a)}),(0,j.jsxs)(rp,{children:[(0,j.jsx)(ip,{type:`button`,onClick:()=>{c(e),u(null),f(null)},children:`Hourly forecast`}),(0,j.jsx)(ip,{type:`button`,onClick:()=>{u(e),c(null),f(null)},children:`Weekly forecast`})]}),(0,j.jsxs)(ap,{children:[(0,j.jsx)(`span`,{children:y(a)}),(0,j.jsx)(op,{}),(0,j.jsx)(`span`,{children:b(a)})]}),(0,j.jsx)(sp,{src:`https://openweathermap.org/img/wn/${e.icon}@2x.png`,alt:e.description}),(0,j.jsxs)(cp,{children:[C(e.temperature,o),`°`,o]}),(0,j.jsx)(Bf,{description:e.description}),(0,j.jsxs)(lp,{children:[(0,j.jsx)(up,{type:`button`,onClick:()=>n(e),children:(0,j.jsx)(xr.FiRefreshCw,{})}),(0,j.jsx)(dp,{type:`button`,$active:s,onClick:()=>r(e.id),children:(0,j.jsx)(xr.FiHeart,{})}),(0,j.jsxs)(fp,{type:`button`,onClick:()=>x(e.id),title:`Change temperature unit`,children:[`°`,o]}),(0,j.jsx)(pp,{type:`button`,onClick:()=>{f(d?.id===e.id?null:e),c(null),u(null)},children:`See more`}),(0,j.jsx)(mp,{type:`button`,onClick:()=>i(e.id),children:(0,j.jsx)(xr.FiTrash2,{})})]})]})]},e.id)})}),s&&(0,j.jsx)(nf,{city:s,unit:S(s.id),onClose:()=>c(null)}),l&&(0,j.jsx)(yf,{city:l,unit:S(l.id),onClose:()=>u(null)}),d&&(0,j.jsx)(If,{city:d,unit:S(d.id),onClose:()=>f(null)})]})}var gp=A.section`
  width: 100%;
  padding: 50px 52px;
  box-sizing: border-box;
  overflow: hidden;
  background: #ffffff;

  @media (max-width: 900px) {
    padding: 40px 30px;
  }

  @media (max-width: 600px) {
    padding: 30px 15px;
  }

  @media (max-width: 380px) {
    padding: 25px 12px;
  }
`,_p=A.div`
  width: 100%;
  max-width: 1380px;
  margin: 0 auto;
`,vp=A.div`
  opacity: 0;
  transform: translateY(30px);

  transition:
    opacity 1s ease,
    transform 1s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`,yp=A.h2`
  margin: 0;
  color: #111111;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 900px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 21px;
  }

  @media (max-width: 380px) {
    font-size: 19px;
  }
`,bp=A.div`
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
`,xp=A.button`
  height: 42px;
  padding: 0 20px;

  border: 1px solid
    ${({$active:e})=>e?`#ffb36c`:`#dddddd`};

  border-radius: 999px;

  background: ${({$active:e})=>e?`#ffb36c`:`#ffffff`};

  color: #111111;

  font-size: 15px;
  font-weight: 500;

  cursor: pointer;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    border-color: #ffb36c;
    transform: translateY(-2px);

    box-shadow:
      0 6px 16px
      rgba(255, 179, 108, 0.2);
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 600px) {
    height: 38px;
    padding: 0 15px;
    font-size: 14px;
  }
`,Sp=A.div`
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
`,Cp=A.article`
  width: 100%;
  min-width: 0;
`,wp=A.img`
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
`,Tp=A.h3`
  margin: 20px 0 0;

  color: #111111;

  font-size: 19px;
  font-weight: 500;
  line-height: 1.25;

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
`,Ep=A.button`
  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 10px;

  height: 48px;

  padding: 0 40px;

  border: none;
  border-radius: 12px;

  background: #ffb36c;

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
    background: #ffa45a;

    transform: translateY(-2px);

    box-shadow:
      0 8px 20px
      rgba(255, 179, 108, 0.3);
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
`,Dp=`https://reactproject-gsav.onrender.com/api/news`,Op=[`All`,`Nature`,`Weather`,`Animals`,`Science`],kp=e=>`
    ${e.title||``}
    ${e.description||``}
    ${e.content||``}
  `.toLowerCase(),Ap=(e,t)=>{if(t===`All`)return!0;let n=kp(e);return{Nature:[`nature`,`forest`,`tree`,`trees`,`plant`,`plants`,`flower`,`flowers`,`ocean`,`sea`,`river`,`mountain`,`earth`,`wildlife`,`landscape`,`environment`,`nature`],Weather:[`weather`,`rain`,`rainy`,`storm`,`snow`,`snowy`,`wind`,`windy`,`temperature`,`climate`,`hurricane`,`tornado`,`flood`,`heat`,`cold`,`sunny`,`cloud`,`cloudy`],Animals:[`animal`,`animals`,`dog`,`dogs`,`cat`,`cats`,`bird`,`birds`,`lion`,`tiger`,`bear`,`elephant`,`fish`,`whale`,`dolphin`,`horse`,`pet`,`pets`,`wildlife`],Science:[`science`,`scientist`,`scientists`,`research`,`researchers`,`study`,`space`,`nasa`,`planet`,`planets`,`technology`,`technology`,`experiment`,`discovery`,`discover`,`physics`,`biology`,`chemistry`,`medical`]}[t].some(e=>n.includes(e))};function jp(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(1),[i,a]=(0,_.useState)(!0),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(`All`),f=(0,_.useRef)(null),[p,m]=(0,_.useState)(!1);(0,_.useEffect)(()=>{let e=new IntersectionObserver(([t])=>{t.isIntersecting&&(m(!0),e.disconnect())},{threshold:.25});return f.current&&e.observe(f.current),()=>e.disconnect()},[]);let h=async(e=1)=>{try{e===1?a(!0):s(!0),l(!1);let n=await fetch(`${Dp}?page=${e}`);if(!n.ok)throw Error(`HTTP error: ${n.status}`);let i=await n.json();if(i.status!==`ok`||!Array.isArray(i.articles)||i.articles.length===0)throw Error(`Новости не найдены`);t(e=>{let t=new Set(e.map(e=>e.url)),n=i.articles.filter(e=>e.url&&!t.has(e.url));return[...e,...n]}),r(e)}catch(t){console.error(`Ошибка загрузки новостей:`,t),e===1&&l(!0)}finally{a(!1),s(!1)}};(0,_.useEffect)(()=>{h(1)},[]);let g=e.filter(e=>Ap(e,u)),v=async()=>{if(o)return;let e=n+1;try{s(!0);let n=await fetch(`${Dp}?page=${e}`);if(!n.ok)throw Error(`HTTP error: ${n.status}`);let i=await n.json();if(i.status!==`ok`||!Array.isArray(i.articles)||i.articles.length===0){console.log(`Больше новостей нет`);return}t(e=>{let t=new Set(e.map(e=>e.url)),n=i.articles.filter(e=>e.url&&!t.has(e.url));return[...e,...n]}),r(e)}catch(e){console.error(`Ошибка загрузки новостей:`,e)}finally{s(!1)}},y=e=>{d(e)};return(0,j.jsx)(gp,{ref:f,children:(0,j.jsx)(_p,{children:(0,j.jsxs)(vp,{className:p?`visible`:``,children:[(0,j.jsx)(yp,{children:`News`}),(0,j.jsx)(bp,{children:Op.map(e=>(0,j.jsx)(xp,{type:`button`,$active:u===e,onClick:()=>y(e),children:e},e))}),i?(0,j.jsx)(yp,{children:`Loading...`}):c?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(yp,{children:`Something went wrong`}),(0,j.jsxs)(Ep,{type:`button`,onClick:()=>h(1),children:[`Try again`,(0,j.jsx)(xr.FiArrowRight,{})]})]}):g.length===0?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(yp,{children:`No news in this category`}),(0,j.jsxs)(Ep,{type:`button`,onClick:()=>d(`All`),children:[`Show all`,(0,j.jsx)(xr.FiArrowRight,{})]})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Sp,{children:g.map(e=>(0,j.jsxs)(Cp,{children:[(0,j.jsx)(wp,{src:e.urlToImage,alt:e.title||`News`,onError:e=>{e.currentTarget.style.display=`none`}}),(0,j.jsx)(Tp,{children:e.title})]},e.url))}),(0,j.jsxs)(Ep,{type:`button`,onClick:v,disabled:o,children:[o?`Loading...`:`See more`,(0,j.jsx)(xr.FiArrowRight,{})]})]})]})})})}var Mp=er`
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`,Np=er`
  0% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(150px, 60px) scale(1.2);
  }

  100% {
    transform: translate(0, 0) scale(1);
  }
`,Pp=er`
  0% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(-120px, -80px) scale(1.15);
  }

  100% {
    transform: translate(0, 0) scale(1);
  }
`,Fp=A.section`
  position: relative;

  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-top: 60px;

  padding: 55px 0 65px;

  box-sizing: border-box;

  overflow: hidden;

  background:
    linear-gradient(
      120deg,
      #f2f5f4,
      #e4ece9,
      #f8f8f8,
      #e6efec,
      #f2f5f4
    );

  background-size: 300% 300%;

  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #e5e5e5;

  box-shadow:
    0 -10px 35px rgba(0, 0, 0, 0.04),
    0 10px 35px rgba(0, 0, 0, 0.05);

  animation: ${Mp}
    14s ease-in-out infinite;

  &::before {
    content: "";

    position: absolute;

    width: 450px;
    height: 450px;

    top: -220px;
    left: -160px;

    border-radius: 50%;

    background: rgba(
      255,
      255,
      255,
      0.65
    );

    filter: blur(35px);

    animation:
      ${Np}
      12s ease-in-out infinite;

    pointer-events: none;
  }

  &::after {
    content: "";

    position: absolute;

    width: 500px;
    height: 500px;

    right: -220px;
    bottom: -280px;

    border-radius: 50%;

    background: rgba(
      210,
      225,
      220,
      0.5
    );

    filter: blur(40px);

    animation:
      ${Pp}
      15s ease-in-out infinite;

    pointer-events: none;
  }

  @media (max-width: 768px) {
    margin-top: 45px;
    padding: 45px 0 50px;
  }

  @media (max-width: 550px) {
    margin-top: 35px;
    padding: 35px 0 40px;
  }
`,Ip=A.div`
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
`,Lp=A.h2`
  margin: 0;

  font-size: 28px;

  font-weight: 500;

  line-height: 1.2;

  letter-spacing: 2px;

  color: #111111;

  transition:
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
`,Rp=A.button`
  flex-shrink: 0;

  padding: 9px 16px;

  border: 1px solid
    rgba(17, 17, 17, 0.15);

  border-radius: 20px;

  background: rgba(
    255,
    255,
    255,
    0.7
  );

  color: #111111;

  font-size: 13px;

  font-weight: 500;

  cursor: pointer;

  transition:
    background 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background: #ffffff;

    transform: translateY(-2px);

    box-shadow:
      0 5px 15px
      rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 550px) {
    padding: 7px 12px;

    font-size: 11px;
  }
`,zp=A.div`
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
`,Bp=A.div`
  position: absolute;

  left: 50%;

  width: ${({$position:e})=>e===0?`590px`:`340px`};

  height: ${({$position:e})=>e===0?`350px`:`220px`};

  overflow: hidden;

  cursor: pointer;

  background: #dddddd;

  transform:
    translateX(
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

    background:
      linear-gradient(
        120deg,
        rgba(
          255,
          255,
          255,
          0.18
        ),
        transparent 35%,
        transparent 65%,
        rgba(
          255,
          255,
          255,
          0.08
        )
      );
  }

  &::after {
    content: "";

    position: absolute;

    inset: 0;

    z-index: 3;

    pointer-events: none;

    background: ${({$position:e})=>e===0?`linear-gradient(to bottom, transparent 55%, rgba(0, 0, 0, 0.2))`:`rgba(0, 0, 0, 0.08)`};
  }

  img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;

    transition:
      transform 0.8s ease;
  }

  &:hover img {
    transform: scale(1.06);
  }

  &:hover {
    box-shadow:
      0 35px 80px
      rgba(0, 0, 0, 0.28);
  }

  @media (max-width: 768px) {
    width: ${({$position:e})=>e===0?`420px`:`240px`};

    height: ${({$position:e})=>e===0?`260px`:`160px`};

    transform:
      translateX(
        ${({$position:e})=>e===0?`-50%`:e===-1?`calc(-50% - 260px)`:e===1?`calc(-50% + 260px)`:e===-2?`calc(-50% - 520px)`:`calc(-50% + 520px)`}
      )
      scale(
        ${({$position:e})=>e===0?`1`:`0.8`}
      );
  }

  @media (max-width: 550px) {
    width: ${({$position:e})=>e===0?`300px`:`190px`};

    height: ${({$position:e})=>e===0?`200px`:`130px`};

    transform:
      translateX(
        ${({$position:e})=>e===0?`-50%`:e===-1?`calc(-50% - 190px)`:e===1?`calc(-50% + 190px)`:e===-2?`calc(-50% - 380px)`:`calc(-50% + 380px)`}
      )
      scale(
        ${({$position:e})=>e===0?`1`:`0.75`}
      );
  }

  @media (max-width: 380px) {
    width: ${({$position:e})=>e===0?`270px`:`170px`};

    height: ${({$position:e})=>e===0?`180px`:`115px`};

    transform:
      translateX(
        ${({$position:e})=>e===0?`-50%`:e===-1?`calc(-50% - 170px)`:e===1?`calc(-50% + 170px)`:e===-2?`calc(-50% - 340px)`:`calc(-50% + 340px)`}
      )
      scale(
        ${({$position:e})=>e===0?`1`:`0.75`}
      );
  }
`,Vp=A.div`
  position: relative;

  z-index: 5;

  width: 100%;

  height: 390px;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 15px;

  color: #555555;

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
`,Hp=A.div`
  position: relative;

  z-index: 5;

  width: 100%;

  height: 390px;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 15px;

  color: #555555;

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
`,Up=`54040917-f9e6420d7887ca7f24aa85fec`;function Wp(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(2),[i,a]=(0,_.useState)(!0),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(!1);(0,_.useEffect)(()=>{(async()=>{try{a(!0),s(!1);let e=await fetch(`https://pixabay.com/api/?key=${Up}&q=beautiful+nature&image_type=photo&orientation=horizontal&per_page=7&safesearch=true`),n=await e.json();if(!e.ok)throw Error(n.error||`HTTP error: ${e.status}`);if(!Array.isArray(n.hits)||n.hits.length===0)throw Error(`Nature images not found`);t(n.hits.map(e=>({id:e.id,url:e.webformatURL,largeUrl:e.largeImageURL,alt:e.tags||`Beautiful nature`})))}catch(e){console.error(`Ошибка загрузки изображений:`,e),s(!0)}finally{a(!1)}})()},[]),(0,_.useEffect)(()=>{if(e.length===0||c)return;let t=setInterval(()=>{r(t=>t===e.length-1?0:t+1)},2e3);return()=>clearInterval(t)},[e,c]);let u=t=>{let r=t-n;return r>e.length/2&&(r-=e.length),r<-e.length/2&&(r+=e.length),r};return i?(0,j.jsxs)(Fp,{children:[(0,j.jsx)(Ip,{children:(0,j.jsx)(Lp,{children:`Beautiful nature`})}),(0,j.jsx)(Vp,{children:`Loading...`})]}):o?(0,j.jsxs)(Fp,{children:[(0,j.jsx)(Ip,{children:(0,j.jsx)(Lp,{children:`Beautiful nature`})}),(0,j.jsx)(Hp,{children:`Failed to load images.`})]}):(0,j.jsxs)(Fp,{children:[(0,j.jsxs)(Ip,{children:[(0,j.jsx)(Lp,{children:`Beautiful nature`}),(0,j.jsx)(Rp,{type:`button`,onClick:()=>l(e=>!e),children:c?`▶ Continue`:`Ⅱ Pause`})]}),(0,j.jsx)(zp,{children:e.map((e,t)=>{let n=u(t);return(0,j.jsx)(Bp,{$position:n,onClick:()=>r(t),children:(0,j.jsx)(`img`,{src:e.url,alt:e.alt})},e.id)})})]})}var Gp=A.footer`
  width: 100%;
  background: #ffb56b;
  color: #111111;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`,Kp=A.div`
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
`,qp=A.div`
  display: flex;
  align-items: center;
  min-width: 180px;

  @media screen and (max-width: 563px) {
    min-width: 0;
    grid-column: 1;
    grid-row: 1;
  }
`,Jp=A.img`
  width: 82px;
  height: 56px;
  object-fit: contain;
  display: block;

  @media screen and (max-width: 563px) {
    width: 75px;

    height: 52px;
  }
`,Yp=A.div`
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
`,Xp=A.h3`
  margin: 0 0 12px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #111111;

  @media screen and (max-width: 563px) {
    font-size: 15px;
  }
`,Zp=A.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.6;
  color: #111111;
`,Qp=A.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,$p=A.a`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`,em=A.img`
  width: 35px;
  height: 35px;
  object-fit: contain;
  display: block;
`,tm=`/project-forecast/assets/logo--nZl-i6T.png`,nm=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAACU1JREFUeAHtmHtwVNUdx7/nPvaZTTYhISY8wiNQQYeKFQuFQQQqDuKDIlBsmTIFOuLgFDutjg/qlLbI1LaICH9UGcvYjm3DQB2RKpRCmLEyVq0gYIEwJCaEvJMl2ezufZzT331sstndNBvKn56ZM/eec8+553O+5/f7nXMv8GWyE8P/ma73BRJlviq0pHiaNvPbk5VpD4cxaookAnkal2VTeIwuHm1u5FdOf45Tr10y33nvOI6bbl+BYabhQsoW3IGCHdtmKrM2tfAetcPsZYZQoFM2hAyDu/ec7u06FSFRigQ3r1aLg+tew/pD7nvMXAfNFdJ+6cnil7ffrEzZVKu3cBpcMlwwnbvXQUGdZyZXRaGYyI7i1YV78Ogxa8K5DJ4LpPJ83tKizYXrmy5rDZwLVTZcAAdqeKBWGSLP8EH7dB0mzEAOqipDAMpnyn724AR1fFWLcRleSSZA05m/bZUpLQcrZ6k3eFSJCNy2D1y8gvkq2avFYeA6IOXWsS+uCzJ1V4K3MoVZTcWQALmCgitKvbjEN+JdvQZ3BxrwAQYDHQxSPl6+Zn6Bgt2m2SvZgMMCyBlUqhf1fAdO9C6DapkeQxbvz2aTbN68efKx2GJddEbBNcu25AzbM3QZ8UgCminZz3SolB071MnM7Hu3TsheSB6/0zfDRq0+zCzFTZ2PIH9krpAwHniuFa29RVLMK6HXMxCUABKdvcjfuxK+RePB/AqGCn2JFg0XttXh05dq4Q8WQNOlDFC6NzvQuHkL5v4KaY6UDikfnnvvfQsKx+9nUVVGrwoLsg9Up+bfnAzf68tpqQhMyjGCCWcajJq/6f87VDmUFXSEGI1VCEpIm3XGKOKJjUJcjaEf0L3GvRDjRkJ651FqJCA0ju4fHUH8oyZSV+lTOTlwMpuKirK1lRi9YRyEIUAeiDfYYXh9+RlLr3OJd4vI3mcwc20qaCok2zpn2p1PTb/1n6xHlhDzDAQ9FwHrfJUWgkOcb0X37b8BLy2DbiaBHFA9OXBKHNUDDO1tUTwY/w6sCNb+fheqF52mNfVkgI7gE7Bc+AeIJ6UWHpk7bgdT4gx+HfBrQICuAfe69BZbQRC/ecsv4Lmp0NIPtO9AkUzI8V6grR3sWgSivRMy1+1nzBPHnIaHMGP7LHw4/wQYjVg8NwwjESV/dvoq1pWZdrlLqhPLsfmuVAFTQ5CoGKt+XdTrmbbGOdjDdzpGdaYB8pgQ3Zp9ayEIqOjMY5DLQ31deg7Woeb+t+HJD6Nx6xlc3nIWvQmzb+jCsT4k2oyM8GRAw2x2/0+rxM8XZii55GtlxZxHYavo051rUlEr53udhpFrQIFJIYVUVAQ8kwtQWPck5NI8Z6amY0rBe0bjNrER6O5C2/bP4CN/8LD+QOkNwFZPIbUHKmqw8XLlrFSb7FPyvqmBaUwih/GryEicFJBd5ayd1jIBRYZ0vgNyzTO2nWpv/Bvd6w9Al30wAirKazYBxH1rw/dxbtKbUP0Bipr9G4oFpCah0wK+ykx/6vB9Sk4co06HmqpgmqKyOzHFdG01AbZ7mR2KxMk68B+/BW95AXwjA6RaAA3FL5A9ylDKAvDmCVcpPQXS7LPDdEU5u4apmJeXAalLxij4aKbeLKBWlt1ZW7CWkrwbuHuKY79P7YMa8vQ5gAXjLw0j8d5l2wbD91Y4yqXEaOvedrqsoNQf3b6M5ZZUFzDb5sGlFEjuQCZsOZw6moxto1p/F0HrxuSkEhaQA5NMsqtktj1dEQZVcZZS5STmEVdsJS3VvFkUTUJKrpLF1PXkJ3ZYYr9dRUvR6YDaipBjNTXCs3C8PWm9+ryrpJG23K6SaYp6KTdBimZAnmuMnULAcACzgSZt0oK0ytRWvPyKE5amVoD9egXQ2gCpuRlKpB35nVtJbQNmXReV466jpDuOkRU0T1JxFR/3Ziz32ab4JwiTWmaWI52lvJJcbtOFpq6TRkBsehbspV9SsP8G2Ldm256uUMCnrYcMT0J0wjZ4RpdS0bTPRKlKmpKZ9VgnC01DWrWd9lRd62Bl3FHPl6aoVTa6nYahAqqLO6BeMszueoiHVgNXmt1JOK8UR87CUH8Iz7hCRzXLKXg/pByLOSpKZpqipmjAJesEnHXHQevV+L+KPcodyDh4qBAX94NNWQKUTwZilwh2av/jInq+4QmgmSDiFKW7yGPCpZAnFIJpVGd5EMEHF4x1tlbLRC62QS0tythxJArEx/TjzyPFhVP3bvbHfd0/EEFaAtXMVLTxkPNyQV773N9o3ztPahr9NltCm8DEMDA+CHwlnyZh2A6WdCa5pRGhw2vIHAS0E1/AW+RzFTYHKDpRKWEvxndWp0qUeVTrqYiL88ILjWZPp28kaPA4Ca7RaUgmB3mgCu6GDRx4gRS+4LZxc8xtnzxFaV6wFXReWDvLtldL0Q72LMxRpRmnpwSXzKgp/jSrc81qDHJUs5X9y87wkqULAgfkmCJlgNIBCYVzwBbsciCZhJwT5/ZwsfDTMItLYBis/1PEBR0hjUFB46IM4dJH4Sse73pbH4VO7jE4PGlL76PJRU5C/G4sxOWjNIG4Y2MWsJ2Fk3lqpvquHoitb0EEH4enJESBQhsQdqzllpguao0LP0GW1R3kQwzef/y1PIZ6KmnWUqcpmrBUpXJHBLBCrvuJ0X9I9jr3UfcqyEbVor7n6R93mikbfrmsK79+ZUkWHsjZKmtrIe65Xaouv1lZLWmC9c2FuZ5p39NVJSfx0RnSb+U8JwcoB4NOziNPD1ltPANVoLgrubseCc+LfBWyr3ZFcBDRBv3uNmeviFQ3fi49VlLk3SV3GDJucLLsTEkI7vOVS4svPu1zWYb1c8AGLZ/Suafu/aL20ZO8VazZsD/4cIMSHcgMxTdOueP0Ts/HqOH4H/+DhvoXZFTM7ti/Znmw7PU/F1w1PrN/Nw3DpbMmwSVJRNXguXD1hq8ihx9WuQzIf18VbWVSI2sS+m5WQW9UKSJnC/jeQc6jzr3gAY2zsqB5KPKfu8LVW6bDWZkh/1MOd/nsfzUX3x25rXJG3pNoYRAt5EFaqterzjVhB3Zhl9UQi8W8LQdO1Kz97tEPDiLzFDnkoNedFs8I3rTpe6FllZWBlSX5/koPvAWgTUDSFL2njXVc+cL46OSpyN4/fBg/cry2NuF2G/bv6C/TjUr/BYAx1ubkm1GFAAAAAElFTkSuQmCC`,rm=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABedJREFUeAHNWG1sU1UYfu9nP7d2H90GbAuwyfhYZgxoQEUd6hJFwhhbmAthGhLB6B8gxl/60wQT4Z8ZRNEZcRPoBhr5QTAbgmIUooh0MAZCKG7r19p17drbe+/xnK6b7bZ2PW1NfJLb3px733Oe+57347wvA/Rg8IVK6xpKzMZVrcbCiq2ixlTLsrwJASPiRwxCICGkeBTJPzg+dtfquveD1W2/9hAyAEPxLltdXS3kr9j7UcGi2jfDwTFGlUPpyCOe14GgMzHjzptHf/123x4yF77UNGTTIsjhS1nf/IlVZyjZFg64sBRD82H/MgWkavUWNhL09Fw62b4dD/H4kiELglxd/fvPlVRtPB/02ZUY2eyBVEVvruBGb3//8vULB8/hEQUoCUbHn2nrOqkqcqOqyrkhNnsRTpCx7Z66+FVrGxAFJyMyzxjatOvMzVDQVQUMy8N/CIRUVWMoutXf2bgakpCZM1bffsYWnnA9AiybseYQSlRISrNVVUU0Ft/u79xKSKJUBLln27q/jEjBFjwjNTlJUsA3EYbGF1dAzfLimck1IgcfHr0MRoOYXBjbpSAYei90tbZCnE3GE+RWb3q3odBS942qSlTbSpRz/+9x6P24BdbWls2rrQ3Nn+ENSe2T2JpUv2Og4Y++D/qnSbJxz5VFy58/S0uOwOWZhEtft8Nja8qSbqWK0ILzIFVmS6rqz0OcBqcJMk+3fN4z6X2gACUIn6fWlUNFWT5wKTTEpJkTgl678mTzp6cgFtKmCSJBX7gN65ja7gIBCd57a2PC9inqlLZcY0FwuIPg84exbYbSm5ABTmOw4CC+Osolup2Pbzl0BIcUFX8lC5TwYYKVi00JY0STprqDUFFuntFAkVk/x7OTAWcrtHbz64evfvfO21H5vOJVb2RCjkDF2ppt/L/bRqGm2gImowbyYle65KLAhmwurSM5G7FF5RuWREI+CumFEVEUqlPIfJBCY2xpVUMJW7r0ie2KPAm5BJM1PWzHkUnIX7xyB28oWNoEdMcu7AQqeLyhqAd7sRPMhhRRwOkJgCDEfA7vj9mkA56jWobJNy1rZNY3HxtmGaaMRnIpNv7jhxrjCKOEEEPMbXY43Ln/NPxl9wINkKKMYvtmCoESAp/oT7Pj33yx2j4yDrRgOc5MVhJpBVEGLjXiCgAtSAmBCTIZeTAtyVCYOklFF8GBGkn4VkMjNzDkhGGnH0IhBSRZgZplhQk5OCzJYB/2z4yNuicg30i9UQT4YKDKPmD5EhopUeRh8+7uKAFiW45f9ic8H7jjhp0HToPIT3kxx7GQZ6AnqCJ5jJfCfpuoK6AiSLKCXidE76f/40EUp9PwIArZVQoRKXCT9Xvv98L/EbgEDLjv9rDe4YFujtflNNVBDmbjRT04b13oYUfvnHOIenNOCSISILLMdoI2n3G7rz0kcZDxDv/ZQXfcSI1sZ8JUVN+I7Qi5JwTR1XvH9uHSL/sMP7MAZAWd0cJeOXtgL7mfylk2m4wPiVaET3eQI2T8tbi6CwfdVohxm06q6k+ndjcbTJUZHVrnLkJ+MqOoN1dyP554rRlizaV4QpzjTt8LpPQDGsyznSw+VqEMXJllBeXB0LmXIK4HNKdw39jW3aVIgaZ0C6gQTmt729YCG3Nb8n/5NzvcuO0EGmC/UHjBeOJi145dENfxStH6cFZjVaRVI6OZn9gElLuLuclao2Wwr3NrLSzQ+phBffvpG+GApyaTFgglOUVjKB7s/2L+5lFSp+jrbKzlBMMJrMQMzknpAbfeVF5r7MHk1iR9J4U8Ivbgsd94RW8qj34q5Aq4gW3Ac3oc1xsuHm99FVIkx3SsJdqm3dDSadXqC5tCQQcu8NmMwhHOEEhrLGImJ1zWn3FYg1h7OZUMjTlHG5vrthzuMFlW7iG1tCxNplVjcoIOidoCnL6ud1wZ7DgAQ0PyQsTiF80IReWPLrEsq28y5Fc2Cdq8lRzLFyBS30xVdBJuG/uksM824XrQ63UOdJNDyfRH0qzzD+bDR7GNxUL7AAAAAElFTkSuQmCC`,im=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAACGJJREFUeAG9WAtwVNUZ/u+9+7rZbJLdzYYk7K5BNjZugq2gph1Li05LeQQkQRK10HYGR0Cp7ciMrdM6004f1qlUCx2IWGitWG1CHgOWjq1FrFXRDIg8Fggx5LUh2SS7SXazj7t77/U/JyEkZLP3Bg3/zZ3s3j33nO/8j+///8PAzIXBW75tw/yc/FLLA5aitPuMVkMJp2MzZRl05Hf8L0BC8ocD8eb+C8G61trWuuYjA164DmFmMJZ1uVza0l327fZS25YRf4SJj4iK78v4p0/ngLcamO6mgT377317E5kLbwlUiBqAHN7iIyeW1ZkcfHmwJwIMClyHoGaljByeDQ5E6190H16LjzR4J+BzAOTW7L9zSdGaeW/5W4Miw1Kwn1tkURat80zcmdrOFYc2Hvs3PhJhhgDp863nV9VKrLRGFKQvBNi1gn6b0LDcgR2ugw8B9YZpgCR5Jj/RWX4+5I/MZzhGA7MoqE3JaOYvPO9scCf7nU32cFtHxbngQMQ12+CI4BosKuKWJ3BNSKKwawFyj7eU/T0YCBeyGmZWzJpMyFohf7jwh82rawAm+/lEgNyql7+6NCHJ9+Oubhi4K8IgSBHEijIMSpgAcpJKfzq0Tg50hmAmwuAlyDEIJgYBg5M+YzHcTVwm6FkePV+e0XyWAhM8k17DXJ1/7P9mz8o6KSGtVkslhAp7Y15YmPF1WJ//ONgN80DDaOlvsiyBN9YGB3pegnf8/4Rcg5M+UyOyhLtMyI17Fr5ZhV+vZoJtvRVyqC+iahJRTkCWNht+d8vfECgL5AqLIfDHfZgeJDBrbGDSZI6Pf6b1R3AhdAoMHK9q/vQcHv61pF7v8YBAAW44cs+LaTbDw6hPVunlCAKpytsCy7Ir0ZQcaunP8Gr3TuC5NASQRsdExTBEpTCszH4INjp+ggqJw/Gh/8ML7U9BpsaitARIsiyHeiK7X/v2O1spwCeDa+Wh9rDii6h7WG37PgUXlwVYd3IROA3zp/Uzotn2yEXYt+C/kK3LhePD70J1x69AxxoU18pypIvPZtZqWHuZfW54QFD0ZGJKHcPDClsVGlGEyjFwJECmA0jM7eDnw+azK9H8feivi6GA/5IaQ0E4EGFJxcSWLM1bK4QSii8MCD3wfFENEO6uPHkHOBCcT7gMvy7cC7cav0KjeTqZo58LPzi9BINIA0+7dkGP0Km4nhASIf9rWVWs7baMckZFVZOvv4ku8L/AYcjTO2FEDMLuYoxQ/Pyo8xfQhxtIJU6DC331T7SkuStzCagQJtuduYbVm7VFSiOJqQiVkKDY0/Eb+owAzNHlUc1pGR24029POQdxg7revdRVqnI308BREj5LW8yyHKMYVuFECAqNC+gyUWmUigjYhDzqGoQTm0dOK02DPqyj0W033AwhcUhxPKdls1i0rU5pIAkEI2eiQPVjEWjV5kBD7z6kBAlawmfHn6cSA2aWYcw4OlaPHYGy35MWgoSTcgTjRcxMzDMxYv9xuZpqhETm3ebvUBqi41GjQwn/lHkkfPdKMDEqinmyFotzCUoDyc7D6HM8Zxw3MREb+uADn5TS4NlofxI5cgP0xLrgcqQD/rLgCBL6ZvzeCVdqj4g4AmatDYk8AhpWq7Qs2YLAYrWs6AwGBHYCMwERYtqJO7Tr50H5iS9T+llhexAaFn4Cu0reoGT8TUsZNC48TXM2Eaye6WZawmdoMaEkoiAHWCRpj9JAYoz93TsQjgQ/LvjtpAgkps/TO2D1cTd4Qieo6fKRetgxMia5n2gQsxelIzJ+n/f3NMiUJDqcOM8GLoYaQIUk8CLmc6cvor40Ucii+YYC+GP7z6Dy4zsxeP4KXdFW+CDwH1j78e1gxTTXH++BxeblEBej4I1eUlwPrSP7PIP1mq73/a/fvGzOC0o9LtEIFpRUQ0OJAbBp86aMIeWWRWeDN/tr4VDfftAiQeQaHHApfB4O39FMXeKxc/eBBd1EqU7Um7TQdqCtnj31yqe+dDOvGMnD8UHqbz7BCwbMyf2YOUiRKkixpON1jJ66hF/oo+BIMfuydzvdhJoilrfqGXIaQZoipvNDX7Uxn9+SqiEvSCukExM/e9q1GwrTiqkfEYLe0f5zGq0kAJBj0IwxrF7yYOtNv4QF6aX0/b1dz0LT0NHxojaVkAbfe2zgJfKZAnK73brlbxfFpitYCbDvYqpbbF42zl+E/0h0OnkXjE7E0BKMjB3V3qiWCDE/5lmFUZuhuvg32Xh4bk49XYi2lR6PJ3G311HHaNhyhp1aCwXQTN9ABz8TbII3+l7F4vNdymMkI5DoXJf7CCzKXIyVdDbVYF/8MpwMvg+vde9C0DFKKWp7E3LqEOqPNsLY+c0kkz4VWif726Y2TcSUPqGbApiu4SMELkhRsgQC52nqU5MtrhWLE5umjKtN06S281xj17fwOGJKd0O4LFs7B1J1oyTbZGjMeFvo5+sBx+lZ8WzNpeUwoe2cCFBsXP/BUS3DYXcni3CDRULTogJqDj7c9BZMOExKejazraPcEwzcmKMPIrIoJUyWtObtjoYSuKZ4SdYcyNudDbciNzbL4uxrklgrw2y8iOCKIUllNW338gdnQ4neqK3hdNysgcSCVDIYdfXPOeuLpxuTqr2Sd7oOfa/tvd4yi8MEX6Q2yekBOeLoaPIt3Vl48EFIUZOqCTV6TLvJs6LOZOUrhnvDUjKuVAlMzshNY4a7RurwaON+GDteTvXOTLiAHmyuP3JPdf5d1k2R/pgcw3ZVTUeoNXJyupWXOo71VX/06NFtLS209FZlkes6DCdiv9c6t6SyoMLqMlVgYi9C/jQTjiYZA1sDQRLEocig4PGdHWzo+bD79VOv9PqubHIm63wGiDNt8r1lE8wAAAAASUVORK5CYII=`;function am(){return(0,j.jsx)(Gp,{children:(0,j.jsxs)(Kp,{children:[(0,j.jsx)(qp,{children:(0,j.jsx)(Jp,{src:tm,alt:`247 forecast`})}),(0,j.jsxs)(Yp,{children:[(0,j.jsx)(Xp,{children:`Address`}),(0,j.jsxs)(Zp,{children:[`Svobody str. 35`,(0,j.jsx)(`br`,{}),`Kyiv`,(0,j.jsx)(`br`,{}),`Ukraine`]})]}),(0,j.jsxs)(Yp,{className:`contacts`,children:[(0,j.jsx)(Xp,{children:`Contact us`}),(0,j.jsxs)(Qp,{children:[(0,j.jsx)($p,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,children:(0,j.jsx)(em,{src:nm,alt:`Instagram`})}),(0,j.jsx)($p,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,children:(0,j.jsx)(em,{src:rm,alt:`Facebook`})}),(0,j.jsx)($p,{href:`#`,target:`_blank`,rel:`noopener noreferrer`,children:(0,j.jsx)(em,{src:im,alt:`WhatsApp`})})]})]})]})})}var om=function(e){return sm(e)&&!cm(e)};function sm(e){return!!e&&typeof e==`object`}function cm(e){var t=Object.prototype.toString.call(e);return t===`[object RegExp]`||t===`[object Date]`||um(e)}var lm=typeof Symbol==`function`&&Symbol.for?Symbol.for(`react.element`):60103;function um(e){return e.$$typeof===lm}function dm(e){return Array.isArray(e)?[]:{}}function fm(e,t){return t.clone!==!1&&t.isMergeableObject(e)?hm(dm(e),e,t):e}function pm(e,t,n){return e.concat(t).map(function(e){return fm(e,n)})}function mm(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(t){r[t]=fm(e[t],n)}),Object.keys(t).forEach(function(i){r[i]=!n.isMergeableObject(t[i])||!e[i]?fm(t[i],n):hm(e[i],t[i],n)}),r}function hm(e,t,n){n||={},n.arrayMerge=n.arrayMerge||pm,n.isMergeableObject=n.isMergeableObject||om;var r=Array.isArray(t);return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):mm(e,t,n):fm(t,n)}hm.all=function(e,t){if(!Array.isArray(e))throw Error(`first argument should be an array`);return e.reduce(function(e,n){return hm(e,n,t)},{})};var gm=hm,_m=typeof global==`object`&&global&&global.Object===Object&&global,vm=typeof self==`object`&&self&&self.Object===Object&&self,ym=_m||vm||Function(`return this`)(),bm=ym.Symbol,xm=Object.prototype,Sm=xm.hasOwnProperty,Cm=xm.toString,wm=bm?bm.toStringTag:void 0;function Tm(e){var t=Sm.call(e,wm),n=e[wm];try{e[wm]=void 0;var r=!0}catch{}var i=Cm.call(e);return r&&(t?e[wm]=n:delete e[wm]),i}var Em=Object.prototype.toString;function Dm(e){return Em.call(e)}var Om=`[object Null]`,km=`[object Undefined]`,Am=bm?bm.toStringTag:void 0;function jm(e){return e==null?e===void 0?km:Om:Am&&Am in Object(e)?Tm(e):Dm(e)}function Mm(e,t){return function(n){return e(t(n))}}var Nm=Mm(Object.getPrototypeOf,Object);function Pm(e){return typeof e==`object`&&!!e}var Fm=`[object Object]`,Im=Function.prototype,Lm=Object.prototype,Rm=Im.toString,zm=Lm.hasOwnProperty,Bm=Rm.call(Object);function Vm(e){if(!Pm(e)||jm(e)!=Fm)return!1;var t=Nm(e);if(t===null)return!0;var n=zm.call(t,`constructor`)&&t.constructor;return typeof n==`function`&&n instanceof n&&Rm.call(n)==Bm}function Hm(){this.__data__=[],this.size=0}function Um(e,t){return e===t||e!==e&&t!==t}function Wm(e,t){for(var n=e.length;n--;)if(Um(e[n][0],t))return n;return-1}var Gm=Array.prototype.splice;function Km(e){var t=this.__data__,n=Wm(t,e);return n<0?!1:(n==t.length-1?t.pop():Gm.call(t,n,1),--this.size,!0)}function qm(e){var t=this.__data__,n=Wm(t,e);return n<0?void 0:t[n][1]}function Jm(e){return Wm(this.__data__,e)>-1}function Ym(e,t){var n=this.__data__,r=Wm(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Xm(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Xm.prototype.clear=Hm,Xm.prototype.delete=Km,Xm.prototype.get=qm,Xm.prototype.has=Jm,Xm.prototype.set=Ym;function Zm(){this.__data__=new Xm,this.size=0}function Qm(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function $m(e){return this.__data__.get(e)}function eh(e){return this.__data__.has(e)}function th(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}var nh=`[object AsyncFunction]`,rh=`[object Function]`,ih=`[object GeneratorFunction]`,ah=`[object Proxy]`;function oh(e){if(!th(e))return!1;var t=jm(e);return t==rh||t==ih||t==nh||t==ah}var sh=ym[`__core-js_shared__`],ch=function(){var e=/[^.]+$/.exec(sh&&sh.keys&&sh.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}();function lh(e){return!!ch&&ch in e}var uh=Function.prototype.toString;function dh(e){if(e!=null){try{return uh.call(e)}catch{}try{return e+``}catch{}}return``}var fh=/[\\^$.*+?()[\]{}|]/g,ph=/^\[object .+?Constructor\]$/,mh=Function.prototype,hh=Object.prototype,gh=mh.toString,_h=hh.hasOwnProperty,vh=RegExp(`^`+gh.call(_h).replace(fh,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`);function yh(e){return!th(e)||lh(e)?!1:(oh(e)?vh:ph).test(dh(e))}function bh(e,t){return e?.[t]}function xh(e,t){var n=bh(e,t);return yh(n)?n:void 0}var Sh=xh(ym,`Map`),Ch=xh(Object,`create`);function wh(){this.__data__=Ch?Ch(null):{},this.size=0}function Th(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}var Eh=`__lodash_hash_undefined__`,Dh=Object.prototype.hasOwnProperty;function Oh(e){var t=this.__data__;if(Ch){var n=t[e];return n===Eh?void 0:n}return Dh.call(t,e)?t[e]:void 0}var kh=Object.prototype.hasOwnProperty;function Ah(e){var t=this.__data__;return Ch?t[e]!==void 0:kh.call(t,e)}var jh=`__lodash_hash_undefined__`;function Mh(e,t){var n=this.__data__;return this.size+=+!this.has(e),n[e]=Ch&&t===void 0?jh:t,this}function Nh(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Nh.prototype.clear=wh,Nh.prototype.delete=Th,Nh.prototype.get=Oh,Nh.prototype.has=Ah,Nh.prototype.set=Mh;function Ph(){this.size=0,this.__data__={hash:new Nh,map:new(Sh||Xm),string:new Nh}}function Fh(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function Ih(e,t){var n=e.__data__;return Fh(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function Lh(e){var t=Ih(this,e).delete(e);return this.size-=+!!t,t}function Rh(e){return Ih(this,e).get(e)}function zh(e){return Ih(this,e).has(e)}function Bh(e,t){var n=Ih(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Vh(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Vh.prototype.clear=Ph,Vh.prototype.delete=Lh,Vh.prototype.get=Rh,Vh.prototype.has=zh,Vh.prototype.set=Bh;var Hh=200;function Uh(e,t){var n=this.__data__;if(n instanceof Xm){var r=n.__data__;if(!Sh||r.length<Hh-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Vh(r)}return n.set(e,t),this.size=n.size,this}function Wh(e){var t=this.__data__=new Xm(e);this.size=t.size}Wh.prototype.clear=Zm,Wh.prototype.delete=Qm,Wh.prototype.get=$m,Wh.prototype.has=eh,Wh.prototype.set=Uh;function Gh(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var Kh=function(){try{var e=xh(Object,`defineProperty`);return e({},``,{}),e}catch{}}();function qh(e,t,n){t==`__proto__`&&Kh?Kh(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Jh=Object.prototype.hasOwnProperty;function Yh(e,t,n){var r=e[t];(!(Jh.call(e,t)&&Um(r,n))||n===void 0&&!(t in e))&&qh(e,t,n)}function Xh(e,t,n,r){var i=!n;n||={};for(var a=-1,o=t.length;++a<o;){var s=t[a],c=r?r(n[s],e[s],s,n,e):void 0;c===void 0&&(c=e[s]),i?qh(n,s,c):Yh(n,s,c)}return n}function Zh(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var Qh=`[object Arguments]`;function $h(e){return Pm(e)&&jm(e)==Qh}var eg=Object.prototype,tg=eg.hasOwnProperty,ng=eg.propertyIsEnumerable,rg=$h(function(){return arguments}())?$h:function(e){return Pm(e)&&tg.call(e,`callee`)&&!ng.call(e,`callee`)},ig=Array.isArray;function ag(){return!1}var og=typeof exports==`object`&&exports&&!exports.nodeType&&exports,sg=og&&typeof module==`object`&&module&&!module.nodeType&&module,cg=sg&&sg.exports===og?ym.Buffer:void 0,lg=(cg?cg.isBuffer:void 0)||ag,ug=9007199254740991,dg=/^(?:0|[1-9]\d*)$/;function fg(e,t){var n=typeof e;return t??=ug,!!t&&(n==`number`||n!=`symbol`&&dg.test(e))&&e>-1&&e%1==0&&e<t}var pg=9007199254740991;function mg(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=pg}var hg=`[object Arguments]`,gg=`[object Array]`,_g=`[object Boolean]`,vg=`[object Date]`,yg=`[object Error]`,bg=`[object Function]`,xg=`[object Map]`,Sg=`[object Number]`,Cg=`[object Object]`,wg=`[object RegExp]`,Tg=`[object Set]`,Eg=`[object String]`,Dg=`[object WeakMap]`,Og=`[object ArrayBuffer]`,kg=`[object DataView]`,Ag=`[object Float32Array]`,jg=`[object Float64Array]`,Mg=`[object Int8Array]`,Ng=`[object Int16Array]`,Pg=`[object Int32Array]`,Fg=`[object Uint8Array]`,Ig=`[object Uint8ClampedArray]`,Lg=`[object Uint16Array]`,Rg=`[object Uint32Array]`,zg={};zg[Ag]=zg[jg]=zg[Mg]=zg[Ng]=zg[Pg]=zg[Fg]=zg[Ig]=zg[Lg]=zg[Rg]=!0,zg[hg]=zg[gg]=zg[Og]=zg[_g]=zg[kg]=zg[vg]=zg[yg]=zg[bg]=zg[xg]=zg[Sg]=zg[Cg]=zg[wg]=zg[Tg]=zg[Eg]=zg[Dg]=!1;function Bg(e){return Pm(e)&&mg(e.length)&&!!zg[jm(e)]}function Vg(e){return function(t){return e(t)}}var Hg=typeof exports==`object`&&exports&&!exports.nodeType&&exports,Ug=Hg&&typeof module==`object`&&module&&!module.nodeType&&module,Wg=Ug&&Ug.exports===Hg&&_m.process,Gg=function(){try{return Ug&&Ug.require&&Ug.require(`util`).types||Wg&&Wg.binding&&Wg.binding(`util`)}catch{}}(),Kg=Gg&&Gg.isTypedArray,qg=Kg?Vg(Kg):Bg,Jg=Object.prototype.hasOwnProperty;function Yg(e,t){var n=ig(e),r=!n&&rg(e),i=!n&&!r&&lg(e),a=!n&&!r&&!i&&qg(e),o=n||r||i||a,s=o?Zh(e.length,String):[],c=s.length;for(var l in e)(t||Jg.call(e,l))&&!(o&&(l==`length`||i&&(l==`offset`||l==`parent`)||a&&(l==`buffer`||l==`byteLength`||l==`byteOffset`)||fg(l,c)))&&s.push(l);return s}var Xg=Object.prototype;function Zg(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||Xg)}var Qg=Mm(Object.keys,Object),$g=Object.prototype.hasOwnProperty;function e_(e){if(!Zg(e))return Qg(e);var t=[];for(var n in Object(e))$g.call(e,n)&&n!=`constructor`&&t.push(n);return t}function t_(e){return e!=null&&mg(e.length)&&!oh(e)}function n_(e){return t_(e)?Yg(e):e_(e)}function r_(e,t){return e&&Xh(t,n_(t),e)}function i_(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var a_=Object.prototype.hasOwnProperty;function o_(e){if(!th(e))return i_(e);var t=Zg(e),n=[];for(var r in e)r==`constructor`&&(t||!a_.call(e,r))||n.push(r);return n}function s_(e){return t_(e)?Yg(e,!0):o_(e)}function c_(e,t){return e&&Xh(t,s_(t),e)}var l_=typeof exports==`object`&&exports&&!exports.nodeType&&exports,u_=l_&&typeof module==`object`&&module&&!module.nodeType&&module,d_=u_&&u_.exports===l_?ym.Buffer:void 0,f_=d_?d_.allocUnsafe:void 0;function p_(e,t){if(t)return e.slice();var n=e.length,r=f_?f_(n):new e.constructor(n);return e.copy(r),r}function m_(e,t){var n=-1,r=e.length;for(t||=Array(r);++n<r;)t[n]=e[n];return t}function h_(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function g_(){return[]}var __=Object.prototype.propertyIsEnumerable,v_=Object.getOwnPropertySymbols,y_=v_?function(e){return e==null?[]:(e=Object(e),h_(v_(e),function(t){return __.call(e,t)}))}:g_;function b_(e,t){return Xh(e,y_(e),t)}function x_(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var S_=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)x_(t,y_(e)),e=Nm(e);return t}:g_;function C_(e,t){return Xh(e,S_(e),t)}function w_(e,t,n){var r=t(e);return ig(e)?r:x_(r,n(e))}function T_(e){return w_(e,n_,y_)}function E_(e){return w_(e,s_,S_)}var D_=xh(ym,`DataView`),O_=xh(ym,`Promise`),k_=xh(ym,`Set`),A_=xh(ym,`WeakMap`),j_=`[object Map]`,M_=`[object Object]`,N_=`[object Promise]`,P_=`[object Set]`,F_=`[object WeakMap]`,I_=`[object DataView]`,L_=dh(D_),R_=dh(Sh),z_=dh(O_),B_=dh(k_),V_=dh(A_),H_=jm;(D_&&H_(new D_(new ArrayBuffer(1)))!=I_||Sh&&H_(new Sh)!=j_||O_&&H_(O_.resolve())!=N_||k_&&H_(new k_)!=P_||A_&&H_(new A_)!=F_)&&(H_=function(e){var t=jm(e),n=t==M_?e.constructor:void 0,r=n?dh(n):``;if(r)switch(r){case L_:return I_;case R_:return j_;case z_:return N_;case B_:return P_;case V_:return F_}return t});var U_=H_,W_=Object.prototype.hasOwnProperty;function G_(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]==`string`&&W_.call(e,`index`)&&(n.index=e.index,n.input=e.input),n}var K_=ym.Uint8Array;function q_(e){var t=new e.constructor(e.byteLength);return new K_(t).set(new K_(e)),t}function J_(e,t){var n=t?q_(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var Y_=/\w*$/;function X_(e){var t=new e.constructor(e.source,Y_.exec(e));return t.lastIndex=e.lastIndex,t}var Z_=bm?bm.prototype:void 0,Q_=Z_?Z_.valueOf:void 0;function $_(e){return Q_?Object(Q_.call(e)):{}}function ev(e,t){var n=t?q_(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var tv=`[object Boolean]`,nv=`[object Date]`,rv=`[object Map]`,iv=`[object Number]`,av=`[object RegExp]`,ov=`[object Set]`,sv=`[object String]`,cv=`[object Symbol]`,lv=`[object ArrayBuffer]`,uv=`[object DataView]`,dv=`[object Float32Array]`,fv=`[object Float64Array]`,pv=`[object Int8Array]`,mv=`[object Int16Array]`,hv=`[object Int32Array]`,gv=`[object Uint8Array]`,_v=`[object Uint8ClampedArray]`,vv=`[object Uint16Array]`,yv=`[object Uint32Array]`;function bv(e,t,n){var r=e.constructor;switch(t){case lv:return q_(e);case tv:case nv:return new r(+e);case uv:return J_(e,n);case dv:case fv:case pv:case mv:case hv:case gv:case _v:case vv:case yv:return ev(e,n);case rv:return new r;case iv:case sv:return new r(e);case av:return X_(e);case ov:return new r;case cv:return $_(e)}}var xv=Object.create,Sv=function(){function e(){}return function(t){if(!th(t))return{};if(xv)return xv(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function Cv(e){return typeof e.constructor==`function`&&!Zg(e)?Sv(Nm(e)):{}}var wv=`[object Map]`;function Tv(e){return Pm(e)&&U_(e)==wv}var Ev=Gg&&Gg.isMap,Dv=Ev?Vg(Ev):Tv,Ov=`[object Set]`;function kv(e){return Pm(e)&&U_(e)==Ov}var Av=Gg&&Gg.isSet,jv=Av?Vg(Av):kv,Mv=1,Nv=2,Pv=4,Fv=`[object Arguments]`,Iv=`[object Array]`,Lv=`[object Boolean]`,Rv=`[object Date]`,zv=`[object Error]`,Bv=`[object Function]`,Vv=`[object GeneratorFunction]`,Hv=`[object Map]`,Uv=`[object Number]`,Wv=`[object Object]`,Gv=`[object RegExp]`,Kv=`[object Set]`,qv=`[object String]`,Jv=`[object Symbol]`,Yv=`[object WeakMap]`,Xv=`[object ArrayBuffer]`,Zv=`[object DataView]`,Qv=`[object Float32Array]`,$v=`[object Float64Array]`,ey=`[object Int8Array]`,ty=`[object Int16Array]`,ny=`[object Int32Array]`,ry=`[object Uint8Array]`,iy=`[object Uint8ClampedArray]`,ay=`[object Uint16Array]`,oy=`[object Uint32Array]`,sy={};sy[Fv]=sy[Iv]=sy[Xv]=sy[Zv]=sy[Lv]=sy[Rv]=sy[Qv]=sy[$v]=sy[ey]=sy[ty]=sy[ny]=sy[Hv]=sy[Uv]=sy[Wv]=sy[Gv]=sy[Kv]=sy[qv]=sy[Jv]=sy[ry]=sy[iy]=sy[ay]=sy[oy]=!0,sy[zv]=sy[Bv]=sy[Yv]=!1;function cy(e,t,n,r,i,a){var o,s=t&Mv,c=t&Nv,l=t&Pv;if(n&&(o=i?n(e,r,i,a):n(e)),o!==void 0)return o;if(!th(e))return e;var u=ig(e);if(u){if(o=G_(e),!s)return m_(e,o)}else{var d=U_(e),f=d==Bv||d==Vv;if(lg(e))return p_(e,s);if(d==Wv||d==Fv||f&&!i){if(o=c||f?{}:Cv(e),!s)return c?C_(e,c_(o,e)):b_(e,r_(o,e))}else{if(!sy[d])return i?e:{};o=bv(e,d,s)}}a||=new Wh;var p=a.get(e);if(p)return p;a.set(e,o),jv(e)?e.forEach(function(r){o.add(cy(r,t,n,r,e,a))}):Dv(e)&&e.forEach(function(r,i){o.set(i,cy(r,t,n,i,e,a))});var m=u?void 0:(l?c?E_:T_:c?s_:n_)(e);return Gh(m||e,function(r,i){m&&(i=r,r=e[i]),Yh(o,i,cy(r,t,n,i,e,a))}),o}var ly=1,uy=4;function dy(e){return cy(e,ly|uy)}var fy=c(o(((e,t)=>{var n=Array.isArray,r=Object.keys,i=Object.prototype.hasOwnProperty,a=typeof Element<`u`;function o(e,t){if(e===t)return!0;if(e&&t&&typeof e==`object`&&typeof t==`object`){var s=n(e),c=n(t),l,u,d;if(s&&c){if(u=e.length,u!=t.length)return!1;for(l=u;l--!==0;)if(!o(e[l],t[l]))return!1;return!0}if(s!=c)return!1;var f=e instanceof Date,p=t instanceof Date;if(f!=p)return!1;if(f&&p)return e.getTime()==t.getTime();var m=e instanceof RegExp,h=t instanceof RegExp;if(m!=h)return!1;if(m&&h)return e.toString()==t.toString();var g=r(e);if(u=g.length,u!==r(t).length)return!1;for(l=u;l--!==0;)if(!i.call(t,g[l]))return!1;if(a&&e instanceof Element&&t instanceof Element)return e===t;for(l=u;l--!==0;)if(d=g[l],!(d===`_owner`&&e.$$typeof)&&!o(e[d],t[d]))return!1;return!0}return e!==e&&t!==t}t.exports=function(e,t){try{return o(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||e.number===-2146828260)return console.warn(`Warning: react-fast-compare does not handle circular references.`,e.name,e.message),!1;throw e}}}))()),py=4;function my(e){return cy(e,py)}function hy(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var gy=`[object Symbol]`;function _y(e){return typeof e==`symbol`||Pm(e)&&jm(e)==gy}var vy=`Expected a function`;function yy(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw TypeError(vy);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(yy.Cache||Vh),n}yy.Cache=Vh;var by=500;function xy(e){var t=yy(e,function(e){return n.size===by&&n.clear(),e}),n=t.cache;return t}var Sy=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Cy=/\\(\\)?/g,wy=xy(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(``),e.replace(Sy,function(e,n,r,i){t.push(r?i.replace(Cy,`$1`):n||e)}),t}),Ty=1/0;function Ey(e){if(typeof e==`string`||_y(e))return e;var t=e+``;return t==`0`&&1/e==-Ty?`-0`:t}var Dy=1/0,Oy=bm?bm.prototype:void 0,ky=Oy?Oy.toString:void 0;function Ay(e){if(typeof e==`string`)return e;if(ig(e))return hy(e,Ay)+``;if(_y(e))return ky?ky.call(e):``;var t=e+``;return t==`0`&&1/e==-Dy?`-0`:t}function jy(e){return e==null?``:Ay(e)}function My(e){return ig(e)?hy(e,Ey):_y(e)?[e]:m_(wy(jy(e)))}var Ny=o((e=>{var t=typeof Symbol==`function`&&Symbol.for,n=t?Symbol.for(`react.element`):60103,r=t?Symbol.for(`react.portal`):60106,i=t?Symbol.for(`react.fragment`):60107,a=t?Symbol.for(`react.strict_mode`):60108,o=t?Symbol.for(`react.profiler`):60114,s=t?Symbol.for(`react.provider`):60109,c=t?Symbol.for(`react.context`):60110,l=t?Symbol.for(`react.async_mode`):60111,u=t?Symbol.for(`react.concurrent_mode`):60111,d=t?Symbol.for(`react.forward_ref`):60112,f=t?Symbol.for(`react.suspense`):60113,p=t?Symbol.for(`react.suspense_list`):60120,m=t?Symbol.for(`react.memo`):60115,h=t?Symbol.for(`react.lazy`):60116,g=t?Symbol.for(`react.block`):60121,_=t?Symbol.for(`react.fundamental`):60117,v=t?Symbol.for(`react.responder`):60118,y=t?Symbol.for(`react.scope`):60119;function b(e){if(typeof e==`object`&&e){var t=e.$$typeof;switch(t){case n:switch(e=e.type,e){case l:case u:case i:case o:case a:case f:return e;default:switch(e&&=e.$$typeof,e){case c:case d:case h:case m:case s:return e;default:return t}}case r:return t}}}function x(e){return b(e)===u}e.AsyncMode=l,e.ConcurrentMode=u,e.ContextConsumer=c,e.ContextProvider=s,e.Element=n,e.ForwardRef=d,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=o,e.StrictMode=a,e.Suspense=f,e.isAsyncMode=function(e){return x(e)||b(e)===l},e.isConcurrentMode=x,e.isContextConsumer=function(e){return b(e)===c},e.isContextProvider=function(e){return b(e)===s},e.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===n},e.isForwardRef=function(e){return b(e)===d},e.isFragment=function(e){return b(e)===i},e.isLazy=function(e){return b(e)===h},e.isMemo=function(e){return b(e)===m},e.isPortal=function(e){return b(e)===r},e.isProfiler=function(e){return b(e)===o},e.isStrictMode=function(e){return b(e)===a},e.isSuspense=function(e){return b(e)===f},e.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===i||e===u||e===o||e===a||e===f||e===p||typeof e==`object`&&!!e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===_||e.$$typeof===v||e.$$typeof===y||e.$$typeof===g)},e.typeOf=b})),Py=o(((e,t)=>{t.exports=Ny()}));o(((e,t)=>{var n=Py(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=a,s[n.Memo]=o;function c(e){return n.isMemo(e)?o:s[e.$$typeof]||r}var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;function h(e,t,n){if(typeof t!=`string`){if(m){var r=p(t);r&&r!==m&&h(e,r,n)}var a=u(t);d&&(a=a.concat(d(t)));for(var o=c(e),s=c(t),g=0;g<a.length;++g){var _=a[g];if(!i[_]&&!(n&&n[_])&&!(s&&s[_])&&!(o&&o[_])){var v=f(t,_);try{l(e,_,v)}catch{}}}}return e}t.exports=h}))();function Fy(){return Fy=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fy.apply(this,arguments)}function Iy(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Ly(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ry(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}var zy=(0,_.createContext)(void 0);zy.displayName=`FormikContext`,zy.Provider,zy.Consumer;function By(){return(0,_.useContext)(zy)}var Vy=function(e){return Array.isArray(e)&&e.length===0},Hy=function(e){return typeof e==`function`},Uy=function(e){return typeof e==`object`&&!!e},Wy=function(e){return String(Math.floor(Number(e)))===e},Gy=function(e){return Object.prototype.toString.call(e)===`[object String]`},Ky=function(e){return _.Children.count(e)===0},qy=function(e){return Uy(e)&&Hy(e.then)};function Jy(e,t,n,r){r===void 0&&(r=0);for(var i=My(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function Yy(e,t,n){for(var r=my(e),i=r,a=0,o=My(t);a<o.length-1;a++){var s=o[a],c=Jy(e,o.slice(0,a+1));if(c&&(Uy(c)||Array.isArray(c)))i=i[s]=my(c);else{var l=o[a+1];i=i[s]=Wy(l)&&Number(l)>=0?[]:{}}}return(a===0?e:i)[o[a]]===n?e:(n===void 0?delete i[o[a]]:i[o[a]]=n,a===0&&n===void 0&&delete r[o[a]],r)}function Xy(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,a=Object.keys(e);i<a.length;i++){var o=a[i],s=e[o];Uy(s)?n.get(s)||(n.set(s,!0),r[o]=Array.isArray(s)?[]:{},Xy(s,t,n,r[o])):r[o]=t}return r}function Zy(e,t){switch(t.type){case`SET_VALUES`:return Fy({},e,{values:t.payload});case`SET_TOUCHED`:return Fy({},e,{touched:t.payload});case`SET_ERRORS`:return(0,fy.default)(e.errors,t.payload)?e:Fy({},e,{errors:t.payload});case`SET_STATUS`:return Fy({},e,{status:t.payload});case`SET_ISSUBMITTING`:return Fy({},e,{isSubmitting:t.payload});case`SET_ISVALIDATING`:return Fy({},e,{isValidating:t.payload});case`SET_FIELD_VALUE`:return Fy({},e,{values:Yy(e.values,t.payload.field,t.payload.value)});case`SET_FIELD_TOUCHED`:return Fy({},e,{touched:Yy(e.touched,t.payload.field,t.payload.value)});case`SET_FIELD_ERROR`:return Fy({},e,{errors:Yy(e.errors,t.payload.field,t.payload.value)});case`RESET_FORM`:return Fy({},e,t.payload);case`SET_FORMIK_STATE`:return t.payload(e);case`SUBMIT_ATTEMPT`:return Fy({},e,{touched:Xy(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case`SUBMIT_FAILURE`:return Fy({},e,{isSubmitting:!1});case`SUBMIT_SUCCESS`:return Fy({},e,{isSubmitting:!1});default:return e}}var Qy={},$y={};function eb(e){var t=e.validateOnChange,n=t===void 0||t,r=e.validateOnBlur,i=r===void 0||r,a=e.validateOnMount,o=a!==void 0&&a,s=e.isInitialValid,c=e.enableReinitialize,l=c!==void 0&&c,u=e.onSubmit,d=Ly(e,[`validateOnChange`,`validateOnBlur`,`validateOnMount`,`isInitialValid`,`enableReinitialize`,`onSubmit`]),f=Fy({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:u},d),p=(0,_.useRef)(f.initialValues),m=(0,_.useRef)(f.initialErrors||Qy),h=(0,_.useRef)(f.initialTouched||$y),g=(0,_.useRef)(f.initialStatus),v=(0,_.useRef)(!1),y=(0,_.useRef)({});(0,_.useEffect)(function(){return v.current=!0,function(){v.current=!1}},[]);var b=(0,_.useState)(0)[1],x=(0,_.useRef)({values:dy(f.initialValues),errors:dy(f.initialErrors)||Qy,touched:dy(f.initialTouched)||$y,status:dy(f.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0}),S=x.current,C=(0,_.useCallback)(function(e){var t=x.current;x.current=Zy(t,e),t!==x.current&&b(function(e){return e+1})},[]),w=(0,_.useCallback)(function(e,t){return new Promise(function(n,r){var i=f.validate(e,t);i==null?n(Qy):qy(i)?i.then(function(e){n(e||Qy)},function(e){r(e)}):n(i)})},[f.validate]),T=(0,_.useCallback)(function(e,t){var n=f.validationSchema,r=Hy(n)?n(t):n,i=t&&r.validateAt?r.validateAt(t,e):nb(e,r);return new Promise(function(e,t){i.then(function(){e(Qy)},function(n){n.name===`ValidationError`?e(tb(n)):t(n)})})},[f.validationSchema]),E=(0,_.useCallback)(function(e,t){return new Promise(function(n){return n(y.current[e].validate(t))})},[]),ee=(0,_.useCallback)(function(e){var t=Object.keys(y.current).filter(function(e){return Hy(y.current[e].validate)}),n=t.length>0?t.map(function(t){return E(t,Jy(e,t))}):[Promise.resolve(`DO_NOT_DELETE_YOU_WILL_BE_FIRED`)];return Promise.all(n).then(function(e){return e.reduce(function(e,n,r){return n===`DO_NOT_DELETE_YOU_WILL_BE_FIRED`||n&&(e=Yy(e,t[r],n)),e},{})})},[E]),te=(0,_.useCallback)(function(e){return Promise.all([ee(e),f.validationSchema?T(e):{},f.validate?w(e):{}]).then(function(e){var t=e[0],n=e[1],r=e[2];return gm.all([t,n,r],{arrayMerge:ib})})},[f.validate,f.validationSchema,ee,w,T]),ne=cb(function(e){return e===void 0&&(e=S.values),C({type:`SET_ISVALIDATING`,payload:!0}),te(e).then(function(e){return v.current&&(C({type:`SET_ISVALIDATING`,payload:!1}),C({type:`SET_ERRORS`,payload:e})),e})});(0,_.useEffect)(function(){o&&v.current===!0&&(0,fy.default)(p.current,f.initialValues)&&ne(p.current)},[o,ne]);var re=(0,_.useCallback)(function(e){var t=e&&e.values?e.values:p.current,n=e&&e.errors?e.errors:m.current?m.current:f.initialErrors||{},r=e&&e.touched?e.touched:h.current?h.current:f.initialTouched||{},i=e&&e.status?e.status:g.current?g.current:f.initialStatus;p.current=t,m.current=n,h.current=r,g.current=i;var a=function(){C({type:`RESET_FORM`,payload:{isSubmitting:!!e&&!!e.isSubmitting,errors:n,touched:r,status:i,values:t,isValidating:!!e&&!!e.isValidating,submitCount:e&&e.submitCount&&typeof e.submitCount==`number`?e.submitCount:0}})};if(f.onReset){var o=f.onReset(S.values,ye);qy(o)?o.then(a):a()}else a()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);(0,_.useEffect)(function(){v.current===!0&&!(0,fy.default)(p.current,f.initialValues)&&l&&(p.current=f.initialValues,re(),o&&ne(p.current))},[l,f.initialValues,re,o,ne]),(0,_.useEffect)(function(){l&&v.current===!0&&!(0,fy.default)(m.current,f.initialErrors)&&(m.current=f.initialErrors||Qy,C({type:`SET_ERRORS`,payload:f.initialErrors||Qy}))},[l,f.initialErrors]),(0,_.useEffect)(function(){l&&v.current===!0&&!(0,fy.default)(h.current,f.initialTouched)&&(h.current=f.initialTouched||$y,C({type:`SET_TOUCHED`,payload:f.initialTouched||$y}))},[l,f.initialTouched]),(0,_.useEffect)(function(){l&&v.current===!0&&!(0,fy.default)(g.current,f.initialStatus)&&(g.current=f.initialStatus,C({type:`SET_STATUS`,payload:f.initialStatus}))},[l,f.initialStatus,f.initialTouched]);var ie=cb(function(e){if(y.current[e]&&Hy(y.current[e].validate)){var t=Jy(S.values,e),n=y.current[e].validate(t);return qy(n)?(C({type:`SET_ISVALIDATING`,payload:!0}),n.then(function(e){return e}).then(function(t){C({type:`SET_FIELD_ERROR`,payload:{field:e,value:t}}),C({type:`SET_ISVALIDATING`,payload:!1})})):(C({type:`SET_FIELD_ERROR`,payload:{field:e,value:n}}),Promise.resolve(n))}return f.validationSchema?(C({type:`SET_ISVALIDATING`,payload:!0}),T(S.values,e).then(function(e){return e}).then(function(t){C({type:`SET_FIELD_ERROR`,payload:{field:e,value:Jy(t,e)}}),C({type:`SET_ISVALIDATING`,payload:!1})})):Promise.resolve()}),ae=(0,_.useCallback)(function(e,t){var n=t.validate;y.current[e]={validate:n}},[]),oe=(0,_.useCallback)(function(e){delete y.current[e]},[]),se=cb(function(e,t){return C({type:`SET_TOUCHED`,payload:e}),(t===void 0?i:t)?ne(S.values):Promise.resolve()}),ce=(0,_.useCallback)(function(e){C({type:`SET_ERRORS`,payload:e})},[]),D=cb(function(e,t){var r=Hy(e)?e(S.values):e;return C({type:`SET_VALUES`,payload:r}),(t===void 0?n:t)?ne(r):Promise.resolve()}),O=(0,_.useCallback)(function(e,t){C({type:`SET_FIELD_ERROR`,payload:{field:e,value:t}})},[]),le=cb(function(e,t,r){var i=Hy(t)?t(Jy(S.values,e)):t;return C({type:`SET_FIELD_VALUE`,payload:{field:e,value:i}}),(r===void 0?n:r)?ne(Yy(S.values,e,i)):Promise.resolve()}),ue=(0,_.useCallback)(function(e,t){var n=t,r=e,i;if(!Gy(e)){e.persist&&e.persist();var a=e.target?e.target:e.currentTarget,o=a.type,s=a.name,c=a.id,l=a.value,u=a.checked;a.outerHTML;var d=a.options,f=a.multiple;n=t||s||c,r=/number|range/.test(o)?(i=parseFloat(l),isNaN(i)?``:i):/checkbox/.test(o)?ob(Jy(S.values,n),u,l):d&&f?ab(d):l}n&&le(n,r)},[le,S.values]),de=cb(function(e){if(Gy(e))return function(t){return ue(t,e)};ue(e)}),fe=cb(function(e,t,n){return t===void 0&&(t=!0),C({type:`SET_FIELD_TOUCHED`,payload:{field:e,value:t}}),(n===void 0?i:n)?ne(S.values):Promise.resolve()}),pe=(0,_.useCallback)(function(e,t){e.persist&&e.persist();var n=e.target,r=n.name,i=n.id;n.outerHTML,fe(t||r||i,!0)},[fe]),k=cb(function(e){if(Gy(e))return function(t){return pe(t,e)};pe(e)}),me=(0,_.useCallback)(function(e){Hy(e)?C({type:`SET_FORMIK_STATE`,payload:e}):C({type:`SET_FORMIK_STATE`,payload:function(){return e}})},[]),he=(0,_.useCallback)(function(e){C({type:`SET_STATUS`,payload:e})},[]),ge=(0,_.useCallback)(function(e){C({type:`SET_ISSUBMITTING`,payload:e})},[]),_e=cb(function(){return C({type:`SUBMIT_ATTEMPT`}),ne().then(function(e){var t=e instanceof Error;if(!t&&Object.keys(e).length===0){var n;try{if(n=be(),n===void 0)return}catch(e){throw e}return Promise.resolve(n).then(function(e){return v.current&&C({type:`SUBMIT_SUCCESS`}),e}).catch(function(e){if(v.current)throw C({type:`SUBMIT_FAILURE`}),e})}if(v.current&&(C({type:`SUBMIT_FAILURE`}),t))throw e})}),ve=cb(function(e){e&&e.preventDefault&&Hy(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&Hy(e.stopPropagation)&&e.stopPropagation(),_e().catch(function(e){console.warn(`Warning: An unhandled error was caught from submitForm()`,e)})}),ye={resetForm:re,validateForm:ne,validateField:ie,setErrors:ce,setFieldError:O,setFieldTouched:fe,setFieldValue:le,setStatus:he,setSubmitting:ge,setTouched:se,setValues:D,setFormikState:me,submitForm:_e},be=cb(function(){return u(S.values,ye)}),xe=cb(function(e){e&&e.preventDefault&&Hy(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&Hy(e.stopPropagation)&&e.stopPropagation(),re()}),Se=(0,_.useCallback)(function(e){return{value:Jy(S.values,e),error:Jy(S.errors,e),touched:!!Jy(S.touched,e),initialValue:Jy(p.current,e),initialTouched:!!Jy(h.current,e),initialError:Jy(m.current,e)}},[S.errors,S.touched,S.values]),Ce=(0,_.useCallback)(function(e){return{setValue:function(t,n){return le(e,t,n)},setTouched:function(t,n){return fe(e,t,n)},setError:function(t){return O(e,t)}}},[le,fe,O]),we=(0,_.useCallback)(function(e){var t=Uy(e),n=t?e.name:e,r=Jy(S.values,n),i={name:n,value:r,onChange:de,onBlur:k};if(t){var a=e.type,o=e.value,s=e.as,c=e.multiple;a===`checkbox`?o===void 0?i.checked=!!r:(i.checked=!!(Array.isArray(r)&&~r.indexOf(o)),i.value=o):a===`radio`?(i.checked=r===o,i.value=o):s===`select`&&c&&(i.value=i.value||[],i.multiple=!0)}return i},[k,de,S.values]),Te=(0,_.useMemo)(function(){return!(0,fy.default)(p.current,S.values)},[p.current,S.values]),Ee=(0,_.useMemo)(function(){return s===void 0||Te?S.errors&&Object.keys(S.errors).length===0:s!==!1&&Hy(s)?s(f):s},[s,Te,S.errors,f]);return Fy({},S,{initialValues:p.current,initialErrors:m.current,initialTouched:h.current,initialStatus:g.current,handleBlur:k,handleChange:de,handleReset:xe,handleSubmit:ve,resetForm:re,setErrors:ce,setFormikState:me,setFieldTouched:fe,setFieldValue:le,setFieldError:O,setStatus:he,setSubmitting:ge,setTouched:se,setValues:D,submitForm:_e,validateForm:ne,validateField:ie,isValid:Ee,dirty:Te,unregisterField:oe,registerField:ae,getFieldProps:we,getFieldMeta:Se,getFieldHelpers:Ce,validateOnBlur:i,validateOnChange:n,validateOnMount:o})}function tb(e){var t={};if(e.inner){if(e.inner.length===0)return Yy(t,e.path,e.message);for(var n=e.inner,r=Array.isArray(n),i=0,n=r?n:n[Symbol.iterator]();;){var a;if(r){if(i>=n.length)break;a=n[i++]}else{if(i=n.next(),i.done)break;a=i.value}var o=a;Jy(t,o.path)||(t=Yy(t,o.path,o.message))}}return t}function nb(e,t,n,r){n===void 0&&(n=!1);var i=rb(e);return t[n?`validateSync`:`validate`](i,{abortEarly:!1,context:r||i})}function rb(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);t[r]=Array.isArray(e[r])===!0?e[r].map(function(e){return Array.isArray(e)===!0||Vm(e)?rb(e):e===``?void 0:e}):Vm(e[r])?rb(e[r]):e[r]===``?void 0:e[r]}return t}function ib(e,t,n){var r=e.slice();return t.forEach(function(t,i){r[i]===void 0?r[i]=n.clone!==!1&&n.isMergeableObject(t)?gm(Array.isArray(t)?[]:{},t,n):t:n.isMergeableObject(t)?r[i]=gm(e[i],t,n):e.indexOf(t)===-1&&r.push(t)}),r}function ab(e){return Array.from(e).filter(function(e){return e.selected}).map(function(e){return e.value})}function ob(e,t,n){if(typeof e==`boolean`)return!!t;var r=[],i=!1,a=-1;if(Array.isArray(e))r=e,a=e.indexOf(n),i=a>=0;else if(!n||n==`true`||n==`false`)return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,a).concat(r.slice(a+1)):r}var sb=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0?_.useLayoutEffect:_.useEffect;function cb(e){var t=(0,_.useRef)(e);return sb(function(){t.current=e}),(0,_.useCallback)(function(){var e=[...arguments];return t.current.apply(void 0,e)},[])}var lb=(0,_.forwardRef)(function(e,t){var n=e.action,r=Ly(e,[`action`]),i=n??`#`,a=By(),o=a.handleReset,s=a.handleSubmit;return(0,_.createElement)(`form`,Fy({onSubmit:s,ref:t,onReset:o,action:i},r))});lb.displayName=`Form`;var ub=function(e,t,n){var r=mb(e),i=r[t];return r.splice(t,1),r.splice(n,0,i),r},db=function(e,t,n){var r=mb(e),i=r[t];return r[t]=r[n],r[n]=i,r},fb=function(e,t,n){var r=mb(e);return r.splice(t,0,n),r},pb=function(e,t,n){var r=mb(e);return r[t]=n,r},mb=function(e){if(!e)return[];if(Array.isArray(e))return[].concat(e);var t=Object.keys(e).map(function(e){return parseInt(e)}).reduce(function(e,t){return t>e?t:e},0);return Array.from(Fy({},e,{length:t+1}))},hb=function(e,t){var n=typeof e==`function`?e:t;return function(e){return Array.isArray(e)||Uy(e)?n(mb(e)):e}},gb=function(e){Iy(t,e);function t(t){var n=e.call(this,t)||this;return n.updateArrayField=function(e,t,r){var i=n.props,a=i.name,o=i.formik.setFormikState;o(function(n){var i=hb(r,e),o=hb(t,e),s=Yy(n.values,a,e(Jy(n.values,a))),c=r?i(Jy(n.errors,a)):void 0,l=t?o(Jy(n.touched,a)):void 0;return Vy(c)&&(c=void 0),Vy(l)&&(l=void 0),Fy({},n,{values:s,errors:r?Yy(n.errors,a,c):n.errors,touched:t?Yy(n.touched,a,l):n.touched})})},n.push=function(e){return n.updateArrayField(function(t){return[].concat(mb(t),[dy(e)])},!1,!1)},n.handlePush=function(e){return function(){return n.push(e)}},n.swap=function(e,t){return n.updateArrayField(function(n){return db(n,e,t)},!0,!0)},n.handleSwap=function(e,t){return function(){return n.swap(e,t)}},n.move=function(e,t){return n.updateArrayField(function(n){return ub(n,e,t)},!0,!0)},n.handleMove=function(e,t){return function(){return n.move(e,t)}},n.insert=function(e,t){return n.updateArrayField(function(n){return fb(n,e,t)},function(t){return fb(t,e,null)},function(t){return fb(t,e,null)})},n.handleInsert=function(e,t){return function(){return n.insert(e,t)}},n.replace=function(e,t){return n.updateArrayField(function(n){return pb(n,e,t)},!1,!1)},n.handleReplace=function(e,t){return function(){return n.replace(e,t)}},n.unshift=function(e){var t=-1;return n.updateArrayField(function(n){var r=n?[e].concat(n):[e];return t=r.length,r},function(e){return e?[null].concat(e):[null]},function(e){return e?[null].concat(e):[null]}),t},n.handleUnshift=function(e){return function(){return n.unshift(e)}},n.handleRemove=function(e){return function(){return n.remove(e)}},n.handlePop=function(){return function(){return n.pop()}},n.remove=n.remove.bind(Ry(n)),n.pop=n.pop.bind(Ry(n)),n}var n=t.prototype;return n.componentDidUpdate=function(e){this.props.validateOnChange&&this.props.formik.validateOnChange&&!(0,fy.default)(Jy(e.formik.values,e.name),Jy(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(e){var t;return this.updateArrayField(function(n){var r=n?mb(n):[];return t||=r[e],Hy(r.splice)&&r.splice(e,1),Hy(r.every)&&r.every(function(e){return e===void 0})?[]:r},!0,!0),t},n.pop=function(){var e;return this.updateArrayField(function(t){var n=t.slice();return e||=n&&n.pop&&n.pop(),n},!0,!0),e},n.render=function(){var e={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},t=this.props,n=t.component,r=t.render,i=t.children,a=t.name,o=t.formik,s=Ly(o,[`validate`,`validationSchema`]),c=Fy({},e,{form:s,name:a});return n?(0,_.createElement)(n,c):r?r(c):i?typeof i==`function`?i(c):Ky(i)?null:_.Children.only(i):null},t}(_.Component);gb.defaultProps={validateOnChange:!0};var _b=e=>typeof e==`number`&&!isNaN(e),vb=e=>typeof e==`string`,yb=e=>typeof e==`function`,bb=e=>vb(e)||_b(e),xb=e=>(0,_.isValidElement)(e)||vb(e)||yb(e)||_b(e);function Sb(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight=`initial`,i.height=r+`px`,i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height=`0`,i.padding=`0`,i.margin=`0`,setTimeout(t,n)})})}function Cb({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:a,position:o,preventExitTransition:s,done:c,nodeRef:l,isIn:u,playToast:d}){let f=n?`${e}--${o}`:e,p=n?`${t}--${o}`:t,m=(0,_.useRef)(0);return(0,_.useLayoutEffect)(()=>{let e=l.current,t=f.split(` `),n=r=>{r.target===l.current&&(d(),e.removeEventListener(`animationend`,n),e.removeEventListener(`animationcancel`,n),m.current===0&&r.type!==`animationcancel`&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener(`animationend`,n),e.addEventListener(`animationcancel`,n)},[]),(0,_.useEffect)(()=>{let e=l.current,t=()=>{e.removeEventListener(`animationend`,t),r?Sb(e,c,i):c()};u||(s?t():(m.current=1,e.className+=` ${p}`,e.addEventListener(`animationend`,t)))},[u]),_.createElement(_.Fragment,null,a)}}var wb=1,Tb=()=>`${wb++}`,Eb=new Map,Db=[],Ob=new Set,kb=()=>Eb.size>0,Ab=(e,{containerId:t})=>Eb.get(t||1)?.toasts.get(e);function jb(e,t){var n;if(t)return!!((n=Eb.get(t))!=null&&n.isToastActive(e));let r=!1;return Eb.forEach(t=>{t.isToastActive(e)&&(r=!0)}),r}function Mb(e){if(!kb()){Db=Db.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||bb(e))Eb.forEach(t=>{t.removeToast(e)});else if(e&&(`containerId`in e||`id`in e)){let t=Eb.get(e.containerId);t?t.removeToast(e.id):Eb.forEach(t=>{t.removeToast(e.id)})}}var Nb=(e={})=>{Eb.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function Pb(e,t){xb(e)&&(kb()||Db.push({content:e,options:t}),Eb.forEach(n=>{n.buildToast(e,t)}))}function Fb(e,t){Eb.forEach(n=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===n.id)&&n.toggle(e,t?.id)})}function Ib(e){return Ob.add(e),()=>{Ob.delete(e)}}function Lb(e){return e&&(vb(e.toastId)||_b(e.toastId))?e.toastId:Tb()}function Rb(e,t){return Pb(e,t),t.toastId}function zb(e,t){return{...t,type:t&&t.type||e,toastId:Lb(t)}}function Bb(e){return(t,n)=>Rb(t,zb(e,n))}function $(e,t){return Rb(e,zb(`default`,t))}$.loading=(e,t)=>Rb(e,zb(`default`,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function Vb(e,{pending:t,error:n,success:r},i){let a;t&&(a=vb(t)?$.loading(t,i):$.loading(t.render,{...i,...t}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(e,t,n)=>{if(t==null){$.dismiss(a);return}let r={type:e,...o,...i,data:n},s=vb(t)?{render:t}:t;return a?$.update(a,{...r,...s}):$(s.render,{...r,...s}),n},c=yb(e)?e():e;return c.then(e=>s(`success`,r,e)).catch(e=>s(`error`,n,e)),c}$.promise=Vb,$.success=Bb(`success`),$.info=Bb(`info`),$.error=Bb(`error`),$.warning=Bb(`warning`),$.warn=$.warning,$.dark=(e,t)=>Rb(e,zb(`default`,{theme:`dark`,...t}));function Hb(e){Mb(e)}$.dismiss=Hb,$.clearWaitingQueue=Nb,$.isActive=jb,$.update=(e,t={})=>{let n=Ab(e,t);if(n){let{props:r,content:i}=n,a={delay:100,...r,...t,toastId:t.toastId||e,updateId:Tb()};a.toastId!==e&&(a.staleId=e);let o=a.render||i;delete a.render,Rb(o,a)}},$.done=e=>{$.update(e,{progress:1})},$.onChange=Ib,$.play=e=>Fb(!0,e),$.pause=e=>Fb(!1,e);var Ub=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t});Cb(Ub(`bounce`,!0)),Cb(Ub(`slide`,!0)),Cb(Ub(`zoom`)),Cb(Ub(`flip`));var Wb=A.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
  background: rgba(17, 17, 17, 0.45);
  backdrop-filter: blur(5px);
`,Gb=A.div`
  position: relative;
  width: 100%;
  max-width: 360px;
  padding: 30px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: 0 20px 55px rgba(0, 0, 0, 0.18);
  animation: modalAppear 0.2s ease;

  @keyframes modalAppear {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.98);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media screen and (min-width: 564px) {
    max-width: 450px;
    padding: 38px;
    border-radius: 17px;
  }

  @media screen and (min-width: 1160px) {
    max-width: 500px;
    padding: 42px;
    border-radius: 18px;
  }
`,Kb=A.button`
  position: absolute;
  top: 11px;
  right: 11px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #f7f7f7;
  color: #333333;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #eeeeee;
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
`,qb=A.h2`
  margin: 0 0 22px;
  color: #111111;
  font-size: 25px;
  font-weight: 800;
  letter-spacing: -0.5px;
  text-align: center;

  @media screen and (min-width: 564px) {
    margin-bottom: 27px;
    font-size: 29px;
  }

  @media screen and (min-width: 1160px) {
    margin-bottom: 30px;
    font-size: 32px;
  }
`,Jb=A.form`
  display: flex;
  flex-direction: column;
  gap: 11px;

  @media screen and (min-width: 564px) {
    gap: 14px;
  }

  @media screen and (min-width: 1160px) {
    gap: 16px;
  }
`,Yb=A.input`
  width: 100%;
  height: 44px;
  padding: 0 14px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  outline: none;
  background: #fafafa;
  color: #111111;
  font-size: 14px;
  box-sizing: border-box;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    background: #ffffff;
    border-color: #ffb36c;
    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.15);
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
`,Xb=A.button`
  width: 92px;
  height: 37px;
  margin: 4px auto 0;
  border: none;
  border-radius: 8px;
  background: #ffb36c;
  color: #111111;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(255, 179, 108, 0.25);
  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: #ffa451;
    transform: translateY(-1px);
    box-shadow: 0 7px 18px rgba(255, 179, 108, 0.35);
  }

  &:active {
    transform: translateY(0);
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
`,Zb=A.p`
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
`,Qb=A.a`
  color: #111111;
  font-weight: 700;

  &:hover {
    color: #ff9d4d;
  }
`,$b=A.div`
  position: relative;
  width: 100%;
`,ex=A.button`
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

  color: #777777;

  cursor: pointer;

  transform: translateY(-50%);

  &:hover {
    color: #111111;
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
`;function tx({onClose:e,onSubmit:t}){let[n,r]=(0,_.useState)(!1),i=eb({initialValues:{username:``,email:``,password:``},onSubmit:(n,{resetForm:r})=>{if(n.password.length<8){$.error(`Password must contain at least 8 characters!`);return}t?t(n):(localStorage.setItem(`weatherUser`,JSON.stringify(n)),$.success(`Registration successful!`)),r(),e()}});return(0,j.jsx)(Wb,{onClick:t=>{t.target===t.currentTarget&&e()},children:(0,j.jsxs)(Gb,{children:[(0,j.jsx)(Kb,{type:`button`,onClick:e,"aria-label":`Close`,children:(0,j.jsx)(xr.FiX,{size:24})}),(0,j.jsx)(qb,{children:`Sign up`}),(0,j.jsxs)(Jb,{onSubmit:i.handleSubmit,children:[(0,j.jsx)(Yb,{type:`text`,name:`username`,placeholder:`Username`,value:i.values.username,onChange:i.handleChange,required:!0}),(0,j.jsx)(Yb,{type:`email`,name:`email`,placeholder:`E-Mail`,value:i.values.email,onChange:i.handleChange,required:!0}),(0,j.jsxs)($b,{children:[(0,j.jsx)(Yb,{type:n?`text`:`password`,name:`password`,placeholder:`Password`,value:i.values.password,onChange:i.handleChange,minLength:8,required:!0}),(0,j.jsx)(ex,{type:`button`,onClick:()=>r(e=>!e),"aria-label":n?`Hide password`:`Show password`,children:n?(0,j.jsx)(xr.FiEyeOff,{}):(0,j.jsx)(xr.FiEye,{})})]}),(0,j.jsx)(Xb,{type:`submit`,children:`Sign up`})]}),(0,j.jsxs)(Zb,{children:[`Already have an account?`,` `,(0,j.jsx)(Qb,{href:`#login`,children:`Log In`})]})]})})}var nx=A.div`
  position: fixed;
  inset: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  background: rgba(17, 17, 17, 0.45);
  backdrop-filter: blur(5px);
`,rx=A.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  padding: 21px 25px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 14px;
  box-sizing: border-box;
  box-shadow: 0 20px 55px rgba(0, 0, 0, 0.18);
  animation: profileAppear 0.2s ease;
  @keyframes profileAppear {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  @media screen and (min-width: 564px) {
    max-width: 370px;
    padding: 20px 25px;
  }
  @media screen and (min-width: 1160px) {
    max-width: 450px;
    padding: 32px 36px;
    border-radius: 18px;
  }
`,ix=A.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 29px;
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #f7f7f7;
  color: #333333;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
  &:hover {
    background: #eeeeee;
    transform: rotate(90deg);
  }
  @media screen and (min-width: 1160px) {
    top: 14px;
    right: 14px;
    width: 34px;
    height: 34px;
  }
`,ax=A.h2`
  margin: 0 0 13px;
  color: #111111;
  font-size: 23px;
  font-weight: 800;
  letter-spacing: -0.5px;
  text-align: center;
  @media screen and (min-width: 564px) {
    margin-bottom: 12px;
    font-size: 23px;
  }
  @media screen and (min-width: 1160px) {
    margin-bottom: 20px;
    font-size: 29px;
  }
`,ox=A.div`
  position: relative;
  width: 76px;
  height: 76px;
  margin: 0 auto 13px;
  @media screen and (min-width: 564px) {
    width: 80px;
    height: 80px;
    margin-bottom: 12px;
  }
  @media screen and (min-width: 1160px) {
    width: 105px;
    height: 105px;
    margin-bottom: 20px;
  }
`,sx=A.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border: 3px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.12);
`,cx=A.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #ffb36c;
  color: #111111;
  font-size: 30px;
  font-weight: 800;
  box-shadow: 0 7px 20px rgba(255, 179, 108, 0.25);
  @media screen and (min-width: 564px) {
    font-size: 32px;
  }
  @media screen and (min-width: 1160px) {
    font-size: 42px;
  }
`,lx=A.label`
  position: absolute;
  right: -2px;
  bottom: -2px;
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;
  border-radius: 50%;
  background: #ffb36c;
  color: #111111;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  transition:
    background 0.2s ease,
    transform 0.2s ease;
  &:hover {
    background: #ffa451;
    transform: scale(1.08);
  }
  @media screen and (min-width: 564px) {
    width: 28px;
    height: 28px;
  }
  @media screen and (min-width: 1160px) {
    width: 34px;
    height: 34px;
  }
`,ux=A.input`
  display: none;
`,dx=A.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media screen and (min-width: 1160px) {
    gap: 10px;
  }
`,fx=A.div`
  padding: 8px 10px;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  background: #fafafa;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;
  &:hover {
    background: #ffffff;
    border-color: #ffcfaa;
  }
  @media screen and (min-width: 564px) {
    padding: 7px 10px;
  }
  @media screen and (min-width: 1160px) {
    padding: 12px 14px;
    border-radius: 10px;
  }
`,px=A.div`
  margin-bottom: 2px;
  color: #999999;
  font-size: 9px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  @media screen and (min-width: 1160px) {
    margin-bottom: 4px;
    font-size: 10px;
  }
`,mx=A.div`
  color: #111111;
  font-size: 12px;
  font-weight: 600;
  word-break: break-word;
  @media screen and (min-width: 1160px) {
    font-size: 14px;
  }
`,hx=A.input`
  width: 100%;
  height: 33px;
  padding: 0 9px;
  border: 1px solid #dddddd;
  border-radius: 6px;
  outline: none;
  background: #ffffff;
  color: #111111;
  font-size: 12px;
  box-sizing: border-box;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
  &:focus {
    border-color: #ffb36c;
    box-shadow: 0 0 0 2px rgba(255, 179, 108, 0.15);
  }
  @media screen and (min-width: 564px) {
    height: 32px;
    font-size: 12px;
  }
  @media screen and (min-width: 1160px) {
    height: 42px;
    font-size: 14px;
    padding: 0 12px;
  }
`,gx=A.button`
  width: 100%;
  height: 35px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  border-radius: 7px;
  background: #ffb36c;
  color: #111111;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
  &:hover {
    background: #ffa451;
    transform: translateY(-1px);
  }
  @media screen and (min-width: 564px) {
    height: 35px;
    margin-top: 9px;
    font-size: 12px;
  }
  @media screen and (min-width: 1160px) {
    height: 42px;
    margin-top: 16px;
    font-size: 14px;
  }
`,_x=A.button`
  width: 100%;
  height: 35px;
  margin-top: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  border-radius: 7px;
  background: #ffb36c;
  color: #111111;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
  &:hover {
    background: #ffa451;
    transform: translateY(-1px);
  }
  @media screen and (min-width: 564px) {
    height: 35px;
    margin-top: 9px;
    font-size: 12px;
  }
  @media screen and (min-width: 1160px) {
    height: 42px;
    margin-top: 16px;
    font-size: 14px;
  }
`,vx=A.button`
  width: 100%;
  height: 35px;
  margin-top: 6px;
  border: 1px solid #ff6b6b;
  border-radius: 7px;
  background: #ffffff;
  color: #ff6b6b;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
  &:hover {
    background: #ff6b6b;
    color: #ffffff;
    transform: translateY(-1px);
  }
  @media screen and (min-width: 564px) {
    height: 35px;
    font-size: 12px;
  }
  @media screen and (min-width: 1160px) {
    height: 42px;
    margin-top: 10px;
    font-size: 14px;
  }
`,yx=A.div`
  position: relative;
  width: 100%;
`,bx=A.button`
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
  color: #777777;
  cursor: pointer;
  transform: translateY(-50%);

  &:hover {
    color: #111111;
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 564px) {
    right: 9px;

    svg {
      width: 19px;
      height: 19px;
    }
  }

  @media screen and (min-width: 1160px) {
    right: 10px;

    svg {
      width: 21px;
      height: 21px;
    }
  }
`;function xx({onClose:e,onAvatarChange:t,onUserUpdate:n,onLogout:r}){let i=JSON.parse(localStorage.getItem(`weatherUser`))||{},[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(i),[l,u]=(0,_.useState)(localStorage.getItem(`weatherAvatar`)||null),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)({username:i.username||``,email:i.email||``,password:i.password||``}),h=e=>{let n=e.target.files[0];if(!n)return;if(!n.type.startsWith(`image/`)){$.error(`Please select an image`);return}let r=new FileReader;r.onloadend=()=>{let e=r.result;localStorage.setItem(`weatherAvatar`,e),u(e),t&&t(e),$.success(`Avatar updated!`)},r.readAsDataURL(n)},g=e=>{let{name:t,value:n}=e.target;m(e=>({...e,[t]:n}))};return(0,j.jsx)(nx,{onClick:t=>{t.target===t.currentTarget&&e()},children:(0,j.jsxs)(rx,{children:[(0,j.jsx)(ix,{type:`button`,onClick:e,"aria-label":`Close`,children:(0,j.jsx)(xr.FiX,{size:24})}),(0,j.jsx)(ax,{children:`My profile`}),(0,j.jsxs)(ox,{children:[l?(0,j.jsx)(sx,{src:l,alt:`Profile avatar`}):(0,j.jsx)(cx,{children:s.username?.charAt(0).toUpperCase()||`U`}),(0,j.jsx)(lx,{htmlFor:`avatar-upload`,children:(0,j.jsx)(xr.FiCamera,{size:18})}),(0,j.jsx)(ux,{id:`avatar-upload`,type:`file`,accept:`image/*`,onChange:h})]}),(0,j.jsxs)(dx,{children:[(0,j.jsxs)(fx,{children:[(0,j.jsx)(px,{children:`Username`}),d?(0,j.jsx)(hx,{type:`text`,name:`username`,value:p.username,onChange:g,placeholder:`Username`}):(0,j.jsx)(mx,{children:s.username||`—`})]}),(0,j.jsxs)(fx,{children:[(0,j.jsx)(px,{children:`E-Mail`}),d?(0,j.jsx)(hx,{type:`email`,name:`email`,value:p.email,onChange:g,placeholder:`E-Mail`}):(0,j.jsx)(mx,{children:s.email||`—`})]}),(0,j.jsxs)(fx,{children:[(0,j.jsx)(px,{children:`Password`}),d?(0,j.jsxs)(yx,{children:[(0,j.jsx)(hx,{type:a?`text`:`password`,name:`password`,value:p.password,onChange:g,placeholder:`Password`}),(0,j.jsx)(bx,{type:`button`,onClick:()=>o(e=>!e),"aria-label":a?`Hide password`:`Show password`,children:a?(0,j.jsx)(xr.FiEyeOff,{}):(0,j.jsx)(xr.FiEye,{})})]}):(0,j.jsx)(mx,{children:s.password?`•`.repeat(s.password.length):`—`})]})]}),d?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(_x,{type:`button`,onClick:()=>{if(!p.username.trim()||!p.email.trim()||!p.password.trim()){$.error(`Please fill in all fields`);return}let e={username:p.username.trim(),email:p.email.trim(),password:p.password};localStorage.setItem(`weatherUser`,JSON.stringify(e)),c(e),n&&n(e),f(!1),$.success(`Profile updated!`)},children:[(0,j.jsx)(xr.FiCheck,{size:18}),`Save changes`]}),(0,j.jsx)(gx,{type:`button`,onClick:()=>{m({username:s.username||``,email:s.email||``,password:s.password||``}),f(!1)},children:`Cancel`})]}):(0,j.jsxs)(gx,{type:`button`,onClick:()=>f(!0),children:[(0,j.jsx)(xr.FiEdit2,{size:18}),`Edit profile`]}),(0,j.jsx)(vx,{type:`button`,onClick:()=>{r&&r()},children:`Log out`})]})})}var Sx=Zn`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;

    font-family:
      Inter,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      sans-serif;

    background: #ffffff;
    color: #111111;

    -webkit-font-smoothing: antialiased;
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
`,Cx=A.div`
  min-height: 100vh;
  width: 100%;

  background: #ffffff;
  color: #111111;

  box-sizing: border-box;
`;A.main`
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
`;function wx(){let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)([]),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(()=>localStorage.getItem(`temperatureUnit`)||`C`),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let e=localStorage.getItem(`weatherUser`),n=localStorage.getItem(`weatherAvatar`),i=localStorage.getItem(`weatherFavorites`);if(e&&t(JSON.parse(e)),n&&r(n),i){let e=JSON.parse(i);s(e),a(e)}d(!0)},[]),(0,_.useEffect)(()=>{u&&localStorage.setItem(`weatherFavorites`,JSON.stringify(o))},[o,u]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Sx,{}),(0,j.jsxs)(Cx,{children:[(0,j.jsx)(gr,{user:e,avatar:n,onSignUp:()=>{p(!0)},onProfile:()=>{e?h(!0):p(!0)}}),(0,j.jsx)(Hr,{onCityAdd:e=>{a(t=>t.some(t=>t.id===e.id)?t:[...t,e])}}),(0,j.jsx)(hp,{cities:i,favorites:o,temperatureUnit:c,onTemperatureUnitChange:()=>{l(e=>{let t=e===`C`?`F`:`C`;return localStorage.setItem(`temperatureUnit`,t),t})},onRefresh:async e=>{try{let t=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e.latitude}&lon=${e.longitude}&appid=b5ad39bd417cd476cc1c17d9b2b53496&units=metric`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let n=await t.json(),r={...e,temperature:n.main.temp,icon:n.weather[0].icon,description:n.weather[0].description,timezone:n.timezone};a(t=>t.map(t=>t.id===e.id?r:t)),s(t=>t.map(t=>t.id===e.id?r:t))}catch(e){console.error(`Помилка оновлення погоди:`,e)}},onFavorite:e=>{s(t=>{if(t.some(t=>t.id===e)){let n=t.filter(t=>t.id!==e);return localStorage.setItem(`weatherFavorites`,JSON.stringify(n)),n}let n=i.find(t=>t.id===e);if(!n)return t;let r=[...t,n];return localStorage.setItem(`weatherFavorites`,JSON.stringify(r)),r})},onDelete:e=>{a(t=>t.filter(t=>t.id!==e)),s(t=>t.filter(t=>t.id!==e))}}),(0,j.jsx)(jp,{}),(0,j.jsx)(Wp,{}),(0,j.jsx)(am,{}),f&&(0,j.jsx)(tx,{onClose:()=>{p(!1)},onSubmit:e=>{localStorage.setItem(`weatherUser`,JSON.stringify(e)),t(e),p(!1)}}),m&&e&&(0,j.jsx)(xx,{user:e,avatar:n,onClose:()=>{h(!1)},onUserUpdate:e=>{localStorage.setItem(`weatherUser`,JSON.stringify(e)),t(e)},onAvatarChange:e=>{localStorage.setItem(`weatherAvatar`,e),r(e)},onLogout:()=>{localStorage.removeItem(`weatherUser`),localStorage.removeItem(`weatherAvatar`),t(null),r(null),h(!1)}})]})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,j.jsx)(_.StrictMode,{children:(0,j.jsx)(wx,{})}));