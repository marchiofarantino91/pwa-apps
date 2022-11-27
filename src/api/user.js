import request from '../utils/request'

export const login = (data) => {
    return request({
        url:'/auth/login',
        method:"POST",
        data:data
    })
}