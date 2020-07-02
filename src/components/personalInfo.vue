<template>
	<div class="personalInfo">
		<searchTop></searchTop>
		<!--content-->
		<div class="content">
			<div class="top-box">
				<p>{{$t('lang.nickname')}}：{{userInfo.trueName}}</p>
				<p>{{$t('lang.email')}}：{{userInfo.cstnetId}}</p>
			</div>
		</div>
		<!--//content-->
		<div class="content">
			<el-tabs type="card" @tab-click="handleClick">
				<el-tab-pane :label="$t('lang.Mysoftware')">
					<div class="min-height">
						<!--软件信息-->
						<div v-if="mySoftList.length>0">
							<div v-for="item in mySoftList" class="personal-info-box">
								<p v-if="item.firstAudit==0" class="rj-state state-dsh">待审核
								</p>
									<p v-if="item.firstAudit==1" class="rj-state state-pass">初审通过</p>
								<p v-if="item.firstAudit==2">
									<el-popover placement="top-start" title="审核提示" width="200" trigger="hover" :content="item.firstAuditRejectReason">
										<p class="rj-state state-nopass" slot="reference">初审未通过</p>
									</el-popover>
								</p>
								<span v-if="item.firstAudit==1">
								<p v-if="item.isExpertEvaluate==1&&item.isEvaluate==0" class="state-ps state-dsh">待评估
							</p>
								<p v-if="item.isExpertEvaluate==1&&item.isEvaluate==1" class="state-ps state-pass">评估已通过
							</p>
							<el-popover placement="top-start" title="审核提示" width="200" trigger="hover" :content="item.expertEvaluateRejectReason">
							<p slot="reference" v-if="item.isExpertEvaluate==1&&item.isEvaluate==2" class="state-ps state-nopass">评估未通过
							</p>
							</el-popover>
				<!--	ppp，{{item.isExpertEvaluate}}kkk，{{item.isMatchSoft}}-->

							<!--<p v-if="item.isExpertEvaluate==0" @click="getText(item.softName,item.softUrl,item.id)"  class=" state-zjpg">请专家评估
							</p>-->
							</span>
								<router-link :to="{path:'/details',query:{id:item.id,ParentName:'个人中心'}}">
									<h3><!--<p v-if="item.isMatchSoft" class="ifmatchsoft1">竞</p>
										<p v-else="" class="ifmatchsoft2">投</p>-->
									<p class="hp">{{item.softName}}</p>
									<p   v-if="item.firstAudit==1">
                    <sup v-if="item.isHot == 1" class="suba">热</sup>
										<sup v-if="item.isRecommend==1" class="sub">荐</sup>
										<sup v-if="item.isChina==1" class="subchania">国</sup>
										<sup v-if="item.isEvaluate==1" class="subping">信</sup>
									</p>
									 </h3>
									<p class="p">{{item.softIntroduce}}</p>
									<div class="p-box">
										<p v-if="item.firstAudit==1" class="rj-infor">
											<span>收藏：&nbsp; {{item.collectionNum}}</span>
											<span>分享：&nbsp; {{item.enjoyNum}}</span>
											<span>运行：&nbsp;{{item.runNum}}</span>
											<span>浏览：&nbsp; {{item.browseNum}}</span>
										</p>
										<p class="rj-time">
											{{item.createTime}}
										</p>
									</div>

								</router-link>
								<div v-if="!item.isMatchSoft" class="btn-box">

									<!--<button v-if="item.isExpertEvaluate==0&&!item.isMatchSoft&&item.isSelf==1&&item.firstAudit==1" @click="getText(item.softName,item.softUrl,item.id)" class="button4">请专家评估</button>-->
									<router-link :to="{path:'/details',query:{id:item.id,ParentName:'个人中心'}}">
										<button class="button1">{{$t('lang.View')}}</button>
									</router-link>
									<router-link v-if="item.firstAudit!=1" :to="{path:'/softModify',query:{id:item.id,ParentName:'个人中心'}}">
										<button class="button2">{{$t('lang.modify')}}</button>
									</router-link>

									<button v-if="item.firstAudit!=1" @click="delSoftOrdinary(item)" class="button3">{{$t('lang.delete')}}</button>

								</div>
								<div v-else="" class="btn-box">
									<!--<button v-if="item.isExpertEvaluate==0&&item.isMatchSoft&&item.firstAudit==1" @click="expertReview(item.id)" class="button4">参赛作品请专家评估</button>-->
