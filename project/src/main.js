// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/global.css'
import './assets/iconfont/iconfont.css'

import MyUl from '@/components/Common/MyUl'
import MyLi from '@/components/Common/MyLi'
import MyTitle from '@/components/Common/Title'

Vue.component(MyUl.name,MyUl)
Vue.component(MyLi.name,MyLi)
Vue.component(MyTitle.name,MyTitle)

import Axios from 'axios'

// Axios.defaults.baseURL = ''
Axios.prototype.$axios = Axios

Vue.use(MintUI)

Vue.config.productionTip = false

// /* eslint-disable no-new */
let VM = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
