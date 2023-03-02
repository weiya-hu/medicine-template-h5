<template>
  <div class="layout-page" :class="isShow ? 'main-tab' : ''">
    <el-row class="layout-content">
      <router-view class="router-view"></router-view>
    </el-row>
    <Footer v-if="isShow"></Footer>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, getCurrentInstance, ComponentInternalInstance } from 'vue'
import Footer from '@/components/footer.vue'
import router from '@/router'
import { useRouter, onBeforeRouteUpdate } from 'vue-router'
const isShow = ref(true)

const { proxy } = getCurrentInstance() as ComponentInternalInstance
const showFooterPaths = ['/home']
isShow.value = showFooterPaths.includes(router.currentRoute._value.path)
onBeforeRouteUpdate((to) => {
  console.log('onBeforeRouteUpdate', to.path)
  isShow.value = showFooterPaths.includes(to.path)
})
</script>
<style lang="scss" scoped>
.layout-page {
  max-width: 750px;
  width: 3.75rem;
  height: 100vh;
  background: #f6f6f6;
}
.main-tab {
  padding-bottom: 0.35rem;
  overflow: scroll;
}
</style>
