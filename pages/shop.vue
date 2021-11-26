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

    <!-- SLIDER -->
    <h1 class="text-blue-500 text-5xl mt-24 mb-12 text-center extrabold">
      Featured Products
    </h1>
    <div class="flex gap-24 justify-around flex-wrap mb-24 px-8">
      <div
        v-for="(phone, i) in phones"
        :key="i"
        class="grid flex-col gap-4 w-60 place-items-center justify-center"
      >
        <img :src="phone.photo" class="h-60" />
        <h1 class="extrabold">{{ phone.model }}</h1>
        <button
          class="product-btn bg-pri text-white py-2 rounded w-full w-inherit"
        >
          VIEW PRODUCT
        </button>
      </div>
      <div
        v-for="(tablet, i) in tablets"
        :key="i"
        class="grid flex-col gap-4 w-60 place-items-center justify-end"
      >
        <img :src="tablet.photo" class="h-60" />
        <h1 class="extrabold">{{ tablet.model }}</h1>
        <button
          class="product-btn bg-pri text-white py-2 rounded w-full w-inherit"
        >
          VIEW PRODUCT
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    laptops() {
      return this.$store.state.products.laptops
    },
    phones() {
      return this.$store.state.products.phones
    },
    tablets() {
      return this.$store.state.products.tablets
    },
    accessories() {
      return this.$store.state.products.accessories
    },
  },
}
</script>

<style scoped>
.shop-btn {
  background: var(--c-pri);
}
.shop-btn:hover {
  background: var(--c-accent);
}
.card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border-radius: 25px;
}
.product-btn {
  width: inherit;
}
</style>