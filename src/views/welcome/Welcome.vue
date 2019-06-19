<template>
  <div class="full-container" ref="mainContainer">
    <header class="container-header">
      <h3 class="header-title">迎新概览</h3>
    </header>
    <div class="container-body">
      <div class="flex-col">
        <div class="flex-row">
          <div class="flex-cell flex-cell-2">
            <div class="flex-col">
              <!-- 新生报到和预报到统计 -->
              <div class="flex-row-half-big">
                <div class="flex-cell-inner">
                  <div class="chart-wrapper">
                    <h3 class="chart-title chart-title-noicon">招生人数</h3>
                    <div class="count-box">
                      <span class="count-number" id="enrolled">
                        <count-to
                          :start-val="0"
                          :end-val="enrolledNum"
                          :duration="3600"
                          class="card-panel-num"
                        />
                      </span>
                      <span class="count-unit">人</span>
                    </div>
                  </div>
                </div>
                <div class="flex-cell-inner">
                  <div class="chart-wrapper">
                    <h3 class="chart-title chart-title-noicon">报到人数</h3>
                    <div class="count-box">
                      <span class="count-number" id="report">
                        <count-to
                          :start-val="0"
                          :end-val="reportNum"
                          :duration="3600"
                          class="card-panel-num"
                        />
                      </span>
                      <span class="count-unit">人</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 环节、教师、再办学生统计 -->
              <div class="flex-row flex-row-small">
                <div class="flex-cell-inner">
                  <div class="chart-wrapper">
                    <h3 class="chart-title chart-title-noicon chart-title-small">环节数</h3>
                    <div class="count-box">
                      <span class="count-number count-number-small">
                        <count-to
                          :start-val="0"
                          :end-val="linkNum"
                          :duration="2400"
                          class="card-panel-num"
                        />
                      </span>
                      <span class="count-unit">个</span>
                    </div>
                  </div>
                </div>
                <div class="flex-cell-inner">
                  <div class="chart-wrapper">
                    <h3 class="chart-title chart-title-noicon chart-title-small">办理教师数</h3>
                    <div class="count-box">
                      <span class="count-number count-number-small">
                        <count-to
                          :start-val="0"
                          :end-val="teacherNum"
                          :duration="1800"
                          class="card-panel-num"
                        />
                      </span>
                      <span class="count-unit">人</span>
                    </div>
                  </div>
                </div>
                <div class="flex-cell-inner">
                  <div class="chart-wrapper">
                    <h3 class="chart-title chart-title-noicon chart-title-small">在办学生数</h3>
                    <div class="count-box">
                      <span class="count-number count-number-small">
                        <count-to
                          :start-val="0"
                          :end-val="studentNum"
                          :duration="2800"
                          class="card-panel-num"
                        />
                      </span>
                      <span class="count-unit">人</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 民族报道 -->
              <div class="flex-row-half-big">
                <div class="flex-cell-inner">
                  <div class="chart-wrapper">
                    <h3 class="chart-title chart-title-noicon">少数民族人数</h3>
                    <div class="count-box">
                      <span class="count-number">
                        <count-to
                          :start-val="0"
                          :end-val="minoritiesNum"
                          :duration="3600"
                          class="card-panel-num"
                        />
                      </span>
                      <span class="count-unit">人</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 各民族学生统计 -->
              <div class="flex-row flex-row-small">
                <div
                  class="flex-cell-inner"
                  v-model="nations"
                  v-for="(nation,index) in nations"
                  :key="index"
                  v-if="index<3"
                >
                  <div class="chart-wrapper">
                    <h3
                      class="chart-title chart-title-noicon chart-title-small"
                    >{{nation.nationName}}</h3>
                    <div class="count-box">
                      <span class="count-number count-number-small">
                        <count-to
                          :start-val="0"
                          :end-val="nation.studentNum"
                          :duration="3600"
                          class="card-panel-num"
                        />
                      </span>
                      <span class="count-unit">人</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 绿色通道统计 -->
              <div class="flex-row flex-row-half">
                <div
                  class="flex-cell-inner flex-cell-unbottom"
                  v-model="channels"
                  v-for="(item,index) in channels"
                  :key="index"
                  v-if="index<2"
                >
                  <div class="chart-wrapper">
                    <h3 class="chart-title chart-title-noicon">{{item.name}}</h3>
                    <div class="count-box">
                      <span class="count-number">
                        <count-to
                          :start-val="0"
                          :end-val="item.studentNum"
                          :duration="3600"
                          class="card-panel-num"
                        />
                      </span>
                      <span class="count-unit">人</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-cell flex-cell-2" style="margin-left:0">
            <div class="flex-col">
              <div class="flex-row-big">
                <div class="flex-cell-inner">
                  <div class="chart-wrapper">
                    <h3 class="chart-title chart-title-center">报到新生-男女比例</h3>
                    <div class="chart-box" id="sexsChart">
                      <div class="chart-loader">
                        <div class="loader"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-row-big-half">
                <div class="flex-cell-inner flex-cell-unbottom">
                  <div class="chart-wrapper news-wrapper">
                    <div
                      class="news-list"
                      v-model="studentLists"
                      v-for="(item,index) in studentLists"
                      v-if="index<7"
                      :key="index"
                    >考生号{{item.ksh}}新生{{item.studentName}}完成办理</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-cell flex-cell-6" style="margin-left:0">
            <div class="chart-wrapper">
              <h3 class="chart-title chart-title-noicon">总人数-生源地省份</h3>
              <div class="chart-box" v-show="isShowMapChart">
                <div v-show="isShowProvice" style="height:100%">
                  <province-count
                    :currentYear="currentYaer"
                    @on-turn="setStatus"
                    @on-height="setChildHeight"
                  ></province-count>
                </div>
                <div v-show="!isShowProvice" style="height:100%">
                  <yunNanChart ref="hideSlide" :currentYear="currentYaer" @on-turn="setStatus"></yunNanChart>
                </div>
              </div>
              <div class="chart-box" v-show="!isShowMapChart">
                <div class="chart-loader">
                  <div class="loader"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex-cell flex-cell-2 noborder"
            style="margin-left:0;margin-top:0;padding:8px 0 0"
          >
            <div class="flex-col">
              <div class="flex-row flex-row-big-half">
                <div class="flex-cell flex-cell-inner">
                  <div class="chart-wrapper">
                    <h3 class="chart-title chart-title-center">天气预报</h3>
                    <div class="chart-box" id="weatherInfo" v-show="isShowWeather">
                      <div class="flex-row" style="height:100%">
                        <div class="flex-cell flex-cell-full noborder">
                          <div class="flex-row" style="justify-content: space-between;">
                            <span class="today-item" v-model="todayData">{{todayData}}</span>
                            <span class="location-item" v-model="locationData">{{locationData}}</span>
                          </div>
                          <div class="flex-row" style="margin-top:0.75em">
                            <div class="flex-cell flex-cell-3 flex-cell-full noborder">
                              <div class="icon-weather">
                                <img class="icon-img" :src="iconImg">
                              </div>
                              <div class="text-weather">
                                <span
                                  style="font-size: 2.05em;color:#60f8f3;"
                                >{{todayTemperature}}&#176;</span>
                                <span style="font-size: 0.9em;">{{todayWeather}}</span>
                              </div>
                              <div class="text-weather">
                                <span
                                  style="font-size:0.85em"
                                >{{todayTempMin}}~{{todayTempMax}}&#8451;</span>
                              </div>
                            </div>
                            <div class="flex-cell flex-cell-6 flex-cell-full noborder">
                              <div class="flex-row">
                                <div
                                  class="flex-cell flex-cell-2 flex-cell-full-border"
                                  v-model="nextThreeWeather"
                                  v-for="(item,index) in nextThreeWeather"
                                  :key="index"
                                >
                                  <div class="text-weather">
                                    <span style="font-size:0.75em;color:#60f8f3;">{{item.nextDate}}</span>
                                  </div>
                                  <div class="icon-weather">
                                    <img class="icon-img-small" :src="item.iconImage">
                                  </div>
                                  <div class="text-weather">
                                    <span style="font-size:0.85em;color:#60f8f3;">{{item.weather}}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="chart-box" v-show="!isShowWeather">
                      <div class="chart-loader">
                        <div class="loader"></div>
                      </div>
                    </div>
                    <div id="xsx" style="display:none"></div>
                  </div>
                </div>
              </div>
              <div class="flex-row">
                <div class="flex-cell flex-cell-unbottom">
                  <div class="chart-wrapper">
                    <h3 class="chart-title chart-title-center">报道进度TOP5</h3>
                    <div class="chart-box" id="top_chart">
                      <div class="chart-loader">
                        <div class="loader"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-row flex-row-half">
          <div class="flex-cell flex-cell-3">
            <div class="chart-wrapper">
              <h3 class="chart-title chart-title-center">学院迎新教师之星</h3>
              <welcome-teacher :currentYear="currentYaer"></welcome-teacher>
            </div>
          </div>
          <div class="flex-cell flex-cell-3" style="margin-left:0">
            <div class="chart-wrapper">
              <h3 class="chart-title chart-title-center">环节办理进度</h3>
              <link-progress :currentYear="currentYaer"></link-progress>
            </div>
          </div>
          <div class="flex-cell flex-cell-3" style="margin-left:0">
            <div class="chart-wrapper">
              <h3 class="chart-title chart-title-center">办理终端占比</h3>
              <terminal-ratio :currentYear="currentYaer"></terminal-ratio>
            </div>
          </div>
          <div class="flex-cell flex-cell-5" style="margin-left:0">
            <div class="chart-wrapper">
              <h3 class="chart-title chart-title-center">实时报道人数</h3>
              <div class="chart-box" id="chart_report">
                <div class="chart-loader">
                  <div class="loader"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./style.less";
