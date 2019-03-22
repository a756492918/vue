import Vue from 'vue'
import App from './App'
import router from './router'

// 按需引入
import { NavBar ,Tabbar, TabbarItem } from 'vant';
Vue.use(NavBar).use(Tabbar).use(TabbarItem);

// 轮播模块
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
import  "animate.css/animate.css"
// axios模块
import axios from 'axios'
Vue.prototype.$http=axios
axios.defaults.baseURL='http://localhost:5000'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
