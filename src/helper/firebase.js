// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyChtATrO1B_c5x9H07eSnBGVAUvNkdlM4c",
//   authDomain: "simpleecommerce-ff5c5.firebaseapp.com",
//   projectId: "simpleecommerce-ff5c5",
//   storageBucket: "simpleecommerce-ff5c5.appspot.com",
//   messagingSenderId: "664977230837",
//   appId: "1:664977230837:web:8a9e8acb2a1288b07d2ebc"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;