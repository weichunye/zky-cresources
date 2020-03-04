<template>
  <div class="communityinfo">
  	<!--banner-top-->
  	<div class="banner-top">
  		<div class="banner-con">
  			<router-link to="CommunityIndex">
  			<div class="btn btn-L">
  				立即使用
  			</div>
  			</router-link>
  				<a href="javascript:;" class="btn btn-R">
  				场景体验
  			</a>
  		    
  		</div>
  	    
  	</div>
  	<!--//banner-top-->
  	<!--con-W1200-->
  	<div class="con-W1200">
  		<h3 class="h3bg-1">
  			产品优势
  		</h3>
  		<!--产品优势-->
  		<div class="box-over">
  			<div class="pro-advantage maR-20">
  				<h4>降低使用门槛</h4>
  					<p>通过浏览器访问图形化的计算化学类应用作业提交
</p>
  			</div>
  			<div class="pro-advantage maR-20">
  				<h4>提高使用效率</h4>
  					<p>依托连接中科院超级计算环境的软硬件资源,提供全局的资源服务
</p>
  			</div>
  			<div class="pro-advantage">
  				<h4>前后处理</h4>
  					<p>规范输入文件检查处理和结果文件的常规分析</p>
  			</div>
  			
  		    
  		</div>
  			<!--//产品优势-->
  			<h3 class="h3bg-2">
  			产品功能
  		</h3>
  		<table class="table" border="0" cellspacing="0" cellpadding="0">
  			<tr><th width="120">量子化学软件</th><td>提供Gaussian. NWChem、 VASP和MOLPRO等在线作业提交服务</td></tr>
  				<tr><th width="120">分子模拟软件</th><td>提供LAMMPS、AMBER、GROMACS和NAMD等在线作业提交服务
</td></tr>
  					<tr><th width="120">药物设计软件</th><td>提供AUTODOCK DL POLY和DOCK在线作业提交服务
</td></tr>
  			
  		</table>
  			<h3 class="h3bg-3">
  			实战案例
  		</h3>
  		<!--实战案例-->
  		<div class="case">
  			<div style="display: block;" class="tabcon">
  			    <img src="../assets/img/pic_1.jpg"/>
  			    <div class="tabcon-r">
  			    	<h2>锐钛矿Ti02高能表面的形成和演化规律探究</h2>
  			    	<p>暴露高能面的TiO2单晶引起了广泛的关注。然而，高能表面的演化机理和过程却并不清晰。本文中,使用实验和理论计算相结合的手段,解释了TiO2高能表面(例如001和110 )的演化过程和平衡共存机理。此项工作对于更好地理解和控制不同晶面生长的氧化物晶体提供了更好地思路和方向。</p>
  			        
  			    </div>
  			</div>
  			<div class="tabcon">
  			    暂无数据
  			</div>
  			<div class="tabs">
  			<span class="tab tab-active"><img src="../assets/icon/case_tabs_1.png"/></span>
  			<span class="tab tabbg"><img src="../assets/icon/case_tabs_2.png"/></span>
  			</div>
  		 
  		</div>
  		<!--//实战案例-->
  	    
  	</div>
  	<!--//con-W1200-->
  </div>
</template>

<script>
export default {
  name: 'CommunityInFo',
  data () {
    return {
    		 activeName: 'second',
    		  tabType :0
      
    }
  },
  mounted(){
  	var _this=this;
  	_this.$nextTick(function(){
  		$(".tab").click(function(){
  			var i = $(this).index();//下标第一种写法
  			$(".tab").removeClass('tab-active')
  			$(this).addClass('tab-active')
  		
  			$('.tabcon').hide()
  			$('.tabcon').eq(i).show()
  		})
  	})
  },
   methods: {
   	
   }
}
</script>

