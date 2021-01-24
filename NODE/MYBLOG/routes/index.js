const Router = require('@koa/router');
const blogController = require('../controllers/blog_control');
const userController = require('../controllers/user_control');
const router = new Router();

//首页路由
router.get("/",blogController.welcom );

//登录路由
router.get("/login", async (ctx) => {
  await ctx.render("login.ejs");//配的ejs不好使吗？？？？
});
//登录提交表单
router.post("/login", userController.login);

//注册路由
router.get("/regist",async (ctx) => {
  await ctx.render("regist");
})

//注册提交表单
router.post("/regist", userController.regist);

//文章详细信息
router.get("/blog-detail/:blog_id",blogController.blogDetail);

router.get("/checkUser",userController.check)
module.exports = router;
