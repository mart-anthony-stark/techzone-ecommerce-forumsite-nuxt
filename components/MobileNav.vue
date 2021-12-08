<template>
  <div class="mobile-nav bg-blue-500 fixed inset-0 grid place-items-center">
    <div class="links flex gap-12 flex-col items-center">
      <NuxtLink to="/home"
        ><button
          @click="$store.commit('global/toggleNav')"
          class="
            navlink
            text-white text-xl
            hover:border-b hover:border-blue-400
          "
        >
          Home
        </button></NuxtLink
      >
      <NuxtLink to="/shop"
        ><button
          @click="$store.commit('global/toggleNav')"
          class="
            navlink
            text-white text-xl
            hover:border-b hover:border-blue-400
          "
        >
          Shop
        </button></NuxtLink
      >
      <NuxtLink to="/order-tracker"
        ><button
          @click="$store.commit('global/toggleNav')"
          class="
            navlink
            text-white text-xl
            hover:border-b hover:border-blue-400
          "
        >
          Order Status
        </button></NuxtLink
      >
      <NuxtLink to="/contact-us"
        ><button
          @click="$store.commit('global/toggleNav')"
          class="
            navlink
            text-white text-xl
            hover:border-b hover:border-blue-400
          "
        >
          Contact us
        </button></NuxtLink
      >
    </div>
  </div>
</template>

<style scoped>
.mobile-nav {
  /* background: var(--c-pri-light); */
  z-index: 9;
}
a.nuxt-link-active[href='/'] {
  border: none !important;
}
a.nuxt-link-active {
  font-weight: bolder;
  border-bottom: 2px solid var(--c-accent);
  color: var(--c-accent);
}
</style>