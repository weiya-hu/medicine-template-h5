<template>
  <div class="container">
    <van-cell-group inset>
      <van-field v-model="search" @click-right-icon="onChange">
        <template #right-icon>
          <img src="../../assets/images/search.png"/>
        </template>
      </van-field>

      <van-cell is-link @click="onClick(item.categoryId)" v-for="(item, index) in guideList" :key="index">
        <template #title>
          <span class="guide-item">{{ item.name }}</span>
        </template>
      </van-cell>
    </van-cell-group>
    <van-popup
        v-model:show="showGuide"
        round
        close-icon-position="top-left"
        position="bottom"
        :style="{ height: '82%' }"
    >
      <div class="should-know">
        <div v-html="state.post"></div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {categoryList_api, categoryTree_api, editList_api} from "@/api/infoUrl";
import {useRoute} from "vue-router";
import { _ } from 'lodash';

const route = useRoute()
const search = ref('')
const showGuide = ref(false)
const guideList = ref([])
const state = ref({
  post: ''
})

const onChange = () => {
  getListData()
}

const onClick = (data: any) => {
  showGuide.value = true
  editList_api({categoryId: data, status: 2}).then(res => {
    state.value.post = _.unescape(res.data.list[0].post)
  })
}
const getListData = () => {
  categoryList_api({code: route.query.code, status: 1}).then(res => {
    if (res.code === 200) {
      categoryList_api({pid: res.data.list[0].categoryId, name: search.value, status: 1}).then(res_id => {
        guideList.value = res_id.data.list
      })
    }
  })
}
onMounted(() => {
  getListData()
})
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  background: #F6F6F6;
  padding: 0.20rem 0;

  .van-cell {
    &:first-child:after {
      border: 0;
    }
  }

  :deep(.van-field__body) {
    width: 100%;
    height: 0.40rem;
    background: #F5F5F5;
    border-radius: 1.88rem;
    padding: 0.10rem 0.15rem;

    .van-field__control {
      width: calc(100% - 0.20rem);
    }

    .van-field__right-icon {
      width: 0.20rem;
      height: 0.20rem;
      padding: 0;
    }
  }

  .guide-item {
    padding-left: 0.12rem;
    font-size: 0.17rem;
    font-family: PingFang SC-Bold, PingFang SC;
    font-weight: bold;
    color: #333333;
    position: relative;
    line-height: 0.32rem;

    &:after {
      content: '';
      width: 0.06rem;
      height: 0.06rem;
      display: inline-block;
      background: #D8D8D8;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
  .should-know {
    padding: 0.15rem;
    //.should-know-title {
    //  text-align: center;
    //  font-size: 0.18rem;
    //  font-family: PingFang SC-Bold, PingFang SC;
    //  font-weight: bold;
    //  color: #333333;
    //  margin: 0.15rem 0 0.30rem;
    //}
    //p {
    //  font-size: 15px;
    //  font-family: PingFang SC-Regular, PingFang SC;
    //  font-weight: 400;
    //  color: #333333;
    //}
  }
}
</style>
