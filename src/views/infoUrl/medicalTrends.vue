<template>
  <div class="container">
    <div class="container-box">
      <!-- 新冠专栏 -->
      <div class="card special-column">
        <div class="module-title">新冠专栏</div>
        <div class="special-column-item">
          <div class="special-column-item-top">
            <!--          <img src="" alt="" />-->
            <div class="img"></div>
            <div class="special-column-item-title">
              <p class="special-column-item-p1">【突破】我院王xx教授带领团队攻克题，预计在下个月进行试药</p>
              <p class="special-column-item-p2">呼吸科·18小时前</p>
            </div>
          </div>

          <div class="special-column-item-bot van-row">
            <div class="van-col--18">
              <p class="special-column-item-bot-p1">【健康科普】新冠转阴后如何护理？</p>
              <p class="special-column-item-bot-p2">公司与华为长期深度跨界合作关系及合作模式均没有发生变化</p>
            </div>
            <div class="van-col--6">
              <div class="special-column-item-bot-img"></div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="special-column-item-bot van-row">
            <div class="van-col--18">
              <p class="special-column-item-bot-p1">【健康科普】新冠转阴后如何护理？</p>
              <p class="special-column-item-bot-p2">公司与华为长期深度跨界合作关系及合作模式均没有发生变化</p>
            </div>
            <div class="van-col--6">
              <div class="special-column-item-bot-img"></div>
              <!--              <img src="../../assets/images/home_banner.png" alt="" class="module5-item-img"/>-->
            </div>
          </div>
        </div>
      </div>
      <!-- 急诊专栏 -->
      <div class="card special-column">
        <div class="module-title">急诊专栏</div>
        <div class="special-column-item">
          <div class="special-column-item-top">
            <!--          <img src="" alt="" />-->
            <div class="img"></div>
            <div class="special-column-item-title">
              <p class="special-column-item-p1">【突破】我院王xx教授带领团队攻克题，预计在下个月进行试药</p>
              <p class="special-column-item-p2">呼吸科·18小时前</p>
            </div>
          </div>

          <div class="special-column-item-bot van-row">
            <div class="van-col--18">
              <p class="special-column-item-bot-p1">【健康科普】新冠转阴后如何护理？</p>
              <p class="special-column-item-bot-p2">公司与华为长期深度跨界合作关系及合作模式均没有发生变化</p>
            </div>
            <div class="van-col--6">
              <div class="special-column-item-bot-img"></div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="special-column-item-bot van-row">
            <div class="van-col--18">
              <p class="special-column-item-bot-p1">【健康科普】新冠转阴后如何护理？</p>
              <p class="special-column-item-bot-p2">公司与华为长期深度跨界合作关系及合作模式均没有发生变化</p>
            </div>
            <div class="van-col--6">
              <div class="special-column-item-bot-img"></div>
              <!--              <img src="../../assets/images/home_banner.png" alt="" class="module5-item-img"/>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.container-box {
  padding: 0.15rem !important;
  .special-column .special-column-item {
    margin-top: 0.15rem;
    .special-column-item-top {
      .img {
        width: 100%;
        height: 1.33rem;
        background: #F2DCDC;
        border-radius: 0.12rem;
      }
      .special-column-item-title {
        margin-top: 0.12rem;
        .special-column-item-p1 {
          font-size: 15px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 0.21rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .special-column-item-p2 {
          text-align: right;
          font-size: 12px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
        }
      }
    }
    .special-column-item-bot {
      padding: 0.15rem 0;
      .special-column-item-bot-p1 {
        font-size: 16px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        margin-bottom: 0.08rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .special-column-item-bot-p2 {
        font-size: 14px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 0.21rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .special-column-item-bot-img {
        width: 0.76rem;
        height: 0.76rem;
        background: #C4C4C4;
        border-radius: 0.08rem;
      }
    }
    .divider {
      width: 100%;
      height: 0.005rem;
      background: #CCCCCC;
    }
  }
}
</style>
