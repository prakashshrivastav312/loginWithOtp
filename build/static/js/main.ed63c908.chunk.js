(this["webpackJsonpreact-auth"]=this["webpackJsonpreact-auth"]||[]).push([[0],{56:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(26),s=n.n(a),i=n(23),j=(n(55),n(72)),o=n(73),b=n(47),u=n(12),l=(n(56),n(0)),d=n.n(l),O=n(3),h=n(71),p=n(13),x=n(24),m=n(43),v=Object(m.a)({apiKey:"AIzaSyCK83e3R4ajoLGCyEiVArN2ir3D0SCEJv4",authDomain:"sptr-1031d.firebaseapp.com",projectId:"sptr-1031d",storageBucket:"sptr-1031d.appspot.com",messagingSenderId:"974392724720",appId:"1:974392724720:web:81e3556598f4f24b4c4635",measurementId:"G-YGV1PPW3HS"}),f=Object(x.d)(v),g=n(4),y=Object(c.createContext)();function N(e){var t=e.children,n=Object(c.useState)({}),r=Object(p.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){var e=Object(x.e)(f,(function(e){console.log("Auth",e),s(e)}));return function(){e()}}),[]),Object(g.jsx)(y.Provider,{value:{user:a,logIn:function(e,t){return Object(x.f)(f,e,t)},signUp:function(e,t){return Object(x.c)(f,e,t)},logOut:function(){return Object(x.i)(f)},googleSignIn:function(){var e=new x.a;return Object(x.h)(f,e)},setUpRecaptcha:function(e){var t=new x.b("recaptcha-container",{},f);return t.render(),Object(x.g)(f,e,t)}},children:t})}function S(){return Object(c.useContext)(y)}var k=function(){var e=S(),t=e.logOut,n=e.user,c=Object(u.g)(),r=function(){var e=Object(O.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:c("/"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"p-4 box mt-3 text-center",children:["Welcome to NU10 Home ",Object(g.jsx)("br",{}),n&&n.email]}),Object(g.jsx)("div",{className:"d-grid gap-2",children:Object(g.jsx)(h.a,{variant:"primary",onClick:r,children:"Log out"})})]})},w=(n(59),function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"p-4 box",children:[Object(g.jsx)("h2",{className:"mb-3",children:"NU10 Authentication "}),Object(g.jsx)("hr",{}),Object(g.jsx)(i.b,{to:"/phonesignup",children:Object(g.jsx)("div",{className:"d-grid gap-2 mt-3",children:Object(g.jsx)(h.a,{variant:"success",type:"Submit",children:"Sign in with Phone Number"})})})]})})}),C=n(74),I=n(75),P=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(p.a)(a,2),j=s[0],o=s[1],b=Object(c.useState)(""),l=Object(p.a)(b,2),x=l[0],m=l[1],v=S().signUp,f=Object(u.g)(),y=function(){var e=Object(O.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),o(""),e.prev=2,e.next=5,v(n,x);case 5:f("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),o(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"p-4 box",children:[Object(g.jsx)("h2",{className:"mb-3",children:"Firebase Auth Signup"}),j&&Object(g.jsx)(C.a,{variant:"danger",children:j}),Object(g.jsxs)(I.a,{onSubmit:y,children:[Object(g.jsx)(I.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(g.jsx)(I.a.Control,{type:"email",placeholder:"Email address",onChange:function(e){return r(e.target.value)}})}),Object(g.jsx)(I.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(g.jsx)(I.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}})}),Object(g.jsx)("div",{className:"d-grid gap-2",children:Object(g.jsx)(h.a,{variant:"primary",type:"Submit",children:"Sign up"})})]})]}),Object(g.jsxs)("div",{className:"p-4 box mt-3 text-center",children:["Already have an account? ",Object(g.jsx)(i.b,{to:"/",children:"Log In"})]})]})},E=function(e){var t=e.children,n=S().user;return console.log("Check user in Private: ",n),n?t:Object(g.jsx)(u.a,{to:"/"})},B=(n(64),n(48)),G=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(p.a)(a,2),j=s[0],o=s[1],b=Object(c.useState)(""),l=Object(p.a)(b,2),x=l[0],m=l[1],v=Object(c.useState)(!1),f=Object(p.a)(v,2),y=f[0],N=f[1],k=Object(c.useState)(""),w=Object(p.a)(k,2),P=w[0],E=w[1],G=S().setUpRecaptcha,A=Object(u.g)(),U=function(){var e=Object(O.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),m(""),""!==n&&void 0!==n){e.next=4;break}return e.abrupt("return",m("Please enter a valid Phone Number"));case 4:return e.prev=4,e.next=7,G(n);case 7:c=e.sent,console.log(c),E(c),N(!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),m(e.t0.message);case 16:console.log(n);case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(O.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log(j),""!==j&&null!==j){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,m(""),e.next=8,P.confirm(j);case 8:A("/home"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),m(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"p-4 box",children:[x&&Object(g.jsx)(C.a,{variant:"danger",children:x}),Object(g.jsxs)(I.a,{onSubmit:U,style:{display:y?"none":"block"},children:[Object(g.jsxs)(I.a.Group,{className:"mb-3",controlId:"formBasicPhoneNumber",children:[Object(g.jsx)(B.a,{defaultCountry:"IN",value:n,onChange:r,placeholder:"Enter Phone Number"}),Object(g.jsx)("div",{id:"recaptcha-container"})]}),Object(g.jsxs)("div",{className:"button-right",children:[Object(g.jsxs)(i.b,{to:"/",children:[Object(g.jsx)(h.a,{variant:"secondary",children:"Back"}),"  \xa0"]}),Object(g.jsx)(h.a,{variant:"primary",type:"submit",children:"Send OTP"})]})]}),Object(g.jsxs)(I.a,{onSubmit:D,style:{display:y?"block":"none"},children:[Object(g.jsx)(I.a.Group,{className:"mb-3",controlId:"formBasicOtp",children:Object(g.jsx)(I.a.Control,{type:"otp",placeholder:"Enter OTP",onChange:function(e){return o(e.target.value)}})}),Object(g.jsxs)("div",{className:"button-right",children:[Object(g.jsx)(i.b,{to:"/",children:Object(g.jsx)(h.a,{variant:"secondary",children:"Cancel"})}),Object(g.jsx)(h.a,{variant:"primary",type:"submit",children:"Verify OTP"})]})]})]})})};var A=function(){return Object(g.jsx)(j.a,{style:{width:"400px"},children:Object(g.jsx)(o.a,{children:Object(g.jsx)(b.a,{children:Object(g.jsx)(N,{children:Object(g.jsxs)(u.d,{children:[Object(g.jsx)(u.b,{path:"/home",element:Object(g.jsx)(E,{children:Object(g.jsx)(k,{})})}),Object(g.jsx)(u.b,{path:"/",element:Object(g.jsx)(w,{})}),Object(g.jsx)(u.b,{path:"/phonesignup",element:Object(g.jsx)(G,{})}),Object(g.jsx)(u.b,{path:"/signup",element:Object(g.jsx)(P,{})})]})})})})})};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(i.a,{children:Object(g.jsx)(A,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.ed63c908.chunk.js.map