<template>
  <div id="app">
    <chart-container></chart-container>
  </div>
</template>

<script>
import chartContainer from "./components/Main";

export default {
  name: "app",
  components: {
    chartContainer
  },
  data() {
    return {
      isFullscreen: true
    };
  },
  created() {
    this.handleFullScreen();
  },
  methods: {
    handleFullScreen() {
      //全屏
      var docElm = document.documentElement;
      //W3C
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      }

      //FireFox
      else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      }

      //Chrome等
      else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      }

      //IE11
      else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }
  }
};
</script>

<style lang="less" scope>
@charset "utf-8";

/* global */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  min-width: 1200px;
  min-height: 600px;
  overflow: hidden;
}
body {
  position: relative;
  font-family: "Microsoft Yahei", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  height: inherit;
}
</style>
