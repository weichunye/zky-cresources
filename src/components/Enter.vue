<template>
	<div class="enter">
		<searchTop></searchTop>
    <div class="banner">
      <div class="banner-box">
        <el-carousel height="400px"  class="img-list">
           <el-carousel-item v-if="item.coverImg" v-for="(item,index) in bannerList" :key="index">
            <img :src="imgUrl+'/'+item.coverImg" alt="">
          </el-carousel-item>
        </el-carousel>
<!--        <div class="ranking">-->
<!--          <el-tabs v-model="activeName" @tab-click="handleClick">-->
<!--            <el-tab-pane label="周热门" name="first">-->
<!--             <ul>-->
<!--               <router-link  v-for="(item, index) in hotList":to="{path:'/details',query:{id:item.id,ParentName:'首页'}}"  :key="index">-->
<!--               <li>-->
<!--                 {{item.softName}}-->
<!--               </li>-->
<!--               </router-link>-->
<!--             </ul>-->
<!--            </el-tab-pane>-->
<!--            <el-tab-pane label="月热门" name="second">-->
<!--              <ul>-->
<!--                <router-link  v-for="(item, index) in hotList":to="{path:'/details',query:{id:item.id,ParentName:'首页'}}"  :key="index">-->
<!--                <li>-->
<!--                  {{item.softName}}-->
<!--                </li>-->
<!--                </router-link>-->
<!--              </ul>-->
<!--            </el-tab-pane>-->
<!--            <el-tab-pane label="年热门" name="third">-->
<!--              <ul>-->
<!--                <router-link  v-for="(item, index) in hotList":to="{path:'/details',query:{id:item.id,ParentName:'首页'}}"  :key="index">-->
<!--                  <li>-->
<!--                  {{item.softName}}-->
<!--                </li>-->
<!--                </router-link>-->
<!--              </ul>-->
<!--            </el-tab-pane>-->
<!--          </el-tabs>-->
<!--        </div>-->
        <div class="row">
          <div class="ranking">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane :label="$t('lang.popular1')" name="first">
                <ul>
                  <router-link  v-for="(item, index) in hotList":to="{path:'/details',query:{id:item.id,ParentName:'首页'}}"  :key="index">
                    <li>
                      <span class="num">{{item.sortNum}}</span>{{item.softName}}
                    </li>
                  </router-link>
                </ul>
              </el-tab-pane>
              <el-tab-pane :label="$t('lang.popular2')" name="second">
                <ul>
                  <router-link  v-for="(item, index) in hotList":to="{path:'/details',query:{id:item.id,ParentName:'首页'}}"  :key="index">
                    <li>
                      <span class="num">{{item.sortNum}}</span>{{item.softName}}
                    </li>
                  </router-link>
                </ul>
              </el-tab-pane>
              <el-tab-pane :label="$t('lang.popular3')" name="third">
                <ul>
                  <router-link  v-for="(item, index) in hotList":to="{path:'/details',query:{id:item.id,ParentName:'首页'}}"  :key="index">
                    <li>
                      <span class="num">{{item.sortNum}}</span>{{item.softName}}
                    </li>
                  </router-link>
                </ul>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
    <div class="content-bg">
      <div class="content-box">
        <div class="recommend ">
<!--          <router-link  v-for="(item, index) in recommendedList":to="{path:'/details',query:{id:item.id,ParentName:'首页'}}"  :key="index">-->
<!--                          <dl>-->
<!--                            <dt>-->
<!--                              <img :src="imgUrl+'/'+item.softLogo" alt="">-->
<!--                              <div class="softwaretype">-->
<!--                                <span class="em-bg-1">{{item.isSelf}}</span>-->
<!--                              </div>-->
<!--                          </dt>-->
<!--                            <dd>-->
<!--                              <h3>{{item.softName}}</h3>-->
<!--                              <button>-->
<!--                                查看详情-->
<!--                              </button>-->
<!--                            </dd>-->
<!--                          </dl>-->
<!--          </router-link>-->
          <el-carousel :interval="5000" arrow="always" height="300px" >
            <el-carousel-item v-for="(itm, idx) in recommendedList"  :key="idx">
              <router-link  v-for="(item, index) in itm":to="{path:'/details',query:{id:item.id,ParentName:'首页'}}"  :key="index">
                  <dl>
                      <dt>
                          <img v-if="item.softLogo" :src="imgUrl+'/'+item.softLogo" alt="">
                          <div class="softwaretype">
