<template>
  <div class="log-list">
    <div class="flexl flext">
      <div class="fleximg header-img"><img src="" alt="header" @error="imgError" /></div>
      <div class="user-info">
        <div class="flexl user-info-name">
          <span class="">周美玲</span>
          <span>年龄：21</span>
        </div>
        <div class="user-card">就诊卡号：454546465</div>
        <div>创建日期：223-03-02</div>
      </div>
    </div>
    <div class="line"></div>
    <div class="content-title">就诊记录</div>
    <div v-for="(v, i) in list" :key="i" class="log-item" @click="$router.push('/visitlog/detail')">
      <div class="flexb log-item-child">
        <span>就诊科室</span>
        <span>{{ v.keshi }}</span>
      </div>
      <div class="flexb log-item-child">
        <span>主治医师</span>
        <span>{{ v.yishi }}</span>
      </div>
      <div class="flexb log-item-child">
        <span>就诊地点</span>
        <span>{{ v.place }}</span>
      </div>
      <div class="flexb log-item-child">
        <span>就诊日期</span>
        <span>{{ v.date }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import deFaultHeader_img from '@/assets/images/header.png'

const list = ref([
  { keshi: '血液科', yishi: '李淑娟', place: '3楼 102室', date: '2023-03-02' },
  { keshi: '血科', yishi: '李娟', place: '3楼 102室', date: '2023-03-06' },
])

const imgError = (event: any) => {
  event.target.src = deFaultHeader_img
}
</script>

<style scoped lang="scss">
.log-list {
  padding: 0.2rem 0.15rem;
  .user-info {
    .user-info-name {
      span {
        color: $black6;
      }
      & > span:first-child {
        font-size: 0.16rem;
        font-weight: bold;
        margin-right: 0.2rem;
        color: $black3;
      }
    }
    .user-card {
      margin: 0.1rem 0;
    }
  }
  .header-img {
    width: 0.6rem;
    height: 0.6rem;
    background: #ffffff;
    border-radius: 12px 12px 12px 12px;
    overflow: hidden;
    margin-right: 0.16rem;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  .line {
    height: 1px;
    background: #cccccc;
    margin: 0.2rem 0;
  }
  .content-title {
    font-size: 0.17rem;
    font-weight: bold;
    padding-left: 0.14rem;
    position: relative;
    margin-bottom: 0.12rem;
    &::before {
      content: '';
      width: 0.04rem;
      height: 0.16rem;
      background: #0564f7;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .log-item {
    padding: 0.2rem;
    background: #ffffff;
    border-radius: 12px 12px 12px 12px;
    margin-bottom: 0.15rem;
    > div:last-child {
      margin-bottom: 0;
    }
    .log-item-child {
      margin-bottom: 0.15rem;
      & > span:first-child {
        color: $black6;
      }
      & > span:last-child {
        font-weight: bold;
      }
    }
  }
}
</style>
