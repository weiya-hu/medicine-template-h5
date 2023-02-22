<template>
  <div class="container">
    <van-sidebar v-model="active">
      <van-sidebar-item v-for="(item, index) in sidebarList" :key="index">
        <template #title>
          <p style="color: #666666">{{ item.name }}</p>
          <p style="color: #999999;">{{ item.position }}</p>
        </template>
      </van-sidebar-item>
    </van-sidebar>
    <div class="content" v-for="(item, index) in sidebarList" :key="index" v-show="active == index">
      {{ item.content }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const active = ref(0);
const sidebarList = ref([
  {name: '李长河', position: '主治医师', content: '医生简介'},
  {name: '李长河', position: '主治医师', content: '擅长领域'},
  {name: '李长河', position: '主治医师', content: '专家相关报道'},
])
</script>

<style lang="scss" scoped>
.container {
  background: #F2F2F2;
  height: 100vh;
  display: flex;
  .van-sidebar-item {
    padding: 0.12rem;
    background: #F2F2F2;
    :deep(.van-sidebar-item__text) {
      text-align: center;
      font-size: 14px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      line-height: 0.21rem;
    }
  }
  .van-sidebar-item--select {
    background: #FFFFFF;
    &:before {
     background: 0;
    }
  }
  .content {
    width: calc(100% - 0.80rem);
    background: linear-gradient(180deg, rgba(5,100,247,0.13) 0%, rgba(255,255,255,0) 100%) no-repeat;
    background-size: 100% 2.64rem;
  }
}
</style>
