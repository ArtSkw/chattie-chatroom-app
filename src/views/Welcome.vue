<template>
  <div
    class="sm:bg-gradient-to-r sm:from-violet-50 sm:to-purple-200 flex flex-col justify-center
    items-center h-screen sm:px-4 w-full"
  >
    <div
      class="bg-white p-5 sm:p-16 sm:rounded-2xl sm:drop-shadow-xl max-w-xl mx-auto w-full"
    >
      <router-link
        :to="{ name: 'Welcome' }"
        class="fixed sm:static left-4 top-4"
      >
        <img
          class="mb-12"
          src="../static/chattie-logo.svg"
          alt="Chattie app logo"
      /></router-link>
      <transition name="switch" mode="out-in">
        <div class="relative text-center sm:text-left" v-if="showLogin">
          <h1 class="font-headline font-semibold mb-3 text-zinc-900 text-4xl">
            Welcome back!
          </h1>
          <p class="mb-6 text-gray-500">Please log in to use our chat.</p>
          <LoginForm @login="enterChat" />
          <p class="mt-4 text-sm text-gray-500 text-center w-full">
            No account yet?
            <span
              @click="showLogin = false"
              class="cursor-pointer font-semibold text-indigo-500 hover:text-indigo-600
              active:text-indigo-600
              transition"
              >Sign up</span
            >
            instead.
          </p>
        </div>
        <div class="relative text-center sm:text-left" v-else>
          <h1 class="font-headline font-semibold mb-3 text-zinc-900 text-4xl">
            Sign up with your email.
          </h1>
          <p class="mb-6 text-gray-500">Please register to use our chat.</p>
          <SignupForm @signup="enterChat" />
          <p class="mt-4 text-sm text-gray-500 text-center w-full">
            Already registered?
            <span
              @click="showLogin = true"
              class="cursor-pointer font-semibold text-indigo-500 hover:text-indigo-600
              active:text-indigo-600 transition"
            >
              Log in</span
            >
            instead.
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import SignupForm from '../components/SignupForm.vue';
import LoginForm from '../components/LoginForm.vue';

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: 'Chatroom' });
    };

    return { showLogin, enterChat };
  },
};
</script>

<style>
/* switch transitions - left here to keep absolute positioning */
.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.switch-enter-active {
  transition: all 0.3s ease;
}

.switch-leave-active {
  transition: all 0.3s ease;
  position: absolute;
  width: 100%;
}
</style>
