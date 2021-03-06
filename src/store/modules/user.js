import { loginAction, currentUserAction } from '@/api/user'
const user = {
    state: {
        name: '',
        email: '',
        roles: [],
        status: '',
        token: localStorage.token,
        avatar: ''
    },

    mutations: {
        set_name: (state, name) => {
            state.name = name
        },
        set_email: (state, email) => {
            state.email = email
        },
        set_roles: (state, roles) => {
            state.roles = roles
        },
        set_status: (state, status) => {
            state.status = status
        },
        set_token: (state, token) => {
            state.token = token
        },
        set_avatar: (state, avatar) => {
            state.avatar = avatar
        }
    },

    actions: {
        quit( { commit } ) {
            commit('set_token','')
            localStorage.removeItem('token')
        },
        // 用户登录        
        login({ commit }, param) {
            return new Promise((resolve, reject) => {
                loginAction(param.username, param.password, param.remenber).then(response => {
                    localStorage.token = 'Bearer ' + response.data.access_token
                    commit('set_token', localStorage.token)
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
                    commit('set_name', response.data.name)
                    commit('set_email', response.data.email)
                    resolve(response.data)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user