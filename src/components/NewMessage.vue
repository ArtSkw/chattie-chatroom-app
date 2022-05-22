<template>
  <form
    class="bg-white flex items-stretch bottom-0 fixed sm:relative pt-5 pb-4 px-4 sm:px-5 w-full"
  >
    <textarea
      class="bg-stone-100 border flex-2 rounded-lg py-2.5 resize-none pl-4 pr-16 text-sm w-full"
      placeholder="Type your message here..."
      v-model="message"
      @input="emptyCheck"
      @keypress.enter.prevent="sendMessage"
    ></textarea>
    <button
      v-if="!emptyMessage"
      @click.prevent="sendMessage"
      class="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-600 flex justify-center
      items-center flex-auto ml-3 py-2.5 px-3 rounded-lg text-white w-11 transition absolute"
      style="right: 1.9em; top: 1.9em"
    >
      <span class="material-icons">send</span>
    </button>
    <button
      v-if="emptyMessage"
      disabled
      class="bg-emerald-200 flex justify-center items-center flex-auto ml-3 py-2.5 px-3 rounded-lg
      text-white w-11 transition absolute"
      style="right: 1.9em; top: 1.9em"
    >
      <span class="material-icons">send</span>
    </button>
    <div v-if="error" class="mb-2 text-red-500 text-sm">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue';
import { timestamp } from '../firebase/config';

import useCollection from '../composables/useCollection';
import getUser from '../composables/getUser';

export default {
  setup() {
    const message = ref('');
    const emptyMessage = ref(true);

    const { user } = getUser();
    const { addDoc, error } = useCollection('messages');

    // Empty message filter
    const emptyCheck = () => {
      if (message.value !== '') {
        emptyMessage.value = false;
      } else {
        emptyMessage.value = true;
      }
      return emptyMessage;
    };

    // Sending messages
    const sendMessage = async () => {
      if (!emptyMessage.value) {
        const chat = {
          name: user.value.displayName,
          message: message.value,
          createdAt: timestamp(),
        };
        await addDoc(chat);
      }
      if (!error.value) {
        message.value = '';
        emptyMessage.value = true;
      }
    };

    return {
      emptyCheck,
      emptyMessage,
      message,
      sendMessage,
      error,
    };
  },
};
</script>

<style scoped>
form {
  border-top: 1px solid #eee;
}
</style>
