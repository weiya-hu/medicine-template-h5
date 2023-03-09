<template>
<div class="wrapper">
  <van-button color="#0564F7" @click="go" block>确定</van-button>

</div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router=useRouter()
const props=defineProps({
  url:String,
  type:{
    type:String,
    default:'nav'
  }
})
const go=()=>{
  if(props.type=='nav' && props.url){
    router.push(props.url)
  }
}

</script>

<style scoped>
.wrapper{
  padding: 0.1rem 0.15rem 0.25rem 0.15rem;
  position: fixed;
  bottom: 0;
  background: #fff;
  width: 100vw;
}

</style>