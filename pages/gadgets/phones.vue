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
          <button class="view-btn uppercase text-white w-full py-2 rounded-lg">
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
      phones: [
        { model: 'APPLE iPhone 11', photo: '/images/phones/1.svg' },
        {
          model: 'SAMSUNG Galaxy A72',
          photo: '/images/phones/2.svg',
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