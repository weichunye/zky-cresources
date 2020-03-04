<template>
	<div class="bodybg">
	<div class="addbg">

		<div class="softModify">

			<div class="header-top">
				<div class="reposbox">
					<router-link to="/">
						<img class="logo" src="../assets/img/top_logo.png" alt="logo" />
					</router-link>
					<p class="text">
						欢迎来到科学软件开源社区！
					</p>

					<p @click="toPersonalInfo" class="right-text">个人中心</p>
				</div>
			</div>

			<div class="softModify-box">

				<h2>软件修改</h2>
				<!--banner-->

				<el-form :model="form" ref="form" :inline="true" class="demo-form-inline" @submit.native.prevent>
					<div class="box-big">

						<el-form-item label="软件名称" :label-width="formLabelWidth">
							<em class="addti">*</em>
							<el-input v-model="form.name" placeholder="请输入软件名称" auto-complete="off"></el-input>
						</el-form-item>
					</div>
					<div class="box-big">

						<el-form-item label="软件版本" :label-width="formLabelWidth">
							<em class="addti">*</em>
							<el-input v-model="form.softVersion" placeholder="请输入软件版本" auto-complete="off"></el-input>
						</el-form-item>
					</div>
					<div class="box-big">

						<el-form-item label="开源类型" :label-width="formLabelWidth">
							<em class="addti">*</em>
							<el-select v-model="form.opensourceType" value-key="id" filterable multiple placeholder="请选择开源类型">
								<el-option v-for="item in opensourceTypeOption " :key="item.id" :label="item.ctyName" :value="item">
								</el-option>
							</el-select>
						</el-form-item>
					</div>
					<div class="box-big">

						<el-form-item label="软件类别" :label-width="formLabelWidth">
							<em class="addti">*</em>
							<el-select v-model="form.softCategory" value-key="id" filterable multiple placeholder="请选择软件类别">
								<el-option v-for="item in softCategoryOption " :key="item.id" :label="item.ctyName" :value="item">
								</el-option>
							</el-select>

						</el-form-item>
					</div>
					<div class="box-big">

						<el-form-item label="编程语言" :label-width="formLabelWidth">
							<em class="addti">*</em>
							<el-select v-model="form.Language" value-key="id" filterable multiple placeholder="请选择编程语言">
								<el-option v-for="item in LanguageOption " :key="item.id" :label="item.ctyName" :value="item">
								</el-option>
							</el-select>
						</el-form-item>
					</div>
					<div class="box-big">

						<el-form-item label="用户接口" :label-width="formLabelWidth">
							<em class="addti">*</em>
							<el-select v-model="form.userInterface" value-key="id" filterable multiple placeholder="请选择用户接口">
								<el-option v-for="item in userInterfaceOption " :key="item.id" :label="item.ctyName" :value="item">
								</el-option>
							</el-select>
						</el-form-item>
					</div>
					<div class="box-big">

						<el-form-item label="应用领域" :label-width="formLabelWidth">
							<em class="addti">*</em>
							<el-select v-model="form.applicationField" value-key="id" filterable multiple placeholder="请选择应用领域">
								<el-option v-for="item in applicationFieldOption " :key="item.id" :label="item.ctyName" :value="item">
								</el-option>
							</el-select>
						</el-form-item>

					</div>
					<div class="box-big">
						<el-form-item label="操作平台" :label-width="formLabelWidth">
							<em class="addti">*</em>
							<el-select v-model="form.operatingSystem" value-key="id" filterable multiple placeholder="请选择操作平台">
								<el-option v-for="item in operatingSystemOption " :key="item.id" :label="item.label" :value="item">
								</el-option>
							</el-select>
						</el-form-item>
					</div>
					<div class="box-big">

						<el-form-item label="代码地址" :label-width="formLabelWidth">
							<em class="addti">*</em>
							<el-input v-model.trim="form.softUrl" @blur='checkUrl' placeholder="github或cstos.cstcloud.cn的项目地址，推荐使用cstos.cstcloud.cn" auto-complete="off"></el-input>
							<!--<a class="gitUrl" v-if="form.softUrl" target="_blank" :href="form.softUrl">查看</a>-->
							<p class="textp"> {{softUrlTit}}</p>
						</el-form-item>
						<!--<el-form-item label=" " :label-width="formLabelWidth">
						<el-checkbox v-model="form.ifCrossPlatform">是否跨平台</el-checkbox>
					</el-form-item>-->

					</div>
					<div class="box-big">
						<el-form-item v-if="!form.ifSelfStudy" label="开发人员" :label-width="formLabelWidth">
							<em class="addti">&nbsp;&nbsp;</em>
							<el-input v-model="form.developer" placeholder="请输入内容"></el-input>
						</el-form-item>

						<el-form-item label=" " :label-width="formLabelWidth">
							<el-checkbox style="width: 100%;" v-model="form.ifSelfStudy">是否为自研</el-checkbox>
						</el-form-item>
					</div>
					<div v-if="form.ifSelfStudy">

						<h3 class="h3">参赛人员</h3>
						<table class="singtext" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<th width="30">&nbsp;</th>
								<th width="120">姓名</th>
								<th width="120">所在单位</th>
								<th width="120">软件中承担工作</th>
								<th width="150">手机</th>
								<th width="80">操作</th>
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
									</el-form-item>

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
					<div class="box-big">

						<el-form-item label="作品摘要" :label-width="formLabelWidth">
							<em class="addti">*</em>
							<div class="box-input">
								<tinymce-editor v-model="form.abstract" :disabled=false ref="editor"></tinymce-editor>

							</div>
						</el-form-item>
					</div>

					<div class="bottom">
						<div class="left-box">

							<el-form-item label=" " :label-width="formLabelWidth">
								<el-checkbox v-model="form.ifCheckedMzs">
									<router-link target="_blank" to="page2">投递软件免责协议</router-link>
								</el-checkbox>

							</el-form-item>

						</div>

						<div class="right-box">
							<el-button type="primary" @click="submitForm('form')">提 交</el-button>
						</div>

					</div>
				</el-form>

			</div>
		</div>
	</div>
	</div>