<router-link :to="{path:'/details',query:{id:item.id,ParentName:'个人中心'}}">
										<button class="button1">{{$t('lang.View')}}</button>
									</router-link>
								</div>
											<p v-if="item.isExpertEvaluate==0&&!item.isMatchSoft&&item.isSelf==1&&item.firstAudit==1" @click="getText(item.softName,item.softUrl,item.id)" class=" state-zjpg">请专家评估
							</p>
							<p @click="expertReview(item.id)" class=" state-zjpg" v-if="item.isExpertEvaluate==0&&item.isMatchSoft&&item.firstAudit==1">
								参赛作品请专家评估
							</p>

							</div>
						</div>
						<div v-else="" class="el-tab-software">
							<div class="empty-tit">

							</div>
						</div>

						<el-pagination layout="total, prev, pager, next, jumper" style="margin:30px 0; text-align: center" @size-change="handleSizeChange" @current-change="handleCurrentChange" :total="mySoftObj.total" :current-page.sync="mySoftObj.page" :page-size="limit">
						</el-pagination>
					</div>

				</el-tab-pane>
				<el-tab-pane :label="$t('lang.download')">
					<div class="min-height">
						<div v-if="myDownList.dataList.length>0" class="personal-info-box" v-for="item in myDownList.dataList">
							<router-link :to="{path:'/details',query:{id:item.id,ParentName:'个人中心'}}">
								<h3>
                  <p class="hp">{{item.softName}}</p>
                  <sup v-if="item.isRecommend" class="suba">荐</sup>
                  <sup v-if="item.isHot" class="sub">热</sup>
                  <sup v-if="item.isChina==1" class="subchania">国</sup>
                  <sup v-if="item.isEvaluate==1" class="subping">信</sup>
                </h3>
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
						<el-pagination layout="total, prev, pager, next, jumper" style="margin:30px 0;text-align: center" @size-change="myDownListSizeChange" @current-change="myDownListCurrentChange" :total="myDownList.total" :current-page.sync="myDownList.page" :page-size="limit">
						</el-pagination>
					</div>
				</el-tab-pane>

				<el-tab-pane :label="$t('lang.Collect')">
					<div class="min-height">
						<div v-if="collecTionNum.dataList.length>0" class="personal-info-box" v-for="item in collecTionNum.dataList">
							<router-link :to="{path:'/details',query:{id:item.id,ParentName:'个人中心'}}">
								<h3><p class="hp">{{item.softName}}</p>
                  <sup v-if="item.isRecommend" class="suba">荐</sup>
                  <sup v-if="item.isHot==1" class="sub">热</sup>
                  <sup v-if="item.isChina==1" class="subchania">国</sup>
                  <sup v-if="item.isEvaluate==1" class="subping">信</sup>
                </h3>
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
						<el-pagination layout="total, prev, pager, next, jumper" style="margin:30px 0;text-align: center" @size-change="collecTionNumSizeChange" @current-change="collecTionNumCurrentChange" :total="collecTionNum.total" :current-page.sync="collecTionNum.page" :page-size="limit">
						</el-pagination>
					</div>
				</el-tab-pane>
				<el-tab-pane :label="$t('lang.share')">
					<div class="min-height">
						<div v-if="enjoyNum.dataList.length>0" class="personal-info-box" v-for="item in enjoyNum.dataList">
							<router-link :to="{path:'/details',query:{id:item.id,ParentName:'个人中心'}}">
								<h3><p class="hp">{{item.softName}}</p>
                  <sup v-if="item.isRecommend" class="suba">荐</sup>
                  <sup v-if="item.isHot==1" class="sub">热</sup>
                  <sup v-if="item.isChina==1" class="subchania">国</sup>
                  <sup v-if="item.isEvaluate==1" class="subping">信</sup>
                </h3>
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
						<el-pagination layout="total, prev, pager, next, jumper"  style="margin:30px 0; text-align: center" @size-change="enjoyNumSizeChange" @current-change="enjoyNumCurrentChange" :total="enjoyNum.total" :current-page.sync="enjoyNum.page" :page-size="limit">
						</el-pagination>
					</div>
				</el-tab-pane>
		<!--		<el-tab-pane label="我的反馈">
					<div class="min-height">
						<el-table class="myfeedbacktable" :data="myfeedbackList" border style="width: 100%; text-align: left;">
							<el-table-column prop="createTime" label="反馈日期" width="180">
							</el-table-column>
							<el-table-column prop="fbTypes" label="反馈问题" width="">
							</el-table-column>
							<el-table-column prop="helpLevel" label="我的评分" width="100">
							</el-table-column>
							<el-table-column prop="fbContent" label="我的建议">
							</el-table-column>
							<el-table-column prop="fbReply" label="反馈回复">
							</el-table-column>
							<el-table-column prop="helpLevel" label="操作" width="150">
								<template slot-scope="scope">
									<router-link target="_blank" :to="{path:'/details',query:{id:scope.row.id,ParentName:'个人中心'}}">
										<el-button style='float: left; margin-right: 5px;' size="small">查看反馈对象</el-button>

									</router-link>
								</template>
							</el-table-column>
						</el-table>
						<el-pagination layout="total, prev, pager, next, jumper" @size-change="myfeedbackObjSizeChange" @current-change="myfeedbackObjNumCurrentChange" :total="myfeedbackObj.total" :current-page.sync="myfeedbackObj.page" :page-size="limit">
						</el-pagination>

					</div>
				</el-tab-pane>
