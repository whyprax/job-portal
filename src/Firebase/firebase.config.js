// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ8bXha3RhV0h7ukge_40VB5IzvStaNPU",
  authDomain: "job-portal-dbfa6.firebaseapp.com",
  projectId: "job-portal-dbfa6",
  storageBucket: "job-portal-dbfa6.appspot.com",
  messagingSenderId: "468449455915",
  appId: "1:468449455915:web:7933c354681244f6b91f6e",
  measurementId: "G-34B1LD72MZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
