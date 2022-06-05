import {getAuth} from 'firebase/firebase-auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYxs_a9b9nTFMB0XmgETNCP_M1MS27XVc",
  authDomain: "ema-john-simple-9425c.firebaseapp.com",
  projectId: "ema-john-simple-9425c",
  storageBucket: "ema-john-simple-9425c.appspot.com",
  messagingSenderId: "108760298898",
  appId: "1:108760298898:web:1e73f1eb30acc2e603fd4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

