<template>
  <div id="app">
    <button @click="click">切换</button>
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
      isFullscreen: false
    };
  },
  directives: {
    trigger: {
      inserted(el, binging) {
        el.click();
        //$(el).trigger('click')
      }
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.destroy();
  },
  methods: {
    click() {
      if (!screenfull.enabled) {
        return false;
      }
      if (!this.isFullscreen) {
        screenfull.toggle();
      }
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen;
    },
    init() {
      if (screenfull.enabled) {
        screenfull.on("change", this.change);
      }
    },
    destroy() {
      if (screenfull.enabled) {
        screenfull.off("change", this.change);
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
