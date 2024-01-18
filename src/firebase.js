// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfONn2LtYJ5IXfv4c5idAQ8NCCA6KzJkg",
    authDomain: "nextflix-clone-95758.firebaseapp.com",
    projectId: "nextflix-clone-95758",
    storageBucket: "nextflix-clone-95758.appspot.com",
    messagingSenderId: "13146605527",
    appId: "1:13146605527:web:77e89c28e1c583676f2d92"
};
//! .env stil not working

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
//* if using this file in the other file, export

