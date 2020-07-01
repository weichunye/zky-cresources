<template>
  <div class="foot">
 <p>
 1996 - {{getFullYear}} 中国科学院计算机网络信息中心 版权所有<br>
Copyright  1996-{{getFullYear}} Computer Network Information Center, Chinese Academy of Sciences. All Rights Reserved.<br>
京ICP备案号，京ICP备09112257号-94<br>
服务支持信息：电话：010-58812182  邮箱：nienm@sccas.cn
 </p>


  </div>
</template>

<script>
	import Cookies from 'js-cookie';
export default {
  name: 'footBottm',
  data () {
    return {
      getFullYear:''


    }
  },
  mounted(){
    var _this=this;
    var date = new Date();
    _this.getFullYear= date.getFullYear(); //获取完整的年份(4位)
    console.log("年",this.getFullYear)

  },
   methods: {

   }
}
</script>

<style>
	.foot{
		overflow: hidden;
		display: block;
		width: 100%;
		line-height: 36px;
		background: #4b505d;
	}
	.foot p{
		padding: 10px 0;
		margin: 40px auto 0;
		width: 1200px;
		text-align: center;
		font-size: 12px;
		line-height: 20px;
		color: #d0d2d8;
	}
</style>
