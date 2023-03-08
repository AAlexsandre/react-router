// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWxCCtqfrHVwCE2bN-E1bJZJmI6RoMY34",
  authDomain: "react-router-hoth.firebaseapp.com",
  projectId: "react-router-hoth",
  storageBucket: "react-router-hoth.appspot.com",
  messagingSenderId: "426170753238",
  appId: "1:426170753238:web:d98fa3490967b30c62e977"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);