const Router = require('@koa/router');

const router = new Router();

var mysql = require('mysql');
//连接池
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'myblog',
});
 

//首页路由
router.get("/",async (ctx) => {
    await ctx.render("index");
})

//登录路由
router.get("./login",async (ctx) => {
    await ctx.render("login");
});

function getData(){
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT something FROM sometable', function (error, results, fields) {
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          // Don't use the connection here, it has been returned to the pool.
        });
      });
}

module.exports = router;