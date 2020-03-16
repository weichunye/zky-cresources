<template>
	<div class="enter">
		<searchTop></searchTop>
    <div class="banner">
      <div class="banner-box">
        <div class="ranking">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="周热门" name="first">
             <ul>
               <li v-for="(item, index) in hotList" :key="index">
                 {{item.softName}}
               </li>
             </ul>
            </el-tab-pane>
            <el-tab-pane label="月热门" name="second">
              <ul>
                <li v-for="(item, index) in hotList" :key="index">
                  {{item.softName}}
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="年热门" name="third">
              <ul>
                <li v-for="(item, index) in hotList" :key="index">
                  {{item.softName}}
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <div class="content-bg">
      <div class="content-box">
        <div class="recommend">
          <dl v-for="(item,index) in recommendedList" :key="index">
            <dt>
              <img :src="baseUrl+'/'+item.softLogo" alt="">
              <div class="softwaretype">
              <span class="em-bg-1">{{item.isSelf}}</span>
              </div>
            </dt>
            <dd>
              <h3>{{item.softName}}</h3>
            <button>
              查看详情
            </button>
            </dd>
          </dl>
        </div>
        <!--推荐-->
        <div  v-for="(item,index) in softList" :key="index">
        <div class="headline">
          <h3 :style="{color:index==0?'#1c4b8f':index==1?'#13a59b':index==2?'#b33d00':'#a96908'}">{{item.ctyName}}</h3>
          <p class="english">OPEN SOURCE</p>
          <span :style="{backgroundColor:index==0?'#1c4b8f':index==1?'#13a59b':index==2?'#b33d00':'#a96908'}" class="bottom-tit"></span>
        </div>
        <div  class="soft-box" >
          <dl v-for="(todo,k) in item.softList">
            <dt><h3>{{todo.softName}}</h3> <img :src="baseUrl+'/'+todo.softLogo" alt=""></dt>
            <dd><span class="blur">{{todo.softCategoryName}}</span><span class="grey">{{todo.opensourceType}}</span></dd>
            <dd><p>{{todo.softIntroduce}}</p></dd>
          </dl>

        </div>
        </div>
      </div>
    </div>

		<div class="game-banner">
			<router-link target="_blank" :to="'activityGame?id='+activityIngId">
				<div class="button-box">
					<router-link target="_blank" :to="'activityGame?id='+activityIngId+'&&acId=acTd1'">

					</router-link>
					<router-link target="_blank" :to="'activityGame?id='+activityIngId+'&&acId=acTd2'">

					</router-link>
					<router-link target="_blank" :to="'activityGame?id='+activityIngId+'&&acId=acTd3'">

					</router-link>
					<router-link target="_blank" :to="'activityGame?id='+activityIngId+'&&acId=acTd4'">

					</router-link>
				</div>
			</router-link>

		</div>
		<!--分类应用领域-->
		<div id="contype" class="content contype ">
			<div v-for="item in indexSoftList" class="soft-con">
				<h4 class="classfiy">
   			{{item.ctyName}}
   		</h4>
				<el-tabs>
					<el-tab-pane v-for="secondItem in item.sonList" :label="secondItem.ctyName">
						<router-link :to="{path:'/list',query:{categoryId:secondItem.id,categoryName:secondItem.ctyName,ParentName:'首页'}}"><span class="more">更多</span></router-link>
						<div class="el-tab-software">
							<router-link v-if="secondItem.softList.length>0" v-for="thitdItem in secondItem.softList" :to="{path:'/details',query:{id:thitdItem.id,ParentName:'首页'}}">
								<dl class="soft-box">
									<dt>
		<h3>{{thitdItem.softName}} 	<span v-if="thitdItem.isHot==1" class="hot-bg">热</span>
   	   					<span v-if="thitdItem.isRecommend==1" class="jian-bg">荐</span>
   	   					<span v-if="thitdItem.isChina==1" class="guo-bg">国</span>
   	   						<span v-if="thitdItem.isEvaluate==1" class="xin-bg">信</span></h3>
		<!--<p class="p">
			<span class="lable">很好</span>
				<span class="lable">可以用</span>
		</p>-->
			<!--<p class="p">版本：{{thitdItem.softVersion}}</p>
			<p class="p">License：{{thitdItem.softLicense}}</p>-->
		<!--	<span  v-if="thitdItem.isEvaluate==1" class="pg-ico">已评估</span>-->
	</dt>
									<dd>{{thitdItem.softIntroduce}}...</dd>
									<dd class="dd">
										<span class="span spanbg">{{thitdItem.programmingLanguage}}</span> <span class="span">{{thitdItem.softVersion}}</span>
										<!--<span class="span">{{thitdItem.userInterface}}</span>--><span class="span"> {{thitdItem.opensourceType}}</span><span class="span" v-if="thitdItem.operatingSystem"> {{thitdItem.operatingSystem}}</span><span class="spantime">{{thitdItem.createTime.substring(0, 10)}}</span><span class="num">{{thitdItem.browseNum}}人浏览</span>
									</dd>
								</dl>
							</router-link>
							<div v-if="secondItem.softList.length==0" class="empty-tit"></div>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>

		</div>
		<div class="aboutLink">
			<h3>相关链接</h3>
			<div class="linkbox">
				<a href="http://www.cstcloud.cn/" target="_blank"><img src="../assets/img/link_logo_4.png" /></a>
				<a href="http://www.cnic.cn/front/pc.html#/cnicSite/home" target="_blank"> <img src="../assets/img/link_logo_1.png" /></a>
				<a href="http://www.cseep.cn" target="_blank"><img src="../assets/img/link_logo_2.png" /></a>
				<a href="http://www.cstos.cstcloud.cn" target="_blank"><img src="../assets/img/bottom_logo.png" /></a>
			</div>
		</div>
		<foot></foot>
	</div>
