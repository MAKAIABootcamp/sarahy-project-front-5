// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-5rY79UgTgkeTCXnlT9zY_z_wKPlg4OM",
  authDomain: "celebraciones-sarahy.firebaseapp.com",
  projectId: "celebraciones-sarahy",
  storageBucket: "celebraciones-sarahy.appspot.com",
  messagingSenderId: "50562486910",
  appId: "1:50562486910:web:8ca76f3323c87002ba3e2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
