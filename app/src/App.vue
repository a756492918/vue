<template>
  <div id="app">
    <!-- header  -->
    <van-nav-bar title="Vue·项目" fixed/>
    <!-- header end  -->
   <transition enter-active-class="fadeInRight" leave-active-class="fadeOutLeft">
      <router-view class="animated"></router-view>
    </transition>
    <!-- footer  -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/Home">首页</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" dot to="/Login">会员</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :info="$store.getters.key" to="/Search" id="quan">购物车</van-tabbar-item>
      <van-tabbar-item icon="search" to="Vip">搜索</van-tabbar-item>
    </van-tabbar>
    <!-- footer  end-->
    
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style>
#app {
  overflow-x: hidden;
  color: #2c3e50;
}
.van-nav-bar {
  z-index: 990 !important;
}
.animated {
  margin-top: 46px;
  padding-bottom: 50px !important;
}
.v-leave-to {
  position: absolute;
  left: -200%;
}
.van-nav-bar {
  background:#1989fa;
}
.van-nav-bar__title {
    color: #fff;
}

</style>
