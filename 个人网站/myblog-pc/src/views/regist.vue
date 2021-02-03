
<template>
  <div>
    <div class="container">
      <div class="login-form">
        <p style="padding-top: 20px">用户注册</p>
        <div style="height: 20px">
          <span class="error_tips" id="username">{{ message }}</span>
        </div>
        <p>
          <input
            placeholder="请输入用户名"
            type="text"
            v-model="username"
            @blur="checkUsername"
            @focus="clear"
          />
        </p>

        <p>
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="请输入密码"
          />
        </p>
        <p>
          <button @click="doRegist">注册</button>
        </p>
        <div class="r-link">
          <router-link to="/" style="color: #9b9b9b">返回首页</router-link>
          <router-link to="/login" class="regist">登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      /*nickname不要了 */
      username: "",
      password: "",
      blur: "",
      message: "",
    };
  },
  created() {},
  methods: {
    //检查input里是否为空
    checkUsername() {
      // console.log("blur执行了");
      let username = document.getElementById("username");
      if (this.username.length == 0) {
        username.style.display = "block";
        this.message = "用户名不能为空";
      }
    },
    clear() {
      // console.log("focus执行了");
      let username = document.getElementById("username");
      username.style.display = "none";
    },
    doRegist() {
      this.$http
        .post("/user/regist", {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        })
        .then((res) => {
          let username = document.getElementById("username");
          username.style.display = "block";
          this.message = res.data.message;
        });
    },
  },
};
</script>
<style  scoped lang="scss">
.container {
  background-image: url("../assets/img/bg2png.png");
  opacity: 80%;
  overflow: scroll;
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
    height: 300px;
    margin-top: 150px;
    text-align: center;

    .error_tips {
      display: none;
      color: red;
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
      content: "\e6e3";
    }
  }
}
</style>


