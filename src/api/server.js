import axios from '@/utils/api.request'

export const getCityWeather = (data) => {
    return axios.request({
        url: 'http://api.map.baidu.com/telematics/v3/weather',
        data,
        method: 'post'
    })
}
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