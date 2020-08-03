(this["webpackJsonpplant-app"]=this["webpackJsonpplant-app"]||[]).push([[0],{28:function(e,a,t){e.exports=t(60)},33:function(e,a,t){},34:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},35:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),c=t.n(r);t(33),t(34),t(35);var s=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg alxNavStyle"},l.a.createElement("a",{className:"navbar-brand navLogoStyle",href:"/"},"Eleanor."),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"},l.a.createElement("i",{class:"fas fa-chevron-down togglerBtn"}))),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link navLinkStyle",href:"/register"},"Register")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link navLinkStyle",href:"/signin"},"Sign-In")),l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link navLinkStyle",href:"/shop"},"View Plants")))))};var m=function(){return l.a.createElement("div",{className:"container sepparatorDiv"},l.a.createElement("div",{className:"titleTextContainer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h1",{className:"mainBannerText"},"Welcome to Eleanor.")),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h4",{className:"introTextContentTitle"},"What is this app?")),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("p",{className:"introTextContentBody"},"This app can be used for users who are new to agriculture or growing plants to figure out what plants are a good choice for them specifically to grow based on their location.")),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h4",{className:"introTextContentTitle"},"How does it work?")),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("p",{className:"introTextContentBody"},"The app works by taking in a user's vague location (gathered upon account creation) and using API's to discover more about things such as the climate, rainfall, humidity, etc and compare that information to data on the specific requirements for plant growth so that the user can decide which plants may be best for them based on the climate in their area.")),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h4",{className:"introTextContentTitle"},"Who are we?")),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("p",{className:"introTextContentBody"},"This app was created solo by Alexander Waite, I am a student in the University of Adelaide's coding boot camp. My personal reason for creating the app is to test and demonstrate my skills in Full Stack Development.")),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("i",{class:"fab fa-envira LeafLogo"})),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("a",{href:"/register"},l.a.createElement("button",{type:"button",class:"btn btn-outline-success btn-lg alxCustomBtn"},"Get Started!"))))))};var o=function(){return l.a.createElement("div",{className:"mainBanner"},l.a.createElement(m,null))};var i=function(){return l.a.createElement("footer",{className:"footer alxNavStyle"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10"},l.a.createElement("span",{className:"footerText"},"Made by Alexander Waite.")),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("span",null,l.a.createElement("a",{className:"FASicons",href:"https://github.com/Alex-Waite"},l.a.createElement("i",{className:"fab fa-github-square"}))),l.a.createElement("span",null,l.a.createElement("a",{className:"FASicons",href:"https://www.facebook.com/profile.php?id=100006221748707"},l.a.createElement("i",{className:"fab fa-facebook-square"}))),l.a.createElement("span",null,l.a.createElement("a",{className:"FASicons",href:"https://www.linkedin.com/in/alexander-waite-005165199/"},l.a.createElement("i",{className:"fab fa-linkedin"})))))))},d=t(10),u=t(25),p=t.n(u),E=function(e,a,t){return p.a.post("/api/signup",{username:e,email:a,password:t})};var v=function(){var e=Object(n.useState)(""),a=Object(d.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),s=Object(d.a)(c,2),m=s[0],o=s[1],i=Object(n.useState)(""),u=Object(d.a)(i,2),p=u[0],v=u[1];return l.a.createElement("div",{className:"container sepparatorDiv"},l.a.createElement("div",{className:"titleTextContainer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h1",{className:"mainBannerText"},"Create An Account."),l.a.createElement("form",{class:"signup",onSubmit:function(e){e.preventDefault();var a={username:t,email:m,password:p};a.email&&a.password&&(console.log(a),E(a.username,a.email,a.password))}},l.a.createElement("div",{class:"form-group alxFormGroup"},l.a.createElement("label",{for:"exampleInputUser1",className:"alxFormHeader"},"Username"),l.a.createElement("input",{type:"username",class:"form-control alxFormInput",id:"username-input",placeholder:"Username",value:t,onChange:function(e){return r(e.target.value)}})),l.a.createElement("div",{class:"form-group alxFormGroup"},l.a.createElement("label",{for:"exampleInputEmail1",className:"alxFormHeader"},"Email address"),l.a.createElement("input",{type:"email",class:"form-control alxFormInput",id:"email-input",placeholder:"Email",value:m,onChange:function(e){return o(e.target.value)}})),l.a.createElement("div",{class:"form-group alxFormGroup"},l.a.createElement("label",{for:"exampleInputPassword1",className:"alxFormHeader"},"Password"),l.a.createElement("input",{type:"password",class:"form-control alxFormInput",id:"password-input",placeholder:"Password",value:p,onChange:function(e){return v(e.target.value)}})),l.a.createElement("div",{id:"alert",class:"alert alert-danger alertyBoy",role:"alert"},l.a.createElement("h1",null,"One or more fields are empty!")),l.a.createElement("i",{class:"fab fa-envira LeafLogo"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-sm-12"},l.a.createElement("button",{type:"submit",class:"btn btn-primary alxCustomBtn"},"Sign Up")),l.a.createElement("div",{className:"col-md-6 col-sm-12"},l.a.createElement("button",{class:"btn btn-danger alxCustomBtn"},l.a.createElement("a",{className:"aNoBlue",href:"/signin"},"Already a user? Sign in!")))))))))};var b=function(){return l.a.createElement("div",{className:"mainBanner"},l.a.createElement(v,null))};var g=function(){return l.a.createElement("div",{className:"container sepparatorDiv"},l.a.createElement("div",{className:"titleTextContainer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h1",{className:"mainBannerText"},"Log in to an account!"),l.a.createElement("form",{class:"login"},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputEmail1",className:"alxFormHeader"},"Email address"),l.a.createElement("input",{type:"email",class:"form-control alxFormInput",id:"email-input",placeholder:"Email"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputPassword1",className:"alxFormHeader"},"Password"),l.a.createElement("input",{type:"password",class:"form-control alxFormInput",id:"password-input",placeholder:"Password"})),l.a.createElement("i",{class:"fab fa-envira LeafLogo"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-sm-12"},l.a.createElement("button",{type:"submit",class:"btn btn-primary alxCustomBtn"},"Sign in")),l.a.createElement("div",{className:"col-md-6 col-sm-12"},l.a.createElement("button",{type:"submit",class:"btn btn-danger alxCustomBtn"},l.a.createElement("a",{className:"aNoBlue",href:"/signin"},"New? Create an account!")))))))))};var f=function(){return l.a.createElement("div",{className:"mainBanner"},l.a.createElement(g,null))};var h=function(){return l.a.createElement("div",{className:"customShopBanner"},l.a.createElement("div",{className:"titleTextContainer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h1",{className:"mainBannerText"},"~~~~~~Browse for plants!~~~~~~"),l.a.createElement("div",{class:"form-group alxFormGroup"},l.a.createElement("label",{for:"exampleInputUser1",className:"alxFormHeader"},"Search the database!"),l.a.createElement("input",{type:"username",class:"form-control alxFormInput",id:"username-input",placeholder:"Look for a plant!"})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"col-md-3"},l.a.createElement("div",{class:"card border-dark m-2"},l.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqRXEhrRWmKOlIU0hWwkUZmMl47Fbx6hJMxQ&usqp=CAU",class:"card-img-top",alt:"Grapes on a vine"}),l.a.createElement("div",{class:"card-body"},l.a.createElement("h5",{class:"card-title"},"Common Name: Bush Cactus"),l.a.createElement("p",null,l.a.createElement("strong",null,"Scientific Name: Spiky Boi")),l.a.createElement("p",{class:"card-text"},l.a.createElement("strong",null,"Growth Temprature: 25c ~ 78c")),l.a.createElement("p",{class:"card-text"},"Kingdom: Cactus kingdom"),l.a.createElement("a",{href:"/"},l.a.createElement("button",{class:"btn btn-success winery-btn",id:"enter-winery-btn"},"Buy this plant!"))))),l.a.createElement("div",{class:"col-md-3"},l.a.createElement("div",{class:"card border-dark m-2"},l.a.createElement("img",{src:"https://images.wallpaperscraft.com/image/corn_field_summer_124670_1920x1080.jpg",class:"card-img-top",alt:"Grapes on a vine"}),l.a.createElement("div",{class:"card-body"},l.a.createElement("h5",{class:"card-title"},"Common Name: Corn"),l.a.createElement("p",null,l.a.createElement("strong",null,"Scientific Name: Yelloeatplant")),l.a.createElement("p",{class:"card-text"},l.a.createElement("strong",null,"Growth Temprature: 3c ~ 41c")),l.a.createElement("p",{class:"card-text"},"Kingdom: Corn kingdom"),l.a.createElement("a",{href:"/"},l.a.createElement("button",{class:"btn btn-success winery-btn",id:"enter-winery-btn"},"Buy this plant!"))))),l.a.createElement("div",{class:"col-md-3"},l.a.createElement("div",{class:"card border-dark m-2"},l.a.createElement("img",{src:"https://wallpaperplay.com/walls/full/c/3/d/371979.jpg",class:"card-img-top",alt:"Grapes on a vine"}),l.a.createElement("div",{class:"card-body"},l.a.createElement("h5",{class:"card-title"},"Common Name: Willow Tree"),l.a.createElement("p",null,l.a.createElement("strong",null,"Scientific Name: Willowcus Largeus")),l.a.createElement("p",{class:"card-text"},l.a.createElement("strong",null,"Growth Temprature: -3c ~ 61c")),l.a.createElement("p",{class:"card-text"},"Kingdom: Big Tree kingdom"),l.a.createElement("a",{href:"/"},l.a.createElement("button",{class:"btn btn-success winery-btn",id:"enter-winery-btn"},"Buy this plant!"))))),l.a.createElement("div",{class:"col-md-3"},l.a.createElement("div",{class:"card border-dark m-2"},l.a.createElement("img",{src:"https://www.wallpapers4u.org/wp-content/uploads/lotus_herbs_sun_54326_1920x1080.jpg",class:"card-img-top",alt:"Grapes on a vine"}),l.a.createElement("div",{class:"card-body"},l.a.createElement("h5",{class:"card-title"},"Common Name: Lotus"),l.a.createElement("p",null,l.a.createElement("strong",null,"Scientific Name: Flat Boi")),l.a.createElement("p",{class:"card-text"},l.a.createElement("strong",null,"Growth Temprature: 1c ~ 27c")),l.a.createElement("p",{class:"card-text"},"Kingdom: Water kingdom"),l.a.createElement("a",{href:"/"},l.a.createElement("button",{class:"btn btn-success winery-btn",id:"enter-winery-btn"},"Buy this plant!"))))))))))};var N=function(){return l.a.createElement("div",{className:"mainBanner"},l.a.createElement(h,null))},w=t(26),x=t(2);var y=function(){return l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement(w.a,{basename:"plant-app"},l.a.createElement(x.c,null,l.a.createElement(x.a,{exact:!0,path:"/register"},l.a.createElement(b,null)),l.a.createElement(x.a,{exact:!0,path:"/signin"},l.a.createElement(f,null)),l.a.createElement(x.a,{exact:!0,path:"/shop"},l.a.createElement(N,null)),l.a.createElement(x.a,null,l.a.createElement(o,null)))),l.a.createElement(i,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.3d36a521.chunk.js.map