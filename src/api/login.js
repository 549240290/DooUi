import request from '@/utils/request'

export function loginAction(username, password,remenber) {
    const data = {
        username,
        password,
        remenber
    }
    return request({
        url: '/login/login',
        method: 'post',
        data
    })
}