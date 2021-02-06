<template>
  <div class="container">
    <div class="login-form">
      <p style="padding-top: 20px">用户登录</p>
      <div style="height: 20px">
        <span class="error_tips" id="username">{{ message }}</span>
      </div>
      <input
        type="text"
        name="username"
        v-model="username"
        placeholder="请输入用户名"
        class="icon"
        @blur="checkUsername"
        @focus="clear"
      />
      <i class="icon"></i>
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="请输入密码"
      />
      <p>
        <button @click="doLogin">登录</button>
      </p>
      <div class="r-link">
        <router-link to="/" style="color: #9b9b9b">返回首页</router-link>
        <router-link to="/regist" class="regist">立即注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import  inputError  from "../minxins/inputError";
export default {
  mixins: [inputError],
  data() {
    return {
      username: "",
      password: "",
      message: "",
    };
  },
  methods: {
    doLogin() {
      this.$http
        .post("/user/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          let username = document.getElementById("username");
          username.style.display = "block";
          let {
            inputState,
            message,
            token,
            state,
            loginUser,
            userId,
          } = res.data;
          this.message = message;
          if (inputState != "fail") {
            if (state == "success") {
              //获取token
              //存储user 到vuex
              this.$store.commit("setUser", loginUser);
              this.$store.commit("setUserId", userId);
              //存储token 到vuex
              this.$store.dispatch("setToken", token);
              this.$router.push("/");
            } else {
              console.log("登录失败");
            }
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  overflow: scroll;
  background-image: url("../assets/img/bg-login.jpg");
  position: fixed;
  width: 100%;
  background-size: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  .login-form {
    border-radius: 4px;
    width: 20%;
    background-color: #fff;
    height: 350px;
    margin-top: 150px;
    text-align: center;

    .error_tips {
      color: red;
      display: none;
    }

    input {
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      height: 40px;
      line-height: 40px;
      width: 70%;
      margin-bottom: 20px;
    }

    .r-link {
      margin-top: 20px;

      .regist {
        margin-left: 20px;
        color: #00a1d6;
      }
    }

    .icon :before {
      /*图标 */
      content: "\e6e3";
    }
  }
}
</style>