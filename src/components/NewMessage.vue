<template>
  <form
    class="bg-white flex items-stretch bottom-0 fixed sm:relative pt-5 pb-4 px-4 sm:px-5 w-full"
  >
    <textarea
      class="bg-stone-100 border flex-2 rounded-lg py-2.5 resize-none px-4 text-sm w-full"
      placeholder="Type your message here..."
      v-model="message"
      @keypress.enter.prevent="sendMessage"
    ></textarea>
    <button
      @click.prevent="sendMessage"
      class="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-600 flex justify-center items-center
      flex-auto ml-3 py-2.5 px-3 rounded-lg text-white w-11 transition absolute"
      style="right: 1.9em; top: 1.9em"
    >
      <span class="material-icons">send</span>
    </button>
    <div v-if="error" class="mb-2 text-red-500 text-sm">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue';
import useCollection from '../composables/useCollection';
import getUser from '../composables/getUser';
import { timestamp } from '../firebase/config';

export default {
  setup() {
    const message = ref('');

    const { user } = getUser();
    const { addDoc, error } = useCollection('messages');

    // Sending messages
    const sendMessage = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };
      await addDoc(chat);
      if (!error.value) {
        message.value = '';
      }
    };

    return { message, sendMessage, error };
  },
};
</script>

<style scoped>
form {
  border-top: 1px solid #eee;
}
</style>
