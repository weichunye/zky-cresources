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

				<h2>{{softData.softName}} 	<sup v-if="softData.isHot==1" class="sub">热</sup>
   	   					<sup v-if="softData.isRecommend==1" class="suba">荐</sup>
   	   					<sup v-if="softData.isChina==1" class="subchania">国</sup>
   	   						<sup v-if="softData.isEvaluate==1" class="subping">信</sup></h2>

				<!--		<p v-for="item in labelInfo" class="label">
					{{item.softLabel}}
				</p>-->

				<!--<p @click="addLabelOpen" class="addlabel">
					添加标签
				</p>-->

				<p class="p">
          {{$t('lang.softwaretype')}}: <em>|&nbsp;&nbsp;{{softData.softType}}</em>
<!--          <span>用户接口： <em>{{softData.userInterface}}</em></span>-->
          <span>  {{$t('lang.Inclusiontime')}}： <em>{{softData.createTime}}</em></span>
				</p>
        <p class="p">
          {{$t('lang.Chargemethod')}}: <em> |&nbsp;&nbsp;{{softData.chargingMethod}} </em>
          <span>  {{$t('lang.operatingsystem')}}： <em>{{softData.operatingSystem}}</em></span>
        </p>

				<p class="p">  {{$t('lang.academicarea')}}: <em>|&nbsp;&nbsp;{{softData.applicationField}} </em>
<!--          <span> 收录时间： <em>{{softData.createTime}}</em></span>-->
          <span> {{$t('lang.Submitter')}}： <em>{{softData.createUser}}</em></span>
        </p>
				<p class="p">{{$t('lang.Programminglanguage')}}: <em>|&nbsp;&nbsp;{{softData.programmingLanguage}}</em>
<!--					<span>操作系统： <em>{{softData.operatingSystem}}</em></span>-->
          <span v-if="softData.developers">{{$t('lang.Developer')}}： <em>{{softData.developers}}</em></span>
				</p>
				<p class="p">
          {{$t('lang.Softwareversion')}}: <em>|&nbsp;&nbsp;{{softData.softVersion}}</em>
<!--					<span>提&nbsp;交&nbsp;&nbsp;者： <em>{{softData.createUser}}</em></span>-->
          <span v-if="softData.opensourceType != ''">{{$t('lang.Opensourcetype')}}： <em>{{softData.opensourceType}}</em></span>
				</p>
				<p class="p"> {{$t('lang.Developmentarea')}}: <em> |&nbsp;&nbsp;{{softData.softCategoryName}} </em>
<!--					<span v-if="softData.isShowDeveloperName">开&nbsp;发&nbsp;&nbsp;者： <em>{{softData.developers}}</em></span>-->

        </p>
				<p v-if="softData.softUrl" class="p">{{$t('lang.Softwaresource')}}:
					<a target="_blank" :href="newSoftUrl">{{softData.softUrl}}</a>
				</p>
     <!--   <p class="p">跳转地址:
					<a target="_blank" :href="softData.jumpUrl">{{softData.jumpUrl}}</a>
				</p>-->
        <a   v-if="softData.jumpUrl" class="to-soft-link" target="_blank" :href="softData.jumpUrl"> <i class="el-icon-link"></i>{{$t('lang.Jumplink')}}</a>
				<ul class="list-tools">
					<li>
						<a @click="saveFollow(1)" href="javascript:;">
              {{$t('lang.Collect')}} <span>{{statInfo.collectionNum}} </span>
						</a>
						<!--<a @click="saveFollow(1)" class="added" href="javascript:;">
							已收藏 <span>{{statInfo.collectionNum}} </span>
						</a>-->
					</li>
					<li>
						<a @click="saveFollow(2)" href="javascript:;">
              {{$t('lang.share')}}<span>{{statInfo.enjoyNum}} </span>
						</a>

					</li>
					<li v-if="userIdData">
						<a @click="saveFollow(3)" href="javascript:;">
              {{$t('lang.download')}}<span>{{statInfo.downloadNum}} </span>
						</a>
					</li>
					<li v-else="">
						<a @click="saveFollow(3)" target="_blank">
              {{$t('lang.download')}}<span>{{statInfo.downloadNum}} </span>
						</a>
					</li>
					<li>
						<a href="javascript:;" class="hover">
              {{$t('lang.Browse')}}<span>{{statInfo.browseNum}} </span>
						</a>
					</li>
				</ul>
				<div v-show="sharShow" class="sharbox">
					<div class="sharbox-over">
						<share :config="config"></share>
					</div>
				</div>
				<button class="btn-zhishu">
          {{$t('lang.index')}}
  					</button>
				<div class="indexbox">
					<div id="oscilloGram" style="height:300px"></div>
				</div>
