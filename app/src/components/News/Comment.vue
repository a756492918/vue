<template>
  <div class="comment">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="user"></textarea>
    <van-button type="danger" size="large" @click="addcomment">发表评论</van-button>

    <div class="cmt-list" v-for="(item,i) in commentlist" :key="i">
      <div class="cmt-item">
        <div
          class="cmt-title"
        >第1楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|data}}</div>
        <div class="cmt-body">{{item.content}}</div>
      </div>
    </div>
    <van-button type="danger" size="large" plain @click="getadd">{{more}}</van-button>
  </div>
</template>

<script>
import { Toast } from "vant"; // 引入轻敲模块

export default {
  data: () => ({
    pageindex: 1, // 分页
    commentlist: [],
    user: ""
  }),
  created() {
    this.getcomments();
  },
  methods: {
    async getcomments() {
      // 渲染评论
      const {
        data: { message }
      } = await this.$http.get(`/api/getcomments/${this.id}?${this.pageindex}`);
      this.commentlist = this.commentlist.concat(message);
    },
    getadd() {
      // 添加评论
      this.pageindex++;
      if (this.pageindex < 3) {
        this.getcomments();
      } else {
        return;
      }
    },
    async addcomment() {
      // 添加评论
      if (!this.user) {
        return Toast("评论不能为空");
      }
      const { data:{status} } = await this.$http.post(`/api/postcomment/${this.id}`, {
        content: this.user
      });
      if (status === 0) {
        // 1. 拼接出一个评论对象
        var cmt = {
          user_name: "匿名用户",
          content: this.user.trim()
        };
        // 添加到数组的开头 重新修改  comments 使得  model 改变  v-for 自动就刷新数据
        this.commentlist.unshift(cmt);
        // 清空
        this.user = "";
      }
    }
  },
  computed: {
    more() {
      return this.pageindex < 3 ? "加载更多" : "没有更多数据";
    }
  },
  props: ["id"] //获取父组件传递过来的值
};
</script>

<style lang="less" scoped>
.comment {
  padding-bottom: 50px;
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    width: 100%;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>