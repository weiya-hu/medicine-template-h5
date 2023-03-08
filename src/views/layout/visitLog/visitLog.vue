<template>
  <div class="visit-log">
    <div v-for="(v, i) in list" :key="i" class="log-item flexl">
      <div class="fleximg header-img"><img src="v.header" alt="header" @error="imgError" /></div>
      <div>
        <div class="flexl">
          <span>{{ v.name }}</span>
          <span>年龄：{{ v.age }}</span>
        </div>
        <div>就诊卡号：{{ v.card_num }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import deFaultHeader_img from '@/assets/images/header.png'
import arrow_img from '@/assets/images/arrow.png'
const list = ref([
  { name: '周美玲', age: 21, card_num: 123456789, header: 'hjs' },
  { name: '周玲', age: 26, card_num: 123445889, header: 'jhh' },
])

const imgError = (event: any) => {
  event.target.src = deFaultHeader_img
}
</script>

<style scoped lang="scss">
.visit-log {
  padding: 0.15rem;
  .log-item {
    background: #ffffff;
    border-radius: 12px 12px 12px 12px;
    padding: 0.15rem 0.2rem 0.15rem 0.15rem;
    position: relative;
    &::after {
      content: url('@/assets/images/arrow.png');
      width: 5px;
      position: absolute;
      top: 50%;
      right: 0.2rem;
      transform: translateY(-50%);
    }
    .header-img {
      width: 0.6rem;
      height: 0.6rem;
      background: #ffffff;
      border-radius: 12px 12px 12px 12px;
      overflow: hidden;
      img {
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
