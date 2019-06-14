(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{66:function(e,t,a){e.exports=a(85)},71:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n,l=a(0),o=a.n(l),r=a(11),i=a.n(r),c=(a(71),a(52)),m=a(53),s=a(60),p=a(54),d=a(61),h=a(45),g=a(4),y=a(122),u=a(124),E=a(59),b=Object(E.a)({palette:{primary:{light:"white",main:"#66FCF1",dark:"#45A29E"},secondary:{light:"#C5C6C7",main:"#566a84",dark:"#0B0C10"}}}),f=a(126),w=a(58),x=a.n(w),v=a(123),R=a(125),k=a(40),W=a(133),F=a(127),T=a(128),C=a(130),S=a(129),L=a(121),j=a(120),I=a(7),N=a.n(I),B=a(131),O=a(132),M={appBar:{backgroundColor:b.palette.secondary.dark,boxShadow:"0px 1px 1px #de1dde",width:"100%",right:0,left:0},contactButtonRoot:{borderWidth:2,borderColor:b.palette.primary.main,color:b.palette.primary.main,padding:"15px 30px"},menuButton:{display:"flex",color:b.palette.secondary.light},divider:{margin:"10px 0 0 0",height:3,width:"80px",backgroundColor:b.palette.primary.main},button:{margin:b.spacing(1),"&:hover":{fontWeight:"600",color:b.palette.primary.main}},icon:{"&:hover":{fontWeight:"600",color:b.palette.primary.main}},buttonRoot:{color:b.palette.secondary.light},drawerButtonRoot:{color:b.palette.secondary.main},buttonLabel:{textTransform:"capitalize"},grow:{flexGrow:1},main:(n={paddingRight:"100px",paddingLeft:"100px"},Object(h.a)(n,b.breakpoints.down("md"),{paddingRight:"50px",paddingLeft:"50px"}),Object(h.a)(n,b.breakpoints.down("sm"),{paddingRight:"25px",paddingLeft:"25px"}),n),anchorTag:{textDecoration:"none",color:b.palette.secondary.light,paddingLeft:10,paddingRight:10,"&:hover":{fontWeight:"600",color:b.palette.primary.main}},drawer:{backgroundColor:b.palette.secondary.dark}};function D(e){var t=e.children,a=e.window,n=Object(j.a)({target:a?a():void 0});return o.a.createElement(L.a,{appear:!1,direction:"down",in:!n},t)}var H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1,backgroundShadow:"none"},a.handleDrawerOpen=function(){a.setState({open:!0})},a.handleDrawerClose=function(){a.setState({open:!1})},a.handleScroll=function(e){window.pageYOffset>200?a.setState({backgroundShadow:"inset 0px -7px 11px -10px rgba(32,77,75,1)"}):a.setState({backgroundShadow:"none"})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.width,n=window.location.href;return o.a.createElement("div",{style:{background:b.palette.secondary.dark,margin:"0"}},o.a.createElement(D,this.props,o.a.createElement(y.a,{className:t.appBar,style:{boxShadow:this.state.backgroundShadow}},Object(v.b)("sm",a)?o.a.createElement(u.a,null,o.a.createElement("a",{href:"#landing",className:t.anchorTag},o.a.createElement("img",{src:"http://localhost:3000/"===n?"/images/logo.png":"https://weinianlim.github.io/wcc2/images/logo.png",style:{width:"auto",maxHeight:"45px"}})),o.a.createElement("div",{className:t.grow}),o.a.createElement(R.a,{className:t.button,classes:{root:t.buttonRoot,label:t.buttonLabel},href:"#aboutMe"},"About"),o.a.createElement(R.a,{className:t.button,classes:{root:t.buttonRoot,label:t.buttonLabel},href:"#experience"},"Experience"),o.a.createElement(R.a,{className:t.button,classes:{root:t.buttonRoot,label:t.buttonLabel},href:"#contact"},"Contact"),o.a.createElement(R.a,{className:t.button,classes:{root:t.buttonRoot,label:t.buttonLabel},href:"http://localhost:3000/"==n?"/images/resume.pdf":"https://weinianlim.github.io/wcc2/images/resume.pdf",target:"_blank"},"Resume")):o.a.createElement(u.a,null,o.a.createElement("img",{src:"http://localhost:3000/"===n?"/images/logo.png":"https://weinianlim.github.io/wcc2/images/logo.png",style:{width:"auto",maxHeight:"45px"}}),o.a.createElement("div",{className:t.grow}),o.a.createElement(f.a,{className:t.menuButton,onClick:this.handleDrawerOpen},o.a.createElement(x.a,null))))),o.a.createElement(W.a,{classes:{root:t.drawer},open:this.state.open,onClose:this.handleDrawerClose,anchor:"right"},o.a.createElement(F.a,null,o.a.createElement(T.a,null,o.a.createElement(R.a,{className:t.button,classes:{root:t.drawerButtonRoot,label:t.buttonLabel},href:"#aboutMe",onClick:this.handleDrawerClose},"About")),o.a.createElement(T.a,null,o.a.createElement(R.a,{className:t.button,classes:{root:t.drawerButtonRoot,label:t.buttonLabel},href:"#experience",onClick:this.handleDrawerClose},"Experience")),o.a.createElement(T.a,null,o.a.createElement(R.a,{className:t.button,classes:{root:t.drawerButtonRoot,label:t.buttonLabel},href:"#contact",onClick:this.handleDrawerClose},"Contact")),o.a.createElement(T.a,null,o.a.createElement(R.a,{className:t.button,classes:{root:t.drawerButtonRoot,label:t.buttonLabel},href:"http://localhost:3000/"==n?"/images/resume.pdf":"https://weinianlim.github.io/wcc2/images/resume.pdf",target:"_blank",onClick:this.handleDrawerClose},"Resume")))),o.a.createElement("main",{className:t.main},o.a.createElement("section",{id:"landing",style:{paddingTop:"150px"}},Object(v.b)("sm",a)?o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,{variant:"h1",style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.primary.main}},"William Lim"),o.a.createElement(k.a,{variant:"h1",style:{marginTop:"10px",fontFamily:"Roboto",fontWeight:"450",color:b.palette.secondary.light}},"I build things for the internet"),o.a.createElement(k.a,{variant:"h6",style:{marginTop:"50px",fontFamily:"Roboto",fontWeight:"400",color:b.palette.secondary.main}},"I am a software engineer based in Vancouver, BC specializing in ",o.a.createElement("br",null)," building exceptional, responsive and high quality ",o.a.createElement("br",null)," Websites and Web Applications")):o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,{variant:"h3",style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.primary.main}},"William Lim"),o.a.createElement(k.a,{variant:"h3",style:{marginTop:"10px",fontFamily:"Roboto",fontWeight:"450",color:b.palette.secondary.light}},"I build things for the internet"),o.a.createElement(k.a,{variant:"h6",style:{marginTop:"50px",fontFamily:"Roboto",fontWeight:"400",color:b.palette.secondary.main}},"I am a software engineer based in Vancouver, BC specializing in building exceptional, responsive and high quality websites and web applications")),o.a.createElement(R.a,{variant:"outlined",className:t.button,classes:{root:t.contactButtonRoot,label:t.buttonLabel},color:"theme.palette.primary.main",style:{marginTop:"50px",marginLeft:"0px"},href:"mailto:weinianlim26@gmail.com"},"Let's talk")),o.a.createElement("section",{id:"aboutMe",style:{marginTop:"100px",paddingTop:"100px"}},o.a.createElement(k.a,{variant:"h4",style:{marginTop:"10px",fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.light}},"About Me"),o.a.createElement(S.a,{variant:"inset",className:t.divider}),o.a.createElement(C.a,{container:!0,spacing:3},o.a.createElement(C.a,{item:!0,xs:12,sm:8},Object(v.b)("sm",a)?o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,{variant:"h6",style:{marginTop:"50px",fontFamily:"Roboto",fontWeight:"400",color:b.palette.secondary.main}},"Hi there, I'm William! I am a software engineer located in Vancouver, BC.",o.a.createElement("br",null),"I enjoy building exceptional websites and web application that has ",o.a.createElement("br",null),"awesome user-interface."),o.a.createElement(k.a,{variant:"h6",style:{marginTop:"20px",fontFamily:"Roboto",fontWeight:"400",color:b.palette.secondary.main}},"I am currently a Full Stack Developer at Porton Health Corp, ",o.a.createElement("br",null),"a vancouver based startup that provides telehealth platform."),o.a.createElement(k.a,{variant:"h6",style:{marginTop:"20px",fontFamily:"Roboto",fontWeight:"400",color:b.palette.secondary.main}},"Here are some of the Technologies that I am working with daily,")):o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,{variant:"h6",style:{marginTop:"50px",fontFamily:"Roboto",fontWeight:"400",color:b.palette.secondary.main}},"Hi there, I'm William! I am a software engineer located in Vancouver, BC. I enjoy building exceptional websites and web application that has awesome user-interface."),o.a.createElement(k.a,{variant:"h6",style:{marginTop:"20px",fontFamily:"Roboto",fontWeight:"400",color:b.palette.secondary.main}},"I am currently a Full Stack Developer at Porton Health Corp, a vancouver based startup that provides telehealth platform."),o.a.createElement(k.a,{variant:"h6",style:{marginTop:"20px",fontFamily:"Roboto",fontWeight:"400",color:b.palette.secondary.main}},"Here are some of the Technologies that I am working with daily,")),o.a.createElement(C.a,{container:!0,spacing:3},Object(v.b)("sm",a)?o.a.createElement(o.a.Fragment,null,o.a.createElement(C.a,{item:!0,xs:12,sm:6},o.a.createElement(F.a,null,o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"Javascript(ES5 & ES6)")),o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"React")),o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"Material-UI")))),o.a.createElement(C.a,{item:!0,xs:12,sm:6},o.a.createElement(F.a,null,o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"HTML & CSS")),o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"Node.js")),o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"Material-UI"))))):o.a.createElement(C.a,{item:!0,xs:!0},o.a.createElement(F.a,null,o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"Javascript(ES5 & ES6)")),o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"React")),o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"Material-UI")),o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"HTML & CSS")),o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"Node.js")),o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"Material-UI")))))),Object(v.b)("sm",a)?o.a.createElement(C.a,{item:!0,xs:12,sm:4},o.a.createElement("img",{src:"http://localhost:3000/"==n?"/images/profile.jpg":"https://weinianlim.github.io/wcc2/images/profile.jpg",style:{marginTop:"50px",borderRadius:"10px",width:"100%",height:"auto",maxWidth:"250px",marginLeft:"auto",marginRight:"auto"}})):o.a.createElement(C.a,{item:!0,xs:12,sm:4,alignItems:"center",container:!0},o.a.createElement("img",{src:"http://localhost:3000/"==n?"/images/profile.jpg":"https://weinianlim.github.io/wcc2/images/profile.jpg",style:{marginTop:"50px",borderRadius:"10px",width:"100%",height:"auto",maxWidth:"250px",marginLeft:"auto",marginRight:"auto"}})))),o.a.createElement("section",{id:"experience",style:{marginTop:"100px",paddingTop:"100px"}},o.a.createElement(k.a,{variant:"h4",style:{marginTop:"10px",fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.light}},"Places I've worked"),o.a.createElement(S.a,{variant:"inset",className:t.divider,style:{marginBottom:"50px"}}),o.a.createElement(C.a,{container:!0,spacing:4},o.a.createElement(C.a,{item:!0,xs:12,md:6},o.a.createElement(k.a,{variant:"h6",style:{marginTop:"10px",fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.light}},"Full Stack Developer @ Porton Health Corp"),o.a.createElement(F.a,null,o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"Developed and maintained software features in Porton Health web app using React, ES6, HTML and CSS")),o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"Worked closely with other developers to ensure thoughtful and coherent user experience across Porton\u2019s web app")),o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"Proposed, redesigned and built a responsive blog section using Material-UI, which helped improve user traffic by 50%")),o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"Implemented OSCAR EMR integration with Portion\u2019s web app which increased potential customers by 300%")),o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"Tested Web App in various browser and devices to ensure cross-browser compatibility and mobile responsiveness")))),o.a.createElement(C.a,{item:!0,xs:12,md:6},o.a.createElement(k.a,{variant:"h6",style:{marginTop:"10px",fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.light}},"Software Engineer @ Clarius Mobile Health"),o.a.createElement(F.a,null,o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"Architected and developed Google Cast feature in Clarius cross platform mobile app in Qt and Java")),o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"Researched and built Speech Recognition feature with CMUSphinx as an online/offline speech control for Clarius wireless portable ultrasound probe")),o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"Maintained software functionality periodically to ensure the reproducibility of the software within Linux system")),o.a.createElement(T.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{style:{color:b.palette.primary.dark}})),o.a.createElement(O.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:b.palette.secondary.main}},"Implemented and shipped WiFi-Direct autoconnect feature which allowed devices to connect to wireless ultrasound probe seamlessly")))))),o.a.createElement("section",{id:"contact",style:{marginTop:"100px",paddingTop:"100px"}},o.a.createElement(C.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},o.a.createElement(C.a,{item:!0},Object(v.b)("sm",a)?o.a.createElement(k.a,{variant:"h2",style:{marginTop:"10px",textAlign:"center",fontFamily:"Roboto",fontWeight:"500",color:b.palette.primary.light}},"Let's Get In Touch!"):o.a.createElement(k.a,{variant:"h3",style:{marginTop:"10px",textAlign:"center",fontFamily:"Roboto",fontWeight:"500",color:b.palette.primary.light}},"Let's Get In Touch!")),o.a.createElement(C.a,{item:!0},o.a.createElement(S.a,{variant:"inset",className:t.divider})),o.a.createElement(C.a,{item:!0},o.a.createElement(k.a,{variant:"h6",style:{maxWidth:"700px",textAlign:"center",marginTop:"50px",fontFamily:"Roboto",fontWeight:"400",color:b.palette.secondary.main}},"I am currently looking for new existing opportunities, whether it is for a position or project or just to say hi, feel free to shoot me an email")),o.a.createElement(C.a,{item:!0},o.a.createElement(R.a,{variant:"outlined",className:t.button,classes:{root:t.contactButtonRoot,label:t.buttonLabel},color:"theme.palette.primary.main",style:{marginTop:"50px",marginLeft:"0px"},href:"mailto:weinianlim26@gmail.com"},"Say Hi"))))),o.a.createElement("section",{style:{marginTop:"180px",paddingTop:"25px",paddingBottom:"25px",textAlign:"center",boxShadow:"inset -1px 11px 8px -12px rgba(32,77,75,1)"}},o.a.createElement(C.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},o.a.createElement(C.a,{item:!0},o.a.createElement(R.a,{href:"mailto:weinianlim26@gmail.com"},o.a.createElement("i",{class:"im im-mail",style:{color:b.palette.secondary.light}}))),o.a.createElement(C.a,{item:!0},o.a.createElement(R.a,{href:"https://www.linkedin.com/in/williamwnl/",target:"_blank"},o.a.createElement("i",{class:"im im-linkedin",style:{color:b.palette.secondary.light}}))),o.a.createElement(C.a,{item:!0},o.a.createElement(R.a,{href:"https://github.com/WeiNianLim",target:"_blank"},o.a.createElement("i",{class:"im im-github",style:{color:b.palette.secondary.light}})))),o.a.createElement(k.a,{variant:"subtitle1",style:{marginTop:"5px",fontFamily:"Roboto",fontWeight:"400",color:b.palette.secondary.light}},"Designed and built by William Lim")))}}]),t}(l.Component),A=Object(v.a)()(Object(g.a)(M)(H));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[66,1,2]]]);
//# sourceMappingURL=main.f99cc7dd.chunk.js.map