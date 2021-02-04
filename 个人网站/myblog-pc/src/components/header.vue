<template>
  <div class="header">
    <div class="home">
      <i class="el-icon-s-home" ></i>
      <router-link to="/">首页</router-link>
    </div>
    <div class="login-regist">
      <div class="header-img">
        <img src="../assets/img/header-user.jpg" alt="" />
      </div>
      <div v-if="loginUser" style="text-align: center;"> <router-link to="/userDetail">{{loginUser}}</router-link></div>
      <div v-else><router-link to="/login" class="l-r">登录</router-link>|
      <router-link to="/regist" class="l-r">注册</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props:["loginUser"],
methods: {
  
},
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  height: 120px;
  width: 100%;
  background-color: rgb(255, 205, 218);
  opacity: 70%;

  .home{
    margin: 40px 0 0 20px;
    a{
      padding: 2px;
    }
  }

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