<template>
  <div id="terminalRatio">
    <div class="chart-loader">
      <div class="loader"></div>
    </div>
  </div>
</template>
<script>
  import {getTerminalRatio} from "@/api/server";
  import echarts from 'echarts'
  export default {
    data () {
      return {

      }
    },
    mounted() {
      this.getTerminalRatio();
    },
    methods: {
      getTerminalRatio() {
        getTerminalRatio().then(res => {
          const ratioData = res.data;
          ratioData.map(item=> {
            if (item.name === 'PC端') {
              item.itemStyle = {
                color: '#364BA3'
              }
            }
            if (item.name === '移动端') {
              item.itemStyle = {
                color: '#02B8E7'
              }
            }
          })
          let mychart = echarts.init(document.getElementById('terminalRatio'));
          const option = {
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
              orient: 'horizontal',
              right: 100,
              top: 40,
              textStyle: {
                color: '#fff'
              },
              itemWidth: 8,
              itemHeight: 8,
              data:['PC端', '移动端']
            },
            series: [
              {
                name:'访问来源',
                type:'pie',
                center: ['35%', '60%'],
                radius: ['30%', '45%'],
                avoidLabelOverlap: false,
                label: {
                  show: true,
                  formatter: '{c}次'
                },
                labelLine: {
                  normal: {
                    show: true,
                  }
                },
                data:ratioData
              }
            ]
          };
          mychart.setOption(option)
        })
      }
    }
  }
</script>
<style lang="less">
  #terminalRatio {
    width: 100%;
    height: 100%;
  }
</style>