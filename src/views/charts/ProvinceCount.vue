<template>
  <div id="provinceCount" ref="box1" :currentYear="currentYear"></div>
</template>
<script>
import { getProvinceStudentCount } from "@/api/server";
import echarts from "echarts";
import "echarts/map/js/china.js";
import { setTimeout } from "timers";
export default {
  props: {
    currentYear: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      vheight: 0
    };
  },
  mounted() {
    setTimeout(this.initMapChina, 650);
    setInterval(this.initMapChina, 200000);
  },
  methods: {
    initMapChina() {
      this.vheight = this.$refs.box1.clientHeight;
      console.log(this.vheight);
      this.$emit("on-height", {
        height: this.vheight,
        width: this.$refs.box1.clientWidth
      });
      getProvinceStudentCount({
        year: this.currentYear
      })
        .then(res => {
          if (res.success) {
            this.$emit("on-turn", true);
            const data = res.content;
            const maxNum =
              data[0] && data[0].value ? Number(data[0].value) : 100;
            const echart = echarts.init(
              document.getElementById("provinceCount")
            );
            const options = {
              tooltip: {
                trigger: "item",
                formatter: function(params) {
                  return params.name + " : " + (params.value || 0);
                }
              },
              grid: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%"
              },
              visualMap: {
                min: 0,
                max: maxNum,
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
                map: "china",
                /* layoutCenter: ["50%", "50%"], //地图位置
                layoutSize: "130%", */
                width: this.vheight / 0.75,
                height: this.vheight,
                zoom: 1,
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
                  map: "china",
                  roam: false,
                  zoom: 1,
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
          }
        })
        .catch(err => {
          this.$emit("on-turn", false);
        });
    }
  }
};
</script>
<style lang="less">
#provinceCount {
  width: 100%;
  height: calc(100% - 0px);
}
</style>