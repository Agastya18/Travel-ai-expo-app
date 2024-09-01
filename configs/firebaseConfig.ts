// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your api key",
  authDomain: "travel-ai-app.firebaseapp.com",
  projectId: "travel-ai-app",
  storageBucket: "travel-ai-app.appspot.com",
  messagingSenderId: "590148809867",
  appId: "1:590148809867:web:acfb871a3fedd6ebd7908e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 export const db = getFirestore(app);