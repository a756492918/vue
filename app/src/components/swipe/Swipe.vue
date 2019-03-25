<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in sweperlist" :key="item.id">
        <img :src="item.img" alt>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: ["sweperlist"]
};
</script>

<style lang='less' scoped>
.van-swipe {
  height: 200px;
  overflow-x: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>