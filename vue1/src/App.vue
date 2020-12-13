<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>|
			<!-- url +params传参 -->
			<router-link to="/course">Course</router-link>|
			<!-- query传参 -->
			<!-- <router-link :to="{path:'/user',query:{name:'lisi',age:20}}">用户详情</router-link> -->
			<!-- name传参，地址栏看不见参数 ,一刷新页面，参数丢失-->
			<router-link :to="{name:'User',params:{name:'wangwu',age:30}}">用户详情</router-link>
			<router-link to="/index">乘法</router-link>
		</div>
		<router-view />
	</div>
</template>
<script>
	
</script>
<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
