export const state = () => ({
  cart: [
    {
      model: 'APPLE iPhone 11',
      photo: '/images/phones/1.svg',
      priceStr: '₱ 34,990.00',
      price: 34990.0,
      specs: ['4GB RAM', '64/128/256GB ROM', 'A13 Bionic', '4G Hexa Core'],
      description:
        'The iPhone 11 has an edge-to-edge display with slim bezels and no Home button, adopting a notch at the top for the TrueDepth camera system.',
    },
  ],
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
