/**
 * 参数处理
 * @param {*} params  参数
 */
import { downLoadApplyExcelTemplate_api } from '@/api/index'
// import { downloadFileByUrl_api } from '@/api/order'
import { GetQueryString } from '@/utils/validate'

export function tansParams(params: IObj) {
  let result = ''
  for (const propName of Object.keys(params)) {
    const value = params[propName]
    const part = encodeURIComponent(propName) + '='
    if (value !== null && value !== '' && typeof value !== 'undefined') {
      if (typeof value === 'object') {
        for (const key of Object.keys(value)) {
          if (value[key] !== null && value[key] !== '' && typeof value[key] !== 'undefined') {
            const params = propName + '[' + key + ']'
            const subPart = encodeURIComponent(params) + '='
            result += subPart + encodeURIComponent(value[key]) + '&'
          }
        }
      } else {
        result += part + encodeURIComponent(value) + '&'
      }
    }
  }
  return result
}

/**
 * 判断是否为blob
 *
 * */
export async function blobValidate(data: any): Promise<Boolean> {
  try {
    const text = await data.text()
    JSON.parse(text)
    return false
  } catch (error) {
    return true
  }
}

/*
 * 下载流文件转File
 * */
export async function downloadBlobToFile(type?: string, fileName?: string) {
  if (type) {
    const url =
      type === 'apply'
        ? btoa(
            'https://oss.cloud.shanhaiping.com/test/123333/22222/2023/01/13/11/63c0d1b0e4b00b9df884f92d.docx'
          )
        : btoa(type)
    const res = await downloadFileByUrl_api({ url })
    const binaryData = []
    binaryData.push(res)
    // @ts-ignore
    const File = new window.File([new Blob(binaryData)], fileName, { type: 'blob' })
    return Promise.resolve(File)
  }
}

/**
 * 下载文件
 * @params type=='apply'是地址是固定的，type也可能直接是文件地址链接
 */
export async function downloadFile(type?: string, receipt?: string) {
  if (type) {
    const url =
      type === 'apply'
        ? btoa(
            'https://oss.cloud.shanhaiping.com/test/123333/22222/2023/01/13/11/63c0d1b0e4b00b9df884f92d.docx'
          )
        : btoa(type)
    const res = await downloadFileByUrl_api({ url })
    const binaryData = []
    binaryData.push(res)
    const blobUrl = window.URL.createObjectURL(new Blob(binaryData))
    console.log(new Blob(binaryData))
    const a = document.createElement('a')
    const filename = type === 'apply' ? '申请函模板.docx' : receipt ? receipt : '电子合同.pdf'
    a.href = blobUrl
    a.download = filename
    a.target = filename
    a.click()
    window.URL.revokeObjectURL(blobUrl)
  } else {
    const res = await downLoadApplyExcelTemplate_api({ hippId: GetQueryString('hippId') })
    console.log(res)
    if (res.code) {
      return
    }
    const binaryData = []
    binaryData.push(res)
    const blobUrl = window.URL.createObjectURL(new Blob(binaryData))
    const a = document.createElement('a')
    const filename = '清单模板.xlsx'
    a.href = blobUrl
    a.download = filename
    a.target = filename
    a.click()
    window.URL.revokeObjectURL(blobUrl)
  }
}

/**
 * 获取页面参数
 */
export function getUrlParam(name: string) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const r = window.location.search.substring(1).match(reg)
  if (r != null) {
    return decodeURI(r[2])
  }
  return null
}
