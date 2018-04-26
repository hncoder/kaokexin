import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logined: true
  },
  mutations: {
    changeLoginedState (state, logined) {
      state.logined = logined
    }
  }
})
