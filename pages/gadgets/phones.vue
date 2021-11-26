<template>
  <div class="mt-24">
    <Subnav />
    <h1 class="font-extrabold text-center text-4xl mb-8 text-blue-500">
      PHONES
    </h1>
    <div class="flex justify-center">
      <div class="flex gap-8">
        <div
          v-for="(phone, i) in phones"
          :key="i"
          class="card rounded-lg border border-2 border-black p-4"
        >
          <div class="grid grid-cols-2">
            <img :src="phone.photo" />
            <h1 class="text-center font-extrabold text-2xl self-center">
              {{ phone.model }}
            </h1>
          </div>
          <button
            @click="$router.push(`/phone/${i}`)"
            class="view-btn uppercase text-white w-full py-2 rounded-lg"
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
    phones() {
      return this.$store.state.products.phones
    },
  },
}
</script>
<style scoped>
.view-btn {
  background: var(--c-pri);
}
</style>