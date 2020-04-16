import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import npmAssembly from 'npm-assembly'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(npmAssembly)

new Vue({
  render: h => h(App),
}).$mount('#app')
