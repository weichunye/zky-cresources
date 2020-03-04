<template>
	<div class="personalInfo">

		<searchTop></searchTop>
		<!--content-->
		<div class="content">
			<div class="top-box">
				<p>级别：普通会员</p>
				<p>昵称：小土豆</p>
				<p>电话：18652554521</p>
				<p>邮箱：385411545@qq.com</p>

			</div>

		</div>
		<!--//content-->
		<div class="content">
			<el-tabs type="border-card">
				<el-tab-pane label="我的软件">

					<div class="min-height">
						<!--软件信息-->
						<div v-if="mySoftList.length>0">
							<div v-for="item in mySoftList" class="personal-info-box">
								<p v-if="item.firstAudit==0" class="rj-state state-dsh">待审核
								</p>
								<p v-if="item.firstAudit==1">
									<el-popover placement="top-start" title="审核提示" width="200" trigger="hover" :content="item.firstAuditRejectReason">
										<el-button class="rj-state state-pass" slot="reference">审核通过</el-button>
									</el-popover>

								</p>

								<p v-if="item.firstAudit==2">
									<el-popover placement="top-start" title="审核提示" width="200" trigger="hover" :content="item.firstAuditRejectReason">
										<el-button class="rj-state state-nopass" slot="reference">审核未通过</el-button>
									</el-popover>
								</p>

								<span v-if="item.firstAudit==0">
							<!--	<p v-if="item.isExpertEvaluate==1&&item.isEvaluate==0" class="state-ps state-dsh">待评估
							</p>
								<p v-if="item.isExpertEvaluate==1&&item.isEvaluate==1" class="state-ps state-pass">评估已通过
							</p>
							<p v-if="item.isExpertEvaluate==1&&item.isEvaluate==2" class="state-ps state-nopass">评估未通过
							</p>-->
							<p v-if="item.isExpertEvaluate==0" @click="getText(item.softName,item.softUrl,item.id)" class=" state-zjpg">请专家评估
							</p>
							<!--<p v-if="item.isExpertEvaluate==0" @click="getText(item.softName,item.softUrl,item.id)"  class=" state-zjpg">请专家评估
							</p>-->
							</span>
								<router-link :to="{path:'/details',query:{id:item.id,ParentName:'个人中心'}}">
									<h3>{{item.softName}} </h3>
									<div v-if="item.firstAudit==1">

										<span v-if="item.isHot==1" class="hot-bg">热</span>
										<span v-if="item.isRecommend==1" class="jian-bg">荐</span>
										<span v-if="item.isChina==1" class="guo-bg">国</span>
										<span v-if="item.isEvaluate==1" class="xin-bg">信</span>
									</div>
									<p class="p">{{item.softIntroduce}}</p>
									<p v-if="item.firstAudit==1" class="rj-infor">
										<span>收藏：&nbsp; {{item.collectionNum}}</span>
										<span>分享：&nbsp; {{item.enjoyNum}}</span>
										<span>运行：&nbsp;{{item.runNum}}</span>
										<span>浏览：&nbsp; {{item.browseNum}}</span>
									</p>
									<p class="rj-time">
										{{item.createTime}}
									</p>
								</router-link>
							</div>
						</div>
						<div v-else="" class="el-tab-software">
							<div class="empty-tit">

							</div>
						</div>
						<!--//软件信息-->
						<!--软件信息-->
						<!--<div class="personal-info-box">
							<p class="rj-state state-pass">审核通过
							</p>
							<p @click="getText" class=" state-zjpg">请专家评估
							</p>

							<router-link to="details">
								<h3>软件名称 <span class="jian-bg">荐</span> <span class="guo-bg">国</span> <span class="xin-bg">信</span> </h3>
								<p class="p">LibSVM是由台湾大学林智仁(Chih-Jen Lin)教授等在2001年开发的基于支持向量机(support vector
									machine，SVM)实现的开源库。它主要用于分类(支持二分类和多分类)和回归，并且提供了交叉检验的功能。LibSVM具有操作简单、便于使用、需要调节的参数少、运算速度快的特点，且它是一个开源软件，具有较强的可扩展性。</p>
								<p class="rj-infor">
									<span>收藏：&nbsp; 5</span>
									<span>分享：&nbsp; 5</span>
									<span>运行：&nbsp; 5</span>
									<span>浏览：&nbsp; 5</span>
								</p>
								<p class="rj-time">
									2019-04-11 12:23
								</p>
							</router-link>
						</div>-->
						<!--//软件信息-->

						<!--软件信息-->
						<!--<div class="personal-info-box">
							<p class="rj-state state-pass">审核通过
							</p>

							<p class="rj-state rj-ypg">已经评估
							</p>
							<router-link to="details">
								<h3>软件名称 <span class="jian-bg">荐</span> <span class="guo-bg">国</span> <span class="xin-bg">信</span> </h3>
								<p class="p">LibSVM是由台湾大学林智仁(Chih-Jen Lin)教授等在2001年开发的基于支持向量机(support vector
									machine，SVM)实现的开源库。它主要用于分类(支持二分类和多分类)和回归，并且提供了交叉检验的功能。LibSVM具有操作简单、便于使用、需要调节的参数少、运算速度快的特点，且它是一个开源软件，具有较强的可扩展性。</p>
								<p class="rj-infor">
									<span>收藏：&nbsp; 5</span>
									<span>分享：&nbsp; 5</span>
									<span>运行：&nbsp; 5</span>
									<span>浏览：&nbsp; 5</span>
								</p>
								<p class="rj-time">
									2019-04-11 12:23
								</p>
							</router-link>
						</div>-->
						<!--//软件信息-->

						<!--软件信息-->
						<!--<div class="personal-info-box">
							<p class="rj-state state-nopass">审核未通过
							</p>
							<router-link to="details">
								<h3>软件名称</h3>
								<p class="p">LibSVM是由台湾大学林智仁(Chih-Jen Lin)教授等在2001年开发的基于支持向量机(support vector
									machine，SVM)实现的开源库。它主要用于分类(支持二分类和多分类)和回归，并且提供了交叉检验的功能。LibSVM具有操作简单、便于使用、需要调节的参数少、运算速度快的特点，且它是一个开源软件，具有较强的可扩展性。</p>
								<p class="rj-time">
									2019-04-11 12:23
								</p>
							</router-link>
						</div>-->
						<!--//软件信息-->
						<el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :total="mySoftObj.total" :current-page.sync="mySoftObj.page" :page-size="limit">
						</el-pagination>
					</div>

				</el-tab-pane>
				<el-tab-pane label="下载">
					<div class="min-height">
						<div v-if="myDownList.dataList.length>0" class="personal-info-box" v-for="item in myDownList.dataList">
							<router-link to="details">
								<h3>{{item.softName}} <span v-if="item.isRecommend" class="jian-bg">荐</span> <span v-if="item.isHot==1" class="hot-bg">热</span><span v-if="item.isChina" class="guo-bg">国</span> <span v-if="item.isEvaluate" class="xin-bg">信</span> </h3>
								<p class="p">{{item.softIntroduce}}...</p>
								<!--	<p class="rj-infor">
									<span>收藏：&nbsp; 5</span>
									<span>分享：&nbsp; 5</span>
									<span>运行：&nbsp; 5</span>
									<span>浏览：&nbsp; 5</span>
								</p>-->
								<p class="rj-time">
									{{item.createTime}}
								</p>
							</router-link>
						</div>
						<div v-else="" class="el-tab-software">
							<div class="empty-tit">

							</div>
						</div>
						<el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :total="myDownList.total" :current-page.sync="myDownList.page" :page-size="limit">
						</el-pagination>
					</div>
				</el-tab-pane>

				<el-tab-pane label="收藏">
					<div class="min-height">
						<div v-if="myDownList.dataList.length>0" class="personal-info-box" v-for="item in collecTionNum.dataList">
							<router-link to="details">
								<h3>{{item.softName}} <span v-if="item.isRecommend" class="jian-bg">荐</span> <span v-if="item.isHot==1" class="hot-bg">热</span><span v-if="item.isChina" class="guo-bg">国</span> <span v-if="item.isEvaluate" class="xin-bg">信</span> </h3>
								<p class="p">{{item.softIntroduce}}...</p>
								<p class="rj-time">
									{{item.createTime}}
								</p>
							</router-link>
						</div>
						<div v-else="" class="el-tab-software">
							<div class="empty-tit">

							</div>
						</div>
						<el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :total="collecTionNum.total" :current-page.sync="collecTionNum.page" :page-size="limit">
						</el-pagination>
					</div>

				</el-tab-pane>
				<el-tab-pane label="分享">
					<div class="min-height">
						<div v-if="myDownList.dataList.length>0" class="personal-info-box" v-for="item in enjoyNum.dataList">
							<router-link to="details">
								<h3>{{item.softName}} <span v-if="item.isRecommend" class="jian-bg">荐</span> <span v-if="item.isHot==1" class="hot-bg">热</span><span v-if="item.isChina" class="guo-bg">国</span> <span v-if="item.isEvaluate" class="xin-bg">信</span> </h3>
								<p class="p">{{item.softIntroduce}}...</p>
								<p class="rj-time">
									{{item.createTime}}
								</p>
							</router-link>
						</div>
						<div v-else="" class="el-tab-software">
							<div class="empty-tit">

							</div>
						</div>
						<el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :total="enjoyNum.total" :current-page.sync="enjoyNum.page" :page-size="limit">
						</el-pagination>
					</div>

				</el-tab-pane>
				<el-tab-pane label="我的报名">
					<div class="min-height">
						<template>
							<el-table :data="myJoinList" border style="width: 100%;">
								<el-table-column prop="joinTime" label="活动时间" width="300">
								</el-table-column>
								<el-table-column prop="activityName" label="活动名称">
								</el-table-column>
								<el-table-column prop="status" label="状态" width="150">
									<template slot-scope="scope">
										{{scope.row.status==3?'已结束':'正在进行'}}

									</template>
								</el-table-column>
								<el-table-column prop="rank" label="我的名次" width="150">
								</el-table-column>
								<el-table-column fixed="right" label="操作" width="80">
									<template slot-scope="scope">
										<el-button @click="toActivity(scope.row)" type="text" size="small">查看</el-button>

									</template>
								</el-table-column>
							</el-table>
						</template>
						<!--		<el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"
						 :total="myJoinObj.total" :current-page.sync="myJoinObj.page" :page-size="limit">
						</el-pagination>-->
					</div>
				</el-tab-pane>
				<!--<el-tab-pane label="我的反馈">
					<div class="min-height"></div>
				</el-tab-pane>-->

			</el-tabs>

		</div>

		<foot></foot>
		<!--pop-->

		<el-dialog custom-class="examinedialog " title="请专家评审" :visible.sync="dialogReview" :show-close='false'>
			<el-form :model="form" ref="form" :inline="true" class="demo-form-inline">
				<div class="box-big">
					<el-form-item prop="name" label="软件名称" :label-width="formLabelWidth">
						<el-input v-model="form.name" placeholder="请输入内容" auto-complete="off"></el-input>
					</el-form-item>
				</div>
				<div class="box-big">
					<el-form-item prop="softUrl" label="代码地址" :label-width="formLabelWidth">
						<el-input v-model="form.softUrl" placeholder="github或cstos.cstcloud.cn的项目地址，推荐使用cstos.cstcloud.cn" auto-complete="off"></el-input>
						<!--<p class="diatit">gitbun或者</p>-->
					</el-form-item>
				</div>
				<div class="box">
					<el-form-item prop="softUrl" label="分析设计文档" :label-width="formLabelWidth">
						<el-input v-model="form.analysisDoc" placeholder="" auto-complete="off"></el-input>
						<div class="tit">
							<button>下载模板</button>

						</div>
					</el-form-item>
					<el-upload class="upload-demo" ref="analysisRef" :action=upUrl :on-success='analysisDocSuccess' :limit="1" alllist-con :auto-upload="false">
						<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
						<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload()">上传到服务器</el-button>
						<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
					</el-upload>
				</div>
				<div class="box">
					<el-form-item prop="softUrl" label="项目规格书" :label-width="formLabelWidth">
						<el-input v-model="form.itemBookDoc" placeholder="" auto-complete="off"></el-input>
						<div class="tit">
							<button>下载模板</button>

						</div>
					</el-form-item>
					<el-upload class="upload-demo" ref="itemBookRef" :action=upUrl :on-success='itemBookDocSuccess' :limit="1" alllist-con :auto-upload="false">
						<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
						<el-button style="margin-left: 10px;" size="small" type="success" @click="submitItemBook()">上传到服务器</el-button>
						<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
					</el-upload>

				</div>
				<div class="box">
					<el-form-item prop="softUrl" label="测试文档" :label-width="formLabelWidth">
						<el-input v-model="form.testDoc" placeholder="" auto-complete="off"></el-input>
						<div class="tit">
							<button>下载模板</button>

						</div>
					</el-form-item>
					<el-upload class="upload-demo" ref="testDocRef" :action=upUrl :on-success='testDocSuccess' :limit="1" alllist-con :auto-upload="false">
						<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
						<el-button style="margin-left: 10px;" size="small" type="success" @click="submitTestDoc()">上传到服务器</el-button>
						<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
					</el-upload>

				</div>
				<div class="box">
					<el-form-item prop="softUrl" label="用户手册" :label-width="formLabelWidth">
						<el-input v-model="form.userDoc" placeholder="" auto-complete="off"></el-input>
						<div class="tit">
							<button>下载模板</button>

						</div>
					</el-form-item>
					<el-upload class="upload-demo" ref="userDocRef" :action=upUrl :on-success='userDocSuccess' :limit="1" alllist-con :auto-upload="false">
						<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
						<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUserDoc()">上传到服务器</el-button>
						<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
					</el-upload>

				</div>
				<div class="box">
					<el-form-item prop="softUrl" label="软件效果展示" :label-width="formLabelWidth">
						<el-input v-model="form.softResultDoc" placeholder="" auto-complete="off"></el-input>
						<div class="tit">
							<button>下载模板</button>

						</div>
					</el-form-item>
					<el-upload class="upload-demo" ref="softResultDocRef" :action=upUrl :on-success='softResultDocSuccess' :limit="1" alllist-con :auto-upload="false">
						<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
						<el-button style="margin-left: 10px;" size="small" type="success" @click="submitSoftResultDoc()">上传到服务器</el-button>
						<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
					</el-upload>

				</div>
				<div class="box">
					<el-form-item prop="softUrl" label="设计架构及技术报告" :label-width="formLabelWidth">
						<el-input v-model="form.frameworkReportDoc" placeholder="" auto-complete="off"></el-input>
						<div class="tit">
							<button>下载模板</button>

						</div>
					</el-form-item>
					<el-upload class="upload-demo" ref="frameworkReportDocRef" :action=upUrl :on-success='frameworkReportDocSuccess' :limit="1" alllist-con :auto-upload="false">
						<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
						<el-button style="margin-left: 10px;" size="small" type="success" @click="submitFrameworkReportDoc()">上传到服务器</el-button>
						<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
					</el-upload>

				</div>

				<div class="bottom">

					<div class="right">
						<el-button @click="dialogReview=false">取 消</el-button>
						<el-button type="primary" @click="submitForm('form')">确 定</el-button>
					</div>

				</div>
			</el-form>

		</el-dialog>
		<!--pop-->
	</div>
