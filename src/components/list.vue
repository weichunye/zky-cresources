<template>
  <div class="list">
  	<searchTop></searchTop>
  	<!--面包屑-->
  	<div class="crumbs">
   			<router-link :to="{path:'/'}"><span>首页</span></router-link>
			<span>&nbsp;&nbsp;>&nbsp;</span>
			<span @click="back">{{parentNamenew}}</span><span v-if="parentNamenew">&nbsp;&nbsp;>&nbsp;</span>
			<span>{{categoryName}} </span>

  		</div>
  			<!--//面包屑-->

<!--content-->
<div class="content" style="margin-top: 20px;">
	<h2>{{categoryName}}</h2>
  <div class="box-over">
     <!-- <ul class="aside left-nav-public">
        <li v-for="(item,index) in leftMenu" :class="{'left-nav-active':item==='jswd'}" @click="handleMenu(item.id)">{{item.ctyName}} </li>
      </ul>-->
<!--      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu  v-for="(item,index) in softTypeList" :key="index" :index="item.value">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.label}}</span>
          </template>
          <el-submenu v-for="(seocond,k) in item.children" :key="k"  :index="seocond.value">
            <template slot="title">{{seocond.label}}</template>
            <el-menu-item  v-for="(thitd,j) in seocond.children" :key="j" :index="thitd.value">{{thitd.label}}</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>-->
		<div class="el-tab-software">
				<router-link  v-if="softData.length>0" v-for="thitdItem in softData" :to="{path:'/details',query:{id:thitdItem.id,ParentName:categoryName}}">
		    <dl class="software-box">
		<dt>
			<h3>{{thitdItem.softName}} 	<span v-if="thitdItem.isHot==1" class="hot-bg">热</span>
		   					<span v-if="thitdItem.isRecommend==1" class="jian-bg">荐</span>
		   					<span v-if="thitdItem.isChina==1" class="guo-bg">国</span>
		   					<!--	<span v-if="thitdItem.isEvaluate==1" class="xin-bg">信</span>--></h3>
		<!--	<p class="p">
				<span class="lable">很好</span>
					<span class="lable">可以用</span>
			</p>-->
				<p class="p">版本：{{thitdItem.softVersion}}</p>
				<p class="p">License：{{thitdItem.softLicense}}</p>
				<span  v-if="thitdItem.isEvaluate==1" class="pg-ico">已评估</span>
		</dt>
		<dd>{{thitdItem.softIntroduce}}</dd>
	<dd class="dd">
									<span class="span spanbg">{{thitdItem.programmingLanguage}}</span> <span class="span">{{thitdItem.softVersion}}</span><!--<span class="span">{{thitdItem.userInterface}}</span>--><span class="span" > {{thitdItem.opensourceType}}</span><span class="span" v-if="thitdItem.operatingSystem"> {{thitdItem.operatingSystem}}</span><span class="spantime">{{thitdItem.createTime.substring(0, 10)}}</span><span class="num">{{thitdItem.browseNum}}人浏览</span>
								</dd>
		</dl>
		</router-link>
		<div v-if="softData.length==0" class="empty-tit"></div>
		</div>
  </div>
	<el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :total="totalPage" :current-page.sync="pageNum" :page-size="limit">
	      </el-pagination>
</div>
<!--//content-->

   <foot></foot>
  </div>
</template>

<script>
	import searchTop from './searchTop.vue';
  import foot from './footer.vue';
export default {
  name: 'list',
  components: {
			foot,
			searchTop

		},
  data () {
    return {
		softData:[],
		totalPage:0,
    queryObj:{},
    queryType:'',
      softTypeList:[],
		limit:5,
		pageNum:1,
		categoryName:'',
		parentName:'',
		parentNamenew:'',
    ifCurrnetPage:false,
    menuId:1
    }
  },
  mounted(){
	this.queryObj=this.$route.query;
	this.menuId=this.queryObj.categoryId
	console.log("categoryName",this.categoryName)
	this.parentNamenew = this.$route.query.ParentName == "首页" ? '' : this.$route.query.ParentName;
    //获取软件分类
    this.$http.post('/haoweb/web/soft/softCtyAllList',"")
      .then(({data:res })=>{
        this.softTypeList=res.list
      })
    this.getSoftList()
  },
  watch: {
    '$route'(to, from) {
      this.queryObj=this.$route.query;
      this.menuId=this.queryObj.categoryId

      this.getSoftList()
      //监控路由，更新tab
    }
  },
   methods: {

     //按钮点击事件
     handleMenu(id){
       this.ifCurrnetPage=true
       this.menuId=id
       this.getSoftList()
     },
   	//获取信息
     getSoftList(){
       var params = new URLSearchParams();
         console.log("本页id",this.queryObj)
         if(this.queryObj.type==1){
           params.append("categoryId", this.menuId);
         }else if(this.queryObj.type==2){
           params.append("categoryTwo", this.menuId);
         }else{
           params.append("categoryThree", this.menuId);
         }
       params.append("limit", this.limit);
       params.append("page", this.pageNum);
       this.$http.post('/haoweb/web/soft/softListByCategoryId', params)
         .then(({data:res })=>{
           console.log("根据软件分类id查询软件列表",res)
           this.softData=res.list.records
           this.totalPage=res.list.total
         })
     },
   		back:function(){
   		this.$router.go(-1);//返回上一层
   	},
	 handleSizeChange(val) {
	  this.pageSize = val;
	  this.getSoftList( this.menuId);
	},
	handleCurrentChange(val) {
	  this.pageNum = val;
	  this.getSoftList(this.menuId);
	},
     handleOpen(key, keyPath) {
       console.log(key, keyPath);
     },
     handleClose(key, keyPath) {
       console.log(key, keyPath);
     }
   }
}
</script>

