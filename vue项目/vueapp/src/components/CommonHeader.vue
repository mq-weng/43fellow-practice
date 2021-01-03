<template>
	<header :style="{backgroundColor:menuStore.bgCorlor}">
		<span class="first" @click="goHome">首页</span>
		<span>{{menuStore.name}}</span>
	</header>
</template>

<script>
	import {
		mapState,mapMutations
	} from "vuex"
	export default {
		name: "CommonHeader",
		data() {
			return {
			}
		},
		computed:{
			...mapState(["menuStore","bgCorlor"])
		},
		methods:{
			...mapMutations(["changeStore"]),
			goHome(){
				this.$router.push("./"),
				this.changeStore({name:"剧集",baCorlor:'#42b983'})
			}
		}
	}
</script>

<style scoped lang="scss">
	header {
		background-color: #42b983;
		height: 50px;
		text-align: center;
		line-height: 50px;

		.first {
			position: absolute;
			left: 0;
		}

	}
</style>
