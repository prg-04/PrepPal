// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBlLG52vT5xdrdgw6uE7UAxomlTJQjwef8",
  authDomain: "preppal-2226c.firebaseapp.com",
  projectId: "preppal-2226c",
  storageBucket: "preppal-2226c.firebasestorage.app",
  messagingSenderId: "77800076259",
  appId: "1:77800076259:web:f6dce5dd63220267f426d6",
  measurementId: "G-KMBTP983KL",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore();
