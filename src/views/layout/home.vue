<template>
  <div class="container">
    <!--banner-->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="(item, index) in bannerList" :key="index">
          <img :src="item.imageUrl" alt=""/>
          <div class="banner-title">
            <p class="banner-title-p1">{{ item.title }}</p>
            <p class="banner-title-p2">{{ item.text }}</p>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="container-box">
      <!-- 功能模块 -->
      <div class="card module1 van-row">
        <div class="van-col--12 module1-item" @click="functionalClick(item.navUrl)"
             v-for="(item, index) in functionalList" :key="index">
          <img :src="item.imageUrl" alt=""/>
          <div class="module1-item-text">
            <p class="module1-item-text-p1">{{ item.text1 }}</p>
            <p class="module1-item-text-p2">{{ item.text2 }}</p>
          </div>
        </div>
      </div>
      <!-- 就诊服务 -->
      <div class="card module2">
        <div class="module-title">就诊服务</div>
        <van-swipe indicator-color="#0564F7">
          <van-swipe-item v-for="(item, index) in visitUrlList" :key="index" class="van-row">
            <div
                v-for="(items, indexs) in item.navBar"
                :key="indexs"
                class="module2-swiper-item van-col--6"
                @click="visitClick(items.navUrl, items.code)"
            >
              <img :src="items.imageUrl" alt=""/>
              <p>{{ items.text }}</p>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 信息服务 -->
      <div class="card module3">
        <div class="module-title">信息服务</div>
        <div class="van-row">
          <div
              class="van-col--6 module3-item"
              v-for="(item, index) in infoUrlList"
              :key="index"
              @click="infoClick(item.navUrl, item.code)"
          >
            <img :src="item.imageUrl" alt=""/>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
      <!-- 特色服务 -->
      <div class="card module4">
        <div class="module-title">特色服务</div>
        <van-row gutter="10">
          <van-col span="12" class="module4-item" @click="featuredClick">
            <img src="../../assets/images/home_module4_item1.png" alt=""/>
            <p class="module4-item-p1 color1">住院病案复印邮寄</p>
            <p class="module4-item-p2 color3">住院病案线上申请</p>
          </van-col>
          <van-col span="12" class="module4-item" @click="featuredClick">
            <img src="../../assets/images/home_module4_item2.png" alt=""/>
            <p class="module4-item-p1 color2">住院病案复印邮寄</p>
            <p class="module4-item-p2 color4">住院病案线上申请</p>
          </van-col>
          <van-col span="12" class="module4-item" @click="featuredClick">
            <img src="../../assets/images/home_module4_item2.png" alt=""/>
            <p class="module4-item-p1 color2">住院病案复印邮寄</p>
            <p class="module4-item-p2 color4">住院病案线上申请</p>
          </van-col>
          <van-col span="12" class="module4-item" @click="featuredClick">
            <img src="../../assets/images/home_module4_item1.png" alt=""/>
            <p class="module4-item-p1 color1">住院病案复印邮寄</p>
            <p class="module4-item-p2 color3">住院病案线上申请</p>
          </van-col>
        </van-row>
      </div>
      <!-- 健康宣教 -->
      <div class="card module5">
        <div class="van-row van-row--justify-space-between">
          <div class="module-title">健康宣教</div>
          <div class="module5-more" @click="featuredClick">更多 ></div>
        </div>
        <div class="module5-item van-row" @click="featuredClick">
          <div class="van-col--18">
            <p class="module5-item-p1">【健康科普】新冠转阴后如何护理？</p>
            <p class="module5-item-p2">公司与华为长期深度跨界合作关系及合作模式均没有发生变化</p>
          </div>
          <div class="van-col--6">
            <img src="../../assets/images/home_banner.png" alt="" class="module5-item-img"/>
          </div>
        </div>
        <div class="divider"></div>
        <div class="module5-item van-row" @click="featuredClick">
          <div class="van-col--18">
            <p class="module5-item-p1">新冠转阴后如何护护理？</p>
            <p class="module5-item-p2">公司与华为长期深度跨界合作关系及合作模式均没有发生变化</p>
          </div>
          <div class="van-col--6">
            <img src="../../assets/images/home_banner.png" alt="" class="module5-item-img"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {useRouter} from 'vue-router'
import {categoryTree_api} from '@/api/infoUrl'
import {showToast} from 'vant'
import {wechatAuthJump_api} from '@/api/index'
import {setToken} from '@/utils/cache'

const router = useRouter()
// 背景
const bannerList = ref([
  {
    imageUrl: new URL('../../assets/images/home_banner.png', import.meta.url).href,
    title: '重庆医科大学附属儿童医院',
    text: '简介文字简介文字简介文字简介文字简介文字简介文字',
  },
  {
    imageUrl: new URL('../../assets/images/home_banner.png', import.meta.url).href,
    title: '重庆医科大学附属儿童医院',
    text: '简介文字简介文字简介文字简介文字简介文字简介文字',
  },
  {
    imageUrl: new URL('../../assets/images/home_banner.png', import.meta.url).href,
    title: '重庆医科大学附属儿童医院',
    text: '简介文字简介文字简介文字简介文字简介文字简介文字',
  },
])

