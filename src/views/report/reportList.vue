<template>
  <div class="container">
    <div class="inspection">
      <div class="title">
        <span class="graph"></span>
        <span class="desc">检查报告(0份)</span>
      </div>
      <div class="list">
        <van-list
            v-model:loading="check_loading"
            :finished="check_finished"
            :finished-text="check_list.length!==0?'':'暂无检查报告'"
            @load="onLoad"
        >
          <van-cell class="item" v-for="item in check_list" :key="item.title" :title="item.title" is-link/>
        </van-list>
      </div>
    </div>
    <div class="inspect">
      <div class="title">
        <span class="graph"></span>
        <span class="desc">检验报告(2份)</span>
      </div>
      <div class="list">
        <van-list
            v-model:loading="ins_loading"
            :finished="ins_finished"
            :finished-text="ins_list.length!==0?'':'暂无检验报告'"
            @load="onLoad"
        >
          <van-cell @click="()=>jumpToDetail(item)" class="item" v-for="item in ins_list" :key="item.title"
                    :title="item.title" is-link/>
        </van-list>
      </div>
    </div>
    <div class="tip">
      <p>温馨提示：</p>
      <div>
        <span class="warn">检验报告</span>
        <span>查看有效期为30天</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {useRouter} from "vue-router";

const router = useRouter()
const check_list = ref<any[]>([]);
const check_loading = ref<Boolean>(false);
const check_finished = ref<Boolean>(false);
const ins_list = ref<any[]>([
  {
    title: "[02-14]尿常规(千化/mALB/沉渣"
  },
  {
    title: "[结果未发布]尿常规(千化/mALB/沉渣"
  }
]);
const ins_loading = ref<Boolean>(false);
const ins_finished = ref<Boolean>(false);
//跳转到详情界面
const jumpToDetail = (item: Object) => {
  router.push({
    path: '/report/detail',
    query: {code: '111'},
  })
}
const onLoad = () => {
  ins_finished.value = true
  check_finished.value = true
};
</script>

<style scoped lang="scss">
:deep(.van-list__finished-text) {
  color: #999999;
  font-size: 0.15rem;
  font-weight: 400;
  margin: 0.2rem 0;
}

:deep(.van-cell) {
  margin-top: 0.1rem;
  height: 0.5rem;
  border-radius: 0.1rem;
  padding: 0 0.15rem;
  display: flex;
  align-items: center;
  font-size: 0.15rem;
  color: #333;
  font-weight: 400;
}

.container {
  background: #F6F6F6;
  padding: 0 0.15rem;
  color: #333333;
  font-family: PingFang SC-Bold;

  .tip {
    margin-top: 0.2rem;
    display: flex;
    flex-direction: column;
    font-size: 0.14rem;
    font-weight: 400;
    color: #333;

    p {
      margin-bottom: 0.05rem;
    }

    .warn {
      color: #0564F7;
    }
  }

  .title {
    height: 0.24rem;
    line-height: 0.24rem;

    .graph {
      display: inline-block;
      width: 0.04rem;
      height: 0.16rem;
      background-color: #0564F7;
    }

    .desc {
      margin-left: 0.1rem;
      font-size: 0.17rem;
      font-weight: bold;
    }

  }

  .list {
    margin-top: 0.35rem;
  }

  .inspection {
    display: flex;
    flex-direction: column;
  }

}

</style>


