export const state = () => ({
  cart: [],
})

export const mutations = {
  addToCart(state, item) {
    item.quantity = 1
    state.cart.push(item)
  },
  addQuantity(state, model) {
    state.cart.forEach((element) => {
      if (element.model === model) {
        element.quantity++
      }
    })
  },
  removeItem(state, model) {
    state.cart = state.cart.filter((item) => item.model !== model)
  },
}
