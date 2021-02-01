<template>
  <div class="header">
    <div class="login-regist">
      <div class="header-img">
        <img src="../assets/img/header-user.jpg" alt="" />
      </div>
      <router-link to="/login" class="l-r">登录</router-link>|
      <router-link to="/regist" class="l-r">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  height: 120px;
  width: 100%;
  background-color: rgb(255, 205, 218);
  opacity: 70%;
  .login-regist {
    position: absolute;
    right: 40px;
    top: 20px;

    .l-r {
      margin: 0 5px;
    }

    .header-img {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
      img {
        width: 50px;
        height: 50px;
        
        border: 1px solid silver;
      }
    }
  }
}
</style>