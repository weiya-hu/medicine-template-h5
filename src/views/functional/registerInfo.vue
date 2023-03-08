<template>
  <div class="container">
    <div class="info-title">请确认预约挂号信息</div>
    <div class="info-item">
      <van-cell-group>
        <van-cell :border="false">
          <template #icon>
            <img src="../../assets/images/register-info-hospitalArea.png" alt="" class="van-cell-img1" />
          </template>
          <template #title>
            <div class="van-cell-title">预约院区</div>
          </template>
          <template #value>
            <div class="van-cell-value">{{state.hospitalArea}}</div>
          </template>
        </van-cell>
        <van-cell :border="false">
          <template #icon>
            <img src="../../assets/images/register-info-dept.png" alt="" class="van-cell-img2" />
          </template>
          <template #title>
            <div class="van-cell-title">预约科室</div>
          </template>
          <template #value>
            <div class="van-cell-value">{{state.dept}}</div>
          </template>
        </van-cell>
        <van-cell :border="false">
          <template #icon>
            <img src="../../assets/images/register-info-doctor.png" alt="" class="van-cell-img2" />
          </template>
          <template #title>
            <div class="van-cell-title">预约医生</div>
          </template>
          <template #value>
            <div class="van-cell-value">{{state.doctor}}</div>
          </template>
        </van-cell>
        <van-cell :border="false">
          <template #icon>
            <img src="../../assets/images/register-info-rank.png" alt="" class="van-cell-img2" />
          </template>
          <template #title>
            <div class="van-cell-title">级别</div>
          </template>
          <template #value>
            <div class="van-cell-value">{{state.rank}}</div>
          </template>
        </van-cell>
        <van-cell :border="false">
          <template #icon>
            <img src="../../assets/images/register-info-time.png" alt="" class="van-cell-img2" />
          </template>
          <template #title>
            <div class="van-cell-title">就诊时段</div>
          </template>
          <template #value>
            <div class="van-cell-value">{{state.time}}</div>
          </template>
        </van-cell>
        <van-cell :border="false">
          <template #icon>
            <img src="../../assets/images/register-info-area.png" alt="" class="van-cell-img3" />
          </template>
          <template #title>
            <div class="van-cell-title">就诊区域</div>
          </template>
          <template #value>
            <div class="van-cell-value">{{state.area}}</div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="info-item">
      <van-cell-group :border="false">
        <van-cell :border="false">
          <template #icon>
            <img src="../../assets/images/register-info-amount.png" alt="" class="van-cell-img2" />
          </template>
          <template #title>
            <div class="van-cell-title">支付金额</div>
          </template>
          <template #value>
            <div class="van-cell-value">{{state.amount}}</div>
          </template>
        </van-cell>
        <van-cell :border="false">
          <template #icon>
            <img src="../../assets/images/register-info-name.png" alt="" class="van-cell-img2" />
          </template>
          <template #title>
            <div class="van-cell-title">患者姓名</div>
          </template>
          <template #value>
            <div class="van-cell-value">{{state.name}}</div>
          </template>
        </van-cell>
      </van-cell-group>
      <div class="add-visit">
        <div class="add-visit-tag">李冬冬 ID:123123123</div>
        <van-button type="default" size="small" @click="onClick">+ 新增就诊人</van-button>
      </div>
    </div>
    <div class="tips">
      温馨提示<br/>
      1、本系统目前仅支持自费用户。<br />
      2、请在预约挂号成功后2分钟内完成支付，超出时间后系统将做退号处理<br/>
      3、本次微信公众号挂号费支付不能直接纳入医保结算，就诊后3日内可携带挂号凭证（已打印发票患者，必须携带发票）和医保卡至挂号窗口反结算报销挂号诊察费
    </div>
  </div>
  <div class="btn">
    <div class="btn-top">
      <van-checkbox v-model="checked" checked-color="#0564F7">我已阅读并知晓以上内容</van-checkbox>
    </div>
    <div class="btn-bon">
      <van-button @click="reset">取消预约</van-button>
      <van-button type="primary" @click="submit">确认预约</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {showDialog, showSuccessToast} from "vant";
import {useRouter} from "vue-router";

const router = useRouter()
const checked = ref(false)
const state = ref({
  hospitalArea: '渝中区',
  dept: '风湿免疫科',
  doctor: '罗翔',
  rank: '副主任医师',
  time: '2023-02-21 15:10-15:20',
  area: '1号楼2楼6诊所',
  amount: '200',
  name: '李东东'
})
const onClick = () => {
  router.push('visitlog')
}
const reset = () => {
  router.go(-1)
}
const submit = () => {
  if (checked.value) {
    showSuccessToast('预约成功');
  } else {
    showDialog({
      title: '提示',
      message: '请阅读并确认知晓以上提示内容',
      confirmButtonText: '确定',
      confirmButtonColor: '#0564F7'
    }).then(() => {
      // on close
    });
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 0.25rem 0.15rem 1.00rem;
  background: #F6F6F6;
  .info-title {
    padding-left: 0.10rem;
    font-size: 0.17rem;
    font-family: PingFang SC-Bold, PingFang SC;
    font-weight: bold;
    color: #333333;
    line-height: 0.25rem;
    position: relative;

    &:before {
      content: '';
      display: block;
      width: 0.04rem;
      height: 0.18rem;
      background: #0564F7;
      position: absolute;
      left: 0;
      top: 0.03rem;
    }
  }
  .info-item {
    background: #FFFFFF;
    margin-top: 0.15rem;
    border-radius: 0.12rem;
    overflow: hidden;
    :deep(.van-cell) {
      align-items: center;
      line-height: 0.30rem;
      .van-cell__title, .van-cell__value {
        flex: auto;
      }
      .van-cell-img1 {
        width: 0.19rem;
        height: 0.19rem;
      }
      .van-cell-img2 {
        width: 0.18rem;
        height: 0.18rem;
      }
      .van-cell-img2 {
        width: 0.15rem;
        height: 0.18rem;
      }
      .van-cell-title {
        font-size: 0.15rem;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        margin-left: 0.10rem;
      }
      .van-cell-value {
        font-size: 0.15rem;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        color: #333333;
      }
    }
    .add-visit {
      padding: 0.15rem;
      display: flex;
      .add-visit-tag {
        height: 0.30rem;
        line-height: 0.30rem;
        padding: 0 0.10rem;
        text-align: center;
        background: #E4EEFF;
        border-radius: 0.06rem;
        font-size: 0.14rem;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #0564F7;
      }
      .van-button {
        color: #0564F7;
        margin-left: 0.10rem;
      }
    }
  }
  .tips {
    padding: 0.18rem 0;
    font-size: 0.14rem;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 0.25rem;
  }
}
.btn {
  width: 100%;
  height: 1.00rem;
  background: #FFFFFF;
  position: fixed;
  left: 0;
  bottom: 0;
  .btn-top {
    height: 0.5rem;
    padding: 0.15rem;
  }
  .btn-bon {
    .van-button {
      width: 50%;
      height: 0.50rem;
      border: 0;
      border-radius: 0;
    }
    .van-button--primary {
      background: #0564F7;
      border: 0.01rem solid #0564F7;
    }
  }
}
</style>
