<template>
  <div id="app">
    <CommonHeader/>
    <router-view/>
    <CommonFooter/>
  </div>
</template>
<script>
  import CommonFooter from "./components/CommonFooter";
  import CommonHeader from "./components/CommonHeader";
  export default {
    components:{
      CommonFooter,
      CommonHeader
    }
  }
</script>
<style lang="scss">

</style>