import countTo from "vue-count-to";
import echarts from "echarts";
import BMap from "BMap";

import TerminalRatio from "@chart/TerminalRatio";
import WelcomeTeacher from "@chart/WelcomeTeacher";
import ProvinceCount from "@chart/ProvinceCount";
import LinkProgress from "@chart/LinkProgress";
import yunNanChart from "@chart/yunnan";
import {
  getBasicCounts,
  getCSexChartData,
  getTopChartData,
  getShiReportData,
  getWeatherData,
  getSdudentListData
} from "@/api/server";
import { setInterval, clearInterval } from "timers";

export default {
  name: "WelcomeHome",
  components: {
    countTo,
    TerminalRatio,
    WelcomeTeacher,
    ProvinceCount,
    LinkProgress,
    yunNanChart
  },
  data() {
    return {
      currentYaer: "",
      weatherKey: "5e24beb24f37462b8ac7b1d0135600bb",
      isShowProvice: true,
      isShowMapChart: true,
      isShowWeather: false,
      lat: "",
      lng: "",
      todayData: "",
      locationData: "",
      iconImg: "https://cdn.heweather.com/cond_icon/100.png",
      todayTemperature: "0",
      todayTempMin: "0",
      todayTempMax: "0",
      todayWeather: "晴",
      nextThreeWeather: [],
      startVal: 0,
      enrolledNum: 0,
      reportNum: 0,
      linkNum: 0,
      teacherNum: 0,
      studentNum: 0,
      minoritiesNum: 0,
      nations: [],
      channels: [],
      studentLists: [],
      defaultsOption: null,
      countTimer: null,
      sextTimer: null,
      studentTimer: null,
      topTimer: null,
      reportTimer: null,
      slideTimer: null
    };
  },
  created() {
    this.currentYaer = this.getUrlParam("year") || "2018";
  },
  mounted() {
    this.renderMain();
    this.countTimer = setInterval(this.initCount, 200000);
    this.sextTimer = setInterval(this.getSexChart, 200000);
    this.studentTimer = setInterval(this.initStudentTable, 200000);
    this.topTimer = setInterval(this.initTopChart, 200000);
    this.reportTimer = setInterval(this.initReportShiChart, 200000);
  },
  watch: {
    isShowProvice(newData, oldData) {
      if (newData === false) {
        this.$refs.hideSlide.resizeChart(this.defaultsOption);
      }
    }
  },
  methods: {
    renderMain() {
      this.initCity();
      this.initCount();
      this.getSexChart();
      this.initStudentTable();
      this.initTopChart();
      this.initReportShiChart();
      this.slideTimer = setInterval(this.turnMap, 100000);
    },
    getUrlParam(name) {
      var sReg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var sResult = window.location.search.substr(1).match(sReg);
      if (sResult != null) return unescape(sResult[2]);
      return null;
    },
    setStatus(isShow) {
      this.isShowMapChart = isShow;
    },
    turnMap() {
      this.isShowProvice = !this.isShowProvice;
    },
    setChildHeight(parma) {
      this.defaultsOption = parma;
    },
    initCount() {
      getBasicCounts({
        year: this.currentYaer
      })
        .then(res => {
          if (res.success) {
            const _data = res.content;
            this.enrolledNum = _data.zsrs;
            this.reportNum = _data.bdrs;
            if (_data.handle) {
              this.linkNum = _data.handle.stepNum;
              this.teacherNum = _data.handle.teacherNum;
              this.studentNum = _data.handle.studentNum;
            }
            this.minoritiesNum = _data.notionStudentTotal;
            if (_data.nation) {
              this.nations = _data.nation;
            }
            if (_data.channelType) {
              _data.channelType.forEach(channel => {
                channel.name = channel.channelType == "1" ? "绿色通道" : "缓交";
              });
              this.channels = _data.channelType;
            }
          }
        })
        .catch(err => {
          clearInterval(this.countTimer);
          clearInterval(this.sextTimer);
          clearInterval(this.studentTimer);
          clearInterval(this.topTimer);
          clearInterval(this.reportTimer);
          clearInterval(this.slideTimer);
        });
    },
    getSexChart() {
      getCSexChartData({
        year: this.currentYaer
      }).then(res => {
        if (res.success) {
          var _data = res.content;
          const sexChart = echarts.init(
            document.getElementById("sexsChart"),
            "pie"
          );
          const sexChartOpt = {
            title: {
              text: "",
              subtext: "",
              left: "center"
            },
            legend: {
              bottom: 0,
              left: "center",
              data: ["男生", "女生"],
              textStyle: {
                color: "#ffffff"
              },
              itemWidth: 10,
              itemHeight: 10
            },
            color: ["#00b7ee", "#32be8e"],
            series: [
              {
                type: "pie",
                radius: "65%",
                center: ["50%", "50%"],
                data: [
                  {
                    value: Number(_data.male),
                    name: "男生"
                  },
                  {
                    value: Number(_data.female),
                    name: "女生"
                  }
                ],
                label: {
                  normal: {
                    show: true,
                    formatter: function(data) {
                      return data.percent;
                    }
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: "30",
                      fontWeight: "bold"
                    }
                  }
                },
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ],
            animationDuration: 2000
          };
          sexChart.setOption(sexChartOpt);
        }
      });
    },
    initStudentTable() {
      getSdudentListData({
        year: this.currentYaer
      })
        .then(res => {
          if (res.success) {
            this.studentLists = res.content;
          }
        })
        .catch(err => {});
    },
    initTopChart() {
      getTopChartData({
        year: this.currentYaer
      }).then(res => {
        if (res.success) {
          const xData = [];
          const yData = [];
          const data = res.content;
          const topChartBox = echarts.init(
            document.getElementById("top_chart"),
            "shine"
          );
          const topChartBoxOpt = {
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow"
              }
            },
            grid: {
              top: 10,
              bottom: 10,
              left: 80
            },
            xAxis: {
              show: false,
              type: "value"
            },
            yAxis: {
              type: "category",
              inverse: true,
              axisLine: { show: false },
              axisTick: { show: false },
              axisLabel: {
                fontSize: 10,
                color: "#ffffff"
              }
            },
            series: [
              {
                type: "bar",
                barCategoryGap: "60%",
                label: {
                  show: true,
                  position: "right",
                  fontSize: 12,
                  color: "#ffffff",
                  emphasis: {
                    color: "#e6b600"
                  },
                  formatter: "{c}%"
                },
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [
                      { offset: 0, color: "#b0c2f9" },
                      { offset: 0.5, color: "#188df0" },
                      { offset: 1, color: "#185bff" }
                    ])
                  },
                  emphasis: {
                    color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [
                      { offset: 0, color: "#b0c2f9" },
                      { offset: 0.7, color: "#e6b600" },
                      { offset: 1, color: "#ceac09" }
                    ])
                  }
                }
              }
            ]
          };
          topChartBox.setOption(topChartBoxOpt);
          for (let i in data) {
            xData.push(Number(data[i].count));
            yData.push(data[i].name);
          }
          topChartBox.setOption({
            yAxis: {
              data: yData
            },
            series: [
              {
                name: "新生报到",
                data: xData
              }
            ]
          });
        }
      });
    },
    initReportShiChart() {
      getShiReportData({
        year: this.currentYaer
      }).then(res => {
        if (res.success) {
          var _data = res.content;
          const reportChar = echarts.init(
            document.getElementById("chart_report"),
            "bar"
          );
          const reportChartBoxOpt = {
            title: {
              text: "",
              subtext: ""
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow"
              }
            },
            legend: {
              data: ["招生人数", "报到人数"]
            },
            grid: {
              left: 10,
              right: 10,
              bottom: 10,
              containLabel: true
            },
            yAxis: {
              type: "value",
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                fontSize: 12,
                color: "#ffffff"
              },
              boundaryGap: [0, 0.01],
              splitLine: {
                lineStyle: {
                  color: ["#0f384d"]
                }
              }
            },
            xAxis: {
              data: _data.collegeDeptName,

              axisTick: { show: false },
              axisLabel: {
                fontSize: 11,
                color: "#ffffff",
                interval: 0,

                rotate: "-45"
              }
            },

            animationDurationUpdate: 1200,
            series: [
              {
                type: "bar",
                itemStyle: {
                  normal: {
                    color: "#e5c473"
                  }
                },
                silent: true,
                barWidth: "20%",
                barGap: "-100%",
                data: _data.collegeDeptNum
              },
              {
                type: "bar",
                barWidth: "20%",
                barGap: "-100%",
                z: 10,
                itemStyle: {
                  normal: {
                    color: "#ce3948"
                  }
                },
                data: _data.collageDeptQuasiNum
              }
            ]
          };
          reportChar.setOption(reportChartBoxOpt);
        }
      });
    },

    initCity() {
      var _this = this;
      var myCity = new BMap.LocalCity();
      myCity.get(res => {
        if (res.center) {
          _this.lat = res.center.lat;
          _this.lng = res.center.lng;
        }
        _this.getHeWeather();
      });
    },
    getHeWeather() {
      this.initNowWeather();
      this.initThreeWeather();
    },
    initNowWeather() {
      getWeatherData({
        type: "now",
        location: this.lng + "," + this.lat,
        ak: this.weatherKey
      }).then(res => {
        if (res.success && (res.content && res.content.HeWeather6)) {
          this.isShowWeather = true;
          var _data = res.content.HeWeather6[0];
          this.locationData = _data.basic.parent_city;
          const dates = this.formatTime(_data.update.loc);
          this.todayData = dates.time + "  " + dates.week;
          this.initTodayWeather(_data.now);
        }
      });
    },
    initThreeWeather() {
      getWeatherData({
        type: "forecast",
        location: this.lng + "," + this.lat,
        ak: this.weatherKey
      }).then(res => {
        if (res.success && (res.content && res.content.HeWeather6)) {
          var _data = res.content.HeWeather6[0];
          for (var i = 0; i < 4; i++) {
            if (i == 0) continue;
            else {
              var obj = _data["daily_forecast"][i];
              this.nextThreeWeather.push({
                nextDate: this.formatTime(obj.date).time,
                iconImage: this.getNowWeatherIcon(obj.cond_txt_d),
                weather: obj.cond_txt_d
              });
            }
          }
          this.initNextWeather(_data.daily_forecast[0]);
        }
      });
    },
    initTodayWeather(data) {
      this.iconImg = this.getNowWeatherIcon(data.cond_txt);
      this.todayTemperature = data.tmp;
      this.todayWeather = data.cond_txt;
    },
    initNextWeather(data) {
      this.todayTempMin = data.tmp_min;
      this.todayTempMax = data.tmp_max;
    },
    getNowWeatherIcon(cond_txt) {
      var weatherIcon = "";
      if (cond_txt == "晴") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/100.png";
      } else if (cond_txt == "多云") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/101.png";
      } else if (cond_txt == "少云") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/102.png";
      } else if (cond_txt == "晴间多云 ") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/103.png";
      } else if (cond_txt == "阴") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/104.png";
      } else if (cond_txt == "有风") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/200.png";
      } else if (cond_txt == "平静") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/201.png";
      } else if (cond_txt == "微风") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/202.png";
      } else if (cond_txt == "和风") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/203.png";
      } else if (cond_txt == "清风") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/204.png";
      } else if (cond_txt == "强风/劲风") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/205.png";
      } else if (cond_txt == "疾风") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/206.png";
      } else if (cond_txt == "大风") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/207.png";
      } else if (cond_txt == "烈风") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/208.png";
      } else if (cond_txt == "风暴") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/209.png";
      } else if (cond_txt == "狂爆风") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/210.png";
      } else if (cond_txt == "飓风") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/211.png";
      } else if (cond_txt == "龙卷风") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/212.png";
      } else if (cond_txt == "热带风暴") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/213.png";
      } else if (cond_txt == "阵雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/300.png";
      } else if (cond_txt == "强阵雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/301.png";
      } else if (cond_txt == "雷阵雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/302.png";
      } else if (cond_txt == "强雷阵雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/303.png";
      } else if (cond_txt == "雷阵雨伴有冰雹") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/304.png";
      } else if (cond_txt == "小雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/305.png";
      } else if (cond_txt == "中雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/306.png";
      } else if (cond_txt == "大雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/307.png";
      } else if (cond_txt == "极端降雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/308.png";
      } else if (cond_txt == "毛毛雨/细雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/309.png";
      } else if (cond_txt == "暴雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/310.png";
      } else if (cond_txt == "大暴雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/311.png";
      } else if (cond_txt == "特大暴雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/312.png";
      } else if (cond_txt == "冻雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/313.png";
      } else if (cond_txt == "小到中雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/314.png";
      } else if (cond_txt == "中到大雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/315.png";
      } else if (cond_txt == "大到暴雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/316.png";
      } else if (cond_txt == "暴雨到大暴雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/317.png";
      } else if (cond_txt == "大暴雨到特大暴雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/318.png";
      } else if (cond_txt == "雨") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/399.png";
      } else if (cond_txt == "小雪") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/400.png";
      } else if (cond_txt == "中雪") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/401.png";
      } else if (cond_txt == "大雪") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/402.png";
      } else if (cond_txt == "暴雪") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/403.png";
      } else if (cond_txt == "雨夹雪") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/404.png";
      } else if (cond_txt == "雨雪天气") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/405.png";
      } else if (cond_txt == "阵雨夹雪") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/406.png";
      } else if (cond_txt == "阵雪") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/407.png";
      } else if (cond_txt == "小到中雪") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/408.png";
      } else if (cond_txt == "中到大雪") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/409.png";
      } else if (cond_txt == "大到暴雪") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/410.png";
      } else if (cond_txt == "雪") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/499.png";
      } else if (cond_txt == "薄雾") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/500.png";
      } else if (cond_txt == "雾") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/501.png";
      } else if (cond_txt == "霾") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/502.png";
      } else if (cond_txt == "扬沙") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/503.png";
      } else if (cond_txt == "浮尘") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/504.png";
      } else if (cond_txt == "沙尘暴") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/507.png";
      } else if (cond_txt == "强沙尘暴") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/508.png";
      } else if (cond_txt == "浓雾") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/509.png";
      } else if (cond_txt == "强浓雾") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/510.png";
      } else if (cond_txt == "中度霾") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/511.png";
      } else if (cond_txt == "重度霾") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/512.png";
      } else if (cond_txt == "严重霾") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/513.png";
      } else if (cond_txt == "大雾") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/514.png";
      } else if (cond_txt == "特强浓雾") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/515.png";
      } else if (cond_txt == "热") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/900.png";
      } else if (cond_txt == "冷") {
        weatherIcon = "https://cdn.heweather.com/cond_icon/901.png";
      } else {
        weatherIcon = "https://cdn.heweather.com/cond_icon/999.png";
      }
      return weatherIcon;
    },
    formatTime(value) {
      var temDate = new Date(value);
      var month = temDate.getMonth() + 1;
      var day = temDate.getDate();
      var today_week = temDate.getDay();
      return {
        time: month + "月" + day + "日",
        week: "周" + "日一二三四五六".charAt(today_week)
      };
    }
  }
};
</script>