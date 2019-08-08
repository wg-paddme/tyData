<template>
  <div id="linkProgressRank" :currentYear="currentYear">
    <div class="chart-loader">
      <div class="loader"></div>
    </div>
  </div>
</template>
<script>
import { getLinkProgressRank } from "@/api/server";
import echarts from "echarts";
import { clearInterval } from "timers";
export default {
  props: {
    currentYear: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      linkTimer: null
    };
  },
  mounted() {
    this._getLinkProgressRank();
    this.linkTimer = setInterval(this._getLinkProgressRank, 1000 * 60 * 5);
  },
  methods: {
    setMaxDataStyle(arr) {},
    _getLinkProgressRank() {
      let mychart = echarts.init(document.getElementById("linkProgressRank"));
      getLinkProgressRank({
        year: this.currentYear
      })
        .then(res => {
          if (res.success) {
            const rankData = res.content;
            let names = [];
            let values = [];
            rankData.forEach(item => {
              names.push(item.name);
              values.push(Number(item.value));
            });
            let maxValueIndex = values.findIndex(
              value => value == Math.max(...values)
            );

            rankData[maxValueIndex].itemStyle = {
              color: "#66BC71"
            };

            const option = {
              xAxis: {
                type: "category",
                data: names,
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                axisLabel: {
                  fontSize: 11,
                  color: "#ffffff",
                  interval: 0
                },
                splitArea: {
                  show: false,
                  interval: 0
                }
              },
              legend: {
                orient: "horizontal",
                right: 0,
                top: 20,
                textStyle: {
                  color: "#fff"
                },
                itemWidth: 8,
                itemHeight: 8,
                data: ["已报到人数"]
              },
              yAxis: {
                type: "value",
                min: 0,
                max: "dataMax",
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: true
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
                },
                splitArea: {
                  show: true,
                  areaStyle: {
                    color: ["rgba(15, 45, 67)", "rgba(15, 45, 68)"]
                  }
                }
              },
              grid: {
                top: "50px",
                left: "50px",
                right: "5px",
                bottom: "20px",
                width: "auto",

                containLabel: false
              },
              tooltip: {},
              series: [
                {
                  name: "已报到人数",
                  type: "bar",
                  itemStyle: {
                    color: "#287BBD"
                  },
                  label: {
                    show: false,
                    position: "right",
                    formatter: function(params) {
                      return Math.ceil(params.value * 100) + "%";
                    }
                  },
                  barWidth: 15,
                  data: rankData
                }
              ]
            };
            mychart.setOption(option);
          }
        })
        .catch(err => {
          clearInterval(this.linkTimer);
        });
    }
  }
};
</script>
<style lang="less">
#linkProgressRank {
  width: 100%;
  height: calc(100% - 0px);
}
</style>