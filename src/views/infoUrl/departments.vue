<template>
  <div class="container">
    <van-sidebar v-model="active" v-show="isShow">
      <van-sidebar-item v-for="(item, index) in sidebarList" :key="index" :title="item.name"></van-sidebar-item>
    </van-sidebar>

    <div class="content" v-for="(item, index) in sidebarList" :key="index" v-show="active == index"
         :style="{'width' : isShow ? 'calc(100% - 0.80rem)' : '100%' }">
      <div class="content-box">
        <div class="">
          {{ item.content }}
        </div>
      </div>
    </div>
    <div class="show-hide" @click="getShow" :style="{'left' : isShow ? '0.55rem' : '0'}">
      <img src="../../assets/images/edit-show.png" alt="" v-show="isShow === true"/>
      <img src="../../assets/images/edit-hide.png" alt="" v-show="isShow === false"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const active = ref(0);
const isShow = ref(true)
const sidebarList = ref([
  {
    name: '内分泌与代谢',
    content: '内分泌与代谢'
  },
  {name: '感染性疾病科', content: '感染性疾病科'},
  {name: '内科', content: '内科'},
])

const getShow = () => {
  isShow.value = !isShow.value
}
</script>

<style lang="scss" scoped>
.container {
  background: #F2F2F2;
  height: 100vh;
  display: flex;
  position: relative;

  .van-sidebar-item {
    background: #F2F2F2;
    padding: 0.15rem 0.19rem;

    :deep(.van-sidebar-item__text) {
      text-align: center;
      font-size: 0.14rem;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
    }
  }

  .van-sidebar-item--select {
    background: #FFFFFF;

    :deep(.van-sidebar-item__text) {
      font-weight: 800;
      color: #333333;
    }

    &:before {
      background: 0;
    }
  }

  .content {
    background: #FFFFFF;

    .content-box {
      background: linear-gradient(180deg, rgba(5, 100, 247, 0.13) 0%, rgba(255, 255, 255, 0) 100%) no-repeat;
      background-size: 100% 2.64rem;
      height: 100vh;
      overflow: auto;
      padding: 0.20rem 0.15rem;
    }
  }

  .show-hide {
    width: 0.25rem;
    height: 0.50rem;
    position: absolute;
    top: 50%;
    transform: translate(1, -50%);
  }
}
</style>
