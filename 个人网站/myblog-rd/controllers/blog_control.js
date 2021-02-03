const date = require('../utils/dateTimeUtil')
const blogModels = require('../models/blog_models');
module.exports = {
    async welcom(ctx) {
        console.log('执行了');
        //查询所有文章数据
        let time;
        let results = await blogModels.getBlogData();
        console.log(results);
        for(i in results){
            let {post_time} = results[i];
            time = new Date(post_time);
            results[i].post_time = date.formatTime(time,"YYYY-mm-dd HH:MM");
        }
        ctx.body = {
            blogs: results,
        };
    },

    async blogDetail(ctx) {
        let results = await blogModels.getBlogDetail(ctx.query.blogId);
        console.log(results);
        if (results.length > 0) {
            let { title, content, post_time, blog_id } = results[0];
            let time = new Date(post_time);
            post_time = date.formatTime(time,"YYYY-mm-dd HH:MM");
            let blogInfo = {
                blog_id,
                title,
                content,
                post_time,
            };
            // console.log(blogInfo);
            blogInfo.comments = [];
            for (let i = 0; i < results.length; i++) {
                let obj = results[i];
                let timecomm = new Date(obj.comm_post_time);
                console.log(timecomm);
                obj.comm_post_time = date.formatTime(timecomm,"YYYY-mm-dd HH:MM");
                blogInfo.comments.push({
                    comm_id: obj.comm_id,
                    comm_content: obj.comm_content,
                    username: obj.username,
                    comm_post_time:obj.comm_post_time,
                })
            }
            ctx.body = { blogs: blogInfo,}
        } else {

            ctx.body = { message: "这篇文章不存在" }
        }

    },
    async post(ctx) {
        let { user_id, content, title } = ctx.request.body;
        if (user_id ) {
            let results = await blogModels.savePostBlogs({ user_id, content, title });
            if (results.insertId) {
                //通过判断insertId是不是有正常值，如果有，说明插入成功
                ctx.body = {
                    state:'success',
                }
                console.log('发表成功');
            } else {
                ctx.body = {
                    message: "发表失败!",
                    state: 'fail'
                };
            }
        }
    },
    async postComm(ctx) {
        let { user_id, blog_id, content } = ctx.request.body;
        let results = await blogModels.savePostComm({ user_id, blog_id, content } );
        if (results.insertId) {
            //通过判断insertId是不是有正常值，如果有，说明插入成功
            ctx.body = {
                state: 'success',
                message: '发表成功'
            }
            console.log('发表成功');
        } else {
            ctx.body = {
                state: 'fail',
                message: "发表失败",
            };
        }
    },
}
