// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkp-jdM621YcmW5FBJ9DRgqFS7kh3xmYE",
  authDomain: "sportsbook-285b6.firebaseapp.com",
  projectId: "sportsbook-285b6",
  storageBucket: "sportsbook-285b6.appspot.com",
  messagingSenderId: "209499346631",
  appId: "1:209499346631:web:9cc5edf8a00df8a56250e2",
  measurementId: "G-90XSQH7HHT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
