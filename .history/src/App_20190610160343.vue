<template>
  <div id="app">
    <chart-container></chart-container>
  </div>
</template>

<script>
import screenfull from "screenfull";
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

  methods: {
    screenfull() {
      if (!screenfull.enabled) {
        this.$message({
          message: "Your browser does not support!",
          type: "warning"
        });
        return false;
      }
      screenfull.toggle();
      this.isFullscreen = true;
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
