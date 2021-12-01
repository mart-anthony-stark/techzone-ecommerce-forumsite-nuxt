<template>
  <div class="mt-24">
    <transition name="slide-fade">
      <div
        v-show="showNotification"
        class="notification text-white px-4 py-2 fixed bottom-18 z-10 rounded"
      >
        {{ notification }}
      </div>
    </transition>

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
        <div class="flex stars">
          <fa v-for="star in item.rating" :key="star" icon="star" />
        </div>
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

    <!-- <div class="mt-4">
      <StarRate />
    </div> -->
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
    return {
      notification: 'Item already added to cart',
      showNotification: false,
    }
  },
  methods: {
    addThis() {
      const exist = this.cartItems.find((el) => el.model === this.item.model)

      if (!this.isAuth) {
        this.notification = 'You are currently logged out. Please login first'
      } else this.notification = 'Item already added to cart'

      if (!exist && this.isAuth) this.$store.commit('cart/addToCart', this.item)

      this.showNotification = true
      setTimeout(() => {
        this.showNotification = false
      }, 1500)
    },
  },
}
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.notification {
  background: var(--c-accent);
  left: 50%;
  transform: translateX(-50%);
}


</style>