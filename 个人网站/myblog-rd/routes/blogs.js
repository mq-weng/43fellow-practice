const router = require('koa-router')()

const blogControl = require('../controllers/blog_control')
router.prefix("/blogs")
//首页
router.get("/list",blogControl.welcom);
//文章详情
router.get("/blogDetail",blogControl.blogDetail)
//发表文章
router.post("/postBlogs",blogControl.post);
//发表评论
router.post('/postComm',blogControl.postComm)
module.exports = router

