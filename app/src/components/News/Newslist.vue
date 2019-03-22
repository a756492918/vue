<template>
  <div>
    <van-card :title="item.title" :thumb="item.img_url" v-for="item in newslist" :key="item.id">
      <div slot="price">
        <span>发表时间:{{item.add_time}}</span>
      </div>
      <div slot="num">
        <span>点击{{item.click}}次</span>
      </div>
    </van-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    newslist: []
  }),
  created() {
    this.getnewslist()
  },
  methods: {
    async getnewslist() {
      const {data,data:{status,message}} =await this.$http.get("/api/getnewslist");
      this.newslist=message;
    }
  }
};
</script>

<style  scoped>
</style>