<!--                            <span class="em-bg-1">{{item.isSelf}}</span>-->
                            <span class="em-bg-1" v-if="item.softType.search('商业软件') != -1">{{item.softType.substr(0, 1)}}</span>
                            <span class="em-bg-1" v-else>{{item.softType.substr(1, 1)}}</span>
                          </div>
                      </dt>
                      <dd>
                      <h3>{{item.softName}}</h3>
                      <button>
                        {{$t('lang.todetail')}}
                      </button>
                    </dd>
                  </dl>
              </router-link>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!--细则-->
        <div class="Soft">
          <div class="title"><h3 class="h3">{{$t('lang.uploadingrule')}}</h3></div>
            <p class="text">
              本网站（网址：scihub.cstcloud.cn）向公众开放并提供开源软件相关服务。 在使用本网站前，敬请您仔细阅读以下各项使用条款（以下简称“本使用条款”）。您对本网站的使用(包括但不限于对本网站的访问、登录，对本网站内容的浏览和使用)，将被视为您自愿承诺接受本声明的约束。如果您对本使用条款的内容不能接受，您应当立即停止使用本网站并迅速离开。
            </p>
            <span class="img"><img src="../assets/img/bg_img.png" /></span>
          <ul>
            <li>
              <h4 class="tit"><span>知识产权声明</span><em></em></h4>
              <div class="pic">
                您同意遵守所有适用本网站的版权保护法律法规，以及所有本网站包含的补充性的版权说明或限制。本网站的内容均由相应的机构/个人上传、维护。对于本网站内容的任何使用请遵守内容所附带的授权协议。如不清楚相应的授权协议请询问上传该内容的机构/个人。
                <br>任何在scihub.cstcloud.cn上注册的帐号上传的内容的版权均归上传者所有，上传者承担所有被上传内容的版权责任及相应风险。
              </div>
            </li>
            <li>
              <h4 class="tit"><span>上传软件规范</span><em></em></h4>
              <div class="pic">
                开源软件的上传如有违反国家法律、法规或社会公共秩序、社会风气的，本网站及本网站方（包括但不限于本网站的主办单位等）不承担任何责任，依法追究上传者的相关责任。所有开源软件的著作权、与软件有关的肖像权和名誉权等法律问题，由上传者自行解决并承担相应责任。
              </div>
            </li>
            <li>
              <h4 class="tit"><span>商业软件</span><em></em></h4>
              <div class="pic">
                所有商业软件均在商业软件证书的标准下进行发布运行，如有任何不满足相关条件的商业软件，请随时联我们。
              </div>
            </li>
            <li>
              <h4 class="tit"><span>软件上传流程</span><em></em></h4>
              <div class="pic">
                所有上传软件均需要按照上传软件相关信息->上传软件相关文件、文档->初审->复审的步骤来进行。
              </div>
            </li>
          </ul>
        </div>
        <!--推荐-->
        <div  v-for="(item,index) in softList" :key="index"  style=" margin: 30px 0 20px 0 ;  " >
        <div class="headline">
          <h3 :style="{color:index==0?'#1c4b8f':index==1?'#13a59b':index==2?'#b33d00':'#a96908'}">
            {{item.ctyName=="商业软件"?$t('lang.commercialsoftware'):item.ctyName=="开源软件"?$t('lang.Opensourcesoftware'):item.ctyName=="自研软件"?$t('lang.Selfdevelopedsoftware'):$t('lang.useimmediately')}}
         <!--   {{item.ctyName}}--></h3>
          <p v-if="index==0" class="english">BUSINESS  SOURCE</p>
          <p v-if="index==1" class="english">OPEN SOURCE</p>
          <p v-if="index==2" class="english">DEVELOPMENT </p>
          <p v-if="index==3" class="english"> IMMEDIATE USE </p>
<!--          <router-link :to="{path:'/list',query:{categoryId:item.id,categoryName:item.ctyName,ParentName:'首页'}}">-->
          <router-link :to="{path:'/list',query:{categoryId:item.id,categoryName:item.ctyName,type:2,ParentName:'首页'}}">
