// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX5_G6BuTRurOLA3yETJPr66zVHCng87w",
  authDomain: "awesome-photography-c42ee.firebaseapp.com",
  projectId: "awesome-photography-c42ee",
  storageBucket: "awesome-photography-c42ee.appspot.com",
  messagingSenderId: "905121413061",
  appId: "1:905121413061:web:0d27bb62e157352e343dac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth; 