// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWU91H6nCNKPUG8S6LChLjf4WCHp8wY0o",
  authDomain: "pitch-deck-d17b9.firebaseapp.com",
  projectId: "pitch-deck-d17b9",
  storageBucket: "pitch-deck-d17b9.firebasestorage.app",
  messagingSenderId: "624080191826",
  appId: "1:624080191826:web:d9d51d1b7dd7f40a13fa8b",
  measurementId: "G-ZH9B747ZQD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
