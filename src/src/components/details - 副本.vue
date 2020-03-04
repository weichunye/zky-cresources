<template>
  <div class="details">
  	
  		<searchTop></searchTop>
  		<!--面包屑-->
  		<div class="crumbs">
  		<span>首頁 ></span>
  		 <span>软件 </span>   
  		</div>
  			<!--//面包屑-->
  			<!--top-box-->
  			<div class="top-box">
  				<div class="left-box">
  					<h2>{{softData.softName}} 	<span v-if="softData.isHot==1" class="hot-bg">热</span>
   	   					<span v-if="softData.isRecommend==1" class="jian-bg">荐</span>
   	   					<span v-if="softData.isChina==1" class="guo-bg">国</span>
   	   						<span v-if="softData.isEvaluate==1" class="xin-bg">信</span></h2>
  					<p class="label">
  						很好
  					</p>
  					<p class="label">
  						超级实用
  					</p>
  					<p class="label">
  						亲测可用
  					</p>
  					<p class="addlabel">
  						添加标签
  					</p>
  					<p class="p">
  						开源类型:{{softData.opensourceType}} <span>用户接口：{{softData.userInterface}}</span>
  					</p>
  					<p class="p">软件分类:{{softData.softCategoryName}}  <span>  开发者：{{softData.createUser}}</span></p>
  					<p class="p">应用领域:{{softData.applicationField}}  <span> 收录时间：{{softData.createTime}}</span> </p>
  					<p class="p">编程语言:{{softData.programmingLanguage}} <span></span> </p>
  					
  					<ul class="list-tools">
  						<li><a href="javascript:;">
  							收藏 <span>20 </span>
  						</a>
  						</li>
  						<li>
  						<a href="javascript:;">
  							喜欢<span>20 </span>
  						</a>
  						</li>
  						<li>
  						<a href="javascript:;">
  							分享<span>20 </span> 
  						</a>
  						</li>
  						<li>
  						<a href="javascript:;">
  							下载<span>20 </span>
  						</a>
  						</li>
  						<li>
  						<a href="javascript:;"  class="hover">
  							浏览<span>20 </span> 
  						</a>
  						
  						</li>
  					</ul>
  					<button class="btn-zhishu">
  						指数
  					</button>
  					
  				    <ul class="list-hub">
  				    	<li>
  				    		<img src="../assets/icon/icon_1.jpg"/>
  				    		<p>Watch</p>
  				    		<i></i>
  				    		<p>4</p>
  				    	</li>
  				    		<li>
  				    		<img src="../assets/icon/icon_3.jpg"/>
  				    		<p>Star</p>
  				    		<i></i>
  				    		<p>4</p>
  				    	</li>
  				    		<li>
  				    		<img src="../assets/icon/icon_2.jpg"/>
  				    		<p>Fort</p>
  				    		<i></i>
  				    		<p>4</p>
  				    	</li>
  				    </ul>
  				</div>
  				
  			    <img class="right-box" src="../assets/bg/advertising_small.jpg" title="活动"/>
  			</div>
  			<!--//top-box-->
  			<!--content-->
  			<div class="content center-box">
  				<!--left-box-->
  					<div class="left-box">
  			    <el-tabs type="border-card">
  <el-tab-pane label="软件介绍">
  	<div v-html="softData.softIntroduce" class="min-height">
  	   
  	</div>
  </el-tab-pane>
  <el-tab-pane label="使用手册">
  		<div class="min-height">
  	    222
  	</div>
  </el-tab-pane>

