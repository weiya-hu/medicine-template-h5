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
      //授权页面
      {
        path: '/empower',
        name: 'Empower',
        component: () => import('@/views/layout/empower.vue'),
        meta: { title: '授权登录' },
      },
      //首页
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/layout/home.vue'),
        meta: { title: '首页' },
      },
      {
        path: '/tohospital',
        name: 'ToHospital',
        component: () => import('@/views/layout/toHospital.vue'),
        meta: { title: '到院导航' },
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
      // {
      //   path: '/medicalguide',
      //   name: 'MedicalGuide',
      //   component: () => import('@/views/infoUrl/medicineGuide.vue'),
      //   meta: { title: '就医指南' },
      // },
      {
        path: '/medicalInsurance',
        name: 'MedicalInsurance',
        component: () => import('@/views/infoUrl/medicalInsurance.vue'),
        meta: { title: '医保专栏' },
      },
      {
        path: '/medicalGuide',
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
      // 挂号
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/functional/register.vue'),
        meta: { title: '挂号' },
      },
      {
        path: '/registrdept',
        name: 'RegistrDept',
        component: () => import('@/views/functional/registrDept.vue'),
        meta: { title: '挂号' },
      },
      {
        path: '/registerspecialist',
        name: 'RegisterSpecialist',
        component: () => import('@/views/functional/registerSpecialist.vue'),
        meta: { title: '挂号' },
      },
      {
        path: '/registerinfo',
        name: 'RegisterInfo',
        component: () => import('@/views/functional/registerInfo.vue'),
        meta: { title: '挂号' },
      },
      // 预约记录
      {
        path: '/record',
        name: 'Record',
        component: () => import('@/views/visit/record.vue'),
        meta: { title: '挂号记录' },
      },
      {
        path: '/recorddetails',
        name: 'RecordDetails',
        component: () => import('@/views/visit/recordDetails.vue'),
        meta: { title: '挂号记录详情' },
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
