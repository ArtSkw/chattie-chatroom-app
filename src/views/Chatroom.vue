<template>
  <div
    class="sm:bg-gradient-to-r sm:from-violet-50 sm:to-purple-200 flex flex-col
    sm:justify-center items-center h-screen sm:p-4 w-full"
  >
    <div
      class="bg-white py-2 px-0 sm:rounded-2xl sm:drop-shadow-xl max-w-7xl
      mx-auto sm:overflow-hidden w-full"
    >
      <Navbar />
      <ChatWindow />
      <NewMessage />
    </div>
  </div>
</template>

<script>
import { watch } from 'vue';
import { useRouter } from 'vue-router';

import NewMessage from '../components/NewMessage.vue';
import ChatWindow from '../components/ChatWindow.vue';
import Navbar from '../components/Navbar.vue';
import getUser from '../composables/getUser';

export default {
  components: { Navbar, NewMessage, ChatWindow },
  setup() {
    const router = useRouter();
    const { user } = getUser();

    // If there is no authenticated user redirect to login page
    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' });
      }
    });
  },
};
</script>

<style></style>
