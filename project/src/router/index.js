import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/Home/Home'
import Puke from '@/components/Puke/Puke'
import About from '@/components/About/About'

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
      path: '/about',
      name: 'about',
      component: About,
    },




    {
      path: '*',
      redirect: {name:'home'}
    }
  ]
})
