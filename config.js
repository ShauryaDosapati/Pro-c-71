import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCohYUmgkiWfu4paqV8maetgWREm7Km9mY",
    authDomain: "pro-c-71-f1452.firebaseapp.com",
    projectId: "pro-c-71-f1452",
    storageBucket: "pro-c-71-f1452.appspot.com",
    messagingSenderId: "1068309774115",
    appId: "1:1068309774115:web:755f218e2dde5706379696"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
