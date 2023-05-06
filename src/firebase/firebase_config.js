// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3a7HuojG0BMOqVwX21T6rCqYNkUr5xQo",
  authDomain: "news-world-b432d.firebaseapp.com",
  projectId: "news-world-b432d",
  storageBucket: "news-world-b432d.appspot.com",
  messagingSenderId: "199057422186",
  appId: "1:199057422186:web:50337f9b3863e9fb8c5713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app