<template>
  <div class="searchTop">
    <div class="header-top">
      <div class="reposbox">
        <p class="text">
          欢迎来到科研软件汇聚平台！
        </p>

        <div v-if="!this.userId">
          <a class="right-text" target="_blank" href="https://passport.escience.cn/regist.jsp">注册 </a>
          <a class="right-text">登录 &nbsp;&nbsp;&nbsp;|</a>
        </div>
        <div v-else="">
         <!-- <a class="right-text" @click="signOut" href="https://passport.escience.cn/logout?WebServerURL=http://cstsai.cstcloud.cn">退 &nbsp;出 </a>
          <p @click="toPersonalInfo" class="right-text">{{userInfo.trueName}},&nbsp;&nbsp;个人中心&nbsp;&nbsp;&nbsp;|</p>-->
          <ul class="top-right-list">
            <li class="col_151786">
              <i style="font-style: normal; color: #9cea8a">{{userInfo.trueName}}</i>
            </li>
            <li class="li-name pullDown" >
              <router-link :to="{path:'/myindex'}">
                个人中心
              </router-link>
              <span class="arrow  pulldown-arrow"></span>
              <div class="pulldown-box" style="height: auto">
                <router-link :to="{path:'/myorder'}">
                  <span>我的订单</span>
                </router-link>
                <router-link :to="{path:'/myservices'}">
                  <span>我购买的服务</span>
                </router-link>
                <router-link v-if="userStatus == 1" :to="{path:'/myrelease'}">
                  <span>我发布的服务</span>
                </router-link>
                <router-link :to="{path:'/myconcern'}">
                  <span>我的关注</span>
                </router-link>
                <router-link v-if="userStatus == 1" :to="{path:'/myevaluate'}">
                  <span>我的评价</span>
                </router-link>

              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div class="searchtop-box">
      <div class="con">
        <router-link to="/">
          <img class="logo" src="../assets/img/search_logo.png" alt="logo" />
        </router-link>
        <div class="search-box">
          <el-select class="classify" v-model="searchArr.itemType" @change="" placeholder="请选择">
            <el-option v-for="item in searchOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <div class="input">
            <el-input @keyup.enter.native="toSearchList" v-model.trim="searchArr.keyword" auto-complete="off"></el-input>
          </div>
          <!-- <router-link  :to="{path:'/searchList',query:searchArr}"> -->
          <button @click="toSearchList"><i class="el-icon-search"></i></button>
          <!-- </router-link> -->
        </div>
        <!--<div @click="deliverySoft" class="btn">
          投递软件
        </div>-->
        <div class="hot-keyword">
          <span>1111</span>
          <span class="color-blur">222</span>
        </div>
      </div>
      <div class="menu-box">
        <div class="classify-btn">
          <i class="el-icon-menu"></i>
          <p>全部分类</p>
          <ul  class="classify-first">
            <li v-for="(item, index) in softTypeList" :key="index">
              <router-link :to="{path:'/list',query:{categoryId:item.value,type:1,ParentName:'首页'}}">
              <img src="../assets/icon/icon_classfiy.png" alt="">
              <span>{{item.label}}</span>
              </router-link>
              <div class="classify-second">
                <dl  v-for="(i, k) in item.children" :key="k">
                  <dt><router-link :to="{path:'/list',query:{categoryId:i.value,type:2,ParentName:'首页'}}">{{i.label}}</router-link></dt>
                  <dd><span   v-for="(todo, j) in i.children" :key="j"><router-link :to="{path:'/list',query:{categoryId:todo.value,type:3,ParentName:'首页'}}">{{todo.label}} |</router-link></span></dd>
                </dl>
              </div>
            </li>
            <!--  <li>
                <img src="../assets/icon/icon_shoufei.png" alt="">
                <span>收费方式</span>
              </li>
              <li>
                <img src="../assets/icon/icon_lingyu.png" alt="">
                <span>科学领域</span>
              </li>
              <li>
                <img src="../assets/icon/icon_code.png" alt="">
                <span>开发领域</span>
              </li>
              <li>
                <img src="../assets/icon/icon_langage.png" alt="">
                <span>编程语言</span>
              </li>-->
          </ul>
        </div>
        <ul class="menu-list">
          <li class="active">
            首页
          </li>
          <li>
            软件类型
          </li>
          <li>
            收费方式
          </li>
          <li>
            科学领域
          </li>
          <li>
            开发领域
          </li>
          <li>
            编程语言
          </li>
        </ul>

      </div>

    </div>



    <!--pop-->
    <!--pop-->
  </div>
