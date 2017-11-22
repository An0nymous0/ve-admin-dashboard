import * as types from '../mutation-types'

const state = {
  sidebarCollapse: false
}

// getters
const getters = {
  sidebarCollapse: state => state.sidebarCollapse
}

// actions
const actions = {
  editSidebarCollapse ({ commit }) {
    commit(types.EDIT_SIDEBAR_COLLAPSE)
  }
}

// mutations
const mutations = {
  [types.EDIT_SIDEBAR_COLLAPSE] (state) {
    state.sidebarCollapse = !state.sidebarCollapse
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
