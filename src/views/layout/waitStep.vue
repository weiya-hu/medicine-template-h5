<template>
  <div class="wait-step">
    <div class="flexb">
      <div class="wait-item flexc">
        <div>17</div>
        <div>前方等待人数</div>
      </div>
      <div class="wait-item flexc">
        <div class="wait-num">24</div>
        <div>我的号码</div>
      </div>
    </div>
    <div class="wait-content">
      <div class="flexb">
        <div>是否开启自动提醒</div>
        <van-switch v-model="openWarm" size="0.2rem" active-color="#26BF4C" />
      </div>
      <div class="open-warm-txt">排队人数剩余3人将自动提醒</div>
      <div class="wait-data flexb">
        <span>排队状态</span>
        <span :class="waitStatus && 'wait-status'">{{ waitStatus ? '已过号' : '未呼叫' }}</span>
      </div>
      <div class="wait-data flexb">
        <span>患者姓名</span>
        <span>罗翔</span>
      </div>
      <div class="wait-data flexb">
        <span>候诊区域</span>
        <span>内科平台门诊</span>
      </div>
      <div class="wait-data flexb">
        <span>诊区名称</span>
        <span>内科平台门诊</span>
      </div>
      <div class="wait-data flexb">
        <span>当前医院</span>
        <span>重医二院</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const openWarm = ref(true)
const waitStatus = ref(1)
</script>

<style scoped lang="scss">
.wait-step {
  padding: 0.27rem 0.15rem 0.15rem;
  .wait-item {
    width: 1.65rem;
    height: 1.5rem;
    background: #ffffff;
    border-radius: 12px 12px 12px 12px;
    div {
      font-size: 0.14rem;
    }
    & > div:first-child {
      font-size: 0.36rem;
      font-weight: 600;
      margin-bottom: 0.18rem;
    }
    .wait-num {
      color: $blue;
    }
  }
  .wait-content {
    background: #ffffff;
    padding: 0.25rem 0.2rem 0;
    overflow: auto;
    border-radius: 12px 12px 12px 12px;
    margin-top: 0.15rem;
    .open-warm-txt {
      margin-top: 0.04rem;
      font-size: 0.12rem;
      color: $black9;
      margin-bottom: 0.3rem;
    }
    .wait-data {
      margin-bottom: 0.3rem;
      & > span:first-child {
        font-size: 0.15rem;
        color: $black6;
      }
      & > span:last-child {
        font-size: 0.15rem;
        font-weight: bold;
        color: $black3;
      }
      & > span.wait-status {
        color: $red;
      }
    }
  }
}
</style>
