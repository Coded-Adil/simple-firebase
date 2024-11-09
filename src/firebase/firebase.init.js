// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5ndReBJQjZcBpMz2bOX4_9b9FLCNZTko",
  authDomain: "simple-firebase-b5fea.firebaseapp.com",
  projectId: "simple-firebase-b5fea",
  storageBucket: "simple-firebase-b5fea.firebasestorage.app",
  messagingSenderId: "1018002271876",
  appId: "1:1018002271876:web:fd50851e44e19e1b179cd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;