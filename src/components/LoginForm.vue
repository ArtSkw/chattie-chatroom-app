<template>
  <form @submit.prevent="handleSubmit">
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
      class="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-600 font-semibold mt-2 py-3
      px-3 rounded-lg text-center text-white transition w-full"
    >
      Log in
    </button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useLogin from '../composables/useLogin';

export default {
  setup(props, context) {
    const email = ref('');
    const password = ref('');

    const { error, login } = useLogin();

    // Logging in
    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        context.emit('login');
      }
    };

    return {
      email,
      password,
      handleSubmit,
      error,
    };
  },
};
</script>

<style></style>
