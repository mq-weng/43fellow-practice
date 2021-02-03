<template>
  <div class="content-box" id="app">
    <com-header :loginUser="loginUser"></com-header>
    <div class="content">
      <div class="post-text">
        <p>发表文章</p>
        <div>
          <input type="text" placeholder="请输入题目" class="comments-textarea" v-model="title">
        </div>
        <div>
          <textarea
            class="comments-textarea"
            rows="10"
            cols="60"
            v-model="content"
          ></textarea>
        </div>
        <button  @click="postBlogs">发表</button>
      </div>
    </div>
  </div>
</template>

<script>
import ComHeader from "../components/header";
export default {
  name: "app",
  components: { ComHeader },
   data() {
    return {
      loginUser: localStorage.getItem("loginUser"),
      content: "",
      title: "",
      state: "",
    };
  },
  methods: {
    postBlogs() {
      this.$http
        .post("/blogs/postBlogs", {
          user_id: localStorage.getItem("userId"),
          content: this.content,
          title: this.title,
        })
        .then((res) => {
          console.log(res);
          let { state } = res.data;
          if(state == 'success'){
            this.$router.push('/');
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.content-box {
  background-image: url("../assets/img/bg.jpg");
  overflow: scroll;
  background-size: cover;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .content {
    margin-top: 140px;
    display: flex;
    justify-content: center;
    text-align: center;

    .post-text {
    padding: 20px;
      background-color: #fff;
      width: 50%;
      .comments-textarea {
        background-color: #fff;
        border: 1px solid #00a1d6;
        border-radius: 4px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>