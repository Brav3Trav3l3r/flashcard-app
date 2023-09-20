// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG1VXPhJL8EUBYvfUN4Zq_TzxAfOm8_lw",
  authDomain: "react-demo-a7c7e.firebaseapp.com",
  databaseURL:
    "https://react-demo-a7c7e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-demo-a7c7e",
  storageBucket: "react-demo-a7c7e.appspot.com",
  messagingSenderId: "730036832228",
  appId: "1:730036832228:web:10136b90577a0e3f0be9f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();


