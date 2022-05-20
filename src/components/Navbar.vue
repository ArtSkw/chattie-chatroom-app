<template>
  <nav
    v-if="user"
    class="bg-white flex justify-between items-center top-0 fixed sm:relative
    pt-3 py-3 px-4 sm:pt-5 sm:px-6 sm:pb-6 w-full"
  >
    <div class="flex items-center justify-between w-full">
      <router-link :to="{ name: 'Welcome' }">
        <img
          class="mr-4"
          src="../static/chattie-app-icon.svg"
          alt="Chattie app icon"
        />
      </router-link>
      <div class="sm:ml-0 ml-auto mr-auto text-center sm:text-left">
        <p class="font-headline font-medium sm:text-lg text-zinc-900">
          Hi {{ user.displayName }}! 👋
        </p>
        <p class="text-sm text-gray-500 mt-1">
          Currently logged in as
          <span class="font-semibold">{{ user.email }}</span
          >.
        </p>
      </div>
      <div class="ml-2">
        <div class="dropdown inline-block relative">
          <button
            v-on:clickout="showMenu = false"
            @click="showMenu = !showMenu"
            class="bg-stone-100 hover:bg-stone-200 text-indigo-600 font-semibold
            -mr-0.5 p-3 sm:p-4 rounded-lg inline-flex items-center transition"
          >
            <span class="material-icons">menu</span>
          </button>
          <ul
            v-if="showMenu"
            class="border dropdown-menu absolute bg-white drop-shadow-md rounded-lg text-zinc-900
            w-32 right-0 mt-2"
          >
            <li @click="handleDelete">
              <a
                class="hover:bg-stone-100 text-sm rounded-lg p-4 block whitespace-no-wrap"
                href="#"
                >Clear the chat</a
              >
            </li>
            <li @click="handleLogout">
              <a
                class="hover:bg-stone-100 text-sm rounded-lg -mt-1 p-4 block whitespace-no-wrap"
                href="#"
                >Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import 'clickout-event';
import { ref } from 'vue';

import deleteCollection from '../composables/deleteCollection';
import getUser from '../composables/getUser';
import useLogout from '../composables/useLogout';

export default {
  setup() {
    const showMenu = ref(false);

    const { erase } = deleteCollection();
    const { logout } = useLogout();
    const { user } = getUser();

    // Log out button
    const handleLogout = async () => {
      await logout();
    };

    // Clear chat button
    const handleDelete = async () => {
      await erase('messages');
    };

    return {
      handleLogout,
      handleDelete,
      user,
      showMenu,
    };
  },
};
</script>

<style scoped>
nav {
  border-bottom: 1px solid #eee;
}
</style>
