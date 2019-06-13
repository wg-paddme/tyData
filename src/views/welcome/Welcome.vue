<template>
  <div class="full-container">
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
                          :duration="3600"
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
                    <h3 class="chart-title chart-title-noicon chart-title-small">在办学生数</h3>
                    <div class="count-box">
                      <span class="count-number count-number-small">
                        <count-to
                          :start-val="0"
                          :end-val="studentNum"
                          :duration="3600"
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
                <div class="flex-cell-inner">
                  <div class="chart-wrapper">
                    <h3 class="chart-title chart-title-noicon chart-title-small">傣族</h3>
                    <div class="count-box">
                      <span class="count-number count-number-small">
                        <count-to
                          :start-val="0"
                          :end-val="top1Num"
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
                    <h3 class="chart-title chart-title-noicon chart-title-small">土家族</h3>
                    <div class="count-box">
                      <span class="count-number count-number-small">
                        <count-to
                          :start-val="0"
                          :end-val="top2Num"
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
                    <h3 class="chart-title chart-title-noicon chart-title-small">维吾尔族</h3>
                    <div class="count-box">
                      <span class="count-number count-number-small">
                        <count-to
                          :start-val="0"
                          :end-val="top3Num"
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
                <div class="flex-cell-inner flex-cell-unbottom">
                  <div class="chart-wrapper">
                    <h3 class="chart-title chart-title-noicon">绿色通道</h3>
                    <div class="count-box">
                      <span class="count-number">
                        <count-to
                          :start-val="0"
                          :end-val="greenChannelNum"
                          :duration="3600"
                          class="card-panel-num"
                        />
                      </span>
                      <span class="count-unit">人</span>
                    </div>
                  </div>
                </div>
                <div class="flex-cell-inner flex-cell-unbottom">
                  <div class="chart-wrapper">
                    <h3 class="chart-title chart-title-noicon">缓缴</h3>
                    <div class="count-box">
                      <span class="count-number">
                        <count-to
                          :start-val="0"
                          :end-val="longNum"
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
                  <div class="news-wrapper">
                    <div class="news-list">考生号20190102****2233新生刘德华完成办理</div>
                    <div class="news-list">考生号20190102****2233新生刘德华完成办理</div>
                    <div class="news-list">考生号20190102****2233新生刘德华完成办理</div>
                    <div class="news-list">考生号20190102****2233新生刘德华完成办理</div>
                    <div class="news-list">考生号20190102****2233新生刘德华完成办理</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-cell flex-cell-6" style="margin-left:0">
            <div class="chart-wrapper">
              <h3 class="chart-title chart-title-noicon">总人数-生源地省份</h3>
              <div class="chart-box" id="dt">
                <province-count></province-count>
                <!--<div class="chart-loader">
                  <div class="loader"></div>
                </div>-->
              </div>
            </div>
          </div>
          <div class="flex-cell flex-cell-2" style="margin-left:0">
            <div class="flex-col">
              <div class="flex-row">
                <div class="flex-cell-inner">
                  <div class="chart-wrapper">
                    <h3 class="chart-title chart-title-center">天气预报</h3>
                    <div class="chart-box" id="weatherInfo">
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
                    <div id="xsx" style="display:none"></div>
                  </div>
                </div>
              </div>
              <div class="flex-row">
                <div class="flex-cell-inner flex-cell-unbottom">
                  <div class="chart-wrapper">
                    <h3 class="chart-title chart-title-center">报道进度TOP10</h3>
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
              <welcome-teacher></welcome-teacher>
            </div>
          </div>
          <div class="flex-cell flex-cell-3" style="margin-left:0">
            <div class="chart-wrapper">
              <h3 class="chart-title chart-title-center">环节办理进度</h3>
              <div class="chart-box" id="ss">
                <div class="chart-loader">
                  <div class="loader"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-cell flex-cell-3" style="margin-left:0">
            <div class="chart-wrapper">
              <h3 class="chart-title chart-title-center">办理终端占比</h3>
              <terminal-ratio></terminal-ratio>
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
import ProgressRank from "@cp/ProgressRank";
import TerminalRatio from "@cp/TerminalRatio";
import WelcomeTeacher from "@cp/WelcomeTeacher";
import ProvinceCount from "@cp/ProvinceCount";
import {
  getConutInfos,
  getCSexChartData,
  getTopChartData,
  getShiReportData,
  getWeatherData,
  getWeatherNowData
} from "@/api/server";

