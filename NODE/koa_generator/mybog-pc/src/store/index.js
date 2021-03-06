import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
  },
  mutations: {
  },
  actions: {
    setToken(state,token){
      state.token = token;
      console.log(token);
      //放到localStorage中
      localStorage.setItem('mytoken',token);
    },
    logOut(state){
      state.token = null;
      localStorage.removeItem('mytoken');
      console.log('logOut')
    }
  },
  modules: {
  }
})
