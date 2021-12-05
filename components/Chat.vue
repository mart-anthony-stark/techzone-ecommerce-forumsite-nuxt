<template>
  <div class="chat-seller fixed bottom-4 right-4 z-50">
    <div
      @click="$store.commit('global/close')"
      class="overlay fixed inset-0"
    ></div>
    <div v-if="showChatbox" class="chatbox fixed">
      <div class="messages h-full pb-14 pt-4 px-4 overflow-auto">
        <h3 v-for="(message, i) in messages" :key="i" class="message">
          {{ message.msg }}
        </h3>
      </div>
      <form
        @submit="send"
        class="w-full absolute bottom-0 p-2 flex gap-2 items-center"
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
      @click="$store.commit('global/toggle')"
      class="icon grid place-items-center cursor-pointer text-3xl"
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
        { sender: 'seller', msg: 'asdasdasdasasddddddddddddddddddd' },
        { sender: 'seller', msg: 'asdasdasdas' },
        { sender: 'seller', msg: 'asdasdasdas' },
        { sender: 'seller', msg: 'asdasdasdas' },
        { sender: 'seller', msg: 'asdasdasdas' },
        { sender: 'seller', msg: 'asdasdasdas' },
        { sender: 'seller', msg: 'asdasdasdas' },
        { sender: 'seller', msg: 'asdasdasdas' },
        { sender: 'seller', msg: 'asdasdasdas' },
        { sender: 'seller', msg: 'asdasdasdas' },
        { sender: 'seller', msg: 'asdasdasdas' },
        { sender: 'seller', msg: 'asdasdasdas' },
        { sender: 'seller', msg: 'asdasdasdas' },
        { sender: 'seller', msg: 'asdasdasdas' },
        { sender: 'seller', msg: 'asdasdasdas' },
        { sender: 'seller', msg: 'gfhfg' },
      ],
    }
  },
  methods: {
    send(e) {
      e.preventDefault()
      console.log(this.msg)
    },
  },
  computed: {
    showChatbox() {
      return this.$store.state.global.showChatbox
    },
    icon() {
      return this.showChatbox === false ? 'comments' : 'times'
    },
  },
}
</script>

<style scoped>
.overlay {
  background: transparent;
  z-index: -1;
}
.icon {
  height: 60px;
  width: 60px;
  background: var(--c-accent);
  color: #fff;
  border-radius: 100%;
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
  max-width: 200px;
}
.self {
  float: right;
}
.seller {
  background: var(--c-pri);
}
</style>