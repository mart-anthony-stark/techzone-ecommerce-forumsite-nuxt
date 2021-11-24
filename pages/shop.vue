<template>
  <div class="mt-24">
    <div class="grid grid-cols-2 grid-rows-2 gap-4 py-4">
      <div class="card mx-8 p-4 flex flex-col items-center">
        <img src="/images/gadgets/phones.svg" alt="mobile phones" />
        <h2 class="text-blue-500 text-2xl mb-2">Mobile Phones</h2>
        <NuxtLink to="/gadgets/phones">
          <button class="shop-btn text-white rounded-lg px-4 py-2">
            Shop Now
          </button>
        </NuxtLink>
      </div>
      <div class="card mx-8 p-4 flex flex-col items-center">
        <img src="/images/gadgets/tablets.svg" alt="mobile phones" />
        <h2 class="text-blue-500 text-2xl mb-2">Tablets</h2>
        <NuxtLink to="/gadgets/tablets">
          <button class="shop-btn text-white rounded-lg px-4 py-2">
            Shop Now
          </button>
        </NuxtLink>
      </div>
      <div class="card mx-8 p-4 flex flex-col items-center">
        <img src="/images/gadgets/laptops.svg" alt="mobile phones" />
        <h2 class="text-blue-500 text-2xl mb-2">Laptops</h2>
        <NuxtLink to="/gadgets/laptops">
          <button class="shop-btn text-white rounded-lg px-4 py-2">
            Shop Now
          </button>
        </NuxtLink>
      </div>
      <div class="card mx-8 p-4 flex flex-col items-center">
        <img src="/images/gadgets/accessories.svg" alt="mobile phones" />
        <h2 class="text-blue-500 text-2xl mb-2">Accessories</h2>
        <NuxtLink to="/gadgets/accessories">
          <button class="shop-btn text-white rounded-lg px-4 py-2">
            Shop Now
          </button>
        </NuxtLink>
      </div>
    </div>
    <Footer />
  </div>
</template>
<style scoped>
.shop-btn {
  background: var(--c-pri);
}
.card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border-radius: 25px;
}
</style>