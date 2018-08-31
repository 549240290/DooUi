import request from '@/utils/request'

export function LoginAction(username, password, remenber) {
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