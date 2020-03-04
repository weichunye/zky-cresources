import Vue from 'vue'
import Router from 'vue-router'
import Enter from '@/components/Enter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Enter',
      component: Enter
    },

  ]
})
