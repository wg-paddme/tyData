<template>
  <div :currentYear="currentYear">
    <table v-if="loaded == true">
      <thead>
        <tr>
          <th>教师</th>
          <th>办理人次</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in teachers" v-if="index<7">
          <td>{{item.teacherName || '--'}}</td>
          <td>{{item.studentNum || '--'}}</td>
        </tr>
      </tbody>
    </table>
    <div class="chart-box" v-if="loaded == false">
      <div class="chart-loader">
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { getWelcomeTeacherRank } from "@/api/server";
import echarts from "echarts";

export default {
  props: {
    currentYear: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      teachers: "",
      loaded: false
    };
  },
  mounted() {
    this._getWelcomeTeacherRank();
    setInterval(this._getWelcomeTeacherRank, 200000);
  },
  methods: {
    _getWelcomeTeacherRank() {
      getWelcomeTeacherRank({
        year: this.currentYear
      }).then(res => {
        if (res.success) {
          this.loaded = true;
          this.teachers = res.content;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
table {
  width: 80%;
  margin: 20px auto 0;
  color: #fff;
  font-size: 14px;
  border-collapse: collapse;
}
thead {
  background-color: #0f2f46;
}
th,
td {
  padding: 5px;
  text-align: left;
}
[v-cloak] {
  display: none;
}
</style>