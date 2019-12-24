import Vue from 'vue'
import Router from 'vue-router'

// 首页
import index from '../page/index.vue'
// 提示
import hint from '../page/hint.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'default',
			component: index
		},
		{
			path: '/index',
			name: 'index',
			component: index
		},
		{
			path: '/hint',
			name: 'hint',
			component: hint
		}
	]
})
