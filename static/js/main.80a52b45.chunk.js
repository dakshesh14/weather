(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{40:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),i=a(29),r=a.n(i),l=a(11),o=a(2),d=(a(38),a(39),a(40),a.p+"static/media/innovation_.0974ae45.svg");var j=function(){return Object(n.jsx)("div",{className:"vh-80 d-flex justify-content-center align-content-center flex-column",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-sm",children:Object(n.jsx)("img",{src:d,alt:"Something is wrong",className:"img-fluid"})}),Object(n.jsxs)("div",{className:"col-sm d-flex justify-content-center align-content-center flex-column",children:[Object(n.jsx)("h1",{children:"My name is Dev"}),Object(n.jsx)("p",{children:"I am Dev and let's me this quick, I am a web developer. I love to make things and hence I love my job! I am good in language like Python, JavaScript, CSS and yeah also HTML. I use popular and powerful frameworks & library like Django, react, Bootstrap, etc\u2026 to make sure your website is effective and expandable. I want to grow your buisness with your help and my skills."}),Object(n.jsx)("a",{href:"https://dev--portfolio.herokuapp.com/",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("button",{className:"btn-filled",children:"View Portfolio"})})]})]})})})},m=a.p+"static/media/logo.dbb560c3.png";var b=function(){return Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(n.jsxs)("div",{className:"container-fluid col-sm-12 col-md-10 col-lg-10",children:[Object(n.jsx)("a",{className:"navbar-brand",href:"#",children:Object(n.jsx)("div",{className:"navbar-logo",children:Object(n.jsx)("img",{src:m,alt:"",className:"img-fluid"})})}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(n.jsxs)("ul",{className:"navbar-nav ml-auto mb-2 mb-lg-0 align-items-center",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{exact:!0,activeClassName:"active",to:"/",className:"nav-link","aria-current":"page",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{exact:!0,activeClassName:"active",to:"/about",className:"nav-link",children:"About"})})]})})]})})},h=a(20),x=a.n(h),p=a(31),u=a(12);var v=function(e){var t=e.temp,a=e.feelsLike,c=e.temp_max,s=e.temp_min,i=e.wind_speed,r=e.main,l=e.city,o=e.date,d=e.icon,j=new Date(o);return j=j.toISOString().split("T")[0],Object(n.jsx)("div",{className:"weather-container-main",children:Object(n.jsxs)("div",{className:"weather-main-container",children:[Object(n.jsxs)("div",{className:"weather-sub-container",children:[Object(n.jsx)("div",{className:"weather-heading",children:Object(n.jsxs)("h1",{children:[t,"\xb0"]})}),Object(n.jsxs)("div",{className:"weather--city-container",children:[Object(n.jsx)("h1",{className:"m-0",children:l}),Object(n.jsx)("p",{children:j})]})]}),Object(n.jsxs)("div",{className:"weather-sub-container",children:[Object(n.jsx)("div",{className:"weather--main",children:Object(n.jsx)("img",{src:"http://openweathermap.org/img/wn/"+d+"@2x.png",alt:r})}),Object(n.jsx)("div",{className:"extra-detail--container",children:Object(n.jsxs)("ul",{className:"m-0 p-0",children:[Object(n.jsxs)("li",{children:["Max Temp: ",c,"\xb0"]}),Object(n.jsxs)("li",{children:["Min Temp: ",s,"\xb0"]}),Object(n.jsxs)("li",{children:["Feels Like: ",a,"\xb0"]}),Object(n.jsxs)("li",{children:["Wind Speed: ",i,"km/h"]}),Object(n.jsxs)("li",{children:["Weather: ",r]})]})})]})]})})},O=a(32),g=a.n(O);a(63),a(64);var f=function(){var e=Object(c.useState)(81.629),t=Object(u.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(21.251),r=Object(u.a)(i,2),l=r[0],o=r[1],d=Object(c.useState)(!0),j=Object(u.a)(d,2),m=j[0],b=j[1],h="http://api.openweathermap.org/data/2.5/forecast?lat=".concat(l,"&lon=").concat(a,"&units=metric&appid=").concat("1fcc521305ab66a930d3de8367ef13a7"),O=Object(c.useState)({}),f=Object(u.a)(O,2),N=f[0],w=f[1];function y(){if(!navigator.geolocation)return Object(n.jsx)("div",{className:"vh-100 d-flex justify-content-center align-items-center",children:Object(n.jsx)("h1",{children:"Your Device Does Not Support GPS sorry we can't show you weather"})});navigator.geolocation.getCurrentPosition(k)}function k(e){o(e.coords.latitude),s(e.coords.longitude)}Object(c.useEffect)((function(){y(),S()}),[]),y();var S=function(){var e=Object(p.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,fetch(h);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,w(a),b(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return m?Object(n.jsx)("div",{className:"vh-100 d-flex justify-content-center align-items-center",children:Object(n.jsx)("div",{className:"spinner-border",role:"status",children:Object(n.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(n.jsx)("div",{className:"weather-app",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(g.a,{className:"owl-theme",loop:!0,items:1,margin:10,nav:!0,center:!0,navElement:!0,children:N.list.map((function(e,t){if(t%8===0)return Object(n.jsx)(v,{temp:e.main.temp,feelsLike:e.main.feels_like,temp_max:e.main.temp_max,temp_min:e.main.temp_min,wind_speed:e.wind.speed,main:e.weather[0].main,city:N.city.name,date:e.dt_txt,icon:e.weather[0].icon},t)}))})})})})};var N=function(){return Object(n.jsxs)(l.a,{children:[Object(n.jsx)(b,{}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{path:"/",exact:!0,children:Object(n.jsx)(f,{})}),Object(n.jsx)(o.a,{path:"/about",exact:!0,component:j})]})]})};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("dom"))}},[[65,1,2]]]);
//# sourceMappingURL=main.80a52b45.chunk.js.map