<template>
  <div class="container">
    <div class="info-title">挂号状态：<span class="info-status">待就诊</span></div>
    <div class="info-item">
      <van-cell-group>
        <van-cell :border="false">
          <template #title>
            <div class="van-cell-title">预约院区</div>
          </template>
          <template #value>
            <div class="van-cell-value">{{state.hospitalArea}}</div>
          </template>
        </van-cell>
        <van-cell :border="false">
          <template #title>
            <div class="van-cell-title">预约科室</div>
          </template>
          <template #value>
            <div class="van-cell-value">{{state.dept}}</div>
          </template>
        </van-cell>
        <van-cell :border="false">
          <template #title>
            <div class="van-cell-title">预约医生</div>
          </template>
          <template #value>
            <div class="van-cell-value">{{state.doctor}}</div>
          </template>
        </van-cell>
        <van-cell :border="false">
          <template #title>
            <div class="van-cell-title">医生职称</div>
          </template>
          <template #value>
            <div class="van-cell-value">{{state.rank}}</div>
          </template>
        </van-cell>
        <van-cell :border="false">
          <template #title>
            <div class="van-cell-title">排队序号</div>
          </template>
          <template #value>
            <div class="van-cell-value">{{state.sort}}</div>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="van-cell-title">就诊区域</div>
          </template>
          <template #value>
            <div class="van-cell-value">{{state.area}}</div>
          </template>
        </van-cell>
        <van-cell :border="false">
          <template #title>
            <div class="van-cell-title">订单编号</div>
          </template>
          <template #value>
            <div class="van-cell-value">{{state.order}}</div>
          </template>
        </van-cell>
        <van-cell :border="false">
          <template #title>
            <div class="van-cell-title">候诊时间</div>
          </template>
          <template #value>
            <div class="van-cell-value">{{state.time}}</div>
          </template>
        </van-cell>
        <van-cell :border="false">
          <template #title>
            <div class="van-cell-title">挂号类型</div>
          </template>
          <template #value>
            <div class="van-cell-value">{{state.type}}</div>
          </template>
        </van-cell>
        <van-cell :border="false">
          <template #title>
            <div class="van-cell-title">缴费金额</div>
          </template>
          <template #value>
            <div class="van-cell-value">{{state.amount}}</div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="tips">注意：在距离就诊时间xx小时前可取消挂号。小于2小时不予取消</div>
  </div>
  <div class="btn">
    <van-button color="#0564F7" block @click="submit">取消挂号</van-button>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {showConfirmDialog} from "vant";

const state = ref({
  hospitalArea: '渝中区',
  dept: '风湿免疫科',
  doctor: '罗翔',
  rank: '副主任医师',
  sort: '20',
  area: '1号楼2楼6诊所',
  order: '01231648',
  time: '2023-02-02  14:00-15:00',
  type: '普通',
  amount: '200元',
})

const submit = () => {
  showConfirmDialog({
    title: '确认取消挂号？',
    message: '确定后您所挂医生的号将取消',
    cancelButtonColor: '#333333',
    confirmButtonColor: '#0564F7'
  })
    .then(() => {
      // on confirm
    })
    .catch(() => {
      // on cancel
    });
}
</script>
<style lang="scss" scoped>
.container {
  padding: 0.25rem 0.15rem 0.68rem;
  background: #F6F6F6;
  .info-title {
    padding-left: 0.10rem;
    font-size: 0.17rem;
    font-family: PingFang SC-Bold, PingFang SC;
    font-weight: bold;
    color: #333333;
    line-height: 0.25rem;
    position: relative;
    .info-status {
      color: #FF8214;
    }

    &:before {
      content: '';
      display: block;
      width: 0.04rem;
      height: 0.18rem;
      background: #0564F7;
      position: absolute;
      left: 0;
      top: 0.03rem;
    }
  }
  .info-item {
    margin-top: 0.15rem;
    border-radius: 0.12rem;
    overflow: hidden;
    :deep(.van-cell) {
      align-items: center;
      line-height: 0.30rem;
      .van-cell__title, .van-cell__value {
        flex: auto;
      }
      .van-cell-title {
        font-size: 0.15rem;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        margin-left: 0.10rem;
      }
      .van-cell-value {
        font-size: 0.15rem;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        color: #333333;
      }
    }
  }
  .tips {
    font-size: 0.14rem;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: #E65555;
    line-height: 0.25rem;
    margin-top: 0.20rem;
  }
}
.btn {
  width: 100%;
  height: 0.50rem;
  padding: 0.05rem 0.15rem;
  background: #FFFFFF;
  box-shadow: 0px -0.03rem 0.06rem 0.01rem rgba(0,0,0,0.08);
  position: fixed;
  left: 0;
  bottom: 0;
  .van-button {
    height: 100%;
  }
  //.van-button--primary {
  //  background: #0564F7;
  //  border: 0.01rem solid #0564F7;
  //}
}
//:deep(.van-dialog__confirm), :deep(.van-dialog__confirm):active {
//  color: #0564F7;
//}
</style>
