<template>
  <div class="cart">
    <div
      class="cart-group"
    >
      <div class="cart-s">
        <van-switch
          size="20px"
        />
      </div>
      <div class="cart-p">
    
        <van-card
        >
          <div slot="desc">
            <van-stepper

            />
          </div>
        </van-card>
      </div>
    </div>
    <van-submit-bar
      :price="3050"
      button-text="提交订单"

    />
  </div>
</template>

<script>
export default {
  data: () => ({
    goodslist: [],
    flag: true
  }),
 

};
</script>

<style lang="less">
.cart {
  padding: 10px;
  .cart-group {
    border: 1px solid pink;
    margin-top: 10px;
    box-shadow: 1px 1px 3px pink;
    display: flex;
    // border-bottom: none;
    .cart-s {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .cart-p {
      flex: 4;
    }
    .van-stepper__minus, .van-stepper__plus {
      width: 28px;
    }
    .van-stepper {
      margin-top: 10px;
    }
  }
}
</style>