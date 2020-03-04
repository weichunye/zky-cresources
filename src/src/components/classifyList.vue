<template>
  <div class="allClassify">
  	<searchTop></searchTop>
  	<!--面包屑-->
  		<div class="crumbs">
  		<span>首頁 ></span>
  		 <span>软件 </span>   
  		</div>
  			<!--//面包屑-->
  	<!--content-->
  	<div class="content">
  		<!--left-box-->
  	<div class="left-box">
  		<ul>
  			<li> 
  			<h4>应用领域</h4>
  			<p>
  				<span>人工智能 &nbsp;&nbsp;|</span>
  				<span>大数据 &nbsp;&nbsp;|</span>
  				<span>流体力学 &nbsp;&nbsp;|</span>
  				<span>量子力学 &nbsp;&nbsp;|</span>
  				<span>分子动力学 &nbsp;&nbsp;|</span>
  				<span>计算材料 &nbsp;&nbsp;|</span>
  				<span>工程与仿真材料 &nbsp;&nbsp;|</span>
  				<span>计算生物 &nbsp;&nbsp;|</span>
  				<span>计算电磁学 &nbsp;&nbsp;|</span>
  				<span>并行算法库 &nbsp;&nbsp;|</span>
  				<span>可视化 &nbsp;&nbsp;|</span>
  				<span>并行调试软件 &nbsp;&nbsp;|</span>
  				<span>数学 &nbsp;&nbsp;|</span>
  				<span>论文工具 &nbsp;&nbsp;|</span>
  				<span>有限元分析软件 &nbsp;&nbsp;|</span>
  				<span>仿真软件 &nbsp;&nbsp;|</span>
  				<span>高性能计算工具 &nbsp;&nbsp;|</span>
  				<span>化学 &nbsp;&nbsp;|</span>
  				<span>教学工具 &nbsp;&nbsp;|</span>
  				<span>天文 &nbsp;&nbsp;|</span>
  			</p>
  			</li>
  				<li> 
  			<h4>软件分类</h4>
  			<p>
  				<span>Web应用开发 &nbsp;&nbsp;|</span>
  				<span>服务器软件 &nbsp;&nbsp;|</span>
  				<span>程序开发 &nbsp;&nbsp;|</span>
  				<span>科研应用 &nbsp;&nbsp;|</span>
  				<span>服务器软件 &nbsp;&nbsp;|</span>
  				<span>数据库相关 &nbsp;&nbsp;|</span>
  				<span>管理与监控 &nbsp;&nbsp;|</span>
  				<span>其他开源 &nbsp;&nbsp;|</span>
  			
  			</p>
  			</li>
  				<li> 
  			<h4>开源类型</h4>
  			<p>
  				<span>Apache许可 &nbsp;&nbsp;|</span>
  				<span>MIT许可 &nbsp;&nbsp;|</span>
  				<span>ISC许可 &nbsp;&nbsp;|</span>
  				<span>BSD许可 &nbsp;&nbsp;|</span>
  				<span>GPL许可 &nbsp;&nbsp;|</span>
  				<span>Mozilla许可 &nbsp;&nbsp;|</span>
  				<span>LGPL许可 &nbsp;&nbsp;|</span>
  				<span>其他类型 &nbsp;&nbsp;|</span>
  				
  			</p>
  			</li>
  					<li> 
  			<h4>用户接口</h4>
  			<p>
  				<span>Graphical &nbsp;&nbsp;|</span>
  				<span>Web-Based &nbsp;&nbsp;|</span>
  				<span>Toolkits/Libraries &nbsp;&nbsp;|</span>
  				<span>Textual &nbsp;&nbsp;|</span>
  				<span>Plugins &nbsp;&nbsp;|</span>
  				<span>Non-interactive &nbsp;&nbsp;|</span>
  				<span>Grouping and Descriptive Categories &nbsp;&nbsp;|</span>
  				
  			</p>
  			</li>
  					<li> 
  			<h4>编程语言</h4>
  			<p>
  				<span>Graphical &nbsp;&nbsp;|</span>
  				<span>Web-Based &nbsp;&nbsp;|</span>
  				<span>Toolkits/Libraries &nbsp;&nbsp;|</span>
  				<span>Textual &nbsp;&nbsp;|</span>
  				<span>Plugins &nbsp;&nbsp;|</span>
  				<span>Non-interactive &nbsp;&nbsp;|</span>
  				<span>Grouping and Descriptive Categories &nbsp;&nbsp;|</span>
  				
  			</p>
  			</li>
  		</ul>
  	    
  	</div>
  	    <!--//left-box-->
  	    <!--right-box-->
  	   <div class="right-box">
  	   	<div class="num-list">
  	   		<h3>最近榜单：</h3>
  	   		<ul>
  	   			<li>
  	   				<span class="span1">1</span>
  	   				<p>软件111</p>
  	   			</li>
  	   				<li>
  	   				<span class="span1">2</span>
  	   				<p>软件111</p>
  	   			</li>
  	   				<li>
  	   				<span class="span1">3</span>
  	   				<p>软件111</p>
  	   			</li>
  	   				<li>
  	   				<span>4</span>
  	   				<p>软件111</p>
  	   			</li>
  	   			<li>
  	   				<span>5</span>
  	   				<p>软件111</p>
  	   			</li>
  	   			<li>
  	   				<span>6</span>
  	   				<p>软件111</p>
  	   			</li>
  	   			<li>
  	   				<span>7</span>
  	   				<p>软件111</p>
  	   			</li>
  	   			<li>
  	   				<span>8</span>
  	   				<p>软件111</p>
  	   			</li>
  	   			<li>
  	   				<span>9</span>
  	   				<p>软件111</p>
  	   			</li>
  	   			<li>
  	   				<span>10</span>
  	   				<p>软件111</p>
  	   			</li>
  	   		</ul>
  	   	    
  	   	</div>
  	   	<div class="game-banner">
  	   	    
  	   	</div>
  	   	
  	       
  	   </div>
  	     <!--//right-box-->
  	</div>
