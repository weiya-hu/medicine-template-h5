import { reactive } from 'vue'
import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import { setToken } from '@/utils/cache'
import { changeToken_api } from '@/api/index'

export const mainStore = defineStore('mainStore', () => {
  const state = reactive({
    platformProductId: 'hipp', //平台id
    status: 0, //当前申请的状态值
  })

  //换取token
  function setDefaultToken() {
    return new Promise<IRes>((resolve, reject) => {
      const TokenKey = 'access_token'
      const PlatId = 'platformProductId'
      const token = Cookies.get(TokenKey)
      if (token && Cookies.get(PlatId) !== state.platformProductId) {
        changeToken_api({ platformProductId: state.platformProductId }).then(({ code, data }) => {
          resolve(true)
          code === 200 && setToken(data.access_token)
          code !== 200 && reject(false)
        })
      } else {
        reject(false)
      }
    })
  }

  function setStatus(val: number) {
    state.status = val
  }

  return { state, setDefaultToken, setStatus }
})
