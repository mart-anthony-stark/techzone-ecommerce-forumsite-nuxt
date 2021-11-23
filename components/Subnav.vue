<template>
  <div class="subnav">
    <NuxtLink to="/gadgets/phones">
      <button class="link-btn text-white rounded-xl px-4 py-2">
        Mobile Phones
      </button></NuxtLink
    >
    <NuxtLink to="/gadgets/laptops">
      <button class="link-btn text-white rounded-xl px-4 py-2">
        Laptops
      </button></NuxtLink
    >
    <NuxtLink to="/gadgets/tablets"
      ><button class="link-btn text-white rounded-xl px-4 py-2">
        Tablets
      </button></NuxtLink
    >
    <NuxtLink to="/gadgets/accessories"
      ><button class="link-btn text-white rounded-xl px-4 py-2">
        Accessories
      </button></NuxtLink
    >
  </div>
</template>
<script>
export default {
  watch: {
    $route() {
      const route = this.$route.split('/')[2]
      console.log('route', route)
    },
  },
}
</script>
<style scoped>
.link-btn {
  background: var(--c-pri);
}
</style>