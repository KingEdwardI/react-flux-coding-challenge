import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  users: [{ firstName: 'Edward', lastName: 'Vetter-Drake', address: 'Denver, CO', id: 0 }]
}

const mutations = {
  add_user (state, payload) {
    state.users.push(payload)
  },
  update_user (state, payload) {
    const index = state.users.findIndex(user => user.id === payload.id)
    state.users.splice(index, 1, payload)
  },
  delete_user (state, payload) {
    const index = state.users.findIndex(user => user.id === payload)
    state.users.splice(index, 1)
  }
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
