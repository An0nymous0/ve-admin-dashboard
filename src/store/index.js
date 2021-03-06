//https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart/store
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import dashboard from './modules/dashboard'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    dashboard
  },
  strict: debug
})