</template>

<script>
	import searchTop from './searchTop.vue';
	import foot from './footer.vue';
	import baseUrl from '../../config/index.js'
	export default {
		name: 'personalInfo',
		components: {
			foot,
			searchTop

		},
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '第一届互联网设计大赛',
					state: '进行中',
					ranking: '纪念奖'
				}],
				dialogReview: false,
				innerVisible: false,
				innerTitle: '',
				upUrl: baseUrl.baseUrl + '/sys/upload/upload/',
				form: {
					name: '',
					softUrl: '',
					analysisDoc: '',
					frameworkReportDoc: '',
					itemBookDoc: '',
					softResultDoc: '',
					testDoc: '',
					userDoc: '',
				},
				curSoftId: '',
				formLabelWidth: '110px',
				mySoftList: [],
				myollectionList: [],
				mySharList: [],
				myJoinList: [], //我的报名
				limit: 4,
				myDownList: {
					dataList: [],
					total: 1,
					page: 1,

				},
				collecTionNum: {
					dataList: [],
					total: 1,
					page: 1,

				},
				enjoyNum: {
					dataList: [],
					total: 1,
					page: 1,

				},
				mySoftObj: {
					total: 1,
					page: 1,

				},
				myJoinObj: {
					total: 1,
					page: 1,

				},

			}
		},
		mounted() {
			var _this = this;
			//我的软件
			_this.getMySoft()
			//获取下载数据
			_this.getFollowList('collecTionNum', 1)
			_this.getFollowList('enjoyNum', 2)
			_this.getFollowList('myDownList', 3)
			//我的报名
			_this.getMyJoinList()
		},
		methods: {
			//我的软件
			getMySoft: function() {
				var _this = this;
				var params1 = new URLSearchParams();
				params1.append("userId", this.userId);
				params1.append("token", this.token);
				params1.append("page", _this.mySoftObj.page);
				params1.append("limit", _this.limit);
				_this.axios.post(baseUrl.baseUrl + '/web/user/mySoftList', params1)
					.then(function(response) {
						_this.mySoftList = response.data.page.list;
						_this.mySoftObj.page = response.data.page.currPage;
						_this.mySoftObj.total = response.data.page.totalCount;
						console.log("_this.mySoftList", _this.mySoftList)
					})
					.catch(function(error) {
						console.log(error);
					})
			},
			getFollowList: function(ele, type) {
				console.log("00000")
				var _this = this;
				var params = new URLSearchParams();
				params.append("userId", this.userId);
				params.append("token", this.token);
				params.append("page", _this[ele].page);
				params.append("limit", _this.limit);
				params.append("operationType", type);
				_this.axios.post(baseUrl.baseUrl + '/web/user/followList', params)
					.then(function(response) {
						_this[ele].dataList = response.data.page.records;
						_this[ele].total = response.data.page.total;
						console.log("response.data", _this[ele].total)

					})
					.catch(function(error) {
						console.log(error);
					})

			},
			getMyJoinList: function() {
				var _this = this;
				var params = new URLSearchParams();
				params.append("userId", this.userId);
				params.append("token", this.token);
				params.append("page", _this.myJoinObj.page);
				params.append("limit", _this.limit);
				_this.axios.post(baseUrl.baseUrl + '/web/user/myJoinList', params)
					.then(function(response) {
						_this.myJoinList = response.data.page.records;
						_this.page = response.data.page.current;
						_this.total = response.data.page.total;
						console.log("myJoinList", _this.myJoinList)

					})
					.catch(function(error) {
						console.log(error);
					})

			},
			//分析设计文档
			submitUpload() {
				this.$refs.analysisRef.submit();
			},
			analysisDocSuccess: function(response, file, fileList) {
				console.log("response", response)
				this.form.analysisDoc = response.filePath

			},
			//项目规格书
			submitItemBook() {
				this.$refs.itemBookRef.submit();
			},
			itemBookDocSuccess: function(response, file, fileList) {
				console.log("response", response)
				this.form.itemBookDoc = response.filePath

			},
			submitUserDoc() {
				this.$refs.userDocRef.submit();
			},
			userDocSuccess: function(response, file, fileList) {
				console.log("response", response)
				this.form.userDoc = response.filePath

			},
			submitSoftResultDoc() {
				this.$refs.softResultDocRef.submit();
			},
			softResultDocSuccess: function(response, file, fileList) {
				console.log("response", response)
				this.form.softResultDoc = response.filePath

			},
			submitFrameworkReportDoc() {
				this.$refs.frameworkReportDocRef.submit();
			},
			frameworkReportDocSuccess: function(response, file, fileList) {
				console.log("response", response)
				this.form.frameworkReportDoc = response.filePath

			},
			submitTestDoc() {
				this.$refs.testDocRef.submit();
			},
			testDocSuccess: function(response, file, fileList) {
				console.log("response", response)
				this.form.testDoc = response.filePath

			},
			toActivity(row) {
				var _this = this;
				console.log(row);
				var newObj = {
					id: row.id
				}
				_this.$router.push({
					path: '/activityGame',
					query: newObj
				});
			},
			handleSizeChange(val) {
				this.pageSize = val;
				this.getMySoft()

			},
			handleCurrentChange(val) {
				this.pageNum = val;
				this.getMySoft()

			},

			getText: function(name, url, id) {
				this.form.name = name;
				this.form.softUrl = url;
				this.curSoftId = id
				/*this.dialogReview = true*/
				console.log("this.dialogReview", this.dialogReview)
			},
			submitForm: function(formName) {
				var _this = this;
				var softDoc = {
					analysisDoc: this.form.analysisDoc,
					createTime: "",
					frameworkReportDoc: this.form.frameworkReportDoc,
					id: 0,
					itemBookDoc: this.form.itemBookDoc,
					softId: this.curSoftId,
					softResultDoc: this.form.softResultDoc,
					testDoc: this.form.testDoc,
					userDoc: this.form.userDoc,
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
				if(!this.form.softResultDoc) {
					_this.messageOpen('请上传软件效果展示', 'warning')
					return false;
				}
				if(!this.form.frameworkReportDoc) {
					_this.messageOpen('请上传设计架构及技术报告', 'warning')
					return false;
				}
				if(this.form.analysisDoc && this.form.frameworkReportDoc && this.form.itemBookDoc && this.form.softResultDoc && this.form.testDoc && this.form.userDoc) {
					console.log("sub", softDoc)

					console.log("formName", formName)
					_this.$refs[formName].validate((valid) => {
						if(valid) {
							_this.axios.defaults.headers.common['token'] = this.token;
							_this.axios.post(baseUrl.baseUrl + '/web/join/joinEvaluate', softDoc)
								.then(function(response) {
									if(response.code == 0) {
										console.log('成功')
										_this.$alert(response.data.msg, '提示信息', {
											confirmButtonText: '确定',
										});
									}

								})
								.catch(function(error) {
									console.log(error);
								})
							console.log('form', this.form)
						} else {
							console.log('error submit!!');
							return false;
						}
					});
				} else {
					this.innerVisible = true;
					this.innerTitle = "请填写完整信息"
				}

			},

		}
	}
