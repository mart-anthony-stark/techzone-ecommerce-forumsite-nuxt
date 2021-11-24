<template>
  <div class="home mt-24">
    <h1 class="font-extrabold text-center text-4xl mb-8 text-blue-500">
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
      <button class="post-btn bg-pri rounded text-white extrbold px-6 py-2">
        + Create new post
      </button>
    </div>

    <div class="px-20 flex gap-20 flex-wrap justify-center pb-8">
      <div
        v-for="(post, i) in filteredPost"
        :key="i"
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
      <Noresult v-if="filteredPost.length === 0" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      posts: [
        {
          author: 'Melinda Gates',
          authorProfile: '/images/avatars/1.svg',
          title: 'High-Speed Internet Connection is Coming to Remote Areas',
          body: 'British firm OneWeb recently launched 34 satellites into orbit from a spaceport in Kazakhstan, increasing its in-orbit constellation to 322 satellites. The satellites are intended to provide high-speed internet coverage in areas that are underserved by traditional methods. It’s part of a new wave of technologies that could help bridge the digital divide.',
          comments: [],
          totalComments: 5,
          liked: false,
          disliked: true,
          totalLikes: 56,
        },
        {
          author: 'John Roy Calimlim',
          authorProfile: '/images/avatars/2.svg',
          title:
            'Arista, Cisco, Huawei, Juniper Networks, and Nokia Launch New MANRS Equipment Vendor Program to Improve Routing Security Worldwide',
          body: 'Founding members of the MANRS Initiative will tackle the systemic vulnerabilities of global routing security through groundbreaking collaborative action.',
          comments: [],
          totalComments: 8,
          liked: true,
          disliked: false,
          totalLikes: 27,
        },
        {
          author: 'Sarah Ford',
          authorProfile: '/images/avatars/3.svg',
          title: 'An Interactive Guide to Keyframe Animations',
          body: "CSS keyframe animations are incredibly flexible and powerful, but they’re also a bit weird. In this deep-dive tutorial, we'll learn how CSS keyframes work from the ground up, and see how to use them to build high-quality animations.",
          comments: [],
          totalComments: 34,
          liked: true,
          disliked: false,
          totalLikes: 88,
        },
        {
          author: 'John Ray',
          authorProfile: '/images/avatars/4.svg',
          title:
            'NanoPen 02 packs rugged durability in a small, tactical frame for minimalist EDC',
          body: 'In the market for a new tactical pen? Update your EDC kit with the improved NanoPen 02. It features a slew of enhancements, from a quick-release cap to copper housing. Read on to learn more.',
          comments: [],
          totalComments: 20,
          liked: false,
          disliked: false,
          totalLikes: 14,
        },
      ],
    }
  },
  computed: {
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
  methods: {
    up(index) {
      if (!this.posts[index].liked) {
        this.posts[index].liked = true
        this.posts[index].totalLikes++
        this.posts[index].disliked = false
      } else {
        this.posts[index].liked = false
        this.posts[index].totalLikes--
      }
    },
    down(index) {
      if (!this.posts[index].disliked) {
        this.posts[index].disliked = true
        this.posts[index].totalLikes--
        this.posts[index].liked = false
      } else {
        this.posts[index].disliked = false
      }
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