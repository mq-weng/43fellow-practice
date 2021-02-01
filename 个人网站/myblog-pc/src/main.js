import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import VueAxios from 'vue-axios'
import http from '../src/utils/http';
import  '../src/assets/css/reset.css';
Vue.config.productionTip = false

Vue.use(ElementUI);

//自定义的hppt
Vue.prototype.$http=http;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')



