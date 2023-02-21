import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

//扩充vue-router，自定义meta相关属性的类型
declare module 'vue-router' {
  interface RouteMeta {
    title: string //导航标题
    father?: string //父路由path
    keepAlive?: string // 页面是否需要缓存，一般在父级进入详情页时，父级需要缓存则给父级添加，父级页面还需要导出name，导出的name和路由的name保持一致
  }
}

// @ts-ignore
// @ts-ignore
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/layout.vue'),
    redirect: '/home',
    children: [
      //首页
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/layout/home.vue'),
        meta: { title: '首页' },
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
  {
    path: '/noaccess',
    component: () => import('@/views/noaccess/index.vue'),
    name: 'noaccess',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
