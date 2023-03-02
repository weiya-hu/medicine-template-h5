<template>
  <div class="container">
    <div class="banner">
      <img src="../../assets/images/home_banner.png" alt=""/>
    </div>
    <div class="container-box">
      <!-- 导航栏 -->
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
<!--      <div class="card module2">-->
<!--        <div class="module-title">医疗机构许可证书</div>-->
<!--        <div class="module2-item">-->
<!--          <img src="../../assets/images/home_banner.png" alt=""/>-->
<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash; 互联网诊疗服务范围（科目/病种） &ndash;&gt;-->
<!--      <div class="card module3">-->
<!--        <div class="module-title">互联网诊疗服务范围（科目/病种）</div>-->
<!--        <div class="module3-item">-->
<!--          <div class="module3-item-dept">-->
<!--            <p class="module3-item-dept-p1">内科</p>-->
<!--            <p class="module3-item-dept-p2">心血管内科专业</p>-->
<!--          </div>-->
<!--          <div class="module3-item-dept">-->
<!--            <p class="module3-item-dept-p1">儿童保健科</p>-->
<!--            <p class="module3-item-dept-p2">儿童生长发育专业、儿童营养专业、儿童心理卫生专业、儿童五官保健专业、儿童康复专业</p>-->
<!--          </div>-->
<!--          <div class="module3-item-dept">-->
<!--            <p class="module3-item-dept-p1">医学影像科</p>-->
<!--            <p class="module3-item-dept-p2">儿童生长发育专业、儿童营养专业、儿童心理卫生专业、儿童五官保健专业、儿童康复专业</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash; 荣誉奖项 &ndash;&gt;-->
<!--      <div class="card module4">-->
<!--        <div class="module-title">荣誉奖项</div>-->
<!--        <div class="module4-item">-->
<!--          <img src="../../assets/images/home_banner.png" alt=""/>-->
<!--          <p>2022年全国十佳机构</p>-->
<!--        </div>-->
<!--      </div>-->
      <div class="card module2">
        <div class="module-title">{{state.title}}</div>
        <div class="module2-item">
          <div v-html="state.post"></div>
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
import {onMounted, ref} from "vue";
import {categoryTree_api, editList_api} from "@/api/infoUrl";
import {useRoute} from "vue-router";
import { _ } from 'lodash';

const route = useRoute();
const state = ref({
  post: ''
})
const getData = () => {
  categoryTree_api({code: route.query.code, allChild: true}).then(res => {
    if (res.code === 200) {
      editList_api({categoryId: res.data[0].childs[0].categoryId, status: 2}).then(res => {
        if (res.code === 200) {
          state.value.post = _.unescape(res.data.list[0].post)
        }
      })
    }
  })
}
onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped>
.container {
  .banner img {
    width: 100%;
  }

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
        font-size: 0.14rem;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        margin-top: 0.05rem;
      }
    }

    .module2 .module2-item {
      margin-top: 0.15rem;
      width: 100%;
      //height: 1.80rem;

      img {
        width: 100%;
        height: 100%;
      }
      p {
        margin-top: 0.15rem;
      }
    }

    .module3 .module3-item {
      .module3-item-dept {
        margin-top: 0.15rem;

        .module3-item-dept-p1 {
          position: relative;
          font-size: 0.15rem;
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
          font-size: 0.14rem;
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

      img {
        width: 100%;
        height: 1.80rem;
        background: #C3CFE6;
      }

      p {
        text-align: center;
        font-size: 0.14rem;
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
          font-size: 0.14rem;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 0.28rem;
        }
      }
    }

    .support {
      text-align: center;
      font-size: 0.14rem;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #CCCCCC;
      line-height: 0.25rem;
      transform: translateY(-0.25rem);
      padding-bottom: 0.25rem;
    }
  }
}
</style>
