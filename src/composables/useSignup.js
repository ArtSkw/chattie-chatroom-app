import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const error = ref(null);
const inProgress = ref(false);

// Creating new users via login and password + setting up the display name
const signup = async (email, password, displayName) => {
  error.value = null;
  inProgress.value = true;

  try {
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password,
    );
    if (!response) {
      throw new Error('Could not complete the signup 🙁');
    }
    await response.user.updateProfile({ displayName });
    error.value = null;
    inProgress.value = false;

    return response;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    inProgress.value = false;
  }

  return error;
};

const useSignup = () => ({ error, inProgress, signup });

export default useSignup;
