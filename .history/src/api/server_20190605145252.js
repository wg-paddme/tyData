import axios from '@/utils/api.request'

export const getConuts = () => {
    return axios.request({
        url: '/counts',
        method: 'get'
    })
}