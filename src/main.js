import Vue from 'vue'
import App from './App.vue'
import BaiduMap from 'vue-baidu-map'
import router from './router/index'

Vue.config.productionTip = false

Vue.use(BaiduMap, {
  ak: "TI8fGFnvz3FYeH4P5l7Br5KGLMaxZkK6"
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
