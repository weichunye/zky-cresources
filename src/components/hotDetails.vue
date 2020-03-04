<template>
	<div class="details">

		<searchTop :newSoftUrl="newSoftUrl" :runUrl="runUrl"></searchTop>
		<!--面包屑-->
		<div class="crumbs">
			<router-link :to="{path:'/'}"><span>首页</span></router-link>
			<span>&nbsp;&nbsp;>&nbsp;</span>
			<span @click="back">{{parentNamenew}}</span><span v-if="parentNamenew">&nbsp;&nbsp;>&nbsp;</span>
			<span>{{softData.softName}} </span>

		</div>
		<!--//面包屑-->
		<!--top-box-->
		<div class="top-box">
			<div class="left-box">

				<h2>{{softData.softName}} 	<span v-if="softData.isHot==1" class="hot-bg">热</span>
   	   					<span v-if="softData.isRecommend==1" class="jian-bg">荐</span>
   	   					<span v-if="softData.isChina==1" class="guo-bg">国</span>
   	   						<span v-if="softData.isEvaluate==1" class="xin-bg">已评估</span></h2>

				<!--		<p v-for="item in labelInfo" class="label">
					{{item.softLabel}}
				</p>-->

				<!--<p @click="addLabelOpen" class="addlabel">
					添加标签
				</p>-->

				<p class="p">
					开源类型: <em>|&nbsp;&nbsp;{{softData.opensourceType}}</em> <span>用户接口： <em>{{softData.userInterface}}</em></span>
				</p>

				<p class="p">应用领域: <em>|&nbsp;&nbsp;{{softData.applicationField}} </em> <span> 收录时间： <em>{{softData.createTime}}</em></span> </p>
				<p class="p">编程语言: <em>|&nbsp;&nbsp;{{softData.programmingLanguage}}</em>
					<span>操作系统： <em>{{softData.operatingSystem}}</em></span>
				</p>
				<p class="p">
					软件版本: <em>|&nbsp;&nbsp;{{softData.softVersion}}</em>
					<span>提&nbsp;交&nbsp;&nbsp;者： <em>{{softData.createUser}}</em></span>
				</p>
				<p class="p">软件类别: <em> |&nbsp;&nbsp;{{softData.softCategoryName}} </em>
					<span v-if="softData.isShowDeveloperName">开&nbsp;发&nbsp;&nbsp;者： <em>{{softData.developers}}</em></span></p>
				<p class="p">软件来源:
					<a target="_blank" :href="newSoftUrl">{{softData.softUrl}}</a>
				</p>
				<ul class="list-tools">
					<li>
						<a @click="saveFollow(1)" href="javascript:;">
							收藏 <span>{{statInfo.collectionNum}} </span>
						</a>
						<!--<a @click="saveFollow(1)" class="added" href="javascript:;">
							已收藏 <span>{{statInfo.collectionNum}} </span>
						</a>-->
					</li>
					<li>
						<a @click="saveFollow(2)" href="javascript:;">
							分享<span>{{statInfo.enjoyNum}} </span>
						</a>

					</li>
					<li v-if="userIdData">
						<a @click="saveFollow(3)" href="javascript:;">
							下载<span>{{statInfo.downloadNum}} </span>
						</a>
					</li>
					<li v-else="">
						<a @click="saveFollow(3)" target="_blank">
							下载<span>{{statInfo.downloadNum}} </span>
						</a>
					</li>
					<li>
						<a href="javascript:;" class="hover">
							浏览<span>{{statInfo.browseNum}} </span>
						</a>
					</li>
				</ul>
				<div v-show="sharShow" class="sharbox">
					<div class="sharbox-over">
						<share :config="config"></share>
					</div>

				</div>

				<button class="btn-zhishu">
  						指数
  					</button>
				<div class="indexbox">
					<div id="oscilloGram" style="height:300px"></div>

				</div>
				<img v-if="softData.softLogo" class="softlogo" :src="softLogoUrl+softData.softLogo" />

				<!--<ul class="list-hub">
					<li>
						<img src="../assets/icon/icon_1.jpg" />
						<p>Watch</p>
						<i></i>
						<p>4</p>
					</li>
					<li>
						<img src="../assets/icon/icon_3.jpg" />
						<p>Star</p>
						<i></i>
						<p>4</p>
					</li>
					<li>
						<img src="../assets/icon/icon_2.jpg" />
						<p>Fort</p>
						<i></i>
						<p>4</p>
					</li>
				</ul>-->
			</div>

			<router-link target="_blank" :to="'activityGame?id='+activityIngId">
				<img class="right-box" src="../assets/bg/advertising_small.jpg" title="活动" />
			</router-link>
		</div>
		<!--//top-box-->
		<!--content-->
		<div class="content center-box">
			<!--left-box-->
			<div class="left-box">
				<el-tabs type="border-card">
					<el-tab-pane label="软件介绍">
						<div v-html="softData.softIntroduce" class="min-height">

						</div>
					</el-tab-pane>
					<!--		<el-tab-pane label="使用手册">
						<div class="min-height">

						</div>
					</el-tab-pane>-->

				</el-tabs>
			</div>
			<!--left-box-->
			<!--right-box-->
			<div class="right-box">
				<h3>热门软件推荐 
				<router-link :to="{path:'/typeList',query:{typeId:'isHot',categoryName:'热门软件',ParentName:'首页'}}"><span>更多</span></router-link>
				</h3>

				<dl v-for="item in hotList" @click="upData(item.id)">
					<dt><span>{{item.softName}}</span> </dt>
					<dd>收藏: <span>{{item.collectionNum}} </span> 下载: <span> {{item.downloadNum}}</span>运行： <span>{{item.runNum}}</span></dd>
				</dl>

			</div>
			<!--right-box-->
			<ul class="bottom-btn-box">
				<li v-if="userIdData&&ifDownWordUrl">
					<a class="DownWorlds" @click="DownWorlds" href="javascript:;">
						<img src="../assets/icon/float_nav_2.png" alt="" />
						<p>文档下载</p>
					</a>
				</li>
				<li v-if="!userIdData&&ifDownWordUrl" @click="ifLogin">
					<a class="DownWorlds" href="javascript:;">
						<img src="../assets/icon/float_nav_2.png" alt="" />
						<p>文档下载</p>
					</a>
				</li>
				<li v-if="userIdData&&runUrl" @click="runThisSoft">
					<img src="../assets/icon/float_nav_3.png" alt="" />
					<p>立即运行</p>
				</li>
				<li v-if="!userIdData&&runUrl" @click="ifLogin">
					<img src="../assets/icon/float_nav_3.png" alt="" />
					<p>立即运行</p>
				</li>
				<li>
					<a target="_blank" :href="newSoftUrl">
						<img src="../assets/icon/float_nav_4.png" alt="" />
						<p>查看源码</p>
					</a>
				</li>

			</ul>

		</div>

		<!--content-->

		<foot></foot>

		<el-dialog title="添加自定义标签" :visible.sync="dialogTit">
			<el-form @submit.native.prevent>
				<p class="softLabellist"><span v-for="item in softLabelArr">
  		{{item}}
  		<em class="labelem"  @click="delLabel($event)"></em>
  	</span></p>
				<el-form-item label="添加标签" :label-width="formLabelWidth">
					<el-input v-model="softLabel" @keyup.enter.native="addSoftLabelArr"></el-input>
					<p>点击“回车”键确定,可添加多个标签</p>
				</el-form-item>

				<el-checkbox-group v-model="checkedCities1" :min="1" :max="3">
					<el-checkbox v-for="city in labelInfoAdd" :label="city.softLabel" :key="city.softLabel">{{city.softLabel}}</el-checkbox>
				</el-checkbox-group>

			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="softClose">取 消</el-button>
				<el-button type="primary" @click="addLabel">确 定</el-button>
			</div>
		</el-dialog>

		<!--提示-->
		<el-dialog title="提示" :visible.sync="dialogPrompt" width="30%">
			<span>{{dialogPromptTitle}}</span>
			<span slot="footer" class="dialog-footer">
   <!-- <el-button @click="dialogPrompt = false">取 消</el-button> -->
    <el-button type="primary" @click="dialogPromptTrue">确 定</el-button>
  </span>
		</el-dialog>
		<!--//提示-->
	</div>
