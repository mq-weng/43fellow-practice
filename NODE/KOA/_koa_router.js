const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

const Router = require('koa-router')
const router = new Router();
router.get()
app.use(router.routes()).use()