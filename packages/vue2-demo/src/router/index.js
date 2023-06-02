import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { hidden: true, title: '首页', description: '首页' },
    component: () => import('@/views/HomeIndex.vue')
  },
  {
    path: '/pass-object-literals-as-props',
    name: 'pass-object-literals-as-props',
    meta: { title: 'props传递字面量对象', description: '父组件响应式数据导致子组件重复渲染' },
    component: () => import('@/views/PassObjectLiteralsAsProps')
  },
  {
    path: '/rxjs-axios',
    name: 'rxjs-axios',
    meta: { title: 'rxjs封装axios', description: 'rxjs封装axios' },
    component: () => import('@/views/RxjsAxios')
  }
];

const router = new VueRouter({
  routes
});

export default router;
