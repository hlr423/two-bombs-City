import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/layout/index.vue'], resolve),
      children:[
        {
          path: '/',
          name: '人员统计',
          component: resolve => require(['@/layout/PersonnelStatistics.vue'], resolve)
        },
        {
          path: '/PersonnelCount',
          name: '人员计数',
          component: resolve => require(['@/layout/PersonnelCount.vue'], resolve)
        },
      ]
    },

  ]
})
