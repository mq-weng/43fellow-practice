const router = require('koa-router')()

const blogControl = require('../controllers/blog_control')
router.prefix("/blog")

router.get("/list",blogControl.welcom);

router.get("/blogDetail",blogControl.blogDetail)

router.post("/postBlogs",blogControl.post);

router.post('/postComm',blogControl.postComm)
module.exports = router

