<template>
  <div class="mt-4 grid grid-cols-2 items-center min-h-screen">
    <div class="flex flex-col items-center justify-center">
      <img :src="displaySvg" class="w-3/5" />
      <div>
        <h1 class="pri text-center font-extrabold text-5xl">TechZone</h1>
        <span class="text-blue-500 block text-center font-thin"
          >Connecting people and technology</span
        >
      </div>
    </div>
    <div class="flex items-center justify-center">
      <component :is="component" @changeForm="changeForm" />
    </div>
    <img src="/images/blob.svg" class="blob fixed top-0 right-0" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      component: 'Login',
      displaySvg: '/images/space-tech.svg',
    }
  },
  methods: {
    changeForm(form) {
      this.component = form
      if (form === 'Login') this.displaySvg = '/images/space-tech.svg'
      else this.displaySvg = '/images/gadgets.svg'
    },
  },
}
</script>

<style scoped>
.pri {
  color: var(--c-pri);
}
.blob {
  /* top: -50px; */
  z-index: -1;
}
</style>