</template>
<!--<script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/buttonLite.js#style=-1&amp;uuid=&amp;pophcol=2&amp;lang=zh"></script><script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/bshareC0.js"></script>-->
<script>
	import searchTop from './searchTop.vue';
	import foot from './footer.vue';
	import baseUrl from '../../config/index.js'
	import Cookies from 'js-cookie';
	export default {
		name: 'hotDetails',
		components: {
			foot,
			searchTop

		},
		data() {
			return {
				softId: '',
				softData: '',
				statInfo: '',
				dialogDelivering: false,
				dialogPrompt: false, //登录
				dialogPromptTitle: '',
				dialogTit: false, //pop
				labelInfo: [],
				categoryInfo: '',
				softLabel: '',
				softLabelArr: [],
				formLabelWidth: '120px',
				checkedCities1: [],
				labelInfoAdd: [],
				hotList: [],
				parentName: '',
				parentNamenew: '',
				sharShow: false,
				activityIngId: '',
				DownWordUrl: '',
				userIdData: '',
				indexeCharts: false,
				softLogoUrl: '',
				ifDownWordUrl:'',
				newSoftUrl: '',
				runUrl: '',
				config: {

					url: window.location.href,
					source: '',
					title: '科研软件开源社区',
					description: '科研软件开源社区',
					image: '', // 图片, 默认取网页中第一个img标签
					sites: ['weibo', 'qq', 'weibo', 'douban', 'douban'], // 启用的站点
					disabled: ['google', 'facebook', 'twitter'], // 禁用的站点
					wechatQrcodeTitle: '微信扫一扫：分享', // 微信二维码提示文字
					wechatQrcodeHelper: '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'

				},
				dialogFeedback: false,
				myChart: '',

				option: {
					title: {
						text: '软件指数',
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						x: 'center',
						data: ['']
					},
					toolbox: {
						show: true,
						feature: {
							mark: {
								show: true
							},
						}
					},
					calculable: true,
					polar: [{
						indicator: [{
								text: '收藏',
								max: 100
							},
							{
								text: '分享',
								max: 100
							},
							{
								text: '下载',
								max: 100
							},
							{
								text: '浏览',
								max: 100
							},
							{
								text: '运行',
								max: 100
							},
						],
						radius: 100
					}],
					series: [{
						name: '软件指数',
						type: 'radar',
						itemStyle: {
							normal: {
								areaStyle: {
									type: 'default'
								}
							}
						},
						data: [{
								value: [],
								name: '软件指数'
							}

						]
					}]
				}

			}
		},
		mounted() {
			//悬浮导航

			var _this = this;
			_this.softId = this.$route.query.id;
			_this.userIdData = this.userId;
			/*console.log("baseUrl",baseUrl)*/
			_this.softLogoUrl = baseUrl.baseUrlImg
			_this.parentNamenew = _this.$route.query.ParentName == "首页" ? '' : _this.$route.query.ParentName;
			_this.activityIng()

			//获取热门软件
			var params1 = new URLSearchParams();
			params1.append("page", 1);
			params1.append("limit", 10);
			_this.axios.post(baseUrl.baseUrl + '/web/soft/queryHotSoftListByCondition', params1)
				.then(function(response) {
					_this.hotList = response.data.page.list;
				})
			//获取标签列表
			_this.getSoftLabel()
			_this.getSoftInfo()
			_this.getSoftLabelList()
			_this.$nextTick(function() {
				_this.myChart = this.$echarts.init(document.getElementById('oscilloGram'))

				_this.myChart.setOption(_this.option);
			})
			_this.$nextTick(function() {
				$('body').unbind().bind('click', function(e) {
					var e = e || e.Element;
					var tar = e.target || e.srcElement;
					if(tar.className == 'btn-zhishu') {
						$('.indexbox').css('opacity', '1')
					} else {
						$('.indexbox').css('opacity', '0')
					}
					/*else if($(event.target).is($('canvas'))) {
						$('.indexbox').css('opacity','1')
					}*/
				})
			})

		},
		methods: {
			getSoftInfo: function() {
				//获取信息
				var _this = this;
				var params = new URLSearchParams();
				params.append("softId", _this.softId);
				params.append("labelNum", 5);
				_this.axios.post(baseUrl.baseUrl + '/web/soft/querySoftInfoById', params)
					.then(function(response) {
						_this.softData = response.data.softInfo;
						_this.statInfo = response.data.statInfo;
						_this.runUrl=response.data.softInfo.runUrl;
						_this.softData.createTime = _this.softData.createTime.substring(0, 10)
						_this.categoryInfo = response.data.categoryInfo;
						_this.newSoftUrl = _this.softData.softUrl.split(",")[0]
						var collectionNumNew=_this.statInfo.collectionNum>100?100:_this.statInfo.collectionNum;
						var enjoyNumNew=_this.statInfo.enjoyNum>100?100:_this.statInfo.enjoyNum;
						var downloadNumNew=_this.statInfo.downloadNum>100?100:_this.statInfo.downloadNum;
						var browseNumNew=_this.statInfo.browseNum>100?100:_this.statInfo.browseNum;
						var runNumNew=_this.statInfo.runNum>100?100:_this.statInfo.runNum;
						_this.option.series[0].data[0].value = [collectionNumNew, enjoyNumNew, downloadNumNew, browseNumNew, runNumNew]
						_this.myChart.setOption(_this.option);

						if(_this.softData.opensourceType == 1) {
							_this.softData.opensourceType = 'Apache许可'
						}
						if(_this.softData.opensourceType == 2) {
							_this.softData.opensourceType = 'MIT许可'
						}
						if(_this.softData.opensourceType == 3) {
							_this.softData.opensourceType = 'ISC许可'
						}
						if(_this.softData.opensourceType == 4) {
							_this.softData.opensourceType = 'BSD许可'
						}
						if(_this.softData.opensourceType == 5) {
							_this.softData.opensourceType = 'GPL许可'
						}
						if(_this.softData.opensourceType == 6) {
							_this.softData.opensourceType = 'Mozilla许可'
						}
						if(_this.softData.opensourceType == 7) {
							_this.softData.opensourceType = 'LGPL许可'
						}
						if(_this.softData.opensourceType == 8) {
							_this.softData.opensourceType = '其他类型'
						}
					})

			},

			//收藏下载操作
			saveFollow: function(type) {
				var _this = this;

				if(!_this.userId) {
					_this.$confirm('请登录', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						var newUrl = baseUrl.baseUrl + '/web/auth/login';
						window.open(newUrl)

					}).catch(() => {

					});
					return false
				}

				_this.axios.defaults.headers.common['token'] = this.token;
				var softFollowHistory = {
					createTime: "",
					id: 0,
					operationType: type,
					softId: _this.softId,
					userId: this.userId,

				}

				_this.axios.post(baseUrl.baseUrl + '/web/user/saveFollow', softFollowHistory)
					.then(function(response) {
						//验证token是否过期
						if(response.data.code == 401) {
							_this.$confirm(response.data.msg, '提示', {
								confirmButtonText: '确定',
								cancelButtonText: '取消',
								type: 'warning'
							}).then(() => {
								sessionStorage.clear()
								var newUrl = baseUrl.baseUrl + '/web/auth/login';
								window.open(newUrl)
								return false;

							}).catch(() => {

							});
						} else if(response.data.code == 0) {
							if(type == 1) {

								_this.statInfo.collectionNum = _this.statInfo.collectionNum + 1;
								_this.$alert(
									response.data.msg, '提示信息', {
										confirmButtonText: '确定',
									});

							}
							if(type == 2 && !_this.sharShow) {
								_this.sharShow = true;
								$('.sharbox-over a').each(function(index, item) {
									$(item).unbind().bind('click', function() {
										_this.statInfo.enjoyNum = _this.statInfo.enjoyNum + 1;
										_this.sharShow = false;
									})
								})

							}
							if(type == 3) {
								_this.statInfo.downloadNum = _this.statInfo.downloadNum + 1;

								var tempwindow = window.open('_blank'); // 先打开页面
								tempwindow.location = _this.newSoftUrl; // 后更改页面地址
								/*var openSoftUrl=_this.newSoftUrl.substr(0,6)
								if(openSoftUrl!='https:'&&openSoftUrl!='http:/'){
									_this.newSoftUrl='http://'+_this.newSoftUrl
								}
								window.open(_this.newSoftUrl,'_blank')*/

								/*'http://'*/
							}

						} else {
							_this.$alert(
								response.data.msg, '提示信息', {
									confirmButtonText: '确定',
								});
						}

					})
					.catch(function(error) {
						console.log(error);
					})

				console.log("this.userId", this.userId)
				console.log("this.userId", this.token)

			},
			//立即运行
			/*runThisSoft: function() {
				var _this = this;
				var params = new URLSearchParams();
				params.append("softId", this.$route.query.id);
				params.append("userId", this.userId);
				_this.axios.defaults.headers.common['token'] = this.token;
				_this.axios.post(baseUrl.baseUrl + '/web/softrun/selectRunFirst', params)
					.then(function(response) {
						console.log("011222", response.data)
						if(response.data.code == 0) {
							_this.$confirm(response.data.msg, '提示', {
								confirmButtonText: '确定',
								cancelButtonText: '取消',
								type: 'success'
							}).then(() => {

								_this.axios.post(baseUrl.baseUrl + '/web/softrun/clickSoftInfoRunTime', params)
									.then(function(response) {
										console.log("6666666666888888", response.data)
										if(response.data.code == 0) {
											window.open(response.data.url)
										} else {
											_this.$alert(response.data.msg, '提示信息', {
												confirmButtonText: '确定',
											});
										}
									})
								return false;

							}).catch(() => {

							});
						} else if(response.data.code == 1) {
							_this.axios.post(baseUrl.baseUrl + '/web/softrun/clickSoftInfoRunTime', params)
								.then(function(response) {
									console.log("6666666666888888", response.data)
									if(response.data.code == 0) {
										_this.$confirm(response.data.msg, '提示', {
											confirmButtonText: '确定',
											cancelButtonText: '取消',
											type: 'warning'
										}).then(() => {
											window.open(response.data.url)
											return false;

										}).catch(() => {

										});
									} else if(response.data.code == -1) {
										
										
										_this.$alert(
									"试用时间已结束，请通过“nienm@sccas.cn”该邮箱联系管理员", '提示信息', {
										confirmButtonText: '确定',
									});
									
									} else {
										_this.$alert(response.data.msg, '提示信息', {
											confirmButtonText: '确定',
										});
									}
								})
							return false;

						} else if(response.data.code == 401) {
							_this.$confirm(response.data.msg, '提示', {
								confirmButtonText: '确定',
								cancelButtonText: '取消',
								type: 'warning'
							}).then(() => {
								sessionStorage.clear()
								var newUrl = baseUrl.baseUrl + '/web/auth/login';
								window.open(newUrl)
								return false;
							}).catch(() => {

							});
						} else {
							_this.$alert(response.data.msg, '提示信息', {
								confirmButtonText: '确定',
							});
						}
					})
					.catch(function(error) {
						console.log(error);
					})
			},*/
				runThisSoft:function(){
				
				var _this = this;
				var params = new URLSearchParams();
				params.append("softId", this.$route.query.id);
				params.append("userId", this.userId);
				_this.axios.post(baseUrl.baseUrl + '/web/softrun/clickSoftInfoRunTime', params)
									.then(function(response) {
										console.log("6666666666888888", response.data)
										window.open(response.data.url)
									})
				
			},


			//添加自定義標簽
			addLabelOpen: function() {
				var _this = this;
				/*	Cookies.get('userId')*/
				if(1) {
					this.dialogTit = true;
					this.getSoftLabel()

				} else {
					_this.dialogPrompt = true;
					_this.dialogPromptTitle = '请先登录'
				}

			},
			upData: function(newId) {
				var _this = this;
				_this.softId = newId;
				_this.$router.push({
					path: '/details',
					query: {
						id: _this.softId,
						ParentName: '首页'
					}
				});
				/*	_this.getSoftInfo()*/

			},
			dialogPromptTrue: function() {
				this.dialogPrompt = false;

			},
			//获取当前正在进行中活动
			activityIng: function() {
				var _this = this;
				_this.axios.get(baseUrl.baseUrl + 'web/activity/config/2')
					.then(function(response) {
						if(response.data.config) {
							_this.activityIngId = response.data.config.paramValue;
						}

						console.log("	_this.activityIngId", _this.activityIngId)

					})
					.catch(function(error) {
						console.log(error);
					})
			},
			getSoftLabelList: function() {
				var _this = this;
				var params2 = new URLSearchParams();
				params2.append("softId", _this.softId);
				params2.append("page", 1);
				params2.append("limit", 5);
				_this.axios.post(baseUrl.baseUrl + '/web/soft/getSoftLabelBySoftId', params2)
					.then(function(response) {
						console.log("标签", response)

						_this.labelInfo = response.data.page.list;
						console.log("标签", response)

					})

			},
			softClose: function() {
				var _this = this;
				_this.softLabelArr = []
				_this.checkedCities1 = []
				_this.dialogTit = false;
			},
			getSoftLabel: function() {
				//获取新增标签多选框框显示
				var _this = this;
				var params2 = new URLSearchParams();
				params2.append("softId", _this.softId);
				params2.append("limit", 10);
				params2.append("page", 1);
				_this.axios.post(baseUrl.baseUrl + '/web/soft/getSoftLabelBySoftId', params2)
					.then(function(response) {
						_this.labelInfoAdd = response.data.page.list;
						console.log("标签", _this.labelInfoAdd)

					})
			},
			ifLogin: function() {
				var _this = this;
				if(!this.userId) {
					_this.$confirm('请登录', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						var newUrl = baseUrl.baseUrl + '/web/auth/login';
						window.open(newUrl)

					}).catch(() => {

					});
				}

			},
			//下载资料文档

			//新增标签输入框
			addSoftLabelArr: function() {
				var _this = this;
				_this.softLabelArr.push(this.softLabel)
				_this.$nextTick(function() {
					var emL = _this.softLabelArr.length;
					console.log("	$('.softLabellist em').eq(emL-1)", $('.labelem'))
					$('.labelem').eq(emL - 1).attr('data-mark', emL)
				})
				this.softLabel = ''
				console.log(",this.softLabelArr", this.softLabelArr)

			},
			delLabel: function() {
				var _this = this;
				var eve = event.currentTarget;
				var dataMark = $(eve).data('mark');
				_this.softLabelArr.splice(dataMark - 1, 1);
				console.log("_this.softLabelArr", _this.softLabelArr)
			},
			addLabel: function() {
				var _this = this;
				var newSoftStr = ''
				for(var i = 0; i < _this.softLabelArr.length; i++) {
					var sCur = _this.softLabelArr[i];
					newSoftStr = newSoftStr + sCur + ','
				}
				for(var i = 0; i < _this.checkedCities1.length; i++) {
					var cur = _this.checkedCities1[i]
					this.softLabelArr = newSoftStr + cur + ','
				}
				console.log("this.softLabelArr", this.softLabelArr)

				var params = new URLSearchParams();
				params.append("userId", this.userId);
				params.append("softId", _this.softId);
				params.append("softLabel", _this.softLabelArr);
				console.log("checkedCities1", _this.checkedCities1);

				_this.axios.post(baseUrl.baseUrl + '/web/soft/addSoftLabel', params)
					.then(function(response) {
						if(response.data.code == 0) {
							_this.$alert(response.data.msg, '提示信息', {
								confirmButtonText: '确定',
							});
							_this.dialogTit = false;
							_this.softLabelArr = []
							_this.checkedCities1 = []
							_this.getSoftLabelList()

						}
						console.log("response", response)

					})
					.catch(function(error) {
						console.log(error);
					})

			},
			back: function() {
				this.$router.go(-1); //返回上一层
			},
			popupMsg: function(val) {
				this.dialogDelivering = false;
			},
			//下载比赛文档
			DownWorlds: function() {
				var _this = this;
				var params = new URLSearchParams();
				params.append("softId", this.$route.query.id);
				_this.axios.post(baseUrl.baseUrl + '/web/soft/getSoftDocPackage', params)
					.then(function(response) {
						console.log("esponse.data", response.data)
						if(response.data.code == 0) {
							_this.DownWordUrl = baseUrl.baseUrlImg + response.data.packageUrl;
							_this.ifDownWordUrl=response.data.packageUrl

						} 

					})
			},

		}
	}
