import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		menuStore: {
			path: '/',
			name: '剧集',
			bgCorlor: '#42b983'
		},
	},
	mutations: {
		changeStore(state, menu) {
			state.menuStore = menu;
		}
	},
	actions: {},
	modules: {}
})

