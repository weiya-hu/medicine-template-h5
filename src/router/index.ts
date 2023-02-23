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
    path: '/hospitalprofile',
    name: 'HospitalProfile',
    component: () => import('@/views/infoUrl/hospitalProfile.vue'),
    meta: { title: '医院简介' },
  },
  {
    path: '/departments',
    name: 'Departments',
    component: () => import('@/views/infoUrl/departments.vue'),
    meta: { title: '科室推荐' },
  },
  {
    path: '/expertteam',
    name: 'ExpertTeam',
    component: () => import('@/views/infoUrl/expertTeam.vue'),
    meta: { title: '专家团队' },
  },
  {
    path: '/medicalguide',
    name: 'MedicalGuide',
    component: () => import('@/views/infoUrl/medicalGuide.vue'),
    meta: { title: '就医指南' },
  },
  {
    path: '/medicaltrends',
    name: 'MedicalTrends',
    component: () => import('@/views/infoUrl/medicalTrends.vue'),
    meta: { title: '医疗动态' },
  },
  {
    path: '/medicaltrendsdetails',
    name: 'MedicalTrendsDetails',
    component: () => import('@/views/infoUrl/medicalTrendsDetails.vue'),
    meta: { title: 'xx医院' },
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
