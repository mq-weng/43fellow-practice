import Vue from 'vue'
import VueRouter from 'vue-router'
import Read from '../views/Read.vue'
import Sing from '../views/Sing.vue'
import Chat from '../views/Chat.vue'
import TvShow from '../views/TvShow.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'TvShow',
    component:TvShow
  },
  {
    path:'/read',
    name:'Read',
    component:Read
  }
  ,
  {
    path:'/chat',
    name:'Chat',
    component:Chat
  }
  ,
  {
    path:'/sing',
    name:'Sing',
    component:Sing
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
