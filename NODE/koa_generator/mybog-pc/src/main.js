import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import http from './axios-default/http'
Vue.config.productionTip = false

// Vue.use(VueAxios,axios)

//自定义的hppt
Vue.prototype.$http=http
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
