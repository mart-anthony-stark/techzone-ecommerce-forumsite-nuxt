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
  data() {
    return {
      tablets: [
        { model: 'AMAZON Fire HD 10"', photo: '/images/tablets/1.svg' },
        {
          model: 'APPLE iPad 8 10.2" (2020) Wi-Fi',
          photo: '/images/tablets/2.svg',
        },
      ],
    }
  },
}
</script>
<style scoped>
.view-btn {
  background: var(--c-pri);
}
</style>