</template>

<script>
  import TinymceEditor from '@/components/tinymce-editor'
  export default {
    name: 'searchTop',
    components: {
      TinymceEditor
    },
    props: {
      newSoftUrl: '',
      runUrl: ''
    },

    data() {
      return {
        showLogin:false,
        softTypeList:[],//分类
        searchArr: {
          keyword: '',
          itemType: 1,
          page: 1,
        },
        searchOptions: [{
          value: 1,
          label: '软件'
        },
          {
            value: 2,
            label: '领域'
          },
          {
            value: 3,
            label: '作者'
          }
        ],

      }
    },

    mounted() {
      //个人中心下拉
      $('.pullDown').hover(function() {
        $(this).children('.pulldown-box').stop(true).slideDown(300)
        $(this).children('.pulldown-arrow').stop(true).removeClass('hover-down').addClass('hover-up')
        if ($(this).children('.classify-bg').length > 0) {
          $(this).children('.classify-bg').stop(true).slideDown(300)
        }
      }, function() {
        $(this).children('.pulldown-box').stop(true).slideUp(300)
        if ($(this).children('.classify-bg').length > 0) {
          $(this).children('.classify-bg').stop(true).slideUp(300)

        }
        $(this).children('.pulldown-arrow').stop(true).removeClass('hover-up').addClass('hover-down')
      })
    },
    methods: {
      toSearchList() {
        if(this.searchArr.itemType == '软件') {
          this.searchArr.itemType = 1
        }
        if(this.searchArr.itemType == '领域') {
          this.searchArr.itemType = 2
        }
        if(this.searchArr.itemType == '作者') {
          this.searchArr.itemType = 3
        }
        this.$router.push({
          path: '/searchList',
          query: this.searchArr
        });
        this.$emit('serachList', true)
      },
    }
  }
