<template>
  <div>
    <table v-if="loaded == true">
      <thead>
        <tr>
          <th>学院</th>
          <th>教师</th>
          <th>办理人次</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in teachers">
          <td>{{item.depart}}</td>
          <td>{{item.teacher || '--'}}</td>
          <td>{{item.total || '--'}}</td>
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
  import {getWelcomeTeacherRank} from "@/api/server";
  import echarts from 'echarts'

  export default {
    data() {
      return {
        teachers: '',
        loaded: false
      }
    },
    mounted() {
      this.getWelcomeTeacherRank()
    },
    methods: {
      getWelcomeTeacherRank() {
        getWelcomeTeacherRank().then(res => {
          this.loaded = true;
          this.teachers = res.data
        })
      }
    }
  }
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
    background-color: #0F2F46;
  }
  th, td {
    padding: 5px;
    text-align: left;
  }
  [v-cloak] {
    display: none;
  }
</style>