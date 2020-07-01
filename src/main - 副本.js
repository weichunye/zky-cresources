// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/global.css'
import axios from 'axios'
/*import '../static/css/animate.min.css'*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/*import $ from 'jquery'*/
import Cookies from 'js-cookie'
import echarts from 'echarts'
import 'babel-polyfill'
import promise from 'es6-promise'
import Share from 'vue-social-share'
import 'vue-social-share/dist/client.css';
import http from '@/utils/request'
import {parseTime} from '@/utils'
import {Passport} from  './utils/checkLogin'
promise.polyfill()
import 'url-search-params-polyfill';
import Router from 'vue-router'


Vue.filter('parseTime', function (value, cFormat) {
  return parseTime(value, cFormat)
})

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.axios = axios;
Vue.use(Cookies);
Vue.use(Share)
Vue.prototype.$http = http
/*Vue.prototype.common = common*/
Vue.prototype.messageOpen = function(msg, type) {
  this.$message({
    message: msg,
    type: type
  });

}
/*var option={
  umtUrl:'http://passport.escience.cn', //umt的地址，必填
  viewPort:'',						//显示message的地方，可不填
  message:'登陸',					//提示信息的内容，可不填
  loginclass:'miaomiao'
}
var newOption={
  target:'none',   //无作用
  appname:'79845', //应用名称
  theme:'simple'	   //如果在umt里面有定制版，
}
var  passport= new Passport(option)
passport.checkAndLogin( 'http://www.scihub.cstcloud.cn/haoweb/web/auth/callback',newOption)*/
/*http://passport.escience.cn/oauth2/authorize?response_type=code&redirect_uri=http://www.scihub.cstcloud.cn/haoweb/web/auth/callback&client_id=79845&theme=simple*/
/*http://passport.escience.cn/login?WebServerURL=http%3A//www.scihub.cstcloud.cn/haoweb/web/auth/callback&target=none&appname=dct&theme=ddl*/
/*http://passport.escience.cn/login?WebServerURL=http://www.scihub.cstcloud.cn/haoweb/web/auth/callback&target=none&appname=dct&theme=ddl*/

var userJsonStr = sessionStorage.getItem('sessionData');
userJsonStr={"flag":"1","error":"","userId":"10","token":"6b4c377cb6918dbdadaf5fbe2b8f73bf","refreshToken":"118e023b7a4f63835fdec93d6febfae3","userInfo":{"trueName":"李健","cstnetId":"371246735@qq.com"}}
userJsonStr=JSON.stringify(userJsonStr);
localStorage.setItem('sessionData',userJsonStr);
console.log("userJsonStr",userJsonStr)
var userEntity = JSON.parse(userJsonStr);
if(userEntity){
  window.SITE_CONFIG['token'] = userEntity.token;
  Vue.prototype.token = userEntity.token;
  Vue.prototype.userInfo = userEntity.userInfo;
  window.SITE_CONFIG['userId'] = userEntity.userId;
}
window.SITE_CONFIG['token'] ="be498ef936c2e35d25abb9c7e26de8ba";
window.SITE_CONFIG['userId'] = 10;
 Vue.prototype.userName = "temporary";
 Vue.prototype.userInfo = {
       trueName:'索隆',
       cstnetId:'371246735@qq.com'
 }
console.log("Vue.prototype.userId下", Vue.prototype.userId); // => tom
$.getScript("http://passport.escience.cn/js/isLogin.do", function(){
  window.SITE_CONFIG['sessionIsTrue'] = data.result;
  console.log(" window.SITE_CONFIG['sessionIsTrue']", window.SITE_CONFIG['sessionIsTrue'])
  if(!sessionStorage.getItem('ifLocation')&&window.SITE_CONFIG['sessionIsTrue']){
    window.location.href=window.SITE_CONFIG['apiURL'] + '/haoweb/web/auth/login'
    sessionStorage.setItem('ifLocation',true)
  }
  /*if(sessionStorage.getItem('ifLocation')&&window.SITE_CONFIG['sessionIsTrue']){
    console.log("++++++++++++++++++",window.location.href)
  }*/
  if(sessionStorage.getItem('ifLocation')&&!window.SITE_CONFIG['sessionIsTrue']){
    console.log("已经退出了")
    Vue.prototype.userId=null
    sessionStorage.clear()
  }


})

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
