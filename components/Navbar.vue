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
      <div v-if="isLogged" class="cart">
        <button class="cart-btn" @click="showCart = !showCart">
          <img src="/images/cart.svg" alt="cart icon" class="w-8" />
        </button>
        <span
          class="total-quantity bg-blue-500 flex items-center justify-center"
          >{{ cart.length }}</span
        >
        <div v-if="showCart" class="cart-dropdown">
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
              v-if="cart.length !== 0"
              class="text-white text-center py-2 bg-pri w-full mt-4"
              @click="gotoCheckout"
            >
              GOTO CART
            </button>
          </ul>
        </div>
      </div>

      <NuxtLink to="/profile"
        ><div
          v-if="isLogged"
          class="text-3xl user-profile grid place-items-center"
        >
          <fa icon="user" /></div
      ></NuxtLink>

      <button
        v-if="isLogged"
        class="logout-btn uppercase px-4 py-2 rounded-lg"
        @click="$emit('logout')"
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

      <button
        @click="$store.commit('global/toggleNav')"
        class="menu"
        :class="{ active: showMobileNav }"
      >
        <div class="bar"></div>
      </button>
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
  computed: {
    isLogged() {
      return this.$store.state.auth.isLogged
    },
    cart() {
      return this.$store.state.cart.cart
    },
    showMobileNav() {
      return this.$store.state.global.showMobileNav
    },
  },
  methods: {
    gotoCheckout() {
      this.showCart = false
      this.$router.push('/checkout')
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
  /* border: 1px solid white;
  height: 50px;
  width: 50px;
  border-radius: 50%; */
}
button.menu {
  height: 50px;
  width: 50px;
  border: 2px solid white;
  border-radius: 100%;
  place-items: center;
  display: none;
}
.menu .bar {
  width: 30px;
  height: 5px;
  border-radius: 3px;
  background: var(--c-accent);
  position: relative;
  transition: 0.5s ease-in-out;
}
.menu .bar::before {
  content: '';
  position: absolute;
  width: 29px;
  height: 5px;
  border-radius: 3px;
  background: var(--c-accent);
  transform: translateY(-10px);
  display: block;
  transition: 0.5s ease-in-out;
}
.menu .bar::after {
  content: '';
  width: 29px;
  height: 5px;
  border-radius: 3px;
  background: var(--c-accent);
  transform: translateY(10px);
  display: block;
  transition: 0.5s ease-in-out;
}

.menu.active .bar {
  background: transparent;
}
.menu.active .bar::before {
  transform: rotate(45deg);
}
.menu.active .bar::after {
  transform: rotate(-45deg);
}
@media (max-width: 951px) {
  .links,
  .logout-btn,
  .user-profile {
    display: none;
  }
  button.menu {
    display: grid;
  }
}
</style>