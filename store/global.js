export const state = () => ({ showChatbox: false })

export const mutations = {
  toggle(state) {
    state.showChatbox = !state.showChatbox
  },
  close(state) {
    state.showChatbox = false
  },
}
