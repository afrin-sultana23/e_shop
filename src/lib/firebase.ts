// src/lib/firebase.ts

// Import the functions you need from the SDKs
import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTDE-ohDfS5Gbo5k4SbW0L0Z-79MUNt6o",
  authDomain: "e-shop-b7b06.firebaseapp.com",
  projectId: "e-shop-b7b06",
  storageBucket: "e-shop-b7b06.appspot.com", // ✅ fixed suffix (should be .appspot.com not .app)
  messagingSenderId: "1079375719350",
  appId: "1:1079375719350:web:cb47d739497efee6946f17",
}

// ✅ Prevent re-initializing when Next.js hot-reloads
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

// ✅ Export auth so you don’t need getAuth(app) everywhere
export const auth = getAuth(app)

export default app
