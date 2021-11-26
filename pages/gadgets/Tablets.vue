<template>
  <div class="mt-24">
    <Subnav />
    <h1 class="font-extrabold text-center text-4xl mb-8 text-blue-500">
      TABLETS
    </h1>
    <div class="flex justify-center">
      <div class="flex gap-8">
        <div
          v-for="(tablet, i) in tablets"
          :key="i"
          class="card rounded-lg border border-2 border-black p-4"
        >
          <img :src="tablet.photo" />
          <h1 class="text-center font-extrabold text-2xl self-center">
            {{ tablet.model }}
          </h1>

          <button
            @click="$router.push(`/tablet/${i}`)"
            class="view-btn uppercase text-white w-full py-2 rounded-lg mt-4"
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
  computed: {
    tablets() {
      return this.$store.state.products.tablets
    },
  },
}
</script>
<style scoped>
.view-btn {
  background: var(--c-pri);
}
</style>