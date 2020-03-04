<template>
  <div class="activityList">
  	<searchTop></searchTop>
  	<!--面包屑-->
  	<div class="crumbs">
  		<span @click="back">首页 </span><span>&nbsp;&nbsp;>&nbsp;</span>
  		 <span>{{parentNameNew}} </span>   
  		</div>
  			<!--//面包屑-->
  
<!--content-->
	<!--竞赛天地-->
   	<div class="content">
 
  	

  	<div v-if="activitytype=='end'" class="el-tab-activity">
  		<router-link target="_blank" v-for="item in activeEnd" :to="{path:'/activityGame',query:{id:item.id}}">
  	<dl class="activity-box">
  					<dt>
					<h3>{{item.activityName}}<span class="gameend">【报名结束】</span></h3>
					<p>主办方:  {{item.sponsor}}</p>
					<p class="marT-10">报名时问: {{item.joinStartDate}} 一{{item.joinEndDate}}</p>
					<p>比赛时问: {{item.matchStartDate}} 一{{item.matchEndDate}}</p>
				</dt>
				<dd>
						<button class="btn-game btn-end">
							立即报名
						</button>
						<em>
							竞赛详情>
						</em>
				</dd>
			</dl>
					</router-link>
					<el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :total="totalPage" :current-page.sync="pageNum" :page-size="limit">
      </el-pagination>
				</div>
				<div v-else=""  class="el-tab-activity">
  		<router-link target="_blank" v-for="item in activeListIng" :to="{path:'/activityGame',query:{id:item.id}}">
				<dl class="activity-box">
				<dt>
					<h3>{{item.activityName}}<span v-if="item.status==2" class="gamestar">【正在报名】</span><span v-if="item.status==1" class="gamestar">【敬请期待】</span></h3>
					<p>主办方:  {{item.sponsor}}</p>
					<p class="marT-10">报名时问: {{item.joinStartDate}} 一{{item.joinEndDate}}</p>
					<p>比赛时问: {{item.matchStartDate}} 一{{item.matchEndDate}}</p>
				</dt>
				<dd>
						<button v-if="item.status==2" class="btn-game btn-apply">
							立即报名
						</button>
						<button v-if="item.status==1" class="btn-game btn-end">
							敬请期待
						</button>
						<p v-if="item.status==2">距离报名截止时间还有<span> {{item.surplusDays}}</span> 天</p>
						<em>
							竞赛详情>
						</em>
				</dd>
			</dl>
			</router-link>
			<el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :total="totalPage" :current-page.sync="pageNum" :page-size="limit">
      </el-pagination>
  	
			</div>


   	</div>
   		<!--竞赛天地-->
  
<!--//content-->
  
   <foot></foot>
  </div>
</template>

<script>
	import searchTop from './searchTop.vue';
		import foot from './footer.vue';
		import baseUrl from '../../config/index.js'

export default {
  name: 'activityList',
  components: {
			foot,
			searchTop
		
		},
  data () {
    return {
		softData:[],
			totalPage:0,
		limit:5,
		pageNum:1,
	activeListIng:[],
    	activeEnd:[],
    	activitytype:'',
		parentNameNew:''
    	
    
      
    }
  },
  mounted(){
  	var _this=this;
  	_this.activitytype=_this.$route.query.type;
  	_this.parentNameNew=_this.activitytype=='end'?'已结束活动':'正在进行活动'
  	if(_this.activitytype=='end'){
  			//活动已结束展示
  	_this.activeDataList('activeEnd','/web/activity/queryActivityListByCondition ','3')
  	}else{
  		//活动正在报名展示
  	_this.activeDataList('activeListIng','/web/activity/queryJoinActivityListByCondition','1,2')
  	}
	
  	
  		
  	
  },
   methods: {  
   	activeDataList:function(ele,url,satus){
   		var _this=this;
   	var params = new URLSearchParams();
  	params.append("page", _this.pageNum);
  	params.append("limit", _this.limit);
  	params.append("status", satus);
		_this.axios.post(baseUrl.baseUrl+url,params)
  	.then(function(response){
  		_this[ele]=response.data.page.list;
  	
  		
  	})
   	
   	
   	},
   		back:function(){
   		this.$router.go(-1);//返回上一层
   	},
    handleSizeChange(val) {
        this.pageSize = val;
        if(this.activitytype=='end'){
        	_this.activeDataList('activeEnd','/web/activity/queryActivityListByCondition ',3)
        }else{
        		_this.activeDataList('activeListIng','/web/activity/queryJoinActivityListByCondition',2)
        }
      },
      handleCurrentChange(val) {
        this.pageNum = val;
       if(this.activitytype=='end'){
        	_this.activeDataList('activeEnd','/web/activity/queryActivityListByCondition ',3)
        }else{
        		_this.activeDataList('activeListIng','/web/activity/queryJoinActivityListByCondition',2)
        }
      },
   		
   },
   	
}
</script>

<style>
	.list{
	background: #f8f8f8;	
	}
	
	.activityList .content{
		background: #fff;
		min-height: 600px;
	}
	
</style>
