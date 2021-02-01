const router = require('koa-router')()
const userControl = require('../controllers/user_control')
router.prefix('/user')

//用户登录
router.post('/login', userControl.login)

//用户注册
router.get("/regist",userControl.check);

//用户注册表单提交
router.post("/regist", userControl.regist);

module.exports = router

