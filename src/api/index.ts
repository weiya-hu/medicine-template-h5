import { get, post, put, deletes, getWithResponseType } from '@/utils/request'

/**
 * @name 获取用户详细信息
 */
export const getInfo_api = () => {
  return get('/auth/getInfo')
}

/**
 * @name 获取申请基本信息
 */
export const getApplyBasicInfo_api = (data: { hippId: any }): Promise<IRes> => {
  return get('/hipp/hipp/applyinfo/getApplyBasicInfo', data)
}

/**
 * @name 下载进件清单模板
 */
export const downLoadApplyExcelTemplate_api = (data: any): Promise<any> => {
  return getWithResponseType('/hipp/hipp/detail/downLoadConming', 'blob', data, true)
}

/**
 * @name 退出登录
 */
export const logout_api = (): Promise<IRes> => {
  return deletes('/auth/logout')
}

/**
 * @name 判断企业是否注册电子签
 */
export const hasInitEssbasicOrg_api = (): Promise<IRes> => {
  return get('/hipp/hipp/applyinfo/hasInitEssbasicOrg')
}

/**
 * @name 获取电子签注册二维码
 */
export const initEssbasicOrg_api = (): Promise<IRes> => {
  return get(`/hipp/hipp/applyinfo/initEssbasicOrg`)
}

/**
 * @name 获取电子签注册二维码
 */
export const changeToken_api = (data: { platformProductId: string }): Promise<IRes> => {
  return get(`/auth/changeToken`, data)
}

/**
 * @name 获取当前人员基本信息
 */
export const userBaseInfo_api = (): Promise<IRes> => {
  return get(`/wecom/corpinfo/user/getCurrUserBaseInfo`)
}
