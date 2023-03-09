<template>
  <div class="container">
    <div class="container-box">
      <div class="order">XXXXXXXXXXXXXXX支付订单</div>
      <div class="money">
        <span>￥</span>500
      </div>
      <van-cell title="总金额" value="550.00元" :border="false" size="large"></van-cell>
      <van-cell title="医保支付" value="-60.00元" size="large" :border="false"></van-cell>
      <van-divider :style="{ borderColor: '#CCCCCC', padding: '0 0.15rem' }"></van-divider>
      <van-cell title="合计待支付" value="-240.00元" :border="false" size="large"></van-cell>
      <div class="pay-btn">
        <van-button block color="#0564F7" @click="onClick">立即支付</van-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
const onClick = () => {
  router.push('payConfirm')
}
</script>

<style scoped lang="scss">
.container {
  padding: 0.20rem 0.15rem;
  .container-box {
    background: #FFFFFF;
    padding: 0.50rem 0 0.30rem;
    border-radius: 0.12rem;
    .order {
      text-align: center;
      font-size: 0.18rem;
      font-family: PingFang SC-Bold, PingFang SC;
      font-weight: bold;
      color: #333333;
    }
    .money {
      margin: 0.35rem 0 0.56rem;
      text-align: center;
      font-weight: bold;
      font-size: 0.3rem;
      font-family: PingFang SC-Bold, PingFang SC;
      line-height: 5vh;
      color: #333333;
      display: flex;
      justify-content: center;
      span {
        font-size: 0.18rem;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        color: #333333;
        line-height: 4vh;
      }
    }
    .pay-btn {
      width: 1.70rem;
      height: 0.40rem;
      margin: 0.58rem auto 0;
      .van-button {
        height: 100%;
      }
    }
  }
}
</style>
