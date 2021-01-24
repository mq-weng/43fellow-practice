const router = require('koa-router')()
const userControl = require('../controllers/user_control')
router.prefix('/user')

//用户登录
router.post('/login', userControl.login)


module.exports = router
