
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD4bCc-8NFnkdeGTqBCaEnVkW1Z4KoU4hE",
  authDomain: "fakestore-redux-c99f8.firebaseapp.com",
  projectId: "fakestore-redux-c99f8",
  storageBucket: "fakestore-redux-c99f8.firebasestorage.app",
  messagingSenderId: "1048653088718",
  appId: "1:1048653088718:web:53db97dce26294cd124d9f",
  measurementId: "G-MDKQX5LZ77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };