// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY9gpJtQEhu1E2gaBNYUGPIlPl5ycGjRc",
  authDomain: "react-chat-beff8.firebaseapp.com",
  projectId: "react-chat-beff8",
  storageBucket: "react-chat-beff8.appspot.com",
  messagingSenderId: "517278827530",
  appId: "1:517278827530:web:ec5ff7b29db56b0f53cbf3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

