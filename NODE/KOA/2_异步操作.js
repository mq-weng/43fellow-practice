const Koa = require('koa')//默认加载node_modules里的包
const app = new Koa()
//app.use加载中间件
// app.use( async ( ctx ) => {
//   ctx.body = 'hello koa2'
// })

function getData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let data = Math.random();
            if(data){
                resolve(data);
            }else{
                reject('faile');
            }
        },2000)

    })
}

app.use(async (cxt) => {
    var data =await getData();
    cxt.body = data;
})

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')