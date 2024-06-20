import './main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD3kELAjkL2kktsrJmo_eG7geEaS_vymU",
  authDomain: "invoice-app-6db9b.firebaseapp.com",
  projectId: "invoice-app-6db9b",
  storageBucket: "invoice-app-6db9b.appspot.com",
  messagingSenderId: "610899218225",
  appId: "1:610899218225:web:fac54e9fdb52bd798aaa10",
  measurementId: "G-P5PN2M8T3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);