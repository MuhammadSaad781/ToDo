// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjTR-g3xBa5S4jhCeq_6BZdQHxncbP3XE",
  authDomain: "todo-b0c73.firebaseapp.com",
  databaseURL: "https://todo-b0c73-default-rtdb.firebaseio.com",
  projectId: "todo-b0c73",
  storageBucket: "todo-b0c73.appspot.com",
  messagingSenderId: "797416767112",
  appId: "1:797416767112:web:20c8e5f25367c8dcdea93d",
  measurementId: "G-RHQH6DGPFF",
};

// Initialize Firebase
export const Firebase_App = initializeApp(firebaseConfig);
export const Firebase_Auth = getAuth(Firebase_App);
