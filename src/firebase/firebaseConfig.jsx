import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB5egBC_zl2cwl9KoCyEp5cKlUy-Eg0d4c",
    authDomain: "workshop-3-aa694.firebaseapp.com",
    projectId: "workshop-3-aa694",
    storageBucket: "workshop-3-aa694.appspot.com",
    messagingSenderId: "385296329772",
    appId: "1:385296329772:web:ed17aa587d98fa70307589"
};

const app = initializeApp(firebaseConfig);
export const Google = new GoogleAuthProvider()
export const DB = getFirestore()

export default app;