import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/stations',
    name: 'Stations',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Stations.vue'),
  },
  {
    path: '/cars',
    name: 'Cars',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cars.vue'),
  },
  {
    path: '/routes',
    name: 'Routes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Routes.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
