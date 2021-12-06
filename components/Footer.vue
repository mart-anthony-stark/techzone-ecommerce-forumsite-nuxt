<template>
  <footer
    class="
      p-12
      text-white
      bg-pri
      flex flex-col
      justify-center
      items-center
      relative
      mt-8
    "
  >
    <div class="flex gap-24 flex-wrap justify-center">
      <div class="flex flex-col">
        <h1 class="text-xl extrabold border-b mb-4">Shop</h1>
        <NuxtLink to="/gadgets/phones"
          ><button class="hover:text-blue-500 text-center">
            Phones
          </button></NuxtLink
        >
        <NuxtLink to="/gadgets/tablets"
          ><button class="hover:text-blue-500 text-center">
            Tablets
          </button></NuxtLink
        >
        <NuxtLink to="/gadgets/laptops"
          ><button class="hover:text-blue-500 text-center">
            Laptops
          </button></NuxtLink
        >
        <NuxtLink to="/gadgets/accessories"
          ><button class="hover:text-blue-500 text-center">
            Accesories
          </button></NuxtLink
        >
      </div>

      <div class="flex gap-24 justify-center">
        <div class="flex flex-col">
          <h1 class="text-xl extrabold border-b mb-4">Support</h1>
          <NuxtLink to="/gadgets/accessories"
            ><button class="hover:text-blue-500 text-center">
              Store Locator
            </button></NuxtLink
          >
          <NuxtLink to="/order-tracker"
            ><button class="hover:text-blue-500 text-center">
              Order Status
            </button></NuxtLink
          >
        </div>
      </div>

      <div class="flex flex-col">
        <h1 class="text-xl extrabold border-b mb-4">Company</h1>
        <NuxtLink to="/gadgets/accessories"
          ><button class="hover:text-blue-500 text-center">
            Customer Service
          </button></NuxtLink
        >
        <NuxtLink to="/gadgets/accessories"
          ><button class="hover:text-blue-500 text-center">
            Terms of Use
          </button></NuxtLink
        >
        <NuxtLink to="/about"
          ><button class="hover:text-blue-500 text-center">
            About
          </button></NuxtLink
        >
      </div>
    </div>
    <h1 class="mt-24">©2021 TechZone All Rights Reserved</h1>

    <img src="/images/logo.svg" alt="Tech Zone" class="w-30 absolute right-4" />
  </footer>
</template>

<style scoped>
</style>