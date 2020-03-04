<template>
  <div class="activityGame">
  	<!--banner-->
  	<div class="banner-top">
  	
  		<div class="reposbox">
  			<router-link  to="/"><div class="logo">
  		    
  		</div></router-link>
  				
  			<div class="session-num">
  			    {{activityInfo.periodNumber}}
  			</div>
  			<div v-if="activityInfo.status==1" class="game-state-nostart">
  			    
  			</div>
  				<div v-if="activityInfo.status==2" class="game-state-start">
  			    
  			</div>
  				<div v-if="activityInfo.status==3" class="game-state-end">
  			    
  			</div>
  		    <div class="game-state">
  		<!--    	2019年5月1日正式开启报名-->
  		    	  {{activityInfo.statusDescribe}}
  		        
  		    </div>
  		    <div class="game-time">
  		    {{activityInfo.matchStartDate}}	&nbsp;&nbsp;&nbsp;至&nbsp;&nbsp;&nbsp; {{activityInfo.matchEndDate}}
  		        
  		    </div>
  		    <div v-if="activityInfo.status==2" @click="signUpActity" class="sign-up-btn">
  		</div>
  		</div>
  	</div>
  	<!--//banner-->
  	<!--con-W1200-->
  	<div class="con-W1200">
  		<!--1-->
  	  <div class="title-top title-top1">
  		<span class="span1">1</span>
  		<span class="span2">活动目的</span>
  	</div> 
  	<div class="objective">
  	    <p>     {{activityInfo.purpose}}</p>
  	</div>
  		<!--1-->
  		<div v-if="activityInfo.status==3">
  		<!--榜单-->
  		  <div class="title-top title-top1">
  		<span class="span1">2</span>
  		<span class="span2">创意赛榜单</span>
  	</div> 
  		<div class="bd-list">
  			<div class="linebg">
  			    
  			</div>
  			<dl class="listdl">
  				<dt><img src="http://39.105.190.39:8080/rossc/upload/20190418/023bff7f9a7742febb084f558bf1f7f3.jpg"/>
  				<div class="prizebg prizebg2">
  				    
  				</div>
  				</dt>
  				<dd>{{theSecond.name}}</dd>
  			</dl>
  			<dl class="listdl">
  				<dt><img src="http://39.105.190.39:8080/rossc/upload/20190418/023bff7f9a7742febb084f558bf1f7f3.jpg"/>
  				<div class="prizebg prizebg1">
  				    
  				</div>
  				</dt>
  				<dd>{{theFirst.name}}</dd>
  			</dl>
  			<dl class="listdl">
  				<dt><img src="http://39.105.190.39:8080/rossc/upload/20190418/023bff7f9a7742febb084f558bf1f7f3.jpg"/>
  				<div class="prizebg prizebg3">
  				    
  				</div>
  				</dt>
  				<dd>{{theThird.name}}</dd>
  			</dl>
  			<div class="alllist">
  				<h3>榜单</h3>
  		
  				
  				<div class="alllist-con">
	<ul id="ul1" v-for="item in activityData.activityUserList">		 
	<li>{{item.userName}}</li>

	
	</ul>
	<ul id="ul2">
	</ul>

  				
  				
  					</div>
  			    
  			</div>
  		    
  		</div>
  		<!--//榜单-->
  		<!--精彩瞬间-->
  		 <div class="title-top title-top1">
  		<span class="span1">3</span>
  		<span class="span2">精彩瞬间</span>
  	</div> 
  
  		<ul class="wonderfultime">
  			<!-- <li  v-for="item in activityData.activityVideoList">
  				<video width="280" height="200" controls>
  <source :src=" item.videoUrl" type="video/mp4">
您的浏览器不支持Video标签。
</video>
  			</li> -->
			<li><img src="http://39.105.190.39:8080/rossc/upload/20190418/023bff7f9a7742febb084f558bf1f7f3.jpg"></li>
			<li><img src="http://39.105.190.39:8080/rossc/upload/20190418/023bff7f9a7742febb084f558bf1f7f3.jpg"></li>
			<li><img src="http://39.105.190.39:8080/rossc/upload/20190418/023bff7f9a7742febb084f558bf1f7f3.jpg"></li>
			<li><img src="http://39.105.190.39:8080/rossc/upload/20190418/023bff7f9a7742febb084f558bf1f7f3.jpg"></li>
  				
  		</ul>
  		
  		<!--//精彩瞬间-->
  		<!--举办单位-->
  		<div class="hostunit">
  		    <div class="title-top title-top1">
  		<span class="span1">4</span>
  		<span class="span2">举办单位</span>
  	</div> 
  	
  	<el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in activityData.activityUnitList">
     <img :src="item.unitLogo"/>
    </el-carousel-item>
  </el-carousel>
  	
  		</div>
  		
  	
  		
  		<!--//举办单位-->
  		</div>
  		<div v-else="">	<!--2-->
  	  <div class="title-top title-top2">
  		<span class="span1">2</span>
  		<span class="span2">日程安排和比赛流程</span>
  	</div> 
  	<img  class="stepimg" :src="stepImgSrc" alt="日程安排和比赛流程"/>
  		<!--2-->
  		<!--3-->
  		 <div class="title-top title-top1">
  		<span class="span1">3</span>
  		<span class="span2">参赛方式</span>
  	</div> 
  	<div class="entry-mode">
  	{{activityInfo.matchWay}}
  	    
  	</div>
  	<!--3-->
  	<!--4-->
  	 <div class="title-top title-top1">
  		<span class="span1">4</span>
  		<span class="span2">作品评审</span>
  	</div> 
  	<div class="review-top">
  	    
  	</div>
  	<div v-html="activityInfo.worksReview" class="review-center">
  	</div>
  			<div class="review-bottom">
  	</div>
  		<!--4-->
  		</div>
  	</div>
  		<!--con-//W1200-->
  		<div class="bottom-box">
  			<div class="bottom-box-top">
  			</div>
  			<div class="prize-box">
  				<ul>
  					<li class="li1">{{activityInfo.firstAward}}</li>
  						<li class="li2">{{activityInfo.secondAward}}</li>
  							<li class="li3">{{activityInfo.thirdAward}}</li>
  							<li class="li4">{{activityInfo.potentialAward}}</li>
  				</ul>
  			  <p class="prize4">
  				所有报名参与大赛未获得奖项的有效选手，均将获得参赛纪念证书，软件可以在“中国科技云”科研开源软件社区发布。
  			</p>
  			</div>
  			 <p class="copy">
  				本次活动最终解释权归中科院所有
  			</p>
  		</div>
  		<!--报名-->
  		
