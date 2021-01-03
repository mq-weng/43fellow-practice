<template>
	<div>
		<common-header></common-header>
			<router-view />
		<common-footer></common-footer>
	</div>
</template>
<script>
	import CommonFooter from "./components/CommonFooter";
	import CommonHeader from "./components/CommonHeader";
	export default {
		components: {
			CommonFooter,
			CommonHeader
		}
	}
</script>
<style lang="scss">
</style>
