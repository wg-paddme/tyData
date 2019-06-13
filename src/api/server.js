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

export const getWeatherData = (data) => {

  return axios.request({
    url: "/getWeather",
    data,
    method: "post"
  })
}

export const getWeatherNowData = (data) => {

  return axios.request({
    url: "/getWeatherNow",
    data,
    method: "post"
  })
}







export const getShiReportData = () => {
  return axios.request({
    url: '/getReportChart',
    method: 'get'
  })
}
/* 办理进度排行 */
export const getProgressRank = () => {
  return axios.request({
    url: '/getProgressRank',
    method: 'get'
  })
}

/* 办理终端占比 */
export const getTerminalRatio = () => {
  return axios.request({
    url: '/getTerminalRatio',
    method: 'get'
  })
}

/* 迎新教师数据 */
export const getWelcomeTeacherRank = () => {
  return axios.request({
    url: '/getWelcomeTeacherRank',
    method: 'get'
  })
}

/* 省份招生数据 */getProvinceStudentCount
export const getProvinceStudentCount = () => {
  return axios.request({
    url: '/getProvinceStudentCount',
    method: 'get'
  })
}