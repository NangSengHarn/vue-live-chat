import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDqqF9LTGRJekZi99L7VHbqDo7eMUekrZM",
    authDomain: "vue-content-post.firebaseapp.com",
    projectId: "vue-content-post",
    storageBucket: "vue-content-post.appspot.com",
    messagingSenderId: "145454486093",
    appId: "1:145454486093:web:5ffe02e40b0c2284194204"
  };

firebase.initializeApp(firebaseConfig);

let db =firebase.firestore();
let auth= firebase.auth();
let timestamp= firebase.firestore.FieldValue.serverTimestamp;

export {db,timestamp,auth};