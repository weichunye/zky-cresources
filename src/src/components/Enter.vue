<template>
	<div class="enter">
		<heade></heade>

		<div class="contenttop">
			<!--menu-left-->
			<div class="menu-left">
				<router-link to="allClassify">
					<p class="menu-top">
						全部分类
						<span></span>
					</p>
				</router-link>
				<div v-for="item in menuList" class="menu-li">
					<p>{{item.ctyName}}</p>
					<em></em>
					<div class="menu-left-box">
						<router-link v-for="itemNew in item.sonList" :to="{path:'/list',query:{categoryId:itemNew.id,categoryName:itemNew.ctyName,ParentName:'首页'}}">
							<span>{{itemNew.ctyName}}</span>
						</router-link>
					</div>
				</div>
			</div>

			<!--menu-left-->
			<!--recommend-->
			<div class="recommend">
				<h3>本站推荐
				<router-link :to="{path:'/typeList',query:{typeId:'isRecommend', categoryName:'推荐',ParentName:'首页'}}"><span>更多</span></router-link>
			</h3>
				<div class="con">
					<router-link v-for="item in recommendedList" :to="{path:'/details',query:{id:item.id,ParentName:'首页'}}">
						<dl>
							<dt><p>{{item.softName}}</p>
   	   					<em v-if="item.isHot==1" class="hot-bg">热</em>
   	   					<em v-if="item.isRecommend==1" class="jian-bg">荐</em>
   	   					<em v-if="item.isChina==1" class="guo-bg">国</em>
   	   						<em v-if="item.isEvaluate==1" class="xin-bg">已评估</em>
   	   							
   	   				</dt>
							<dd>
								<p>{{item.softIntroduce}}</p>
							</dd>
							<dd class="dd">
								<span class="span spanbg">{{item.programmingLanguage}}</span> <span class="span">{{item.softVersion}}</span>
								<!--<span class="span">{{thitdItem.userInterface}}</span>--><span class="span"> {{item.opensourceType}}</span>
								<!--<span class="span" v-if="item.operatingSystem"> {{item.operatingSystem}}</span>-->
							</dd>
						</dl>
					</router-link>

				</div>

			</div>
			<!--//recommend-->
			<!--hotbox-->
			<div class="hotbox">
				<h3>热门软件
				<router-link :to="{path:'/typeList',query:{typeId:'isHot',categoryName:'热门软件',ParentName:'首页'}}"><span>更多</span></router-link>
				</h3>
				<div class="con">
					<router-link v-for="item in hotList" :to="{path:'/details',query:{id:item.id,ParentName:'首页'}}">
						<dl>
							<dt><p><span>{{item.softName}}</span></p> </dt>
							<dd>
								<p><img src="../assets/icon/icon_4.png" />{{item.browseNum}}</p>
								<p><img src="../assets/icon/icon_5.png" />{{item.collectionNum}}</p>
								<p><img src="../assets/icon/icon_6.png" />{{item.enjoyNum}}</p>
							</dd>
						</dl>
					</router-link>

				</div>

			</div>
			<!--hotbox-->
		</div>
		<div class="game-banner">
			<router-link target="_blank" :to="'activityGame?id='+activityIngId">
				<div class="button-box">
					<router-link target="_blank" :to="'activityGame?id='+activityIngId+'&&acId=acTd1'">

					</router-link>
					<router-link target="_blank" :to="'activityGame?id='+activityIngId+'&&acId=acTd2'">

					</router-link>
					<router-link target="_blank" :to="'activityGame?id='+activityIngId+'&&acId=acTd3'">

					</router-link>
					<router-link target="_blank" :to="'activityGame?id='+activityIngId+'&&acId=acTd4'">

					</router-link>
				</div>
			</router-link>

		</div>
		<!--分类应用领域-->
		<div id="contype" class="content contype ">
			<div v-for="item in indexSoftList" class="soft-con">
				<h4 class="classfiy">
   			
   			{{item.ctyName}}
   			
   		</h4>
				<el-tabs>
					<el-tab-pane v-for="secondItem in item.sonList" :label="secondItem.ctyName">
						<router-link :to="{path:'/list',query:{categoryId:secondItem.id,categoryName:secondItem.ctyName,ParentName:'首页'}}"><span class="more">更多</span></router-link>
						<div class="el-tab-software">
							<router-link v-if="secondItem.softList.length>0" v-for="thitdItem in secondItem.softList" :to="{path:'/details',query:{id:thitdItem.id,ParentName:'首页'}}">
								<dl class="software-box">
									<dt>
		<h3>{{thitdItem.softName}} 	<span v-if="thitdItem.isHot==1" class="hot-bg">热</span>
   	   					<span v-if="thitdItem.isRecommend==1" class="jian-bg">荐</span>
   	   					<span v-if="thitdItem.isChina==1" class="guo-bg">国</span>
   	   						<span v-if="thitdItem.isEvaluate==1" class="xin-bg">信</span></h3>
		<!--<p class="p">
			<span class="lable">很好</span>
				<span class="lable">可以用</span>
		</p>-->
			<!--<p class="p">版本：{{thitdItem.softVersion}}</p>
			<p class="p">License：{{thitdItem.softLicense}}</p>-->
		<!--	<span  v-if="thitdItem.isEvaluate==1" class="pg-ico">已评估</span>-->
	</dt>
									<dd>{{thitdItem.softIntroduce}}...</dd>
									<dd class="dd">
										<span class="span spanbg">{{thitdItem.programmingLanguage}}</span> <span class="span">{{thitdItem.softVersion}}</span>
										<!--<span class="span">{{thitdItem.userInterface}}</span>--><span class="span"> {{thitdItem.opensourceType}}</span><span class="span" v-if="thitdItem.operatingSystem"> {{thitdItem.operatingSystem}}</span><span class="spantime">{{thitdItem.createTime.substring(0, 10)}}</span><span class="num">{{thitdItem.browseNum}}人浏览</span>
									</dd>
								</dl>
							</router-link>
							<div v-if="secondItem.softList.length==0" class="empty-tit"></div>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>

		</div>
		<!--分类应用领域-->
		<!--竞赛天地-->
		<!--<div class="content">
			<h4 class="classfiy">
   			竞赛天地
   		</h4>
			<el-tabs>
				<el-tab-pane label="进行中">
					<router-link :to="{path:'/activityList',query:{type:'ing'}}"><span class="more">更多</span></router-link>
					<div class="el-tab-activity">
						<router-link target="_blank" v-for="item in activeListIng" :to="{path:'/activityGame',query:{id:item.id}}">
							<dl class="activity-box">
								<dt>
					<h3>{{item.activityName}}<span v-if="item.status==2" class="gamestar">【正在报名】</span><span v-if="item.status==1" class="gamestar">【敬请期待】</span></h3>
					<p>主办方:  {{item.sponsor}}</p>
					<p class="marT-10">报名时问: {{item.joinStartDate}} 一{{item.joinEndDate}}</p>
					<p>比赛时问: {{item.matchStartDate}} 一{{item.matchEndDate}}</p>
				</dt>
								<dd>
									<button v-if="item.status==2" class="btn-game btn-apply">
							立即报名
						</button>
									<button v-if="item.status==1" class="btn-game btn-end">
							敬请期待
						</button>
									<p v-if="item.status==2">距离报名截止时间还有<span> {{item.surplusDays}}</span> 天</p>
									<em>
							竞赛详情>
						</em>
								</dd>
							</dl>
						</router-link>

					</div>
				</el-tab-pane>
				<el-tab-pane label="已结束">
					<router-link :to="{path:'/activityList',query:{type:'end'}}"><span class="more">更多</span></router-link>
					<div class="el-tab-activity">
						<router-link target="_blank" v-for="item in activeEnd" :to="{path:'/activityGame',query:{id:item.id}}">
							<dl class="activity-box">
								<dt>
					<h3>{{item.activityName}}<span class="gameend">【报名结束】</span></h3>
					<p>主办方:  {{item.sponsor}}</p>
					<p class="marT-10">报名时问: {{item.joinStartDate}} 一{{item.joinEndDate}}</p>
					<p>比赛时问: {{item.matchStartDate}} 一{{item.matchEndDate}}</p>
				</dt>
								<dd>
									<button class="btn-game btn-end">
							立即报名
						</button>
									<em>
							竞赛详情>
						</em>
								</dd>
							</dl>
						</router-link>
					</div>
				</el-tab-pane>

			</el-tabs>

		</div>-->
		<!--竞赛天地-->
		<div class="aboutLink">
			<h3>相关链接</h3>
			<div class="linkbox">
				<a href="http://www.cstcloud.cn/" target="_blank"><img src="../assets/img/link_logo_4.png" /></a>
				<a href="http://www.cnic.cn/front/pc.html#/cnicSite/home" target="_blank"> <img src="../assets/img/link_logo_1.png" /></a>
				<a href="http://www.cseep.cn" target="_blank"><img src="../assets/img/link_logo_2.png" /></a>
				<a href="http://www.cstos.cstcloud.cn" target="_blank"><img src="../assets/img/bottom_logo.png" /></a>
				

			</div>

		</div>

		<foot></foot>
	</div>
