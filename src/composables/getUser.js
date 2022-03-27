import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

// Initial user authentication
const user = ref();

projectAuth.onAuthStateChanged((activeUser) => {
  user.value = activeUser;
});

const getUser = () => ({ user });

export default getUser;
