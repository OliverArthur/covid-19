import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

import VueFusionCharts from 'vue-fusioncharts'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'

import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)
Vue.use(VueFusionCharts, FusionCharts, Charts)

new Vue({
  render: h => h(App)
}).$mount('#app')
