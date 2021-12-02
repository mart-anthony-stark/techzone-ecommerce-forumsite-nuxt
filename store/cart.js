export const state = () => ({
  cart: [],
})

export const mutations = {
  addToCart(state, item) {
    item.quantity = 1
    state.cart.push(item)
  },
  addQuantity(state, model) {
    state.cart = state.cart.map((item) => ({
      model: item.model,
      photo: item.photo,
      rating: item.rating,
      priceStr: item.priceStr,
      price: item.price,
      specs: item.specs,
      description: item.description,
      link: item.link,
      quantity: item.quantity + 1,
    }))
  },
  subtractQuantity(state, model) {
    state.cart.forEach((element) => {
      if (element.model === model) {
        if (element.quantity !== 0) element.quantity--
      }
    })
  },
  removeItem(state, model) {
    state.cart = state.cart.filter((item) => item.model !== model)
  },
}
