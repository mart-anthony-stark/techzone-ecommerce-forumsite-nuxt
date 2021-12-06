<template>
  <div class="mt-24">
    <Chat v-if="isLogged" />
    <transition name="slide-fade">
      <div
        v-show="showNotification"
        class="notification text-white px-4 py-2 fixed bottom-18 z-10 rounded"
      >
        {{ notification }}
      </div>
    </transition>

    <div
      class="
        flex
        ml-8
        gap-2
        text-blue-500
        items-center
        cursor-pointer
        extrabold
      "
      @click="back"
    >
      <img src="/images/icons/back.svg" />
      <h1>Back</h1>
    </div>

    <div
      class="container grid grid-cols-2 place-items-center"
      @click="$store.commit('global/close')"
    >
      <img :src="item.photo" />

      <div class="card p-12">
        <h1 class="text-xl extrabold">{{ item.model }}</h1>
        <h3>{{ item.priceStr }}</h3>
        <div class="flex stars">
          <fa v-for="star in item.rating" :key="star" icon="star" />
        </div>
        <p class="mt-8">{{ item.description }}</p>
        <div class="mt-6">
          <h2 class="text-blue-500 text-lg">Specifications:</h2>
          <h3 v-for="bullet in item.specs" :key="bullet">{{ bullet }}</h3>
        </div>
        <button
          class="bg-pri text-white px-12 py-2 rounded mt-4"
          @click="addThis"
        >
          Add to cart
        </button>
      </div>
    </div>

    <!-- <div class="mt-4">
      <StarRate />
    </div> -->
    <!-- REVIEWS -->
    <div class="flex flex-col items-center">
      <div class="reviews-cont mt-8">
        <h2 class="text-blue-500 text-3xl mb-4">Customer Reviews</h2>
        <div
          v-for="(review, i) in reviews"
          v-show="!loading"
          :key="i"
          class="review mb-8 p-4 rounded-xl"
        >
          <div class="flex gap-4 items-center">
            <div class="text-3xl text-sec"><fa icon="user" /></div>
            <h3 class="font-bold text-xl">{{ review.name }}</h3>
          </div>
          <div class="stars">
            <fa v-for="star in review.rating" :key="star" icon="star" />
          </div>
          <p>{{ review.body }}</p>
        </div>

        <div
          v-for="(loader, i) in loaders"
          v-show="loading"
          :key="i"
          class="review mb-8 p-4 rounded-xl"
        >
          <div id="rating" class="sktn"></div>
          <h3 class="sktn"></h3>
          <p class="sktn"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notification: 'Item already added to cart',
      showNotification: false,
      reviews: [],
      loaders: 5,
      loading: true,
    }
  },

  computed: {
    isLogged() {
      return this.$store.state.auth.isLogged
    },
    item() {
      const paths = this.$route.path.split('/').filter((p) => p !== '')
      const gadget = paths[0]
      const id = paths[1]
      return this.$store.state.products[`${gadget}s`][id]
    },
    cartItems() {
      return this.$store.state.cart.cart
    },
    isAuth() {
      return this.$store.state.auth.isLogged
    },
  },

  async mounted() {
    const res = await fetch('/data/reviews.json')
    const data = await res.json()

    this.reviews = data

    setTimeout(() => {
      this.loading = false
    }, 1500)
  },

  methods: {
    addThis() {
      const exist = this.cartItems.find((el) => el.model === this.item.model)

      if (!this.isAuth) {
        this.notification = 'You are currently logged out. Please login first'
      } else this.notification = 'Item already added to cart'

      if (!exist && this.isAuth) this.$store.commit('cart/addToCart', this.item)

      this.showNotification = true
      setTimeout(() => {
        this.showNotification = false
      }, 1500)
    },
    back() {
      this.$store.commit('global/close')
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.notification {
  background: var(--c-accent);
  left: 50%;
  transform: translateX(-50%);
}

.reviews-cont {
  max-width: 500px;
  width: 100%;
}

.review {
  max-width: 500px;
  width: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

#rating {
  max-width: 100px;
}

.sktn {
  margin-bottom: 10px;
}

@media (max-width: 634px) {
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>