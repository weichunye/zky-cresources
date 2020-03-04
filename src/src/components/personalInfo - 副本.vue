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
						<div  v-for="item in mySoftList" class="personal-info-box">
							<p v-if="item.firstAudit==1" class="rj-state state-dsh">待审核
							</p>
							<p v-if="item.firstAudit==0" class="rj-state state-pass">审核通过
							</p>
							<p v-if="item.firstAudit==3" class="rj-state state-nopass">审核未通过
							</p>
							<span v-if="item.firstAudit==0">
								
								<p v-if="item.isExpertEvaluate==1&&item.isEvaluate==1" class="state-zjpg rj-ypg">评估已通过
							</p>
							<p v-if="item.isExpertEvaluate==1&&item.isEvaluate==0" class="state-zjpg rj-ypg">评估未通过
							</p>
							<p v-if="item.isExpertEvaluate==0" @click="getText(item.softName,item.softUrl)" class=" state-zjpg">请专家评估
							</p>
							</span>
							<router-link to="details">
								<h3>{{item.softName}} </h3>
									<span v-if="item.isHot==1" class="hot-bg">热</span>
   	   					<span v-if="item.isRecommend==1" class="jian-bg">荐</span>
   	   					<span v-if="item.isChina==1" class="guo-bg">国</span>
   	   						<span v-if="item.isEvaluate==1" class="xin-bg">信</span>
								<p class="p">LibSVM是由台湾大学林智仁(Chih-Jen Lin)教授等在2001年开发的基于支持向量机(support vector
									machine，SVM)实现的开源库。它主要用于分类(支持二分类和多分类)和回归，并且提供了交叉检验的功能。LibSVM具有操作简单、便于使用、需要调节的参数少、运算速度快的特点，且它是一个开源软件，具有较强的可扩展性。</p>
									<p v-if="item.firstAudit==2" class="rj-infor">
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
						<el-pagination background layout="prev, pager, next" :total="1000">
						</el-pagination>
					</div>


				</el-tab-pane>
				<el-tab-pane label="下载">
					<div class="min-height">
						<div class="el-tab-software">
							<div class="empty-tit">

							</div>
						</div>
					</div>
				</el-tab-pane>

				<el-tab-pane label="收藏">
					<div class="min-height">
						<!--软件信息-->

						<div class="personal-info-box">
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
						</div>

						<!--//软件信息-->
					</div>

				</el-tab-pane>
				<el-tab-pane label="分享">
					<div class="min-height">
						<!--软件信息-->

						<div class="personal-info-box">
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
						</div>
						<!--//软件信息-->
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
						<el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"
						 :total="myJoinObj.total" :current-page.sync="myJoinObj.page" :page-size="limit">
						</el-pagination>
					</div>
				</el-tab-pane>
				<el-tab-pane label="我的反馈">
					<div class="min-height"></div>
				</el-tab-pane>

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
							<p>描述设计架构</p>
						</div>
					</el-form-item>

					<el-button>选择</el-button>
					<el-button>上传</el-button>
					<el-button>预览</el-button>
				</div>
				<div class="box">
					<el-form-item prop="softUrl" label="项目规格书" :label-width="formLabelWidth">
						<el-input v-model="form.itemBookDoc" placeholder="" auto-complete="off"></el-input>
						<div class="tit">
							<button>下载模板</button>
							<p>描述设计架构</p>
						</div>
					</el-form-item>

					<el-button>选择</el-button>
					<el-button>上传</el-button>
					<el-button>预览</el-button>
				</div>
				<div class="box">
					<el-form-item prop="softUrl" label="测试文档" :label-width="formLabelWidth">
						<el-input v-model="form.testDoc" placeholder="" auto-complete="off"></el-input>
						<div class="tit">
							<button>下载模板</button>
							<p>描述设计架构</p>
						</div>
					</el-form-item>

					<el-button>选择</el-button>
					<el-button>上传</el-button>
					<el-button>预览</el-button>
				</div>
				<div class="box">
					<el-form-item prop="softUrl" label="用户手册" :label-width="formLabelWidth">
						<el-input v-model="form.userDoc" placeholder="" auto-complete="off"></el-input>
						<div class="tit">
							<button>下载模板</button>
							<p>描述设计架构</p>
						</div>
					</el-form-item>

					<el-button>选择</el-button>
					<el-button>上传</el-button>
					<el-button>预览</el-button>
				</div>
				<div class="box">
					<el-form-item prop="softUrl" label="软件效果展示" :label-width="formLabelWidth">
						<el-input v-model="form.softResultDoc" placeholder="" auto-complete="off"></el-input>
						<div class="tit">
							<button>下载模板</button>
							<p>描述设计架构</p>
						</div>
					</el-form-item>

					<el-button>选择</el-button>
					<el-button>上传</el-button>
					<el-button>预览</el-button>
				</div>
				<div class="box">
					<el-form-item prop="softUrl" label="设计架构及技术报告" :label-width="formLabelWidth">
						<el-input v-model="form.frameworkReportDoc" placeholder="" auto-complete="off"></el-input>
						<div class="tit">
							<button>下载模板</button>
							<p>描述设计架构</p>
						</div>
					</el-form-item>

					<el-button>选择</el-button>
					<el-button>上传</el-button>
					<el-button>预览</el-button>
				</div>

				<div class="box-input">
					<el-form-item prop="abstract" label="作品摘要" :label-width="formLabelWidth">
						<el-input v-model="form.abstract" auto-complete="off"></el-input>
					</el-form-item>
				</div>





				<div class="bottom">


					<div class="right">
						<el-button @click="dialogReview=false">取 消</el-button>
						<el-button type="primary" @click="submitForm('form')">确 定</el-button>
					</div>

				</div>
			</el-form>
			<el-dialog width="30%" :title="innerTitle" :visible.sync="innerVisible" append-to-body>
			</el-dialog>

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
				form: {
					name: '',
					softUrl: '',
					analysisDoc:'',
					frameworkReportDoc:'',
					itemBookDoc:'',
					softResultDoc:'',
					testDoc:'',
					userDoc:'',
				},
				formLabelWidth: '110px',
				mySoftList: [],
				myDownList: [],
				myollectionList: [],
				mySharList: [],
				myJoinList: [], //我的报名
				userId: 1,
				token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTU1NTUzMTI0LCJleHAiOjE1NTYxNTc5MjR9.gHbfqiCNk-FzOqLNMEReRf_PooIe2-x9IgzGnOHAI86f_bAym_acXfrlIIFDw5sJFZ4M4jER2UYN1qVhzqgtaA",
				limit: 2,
				myJoinObj: {
					total: 1,
					page: 1,

				},
				mySoftObj: {
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
			/* 	_this.getFollowList('myDownList', 3) */
			//我的报名
			_this.getMyJoinList()




		},
		methods: {
			//我的软件
			getMySoft: function() {
				var _this = this;
				var params1 = new URLSearchParams();
				params1.append("userId", 1);
				params1.append("token", _this.token);
				params1.append("page", _this.mySoftObj.page);
				params1.append("limit", _this.limit);
				_this.axios.post(baseUrl.baseUrl + '/web/user/mySoftList', params1)
					.then(function(response) {
						_this.mySoftList = response.data.page.list;
						_this.mySoftObj.page=response.data.currPage;
						_this.mySoftObj.total=response.data.totalCount;
						console.log("mySoftList", _this.mySoftList)
					})
					.catch(function(error) {
						console.log(error);
					})
			},
			getFollowList: function(ele, type) {
				var _this = this;
				var params = new URLSearchParams();
				params.append("userId", _this.userId);
				params.append("token", _this.token);
				params.append("page", _this.page);
				params.append("limit", _this.limit);
				params.append("operationType", type);
				_this.axios.post(baseUrl.baseUrl + '/web/user/followList', params)
					.then(function(response) {

						_this[ele] = response.data.page;


					})
					.catch(function(error) {
						console.log(error);
					})

			},
			getMyJoinList: function() {
				var _this = this;
				var params = new URLSearchParams();
				params.append("userId", _this.userId);
				params.append("token", _this.token);
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

			},
			handleCurrentChange(val) {
				this.pageNum = val;

			},

			getText: function(name,url) {
				this.form.name=name;
				this.form.softUrl=url;
				this.dialogReview = true

			},
			submitForm: function(formName) {

				var softDoc = {
					analysisDoc: "",
					createTime: "",
					frameworkReportDoc: "",
					id: 0,
					itemBookDoc: "",
					softId: 0,
					softResultDoc: "",
					testDoc: "",
					userDoc: ""
				}

				var _this = this;
				console.log("formName", formName)
				_this.$refs[formName].validate((valid) => {
					if (valid) {
						_this.innerVisible = true;
						_this.innerTitle = '提交成功'


						console.log('form', this.form)
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
	.personalInfo {
		background: #f8f8f8;
	}

	.personalInfo .examinedialog {
		width: 700px;
	}

	.personalInfo .examinedialog input {
		width: 290px;
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
