export const state = () => ({
  cart: [],
})

export const mutations = {
  addToCart(state, item) {
    item.quantity = 1
    state.push(item)
  },
  addItem(state, model) {
    state.cart.forEach((element) => {
      if (element.model === model) {
        element.quantity++
      }
    })
  },
}
