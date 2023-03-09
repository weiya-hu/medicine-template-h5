<template>
  <div class="main">
    <van-nav-bar title="标题" left-arrow @click-left="$router.back()" safe-area-inset-top />
    <van-tabs
      v-model:active="active"
      title-active-color="#0564F7"
      sticky
      :offset-top="50"
      title-inactive-color="#333"
    >
      <van-tab title="代缴费">
        <div class="record-list">
          <div class="list-container" v-for="i in 3">
            <div class="list-item">
              <div class="left">
                <div style="padding: 0.1rem">
                  <div class="cell">
                    <span style="margin-right: 0.15rem">项目名称</span>
                    <span>X胸透影像学检查</span>
                  </div>
                  <div class="cell">
                    <span style="margin-right: 0.15rem">患者姓名</span>
                    <span>李淑娟</span>
                  </div>
                  <div class="cell">
                    <span style="margin-right: 0.15rem">检查地点</span>
                    <span>3楼 102室</span>
                  </div>
                  <div class="cell">
                    <span style="margin-right: 0.15rem">主治医师</span>
                    <span>连战</span>
                  </div>
                </div>
              </div>
              <div class="right">
                <van-icon name="arrow" color="#707070" :size="3" />
              </div>
            </div>
            <van-divider></van-divider>
            <div class="check">
              <van-checkbox
                shape="square"
                v-model="checked"
                checked-color="#0564F7"
                @change="checkChange"
              ></van-checkbox>
              <span>29元</span>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="已缴费"></van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref<String | Number>(0)
const checked = ref<Boolean>(true)
const checkChange = (e) => {
  console.log(e)
}
</script>

<style lang="scss">
:root {
  --van-divider-margin: 0.1rem;
  color: #333;
}
</style>

<style scoped lang="scss">
@import 'src/assets/styles/pay.scss';
:deep(.van-cell__value){
  text-align: left;
}
.record-list {
  padding: 0.1rem 0.1rem;
  .list-container {
    background: #fff;
    border-radius: 0.1rem;
    margin: 0.1rem;
    .list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.14rem;
      .left {
        width: 80vw;
        .cell {
          margin: 0.1rem 0;
          span:nth-child(1) {
            color: #666;
          }
        }
      }
      .right {
        margin-right: 5vw;
      }
    }
    .check {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.1rem 0.1rem;
      span {
        font-weight: bold;
        font-size: 0.14rem;
      }
    }
  }
}
</style>
