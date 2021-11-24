<template>
  <div>
    <div class="modal fixed z-50 bg-white flex flex-col gap-4">
      <span
        @click="$emit('closeCreatePost')"
        class="
          x-btn
          cursor-pointer
          absolute
          right-4
          top-2
          grid
          place-items-center
          extrabold
          text-white
        "
        >X</span
      >
      <h1 class="text-center text-lg bold">Create Post</h1>
      <input type="text" placeholder="Title" />
      <textarea placeholder="What's on your mind?"></textarea>
      <button class="bg-pri text-white py-2">POST</button>
    </div>
    <div class="overlay fixed inset-0 z-40"></div>
  </div>
</template>

<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.7);
}
.modal {
  left: 50%;
  transform: translateX(-50%);
  padding: 25px;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  animation: bounce-in 1s;
  z-index: 999;
}
textarea {
  resize: none;
  min-height: 200px;
}
.x-btn {
  background: var(--c-accent);
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0) translateX(-50%);
  }
  50% {
    transform: scale(1.2) translateX(-50%);
  }
  100% {
    transform: scale(1) translateX(-50%);
  }
}
</style>