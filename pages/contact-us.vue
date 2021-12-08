<template>
  <div class="section mt-24">
    <h1 class="font-bold text-center text-4xl mb-8 text-sec">Contact Us</h1>
    <div class="flex gap-4 justify-center flex-wrap">
      <img src="/images/contact.svg" id="contact" />

      <form @submit="submitForm" class="p-4 py-8">
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label for="fname"
              >FIRST NAME <span class="text-red-400">*</span></label
            >
            <input
              class="p-2 border-2 rounded border-color-gray-400"
              type="text"
              id="fname"
            />
          </div>

          <div>
            <label for="lname"
              >LAST NAME <span class="text-red-400">*</span></label
            >
            <input
              class="p-2 border-2 rounded border-color-gray-400"
              type="text"
              id="lname"
            />
          </div>
        </div>

        <div class="flex flex-col mt-4">
          <label for="fname">EMAIL <span class="text-red-400">*</span></label>
          <input
            class="p-2 border-2 rounded border-color-gray-400"
            type="email"
            id="fname"
          />
        </div>

        <div class="flex flex-col mt-4">
          <label for="fname">MESSAGE <span class="text-red-400">*</span></label>
          <input
            class="p-2 border-2 rounded border-color-gray-400"
            type="email"
            id="fname"
          />
        </div>

        <div class="flex flex-col mt-4">
          <label for="fname">DETAILS</label>
          <textarea
            class="p-2 border-2 rounded border-color-gray-400"
          ></textarea>
        </div>

        <button class="bg-pri text-white py-2 w-full mt-4">Send Message</button>
      </form>

      <div>
        <!-- <div class="text-2xl text-sec">
          <fa icon="location-arrow" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm(e) {
      e.preventDefault()
    },
  },
}
</script>

<style scoped>
form {
  box-sizing: border-box;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
form input {
  width: 100%;
}
form textarea {
  resize: none;
}
img#contact {
  width: 600px;
}
</style>