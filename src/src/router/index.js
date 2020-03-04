import Vue from 'vue'
import Router from 'vue-router'
import Enter from '@/components/Enter'
import activityGame from '@/components/activityGame'
import heade from '@/components/header'
import footBottm from '@/components/footer'
import searchTop from '@/components/searchTop'
import detailsPage from '@/components/details'
import hotDetails from '@/components/hotDetails'
import allClassify from '@/components/allClassify'
import list from '@/components/list'
import personalInfo from '@/components/personalInfo'
import searchList from '@/components/searchList'
import typeList from '@/components/typeList'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
import page3 from '@/components/page3'
import activityList from '@/components/activityList'
import signUp from '@/components/signUp'
import agSignUp from '@/components/agSignUp'
import softModify from '@/components/softModify'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Enter',
      meta:{title:'首页'},
      component: Enter
    }, 
    {
      path: '/header',
      name: '头',
       meta:{title:'头'},
      component: heade
    },
    {
      path: '/searchTop',
      name: '搜索',
      meta:{title:'搜索'},
      component: searchTop
    },
     
    {
      path: '/footer',
      name: 'footBottm',
      meta:{title:'搜索'},
      component: footBottm
    },
     {
    path:'/activityGame',
    name:'创意比赛',
    meta:{title:'创意比赛'},
    component:activityGame
    }, 
     {
    path:'/agSignUp',
    name:'创意比赛报名',
    meta:{title:'创意比赛报名'},
    component:agSignUp
    }, 
    {
    path:'/signUp',
    name:'比赛报名',
    meta:{title:'比赛报名'},
    component:signUp
    }, 
    {
    path:'/activityList',
    name:'活动列表',
    meta:{title:'活动列表'},
    component:activityList
    }, 
      {
    path:'/hotDetails',
    name:'热门详情',
    meta:{title:'热门详情'},
    component:hotDetails
    }, 
     {
    path:'/details',
    name:'软件详情页',
     meta:{title:'软件详情页'},
    component:detailsPage
    }, 
    {
    path:'/allClassify',
    name:'全部分类',
     meta:{title:'全部分类'},
    component:allClassify
    }, 
    {
    path:'/list',
    name:'分类列表',
    meta:{title:'分类列表'},
    component:list
    },
		{
		path:'/typeList',
		name:'根据条件查询分类列表',
		meta:{title:'根据条件查询分类列表'},
		component:typeList
		},
		{
		path:'/searchList',
		name:'搜索关键字列表',
		component:searchList
		},
    {
    path:'/personalInfo',
    name:'个人中心',
    meta:{title:'个人中心'},
    component:personalInfo
    },
    {
    path:'/softModify',
    name:'投递软件修改',
    meta:{title:'投递软件修改'},
    component:softModify
    },
    {
    path:'/page1',
    name:'静态页',
    component:page1
    },
    {
    path:'/page2',
    name:'静态页',
    component:page2
    },
    {
    path:'/page3',
    name:'软件投递免责声明',
    component:page3
    },
  ]
})
