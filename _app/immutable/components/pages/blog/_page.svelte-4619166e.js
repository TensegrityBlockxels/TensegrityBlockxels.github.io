import{S as H,i as q,s as I,k as u,q as k,a as L,l as d,m,r as x,h,c as S,b as _,G as p,B as v,I as y,n as g,u as A}from"../../../chunks/index-5b0cdcec.js";/* empty css                            */function E(c,l,o){const s=c.slice();return s[1]=l[o],s}function b(c){let l,o,s=c[1]+"",n,i;return{c(){l=u("li"),o=u("a"),n=k(s),this.h()},l(t){l=d(t,"LI",{});var e=m(l);o=d(e,"A",{href:!0});var r=m(o);n=x(r,s),r.forEach(h),e.forEach(h),this.h()},h(){g(o,"href",i=c[1])},m(t,e){_(t,l,e),p(l,o),p(o,n)},p(t,e){e&1&&s!==(s=t[1]+"")&&A(n,s),e&1&&i!==(i=t[1])&&g(o,"href",i)},d(t){t&&h(l)}}}function B(c){let l,o,s,n,i=c[0].posts.reverse(),t=[];for(let e=0;e<i.length;e+=1)t[e]=b(E(c,i,e));return{c(){l=u("h1"),o=k("Hellooo"),s=L(),n=u("ul");for(let e=0;e<t.length;e+=1)t[e].c()},l(e){l=d(e,"H1",{});var r=m(l);o=x(r,"Hellooo"),r.forEach(h),s=S(e),n=d(e,"UL",{});var a=m(n);for(let f=0;f<t.length;f+=1)t[f].l(a);a.forEach(h)},m(e,r){_(e,l,r),p(l,o),_(e,s,r),_(e,n,r);for(let a=0;a<t.length;a+=1)t[a].m(n,null)},p(e,[r]){if(r&1){i=e[0].posts.reverse();let a;for(a=0;a<i.length;a+=1){const f=E(e,i,a);t[a]?t[a].p(f,r):(t[a]=b(f),t[a].c(),t[a].m(n,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=i.length}},i:v,o:v,d(e){e&&h(l),e&&h(s),e&&h(n),y(t,e)}}}function C(c,l,o){let{data:s}=l;return console.log(s.posts),c.$$set=n=>{"data"in n&&o(0,s=n.data)},[s]}class U extends H{constructor(l){super(),q(this,l,C,B,I,{data:0})}}export{U as default};
