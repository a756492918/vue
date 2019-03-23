import Vue from 'vue'
import App from './App'
import router from './router'

// 按需引入
import { NavBar ,Tabbar, TabbarItem } from 'vant';
Vue.use(NavBar).use(Tabbar).use(TabbarItem);

// 轮播模块
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

import { Card } from 'vant';
Vue.use(Card);                                                                                                                                                                                                                                                                                                                                                                                                                            

// 按钮模块
import { Button } from 'vant';
Vue.use(Button);

import  "animate.css"

// axios模块
import axios from 'axios'
Vue.prototype.$http=axios


// moment
import moment from 'moment'


// 全局过滤器
Vue.filter('data',(time,tem='YYYY-MM-DD hh:mm:ss')=>{
  return moment(time).format(tem);
})
// 定义全局根路径
axios.defaults.baseURL='http://localhost:5000'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
