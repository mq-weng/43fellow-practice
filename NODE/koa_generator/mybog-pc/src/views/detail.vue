<template>
    <div class="container">
        <div class="blog">
            <div class="blog-title">
                <h3>title</h3>
                <span>
                    日期
                </span>
            </div>
            <div class="blog-content">
                content
            </div>
            <div class="comments">
                多条
                <h4>评论</h4>
                comments
                <div class="comment">
                    <div class="comment-content">
                       comm_content
                    </div>
                    <div class="comment-info">
                        <span class="userinfo">username</span>
                        <span class="post-time">postTime</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        blogId: '',
    };
  },
  created() {
      this.getblogId();
  },
  methods: {
      getblogId(){
          this.blogId = this.$route.query.blogId;
          console.log(this.blogId);
          
      }
  },
};
</script>

<style scoped>
.blog {
  margin: 20px auto;
  padding: 20px;
  background: #cccccc;
}
.blog-title {
  padding: 10px;
}
.blog-content {
  padding: 10px;
}
.comment {
  padding: 20px;
}
.comment-info {
  float: right;
}
</style>