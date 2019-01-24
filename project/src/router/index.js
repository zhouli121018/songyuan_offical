import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/Home/Home'
import Puke from '@/components/Puke/Puke'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{name:'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/puke',
      name: 'puke',
      component: Puke
    },
    {
      path: '*',
      redirect: {name:'home'}
    }
  ]
})
