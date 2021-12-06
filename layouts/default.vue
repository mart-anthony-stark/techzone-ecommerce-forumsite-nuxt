<template>
  <div>
    <Navbar @logout="showLogout = true" />
    <Logout v-if="showLogout" @yes="logout" @no="showLogout = false" />
    <div>
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLogout: false,
    }
  },
  methods: {
    logout() {
      this.showLogout = false
      this.$store.commit('auth/logout')
      this.$router.push({ path: '/' })
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
:root {
  --c-pri: #031b89;
  --c-pri-light: #1e3ab8;
  --c-accent: #b671e8;
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  width: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--c-pri-light);
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--c-pri);
}
body {
  font-family: 'Roboto', sans-serif;
}
.bg-pri {
  background: var(--c-pri);
}
.bg-sec {
  background: var(--c-accent);
}
.text-pri {
  color: var(--c-pri);
}
.text-sec {
  color: var(--c-accent);
}
.section {
  min-height: 100vh;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
.stars {
  color: rgb(224, 132, 28);
}
.font-extrabold {
  font-weight: 600 !important;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>