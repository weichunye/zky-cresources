<template>
	<div class="bodybg">
	<div class="addbg">

		<div class="softModify">

			<div class="header-top">
				<div class="reposbox">
					<router-link to="/">
						<img class="logo" src="../assets/img/logo_small.png" alt="logo" />
					</router-link>
					<p class="text">
						{{ $t('lang.greeting')}}
					</p>
          <span  class="changelang" >
          <el-select v-model="langvalue" placeholder="" size="mini" @change="changeLangEvent">
            <el-option
              v-for="item in langOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
         </el-select>
        </span>
					<p @click="toPersonalInfo" class="right-text">{{ $t('lang.Personalcenter')}}</p>
				</div>
			</div>
      <h2>	{{ $t('lang.Softwaremodification')}}</h2>
			<div class="softModify-box">


				<!--banner-->

				<el-form :model="form" ref="form" :inline="true" class="demo-form-inline" @submit.native.prevent>
					<div class="box-big">
						<el-form-item :label=" $t('lang.nameofsoftware')" :label-width="formLabelWidth">
							<em class="addti">*</em>
							<el-input v-model="form.name" :placeholder="$t('lang.pleaseenter')+$t('lang.nameofsoftware')"  auto-complete="off"></el-input>
						</el-form-item>
					</div>
					<div class="box-big">

						<el-form-item :label=" $t('lang.Softwareversion')" :label-width="formLabelWidth">
							<em class="addti">*</em>
							<el-input v-model="form.softVersion" :placeholder="$t('lang.pleaseenter')+$t('lang.Softwareversion')" auto-complete="off"></el-input>
						</el-form-item>
					</div>
					<div class="box-big">

						<el-form-item :label="$t('lang.Chargemethod')" :label-width="formLabelWidth">
							<em class="addti">*</em>
              <el-cascader
                v-model="form.softCategory"
                :options="softCategoryOption"
                :props="{ multiple: true, checkStrictly: true }"
                clearable></el-cascader>
						</el-form-item>
					</div>
					<div class="box-big">

						<el-form-item :label="$t('lang.softwaretype')" :label-width="formLabelWidth">
							<em class="addti">*</em>
              <el-cascader
                v-model="form.opensourceType"
                :options="opensourceTypeOption"
                :props="{ multiple: true, checkStrictly: true }"
                clearable></el-cascader>

						</el-form-item>
					</div>
					<div class="box-big">

						<el-form-item :label="$t('lang.Programminglanguage')" :label-width="formLabelWidth">
							<em class="addti">*</em>
              <el-cascader
                v-model="form.Language"
                :options="LanguageOption"
                :props="{ multiple: true, checkStrictly: true }"
                clearable></el-cascader>
						</el-form-item>
					</div>
					<div class="box-big">

						<el-form-item :label="$t('lang.academicarea')" :label-width="formLabelWidth">
							<em class="addti">*</em>
              <el-cascader
                v-model="form.userInterface"
                :options="userInterfaceOption"
                :props="{ multiple: true, checkStrictly: true }"
                clearable></el-cascader>
						</el-form-item>
					</div>
					<div class="box-big">

						<el-form-item :label="$t('lang.Developmentarea')" :label-width="formLabelWidth">
							<em class="addti">*</em>
              <el-cascader
                v-model="form.applicationField"
                :options="applicationFieldOption"
                :props="{ multiple: true, checkStrictly: true }"
                clearable></el-cascader>
						</el-form-item>
            <el-form-item :label="$t('lang.Opensourcetype')" :label-width="formLabelWidth">
<!--							<em class="addti">*</em>-->&nbsp;
              <el-cascader
                v-model="form.openType"
                :options="openTypeOption"
                :props="{ multiple: true, checkStrictly: true }"
                clearable></el-cascader>
						</el-form-item>

					</div>
					<div class="box-big">
						<el-form-item :label="$t('lang.operatingsystem')" :label-width="formLabelWidth">
							<em class="addti">*</em>
							<el-select v-model="form.operatingSystem" value-key="id" filterable multiple placeholder="请选择操作平台">
								<el-option v-for="item in operatingSystemOption " :key="item.id" :label="item.label" :value="item">
								</el-option>
							</el-select>
						</el-form-item>
					</div>
					<div class="box-big">

						<el-form-item :label="$t('lang.Codeaddress')" :label-width="formLabelWidth">
