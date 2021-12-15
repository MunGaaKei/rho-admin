import request from '@/utils/request';
const BASE_URL = '/api';

/**
 * 登陆
 * @param {*} data 
 * @returns 
 */
export function UserLogin ( data ) {
    return request({
        url: `${BASE_URL}/login`,
        method: 'post',
        data
    })
}

/**
 * 注销
 * @returns 
 */
 export function UserLogout () {
    return request({
        url: `${BASE_URL}/logout`,
        method: 'post',
    })
}