// 倒计时
import { reactive } from 'vue'

export const countDown = () => {
  const state = reactive({
    time: 0,
    btnTxt: '获取验证码',
  })
  const getCountDown = () => {
    const clock = window.setInterval(() => {
      state.btnTxt = state.time + 's后重新发送'
      state.time--
      if (state.time < 0) {
        state.time = 60
        state.btnTxt = '获取验证码'
        window.clearInterval(clock)
      }
    }, 1000)
  }

  return { state, getCountDown }
}
