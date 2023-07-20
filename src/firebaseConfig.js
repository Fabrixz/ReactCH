import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD05QHN2AFV7T190UZ1yMi5aqWlOsvtmqU",
  authDomain: "reactch-3da3a.firebaseapp.com",
  projectId: "reactch-3da3a",
  storageBucket: "reactch-3da3a.appspot.com",
  messagingSenderId: "913027765440",
  appId: "1:913027765440:web:e229fd4c67eb7a9074c925",
  measurementId: "G-SWV7DCQZ3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()