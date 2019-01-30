import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/Home/Home'
import Puke from '@/components/Puke/Puke'
import About from '@/components/About/About'
import Parents from '@/components/Parents/Parents'
import Service from '@/components/Service/Service'
import Job from '@/components/Job/Job'

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
      path: '/parents',
      name: 'parents',
      component: Parents,
    },
    {
      path: '/service',
      name: 'service',
      component: Service,
    },
    {
      path: '/job',
      name: 'job',
      component: Job,
    },




    {
      path: '*',
      redirect: {name:'home'}
    }
  ]
})
