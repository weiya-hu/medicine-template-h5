/**
 * @name 接口返回数据类型
 */
type IRes =
  | {
      code: number
      data?: any
      codeErrMsg?: null | string
      msg: string
      sub_code: string
      sub_msg: string
      success: boolean
      timestamp: string
    }
  | any

/**
 * @name 分页类型
 */
type IPageParams<T = IObj> = {
  [x in keyof T]: T[x]
} & {
  pageSize: number
  pageNum: number
}

/**
 * @name 对象类型
 */
type IObj = Record<string | number | symbol, any>

/**
 * @name 接口错误code类型
 */
type TCode = '401' | '403' | 'default'
declare module 'qrcodejs2'
declare module 'vue-wxlogin'
