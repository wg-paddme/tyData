<template>
  <div class="chart-container">
    <header id="header">
      <h3 class="header-title">成都市上市公司全景概览</h3>
      <div class="header-info header-info-l">数据来源：上交所 &amp; 深交所</div>
      <div class="header-info header-info-r">
        数据日期：
        <span id="nowDate"></span>
      </div>
    </header>

    <footer id="footer"></footer>

    <div id="container">
      <div id="flexCon">
        <div class="flex-row">
          <div class="flex-cell flex-cell-l">
            <div class="chart-wrapper">
              <h3 class="chart-title">市价总值排行Top10</h3>
              <div class="chart-div" id="rankChart">
                <div class="chart-loader">
                  <div class="loader"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-cell flex-cell-c" style="padding-right:0;">
            <div class="chart-wrapper">
              <h3 class="chart-title">统计数据</h3>
              <div class="chart-div chart-done">
                <table class="data-t">
                  <tr>
                    <th>
                      <img src="../../assets/images/data09/icon-01.png">
                    </th>
                    <td>
                      <p>
                        <span id="listedCompany">
                          <count-to
                            :start-val="0"
                            :end-val="listedCompany"
                            :duration="3600"
                            class="card-panel-num"
                          />
                        </span>
                      </p>
                      <p>上市公司数</p>
                    </td>
                    <th>
                      <img src="../../assets/images/data09/icon-02.png">
                    </th>
                    <td>
                      <p>
                        <span id="listedSecurity">
                          <count-to
                            :start-val="0"
                            :end-val="listedSecurity"
                            :duration="3600"
                            class="card-panel-num"
                          />
                        </span>
                      </p>
                      <p>上市证券数</p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <img src="../../assets/images/data09/icon-03.png">
                    </th>
                    <td>
                      <p>
                        <span id="totalMarket">
                          <count-to
                            :start-val="0"
                            :end-val="totalMarket"
                            :duration="3600"
                            class="card-panel-num"
                          />
                        </span>
                      </p>
                      <p>股票总市值（亿元）</p>
                    </td>
                    <th>
                      <img src="../../assets/images/data09/icon-04.png">
                    </th>
                    <td>
                      <p>
                        <span id="circulationMarket">
                          <count-to
                            :start-val="0"
                            :end-val="circulationMarket"
                            :duration="3600"
                            class="card-panel-num"
                          />
                        </span>
                      </p>
                      <p>股票流通市值（亿元）</p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <img src="../../assets/images/data09/icon-05.png">
                    </th>
                    <td>
                      <p>
                        <span id="shRatio">
                          <count-to
                            :start-val="0"
                            :end-val="shRatio"
                            :duration="3600"
                            :decimals="2"
                            class="card-panel-num"
                          />
                        </span>
                      </p>
                      <p>上市平均市盈率</p>
                    </td>
                    <th>
                      <img src="../../assets/images/data09/icon-06.png">
                    </th>
                    <td>
                      <p>
                        <span id="szRatio">
                          <count-to
                            :start-val="0"
                            :end-val="szRatio"
                            :duration="3600"
                            :decimals="2"
                            class="card-panel-num"
                          />
                        </span>
                      </p>
                      <p>深市平均市盈率</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="flex-cell flex-cell-r" style="padding-left:0;">
            <div class="chart-wrapper">
              <h3 class="chart-title">上市公司地域分布</h3>
              <div class="chart-div" id="mapChart">
                <div class="chart-loader">
                  <div class="loader"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-row">
          <div class="flex-cell flex-cell-lc" style="padding-bottom:0;">
            <div class="chart-wrapper">
              <h3 class="chart-title">2018年月度股票情况及预测</h3>
              <div class="chart-div" id="trendChart">
                <div class="chart-loader">
                  <div class="loader"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-cell flex-cell-r" style="padding-bottom:0;">
            <div class="chart-wrapper">
              <h3 class="chart-title">CSRC行业分类</h3>
              <div class="chart-div" id="csrcChart">
                <div class="chart-loader">
                  <div class="loader"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./style.less";
import countTo from "vue-count-to";
import { getConuts } from "@/api/server";
export default {
  name: "",
  components: {
    countTo
  },
  data() {
    return {
      startVal: 0,
      listedCompany: 0,
      listedSecurity: 0,
      totalMarket: 0,
      circulationMarket: 0,
      shRatio: 0,
      szRatio: 0
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initDay();
    },
    initDay() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const el = document.querySelector("#nowDate");
      el.innerHTML = year + "年" + month + "月" + day + "日";
      getConuts()
        .then(res => {
          if (res.success) {
            let data = res.data;
            this.listedCompany = data.listed_companies_total;
            this.listedSecurity = data.listed_securities_total;
            this.totalMarket = data.total_market_value;
            this.circulationMarket = data.circulation_market_value;
            this.shRatio = data.sh_pe_ratio;
            this.szRatio = data.sz_pe_ratio;
          }
        })
        .catch(err => {});
    }
  }
};
</script>

