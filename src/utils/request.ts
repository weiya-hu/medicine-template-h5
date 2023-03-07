/*
  统一封装get post请求 拦截器 默认地址
*/
// 引入axios
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

import cache, { getToken, removeToken } from '@/utils/cache'
import { tansParams } from '@/utils/tool'
import errorCode from '@/utils/errorCode'
import { showToast } from 'vant'

//引入ui框架的弹窗组件
// import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import router from '@/router'

//给axios的返回类型做补充
declare module 'axios' {
  interface AxiosResponse<T = any> {
    success: boolean
    msg: string
  }
  // export function create(config?: AxiosRequestConfig): AxiosInstance;
}
// 是否显示重新登录
export const isRelogin = { show: false }
// 设置默认地址
axios.defaults.baseURL = '/prod-api'
// 设置超时时间
axios.defaults.timeout = 15000

// 请求拦截器
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  // 是否需要设置 token
  const isToken = (config.headers || {}).isToken === false
  // 是否需要防止数据重复提交
  const isRepeatSubmit = (config.headers || {}).repeatSubmit === false
  if ((getToken() || sessionStorage.getItem('register_token')) && !isToken) {
    config.headers = {
      ...config.headers,
      corpId : '1571886132629123072',
      'Content-Type': 'application/json', //'application/x-www-form-urlencoded';
      Authorization: 'Bearer ' + (getToken() || sessionStorage.getItem('register_token')),
    }
  }else{
    config.headers = {
      ...config.headers,
      corpId : localStorage.getItem('corpId') || '1571886132629123072',
      'Content-Type': 'application/json', //'application/x-www-form-urlencoded';
    }
  }
  // get请求映射params参数
  if (config.method === 'get' && config.params) {
    let url = config.url + '?' + tansParams(config.params)
    url = url.slice(0, -1)
    config.params = {}
    config.url = url
  }
  if (!isRepeatSubmit && (config.method === 'post' || config.method === 'put')) {
    const requestObj = {
      url: config.url,
      data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
      time: new Date().getTime(),
    }
    const sessionObj = cache.session.getJSON('sessionObj')
    if (sessionObj === undefined || sessionObj === null || sessionObj === '') {
      cache.session.setJSON('sessionObj', JSON.stringify(requestObj))
    } else {
      const s_url = sessionObj.url // 请求地址
      const s_data = sessionObj.data // 请求数据
      const s_time = sessionObj.time // 请求时间
      const interval = 1000 // 间隔时间(ms)，小于此时间视为重复提交
      if (
        s_data === requestObj.data &&
        requestObj.time - s_time < interval &&
        s_url === requestObj.url
      ) {
        const message = '数据正在处理，请勿重复提交'
        console.warn(`[${s_url}]: ` + message)
        return Promise.reject(new Error(message))
      }
      cache.session.setJSON('sessionObj', JSON.stringify(requestObj))
    }
  }
  return config
})

