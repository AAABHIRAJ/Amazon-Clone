(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{107:function(e,t,c){},108:function(e,t,c){},110:function(e,t,c){},112:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c.n(a),s=c(29),i=c.n(s),r=(c(64),c(8)),o=(c(65),c(66),c(54)),l=c.n(o),d=c(55),j=c.n(d),h=c(14),u=c(2),b=Object(a.createContext)(),m=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(u.jsx)(b.Provider,{value:Object(a.useReducer)(t,c),children:n})},O=function(){return Object(a.useContext)(b)},p=c(40),x=p.a.initializeApp({apiKey:"AIzaSyArLBCmlkXQzEykxhlpE2fK6dGcIwg40uI",authDomain:"clone-c1daf.firebaseapp.com",projectId:"clone-c1daf",storageBucket:"clone-c1daf.appspot.com",messagingSenderId:"945717722871",appId:"1:945717722871:web:a8458c2138fbf9d00a1df2",measurementId:"G-JL06MLC7MT"}).firestore(),_=p.a.auth();var g=function(){var e=O(),t=Object(r.a)(e,2),c=t[0],a=c.user,n=c.basket;return t[1],console.log(n),Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)(h.b,{to:"/",className:"header__link",children:Object(u.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(u.jsxs)("div",{className:"header__search",children:[Object(u.jsx)("input",{className:"header__searchInput",type:"text"}),Object(u.jsx)(l.a,{className:"header__searchIcon"})]}),Object(u.jsxs)("div",{className:"header__nav",children:[Object(u.jsx)(h.b,{to:!a&&"/login",className:"header__link",children:Object(u.jsxs)("div",{onClick:function(){_.signOut()},className:"header__option",children:[Object(u.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",null===a||void 0===a?void 0:a.email]}),Object(u.jsx)("span",{className:"header__optionLineTwo",children:a?"Sign out":"sign in"})]})}),Object(u.jsx)(h.b,{to:"/orders",className:"header__link",children:Object(u.jsxs)("div",{className:"header__option",children:[Object(u.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(u.jsx)("span",{className:"header__optionLineTwo",children:"& orders"})]})}),Object(u.jsx)(h.b,{to:"/",className:"header__link",children:Object(u.jsxs)("div",{className:"header__option",children:[Object(u.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(u.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]})}),Object(u.jsx)(h.b,{to:"/checkout",className:"header__link",children:Object(u.jsxs)("div",{className:"header__optionBasket",children:[Object(u.jsx)(j.a,{}),Object(u.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===n||void 0===n?void 0:n.length})]})})]})]})};c(77),c(78);var f=function(e){var t=e.id,c=e.title,a=e.image,n=e.price,s=e.rating,i=O(),o=Object(r.a)(i,2),l=(o[0].basket,o[1]);return Object(u.jsxs)("div",{className:"product",children:[Object(u.jsxs)("div",{className:"product__info",children:[Object(u.jsx)("p",{children:c}),Object(u.jsxs)("p",{className:"product_price",children:[Object(u.jsx)("small",{children:"\u20b9"}),Object(u.jsx)("strong",{children:n})]}),Object(u.jsx)("div",{className:"product__rating",children:Array(s).fill().map((function(e,t){return Object(u.jsx)("p",{children:"\u2b50"})}))})]}),Object(u.jsx)("img",{src:a,alt:""}),Object(u.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:a,price:n,rating:s}})},children:"Add to Basket"})]})};var v=function(){return Object(u.jsx)("div",{className:"home",children:Object(u.jsxs)("div",{className:"home__container",children:[Object(u.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(u.jsxs)("div",{className:"home__row",children:[Object(u.jsx)(f,{id:"6969691",title:"Samsung Galaxy M33 5G (Mystique Green, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus | Travel Adapter to be Purchased Separately",image:"https://m.media-amazon.com/images/I/810u0wy9z7L._SY741_.jpg",rating:4,price:17999}),Object(u.jsx)(f,{id:"6969692",title:"Zeel Clothing Women's Silk Semi stitched Lehenga Choli (7035_Peach_Free Size)",image:"https://m.media-amazon.com/images/I/9117U3htP5L._UY550_.jpg",rating:3,price:6999})]}),Object(u.jsxs)("div",{className:"home__row",children:[Object(u.jsx)(f,{id:"6969693",title:"SKYBAGS Boho with RAIN Cover Blue Casual Backpack 23L",image:"https://m.media-amazon.com/images/I/419XQVMP38L._SY450_.jpg",rating:5,price:1689}),Object(u.jsx)(f,{id:"6969694",title:"SIRIL Women's Bandhani Printed & Embroidery Work In Lace Georgette Saree with Unstitched Blouse Piece",image:"https://m.media-amazon.com/images/I/71XAzGJXvkL._UY879_.jpg",rating:3,price:2088}),Object(u.jsx)(f,{id:"6969695",title:" Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 512GB SSD Storage",image:"https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",rating:3,price:101108})]}),Object(u.jsx)("div",{className:"home__row",children:Object(u.jsx)(f,{id:"6969696",title:"boAt Xtend Smartwatch with Alexa Built-in, 1.69\u201d HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor, 5 ATM & 7 Days Battery(Charcoal Black)",image:"https://images-eu.ssl-images-amazon.com/images/I/41lQan54SPL._SX300_SY300_QL70_FMwebp_.jpg",rating:4,price:2999})})]})})},N=c(10);c(79),c(80);var S=function(e){var t=e.id,c=e.title,a=e.image,n=e.price,s=e.rating,i=e.hideButton,o=O(),l=Object(r.a)(o,2),d=(l[0].basket,l[1]);return Object(u.jsxs)("div",{className:"checkoutProduct",children:[Object(u.jsx)("img",{className:"checkoutProduct__image",src:a,alt:""}),Object(u.jsxs)("div",{className:"chectoutProduct__info",children:[Object(u.jsx)("p",{className:"checkoutProduct__title",children:c}),Object(u.jsxs)("p",{className:"checkoutProduct__price",children:[Object(u.jsx)("small",{children:"\u20b9"}),Object(u.jsx)("strong",{children:n})]}),Object(u.jsx)("div",{className:"checkoutProduct__rating",children:Array(s).fill().map((function(e,t){return Object(u.jsx)("p",{children:"\u2b50"})}))}),i?"":Object(u.jsx)("button",{onClick:function(){d({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from basket"})]})]})},k=(c(81),c(32)),y=c.n(k),A=c(33),C=c(21),B=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},P=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(C.a)(Object(C.a)({},e),{},{basket:Object(A.a)(e.basket),user:t.user});case"EMPTY_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[]});case"ADD_TO_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[].concat(Object(A.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=Object(A.a)(e.basket),a=e.basket.findIndex((function(e){return e.id===t.id}));return a>=0?c.splice(a,1):console.warn("Cant remove pdt (id: ".concat(t.id,")")),Object(C.a)(Object(C.a)({},e),{},{basket:c});default:return e}};var E=function(){var e=O(),t=Object(r.a)(e,2),c=t[0].basket,a=(t[1],Object(N.f)());return Object(u.jsxs)("div",{className:"subtotal",children:[Object(u.jsx)(y.a,{renderText:function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(u.jsx)("strong",{children:e})]}),Object(u.jsxs)("small",{className:"subtotal__gift",children:[Object(u.jsx)("input",{type:"checkbox"}),"This order contains a gift"]})]})},decimalScale:2,value:B(c),displayType:"text",thousandSeperator:!0,prefix:"\u20b9"}),Object(u.jsx)("button",{onClick:function(e){return a.push("/payment")},children:"Proceed to Checkout"})]})};var T=function(){var e=O(),t=Object(r.a)(e,1)[0].basket;return Object(u.jsxs)("div",{className:"checkout",children:[Object(u.jsxs)("div",{className:"checkout__left",children:[Object(u.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),0===(null===t||void 0===t?void 0:t.length)?Object(u.jsxs)("div",{className:"checkout__title",children:[Object(u.jsx)("h2",{children:"Your Shopping Basket is empty"}),Object(u.jsx)("p",{children:"Your shopping cart is waiting. Give it purpose \u2013 fill it with groceries, clothing, household supplies, electronics and more."})]}):Object(u.jsxs)("div",{className:"checkout__title",children:[Object(u.jsx)("div",{className:"border",children:Object(u.jsx)("h2",{children:"Your Shopping Basket"})}),t.map((function(e){return Object(u.jsx)(S,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(u.jsx)("div",{className:"checkout__right",children:Object(u.jsx)(E,{})})]})};c(83);var w=function(){var e=Object(N.f)(),t=Object(a.useState)(""),c=Object(r.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(""),o=Object(r.a)(i,2),l=o[0],d=o[1];return Object(u.jsxs)("div",{className:"login",children:[Object(u.jsx)(h.b,{to:"/",children:Object(u.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(u.jsxs)("div",{className:"login__container",children:[Object(u.jsx)("h1",{children:"Sign in"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("h2",{children:"E-mail"}),Object(u.jsx)("input",{value:n,onChange:function(e){return s(e.target.value)},type:"email"}),Object(u.jsx)("h2",{children:"Password"}),Object(u.jsx)("input",{value:l,onChange:function(e){return d(e.target.value)},type:"password"}),Object(u.jsx)("button",{onClick:function(t){t.preventDefault(),_.signInWithEmailAndPassword(n,l).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login__signInButton",children:"Sign in"})]}),Object(u.jsx)("p",{children:"By continuing, you agree to Amazon's Conditions of Use and Privacy Notice."}),Object(u.jsx)("button",{onClick:function(t){t.preventDefault(),_.createUserWithEmailAndPassword(n,l).then((function(t){console.log(t),e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})},M=c(27),L=c.n(M),I=c(39),z=c(23),G=c(56),R=c.n(G).a.create({baseURL:"http://localhost:5001/clone-c1daf/us-central1/api"});c(107);var D=function(){var e=O(),t=Object(r.a)(e,2),c=t[0],n=c.basket,s=c.user,i=t[1],o=Object(a.useState)(!1),l=Object(r.a)(o,2),d=l[0],j=l[1],b=Object(a.useState)(null),m=Object(r.a)(b,2),p=m[0],_=m[1],g=Object(a.useState)(""),f=Object(r.a)(g,2),v=f[0],k=f[1],A=Object(a.useState)(!1),C=Object(r.a)(A,2),P=C[0],E=C[1],T=Object(z.useStripe)(),w=Object(z.useElements)(),M=Object(N.f)(),G=Object(a.useState)(""),D=Object(r.a)(G,2),Y=D[0],U=D[1];Object(a.useEffect)((function(){(function(){var e=Object(I.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("This is use effect from PAYMENT.JS getClient function"),e.next=3,R({method:"post",url:"/payments/create?total=".concat(100*B(n))});case 3:t=e.sent,console.log("This is shit>>>>"),U(t.data.clientSecret);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),console.log("The Client secret is >>>>>>>>",Y);var F=function(){var e=Object(I.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),E(!0),e.next=4,T.confirmCardPayment(Y,{payment_method:{card:w.getElement(z.CardElement)}}).then((function(e){var t=e.paymentIntent;x.collection("users").doc(null===s||void 0===s?void 0:s.uid).collection("orders").doc(t.id).set({basket:n,amount:t.amount,created:t.created}),console.log("Hello you are in Payload Payment Intent"),k(!0),_(null),E(!1),console.log("This is use effect from PAYMENT.JS handleSubmit then"),i({type:"EMPTY_BASKET"}),M.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"payment",children:Object(u.jsxs)("div",{className:"payment__container",children:[Object(u.jsxs)("h2",{className:"payment__heading",children:["Checkout(",Object(u.jsxs)(h.b,{to:"/checkout",children:[n.length," items"]}),")"]}),Object(u.jsxs)("div",{className:"payment__section",children:[Object(u.jsx)("div",{className:"payment__title",children:Object(u.jsx)("h3",{children:"Delivery Address"})}),Object(u.jsxs)("div",{className:"payment__address",children:[Object(u.jsx)("p",{children:null===s||void 0===s?void 0:s.email}),Object(u.jsx)("p",{children:"Paliganj, Manhar mohalla, Jai Hind Chowk"}),Object(u.jsx)("p",{children:"Patna, IN"})]})]}),Object(u.jsxs)("div",{className:"payment__section",children:[Object(u.jsx)("div",{className:"payment__title",children:Object(u.jsx)("h3",{children:"Review items and delivery "})}),Object(u.jsx)("div",{className:"payment__items",children:n.map((function(e){return Object(u.jsx)(S,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(u.jsxs)("div",{className:"payment__section",children:[Object(u.jsx)("div",{className:"payment__title",children:Object(u.jsx)("h3",{children:"Payment Method"})}),Object(u.jsxs)("div",{className:"payment__cardDetails",children:[Object(u.jsxs)("form",{onSubmit:F,children:[Object(u.jsx)(z.CardElement,{onChange:function(e){j(e.empty),_(e.error?e.error.message:"")}}),Object(u.jsx)("div",{className:"payment__orderTotal",children:Object(u.jsx)(y.a,{renderText:function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("p",{children:["Order total: ",Object(u.jsx)("strong",{children:e})]})})},decimalScale:2,value:B(n),displayType:"text",thousandSeperator:!0,prefix:"\u20b9"})}),Object(u.jsx)("button",{disabled:d||P||v,children:"Buy Now"})]}),p?Object(u.jsx)("div",{children:p}):null]})]})]})})},Y=c(57),U=(c(108),c(58)),F=c.n(U);var K=function(e){var t=e.order;return Object(u.jsxs)("div",{className:"order",children:[Object(u.jsxs)("h3",{children:["Order Total: \u20b9",t.data.amount/100]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Ordered on"})," ",F.a.unix(t.data.created).format("MMMM Do YYYY, h:mma")]}),Object(u.jsx)("p",{className:"order__id",children:Object(u.jsx)("small",{children:t.id})}),console.log("ORDER>>>>  ",t),Object(u.jsx)("div",{children:t.data.basket.map((function(e){return Object(u.jsx)(S,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})}))})]})};c(110);var X=function(){var e=O(),t=Object(r.a)(e,2),c=t[0],n=(c.basket,c.user),s=(t[1],Object(a.useState)([])),i=Object(r.a)(s,2),o=i[0],l=i[1];return Object(a.useEffect)((function(){n?x.collection("users").doc(null===n||void 0===n?void 0:n.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){l(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):l([])}),[n]),Object(u.jsxs)("div",{className:"orders",children:[Object(u.jsx)("h1",{children:"Your Orders"}),Object(u.jsx)("div",{className:"orders__order",children:o.map((function(e){return Object(u.jsx)(K,{order:e})}))})]})},J=Object(Y.a)("pk_test_51LSP9KSAbLbnLrWDniWbaf0dghmA1lLcJ8XCFbxScwLLF7kem7YZCU6hHaio6At2JVbY1iJlRhRL2mijGWb38PtX00PRM1V9sD");var W=function(){var e=O(),t=Object(r.a)(e,2),c=(t[0].user,t[1]);return Object(a.useEffect)((function(){_.onAuthStateChanged((function(e){console.log("The user is",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(u.jsx)(h.a,{children:Object(u.jsx)("div",{className:"app",children:Object(u.jsxs)(N.c,{children:[Object(u.jsxs)(N.a,{path:"/checkout",children:[Object(u.jsx)(g,{}),Object(u.jsx)(T,{})]}),Object(u.jsxs)(N.a,{path:"/orders",children:[Object(u.jsx)(g,{}),Object(u.jsx)(X,{})]}),Object(u.jsx)(N.a,{path:"/login",children:Object(u.jsx)(w,{})}),Object(u.jsxs)(N.a,{path:"/payment",children:[Object(u.jsx)(g,{}),Object(u.jsx)(z.Elements,{stripe:J,children:Object(u.jsx)(D,{})})]}),Object(u.jsxs)(N.a,{path:"/",children:[Object(u.jsx)(g,{}),Object(u.jsx)(v,{})]})]})})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,124)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(m,{initialState:{basket:[],user:null},reducer:P,children:Object(u.jsx)(W,{})})}),document.getElementById("root")),H()},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},83:function(e,t,c){}},[[112,1,2]]]);
//# sourceMappingURL=main.d6b1811f.chunk.js.map