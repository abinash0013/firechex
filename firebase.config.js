// import { initializeApp } from "firebase/app"; 
// import { getFirestore, collection } from "firebase/firestore"
// import { getReactNativePersistence, initializeAuth, getAuth } from "firebase/auth"

// import AsyncStorage from "@react-native-async-storage/async-storage"

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBtrW1N2tt36jtXqptZI1tuGPAQmXohbgQ",
//   authDomain: "fir-chat-ex-20098.firebaseapp.com",
//   projectId: "fir-chat-ex-20098",
//   storageBucket: "fir-chat-ex-20098.appspot.com",
//   messagingSenderId: "853843425031",
//   appId: "1:853843425031:web:4eb441cd39fc533f7837a2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // export const auth = initializeAuth(app, {
// export const auth = getAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage)
// });

// export const db = getFirestore();
// export const userRef = collection(db, 'users');
// export const roomRef = collection(db, 'rooms')

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtrW1N2tt36jtXqptZI1tuGPAQmXohbgQ",
  authDomain: "fir-chat-ex-20098.firebaseapp.com",
  projectId: "fir-chat-ex-20098",
  storageBucket: "fir-chat-ex-20098.appspot.com",
  messagingSenderId: "853843425031",
  appId: "1:853843425031:web:4eb441cd39fc533f7837a2"
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Auth with AsyncStorage persistence
export const auth = !getAuth().app
  ? initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) })
  : getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);

// Firestore references
export const userRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms'); 