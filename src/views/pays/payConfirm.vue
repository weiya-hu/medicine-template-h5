<template>
  <div class="container">
    <div class="banner">
      <div class="banner-pay">付款给</div>
      <div class="banner-name">重庆儿童医院</div>
    </div>
    <div class="cell-group">
      <div class="cell-item cell-item1">
        <div class="cell-item-p1">费用总额</div>
        <div class="cell-item-p1">240元</div>
      </div>
      <van-divider :style="{borderColor: '#CCCCCC' }" />
      <div class="cell-item">
        <div class="cell-item-p2">医保支付</div>
        <div class="cell-item-p2">200元</div>
      </div>
      <div class="cell-item">
        <div class="cell-item-p2">自费</div>
        <div class="cell-item-p2">40元</div>
      </div>
      <div class="cell-item">
        <div class="cell-item-p3">现金支付</div>
        <div class="cell-item-p3">0元</div>
      </div>
    </div>
  </div>
  <div class="btn">
    <div class="money">您还需支付：<span>40元</span></div>
    <van-button color="#0564F7">去支付</van-button>
  </div>
</template>
<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.container {
  .banner {
    height: 1.76rem;
    background: #0564F7 url("../../assets/images/payConfirm-banner.png") no-repeat calc(100% - 0.15rem) 0.20rem;
    padding: 0.20rem 0.15rem;
    .banner-pay {
      font-size: 0.14rem;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      opacity: 0.5;
    }
    .banner-name {
      margin-top: 0.03rem;
      font-size: 16px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
    }
  }
  .cell-group {
    transform: translateY(-0.90rem);
    margin: 0 0.15rem;
    padding: 0.25rem 0.20rem;
    background: #FFFFFF;
    border-radius: 0.08rem;
    .cell-item {
      padding: 0.07rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .cell-item-p1 {
        font-size: 0.16rem;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        color: #333333;
      }
      .cell-item-p2 {
        font-size: 0.14rem;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
      }
      .cell-item-p3 {
        font-size: 0.14rem;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #0564F7;
      }
    }
    .cell-item1 {
      padding: 0;
    }
  }
}
.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .money {
    font-size: 0.16rem;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    span {
      font-size: 0.16rem;
      font-family: PingFang SC-Bold, PingFang SC;
      font-weight: bold;
      color: #0564F7;
    }
  }
  .van-button {
    width: 1.18rem;
  }
}
</style>
