(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1087:function(e,n,t){"use strict";var a=t(159),r=t(33),o=t(25),i=t(4);function l(){var e=Object(r.a)(["\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ",";\n    vertical-align: middle;\n\n    .ant-checkbox {\n      top: inherit;\n    }\n  }\n"]);return l=function(){return e},e}var c=function(e){return Object(o.b)(e)(l(),Object(i.palette)("text",1))};t.d(n,"a",function(){return p});var s=c(a.a),p=a.a.Group;n.b=s},1389:function(e,n,t){"use strict";t.d(n,"a",function(){return b});var a=t(13),r=t(14),o=t(24),i=t(22),l=t(23),c=t(20),s=t(0),p=t.n(s),d=t(143),m=t(98),u=t(352),g=t(158),h=t(52),b=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(l)))).state={visible:!1,email:"demo@gmail.com",password:"demodemo",confirmLoading:!1},t.showModal=function(){t.setState({visible:!0})},t.handleCancel=function(e){t.setState({visible:!1})},t.handleLogin=function(){var e=t.state,n=e.email,a=e.password;if(n&&a){t.setState({confirmLoading:!0});var r=Object(c.a)(Object(c.a)(t)),o=!1;h.a.login(h.a.EMAIL,{email:n,password:a}).catch(function(e){var n=e&&e.message?e.message:"Sorry Some error occurs";Object(g.c)("error",n),r.setState({confirmLoading:!1}),o=!0}).then(function(e){if(!o)if(!e||e.message){var n=e&&e.message?e.message:"Sorry Some error occurs";Object(g.c)("error",n),r.setState({confirmLoading:!1})}else r.setState({visible:!1,confirmLoading:!1}),t.props.login()})}else Object(g.c)("error","Please fill in email. and password")},t.resetPassword=function(){var e=t.state.email;e?h.a.resetPassword(e).then(function(){return Object(g.c)("success","Password reset email sent to ".concat(e,"."))}).catch(function(e){return Object(g.c)("error","Email address not found.")}):Object(g.c)("error","Please fill in email.")},t}return Object(l.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this;return p.a.createElement("div",null,p.a.createElement(d.b,{type:"primary",onClick:this.showModal,className:"btnFirebase"},this.props.signup?"Sign up with Firebase":"Sign in with Firebase"),p.a.createElement(u.a,{title:"Sign in with Firebase",visible:this.state.visible,confirmLoading:this.state.confirmLoading,onCancel:this.handleCancel,onOk:this.handleLogin,className:"isoFirebaseLoginModal",cancelText:"Cancel",okText:"Login"},p.a.createElement("form",null,p.a.createElement("div",{className:"isoInputWrapper"},p.a.createElement("label",null,"Email"),p.a.createElement(m.d,{ref:function(n){return e.email=n},size:"large",placeholder:"Email",value:this.state.email,onChange:function(n){e.setState({email:n.target.value})}})),p.a.createElement("div",{className:"isoInputWrapper",style:{marginBottom:10}},p.a.createElement("label",null,"Password"),p.a.createElement(m.d,{type:"password",size:"large",placeholder:"Password",value:this.state.password,onChange:function(n){e.setState({password:n.target.value})}})),p.a.createElement("span",{className:"isoResetPass",onClick:this.resetPassword},"Reset Password"))))}}]),n}(s.Component)},1826:function(e,n,t){e.exports=t.p+"static/media/work.56bf9122.jpg"},2681:function(e,n,t){"use strict";t.r(n);var a=t(13),r=t(14),o=t(24),i=t(22),l=t(23),c=t(0),s=t.n(c),p=t(2594),d=t(38),m=t(98),u=t(1087),g=t(143),h=t(53),b=t(54),f=t(382),v=t(52),E=t(1389),w=t(37),x=t(33),j=t(25),y=t(4),O=t(1826),k=t.n(O),L=t(42);function C(){var e=Object(x.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background: url(",") no-repeat center center;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.6);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: ",";\n    right: ",";\n  }\n\n  .isoSignUpContentWrapper {\n    width: 500px;\n    height: 100%;\n    overflow-y: auto;\n    z-index: 10;\n    position: relative;\n  }\n\n  .isoSignUpContent {\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 70px 50px;\n    position: relative;\n    background-color: #ffffff;\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n      padding: 70px 20px;\n    }\n\n    .isoLogoWrapper {\n      width: 100%;\n      display: flex;\n      margin-bottom: 50px;\n      justify-content: center;\n      flex-shrink: 0;\n\n      a {\n        font-size: 24px;\n        font-weight: 300;\n        line-height: 1;\n        text-transform: uppercase;\n        color: ",";\n      }\n    }\n\n    .isoSignUpForm {\n      width: 100%;\n      flex-shrink: 0;\n      display: flex;\n      flex-direction: column;\n\n      .isoInputWrapper {\n        margin-bottom: 15px;\n\n        &:last-child {\n          margin-bottom: 0;\n        }\n\n        input {\n          &::-webkit-input-placeholder {\n            color: ",";\n          }\n\n          &:-moz-placeholder {\n            color: ",";\n          }\n\n          &::-moz-placeholder {\n            color: ",";\n          }\n          &:-ms-input-placeholder {\n            color: ",";\n          }\n        }\n      }\n\n      .isoLeftRightComponent {\n        input {\n          width: calc(100% - 10px);\n\n          &:first-child {\n            margin-right: ",";\n            margin-left: ",";\n          }\n        }\n      }\n\n      .isoHelperWrapper {\n        margin-top: 35px;\n        flex-direction: column;\n      }\n\n      .isoForgotPass {\n        font-size: 12px;\n        color: ",";\n        margin-bottom: 10px;\n\n        &:hover {\n          color: ",";\n        }\n      }\n\n      button {\n        font-weight: 500;\n        width: 100%;\n        height: 42px;\n        border: 0;\n\n        &.btnFacebook {\n          background-color: ",";\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n\n        &.btnGooglePlus {\n          background-color: ",";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n\n        &.btnAuthZero {\n          background-color: ",";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n\n        &.btnFirebase {\n          background-color: ",";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n      }\n    }\n  }\n"]);return C=function(){return e},e}var S=j.b.div(C(),k.a,function(e){return"rtl"===e["data-rtl"]?"inherit":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"inherit"},Object(y.palette)("secondary",2),Object(y.palette)("grayscale",0),Object(y.palette)("grayscale",0),Object(y.palette)("grayscale",0),Object(y.palette)("grayscale",0),function(e){return"rtl"===e["data-rtl"]?"inherit":"20px"},function(e){return"rtl"===e["data-rtl"]?"20px":"inherit"},Object(y.palette)("text",2),Object(y.palette)("primary",0),Object(y.palette)("color",7),Object(y.palette)("color",8),Object(y.palette)("color",9),Object(y.palette)("color",10),Object(y.palette)("color",11),Object(y.palette)("color",12),Object(y.palette)("color",5),Object(y.palette)("color",6)),N=Object(L.a)(S),W=h.a.login,P=b.a.clearMenu,I=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(l)))).state={redirectToReferrer:!1},t.handleLogin=function(){var e=t.props,n=e.login,a=e.clearMenu;n(),a(),t.props.history.push("/dashboard")},t}return Object(l.a)(n,e),Object(r.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.props.isLoggedIn!==e.isLoggedIn&&!0===e.isLoggedIn&&this.setState({redirectToReferrer:!0})}},{key:"render",value:function(){var e=this;return s.a.createElement(N,{className:"isoSignUpPage"},s.a.createElement("div",{className:"isoSignUpContentWrapper"},s.a.createElement("div",{className:"isoSignUpContent"},s.a.createElement("div",{className:"isoLogoWrapper"},s.a.createElement(p.a,{to:"/dashboard"},s.a.createElement(w.a,{id:"page.signUpTitle"}))),s.a.createElement("div",{className:"isoSignUpForm"},s.a.createElement("div",{className:"isoInputWrapper isoLeftRightComponent"},s.a.createElement(m.d,{size:"large",placeholder:"First name"}),s.a.createElement(m.d,{size:"large",placeholder:"Last name"})),s.a.createElement("div",{className:"isoInputWrapper"},s.a.createElement(m.d,{size:"large",placeholder:"Username"})),s.a.createElement("div",{className:"isoInputWrapper"},s.a.createElement(m.d,{size:"large",placeholder:"Email"})),s.a.createElement("div",{className:"isoInputWrapper"},s.a.createElement(m.d,{size:"large",type:"password",placeholder:"Password"})),s.a.createElement("div",{className:"isoInputWrapper"},s.a.createElement(m.d,{size:"large",type:"password",placeholder:"Confirm Password"})),s.a.createElement("div",{className:"isoInputWrapper",style:{marginBottom:"50px"}},s.a.createElement(u.b,null,s.a.createElement(w.a,{id:"page.signUpTermsConditions"}))),s.a.createElement("div",{className:"isoInputWrapper"},s.a.createElement(g.b,{type:"primary"},s.a.createElement(w.a,{id:"page.signUpButton"}))),s.a.createElement("div",{className:"isoInputWrapper isoOtherLogin"},s.a.createElement(g.b,{onClick:this.handleLogin,type:"primary btnFacebook"},s.a.createElement(w.a,{id:"page.signUpFacebook"})),s.a.createElement(g.b,{onClick:this.handleLogin,type:"primary btnGooglePlus"},s.a.createElement(w.a,{id:"page.signUpGooglePlus"})),f.a.isValid&&s.a.createElement(g.b,{onClick:function(){f.a.login(e.handleLogin)},type:"primary btnAuthZero"},s.a.createElement(w.a,{id:"page.signUpAuth0"})),v.a.isValid&&s.a.createElement(E.a,{signup:!0,login:this.handleLogin})),s.a.createElement("div",{className:"isoInputWrapper isoCenterComponent isoHelperWrapper"},s.a.createElement(p.a,{to:"/signin"},s.a.createElement(w.a,{id:"page.signUpAlreadyAccount"})))))))}}]),n}(c.Component);n.default=Object(d.b)(function(e){return{isLoggedIn:null!==e.Auth.idToken}},{login:W,clearMenu:P})(I)}}]);
//# sourceMappingURL=33.d93e1f12.chunk.js.map