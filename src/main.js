import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// importing Tailwind styles
import './tailwind/output.css';

// importing Firebase auth service
import { projectAuth } from './firebase/config';

let app;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount('#app');
  }
});
