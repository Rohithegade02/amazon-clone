import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVNk47w3EXAAdlPMnWvBSWdeGgVKR4z5U",
  authDomain: "clone-17862.firebaseapp.com",
  projectId: "clone-17862",
  storageBucket: "clone-17862.appspot.com",
  messagingSenderId: "191260196743",
  appId: "1:191260196743:web:77835c0ecabf3bbd3d5d22",
  measurementId: "G-17TR14X5PX",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
