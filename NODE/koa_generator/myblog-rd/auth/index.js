let jwt = require('jsonwebtoken');

let secretKey = 'fgbb**';
module.exports = {
    creatAuthration(playload) {
        return jwt.sign(playload, secretKey);
    },

    async verifyAuthration(ctx, next) {
    if (ctx.header.authorization) {
        let token = ctx.header.authorization
        console.log(token)
        try {
            jwt.verify(token, secretKey);
            await next();
        } catch (err) {
            // ctx.status = 401;
            ctx.body = {
                state: "fail",
                token: "token不存在或已过期"
            }
            console.log('blog' + err)
        }
     }
    },

}