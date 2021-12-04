<template>
  <div class="checkout-page mt-24 px-8">
    <h1 class="text-center text-5xl text-blue-500">Checkout</h1>
    <div class="flex gap-24 flex-wrap justify-center mt-8 align-start">
      <div class="my-cart shadow bg-gray-200 p-8 rounded-lg">
        <h1 class="text-xl bold underline">My Cart</h1>
        <div
          v-if="products.length === 0"
          class="
            text-center
            font-extrabold
            text-xl
            flex
            items-center
            justify-center
            h-full
            w-full
          "
        >
          You have no items in cart
        </div>
        <div
          v-for="(product, i) in products"
          :key="i"
          class="card flex pt-8 gap-4 mt-4 p-4 items-center relative"
        >
          <span
            @click="remove(product)"
            class="cursor-pointer text-xl absolute top-1 right-2"
            >X</span
          >
          <img :src="product.photo" class="w-28" />
          <div class="flex flex-col">
            <h1 class="bold underline">{{ product.model }}</h1>
            <h3>{{ product.priceStr }}</h3>
            <div class="mt-4">
              <span>Quantity:</span>
              <button
                @click="subtractQuantity(product)"
                class="decr-btn p-2 rounded"
              >
                -
              </button>
              <span class="mx-2">{{ product.quantity }}</span>
              <button
                @click="addQuantity(product)"
                class="incr-btn p-2 rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="total-card shadow p-8 bg-gray-200 rounded-lg">
        <h1 class="text-xl bold mb-4 underline">TOTAL</h1>
        <div class="flex justify-between mb-4">
          <h5>Sub-total</h5>
          <span>₱ {{ formattedSubTotal }}</span>
        </div>
        <div class="flex justify-between mb-4">
          <h5>Delivery</h5>
          <span>0</span>
        </div>
        <select class="w-full p-2 bg-transparent">
          <option value="standard" class="p-4" selected>
            Standard Delivery Charge
          </option>
        </select>

        <button class="bg-pri text-white w-full py-2 mt-4">CHECKOUT</button>
        <img class="mt-8" src="/images/payment-gateways.png" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkout-page {
  min-height: 100vh;
}
option {
  padding: 5px;
}
</style>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    products() {
      return this.$store.state.cart.cart
    },
    subTotal() {
      return this.products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      )
    },
    formattedSubTotal() {
      return this.subTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  },
  methods: {
    remove(product) {
      this.$store.commit('cart/removeItem', product.model)
    },
    addQuantity(product) {
      this.$store.commit('cart/addQuantity', product.model)
    },
    subtractQuantity(product) {
      this.$store.commit('cart/subtractQuantity', product.model)
    },
  },
}
</script>

<style scoped>
.shadow {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
}
.card {
  border: 1px solid gray;
}
.decr-btn,
.incr-btn {
  border: 1px solid var(--c-pri);
}
.decr-btn:hover,
.incr-btn:hover {
  background: var(--c-pri);
  color: white;
}
.total-card {
  max-width: 300px;
  width: 100%;
  max-height: 350px;
}
.my-cart {
  max-width: 600px;
  width: 100%;
}
select {
  border: 1px solid black;
}
</style>