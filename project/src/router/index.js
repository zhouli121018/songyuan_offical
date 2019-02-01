import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/Home/Home'
import Puke from '@/components/Puke/Puke'
import About from '@/components/About/About'
import Parents from '@/components/Parents/Parents'
import Service from '@/components/Service/Service'
import Job from '@/components/Job/Job'
import Gamedata1 from '@/components/Information/Gamedata1'
import Gamedata2 from '@/components/Information/Gamedata2'
import Gamedata3 from '@/components/Information/Gamedata3'
import Gamedata4 from '@/components/Information/Gamedata4'

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
      path: '/gamedata1',
      name: 'gamedata1',
      component: Gamedata1,
    },
    {
      path: '/gamedata2',
      name: 'gamedata2',
      component: Gamedata2,
    },
    {
      path: '/gamedata3',
      name: 'gamedata3',
      component: Gamedata3,
    },
    {
      path: '/gamedata4',
      name: 'gamedata4',
      component: Gamedata4,
    },




    {
      path: '*',
      redirect: {name:'home'}
    }
  ]
})
