function k(){}const it=t=>t;function rt(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function F(){return Object.create(null)}function x(t){t.forEach(J)}function K(t){return typeof t=="function"}function Pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ot(t){return Object.keys(t).length===0}function lt(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function qt(t,e,n){t.$$.on_destroy.push(lt(e,n))}function Dt(t,e,n,o){if(t){const r=Q(t,e,n,o);return t[0](r)}}function Q(t,e,n,o){return t[1]&&o?rt(n.ctx.slice(),t[1](o(e))):n.ctx}function Tt(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],i=Math.max(e.dirty.length,r.length);for(let s=0;s<i;s+=1)c[s]=e.dirty[s]|r[s];return c}return e.dirty|r}return e.dirty}function zt(t,e,n,o,r,c){if(r){const i=Q(e,n,o,c);t.p(i,r)}}function Bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let o=0;o<n;o++)e[o]=-1;return e}return-1}function Lt(t){return t==null?"":t}const W=typeof window!="undefined";let st=W?()=>window.performance.now():()=>Date.now(),z=W?t=>requestAnimationFrame(t):k;const b=new Set;function U(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&z(U)}function ct(t){let e;return b.size===0&&z(U),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let O=!1;function ut(){O=!0}function at(){O=!1}function ft(t,e,n,o){for(;t<e;){const r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function _t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,_=(r>0&&e[n[r]].claim_order<=u?r+1:ft(1,r,a=>e[n[a]].claim_order,u))-1;o[l]=n[_]+1;const f=_+1;n[f]=l,r=Math.max(f,r)}const c=[],i=[];let s=e.length-1;for(let l=n[r]+1;l!=0;l=o[l-1]){for(c.push(e[l-1]);s>=l;s--)i.push(e[s]);s--}for(;s>=0;s--)i.push(e[s]);c.reverse(),i.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<i.length;l++){for(;u<c.length&&i[l].claim_order>=c[u].claim_order;)u++;const _=u<c.length?c[u]:null;t.insertBefore(i[l],_)}}function dt(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ht(t){const e=X("style");return mt(V(t),e),e.sheet}function mt(t,e){dt(t.head||t,e)}function pt(t,e){if(O){for(_t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ft(t,e,n){O&&!n?pt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function yt(t){t.parentNode.removeChild(t)}function Ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function It(){return B(" ")}function Gt(){return B("")}function Jt(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function Kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function gt(t){return Array.from(t.childNodes)}function bt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Y(t,e,n,o,r=!1){bt(t);const c=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const s=t[i];if(e(s)){const l=n(s);return l===void 0?t.splice(i,1):t[i]=l,r||(t.claim_info.last_index=i),s}}for(let i=t.claim_info.last_index-1;i>=0;i--){const s=t[i];if(e(s)){const l=n(s);return l===void 0?t.splice(i,1):t[i]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,s}}return o()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function xt(t,e,n,o){return Y(t,r=>r.nodeName===e,r=>{const c=[];for(let i=0;i<r.attributes.length;i++){const s=r.attributes[i];n[s.name]||c.push(s.name)}c.forEach(i=>r.removeAttribute(i))},()=>o(e))}function Qt(t,e,n){return xt(t,e,n,X)}function $t(t,e){return Y(t,n=>n.nodeType===3,n=>{const o=""+e;if(n.data.startsWith(o)){if(n.data.length!==o.length)return n.splitText(o.length)}else n.data=o},()=>B(e),!0)}function Wt(t){return $t(t," ")}function Ut(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Vt(t,e,n,o){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function wt(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}function Xt(t,e=document.body){return Array.from(e.querySelectorAll(t))}const S=new Map;let M=0;function vt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Et(t,e){const n={stylesheet:ht(e),rules:{}};return S.set(t,n),n}function H(t,e,n,o,r,c,i,s=0){const l=16.666/o;let u=`{
`;for(let p=0;p<=1;p+=l){const g=e+(n-e)*c(p);u+=p*100+`%{${i(g,1-g)}}
`}const _=u+`100% {${i(n,1-n)}}
}`,f=`__svelte_${vt(_)}_${s}`,a=V(t),{stylesheet:d,rules:h}=S.get(a)||Et(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${o}ms linear ${r}ms 1 both`,M+=1,f}function kt(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-o.length;r&&(t.style.animation=o.join(", "),M-=r,M||At())}function At(){z(()=>{M||(S.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),S.clear())})}let E;function v(t){E=t}function L(){if(!E)throw new Error("Function called outside component initialization");return E}function Yt(t){L().$$.on_mount.push(t)}function Zt(t){L().$$.after_update.push(t)}function te(t,e){return L().$$.context.set(t,e),e}const w=[],I=[],j=[],G=[],Z=Promise.resolve();let T=!1;function tt(){T||(T=!0,Z.then(et))}function ee(){return tt(),Z}function R(t){j.push(t)}const q=new Set;let N=0;function et(){const t=E;do{for(;N<w.length;){const e=w[N];N++,v(e),Nt(e.$$)}for(v(null),w.length=0,N=0;I.length;)I.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];q.has(n)||(q.add(n),n())}j.length=0}while(w.length);for(;G.length;)G.pop()();T=!1,q.clear(),v(t)}function Nt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}let $;function jt(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function D(t,e,n){t.dispatchEvent(wt(`${e?"intro":"outro"}${n}`))}const C=new Set;let m;function ne(){m={r:0,c:[],p:m}}function ie(){m.r||x(m.c),m=m.p}function Ct(t,e){t&&t.i&&(C.delete(t),t.i(e))}function re(t,e,n,o){if(t&&t.o){if(C.has(t))return;C.add(t),m.c.push(()=>{C.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const St={duration:0};function oe(t,e,n,o){let r=e(t,n),c=o?0:1,i=null,s=null,l=null;function u(){l&&kt(t,l)}function _(a,d){const h=a.b-c;return d*=Math.abs(h),{a:c,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:y=it,tick:p=k,css:g}=r||St,P={start:st()+d,b:a};a||(P.group=m,m.r+=1),i||s?s=P:(g&&(u(),l=H(t,c,a,h,d,y,g)),a&&p(0,1),i=_(P,h),R(()=>D(t,a,"start")),ct(A=>{if(s&&A>s.start&&(i=_(s,h),s=null,D(t,i.b,"start"),g&&(u(),l=H(t,c,i.b,i.duration,0,y,r.css))),i){if(A>=i.end)p(c=i.b,1-c),D(t,i.b,"end"),s||(i.b?u():--i.group.r||x(i.group.c)),i=null;else if(A>=i.start){const nt=A-i.start;c=i.a+i.d*y(nt/i.duration),p(c,1-c)}}return!!(i||s)}))}return{run(a){K(r)?jt().then(()=>{r=r(),f(a)}):f(a)},end(){u(),i=s=null}}}function le(t,e){const n={},o={},r={$$scope:1};let c=t.length;for(;c--;){const i=t[c],s=e[c];if(s){for(const l in i)l in s||(o[l]=1);for(const l in s)r[l]||(n[l]=s[l],r[l]=1);t[c]=s}else for(const l in i)r[l]=1}for(const i in o)i in n||(n[i]=void 0);return n}function se(t){return typeof t=="object"&&t!==null?t:{}}function ce(t){t&&t.c()}function ue(t,e){t&&t.l(e)}function Mt(t,e,n,o){const{fragment:r,on_mount:c,on_destroy:i,after_update:s}=t.$$;r&&r.m(e,n),o||R(()=>{const l=c.map(J).filter(K);i?i.push(...l):x(l),t.$$.on_mount=[]}),s.forEach(R)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(w.push(t),tt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ae(t,e,n,o,r,c,i,s=[-1]){const l=E;v(t);const u=t.$$={fragment:null,ctx:null,props:c,update:k,not_equal:r,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:F(),dirty:s,skip_bound:!1,root:e.target||l.$$.root};i&&i(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return u.ctx&&r(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&Ot(t,f)),a}):[],u.update(),_=!0,x(u.before_update),u.fragment=o?o(u.ctx):!1,e.target){if(e.hydrate){ut();const f=gt(e.target);u.fragment&&u.fragment.l(f),f.forEach(yt)}else u.fragment&&u.fragment.c();e.intro&&Ct(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),at(),et()}v(l)}class fe{$destroy(){Rt(this,1),this.$destroy=k}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{se as A,Rt as B,rt as C,ee as D,k as E,Dt as F,Xt as G,pt as H,zt as I,Bt as J,Tt as K,it as L,Jt as M,x as N,qt as O,R as P,oe as Q,Lt as R,fe as S,Ht as T,gt as a,Kt as b,Qt as c,yt as d,X as e,Vt as f,Ft as g,$t as h,ae as i,Ut as j,It as k,Gt as l,Wt as m,ne as n,re as o,ie as p,Ct as q,te as r,Pt as s,B as t,Zt as u,Yt as v,ce as w,ue as x,Mt as y,le as z};