<template>
	<div class="bodybg">

		<div class="addbg">

			<div class="agSignUp">

				<div class="header-top">
					<div class="reposbox">
						<router-link to="/">
							<img class="logo" src="../assets/img/top_logo.png" alt="logo" />
						</router-link>
						<p class="text">
							欢迎来到科学软件开源社区！
						</p>

						<p @click="toPersonalInfo" class="right-text">{{userInfo.trueName}},&nbsp;&nbsp;个人中心</p>
					</div>
				</div>

				<div class="agSignUp-box">

					<h2>活动报名     <span  @click="back">返回竞赛首页</span></h2>
					<!--banner-->

					<el-form :model="form" ref="form" :inline="true" class="demo-form-inline" @submit.native.prevent>
						<div class="box-big" style="margin-bottom: 15px;">

							<el-form-item label="软件名称" :label-width="formLabelWidth">
								<em class="addti">*</em>
								<el-input v-model.trim="form.name" placeholder="请输入软件名称" auto-complete="off"></el-input>
							</el-form-item>
						</div>
						<div class="box-big" style="margin-bottom: 15px;">

							<el-form-item label="软件版本" :label-width="formLabelWidth">
								<em class="addti">*</em>
								<el-input v-model.trim="form.softVersion" placeholder="请输入软件版本" auto-complete="off"></el-input>
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
							<!--	<a class="gitUrl" v-if="form.softUrl" target="_blank" :href="form.softUrl">查看</a>-->
								<p class="textp"> {{softUrlTit}}</p>
								<p class="diatit">多个地址请用英文","分隔</p>
							</el-form-item>
							<!--<el-form-item label=" " :label-width="formLabelWidth">
						<el-checkbox v-model="form.ifCrossPlatform">是否跨平台</el-checkbox>
					</el-form-item>-->

						</div>

						<div class="box-teacher">

							<el-form-item label="指导教师" :label-width="formLabelWidth">
								<em class="addti">&nbsp;</em>
								<el-input v-model="isTeacherVal.teacherName" placeholder="请输入指导教师姓名" auto-complete="off"></el-input>
								<el-input v-model="isTeacherVal.teacherUnit" placeholder="请输入指导教师所在单位" auto-complete="off"></el-input>
								<el-input v-model="isTeacherVal.teacherPhone" placeholder="请输入教师手机号码" auto-complete="off"></el-input>
							</el-form-item>
						</div>

						<h3 class="h3">参赛人员<span>(参赛人信息需如实填写)</span></h3>
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
									<el-checkbox style="float: right; margin:10px 10px 0 0 ;color: #999;" v-model="form.ifHsowRealName">是否在发布时匿名</el-checkbox>

								</td>
							</tr>
						</table>
						<div class="box-big">

							<el-form-item label="作品摘要" :label-width="formLabelWidth">
								<em class="addti">*</em>
								<div class="box-input">
									<tinymce-editor v-model="form.abstract" :disabled=false ref="editor"></tinymce-editor>

								</div>
							</el-form-item>
						</div>
						<div class="examinedialog">

							<div class="box">
								<el-form-item prop="softUrl" label="分析设计文档" :label-width="formLabelWidth">
									<em class="addti">*</em>
									<el-input :disabled="true" v-model="form.analysisName" placeholder="" auto-complete="off"></el-input>
									<div class="tit">
										<!--<button>下载模板</button>-->

									</div>
								</el-form-item>
								<el-upload class="upload-demo" ref="analysisRef" :action=upUrl :on-success='analysisDocSuccess' :on-change="analysisDocChange" :limit="1" alllist-con :auto-upload="false" :file-list="fileList1">
									<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
									<el-button style="margin-left:5px; width:115px" size="small" type="success" @click="submitUpload()">上     传</el-button>
									<a target="_blank" :href="analysisDocUrl">
										<el-button v-if="ifCheck" style="float: right; margin-left: 10px;" size="small">查看已上传文件</el-button>
									</a>
									<div slot="tip" class="el-upload__tip">描述设计架构，模块功能描述，相关依赖软件的说明，与同类软件对比分析等。只能上传 .doc/.docx/.pdf文件，且不超过1M
									<span v-if="analysisCheck&&!form.analysisName">请确认文档并上传</span>
									</div>
								</el-upload>
							</div>
							<div class="box">
								<el-form-item prop="softUrl" label="项目规格书" :label-width="formLabelWidth">
									<em class="addti">*</em>
									<el-input :disabled="true" v-model="form.itemBookName" placeholder="" auto-complete="off"></el-input>
									<div class="tit">
										<!--<button>下载模板</button>-->

									</div>
								</el-form-item>

								<el-upload class="upload-demo" ref="itemBookRef" :action=upUrl :on-success='itemBookDocSuccess' :on-change="itemBookDocChange"  :limit="1" alllist-con :auto-upload="false" :file-list="fileList2">

									<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
									<el-button style="margin-left:5px; width:115px" size="small" type="success" @click="submitItemBook()">上     传</el-button>
									<a target="_blank" :href="itemBookDocUrl">
										<el-button v-if="ifCheck" style="float: right; margin-left: 10px;" size="small">查看已上传文件</el-button>
									</a>
									<div slot="tip" class="el-upload__tip">包括创作思路，科研领域，成功案例等。只能上传 .doc/.docx/.pdf文件，且不超过1M<span v-if="itemBookCheck&&!form.itemBookName">请确认文档并上传</span></div>
								</el-upload>

							</div>
							<div class="box">
								<el-form-item prop="softUrl" label="测试文档" :label-width="formLabelWidth">
									<em class="addti">*</em>
									<el-input :disabled="true" v-model="form.testDocName" placeholder="" auto-complete="off"></el-input>
									<div class="tit">
										<!--<button>下载模板</button>-->

									</div>
								</el-form-item>
								<el-upload class="upload-demo" ref="testDocRef" :action=upUrl :on-success='testDocSuccess' :on-change="testDocChange" :limit="1" alllist-con :auto-upload="false" :file-list="fileList3">
									<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
									<el-button style="margin-left:5px; width:115px" size="small" type="success" @click="submitTestDoc()">上     传</el-button>
									<a target="_blank" :href="testDocUrl">
										<el-button v-if="ifCheck" style="float: right; margin-left: 10px;" size="small">查看已上传文件</el-button>
									</a>
									<div slot="tip" class="el-upload__tip">只能上传 .doc/.docx/.pdf文件，且不超过1M<span  v-if="testDocCheck&&!form.testDocName">请确认文档并上传</span></div>
								</el-upload>

							</div>
							<div class="box">
								<el-form-item prop="softUrl" label="用户手册" :label-width="formLabelWidth">
									<em class="addti">*</em>
									<el-input :disabled="true" v-model="form.userDocName" placeholder="" auto-complete="off"></el-input>
									<div class="tit">
										<!--<button>下载模板</button>-->

									</div>
								</el-form-item>
								<el-upload class="upload-demo" ref="userDocRef" :action=upUrl :on-success='userDocSuccess' :on-change="userDocChange" :limit="1" alllist-con :auto-upload="false" :file-list="fileList4">
									<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
									<el-button style="margin-left:5px; width:115px" size="small" type="success" @click="submitUserDoc()">上     传</el-button>
									<a target="_blank" :href="userDocUrl">
										<el-button v-if="ifCheck" style="float: right; margin-left: 10px;" size="small">查看已上传文件</el-button>
									</a>
									<div slot="tip" class="el-upload__tip">只能上传 .doc/.docx/.pdf文件，且不超过1M<span v-if="userDocCheck&&!form.userDocName" >请确认文档并上传</span></div>
								</el-upload>

							</div>
						<!--	<div class="box">
								<el-form-item prop="softUrl" label="设计架构及技术报告" :label-width="formLabelWidth">
									<em class="addti">*</em>
									<el-input :disabled="true" v-model="form.frameworkReportName" placeholder="" auto-complete="off"></el-input>
									<div class="tit">
										
									</div>
								</el-form-item>
								<el-upload class="upload-demo" ref="frameworkReportDocRef" :action=upUrl :on-success='frameworkReportDocSuccess' :limit="1" alllist-con :auto-upload="false" :file-list="fileList9">
									<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
									<el-button style="margin-left:5px; width:115px" size="small" type="success" @click="submitFrameworkReportDoc()">上     传</el-button>
									<a target="_blank" :href="frameworkReportDocUrl">
										<el-button v-if="ifCheck" style="float: right; margin-left: 10px;" size="small">查看已上传文件</el-button>
									</a>
									<div slot="tip" class="el-upload__tip">系统设计架构概述、创新思路、对使用的技术机制进行分析，对各模块进行功能描述。只能上传 .doc/.docx/.pdf文件，且不超过1M</div>
								</el-upload>

							</div>-->
							<div class="box-1">
								<el-form-item prop="softUrl" label="软件效果展示" :label-width="formLabelWidth">
									<em class="addti">*</em>
									<div class="upload-box">
										<el-upload class="avatar-uploader" :action=imgUrlNew :show-file-list="true" list-type="picture" :on-success="ImgSuccessFirst" :file-list="fileList5">
											<img v-if="imageUrl" :src="imageUrl" class="avatar">
											<i v-else class="el-icon-plus avatar-uploader-icon"></i>
											<img v-if="ifCheck&&form.softImgOne" class="addShowPic" :src="softImgOneUrl" />
										</el-upload>
										<p>请上传图片</p>

									</div>
									<div class="upload-box">
										<el-upload class="avatar-uploader" :action=imgUrlNew :show-file-list="true" list-type="picture" :on-success="ImgSuccessSecond" :file-list="fileList6">
											<img v-if="imageUrl" :src="imageUrl" class="avatar">
											<i v-else class="el-icon-plus avatar-uploader-icon"></i>
											<img v-if="ifCheck&&form.softImgTwo" class="addShowPic" :src="softImgTwoUrl" />
										</el-upload>
										<p>请上传图片</p>
									</div>
									<div class="upload-box">
										<el-upload class="avatar-uploader" :action=imgUrlNew :show-file-list="true" list-type="picture" :on-success="ImgSuccessThird" :file-list="fileList7">
											<img v-if="imageUrl" :src="imageUrl" class="avatar">
											<i v-else class="el-icon-plus avatar-uploader-icon"></i>
											<img v-if="ifCheck&&form.softImgThree" class="addShowPic" :src="softImgThreeUrl" />
										</el-upload>
										<p>请上传图片</p>
									</div>
									<div class="upload-box">
										<el-upload class="avatar-uploader" :action=imgUrlVideo :show-file-list="true" list-type="picture" :on-success="videoSuccessFirst" :file-list="fileList8">
											<img v-if="imageUrl" :src="imageUrl" class="avatar">
											<i v-else class="el-icon-plus avatar-uploader-icon"></i>
											<img v-if="ifCheck&&form.softImgThree" class="addShowPic" :src="softImgThreeUrl" />
										</el-upload>
										<p>请上传视频</p>
									</div>

								</el-form-item>
								<p class="uploadtit"> 包括软件界面展示、运行结果展示或其他能够展示软件图片或视频，图片格式为jpg，单个图片不大于1M，视频时长不超过5分钟。
								</p>
							</div>

						</div>

						<div class="bottom">
							<div class="left-box">
								<el-form-item label=" " :label-width="formLabelWidth">
									<el-checkbox v-model="form.ifCheckedCns">
										<router-link target="_blank" to="page1">科研开源软件创意大赛承诺书</router-link>
									</el-checkbox>

								</el-form-item>
								<el-form-item label=" " :label-width="formLabelWidth">
									<el-checkbox v-model="form.ifCheckedMzs">
										<router-link target="_blank" to="page2">科研开源软件创意大赛免责协议</router-link>
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
			<a :href="wordUrl" target="_blank" class="float_word">
				报名资料模板下载

			</a>
		</div>
	</div>
