const Router = require('@koa/router');

const router = new Router();

var mysql = require('mysql');
//连接池
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'myblog',
});

// function getBlogData() {
//   return new Promise((resolve, reject) => {
//     pool.query('select * from t_blog', function (error, results, fields) {
//       if (error)  reject (error);
//       else resolve(results[0]);
//       console.log('The solution is: ', results);
//     });
//   })
// }

//获取文章数据
function getBlogData() {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) { reject(err) }// not connected!
      else {
        // Use the connection
        connection.query('select * from t_blog', function (error, results, fields) {
          // When done with the connection, release it.
          connection.release();//释放连接，放回pool中

          // Handle error after the release.
          if (error) {
            reject(err);
          } else {
            resolve(results);
            // console.log(results);
          }
          // Don't use the connection here, it has been returned to the pool.
        });
      }
    });
  })
}

//登录验证
function getUserData(username,password) {
  return new Promise((resolve,reject) => {
    pool.getConnection(function (err, connection) {
      if (err){
        reject(err) // not connected!
      } 
      else{
         // Use the connection
      connection.query(`select * from t_user where username='${username}' and password='${password}'`, function (error, results, fields) {
        // When done with the connection, release it.
        connection.release();
        // Handle error after the release.
        if (err){
          reject(err) // not connected!
        } 
        else{
          resolve(results);
        // Don't use the connection here, it has been returned to the pool.
        }
      }
      );
      }
    });
  })
}

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
    await ctx.render("index");//登录成功的页面？？？
  }else{
    await ctx.render("error.ejs",{
      message: "登录失败，用户名或密码不正确",
    })
  }
})

module.exports = router;