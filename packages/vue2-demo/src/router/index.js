import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeIndex.vue')
  },
  {
    path: '/pass-object-literals-as-props',
    name: 'pass-object-literals-as-props',
    component: () => import('@/views/PassObjectLiteralsAsProps')
  }
];

const router = new VueRouter({
  routes
});

export default router;
