<template>
	<footer :style="{backgroundColor:menuStore.bgCorlor}">
		<div v-for="item in menu" @click="change(item)" :key="item.path">
			<router-link :to="item.path">{{item.name}}</router-link>
		</div>
		<!-- <router-link to="/">剧集</router-link>
		<router-link to="/sing">歌曲</router-link>
		<router-link to="/read">书籍</router-link>
		<router-link to="/chat">聊天</router-link> -->
	</footer>
</template>

<script>
	import {
		mapMutations,mapState
	} from "vuex"
	export default {
		name: "CommonFooter",
		data() {
			return {
				menu: [{
						path: '/',
						name: '剧集',
						bgCorlor: '#42b983'
					},
					{
						path: '/read',
						name: '书籍',
						bgCorlor: '#ffaa00'
					},
					{
						path: '/chat',
						name: '聊天',
						bgCorlor: '#55ffff'
					},
					{
						path: '/sing',
						name: '歌曲',
						bgCorlor: '#aa5500'
					}
				]
			}
		},
		computed:{
			...mapState(["menuStore"])
		},
		methods: {
			...mapMutations(["changeStore"]),
			change(menu) {
				this.changeStore(menu)
			}
		}
	}
</script>

<style scoped lang="scss">
	footer {
		position: fixed;
		bottom: 0;
		background-color: #42b983;
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-around;
		text-align: center;
		line-height: 50px;

	}
</style>
