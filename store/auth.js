export const state = () => ({
  isLogged: false,
})

export const mutations = {
  login(state) {
    state.isLogged = true
  },
  logout(state) {
    state.isLogged = false
  },
}
