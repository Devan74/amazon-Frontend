(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(e,t,c){},158:function(e,t,c){},160:function(e,t,c){},167:function(e,t,c){},181:function(e,t,c){},182:function(e,t,c){},183:function(e,t,c){},197:function(e,t,c){},198:function(e,t,c){},199:function(e,t,c){},200:function(e,t,c){},201:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(21),a=c.n(n),r=c(10),i=c(6),o=c(17),l=c.n(o),j=c(25),d=(c(158),c(261)),b=c(258),h=c(255),u=c(259),p=c(16),O=c(1),m=Object(s.createContext)(null),x=function(e){var t=e.children,c=Object(s.useState)(""),n=Object(r.a)(c,2),a=n[0],i=n[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(m.Provider,{value:{account:a,setAccount:i},children:t})})},f=c(28),g=c(93),v=c.n(g),y=(c(80),c(15)),N=c(115),_=c(264),w=c(262),C=c(266),k=c(257),S=c(132),T=c.n(S),A=(c(160),c(251)),E=(Object(N.a)({component:{marginTop:10,marginRight:"-50px",width:"300px",padding:50,height:"300px"}}),function(e){var t=e.userlog,c=e.logclose,n=Object(s.useContext)(m),a=n.account;n.setAccount;return Object(O.jsxs)("div",{className:"rightheader",children:[Object(O.jsxs)("div",{className:"right_nav",children:[a?Object(O.jsx)(d.a,{className:"avtar2",title:a.fname.toUpperCase(),children:a.fname[0].toUpperCase()}):Object(O.jsx)(d.a,{className:"avtar"}),a?Object(O.jsxs)("h3",{children:["Hello, ",a.fname.toUpperCase()]}):""]}),Object(O.jsxs)("div",{className:"nav_btn",onClick:function(){return c()},children:[Object(O.jsx)(p.b,{to:"/",children:"Home"}),Object(O.jsx)(p.b,{to:"/",children:"Shop By Category"}),Object(O.jsx)(A.a,{style:{width:"100%",marginLeft:-20}}),Object(O.jsx)(p.b,{to:"/",style:{marginTop:10},children:"Today's Deal"}),a?Object(O.jsx)(p.b,{to:"/buynow",children:"Your Order"}):Object(O.jsx)(p.b,{to:"/login",children:"Your Order"}),Object(O.jsx)(A.a,{style:{width:"100%",marginLeft:-20}}),Object(O.jsxs)("div",{className:"flag",children:[Object(O.jsx)(p.b,{to:"",style:{marginTop:14},children:"Settings"}),Object(O.jsx)("img",{src:"/india.png",alt:"india flag",style:{width:35,marginLeft:10}})]}),a?Object(O.jsxs)("div",{className:"flag",children:[Object(O.jsx)(v.a,{style:{fontSize:18,marginRight:4}}),Object(O.jsx)("h3",{onClick:function(){return t()},style:{cursor:"pointer",fontWeight:500},children:"Log Out"})]}):Object(O.jsx)(p.b,{to:"/login",children:"Sign in"})]})]})}),D=function(){return function(){var e=Object(j.a)(l.a.mark((function e(t){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(ie,"/getproducts"),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,t({type:"SUCCESS_GET_PRODUCTS",payload:s}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"FAIL_GET_PRODUCTS",payload:e.t0.reseponse});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},F=c(53),P=Object(N.a)({component:{marginTop:10,marginRight:"-50px",width:"300px",padding:50,height:"300px"}}),G=function(){var e,t=P(),c=Object(y.f)(""),n=Object(s.useState)(),a=Object(r.a)(n,2),o=a[0],x=a[1],g=Object(F.c)((function(e){return e.getproductsdata})).products,N=Object(F.b)();Object(s.useEffect)((function(){N(D())}),[N]);var S=Object(s.useState)(!1),A=Object(r.a)(S,2),G=A[0],U=A[1],z=Object(s.useState)(!0),L=Object(r.a)(z,2),B=L[0],R=L[1],I=Object(s.useState)(!1),M=Object(r.a)(I,2),Y=M[0],q=M[1],W=function(e){U(e.currentTarget)},J=function(){U(!1)},H=Object(s.useContext)(m),K=H.account,V=H.setAccount,X=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(ie,"/validuser"),{method:"GET",headers:{Accept:"application/json"},credentials:"include"});case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,201!==t.status?console.log("first login"):V(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){X()}),[]);var Z=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(ie,"/logout"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"});case 3:return t=e.sent,e.next=6,t.json();case 6:if(e.sent,201!==!t.status){e.next=12;break}throw new Error(t.error);case 12:V(!1),U(!1),f.b.success("user Logout \ud83d\ude03!",{position:"top-center"}),c.push("/");case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){q(!1)};return Object(O.jsx)("header",{children:Object(O.jsxs)("nav",{children:[Object(O.jsxs)("div",{className:"left",children:[Object(O.jsx)(_.a,{className:"hamburgur",onClick:function(){q(!0)},children:Object(O.jsx)(T.a,{style:{color:"#fff"}})}),Object(O.jsx)(w.a,{open:Y,onClose:Q,children:Object(O.jsx)(E,{userlog:Z,logclose:Q})}),Object(O.jsx)("div",{className:"navlogo",children:Object(O.jsxs)(p.b,{to:"/",children:[" ",Object(O.jsx)("img",{src:"./amazon_PNG25.png",alt:"logo"})," "]})}),Object(O.jsxs)("div",{className:"nav_searchbaar",children:[Object(O.jsx)("input",{type:"text",name:"",onChange:function(e){return function(e){x(e),R(!1)}(e.target.value)},placeholder:"Search Your Products"}),Object(O.jsx)("div",{className:"search_icon",children:Object(O.jsx)("i",{className:"fas fa-search",id:"search"})}),o&&Object(O.jsx)(C.a,{className:"extrasearch",hidden:B,children:g.filter((function(e){return e.title.longTitle.toLowerCase().includes(o.toLowerCase())})).map((function(e){return Object(O.jsx)(k.a,{children:Object(O.jsx)(p.b,{to:"/getproductsone/".concat(e.id),onClick:function(){return R(!0)},children:e.title.longTitle})})}))})]})]}),Object(O.jsxs)("div",{className:"right",children:[Object(O.jsx)("div",{className:"nav_btn",children:Object(O.jsx)(p.b,{to:"/login",children:"Sign in"})}),K?Object(O.jsx)(p.b,{to:"/buynow",children:Object(O.jsxs)("div",{className:"cart_btn",children:[Object(O.jsx)(b.a,{badgeContent:K.carts.length,color:"secondary",children:Object(O.jsx)("i",{className:"fas fa-shopping-cart",id:"icon"})}),Object(O.jsx)("p",{children:"Cart"})]})}):Object(O.jsx)(p.b,{to:"/login",children:Object(O.jsxs)("div",{className:"cart_btn",children:[Object(O.jsx)(b.a,{badgeContent:0,color:"secondary",children:Object(O.jsx)("i",{className:"fas fa-shopping-cart",id:"icon"})}),Object(O.jsx)("p",{children:"Cart"})]})}),K?Object(O.jsx)(d.a,{className:"avtar2",onClick:W,title:K.fname.toUpperCase(),children:K.fname[0].toUpperCase()}):Object(O.jsx)(d.a,{className:"avtar",onClick:W}),Object(O.jsx)("div",{className:"menu_div",children:Object(O.jsxs)(h.a,{anchorEl:G,open:Boolean(G),onClose:J,className:t.component,children:[Object(O.jsx)(u.a,{onClick:J,style:{margin:10},children:"My account"}),K?Object(O.jsxs)(u.a,(e={onClick:J,style:{margin:10}},Object(i.a)(e,"onClick",Z),Object(i.a)(e,"children",[Object(O.jsx)(v.a,{style:{fontSize:16,marginRight:3}}),"   Logout"]),e)):""]})}),Object(O.jsx)(f.a,{})]})]})})},U=(c(167),function(){return Object(O.jsx)("div",{className:"new_nav",children:Object(O.jsxs)("div",{className:"nav_data",children:[Object(O.jsxs)("div",{className:"left_data",children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("i",{className:"fas fa-shopping-cart"})," All"]}),Object(O.jsx)("p",{children:"Mobiles"}),Object(O.jsx)("p",{children:"Best Sellers"}),Object(O.jsx)("p",{children:"Fashion"}),Object(O.jsx)("p",{children:"Customer Service"}),Object(O.jsx)("p",{children:"Electronics"}),Object(O.jsx)("p",{children:"Prime"}),Object(O.jsx)("p",{children:"Today's Deals"}),Object(O.jsx)("p",{children:"Amazon Pay"})]}),Object(O.jsx)("div",{className:"right_data",children:Object(O.jsx)("img",{src:"nav.jpg",alt:"navdata"})})]})})}),z=c(133),L=c.n(z),B=(c(181),["https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50"," https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50","https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50","https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"]),R=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(L.a,{className:"carasousel",autoPlay:!0,animation:"slide",indicators:!1,navButtonsAlwaysVisible:!0,cycleNavigation:!0,navButtonsProps:{style:{background:"#fff",color:"#494949",borderRadius:0,marginTop:-22,height:"104px"}},children:B.map((function(e,t){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("img",{src:e,alt:"img",className:"banner_img"},t)})}))})})},I=(c(182),c(183),c(134)),M=c.n(I),Y=(c(196),{desktop:{breakpoint:{max:3e3,min:1024},items:4},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}}),q=function(e){var t=e.title,c=e.products;return Object(O.jsxs)("div",{className:"products_section",children:[Object(O.jsxs)("div",{className:"products_deal",children:[Object(O.jsx)("h3",{children:t}),Object(O.jsx)("button",{className:"view_btn",children:"View All"})]}),Object(O.jsx)(A.a,{}),Object(O.jsx)(M.a,{responsive:Y,infinite:!0,draggable:!1,swipeable:!0,centerMode:!0,autoPlay:!0,autoPlaySpeed:4e3,keyBoardControl:!0,showDots:!1,removeArrowOnDeviceType:["tablet","mobile"],dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px",containerClass:"carousel-container",children:c.map((function(e){return Object(O.jsx)(p.b,{to:"/getproductsone/".concat(e.id),children:Object(O.jsxs)("div",{className:"products_items",children:[Object(O.jsx)("div",{className:"product_img",children:Object(O.jsx)("img",{src:e.url,alt:"product"})}),Object(O.jsx)("p",{className:"products_name",children:e.title.shortTitle}),Object(O.jsx)("p",{className:"products_offer",style:{color:"#  007185"},children:e.discount}),Object(O.jsx)("p",{className:"products_explore",children:e.tagline})]})})}))})]})},W=function(){var e=Object(F.c)((function(e){return e.getproductsdata})).products,t=Object(F.b)();return Object(s.useEffect)((function(){t(D())}),[t]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"home_section",children:[Object(O.jsx)("div",{className:"banner_part",children:Object(O.jsx)(R,{})}),Object(O.jsxs)("div",{className:"slide_part",children:[Object(O.jsx)("div",{className:"left_slide",children:Object(O.jsx)(q,{title:"Deal Of The Day",products:e})}),Object(O.jsxs)("div",{className:"right_slide",children:[Object(O.jsx)("h4",{children:"Festive latest launches"}),Object(O.jsx)("img",{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg",alt:"rightimg"}),Object(O.jsx)("a",{href:"#",children:"see more"})]})]}),Object(O.jsx)(q,{title:"Today's Deal",products:e}),Object(O.jsx)("div",{className:"center_img",children:Object(O.jsx)("img",{src:"https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg",alt:""})}),Object(O.jsx)(q,{title:"Best Seller",products:e}),Object(O.jsx)(q,{title:"Upto 80% off",products:e})]}),Object(O.jsx)(A.a,{})]})},J=(c(197),function(){var e=(new Date).getFullYear();return console.log(e),Object(O.jsxs)("footer",{children:[Object(O.jsxs)("div",{className:"footer_container",children:[Object(O.jsxs)("div",{className:"footr_details_one",children:[Object(O.jsx)("h3",{children:"Get to Know US"}),Object(O.jsx)("p",{children:"About us"}),Object(O.jsx)("p",{children:"Careers"}),Object(O.jsx)("p",{children:"Press Releases"}),Object(O.jsx)("p",{children:"Amazon Cares"})]}),Object(O.jsxs)("div",{className:"footr_details_one",children:[Object(O.jsx)("h3",{children:"Connect with Us"}),Object(O.jsx)("p",{children:"Facebook"}),Object(O.jsx)("p",{children:"Twitter"}),Object(O.jsx)("p",{children:"Instagram"})]}),Object(O.jsxs)("div",{className:"footr_details_one forres",children:[Object(O.jsx)("h3",{children:"Make Money with Us"}),Object(O.jsx)("p",{children:"Facebook"}),Object(O.jsx)("p",{children:"Twitter"}),Object(O.jsx)("p",{children:"Instagram"})]}),Object(O.jsxs)("div",{className:"footr_details_one forres",children:[Object(O.jsx)("h3",{children:"Make Money with Us"}),Object(O.jsx)("p",{children:"Facebook"}),Object(O.jsx)("p",{children:"Twitter"}),Object(O.jsx)("p",{children:"Instagram"})]})]}),Object(O.jsxs)("div",{className:"lastdetails",children:[Object(O.jsx)("img",{src:"./amazon_PNG25.png",alt:"logo"}),Object(O.jsxs)("p",{children:["Conditions of Use & Sale \xa0 \xa0\xa0  Privacy Notice  \xa0 \xa0\xa0 Interest-Based Ads  \xa0 \xa0\xa0  \xa9 1996-",e,", Amazon.com, Inc. or its affiliates"]})]})]})}),H=c(46),K=(c(198),function(){var e=Object(s.useState)({fname:"",email:"",mobile:"",password:"",cpassword:""}),t=Object(r.a)(e,2),c=t[0],n=t[1],a=function(e){var t=e.target,c=t.name,s=t.value;n((function(e){return Object(H.a)(Object(H.a)({},e),{},Object(i.a)({},c,s))}))},o=function(){var e=Object(j.a)(l.a.mark((function e(t){var s,a,r,i,o,j,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s=c.fname,a=c.email,r=c.mobile,i=c.password,o=c.cpassword,e.prev=2,e.next=5,fetch("".concat(ie,"/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fname:s,email:a,mobile:r,password:i,cpassword:o})});case 5:return j=e.sent,e.next=8,j.json();case 8:d=e.sent,422!==j.status&&d?(n(Object(H.a)(Object(H.a)({},c),{},{fname:"",email:"",mobile:"",password:"",cpassword:""})),f.b.success("Registration Successfully done \ud83d\ude03!",{position:"top-center"})):f.b.error("Invalid Details \ud83d\udc4e!",{position:"top-center"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log("front end ka catch error hai"+e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)("section",{children:Object(O.jsxs)("div",{className:"sign_container",children:[Object(O.jsx)("div",{className:"sign_header",children:Object(O.jsx)("img",{src:"./blacklogoamazon.png",alt:"signupimg"})}),Object(O.jsx)("div",{className:"sign_form",children:Object(O.jsxs)("form",{method:"POST",children:[Object(O.jsx)("h1",{children:"Create account"}),Object(O.jsxs)("div",{className:"form_data",children:[Object(O.jsx)("label",{htmlFor:"name",children:"Your name"}),Object(O.jsx)("input",{type:"text",name:"fname",onChange:a,value:c.fname,id:"name"})]}),Object(O.jsxs)("div",{className:"form_data",children:[Object(O.jsx)("label",{htmlFor:"email",children:"email"}),Object(O.jsx)("input",{type:"email",name:"email",onChange:a,value:c.email,id:"email"})]}),Object(O.jsxs)("div",{className:"form_data",children:[Object(O.jsx)("label",{htmlFor:"mobile",children:"Mobile number"}),Object(O.jsx)("input",{type:"number",name:"mobile",onChange:a,value:c.mobile,id:"mobile"})]}),Object(O.jsxs)("div",{className:"form_data",children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{type:"password",name:"password",onChange:a,value:c.password,id:"password",placeholder:"At least 6 characters"})]}),Object(O.jsxs)("div",{className:"form_data",children:[Object(O.jsx)("label",{htmlFor:"passwordg",children:"Password again"}),Object(O.jsx)("input",{type:"password",name:"cpassword",onChange:a,value:c.cpassword,id:"passwordg"})]}),Object(O.jsx)("button",{type:"submit",className:"signin_btn",onClick:o,children:"Continue"}),Object(O.jsx)(A.a,{}),Object(O.jsxs)("div",{className:"signin_info",children:[Object(O.jsx)("p",{children:"Already have an account?"}),Object(O.jsx)(p.b,{to:"/login",children:"Sign in"})]})]})}),Object(O.jsx)(f.a,{})]})})}),V=function(){var e=Object(s.useContext)(m),t=(e.account,e.setAccount),c=Object(s.useState)({email:"",password:""}),n=Object(r.a)(c,2),a=n[0],o=n[1],d=function(e){var t=e.target,c=t.name,s=t.value;o((function(e){return Object(H.a)(Object(H.a)({},e),{},Object(i.a)({},c,s))}))},b=function(){var e=Object(j.a)(l.a.mark((function e(c){var s,n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),s=a.email,n=a.password,e.prev=2,e.next=5,fetch("".concat(ie,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,password:n})});case 5:return r=e.sent,e.next=8,r.json();case 8:i=e.sent,400!==r.status&&i?(t(i),o(Object(H.a)(Object(H.a)({},a),{},{email:"",password:""})),f.b.success("Login Successfully done \ud83d\ude03!",{position:"top-center"})):(console.log("invalid details"),f.b.error("Invalid Details \ud83d\udc4e!",{position:"top-center"})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log("login page ka error"+e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)("section",{children:Object(O.jsxs)("div",{className:"sign_container",children:[Object(O.jsx)("div",{className:"sign_header",children:Object(O.jsx)("img",{src:"./blacklogoamazon.png",alt:"signupimg"})}),Object(O.jsxs)("div",{className:"sign_form",children:[Object(O.jsxs)("form",{method:"POST",children:[Object(O.jsx)("h1",{children:"Sign-In"}),Object(O.jsxs)("div",{className:"form_data",children:[Object(O.jsx)("label",{htmlFor:"email",children:"Email"}),Object(O.jsx)("input",{type:"email",name:"email",onChange:d,value:a.email,id:"email"})]}),Object(O.jsxs)("div",{className:"form_data",children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{type:"password",name:"password",onChange:d,value:a.password,id:"password",placeholder:"At least 6 characters"})]}),Object(O.jsx)("button",{type:"submit",className:"signin_btn",onClick:b,children:"Continue"})]}),Object(O.jsx)(f.a,{})]}),Object(O.jsxs)("div",{className:"create_accountinfo",children:[Object(O.jsx)("p",{children:"New to Amazon?"}),Object(O.jsxs)("button",{children:["  ",Object(O.jsx)(p.b,{to:"/signup",children:"Create your Amazon Account"})]})]})]})})},X=(c(199),c(263)),Z=function(){var e=Object(s.useContext)(m),t=(e.account,e.setAccount),c=Object(y.g)("").id,n=Object(y.f)(),a=Object(s.useState)(""),i=Object(r.a)(a,2),o=i[0],d=i[1],b=function(){var e=Object(j.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(ie,"/getproductsone/").concat(c),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"});case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,201!==t.status?alert("no data available"):d(s),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){setTimeout(b,1e3)}),[c]);var h=function(){var e=Object(j.a)(l.a.mark((function e(c){var s,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(c),e.prev=1,e.next=4,fetch("".concat(ie,"/addcart/").concat(c),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({inddata:o}),credentials:"include"});case 4:return s=e.sent,e.next=7,s.json();case 7:a=e.sent,201!==s.status?alert("no data available"):(t(a),n.push("/buynow")),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"cart_section",children:[o&&Object.keys(o).length&&Object(O.jsxs)("div",{className:"cart_container",children:[Object(O.jsxs)("div",{className:"left_cart",children:[Object(O.jsx)("img",{src:o.detailUrl,alt:"cart"}),Object(O.jsxs)("div",{className:"cart_btn",children:[Object(O.jsx)("button",{className:"cart_btn1",onClick:function(){return h(o.id)},children:"Add to Cart"}),Object(O.jsx)("button",{className:"cart_btn2",children:"Buy Now"})]})]}),Object(O.jsxs)("div",{className:"right_cart",children:[Object(O.jsx)("h3",{children:o.title.shortTitle}),Object(O.jsx)("h4",{children:o.title.longTitle}),Object(O.jsx)(A.a,{}),Object(O.jsxs)("p",{className:"mrp",children:["M.R.P. : ",Object(O.jsxs)("del",{children:["\u20b9",o.price.mrp]})]}),Object(O.jsxs)("p",{children:["Deal of the Day : ",Object(O.jsxs)("span",{style:{color:"#B12704"},children:["\u20b9",o.price.cost,".00"]})]}),Object(O.jsxs)("p",{children:["You save : ",Object(O.jsxs)("span",{style:{color:"#B12704"},children:[" \u20b9",o.price.mrp-o.price.cost," (",o.price.discount,") "]})]}),Object(O.jsxs)("div",{className:"discount_box",children:[Object(O.jsxs)("h5",{children:["Discount : ",Object(O.jsx)("span",{style:{color:"#111"},children:o.discount})," "]}),Object(O.jsxs)("h4",{children:["FREE Delivery : ",Object(O.jsx)("span",{style:{color:"#111",fontWeight:"600"},children:"Oct 8 - 21"})," Details"]}),Object(O.jsxs)("p",{style:{color:"#111"},children:["Fastest delivery: ",Object(O.jsx)("span",{style:{color:"#111",fontWeight:"600"},children:" Tomorrow 11AM"})]})]}),Object(O.jsxs)("p",{className:"description",children:["About the Iteam : ",Object(O.jsx)("span",{style:{color:"#565959",fontSize:"14px",fontWeight:"500",letterSpacing:"0.4px"},children:o.description})]})]})]}),o?"":Object(O.jsxs)("div",{className:"circle",children:[Object(O.jsx)(X.a,{}),Object(O.jsx)("h2",{children:" Loading...."})]})]})},Q=(c(121),function(){return Object(O.jsx)("div",{className:"buynow_section",children:Object(O.jsx)("div",{className:"buynow_container",children:Object(O.jsxs)("div",{className:"empty_buy",style:{padding:"40px 40px"},children:[Object(O.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xpOr8GbZhxyLr0uD8mEn9L6lsHT-jHq2Kg&usqp=CAU",alt:"cart img"}),Object(O.jsxs)("div",{className:"emptydata",children:[Object(O.jsx)("h1",{children:"Your Amazon Basket is empty"}),Object(O.jsx)("p",{children:"See recommendations"})]}),Object(O.jsx)(p.b,{className:"empty_btn",to:"/",children:"Add Your Iteams"})]})})})}),$=function(e){var t=e.deletedata,c=e.get,n=Object(s.useContext)(m),a=(n.account,n.setAccount),r=function(){var e=Object(j.a)(l.a.mark((function e(t){var s,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(ie,"/remove/").concat(t),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"});case 3:return s=e.sent,e.next=6,s.json();case 6:n=e.sent,400!==s.status&&n?(a(n),c(),f.b.success("Iteam remove from cart \ud83d\ude03!",{position:"top-center"})):console.log("error aai remove time pr"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"add_remove_select",children:[Object(O.jsxs)("select",{name:"",id:"",children:[Object(O.jsx)("option",{value:"1",children:"1"}),Object(O.jsx)("option",{value:"2",children:"2"}),Object(O.jsx)("option",{value:"3",children:"3"}),Object(O.jsx)("option",{value:"4",children:"4"})]}),Object(O.jsx)("p",{onClick:function(){return r(t)},style:{cursor:"pointer"},children:"Delete"}),Object(O.jsx)("span",{children:"|"}),Object(O.jsx)("p",{className:"forremovemedia",children:"Save Or Later"}),Object(O.jsx)("span",{children:"|"}),Object(O.jsx)("p",{className:"forremovemedia",children:"See More like this"}),Object(O.jsx)(f.a,{})]},t)},ee=c(135),te=c.n(ee),ce=c(136),se=c.n(ce),ne=function(e){var t=e.iteam,c=Object(s.useState)(!1),n=Object(r.a)(c,2),a=n[0],i=n[1],o=Object(s.useState)(0),l=Object(r.a)(o,2),j=l[0],d=l[1],b=Object(y.f)("");Object(s.useEffect)((function(){h()}),[t]);var h=function(){var e=0;t.map((function(t){e+=t.price.cost})),d(e)};return Object(O.jsxs)("div",{className:"right_buy",children:[Object(O.jsx)("img",{src:"https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png",alt:"rightimg"}),Object(O.jsxs)("div",{className:"cost_right",children:[Object(O.jsxs)("p",{children:["Your order is eligible for FREE Delivery. ",Object(O.jsx)("br",{}),Object(O.jsx)("span",{style:{color:"#565959"},children:" Select this option at checkout. Details"})]}),Object(O.jsxs)("h3",{children:["Subtotal (",t.length," items): ",Object(O.jsxs)("span",{style:{fontWeight:"700"},children:[" \u20b9",j,".00"]})]}),Object(O.jsx)("button",{className:"rightbuy_btn",onClick:function(){alert("Your Order is Confirmed"),b.push("/")},children:"Proceed to Buy"}),Object(O.jsxs)("div",{className:"emi",onClick:function(){return i(!a)},children:["Emi available",a?Object(O.jsx)(se.a,{}):Object(O.jsx)(te.a,{})]}),Object(O.jsx)("span",{className:a?"show":"hide",children:" Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up). Learn more"})]})]})},ae=function(e){var t=e.iteam,c=Object(s.useState)(0),n=Object(r.a)(c,2),a=n[0],i=n[1];Object(s.useEffect)((function(){o()}),[t]);var o=function(){var e=0;t.map((function(t){e+=t.price.cost})),i(e)};return Object(O.jsx)("div",{className:"sub_item",children:Object(O.jsxs)("h3",{children:["Subtotal (",t.length," items):",Object(O.jsxs)("strong",{style:{fontWeight:"700",color:"#111"},children:[" \u20b9",a,".00"]})]})})},re=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],a=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(ie,"/cartdetails"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"});case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,201!==t.status?alert("no data available"):n(c.carts),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){a()}),[]),Object(O.jsx)(O.Fragment,{children:c.length?Object(O.jsx)("div",{className:"buynow_section",children:Object(O.jsxs)("div",{className:"buynow_container",children:[Object(O.jsxs)("div",{className:"left_buy",children:[Object(O.jsx)("h1",{children:"Shopping Cart"}),Object(O.jsx)("p",{children:"Select all items"}),Object(O.jsx)("span",{className:"leftbuyprice",children:"Price"}),Object(O.jsx)(A.a,{}),c.map((function(e,t){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"item_containert",children:[Object(O.jsx)("img",{src:e.detailUrl,alt:"imgitem"}),Object(O.jsxs)("div",{className:"item_details",children:[Object(O.jsx)("h3",{children:e.title.longTitle}),Object(O.jsx)("h3",{children:e.title.shortTitle}),Object(O.jsxs)("h3",{className:"diffrentprice",children:["\u20b9",e.price.cost,".00"]}),Object(O.jsx)("p",{className:"unusuall",children:"Usually dispatched in 8 days."}),Object(O.jsx)("p",{children:"Eligible for FREE Shipping"}),Object(O.jsx)("img",{src:"https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png",alt:"logo"}),Object(O.jsx)($,{deletedata:e.id,get:a})]}),Object(O.jsxs)("h3",{className:"item_price",children:["\u20b9",e.price.cost,".00"]})]},t),Object(O.jsx)(A.a,{})]})})),Object(O.jsx)(ae,{iteam:c})]}),Object(O.jsx)(ne,{iteam:c})]})}):Object(O.jsx)(Q,{})})},ie=(c(200),"https://amazon-clone-9jxl.onrender.com");var oe=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){setTimeout((function(){n(!0)}),2e3)}),[]),Object(O.jsx)(O.Fragment,{children:c?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(G,{}),Object(O.jsx)(U,{}),Object(O.jsxs)(y.c,{children:[Object(O.jsx)(y.a,{exact:!0,path:"/",children:Object(O.jsx)(W,{})}),Object(O.jsx)(y.a,{exact:!0,path:"/signup",children:Object(O.jsx)(K,{})}),Object(O.jsx)(y.a,{exact:!0,path:"/login",children:Object(O.jsx)(V,{})}),Object(O.jsx)(y.a,{exact:!0,path:"/getproductsone/:id",children:Object(O.jsx)(Z,{})}),Object(O.jsx)(y.a,{exact:!0,path:"/buynow",children:Object(O.jsx)(re,{})})]}),Object(O.jsx)(J,{})]}):Object(O.jsxs)("div",{className:"circle",children:[Object(O.jsx)(X.a,{}),Object(O.jsx)("h2",{children:" Loading...."})]})})},le=c(68),je=c(137),de=c(138),be=[],he=Object(le.combineReducers)({getproductsdata:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:be},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESS_GET_PRODUCTS":return{products:t.payload};case"FAIL_GET_PRODUCTS":return{error:t.payload};default:return e}}}),ue=he,pe=[je.a],Oe=Object(le.createStore)(ue,Object(de.composeWithDevTools)(le.applyMiddleware.apply(void 0,pe)));a.a.render(Object(O.jsx)(x,{children:Object(O.jsx)(F.a,{store:Oe,children:Object(O.jsx)(p.a,{children:Object(O.jsx)(oe,{})})})}),document.getElementById("root"))}},[[201,1,2]]]);
//# sourceMappingURL=main.8aebb689.chunk.js.map