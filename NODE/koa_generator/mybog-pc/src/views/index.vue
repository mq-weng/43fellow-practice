<template>
  <div class="container">
    <div class="blog-list">
      <div class="blog" v-for="item in blogList" :key="item.blogId">
        <h3 class="blog-title">
          <!-- <a href="/blog/detail/">{{ item.blogTitle }}</a> -->
          <router-link
            :to="{ path: '/blogDetail', query: { blogId: item.blogId } }"
            >{{ item.blogTitle }}</router-link
          >
        </h3>
        <p class="blog-content">{{ item.blogContent }}</p>
        <span class="post-time">{{ item.postTime }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogList: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http({
        url: "/blog/list",
      }).then((res) => {
        // console.log(res.data.state)
        //if (res.data.state == "success") {
          let { blogs } = res.data; //list比较特殊？？？
          this.blogList = blogs;
        //} else {
          //this.$router.push('/login');
          console.log(localStorage.getItem("mytoken"));
        // }
      })
     /*封装在了http文件里
      .catch((error) => {
        this.$router.push('/login');
        console.log(error);//status状态码
      })*/
    },
  },
};
</script>

<style scoped>
.blog-list {
  width: 815px;
  margin: 20px auto;
}
.blog {
  background: #cccccc;
  padding: 20px;
  margin: 20px 0;
}
.blog-title,
.blog-content,
.post-time {
  margin: 20px 0;
}
</style>