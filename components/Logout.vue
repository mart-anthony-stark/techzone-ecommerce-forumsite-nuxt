<template>
  <div>
    <div class="modal fixed z-50 bg-white flex flex-col gap-12">
      <h1 class="text-center text-xl font-bold">
        Are you sure you want to logout?
      </h1>
      <div class="flex gap-8">
        <button
          @click="$emit('yes')"
          class="bg-pri rounded-xl text-white py-2 px-24"
        >
          Yes
        </button>
        <button
          @click="$emit('no')"
          class="bg-sec rounded-xl text-white py-2 px-24"
        >
          No
        </button>
      </div>
    </div>
    <div class="overlay fixed inset-0 z-40"></div>
  </div>
</template>

<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.7);
}
.modal {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  animation: bounce-in 1s;
  z-index: 999;
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
    transform: scale(0) translate(-50%, -50%);
  }
  50% {
    transform: scale(1.2) translate(-50%, -50%);
  }
  100% {
    transform: scale(1) translate(-50%, -50%);
  }
}
</style>