-->
			</el-tabs>

		</div>

		<foot></foot>

		<!--查看报名信息-->

		<el-dialog title="参赛信息" custom-class="activityInfo" :visible.sync="ActivityInfoPop" :close-on-click-modal="false" :close-on-press-escape="false">
			<ul v-if="singInfo" class="acInfo-box">
				<li class="libor">
					<h4>软件名称：</h4>
					<p>{{singInfo.softName}}</p>
				</li>
				<li class="libor">
					<h4>软件版本：</h4>
					<p>{{singInfo.softVersion}}</p>
				</li>
				<li class="libor">
					<h4>开源类型：</h4>
					<p>{{singInfo.opensourceType}}</p>
				</li>
				<li class="libor">
					<h4>应用领域：</h4>
					<p>{{singInfo.applicationField}}</p>
				</li>
				<li class="libor">
					<h4>软件分类：</h4>
					<p>{{singInfo.softCategoryName}}</p>
				</li>
				<li class="libor">
					<h4>编程语言：</h4>
					<p>{{singInfo.programmingLanguage}}</p>
				</li>
				<li class="libor">
					<h4>用户接口：</h4>
					<p>{{singInfo.userInterface}}</p>
				</li>
				<li class="libor">
					<h4>代码地址：</h4>

					<p>
						<a target="_blank" :href="singInfo.softUrl">{{singInfo.softUrl}}</a>
					</p>
				</li>
				<li class="libor">
					<h4>操作平台：</h4>
					<p>{{singInfo.operatingSystem}}</p>
				</li>

				<li v-if="teacherInfo">
					<h4>指导教师：</h4>
					<el-table :data="teacherInfo" border style="width: 100%;">
						<el-table-column header-align="center" prop="userName" label="姓名" width="120">
						</el-table-column>
						<el-table-column header-align="center" prop="userUnit" label="所在单位">
						</el-table-column>
						<el-table-column header-align="center" prop="userPhone" label="手机" width="130">
						</el-table-column>
					</el-table>

				</li>
				<li class="libor">
					<h4>参赛人员：</h4>
					<span class="ifniming">是否在发布时匿名：{{singInfo.isShowDeveloperName==0?'是':'否'}}</span>
					<el-table :data="singuserList" border style="width: 100%;">
						<el-table-column header-align="center" prop="userName" label="姓名" width="120">
						</el-table-column>
						<el-table-column header-align="center" prop="userUnit" label="所在单位">
						</el-table-column>
						<el-table-column header-align="center" prop="userJob" label="软件中承担何种工作">
						</el-table-column>
						<el-table-column header-align="center" prop="userPhone" label="手机" width="130">

						</el-table-column>

					</el-table>
				</li>
				<li class="libor">
					<h4>作品摘要：</h4>
					<p class="intron" v-html="singInfo.softIntroduce"></p>
				</li>
				<li class="libor">
					<table class="wordlist" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<th width="163">分析设计文档</th>
							<th width="163">项目规格书</th>
							<th width="163">测试文档</th>
							<th width="163">用户手册</th>
							<!--<th width="131">设计架构及技术报告</th>-->
						</tr>
						<tr>
							<td>
								<a :href="analysisDocUrl" target="_blank">查看已上传文件</a>
							</td>
							<td>
								<a :href="itemBookDocUrl" target="_blank">查看已上传文件</a>
							</td>
							<td>
								<a :href="testDocUrl" target="_blank">查看已上传文件</a>
							</td>
							<td>
								<a :href="userDocUrl" target="_blank">查看已上传文件</a>
							</td>
							<!--<td>
								<a :href="frameworkReportDocUrl" target="_blank">查看已上传文件</a>
							</td>-->
						</tr>
					</table>

				</li>
				<li class="libor">
					<div class="imglist">
						<img v-if="softDocObg.softImgOne" :src="softImgOneUrl" />
						<img v-if="softDocObg.softImgTwo" :src="softImgTwoUrl" />
						<img v-if="softDocObg.softImgThree" :src="softImgThreeUrl" />
						<img v-if="softDocObg.softVideo" :src="softImgThreeUrl" />
					</div>

				</li>

			</ul>
			<span slot="footer" class="dialog-footer">
    <el-button @click="ActivityInfoPop = false">关 闭</el-button>
  </span>
		</el-dialog>

		<!--//查看报名信息-->

		<!--pop-->

		<el-dialog custom-class="examinedialog " title="请专家评估" :close-on-press-escape="false" :visible.sync="dialogReview" :close-on-click-modal="false" :show-close='true'>
			<el-form :model="form" ref="form" :inline="true" class="demo-form-inline">
				<div class="box-big">
					<el-form-item prop="name" label="软件名称" :label-width="formLabelWidth">
						<em class="addti">*</em>
						<el-input :disabled="true" v-model="form.name" placeholder="请输入内容" auto-complete="off"></el-input>
					</el-form-item>
				</div>
				<div class="box-big">
					<el-form-item prop="softUrl" label="代码地址" :label-width="formLabelWidth">
						<em class="addti">*</em>
						<el-input :disabled="true" v-model="form.softUrl" placeholder="github或cstos.cstcloud.cn的项目地址，推荐使用cstos.cstcloud.cn" auto-complete="off"></el-input>
						<!--<p class="diatit">gitbun或者</p>-->
					</el-form-item>
				</div>
				<div class="box">
					<el-form-item prop="softUrl" label="分析设计文档" :label-width="formLabelWidth">
						<em class="addti">*</em>
						<el-input v-model="form.analysisName" placeholder="" auto-complete="off" :disabled="true"></el-input>
						<div class="tit">
							<!--<button>下载模板</button>-->
						</div>
					</el-form-item>
					<el-upload class="upload-demo" ref="analysisRef" :action=upUrl :on-success='analysisDocSuccess' :on-change="analysisDocChange"  :limit="1" alllist-con :auto-upload="false" :file-list="fileList1">
						<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
						<el-button style="margin-left:20px; width:120px" size="small" type="success" @click="submitUpload()">上     传</el-button>
						<div slot="tip" class="el-upload__tip">{{form.analysisName}}描述设计架构，模块功能描述，相关依赖软件的说明，与同类软件对比分析等。只能上传 .doc/.docx/.pdf文件，且不超过1M <span v-if="analysisCheck&&!form.analysisName">请确认文档并上传</span></div>
					</el-upload>
				</div>
				<div class="box">
					<el-form-item prop="softUrl" label="项目规格书" :label-width="formLabelWidth">
						<em class="addti">*</em>
						<el-input v-model="form.itemBookName" placeholder="" auto-complete="off" :disabled="true"></el-input>
						<div class="tit">
							<!--<button>下载模板</button>-->

						</div>
					</el-form-item>
					<el-upload class="upload-demo" ref="itemBookRef" :action=upUrl :on-success='itemBookDocSuccess' :on-change="itemBookDocChange" :limit="1" alllist-con :auto-upload="false" :file-list="fileList2">
						<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
						<el-button style="margin-left:20px; width:120px" size="small" type="success" @click="submitItemBook()">上     传</el-button>
						<div slot="tip" class="el-upload__tip">包括创作思路，科研领域，成功案例等。只能上传 .doc/.docx/.pdf文件，且不超过1M<span v-if="itemBookCheck&&!form.itemBookName">请确认文档并上传</span></div>
					</el-upload>

				</div>
				<div class="box">
					<el-form-item prop="softUrl" label="测试文档" :label-width="formLabelWidth">
						<em class="addti">*</em>
						<el-input v-model="form.testDocName" placeholder="" auto-complete="off" :disabled="true"></el-input>
						<div class="tit">
							<!--<button>下载模板</button>-->

						</div>
					</el-form-item>
					<el-upload class="upload-demo" ref="testDocRef" :action=upUrl :on-success='testDocSuccess' :on-change="testDocChange" :limit="1" alllist-con :auto-upload="false" :file-list="fileList3">
						<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
						<el-button style="margin-left:20px; width:120px" size="small" type="success" @click="submitTestDoc()">上     传</el-button>
						<div slot="tip" class="el-upload__tip">只能上传 .doc/.docx/.pdf文件，且不超过1M<span  v-if="testDocCheck&&!form.testDocName">请确认文档并上传</span></div>
					</el-upload>

				</div>
				<div class="box">
					<el-form-item prop="softUrl" label="用户手册" :label-width="formLabelWidth">
						<em class="addti">*</em>
						<el-input v-model="form.userDocName" placeholder="" auto-complete="off" :disabled="true"></el-input>
						<div class="tit">
							<!--<button>下载模板</button>-->

						</div>
					</el-form-item>
					<el-upload class="upload-demo" ref="userDocRef" :action=upUrl :on-success='userDocSuccess' :on-change="userDocChange" :limit="1" alllist-con :auto-upload="false" :file-list="fileList4">
						<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
						<el-button style="margin-left:20px; width:120px" size="small" type="success" @click="submitUserDoc()">上     传</el-button>
						<div slot="tip" class="el-upload__tip">只能上传 .doc/.docx/.pdf文件，且不超过1M<span v-if="userDocCheck&&!form.userDocName" >请确认文档并上传</span></div>
					</el-upload>

				</div>
				<div class="box">
					<el-form-item prop="softUrl" label="软件效果展示" :label-width="formLabelWidth">
						<em class="addti">*</em>
						<div class="upload-box">
							<el-upload class="avatar-uploader" :action=imgUrlNew :show-file-list="true" list-type="picture" :on-success="ImgSuccessFirst" :file-list="fileList5">
								<img v-if="imageUrl" :src="imageUrl" class="avatar">
								<i v-else class="el-icon-plus avatar-uploader-icon"></i>

							</el-upload>
							<p>请上传图片</p>
						</div>
						<div class="upload-box">
							<el-upload class="avatar-uploader" :action=imgUrlNew :show-file-list="true" list-type="picture" :on-success="ImgSuccessSecond" :file-list="fileList6">
								<img v-if="imageUrl" :src="imageUrl" class="avatar">
								<i v-else class="el-icon-plus avatar-uploader-icon"></i>
							</el-upload>
							<p>请上传图片</p>
						</div>
						<div class="upload-box">
							<el-upload class="avatar-uploader" :action=imgUrlNew :show-file-list="true" list-type="picture" :on-success="ImgSuccessThird" :file-list="fileList7">
								<img v-if="imageUrl" :src="imageUrl" class="avatar">
								<i v-else class="el-icon-plus avatar-uploader-icon"></i>
							</el-upload>
							<p>请上传图片</p>
						</div>
						<div class="upload-box">
							<el-upload class="avatar-uploader" :action=imgUrlVideo :show-file-list="true" list-type="picture" :on-success="videoSuccessFirst" :file-list="fileList8">
								<img v-if="imageUrl" :src="imageUrl" class="avatar">
								<i v-else class="el-icon-plus avatar-uploader-icon"></i>
							</el-upload>
							<p>请上传视频</p>
						</div>
						<p></p>

					</el-form-item>
					<p class="uploadtit"> 包括软件界面展示、运行结果展示或其他能够展示软件图片或视频，图片格式为jpg或png，单个图片不大于1M，视频时长不超过5分钟。
					</p>
					<!--<el-upload class="upload-demo" ref="softResultDocRef" :action=upUrl multiple :on-success='softResultDocSuccess' :limit="1" alllist-con :auto-upload="false">
						<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
						<el-button style="margin-left:20px; width:120px" size="small" type="success" @click="submitSoftResultDoc()">上     传</el-button>
						<div slot="tip" class="el-upload__tip">包括软件界面展示、运行结果展示或其他能够展示软件的图片或视屏，图片格式为jpg，单张图片不大于1M，视频时长不超过5分钟</div>
					</el-upload>-->

				</div>
			<!--	<div class="box">
					<el-form-item prop="softUrl" label="设计架构及技术报告" :label-width="formLabelWidth">
						<em class="addti">*</em>
						<el-input v-model="form.frameworkReportName" placeholder="" auto-complete="off"></el-input>
						<div class="tit">


						</div>
					</el-form-item>
					<el-upload class="upload-demo" ref="frameworkReportDocRef" :action=upUrl :on-success='frameworkReportDocSuccess' :limit="1" alllist-con :auto-upload="false" :file-list="fileList9">
						<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
						<el-button style="margin-left:20px; width:120px" size="small" type="success" @click="submitFrameworkReportDoc()">上     传</el-button>
						<div slot="tip" class="el-upload__tip">系统设计架构概述、创新思路、对使用的技术机制进行分析，对各模块进行功能描述。只能上传 .doc/.docx/.pdf文件，且不超过1M</div>
					</el-upload>

				</div>-->

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
        userId:window.SITE_CONFIG['userId'],
				dialogReview: false,
				innerVisible: false,
				ActivityInfoPop: false,
				innerTitle: '',
				upUrl:window.SITE_CONFIG['apiURL'] + '/haoweb/sys/upload/uploadForEvaluate/',
				imgUrlNew: window.SITE_CONFIG['apiURL'] + '/haoweb/sys/upload/uploadForEvaluateImg/',
				imgUrlVideo: window.SITE_CONFIG['apiURL'] + '/haoweb/sys/upload/uploadForEvaluateVideo/',
				form: {
					name: '',
					softUrl: '',
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
				},
				curSoftId: '',
				formLabelWidth: '140px',
				mySoftList: [],
				myollectionList: [],
				mySharList: [],
				limit: 5,
				myDownList: {
					dataList: [],

				},
				imageUrl: '',
				collecTionNum: {
					dataList: [],

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
				myfeedbackObj: {
					total: 1,
					page: 1,

				},
				singInfo: '',
				softDocObg: '',
				singuserList: '',
				dialogImageUrl: '',
				dialogVisible: false,
				myfeedbackList: [],
				userInfoNew: '',
				cstnetIdNew: ''

			}
		},
		mounted() {
      $.getScript("http://passport.escience.cn/js/isLogin.do", function(){
        console.log("科技云验证是否登录",data.result)
        //本地缓存有数据，但是是未登录状态，验证是否退出
        if(!data.result)
          window.location.href=window.SITE_CONFIG['apiURL'] + '/haoweb/web/auth/login'
      })
			//我的软件
			this.getMySoft()
      console.log("userId个人中心",this.userId)

			this.userInfoNew = this.userInfo.trueName;
			this.cstnetIdNew = this.userInfo.cstnetId

			//验证token是否过期
			this.axios.defaults.headers.common['token'] = this.token;
			this.$http.post('haoweb/web/user/checkingToken')
				.then((response)=>{
          if(response.data.code == 401) {
            this.$confirm(response.data.msg, '提示', {
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
          }
        })
				.catch(function(error) {
					console.log(error);
				})

		},
		methods: {
			//我的软件
			getMySoft: function() {
				var params1 = new URLSearchParams();
				params1.append("userId", this.userId);
				params1.append("page", this.mySoftObj.page);
				params1.append("limit", this.limit);
				this.$http.post('/haoweb/web/user/mySoftList', params1)
					.then((response)=>{
					  console.log("response**********",response)
            this.mySoftList = response.data.page.list;
            this.mySoftObj.page = response.data.page.currPage;
            this.mySoftObj.total = response.data.page.totalCount;
          })
					.catch(function(error) {
						console.log(error);
					})
			},
			//我的投递
			getmyfeedbackList: function() {
				var params1 = new URLSearchParams();
				params1.append("userId", this.userId);
				params1.append("token", this.token);
				params1.append("page", this.myfeedbackObj.page);
				params1.append("limit", this.limit);
				this.$http.post( '/haoweb/web/user/listMyFeedback', params1)
					.then((response)=>{
            this.myfeedbackList = response.data.page.list;
            this.myfeedbackObj.page = response.data.page.currPage;
            this.myfeedbackObj.total = response.data.page.totalCount;
          })
					.catch(function(error) {
						console.log(error);
					})
			},
			handleRemove: function(file, fileList) {
			},
			handlePictureCardPreview: function(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			getFollowList: function(ele, type) {
				var params = new URLSearchParams();
				params.append("userId", this.userId);
				params.append("page", this[ele].page);
				params.append("limit", this.limit);
				params.append("operationType", type);
				this.$http.post('/haoweb/web/user/followList', params)
					.then((response)=>{
            this[ele].dataList = response.data.page.records;
            this[ele].total = response.data.page.total;
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
				this.$alert(response.msg, '提示信息', {
					confirmButtonText: '确定',
				});

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
				console.log("this.fileList9", this.fileList9)
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
			//tabs
			handleClick: function(tab, event) {


				if(tab.index == 0) {
					this.getMySoft()
				}
				if(tab.index == 1) {
					this.getFollowList('myDownList', 3)
				}
				if(tab.index == 2) {
					this.getFollowList('collecTionNum', 1)
				}
				if(tab.index == 3) {
					this.getFollowList('enjoyNum', 2)
				}
				if(tab.index == 4) {
					this.getmyfeedbackList()
				}

			},

			//获取参赛人信息
			getActivityInfo: function(row) {
				this.ActivityInfoPop = true;
				var params = new URLSearchParams();
				/*this.axios.defaults.headers.common['token'] = this.token;*/
				params.append("token", this.token);
				params.append("userId", row.userId);
				params.append("softId", row.softId);
				params.append("activityId", row.id);
				this.$http.post( '/haoweb/web/user/getJoinDetail', params)
					.then((response)=>{
            this.singInfo = response.data.softInfo;
            this.teacherInfo = response.data.teacher;
            this.singuserList = response.data.userList;
            this.softDocObg = response.data.softDoc;
            this.analysisDocUrl = baseUrl.baseUrlImg + this.softDocObg.analysisDoc
            this.frameworkReportDocUrl = baseUrl.baseUrlImg + this.softDocObg.frameworkReportDoc
            this.itemBookDocUrl = baseUrl.baseUrlImg + this.softDocObg.itemBookDoc
            this.testDocUrl = baseUrl.baseUrlImg + this.softDocObg.testDoc
            this.userDocUrl = baseUrl.baseUrlImg + this.softDocObg.userDoc
            this.softImgOneUrl = baseUrl.baseUrlImg + this.softDocObg.softImgOne
            this.softImgTwoUrl = baseUrl.baseUrlImg + this.softDocObg.softImgTwo
            this.softImgThreeUrl = baseUrl.baseUrlImg + this.softDocObg.softImgThree
            this.softVideoUrl = baseUrl.baseUrlImg + this.softDocObg.softVideo
          })
					.catch(function(error) {
						console.log(error);
					})

			},
			//修改参赛餐料
			toModify: function(row) {
				var params = new URLSearchParams();
				params.append("softId", row.softId);
				this.$http.post( '/haoweb/web/join/checkIsUpdate', params)
					.then((response)=>{
            if(response.data == 1) {
              this.$alert(response.data.msg, '提示信息', {
                confirmButtonText: '确定',
              });
            } else {
              var toModifyObj = {
                activityId: row.id,
                softId: row.softId,
                check: true,
              }
              this.$router.push({
                path: '/agSignUp',
                query: toModifyObj
              });
            }
          })
					.catch(function(error) {
						console.log(error);
					})

			},
			//删除软件
			delSoft: function(row) {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					var params = new URLSearchParams();
					params.append("userId", this.userId);
					params.append("softId", row.softId);
					params.append("activityId", row.id);
					this.$http.post( 'haoweb/web/join/joinInfoDelete', params)
						.then((response)=>{
              var titStype = response.data.code == 0 ? 'success' : 'warning'
              if(response.data.code == 0) {
                /*this.getMyJoinList()*/
                this.$message({
                  type: titStype,
                  message: response.data.msg
                });
              }  else {
                this.$message({
                  type: titStype,
                  message: response.data.msg
                });
              }

            })
						.catch(function(error) {
							console.log(error);
						})

				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});

			},
			//
			delSoftOrdinary: function(row) {

				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then((response) => {
					var params = new URLSearchParams();
					params.append("userId", this.userId);
					params.append("softId", row.id);
					params.append("isSelf", row.isSelf);
					this.$http.post( '/haoweb/web/user/softInfoDelete', params)
						.then((response)=>{
              var titStype = response.data.code == 0 ? 'success' : 'warning'
              if(response.data.code == 0) {
                this.getMySoft()
                this.$message({
                  type: titStype,
                  message: response.data.msg
                });
              }  else {
                this.$message({
                  type: titStype,
                  message: response.data.msg
                });
              }

            })
						.catch(function(error) {
							console.log(error);
						})

				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});

			},

			toActivity(row) {

				var newObj = {
					id: row.id
				}
				this.$router.push({
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
			myDownListSizeChange(val) {
				this.myDownList.pageSize = val;
				this.getFollowList('myDownList', 3)
			},
			myDownListCurrentChange(val) {
				this.myDownList.pageNum = val;
				this.getFollowList('myDownList', 3)
			},
			collecTionNumSizeChange(val) {
				this.collecTionNum.pageSize = val;
				this.getFollowList('collecTionNum', 1)
			},
			collecTionNumCurrentChange(val) {
				this.collecTionNum.pageNum = val;
				this.getFollowList('collecTionNum', 1)
			},
			enjoyNumSizeChange(val) {
				this.enjoyNum.pageSize = val;
				this.getFollowList('enjoyNum', 2)
			},
			enjoyNumCurrentChange(val) {
				this.enjoyNum.pageNum = val;
				this.getFollowList('enjoyNum', 2)
			},

			myfeedbackObjSizeChange(val) {
				this.myfeedbackObj.pageSize = val;
				this.getmyfeedbackList()
			},
			myfeedbackObjNumCurrentChange(val) {
				this.myfeedbackObj.pageNum = val;
				this.getmyfeedbackList()
			},
			getText: function(name, url, id, match) {
				this.form.name = name;
				this.form.softUrl = url;
				this.curSoftId = id;
				this.dialogReview = true;
				this.clearExpertReview()
			},
			clearExpertReview:function(){
				this.form.analysisDoc='';
				this.form.analysisName='';
				this.form.frameworkReportDoc='';
				this.form.frameworkReportName='';
				this.form.itemBookDoc='';
				this.form.itemBookName='';
				this.form.softResultDoc='';
				this.form.softResultName='';
				this.form.testDoc='';
				this.form.testDocName='';
				 this.form.userDoc='';
				 this.form.userDocName='';
				 this.form.softImgOne='';
				 this.form.softImgOneName='';
				 this.form.softImgTwo='';
				 this.form.softImgTwoName='';
				 this.form.softImgThree='';
				 this.form.softImgThreeName='';
				 this.form.softVideo='';
				 this.form.softVideoName='';
				 this.analysisCheck='';
				this.itemBookCheck='';
				this.testDocCheck='';
				this.userDocCheck='';
				this.imageUrl='';
				this.fileList5=[];
				this.fileList6=[];
				this.fileList7=[];
				this.fileList8=[];

			},
			expertReview: function(softId) {
				var softDoc = {
					analysisDoc: this.form.analysisDoc,
					analysisDocOriginalName: this.form.analysisName,
					createTime: "",
					frameworkReportDoc: this.form.frameworkReportDoc,
					frameworkReportDocOriginalName: this.form.frameworkReportName,
					id: 0,
					itemBookDoc: this.form.itemBookDoc,
					itemBookDocOriginalName: this.form.itemBookName,
					softId: softId,
					softResultDoc: this.form.softResultDoc,
					softResultDocOriginalName: this.form.softResultName,
					testDoc: this.form.testDoc,
					testDocOriginalName: this.form.testDocName,
					userDoc: this.form.userDoc,
					userDocOriginalName: this.form.userDocName,
					softImgOne: this.form.softImgOne,
					softImgOneOriginalName: this.form.softImgOneName,
					softImgTwo: this.form.softImgTwo,
					softImgTwoOriginalName: this.form.softImgTwoName,
					softImgThree: this.form.softImgThree,
					softImgThreeOriginalName: this.form.softImgThreeName,
					softVideo: this.form.softVideo,
					softVideoOriginalName: this.form.softVideoName,
					isMatchSoft: 1
				}
				this.$http.post('/haoweb/web/soft/startEvaluate', softDoc)
					.then((response)=>{
            if(response.data.code == 0) {
              this.$alert(response.data.msg, '提示信息', {
                confirmButtonText: '确定',
              });
              this.dialogReview = false;
              this.getMySoft()

            }  else {
              this.$alert(response.data.msg, '提示信息', {
                confirmButtonText: '确定',
              });
            }

          })
					.catch(function(error) {
						console.log(error);
					})

			},
			submitForm: function(formName) {

				var softDoc = {
					analysisDoc: this.form.analysisDoc,
					analysisDocOriginalName: this.form.analysisName,
					createTime: "",
					frameworkReportDoc: this.form.frameworkReportDoc,
					frameworkReportDocOriginalName: this.form.frameworkReportName,
					id: 0,
					itemBookDoc: this.form.itemBookDoc,
					itemBookDocOriginalName: this.form.itemBookName,
					softId: this.curSoftId,
					softResultDoc: this.form.softResultDoc,
					softResultDocOriginalName: this.form.softResultName,
					testDoc: this.form.testDoc,
					testDocOriginalName: this.form.testDocName,
					userDoc: this.form.userDoc,
					userDocOriginalName: this.form.userDocName,
					softImgOne: this.form.softImgOne,
					softImgOneOriginalName: this.form.softImgOneName,
					softImgTwo: this.form.softImgTwo,
					softImgTwoOriginalName: this.form.softImgTwoName,
					softImgThree: this.form.softImgThree,
					softImgThreeOriginalName: this.form.softImgThreeName,
					softVideo: this.form.softVideo,
					softVideoOriginalName: this.form.softVideoName,
					isMatchSoft: 0
				}

				if(!this.form.analysisDoc) {
					this.messageOpen('请上传分析设计文档', 'warning')
					return false;
				}
				if(!this.form.itemBookDoc) {
					this.messageOpen('请上传项目规格书', 'warning')
					return false;
				}
				if(!this.form.testDoc) {
					this.messageOpen('请上传测试文档', 'warning')
					return false;
				}
				if(!this.form.userDoc) {
					this.messageOpen('请上传用户手册', 'warning')
					return false;
				}

				if(!this.form.softImgOne && !this.form.softImgTwo && !this.form.softImgThree && !this.form.softVideo) {
					this.messageOpen('请上传软件效果展示', 'warning')
					return false;
				}
				/*if(!this.form.frameworkReportDoc) {
					this.messageOpen('请上传设计架构及技术报告', 'warning')
					return false;
				}*/
				if(this.form.analysisDoc && this.form.itemBookDoc && this.form.testDoc && this.form.userDoc) {

					this.$refs[formName].validate((valid) => {
						if(valid) {
							this.axios.defaults.headers.common['token'] = this.token;
							this.$http.post( '/haoweb/web/soft/startEvaluate', softDoc)
								.then((response)=>{
                  if(response.data.code == 0) {
                    this.$alert(response.data.msg, '提示信息', {
                      confirmButtonText: '确定',
                    });
                    this.dialogReview = false;
                    this.getMySoft()

                  }  else {
                    this.$alert(response.data.msg, '提示信息', {
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

	.activityInfo {
		width: 700px;
	}

	.activityInfo .acInfo-box {
		margin: 10px auto;
		width: 610px;
	}

	.activityInfo .el-dialog__body {
		padding-top: 0px;
	}

	.activityInfo .acInfo-box .libor {
		overflow: hidden;
		width: 100%;
		line-height: 40px;
		border-bottom: 1px dashed #dedede;
	}

	.activityInfo .acInfo-box li .el-table th.is-leaf {
		padding: 0;
		height: 40px;
		line-height: 40px;
		background: #d5e6f3;
	}

	.activityInfo .el-button--small {
		float: left;
	}

	.activityInfo .acInfo-box li h4 {
		width: 100px;
		font-size: 14px;
		float: left;
		color: #888;
	}

	.activityInfo .acInfo-box li p {
		font-size: 14px;
		float: left;
		color: #888;
	}

	.activityInfo .acInfo-box li p a {
		color: #009cd2;
		text-decoration: underline;
	}

	.activityInfo .acInfo-box li .intron {
		margin: 10px 0 20px;
		width: 100%;
		overflow: hidden;
	}

	.activityInfo .acInfo-box li .intron img {
		display: block;
		margin: 10px auto;
	}

	.activityInfo .acInfo-box li .intron p {
		font-size: 14px;
		line-height: 24px;
		color: #666;
	}

	.activityInfo .acInfo-box li .intron h1 {
		width: 100%;
		font-size: 24px;
		line-height: 36px;
	}

	.activityInfo .acInfo-box li .intron h2 {
		width: 100%;
		font-size: 22px;
		line-height: 30px;
	}

	.activityInfo .acInfo-box li .intron h3 {
		width: 100%;
		font-size: 20px;
		line-height: 30px;
	}

	.activityInfo .ifniming {
		float: right;
		font-size: 12px;
		color: #666;
	}

	.activityInfo .acInfo-box li .intron h4 {
		width: 100%;
		font-size: 18px;
		line-height: 30px;
	}

	.activityInfo .acInfo-box li .intron h5 {
		width: 100%;
		font-size: 16px;
		line-height: 30px;
	}

	.activityInfo .acInfo-box li .intron h6 {
		width: 100%;
		font-size: 14px;
		line-height: 30px;
	}

	.personalInfo .examinedialog {
		width: 800px;
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
		height: 30px;
		width: 80px;
	}

	.personalInfo .examinedialog .tit button {
		float: left;
		margin: 10px 0 0 15px;
		padding: 5px 8px;
		font-size: 14px;
		line-height: 16px;
		color: #9c7911;
		background: #fdd765;
		border-radius: 3px;
	}

	.personalInfo .examinedialog .tit p {
		float: left;
		margin-left: 20px;
		font-size: 12px;
		line-height: 24px;
		color: #cc0000;
	}

	.personalInfo .examinedialog .upload-demo {
		position: relative;
		width: 350px;
		display: inline-block;
	}

	.personalInfo .examinedialog .upload-demo .el-button--primary {
		background: #67C23A;
		border: 1px solid #67C23A;
	}

	.personalInfo .examinedialog .upload-demo .el-button--success {
		background: #46c3a1;
		border: 1px solid #46c3a1;
	}

	.personalInfo .examinedialog .upload-demo .el-button--primary span,
	.personalInfo .examinedialog .upload-demo .el-button--success span {
		color: #fff;
	}
  /*新增*/
  .personal-info-box h3 sup{
    display:inline-block;
    margin:8px 0 0 5px;
    padding:1px 3px 5px 3px;
    height: 16px;
    font-style: normal;
    text-align: center;
    line-height: 16px;
    position: relative;
  }
  .personal-info-box h3 sup::after{
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
  .personal-info-box h3 .sub{
    color:#fff;
    font-size: 12px;
    background:#ff0000;
  }
  .personal-info-box h3 .sub::after{
    border-bottom:7px solid #fff;
  }
  .personal-info-box h3 .suba{
    color:#fff;
    font-size: 12px;
    background:#ec9d2f;
  }
  .personal-info-box h3 .suba::after{
    border-bottom:7px solid #fff;
  }
  .personal-info-box h3  .subchania{
    color:#fff;
    font-size: 12px;
    background:#07b62c;
  }
  .personal-info-box h3  .subchania::after{
    border-bottom:7px solid #fff;
  }
  .personal-info-box h3  .subping{
    color:#fff;
    font-size: 12px;
    background:#672fd9;
  }
  .personal-info-box h3  .subping::after{
    border-bottom:7px solid #fff;
  }
  /*新增*/

	.personalInfo .examinedialog .bottom {
		padding-top: 20px;
		overflow: hidden;
		border-top: 1px dashed #dedede;
	}

	.personalInfo .examinedialog .bottom .right {
		overflow: hidden;
		margin: 0 auto;
		width: 300px;
	}

	.personalInfo .examinedialog .bottom .right button {
		padding: 10px 50px;
		line-height: 30px;
	}

	.personalInfo .content {
    margin: 0 auto;
		background: #fff;
		padding: 0 10px;
		width: 1180px;
	}

	.personalInfo .content .min-height {
		margin-top: 10px;
		min-height: 400px;
	}

	.personalInfo .content .min-height table td {
		text-align: center;
	}

	.personalInfo .top-box {
		padding: 15px 0;
		margin: 10px 0;
		width: 100%;
	}

	.personalInfo .top-box p {
		width: 100%;
		font-size: 14px;
		line-height: 30px;
		color: #666;
		text-indent: 20px;
	}

	.personalInfo .avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.personalInfo .avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.personalInfo .avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 100px;
		height: 100px;
		line-height: 100px;
		text-align: center;
	}

	.personalInfo .upload-box {
		margin: 20px;
		float: left;
	}

	.personalInfo .upload-box p {
		width: 100%;
		text-align: center;
	}

	.personalInfo .avatar {
		width: 100px;
		height: 100px;
		display: block;
	}

	.avatar-uploader {
		position: relative;
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

	.personalInfo .wordlist {
		padding: 10px;
		border-collapse: collapse;
	}

	.personalInfo .wordlist th,
	.personalInfo .wordlist td {
		text-align: center;
		line-height: 40px;
		font-size: 13px;
		color: #666;
		border: 1px solid #EBEEF5;
	}

	.personalInfo .wordlist td a {
		display: block;
		padding: 8px 8px;
		font-size: 13px;
		line-height: 18px;
		color: #666;
		border: 1px solid #dedede;
		border-radius: 5px;
		margin: 10px 5px;
	}

	.personalInfo .wordlist td a:hover {
		background: #009cd2;
		color: #fff;
	}

	.personalInfo .imglist {
		margin-top: 10px;
		overflow: hidden;
	}

	.personalInfo .imglist img {
		float: left;
		margin: 5px;
		width: 150px;
		height: 150px;
		border: 1px solid #EBEEF5;
	}

	.personalInfo .content .min-height .myfeedbacktable td {
		text-align: left;
	}

	.personalInfo .addti {
		float: left;
		font-style: normal;
		font-size: 14px;
		font-weight: bold;
		color: #F56C6C;
	}

	.personalInfo .box-big .el-input {
		float: left;
		margin-left: 10px;
		width: 150px;
	}

	.personalInfo .box .el-input {
		float: left;
		margin-left: 10px;
		width: 150px;
	}

	.personalInfo .uploadtit {
		display: block;
		margin-bottom: 20px;
		margin-left: 160px;
		width: 550px;
		font-size: 12px;
		color: #606266;
		line-height: 16px;
	}

	.personalInfo .ifmatchsoft1 {
		margin: 5px 10px 0 0px;
		float: left;
		width: 26px;
		height: 26px;
		line-height: 24px;
		text-align: center;
		font-size: 14px;
		color: #fff;
		border-radius: 5px;
		background: url(../assets/bg/bg_1.png) no-repeat
	}

	.personalInfo .ifmatchsoft2 {
		margin: 5px 10px 0 0px;
		float: left;
		width: 26px;
		height: 26px;
		line-height: 24px;
		text-align: center;
		font-size: 14px;
		color: #fff;
		border-radius: 5px;
		background: url(../assets/bg/bg_2.png) no-repeat
	}
	.personalInfo .el-upload__tip span{
		display: block;
		width: 100%;
		font-size: 12px;
		color: #F56C6C;

	}
	.personalInfo .el-upload-list--picture .el-upload-list__item-status-label{
		z-index: 10;
	}

  .personal-info-box{
    overflow: hidden;
    position: relative;
    padding: 10px 0;
    width: 100%;
    border-bottom: 1px dashed #dedede;
  }
  .personal-info-box:hover h3,.personal-info-box:hover .p{
    color: #ba7a73;
  },
  .personal-info-bg1{
    background: #f4f9f3;
  }
  .personal-info-bg2{
    background: #f8f8f0;
  }
  .personal-info-box h3{
    overflow: hidden;
    display: block;
    padding: 0 10px;

    color: #333;
    font-weight: normal;
  }
  .personal-info-box h3 p{
    float: left;
  }
  .personal-info-box h3 .hp{
    font-size: 16px;
    line-height: 36px;
  }
  .personal-info-box h3 span{
    float: left;
    margin: 10px 0 0 10px;
    padding: 0 4px;
    height: 18px;
    font-size: 12px;
    font-style: normal;
    text-align: center;
    line-height: 18px;
    border-radius: 3px;
  }
  .personal-info-box h3 .jian-bg{
    display: inline-block;
    background: #f8931f;
    color: #fff;
  }
  .personal-info-box h3 .guo-bg{
    display: inline-block;
    background: #db2828;
    color: #fff;
  }
  .personal-info-box h3 .xin-bg{
    display: inline-block;
    background: #22a85c;
    color: #fff;
  }
  .personal-info-box .p{
    display: block;
    padding:0 10px;
    width: 1060px;
    font-size: 14px;
    text-indent: 20px;
    line-height: 22px;
    color: #888;
  }
  .personal-info-box .p-box{
    overflow: hidden;
    width: 100%;

  }
  .personal-info-box .rj-infor{
    margin-left: 0px;
    padding: 5px 10px;
    float: left;
    width: 400px;
    line-height: 16px;
    color: #16a8e1;
  }
  .personal-info-box .btn-box{
    overflow: hidden;
    float: right;
  }
  .personal-info-box .btn-box button{
    float: left;
    padding: 0 15px;
    margin-left: 5px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #666;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
  }
  .personal-info-box .btn-box .button1{
    background:#dedede ;
  }
  .personal-info-box .btn-box .button2{
    color: #fff;
    background:#2295d9 ;
  }
  .personal-info-box .btn-box .button3{
    color: #fff;
    background:#e26556 ;
  }
  .personal-info-box .btn-box .button4{
    color: #977718;
    background:#fdd765 ;
  }
  .personal-info-box .rj-infor span{
    margin-right: 10px;
    color: #999;
    font-size: 12px;
  }
  .personal-info-box .rj-ypg{
    background: #12ac38;
  }
  .personal-info-box .rj-state{
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 8px;
    font-size: 14px;
    line-height: 14px;
    color: #fff;
    border-radius: 2px;
    border: none;
  }
  .personal-info-box .rj-state span{
    color: #fff;
  }
  .personal-info-box .state-dsh{
    background: #b1afaf
  }
  .personal-info-box .state-pass{
    background: #46c3a1;
  }

  .personal-info-box .state-nopass{
    background: #cc0000;
  }
  .personal-info-box .state-zjpg{
    position: absolute;
    left: 10px;
    bottom: 10px;
    padding: 6px 8px;
    font-size: 14px;
    line-height: 14px;
    color: #fff;
    border-radius: 4px;
    background: #ff9900;
    cursor: pointer;
  }
  .personal-info-box .state-ps{
    position: absolute;
    right:10px;
    top: 40px;
    padding: 5px 10px;
    font-size: 14px;
    line-height: 14px;
    color: #fff;
  }
  .personal-info-box .state-ps-pass{
    background: #12ac38;
  }

  .personal-info-box .rj-time{
    display: block;

    float: right;
    padding: 0px 10px;
    font-size: 12px;
    width: 200px;
    line-height: 24px;
    color: #999;
    text-align: right;
  }
/* .personalInfo .el-tabs__item.is-active{
   color: #fff;
   background: #409EFF;
 }*/
</style>
