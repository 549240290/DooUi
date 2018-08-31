import { loginAction } from '@/api/login'

const user = {
    state: {
        state: {
            token: '',
        }
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        }
    },

    actions: {
        // 用户登录
        LoginToSystem({ commit }, param) {
            const user = param.user.tirm()
            return new Promise((resolve, reject) => {
                loginAction(user, param.pass,param.remenber).then(response => {
                    const data = response.data
                    commit('SET_TOKEN',data.token)
                    resolve()
                }).catch(error =>{
                    reject(error)
                })
            })
        }
    }
}

export default user