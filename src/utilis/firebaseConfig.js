// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwkMJvbuA4fd1dO73KlaO4BRxQbUp1rYE",
  authDomain: "donlibro-281e6.firebaseapp.com",
  projectId: "donlibro-281e6",
  storageBucket: "donlibro-281e6.appspot.com",
  messagingSenderId: "739802633760",
  appId: "1:739802633760:web:abb8df2f8d64ffe2ff4e45",
  measurementId: "G-W6E3423YK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);