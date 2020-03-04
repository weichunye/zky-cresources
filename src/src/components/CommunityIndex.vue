<template>
  <div class="Communityindex">
  	<!--comindex-top-->
  	<div class="comindex-top">
  		<img class="logo" src="../assets/img/logo.jpg" alt=""/>
  		<dl>
  			<dt>开源软件社区</dt>
  			<dd>科研软件第一社区</dd>
  		</dl>
  		<img class="bnaner-r" src="../assets/banner/Communityindex_topbanner.jpg" alt=""/>
  		
  	    
  	</div>
  <!--//comindex-top-->
  <!--banner-center-->
  <div class="banner-center">
      <div class="con-center">
      	<div class="soft-classify-all">
      	 <i class="el-icon-menu"></i>   全部软件分类
      	</div>
      	<ul class="soft-classify-list">
      		<li class="li-1">
      			<em></em>
      			<p>应用领域</p>
      			<i></i>
      			 <div class="classify-box">
      			 	
      			     <a href="javascript:;">
      			     	人工智能 
      			     </a>
      			        <a href="javascript:;">
      			     	大数据 
      			     </a>
      			        <a href="javascript:;">
      			     	流体力学 
      			     </a>
      			        <a href="javascript:;">
      			     	量子力学 
      			     </a>
      			      <a href="javascript:;">
      			     	人工智能 
      			     </a>
      			        <a href="javascript:;">
      			     	大数据 
      			     </a>
      			        <a href="javascript:;">
      			     	流体力学 
      			     </a>
      			        <a href="javascript:;">
      			     	量子力学 
      			     </a>
      			      <a href="javascript:;">
      			     	人工智能 
      			     </a>
      			   
      			 </div>
      		</li>
      		<li class="li-2">
      			<em></em>
      			<p>软件分类</p>
      			<i></i>
      				 <div class="classify-box">
      			 	
      			     <a href="javascript:;">
      			     	Web应用开发 
      			     </a>
      			        <a href="javascript:;">
      			     	服务器软件 
      			     </a>
      			        <a href="javascript:;">
      			     	程序开发 
      			     </a>
      			     
      			   
      			 </div>
      			 
      		</li>
      		<li class="li-3">
      			<em></em>
      			<p>开源类型</p>
      			<i></i>
      			  <div class="classify-box">
      			 	
      			     <a href="javascript:;">
      			     	ISC许可 
      			     </a>
      			        <a href="javascript:;">
      			     	MIT许可 
      			     </a>
      			        <a href="javascript:;">
      			     	LGPL许可 
      			     </a>
      			     
      			   
      			 </div>
      		</li>
      		<li class="li-4">
      			<em></em>
      			<p>用户接口</p>
      			<i></i>
      			  <div class="classify-box">
      			 	
      			     <a href="javascript:;">
      			     	Web-Based 
      			     </a>
      			        <a href="javascript:;">
      			     Web-Based 
      			     </a>
      			   
      			 </div>
      		</li>
      		<li class="li-5">
      			<em></em>
      			<p>编程语言</p>
      			<i></i>
      			 <div class="classify-box">
      			 	
      			     <a href="javascript:;">
      			     Java
      			     </a>
      			        <a href="javascript:;">
      			    Php 
      			     </a>
      			   
      			 </div>
      		</li>
      	</ul>
      	<div class="con-r">
      		<img src="../assets/bg/Communityindex_banner_text.png" alt=""/>
      		<div class="search">
      				<el-input type="text" v-model="searchVal" name="" id="" value=""
				 @keyup.enter.native="" placeholder="软件关键字" />
				</el-input>
				<button class="search-btn">search</button>
      		    
      		</div>
      	    
      	</div>
      	
          
      </div>
  </div>
   <!--//banner-center-->
  </div>
</template>

<script>
export default {
  name: 'CommunityIndex',
  data () {
    return {
    	searchVal:'',
      
    }
  },
  mounted(){
  	var _this=this;
  	_this.$nextTick(function(){
  		$(".soft-classify-list li").mouseover(function(){
  			$('.classify-box').hide()
  			var classifyBox=$(this).find('.classify-box')
  			classifyBox.show()
  			
  		})
  		$(".soft-classify-list li").mouseout(function(){
  				$('.classify-box').hide()
  		})
  	})
  },
   methods: {
   	
   }
}
</script>

