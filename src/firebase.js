// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCX7sUgjhmFaKRdfuMFMpn4rvbOuaCdHY",
    authDomain: "poke-api-auth-e4ec4.firebaseapp.com",
    projectId: "poke-api-auth-e4ec4",
    storageBucket: "poke-api-auth-e4ec4.appspot.com",
    messagingSenderId: "382857985953",
    appId: "1:382857985953:web:525443cc03d1a4951715e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)