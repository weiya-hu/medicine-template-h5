<template>
  <div class="log-detail">
    <div class="log-detail-contant">
      <div class="visit-date"><span>就诊日期：</span><span class="bold">2023-03-02</span></div>
      <div class="line"></div>
      <div class="flexb marg-bottom">
        <div><span>姓名：</span><span class="bold">张三</span></div>
        <div>性别：男</div>
        <div>年龄：18岁</div>
      </div>
      <div class="flexb marg-bottom">
        <div>门诊/住院病历号：00000001</div>
        <div>科室（病区/床位号）：全科</div>
      </div>
      <div class="marg-bottom">临床诊断：手口足病</div>
      <div class="flexb">
        <div>住址/电话：重庆市渝北区 / 17300000000</div>
        <div>开具日期：2023-02-23</div>
      </div>
      <div class="line"></div>
      <div class="bold dashed-line">1.医师面诊</div>
      <div class="doctor">主治医师：张XX</div>
      <div class="line"></div>
      <div class="bold dashed-line">2.诊断结果</div>
      <div class="doctor">手口足病，需要涂药治疗</div>
      <div class="line"></div>
      <div class="bold dashed-line">3.治疗建议</div>
      <div class="doctor">建议来源进行矫正治疗，做窝沟封闭，平时要注意口腔卫生，早中晚三餐后刷牙，睡前不吃东西。</div>
      <div class="line"></div>
      <div class="bold dashed-line">4.处方药品</div>
      <div class="flexb medicine dashed-line">
        <span>口腔炎喷雾剂 </span>
        <span>10ml:30mg </span>
        <span>×1盒</span>
      </div>
      <div class="flexb medicine dashed-line">
        <span>用法:</span>
        <span>外涂患处 </span>
        <span>每次适量</span>
        <span>每日三次</span>
      </div>
      <div class="line"></div>
      <div class="marg-bottom">医师：李医师</div>
      <div class="flexl flexw doctors">
        <span>审核药师：冯医师</span>
        <span>调配药师：陈医师</span>
        <span>核对，发药药师：张医师</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.log-detail {
  padding: 0.18rem 0.15rem;
  .log-detail-contant {
    padding: 0.2rem;
    background: #ffffff;
    border-radius: 12px 12px 12px 12px;
    .visit-date > span {
      font-size: 0.16rem;
    }
    .bold {
      font-weight: bold;
    }
    .marg-bottom {
      margin-bottom: 0.08rem;
    }
    .line {
      height: 1px;
      background: $black3;
      margin: 0.15rem 0;
    }
    .dashed-line {
      width: 80%;
      border-bottom: 1px dashed $black3;
    }
    .doctor {
      padding: 0.08rem 0.55rem 0 0.2rem;
    }
    .medicine {
      padding: 0.08rem 0 0.08rem 0.2rem;
    }
    .doctors {
      span {
        margin: 0 0.3rem 0.08rem 0;
      }
    }
  }
}
</style>
