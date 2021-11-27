<template>
  <div class="mt-24">
    <div
      @click="$router.go(-1)"
      class="
        flex
        ml-8
        gap-2
        text-blue-500
        items-center
        cursor-pointer
        extrabold
      "
    >
      <img src="/images/icons/back.svg" />
      <h1>Back</h1>
    </div>

    <div class="container grid grid-cols-2 place-items-center">
      <img :src="item.photo" />
      <div class="card p-12 pl-0">
        <h1 class="text-xl extrabold">{{ item.model }}</h1>
        <h3>{{ item.priceStr }}</h3>
        <p class="mt-8">{{ item.description }}</p>
        <div class="mt-6">
          <h2 class="text-blue-500 text-lg">Specifications:</h2>
          <h3 v-for="bullet in item.specs" :key="bullet">{{ bullet }}</h3>
        </div>
        <button
          @click="addThis"
          class="bg-pri text-white px-12 py-2 rounded mt-4"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    item() {
      const paths = this.$route.path.split('/').filter((p) => p !== '')
      const gadget = paths[0]
      const id = paths[1]
      return this.$store.state.products[`${gadget}s`][id]
    },
    cartItems() {
      return this.$store.state.cart.cart
    },
    isAuth() {
      return this.$store.state.auth.isLogged
    },
  },
  data() {
    return {}
  },
  methods: {
    addThis() {
      const exist = this.cartItems.find((el) => el.model === this.item.model)

      if (!this.isAuth) return
      if (exist) {
        console.log('already in cart')
      } else {
        this.$store.commit('cart/addToCart', this.item)
      }
    },
  },
}
</script>