<style>
	.communityinfo .banner-top{
		position: relative;
		width: 100%;
		height: 400px;
		background: url(../assets/banner/community_banner.jpg) center center no-repeat;
	}
	.communityinfo .banner-con{
		position: relative;
		margin: 0 auto;
		width: 1200px;
		height: 400px;
	}
	.communityinfo .banner-top .btn{
			position: absolute; 
		bottom:30px;
	display: block;
	width:170px;
	height:36px;
	font-size: 14px;
	text-align: center;
	line-height:36px;
	text-indent: 0px;
	border-radius: 4px;
	}
	.communityinfo .banner-top .btn-L{
		left:50px;
		color: #fff ;
		background: #31b0d5;
	}
	.communityinfo .banner-top .btn-R{
		left:300px;
		color: #666 ;
		background: #e6e6e6;
	}
	.communityinfo h3{
			padding-left: 50px;
			margin: 10px 0;
			width:500px;
			height: 40px;
			line-height: 40px;
			font-size: 16px;
			color: #333333;
			font-weight: bold;
		}
	.communityinfo .h3bg-1{
				background: url(../assets/icon/communityinfo_icon_1.jpg) no-repeat;
	 }
	 .communityinfo .h3bg-2{
				background: url(../assets/icon/communityinfo_icon_2.jpg) no-repeat;
	 }
	 .communityinfo .h3bg-3{
				background: url(../assets/icon/communityinfo_icon_3.jpg) no-repeat;
	 }
	  .communityinfo .maR-20{
	  	margin-right: 20px;
	  }
	  .communityinfo .pro-advantage{
	  	float: left;
	  	margin: 10px 15px 10px 5px;
	  	width: 360px;
	  	height: 140px;
	  	box-shadow: 0px 0px 5px 2px #d3d8db;
	  }
	  .communityinfo .pro-advantage h4{
	  	display: block;
	  	width:100%;
	  	height:46px;
	  	font-size:14px;
	  	color:#fff;
	  	text-align: center;
	  	line-height:46px;
	  	background: #2295d9;
	  }
	  .communityinfo .pro-advantage p{
	  	padding: 10px 20px;
	  	display: block;
	  	font-size:14px;
	  	color: #666;
	  	line-height:20px;
	  }
 .communityinfo .table{
 	margin: 30px 0;
 	width: 1200px;
 	box-sizing: border-box;
 	 border-collapse:collapse;
 }
 .communityinfo .table th, .communityinfo .table td{
 	line-height: 80px;
 	border: 1px solid #9fcfec;
 }
  .communityinfo .table th{
  	background: #eef5f9;
  }
 .communityinfo .table td {
 	text-indent: 20px;
 }
 .communityinfo .case{
 	overflow: hidden;
 	margin: 30px 0;
 	width: 1200px;
 	
 }
 .communityinfo .case .tabcon{
 	display: none;
 	float: left;
 	width: 1100px;
 	min-height: 430px;
 	background: #87cef2;
 	text-align: center;
 	line-height: 100px;
 	color: #fff;
 }
  .communityinfo .case .tabcon img{
  	float: left;
  	margin:20px 10px;
  	width: 600px;
  	height: auto;
  }
   .communityinfo .case .tabcon .tabcon-r{
   	float: left;
   	margin: 60px 0 0 40px;
   	
   }
   .communityinfo .case .tabcon .tabcon-r h2{
    display: block;
    width:360px;
    font-size: 30px;
    color:#fff ;
    line-height: 50px;
    text-align: left;
   }
   .communityinfo .case .tabcon .tabcon-r p{
   	margin-top: 20px;
   	width:360px;
   	font-size:14px; 
   	line-height:26px;
   	color:#fff ;
   	 text-align: left;
   }
  .communityinfo .case .tabs{
  	float: left;
  	width: 61px;
  }
   .communityinfo .case .tabs .tab{
   	display: block;
   	width: 61px;
   	height: 63px;
   	background: url(../assets/icon/case_tabsbg_1.png) no-repeat;
   
   }
  
   .communityinfo .case .tabs .tab-active{
   	background: url(../assets/icon/case_tabsbg_2.png) no-repeat;
   }
   
   
</style>
