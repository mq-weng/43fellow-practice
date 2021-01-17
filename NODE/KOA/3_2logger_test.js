const Koa = require('koa'); // koa v2
const loggerAsync  = require('./3_logger');
const app = new Koa();

app.use(loggerAsync)

app.use(( ctx ) => {
    ctx.body = 'hello world!'
})

app.listen(3000)
console.log('the server is starting at port 3000')