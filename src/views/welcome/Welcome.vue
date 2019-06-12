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
              <div class="flex-row-big-half">
                <div class="flex-cell-inner">
                  <div class="chart-wrapper">
                    <h3 class="chart-title chart-title-center">天气预报</h3>
                    <div class="chart-box" id="weatherInfo">
                      <div class="chart-loader">
                        <div class="loader"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-row-big">
                <div class="flex-cell-inner flex-cell-unbottom">
                  <div class="chart-wrapper">
                    <h3 class="chart-title chart-title-center">报到进度排行TOP5</h3>
                    <progress-rank></progress-rank>
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
          <div class="flex-cell flex-cell-5" style="margin-left:0"></div>
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
import ProgressRank from '@cp/ProgressRank'
import TerminalRatio from '@cp/TerminalRatio'
import WelcomeTeacher from '@cp/WelcomeTeacher'
import ProvinceCount from '@cp/ProvinceCount'
import { getConutInfos, getCSexChartData } from "@/api/server";

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
    if (BMap) {
     // this.initMap();
    this.initCount();
    this.getSexChart();
    /* if (BMap) {
      this.initMap();
    }
    this.initCity(); */
    }
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

    initCity() {
      var map = new BMap.Map("weatherInfo");

      function myFun(result) {
        var cityName = result.name;
        map.setCenter(cityName);
        //alert("当前定位城市:" + cityName);
      }
      var myCity = new BMap.LocalCity();
      myCity.get(myFun);
    }
  }
};
</script>