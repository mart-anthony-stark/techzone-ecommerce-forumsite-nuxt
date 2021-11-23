<template>
  <nav class="p-2 text-white flex items-center justify-between px-6 fixed top-0 w-full z-50">
    <div class="flex gap-24 items-center">
      <img src="/images/logo.svg" alt="TechZone Logo" class="w-32" />
      <div class="links flex gap-12">
        <NuxtLink to="/home">Home</NuxtLink>
        <NuxtLink to="/shop">Shop</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </div>
    </div>
    <img src="/images/cart.svg" alt="cart icon" class="w-8" />
  </nav>
</template>
<style scoped>
nav {
  background: var(--c-pri);
}
</style>