import { mapMutations } from 'vuex';
<template>
  <form
    @submit="handleLogin"
    class="flex flex-col bg-blue-500 text-white rounded-lg py-8 px-12"
  >
    <div class="flex items-center flex-col">
      <h1 class="text-3xl">Welcome Back!</h1>
      <h3 class="text-l">we’re excited to see you again</h3>
    </div>
    <div class="field flex flex-col gap-8 pt-8">
      <input
        class="rounded text-black p-2"
        type="text"
        placeholder="Username"
      />
      <input
        class="rounded text-black p-2"
        type="password"
        placeholder="Password"
      />
    </div>
    <span class="pt-2 cursor-pointer">Forgot Password</span>
    <button class="uppercase text-white w-full py-2 mt-4">login</button>
    <div class="cursor-pointer flex items-center mt-4">
      <input id="remember" type="checkbox" class="mr-2 h-4 w-4 rounded" />
      <label for="remember">Remember me</label>
    </div>

    <h1 class="mt-2 text-center">
      Doesn’t have an account?<span
        class="switch-btn pri cursor-pointer font-bold underline ml-2"
        @click="$emit('changeForm', 'Signup')"
        >Signup</span
      >
    </h1>
  </form>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleLogin(e) {
      e.preventDefault()
      this.$store.commit('auth/login')
      this.$router.push({ path: '/home' })
    },
  },
}
</script>
<style scoped>
input {
  background: #c4c4c4;
}
input::placeholder {
  color: black;
}
.pri {
  color: var(--c-pri);
}
button {
  border-radius: 25px;
  background: var(--c-pri);
}
</style>