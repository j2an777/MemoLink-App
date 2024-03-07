import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8DKre8jDwoeC0oIoE7o20wS9W98_INT8",
  authDomain: "react-note-a4e85.firebaseapp.com",
  projectId: "react-note-a4e85",
  storageBucket: "react-note-a4e85.appspot.com",
  messagingSenderId: "311888497196",
  appId: "1:311888497196:web:a7c8e81eeab7b7b36b5f89",
  measurementId: "G-QJGRM6KYBP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);