<!--            <router-link :to="{path:'/list',query:{categoryId:i.value,type:2,ParentName:'首页'}}">-->
            <span class="more"> {{$t('lang.more')}}</span>
          </router-link>
          <span :style="{backgroundColor:index==0?'#1c4b8f':index==1?'#13a59b':index==2?'#b33d00':'#a96908'}" class="bottom-tit"></span>
        </div>
        <div  class="soft-box"  style="background: #f7f8f9">
          <router-link   v-for="(todo,k) in item.softList" :to="{path:'/details',query:{id:todo.id,ParentName:'首页'}}"  :key="k">
          <dl :style="{'border-width':k==item.softList.length-1||k%2==0&&k==item.softList.length-2?0:'1px'}">
            <dt><h3>{{todo.softName}}</h3></dt>
            <!--  <dd><span class="blur">{{todo.softCategoryName}}</span><span class="grey">{{todo.opensourceType}}</span></dd>-->
            <!--<span class="grey">{{todo.opensourceType}}</span>-->
            <dd><span class="blur" :style="{backgroundColor:index==0?'#1c4b8f':index==1?'#13a59b':index==2?'#b33d00':'#a96908' }">{{todo.softCategoryName}}</span><sup v-if="todo.isHot == 1" class="sub">热</sup><sup v-if="todo.isRecommend == 1" class="suba">荐</sup>
              <sup v-if="todo.isChina==1" class="subchania">国</sup>
              <sup v-if="todo.isEvaluate==1" class="subping">信</sup>
            </dd>
            <dd><div class="p">{{todo.softIntroduce | reBytesStr}}</div></dd>
          </dl>
          </router-link>
          <div v-if="item.softList.length==0" class="empty-tit"></div>
        </div>
        </div>
      </div>
    </div>
	<!--	<div class="game-banner">
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
		</div>-->
		<!--分类应用领域-->
		<div id="contype" class="content contype ">
			<div v-for="item in indexSoftList" class="soft-con">
				<h4 class="classfiy">
   			{{item.ctyName}}
   		</h4>
				<el-tabs>
					<el-tab-pane v-for="secondItem in item.sonList" :label="secondItem.ctyName">
						<router-link :to="{path:'/list',query:{categoryId:secondItem.id,categoryName:secondItem.ctyName,ParentName:'首页'}}"><span class="more">更00000多</span></router-link>
						<div class="el-tab-software">
							<router-link v-if="secondItem.softList.length>0" v-for="thitdItem in secondItem.softList" :to="{path:'/details',query:{id:thitdItem.id,ParentName:'首页'}}">
								<dl class="soft-box" >
									<dt>
		              <h3>{{thitdItem.softName}} 	<sup v-if="thitdItem.isHot==1" class="sub">热</sup>
   	   					  <sup v-if="thitdItem.isRecommend==1" class="suba">荐</sup>
   	   					<sup v-if="thitdItem.isChina==1" class="guo-bg">国</sup>
   	   						<sup v-if="thitdItem.isEvaluate==1" class="xin-bg">信</sup></h3>
                  <!--<p class="p">
                    <span class="lable">很好</span>
                      <span class="lable">可以用</span>
                  </p>-->
                    <!--<p class="p">版本：{{thitdItem.softVersion}}</p>
                    <p class="p">License：{{thitdItem.softLicense}}</p>-->
                  <!--	<span  v-if="thitdItem.isEvaluate==1" class="pg-ico">已评估</span>-->
                </dt>
									<dd>{{thitdItem.softIntroduce}}....</dd>
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
			<h3>{{$t('lang.aboutLink')}}</h3>
			<div class="linkbox">
				<a href="http://www.cstcloud.cn/" target="_blank"><img src="../assets/img/link_logo_4.png" /></a>
				<a href="http://www.cnic.cn/front/pc.html#/cnicSite/home" target="_blank"> <img src="../assets/img/link_logo_1.png" /></a>
				<a href="http://www.cseep.cn" target="_blank"><img src="../assets/img/link_logo_2.png" /></a>
				<a href="http://www.cstos.cstcloud.cn" target="_blank"><img src="../assets/img/bottom_logo_3.png" /></a>
        <a href="http://cstsai.cstcloud.cn/#/" target="_blank"><img src="../assets/img/bottom_logo.png" /></a>
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
			  imgUrl:window.SITE_CONFIG['imgURL'],
        activeName: 'first',
				menuList: [],
				hotList: [], //热门推荐
				recommendedList: [], //推荐列表
        softList: [], //软件列表
				indexSoftList: [],
        bannerList:[],

			}
		},
		mounted() {
		  //热门搜索
      this.getHotSoft(1)
      this.getRecommendedList()
      this.getSoftList()
      this.getBannerList()
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
          if(num > 108) {
            break;
          } else {
            str = str1.substring(0, i + 1);
          }
        }
        if(num>108){
          return str+"……";
        }else{
          return str
        }
      }
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
        params.append("limit",20);
        params.append("page", 1);
        this.$http.post('/haoweb/web/soft/querySoftListByConditionForBrowseNum',params)
          .then(({data:res })=>{
            for (let i = 0; i < res.page.records.length; i+=4) {
              this.recommendedList.push(res.page.records.slice(i, i + 4));
            }
            // this.recommendedList=res.page.records
            console.log("推荐",this.recommendedList)
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
      //首页轮播图
      getBannerList(){
        var params = new URLSearchParams();
        params.append("type", 1);
        this.$http.post('/haoweb/web/soft/selectBannerList',params)
          .then(({data:res })=>{
            // for (let list of res.list){
            //   list.coverImg = this.imgUrl + list.coverImg
            //   console.log('list.coverImg', list.coverImg)
            // }
            console.log('轮播图res', res)
            this.bannerList=res.list
          })
      },
      //获取首页数据
      getSoftList(){
        this.$http.post('/haoweb/web/soft/indexSoftListByCtyId')
          .then(({data:res })=>{
            this.softList=res.list
          })
      },
      htmlReplace(params){
        return  params.replace(/<\/?.+?>/g,"").replace(/ /g,"")
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
  /*.enter  .banner  .banner-box{
    position: relative;
    margin: 0 auto;
    width: 1200px;
    height: 400px;
  }*/
  .enter  .banner  .banner-box{
    position: relative;
    margin: 0 auto;
    width:100%;
    height: 400px;
  }
  /*.enter  .banner  .banner-box .img-list{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 300px;
    text-align: center;
    z-index: 1;
  }*/
  .enter  .banner  .banner-box .img-list{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    text-align: center;
    z-index: 1;
  }
  /*新增*/
  .enter  .banner .banner-box .row{
    position: absolute;
    left:50%;
    top:0;
    width:1200px;
    margin-left:-600px;
  }
  .enter  .banner .banner-box .ranking .el-tabs__nav-wrap{
    padding:0 10px;
  }
  .enter  .banner .banner-box .ranking .el-tabs__content{
    padding:0 10px;
  }
  /*新增*/
  .enter  .banner .banner-box .ranking{
    position: absolute;
    right: 0;
    top: 0;
    width: 250px;
    height: 400px;
    background:rgba(0,0,0,0.2);
    z-index: 10;
  }
  .enter  .banner .banner-box .ranking li{
    width: 100%;
    line-height: 26px;
    color: #fff;
    height:26px;
    overflow: hidden;
  }
  /*新增*/
  .enter  .banner .banner-box .ranking li .num{
    display: inline-block;
    line-height: 18px;
    font-size:12px;
    color:#fff;
    padding:0 5.5px;
    background:#ff0000;
    margin-right:3px;
  }
  .enter .banner .banner-box .ranking .el-tabs__item.is-active{
    color:#ec9d2f;
  }
  /*新增*/
  .enter  .banner .banner-box .ranking .el-tabs__item{
    color: #fff;
  }
  .enter .content-bg{
    width: 100%;
    background: url("../assets/img/content_bg.jpg") center top no-repeat;
  }
  .enter .content-box{
    margin: 30px auto 10px;
    width: 1200px;
  }
  .enter .content-box .recommend{
    display: block;
    width:100%;
    height: 300px;
  }
  /*.enter .content-box .recommend{*/
  /*  display: block;*/
  /*  height: 300px;*/
  /*  margin:0 -36px;*/
  /*}*/
  /*.enter .content-box .recommend .el-carousel__container{*/
  /*  padding:0 36px;*/
  /*}*/
  .enter .content-box .recommend dl{
    padding: 25px 0 0;
    float: left;
    width: 230px;
    height: 200px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 18px ;
    /*新增*/
    margin:20px 34px;
    /*新增*/
  }
  /*新增*/
  .enter .content-box .recommend .el-carousel__item.is-animating{
    -webkit-transition: -webkit-transform .7s ease-in-out;
    transition: -webkit-transform .7s ease-in-out;
    transition: transform .7s ease-in-out;
    transition: transform .7s ease-in-out, -webkit-transform .7s ease-in-out;
    transition: transform .7s ease-in-out,-webkit-transform .7s ease-in-out;
  }
  .enter .content-box .recommend .el-carousel__arrow--left{
    left:-10px;
  }
  .enter .content-box .recommend .el-carousel__arrow--right{
    right:0px;
  }
  .enter .content-box .recommend .el-carousel__item, .enter .content-box .recommend .el-carousel__mask{
    position: absolute;
    left:auto;
  }
  .enter .content-box .recommend .el-carousel__item{
    display: inline-block;
  }
  .enter .content-box .recommend .el-carousel__arrow{
    background:none;
    margin-top:-25px;
    height:50px;
  }
  .enter .content-box .recommend .el-carousel__arrow i{
    color:#558ebb;
    font-size: 50px;
  }
  .enter .content-box .recommend dl:hover{
    border: 1px solid #fff;
    box-shadow:1px 1px 30px #ccc;
  }
  .enter .content-box .recommend dl:hover button{
    background:#3285ff;
    border:1px solid #3285ff;
    color:#fff;
  }
  /*新增*/
  .enter .content-box .recommend dl dt{
    position: relative;
    width: 100%;
    text-align: center;
    height:56px;
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
  /*新增*/
  .enter .content-box .recommend a:nth-child(2n) dl dt .softwaretype .em-bg-1{
    border-right: 50px solid #52c967;
  }
  .enter .content-box .recommend a:nth-child(1) dl dt .softwaretype .em-bg-1{
    border-right: 50px solid #639cd9;
  }
  .enter .content-box .recommend a:nth-child(4n) dl dt .softwaretype .em-bg-1{
    border-right: 50px solid #ec9d2f;
  }
  /*新增*/
  .enter .content-box .recommend dl dt img{
    margin: 15px 0;
    height: 56px;
    width: auto;
  }
  .enter .content-box .recommend dl dd h3{
    overflow: hidden;
    margin-top: 10px;
    width: 100%;
    height: 60px;
    font-size: 18px;
    color: #000;
    line-height: 30px;
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
    height: 55px;
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
    bottom: -10px;
    margin-left: -75px;
    width: 150px;
    font-size: 16px;
    color: #000;
    padding: 0 10px;
    background: #fff;
    border-radius: 20px;
    z-index: 2;
  }
  .enter .content-box .headline .bottom-tit{
    position: absolute;
    left: 50%;
    bottom: -1px;
    margin-left: -250px;
    display: block;
    width: 500px;
    height: 1px;
    background: #85adea;
  }
  .enter .content-box .headline .more{
    position: absolute;
    right: 20px;
    bottom: 10px;
    font-size: 14px;
    color: #999;
    text-decoration: underline;
  }
  .enter .content-box .soft-box{
    margin-top: 20px;
    overflow: hidden;
    padding: 20px 0 40px;
    width: 100%;
    min-height: 300px;
    border-bottom: 5px #e5e5e5 solid;
    border-radius: 5px;
  }

  .enter .content-box .soft-box dl{
    float: left;
    margin: 0 1%;
    padding: 15px 0 ;
    width: 48%;
    border-bottom: 1px  #dedede dashed;
    box-sizing: border-box;
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

  /*.enter .content-box .soft-box dl dd{
    margin-top: 10px;
    overflow: hidden;
    width: 100%;
  }*/
  .enter .content-box .soft-box dl dd{
    margin-top: 5px;
    overflow: hidden;
    width: 100%;
    min-height: 25px;
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
  /*新增*/
  .enter .content-box .soft-box dl dd sup{
    display:inline-block;
    margin: 0 5px 0 0;
    padding:1px 3px 5px 3px;
    height: 16px;
    font-style: normal;
    text-align: center;
    line-height: 16px;
    position: relative;
  }
  .enter .content-box .soft-box dl dd sup::after{
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
  .enter .content-box .soft-box dl dd .sub{
    color:#fff;
    font-size: 12px;
    background:#ff0000;
  }
  .enter .content-box .soft-box dl dd .sub::after{
    border-bottom:7px solid #fff;
  }
  .enter .content-box .soft-box dl dd .suba{
    color:#fff;
    font-size: 12px;
    background:#ec9d2f;
  }
  .enter .content-box .soft-box dl dd .suba::after{
    border-bottom:7px solid #fff;
  }
  .enter .content-box .soft-box dl dd .subchania{
    color:#fff;
    font-size: 12px;
    background:#07b62c;
  }
  .enter .content-box .soft-box dl dd .subchania::after{
    border-bottom:7px solid #fff;
  }
  .enter .content-box .soft-box dl dd .subping{
    color:#fff;
    font-size: 12px;
    background:#672fd9;
  }
  .enter .content-box .soft-box dl dd .subping::after{
    border-bottom:7px solid #fff;
  }
  /*新增*/
  .enter .content-box .soft-box dl dd .p{
    height: 50px;
    font-size: 14px;
    color: #333;
    line-height: 24px;
  }

  .enter .aboutLink {
    overflow: hidden;
    margin: 15px auto;
    padding: 0 40px;
    width: 1200px;
    height: 180px;
    background: #fff;
  }

  .enter .aboutLink h3 {
    font-size: 20px;
    color: #000;
    line-height: 70px;
  }

  /*.enter .aboutLink .linkbox {*/
  /*  overflow: hidden;*/
  /*  margin-top: 5px;*/
  /*}*/
  .enter .aboutLink .linkbox {
    overflow: hidden;
    margin-top: 5px;
    width:100%;
    display: block;
  }
  /*.enter .aboutLink .linkbox img {*/
  /*  float: left;*/
  /*  margin-right:40px;*/
  /*  width: auto;*/
  /*  height: 40px;*/
  /*}*/
  .enter .aboutLink .linkbox a{
    margin-right: 30px;
    display: inline-block;
    padding: 15px 10px;
    background: #fff;
    border: 1px solid #e9eaec;
    border-radius: 6px;
    box-shadow: -1px 1px  5px #d4d5d5;
  }
  .enter .aboutLink .linkbox img {
    float: left;
    width: auto;
    height: 40px;
    display: inline-block;
  }
  /*新增软件细则*/
  .Soft{
    width:1200px;
    margin:10px auto 30px;
    display: block;
    background: url("../assets/img/text_bg.jpg") no-repeat;
    min-height:100px;
    position: relative;
    background-size:auto 100%;
    padding-bottom:10px;
  }
  .Soft .img{
    position: absolute;
    right:10px;
    bottom:10px;
    width:232px;
    display: block;
  }
  .Soft .title{
    position:relative;
    text-align:center;
    font-size: 20px;
    color:#0b36ee;
    line-height: 50px;
    margin:0 auto;
    display: block;
    z-index:2;
    padding:0 20px;
  }
  .Soft .title .h3{
    margin:0 auto;
    padding: 0 15px;
    color:#0b36ee;
    font-size: 20px;
    line-height:50px;
    display: inline-block;
    position:relative;
    z-index: 2;
    letter-spacing:2pt;
    background: #fbd204;
    border-radius: 0 0 15px 15px;
  }
  .Soft .title .h3::after{
/*    position: absolute;
    left:0;
    top:0;
    width:300px;
    height:0;
    border-top: 50px solid #fbd204;
    border-right: 37px solid transparent;
    border-left:37px solid transparent;
    content:"";
    margin-left:-110px;
    z-index: -1;*/
  }
  .Soft .text{
    padding:30px 20px 15px;
    color:#f1f4f5;
    font-size:16px;
    line-height: 28px;
    display: block;
  }
  .Soft ul{
    display: block;
    margin:0 auto;
    padding:0 20px;
  }
  .Soft ul li{
    padding-bottom:20px;
    display: block;
  }
  .Soft ul li .tit{
    color:#fff;
    display: block;
    position: relative;
  }
  .Soft ul li .tit span{
    color:#fced04;
    line-height: 26px;
    display: inline-block;
    padding:0 28px;
    position: relative;
    font-size:16px;
    letter-spacing:2pt;
  }
  .Soft ul li .tit span::after{
    position: absolute;
    right:0;
    width:14px;
    height:26px;
    content:"";
    background: url(../assets/img/pin.png)no-repeat center;
    top:50%;
    margin-top:-13px;
  }
  .Soft ul li .tit span::before{
    position: absolute;
    left:0;
    width:14px;
    height:26px;
    content:"";
    background: url(../assets/img/pin.png)no-repeat center;
    top:50%;
    margin-top:-13px;
  }
  .Soft ul li .tit em{
    font-style: normal;
    position: relative;
    top:-4px;
    margin-left:5px;
    height:1px;
    background-origin: padding-box,border-box;
    background-image:linear-gradient(-90deg, rgba(88,132,247,0.1), #fff 50%);
    display: inline-block;
    width:40%;
  }
  .Soft ul li:nth-child(2) .tit em{
    width:50%
  }
  .Soft ul li:nth-child(3) .tit em{
    width:55%
  }
  .Soft ul li:nth-child(4) .tit em{
    width:55%
  }
  .Soft ul li .pic{
    margin-top:12px;
    line-height: 28px;
    color:#f1f4f5;
    font-size:16px;
    display: block;
  }
</style>
