var dt=Object.defineProperty;var d=(D,A)=>dt(D,"name",{value:A,configurable:!0});(self.webpackChunkgitlens=self.webpackChunkgitlens||[]).push([[457],{5186:(D,A,m)=>{var v=m(3698),O=m(2505),w=m(6417),S=Function.bind,y=S.bind(S);function j(T,P,N){var V=y(w,null).apply(null,N?[P,N]:[P]);T.api={remove:V},T.remove=V,["before","error","after","wrap"].forEach(function(F){var Y=N?[P,F,N]:[P,F];T[F]=T.api[F]=y(O,null).apply(null,Y)})}d(j,"bindApi");function R(){var T="h",P={registry:{}},N=v.bind(null,P,T);return j(N,P,T),N}d(R,"HookSingular");function G(){var T={registry:{}},P=v.bind(null,T);return j(P,T),P}d(G,"HookCollection");var J=!1;function H(){return J||(console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'),J=!0),G()}d(H,"Hook"),H.Singular=R.bind(),H.Collection=G.bind(),D.exports=H,D.exports.Hook=H,D.exports.Singular=H.Singular,D.exports.Collection=H.Collection},2505:D=>{D.exports=A;function A(m,v,O,w){var S=w;m.registry[O]||(m.registry[O]=[]),v==="before"&&(w=d(function(y,j){return Promise.resolve().then(S.bind(null,j)).then(y.bind(null,j))},"hook")),v==="after"&&(w=d(function(y,j){var R;return Promise.resolve().then(y.bind(null,j)).then(function(G){return R=G,S(R,j)}).then(function(){return R})},"hook")),v==="error"&&(w=d(function(y,j){return Promise.resolve().then(y.bind(null,j)).catch(function(R){return S(R,j)})},"hook")),m.registry[O].push({hook:w,orig:S})}d(A,"addHook")},3698:D=>{D.exports=A;function A(m,v,O,w){if(typeof O!="function")throw new Error("method for before hook must be a function");return w||(w={}),Array.isArray(v)?v.reverse().reduce(function(S,y){return A.bind(null,m,y,S,w)},O)():Promise.resolve().then(function(){return m.registry[v]?m.registry[v].reduce(function(S,y){return y.hook.bind(null,S,w)},O)():O(w)})}d(A,"register")},6417:D=>{D.exports=A;function A(m,v,O){if(!!m.registry[v]){var w=m.registry[v].map(function(S){return S.orig}).indexOf(O);w!==-1&&m.registry[v].splice(w,1)}}d(A,"removeHook")},8026:(D,A,m)=>{"use strict";m.r(A),m.d(A,{GitHubApi:()=>q});function v(){return typeof navigator=="object"&&"userAgent"in navigator?navigator.userAgent:typeof process=="object"&&"version"in process?`Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`:"<environment undetectable>"}d(v,"getUserAgent");var O=m(5186);/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function w(n){return Object.prototype.toString.call(n)==="[object Object]"}d(w,"isObject");function S(n){var e,t;return w(n)===!1?!1:(e=n.constructor,e===void 0?!0:(t=e.prototype,!(w(t)===!1||t.hasOwnProperty("isPrototypeOf")===!1)))}d(S,"isPlainObject");function y(n){return n?Object.keys(n).reduce((e,t)=>(e[t.toLowerCase()]=n[t],e),{}):{}}d(y,"lowercaseKeys");function j(n,e){const t=Object.assign({},n);return Object.keys(e).forEach(r=>{S(e[r])?r in n?t[r]=j(n[r],e[r]):Object.assign(t,{[r]:e[r]}):Object.assign(t,{[r]:e[r]})}),t}d(j,"mergeDeep");function R(n){for(const e in n)n[e]===void 0&&delete n[e];return n}d(R,"removeUndefinedProperties");function G(n,e,t){if(typeof e=="string"){let[o,i]=e.split(" ");t=Object.assign(i?{method:o,url:i}:{url:o},t)}else t=Object.assign({},e);t.headers=y(t.headers),R(t),R(t.headers);const r=j(n||{},t);return n&&n.mediaType.previews.length&&(r.mediaType.previews=n.mediaType.previews.filter(o=>!r.mediaType.previews.includes(o)).concat(r.mediaType.previews)),r.mediaType.previews=r.mediaType.previews.map(o=>o.replace(/-preview/,"")),r}d(G,"merge");function J(n,e){const t=/\?/.test(n)?"&":"?",r=Object.keys(e);return r.length===0?n:n+t+r.map(o=>o==="q"?"q="+e.q.split("+").map(encodeURIComponent).join("+"):`${o}=${encodeURIComponent(e[o])}`).join("&")}d(J,"addQueryParameters");const H=/\{[^}]+\}/g;function T(n){return n.replace(/^\W+|\W+$/g,"").split(/,/)}d(T,"removeNonChars");function P(n){const e=n.match(H);return e?e.map(T).reduce((t,r)=>t.concat(r),[]):[]}d(P,"extractUrlVariableNames");function N(n,e){return Object.keys(n).filter(t=>!e.includes(t)).reduce((t,r)=>(t[r]=n[r],t),{})}d(N,"omit");function V(n){return n.split(/(%[0-9A-Fa-f]{2})/g).map(function(e){return/%[0-9A-Fa-f]/.test(e)||(e=encodeURI(e).replace(/%5B/g,"[").replace(/%5D/g,"]")),e}).join("")}d(V,"encodeReserved");function F(n){return encodeURIComponent(n).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}d(F,"encodeUnreserved");function Y(n,e,t){return e=n==="+"||n==="#"?V(e):F(e),t?F(t)+"="+e:e}d(Y,"encodeValue");function L(n){return n!=null}d(L,"isDefined");function re(n){return n===";"||n==="&"||n==="?"}d(re,"isKeyOperator");function je(n,e,t,r){var o=n[t],i=[];if(L(o)&&o!=="")if(typeof o=="string"||typeof o=="number"||typeof o=="boolean")o=o.toString(),r&&r!=="*"&&(o=o.substring(0,parseInt(r,10))),i.push(Y(e,o,re(e)?t:""));else if(r==="*")Array.isArray(o)?o.filter(L).forEach(function(a){i.push(Y(e,a,re(e)?t:""))}):Object.keys(o).forEach(function(a){L(o[a])&&i.push(Y(e,o[a],a))});else{const a=[];Array.isArray(o)?o.filter(L).forEach(function(s){a.push(Y(e,s))}):Object.keys(o).forEach(function(s){L(o[s])&&(a.push(F(s)),a.push(Y(e,o[s].toString())))}),re(e)?i.push(F(t)+"="+a.join(",")):a.length!==0&&i.push(a.join(","))}else e===";"?L(o)&&i.push(F(t)):o===""&&(e==="&"||e==="?")?i.push(F(t)+"="):o===""&&i.push("");return i}d(je,"getValues");function Re(n){return{expand:Te.bind(null,n)}}d(Re,"parseUrl");function Te(n,e){var t=["+","#",".","/",";","?","&"];return n.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(r,o,i){if(o){let s="";const l=[];if(t.indexOf(o.charAt(0))!==-1&&(s=o.charAt(0),o=o.substr(1)),o.split(/,/g).forEach(function(u){var c=/([^:\*]*)(?::(\d+)|(\*))?/.exec(u);l.push(je(e,s,c[1],c[2]||c[3]))}),s&&s!=="+"){var a=",";return s==="?"?a="&":s!=="#"&&(a=s),(l.length!==0?s:"")+l.join(a)}else return l.join(",")}else return V(i)})}d(Te,"expand");function ue(n){let e=n.method.toUpperCase(),t=(n.url||"/").replace(/:([a-z]\w+)/g,"{$1}"),r=Object.assign({},n.headers),o,i=N(n,["method","baseUrl","url","headers","request","mediaType"]);const a=P(t);t=Re(t).expand(i),/^http/.test(t)||(t=n.baseUrl+t);const s=Object.keys(n).filter(c=>a.includes(c)).concat("baseUrl"),l=N(i,s);if(!/application\/octet-stream/i.test(r.accept)&&(n.mediaType.format&&(r.accept=r.accept.split(/,/).map(c=>c.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,`application/vnd$1$2.${n.mediaType.format}`)).join(",")),n.mediaType.previews.length)){const c=r.accept.match(/[\w-]+(?=-preview)/g)||[];r.accept=c.concat(n.mediaType.previews).map(f=>{const h=n.mediaType.format?`.${n.mediaType.format}`:"+json";return`application/vnd.github.${f}-preview${h}`}).join(",")}return["GET","HEAD"].includes(e)?t=J(t,l):"data"in l?o=l.data:Object.keys(l).length?o=l:r["content-length"]=0,!r["content-type"]&&typeof o<"u"&&(r["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(e)&&typeof o>"u"&&(o=""),Object.assign({method:e,url:t,headers:r},typeof o<"u"?{body:o}:null,n.request?{request:n.request}:null)}d(ue,"parse");function Pe(n,e,t){return ue(G(n,e,t))}d(Pe,"endpointWithDefaults");function ce(n,e){const t=G(n,e),r=Pe.bind(null,t);return Object.assign(r,{DEFAULTS:t,defaults:ce.bind(null,t),merge:G.bind(null,t),parse:ue})}d(ce,"withDefaults");const Ie=`octokit-endpoint.js/6.0.12 ${v()}`,Fe=ce(null,{method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":Ie},mediaType:{format:"",previews:[]}});var Ue=m(3300),Ne=m.n(Ue);class ne extends Error{constructor(e){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="Deprecation"}}d(ne,"Deprecation");var ke=m(778),de=m.n(ke);const Be=de()(n=>console.warn(n)),Ge=de()(n=>console.warn(n));class W extends Error{constructor(e,t,r){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="HttpError",this.status=t;let o;"headers"in r&&typeof r.headers<"u"&&(o=r.headers),"response"in r&&(this.response=r.response,o=r.response.headers);const i=Object.assign({},r.request);r.request.headers.authorization&&(i.headers=Object.assign({},r.request.headers,{authorization:r.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),i.url=i.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=i,Object.defineProperty(this,"code",{get(){return Be(new ne("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")),t}}),Object.defineProperty(this,"headers",{get(){return Ge(new ne("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.")),o||{}}})}}d(W,"RequestError");const He="5.6.3";function We(n){return n.arrayBuffer()}d(We,"getBufferResponse");function fe(n){const e=n.request&&n.request.log?n.request.log:console;(S(n.body)||Array.isArray(n.body))&&(n.body=JSON.stringify(n.body));let t={},r,o;return(n.request&&n.request.fetch||Ne())(n.url,Object.assign({method:n.method,body:n.body,headers:n.headers,redirect:n.redirect},n.request)).then(async a=>{o=a.url,r=a.status;for(const s of a.headers)t[s[0]]=s[1];if("deprecation"in t){const s=t.link&&t.link.match(/<([^>]+)>; rel="deprecation"/),l=s&&s.pop();e.warn(`[@octokit/request] "${n.method} ${n.url}" is deprecated. It is scheduled to be removed on ${t.sunset}${l?`. See ${l}`:""}`)}if(!(r===204||r===205)){if(n.method==="HEAD"){if(r<400)return;throw new W(a.statusText,r,{response:{url:o,status:r,headers:t,data:void 0},request:n})}if(r===304)throw new W("Not modified",r,{response:{url:o,status:r,headers:t,data:await oe(a)},request:n});if(r>=400){const s=await oe(a);throw new W(Ye(s),r,{response:{url:o,status:r,headers:t,data:s},request:n})}return oe(a)}}).then(a=>({status:r,url:o,headers:t,data:a})).catch(a=>{throw a instanceof W?a:new W(a.message,500,{request:n})})}d(fe,"fetchWrapper");async function oe(n){const e=n.headers.get("content-type");return/application\/json/.test(e)?n.json():!e||/^text\/|charset=utf-8$/.test(e)?n.text():We(n)}d(oe,"getResponseData");function Ye(n){return typeof n=="string"?n:"message"in n?Array.isArray(n.errors)?`${n.message}: ${n.errors.map(JSON.stringify).join(", ")}`:n.message:`Unknown error: ${JSON.stringify(n)}`}d(Ye,"toErrorMessage");function ie(n,e){const t=n.defaults(e);return Object.assign(d(function(o,i){const a=t.merge(o,i);if(!a.request||!a.request.hook)return fe(t.parse(a));const s=d((l,u)=>fe(t.parse(t.merge(l,u))),"request");return Object.assign(s,{endpoint:t,defaults:ie.bind(null,t)}),a.request.hook(s,a)},"newApi"),{endpoint:t,defaults:ie.bind(null,t)})}d(ie,"dist_web_withDefaults");const X=ie(Fe,{headers:{"user-agent":`octokit-request.js/${He} ${v()}`}}),Me="4.8.0";function ze(n){return`Request failed due to following response errors:
`+n.errors.map(e=>` - ${e.message}`).join(`
`)}d(ze,"_buildMessageForResponseErrors");class ae extends Error{constructor(e,t,r){super(ze(r)),this.request=e,this.headers=t,this.response=r,this.name="GraphqlResponseError",this.errors=r.errors,this.data=r.data,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}}d(ae,"GraphqlResponseError");const Le=["method","baseUrl","url","headers","request","query","mediaType"],Ve=["query","method","url"],he=/\/api\/v3\/?$/;function Qe(n,e,t){if(t){if(typeof e=="string"&&"query"in t)return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));for(const a in t)if(!!Ve.includes(a))return Promise.reject(new Error(`[@octokit/graphql] "${a}" cannot be used as variable name`))}const r=typeof e=="string"?Object.assign({query:e},t):e,o=Object.keys(r).reduce((a,s)=>Le.includes(s)?(a[s]=r[s],a):(a.variables||(a.variables={}),a.variables[s]=r[s],a),{}),i=r.baseUrl||n.endpoint.DEFAULTS.baseUrl;return he.test(i)&&(o.url=i.replace(he,"/api/graphql")),n(o).then(a=>{if(a.data.errors){const s={};for(const l of Object.keys(a.headers))s[l]=a.headers[l];throw new ae(o,s,a.data)}return a.data.data})}d(Qe,"graphql");function se(n,e){const t=n.defaults(e);return Object.assign(d((o,i)=>Qe(t,o,i),"newApi"),{defaults:se.bind(null,t),endpoint:X.endpoint})}d(se,"graphql_dist_web_withDefaults");const gt=se(X,{headers:{"user-agent":`octokit-graphql.js/${Me} ${v()}`},method:"POST",url:"/graphql"});function Je(n){return se(n,{method:"POST",url:"/graphql"})}d(Je,"withCustomRequest");const Xe=/^v1\./,Ke=/^ghs_/,Ze=/^ghu_/;async function et(n){const e=n.split(/\./).length===3,t=Xe.test(n)||Ke.test(n),r=Ze.test(n);return{type:"token",token:n,tokenType:e?"app":t?"installation":r?"user-to-server":"oauth"}}d(et,"auth");function tt(n){return n.split(/\./).length===3?`bearer ${n}`:`token ${n}`}d(tt,"withAuthorizationPrefix");async function rt(n,e,t,r){const o=e.endpoint.merge(t,r);return o.headers.authorization=tt(n),e(o)}d(rt,"hook");const nt=d(function(e){if(!e)throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");if(typeof e!="string")throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");return e=e.replace(/^(token|bearer) +/i,""),Object.assign(et.bind(null,e),{hook:rt.bind(null,e)})},"createTokenAuth"),ge="3.6.0";class Q{constructor(e={}){const t=new O.Collection,r={baseUrl:X.endpoint.DEFAULTS.baseUrl,headers:{},request:Object.assign({},e.request,{hook:t.bind(null,"request")}),mediaType:{previews:[],format:""}};if(r.headers["user-agent"]=[e.userAgent,`octokit-core.js/${ge} ${v()}`].filter(Boolean).join(" "),e.baseUrl&&(r.baseUrl=e.baseUrl),e.previews&&(r.mediaType.previews=e.previews),e.timeZone&&(r.headers["time-zone"]=e.timeZone),this.request=X.defaults(r),this.graphql=Je(this.request).defaults(r),this.log=Object.assign({debug:()=>{},info:()=>{},warn:console.warn.bind(console),error:console.error.bind(console)},e.log),this.hook=t,e.authStrategy){const{authStrategy:i,...a}=e,s=i(Object.assign({request:this.request,log:this.log,octokit:this,octokitOptions:a},e.auth));t.wrap("request",s.hook),this.auth=s}else if(!e.auth)this.auth=async()=>({type:"unauthenticated"});else{const i=nt(e.auth);t.wrap("request",i.hook),this.auth=i}this.constructor.plugins.forEach(i=>{Object.assign(this,i(this,e))})}static defaults(e){return d(class extends this{constructor(...r){const o=r[0]||{};if(typeof e=="function"){super(e(o));return}super(Object.assign({},e,o,o.userAgent&&e.userAgent?{userAgent:`${o.userAgent} ${e.userAgent}`}:null))}},"OctokitWithDefaults")}static plugin(...e){var t;const r=this.plugins;return t=d(class extends this{},"_a"),t.plugins=r.concat(e.filter(i=>!r.includes(i))),t}}d(Q,"Octokit"),Q.VERSION=ge,Q.plugins=[];var k=m(9496),me=m(303),pe=m(3628),K=m(9179),p=m(5396),ve=m(5059),ot=m(2976),b=m(2436),E=m(7369),it=m(9417),ye=m(8301),we=Object.defineProperty,at=Object.defineProperties,st=Object.getOwnPropertyDescriptor,lt=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,le=d((n,e,t)=>e in n?we(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,"__defNormalProp"),M=d((n,e)=>{for(var t in e||(e={}))be.call(e,t)&&le(n,t,e[t]);if(Z)for(var t of Z(e))$e.call(e,t)&&le(n,t,e[t]);return n},"__spreadValues"),z=d((n,e)=>at(n,lt(e)),"__spreadProps"),ut=d((n,e)=>{var t={};for(var r in n)be.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&Z)for(var r of Z(n))e.indexOf(r)<0&&$e.call(n,r)&&(t[r]=n[r]);return t},"__objRest"),x=d((n,e,t,r)=>{for(var o=r>1?void 0:r?st(e,t):e,i=n.length-1,a;i>=0;i--)(a=n[i])&&(o=(r?a(e,t,o):a(o))||o);return r&&o&&we(e,t,o),o},"__decorateClass"),ee=d((n,e,t)=>(le(n,typeof e!="symbol"?e+"":e,t),t),"__publicField");const U=Object.freeze({values:[]}),Ce=Object.freeze({ranges:[]});class q{constructor(e){ee(this,"_onDidReauthenticate",new k.EventEmitter),ee(this,"_disposable"),ee(this,"_proxyAgent",null),ee(this,"_octokits",new Map),this._disposable=k.Disposable.from(K.DN.onDidChange(t=>{K.DN.changed(t,"proxy")?(this._proxyAgent=null,this._octokits.clear()):K.DN.changed(t,"outputLevel")&&this._octokits.clear()}),K.DN.onDidChangeAny(t=>{(t.affectsConfiguration("http.proxy")||t.affectsConfiguration("http.proxyStrictSSL"))&&(this._proxyAgent=null,this._octokits.clear())}))}get onDidReauthenticate(){return this._onDidReauthenticate.event}dispose(){var e;(e=this._disposable)==null||e.dispose()}get proxyAgent(){if(!pe.$L)return this._proxyAgent===null&&(this._proxyAgent=(0,me.N)()),this._proxyAgent}async getAccountForCommit(e,t,r,o,i,a){var s,l;const u=b.Y.getCorrelationContext();try{const c=`query getAccountForCommit(
	$owner: String!
	$repo: String!
	$ref: GitObjectID!
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $ref) {
			... on Commit {
				author {
					name
					email
					avatarUrl(size: $avatarSize)
				}
			}
		}
	}
}`,f=await this.graphql(t,c,z(M({},a),{owner:r,repo:o,ref:i})),h=(l=(s=f?.repository)==null?void 0:s.object)==null?void 0:l.author;return h==null?void 0:{provider:e,name:h.name??void 0,email:h.email??void 0,avatarUrl:h.avatarUrl}}catch(c){if(c instanceof p.Ww)return;throw this.handleException(c,u)}}async getAccountForEmail(e,t,r,o,i,a){var s,l;const u=b.Y.getCorrelationContext();try{const c=`query getAccountForEmail(
	$emailQuery: String!
	$avatarSize: Int
) {
	search(type: USER, query: $emailQuery, first: 1) {
		nodes {
			... on User {
				name
				email
				avatarUrl(size: $avatarSize)
			}
		}
	}
}`,f=await this.graphql(t,c,z(M({},a),{owner:r,repo:o,emailQuery:`in:email ${i}`})),h=(l=(s=f?.search)==null?void 0:s.nodes)==null?void 0:l[0];return h==null?void 0:{provider:e,name:h.name??void 0,email:h.email??void 0,avatarUrl:h.avatarUrl}}catch(c){if(c instanceof p.Ww)return;throw this.handleException(c,u)}}async getDefaultBranch(e,t,r,o,i){var a,s;const l=b.Y.getCorrelationContext();try{const u=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(name: $repo, owner: $owner) {
		defaultBranchRef {
			name
		}
	}
}`,c=await this.graphql(t,u,z(M({},i),{owner:r,repo:o})),f=((s=(a=c?.repository)==null?void 0:a.defaultBranchRef)==null?void 0:s.name)??void 0;return f==null?void 0:{provider:e,name:f}}catch(u){if(u instanceof p.Ww)return;throw this.handleException(u,l)}}async getIssueOrPullRequest(e,t,r,o,i,a){var s;const l=b.Y.getCorrelationContext();try{const u=`query getIssueOrPullRequest(
		$owner: String!
		$repo: String!
		$number: Int!
	) {
		repository(name: $repo, owner: $owner) {
			issueOrPullRequest(number: $number) {
				__typename
				... on Issue {
					createdAt
					closed
					closedAt
					title
					url
				}
				... on PullRequest {
					createdAt
					closed
					closedAt
					title
					url
				}
			}
		}
	}`,c=await this.graphql(t,u,z(M({},a),{owner:r,repo:o,number:i})),f=(s=c?.repository)==null?void 0:s.issueOrPullRequest;return f==null?void 0:{provider:e,type:f.type,id:String(i),date:new Date(f.createdAt),title:f.title,closed:f.closed,closedDate:f.closedAt==null?void 0:new Date(f.closedAt),url:f.url}}catch(u){if(u instanceof p.Ww)return;throw this.handleException(u,l)}}async getPullRequestForBranch(e,t,r,o,i,a){var s,l,u,c;const f=b.Y.getCorrelationContext();try{const h=`query getPullRequestForBranch(
	$owner: String!
	$repo: String!
	$branch: String!
	$limit: Int!
	$include: [PullRequestState!]
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		refs(query: $branch, refPrefix: "refs/heads/", first: 1) {
			nodes {
				associatedPullRequests(first: $limit, orderBy: {field: UPDATED_AT, direction: DESC}, states: $include) {
					nodes {
						author {
							login
							avatarUrl(size: $avatarSize)
							url
						}
						permalink
						number
						title
						state
						updatedAt
						closedAt
						mergedAt
						repository {
							isFork
							owner {
								login
							}
						}
					}
				}
			}
		}
	}
}`,$=await this.graphql(t,h,z(M({},a),{owner:r,repo:o,branch:i,limit:10})),g=(c=(u=(l=(s=$?.repository)==null?void 0:s.refs.nodes[0])==null?void 0:l.associatedPullRequests)==null?void 0:u.nodes)==null?void 0:c.filter(C=>!C.repository.isFork||C.repository.owner.login===r);return g==null||g.length===0?void 0:(g.length>1&&g.sort((C,_)=>(C.repository.owner.login===r?-1:1)-(_.repository.owner.login===r?-1:1)||(C.state==="OPEN"?-1:1)-(_.state==="OPEN"?-1:1)||new Date(_.updatedAt).getTime()-new Date(C.updatedAt).getTime()),ye.GitHubPullRequest.from(g[0],e))}catch(h){if(h instanceof p.Ww)return;throw this.handleException(h,f)}}async getPullRequestForCommit(e,t,r,o,i,a){var s,l,u,c;const f=b.Y.getCorrelationContext();try{const h=`query getPullRequestForCommit(
	$owner: String!
	$repo: String!
	$ref: GitObjectID!
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $ref) {
			... on Commit {
				associatedPullRequests(first: 2, orderBy: {field: UPDATED_AT, direction: DESC}) {
					nodes {
						author {
							login
							avatarUrl(size: $avatarSize)
							url
						}
						permalink
						number
						title
						state
						updatedAt
						closedAt
						mergedAt
						repository {
							isFork
							owner {
								login
							}
						}
					}
				}
			}
		}
	}
}`,$=await this.graphql(t,h,z(M({},a),{owner:r,repo:o,ref:i})),g=(c=(u=(l=(s=$?.repository)==null?void 0:s.object)==null?void 0:l.associatedPullRequests)==null?void 0:u.nodes)==null?void 0:c.filter(C=>!C.repository.isFork||C.repository.owner.login===r);return g==null||g.length===0?void 0:(g.length>1&&g.sort((C,_)=>(C.repository.owner.login===r?-1:1)-(_.repository.owner.login===r?-1:1)||(C.state==="OPEN"?-1:1)-(_.state==="OPEN"?-1:1)||new Date(_.updatedAt).getTime()-new Date(C.updatedAt).getTime()),ye.GitHubPullRequest.from(g[0],e))}catch(h){if(h instanceof p.Ww)return;throw this.handleException(h,f)}}async getBlame(e,t,r,o,i){var a,s,l,u,c;const f=b.Y.getCorrelationContext();try{const h=`query getBlameRanges(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String!
) {
	viewer { name }
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			...on Commit {
				blame(path: $path) {
					ranges {
						startingLine
						endingLine
						commit {
							oid
							parents(first: 3) { nodes { oid } }
							message
							additions
							changedFiles
							deletions
							author {
								avatarUrl
								date
								email
								name
							}
							committer {
								date
								email
								name
							}
						}
					}
				}
			}
		}
	}
}`,$=await this.graphql(e,h,{owner:t,repo:r,ref:o,path:i});if($==null)return Ce;const g=(l=(s=(a=$.repository)==null?void 0:a.object)==null?void 0:s.blame)==null?void 0:l.ranges;return g==null||g.length===0?{ranges:[],viewer:(u=$.viewer)==null?void 0:u.name}:{ranges:g,viewer:(c=$.viewer)==null?void 0:c.name}}catch(h){if(h instanceof p.Ww)return Ce;throw this.handleException(h,f)}}async getBranches(e,t,r,o){var i;const a=b.Y.getCorrelationContext();try{const s=`query getBranches(
	$owner: String!
	$repo: String!
	$branchQuery: String
	$cursor: String
	$limit: Int = 100
) {
	repository(owner: $owner, name: $repo) {
		refs(query: $branchQuery, refPrefix: "refs/heads/", first: $limit, after: $cursor, orderBy: { field: TAG_COMMIT_DATE, direction: DESC }) {
			pageInfo {
				endCursor
				hasNextPage
			}
			nodes {
				name
				target {
					oid
					commitUrl
					...on Commit {
						authoredDate
						committedDate
					}
				}
			}
		}
	}
}`,l=await this.graphql(e,s,{owner:t,repo:r,branchQuery:o?.query,cursor:o?.cursor,limit:Math.min(100,o?.limit??100)});if(l==null)return U;const u=(i=l.repository)==null?void 0:i.refs;return u==null?U:{paging:{cursor:u.pageInfo.endCursor,more:u.pageInfo.hasNextPage},values:u.nodes}}catch(s){if(s instanceof p.Ww)return U;throw this.handleException(s,a)}}async getCommit(e,t,r,o){var i,a,s,l,u,c,f,h,$,g;const C=b.Y.getCorrelationContext();try{const _=await this.request(e,"GET /repos/{owner}/{repo}/commits/{ref}",{owner:t,repo:r,ref:o}),I=_?.data;if(I==null)return;const{commit:B}=I;return{oid:I.sha,parents:{nodes:I.parents.map(te=>({oid:te.sha}))},message:B.message,additions:(i=I.stats)==null?void 0:i.additions,changedFiles:(a=I.files)==null?void 0:a.length,deletions:(s=I.stats)==null?void 0:s.deletions,author:{avatarUrl:((l=I.author)==null?void 0:l.avatar_url)??void 0,date:((u=B.author)==null?void 0:u.date)??new Date().toString(),email:((c=B.author)==null?void 0:c.email)??void 0,name:((f=B.author)==null?void 0:f.name)??""},committer:{date:((h=B.committer)==null?void 0:h.date)??new Date().toString(),email:(($=B.committer)==null?void 0:$.email)??void 0,name:((g=B.committer)==null?void 0:g.name)??""},files:I.files}}catch(_){if(_ instanceof p.Ww)return;throw this.handleException(_,C)}}async getCommitForFile(e,t,r,o,i){if(ot.GitRevision.isSha(o))return this.getCommit(e,t,r,o);const a=await this.getCommits(e,t,r,o,{limit:1,path:i});if(a.values.length===0)return;const s=await this.getCommit(e,t,r,a.values[0].oid);return z(M({},s??a.values[0]),{viewer:a.viewer})}async getCommitBranches(e,t,r,o,i){var a,s;const l=b.Y.getCorrelationContext();try{const u=`query getCommitBranches(
	$owner: String!
	$repo: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		refs(first: 20, refPrefix: "refs/heads/", orderBy: { field: TAG_COMMIT_DATE, direction: DESC }) {
			nodes {
				name
				target {
					... on Commit {
						history(first: 3, since: $since until: $until) {
							nodes { oid }
						}
					}
				}
			}
		}
	}
}`,c=await this.graphql(e,u,{owner:t,repo:r,since:i.toISOString(),until:i.toISOString()}),f=(s=(a=c?.repository)==null?void 0:a.refs)==null?void 0:s.nodes;if(f==null)return[];const h=[];for(const $ of f)for(const g of $.target.history.nodes)if(g.oid===o){h.push($.name);break}return h}catch(u){if(u instanceof p.Ww)return[];throw this.handleException(u,l)}}async getCommitCount(e,t,r,o){var i,a;const s=b.Y.getCorrelationContext();try{const l=`query getCommitCount(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	repository(owner: $owner, name: $repo) {
		ref(qualifiedName: $ref) {
			target {
				... on Commit {
					history(first: 1) {
						totalCount
					}
				}
			}
		}
	}
}`,u=await this.graphql(e,l,{owner:t,repo:r,ref:o});return(a=(i=u?.repository)==null?void 0:i.ref)==null?void 0:a.target.history.totalCount}catch(l){if(l instanceof p.Ww)return;throw this.handleException(l,s)}}async getCommitOnBranch(e,t,r,o,i,a){var s;const l=b.Y.getCorrelationContext();try{const u=`query getCommitOnBranch(
	$owner: String!
	$repo: String!
	$ref: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		ref(qualifiedName: $ref) {
			target {
				... on Commit {
					history(first: 3, since: $since until: $until) {
						nodes { oid }
					}
				}
			}
		}
	}
}`,c=await this.graphql(e,u,{owner:t,repo:r,ref:`refs/heads/${o}`,since:a.toISOString(),until:a.toISOString()}),f=(s=c?.repository)==null?void 0:s.ref.target.history.nodes;if(f==null)return[];const h=[];for(const $ of f)if($.oid===i){h.push(o);break}return h}catch(u){if(u instanceof p.Ww)return[];throw this.handleException(u,l)}}async getCommits(e,t,r,o,i){var a,s,l,u;const c=b.Y.getCorrelationContext();if(i?.limit===1&&i?.path==null)return this.getCommitsCoreSingle(e,t,r,o);try{const f=`query getCommits(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String
	$author: CommitAuthor
	$after: String
	$before: String
	$limit: Int = 100
	$since: GitTimestamp
	$until: GitTimestamp
) {
	viewer { name }
	repository(name: $repo, owner: $owner) {
		object(expression: $ref) {
			... on Commit {
				history(first: $limit, author: $author, path: $path, after: $after, before: $before, since: $since, until: $until) {
					pageInfo {
						startCursor
						endCursor
						hasNextPage
						hasPreviousPage
					}
					nodes {
						... on Commit {
							oid
							message
							parents(first: 3) { nodes { oid } }
							additions
							changedFiles
							deletions
							author {
								avatarUrl
								date
								email
								name
							}
							committer {
								 date
								 email
								 name
							 }
						}
					}
				}
			}
		}
	}
}`;let h;if(i?.authors!=null)if(i.authors.length===1){const[C]=i.authors;h={id:C.id,emails:C.email?[C.email]:void 0}}else{const C=i.authors.filter(_=>_.email).map(_=>_.email);h=C.length?{emails:C}:void 0}const $=await this.graphql(e,f,{owner:t,repo:r,ref:o,after:i?.after,before:i?.before,path:i?.path,author:h,limit:Math.min(100,i?.limit??100),since:typeof i?.since=="string"?i?.since:(a=i?.since)==null?void 0:a.toISOString(),until:typeof i?.until=="string"?i?.until:(s=i?.until)==null?void 0:s.toISOString()}),g=(u=(l=$?.repository)==null?void 0:l.object)==null?void 0:u.history;return g==null?U:{paging:g.pageInfo.endCursor!=null?{cursor:g.pageInfo.endCursor??void 0,more:g.pageInfo.hasNextPage}:void 0,values:g.nodes,viewer:$?.viewer.name}}catch(f){if(f instanceof p.Ww)return U;throw this.handleException(f,c)}}async getCommitsCoreSingle(e,t,r,o){var i;const a=b.Y.getCorrelationContext();try{const s=`query getCommit(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	viewer { name }
	repository(name: $repo owner: $owner) {
		object(expression: $ref) {
			...on Commit {
				oid
				parents(first: 3) { nodes { oid } }
				message
				additions
				changedFiles
				deletions
				author {
					avatarUrl
					date
					email
					name
				}
				committer {
					date
					email
					name
				}
			}
		}
	}
}`,l=await this.graphql(e,s,{owner:t,repo:r,ref:o});if(l==null)return U;const u=(i=l.repository)==null?void 0:i.object;return u!=null?{values:[u],viewer:l.viewer.name}:U}catch(s){if(s instanceof p.Ww)return U;throw this.handleException(s,a)}}async getCommitRefs(e,t,r,o,i){var a,s;const l=b.Y.getCorrelationContext();try{const u=`query getCommitRefs(
	$owner: String!
	$repo: String!
	$ref: String!
	$after: String
	$before: String
	$first: Int
	$last: Int
	$path: String
	$since: GitTimestamp
	$until: GitTimestamp
) {
	repository(name: $repo, owner: $owner) {
		object(expression: $ref) {
			... on Commit {
				history(first: $first, last: $last, path: $path, since: $since, until: $until, after: $after, before: $before) {
					pageInfo { startCursor, endCursor, hasNextPage, hasPreviousPage }
					totalCount
					nodes { oid }
				}
			}
		}
	}
}`,c=await this.graphql(e,u,{owner:t,repo:r,ref:o,path:i?.path,first:i?.first,last:i?.last,after:i?.after,before:i?.before,since:i?.since,until:i?.until}),f=(s=(a=c?.repository)==null?void 0:a.object)==null?void 0:s.history;return f==null?void 0:{pageInfo:f.pageInfo,totalCount:f.totalCount,values:f.nodes}}catch(u){if(u instanceof p.Ww)return;throw this.handleException(u,l)}}async getNextCommitRefs(e,t,r,o,i,a){const s=await this.getCommitDate(e,t,r,a);if(s==null)return[];let l=await this.getCommitRefs(e,t,r,o,{path:i,first:1,since:s});if(l==null)return[];const u=`${l.pageInfo.startCursor.split(" ",1)[0]} ${l.totalCount}`;let c;if([,c]=u.split(" ",2),c=Math.min(parseInt(c,10),5),l=await this.getCommitRefs(e,t,r,o,{path:i,last:c,before:u}),l==null)return[];const f=[];for(const{oid:h}of l.values){if(h===a)break;f.push(h)}return f.reverse()}async getCommitDate(e,t,r,o){var i,a;const s=b.Y.getCorrelationContext();try{const l=`query getCommitDate(
	$owner: String!
	$repo: String!
	$sha: GitObjectID!
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $sha) {
			... on Commit { committer { date } }
		}
	}
}`,u=await this.graphql(e,l,{owner:t,repo:r,sha:o});return(a=(i=u?.repository)==null?void 0:i.object)==null?void 0:a.committer.date}catch(l){if(l instanceof p.Ww)return;throw this.handleException(l,s)}}async getContributors(e,t,r){const o=b.Y.getCorrelationContext();try{const i=await this.request(e,"GET /repos/{owner}/{repo}/contributors",{owner:t,repo:r,per_page:100});return i?.data==null?[]:i.data}catch(i){if(i instanceof p.Ww)return[];throw this.handleException(i,o)}}async getDefaultBranchName(e,t,r){var o,i;const a=b.Y.getCorrelationContext();try{const s=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		defaultBranchRef {
			name
		}
	}
}`,l=await this.graphql(e,s,{owner:t,repo:r});return l==null?void 0:((i=(o=l.repository)==null?void 0:o.defaultBranchRef)==null?void 0:i.name)??void 0}catch(s){if(s instanceof p.Ww)return;throw this.handleException(s,a)}}async getCurrentUser(e,t,r){var o,i,a,s;const l=b.Y.getCorrelationContext();try{const u=`query getCurrentUser(
	$owner: String!
	$repo: String!
) {
	viewer { name, email, login, id }
	repository(owner: $owner, name: $repo) { viewerPermission }
}`,c=await this.graphql(e,u,{owner:t,repo:r});return c==null?void 0:{name:(o=c.viewer)==null?void 0:o.name,email:(i=c.viewer)==null?void 0:i.email,username:(a=c.viewer)==null?void 0:a.login,id:(s=c.viewer)==null?void 0:s.id}}catch(u){if(u instanceof p.Ww)return;throw this.handleException(u,l)}}async getRepositoryVisibility(e,t,r){var o;const i=b.Y.getCorrelationContext();try{const a=`query getRepositoryVisibility(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		visibility
	}
}`,s=await this.graphql(e,a,{owner:t,repo:r});return((o=s?.repository)==null?void 0:o.visibility)==null?void 0:s.repository.visibility==="PUBLIC"?ve.q.Public:ve.q.Private}catch(a){if(a instanceof p.Ww)return;throw this.handleException(a,i)}}async getTags(e,t,r,o){var i;const a=b.Y.getCorrelationContext();try{const s=`query getTags(
	$owner: String!
	$repo: String!
	$tagQuery: String
	$cursor: String
	$limit: Int = 100
) {
	repository(owner: $owner, name: $repo) {
		refs(query: $tagQuery, refPrefix: "refs/tags/", first: $limit, after: $cursor, orderBy: { field: TAG_COMMIT_DATE, direction: DESC }) {
			pageInfo {
				endCursor
				hasNextPage
			}
			nodes {
				name
				target {
					oid
					commitUrl
					...on Commit {
						authoredDate
						committedDate
						message
					}
					...on Tag {
						message
						tagger { date }
					}
				}
			}
		}
	}
}`,l=await this.graphql(e,s,{owner:t,repo:r,tagQuery:o?.query,cursor:o?.cursor,limit:Math.min(100,o?.limit??100)});if(l==null)return U;const u=(i=l.repository)==null?void 0:i.refs;return u==null?U:{paging:{cursor:u.pageInfo.endCursor,more:u.pageInfo.hasNextPage},values:u.nodes}}catch(s){if(s instanceof p.Ww)return U;throw this.handleException(s,a)}}async resolveReference(e,t,r,o,i){var a,s,l,u,c,f;const h=b.Y.getCorrelationContext();try{if(!i){const C=`query resolveReference(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			oid
		}
	}
}`,_=await this.graphql(e,C,{owner:t,repo:r,ref:o});return((s=(a=_?.repository)==null?void 0:a.object)==null?void 0:s.oid)??void 0}const $=`query resolveReference(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String!
) {
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			... on Commit {
				history(first: 1, path: $path) {
					nodes { oid }
				}
			}
		}
	}
}`,g=await this.graphql(e,$,{owner:t,repo:r,ref:o,path:i});return((f=(c=(u=(l=g?.repository)==null?void 0:l.object)==null?void 0:u.history.nodes)==null?void 0:c[0])==null?void 0:f.oid)??void 0}catch($){if($ instanceof p.Ww)return;throw this.handleException($,h)}}async searchCommits(e,t,r){const o=b.Y.getCorrelationContext(),i=Math.min(100,r?.limit??100);let a,s,l;r?.cursor!=null?([a,s,l]=r.cursor.split(" ",3),a=parseInt(a,10),s=parseInt(s,10),l=parseInt(l,10)):(a=1,s=i,l=0);try{const u=await this.request(e,"GET /search/commits",{q:t,sort:r?.sort,order:r?.order,per_page:s,page:a}),c=u?.data;if(c==null||c.items.length===0)return;const f=c.items.map(g=>{var C,_,I,B,te,Se,qe,Ee,xe,_e,Ae,Oe,De;return{oid:g.sha,parents:{nodes:g.parents.map(ct=>({oid:ct.sha}))},message:g.commit.message,author:{avatarUrl:((C=g.author)==null?void 0:C.avatar_url)??void 0,date:((_=g.commit.author)==null?void 0:_.date)??((I=g.commit.author)==null?void 0:I.date)??new Date().toString(),email:((B=g.author)==null?void 0:B.email)??((te=g.commit.author)==null?void 0:te.email)??void 0,name:((Se=g.author)==null?void 0:Se.name)??((qe=g.commit.author)==null?void 0:qe.name)??""},committer:{date:((Ee=g.commit.committer)==null?void 0:Ee.date)??((xe=g.committer)==null?void 0:xe.date)??new Date().toString(),email:((_e=g.committer)==null?void 0:_e.email)??((Ae=g.commit.committer)==null?void 0:Ae.email)??void 0,name:((Oe=g.committer)==null?void 0:Oe.name)??((De=g.commit.committer)==null?void 0:De.name)??""}}}),h=l+c.items.length,$=c.incomplete_results||c.total_count>h;return{pageInfo:{startCursor:`${a} ${s} ${l}`,endCursor:$?`${a+1} ${s} ${h}`:void 0,hasPreviousPage:c.total_count>0&&a>1,hasNextPage:$},totalCount:c.total_count,values:f}}catch(u){if(u instanceof p.Ww)return;throw this.handleException(u,o)}}octokit(e,t){let r=this._octokits.get(e);if(r==null){let o;if(pe.$L){let i=d(function(a,s){if(s.headers!=null){const l=s.headers,{"user-agent":u}=l,c=ut(l,["user-agent"]);u&&(s.headers=c)}return(0,me.h)(a,s)},"fetchCore");o=Q.defaults({auth:`token ${e}`,request:{fetch:i}})}else o=Q.defaults({auth:`token ${e}`,request:{agent:this.proxyAgent}});r=new o(t),this._octokits.set(e,r),(b.Y.logLevel===b.i.Debug||b.Y.isDebugging)&&r.hook.wrap("request",async(i,a)=>{const s=new it.u(`[GITHUB] ${a.method} ${a.url}`,{log:!1});try{return await i(a)}finally{let l;try{if(typeof a.query=="string"){const u=/(^[^({\n]+)/.exec(a.query);l=` ${u?.[1].trim()??a.query}`}}catch{}s.stop({message:l})}})}return r}async graphql(e,t,r){var o,i,a,s,l;try{return await this.octokit(e).graphql(t,r)}catch(u){if(u instanceof ae){switch((i=(o=u.errors)==null?void 0:o[0])==null?void 0:i.type){case"NOT_FOUND":throw new p.Ww(u);case"FORBIDDEN":throw new p._7("github",p.Jx.Forbidden,u);case"RATE_LIMITED":{let c;const f=(a=u.headers)==null?void 0:a["x-ratelimit-reset"];throw f!=null&&(c=parseInt(f,10),Number.isNaN(c)&&(c=void 0)),new p.yx(u,e,c)}}b.Y.isDebugging&&k.window.showErrorMessage(`GitHub request failed: ${((l=(s=u.errors)==null?void 0:s[0])==null?void 0:l.message)??u.message}`)}else u instanceof W?this.handleRequestError(u,e):b.Y.isDebugging&&k.window.showErrorMessage(`GitHub request failed: ${u.message}`);throw u}}async request(e,t,r){try{return await this.octokit(e).request(t,r)}catch(o){throw o instanceof W?this.handleRequestError(o,e):b.Y.isDebugging&&k.window.showErrorMessage(`GitHub request failed: ${o.message}`),o}}handleRequestError(e,t){var r,o,i,a,s;switch(e.status){case 404:case 410:case 422:throw new p.Ww(e);case 401:throw new p._7("github",p.Jx.Unauthorized,e);case 403:if(e.message.includes("rate limit")){let l;const u=(o=(r=e.response)==null?void 0:r.headers)==null?void 0:o["x-ratelimit-reset"];throw u!=null&&(l=parseInt(u,10),Number.isNaN(l)&&(l=void 0)),new p.yx(e,t,l)}throw new p._7("github",p.Jx.Forbidden,e);case 500:e.response!=null&&k.window.showErrorMessage("GitHub failed to respond and might be experiencing issues. Please visit the [GitHub status page](https://githubstatus.com) for more information.","OK");return;case 502:if(e.message.includes("timeout")){k.window.showErrorMessage("GitHub request timed out");return}break;default:if(e.status>=400&&e.status<500)throw new p.Bn(e);break}b.Y.isDebugging&&k.window.showErrorMessage(`GitHub request failed: ${((s=(a=(i=e.response)==null?void 0:i.errors)==null?void 0:a[0])==null?void 0:s.message)??e.message}`)}handleException(e,t){return b.Y.error(e,t),e instanceof p._7&&this.showAuthenticationErrorMessage(e),e}async showAuthenticationErrorMessage(e){if(e.reason===p.Jx.Unauthorized||e.reason===p.Jx.Forbidden){const t="Reauthenticate";await k.window.showErrorMessage(`${e.message}. Would you like to try reauthenticating${e.reason===p.Jx.Forbidden?" to provide additional access":""}?`,t)===t&&this._onDidReauthenticate.fire()}else k.window.showErrorMessage(e.message)}}d(q,"GitHubApi"),x([(0,E.fF)({args:{0:n=>n.name,1:"<token>"}})],q.prototype,"getAccountForCommit",1),x([(0,E.fF)({args:{0:n=>n.name,1:"<token>"}})],q.prototype,"getAccountForEmail",1),x([(0,E.fF)({args:{0:n=>n.name,1:"<token>"}})],q.prototype,"getDefaultBranch",1),x([(0,E.fF)({args:{0:n=>n.name,1:"<token>"}})],q.prototype,"getIssueOrPullRequest",1),x([(0,E.fF)({args:{0:n=>n.name,1:"<token>"}})],q.prototype,"getPullRequestForBranch",1),x([(0,E.fF)({args:{0:n=>n.name,1:"<token>"}})],q.prototype,"getPullRequestForCommit",1),x([(0,E.fF)({args:{0:"<token>"}})],q.prototype,"getBlame",1),x([(0,E.fF)({args:{0:"<token>"}})],q.prototype,"getBranches",1),x([(0,E.fF)({args:{0:"<token>"}})],q.prototype,"getCommit",1),x([(0,E.fF)({args:{0:"<token>"}})],q.prototype,"getCommitForFile",1),x([(0,E.fF)({args:{0:"<token>"}})],q.prototype,"getCommitBranches",1),x([(0,E.fF)({args:{0:"<token>"}})],q.prototype,"getCommitCount",1),x([(0,E.fF)({args:{0:"<token>"}})],q.prototype,"getCommitOnBranch",1),x([(0,E.fF)({args:{0:"<token>"}})],q.prototype,"getCommits",1),x([(0,E.fF)({args:{0:"<token>"}})],q.prototype,"getCommitRefs",1),x([(0,E.fF)({args:{0:"<token>"}})],q.prototype,"getNextCommitRefs",1),x([(0,E.fF)({args:{0:"<token>"}})],q.prototype,"getContributors",1),x([(0,E.fF)({args:{0:"<token>"}})],q.prototype,"getDefaultBranchName",1),x([(0,E.fF)({args:{0:"<token>"}})],q.prototype,"getCurrentUser",1),x([(0,E.fF)({args:{0:"<token>"}})],q.prototype,"getRepositoryVisibility",1),x([(0,E.fF)({args:{0:"<token>"}})],q.prototype,"getTags",1),x([(0,E.fF)({args:{0:"<token>"}})],q.prototype,"resolveReference",1),x([(0,E.fF)({args:{0:"<token>"}})],q.prototype,"searchCommits",1)},3300:(D,A)=>{"use strict";var m=d(function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof v<"u")return v;throw new Error("unable to locate global object")},"getGlobal"),v=m();D.exports=A=v.fetch,v.fetch&&(A.default=v.fetch.bind(v)),A.Headers=v.Headers,A.Request=v.Request,A.Response=v.Response},778:(D,A,m)=>{var v=m(2479);D.exports=v(O),D.exports.strict=v(w),O.proto=O(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return O(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return w(this)},configurable:!0})});function O(S){var y=d(function(){return y.called?y.value:(y.called=!0,y.value=S.apply(this,arguments))},"f");return y.called=!1,y}d(O,"once");function w(S){var y=d(function(){if(y.called)throw new Error(y.onceError);return y.called=!0,y.value=S.apply(this,arguments)},"f"),j=S.name||"Function wrapped with `once`";return y.onceError=j+" shouldn't be called more than once",y.called=!1,y}d(w,"onceStrict")},2479:D=>{D.exports=A;function A(m,v){if(m&&v)return A(m)(v);if(typeof m!="function")throw new TypeError("need wrapper function");return Object.keys(m).forEach(function(w){O[w]=m[w]}),O;function O(){for(var w=new Array(arguments.length),S=0;S<w.length;S++)w[S]=arguments[S];var y=m.apply(this,w),j=w[w.length-1];return typeof y=="function"&&y!==j&&Object.keys(j).forEach(function(R){y[R]=j[R]}),y}d(O,"wrapper")}d(A,"wrappy")}}]);

//# sourceMappingURL=feature-github.js.map