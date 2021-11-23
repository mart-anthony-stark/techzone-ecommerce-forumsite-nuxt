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
      z-50
    "
  >
    <div class="flex gap-24 items-center">
      <img src="/images/logo.svg" alt="TechZone Logo" class="w-32" />
      <div class="links flex gap-12">
        <NuxtLink to="/home">Home</NuxtLink>
        <NuxtLink to="/shop">Shop</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </div>
    </div>
    <div class="flex gap-8">
      <img src="/images/cart.svg" alt="cart icon" class="w-8" />
      <NuxtLink to="/" v-if="logged"
        ><button class="logout-btn uppercase px-4 py-2 rounded-lg">
          Logout
        </button></NuxtLink
      >
    </div>
  </nav>
</template>
<script>
export default {
  watch: {
    $route() {
      if (this.$route.path !== '/') this.logged = true
      else this.logged = false
    },
  },
  data() {
    return {
      logged: true,
    }
  },
}
</script>
<style scoped>
nav {
  background: var(--c-pri);
}
.logout-btn {
  background: var(--c-accent);
}
</style>