</template>
<script type="text/javascript">
</script>
<script>
	import TinymceEditor from '@/components/tinymce-editor'
	import baseUrl from '../../config/index.js'
	export default {
		name: 'softModify',
		components: {
			TinymceEditor
		},
		data() {
			return {
				form: {
					name: '',
					ifCrossPlatform: false, //是否跨平台
					softVersion: '',
					opensourceType: [],
					applicationField: [],
					softCategory: [],
					Language: [],
					userInterface: [],
					operatingSystem: [],
					softUrl: '',
					ifCheckedCns: '',
					ifCheckedMzs: true,
					abstract: '',
					ifSelfStudy: false, //是否为自研
					ifHsowRealName: false, //true不匿名，false匿名
					developer: ''
				},

				softUrlTit: '',
				joinVoUrl: '',
				imageUrl: '',
				getSoftUrl:'',
				firstDomains: {
					activityId: 0,
					awardLevel: 0,
					awardTime: "",
					id: 0,
					joinTime: "",
					rank: 0,
					status: 0,
					userId: 0,
					userJob: "",
					userName: "",
					userPhone: "",
					userUnit: ""
				},
				checkId: '',
				createUser: '',
				secondDomains: [],
				nameValueTit: '',
				companyValueTit: '',
				roleValueTit: '',
				phoneValueTit: '',
				ifCheckedCnsTit: '',
				ifCheckedMzsTit: '',
				opensourceTypeOption: [],
				applicationFieldOption: [],
				softCategoryOption: [],
				LanguageOption: [],
				operatingSystemOption: [],
				userInterfaceOption: [],
				domainIndex: 1,
				formLabelWidth: '150px',
				ifCheck: false,

			}
		},
		mounted() {
			//获取活动基本信息
			var _this = this;
			_this.getListOption()
			_this.getSoftInfo()

			_this.getoSystemOption()

		},
		methods: {
			//新增行
			addDomain: function() {
				var _this = this;
				_this.secondDomains.push({
					activityId: '',
					awardLevel: 0,
					awardTime: "",
					id: 0,
					joinTime: "",
					rank: 0,
					status: 0,
					userId: this.userId,
					softId: this.$route.query.id,
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
			//修改信息之前获取软件信息
			getSoftInfo: function() {
				var _this = this;
				var params = new URLSearchParams();
				params.append("softId", this.$route.query.id);
				params.append("userId", this.userId);
				params.append("token", this.token);
				_this.axios.post(baseUrl.baseUrl + 'web/user/getSaveSoftDetail', params)
					.then(function(response) {

						var softInfoObg = response.data.softInfo;
						var userListObg = response.data.userList;
						var softDocObg = response.data.softDoc;
						_this.softId = response.data.softInfo.id;
						_this.form.name = softInfoObg.softName;
						_this.form.developer = softInfoObg.developers;
						_this.form.softVersion = softInfoObg.softVersion;
						_this.form.opensourceType = softInfoObg.opensourceTypes;
						_this.form.softCategory = softInfoObg.categoryIds;
						_this.form.Language = softInfoObg.programmingLanguages;
						_this.form.userInterface = softInfoObg.userInterfaces;
						_this.form.applicationField = softInfoObg.applicationFields;
						_this.form.operatingSystem = softInfoObg.operatingSystems;
						_this.form.softUrl=_this.getSoftUrl = softInfoObg.softUrl;
						_this.form.abstract = softInfoObg.softIntroduce;
						_this.form.ifCrossPlatform = softInfoObg.isPlatform == 1 ? true : false;
						_this.form.ifSelfStudy = softInfoObg.isSelf == 1 ? true : false;
						_this.form.ifHsowRealName = softInfoObg.isShowDeveloperName == 0 ? true : false;

						if(userListObg.length > 0) {
							var firstUserListObg = userListObg[0]
							_this.firstDomains.userName = firstUserListObg.userName;

							_this.firstDomains.userUnit = firstUserListObg.userUnit;
							_this.firstDomains.userJob = firstUserListObg.userJob;
							_this.firstDomains.userPhone = firstUserListObg.userPhone;
							for(var i = 1; i < userListObg.length; i++) {
								_this.secondDomains.push(userListObg[i])
							}

						}

					})
					.catch(function(error) {
						console.log(error);
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
					if(_this.getSoftUrl&&_this.form.softUrl==_this.getSoftUrl){
						
					}else{
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
				

				}

			},
			toPersonalInfo: function() {
				var _this = this
				_this.$router.push({
					path: '/personalInfo'
				});

			},
			submitForm: function(formName) {
				var _this = this;
				_this.form.ifCrossPlatform = _this.form.ifCrossPlatform == true ? 1 : 0;
				var joinVo = {
					applicationField: "",
					applicationFieldList: _this.form.applicationField,
					createTime: "",
					createUser: this.userId,
					developers: this.form.developer,
					expertEvaluateRejectReason: "",
					firstAudit: 0,
					firstAuditRejectReason: "",
					id: _this.$route.query.id,
					isChina: 0,
					isEvaluate: 0,
					isExpertEvaluate: 0,
					isHot: 0,
					isMatchSoft: 0,
					isPlatform: _this.form.ifCrossPlatform,
					isRecommend: 0,
					isSelf: 0,
					isShow: 0,
					isShowDeveloperName: 0,
					opensourceType: "",
					opensourceTypeList: _this.form.opensourceType,
					operatingSystem: "",
					operatingSystemList: _this.form.operatingSystem,
					programLanguageList: _this.form.Language,
					programmingLanguage: "",
					softCategoryId: 0,
					softCategoryName: "",
					softId: _this.$route.query.id,
					softIntroduce: _this.form.abstract,
					softLicense: "",
					softLogo: "",
					softName: _this.form.name,
					softSonCtyList: _this.form.softCategory,
					softUrl: _this.form.softUrl,
					softVersion: _this.form.softVersion,
					updateTime: "",
					userId: this.userId,
					userInterface: "",
					userInterfaceList: _this.form.userInterface,
					userList: []

				}

				joinVo.isShowDeveloperName = this.form.ifHsowRealName == true ? 0 : 1;
				if(!joinVo.isShowDeveloperName) {
					joinVo.developers = ''

				}
				joinVo.isSelf = _this.form.ifSelfStudy == true ? 1 : 0;

				if(!_this.form.name) {
					_this.messageOpen('请填写软件名称', 'warning')
					return false;
				}
				if(!_this.form.softVersion) {
					_this.messageOpen('请输入软件版本', 'warning')
					return false;
				}
				if(_this.form.opensourceType.length == 0) {
					_this.messageOpen('请选择开源类型', 'warning')
					return false;
				}
				if(_this.form.userInterface.length == 0) {
					_this.messageOpen('请选择用户接口', 'warning')
					return false;
				}
				if(_this.form.Language.length == 0) {
					_this.messageOpen('请选择编程语言', 'warning')
					return false;
				}
				if(_this.form.applicationField.length == 0) {
					_this.messageOpen('请选择应用领域', 'warning')
					return false;
				}

				if(_this.form.name.length > 50) {
					_this.messageOpen('软件名称不能超过50字，请重新输入', 'warning')
					return false;
				}

				if(_this.form.softCategory.length == 0) {
					_this.messageOpen('请填写软件类别', 'warning')
					return false;
				}
				if(!_this.form.softUrl) {
					_this.messageOpen('请填写代码地址', 'warning')
					return false;
				}
				/*			var reg = /github.com(.*?)/g;
							var reg1 = /cstos.cstcloud.cn(.*?)/g;
							if(!_this.form.softUrl) {
								_this.messageOpen('请填写代码地址', 'warning')
								return false;
							} else {
								if(!reg.test(_this.form.softUrl) && !reg1.test(_this.form.softUrl)) {
									_this.messageOpen('代码地址格式不正确,请使用github或cstos.cstcloud.cn的项目地址', 'warning')
									return false;
								}
							}*/
				if(_this.form.ifSelfStudy == 1) {

					if(!_this.firstDomains.userName) {
						_this.messageOpen('请填写参赛人姓名', 'warning')
						return false;
					}
					if(!_this.firstDomains.userUnit) {
						_this.messageOpen('请填写参赛人单位', 'warning')
						return false;
					}

					if(!_this.firstDomains.userJob) {
						_this.messageOpen('请填写参赛人工作', 'warning')
						return false;
					}

					if(!_this.firstDomains.userPhone) {
						_this.messageOpen('请填写参赛人手机', 'warning')
						return false;
					}
					var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;

					if(!phoneReg.test(this.firstDomains.userPhone)) {
						this.messageOpen('请填写正确手机号码', 'warning')
						return false;

					}
				}
				if(!_this.form.abstract) {
					_this.messageOpen('请填写作品摘要', 'warning')
					return false;
				}

				if(!_this.form.ifCheckedMzs) {
					_this.messageOpen('科研开源软件创意大赛免责协议', 'warning')
					return false;

				}

				_this.$refs[formName].validate((valid) => {
					if(valid) {
						this.firstDomains = {
							activityId: '',
							awardLevel: 0,
							awardTime: "",
							id: 0,
							joinTime: "",
							rank: 0,
							status: 0,
							softId: this.$route.query.id,
							userId: this.userId,
							userJob: this.firstDomains.userJob,
							userName: this.firstDomains.userName,
							userPhone: this.firstDomains.userPhone,
							userUnit: this.firstDomains.userUnit,
						}
						joinVo.userList.push(this.firstDomains);
						if(this.secondDomains.length > 0) {
							for(var i = 0; i < this.secondDomains.length; i++) {
								var cur = this.secondDomains[i]
								if(!cur.userName) {
									this.messageOpen('请填写参赛人姓名', 'warning')
									return false;
								}
								joinVo.userList.push(cur);
							}

						}

						var _this = this;

						_this.axios.defaults.headers.common['token'] = _this.token;
						_this.axios.post(baseUrl.baseUrl + '/web/user/saveSoftInfoUpdate', joinVo)
							.then(function(response) {

								if(response.data.code == 0) {
									_this.toPersonalInfo()
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

		}
	}
</script>

<style>

	.bodybg {
    background: #eef5f9;
}
	
	.addbg {
		width: 100%;
		background: url(../assets/bg/sign_bg.png) repeat;
	}
	
	.softModify-box {
		padding: 0 0 20px 0;
		margin: 20px auto;
		width: 880px;
		border: 1px solid #dedede;
		background: #fff;
	}
	
	.softModify h2 {
		margin: 0 0 20px 0;
		width: 100%;
		line-height: 50px;
		font-size: 16px;
		color: #fff;
		background: #4794e4;
		text-align: center;
		letter-spacing: 2px;
		background: linear-gradient(to bottom, #dfecfa 0%, #2295d9 8%, #4794e4 100%);
		border-bottom: 2px solid #2b75c2;
	}
	
	.softModify .box-big {
		position: relative;
		width: 100%;
		overflow: hidden;
	}
	
	.softModify .box-big .el-select__tags {
		margin-left: 15px;
	}
	
	.softModify .diatit {
		margin: 0;
		line-height: 14px;
		font-size: 12px;
		color: #999;
	}
	
	.softModify .h3 {
		width: 100%;
		font-size: 16px;
		font-weight: normal;
		line-height: 30px;
		color: #666;
		text-align: center;
	}
	
	.softModify .singtext {
		padding: 5px 0;
		margin: 0 0 15px 165px;
		width: 600px;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		background: #d0e1f1;
	}
	
	.softModify .singtext td {
		line-height: 30px;
	}
	
	.softModify .singtext .el-input__inner {
		margin-top: 10px;
		width: 100%;
		height: 30px;
		line-height: 30px;
	}
	
	.softModify .singtext .deltrbtn {
		margin-top: 10px;
		font-size: 12px;
		line-height: 30px;
		border-radius: 3px;
		color: #fff;
		background: #e26556;
		cursor: pointer;
	}
	
	.softModify .singtext .addtr {
		display: inline-block;
		margin: 10px 0 0 150px;
		padding: 0px 8px;
		font-size: 14px;
		height: 30px;
		line-height: 30px;
		color: #fff;
		background: #46c3a1;
		border-radius: 3px;
		cursor: pointer;
	}
	
	.softModify .singtext .el-input {
		padding: 0 5px;
		box-sizing: border-box;
	}
	
	.addti {
		font-style: normal;
		font-size: 14px;
		font-weight: bold;
		color: #F56C6C;
	}
	
	.softModify .addti {
		float: left;
		font-style: normal;
		font-size: 14px;
		font-weight: bold;
		color: #F56C6C;
	}
	
	.softModify .box-big .el-input {
		float: left;
		margin-left: 10px;
		width: 600px;
	}
	
	.softModify .domainsnum span {
		line-height: 40px;
		font-weight: bold;
		font-size: 14px;
		color: #F56C6C;
	}
	
	.softModify .tinymce-editor {
		margin-left: 10px;
		width: 600px;
	}
	
	.softModify .box-input {
		margin-top: 10px;
		float: left;
	}
	
	.softModify .bottom {
		overflow: hidden;
	}
	
	.softModify .left-box {
		overflow: hidden;
	}
	
	.softModify .right-box {
		display: block;
		margin: 10px auto;
		width: 460px;
	}
	
	.softModify .right-box button {
		padding: 15px 0;
		margin: 10px;
		display: block;
		margin: 10px auto;
		font-size: 16px;
		font-weight: bold;
		width: 300px;
		background: #4794e4;
		border: 1px dashed #4794e4;
	}
	
	.softModify .right-box button span {
		font-size: 16px;
		font-weight: bold;
		color: #fff;
	}
	
	.softModify .box {
		width: 100%;
		overflow: hidden;
	}
	
	.softModify .box .el-input {
		float: left;
		margin-left: 10px;
		width: 260px;
	}
	
	.softModify .examinedialog {
		width: 820px;
	}
	
	.softModify .examinedialog input {
		width: 220px;
	}
	
	.softModify .examinedialog .box {
		overflow: hidden;
		width: 100%;
	}
	
	.softModify .examinedialog .box-1 {
		overflow: hidden;
		width: 100%;
	}
	
	.softModify .examinedialog .box-1 .el-form-item__content {
		width: 600px;
	}
	
	.softModify .examinedialog .box .el-form-item__content {
		width: 280px;
	}
	
	.softModify .examinedialog .tit {
		margin-top: 5px;
		overflow: hidden;
	}
	
	.softModify .examinedialog .tit button {
		float: left;
		margin: 10px 0 0 5px;
		padding: 5px 8px;
		font-size: 14px;
		line-height: 16px;
		color: #fff;
		background: #ff9900;
		border-radius: 5px;
	}
	
	.softModify .examinedialog .tit p {
		float: left;
		margin-left: 20px;
		font-size: 12px;
		line-height: 24px;
		color: #cc0000;
	}
	
	.softModify .examinedialog .upload-demo {
		position: relative;
		width: 360px;
		display: inline-block;
	}
	
	.softModify .examinedialog .bottom {
		overflow: hidden;
		padding: 5px;
	}
	
	.softModify .examinedialog .bottom .right {
		float: right;
	}
	
	.softModify .avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	
	.softModify .avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	
	.softModify .avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 100px;
		height: 100px;
		line-height: 100px;
		text-align: center;
	}
	
	.softModify .upload-box {
		margin: 20px;
		float: left;
	}
	
	.softModify .upload-box p {
		width: 100%;
		text-align: center;
	}
	
	.softModify .avatar {
		width: 100px;
		height: 100px;
		display: block;
	}
	
	.avatar-uploader {
		position: relative;
		width: 100px;
		height: 100px;
	}
	
	.avatar-uploader .addShowPic {
		position: absolute;
		left: 0;
		top: 0;
		width: 100px;
		height: 100px;
	}
	
	.upload-box .el-upload-list {
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.upload-box .el-upload-list--picture .el-upload-list__item {
		margin: 0;
		height: 100px;
	}
	
	.upload-box .el-upload-list--picture .el-upload-list__item-thumbnail {
		width: 100px;
		height: 100px;
	}
	
	.upload-box .el-upload-list--picture .el-upload-list__item.is-success .el-upload-list__item-name {
		width: 0;
		margin: 0;
	}
	
	.el-upload-list__item.is-success .el-upload-list__item-status-label {
		z-index: 100;
	}
	
	.softModify .header-top {
		width: 100%;
		height: 46px;
		background: #4b505d;
	}
	
	.softModify .header-top .reposbox {
		overflow: hidden;
		position: relative;
		margin: 0 auto;
		width: 880px;
		height: 46px;
		font-size: 14px;
		line-height: 46px;
		color: #fff;
	}
	
	.softModify .header-top .reposbox .logo {
		float: left;
		margin-left: 10px;
		height: 46px;
		width: auto;
	}
	
	.softModify .header-top .reposbox .text {
		float: left;
		font-size: 14px;
		line-height: 46px;
		color: #fff;
	}
	
	.softModify .header-top .reposbox .right-text {
		float: right;
		margin-right: 10px;
		font-size: 14px;
		line-height: 46px;
		color: #f4f4f4;
		cursor: pointer;
	}
	
	.softModify .gitUrl {
		padding: 9px 6px;
		border: 1px solid #dedede;
		color: #999;
		line-height: 18px;
		background: #f0f2f5;
		margin-left: 5px;
		border-radius: 4px;
	}
</style>