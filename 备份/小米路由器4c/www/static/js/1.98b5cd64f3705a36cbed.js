webpackJsonp([1,10],{"8UC1":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("lC5x"),a=s.n(i),r=s("J0Oq"),n=s.n(r),o=s("teIl"),d=s("NxGh"),l=s("n8t0"),p=s("PkfQ"),u=s("HbzE"),c=s("Uolk"),m={name:"wireless",data:function(){return{step:4,list:[],formstate:{},sameRouterPwd:!0,routerPwd:null,encryption:"WPA2PSK",wifi:{name:"",ssid:"",nssid:"",nssid5G:"",password:null,initialize:1,locale:"家",nonce:"",newPwd:"",oldPwd:"",encryption:"WPA2PSK",enctype:"AES",channel:null,band:"",nencryption:"mixed-psk",npassword:null},update:!0,passtype:"password",passtype_ap:"password",Router_passtype:"password",result:{},adminPassword:"",clientHeight:document.documentElement.clientHeight,showBtn:!0,currentWifiEncry:!1}},components:{Header:o.a,Loading:d.a,CheckBox:l.a,Subtitle:p.a,Wificomplete:u.default,error2:c.default},methods:{handleBack:function(t){2==t&&this.currentWifiEncry&&t--,this.step=t},updateChange:function(t){this.update=t},getWifiList:function(){var t=this;return n()(a.a.mark(function e(){var s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.axios.getWifiList();case 2:0==(s=e.sent).data.code&&(t.step=1,t.list=s.data.list);case 4:case"end":return e.stop()}},e,t)}))()},goDetail:function(t){this.wifi.ssid=t.ssid,this.wifi.channel=t.channel,this.wifi.band=t.band,this.encryption=t.encryption,"NONE"==t.encryption?(this.currentWifiEncry=!0,this.step=3,this.wifi.nssid=this.wifi.ssid+"_plus"):(this.currentWifiEncry=!1,this.step=2)},switchPwdType:function(t){0==t?this.passtype="password"===this.passtype?"text":"password":1==t?this.Router_passtype="password"===this.Router_passtype?"text":"password":2==t&&(this.passtype_ap="password"===this.passtype_ap?"text":"password")},onSubmit:function(){var t=this;return n()(a.a.mark(function e(){var s,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(2!==t.step){e.next=7;break}if(!t.formstate.name1.$invalid&&!t.formstate.password1.$invalid){e.next=3;break}return e.abrupt("return");case 3:t.step=5,setTimeout(function(){t.step=3,t.wifi.nssid=t.wifi.ssid+"_plus"},1e3),e.next=39;break;case 7:if(3!==t.step){e.next=39;break}if(!t.sameRouterPwd){e.next=14;break}if(t.routerPwd=t.wifi.npassword,!t.formstate.name2.$invalid&&!t.formstate.password2.$invalid){e.next=12;break}return e.abrupt("return");case 12:e.next=16;break;case 14:if(!(t.formstate.name2.$invalid||t.formstate.password2.$invalid||t.formstate.routerPwd.$invalid)){e.next=16;break}return e.abrupt("return");case 16:return t.step=5,t.wifi.name=t.wifi.nssid,t.wifi.nssid5G=t.wifi.nssid+"_5G",t.wifi.nonce=t.common.Encrypt.init(),t.wifi.oldPwd=t.common.Encrypt.oldPwd("admin"),t.wifi.newPwd=t.common.Encrypt.newPwd("admin",t.routerPwd),s={info:"auto_upgrade="+(t.update?1:0)},e.next=25,t.axios.upgrade(s);case 25:return e.sent,e.next=28,t.common.setInitLog({type:0,step:"wireless_relay_done"});case 28:return t.step=6,t.GLOBAL.adminPassword=t.routerPwd,t.adminPassword=t.routerPwd,t.result={ssid2g_ssid:t.wifi.nssid,ssid2g_passwd:t.wifi.npassword},(i=t.common.getCookie("hardware"))&&"R3L"!=i&&"R4C"!=i&&"R1CL"!=i&&"R4CM"!=i&&(t.result.ssid5g_ssid=t.wifi.nssid+"_5G",t.result.ssid5g_passwd=t.wifi.npassword),t.wifi.password||(t.wifi.encryption="NONE"),e.next=37,t.axios.postWireless(t.wifi);case 37:e.sent.data.code;case 39:case"end":return e.stop()}},e,t)}))()}},created:function(){this.getWifiList()},mounted:function(){var t=this;window.onresize=function(){t.clientHeight>document.documentElement.clientHeight?t.showBtn=!1:t.showBtn=!0}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wireless"},[s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.step||2===t.step||3===t.step,expression:"step ===1|| step ===2 || step ===3"}],staticClass:"container"},[1===t.step?s("div",{staticClass:"step2"},[s("Header",{attrs:{name:"可中继WiFi列表",step:t.step},on:{goBack:t.handleBack}}),t._v(" "),s("div",{staticClass:"wifilist width100"},[s("ul",t._l(t.list,function(e,i){return s("li",{key:i,on:{click:function(s){t.goDetail(e)}}},[t._v(t._s(e.ssid)),s("span",{staticClass:"iconfont icon-fanhui"})])}))])],1):t._e(),t._v(" "),2===t.step||3===t.step?s("div",{staticClass:"step3 container"},[s("Header",{attrs:{name:"无线中继模式",step:t.step},on:{goBack:t.handleBack}}),t._v(" "),s("vue-form",{staticClass:"width100",attrs:{state:t.formstate},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("div",{directives:[{name:"show",rawName:"v-show",value:2===t.step,expression:"step===2"}],staticClass:"form"},[s("Subtitle",{attrs:{name:"请输入需中继WiFi的密码"}}),t._v(" "),s("validate",{attrs:{tag:"label"}},[s("div",{staticClass:"item item1"},[s("label",{attrs:{for:"name1"}},[t._v("WiFi名称:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.wifi.ssid,expression:"wifi.ssid",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"XIAOMI_1A1A",name:"name1",readonly:"",autocomplete:"off",required:""},domProps:{value:t.wifi.ssid},on:{input:function(e){e.target.composing||t.$set(t.wifi,"ssid",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),s("validate",{attrs:{tag:"label"}},[s("div",{staticClass:"item item2"},[s("label",{attrs:{for:"password1"}},[t._v("WiFi密码:")]),t._v(" "),"NONE"!=t.encryption?s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.wifi.password,expression:"wifi.password",modifiers:{trim:!0}}],attrs:{placeholder:"WiFi密码至少8位",name:"password1",type:t.passtype_ap,wifipassword:"",minlength:"8",maxlength:"63",required:""},domProps:{value:t.wifi.password},on:{input:function(e){e.target.composing||t.$set(t.wifi,"password",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}):t._e(),t._v(" "),"NONE"==t.encryption?s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.wifi.password,expression:"wifi.password",modifiers:{trim:!0}}],attrs:{placeholder:"WiFi密码至少8位",name:"password1",type:t.passtype_ap},domProps:{value:t.wifi.password},on:{input:function(e){e.target.composing||t.$set(t.wifi,"password",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}):t._e(),t._v(" "),s("span",{staticClass:"iconfont icon-yanjing-kejian",class:{blue:"text"===t.passtype_ap},on:{click:function(e){t.switchPwdType(2)}}})])]),t._v(" "),s("field-messages",{staticClass:"error-tip",attrs:{name:"name1",show:"$touched || $submitted"}},[s("div",{attrs:{slot:"required"},slot:"required"},[t._v("*WiFi名称不能为空")])]),t._v(" "),s("field-messages",{staticClass:"error-tip",attrs:{name:"password1",show:"$touched || $submitted"}},[s("div",{attrs:{slot:"required"},slot:"required"},[t._v("*WiFi密码不能为空")]),t._v(" "),s("div