(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{45:function(e,a,t){e.exports=t(76)},50:function(e,a,t){},51:function(e,a,t){},62:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(37),i=t.n(r),l=(t(50),t(8)),o=(t(51),t(12)),s=t(38),m=t.n(s),u=t(42),d=t.n(u),p=Object(n.createContext)(),E=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(p.Provider,{value:Object(n.useReducer)(a,t)},r)},g=function(){return Object(n.useContext)(p)},h=t(28),_=t.n(h),v=(_.a.initializeApp({apiKey:"AIzaSyANsZY2e1b-TGTofV6eFw3hKIijqWIR7hg",authDomain:"clone-a6e91.firebaseapp.com",databaseURL:"https://clone-a6e91.firebaseio.com",projectId:"clone-a6e91",storageBucket:"clone-a6e91.appspot.com",messagingSenderId:"105163545185",appId:"1:105163545185:web:90fb237d3109d104d22820",measurementId:"G-JJX8BEGC9V"}).firestore(),_.a.auth()),f=t(4);t(62);var b=function(){var e=Object(f.f)(),a=Object(n.useState)(),t=Object(l.a)(a,2),r=t[0],i=t[1],s=Object(n.useState)(),m=Object(l.a)(s,2),u=m[0],d=m[1];return c.a.createElement("div",{className:"login"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"login_img",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"})),c.a.createElement("div",{className:"login_container"},c.a.createElement("h1",null,"Sign In"),c.a.createElement("form",null,c.a.createElement("h4",null,"Email"),c.a.createElement("input",{value:r,type:"text",onChange:function(e){return i(e.target.value)}}),c.a.createElement("h4",null,"password"),c.a.createElement("input",{value:u,type:"password",onChange:function(e){return d(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(a){v.signInWithEmailAndPassword(r,u).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)})),a.preventDefault()},className:"login_signin_button"},"Sign In"),c.a.createElement("p",null,"By continuing, you agree to Amazons Conditions of Use and Privacy Notice."),c.a.createElement("button",{onClick:function(a){a.preventDefault(),v.createUserWithEmailAndPassword(r,u).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_regester_button"},"Create Your Amazon Account"))))};var k=function(){var e=g(),a=Object(l.a)(e,1)[0],t=a.basket,n=a.user;return c.a.createElement("div",{className:"header"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"header_logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})),c.a.createElement("div",{className:"header_Search"},c.a.createElement("input",{type:"text",className:"header_SearhInput"}),c.a.createElement(m.a,{className:"header_SearchIcon"})),c.a.createElement("div",{className:"header_nav"},c.a.createElement(o.b,{to:!n&&"/login",className:"header_link"},c.a.createElement("div",{onClick:function(){v.signOut()},className:"header_option"},c.a.createElement("span",{className:"header_optionLineOne"},"hello,",c.a.createElement("p",{className:"Header_email"},null===n||void 0===n?void 0:n.email)),c.a.createElement("span",{className:"header_optionLineTwo"},n?"Sign Out":"Sign In"))),c.a.createElement(o.b,{to:"/",className:"header_link"},c.a.createElement("div",{className:"header_option header_option_mediaquery"},c.a.createElement("span",{className:"header_optionLineOne"},"Returns"),c.a.createElement("span",{className:"header_optionLineTwo"}," &orders"))),c.a.createElement(o.b,{to:"/",className:"header_link"},c.a.createElement("div",{className:"header_option header_option_mediaquery"},c.a.createElement("span",{className:"header_optionLineOne"},"Your"),c.a.createElement("span",{className:"header_optionLineTwo"},"Prime"))),c.a.createElement(o.b,{to:"/checkout",className:"header_link"},c.a.createElement("div",{className:"header_optionBucket"},c.a.createElement(d.a,null),c.a.createElement("span",{className:"header_optionLineTwo header_BasketCount"},null===t||void 0===t?void 0:t.length)))))};t(68),t(69);var N=function(e){var a=e.id,t=e.title,n=e.image,r=e.price,i=e.rating,o=g(),s=Object(l.a)(o,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{className:"checkProduct_image",src:n}),c.a.createElement("div",{className:"checkoutProduct_info"},c.a.createElement("p",{className:"checkoutProduct_title"},t),c.a.createElement("p",{className:"CheckoutProduct_price"},c.a.createElement("span",null,"\u20b9"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutProduct_rating"},Array(i).fill().map((function(e){return c.a.createElement("p",null,"\ud83c\udf1f")}))),c.a.createElement("button",{onClick:function(){m({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from basket")))},S=t(43),O=t.n(S),C=t(32),A=t(18),j=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)};var y=function(e,a){switch(a.type){case"SET_USER":return Object(A.a)(Object(A.a)({},e),{},{user:a.user});case"ADD_TO_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[].concat(Object(C.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=Object(C.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===a.id}));return n>=0?t.splice(n,1):console.warn("can't remove product (id:".concat(a.id,") as it is not in the ")),Object(A.a)(Object(A.a)({},e),{},{basket:t});default:return e}};t(71);var w=function(){var e=g(),a=Object(l.a)(e,2),t=a[0].basket,n=(a[1],Object(f.f)());return c.a.createElement("div",{className:"subtotal"},c.a.createElement(O.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",t.length," items): ",c.a.createElement("strong",null,"".concat(e))))},decimalScale:2,value:j(t),displayType:"text",thousandSeperator:!0,prefix:"Rs"}),c.a.createElement("button",{onClick:function(e){n.push("/"),e.preventDefault()}},"Proceed to checkout"))};t(72);var I=function(){var e=g(),a=Object(l.a)(e,1)[0].basket;return c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkoutLeft"},c.a.createElement("img",{className:"checkout_ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),0===a.length?c.a.createElement("div",null,c.a.createElement("h1",null,"Your Shopping Basket is Empty"),c.a.createElement("h3",null,"You have no items in your basket to Add something click on 'Add to basket button'")):c.a.createElement("div",null,c.a.createElement("h2",{className:"checkout_title"},"Your Shopping Basket"),a.map((function(e){return c.a.createElement(N,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"checkoutRight"},c.a.createElement(w,null)))};t(73),t(74);var B=function(e){var a=e.title,t=e.price,n=e.image,r=e.rating,i=e.id,o=g(),s=Object(l.a)(o,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product_info"},c.a.createElement("p",{className:"product_title"},a),c.a.createElement("p",{className:"product_Price"},c.a.createElement("span",null,"\u20b9"),c.a.createElement("strong",null,t)),c.a.createElement("div",{className:"product_rating"},Array(r).fill().map((function(e){return c.a.createElement("p",null,"\ud83c\udf1f")})))),c.a.createElement("img",{src:n}),c.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:i,title:a,image:n,price:t,rating:r}})},className:"Product_btn"},"Add to cart"))};var T=function(){return c.a.createElement("div",{className:"Home"},c.a.createElement("img",{className:"home_image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),c.a.createElement("div",{className:"home_row"},c.a.createElement(B,{id:"12345",title:"EDICT by Boat ETWS01 True Wireless Earbuds with Easy Tap Controls, Bluetooth V5.0, Up to 14H Playback with Case, Engaging Sound and Instant Voice Assistant(Black)",price:400,rating:5,image:"https://m.media-amazon.com/images/I/61VevlF1FHL._AC_UY218_.jpg"}),c.a.createElement(B,{id:"445566",title:"HP 15 10th Gen Intel Core i5 15.6-inch FHD Laptop (i5-10210U/8GB/1TB/Win 10/NVIDIA MX110 2GB Graphics /MS Office/1.74kg), 15s-du1079tx, Up to 14H Playback with Case, Engaging Sound and Instant Voice Assistant(Black)",price:61e3,rating:4,image:"https://m.media-amazon.com/images/I/81Ne5qKmE8L._AC_UY218_.jpg"})),c.a.createElement("div",{className:"home_row"},c.a.createElement(B,{id:"555555",title:"Converse Unisex Canvas Sneakers",price:2450,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/81BXvsaMgyL._UX625_.jpg"}),c.a.createElement(B,{id:"666666",title:"Skipping Rope for Men Gym, Women, Weight Loss, Kids, Girls, Children, Adult Best in",price:500,rating:4,image:"https://m.media-amazon.com/images/I/61YiwNRfk8L._AC_UL320_.jpg"}),c.a.createElement(B,{id:"234667",title:"Amazon Echo (3rd Gen) \u2013 Improved sound, powered by Dolby (Black)",price:5e3,rating:4,image:"https://m.media-amazon.com/images/I/7128HRanJgL._AC_UY218_.jpg"})),c.a.createElement("div",{className:"home_row"},c.a.createElement(B,{id:"678901",title:"Panasonic 100 cm (40 inches) Full HD Android Smart LED TV TH-40HS450DX (Black) (2020 Model)",price:19990,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/91auveGcURL._SX425_.jpg"})))};var P=function(){var e=g(),a=Object(l.a)(e,2),t=(a[0].user,a[1]);return Object(n.useEffect)((function(){var e=v.onAuthStateChanged((function(e){t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(f.c,null,c.a.createElement(f.a,{path:"/checkout"},c.a.createElement(k,null),c.a.createElement(I,null)),c.a.createElement(f.a,{path:"/login"},c.a.createElement(b,null)),c.a.createElement(f.a,{path:"/"},c.a.createElement(k,null),c.a.createElement(T,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,{initialState:{basket:[],user:null},reducer:y},c.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.ad080a87.chunk.js.map