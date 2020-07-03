import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'view-design'
import AntDVue from 'ant-design-vue';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'view-design/dist/styles/iview.css';
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(AntDVue);
Vue.use(VueRouter);
Vue.use(VueResource);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
