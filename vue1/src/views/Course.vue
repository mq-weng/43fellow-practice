<template>
	<div>
		<p>课程</p>
		<router-link to="/course/fe">前端</router-link>
		<router-link to="/course/de">后端</router-link>
		
		<router-view />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				params:this.$route.params
			}
		}
	}
</script>

<style scoped>

</style>
