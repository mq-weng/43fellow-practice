let fs = require('fs');

let log = function (ctx){
    let data = ctx.method + " " + ctx.header.host + ctx.url +"\n";
    fs.appendFile('./log.txt',data,() => {
        console.log("已经添加日志");
    })
}

module.exports = async (ctx ,next ) => {
    log(ctx);
    await next();
}