import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

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
export const firestore = getFirestore(app);
