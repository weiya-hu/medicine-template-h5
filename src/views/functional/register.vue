<template>
  <div class="container">
    <van-sidebar v-model="active">
      <van-sidebar-item v-for="(item, index) in navList" :key="index" @click="onClick(index)">
        <template #title>
          <div class="van-sidebar-item-hide">
            <img :src="item.hideImageUrl"/>
            <span>{{ item.text }}</span>
          </div>
          <div class="van-sidebar-item-show">
            <img :src="item.showImageUrl"/>
            <span>{{ item.text }}</span>
          </div>
        </template>
      </van-sidebar-item>
      <div></div>
    </van-sidebar>
    <div v-show="active === index" v-for="(item, index) in navList" :key="index" class="cont">
      <div v-for="(items, indexs) in item.listItem" :key="indexs" class="cont-item" @click="itemsClick(items.id)">
        {{ items.text }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
const active = ref(0);
const navList = ref([
  {
    hideImageUrl: new URL('../../assets/images/register-hide-item1.png', import.meta.url).href,
    showImageUrl: new URL('../../assets/images/register-show-item1.png', import.meta.url).href,
    text: '内科系列',
    listItem: [
      {text: '内科1', id: '01'},
      {text: '内科2', id: '02'},
      {text: '内科3', id: '03'},
      {text: '内科4', id: '04'}
    ]
  },
  {
    hideImageUrl: new URL('../../assets/images/register-hide-item2.png', import.meta.url).href,
    showImageUrl: new URL('../../assets/images/register-show-item2.png', import.meta.url).href,
    text: '外科系列',
    type: '1111',
    listItem: [
      {text: '肝胆外科', id: '11'},
      {text: '风湿免疫科', id: '12'},
      {text: '感染科', id: '13'},
      {text: '消化外科', id: '14'}
    ]
  },
  {
    hideImageUrl: new URL('../../assets/images/register-hide-item3.png', import.meta.url).href,
    showImageUrl: new URL('../../assets/images/register-show-item3.png', import.meta.url).href,
    text: '专科系列',
    type: '2222',
    listItem: [
      {text: '专科1', id: '21'},
      {text: '专科2', id: '22'},
      {text: '专科3', id: '23'},
      {text: '专科4', id: '24'}
    ]
  },
  {
    hideImageUrl: new URL('../../assets/images/register-hide-item4.png', import.meta.url).href,
    showImageUrl: new URL('../../assets/images/register-show-item4.png', import.meta.url).href,
    text: '专病系列',
    type: '444',
    listItem: [
      {text: '专病1', id: '31'},
      {text: '专病2', id: '32'},
      {text: '专病3', id: '33'},
      {text: '专病4', id: '34'}
    ]
  },
]);
const onClick = (index: number) => {
  console.log('121', index)
}
const itemsClick = (id: any) => {
  router.push({
    path: 'registerdept',
    query: {id: id}
  })
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;

  .van-sidebar-item--select:before {
    background: 0;
  }

  .van-sidebar-item {

    .van-sidebar-item-show {
      display: none;
    }

    .van-sidebar-item-hide {
      display: block;
    }
  }

  .van-sidebar-item--select {
    .van-sidebar-item-show {
      display: block;
    }

    .van-sidebar-item-hide {
      display: none;
    }
  }

  .cont {
    width: calc(100% - 80px);
    height: 100vh;
    background: #FFFFFF;

    .cont-item {
      height: 0.36rem;
      line-height: 0.36rem;
      padding: 0 0.50rem;
      margin-top: 0.34rem;
      display: block;
      font-size: 0.16rem;
      font-family: PingFang SC-Bold, PingFang SC;
      font-weight: bold;
      color: #333333;
    }
  }
}
</style>
