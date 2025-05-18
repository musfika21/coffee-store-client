// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvFkY1ssWV0yxvxFJxJKGQljIyVP7LWWk",
  authDomain: "coffee-store-app-4a785.firebaseapp.com",
  projectId: "coffee-store-app-4a785",
  storageBucket: "coffee-store-app-4a785.firebasestorage.app",
  messagingSenderId: "360370612866",
  appId: "1:360370612866:web:29cd5d3deee0c4062ba29b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);