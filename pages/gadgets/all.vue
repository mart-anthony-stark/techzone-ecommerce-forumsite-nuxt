<template>
  <div class="mt-24">
    <Subnav />
    <h1 class="font-extrabold text-center text-4xl mb-8 text-blue-500">
      TECH SHOP
    </h1>
    <div class="flex justify-center">
      <div class="flex gap-8 flex-wrap px-8 justify-center">
        <div
          v-for="(product, i) in products"
          :key="i"
          class="
            card
            rounded-lg
            border border-2 border-black
            p-4
            grid
            gap-2
            justify-center
            w-60
          "
        >
          <img :src="product.photo" />
          <h1 class="text-center font-extrabold text-2xl self-center">
            {{ product.model }}
          </h1>

          <div class="self-end">
            <div class="flex stars justify-center">
              <fa v-for="star in product.rating" :key="star" icon="star" />
            </div>

            <button
              @click="$router.push(`${product.link}`)"
              class="view-btn uppercase text-white w-full py-2 rounded-lg mt-4"
            >
              view product
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    phones() {
      return this.$store.state.products.phones
    },
    laptops() {
      return this.$store.state.products.laptops
    },
    tablets() {
      return this.$store.state.products.tablets
    },
    accessories() {
      return this.$store.state.products.accessories
    },
    products() {
      return [
        ...this.phones,
        ...this.laptops,
        ...this.accessories,
        ...this.tablets,
      ]
    },
  },
}
</script>
<style scoped>
.view-btn {
  background: var(--c-pri);
}
.card img {
  height: 200px;
}
.card button {
  height: 40px;
}
</style>