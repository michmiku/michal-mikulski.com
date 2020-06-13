(this["webpackJsonpmichal-mikulski"]=this["webpackJsonpmichal-mikulski"]||[]).push([[0],{167:function(e,t,a){e.exports=a.p+"static/media/mern.25649013.jpg"},208:function(e,t,a){e.exports=a(419)},213:function(e,t,a){},240:function(e,t,a){},419:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(26),r=a.n(c),s=(a(213),a(12)),i=a(11),o=a(4),m=Object(n.createContext)(),u=function(e){var t=Object(n.useState)({username:localStorage.getItem("user"),admin:localStorage.getItem("admin")}),a=Object(o.a)(t,2),c=a[0],r=a[1];return l.a.createElement(m.Provider,{value:{authUser:c,setAuthUser:r}},e.children)},d=function(){var e=Object(n.useContext)(m),t=e.authUser,a=e.setAuthUser,c=function(){a({username:""}),localStorage.setItem("user",""),localStorage.setItem("admin","false"),window.location.href="/#/"};return Object(n.useEffect)((function(){var e=localStorage.getItem("user"),t=localStorage.getItem("admin");a({username:e,admin:t})}),[]),l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light position-sticky sticky-top"},l.a.createElement(s.b,{to:"/",className:"navbar-brand text-white",href:"#"},"Micha\u0142 Mikulski"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",style:{backgroundColor:"rgb(82, 82, 82)"}},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/",className:"nav-link text-white",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/music",className:"nav-link text-white",href:"#"},"Music player")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/covid19",className:"nav-link text-white",href:"#"},"Covid-19 data"))),""===t.username||"null"===t.username||null===t.username?l.a.createElement("ul",{className:"navbar-nav  justify-content-end"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/login",className:"nav-link text-white",href:"#"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/register",className:"nav-link text-white",href:"#"},"Register"))):!1===t.admin||"false"===t.admin?l.a.createElement("ul",{className:"navbar-nav justify-content-end"},l.a.createElement("li",{className:"nav-item",onClick:function(){c()}},l.a.createElement(s.b,{to:"/register",className:"nav-link text-white",href:"#"},"Logout"))):l.a.createElement("ul",{className:"navbar-nav justify-content-end"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/listofusers",className:"nav-link text-white",href:"#"},"List of users")),l.a.createElement("li",{className:"nav-item",onClick:function(){c()}},l.a.createElement(s.b,{to:"/register",className:"nav-link text-white",href:"#"},"Logout")))))},f=a(10),E=a.n(f),b=a(8),v=function(){var e=Object(n.useState)({username:"",password:"",success:!1}),t=Object(o.a)(e,2),a=t[0],c=t[1];return a.success?l.a.createElement("div",{style:{width:"100vw",height:"calc(100vh - 49px)",backgroundColor:"#d6d6d6"}},l.a.createElement("div",{className:"jumbotron",style:{backgroundColor:"#d6d6d6",color:"#5a5a5a"}},l.a.createElement("h1",{className:"display-4"},"You are registered!"),l.a.createElement("p",{className:"lead"},"You have successfully created your account!"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("p",null,"To start browsing and listening music press the button below to log in to your account!"),l.a.createElement(s.b,{to:"/login",className:"btn btn-dark btn-lg",href:"#",role:"button"},"Login"))):l.a.createElement("div",{style:{width:"100vw",height:"calc(100vh - 49px)",backgroundColor:"#d6d6d6",textAlign:"center"}},l.a.createElement("div",{className:"container-login",style:{color:"grey"}},l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={username:a.username,password:a.password};E.a.post(b.server+"users/add",t).then((function(e){return c({username:"",password:"",success:!0})})).catch((function(e){alert("Username is already taken!"),c({username:"",password:"",success:!1})}))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Username: "),l.a.createElement("input",{type:"text",minLength:"3",required:!0,className:"form-control",style:{width:"250px"},value:a.username,onChange:function(e){c({username:e.target.value,password:a.password,success:!1})}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password: "),l.a.createElement("input",{type:"password",minLength:"6",required:!0,className:"form-control",style:{width:"250px"},value:a.password,onChange:function(e){c({username:a.username,password:e.target.value,success:!1})}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Register",className:"btn btn-dark"})))))},p=a(50),g=function(e){var t=e.enterViewPort,a=e.exitViewPort,c=Object(n.useState)("info"),r=Object(o.a)(c,2),s=r[0],i=r[1];return Object(n.useEffect)((function(){i(2===t&&0===a||1===t&&3===a||2===t&&2===a?"current-info":"info")}),[t,a]),l.a.createElement("div",{className:s},l.a.createElement("h1",null,"Skills"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-html5 skill-icon",style:{color:"rgb(234,98,40)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"HTML"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-css3-alt skill-icon",style:{color:"rgb(51,163,213)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"CSS"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-js skill-icon",style:{color:"rgb(255,217,58)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"JavaScript"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-js skill-icon",style:{color:"rgb(255,217,58)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"TypeScript"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-bootstrap skill-icon",style:{color:"rgb(84,59,121)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"Bootstrap"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-react skill-icon",style:{color:"rgb(97,218,251)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"React/Redux")))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-react skill-icon",style:{color:"rgb(97,218,251)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"React Native"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-sass skill-icon",style:{color:"rgb(201,97,150)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"Sass"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-node-js skill-icon",style:{color:"rgb(140,200,75)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"Node.js"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-node-js skill-icon",style:{color:"rgb(140,200,75)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"Express"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fas fa-database skill-icon",style:{color:"rgb(100,100,100)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"MongoDB"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-git-alt skill-icon",style:{color:"rgb(240,81,51)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"Git"))))))},h=function(e){var t=e.enterViewPort,a=e.exitViewPort,c=Object(n.useState)("info-aboutme"),r=Object(o.a)(c,2),s=r[0],i=r[1];return Object(n.useEffect)((function(){(2===t&&1===a||1!==t||2===a||2===a)&&i("current-info-aboutme"),(3===t&&2===a||1===t&&3===a||2===t&&2===a||2===t&&0===a||1===t&&0===a||4===t)&&i("info-aboutme")}),[t,a]),l.a.createElement("div",{className:s},l.a.createElement("h1",null,"About Me"),l.a.createElement("div",{className:"aboutme-text"},l.a.createElement("p",null,"My name is Micha\u0142 Mikulski. I have been programming since I started attending high school. I am comfortable and take joy in coding front-end and back-end applications. Nonetheless I am just a beginner and I am constantly learning new skills and mastering the ones I have.")),l.a.createElement("div",{className:"aboutme-schools"},l.a.createElement("h2",null,"Education"),l.a.createElement("h4",null,"2016-2020"),l.a.createElement("p",null,"Upper-Secondary School of Communications in Cracow"),l.a.createElement("a",{href:"http://tl.krakow.pl/",target:"_blank"},"http://tl.krakow.pl/")))},N=a(167),y=a.n(N),k=function(e){var t=e.enterViewPort,a=e.exitViewPort,c=Object(n.useState)("info-projects"),r=Object(o.a)(c,2),i=r[0],m=r[1];return Object(n.useEffect)((function(){3!==t&&4!==t||2!==a?2===t&&m("info-aboutme"):m("current-info-aboutme")}),[t,a]),l.a.createElement("div",{className:i,style:{marginBottom:"80px"}},l.a.createElement("h1",{style:{paddingBottom:"20px"}},"Projects"),l.a.createElement("div",{className:"card text-center",style:{width:"14rem",backgroundColor:"rgb(71, 71, 71)"}},l.a.createElement("img",{src:y.a,className:"card-img-top",alt:"mern"}),l.a.createElement("div",{className:"card-body"},l.a.createElement(s.b,{to:"/music",className:"btn btn-link",href:"#",style:{fontSize:"18px"}},"Music player"),l.a.createElement("a",{className:"btn btn-link",href:"https://github.com/michmiku/music-player",target:"_blank",style:{fontSize:"18px"}},"GitHub"))))},w=a(43),x=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),s=Object(o.a)(r,2),i=s[0],m=s[1],u=function(e){c(e),console.log("enter:",e)},d=function(e){m(e),console.log("exit:",e)};return l.a.createElement("div",null,l.a.createElement(w.a,{style:{position:"absolute",top:"0"},onEnter:function(){u(5)}}),l.a.createElement("div",{id:"list-example",className:"list-group position-sticky sticky-top scroll-buttons",style:{top:"250px"}},l.a.createElement(p.Link,{className:"list-group-item list-group-item-action bg-transparent border-0",to:"list-item-1",smooth:!0,duration:500},l.a.createElement("button",{type:"button",className:"btn  btn-outline-dark scrollspy-button"},"Skills")),l.a.createElement(p.Link,{className:"list-group-item list-group-item-action bg-transparent border-0",to:"list-item-2",smooth:!0,duration:500},l.a.createElement("button",{type:"button",className:"btn  btn-outline-dark scrollspy-button"},"About Me")),l.a.createElement(p.Link,{className:"list-group-item list-group-item-action bg-transparent border-0",to:"list-item-3",smooth:!0,duration:500},l.a.createElement("button",{type:"button",className:"btn  btn-outline-dark scrollspy-button"},"Projects")),l.a.createElement(p.Link,{className:"list-group-item list-group-item-action bg-transparent border-0",to:"list-item-4",smooth:!0,duration:500},l.a.createElement("button",{type:"button",className:"btn  btn-outline-dark scrollspy-button"},"Contact"))),l.a.createElement("div",{"data-spy":"scroll","data-target":"#list-example","data-offset":"0",className:"scrollspy-example "},l.a.createElement(w.a,{id:"list-item-1",className:"scrollS",onEnter:function(){u(1)},onExit:function(){d(1)}}),l.a.createElement(g,{enterViewPort:a,exitViewPort:i}),l.a.createElement(w.a,{id:"list-item-2",className:"scrollS",onEnter:function(){u(2)},onExit:function(){d(2)}}),l.a.createElement(h,{enterViewPort:a,exitViewPort:i}),l.a.createElement(w.a,{id:"list-item-3",className:"scrollS",onEnter:function(){u(3)},onExit:function(){d(3)}}),l.a.createElement(k,{enterViewPort:a,exitViewPort:i}),l.a.createElement(w.a,{style:{position:"absolute"},onEnter:function(){u(4)},onExit:function(){d(1)}})))},j=(a(240),function(){return l.a.createElement("footer",{className:"py-4 text-white-50 footer",id:"list-item-4"},l.a.createElement("div",{className:"row footer-item"},l.a.createElement("div",{className:"col text-left",style:{left:"15%",color:"#e5e5e5"}},l.a.createElement("a",null,"Micha\u0142 Mikulski"),l.a.createElement("br",null),l.a.createElement("a",null,"tel.: 668711145"),l.a.createElement("br",null),l.a.createElement("a",null,"email: michmiku@gmail.com")),l.a.createElement("div",{className:"col text-center"},l.a.createElement("ul",{className:"footer-ul"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/PopeDucks",target:"_blank"},l.a.createElement("i",{className:"fab fa-facebook-f i"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/michalko258",target:"_blank"},l.a.createElement("i",{className:"fab fa-twitter i"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/micha%C5%82-mikulski-7145491ab/",target:"_blank"},l.a.createElement("i",{className:"fab fa-linkedin-in i"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/michmiku",target:"_blank"},l.a.createElement("i",{className:"fab fa-github i"})))))),l.a.createElement("div",{className:"container text-center footer-copyright",style:{color:"#e5e5e5"}},l.a.createElement("small",null,"Copyright \xa9 Micha\u0142 Mikulski")))}),O=function(){return l.a.createElement("div",{className:"header-container"},l.a.createElement("div",{className:"header"}))},C=function(){return Object(n.useEffect)((function(){E.a.get(b.server+"music/")}),[]),l.a.createElement("div",{className:"container-fluid pl-0 pr-0 home-container"},l.a.createElement(O,null),l.a.createElement(x,null),l.a.createElement(j,null))},S=function(){var e=Object(n.useState)({username:"",password:""}),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useContext)(m),i=r.authUser,u=r.setAuthUser;return""===i.username||"null"===i.username||null===i.username?l.a.createElement("div",{style:{width:"100vw",height:"calc(100vh - 49px)",backgroundColor:"#d6d6d6",textAlign:"center"}},l.a.createElement("div",{className:"container-login",style:{color:"grey"}},l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={username:a.username,password:a.password};E.a.post(b.server+"users/login",t).then((function(e){""===e.data?alert("Wrong username or password!"):(u({username:a.username,admin:e.data.admin}),localStorage.setItem("user",a.username),localStorage.setItem("admin",e.data.admin))})).catch((function(e){return console.log(e)})),c({username:"",password:""})}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Username: "),l.a.createElement("input",{type:"text",minLength:"3",required:!0,className:"form-control",style:{width:"250px"},value:a.username,onChange:function(e){c({username:e.target.value,password:a.password})}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password: "),l.a.createElement("input",{type:"password",minLength:"6",required:!0,className:"form-control",style:{width:"250px"},value:a.password,onChange:function(e){c({username:a.username,password:e.target.value})}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Login",className:"btn btn-dark"}))))):l.a.createElement("div",{style:{width:"100vw",height:"calc(100vh - 49px)",backgroundColor:"#d6d6d6"}},l.a.createElement("div",{className:"jumbotron",style:{backgroundColor:"#d6d6d6",color:"#5a5a5a"}},l.a.createElement("h1",{className:"display-4"},"You are logged in!"),l.a.createElement("p",{className:"lead"},"You have successfully logged in to your account!"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("p",null,"If you want to start listening to music press the button below!"),l.a.createElement(s.b,{className:"btn btn-dark btn-lg",to:"/music",role:"button"},"Music library")))},P=function(){var e=Object(n.useState)({listOfUsers:[]}),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)({password:""}),s=Object(o.a)(r,2),i=s[0],m=s[1];Object(n.useEffect)((function(){E.a.get(b.server+"users").then((function(e){c({listOfUsers:e.data})})).catch((function(e){return console.log(e)}))}),[a]);return l.a.createElement("div",{style:{width:"100vw",height:"calc(100vh - 49px)",backgroundColor:"#d6d6d6"}},l.a.createElement("div",{className:"userlist-container"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Admin"),l.a.createElement("th",{scope:"col"},"Username"),l.a.createElement("th",{scope:"col"},"Password"),l.a.createElement("th",{scope:"col",colSpan:"2"}))),l.a.createElement("tbody",null,a.listOfUsers.map((function(e,t){return l.a.createElement("tr",{key:t,style:{color:"#5a5a5a"}},l.a.createElement("th",{scope:"row",style:{paddingTop:"22px"}},t),l.a.createElement("td",{style:{paddingTop:"18px"}},l.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm ",onClick:function(){!function(e){E.a.post(b.server+"users/updateAdmin",e).then((function(e){})).catch((function(e){return console.log(e)}))}(e)}},String(e.admin))),l.a.createElement("td",{style:{paddingTop:"20px"}},e.username),l.a.createElement("td",{style:{paddingTop:"15px"}},l.a.createElement("input",{type:"text",minLength:"6",min:"6",className:"form-control w-25",onChange:function(e){m({password:e.target.value})}})),l.a.createElement("td",{style:{paddingTop:"15px"}},l.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm mr-5",onClick:function(){!function(e,t){var a={user:e,password:t};E.a.post(b.server+"users/updatePassword",a).then((function(e){alert("Password changed!"),m({password:""})})).catch((function(e){return alert("Password is too short!")}))}(e,i)}},"Change password")),l.a.createElement("td",{style:{paddingTop:"15px"}},l.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm ",onClick:function(){!function(e){E.a.delete(b.server+"users/delete/"+e._id).then((function(e){})).catch((function(e){return console.log(e)}))}(e)}},"Delete user")))}))))))},M=a(27),T=function(e){var t=e.isPlaying,a=e.handlePlay,c=e.handlePause,r=e.player,s=(e.src,e.setSrc),i=e.duration,m=e.currentTime,u=e.musicList,d=e.currentId,f=e.setCurrentId,E=e.setDuration,v=e.setIsPlaying,p=e.myMusic,g=e.repeat,h=e.setRepeat,N=e.random,y=e.setRandom,k=e.currentArtistPlaylist,w=e.currentArtist,x=Object(n.useRef)(null),j=Object(n.useRef)(null),O=Object(n.useState)(""),C=Object(o.a)(O,2),S=C[0],P=C[1],M=Object(n.useState)(30),T=Object(o.a)(M,2),D=T[0],A=T[1],I=Object(n.useState)({title:"",artist:""}),L=Object(o.a)(I,2),U=L[0],R=L[1];Object(n.useEffect)((function(){if(void 0!==m){var e=Math.floor(m/60),t=Math.floor(m-60*e);t<10&&(t="0"+t),e<10&&(e="0"+e),P(e+":"+t)}""===i.rawDuration&&P("")})),Object(n.useEffect)((function(){null===localStorage.getItem("volume")?(A(30),r.current.volume=.3):(A(100*localStorage.getItem("volume")),r.current.volume=localStorage.getItem("volume"))}),[]),Object(n.useEffect)((function(){void 0!==d&&R({title:u[d].title,artist:u[d].artist})}),[d]);var V=function(){h(!g),y(!1)},B=function(){h(!1),y(!N)};return l.a.createElement("footer",{className:"py-4 text-white-50 player fixed-bottom"},l.a.createElement("div",{className:"player-control-buttons"},g?l.a.createElement("i",{className:"fas fa-redo-alt repeat-button-on",onClick:function(){V()}}):l.a.createElement("i",{className:"fas fa-redo-alt repeat-button",onClick:function(){V()}}),l.a.createElement("i",{className:"fas fa-angle-double-left left-button fa-2x",onClick:function(){(d>0&&w===k||d>0&&p&&w===k)&&(s(b.server+"music/"+u[d-1].file),f(d-1),E({duration:u[d-1].duration,rawDuration:u[d-1].rawDuration}),v({playing:!0}))}}),t.playing?l.a.createElement("i",{onClick:function(){c()},className:"far fa-pause-circle fa-3x play-button"}):l.a.createElement("i",{onClick:function(){a()},className:"far fa-play-circle fa-3x play-button"}),l.a.createElement("i",{className:"fas fa-angle-double-right right-button fa-2x",onClick:function(){!function(){var e=d;if(u.length>1)if(N){for(;e===d;)e=Math.floor(Math.random()*u.length);(w===k||p&&w===k)&&(s(b.server+"music/"+u[e].file),f(e),E({duration:u[e].duration,rawDuration:u[e].rawDuration}),v({playing:!0}))}else(e<u.length-1&&w===k||e<u.length-1&&p&&w===k)&&(s(b.server+"music/"+u[e+1].file),f(e+1),E({duration:u[e+1].duration,rawDuration:u[e+1].rawDuration}),v({playing:!0}))}()}}),N?l.a.createElement("i",{className:"fas fa-random random-button-on",onClick:function(){B()}}):l.a.createElement("i",{className:"fas fa-random random-button",onClick:function(){B()}})),l.a.createElement("div",{className:"current-song"},l.a.createElement("a",{className:"current-title"},U.title),l.a.createElement("br",null),l.a.createElement("a",{className:"current-artist"},U.artist)),l.a.createElement("div",{className:"volume-slider"},l.a.createElement("i",{className:"fas fa-volume-up volume-icon fa-lg"}),l.a.createElement("input",{type:"range",min:"1",max:"100",value:D,className:"slider",onChange:function(e){!function(e){A(e.target.value),r.current.volume=e.target.value/100,localStorage.setItem("volume",e.target.value/100)}(e)}})),l.a.createElement("div",{className:"progr-bar "},l.a.createElement("div",{className:"currentTime"},S),l.a.createElement("div",{ref:x,className:"duration-bar",onClick:function(e){!function(e){var t=(e.pageX-j.current.getBoundingClientRect().left)/4*i.rawDuration/100;r.current.currentTime=t}(e)}},l.a.createElement("div",{ref:j,style:{width:m/i.rawDuration*100+"%"},className:"currentTime-bar"})),l.a.createElement("div",{className:"duration"},i.duration)))},D=a(178),A=function(e){var t=e.musicList,a=e.handleNewArtist,c=e.myMusic,r=e.setMyMusic,s=e.setCurrentArtistPlaylist,i=e.currentArtistPlaylist,m=Object(n.useState)([]),u=Object(o.a)(m,2),d=u[0],f=u[1],E=Object(n.useState)(!1),b=Object(o.a)(E,2),v=b[0],p=b[1];Object(n.useEffect)((function(){var e=[];t.music.map((function(a,n){var l=a.artist;e=[].concat(Object(M.a)(e),[l]),f(e),n===t.music.length-1&&p(!0)}))}),[t]);var g=function(){r(!0),s("favorite")};return l.a.createElement("div",{className:"sidebar"},v?l.a.createElement("div",null,l.a.createElement("ul",{className:"nav flex-column border-bottom border-secondary pb-3"},l.a.createElement("li",{className:"nav-item "},c?l.a.createElement("div",{className:"my-music-button-selected",onClick:function(){g()}},l.a.createElement("i",{className:"fas fa-bars fa-sm list-icon"}),l.a.createElement("a",null,"My music")):l.a.createElement("div",{className:"my-music-button",onClick:function(){g()}},l.a.createElement("i",{className:"fas fa-bars fa-sm list-icon"}),l.a.createElement("a",null,"My music")))),l.a.createElement("ul",{className:"nav flex-column"},Object(M.a)(new Set(d)).map((function(e,t){return i===e?l.a.createElement("li",{className:"nav-item artist-list-selected",key:t,onClick:function(){a(e)}},l.a.createElement("a",{className:""},e)):l.a.createElement("li",{className:"nav-item artist-list",key:t,onClick:function(){a(e)}},l.a.createElement("a",{className:""},e))})))):l.a.createElement(D.a,{animation:"grow",variant:"success",className:"spinner"}))},I=function(e){var t=e.musicList,a=e.handleTitleClick,c=e.handlePlay,r=e.handlePause,s=e.isPlaying,i=e.src,o=e.authUser,m=e.favoriteMusic,u=e.setFavoriteMusic,d=e.currentPlaylist,f=e.myMusic,v=e.setCurrentPlaylist,p=function(e,t,a){E.a.post(b.server+"music/add",{authUser:o,file:e,title:t,artist:a}).then((function(e){var a=[].concat(Object(M.a)(m),[t]);u(a)})).catch((function(e){return console.log(e)}))},g=function(e){var t=m.filter((function(t){return t!==e}));E.a.post(b.server+"music/delete",{title:e,authUser:o}).then((function(e){u(t)})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){var e=[];m.map((function(a){var n=t.music.filter((function(e){return e.title===a}));e=[].concat(Object(M.a)(e),[n[0]])})),f&&v(e)}),[f,m]),l.a.createElement("div",{className:"music-container"},l.a.createElement("div",{className:"top-view"},l.a.createElement("div",{className:"title"},"Title"),l.a.createElement("div",{className:"author"},"Artist"),l.a.createElement("div",{className:"time-clock"},l.a.createElement("i",{className:"far fa-clock fa-lg"}))),d.map((function(e,t){var n=e.file,o=e.title,u=e.artist,d=e.duration,f=e.rawDuration;return i===b.server+"music/"+n?l.a.createElement("div",{className:"middle-view-selected",key:t},l.a.createElement("div",{className:"title",onClick:function(){a(n,t,d,f)}},o),l.a.createElement("div",{className:"author"},u),l.a.createElement("div",{className:"time"},d),m.includes(o)?l.a.createElement("i",{className:"fas fa-ban fa-lg  heart",onClick:function(){g(o)}}):l.a.createElement("i",{className:"far fa-heart fa-lg  heart",onClick:function(){p(n,o,u)}}),i===b.server+"music/"+n&&s.playing?l.a.createElement("i",{onClick:function(){r()},className:"far fa-pause-circle fa-2x play-button-list"}):l.a.createElement("i",{onClick:function(){c(n,t,d,f)},className:"far fa-play-circle fa-2x play-button-list"})):l.a.createElement("div",{className:"middle-view",key:t},l.a.createElement("div",{className:"title",onClick:function(){a(n,t,d,f)}},o),l.a.createElement("div",{className:"author"},u),l.a.createElement("div",{className:"time"},d),m.includes(o)?l.a.createElement("i",{className:"fas fa-ban fa-lg  heart",onClick:function(){g(o)}}):l.a.createElement("i",{className:"far fa-heart fa-lg heart",onClick:function(){p(n,o,u)}}),i===b.server+"music/"+n&&s.playing?l.a.createElement("i",{onClick:function(){r()},className:"far fa-pause-circle fa-2x play-button-list"}):l.a.createElement("i",{onClick:function(){c(n,t,d,f)},className:"far fa-play-circle fa-2x play-button-list"}))})))},L=function(){var e=Object(n.useState)({music:[]}),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),u=i[0],d=i[1],f=Object(n.useState)({playing:!1}),v=Object(o.a)(f,2),p=v[0],g=v[1],h=Object(n.useState)({duration:"",rawDuration:""}),N=Object(o.a)(h,2),y=N[0],k=N[1],w=Object(n.useState)(),x=Object(o.a)(w,2),j=x[0],O=x[1],C=Object(n.useState)(),S=Object(o.a)(C,2),P=S[0],D=S[1],L=Object(n.useState)([]),U=Object(o.a)(L,2),R=U[0],V=U[1],B=Object(n.useState)([]),_=Object(o.a)(B,2),K=_[0],W=_[1],Y=Object(n.useState)(!1),q=Object(o.a)(Y,2),H=q[0],J=q[1],z=Object(n.useState)(!1),F=Object(o.a)(z,2),G=F[0],X=F[1],$=Object(n.useState)(!1),Q=Object(o.a)($,2),Z=Q[0],ee=Q[1],te=Object(n.useState)(),ae=Object(o.a)(te,2),ne=ae[0],le=ae[1],ce=Object(n.useState)(),re=Object(o.a)(ce,2),se=re[0],ie=re[1],oe=Object(n.useContext)(m).authUser,me=Object(n.useRef)(null);Object(n.useEffect)((function(){E.a.get(b.server+"music/getlist").then((function(e){c({music:e.data})})).catch((function(e){return console.log(e)})),E.a.post(b.server+"music/favorite",oe).then((function(e){var t=[];e.data.map((function(e){var a=e.title;t=[].concat(Object(M.a)(t),[a]),W(t)}))})).catch((function(e){return console.log(e)}))}),[]),Object(n.useEffect)((function(){""!==u&&(me.current.load(),me.current.play())}),[u]);var ue=function(e,t,a,n){""===u&&void 0===e||(u===b.server+"music/"+e||void 0===e?(g({playing:!0}),me.current.play()):(d(b.server+"music/"+e),g({playing:!0}),D(t),k({duration:a,rawDuration:n}),ie(ne)))},de=function(){g({playing:!1}),me.current.pause()};return""!==oe.username&&"null"!==oe.username&&null!==oe.username?l.a.createElement("div",{className:"box"},l.a.createElement(A,{musicList:a,handleNewArtist:function(e){var t=a.music.filter((function(t){return t.artist===e}));V(t),J(!1),le(e)},myMusic:H,setMyMusic:J,setCurrentArtistPlaylist:le,currentArtistPlaylist:ne}),l.a.createElement(I,{musicList:a,handleTitleClick:function(e,t,a,n){d(b.server+"music/"+e),g({playing:!0}),D(t),me.current.load(),me.current.play(),k({duration:a,rawDuration:n}),ie(ne)},handlePlay:ue,handlePause:de,isPlaying:p,src:u,authUser:oe,favoriteMusic:K,setFavoriteMusic:W,currentPlaylist:R,myMusic:H,setCurrentPlaylist:V}),l.a.createElement(T,{isPlaying:p,handlePlay:function(){ue()},handlePause:function(){de()},player:me,src:u,setSrc:d,duration:y,currentTime:j,musicList:R,currentId:P,setCurrentId:D,setDuration:k,setIsPlaying:g,myMusic:H,repeat:G,setRepeat:X,random:Z,setRandom:ee,currentArtistPlaylist:ne,currentArtist:se}),l.a.createElement("audio",{ref:me,onTimeUpdate:function(){O(me.current.currentTime)},onEnded:function(){!function(e){var t=P;if(R.length<2&&!Z&&!G)O(0),d(""),D(null),k({duration:"",rawDuration:0}),g({playing:!1}),me.current.load(),me.current.play();else if(Z)if(R.length<2)O(0),me.current.load(),me.current.play();else{for(;t===P;)t=Math.floor(Math.random()*R.length);(se===ne||H&&se===ne)&&(d(b.server+"music/"+R[t].file),D(t),k({duration:R[t].duration,rawDuration:R[t].rawDuration}),g({playing:!0}))}else G?(O(0),me.current.load(),me.current.play()):(t<R.length-1&&se===ne||t<R.length-1&&H&&se===ne)&&(d(b.server+"music/"+R[t+1].file),D(t+1),k({duration:R[t+1].duration,rawDuration:R[t+1].rawDuration}),g({playing:!0}))}()}},l.a.createElement("source",{src:u}))):l.a.createElement("div",{style:{width:"100vw",height:"calc(100vh - 49px)",backgroundColor:"#d6d6d6"}},l.a.createElement("div",{className:"card-body",style:{backgroundColor:"#d6d6d6",color:"#5a5a5a"}},l.a.createElement("h1",{className:"card-title"},"You are not logged in!"),l.a.createElement("h3",{className:"card-text"},"In order to browse and listen to music you need to either login to your account or create a new one."),l.a.createElement(s.b,{to:"/login",className:"btn btn-dark mr-5 btn-lg"},"Login"),l.a.createElement(s.b,{to:"/register",className:"btn btn-dark btn-lg"},"Register")))},U=a(169),R=(a(55),function(e){var t=e.country,a=e.setData,c=Object(n.useState)({data:{}}),r=Object(o.a)(c,2),s=r[0],i=r[1];return Object(n.useEffect)((function(){"World"===t.country?E.a.get("https://api.covid19api.com/world/total").then((function(e){var t={total:e.data.TotalConfirmed,current:e.data.TotalConfirmed-e.data.TotalDeaths-e.data.TotalRecovered,deaths:e.data.TotalDeaths,recovered:e.data.TotalRecovered};i({data:t})})).catch((function(e){return console.log(e)})):E.a.get("https://api.covid19api.com/country/"+t.slug).then((function(e){if(void 0===e.data[0]){i({data:{total:"No data",current:"No data",deaths:"No data",recovered:"No data"}})}else{for(var t=1;""!==e.data[e.data.length-t].Province;)t++;var n={total:e.data[e.data.length-t].Confirmed,current:e.data[e.data.length-t].Active,deaths:e.data[e.data.length-t].Deaths,recovered:e.data[e.data.length-t].Recovered};i({data:n})}a(e.data)})).catch((function(e){return console.log(e)}))}),[t]),l.a.createElement("div",{className:"data-container"},l.a.createElement("div",{className:"world-data"},l.a.createElement("div",{className:"cases-text"},"TOTAL CASES"),l.a.createElement("br",null),l.a.createElement("div",{className:"cases-data"},s.data.total)),l.a.createElement("div",{className:"world-data"},l.a.createElement("div",{className:"cases-text"},"TOTAL DEATHS"),l.a.createElement("br",null),l.a.createElement("div",{className:"cases-data"},s.data.deaths)),l.a.createElement("div",{className:"world-data"},l.a.createElement("div",{className:"cases-text"},"TOTAL RECOVERED"),l.a.createElement("br",null),l.a.createElement("div",{className:"cases-data"},s.data.recovered)),l.a.createElement("div",{className:"world-data"},l.a.createElement("div",{className:"cases-text"},"ACTIVE CASES"),l.a.createElement("br",null),l.a.createElement("div",{className:"cases-data"},s.data.current)))}),V=function(e){e.country;var t=e.setCountry,a=Object(n.useState)({data:[]}),c=Object(o.a)(a,2),r=c[0],s=c[1];Object(n.useEffect)((function(){E.a.get("https://api.covid19api.com/countries").then((function(e){var t=e.data;t=t.sort(i),s({data:t})})).catch((function(e){return console.log(e)}))}),[]);var i=function(e,t){var a=e.Country.toUpperCase(),n=t.Country.toUpperCase(),l=0;return a>n?l=1:a<n&&(l=-1),l};return l.a.createElement("div",{className:"country-container"},r.data.map((function(e,a){return l.a.createElement("div",{className:"country",key:a,onClick:function(){t({country:e.Country,slug:e.Slug})}},e.Country)})))},B=a(18),_=function(e){var t=e.data,a=Object(n.useState)(),c=Object(o.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){var e=[];void 0!==t&&t.map((function(t,a){e.push({name:a,confirmed:t.Confirmed,deaths:t.Deaths,recovered:t.Recovered,active:t.Confirmed-t.Deaths-t.Recovered}),s(e),console.log()}))}),[t]),l.a.createElement(B.d,{width:600,height:400,data:r,margin:{top:5,bottom:5}},l.a.createElement(B.a,{strokeDasharray:"3 3"}),l.a.createElement(B.f,{dataKey:"name"}),l.a.createElement(B.g,null),l.a.createElement(B.e,null),l.a.createElement(B.b,null),l.a.createElement(B.c,{type:"monotone",dataKey:"confirmed",stroke:"#8884d8",activeDot:{r:8}}),l.a.createElement(B.c,{type:"monotone",dataKey:"deaths",stroke:"#82ca9d"}),l.a.createElement(B.c,{type:"monotone",dataKey:"recovered",stroke:"red"}),l.a.createElement(B.c,{type:"monotone",dataKey:"active",stroke:"black"}))},K=function(e){Object(U.a)(e);var t=Object(n.useState)({country:"World",slug:"world"}),a=Object(o.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(),i=Object(o.a)(s,2),m=i[0],u=i[1];return l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},l.a.createElement(R,{country:c,setData:u})),l.a.createElement("div",{className:"col-sm"},l.a.createElement("a",null,c.country),l.a.createElement("div",{className:"chart-container"},l.a.createElement(_,{country:c,data:m}))),l.a.createElement("div",{className:"col-sm"},l.a.createElement(V,{country:c,setCountry:r}))))},W=function(){return l.a.createElement(s.a,null,l.a.createElement(d,null),l.a.createElement(i.a,{path:"/",exact:!0,component:C}),l.a.createElement(i.a,{path:"/michal-mikulski",component:C}),l.a.createElement(i.a,{path:"/register",component:v}),l.a.createElement(i.a,{path:"/login",component:S}),l.a.createElement(i.a,{path:"/listofusers",component:P}),l.a.createElement(i.a,{path:"/music",component:L}),l.a.createElement(i.a,{path:"/covid19",component:K}))};var Y=function(){return l.a.createElement(u,null,l.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(415),a(165),a(418);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e,t,a){},8:function(e){e.exports=JSON.parse('{"server":"https://michal-mikulski.herokuapp.com/"}')}},[[208,1,2]]]);
//# sourceMappingURL=main.1df20f55.chunk.js.map