</template>

<script>
	/*	window.addEventListener('message',function(event) {    
						console.log("event.origin",event.origin)
						console.log('received response:',event.data);  
						
				    if(event.origin !== 'http://192.168.1.21:8090') return; //这个判断一下是不是我这个域名跳转过来的    
				    console.log('received response:',event.data);    
				},false); 

				*/

	import heade from './header.vue';
	import foot from './footer.vue';
	import baseUrl from '../../config/index.js'
	export default {
		name: 'Enter',
		components: {
			heade,
			foot

		},
		data() {
			return {
				menuList: [],
				hotList: [], //热门推荐
				recommendedList: [], //推荐列表
				indexSoftList: [],
				activeListIng: [],
				activeEnd: [],
				activityIngId: '',
				//正在进行的竞赛

			}
		},
		mounted() {
			//获取菜单
			var _this = this;
			//获取菜单列表
			_this.getListData('/web/soft/softCtyAllList', 'menuList', _this.mentList)
			_this.activityIng()
			//获取热门软件
			var params = new URLSearchParams();
			params.append("page", 1);
			params.append("limit", 7);
			_this.axios.post(baseUrl.baseUrl + '/web/soft/queryHotSoftListByCondition', params)
				.then(function(response) {
					_this.hotList = response.data.page.list;
				})
			//获取推荐列表
			var paramscom = new URLSearchParams();
			paramscom.append("page", 1);
			paramscom.append("limit", 8);
			paramscom.append("isRecommend", 1);
			_this.axios.post(baseUrl.baseUrl + '/web/soft/querySoftListByCondition ', paramscom)
				.then(function(response) {
					_this.recommendedList = response.data.page.list;
					for(var i=0; i<_this.recommendedList.length; i++){
						var cur=_this.recommendedList[i];
						cur.softIntroduce=_this.reBytesStr(cur.softIntroduce,108)+'...'
					}
				})

			//首页所有类别展示
			var params1 = new URLSearchParams();
			params1.append("sonCtyNum", 5);
			params1.append("countNum", 5);
			_this.axios.post(baseUrl.baseUrl + '/web/soft/queryIndexCtySoftList', params1)
				.then(function(response) {
					_this.indexSoftList = response.data.list;
					_this.$nextTick(function() {
						for(var i = 0; i < $('.soft-con').length; i++) {
							var curI = $('.soft-con')[i];
							for(var k = 0; k < $(curI).find('.el-tab-software').length; k++) {
								var curK = $(curI).find('.el-tab-software')[k]
								var curJ = $(curK).find('.software-box')
								$(curJ).eq(curJ.length - 1).css('border', '0px solid #fff')
							}
						}
					})
				})
			//活动列表
			//活动正在报名展示
			_this.activeDataList('activeListIng', '/web/activity/queryJoinActivityListByCondition', '1,2')
			//活动已结束展示
			_this.activeDataList('activeEnd', '/web/activity/queryActivityListByCondition ', '3')

		},
		methods: {
			//获取信息列表
			getListData: function(url, ele, fun) {
				var _this = this;
				_this.axios.post(baseUrl.baseUrl + url)
					.then(function(response) {
						_this[ele] = response.data.list;
						if(fun) {
							fun()
						}
					})
			},
			mentList: function() {
				var _this = this;
				_this.$nextTick(function() {
					$('.menu-li').each(function(index, item) {
						$(item).hover(function() {
							$('.menu-left-box').eq(index).show()
							$('.menu-li div').find('menu-left-box').show()
						}, function() {
							$('.menu-left-box').hide()
						});
					})
				})
			},
			//获取当前正在进行中活动
			activityIng: function() {
				var _this = this;
				_this.axios.get(baseUrl.baseUrl + '/web/activity/config/2')
					.then(function(response) {
						if(response.data.config) {
							_this.activityIngId = response.data.config.paramValue;
						}
					})
					.catch(function(error) {
						console.log(error);
					})
			},
			activeDataList: function(ele, url, satus) {
				var _this = this;
				var params = new URLSearchParams();
				params.append("page", 1);
				params.append("limit", 4);
				params.append("status", satus);
				_this.axios.post(baseUrl.baseUrl + url, params)
					.then(function(response) {
						_this[ele] = response.data.page.list;
					})
			},
			reBytesStr: function(str, len) {
				if((!str && typeof(str) != 'undefined')) {
					return '';
				}
				var num = 0;
				var str1 = str;
				var str = '';
				for(var i = 0, lens = str1.length; i < lens; i++) {
					num += ((str1.charCodeAt(i) > 255) ? 2 : 1);
					if(num > len) {
						break;
					} else {
						str = str1.substring(0, i + 1);
					}
				}
				return str;
			}

		}
	}
