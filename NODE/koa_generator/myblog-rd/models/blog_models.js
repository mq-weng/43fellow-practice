
let db = require('./db');

module.exports = {
    getBlogData() {
        return db.query('select * from t_blog')
    },
    getBlogDetail(blogId) {
        return db.query(`SELECT blog.*, comm.comm_id, comm.content as comm_content, comm.post_time as comm_post_time, usr.username
        FROM t_blog blog  LEFT JOIN t_comment comm 
        ON comm.blog_id=blog.blog_id 
        LEFT JOIN t_user usr ON comm.user_id=usr.user_id
        WHERE blog.blog_id=?`,blogId);
    },


}