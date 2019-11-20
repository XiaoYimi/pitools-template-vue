import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/home',
  component: () => import ('@/pages/Home'),
  meta: { title: '首页' }
}, {
  path: '/home',
  name: 'home',
  component: () => import ('@/pages/Home'),
  meta: { title: '首页' }
}]

let router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) { document.title = to.meta.title }
  next()
})

export default router