import axios from '@/utils/api.request'

export const getConutInfos = () => {
    return axios.request({
        url: '/getConuts',
        method: 'get'
    })
}
export const getCSexChartData = () => {
    return axios.request({
        url: '/pieChart',
        method: 'get'
    })
}



export const getRank = () => {
    return axios.request({
        url: '/pie',
        method: 'get'
    })
}