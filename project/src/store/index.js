import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    changeLoading(state, boolean){
      state.isLoading = boolean
    }
  },
  actions: {
    changeLoading(state, boolean){
      state.commit('changeLoading', boolean)
    }
  },
  modules: {
  },
  getters: {
    getLoading(state){
      return state.isLoading
    }
  }
})
