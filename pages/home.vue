<template>
  <div class="mt-24 px-20 flex gap-20 flex-wrap justify-center">
    <div
      v-for="(post, i) in posts"
      :key="i"
      class="
        card
        p-12
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
        @up="up"
        @down="down"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          author: 'John Roy Calimlim',
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
          author: 'Sarah Ford',
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
.card {
  /* min-width: 450px; */
  max-width: 500px;
  width: 100%;
}
.left {
  top: 50%;
  transform: translateY(-50%);
}
.arrow-liked {
  fill: var(--c-pri);
}
.arrow-disliked {
  fill: var(--c-accent);
}
</style>