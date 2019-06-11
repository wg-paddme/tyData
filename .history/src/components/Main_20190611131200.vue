<template>
  <div class="chanrs-container">
    <!--  <router-view></router-view> -->
    <Welcome></Welcome>
  </div>
</template>
<script>
import Welcome from "@view/welcome/Welcome";
export default {
  components: { Welcome },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.chanrs-container {
  width: 100%;
  height: 100%;
}
</style>
