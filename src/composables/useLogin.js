import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const error = ref(null);
const inProgress = ref(false);

// Authenticating existing users via login credentials
// eslint-disable-next-line consistent-return
const login = async (email, password) => {
  error.value = null;
  inProgress.value = true;

  try {
    const response = await projectAuth.signInWithEmailAndPassword(
      email,
      password,
    );

    error.value = null;
    inProgress.value = false;

    return response;
  } catch (err) {
    console.log(err.message);
    error.value = 'Incorrect login credentials 😬';
    inProgress.value = false;
  }
};

const useLogin = () => ({ error, login, inProgress });

export default useLogin;
