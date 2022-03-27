import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const error = ref(null);

// Creating new users via login and password + setting up the nickname
const signup = async (email, password, displayName) => {
  error.value = null;

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

    return response;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }

  return error;
};

const useSignup = () => ({ error, signup });

export default useSignup;
