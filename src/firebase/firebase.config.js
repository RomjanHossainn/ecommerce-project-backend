// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABF5rfZbVEX7gSf825avCkHPQAvNreKJA",
  authDomain: "ecommerce-application-9387b.firebaseapp.com",
  projectId: "ecommerce-application-9387b",
  storageBucket: "ecommerce-application-9387b.appspot.com",
  messagingSenderId: "868989999058",
  appId: "1:868989999058:web:0fa73657ef4835c2d4da0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
