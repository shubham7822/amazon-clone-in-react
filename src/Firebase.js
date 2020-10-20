import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyANsZY2e1b-TGTofV6eFw3hKIijqWIR7hg",
  authDomain: "clone-a6e91.firebaseapp.com",
  databaseURL: "https://clone-a6e91.firebaseio.com",
  projectId: "clone-a6e91",
  storageBucket: "clone-a6e91.appspot.com",
  messagingSenderId: "105163545185",
  appId: "1:105163545185:web:90fb237d3109d104d22820",
  measurementId: "G-JJX8BEGC9V",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
