import axios from '@/utils/api.request'

export const getBasicCounts = (data) => {
  return axios.request({
    url: '/fm/statistics/realTime/leftdata',
    data,
    method: 'post'
  })
}
export const getCSexChartData = (data) => {
  return axios.request({
    url: '/fm/statistics/realTime/sexProportion',
    data,
    method: 'post'
  })
}
export const getTopChartData = (data) => {
  return axios.request({
    url: '/fm/statistics/realTime/majorProportion',
    data,
    method: 'post'
  })
}

export const getWeatherData = (data) => {
  return axios.request({
    url: "/sm/common/weather",
    data,
    method: "post"
  })
}

export const getSdudentListData = (data) => {
  return axios.request({
    url: '/fm/statistics/realTime/completeStudent',
    data,
    method: 'post'
  })
}

export const getShiReportData = (data) => {
  return axios.request({
    url: '/fm/statistics/realTime/majorNum',
    data,
    method: 'post'
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
export const getTerminalRatio = (data) => {
  return axios.request({
    url: '/fm/statistics/realTime/handleTerminal',
    data,
    method: 'post'
  })
}

/* 迎新教师数据 */
export const getWelcomeTeacherRank = (data) => {
  return axios.request({
    url: '/fm/statistics/realTime/teacherStar',
    data,
    method: 'post'
  })
}

/* 省份招生数据 */getProvinceStudentCount
export const getProvinceStudentCount = (data) => {
  return axios.request({
    url: '/fm/statistics/realTime/provinceArea',
    data,
    method: 'post'
  })
}
/* 云南省招生数据 */getProvinceStudentCount
export const getYunnanStudentCount = (data) => {
  return axios.request({
    url: '/fm/statistics/realTime/cityArea',
    data,
    method: 'post'
  })
}


/* 环节办理进度数据 */
export const getLinkProgressRank = (data) => {
  return axios.request({
    url: '/fm/statistics/realTime/handleSpeed',
    data,
    method: 'post'
  })
}