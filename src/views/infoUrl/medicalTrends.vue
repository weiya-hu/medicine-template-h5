<template>
  <div class="container">
    <div class="container-box">
      <!-- 新冠专栏 -->
      <div class="card special-column" v-for="(item, index) in specialColumnList" :key="index">
        <div class="module-title">{{ item.title }}</div>
        <div class="special-column-item">
          <div class="special-column-item-top" @click="handleClick">
            <img :src="item.imageUrl" alt=""/>
            <div class="special-column-item-title">
              <p class="special-column-item-p1">{{ item.specialColumnTitle }}</p>
              <p class="special-column-item-p2">{{ item.specialColumnTime }}</p>
            </div>
          </div>
          <div class="special-column-item-bot van-row" @click="handleClick">
            <div class="van-col--18">
              <p class="special-column-item-bot-p1">{{ item.specialColumnTitle1 }}</p>
              <p class="special-column-item-bot-p2">{{ item.specialColumnText1 }}</p>
            </div>
            <div class="van-col--6 special-column-item-bot-img">
              <img :src="item.imageUrl1" alt=""/>
            </div>
          </div>
          <div class="divider"></div>
          <div class="special-column-item-bot van-row" @click="handleClick">
            <div class="van-col--18">
              <p class="special-column-item-bot-p1">{{ item.specialColumnTitle2 }}</p>
              <p class="special-column-item-bot-p2">{{ item.specialColumnText3 }}</p>
            </div>
            <div class="van-col--6 special-column-item-bot-img">
              <img :src="item.imageUrl2" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
const specialColumnList = ref([
  {
    title: '新冠专栏',
    imageUrl: new URL('../../assets/images/home_banner.png', import.meta.url).href,
    specialColumnTitle: '【突破】我院王xx教授带领团队攻克题，预计在下个月进行试药',
    specialColumnTime: '呼吸科·18小时前',
    specialColumnTitle1: '【健康科普】新冠转阴后如何护理？',
    specialColumnText1: '公司与华为长期深度跨界合作关系及合作模式均没有发生变化',
    imageUrl1: new URL('../../assets/images/home_banner.png', import.meta.url).href,
    specialColumnTitle2: '【健康科普】新冠转阴后如何护理？',
    specialColumnText3: '公司与华为长期深度跨界合作关系及合作模式均没有发生变化',
    imageUrl2: new URL('../../assets/images/home_banner.png', import.meta.url).href,
  },
  {
    title: '急诊专栏',
    imageUrl: new URL('../../assets/images/home_banner.png', import.meta.url).href,
    specialColumnTitle: '【突破】我院王xx教授带领团队攻克题，预计在下个月进行试药',
    specialColumnTime: '呼吸科·18小时前',
    specialColumnTitle1: '【健康科普】新冠转阴后如何护理？',
    specialColumnText1: '公司与华为长期深度跨界合作关系及合作模式均没有发生变化',
    imageUrl1: new URL('../../assets/images/home_banner.png', import.meta.url).href,
    specialColumnTitle2: '【健康科普】新冠转阴后如何护理？',
    specialColumnText3: '公司与华为长期深度跨界合作关系及合作模式均没有发生变化',
    imageUrl2: new URL('../../assets/images/home_banner.png', import.meta.url).href,
  }
])

const handleClick = () => {
  router.push('medicaltrendsdetails')
}
</script>

<style lang="scss" scoped>
.container-box {
  padding: 0.15rem !important;

  .special-column .special-column-item {
    margin-top: 0.15rem;

    .special-column-item-top {
      img {
        width: 100%;
        height: 1.33rem;
        border-radius: 0.12rem;
      }

      .special-column-item-title {
        margin-top: 0.12rem;

        .special-column-item-p1 {
          font-size: 0.15rem;
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
          font-size: 0.12rem;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
        }
      }
    }

    .special-column-item-bot {
      padding: 0.15rem 0;

      .special-column-item-bot-p1 {
        font-size: 0.16rem;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        margin-bottom: 0.08rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .special-column-item-bot-p2 {
        font-size: 0.14rem;
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
        border-radius: 0.08rem;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
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
