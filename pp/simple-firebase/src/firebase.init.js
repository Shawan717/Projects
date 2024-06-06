// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK89nyxLEjT9aaFSTSuB2ufgoTmOqGi6E",
  authDomain: "simple-firebase-4cf2b.firebaseapp.com",
  projectId: "simple-firebase-4cf2b",
  storageBucket: "simple-firebase-4cf2b.appspot.com",
  messagingSenderId: "220645404906",
  appId: "1:220645404906:web:4638a88e38202bed65a793",
  measurementId: "G-R0TMMS212L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;