<template>
  <div id="app" class="content-box">
    <com-header ></com-header>
    <div class="container">
      <div >
        <h3>{{ blogs.title }}</h3>
        <span> {{ blogs.post_time }} </span>
      </div>
      <div >{{ blogs.content }}</div>
      <div >
        <h4 class="comments">评论</h4>
        <div  v-for="item in comments" :key="item.comm_id" class="comments">
          <div >
            <span>评论内容：</span>{{ item.comm_content }}
          </div>
          <div class="user-time">
            <span style="margin-right:10px">{{ item.username }}</span>
            <span >{{ item.comm_post_time }}</span>
          </div>
        </div>
         <h4>发表评论: <button @click="postComm">发表评论</button>{{message}}</h4>
        <textarea
          style="background: #cccccc"
          name=""
          id=""
          cols="110"
          rows="10"
          v-model="textComm"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import ComHeader from "../components/header";
export default {
  data() {
    return {
      blogs: {},
      comments: [],
      loginUser: "",
      textComm: "",
      message: '',
    };
  },
  name: "app",
  components: {
    ComHeader,
  },
  created() {
    this.getblogId();
  },
  methods: {
    getblogId() {
      this.blogId = this.$route.query.blogId;
      this.$http("/blog/blogDetail", {
        params: {
          blogId: this.blogId,
        },
      }).then((res) => {
        console.log(res);
        let loginUser = localStorage.getItem("loginUser");
        this.loginUser = loginUser;
        this.blogs = res.data.blogs;
        this.comments = this.blogs.comments;
      });
    },
    postComm() {
      let userId = localStorage.getItem("userId");
      this.$http
        .post("/blog/postComm", {
          user_id: userId,
          blog_id: this.blogId,
          content: this.textComm,
        })
        .then((res) => {
          console.log(res);
          let {state, message} = res.data;
          this.message = message;
          if(state == 'success'){
            location.reload();//发表成功
          }
        });
    },
  },
};
</script>

<style scoped lang="scss">
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

  .container{
    margin-top: 155px;
  }
  }
</style>