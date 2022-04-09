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
    <div v-if="error" class="mb-2 text-red-500 text-sm">{{ error }}</div>
    <button
      class="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-600 font-semibold mt-2 py-3 px-3
      rounded-lg text-center text-white transition w-full"
    >
      Sign up
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

    const { error, signup } = useSignup();

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
      handleSignup,
      password,
    };
  },
};
</script>

<style></style>
