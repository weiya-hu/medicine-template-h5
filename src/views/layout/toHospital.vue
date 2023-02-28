<template>
  <div class="to-hospital">
    <div class="to-hospital-main">
      <div class="to-title">到院导航</div>
      <div id="container"></div>
      <div class="flexl address-item">
        <div class="fleximg address-img">
          <img src="@/assets/images/address.png" alt="address" />
        </div>
        <div>地址：{{ senicTitle }}</div>
      </div>
      <div class="flexl">
        <div class="fleximg address-img"><img src="@/assets/images/phone.png" alt="phone" /></div>
        <div>电话：13131313131</div>
      </div>
      <div class="hr"></div>
      <div class="flexb" @click="show = true">
        <div class="flexl">
          <div class="fleximg address-img">
            <img src="@/assets/images/navigation.png" alt="navigation" />
          </div>
          <div>到这里去</div>
        </div>
        <div><img src="@/assets/images/arrow.png" alt="arrow" /></div>
      </div>
      <van-action-sheet
        v-model:show="show"
        :actions="actions"
        cancel-text="取消"
        close-on-click-action
        @select="onSelect"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ActionSheetAction } from 'vant'
import { nextTick, ref } from 'vue'
const latitude = ref(29.612065)
const longitude = ref(106.517437)
const ori_latitude = ref()
const ori_longitude = ref()
const senicTitle = ref('重庆市渝北区云杉南路12号涉外商务区')
const show = ref(false)
const actions = [{ name: '腾讯地图' }, { name: '高德地图' }, { name: '百度地图' }]

nextTick(() => {
  initMap()
})

const initMap = () => {
  const center = new TMap.LatLng(latitude.value, longitude.value)
  //初始化地图
  const map = new TMap.Map(document.getElementById('container'), {
    rotation: 20, //设置地图旋转角度
    pitch: 30, //设置俯仰角度（0~45）
    zoom: 15, //设置地图缩放级别
    center: center, //设置地图中心点坐标
  })

  //隐藏地图默认工具
  const control1 = map.getControl(TMap.constants.DEFAULT_CONTROL_ID.SCALE)
  const control2 = map.getControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM)
  const control3 = map.getControl(TMap.constants.DEFAULT_CONTROL_ID.ROTATION)

  control1.setClassName('disShow')
  control2.setClassName('disShow')
  control3.setClassName('disShow')
  //隐藏腾讯地图logo
  const a = document.querySelector('canvas+div:last-child')
  a.style.display = 'none'

  const markerGeo = {
    id: 'center',
    position: map.getCenter(),
    styleId: 'marker',
  }

  // 创建一个位于地图中心点的marker
  const markerLayer = new TMap.MultiMarker({
    map: map,
    geometries: [markerGeo],
    styles: {
      marker: new TMap.MarkerStyle({
        width: 20,
        height: 30,
      }),
    },
  })
  //获取当前位置的经纬度
  const geolocation = new qq.maps.Geolocation('3POBZ-5EXWU-MBRVZ-44YDS-67GI6-5EBOB', 'myapp')
  function showPosition(m: IObj) {
    ori_latitude.value = m.lat
    ori_longitude.value = m.lng
  }
  geolocation.getLocation(showPosition)
}

const onSelect = (action: ActionSheetAction, index: number) => {
  const gotoObj = {
    0: `http://apis.map.qq.com/uri/v1/marker?marker=coord:${latitude.value},${longitude.value};addr:${senicTitle.value}`,
    1: `https://uri.amap.com/navigation?from=${ori_longitude.value},${ori_latitude.value}&to=${longitude.value},${latitude.value},${senicTitle.value}&mode=car&callnative=1&coordinate=wgs84&src=mypage`,
    2: `http://api.map.baidu.com/direction?origin=latlng:${ori_latitude.value},${ori_longitude.value}|name:我的位置&destination=latlng:${latitude.value},${longitude.value}|name:${senicTitle.value}&mode=driving&region=${senicTitle.value}&output=html&src=webapp.baidu.openAPIdemo&coord_type=wgs84`,
  }
  window.open(gotoObj[index])
}
</script>

<style scoped lang="scss">
.to-hospital {
  padding: 20px 15px 0;
  .to-hospital-main {
    background: #ffffff;
    border-radius: 8px;
    padding: 0.15rem 0.15rem 0.2rem;
    .to-title {
      font-size: 0.17rem;
      font-weight: bold;
      color: #333333;
    }
    .address-img {
      width: 16px;
      margin-right: 0.12rem;
    }
    .address-item {
      margin-bottom: 0.14rem;
    }
    .hr {
      height: 1px;
      background: #cccccc;
      margin: 0.2rem 0;
    }
  }
  :deep(.disShow) {
    display: none;
  }
}
#container {
  width: 100%;
  height: 2rem;
  margin: 0.14rem 0 0.2rem;
}
</style>
