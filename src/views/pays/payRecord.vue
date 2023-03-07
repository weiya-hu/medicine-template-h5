<template>
  <div class="main">
    <van-nav-bar title="标题" left-arrow @click-left="onClickLeft" safe-area-inset-top />
    <van-tabs
      v-model:active="active"
      title-active-color="#0564F7"
      sticky
      :offset-top="50"
      title-inactive-color="#333"
    >
      <van-tab title="代缴费">
        <div class="record-list">
          <div class="list-container">
            <div class="list-item">
              <div class="left">
                <div style="padding: 0.2rem">
                  <div class="cell">
                    <sapn style="margin-right: 0.15rem">项目名称</sapn>
                    <sapn>X胸透影像学检查</sapn>
                  </div>
                  <div class="cell">
                    <sapn style="margin-right: 0.15rem">患者姓名</sapn>
                    <sapn>李淑娟</sapn>
                  </div>
                  <div class="cell">
                    <sapn style="margin-right: 0.15rem">检查地点</sapn>
                    <sapn>3楼 102室</sapn>
                  </div>
                  <div class="cell">
                    <sapn style="margin-right: 0.15rem">主治医师</sapn>
                    <sapn>连战</sapn>
                  </div>

                </div>

              </div>
              <div class="right">
                <van-icon name="arrow" color="#707070" size="10px" />
              </div>
            </div>
            <van-divider></van-divider>
            <div class="check">
              <van-checkbox shape="square"></van-checkbox>
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
</script>

<style lang="scss">
:root {
  --van-nav-bar-icon-color: #333;
  --van-nav-bar-title-text-color: #333;
  --van-nav-bar-background-color: #f6f6f6;
  color: #333;
}
</style>

<style scoped lang="scss">
@import 'src/assets/styles/pay.scss';
.record-list {
  padding: 0.2rem 0.2rem;
  .list-container{
    background: #fff;
    border-radius: 0.1rem;
    .list-item {
      //padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.14rem;
      .left {
        width: 80vw;
        .cell{
          margin: 0.1rem 0;
        }
      }
      .right {
        margin-right: 5vw;
      }
    }
    .check{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.2rem 0.2rem;
      span{
        font-weight: bold;
        font-size: 0.14rem;
      }
    }
  }


}
</style>
