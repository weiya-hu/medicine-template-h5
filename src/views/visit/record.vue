<template>
  <div class="container">
    <van-tabs v-model:active="active">
      <van-tab v-for="(item, index) in tabList" :key="index" :title="item.title">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
<!--          <div v-for="(items, indexs) in item.list"></div>-->
          <div class="list-item" @click="onClick">
            <div class="list-item-top">
              <span class="list-item-top-left">02-27</span>
              <span class="list-item-top-right">· 2023</span>
            </div>
            <div class="list-item-bon">
              <div class="list-item-bon-line"></div>
              <div class="list-item-bon-card">
                <div class="list-item-bon-card-top">
                  <div class="name">王松鼠</div>
                  <div class="status status1" >待就诊</div>
                </div>
                <div class="line"></div>
                <div class="list-item-bon-card-bon">
                  <div class="list-item-bon-card-bon-item">
                    <span>科室</span>
                    <span>儿保科</span>
                  </div>
                  <div class="list-item-bon-card-bon-item">
                    <span>医生</span>
                    <span>金灿荣</span>
                  </div>
                  <div class="list-item-bon-card-bon-item">
                    <span>时段</span>
                    <span>14：50-17:10</span>
                  </div>
                  <div class="list-item-bon-card-bon-item">
                    <span>预约金额</span>
                    <span>20元</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="list-item">
            <div class="list-item-top">
              <span class="list-item-top-left">02-27</span>
              <span class="list-item-top-right">· 2023</span>
            </div>
            <div class="list-item-bon">
              <div class="list-item-bon-line"></div>
              <div class="list-item-bon-card">
                <div class="list-item-bon-card-top">
                  <div class="name">王松鼠</div>
                  <div class="status status2" >已完结</div>
                </div>
                <div class="line"></div>
                <div class="list-item-bon-card-bon">
                  <div class="list-item-bon-card-bon-item">
                    <span>科室</span>
                    <span>儿保科</span>
                  </div>
                  <div class="list-item-bon-card-bon-item">
                    <span>医生</span>
                    <span>金灿荣</span>
                  </div>
                  <div class="list-item-bon-card-bon-item">
                    <span>时段</span>
                    <span>14：50-17:10</span>
                  </div>
                  <div class="list-item-bon-card-bon-item">
                    <span>预约金额</span>
                    <span>20元</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="list-item">
            <div class="list-item-top">
              <span class="list-item-top-left">02-27</span>
              <span class="list-item-top-right">· 2023</span>
            </div>
            <div class="list-item-bon">
              <div class="list-item-bon-line"></div>
              <div class="list-item-bon-card">
                <div class="list-item-bon-card-top">
                  <div class="name">王松鼠</div>
                  <div class="status status3" >已取消</div>
                </div>
                <div class="line"></div>
                <div class="list-item-bon-card-bon">
                  <div class="list-item-bon-card-bon-item">
                    <span>科室</span>
                    <span>儿保科</span>
                  </div>
                  <div class="list-item-bon-card-bon-item">
                    <span>医生</span>
                    <span>金灿荣</span>
                  </div>
                  <div class="list-item-bon-card-bon-item">
                    <span>时段</span>
                    <span>14：50-17:10</span>
                  </div>
                  <div class="list-item-bon-card-bon-item">
                    <span>预约金额</span>
                    <span>20元</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
const active = ref(0);
const list = ref([]);
const loading = ref(false);
const finished = ref(true);
const tabList = ref([
  {
    title: '待就诊',
    list: [

    ]
  },
  {
    title: '历史记录'
  }
])

const onLoad = () => {

}
const onClick = () => {
  router.push('recorddetails')
}
</script>
<style lang="scss" scoped>
.container {
  background: #F6F6F6;
  :deep(.van-tabs--line) .van-tabs__wrap {
    height: 0.50rem;
  }
  :deep(.van-tabs__nav) {
    .van-tab--active .van-tab__text {
      font-weight: bold;
      color: #0564F7;
    }
    .van-tab__text {
      font-size: 15px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
    }
    .van-tabs__line {
      width: 0.22rem;
      height: 0.02rem;
      background: #0564F7;
      border-radius: 0;
    }
  }
  .list-item {
    padding: 0.25rem 0.15rem 0 0.12rem;
    .list-item-top {
      display: flex;
      justify-content: space-between;
      .list-item-top-left {
        font-size: 0.15rem;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
      }
      .list-item-top-right {
        font-size: 0.15rem;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        color: #333333;
      }
    }
    .list-item-bon {
      margin-top: 0.20rem;
      display: flex;
      justify-content: space-between;
      .list-item-bon-line {
        width: 0.01rem;
        height: 2.30rem;
        margin-left: 0.04rem;
        background: #999999;
      }
      .list-item-bon-card {
        width: calc(100% - 0.25rem);
        background: #FFFFFF;
        border-radius: 0.12rem;
        padding: 0.20rem;
        .list-item-bon-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .name {
            font-size: 0.15rem;
            font-family: PingFang SC-Bold, PingFang SC;
            font-weight: bold;
            color: #333333;
          }
          .status {
            width: 0.65rem;
            height: 0.26rem;
            line-height: 0.26rem;
            text-align: center;
            border-radius: 0.14rem;
            font-size: 0.14rem;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
          }
          .status1 {
            color: #FFFFFF;
            background: #FF8214;
          }
          .status2 {
            color: #333333;
            background: #ECECEC;
          }
          .status3 {
            color: #FFFFFF;
            background: #E65555;
          }
        }
        .line {
          width: 100%;
          height: 0.01rem;
          margin: 0.18rem 0 0.20rem;
          background: #cccccc;
        }
        .list-item-bon-card-bon {
          .list-item-bon-card-bon-item {
            margin-top: 0.15rem;
            display: flex;
            justify-content: space-between;
            span {
              font-size: 15px;
              font-family: PingFang SC-Regular, PingFang SC;
              font-weight: 400;
            }
            span:first-child {
              color: #666666;
            }
            span:last-child {
              color: #333333;
            }
          }
        }
      }
    }
  }
}
</style>
