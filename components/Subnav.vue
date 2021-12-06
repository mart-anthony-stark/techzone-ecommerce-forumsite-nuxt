<template>
  <div class="flex justify-center">
    <div class="subnav flex flex-wrap justify-center items-center gap-2 mb-8">
      <NuxtLink to="/gadgets/all">
        <button class="link-btn rounded-xl px-4 py-2">All</button></NuxtLink
      >
      <NuxtLink to="/gadgets/phones">
        <button class="link-btn rounded-xl px-4 py-2">
          Mobile Phones
        </button></NuxtLink
      >
      <NuxtLink to="/gadgets/laptops">
        <button class="link-btn rounded-xl px-4 py-2">Laptops</button></NuxtLink
      >
      <NuxtLink to="/gadgets/tablets"
        ><button class="link-btn rounded-xl px-4 py-2">
          Tablets
        </button></NuxtLink
      >
      <NuxtLink to="/gadgets/accessories"
        ><button class="link-btn rounded-xl px-4 py-2">
          Accessories
        </button></NuxtLink
      >
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.link-btn {
  border: 2px solid var(--c-pri);
  color: var(--c-pri);
}
.link-btn:hover {
  border: 2px solid var(--c-pri);
  background: var(--c-pri);
  color: white;
}
a.nuxt-link-active button {
  color: white !important;
  background: var(--c-pri) !important;
}
</style>