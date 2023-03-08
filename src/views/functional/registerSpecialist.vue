<template>
  <div class="container">
    <div class="banner">
      <div class="banner-top">
        <div class="banner-top-left">
          <img src="../../assets/images/header.png" alt="" />
        </div>
        <div class="banner-top-right">
          <div class="banner-top-right-p1">马东锡 (风湿免疫科)</div>
          <div class="banner-top-right-p2">专科系列丨专家</div>
        </div>
      </div>
      <div class="banner-bon">擅长诊断治疗儿童免疫缺病，包括儿童风湿性疾病擅长诊断治疗儿童免擅长诊断治疗儿童免疫缺病</div>
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
          <div class="time-bon-item" v-for="(item, index) in dateList" :key="index" @click="dateClick(index, item)">
            <div class="week">{{ item.week }}</div>
            <div :class="['date-back', activeDate == index ? 'active-back' : '', item.status == '无' ? 'active-disabled' : '']">
              <div class="date">{{ item.date }}</div>
              <div class="status" >{{ item.status }}</div>
            </div>
          </div>
        </div>
      </div>
      <van-calendar v-model:show="showData" :min-date="minDate" :max-date="maxDate" :formatter="formatter"
                    @confirm="onConfirm"/>

      <div class="list">
        <van-list
            v-model:loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
<!--          <div class="specialist-item" v-for="(item, index) in timeSlotList" :key="index">-->
          <div class="specialist-item">
            <div class="item-title">2.27 上午（余号：15）</div>
            <div class="specialist-item-bon">
              <div class="item-time-slot">
                <div class="item-time-slot-p1">08:00-09:00</div>
                <div class="item-time-slot-p2">余：3</div>
              </div>
              <div class="item-time-slot">
                <div class="item-time-slot-p1">08:00-09:00</div>
                <div class="item-time-slot-p2">余：3</div>
              </div>
              <div class="item-time-slot">
                <div class="item-time-slot-p1">08:00-09:00</div>
                <div class="item-time-slot-p2">余：3</div>
              </div>
              <div class="item-time-slot">
                <div class="item-time-slot-p1">08:00-09:00</div>
                <div class="item-time-slot-p2">余：3</div>
              </div>
              <div class="item-time-slot">
                <div class="item-time-slot-p1">08:00-09:00</div>
                <div class="item-time-slot-p2">余：3</div>
              </div>
              <div class="item-time-slot">
                <div class="item-time-slot-p1">08:00-09:00</div>
                <div class="item-time-slot-p2">余：3</div>
              </div>
            </div>
          </div>
          <div class="specialist-item">
            <div class="item-title">2.27 下午（余号：15）</div>
            <div class="specialist-item-bon">
              <div class="item-time-slot">
                <div class="item-time-slot-p1">08:00-09:00</div>
                <div class="item-time-slot-p2">余：3</div>
              </div>
              <div class="item-time-slot">
                <div class="item-time-slot-p1">08:00-09:00</div>
                <div class="item-time-slot-p2">余：3</div>
              </div>
              <div class="item-time-slot">
                <div class="item-time-slot-p1">08:00-09:00</div>
                <div class="item-time-slot-p2">余：3</div>
              </div>
              <div class="item-time-slot">
                <div class="item-time-slot-p1">08:00-09:00</div>
                <div class="item-time-slot-p2">余：3</div>
              </div>
              <div class="item-time-slot">
                <div class="item-time-slot-p1">08:00-09:00</div>
                <div class="item-time-slot-p2">余：3</div>
              </div>
              <div class="item-time-slot">
                <div class="item-time-slot-p1">08:00-09:00</div>
                <div class="item-time-slot-p2">余：3</div>
              </div>
            </div>
          </div>
        </van-list>
      </div>
    </div>
  </div>
  <div class="btn">
    <van-button color="#0564F7" block @click="onClick">下一步</van-button>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const activeDate = ref(0)
const dateList = ref([]);
const loading = ref(false);
const finished = ref(true);

const timeSlotList = ref([

])

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
  router.push('registerinfo')
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
      week: weekArray[new Date().getDay() + 3],
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
    padding: 0.15rem;
    background: url("../../assets/images/register-dept-banner.png") no-repeat;
    background-size: 100% 100%;
    .banner-top {
      display: flex;
      align-items: center;
      .banner-top-left {
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
      .banner-top-right {
        color: #FFFFFF;
        .banner-top-right-p1 {
          font-size: 0.16rem;
          font-family: PingFang SC-Bold, PingFang SC;
          font-weight: bold;
        }
        .banner-top-right-p2 {
          margin-top: 0.10rem;
          font-size: 0.14rem;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
        }
      }
    }
    .banner-bon {
      margin-top: 0.10rem;
      font-size: 0.13rem;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
    }
  }

  .container-box {
    .card {
      transform: translateY(-0.3rem);
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
          margin-top: 0.03rem;
          padding: 0.05rem 0;
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
          border-radius: 0.13rem;
          border: 0.01rem solid #0564F7;
          .date, .status {
            color: #FFFFFF;
          }
        }
        .active-disabled {
          background: 0;
          border: 0;
          .date, .status {
            color: #CCCCCC;
          }
        }
      }
    }

    .list {
      transform: translateY(-0.3rem);
      .specialist-item {
        background: #FFFFFF;
        padding: 0.15rem;
        border-radius: 0.06rem;
        margin-bottom: 0.15rem;
        .item-title {
          font-size: 0.15rem;
          font-family: PingFang SC-Bold, PingFang SC;
          font-weight: bold;
          color: #333333;
          position: relative;
          &:before {
            content: '';
            display: block;
            width: 0.04rem;
            height: 0.10rem;
            background: #0564F7;
            position: absolute;
            left: -0.15rem;
            top: 0.05rem;
          }
        }
        .specialist-item-bon {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .item-time-slot {
            width: 1.00rem;
            height: 0.60rem;
            padding: 0.08rem;
            margin-top: 0.15rem;
            border: 1px solid #CCCCCC;
            border-radius: 0.10rem;
            text-align: center;
            font-size: 0.14rem;
            color: #333333;
            .item-time-slot-p1 {
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 400;
            }
            .item-time-slot-p2 {
              margin-top: 0.04rem;
              font-family: PingFang SC-Bold, PingFang SC;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
.btn {
  width: 100%;
  height: 0.50rem;
  padding: 0.05rem 0.15rem;
  background: #FFFFFF;
  position: fixed;
  left: 0;
  bottom: 0;
  box-shadow: 0px -0.03rem 0.06rem 0.01rem rgba(0,0,0,0.08);
  .van-button {
    height: 100%;
  }
}
</style>
