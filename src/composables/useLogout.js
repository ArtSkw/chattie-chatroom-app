import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const error = ref(null);
const inProgress = ref(false);

// Simple logout function
const logout = async () => {
  error.value = null;
  inProgress.value = true;

  try {
    await projectAuth.signOut();
    inProgress.value = false;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    inProgress.value = false;
  }
};

const useLogout = () => ({ error, inProgress, logout });

export default useLogout;