</script>

<style>
	.personalInfo {
		background: #f8f8f8;
	}
	
	.personalInfo .examinedialog {
		width: 700px;
	}
	
	.personalInfo .examinedialog input {
		width: 220px;
	}
	
	.personalInfo .examinedialog .box {
		overflow: hidden;
		width: 100%;
	}
	
	.personalInfo .examinedialog .tit {
		margin-top: 5px;
		overflow: hidden;
		width: 100%;
	}
	
	.personalInfo .examinedialog .tit button {
		float: left;
		padding: 5px 8px;
		font-size: 14px;
		line-height: 16px;
		color: #fff;
		background: #ff9900;
		border-radius: 5px;
	}
	
	.personalInfo .examinedialog .tit p {
		float: left;
		margin-left: 20px;
		font-size: 12px;
		line-height: 24px;
		color: #cc0000;
	}
	
	.personalInfo .examinedialog .upload-demo {
		display: inline-block;
	}
	
	.personalInfo .examinedialog .bottom {
		overflow: hidden;
		padding: 5px;
	}
	
	.personalInfo .examinedialog .bottom .right {
		float: right;
	}
	
	.personalInfo .content {}
	
	.personalInfo .content .min-height {
		margin-top: 10px;
		min-height: 400px;
	}
	
	.personalInfo .top-box {
		padding: 15px 0;
		margin: 10px 0;
		width: 100%;
		background: #fff;
	}
	
	.personalInfo .top-box p {
		width: 100%;
		font-size: 14px;
		line-height: 30px;
		color: #666;
		text-indent: 20px;
	}
</style>