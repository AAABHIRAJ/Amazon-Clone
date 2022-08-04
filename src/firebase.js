// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArLBCmlkXQzEykxhlpE2fK6dGcIwg40uI",
  authDomain: "clone-c1daf.firebaseapp.com",
  projectId: "clone-c1daf",
  storageBucket: "clone-c1daf.appspot.com",
  messagingSenderId: "945717722871",
  appId: "1:945717722871:web:a8458c2138fbf9d00a1df2",
  measurementId: "G-JL06MLC7MT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

 