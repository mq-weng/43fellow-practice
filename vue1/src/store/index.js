import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0,
	},
	mutations: {
		add(state) {
			state.count++
		},
		add5(state){
			state.count+=5
		},
		add2(state){
			state.count+=2
		}
	},
	actions: {
		// 异步操作，调用mutation 里的方法,不允许直接操作state
		aAdd( ){
			setTimeout(()=>{
				this.commit.add2()
			},1000)
		}
	},
	modules: {}
})
