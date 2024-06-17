// firebase.js


import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCydD-IUOG-oaUcGNIIFub-3s9GoNV_n8M",
  authDomain: "genconnect-app.firebaseapp.com",
  projectId: "genconnect-app",
  storageBucket: "genconnect-app.appspot.com",
  messagingSenderId: "263624121849",
  appId: "1:263624121849:web:69b5cadeaf2699c3ec3128",
  measurementId: "G-Z2SXNJK6F3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
