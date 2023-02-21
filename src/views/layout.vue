<template>
  <div class="layout-page">
    <el-row class="layout-content">
      <router-view class="router-view"></router-view>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { ref, getCurrentInstance, ComponentInternalInstance } from 'vue'

const { proxy } = getCurrentInstance() as ComponentInternalInstance
</script>
<style lang="scss" scoped>
.layout-page {
  max-width: 750px;
  width: 3.75rem;
  height: 100vh;
  background: #fafafa;
}
</style>
