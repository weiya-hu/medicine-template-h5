<template>
  <div class="container">
    <van-sidebar v-model="active"  @change="onChange" v-show="isShow">
      <van-sidebar-item v-for="(item, index) in sidebarList" :key="index" :title="item.name"></van-sidebar-item>
    </van-sidebar>

    <div class="content" :style="{'width' : isShow ? 'calc(100% - 0.80rem)' : '100%' }">
      <div class="content-box table_style" v-if="dataLength.length !== 0">
        <div class="content-box-title">{{ state.title }}</div>
        <div class="content-box-text" v-html="state.post"></div>
      </div>
      <van-empty description="暂无数据" v-if="dataLength.length == 0" />
    </div>
    <div class="show-hide" @click="getShow" :style="{'left' : isShow ? '0.55rem' : '0'}">
      <img src="../../assets/images/edit-show.png" alt="" v-show="isShow === true"/>
      <img src="../../assets/images/edit-hide.png" alt="" v-show="isShow === false"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
import {categoryTree_api, editList_api} from "@/api/infoUrl";
import {useRoute} from "vue-router";
import { _ } from 'lodash';

const route = useRoute()
const active = ref(0);
const isShow = ref(true)
const sidebarList = ref([])
const categoryId = ref('')
const state = reactive({
  title: '',
  post: ''
})
const dataLength = ref([])

const getShow = () => {
  isShow.value = !isShow.value
}
const onChange = () => {
  categoryId.value = sidebarList.value[active.value].categoryId
  getListDataRig()
}
const getListDataRig = () => {
  editList_api({categoryId: categoryId.value, status: 2}).then(res => {
    if (res.code === 200) {
      dataLength.value = res.data.list
      state.title = res.data.list[0].title
      state.post = _.unescape(res.data.list[0].post)
    }
  })
}
const getListData = () => {
  categoryTree_api({code: route.query.code, allChild: true}).then(res => {
    if (res.code === 200) {
      sidebarList.value = res.data[0].childs
      categoryId.value = sidebarList.value[0].categoryId
      getListDataRig()
    }
  })
}
onMounted(() => {
  getListData()
})
</script>

<style lang="scss" scoped>
.container {
  background: #F2F2F2;
  height: 100vh;
  display: flex;
  position: relative;

  .van-sidebar-item {
    padding: 0.12rem;
    background: #F2F2F2;

    :deep(.van-sidebar-item__text) {
      text-align: center;
      font-size: 0.14rem;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      line-height: 0.21rem;
    }
  }

  .van-sidebar-item--select {
    background: #FFFFFF;

    &:before {
      background: 0;
    }
  }

  .content {
    background: #FFFFFF;

    .content-box {
      background: linear-gradient(180deg, rgba(5, 100, 247, 0.13) 0%, rgba(255, 255, 255, 0) 100%) no-repeat;
      background-size: 100% 2.64rem;
      height: 100vh;
      overflow: auto;
      padding: 0.20rem 0.15rem;

      .content-box-title {
        font-size: 0.16rem;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        margin-bottom: 0.15rem;
        color: #333333;
        position: relative;

        &:after {
          content: '';
          display: block;
          width: 0.04rem;
          height: 0.16rem;
          background: #66CCC9;
          position: absolute;
          top: 0.02rem;
          left: -0.15rem;
        }
      }

      .content-box-text {
        width: 100%;
        font-size: 0.14rem;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 0.25rem;
      }
    }
  }

  .show-hide {
    width: 0.25rem;
    height: 0.50rem;
    position: absolute;
    top: 50%;
    transform: translate(1, -50%);
  }
}
</style>