</el-tabs>
  			</div>
  			    <!--left-box-->	
  			    <!--right-box-->
  			    <div class="right-box">
  			    	<h3>同类软件推荐</h3>
  			    	<dl v-for="item in hotList">
  			    		<dt><span>{{item.softName}}</span> </dt>
  			    		<dd>收藏: <span>{{item.collectionNum}} </span>  下载: <span> {{item.downloadNum}}</span>运行： <span>{{item.runNum}}</span></dd>
  			    	</dl>
  			   
  			        
  			    </div>
  			     <!--right-box-->
  			
  			</div>
  			
  				<!--content-->
  			
  		<ul class="float-nav ">
  			<li>
  				<img src="../assets/icon/float_nav_1.png" alt=""/>
  				<p>投递软件</p>
  			</li>
  			<li>
  				<img src="../assets/icon/float_nav_2.png" alt=""/>
  				<p>立即下载</p>
  			</li>
  			<li>
  				<img src="../assets/icon/float_nav_3.png" alt=""/>
  				<p>模拟运行</p>
  			</li>
  			<li>
  				<img src="../assets/icon/float_nav_4.png" alt=""/>
  				<p>查看源码</p>
  			</li>
  			<li>
  				<img src="../assets/icon/float_nav_5.png" alt=""/>
  				<p>意见反馈</p>
  			</li>
  		    
  		</ul>
  			
  			
 
  			
  			
  			<foot></foot>
  			
  			
  <el-dialog title="添加自定义标签" :visible.sync="dialogTit">
  <el-form :model="form">
    <el-form-item label="添加标签" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>

    	 <el-checkbox-group 
    v-model="checkedCities1"
    :min="1"
    :max="3">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
  
    
   
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogTit = false">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>
	 const cityOptions = ['很好', '喜欢', '一般', '亲测可用'];
		import searchTop from './searchTop.vue';
		import foot from './footer.vue';
		import baseUrl from '../../config/index.js'
export default {
  name: 'detailsPage',
  components: {
			foot,
			searchTop
		
		},
  data () {
    return {
    	softId:'',
    	softData:'',
    	dialogTit:false,//pop
    	form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        checkedCities1: [],
        cities: cityOptions,
        hotList:[],
    	
      
    }
  },
  mounted(){
  	//悬浮导航
  var W=$(window).width()-1200;
	var L=1200+W/2
	$(".float-nav").css({"left":L+"px"});
	
	var _this=this;
	_this.softId= this.$route.query.id;
	console.log("_this.softId",_this.softId)
	
	 		//获取热门软件
  	var params1 = new URLSearchParams();
  	params1.append("page", 1);
  	params1.append("limit", 10);
	_this.axios.post(baseUrl.baseUrl+'/web/soft/queryHotSoftListByCondition',params1)
  	.then(function(response){
  		_this.hotList=response.data.page.list;
  		console.log("_this.hotList",response)
  	})
  	
	
	
	//获取信息
		var params = new URLSearchParams();
  	params.append("softId", _this.softId);
  	console.log("params",params);

		_this.axios.post(baseUrl.baseUrl+'/web/soft/querySoftInfoById',params)
  	.then(function(response){
  		_this.softData=response.data.softInfo;
  		console.log("response",response)
  	
  		
  	})
	
	
  },
   methods: {
   	
   }
}
</script>

