import{S as $,i as b,s as w,C as S,k as _,a as P,D,l as m,h as c,c as I,m as h,n as u,E as y,b as v,F as M,G as O,H as j,g as k,d as C,o as T,I as V}from"../chunks/index.38a6999c.js";const q=!0,z="always",H=Object.freeze(Object.defineProperty({__proto__:null,prerender:q,trailingSlash:z},Symbol.toStringTag,{value:"Module"}));const{document:g}=V;function A(r){let s,i,n,a,o;const d=r[1].default,t=S(d,r,r[0],null);return{c(){s=_("meta"),i=P(),n=_("div"),a=_("div"),t&&t.c(),this.h()},l(e){const l=D("svelte-1xk05yi",g.head);s=m(l,"META",{name:!0,content:!0}),l.forEach(c),i=I(e),n=m(e,"DIV",{class:!0});var p=h(n);a=m(p,"DIV",{class:!0});var f=h(a);t&&t.l(f),f.forEach(c),p.forEach(c),this.h()},h(){u(s,"name","viewport"),u(s,"content","width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"),u(a,"class","content svelte-16su8ht"),u(n,"class","container svelte-16su8ht")},m(e,l){y(g.head,s),v(e,i,l),v(e,n,l),y(n,a),t&&t.m(a,null),o=!0},p(e,[l]){t&&t.p&&(!o||l&1)&&M(t,d,e,e[0],o?j(d,e[0],l,null):O(e[0]),null)},i(e){o||(k(t,e),o=!0)},o(e){C(t,e),o=!1},d(e){c(s),e&&c(i),e&&c(n),t&&t.d(e)}}}function E(){document.documentElement.style.setProperty("--is-notch-left",screen.orientation.type=="landscape-primary"?"1":"0"),document.documentElement.style.setProperty("--is-notch-right",screen.orientation.type=="landscape-secondary"?"1":"0"),document.documentElement.style.setProperty("--is-notch-top",screen.orientation.type=="portrait-primary"?"1":"0")}function F(r,s,i){let{$$slots:n={},$$scope:a}=s;return T(()=>{screen.orientation.onchange=E,E()}),r.$$set=o=>{"$$scope"in o&&i(0,a=o.$$scope)},[a,n]}class L extends ${constructor(s){super(),b(this,s,F,A,w,{})}}export{L as component,H as universal};