<!--//content-->
<!--content-->
<div class="content" style="margin-top: 20px;">
    <el-tabs type="border-card">
  <el-tab-pane label="不限">
  	<div class="min-height">
  	   		<router-link to="details">
  	    <dl class="software-box">
	<dt>
		<h3>LibSVM <span class="jian-bg">荐</span><span class="guo-bg">国</span><span class="xin-bg">信</span></h3>
		<p class="p">
			<span class="lable">很好</span>
				<span class="lable">可以用</span>
		</p>
			<p class="p">版本：3.23</p>
			<p class="p">License：BSD-3-Clause</p>
			<span class="pg-ico">已评估</span>
	</dt>
	<dd>LibSVM是由台湾大学林智仁(Chih-Jen Lin)教授等在2001年开发的基于支持向量机(support vector machine，SVM)实现的开源库。它主要用于分类(支持二分类和多分类)和回归，并且提供了交叉检验的功能。LibSVM具有操作简单、便于使用、需要调节的参数少、运算速度快的特点，且它是一个开源软件，具有较强的可扩展性。</dd>
	</dl>
	</router-link>
	<router-link to="details">
  	    <dl class="software-box">
	<dt>
		<h3>LibSVM <span class="jian-bg">荐</span><span class="guo-bg">国</span><span class="xin-bg">信</span></h3>
		<p class="p">
			<span class="lable">很好</span>
				<span class="lable">可以用</span>
		</p>
			<p class="p">版本：3.23</p>
			<p class="p">License：BSD-3-Clause</p>
			<span class="pg-ico">已评估</span>
	</dt>
	<dd>LibSVM是由台湾大学林智仁(Chih-Jen Lin)教授等在2001年开发的基于支持向量机(support vector machine，SVM)实现的开源库。它主要用于分类(支持二分类和多分类)和回归，并且提供了交叉检验的功能。LibSVM具有操作简单、便于使用、需要调节的参数少、运算速度快的特点，且它是一个开源软件，具有较强的可扩展性。</dd>
	</dl>
	</router-link>
	<router-link to="details">
  	    <dl class="software-box">
	<dt>
		<h3>LibSVM <span class="jian-bg">荐</span><span class="guo-bg">国</span><span class="xin-bg">信</span></h3>
		<p class="p">
			<span class="lable">很好</span>
				<span class="lable">可以用</span>
		</p>
			<p class="p">版本：3.23</p>
			<p class="p">License：BSD-3-Clause</p>
			<span class="pg-ico">已评估</span>
	</dt>
	<dd>LibSVM是由台湾大学林智仁(Chih-Jen Lin)教授等在2001年开发的基于支持向量机(support vector machine，SVM)实现的开源库。它主要用于分类(支持二分类和多分类)和回归，并且提供了交叉检验的功能。LibSVM具有操作简单、便于使用、需要调节的参数少、运算速度快的特点，且它是一个开源软件，具有较强的可扩展性。</dd>
	</dl>
	</router-link>
	<el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
  	</div>
  </el-tab-pane>
  <el-tab-pane label="一天内">
  		<div class="min-height">
  	    222
  	</div>
  </el-tab-pane>
    <el-tab-pane label="一天内">
  		<div class="min-height">
  	    222
  	</div>
  </el-tab-pane>
    <el-tab-pane label="一周内">
  		<div class="min-height">
  	    222
  	</div>
  </el-tab-pane>
    <el-tab-pane label="一月内">
  		<div class="min-height">
  	    222
  	</div>
  </el-tab-pane>
    <el-tab-pane label="半年内">
  		<div class="min-height">
  	    222
  	</div>
  </el-tab-pane>