</script>

<style>
	.enter {
		background: #f2f2f2;
	}
	
	.enter .contype {
		position: relative;
	}
	
	.enter .content {
		overflow: hidden;
		margin: 0 auto 0;
		width: 1200px;
	}
	
	.enter .soft-con {
		float: left;
		margin: 5px;
		padding: 10px 35px;
		width: 520px;
		height: 750px;
		background: #fff;
	}
	
	.enter .contenttop {
		overflow: visible;
		margin: 10px auto 0;
		width: 1200px;
		height: 530px;
	}
	
	.enter .contenttop .menu-left {
		float: left;
		margin-left: 5px;
		width: 190px;
		height: 530px;
		background: #fff;
	}
	
	.enter .contentbg1 {
		padding-bottom: 15px;
		/*background: #faf7f7;*/
	}
	
	.enter .contentbg2 {
		padding-bottom: 15px;
		/*background: #f8f8f2;*/
	}
	
	.enter .contentbg3 {
		padding-bottom: 15px;
		/*	background: #f4f9f3;*/
	}
	
	.enter .contentbg4 {
		padding-bottom: 15px;
		/*background: #f5f6f9;*/
	}
	
	.enter .contentbg5 {
		padding-bottom: 15px;
		/*background: #fbf8fb;*/
	}
	
	.enter .contenttop .menu-left .menu-top {
		width: 100%;
		height: 70px;
		line-height: 90px;
		font-size: 20px;
		color: #fff;
		text-indent: 25px;
		font-weight: bold;
		background: #3c6bf7;
	}
	
	.enter .content .el-tabs--border-card {
		border: none;
		box-shadow: none;
		background: none;
	}
	
	.enter .contenttop .menu-left .menu-li {
		position: relative;
		display: block;
		padding: 6px 15px 6px 25px;
		margin-top: 20px;
		font-size: 14px;
		height: 36px;
		line-height: 36px;
		color: #333;
	}
	
	.enter .contenttop .menu-left .menu-li:hover {
		background: #de482f;
	}
	
	.enter .contenttop .menu-left .menu-li:hover p {
		color: #fff;
	}
	
	.enter .contenttop .menu-left .menu-li:hover em {
		background: url(../assets/icon/arrow_write.png) no-repeat;
	}
	
	.enter .contenttop .menu-left .menu-li p {
		float: left;
		font-size: 16px;
		line-height: 36px;
		color: #333;
	}
	
	.enter .contenttop .menu-left .menu-li em {
		display: block;
		float: right;
		margin: 10px 40px 0 0;
		width: 10px;
		height: 18px;
		background: url(../assets/icon/arrow.png) no-repeat;
	}
	
	.menu-left-box {
		display: none;
		position: absolute;
		left: 190px;
		top: 0;
		padding: 20px 10px;
		width: 600px;
		background: #eef5f9;
		z-index: 2;
	}
	
	.menu-left-box span {
		float: left;
		margin: 0px 12px;
		padding: 3px;
		font-size: 14px;
		color: #666;
		line-height: 20px;
	}
	
	.menu-left-box span:hover {
		background: #e26556;
		color: #fff;
	}
	
	.enter .contenttop .recommend {
		margin: 0 10px;
		float: left;
		width: 740px;
	}
	
	.enter .contenttop .recommend h3,
	.enter .contenttop .hotbox h3 {
		display: block;
		width: 100%;
		height: 70px;
		font-size: 20px;
		color: #fff;
		line-height: 90px;
		text-indent: 15px;
		background: #3c6bf7;
	}
	
	.enter .contenttop .recommend h3 span,
	.enter .contenttop .hotbox h3 span {
		margin: 35px 20px 0 0;
		float: right;
		font-size: 14px;
		line-height: 20px;
		color: #c2d1fc;
		font-weight: normal;
	}
	
	.enter .contenttop .recommend .con {
		overflow: hidden;
		width: 740px;
		height: 460px;
		/*background: #f4f4f4;*/
		border-radius: 2px;
		background: #fff;
		/*border-right: 1px dashed #dedede;*/
	}
	
	.enter .contenttop .recommend .con dl {
		float: left;
		padding: 8px 10px 5px 10px;
		width: 350px;
		border-bottom: 1px solid #eeeeee;
		/*border-right: 1px  dashed #dedede;*/
	}
	
	.enter .contenttop .recommend .con dl:hover p {
		color: #ba7a73;
	}
	
	.enter .contenttop .recommend .con dl dt {
		overflow: hidden;
		width: 100%;
	}
	
	.enter .contenttop .recommend .con dl dt p {
		float: left;
		overflow: hidden;
		margin-right: 10px;
		max-width: 250px;
		font-size: 14px;
		font-weight: normal;
		line-height: 30px;
		color: #4D4D4D;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: bold;
	}
	
	.enter .contenttop .recommend .con dl dt em {
		float: left;
		margin: 5px 5px 0 0;
		padding: 0 2px;
		height: 16px;
		font-size: 12px;
		font-style: normal;
		text-align: center;
		line-height: 16px;
		border-radius: 4px;
	}
	
	.enter .contenttop .recommend .con dl dd p {
		height: 34px;
		font-size: 12px;
		color: #333;
		line-height: 17px;
		overflow: hidden;
		/*        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;*/
	}
	
	.enter .contenttop .recommend .con dl dd span {
		display: inline-block;
		background: #B3B3B3;
		color: #fff;
		margin: 10px 10px 13px 0;
		padding: 1px 3px;
		line-height: 12px;
		font-size: 10px;
		border-radius: 4px;
	}
	
	.enter .contenttop .recommend .con dl dd .spanbg {
		background: #29ABE2;
	}
	
	.enter .contenttop .hotbox {
		float: left;
		width: 236px;
		height: 530px;
		background: #fff;
	}
	
	.enter .contenttop .hotbox .con {
		padding-top: 0px;
		width: 100%;
		/*background: #f4f4f4;*/
		border-radius: 2px;
	}
	
	.enter .contenttop .hotbox .con dl {
		margin: 10px 0 0;
		padding: 2px 20px 0px;
		/*border-bottom: 1px dashed #dedede;*/
	}
	
	.enter .contenttop .hotbox .con dl:hover p,
	.enter .contenttop .hotbox .con dl:hover span {
		color: #ba7a73;
	}
	
	.enter .contenttop .hotbox .con dl dt p {
		width: 200px;
		color: #999;
		font-size: 14px;
		line-height: 24px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.enter .contenttop .hotbox .con dl dt p span {
		font-size: 16px;
		font-weight: bold;
		line-height: 26px;
		color: #808080;
	}
	
	.enter .contenttop .hotbox .con dl dd {
		overflow: hidden;
	}
	
	.enter .contenttop .hotbox .con dl dd p {
		float: left;
		margin: 5px 25px 0px 0;
		font-size: 14px;
		line-height: 20px;
		color: #aaaaaa;
	}
	
	.enter .contenttop .hotbox .con dl dd p img {
		margin-right: 5px;
		width: 14px;
		height: 13px;
	}
	
	.enter .game-banner {
		position: relative;
		margin: 15px auto 10px;
		width: 1190px;
		height: 328px;
		background: url(../assets/bg/index_game_banner.jpg) no-repeat;
		cursor: pointer;
	}
	
	.enter .game-banner a {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.enter .game-banner .button-box {
		position: absolute;
		bottom: 60px;
		right: 46px;
		overflow: hidden;
	}
	
	.enter .game-banner .button-box a {
		display: block;
		margin-left: 18px;
		width: 82px;
		height: 35px;
		float: left;
	}
	
	.enter .game-banner button {
		position: absolute;
		left: 539px;
		top: 104px;
		width: 174px;
		height: 32px;
		line-height: 32px;
		text-align: center;
		border-radius: 30px;
		font-size: 16px;
		color: #d6050b;
		letter-spacing: 2px;
		background: #f9f709;
		cursor: pointer;
	}
	
	.enter .game-banner h4 {
		position: absolute;
		right: 20px;
		top: 100px;
		font-size: 20px;
		font-weight: bold;
		letter-spacing: 1px;
		color: #fff;
	}
	
	.enter .classfiy {
		position: relative;
		padding-top: 5px;
		width: 100%;
		line-height: 30px;
		font-size: 20px;
		font-weight: normal;
		color: #000;
	}
	
	.enter .classfiy span {
		display: inline-block;
		margin: 10px 5px 0 0;
		height: 14px;
		width: 4px;
		background: #e26556;
	}
	
	.enter .el-tabs__item.is-active {
		color: #F15A24;
	}
	
	.enter .el-tabs__active-bar {
		background-color: #F15A24;
	}
	
	.enter .el-tab-pane .more {
		position: absolute;
		right: 10px;
		top: -35px;
		font-size: 14px;
		line-height: 14px;
		color: #e26556;
		z-index: 200;
	}
	
	.enter .el-tabs__content {
		position: relative;
		overflow: visible;
	}
	
	.enter .el-tab-software {
		min-height: auto;
	}
	
	.enter .activity-box {
		width: 1180px;
	}
	
	.enter .activity-box dt {
		width: 780px;
	}
	
	.enter .aboutLink {
		overflow: hidden;
		margin: 15px auto;
		padding: 0 40px;
		width: 1110px;
		height: 140px;
		background: #fff;
	}
	
	.enter .aboutLink h3 {
		font-size: 20px;
		color: #000;
		line-height: 70px;
	}
	
	.enter .aboutLink .linkbox {
		overflow: hidden;
		margin-top: 5px;
	}
	
	.enter .aboutLink .linkbox img {
		float: left;
		margin-right: 40px;
		width: auto;
		height: 40px;
	}
</style>