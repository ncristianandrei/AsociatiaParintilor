"use strict";(this.webpackChunk_hz_project_x=this.webpackChunk_hz_project_x||[]).push([[24658],{648284:(t,r,e)=>{e.d(r,{El:()=>f,LU:()=>h,X5:()=>l});var o=e(541444),s=e(27522),a=e(835147),n=e(279402),i=e(842272),c=e(490697),u=e(251077);const l=3,d=["authorization",/.*token.*/],f=[a.o.TOO_MANY_REQUESTS,a.o.LOCKED,a.o.INTERNAL_SERVER_ERROR,a.o.BAD_GATEWAY,a.o.SERVICE_UNAVAILABLE,a.o.GATEWAY_TIMEOUT,a.o.INSUFFICIENT_STORAGE,a.o.NETWORK_FAILURE];class h{static isErrorStatus(t){return t<a.o.OK||t>=a.o.MULTIPLE_CHOICES}static isHttpError(t){return void 0!==t.headers}static isAutomaticRetryErrorStatus(t,r){return t instanceof n.o&&r.includes(t.httpStatus)}static isAutomaticRetryErrorStatusDCX(t,r){return!!t.response&&r.includes(t.response.statusCode)}static getAdobeDCXError(t){let r;return(0,u.isAdobeDCXError)(t)&&(r=t),t instanceof i.R&&(0,u.isAdobeDCXError)(t.previousError)&&(r=t.previousError),r}static isUserRetryErrorStatus(t){return f.indexOf(t)>-1}static isUserRetryHttpError(t){if(t){if(t instanceof n.o)return h.isUserRetryErrorStatus(t.httpStatus);if(t instanceof i.R&&t.previousError)return h.isUserRetryHttpError(t.previousError)}return!1}static isFetchFailedError(t){if(t){const r=void 0!==t.stack&&Boolean(t.stack.match(/^TypeError/))&&"Failed to fetch"===t.message,e=Boolean(t.message.match(/^NetworkError when attempting to fetch/)),o=Boolean(t.message.match(/^Load failed/));if(r||e||o)return!0;if(t instanceof i.R&&t.previousError)return h.isFetchFailedError(t.previousError)}return!1}static async getResponseBody(t){let r;try{r=await t.json()}catch{}return r}static makeStandardHeaders(t,r,e=null){const s={"x-api-key":r,"Accept-Encoding":"br;q=1.0, gzip;q=0.9, *;q=0.5","x-request-id":(0,o.Z)()};return t&&Object.assign(s,{Authorization:"Bearer "+t}),e&&Object.assign(s,{"x-product":e}),s}static parseLinkHeader(t){if(0===t.length)return;const r={};return(0,s.parse)(t).refs.reduce(((t,e)=>(r[e.rel]={rel:e.rel,url:e.uri},e.templated&&(r[e.rel].templated="true"===e.templated.toLowerCase()),r)),r),r}static defaultDelayHook(t){if(t instanceof n.o&&t.headers.retryAfter)try{const r=t.headers.retryAfter;if(r){const t=1e3*Number.parseFloat(r);if(!isNaN(t))return{type:c.Zx.MINIMUM,value:t}}}catch(t){}}static defaultShouldRetryHook(t){return h.isAutomaticRetryErrorStatus(t,f)}static getDefaultRetryOptions(){return{shouldRetry:h.defaultShouldRetryHook,affectDelayHook:h.defaultDelayHook,maxAttempts:l}}static getLogInfoFromFetchResponse(t,r){const{status:e,ok:o,headers:s,url:a}=t;return{status:e,ok:o,headers:s,url:a,responseBody:r}}static standardRetryableClause(t){return h.isAutomaticRetryErrorStatusDCX(t,f)}static getRetryAfterInMsFromDCXError(t){try{if(t?.response?.headers){const r=h.getHeaderValueCaseInsensitive(t.response.headers,"retry-after");if(r){if(!isNaN(r))return 1e3*Number(r);{const t=Date.parse(r)-Date.now();if(t>0)return t}}}}catch(t){}}static getRedactedUrl(t){let r;try{r=new URL(t);const e=r.searchParams,o=new Set;d.forEach((t=>{if(t instanceof RegExp)for(const r of e.keys())t.test(r)&&o.add(r);else e.has(t)&&o.add(t)})),o.forEach((t=>e.set(t,"XXXXX")))}catch(r){return t}return r.toString()}static isHttpUrl(t){let r;try{r=new URL(t)}catch(t){return!1}return"http:"===r.protocol||"https:"===r.protocol}static formatStatusCode(t){return t.charAt(0)+"xx"}static getHeaderValueCaseInsensitive(t,r){if(t[r])return t[r];const e=r.toLowerCase();for(const r in t)if(r.toLowerCase()===e)return t[r]}}},124658:(t,r,e)=>{e.d(r,{V:()=>i,q:()=>f});var o=e(279402),s=e(842272),a=e(490697),n=e(648284);class i extends Error{constructor(t){super(),this.response=t}}const c="Fetch request aborted due to timeout",u="Fetch request aborted due to client cancelation";async function l(t,r,e,o,s,a){if(a?.aborted){const t=new Error(u);throw t.name="AbortError",t}let l,d;const f=r.abortController(),h=()=>{f.abort(u)};void 0!==a&&a.addEventListener("abort",h);try{o.signal=f.signal;const u=r.fetch(t,o);if(l=setTimeout((()=>{f.abort(c)}),e),f.signal.onabort=()=>{clearTimeout(l)},d=await u,clearTimeout(l),!d.ok)throw s?.error("Fetch url error response",{url:n.LU.getRedactedUrl(t),responseStatus:d.status,requestId:d.headers.get("x-request-id")}),new i(d)}catch(t){if(f.signal.aborted){const t=new Error(f.signal.reason);throw t.name="AbortError",t}throw t}finally{l&&clearTimeout(l),void 0!==a&&a.removeEventListener("abort",h)}return d}function d(t,r,e,o,a,n){const i=a||t.message,c=n||t.name,l=new s.R(c,i,{previousError:t,logMetadata:{url:r,fetchRequestOptions:e}});throw a!==u&&o&&o.error(a,l),l}async function f(t){const{host:r,logger:e,url:s,fetchRequestOptions:u}=t,f=function(t){return{shouldRetry:t=>{if(t instanceof i){const r=o.o.fromResponse(t.response);return n.LU.defaultShouldRetryHook(r)}return!0},affectDelayHook:t=>{if(t instanceof i){const r=o.o.fromResponse(t.response);return n.LU.defaultDelayHook(r)}},progressCallback:(r,e,o)=>{o?t?.error(r,e,o):t?.info(r,e)},maxAttempts:3}}(e);if(void 0!==t.abortSignal){const r=f.shouldRetry;f.shouldRetry=e=>!t.abortSignal?.aborted&&r(e)}const h=Object.assign({},f,t.retryOptionsToOverride);let p=3e4;t.timeout&&t.timeout>0&&(p=t.timeout);try{return await(0,a.XD)(l,h)(s,r,p,u,e,t.abortSignal)}catch(r){if(r instanceof Error&&"AbortError"===r.name){const t=r.message;let o=r.name;t===c&&(o="FetchRequestTimeoutError"),d(r,s,u,e,t,o)}else if(r instanceof i){if(t.returnFinalResponse)return r.response;await async function(t,r,e){if(!t.ok){let s;try{s=await t.json()}catch{}throw o.o.fromResponse(t,e,void 0,{category:r,logMetadata:{responseBody:s}})}return t}(r.response,t.finalErrorCategory,t.finalErrorCode)}else r instanceof TypeError&&d(r,s,u,e);throw r}}}}]);
//# sourceMappingURL=24658.ebb6e34d7b06f2abadc4.js.map