<style>
	.details{
			background: #f8f8f8;
	}
	.details .top-box{
		overflow: hidden;
		margin: 10px auto;
		width: 1200px;
	}
	.details .el-dialog{
		width: 600px;
	}
	.details .el-dialog .labelList{
		overflow: hidden;
		padding: 10px 30px;
	}
	.details .el-dialog .labelList span{
		margin-right: 10px;
		padding: 2px 8px;
		font-size: 14px;
		line-height: 14px;
		color: #fff;
		background: #52a2c1;
		border-radius: 5px;
	}
	.details .top-box .left-box{
		position: relative;
		padding: 10px;
		float: left;
		width: 920px;
		height: 200px;
		background: #fff;
	}
	.details .top-box .left-box h2{
		width: 100%;
		font-size: 24px;
		font-weight: normal;
		line-height: 36px;
		color: #666;
	}
	.details .top-box .left-box h2 span{
    margin-left: 10px;
    width: 18px;
    height: 18px;
    font-size: 12px;
    font-style: normal;
    text-align: center;
    line-height: 18px;
    border-radius: 3px;
	}
	.details .top-box .left-box .label{
		display: inline-block;
		margin: 5px 0 10px;
		padding: 5px 10px;
		line-height: 12px;
		font-size: 12px;
		color: #fff;
		background: #529fd8;
	}
	.details .top-box .left-box .addlabel{
		display: inline-block;
		margin: 5px 10px 10px;
		padding: 7px 10px;
		line-height: 12px;
		font-size: 14px;
		font-weight: bold;
		color: #fff;
		background: #cc0000;
		border-radius: 5px;
		cursor: pointer;
	}
	.details .top-box .left-box .p{
		width: 100%;
		font-size: 14px;
		color: #666;
		line-height: 24px;
	}
	.details .top-box .left-box .p span{
		float: right;
		margin-right: 10px;
		width: 320px;
		text-align: left;
		font-size: 14px;
		color: #666;
		line-height: 24px;
	}
	.details .top-box .left-box .list-tools{
		margin-top: 5px;
		overflow: hidden
	}
	.details .top-box .left-box .list-tools li{
		float: left;
		margin-right: 20px;
	}
	.details .top-box .left-box .list-tools li a{
		display: inline-block;
		padding: 0 6px;
		color: #666;
		line-height: 26px;
		height: 26px;
		background: #f0efef;
		border-radius: 2px;
	}
	.details .top-box .left-box .list-tools li a:hover{
		color: #d33c45;
	}
	.details .top-box .left-box .list-tools li .hover:hover{
		color: #666;
	}

	.details .top-box .left-box .list-tools li a span{
		display: inline-block;
		margin-left: 6px;
		padding-left: 8px;
			line-height: 26px;
		height: 26px;
		border-left: 1px solid #dedede;
	}
	.details .top-box .left-box  .btn-zhishu{
		position: absolute;
		right: 20px;
		top: 20px;
		padding: 0 8px;
		height: 28px;
		line-height: 28px;
		border-radius: 2px;
		color: #fff;
		background: #fe7300;
		
	}
	.details .top-box .left-box  .btn-zhishu:hover{
		background: #32aa66;
	}
	.details .top-box .left-box .list-hub{
		position: absolute;
		right: 20px;
		bottom: 20px;
		overflow: hidden;
	}
	.details .top-box .left-box .list-hub li{
		float: left;
		overflow: hidden;
		margin: 0 8px;
		padding: 0 5px;
		height: 26px;
		line-height: 26px;
		border: 1px solid #dedede;
		border-radius: 2px;
	}
	.details .top-box .left-box .list-hub li img{
		float: left;
		margin:5px 5px ;
		
	}
	.details .top-box .left-box .list-hub li p{
		float: left;
		font-size: 14px;
		color: #666;
		line-height:26px;
	}
	.details .top-box .left-box .list-hub li i{
		float: left;
		display: inline-block;
		margin: 0 5px;
		width: 1px;
		height: 26px;
		background: #dedede;
	}
	.details .top-box .right-box{
		float: right;
		width: 250px;
		height: 220px;
		
	}
	.details .center-box{
		overflow: hidden;
		width: 1200px;
		min-height: 5px;
		background: #fff;
	}
	
	.details .center-box .left-box{
    float: left;
    width: 920px;
	}
	
	.details .center-box .left-box .min-height{
		min-height: 400px;
	}
	.details .center-box .left-box .min-height p{
		text-align: center;
	}
	.details .center-box .right-box{
    float: right;
    width: 250px;
	}
	.details .center-box .right-box h3{
		width: 100%;
		font-size: 18px;
		color: #666;
		line-height: 30px;
		font-weight: normal;
	}
	.details .center-box .right-box dl{
		margin-top: 5px;
		color: #333;
		
	}
	.details .center-box .right-box dl dt{
		font-size: 14px;
		line-height: 26px;
	}
	.details .center-box .right-box dl dt span{
		font-weight: bold;
	}
	.details .center-box .right-box dl dd{
		font-size: 12px;
		color: #999;
	}
	.details .center-box .right-box dl dd span{
		margin: 0 10px 0 5px;
		color: #999;
	}
	.float-nav{
		position: fixed;
		top: 200px;
		left: 0;
		width: 60px;
		border-radius: 2px;
	}
	.float-nav li{
		width: 60px;
		height: 86px;
		border-bottom: 1px solid #a6ceec;
		background: #2185d0;
		cursor: pointer;
	}
	.float-nav li:hover{
			background: #d40303;
	}
	.float-nav li img{
		display: block;
		padding: 8px 0 3px 0;
		margin: 0px auto;
		width: 50px;
	}
	.float-nav li p{
		width: 100%;
			font-size: 12px;
			line-height: 18px;
		text-align: center;
		color: #fff;
	}
	
</style>
