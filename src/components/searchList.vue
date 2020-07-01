<template>
	<div class="list">
		<searchTop @serachList="popupMsg"></searchTop>
		<!--面包屑-->
		<!--  		<div class="crumbs">
  		<span>首頁 ></span>
  		 <span>软件列表 </span>
  		</div>-->
		<!--//面包屑-->
		<!--content-->
		<div class="content" style="margin-top: 20px;">
			<!--	<h2>软件分类名称</h2>-->
			<div class="el-tab-software">
				<router-link v-if="softData.length>0" v-for="thitdItem in softData" :to="{path:'/details',query:{id:thitdItem.id}}">
					<dl class="software-box">
						<dt>
		<h3>{{thitdItem.softName}} 	<sup v-if="thitdItem.isHot==1" class="sub">热</sup>
	   					<sup v-if="thitdItem.isRecommend==1" class="suba">荐</sup>
	   					<sup v-if="thitdItem.isChina==1" class="subchania">国</sup>
	   						<sup v-if="thitdItem.isEvaluate==1" class="subping">信</sup></h3>
<!--		<p class="p">
			<span class="lable">很好</span>
				<span class="lable">可以用</span>
		</p>-->
			<p class="p">版本：{{thitdItem.softVersion}}</p>
			<p class="p">License：{{thitdItem.softLicense}}</p>
			<span  v-if="thitdItem.isEvaluate==1" class="pg-ico">已评估</span>
	</dt>
						<dd>{{thitdItem.softIntroduce | reBytesStr}}</dd>
						<dd class="dd">
							<span class="span spanbg">{{thitdItem.programmingLanguage}}</span>
              <span class="span">{{thitdItem.softVersion}}</span>
							<!--<span class="span">{{thitdItem.userInterface}}</span>-->
              <!--<span class="span"> {{thitdItem.opensourceType}}</span>-->
              <span class="span" v-if="thitdItem.operatingSystem"> {{thitdItem.operatingSystem}}</span>
              <span class="spantime">{{thitdItem.createTime.substring(0, 10)}}</span>
							<span class="num">{{thitdItem.browseNum}}人浏览</span>
						</dd>
					</dl>
				</router-link>
				<div v-if="softData.length==0" class="empty-tit"></div>
			</div>
			<el-pagination style=" padding:30px 0 20px; text-align: center" layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :total="totalPage" :current-page.sync="pageNum" :page-size="limit">
			</el-pagination>
		</div>
		<!--//content-->
		<foot></foot>
	</div>
</template>
<script>
	import searchTop from './searchTop.vue';
	import foot from './footer.vue';
	import baseUrl from '../../config/index.js'
	export default {
		name: 'searchList',
		components: {
			foot,
			searchTop
		},
		data() {
			return {
				softData: [],
				totalPage: 0,
				// limit: 1,
        limit: 5,
				pageNum: 1,
        keyWord:this.$route.query.keyword?this.$route.query.keyword:''

			}
		},
		mounted() {
			//获取信息
      console.log("加载")
			this.getList()
		},
    watch: {
      '$route'(to, from) {
        console.log("this.$route.query.keyword",this.$route.query.keyword)
        this.keyWord=this.$route.query.keyword?this.$route.query.keyword:''
        console.log("监控")
        this.getList()
        //监控路由，更新tab
      }
    },
    filters:{
      reBytesStr: function(str) {
        str=str.replace(/<\/?.+?>/g,"").replace(/ /g,"").replace(/&(\S*)?;/g,"")
        if((!str && typeof(str) != 'undefined')) {
          return '';
        }
        var num = 0;
        var str1 = str;
        var str = '';
        for(var i = 0, lens = str1.length; i < lens; i++) {
          num += ((str1.charCodeAt(i) > 255) ? 2 : 1);
          if(num > 360) {
            break;
          } else {
            str = str1.substring(0, i + 1);
          }
        }
        if(num>360){
          return str+"……";
        }else{
          return str
        }
      }
    },
		methods: {
			getList: function() {
				var params = new URLSearchParams();
				params.append("page", this.pageNum);
				params.append("limit", this.limit);
				params.append("keyword", this.keyWord);
				params.append("itemType", this.$route.query.itemType);
				this.$http.post('/haoweb/web/soft/querySoftListByKeyword', params)
					.then((response)=>{
            this.softData = response.data.page.records;
            console.log("this.softData",this.softData)
            this.totalPage = response.data.page.total
            this.$nextTick(function() {
              var curJ = $('.software-box')
              $(curJ).eq(curJ.length - 1).css('border', '0px solid #fff')
            })
          })
			},
			popupMsg: function(val) {
       /* console.log("子集传值")
				this.getList()*/
			},
			handleSizeChange(val) {
				this.pageSize = val;
				this.getList();
			},
			handleCurrentChange(val) {
				this.pageNum = val;
				this.getList();
			},

		}
	}