<!--							<em class="addti">*</em>-->&nbsp;
							<el-input v-model.trim="form.softUrl" @blur='checkUrl' placeholder="github或cstos.cstcloud.cn的项目地址，推荐使用cstos.cstcloud.cn" auto-complete="off"></el-input>
							<!--<a class="gitUrl" v-if="form.softUrl" target="_blank" :href="form.softUrl">查看</a>-->
							<p class="textp"> {{softUrlTit}}</p>
						</el-form-item>
						<!--<el-form-item label=" " :label-width="formLabelWidth">
						<el-checkbox v-model="form.ifCrossPlatform">是否跨平台</el-checkbox>
					</el-form-item>-->

					</div>
          <div class="box-big">

						<el-form-item :label="$t('lang.Jumpaddress')" :label-width="formLabelWidth">
              &nbsp;
							<el-input v-model.trim="form.jumpUrl" :placeholder="$t('lang.pleaseenter')+$t('lang.Jumpaddress')" auto-complete="off"></el-input>
							<p class="textp"> {{jumpUrlTit}}</p>
						</el-form-item>
					</div>
          <div class="box-big1">
            <el-form-item prop="isRun" :label="$t('lang.Whethertorunimmediately')" :label-width="formLabelWidth">
              &nbsp;
              <el-radio v-model="form.isRun" label= '0'>{{$t('lang.no')}}</el-radio>
              <el-radio v-model="form.isRun" label= '1'>{{$t('lang.yes')}}</el-radio>
            </el-form-item>
          </div>
          <div class="box-big" >
            <el-form-item prop="runUrl" :label="$t('lang.Runpathimmediately')" :label-width="formLabelWidth" v-if="this.form.isRun === '1'">
              <el-input v-model="form.runUrl" :placeholder="$t('lang.pleaseenter')+$t('lang.Runpathimmediately')" auto-complete="off"></el-input>
            </el-form-item>
          </div>

					<div class="box-big">
						<el-form-item v-if="!form.ifSelfStudy" :label="$t('lang.DevelopernoSpace')" :label-width="formLabelWidth">
							<em class="addti">&nbsp;</em>
							<el-input v-model="form.developer" :placeholder="$t('lang.pleaseenter')+$t('lang.DevelopernoSpace')"></el-input>
						</el-form-item>

						<el-form-item label=" " :label-width="formLabelWidth">
							<el-checkbox style="width: 100%;" v-model="form.ifSelfStudy">{{$t('lang.ifselfdeveloped')}}</el-checkbox>
						</el-form-item>
					</div>
					<div v-if="form.ifSelfStudy">

						<h3 class="h3">{{$t('lang.Participants')}}</h3>
						<table class="singtext" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<th width="30">&nbsp;</th>
								<th width="120">{{$t('lang.name')}}</th>
								<th width="120">{{$t('lang.Currentunit')}}</th>
								<th width="120">{{$t('lang.Workinsoftware')}}</th>
								<th width="150">{{$t('lang.phone')}}</th>
								<th width="80">{{$t('lang.operating')}}</th>
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
									<div @click="delTr($event)" class="deltrbtn">{{$t('lang.delete')}}</div>
								</td>
							</tr>

							<tr>
								<td colspan="6">
									<a href="javascript:;" @click="addDomain" class="addtr">{{$t('lang.Addanewline')}}</a>
									<el-checkbox style="float: right; margin:10px 10px 0 0 ;color: #999;" v-model="form.ifHsowRealName">{{$t('lang.Isitanonymous')}}</el-checkbox>

								</td>
							</tr>
						</table>
					</div>
          <div class="box input-width">
            <el-form-item prop="softUrl"  :label=" $t('lang.userBook')" :label-width="formLabelWidth">
              <el-input v-model="form.userDocName" placeholder="" auto-complete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-upload class="upload-demo" ref="userDocRef" :action=upUrl :on-success='userDocSuccess' :on-change="userDocChange" :limit="1" alllist-con :auto-upload="false" :file-list="fileList4">
              <el-button slot="trigger" size="small" type="primary">{{ $t('lang.SelectTheFile')}}</el-button>
              <el-button style="margin-left:20px; width:120px" size="small" type="success" @click="submitUserDoc()">{{ $t('lang.uploading')}}</el-button>
              <div slot="tip" class="el-upload__tip">只能上传 .doc/.docx/.pdf文件，且不超过1M<span v-if="userDocCheck&&!form.userDocName" >请确认文档并上传</span></div>
            </el-upload>

          </div>
          <div class="box input-width">
            <el-form-item prop="softUrl" :label=" $t('lang.downZip')" :label-width="formLabelWidth">
              <el-input v-model="form.downZipName" placeholder="" auto-complete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-upload class="upload-demo" ref="downZipRef" :action=upUrl :on-success='downZipSuccess' :on-change="downZipChange" :limit="1" alllist-con :auto-upload="false" :file-list="fileList4">
              <el-button slot="trigger" size="small" type="primary">{{ $t('lang.SelectTheFile')}}</el-button>
              <el-button style="margin-left:20px; width:120px" size="small" type="success" @click="submitDownZip()">{{ $t('lang.uploading')}}</el-button>
              <div slot="tip" class="el-upload__tip">只能上传 .doc/.docx/.pdf文件，且不超过1M<span v-if="userDocCheck&&!form.userDocName" >请确认文档并上传</span></div>
            </el-upload>

          </div>
					<div class="box-big">
						<el-form-item :label="$t('lang.Worksummary')" :label-width="formLabelWidth">
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
									<router-link target="_blank" to="page2">{{$t('lang.SoftwareDeliveryDisclaimer')}}</router-link>
								</el-checkbox>

							</el-form-item>

						</div>

						<div class="right-box">
							<el-button type="primary" @click="submitForm('form')">{{$t('lang.Submit')}}</el-button>
						</div>

					</div>
				</el-form>

			</div>
		</div>
	</div>
	</div>
