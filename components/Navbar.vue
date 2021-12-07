<template>
  <nav
    class="
      p-2
      text-white
      flex
      items-center
      justify-between
      px-6
      fixed
      top-0
      w-full
    "
  >
    <div class="flex gap-24 items-center">
      <img src="/images/logo.svg" alt="TechZone Logo" class="w-32" />
      <div class="links flex gap-12">
        <NuxtLink to="/home"
          ><button class="navlink hover:border-b hover:border-blue-400">
            Home
          </button></NuxtLink
        >
        <NuxtLink to="/shop"
          ><button class="navlink hover:border-b hover:border-blue-400">
            Shop
          </button></NuxtLink
        >
        <NuxtLink to="/order-tracker"
          ><button class="navlink hover:border-b hover:border-blue-400">
            Order Status
          </button></NuxtLink
        >
        <NuxtLink to="/contact-us"
          ><button class="navlink hover:border-b hover:border-blue-400">
            Contact us
          </button></NuxtLink
        >
      </div>
    </div>
    <div class="flex gap-8 items-center">
      <div class="cart" v-if="isLogged">
        <button class="cart-btn" @click="showCart = !showCart">
          <img src="/images/cart.svg" alt="cart icon" class="w-8" />
        </button>
        <span
          class="total-quantity bg-blue-500 flex items-center justify-center"
          >{{ cart.length }}</span
        >
        <div class="cart-dropdown" v-if="showCart">
          <ul>
            <li
              v-for="(product, i) in cart"
              :key="i"
              class="flex flex-col items-center"
            >
              <img :src="product.photo" class="w-8" />
              <h1 class="text-center">{{ product.model }}</h1>
            </li>
            <h2 v-if="cart.length === 0" class="text-center font-extrabold">
              No Products Yet
            </h2>
            <button
              @click="gotoCheckout"
              v-if="cart.length !== 0"
              class="text-white text-center py-2 bg-pri w-full mt-4"
            >
              GOTO CART
            </button>
          </ul>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <NuxtLink to="/"
          ><div
            v-if="isLogged"
            class="text-3xl user-profile grid place-items-center"
          >
            <fa icon="user" /></div
        ></NuxtLink>

        <button
          class="logout-btn uppercase px-4 py-2 rounded-lg"
          @click="$emit('logout')"
          v-if="isLogged"
        >
          Logout
        </button>

        <NuxtLink to="/"
          ><button
            v-if="!isLogged"
            class="logout-btn uppercase px-4 py-2 rounded-lg"
          >
            Login
          </button></NuxtLink
        >
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      logged: true,
      showCart: false,
    }
  },
  methods: {
    gotoCheckout() {
      this.showCart = false
      this.$router.push('/checkout')
    },
  },
  computed: {
    isLogged() {
      return this.$store.state.auth.isLogged
    },
    cart() {
      return this.$store.state.cart.cart
    },
  },
}
</script>
<style scoped>
nav {
  background: var(--c-pri);
  z-index: 100;
}
.navlink:hover {
  color: var(--c-accent);
}
.logout-btn {
  background: var(--c-accent);
  color: white !important;
  border: none !important;
}
/* CART */
.cart {
  position: relative;
}
.cart .cart-btn {
  cursor: pointer;
  padding: 3px;
  font-size: 25px;
  border-radius: 50%;
  outline: none;
  border: none;
}
.total-quantity {
  position: absolute;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  right: -15px;
  top: -5px;
}
.cart-dropdown {
  position: absolute;
  background: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  color: #333;
  font-size: 1.2rem;
  padding: 1rem 1rem;
  right: 0;
  min-width: 20rem;
  overflow: auto;
}
.cart-dropdown ul {
  display: flex;
  flex-direction: column;
}

a.nuxt-link-active[href='/'] {
  border: none !important;
}
a.nuxt-link-active {
  font-weight: bolder;
  border-bottom: 2px solid var(--c-accent);
  color: var(--c-accent);
}
.user-profile {
  border: 1px solid white;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
@media (max-width: 895px) {
  .links {
    display: none;
  }
}
</style>