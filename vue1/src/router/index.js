import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Course from '../views/Course.vue'
import Fe from '../views/Fe.vue'
import De from '../views/De.vue'
import User from '../views/User.vue'
import Error from '../views/Error.vue'
import Index from '../views/Index.vue'
Vue.use(VueRouter)

const routes = 
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		// 传参
		path: '/course',
		name: 'Course',
		component: Course,
		children:[{
			path: 'fe',
			component: Fe
		}, {
			path: 'de',
			component: De
		}]
	},
	{
		path:'/user',
		name:'User',
		component:User
	},
	{
		path:'*',
		name:'Error',
		component:Error
	},
	{
		path:'/index',
		name:'Index',
		component:Index
	}

]

const router = new VueRouter({
	routes
})

export default router
