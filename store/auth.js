export const state = () => ({
  isLogged: false,
})

export const mutations = {
  login(state) {
    state.isLogged = true
    console.log('login')
  },
  logout(state) {
    state.isLogged = false
  },
}
