<template>
  <div class="newsinfo">
    <!-- 大标题 -->
    <h3 class="title">{{getnewlist.title}}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{getnewlist.add_time}}</span>
      <span>点击：{{getnewlist.click}}次</span>
    </p>

    <hr>
    <!-- 内容区域 -->
    <div class="content">{{getnewlist.content}}</div>

    <!-- 评论区  -->
    <pl :id="id"></pl>
    <!-- 评论区end  -->
  </div>
</template>

<script>
import pl from "./Comment.vue"; //引入子组件

export default {
  data: () => ({
    id: "",
    getnewlist: {}
  }),
  created() {
    this.cateid();
  },
  methods: {
    async cateid() {
      this.id = this.$route.params.id;
      const {
        data: { message, status }
      } = await this.$http.get("api/getnew/" + this.id);
      this.getnewlist = message;
    }
  },
  components:{
    pl
  }
};
</script>

<style lang="less">
.newsinfo {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>