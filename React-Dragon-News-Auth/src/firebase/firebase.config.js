// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgllB4IdBrkJFz6lC7vRJPQaJkSM2Fh3c",
  authDomain: "react-dragon-news-auth-e1d4a.firebaseapp.com",
  projectId: "react-dragon-news-auth-e1d4a",
  storageBucket: "react-dragon-news-auth-e1d4a.appspot.com",
  messagingSenderId: "592449502164",
  appId: "1:592449502164:web:3e8f5ffab9f8a701a43441"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;