</el-tabs>
</div>
<!--//content-->
  
   <foot></foot>
  </div>
</template>

<script>
	import searchTop from './searchTop.vue';
		import foot from './footer.vue';
export default {
  name: 'allClassify',
  components: {
			foot,
			searchTop
		
		},
  data () {
    return {
    	
    
      
    }
  },
  mounted(){
  	
  },
   methods: {
   	
   }
}
</script>

<style>
	.allClassify{
	background: #f8f8f8;	
	}
	
	.allClassify .content{
		
	}
	.allClassify .min-height{
		padding: 5px 0 15px;
		min-height: 500px;
	}
	.allClassify .content .left-box{
		float: left;
		padding: 7px 0;
		width: 960px;
		background: #fff;
	}
	.allClassify .content .left-box li{
		padding: 5px 10px 10px;
		width: 940px;
		border-bottom: 1px solid #dedede;
	}
	.allClassify .content .left-box li h4{
		width: 100%;
		font-size: 16px;
		color: #666;
		line-height: 46px;
		font-weight: normal;
	}
	.allClassify .content .left-box li p{
		overflow: hidden;
		width: 100%;
	}
	.allClassify .content .left-box li p span{
		display: inline-block;
		float: left;
		margin-right: 20px;
		color: #999;
		font-size: 14px;
		line-height: 26px;
		cursor: pointer;
	}
	.allClassify .content .left-box li p span:hover{
		color: #b81027;
	}
	.allClassify .content .right-box{
		float: right;
		width: 230px;
	}
	.allClassify .content .right-box .num-list{
		padding: 10px 0;
		width: 100%;
		background: #fff;
	}
	.allClassify .content .right-box .num-list h3{
		width: 100%;
		line-height: 36px;
		font-size: 16px;
		font-weight: normal;
		color: #666;
		text-indent: 10px;
		border-bottom: 1px solid #dedede;
	}
	.allClassify .content .right-box .num-list ul{
		margin: 5px;
	}
	.allClassify .content .right-box .num-list ul li{
		overflow: hidden;
		line-height: 30px;
		
	}
	.allClassify .content .right-box .num-list ul li span{
		float: left;
		margin: 7px 0 0 10px;
		width: 26px;
		height: 18px;
		line-height: 18px;
		text-align: center;
		font-size: 14px;
		font-weight: bold;
		color: #fff;
		background: #7c7c7c;
	}
	.allClassify .content .right-box .num-list ul li .span1{
		background: #e76112;
	}
	
	.allClassify .content .right-box .num-list ul li p{
		float: left;
		margin-left: 10px;
		color: #666;
	}
	.allClassify .content .right-box .game-banner{
		margin-top: 10px;
		width: 230px;
		height: 218px;
		background: url(../assets/banner/game_banner.jpg) no-repeat;
	}
</style>
