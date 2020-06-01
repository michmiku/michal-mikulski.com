(this["webpackJsonpmichal-mikulski"]=this["webpackJsonpmichal-mikulski"]||[]).push([[0],{2:function(e){e.exports=JSON.parse('{"server":"https://michal-mikulski.herokuapp.com/"}')},43:function(e,t,a){e.exports=a.p+"static/media/mern.25649013.jpg"},47:function(e,t,a){e.exports=a(86)},52:function(e,t,a){},81:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),s=(a(52),a(5)),i=a(4),o=a(1),m=Object(n.createContext)(),u=function(e){var t=Object(n.useState)({username:localStorage.getItem("user"),admin:localStorage.getItem("admin")}),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(m.Provider,{value:{authUser:r,setAuthUser:c}},e.children)},d=function(e){var t=Object(n.useContext)(m),a=t.authUser,r=t.setAuthUser,c=function(){r({username:""}),localStorage.setItem("user",""),localStorage.setItem("admin",!1),window.location="/#/"};return Object(n.useEffect)((function(){var e=localStorage.getItem("user"),t=localStorage.getItem("admin");r({username:e,admin:t})}),[]),l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light position-sticky sticky-top"},l.a.createElement(s.b,{to:"/",className:"navbar-brand text-white",href:"#"},"Micha\u0142 Mikulski"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",style:{backgroundColor:"rgb(82, 82, 82)"}},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/",className:"nav-link text-white",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/music",className:"nav-link text-white",href:"#"},"Music player"))),""===a.username||"null"===a.username||null===a.username?l.a.createElement("ul",{className:"navbar-nav  justify-content-end"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/login",className:"nav-link text-white",href:"#"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/register",className:"nav-link text-white",href:"#"},"Register"))):!1===a.admin||"false"===a.admin?l.a.createElement("ul",{className:"navbar-nav justify-content-end"},l.a.createElement("li",{className:"nav-item",onClick:function(){c()}},l.a.createElement(s.b,{to:"/register",className:"nav-link text-white",href:"#"},"Logout"))):l.a.createElement("ul",{className:"navbar-nav justify-content-end"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/listofusers",className:"nav-link text-white",href:"#"},"List of users")),l.a.createElement("li",{className:"nav-item",onClick:function(){c()}},l.a.createElement(s.b,{to:"/register",className:"nav-link text-white",href:"#"},"Logout")))))},f=a(6),E=a.n(f),b=a(2),p=function(){var e=Object(n.useState)({username:"",password:"",success:!1}),t=Object(o.a)(e,2),a=t[0],r=t[1];return a.success?l.a.createElement("div",{className:"jumbotron",style:{backgroundColor:"#f8edeb",color:"grey"}},l.a.createElement("h1",{className:"display-4"},"You are registered!"),l.a.createElement("p",{className:"lead"},"You have successfully created your account!"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("p",null,"To start browsing and listening music press the button below to log in to your account!"),l.a.createElement(s.b,{to:"/login",className:"btn btn-dark btn-lg",href:"#",role:"button"},"Login")):l.a.createElement("div",{align:"center",className:"container-login",style:{color:"grey"}},l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={username:a.username,password:a.password};E.a.post(b.server+"users/add",t).then((function(e){return r({success:!0})})).catch((function(e){alert("Username is already taken!"),r({username:"",password:"",success:!1})}))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Username: "),l.a.createElement("input",{type:"text",minLength:"3",required:!0,className:"form-control",style:{width:"250px"},value:a.username,onChange:function(e){r({username:e.target.value,password:a.password})}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password: "),l.a.createElement("input",{type:"password",minLength:"6",required:!0,className:"form-control",style:{width:"250px"},value:a.password,onChange:function(e){r({username:a.username,password:e.target.value})}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Register",className:"btn btn-dark"}))))},v=a(15),g=function(){return l.a.createElement("div",{className:"info"},l.a.createElement("h1",null,"Skills"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-html5 skill-icon",style:{color:"rgb(234,98,40)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"HTML"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-css3-alt skill-icon",style:{color:"rgb(51,163,213)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"CSS"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-js skill-icon",style:{color:"rgb(255,217,58)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"JavaScript"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-bootstrap skill-icon",style:{color:"rgb(84,59,121)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"Bootstrap"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-react skill-icon",style:{color:"rgb(97,218,251)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"React/Redux"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-react skill-icon",style:{color:"rgb(97,218,251)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"React Native")))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-sass skill-icon",style:{color:"rgb(201,97,150)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"Sass"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-node-js skill-icon",style:{color:"rgb(140,200,75)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"Node.js"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-node-js skill-icon",style:{color:"rgb(140,200,75)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"Express"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fas fa-database skill-icon",style:{color:"rgb(100,100,100)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"MongoDB"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-git-alt skill-icon",style:{color:"rgb(240,81,51)"}})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"Git"))))))},N=function(){return l.a.createElement("div",{className:"info-aboutme"},l.a.createElement("h1",null,"About Me"),l.a.createElement("div",{className:"aboutme-text"},l.a.createElement("p",null,"My name is Micha\u0142 Mikulski. I have been programming since I started attending high school. I am comfortable and take joy in coding front-end and back-end applications. Nonetheless I am just a beginner and I am constantly learning new skills and mastering the ones i have.")),l.a.createElement("div",{className:"aboutme-schools"},l.a.createElement("h2",null,"Education"),l.a.createElement("h4",null,"2016-2020"),l.a.createElement("p",null,"Upper-Secondary School of Communications in Cracow"),l.a.createElement("a",{href:"http://tl.krakow.pl/",target:"_blank"},"http://tl.krakow.pl/")))},h=a(43),y=a.n(h),k=function(){return l.a.createElement("div",{className:"info-projects",style:{marginBottom:"80px"}},l.a.createElement("h1",{style:{paddingBottom:"20px"}},"Projects"),l.a.createElement("div",{className:"card text-center",style:{width:"14rem",backgroundColor:"rgb(71, 71, 71)"}},l.a.createElement("img",{src:y.a,className:"card-img-top",alt:"mern"}),l.a.createElement("div",{className:"card-body"},l.a.createElement(s.b,{to:"/music",className:"btn btn-link",href:"#",style:{fontSize:"18px"}},"Music player"),l.a.createElement("a",{className:"btn btn-link",href:"https://github.com/michmiku/portfolio",style:{fontSize:"18px"}},"GitHub"))))},w=function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"list-example",className:"list-group position-sticky sticky-top scroll-buttons",style:{top:"250px"}},l.a.createElement(v.Link,{className:"list-group-item list-group-item-action bg-transparent border-0",to:"list-item-1",smooth:!0,duration:500},l.a.createElement("button",{type:"button",className:"btn  btn-outline-dark scrollspy-button"},"Skills")),l.a.createElement(v.Link,{className:"list-group-item list-group-item-action bg-transparent border-0",to:"list-item-2",smooth:!0,duration:500},l.a.createElement("button",{type:"button",className:"btn  btn-outline-dark scrollspy-button"},"About Me")),l.a.createElement(v.Link,{className:"list-group-item list-group-item-action bg-transparent border-0",to:"list-item-3",smooth:!0,duration:500},l.a.createElement("button",{type:"button",className:"btn  btn-outline-dark scrollspy-button"},"Projects")),l.a.createElement(v.Link,{className:"list-group-item list-group-item-action bg-transparent border-0",to:"list-item-4",smooth:!0,duration:500},l.a.createElement("button",{type:"button",className:"btn  btn-outline-dark scrollspy-button"},"Contact"))),l.a.createElement("div",{"data-spy":"scroll","data-target":"#list-example","data-offset":"0",className:"scrollspy-example "},l.a.createElement("div",{id:"list-item-1",className:"scrollS"}),l.a.createElement(g,null),l.a.createElement("div",{id:"list-item-2",className:"scrollS"}),l.a.createElement(N,null),l.a.createElement("div",{id:"list-item-3",className:"scrollS"}),l.a.createElement(k,null)))},x=(a(81),function(){return l.a.createElement("footer",{className:"py-4 text-white-50 footer",id:"list-item-4"},l.a.createElement("div",{className:"row footer-item"},l.a.createElement("div",{className:"col text-left",style:{left:"15%",color:"#e5e5e5"}},l.a.createElement("a",null,"Micha\u0142 Mikulski"),l.a.createElement("br",null),l.a.createElement("a",null,"tel.: 668711145"),l.a.createElement("br",null),l.a.createElement("a",null,"email: michmiku@gmail.com")),l.a.createElement("div",{className:"col text-center"},l.a.createElement("ul",{className:"footer-ul"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/PopeDucks",target:"_blank"},l.a.createElement("i",{class:"fab fa-facebook-f i"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/michalko258",target:"_blank"},l.a.createElement("i",{class:"fab fa-twitter i"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/micha%C5%82-mikulski-7145491ab/",target:"_blank"},l.a.createElement("i",{class:"fab fa-linkedin-in i"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/michmiku",target:"_blank"},l.a.createElement("i",{class:"fab fa-github i"})))))),l.a.createElement("div",{className:"container text-center footer-copyright",style:{color:"#e5e5e5"}},l.a.createElement("small",null,"Copyright \xa9 Micha\u0142 Mikulski")))}),j=function(){return l.a.createElement("div",{class:"header-container"},l.a.createElement("div",{class:"header"}))},O=function(){return Object(n.useEffect)((function(){E.a.get(b.server+"music/")}),[]),l.a.createElement("div",{className:"container-fluid pl-0 pr-0 home-container"},l.a.createElement(j,null),l.a.createElement(w,null),l.a.createElement(x,null))},C=function(){var e=Object(n.useState)({username:"",password:""}),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useContext)(m),i=c.authUser,u=c.setAuthUser;return""===i.username||"null"===i.username||null===i.username?l.a.createElement("div",{align:"center",className:"container-login",style:{color:"grey"}},l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={username:a.username,password:a.password};E.a.post(b.server+"users/login",t).then((function(e){""===e.data?alert("Wrong username or password!"):(console.log(e.data),u({username:a.username,admin:e.data.admin}),localStorage.setItem("user",a.username),localStorage.setItem("admin",e.data.admin))})).catch((function(e){return console.log(e)})),r({username:"",password:""})}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Username: "),l.a.createElement("input",{type:"text",minLength:"3",required:!0,className:"form-control",style:{width:"250px"},value:a.username,onChange:function(e){r({username:e.target.value,password:a.password})}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password: "),l.a.createElement("input",{type:"password",minLength:"6",required:!0,className:"form-control",style:{width:"250px"},value:a.password,onChange:function(e){r({username:a.username,password:e.target.value})}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Login",className:"btn btn-dark"})))):l.a.createElement("div",{className:"jumbotron",style:{backgroundColor:"#f8edeb",color:"grey"}},l.a.createElement("h1",{className:"display-4"},"You are logged in!"),l.a.createElement("p",{className:"lead"},"You have successfully logged in to your account!"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("p",null,"If you want to start listening to music press the button below!"),l.a.createElement(s.b,{className:"btn btn-dark btn-lg",to:"/music",role:"button"},"Music library"))},S=function(){var e=Object(n.useState)({listOfUsers:[]}),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(o.a)(c,2),i=s[0],m=s[1];Object(n.useEffect)((function(){E.a.get(b.server+"users").then((function(e){r({listOfUsers:e.data})})).catch((function(e){return console.log(e)}))}));return l.a.createElement("div",{className:"userlist-container"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Admin"),l.a.createElement("th",{scope:"col"},"Username"),l.a.createElement("th",{scope:"col"},"Password"),l.a.createElement("th",{scope:"col",colSpan:"2"}))),l.a.createElement("tbody",null,a.listOfUsers.map((function(e,t){return l.a.createElement("tr",{key:t,style:{color:"lightgrey"}},l.a.createElement("th",{scope:"row",style:{paddingTop:"22px"}},t),l.a.createElement("td",{style:{paddingTop:"18px"}},l.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm ",onClick:function(){!function(e){E.a.post(b.server+"users/updateAdmin",e).then((function(e){})).catch((function(e){return console.log(e)}))}(e)}},String(e.admin))),l.a.createElement("td",{style:{paddingTop:"20px"}},e.username),l.a.createElement("td",{style:{paddingTop:"15px"}},l.a.createElement("input",{type:"text",minLength:"6",min:"6",className:"form-control w-25",onChange:function(e){m(e.target.value)}})),l.a.createElement("td",{style:{paddingTop:"15px"}},l.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm mr-5",onClick:function(){!function(e,t){var a={user:e,password:t};E.a.post(b.server+"users/updatePassword",a).then((function(e){alert("Password changed!"),m({password:""})})).catch((function(e){return alert("Password is too short!")}))}(e,i)}},"Change password")),l.a.createElement("td",{style:{paddingTop:"15px"}},l.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm ",onClick:function(){!function(e){E.a.delete(b.server+"users/delete/"+e._id).then((function(e){})).catch((function(e){return console.log(e)}))}(e)}},"Delete user")))})))))},M=a(13),P=function(e){var t=e.isPlaying,a=e.handlePlay,r=e.handlePause,c=e.player,s=(e.src,e.setSrc),i=e.duration,m=e.currentTime,u=e.musicList,d=e.currentId,f=e.setCurrentId,E=e.setDuration,p=e.setIsPlaying,v=e.myMusic,g=e.repeat,N=e.setRepeat,h=e.random,y=e.setRandom,k=e.currentArtistPlaylist,w=e.currentArtist,x=Object(n.useRef)(null),j=Object(n.useRef)(null),O=Object(n.useState)(""),C=Object(o.a)(O,2),S=C[0],M=C[1],P=Object(n.useState)(30),I=Object(o.a)(P,2),D=I[0],L=I[1],T=Object(n.useState)({title:"",artist:""}),U=Object(o.a)(T,2),A=U[0],R=U[1];Object(n.useEffect)((function(){if(void 0!==m){var e=Math.floor(m/60),t=Math.floor(m-60*e);t<10&&(t="0"+t),e<10&&(e="0"+e),M(e+":"+t)}""===i.rawDuration&&M("")})),Object(n.useEffect)((function(){null===localStorage.getItem("volume")?(L(30),c.current.volume=.3):(L(100*localStorage.getItem("volume")),c.current.volume=localStorage.getItem("volume"))}),[]),Object(n.useEffect)((function(){void 0!==d&&R({title:u[d].title,artist:u[d].artist})}),[d]);var B=function(){N(!g),y(!1)},_=function(){N(!1),y(!h)};return l.a.createElement("footer",{className:"py-4 text-white-50 player fixed-bottom"},l.a.createElement("div",{className:"player-control-buttons"},g?l.a.createElement("i",{className:"fas fa-redo-alt repeat-button-on",onClick:function(){B()}}):l.a.createElement("i",{className:"fas fa-redo-alt repeat-button",onClick:function(){B()}}),l.a.createElement("i",{className:"fas fa-angle-double-left left-button fa-2x",onClick:function(){(d>0&&w===k||d>0&&v&&w===k)&&(s(b.server+"music/"+u[d-1].file),f(d-1),E({duration:u[d-1].duration,rawDuration:u[d-1].rawDuration}),p({playing:!0}))}}),t.playing?l.a.createElement("i",{onClick:function(){r()},className:"far fa-pause-circle fa-3x play-button"}):l.a.createElement("i",{onClick:function(){a()},className:"far fa-play-circle fa-3x play-button"}),l.a.createElement("i",{className:"fas fa-angle-double-right right-button fa-2x",onClick:function(){!function(){var e=d;if(u.length>1)if(h){for(;e===d;)e=Math.floor(Math.random()*u.length);(w===k||v&&w===k)&&(s(b.server+"music/"+u[e].file),f(e),E({duration:u[e].duration,rawDuration:u[e].rawDuration}),p({playing:!0}))}else(e<u.length-1&&w===k||e<u.length-1&&v&&w===k)&&(s(b.server+"music/"+u[e+1].file),f(e+1),E({duration:u[e+1].duration,rawDuration:u[e+1].rawDuration}),p({playing:!0}))}()}}),h?l.a.createElement("i",{className:"fas fa-random random-button-on",onClick:function(){_()}}):l.a.createElement("i",{className:"fas fa-random random-button",onClick:function(){_()}})),l.a.createElement("div",{className:"current-song"},l.a.createElement("a",{className:"current-title"},A.title),l.a.createElement("br",null),l.a.createElement("a",{className:"current-artist"},A.artist)),l.a.createElement("div",{className:"volume-slider"},l.a.createElement("i",{className:"fas fa-volume-up volume-icon fa-lg"}),l.a.createElement("input",{type:"range",min:"1",max:"100",value:D,className:"slider",onChange:function(e){!function(e){L(e.target.value),c.current.volume=e.target.value/100,localStorage.setItem("volume",e.target.value/100)}(e)}})),l.a.createElement("div",{className:"progr-bar "},l.a.createElement("div",{className:"currentTime"},S),l.a.createElement("div",{ref:x,className:"duration-bar",onClick:function(e){!function(e){var t=(e.pageX-j.current.getBoundingClientRect().left)/4*i.rawDuration/100;c.current.currentTime=t}(e)}},l.a.createElement("div",{ref:j,style:{width:m/i.rawDuration*100+"%"},className:"currentTime-bar"})),l.a.createElement("div",{className:"duration"},i.duration)))},I=a(46),D=function(e){var t=e.musicList,a=e.handleNewArtist,r=e.myMusic,c=e.setMyMusic,s=e.setCurrentArtistPlaylist,i=e.currentArtistPlaylist,m=Object(n.useState)([]),u=Object(o.a)(m,2),d=u[0],f=u[1],E=Object(n.useState)(!1),b=Object(o.a)(E,2),p=b[0],v=b[1];Object(n.useEffect)((function(){var e=[];t.music.map((function(a,n){var l=a.artist;e=[].concat(Object(M.a)(e),[l]),f(e),n===t.music.length-1&&v(!0)}))}),[t]);var g=function(){c(!0),s("favorite")};return l.a.createElement("div",{className:"sidebar"},p?l.a.createElement("div",null,l.a.createElement("ul",{className:"nav flex-column border-bottom border-secondary pb-3"},l.a.createElement("li",{className:"nav-item "},r?l.a.createElement("div",{className:"my-music-button-selected",onClick:function(){g()}},l.a.createElement("i",{className:"fas fa-bars fa-sm list-icon"}),l.a.createElement("a",null,"My music")):l.a.createElement("div",{className:"my-music-button",onClick:function(){g()}},l.a.createElement("i",{className:"fas fa-bars fa-sm list-icon"}),l.a.createElement("a",null,"My music")))),l.a.createElement("ul",{className:"nav flex-column"},Object(M.a)(new Set(d)).map((function(e,t){return i===e?l.a.createElement("li",{className:"nav-item artist-list-selected",key:t,onClick:function(){a(e)}},l.a.createElement("a",{className:""},e)):l.a.createElement("li",{className:"nav-item artist-list",key:t,onClick:function(){a(e)}},l.a.createElement("a",{className:""},e))})))):l.a.createElement(I.a,{animation:"grow",variant:"success",className:"spinner"}))},L=function(e){var t=e.musicList,a=e.handleTitleClick,r=e.handlePlay,c=e.handlePause,s=e.isPlaying,i=e.src,o=e.authUser,m=e.favoriteMusic,u=e.setFavoriteMusic,d=e.currentPlaylist,f=e.myMusic,p=e.setCurrentPlaylist,v=function(e,t,a){E.a.post(b.server+"music/add",{authUser:o,file:e,title:t,artist:a}).then((function(e){var a=[].concat(Object(M.a)(m),[t]);u(a)})).catch((function(e){return console.log(e)}))},g=function(e){var t=m.filter((function(t){return t!==e}));E.a.post(b.server+"music/delete",{title:e,authUser:o}).then((function(e){u(t)})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){var e=[];m.map((function(a){var n=t.music.filter((function(e){return e.title===a}));e=[].concat(Object(M.a)(e),[n[0]])})),f&&p(e)}),[f,m]),l.a.createElement("div",{className:"music-container"},l.a.createElement("div",{className:"top-view"},l.a.createElement("div",{className:"number"},"#"),l.a.createElement("div",{className:"title"},"Title"),l.a.createElement("div",{className:"author"},"Artist"),l.a.createElement("div",{className:"time-clock"},l.a.createElement("i",{className:"far fa-clock fa-lg"}))),d.map((function(e,t){var n=e.file,o=e.title,u=e.artist,d=e.duration,f=e.rawDuration;return i===b.server+"music/"+n?l.a.createElement("div",{className:"middle-view-selected",key:t},l.a.createElement("div",{className:"number"},t),l.a.createElement("div",{className:"title",onClick:function(){a(n,t,d,f)}},o),l.a.createElement("div",{className:"author"},u),l.a.createElement("div",{className:"time"},d),m.includes(o)?l.a.createElement("i",{className:"fas fa-ban fa-lg  heart",onClick:function(){g(o)}}):l.a.createElement("i",{className:"far fa-heart fa-lg  heart",onClick:function(){v(n,o,u)}}),i===b.server+"music/"+n&&s.playing?l.a.createElement("i",{onClick:function(){c()},className:"far fa-pause-circle fa-2x play-button-list"}):l.a.createElement("i",{onClick:function(){r(n,t,d,f)},className:"far fa-play-circle fa-2x play-button-list"})):l.a.createElement("div",{className:"middle-view",key:t},l.a.createElement("div",{className:"number"},t),l.a.createElement("div",{className:"title",onClick:function(){a(n,t,d,f)}},o),l.a.createElement("div",{className:"author"},u),l.a.createElement("div",{className:"time"},d),m.includes(o)?l.a.createElement("i",{className:"fas fa-ban fa-lg  heart",onClick:function(){g(o)}}):l.a.createElement("i",{className:"far fa-heart fa-lg heart",onClick:function(){v(n,o,u)}}),i===b.server+"music/"+n&&s.playing?l.a.createElement("i",{onClick:function(){c()},className:"far fa-pause-circle fa-2x play-button-list"}):l.a.createElement("i",{onClick:function(){r(n,t,d,f)},className:"far fa-play-circle fa-2x play-button-list"}))})))},T=function(){var e=Object(n.useState)({music:[]}),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),u=i[0],d=i[1],f=Object(n.useState)({playing:!1}),p=Object(o.a)(f,2),v=p[0],g=p[1],N=Object(n.useState)({duration:"",rawDuration:""}),h=Object(o.a)(N,2),y=h[0],k=h[1],w=Object(n.useState)(),x=Object(o.a)(w,2),j=x[0],O=x[1],C=Object(n.useState)(),S=Object(o.a)(C,2),I=S[0],T=S[1],U=Object(n.useState)([]),A=Object(o.a)(U,2),R=A[0],B=A[1],_=Object(n.useState)([]),Y=Object(o.a)(_,2),q=Y[0],J=Y[1],H=Object(n.useState)(!1),W=Object(o.a)(H,2),z=W[0],F=W[1],G=Object(n.useState)(!1),X=Object(o.a)(G,2),$=X[0],K=X[1],Q=Object(n.useState)(!1),V=Object(o.a)(Q,2),Z=V[0],ee=V[1],te=Object(n.useState)(),ae=Object(o.a)(te,2),ne=ae[0],le=ae[1],re=Object(n.useState)(),ce=Object(o.a)(re,2),se=ce[0],ie=ce[1],oe=Object(n.useContext)(m).authUser,me=Object(n.useRef)(null);Object(n.useEffect)((function(){E.a.get(b.server+"music/getlist").then((function(e){r({music:e.data})})).catch((function(e){return console.log(e)})),E.a.post(b.server+"music/favorite",oe).then((function(e){var t=[];e.data.map((function(e){var a=e.title;t=[].concat(Object(M.a)(t),[a]),J(t)}))})).catch((function(e){return console.log(e)}))}),[]),Object(n.useEffect)((function(){""!==u&&(me.current.load(),me.current.play())}),[u]);var ue=function(e,t,a,n){""===u&&void 0===e||(u===b.server+"music/"+e||void 0===e?(g({playing:!0}),me.current.play()):(d(b.server+"music/"+e),g({playing:!0}),T(t),k({duration:a,rawDuration:n}),ie(ne)))},de=function(){g({playing:!1}),me.current.pause()};return""!==oe.username&&"null"!==oe.username&&null!==oe.username?l.a.createElement("div",{className:"box"},l.a.createElement(D,{musicList:a,handleNewArtist:function(e){var t=a.music.filter((function(t){return t.artist===e}));B(t),F(!1),le(e)},myMusic:z,setMyMusic:F,setCurrentArtistPlaylist:le,currentArtistPlaylist:ne}),l.a.createElement(L,{musicList:a,handleTitleClick:function(e,t,a,n){d(b.server+"music/"+e),g({playing:!0}),T(t),k({duration:a,rawDuration:n}),ie(ne)},handlePlay:ue,handlePause:de,isPlaying:v,src:u,authUser:oe,favoriteMusic:q,setFavoriteMusic:J,currentPlaylist:R,myMusic:z,setCurrentPlaylist:B}),l.a.createElement(P,{isPlaying:v,handlePlay:function(){ue()},handlePause:function(){de()},player:me,src:u,setSrc:d,duration:y,currentTime:j,musicList:R,currentId:I,setCurrentId:T,setDuration:k,setIsPlaying:g,myMusic:z,repeat:$,setRepeat:K,random:Z,setRandom:ee,currentArtistPlaylist:ne,currentArtist:se}),l.a.createElement("audio",{ref:me,onTimeUpdate:function(){O(me.current.currentTime)},onEnded:function(){!function(e){var t=I;if(R.length<2&&!Z&&!$)O(0),d(""),T(null),k({duration:"",rawDuration:0}),g({playing:!1}),me.current.load(),me.current.play();else if(Z)if(R.length<2)O(0),me.current.load(),me.current.play();else{for(;t===I;)t=Math.floor(Math.random()*R.length);(se===ne||z&&se===ne)&&(d(b.server+"music/"+R[t].file),T(t),k({duration:R[t].duration,rawDuration:R[t].rawDuration}),g({playing:!0}))}else $?(O(0),me.current.load(),me.current.play()):(t<R.length-1&&se===ne||t<R.length-1&&z&&se===ne)&&(d(b.server+"music/"+R[t+1].file),T(t+1),k({duration:R[t+1].duration,rawDuration:R[t+1].rawDuration}),g({playing:!0}))}()}},l.a.createElement("source",{src:u}))):l.a.createElement("div",{className:"card-body",style:{backgroundColor:"#f8edeb",color:"grey"}},l.a.createElement("h1",{className:"card-title"},"You are not logged in!"),l.a.createElement("h3",{className:"card-text"},"In order to browse and listen to music you need to either login to your account or create a new one."),l.a.createElement(s.b,{to:"/login",className:"btn btn-dark mr-5 btn-lg"},"Login"),l.a.createElement(s.b,{to:"/register",className:"btn btn-dark btn-lg"},"Register"))},U=function(){return l.a.createElement(s.a,null,l.a.createElement(d,null),l.a.createElement(i.a,{path:"/",exact:!0,component:O}),l.a.createElement(i.a,{path:"/michal-mikulski",component:O}),l.a.createElement(i.a,{path:"/register",component:p}),l.a.createElement(i.a,{path:"/login",component:C}),l.a.createElement(i.a,{path:"/listofusers",component:S}),l.a.createElement(i.a,{path:"/music",component:T}))};var A=function(){return l.a.createElement(u,null,l.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(82),a(41),a(85);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.5c6a240a.chunk.js.map