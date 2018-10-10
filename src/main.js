import Vue from 'vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.css'
import app from './app'
import './permission'


Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(app)
});
