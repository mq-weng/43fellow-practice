
const blogModels = require('../models/blog_models');

module.exports = {
    async welcom(ctx) {
        //查询所有文章数据
        let results = await blogModels.getBlogData()
        console.log("用户名" + ctx.session.username);
        await ctx.render("index.ejs", {
            blogs: results,
            username:ctx.session.username,
        });
    },
    async blogDetail(ctx) {

        /*let {post_time,title,content} = db.query('SELECT post_time,title,content FROM t_blog WHERE blog_id=?',blogId);
            let results ={post_time,title,content};
           results.comments =[];
           let comments= db.query('SELECT t_comment.* FROM t_blog LEFT JOIN t_comment ON t_blog.blog_id=t_comment.blog_id WHERE t_blog.blog_id=?',blogId);
           for(let i=0; i<=comments.length;i++){
               results.comments.push(comments[i]);
           }*/

        let results = await blogModels.getBlogDetail(ctx.params.blog_id);
        if (results.length > 0) {
            let { title, content, post_time, blog_id } = results[0];
            let blogInfo = {
                blog_id,
                title,
                content,
                post_time,
            };
            blogInfo.comments = [];

            for (let i = 0; i < results.length; i++) {
                let obj = results[i];
                blogInfo.comments.push({
                    comm_id: obj.comm_id,
                    comm_content: obj.comm_content,
                    username: obj.username,
                    comm_post_time: obj.comm_post_time,
                })
            }
            await ctx.render('blog-detail.ejs', {
                blog: blogInfo,
                username:ctx.session.username,
            })
        } else {
            await ctx.render('error.ejs',
                { message: "这篇文章不存在" },
            )
    }
}
}
