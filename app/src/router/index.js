import Vue from 'vue'    //引入vue模块
import Router from 'vue-router'   //引入路由模块

//引入组件
import Home from '@/components/Home'
import Login from '@/components/Login'
import Search from '@/components/Search'
import Vip from '@/components/Vip'
import Newslist from '@/components/News/Newslist'
import Photolist from '@/components/News/Photolist'
import Goodslist from '@/components/News/Goodslist'
Vue.use(Router)   //注册路由

//暴露路由规则
export default new Router({
  routes: [{
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      component: Home,
    },
    {
      path: '/Login',
      component: Login,
    },
    {
      path: '/Search',
      component: Search,
    },  
    {
      path: '/Vip',
      component: Vip,
    },
    {
      path: '/home/newslist',
      component: Newslist,
    },
    {
      path: '/home/photolist',
      component: Photolist,
    },
    {
      path: '/home/goodslist',
      component: Goodslist,
    }
  ]
})
