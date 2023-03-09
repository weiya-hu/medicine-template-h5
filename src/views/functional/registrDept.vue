<template>
  <div class="container">
    <div class="banner">
      <div class="banner-title">风湿免疫科</div>
      <div class="banner-text">本专科对生长障碍，营养不良，食物过敏，佝偻病，注意缺陷多动障碍，语言障碍，孤独症谱系障碍</div>
    </div>
    <div class="container-box">
      <div class="time card">
        <van-cell @click="showData = true" is-link :border="false">
          <template #title>
            <span>{{ dateTime }}</span>
          </template>
          <template #value>
            <span>更多日期</span>
          </template>
        </van-cell>
        <div class="time-bon">
          <div class="time-bon-item" v-for="(item, index) in dateList" :key="index">
            <div class="week">{{ item.week }}</div>
            <van-button :class="['date-back', activeDate == index ? 'active-back' : '']" :color="activeDate == index ? '#0564F7' : ''" :disabled="item.status == '无'" @click="dateClick(index, item)">
              <div class="date">{{ item.date }}</div>
              <div class="status" >{{ item.status }}</div>
            </van-button>
          </div>
        </div>
      </div>
      <van-calendar color="#0564F7" v-model:show="showData" :min-date="minDate" :max-date="maxDate" :formatter="formatter"
                    @confirm="onConfirm"/>
      <div class="list">
        <van-tabs v-model:active="active" swipeable>
          <van-tab v-for="(item, index) in specialistList" :key="index" :title="item.title">
            <van-list
                v-model:loading="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
              <div class="specialist-item" v-for="(items, indexs) in item.list" :key="indexs" @click="onClick">
                <div class="item-top">
                  <div class="item-top-left">
                    <img :src="items.userImg || deFaultHeader_img" alt=""/>
                  </div>
                  <div class="item-top-center">
                    <div class="item-top-center-p1">{{ items.name }}</div>
                    <div class="item-top-center-p2">{{ items.dept }}</div>
                  </div>
                  <div class="item-top-right">￥ {{ items.money }}</div>
                </div>
                <div class="item-bon">
                  <div class="item-bon-left">{{ items.brief }}</div>
                  <div class="item-bon-right" :class="items.remaining !== 0 ? 'item-bon-right1' : 'item-bon-right2'">
                    {{ items.remaining !== 0 ? '余号：' + items.remaining : '约满' }}
                  </div>
                </div>
              </div>
            </van-list>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import deFaultHeader_img from '@/assets/images/header.png'

const router = useRouter();
const active = ref(0);
const activeDate = ref(0)
const dateList = ref([]);
const loading = ref(false);
const finished = ref(false);

const minDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
const maxDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())
let dateTime = ref('')
let weekArray = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

