// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// // 引用API文件
// import api from './api/index.js'
// // 将API方法绑定到全局
// Vue.prototype.$api = api
 Vue.config.productionTip = false
import Axios from 'axios'
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json';

import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
