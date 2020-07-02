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
import eleLocale from 'element-ui/lib/locale';
import {Passport} from  './utils/checkLogin'
promise.polyfill()
import 'url-search-params-polyfill';
import VueI18n from 'vue-i18n'
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
/*Vue.use(iView, {
　　i18n: (key, value) => i18n.t(key, value)
　　});
　　Vue.use(ElementUI, {
　　　　i18n: (key, value) => i18n.t(key, value)
　　});*/
Vue.use(VueI18n) ;
Vue.prototype.$http = http
Vue.prototype.messageOpen = function(msg, type) {
  this.$message({
    message: msg,
    type: type
  });
}

const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale
  messages: {
    'zh-CN': require('./common/lang/zh'),   // 中文语言包
    'en-US': require('./common/lang/en')    // 英文语言包
  }
})


var userJsonStr;
if(localStorage.getItem('sessionData')&&localStorage.getItem('sessionData')!='null'){
  userJsonStr=localStorage.getItem('sessionData')
}
if(sessionStorage.getItem('sessionData')){
  userJsonStr = sessionStorage.getItem('sessionData');
  localStorage.setItem('sessionData',userJsonStr);
}
userJsonStr={"flag":"1","error":"","userId":"10","token":"44bee32d9b3e6739df80baed7699eb72","refreshToken":"0f2dc79a3280cb4e672d3eac7f70a1c8","userInfo":{"trueName":"李健","cstnetId":"371246735@qq.com"}}
userJsonStr=JSON.stringify(userJsonStr);
var userEntity =userJsonStr?JSON.parse(userJsonStr):null;
if(userEntity){
  window.SITE_CONFIG['token'] = userEntity.token;
  Vue.prototype.token = userEntity.token;
  Vue.prototype.userInfo = userEntity.userInfo;
  window.SITE_CONFIG['userId'] = userEntity.userId;
}
console.log("window.SITE_CONFIG['userId']",window.SITE_CONFIG['userId'])
$.getScript("http://passport.escience.cn/js/isLogin.do", function(){
  if(data.result&&!localStorage.getItem("ifLogin")){
    localStorage.setItem("ifLogin",true)
    window.location.href = window.SITE_CONFIG['apiURL'] + '/haoweb/web/auth/login'
  }
  if(!data.result){
    _this.userId=null
    localStorage.clear()
    sessionStorage.clear()
  }
})
new Vue({
  el: '#app',
  i18n,
  router,
  components: {
    App
  },
  template: '<App/>'
})
