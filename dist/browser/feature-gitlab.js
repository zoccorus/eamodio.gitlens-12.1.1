"use strict";var ie=Object.defineProperty;var U=(T,O)=>ie(T,"name",{value:O,configurable:!0});(self.webpackChunkgitlens=self.webpackChunkgitlens||[]).push([[449],{8776:(T,O,v)=>{v.r(O),v.d(O,{GitLabApi:()=>y});var _=v(9496),j=v.n(_),R=v(303),A=v(3628),w=v(9179),c=v(5396),m=v(2976),h=v(2436),b=v(7369),$=v(9417),M=v(3430),P=v(2925),B=Object.defineProperty,re=Object.getOwnPropertyDescriptor,N=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,G=U((f,e,t)=>e in f?B(f,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):f[e]=t,"__defNormalProp"),oe=U((f,e)=>{for(var t in e||(e={}))ae.call(e,t)&&G(f,t,e[t]);if(N)for(var t of N(e))se.call(e,t)&&G(f,t,e[t]);return f},"__spreadValues"),q=U((f,e,t,s)=>{for(var l=s>1?void 0:s?re(e,t):e,u=f.length-1,r;u>=0;u--)(r=f[u])&&(l=(s?r(e,t,l):r(l))||l);return s&&l&&B(e,t,l),l},"__decorateClass"),I=U((f,e,t)=>(G(f,typeof e!="symbol"?e+"":e,t),t),"__publicField");class y{constructor(e){I(this,"_disposable"),I(this,"_projectIds",new Map),I(this,"_proxyAgents",new Map),I(this,"_ignoreSSLErrors",new Map),this._disposable=_.Disposable.from(w.DN.onDidChange(t=>{(w.DN.changed(t,"proxy")||w.DN.changed(t,"remotes"))&&(this._projectIds.clear(),this._proxyAgents.clear(),this._ignoreSSLErrors.clear())}),w.DN.onDidChangeAny(t=>{(t.affectsConfiguration("http.proxy")||t.affectsConfiguration("http.proxyStrictSSL"))&&(this._projectIds.clear(),this._proxyAgents.clear())}))}dispose(){var e;(e=this._disposable)==null||e.dispose()}getProxyAgent(e){if(A.$L)return;let t=this._proxyAgents.get(e.id);if(t===void 0){const s=this.getIgnoreSSLErrors(e);t=(0,R.N)(s===!0||s==="force"?!1:void 0),this._proxyAgents.set(e.id,t??null)}return t??void 0}getIgnoreSSLErrors(e){var t;if(A.$L)return!1;let s=this._ignoreSSLErrors.get(e.id);if(s===void 0){const l=(t=w.DN.get("remotes"))==null?void 0:t.find(u=>u.type===w.zW.GitLab&&u.domain===e.domain);s=l?.ignoreSSLErrors??!1,this._ignoreSSLErrors.set(e.id,s)}return s}async getAccountForCommit(e,t,s,l,u,r){const n=h.Y.getCorrelationContext(),a=await this.getProjectId(e,t,s,l,r?.baseUrl);if(!!a)try{const o=await this.request(e,t,r?.baseUrl,`v4/projects/${a}/repository/commits/${u}?stats=false`,{method:"GET"});let i;const g=await this.findUser(e,t,o.author_name,r);for(const d of g)if(d.name===o.author_name||d.publicEmail&&d.publicEmail===o.author_email){if(i=d,d.state==="active")break}else((0,M.qq)(d.name,o.author_name)||d.publicEmail&&(0,M.qq)(d.publicEmail,o.author_email))&&(i=d);return i==null?void 0:(i.avatarUrl&&!/^([a-zA-Z][\w+.-]+):/.test(i.avatarUrl)&&(i.avatarUrl=_.Uri.joinPath(_.Uri.parse(i.webUrl),"..",i.avatarUrl).toString()),{provider:e,name:i.name||void 0,email:o.author_email||void 0,avatarUrl:i.avatarUrl||void 0})}catch(o){if(o instanceof c.Ww)return;throw this.handleException(o,e,n)}}async getAccountForEmail(e,t,s,l,u,r){const n=h.Y.getCorrelationContext();try{const[a]=await this.findUser(e,t,u,r);return a==null?void 0:{provider:e,name:a.name||void 0,email:a.publicEmail||void 0,avatarUrl:a.avatarUrl||void 0}}catch(a){if(a instanceof c.Ww)return;throw this.handleException(a,e,n)}}async getDefaultBranch(e,t,s,l,u){var r,n,a;const o=h.Y.getCorrelationContext();try{const i=`query getDefaultBranch(
	$fullPath: ID!
) {
	project(fullPath: $fullPath) {
		repository {
			rootRef
		}
}`,g=await this.graphql(e,t,u?.baseUrl,i,{fullPath:`${s}/${l}`}),d=((a=(n=(r=g?.data)==null?void 0:r.project)==null?void 0:n.repository)==null?void 0:a.rootRef)??void 0;return d==null?void 0:{provider:e,name:d}}catch(i){if(i instanceof c.Ww)return;throw this.handleException(i,e,o)}}async getIssueOrPullRequest(e,t,s,l,u,r){var n,a,o,i;const g=h.Y.getCorrelationContext();try{const d=`query getIssueOrMergeRequest(
	$fullPath: ID!
	$iid: String!
) {
	project(fullPath: $fullPath) {
		mergeRequest(iid: $iid) {
			author {
				name
				avatarUrl
				webUrl
			}
			iid
			title
			description
			state
			createdAt
			updatedAt
			mergedAt
			webUrl
		}
		issue(iid: $iid) {
			author {
				name
				avatarUrl
				webUrl
			}
			iid
			title
			description
			state
			createdAt
			updatedAt
			closedAt
			webUrl
		}
	}
}`,D=await this.graphql(e,t,r?.baseUrl,d,{fullPath:`${s}/${l}`,iid:String(u)});if(((a=(n=D?.data)==null?void 0:n.project)==null?void 0:a.issue)!=null){const E=D.data.project.issue;return{provider:e,type:m.IssueOrPullRequestType.Issue,id:E.iid,date:new Date(E.createdAt),title:E.title,closed:E.state==="closed",closedDate:E.closedAt==null?void 0:new Date(E.closedAt),url:E.webUrl}}if(((i=(o=D?.data)==null?void 0:o.project)==null?void 0:i.mergeRequest)!=null){const E=D.data.project.mergeRequest;return{provider:e,type:m.IssueOrPullRequestType.PullRequest,id:E.iid,date:new Date(E.createdAt),title:E.title,closed:E.state==="closed",closedDate:E.state==="closed"?new Date(E.updatedAt):void 0,url:E.webUrl}}return}catch(d){if(d instanceof c.Ww)return;throw this.handleException(d,e,g)}}async getPullRequestForBranch(e,t,s,l,u,r){var n,a,o,i,g,d,D,E,W,F,Y,K,J,z,Z,H,X,V,Q,k,ee,te;const ne=h.Y.getCorrelationContext();try{const L=`
			nodes {
				iid
				author {
					name
					avatarUrl
					webUrl
				}
				title
				description
				state
				createdAt
				updatedAt
				mergedAt
				webUrl
			}`,le=`query getMergeRequestForBranch(
	$fullPath: ID!
	$branches: [String!]
) {
	project(fullPath: $fullPath) {
		${r?.include==null?`mergeRequests(sourceBranches: $branches sort: UPDATED_DESC first: 1) {
			${L}
		}`:""}
		${(n=r?.include)!=null&&n.includes(P.GitLabMergeRequestState.OPEN)?`opened: mergeRequests(sourceBranches: $branches state: opened sort: UPDATED_DESC first: 1) {
			${L}
		}`:""}
		${(a=r?.include)!=null&&a.includes(P.GitLabMergeRequestState.MERGED)?`merged: mergeRequests(sourceBranches: $branches state: merged sort: UPDATED_DESC first: 1) {
			${L}
		}`:""}
		${(o=r?.include)!=null&&o.includes(P.GitLabMergeRequestState.CLOSED)?`closed: mergeRequests(sourceBranches: $branches state: closed sort: UPDATED_DESC first: 1) {
			${L}
		}`:""}
	}
}`,S=await this.graphql(e,t,r?.baseUrl,le,{fullPath:`${s}/${l}`,branches:[u],state:r?.include});let p;if(r?.include==null)p=(D=(d=(g=(i=S?.data)==null?void 0:i.project)==null?void 0:g.mergeRequests)==null?void 0:d.nodes)==null?void 0:D[0];else for(const x of r.include){let C;x===P.GitLabMergeRequestState.OPEN?C=(Y=(F=(W=(E=S?.data)==null?void 0:E.project)==null?void 0:W.opened)==null?void 0:F.nodes)==null?void 0:Y[0]:x===P.GitLabMergeRequestState.MERGED?C=(Z=(z=(J=(K=S?.data)==null?void 0:K.project)==null?void 0:J.merged)==null?void 0:z.nodes)==null?void 0:Z[0]:x===P.GitLabMergeRequestState.CLOSED&&(C=(Q=(V=(X=(H=S?.data)==null?void 0:H.project)==null?void 0:X.closed)==null?void 0:V.nodes)==null?void 0:Q[0]),C!=null&&(p==null||new Date(C.updatedAt)>new Date(p.updatedAt))&&(p=C)}return p==null?void 0:new m.PullRequest(e,{name:((k=p.author)==null?void 0:k.name)??"Unknown",avatarUrl:((ee=p.author)==null?void 0:ee.avatarUrl)??"",url:((te=p.author)==null?void 0:te.webUrl)??""},String(p.iid),p.title,p.webUrl,P.GitLabMergeRequest.fromState(p.state),new Date(p.updatedAt),p.state!==P.GitLabMergeRequestState.CLOSED?void 0:new Date(p.updatedAt),p.mergedAt==null?void 0:new Date(p.mergedAt))}catch(L){if(L instanceof c.Ww)return;throw this.handleException(L,e,ne)}}async getPullRequestForCommit(e,t,s,l,u,r){const n=h.Y.getCorrelationContext(),a=await this.getProjectId(e,t,s,l,r?.baseUrl);if(!!a)try{const o=await this.request(e,t,r?.baseUrl,`v4/projects/${a}/repository/commits/${u}/merge_requests`,{method:"GET"});return o==null||o.length===0?void 0:(o.length>1&&o.sort((i,g)=>(i.state===P.GitLabMergeRequestState.OPEN?-1:1)-(g.state===P.GitLabMergeRequestState.OPEN?-1:1)||new Date(g.updated_at).getTime()-new Date(i.updated_at).getTime()),P.GitLabMergeRequestREST.from(o[0],e))}catch(o){if(o instanceof c.Ww)return;throw this.handleException(o,e,n)}}async findUser(e,t,s,l){var u,r;const n=h.Y.getCorrelationContext();try{const a=`query findUser(
$search: String!
) {
	users(search: $search) {
		nodes {
			id
			name
			username,
			publicEmail,
			state
			avatarUrl
			webUrl
		}
	}
}`,o=await this.graphql(e,t,l?.baseUrl,a,{search:s}),i=(r=(u=o?.data)==null?void 0:u.users)==null?void 0:r.nodes;if(i==null||i.length===0)return[];const g=[];for(const d of i){const D=/gid:\/\/gitlab\/User\/([0-9]+)\b/.exec(d.id);D!=null&&g.push({id:parseInt(D[1],10),name:d.name,username:d.username,publicEmail:d.publicEmail||void 0,state:d.state,avatarUrl:d.avatarUrl,webUrl:d.webUrl})}return g}catch(a){return a instanceof c.Ww?[]:(this.handleException(a,e,n),[])}}getProjectId(e,t,s,l,u){const r=`${t}|${s}/${l}`;let n=this._projectIds.get(r);return n==null&&(n=this.getProjectIdCore(e,t,s,l,u),this._projectIds.set(r,n)),n}async getProjectIdCore(e,t,s,l,u){var r,n;const a=h.Y.getCorrelationContext();try{const o=`query getProjectId(
	$fullPath: ID!
) {
	project(fullPath: $fullPath) {
		id
	}
}`,i=await this.graphql(e,t,u,o,{fullPath:`${s}/${l}`}),g=(n=(r=i?.data)==null?void 0:r.project)==null?void 0:n.id;if(g==null)return;const d=/gid:\/\/gitlab\/Project\/([0-9]+)\b/.exec(g);if(d==null)return;const D=d[1];return a!=null&&(a.exitDetails=`\u2022 projectId=${D}`),D}catch(o){if(o instanceof c.Ww)return;this.handleException(o,e,a);return}}async graphql(e,t,s,l,u){let r;try{const n=h.Y.logLevel===h.i.Debug||h.Y.isDebugging?new $.u(`[GITLAB] POST ${s}`,{log:!1}):void 0,a=this.getProxyAgent(e),o=this.getIgnoreSSLErrors(e);let i;try{if(o==="force"&&(i=process.env.NODE_TLS_REJECT_UNAUTHORIZED,process.env.NODE_TLS_REJECT_UNAUTHORIZED="0"),r=await(0,R.h)(`${s??"https://gitlab.com/api"}/graphql`,{method:"POST",headers:{authorization:`Bearer ${t}`,"content-type":"application/json"},agent:a,body:JSON.stringify({query:l,variables:u})}),r.ok){const g=await r.json();if("errors"in g)throw new c.Xq("GitLab",r,g.errors);return g}throw new c.Xq("GitLab",r)}finally{o==="force"&&(process.env.NODE_TLS_REJECT_UNAUTHORIZED=i);const g=/(^[^({\n]+)/.exec(l),d=` ${g?.[1].trim()??l}`;n?.stop({message:d})}}catch(n){throw n instanceof c.Xq?this.handleRequestError(n,t):h.Y.isDebugging&&_.window.showErrorMessage(`GitLab request failed: ${n.message}`),n}}async request(e,t,s,l,u){const r=`${s??"https://gitlab.com/api"}/${l}`;let n;try{const a=h.Y.logLevel===h.i.Debug||h.Y.isDebugging?new $.u(`[GITLAB] ${u?.method??"GET"} ${r}`,{log:!1}):void 0,o=this.getProxyAgent(e),i=this.getIgnoreSSLErrors(e);let g;try{if(i==="force"&&(g=process.env.NODE_TLS_REJECT_UNAUTHORIZED,process.env.NODE_TLS_REJECT_UNAUTHORIZED="0"),n=await(0,R.h)(r,oe({headers:{authorization:`Bearer ${t}`,"content-type":"application/json"},agent:o},u)),n.ok)return await n.json();throw new c.Xq("GitLab",n)}finally{i==="force"&&(process.env.NODE_TLS_REJECT_UNAUTHORIZED=g),a?.stop()}}catch(a){throw a instanceof c.Xq?this.handleRequestError(a,t):h.Y.isDebugging&&_.window.showErrorMessage(`GitLab request failed: ${a.message}`),a}}handleRequestError(e,t){var s,l,u,r,n;switch(e.status){case 404:case 410:case 422:throw new c.Ww(e);case 401:throw new c._7("gitlab",c.Jx.Unauthorized,e);case 403:if(e.message.includes("rate limit exceeded")){let a;const o=(l=(s=e.response)==null?void 0:s.headers)==null?void 0:l.get("x-ratelimit-reset");throw o!=null&&(a=parseInt(o,10),Number.isNaN(a)&&(a=void 0)),new c.yx(e,t,a)}throw new c._7("gitlab",c.Jx.Forbidden,e);case 500:e.response!=null&&_.window.showErrorMessage("GitLab failed to respond and might be experiencing issues. Please visit the [GitLab status page](https://status.gitlab.com/) for more information.","OK");return;case 502:if(e.message.includes("timeout")){_.window.showErrorMessage("GitLab request timed out");return}break;default:if(e.status>=400&&e.status<500)throw new c.Bn(e);break}h.Y.isDebugging&&_.window.showErrorMessage(`GitLab request failed: ${((n=(r=(u=e.response)==null?void 0:u.errors)==null?void 0:r[0])==null?void 0:n.message)??e.message}`)}handleException(e,t,s){return h.Y.error(e,s),e instanceof c._7&&this.showAuthenticationErrorMessage(e,t),e}async showAuthenticationErrorMessage(e,t){if(e.reason===c.Jx.Unauthorized||e.reason===c.Jx.Forbidden){const s="Reauthenticate";await _.window.showErrorMessage(`${e.message}. Would you like to try reauthenticating${e.reason===c.Jx.Forbidden?" to provide additional access":""}?`,s)===s&&await t.reauthenticate()}else _.window.showErrorMessage(e.message)}}U(y,"GitLabApi"),q([(0,b.fF)({args:{0:f=>f.name,1:"<token>"}})],y.prototype,"getAccountForCommit",1),q([(0,b.fF)({args:{0:f=>f.name,1:"<token>"}})],y.prototype,"getAccountForEmail",1),q([(0,b.fF)({args:{0:f=>f.name,1:"<token>"}})],y.prototype,"getDefaultBranch",1),q([(0,b.fF)({args:{0:f=>f.name,1:"<token>"}})],y.prototype,"getIssueOrPullRequest",1),q([(0,b.fF)({args:{0:f=>f.name,1:"<token>"}})],y.prototype,"getPullRequestForBranch",1),q([(0,b.fF)({args:{0:f=>f.name,1:"<token>"}})],y.prototype,"getPullRequestForCommit",1)},2925:(T,O,v)=>{v.r(O),v.d(O,{GitLabMergeRequest:()=>R,GitLabMergeRequestREST:()=>A,GitLabMergeRequestState:()=>j});var _=v(2976),j=(w=>(w.OPEN="opened",w.CLOSED="closed",w.MERGED="merged",w.LOCKED="locked",w))(j||{}),R;(w=>{function c(h){return h==="merged"?_.PullRequestState.Merged:h==="closed"||h==="locked"?_.PullRequestState.Closed:_.PullRequestState.Open}U(c,"fromState"),w.fromState=c;function m(h){return h===_.PullRequestState.Merged?"merged":h===_.PullRequestState.Closed?"closed":"opened"}U(m,"toState"),w.toState=m})(R||(R={}));var A;(w=>{function c(m,h){var b,$,M;return new _.PullRequest(h,{name:((b=m.author)==null?void 0:b.name)??"Unknown",avatarUrl:(($=m.author)==null?void 0:$.avatar_url)??"",url:((M=m.author)==null?void 0:M.web_url)??""},String(m.iid),m.title,m.web_url,R.fromState(m.state),new Date(m.updated_at),m.closed_at==null?void 0:new Date(m.closed_at),m.merged_at==null?void 0:new Date(m.merged_at))}U(c,"from"),w.from=c})(A||(A={}))}}]);

//# sourceMappingURL=feature-gitlab.js.map