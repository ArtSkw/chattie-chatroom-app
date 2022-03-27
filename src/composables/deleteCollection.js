import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const error = ref(null);

// Deleteing Firebase collection
const erase = async (collection) => {
  error.value = null;
  try {
    projectFirestore
      .collection(collection)
      .get()
      .then((res) => {
        res.forEach((element) => {
          element.ref.delete();
        });
      });
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const deleteCollection = () => ({ erase, error });

export default deleteCollection;
