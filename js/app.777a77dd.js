(function(t){function e(e){for(var a,n,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)n=c[u],i[n]&&d.push(i[n][0]),i[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var o=s[n];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},i={app:0},r=[];function n(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c15e9574"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise(function(e,a){s=i[t]=[e,a]});e.push(s[2]=a);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=n(t),r=function(e){o.onerror=o.onload=null,clearTimeout(l);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,n=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");n.type=a,n.request=r,s[1](n)}i[t]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:o})},12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="https://buqiyuan.xyz/pc-mi/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var f=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"1ebb":function(t,e,s){},"2a70":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("home")],1)])},r=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header-nav",{attrs:{homeData:t.homeData}}),s("site-body",{attrs:{homeData:t.homeData}}),s("site-footer",{attrs:{homeData:t.homeData}})],1)},c=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",{staticClass:"header"},[s("div",{staticClass:"container clearfix"},[s("div",{staticClass:"top-bar"},[s("ul",t._l(t.topBar,function(e,a){return s("li",{key:a},[s("a",{attrs:{href:e.href}},[t._v(t._s(e.text))]),s("span",{staticClass:"sep"},[t._v("|")])])}),0),t._m(0),t._m(1)])])]),s("nav",[s("div",{staticClass:"container"},[s("div",{staticClass:"nav-bar"},[t._m(2),s("ul",{staticClass:"header-bar clearfix"},[t._m(3),t._l(t.headerBar,function(e,a){return s("li",{key:a,on:{mouseleave:t.hideNavMenu}},[s("a",{attrs:{href:e.href},on:{mouseover:function(e){return t.showNavMenu(a)}}},[t._v(t._s(e.text))])])})],2)]),s("div",{staticClass:"header-search"},[s("form",{staticClass:"search-form"},[s("input",{staticClass:"search-input",attrs:{type:"search"},on:{focus:t.searchFocus,blur:t.searchBlur}}),s("input",{staticClass:"search-btn",attrs:{value:"",type:"submit"}}),s("span",{staticClass:" iconfont icon-search"}),t._m(4)])])]),s("div",{ref:"navMenu",staticClass:"nav-menu",on:{mouseleave:t.hideNavMenu}},[s("ul",t._l(t.navMenu,function(e,a){return s("li",{key:a},[s("a",{attrs:{href:e.href}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgUrl,expression:"item.imgUrl"}],attrs:{alt:""}}),s("p",{staticClass:"title"},[t._v(t._s(e.title))]),s("p",{staticClass:"price"},[t._v(t._s(e.price))]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.flags,expression:"item.flags"}],staticClass:"flags"},[s("div",{staticClass:"flag"},[t._v("\n                "+t._s(e.flags)+"\n              ")])])])])}),0)])])])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top-bar-cart"},[s("a",{attrs:{href:""}},[t._v("购物车(0)")]),s("div",{staticClass:"cart-menu"},[s("span",[t._v("\n            购物车中还没商品，赶紧去选购吧！\n          ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top-bar-info"},[s("a",{attrs:{href:""}},[t._v("登陆")]),s("span",{staticClass:"sep"},[t._v("|")]),s("a",{attrs:{href:""}},[t._v("注册")]),s("span",{staticClass:"sep"},[t._v("|")]),s("a",{attrs:{href:""}},[t._v("消息通知")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo"},[s("a",{attrs:{href:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"nav-category"},[s("a",{attrs:{href:""}},[t._v("全部商品分类")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-hot-words"},[s("a",[t._v("小米9")]),s("a",[t._v("小米9 SE")])])}],u={name:"Header",props:{homeData:Object},data:function(){return{topBar:[],headerBar:[],navIndex:0,navMenu:[]}},watch:{homeData:function(t){this.topBar=t.topBar,this.headerBar=t.headerBar}},methods:{showNavMenu:function(t){this.navMenu=this.headerBar[t].navMenu,this.navMenu.length>0?this.$refs.navMenu.style.height="230px":this.$refs.navMenu.style.height="0"},hideNavMenu:function(t){-1===t.relatedTarget.className.indexOf("header-bar")&&(this.$refs.navMenu.style.height="0")},searchFocus:function(){document.querySelector(".search-form").style.borderColor="#ff6700",document.querySelector(".search-input").style.borderRight="1px solid #ff6700"},searchBlur:function(){document.querySelector(".search-form").style.borderColor="#ccc",document.querySelector(".search-input").style.borderRight="1px solid #ccc"}}},f=u,d=(s("fa65"),s("2877")),m=Object(d["a"])(f,o,l,!1,null,"f728df26",null),v=m.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"site-body container"},[s("div",{staticClass:"site-carousel-container"},[s("div",{staticClass:"site-category"},[s("ul",{staticClass:"category-list"},t._l(t.categoryList,function(e,a){return s("li",{key:a,staticClass:"category-item"},[s("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(e.title)+"\n              "),s("span",{staticClass:"arrow"})]),s("div",{staticClass:"category-item-child"},[s("div",{staticClass:"flex-box"},t._l(Math.ceil(e.list.length/6),function(a,i){return s("ul",{key:i},t._l(e.list.slice(6*i,6*(i+1)),function(e,a){return s("li",{key:a,staticClass:"child-item"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgUrl,expression:"item3.imgUrl"}],attrs:{alt:""}}),s("span",[t._v(t._s(e.text))])])}),0)}),0)])])}),0)]),s("div",{staticClass:"carousel-wrapper",on:{mouseenter:t.stopCarousel,mouseleave:t.beginCarousel}},[t._l(t.carouselList,function(t,e){return s("div",{key:e,ref:"carouselItem",refInFor:!0,staticClass:"carousel-item"},[s("a",{attrs:{href:"javascript:void(0)"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],attrs:{alt:""}})])])}),s("div",{staticClass:"control-left-arrow",on:{click:function(e){return t.switchCarousel(--t.carouselIndex)}}},[s("div",{staticClass:"arrow-left"})]),s("div",{staticClass:"control-right-arrow",on:{click:function(e){return t.switchCarousel(++t.carouselIndex)}}},[s("div",{staticClass:"arrow-right"})]),s("div",{staticClass:"control-dots"},[s("ul",t._l(t.carouselList.length,function(e,a){return s("li",{key:a,ref:"dots",refInFor:!0,on:{click:function(e){return t.switchCarousel(a)}}})}),0)])],2)]),t._m(0),s("div",{staticClass:"flash-purchase"},[s("div",{staticClass:"title-box box-hd clearfix"},[s("h2",{staticClass:"title"},[t._v("小米闪购")]),s("div",{staticClass:"carousel-control"},[s("a",{staticClass:"control-prev",attrs:{href:"javascript:void(0)"},on:{click:t.prevFlashPurchase}}),s("a",{staticClass:"control-next has",attrs:{href:"javascript:void(0)"},on:{click:t.nextFlashPurchase}})])]),s("div",{staticClass:"flex-box"},[s("div",{staticClass:"flash-purchase-countdown item"},[s("div",{staticClass:"flash-round"},[t._v("\n            20:00场\n          ")]),t._m(1),s("div",{staticClass:"flash-sub-desc"},[t._v("距离结束还有")]),s("div",{staticClass:"countdown-box"},[s("div",{ref:"hour",staticClass:"time-box"},[t._v("01")]),s("div",{staticClass:"time-colon"},[t._v(":")]),s("div",{ref:"minute",staticClass:"time-box"},[t._v("33")]),s("div",{staticClass:"time-colon"},[t._v(":")]),s("div",{ref:"second",staticClass:"time-box"},[t._v("24")])])]),s("div",{staticClass:"carousel-wrapper"},[s("ul",{staticClass:"goods-list"},t._l(t.flashPurchase,function(e,a){return s("li",{key:a,staticClass:"item",style:{borderTop:"1px solid "+t.flashPurchaseColors[Math.floor(Math.random()*t.flashPurchaseColors.length)]}},[s("div",{staticClass:"goods-img"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgUrl,expression:"item.imgUrl"}],attrs:{alt:""}})]),s("p",{staticClass:"title"},[t._v(t._s(e.title))]),s("p",{staticClass:"desc"},[t._v(t._s(e.desc))]),s("p",{staticClass:"price"},[s("span",[t._v(t._s(e.newPrice)+"元")]),s("del",[t._v(t._s(e.oldPrice))])])])}),0)])]),t._m(2)])]),s("div",{staticClass:"home-main"},[s("div",{staticClass:"container"},[t._l(t.bannerItems,function(e,a){return s("div",{key:a,staticClass:"home-brick-box"},[s("div",{staticClass:"box-hd"},[s("div",{staticClass:"clearfix"},[s("h2",{staticClass:"title"},[t._v(t._s(e.title))]),s("div",{staticClass:"more"},["[object String]"==Object.prototype.toString.call(e.more)?s("div",{staticClass:"more-link"},[s("a",{attrs:{href:""}},[t._v(t._s(e.more))])]):t._e(),"[object Array]"==Object.prototype.toString.call(e.more)?s("ul",{staticClass:"more-tabs clearfix"},t._l(e.more,function(a,i){return s("li",{key:i,staticClass:"tab-item",class:{active:t.tabObj[e.id]==i},on:{mouseenter:function(s){return t.tabBrick(e.id,i)}}},[t._v("\n                  "+t._s(a)+"\n                ")])}),0):t._e()])])]),s("div",{staticClass:"box-brick"},[s("ul",{staticClass:"brick-promo-list"},t._l(e.brickItemArr,function(t,e){return s("li",{key:e,staticClass:"brick-item"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],attrs:{alt:""}})])}),0),t._l(e.brickListArr,function(a,i){return s("ul",{directives:[{name:"show",rawName:"v-show",value:t.tabObj[e.id]==i,expression:"tabObj[item.id] == index"}],key:i,staticClass:"brick-list"},[t._l(a.itemArr,function(e,i){return[s("li",{key:i,staticClass:"brick-item"},[a.itemArr.length-1-i>0&&i>=7?[s("ul",{staticClass:"more"},[t._l(a.itemArr.slice(i),function(e,a){return[e.figure?s("li",{key:a,staticClass:"flex-box brick-item"},[s("div",{staticClass:"figure-img flex-right"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.figure,expression:"item.figure"}],attrs:{alt:""}})]),s("div",{staticClass:"flex-left"},[s("div",{staticClass:"title"},[t._v(t._s(e.title))]),s("div",{staticClass:"price"},[t._v("\n                            "+t._s(e.price.now)+"元\n                            "),s("del",[t._v(t._s(e.price.old))])])])]):s("li",{staticClass:"figure-more brick-item"},[s("a",{attrs:{href:""}},[s("div",{staticClass:"left"},[t._v("\n                            "+t._s(e.text)+"\n                            "),s("p",{staticClass:"sub"},[t._v(t._s(e.sub))])]),s("span",{staticClass:"iconfont icon-youjiantou"})])])]})],2)]:i<=7?[s("div",{staticClass:"figure-img"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.figure,expression:"item.figure"}],attrs:{alt:""}})]),s("div",{staticClass:"title"},[t._v(t._s(e.title))]),s("div",{staticClass:"desc"},[t._v(t._s(e.desc))]),s("div",{staticClass:"price"},[s("span",{staticClass:"now-price"},[t._v(t._s(e.price?e.price.now:"")+"元")]),s("del",{staticClass:"old-price"},[t._v(t._s(e.price?e.price.old:""))])]),"[object Object]"==Object.prototype.toString.call(e.flag)?s("div",{staticClass:"flag",class:e.flag.style},[t._v("\n                    "+t._s(e.flag.text)+"\n                  ")]):t._e(),e.review?[""!=e.review.text.trim()?s("div",{staticClass:"review-box"},[s("p",{staticClass:"review"},[t._v(t._s(e.review.text))]),s("p",{staticClass:"author"},[t._v(t._s(e.review.author))])]):t._e()]:t._e()]:t._e()],2)]})],2)})],2),s("div",{staticClass:"home-banner-box"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgUrl,expression:"item.imgUrl"}],attrs:{alt:""}})]),s("div")])}),s("div",{staticClass:"recommend-box"},[s("div",{staticClass:"box-hd"},[s("h2",{staticClass:"title"},[t._v("为您推荐")]),s("div",{staticClass:"control-area"},[s("a",{staticClass:"control-prev",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.switchRecommend("prev")}}}),s("a",{staticClass:"control-next has",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.switchRecommend("next")}}})])]),s("div",{staticClass:"recommend-wrapper"},[s("ul",{ref:"recommedWrapper",staticClass:"recommend-carousel"},t._l(t.recommendList,function(e,a){return s("li",{key:a,staticClass:"recommend-carousel-item"},[s("div",{staticClass:"img-box"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgUrl,expression:"item.imgUrl"}],attrs:{width:"100%",alt:""}})]),s("p",{staticClass:"name"},[t._v(t._s(e.name))]),s("p",{staticClass:"price"},[t._v(t._s(e.price))]),s("p",{staticClass:"tips"},[t._v(t._s(e.tips))]),s("p",{staticClass:"notice"},[t._v(t._s(e.notice))])])}),0)])]),s("div",{staticClass:"content-box"},[t._m(3),s("div",{staticClass:"content-wrapper"},t._l(t.contentList,function(e,a){return s("div",{key:a,staticClass:"content-list"},[s("div",{staticClass:"title"},[t._v(t._s(e.title))]),s("ul",{ref:"contentCarousel",refInFor:!0,staticClass:"content-carousel clearfix",style:{width:296*e.carouselArr.length+"px"}},t._l(e.carouselArr,function(e,a){return s("li",{key:a,staticClass:"content-item"},[s("p",{staticClass:"name"},[t._v(t._s(e.name))]),s("p",{staticClass:"desc"},[t._v(t._s(e.desc))]),s("p",{staticClass:"price"},[t._v(t._s(e.price))]),s("div",{staticClass:"img-box"},[s("img",{attrs:{src:e.figure,alt:""}})])])}),0),s("div",{staticClass:"left-arrow",on:{click:function(e){t.switchContentItem(a,parseInt(t.$refs.contentIndicator[a].querySelector("li.active").dataset.index)-1)}}}),s("div",{staticClass:"right-arrow",on:{click:function(e){t.switchContentItem(a,parseInt(t.$refs.contentIndicator[a].querySelector("li.active").dataset.index)+1)}}}),s("ul",{ref:"contentIndicator",refInFor:!0,staticClass:"indicator-area"},t._l(e.carouselArr.length,function(e,i){return s("li",{key:i,class:{active:t.contentIndicator[a]==i},attrs:{"data-index":i},on:{click:function(e){return t.switchContentItem(a,i)}}},[s("span",{staticClass:"dot"})])}),0)])}),0)])],2)])])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"site-sub"},[s("div",{staticClass:"sub-channel-list sub-item"},[s("ul",[s("li",[s("p",{staticClass:"iconfont icon-history"}),s("p",[t._v("小米秒杀")])]),s("li",[s("p",{staticClass:"iconfont icon-liwu"}),s("p",[t._v("企业团购")])]),s("li",[s("p",{staticClass:"iconfont icon-fma"}),s("p",[t._v("F码通道")])]),s("li",[s("p",{staticClass:"iconfont icon-mifenqia"}),s("p",[t._v("米粉卡")])]),s("li",[s("p",{staticClass:"iconfont icon-yijiuhuanxin"}),s("p",[t._v("以旧换新")])]),s("li",[s("p",{staticClass:"iconfont icon-huafeichongzhi-copy"}),s("p",[t._v("话费充值")])])])]),s("div",{staticClass:"promo-list sub-item"},[s("img",{attrs:{src:"https://i1.mifile.cn/a4/xmad_1564584687704_fIYFd.jpg",alt:""}})]),s("div",{staticClass:"promo-list sub-item"},[s("img",{attrs:{src:"https://i1.mifile.cn/a4/xmad_15632000838536_bfVMh.jpg",alt:""}})]),s("div",{staticClass:"promo-list sub-item"},[s("img",{attrs:{src:"https://i1.mifile.cn/a4/xmad_15604776623629_bRHhl.jpg",alt:""}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flash-img"},[s("img",{attrs:{src:"https://i1.mifile.cn/f/i/2018/mihome/flashpurchase.png",alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"banner-box"},[s("img",{attrs:{src:"https://i1.mifile.cn/a4/xmad_15645848093783_hFAUp.jpg",alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box-hd"},[s("h2",{staticClass:"title"},[t._v("内容")])])}],_=(s("6b54"),s("f576"),s("75fc")),C=(s("5df3"),s("1c4c"),s("ac6a"),s("456d"),{name:"SiteBody",props:{homeData:Object},data:function(){return{carouselIndex:0,carouseTimer:null,categoryList:[],carouselList:[],flashPurchase:[],recommendList:[],contentList:[],flashPurchaseColors:["#ffac13","#e53935","#83c44e","#2196f3","#00c0a5"],bannerItems:[],tabObj:{},contentIndicator:[]}},watch:{homeData:function(t){var e=this;this.categoryList=t.category,this.carouselList=t.carouselImg,this.flashPurchase=t.flashPurchase,this.bannerItems=t.bannerItems,this.recommendList=t.recommendList,this.contentList=t.contentList,0!==Object.keys(t).length&&(this.bannerItems.forEach(function(t){e.$set(e.tabObj,t.id,0)}),this.contentList.forEach(function(t,s){e.$set(e.contentIndicator,s,0)}),this.$nextTick(function(){e.switchCarousel(e.carouselIndex++),e.autoCarousel(),e.setBrickItemStyle()}))}},mounted:function(){var t=this;this.$nextTick(function(){t.countDown()})},methods:{switchCarousel:function(t){var e=this;this.$nextTick(function(){var s=e.carouselList.length-1;(t>s||Math.abs(t)>s)&&(t=e.carouselIndex=0),t<0&&(t=s+t+1);var a=e.$refs.carouselItem,i=e.$refs.dots;Array.from(a).forEach(function(t){t.classList.remove("active")}),Object(_["a"])(i).forEach(function(t){t.classList.remove("active")}),i[t].classList.add("active"),a[t].classList.add("active"),e.carouselIndex=t})},autoCarousel:function(){var t=this;this.carouseTimer=setInterval(function(){t.switchCarousel(++t.carouselIndex)},3e3)},stopCarousel:function(){clearInterval(this.carouseTimer)},beginCarousel:function(){this.autoCarousel()},countDown:function(){var t=this;setInterval(function(){var e=t.$refs.hour,s=t.$refs.minute,a=t.$refs.second,i=(parseInt(e.innerText),parseInt(s.innerText)),r=parseInt(a.innerText);r--,r<=10?(r=r<0?60:r,a.innerText=r.toString().padStart(2,"0")):a.innerText=r,0===r&&(i--,i<=10?(i=i<0?60:i,s.innerText=i.toString().padStart(2,"0")):s.innerText=i)},1e3)},prevFlashPurchase:function(){var t=document.querySelector(".flash-purchase .goods-list"),e=document.querySelectorAll(".flash-purchase .goods-list .item"),s=document.querySelector(".flash-purchase .box-hd .control-prev"),a=document.querySelector(".flash-purchase .box-hd .control-next");if(!(t.scrollLeft<=0)){s.classList.add("has"),a.classList.add("has");var i=t.scrollWidth/e.length*4,r=20,n=setInterval(function(){r-i>-20&&(t.scrollLeft-=i-r,t.scrollLeft<=r&&s.classList.remove("has"),clearInterval(n)),t.scrollLeft-=20,r+=20},10)}},nextFlashPurchase:function(){var t=document.querySelector(".flash-purchase .goods-list"),e=document.querySelectorAll(".flash-purchase .goods-list .item"),s=document.querySelector(".flash-purchase .box-hd .control-prev"),a=document.querySelector(".flash-purchase .box-hd .control-next"),i=t.scrollWidth/e.length*4;if(!(t.scrollLeft>=t.scrollWidth-i)){var r=20;s.classList.add("has"),a.classList.add("has");var n=setInterval(function(){r-i>-20&&(t.scrollLeft+=i-r,t.scrollWidth-t.scrollLeft<=i+r&&a.classList.remove("has"),clearInterval(n)),t.scrollLeft+=20,r+=20},10)}},tabBrick:function(t,e){this.$set(this.tabObj,t,e)},setBrickItemStyle:function(){Object(_["a"])(document.querySelectorAll(".brick-list")).forEach(function(t){var e=t.querySelectorAll("li");e.forEach(function(t){t.querySelector(".more")&&t.querySelector(".more").parentElement.classList.add("no-transition"),t.childElementCount<1&&t.parentElement.removeChild(t)})});var t=this.$refs.recommedWrapper,e=this.$refs.recommedWrapper.querySelectorAll("li"),s=0;Object(_["a"])(e).forEach(function(t){s+=t.offsetWidth+14}),t.style.width=s+"px"},switchRecommend:function(t){var e=this.$refs.recommedWrapper,s=parseInt(e.style.marginLeft||0),a=5*(this.$refs.recommedWrapper.querySelector("li").offsetWidth+14);if("prev"==t){if(s>=0)return;e.style.marginLeft=-(Math.abs(s)-a)+"px",document.querySelector(".recommend-box .control-prev").classList.add("has"),document.querySelector(".recommend-box .control-next").classList.add("has"),Math.abs(s)<=a&&document.querySelector(".recommend-box .control-prev").classList.remove("has")}if("next"==t){var i=parseInt(e.offsetWidth)-a;if(Math.abs(s)>=i)return;e.style.marginLeft=-(a+Math.abs(s))+"px",document.querySelector(".recommend-box .control-prev").classList.add("has"),document.querySelector(".recommend-box .control-next").classList.add("has"),e.offsetWidth-Math.abs(parseInt(e.style.marginLeft))<=a&&document.querySelector(".recommend-box .control-next").classList.remove("has")}},switchContentItem:function(t,e){var s=this.$refs.contentCarousel[t],a=s.parentElement.querySelectorAll(".indicator-area li");if(e>=a.length)return s.parentElement.querySelector(".right-arrow").style.cursor="no-drop",this.$set(this.contentIndicator,t,a.length-1);if(e<0)return s.parentElement.querySelector(".left-arrow").style.cursor="no-drop",this.$set(this.contentIndicator,t,0);s.parentElement.querySelector(".left-arrow").style.cursor="pointer",s.parentElement.querySelector(".right-arrow").style.cursor="pointer",this.$set(this.contentIndicator,t,e);var i=s.querySelector(".content-item").offsetWidth;s.style.marginLeft="-".concat(i*e,"px")}}}),b=C,g=(s("b147"),Object(d["a"])(b,h,p,!1,null,"051eadb0",null)),y=g.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-box"},[s("footer",{staticClass:"container"},[t._m(0),s("div",{staticClass:"footer-links"},[t._l(t.footerLinks,function(e,a){return s("dl",{key:a},[s("dt",[t._v(t._s(e.dt))]),t._l(e.dds,function(e,a){return s("dd",{key:a},[t._v("\n          "+t._s(e)+"\n        ")])})],2)}),t._m(1)],2),t._m(2)]),t._m(3)])},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-service"},[s("ul",{staticClass:"service-list"},[s("li",{staticClass:"service-item"},[t._v("预约维修服务")]),s("li",{staticClass:"service-item"},[t._v("7天无理由退货")]),s("li",{staticClass:"service-item"},[t._v("15天免费换货")]),s("li",{staticClass:"service-item"},[t._v("满150元包邮")]),s("li",{staticClass:"service-item"},[t._v("520余家售后网点")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-contact"},[s("div",{staticClass:"phone"},[t._v("400-100-5678")]),s("p",[t._v("\n          周一至周日 8:00-18:00"),s("br"),t._v("\n          （仅收市话费）\n        ")]),s("a",{staticClass:"staff-service",attrs:{href:""}},[t._v("\n          人工客服\n        ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"site-info"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:"https://s01.mifile.cn/i/logo-footer.png?v2",alt:""}})]),s("div",{staticClass:"info-text"},[s("p",{staticClass:"sites"},[t._v("\n          小米商城|MIUI|米家|米聊|多看|游戏|路由器|米粉卡|政企服务|小米天猫店|隐私政策|商城用户协议|账号协议|问题反馈|廉正举报|诚信合规|Select Region\n        ")]),s("p",[t._v("\n          © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2017]1530-131号\n          （京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京) -非经营性-2014-0090 营业执照 医疗器械公告\n          增值电信业务许可证 网络食品经营备案（京）【2018】WLSPJYBAHF-12 食品经营许可证\n          违法和不良信息举报电话：171-5104-4404 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试\n        ")])]),s("div",{staticClass:"info-links"},[s("img",{attrs:{src:"https://i1.mifile.cn/f/i/17/site/truste.png",alt:""}}),s("img",{attrs:{src:"https://s01.mifile.cn/i/v-logo-2.png",alt:""}}),s("img",{attrs:{src:"https://s01.mifile.cn/i/v-logo-1.png",alt:""}}),s("img",{attrs:{src:"https://s01.mifile.cn/i/v-logo-3.png",alt:""}}),s("img",{attrs:{src:"https://i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png",alt:""}})]),s("div",{staticClass:"slogan"},[s("img",{attrs:{src:"https://s01.mifile.cn/i/slogan2016.png",alt:""}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"back-top",attrs:{href:"#"}},[s("img",{staticClass:"original-img",attrs:{src:"//i1.mifile.cn/f/i/2018/home/totop.png"}}),s("img",{staticClass:"hover-img",attrs:{src:"//i1.mifile.cn/f/i/2018/home/totop_hover.png"}})])}],k={name:"Footer",props:{homeData:Object},data:function(){return{footerLinks:[]}},watch:{homeData:function(t){this.footerLinks=t.footerLinks}}},I=k,L=(s("ce53"),Object(d["a"])(I,x,w,!1,null,"309f4744",null)),S=L.exports,j={components:{headerNav:v,siteBody:y,siteFooter:S},data:function(){return{bottomNav:"recent",homeData:{}}},created:function(){var t=this;this.axios.get("/api/index.json").then(function(e){200===e.data.status?t.homeData=e.data.data:console.log("数据请求失败！请检查链接及参数是否有误")})}},$=j,q=Object(d["a"])($,n,c,!1,null,null,null),E=q.exports,O={components:{home:E}},M=O,P=Object(d["a"])(M,i,r,!1,null,null,null),z=P.exports,T=s("8c4f");a["a"].use(T["a"]);var A=new T["a"]({mode:"history",base:"https://buqiyuan.xyz/pc-mi/",routes:[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),N=s("2f62");a["a"].use(N["a"]);var B=new N["a"].Store({state:{},mutations:{},actions:{}}),D=(s("5a8b"),s("2a70"),s("82da"),s("bc3a")),F=s.n(D),W=s("a7fe"),U=s.n(W),R=s("caf9"),H="https://buqiyuan.xyz/pc-mi/";F.a.defaults.baseURL=H,F.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",a["a"].use(R["a"],{preLoad:1.3,error:"dist/error.png",loading:"https://i1.mifile.cn/f/i/2014/cn/placeholder-220!110x110.png",attempt:1}),a["a"].use(U.a,F.a),new a["a"]({router:A,store:B,render:function(t){return t(z)}}).$mount("#app")},"5a8b":function(t,e,s){},6821:function(t,e,s){},"82da":function(t,e,s){},b147:function(t,e,s){"use strict";var a=s("1ebb"),i=s.n(a);i.a},ce53:function(t,e,s){"use strict";var a=s("6821"),i=s.n(a);i.a},ee2a:function(t,e,s){},fa65:function(t,e,s){"use strict";var a=s("ee2a"),i=s.n(a);i.a}});
//# sourceMappingURL=app.777a77dd.js.map