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
    path: '/pass-object-literals-as-props1',
    name: 'pass-object-literals-as-props1',
    meta: { title: 'props传递字面量对象', description: '父组件响应式数据导致子组件重复渲染' },
    component: () => import('@/views/PassObjectLiteralsAsProps')
  },
  {
    path: '/pass-object-literals-as-props2',
    name: 'pass-object-literals-as-props2',
    meta: { title: 'props传递字面量对象', description: '父组件响应式数据导致子组件重复渲染' },
    component: () => import('@/views/PassObjectLiteralsAsProps')
  },
  {
    path: '/pass-object-literals-as-props3',
    name: 'pass-object-literals-as-props3',
    meta: { title: 'props传递字面量对象', description: '父组件响应式数据导致子组件重复渲染' },
    component: () => import('@/views/PassObjectLiteralsAsProps')
  },
  {
    path: '/pass-object-literals-as-props4',
    name: 'pass-object-literals-as-props4',
    meta: { title: 'props传递字面量对象', description: '父组件响应式数据导致子组件重复渲染' },
    component: () => import('@/views/PassObjectLiteralsAsProps')
  },
  {
    path: '/pass-object-literals-as-props5',
    name: 'pass-object-literals-as-props5',
    meta: { title: 'props传递字面量对象', description: '父组件响应式数据导致子组件重复渲染' },
    component: () => import('@/views/PassObjectLiteralsAsProps')
  },
  {
    path: '/pass-object-literals-as-props6',
    name: 'pass-object-literals-as-props6',
    meta: { title: 'props传递字面量对象', description: '父组件响应式数据导致子组件重复渲染' },
    component: () => import('@/views/PassObjectLiteralsAsProps')
  },
  {
    path: '/pass-object-literals-as-props7',
    name: 'pass-object-literals-as-props7',
    meta: { title: 'props传递字面量对象', description: '父组件响应式数据导致子组件重复渲染' },
    component: () => import('@/views/PassObjectLiteralsAsProps')
  }
];

const router = new VueRouter({
  routes
});

export default router;
