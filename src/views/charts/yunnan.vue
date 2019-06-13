<template>
  <div id="yunnanCount"></div>
</template>
<script>
import { getYunnanStudentCount } from "@/api/server";
import echarts from "echarts";
import "echarts/map/js/province/yunnan.js";
export default {
  data() {
    return {};
  },
  mounted() {
    const echart = echarts.init(document.getElementById("yunnanCount"));
    getYunnanStudentCount().then(res => {
      const data = res.data;
      const options = {
        grid: {
          left: 10
        },
        visualMap: {
          min: 0,
          max: 5000,
          calculable: true,
          itemWidth: 10,
          inRange: {
            color: ["#50a3ba", "#eac736", "#d94e5d"]
          },
          textStyle: {
            color: "#fff"
          }
        },
        geo: {
          map: "云南",
          layoutCenter: ["50%", "50%"],
          layoutSize: "100%",
          aspectScale: 1,
          label: {
            show: true,
            color: "#fff",
            fontSize: 10,
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: "#07253D",
              borderColor: "#266C89"
            },
            emphasis: {
              areaColor: "#2a333d"
            }
          }
        },
        series: [
          {
            name: "studentNumber",
            type: "map",
            map: "云南",
            roam: false,
            label: {
              normal: {
                show: true //省份名称
              },
              emphasis: {
                show: false
              }
            },
            geoIndex: 0,
            data: data //数据
          }
        ]
      };
      echart.setOption(options);
    });
  },
  methods: {}
};
</script>
<style lang="less">
#yunnanCount {
  width: 100%;
  height: 100%;
}
</style>