<template>
	<div>
		<h1>用户信息</h1>
		<!-- query第一种 -->
		<!-- <p>用户名{{$route.query.name}}</p>
		<p>年龄{{$route.query.age}}</p> -->
		<!-- query第二种 -->
		<!-- <p>年龄{{age}}</p> -->
		<!-- name params -->
		<p>姓名:{{params.name}}</p>
		<p>年龄：{{params.age}}</p>
		<!-- 1 共享变量 -->
		用户人数：{{$store.state.count}}<button @click="addNum()">+1</button>
		<!-- 2.共享变量 -->
		用户人数：{{count}}<button @click='add5()'>点击+5</button>
		用户人数:{{count}}<button @click='aAdd()'>过一秒+2</button>
	</div>
</template>

<script>
	import {mapMutations,mapState,mapActions} from 'vuex'
	export default {
		data() {
			return {
				// query第二种 
				// params: this.$route.query
				params: this.$route.params
			}
		},
		//映射state 的值
		computed:{
			//把state 全引进来 
			...mapState(['count'])
		}
		,
		methods:{
			addNum(){
				this.$store.commit('add')
			},
			//把mutations add5引进来
			...mapMutations(['add5']),
			...mapActions(['aAdd'])
				
		}
	}
</script>

<style scoped>
</style>
