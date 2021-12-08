<template>
  <div class="section mt-24 px-4">
    <!-- <h1 class="text-sec text-center text-4xl font-bold">My Profile</h1> -->
    <div class="flex flex-col items-center mt-4">
      <div class="user flex flex-col items-center">
        <img class="profile-pic" src="/images/gigachad.jpg" />
        <h1 class="text-2xl">John Doe</h1>
        <h2>johndoe@gmail.com</h2>
      </div>

      <div class="mt-4">
        <h1>John spends most of his time on...</h1>
        <div class="mt-2 flex-col flex items-center">
          <div class="font-bold">
            Coding
            <span class="text-red-700">
              <fa icon="code" />
            </span>
          </div>
          <div class="font-bold">
            Singing
            <span class="text-blue-700">
              <fa icon="music" />
            </span>
          </div>
          <div class="font-bold">
            Gaming
            <span>
              <fa icon="gamepad" />
            </span>
          </div>
        </div>
      </div>

      <div class="flex gap-12 flex-wrap mt-8 items-center justify-center">
        <div class="card rounded-xl p-4">
          <h1>My Orders</h1>
          <h2>Already have 12 orders</h2>
        </div>

        <div class="card rounded-xl p-4">
          <h1>Shipping adresses</h1>
          <h2>4 addresses</h2>
        </div>

        <div class="card rounded-xl p-4">
          <h1>Payment methods</h1>
          <h2>Paypal</h2>
        </div>

        <div class="card rounded-xl p-4">
          <h1>My reviews</h1>
          <h2>Reviews for 4 items</h2>
        </div>
      </div>

      <div class="mt-12"></div>

      <div
        v-for="(post, i) in posts"
        :key="post.body"
        class="
          post-card
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          author: 'John Doe',
          authorProfile: '/images/gigachad.jpg',
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
          author: 'John Doe',
          authorProfile: '/images/gigachad.jpg',
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
      ],
    }
  },
}
</script>

<style scoped>
.user {
}
.user img {
  border-radius: 100%;
  width: 200px;
  height: 200px;
  border: 5px solid var(--c-pri-light);
}
.card {
  max-width: 300px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  text-align: center;
}

.post-card {
  max-width: 500px;
  width: 100%;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

.card h1 {
  font-weight: bold;
}
</style>