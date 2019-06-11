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
              <div class="flex-row">
                <div class="flex-cell-inner"></div>
              </div>
              <div class="flex-row">
                <div class="flex-cell-inner"></div>
              </div>
              <div class="flex-row flex-row-half">
                <div class="flex-cell-inner flex-cell-unbottom"></div>
              </div>
            </div>
          </div>
          <div class="flex-cell flex-cell-2" style="margin-left:0">
            <div class="flex-col">
              <div class="flex-row">
                <div class="flex-cell-inner"></div>
              </div>
              <div class="flex-row">
                <div class="flex-cell-inner flex-cell-unbottom"></div>
              </div>
            </div>
          </div>
          <div class="flex-cell flex-cell-6" style="margin-left:0">
            <div class="chart-wrapper">
              <h3 class="chart-title chart-title-noicon">总人数-生源地省份</h3>
              <div class="chart-box" id="dt">
                <div class="chart-loader">
                  <div class="loader"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-cell flex-cell-2" style="margin-left:0">
            <div class="flex-col">
              <div class="flex-row">
                <div class="flex-cell-inner"></div>
              </div>
              <div class="flex-row">
                <div class="flex-cell-inner flex-cell-unbottom"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-row flex-row-half">
          <div class="flex-cell flex-cell-3"></div>
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
          <div class="flex-cell flex-cell-3" style="margin-left:0"></div>
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
export default {
  name: "",
  components: {
    countTo
  },
  data() {
    return {};
  },
  mounted() {
    if (BMap) {
      this.initMap();
    }
  },
  methods: {
    initMap() {
      var map = new BMap.Map("dt"); // 创建Map实例
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    }
  }
};
</script>