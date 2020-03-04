<template>
	<div class="searchTop">
		<div class="header-top">
			<div class="reposbox">
				<img class="logo" src="../assets/img/top_logo.png" alt="logo" />
				<p class="text">
					欢迎来到科学软件开源社区！
				</p>

				<div v-if="!showLogin">
					<a class="right-text" target="_blank" href="https://passport.escience.cn/regist.jsp">注册 </a>
					<a class="right-text" :href="toLoginUrl">登录 &nbsp;&nbsp;&nbsp;|</a>
				</div>
				<div v-else="">
					<a class="right-text" @click="signOut" href="https://passport.escience.cn/logout?WebServerURL=http://cstsai.cstcloud.cn">退 &nbsp;出 </a>
					<p @click="toPersonalInfo" class="right-text">{{userInfo.trueName}},&nbsp;&nbsp;个人中心&nbsp;&nbsp;&nbsp;|</p>
				</div>

			</div>
		</div>
		<div class="searchtop-box">
			<div class="con">
				<router-link to="/">
					<img class="logo" src="../assets/img/search_logo.png" alt="logo" />
				</router-link>

				<div class="search-box">
					<el-select class="classify" v-model="searchArr.itemType" @change="currentSel" placeholder="请选择">
						<el-option v-for="item in searchOptions" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>

					</select>
					<div class="input">

						<el-input @keyup.enter.native="toSearchList" v-model.trim="searchArr.keyword" auto-complete="off"></el-input>

					</div>

					<!-- <router-link  :to="{path:'/searchList',query:searchArr}"> -->
					<button @click="toSearchList">搜索</button>
					<!-- </router-link> -->

				</div>
				<div @click="deliverySoft" class="btn">
					投递软件
				</div>
			</div>

		</div>

		<!--意见反馈-->
		<el-dialog custom-class="feedbackdia" title="意见反馈" :visible.sync="dialogFeedback">

			<el-form :model="formdialogFeedback" ref="formdialogFeedback" @submit.native.prevent>
				<div class="fbox borda">
					<span class="demonstration">以上内容是否对您有帮助？</span>
					<el-rate v-model="formdialogFeedback.scoreValue" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
					</el-rate>
				</div>
				<h3 class="h3">
  			在文档使用中是否遇到以下问题：
  		</h3>

				<el-checkbox-group v-model="formdialogFeedback.problemsValue">
					<div v-for="item in feedbackOption" class="fbox">
						<el-checkbox :label="item.value" :value="item.value" :key="item.id">{{item.value}}</el-checkbox>
					</div>

				</el-checkbox-group>

				<div class="fbox">
					更多建议：
					<el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="formdialogFeedback.moreProposal">
					</el-input>

				</div>
				<el-form-item label=" " style="float: right;">
					<el-checkbox v-model="formdialogFeedback.ifAnonymous">
						<router-link target="_blank" to="page2">是否在发布时匿名</router-link>
					</el-checkbox>

				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFeedback = false">取 消</el-button>
				<el-button type="primary" @click="submitOpinion('formdialogFeedback')">确 定</el-button>
			</div>
		</el-dialog>
		<!--意见反馈-->

		<!--pop-->

		<el-dialog custom-class="examinedialog " :close-on-click-modal="false" :close-on-press-escape="false" title="投递软件" :visible.sync="dialogDelivering">
			<el-form :model="form" ref="form" :rules="rules" :inline="true" class="demo-form-inline" @submit.native.prevent>
				<div class="box-big1">
					<el-form-item prop="name" label="软件名称" :label-width="formLabelWidth">
						<el-input v-model="form.name" placeholder="请输入软件名称" auto-complete="off"></el-input>
					</el-form-item>
				</div>
				<div class="box-small">
					<el-form-item prop="softVersion" label="软件版本" :label-width="formLabelWidth">
						<el-input v-model="form.softVersion" placeholder="请输入软件版本" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item prop="opensourceType" label="开源类型" :label-width="formLabelWidth">
						<el-select v-model="form.opensourceType" value-key="id" filterable multiple placeholder="请选择开源类型">
							<el-option v-for="item in opensourceTypeOption" :key="item.id" :label="item.ctyName" :value="item">
							</el-option>
						</el-select>
					</el-form-item>

					<el-form-item prop="softCategory" label="软件类别" :label-width="formLabelWidth">
						<el-select v-model="form.softCategory" value-key="id" filterable multiple placeholder="请选择软件类别">
							<el-option v-for="item in softCategoryOption " :key="item.id" :label="item.ctyName" :value="item">
							</el-option>
						</el-select>

					</el-form-item>
					<el-form-item prop="Language" label="编程语言" :label-width="formLabelWidth">
						<el-select v-model="form.Language" value-key="id" filterable multiple placeholder="请选择编程语言">
							<el-option v-for="item in LanguageOption " :key="item.id" :label="item.ctyName" :value="item">
							</el-option>
						</el-select>
					</el-form-item>
				</div>
				<div class="box-small">
					<el-form-item prop="userInterface" label="用户接口" :label-width="formLabelWidth">
						<el-select v-model="form.userInterface" value-key="id" filterable multiple placeholder="请选择用户接口">
							<el-option v-for="item in userInterfaceOption " :key="item.id" :label="item.ctyName" :value="item">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item prop="applicationField" label="应用领域" :label-width="formLabelWidth">
						<el-select v-model="form.applicationField" value-key="id" filterable multiple placeholder="请选择应用领域">
							<el-option v-for="item in applicationFieldOption " :key="item.id" :label="item.ctyName" :value="item">
							</el-option>
						</el-select>
					</el-form-item>

				</div>
				<div class="box-big1">
					<el-form-item prop="operatingSystem" label="操作平台" :label-width="formLabelWidth">
						<el-select v-model="form.operatingSystem" value-key="id" filterable multiple placeholder="请选择操作平台">
							<el-option v-for="item in operatingSystemOption " :key="item.id" :label="item.label" :value="item">
							</el-option>
						</el-select>
					</el-form-item>
				</div>

				<div class="box-big1">

					<el-form-item prop="softUrl" label="代码地址" :label-width="formLabelWidth">
						<el-input v-model="form.softUrl" @blur='checkUrl' placeholder="github或cstos.cstcloud.cn的项目地址，推荐使用cstos.cstcloud.cn" auto-complete="off"></el-input>
						<p class="diatit">多个地址请用英文","分隔</p>
					</el-form-item>

				</div>
				<div class="box-big1">
					<el-form-item v-if="!form.ifSelfStudy" label="开发人员" :label-width="formLabelWidth">
						<el-input v-model="form.developer" placeholder="请输入内容开发人员" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label=" " :label-width="formLabelWidth">
						<el-checkbox style="width: 100%;" v-model="form.ifSelfStudy">是否为自研</el-checkbox>
					</el-form-item>
				</div>

				<div v-if="form.ifSelfStudy">
					<h3 class="h3">开发人员</h3>
					<table class="singtext" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<th width="20">&nbsp;</th>
							<th width="100">姓名</th>
							<th width="110">所在单位</th>
							<th width="110">软件中承担工作</th>
							<th width="160">手机</th>
							<th width="60">操作</th>
						</tr>
						<tr>
							<td class="domainsnum"><span>*</span></td>
							<td>
								<el-input v-model="firstDomains.userName" auto-complete="off"></el-input>
								<!-- <p class="textp">{{nameValueTit}}</p>-->
							</td>
							<td>
								<el-input v-model="firstDomains.userUnit" auto-complete="off"></el-input>
								<!-- <p class="textp"> {{companyValueTit}}</p>-->

							</td>
							<td>
								<el-input v-model="firstDomains.userJob" auto-complete="off"></el-input>
								<!--  <p class="textp">{{roleValueTit}}</p>-->
							</td>
							<td>
								<el-input v-model="firstDomains.userPhone" auto-complete="off"></el-input>
								<!--  <p class="textp">{{phoneValueTit}}</p>-->
							</td>
							<td>&nbsp;</td>
						</tr>
						<tr v-for="item in secondDomains">
							<td class="domainsnum"></td>
							<td>
								<el-input v-model="item.userName" auto-complete="off"></el-input>
							</td>
							<td>
								<el-input v-model="item.userUnit" auto-complete="off"></el-input>

							</td>
							<td>
								<el-input v-model="item.userJob" auto-complete="off"></el-input>

							</td>
							<td>
								<el-input v-model="item.userPhone" auto-complete="off"></el-input>
								<p class="textp">{{phoneValueTit}}</p>

							</td>
							<td>
								<div @click="delTr($event)" class="deltrbtn">删除</div>
							</td>
						</tr>

						<tr>
							<td colspan="6">
								<a href="javascript:;" @click="addDomain" class="addtr">新增一行</a>
								<el-checkbox style="float: right; margin:10px 10px 0 0 ;color: #999;" v-model="form.ifHsowRealName">是否匿名</el-checkbox>
							</td>
						</tr>
					</table>
				</div>
				<el-form-item prop="abstract" label="作品摘要" :label-width="formLabelWidth">

					<div class="box-input">

						<tinymce-editor v-model="form.abstract" :disabled=false ref="editor"></tinymce-editor>

					</div>
				</el-form-item>

				<div class="bottom">
					<div class="left-box">
						<el-form-item label=" " :label-width="formLabelWidth">
							<el-checkbox v-model="ifCheckedMzs">
								<router-link target="_blank" to="page3">软件投递免责协议</router-link>
							</el-checkbox>

						</el-form-item>

					</div>

					<div class="right">
						<el-button @click="closePop">取 消</el-button>
						<el-button type="primary" @click="submitForm('form')">确 定</el-button>
					</div>

				</div>
			</el-form>

		</el-dialog>
		<!--pop-->
		<ul class="float-nav ">
			<li @click="deliverySoft">
				<img src="../assets/icon/float_nav_1.png" alt="" />
				<p>投递软件</p>
			</li>
			<li v-if="userIdData&&ifDownWordUrl">
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

			<li @click="dialogFeed">
				<img src="../assets/icon/float_nav_5.png" alt="" />
				<p>意见反馈</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import TinymceEditor from '@/components/tinymce-editor'
	import baseUrl from '../../config/index.js'
	export default {
		name: 'searchTop',
		components: {
			TinymceEditor
		},
		props: {
			newSoftUrl: '',
			runUrl: ''

		},

		data() {
			return {
				showLogin: false, //是都显示登录
				deliveringData: {

				},
				userIdData: '',
				form: {
					domains: [],
					name: '',
					softVersion: '',
					opensourceType: [],
					applicationField: [],
					softCategory: [],
					Language: [],
					userInterface: [],
					softUrl: '',
					abstract: '',
					developer: '',
					operatingSystem: [],
					ifShowRealName: false,
					ifSelfStudy: false, //是否为自研
					ifHsowRealName: false
				},
				ifCheckedMzs: false,
				dialogDelivering: false,
				dialogFeedback: false,
				formdialogFeedback: {
					scoreValue: null,
					problemsValue: [],
					moreProposal: '',
					ifAnonymous: false,

				},
				rules: {
					name: [{
						required: true,
						message: '请填写软件名称',
						trigger: 'blur'
					}],
					developer: [{
						required: true,
						message: '请填写开发人员',
						trigger: 'blur'
					}],
					softVersion: [{
						required: true,
						message: '请填写版本号',
						trigger: 'blur'
					}],
					opensourceType: [{
						required: true,
						message: '请填写开源类型',
						trigger: 'blur'
					}],
					applicationField: [{
						required: true,
						message: '请填写应用领域',
						trigger: 'blur'
					}],
					softCategory: [{
						required: true,
						message: '请选择软件分类',
						trigger: 'blur'
					}],
					Language: [{
						required: true,
						message: '请选择开发语言',
						trigger: 'blur'
					}],
					userInterface: [{
						required: true,
						message: '请填写用户接口',
						trigger: 'blur'
					}],
					softUrl: [{
						required: true,
						message: '请填写代码地址',
						trigger: 'blur'
					}],
					abstract: [{
						required: true,
						message: '请填写作品摘要',
						trigger: 'blur'
					}],
					operatingSystem: [{
						required: true,
						message: '请选择操作凭条',
						trigger: 'blur'
					}],

				},
				toLoginUrl: '',
				categoryOption: [],
				formLabelWidth: '120px',
				stepImgSrc: '',
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
				],
				phoneValueTit: '',
				opensourceTypeOption: [],
				applicationFieldOption: [],
				softCategoryOption: [],
				LanguageOption: [],
				userInterfaceOption: [],
				operatingSystemOption: [],
				firstDomains: {
					"activityId": 0,
					"awardLevel": 0,
					"awardTime": "",
					"id": 0,
					"joinTime": "",
					"rank": 0,
					"status": 0,
					"userId": 0,
					"userJob": "",
					"userName": "",
					"userPhone": "",
					"userUnit": ""
				},
				secondDomains: [],
				DownWordUrl: '',
				ifDownWordUrl: '',
				feedbackOption: [], //反馈选项

			}
		},
		mounted() {
			var _this = this;
			_this.userIdData = this.userId;
			_this.toLoginUrl = baseUrl.baseUrl + 'web/auth/login'
			if(this.userId) {
				_this.showLogin = true;
			} else {
				_this.showLogin = false;
			}

			_this.getAllCategory();
			_this.searchArr.itemType = _this.$route.query.itemType ? _this.$route.query.itemType : 1;
			if(_this.searchArr.itemType == 1) {
				_this.searchArr.itemType = '软件'

			}
			if(_this.searchArr.itemType == 2) {
				_this.searchArr.itemType = '领域'

			}
			if(_this.searchArr.itemType == 3) {
				_this.searchArr.itemType = '作者'

			}
			_this.searchArr.keyword = _this.$route.query.keyword

			_this.getListOption()
			if(this.$route.path == '/details') {
				$(".float-nav").show();
				var W = $(window).width() - 1200;
				var L = 1200 + W / 2
				$(".float-nav").css({
					"left": L + "px"
				});
			} else if(this.$route.path == '/hotDetails') {

				$(".float-nav").show();
				var W = $(window).width() - 1200;
				var L = 1200 + W / 2
				$(".float-nav").css({
					"left": L + "px"
				});

			} else {
				$(".float-nav").hide();
			}

			_this.getoSystemOption()
			_this.getFeedbackOption()
			_this.DownWorlds()

		},
		methods: {
			//获取所有二级分类列表
			getAllCategory: function() {
				var _this = this;
				_this.axios.post(baseUrl.baseUrl + '/web/soft/allSecondCtyList')
					.then(function(response) {
						_this.categoryOption = response.data.list;
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
			//投递软件
			deliverySoft: function() {
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
				} else {
					_this.dialogDelivering = true;
				}

			},
			dialogFeed: function() {
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
				} else {
					this.dialogFeedback = true
				}

			},
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
			},
*/				
			runThisSoft:function(){
				
				var _this = this;
				var params = new URLSearchParams();
				params.append("softId", this.$route.query.id);
				params.append("userId", this.userId);
				_this.axios.post(baseUrl.baseUrl + '/web/softrun/clickSoftInfoRunTime', params)
									.then(function(response) {
										window.open(response.data.url)
									})
				
			},
			//下载文档
			DownWorlds: function() {
				var _this = this;
				var params = new URLSearchParams();
				params.append("softId", this.$route.query.id);
				_this.axios.post(baseUrl.baseUrl + '/web/soft/getSoftDocPackage', params)
					.then(function(response) {
						if(response.data.code == 0) {
							_this.DownWordUrl = baseUrl.baseUrlImg + response.data.packageUrl;
							_this.ifDownWordUrl = response.data.packageUrl
							/*
													window.location=_this.DownWordUrl; // 后更改页面地址*/

						}

					})
			},
			//获取反馈列表
			getFeedbackOption: function() {
				var _this = this;
				var params = new URLSearchParams();
				params.append("dictId", 7);
				_this.axios.post(baseUrl.baseUrl + '/api/dict/getDictDetailsByDictId', params)
					.then(function(response) {
						_this.feedbackOption = response.data.list

					})
			},
			//验证git地址是否存在
			checkUrl: function() {
				var _this = this;
				var regexp = /((http|ftp|https|file):\/\/([\w\-]+\.)+[\w\-]+(\/[\w\u4e00-\u9fa5\-\.\/?\@\%\!\&=\+\~\:\#\;\,]*)?)/ig;
				if(_this.form.softUrl) {
					var thisurl = _this.form.softUrl.match(regexp);
					if(!thisurl) {
						_this.messageOpen('填写正确链接地址', 'warning')
						return false

					}
					var params = new URLSearchParams();
					params.append("softUrl", _this.form.softUrl);
					_this.axios.post(baseUrl.baseUrl + '/web/soft/checkIsEqualsSoftUrl', params)
						.then(function(response) {
							if(response.data.code != 0) {
								_this.$alert(response.data.msg, '提示信息', {
									confirmButtonText: '确定',
								});
								_this.form.softUrl = ''
							}

						})
						.catch(function(error) {
							console.log(error);
						})

				}

			},

			//开源类型

			submitForm: function(formName) {
				var _this = this;

				var sofoVo = {
					applicationField: "",
					applicationFieldList: this.form.applicationField,
					createTime: "",
					createUser: this.userId,
					expertEvaluateRejectReason: "",
					firstAudit: 0,
					firstAuditRejectReason: "",
					id: 0,
					createUserName:this.userInfo.trueName,
					isChina: 0,
					isEvaluate: 0,
					isExpertEvaluate: 0,
					isHot: 0,
					isPlatform: 0,
					isRecommend: 0,
					isShow: 0,
					isSelf: '',
					isShowDeveloperName: '',
					developers: this.form.developer,
					opensourceType: "",
					opensourceTypeList: this.form.opensourceType,
					operatingSystemList: this.form.operatingSystem,
					operatingSystem: "",
					programmingLanguage: "",
					programLanguageList: this.form.Language,
					softCategoryId: '',
					softCategoryName: "",
					softId: "",
					softIntroduce: this.form.abstract,
					softLicense: "",
					softLogo: "",
					softName: this.form.name,
					softSonCtyList: this.form.softCategory,
					softUrl: this.form.softUrl,
					softVersion: this.form.softVersion,
					updateTime: "",
					userInterface: "",
					isMatchSoft: 0,
					userInterfaceList: this.form.userInterface,
					userList: [],
				}

				sofoVo.isShowDeveloperName = _this.form.ifHsowRealName == true ? 0 : 1;
				sofoVo.isSelf = _this.form.ifSelfStudy == true ? 1 : 0;
				if(!sofoVo.isShowDeveloperName) {
					sofoVo.developers = ''

				}

				/*	var reg = /github.com(.*?)/g;
   		var reg1 = /cstos.cstcloud.cn(.*?)/g;
   		if(!reg.test(_this.form.softUrl)&&!reg1.test(_this.form.softUrl)){
   				_this.messageOpen('代码地址格式不正确,请使用github或cstos.cstcloud.cn的项目地址')
			return false;
   		}*/
				if(_this.form.ifSelfStudy) {
					if(!_this.firstDomains.userName) {
						_this.messageOpen('请填写开发人员姓名', 'warning')
						return false;
					}
					if(!_this.firstDomains.userUnit) {
						_this.messageOpen('请填写开发人员单位', 'warning')
						return false;
					}

					if(!_this.firstDomains.userJob) {
						_this.messageOpen('请填写开发人员工作', 'warning')
						return false;
					}
					if(!_this.firstDomains.userPhone) {
						_this.messageOpen('请填写开发人员手机', 'warning')
						return false;
					}
					var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
					if(!phoneReg.test(this.firstDomains.userPhone)) {
						this.messageOpen('请填写正确手机号码', 'warning')
						return false;

					}
				}

				if(!_this.form.abstract) {
					_this.messageOpen('请填写作品摘要')
					return false;
				}
				if(!_this.ifCheckedMzs) {
					_this.messageOpen('请阅读软件投递免责协议')
					return false;
				}

				this.firstDomains = {
					activityId: this.$route.query.activityId,
					awardLevel: 0,
					awardTime: "",
					id: 0,
					joinTime: "",
					rank: 0,
					status: 0,
					softId: this.checkId,
					userId: this.userId,
					userJob: this.firstDomains.userJob,
					userName: this.firstDomains.userName,
					userPhone: this.firstDomains.userPhone,
					userUnit: this.firstDomains.userUnit,
				}
				sofoVo.userList.push(this.firstDomains);
				if(this.secondDomains.length > 0) {
					for(var i = 0; i < this.secondDomains.length; i++) {
						var cur = this.secondDomains[i]
						if(!cur.userName) {
							this.messageOpen('请填写开发人员姓名', 'warning')
							return false;
						}
						sofoVo.userList.push(cur);
					}

				}

				_this.$refs[formName].validate((valid) => {
					if(valid) {
						var _this = this;
						_this.axios.defaults.headers.common['token'] = this.token;
						_this.axios.post(baseUrl.baseUrl + '/web/user/saveSoftInfo', sofoVo)
							.then(function(response) {

								if(response.data.code == 0) {
									_this.dialogDelivering = false;
									_this.$refs[formName].resetFields();
									_this.firstDomains.userJob = '';
									_this.firstDomains.userName = '';
									_this.firstDomains.userUnit = '';
									_this.firstDomains.userPhone = '';
									_this.secondDomains = [];
									_this.ifCheckedMzs = false;
									_this.form.ifShowRealName = false;
									_this.form.ifSelfStudy = false; //是否为自研
									if(_this.$route.path == '/personalInfo') {
										location.reload()
									} else {
										_this.toPersonalInfo()
									}

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

					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			toLogin: function() {

			},
			//获取操作平台表单下拉内容
			getoSystemOption: function() {
				var _this = this;
				var params = new URLSearchParams();
				params.append("dictId", 6);
				_this.axios.post(baseUrl.baseUrl + '/api/dict/getDictDetailsByDictId', params)
					.then(function(response) {
						_this.operatingSystemOption = response.data.list

					})
			},
			currentSel: function(selVal) {
				if(selVal == '软件') {
					this.searchOptions.value = 1
				}
				if(selVal == '领域') {
					this.searchOptions.value = 2
				}
				if(selVal == '作者') {
					this.searchOptions.value = 3
				}

			},
			//获取报名表单下拉内容
			getListOption: function() {
				var _this = this;
				_this.axios.post(baseUrl.baseUrl + '/web/soft/softCtyAllList')
					.then(function(response) {
						var newResponse = response.data.list

						_this.opensourceTypeOption = newResponse[2].sonList; //开源类型
						_this.applicationFieldOption = newResponse[0].sonList; //应用领域
						_this.softCategoryOption = newResponse[1].sonList; //软件类型
						_this.LanguageOption = newResponse[4].sonList; //变成语言
						_this.userInterfaceOption = newResponse[3].sonList; //用户接口

					})
			},
			toPersonalInfo: function() {
				var _this = this
				_this.$router.push({
					path: '/personalInfo'
				});

			},
			//搜索
			searchByKeyword: function() {
				/* searchArr:{
        	keyword:'',
        	itemType:''
        },*/
				var _this = this;
				var params1 = new URLSearchParams();
				this.searchArr.keyword = this.searchArr.keyword.replace(/(^\s*)|(\s*$)/g, "");
				params1.append("keyword  ", this.searchArr.keyword);
				params1.append("page", this.searchArr.keyword.page);
				params1.append("limit", 10);
				params1.append("itemType", this.searchArr.keyword);
				_this.axios.post(baseUrl.baseUrl + '/web/soft/querySoftListByKeyword', params1)
					.then(function(response) {

					})

			},
			//新增行
			addDomain: function() {
				var _this = this;
				_this.secondDomains.push({
					activityId: this.$route.query.id,
					awardLevel: 0,
					awardTime: "",
					id: 0,
					joinTime: "",
					rank: 0,
					status: 0,
					userId: this.userId,
					userJob: '',
					userName: '',
					userPhone: '',
					userUnit: '',
				});
				_this.$nextTick(function() {

					var L = _this.secondDomains.length;
					$('.deltrbtn').eq(L - 1).attr("id", +L)

				})

			},
			//删除一行
			delTr: function(event) {

				var _this = this;
				var eve = event.currentTarget

				var thisId = $(eve).attr('id')
				_this.secondDomains.splice(thisId - 1, 1)

			},
			closePop: function() {
				//向父级传值
				this.dialogDelivering = false;
				/*	this.popArgument = false;
					this.$emit('listenToChild', this.popArgument)*/
			},
			toSearchList: function() {

				if(this.searchArr.itemType == '软件') {
					this.searchArr.itemType = 1
				}
				if(this.searchArr.itemType == '领域') {
					this.searchArr.itemType = 2
				}
				if(this.searchArr.itemType == '作者') {
					this.searchArr.itemType = 3
				}

				this.$router.push({
					path: '/searchList',
					query: this.searchArr
				});
				this.$emit('serachList', true)
			},
			//提交意见反馈
			submitOpinion: function(formName) {
				var _this = this;
				var feedback = {
					anonymousIs: _this.formdialogFeedback.ifAnonymous,
					commitUserId: _this.userId,
					createTime: "",
					fbContent: _this.formdialogFeedback.moreProposal,
					fbReply: "",
					fbTypes: _this.formdialogFeedback.problemsValue,
					helpLevel: _this.formdialogFeedback.scoreValue,
					id: '',
					softId: this.$route.query.id,
					replyTime: ""
				}
				feedback.anonymousIs = _this.formdialogFeedback.ifAnonymous == true ? 1 : 0;
				feedback.fbTypes = feedback.fbTypes.join(',')

				if(_this.formdialogFeedback.problemsValue.length == 0 && !_this.formdialogFeedback.moreProposal) {
					_this.messageOpen('请选择或者填写反馈问题', 'warning')
					return false;
				}

				_this.$refs[formName].validate((valid) => {
					if(valid) {
						_this.axios.defaults.headers.common['token'] = _this.token;
						_this.axios.post(baseUrl.baseUrl + '/web/user/addFeedback', feedback)
							.then(function(response) {

								if(response.data.code == 0) {
									_this.dialogFeedback = false;
									_this.formdialogFeedback.scoreValue = null;
									_this.formdialogFeedback.problemsValue = [];
									_this.formdialogFeedback.moreProposal = '';
									_this.formdialogFeedback.ifAnonymous = false;

								} else if(response.data.code == 401) {
									_this.$confirm(response.data.msg, '提示', {
										confirmButtonText: '确定',
										cancelButtonText: '取消',
										type: 'warning'
									}).then(() => {
										sessionStorage.clear()
										var newUrl = baseUrl.baseUrl + '/web/auth/login';
										window.open(newUrl)
										_this.dialogFeedback = false;
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
					} else {
						console.log('error submit!!');
						return false;
					}
				});

			},
			messageOpen: function(msg) {
				var _this = this;
				_this.$message({
					message: msg,
					type: 'warning'
				});

			},
			signOut: function() {
				sessionStorage.clear()
				console.log(" sessionStorage.getItem('sessionData');", sessionStorage.getItem('sessionData'))

			},
		

		}
	}
</script>

<style>
	.searchTop {
		width: 100%;
		height: 100%;
	}
	
	.searchTop .box-big1 .el-input__inner,
	.searchTop .box-small .el-input__inner {
		width: 400px;
	}
	
	.searchTop .examinedialog {
		width: 600px;
	}
	
	.searchTop .examinedialog .box-input {
		margin-left: 10px;
		width: 540px;
	}
	
	.searchTop .examinedialog .bottom .right {
		margin: 0 auto 20px;
		width: 290px;
	}
	
	.searchTop .examinedialog .bottom {
		overflow: hidden;
		width: 100%;
	}
	
	.searchTop .searchtop-box {
		padding: 10px 0;
		width: 100%;
		height: 110px;
		background: url(../assets/bg/search_top_bg.png) left bottom repeat-x;
	}
	
	.searchTop .musttit {
		margin-left: 5px;
		font-size: 18px;
		font-weight: bold;
		color: #d50d24;
	}
	
	.searchTop .el-dialog {
		width: 700px;
	}
	
	.searchTop .el-dialog__body {
		padding: 5px 10px;
	}
	
	.searchTop .ajpsbtn {
		margin-left: 440px;
		margin-bottom: 20px;
	}
	
	.searchTop .searchtop-box .con {
		overflow: hidden;
		margin: 0 auto;
		width: 1200px;
	}
	
	.searchTop .searchtop-box .con .logo {
		float: left;
		margin-top: 10px;
		height: 90px;
		width: auto;
	}
	
	.searchTop .searchtop-box .con .search-box {
		overflow: hidden;
		float: left;
		margin: 40px 0 0 50px;
		width: 600px;
	}
	
	.searchTop .searchtop-box .con .search-box .classify {
		float: left;
		width: 120px;
		height: 34px;
		border: 1px solid #dedede;
	}
	
	.searchTop .searchtop-box .con .search-box .classify .el-input__inner {
		width: 120px;
		height: 34px;
		line-height: 34px;
		border: none;
	}
	
	.searchTop .searchtop-box .con .search-box .input {
		float: left;
		margin-left: 10px;
		width: 340px;
		height: 34px;
		background: #fff;
		border: 1px solid #dedede;
	}
	
	.searchTop .searchtop-box .con .search-box .input .el-input__inner {
		width: 340px;
		height: 34px;
		line-height: 34px;
		border: none;
	}
	
	.searchTop .searchtop-box .con .search-box button {
		float: left;
		width: 100px;
		height: 36px;
		line-height: 36px;
		text-align: center;
		color: #fff;
		background: #e26556;
	}
	
	.searchTop .searchtop-box .btn {
		display: block;
		float: right;
		margin-top: 35px;
		padding-left: 38px;
		width: 115px;
		height: 42px;
		font-size: 14px;
		color: #fff;
		letter-spacing: 1px;
		line-height: 42px;
		text-align: center;
		cursor: pointer;
		background: url(../assets/bg/btn_bg_1.png) no-repeat;
	}
	
	.searchTop .header-top {
		width: 100%;
		height: 66px;
		background: #4b505d;
	}
	
	.searchTop .header-top .reposbox {
		overflow: hidden;
		position: relative;
		margin: 0 auto;
		width: 1200px;
		height: 66px;
		font-size: 14px;
		line-height: 66px;
		color: #fff;
	}
	
	.searchTop .header-top .reposbox .logo {
		float: left;
		margin: 10px 10px 0 0;
		height: 46px;
		width: auto;
	}
	
	.searchTop .header-top .reposbox .text {
		float: left;
		font-size: 14px;
		line-height: 66px;
		color: #fff;
	}
	
	.searchTop .header-top .reposbox .right-text {
		float: right;
		margin-right: 10px;
		font-size: 14px;
		line-height: 66px;
		color: #f4f4f4;
		cursor: pointer;
	}
	
	.float-nav {
		position: fixed;
		top: 230px;
		left: 0;
		width: 60px;
		border-radius: 2px;
	}
	
	.float-nav li {
		width: 60px;
		height: 86px;
		border-bottom: 1px solid #a6ceec;
		background: #3c6bf7;
		cursor: pointer;
	}
	
	.float-nav .libg {
		background: #979899;
	}
	
	.float-nav li:hover {
		background: #d40303;
	}
	
	.float-nav li img {
		display: block;
		padding: 8px 0 3px 0;
		margin: 0px auto;
		width: 50px;
	}
	
	.float-nav li p {
		width: 100%;
		font-size: 12px;
		line-height: 18px;
		text-align: center;
		color: #fff;
	}
	
	.searchTop .singtext {
		padding: 5px 0;
		margin: 0 0 20px 50px;
		width: 600px;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		background: #d0e1f1;
	}
	
	.searchTop .domainsnum span {
		line-height: 40px;
		font-weight: bold;
		font-size: 14px;
		color: #F56C6C;
	}
	
	.searchTop .singtext .deltrbtn {
		padding: 0 5px;
		font-size: 12px;
		line-height: 14px;
		border-radius: 3px;
		height: 30px;
		line-height: 30px;
		color: #fff;
		background: #c42c12;
		cursor: pointer;
	}
	
	.searchTop .singtext .addtr {
		display: inline-block;
		margin: 5px 0 0 160px;
		padding: 2px 8px;
		font-size: 14px;
		height: 30px;
		line-height: 30px;
		color: #fff;
		background: #1ca141;
		border-radius: 3px;
		cursor: pointer;
	}
	
	.searchTop .singtext .el-input {
		padding: 5px;
		box-sizing: border-box;
	}
	
	.searchTop .singtext .el-input__inner {
		width: 100%;
		height: 30px;
		line-height: 30px;
	}
	
	.searchTop .h3 {
		width: 100%;
		line-height: 30px;
		font-size: 16px;
		color: #333;
		text-align: center;
	}
	
	.searchTop .feedbackdia {}
	
	.searchTop .feedbackdia .fbox {
		overflow: hidden;
		width: 660px;
		padding: 10px;
	}
	
	.searchTop .feedbackdia .borda {
		border-bottom: 1px dashed #dedede;
	}
	
	.searchTop .feedbackdia .fbox .demonstration {
		float: left;
		font-size: 16px;
		line-height: 30px;
		color: #666;
	}
	
	.searchTop .feedbackdia .fbox .el-rate {
		float: left;
		margin: 8px;
		width: 300px;
	}
	
	.searchTop .feedbackdia .h3 {
		width: 100%;
		font-size: 16px;
		line-height: 40px;
		text-align: left;
		font-weight: normal;
	}
	
	.searchTop .dialog-footer {
		display: block;
		margin: 10px auto;
		width: 200px;
	}
	
	.searchTop .diatit {
		padding-top: 5px;
		font-size: 12px;
		line-height: 12px;
		color: #d3d5d6;
	}
</style>