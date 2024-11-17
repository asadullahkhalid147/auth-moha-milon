// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALKgN7SegWigjIA76AVHdVrIIYnBtbIvw",
  authDomain: "auth-moha-milon-b54d9.firebaseapp.com",
  projectId: "auth-moha-milon-b54d9",
  storageBucket: "auth-moha-milon-b54d9.firebasestorage.app",
  messagingSenderId: "823059420429",
  appId: "1:823059420429:web:dad770a7a7101a6e7b0c44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);