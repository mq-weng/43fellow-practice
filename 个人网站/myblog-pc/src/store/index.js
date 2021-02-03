import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    loginUser: '',
    userId: '',
    count: 0,
  },
  mutations: {
    setUser(state, loginUser) {
      console.log(loginUser);
      state.loginUser = loginUser;
      localStorage.setItem('loginUser', loginUser);
      state.count++;
    },
    setUserId(state, userId) {
      state.userId = userId;
      localStorage.setItem('userId', userId);
      state.count++;
    },

  },
  actions: {
    setToken(state, token) {
      state.token = token;
      console.log(token);
      //放到localStorage中
      localStorage.setItem('mytoken', token);
    },
    logOut(state) {
      state.token = null;
      localStorage.removeItem('mytoken');
      console.log('logOut')
    }
  },
  modules: {
  }
})
