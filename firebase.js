// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAfbH-qn1R98A-Ao215nFUvT2V4-sJbDI",
  authDomain: "inventory-tracker-49c73.firebaseapp.com",
  projectId: "inventory-tracker-49c73",
  storageBucket: "inventory-tracker-49c73.appspot.com",
  messagingSenderId: "829929968276",
  appId: "1:829929968276:web:061929d901fea30e949a81",
  measurementId: "G-2JDD22RWG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};
