(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1577:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.removeHash=t.goToAnchor=t.configureAnchors=t.goToTop=void 0;var o=n(1578);Object.defineProperty(t,"goToAnchor",{enumerable:!0,get:function(){return o.updateHash}}),Object.defineProperty(t,"removeHash",{enumerable:!0,get:function(){return o.removeHash}});var a=n(1856);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c(a).default}});var r=c(n(1579));function c(e){return e&&e.__esModule?e:{default:e}}t.goToTop=r.default.goToTop,t.configureAnchors=r.default.configure},1578:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getHash=function(){return decodeURI(window.location.hash.slice(1))},t.updateHash=function(e,t){t?window.location.hash=e:window.location.replace("#"+e)},t.removeHash=function(){history.replaceState("",document.title,window.location.pathname+window.location.search)}},1579:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1857),c=(o=r)&&o.__esModule?o:{default:o},i=n(1858),l=n(1859),s=n(1578);var u={offset:0,scrollDuration:400,keepLastAnchorHash:!1};t.default=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.addListeners=function(){window.addEventListener("scroll",t.scrollHandler,!1),window.addEventListener("hashchange",t.handleHashChange)},this.removeListeners=function(){window.removeEventListener("scroll",t.scrollHandler,!1),window.removeEventListener("hashchange",t.handleHashChange)},this.configure=function(e){t.config=a({},u,e)},this.goToTop=function(){0!==(0,l.getScrollTop)()&&(t.forcedHash=!0,window.scroll(0,0))},this.addAnchor=function(e,n){0===Object.keys(t.anchors).length&&t.addListeners(),t.forceHashUpdate(),t.anchors[e]=n},this.removeAnchor=function(e){delete t.anchors[e],0===Object.keys(t.anchors).length&&t.removeListeners()},this.handleScroll=function(){var e=t.config,n=e.offset,o=e.keepLastAnchorHash,a=(0,l.getBestAnchorGivenScrollLocation)(t.anchors,n);a&&(0,s.getHash)()!==a?(t.forcedHash=!0,(0,s.updateHash)(a,!1)):a||o||(0,s.removeHash)()},this.handleHashChange=function(e){t.forcedHash?t.forcedHash=!1:t.goToSection((0,s.getHash)())},this.goToSection=function(e){var n=t.anchors[e];n?(0,c.default)(n,{duration:t.config.scrollDuration,offset:t.config.offset}):(n=document.getElementById(e))&&(0,c.default)(n,{duration:0,offset:t.config.offset})},this.anchors={},this.forcedHash=!1,this.config=u,this.scrollHandler=(0,i.debounce)(this.handleScroll,100),this.forceHashUpdate=(0,i.debounce)(this.handleHashChange,1)}},1855:function(e,t,n){},1856:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),r=s(a),c=s(n(15)),i=s(n(1)),l=s(n(1579));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.id=e.id||e.children.ref,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"componentDidMount",value:function(){var e=c.default.findDOMNode(this.refs[Object.keys(this.refs)[0]]);l.default.addAnchor(this.id,e)}},{key:"componentWillUnmount",value:function(){l.default.removeAnchor(this.id)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.id;return r.default.cloneElement(t,{ref:t.ref||n})}}]),t}();u.propTypes={children:i.default.node,id:i.default.string},t.default=u},1857:function(e,t,n){e.exports=function(){"use strict";var e=function(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};return function(){function n(e){return e.getBoundingClientRect().top+r}function o(e){d||(d=e),h=l(f=e-d,r,u,m),window.scrollTo(0,h),f<m?requestAnimationFrame(o):(window.scrollTo(0,r+u),a&&s&&(a.setAttribute("tabindex","-1"),a.focus()),"function"==typeof p&&p(),d=!1)}var a=void 0,r=void 0,c=void 0,i=void 0,l=void 0,s=void 0,u=void 0,m=void 0,d=void 0,f=void 0,h=void 0,p=void 0;return function(d){var f=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];switch(m=f.duration||1e3,i=f.offset||0,p=f.callback,l=f.easing||e,s=f.a11y||!1,r=window.scrollY||window.pageYOffset,"undefined"==typeof d?"undefined":t(d)){case"number":a=void 0,s=!1,c=r+d;break;case"object":c=n(a=d);break;case"string":a=document.querySelector(d),c=n(a)}switch(u=c-r+i,t(f.duration)){case"number":m=f.duration;break;case"function":m=f.duration(u)}requestAnimationFrame(o)}}()}()},1858:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=arguments;t.debounce=function(e,t,n){var a=void 0;return function(){var r=o,c=n&&!a;clearTimeout(a),a=setTimeout(function(){a=null,n||e.apply(void 0,r)},t),c&&e.apply(void 0,r)}}},1859:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=t.getScrollTop=function(){return document.body.scrollTop||document.documentElement.scrollTop},a=t.getElementOffset=function(e){var t=o(),n=e.getBoundingClientRect(),a=n.top,r=n.bottom;return{top:Math.floor(a+t),bottom:Math.floor(r+t)}},r=t.doesElementContainScrollTop=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=o(),r=a(e).top+t;return n>=r&&n<r+e.offsetHeight},c=t.checkLocationRelevance=function(e,t){var n=a(e),o=n.top,r=n.bottom,c=a(t),i=c.top,l=c.bottom;return o===i?r===l?e<t:l<r:i>o},i=t.checkElementRelevance=function(e,t){return!!e.contains(t)||!(t.contains(e)||!c(e,t))};t.getBestAnchorGivenScrollLocation=function(e,t){var n=void 0,o=void 0;return Object.keys(e).forEach(function(a){var c=e[a];r(c,t)&&(o&&!i(o,c)||(o=c,n=a))}),n}},1860:function(e,t,n){e.exports=n.p+"static/media/portfolio-1.e4488de0.jpg"},1861:function(e,t,n){e.exports=n.p+"static/media/portfolio-2.0d0012bc.jpg"},1862:function(e,t,n){e.exports=n.p+"static/media/portfolio-3.585324bd.jpg"},1863:function(e,t,n){e.exports=n.p+"static/media/portfolio-4.9c4d3052.jpg"},2505:function(e,t,n){"use strict";n.r(t);var o=n(22),a=n(23),r=n(49),c=n(48),i=n(50),l=n(0),s=n.n(l),u=(n(1576),n(1855),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={sidebarOpen:!1},n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this;return[s.a.createElement("a",{href:"#section",key:"nav-menu-button",className:"menu-toggle rounded",onClick:function(){return e.onMenuClick()}},s.a.createElement("i",{className:"fas ".concat(this.state.sidebarOpen?"fa-times":"fa-bars")})),s.a.createElement("nav",{key:"nav-menu",id:"sidebar-wrapper",className:this.state.sidebarOpen?"active":""},s.a.createElement("ul",{className:"sidebar-nav"},s.a.createElement("li",{className:"sidebar-brand"},s.a.createElement("a",{className:"js-scroll-trigger",href:"#top"},"\xa0")),[{title:"Apresenta\xe7\xe3o",url:"#top"},{title:"Sobre mim",url:"#about"},{title:"Portf\xf3lio",url:"#portfolio"},{title:"Contato",url:"#contact"}].map(function(t){return s.a.createElement("li",{key:t.url,className:"sidebar-nav-item",onClick:function(){return e.onMenuItemClick()}},s.a.createElement("a",{className:"js-scroll-trigger",href:t.url},t.title))})))]}},{key:"onMenuItemClick",value:function(){this.setState({sidebarOpen:!1})}},{key:"onMenuClick",value:function(){this.setState({sidebarOpen:!this.state.sidebarOpen})}}]),t}(l.Component)),m=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={message:null,fetching:!0},n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api").then(function(e){if(!e.ok)throw new Error("status ".concat(e.status));return e.json()}).then(function(t){e.setState({message:t.message,fetching:!1})}).catch(function(t){e.setState({message:"API call failed: ".concat(t),fetching:!1})})}},{key:"render",value:function(){return s.a.createElement("header",{className:"masthead d-flex"},s.a.createElement("div",{className:"container text-center my-auto"},s.a.createElement("h1",{className:"mb-1"},s.a.createElement("p",null,"\xab ",s.a.createElement("strong",null,this.state.fetching?"Buscando mensagem de API":this.state.message)," \xbb")),s.a.createElement("h3",{className:"mb-5"},s.a.createElement("em",null,"Esse \xe9 mais um projeto desenvolvido por")),s.a.createElement("h3",{className:"mb-5"},s.a.createElement("em",null,"Marcio dos Santos Amorim")),s.a.createElement("a",{className:"btn btn-primary btn-xl js-scroll-trigger",href:"#about"},"Saiba mais sobre mim")),s.a.createElement("div",{className:"overlay"}))}}]),t}(l.Component),d=n(1577),f=n.n(d),h=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return s.a.createElement(f.a,{id:"about"},s.a.createElement("section",{className:"content-section bg-light"},s.a.createElement("div",{className:"container text-center"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-10 mx-auto"},s.a.createElement("h2",null,"Sobre mim"),s.a.createElement("p",{className:"lead mb-5"},"Acesse o meu curr\xedculo online ",s.a.createElement("a",{href:"http://mozg.com.br/curriculum/#curriculum"},"Clique aqui"),"!"),s.a.createElement("a",{className:"btn btn-dark btn-xl js-scroll-trigger",href:"#portfolio"},"Veja o meu portf\xf3lio"))))))}}]),t}(l.Component),p=n(1860),b=n.n(p),v=n(1861),g=n.n(v),E=n(1862),y=n.n(E),w=n(1863),j=n.n(w),O=[{imgSrc:b.a,heading:"Isomorphic",description:"Projeto para backend usando React & Node",href:"signin"},{imgSrc:g.a,heading:"Aviator",description:"Projeto de aplicativo de game",href:"aviator"},{imgSrc:y.a,heading:"Weather",description:"Projeto de previs\xe3o do tempo",href:"weather"},{imgSrc:j.a,heading:"MOZG",description:"Projeto voltado para a plataforma Magento",href:"http://mozg.com.br/"}],k=function(){return s.a.createElement(f.a,{id:"portfolio"},s.a.createElement("section",{className:"content-section"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"content-section-heading text-center"},s.a.createElement("h3",{className:"text-secondary mb-0"},"Portf\xf3lio"),s.a.createElement("h2",{className:"mb-5"},"Projetos Recentes")),s.a.createElement("div",{className:"row no-gutters"},O.map(function(e,t){return s.a.createElement("div",{className:"col-lg-6",key:"portfolio_item_".concat(t)},s.a.createElement("a",{className:"portfolio-item",href:e.href},s.a.createElement("span",{className:"caption"},s.a.createElement("span",{className:"caption-content"},s.a.createElement("h2",null,e.heading),s.a.createElement("p",{className:"mb-0"},e.description))),s.a.createElement("img",{className:"img-fluid",src:e.imgSrc,alt:""})))})))))},N=function(){return s.a.createElement("section",{className:"content-section bg-primary text-white"},s.a.createElement("div",{className:"container text-center"},s.a.createElement("h2",{className:"mb-4"},"Me chame no WhatsApp para batermos um papo"),s.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=5511977072339&text=",className:"btn btn-xl btn-light mr-4"},"+55 11 977072339")))},S=[{link:"https://www.facebook.com/mozgbrasil/",icon:"icon-social-facebook"},{link:"https://twitter.com/mozgbrasil",icon:"icon-social-twitter"},{link:"https://github.com/mozgbrasil",icon:"icon-social-github"}],_=function(){return s.a.createElement("footer",{className:"footer text-center"},s.a.createElement("div",{className:"container"},s.a.createElement("ul",{className:"list-inline mb-5"},S.map(function(e,t){return s.a.createElement("li",{className:"list-inline-item",key:"social_".concat(t)},s.a.createElement("a",{className:"social-link rounded-circle text-white mr-3",href:e.link},s.a.createElement("i",{className:e.icon})))})),s.a.createElement("p",{className:"text-muted small mb-0"},"Copyright \xa9 MOZG 2019")))},M=n(17),H=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).handleScroll=n.handleScroll.bind(Object(M.a)(Object(M.a)(n))),n.state={isScrolled:!1},n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return s.a.createElement("a",{className:"".concat(this.state.isScrolled?"fadeIn":""," scroll-to-top rounded"),href:"#top"},s.a.createElement("i",{className:"fas fa-angle-up"}))}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.debounceScroll)}},{key:"debounceScroll",value:function(e){var t=this;setTimeout(function(){return t.handleScroll(e)},300)}},{key:"handleScroll",value:function(e){var t=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||""),o=(t?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft,t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop);this.setState({isScrolled:o>0})}}]),t}(l.Component);console.log("DEBUG_File",(new Error).stack);var T=function(e){function t(e,n){var a;return Object(o.a)(this,t),a=Object(r.a)(this,Object(c.a)(t).call(this,e,n)),console.warn("constructor"),a.elCanvas=null,a}return Object(i.a)(t,e),Object(a.a)(t,[{key:"componentWillMount",value:function(){console.warn("componentWillMount"),document.documentElement.className="no-fouc"}},{key:"componentDidMount",value:function(){console.warn("componentDidMount"),window.addEventListener("load",this.handleLoad)}},{key:"handleLoad",value:function(){console.warn("handleLoad");for(var e=Array.from(document.querySelectorAll(".no-fouc")),t=0;t<e.length;t++){e[t].classList.remove("no-fouc")}}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u,null),s.a.createElement(m,null),s.a.createElement(h,null),s.a.createElement(k,null),s.a.createElement(N,null),s.a.createElement(_,null),s.a.createElement(H,null))}}]),t}(l.Component);t.default=T}}]);
//# sourceMappingURL=83.7fcbbdc2.chunk.js.map