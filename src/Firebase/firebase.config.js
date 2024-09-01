// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRGNzKc-s2zyaDWawzNiISNKq25P2X6hI",
  authDomain: "module-51-425fd.firebaseapp.com",
  projectId: "module-51-425fd",
  storageBucket: "module-51-425fd.appspot.com",
  messagingSenderId: "374871434767",
  appId: "1:374871434767:web:b98b0655a78509a3fb257a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;