import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { asynsRouter } from '@/router/asyns'

router.beforeEach((to, from, next) => {
    if (store.getters.token) {
        if (to.path == '/login') {
            next('/')
        } else {
            //获取 当前登录用户信息
            if (store.getters.currentUser == null) {
                store.dispatch('currentUser')
                    .then(() => {
                        //let tmp = generateRouter(data.routers);//这里有问题！～～～～～
                        //添加异步路由
                        //console.log(data.routers)
                        router.addRoutes(asynsRouter)
                        next({ ...to, replace: true })
                    })
                    .catch(() => {
                        Message.error('系统异常，请重新登录1这里有问题！～～～～～')
                        next(false)
                    })
            } else {
                next()
            }
        }
    } else {
        //console.log('没有登录 先登录')
        //如果没有token
        if (to.path != '/login') {
            next('/login')
        } else {
            next()
        }
    }
})