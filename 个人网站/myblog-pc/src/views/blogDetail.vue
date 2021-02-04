<template>
  <div id="app" class="content-box">
    <com-header :loginUser="loginUser"></com-header>
    <div class="content">
      <div class="content-left">
        <h1 class="title">{{ blogs && blogs.title }}</h1>
        <div class="blogs-content">{{ blogs && blogs.content }}</div>
        <span class="blogs-posttime"> {{blogs && blogs.post_time }} </span>
        <div class="post-comments">
          <textarea
            placeholder="期待你的发言呀"
            class="comments-textarea"
            v-model="textComm"
            rows="10"
            cols="60"
          ></textarea>
          <div >
            {{ message }}
            <button @click="postComm" >发表评论</button>
          </div>
        </div>
      </div>

      <div class="content-right">
        <h4 class="comments">评论</h4>
        <div v-if="comments.length > 1"><!-- 大于0会出现一个不知道哪里来的时间 -->
          <div v-for="item in comments" :key="item.comm_id">
          <div class="comments-content">
            <div >
              {{ item.comm_content }}
            </div>
            <div class="user-time">
              <span style="margin-right: 10px">{{ item.username }}</span>
              <span>{{ item.comm_post_time }}</span>
            </div>
          </div>
        </div>
        </div>
        <div v-else class="comments-content">
          <span>还没有人评论哦</span>
        </div>



      </div>


    </div>
  </div>
</template>

<script>
import ComHeader from "../components/header";
export default {
  data() {
    return {
      blogs: null,
      comments: [],
      loginUser: "",
      textComm: "",
      message: "",
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

    //获取文章详情
    getblogId() {
      this.blogId = this.$route.query.blogId;
      this.$http("/blogs/blogDetail", {
        params: {
          blogId: this.blogId,
        },
      }).then((res) => {
        let loginUser = localStorage.getItem("loginUser");
        this.loginUser = loginUser;
        this.blogs = res.data.blogs;
        this.comments = this.blogs.comments;
      });
    },
    //发表评论
    postComm() {
      let userId = localStorage.getItem("userId");
      this.$http
        .post("/blogs/postComm", {
          user_id: userId,
          blog_id: this.blogId,
          content: this.textComm,
        })
        .then((res) => {
          console.log("postcomm" + res);
          let { state, message } = res.data;
          this.message = message;
          if (state == "success") {
            location.reload(); //发表成功
          }
        })
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

  .content {
    margin-top: 140px;
    display: flex;
    justify-content: center;
    .content-left {
      height: 500px;
      width: 40%;
      background-color: #fff;
      border-radius: 4px;
      padding: 20px;
      box-sizing: border-box;
      .title {
        font-size: x-large;
        font-weight: 500;
        text-align: center;
      }

      .blogs-content {
        font-size: large;
      }

      .blogs-posttime {
        font-size: large;
        float: right;
      }
      .post-comments {
        text-align: center;
        .comments-textarea {
          background-color: #fff;
          border: 1px solid #00a1d6;
          border-radius: 4px;
          margin-top: 30px;
          margin-bottom: 20px;
        }
      }
    }

    .content-right {
      width: 20%;
      margin-left: 6px;
      .comments{
        text-align: center;
        font-size: large;
        font-weight: 600;
      }
      .comments-content {
        background-color: #fff;
        margin-top: 10px;
        border-radius: 4px;
        padding: 20px;
        box-sizing: border-box;
      }
    }
  }
}
</style>