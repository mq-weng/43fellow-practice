const router = require('koa-router')()
const verifyAuth = require('../auth/index')
const blogControl = require('../controllers/blog_control')
router.prefix("/blogs")
//首页
router.get("/list",blogControl.welcom);
//文章详情
router.get("/blogDetail",blogControl.blogDetail)
//发表文章
router.post("/postBlogs",verifyAuth.verifyAuthration,blogControl.post);
//发表评论
router.post('/postComm',verifyAuth.verifyAuthration,blogControl.postComm);
//获取评论by user_id
router.get('/blogComments',blogControl.getComm)
module.exports = router