export default {
  name: "",
  components: {
    countTo,
    ProgressRank,
    TerminalRatio,
    WelcomeTeacher,
    ProvinceCount
  },
  data() {
    return {
      lat: "30.576279",
      lng: "104.071216",
      todayData: "60-13 周四",
      locationData: "成都",
      iconImg: "https://cdn.heweather.com/cond_icon/100.png",
      todayTemperature: "20",
      todayTempMin: "16",
      todayTempMax: "30",
      todayWeather: "晴",
      nextThreeWeather: [],
      startVal: 0,
      enrolledNum: 0,
      reportNum: 0,
      linkNum: 6,
      teacherNum: 33,
      studentNum: 3333,
      minoritiesNum: 2281,
      top1Num: 220,
      top2Num: 433,
      top3Num: 100,
      greenChannelNum: 3333,
      longNum: 111
    };
  },
  mounted() {
    this.initCity();
    this.initCount();
    this.getSexChart();
    this.initTopChart();
    this.initReportShiChart();
  },
  methods: {
    initCount() {
      getConutInfos().then(res => {
        if (res.success) {
          this.enrolledNum = res.data.enrolledNum;
          this.reportNum = res.data.reportNum;
        }
      });
    },
    getSexChart() {
      getCSexChartData().then(res => {
        if (res.success) {
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
                data: [],
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
          var _data = res.data;
          sexChart.setOption({
            series: {
              data: _data
            }
          });
        }
      });
    },
    initTopChart() {
      getTopChartData().then(res => {
        if (res.success) {
          const xData = [];
          const yData = [];
          const data = res.data;
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
              left: 60
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
                fontSize: 12,
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
                  }
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
            xData.push(data[i].count);
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
      getShiReportData().then(res => {
        if (res.success) {
          var _data = res.data;
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
              data: [
                "临床",
                "计算机",
                "养殖",
                "助产",
                "园艺",
                "中医设备",
                "中医学习",
                "园艺22",
                "园艺33",
                "园艺3"
              ],

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
                data: [220, 240, 120, 100, 80, 168, 140, 120, 250, 135]
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
                data: [144, 124, 13, 25, 56, 54, 78, 75, 124, 110]
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
        _this.getTq();
      });
    },
    getTq() {
      getWeatherNowData({
        type: "forecast",
        location: this.lng + "," + this.lat,
        ak: "5e24beb24f37462b8ac7b1d0135600bb"
      }).then(res => {
        if (res.success) {
          var _data = res.data[0];
          this.locationData = _data.basic.parent_city;
          const dates = this.formatTime(_data.update.loc);
          this.todayData = dates.time + "  " + dates.week;
          this.initTodayWeather(_data.now);
        }
      });
      getWeatherData({
        type: "forecast",
        location: this.lng + "," + this.lat,
        ak: "5e24beb24f37462b8ac7b1d0135600bb"
      }).then(res => {
        if (res.success) {
          var _data = res.data;
          for (var i = 0; i < 4; i++) {
            if (i == 0) continue;
            else {
              var obj = _data[0]["daily_forecast"][i];
              this.nextThreeWeather.push({
                nextDate: this.formatTime(obj.date).time,
                iconImage: this.getNowWeatherIcon(obj.cond_txt_d),
                weather: obj.cond_txt_d
              });
            }
          }
          this.initNextWeather(_data[0].daily_forecast[0]);
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
      console.log(this.nextThreeWeather);
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