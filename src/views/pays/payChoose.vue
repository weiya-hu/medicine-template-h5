<template>
  <div class="main">
    <div class="detail">
      <van-cell-group>
        <van-cell title="订单号" value="0000000000001111"></van-cell>
        <van-cell title="订单名称" value="XXXXXXX"></van-cell>
        <van-cell title="应付金额" value="500元"></van-cell>
      </van-cell-group>
    </div>
    <div class="method">
      <van-cell title="还需支付" value="120元"></van-cell>
      <van-radio-group v-model="method" checked-color="#0564F7">
        <van-cell-group inset>
          <van-cell title="医保支付" clickable @click="method = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell title="自费" clickable @click="method = '2'">
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <BottomButton :url="getUrl"></BottomButton>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BottomButton from '@/views/pays/components/BottomButton.vue'
const method = ref('1')
const list = ref([
  {
    title: '医保支付',
  },
  {
    title: '自费',
  },
])
const getUrl = computed(() => {
  // return method.value=='1'
})
</script>
<style scoped lang="scss">
@import 'src/assets/styles/pay.scss';
.main {
  padding: 0.2rem 0 0;
  .detail {
    margin: 0 0.2rem 0.2rem;
    background-color: #fff;
    border-radius: 0.1rem;
  }
  .method {
    margin: 0.2rem;
    background-color: #fff;
    border-radius: 0.1rem;
  }
}
</style>
