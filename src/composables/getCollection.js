import { ref, watchEffect } from 'vue';
import { projectFirestore } from '../firebase/config';

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  // Registering Firestore collection reference
  const collectionRef = projectFirestore
    .collection(collection)
    .orderBy('createdAt');

  const stopFollow = collectionRef.onSnapshot(
    (snap) => {
      const results = [];

      snap.docs.forEach((doc) => {
        // Creating the timestamp and sending it to the server before editing the data
        // eslint-disable-next-line no-unused-expressions
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });

      // Updating Firestore collection
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = 'Could not fetch the data';
    },
  );

  watchEffect((onInvalidate) => {
    // Stop following the current collection when watcher is stopped (component unmounted)
    onInvalidate(() => stopFollow());
  });

  return { error, documents };
};

export default getCollection;
