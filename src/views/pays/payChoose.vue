<template>
  <div class="container">
    <div class="group-item">
      <van-cell-group inset>
        <van-cell title="订单号" value="0000000000001111" size="large"></van-cell>
        <van-cell title="订单名称" value="XXXXXXX" size="large"></van-cell>
        <van-cell title="应付金额" value="500元" size="large"></van-cell>
      </van-cell-group>
    </div>
    <div class="group-item">
      <van-radio-group v-model="checked" checked-color="#0564F7">
        <van-cell-group inset>
          <van-cell title="还需支付" value="200" size="large"></van-cell>
          <van-cell title="医保支付" clickable @click="checked = '1'" size="large">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell title="自费" clickable @click="checked = '2'" size="large">
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
  </div>
  <div class="btn">
    <van-button color="#0564F7" block @click="onClick">确定</van-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {useRouter} from "vue-router";

const router = useRouter()
const checked = ref('1')
const list = ref([
  {
    title: '医保支付',
  },
  {
    title: '自费',
  },
])
const onClick = () => {
  if (checked.value == '1') {
    router.push('orderconfirm')
  } else {
    router.push('payConfirm')
  }
  console.log(checked.value)
}
</script>
<style scoped lang="scss">
.container {
  padding: 0.2rem 0;
  .group-item {
    margin-bottom: 0.15rem;
  }
}
</style>
