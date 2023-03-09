<template>
  <van-nav-bar title="确认支付" left-arrow @click-left="$router.back()" safe-area-inset-top ></van-nav-bar>
  <div class="main">
    <div class="wrapper">
      <div class="number">XXXXXXXXXXXXXXX支付订单</div>
      <div class="money">
        <div>￥</div>
        <div>550</div>
      </div>
      <div class="info">
        <van-cell title="总金额" value="550.00元" :border="false"></van-cell>
        <van-cell title="医保支付" value="-60.00元" :border="false"></van-cell>
        <van-divider></van-divider>
        <van-cell title="合计待支付" value="-240.00元" :border="false"></van-cell>
      </div>

      <van-button block color="#0564F7" style="margin: .4rem 0">立即支付</van-button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
@import "src/assets/styles/pay.scss";

.main {
  .wrapper {
    background: #fff;
    padding: 0.2rem;
    .number {
      font-weight: bold;
      font-size: 18px;
      margin: 0.6rem 0;
      text-align: center;
    }
    .money {
      margin: 0.6rem 0;
      height: 5vh;
      display: flex;
      justify-content: center;
      div:nth-child(1) {
        font-size: 0.18rem;
        line-height: 4vh;
        font-weight: bold;

      }
      div:nth-child(2) {
        font-size: 0.3rem;
        line-height: 5vh;
        font-weight: bold;

      }
    }
    .info div,.info span{
      font-size: 0.15rem !important;
    }
  }
  padding: 0.15rem;
  .money {
    span {
      font-weight: bold;
      font-size: 0.18rem;
    }
    span:nth-child(1) {
    }
    span:nth-child(2) {
    }
  }
}
</style>

