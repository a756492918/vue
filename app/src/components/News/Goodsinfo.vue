<template>
  <div class="goodsinfo">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    <!-- 轮播区域 -->
    <div class="panel">
      <swiper :sweperlist="sweperlist" class="my-swiper"></swiper>
    </div>
    <!-- 购买区域 -->
    <div class="panel">
      <h2 class="title">荣耀</h2>
      <hr>
      <div class="panel-body">
        <div class="price-group">
          市场价格:
          <span class="old">{{goodsinfo.market_price}}</span>
          销售价格:
          <span class="new">{{goodsinfo.sell_price}}</span>
        </div>
        <div class="stepper">
          <div class="number">购买数量:</div>
          <!-- 
            :min="1" 默认就是1 不添加也可以 
            plus 点击添加的时候触发 
            minus 点击减少的时候触发  
          -->
          <van-stepper v-model="value" integer class="number"/>
        </div>
        <div class="btn-group">
          <van-button type="primary" size="small">立即购买</van-button>
          <van-button type="danger" :disabled="btnFlag" size="small" @click="add">加入购物车</van-button>
        </div>
      </div>
    </div>

    <!-- 描述区域 -->
    <div class="panel">
      <h2 class="title">商品参数</h2>
      <hr>
      <div class="panel-body">
        <p>商品货号：123</p>
        <p>库存情况：123件</p>
        <p>上架时间：123</p>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "../swipe/Swipe.vue";
import { Toast } from "vant";
export default {
  data: () => ({
    id: "",
    value: 1,
    sweperlist: [],
    goodsinfo: {},
    step: 1,
    btnFlag: false,
    ballFlag: false,
    xDist: 0,
    yDist: 0
  }),
  created() {
    this.getlunbotu();
    this.getGoodsInfo()
  },
  methods: {
    async getlunbotu() {
      this.id = this.$route.params.id; // 获取路由传参
      let id = Number(this.id) + 100;
      const {
        data: { message }
      } = await this.$http.get("api/getthumimages/" + id);
      this.sweperlist = message;
      console.log(this.sweperlist);
    },
    async getGoodsInfo() {
      // 获取商品的信息
      const {
        data: { status, message }
      } = await this.$http.get("api/goods/getinfo/" + this.id);
      if (status === 0) {
        this.goodsinfo = message;
        console.log(this.goodsinfo); 
      } else {
        Toast("获取商品信息失败");
      }
    },
    add() {
      var car = { id: this.id, count: this.value ,price: this.goodsinfo.sell_price,};
      this.$store.commit("add",car);
      this.ballFlag = true;
      
    },



    getclent() {
      var ball = document.querySelector(".ball");
      var quan = document.querySelector("#quan .van-icon");
    },
    beforeEnter: el => {
      el.style.transform = "translate(0,0)";
    },
    enter: (el, done) => {
      el.offsetTop;
      var ball = document.querySelector(".ball").getBoundingClientRect();
      var quan = document
        .querySelector("#quan .van-icon")
        .getBoundingClientRect();
      const xDist = quan.left - ball.left;
      const yDist = quan.top - ball.top;

      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      el.style.transition = "all 1s cubic-bezier(.23,.88,.24,.88)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    }
  },
  components: {
    swiper
  }
};
</script>

<style lang="less">
.goodsinfo {
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: red;
    position: absolute;
    top: 327px;
    left: 138px;
    z-index: 20;
    opacity: 1;
  }
  .panel {
    width: 96%;
    border: 2px dashed #38f;
    border-radius: 6px;
    box-shadow: 0 0 3px #38f;
    margin: 0 auto;
    margin-top: 10px;
    .my-swiper {
      text-align: center;
      height: 166px;
      line-height: 166px;
      img {
        vertical-align: middle;
      }
    }
    .title {
      font-size: 16px;
      margin: 10px 0 10px 10px;
    }
    .panel-body {
      margin-left: 16px;
      margin-bottom: 10px;
      color: #8f8f94;
      font-size: 14px;
      .price-group {
        margin-bottom: 12px;
        .old {
          text-decoration: line-through;
          margin-right: 6px;
        }
      }
      .stepper {
        color: #8f8f94;
        font-size: 0;
        .number {
          display: inline-block;
          font-size: 14px;
          margin-right: 6px;
        }
      }
      .btn-group {
        margin-top: 10px;
      }
      p {
        margin-top: 10px;
      }
    }
  }
}
</style>