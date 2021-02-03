<template>
  <div class="content-box" id="app">
    <com-header :loginUser = "loginUser"></com-header>
    <div class="content">
      <div class="user-card">
        <div class="photo-wrapper">
          <img src="../assets/tTSY.jpg" alt="" />
        </div>
        <p>是美七呀</p>
        <div class="u-c-link">
          <router-link to="/" class="u-c-content">
            <p style="color: #00a1d6">25</p>
            <p>文章</p>
            <!-- 记得放数据  -->
          </router-link>
          <router-link to="/message" class="u-c-content">
            <p style="color: #00a1d6">25</p>
            <p>留言版</p>
            <!-- 记得放数据  -->
          </router-link>
          <router-link to="" class="u-c-content">
            <p style="color: #00a1d6">25</p>
            <p>日记</p>
            <!-- 记得放数据  -->
          </router-link>
        </div>

        <div class="postblogs">
          <router-link to="/postblogs">发表文章</router-link>
        </div>
      </div>
      <div class="blogs">
        <div class="blogs-header">
          <span>文章<div class="blogs-num">25</div></span>
          <!-- 这里后期换掉,可以为文章详细分类 -->
        </div>
        <div class="blogs-content" v-for="item in blogList" :key="item.blog_id">
          <h3 class="">
            <!-- <a href="/blog/detail/">{{ item.blogTitle }}</a> -->
            <router-link
              :to="{ path: '/blogDetail', query: { blogId: item.blog_id } }"
              >{{ item.title }}</router-link
            >
          </h3>
          <p>{{ item.content }}</p>
          <span>{{ item.post_time }}</span>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import ComHeader from "../components/header"
export default {
  name: 'app',
  components:{ComHeader},
  data() {
    return {
      blogList: [],
      loginUser: "",
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      console.log('看起来的毫不费力，是拼了命的努力呀');
      this.$http({
        url: "/blogs/list",
      }).then((res) => {
        let { blogs } = res.data;
        this.loginUser = localStorage.getItem("loginUser");
        this.blogList = blogs;
        // console.log(localStorage.getItem("mytoken"));
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

      .postblogs{
        margin-top: 20px;
        a{
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

    .blogs {
      width: 50%;
      float: left;
      margin-left: 6px;

      .blogs-header {
        height: 60px;
        line-height: 60px;
        background: #fff;
        border-radius: 4px;

        .blogs-num {
          display: inline-block;
          background: #73c9e5;
          border-radius: 2px;
          color: #fff;
          margin-left: 1px;
          transform: scale(0.85);
          width: 32px;
          text-align: center;
          line-height: 22px;
        }
      }

      .blogs-content {
        background: #fff;
        padding: 20px;
        margin: 20px 0;
        border-radius: 4px;
      }
    }
  }
}
</style>