// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQiGkH0oYALVSB0_J9rKdneQ50cIhgbwQ",
    authDomain: "bloow-interview.firebaseapp.com",
    projectId: "bloow-interview",
    storageBucket: "bloow-interview.appspot.com",
    messagingSenderId: "527010075730",
    appId: "1:527010075730:web:e2a50517c4286a6c917b8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }