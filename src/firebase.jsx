// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Import Realtime Database

// 🔹 Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcrDlsaitBvhKHz5C3uFEgFMi7ItdaHgU",
  authDomain: "my-portfolio-4f59c.firebaseapp.com",
  databaseURL: "https://my-portfolio-4f59c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-portfolio-4f59c",
  storageBucket: "my-portfolio-4f59c.firebasestorage.app",
  messagingSenderId: "953312166074",
  appId: "1:953312166074:web:a5ca9bde6424e3efb28283",
  measurementId: "G-ES2RCWPHHS"
};

// 🔹 Initialize Firebase App
const app = initializeApp(firebaseConfig);

// 🔹 Initialize Firebase services
const db = getFirestore(app); // Firestore Database
const auth = getAuth(app); // Authentication
const database = getDatabase(app); // Realtime Database ✅

// 🔹 Export Firebase services
export { db, auth, database };
