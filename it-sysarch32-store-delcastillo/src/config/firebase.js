/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Import Firebase core module
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAYV8T53ANFE7sCS9MaXq7O0r3-DJ_4s6Q",
  authDomain: "it-sysarch32-store-delcastillo.firebaseapp.com",
  projectId: "it-sysarch32-store-delcastillo",
  storageBucket: "it-sysarch32-store-delcastillo.appspot.com",
  messagingSenderId: "1099314384588",
  appId: "1:1099314384588:web:144b8491a6670619ecbc69",
  measurementId: "G-E2SSH09V62"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a Firestore instance
const fs = getFirestore(app);

// Get a Storage instance
const storage = getStorage(app);

export { fs, storage };

export const db = getFirestore(app);