</template>
<script type="text/javascript">
</script>
<script>
	import TinymceEditor from '@/components/tinymce-editor'
	import baseUrl from '../../config/index.js'
	export default {
		name: 'agSignUp',
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
					ifCheckedMzs: '',
					abstract: '',
					analysisDoc: '',
					frameworkReportDoc: '',
					itemBookDoc: '',
					softResultDoc: '',
					testDoc: '',
					userDoc: '',
					softImgOne: '',
					softImgTwo: '',
					softImgThree: '',
					softVideo: '',
					analysisName: '',
					frameworkReportName: '',
					itemBookName: '',
					softResultName: '',
					testDocName: '',
					userDocName: '',
					softImgOneName: '',
					softImgTwoName: '',
					softImgThreeName: '',
					softVideoName: '',
					ifHsowRealName: false, //true不匿名，false匿名
				},
				analysisCheck:'',
				itemBookCheck:'',
				testDocCheck:'',
				userDocCheck:'',
				fileList1: [],
				fileList2: [],
				fileList3: [],
				fileList4: [],
				fileList5: [],
				fileList6: [],
				fileList7: [],
				fileList8: [],
				fileList9: [],
				softUrlTit: '',
				getSoftUrl:'',
				joinVoUrl: '',
				upUrl: baseUrl.baseUrl + '/sys/upload/uploadForEvaluate/',
				imgUrlNew: baseUrl.baseUrl + '/sys/upload/uploadForEvaluateImg/',
				imgUrlVideo: baseUrl.baseUrl + '/sys/upload/uploadForEvaluateVideo/',
				analysisDocUrl: '',
				frameworkReportDocUrl: '',
				itemBookDocUrl: '',
				softResultDocUrl: '',
				testDocUrl: '',
				userDocUrl: '',
				softImgOneUrl: '',
				softImgTwoUrl: '',
				softImgThreeUrl: '',
				softVideoUrl: '',
				imageUrl: '',
				firstDomains: {
					isTeacher: 0,
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
				ifTeacher: 0,
				isTeacherVal: {
					teacherName: '',
					teacherUnit: '',
					teacherPhone: '',
					teacherJob: '指导教师',
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
				wordUrl: '',

			}
		},
		mounted() {
			//获取活动基本信息
			var _this = this;
			_this.getListOption()

			if(this.$route.query.check) {
				_this.checkId = this.$route.query.softId;
				_this.joinVoUrl = '/web/join/joinInfoUpdate';
				_this.ifCheck = true;
				_this.form.ifCheckedCns = true;
				_this.form.ifCheckedMzs = true;
				_this.getSoftInfo()
				//是修改
			} else {
				_this.joinVoUrl = '/web/join/saveJoinInfoAndDoc';
				//是新增
			}
			//获取修改信息

			_this.getoSystemOption()
			_this.getWorldUrl()

		},
		methods: {
			//新增行
			addDomain: function() {
				var _this = this;
				_this.secondDomains.push({
					activityId: this.$route.query.activityId,
					isTeacher: 0,
					awardLevel: 0,
					awardTime: "",
					id: 0,
					joinTime: "",
					rank: 0,
					status: 0,
					userId: this.userId,
					softId: this.checkId,
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
			//下载比赛文档
			getWorldUrl: function() {
				var _this = this;
				_this.axios.post(baseUrl.baseUrl + '/web/join/joinDocPackageDownload')
					.then(function(response) {
						_this.wordUrl = baseUrl.baseUrlImg + response.data.packageUrl

					})

			},
			//获取操作平台表单下拉内容
			getoSystemOption: function() {
				var _this = this;
				var params = new URLSearchParams();
				params.append("dictId", 6);
				_this.axios.post(baseUrl.baseUrl + '/api/dict/getDictDetailsByDictId',params)
					.then(function(response) {
						_this.operatingSystemOption = response.data.list

					})
			},
			//修改信息之前获取软件信息
			getSoftInfo: function() {
				var _this = this;
				var params = new URLSearchParams();
				params.append("activityId", this.$route.query.activityId);
				params.append("softId", this.$route.query.softId);
				params.append("userId", this.userId);
				params.append("token", this.token);
				_this.axios.post(baseUrl.baseUrl + 'web/user/getJoinDetail', params)
					.then(function(response) {
						var softInfoObg = response.data.softInfo;
						var userListObg = response.data.userList;
						var teacherObg = response.data.teacher[0];
						var softDocObg = response.data.softDoc;
						_this.softId = response.data.softInfo.id;
						_this.form.name = softInfoObg.softName;
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
						_this.form.ifHsowRealName = softInfoObg.isShowDeveloperName == 0 ? true : false;

						var firstUserListObg = userListObg[0]
						_this.firstDomains.userName = firstUserListObg.userName;
						_this.firstDomains.userUnit = firstUserListObg.userUnit;
						_this.firstDomains.userJob = firstUserListObg.userJob;
						_this.firstDomains.userPhone = firstUserListObg.userPhone;
						for(var i = 1; i < userListObg.length; i++) {
							_this.secondDomains.push(userListObg[i])
						}
						_this.isTeacherVal.teacherName = teacherObg.userName;
						_this.isTeacherVal.teacherUnit = teacherObg.userUnit;
						_this.isTeacherVal.teacherPhone = teacherObg.userPhone;
						_this.analysisDocUrl = baseUrl.baseUrlImg + softDocObg.analysisDoc
						_this.frameworkReportDocUrl = baseUrl.baseUrlImg + softDocObg.frameworkReportDoc
						_this.itemBookDocUrl = baseUrl.baseUrlImg + softDocObg.itemBookDoc
						_this.testDocUrl = baseUrl.baseUrlImg + softDocObg.testDoc
						_this.userDocUrl = baseUrl.baseUrlImg + softDocObg.userDoc
						_this.softImgOneUrl = baseUrl.baseUrlImg + softDocObg.softImgOne
						_this.softImgTwoUrl = baseUrl.baseUrlImg + softDocObg.softImgTwo
						_this.softImgThreeUrl = baseUrl.baseUrlImg + softDocObg.softImgThree
						_this.softVideoUrl = baseUrl.baseUrlImg + softDocObg.softVideo
						_this.form.analysisDoc = softDocObg.analysisDoc
						_this.form.frameworkReportDoc = softDocObg.frameworkReportDoc
						_this.form.itemBookDoc = softDocObg.itemBookDoc
						_this.form.userDoc = softDocObg.testDoc
						_this.form.testDoc = softDocObg.userDoc
						_this.form.softImgOne = softDocObg.softImgOne
						_this.form.softImgTwo = softDocObg.softImgTwo
						_this.form.softImgThree = softDocObg.softImgThree
						_this.form.softVideo = softDocObg.softVideo

						_this.form.analysisName = softDocObg.analysisDocOriginalName
						/*_this.form.frameworkReportName = softDocObg.frameworkReportDocOriginalName*/
						_this.form.itemBookName = softDocObg.itemBookDocOriginalName
						_this.form.userDocName = softDocObg.userDocOriginalName
						_this.form.testDocName = softDocObg.testDocOriginalName
						_this.form.softImgOneName = softDocObg.softImgTwoOriginalName
						_this.form.softImgTwoName = softDocObg.softImgTwoOriginalName
						_this.form.softImgThreeName = softDocObg.softImgThreeOriginalName
						_this.form.softVideoName = softDocObg.softVideoOriginalName

					})
					.catch(function(error) {
						console.log(error);
					})

			},
			back: function() {
				this.$router.go(-1); //返回上一层
			},
			//分析设计文档
			submitUpload() {
				this.$refs.analysisRef.submit();
			},
			analysisDocSuccess: function(response, file, fileList) {
				this.form.analysisDoc = response.filePath;
				this.form.analysisName = response.originalFileName;
				var codeStype;
				if(response.code == 0) {
					codeStype = 'success'

				} else {
					codeStype = 'warning'
					
				}
				this.messageOpen(response.msg, codeStype)
				this.fileList1 = []

	
			},
			  analysisDocChange(file) {
			  	this.analysisCheck=file.name
			  
       			 
      			},

			//项目规格书
			submitItemBook() {
				this.$refs.itemBookRef.submit();
			},
			itemBookDocSuccess: function(response, file, fileList) {
				this.form.itemBookDoc = response.filePath;
				this.form.itemBookName = response.originalFileName;
				var codeStype;
				if(response.code == 0) {
					codeStype = 'success'

				} else {
					codeStype = 'warning'
				}
				this.messageOpen(response.msg, codeStype)
				this.fileList2 = []

			},
			 itemBookDocChange(file) {
       				this.itemBookCheck=file.name
      			},
			submitUserDoc() {
				this.$refs.userDocRef.submit();
			},
			userDocSuccess: function(response, file, fileList) {
				this.form.userDoc = response.filePath;
				this.form.userDocName = response.originalFileName;
				var codeStype;
				if(response.code == 0) {
					codeStype = 'success'

				} else {
					codeStype = 'warning'
				}
				this.messageOpen(response.msg, codeStype)
				this.fileList4 = []

			},
			 userDocChange(file) {
       				this.userDocCheck=file.name
      			},
			submitSoftResultDoc() {
				this.$refs.softResultDocRef.submit();
			},
			softResultDocSuccess: function(response, file, fileList) {
				this.form.softResultDoc = response.filePath
				var codeStype;
				if(response.code == 0) {
					codeStype = 'success'

				} else {
					codeStype = 'warning'
				}
				this.messageOpen(response.msg, codeStype)

			},
			
			/*submitFrameworkReportDoc() {
				this.$refs.frameworkReportDocRef.submit();
			},
			frameworkReportDocSuccess: function(response, file, fileList) {
				console.log("response", response)
				this.form.frameworkReportDoc = response.filePath;
				this.form.frameworkReportName = response.originalFileName;
				var codeStype;
				if(response.code == 0) {
					codeStype = 'success'

				} else {
					codeStype = 'warning'
				}
				this.messageOpen(response.msg, codeStype)
				if(response.code == 452) {
					this.fileList9 = []
				}

			},*/
			submitTestDoc() {
				this.$refs.testDocRef.submit();
			},
			testDocSuccess: function(response, file, fileList) {
				this.form.testDoc = response.filePath;
				this.form.testDocName = response.originalFileName;
				var codeStype;
				if(response.code == 0) {
					codeStype = 'success'

				} else {
					codeStype = 'warning'
				}
				this.messageOpen(response.msg, codeStype)
				this.fileList3 = []

			},
			testDocChange(file) {
       			this.testDocCheck=file.name
      			},

			ImgSuccessFirst: function(response, file, fileList) {
				this.form.softImgOne = response.filePath;
				this.form.softImgOneName = response.originalFileName;
				var codeStype;
				if(response.code == 0) {
					codeStype = 'success'

				} else {
					codeStype = 'warning'
				}
				this.messageOpen(response.msg, codeStype)
				if(response.code == 452) {
					this.fileList5 = []
				}

			},
			ImgSuccessSecond: function(response, file, fileList) {
				this.form.softImgTwo = response.filePath;
				this.form.softImgTwoName = response.originalFileName;
				var codeStype;
				if(response.code == 0) {
					codeStype = 'success'

				} else {
					codeStype = 'warning'
				}
				this.messageOpen(response.msg, codeStype)
				if(response.code == 452) {
					this.fileList6 = []
				}

			},
			ImgSuccessThird: function(response, file, fileList) {
				this.form.softImgThree = response.filePath;
				this.form.softImgThreeName = response.originalFileName;
				var codeStype;
				if(response.code == 0) {
					codeStype = 'success'

				} else {
					codeStype = 'warning'
				}
				this.messageOpen(response.msg, codeStype)
				if(response.code == 452) {
					this.fileList7 = []
				}

			},
			videoSuccessFirst: function(response, file, fileList) {
				this.form.softVideo = response.filePath;
				this.form.softVideoName = response.originalFileName;
				var codeStype;
				if(response.code == 0) {
					codeStype = 'success'

				} else {
					codeStype = 'warning'
				}
				this.messageOpen(response.msg, codeStype)
				if(response.code == 452) {
					this.fileList8 = []
				}

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
					activityId: this.$route.query.activityId,
					applicationField: '',
					applicationFieldList: _this.form.applicationField,
					createTime: "",
					createUser: "",
					developers: "",
					expertEvaluateRejectReason: "",
					firstAudit: 0,
					firstAuditRejectReason: "",
					id: _this.checkId,
					createUserName:this.userInfo.trueName,
					isChina: 0,
					isEvaluate: 0,
					isExpertEvaluate: 0,
					isHot: 0,
					isPlatform: _this.form.ifCrossPlatform,
					isRecommend: 0,
					isShow: 0,
					isSelf: 1,
					isShowDeveloperName: '',
					opensourceType: '',
					opensourceTypeList: _this.form.opensourceType,
					operatingSystem: '',
					programmingLanguage: '',
					programLanguageList: _this.form.Language,
					operatingSystemList: _this.form.operatingSystem,
					softCategoryId: 0,
					softCategoryName: "",
					softId: _this.checkId,
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
					isMatchSoft: 1,
					userList: [],
					softDoc: {
						analysisDoc: this.form.analysisDoc,
						createTime: "",
						softCompressedPackage: '',
						frameworkReportDoc: this.form.frameworkReportDoc,
						id: 0,
						itemBookDoc: this.form.itemBookDoc,
						softId: _this.checkId,
						softResultDoc: this.form.softResultDoc,
						testDoc: this.form.testDoc,
						userDoc: this.form.userDoc,
						softImgOne: this.form.softImgOne,
						softImgTwo: this.form.softImgTwo,
						softImgThree: this.form.softImgThree,
						softVideo: this.form.softVideo,
						analysisDocOriginalName: this.form.analysisName,
						frameworkReportDocOriginalName: this.form.frameworkReportName,
						itemBookDocOriginalName: this.form.itemBookName,
						softResultDocOriginalName: this.form.softResultName,
						testDocOriginalName: this.form.testDocName,
						userDocOriginalName: this.form.userDocName,
						softImgOneOriginalName: this.form.softImgOneName,
						softImgTwoOriginalName: this.form.softImgTwoName,
						softImgThreeOriginalName: this.form.softImgThreeName,
						softVideoOriginalName: this.form.softVideoName,
					},

				}
				joinVo.isShowDeveloperName = this.form.ifHsowRealName == true ? 0 : 1;

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
					_this.messageOpen('请勾选科研开源软件创意大承诺书', 'warning')
					return false;

				}
				if(!_this.form.ifCheckedMzs) {
					_this.messageOpen('请勾选科研开源软件创意大赛免责协议', 'warning')
					return false;

				}
				if(!this.form.analysisDoc) {
					_this.messageOpen('请上传分析设计文档', 'warning')
					return false;
				}
				if(!this.form.itemBookDoc) {
					_this.messageOpen('请上传项目规格书', 'warning')
					return false;
				}
				if(!this.form.testDoc) {
					_this.messageOpen('请上传测试文档', 'warning')
					return false;
				}
				if(!this.form.userDoc) {
					_this.messageOpen('请上传用户手册', 'warning')
					return false;
				}

				if(!this.form.softImgOne && !this.form.softImgTwo && !this.form.softImgThree && !this.form.softVideo) {
					_this.messageOpen('请上传软件效果展示', 'warning')
					return false;
				}
				/*if(!this.form.frameworkReportDoc) {
					_this.messageOpen('请上传设计架构及技术报告', 'warning')
					return false;
				}*/
				var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if(_this.isTeacherVal.teacherName || _this.isTeacherVal.teacherUnit || _this.isTeacherVal.teacherPhone) {
					if(_this.isTeacherVal.teacherName && _this.isTeacherVal.teacherUnit && _this.isTeacherVal.teacherPhone) {
						if(!phoneReg.test(this.isTeacherVal.teacherPhone)) {
							this.messageOpen('请填写正确教师手机号码', 'warning')
							return false;

						}
						_this.ifTeacher = 1;

					} else {
						_this.messageOpen('请填写完整指导教师信息', 'warning')
						return false;
					}

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
							isTeacher: 0,
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
						joinVo.userList.push(this.firstDomains);

						this.isTeacherVal = {
							activityId: this.$route.query.activityId,
							awardLevel: 0,
							isTeacher: 1,
							awardTime: "",
							id: 0,
							joinTime: "",
							rank: 0,
							status: 0,
							softId: this.checkId,
							userId: this.userId,
							userName: this.isTeacherVal.teacherName,
							userPhone: this.isTeacherVal.teacherPhone,
							userUnit: this.isTeacherVal.teacherUnit,
							userJob: '指导教师',

						}
						joinVo.userList.push(this.isTeacherVal);
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
						var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;

						if(!phoneReg.test(this.firstDomains.userPhone)) {
							this.messageOpen('请填写正确手机号码', 'warning')
							return false;

						}
						var _this = this;
						_this.axios.defaults.headers.common['token'] = _this.token;
						_this.axios.post(baseUrl.baseUrl + _this.joinVoUrl, joinVo)
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
	
	.agSignUp-box {
		padding: 0 0 20px 0;
		margin: 20px auto;
		width: 880px;
		border: 1px solid #dedede;
		background: #fff;
	}
	
	.agSignUp h2 {
		margin: 0 0 20px 0;
		width: 100%;
		line-height: 50px;
		font-size: 16px;
		color: #fff;
		background: #4794e4;
		text-indent: 410px;
		letter-spacing: 2px;
		background: linear-gradient(to bottom, #dfecfa 0%, #2295d9 8%, #4794e4 100%);
		border-bottom: 2px solid #2b75c2;
	}
	
	.agSignUp h2 span {
		float: right;
		margin-right: 10px;
		font-size: 12px;
		line-height: 60px;
		color: #ededed;
		text-indent: 0;
		cursor: pointer;
		text-decoration: underline;
	}
	
	.agSignUp h2 span:hover {
		color: #fdd765;
	}
	
	.agSignUp .box-big {
		position: relative;
		width: 100%;
		overflow: hidden;
	}
	
	.agSignUp .box-big .el-select__tags {
		margin-left: 15px;
	}
	
	.agSignUp .box-teacher {
		overflow: hidden;
		margin-top: 15px;
	}
	
	.agSignUp .box-teacher .el-input {
		float: left;
		width: 191px;
		margin-left: 13px;
	}
	
	.agSignUp .diatit {
		padding:10px 0 0px 18px;
		line-height: 18px;
		font-size: 12px;
		color: #d3d5d6;
	}
	
	.agSignUp .h3 {
		margin: 0 auto;
		width: 500px;
		font-size: 16px;
		font-weight: normal;
		line-height: 50px;
		color: #666;
		text-align: center;
		text-indent: 70px;
	}
	
	.agSignUp .h3 span {
		margin-left: 10px;
		color: #999;
	}
	
	.agSignUp .singtext {
		padding: 5px 0;
		margin: 0 0 15px 165px;
		width: 600px;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		background: #d0e1f1;
	}
	
	.agSignUp .singtext td {
		line-height: 30px;
	}
	
	.agSignUp .singtext .el-input__inner {
		margin-top: 10px;
		width: 100%;
		height: 30px;
		line-height: 30px;
	}
	
	.agSignUp .singtext .deltrbtn {
		margin-top: 10px;
		font-size: 12px;
		line-height: 30px;
		border-radius: 3px;
		color: #fff;
		background: #e26556;
		cursor: pointer;
	}
	
	.agSignUp .singtext .addtr {
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
	
	.agSignUp .singtext .el-input {
		padding: 0 5px;
		box-sizing: border-box;
	}
	
	.addti {
		font-style: normal;
		font-size: 14px;
		font-weight: bold;
		color: #F56C6C;
	}
	
	.agSignUp .addti {
		float: left;
		font-style: normal;
		font-size: 14px;
		font-weight: bold;
		color: #F56C6C;
	}
	
	.agSignUp .box-big .el-input {
		float: left;
		margin-left: 10px;
		width: 600px;
	}
	
	.agSignUp .domainsnum span {
		line-height: 40px;
		font-weight: bold;
		font-size: 14px;
		color: #F56C6C;
	}
	
	.agSignUp .tinymce-editor {
		margin-left: 10px;
		width: 600px;
	}
	
	.agSignUp .box-input {
		margin-top: 10px;
		float: left;
	}
	
	.agSignUp .bottom {
		overflow: hidden;
	}
	
	.agSignUp .left-box {
		overflow: hidden;
	}
	
	.agSignUp .right-box {
		display: block;
		margin: 10px auto;
	}
	
	.agSignUp .right-box button {
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
	
	.agSignUp .box {
		width: 100%;
		overflow: hidden;
	}
	
	.agSignUp .box .el-input {
		float: left;
		margin-left: 10px;
		width: 260px;
	}
	
	.agSignUp .examinedialog {
		width: 820px;
	}
	
	.agSignUp .examinedialog input {
		width: 220px;
	}
	
	.agSignUp .examinedialog .box {
		overflow: hidden;
		width: 100%;
	}
	
	.agSignUp .examinedialog .box-1 {
		overflow: hidden;
		width: 100%;
	}
	
	.agSignUp .examinedialog .box-1 .el-form-item__content {
		width: 600px;
	}
	
	.agSignUp .examinedialog .box .el-form-item__content {
		width: 280px;
	}
	
	.agSignUp .examinedialog .tit {
		margin: 5px 0 0 12px;
		overflow: hidden;
		width: 100px;
		height: 36px;
	}
	
	.agSignUp .examinedialog .tit button {
		float: left;
		margin: 10px 0 0 5px;
		padding: 5px 8px;
		font-size: 14px;
		line-height: 16px;
		color: #9c7911;
		background: #fdd765;
		border-radius: 3px;
	}
	
	.agSignUp .examinedialog .tit p {
		float: left;
		margin-left: 20px;
		font-size: 12px;
		line-height: 24px;
		color: #cc0000;
	}
	
	.agSignUp .examinedialog .upload-demo {
		position: relative;
		width: 360px;
		display: inline-block;
	}
	
	.agSignUp .examinedialog .bottom {
		overflow: hidden;
		padding: 5px;
	}
	
	.agSignUp .examinedialog .bottom .right {
		float: right;
	}
	
	.agSignUp .avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	
	.agSignUp .avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	
	.agSignUp .avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 100px;
		height: 100px;
		line-height: 100px;
		text-align: center;
	}
	
	.agSignUp .upload-box {
		margin: 20px;
		float: left;
	}
	
	.agSignUp .upload-box p {
		width: 100%;
		text-align: center;
	}
	
	.agSignUp .avatar {
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
	
	.agSignUp .header-top {
		width: 100%;
		height: 46px;
		background: #4b505d;
	}
	
	.agSignUp .header-top .reposbox {
		overflow: hidden;
		position: relative;
		margin: 0 auto;
		width: 880px;
		height: 46px;
		font-size: 14px;
		line-height: 46px;
		color: #fff;
	}
	
	.agSignUp .header-top .reposbox .logo {
		float: left;
		margin-left: 10px;
		height: 46px;
		width: auto;
	}
	
	.agSignUp .header-top .reposbox .text {
		float: left;
		font-size: 14px;
		line-height: 46px;
		color: #fff;
	}
	
	.agSignUp .header-top .reposbox .right-text {
		float: right;
		margin-right: 10px;
		font-size: 14px;
		line-height: 46px;
		color: #f4f4f4;
		cursor: pointer;
	}
	
	.agSignUp .gitUrl {
		padding: 9px 6px;
		border: 1px solid #dedede;
		color: #999;
		line-height: 18px;
		background: #f0f2f5;
		margin-left: 5px;
		border-radius: 4px;
	}
	
	.agSignUp .el-button--success {
		background: #46c3a1;
		border: 1px dashed #46c3a1;
	}
	
	.agSignUp .el-button--primary {
		background: #67C23A;
		border: 1px dashed #67C23A;
	}
	
	.agSignUp .el-button--success span,
	.agSignUp .el-button--primary span {
		color: #fff;
	}
	
	.agSignUp .right-box .el-button--primary span {
		font-size: 16px;
		color: #fff;
	}
	
	.agSignUp .uploadtit {
		display: block;
		margin-bottom: 20px;
		margin-left: 160px;
		width: 600px;
		font-size: 12px;
		color: #606266;
		line-height: 16px;
	}
	
	.box-1 .el-form-item {
		padding: 0;
		margin: 0;
	}
	
	.box-big .el-form-item {
		margin-bottom: 10px;
	}
	
	.float_word {
		display: block;
		position: fixed;
		padding: 96px 5px 30px 26px;
		left: 10px;
		top: 390px;
		width: 111px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 13px;
		color: #fff;
		z-index: 10000;
		background: url(../assets/icon/icon_word.png) no-repeat;
	}
	.agSignUp .el-upload__tip span{
		display: block;
		width: 100%;
		font-size: 12px;
		color: #F56C6C;
		
	}
</style>