<!--				<img v-if="softData.softLogo" class="softlogo" :src="softLogoUrl+'/'+softData.softLogo" />-->
        <img class="softlogo" v-if="softData.softLogo" :src="imgUrl+'/'+softData.softLogo" />
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
      <div class="right-box">
        <h3> {{$t('lang.Popularsoftwarerecommendation')}}
          <router-link :to="{path:'/typeList',query:{typeId:'isHot',categoryName:'热门软件',ParentName:'首页'}}"><span>更多</span></router-link>
        </h3>

        <dl v-for="(item , index) in hotList" @click="upData(item.id)" :key="index" :style="{'border-width':index==hotList.length-1?0:'1px'}">
          <dt ><span>{{item.softName}}</span> </dt>
        <!--  <dd>收藏: <span>{{item.collectionNum}} </span> 下载: <span> {{item.downloadNum}}</span>运行： <span>{{item.runNum}}</span></dd>-->
        </dl>

      </div>
		</div>
		<!--//top-box-->
		<!--content-->
		<div class="content center-box">
			<!--left-box-->
			<div class="left-box">
				<el-tabs type="border-card">
					<el-tab-pane :label="$t('lang.Softwareintroduction')">
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

			<!--right-box-->
			<ul class="bottom-btn-box">
			<!--	<li v-if="userIdData&&ifDownWordUrl">
					<a class="DownWorlds" :href="DownWordUrl">
						<img src="../assets/icon/float_nav_2.png" alt="" />
						<p>文档下载</p>
					</a>
				</li>
				<li v-if="!userIdData&&ifDownWordUrl" @click="ifLogin">
					<a class="DownWorlds" href="javascript:;">
						<img src="../assets/icon/float_nav_2.png" alt="" />
						<p>文档下载</p>
					</a>
				</li>-->
				<li v-if="userIdData&&runUrl" @click="runThisSoft">
					<img src="../assets/icon/float_nav_3.png" alt="" />
					<p>{{$t('lang.Runimmediately')}}</p>
				</li>
				<li v-if="!userIdData&&runUrl" @click="ifLogin">
					<img src="../assets/icon/float_nav_3.png" alt="" />
          <p>{{$t('lang.Runimmediately')}}</p>
				</li>
				<li v-if="newSoftUrl != ''">
					<a target="_blank" :href="newSoftUrl">
						<img src="../assets/icon/float_nav_4.png" alt="" />
						<p>{{$t('lang.Viewsourcecode')}}</p>
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
		name: 'detailsPage',
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
        userId:'',
				indexeCharts: false,
				softLogoUrl: '',
				ifDownWordUrl: '',
				newSoftUrl: '',
				runUrl: '',
        imgUrl:window.SITE_CONFIG['imgURL'],
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
			this.softId = this.$route.query.id;
			this.userIdData = window.SITE_CONFIG['userId']
			this.userId=window.SITE_CONFIG['userId']
			/*console.log("baseUrl",baseUrl)*/
			this.softLogoUrl = baseUrl.baseUrlImg
			this.parentNamenew = this.$route.query.ParentName == "首页" ? '' : this.$route.query.ParentName;
			this.activityIng()

			//获取热门软件
      this.getHotSoft(3)

			//获取标签列表
			/*this.getSoftLabel()*/
			this.getSoftInfo()
			/*this.getSoftLabelList()*/
			/*this.DownWorlds()*/
			this.$nextTick(function() {
				this.myChart = this.$echarts.init(document.getElementById('oscilloGram'))

				this.myChart.setOption(this.option);
			})
			this.$nextTick(function() {
				$('body').unbind().bind('click', function(e) {
					var e = e || e.Element;
					var tar = e.target || e.srcElement;
					if(tar.className == 'btn-zhishu') {
						$('.indexbox').css({'opacity': '1','z-index':'100'})
					} else {
						$('.indexbox').css({'opacity': '0','z-index':'0'})
					}
					/*else if($(event.target).is($('canvas'))) {
						$('.indexbox').css('opacity','1')
					}*/
				})
			})

		},
    watch: {
      '$route'(to, from) {
        this.softId=this.$route.query.id?this.$route.query.id:''
        console.log("监控")
        this.getSoftInfo()
        //监控路由，更新tab
      }
    },
		methods: {
			getSoftInfo: function() {
				//获取信息
				var params = new URLSearchParams();
				params.append("softId", this.softId);
				params.append("labelNum", 5);
				this.$http.post( '/haoweb/web/soft/querySoftInfoById', params)
					.then((response)=>{
					  console.log("response********",response)
						this.softData = response.data.softInfo;
						this.statInfo = response.data.statInfo;
						this.runUrl = response.data.softInfo.runUrl;
						this.softData.createTime = this.softData.createTime.substring(0, 10)
						this.categoryInfo = response.data.categoryInfo;
						this.newSoftUrl = this.softData.softUrl.split(",")[0]
						var collectionNumNew = this.statInfo.collectionNum > 100 ? 100 : this.statInfo.collectionNum;
						var enjoyNumNew = this.statInfo.enjoyNum > 100 ? 100 : this.statInfo.enjoyNum;
						var downloadNumNew = this.statInfo.downloadNum > 100 ? 100 : this.statInfo.downloadNum;
						var browseNumNew = this.statInfo.browseNum > 100 ? 100 : this.statInfo.browseNum;
						var runNumNew = this.statInfo.runNum > 100 ? 100 : this.statInfo.runNum;

						this.option.series[0].data[0].value = [collectionNumNew, enjoyNumNew, downloadNumNew, browseNumNew, runNumNew]
						this.myChart.setOption(this.option);

						if(this.softData.opensourceType == 1) {
							this.softData.opensourceType = 'Apache许可'
						}
						if(this.softData.opensourceType == 2) {
							this.softData.opensourceType = 'MIT许可'
						}
						if(this.softData.opensourceType == 3) {
							this.softData.opensourceType = 'ISC许可'
						}
						if(this.softData.opensourceType == 4) {
							this.softData.opensourceType = 'BSD许可'
						}
						if(this.softData.opensourceType == 5) {
							this.softData.opensourceType = 'GPL许可'
						}
						if(this.softData.opensourceType == 6) {
							this.softData.opensourceType = 'Mozilla许可'
						}
						if(this.softData.opensourceType == 7) {
							this.softData.opensourceType = 'LGPL许可'
						}
						if(this.softData.opensourceType == 8) {
							this.softData.opensourceType = '其他类型'
						}
					})
			},
     //获取热门数据
      getHotSoft(type){
        var params = new URLSearchParams();
        params.append("type", 2);
        params.append("limit",8);
        params.append("page", 1);
        this.$http.post('/haoweb/web/soft/querySoftListByConditionForBrowseNum',params)
          .then(({data:res })=>{
            this.hotList=res.page.records
            // this.recommendedList=res.page.records
            console.log("推荐",res)
          })
      },
			runThisSoft: function() {
			  console.log("11111111111111")
				var params = new URLSearchParams();
				params.append("softId", this.$route.query.id);
				params.append("userId", this.userId);
				this.axios.post(window.SITE_CONFIG['apiURL'] + '/haoweb/web/softrun/clickSoftInfoRunTime', params)
					.then(function(response) {
						window.open(response.data.url)
					})
			},
			//收藏下载操作
			saveFollow: function(type) {
			  var _this=this;
				var softFollowHistory = {
					createTime: "",
					id: 0,
					operationType: type,
					softId: this.softId,
					userId: this.userId,

				}

				this.$http.post('/haoweb/web/user/saveFollow', softFollowHistory)
					.then(function(response) {
						//验证token是否过期
		       if(response.data.code == 0) {
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
							  console.log("this.statInfo",_this.statInfo)
                _this.statInfo.downloadNum = _this.statInfo.downloadNum + 1;

								var tempwindow = window.open('_blank'); // 先打开页面
								tempwindow.location = _this.newSoftUrl; // 后更改页面地址
								/*var openSoftUrl=this.newSoftUrl.substr(0,6)
								if(openSoftUrl!='https:'&&openSoftUrl!='http:/'){
									this.newSoftUrl='http://'+this.newSoftUrl
								}
								window.open(this.newSoftUrl,'_blank')*/

								/*'http://'*/
							}saveFollow

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


			},

			//添加自定義標簽
			addLabelOpen: function() {

				/*	Cookies.get('userId')*/
				if(1) {
					this.dialogTit = true;
					this.getSoftLabel()

				} else {
					this.dialogPrompt = true;
					this.dialogPromptTitle = '请先登录'
				}

			},
			upData: function(newId) {
				this.softId = newId;
				this.$router.push({
					path: '/details',
					query: {
						id: this.softId,
						ParentName: '首页'
					}
				});
				/*	this.getSoftInfo()*/

			},
			dialogPromptTrue: function() {
				this.dialogPrompt = false;

			},
			//获取当前正在进行中活动
			activityIng: function() {

				this.axios.get(window.SITE_CONFIG['apiURL'] + '/haoweb/web/activity/config/2')
					.then(function(response) {
						if(response.data.config) {
							this.activityIngId = response.data.config.paramValue;
						}


					})
					.catch(function(error) {
						console.log(error);
					})
			},
			getSoftLabelList: function() {
				var params2 = new URLSearchParams();
				params2.append("softId", this.softId);
				params2.append("page", 1);
				params2.append("limit", 5);
				this.axios.post(window.SITE_CONFIG['apiURL'] + '/haoweb/web/soft/getSoftLabelBySoftId', params2)
					.then(function(response) {
						this.labelInfo = response.data.page.list;

					})

			},
			softClose: function() {

				this.softLabelArr = []
				this.checkedCities1 = []
				this.dialogTit = false;
			},
			getSoftLabel: function() {
				//获取新增标签多选框框显示

				var params2 = new URLSearchParams();
				params2.append("softId", this.softId);
				params2.append("limit", 10);
				params2.append("page", 1);
				this.axios.post(window.SITE_CONFIG['apiURL'] + '/haoweb/web/soft/getSoftLabelBySoftId', params2)
					.then(function(response) {
						this.labelInfoAdd = response.data.page.list;

					})
			},
			ifLogin: function() {
			  console.log("000000000000000000000")
			  var _this=this
				if(!_this.userId) {
					this.$confirm('请登录', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						var newUrl = window.SITE_CONFIG['apiURL'] + '/haoweb/web/auth/login';
						window.open(newUrl)

					}).catch(() => {

					});
				}

			},
			//下载资料文档

			//新增标签输入框
			addSoftLabelArr: function() {

				this.softLabelArr.push(this.softLabel)
				this.$nextTick(function() {
					var emL = this.softLabelArr.length;
					$('.labelem').eq(emL - 1).attr('data-mark', emL)
				})
				this.softLabel = ''

			},
			delLabel: function() {

				var eve = event.currentTarget;
				var dataMark = $(eve).data('mark');
				this.softLabelArr.splice(dataMark - 1, 1);
			},
			addLabel: function() {

				var newSoftStr = ''
				for(var i = 0; i < this.softLabelArr.length; i++) {
					var sCur = this.softLabelArr[i];
					newSoftStr = newSoftStr + sCur + ','
				}
				for(var i = 0; i < this.checkedCities1.length; i++) {
					var cur = this.checkedCities1[i]
					this.softLabelArr = newSoftStr + cur + ','
				}

				var params = new URLSearchParams();
				params.append("userId", this.userId);
				params.append("softId", this.softId);
				params.append("softLabel", this.softLabelArr);

				this.axios.post(window.SITE_CONFIG['apiURL'] + '/haoweb/web/soft/addSoftLabel', params)
					.then(function(response) {
						if(response.data.code == 0) {
							this.$alert(response.data.msg, '提示信息', {
								confirmButtonText: '确定',
							});
							this.dialogTit = false;
							this.softLabelArr = []
							this.checkedCities1 = []
						/*	this.getSoftLabelList()*/

						}

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
				var params = new URLSearchParams();
				params.append("softId", this.$route.query.id);
				this.axios.post(window.SITE_CONFIG['apiURL'] + '/haoweb/web/soft/getSoftDocPackage', params)
					.then(function(response) {
						if(response.data.code == 0) {
							this.DownWordUrl = baseUrl.baseUrlImg + response.data.packageUrl;
							this.ifDownWordUrl = response.data.packageUrl

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
		overflow: hidden;
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

	/*.details .top-box .left-box {*/
	/*	position: relative;*/
	/*	padding: 10px;*/
	/*	float: left;*/
	/*	width: 920px;*/
	/*	height: 260px;*/
	/*	background: #fff;*/
	/*}*/
  .details .top-box .left-box {
    position: relative;
    padding: 10px;
    float: left;
    width: 920px;
    height:336px!important;
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
  .details .top-box .left-box h2 sup{
    display:inline-block;
    margin: 0 5px 0 0;
    padding:1px 3px 5px 3px;
    height: 16px;
    font-style: normal;
    text-align: center;
    line-height: 16px;
    position: relative;
  }
  .details .top-box .left-box h2 sup::after{
    position: absolute;
    left:50%;
    margin-left:-7px;
    bottom:0;
    width:0;
    height:0;
    border-right:7px solid transparent;
    border-left:7px solid transparent;
    content:"";
  }
  /*新增*/

  .details .top-box .left-box h2 .suba{
    color:#fff;
    font-size: 12px;
    background:#ec9d2f;
  }
  .details .top-box .left-box h2 .subchania{
    color:#fff;
    font-size: 12px;
    background:#07b62c;
  }
  .details .top-box .left-box h2 .subchania::after{
    border-bottom:7px solid #fff;
  }
  .details .top-box .left-box h2 .subping{
    color:#fff;
    font-size: 12px;
    background:#672fd9;
  }
  .details .top-box .left-box h2 .subping::after{
    border-bottom:7px solid #fff;
  }
  .details .top-box .left-box h2 .sub{
    color:#fff;
    font-size: 12px;
    background:#ff0000;
  }
  .details .top-box .left-box h2 .sub::after{
    border-bottom:7px solid #fff;
  }
  .details .top-box .left-box h2 .suba{
    color:#fff;
    font-size: 12px;
    background:#ec9d2f;
  }
  .details .top-box .left-box h2 .suba::after{
    border-bottom:7px solid #fff;
  }

  /*新增*/
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
    position: relative;
		width: 100%;
		font-size: 14px;
		color: #666;
		line-height: 30px!important;
    z-index: 1;
	}

	.details .top-box .left-box .p em {
		font-style: normal;
		margin-left: 5px;
		color: #555;
	}

	.details .top-box .left-box .p a {
		color: #c86f60;
		line-height: 14px;
		text-decoration: underline;
	}
  .details .top-box .left-box  .to-soft-link{
    position: relative;
    float: right;
    display: block;
    width: 100px;
    line-height: 26px;
    text-align: center;
    color: #fff;
    background: #6e64e7;
    border-radius: 3px;
    text-decoration: none;
    cursor: pointer;
    z-index: 2;
  }
  .details .top-box .left-box  .to-soft-link i{
    margin-right: 5px;
    color: #fff;
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
		cursor: pointer;
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

	/*.details .top-box .right-box {*/
  /*  padding:0 10px ;*/
	/*	float: right;*/
	/*	width: 230px;*/
	/*	height: 280px;*/
  /*  background: #fff;*/
	/*}*/
  .details .top-box .right-box {
    float: right;
    width: 250px;
    height: 356px!important;
    background: #fff;
    box-sizing: border-box;
    border-radius: 5px 5px 0 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    overflow: hidden;
  }

	.right-box a {
		display: block;
		height: 46px;
	}

	.details .center-box {
		overflow: hidden;
    margin: 0 auto;
		width: 1200px;
		background: #fff;
	}

	.details .center-box .left-box {
		width: 1196px;
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

	.details .right-box {
		float: right;
		width: 230px;
	}

	.details  .right-box h3 {
		display: block;
		overflow: hidden;
    padding: 0 3%;
		width: 94%;
		font-size: 18px;
		color: #fff;
    height: 46px;
		line-height: 46px;
		font-weight: normal;
    background: #4178ec;
	}

	.details .softlogo {
		position: absolute;
		right: 20px;
		top: 60px;
		width: 100px;
		height: auto;
	}

	.details  .right-box h3 span {
		margin-right: 10px;
		float: right;
		font-size: 14px;
		color: #d1d4ef;
	}

	.details .right-box h3 a {
		float: right;
		display: inline-block;
	}

	.details .right-box dl {
    margin: 5px 10px;
    padding-bottom:5px ;
		color: #333;
		cursor: pointer;
    border-bottom: 1px #e9e9e9 dashed;
	}

	.details .right-box dl:hover span,
	.details  .right-box dl:hover dd {
		color: #e33214;
	}

	.details  .right-box dl dt {
		font-size: 14px;
		line-height: 26px;
	}

	.details  .right-box dl dt span {
		display: block;
		width: 220px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		/*不换行 */
	}

	.details  .right-box dl dd {
		font-size: 12px;
		color: #999;
	}

	.details  .right-box dl dd span {
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
    float:left;
	}

	.details .bottom-btn-box li {
		overflow: hidden;
		display: inline-block;
		margin-right: 10px;
    padding-right: 20px;
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
  .details .el-tabs--border-card>.el-tabs__header{
    height: 48px;
    background: #4178ec;
    border-radius: 6px 6px 0 0;
  }
  .details .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
    margin: 9px 0 0 50px;
    font-size: 16px;
    background: #ffffff;
    border: none;
    border-radius: 6px 6px 0 0;
  }
  .details .el-tabs--border-card{
    border: none;
  }
</style>
