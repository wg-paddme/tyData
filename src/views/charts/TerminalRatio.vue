<template>
  <div id="terminalRatio" :currentYear="currentYear">
    <div class="chart-loader">
      <div class="loader"></div>
    </div>
  </div>
</template>
<script>
import { getTerminalRatio } from "@/api/server";
import echarts from "echarts";
export default {
  props: {
    currentYear: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  mounted() {
    this._getTerminalRatio();
    setInterval(this._getTerminalRatio, 200000);
  },
  methods: {
    _getTerminalRatio() {
      getTerminalRatio({
        year: this.currentYear
      }).then(res => {
        const ratioData = res.content;
        ratioData.forEach(item => {
          item.name = item.name == "1" ? "PC端" : "移动端";
        });
        ratioData.map(item => {
          if (item.name === "PC端") {
            item.itemStyle = {
              color: "#02b7ec"
            };
          }
          if (item.name === "移动端") {
            item.itemStyle = {
              color: "#374aa5"
            };
          }
        });
        let mychart = echarts.init(document.getElementById("terminalRatio"));
        const option = {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: "horizontal",
            right: 100,
            top: 40,
            textStyle: {
              color: "#fff"
            },
            itemWidth: 8,
            itemHeight: 8,
            data: ["PC端", "移动端"]
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              center: ["35%", "60%"],
              radius: ["30%", "45%"],
              avoidLabelOverlap: false,
              label: {
                show: true,
                formatter: "{c}次",
                fontWeight: 300
              },
              labelLine: {
                normal: {
                  show: true
                }
              },
              data: ratioData
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
#terminalRatio {
  width: 100%;
  height: calc(100% - 40px);
}
</style>