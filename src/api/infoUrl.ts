import { get, post, put, deletes, getWithResponseType } from '@/utils/request'

/**
 * @name 内容分类 栏目（分类）树
 */
export const categoryTree_api = (data: any) => {
    return get('hipp/hipp/hospital/category/tree', data)
}

/**
 * @name 富文本信息 查询富文本信息;列表
 */
export const editList_api = (data: any) => {
    return get('/hipp/hipp/hospital/post/list', data)
}

/**
 * @name 富文本信息 获取富文本信息;详细信息
 */
export const editDetail_api = (data: any) => {
    return get('/hipp/hipp/hospital/post/detail', data)
}
