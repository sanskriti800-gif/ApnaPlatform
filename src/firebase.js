// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import "firebase/compat/database"
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyC2YCya7SfrR74uyiAc05dRbl5UCkPwKVw",
  authDomain: "test-8f42a.firebaseapp.com",
  databaseURL: "https://test-8f42a-default-rtdb.firebaseio.com",
  projectId: "test-8f42a",
  storageBucket: "test-8f42a.appspot.com",
  messagingSenderId: "264366395515",
  appId: "1:264366395515:web:87e9e01551031a7f2652de",
  measurementId: "G-5X2P23SSE3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const fireDb = firebase.initializeApp(firebaseConfig)

export {app,auth};
export default fireDb.database().ref()