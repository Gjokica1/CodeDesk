// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfgQ3_6JtJZ0OSV1omJDS5WnlRczxFhcY",
    authDomain: "codedesk-62c4f.firebaseapp.com",
    projectId: "codedesk-62c4f",
    storageBucket: "codedesk-62c4f.appspot.com",
    messagingSenderId: "655438022978",
    appId: "1:655438022978:web:d759dfc74c4a2bd5f5e0db",
    measurementId: "G-Z1BSG5FS7S"
  };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const firebaseApp = firebase.initializeApp(firebase);

// const db = firebaseApp.firestore();


// export default db;
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };