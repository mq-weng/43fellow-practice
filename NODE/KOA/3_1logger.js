
function log( ctx ) {
    console.log( ctx.method, ctx.header.host + ctx.url )
}

module.exports = async function ( ctx,next) {
    log(ctx);
    await next()
}