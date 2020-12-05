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
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// query第二种 
				// params: this.$route.query
				params: this.$route.params
			}
		}
	}
</script>

<style scoped>
</style>
