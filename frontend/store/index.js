export const state = () => ({
  loading: false,
  loggedIn: false,
})

export const mutations = {
  SET_LOADING(state) {
    state.loading = !state.loading
  },

  SET_LOGIN(state) {
    state.loggedIn = true
  },
}

export const actions = {
  loginClient({ commit }) {
    commit('SET_LOADING')
    setTimeout(() => {
      commit('SET_LOADING')
      commit('SET_LOGIN')
    }, 3000)
  },
}

export const getters = {}
