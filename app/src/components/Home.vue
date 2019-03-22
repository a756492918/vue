<template>
  <!-- sweper -->
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in sweperlist" :key="item.id">
        <img :src="item.img" alt>
      </van-swipe-item>
    </van-swipe>
    <!-- sweper end-->

    <!-- main -->
    <gird></gird>
    <!-- main end -->
  </div>
</template>

<script>
import gird from './Gird/Gird.vue'
export default {
  data: () => ({
    sweperlist: []
  }),
  created() {
    this.getImg();
  },
  methods: {
    async getImg() {
    const {data: { message },status} = await this.$http.get("/api/getlunbo")
        // const {
        //   data: { message },
        //   status
        // } = res;
        this.sweperlist = message;
    }
  },
  components:{
    gird
  }
};
</script>

<style lang='less'  scoped>
.van-swipe {
  height: 200px;
  overflow-x: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>