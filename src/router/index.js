import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/pages/list/list'
import Detail from  '@/pages/details/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail/:item',
      name: 'Detail',
      component: Detail,
    },
  ]
})