</script>
<style>
  .searchTop {
    width: 100%;
    height: 209px;
    background: #fff;
  }

  .searchTop .box-big1 .el-input__inner,
  .searchTop .box-small .el-input__inner {
    width: 400px;
  }

  .searchTop .examinedialog {
    width: 600px;
  }

  .searchTop .examinedialog .box-input {
    margin-left: 10px;
    width: 540px;
  }

  .searchTop .examinedialog .bottom .right {
    margin: 0 auto 20px;
    width: 290px;
  }

  .searchTop .examinedialog .bottom {
    overflow: hidden;
    width: 100%;
  }

  .searchTop .searchtop-box {
    width: 100%;
    height: 110px;
  }

  .searchTop .musttit {
    margin-left: 5px;
    font-size: 18px;
    font-weight: bold;
    color: #d50d24;
  }

  .searchTop .el-dialog {
    width: 700px;
  }

  .searchTop .el-dialog__body {
    padding: 5px 10px;
  }

  .searchTop .ajpsbtn {
    margin-left: 440px;
    margin-bottom: 20px;
  }

  .searchTop .searchtop-box .con {
    overflow: hidden;
    margin: 0 auto;
    width: 1200px;
  }

  .searchTop .searchtop-box .con .logo {
    float: left;
    padding: 10px 10px ;
    height: 80px;
    width: auto;
  }
  .searchTop .searchtop-box .con .hot-keyword{
    margin: 10px 0 0 230px;
    width:580px ;
    text-align: center;
  }
  .searchTop .searchtop-box .con .hot-keyword span{
    margin: 0 5px;
    color: #999;
    font-size: 12px;
    line-height: 30px;
  }
  .searchTop .searchtop-box .con .search-box {
    overflow: hidden;
    float: left;
    margin: 30px 0 0 140px;
    width: 580px;
    height: 36px;
    border-radius: 5px;
    border: 1px solid #3483ff;
  }

  .searchTop .searchtop-box .con .search-box .classify {
    float: left;
    width: 100px;
    height: 36px;
    border:none;
  }

  .searchTop .searchtop-box .con .search-box .classify .el-input__inner {
    width: 120px;
    height: 36px;
    line-height: 36px;
    border: none;
  }

  .searchTop .searchtop-box .con .search-box .input {
    float: left;
    margin-left: 20px;
    width: 399px;
    height: 36px;
    background: #fff;
    border: none;
    border-left: 1px solid #999;
  }

  .searchTop .searchtop-box .con .search-box .input .el-input__inner {
    width: 340px;
    height: 36px;
    line-height: 36px;
    border: none;
  }

  .searchTop .searchtop-box .con .search-box button {
    float: left;
    width: 60px;
    height: 36px;
    background: #3285ff;
  }
  .searchTop .searchtop-box .con .search-box button i{
    font-size: 20px;
    color: #fff;
  }

  .searchTop .searchtop-box .btn {
    display: block;
    float: right;
    margin-top: 35px;
    padding-left: 38px;
    width: 115px;
    height: 42px;
    font-size: 14px;
    color: #fff;
    letter-spacing: 1px;
    line-height: 42px;
    text-align: center;
    cursor: pointer;
    background: url(../assets/bg/btn_bg_1.png) no-repeat;
  }

  .searchTop .header-top {
    width: 100%;
    height: 40px;
  }
  .searchTop .top-right-list {
    float: right;
    height: 40px;
  }
  .searchTop .top-right-list li{
    margin: 0px 10px;
    float: left;
  }
  .searchTop .li-name {
    position: relative;
    float: right;
    width: 110px;
    height: 40px;
    text-align: center;
  }
  .searchTop .li-name:hover{
    background: #e0e1e2;
  }
  .searchTop .top-right-list .pulldown-box {
    display: none;
    position: absolute;
    left: 0;
    top: 36px;
    height: auto;
    width: 110px;
    color: #fff;
    text-align: center;
    background: #e0e1e2;
    z-index: 1;
  }
  . .searchTop .top-right-list .pulldown-box a {
    display: block;
    width: 100%;
  }

  .searchTop .top-right-list .pulldown-box span {
    display: block;
    width: 100%;
    line-height: 32px;
    color: #fff;
    border-top: 1px solid #d4d5d5;
    cursor: pointer;
  }

  .searchTop .top-right-list .pulldown-box span:hover {
    color: #ec5051;
    background: #f1eeee;
  }
  .searchTop  .menu-box{
    margin: 20px auto 10px;
    width: 1200px;
  }

  .searchTop .menu-box .classify-btn{
    position: relative;
    float: left;
    width: 200px;
    height: 48px;
    line-height: 48px;
    border-radius: 6px 6px 0 0;
    background: #3285ff;
    z-index: 10;
  }
  .searchTop .menu-box .classify-btn:hover .classify-first{
    display: block;
  }
  .searchTop  .menu-box .classify-first{
    display: none;
    position: absolute;
    top: 48px;
    width: 200px;
    height: 400px;
    background: #000;
  }
  .searchTop  .menu-box .classify-first li{
    position: relative;
    display: block;
    height: 50px;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    line-height: 50px;
    cursor: pointer;
  }
  .searchTop  .menu-box .classify-first li:hover{
    background: #5b6f84;
  }
  .searchTop  .menu-box .classify-first li:hover .classify-second{
    display: block;

  }
  .searchTop  .menu-box .classify-first li .classify-second{
    display: none;
    position: absolute;
    left: 200px;
    padding: 15px;
    width: 610px;
    background: #cbeaff;
  }
  .searchTop  .menu-box .classify-first li .classify-second dl{
    overflow: hidden;
    width: 100%;
    line-height: 30px;
  }
  .searchTop  .menu-box .classify-first li .classify-second dl dt{
    float: left;
    margin: 8px 0;
    padding-right: 10px;
    font-size: 14px;
    line-height: 14px;
    font-weight: normal;
    color: #0096ff;
    border-right: 1px solid #0096ff;
  }
  .searchTop  .menu-box .classify-first li .classify-second dl dd{
    float: left;
    margin-left: 10px;
  }
  .searchTop  .menu-box .classify-first li .classify-second dl dd span{
    margin-left: 5px;
    font-size: 14px;
    font-weight: normal;
    color: #666;
  }

  .searchTop  .menu-box .classify-first li img{
    float: left;
    margin: 15px 20px 0 15px;
    width: 18px;
  }
  .searchTop  .menu-box .classify-first li span{
    float: left;
    color: #fff;
  }
  .searchTop .menu-box .classify-btn p{
    float: left;
    text-indent: 30px;
    font-size: 16px;
    color: #fff;
  }
  .searchTop .menu-box .classify-btn i{
    float: left;
    text-indent: 30px;
    line-height: 48px;
    font-size: 18px;
    color: #fff;
  }
  .searchTop .menu-box .menu-list{
    float: left;
    margin-left: 30px;
    overflow: hidden;
  }
  .searchTop .menu-box .menu-list li{
    float: left;
    padding: 0 35px;
    font-size: 16px;
    color: #666;
    line-height: 40px;
  }
  .searchTop .menu-box .menu-list .active{
    font-weight: bold;
    color: #226ad4;
  }
  .searchTop .header-top .reposbox {
    position: relative;
    margin: 0 auto;
    width: 1200px;
    height:40px;
    font-size: 14px;
    line-height: 40px;
    color: #fff;
  }

  .searchTop .header-top .reposbox .logo {
    float: left;
    margin: 10px 10px 0 0;
    height: 46px;
    width: auto;
  }

  .searchTop .header-top .reposbox .text {
    float: left;
    font-size: 14px;
    color: #333;
  }

  .searchTop .header-top .reposbox .right-text {
    float: right;
    margin-right: 10px;
    font-size: 14px;
    color: #333333;
    cursor: pointer;
  }

  .float-nav {
    position: fixed;
    top: 230px;
    left: 0;
    width: 60px;
    border-radius: 2px;
  }

  .float-nav li {
    width: 60px;
    height: 86px;
    border-bottom: 1px solid #a6ceec;
    background: #3c6bf7;
    cursor: pointer;
  }

  .float-nav .libg {
    background: #979899;
  }

  .float-nav li:hover {
    background: #d40303;
  }

  .float-nav li img {
    display: block;
    padding: 8px 0 3px 0;
    margin: 0px auto;
    width: 50px;
  }

  .float-nav li p {
    width: 100%;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #fff;
  }

  .searchTop .singtext {
    padding: 5px 0;
    margin: 0 0 20px 50px;
    width: 600px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    background: #d0e1f1;
  }

  .searchTop .domainsnum span {
    line-height: 40px;
    font-weight: bold;
    font-size: 14px;
    color: #F56C6C;
  }

  .searchTop .singtext .deltrbtn {
    padding: 0 5px;
    font-size: 12px;
    line-height: 14px;
    border-radius: 3px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #c42c12;
    cursor: pointer;
  }

  .searchTop .singtext .addtr {
    display: inline-block;
    margin: 5px 0 0 160px;
    padding: 2px 8px;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #1ca141;
    border-radius: 3px;
    cursor: pointer;
  }

  .searchTop .singtext .el-input {
    padding: 5px;
    box-sizing: border-box;
  }

  .searchTop .singtext .el-input__inner {
    width: 100%;
    height: 30px;
    line-height: 30px;
  }

  .searchTop .h3 {
    width: 100%;
    line-height: 30px;
    font-size: 16px;
    color: #333;
    text-align: center;
  }

  .searchTop .feedbackdia {}

  .searchTop .feedbackdia .fbox {
    overflow: hidden;
    width: 660px;
    padding: 10px;
  }

  .searchTop .feedbackdia .borda {
    border-bottom: 1px dashed #dedede;
  }

  .searchTop .feedbackdia .fbox .demonstration {
    float: left;
    font-size: 16px;
    line-height: 30px;
    color: #666;
  }

  .searchTop .feedbackdia .fbox .el-rate {
    float: left;
    margin: 8px;
    width: 300px;
  }

  .searchTop .feedbackdia .h3 {
    width: 100%;
    font-size: 16px;
    line-height: 40px;
    text-align: left;
    font-weight: normal;
  }

  .searchTop .dialog-footer {
    display: block;
    margin: 10px auto;
    width: 200px;
  }

  .searchTop .diatit {
    padding-top: 5px;
    font-size: 12px;
    line-height: 12px;
    color: #d3d5d6;
  }
</style>
