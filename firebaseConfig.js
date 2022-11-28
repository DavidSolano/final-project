import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC-0txHv7qk8mUoyCC86fUueNZp8Wjb7zU",
    authDomain: "cooking-53a16.firebaseapp.com",
    projectId: "cooking-53a16",
    storageBucket: "cooking-53a16.appspot.com",
    messagingSenderId: "965698550440",
    appId: "1:965698550440:web:16fc1124ef5cf0be3de09d",
    measurementId: "G-443KNCQ8SC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {firebase, db, auth};