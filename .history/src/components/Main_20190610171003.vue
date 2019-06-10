<template>
  <div class="chanrs-container">
    <!-- <router-view></router-view> -->
    <Container></Container>
  </div>
</template>
<script>
import Container from "@view/home/Container";
export default {
  components: { Container },
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