<el-dialog  custom-class="signdialog " :close-on-click-modal="false" :close-on-press-escape="false"  title="报名信息" :visible.sync="dialogFormVisible">
  <el-form :model="form" ref="form"   :inline="true" class="demo-form-inline" @submit.native.prevent>
  	<div class="box-big">
  	     <el-form-item label="软件名称" :label-width="formLabelWidth">
  	     	<em class="addti">*</em>
      <el-input v-model="form.name"  placeholder="请输入内容" auto-complete="off"></el-input>
    </el-form-item>
  	</div>
  	<div class="box-big">
  	    <el-form-item label="软件版本" :label-width="formLabelWidth">
  	    	 	<em class="addti">*</em>
      <el-input v-model="form.softVersion" auto-complete="off"></el-input>
    </el-form-item>
 
    
      <el-form-item   label="开源类型" :label-width="formLabelWidth">
     	<em class="addti">*</em>
      <el-select v-model="form.opensourceType" filterable multiple  placeholder="请选择">
    <el-option
      v-for="item in optinOpensourceType "
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    </el-form-item>
    	</div>
   	<div class="box-big">
    <el-form-item label="软件类别" :label-width="formLabelWidth">
    	 	<em class="addti">*</em>
    	  <el-select v-model="form.softCategory" filterable  multiple placeholder="请选择">
    <el-option
      v-for="item in form.categoryOption "
      :key="item.id"
      :label="item.ctyName"
      :value="item.id">
    </el-option>
  </el-select>
    	
    </el-form-item>
    </div>
    	<div class="box-big">
    <el-form-item label="编程语言" :label-width="formLabelWidth">
    	 	<em class="addti">*</em>
    	 	 <el-select v-model="form.Language" filterable multiple  placeholder="请选择">
    <el-option
      v-for="item in optinOpensourceType "
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    </el-form-item>
  </div>
  	 	<div class="box-big">
  	 		 <el-form-item label="用户接口" :label-width="formLabelWidth">
  	 		 	 	<em class="addti">*</em>
   <el-select v-model="form.userInterface" filterable multiple  placeholder="请选择">
    <el-option
      v-for="item in optinOpensourceType "
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    </el-form-item>
     <el-form-item label="应用领域" :label-width="formLabelWidth">
     	 	<em class="addti">*</em>
     	 	 <el-select v-model="form.applicationField" filterable multiple  placeholder="请选择">
    <el-option
      v-for="item in optinOpensourceType "
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    </el-form-item>
  	   
  	</div>
  		<div class="box-big-2">
  		
  			  <el-form-item     label="代码地址" :label-width="formLabelWidth">
  			  	 	<em class="addti">*</em>
      <el-input v-model="form.softUrl" placeholder="github或cstos.cstcloud.cn的项目地址，推荐使用cstos.cstcloud.cn" auto-complete="off"></el-input>
	  <a target="_blank" :href="form.softUrl">查看</a>
       <p class="textp"> {{softUrlTit}}</p>
    </el-form-item>
    	<el-form-item label=" " :label-width="formLabelWidth">
       <el-checkbox v-model="form.ifCrossPlatform">是否跨平台</el-checkbox>
    </el-form-item>
  			</div>
  <h3 class="h3">参赛人员</h3>
  	<table class="singtext" border="0" cellspacing="0" cellpadding="0">
  		<tr><th width="30">&nbsp;</th>
  			<th width="80">姓名</th>
  			<th width="100">所在单位</th>
  			<th width="100">软件中承担工作</th>
  			<th width="160">手机</th>
  			<th width="120">操作</th>
  		</tr>
  		<tr>
  			<td class="domainsnum"><span>*</span></td>
  			<td>
  				  <el-form-item  label="" :label-width="formLabelWidth">
  			<el-input v-model="firstDomains.userName" auto-complete="off"></el-input>
  			 </el-form-item>
  			<!-- <p class="textp">{{nameValueTit}}</p>-->
  			</td>
  				<td>
  					 <el-form-item  label="" :label-width="formLabelWidth">
  			<el-input v-model="firstDomains.userUnit" auto-complete="off"></el-input>
  			 </el-form-item>
  			<!-- <p class="textp"> {{companyValueTit}}</p>-->
  		
  			</td>
  				<td>
  							 <el-form-item  label="" :label-width="formLabelWidth">
  			<el-input v-model="firstDomains.userJob" auto-complete="off"></el-input>
  			 </el-form-item>
  			<!--  <p class="textp">{{roleValueTit}}</p>-->
  			</td>
  				<td>
  						 <el-form-item  label="" :label-width="formLabelWidth">
  			<el-input v-model="firstDomains.userPhone" auto-complete="off"></el-input>
  			 </el-form-item>
  			 <!--  <p class="textp">{{phoneValueTit}}</p>-->
  			</td>
  			<td>&nbsp;</td>
  		</tr>
  		<tr v-for="item in secondDomains">
  			<td class="domainsnum"></td>
  			<td>
  					<el-form-item label=" " :label-width="formLabelWidth">
      		<el-input v-model="item.userName" auto-complete="off"></el-input>
    </el-form-item>
  			</td>
  				<td>
  						<el-form-item label=" " :label-width="formLabelWidth">
      		<el-input v-model="item.userUnit" auto-complete="off"></el-input>
    </el-form-item>
  			
  			</td>
  				<td>
  					<el-form-item label=" " :label-width="formLabelWidth">
      			<el-input v-model="item.userJob" auto-complete="off"></el-input>
    </el-form-item>
  		
  			</td>
  				<td>
  						<el-form-item label=" " :label-width="formLabelWidth">
      			<el-input v-model="item.userPhone" auto-complete="off"></el-input>
				  <p class="textp">{{phoneValueTit}}</p>
    </el-form-item>
  			
  			</td>
  			<td> <div @click="delTr($event)"  class="deltrbtn">删除</div>  </td>
  		</tr>
  		
  		<tr><td colspan="5">
  			<button @click="addDomain" class="addtr">新增一行</button>
  		</td></tr>
  	</table>
  	<div class="box-big">
  		<em class="addti1">*</em>
    <el-form-item label="作品摘要" :label-width="formLabelWidth">
     <div class="box-input">
      <tinymce-editor v-model="form.abstract"
      :disabled=false
      @onClick="onClick"
      ref="editor"></tinymce-editor>

  	</div>
    </el-form-item>
  </div>
  	
  	
   
     
    
  
  <div class="bottom">
  	<div class="left">
  				<el-form-item   label=" " :label-width="formLabelWidth">
      			<el-checkbox v-model="form.ifCheckedCns">	<router-link target="_blank"  to="page1">科研开源软件创意大赛承诺书</router-link> </el-checkbox>
      			
    </el-form-item>
    	<el-form-item label=" " :label-width="formLabelWidth">
      			<el-checkbox v-model="form.ifCheckedMzs"> 	<router-link target="_blank" to="page2">科研开源软件创意大赛免责协议</router-link></el-checkbox>
      				
    </el-form-item>
  	    
  	     
  	</div>
  	
  	<div class="right">
  	     <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitForm('form')">确 定</el-button>
  	</div>
     
  </div>
  </el-form>

