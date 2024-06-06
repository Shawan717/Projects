// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7j77tXgOWwJgX7qFOhpU2HRP0KJ5bvRE",
  authDomain: "my-49-50.firebaseapp.com",
  projectId: "my-49-50",
  storageBucket: "my-49-50.appspot.com",
  messagingSenderId: "572287183845",
  appId: "1:572287183845:web:b3e668c4d8cfae1c201d0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;