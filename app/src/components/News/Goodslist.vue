<template>
  <div class="goodslist">
    <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goodsinfo(item.id)">
      <img :src="item.img_url" alt>
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩1件</span>
        </p>
      </div>
    </div>

    <van-button type="danger" size="large" plain @click="getadd">加载更多</van-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    goodslist: [],
    // 默认请求第一页的数据
    pageindex: 1,
    // 一页只显示3条数据
    limit: 3,
    max: 10
  }),
  created() {
    this.getgoods();
  },
  methods: {
    async getgoods() {
      const {
        data: { message, status }
      } = await this.$http.get("/api/getgoods?pageindex=" + this.pageindex);
      console.log(message);
      this.goodslist = this.goodslist.concat(message);
    },
    goodsinfo(id) {
      this.$router.push("/home/goodsinfo/" + id);
    },
    getadd() {
      // 添加评论
      this.pageindex++;
      if (this.pageindex < 3) {
        this.getgoods();
      } else {
        return;
      }
    }
  }
};
</script>

<style lang="less">
.goodslist {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  // 两边对齐中间留空格
  justify-content: space-between;

  .goods-item {
    width: 48%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    // 默认x 轴
    // 设置为column 改为 y轴
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>