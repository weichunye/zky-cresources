<template>
	<div class="signUp">
		<h2>报名信息
			<p @click="back" class="back-index">返回首页</p>
		</h2>

		<el-form :model="form" ref="form" :inline="true" class="demo-form-inline" @submit.native.prevent>
			<el-row :gutter="10" class="elrowclass">
				<el-col :xs="6">
					<p class="p">
						软件名称:
					</p>
				</el-col>
				<el-col :xs="18">
					<el-input v-model="form.name" placeholder="请输入软件名称"></el-input>

				</el-col>
			</el-row>
			<el-row :gutter="10" class="elrowclass">
				<el-col :xs="6">
					<p class="p">
						软件版本:
					</p>
				</el-col>
				<el-col :xs="18">
					<el-input v-model="form.softVersion" placeholder="请输入软件版本"></el-input>

				</el-col>
			</el-row>
			<el-row :gutter="10" class="elrowclass">
				<el-col :xs="6">
					<p class="p">
						开源类型:
					</p>
				</el-col>
				<el-col :xs="18">

					<el-select v-model="form.opensourceType" value-key="id"  multiple placeholder="请选择开源类型">
						<el-option v-for="item in opensourceTypeOption" :key="item.id" :label="item.ctyName" :value="item">
						</el-option>
					</el-select>

				</el-col>
			</el-row>

			<el-row :gutter="10" class="elrowclass">
				<el-col :xs="6">
					<p class="p">
						软件类别:
					</p>
				</el-col>
				<el-col :xs="18">
					<el-select v-model="form.softCategory" value-key="id"  multiple placeholder="请选择软件类别">
						<el-option v-for="item in softCategoryOption" :key="item.id" :label="item.ctyName" :value="item">
						</el-option>
					</el-select>
				</el-col>
			</el-row>

			<el-row :gutter="10" class="elrowclass">
				<el-col :xs="6">
					<p class="p">
						编程语言:
					</p>
				</el-col>
				<el-col :xs="18">
					<el-select v-model="form.Language" value-key="id"  multiple placeholder="请选择编程语言">
						<el-option v-for="item in LanguageOption" :key="item.id" :label="item.ctyName" :value="item">
						</el-option>
					</el-select>

				</el-col>
			</el-row>

			<el-row :gutter="10" class="elrowclass">
				<el-col :xs="6">
					<p class="p">
						用户接口:
					</p>
				</el-col>
				<el-col :xs="18">
					<el-select v-model="form.userInterface" value-key="id"  multiple placeholder="请选择用户接口">
						<el-option v-for="item in userInterfaceOption" :key="item.id" :label="item.ctyName" :value="item">
						</el-option>
					</el-select>

				</el-col>
			</el-row>

			<el-row :gutter="10" class="elrowclass">
				<el-col :xs="6">
					<p class="p">
						应用领域:
					</p>
				</el-col>
				<el-col :xs="18">
					<el-select v-model="form.applicationField" value-key="id"  multiple placeholder="请选择应用领域">
						<el-option v-for="item in applicationFieldOption" :key="item.id" :label="item.ctyName" :value="item">
						</el-option>
					</el-select>
				</el-col>
			</el-row>

			<el-row :gutter="10" class="elrowclass">
				<el-col :xs="6">
					<p class="p">
						代码地址
					</p>
				</el-col>
				<el-col :xs="18">
					<el-input v-model="form.softUrl" placeholder="github或cstos.cstcloud.cn的项目地址，推荐使用cstos.cstcloud.cn" auto-complete="off"></el-input>
					<a v-if="form.softUrl" target="_blank" :href="form.softUrl">查看</a>

				</el-col>
			</el-row>

			<div class="ov-box">

				<p class="p">
					是否跨平台：
				</p>
				<el-checkbox v-model="form.ifCrossPlatform"></el-checkbox>
			</div>

			<!--参考人员列表-->
			<h3>参赛人员</h3>
			<div class="userlist-box">
				<el-row :gutter="10" class="elrowclass">
					<el-col :xs="6">
						<p class="p">
							姓名:
						</p>
					</el-col>
					<el-col :xs="12">
						<el-input v-model="firstDomains.userName" placeholder="请输入内容"></el-input>

					</el-col>
					<el-col :xs="6">

						</el-col>
				</el-row>
				<el-row :gutter="10" class="elrowclass">
					<el-col :xs="6">
						<p class="p">
							所在单位:
						</p>
					</el-col>
					<el-col :xs="12">
						<el-input v-model="firstDomains.userUnit" placeholder="请输入内容"></el-input>

					</el-col>
					<el-col :xs="6">

						</el-col>
				</el-row>
				<el-row :gutter="10" class="elrowclass">
					<el-col :xs="6">
						<p class="p">
							承担工作:
						</p>
					</el-col>
					<el-col :xs="12">

						<el-input v-model="firstDomains.userJob" placeholder="请输入内容"></el-input>

					</el-col>
					<el-col :xs="6">

						</el-col>
				</el-row>
				<el-row :gutter="10" class="elrowclass">
					<el-col :xs="6">
						<p class="p">
							手机:
						</p>
					</el-col>
					<el-col :xs="12">
						<el-input v-model="firstDomains.userPhone" placeholder="请输入内容"></el-input>

					</el-col>
					<el-col :xs="6">

						</el-col>
				</el-row>
				<!--新增-->
				<div v-for="item in secondDomains" class="add-box">
					<el-row :gutter="10" class="elrowclass">
						<el-col :xs="6">
							<p class="p">
								姓名:
							</p>
						</el-col>
						<el-col :xs="12">
							<el-input v-model="item.userName" placeholder="请输入内容"></el-input>

						</el-col>
						<el-col :xs="6">
							<el-button class='deltrbtn'  @click="delTr($event)" size="medium">删除</el-button>

						</el-col>
					</el-row>

					<el-row :gutter="10" class="elrowclass">
						<el-col :xs="6">
							<p class="p">
								所在单位:
							</p>
						</el-col>
						<el-col :xs="12">
							<el-input v-model="item.userUnit" placeholder="请输入内容"></el-input>

						</el-col>

						<el-col :xs="6">

						</el-col>
					</el-row>
					<el-row :gutter="10" class="elrowclass">
						<el-col :xs="6">
							<p class="p">
								承担工作:
							</p>
						</el-col>
						<el-col :xs="12">

							<el-input v-model="item.userJob" placeholder="请输入内容"></el-input>

						</el-col>
						<el-col :xs="6">

						</el-col>
					</el-row>
					<el-row :gutter="10" class="elrowclass">
						<el-col :xs="6">
							<p class="p">
								手机:
							</p>
						</el-col>
						<el-col :xs="12">
							<el-input v-model="item.userPhone" placeholder="请输入内容"></el-input>

						</el-col>
						<el-col :xs="6">

						</el-col>
					</el-row>

				</div>

				<el-button @click="addDomain" class="elebtn" type="primary">新增一行</el-button>

			</div>
			<!--参考人员列表-->
			<div class="box-input">
				<tinymce-editor v-model="form.abstract" :disabled=false ref="editor"></tinymce-editor>

			</div>

			<div class="ov-box">
				<el-checkbox v-model="form.ifCheckedCns"></el-checkbox>
				<p class="p">
					科研开源软件创意大赛承诺书
				</p>
			</div>
			<div class="ov-box">
				<el-checkbox v-model="form.ifCheckedMzs"></el-checkbox>
				<p class="p">
					科研开源软件创意大赛免责协议
				</p>
			</div>

			<el-button class="elebtn" @click="submitForm('form')" type="primary">提交</el-button>

		</el-form>

	</div>
