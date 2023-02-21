import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vant from 'vant';
import '@/utils/rem.js'
import 'vant/lib/index.css';
import './assets/styles/base.scss'
import App from './App.vue'
import router from './router'
import { getToken } from '@/utils/cache'
import { mainStore } from '@/stores/mainStore'

const app = createApp(App)

app
  .use(Vant)
  .use(createPinia())
  .use(router)

const store = mainStore()
// store.setDefaultToken().finally(() => {
app.mount('#app') //换取token之后再挂载页面
// router.beforeEach((to, from, next) => {
//   const token = getToken()
//   if (to.path === '/login') {
//     token && next(from.path)
//     !token && next()
//   } else if (to.path === '/intro' || to.path === '/help') {
//     next()
//   } else {
//     console.log(444)
//     token && next()
//     !token && router.replace('/login?redirectUrl=' + to.fullPath)
//   }
// })
// })
