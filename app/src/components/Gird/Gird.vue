<template>
  <div class="gird">
    <div class="demo-icon">
      <router-link  class="van-col van-col--6" v-for="item in girds" :key="item.id" :to="item.to" tag='div'>
        <i class="van-icon">
          <img :src="item.src">
        </i>
        <span>{{item.title}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    girds: [
      {
        id: 1,
        to: "/home/newslist",
        title: "新闻资讯",
        src: "/static/gird/menu1.png"
      },
      {
        id: 2,
        to: "/home/photolist",
        title: "图片分享",
        src: "/static/gird/menu2.png"
      },
      {
        id: 3,
        to: "/home/goodslist",
        title: "商品购买",
        src: "/static/gird/menu3.png"
      },
      {
        id: 4,
        to: "/home/newslist",
        title: "留言反馈",
        src: "/static/gird/menu4.png"
      },
      {
        id: 5,
        to: "/home/newslist",
        title: "视频区域",
        src: "/static/gird/menu5.png"
      },
      {
        id: 6,
        to: "/home/newslist",
        title: "联系我们",
        src: "static/gird/menu6.png"
      }
    ]
  })
};
</script>

<style lang="less">
.gird {
  .demo-icon {
    font-size: 0;
    padding-top: 10px;
    .demo-icon-list {
      padding-top: 10px;
      box-sizing: border-box;
      min-height: calc(100vh - 65px);
    }
    .van-col {
      float: none;
      text-align: center;
      width: 33.33333%;
      display: inline-block;
      vertical-align: middle;
      img {
        width: 60px;
        height: 60px;
      }
      span {
        display: block;
        padding: 0 5px;
        font-size: 12px;
        line-height: 14px;
      }
    }
    .van-icon {
      font-size: 32px;
      margin: 15px 0;
      color: #455a64;
    }
  }
}
</style>