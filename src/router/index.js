import Vue from 'vue'
import VueRouter from 'vue-router'

const views = require.context('../views', true, /\.vue$/)

Vue.use(VueRouter)
const routers = []
views.keys().forEach(key => {
    let name = key.slice(2, -4).toLowerCase()
    if (name.indexOf('index') !== -1) name = name.slice(0, -6)
    routers.push({
        path: `/${name}`,
        name,
        component: () => import(`../views${key.slice(1)}`)
    })
})

const routes = [
    ...routers,
    {
        path: '/',
        name: 'Home',
        redirect: '/home'
    },
    {
        path: '*',
        component: () => import('../views/Error.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
