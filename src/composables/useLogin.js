import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const error = ref(null);

// Authenticating existing users via login credentials
// eslint-disable-next-line consistent-return
const login = async (email, password) => {
  error.value = null;

  try {
    const response = await projectAuth.signInWithEmailAndPassword(
      email,
      password,
    );

    error.value = null;

    return response;
  } catch (err) {
    console.log(err.message);
    error.value = 'Incorrect login credentials.';
  }
};

const useLogin = () => ({ error, login });

export default useLogin;
