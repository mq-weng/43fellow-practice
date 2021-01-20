const Koa = require('koa');
//引入模板引擎
const views = require('koa-views');
const path = require('path');
//引入koa-static
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
//引入路由模块
const router = require('./routes');

//解析中间件
app.use(bodyParser());

//配置模板引擎
app.use(views(path.join(__dirname, "/views"), {
        extensions: "ejs",
    })
    );

//配置静态资源目录
app.use(static(path.join(__dirname, "./public")))

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);
console.log("start-quick is starting at port 3000");