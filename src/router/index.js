import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/list/list'
import Detail from  '@/pages/details/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/detail/:itemId',
      name: 'detail',
      component: Detail,
    },
  ]
})
