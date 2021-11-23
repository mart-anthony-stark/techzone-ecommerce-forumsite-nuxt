<template>
  <div class="mt-24">
    <Subnav />
    <h1 class="font-extrabold text-center text-4xl mb-8 text-blue-500">
      ACCESSORIES
    </h1>
    <div class="flex justify-center">
      <div class="flex gap-8">
        <div
          v-for="(accesorie, i) in accesories"
          :key="i"
          class="card rounded-lg border border-2 border-black p-4 flex flex-col gap-2 justify-center w-60"
        >
          <img :src="accesorie.photo" />
          <h1 class="text-center font-extrabold text-2xl self-center">
            {{ accesorie.model }}
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
      accesories: [
        {
          model: 'ANKER SoundCore Space NC B2B',
          photo: '/images/accessories/1.svg',
        },
        {
          model: 'DELUX M556BU Entry Level Gaming Mouse Cool Light',
          photo: '/images/accessories/2.svg',
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