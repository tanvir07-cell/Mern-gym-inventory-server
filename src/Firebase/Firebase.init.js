// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3JuKJOrSlwVeMSd8lxA4QFGPuki_KcBI",
  authDomain: "mern-gym-front-back.firebaseapp.com",
  projectId: "mern-gym-front-back",
  storageBucket: "mern-gym-front-back.appspot.com",
  messagingSenderId: "207044275880",
  appId: "1:207044275880:web:43bf7ae0ee8c748fd01c9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
