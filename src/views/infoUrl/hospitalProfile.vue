<template>
  <div class="container">
    <div class="banner">
      <!--      <img src="../../assets/images/home_banner.png" alt="" />-->
    </div>
    <div class="container-box">
      <!-- 功能模块 -->
      <div class="card module1 van-row">
        <div class="van-col--6 module1-item">
          <img src="../../assets/images/hospitalProfile-module1-item1.png" alt=""/>
          <p>科室介绍</p>
        </div>
        <div class="van-col--6 module1-item">
          <img src="../../assets/images/hospitalProfile-module1-item2.png" alt=""/>
          <p>专家介绍</p>
        </div>
        <div class="van-col--6 module1-item">
          <img src="../../assets/images/hospitalProfile-module1-item3.png" alt=""/>
          <p>健康宣教</p>
        </div>
        <div class="van-col--6 module1-item">
          <img src="../../assets/images/hospitalProfile-module1-item4.png" alt=""/>
          <p>来院导航</p>
        </div>
      </div>
      <!-- 医疗机构许可证书 -->
      <div class="card module2">
        <div class="module-title">医疗机构许可证书</div>
        <div class="module2-item">
          <!--          <img src="../../assets/images/home_banner.png" alt="" />-->
        </div>
      </div>
      <!-- 互联网诊疗服务范围（科目/病种） -->
      <div class="card module3">
        <div class="module-title">互联网诊疗服务范围（科目/病种）</div>
        <div class="module3-item">
          <div class="module3-item-dept">
            <p class="module3-item-dept-p1">内科</p>
            <p class="module3-item-dept-p2">心血管内科专业</p>
          </div>
          <div class="module3-item-dept">
            <p class="module3-item-dept-p1">儿童保健科</p>
            <p class="module3-item-dept-p2">儿童生长发育专业、儿童营养专业、儿童心理卫生专业、儿童五官保健专业、儿童康复专业</p>
          </div>
          <div class="module3-item-dept">
            <p class="module3-item-dept-p1">医学影像科</p>
            <p class="module3-item-dept-p2">儿童生长发育专业、儿童营养专业、儿童心理卫生专业、儿童五官保健专业、儿童康复专业</p>
          </div>
        </div>
      </div>
      <!-- 荣誉奖项 -->
      <div class="card module4">
        <div class="module-title">荣誉奖项</div>
        <div class="module4-item">
          <div></div>
          <p>2022年全国十佳机构</p>
        </div>
      </div>
      <!-- 联系我们 -->
      <div class="card module5">
        <div class="module-title">联系我们</div>
        <ul class="module5-item">
          <li>
            <img src="../../assets/images/hospitalProfile-module5-item1.png" alt=""/>
            <p>地址：重庆市渝北区红锦大道111号</p>
          </li>
          <li>
            <img src="../../assets/images/hospitalProfile-module5-item2.png" alt=""/>
            <p>邮编：123456</p>
          </li>
          <li>
            <img src="../../assets/images/hospitalProfile-module5-item3.png" alt=""/>
            <p>网址：www.shanhaiping.coom</p>
          </li>
          <li>
            <img src="../../assets/images/hospitalProfile-module5-item4.png" alt=""/>
            <p>电话：131313131313</p>
          </li>
          <li>
            <img src="../../assets/images/hospitalProfile-module5-item5.png" alt=""/>
            <p>传真：023-23342343</p>
          </li>
        </ul>
      </div>
      <div class="support">技术支持：山海平信息技术</div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.container {
  .banner {
    background: linear-gradient(225deg, #0079DE 0%, #0077DB 25%, #1DA7EF 100%);
  }

  //.banner img{
  //  width: 100%;
  //}
  .container-box {
    .card {
      transform: translateY(-0.20rem);
    }

    .module1 .module1-item {
      text-align: center;

      img {
        width: 0.50rem;
        height: 0.50rem;
      }

      p {
        font-size: 14px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        margin-top: 0.05rem;
      }
    }

    .module2 .module2-item {
      margin-top: 0.15rem;
      width: 100%;
      height: 1.80rem;
      background: #C3CFE6;
      //img {
      //  width: 100%;
      //}
    }

    .module3 .module3-item{
      .module3-item-dept {
        margin-top: 0.15rem;
        .module3-item-dept-p1 {
          position: relative;
          font-size: 15px;
          font-family: PingFang SC-Bold, PingFang SC;
          font-weight: bold;
          color: #333333;
          line-height: 0.26rem;
          &:after {
            content: '';
            display: block;
            width: 0.04rem;
            height: 0.16rem;
            background: #66CCC9;
            position: absolute;
            left: -0.15rem;
            top: 0.04rem;
          }
        }
        .module3-item-dept-p2 {
          font-size: 14px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 0.24rem;
        }
      }
    }
    .module4 .module4-item {
      margin-top: 0.15rem;
      width: 100%;

      div {
        width: 100%;
        height: 1.80rem;
        background: #C3CFE6;
      }

      p {
        text-align: center;
        font-size: 14px;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        color: #333333;
        margin-top: 0.09rem;
      }
    }

    .module5 .module5-item {
      margin-top: 0.15rem;

      li {
        display: flex;
        align-items: center;

        img {
          width: 0.16rem;
          height: 0.16rem;
          margin-right: 0.12rem;
        }

        p {
          font-size: 14px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 28px;
        }
      }
    }

    .support {
      text-align: center;
      font-size: 14px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #CCCCCC;
      line-height: 25px;
      transform: translateY(-0.25rem);
      padding-bottom: 0.25rem;
    }
  }
}
</style>
