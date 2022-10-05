"use strict";(self.webpackChunkbobrosoft_com=self.webpackChunkbobrosoft_com||[]).push([[96],{96:function(e,n,t){t.r(n),t.d(n,{default:function(){return oe}});for(var i,o,r=t(313),a=t(372),s=t(35),l=t(417),c=function(e){return(0,l.jsx)("div",{className:"text-center",children:(0,l.jsx)(a.pT,{bottom:!0,when:e.shouldReveal,delay:e.noDelay?0:1600,children:(0,l.jsx)("a",{href:s.x.cv(),target:"_blank",rel:"noreferrer",children:"Up-to-date CV"})})})},d=t(766),h=t(244),u=t(893),p={Wrapper:h.ZP.div(i||(i=(0,d.Z)(["\n  @media (min-width: ",") {\n    ul {\n      display: flex;\n      flex-wrap: wrap;\n    }\n\n    li {\n      margin: 20px 0 !important;\n      width: 50%;\n    }\n  }\n\n  li {\n    margin: 30px 0;\n    list-style: none;\n    font-size: 1.2em;\n    font-weight: 600;\n    text-align: center;\n\n    b {\n      font-size: 1.5em;\n      color: gold;\n      text-shadow: 0 0 10px gold;\n    }\n  }\n"])),u.A.sm)},m=function(e){var n=(new Date).getFullYear();return(0,l.jsx)(p.Wrapper,{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)(a.pT,{right:!0,when:e.shouldReveal,children:(0,l.jsxs)("li",{children:[(0,l.jsxs)("b",{children:[n-2007," Years"]}),(0,l.jsx)("br",{}),"of Dev Experience"]})}),(0,l.jsx)(a.pT,{right:!0,when:e.shouldReveal,delay:300,children:(0,l.jsxs)("li",{children:["Primary Coding Language",(0,l.jsx)("br",{}),(0,l.jsx)("b",{children:"JavaScript/TypeScript"})]})}),(0,l.jsx)(a.pT,{right:!0,when:e.shouldReveal,delay:600,children:(0,l.jsxs)("li",{children:[(0,l.jsxs)("b",{children:[n-2012," Years"]}),(0,l.jsx)("br",{}),"of Remote Work Exp"]})}),(0,l.jsx)(a.pT,{right:!0,when:e.shouldReveal,delay:900,children:(0,l.jsxs)("li",{children:["Fluent",(0,l.jsx)("br",{}),(0,l.jsx)("b",{children:"English"})]})})]})})},f=t(38),x={Container:h.ZP.div(o||(o=(0,d.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.9em;\n\n  @media (max-width: ",") {\n    flex-direction: column;\n    text-align: center;\n  }\n\n  .author {\n    font-size: 1.4em;\n  }\n"])),u.A.sm)},g=function(e){return(0,l.jsx)(a.pT,{when:e.shouldReveal,children:(0,l.jsxs)(x.Container,{children:[(0,l.jsx)("div",{children:(0,l.jsxs)("p",{children:["Design and Development",(0,l.jsx)("br",{}),(0,l.jsx)("a",{href:"https://bobrosoft.com",className:"author",children:"Vladimir Tolstikov"})]})}),(0,l.jsx)("div",{className:"p",children:(0,l.jsx)(f.n,{fontSize:20})}),(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:"\xa9 2022 bobrosoft.com"})})]})})},v=t(683),b=t(982),w=t(885),y=t(128),j=JSON.parse('{"K":172,"y":[2,7,11,18,24,30,33,35,36,37,39,53,57,63,83,103,116,133,136,137,140,148,149,152,153,161]}'),k=[],P=1;P<j.K;P++)k.push({thumbUrl:"images/gallery/".concat(P,"_thumb.jpg"),url:"images/gallery/".concat(P,".jpg"),orientation:j.y.includes(P)?"portrait":"landscape"});var S=y.c.shuffleArray(k);var Z=function(e,n){var t=n.threshold,i=void 0===t?0:t,o=n.root,a=void 0===o?null:o,s=n.rootMargin,l=void 0===s?"0%":s,c=n.freezeOnceVisible,d=void 0!==c&&c,h=(0,r.useState)(),u=(0,w.Z)(h,2),p=u[0],m=u[1],f=(null===p||void 0===p?void 0:p.isIntersecting)&&d,x=function(e){var n=(0,w.Z)(e,1)[0];m(n)};return(0,r.useEffect)((function(){var n=null===e||void 0===e?void 0:e.current;if(!!window.IntersectionObserver&&!f&&n){var t=new IntersectionObserver(x,{threshold:i,root:a,rootMargin:l});return t.observe(n),function(){return t.disconnect()}}}),[e,JSON.stringify(i),a,l,f]),p};var A,C,E,I,N,R,T,D,L,U=function(e,n){var t=(0,r.useRef)(e);(0,r.useEffect)((function(){t.current=e}),[e]),(0,r.useEffect)((function(){if(n||0===n){var e=setInterval((function(){return t.current()}),n);return function(){return clearInterval(e)}}}),[n])},W={Wrapper:h.ZP.div(A||(A=(0,d.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n  z-index: 1;\n  perspective: 600px;\n\n  &.shown {\n    pointer-events: initial;\n  }\n"]))),Backdrop:h.ZP.div(C||(C=(0,d.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: black;\n  opacity: 0;\n  transition: opacity 0.6s;\n  transition-delay: 0s;\n  z-index: -10;\n\n  &.shown {\n    transition-delay: 0.8s;\n    opacity: 0.6;\n  }\n"]))),Image:h.ZP.img(E||(E=(0,d.Z)(["\n  box-sizing: initial;\n  border: min(50px, 5vw) solid #fff;\n  background-color: #aaaaaa;\n  box-shadow: 0 0 20px black;\n\n  @media (orientation: landscape) {\n    height: 100%;\n  }\n  @media (orientation: portrait) {\n    width: 100%;\n  }\n\n  max-width: 80vw;\n  max-height: 80vh;\n  z-index: 10;\n  transform-style: preserve-3d;\n  animation: PhotoPreview-Image-appear 800ms forwards;\n\n  @keyframes PhotoPreview-Image-appear {\n    0% {\n      transform: translate3d(var(--tx), var(--ty), 0px) rotateY(16deg) rotateZ(3deg) scale(0.2);\n    }\n  }\n"])))},F=function(e){var n=e.photo,t=(0,r.useState)(0),i=(0,w.Z)(t,2),o=i[0],a=i[1],s=(0,r.useState)(!1),c=(0,w.Z)(s,2),d=c[0],h=c[1],u=(0,r.useState)(!1),p=(0,w.Z)(u,2),m=p[0],f=p[1],x=(0,r.useState)(0),g=(0,w.Z)(x,2),v=g[0],b=g[1],j={"--tx":o+"px","--ty":v+"px"};function k(e){a(e.clientX-document.documentElement.clientWidth/2),b(e.clientY-document.documentElement.clientHeight/2)}return(0,r.useEffect)((function(){return document.documentElement.addEventListener("click",k),function(){document.documentElement.removeEventListener("click",k)}}),[]),(0,r.useEffect)((function(){if(n){var e=[];return f(!1),y.c.isChromium()?h(!0):(h(!1),e.push(window.setTimeout((function(){h(!0)}),50))),y.c.preloadImage(n.url).then((function(){y.c.isChromium()?f(!0):e.push(window.setTimeout((function(){f(!0)}),100))})),function(){e.forEach((function(e){return clearTimeout(e)}))}}}),[n]),(0,l.jsxs)(W.Wrapper,{className:n&&"shown",style:j,children:[(0,l.jsx)(W.Backdrop,{className:n&&"shown",onClick:null===e||void 0===e?void 0:e.onExit}),n&&d&&(0,l.jsx)(W.Image,{src:m?null===n||void 0===n?void 0:n.url:null===n||void 0===n?void 0:n.thumbUrl})]})},M=t(671),H=t(144),B=function(){function e(n){if((0,M.Z)(this,e),this.options=void 0,this.wallHeight=void 0,this.wall=void 0,this.largestUsedX=0,this.options=(0,v.Z)({wallHeightInPhotos:5,photoWidthInPx:100,photoGapInPx:10,useSmoothStart:!1},n),this.wallHeight=2*this.options.wallHeightInPhotos,this.wall=new Array(this.wallHeight).fill(0).map((function(){return[]})),this.options.useSmoothStart)for(var t=Math.floor(this.wallHeight/2),i=0;i<this.wallHeight;i++)for(var o=Math.floor(1.3*Math.abs(i-t)),r=0;r<o;r++)this.getCell(r,i).isOccupied=!0,this.markAsNoSpace(r,i)}return(0,H.Z)(e,[{key:"cellWidthInPx",get:function(){return this.options.photoWidthInPx/3}},{key:"photoGapHalfInPx",get:function(){return this.options.photoGapInPx/2}},{key:"addPhotoToWall",value:function(e){var n,t=Math.max(0,this.largestUsedX-this.wallHeight);do{for(var i=Math.floor(this.wallHeight/2),o=Math.random()>.5?1:-1;i>=0&&i<this.wallHeight&&!n&&!(n=this.tryToPutPhoto(e,t,i));)i+=o;if(n)break;t++}while(t<this.largestUsedX+100);if(!n)throw new Error("GalleryBuilder.CANT_ADD_PHOTO_TO_WALL");return n}},{key:"tryToPutPhoto",value:function(e,n,t){var i=this;if(0===t&&this.markAsNoSpace(n,t),"portrait"===e.orientation&&t===this.wallHeight-1&&this.markAsNoSpace(n,t,e.orientation),("landscape"!==e.orientation||!this.getCell(n,t).noLSpace)&&("portrait"!==e.orientation||!this.getCell(n,t).noPSpace)){var o;if(!(o="landscape"===e.orientation?[{x:n,y:t-1},{x:n+1,y:t-1},{x:n+2,y:t-1},{x:n,y:t},{x:n+1,y:t},{x:n+2,y:t}]:[{x:n,y:t-1},{x:n,y:t},{x:n,y:t+1},{x:n+1,y:t-1},{x:n+1,y:t},{x:n+1,y:t+1}]).find((function(e){return i.getCell(e.x,e.y).isOccupied})))return o.forEach((function(e){i.markAsNoSpace(e.x,e.y),i.getCell(e.x,e.y).isOccupied=!0})),this.largestUsedX=Math.max(o[0].x,this.largestUsedX),this.convertToPhotoOnWall(e,o[0]);this.markAsNoSpace(n,t,e.orientation)}}},{key:"markAsNoSpace",value:function(e,n,t){"landscape"!==t&&(this.getCell(e,n).noPSpace=!0),"portrait"!==t&&(this.getCell(e,n).noLSpace=!0)}},{key:"getCell",value:function(e,n){return this.wall[n][e]||(this.wall[n][e]={noLSpace:!1,noPSpace:!1,isOccupied:!1}),this.wall[n][e]}},{key:"convertToPhotoOnWall",value:function(e,n){return(0,v.Z)((0,v.Z)({},e),{},{x:Math.floor(n.x*this.cellWidthInPx+this.photoGapHalfInPx),y:Math.floor(n.y*this.cellWidthInPx+this.photoGapHalfInPx),width:Math.floor(("landscape"===e.orientation?3:2)*this.cellWidthInPx-2*this.photoGapHalfInPx),height:Math.floor(("landscape"===e.orientation?2:3)*this.cellWidthInPx-2*this.photoGapHalfInPx),random:Math.random()})}}]),e}(),O=h.ZP.img(I||(I=(0,d.Z)(["\n  box-sizing: initial;\n  position: absolute;\n  border: 8px solid #fff;\n  background-color: white;\n  box-shadow: 0 0 10px black;\n  cursor: pointer;\n  object-fit: cover;\n  opacity: 0;\n  animation: Photo-Image-appear 600ms forwards;\n\n  @keyframes Photo-Image-appear {\n    100% {\n      opacity: 1;\n    }\n  }\n"]))),z=function(e){var n=document.documentElement.clientWidth>document.documentElement.clientHeight,t=e.photo;return(0,l.jsx)(O,(0,v.Z)((0,v.Z)({},e),{},{style:{top:t.y,left:t.x,width:t.width,height:t.height,transform:"translateZ(".concat((t.random-.6)*(n?300:500),"px)")},src:t.thumbUrl}))},Y={Wrapper:h.ZP.div(N||(N=(0,d.Z)(["\n  height: ",";\n  perspective: 600px;\n"])),(function(e){return e.height+"px"})),AnimatedContainer:h.ZP.div(R||(R=(0,d.Z)(["\n  position: relative;\n  height: 100%;\n  transform-style: preserve-3d;\n  touch-action: none;\n  left: 40vw;\n\n  &.animate {\n    animation: AnimatedContainer-scroll-sm 300s linear infinite;\n\n    @media (min-width: ",") {\n      animation: AnimatedContainer-scroll 300s linear infinite;\n    }\n\n    @media (min-width: 1600px) {\n      animation: AnimatedContainer-scroll-lg 300s linear infinite;\n    }\n\n    @media (min-width: 1900px) {\n      animation: AnimatedContainer-scroll-xlg 300s linear infinite;\n    }\n  }\n\n  @keyframes AnimatedContainer-scroll {\n    0% {\n      transform: rotateY(16deg) rotateZ(3deg) translateX(0);\n    }\n\n    100% {\n      transform: rotateY(16deg) rotateZ(3deg) translateX(-10000px);\n    }\n  }\n\n  // mobile version\n  @keyframes AnimatedContainer-scroll-sm {\n    0% {\n      transform: rotateY(16deg) rotateZ(5deg) translateX(0);\n    }\n\n    100% {\n      transform: rotateY(16deg) rotateZ(5deg) translateX(-10000px);\n    }\n  }\n\n  @keyframes AnimatedContainer-scroll-lg {\n    0% {\n      transform: rotateY(13deg) rotateZ(3deg) translateX(0);\n    }\n\n    100% {\n      transform: rotateY(13deg) rotateZ(3deg) translateX(-10000px);\n    }\n  }\n\n  @keyframes AnimatedContainer-scroll-xlg {\n    0% {\n      transform: rotateY(10deg) rotateZ(3deg) translateX(0);\n    }\n\n    100% {\n      transform: rotateY(10deg) rotateZ(3deg) translateX(-10000px);\n    }\n  }\n"])),u.A.sm)},X=function(e){var n=(0,r.useRef)(null),t=Z(n,{threshold:.3}),i=(0,r.useState)(!1),o=(0,w.Z)(i,2),s=o[0],c=o[1],d=(0,r.useState)(),h=(0,w.Z)(d,2),u=h[0],p=h[1],m=(0,r.useState)(-1),f=(0,w.Z)(m,2),x=f[0],g=f[1],y=(0,r.useState)([]),j=(0,w.Z)(y,2),k=j[0],P=j[1],A=(0,r.useState)(),C=(0,w.Z)(A,2),E=C[0],I=C[1];return(0,r.useEffect)((function(){var e=new B({photoGapInPx:26,photoWidthInPx:150,useSmoothStart:!0});p(e),P([]),g(-1)}),[]),(0,r.useEffect)((function(){!s&&e.shouldReveal&&null!==t&&void 0!==t&&t.isIntersecting&&c(!0)}),[e.shouldReveal,null===t||void 0===t?void 0:t.isIntersecting]),U((function(){!function(){var e=x+1,n=S[e];n||(e=0,n=S[0]);g(e),P([].concat((0,b.Z)(k),[u.addPhotoToWall(n)]))}()}),s?k.length<30?400:1e3:null),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(Y.Wrapper,(0,v.Z)((0,v.Z)({height:500},e),{},{children:[(0,l.jsx)("div",{ref:n}),(0,l.jsx)(a.pT,{when:e.shouldReveal,children:(0,l.jsx)("h2",{className:"text-center",children:"Also I Like To Take Photos\xa0\xa0\ud83d\udcf8"})}),(0,l.jsx)(Y.AnimatedContainer,{className:s?"animate":"",children:k.map((function(e,n){return e===E?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)(z,{photo:e,onClick:function(){return function(e){I(e)}(e)}},n)}))})]})),(0,l.jsx)(F,{photo:E,onExit:function(){I(void 0)}})]})},G=t(462),_=t(155),J=h.ZP.div(T||(T=(0,d.Z)(["\n  display: grid;\n  grid-template: auto / 33% 33% 33%;\n  gap: 20px;\n\n  @media (max-width: 900px) {\n    grid-template: auto / 50% 50%;\n  }\n\n  @media (max-width: 500px) {\n    grid-template: auto / auto;\n  }\n"]))),$=[{title:"CleverCards",description:"Global Payments Platform which makes it possible for anyone, anywhere, anytime, to be paid instantly.\n  Solution in fintech industry around virtual wireless credit cards. I'm responsible for the whole Frontend\n(Angular + React) and Mobile Apps (Ionic/Angular)",websiteUrl:"https://clevercards.com/"},{title:"Bitcoin-message.com",description:'My recent open source pet project, utilizing blockchain technology in a fun way :) Uses React+MobX on\nfrontend and Firebase(Node.js) + Bitcoin-blockchain on backend. "Save your message in Bitcoin blockchain.\nForever!". Try it ;)',websiteUrl:"https://bitcoin-message.com/",githubUrl:"https://github.com/bobrosoft/bitcoin-message.com"},{title:"CleverCards iOS App",description:'"Your very own personalised greeting card store". My main\nresponsibility in Cleverbug startup before recent pivot (from B2C to B2B). Raised $10M from investors. My\nMobile App work (native+web-hybrid) used in main pitch.'},{title:"School Catering System",description:"Huge proprietary SaaS project in catering industry developed from zero. RFID/NFC cards for users, front\n  office part, back office part, public terminals with touch interfaces, security turnstiles, own billing,\n  payment systems, all that kind of stuff in there.",websiteUrl:"http://newit-soft.ru/page/products/noncash-payments-school/"},{title:"Gamebomb.ru",description:"One of the biggest social websites about gaming in Russia with 100k visitors daily. All ground-up\narchitected and developed by one developer. Has bunch of social features, all games library, reviews, news,\n  videos, blogs, streaming and online-chat functionality, social achievements and even home-brew\nDDOS-protection.",websiteUrl:"https://gamebomb.ru/"},{title:"Literator.io",description:'"Let\'s remember best poems together!". One of my open source pet projects. Started with Russian poems,\n  English poems are coming soon. Based on (now old) AngularJS (Angular 1) with all best practices on that\nmoment, fully covered with Unit and E2E tests. If you have Russian or Ukrainian devs in your team, they will be\ninterested to try :)',websiteUrl:"https://bobrosoft.github.io/literator.io",githubUrl:"https://github.com/bobrosoft/literator.io"},{title:"Photo505.com",description:"Automatic photoshop-like photo effects, just upload the photo and see the magic. \n    I also have face detection there, so your photo will be perfectly positioned for the best result in some effects.",websiteUrl:"https://photo505.com/"}],K={Project:h.ZP.div(D||(D=(0,d.Z)(["\n  position: relative;\n  padding: 14px 16px;\n  height: 100%;\n  //background-color: rgba(255, 255, 255, 0.03);\n  background-color: #1a2b54;\n  border-radius: 10px;\n  overflow: hidden;\n\n  .header {\n    margin: 0;\n    display: flex;\n    align-items: center;\n\n    .title {\n      flex: 1;\n      text-decoration: none;\n    }\n\n    .icons {\n      & > * {\n        margin-left: 10px;\n        vertical-align: middle;\n      }\n    }\n  }\n\n  .description {\n    margin-bottom: 5px;\n    font-size: 0.9em;\n  }\n\n  ::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 4px;\n    border-radius: 50%;\n    box-shadow: 0 0px 20px rgba(255, 255, 255, 1);\n    transition: transform 300ms;\n    transform: scale(0, 1) translateY(-20px);\n    will-change: transform;\n  }\n\n  &:hover {\n    ::before {\n      transform: scale(1, 1) translateY(-3.8px);\n    }\n  }\n"])))},Q=function(e){var n=e.shouldReveal,t=e.project,i=e.index;return(0,l.jsx)(a.pT,{bottom:!0,when:n,force:!0,delay:200*i,children:(0,l.jsxs)(K.Project,{children:[(0,l.jsxs)("h3",{className:"header",children:[(0,l.jsx)("a",{className:"title",href:t.websiteUrl||"",target:"_blank",rel:"noreferrer",onClick:function(e){t.websiteUrl||e.preventDefault()},children:t.title}),(0,l.jsxs)("span",{className:"icons",children:[t.githubUrl&&(0,l.jsx)("a",{href:t.githubUrl,target:"_blank",rel:"noreferrer",children:(0,l.jsx)(G.Z,{size:16})}),t.websiteUrl&&(0,l.jsx)("a",{href:t.websiteUrl,target:"_blank",rel:"noreferrer",children:(0,l.jsx)(_.Z,{size:16})})]})]}),(0,l.jsx)("p",{className:"description",children:t.description})]})})},V=function(e){var n=(0,r.useState)(!1),t=(0,w.Z)(n,2),i=t[0],o=t[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.pT,{bottom:!0,when:e.shouldReveal,onReveal:function(){o(!0)},children:(0,l.jsx)("h2",{className:"text-center",children:"Noteworthy Projects"})}),(0,l.jsx)(J,{children:$.map((function(e,n){return(0,l.jsx)(Q,{shouldReveal:i,project:e,index:n},e.title)}))})]})},q=t(229),ee=[{title:"Programming Languages",items:[{title:"JavaScript/TypeScript",expYears:(new Date).getFullYear()-2007,widthPercents:100,color:"#4271BA"},{title:"PHP",expYears:9,widthPercents:60,color:"#4E588B"},{title:"Java",widthPercents:30,color:"#D23830"},{title:"Swift",color:"#DE5C41",widthPercents:25}],asList:!0},{title:"Frameworks",items:[{title:"Angular 2/4",color:"#d23c36"},{title:"React",color:"#7ECFEF"},{title:"Next.js",color:"#324048"},{title:"Ionic 4",color:"#497AEF"},{title:"Node.js",color:"#96BE52"},{title:"Titanium SDK",color:"#7D90A7"},{title:"Firebase",color:"#E9A63E"},{title:"Zend Framework",color:"#77AD34"},{title:"MZZ Framework (PHP)",color:"#ce6023"}],asList:!1},{title:"Tools & Libs",items:[{title:"Git",color:"#324048"},{title:"Webpack",color:"#3872B4"},{title:"NPM",color:"#B52619"},{title:"node",color:"#96BE52"},{title:"AWS",color:"#E08D36"},{title:"AWS CLI",color:"#324048"},{title:"Gulp",color:"#B94D4A"},{title:"GraphQL",color:"#CC44A2"},{title:"Jest/Jasmine",color:"#B14425"},{title:"Karma"},{title:"Protractor"},{title:"nginx",color:"#d23c36"},{title:"memcached"},{title:"Docker",color:"#4990DF"},{title:"SASS/SCSS",color:"#BA6993"}],asList:!1},{title:"Databases",items:[{title:"MySQL",color:"#5B7D99"},{title:"SQLite",color:"#E9A43F"},{title:"Firebase (NoSQL)",color:"#E9A63E"}],asList:!1},{title:"Other",items:[{title:"HTML5",color:"#CB5434"},{title:"CSS3",color:"#346DAF"},{title:"OOP/OOAD"},{title:"CI/CD"},{title:"Agile"},{title:"JIRA",color:"#417EEF"},{title:"XP"},{title:"Unix",color:"#324048"},{title:"Bash",color:"#2A2E35"},{title:"TDD/BDD"},{title:"Unit/E2E testing"},{title:"Facebook API",color:"#3771E3"}],asList:!1}],ne={SkillSet:h.ZP.div(L||(L=(0,d.Z)(["\n  position: relative;\n  padding: 14px 16px;\n  height: 100%;\n  //background-color: rgba(255, 255, 255, 0.03);\n  background-color: #1f315d;\n  border-radius: 10px;\n  //overflow: hidden;\n\n  .header {\n    margin: 0;\n    text-align: center;\n    font-weight: 500;\n  }\n\n  .content {\n    margin-top: 0.8em;\n  }\n\n  .list {\n    margin-top: 1.2em;\n    font-size: 0.9em;\n\n    .item {\n      margin: 0.6em 0;\n      max-width: 100%;\n      display: flex;\n      list-style: none;\n      border-radius: 20px;\n      overflow: hidden;\n    }\n\n    .badge {\n      display: inline-block;\n      flex: 1;\n      padding: 0.2em 0.7em;\n      background: #7b7cbc;\n    }\n\n    .exp {\n      padding: 0.2em 0.7em;\n      color: gold;\n      background-color: #3f3f6c;\n    }\n  }\n\n  .badges {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    font-size: 0.85em;\n\n    .badge {\n      margin: 0.3em 0.2em;\n      padding: 0.2em 0.6em;\n      border-radius: 20px;\n      background-color: #6a6a6a;\n    }\n  }\n\n  .zoom-on-hover {\n    transition: transform 0.3s, box-shadow 0.3s;\n    //will-change: transform;\n\n    &:hover {\n      transform: scale(1.2);\n      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);\n      z-index: 1;\n    }\n  }\n\n  .contrast {\n    color: #333;\n  }\n"])))},te=function(e){var n=e.shouldReveal,t=e.skillSet,i=e.index;return(0,l.jsx)(a.pT,{bottom:!0,when:n,force:!0,delay:200*i,children:(0,l.jsxs)(ne.SkillSet,{children:[(0,l.jsx)("h3",{className:"header",children:t.title}),(0,l.jsx)("div",{className:"content",children:t.asList?(0,l.jsx)("ul",{className:"list",children:t.items.map((function(e){return(0,l.jsxs)("li",{className:"item zoom-on-hover",style:{width:e.widthPercents?e.widthPercents+"%":"unset"},children:[(0,l.jsx)("span",{className:["badge",e.color&&y.c.isLightColor(e.color)?"contrast":""].join(" "),style:{backgroundColor:e.color||""},children:e.title}),e.expYears?(0,l.jsxs)("span",{className:"exp",children:[e.expYears," Years"]}):(0,l.jsx)(l.Fragment,{})]},e.title)}))}):(0,l.jsx)("div",{className:["badges",t.asList?"list":""].join(" "),children:t.items.map((function(e){return(0,l.jsx)("span",{className:["badge","zoom-on-hover",e.color&&y.c.isLightColor(e.color)?"contrast":""].join(" "),style:{backgroundColor:e.color||""},children:e.title},e.title)}))})})]})})},ie=function(e){var n=(0,r.useState)(!1),t=(0,w.Z)(n,2),i=t[0],o=t[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.pT,{bottom:!0,when:e.shouldReveal,onReveal:function(){o(!0)},children:(0,l.jsx)("h2",{className:"text-center",children:"Skills"})}),(0,l.jsx)(J,{children:ee.map((function(e,n){return(0,l.jsx)(te,{shouldReveal:i,skillSet:e,index:n},e.title)}))})]})},oe=function(e){var n=e.noDelay,t=e.shouldReveal;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(q.$,{children:(0,l.jsx)(m,{shouldReveal:t})}),(0,l.jsx)(q.$,{children:(0,l.jsx)(c,{noDelay:n,shouldReveal:t})}),(0,l.jsx)(q.$,{maxWidth:"1000px",children:(0,l.jsx)(ie,{shouldReveal:t})}),(0,l.jsx)(q.$,{maxWidth:"1000px",children:(0,l.jsx)(V,{shouldReveal:t})}),(0,l.jsx)(X,{shouldReveal:t,style:{margin:"100px 0"}}),(0,l.jsx)(q.$,{maxWidth:"960px",children:(0,l.jsx)(g,{shouldReveal:t})})]})}}}]);