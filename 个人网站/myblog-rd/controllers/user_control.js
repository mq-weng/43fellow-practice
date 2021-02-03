const userModels = require('../../../../myBlog/myblog-rd/models/user_models');
const creatAuth = require('../../../../myBlog/myblog-rd/auth');

module.exports = {
  //用户登录
  async login(ctx) {
    //1.接收表单
    let { username, password } = ctx.request.body;
    //2.安全验证
    if (username.length == 0) {
      ctx.body = {
        inputState: 'fail',
        message: '用户名不能为空！',
      }
    } else {
      //连接数据库
      let results = await userModels.getUserData(username, password);
      if (results.length > 0) {
        let { user_id } = results[0];
        let userId = user_id
        let playload = {
          username,
          userId: userId,
        }
        //生成token
        //let token = jwt.sign(playload, secretKey,{ expiresIn: 20});//token时限
        let loginUser = username;
        let token = creatAuth.creatAuthration(playload);
        console.log(userId);
        ctx.body = { state: "success", token, loginUser, userId };
      } else {
        ctx.body = {
          message: "登录失败，用户名或密码不正确",
          state: 'fail',
        }
      }
    }
  },
  //用户注册
  async regist(ctx) {
    // 1. 接收表单数据
    let { username, password, nickname } = ctx.request.body;
    // 2. 安全验证
    if (username.trim().length == 0) {
       ctx.body = {
         message: '用户名不能为空！',
       }
    } else {
      //3.连接查询数据库，验证用户名是否重复
      let checkUsername="";
      checkUsername =await userModels.getUserName(username);
      console.log("checkUsername"+checkUsername.length);
      if(checkUsername.length > 0){
        ctx.body={message:'用户已名存在!'}
      }else{
        // 4. 连接添加数据库
        let results = await userModels.saveUserData({ username, password, nickname });
  
          // 5. 根据查询的结果跳转(或输出)不同的结果页面
        if (results.insertId) {
          //通过判断insertId是不是有正常值，如果有，说明插入成功
          ctx.body = {
            state: 'success',
            message: '注册成功'
          }
        } else {
          ctx.body = {
            message: "注册失败!",
          };
        }
      }
      }
  },




  //注册用户名验证
  async check(ctx) {
    let { username } = ctx.request.body;
    console.log(username);//undefind
    let results = await userModels.getUserName(username);
    console.log('usercontroller-', results);
    if (results.length > 0) {
      ctx.body = "fail"
    } else {
      ctx.body = 'success';
    }
  }
}