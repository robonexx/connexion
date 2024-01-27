// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "dcapp-600a3.firebaseapp.com",
  projectId: "dcapp-600a3",
  storageBucket: "dcapp-600a3.appspot.com",
  messagingSenderId: "461321146987",
  appId: "1:461321146987:web:12f9ce63a204b13773172e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);