</el-dialog>

<!--提示-->
<!--<el-dialog
  title="提示"
  :visible.sync="dialogPrompt" :close-on-click-modal="false"
  width="30%"
  :before-close="handleClose">
  <span>{{dialogPromptTitle}}</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogPromptTrue">确 定</el-button>
  </span>
</el-dialog>-->
<!--//提示-->
	<!--报名-->
  		
  	
  		  		<!--报名浮窗-->
  		<a v-if="activityInfo.status==2" href="javascript:;"  @click="signUpActity" class="present_float">
  			<div class="ballute_blue">
  			</div>
  				<div class="ballute_pink">
  			</div>
  				<div class="ballute_red">
  			</div>
  		   <div class="present-bottom">
  		    
  		</div>
  		</a>
  			<!--报名浮窗-->	
  	
  </div>
</template>
<script type="text/javascript">
	
</script>
<script>
  import TinymceEditor from '@/components/tinymce-editor'
	import baseUrl from '../../config/index.js'
export default {
  name: 'activityGameNoStart',
  components: {
    TinymceEditor
  },
  data () {
    return {
    	activityData:'',
    	activityInfo:'',
    	 disabled: false,
    	theFirst:{
    		img:'',
    		name:''
    	},
    	theSecond:{
    		img:'',
    		name:''
    	},
    	theThird:{
    		img:'',
    		name:''
    	},
    	optinOpensourceType:[],
		userId:1,
		token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTU1OTkyMTI2LCJleHAiOjE1NTY1OTY5MjZ9.FDgzGCQZCXMwajbfBU9qqLJO0RSCjr2mUXOhX99eTUKNd8NeukYQoYsQdLZn9uSRBr-7S7A4EYPwKJylGTK9rQ",
    	stepImgSrc:'',
		titType:'',
    	 dialogFormVisible: false,
		 dialogPrompt:false,//提示弹出
		 dialogPromptTitle:'',//弹出提示
        form: {
        	domains:[],
          name: '',
          ifCrossPlatform:false,//是否跨平台
          softVersion: '',
          opensourceType: [],
          ifCrossPlatform: false,
          applicationField: [],
          softCategory: [],
          Language: [],
          userInterface: [],
          softUrl:'',
          ifCheckedCns:'',
          ifCheckedMzs:'',
          abstract:''
        },
        firstDomains:{
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
          secondDomains:[],
        nameValueTit:'',
       companyValueTit:'',
        roleValueTit:'',
        phoneValueTit:'',
         ifCheckedCnsTit:'',
          ifCheckedMzsTit:'',
		   softUrlTit:'',
		   warningMessage:'',
        categoryOption:[ ],
        optionList:[],
         domainIndex:1,
        formLabelWidth: '100px',
        rules:{}
    
      
    }
  },
  mounted(){
  	//获取活动基本信息
  	   	var _this=this;
  	var params = new URLSearchParams();
  	params.append("activityId", _this.$route.query.id);
	_this.axios.post(baseUrl.baseUrl+'/web/activity/activityInfo ',params)
  	.then(function(response){
  		_this.activityData=response.data.activity;
		console.log("_this.activityData",response)
  		_this.activityInfo=_this.activityData.activityInfo
		console.log("_this.activityInfo",_this.activityInfo)
  		_this.stepImgSrc=baseUrl.baseUrlImg+_this.activityInfo.scheduleProcess
  		var rankEle=_this.activityData.activityUserList;
  		if(rankEle){
  					for(var i=0; i<rankEle.length; i++){
  			var cur=rankEle[i];
  				if(cur.rank==1){
  			_this.theFirst.name=cur.userName
  				}
  					if(cur.rank==2){
  			_this.theSecond.name=cur.userName
  				}
  						if(cur.rank==3){
  			_this.theThird.name=cur.userName
  				}
  				_this.$nextTick(function(){_this.beginroll()})
  		}
  		}
  	})
  	_this.getListOption()
  	//获取所有二级分类  	
		_this.axios.post(baseUrl.baseUrl + '/web/soft/allSecondCtyList')
						.then(function(response) {
							_this.form.categoryOption = response.data.list;
							console.log("_this.form.categoryOption",_this.form.categoryOption)
						})
						.catch(function(error) {
							console.log(error);
						});
		  	//获取开源类型

     var params1 = new URLSearchParams();
     var newId=7;
  	params1.append("dictId",newId);
 	_this.axios.post(baseUrl.baseUrl+'/api/dict/getDictDetailsByDictId',params1)
  	.then(function(response){
  		_this.optinOpensourceType=response.data.list;
  		console.log("_this.optinOpensourceType",_this.optinOpensourceType)
  	
  	})
	
  },
   methods: {
	   //报名
	   signUpActity:function(){
		   var _this=this;
		   if(_this.userId){
		   		_this.ifSignUp()
			    
		   }else{
			   _this.dialogPrompt=true;
			   _this.dialogPromptTitle='请先登录'
		   }
		  
		   
	   },
	
	   //是否报名验证
	   ifSignUp:function(){
	   		var _this=this;
	var params = new URLSearchParams();
  	params.append("userId", _this.userId);
		params.append("activityId", _this.activityInfo.id);
		 _this.axios.defaults.headers.common['token'] = _this.token;
		_this.axios.post(baseUrl.baseUrl+'/web/join/checkIsJoin',params)
  	.then(function(response){
  		
  		//打包前要删除
  		_this.dialogFormVisible=true;
  		
  		if(response.data.code==451){
			    _this.$alert(response.data.msg, '提示信息', {
          confirmButtonText: '确定',
        });
					
  			
  		}else{
  			_this.dialogFormVisible=true;
  		}
  	
  		console.log("是否报名验证",response)
  	
  		
  	})
	   },

   	submitForm:function(formName){
   		var _this=this;
		_this.form.ifCrossPlatform=_this.form.ifCrossPlatform==true?_this.form.ifCrossPlatform=1:0
		var joinVo={
		  activityId: _this.activityInfo.id,
		  applicationField: _this.form.applicationField,
		  createTime: "",
		  createUser:"" ,
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
		  opensourceType: _this.form.opensourceType,
		  operatingSystem:"",
		  programmingLanguage: _this.form.Language,
		  softCategoryId: 0,
		  softCategoryName:"",
		  softId:"",
		  softIntroduce: _this.form.abstract,
		  softLicense:"",
		  softLogo: "",
		  softName: _this.form.name,
		  softSonCtyList: [],
		  softUrl: _this.form.softUrl,
		  softVersion: _this.form.softVersion,
		  updateTime: "",
		  userId: _this.userId,
		  userInterface:_this.form.userInterface,
		  userList: [],
		 
		}
		if(this.form.softCategory&&this.form.softCategory.length>0){
			for(var i=0; i<this.form.softCategory.length; i++){
			var cur=this.form.softCategory[i];
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
			 joinVo.softSonCtyList.push(curObj);
		}	
		}
		
	
   		if(!_this.form.name){
   				_this.messageOpen('请填写软件名称','warning')
			return false;
   		}
   		
		if(_this.form.softCategory.length==0){
			_this.messageOpen('请填写软件类别','warning')
			return false;
		} 
			var reg = /github.com(.*?)/g;
   		var reg1 = /cstos.cstcloud.cn(.*?)/g;
   		if(!_this.form.softUrl){
   				_this.messageOpen('请填写代码地址','warning')
			return false;
   		}else{
   			if(!reg.test(_this.form.softUrl)&&!reg1.test(_this.form.softUrl)){
   					_this.messageOpen('代码地址格式不正确,请使用github或cstos.cstcloud.cn的项目地址','warning')
			return false;
		}
   		}
	
		
		
   		if(!_this.firstDomains.userName){
   			console.log('.firstDomains.companyValue',)
   				_this.messageOpen('请填写参赛人姓名','warning')
			return false;
   		}
   		if(!_this.firstDomains.userUnit){
   				_this.messageOpen('请填写参赛人单位','warning')
			return false;
   		}
   		
   		if(!_this.firstDomains.userJob){
   				_this.messageOpen('请填写参赛人工作','warning')
			return false;
   		}
   		if(!_this.form.abstract){
   				_this.messageOpen('请填写作品摘要','warning')
			return false;
   		}
   		
   		
   		
   		if(!_this.firstDomains.userPhone){
   				_this.messageOpen('请填写参赛人手机','warning')
			return false;
   		}
   		console.log("_this.form.ifCheckedCns",_this.form.ifCheckedCns)
   		if(!_this.form.ifCheckedCns){
   			_this.messageOpen('请填写科研开源软件创意大承诺书','warning')
		return false;
   			
   		}
   			if(!_this.form.ifCheckedMzs){
   				_this.messageOpen('科研开源软件创意大赛免责协议','warning')
				return false;
   			
   		}
   		/* var str = 'httpscstos.cstcloud.cn/michaelliao/learngit'; */
   	
		 
		
	
   		
   		
   		
   		console.log("formName",formName)
   		 _this.$refs[formName].validate((valid) => {
          if (valid) {
			  this.firstDomains={
				  activityId: this.activityInfo.id,
				  awardLevel: 0,
				  awardTime: "",
				  id: 0,
				  joinTime: "",
				  rank: 0,
				  status: 0,
				  userId: this.userId,
				  userJob: this.firstDomains.userJob,
				  userName: this.firstDomains.userName,
				  userPhone:this.firstDomains.userPhone,
				  userUnit: this.firstDomains.userUnit, 
			  }
          joinVo.userList.push(this.firstDomains);
            if(this.secondDomains.length>0){
				for(var i=0; i<this.secondDomains.length; i++){
					var cur=this.secondDomains[i]
					joinVo.userList.push(cur);
				}
            	 
            }
			var phoneReg=/^[1][3,4,5,7,8][0-9]{9}$/;
			
				if(!phoneReg.test(this.firstDomains.userPhone)){
					this.messageOpen('请填写正确手机号码','warning')
					return false;
				
			}
			 var _this=this;
			 _this.axios.defaults.headers.common['token'] = _this.token;
			_this.axios.post(baseUrl.baseUrl + '/web/join/saveJoinInfo',joinVo)
				.then(function(response) {
					 _this.$alert(response.data.msg, '提示信息', {
          confirmButtonText: '确定',
        });
					
					
					if(response.data.code==0){
						_this.titType=true;
						
					}else{
						_this.titType=false;
					}
							
				})
				.catch(function(error) {
					console.log(error);
				})
            console.log(".this.form.domains",this.form.domains)
            console.log('form',this.form)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
   	},
   	//新增行
   	 addDomain:function() {
		 var _this=this;
      _this.secondDomains.push({
		 activityId:this.activityInfo.id,
		  awardLevel: 0,
		  awardTime: "",
		  id: 0,
		  joinTime: "",
		  rank: 0,
		  status: 0,
		  userId: this.userId,
		  userJob: '',
		  userName: '',
		  userPhone:'',
		  userUnit: '',
		});
			_this.$nextTick(function(){
				
					var L=_this.secondDomains.length;
			console.log($('.deltrbtn').eq(L-1))
			$('.deltrbtn').eq(L-1).attr("id",+L)

			})
        
     },
     //删除一行
  delTr:function(event){
  	
  	var _this=this;
  	var eve=event.currentTarget
  	
  	var thisId=$(eve).attr('id')
  	_this.secondDomains.splice(thisId-1,1)
  	
  	console.log("thisId",thisId)
  },
	dialogPromptTrue:function(){
		if(this.titType==true){
				 this.dialogFormVisible=false;
		}
	
		this.dialogPrompt=false;
		
	},
	//获取报名表单下拉内容
		getListOption:function(){
   		 	var _this=this;
  	_this.axios.post(baseUrl.baseUrl+'/web/soft/softCtyAllList')
  	.then(function(response){
  		_this.optionList=response.data.list;
  		if(fun){
  			fun()
  		}
  		
  	})
   	},
     handleClose:function(){
     	this.dialogPrompt=false;
		 
	 },
	  // 鼠标单击的事件
      onClick:function (e, editor) {
        console.log('Element clicked')
        console.log(e)
        console.log(editor)
      },
      // 清空内容
      clear:function () {
        this.$refs.editor.clear()
      },
     
   	 beginroll:function(){//先获取三个元素	
	var area = $(".alllist-con"), ul1 = $("#ul1"), ul2 = $("#ul2");
	area.scrollTop(0);
	//克隆一个列表ul2，作为衔接滚动；
	ul2.html(ul1.html()); 
	//按照指定的周期（以毫秒计）来调用函数。
	var myscroll = setInterval(function(){scroll()}, 150)
	var top = area.scrollTop();
	
	 function scroll(){
	 	if (area.scrollTop() >= ul1.height()) {
	 		top = 0;area.scrollTop(0)
	 	}else{		
	 		area.scrollTop(top++);
	 	}
	}
 
	//鼠标移入清除滚动
	area.mouseover(function(){
		clearInterval(myscroll)
	})
	//鼠标移出滚动继续
	area.mouseout(function(){
		myscroll = setInterval(function(){scroll()}, 50)
	})

},

  	
   }
}
</script>

<style>
	.activityGame .logo{
		position: absolute;
		left: -50px;
		top: 35px;
		width: 300px;
		height: 80px;
	}
	.activityGame .signdialog{
		width: 680px;
	}
	.activityGame .signdialog .bottom{
		overflow: hidden;
		width: 100%;
	}
	.activityGame .signdialog .bottom .left{
		float: left;
		margin-left: 30px;
		width: 400px;
	}
	.activityGame .signdialog .bottom .left a{
		font-size: 12px;
		color: #3bade9;
		text-decoration: underline;
	}
	.activityGame .signdialog .bottom .right{
		float: right;
		margin: 20px 20px 0 0;
		width: 200px;
	}
.activityGame .signdialog .el-dialog__body{
	padding: 10px;
	
}
	.activityGame .signdialog .el-input{
		height: 40px;
	}
	.activityGame .signdialog .el-form-item{
		margin-bottom: 2px;
	}
	.activityGame .signdialog .el-input .el-input__inner{
		height: 24px;
		line-height: 24px;
	}
	.activityGame .signdialog .box-input{
		margin-left: 38px;
		width: 580px;
		height: 300px;
	}
	 .activityGame .signdialog .box-input .el-input__inner{
	 	margin-left: 30px;
	 	width: 600px;
	 	height: 100px;
	 }
	 .activityGame .signdialog .addti{
	 	font-style: normal;
	 	font-size: 14px;
	 	font-weight: bold;
	 	color: #F56C6C;
	 }
	  
	  .activityGame .signdialog .addti1{
	  	position: absolute;
	  	left: 100px;
	  	top: 12px;
	  	width: 300px;
	 	font-style: normal;
	 	font-size: 14px;
	 	font-weight: bold;
	 	color: #F56C6C;
	 }
	.activityGame .signdialog .box-big{
		position: relative;
		width: 100%;
		overflow: hidden;
	}
	.activityGame .signdialog .box-big-2{
				position: relative;
				width: 100%;
				overflow: hidden
	}
	.activityGame .signdialog .box-big-2 a{
		padding: 4px 15px;
		font-size: 12px;
		color: #fff;
		line-height: 20px;
		background: #e59235;
		border-radius: 3px;
	}
	.activityGame .signdialog .box-big-2 .el-input{
		width: 470px;
	}
	.activityGame .signdialog .box-big .el-input{
			width: 520px;
	}
	.activityGame .signdialog .box-small{
		width: 100%;
		overflow: hidden;
	}
	.activityGame .signdialog .diatit{
		margin: 0;
		line-height: 14px;
		font-size: 12px;
		color: #999;
	}
	.activityGame .signdialog .h3{
		width: 100%;
		font-size: 16px;
		font-weight: normal;
		line-height: 30px;
		color: #666;
		text-align: center;
	}
	.activityGame .signdialog .singtext{
		padding: 5px 0;
		margin: 0 auto;
		width: 588px;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		background: #d0e1f1;
	}
	
	.activityGame .signdialog .singtext .deltrbtn{
		margin-top: 18px;
		padding: 5px;
		font-size: 12px;
		line-height: 14px;
		border-radius: 3px;
		color: #fff;
		background: #c42c12;
		cursor: pointer;
	}
	.activityGame .signdialog .el-dialog__header{
		background: #84a9e3;
		border-bottom: 1px solid #bfd0e2;
	}
	.activityGame .signdialog .el-dialog__title{
		color: #fff;
		
	}
	.activityGame .signdialog .el-dialog__headerbtn .el-dialog__close{
		color: #fff;
	}
	.activityGame .signdialog .singtext .addtr{
		margin-top: 5px;
		padding: 2px 5px;
		font-size: 14px;
		color: #fff;
		background: #1ca141;
		border-radius: 3px;
		cursor: pointer;
	}
	 .activityGame .signdialog .tinymce-editor{
	 	margin: 5px auto;
	 	width: 588px;
	 }
	.activityGame .signdialog .singtext .el-input{
		width: 120px;
	}
	.activityGame .signdialog .box-small .el-input{
		width:196px;
	}
	.activityGame .signdialog .domainsnum{
	}
	.activityGame .signdialog .domainsnum span{
		line-height: 40px;
		font-weight: bold;
		font-size: 14px;
		color: #F56C6C;
	}
	.activityGame .signdialog  .el-form-item__content{
		line-height: 40px;
	}
	.activityGame .signdialog  .el-form-item__label{
		line-height: 40px;
	}
	.activityGame .signdialog .el-input__icon{
		line-height: 10px;
	}
	.activityGame .signdialog  .textp{
		font-size: 12px;
		line-height: 12px;
		color: #F56C6C;
	}

	 .activityGame .banner-top{
	 	width: 100%;
	 	height: 636px;
	 	background:#0b54f9  url(../assets/activity/banner_top_bg.jpg) center top no-repeat;
 	
 }
 	 .activityGame .banner-top .reposbox{
 	 	position: relative;
 	 	margin: 0 auto;
 	 	width: 1200px;
 	 }
 	 	.activityGame .reposbox .sign-up-btn{
			position: absolute;
			left: 50%;
			top: 480px;
			margin-left: -220px;
			width: 295px;
			height: 75px;
			cursor: pointer;
			background: url(../assets/activity/btn_signup.png) no-repeat;
		}
  .activityGame .banner-top .session-num{
  	position: absolute; 
  	top:230px;
  	left:352px;
  	width: 230px;
  	height: 38px;
  	font-size: 24px;
  	font-weight: bold;
  	letter-spacing: 3px;
  	color: #fff;
  	line-height: 38px;
  	text-align: center;
  	background: #55c20b;
  	
  }
  .activityGame .banner-top .game-state-nostart{
  	position: absolute; 
  	top:68px;
  	left:812px;
  	width: 382px;
  	height: 138px;
  	background: url(../assets/activity/game_state_nostart.png) no-repeat
  	
  }
  .activityGame .banner-top .game-state-start{
  	position: absolute; 
  	top:68px;
  	left:812px;
  	width: 382px;
  	height: 138px;
  	background: url(../assets/activity/game_state_start.png) no-repeat;
  	
  }
  .activityGame .banner-top .game-state-end{
  	position: absolute; 
  	top:68px;
  	left:812px;
  	width: 382px;
  	height: 138px;
  	background: url(../assets/activity/game_state_end.png) no-repeat
  	
  }
  .activityGame .banner-top .game-state {
  	position: absolute; 
  	top:180px;
  	left:952px;
  	width: 200px;
  	height: 20px;
  	line-height: 20px;
  	font-size: 14px;
  	font-weight: bold;
  	color: #de482f;
  	font-style: italic;
  }
   .activityGame .banner-top .game-time {
  	position: absolute; 
  	top:436px;
  	left:290px;
  	line-height: 40px;
  	font-size:18px;
  	font-weight: bold;
  	color: #fff;
  	letter-spacing: 1px;
  }
  .activityGame .bd-list{
  	overflow: hidden;
  	margin: 0 0 15px 0;
  	width: 1200px;
  	background: #f5f5f5;
  }
  .activityGame .bd-list .linebg{
  	float: left;
  	width: 10px;
  	height: 270px;
  	background: #9db1e0;
  }
  .activityGame .bd-list .listdl{
  	float: left;
  	margin: 50px 0 0 80px;
  	width: 153px;
  }
  .activityGame .bd-list .listdl dt{
  	position: relative;
  	width: 153px;
  	height: 160px;
  }
  .activityGame .bd-list .listdl dt img{
  	position: absolute;
  	left: 7px;
  	top: 7px;
  	width: 139px;
  	height: 139px;
  	border-radius: 50%;
  }
  .activityGame .bd-list .listdl dt .prizebg{
  	position: absolute;
  	left: 0;
  	top: 0;
  	width: 153px;
  	height: 160px;
  	z-index: 5;
  }

  .activityGame .bd-list .listdl dt .prizebg1{
  	background: url(../assets/activity/the_first_bg.png) no-repeat;
  }
  .activityGame .bd-list .listdl dt .prizebg2{
  	background: url(../assets/activity/the_second_bg.png) no-repeat;
  }
  .activityGame .bd-list .listdl dt .prizebg3{
  	background: url(../assets/activity/the_third_bg.png) no-repeat;
  }
  .activityGame .bd-list .listdl  dd{
  	width: 139px;
  	font-size: 18px;
  	line-height: 40px;
  	color: #666;
  	letter-spacing: 1px;
  	text-align: center;
  }
   .activityGame .bd-list .alllist{
   position: relative;
   	float: right;
   	width: 320px;
   	height: 270px;
   	background: #9db1e0;
   }
   .activityGame .bd-list .alllist-con{
   	overflow: hidden;
   	position: absolute;
   	left: 15px;
   	top: 15px;
   	padding-top: 20px;
   	width: 290px;
   	height: 230px;
   	border: 1px solid #fff;
   	
   }
    .activityGame .bd-list .alllist-con li{
    	width: 100%;
    	text-indent: 20px;
    	line-height:22px;
    	font-size: 14px;
    	color: #fff;
    }
   .activityGame .bd-list .alllist h3{
   	display: block;
   	position: absolute;
   	left: 116px;
   	top: 0px;
   	width: 100px;
   	line-height: 30px;
   	font-size: 16px;
   	font-weight: normal;
   	color: #fff;
   	text-align: center;
   	background: #9db1e0;
   	z-index: 1;
   }
  .activityGame .title-top{
  	overflow: hidden;
  	margin: 50px 0  30px 0;
  	width: 100%;
  	height: 33px;
  	line-height: 33px;
  	font-weight: bold;
  	color: #fff;
  }
    .activityGame .title-top1{
  	background: url(../assets/activity/title_bg.png) left top no-repeat;
  }
   .activityGame .title-top2{
  	background: url(../assets/activity/title_bg_long.png)  left top no-repeat;
  }
    .activityGame .title-top .span1{
    	float: left;
    	margin-left: 21px;
    	display: inline-block;
    	width: 26px;
    	font-size: 20px;
    	text-align: center;
    	color: #006af5;
    	
    }
     .activityGame .title-top .span2{
     	float: left;
     		display: inline-block;
     		margin: 0 0 0 10px;
    	font-size: 16px;
    	color: #fff; 
    	line-height: 32px; 	
    }
 	.activityGame .objective{
 		margin-bottom: 50px;
 		width: 1200px;
 		height: 246px;
 		background: url(../assets/activity/text_bg.png) no-repeat;
 	}
 	.activityGame .objective p{
 		padding:80px 30px 0;
 		font-size: 16px;
 		line-height: 28px;
 		text-indent: 22px;
 		color: #666;
 	}
 	.activityGame .stepimg{
 		margin-top:30px;
 		width: 1200px;
 		height: 195px;
 	}
 	.activityGame .entry-mode{
 		padding:10px 20px;
 		width: 1160px;
 		line-height: 36px;
 		background: #ededed;
 	}
 	.activityGame .review-top{
 		width: 1200px;
 		height: 47px;
 		background: url(../assets/activity/review_bg_top.jpg) no-repeat;
 	}
 	.activityGame .review-bottom{
 		width: 1200px;
 		height: 44px;
 		background: url(../assets/activity/review_bg_bottom.jpg) no-repeat;
 	}
 		.activityGame .review-center{
 			overflow: hidden;
 			padding: 0 30px;
 			width: 1140px;
 			background: url(../assets/activity/review_bg_center.jpg) repeat-y;
 		}
 		.activityGame .review-center h4{
 			display: inline-block;
 			margin: 20px 0 10px;
 			padding: 2px 10px;
 			font-size: 18px;
 			color: #fff ;
 			line-height: 30px;
 			background: #f2bc18;
 		}
 		.activityGame .review-center p{
 			font-size: 16px;
 			line-height: 26px;
 			color: #666;
 		
 		}
 		.activityGame .review-center p i{
 			display: inline-block;
 			margin-right: 5px;
 			width: 10px;
 			height: 10px;
 			border-radius: 50%;
 			background: #c72d08;
 		}
 		.activityGame .bottom-box{
 			width: 100%;
 			height: 700px;
 			background: #095cfc;
 		}
 		.activityGame .bottom-box .bottom-box-top{
 			width: 100%;
 			height: 104px;
 			background: url(../assets/activity/bottom_top_bg.png) repeat-x;
 		}
 		.activityGame .bottom-box .prize-box{
 			position: relative;
 			margin: 50px auto 0;
 			overflow: hidden;
 			width:1200px ;
 			height: 443px;
 			background: url(../assets/activity/Prize_bg.png) no-repeat;
 		}
 		.activityGame .bottom-box .copy{
 			margin: 10px auto;
 			width: 1200px;
 			text-align: right;
 			font-size: 14px;
 			line-height: 20px;
 			color: #dcdee6;
 		}
 		.activityGame .bottom-box .prize-box ul{
 			overflow: hidden;
 			margin: 130px 10px 0 30px;
 		}
 		.activityGame .bottom-box .prize-box ul li{
 			margin-left:80px;
 			padding: 138px 0 42px 0;
 			float: left;
 			width: 183px;
 			height: 212px;
 			height: 36px;
 			font-size: 32px;
 			color: #fff;
 			font-weight: bold;
 			line-height: 36px;
 			text-align: center;
 			text-indent: 16px;
 		}
 		.activityGame .bottom-box .prize-box ul .li1{
 			background: url(../assets/activity/Prize_1.png) no-repeat;
 		}
 			.activityGame .bottom-box .prize-box ul .li2{
 			background: url(../assets/activity/Prize_2.png) no-repeat;
 		}
 			.activityGame .bottom-box .prize-box ul .li3{
 			background: url(../assets/activity/Prize_3.png) no-repeat;
 		}
 			.activityGame .bottom-box .prize-box ul .li4{
 			background: url(../assets/activity/Prize_4.png) no-repeat;
 		}
 		.activityGame .bottom-box .prize-box .prize4{
 			position: absolute;
 			left: 355px;
 			top: 375px;
 			width: 500px;
 			font-size: 16px;
 			line-height: 26px;
 			color: #fff;
 		}
 		.activityGame .wonderfultime{
 			overflow: hidden;
 			width: 1200px;
 		}
 		.activityGame .wonderfultime li{
 			margin: 15px 10px;
 			float: left;
 		
 		}
 		.activityGame .wonderfultime li img{
 				width: 280px;
 			height: 160px;
 		}
		.activityGame .hostunit{
			width: 100%;
		}
		.activityGame .el-carousel__container{
			margin: 0 auto;
			width: 900px;
		}
		.activityGame .el-carousel__item img{
			width: 300px;
			border: 1px solid #dedede;
		
		}
		
 		.present_float{
 			display: block;
 			position: fixed;
 			right: 10px;
 			top: 260px;
 			width: 180px;
 			z-index: 10000;
 		}
 		.present_float .present-bottom{
 			position: relative;
 			margin-top: 150px;
 			width: 148px;
 			height: 111px;
 			background: url(../assets/activity/present_float.png) no-repeat;
 			z-index: 10005;
 		}
 		.present_float .ballute_box{
 			position: relative;
 			width: 420px;
 			height: 370px;
 				
 			}
 		.present_float .ballute_blue{
 			position: absolute;
 			right: 20px;
 			top: 40px;
 			width: 59px;
 			height: 165px;
 			background: url(../assets/activity/ballute_blue.png) no-repeat;
 				 animation: ballute_pink 4.5s linear 0s infinite;
    	-webkit-animation: ballute_pink 4.5s linear 0s infinite;
    	-webkit-animation-fill-mode: both;
    	animation-fill-mode: both;
 		}
 		.present_float .ballute_pink{
 			position: absolute;
 			left: 26px;
 			top: 60px;
 			width: 51px;
 			height: 111px;
 			background: url(../assets/activity/ballute_pink.png) no-repeat;
 			 animation: ballute_pink 4s linear 0s infinite;
    	-webkit-animation: ballute_pink 4s linear 0s infinite;
    	-webkit-animation-fill-mode: both;
    	animation-fill-mode: both;
 			
 		}
 		.present_float .ballute_red{
 			position: absolute;
 			left: 5px;
 			top: 10px;
 			width: 56px;
 			height: 165px;
 			background: url(../assets/activity/ballute_red.png) no-repeat;
 			 animation: ballute_pink 5s linear 0s infinite;
    	-webkit-animation: ballute_pink 5s linear 0s infinite;
    	-webkit-animation-fill-mode: both;
    	animation-fill-mode: both;
 		}
 		
@keyframes ballute_pink {
    0% {
        transform: rotate(10deg);
        transform-origin:100% 100%;/*定义动画的旋转中心点*/
    }
    25% {
        transform:rotate(0deg);
          transform-origin:100% 100%;/*定义动画的旋转中心点*/
    }
     50%{
    	transform:rotate(-10deg);
    	  transform-origin:100% 100%;/*定义动画的旋转中心点*/
    }
   75%{
    	transform:rotate(0deg);
    	  transform-origin:100% 100%;/*定义动画的旋转中心点*/
    }
     100%{
    	transform:rotate(10deg);
    	  transform-origin:100% 100%;/*定义动画的旋转中心点*/
    }
}

@-webkit-keyframes ballute_pink {
 0% {
        transform: rotate(10deg);
        transform-origin:100% 100%;/*定义动画的旋转中心点*/
    }
    25% {
        transform:rotate(0deg);
          transform-origin:100% 100%;/*定义动画的旋转中心点*/
    }
     50%{
    	transform:rotate(-10deg);
    	  transform-origin:100% 100%;/*定义动画的旋转中心点*/
    }
   75%{
    	transform:rotate(0deg);
    	  transform-origin:100% 100%;/*定义动画的旋转中心点*/
    }
     100%{
    	transform:rotate(10deg);
    	  transform-origin:100% 100%;/*定义动画的旋转中心点*/
    }
}

	
</style>
