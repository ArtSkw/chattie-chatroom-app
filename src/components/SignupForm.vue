<template>
  <form @submit.prevent="handleSignup">
    <input
      type="text"
      required
      placeholder="Enter your nickname"
      v-model="displayName"
      class="border border-gray-200 border-solid h-3 my-2 py-6 px-3 rounded-lg w-full"
    />
    <input
      type="email"
      required
      placeholder="Enter your email"
      v-model="email"
      class="border border-gray-200 border-solid h-3 my-2 py-6 px-3 rounded-lg w-full"
    />
    <input
      type="password"
      required
      placeholder="Password"
      v-model="password"
      class="border border-gray-200 border-solid h-3 my-2 py-6 px-3 rounded-lg w-full"
    />
    <transition name="fadeLeft">
      <div v-if="error" class="mb-2 text-red-500 text-sm">{{ error }}</div>
    </transition>
    <button
      v-if="!inProgress"
      class="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-600 font-semibold mt-2 py-3 px-3
      rounded-lg text-center text-white transition w-full"
    >
      Sign up
    </button>
    <button
      v-if="inProgress"
      class="bg-indigo-700 inline-flex justify-center items-center font-semibold mt-2 py-3 px-3
      rounded-lg text-center text-white transition w-full"
    >
      <svg
        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042
          1.135 5.824 37.938l3-2.647z"
        ></path>
      </svg>
      Signing up...
    </button>
  </form>
</template>

<script>
import { ref } from 'vue';

import useSignup from '../composables/useSignup';

export default {
  setup(props, context) {
    const displayName = ref('');
    const email = ref('');
    const password = ref('');

    const { error, inProgress, signup } = useSignup();

    // Signing up
    const handleSignup = async () => {
      await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        context.emit('signup');
      }
    };

    return {
      displayName,
      email,
      error,
      inProgress,
      handleSignup,
      password,
    };
  },
};
</script>

<style></style>
