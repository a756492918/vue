<template>
  <div class="photoinfo">
    <!-- 图片描述区域 -->
    <h3></h3>
    <p class="subtitle">
      <span>发表时间：{{time}}</span>
      <span>点击：{{click}}次</span>
    </p>
    <hr>

    <!-- 缩略图预览区域 -->
    <div class="thumbs">
      <img
        v-for="(item, index) in imagessuo"
        :key="item.id"
        @click="handleImage(index)"
        :src="item.src"
      >
    </div>
    <!-- 图片内容区域 -->
    <div class="content" v-html="content"></div>
    <comment :id="id"></comment>
  </div>
</template>

<script>
import { ImagePreview } from "vant"; // 缩略图的引入
import comment from './Comment'
export default {
  data: () => ({
    imageslist: [],
    imagessuo: [],
    time: '',
    click:'',
    content:'',
    id:''
  }),
  created() {
    this.id = this.$route.params.id;
    this.getimagesinfo();
    this.gettupian();
  },
  methods: {
    /**
     * 获取图片详细
     */
    async gettupian() {
      const {data,data:{message:{add_time,click,content}}} = await this.$http.get("/api/getimageInfo/" + this.id);
      this.time=add_time
      this.click =click
      this.content=content
      console.log(data);
      
    },

    /**
     * 获取缩略图
     *
     */
    async getimagesinfo() {
      const { data: { message } } = await this.$http.get("/api/getthumimages/" + this.$route.params.id);
      this.imagessuo = message;
      message.forEach(item => {
        if (item.src) {
          this.imageslist.push(item.src);
        }
      });
    },

    /**
     * 缩略图点击对应大图
     * @param {Number} index 点击事件传递过来的索引
     */
    handleImage(index) {
      ImagePreview({
        images: this.imageslist,
        startPosition: index
      });
    }
  },
  components:{
    comment
  }
};
</script>

<style lang="less">
.photoinfo {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

  .thumbs {
    display: flex;
    justify-content: space-around;
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>