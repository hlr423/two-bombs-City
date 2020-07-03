import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

  const routes = [
    {
      path: '/',
      name: 'index',
      component: () => import('@/layout/index.vue'),
      children:[
        {
          path: '/',
          name: '人员统计',
          component: () => import('@/layout/PersonnelStatistics.vue')
        },
        {
          path: '/PersonnelCount',
          name: '人员计数',
          component: () => import('@/layout/PersonnelCount.vue')
        },
      ]
    },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