</template>
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
          jumpUrl: '',
          isRun: '',
          runUrl: '',
					ifCheckedCns: '',
					ifCheckedMzs: true,
					abstract: '',
					ifSelfStudy: false, //是否为自研
					ifHsowRealName: false, //true不匿名，false匿名
					developer: '',
            userDocName:'',//用户手册
            userDoc: '',
            downZipName:'',//下载包
            downZipDoc: '',
				},
          upUrl:window.SITE_CONFIG['tinymeURL'] + '/sys/upload/uploadForEvaluate/',
        langOptions:[
          {
            label:"中文",
            value:1
          },
          {
            label:"English",
            value:2
          },
        ],
        langvalue:1,
				softUrlTit: '',
        jumpUrlTit: '',
				joinVoUrl: '',
				imageUrl: '',
				getSoftUrl:'',
				getJumpUrl:'',
				firstDomains: {
					activityId: 0,
					awardLevel: 0,
					awardTime: "",
					id: 0,
					joinTime: "",
					rank: 0,
					status: 0,
          userId:0,
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
        userId: this.$userId,
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
      //中英文切换
      changeLangEvent(val){
        var _=this
        console.log("_.val",val)
        if (val == 2 ) {
          _.$i18n.locale = 'en-US';//关键语句
          console.log('en-US')
        }else {
          _.$i18n.locale = 'zh-CN';//关键语句
          console.log('zh-CN')
        }
        //搜索选项更新
        _.searchOptions= [{
          value: 1,
          label: this.$t('lang.searchTypesoftware')
        },
          {
            value: 2,
            label: this.$t('lang.territory')
          },
          {
            value: 3,
            label:  this.$t('lang.author')
          }
        ]

      },
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
				_this.$http.post( '/haoweb/web/soft/softCtyAllList')
					.then((response)=>{
            var newResponse = response.data.list
           /* _this.opensourceTypeOption = newResponse[0].children; //软件类型
            _this.applicationFieldOption = newResponse[3].children; //开发领域
            _this.softCategoryOption = newResponse[1].children; //收费方式
            _this.LanguageOption = newResponse[4].children; //变成语言
            _this.userInterfaceOption = newResponse[2].children; //学科领域
            _this.openTypeOption = newResponse[5].children; //开源类型*/


            let applicationFieldArrOne = newResponse.filter((item, index) => {
              // return item.label === '学科领域'
              return item.label === _this.$t('lang.academicarea')

            })
            _this.userInterfaceOption = applicationFieldArrOne[0].children

            let softCtyArrOne = newResponse.filter((item, index) => {
              // return item.label === '开发领域'
              return item.label === _this.$t('lang.Developmentarea')
            })
            _this.applicationFieldOption = softCtyArrOne[0].children

            let opensourceTypeArrOne =newResponse.filter((item, index) => {
              // return item.label === '开源类型'
              return item.label === _this.$t('lang.Opensourcetype')
            })
            _this.openTypeOption = opensourceTypeArrOne[0].children

            let chargingMethodArrOne =newResponse.filter((item, index) => {
              // return item.label === '收费方式'
              return item.label === _this.$t('lang.Chargemethod')
            })
            _this.softCategoryOption = chargingMethodArrOne[0].children

            let softTypeArrOne = newResponse.filter((item, index) => {
              // return item.label === '软件类型'
              return item.label === _this.$t('lang.softwaretype')
            })
            _this.opensourceTypeOption = softTypeArrOne[0].children

            let devLanguageArrOne = newResponse.filter((item, index) => {
              // return item.label === '编程语言'
              return item.label === _this.$t('lang.Programminglanguage')
            })
            _this.LanguageOption = devLanguageArrOne[0].children
          })
			},
			//获取操作平台表单下拉内容
			getoSystemOption: function() {
				var _this = this;
				var params = new URLSearchParams();
				params.append("dictId", 6);
				_this.$http.post( '/haoweb/api/dict/getDictDetailsByDictId', params)
					.then((response)=>{
            _this.operatingSystemOption = response.data.list
          })
			},
			//修改信息之前获取软件信息
			getSoftInfo: function() {

				var _this = this;
				var params = new URLSearchParams();
        console.log("this.userId------------",_this.userId)
				params.append("softId", this.$route.query.id);
				params.append("userId", _this.userId);
				this.$http.post( '/haoweb/web/user/getSaveSoftDetail', params)
					.then((response)=>{
					  console.log("*************",response)
            var softInfoObg = response.data.softInfo;
            var userListObg = response.data.userList;
            var softDocObg = response.data.docInfo;
            console.log("softInfoObg.operatingSystem",softInfoObg.operatingSystem)
            console.log("softInfoObg.operatingSystems",softInfoObg.operatingSystems)
            _this.softId = response.data.softInfo.id;
            _this.form.name = softInfoObg.softName;
            _this.form.developer = softInfoObg.developers;
            _this.form.softVersion = softInfoObg.softVersion;
            _this.form.opensourceType = softInfoObg.softTypes;
            _this.form.openType = softInfoObg.opensourceTypes;
            _this.form.softCategory = softInfoObg.chargingMethods;//1
            _this.form.Language = softInfoObg.programmingLanguages;
            _this.form.userInterface = softInfoObg.applicationFields;
            _this.form.applicationField = softInfoObg.categoryIds;
            _this.form.operatingSystem = softInfoObg.operatingSystems;
            _this.form.softUrl=_this.getSoftUrl = softInfoObg.softUrl;
            _this.form.jumpUrl=_this.getJumpUrl = softInfoObg.jumpUrl;
            _this.form.isRun = softInfoObg.isRun.toString();
            _this.form.runUrl = softInfoObg.runUrl;
            _this.form.abstract = softInfoObg.softIntroduce;
            _this.form.userDocName = softDocObg.userDocOriginalName;
            _this.form.userDoc = softDocObg.userDoc;
            _this.form.downZipName = softDocObg.softCompressedPackageOriginalName;
            _this.form.downZipDoc = softDocObg.softCompressedPackage;
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
						// _this.messageOpen('填写正确链接地址', 'warning')
            _this.messageOpen(_this.$t('lang.pleaseenter')+_this.$t('lang.correct')+_this.$t('lang.Codeaddress'), 'warning')
						return false

					}
					if(_this.getSoftUrl&&_this.form.softUrl==_this.getSoftUrl){

					}else{
							var params = new URLSearchParams();
					params.append("softUrl", _this.form.softUrl);
					_this.$http.post('/haoweb/web/soft/checkIsEqualsSoftUrl', params)
						.then((response)=>{
              if(response.data.code != 0) {
                _this.$alert(response.data.msg,   _this.$t('lang.Promptmessage'), {
                  // confirmButtonText: '确定',
                  confirmButtonText:_this.$t('lang.ok'),
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
        submitUserDoc() {
            this.$refs.userDocRef.submit();
        },
        downZipSuccess: function(response, file, fileList) {
            this.form.downZipDoc = response.filePath;
            this.form.downZipName = response.originalFileName;
            var codeStype;
            if(response.code == 0) {
                codeStype = 'success'

            } else {
                codeStype = 'warning'
            }
            this.messageOpen(response.msg, codeStype)
            this.fileList4 = []

        },
        downZipChange(file) {
            this.userDocCheck=file.name
        },
        submitDownZip() {
            this.$refs.downZipRef.submit();
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
          categoryIds: _this.form.applicationField,
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
          softTypes: _this.form.opensourceType,
          opensourceTypes: _this.form.openType,
					operatingSystem: "",
					operatingSystemList: _this.form.operatingSystem,
          programmingLanguages: _this.form.Language,
					programmingLanguage: "",
					softCategoryId: 0,
					softCategoryName: "",
					softId: _this.$route.query.id,
					softIntroduce: _this.form.abstract,
					softLicense: "",
					softLogo: "",
					softName: _this.form.name,
          chargingMethods: _this.form.softCategory,
					softUrl: _this.form.softUrl,
          jumpUrl: _this.form.jumpUrl,
          isRun: _this.form.isRun,
          runUrl: _this.form.runUrl,
					softVersion: _this.form.softVersion,
					updateTime: "",
					userId: this.userId,
					userInterface: "",
          applicationFields: _this.form.userInterface,
					userList: [],
          userDoc: this.form.userDoc,
          userDocOriginalName: this.form.userDocName,
          softCompressedPackage: this.form.downZipDoc,
          softCompressedPackageOriginalName: this.form.downZipName,

				}

				joinVo.isShowDeveloperName = this.form.ifHsowRealName == true ? 0 : 1;
				if(!joinVo.isShowDeveloperName) {
					joinVo.developers = ''

				}
				joinVo.isSelf = _this.form.ifSelfStudy == true ? 1 : 0;

				if(!_this.form.name) {
					// _this.messageOpen('请填写软件名称', 'warning')
          _this.messageOpen(_this.$t('lang.pleaseenter')+  _this.$t('lang.nameofsoftware'), 'warning')
					return false;
				}
				if(!_this.form.softVersion) {
					// _this.messageOpen('请输入软件版本', 'warning')
          _this.messageOpen(_this.$t('lang.pleaseenter')+  _this.$t('lang.Softwareversion'), 'warning')
					return false;
				}
				if(_this.form.softCategory.length == 0) {
					// _this.messageOpen('请选择收费方式', 'warning')
          _this.messageOpen(_this.$t('lang.pleasechoose')+  _this.$t('lang.Chargemethod'), 'warning')
					return false;
				}
				if(_this.form.userInterface.length == 0) {
					// _this.messageOpen('请选择学科领域', 'warning')
          _this.messageOpen(_this.$t('lang.pleasechoose')+  _this.$t('lang.academicarea'), 'warning')
					return false;
				}
				if(_this.form.Language.length == 0) {
					// _this.messageOpen('请选择编程语言', 'warning')
          _this.messageOpen(_this.$t('lang.pleasechoose')+  _this.$t('lang.Programminglanguage'), 'warning')
					return false;
				}
				if(_this.form.applicationField.length == 0) {
					// _this.messageOpen('请选择开发领域', 'warning')
          _this.messageOpen(_this.$t('lang.pleasechoose')+  _this.$t('lang.Developmentarea'), 'warning')
					return false;
				}
       /* if(!_this.form.openType||_this.form.openType.length == 0) {
          _this.messageOpen('请选择开源类型', 'warning')
          return false;
        }*/
        if(!_this.form.operatingSystem||_this.form.operatingSystem.length == 0) {
          // _this.messageOpen('请选择操作平台', 'warning')
          _this.messageOpen(_this.$t('lang.pleasechoose')+  _this.$t('lang.operatingsystem'), 'warning')
          return false;
        }
				if(_this.form.name.length > 50) {
					// _this.messageOpen('软件名称不能超过50字，请重新输入', 'warning')
          _this.messageOpen(_this.$t('lang.nameofsoftware')+  _this.$t('lang.exceedwords'), _this.$t('lang.pleaseenteragain'), 'warning')
					return false;
				}

				if(_this.form.opensourceType.length == 0) {
					// _this.messageOpen('请填写软件类别', 'warning')
          _this.messageOpen(_this.$t('lang.pleaseenter')+  _this.$t('lang.softwaretype'), 'warning')
					return false;
				}
				// if(!_this.form.softUrl) {
				// 	_this.messageOpen('请填写代码地址', 'warning')
				// 	return false;
				// }
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
						// _this.messageOpen('请填写参赛人姓名', 'warning')
            _this.messageOpen(_this.$t('lang.pleaseenter')+  _this.$t('lang.Participants')+  _this.$t('lang.name'), 'warning')
						return false;
					}
					if(!_this.firstDomains.userUnit) {
						// _this.messageOpen('请填写参赛人单位', 'warning')
            _this.messageOpen(_this.$t('lang.pleaseenter')+  _this.$t('lang.Participants')+  _this.$t('lang.Currentunit'), 'warning')
						return false;
					}

					if(!_this.firstDomains.userJob) {
						// _this.messageOpen('请填写参赛人工作', 'warning')
            _this.messageOpen(_this.$t('lang.pleaseenter')+  _this.$t('lang.Participants')+  _this.$t('lang.Currentunit'), 'warning')
						return false;
					}

					if(!_this.firstDomains.userPhone) {
						// _this.messageOpen('请填写参赛人手机', 'warning')
            _this.messageOpen(_this.$t('lang.pleaseenter')+  _this.$t('lang.Participants')+  _this.$t('lang.phone'), 'warning')
						return false;
					}
					var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;

					if(!phoneReg.test(this.firstDomains.userPhone)) {
						// this.messageOpen('请填写正确手机号码', 'warning')
            this.messageOpen(_this.$t('lang.pleaseenter')+  _this.$t('lang.correct')+  _this.$t('lang.phone'), 'warning')
						return false;

					}
				}
				if(!_this.form.abstract) {
					// _this.messageOpen('请填写作品摘要', 'warning')
          _this.messageOpen(_this.$t('lang.pleaseenter')+  _this.$t('lang.Worksummary'), 'warning')
					return false;
				}

				if(!_this.form.ifCheckedMzs) {
					// _this.messageOpen('科研开源软件创意大赛免责协议', 'warning')
          _this.messageOpen(_this.$t('lang.Disclaimeragreement'), 'warning')
					return false;

				}
        if(_this.form.isRun === '1' && !_this.form.runUrl) {
          // _this.messageOpen('请输入立即运行路径')
          _this.messageOpen(_this.$t('lang.pleaseenter')+ _this.$t('lang.Runpathimmediately'))
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
              userDoc: this.form.userDoc,
              userDocOriginalName: this.form.userDocName,
              softCompressedPackage: this.form.downZipDoc,
              softCompressedPackageOriginalName: this.form.downZipName,
						}
						joinVo.userList.push(this.firstDomains);
						if(this.secondDomains.length > 0) {
							for(var i = 0; i < this.secondDomains.length; i++) {
								var cur = this.secondDomains[i]
								if(!cur.userName) {
									// this.messageOpen('请填写参赛人姓名', 'warning')
                  this.messageOpen(_this.$t('lang.pleaseenter')+  _this.$t('lang.Participants')+  _this.$t('lang.name'), 'warning')
									return false;
								}
								joinVo.userList.push(cur);
							}
						}

						var _this = this;

						_this.axios.defaults.headers.common['token'] = _this.token;
						_this.$http.post('/haoweb/web/user/saveSoftInfoUpdate', joinVo)
							.then((response)=>{
                if(response.data.code == 0) {
                  _this.toPersonalInfo()
                } else {
                  _this.$alert(response.data.msg,  _this.$t('lang.Promptmessage'), {
                    confirmButtonText:_this.$t('lang.ok'),
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
		background: #fff;
	}

	.softModify-box {
    margin: 0 auto;
    padding: 20px 0 100px;
		width: 880px;
		background: #fff;
	}
  .softModify-box .el-cascader__tags{
    left: 15px;
  }

	.softModify h2 {
    margin: 30px 0 20px;
		width: 100%;
		line-height: 50px;
		font-size: 16px;
		color: #666;
		text-align: center;
		letter-spacing: 2px;
		border-bottom: 1px #dedede dashed;
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
  .softModify  .input-width input{
    width: 140px;
  }
  .softModify  .input-width .el-input{
    width: 150px;
  }
  .upload-demo {
    position: relative;
    width: 350px;
    display: inline-block;
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
    padding: 5px 5px 0 0 ;
		height: 35px;
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
  /*切换中英文*/
  .softModify .header-top .reposbox .changelang{
    float: right;
    width: 80px;
  }
  .softModify .header-top .reposbox .changelang .el-input__inner{
    border: none;
    background: none;
    color: #f4f4f4;
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
