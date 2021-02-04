<template>
  <div id="app" class="content-box">
    <com-header :loginUser="loginUser"></com-header>
    <div class="content">
      <div class="user-card">
        <div class="photo-wrapper">
          <img src="../assets/img/k1.jpg" alt="" />
        </div>
        <p>{{ loginUser }}</p>
      </div>
      <div class="content-right">
        <h4 class="comments">评论</h4>
        <div v-if="comments.length > 1">
          <!-- 大于0会出现一个不知道哪里来的时间 -->
          <div v-for="item in comments" :key="item.comm_id">
            <div class="comments-content">
              <div>
                {{ item.content }}
              </div>
              <div class="user-time">
                <span>{{ item.post_time }}</span>
              </div>
              <button @click="deletComm">删除评论</button>
            </div>
          </div>
        </div>
        <div v-else class="comments-content">
          <span>没有发表过评论哦</span>
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
      message: "",
    };
  },
  name: "app",
  components: {
    ComHeader,
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.loginUser = localStorage.getItem("loginUser");
      let userId = localStorage.getItem("userId");
      this.$http("/blogs/blogComments", {
        params: {
          user_id: userId,
        },
      }).then((res) => {
          console.log(res.data);
        this.comments = res.data.results;
      });
    },
    deletComm(){
        
    }
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
    text-align: center;
    .user-card {
      height: 300px;
      float: left;
      width: 15%;
      background: #fff;
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 8px;
      padding: 12px 16px;
      box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);

      .u-c-link {
        display: flex;
        justify-content: space-around;
        .u-c-content {
          margin-top: 20px;
        }
      }

      .postblogs {
        margin-top: 20px;
        a {
          color: #00a1d6;
        }
      }
    }

    .photo-wrapper img {
      left: 133px;
      //   margin: -50px 0 0;
      width: 90px;
      height: 90px;
      border: 4px solid hsla(0, 0%, 100%, 0.4);
      border-radius: 50%;
      transition: all 0.3s;
      cursor: pointer;
    }

    .content-right {
      width: 50%;
      margin-left: 6px;
      .comments {
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