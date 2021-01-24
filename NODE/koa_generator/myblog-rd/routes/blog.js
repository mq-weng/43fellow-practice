const router = require('koa-router')()
const verifyAuth = require('../auth')
router.prefix("/blog")

router.get("/list",verifyAuth.verifyAuthration, async (ctx) => {
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
            //state: "success",
            blogs,
        }
    });

module.exports = router
