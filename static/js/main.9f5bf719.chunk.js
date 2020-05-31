(this["webpackJsonpmichal-mikulski"]=this["webpackJsonpmichal-mikulski"]||[]).push([[0],{2:function(e){e.exports=JSON.parse('{"server":"https://michal-mikulski.herokuapp.com/"}')},43:function(e,a,t){e.exports=t.p+"static/media/mern.25649013.jpg"},47:function(e,a,t){e.exports=t(85)},52:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(18),r=t.n(s),c=(t(52),t(5)),i=t(4),o=t(1),m=Object(n.createContext)(),u=function(e){var a=Object(n.useState)({username:localStorage.getItem("user"),admin:localStorage.getItem("admin")}),t=Object(o.a)(a,2),s=t[0],r=t[1];return l.a.createElement(m.Provider,{value:{authUser:s,setAuthUser:r}},e.children)},d=function(e){var a=Object(n.useContext)(m),t=a.authUser,s=a.setAuthUser,r=function(){s({username:""}),localStorage.setItem("user",""),localStorage.setItem("admin",!1),window.location="/#/"};return Object(n.useEffect)((function(){var e=localStorage.getItem("user"),a=localStorage.getItem("admin");s({username:e,admin:a})}),[]),l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light position-sticky sticky-top"},l.a.createElement("a",{className:"navbar-brand text-white",href:"#"},"MM"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",style:{backgroundColor:"rgb(82, 82, 82)"}},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{to:"/",className:"nav-link text-white",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{to:"/music",className:"nav-link text-white",href:"#"},"Music"))),""===t.username||null===t.username?l.a.createElement("ul",{className:"navbar-nav  justify-content-end"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{to:"/login",className:"nav-link text-white",href:"#"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{to:"/register",className:"nav-link text-white",href:"#"},"Register"))):!1===t.admin||"false"===t.admin?l.a.createElement("ul",{className:"navbar-nav justify-content-end"},l.a.createElement("li",{className:"nav-item",onClick:function(){r()}},l.a.createElement(c.b,{to:"/register",className:"nav-link text-white",href:"#"},"Logout"))):l.a.createElement("ul",{className:"navbar-nav justify-content-end"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{to:"/listofusers",className:"nav-link text-white",href:"#"},"List of users")),l.a.createElement("li",{className:"nav-item",onClick:function(){r()}},l.a.createElement(c.b,{to:"/register",className:"nav-link text-white",href:"#"},"Logout")))))},f=t(6),E=t.n(f),b=t(2),p=function(){var e=Object(n.useState)({username:"",password:"",success:!1}),a=Object(o.a)(e,2),t=a[0],s=a[1];return t.success?l.a.createElement("div",{className:"jumbotron",style:{backgroundColor:"rgb(82, 82, 82)"}},l.a.createElement("h1",{className:"display-4"},"You are registered!"),l.a.createElement("p",{className:"lead"},"You have successfully created your account!"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("p",null,"To start browsing and listening music press the button below to log in to your account!"),l.a.createElement(c.b,{to:"/login",className:"btn btn-dark btn-lg",href:"#",role:"button"},"Login")):l.a.createElement("div",{align:"center",className:"mt-5",style:{color:"rgb(201, 201, 201)"}},l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={username:t.username,password:t.password};E.a.post(b.server+"users/add",a).then((function(e){return s({success:!0})})).catch((function(e){alert("Username is already taken!"),s({username:"",password:"",success:!1})}))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Username: "),l.a.createElement("input",{type:"text",minLength:"3",required:!0,className:"form-control",style:{width:"250px"},value:t.username,onChange:function(e){s({username:e.target.value,password:t.password})}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password: "),l.a.createElement("input",{type:"password",minLength:"6",required:!0,className:"form-control",style:{width:"250px"},value:t.password,onChange:function(e){s({username:t.username,password:e.target.value})}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Register",className:"btn btn-dark"}))))},v=t(15),g=function(){return l.a.createElement("div",{className:"info"},l.a.createElement("h1",null,"Skills"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-html5 skill-icon"})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"HTML"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-css3-alt skill-icon"})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"CSS"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-js skill-icon"})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"JavaScript"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-bootstrap skill-icon"})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"Bootstrap"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-react skill-icon"})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"React/Redux"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-react skill-icon"})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"React Native")))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-sass skill-icon"})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"Sass"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-node-js skill-icon"})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"Node.js"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-node-js skill-icon"})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"Express"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fas fa-database skill-icon"})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"MongoDB"))),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"skills-icon-container"},l.a.createElement("i",{className:"fab fa-git-alt skill-icon"})),l.a.createElement("div",{className:"skills-text-container"},l.a.createElement("a",{className:"skill-text"},"Git"))))))},N=function(){return l.a.createElement("div",{className:"info-aboutme"},l.a.createElement("h1",null,"About Me"),l.a.createElement("div",{className:"aboutme-text"},l.a.createElement("p",null,"My name is Micha\u0142 Mikulski. I have been programming since I started attending high school. I am comfortable and take joy in coding front-end and back-end applications. Nonetheless I am just a beginner and I am constantly learning new skills and mastering the ones i have.")),l.a.createElement("div",{className:"aboutme-schools"},l.a.createElement("h3",null,"Education"),l.a.createElement("h5",null,"2016-2020"),l.a.createElement("p",null,"Upper-Secondary School of Communications in Cracow"),l.a.createElement("a",{href:"http://tl.krakow.pl/",target:"_blank"},"http://tl.krakow.pl/")))},h=t(43),k=t.n(h),y=function(){return l.a.createElement("div",{className:"info-projects",style:{marginBottom:"80px"}},l.a.createElement("h1",null,"Projects"),l.a.createElement("div",{className:"card text-center",style:{width:"14rem",backgroundColor:"rgb(71, 71, 71)"}},l.a.createElement("img",{src:k.a,className:"card-img-top",alt:"mern"}),l.a.createElement("div",{className:"card-body"},l.a.createElement(c.b,{to:"/music",className:"btn btn-link",href:"#",style:{fontSize:"18px"}},"Music player"),l.a.createElement("a",{className:"btn btn-link",href:"https://github.com/michmiku/portfolio",style:{fontSize:"18px"}},"GitHub"))))},w=function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"list-example",className:"list-group position-sticky sticky-top scroll-buttons",style:{top:"250px"}},l.a.createElement(v.Link,{className:"list-group-item list-group-item-action bg-transparent border-0",to:"list-item-1",smooth:!0,duration:500},l.a.createElement("button",{type:"button",className:"btn  btn-outline-light scrollspy-button"},"Skills")),l.a.createElement(v.Link,{className:"list-group-item list-group-item-action bg-transparent border-0",to:"list-item-2",smooth:!0,duration:500},l.a.createElement("button",{type:"button",className:"btn  btn-outline-light scrollspy-button"},"About Me")),l.a.createElement(v.Link,{className:"list-group-item list-group-item-action bg-transparent border-0",to:"list-item-3",smooth:!0,duration:500},l.a.createElement("button",{type:"button",className:"btn  btn-outline-light scrollspy-button"},"Projects")),l.a.createElement(v.Link,{className:"list-group-item list-group-item-action bg-transparent border-0",to:"list-item-4",smooth:!0,duration:500},l.a.createElement("button",{type:"button",className:"btn  btn-outline-light scrollspy-button"},"Contact"))),l.a.createElement("div",{"data-spy":"scroll","data-target":"#list-example","data-offset":"0",className:"scrollspy-example "},l.a.createElement("div",{className:"mt-5"},l.a.createElement("div",{id:"list-item-1",className:"scrollS"}),l.a.createElement(g,null),l.a.createElement("div",{id:"list-item-2",className:"scrollS"}),l.a.createElement(N,null),l.a.createElement("div",{id:"list-item-3",className:"scrollS"}),l.a.createElement(y,null))))},x=function(){return l.a.createElement("footer",{className:"py-4 text-white-50 footer",id:"list-item-4"},l.a.createElement("div",{className:"row footer-item"},l.a.createElement("div",{className:"col text-center"},l.a.createElement("a",null,"Micha\u0142 Mikulski"),l.a.createElement("br",null),l.a.createElement("a",null,"tel.: 668711145"),l.a.createElement("br",null),l.a.createElement("a",null,"email: michmiku@gmail.com")),l.a.createElement("div",{className:"col text-center"},l.a.createElement("div",{style:{paddingTop:"50px"}},l.a.createElement("div",{style:{display:"inline-block",paddingRight:"30px"}},l.a.createElement("a",{href:"https://www.linkedin.com/in/micha%C5%82-mikulski-7145491ab/",target:"_blank",style:{color:"rgb(207, 207, 207)"}},l.a.createElement("i",{className:"fab fa-linkedin-in fa-2x"}))),l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("a",{href:"https://github.com/michmiku",target:"_blank",style:{color:"rgb(207, 207, 207)"}},l.a.createElement("i",{className:"fab fa-github fa-2x"})))))),l.a.createElement("div",{className:"container text-center footer-copyright"},l.a.createElement("small",null,"Copyright \xa9 Micha\u0142 Mikulski")))},j=function(){return l.a.createElement("div",{className:"header darken-pseudo darken-with-text"},l.a.createElement("a",{className:"header-name"},"Micha\u0142 Mikulski"),l.a.createElement("br",null),l.a.createElement("a",{className:"header-job"},"Full Stack Web Developer"))},O=function(){return Object(n.useEffect)((function(){E.a.get(b.server+"music/")}),[]),l.a.createElement("div",{className:"container-fluid pl-0 pr-0 home-container"},l.a.createElement(j,null),l.a.createElement(w,null),l.a.createElement(x,null))},C=function(){var e=Object(n.useState)({username:"",password:""}),a=Object(o.a)(e,2),t=a[0],s=a[1],r=Object(n.useContext)(m),i=r.authUser,u=r.setAuthUser;return""===i.username||null===i.username?l.a.createElement("div",{align:"center",className:"mt-5",style:{color:"rgb(201, 201, 201)"}},l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={username:t.username,password:t.password};E.a.post(b.server+"users/login",a).then((function(e){""===e.data?alert("Wrong username or password!"):(u({username:t.username,admin:e.data[0].admin}),localStorage.setItem("user",t.username),localStorage.setItem("admin",e.data[0].admin))})).catch((function(e){return console.log(e)})),s({username:"",password:""})}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Username: "),l.a.createElement("input",{type:"text",minLength:"3",required:!0,className:"form-control",style:{width:"250px"},value:t.username,onChange:function(e){s({username:e.target.value,password:t.password})}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password: "),l.a.createElement("input",{type:"password",minLength:"6",required:!0,className:"form-control",style:{width:"250px"},value:t.password,onChange:function(e){s({username:t.username,password:e.target.value})}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Login",className:"btn btn-dark"})))):l.a.createElement("div",{className:"jumbotron",style:{backgroundColor:"rgb(82, 82, 82)"}},l.a.createElement("h1",{className:"display-4"},"You are logged in!"),l.a.createElement("p",{className:"lead"},"You have successfully logged in to your account!"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("p",null,"If you want to start listening to music press the button below!"),l.a.createElement(c.b,{className:"btn btn-dark btn-lg",to:"/music",role:"button"},"Music library"))},S=function(){var e=Object(n.useState)({listOfUsers:[]}),a=Object(o.a)(e,2),t=a[0],s=a[1],r=Object(n.useState)({password:""}),c=Object(o.a)(r,2),i=c[0],m=c[1];Object(n.useEffect)((function(){E.a.get(b.server+"users").then((function(e){s({listOfUsers:e.data})})).catch((function(e){return console.log(e)}))}));return l.a.createElement("div",{className:"userlist-container"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Admin"),l.a.createElement("th",{scope:"col"},"Username"),l.a.createElement("th",{scope:"col"},"Password"),l.a.createElement("th",{scope:"col",colSpan:"2"}))),l.a.createElement("tbody",null,t.listOfUsers.map((function(e,a){return l.a.createElement("tr",{key:a,style:{color:"lightgrey"}},l.a.createElement("th",{scope:"row",style:{paddingTop:"22px"}},a),l.a.createElement("td",{style:{paddingTop:"18px"}},l.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm ",onClick:function(){!function(e){E.a.post(b.server+"users/updateAdmin",e).then((function(e){})).catch((function(e){return console.log(e)}))}(e)}},String(e.admin))),l.a.createElement("td",{style:{paddingTop:"20px"}},e.username),l.a.createElement("td",{style:{paddingTop:"15px"}},l.a.createElement("input",{type:"text",minLength:"6",min:"6",className:"form-control w-25",placeholder:e.password,onChange:function(e){m(e.target.value)}})),l.a.createElement("td",{style:{paddingTop:"15px"}},l.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm mr-5",onClick:function(){!function(e,a){var t={user:e,password:a};E.a.post(b.server+"users/updatePassword",t).then((function(e){})).catch((function(e){return alert("Password is too short!")}))}(e,i)}},"Change password")),l.a.createElement("td",{style:{paddingTop:"15px"}},l.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm ",onClick:function(){!function(e){E.a.delete(b.server+"users/delete/"+e._id).then((function(e){})).catch((function(e){return console.log(e)}))}(e)}},"Delete user")))})))))},M=t(13),P=function(e){var a=e.isPlaying,t=e.handlePlay,s=e.handlePause,r=e.player,c=(e.src,e.setSrc),i=e.duration,m=e.currentTime,u=e.musicList,d=e.currentId,f=e.setCurrentId,E=e.setDuration,p=e.setIsPlaying,v=e.myMusic,g=e.repeat,N=e.setRepeat,h=e.random,k=e.setRandom,y=e.currentArtistPlaylist,w=e.currentArtist,x=Object(n.useRef)(null),j=Object(n.useRef)(null),O=Object(n.useState)(""),C=Object(o.a)(O,2),S=C[0],M=C[1],P=Object(n.useState)(30),I=Object(o.a)(P,2),D=I[0],L=I[1],T=Object(n.useState)({title:"",artist:""}),U=Object(o.a)(T,2),A=U[0],R=U[1];Object(n.useEffect)((function(){if(void 0!==m){var e=Math.floor(m/60),a=Math.floor(m-60*e);a<10&&(a="0"+a),e<10&&(e="0"+e),M(e+":"+a)}""===i.rawDuration&&M("")})),Object(n.useEffect)((function(){null===localStorage.getItem("volume")?(L(30),r.current.volume=.3):(L(100*localStorage.getItem("volume")),r.current.volume=localStorage.getItem("volume"))}),[]),Object(n.useEffect)((function(){void 0!==d&&R({title:u[d].title,artist:u[d].artist})}),[d]);var B=function(){N(!g),k(!1)},Y=function(){N(!1),k(!h)};return l.a.createElement("footer",{className:"py-4 text-white-50 player fixed-bottom"},l.a.createElement("div",{className:"player-control-buttons"},g?l.a.createElement("i",{className:"fas fa-redo-alt repeat-button-on",onClick:function(){B()}}):l.a.createElement("i",{className:"fas fa-redo-alt repeat-button",onClick:function(){B()}}),l.a.createElement("i",{className:"fas fa-angle-double-left left-button fa-2x",onClick:function(){(d>0&&w===y||d>0&&v&&w===y)&&(c(b.server+"music/"+u[d-1].file),f(d-1),E({duration:u[d-1].duration,rawDuration:u[d-1].rawDuration}),p({playing:!0}))}}),a.playing?l.a.createElement("i",{onClick:function(){s()},className:"far fa-pause-circle fa-3x play-button"}):l.a.createElement("i",{onClick:function(){t()},className:"far fa-play-circle fa-3x play-button"}),l.a.createElement("i",{className:"fas fa-angle-double-right right-button fa-2x",onClick:function(){!function(){var e=d;if(u.length>1)if(h){for(;e===d;)e=Math.floor(Math.random()*u.length);(w===y||v&&w===y)&&(c(b.server+"music/"+u[e].file),f(e),E({duration:u[e].duration,rawDuration:u[e].rawDuration}),p({playing:!0}))}else(e<u.length-1&&w===y||e<u.length-1&&v&&w===y)&&(c(b.server+"music/"+u[e+1].file),f(e+1),E({duration:u[e+1].duration,rawDuration:u[e+1].rawDuration}),p({playing:!0}))}()}}),h?l.a.createElement("i",{className:"fas fa-random random-button-on",onClick:function(){Y()}}):l.a.createElement("i",{className:"fas fa-random random-button",onClick:function(){Y()}})),l.a.createElement("div",{className:"current-song"},l.a.createElement("a",{className:"current-title"},A.title),l.a.createElement("br",null),l.a.createElement("a",{className:"current-artist"},A.artist)),l.a.createElement("div",{className:"volume-slider"},l.a.createElement("i",{className:"fas fa-volume-up volume-icon fa-lg"}),l.a.createElement("input",{type:"range",min:"1",max:"100",value:D,className:"slider",onChange:function(e){!function(e){L(e.target.value),r.current.volume=e.target.value/100,localStorage.setItem("volume",e.target.value/100)}(e)}})),l.a.createElement("div",{className:"progr-bar "},l.a.createElement("div",{className:"currentTime"},S),l.a.createElement("div",{ref:x,className:"duration-bar",onClick:function(e){!function(e){var a=(e.pageX-j.current.getBoundingClientRect().left)/4*i.rawDuration/100;r.current.currentTime=a}(e)}},l.a.createElement("div",{ref:j,style:{width:m/i.rawDuration*100+"%"},className:"currentTime-bar"})),l.a.createElement("div",{className:"duration"},i.duration)))},I=t(46),D=function(e){var a=e.musicList,t=e.handleNewArtist,s=e.myMusic,r=e.setMyMusic,c=e.setCurrentArtistPlaylist,i=e.currentArtistPlaylist,m=Object(n.useState)([]),u=Object(o.a)(m,2),d=u[0],f=u[1],E=Object(n.useState)(!1),b=Object(o.a)(E,2),p=b[0],v=b[1];Object(n.useEffect)((function(){var e=[];a.music.map((function(t,n){var l=t.artist;e=[].concat(Object(M.a)(e),[l]),f(e),n===a.music.length-1&&v(!0)}))}),[a]);var g=function(){r(!0),c("favorite")};return l.a.createElement("div",{className:"sidebar"},p?l.a.createElement("div",null,l.a.createElement("ul",{className:"nav flex-column border-bottom border-secondary pb-3"},l.a.createElement("li",{className:"nav-item "},s?l.a.createElement("div",{className:"my-music-button-selected",onClick:function(){g()}},l.a.createElement("i",{className:"fas fa-bars fa-sm list-icon"}),l.a.createElement("a",null,"My music")):l.a.createElement("div",{className:"my-music-button",onClick:function(){g()}},l.a.createElement("i",{className:"fas fa-bars fa-sm list-icon"}),l.a.createElement("a",null,"My music")))),l.a.createElement("ul",{className:"nav flex-column"},Object(M.a)(new Set(d)).map((function(e,a){return i===e?l.a.createElement("li",{className:"nav-item artist-list-selected",key:a,onClick:function(){t(e)}},l.a.createElement("a",{className:""},e)):l.a.createElement("li",{className:"nav-item artist-list",key:a,onClick:function(){t(e)}},l.a.createElement("a",{className:""},e))})))):l.a.createElement(I.a,{animation:"grow",variant:"success",className:"spinner"}))},L=function(e){var a=e.musicList,t=e.handleTitleClick,s=e.handlePlay,r=e.handlePause,c=e.isPlaying,i=e.src,o=e.authUser,m=e.favoriteMusic,u=e.setFavoriteMusic,d=e.currentPlaylist,f=e.myMusic,p=e.setCurrentPlaylist,v=function(e,a,t){E.a.post(b.server+"music/add",{authUser:o,file:e,title:a,artist:t}).then((function(e){var t=[].concat(Object(M.a)(m),[a]);u(t)})).catch((function(e){return console.log(e)}))},g=function(e){var a=m.filter((function(a){return a!==e}));E.a.post(b.server+"music/delete",{title:e,authUser:o}).then((function(e){u(a)})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){var e=[];m.map((function(t){var n=a.music.filter((function(e){return e.title===t}));e=[].concat(Object(M.a)(e),[n[0]])})),f&&p(e)}),[f,m]),l.a.createElement("div",{className:"music-container"},l.a.createElement("div",{className:"top-view"},l.a.createElement("div",{className:"number"},"#"),l.a.createElement("div",{className:"title"},"Title"),l.a.createElement("div",{className:"author"},"Artist"),l.a.createElement("div",{className:"time-clock"},l.a.createElement("i",{className:"far fa-clock fa-lg"}))),d.map((function(e,a){var n=e.file,o=e.title,u=e.artist,d=e.duration,f=e.rawDuration;return i===b.server+"music/"+n?l.a.createElement("div",{className:"middle-view-selected",key:a},l.a.createElement("div",{className:"number"},a),l.a.createElement("div",{className:"title",onClick:function(){t(n,a,d,f)}},o),l.a.createElement("div",{className:"author"},u),l.a.createElement("div",{className:"time"},d),m.includes(o)?l.a.createElement("i",{className:"fas fa-ban fa-lg  heart",onClick:function(){g(o)}}):l.a.createElement("i",{className:"far fa-heart fa-lg  heart",onClick:function(){v(n,o,u)}}),i===b.server+"music/"+n&&c.playing?l.a.createElement("i",{onClick:function(){r()},className:"far fa-pause-circle fa-2x play-button-list"}):l.a.createElement("i",{onClick:function(){s(n,a,d,f)},className:"far fa-play-circle fa-2x play-button-list"})):l.a.createElement("div",{className:"middle-view",key:a},l.a.createElement("div",{className:"number"},a),l.a.createElement("div",{className:"title",onClick:function(){t(n,a,d,f)}},o),l.a.createElement("div",{className:"author"},u),l.a.createElement("div",{className:"time"},d),m.includes(o)?l.a.createElement("i",{className:"fas fa-ban fa-lg  heart",onClick:function(){g(o)}}):l.a.createElement("i",{className:"far fa-heart fa-lg heart",onClick:function(){v(n,o,u)}}),i===b.server+"music/"+n&&c.playing?l.a.createElement("i",{onClick:function(){r()},className:"far fa-pause-circle fa-2x play-button-list"}):l.a.createElement("i",{onClick:function(){s(n,a,d,f)},className:"far fa-play-circle fa-2x play-button-list"}))})))},T=function(){var e=Object(n.useState)({music:[]}),a=Object(o.a)(e,2),t=a[0],s=a[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),u=i[0],d=i[1],f=Object(n.useState)({playing:!1}),p=Object(o.a)(f,2),v=p[0],g=p[1],N=Object(n.useState)({duration:"",rawDuration:""}),h=Object(o.a)(N,2),k=h[0],y=h[1],w=Object(n.useState)(),x=Object(o.a)(w,2),j=x[0],O=x[1],C=Object(n.useState)(),S=Object(o.a)(C,2),I=S[0],T=S[1],U=Object(n.useState)([]),A=Object(o.a)(U,2),R=A[0],B=A[1],Y=Object(n.useState)([]),q=Object(o.a)(Y,2),J=q[0],W=q[1],_=Object(n.useState)(!1),F=Object(o.a)(_,2),H=F[0],z=F[1],G=Object(n.useState)(!1),X=Object(o.a)(G,2),$=X[0],K=X[1],Q=Object(n.useState)(!1),V=Object(o.a)(Q,2),Z=V[0],ee=V[1],ae=Object(n.useState)(),te=Object(o.a)(ae,2),ne=te[0],le=te[1],se=Object(n.useState)(),re=Object(o.a)(se,2),ce=re[0],ie=re[1],oe=Object(n.useContext)(m).authUser,me=Object(n.useRef)(null);Object(n.useEffect)((function(){E.a.get(b.server+"music/getlist").then((function(e){s({music:e.data})})).catch((function(e){return console.log(e)})),E.a.post(b.server+"music/favorite",oe).then((function(e){var a=[];e.data.map((function(e){var t=e.title;a=[].concat(Object(M.a)(a),[t]),W(a)}))})).catch((function(e){return console.log(e)}))}),[]),Object(n.useEffect)((function(){""!==u&&(me.current.load(),me.current.play())}),[u]);var ue=function(e,a,t,n){""===u&&void 0===e||(u===b.server+"music/"+e||void 0===e?(g({playing:!0}),me.current.play()):(d(b.server+"music/"+e),g({playing:!0}),T(a),y({duration:t,rawDuration:n}),ie(ne)))},de=function(){g({playing:!1}),me.current.pause()};return null!==oe.username?l.a.createElement("div",{className:"box"},l.a.createElement(D,{musicList:t,handleNewArtist:function(e){var a=t.music.filter((function(a){return a.artist===e}));B(a),z(!1),le(e)},myMusic:H,setMyMusic:z,setCurrentArtistPlaylist:le,currentArtistPlaylist:ne}),l.a.createElement(L,{musicList:t,handleTitleClick:function(e,a,t,n){d(b.server+"music/"+e),g({playing:!0}),T(a),y({duration:t,rawDuration:n}),ie(ne)},handlePlay:ue,handlePause:de,isPlaying:v,src:u,authUser:oe,favoriteMusic:J,setFavoriteMusic:W,currentPlaylist:R,myMusic:H,setCurrentPlaylist:B}),l.a.createElement(P,{isPlaying:v,handlePlay:function(){ue()},handlePause:function(){de()},player:me,src:u,setSrc:d,duration:k,currentTime:j,musicList:R,currentId:I,setCurrentId:T,setDuration:y,setIsPlaying:g,myMusic:H,repeat:$,setRepeat:K,random:Z,setRandom:ee,currentArtistPlaylist:ne,currentArtist:ce}),l.a.createElement("audio",{ref:me,onTimeUpdate:function(){O(me.current.currentTime)},onEnded:function(){!function(e){var a=I;if(R.length<2&&!Z&&!$)O(0),d(""),T(null),y({duration:"",rawDuration:0}),g({playing:!1}),me.current.load(),me.current.play();else if(Z)if(R.length<2)O(0),me.current.load(),me.current.play();else{for(;a===I;)a=Math.floor(Math.random()*R.length);(ce===ne||H&&ce===ne)&&(d(b.server+"music/"+R[a].file),T(a),y({duration:R[a].duration,rawDuration:R[a].rawDuration}),g({playing:!0}))}else $?(O(0),me.current.load(),me.current.play()):(a<R.length-1&&ce===ne||a<R.length-1&&H&&ce===ne)&&(d(b.server+"music/"+R[a+1].file),T(a+1),y({duration:R[a+1].duration,rawDuration:R[a+1].rawDuration}),g({playing:!0}))}()}},l.a.createElement("source",{src:u}))):l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"You are not logged in!"),l.a.createElement("p",{className:"card-text"},"In order to browse and listen to music you need to either login to your account or create a new one."),l.a.createElement(c.b,{to:"/login",className:"btn btn-primary mr-3 "},"Login"),l.a.createElement(c.b,{to:"/register",className:"btn btn-primary "},"Register"))},U=function(){return l.a.createElement(c.a,null,l.a.createElement(d,null),l.a.createElement(i.a,{path:"/",exact:!0,component:O}),l.a.createElement(i.a,{path:"/michal-mikulski",component:O}),l.a.createElement(i.a,{path:"/register",component:p}),l.a.createElement(i.a,{path:"/login",component:C}),l.a.createElement(i.a,{path:"/listofusers",component:S}),l.a.createElement(i.a,{path:"/music",component:T}))};var A=function(){return l.a.createElement(u,null,l.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(81),t(41),t(84);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.9f5bf719.chunk.js.map