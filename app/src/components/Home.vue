<template>
  <!-- sweper -->
  <div>
    <Swipe :sweperlist='sweperlist'></Swipe>
    <!-- sweper end-->

    <!-- main -->
    <gird></gird>
    <!-- main end -->
  </div>
</template>

<script>
import gird from './Gird/Gird.vue'
import Swipe from './swipe/Swipe.vue'
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
    gird,
    Swipe
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