</template>

<script>

  import searchTop from './searchTop.vue';
	import foot from './footer.vue';
	export default {
		name: 'Enter',
		components: {
      searchTop,
			foot

		},
		data() {
			return {
			  baseUrl:window.SITE_CONFIG['apiURL'],
        activeName: 'second',
				menuList: [],
				hotList: [], //热门推荐
				recommendedList: [], //推荐列表
        softList: [], //软件列表
				indexSoftList: [],
				activeListIng: [],
				activeEnd: [],
				activityIngId: '',
				//正在进行的竞赛

			}
		},
		mounted() {
		  //热门搜索
      this.getHotSoft(1)
      this.getRecommendedList()
      this.getSoftList()
		},
		methods: {
      //排行tab
      handleClick(tab, event) {
        console.log("tab",tab.index, "event",event);
        let newTab=parseFloat(tab)+1
        this.getHotSoft(parseFloat(tab.index)+1)
      },

      //获取推荐列表
      getRecommendedList(){
        var params = new URLSearchParams();
        params.append("type", 2);
        params.append("limit",4);
        params.append("page", 1);
        this.$http.post('/haoweb/web/soft/querySoftListByConditionForBrowseNum',params)
          .then(({data:res })=>{
            this.recommendedList=res.page.records
            console.log("推荐",res)
          })
      },
      //获取热门数据
      getHotSoft(type){
        var params = new URLSearchParams();
        params.append("hotType", type);
        params.append("limit", 10);
        params.append("page", 1);
        this.$http.post('/haoweb/web/soft/hotSoftList',params)
          .then(({data:res })=>{
            this.hotList=res.list.records
          })
      },
      //获取首页数据
      getSoftList(){
        this.$http.post('/haoweb/web/soft/indexSoftListByCtyId')
          .then(({data:res })=>{
            this.softList=res.list
          })
      },
    }
	}