</template>

<script>
	import TinymceEditor from '@/components/tinymce-editor'
	import baseUrl from '../../config/index.js'
	export default {
		name: 'signUp',
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
					softUrl: '',
					ifCheckedCns: '',
					ifCheckedMzs: '',
					abstract: ''
				},
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
				opensourceTypeOption: [],
				applicationFieldOption: [],
				softCategoryOption: [],
				LanguageOption: [],
				userInterfaceOption: [],

			}
		},
		mounted() {
			var _this = this;
			_this.getListOption()
			$('#app').css('width','auto')
		},
		methods: {
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
			//新增一行
			addDomain: function() {
				var _this = this;
				_this.secondDomains.push({
					activityId: this.$route.query.activityId,
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
  delTr:function(event){
  	
  	var _this=this;
  	var eve=event.currentTarget
  	var thisId=$(eve).attr('id')
  	_this.secondDomains.splice(thisId-1,1)
  	
  },
  back:function(){
   		this.$router.go(-1);//返回上一层
   	},
			//提交
			submitForm: function(formName) {
				var _this = this;
				_this.form.ifCrossPlatform = _this.form.ifCrossPlatform == true ? _this.form.ifCrossPlatform = 1 : 0
				var joinVo = {
					activityId: this.$route.query.activityId,
					applicationField: '',
					applicationFieldList: _this.form.applicationField,
					createTime: "",
					createUser: "",
					developers: "",
					expertEvaluateRejectReason: "",
					firstAudit: 0,
					firstAuditRejectReason: "",
					id: 0,
					isChina: 0,
					isEvaluate: 0,
					isExpertEvaluate: 0,
					isHot: 0,
					isPlatform: _this.form.ifCrossPlatform,
					isRecommend: 0,
					isShow: 0,
					opensourceType: "",
					opensourceTypeList: _this.form.opensourceType,
					operatingSystem: "",
					programmingLanguage: "",
					programLanguageList: _this.form.Language,
					softCategoryId: 0,
					softCategoryName: "",
					softId: "",
					softIntroduce: _this.form.abstract,
					softLicense: "",
					softLogo: "",
					softName: _this.form.name,
					softSonCtyList: _this.form.softCategory,
					softUrl: _this.form.softUrl,
					softVersion: _this.form.softVersion,
					updateTime: "",
					userId: this.userId,
					userInterface: '',
					userInterfaceList: _this.form.userInterface,
					userList: [],

				}

				/*		forOption('softCategory','softSonCtyList')
				   		forOption('applicationField','applicationFieldList')
				   		forOption('opensourceType','opensourceTypeList')
				   		forOption('userInterface','userInterfaceList')
				   		forOption('Language','programLanguageList')*/

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
				var reg = /github.com(.*?)/g;
				var reg1 = /cstos.cstcloud.cn(.*?)/g;
				if(!_this.form.softUrl) {
					_this.messageOpen('请填写代码地址', 'warning')
					return false;
				} else {
					if(!reg.test(_this.form.softUrl) && !reg1.test(_this.form.softUrl)) {
						_this.messageOpen('代码地址格式不正确,请使用github或cstos.cstcloud.cn的项目地址', 'warning')
						return false;
					}
				}

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
				if(!_this.form.abstract) {
					_this.messageOpen('请填写作品摘要', 'warning')
					return false;
				}

				if(!_this.firstDomains.userPhone) {
					_this.messageOpen('请填写参赛人手机', 'warning')
					return false;
				}
				if(!_this.form.ifCheckedCns) {
					_this.messageOpen('请填写科研开源软件创意大承诺书', 'warning')
					return false;

				}
				if(!_this.form.ifCheckedMzs) {
					_this.messageOpen('科研开源软件创意大赛免责协议', 'warning')
					return false;

				}
				/* var str = 'httpscstos.cstcloud.cn/michaelliao/learngit'; */
				/*function forOption(type,arr){
			for(var i=0; i<_this.form[type].length; i++){
				console.log("_this.form[type]",_this.form[type])
			var cur=_this.form[type][i];
					console.log("cur",cur)
			var curObj={
				createTime: "",
				ctyName: "",
				id:cur,
				imgUrl: "",
				isParent: 0,
				parentId: 0,
				sortNum: 0,
				status: 0,
				updateTime: ""
			}
			
			 joinVo[arr].push(curObj);
		}	
		
   		}*/

				_this.$refs[formName].validate((valid) => {
					if(valid) {
						this.firstDomains = {
							activityId: this.$route.query.activityId,
							awardLevel: 0,
							awardTime: "",
							id: 0,
							joinTime: "",
							rank: 0,
							status: 0,
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
									if(!cur.userName){
							this.messageOpen('请填写参赛人姓名','warning')
			return false;
					}
								joinVo.userList.push(cur);
							}

						}
						var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;

						if(!phoneReg.test(this.firstDomains.userPhone)) {
							this.messageOpen('请填写正确手机号码', 'warning')
							return false;

						}
						var _this = this;
						_this.axios.defaults.headers.common['token'] = _this.token;
						_this.axios.post(baseUrl.baseUrl + '/web/join/saveJoinInfo', joinVo)
							.then(function(response) {

								_this.$alert(response.data.msg, '提示信息', {
									confirmButtonText: '确定',
								});

								if(response.data.code == 0) {
								this.$router.push({
								path: '/'
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
	.signUp h2 {
		position: relative;
		padding: 20px 0 20px;
		width: 100%;
		font-size: 20px;
		text-align: center;
		border-bottom: 1px solid #dedede;
	}
	.signUp h2 .back-index{
		position: absolute;
		right: 5px;
		top: 25px;
		color: #65a6bf;
		text-decoration: underline;
	}
	.signUp .userlist-box {
		padding: 10px 0;
		overflow: hidden;
		background: #d5e5f2;
	}
	
	.signUp h3 {
		padding: 10px 0 10px;
		width: 100%;
		font-size: 16px;
		text-align: center;
	}
	.signUp .box-input{
		overflow: hidden;
		width: 100%;
	}
	.signUp .add-box{
		padding: 5px 0;
		background: #e2f3ed;
		border-bottom: 1px dashed #dedede;
	}
	.signUp .el-select {
		width: 100%;
	}
	
	.signUp .ov-box {
		width: 100%;
		overflow: hidden;
	}
	
	.signUp .ov-box p {
		float: left;
	}
	
	.signUp .ov-box .el-checkbox {
		float: left;
	}
	
	.signUp .elebtn {
		display: block;
		margin: 5px auto;
		width: 100px;
		color: #fff;
	}
	
	.elrowclass {
		margin: 5px auto;
	}
	
	.elrowclass p {
		text-align: center;
		line-height: 40px;
	}
</style>