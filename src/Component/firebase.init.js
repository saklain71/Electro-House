// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6J9C9I0ALbK2whYzXdNwGLTKV3PktLPw",
  authDomain: "electro-products.firebaseapp.com",
  projectId: "electro-products",
  storageBucket: "electro-products.appspot.com",
  messagingSenderId: "761583430926",
  appId: "1:761583430926:web:bfbb89b5b7601b15607b5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 