// 功能模块
const functionalList = ref([
  {
    navUrl: 'register',
    imageUrl: new URL('../../assets/images/home_module1_item1.png', import.meta.url).href,
    text1: '预约挂号',
    text2: '查询医保记录',
  },
  {
    navUrl: 'payRecord',
    imageUrl: new URL('../../assets/images/home_module1_item2.png', import.meta.url).href,
    text1: '门诊缴费',
    text2: '手机在线缴费'
  },
  {
    imageUrl: new URL('../../assets/images/home_module1_item3.png', import.meta.url).href,
    text1: '医保查询',
    text2: '查询医保记录'
  },
  {
    imageUrl: new URL('../../assets/images/home_module1_item4.png', import.meta.url).href,
    text1: '医保电子凭证',
    text2: '绑定医保信息'
  },
])

// 就诊服务
const visitUrlList = ref([
  {
    navBar: [
      {
        // navUrl: 'queueCall',
        code: '',
        imageUrl: new URL('../../assets/images/home_module2_item1.png', import.meta.url).href,
        text: '排队叫号',
      },
      {
        // navUrl: 'examination',
        code: '',
        imageUrl: new URL('../../assets/images/home_module2_item2.png', import.meta.url).href,
        text: '体检预约',
      },
      {
        // navUrl: 'medicalTechnology',
        code: '',
        imageUrl: new URL('../../assets/images/home_module2_item3.png', import.meta.url).href,
        text: '医技预约',
      },
      {
        navUrl: 'record',
        code: '',
        imageUrl: new URL('../../assets/images/home_module2_item4.png', import.meta.url).href,
        text: '预约记录',
      },
      {
        navUrl: 'report/list',
        code: '',
        imageUrl: new URL('../../assets/images/home_module2_item5.png', import.meta.url).href,
        text: '检查报告',
      },
      {
        // navUrl: 'discharge',
        code: '',
        imageUrl: new URL('../../assets/images/home_module2_item6.png', import.meta.url).href,
        text: '出院办理',
      },
      {
        // navUrl: 'reservation',
        code: '',
        imageUrl: new URL('../../assets/images/home_module2_item7.png', import.meta.url).href,
        text: '疫苗预约',
      },
      {
        // navUrl: 'nucleicAcidTest',
        code: '',
        imageUrl: new URL('../../assets/images/home_module2_item8.png', import.meta.url).href,
        text: '核酸检查',
      },
    ],
  },
  {
    navBar: [
      {
        navUrl: 'medicalInsurance',
        code: 'MEDICAL_INSURANCE',
        imageUrl: new URL('../../assets/images/home_module2_item9.png', import.meta.url).href,
        text: '医保专栏',
      },
      {
        // navUrl: 'commercialInsurance',
        code: '',
        imageUrl: new URL('../../assets/images/home_module2_item10.png', import.meta.url).href,
        text: '商业医保',
      },
      {
        // navUrl: 'tencentDictionary',
        code: '',
        imageUrl: new URL('../../assets/images/home_module2_item11.png', import.meta.url).href,
        text: '腾讯医典',
      },
      {
        // navUrl: 'restaurant',
        code: '',
        imageUrl: new URL('../../assets/images/home_module2_item12.png', import.meta.url).href,
        text: '餐饮服务',
      },
      {
        navUrl: 'tohospital',
        code: '',
        imageUrl: new URL('../../assets/images/home_module2_item13.png', import.meta.url).href,
        text: '到院导航',
      },
      {
        // navUrl: 'houseNavigation',
        code: '',
        imageUrl: new URL('../../assets/images/home_module2_item14.png', import.meta.url).href,
        text: '院内导航',
      },
    ],
  },
])

// 信息服务
const infoUrlList = ref([
  {
    navUrl: 'hospitalProfile',
    code: 'HOSPITAL_PROFILE',
    imageUrl: new URL('../../assets/images/home_module3_item1.png', import.meta.url).href,
    text: '医院简介',
  },
  {
    navUrl: 'departments',
    code: 'DEPARTMENT_MANAGEMENT',
    imageUrl: new URL('../../assets/images/home_module3_item2.png', import.meta.url).href,
    text: '科室推荐',
  },
  {
    navUrl: 'expertTeam',
    code: 'PHYSICIAN_MANAGEMENT',
    imageUrl: new URL('../../assets/images/home_module3_item3.png', import.meta.url).href,
    text: '专家团队',
  },
  {
    navUrl: 'medicalGuide',
    code: 'MEDICAL_GUIDE',
    imageUrl: new URL('../../assets/images/home_module3_item4.png', import.meta.url).href,
    text: '就医指南',
  },
  {
    navUrl: 'medicalTrends',
    code: 'MEDICAL_TRENDS',
    imageUrl: new URL('../../assets/images/home_module3_item5.png', import.meta.url).href,
    text: '医疗动态',
  },
])

