// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAby5K-WdhCh190wELQA5KoYF7lKcZm7UU",
  authDomain: "futbolappdemo.firebaseapp.com",
  projectId: "futbolappdemo",
  storageBucket: "futbolappdemo.appspot.com",
  messagingSenderId: "810310037312",
  appId: "1:810310037312:web:4ebed928f02fb01f3e54a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)