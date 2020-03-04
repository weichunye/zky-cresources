<template>
	<div class="header">
		<!--header-top-->
		<div class="header-top">
			<div class="reposbox">
				<img class="logo" src="../assets/img/top_logo.png" alt="logo" />
				<p class="text">
					欢迎来到科学软件开源社区！
				</p>
				<div class="search-box">
					<el-select class="classify" v-model="searchArr.itemType" placeholder="请选择">
						<el-option v-for="item in searchOptions" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<div class="input">

						<el-input @keyup.enter.native="toSearchList" v-model.trim="searchArr.keyword" auto-complete="off"></el-input>

					</div>

					<button @click="toSearchList"></button>

				</div>
					<div v-if="!showLogin">
					<a class="right-text" target="_blank" href="https://passport.escience.cn/regist.jsp">注册 </a>
					<a class="right-text"  :href="toLoginUrl">登录 &nbsp;&nbsp;&nbsp;|</a>
				</div>
				<div  v-else="">
				<a  class="right-text" @click="signOut" href="https://passport.escience.cn/logout?WebServerURL=http://cstsai.cstcloud.cn">退 &nbsp;出 </a>
				<p @click="toPersonalInfo" class="right-text">{{userInfo.trueName}},&nbsp;&nbsp;个人中心&nbsp;&nbsp;&nbsp;|</p>
				</div>
				
			</div>

		</div>
		<!--//header-top-->

	</div>
</template>

<script>
	import baseUrl from '../../config/index.js'
	export default {
		name: 'heade',
		data() {
			return {
				showLogin: false, //是都显示登录
				searchVal: '',
				toLoginUrl: '',
				searchArr: {
					keyword: '',
					itemType: 1,
					page: 1,
				},
			
				searchOptions: [{
						value: 1,
						label: '软件'
					},
					{
						value: 2,
						label: '领域'
					},
					{
						value: 3,
						label: '作者'
					}
				]

			}
		},

		mounted() {
			var _this = this;
		
			_this.toLoginUrl = baseUrl.baseUrl + 'web/auth/login'
				if(this.userId){
				_this.showLogin=true;
			}else{
					_this.showLogin=false;
			}
		
		},

		methods: {
			toPersonalInfo: function() {
				var _this = this
				_this.$router.push({
					path: '/personalInfo'
				});

			},
				signOut:function(){
				sessionStorage.clear()
				
			},
			toSearchList: function() {
				this.$router.push({
					path: '/searchList',
					query: this.searchArr
				});
				this.$emit('serachList', true)
			},

		}
	}
</script>

<style>
	.header .header-top {
		width: 100%;
		height:66px;
		background: #4b505d;
	}
	
	.header .classify {
		float: left;
		width: 80px;
	}
	
	.header .input {
		float: left;
		width: 320px;
		line-height: 32px;
	}
	
	.header .header-top .reposbox {
		overflow: hidden;
		position: relative;
		margin: 0 auto;
		width: 1200px;
		height: 66px;
		font-size: 14px;
		line-height: 66px;
		color: #fff;
	}
	
	.header .header-top .reposbox .logo {
		float: left;
		margin: 10px 10px 0 0;
		height: 46px;
		width: auto;
	}
	
	.header .header-top .reposbox .text {
		float: left;
		font-size: 14px;
		line-height: 66px;
		color: #fff;
	}
	
	.header .header-top .reposbox .search-box {
		overflow: hidden;
		float: left;
		margin: 14px 0 0 260px;
		width: 500px;
		height: 40px;
		
	}
	
	.header .header-top .reposbox .search-box input {
		float: left;
		margin: 0;
		padding: 0 10px;
		width: 320px;
		height: 40px;
		box-sizing: border-box;
		border-radius: 0;
		background: #fff;
		border: 0;
		border-left: 1px solid #dedede;
	}
	
	.header .header-top .reposbox .search-box button {
		display: block;
		float: left;
		width: 60px;
		text-align: center;
		line-height: 40px;
		height: 40px;
		font-size: 16px;
		color: #fff;
		background: url(../assets/bg/search_icon.png) no-repeat;
		box-sizing: border-box;
		border: none;
	}
	
	.header .header-top .reposbox .search-box select {
		float: left;
		margin-right: 10px;
		width: 80px;
		height: 32px;
		border: 1px solid #dede;
	}
	
	.header .header-top .reposbox .right-text {
		float: right;
		margin-right: 10px;
		font-size: 14px;
		line-height: 66px;
		color: #f4f4f4;
		cursor: pointer;
	}
</style>