// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSOmWkPbsUu2kRu2pRkaQwuHcuHDc1_sk",
  authDomain: "fir-a480b.firebaseapp.com",
  projectId: "fir-a480b",
  storageBucket: "fir-a480b.appspot.com",
  messagingSenderId: "221028203652",
  appId: "1:221028203652:web:74d2282349105d9b5b56d1",
  measurementId: "G-KSY0BBZZ6Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };