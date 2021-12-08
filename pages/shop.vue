<template>
  <div class="mt-24">
    <h1 class="font-bold text-center text-4xl mb-8 text-sec">Gadget Shop</h1>
    <div class="banner">
      <div class="flex flex-col items-center justify-center">
        <div class="gadget-slider" id="slider">
          <figure>
            <img src="/images/phones.png" id="phones" />
            <img src="/images/laptops.png" id="phones" />
            <img src="/images/tablets.png" id="phones" />
          </figure>
        </div>
      </div>
    </div>

    <div id="categories" class="pb-8 text-center text-sec text-5xl mt-12">
      Categories
    </div>

    <div class="flex justify-center">
      <div class="categories grid grid-cols-4 grid-rows-1 gap-2 py-4">
        <NuxtLink to="/gadgets/phones">
          <div class="card mx-8 p-4 flex flex-col items-center">
            <img src="/images/gadgets/phones.svg" alt="mobile phones" />
            <h2 class="font-extrabold text-blue-500 text-2xl mb-2">
              Mobile Phones
            </h2>
            <button class="shop-btn text-white rounded-lg px-4 py-2">
              Shop Now
            </button>
          </div>
        </NuxtLink>
        <NuxtLink to="/gadgets/tablets">
          <div class="card mx-8 p-4 flex flex-col items-center">
            <img src="/images/gadgets/tablets.svg" alt="mobile phones" />
            <h2 class="font-extrabold text-blue-500 text-2xl mb-2">Tablets</h2>
            <button class="shop-btn text-white rounded-lg px-4 py-2">
              Shop Now
            </button>
          </div>
        </NuxtLink>
        <NuxtLink to="/gadgets/laptops">
          <div class="card mx-8 p-4 flex flex-col items-center">
            <img src="/images/gadgets/laptops.svg" alt="mobile phones" />
            <h2 class="font-extrabold text-blue-500 text-2xl mb-2">Laptops</h2>
            <button class="shop-btn text-white rounded-lg px-4 py-2">
              Shop Now
            </button>
          </div>
        </NuxtLink>
        <NuxtLink to="/gadgets/accessories">
          <div class="card mx-8 p-4 flex flex-col items-center">
            <img src="/images/gadgets/accessories.svg" alt="mobile phones" />
            <h2 class="font-extrabold text-blue-500 text-2xl mb-2">
              Accessories
            </h2>
            <button class="shop-btn text-white rounded-lg px-4 py-2">
              Shop Now
            </button>
          </div>
        </NuxtLink>
      </div>
    </div>

    <NuxtLink to="/gadgets/all">
      <h1 class="mt-4 text-center text-red-400 text-xl font-extrabold">
        View All Products
      </h1>
    </NuxtLink>

    <!-- SLIDER -->
    <h1 class="text-sec text-5xl mt-24 mb-12 text-center extrabold">
      Featured Products
    </h1>
    <div class="flex gap-24 justify-around flex-wrap mb-24 px-8">
      <div
        v-for="phone in phones"
        :key="phone.model"
        class="grid flex-col gap-4 w-60 place-items-center justify-center"
      >
        <img :src="phone.photo" class="h-60" />
        <h1 class="extrabold">{{ phone.model }}</h1>
        <div class="self-end w-full">
          <div class="flex stars justify-center">
            <fa v-for="star in phone.rating" :key="star" icon="star" />
          </div>

          <button
            class="
              product-btn
              mt-2
              bg-pri
              text-white
              py-2
              rounded
              uppercase
              w-full w-inherit
            "
            @click="$router.push(`${phone.link}`)"
          >
            view product
          </button>
        </div>
      </div>
      <div
        v-for="tablet in tablets"
        :key="tablet.model"
        class="grid flex-col gap-4 w-60 place-items-center justify-end"
      >
        <img :src="tablet.photo" class="h-60" />
        <h1 class="extrabold">{{ tablet.model }}</h1>
        <div class="self-end w-full">
          <div class="flex stars justify-center">
            <fa v-for="star in tablet.rating" :key="star" icon="star" />
          </div>

          <button
            class="
              product-btn
              mt-2
              bg-pri
              text-white
              py-2
              rounded
              uppercase
              w-full w-inherit
            "
            @click="$router.push(`${tablet.link}`)"
          >
            view product
          </button>
        </div>
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
/* SLIDER */
#slider {
  position: relative;
  height: 300px;
  max-width: 600px;
  width: 100%;
  overflow: hidden;
}
#slider figure {
  position: relative;
  width: 300%;
  left: 0;
  overflow: hidden;
  animation: 10s slider infinite ease-in-out;
}
#slider figure img {
  width: calc(100% / 3);
  height: 300px;
  float: left;
  transition: 0.5s ease-in-out;
}
@keyframes slider {
  0% {
    left: 0;
  }
  20% {
    left: 0;
  }
  25% {
    left: -100%;
  }
  45% {
    left: -100%;
  }
  60% {
    left: -200%;
  }
  90% {
    left: -200%;
  }
}
.shop-btn {
  background: var(--c-pri);
  width: 100%;
}
.banner h3 {
  font-family: 'Open Sans', sans-serif;
}
.banner a {
  width: max-content;
}
.shop-btn:hover {
  background: var(--c-accent);
}
.card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.card:hover img {
  transform: scale(1.2);
  z-index: -1;
  transition: 0.5s ease;
}
.product-btn {
  width: 100%;
}
.grid-container {
  /* max-width: 600px; */
}
#phones {
  max-width: 600px;
}
@media (max-width: 1075px) {
  .categories {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>