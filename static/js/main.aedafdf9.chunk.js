(this["webpackJsonpmichal-mikulski"]=this["webpackJsonpmichal-mikulski"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"server":"https://michal-mikulski.herokuapp.com/"}')},46:function(e,t,a){e.exports=a(84)},51:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),s=a.n(l),c=(a(51),a(6)),i=a(4),o=a(2),u=Object(n.createContext)(),m=function(e){var t=Object(n.useState)({username:localStorage.getItem("user"),admin:localStorage.getItem("admin")}),a=Object(o.a)(t,2),l=a[0],s=a[1];return r.a.createElement(u.Provider,{value:{authUser:l,setAuthUser:s}},e.children)},d=a(1),f=function(e){var t=Object(n.useContext)(u),a=t.authUser,l=t.setAuthUser,s=function(){l({username:""}),localStorage.setItem("user",""),localStorage.setItem("admin",!1),window.location="/#/"};return Object(n.useEffect)((function(){var e=localStorage.getItem("user"),t=localStorage.getItem("admin");l({username:e,admin:t})}),[]),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light position-sticky sticky-top"},r.a.createElement("a",{className:"navbar-brand text-white",href:"#"},"MM"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/",className:"nav-link text-white",href:"#"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/music",className:"nav-link text-white",href:"#"},"Music"))),""===a.username||null===a.username?r.a.createElement("ul",{className:"navbar-nav  justify-content-end"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/login",className:"nav-link text-white",href:"#"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/register",className:"nav-link text-white",href:"#"},"Register"))):!1===a.admin||"false"===a.admin?r.a.createElement("ul",{className:"navbar-nav justify-content-end"},r.a.createElement("li",{className:"nav-item",onClick:function(){s()}},r.a.createElement(c.b,{to:"/register",className:"nav-link text-white",href:"#"},"Logout"))):r.a.createElement("ul",{className:"navbar-nav justify-content-end"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/listofusers",className:"nav-link text-white",href:"#"},"List of users")),r.a.createElement("li",{className:"nav-item",onClick:function(){s()}},r.a.createElement(c.b,{to:"/register",className:"nav-link text-white",href:"#"},"Logout")))))},p=a(5),b=a.n(p),v=function(){var e=Object(n.useState)({username:"",password:"",success:!1}),t=Object(o.a)(e,2),a=t[0],l=t[1];return a.success?r.a.createElement("div",{className:"jumbotron bg-light"},r.a.createElement("h1",{className:"display-4"},"You are registered!"),r.a.createElement("p",{className:"lead"},"You have successfully created your account!"),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",null,"To start browsing and listening music press the button below to log in to your account!"),r.a.createElement(c.b,{to:"/login",className:"btn btn-primary btn-lg",href:"#",role:"button"},"Login")):r.a.createElement("div",{align:"center",className:"mt-5"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={username:a.username,password:a.password};b.a.post(d.server+"users/add",t).then((function(e){return l({success:!0})})).catch((function(e){alert("Username is already taken!"),l({username:"",password:"",success:!1})}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",minLength:"3",required:!0,className:"form-control w-25",value:a.username,onChange:function(e){l({username:e.target.value,password:a.password})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password: "),r.a.createElement("input",{type:"password",minLength:"6",required:!0,className:"form-control w-25",value:a.password,onChange:function(e){l({username:a.username,password:e.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Register",className:"btn btn-primary"}))))},g=a(19),E=function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"list-example",className:"list-group position-sticky sticky-top text-center ",style:{width:"120px",top:"250px"}},r.a.createElement(g.Link,{className:"list-group-item list-group-item-action bg-transparent border-0",to:"list-item-1",smooth:!0,duration:500},r.a.createElement("button",{type:"button",className:"btn  btn-outline-light scrollspy-button",style:{backgroundColor:"#808080"}},"Item 1")),r.a.createElement(g.Link,{className:"list-group-item list-group-item-action bg-transparent border-0",to:"list-item-2",smooth:!0,duration:500},r.a.createElement("button",{type:"button",className:"btn  btn-outline-light scrollspy-button",style:{backgroundColor:"#808080"}},"Item 2")),r.a.createElement(g.Link,{className:"list-group-item list-group-item-action bg-transparent border-0",to:"list-item-3",smooth:!0,duration:500},r.a.createElement("button",{type:"button",className:"btn  btn-outline-light scrollspy-button",style:{backgroundColor:"#808080"}},"Item 3"))),r.a.createElement("div",{"data-spy":"scroll","data-target":"#list-example","data-offset":"200",className:"scrollspy-example "},r.a.createElement("div",{className:"mt-5"},r.a.createElement("div",{id:"list-item-1",className:"scrollS"}),r.a.createElement("div",{className:"info"},r.a.createElement("h4",null,"Item 1"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sagittis erat. Phasellus placerat semper orci sit amet semper. Vivamus laoreet tortor vel venenatis feugiat.")),r.a.createElement("div",{id:"list-item-2",className:"scrollS"}),r.a.createElement("div",{className:"info"},r.a.createElement("h4",null,"Item 2"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sagittis erat. Phasellus placerat semper orci sit amet semper. Vivamus laoreet tortor vel venenatis feugiat. Fusce semper feugiat odio, ac ultricies ligula ultrices pretium. Aenean dui nibh, venenatis sed odio a, porttitor scelerisque elit. Donec in mi sollicitudin libero feugiat fermentum quis eget enim. Vestibulum pellentesque ex et erat luctus accumsan. Nullam at augue gravida, pretium ligula vel, convallis")),r.a.createElement("div",{id:"list-item-3",className:"scrollS"}),r.a.createElement("div",{className:"info",style:{marginBottom:"80px"}},r.a.createElement("h4",null,"Item 3"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sagittis erat. Phasellus placerat semper orci sit amet semper. Vivamus laoreet tortor vel venenatis feugiat. Fusce semper feugiat odio, ac ultricies ligula ultrices pretium. Aenean dui nibh, venenatis sed odio a, porttitor scelerisque elit. Donec in mi sollicitudin libero feugiat fermentum quis eget enim. Vestibulum pellentesque ex et erat luctus accumsan. Nullam at augue gravida, pretium ligula vel, convallis quam.")))))},h=function(){return r.a.createElement("footer",{className:"py-4 text-white-50 footer"},r.a.createElement("div",{className:"container text-center footer-item"},r.a.createElement("small",null,"Copyright \xa9 Micha\u0142 Mikulski")))},N=function(){return Object(n.useEffect)((function(){b.a.get(d.server+"music/")}),[]),r.a.createElement("div",{className:"container-fluid pl-0 pr-0 home-container"},r.a.createElement("div",{className:"header"},r.a.createElement("a",null,"Micha\u0142 Mikulski")),r.a.createElement(E,null),r.a.createElement(h,null))},y=function(){var e=Object(n.useState)({username:"",password:""}),t=Object(o.a)(e,2),a=t[0],l=t[1],s=Object(n.useContext)(u),i=s.authUser,m=s.setAuthUser;return""===i.username||null===i.username?r.a.createElement("div",{align:"center",className:"mt-5"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={username:a.username,password:a.password};b.a.post(d.server+"users/login",t).then((function(e){""===e.data?alert("Wrong username or password!"):(m({username:a.username,admin:e.data[0].admin}),localStorage.setItem("user",a.username),localStorage.setItem("admin",e.data[0].admin))})).catch((function(e){return console.log(e)})),l({username:"",password:""})}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",minLength:"3",required:!0,className:"form-control w-25",value:a.username,onChange:function(e){l({username:e.target.value,password:a.password})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password: "),r.a.createElement("input",{type:"password",minLength:"6",required:!0,className:"form-control w-25",value:a.password,onChange:function(e){l({username:a.username,password:e.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Login",className:"btn btn-primary"})))):r.a.createElement("div",{className:"jumbotron bg-light"},r.a.createElement("h1",{className:"display-4"},"You are logged in!"),r.a.createElement("p",{className:"lead"},"You have successfully logged in to your account!"),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",null,"If you want to start listening to music press the button below!"),r.a.createElement(c.b,{className:"btn btn-primary btn-lg",to:"/music",role:"button"},"Music library"))},w=function(){var e=Object(n.useState)({listOfUsers:[]}),t=Object(o.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)({password:""}),c=Object(o.a)(s,2),i=c[0],u=c[1];Object(n.useEffect)((function(){b.a.get(d.server+"users").then((function(e){l({listOfUsers:e.data})})).catch((function(e){return console.log(e)}))}));return r.a.createElement("div",{className:"userlist-container"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Admin"),r.a.createElement("th",{scope:"col"},"Username"),r.a.createElement("th",{scope:"col"},"Password"),r.a.createElement("th",{scope:"col",colSpan:"2"}))),r.a.createElement("tbody",null,a.listOfUsers.map((function(e,t){return r.a.createElement("tr",{key:t,style:{color:"lightgrey"}},r.a.createElement("th",{scope:"row",style:{paddingTop:"22px"}},t),r.a.createElement("td",{style:{paddingTop:"18px"}},r.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm ",onClick:function(){!function(e){b.a.post(d.server+"users/updateAdmin",e).then((function(e){})).catch((function(e){return console.log(e)}))}(e)}},String(e.admin))),r.a.createElement("td",{style:{paddingTop:"20px"}},e.username),r.a.createElement("td",{style:{paddingTop:"15px"}},r.a.createElement("input",{type:"text",minLength:"6",min:"6",className:"form-control w-25",placeholder:e.password,onChange:function(e){u(e.target.value)}})),r.a.createElement("td",{style:{paddingTop:"15px"}},r.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm mr-5",onClick:function(){!function(e,t){var a={user:e,password:t};b.a.post(d.server+"users/updatePassword",a).then((function(e){})).catch((function(e){return alert("Password is too short!")}))}(e,i)}},"Change password")),r.a.createElement("td",{style:{paddingTop:"15px"}},r.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm ",onClick:function(){!function(e){b.a.delete(d.server+"users/delete/"+e._id).then((function(e){})).catch((function(e){return console.log(e)}))}(e)}},"Delete user")))})))))},j=a(13),k=function(e){var t=e.isPlaying,a=e.handlePlay,l=e.handlePause,s=e.player,c=(e.src,e.setSrc),i=e.duration,u=e.currentTime,m=e.musicList,f=e.currentId,p=e.setCurrentId,b=e.setDuration,v=e.setIsPlaying,g=e.myMusic,E=e.repeat,h=e.setRepeat,N=e.random,y=e.setRandom,w=e.currentArtistPlaylist,j=e.currentArtist,k=Object(n.useRef)(null),O=Object(n.useRef)(null),x=Object(n.useState)(""),C=Object(o.a)(x,2),S=C[0],P=C[1],M=Object(n.useState)(30),I=Object(o.a)(M,2),D=I[0],L=I[1],T=Object(n.useState)({title:"",artist:""}),U=Object(o.a)(T,2),A=U[0],q=U[1];Object(n.useEffect)((function(){if(void 0!==u){var e=Math.floor(u/60),t=Math.floor(u-60*e);t<10&&(t="0"+t),e<10&&(e="0"+e),P(e+":"+t)}""===i.rawDuration&&P("")})),Object(n.useEffect)((function(){null===localStorage.getItem("volume")?(L(30),s.current.volume=.3):(L(100*localStorage.getItem("volume")),s.current.volume=localStorage.getItem("volume"))}),[]),Object(n.useEffect)((function(){void 0!==f&&q({title:m[f].title,artist:m[f].artist})}),[f]);var R=function(){h(!E),y(!1)},V=function(){h(!1),y(!N)};return r.a.createElement("footer",{className:"py-4 text-white-50 player fixed-bottom"},r.a.createElement("div",{className:"player-control-buttons"},E?r.a.createElement("i",{className:"fas fa-redo-alt repeat-button-on",onClick:function(){R()}}):r.a.createElement("i",{className:"fas fa-redo-alt repeat-button",onClick:function(){R()}}),r.a.createElement("i",{className:"fas fa-angle-double-left left-button fa-2x",onClick:function(){(f>0&&j===w||f>0&&g&&j===w)&&(c(d.server+"music/"+m[f-1].file),p(f-1),b({duration:m[f-1].duration,rawDuration:m[f-1].rawDuration}),v({playing:!0}))}}),t.playing?r.a.createElement("i",{onClick:function(){l()},className:"far fa-pause-circle fa-3x play-button"}):r.a.createElement("i",{onClick:function(){a()},className:"far fa-play-circle fa-3x play-button"}),r.a.createElement("i",{className:"fas fa-angle-double-right right-button fa-2x",onClick:function(){!function(){var e=f;if(m.length>1)if(N){for(;e===f;)e=Math.floor(Math.random()*m.length);(j===w||g&&j===w)&&(c(d.server+"music/"+m[e].file),p(e),b({duration:m[e].duration,rawDuration:m[e].rawDuration}),v({playing:!0}))}else(e<m.length-1&&j===w||e<m.length-1&&g&&j===w)&&(c(d.server+"music/"+m[e+1].file),p(e+1),b({duration:m[e+1].duration,rawDuration:m[e+1].rawDuration}),v({playing:!0}))}()}}),N?r.a.createElement("i",{className:"fas fa-random random-button-on",onClick:function(){V()}}):r.a.createElement("i",{className:"fas fa-random random-button",onClick:function(){V()}})),r.a.createElement("div",{className:"current-song"},r.a.createElement("a",{className:"current-title"},A.title),r.a.createElement("br",null),r.a.createElement("a",{className:"current-artist"},A.artist)),r.a.createElement("div",{className:"volume-slider"},r.a.createElement("i",{className:"fas fa-volume-up volume-icon fa-lg"}),r.a.createElement("input",{type:"range",min:"1",max:"100",value:D,className:"slider",onChange:function(e){!function(e){L(e.target.value),s.current.volume=e.target.value/100,localStorage.setItem("volume",e.target.value/100)}(e)}})),r.a.createElement("div",{className:"progr-bar "},r.a.createElement("div",{className:"currentTime"},S),r.a.createElement("div",{ref:k,className:"duration-bar",onClick:function(e){!function(e){var t=(e.pageX-O.current.getBoundingClientRect().left)/4*i.rawDuration/100;s.current.currentTime=t}(e)}},r.a.createElement("div",{ref:O,style:{width:u/i.rawDuration*100+"%"},className:"currentTime-bar"})),r.a.createElement("div",{className:"duration"},i.duration)))},O=a(45),x=function(e){var t=e.musicList,a=e.handleNewArtist,l=e.myMusic,s=e.setMyMusic,c=e.setCurrentArtistPlaylist,i=e.currentArtistPlaylist,u=Object(n.useState)([]),m=Object(o.a)(u,2),d=m[0],f=m[1],p=Object(n.useState)(!1),b=Object(o.a)(p,2),v=b[0],g=b[1];Object(n.useEffect)((function(){var e=[];t.music.map((function(a,n){var r=a.artist;e=[].concat(Object(j.a)(e),[r]),f(e),n===t.music.length-1&&g(!0)}))}),[t]);var E=function(){s(!0),c("favorite")};return r.a.createElement("div",{className:"sidebar"},v?r.a.createElement("div",null,r.a.createElement("ul",{className:"nav flex-column border-bottom border-secondary pb-3"},r.a.createElement("li",{className:"nav-item "},l?r.a.createElement("div",{className:"my-music-button-selected",onClick:function(){E()}},r.a.createElement("i",{className:"fas fa-bars fa-sm list-icon"}),r.a.createElement("a",null,"My music")):r.a.createElement("div",{className:"my-music-button",onClick:function(){E()}},r.a.createElement("i",{className:"fas fa-bars fa-sm list-icon"}),r.a.createElement("a",null,"My music")))),r.a.createElement("ul",{className:"nav flex-column"},Object(j.a)(new Set(d)).map((function(e,t){return i===e?r.a.createElement("li",{className:"nav-item artist-list-selected",key:t,onClick:function(){a(e)}},r.a.createElement("a",{className:""},e)):r.a.createElement("li",{className:"nav-item artist-list",key:t,onClick:function(){a(e)}},r.a.createElement("a",{className:""},e))})))):r.a.createElement(O.a,{animation:"grow",variant:"success",className:"spinner"}))},C=function(e){var t=e.musicList,a=e.handleTitleClick,l=e.handlePlay,s=e.handlePause,c=e.isPlaying,i=e.src,o=e.authUser,u=e.favoriteMusic,m=e.setFavoriteMusic,f=e.currentPlaylist,p=e.myMusic,v=e.setCurrentPlaylist,g=function(e,t,a){b.a.post(d.server+"music/add",{authUser:o,file:e,title:t,artist:a}).then((function(e){var a=[].concat(Object(j.a)(u),[t]);m(a)})).catch((function(e){return console.log(e)}))},E=function(e){var t=u.filter((function(t){return t!==e}));b.a.post(d.server+"music/delete",{title:e,authUser:o}).then((function(e){m(t)})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){var e=[];u.map((function(a){var n=t.music.filter((function(e){return e.title===a}));e=[].concat(Object(j.a)(e),[n[0]])})),p&&v(e)}),[p,u]),r.a.createElement("div",{className:"music-container"},r.a.createElement("div",{className:"top-view"},r.a.createElement("div",{className:"number"},"#"),r.a.createElement("div",{className:"title"},"Title"),r.a.createElement("div",{className:"author"},"Artist"),r.a.createElement("div",{className:"time-clock"},r.a.createElement("i",{className:"far fa-clock fa-lg"}))),f.map((function(e,t){var n=e.file,o=e.title,m=e.artist,f=e.duration,p=e.rawDuration;return i===d.server+"music/"+n?r.a.createElement("div",{className:"middle-view-selected",key:t},r.a.createElement("div",{className:"number"},t),r.a.createElement("div",{className:"title",onClick:function(){a(n,t,f,p)}},o),r.a.createElement("div",{className:"author"},m),r.a.createElement("div",{className:"time"},f),u.includes(o)?r.a.createElement("i",{className:"fas fa-ban fa-lg  heart",onClick:function(){E(o)}}):r.a.createElement("i",{className:"far fa-heart fa-lg  heart",onClick:function(){g(n,o,m)}}),i===d.server+"music/"+n&&c.playing?r.a.createElement("i",{onClick:function(){s()},className:"far fa-pause-circle fa-2x play-button-list"}):r.a.createElement("i",{onClick:function(){l(n,t,f,p)},className:"far fa-play-circle fa-2x play-button-list"})):r.a.createElement("div",{className:"middle-view",key:t},r.a.createElement("div",{className:"number"},t),r.a.createElement("div",{className:"title",onClick:function(){a(n,t,f,p)}},o),r.a.createElement("div",{className:"author"},m),r.a.createElement("div",{className:"time"},f),u.includes(o)?r.a.createElement("i",{className:"fas fa-ban fa-lg  heart",onClick:function(){E(o)}}):r.a.createElement("i",{className:"far fa-heart fa-lg heart",onClick:function(){g(n,o,m)}}),i===d.server+"music/"+n&&c.playing?r.a.createElement("i",{onClick:function(){s()},className:"far fa-pause-circle fa-2x play-button-list"}):r.a.createElement("i",{onClick:function(){l(n,t,f,p)},className:"far fa-play-circle fa-2x play-button-list"}))})))},S=function(){var e=Object(n.useState)({music:[]}),t=Object(o.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),m=i[0],f=i[1],p=Object(n.useState)({playing:!1}),v=Object(o.a)(p,2),g=v[0],E=v[1],h=Object(n.useState)({duration:"",rawDuration:""}),N=Object(o.a)(h,2),y=N[0],w=N[1],O=Object(n.useState)(),S=Object(o.a)(O,2),P=S[0],M=S[1],I=Object(n.useState)(),D=Object(o.a)(I,2),L=D[0],T=D[1],U=Object(n.useState)([]),A=Object(o.a)(U,2),q=A[0],R=A[1],V=Object(n.useState)([]),Y=Object(o.a)(V,2),B=Y[0],F=Y[1],J=Object(n.useState)(!1),W=Object(o.a)(J,2),H=W[0],X=W[1],$=Object(n.useState)(!1),_=Object(o.a)($,2),z=_[0],G=_[1],K=Object(n.useState)(!1),Q=Object(o.a)(K,2),Z=Q[0],ee=Q[1],te=Object(n.useState)(),ae=Object(o.a)(te,2),ne=ae[0],re=ae[1],le=Object(n.useState)(),se=Object(o.a)(le,2),ce=se[0],ie=se[1],oe=Object(n.useContext)(u).authUser,ue=Object(n.useRef)(null);Object(n.useEffect)((function(){b.a.get(d.server+"music/getlist").then((function(e){l({music:e.data})})).catch((function(e){return console.log(e)})),b.a.post(d.server+"music/favorite",oe).then((function(e){var t=[];e.data.map((function(e){var a=e.title;t=[].concat(Object(j.a)(t),[a]),F(t)}))})).catch((function(e){return console.log(e)}))}),[]),Object(n.useEffect)((function(){""!==m&&(ue.current.load(),ue.current.play())}),[m]);var me=function(e,t,a,n){""===m&&void 0===e||(m===d.server+"music/"+e||void 0===e?(E({playing:!0}),ue.current.play()):(f(d.server+"music/"+e),E({playing:!0}),T(t),w({duration:a,rawDuration:n}),ie(ne)))},de=function(){E({playing:!1}),ue.current.pause()};return null!==oe.username?r.a.createElement("div",{className:"box"},r.a.createElement(x,{musicList:a,handleNewArtist:function(e){var t=a.music.filter((function(t){return t.artist===e}));R(t),X(!1),re(e)},myMusic:H,setMyMusic:X,setCurrentArtistPlaylist:re,currentArtistPlaylist:ne}),r.a.createElement(C,{musicList:a,handleTitleClick:function(e,t,a,n){f(d.server+"music/"+e),E({playing:!0}),T(t),w({duration:a,rawDuration:n}),ie(ne)},handlePlay:me,handlePause:de,isPlaying:g,src:m,authUser:oe,favoriteMusic:B,setFavoriteMusic:F,currentPlaylist:q,myMusic:H,setCurrentPlaylist:R}),r.a.createElement(k,{isPlaying:g,handlePlay:function(){me()},handlePause:function(){de()},player:ue,src:m,setSrc:f,duration:y,currentTime:P,musicList:q,currentId:L,setCurrentId:T,setDuration:w,setIsPlaying:E,myMusic:H,repeat:z,setRepeat:G,random:Z,setRandom:ee,currentArtistPlaylist:ne,currentArtist:ce}),r.a.createElement("audio",{ref:ue,onTimeUpdate:function(){M(ue.current.currentTime)},onEnded:function(){!function(e){var t=L;if(q.length<2&&!Z&&!z)M(0),f(""),T(null),w({duration:"",rawDuration:0}),E({playing:!1}),ue.current.load(),ue.current.play();else if(Z)if(q.length<2)M(0),ue.current.load(),ue.current.play();else{for(;t===L;)t=Math.floor(Math.random()*q.length);(ce===ne||H&&ce===ne)&&(f(d.server+"music/"+q[t].file),T(t),w({duration:q[t].duration,rawDuration:q[t].rawDuration}),E({playing:!0}))}else z?(M(0),ue.current.load(),ue.current.play()):(t<q.length-1&&ce===ne||t<q.length-1&&H&&ce===ne)&&(f(d.server+"music/"+q[t+1].file),T(t+1),w({duration:q[t+1].duration,rawDuration:q[t+1].rawDuration}),E({playing:!0}))}()}},r.a.createElement("source",{src:m}))):r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"You are not logged in!"),r.a.createElement("p",{className:"card-text"},"In order to browse and listen to music you need to either login to your account or create a new one."),r.a.createElement(c.b,{to:"/login",className:"btn btn-primary mr-3 "},"Login"),r.a.createElement(c.b,{to:"/register",className:"btn btn-primary "},"Register"))},P=function(){return r.a.createElement(c.a,null,r.a.createElement(f,null),r.a.createElement(i.a,{path:"/",exact:!0,component:N}),r.a.createElement(i.a,{path:"/michal-mikulski",component:N}),r.a.createElement(i.a,{path:"/register",component:v}),r.a.createElement(i.a,{path:"/login",component:y}),r.a.createElement(i.a,{path:"/listofusers",component:w}),r.a.createElement(i.a,{path:"/music",component:S}))};var M=function(){return r.a.createElement(m,null,r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(80),a(41),a(83);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.aedafdf9.chunk.js.map