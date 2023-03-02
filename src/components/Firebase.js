import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBZ7jpe3Vjk5_MxOIm1IY8UJ0bR6U9QZ18",
  authDomain: "fbase-myportf-login.firebaseapp.com",
  projectId: "fbase-myportf-login",
  storageBucket: "fbase-myportf-login.appspot.com",
  messagingSenderId: "173812547800",
  appId: "1:173812547800:web:79270e29ad4d8990c357ad",
  measurementId: "G-DWG2JRRTZZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app , auth } 