</script>

<style>
	.details {
		background: #f8f8f8;
	}
	
	.details .top-box {
		margin: 10px auto;
		width: 1200px;
	}
	/*
	.details .el-dialog {
		width: 600px;
	}
	
	.details .el-dialog .labelList {
		overflow: hidden;
		padding: 10px 30px;
	}
	
	.details .el-dialog .labelList span {
		margin-right: 10px;
		padding: 2px 8px;
		font-size: 14px;
		line-height: 14px;
		color: #fff;
		background: #52a2c1;
		border-radius: 5px;
	}
	
	.details .el-dialog .softLabellist {
		margin: 10px 0;
	}
	
	.details .el-dialog .softLabellist span {
		position: relative;
		display: inline-block;
		margin: 0 5px;
		padding: 5px 10px;
		font-size: 14px;
		line-height: 14px;
		background: #f0efef;
		border-radius: 10px;
	}
	
	.details .el-dialog .softLabellist span em {
		position: absolute;
		right: -4px;
		top: -4px;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: url(../assets/btn/close_1.jpg) no-repeat;
		cursor: pointer;
	}*/
	
	.details .top-box .left-box {
		position: relative;
		padding: 10px;
		float: left;
		width: 920px;
		height: 260px;
		background: #fff;
	}
	
	.details .bshare-custom {
		position: absolute;
		left: 350px;
		bottom: 20px;
	}
	
	.details .top-box .left-box h2 {
		width: 100%;
		font-size: 24px;
		font-weight: normal;
		line-height: 50px;
		color: #666;
	}
	
	.details .top-box .left-box h2 span {
		margin-left: 10px;
		padding: 0 4px;
		height: 18px;
		font-size: 12px;
		font-style: normal;
		text-align: center;
		line-height: 18px;
		border-radius: 3px;
	}
	
	.details .top-box .left-box .label {
		display: inline-block;
		margin: 5px 10px 10px 0;
		padding: 5px 10px;
		line-height: 12px;
		font-size: 12px;
		color: #fff;
		background: #529fd8;
	}
	
	.details .top-box .left-box .addlabel {
		display: inline-block;
		margin: 5px 10px 10px;
		padding: 7px 10px;
		line-height: 12px;
		font-size: 14px;
		font-weight: bold;
		color: #fff;
		background: #cc0000;
		border-radius: 5px;
		cursor: pointer;
	}
	
	.details .top-box .left-box .p {
		width: 100%;
		font-size: 14px;
		color: #666;
		line-height: 26px;
	}
	
	.details .top-box .left-box .p em {
		font-style: normal;
		margin-left: 5px;
		color: #555;
	}
	
	.details .top-box .left-box .p a {
		color: #c86f60;
		text-decoration: underline;
	}
	
	.details .top-box .left-box .p span {
		float: right;
		margin-right: 10px;
		width: 400px;
		text-align: left;
		font-size: 14px;
		color: #666;
		line-height: 24px;
	}
	
	.details .top-box .left-box .list-tools {
		position: absolute;
		left: 10px;
		bottom: 20px;
		margin-top: 5px;
		overflow: hidden
	}
	
	.sharbox {
		position: absolute;
		left: 90px;
		bottom: 50px;
		background: #fff;
	}
	
	.sharbox .sharbox-over {
		position: relative;
		width: 100%;
	}
	
	.sharbox .sharbox-over .closebtn {
		position: absolute;
		top: -5px;
		right: -5px;
		width: 12px;
		height: 12px;
		background: url(../assets/btn/close_1.jpg) no-repeat;
		cursor: pointer;
	}
	
	.details .top-box .left-box .list-tools li {
		float: left;
		margin-right: 20px;
	}
	
	.details .top-box .left-box .list-tools li a {
		display: inline-block;
		padding-left: 6px;
		color: #666;
		line-height: 26px;
		height: 26px;
		background: #f0efef;
		border-radius: 2px;
	}
	
	.details .top-box .left-box .list-tools li .added {
		color: #fff;
		background: #f4b68d;
	}
	
	.details .top-box .left-box .list-tools li .added span {
		color: #fff;
		border-left: 1px solid #fff;
		background: #f4b68d;
	}
	
	.details .top-box .left-box .list-tools li a:hover {
		color: #d33c45;
	}
	
	.details .top-box .left-box .list-tools li .hover:hover {
		color: #666;
	}
	
	.details .top-box .left-box .list-tools li a span {
		display: inline-block;
		margin-left: 6px;
		padding: 0 8px;
		line-height: 26px;
		height: 26px;
		border-left: 1px solid #dedede;
		background: #f0efef;
	}
	
	.details .top-box .left-box .btn-zhishu {
		position: absolute;
		right: 20px;
		top: 20px;
		padding: 0 8px;
		height: 28px;
		line-height: 28px;
		border-radius: 2px;
		color: #fff;
		background: #fe7300;
	}
	
	.details .top-box .left-box .btn-zhishu:hover {
		background: #32aa66;
	}
	
	.details .top-box .left-box .list-hub {
		position: absolute;
		right: 20px;
		bottom: 20px;
		overflow: hidden;
	}
	
	.indexbox {
		opacity: 0;
	}
	
	.details .top-box .left-box .list-hub li {
		float: left;
		overflow: hidden;
		margin: 0 8px;
		padding: 0 5px;
		height: 26px;
		line-height: 26px;
		border: 1px solid #dedede;
		border-radius: 2px;
	}
	
	.details .top-box .left-box .list-hub li img {
		float: left;
		margin: 5px 5px;
	}
	
	.details .top-box .left-box .list-hub li p {
		float: left;
		font-size: 14px;
		color: #666;
		line-height: 26px;
	}
	
	.details .top-box .left-box .list-hub li i {
		float: left;
		display: inline-block;
		margin: 0 5px;
		width: 1px;
		height: 26px;
		background: #dedede;
	}
	
	.details .top-box .right-box {
		float: right;
		width: 250px;
		height: 280px;
	}
	
	.right-box a {
		display: block;
		height: 46px;
	}
	
	.details .center-box {
		overflow: hidden;
		width: 1200px;
		min-height: 5px;
		background: #fff;
	}
	
	.details .center-box .left-box {
		float: left;
		width: 940px;
	}
	
	.details .center-box .left-box .min-height {
		padding: 20px;
		min-height: 400px;
	}
	
	.details .center-box .left-box .min-height p {
		padding: 10px 5px 0;
		font-size: 14px;
		line-height: 20px;
		color: #333;
		text-indent: 20px;
	}
	
	.details .center-box .left-box .min-height p span {
		font-size: 14px;
	}
	
	.details .center-box .left-box .min-height img {
		margin: 5px auto;
		max-width: 900px;
		height: auto;
	}
	
	.details .center-box .right-box {
		float: right;
		width: 230px;
	}
	
	.details .center-box .right-box h3 {
		margin-top: 20px;
		display: block;
		overflow: hidden;
		width: 100%;
		font-size: 18px;
		color: #666;
		line-height: 30px;
		font-weight: normal;
	}
	
	.details .softlogo {
		position: absolute;
		right: 20px;
		top: 60px;
		width: 100px;
		height: auto;
	}
	
	.details .center-box .right-box h3 span {
		margin-right: 10px;
		float: right;
		font-size: 14px;
		color: #d2525b;
	}
	
	.details .center-box .right-box h3 a {
		float: right;
		display: inline-block;
	}
	
	.details .center-box .right-box dl {
		margin-top: 5px;
		color: #333;
		cursor: pointer;
	}
	
	.details .center-box .right-box dl:hover span,
	.details .center-box .right-box dl:hover dd {
		color: #e33214;
	}
	
	.details .center-box .right-box dl dt {
		font-size: 14px;
		line-height: 26px;
	}
	
	.details .center-box .right-box dl dt span {
		font-weight: bold;
	}
	
	.details .center-box .right-box dl dd {
		font-size: 12px;
		color: #999;
	}
	
	.details .center-box .right-box dl dd span {
		margin: 0 10px 0 5px;
		color: #999;
	}
	
	.details .indexbox {
		position: absolute;
		right: 100px;
		top: 0px;
		width: 360px;
		height: 260px;
		background: #fff;
		z-index: 100;
		background: #fff;
	}
	
		.details .bottom-btn-box {
		margin: 30px 0 50px 100px;
		overflow: hidden;
		text-align: center;
		width: 800px;
	}
	
	.details .bottom-btn-box li {
		overflow: hidden;
		display: inline-block;
		margin-right: 10px;
		width: 150px;
		height: 48px;
		line-height: 48px;
		text-align: center;
		color: #fff;
		font-size: 16px;
		background: #46c3a1;
		border-radius: 5px;
		cursor: pointer;
	}
	
	.details .bottom-btn-box li:hover {
		background: #e26556;
	}
	
	.details .bottom-btn-box li img {
		float: left;
		margin: 6px 15px;
		width: 36px;
	}
	
	.details .bottom-btn-box li p {
		float: left;
		line-height: 48px;
		color: #fff;
	}
</style>