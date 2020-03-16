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
import http from '@/util/request'
import {parseTime} from '@/utils'
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
var userJsonStr = sessionStorage.getItem('sessionData');
var userEntity = JSON.parse(userJsonStr);

if(userEntity){
  window.SITE_CONFIG['token'] = userEntity.token;
Vue.prototype.token = userEntity.token;
Vue.prototype.userInfo = userEntity.userInfo;
Vue.prototype.userId = userEntity.userId;
}


console.log("userEntity", userEntity); // => tom
//获取个人信息
/*window.addEventListener('message', function(e)
	{

		console.log("个人信息数据", e.origin, e.data)
		console.log("个人信息数据新的",e.data)
		var newData=JSON.parse(e.data)
		console.log("newData",newData)
		Vue.prototype.token=newData.token;
		Vue.prototype.userInfo=newData.userInfo;
		Vue.prototype.userId=newData.userId;



	}
)*/

 Vue.prototype.token = "76e3debc2778cf569937e7cf31ba55e8";
Vue.prototype.userId = 10;
Vue.prototype.userName = "temporary";
Vue.prototype.userInfo = {
			trueName:'索隆',
			cstnetId:'371246735@qq.com'
}

/*Vue.prototype.token = "";
Vue.prototype.userId = '';*/
/*Vue.use(heyui)
 */
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})
