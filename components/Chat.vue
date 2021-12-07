<template>
  <div class="chat-seller fixed bottom-4 right-4 z-50">
    <div v-if="showChatbox" class="chatbox fixed">
      <div id="messages" class="messages h-full pb-14 pt-4 px-4 overflow-auto">
        <div v-for="(message, i) in messages" :key="i" class="message flex">
          <div
            class="msg p-2 rounded-xl text-white"
            :class="{
              seller: message.type == 'seller',
              self: message.type == 'self',
            }"
          >
            {{ message.msg }}
          </div>
        </div>
      </div>
      <form
        class="w-full absolute bottom-0 p-2 flex gap-2 items-center"
        @submit="send"
      >
        <input
          v-model="msg"
          type="text"
          class="w-full p-2"
          placeholder="Type something..."
        />
        <button>
          <fa icon="paper-plane" />
        </button>
      </form>
    </div>
    <div
      id="icon"
      class="icon grid place-items-center cursor-pointer text-3xl"
      @click="toggleChat"
    >
      <fa :icon="icon" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
      messages: [
        { type: 'seller', msg: 'Welcome to my store!' },
        { type: 'seller', msg: 'How may I help you?' },
      ],
    }
  },
  computed: {
    showChatbox() {
      return this.$store.state.global.showChatbox
    },
    icon() {
      return this.showChatbox === false ? 'comments' : 'times'
    },
  },
  methods: {
    send(e) {
      e.preventDefault()
      const msg = this.msg

      if (msg === '') return

      this.messages.push({ type: 'self', msg })
      this.msg = ''

      const element = document.getElementById('messages')
      element.scrollTop = element.scrollHeight + 80
    },
    toggleChat() {
      this.$store.commit('global/toggle')
      const chatBtn = document.querySelector('#icon')
      chatBtn.style.transform = 'rotate(360deg)'
    },
  },
}
</script>

<style scoped>
.overlay {
  background: transparent;
  z-index: -999;
}
.icon {
  height: 60px;
  width: 60px;
  background: var(--c-accent);
  color: #fff;
  border-radius: 100%;
  transition: 0.5s ease-in-out;
}
.chat-seller ::-webkit-scrollbar-thumb {
  background: white;
  border-radius: unset;
}
.chatbox {
  max-width: 300px;
  width: 100%;
  border: 1px solid black;
  height: 400px;
  background: rgb(204, 204, 204);
  bottom: 90px;
  right: 25px;
  border-radius: 15px 0 0 0;
}
form {
  background: rgb(204, 204, 204);
}
form button {
  height: 30px;
  width: 35px;
  border-radius: 100%;
  background: var(--c-pri-light);
  color: #fff;
  margin-right: 5px;
}
.message {
  display: grid;
}
.message .msg {
  word-break: break-all;
  max-width: 200px;
  margin-bottom: 15px;
}
.self {
  justify-self: flex-end;
  background: gray;
}
.seller {
  background: var(--c-pri-light);
}
</style>