// 功能模块
const functionalClick = (url: any) => {
  if (url) {
    router.push(url)
  } else {
    showToast('暂未开放')
  }
}
// 就诊服务
const visitClick = (data: any, code: any) => {
  if (data) {
    router.push({
      path: data,
      query: {code: code}
    })
  } else {
    showToast('暂未开放')
  }
}
// 信息服务
const infoClick = (url: any, code: any) => {
  router.push({
    path: url,
    query: {code: code},
  })
}
// 特色服务
const featuredClick = () => {
  showToast('暂未开放')
}

//getToken
const getToken = () => {
  const code = router.currentRoute.value.query.code
  if (!code) return

  const data = {auth_code: router.currentRoute.value.query.code}
  wechatAuthJump_api(data).then((res: IObj) => {
    setToken(res.data.authorizerAccessToken)
  })
}

getToken()
</script>

<style scoped lang="scss">
.container {
  .banner {
    .my-swipe .van-swipe-item {
      position: relative;

      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }

      .banner-title {
        width: 2.38rem;
        padding: 0.39rem 0.15rem;
        box-sizing: border-box;
        color: #ededed;

        .banner-title-p1 {
          font-size: 0.16rem;
          line-height: 0.32rem;
          font-weight: bold;
          font-family: PingFang SC-Bold, PingFang SC;
        }

        .banner-title-p2 {
          font-weight: 400;
          font-size: 0.13rem;
          line-height: 0.21rem;
          font-family: PingFang SC-Regular, PingFang SC;
        }
      }
    }
  }

  .container-box {
    .card {
      transform: translateY(-0.2rem);
    }

    .module1 {
      .module1-item {
        display: flex;
        align-items: center;

        img {
          width: 0.5rem;
          height: 0.5rem;
          margin-right: 0.1rem;
        }

        .module1-item-text {
          .module1-item-text-p1 {
            font-size: 0.15rem;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
            line-height: 0.21rem;
          }

          .module1-item-text-p2 {
            font-size: 0.13rem;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;
            line-height: 0.24rem;
          }
        }

        &:nth-child(3),
        &:nth-child(4) {
          margin-top: 0.15rem;
        }
      }
    }

    .module2 {
      padding-bottom: 0.2rem;

      :deep(.van-swipe__indicators) {
        width: 0.4rem;
        bottom: 0;

        .van-swipe__indicator {
          width: 50%;
          height: 0.02rem;
          border-radius: 1.93rem 1.93rem 1.93rem 1.93rem;
          background: #d4d4d4;
        }

        .van-swipe__indicator:not(:last-child) {
          margin: 0;
        }
      }

      .module2-swiper-item {
        text-align: center;
        margin-bottom: 0.2rem;

        img {
          width: 0.4rem;
          height: 0.4rem;
        }

        p {
          font-size: 0.14rem;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
        }

        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
          margin: 0.1rem 0 0.15rem;
        }
      }
    }

    .module3 {
      .module3-item {
        text-align: center;
        margin-top: 0.15rem;

        img {
          width: 0.4rem;
          height: 0.4rem;
        }

        p {
          font-size: 0.14rem;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
        }
      }
    }

    .module4 {
      .module4-item {
        position: relative;
        height: 0.7rem;
        font-family: PingFang SC-Regular, PingFang SC;
        margin-top: 0.1rem;

        img {
          width: 1.52rem;
          height: 0.7rem;
        }

        .module4-item-p1 {
          position: absolute;
          left: 0.1rem;
          top: 0.13rem;
          font-size: 0.15rem;
          font-weight: 400;
        }

        .module4-item-p2 {
          position: absolute;
          left: 0.1rem;
          bottom: 0.16rem;
          font-size: 0.13rem;
          font-weight: 400;
        }

        .color1 {
          color: #b54848;
        }

        .color3 {
          color: #dfabab;
        }

        .color2 {
          color: #5385b1;
        }

        .color4 {
          color: #93bce1;
        }
      }
    }

    .module5 {
      .module5-more {
        font-size: 0.14rem;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
      }

      .module5-item {
        padding: 0.17rem 0;

        .module5-item-p1 {
          font-size: 0.16rem;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          margin-bottom: 0.08rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .module5-item-p2 {
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

        .module5-item-img {
          width: 0.76rem;
          height: 0.76rem;
          border-radius: 0.08rem;
        }
      }

      .divider {
        width: 100%;
        height: 0.005rem;
        background: #cccccc;
      }
    }
  }
}
</style>
