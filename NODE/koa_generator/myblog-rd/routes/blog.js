const router = require('koa-router')()
var jwt = require('jsonwebtoken');
router.prefix("/blog")

router.get("/list",
    async (ctx, next) => {
        if(ctx.header.authorization){
            let token = ctx.header.authorization
            console.log(token)
            try {
                jwt.verify(token, 'fgbb**');
                await next();
            } catch (err) {
                ctx.status = 401;
                ctx.body = "token不存在或已过期"
                console.log(err)
            }
        }
        // await next();

    }, async (ctx) => {
        let blogs = [];
        blogs = [{
            blogId: 1, blogTitle: '今日', blogContent: '到达'
        }, {
            blogId: 2, blogTitle: '昨日', blogContent: '从vvv发'
        }, {
            blogId: 3, blogTitle: '前日', blogContent: '风雨交加'
        },
        ];
        ctx.body = {
            blogs,
        }
    });

module.exports = router
