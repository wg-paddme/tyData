<template>
  <div id="progressRank">
    <div class="chart-loader">
      <div class="loader"></div>
    </div>
  </div>
</template>
<script>
  import {getProgressRank} from "@/api/server";
  import echarts from 'echarts'
  export default {
    data () {
      return {

      }
    },
    mounted() {
      this.getProgressRank()
    },
    methods: {
      getProgressRank() {
        getProgressRank().then(res => {
          const rankData = res.data;
          let majorNames = rankData.map(item=>item.majorName).reverse();
          let values = rankData.map(item => item.val).reverse();
          let mychart = echarts.init(document.getElementById('progressRank'));
          const option = {
            yAxis: {
              type: 'category',
              data: majorNames,
              axisTick: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisLabel: {
                show: true,
                color: '#fff',
                margin: 5,
              },
            },
            grid: {
              top: 20,
              right: 10,
              left: 90,
              containLabel: false
            },
            xAxis: {
              show: false,
            },
            tooltip: {},
            series: [{
              type: 'bar',
              itemStyle: {
                color: '#49C29F'
              },
              barCategoryGap: 30,
              label: {
                show: true,
                position: 'right',
                formatter: function (params) {
                  return Math.ceil(params.value*100)+ '%'
                }
              },
              barWidth: 15,
              data: values
            }]
          }
          mychart.setOption(option)
        })
      }
    }
  }
</script>
<style lang="less">
  #progressRank {
    width: 100%;
    height: 100%;
  }
</style>