import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import global from './global'
import 'lib-flexible'

Vue.prototype.$ajax = axios
Vue.prototype.GLOBAL = global

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
