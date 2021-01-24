const userModels = require('../models/user_models');
const creatAuth = require('../auth');

module.exports = {
    //用户登录
    async login(ctx){
        //1.接收表单
        let {username,password} = ctx.request.body;
        let results = await userModels.getUserData(username,password);
        console.log(results);
        let userId = results.user_id;
        //2.安全验证（还没写完哦）
        if(username.length == 0){
            
        }else{
          if(results.length>0){
            let playload = { 
              username,
              userId: userId, 
            }
            //生成token
            // let token = jwt.sign(playload, secretKey,{ expiresIn: 20});//token时限
            let token = creatAuth.creatAuthration(playload);
            console.log(token);
            ctx.body = {state:"success", token}
            ctx.session.username = username
            await ctx.redirect("/");//重定向
          }else{
            await ctx.render("error.ejs",{
              message: "登录失败，用户名或密码不正确",//这个还没使
              state: 'fail',
            })
          }
        }
      },

      //用户注册
    async regist(ctx){
        //接收表单
        let user= ctx.request.body;//{ username: '不后悔', password: '566', nickname: '翁文' }
         await userModels.saveUserData(user);
        
    },

    //注册用户名验证
    async check (ctx){
      let {username} = ctx.query;
      console.log(username);
      let user = await userModels.getUserName(username);
      if(user.length > 0){
        console.log('dgjgjggjgjj');
        ctx.body = 'fail'
      }else{
        ctx.body = 'success'
      }
    }
}