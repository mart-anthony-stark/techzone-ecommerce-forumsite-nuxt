<template>
  <div class="grid place-items-center min-h-screen">
    <div class="error flex flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="90"
        fill="#DBE1EC"
        viewBox="0 0 48 48"
      >
        <path
          d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
        ></path>
      </svg>
      <h1 class="text-3xl text-blue-300 font-extrabold">
        Oops! Something went wrong
      </h1>
      <div>
        <NuxtLink to="/home"
          ><button class="text-gray-400 text-xl mt-4 underline">
            Go back to Home
          </button></NuxtLink
        >
      </div>
    </div>
  </div>
</template>