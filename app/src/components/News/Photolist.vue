<template>
  <div>
    <van-tabs @click="image">
      <van-tab v-for="index in imagelist" :key="index.id" :title="index.title"></van-tab>
    </van-tabs>
    <router-link v-for="img in imageslist" :key="img.id" :to="'/home/Photoinfo/'+img.id">
      <img v-lazy="img.img_url">
    </router-link>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data: () => ({
    imagelist: [],
    imageslist: []
  }),
  created() {
    this.getimages();
    this.image(0);
  },
  methods: {
    // 获取tab标签
    async getimages() {
      const {data,data: { message ,status}} = await this.$http.get("/api/getimgcategory");
      if(status!=0){
        return Toast('获取数据失败');
      }
      
      message.unshift({ id: 0, title: "全部" });
      this.imagelist = message;
    },
    // 获取每一个标签的内容
    async image(index) {
      const {
        data: { message },
        status
      } = await this.$http.get("/api/getimages/" + index);
      this.imageslist = message;
    }
  }
};
</script>

<style  scoped>
</style>