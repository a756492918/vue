import Vue from 'vue'
import App from './App'
import router from './router'
// css初始化
import './assets/style/reset.css'
// css1像素问题
import './assets/style/border.css'
// 300ms延迟问题
import fastClick from 'fastclick'
Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
