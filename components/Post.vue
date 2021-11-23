<template>
  <div>
    <div class="left absolute left-2 flex flex-col gap-2 items-center">
      <button @click="$emit('up', index)">
        <img
          v-if="liked"
          src="/images/cta/active-up-arrow.svg"
          class="w-6 text-blue-200"
        />
        <img v-else src="/images/cta/up-arrow.svg" class="w-6 text-blue-200" />
      </button>
      <span>{{ totalLikes }}</span>
      <button @click="$emit('down', index)">
        <img
          v-if="disliked"
          src="/images/cta/active-down-arrow.svg"
          class="w-6 text-blue-200"
        />
        <img
          v-else
          src="/images/cta/down-arrow.svg"
          class="w-6 text-blue-200"
        />
      </button>
    </div>
    <div class="right">
      <h1>{{ title }}</h1>
      <h3>{{ body }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    liked: Boolean,
    disliked: Boolean,
    totalLikes: Number,
    body: String,
    index: Number,
  },
}
</script>

<style scoped>
.card {
  /* min-width: 450px; */
  max-width: 500px;
  width: 100%;
}
.left {
  top: 50%;
  transform: translateY(-50%);
}
</style>