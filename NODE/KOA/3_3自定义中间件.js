const Koa = require('koa')//默认加载node_modules里的包
const log = require("./3_4自定义中间建");
const app = new Koa()
app.use(log);
app.use((ctx) => {
    ctx.body = "添加日志啦"
})
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')