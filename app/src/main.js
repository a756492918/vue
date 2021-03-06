import Vue from 'vue'
import App from './App'
import router from './router'

// 按需引入
import { NavBar ,Tabbar, TabbarItem ,Stepper,Switch,SubmitBar } from 'vant';
Vue.use(NavBar).use(Tabbar).use(TabbarItem).use(Stepper).use(Switch).use(SubmitBar);

// 轮播模块
import { Swipe, SwipeItem,Lazyload  } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Lazyload);

import { Card } from 'vant';
Vue.use(Card);                                                                                                                                                                                                                                                                                                                                                                                                                            

// 按钮模块
import { Button } from 'vant';
Vue.use(Button);

import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);

import  "animate.css"

// axios模块
import axios from 'axios'
Vue.prototype.$http=axios


// moment
import moment from 'moment'

import store from './store/index'

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
  store,
  components: { App },
  template: '<App/>'
})
