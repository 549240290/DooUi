import request from '@/utils/request'

export function loginAction(username, password) {
    const data = {
        username,
        password
    }
    return request({
        url: 'authentication',
        method: 'post',
        data
    })
}

export function currentUserAction(){
    return request({
        url: 'user',
        method: 'get'
    })
}

