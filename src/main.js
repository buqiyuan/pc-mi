import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入重置css样式
import './styles/reset.css'
import './styles/common.css'
//导入阿里字体图标库
import './assets/fonts/iconfont.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
let baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://buqiyuan.xyz/pc-mi/'
  : 'http://localhost:3001'
//调试环境请求根路径
axios.defaults.baseURL = baseUrl;
//线上请求根路径
// axios.defaults.baseURL = 'https://buqiyuan.github.io/my-demo/pc-mi/dist';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//导入图片懒加载
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  // loading: './assets/loading.png',
  loading: 'https://i1.mifile.cn/f/i/2014/cn/placeholder-220!110x110.png',
  attempt: 1
})

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
