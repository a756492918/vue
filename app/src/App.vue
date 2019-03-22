<template>
  <div id="app">
    <!-- header  -->
    <van-nav-bar title="一飞冲天"/>
    <!-- header end  -->
   <transition enter-active-class="fadeInRight" leave-active-class="fadeOutLeft">
      <router-view class="animated"></router-view>
    </transition>
    <!-- footer  -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/Home">首页</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" dot to="/Login">会员</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/Search">购物车</van-tabbar-item>
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

.v-leave-to {
  position: absolute;
  left: -200%;
}

</style>
