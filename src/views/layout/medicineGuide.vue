<template>
  <div class="medicine-guide">
    <div class="guide-main">
      <van-search
        v-model="searchTxt"
        background="#f6f6f6"
        :right-icon="searchImg"
        left-icon="none"
        placeholder="请输入搜索关键词"
        shape="round"
        class="van-search"
        :clearable="false"
      >
      </van-search>
      <div class="guides">
        <div v-for="(v, i) in list" :key="i" class="guide-item flexl">{{ v.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import searchImg from '@/assets/images/serc.png'
// window.open(
//   'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe4ce0cba9cad0bf9&redirect_uri=http%3A%2F%2Fplatform.shanhaiping.com%2F&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect'
// )
const searchTxt = ref()
const list = ref([
  { title: '挂号指南' },
  { title: '门诊就诊须知' },
  { title: '急诊就诊须知' },
  { title: '出院须知' },
])
</script>

<style scoped lang="scss">
.medicine-guide {
  padding: 20px 15px 0;
  .guide-main {
    background: #ffffff;
    border-radius: 8px;
    padding: 15px 15px 10px;
    .van-search {
      height: 0.4rem;
      border-radius: 0.2rem;
      overflow: hidden;
      :deep(.van-search__content) {
        background: unset;
      }
    }
    .guides {
      margin-top: 10px;
      & > .guide-item:last-child {
        border-bottom: none;
      }
    }
    .guide-item {
      height: 0.5rem;
      border-bottom: 1px solid #cccccc;
      padding-left: 17px;
      font-size: 0.17rem;
      font-weight: 600;
      color: #333333;
      position: relative;
      &::before {
        content: '';
        width: 6px;
        height: 6px;
        background: #d8d8d8;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
      &::after {
        content: url(@/assets/images/arrow.png);
        width: 12px;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
