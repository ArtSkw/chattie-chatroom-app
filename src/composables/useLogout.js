import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const error = ref(null);

// Simple logout function
const logout = async () => {
  error.value = null;
  try {
    await projectAuth.signOut();
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useLogout = () => ({ logout, error });

export default useLogout;
