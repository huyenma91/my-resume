(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,c,t){},61:function(e,c,t){},62:function(e,c,t){},63:function(e,c,t){},64:function(e,c,t){},65:function(e,c,t){},66:function(e,c,t){},67:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t(29),a=t.n(s),i=t(10),r=t(2),o=t(31),l=t(4),j=function(){var e=Object(n.useState)((function(){return localStorage.getItem("token")})),c=Object(l.a)(e,2),t=c[0],s=c[1];return[t,function(e){localStorage.setItem("token",e),s(e)}]},d=t(0),h=function(e){return function(){var e=j(),c=Object(l.a)(e,1)[0],t=function(e){var c=e.split(".")[1];return JSON.parse(window.atob(c))},s=Object(n.useState)((function(){return c?t(c):null})),a=Object(l.a)(s,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){r(c?t(c):null)}),[c]),i}()?Object(d.jsx)(r.b,Object(o.a)({},e)):Object(d.jsx)(r.a,{to:"/"})},b=t(11),u=t.n(b),m=t(13),x=t(14),O=t.n(x);t(28);var f=function(){var e=Object(r.g)(),c=j(),t=Object(l.a)(c,2),s=(t[0],t[1]),a=Object(n.useState)(""),i=Object(l.a)(a,2),o=i[0],h=i[1],b=Object(n.useState)(""),x=Object(l.a)(b,2),f=x[0],p=x[1],v=Object(n.useState)(""),g=Object(l.a)(v,2),N=g[0],w=g[1],_=function(){var c=Object(m.a)(u.a.mark((function c(){return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,O.a.post("/api/login",{username:o,password:f}).then((function(c){if(c.data.message)w(c.data.message);else{var t=c.data.token;s(t),e.push("/home")}})).catch((function(e){console.log(e)}));case 2:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"loginPage",children:Object(d.jsx)("div",{className:"d-flex justify-content-center h-100",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"card-header",children:[Object(d.jsx)("h3",{children:"Login"}),Object(d.jsxs)("div",{className:"d-flex justify-content-end social_icon",children:[Object(d.jsx)("span",{children:Object(d.jsx)("a",{className:"icon-login",href:"https://www.facebook.com/nhatphuong.pham.1/",children:Object(d.jsx)("i",{className:"fab fa-facebook-square"})})}),Object(d.jsx)("span",{children:Object(d.jsx)("a",{className:"icon-login",href:"https://www.facebook.com/nhatphuong.pham.1/",children:Object(d.jsx)("i",{className:"fab fa-google-plus-square"})})}),Object(d.jsx)("span",{children:Object(d.jsx)("a",{className:"icon-login",href:"https://www.facebook.com/nhatphuong.pham.1/",children:Object(d.jsx)("i",{className:"fab fa-twitter-square"})})})]})]}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{className:"input-group form-group",children:[Object(d.jsx)("div",{className:"input-group-prepend",children:Object(d.jsx)("span",{className:"input-group-text",children:Object(d.jsx)("i",{className:"fas fa-user"})})}),Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"username",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsxs)("div",{className:"input-group form-group",children:[Object(d.jsx)("div",{className:"input-group-prepend",children:Object(d.jsx)("span",{className:"input-group-text",children:Object(d.jsx)("i",{className:"fas fa-key"})})}),Object(d.jsx)("input",{type:"password",className:"form-control",placeholder:"password",onChange:function(e){return p(e.target.value)}})]}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"button",onClick:_,value:"Login",className:"btn float-right login_btn"})})]})}),Object(d.jsx)("div",{className:"card-footer",children:Object(d.jsxs)("div",{className:"d-flex justify-content-center links",children:["Don't have an account?",Object(d.jsx)("a",{href:"/register",children:"Register"})]})}),Object(d.jsx)("h5",{style:{color:"red",textAlign:"center"},children:N})]})})})};var p=function(){var e=Object(n.useState)(""),c=Object(l.a)(e,2),t=c[0],s=c[1],a=Object(n.useState)(""),i=Object(l.a)(a,2),r=i[0],o=i[1],j=Object(n.useState)(""),h=Object(l.a)(j,2),b=h[0],x=h[1];Object(n.useEffect)((function(){b&&setTimeout((function(){x("")}),2e3)}),[b]);var f=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/api/register",{username:t,password:r}).then((function(e){e.data.message?x(e.data.message):x("Successfully creating new account")})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"loginPage",children:Object(d.jsx)("div",{className:"d-flex justify-content-center h-100",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"card-header",children:[Object(d.jsx)("h3",{children:"Register"}),Object(d.jsxs)("div",{className:"d-flex justify-content-end social_icon",children:[Object(d.jsx)("span",{children:Object(d.jsx)("a",{className:"icon-login",href:"https://www.facebook.com/nhatphuong.pham.1/",children:Object(d.jsx)("i",{className:"fab fa-facebook-square"})})}),Object(d.jsx)("span",{children:Object(d.jsx)("a",{className:"icon-login",href:"https://www.facebook.com/nhatphuong.pham.1/",children:Object(d.jsx)("i",{className:"fab fa-google-plus-square"})})}),Object(d.jsx)("span",{children:Object(d.jsx)("a",{className:"icon-login",href:"https://www.facebook.com/nhatphuong.pham.1/",children:Object(d.jsx)("i",{className:"fab fa-twitter-square"})})})]})]}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{className:"input-group form-group",children:[Object(d.jsx)("div",{className:"input-group-prepend",children:Object(d.jsx)("span",{className:"input-group-text",children:Object(d.jsx)("i",{className:"fas fa-user"})})}),Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"username",onChange:function(e){return s(e.target.value)}})]}),Object(d.jsxs)("div",{className:"input-group form-group",children:[Object(d.jsx)("div",{className:"input-group-prepend",children:Object(d.jsx)("span",{className:"input-group-text",children:Object(d.jsx)("i",{className:"fas fa-key"})})}),Object(d.jsx)("input",{type:"password",className:"form-control",placeholder:"password",onChange:function(e){return o(e.target.value)}})]}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"button",onClick:f,value:"Register",className:"btn float-right login_btn"})})]})}),Object(d.jsx)("div",{className:"card-footer",children:Object(d.jsxs)("div",{className:"d-flex justify-content-center links",children:["Already have an account?",Object(d.jsx)("a",{href:"/",children:"Login"})]})}),Object(d.jsx)("h5",{style:{color:"red",textAlign:"center"},children:b})]})})})},v=(t(61),t(62),t.p+"static/media/homeBG.b37e9f44.jpg");var g=function(){return Object(d.jsx)("div",{className:"hero",children:Object(d.jsxs)("div",{className:"hero_container",children:[Object(d.jsxs)("div",{className:"hero_container--left",children:[Object(d.jsx)("h1",{children:"My name is Pham Nhat Phuong"}),Object(d.jsx)("h2",{children:"I am a final-year student"}),Object(d.jsx)("p",{children:"at Bach Khoa HCM"}),Object(d.jsx)("button",{className:"hero_container--btn",children:Object(d.jsx)("a",{href:"/CV",children:"Go to my CV"})})]}),Object(d.jsx)("div",{className:"hero_container--right",children:Object(d.jsx)("img",{src:v,alt:"myPic",className:"hero_container--img"})})]})})};t(63);var N=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)("a",{href:"/home",className:"navbar_logo",children:"Ph\u1ea1m Nh\u1eadt Ph\u01b0\u01a1ng"}),Object(d.jsx)("div",{className:"navbar_bars",children:Object(d.jsx)("i",{className:"fas fa-bars"})}),Object(d.jsxs)("div",{className:"navbar_menu",children:[Object(d.jsx)(i.b,{to:"/home",className:"navbar_menu--links",children:"Home"}),Object(d.jsx)(i.b,{to:"/CV",className:"navbar_menu--links",children:"CV"}),Object(d.jsx)("a",{href:"/",onClick:function(){localStorage.removeItem("token")},className:"navbar_menu--links",id:"button",children:"Logout"})]})]})})};t(64),t(65);var w=function(){return Object(d.jsx)("div",{className:"cv",children:Object(d.jsxs)("div",{className:"cv_container",children:[Object(d.jsxs)("div",{className:"cv_container_firstRow",children:[Object(d.jsx)("div",{className:"cv_container_firstRow_leftColumn",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("span",{className:"odd"}),Object(d.jsx)("span",{className:"odd"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("h2",{children:"Information"}),Object(d.jsx)("div",{className:"cv_container_firstRow_leftColumn_titleLine"}),Object(d.jsx)("p",{children:"My major is Computer Engineering , however i am in love with creating sorfware and application. That's the reason i want to be a web developer. I want to build a web that can get attention of people."})]})]})}),Object(d.jsx)("div",{className:"cv_container_firstRow_rightColumn",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("span",{className:"odd"}),Object(d.jsx)("span",{className:"odd"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("h2",{children:"Technical Skills"}),Object(d.jsx)("div",{className:"cv_container_firstRow_rightColumn_titleLine"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Good at: HTML/CSS/SASS"}),Object(d.jsx)("li",{children:"Frequently use: Python, Javascript"}),Object(d.jsx)("li",{children:"Basic in: C/C++, Java, PHP"}),Object(d.jsx)("li",{children:"Framwork used: Django, ReactJs"}),Object(d.jsx)("li",{children:"Database: MySql"}),Object(d.jsx)("li",{children:"Languages: Vietnamese and English (6.0 IELTS)"})]})]})]})})]}),Object(d.jsxs)("div",{className:"cv_container_secondRow",children:[Object(d.jsx)("div",{className:"cv_container_secondRow_leftColumn",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("span",{className:"odd"}),Object(d.jsx)("span",{className:"odd"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("h2",{children:"Education"}),Object(d.jsx)("div",{className:"cv_container_secondRow_leftColumn_titleLine"}),Object(d.jsxs)("p",{children:["Ho Chi Minh University of Technology (Bach Khoa University)",Object(d.jsx)("br",{}),"Major: Computer Engineering",Object(d.jsx)("br",{}),"2017-2021 (Intended graduate in 2021)",Object(d.jsx)("br",{}),"GPA: 7.66/10"]})]})]})}),Object(d.jsx)("div",{className:"cv_container_secondRow_rightColumn",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("span",{className:"odd"}),Object(d.jsx)("span",{className:"odd"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("h2",{children:"Experiences"}),Object(d.jsx)("div",{className:"cv_container_secondRow_rightColumn_titleLine"}),Object(d.jsx)("h5",{style:{color:"#00cc66"},children:"FPT Software HCM Internship"}),Object(d.jsx)("h6",{children:"(June 2020 - September 2020)"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Design web page for selling medical product"}),Object(d.jsx)("li",{children:"Working with Java Spring Framework using Apache Tomcat"})]})]})]})})]}),Object(d.jsx)("div",{className:"cv_container_thirdRow",children:Object(d.jsx)("div",{className:"cv_container_thirdRow_leftColumn",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("span",{className:"odd"}),Object(d.jsx)("span",{className:"odd"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("h2",{children:"Contact"}),Object(d.jsx)("div",{className:"cv_container_thirdRow_leftColumn_titleLine"}),Object(d.jsxs)("p",{children:["Address: 14/13/14A Than Nhan Trung, Ward 13, Tan Binh District, Phone: 0917565059",Object(d.jsx)("br",{}),"Email: chip.pham2101@gmail.com",Object(d.jsx)("br",{}),"LinkedIn:",Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/phuongpham2101/",children:"https://www.linkedin.com/in/phuongpham2101"}),Object(d.jsx)("br",{}),"Github: ",Object(d.jsx)("a",{href:"https://github.com/huyenma91",children:"https://github.com/huyenma91"}),Object(d.jsx)("br",{})]})]})]})})})]})})};t(66);var _=function(){return Object(d.jsx)(i.a,{children:Object(d.jsxs)(r.d,{children:[Object(d.jsx)(r.b,{exact:!0,path:"/",children:Object(d.jsx)(f,{})}),Object(d.jsx)(r.b,{exact:!0,path:"/register",children:Object(d.jsx)(p,{})}),Object(d.jsxs)(h,{exact:!0,path:"/home",children:[Object(d.jsx)(N,{}),Object(d.jsx)(g,{})]}),Object(d.jsxs)(h,{exact:!0,path:"/CV",children:[Object(d.jsx)(N,{}),Object(d.jsx)(w,{})]})]})})},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(d.jsx)(_,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");k?function(e){fetch(e).then((function(c){404===c.status||-1===c.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):y(e)}))}}()}},[[67,1,2]]]);
//# sourceMappingURL=main.0c3ffab2.chunk.js.map