const list = ref([]);
const showData = ref(false);
const onConfirm = (date: any) => {
  dateTime.value = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}` + ' ' + weekArray[date.getDay()];
  showData.value = false;
  dateList.value = [
    {
      week: weekArray[date.getDay()],
      date: date.getMonth() + 1 + '/' + date.getDate(),
      status: '约满'
    },
    {
      week: weekArray[date.getDay() + 1],
      date: date.getMonth() + 1 + '/' + (date.getDate() + 1),
      status: '有号'
    },
    {
      week: weekArray[date.getDay() + 2],
      date: date.getMonth() + 1 + '/' + (date.getDate() + 2),
      status: '有号'
    },
    {
      week: weekArray[date.getDay() + 3],
      date: date.getMonth() + 1 + '/' + (date.getDate() + 3),
      status: '无'
    },
    {
      week: weekArray[date.getDay() - 3],
      date: date.getMonth() + 1 + '/' + (date.getDate() - 3),
      status: '无'
    },
    {
      week: weekArray[date.getDay() - 2],
      date: date.getMonth() + 1 + '/' + (date.getDate() - 2),
      status: '约满'
    },
    {
      week: weekArray[date.getDay() - 1],
      date: date.getMonth() + 1 + '/' + (date.getDate() - 1),
      status: '有号'
    }
  ]
};

const specialistList = ref([
  {
    title: '全部',
    list: [
      {
        userImg: '',
        name: '马东锡 (风湿免疫科)',
        dept: '专科系列丨专家',
        money: '150',
        brief: '擅长诊断治疗儿童免疫缺病擅长诊断治疗儿童免疫缺病擅长诊断治疗儿童免疫缺病，包括儿童风湿性疾病擅长诊断治疗儿童免',
        remaining: 10
      },
      {
        userImg: '',
        name: '马东锡 (风湿免疫科)',
        dept: '专科系列丨专家',
        money: '150',
        brief: '暂无简介',
        remaining: 0
      },
    ]
  },
  {
    title: '普通',
    list: [
      {
        userImg: '',
        name: '马东锡 (风湿免疫科)',
        dept: '专科系列丨专家',
        money: '150',
        brief: '暂无简介',
        remaining: 0
      },
    ]
  },
  {
    title: '专家',
    list: [
      {
        userImg: '',
        name: '马东锡 (风湿免疫科)',
        dept: '专科系列丨专家',
        money: '150',
        brief: '擅长诊断治疗儿童免疫缺病擅长诊断治疗儿童免疫缺病擅长诊断治疗儿童免疫缺病，包括儿童风湿性疾病擅长诊断治疗儿童免',
        remaining: 10
      }
    ]
  },
  {
    title: '特需',
    list: []
  }
]);

const formatter = (day: any) => {
  const month = day.date.getMonth() + 1;
  const date = day.date.getDate();
  if ((month === new Date().getMonth() + 1 && date < new Date().getDate()) || (month === new Date().getMonth() + 2 && date > new Date().getDate())) {
    day.bottomInfo = '暂无';
  } else if (month == 3 && date == 10) {
    day.bottomInfo = '暂无';
    day.type = 'disabled'
  }

  return day;
}

const onLoad = () => {
};
const onClick = () => {
  router.push('registerspecialist')
}

const dateClick = (index: any, data: any) => {
  activeDate.value = index
  if (activeDate == index || data.status !== '无') {

  } else {
    console.log('activeDate', activeDate.value)
  }
}
const getTime = () => {
  dateTime.value = new Date().getFullYear() + '/' + new Date().getMonth() + 1 + '/' + new Date().getDate() + ' ' + weekArray[new Date().getDay()]

  dateList.value = [
    {
      week: weekArray[new Date().getDay()],
      date: new Date().getMonth() + 1 + '/' + new Date().getDate(),
      status: '约满'
    },
    {
      week: weekArray[new Date().getDay() + 1],
      date: new Date().getMonth() + 1 + '/' + (new Date().getDate() + 1),
      status: '有号'
    },
    {
      week: weekArray[new Date().getDay() + 2],
      date: new Date().getMonth() + 1 + '/' + (new Date().getDate() + 2),
      status: '有号'
    },
    {
      week: weekArray[new Date().getDay() - 4],
      date: new Date().getMonth() + 1 + '/' + (new Date().getDate() + 3),
      status: '无'
    },
    {
      week: weekArray[new Date().getDay() - 3],
      date: new Date().getMonth() + 1 + '/' + (new Date().getDate() + 4),
      status: '无'
    },
    {
      week: weekArray[new Date().getDay() - 2],
      date: new Date().getMonth() + 1 + '/' + (new Date().getDate() + 5),
      status: '约满'
    },
    {
      week: weekArray[new Date().getDay() - 1],
      date: new Date().getMonth() + 1 + '/' + (new Date().getDate() + 6),
      status: '有号'
    }
  ]

}
onMounted(() => {
  getTime()
})
</script>
<style lang="scss" scoped>
.container {
  .banner {
    width: 3.75rem;
    height: 1.60rem;
    padding: 0.25rem 0.15rem;
    background: url("../../assets/images/register-dept-banner.png") no-repeat;
    background-size: 100% 100%;

    .banner-title {
      font-size: 0.14rem;
      font-family: PingFang SC-Bold, PingFang SC;
      font-weight: bold;
      color: #FFEA7E;
      margin-bottom: 0.08rem;
    }

    .banner-text {
      font-size: 0.14rem;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 0.24rem;
    }
  }

  .container-box {
    .card {
      transform: translateY(-0.3rem);
    }

    .time .van-cell {
      padding: 0;
      margin-bottom: 0.05rem;
    }

    .time .time-bon {
      display: flex;
      justify-content: space-between;

      .time-bon-item {
        text-align: center;

        .week {
          font-size: 0.13rem;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
        }
        .date-back {
          width: 0.44rem;
          height: 0.60rem;
          margin-top: 0.03rem;
          padding: 0.05rem 0;
          border: 0;
          border-radius: 0.13rem;
          .date {
            margin-bottom: 0.10rem;
            font-size: 0.12rem;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
          }

          .status {
            font-size: 0.14rem;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
          }
        }
        .active-back {
          background: #0564F7;
          border: 0.01rem solid #0564F7;
          .date, .status {
            color: #FFFFFF;
          }
        }
      }
    }

    .list {
      transform: translateY(-0.3rem);

      :deep(.van-tabs__nav) {
        background: 0;

        .van-tab__text {
          font-size: 0.15rem;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
        }

        .van-tab--active .van-tab__text {
          font-size: 0.16rem;
          font-family: PingFang SC-Bold, PingFang SC;
          font-weight: bold;
          color: #0564F7;
        }

        .van-tabs__line {
          width: 0.16rem;
          height: 0.03rem;
          background: #0564F7;
          border-radius: 0.21rem;
        }
      }

      .specialist-item {
        width: 100%;
        background: #FFFFFF;
        border-radius: 0.08rem;
        padding: 0.15rem 0.10rem 0.10rem 0.15rem;
        margin-top: 0.15rem;

        .item-top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .item-top-left {
            width: 0.60rem;
            height: 0.60rem;
            margin-right: 0.10rem;
            border-radius: 50%;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .item-top-center {
            .item-top-center-p1 {
              font-size: 0.16rem;
              font-family: PingFang SC-Bold, PingFang SC;
              font-weight: bold;
              color: #333333;
            }

            .item-top-center-p2 {
              font-size: 0.14rem;
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 400;
              color: #666666;
              margin-top: 0.10rem;
            }
          }

          .item-top-right {
            font-size: 0.20rem;
            font-family: PingFang SC-Bold, PingFang SC;
            font-weight: bold;
            color: #E65555;
          }
        }

        .item-bon {
          display: flex;
          margin-top: 0.10rem;

          .item-bon-left {
            width: calc(100% - 0.80rem);
            font-size: 0.12rem;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #666666;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          .item-bon-right {
            width: 0.80rem;
            height: 0.32rem;
            line-height: 0.34rem;
            margin-left: 0.32rem;
            text-align: center;
            border-radius: 0.08rem;
            font-size: 0.14rem;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
          }

          .item-bon-right1 {
            border: 1px solid #0564F7;
            color: #0564F7;
          }

          .item-bon-right2 {
            background: #ECECEC;
            color: #333333;
          }
        }
      }
    }
  }
}
</style>
