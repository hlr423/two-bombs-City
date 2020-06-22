import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'view-design'
import Antd from 'ant-design-vue';
import elementUi from 'element-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'view-design/dist/styles/iview.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false;
// Vue.prototype.defines=common;
Vue.use(iView);
Vue.use(Antd);
Vue.use(elementUi);
Vue.use(VueRouter);
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
