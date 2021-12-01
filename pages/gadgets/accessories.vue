<template>
  <div class="mt-24">
    <Subnav />
    <h1 class="font-extrabold text-center text-4xl mb-8 text-blue-500">
      ACCESSORIES
    </h1>
    <div class="flex justify-center">
      <div class="flex gap-8 flex-wrap px-8 justify-center">
        <div
          v-for="(accessorie, i) in accessories"
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
          <img :src="accessorie.photo" />
          <h1 class="text-center font-extrabold text-2xl self-center">
            {{ accessorie.model }}
          </h1>

          <div class="self-end">
            <div class="flex stars justify-center">
              <fa v-for="star in accessorie.rating" :key="star" icon="star" />
            </div>

            <button
              @click="$router.push(`/accessorie/${i}`)"
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
    accessories() {
      return this.$store.state.products.accessories
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