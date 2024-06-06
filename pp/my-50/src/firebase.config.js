// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChdJ93z5Otl_5WzK_iwYGkf4PEkuAQMBA",
  authDomain: "my-50-586e9.firebaseapp.com",
  projectId: "my-50-586e9",
  storageBucket: "my-50-586e9.appspot.com",
  messagingSenderId: "556172458553",
  appId: "1:556172458553:web:e4145b01f1bde94392abe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;