// 响应拦截器
axios.interceptors.response.use(
  (res) => {
    // console.log(res)
    if (!res.request) {
      return { code: 400 }
    }
    // 二进制数据则直接返回
    res.request &&
      (() => {
        if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
          return res
        }
      })()
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200
    // 获取错误信息
    const msg = errorCode[code as TCode] || res.data.msg || errorCode.default

    if (code === 401 || code === 403) {
      removeToken()
      // router.replace('/empower')
      // if (code === 403) {
      // if (!isRelogin.show) {
      //   isRelogin.show = true
      //   ElMessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
      //     confirmButtonText: '重新登录',
      //     cancelButtonText: '取消',
      //     type: 'warning',
      //   })
      //     .then(() => {
      //       isRelogin.show = false
      //       router.replace('/login')
      //     })
      //     .catch(() => {
      //       isRelogin.show = false
      //     })
      // }
      // ElNotification.error({
      //   title: msg,
      // })
      showToast(msg)
      return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    } else if (code === 400 && msg === '未取到登录信息') {
      removeToken()
      location.href = '/'
    } else if (code === 500) {
      showToast(msg)
      // ElMessage({
      //   message: msg,
      //   type: 'error',
      // })
      return Promise.reject(new Error(msg))
    } else if (code === 999) {
      showToast(msg)
      //维护状态，跳转无权限页面
      // ElMessage({
      //   message: msg,
      //   type: 'error',
      // })
      location.href = '/noaccess'
    } else if (code !== 200) {
      showToast(msg)
      // ElNotification.error({
      //   title: msg,
      // })
      // return Promise.reject('error')
      return Promise.resolve(res.data)
    } else {
      return Promise.resolve(res.data)
    }
  },
  (error) => {
    console.log('err' + error)
    let { message } = error
    if (message == 'Network Error') {
      message = '后端接口连接异常'
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时'
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substring(message.length - 3) + '异常'
    }
    showToast(message)
    // ElMessage({
    //   message: message,
    //   type: 'error',
    //   duration: 5 * 1000,
    // })
    return Promise.reject(error)
  }
)

// 封装get请求
export function get(url: string, params?: any, showmsg?: boolean) {
  return new Promise<IRes>((resolve, reject) => {
    axios
      .get(url, { params })
      .then((res) => {
        if (showmsg && res.success) {
          // ElMessage({
          //   showClose: true,
          //   message: res.msg,
          //   type: 'success',
          //   grouping: true,
          // })
        }
        resolve(res)
      })
      .catch((error) => {
        console.log(error, 'geterror')
        reject(error)
      })
  })
}

// 封装post请求
export function post(url: string, params?: any, showmsg?: boolean) {
  return new Promise<IRes>((resolve, reject) => {
    axios
      .post(url, params)
      .then((res: IRes) => {
        if (showmsg && res.code == 200) {
          // ElMessage({
          //   showClose: true,
          //   message: res.msg,
          //   type: 'success',
          //   grouping: true,
          //   customClass: 'el_message',
          // })
        }
        resolve(res)
      })
      .catch((error) => {
        console.log(error, 'posterror')
        reject(error)
      })
  })
}

// 封装put请求
export function put(url: string, params?: any, showmsg?: boolean) {
  return new Promise<IRes>((resolve, reject) => {
    axios
      .put(url, params)
      .then((res: IRes) => {
        if (showmsg && res.code == 200) {
          // ElMessage({
          //   showClose: true,
          //   message: res.msg,
          //   type: 'success',
          //   grouping: true,
          //   customClass: 'el_message',
          // })
        }
        resolve(res)
      })
      .catch((error) => {
        console.log(error, 'posterror')
        reject(error)
      })
  })
}

// 封装delete请求
export function deletes(url: string, params?: any, showmsg?: boolean) {
  return new Promise<IRes>((resolve, reject) => {
    axios
      .delete(url, { params })
      .then((res) => {
        if (showmsg && res.success) {
          // ElMessage({
          //   showClose: true,
          //   message: res.msg,
          //   type: 'success',
          //   grouping: true,
          // })
        }
        resolve(res)
      })
      .catch((error) => {
        console.log(error, 'geterror')
        reject(error)
      })
  })
}

//传入返回类型的get请求
type IResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'
export function getWithResponseType(
  url: string,
  type: IResponseType,
  params?: IObj,
  showmsg?: boolean
) {
  return new Promise<IRes>((resolve, reject) => {
    axios
      .get(url, { responseType: type, params })
      .then((res: IRes) => {
        if (showmsg && res.code == 200) {
          // ElMessage({
          //   showClose: true,
          //   message: res.msg,
          //   type: 'success',
          //   grouping: true,
          //   customClass: 'el_message',
          // })
        }
        resolve(res)
      })
      .catch((error) => {
        console.log(error, 'geterror')
        reject(error)
      })
  })
}
