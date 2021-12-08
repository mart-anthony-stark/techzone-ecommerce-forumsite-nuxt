<template>
  <div>
    <transition name="fade">
      <MobileNav v-if="showMobileNav" />
    </transition>

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
  computed: {
    showMobileNav() {
      return this.$store.state.global.showMobileNav
    },
  },
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

@keyframes loading {
  to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>