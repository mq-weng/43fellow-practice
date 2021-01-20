const Router = require('@koa/router');

const router = new Router();






//首页路由
router.get("/", async (ctx) => {
  //查询所有文章数据
  let results = await getBlogData()
  await ctx.render("index.ejs", {
    blogs: results
  });
})

//登录路由
router.get("/login", async (ctx) => {
  await ctx.render("login.ejs");
});

router.post("/login", async (ctx) => {
  let {username,password} = ctx.request.body;
  let results = await getUserData(username,password);
  // console.log(results)
  if(results.length>0){
    await ctx.redirect("/");//重定向
  }else{
    await ctx.render("error.ejs",{
      message: "登录失败，用户名或密码不正确",
    })
  }
})


module.exports = router;