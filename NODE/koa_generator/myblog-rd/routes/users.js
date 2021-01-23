const router = require('koa-router')()
const creatAuth = require('../auth')
router.prefix('/user')

router.post('/login', async (ctx, next) => {
  let {username,password} = ctx.request.body;
  if(username == 'lisi'&& password == '123456'){
    let playload = { 
      username,
      userId: Math.random(), 
    }
    //生成token
    // let token = jwt.sign(playload, secretKey,{ expiresIn: 20});//token时限
    let token = creatAuth.creatAuthration(playload);
    console.log(token);
    ctx.body = {state:"success", token}
  }else{
    ctx.body ={
      state: 'fail',
    } 
  }
})


module.exports = router
