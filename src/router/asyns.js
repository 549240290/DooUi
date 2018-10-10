import Layout from '@/views/layout'
export const asynsRouter = [
  
  
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/personal',
        name: 'personal',
        component: () => import('@/views/personal'),
        meta: {
          title: '个人中心'
        }
      },

      {
        path: '/ruanwen',
        name: 'ruanwen',
        component: Layout,
        redirect: '/ruanwen/itme',
      },

      {
        path: '/ruanwen/item',
        name: 'ruanwenItem',
        component : () => import('@/views/ruanwen'),
        meta: {
          title: '进度查询'
        }
      },

      {
        path: '/ruanwen/meiti',
        name: 'ruanwenMeiti',
        component : () => import('@/views/ruanwen/meiti'),
        meta: {
          title: '媒体查询'
        }
      },

      {
        path: 'ruanwen/create',
        name: 'ruanwenCreate',
        component: () => import('@/views/ruanwen/create'),
        meta: {
          title: '开发发布'
        }
      },
      
      {
        path: '/orders',
        name: 'orders',
        component: () => import('@/views/orders'),
        meta: {
          title: '订单中心'
        }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]