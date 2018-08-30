import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/index'

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard'
      }
    ]
  },
//   {
//     path: '/guide',
//     component: Layout,
//     redirect: '/guide/index',
//     children: [
//       {
//         path: 'index',
//         component: () => import('@/views/guide/index'),
//         name: 'Guide',
//         meta: { title: 'guide', icon: 'guide', noCache: true }
//       }
//     ]
//   }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  
]