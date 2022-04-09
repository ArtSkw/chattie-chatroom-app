import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Main DB config
const firebaseConfig = {
  apiKey: 'AIzaSyCq1udlArxAoHlZTmvio__g52ecp3k4QvQ',
  authDomain: 'chattie-chatroom-app.firebaseapp.com',
  projectId: 'chattie-chatroom-app',
  storageBucket: 'chattie-chatroom-app.appspot.com',
  messagingSenderId: '805385982037',
  appId: '1:805385982037:web:9f316913cd0c5daab6c4dc',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
