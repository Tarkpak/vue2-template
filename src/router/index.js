import Vue from 'vue';
import VueRouter from 'vue-router';

const views = require.context('../views', true, /\.vue$/);

Vue.use(VueRouter);
const routers = [];
views.keys().forEach(item => {
  let name = item.slice(2, -4).toLowerCase();
  if (name.indexOf('index') !== -1) name = name.slice(0, -6);
  routers.push({
    path: `/${name}`,
    name,
    component: () => import(`../views${item.slice(1)}`),
  });
});

const routes = [
  ...routers,
  {
    path: '/',
    name: 'home',
    redirect: '/home',
  },
  {
    path: '*',
    component: () => import('../views/404.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
