<template>
  <div ref="box2" id="yunnanCount" :currentYear="currentYear" :style="myStyles"></div>
</template>
<script>
import { getYunnanStudentCount } from "@/api/server";
import echarts from "echarts";
import "echarts/map/js/province/yunnan.js";
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
      vheight: 0,
      myStyles: {
        width: "100%",
        height: "100%"
      }
    };
  },
  mounted() {
    /* setInterval(this.initShengfen, 200000); */
  },
  methods: {
    resizeChart(opt) {
      this.vweight = opt.width;
      this.vheight = opt.height;
      this.myStyles.width = opt.width + "px";
      this.myStyles.height = opt.height + "px";
      setTimeout(this.initShengfen, 100);
    },
    initShengfen() {
      const echart = echarts.init(document.getElementById("yunnanCount"));
      getYunnanStudentCount({
        year: this.currentYear
      })
        .then(res => {
          if (res.success) {
            this.$emit("on-turn", true);

            const data = res.content;
            const maxNum =
              data[0] && data[0].value ? Number(data[0].value) : 100;
            const options = {
              grid: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                width: this.vweight,
                height: this.vheight
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
                map: "云南",
                width: this.vheight / 0.75,
                height: this.vheight,
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
#yunnanCount {
  width: 100%;
  height: 100%;
}
</style>