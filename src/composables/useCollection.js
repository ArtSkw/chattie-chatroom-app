import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

// Connections & refs are inside the function as they are not global
// You can use it for different collections at once

// Connecting to Firestore collection function
const useCollection = (collection) => {
  const error = ref(null);

  // Publishing new messages in the chat
  const addDoc = async (doc) => {
    error.value = null;

    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = 'Could not send the message.';
    }
  };

  return { error, addDoc };
};

export default useCollection;
