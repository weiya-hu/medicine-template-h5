<template>
  <div class="container table_style">
    <div v-html="state.post"></div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive} from "vue";
import {editDetail_api} from "@/api/infoUrl";
import {useRoute} from "vue-router";
import { _ } from 'lodash';

const route = useRoute()
const state = reactive({
  post: ''
})
const getListData = () => {
  editDetail_api({postId: route.query.postId}).then(res => {
    if (res.code === 200) {
      state.post = _.unescape(res.data.post)
    }
  })
}
onMounted(() => {
  getListData()
})
</script>

<style lang="scss" scoped>
.container {
  padding: 0.20rem 0.15rem;

  p {
    font-weight: 800;
    font-size: 0.21rem;
    color: #333333;
    margin-bottom: 0.10rem;
  }
  img {
    width: 100%;
    margin: 0.10rem 0;
  }
}
</style>
