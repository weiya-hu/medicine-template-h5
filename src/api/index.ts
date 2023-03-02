import { get, post, put, deletes, getWithResponseType } from '@/utils/request'

/**
 * @name 获取用户详细信息
 */
export const getInfo_api = () => {
  return get('/auth/getInfo')
}


/**
 * @name 下载进件清单模板
 */
export const downLoadApplyExcelTemplate_api = (data: any): Promise<any> => {
  return getWithResponseType('/hipp/hipp/detail/downLoadConming', 'blob', data, true)
}


/**
 * @name 获取电子签注册二维码
 */
export const changeToken_api = (data: { platformProductId: string }): Promise<IRes> => {
  return get(`/auth/changeToken`, data)
}

/**
 * @name 获取用户详细信息
 */
export const createJsapiSignature_api = (data:IObj) => {
  return get('/wecom/test/wechat/createJsapiSignature',data)
}

/**
 * @name 公众号授权链接回调
 */
export const wechatAuthJump_api = (data:IObj) => {
  return get('/wecom/test/wechat/auth/jump',data)
}

