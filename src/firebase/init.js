// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxL5WwgmV07PCzyv57LG0FPRyf0l1-Mro",
  authDomain: "piwo-f5050.firebaseapp.com",
  projectId: "piwo-f5050",
  storageBucket: "piwo-f5050.appspot.com",
  messagingSenderId: "713157432113",
  appId: "1:713157432113:web:f99ded71fe5c2bc6649610"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const firestore = getFirestore(app)