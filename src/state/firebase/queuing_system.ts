import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "queuing-system-6da64.firebaseapp.com",
    projectId: "queuing-system-6da64",
    storageBucket: "queuing-system-6da64.appspot.com",
    messagingSenderId: "1072481683601",
    appId: "1:1072481683601:web:3bd711d0af7f3e4d1c1730"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);