import Vue from 'vue'
import VueRouter from 'vue-router'

const views = require.context('../views', true, /\.vue$/)
console.log(views.keys())
Vue.use(VueRouter)
const routers = []
views.keys().forEach(item => {
  let name = item.slice(2, -4).toLowerCase()
  if (name.includes('index')) name = name.slice(0, -6)
  if (name.includes('_')) return
  routers.push({
    path: `/${name}`,
    name,
    component: () => import(`@/views${item.slice(1)}`)
  })
})

const routes = [
  ...routers,
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    component: () => import('../views/404.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
