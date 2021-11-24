import { mapMutations } from 'vuex';
<template>
  <form
    @submit="handleLogin"
    class="flex flex-col bg-blue-500 text-white rounded-lg py-6 px-12"
  >
    <div class="flex items-center flex-col">
      <h1 class="text-3xl">Welcome Back!</h1>
      <h3 class="text-l">we’re excited to see you again</h3>
    </div>
    <div class="field flex flex-col gap-6 pt-8">
      <div class="w-full rounded text-black p-2 relative">
        <p
          v-if="errors.email !== ''"
          class="error text-white rounded p-2 absolute"
        >
          {{ errors.email }}<span></span>
        </p>
        <input
          v-model="email"
          class="w-full rounded text-black p-2"
          type="text"
          placeholder="Email"
        />
      </div>

      <div class="w-full rounded text-black p-2 relative">
        <p
          v-if="errors.password !== ''"
          class="error text-white rounded p-2 absolute"
        >
          {{ errors.password }}<span></span>
        </p>

        <input
          v-model="password"
          class="w-full rounded text-black p-2"
          type="password"
          placeholder="Password"
        />
      </div>
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
    return {
      success: true,
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    handleLogin(e) {
      e.preventDefault()
      if (this.email === '') this.errors.email = 'Email is required.'
      else this.errors.email = ''

      if (this.password === '') this.errors.password = 'Password is required.'
      else this.errors.password = ''

      this.success = this.errors.email === '' && this.errors.password === ''
      if (this.success) {
        this.$store.commit('auth/login')
        this.$router.push({ path: '/home' })
      }
    },
  },
}
</script>
<style scoped>
input {
  background: #f3f3f3;
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
.error {
  background: rgb(214, 46, 46);
  top: -30px;
  right: 10px;
}
.error span {
  position: absolute;
  right: 10px;
  bottom: -7px;
  height: 15px;
  width: 15px;
  background: rgb(214, 46, 46);
  transform: rotate(45deg);
}
</style>