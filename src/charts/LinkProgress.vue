<template>
  <div id="linkProgressRank">
    <div class="chart-loader">
      <div class="loader"></div>
    </div>
  </div>
</template>
<script>
import { getLinkProgressRank } from "@/api/server";
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getLinkProgressRank();
  },
  methods: {
    setMaxDataStyle(arr) {},
    getLinkProgressRank() {
      getLinkProgressRank().then(res => {
        const rankData = res.data;

        let names = rankData.map(item => item.name);
        let values = rankData.map(item => item.value);
        let maxValueIndex = values.findIndex(
          value => value == Math.max(...values)
        );
        rankData[maxValueIndex].itemStyle = {
          color: "#66BC71"
        };
        let mychart = echarts.init(document.getElementById("linkProgressRank"));
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
          grid: {
            top: 15,
            right: 0,
            width: "100%",
            containLabel: false,
            backgroundColor: "#0F2E43"
          },
          yAxis: {
            type: "value",
            max: "dataMax",
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
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ["rgba(15, 45, 67)", "rgba(15, 45, 68)"]
              }
            }
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
      });
    }
  }
};
</script>
<style lang="less">
#linkProgressRank {
  width: 100%;
  height: 100%;
}
</style>