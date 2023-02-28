<template>
  <div class="flexa footer-vue">
    <div v-for="(v, i) in list" :key="i" class="tab-item flexc" @click="activeIndex = i">
      <div class="fleximg tab-img">
        <img :src="activeIndex == i ? v.activeImg : v.img" alt="home" />
      </div>
      <div :class="activeIndex == i ? 'text-active' : 'text-common'">{{ v.text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import homeImg from '@/assets/images/home.png'
import homeActiveImg from '@/assets/images/home_active.png'
import mineActiveImg from '@/assets/images/mine_active.png'
import mineImg from '@/assets/images/mine.png'

const activeIndex = ref(0)
const list = [
  { text: '首页', img: homeImg, activeImg: homeActiveImg },
  { text: '个人中心', img: mineImg, activeImg: mineActiveImg },
]

</script>

<style scoped lang="scss">
.footer-vue {
  width: 100%;
  height: 0.5rem;
  background: #ffffff;
  position: fixed;
  left: 0;
  bottom: 0;
  .tab-img {
    width: 0.28rem;
  }
  .tab-item {
    width: 50%;
    .text-common {
      font-size: 10px;
      color: #333333;
    }
    .text-active {
      font-size: 10px;
      color: #0564f7;
    }
  }
}
</style>
