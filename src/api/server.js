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
export const getTopChartData = () => {
    return axios.request({
        url: '/getTop',
        method: 'get'
    })
}





export const getShiReportData = () => {
    return axios.request({
        url: '/getReportChart',
        method: 'get'
    })
}