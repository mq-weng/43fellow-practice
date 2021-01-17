const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

// 我的需求：
// 1. http://localhost || http://localhost/index 加载index.html
// 2. http://localhost/todo 加载todo.html
// 3. http://localhost/xxx 加载404.html
// 那么我们的路由可以设定为：
// 1. "/"
// 2. "/index"
// 3. "/todo"
// 4. "/xxx"
