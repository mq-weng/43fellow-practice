const router = require('koa-router')()
var jwt = require('jsonwebtoken');

router.prefix('/user')

router.post('/login', async (ctx, next) => {
  let {username,password} = ctx.request.body;
  if(username == 'lisi'&& password == '123456'){
    let secret = 'fgbb**';
    let sec = { 
      username,
      userId: Math.random, 
    }
    let token = jwt.sign(sec, secret,{ expiresIn: 10});//token时限
    ctx.body = {state:"success", ato:token}
  }else{
    ctx.body = 'faile';
  }
})


module.exports = router
