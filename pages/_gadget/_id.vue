<template>
  <div class="mt-24">
    <div
      @click="$router.go(-1)"
      class="
        flex
        ml-8
        gap-2
        text-blue-500
        items-center
        cursor-pointer
        extrabold
      "
    >
      <img src="/images/icons/back.svg" />
      <h1>Back</h1>
    </div>

    <div class="card">
      <img :src="item.photo" />
      <h1 class="text-xl extrabold">{{ item.model }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    item() {
      const paths = this.$route.path.split('/').filter((p) => p !== '')
      const gadget = paths[0]
      const id = paths[1]
      return this.$store.state.products[`${gadget}s`][id]
    },
  },
  data() {
    return {}
  },
}
</script>