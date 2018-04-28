import Vue from 'vue'
import App from './App'
import store from './store'
import Vuex from 'vuex'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ECharts from 'vue-echarts/components/ECharts'
import './assets/iconfont/iconfont'
import VueParticles from 'vue-particles'
import './assets/css/style.css'

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueParticles)

Vue.component('chart', ECharts)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
