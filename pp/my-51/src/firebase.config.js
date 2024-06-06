import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKJtDnRnrYnfpSR6t8IW_kXxTNKlcwmmo",
  authDomain: "m-51-b65e2.firebaseapp.com",
  projectId: "m-51-b65e2",
  storageBucket: "m-51-b65e2.appspot.com",
  messagingSenderId: "137864072767",
  appId: "1:137864072767:web:f58b3c5150f7fe17fa328a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;