</script>
<style>
	.enter {
		background: #fff;
	}
	.enter .contype {
		position: relative;
	}

	.enter .content {
		overflow: hidden;
		margin: 0 auto 0;
		width: 1200px;
	}

	.enter .soft-con {
		float: left;
		margin: 5px;
		padding: 10px 35px;
		width: 520px;
		height: 750px;
		background: #fff;
	}

	.enter .contenttop {
		overflow: visible;
		margin: 10px auto 0;
		width: 1200px;
		height: 530px;
	}
  .enter  .banner{
    width: 100%;
    height: 400px;
    background: #0b54f9;
  }
  .enter  .banner  .banner-box{
    position: relative;
    margin: 0 auto;
    width: 1200px;
    height: 400px;
  }
  .enter  .banner .banner-box .ranking{
    float: right;
    width: 250px;
    height: 400px;
    background: #000;
  }
  .enter  .banner .banner-box .ranking li{
    width: 100%;
    line-height: 26px;
    color: #fff;
  }
  .enter  .banner .banner-box .ranking .el-tabs__item{
    color: #fff;
  }
  .enter .content-bg{
    width: 100%;
    background: url("../assets/img/content_bg.jpg") center top no-repeat;
  }
  .enter .content-box{
    margin: 10px auto;
    width: 1200px;
  }
  .enter .content-box .recommend{
    display: block;
    width: 100%;
    height: 300px;

  }
  .enter .content-box .recommend dl{
    padding: 25px 0 0;
    float: left;
    width: 230px;
    height: 200px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 18px;
  }
  .enter .content-box .recommend dl dt{
    position: relative;
    width: 100%;
    text-align: center;
  }
  .enter .content-box .recommend dl dt .softwaretype{
    position: absolute;
    right: -1px;
    top: -26px;
  }
  .enter .content-box .recommend dl dt .softwaretype span{
    display: block;
    width: 0;
    height: 0;
    color: #fff;
    line-height: 30px;
    text-indent: 25px;
    border-bottom: 50px solid transparent;
    border-left: 50px solid transparent;
  }
  .enter .content-box .recommend dl dt .softwaretype .em-bg-1{
    border-right: 50px solid #639cd9;
  }
  .enter .content-box .recommend dl dt .softwaretype .em-bg-1{
    border-right: 50px solid #52c967;
  }

  .enter .content-box .recommend dl dt img{
    margin: 15px 0;
    height: 56px;
    width: auto;
  }
  .enter .content-box .recommend dl dd h3{
    width: 100%;
    font-size: 18px;
    color: #000;
    line-height: 50px;
    text-align: center;
  }
  .enter .content-box .recommend dl dd button{
    display: block;
    margin: 10px auto;
    width: 110px;
    height: 30px;
    border: 1px solid #e5e5e5;
    border-radius: 20px;
    text-align: center;
    line-height: 30px;
    color: #b0afaf;
    background: #fff;
  }
  .enter .content-box .headline{
    position: relative;
    width: 100%;
    height: 80px;
    text-align: center;
  }
  .enter .content-box .headline h3{
    width: 100%;
    font-size: 18px;
    line-height: 50px;
    text-align: center;
  }
  .enter .content-box .headline .english{
    position: absolute;
    left: 50%;
    bottom: 10px;
    margin-left: -75px;
    width: 150px;
    font-size: 16px;
    color: #000;
    padding: 0 10px;
    background: #fff;
    z-index: 2;
  }
  .enter .content-box .headline .bottom-tit{
    display: block;
    margin: 10px auto;
    width: 500px;
    height: 1px;
    background: #85adea;
  }
  .enter .content-box .soft-box{
    overflow: hidden;
    margin: 15px 0;
    width: 100%;
  }

  .enter .content-box .soft-box dl{
    float: left;
    margin: 0 1%;
    margin-top: 15px;
    width: 48%;
  }
  .enter .content-box .soft-box dl dt{
    overflow: hidden;
  }
  .enter .content-box .soft-box dl dt h3{
    float: left;
    font-size: 16px;
    line-height: 30px;
    color: #666;
  }
  .enter .content-box .soft-box dl dt img{
    float: left;
    margin: 8px 0 0 10px;
    width: 17px;
    height: 17px;
  }
  .enter .content-box .soft-box dl dd{
    margin-top: 10px;
    overflow: hidden;
    width: 100%;
  }
  .enter .content-box .soft-box dl dd span{
    margin-right: 8px;
    font-size: 12px;
    line-height: 12px;
    border-radius: 5px;
    padding: 1px 5px;
  }
  .enter .content-box .soft-box dl dd .blur{
    color: #fff;
    background: #558ebb;
  }
  .enter .content-box .soft-box dl dd .grey{
    color: #666;
    background: #d9d9d9;
  }
  .enter .content-box .soft-box dl dd p{
    height: 50px;
    font-size: 14px;
    color: #333;
    line-height: 24px;
  }

  .enter .aboutLink {
    overflow: hidden;
    margin: 15px auto;
    padding: 0 40px;
    width: 1110px;
    height: 140px;
    background: #fff;
  }

  .enter .aboutLink h3 {
    font-size: 20px;
    color: #000;
    line-height: 70px;
  }

  .enter .aboutLink .linkbox {
    overflow: hidden;
    margin-top: 5px;
  }

  .enter .aboutLink .linkbox img {
    float: left;
    margin-right: 40px;
    width: auto;
    height: 40px;
  }
</style>
