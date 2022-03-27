<template>
  <div class="px-4 sm:px-6">
    <div v-if="error" class="mb-2 text-red-500 text-sm">{{ error }}</div>
    <div
      v-if="formattedDocuments"
      ref="messages"
      class="messages overflow-auto pt-20 pb-24 sm:py-0"
    >
      <div v-for="doc in formattedDocuments" :key="doc.id" class="mb-4">
        <div class="flex mt-4 mb-2 items-center">
          <span class="font-semibold mr-1.5">{{ doc.name }}</span
          ><span class="text-xs text-gray-400 -mb-0.5">{{
            doc.createdAt
          }}</span>
        </div>
        <span
          class="inline-block bg-stone-100 rounded-lg p-3 text-sm"
          data-v-4bb1e4fd=""
          >{{ doc.message }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onUpdated, ref } from 'vue';
import { formatDistanceToNow } from 'date-fns';

import getCollection from '../composables/getCollection';

export default {
  setup() {
    const { error, documents } = getCollection('messages');

    // Formatting timestamp
    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          const time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }

      return formattedDocuments;
    });

    // Auto-scroll to the latest message
    const messages = ref(null);
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return {
      error,
      documents,
      formattedDocuments,
      messages,
    };
  },
};
</script>

<style scoped>
.messages {
  max-height: 100%;
}

@media (min-width: 640px) {
  .messages {
    max-height: 60vh;
  }
}
</style>
