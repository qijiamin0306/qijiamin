(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["loginOrReg"],{"1a8a":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mask"},[o("div",{staticClass:"bg"},[o("div",{staticClass:"input-box"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"password",placeholder:"请输入验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),o("button",{staticClass:"code",on:{click:t.getCode}},[t._v("获取验证码")])]),o("div",{staticClass:"bottom"},[o("button",{staticClass:"button login",attrs:{type:"button"},on:{click:function(e){return t.login()}}},[t._v("登录")]),o("button",{staticClass:"button cancel",attrs:{type:"button"},on:{click:function(e){return t.close()}}},[t._v("取消")])])])])},i=[],a=(o("cadf"),o("551c"),o("f751"),o("097d"),{name:"LoginOrReg",data:function(){return{mobile:"",code:""}},methods:{login:function(){var t=this,e=this;this.$ajax({mothed:"post",url:this.GLOBAL.url+"c=members&a=codeLogin",param:{mobile:e.mobile,code:e.code}}).then(function(e){t.$emit("hidden")}).catch(function(t){alert(t)})},close:function(){this.$emit("hidden")},getCode:function(){this.$ajax({mothed:"get",url:this.GLOBAL.url+"c=members&a=send_login_code&mobile="+this.mobile}).then(function(t){alert(t)}).catch(function(t){alert(t)})}}}),c=a,s=(o("dfa1"),o("2877")),l=Object(s["a"])(c,n,i,!1,null,"678e8389",null);e["default"]=l.exports},"9a8e":function(t,e,o){},dfa1:function(t,e,o){"use strict";var n=o("9a8e"),i=o.n(n);i.a}}]);
//# sourceMappingURL=loginOrReg.8dbb99e6.js.map