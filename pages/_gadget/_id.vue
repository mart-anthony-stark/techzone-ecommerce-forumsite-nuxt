<template>
  <div class="mt-24">
    <div @click="$router.go(-1)">Back</div>
    <div class="card">
      <img :src="item.photo" />
      {{ item.model }}
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
  beforeCreate() {
    // const paths = this.$route.path.split('/').filter((p) => p !== '')
    // console.log(this.$store.state.products.laptops)
    // this.item = this.$store.state.products[paths[0]]
  },
}
</script>