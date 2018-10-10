import { loginAction, currentUserAction } from '@/api/user'

const app = {
    state: {
        token: localStorage.token,
        user: null,
    },

    mutations: {
        set_token: (state, token) => {
            state.token = token
        },

        set_user: (state, user) => {
            state.user = user
        }
    },

    actions: {
        //退出
        logout({ commit }) {
            localStorage.removeItem('token')
            commit('set_token', null)
        },
        // 用户登录        
        login({ commit }, param) {
            return new Promise((resolve, reject) => {
                loginAction(param.username, param.password, param.remenber).then(response => {
                    let token = 'Bearer ' + response.data.access_token
                    localStorage.token = token
                    commit('set_token', token)
                    resolve(response.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        //获取当前用户信息
        currentUser({ commit }) {
            return new Promise((resolve, reject) => {
                currentUserAction().then(response => {
                    commit('set_user', response.data)
                    resolve(response.data)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default app