import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import api from '@/interface/api/index'
import { Toast } from 'vant'

Vue.prototype.api = api
Vue.prototype.Toast = Toast

import '@/assets/css/main.css'
import 'vant/lib/index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
