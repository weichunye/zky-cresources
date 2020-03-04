// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/global.css'
import $ from 'jquery'
/* import '../static/js/Designer.js'//轮播滚动 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'babel-polyfill'
import promise from 'es6-promise'
import echarts from 'echarts'
import common from './util/common'//公用变量以及方法文件
import 'swiper/dist/css/swiper.css';
import http from '@/util/request'
import {parseTime} from '@/utils'
import Share from 'vue-social-share'
import 'vue-social-share/dist/client.css'
promise.polyfill()
import 'url-search-params-polyfill';


import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.use(Share)
Vue.prototype.$echarts = echarts ;
Vue.prototype.common = common;
Vue.prototype.$http = http

//个人中心
// Vue.prototype.userStatus=1;//默认用户为普通角色，1为供应商
// window.SITE_CONFIG['token'] = '5965c1646b0f56745073edf251698237'
// Vue.prototype.userId = '1182580767750885378'
// Vue.prototype.supplierName="测试第三方"
// Vue.prototype.userInfo = {
//   id: 2,
//   trueName: '测试账号',
//   mobile: 13333333333,
//   cstnetId:"1397372495@qq.com",
//   //supplierName="测试第三方"
// }



var userJsonStr = sessionStorage.getItem('sessionData');
var userEntity = JSON.parse(userJsonStr);
if(userEntity){
  window.SITE_CONFIG['token'] = userEntity.token;
  Vue.prototype.userInfo = userEntity.userInfo;
  Vue.prototype.userStatus=userEntity.userStatus
  Vue.prototype.userId = userEntity.userId;
}

Vue.filter('parseTime', function (value, cFormat) {
  return parseTime(value, cFormat)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
