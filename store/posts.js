export const state = () => ({
  posts: [
    {
      id: 1,
      author: 'Melinda Gates',
      authorProfile: '/images/avatars/1.svg',
      username: 'mgates21',
      title: 'High-Speed Internet Connection is Coming to Remote Areas',
      body: 'British firm OneWeb recently launched 34 satellites into orbit from a spaceport in Kazakhstan, increasing its in-orbit constellation to 322 satellites. The satellites are intended to provide high-speed internet coverage in areas that are underserved by traditional methods. It’s part of a new wave of technologies that could help bridge the digital divide.',
      comments: [],
      totalComments: 5,
      liked: false,
      disliked: true,
      totalLikes: 56,
    },
    {
      id: 2,
      author: 'John Roven',
      authorProfile: '/images/avatars/2.svg',
      username: 'jrstark',
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
      id: 3,
      author: 'Sarah Ford',
      authorProfile: '/images/avatars/3.svg',
      username: 'sarahG',
      title: 'An Interactive Guide to Keyframe Animations',
      body: "CSS keyframe animations are incredibly flexible and powerful, but they’re also a bit weird. In this deep-dive tutorial, we'll learn how CSS keyframes work from the ground up, and see how to use them to build high-quality animations.",
      comments: [],
      totalComments: 34,
      liked: true,
      disliked: false,
      totalLikes: 88,
    },
    {
      id: 4,
      author: 'John Ray',
      authorProfile: '/images/avatars/4.svg',
      username: 'rayray23',
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
})

export const mutations = {
  up(state, index) {
    if (!state.posts[index].liked) {
      state.posts[index].liked = true
      state.posts[index].totalLikes++
      state.posts[index].disliked = false
    } else {
      state.posts[index].liked = false
      state.posts[index].totalLikes--
    }
  },
  down(state, index) {
    if (!state.posts[index].disliked) {
      state.posts[index].disliked = true
      state.posts[index].totalLikes--
      state.posts[index].liked = false
    } else {
      state.posts[index].disliked = false
    }
  },
  create(state, post) {
    state.posts.push(post)
  },
}