<style>
	.list{
	background: #f8f8f8;
	}
.list .left-menu{
  float: left;
  width: 200px;
 /* background: #dedede;*/
}
  .list .el-tab-software{
    margin: 0 auto;
    width: 1200px;
  }
	.list .content{
    margin: 10px auto;
    width: 1200px;
		background: #fff;
	}
	.list .content h2{
		padding-top: 10px;
		width: 100%;
		font-size: 16px;
		color: #666;
		line-height: 40px;
		text-indent: 10px;
		font-weight: normal;
	}
	.list .min-height{
		padding: 5px 0 15px;
		min-height: 500px;
	}
	.list .content .left-box{
		float: left;
		padding: 7px 0;
		width: 960px;
		background: #fff;
	}
	.list .content .left-box li{
		padding: 5px 10px 10px;
		width: 940px;
		border-bottom: 1px solid #dedede;
	}
	.list .content .left-box li h4{
		width: 100%;
		font-size: 16px;
		color: #666;
		line-height: 46px;
		font-weight: normal;
	}
	.list .content .left-box li p{
		overflow: hidden;
		width: 100%;
	}
	.list .content .left-box li p span{
		display: inline-block;
		float: left;
		margin-right: 20px;
		color: #999;
		font-size: 14px;
		line-height: 26px;
		cursor: pointer;
	}
	.list .content .left-box li p span:hover{
		color: #b81027;
	}
	.list .content .right-box{
		float: right;
		width: 230px;
	}
	.list .content .right-box .num-list{
		padding: 10px 0;
		width: 100%;
		background: #fff;
	}
	.list .content .right-box .num-list h3{
		width: 100%;
		line-height: 36px;
		font-size: 16px;
		font-weight: normal;
		color: #666;
		text-indent: 10px;
		border-bottom: 1px solid #dedede;
	}
	.list .content .right-box .num-list ul{
		margin: 5px;
	}
	.list .content .right-box .num-list ul li{
		overflow: hidden;
		line-height: 30px;

	}
	.list .content .right-box .num-list ul li span{
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
	.list .content .right-box .num-list ul li .span1{
		background: #e76112;
	}

	.list .content .right-box .num-list ul li p{
		float: left;
		margin-left: 10px;
		color: #666;
	}
	.list .content .right-box .game-banner{
		margin-top: 10px;
		width: 230px;
		height: 218px;
		background: url(../assets/banner/game_banner.jpg) no-repeat;
	}
  .list .aside {
    width: 200px;
    background: #efefef;
    color: #000;
    font-size: 16px;
    margin-right: 15px;
    float: left;
  }
  .list .aside li {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #fff;
    width: 100%;
    cursor: pointer;
    position: relative;
    z-index: 1;
    text-align: center;
  }
  list .left-nav-active {
    height: 55px;
    color: #fff;
    background: #ec5051;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .left-nav-public li:before {
    position: absolute;
    left: 0;
    content: '';
    width: 0;
    background: #ec5051;
    height: 100%;
    z-index: -1;
    transition: all .3s linear;
    -webkit-transition: all .3s -webkit-transform linear;
    -moz-transition: all .3s -moz-transform linear;
  }

  .left-nav-public li:hover:before {
    position: absolute;
    left: 0;
    content: '';
    width: 100%;
    background: #ec5051;
    height: 100%;
  }

  .left-nav-public li a {
    display: block;
    width: 100%;
  }

  .left-nav-active {
    display: block;
    width: 100%;
    height: 55px;
    color: #fff;
    background: #ec5051;
    box-sizing: border-box;
  }
</style>