</script>

<style>
	.list {
		background: #f8f8f8;
	}

	.list .content {
    margin: 0 auto;
    width: 1200px;
    min-height: 400px;
		background: #fff;
	}

	.list .content h2 {
		padding-top: 10px;
		width: 100%;
		font-size: 16px;
		color: #666;
		line-height: 40px;
		text-indent: 10px;
		font-weight: normal;
	}

	.list .min-height {
		padding: 5px 0 15px;
		min-height: 500px;
	}

	.list .content .left-box {
		float: left;
		padding: 7px 0;
		width: 960px;
		background: #fff;
	}

	.list .content .left-box li {
		padding: 5px 10px 10px;
		width: 940px;
		border-bottom: 1px solid #dedede;
	}

	.list .content .left-box li h4 {
		width: 100%;
		font-size: 16px;
		color: #666;
		line-height: 46px;
		font-weight: normal;
	}

	.list .content .left-box li p {
		overflow: hidden;
		width: 100%;
	}

	.list .content .left-box li p span {
		display: inline-block;
		float: left;
		margin-right: 20px;
		color: #999;
		font-size: 14px;
		line-height: 26px;
		cursor: pointer;
	}

	.list .content .left-box li p span:hover {
		color: #b81027;
	}

	.list .content .right-box {
		float: right;
		width: 230px;
	}

	.list .content .right-box .num-list {
		padding: 10px 0;
		width: 100%;
		background: #fff;
	}

	.list .content .right-box .num-list h3 {
		width: 100%;
		line-height: 36px;
		font-size: 16px;
		font-weight: normal;
		color: #666;
		text-indent: 10px;
		border-bottom: 1px solid #dedede;
	}
  /*新增*/
  .software-box dt h3 sup{
    display:inline-block;
    margin: 0 5px 0 0;
    padding:1px 3px 5px 3px;
    height: 16px;
    font-style: normal;
    text-align: center;
    line-height: 16px;
    position: relative;
  }
  .software-box dt h3 sup::after{
    position: absolute;
    left:50%;
    margin-left:-7px;
    bottom:0;
    width:0;
    height:0;
    border-right:7px solid transparent;
    border-left:7px solid transparent;
    content:"";
  }
  .software-box dt h3 .sub{
    color:#fff;
    font-size: 12px;
    background:#ff0000;
  }
  .software-box dt h3 .sub::after{
    border-bottom:7px solid #fff;
  }
  .software-box dt h3 .suba{
    color:#fff;
    font-size: 12px;
    background:#ec9d2f;
  }
  .software-box dt h3 .suba::after{
    border-bottom:7px solid #fff;
  }

  .software-box dt h3 .subchania{
    color:#fff;
    font-size: 12px;
    background:#07b62c;
  }
  .software-box dt h3 .subchania::after{
    border-bottom:7px solid #fff;
  }
  .software-box dt h3 .subping{
    color:#fff;
    font-size: 12px;
    background:#672fd9;
  }
  .software-box dt h3 .subping::after{
    border-bottom:7px solid #fff;
  }
  /*新增*/
	.list .content .right-box .num-list ul {
		margin: 5px;
	}

	.list .content .right-box .num-list ul li {
		overflow: hidden;
		line-height: 30px;
	}

	.list .content .right-box .num-list ul li span {
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

	.list .content .right-box .num-list ul li .span1 {
		background: #e76112;
	}

	.list .content .right-box .num-list ul li p {
		float: left;
		margin-left: 10px;
		color: #666;
	}

	.list .content .right-box .game-banner {
		margin-top: 10px;
		width: 230px;
		height: 218px;
		background: url(../assets/banner/game_banner.jpg) no-repeat;
	}
</style>
