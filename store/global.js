export const state = () => ({ showChatbox: false, showMobileNav: false })

export const mutations = {
  toggleNav(state) {
    state.showMobileNav = !state.showMobileNav
  },
  toggle(state) {
    state.showChatbox = !state.showChatbox
  },
  close(state) {
    state.showChatbox = false
  },
}
