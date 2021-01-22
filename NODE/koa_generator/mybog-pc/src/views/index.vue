<template>
  <div class="container">
    <div class="blog-list">
      <div class="blog" v-for="item in blogList" :key="item.blogId">
        <h3 class="blog-title">
          <a href="/blog/detail/">{{ item.blogTitle }}</a>
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
      this.axios({
        url: "http://localhost:3000/blog/list",
        headers: {//注意是headers(不是header)
           "Authorization": localStorage.getItem("mytoken")
            }
      }).then((res) => {
        let { blogs } = res.data; //list比较特殊？？？
        this.blogList = blogs;
      });
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