import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5f5b94WnBNui1smiGkU8OctrfAmBavBA",
  authDomain: "qwer-e77f7.firebaseapp.com",
  projectId: "qwer-e77f7",
  storageBucket: "qwer-e77f7.firebasestorage.app",
  messagingSenderId: "710142433786",
  appId: "1:710142433786:web:bdaee957f5aebd55b0ac43",
  measurementId: "G-45JYXWD0NQ"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);