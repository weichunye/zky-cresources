<template>
  <div class="activityGame">
  	<!--banner-->
  	<div class="banner-top">
  		<div class="reposbox">
  			<div class="session-num">
  			    {{activityData.periodNumber}}
  			</div>
  			
  			<div v-if="activityData.status==1" class="game-state-nostart">
  			    
  			</div>
  				<div v-if="activityData.status==2" class="game-state-start">
  			    
  			</div>
  				<div v-if="activityData.status==3" class="game-state-end">
  			    
  			</div>
  		    <div class="game-state">
  		<!--    	2019年5月1日正式开启报名-->
  		    	  {{activityData.statusDescribe}}
  		        
  		    </div>
  		    <div class="game-time">
  		    {{activityData.startDate}}	&nbsp;&nbsp;&nbsp;至&nbsp;&nbsp;&nbsp; {{activityData.endDate}}
  		        
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
  	    <p>     {{activityData.purpose}}</p>
  	</div>
  		<!--1-->
  			<!--2-->
  	  <div class="title-top title-top2">
  		<span class="span1">2</span>
  		<span class="span2">日程安排和比赛流程</span>
  	</div> 
  	<img  class="stepimg" :src="activityData.scheduleProcess" alt="日程安排和比赛流程"/>
  		<!--2-->
  		<!--3-->
  		 <div class="title-top title-top1">
  		<span class="span1">3</span>
  		<span class="span2">参赛方式</span>
  	</div> 
  	<div class="entry-mode">
  	{{activityData.matchWay}}
  	    
  	</div>
  	<!--3-->
  	<!--4-->
  	 <div class="title-top title-top1">
  		<span class="span1">4</span>
  		<span class="span2">作品评审</span>
  	</div> 
  	<div class="review-top">
  	    
  	</div>
  	<div v-html="activityData.worksReview" class="review-center">
  		
  	</div>
  	<div class="review-bottom">
  	    
  	</div>
  		<!--4-->
  	</div>
  		<!--con-//W1200-->
  		<div class="bottom-box">
  			<div class="bottom-box-top">
  			    
  			</div>
  			<div class="prize-box">
  				<ul>
  					<li class="li1">{{activityData.firstAward}}</li>
  						<li class="li2">{{activityData.secondAward}}</li>
  							<li class="li3">{{activityData.thirdAward}}</li>
  							<li class="li4">{{activityData.potentialAward}}</li>
  				</ul>
  			  <p class="prize4">
  				所有报名参与大赛未获得奖项的有效选手，均将获得参赛纪念证书，软件可以在“中国科技云”科研开源软件社区发布。
  			</p>
  			</div>
  			
  			 <p class="copy">
  				本次活动最终解释权归中科院所有
  			</p>
  			 
  		    
  		</div>
  		
  	
  			
  	
  </div>
</template>

<script>
	import baseUrl from '../../config/index.js'
export default {
  name: 'activityGameNoStart',
  data () {
    return {
    	activityData:''
    
      
    }
  },
  mounted(){
  	//获取活动基本信息
  	   	var _this=this;
  	var params = new URLSearchParams();
  	params.append("activityId", 2);
	_this.axios.post(baseUrl.baseUrl+'/web/activity/activityInfo ',params)
  	.then(function(response){
  		_this.activityData=response.data.activity;
  		console.log("_this.activityData",	_this.activityData)
  	})
  	
  },
   methods: {

  	
   }
}
</script>

<style>
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
 			padding: 0px 30px;
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
 	

</style>
