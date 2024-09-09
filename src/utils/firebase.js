// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3L0wsSwrVMEKVkW2ROggzKm2eStmVhxQ",
  authDomain: "netflixgpt-caf71.firebaseapp.com",
  projectId: "netflixgpt-caf71",
  storageBucket: "netflixgpt-caf71.appspot.com",
  messagingSenderId: "478588522816",
  appId: "1:478588522816:web:f4410d91a432d0984faaa5",
  measurementId: "G-LCRSFNFK2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();