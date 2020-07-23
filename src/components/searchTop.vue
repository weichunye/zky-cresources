<template>
  <div class="searchTop">
    <div class="header-top">
      <div class="reposbox">
        <p class="text">
          {{$t('lang.greeting')}}

        </p>

        <span v-if="langvalue==1"  class="changelang"  @click="()=>{changeLangEvent(2)}">
        English
        </span>
        <span v-else  class="changelang"  @click="()=>{changeLangEvent(1)}">
           中文
        </span>

        <div style="float: right" v-if="!userId">
          <a class="right-text" target="_blank" href="https://passport.escience.cn/regist.jsp">   {{$t('lang.registered')}} </a>
          <a class="right-text" @click="toLogin" :href="toLoginUrl">  {{$t('lang.login')}} &nbsp;&nbsp;&nbsp;|</a>
          {{userId}}
        </div>
        <div v-else="">
          <a class="right-text" @click="signOut" href="https://passport.escience.cn/logout?WebServerURL=http://www.scihub.cstcloud.cn">{{$t('lang.signout')}} </a>
          <p @click="toPersonalInfo" class="right-text">{{userInfo.trueName}},&nbsp;&nbsp;{{$t('lang.Personalcenter')}}&nbsp;&nbsp;&nbsp;|</p>
        </div>


      </div>
    </div>
    <div class="searchtop-box">
      <div class="con">
        <router-link to="/">

          <img v-if="langvalue==1" class="logo" src="../assets/img/search_logo.png" alt="logo" />
          <img v-if="langvalue==2" class="logo" src="../assets/img/search_logo_english.png" alt="logo" />
        </router-link>
        <div class="search-box">
          <el-select class="classify" v-model="searchArr.itemType" @change="searchTYpe" placeholder="">
            <el-option v-for="item in searchOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <div class="input">
            <el-input @keyup.enter.native="toSearchList" v-model.trim="searchArr.keyword" auto-complete="off"></el-input>
          </div>
          <!-- <router-link  :to="{path:'/searchList',query:searchArr}"> -->
          <button @click="toSearchList"><i class="el-icon-search"></i></button>
          <!-- </router-link> -->
        </div>
        <div @click="deliverySoft" class="btn">
          <span class="el-icon-circle-plus-outline"></span>
          <p> {{$t('lang.btnSoftware')}} </p>
        </div>
        <div class="hot-keyword">

          <span v-for="(item,index) in hotKeyWordList" :key="index" :class="index%2==0?'color-blur':''" @click="()=>{changeHotWord(item.keyword)}">{{item.keyword}}</span>
        </div>
        <!--   <button class="btn-submit">
             投递软件
           </button>-->
      </div>
      <div class="menu-box">
        <div class="classify-btn">
          <i class="el-icon-menu"></i>
          <p>{{$t('lang.categories')}}</p>
          <ul  class="classify-first">
            <li v-for="(item, index) in softTypeListLoc" :key="index">
              <router-link :to="{path:'/list',query:{categoryId:item.value,categoryName:item.label,type:1,ParentName:'首页'}}">
                <img src="../assets/icon/icon_classfiy.png" alt="">
                <span>{{item.label}}</span>
              </router-link>
              <div class="classify-second">
                <dl   v-for="(i, k) in item.children" :key="k"  :style="{'width': i.children.length>0?'49%':'auto','clear':i.children.length>0&&k%2==0?'left':'','border-width':i.children.length>0&&k%2!=0?'1px':'0px',}">
                  <p :class="{'p-name':i.children.length>0}"><router-link :to="{path:'/list',query:{categoryId:i.value,categoryName:i.label,type:2,ParentName:'首页'}}">{{i.label}}</router-link></p>
                  <p  v-for="(todo, j) in i.children" :key="j"><router-link :to="{path:'/list',query:{categoryId:todo.value,categoryName:todo.label,type:3,ParentName:'首页'}}">{{todo.label}}</router-link></p>
                </dl>
              </div>
            </li>
            <!--  <li>
                <img src="../assets/icon/icon_shoufei.png" alt="">
                <span>收费方式</span>
              </li>
              <li>
                <img src="../assets/icon/icon_lingyu.png" alt="">
                <span>科学领域</span>
              </li>
              <li>
                <img src="../assets/icon/icon_code.png" alt="">
                <span>开发领域</span>
              </li>
              <li>
                <img src="../assets/icon/icon_langage.png" alt="">
                <span>编程语言</span>
              </li>-->
          </ul>
        </div>
        <ul class="menu-list">
          <li  v-for="(item, index) in navList" :key="index" :class="menuId==item.value?'active':''">
            <router-link :to="{path:'/list',query:{categoryId:item.value,categoryName:item.label,type:2,ParentName:'首页'}}">
              {{item.label=="商业软件"?$t('lang.commercialsoftware'):item.label=="开源软件"?$t('lang.Opensourcesoftware'):item.label=="自研软件"?$t('lang.Selfdevelopedsoftware'):$t('lang.useimmediately')}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <el-dialog custom-class="examinedialog " :close-on-click-modal="false" :close-on-press-escape="false" :title=" $t('lang.btnSoftware')" :visible.sync="dialogDelivering">
      <el-form :model="form" ref="form" :rules="rules" :inline="true" class="demo-form-inline" @submit.native.prevent>
        <div class="box-big1">
          <el-form-item prop="name" :label=" $t('lang.nameofsoftware')" :label-width="formLabelWidth">
            <el-input v-model="form.name" :placeholder="$t('lang.pleaseenter')+$t('lang.nameofsoftware')" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <div class="box-small">
          <el-form-item prop="softVersion" :label=" $t('lang.Softwareversion')" :label-width="formLabelWidth">
            <el-input v-model="form.softVersion" :placeholder="$t('lang.pleaseenter')+$t('lang.Softwareversion')" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item prop="opensourceType" :label=" $t('lang.softwaretype')" :label-width="formLabelWidth">
            <!-- <el-select v-model="form.opensourceType" value-key="id" filterable multiple placeholder="请选择开源类型">
               <el-option v-for="item in opensourceTypeOption" :key="item.id" :label="item.ctyName" :value="item">
               </el-option>
             </el-select>-->
            <el-cascader :placeholder="$t('lang.pleaseenter')+$t('lang.softwaretype')"
              v-model="form.opensourceType"
              :options="opensourceTypeOption"
              :props="{ multiple: true, checkStrictly: true }"
              clearable></el-cascader>
          </el-form-item>

          <el-form-item prop="softCategory" :label=" $t('lang.Chargemethod')" :label-width="formLabelWidth">
            <!--    <el-select v-model="form.softCategory" value-key="id" filterable multiple placeholder="请选择软件类别">
                  <el-option v-for="item in softCategoryOption " :key="item.id" :label="item.ctyName" :value="item">
                  </el-option>
                </el-select>-->
            <el-cascader :placeholder="$t('lang.pleaseenter')+$t('lang.Chargemethod')"
              v-model="form.softCategory"
              :options="softCategoryOption"
              :props="{ multiple: true, checkStrictly: true }"
              clearable></el-cascader>

          </el-form-item>
          <el-form-item prop="Language" :label=" $t('lang.Programminglanguage')" :label-width="formLabelWidth">
            <!--<el-select v-model="form.Language" value-key="id" filterable multiple placeholder="请选择编程语言">
              <el-option v-for="item in LanguageOption " :key="item.id" :label="item.ctyName" :value="item">
              </el-option>
            </el-select>-->
            <el-cascader
              v-model="form.Language" :placeholder="$t('lang.pleaseenter')+$t('lang.Programminglanguage')"
              :options="LanguageOption"
              :props="{ multiple: true, checkStrictly: true }"
              clearable></el-cascader>
          </el-form-item>
        </div>
        <div class="box-small">
          <el-form-item prop="userInterface" :label=" $t('lang.academicarea')" :label-width="formLabelWidth">
            <!--<el-select v-model="form.userInterface" value-key="id" filterable multiple placeholder="请选择用户接口">
              <el-option v-for="item in userInterfaceOption " :key="item.id" :label="item.ctyName" :value="item">
              </el-option>
            </el-select>-->
            <el-cascader
              v-model="form.userInterface"  :placeholder="$t('lang.pleaseenter')+$t('lang.academicarea')"
              :options="userInterfaceOption"
              :props="{ multiple: true, checkStrictly: true }"
              clearable></el-cascader>
          </el-form-item>
          <el-form-item prop="applicationField" :label=" $t('lang.Developmentarea')" :label-width="formLabelWidth">
            <!--<el-select v-model="form.applicationField" value-key="id" filterable multiple placeholder="请选择应用领域">
              <el-option v-for="item in applicationFieldOption " :key="item.id" :label="item.ctyName" :value="item">
              </el-option>
            </el-select>-->
            <el-cascader :placeholder="$t('lang.pleaseenter')+$t('lang.Developmentarea')"
              v-model="form.applicationField"
              :options="applicationFieldOption"
              :props="{ multiple: true, checkStrictly: true }"
              clearable></el-cascader>
          </el-form-item>
          <el-form-item prop="openType" :label=" $t('lang.Opensourcetype')" :label-width="formLabelWidth">
            <!--<el-select v-model="form.applicationField" value-key="id" filterable multiple placeholder="请选择应用领域">
              <el-option v-for="item in applicationFieldOption " :key="item.id" :label="item.ctyName" :value="item">
              </el-option>
            </el-select>-->
            <el-cascader
              v-model="form.openType" :placeholder="$t('lang.pleaseenter')+$t('lang.Opensourcetype')"
              :options="openTypeOption"
              :props="{ multiple: true, checkStrictly: true }"
              clearable></el-cascader>
          </el-form-item>

        </div>
        <div class="box-big1">
          <el-form-item prop="operatingSystem" :label=" $t('lang.operatingsystem')" :label-width="formLabelWidth">
            <el-select v-model="form.operatingSystem" value-key="id" filterable multiple :placeholder="$t('lang.pleaseenter')+$t('lang.operatingsystem')" >
              <el-option v-for="item in operatingSystemOption " :key="item.id" :label="item.label" :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </div>

        <div class="box-big1">

          <el-form-item prop="softUrl" :label=" $t('lang.Codeaddress')" :label-width="formLabelWidth">
            <el-input v-model="form.softUrl" @blur='checkUrl' placeholder="github或cstos.cstcloud.cn的项目地址，推荐使用cstos.cstcloud.cn" auto-complete="off"></el-input>
            <p class="diatit">{{$t('lang.SaddresseswithEnglish')}}</p>
          </el-form-item>

        </div>

        <div class="box-big1">
          <el-form-item prop="jumpUrl" :label=" $t('lang.Jumpaddress')" :label-width="formLabelWidth">
            <el-input v-model="form.jumpUrl"  :placeholder="$t('lang.pleaseenter')+$t('lang.Jumpaddress')" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <div class="box-big1">
          <el-form-item prop="isRun" :label=" $t('lang.Whethertorunimmediately')" :label-width="formLabelWidth">
            <el-radio v-model="form.isRun" label= '0'>{{$t('lang.no')}}</el-radio>
            <el-radio v-model="form.isRun" label= '1'>{{$t('lang.yes')}}</el-radio>
          </el-form-item>
        </div>
        <div class="box-big1" >
          <el-form-item prop="runUrl" :label=" $t('lang.Runpathimmediately')" :label-width="formLabelWidth" v-if="this.form.isRun === '1'">
            <el-input v-model="form.runUrl" :placeholder="$t('lang.pleaseenter')+$t('lang.Runpathimmediately')"  auto-complete="off"></el-input>
          </el-form-item>
        </div>

        <div class="box-big1">
          <el-form-item v-if="!form.ifSelfStudy" :label=" $t('lang.Developer')" :label-width="formLabelWidth">
            <el-input v-model="form.developer" :placeholder="$t('lang.pleaseenter')+$t('lang.Developer')" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label=" " :label-width="formLabelWidth">
            <el-checkbox style="width: 100%;" v-model="form.ifSelfStudy">{{ $t('lang.ifselfdeveloped')}}</el-checkbox>
          </el-form-item>
        </div>

        <div v-if="form.ifSelfStudy">
          <h3 class="h3">{{$t('lang.Developer')}}</h3>
          <table class="singtext" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <th width="20">&nbsp;</th>
              <th width="100">{{$t('lang.name')}}</th>
              <th width="110">{{$t('lang.Currentunit')}}</th>
              <th width="110">{{$t('lang.Workinsoftware')}}</th>
              <th width="160">{{$t('lang.phone')}}</th>
              <th width="60">{{$t('lang.operating')}}</th>
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
            <tr v-for="(item, index) in secondDomains" :key="index">
              <td class="domainsnum"><span>*</span></td>
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
                <!--                <p class="textp">{{phoneValueTit}}</p>-->

              </td>
              <td>
                <!--                <div @click="delTr($event)" class="deltrbtn">删除</div>-->
                <div @click="delTr(index)"  class="deltrbtn">{{$t('lang.delete')}}</div>
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
        <el-form-item prop="abstract" :label=" $t('lang.Worksummary')"  :label-width="formLabelWidth">
          <div class="box-input">
            <tinymce-editor v-model="form.abstract" :disabled=false ref="editor"></tinymce-editor>
          </div>
        </el-form-item>

        <div class="bottom">
          <div class="left-box">
            <el-form-item label=" " :label-width="formLabelWidth">
              <el-checkbox v-model="ifCheckedMzs">
                <router-link target="_blank" to="page3">{{$t('lang.SoftwareDeliveryDisclaimer')}}</router-link>
              </el-checkbox>

            </el-form-item>

          </div>

          <div class="right">
            <el-button @click="closePop">{{$t('lang.Cancel')}}</el-button>
            <el-button type="primary" @click="submitForm('form')">{{$t('lang.ok')}}</el-button>
          </div>

        </div>
      </el-form>

    </el-dialog>

    <!--pop-->
    <!--pop-->
  </div>
</template>

<script>
  import TinymceEditor from '@/components/tinymce-editor'
  import baseUrl from "../../config";
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
        showLogin:false,
        softTypeList:[],//分类
        navList:[],//菜单分类
        userId: "",
        loginIfShow:false,
        dialogDelivering:false,
        baseUrl:window.SITE_CONFIG['apiURL'],
        searchArr: {
          keyword: '',
          itemType: 1,
          page: 1,
        },
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
        langvalue:"",
        softCategories:[],
        searchOptions: [{
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
        ],
        form: {
          domains: [],
          name: '',
          softVersion: '',
          opensourceType: [],
          applicationField: [],
          openType: [],
          softCategory: [],
          Language: [],
          userInterface: [],
          softUrl: '',
          jumpUrl: '',
          isRun: '0',
          runUrl: '',
          abstract: '',
          developer: '',
          operatingSystem: [],
          ifShowRealName: false,
          ifSelfStudy: false, //是否为自研
          ifHsowRealName: false
        },
     /*   rules: {

        },*/
        toLoginUrl: '',
        categoryOption: [],
        formLabelWidth: '200px',
        stepImgSrc: '',
        opensourceTypeOption: [],
        applicationFieldOption: [],
        openTypeOption: [],
        softCategoryOption: [],
        LanguageOption: [],
        userInterfaceOption: [],
        operatingSystemOption: [],
        ifCheckedMzs: false,
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
        menuId:1,
        hotKeyWordList:[]
      }
    },

    computed: {
      rules:function () {
       return (
         {
           name: [{
             required: true,
             /*message: `请填写软件名称`,*/
             message: this.$t('lang.pleaseenter')+this.$t('lang.nameofsoftware'),
             trigger: 'blur'
           }],
           developer: [{
             required: true,
             /* message: '请填写开发人员',*/
             message:  this.$t('lang.pleaseenter')+this.$t('lang.Developer'),
             trigger: 'blur'
           }],
           softVersion: [{
             required: true,
             /* message: '请填写版本号',*/
             message:  this.$t('lang.pleaseenter')+this.$t('lang.Softwareversion'),
             trigger: 'blur'
           }],
           opensourceType: [{
             required: true,
             /* message: '请填写软件类型',*/
             message:  this.$t('lang.pleaseenter')+this.$t('lang.softwaretype'),
             trigger: 'blur'
           }],
           applicationField: [{
             required: true,
             /* message: '请填写开发领域',*/
             message:  this.$t('lang.pleaseenter')+this.$t('lang.Developmentarea'),
             trigger: 'blur'
           }],
           // openType: [{
           //   required: true,
           //   message: '请填写开源类型',
           //   trigger: 'blur'
           // }],
           softCategory: [{
             required: true,
             /* message: '请选择收费方式',*/
             message:  this.$t('lang.pleaseenter')+this.$t('lang.Chargemethod'),
             trigger: 'blur'
           }],
           Language: [{
             required: true,
             /* message: '请选择开发语言',*/
             message:  this.$t('lang.pleaseenter')+this.$t('lang.Chargemethod'),
             trigger: 'blur'
           }],
           userInterface: [{
             required: true,
             /* message: '请填写学科领域',*/
             message:  this.$t('lang.pleaseenter')+this.$t('lang.academicarea'),
             trigger: 'blur'
           }],
           // softUrl: [{
           //   required: true,
           //   message: '请填写代码地址',
           //   trigger: 'blur'
           // }],
           abstract: [{
             required: true,
             /*  message: '请填写作品摘要',*/
             message:   this.$t('lang.pleaseenter')+ this.$t('lang.Worksummary'),
             trigger: 'blur'
           }],
           operatingSystem: [{
             required: true,
             /*message: '请选择操作平台',*/
             message:   this.$t('lang.pleaseenter')+ this.$t('lang.operatingsystem'),
             trigger: 'blur'
           }],
         }
       )

      },
        softTypeListLoc:function(){
            console.log(" _this.langvalue++++++++++++++++++++++++", this.langvalue)
            this.$nextTick(()=>{
                $(".classify-first li").each((index,item)=>{
                    $(item).hover(()=>{
                        $('.classify-second').eq(index).show()
                        console.log(" $('.classify-second')", $('.classify-second').height())
                    },()=>{
                        $('.classify-second').hide()
                    })
                })
            })
          return  JSON.parse(localStorage.getItem("softTypeListE"))?this.langvalue==2?JSON.parse(localStorage.getItem("softTypeListE")):JSON.parse(localStorage.getItem("softTypeListZ")):this.softTypeList

        }

    },
    created(){
      var _this=this;
      $.getScript("http://passport.escience.cn/js/isLogin.do", function(){
        console.log(" data.result", data.result)
        if(data.result){
          _this.userId=window.SITE_CONFIG['userId']
        }else{
          _this.userId=null
        }
      })
    },
    mounted() {
      this.toLoginUrl = window.SITE_CONFIG['apiURL'] + '/haoweb/web/auth/login'
      this.menuId=this.$route.query.categoryId
      this.searchArr.itemType=this.$route.query.itemType?this.$route.query.itemType:1
        console.log("localStorage.getItem(\"isEnglish\")666666666",localStorage.getItem("isEnglish"))
        this.langvalue=localStorage.getItem("isEnglish")?localStorage.getItem("isEnglish"):1
        this.changeLangEvent( this.langvalue)
      //获取软件分类
      this.searchArr.keyword=this.$route.query.keyword?this.$route.query.keyword:''
      this.$http.post('/haoweb/web/soft/softCtyAllList',"")
        .then(({data:res })=>{
            console.log("汉语",res.list)
            localStorage.setItem("softTypeListZ",JSON.stringify(res.list) )
          this.softTypeList=res.list
          this.navList=this.softTypeList[0].children

        })
        //英文
        this.$http.post('/haoweb/web/soft/softCtyAllEnglishList',"")
            .then(({data:res })=>{
                console.log("英文",res.list)
                localStorage.setItem("softTypeListE",JSON.stringify(res.list) )

            })
      this.getListOption()
      this.getoSystemOption()
      this.getoHotKeyWords()
    },
    watch: {
      '$route'(to, from) {
        this.menuId=this.$route.query.categoryId
        this.searchArr.itemType=this.$route.query.itemType
      }
    },
    methods: {
      toSearchList() {
        if(this.searchArr.itemType == '软件'||this.searchArr.itemType == 'searchTypesoftware') {
          this.searchArr.itemType = 1
        }
        if(this.searchArr.itemType == '领域'||this.searchArr.itemType == 'territory') {
          this.searchArr.itemType = 2
        }
        if(this.searchArr.itemType == '作者'||this.searchArr.itemType == 'author') {
          this.searchArr.itemType = 3
        }
        this.$router.push({
          path: '/searchList',
          query: this.searchArr
        });
        this.$emit('serachList', true)
      },
      //中英文切换
      changeLangEvent(val){
        var _this=this
        console.log("_.val",val)
        this.langvalue=val
          localStorage.setItem("isEnglish",val)
        console.log(" _this.langvalue", this.langvalue)
        if (val == 2 ) {
            _this.$i18n.locale = 'en-US';//关键语句
            _this.softTypeList=JSON.parse(localStorage.getItem("softTypeListZ"))
        }else {
            _this.$i18n.locale = 'zh-CN';//关键语句
            _this.softTypeList=JSON.parse(localStorage.getItem("softTypeListE"))
        }
        this.$emit("getLangvalue",val)
        this.$emit("getBannerList",val)
        //搜索选项更新
          _this.searchOptions= [{
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
      /*新增*/
      addDomain(){
        this.secondDomains.splice(this.secondDomains.length, 1, {
          "activityId": 0,
          "awardLevel": 0,
          "awardTime": "",
          "id": 0,
          "joinTime": "",
          "rank": 0,
          "status": 0,
          "userId": this.userId,
          "userJob": "",
          "userName": "",
          "userPhone": "",
          "userUnit": ""
        });
      },
      delTr(index){
        this.secondDomains.splice(index, 1);
      },
      /*新增*/
      searchTYpe(){
        if(this.searchArr.itemType == '软件'||this.searchArr.itemType == 'searchTypesoftware') {
          this.searchArr.itemType = 1
        }
        if(this.searchArr.itemType == '领域'||this.searchArr.itemType == 'territory') {
          this.searchArr.itemType = 2
        }
        if(this.searchArr.itemType == '作者'||this.searchArr.itemType == 'author') {
          this.searchArr.itemType = 3
        }
        this.getoHotKeyWords()
      },
      toPersonalInfo: function() {
        var _this = this
        _this.$router.push({
          path: '/personalInfo'
        });
      },
      signOut: function() {
        sessionStorage.clear()
        localStorage.clear()
      },
      //投递软件
      deliverySoft: function() {
        var _this = this;
        if(!this.userId) {
          _this.$confirm(_this.$t('lang.pleasesignin'), _this.$t('lang.Promptmessage'), {
            confirmButtonText: _this.$t('lang.ok'),
            cancelButtonText: _this.$t('lang.Cancel'),
            type: 'warning'
          }).then(() => {
            var newUrl =window.SITE_CONFIG['apiURL'] + '/haoweb/web/auth/login'
            window.open(newUrl)

          }).catch(() => {
          });
        } else {
          _this.dialogDelivering = true;
        }
      },
      //验证git地址是否存在
      checkUrl: function() {
        var _this = this;
        var regexp = /((http|ftp|https|file):\/\/([\w\-]+\.)+[\w\-]+(\/[\w\u4e00-\u9fa5\-\.\/?\@\%\!\&=\+\~\:\#\;\,]*)?)/ig;
        if(_this.form.softUrl) {
          var thisurl = _this.form.softUrl.match(regexp);
          if(!thisurl) {
            /*'填写正确链接地址'*/
            _this.messageOpen( _this.$t('lang.pleaseenter')+  _this.$t('lang.correct')+  _this.$t('lang.Codeaddress'), 'warning')
            return false
          }
          var params = new URLSearchParams();
          params.append("softUrl", _this.form.softUrl);
          _this.$http.post( '/haoweb/web/soft/checkIsEqualsSoftUrl', params)
            .then(()=>{
              if(response.data.code != 0) {
                _this.$alert(response.data.msg,  _this.$t('lang.Promptmessage'), {
                  confirmButtonText:  _this.$t('lang.ok'),
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
          openType: "",
          categoryIds: this.form.applicationField,
          opensourceTypes: this.form.openType,
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
          softTypes: this.form.opensourceType,
          operatingSystemList: this.form.operatingSystem,
          operatingSystem: "",
          programmingLanguage: "",
          programmingLanguages: this.form.Language,
          softCategoryId: '',
          softCategoryName: "",
          softId: "",
          softIntroduce: this.form.abstract,
          softLicense: "",
          softLogo: "",
          softName: this.form.name,
          chargingMethods: this.form.softCategory,
          softUrl: this.form.softUrl,
          jumpUrl: this.form.jumpUrl,
          isRun: this.form.isRun,
          runUrl: this.form.runUrl,
          softVersion: this.form.softVersion,
          updateTime: "",
          userInterface: "",
          isMatchSoft: 0,
          applicationFields: this.form.userInterface,
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
            /*_this.messageOpen('请填写开发人员姓名', 'warning')*/
            _this.messageOpen(_this.$t('lang.pleaseenter')+_this.$t('lang.DevelopernoSpace')+_this.$t('lang.name'), 'warning')
            return false;
          }
          if(!_this.firstDomains.userUnit) {
         /*   _this.messageOpen('请填写开发人员单位', 'warning')*/
            _this.messageOpen(_this.$t('lang.pleaseenter')+_this.$t('lang.DevelopernoSpace')+_this.$t('lang.Currentunit'), 'warning')
            return false;
          }
          if(!_this.firstDomains.userJob) {
           /* _this.messageOpen('请填写开发人员工作', 'warning')*/
            _this.messageOpen(_this.$t('lang.pleaseenter')+_this.$t('lang.DevelopernoSpace')+_this.$t('lang.Workinsoftware'), 'warning')
            return false;
          }
          if(!_this.firstDomains.userPhone) {
/*            _this.messageOpen('请填写开发人员手机', 'warning')*/
            _this.messageOpen(_this.$t('lang.pleaseenter')+_this.$t('lang.DevelopernoSpace')+_this.$t('lang.phone'), 'warning')
            return false;
          }
          var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
          if(!phoneReg.test(this.firstDomains.userPhone)) {
          /*  this.messageOpen('请填写正确手机号码', 'warning')*/
            _this.messageOpen(_this.$t('lang.pleaseenter')+_this.$t('lang.correct')+_this.$t('lang.name'), 'warning')
            return false;
          }
        }
        if(!_this.form.abstract) {
      /*    _this.messageOpen('请填写作品摘要')*/
          _this.messageOpen(_this.$t('lang.pleaseenter')+_this.$t('lang.Worksummary'), 'warning')
          return false;
        }
        if(!_this.ifCheckedMzs) {
         /* _this.messageOpen('请阅读软件投递免责协议')*/
          _this.messageOpen(_this.$t('lang.readtheAgreement'), 'warning')
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
              /*this.messageOpen('请填写开发人员姓名', 'warning')*/
              _this.messageOpen(_this.$t('lang.pleaseenter')+_this.$t('lang.DevelopernoSpace')+_this.$t('lang.name'), 'warning')
              return false;
            }
            sofoVo.userList.push(cur);
          }
        }
        if(this.form.isRun === '1' && !this.form.runUrl) {
         /* this.messageOpen('请输入立即运行路径')*/
          _this.messageOpen(_this.$t('lang.pleaseenter')+_this.$t('lang.Runpathimmediately'))
          return false;
        }
        _this.$refs[formName].validate((valid) => {
          if(valid) {
            var _this = this;
            /* this.$http.defaults.headers.common['token'] = window.SITE_CONFIG['token'] || ''*/
            _this.$http.post( '/haoweb/web/user/saveSoftInfo', sofoVo).then((response) => {
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
                  this.$confirm(_this.$t('lang.tosoftwaredetails'), _this.$t('lang.Promptmessage'), {
                    confirmButtonText:  _this.$t('lang.ok'),
                    cancelButtonText:  _this.$t('lang.Cancel'),
                    type: 'warning'
                  }).then(() => {
                    _this.toPersonalInfo()
                  })
                }
              } else {
                _this.$alert(response.data.msg, _this.$t('lang.Promptmessage'), {
                  confirmButtonText: _this.$t('lang.ok'),
                });
              }


            })

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      toLogin: function() {
        localStorage.setItem("ifLogin",true)
      },
      //获取操作平台表单下拉内容
      getoSystemOption: function() {
        var _this = this;
        var params = new URLSearchParams();
        params.append("dictId", 6);
        this.$http.post( '/haoweb/api/dict/getDictDetailsByDictId', params)
          .then((response)=>{
            _this.operatingSystemOption = response.data.list
          })
      },
      //获取热搜词列表
      getoHotKeyWords: function() {
        var _this = this;
        var params = new URLSearchParams();
        params.append("itemType", this.searchArr.itemType);
        params.append("limit", 5);
        params.append("page", 1);
        this.$http.post( '/haoweb/web/soft/selectHotSearchList', params)
          .then((response)=>{
            this.hotKeyWordList=response.data.list.records;
          })
      },
      changeHotWord:function(HotkeyWord){
        this.searchArr.keyword=HotkeyWord
        this.toSearchList()

      },
      currentSel: function(selVal) {
        if(selVal == '软件'||selVal =='searchTypesoftware') {
          this.searchOptions.value = 1
        }
        if(selVal == '领域'||selVal =='territory') {
          this.searchOptions.value = 2
        }
        if(selVal == '作者'||selVal =='author') {
          this.searchOptions.value = 3
        }

      },
      //获取报名表单下拉内容
      getListOption: function() {
        var _this = this;
        this.$http.post( '/haoweb/web/soft/softCtyAllList')
          .then((response)=>{
            var newResponse = response.data.list
            /*   _this.opensourceTypeOption = newResponse[0].children; //软件类型
               _this.applicationFieldOption = newResponse[3].children; //开发领域
               _this.softCategoryOption = newResponse[1].children; //收费方式
               _this.LanguageOption = newResponse[4].children; //变成语言
               _this.userInterfaceOption = newResponse[2].children; //用户接口
               _this.openTypeOption = newResponse[5].children; //开源类型*/
            let applicationFieldArrOne = newResponse.filter((item, index) => {
              return item.label === '学科领域'
            })
            _this.userInterfaceOption = applicationFieldArrOne[0].children

            let softCtyArrOne = newResponse.filter((item, index) => {
              return item.label === '开发领域'
            })
            _this.applicationFieldOption = softCtyArrOne[0].children

            let opensourceTypeArrOne =newResponse.filter((item, index) => {
              return item.label === '开源类型'
            })
            _this.openTypeOption = opensourceTypeArrOne[0].children

            let chargingMethodArrOne =newResponse.filter((item, index) => {
              return item.label === '收费方式'
            })
            _this.softCategoryOption = chargingMethodArrOne[0].children

            let softTypeArrOne = newResponse.filter((item, index) => {
              return item.label === '软件类型'
            })
            _this.opensourceTypeOption = softTypeArrOne[0].children

            let devLanguageArrOne = newResponse.filter((item, index) => {
              return item.label === '编程语言'
            })
            _this.LanguageOption = devLanguageArrOne[0].children
          })
      },
      closePop: function() {
        //向父级传值
        this.dialogDelivering = false;
        /*	this.popArgument = false;
          this.$emit('listenToChild', this.popArgument)*/
      },
    }
  }
</script>
<style>
  .searchTop {
    width: 100%;
    height: 209px;
    background: #fff;
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
    width: 440px;
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
    width: 100%;
    height: 110px;
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
    padding: 10px 10px ;
    height: 80px;
    width: auto;
  }
  .searchTop .searchtop-box .con .hot-keyword{
    margin: 10px 0 0 400px;
    width:580px ;
    text-align: center;
  }
  .searchTop .searchtop-box .con .hot-keyword span{
    margin: 0 8px;
    color: #999;
    font-size: 12px;
    line-height: 30px;
    cursor: pointer;
  }
  .searchTop .searchtop-box .con .hot-keyword span:hover{
    color: #ea8604;
  }
  .searchTop .searchtop-box .con .search-box {
    overflow: hidden;
    float: left;
    margin: 30px 0 0 140px;
    width: 580px;
    height: 36px;
    border-radius: 5px;
    border: 1px solid #3483ff;
  }

  .searchTop .searchtop-box .con .search-box .classify {
    float: left;
    width: 100px;
    height: 36px;
    border:none;
  }
  .searchTop .searchtop-box .con .search-box .classify .el-input__inner {
    width: 120px;
    height: 36px;
    line-height: 36px;
    border: none;
  }
  .searchTop .searchtop-box .con .search-box .input {
    float: left;
    margin-left: 20px;
    width: 399px;
    height: 36px;
    background: #fff;
    border: none;
    border-left: 1px solid #999;
  }
  .searchTop .searchtop-box .con .search-box .input .el-input__inner {
    width: 340px;
    height: 36px;
    line-height: 36px;
    border: none;
  }
  .searchTop .searchtop-box .con .search-box button {
    float: left;
    width: 60px;
    height: 36px;
    background: #3285ff;
  }
  .searchTop .searchtop-box .con .search-box button i{
    font-size: 20px;
    color: #fff;
  }
  .searchTop .searchtop-box .btn {
    overflow: hidden;
    display: block;
    float: right;
    margin-top: 25px;
    padding: 0 15px 0 5px;
    height: 40px;
    font-size: 14px;
    color: #fff;
    letter-spacing: 1px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    background: #ec9d2f;
    border-radius: 5px;
  }
  .searchTop .searchtop-box .btn:hover{
    background: #e28504;
  }
  .searchTop .searchtop-box .btn span{
    float: left;
    display: block;
    margin: 10px 5px 0 15px;
    font-size: 20px;
    color: #fff;
  }
  .searchTop .searchtop-box .btn p{
    float: left;
    color: #fff;
  }
  .searchTop .searchtop-box .con .btn-submit{
    float: right;
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
    background:#00ff00 ;
  }
  .searchTop .header-top {
    width: 100%;
    height: 40px;
  }
  .searchTop .changelang {
    float: right;
    width: 80px;
    cursor: pointer;
  }
  .searchTop .changelang .el-input__inner{
    border: none;
    color: #3285ff;

  }
  .searchTop .changelang  .el-select .el-input .el-select__caret{
    color: #3285ff;
  }
  .searchTop  .menu-box{
    margin: 20px auto 10px;
    width: 1200px;
  }

  .searchTop .menu-box .classify-btn{
    position: relative;
    float: left;
    width: 220px;
    height: 48px;
    line-height: 48px;
    border-radius: 6px 6px 0 0;
    background: #3285ff;
    z-index: 10;
  }
  .searchTop .menu-box .classify-btn:hover .classify-first{
    display: block;
  }
  .searchTop  .menu-box .classify-first{
    display: none;
    position: absolute;
    top: 48px;
    width: 220px;
    height: 400px;
    background:rgba(0,0,0,0.3);
  }
  .searchTop  .menu-box .classify-first li{
    position: relative;
    display: block;
    height: 50px;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    line-height: 50px;
    cursor: pointer;
  }
  .searchTop  .menu-box .classify-first li:hover{
    background:rgba(0,0,0,0.4);

  }
  .searchTop  .menu-box .classify-first li:hover span{
    color: #3285ff;
  }
/*  .searchTop  .menu-box .classify-first li:hover .classify-second{
    display: block;

  }*/
  .searchTop  .menu-box .classify-first li .classify-second{
    overflow: hidden;
    display: none;
    position: absolute;
    left:220px;
    top: 0;
    padding: 15px;
    width: 720px;
    background: #fff;
    background:rgba(51,51,51,0.7);
    clear: both;
  }

  .searchTop  .menu-box .classify-first li .classify-second dl{
    padding-left: 2%;
    float: left;
    overflow: hidden;
    line-height: 30px;
    border-left: 0px solid #dedede;
    box-sizing: border-box;
  }
  .searchTop  .menu-box .classify-first li .classify-second dl dt{
    float: left;
    margin: 8px 0;
    padding-right: 10px;
    font-size: 14px;
    line-height: 14px;
    font-weight: normal;
    color: #2cfcfd;
    border-right: 1px solid #2cfcfd;
  }
  .searchTop  .menu-box .classify-first li .classify-second dl dd{
    float: left;
    margin-left: 10px;
  }
  .searchTop  .menu-box .classify-first li .classify-second dl dd span{
    margin-left: 5px;
    font-size: 14px;
    font-weight: normal;
    color: #fff;
  }

  .searchTop  .menu-box .classify-first li img{
    float: left;
    margin: 15px 20px 0 15px;
    width: 18px;
  }
  .searchTop  .menu-box .classify-first li span{
    float: left;
    color: #fff;
  }
  .searchTop  .menu-box .classify-first li p{
    display: inline-block;
    overflow: hidden;
    float: left;
    margin: 5px;
    padding: 4px 12px;
    line-height: 20px;
    border-radius: 24px;
    font-size: 12px;
    text-indent: 0;
    color: #4c4c4c;
    background: #f5f5f5;
  }
  .searchTop  .menu-box .classify-first li p a{
    font-size: 12px;
  }
  .searchTop  .menu-box .classify-first li p:hover{
    color: #3285ff;
    background: #d6e7ff;
  }
  .searchTop  .menu-box .classify-first li .p-name{
    display: block;
    width: 100%;
    background: none;
  }
  .searchTop  .menu-box .classify-first li .p-name:hover{
    color: #d6e7ff;
    background: none;
  }
  .searchTop  .menu-box .classify-first li .p-name a{
    color: #fff;

  }
  .searchTop .menu-box .classify-btn p{
    float: left;
    text-indent: 30px;
    font-size: 16px;
    color: #fff;
  }
  .searchTop .menu-box .classify-btn i{
    float: left;
    text-indent: 30px;
    line-height: 48px;
    font-size: 18px;
    color: #fff;
  }
  .searchTop .menu-box .menu-list{
    float: left;
    margin-left: 50px;
    overflow: hidden;
  }
  .searchTop .menu-box .menu-list li{
    float: left;
    padding: 0 35px;
    font-size: 16px;
    color: #666;
    line-height: 40px;
  }
  .searchTop .menu-box .menu-list .active{
    font-weight: bold;
    color: #226ad4;
  }
  .searchTop .header-top .reposbox {
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    width: 1200px;
    height:40px;
    font-size: 14px;
    line-height: 40px;
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
    color: #333;
  }

  .searchTop .header-top .reposbox .right-text {
    float: right;
    margin-right: 10px;
    font-size: 14px;
    color: #333333;
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
