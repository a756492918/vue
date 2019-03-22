<template>
  <div>
    <router-link v-for="item in newslist" :key="item.id" :to="'/home/newslist/newsinfo/'+item.id"  >
      <van-card :title="item.title" :thumb="item.img_url" >
        <div slot="price">
          <span>发表时间:{{item.add_time|data}}</span>
        </div>
        <div slot="num">
          <span>点击{{item.click}}次</span>
        </div>
      </van-card>
    </router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    newslist: []
  }),
  created() {
    this.getnewslist();
  },
  methods: {
    async getnewslist() {
      const {
        data,
        data: { status, message }
      } = await this.$http.get("/api/getnewslist");
      this.newslist = message;
    }
  }
};
</script>

<style  scoped>
.van-card {
  height: 60px;
}
</style>