import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '279d1d16-793f-4a54-9b2a-01b7955edb1d'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const axiosGetUsers = (CurrentPage, PageSize) => {
    return (
        instance({
            method: 'get',
            url: `users?page=${CurrentPage}&count=${PageSize}`, withCredentials: true,
            responseType: 'stream',
        }).then(response => {
            return response.data
        })
    )
}

export const axiosSubUsers = (id) => {
    return (
        instance({
            method: 'post',
            url: `follow/${id}`,
            responseType: 'stream',
        }))
}

export const axiosDeleteUsers = (id) => {
    return (
        instance({
            method: 'delete',
            url: `follow/${id}`,
            responseType: 'stream',
        }))
}