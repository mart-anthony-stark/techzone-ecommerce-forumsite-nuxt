<template>
  <div class="home mt-24">
    <CreatePost v-if="createShown" @closeCreatePost="createShown = false" />
    <h1 class="font-bold text-center text-4xl mb-8 text-blue-500">
      Tech Forum
    </h1>

    <!-- SEARCH BAR -->
    <div class="flex justify-center gap-20 flex-wrap mb-8 relative">
      <div class="search-container flex relative rounded-lg">
        <input
          v-model="search"
          class="search rounded-lg py-2 px-4 bg-transparent w-full"
          type="text"
          placeholder="Search topics..."
        />
        <img
          class="absolute right-4 w-8 top-1"
          src="/images/search.svg"
          alt="search topics"
        />
      </div>
    </div>

    <div class="mb-8 flex justify-end pr-20">
      <button
        class="post-btn bg-pri rounded text-white extrbold px-6 py-2"
        @click="createShown = true"
      >
        + Create new post
      </button>
    </div>

    <div class="px-20 flex gap-20 flex-wrap justify-center pb-8">
      <LoadingCards v-for="(loader, i) in loaders" v-show="loading" :key="i" />

      <div
        v-for="(post, i) in filteredPost"
        :key="post.body"
        class="
          card
          p-12
          pb-20
          bg-gray-200
          rounded-lg
          flex
          gap-4
          relative
          justify-center
          align-center
        "
      >
        <Post
          :title="post.title"
          :liked="post.liked"
          :total-likes="post.totalLikes"
          :disliked="post.disliked"
          :body="post.body"
          :index="i"
          :author="post.author"
          :dp="post.authorProfile"
          :total-comments="post.totalComments"
          @up="up"
          @down="down"
        />
      </div>
      <Noresult v-if="filteredPost.length === 0 && !loading" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      createShown: false,
      search: '',
      loading: true,
      loaders: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts
    },
    filteredPost() {
      const regex = new RegExp(this.search, 'i')
      return this.posts.filter((post) => {
        return (
          post.title.match(regex) ||
          post.body.match(regex) ||
          post.author.match(regex)
        )
      })
    },
  },
  async mounted() {
    // this.$axios
    //   .$get('/data/posts.json')
    //   .then((data) => )
    const res = await fetch('/data/posts.json')
    const data = await res.json()

    this.$store.commit('posts/populate', data)

    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  methods: {
    up(index) {
      this.$store.commit('posts/up', index)
    },
    down(index) {
      this.$store.commit('posts/down', index)
    },
  },
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}
.card {
  max-width: 500px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
.left {
  top: 50%;
  transform: translateY(-50%);
}
input.search::placeholder {
  color: black;
}
.arrow-liked {
  fill: var(--c-pri);
}
.arrow-disliked {
  fill: var(--c-accent);
}
.search-container {
  max-width: 600px;
  width: 100%;
  background: #e5e5e5;
}
</style>