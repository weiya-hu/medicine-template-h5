<template>
  <div class="container">
    <div class="container-box">
      <div class="card special-column" v-for="(item, index) in specialColumnList" :key="index">
        <div class="module-title">{{ item.name }}</div>
        <div class="special-column-item">
          <div class="special-column-item-top" v-for="(v, i) in essayList[index]" :key="i" @click="handleClick(v.postId)">
            <div v-if="i == 0">
              <img :src="v.thumbnail" alt=""/>
              <div class="special-column-item-title">
                <p class="special-column-item-p1">{{ v.title }}</p>
                <p class="special-column-item-p2">{{ v.publishTime }}</p>
              </div>
            </div>
            <div v-if="i !== 0">
              <div class="special-column-item-bot van-row">
                <div class="van-col--18">
                  <p class="special-column-item-bot-p1">{{ v.title }}</p>
                  <p class="special-column-item-bot-p2">{{ v.desc }}</p>
                </div>
                <div class="van-col--6 special-column-item-bot-img">
                  <img :src="v.thumbnail" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {categoryTree_api, editList_api} from "@/api/infoUrl";

const router = useRouter(), route = useRoute()
const specialColumnList = ref([])
const essayList = ref([])

const handleClick = (data: any) => {
  router.push({
    path: 'medicaltrendsdetails',
    query: {postId: data}
  })
}
const index = ref(0)
const getListData = () => {
  categoryTree_api({code: route.query.code, allChild: true}).then(res => {
    if (res.code === 200) {
      specialColumnList.value = res.data[0].childs
      res.data[0].childs.forEach((item: any) => {
        editList_api({categoryId: item.categoryId, status: 1}).then(res => {
          if (res.code === 200) {
            if (res.data.list.length > 3) res.data.list.length = 3
            essayList.value.push(res.data.list)
          }
        })
      })
    }
  })
}

onMounted(() => {
  getListData()
})
</script>

<style lang="scss" scoped>
.container-box {
  padding: 0.15rem !important;

  .special-column .special-column-item {
    margin-top: 0.15rem;

    .special-column-item-top {
      img {
        width: 100%;
        height: 1.33rem;
        border-radius: 0.12rem;
      }

      .special-column-item-title {
        margin-top: 0.12rem;

        .special-column-item-p1 {
          font-size: 0.15rem;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 0.21rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .special-column-item-p2 {
          text-align: right;
          font-size: 0.12rem;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
        }
      }
    }

    .special-column-item-bot {
      padding: 0.15rem 0;

      .special-column-item-bot-p1 {
        font-size: 0.16rem;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        margin-bottom: 0.08rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .special-column-item-bot-p2 {
        font-size: 0.14rem;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 0.21rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .special-column-item-bot-img {
        width: 0.76rem;
        height: 0.76rem;
        border-radius: 0.08rem;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .divider {
      width: 100%;
      height: 0.005rem;
      background: #CCCCCC;
    }
  }
}
</style>
