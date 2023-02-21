/**
 * 接入渠道
 */
export const accessChannel: IObj = {
  1: '微信',
  // 2: '支付宝',
  3: '国家医保APP',
  4: '地方APP',
}

/**
 * 付款方式
 */
export const payType: IObj = {
  1: '微信',
  2: '线下',
}

/**
 * 应用类型
 */
export const appType: IObj = {
  1: '微信小程序',
  2: '微信公众号',
  // 3: '支付宝小程序',
  // 4: '支付宝生活号',
  5: 'h5网页',
  6: '移动APP',
}

/**
 * 申办进件状态
 */
export const comingStatusList: IObj = {
  1: {
    text: '请上传附件',
    class: 'status_upload-file',
    button: [
      { text: '上传申请函', type: 'pdf_apply' },
      { text: '上传定点机构协议', type: 'pdf_protocol' },
    ],
  },
  2: {
    text: '待提交',
    class: 'status_submit',
    button: [
      { text: '编辑 ', url: '/apply/order/addorder' },
      { text: '提交', type: 'submit' },
    ],
  },
  3: {
    text: '审核中',
    class: 'status_examine',
    button: [{ text: '查看 ', url: '/apply/order/vieworder' }],
  },
  4: {
    text: '进件异常',
    class: 'status_reject',
    button: [
      { text: '编辑 ', url: '/apply/order/rejectorder' },
      { text: '提交', type: 'submit' },
    ],
  },
  5: {
    text: '审核通过',
    class: 'status_pass',
    button: [{ text: '查看 ', url: '/apply/order/vieworder' }],
  },
}

/**
 * 申请状态
 */
export const statusList: IObj = {
  1: { text: '待签约', class: 'order-wait', button: [{ text: '查看', url: '/apply/sign' }] },
  2: {
    text: '已失效',
    class: 'order-invalid',
    button: [{ text: '重新签约', url: '/apply/sign', noId: 1 }],
  },
  3: {
    text: '待付款',
    class: 'order-wait',
    button: [{ text: '去支付', url: 'apply/payment' }],
  },
  4: {
    text: '待进件',
    class: 'order-wait',
    button: [{ text: '去进件', url: '/apply/order/index' }],
  },
  5: {
    text: '审核中',
    class: 'order-examine',
    button: [{ text: '查看', url: '/apply/order/index' }],
  },
  // 6: { text: '驳回', class: 'order-reject', button: [{ text: '查看', url: '/apply/order/index' }] },
  7: {
    text: '审核通过',
    class: 'order-pass',
    button: [{ text: '查看', url: '/apply/order/index' }],
  },
  8: {
    text: '进件异常',
    class: 'order-reject',
    button: [{ text: '查看', url: '/apply/order/index' }],
  },
  10: {
    text: '已归档',
    class: 'order-invalid',
    button: [{ text: '查看', url: '/apply/order/index' }],
  },
  11: {
    text: '审核凭证',
    class: 'order-examine',
    button: [{ text: '查看', url: '/apply/payment' }],
  },
  12: {
    text: '凭证驳回',
    class: 'order-reject',
    button: [{ text: '查看', url: '/apply/payment' }],
  },
}
