<template>
  <div class="layout-page" :class="showFooter ? 'main-tab' : ''">
    <el-row class="layout-content">
      <router-view class="router-view"></router-view>
    </el-row>
    <Footer v-if="showFooter"></Footer>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, getCurrentInstance, ComponentInternalInstance } from 'vue'
import Footer from '@/components/footer.vue'
import router from '@/router'

const { proxy } = getCurrentInstance() as ComponentInternalInstance
const showFooterPaths = ['/home']
const showFooter = computed(() => showFooterPaths.includes(router.currentRoute._value.path))
</script>
<style lang="scss" scoped>
.layout-page {
  max-width: 750px;
  width: 3.75rem;
  height: 100vh;
  background: #f6f6f6;
}
.main-tab {
  padding-bottom: 0.5rem;
  overflow: scroll;
}
</style>