<style>
	.comindex-top{
		overflow: hidden;
		margin: 0 auto;
		width: 1200px;
		height: 190px;
	}
	.comindex-top .logo{
		float: left;
		margin-top: 15px;
		width: 120px;
		height: auto;
	}
	.comindex-top dl{
		float: left;
		padding-left: 10px;
		margin: 10px 0 0 10px;
		border-left: 1px solid #c3c9d7;
	}
		.comindex-top dl dt{
			width: 400px;
			font-size: 22px;
			font-weight: bold;
			line-height: 70px;
		}
		.comindex-top dl dd{
			padding: 10px 15px;
			font-size: 16px;
			font-weight: bold;
			color: #fff;
			background: #3f5891;
		}
		.comindex-top .bnaner-r{
			margin: 10px 0;
			float: right;
		}
		.Communityindex .banner-center{
			width: 100%;
			height: 390px;
			background: url(../assets/bg/top_bg_1.jpg) repeat-x;
		}
		.Communityindex .banner-center .con-center{
			position: relative;
			margin: 0 auto;
			width: 1200px;
		}
		.Communityindex .banner-center .con-center .con-r{
			float: right;
			width: 800px;
		}
		.Communityindex .banner-center .con-center .con-r img{
			display: block;
			margin: 40px auto 0;
			width: 700px;
			height: 138px;
		}
		.Communityindex .banner-center .con-center .con-r .search{
			overflow: hidden;
			margin-top: 50px;
		}
		.Communityindex .banner-center .con-center .con-r .search .el-input{
				float: left;
					width: 660px;
		
		}
		.Communityindex .banner-center .con-center .con-r .search .el-input__inner{
			width: 660px;
			height: 50px;
		}
		.Communityindex .banner-center .con-center .con-r .search .search-btn{
			margin-left: 20px;
			width: 120px;
			height: 50px;
			font-size: 20px;
			line-height: 50px;
			text-align: center;
			border-radius: 5px;
			color: #fff;
			background: #cb7474;
			cursor: pointer;
		}
		.Communityindex .soft-classify-all{
			position: absolute; 
			top:-40px;
			left:0;
			overflow: hidden;
			width: 218px;
			height: 40px;
			color: #fff;
			line-height: 40px;
			text-indent: 30px;
			background: #00c9ff;
			
		}
		.Communityindex i{
			color: #fff;
		}
		.Communityindex .soft-classify-list{
			position: absolute; 
			top:0px;
			left:0;
			width: 218px;
		}
		.Communityindex .soft-classify-list li{
			position: relative;
			width: 218px;
			height: 72px;
			line-height: 72px;
			font-size: 14px;
			background: #626262;
			border-top: 1px solid #858585;
			cursor: pointer;
		}
		.Communityindex .soft-classify-list li .classify-box{
			display: none;
			position: absolute; 
			left:218px;
			overflow: hidden;
			padding: 30px;
			width: 840px;
			height: 305px;
			background: #fff;
			z-index: 10;
		}
		.Communityindex .soft-classify-list li .classify-box a{
			float: left;
			padding-right: 12px;
			margin: 6px 10px;
			font-size: 12px;
			line-height: 16px;
			color: #666;
			border-right: 1px solid #e0e0e0;
		}
			.Communityindex .soft-classify-list li .classify-box a:hover{
				font-weight: bold;
				color: #9e2828;
			}
		.Communityindex .soft-classify-list li em{
			float: left;
			display: block;
			margin: 25px 0 0 30px;
			width: 20px;
			height: 20px;
			
		}
		.Communityindex .soft-classify-list li  p{
			margin: 0 40px 0 20px;
			float: left;
			color: #fff;
		}
		.Communityindex .soft-classify-list i{
			float: right;
			width: 5px;
			height: 9px;
			margin: 30px 10px 0 0;
			background: url(../assets/icon/Communityindex_arrow_right.png) no-repeat;
			
		}
			.Communityindex .soft-classify-list li:hover{
				background: #ffff;
			}
			.Communityindex .soft-classify-list li:hover p{
				color: #858585;
			}
		
			.Communityindex .soft-classify-list li:hover i{
				background: url(../assets/icon/Communityindex_arrow_right_1.png) no-repeat;
			}
		.Communityindex .soft-classify-list .li-1 .classify-box{
			top:0;
		}
		.Communityindex .soft-classify-list .li-2 .classify-box{
			top:-73px;
		}
		.Communityindex .soft-classify-list .li-3 .classify-box{
			top:-146px;
		}
		.Communityindex .soft-classify-list .li-4 .classify-box{
			top:-219px;
		}
		.Communityindex .soft-classify-list .li-5 .classify-box{
			top:-292px;
		}
		.Communityindex .soft-classify-list .li-1 em{
			background: url(../assets/icon/softClassify_cion_11.png) no-repeat;
			background-size: cover;
		}
		.Communityindex .soft-classify-list .li-1:hover em{
			background: url(../assets/icon/softClassify_cion_1.png) no-repeat;
			background-size: cover;
		}
		.Communityindex .soft-classify-list .li-2 em{
			background: url(../assets/icon/softClassify_cion_11.png) no-repeat;
				background-size: cover;
		}
		.Communityindex .soft-classify-list .li-2:hover em{
			background: url(../assets/icon/softClassify_cion_1.png) no-repeat;
			background-size: cover;
		}
		.Communityindex .soft-classify-list .li-3 em{
			background: url(../assets/icon/softClassify_cion_11.png) no-repeat;
				background-size: cover;
		}
		.Communityindex .soft-classify-list .li-3:hover em{
			background: url(../assets/icon/softClassify_cion_1.png) no-repeat;
			background-size: cover;
		}
		.Communityindex .soft-classify-list .li-4 em{
			background: url(../assets/icon/softClassify_cion_11.png) no-repeat;
				background-size: cover;
		}
		.Communityindex .soft-classify-list .li-4:hover em{
			background: url(../assets/icon/softClassify_cion_1.png) no-repeat;
			background-size: cover;
		}
		.Communityindex .soft-classify-list .li-5 em{
			background: url(../assets/icon/softClassify_cion_11.png) no-repeat;
				background-size: cover;
		}
		.Communityindex .soft-classify-list .li-5:hover em{
			background: url(../assets/icon/softClassify_cion_1.png) no-repeat;
			background-size: cover;
		}
</style>
