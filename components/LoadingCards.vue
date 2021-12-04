<template>
  <div
    class="
      card
      p-12
      pb-20
      bg-gray-200
      rounded-lg
      flex flex-col
      gap-4
      relative
      justify-center
      align-center
    "
  >
    <h1 class="sktn"></h1>
    <p class="sktn"></p>
    <div class="bot mt-8 flex justify-between gap-8">
      <div class="circle sktn"></div>
      <div class="w-full flex flex-col gap-2">
        <div class="bar sktn"></div>
        <div class="bar sktn"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 500px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  cursor: progress;
}
.sktn {
  background: rgb(167, 167, 167);
  width: 100%;
  height: 20px;
  border-radius: 15px;
  background: linear-gradient(0.25turn, transparent, #fff, transparent),
    linear-gradient(rgb(189, 189, 189), rgb(189, 189, 189)),
    radial-gradient(
      38px circle at 19px 19px,
      rgb(189, 189, 189) 50%,
      transparent 51%
    ),
    linear-gradient(rgb(189, 189, 189), rgb(189, 189, 189));
  background-repeat: no-repeat;
  animation: loading 1.5s infinite;
}
p {
  height: 100px !important;
}
.circle {
  border-radius: 100%;
  width: 50px;
  height: 50px;
}
@keyframes loading {
  to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
}
</style>