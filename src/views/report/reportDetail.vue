<template>
  <div class="container">
    <div class="content">
      <div class="title">
        牙科CT报告
      </div>
      <div class="baseInfo">
        <van-row gutter="20">
          <van-col span="8">姓名：张三</van-col>
          <van-col span="8">性别：男</van-col>
          <van-col span="8">年龄：18岁</van-col>
        </van-row>
        <van-row style="margin-top: 0.1rem" justify="space-between">
          <van-col span="12">门诊/住院病例号：00000001</van-col>
          <van-col span="12">科室（病区、床位号）：全科</van-col>
        </van-row>
        <van-row style="margin-top: 0.1rem">
          <van-col span="12">临床诊断：手口足病</van-col>
        </van-row>
        <van-row style="margin-top: 0.1rem" justify="space-between">
          <van-col span="12">住址/电话：重庆市渝北区/12121212121</van-col>
          <van-col span="12">开具日期：2023-02-23</van-col>
        </van-row>
      </div>
      <div class="docDesc">
        <p class="tit">医生总评</p>
        <p class="desc">牙列缺损/缺失修复治疗</p>
      </div>
      <div class="medSuggest">
        <p class="tit">治疗建议</p>
        <p class="desc">建议来源进行矫正治疗，做窝沟封闭，平时要注意口腔卫生，早中晚三餐
          后刷牙，睡前不吃东西。</p>
      </div>
      <div class="medInventory">
        <p>用药清单</p>
        <div class="medList">
          <ul>
            <li class="medItem" v-for="(item,index) in medicalList">
              <div class="medDesc">
                <div class="name">
                  <span>{{ index }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="format">
                  {{ item.format }}
                </div>
                <div class="num">
                  <span>x</span>
                  <span>{{ item.num }}</span>
                </div>
              </div>
              <div class="useMethod">
                <div class="use">用法:{{ item.useMethod.use }}</div>
                <div class="usage">{{ item.useMethod.usage }}</div>
                <div class="count">{{ item.useMethod.count }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="payInfo">
        <van-row style="margin-top: 0.1rem" justify="space-between">
          <van-col span="12">
            <div>药品金额：40.50</div>
            <div>检查费用：40.50</div>
            <div>合计金额：81.00</div>
          </van-col>
          <van-col span="12">
            <div>医生签名：李XX</div>
            <div>日期：2023-02-23</div>
          </van-col>
        </van-row>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const medicalList = ref<any[]>([
  {
    name: '头孢胶囊',
    format: '50mg*6袋',
    num: '1盒',
    useMethod: {
      use: '口服',
      usage: '每次50mg',
      count: "每日三次"
    }
  },
  {
    name: '利巴韦颗粒 ',
    format: '50mg*18袋 ',
    num: '1盒',
    useMethod: {
      use: '口服',
      usage: '每次50mg',
      count: "每日二次"
    }
  },
  {
    name: '板蓝根颗粒',
    format: ' 10g*20袋 ',
    num: '1大袋',
    useMethod: {
      use: '口服',
      usage: '每次10g',
      count: "每日三次"
    }
  },
])

</script>

<style scoped lang="scss">
.container {
  background: #F6F6F6;
  padding: 0.15rem 0.15rem;
  color: #333333;
  font-family: PingFang SC-Bold;
  font-size: 0.14rem;

  .content {
    background-color: #FFFFFF;
    padding: 0.1rem;

    .title {
      padding: 0.2rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 0.01rem solid #CCCCCC;
      font-size: 0.18rem;
    }

    .baseInfo {
      margin-top: 0.2rem;
      font-size: 0.14rem;
      border-bottom: 0.01rem solid #CCCCCC;
      padding: 0.1rem;
    }

    .docDesc, .medSuggest {
      padding: 0.1rem;
      border-bottom: 0.01rem solid #CCCCCC;

      .tit {
        font-size: 0.2rem;
        font-weight: bold;
        margin-bottom: 0.05rem;
      }

      .desc {
        font-size: 0.14rem;
      }
    }

    .medInventory {
      padding: 0.1rem;
      border-bottom: 0.01rem solid #CCCCCC;
      font-size: 0.14rem;

      p {
        font-size: 0.2rem;
        font-weight: bold;
        margin-bottom: 0.05rem;
      }

      .medList {
        .medDesc, .useMethod {
          padding: 0.05rem;
          display: flex;
          border-bottom: 0.01rem dashed #CCCCCC;;
        }
      }

      .medDesc {
        .name {
          flex: 3;
        }

        .format {
          flex: 2;
        }

        .num {
          flex: 1;
        }
      }

      .useMethod {
        padding-left: 0.2rem !important;

        .use {
          flex: 1;
        }

        .usage {
          flex: 1;
        }

        .count {
          flex: 1;
        }
      }
    }

    .payInfo {
      font-size: 0.14rem;
    }
  }
}


</style>


