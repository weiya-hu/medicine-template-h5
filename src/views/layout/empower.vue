<template>
  <div></div>
</template>

<script setup lang="ts">
let redirectUrl = encodeURIComponent('http://test.hospital.com/home')
window.open(
  'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0d195388f4235eca&redirect_uri=http%3A%2F%2Fdb.yb.shanhaiping.com%2FconfirmInfo%3FcorpId%3D&response_type=code&scope=snsapi_userinfo&state=aaaaaaa&component_appid=wx5f79f0b71e2425c3#wechat_redirect'
  // `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0d195388f4235eca&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=aaaaaaa&component_appid=wx5f79f0b71e2425c3#wechat_redirect`
)
</script>

<style scoped></style>
