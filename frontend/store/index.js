export const state = () => ({
  loading: false,
  loggedIn: false,
  users: [],
})

export const mutations = {
  SET_LOADING(state) {
    state.loading = !state.loading
  },

  SET_LOGIN(state) {
    state.loggedIn = true
  },

  SET_USERS(state, users) {
    state.users = users
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

  async getUsers({ commit }) {
    const users = await this.$axios.$get(`/users/`)
    commit('SET_USERS', users)
  },
}

export const getters = {}
