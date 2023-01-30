"use strict";(self.webpackChunksiannas_blog=self.webpackChunksiannas_blog||[]).push([[5025],{2825:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var n=a(7294),r=a(5444),i=a(4122),l=a(3751),o={width:"100vw",height:"100vh",marginLeft:"calc(min(var(--maxWidth-wrapper), 100vw)/2 - 50vw - 1.25rem)",overflow:"hidden",position:"relative"},s=function(e){var t=e.data,a=n.useState(0),r=a[0],i=a[1],l=n.useState(!1),s=l[0],c=l[1];n.useEffect((function(){return window.addEventListener("scroll",m),function(){window.removeEventListener("scroll",m)}}));var m=function(e){var a=document.getElementById("portfolio"),n=a.lastChild,i=window.scrollY;window.PrevScrollPos=window.PrevScrollPos?window.PrevScrollPos:0;var l=i-window.PrevScrollPos>0;if(window.PrevScrollPos=i,!(i<a.offsetTop+200||i>n.offsetTop)){if(s){var o=a.offsetTop+a.offsetHeight/3;return window.scrollTo(0,o),void(window.PrevScrollPos=o)}l&&r<t.length-1?p(r+1):!l&&r>0&&p(r-1)}},p=function(e,t){s||(c(!0),i(e),setTimeout((function(){c(!1)}),500))};return n.createElement("section",{style:{height:"175vh",position:"relative"},id:"portfolio"},n.createElement("div",{className:"portfolio-section sticky",style:o},n.createElement("div",{className:"portfolio-text"},n.createElement("h3",null,t[r].title),n.createElement("p",null,t[r].description)),n.createElement("div",{className:"portfolio-ambient-overlay"}),n.createElement("div",{className:"portfolio-images"},t.map((function(e,t){return n.createElement("img",{key:t,src:e.image,alt:"",className:r==t?"active":""})}))),n.createElement("ul",{className:"portfolio-indicator",style:{transform:"translateY(calc(45% - "+2*r+"rem))"}},t.map((function(e,t){return n.createElement("li",{key:t,onClick:p.bind(undefined,t),className:r==t?"active":""})})))),n.createElement("div",{id:"portfolio-bottom"}))},c=a.p+"static/work_hl2clone-e941042285e65953fd0c2c56ae7bcbcd.gif",m=a.p+"static/work_IsolatedForest-ca6f7528f3b6179c9c9a093692f5a081.gif",p=a.p+"static/work_Heisters-f3717e3e058753c6b6bbb921bfdd88ca.gif",u=a.p+"static/work_SleepGravity-fed2d42516686de6ba00cd7964e6f248.gif",d=a.p+"static/agrima-360e6ef2e5468e3a4ce07e889f0808e3.png",g=a.p+"static/unixcorp-859b543c530a470db76c4e36915dbefc.png",f=a.p+"static/koperasi-32a45dfb05744b6bd549856044d3c96e.png",h=a.p+"static/screening-kesehatan-8ff0fc23263d399b2baab74c6a876dca.png",b=a.p+"static/stepdal-184463669721e444e9a952ed8b9737d6.png",v=a.p+"static/ta-5ff9caae73bf95e1ba6b322dbd9623cf.png",E=[{image:c,title:"1. Half Life 2 Gravity Gun (Self Learn)",description:n.createElement(n.Fragment,null,"A simple game intended for me to learn Unreal Engine. This simple game was primarily written on C++ code and took me a week to learn from scratch.  Here is the ",n.createElement(r.Link,{to:"https://www.youtube.com/watch?v=zYnvObXkc48",itemProp:"url",target:"_blank"},"[Result]"))},{image:m,title:"2. Isolated Forest",description:n.createElement(n.Fragment,null,"A survival game on a deserted island inspired by Don't Starve and fighting demons in the night. I was responsible to organize the world-generation system and finite state machine for living creatures.  ",n.createElement(r.Link,{to:"https://unixcorpgamedev.id/games/isolated-forest",itemProp:"url",target:"_blank"},"[Link]"))},{image:u,title:"3. Sleep Gravity",description:n.createElement(n.Fragment,null,"A game for game jam event, where players use cards to help sleeping characters get to the finish point. I was in charge of implementing the multiplayer mode using the free version of Photon Engine.  ",n.createElement(r.Link,{to:"https://unixcorp.itch.io/sleep-gravity",itemProp:"url",target:"_blank"},"[Link]"))},{image:p,title:"4. Heisters: heisters vs heisters",description:n.createElement(n.Fragment,null,"A game where players play as a thief to steal other thieves' treasures. I was in charge to direct the AI logic using a Hierarchical Finite State Machine and here was the first time I learned the Unity Job System. In this project, I had the task of doing concept-and-art-validation using Google forms and Facebook ads.  ",n.createElement(r.Link,{to:"https://play.google.com/store/apps/details?id=com.uniXcorp.Heisters",itemProp:"url",target:"_blank"},"[Link]"))}],w=[{image:d,title:"1. Agrima.co.id Project",description:n.createElement(n.Fragment,null,n.createElement("i",null,"Using: React Js & Redux"),n.createElement("br",null)," Portal informasi dan konsultasi pemasaran agrikultur untuk mendukung laman web manajemen supply chain logis.co.id. Peran sebagai full-stack engineer.")},{image:b,title:"2. Stepdal",description:n.createElement(n.Fragment,null,n.createElement("i",null,"Using: React Js, Redux, & Material UI"),n.createElement("br",null)," Peran sebagai frontend-programmer paruh waktu.")},{image:g,title:"3. UniXcorp Company Portal",description:n.createElement(n.Fragment,null,n.createElement("i",null,"Using: Lumen"),n.createElement("br",null)," Portal profil portfolio start-up gaming UniXcorp. Peran sebagai full-stack engineer.")},{image:f,title:"4. App Pembukuan Koperasi Daerah ",description:n.createElement(n.Fragment,null,n.createElement("i",null,"Using: Laravel"),n.createElement("br",null)," Dasbor Admin untuk pengelolaan pembukuan Koperasi Daerah. Peran sebagai full-stack engineer.")},{image:h,title:"5. App Student Health Screening",description:n.createElement(n.Fragment,null,n.createElement("i",null,"Using: Laravel"),n.createElement("br",null)," Portal assessment kesehatan siswa sekolah. Peran sebagai frontend-programmer.")},{image:v,title:"6. College Final Project",description:n.createElement(n.Fragment,null,n.createElement("i",null,"Using: Flask & Bootstrap"),n.createElement("br",null)," Dasbor Admin untuk melihat prediksi ",n.createElement("i",null,"fraud"),".")}],k=function(e){var t=e.Topic,a=function(e){e!=t&&("games"==e?(0,r.navigate)("?topic=games"):(0,r.navigate)("?topic=web"))};return n.createElement("div",{className:"toggle-portfolio"},n.createElement("input",{type:"button",value:"Web",onClick:function(){return a("web")}}),n.createElement("input",{type:"button",value:"Games",onClick:function(){return a("games")}}))},P=function(e){var t=e.location,a=new URLSearchParams(t.search).get("topic");return console.log("para"),n.createElement(i.Z,{location:t,title:"Portfolio"},n.createElement(k,{Topic:a}),n.createElement(l.Z,{title:"Portfolio"}),n.createElement("h2",null,"Portfolio"),n.createElement("p",null,"These are some of the projects I was involved in."),null==a||"games"==a?n.createElement(n.Fragment,null,n.createElement(s,{data:E}),n.createElement("p",null," "),n.createElement("p",null,"Apparently, that was some projects I did. I need to learn more by doing several game projects with great game studios out there."),n.createElement("p",null," ")):n.createElement(n.Fragment,null,n.createElement(s,{data:w})))}}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-b08cb25f55b98f5b8584.js.map