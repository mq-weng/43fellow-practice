import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "index" */ '../views/index.vue')
  },
  {
    path: '/artical',
    name: 'Artical',
    component: () => import(/* webpackChunkName: "index" */ '../views/artical.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "index" */ '../views/message.vue')
  },
  /*{
    path: '/diary',
    name: 'Diary',
    component: () => import( '../views/diary.vue')
  },*/
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "index" */ '../views/login.vue')
  },
  {
    path: '/regist',
    name: 'Regist',
    component: () => import(/* webpackChunkName: "index" */ '../views/regist.vue')
  },
  {
    path:'/blogDetail',
    name: 'BlogDetail',
    component: () => import(/* webpackChunkName: "index" */ '../views/blogDetail.vue')
  },
  {
    path:'/postblogs',
    name: 'Postblogs',
    component: () => import(/* webpackChunkName: "index" */ '../views/postblogs.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
